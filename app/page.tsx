import Link from "next/link";
import Header from "@/components/Header";
import PatrickPhoto from "@/components/PatrickPhoto";

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
                  Everything UK expats need to relocate to the UAE —
                  visas, housing, schools, removals and more. Practical,
                  up‑to‑date advice written for families and professionals.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#categories"
                  className="inline-flex items-center justify-center rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#0A1628] shadow-sm transition hover:bg-[#d5b760]"
                >
                  Browse Guides
                </a>
              </div>
              <p className="text-xs text-slate-300">
                Free, independent guidance for UK citizens
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 p-5 ring-1 ring-white/10">
              <div className="space-y-4 text-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
                  What you&apos;ll find inside
                </h2>
                <ul className="space-y-3 text-sm text-slate-100">
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                    Step‑by‑step visa and residency guidance for UK
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
                    from the UK.
                  </li>
                </ul>
              </div>

              <div className="text-xs text-slate-100 sm:text-sm">
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <p className="font-semibold text-white">Tailored to UK expats</p>
                  <p className="mt-1 text-[11px] text-slate-200 sm:text-xs">
                    HMRC, pensions, and keeping ties with home.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Visa Checker Promo Banner */}
          <section className="rounded-2xl bg-gradient-to-r from-[#0A1628] to-[#1a2f4a] p-6 text-white shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                  Free tool — takes 2 minutes
                </div>
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Not sure which visa you need?
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-slate-300">
                  Answer 8 quick questions and we&apos;ll tell you exactly which UAE visa route fits your situation — Golden, Green, Employment, Freelance or Retirement.
                </p>
              </div>
              <Link
                href="/visa-checker"
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-8 py-3 text-sm font-semibold text-[#0A1628] shadow transition hover:bg-[#d5b760]"
              >
                Find My Visa Route →
              </Link>
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
                  Comprehensive guides covering every aspect of your move —
                  from visas and housing through to daily life, social scene
                  and finding the best services in Dubai.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

              {/* 01 — Visa & Residency */}
              <Link
                href="/guides/visa-residency"
                id="visa-residency"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ minHeight: "230px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=600&h=400&fit=crop&auto=format"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-2 inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    01 <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-white">Visa &amp; Residency</h3>
                  <p className="mt-1 text-sm text-white/75">
                    Work, family, investor and golden visas — plus how to sponsor dependants.
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#C9A84C]">Try the Visa Checker →</p>
                </div>
              </Link>

              {/* 02 — Finding a Home */}
              <Link
                href="/guides/housing"
                id="housing"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ minHeight: "230px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&auto=format"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-2 inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    02 <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-white">Finding a Home</h3>
                  <p className="mt-1 text-sm text-white/75">
                    Popular areas, rental prices, contracts and what&apos;s different vs back home.
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#C9A84C]">Read the guide →</p>
                </div>
              </Link>

              {/* 03 — Schools */}
              <Link
                href="/guides/schools"
                id="schools"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ minHeight: "230px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&auto=format"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-2 inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    03 <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-white">Schools &amp; Education</h3>
                  <p className="mt-1 text-sm text-white/75">
                    British and IB curriculum options, fees, waiting lists and applications.
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#C9A84C]">Read the guide →</p>
                </div>
              </Link>

              {/* 04 — Removals & Shipping */}
              <Link
                href="/guides/removals"
                id="removals"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ minHeight: "230px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop&auto=format"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-2 inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    04 <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-white">Removals &amp; Shipping</h3>
                  <p className="mt-1 text-sm text-white/75">
                    Moving your belongings, costs from the UK, customs rules and what to buy in Dubai.
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#C9A84C]">Read the guide →</p>
                </div>
              </Link>

              {/* 05 — Banking */}
              <Link
                href="/guides/banking"
                id="banking"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ minHeight: "230px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&h=400&fit=crop&auto=format"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-2 inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    05 <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-white">Banking &amp; Personal Finance</h3>
                  <p className="mt-1 text-sm text-white/75">
                    Opening accounts, getting paid and managing UK obligations in a zero‑tax environment.
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#C9A84C]">Read the guide →</p>
                </div>
              </Link>

              {/* 06 — Community & Life */}
              <Link
                href="/guides/community"
                id="community"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ minHeight: "230px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&auto=format"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-2 inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    06 <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-white">Community &amp; Life</h3>
                  <p className="mt-1 text-sm text-white/75">
                    Day‑to‑day life, expat communities, healthcare, driving and settling-in tips.
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#C9A84C]">Read the guide →</p>
                </div>
              </Link>

              {/* 07 — Pets */}
              <Link
                href="/guides/pets"
                id="pets"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ minHeight: "230px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop&auto=format"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-2 inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    07 <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-white">Bringing Your Pet</h3>
                  <p className="mt-1 text-sm text-white/75">
                    UAE import rules, rabies titre test, breed restrictions and specialist services.
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#C9A84C]">Read the guide →</p>
                </div>
              </Link>

              {/* 08 — Nightlife */}
              <Link
                href="/guides/nightlife"
                id="nightlife"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ minHeight: "230px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=600&h=400&fit=crop&auto=format"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-2 inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    08 <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-white">Nightlife &amp; Social Scene</h3>
                  <p className="mt-1 text-sm text-white/75">
                    Bars, beach clubs, Friday brunch, alcohol rules and the best areas for a night out.
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#C9A84C]">Read the guide →</p>
                </div>
              </Link>

              {/* 09 — Concierge */}
              <Link
                href="/guides/concierge"
                id="concierge"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ minHeight: "230px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&auto=format"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-2 inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    09 <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-white">Concierge</h3>
                  <p className="mt-1 text-sm text-white/75">
                    Tailors, jewellers, vets, tutors, members clubs, sports clubs and kids&apos; parties.
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#C9A84C]">Read the guide →</p>
                </div>
              </Link>

              {/* 10 — Domestic Help */}
              <Link
                href="/guides/domestic-help"
                id="domestic-help"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ minHeight: "230px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&auto=format"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-2 inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    10 <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-white">Domestic Help &amp; Drivers</h3>
                  <p className="mt-1 text-sm text-white/75">
                    Hiring household staff and a private driver legally — visas, contracts and costs.
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#C9A84C]">Read the guide →</p>
                </div>
              </Link>

              {/* 11 — Food & Drink */}
              <Link
                href="/guides/food-drink"
                id="food-drink"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ minHeight: "230px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-2 inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    11 <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-white">Food &amp; Drink</h3>
                  <p className="mt-1 text-sm text-white/75">
                    Best restaurants by area, where to buy wine, spirits and organic deliveries.
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#C9A84C]">Read the guide →</p>
                </div>
              </Link>

              {/* 12 — Furniture & Interiors */}
              <Link
                href="/guides/furniture"
                id="furniture"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ minHeight: "230px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />
                <div className="relative z-10 p-5">
                  <span className="mb-2 inline-flex items-center rounded-full bg-white/15 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    12 <span className="ml-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  </span>
                  <h3 className="text-base font-semibold text-white">Furniture &amp; Interiors</h3>
                  <p className="mt-1 text-sm text-white/75">
                    Affordable to high-end — the best places to buy furniture and bespoke pieces in Dubai.
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#C9A84C]">Read the guide →</p>
                </div>
              </Link>

            </div>
          </section>

          {/* Meet Patrick */}
          <section id="meet-patrick" className="space-y-6">
            <h2 className="text-xl font-semibold text-[#0A1628] sm:text-2xl">
              Meet Patrick
            </h2>
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:gap-8 sm:p-8">
              <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-full sm:h-40 sm:w-40">
                {/* Drop patrick.jpg into /public to replace the fallback avatar */}
                <PatrickPhoto />
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

              {/* Sarah */}
              <article className="flex overflow-hidden rounded-2xl border border-[#0A1628] bg-[#0A1628] shadow-md transition hover:-translate-y-0.5 hover:shadow-xl" style={{ minHeight: "220px" }}>
                <div className="w-2/5 flex-shrink-0">
                  <img src="/sarah.jpg" alt="Sarah" className="h-full w-full object-cover object-center" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-[#C9A84C]">
                      Digital Nomad
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-white">Sarah</h3>
                    <p className="mt-1 text-sm text-white/70">
                      Moved from London on a freelance visa while working remotely for UK clients.
                    </p>
                    <p className="mt-3 text-xs font-medium text-white/50">
                      Visa: Freelance (2 years)
                    </p>
                  </div>
                  <Link
                    href="/case-studies/sarah"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#C9A84C] px-4 py-2 text-sm font-semibold text-[#0A1628] transition hover:bg-[#C9A84C]/90"
                  >
                    Read her story →
                  </Link>
                </div>
              </article>

              {/* James & Emma */}
              <article className="flex overflow-hidden rounded-2xl border border-[#0A1628] bg-[#0A1628] shadow-md transition hover:-translate-y-0.5 hover:shadow-xl" style={{ minHeight: "220px" }}>
                <div className="w-2/5 flex-shrink-0">
                  <img src="/james-and-emma.jpg" alt="James, Emma and their children" className="h-full w-full object-cover object-center" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-[#C9A84C]">
                      Family Relocation
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-white">James &amp; Emma</h3>
                    <p className="mt-1 text-sm text-white/70">
                      Relocated with two kids; navigated schools, housing and employment sponsorship together.
                    </p>
                    <p className="mt-3 text-xs font-medium text-white/50">
                      Visa: Employment (sponsored)
                    </p>
                  </div>
                  <Link
                    href="/case-studies/james-and-emma"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#C9A84C] px-4 py-2 text-sm font-semibold text-[#0A1628] transition hover:bg-[#C9A84C]/90"
                  >
                    Read their story →
                  </Link>
                </div>
              </article>

              {/* Marcus */}
              <article className="flex overflow-hidden rounded-2xl border border-[#0A1628] bg-[#0A1628] shadow-md transition hover:-translate-y-0.5 hover:shadow-xl" style={{ minHeight: "220px" }}>
                <div className="w-2/5 flex-shrink-0">
                  <img src="/marcus.jpg" alt="Marcus" className="h-full w-full object-cover object-center" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-[#C9A84C]">
                      Entrepreneur
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-white">Marcus</h3>
                    <p className="mt-1 text-sm text-white/70">
                      Set up a UAE company and secured a Green Visa after leaving his corporate job in London.
                    </p>
                    <p className="mt-3 text-xs font-medium text-white/50">
                      Visa: Green (5 years)
                    </p>
                  </div>
                  <Link
                    href="/case-studies/marcus"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#C9A84C] px-4 py-2 text-sm font-semibold text-[#0A1628] transition hover:bg-[#C9A84C]/90"
                  >
                    Read his story →
                  </Link>
                </div>
              </article>

              {/* Priya */}
              <article className="flex overflow-hidden rounded-2xl border border-[#0A1628] bg-[#0A1628] shadow-md transition hover:-translate-y-0.5 hover:shadow-xl" style={{ minHeight: "220px" }}>
                <div className="w-2/5 flex-shrink-0">
                  <img src="/priya.jpg" alt="Priya" className="h-full w-full object-cover object-center" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-[#C9A84C]">
                      Career Mover
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-white">Priya</h3>
                    <p className="mt-1 text-sm text-white/70">
                      Accepted a role with a Dubai employer; moved from Manchester with a job-offer visa.
                    </p>
                    <p className="mt-3 text-xs font-medium text-white/50">
                      Visa: Employment (2–3 years)
                    </p>
                  </div>
                  <Link
                    href="/case-studies/priya"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#C9A84C] px-4 py-2 text-sm font-semibold text-[#0A1628] transition hover:bg-[#C9A84C]/90"
                  >
                    Read her story →
                  </Link>
                </div>
              </article>

            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-200 pt-4">
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 Dubai Expat. All rights reserved.</p>
            <p className="text-[11px]">
              Information only, not financial, tax or legal advice.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
