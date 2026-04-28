
import Header from '@/components/Header';
import Link from 'next/link';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import RelatedGuides from '@/components/RelatedGuides';
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Buying Furniture in Dubai (2026): IKEA, Designer Stores & Bespoke Guide for UK Expats",
  description: "How UK expats furnish their Dubai home in 2026 — IKEA, Home Centre, West Elm, designer showrooms, bespoke carpenters in Al Quoz, and the best second-hand marketplaces.",
  path: "/guides/furniture",
});
const SCHEMA_URL = 'https://www.dubaiexpat.co.uk/guides/furniture';
const BREADCRUMBS = [
  { name: 'Home', url: 'https://www.dubaiexpat.co.uk/' },
  { name: 'Guides', url: 'https://www.dubaiexpat.co.uk/#categories' },
  { name: 'Furniture', url: SCHEMA_URL },
];

const RELATED = [
  { title: 'Renting in Dubai', href: '/guides/housing', description: 'Furnished vs unfurnished — what determines your shopping list' },
  { title: 'UK to Dubai Removals & Shipping', href: '/guides/removals', description: 'What to ship vs buy locally' },
  { title: 'Dubai Cost of Living', href: '/cost-of-living', description: 'Furnishing-cost benchmarks for a 2BR apartment' },
  { title: 'Dubai Concierge Services', href: '/guides/concierge', description: 'Bespoke tailoring, upholstery, and home services' },
];

