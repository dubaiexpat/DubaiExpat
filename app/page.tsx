import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <header className="mb-8">
          <Header />
        </header>

        <main className="flex flex-1 flex-col gap-12">
          {/* Hero section */}
          <section className="grid gap-10 rounded-2xl bg-[#0A1628] px-6 py-10 text-white shadow-sm sm:px-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:py-14">
            <div className="flex flex-col justify-center gap-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[#C9A84C] ring-1 ring-white/15">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                Your trusted relocation companion
              </div>

              <div>
                <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Your Complete Guide to Moving to Dubai
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
                  Everything UK and US expats need to relocate to the UAE —
                  visas, housing, schools, removals and more. Practical,
                  up‑to‑date advice written for families and professionals.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#categories"
                  className="inline-flex items-center justify-center rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#0A1628] shadow-sm transition hover:bg-[#d5b760]"
                >
                  Get Started
                </a>
                <p className="text-xs text-slate-200 sm:text-sm">
                  Free, independent guidance for UK &amp; US citizens
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 p-5 ring-1 ring-white/10">
              <div className="space-y-4 text-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
                  What you&apos;ll find inside
                </h2>
                <ul className="space-y-3 text-sm text-slate-100">
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                    Step‑by‑step visa and residency guidance for UK &amp; US
                    passport holders.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                    Neighbourhood overviews, rental expectations and hidden
                    costs of housing in Dubai.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                    How schools, banking, healthcare and everyday life differ
                    from the UK and US.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-100 sm:text-sm">
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <p className="font-semibold text-white">Tailored to UK expats</p>
                  <p className="mt-1 text-[11px] text-slate-200 sm:text-xs">
                    HMRC, pensions, and keeping ties with home.
                  </p>
                </div>
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <p className="font-semibold text-white">Tailored to US expats</p>
                  <p className="mt-1 text-[11px] text-slate-200 sm:text-xs">
                    FATCA, US taxes and banking overseas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Categories section */}
          <section id="categories" className="space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#0A1628] sm:text-2xl">
                  Explore the relocation guides
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-slate-600">
                  Six focused sections that walk you through your move from
                  planning and paperwork through to feeling at home in Dubai.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <article
                id="visa-residency"
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/80 hover:shadow-md"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-[#0A1628]/5 px-2 py-1 text-xs font-medium text-[#0A1628]">
                    01
                    <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-[#0A1628]">
                    Visa &amp; Residency
                  </h3>
                  <p className="text-sm text-slate-600">
                    Understand work, family, investor and golden visas, plus how
                    to sponsor dependants and domestic staff.
                  </p>
                </div>
                <p className="mt-4 text-xs font-medium text-[#0A1628]">
                  Visa routes · Sponsorship · Timelines
                </p>
              </article>

              <article
                id="housing"
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/80 hover:shadow-md"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-[#0A1628]/5 px-2 py-1 text-xs font-medium text-[#0A1628]">
                    02
                    <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-[#0A1628]">
                    Finding a Home
                  </h3>
                  <p className="text-sm text-slate-600">
                    Compare popular areas, typical rental prices, contracts,
                    agents&apos; fees and what&apos;s different vs the UK and US.
                  </p>
                </div>
                <p className="mt-4 text-xs font-medium text-[#0A1628]">
                  Neighbourhoods · Renting · Buying
                </p>
              </article>

              <article
                id="schools"
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/80 hover:shadow-md"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-[#0A1628]/5 px-2 py-1 text-xs font-medium text-[#0A1628]">
                    03
                    <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-[#0A1628]">
                    Schools &amp; Education
                  </h3>
                  <p className="text-sm text-slate-600">
                    British, American and IB curriculum options, fees, waiting
                    lists and how applications work for new arrivals.
                  </p>
                </div>
                <p className="mt-4 text-xs font-medium text-[#0A1628]">
                  Curricula · Admissions · Fees
                </p>
              </article>

              <article
                id="removals"
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/80 hover:shadow-md"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-[#0A1628]/5 px-2 py-1 text-xs font-medium text-[#0A1628]">
                    04
                    <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-[#0A1628]">
                    Removals &amp; Shipping
                  </h3>
                  <p className="text-sm text-slate-600">
                    How to move your belongings, typical costs from the UK and
                    US, customs rules and what&apos;s better to buy in Dubai.
                  </p>
                </div>
                <p className="mt-4 text-xs font-medium text-[#0A1628]">
                  Movers · Timelines · Customs
                </p>
              </article>

              <article
                id="banking"
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/80 hover:shadow-md"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-[#0A1628]/5 px-2 py-1 text-xs font-medium text-[#0A1628]">
                    05
                    <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-[#0A1628]">
                    Banking &amp; Finance
                  </h3>
                  <p className="text-sm text-slate-600">
                    Opening bank accounts, getting paid, managing UK/US
                    obligations and understanding tax in a zero‑tax environment.
                  </p>
                </div>
                <p className="mt-4 text-xs font-medium text-[#0A1628]">
                  Banking · Tax · Currency
                </p>
              </article>

              <article
                id="community"
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/80 hover:shadow-md"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-[#0A1628]/5 px-2 py-1 text-xs font-medium text-[#0A1628]">
                    06
                    <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-[#0A1628]">
                    Community &amp; Life
                  </h3>
                  <p className="text-sm text-slate-600">
                    Day‑to‑day life, expat communities, healthcare, driving and
                    practical tips to help you settle quickly.
                  </p>
                </div>
                <p className="mt-4 text-xs font-medium text-[#0A1628]">
                  Lifestyle · Healthcare · Driving
                </p>
              </article>
            </div>
          </section>

          {/* Meet Patrick */}
          <section id="meet-patrick" className="space-y-6">
            <h2 className="text-xl font-semibold text-[#0A1628] sm:text-2xl">
              Meet Patrick
            </h2>
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:gap-8 sm:p-8">
              <div
                className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-slate-200 sm:h-40 sm:w-40"
                aria-hidden
              >
                <div className="flex h-full w-full items-center justify-center text-sm font-medium text-slate-400">
                  Photo
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-lg font-semibold text-[#0A1628]">Patrick</p>
                <p className="text-sm font-medium text-[#C9A84C]">
                  Founding Editor
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  A London-trained lawyer who relocated to Dubai in 2019, Patrick
                  created Dubai Expat after experiencing firsthand how fragmented
                  relocation information was. Every guide on this site is written
                  to the standard he&apos;d want as a lawyer — accurate, current,
                  and free of agenda.
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section id="case-studies" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-[#0A1628] sm:text-2xl">
                Find your path to Dubai
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-slate-600">
                Every move is different. These four stories cover the most
                common routes.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/80 hover:shadow-md">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
                  Digital Nomad
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[#0A1628]">
                  Sarah
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Moved from London on a freelance visa while working remotely for UK clients.
                </p>
                <p className="mt-3 text-xs font-medium text-[#0A1628]">
                  Visa: Freelance (2 years)
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#0A1628] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0A1628]/90"
                >
                  Read their story
                  <span className="text-[#C9A84C]">→</span>
                </a>
              </article>
              <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/80 hover:shadow-md">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
                  Family Relocation
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[#0A1628]">
                  James &amp; Emma
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Relocated with two kids; navigated schools, housing and employment sponsorship together.
                </p>
                <p className="mt-3 text-xs font-medium text-[#0A1628]">
                  Visa: Employment (sponsored)
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#0A1628] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0A1628]/90"
                >
                  Read their story
                  <span className="text-[#C9A84C]">→</span>
                </a>
              </article>
              <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/80 hover:shadow-md">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
                  Entrepreneur
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[#0A1628]">
                  Marcus
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Set up a UAE company and secured a Green Visa after leaving his corporate job in the US.
                </p>
                <p className="mt-3 text-xs font-medium text-[#0A1628]">
                  Visa: Green (5 years)
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#0A1628] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0A1628]/90"
                >
                  Read their story
                  <span className="text-[#C9A84C]">→</span>
                </a>
              </article>
              <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/80 hover:shadow-md">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
                  Career Mover
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[#0A1628]">
                  Priya
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Accepted a role with a Dubai employer; moved from Manchester with a job-offer visa.
                </p>
                <p className="mt-3 text-xs font-medium text-[#0A1628]">
                  Visa: Employment (2–3 years)
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#0A1628] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0A1628]/90"
                >
                  Read their story
                  <span className="text-[#C9A84C]">→</span>
                </a>
              </article>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-200 pt-4">
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
            <p>© 2025 Dubai Expat. All rights reserved.</p>
            <p className="text-[11px]">
              Information only, not financial, tax or legal advice.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
