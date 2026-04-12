import { NextResponse } from "next/server";
import { MAGNETS, buildMagnetEmailHtml } from "./magnets";

/**
 * Unified Brevo subscribe endpoint.
 *
 * Flow:
 *  - Client posts { email, sourcePage, sourceType, firstMagnet?, visaRoute?,
 *    visaRouteName?, visaAnswers? }
 *  - We add the contact to the DX PENDING list with full attributes.
 *  - We immediately send the magnet delivery email via Brevo's
 *    transactional /v3/smtp/email endpoint (inline HTML, looked up from
 *    the MAGNETS config). No Brevo Automations or templates are used —
 *    the email body is version-controlled in ./magnets.ts.
 *
 * Note: we skip double-opt-in. The lead magnet IS the consent — they
 * typed their email to get the PDF. A weekly newsletter will run as a
 * separate marketing campaign, and every email has an unsubscribe link.
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
 * IMPORTANT: Brevo does NOT auto-create contact attributes. Any attribute
 * written via POST /v3/contacts that isn't already declared in the schema
 * is silently dropped. All attributes used here (including the VISA_*
 * fields) have been pre-declared in Brevo as type "text" via
 * POST /v3/contacts/attributes/normal/{NAME}.
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

    // Magnet delivery — look up the magnet by slug and send the email
    // inline via Brevo's transactional endpoint. This is the ONLY email
    // the user receives from this endpoint. No Automations, no DOI.
    const magnetKey = firstMagnet || "dx-relocation-checklist";
    const magnet = MAGNETS[magnetKey];
    if (magnet) {
      try {
        const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "api-key": apiKey,
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            sender: {
              name: "Dubai Expat",
              email: "partnerships@dubaiexpat.co.uk",
            },
            to: [{ email }],
            subject: magnet.subject,
            htmlContent: buildMagnetEmailHtml(magnet),
            tags: ["magnet-delivery", magnetKey],
          }),
        });
        if (!emailRes.ok) {
          const errText = await emailRes.text().catch(() => "");
          console.error(
            "Brevo magnet email failed:",
            emailRes.status,
            errText
          );
        }
      } catch (emailErr) {
        console.error("Brevo magnet email exception:", emailErr);
      }
    } else {
      console.warn(
        `No magnet config found for slug: ${magnetKey}. Email not sent.`
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ ok: true });
  }
}
