import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dubai Expat",
  description:
    "How Dubai Expat collects, uses and protects your personal data. Covers UK GDPR, PECR and UAE PDPL compliance.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="mb-8">
          <Header />
        </header>

        <main className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: 4 April 2026</p>

          <h2>1. Who We Are</h2>
          <p>
            Dubai Expat (<Link href="https://www.dubaiexpat.co.uk" className="text-[#C9A84C] underline">www.dubaiexpat.co.uk</Link>) is operated by NewDigitalWorld Pte. Ltd., a company incorporated in Singapore. For the purposes of UK data-protection law we are the data controller.
          </p>
          <p>
            <strong>Contact:</strong> partnerships@dubaiexpat.co.uk
          </p>

          <h2>2. What Data We Collect</h2>
          <p>We may collect the following categories of personal data:</p>
          <ul>
            <li><strong>Information you provide</strong> — email address and, where applicable, your name, nationality, and purpose of visit when using our Visa Checker tool.</li>
            <li><strong>Usage data</strong> — pages visited, time on site, referral source, device type and browser, collected via cookies and analytics tools.</li>
            <li><strong>Communication data</strong> — any information you include when you contact us by email.</li>
          </ul>

          <h2>3. Why We Collect It &amp; Legal Basis</h2>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Purpose</th>
                <th className="text-left">Legal Basis (UK GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Provide our tools (Visa Checker, guides)</td>
                <td>Legitimate interest</td>
              </tr>
              <tr>
                <td>Send marketing emails</td>
                <td>Consent (explicit opt-in)</td>
              </tr>
              <tr>
                <td>Analyse site usage</td>
                <td>Consent (via cookie banner)</td>
              </tr>
              <tr>
                <td>Respond to enquiries</td>
                <td>Legitimate interest</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Marketing Emails</h2>
          <p>
            We will only send you marketing emails if you have given explicit, freely-given consent by ticking the relevant checkbox. You can withdraw consent at any time by clicking the unsubscribe link in any email or by emailing partnerships@dubaiexpat.co.uk. We will stop sending marketing emails without delay.
          </p>

          <h2>5. Who We Share Data With</h2>
          <p>We may share your data with the following categories of third parties, solely for the purposes described above:</p>
          <ul>
            <li><strong>Email platform</strong> — Kit (formerly ConvertKit), which processes subscriber data on servers in the United States.</li>
            <li><strong>Analytics</strong> — Google Analytics, which collects anonymised usage data.</li>
            <li><strong>Affiliate networks</strong> — When you click an affiliate link, the destination site may set its own cookies. We do not share your email address with affiliate partners.</li>
            <li><strong>Hosting</strong> — Vercel (United States).</li>
          </ul>

          <h2>6. International Transfers</h2>
          <p>
            Your data may be processed outside the UK — specifically in the United States (Kit, Vercel, Google) and Singapore (our operating company). Where data is transferred outside the UK, we rely on adequacy decisions or standard contractual clauses to ensure an appropriate level of protection.
          </p>

          <h2>7. How Long We Keep Data</h2>
          <ul>
            <li><strong>Email subscribers</strong> — until you unsubscribe, plus 30 days for processing.</li>
            <li><strong>Analytics data</strong> — aggregated and anonymised; retained for up to 26 months by Google Analytics.</li>
            <li><strong>Contact enquiries</strong> — up to 12 months after our last communication.</li>
          </ul>

          <h2>8. Your Rights</h2>
          <p>Under UK GDPR you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Rectify inaccurate data</li>
            <li>Erase your data (right to be forgotten)</li>
            <li>Restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the UK Information Commissioner&apos;s Office (<Link href="https://ico.org.uk" className="text-[#C9A84C] underline">ico.org.uk</Link>)</li>
          </ul>
          <p>To exercise any right, email partnerships@dubaiexpat.co.uk. We will respond within one month.</p>

          <h2>9. UAE PDPL Compliance</h2>
          <p>
            Where our content relates to the UAE and is accessed by users in the UAE, we also comply with the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021). Your data is processed on the basis of explicit consent for marketing and legitimate interest for service delivery.
          </p>

          <h2>10. Cookies</h2>
          <p>
            We use cookies on this site. For full details, see our{" "}
            <Link href="/cookies" className="text-[#C9A84C] underline">Cookie Policy</Link>.
          </p>

          <h2>11. Children</h2>
          <p>
            This site is not directed at individuals under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us and we will delete it.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be communicated via email to subscribers. The &ldquo;last updated&rdquo; date at the top of this page will always reflect the most recent version.
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
