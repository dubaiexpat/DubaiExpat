
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Food & Drink in Dubai | Dubai Expat Guides',
  description: 'Essential guide to groceries, restaurants, Friday brunch, wine & spirits, and organic food delivery in Dubai for expats.',
  openGraph: {
    title: 'Food & Drink in Dubai | Dubai Expat Guides',
    description: 'Essential guide to groceries, restaurants, Friday brunch, wine & spirits, and organic food delivery in Dubai for expats.',
    type: 'article',
  },
};

export default function FoodDrinkGuide() {
  return (
    <>
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
            <span className="font-medium text-[#0A1628]">Food &amp; Drink</span>
          </div>
        </div>
      </div>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-8 mt-6 md:mt-8 mb-12">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              Food &amp; Drink
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
              Food &amp; Drink in Dubai
            </h1>
            <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
              From UK supermarkets to fine dining, Friday brunches to wine shopping — everything you need to know about eating and drinking in Dubai.
            </p>
          </div>
        </section>

        {/* Where to Shop for Groceries */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Where to Shop for Groceries
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Dubai has excellent options for grocery shopping, with several chains catering specifically to expats:
              </p>
              <ul className="space-y-3 ml-4 text-gray-700">
                <li>
                  <strong style={{ color: "#0A1628" }}>Spinneys & Waitrose</strong> — The two most popular supermarkets with UK expats, offering a very similar UK range. Both have multiple locations across Dubai and are your best bet for familiar brands and products.
                </li>
                <li>
                  <strong style={{ color: "#0A1628" }}>Carrefour</strong> — Excellent for bulk buying and competitive prices. Great for household essentials and international products.
                </li>
                <li>
                  <strong style={{ color: "#0A1628" }}>Eataly Dubai Mall</strong> — Premium Italian food hall with fresh pasta, cured meats, cheeses, and gourmet ingredients. Perfect for special occasions and quality produce.
                </li>
                <li>
                  <strong style={{ color: "#0A1628" }}>Specialty Delis</strong> — Various independent delis throughout Dubai offer imported goods, artisanal products, and hard-to-find items.
                </li>
                <li>
                  <strong style={{ color: "#0A1628" }}>Organic Foods & Café</strong> — A local chain specializing in organic products, with both retail locations and delivery options. Great for health-conscious shoppers.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Restaurants by Area */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Best Restaurants by Area
            </h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0A1628" }}>Marina & JBR</h3>
                <p>Home to some of Dubai's most vibrant dining. Try Zuma for Japanese fine dining, Nobu for contemporary Japanese, or STK for premium steaks.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0A1628" }}>DIFC (Downtown Financial Centre)</h3>
                <p>The business district with world-class dining. Gordon Ramsay's Bread Street Kitchen, Gaucho for Argentine beef, and Coya for Peruvian cuisine are exceptional choices.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0A1628" }}>Downtown Dubai</h3>
                <p>Armani/Aqua offers fine dining with Burj Khalifa views. Couqley is excellent for authentic Lebanese cuisine in a sophisticated setting.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0A1628" }}>Old Dubai & Deira</h3>
                <p>Al Fanar specializes in authentic Emirati cuisine and is essential for experiencing local food culture. Explore local Arabic favourites throughout the area for budget-friendly, genuine dining.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0A1628" }}>Jumeirah</h3>
                <p>Perfect for casual dining. The Lime Tree Cafe offers excellent brunch and light meals, while Shakespeare & Co is ideal for coffee and relaxed lunches by the beach.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0A1628" }}>Palm Jumeirah</h3>
                <p>Home to spectacular dining experiences. Ossiano at Atlantis is iconic for underwater views, Nobu offers premium Japanese, and numerous beach clubs provide casual seaside dining.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Friday Brunch Culture */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Friday Brunch Culture
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Friday brunch is a Dubai institution and not to be missed. It's a set menu experience available from midday onwards, typically running until late afternoon, and nearly always includes unlimited drinks (alcoholic and soft).
              </p>
              <div className="bg-gray-50 p-4 rounded border-l-2" style={{ borderLeftColor: "#E5E7EB" }}>
                <p className="font-bold mb-2" style={{ color: "#0A1628" }}>Price Range</p>
                <p>AED 250–500 per person depending on the venue and level of luxury.</p>
              </div>
              <div>
                <p className="font-bold mb-3" style={{ color: "#0A1628" }}>Top Brunch Venues</p>
                <ul className="space-y-2 ml-4">
                  <li><strong>Saffron at Atlantis</strong> — Exceptional international spread with live cooking stations.</li>
                  <li><strong>Weslodge</strong> — Social brunch atmosphere, popular with younger expats.</li>
                  <li><strong>Zero Gravity</strong> — Beach club brunch with vibrant DJ and poolside setting.</li>
                  <li><strong>Rockfish</strong> — Excellent seafood brunch with premium service.</li>
                </ul>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Tip: Book in advance, especially during peak season. Friday brunch is a social highlight of Dubai expat life and a great way to meet other expats and locals.
              </p>
            </div>
          </div>
        </section>

        {/* Wine & Spirits */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Where to Buy Wine & Spirits
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Dubai has two main licensed retailers for alcohol, both with multiple locations across the emirate:
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-bold mb-1" style={{ color: "#0A1628" }}>MMI (Maritime & Mercantile International)</p>
                  <p>The largest chain with numerous stores. Available through their app for easy ordering and home delivery.</p>
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#0A1628" }}>African + Eastern</p>
                  <p>The established competitor with equally broad selection and convenient locations. Also offers online ordering and delivery.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: "#E5E7EB" }}>
                <p className="font-bold mb-2" style={{ color: "#0A1628" }}>Personal Liquor Licence</p>
                <p className="mb-2">
                  To purchase alcohol in Dubai, you'll need a personal liquor licence. This is emirate-specific — Dubai residents must obtain one, but the process is straightforward and completely free.
                </p>
                <p className="text-sm">
                  Simply download the MMI or A&E app, complete a brief registration, and your licence is approved. Once obtained, you can purchase at any licensed retailer.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: "#E5E7EB" }}>
                <p className="font-bold mb-2" style={{ color: "#0A1628" }}>Pricing Guide</p>
                <ul className="space-y-1 text-sm">
                  <li>Supermarket wine: AED 45–80 per bottle</li>
                  <li>Quality wine: AED 80–200 per bottle</li>
                  <li>Spirits: Comparable to UK prices</li>
                </ul>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Both retailers offer home delivery, making it convenient to stock your home. Delivery times are typically 24–48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Cigars */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Cigars & Premium Tobacco
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Dubai has a thriving cigar culture with excellent retailers and dedicated smoking venues:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: "#0A1628" }}>The Cigar Room, DIFC</strong> — Premier destination for serious cigar enthusiasts. Premium selection and knowledgeable staff.
                </li>
                <li>
                  <strong style={{ color: "#0A1628" }}>Davidoff at Harvey Nichols, Mall of the Emirates</strong> — Iconic luxury brand with excellent range and professional guidance.
                </li>
                <li>
                  <strong style={{ color: "#0A1628" }}>Café Bateel</strong> — Known for quality Cuban imports and authentic cigar experience.
                </li>
              </ul>

              <div className="bg-gray-50 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: "#E5E7EB" }}>
                <p className="font-bold mb-2" style={{ color: "#0A1628" }}>Gentleman's Lounge Culture</p>
                <p>
                  Dubai embraces a sophisticated cigar and gentleman's lounge culture. It's legal to smoke cigars in designated areas and private spaces. Many hotels and clubs have dedicated cigar lounges with premium ambiance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Organic Meat Deliveries */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Organic Meat Deliveries
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                High-quality organic meat is readily available in Dubai, with several reputable suppliers:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: "#0A1628" }}>Kibsons.com</strong> — The most popular choice for organic meat delivery. Australian halal-certified organic meat with reliable weekly delivery.
                </li>
                <li>
                  <strong style={{ color: "#0A1628" }}>Ripe Food & Craft</strong> — Excellent online ordering and weekend market presence at Zabeel Park. Premium quality with strong sustainability focus.
                </li>
                <li>
                  <strong style={{ color: "#0A1628" }}>Organic Oasis</strong> — Specializes in certified organic meat with emphasis on local and international sources.
                </li>
              </ul>

              <div className="bg-gray-50 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: "#E5E7EB" }}>
                <p className="font-bold mb-2" style={{ color: "#0A1628" }}>Important: Halal Certification</p>
                <p>
                  All meat sold in the UAE is halal. However, if you specifically want organic-certified halal meat, this is available through the suppliers above. Organic halal certification ensures both organic farming standards and halal slaughter practices.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded border-l-2 mt-4" style={{ borderLeftColor: "#E5E7EB" }}>
                <p className="font-bold mb-2" style={{ color: "#0A1628" }}>Price Comparison vs UK</p>
                <p>
                  Organic meat in Dubai is typically similar in price to organic UK suppliers. While imported organic meat may carry a premium, local and Australian sourced organic meat is competitive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Organic Fruit & Veg Deliveries */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Organic Fruit & Vegetable Deliveries
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Fresh organic produce is widely available through multiple channels:
              </p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong style={{ color: "#0A1628" }}>Kibsons.com</strong> — The largest and most affordable option for organic fruit and veg. Reliable weekly delivery with excellent selection.
                </li>
                <li>
                  <strong style={{ color: "#0A1628" }}>Ripe Market, Zabeel Park</strong> — Saturday market atmosphere with wonderful community vibe. Browse, select, and support local growers directly.
                </li>
                <li>
                  <strong style={{ color: "#0A1628" }}>Organic Foods & Café</strong> — Retail chain locations with fresh organic produce available for immediate purchase.
                </li>
                <li>
                  <strong style={{ color: "#0A1628" }}>Greenhouse Organic Box Schemes</strong> — Curated organic boxes delivered weekly, supporting sustainable farming.
                </li>
                <li>
                  <strong style={{ color: "#0A1628" }}>The Farmer's Market, Souq Al Bahar</strong> — Regular farmers' market with organic vendors, local produce, and great community atmosphere.
                </li>
              </ul>

              <p className="text-sm text-gray-500 mt-6">
                Tip: Sign up for weekly deliveries to save money and ensure consistent supply. Most services offer flexible subscription options, and you can easily pause or skip weeks.
              </p>
            </div>
          </div>
        </section>

        {/* Patrick's Note */}
        <section className="px-4 py-12 md:px-8 bg-gray-50" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-2xl" style={{ color: "#0A1628" }}>→</div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#0A1628" }}>Patrick's Note on Food Culture in Dubai</h3>
                <p className="text-gray-700">
                  Food in Dubai is exceptional — you'll enjoy world-class restaurants from around the globe, access to high-quality organic products, and the Friday brunch tradition is genuinely fun. The shopping is excellent for expats; you'll find everything familiar from home alongside incredible Middle Eastern and international cuisine. Dubai's multicultural food scene reflects its diverse population, so you can eat authentically from dozens of countries while also finding your UK comfort foods. Don't miss the local Arabic food and Emirati cuisine — it's delicious and offers authentic insight into Emirati culture. Friday brunch with friends becomes a cherished social ritual for most expats in Dubai.
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
              <Link href="/guides/nightlife" className="p-4 rounded bg-gray-50 hover:bg-gray-100 transition border" style={{ borderColor: "#E5E7EB" }}>
                <p className="font-bold" style={{ color: "#0A1628" }}>Nightlife & Entertainment</p>
              </Link>
              <Link href="/guides/concierge" className="p-4 rounded bg-gray-50 hover:bg-gray-100 transition border" style={{ borderColor: "#E5E7EB" }}>
                <p className="font-bold" style={{ color: "#0A1628" }}>Concierge Services</p>
              </Link>
              <Link href="/guides/community" className="p-4 rounded bg-gray-50 hover:bg-gray-100 transition border" style={{ borderColor: "#E5E7EB" }}>
                <p className="font-bold" style={{ color: "#0A1628" }}>Community & Social</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-sm hover:text-[#0A1628]" style={{ color: "#C9A84C" }}>
              ← Back to home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
