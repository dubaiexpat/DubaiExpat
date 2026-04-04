import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Dubai Expat",
  description:
    "Terms and conditions for using the Dubai Expat website and tools.",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-zinc-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="mb-8">
          <Header />
        </header>

        <main className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold tracking-tight">Terms of Use</h1>
          <p className="text-sm text-slate-500">Last updated: 4 April 2026</p>

          <h2>1. About This Site</h2>
          <p>
            Dubai Expat (<Link href="https://www.dubaiexpat.co.uk" className="text-[#C9A84C] underline">www.dubaiexpat.co.uk</Link>) is operated by NewDigitalWorld Pte. Ltd., a company incorporated in Singapore. By accessing or using this site you agree to these terms.
          </p>

          <h2>2. Information Only</h2>
          <p>
            All content on this site is provided for general informational purposes only. It does not constitute financial, tax, legal or immigration advice. You should always seek professional advice before making decisions about relocating to the UAE, transferring pensions, or managing tax obligations.
          </p>

          <h2>3. Accuracy</h2>
          <p>
            We make every effort to keep information accurate and up to date, but visa rules, costs, regulations and service availability change frequently. We do not guarantee the completeness or accuracy of any information on this site and accept no liability for decisions made in reliance on it.
          </p>

          <h2>4. Visa Checker Tool</h2>
          <p>
            Our Visa Checker provides general guidance based on nationality and purpose of travel. Results are indicative only and do not constitute an immigration assessment. Visa requirements are subject to change without notice. Always verify requirements with the UAE Embassy or an accredited immigration adviser.
          </p>

          <h2>5. Affiliate Links &amp; Recommendations</h2>
          <p>
            Some links on this site are affiliate links. When you click through and purchase a product or service, we may earn a commission at no extra cost to you. This does not influence our editorial recommendations. See our{" "}
            <Link href="/affiliate-disclosure" className="text-[#C9A84C] underline">Affiliate Disclosure</Link>{" "}
            for full details.
          </p>

          <h2>6. Third-Party Sites</h2>
          <p>
            This site contains links to external websites. We are not responsible for the content, privacy practices, or availability of those sites. Visiting a linked site is at your own risk.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content, design, and code on this site is owned by NewDigitalWorld Pte. Ltd. or used under licence. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.
          </p>

          <h2>8. User Conduct</h2>
          <p>
            You agree not to use this site in any way that is unlawful, fraudulent, or harmful, or in connection with any unlawful, fraudulent, or harmful purpose or activity.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, NewDigitalWorld Pte. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this site.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We may update these terms at any time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These terms are governed by the laws of Singapore. Any disputes shall be subject to the exclusive jurisdiction of the courts of Singapore.
          </p>

          <h2>12. Contact</h2>
          <p>
            For questions about these terms, contact us at partnerships@dubaiexpat.co.uk.
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
