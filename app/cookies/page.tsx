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
            Cookies are small text files stored on your device when you visit a website. They help sites remember your preferences and understand how you use them.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>We use three categories of cookies on this site:</p>

          <h3>Essential Cookies</h3>
          <p>
            These are necessary for the site to function properly. They cannot be disabled. They do not store any personally identifiable information.
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Cookie</th>
                <th className="text-left">Purpose</th>
                <th className="text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookie_consent</td>
                <td>Stores your cookie preferences</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>

          <h3>Analytics Cookies</h3>
          <p>
            These help us understand how visitors interact with the site by collecting and reporting information anonymously. They are only set if you consent via our cookie banner.
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Cookie</th>
                <th className="text-left">Purpose</th>
                <th className="text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga</td>
                <td>Google Analytics — distinguishes unique users</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>_ga_*</td>
                <td>Google Analytics — maintains session state</td>
                <td>2 years</td>
              </tr>
            </tbody>
          </table>

          <h3>Marketing Cookies</h3>
          <p>
            These are used by affiliate partners to track whether a referral resulted in a sign-up or purchase. They are only set if you consent and click an affiliate link.
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Cookie</th>
                <th className="text-left">Purpose</th>
                <th className="text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Varies by partner</td>
                <td>Affiliate conversion tracking (e.g. Wise, SafetyWing)</td>
                <td>30–90 days</td>
              </tr>
            </tbody>
          </table>

          <h2>3. Your Choices</h2>
          <p>
            When you first visit the site, our cookie banner lets you accept all cookies, reject optional cookies, or customise your preferences. You can change your preferences at any time by clearing your browser cookies and revisiting the site — the banner will appear again.
          </p>
          <p>
            You can also control cookies through your browser settings. Most browsers let you block or delete cookies. Note that blocking essential cookies may affect how the site works.
          </p>

          <h2>4. UK PECR Compliance</h2>
          <p>
            In accordance with the UK Privacy and Electronic Communications Regulations (PECR), we do not set optional cookies (analytics or marketing) until you have given consent via our cookie banner. Essential cookies are exempt under PECR as they are strictly necessary.
          </p>

          <h2>5. More Information</h2>
          <p>
            For details on how we handle your personal data, see our{" "}
            <Link href="/privacy" className="text-[#C9A84C] underline">Privacy Policy</Link>.
          </p>
          <p>
            For questions, contact us at partnerships@dubaiexpat.co.uk.
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
