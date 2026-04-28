import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata({
  title: "Renting in Dubai as a UK Expat (2026): Best Areas, Prices & Cheque System",
  description: "How UK expats rent property in Dubai — best neighbourhoods (JLT, Marina, Downtown), 2026 rent prices, the cheque payment system, EJARI registration, and agent fees.",
  path: "/guides/housing",
});
const SCHEMA_URL = "https://www.dubaiexpat.co.uk/guides/housing";
const BREADCRUMBS = [
  { name: "Home", url: "https://www.dubaiexpat.co.uk/" },
  { name: "Guides", url: "https://www.dubaiexpat.co.uk/#categories" },
  { name: "Housing", url: SCHEMA_URL },
];

export default function HousingGuide() {
  return (
    <>
      <SchemaJsonLd
        type="Article"
        title="Renting in Dubai as a UK Expat (2026): Best Areas, Prices & Cheque System"
        description="How UK expats rent property in Dubai — best neighbourhoods, 2026 rent prices, the cheque system, EJARI."
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
            <span className="font-medium text-[#0A1628]">Housing &amp; Rental</span>
          </div>
        </div>
      </div>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-8 mt-6 md:mt-8 mb-12">
          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              Housing & Accommodation
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
              Finding a Home in Dubai: A Complete Guide for UK Expats (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
              Master the Dubai property market. From understanding the cheque system
              to choosing the perfect neighbourhood, we cover everything you need to
              rent or buy with confidence.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Dubai's Housing Market: A Different World
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you've rented in London or another UK city, Dubai's housing market is
                going to feel like stepping into a different universe. The pace is faster,
                the upfront costs are higher, the units are typically unfurnished, and the
                payment system revolves around cheques rather than monthly direct debits.
                For many UK expats, this comes as a shock, but understanding these
                differences upfront will help you navigate the market confidently.
              </p>
              <p>
                The Dubai rental market is dynamic and competitive. When a desirable
                property comes on the market, it can be claimed within days. Landlords hold
                most of the power, and they expect tenants to be flexible and responsive.
                Most landlords want payment in advance — often a full year's rent paid in
                post-dated cheques upfront, or sometimes in two to four instalments. This
                requires careful budgeting and substantial liquid savings before you arrive.
              </p>
              <p>
                However, Dubai's housing market is also well-regulated and transparent. There
                are established property portals with thousands of listings, professional
                estate agents governed by strict rules, and a formal registration system that
                protects both landlords and tenants. Compared to many other markets, it's
                orderly and predictable once you understand how it works. And perhaps most
                importantly, the value for money is exceptional. You can rent a modern
                one-bedroom apartment with sea views in a vibrant neighbourhood for less than
                you'd pay for a similar space in a mediocre London location.
              </p>
            </div>
          </div>
        </section>

        {/* Neighbourhoods Section */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#0A1628" }}>
              Choosing Your Neighbourhood
            </h2>
            <div className="space-y-8">
              {/* JVC */}
              <div className="border-l-4 pl-6" style={{ borderColor: "#E5E7EB" }}>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#0A1628" }}>
                  Jumeirah Village Circle (JVC)
                </h3>
                <p className="text-gray-600 font-semibold mb-2">
                  Budget-friendly, ideal for singles and young couples
                </p>
                <p className="text-gray-700 leading-relaxed">
                  JVC is where many expats begin their Dubai journey. This newer development
                  offers excellent value for money, with modern studios and one-bedroom
                  apartments at prices that won't break the bank. A typical one-bedroom
                  apartment rents for approximately AED 60,000 to AED 80,000 per year (around
                  £13,000 to £17,000). JVC is self-contained with shops, restaurants, and a
                  small marina, making it liveable without a car, though most residents have
                  one. It's popular with young professionals and those saving aggressively to
                  build their Dubai nest egg.
                </p>
              </div>

              {/* Dubai Marina */}
              <div className="border-l-4 pl-6" style={{ borderColor: "#E5E7EB" }}>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#0A1628" }}>
                  Dubai Marina
                </h3>
                <p className="text-gray-600 font-semibold mb-2">
                  Mid-range, vibrant, cosmopolitan, excellent nightlife
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you want to be in the heart of Dubai's expat action, Marina is where
                  you'll find it. This sprawling waterfront development is home to hundreds
                  of towers filled with apartments, restaurants, bars, cafés, and beaches.
                  Life here is walkable and vibrant — you can grab coffee, have lunch by the
                  water, and hit a bar in the evening without getting in your car. A
                  one-bedroom apartment in Dubai Marina typically costs AED 85,000 to AED
                  120,000 per year (approximately £18,000 to £26,000). It's more expensive
                  than JVC but significantly cheaper than Downtown, and the lifestyle appeal
                  is substantial. The catch is parking: spaces are limited and often rented
                  separately.
                </p>
              </div>

              {/* Downtown */}
              <div className="border-l-4 pl-6" style={{ borderColor: "#E5E7EB" }}>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#0A1628" }}>
                  Downtown Dubai
                </h3>
                <p className="text-gray-600 font-semibold mb-2">
                  Premium location, near Burj Khalifa, upscale dining and shopping
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Downtown is Dubai's prestige address, dominated by the Burj Khalifa and
                  Burj Khalifa Lake. Living here puts you at the epicentre of Dubai's most
                  iconic development. The area offers high-end shopping, fine dining, and an
                  upscale atmosphere. One-bedroom apartments range from AED 110,000 to AED
                  160,000 per year (approximately £23,000 to £34,000). It's significantly
                  pricier than Marina or JVC, but if you want prime location and prestige,
                  this is where you'll find it. Downtown appeals to senior executives,
                  investors, and those who value being at the literal centre of the action.
                </p>
              </div>

              {/* DIFC */}
              <div className="border-l-4 pl-6" style={{ borderColor: "#E5E7EB" }}>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#0A1628" }}>
                  DIFC (Dubai International Financial Centre)
                </h3>
                <p className="text-gray-600 font-semibold mb-2">
                  Business district, premium pricing, professional atmosphere
                </p>
                <p className="text-gray-700 leading-relaxed">
                  DIFC is the financial heart of Dubai, hosting the UAE's largest
                  concentration of banks, law firms, and financial services companies. If you
                  work in finance, the convenience of living steps from the office is
                  appealing. The area is relatively compact, safe, and professional. However,
                  pricing is premium due to high demand from finance professionals, and the
                  social scene is more corporate than vibrant. It suits those who prioritize
                  professional proximity and convenience over neighbourhood vibrancy.
                </p>
              </div>

              {/* Arabian Ranches and Villas */}
              <div className="border-l-4 pl-6" style={{ borderColor: "#E5E7EB" }}>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#0A1628" }}>
                  Arabian Ranches, The Springs, The Meadows
                </h3>
                <p className="text-gray-600 font-semibold mb-2">
                  Family villas, quiet green communities, excellent schools nearby
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you're relocating with a family and want more space, greenery, and a
                  suburban feel, these villa communities are ideal. Arabian Ranches is the
                  most established, with a strong sense of community and excellent schools
                  nearby. A typical three-bedroom villa rents for approximately AED 180,000
                  to AED 280,000 per year (roughly £38,000 to £59,000). These communities are
                  car-dependent — you'll need a vehicle — but they offer excellent value for
                  families compared to apartment living. The schools, parks, and community
                  facilities are excellent, making these popular choices for UK families
                  planning to stay long-term.
                </p>
              </div>

              {/* Jumeirah and Umm Suqeim */}
              <div className="border-l-4 pl-6" style={{ borderColor: "#E5E7EB" }}>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#0A1628" }}>
                  Jumeirah & Umm Suqeim
                </h3>
                <p className="text-gray-600 font-semibold mb-2">
                  Traditional beach areas, British community stronghold
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These traditional beachfront neighbourhoods are iconic Dubai locations with
                  a more relaxed, established feel than newer developments. Jumeirah offers
                  villas and some mid-rise apartments, with direct beach access and a strong
                  British community presence. Prices are varied depending on the specific
                  villa or apartment, but generally higher than inland neighbourhoods due to
                  the beach location. These areas appeal particularly to British families who
                  want familiarity, established schools, and beach proximity.
                </p>
              </div>

              {/* Business Bay */}
              <div className="border-l-4 pl-6" style={{ borderColor: "#E5E7EB" }}>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#0A1628" }}>
                  Business Bay
                </h3>
                <p className="text-gray-600 font-semibold mb-2">
                  Up and coming, good value, close to Downtown and DIFC
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Business Bay is experiencing rapid development and offers surprisingly good
                  value for its location. It's close to Downtown and DIFC, making it
                  convenient for professionals working in those areas, yet it's less saturated
                  and more affordable than either. The neighbourhood is still developing, so
                  there are ongoing construction projects, but it's gradually becoming an
                  attractive residential option with improving amenities and restaurants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Renting in Dubai */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              The Rental System: Understanding the Cheque System
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The most distinctive feature of renting in Dubai is the cheque payment
                system. Unlike the UK, where you pay rent monthly by standing order, Dubai
                landlords typically demand payment in the form of post-dated cheques, and
                they want them upfront.
              </p>
              <p>
                Most landlords will ask for one of the following arrangements: a single
                cheque for the full year's rent, or two to four post-dated cheques covering
                the year's payments. For example, if your annual rent is AED 100,000, the
                landlord might ask for four cheques of AED 25,000 each, dated for the first
                day of each three-month period. You must write these cheques, sign them, and
                hand them over at the time of lease signing. If you don't have a UAE bank
                account yet, you'll need to sort this urgently — opening an account is one
                of your first tasks upon arrival.
              </p>
              <p>
                EJARI registration is mandatory in Dubai. This is a government system that
                registers all residential tenancies. Your landlord must register the lease
                with the authorities, and you'll receive an EJARI certificate. This
                certificate is important — you'll need it when opening bank accounts, getting
                health insurance, sponsoring family members, and various other administrative
                tasks. Always ensure your lease is registered and that you have a copy of the
                EJARI certificate.
              </p>
              <p>
                Estate agent fees are typically five percent of the annual rent, and in
                Dubai, the tenant pays this fee. If the rent is AED 100,000 per year, you'll
                pay the agent AED 5,000 (approximately £1,050) as commission. This is usually
                collected at the time of lease signing.
              </p>
              <p>
                Security deposits are standard. For unfurnished properties, the deposit is
                typically five percent of annual rent; for furnished properties, it's ten
                percent. The deposit is held by the landlord or, increasingly, in a separate
                account, and returned to you when you vacate, provided the property is in good
                condition. Document the property's condition with photographs on arrival and
                before departure to avoid disputes.
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              What to Expect: Setting Up a Dubai Home
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Most rental apartments in Dubai are offered unfurnished. This is a crucial
                point for UK expats to understand. Unfurnished does not simply mean "no
                furniture." It typically means no furniture, no fitted kitchen, no white
                goods (cooker, fridge, dishwasher), and sometimes not even curtains or light
                fixtures. Many unfurnished units come completely bare — four walls and a
                floor, essentially.
              </p>
              <p>
                This means you'll need to budget for furnishing and equipping your apartment
                before or immediately after arrival. You'll need to purchase or rent:
                furniture, a bed, sofas, dining table, beds; white goods and kitchen
                equipment: refrigerator, stove, dishwasher, washing machine, microwave; soft
                furnishings: curtains, carpets, rugs; and miscellaneous items: lighting,
                shelving, and kitchen utensils. This can easily cost AED 15,000 to AED 40,000
                (approximately £3,200 to £8,500) depending on your taste and the size of your
                space. Many expats opt for a furnished apartment for their first year to avoid
                this upfront cost, then move to an unfurnished property once they're
                established.
              </p>
              <p>
                Standard Dubai leases are for one year. At the end of the lease, you can
                renew with your landlord, usually with a modest rent increase (two to five
                percent annually in normal markets). The notice period for both landlord and
                tenant to exit the lease is typically three months. This means if you want to
                move out after your first year, you'll need to notify your landlord three
                months before the lease expires.
              </p>
            </div>
          </div>
        </section>

        {/* Short-Term Strategy */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Start Short-Term: The Smart First Move
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                One of the best pieces of advice for newly arriving UK expats is to avoid
                committing to a long lease on your first day in Dubai. Instead, book a
                serviced apartment or hotel apartment for your first one to two months. Yes,
                it's more expensive per night than long-term rent, but it provides invaluable
                flexibility and peace of mind while you adjust to the city. We've found{" "}
                <a
                  href="https://clk.omgt6.com/?PID=12746&AID=2361711&MID=guide-housing-short-term-body"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="font-semibold underline hover:text-[#C9A84C]"
                  style={{ color: "#0A1628" }}
                >
                  Trip.com
                </a>{" "}
                consistently has Dubai serviced-apartment inventory that doesn&apos;t show on
                Booking.com or Expedia — particularly in JLT, Marina and Downtown — and their
                month-long booking flow tends to be cleaner than the Western sites for
                expat-grade stays.
              </p>
              <p>
                During this period, you'll explore different neighbourhoods, get a feel for
                daily life in various areas, understand commute times from your workplace, and
                identify where you actually want to live. You'll avoid the common mistake of
                signing a year-long lease for a neighbourhood that turns out to be too far
                from work, too noisy, or simply not what you expected. You'll also have time
                to set up your bank account, sort out your Emirates ID and EJARI, and get
                oriented without the pressure of immediate house-hunting.
              </p>
              <p>
                Serviced apartments in central locations cost anywhere from AED 2,500 to AED
                5,000 per month (approximately £530 to £1,050), compared to AED 5,000 to AED
                10,000 monthly rent (AED 60,000 to AED 120,000 annually) for long-term rentals.
                The premium for the first one to two months is well worth the reduction in
                stress and the elimination of a potentially costly mistake.
              </p>
            </div>
          </div>
        </section>

        {/* Buying Property */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Buying Property in Dubai
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                While most newly arriving expats rent, many eventually decide to buy. The UAE
                has opened freehold areas where foreign investors can purchase property with
                full ownership rights. These include high-profile developments like the Downtown
                Dubai, Dubai Marina, Jumeirah Beach Residence, Palm Jumeirah, and numerous villa
                communities and apartment buildings across the Emirates.
              </p>
              <p>
                The property purchase process involves several key steps. First, you find the
                property you want to purchase. Next, you negotiate the price and sign a
                preliminary purchase agreement. You then arrange financing if you're taking a
                mortgage. Most UAE banks offer mortgages to expatriates, typically up to
                seventy-five percent loan-to-value (LTV) for the first property if the price
                is under AED 5 million. For example, if you're buying a property for AED 2
                million, you can typically borrow up to AED 1.5 million and need to pay AED
                500,000 as a down payment.
              </p>
              <p>
                Transfer fees, known as DLD (Dubai Land Department) fees, amount to approximately
                four percent of the property value. These are paid when the property transfer is
                completed. Additional costs include agent fees (typically two to three percent,
                paid by the buyer), legal fees, and inspection costs. When budgeting for a
                purchase, expect total costs of approximately six to eight percent on top of the
                purchase price.
              </p>
              <p>
                Purchasing property also positions you well for the Golden Visa. If you buy
                property worth AED 2 million or more, you qualify for the ten-year renewable
                Golden Visa, which offers long-term residency stability and the flexibility to
                work for any employer or operate your own business.
              </p>
            </div>
          </div>
        </section>

        {/* Practical Tips */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Practical Tips for Finding Your Home
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#0A1628" }}>
                  Use the Major Portals
                </h3>
                <p>
                  Property Finder and Bayut are Dubai's two dominant property portals. Nearly
                  every property for rent or sale appears on these sites. Create accounts on
                  both, set up saved searches for your preferred neighbourhoods and price
                  ranges, and enable notifications. You'll be alerted to new listings the moment
                  they're posted, which is crucial in a fast-moving market.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#0A1628" }}>
                  Work with RERA-Registered Agents
                </h3>
                <p>
                  RERA (Real Estate Regulatory Agency) agents are regulated by Dubai's
                  authorities and must follow strict professional standards. Always work with
                  registered agents. You can verify an agent's registration on the RERA website.
                  Avoid unregistered individuals or unlicensed operators, no matter how good
                  their deal sounds.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#0A1628" }}>
                  Spot Red Flags
                </h3>
                <p>
                  Be wary of deals that seem too good to be true — they usually are. Avoid
                  properties with unregistered leases, landlords who refuse to register with
                  EJARI, or requests for cash payments without contracts. Don't send money
                  before signing a formal lease. If something feels off, move on — Dubai has
                  plenty of legitimate properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#0A1628" }}>
                  Move Fast When You Find the Right Place
                </h3>
                <p>
                  Good properties in popular neighbourhoods and reasonable price ranges can be
                  claimed within hours. Once you've found something you like, be prepared to
                  move quickly. Have your documents ready, know your budget, and be willing to
                  sign on the spot if everything checks out. Hesitation can mean losing the
                  property to another tenant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Patrick's Tip */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div
              className="p-6 md:p-8 rounded-lg border-l-4"
              style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E7EB" }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: "#0A1628" }}>
                Patrick's Tip
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The biggest shock for UK arrivals is paying a year's rent upfront. Budget for
                this before you leave the UK. You'll need accessible savings of at least three
                months' rent plus the deposit plus agent fees on arrival. If you're targeting
                a one-bedroom apartment at AED 100,000 per year (approximately £21,000 annually,
                or £1,750 monthly), you'll need roughly £1,050 for agent fees, £1,050 for the
                security deposit, and £21,000 for the first year's rent. That's nearly £24,000
                in liquid savings required just to secure accommodation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Many companies provide housing allowances or provide accommodation directly,
                which significantly eases this burden. Always negotiate your employment contract
                before arriving to clarify whether housing allowance is included. If you're
                moving independently, budget conservatively and ensure you have these funds in
                an easily accessible account before boarding the plane.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
              Next Steps
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/guides/banking"
                className="block p-6 rounded-lg text-center font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
              >
                Set Up Your Banking
              </Link>
              <Link
                href="/guides/community"
                className="block p-6 rounded-lg text-center font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: "#FDF8ED", color: "#C9A84C", border: "2px solid #C9A84C" }}
              >
                Connect With the Community
              </Link>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8" style={{ color: "#0A1628" }}>
              Related Guides
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/guides/visa-residency"
                className="p-6 rounded-lg hover:bg-gray-800 transition"
                style={{ backgroundColor: "rgba(201, 168, 76, 0.05)", borderLeft: "4px solid #C9A84C" }}
              >
                <h4 className="font-bold mb-2" style={{ color: "#0A1628" }}>
                  Visa & Residency
                </h4>
                <p className="text-gray-500 text-sm">
                  Complete guide to UAE visas and residency options
                </p>
              </Link>
              <Link
                href="/guides/banking"
                className="p-6 rounded-lg hover:bg-gray-800 transition"
                style={{ backgroundColor: "rgba(201, 168, 76, 0.05)", borderLeft: "4px solid #C9A84C" }}
              >
                <h4 className="font-bold mb-2" style={{ color: "#0A1628" }}>
                  Banking & Finance
                </h4>
                <p className="text-gray-500 text-sm">
                  Open accounts and manage your money in the UAE
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
