/**
 * Magnet delivery configuration for Dubai Expat.
 *
 * One entry per lead magnet. The /api/subscribe route looks up the
 * magnet by `firstMagnet` slug, then sends a transactional email via
 * Brevo's POST /v3/smtp/email endpoint with inline HTML and a link to
 * the PDF hosted on the site's /public/magnets/ folder.
 *
 * No Brevo Automations or templates are required — the email body is
 * version-controlled here alongside the code that sends it.
 */

export type MagnetConfig = {
  /** Brevo subject line */
  subject: string;
  /** Absolute URL to the PDF (built from NEXT_PUBLIC_SITE_URL + path) */
  pdfPath: string;
  /** Friendly display name shown in the email body */
  displayName: string;
  /** Short intro paragraph shown above the download button */
  intro: string;
};

export type VisaContext = {
  routeName: string; // e.g. "Golden Visa (10 years)"
  summary: string;
  nextSteps: string[];
};

export const SITE_BASE_URL = "https://www.dubaiexpat.co.uk";

export const MAGNETS: Record<string, MagnetConfig> = {
  "dx-relocation-checklist": {
    subject: "Your UK to Dubai Relocation Checklist is ready",
    pdfPath: "/magnets/dx-relocation-checklist.pdf",
    displayName: "UK to Dubai Relocation Checklist",
    intro:
      "Thanks for signing up. Here's your UK to Dubai Relocation Checklist — a practical, step-by-step guide covering visas, banking, housing, shipping, schools, and the first-90-days admin most people miss.",
  },
};

/**
 * Visa route details — used to enrich the magnet email when the
 * subscriber came via the visa checker. Kept in sync with the
 * VISA_DETAILS object in app/visa-checker/page.tsx.
 */
export const VISA_EMAIL_DETAILS: Record<
  string,
  { summary: string; nextSteps: string[] }
> = {
  golden: {
    summary:
      "The Golden Visa gives you 10-year residency with no employer sponsor needed. You can live, work, and study in the UAE with the freedom to enter and exit as you please. Your family can be sponsored under the same visa.",
    nextSteps: [
      "Gather qualification certificates (attested by your home country + UAE embassy)",
      "Prepare proof of income or property ownership",
      "Apply through ICP or GDRFA — processing takes 2\u20134 weeks",
      "Speak to a visa specialist for document attestation guidance",
    ],
  },
  green: {
    summary:
      "The Green Visa offers 5-year self-sponsored residency — no employer needed. Ideal for skilled professionals and freelancers earning a steady income. You can sponsor your family and have a 6-month grace period if it lapses.",
    nextSteps: [
      "Confirm your qualification meets the approved occupations list",
      "Prepare salary evidence (contract or bank statements)",
      "Apply via the ICA smart services portal",
      "Budget around AED 2,500\u20133,500 for processing fees",
    ],
  },
  freelance: {
    summary:
      "The Freelance Visa lets you work independently in the UAE for 2 years. You\u2019ll register through a free zone and receive a residence visa, Emirates ID, and the ability to sponsor dependants.",
    nextSteps: [
      "Choose a free zone (popular: Dubai Media City, DMCC, IFZA)",
      "Prepare a portfolio or proof of freelance experience",
      "Budget AED 7,500\u201315,000 for the free zone licence + visa package",
      "A free zone consultant can help you compare options",
    ],
  },
  employment: {
    summary:
      "Your employer will sponsor your Employment Visa (2\u20133 years). They handle most of the paperwork and costs. You\u2019ll receive a residence visa, Emirates ID, and labour card.",
    nextSteps: [
      "Get your offer letter and employment contract finalised",
      "Have your degree certificates attested (home country + UAE embassy)",
      "Complete a medical fitness test on arrival in Dubai",
      "Your employer\u2019s PRO will guide you through the process",
    ],
  },
  retirement: {
    summary:
      "The Retirement Visa gives you 5-year renewable residency if you\u2019re 55 or over. You\u2019ll need to meet one of the financial requirements: property worth AED 2M, savings of AED 1M, or active income of AED 20,000/month.",
    nextSteps: [
      "Choose which financial requirement you\u2019ll meet (property, savings, or income)",
      "Prepare supporting documents (bank statements, title deeds, pension letters)",
      "Apply through the GDRFA portal or a registered typing centre",
      "Consider speaking to a UAE retirement planning specialist",
    ],
  },
  explore: {
    summary:
      "Based on your answers, several visa routes could work for you. The best option depends on factors like your exact income, qualifications, and whether you plan to be employed or self-employed in the UAE.",
    nextSteps: [
      "Review the different visa categories in your relocation checklist",
      "Consider whether employment, freelance, or investor visas suit your situation",
      "A free consultation with a visa specialist can clarify the best route",
      "Start gathering your qualification and financial documents now",
    ],
  },
};

