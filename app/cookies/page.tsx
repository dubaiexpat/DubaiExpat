import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Dubai Expat",
  description:
    "How Dubai Expat uses cookies and similar technologies, and how to manage your preferences.",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-zinc-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="mb-8">
          <Header />
        </header>

        <main className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold tracking-tight">Cookie Policy</h1>
          <p className="text-sm text-slate-500">Last updated: 4 April 2026</p>

          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember your preferences, and understand how visitors use the site.
          </p>
          <p>
            We also use similar technologies such as pixels, tags, and local storage. In this policy, we refer to all of these technologies together as &ldquo;cookies.&rdquo;
          </p>

          <h2>2. Who We Are</h2>
          <p>
            Dubai Expat (<Link href="https://www.dubaiexpat.co.uk" className="text-[#C9A84C] underline">www.dubaiexpat.co.uk</Link>) is operated by NewDigitalWorld Pte. Ltd., a company incorporated in Singapore.
          </p>
          <p>Registered address: 7a Chancery Hill Walk, Singapore.</p>

          <h2>3. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential cookies</strong> — necessary for the site to operate, including session management and storing your cookie preferences.</li>
            <li><strong>Analytics cookies</strong> — help us understand how visitors use the site so we can improve content and performance. These collect pseudonymous data (such as a randomly generated client ID) rather than directly identifying you.</li>
            <li><strong>Affiliate tracking cookies</strong> — allow us to measure when a visitor clicks through to a partner website or completes an action, so we can track referrals and commissions.</li>
          </ul>

          <h2>4. Cookies We Use</h2>

          <h3>Essential Cookies</h3>
          <p>These cookies are necessary for the site to function. They are set automatically and cannot be switched off.</p>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Cookie</th>
                <th className="text-left">Purpose</th>
                <th className="text-left">Duration</th>
                <th className="text-left">Consent Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookie_consent</td>
                <td>Stores your cookie preferences</td>
                <td>1 year</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>

          <h3>Analytics Cookies</h3>
          <p>
            These cookies allow us to measure and analyse how visitors interact with the site. Data is collected pseudonymously — Google Analytics assigns a random client ID rather than recording your name or email. These cookies are only set if you consent via our cookie banner.
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Cookie</th>
                <th className="text-left">Provider</th>
                <th className="text-left">Purpose</th>
                <th className="text-left">Duration</th>
                <th className="text-left">Consent Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga</td>
                <td>Google Analytics</td>
                <td>Distinguishes unique users via a pseudonymous client ID</td>
                <td>2 years</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>_ga_*</td>
                <td>Google Analytics</td>
                <td>Maintains session state</td>
                <td>2 years</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>Google Analytics</td>
                <td>Distinguishes users for a single day</td>
                <td>24 hours</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>

          <h3>Affiliate Tracking Cookies</h3>
          <p>
            These cookies are set by third-party affiliate networks when you click an affiliate link on our site. They track whether a referral resulted in a sign-up or purchase, so we can receive commission. They are only set if you consent and click through to a partner site.
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Provider</th>
                <th className="text-left">Purpose</th>
                <th className="text-left">Typical Duration</th>
                <th className="text-left">Consent Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Awin</td>
                <td>Tracks affiliate referrals and conversions</td>
                <td>30 days</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>CJ Affiliate</td>
                <td>Tracks affiliate referrals and conversions</td>
                <td>30–45 days</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Impact</td>
                <td>Tracks affiliate referrals and conversions</td>
                <td>30 days</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>ShareASale</td>
                <td>Tracks affiliate referrals and conversions</td>
                <td>30–90 days</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
          <p>
            We may add or change affiliate partners from time to time. When we do, we will update this table and revise the &ldquo;last updated&rdquo; date above.
          </p>

          <h2>5. Your Cookie Choices</h2>
          <p>
            When you first visit our site, a cookie banner allows you to manage your preferences. You may choose to:
          </p>
          <ul>
            <li>Accept all cookies.</li>
            <li>Reject non-essential cookies.</li>
            <li>Customise your preferences (choose analytics only, affiliate only, or both).</li>
          </ul>
          <p>
            You can change your preferences at any time by clearing your browser cookies and revisiting the site — the banner will reappear. You can also control cookies through your browser settings. If you reject non-essential cookies, the site will still function normally, but some features and analytics may be unavailable.
          </p>

          <h2>6. Third-Party Cookies</h2>
          <p>
            Some cookies are set by third parties when you use our site. These third parties may collect information about your browsing activity in accordance with their own privacy policies. We encourage you to review the privacy policies of Google, Awin, CJ Affiliate, Impact, and ShareASale for details on how they use your data.
          </p>

          <h2>7. UK PECR Compliance</h2>
          <p>
            This site is primarily aimed at people considering relocating to the UAE, many of whom are based in the United Kingdom. In accordance with the UK Privacy and Electronic Communications Regulations (PECR), we do not set optional cookies (analytics or affiliate tracking) until you have given explicit consent via our cookie banner. Essential cookies are exempt under PECR as they are strictly necessary for the site to function.
          </p>

          <h2>8. International Transfers</h2>
          <p>
            Some of our service providers may process cookie data outside the United Kingdom, including in the United States or other countries where they or their servers operate. Where personal data is transferred internationally, we take reasonable steps to ensure appropriate protection is in place, including the use of UK International Data Transfer Agreements (IDTAs) or Standard Contractual Clauses (SCCs) where applicable.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in cookies we use, technology, legal requirements, or our business operations. Any updated version will be posted on this page with a revised effective date. We encourage you to check this page periodically.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Cookie Policy or wish to exercise your data rights, please contact us at:
          </p>
          <p>
            NewDigitalWorld Pte. Ltd.<br />
            7a Chancery Hill Walk, Singapore<br />
            Email: <a href="mailto:partnerships@dubaiexpat.co.uk" className="text-[#C9A84C] underline">partnerships@dubaiexpat.co.uk</a>
          </p>
          <p>
            For full details on how we handle personal data, see our{" "}
            <Link href="/privacy" className="text-[#C9A84C] underline">Privacy Policy</Link>.
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
