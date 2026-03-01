import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Priya's Story - Dubai Expat",
  description: "How an NHS healthcare manager found career growth and work-life balance in Dubai",
};

export default function PriyaPage() {
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
            <span className="text-[#0A1628] font-medium">Priya</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#0A1628] to-[#0F1F35] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-44 h-44 rounded-2xl overflow-hidden border-2 shadow-lg" style={{ borderColor: "#C9A84C" }}>
                <img src="/priya.svg" alt="Priya" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-6">
                <h1 className="text-4xl font-bold">Priya</h1>
                <span className="inline-block px-3 py-1 bg-[#C9A84C] text-[#0A1628] text-xs font-semibold rounded">
                  Career Mover
                </span>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl">
                From NHS burnout to thriving as a healthcare manager in Dubai Marina.
                How Priya found career growth and better work-life balance in the UAE.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Story Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-6">The Move</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Priya spent a decade in healthcare management with the NHS in
              Manchester. It was meaningful work—she was good at it, her team
              respected her, and she took pride in improving patient outcomes on
              tight budgets. But by 2023, the cumulative weight of NHS burnout had
              caught up with her. Budget cuts, understaffing, constant pressure,
              and the knowledge that the system was stretched beyond capacity took
              a real toll.
            </p>
            <p>
              Then, unexpectedly, a recruiter reached out on LinkedIn. A Dubai
              private hospital group was looking for someone with her exact
              experience. The role came with a significant salary increase—nearly
              40% more than her NHS salary—plus benefits and a chance to work in a
              well-resourced healthcare environment. More importantly, it offered
              her a fresh start at a critical moment in her career.
            </p>
            <p>
              At age 34, Priya decided to take a leap. In early 2023, she accepted
              the position, packed up her life in Manchester, and moved to Dubai
              Marina, a vibrant waterfront neighbourhood perfect for young
              professionals. Three years in, she's never looked back. The salary
              uplift has allowed her to tackle her student loan aggressively, the
              work environment is collaborative and well-supported, and she's
              discovered a passion for running along the Marina that she never had
              time for in Manchester.
            </p>
          </div>
        </section>

        {/* The Process Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-6">The Process</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              For employment-sponsored moves, the process is significantly
              smoother than setting up as an independent businessperson. Priya's
              employer handled the heavy lifting, and the entire journey from job
              offer to landing in Dubai took approximately four weeks.
            </p>
            <p>
              Her employer sponsored her for an employment visa, which is the most
              common pathway for international professionals moving to Dubai. The
              employer's HR department arranged the medical checks—a standard
              requirement for all UAE visa applications—and coordinated the
              paperwork. Priya's role was simple: send in her documents, attend a
              medical appointment, and wait for approval.
            </p>
            <p>
              The visa approval came through within three weeks, and she received
              her Emirates ID—the UAE's national identification card—upon arrival.
              This streamlined process meant she could focus on logistics like
              finding a flat, shipping belongings, and mentally preparing for the
              move rather than navigating visa bureaucracy.
            </p>
            <p>
              What she didn't anticipate was a critical regulatory requirement:
              professional qualification attestation. Because she was trained in the
              UK and the UAE requires proof that her qualifications meet local
              standards, she had to submit her nursing and management credentials
              for official attestation through the UK Foreign, Commonwealth &
              Development Office (FCDO). This was a three-week process that cost
              £400 and had to be completed before she could legally start work.
            </p>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-6">Lessons Learned</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The biggest challenge Priya faced was professional credential
              attestation. Many UK professionals overlook this requirement and
              arrive expecting to start work immediately, only to discover they
              need to get qualifications officially verified. She's now grateful
              she identified this early, but it added an unexpected step and cost
              to her relocation.
            </p>
            <p>
              The second challenge was the Dubai rental market. Unlike the UK,
              where properties are typically held on the market for weeks or even
              months, Dubai's rental market moves at breakneck speed. Priya lost
              two flats she loved to faster-moving tenants before learning a
              critical lesson: when you find something you like in Dubai, you pay
              the holding deposit immediately. Hesitation costs you the property.
            </p>
            <p>
              The work environment itself required adjustment too. UAE healthcare
              has different regulatory frameworks, protocols, and management
              structures than the NHS. Her UK training and experience were valued,
              but she had to learn new systems and adapt to different operational
              cultures. This wasn't a barrier—her international colleagues and
              employer were supportive—but it required intellectual flexibility and
              humility.
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
              <p className="text-lg font-semibold text-[#0A1628]">2023</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">Age</p>
              <p className="text-lg font-semibold text-[#0A1628]">34</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                Previous Location
              </p>
              <p className="text-lg font-semibold text-[#0A1628]">Manchester, UK</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                Visa Type
              </p>
              <p className="text-lg font-semibold text-[#0A1628]">
                Employment Visa (2 years)
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                Neighbourhood
              </p>
              <p className="text-lg font-semibold text-[#0A1628]">Dubai Marina</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                Setup Timeline
              </p>
              <p className="text-lg font-semibold text-[#0A1628]">4 weeks</p>
            </div>
          </div>
        </section>

        {/* Top Tips Card */}
        <section className="mb-12 bg-[#0A1628] text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Top Tips from Priya</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-[#C9A84C] font-bold text-lg flex-shrink-0">
                1.
              </span>
              <p>
                <strong>Get your qualifications attested before you arrive.</strong>{" "}
                You cannot legally start work in many professions without official
                UK attestation. Plan for three weeks and £400, and build this into
                your timeline, not after you land.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#C9A84C] font-bold text-lg flex-shrink-0">
                2.
              </span>
              <p>
                <strong>Act fast on rental properties.</strong> When you find a
                flat you like, pay the holding deposit immediately. Dubai rentals
                move in hours, not days. Hesitation means you lose it.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#C9A84C] font-bold text-lg flex-shrink-0">
                3.
              </span>
              <p>
                <strong>Embrace the learning curve professionally.</strong> Your UK
                qualifications are valued, but UAE healthcare has different
                systems. Be humble, ask questions, and lean on your international
                colleagues. They're navigating similar transitions.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#C9A84C] font-bold text-lg flex-shrink-0">
                4.
              </span>
              <p>
                <strong>Plan for your salary uplift strategically.</strong> Don't
                just spend more because you're earning more. Use the increase to
                pay down debt or build financial security. Priya paid off a
                significant chunk of her student loan in three years.
              </p>
            </li>
          </ul>
        </section>

        {/* Patrick's Note Section */}
        <section className="mb-12 bg-blue-50 border-l-4 border-blue-400 rounded-lg p-8">
          <h3 className="text-lg font-bold text-[#0A1628] mb-3">Patrick's Note</h3>
          <p className="text-gray-700 leading-relaxed">
            Healthcare is one of the strongest sectors for UK professionals in
            Dubai. The city has invested heavily in private healthcare
            infrastructure over the past decade, and UK-trained clinicians and
            managers are in genuine high demand. Unlike some sectors where relocation
            is a nice-to-have, healthcare employers in Dubai actively recruit from
            the UK, understand the NHS context, and offer competitive packages to
            attract experienced talent. Priya's experience is typical of this wave:
            she was approached by a recruiter, offered significantly better
            compensation, got professional support through the relocation process,
            and found herself in a well-resourced environment. The fact that she's
            reinvested her salary uplift into financial health rather than lifestyle
            creep speaks to the tangible life-changing impact this move can have for
            UK healthcare professionals tired of NHS burnout.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0A1628] to-[#0F1F35] text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Curious about other pathways?</h3>
          <p className="text-gray-300 mb-6">
            Explore more stories from UK professionals building lives in Dubai.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/case-studies/sarah"
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
