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
 *
 * 27 Apr 2026 update: each magnet now ships with site-link recommendations
 * and (where natural) affiliate placements with disclosure. Plain-text
 * version generated for deliverability (improves Promotions-tab placement).
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
  /** Inline links back to relevant site guides (rendered as text bullets with UTM tags) */
  siteLinks?: Array<{ label: string; path: string }>;
  /** Affiliate placements with disclosure footer; only include programmes we actually have approved */
  affiliateLinks?: Array<{ label: string; href: string; reason: string }>;
};

export type VisaContext = {
  routeName: string; // e.g. "Golden Visa (10 years)"
  summary: string;
  nextSteps: string[];
};

export const SITE_BASE_URL = "https://www.dubaiexpat.co.uk";
const SENDER_NAME = "Patrick at Dubai Expat";
const SENDER_EMAIL = "patrick@dubaiexpat.co.uk";
const REPLY_TO_EMAIL = "newmediaworldpte@gmail.com";

// Affiliate URL helpers — keep tracking suffixes unique per placement
const NORDVPN = (sub: string) =>
  `https://go.nordvpn.net/aff_c?offer_id=15&aff_id=145336&source=dx&aff_sub=email-magnet-${sub}`;
const SAFETYWING = (campaign: string) =>
  `https://safetywing.com/?referenceID=26507814&utm_source=dx&utm_medium=Ambassador&utm_campaign=email-magnet-${campaign}`;

