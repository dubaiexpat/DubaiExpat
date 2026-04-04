
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Furniture & Interiors in Dubai | Dubai Expat Guides',
  description: 'Complete guide to buying furniture in Dubai — from IKEA and budget options to high-end designer stores, bespoke carpentry, and second-hand finds.',
  openGraph: {
    title: 'Furniture & Interiors in Dubai | Dubai Expat Guides',
    description: 'Complete guide to buying furniture in Dubai — from IKEA and budget options to high-end designer stores, bespoke carpentry, and second-hand finds.',
    type: 'article',
  },
};

export default function FurnitureGuide() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6" style={{ color: '#C9A84C' }}>
            Furniture & Interiors in Dubai
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your complete guide to furnishing an apartment in Dubai — from budget-friendly options to luxury designer pieces and bespoke custom carpentry.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-sm" style={{ color: '#C9A84C' }}>
            ← Home
          </Link>
          <span className="text-gray-500 mx-2">/</span>
          <Link href="/" className="text-sm" style={{ color: '#C9A84C' }}>
            Guides
          </Link>
          <span className="text-gray-500 mx-2">/</span>
          <span className="text-sm text-gray-500">Furniture & Interiors</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Budget & Affordable */}
          <section className="bg-gray-900 rounded-lg p-8 border-l-4" style={{ borderLeftColor: '#C9A84C' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#C9A84C' }}>
              Budget & Affordable Options
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                When furnishing on a budget, Dubai has excellent options that offer good value without compromising on quality:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: '#C9A84C' }}>IKEA, Festival City</strong> — A large, fully-stocked store with the same range as UK IKEA. Very popular with expats for affordable basics and stylish pieces. Assembly service available.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>ACE Hardware</strong> — Excellent for basics and outdoor furniture. Competitive pricing on tools, home improvement items, and garden furniture.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>Home Box</strong> — Dubai's local equivalent of Dunelm. Good for soft furnishings, curtains, bedding, and home accessories at reasonable prices.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>Dragon Mart</strong> — A massive Chinese wholesale mall offering incredible bargains on furniture and home items. Quality varies, but patience and browsing can yield excellent finds at fraction of retail prices.
                </li>
              </ul>
            </div>
          </section>

          {/* Mid-Range */}
          <section className="bg-gray-900 rounded-lg p-8 border-l-4" style={{ borderLeftColor: '#C9A84C' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#C9A84C' }}>
              Mid-Range & Contemporary
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                For stylish, quality furniture at fair prices, these retailers offer excellent value:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: '#C9A84C' }}>Marina Home Interiors</strong> — A UAE brand known for stylish, contemporary furniture with excellent quality for the price. Strong reputation among Dubai expats.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>West Elm</strong> — Available at Dubai Mall and Mall of the Emirates. Same design-forward range as UK and US locations, with consistent quality and customer service.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>H&M Home</strong> — Multiple mall locations with trendy, affordable home furnishings, textiles, and decor.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>Pottery Barn</strong> — Mall of the Emirates location with classic American home style, quality construction, and good value.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>Crate & Barrel</strong> — Dubai Mall location offering versatile, well-designed furniture for various styles and budgets.
                </li>
              </ul>
            </div>
          </section>

          {/* High-End & Designer */}
          <section className="bg-gray-900 rounded-lg p-8 border-l-4" style={{ borderLeftColor: '#C9A84C' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#C9A84C' }}>
              High-End & Designer Furniture
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                For luxury and designer pieces, Dubai's premium design district and high-end retailers offer exceptional selections:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: '#C9A84C' }}>The One</strong> — A local luxury brand specializing in high-end, contemporary furniture. Excellent craftsmanship and exclusive designs popular with affluent Dubai residents.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>Eichholtz, DIFC & Design District (d3)</strong> — A prestigious Dutch luxury brand with a strong Dubai presence. Premium contemporary and classic designs with exceptional quality.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>B&B Italia at Design District (d3)</strong> — The iconic Italian design house known for innovative, architecturally-inspired furniture.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>Roche Bobois</strong> — Jumeirah location offering luxury French design with sophisticated, bespoke options.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>BoConcept</strong> — Multiple locations providing Scandinavian-inspired designer furniture with modular, customizable options.
                </li>
              </ul>
            </div>
          </section>

          {/* Bespoke & Custom Carpentry */}
          <section className="bg-gray-900 rounded-lg p-8 border-l-4" style={{ borderLeftColor: '#C9A84C' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#C9A84C' }}>
              Bespoke & Custom Carpentry
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                One of Dubai's best-kept secrets is the availability of high-quality custom furniture at remarkably reasonable prices:
              </p>
              <div className="bg-gray-800 p-4 rounded border-l-2" style={{ borderLeftColor: '#C9A84C' }}>
                <p className="font-bold mb-2" style={{ color: '#C9A84C' }}>Al Quoz Industrial Area</p>
                <p>
                  This warehouse district is home to dozens of skilled custom furniture makers and carpenters. You can commission bespoke pieces, have designs replicated from photos, or have furniture customized to exact specifications — often at a fraction of retail prices.
                </p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: '#C9A84C' }}>
                <p className="font-bold mb-2" style={{ color: '#C9A84C' }}>Satwa Upholstery Workshops</p>
                <p>
                  The Satwa district specializes in upholstery services. Perfect for reupholstering existing furniture or creating custom sofas and chairs to your exact specifications.
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: '#C9A84C' }}>
                <p className="font-bold mb-2" style={{ color: '#C9A84C' }}>Timeline & Budget</p>
                <p>
                  Allow 4–6 weeks for custom pieces. Budget is typically significantly lower than retail — often 40–60% less than equivalent designer furniture while maintaining excellent quality and craftsmanship.
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Tip: Get recommendations from expat Facebook groups for trusted makers. Quality varies, so check portfolios and ask for references before committing.
              </p>
            </div>
          </section>

          {/* Second-Hand Furniture */}
          <section className="bg-gray-900 rounded-lg p-8 border-l-4" style={{ borderLeftColor: '#C9A84C' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#C9A84C' }}>
              Buying Second-Hand Furniture
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Many expats furnish entire apartments using second-hand pieces. Dubai's transient population constantly creates excellent buying opportunities:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: '#C9A84C' }}>Dubizzle.com</strong> — The UAE's equivalent of Gumtree or eBay. Vast selection of furniture from expats leaving Dubai. Browse by area and price range.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>Facebook Groups</strong> — "Expats in Dubai Buy & Sell" groups are extremely active. Great prices, quick turnover, and easy messaging with sellers.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>Moving Sales</strong> — Watch for notices posted in building lobbies announcing moving sales. Often yield excellent furniture finds from expats relocating.
                </li>
              </ul>

              <div className="bg-gray-800 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: '#C9A84C' }}>
                <p className="font-bold mb-2" style={{ color: '#C9A84C' }}>Second-Hand Furnishing Strategy</p>
                <p>
                  It's entirely feasible to furnish a Dubai apartment almost entirely with second-hand pieces. Quality designer furniture often appears at 30–50% of retail price. Many items are barely used as expats frequently relocate.
                </p>
              </div>
            </div>
          </section>

          {/* Outdoor & Garden Furniture */}
          <section className="bg-gray-900 rounded-lg p-8 border-l-4" style={{ borderLeftColor: '#C9A84C' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#C9A84C' }}>
              Outdoor & Garden Furniture
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Dubai's climate requires specific considerations for outdoor furniture:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: '#C9A84C' }}>IKEA</strong> — Good range of affordable outdoor furniture designed for durability.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>ACE Hardware</strong> — Best selection for outdoor furniture with emphasis on UV-resistant materials and quality construction.
                </li>
                <li>
                  <strong style={{ color: '#C9A84C' }}>Safat Home</strong> — Specializes in outdoor and garden furniture suitable for Middle Eastern climates.
                </li>
              </ul>

              <div className="bg-gray-800 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: '#C9A84C' }}>
                <p className="font-bold mb-2" style={{ color: '#C9A84C' }}>Critical: UV Resistance</p>
                <p>
                  Dubai's intense UV exposure is brutal on furniture. Standard UK garden furniture fades and deteriorates quickly. Always buy outdoor furniture specifically labeled as UV-resistant. Look for high-quality resin, treated wood, or powder-coated metals.
                </p>
              </div>
            </div>
          </section>

          {/* Key Tips */}
          <section className="bg-gray-900 rounded-lg p-8 border-l-4" style={{ borderLeftColor: '#C9A84C' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#C9A84C' }}>
              Key Tips for Buying Furniture in Dubai
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="space-y-2">
                <p className="font-bold" style={{ color: '#C9A84C' }}>1. Measure Doorways & Lifts</p>
                <p>
                  Before purchasing large pieces, measure your apartment's doorways and lift dimensions. UAE apartment lifts are often narrow, and oversized furniture cannot fit. This is a common and expensive mistake.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-bold" style={{ color: '#C9A84C' }}>2. AC-Resistant Materials</p>
                <p>
                  Dubai's air conditioning and humidity create challenges. Check if solid wood furniture is treated for moisture resistance. Humidity can warp untreated wood. Engineered wood or treated pieces are preferable.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-bold" style={{ color: '#C9A84C' }}>3. Delivery Lead Times</p>
                <p>
                  International furniture brands often have 6–12 week delivery times due to shipping. Plan accordingly and order early if purchasing from overseas brands. Local suppliers typically deliver much faster.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-bold" style={{ color: '#C9A84C' }}>4. Seasonal Sales</p>
                <p>
                  Most retailers have significant sales during end-of-season clearances. Monitor sales during summer (very hot, less foot traffic) for excellent bargains.
                </p>
              </div>
            </div>
          </section>

          {/* Moving In Checklist */}
          <section className="bg-gray-800 rounded-lg p-8 border-l-4" style={{ borderLeftColor: '#C9A84C' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#C9A84C' }}>
              Moving In Checklist: What to Buy First
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="bg-gray-900 p-4 rounded">
                <p className="font-bold mb-3" style={{ color: '#C9A84C' }}>Priority 1: Essential Items (Buy Immediately)</p>
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

              <div className="bg-gray-900 p-4 rounded">
                <p className="font-bold mb-3" style={{ color: '#C9A84C' }}>Priority 2: Comfort Items (First 2–4 Weeks)</p>
                <ul className="space-y-2 ml-4 text-sm">
                  <li>• Additional seating/lounge furniture</li>
                  <li>• Coffee/side tables</li>
                  <li>• Shelving or bookcase</li>
                  <li>• Mirrors (expand sense of space)</li>
                  <li>• Additional storage solutions</li>
                  <li>• Soft furnishings (cushions, throws)</li>
                </ul>
              </div>

              <div className="bg-gray-900 p-4 rounded">
                <p className="font-bold mb-3" style={{ color: '#C9A84C' }}>Priority 3: Finishing Touches (Weeks 4+)</p>
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
          </section>

          {/* Patrick's Note */}
          <section className="bg-gray-800 rounded-lg p-8 border-l-4" style={{ borderLeftColor: '#C9A84C' }}>
            <div className="flex items-start gap-4">
              <div className="text-2xl" style={{ color: '#C9A84C' }}>→</div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#C9A84C' }}>Patrick's Note on Furnishing a Dubai Apartment</h3>
                <p className="text-gray-600">
                  Furnishing an apartment in Dubai is quite different from the UK. First, don't rush — buy essentials immediately, then gradually add pieces. Second, seriously consider second-hand buying and custom carpentry in Al Quoz — you'll furnish beautifully for a fraction of retail price. Third, remember the practical challenges: narrow lifts, humidity, and intense sun. Buy appropriate materials. Finally, leverage Dubai's incredible furniture variety. You can source everything from budget IKEA basics to bespoke custom pieces and high-end designer furniture all within one city. Many expats find their Dubai apartments better furnished than their UK homes at lower cost. It's one of Dubai's genuine advantages.
                </p>
              </div>
            </div>
          </section>

          {/* Related Guides */}
          <section className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#C9A84C' }}>
              Related Guides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/guides/housing" className="p-4 rounded hover:bg-gray-800 transition border border-gray-200" style={{ borderColor: '#C9A84C' }}>
                <p className="font-bold" style={{ color: '#C9A84C' }}>Housing & Rental</p>
              </Link>
              <Link href="/guides/community" className="p-4 rounded hover:bg-gray-800 transition border border-gray-200" style={{ borderColor: '#C9A84C' }}>
                <p className="font-bold" style={{ color: '#C9A84C' }}>Community & Social</p>
              </Link>
              <Link href="/guides/concierge" className="p-4 rounded hover:bg-gray-800 transition border border-gray-200" style={{ borderColor: '#C9A84C' }}>
                <p className="font-bold" style={{ color: '#C9A84C' }}>Concierge Services</p>
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-block" style={{ color: '#C9A84C' }}>
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