export default function FurnitureGuide() {
  return (
    <>
      <SchemaJsonLd
        type="Article"
        title="Buying Furniture in Dubai (2026): IKEA, Designer Stores & Bespoke Guide for UK Expats"
        description="How UK expats furnish their Dubai home — IKEA, Home Centre, designer showrooms, bespoke carpenters, second-hand marketplaces."
        url={SCHEMA_URL}
        breadcrumbs={BREADCRUMBS}
      />
      <div className="bg-white px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Header />
          <div className="flex items-center gap-2 py-3 text-sm text-slate-500">
            <Link href="/" className="flex items-center gap-1 hover:text-[#0A1628]">
              <span>←</span><span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/#categories" className="hover:text-[#0A1628]">Guides</Link>
            <span>/</span>
            <span className="font-medium text-[#0A1628]">Furniture &amp; Interiors</span>
          </div>
        </div>
      </div>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-8 mt-6 md:mt-8 mb-12">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              Furniture &amp; Interiors
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
              Furniture &amp; Interiors in Dubai
            </h1>
            <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
              Your complete guide to furnishing an apartment in Dubai — from budget-friendly options to luxury designer pieces and bespoke custom carpentry.
            </p>
          </div>
        </section>

        {/* Budget & Affordable */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A1628' }}>
              Budget & Affordable Options
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                When furnishing on a budget, Dubai has excellent options that offer good value without compromising on quality:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: '#0A1628' }}>IKEA, Festival City</strong> — A large, fully-stocked store with the same range as UK IKEA. Very popular with expats for affordable basics and stylish pieces. Assembly service available.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>ACE Hardware</strong> — Excellent for basics and outdoor furniture. Competitive pricing on tools, home improvement items, and garden furniture.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>Home Box</strong> — Dubai's local equivalent of Dunelm. Good for soft furnishings, curtains, bedding, and home accessories at reasonable prices.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>Dragon Mart</strong> — A massive Chinese wholesale mall offering incredible bargains on furniture and home items. Quality varies, but patience and browsing can yield excellent finds at fraction of retail prices.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mid-Range */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A1628' }}>
              Mid-Range & Contemporary
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                For stylish, quality furniture at fair prices, these retailers offer excellent value:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: '#0A1628' }}>Marina Home Interiors</strong> — A UAE brand known for stylish, contemporary furniture with excellent quality for the price. Strong reputation among Dubai expats.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>West Elm</strong> — Available at Dubai Mall and Mall of the Emirates. Same design-forward range as UK and US locations, with consistent quality and customer service.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>H&M Home</strong> — Multiple mall locations with trendy, affordable home furnishings, textiles, and decor.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>Pottery Barn</strong> — Mall of the Emirates location with classic American home style, quality construction, and good value.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>Crate & Barrel</strong> — Dubai Mall location offering versatile, well-designed furniture for various styles and budgets.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* High-End & Designer */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A1628' }}>
              High-End & Designer Furniture
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                For luxury and designer pieces, Dubai's premium design district and high-end retailers offer exceptional selections:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: '#0A1628' }}>The One</strong> — A local luxury brand specializing in high-end, contemporary furniture. Excellent craftsmanship and exclusive designs popular with affluent Dubai residents.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>Eichholtz, DIFC & Design District (d3)</strong> — A prestigious Dutch luxury brand with a strong Dubai presence. Premium contemporary and classic designs with exceptional quality.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>B&B Italia at Design District (d3)</strong> — The iconic Italian design house known for innovative, architecturally-inspired furniture.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>Roche Bobois</strong> — Jumeirah location offering luxury French design with sophisticated, bespoke options.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>BoConcept</strong> — Multiple locations providing Scandinavian-inspired designer furniture with modular, customizable options.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bespoke & Custom Carpentry */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A1628' }}>
              Bespoke & Custom Carpentry
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                One of Dubai's best-kept secrets is the availability of high-quality custom furniture at remarkably reasonable prices:
              </p>
              <div className="bg-gray-50 p-4 rounded border-l-2" style={{ borderLeftColor: '#0A1628' }}>
                <p className="font-bold mb-2" style={{ color: '#0A1628' }}>Al Quoz Industrial Area</p>
                <p>
                  This warehouse district is home to dozens of skilled custom furniture makers and carpenters. You can commission bespoke pieces, have designs replicated from photos, or have furniture customized to exact specifications — often at a fraction of retail prices.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: '#0A1628' }}>
                <p className="font-bold mb-2" style={{ color: '#0A1628' }}>Satwa Upholstery Workshops</p>
                <p>
                  The Satwa district specializes in upholstery services. Perfect for reupholstering existing furniture or creating custom sofas and chairs to your exact specifications.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: '#0A1628' }}>
                <p className="font-bold mb-2" style={{ color: '#0A1628' }}>Timeline & Budget</p>
                <p>
                  Allow 4–6 weeks for custom pieces. Budget is typically significantly lower than retail — often 40–60% less than equivalent designer furniture while maintaining excellent quality and craftsmanship.
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Tip: Get recommendations from expat Facebook groups for trusted makers. Quality varies, so check portfolios and ask for references before committing.
              </p>
            </div>
          </div>
        </section>

        {/* Second-Hand Furniture */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A1628' }}>
              Buying Second-Hand Furniture
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Many expats furnish entire apartments using second-hand pieces. Dubai's transient population constantly creates excellent buying opportunities:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: '#0A1628' }}>Dubizzle.com</strong> — The UAE's equivalent of Gumtree or eBay. Vast selection of furniture from expats leaving Dubai. Browse by area and price range.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>Facebook Groups</strong> — "Expats in Dubai Buy & Sell" groups are extremely active. Great prices, quick turnover, and easy messaging with sellers.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>Moving Sales</strong> — Watch for notices posted in building lobbies announcing moving sales. Often yield excellent furniture finds from expats relocating.
                </li>
              </ul>

              <div className="bg-gray-50 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: '#0A1628' }}>
                <p className="font-bold mb-2" style={{ color: '#0A1628' }}>Second-Hand Furnishing Strategy</p>
                <p>
                  It's entirely feasible to furnish a Dubai apartment almost entirely with second-hand pieces. Quality designer furniture often appears at 30–50% of retail price. Many items are barely used as expats frequently relocate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outdoor & Garden Furniture */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A1628' }}>
              Outdoor & Garden Furniture
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Dubai's climate requires specific considerations for outdoor furniture:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: '#0A1628' }}>IKEA</strong> — Good range of affordable outdoor furniture designed for durability.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>ACE Hardware</strong> — Best selection for outdoor furniture with emphasis on UV-resistant materials and quality construction.
                </li>
                <li>
                  <strong style={{ color: '#0A1628' }}>Safat Home</strong> — Specializes in outdoor and garden furniture suitable for Middle Eastern climates.
                </li>
              </ul>

              <div className="bg-gray-50 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: '#0A1628' }}>
                <p className="font-bold mb-2" style={{ color: '#0A1628' }}>Critical: UV Resistance</p>
                <p>
                  Dubai's intense UV exposure is brutal on furniture. Standard UK garden furniture fades and deteriorates quickly. Always buy outdoor furniture specifically labeled as UV-resistant. Look for high-quality resin, treated wood, or powder-coated metals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Tips */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A1628' }}>
              Key Tips for Buying Furniture in Dubai
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="space-y-2">
                <p className="font-bold" style={{ color: '#0A1628' }}>1. Measure Doorways & Lifts</p>
                <p>
                  Before purchasing large pieces, measure your apartment's doorways and lift dimensions. UAE apartment lifts are often narrow, and oversized furniture cannot fit. This is a common and expensive mistake.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-bold" style={{ color: '#0A1628' }}>2. AC-Resistant Materials</p>
                <p>
                  Dubai's air conditioning and humidity create challenges. Check if solid wood furniture is treated for moisture resistance. Humidity can warp untreated wood. Engineered wood or treated pieces are preferable.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-bold" style={{ color: '#0A1628' }}>3. Delivery Lead Times</p>
                <p>
                  International furniture brands often have 6–12 week delivery times due to shipping. Plan accordingly and order early if purchasing from overseas brands. Local suppliers typically deliver much faster.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-bold" style={{ color: '#0A1628' }}>4. Seasonal Sales</p>
                <p>
                  Most retailers have significant sales during end-of-season clearances. Monitor sales during summer (very hot, less foot traffic) for excellent bargains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Moving In Checklist */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A1628' }}>
              Moving In Checklist: What to Buy First
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-white p-4 rounded border" style={{ borderColor: "#E5E7EB" }}>
                <p className="font-bold mb-3" style={{ color: '#0A1628' }}>Priority 1: Essential Items (Buy Immediately)</p>
                <ul className="space-y-2 ml-4 text-sm">
                  <li>• Bed & mattress (essential for sleep)</li>
                  <li>• Dining table (even small, multi-purpose)</li>
                  <li>• Basic seating (1–2 chairs or sofa)</li>
                  <li>• Bedroom wardrobes/closets (storage critical)</li>
                  <li>• Kitchen basics (small dining area, stools)</li>
                  <li>• Lighting (floor and desk lamps)</li>
                  <li>• Curtains/blinds (privacy and heat control)</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border" style={{ borderColor: "#E5E7EB" }}>
                <p className="font-bold mb-3" style={{ color: '#0A1628' }}>Priority 2: Comfort Items (First 2–4 Weeks)</p>
                <ul className="space-y-2 ml-4 text-sm">
                  <li>• Additional seating/lounge furniture</li>
                  <li>• Coffee/side tables</li>
                  <li>• Shelving or bookcase</li>
                  <li>• Mirrors (expand sense of space)</li>
                  <li>• Additional storage solutions</li>
                  <li>• Soft furnishings (cushions, throws)</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border" style={{ borderColor: "#E5E7EB" }}>
                <p className="font-bold mb-3" style={{ color: '#0A1628' }}>Priority 3: Finishing Touches (Weeks 4+)</p>
                <ul className="space-y-2 ml-4 text-sm">
                  <li>• Artwork and wall decor</li>
                  <li>• Plants and greenery</li>
                  <li>• Rugs and runner mats</li>
                  <li>• Specialty furniture pieces</li>
                  <li>• Larger decorative items</li>
                  <li>• Outdoor/balcony furniture</li>
                </ul>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Strategy: Buy essentials first from budget-friendly stores (IKEA, Home Box) to get comfortable quickly. Then gradually upgrade and refine with mid-range pieces. Hunt second-hand for designer items and custom pieces through Al Quoz carpenters.
              </p>
            </div>
          </div>
        </section>

        {/* Patrick's Note */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-2xl" style={{ color: '#0A1628' }}>→</div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0A1628' }}>Patrick's Note on Furnishing a Dubai Apartment</h3>
                <p className="text-gray-700">
                  Furnishing an apartment in Dubai is quite different from the UK. First, don't rush — buy essentials immediately, then gradually add pieces. Second, seriously consider second-hand buying and custom carpentry in Al Quoz — you'll furnish beautifully for a fraction of retail price. Third, remember the practical challenges: narrow lifts, humidity, and intense sun. Buy appropriate materials. Finally, leverage Dubai's incredible furniture variety. You can source everything from budget IKEA basics to bespoke custom pieces and high-end designer furniture all within one city. Many expats find their Dubai apartments better furnished than their UK homes at lower cost. It's one of Dubai's genuine advantages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#0A1628" }}>Related Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/guides/housing" className="p-4 rounded bg-gray-50 hover:bg-gray-100 transition border" style={{ borderColor: "#E5E7EB" }}>
                <p className="font-bold" style={{ color: "#0A1628" }}>Housing &amp; Rental</p>
              </Link>
              <Link href="/guides/community" className="p-4 rounded bg-gray-50 hover:bg-gray-100 transition border" style={{ borderColor: "#E5E7EB" }}>
                <p className="font-bold" style={{ color: "#0A1628" }}>Community &amp; Social</p>
              </Link>
              <Link href="/guides/concierge" className="p-4 rounded bg-gray-50 hover:bg-gray-100 transition border" style={{ borderColor: "#E5E7EB" }}>
                <p className="font-bold" style={{ color: "#0A1628" }}>Concierge Services</p>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-block" style={{ color: '#C9A84C' }}>
            ← Back to home
          </Link>
        </div>
      </div>
      <RelatedGuides items={RELATED} />
    </>
  );
}