export const MAGNETS: Record<string, MagnetConfig> = {
  "dx-relocation-checklist": {
    subject: "Your UK→Dubai Relocation Checklist (+ a couple of things you'll want next)",
    pdfPath: "/magnets/dx-relocation-checklist.pdf",
    displayName: "UK to Dubai Relocation Checklist",
    intro:
      "Thanks for signing up. Here's your UK to Dubai Relocation Checklist — a practical, step-by-step guide covering visas, banking, housing, shipping, schools, and the first-90-days admin most people miss.",
    siteLinks: [
      { label: "Visa & Residency: which route fits you", path: "/guides/visa-residency" },
      { label: "Moving money UK to Dubai (the Wise playbook)", path: "/articles/moving-money-uk-to-dubai-wise-revolut-guide" },
      { label: "UK Tax Exit & HMRC for Dubai expats", path: "/guides/tax-and-hmrc" },
      { label: "Internet & VPN setup for Dubai", path: "/guides/internet-and-vpn" },
    ],
    affiliateLinks: [
      { label: "NordVPN", href: NORDVPN("relocation-checklist"), reason: "keeps your UK banking apps working from Dubai during the first 90 days" },
      { label: "SafetyWing", href: SAFETYWING("relocation-checklist"), reason: "gap health insurance to cover the move week before your UAE visa-linked cover kicks in" },
    ],
  },
  "dx-budget-planner": {
    subject: "Your Dubai Budget Planner (+ what most expats underestimate)",
    pdfPath: "/magnets/dx-budget-planner.pdf",
    displayName: "Dubai Budget Planner",
    intro:
      "Here's your Dubai Budget Planner — a side-by-side UK vs Dubai cost comparison covering housing, utilities, transport, food, education, healthcare, and lifestyle. Fill in the 'Your Budget' column to build a realistic picture of what your move will cost.",
    siteLinks: [
      { label: "Hidden costs of Dubai life (the ones nobody warns you about)", path: "/articles/hidden-costs-of-dubai-life" },
      { label: "Expat health insurance — what your visa actually covers", path: "/articles/expat-health-insurance-dubai" },
      { label: "Best British schools in Dubai (with real fee bands)", path: "/articles/best-british-schools-dubai-uk-expats-2026" },
    ],
    affiliateLinks: [
      { label: "SafetyWing", href: SAFETYWING("budget-planner"), reason: "covers the gap if you arrive before your employer's cover starts (and gives you a real number to slot into the planner)" },
    ],
  },
  "dx-tax-exit-checklist": {
    subject: "Your UK Tax Exit Checklist (+ the SRT trap most expats miss)",
    pdfPath: "/magnets/dx-tax-exit-checklist.pdf",
    displayName: "UK Tax Exit Checklist",
    intro:
      "Here's your UK Tax Exit Checklist — a step-by-step guide to everything you need to sort with HMRC before and after your move to Dubai, including P85 filing, National Insurance decisions, and the key deadlines you can't miss.",
    siteLinks: [
      { label: "UK Tax Residency Rules for Dubai Expats — the SRT deep dive", path: "/articles/uk-tax-residency-rules-dubai-expats" },
      { label: "UK Pension Options once you're a Dubai resident", path: "/articles/uk-pension-options-dubai" },
      { label: "Moving money to Dubai without losing it on FX", path: "/articles/moving-money-uk-to-dubai-wise-revolut-guide" },
    ],
  },
  "dx-pension-guide": {
    subject: "Your UK Pension Guide for Dubai Expats (+ the QROPS warning)",
    pdfPath: "/magnets/dx-pension-guide.pdf",
    displayName: "UK Pension Guide for Dubai Expats",
    intro:
      "Here's your pension guide — covering your UK State Pension, workplace pensions, and the key decisions you need to make as a Dubai expat. Includes an action plan and warnings about common mistakes like QROPS transfers.",
    siteLinks: [
      { label: "UK Tax Residency Rules — the SRT decision tree", path: "/articles/uk-tax-residency-rules-dubai-expats" },
      { label: "Moving money to Dubai once you're paid in AED", path: "/articles/moving-money-uk-to-dubai-wise-revolut-guide" },
      { label: "Buying property in Dubai (and what it does to your pension picture)", path: "/articles/buying-property-dubai-british-expat" },
    ],
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

/** Build a UTM-tagged absolute URL for a site-link recommendation. */
function siteLinkUrl(magnetSlug: string, path: string): string {
  const sep = path.includes("?") ? "&" : "?";
  return `${SITE_BASE_URL}${path}${sep}utm_source=email&utm_medium=magnet&utm_campaign=${magnetSlug}`;
}

/** Sender details exported so the subscribe route stays in sync with the template. */
export const EMAIL_SENDER = { name: SENDER_NAME, email: SENDER_EMAIL };
export const EMAIL_REPLY_TO = { email: REPLY_TO_EMAIL, name: "Patrick at Dubai Expat" };

/**
 * Build the HTML body for a magnet delivery email.
 * When visaContext is provided (visa-checker submissions), the email
 * leads with a personalised visa recommendation before the PDF link.
 */
export function buildMagnetEmailHtml(
  magnet: MagnetConfig,
  visaContext?: VisaContext,
  magnetSlug?: string
): string {
  const slug = magnetSlug || "magnet";
  const pdfUrl = `${SITE_BASE_URL}${magnet.pdfPath}`;

  // Visa recommendation block (visa-checker subs only)
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
            <tr><td style="padding:24px 24px 8px 24px;"><p style="margin:0;color:#C9A84C;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Your Visa Recommendation</p><h2 style="margin:8px 0 0 0;color:#ffffff;font-size:22px;line-height:1.3;">${visaContext.routeName}</h2></td></tr>
            <tr><td style="padding:8px 24px 16px 24px;"><p style="margin:0;color:#cbd5e1;font-size:14px;line-height:1.6;">${visaContext.summary}</p></td></tr>
            <tr><td style="padding:0 24px 24px 24px;"><p style="margin:0 0 8px 0;color:#ffffff;font-size:14px;font-weight:600;">Your next steps:</p><table role="presentation" cellpadding="0" cellspacing="0">${stepsHtml}</table></td></tr>
          </table>
        </td>
      </tr>`;
  }

  // Site-link recommendations block
  let siteLinksBlock = "";
  if (magnet.siteLinks && magnet.siteLinks.length > 0) {
    const items = magnet.siteLinks
      .map(
        (l) =>
          `<li style="margin-bottom:6px;"><a href="${siteLinkUrl(slug, l.path)}" style="color:#c8102e;text-decoration:underline;">${l.label}</a></li>`
      )
      .join("");
    siteLinksBlock = `
      <tr>
        <td style="padding:8px 32px 16px 32px;color:#333;font-size:15px;line-height:1.6;">
          <p style="margin:0 0 8px 0;"><strong>While you're at it, these guides on the site might help:</strong></p>
          <ul style="margin:0 0 0 0;padding-left:20px;">${items}</ul>
        </td>
      </tr>`;
  }

  // Affiliate placements block (with disclosure)
  let affiliateBlock = "";
  if (magnet.affiliateLinks && magnet.affiliateLinks.length > 0) {
    const items = magnet.affiliateLinks
      .map(
        (l) =>
          `<p style="margin:0 0 8px 0;color:#333;font-size:14px;line-height:1.5;"><a href="${l.href}" style="color:#c8102e;text-decoration:underline;font-weight:600;">${l.label}</a> &mdash; ${l.reason}</p>`
      )
      .join("");
    affiliateBlock = `
      <tr>
        <td style="padding:8px 32px 16px 32px;border-top:1px solid #f0f0f0;">
          <p style="margin:0 0 10px 0;color:#0A1628;font-size:15px;font-weight:600;">Tools we use ourselves</p>
          ${items}
          <p style="margin:8px 0 0 0;color:#888;font-size:12px;line-height:1.4;font-style:italic;">These are affiliate links &mdash; we may earn a small commission at no extra cost to you. We only recommend tools we use ourselves.</p>
        </td>
      </tr>`;
  }

  return `<!doctype html>
<html>
  <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#f5f5f5;margin:0;padding:24px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;">
      <tr><td style="padding:32px 32px 16px 32px;"><h1 style="margin:0 0 16px 0;color:#111;font-size:24px;line-height:1.3;">${visaContext ? `${visaContext.routeName} — Your Result` : magnet.displayName}</h1><p style="margin:0 0 16px 0;color:#333;font-size:16px;line-height:1.5;">${magnet.intro}</p></td></tr>${visaBlock}
      <tr><td style="padding:8px 32px 24px 32px;"><a href="${pdfUrl}" style="display:inline-block;background:#c8102e;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:6px;font-weight:600;font-size:16px;">Download the PDF &rarr;</a></td></tr>
      <tr><td style="padding:8px 32px 16px 32px;color:#555;font-size:13px;line-height:1.5;">If the button doesn't work, paste this link into your browser:<br/><a href="${pdfUrl}" style="color:#c8102e;">${pdfUrl}</a></td></tr>${siteLinksBlock}${affiliateBlock}
      <tr><td style="padding:16px 32px 8px 32px;color:#333;font-size:15px;line-height:1.6;"><p style="margin:0 0 4px 0;">Best,</p><p style="margin:0;"><strong>Patrick</strong><br/><span style="color:#666;font-size:13px;">Dubai Expat</span></p></td></tr>
      <tr><td style="padding:8px 32px 24px 32px;color:#777;font-size:12px;line-height:1.5;"><p style="margin:0 0 8px 0;">You'll start getting our Dubai expat newsletter roughly once a week. Unsubscribe any time &mdash; there's a link in every email.</p><p style="margin:0;font-style:italic;">Tip: add <a href="mailto:${SENDER_EMAIL}" style="color:#777;">${SENDER_EMAIL}</a> to your contacts so future emails reach your inbox rather than the Promotions tab.</p></td></tr>
      <tr><td style="padding:16px 32px 32px 32px;border-top:1px solid #eee;color:#777;font-size:12px;line-height:1.4;">Dubai Expat &middot; <a href="${SITE_BASE_URL}" style="color:#777;">dubaiexpat.co.uk</a></td></tr>
    </table>
  </body>
</html>`;
}

/**
 * Plain-text fallback for the magnet email.
 * Improves Promotions-tab placement (Gmail favours multipart/alternative)
 * and is the body shown when an inbox doesn't render HTML.
 */
export function buildMagnetEmailText(
  magnet: MagnetConfig,
  visaContext?: VisaContext,
  magnetSlug?: string
): string {
  const slug = magnetSlug || "magnet";
  const pdfUrl = `${SITE_BASE_URL}${magnet.pdfPath}`;
  const lines: string[] = [];

  lines.push(`Hi,\n`);
  if (visaContext) {
    lines.push(`Your visa recommendation: ${visaContext.routeName}\n`);
    lines.push(`${visaContext.summary}\n`);
    lines.push(`Next steps:`);
    visaContext.nextSteps.forEach((s, i) => lines.push(`  ${i + 1}. ${s}`));
    lines.push("");
  }
  lines.push(`Your ${magnet.displayName}:`);
  lines.push(pdfUrl);
  lines.push("");
  lines.push(magnet.intro);
  lines.push("");

  if (magnet.siteLinks && magnet.siteLinks.length > 0) {
    lines.push(`While you're at it, these guides might help:`);
    magnet.siteLinks.forEach((l) =>
      lines.push(`  - ${l.label}: ${siteLinkUrl(slug, l.path)}`)
    );
    lines.push("");
  }
  if (magnet.affiliateLinks && magnet.affiliateLinks.length > 0) {
    lines.push(`Tools we use ourselves:`);
    magnet.affiliateLinks.forEach((l) =>
      lines.push(`  - ${l.label} (${l.reason}): ${l.href}`)
    );
    lines.push(
      `(Affiliate links — we may earn a small commission at no extra cost.)`
    );
    lines.push("");
  }
  lines.push(`Best,`);
  lines.push(`Patrick`);
  lines.push(`Dubai Expat`);
  lines.push("");
  lines.push(
    `You'll start getting our Dubai expat newsletter roughly once a week. Unsubscribe any time.`
  );
  lines.push(
    `Tip: add ${SENDER_EMAIL} to your contacts so future emails reach your inbox.`
  );
  return lines.join("\n");
}
