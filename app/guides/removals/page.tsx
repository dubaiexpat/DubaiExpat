import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Removals & Shipping to Dubai: What UK Expats Need to Know (2026)",
  description: "How to move your belongings from the UK to Dubai — sea freight vs air freight, costs, customs rules, what to bring and what to buy when you arrive.",
  keywords: "removals Dubai, shipping to Dubai, customs, sea freight, air freight, relocation",
  openGraph: {
    title: "Removals & Shipping to Dubai: What UK Expats Need to Know (2026)",
    description: "How to move your belongings from the UK to Dubai — sea freight vs air freight, costs, customs rules, what to bring and what to buy when you arrive.",
  },
};

export default function RemovalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Header />
          <div className="flex items-center gap-2 py-3 text-sm text-slate-500">
            <Link href="/" className="flex items-center gap-1 hover:text-[#0A1628]">
              <span>←</span><span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/#categories" className="hover:text-[#0A1628]">Guides</Link>
            <span>/</span>
            <span className="font-medium text-[#0A1628]">Removals &amp; Shipping</span>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl mb-12">
          <img
            src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              Removals & Logistics
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
              Removals & Shipping to Dubai: What UK Expats Need to Know (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
              Moving your life from the UK to Dubai is a significant logistical undertaking. Master the key decisions: how much to bring, how to ship it, and what's better to buy in Dubai when you arrive.
            </p>
          </div>
        </section>

        <div className="prose prose-lg max-w-none mb-12">
          
          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Moving your life from the UK to Dubai is a significant logistical undertaking, but it's one that thousands of British families do every year. The key decisions are: how much to bring, how to ship it, and what's better and cheaper to buy in Dubai when you arrive. Planning carefully in these areas will save you money and stress during your relocation.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              Sea Freight vs Air Freight
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sea freight is the most economical option for large moves. It typically takes 20 to 25 days from the UK to Dubai and costs approximately £3,000 to £6,000 for a full 20-foot container, which is suitable for the contents of a 2 to 3-bedroom house. If you're moving smaller volumes, shared container options (part loads) are available from £800 to £2,500, though they take slightly longer. Sea freight is your best choice for furniture and bulk items.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Air freight is significantly faster, taking 3 to 5 days, but it's much more expensive at approximately £8 to £15 per kilogram. Air freight works best for essentials or small moves when speed is essential. Many families use a combination approach: sea freight for their main household goods and furniture, then air freight or excess baggage for immediate essentials needed right away.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              Choosing a Removal Company
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Always use a BAR (British Association of Removers) registered company for your international move. Get quotes from at least three different companies to ensure competitive pricing. Key removal companies with extensive UAE experience include Pickfords, Crown Relocations, AGS Movers, and Santa Fe Relocation. When requesting quotes, ask specifically about their experience with Dubai customs procedures, as this expertise can save you significant time and potential complications. A company familiar with UAE requirements will guide you properly through the customs process and ensure all documentation is correct.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              Customs in Dubai
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dubai has strict but well-defined customs rules. The key advantage for new residents is that you can bring household goods duty-free if you are moving to the UAE for the first time. To do this, you'll need several documents: a valid UAE residence visa, a detailed packing list, and a bill of lading from your shipping company. Alcohol regulations are specific: you can bring up to 4 litres per adult, but it must be declared. Certain items are prohibited entirely, including pork products and some medications. Before packing, always check the Dubai Customs website for the complete list of prohibited and restricted items to avoid delays or confiscation.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              What to Bring
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You should definitely bring clothes, though your summer wardrobe will need expanding once you arrive. Sentimental items are worth transporting because they're irreplaceable. UK electrical items are worth bringing because Dubai uses UK-style plugs and operates at the same voltage (230V), which is one of the few genuine conveniences of moving to the UAE. Your children's toys and books travel well and provide comfort during the transition. Quality kitchenware is worth shipping as good cookware is expensive in Dubai. Finally, bring UK-sourced medications along with prescriptions, as some medications can be difficult or expensive to source in the UAE.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What you should leave behind is equally important. Large furniture is generally not worth shipping to Dubai because the city has excellent affordable furniture options including IKEA, Pan Emirates, and THE One, with prices often lower than UK equivalents. Heavy winter clothes are unnecessary because you'll barely need them in Dubai's climate. Garden equipment is also not worth transporting unless you have a very specific use for it locally.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              Cars
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              It's not worth shipping your UK car to Dubai. The UAE operates left-hand drive vehicles as standard, which means your UK right-hand drive car would be impractical and potentially unsafe. The import costs, re-registration fees, and potential conversion requirements make importing a UK vehicle uneconomical. Instead, sell your UK car and purchase one locally. Dubai has a robust used car market with competitive prices and good availability, so you'll find suitable vehicles easily once you arrive.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              Pets
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dubai allows dogs and cats, but there are specific rules you must follow. Your pet will need a microchip, a rabies vaccination, a health certificate from a UK vet (issued within 10 days of travel), and an import permit from the UAE Ministry of Climate Change. Airlines vary in their policies regarding pet transport, so check with your airline early in the planning process. Allow 6 to 8 weeks to prepare all necessary documentation and arrange proper transport. Starting early ensures you're not rushing at the last moment and that all requirements are properly met.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              Timing Your Shipment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Book your removal company 6 to 8 weeks before your move date to ensure availability and allow time for planning and preparation. An important timing consideration is that your sea freight shipment needs to arrive after you do, because you'll need your UAE residence visa to clear customs properly. If your shipment arrives before you're in the country, it can sit in customs incurring storage fees and creating complications. If there's a significant gap between your arrival and your visa being fully processed, consider storing items in the UK for 4 to 6 weeks to time the arrival correctly. This advance planning prevents unnecessary customs costs and delays.
            </p>
          </section>

          <section className="mb-12">
            <div className="p-6 rounded-lg" style={{ backgroundColor: "#F9FAFB", color: "#0A1628", border: "1px solid #E5E7EB" }}>
              <h3 className="text-2xl font-bold mb-3">Patrick's Tip</h3>
              <p className="leading-relaxed">
                "Don't underestimate the cost of setting up your new home. Even if you bring most of your furniture, there will be items you need to buy. Budget at least £3,000 to £5,000 for the set-up phase, more if renting unfurnished. This covers things like window treatments, household supplies, minor furniture pieces, and the inevitable overlooked items."
              </p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4" style={{ color: "#0A1628" }}>
              Related Guides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/housing" style={{ color: "#0A1628" }} className="hover:underline font-semibold">
                  Housing & Accommodation
                </Link>
              </li>
              <li>
                <Link href="/guides/community" style={{ color: "#0A1628" }} className="hover:underline font-semibold">
                  Community & Local Life
                </Link>
              </li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}
