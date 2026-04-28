import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Affiliate Disclosure",
  description:
    "How Dubai Expat earns revenue through affiliate partnerships, and what this means for you.",
  path: "/affiliate-disclosure",
  type: "website",
});

export default function AffiliateDisclosure() {
  return (
    <div className="min-h-screen bg-zinc-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="mb-8">
          <Header />
        </header>

        <main className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold tracking-tight">
            Affiliate Disclosure
          </h1>
          <p className="text-sm text-slate-500">Last updated: 4 April 2026</p>

          <h2>How We Earn Revenue</h2>
          <p>
            Dubai Expat is a free resource for people relocating to Dubai and the UAE. To help support the cost of running the site and producing free guides, we may participate in affiliate programmes with companies and services that we believe may be useful to our readers.
          </p>

          <h2>Affiliate Links</h2>
          <p>
            Some links on this site are affiliate links. This means that if you click a link and make a purchase, sign up for a service, or complete another qualifying action, we may earn a commission at no extra cost to you.
          </p>
          <p>
            The price you pay is the same whether you use our affiliate link or visit the provider directly.
          </p>
          <p>
            Affiliate links may appear in articles, comparison tables, banners, buttons, or other content formats across the site. Not every affiliate link is individually labelled in every case.
          </p>

          <h2>Editorial Independence</h2>
          <p>
            Our affiliate relationships do not influence our editorial opinions, rankings, or recommendations. We aim to recommend products and services based on our own research and assessment of what may be most useful to our audience.
          </p>
          <p>
            We do not recommend a product or service solely because it pays a commission.
          </p>

          <h2>Current or Potential Affiliate Partners</h2>
          <p>We may work with affiliate programmes and partners including:</p>
          <ul>
            <li><strong>Wise</strong> — international money transfers</li>
            <li><strong>SafetyWing</strong> — expat health insurance</li>
            <li><strong>NordVPN</strong> — VPN services</li>
            <li><strong>ExpressVPN</strong> — VPN services</li>
            <li><strong>Booking.com</strong> — temporary accommodation</li>
            <li>Relocation service providers</li>
            <li>Insurance providers</li>
            <li>Other travel, finance, accommodation, or expat-related services</li>
          </ul>
          <p>
            This list may change from time to time as partnerships are added, removed, or updated. Not every affiliate relationship may be listed individually.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this disclosure or our affiliate relationships, please contact us at:
          </p>
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