/**
 * Build the HTML body for a magnet delivery email.
 * When visaContext is provided (visa-checker submissions), the email
 * leads with a personalised visa recommendation before the PDF link.
 */
export function buildMagnetEmailHtml(
  magnet: MagnetConfig,
  visaContext?: VisaContext
): string {
  const pdfUrl = `${SITE_BASE_URL}${magnet.pdfPath}`;

  // Build the visa recommendation block (only for visa-checker subs)
  let visaBlock = "";
  if (visaContext) {
    const stepsHtml = visaContext.nextSteps
      .map(
        (s, i) =>
          `<tr><td style="padding:4px 0;vertical-align:top;width:28px;color:#C9A84C;font-weight:bold;font-size:14px;">${i + 1}.</td><td style="padding:4px 0;color:#333;font-size:14px;line-height:1.5;">${s}</td></tr>`
      )
      .join("");

    visaBlock = `
      <tr>
        <td style="padding:0 32px 24px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0A1628;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:24px 24px 8px 24px;">
                <p style="margin:0;color:#C9A84C;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Your Visa Recommendation</p>
                <h2 style="margin:8px 0 0 0;color:#ffffff;font-size:22px;line-height:1.3;">${visaContext.routeName}</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 24px 16px 24px;">
                <p style="margin:0;color:#cbd5e1;font-size:14px;line-height:1.6;">${visaContext.summary}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 24px 24px;">
                <p style="margin:0 0 8px 0;color:#ffffff;font-size:14px;font-weight:600;">Your next steps:</p>
                <table role="presentation" cellpadding="0" cellspacing="0">${stepsHtml}</table>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;
  }

  return `<!doctype html>
<html>
  <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#f5f5f5;margin:0;padding:24px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;">
      <tr>
        <td style="padding:32px 32px 16px 32px;">
          <h1 style="margin:0 0 16px 0;color:#111;font-size:24px;line-height:1.3;">${visaContext ? `${visaContext.routeName} — Your Result` : magnet.displayName}</h1>
          <p style="margin:0 0 16px 0;color:#333;font-size:16px;line-height:1.5;">${magnet.intro}</p>
        </td>
      </tr>${visaBlock}
      <tr>
        <td style="padding:8px 32px 24px 32px;">
          <a href="${pdfUrl}" style="display:inline-block;background:#c8102e;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:6px;font-weight:600;font-size:16px;">Download the PDF &rarr;</a>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 32px 24px 32px;color:#555;font-size:14px;line-height:1.5;">
          <p style="margin:0 0 12px 0;">If the button doesn't work, paste this link into your browser:<br/><a href="${pdfUrl}" style="color:#c8102e;">${pdfUrl}</a></p>
          <p style="margin:0;">You'll start getting our Dubai expat newsletter roughly once a week. Unsubscribe any time — there's a link in every email.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 32px 32px 32px;border-top:1px solid #eee;color:#777;font-size:12px;line-height:1.4;">
          Dubai Expat &middot; <a href="${SITE_BASE_URL}" style="color:#777;">dubaiexpat.co.uk</a>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
