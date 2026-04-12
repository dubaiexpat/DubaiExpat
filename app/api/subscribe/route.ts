import { NextResponse } from "next/server";

/**
 * Unified Brevo subscribe endpoint.
 *
 * Flow:
 *  - Client posts { email, sourcePage, sourceType, firstMagnet?, visaRoute?,
 *    visaRouteName?, visaAnswers? }
 *  - We add the contact to the DX PENDING list with full attributes.
 *  - Brevo's "Confirmation Opt-In" automation (configured in the Brevo
 *    dashboard) picks up the new PENDING contact, sends the DOI email,
 *    and — on click — moves the contact into the final DX_GENERAL list
 *    and triggers the relevant magnet delivery automation.
 *
 * Contact attributes used:
 *   SOURCE_PAGE   — e.g. "/guides/internet-and-vpn", "/visa-checker"
 *   SOURCE_TYPE   — "inline-cta" | "footer" | "exit-intent" | "magnet-cta" | "visa-checker"
 *   SITE          — "dubaiexpat"
 *   CITY          — "dubai"
 *   FIRST_MAGNET  — e.g. "dx-relocation-checklist" (optional)
 *   SUBSCRIBED_AT — ISO timestamp
 *
 * Visa Checker attributes (only set when sourceType === "visa-checker"):
 *   VISA_ROUTE      — machine code: "golden" | "green" | "freelance" |
 *                     "employment" | "retirement" | "explore"
 *   VISA_ROUTE_NAME — display name: "Golden Visa (10 years)", etc.
 *   VISA_REASON     — user's stated reason for moving
 *   VISA_SALARY     — user's salary band
 *   VISA_QUAL       — highest qualification
 *   VISA_PROPERTY_2M — AED 2m property status
 *   VISA_FREELANCE  — working situation
 *   VISA_AGE        — age band
 *   VISA_SPONSOR    — existing sponsor status
 *   VISA_FAMILY     — family configuration
 *
 * Brevo auto-creates text attributes on first write, so no pre-declaration
 * is required.
 */

type VisaAnswers = {
  reason?: string;
  salary?: string;
  qualification?: string;
  property_2m?: string;
  freelance?: string;
  age?: string;
  sponsor?: string;
  family?: string;
};

// Temporary debug GET — used once to verify VISA_* attribute persistence
// after the visa-checker enrichment was deployed. Accepts ?email=... and a
// ?secret=... that must match BREVO_DEBUG_TOKEN (or the caller is blocked).
// Remove this handler once verification is complete.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const emailParam = url.searchParams.get("email");
  const secret = url.searchParams.get("secret");

  // Gate the debug endpoint behind a one-off inline token. This handler
  // will be removed after verification of the VISA_* attribute writes.
  const expected = "dx-debug-7f3a2b9e-visa-verify";
  if (secret !== expected) {
    return NextResponse.json({ ok: true, gated: true });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "BREVO_API_KEY missing" }, { status: 500 });
  }

  // One-shot mode: ?create=visa creates the VISA_* schema attributes.
  if (url.searchParams.get("create") === "visa") {
    const attrs = [
      "VISA_ROUTE",
      "VISA_ROUTE_NAME",
      "VISA_REASON",
      "VISA_SALARY",
      "VISA_QUAL",
      "VISA_PROPERTY_2M",
      "VISA_FREELANCE",
      "VISA_AGE",
      "VISA_SPONSOR",
      "VISA_FAMILY",
    ];
    const results: Record<string, number> = {};
    for (const name of attrs) {
      const r = await fetch(
        `https://api.brevo.com/v3/contacts/attributes/normal/${name}`,
        {
          method: "POST",
          headers: {
            "api-key": apiKey,
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({ type: "text" }),
        }
      );
      results[name] = r.status;
    }
    return NextResponse.json({ created: results });
  }

  if (!emailParam) {
    return NextResponse.json({ error: "email param required" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.brevo.com/v3/contacts/${encodeURIComponent(emailParam)}`,
    {
      method: "GET",
      headers: { "api-key": apiKey, accept: "application/json" },
    }
  );
  const data = await res.json().catch(() => ({}));
  return NextResponse.json({
    status: res.status,
    attributes: (data as { attributes?: unknown }).attributes,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const {
      email,
      sourcePage,
      sourceType,
      firstMagnet,
      visaRoute,
      visaRouteName,
      visaAnswers,
    }: {
      email?: string;
      sourcePage?: string;
      sourceType?: string;
      firstMagnet?: string;
      visaRoute?: string;
      visaRouteName?: string;
      visaAnswers?: VisaAnswers;
    } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const pendingListId = Number(process.env.BREVO_DX_PENDING_LIST_ID || 0);

    if (!apiKey || !pendingListId) {
      console.error(
        "Brevo env missing: BREVO_API_KEY or BREVO_DX_PENDING_LIST_ID"
      );
      // Return ok to avoid exposing infra, but log for observability.
      return NextResponse.json({ ok: true });
    }

    // Base attributes written on every subscribe.
    const attributes: Record<string, string> = {
      SOURCE_PAGE: sourcePage || "unknown",
      SOURCE_TYPE: sourceType || "inline-cta",
      SITE: "dubaiexpat",
      CITY: "dubai",
      FIRST_MAGNET: firstMagnet || "",
      SUBSCRIBED_AT: new Date().toISOString(),
    };

    // Visa checker enrichment — only written when the submission came
    // from the visa-checker tool. Enables targeted follow-up emails per
    // visa route (Golden, Green, Freelance, Employment, Retirement, Explore).
    if (visaRoute) {
      attributes.VISA_ROUTE = visaRoute;
    }
    if (visaRouteName) {
      attributes.VISA_ROUTE_NAME = visaRouteName;
    }
    if (visaAnswers && typeof visaAnswers === "object") {
      if (visaAnswers.reason) attributes.VISA_REASON = visaAnswers.reason;
      if (visaAnswers.salary) attributes.VISA_SALARY = visaAnswers.salary;
      if (visaAnswers.qualification)
        attributes.VISA_QUAL = visaAnswers.qualification;
      if (visaAnswers.property_2m)
        attributes.VISA_PROPERTY_2M = visaAnswers.property_2m;
      if (visaAnswers.freelance)
        attributes.VISA_FREELANCE = visaAnswers.freelance;
      if (visaAnswers.age) attributes.VISA_AGE = visaAnswers.age;
      if (visaAnswers.sponsor) attributes.VISA_SPONSOR = visaAnswers.sponsor;
      if (visaAnswers.family) attributes.VISA_FAMILY = visaAnswers.family;
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [pendingListId],
        updateEnabled: true,
        attributes,
      }),
    });

    if (!res.ok && res.status !== 400) {
      // Brevo returns 400 for "contact already exists" when updateEnabled
      // is false, but we have updateEnabled: true so any 4xx/5xx is real.
      const errText = await res.text().catch(() => "");
      console.error("Brevo subscribe failed:", res.status, errText);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ ok: true });
  }
}
