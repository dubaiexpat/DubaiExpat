import { NextResponse } from "next/server";

/**
 * Unified Brevo subscribe endpoint.
 *
 * Flow:
 *  - Client posts { email, sourcePage, sourceType, firstMagnet? }
 *  - We add the contact to the DX PENDING list with full attributes.
 *  - Brevo's "Confirmation Opt-In" automation (configured in the Brevo
 *    dashboard) picks up the new PENDING contact, sends the DOI email,
 *    and — on click — moves the contact into the final DX_GENERAL list
 *    and triggers the relevant magnet delivery automation.
 *
 * Contact attributes used:
 *   SOURCE_PAGE  — e.g. "/guides/internet-and-vpn", "/move/visa"
 *   SOURCE_TYPE  — "inline-cta" | "footer" | "exit-intent" | "magnet-cta"
 *   SITE         — "dubaiexpat"
 *   CITY         — "dubai"
 *   FIRST_MAGNET — e.g. "dx-relocation-checklist" (optional)
 *   SUBSCRIBED_AT — ISO timestamp
 */

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const {
      email,
      sourcePage,
      sourceType,
      firstMagnet,
    }: {
      email?: string;
      sourcePage?: string;
      sourceType?: string;
      firstMagnet?: string;
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
        attributes: {
          SOURCE_PAGE: sourcePage || "unknown",
          SOURCE_TYPE: sourceType || "inline-cta",
          SITE: "dubaiexpat",
          CITY: "dubai",
          FIRST_MAGNET: firstMagnet || "",
          SUBSCRIBED_AT: new Date().toISOString(),
        },
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
