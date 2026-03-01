import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Marcus's Story - Dubai Expat",
  description: "How a London entrepreneur built a fintech business in Dubai using the UAE Green Visa",
};

export default function MarcusPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#0A1628] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/case-studies"
              className="hover:text-[#0A1628] transition-colors"
            >
              Case Studies
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0A1628] font-medium">Marcus</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#0A1628] to-[#0F1F35] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-baseline gap-3 mb-6">
            <h1 className="text-4xl font-bold">Marcus</h1>
            <span className="inline-block px-3 py-1 bg-[#C9A84C] text-[#0A1628] text-xs font-semibold rounded">
              Entrepreneur
            </span>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl">
            From London banker to Dubai fintech founder. How Marcus leveraged the
            UAE Green Visa to build his own business in DIFC.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Story Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-6">The Move</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Marcus spent fifteen years in financial services in London, rising
              to a senior management position at a prestigious firm. But by 2019,
              the combination of high UK taxes, regulatory fatigue, and the
              grinding commute had worn him down. When COVID-19 hit and forced a
              reckoning about where he wanted to live and work, Marcus started
              looking at alternatives.
            </p>
            <p>
              Dubai's fintech boom caught his attention. The city was attracting
              investment and talent, regulations were becoming more progressive,
              and—crucially—the newly introduced UAE Green Visa offered a path
              that hadn't existed before. Unlike traditional employment visas that
              tied him to a single employer, the Green Visa would let him be
              self-sponsored through a company he owned.
            </p>
            <p>
              In early 2020, at age 38, Marcus made the leap. He set up a UAE
              mainland LLC, navigated the visa process, and relocated to a
              penthouse apartment in DIFC—close to the business community and the
              international financial hub he wanted to be part of. Six years
              later, his decision has paid off beyond what he anticipated.
            </p>
          </div>
        </section>

        {/* The Process Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-6">The Process</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Setting up in Dubai is structured but requires patience and expert
              guidance. Marcus's journey took approximately six weeks from decision
              to approved visa.
            </p>
            <p>
              The first step was establishing his UAE mainland LLC company. This
              cost him approximately AED 15,000 (£3,200), though he initially
              underestimated the complexity. He quickly hired a local business
              setup agent—a service provider specializing in company registration—which
              added another AED 5,000 to his costs but saved him weeks of
              bureaucratic confusion.
            </p>
            <p>
              Once the company was registered, he applied for the Green Visa
              through company ownership. The UAE required proof of company
              registration, a corporate bank account, and valid health insurance.
              The visa approval came through within four weeks, making the total
              timeline manageable.
            </p>
            <p>
              One crucial detail: Marcus had to notify HMRC about his departure
              from the UK and file a tax return for the year of departure. This
              step is often overlooked by departing expats and can create
              complications later. He completed it before leaving, avoiding future
              headaches.
            </p>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-6">Lessons Learned</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The UAE's bureaucratic requirements were more complex than Marcus
              anticipated. Navigating VAT registration (the UAE operates a 5% VAT
              system), corporate tax nuances, and visa compliance requires expert
              support—hence why his investment in a business setup agent paid for
              itself many times over.
            </p>
            <p>
              Tax complications also extended to the UK. The year of departure is
              particularly complex from a UK tax perspective; it's a split year
              with different rules, and getting it wrong can trigger costly
              corrections. Marcus worked with a UK tax advisor throughout the
              process and strongly recommends others do the same.
            </p>
            <p>
              Beyond administrative challenges, there's a learning curve on how
              business operates in Dubai. Relationship-building moves at a
              different pace, contract terms can be more informal, and the
              importance of a strong local sponsor network became clear quickly.
            </p>
          </div>
        </section>

        {/* Key Facts Card */}
        <section className="mb-12 bg-gray-50 border-l-4 border-[#C9A84C] rounded-lg p-8">
          <h3 className="text-xl font-bold text-[#0A1628] mb-6">Key Facts</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                Year of Move
              </p>
              <p className="text-lg font-semibold text-[#0A1628]">2020</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">Age</p>
              <p className="text-lg font-semibold text-[#0A1628]">38</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                Previous Location
              </p>
              <p className="text-lg font-semibold text-[#0A1628]">London, UK</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                Visa Type
              </p>
              <p className="text-lg font-semibold text-[#0A1628]">
                UAE Green Visa (5 years)
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                Neighbourhood
              </p>
              <p className="text-lg font-semibold text-[#0A1628]">
                DIFC / Downtown Dubai
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                Setup Timeline
              </p>
              <p className="text-lg font-semibold text-[#0A1628]">6 weeks</p>
            </div>
          </div>
        </section>

        {/* Top Tips Card */}
        <section className="mb-12 bg-[#0A1628] text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Top Tips from Marcus</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-[#C9A84C] font-bold text-lg flex-shrink-0">
                1.
              </span>
              <p>
                <strong>Use a reputable business setup agent.</strong> The
                bureaucracy is real. Trying to do it yourself will cost you time
                and money. The investment upfront saves headaches later.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#C9A84C] font-bold text-lg flex-shrink-0">
                2.
              </span>
              <p>
                <strong>Talk to a UK tax advisor before you leave, not after.</strong>{" "}
                The year of departure is complicated from a UK tax perspective.
                Getting professional advice upfront prevents expensive corrections
                later.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#C9A84C] font-bold text-lg flex-shrink-0">
                3.
              </span>
              <p>
                <strong>Understand the full compliance picture.</strong> VAT,
                corporate tax, visa sponsorship, health insurance—these all
                interconnect. Have a checklist and a professional supporting you
                through the process.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#C9A84C] font-bold text-lg flex-shrink-0">
                4.
              </span>
              <p>
                <strong>Factor in relationship-building time.</strong> Business in
                Dubai moves on relationships and trust. Allow time to establish
                networks before expecting deals to move.
              </p>
            </li>
          </ul>
        </section>

        {/* Patrick's Note Section */}
        <section className="mb-12 bg-blue-50 border-l-4 border-blue-400 rounded-lg p-8">
          <h3 className="text-lg font-bold text-[#0A1628] mb-3">Patrick's Note</h3>
          <p className="text-gray-700 leading-relaxed">
            Marcus represents a growing wave of UK entrepreneurs choosing Dubai
            over other low-tax jurisdictions. The Green Visa fundamentally
            changed the equation: previously, you needed employer sponsorship to
            stay long-term in the UAE. Now, entrepreneurs can self-sponsor through
            company ownership, which opens up entirely new possibilities for
            business creation. This shift has made Dubai increasingly attractive to
            UK founders and business owners who want to build rather than be
            employed. The fact that Marcus has gone from solo founder to running a
            team of two in six years speaks to the opportunity Dubai offers to
            those willing to navigate its systems properly.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0A1628] to-[#0F1F35] text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to explore your Dubai move?</h3>
          <p className="text-gray-300 mb-6">
            Read more stories from UK professionals who've made the leap.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/case-studies"
              className="inline-block px-6 py-3 bg-[#C9A84C] text-[#0A1628] font-semibold rounded hover:bg-opacity-90 transition-all"
            >
              Read Another Story
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-[#C9A84C] text-[#C9A84C] font-semibold rounded hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
