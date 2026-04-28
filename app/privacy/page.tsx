import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import SchemaJsonLd from "@/components/SchemaJsonLd";

const TITLE = "Privacy Policy";
const DESCRIPTION = "How Dubai Expat collects, uses and protects your personal data. Covers UK GDPR, PECR and UAE PDPL compliance.";
const URL_ABS = "https://www.dubaiexpat.co.uk/privacy";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/privacy",
  type: "website",
});

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-50 text-slate-900">
      <SchemaJsonLd
        type="WebPage"
        title={TITLE}
        description={DESCRIPTION}
        url={URL_ABS}
        breadcrumbs={[
          { name: "Home", url: "https://www.dubaiexpat.co.uk/" },
          { name: "Privacy Policy", url: URL_ABS },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="mb-8">
          <Header />
        </header>

        <main className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: 5 April 2026</p>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm not-prose mb-6">
            <strong>Scope:</strong> This policy applies to users of{" "}
            <Link href="https://www.dubaiexpat.co.uk" className="text-[#C9A84C] underline">www.dubaiexpat.co.uk</Link>.
            This site primarily targets UK residents and British expats relocating to Dubai and the UAE. This policy is written to comply with the UK General Data Protection Regulation (UK GDPR), the Privacy and Electronic Communications Regulations (PECR), and the UAE Personal Data Protection Law (PDPL) where applicable.
          </div>

          <h2>1. Who We Are</h2>
          <p>
            Dubai Expat is operated by <strong>NewMediaWorld Pte. Ltd.</strong>, a company incorporated in Singapore.
          </p>
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td className="font-semibold border-b border-slate-100 py-2 pr-4">Privacy contact</td>
                <td className="border-b border-slate-100 py-2">partnerships@dubaiexpat.co.uk</td>
              </tr>
            </tbody>
          </table>
          <p>
            For the purposes of UK data-protection law, NewMediaWorld Pte. Ltd. is the data controller.
          </p>

          <h2>2. What Data We Collect</h2>
          <p>We collect and use your personal data only for the purposes described in this policy and, where required, with your consent or another lawful basis permitted by applicable law.</p>
          <ul>
            <li><strong>Information you provide</strong> — email address and, where applicable, your nationality and purpose of visit when using our Visa Checker tool.</li>
            <li><strong>Usage data</strong> — pages visited, time on site, referral source, device type and browser. This is collected via cookies and analytics tools only with your consent.</li>
            <li><strong>Communication data</strong> — any information you include when you contact us by email.</li>
          </ul>

          <h2>3. Why We Collect It &amp; Legal Basis</h2>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Purpose</th>
                <th className="text-left">Data involved</th>
                <th className="text-left">Legal Basis (UK GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Provide our tools and guides</td>
                <td>Usage data</td>
                <td>Legitimate interest in operating the site</td>
              </tr>
              <tr>
                <td>Deliver Visa Checker results</td>
                <td>Nationality, purpose of visit</td>
                <td>Legitimate interest (providing the tool you requested)</td>
              </tr>
              <tr>
                <td>Send marketing emails</td>
                <td>Email address</td>
                <td>Consent (explicit opt-in)</td>
              </tr>
              <tr>
                <td>Analyse site usage</td>
                <td>Anonymised usage data</td>
                <td>Consent (via cookie banner)</td>
              </tr>
              <tr>
                <td>Respond to enquiries</td>
                <td>Email address, message content</td>
                <td>Legitimate interest</td>
              </tr>
            </tbody>
          </table>
          <p>
            We do not use your personal data for any purpose other than those described above. If we wish to use your data for a new purpose, we will notify you and, where required, seek your consent.
          </p>

          <h2>4. Marketing Emails</h2>
          <p>
            We will send marketing emails only where you have separately opted in by ticking the consent checkbox. The checkbox is unchecked by default. You can withdraw consent at any time by clicking the unsubscribe link in any email or emailing partnerships@dubaiexpat.co.uk. We will stop sending marketing emails without delay, in compliance with PECR.
          </p>

          <h2>5. Cookies and Tracking</h2>
          <p>
            We use cookies on this site. Consent for cookies is separate from consent for marketing emails. In accordance with PECR, we do not set optional cookies (analytics or marketing) until you have given consent via our cookie banner. Essential cookies are exempt as they are strictly necessary.
          </p>
          <p>
            For full details including a list of specific cookies, see our{" "}
            <Link href="/cookies" className="text-[#C9A84C] underline">Cookie Policy</Link>.
          </p>

          <h2>6. Who We Share Data With</h2>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Recipient</th>
                <th className="text-left">Purpose</th>
                <th className="text-left">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kit (formerly ConvertKit)</td>
                <td>Email delivery and subscriber management</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Google Analytics</td>
                <td>Anonymised site usage analysis</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Vercel</td>
                <td>Website hosting</td>
                <td>United States</td>
              </tr>
            </tbody>
          </table>
          <p>
            When you click an affiliate link, the destination site may set its own cookies. We do not share your email address or other personal data with affiliate partners.
          </p>

          <h2>7. International Transfers</h2>
          <p>
            Your personal data may be transferred to and processed outside the UK, specifically:
          </p>
          <ul>
            <li><strong>United States</strong> — Kit (email platform), Vercel (hosting), and Google (analytics). Kit maintains standard contractual clauses and a published data processing agreement. Vercel and Google maintain industry-standard security certifications and contractual data protection commitments.</li>
            <li><strong>Singapore</strong> — our operating company (NewMediaWorld Pte. Ltd.).</li>
          </ul>
          <p>
            Where data is transferred outside the UK, we rely on the UK international data transfer agreement (UK IDTA) or standard contractual clauses approved by the ICO, as applicable, to ensure an appropriate level of protection for your personal data.
          </p>

          <h2>8. Retention</h2>
          <ul>
            <li><strong>Email subscribers</strong> — retained until you unsubscribe, plus 30 days for processing and removal from all systems.</li>
            <li><strong>Visa Checker data</strong> — nationality and purpose of visit are not stored after delivering results, unless you opt in to email.</li>
            <li><strong>Analytics data</strong> — aggregated and anonymised by Google Analytics; retained for up to 26 months (Google&apos;s default retention period).</li>
            <li><strong>Contact enquiries</strong> — retained for up to 12 months after our last communication, then deleted.</li>
          </ul>
          <p>We do not retain personal data longer than necessary for the purpose for which it was collected.</p>

          <h2>9. Your Rights</h2>
          <p>Under UK GDPR you have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you</li>
            <li>Request rectification of inaccurate data</li>
            <li>Request erasure of your data (right to be forgotten)</li>
            <li>Request restriction of processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the UK Information Commissioner&apos;s Office (<Link href="https://ico.org.uk" className="text-[#C9A84C] underline">ico.org.uk</Link>)</li>
          </ul>
          <p>To exercise any right, email partnerships@dubaiexpat.co.uk. We will respond within one month.</p>

          <h2>10. UAE PDPL</h2>
          <p>
            Where our content is accessed by users in the UAE, we note that the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) may also apply. We process personal data on the basis of explicit consent for marketing and legitimate interest for service delivery. UAE-based users have the right to request that we stop processing their data for direct marketing purposes.
          </p>

          <h2>11. Children</h2>
          <p>
            This site is not directed at children under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us and we will delete it.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be communicated via email to subscribers. The date at the top of this page will always reflect the most recent version.
          </p>

          <h2>13. Contact</h2>
          <p>
            For any questions about this policy or how we handle your personal data, contact us at partnerships@dubaiexpat.co.uk.
          </p>
        </main>

        <footer className="mt-10 border-t border-slate-200 pt-4">
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
            <p>&copy; 2026 Dubai Expat. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-slate-700">Privacy</Link>
              <Link href="/terms" className="hover:text-slate-700">Terms</Link>
              <Link href="/cookies" className="hover:text-slate-700">Cookies</Link>
              <Link href="/affiliate-disclosure" className="hover:text-slate-700">Disclosure</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
