import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Dubai Expat",
  description:
    "How Dubai Expat earns revenue through affiliate partnerships, and what this means for you.",
};

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
            Dubai Expat is a free resource for UK professionals and families relocating to Dubai and the UAE. To keep the site running and continue producing free guides, we participate in affiliate programmes with companies we believe are genuinely useful for expats.
          </p>

          <h2>What This Means for You</h2>
          <p>
            Some links on this site are affiliate links. When you click through and make a purchase, sign up for a service, or complete a qualifying action, we may earn a commission at no extra cost to you. The price you pay is the same whether you use our link or go directly.
          </p>

          <h2>Our Editorial Independence</h2>
          <p>
            Affiliate partnerships do not influence our editorial recommendations. We recommend products and services based on our own research and assessment of what is most useful for UK expats moving to Dubai. We will never recommend a product solely because it offers a higher commission.
          </p>
          <p>
            Where we feature partner services alongside editorial content, these are clearly identified. Our guide content is written independently of any commercial relationship.
          </p>

          <h2>Current Affiliate Partners</h2>
          <p>We currently work with or intend to work with affiliate programmes from companies including:</p>
          <ul>
            <li><strong>Wise</strong> — international money transfers</li>
            <li><strong>SafetyWing</strong> — expat health insurance</li>
            <li><strong>NordVPN / ExpressVPN</strong> — VPN services for accessing UK content abroad</li>
            <li><strong>Booking.com</strong> — temporary accommodation</li>
            <li><strong>Removal companies</strong> — international relocation services</li>
            <li><strong>Insurance providers</strong> — expat insurance</li>
          </ul>
          <p>This list is updated as partnerships change.</p>

          <h2>Questions</h2>
          <p>
            If you have any questions about our affiliate relationships, contact us at partnerships@dubaiexpat.co.uk.
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
