import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "Terms and conditions for using the Dubai Expat website and tools, including disclaimers and limitations of liability for affiliate-supported content.",
  path: "/terms",
  type: "website",
});

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

          <p>
            These Terms of Use apply to the website{" "}
            <Link href="https://www.dubaiexpat.co.uk" className="text-[#C9A84C] underline">www.dubaiexpat.co.uk</Link>{" "}
            (the &ldquo;Site&rdquo;), which is operated by NewMediaWorld Pte. Ltd., a company incorporated in Singapore.
          </p>
          <p>
            By accessing or using the Site, you agree to be bound by these Terms of Use. If you do not agree to these Terms, you should not use the Site.
          </p>

          <h2>1. About This Site</h2>
          <p>
            Dubai Expat provides information, guides, and resources relating to relocation, visas, expat life, and related products and services.
          </p>
          <p>
            We may update, change, suspend, restrict, or remove any part of the Site at any time without notice.
          </p>

          <h2>2. Information Only</h2>
          <p>
            All content on the Site is provided for general information purposes only.
          </p>
          <p>
            It does not constitute financial, tax, legal, immigration, or other professional advice. You should always seek independent professional advice before making decisions relating to relocation, visas, tax, pensions, insurance, or other important matters.
          </p>

          <h2>3. No Warranty as to Accuracy</h2>
          <p>
            We make reasonable efforts to keep information accurate and up to date. However, laws, visa rules, regulations, prices, service availability, and third-party offers may change at any time.
          </p>
          <p>
            To the fullest extent permitted by law, we do not warrant that the Site or any content on it is complete, accurate, current, reliable, or free from error. You acknowledge that any reliance you place on the Site is at your own risk.
          </p>

          <h2>4. Visa Checker Tool</h2>
          <p>
            Where available, our Visa Checker tool provides general guidance only.
          </p>
          <p>
            The results are indicative and do not constitute an immigration assessment, legal opinion, or guarantee of visa eligibility, approval, or outcome. Visa requirements and official processes may change without notice.
          </p>
          <p>
            You should always verify requirements directly with the relevant official authority, embassy, consulate, or a qualified immigration adviser before making travel or relocation decisions.
          </p>

          <h2>5. Affiliate Links and Recommendations</h2>
          <p>
            Some links on the Site are affiliate links. If you click those links and purchase a product or service, we may receive a commission at no extra cost to you.
          </p>
          <p>
            This does not affect the price you pay. We aim to provide honest and independent editorial content, but you should always carry out your own research before purchasing any third-party product or service.
          </p>
          <p>
            Please see our{" "}
            <Link href="/affiliate-disclosure" className="text-[#C9A84C] underline">Affiliate Disclosure</Link>{" "}
            for more information.
          </p>

          <h2>6. Third-Party Sites</h2>
          <p>
            The Site may contain links to third-party websites, tools, products, or services.
          </p>
          <p>
            We do not control and are not responsible for the content, availability, security, terms, or privacy practices of any third-party site. If you visit a third-party site, you do so at your own risk and subject to that site&rsquo;s own terms and policies.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            Unless otherwise stated, all content on the Site, including text, graphics, logos, images, design, layout, and code, is owned by or licensed to NewMediaWorld Pte. Ltd. and is protected by applicable intellectual property laws.
          </p>
          <p>
            You may view the Site for your personal, non-commercial use only. You may not copy, reproduce, distribute, modify, publish, transmit, create derivative works from, or otherwise use any content from the Site without our prior written consent, except as permitted by law.
          </p>

          <h2>8. User Conduct</h2>
          <p>You agree not to use the Site:</p>
          <ul>
            <li>in any unlawful, fraudulent, or harmful way;</li>
            <li>to interfere with the proper operation, security, or performance of the Site;</li>
            <li>to attempt to gain unauthorised access to any part of the Site, server, or system;</li>
            <li>to use automated means to scrape, crawl, harvest, or extract data without our prior written permission;</li>
            <li>to upload, transmit, or distribute malware, spam, or other harmful material;</li>
            <li>to reverse engineer, decompile, or attempt to bypass any security or access controls; or</li>
            <li>to misuse the Visa Checker tool or any other feature on the Site.</li>
          </ul>

          <h2>9. User-Submitted Content</h2>
          <p>
            If the Site allows you to submit content, including comments, forms, messages, reviews, or other materials, you are responsible for ensuring that your submission is lawful, accurate, and does not infringe the rights of any third party.
          </p>
          <p>
            By submitting content to us, you grant NewMediaWorld Pte. Ltd. a non-exclusive, worldwide, royalty-free licence to use, reproduce, adapt, publish, and display that content for the purpose of operating, promoting, and improving the Site, unless we agree otherwise in writing.
          </p>
          <p>
            We reserve the right to review, remove, or refuse to publish any user-submitted content at our discretion.
          </p>

          <h2>10. Privacy and Cookies</h2>
          <p>
            Your use of the Site is also subject to our{" "}
            <Link href="/privacy" className="text-[#C9A84C] underline">Privacy Policy</Link>{" "}
            and{" "}
            <Link href="/cookies" className="text-[#C9A84C] underline">Cookie Policy</Link>,{" "}
            which explain how we collect, use, and store personal data and how we use cookies and similar technologies.
          </p>

          <h2>11. No Endorsement</h2>
          <p>
            References on the Site to third-party products, services, companies, or websites do not constitute an endorsement unless we expressly say so.
          </p>
          <p>
            We may receive compensation from some third parties, but this does not mean we guarantee, approve, or assume responsibility for their products or services.
          </p>

          <h2>12. Termination</h2>
          <p>
            We may suspend or terminate your access to the Site, or any part of it, at any time if we reasonably believe that you have breached these Terms, misused the Site, or otherwise acted in a way that may harm us, other users, or third parties.
          </p>

          <h2>13. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, NewMediaWorld Pte. Ltd., its directors, employees, contractors, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive losses or damages arising out of or in connection with your use of, or inability to use, the Site.
          </p>
          <p>
            This includes, without limitation, loss of profits, loss of revenue, loss of data, business interruption, and loss arising from reliance on information provided on the Site.
          </p>
          <p>
            Nothing in these Terms excludes or limits liability that cannot be excluded under applicable law.
          </p>

          <h2>14. Indemnity</h2>
          <p>
            To the fullest extent permitted by law, you agree to indemnify and hold harmless NewMediaWorld Pte. Ltd. and its directors, employees, contractors, and affiliates from and against any claims, liabilities, losses, damages, costs, and expenses arising out of or relating to:
          </p>
          <ul>
            <li>your misuse of the Site;</li>
            <li>your breach of these Terms; or</li>
            <li>your violation of any law or third-party right.</li>
          </ul>

          <h2>15. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid, unlawful, or unenforceable, that provision will be limited or removed to the minimum extent necessary, and the remaining provisions will continue in full force and effect.
          </p>

          <h2>16. Entire Agreement</h2>
          <p>
            These Terms of Use, together with our{" "}
            <Link href="/privacy" className="text-[#C9A84C] underline">Privacy Policy</Link>,{" "}
            <Link href="/cookies" className="text-[#C9A84C] underline">Cookie Policy</Link>, and{" "}
            <Link href="/affiliate-disclosure" className="text-[#C9A84C] underline">Affiliate Disclosure</Link>,{" "}
            constitute the entire agreement between you and us regarding your use of the Site.
          </p>

          <h2>17. Changes to These Terms</h2>
          <p>
            We may update these Terms of Use from time to time. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. By continuing to use the Site after changes are posted, you agree to the revised Terms.
          </p>

          <h2>18. Governing Law</h2>
          <p>
            These Terms of Use are governed by the laws of Singapore. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Singapore, except where applicable law requires otherwise.
          </p>

          <h2>19. Contact</h2>
          <p>If you have any questions about these Terms of Use, please contact us at:</p>
          <p>
            NewMediaWorld Pte. Ltd.<br />
            Email:{" "}
            <a href="mailto:partnerships@dubaiexpat.co.uk" className="text-[#C9A84C] underline">partnerships@dubaiexpat.co.uk</a>
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
