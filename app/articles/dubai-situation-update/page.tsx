import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Dubai Situation Update: What British Expats Are Saying (April 2026)",
  description:
    "Hear from the British expat community in Dubai — who's staying, who's leaving, and what daily life actually looks like during the Iran–UAE conflict.",
};

export default function DubaiSituationUpdate() {
  return (
    <>
      <div className="bg-white px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Header />
          <div className="flex items-center gap-2 py-3 text-sm text-slate-500">
            <Link href="/" className="flex items-center gap-1 hover:text-[#0A1628]">
              <span>&larr;</span><span>Home</span>
            </Link>
            <span>/</span>
            <span className="font-medium text-[#0A1628]">Articles</span>
            <span>/</span>
            <span className="font-medium text-[#0A1628]">Dubai Situation Update</span>
          </div>
        </div>
      </div>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-8 mt-6 md:mt-8 mb-12">
          <img
            src="https://images.unsplash.com/photo-1634007626524-f47fa37810a7?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-4 sm:px-8 py-14 sm:py-20">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                Market Update
              </div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
                Dubai Situation Update: What British Expats Are Saying
              </h1>
              <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
                The headlines tell one story. The people living it tell another. Here&rsquo;s what&rsquo;s actually happening in the British expat community in Dubai right now.
              </p>
            </div>
          </div>
        </section>

        {/* A Community Divided */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              A Community at a Crossroads
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The British expat community in Dubai &mdash; roughly 250,000 strong before the conflict &mdash; is having a conversation it never expected to have. Since Iranian strikes on the UAE began in late February 2026, the question isn&rsquo;t just &ldquo;is it safe?&rdquo; but something more personal: &ldquo;is this still where I want to be?&rdquo;
              </p>
              <p>
                The answers are as varied as the community itself. Reports indicate that more than 115,000 British nationals have returned to the UK since the conflict started. But that also means a substantial number have chosen to stay &mdash; and their reasons reveal a lot about what Dubai means to the people who&rsquo;ve built lives there.
              </p>
            </div>
          </div>
        </section>

        {/* Those Who Stayed */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Those Who Are Staying
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For many long-term expats, leaving simply isn&rsquo;t straightforward. Their children are in school mid-term. Their mortgages or rental contracts are active. Their businesses employ local staff. Their spouse may hold a job that can&rsquo;t relocate. The social, financial, and professional ties that made Dubai home don&rsquo;t dissolve because the FCDO changes an advisory level.
              </p>
              <p>
                The sentiment among those staying tends to be cautiously optimistic. The UAE&rsquo;s air-defence systems have intercepted the overwhelming majority of incoming threats, and daily life in most residential areas continues largely uninterrupted. Schools remain open. Supermarkets are stocked. The metro runs on schedule. For many, the rhythm of life has adapted rather than stopped.
              </p>
              <p>
                The tech and entrepreneurial community has been particularly resilient. Many remote workers and startup founders report that their professional lives are essentially unchanged. Dubai&rsquo;s coworking infrastructure, fast internet, and business-friendly environment continue to function, and some see the current moment as an opportunity &mdash; lower rents, less competition, and a chance to demonstrate commitment to the market.
              </p>
            </div>
          </div>
        </section>

        {/* Those Who Left */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Those Who Have Left
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The expats who&rsquo;ve returned to the UK have their own compelling logic. For families with young children, the risk calculation is fundamentally different. Even if the statistical likelihood of harm remains low, the psychological burden of air-raid sirens and news alerts takes a toll that spreadsheets can&rsquo;t capture.
              </p>
              <p>
                Insurance has become a significant practical issue. Many international health and travel insurance policies contain conflict-zone exclusions that have been triggered by the FCDO advisory. For some expats, the moment their insurance coverage became uncertain was the moment the decision made itself.
              </p>
              <p>
                Employers have played a role too. Several multinational companies with Dubai offices have offered voluntary relocation packages, and some have mandated the departure of non-essential staff. For employees in those positions, the company effectively made the decision for them.
              </p>
              <p>
                There is also a group of British nationals who want to leave but can&rsquo;t. Reports have emerged of expats on travel bans related to civil disputes &mdash; sometimes over relatively minor financial matters &mdash; who have been unable to exit the country. This has added an uncomfortable dimension to the safety conversation, highlighting the ways in which the UAE&rsquo;s legal system can restrict mobility in ways that have no equivalent in UK law.
              </p>
            </div>
          </div>
        </section>

        {/* What Daily Life Looks Like */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              What Daily Life Actually Looks Like
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you&rsquo;re reading this from the UK trying to work out what it&rsquo;s like on the ground, here&rsquo;s the honest picture: Dubai in April 2026 is not a warzone. It&rsquo;s not a ghost town. It is a city that is functioning normally in most respects, but with an undercurrent of vigilance that wasn&rsquo;t there a year ago.
              </p>
              <p>
                Restaurants and malls are open, though footfall has noticeably decreased in tourist-heavy areas like The Walk at JBR and Downtown. Brunches still happen. The gym is still busy at 6am. Kids still go to birthday parties. But people are paying more attention to the news. Conversations that used to be about property prices and school admissions now occasionally turn to flight availability and FCDO updates.
              </p>
              <p>
                Nightlife has taken a hit. Some venues have reduced their hours, and the atmosphere in areas like DIFC and Dubai Marina is quieter than usual. Tourism numbers are down significantly, which has a knock-on effect on the hospitality industry and the general energy of the city.
              </p>
              <p>
                One thing that multiple expats highlight is the information environment. The UAE restricts reporting on military matters, and social media posts about strikes or interceptions carry serious legal consequences. This creates an odd dynamic where significant events may be happening nearby but the public conversation about them is muted. For British expats accustomed to open media coverage, this can feel disorienting.
              </p>
            </div>
          </div>
        </section>

        {/* The Financial Picture */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              The Financial Picture
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Money is a significant factor in the stay-or-go equation. Many British expats moved to Dubai for the tax advantages, and returning to the UK means stepping back into income tax, council tax, and a higher cost of living in many categories. For high earners and business owners, the financial cost of leaving can be substantial.
              </p>
              <p>
                Property markets have cooled but not collapsed. Rental prices in some areas have softened as departure-driven supply has increased, which creates an unusual opportunity for those arriving or those looking to move to a better apartment. Sale prices have been more stable, though transaction volumes have dropped.
              </p>
              <p>
                Job markets have contracted in some sectors, particularly tourism, hospitality, and retail. However, technology, finance, and professional services have been more resilient. Employers in these sectors report that they&rsquo;re still hiring, though candidate pools have shifted as some talent has relocated.
              </p>
            </div>
          </div>
        </section>

        {/* Looking Ahead */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Looking Ahead
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The question on everyone&rsquo;s mind is: when will this end? Nobody has a reliable answer. The trajectory of the wider regional conflict will determine the security situation in the UAE, and that involves geopolitical forces far beyond anyone&rsquo;s control.
              </p>
              <p>
                What the British expat community in Dubai does demonstrate, though, is resilience. Whether people have stayed or left, the decisions have been thoughtful, personal, and based on individual circumstances rather than panic. That pragmatism is, in many ways, the defining characteristic of the community itself.
              </p>
              <p>
                For those considering a move to Dubai in the future, the current period is a useful reality check. Dubai&rsquo;s appeal &mdash; the lifestyle, the tax environment, the opportunity &mdash; hasn&rsquo;t disappeared. But the assumption that the Gulf would always be a geopolitically calm place to live has been challenged, and future expats will need to weigh that into their planning in a way that wasn&rsquo;t necessary before.
              </p>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Related Reading
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/articles/is-dubai-safe-2026"
                className="rounded-xl border border-gray-200 p-6 transition hover:border-[#C9A84C]"
              >
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">Is Dubai Safe in 2026?</h3>
                <p className="text-sm text-gray-500">FCDO advice, defence systems, legal risks, and our honest assessment.</p>
              </Link>
              <Link
                href="/articles/should-i-still-move-to-dubai"
                className="rounded-xl border border-gray-200 p-6 transition hover:border-[#C9A84C]"
              >
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">Should I Still Move to Dubai?</h3>
                <p className="text-sm text-gray-500">An honest assessment of whether 2026 is the right time to relocate.</p>
              </Link>
              <Link
                href="/guides/visa-residency"
                className="rounded-xl border border-gray-200 p-6 transition hover:border-[#C9A84C]"
              >
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">Visa &amp; Residency Guide</h3>
                <p className="text-sm text-gray-500">Every UAE visa option explained for UK expats.</p>
              </Link>
              <Link
                href="/guides/banking"
                className="rounded-xl border border-gray-200 p-6 transition hover:border-[#C9A84C]"
              >
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">Banking &amp; Finance Guide</h3>
                <p className="text-sm text-gray-500">Setting up banking in Dubai and managing money across borders.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="px-4 py-8 md:px-8 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-gray-500 leading-relaxed">
              This article reflects the situation as of 4 April 2026 and is based on publicly available reporting and community observations. It is provided for informational purposes only and does not constitute travel advice. Always check the latest{" "}
              <a
                href="https://www.gov.uk/foreign-travel-advice/united-arab-emirates"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-500"
              >
                FCDO travel advice
              </a>{" "}
              before making any decisions. See our{" "}
              <Link href="/terms" className="underline hover:text-gray-500">Terms of Use</Link> for full disclaimers.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
