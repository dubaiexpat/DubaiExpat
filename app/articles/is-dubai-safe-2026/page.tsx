import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Is Dubai Safe for Expats in 2026? What UK Citizens Need to Know",
  description:
    "An honest look at the safety situation in Dubai for British expats in 2026 — covering the Iran–UAE conflict, FCDO travel advice, daily life, and what to consider before relocating.",
};

export default function IsDubaiSafe2026() {
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
            <span className="font-medium text-[#0A1628]">Is Dubai Safe in 2026?</span>
          </div>
        </div>
      </div>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-8 mt-6 md:mt-8 mb-12">
          <img
            src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-4 sm:px-8 py-14 sm:py-20">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                Safety Guide
              </div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
                Is Dubai Safe for Expats in 2026? What UK Citizens Need to Know
              </h1>
              <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
                The Iran&ndash;UAE conflict has changed the conversation about relocating to Dubai. Here&rsquo;s an honest, up-to-date assessment of what life is really like on the ground &mdash; and what the FCDO is telling British nationals.
              </p>
            </div>
          </div>
        </section>

        {/* The Current Situation */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              The Current Situation
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Since late February 2026, Iran has launched a series of ballistic missile and drone strikes against targets across the UAE and other Gulf states, in retaliation for Israeli&ndash;American military operations. The conflict has brought a reality that many expats never expected: air-defence interceptions audible at night, temporary airport disruptions, and a much-heightened security posture across Dubai.
              </p>
              <p>
                While the vast majority of incoming missiles and drones have been intercepted by UAE and allied air-defence systems, several high-profile sites in Dubai were struck in the early days of the conflict, including luxury hotels on The Palm. The UAE government has maintained that civilian safety remains its top priority and has invested heavily in expanded defence capabilities.
              </p>
              <p>
                For British nationals specifically, the situation carries additional complexities. Roughly a quarter of a million UK citizens live in the UAE, making them the largest European expat community in the country. Many have built lives, businesses, and families there over years or decades.
              </p>
            </div>
          </div>
        </section>

        {/* FCDO Advice */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              What the FCDO Is Saying
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Foreign, Commonwealth &amp; Development Office (FCDO) currently advises against all but essential travel to the United Arab Emirates. This is a significant escalation from the standard advisory that was in place for years before the conflict began.
              </p>
              <p>
                The FCDO has also temporarily withdrawn dependants of British Embassy staff from the UAE as a precautionary measure, though the embassies in Abu Dhabi and Dubai continue to operate. British nationals in-country are encouraged to register their presence with the FCDO to receive direct updates.
              </p>
              <div
                className="rounded-xl p-6 my-6"
                style={{ backgroundColor: "#FDF8ED", borderLeft: "4px solid #C9A84C" }}
              >
                <p className="text-sm font-semibold mb-2" style={{ color: "#0A1628" }}>
                  Key FCDO guidance for British nationals in the UAE:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                  <li>Stay away from areas around security or military facilities, and US or Israeli-linked locations</li>
                  <li>Limit movements to essential journeys only</li>
                  <li>When travel is unavoidable, aim to move during daylight hours and avoid crowded venues</li>
                  <li>Register your presence with the FCDO to receive updates</li>
                  <li>Flights to the UK are gradually resuming &mdash; check availability regularly</li>
                </ul>
              </div>
              <p>
                It&rsquo;s worth noting that FCDO advice levels can change rapidly. Always check the latest guidance at{" "}
                <a
                  href="https://www.gov.uk/foreign-travel-advice/united-arab-emirates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "#0A1628" }}
                >
                  gov.uk/foreign-travel-advice
                </a>{" "}
                before making any travel or relocation decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Arrests and Legal Risks */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Legal Risks: Filming and Social Media
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                One aspect of the situation that has caught many British expats off guard is the UAE&rsquo;s strict enforcement of cybercrime laws during the conflict. Dozens of foreign nationals, including a significant number of Britons, have been detained for filming or sharing footage of drone and missile interceptions on social media.
              </p>
              <p>
                Under UAE law, sharing images or videos related to military operations &mdash; even of something you witnessed from your balcony &mdash; can result in serious criminal charges. Reports indicate that some detainees have had their passports confiscated and face potential prison sentences.
              </p>
              <p>
                This is an important reminder that the UAE&rsquo;s legal system operates differently from the UK&rsquo;s. Laws around public expression, social media content, and criticism of the state are significantly stricter. British nationals should be extremely cautious about what they photograph, film, or post during the current period.
              </p>
            </div>
          </div>
        </section>

        {/* Day-to-day Life */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Day-to-Day Life in Dubai Right Now
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The picture on the ground is more nuanced than headlines might suggest. Many expats who have remained in Dubai describe the situation as &ldquo;functioning but tense.&rdquo; Shops, restaurants, schools, and offices continue to operate. The economy hasn&rsquo;t collapsed. Daily routines, for many, carry on.
              </p>
              <p>
                That said, the atmosphere has undeniably shifted. There is a heightened awareness that wasn&rsquo;t there before &mdash; the sound of interceptions at night, periodic disruption to flights, and a general sense that geopolitics is no longer something that happens somewhere else. Some expats describe feeling less carefree, particularly those with young children.
              </p>
              <p>
                The tech and business community has been particularly vocal about continuity. Many remote workers and entrepreneurs report that their professional lives have been largely unaffected. Dubai&rsquo;s internet infrastructure, coworking spaces, and business districts remain operational.
              </p>
              <p>
                However, significant numbers of Western nationals have left or are considering leaving. Reports suggest over 115,000 British nationals have returned to the UK since the conflict began, though many others have chosen to stay, citing strong community ties, financial commitments, and confidence in the UAE&rsquo;s defence systems.
              </p>
            </div>
          </div>
        </section>

        {/* Everyday Safety */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Everyday Safety: Beyond the Conflict
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Separate from the current geopolitical situation, Dubai&rsquo;s everyday safety record for expats remains strong. Street crime rates are exceptionally low compared to most major cities. Violent crime is rare, and petty theft is uncommon. Women report feeling safe walking alone at night in most residential areas &mdash; something that distinguishes Dubai from many Western cities.
              </p>
              <p>
                Road safety is one area where Dubai lags behind the UK. Traffic accidents remain a leading cause of injury, and driving standards can be erratic, particularly on major highways like Sheikh Zayed Road. If you&rsquo;re relocating, it&rsquo;s worth familiarising yourself with local driving habits and considering areas with good walkability or metro access.
              </p>
              <p>
                Heat-related illness is another consideration, particularly between May and September when temperatures regularly exceed 45&deg;C. This is a genuine health risk for people unaccustomed to extreme heat, especially those working outdoors or with young children.
              </p>
            </div>
          </div>
        </section>

        {/* What Should You Do? */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              So Is Dubai Safe? Our Honest Take
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                There&rsquo;s no single answer. Dubai before the Iran strikes and Dubai now are different propositions, and it would be irresponsible to pretend otherwise.
              </p>
              <p>
                If you&rsquo;re already in Dubai with an established life, strong community, and employer support, many expats are choosing to stay and report feeling relatively safe day to day. The UAE&rsquo;s air-defence systems have proven effective, and the government has made civilian protection a visible priority.
              </p>
              <p>
                If you&rsquo;re considering relocating to Dubai from the UK right now, the calculation is different. The FCDO&rsquo;s advisory against all but essential travel is significant and shouldn&rsquo;t be dismissed. It affects insurance validity, employer duty-of-care obligations, and your legal standing if something goes wrong. We&rsquo;d recommend waiting for the advisory to be downgraded before committing to a move, unless you have a compelling reason that can&rsquo;t wait.
              </p>
              <p>
                For those in the planning stages &mdash; researching visas, looking at schools, considering housing &mdash; there&rsquo;s no harm in continuing your research. The conflict will eventually de-escalate, and those who are well-prepared will be in the strongest position to move when conditions improve.
              </p>
            </div>
          </div>
        </section>

        {/* Practical Steps */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Practical Steps for UK Expats
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: "#FDF8ED", borderLeft: "4px solid #C9A84C" }}
              >
                <p className="text-sm font-semibold mb-3" style={{ color: "#0A1628" }}>
                  Whether you&rsquo;re in Dubai or planning a move, here are the steps we&rsquo;d recommend:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm">
                  <li>
                    <strong>Check FCDO advice regularly</strong> &mdash; the situation is evolving, and advisory levels can change with little warning.
                  </li>
                  <li>
                    <strong>Register with the FCDO</strong> if you&rsquo;re in the UAE, so you receive direct updates and consular support information.
                  </li>
                  <li>
                    <strong>Review your insurance</strong> &mdash; many travel and health insurance policies contain exclusions for conflict zones or areas under government travel advisories.
                  </li>
                  <li>
                    <strong>Keep your passport accessible</strong> and have a plan for departure if the situation deteriorates.
                  </li>
                  <li>
                    <strong>Be extremely careful on social media</strong> &mdash; do not film, photograph, or share images of any military activity, drone interceptions, or related incidents.
                  </li>
                  <li>
                    <strong>Maintain financial flexibility</strong> &mdash; keep sufficient funds accessible in the UK and consider maintaining a UK bank account alongside your UAE banking.
                  </li>
                  <li>
                    <strong>Talk to your employer</strong> about their contingency plans, including evacuation support and duty-of-care policies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Related Reading
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/articles/dubai-situation-update"
                className="rounded-xl border border-gray-200 p-6 transition hover:border-[#C9A84C]"
              >
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">Dubai Situation Update</h3>
                <p className="text-sm text-gray-500">What British expats on the ground are saying about life in Dubai right now.</p>
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
                <p className="text-sm text-gray-500">Everything you need to know about UAE visa options for UK expats.</p>
              </Link>
              <Link
                href="/guides/housing"
                className="rounded-xl border border-gray-200 p-6 transition hover:border-[#C9A84C]"
              >
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">Housing Guide</h3>
                <p className="text-sm text-gray-500">Finding a home in Dubai &mdash; neighbourhoods, costs, and the rental system.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="px-4 py-8 md:px-8 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-gray-500 leading-relaxed">
              This article reflects the situation as of 4 April 2026 and is provided for informational purposes only. It does not constitute travel advice. The security situation in the UAE is evolving rapidly &mdash; always check the latest{" "}
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
