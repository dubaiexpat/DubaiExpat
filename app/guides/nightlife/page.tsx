import Link from "next/link";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nightlife in Dubai: A Guide for UK Expats (2026)",
  description:
    "Bars, clubs, rooftop lounges, brunch culture and the rules around alcohol in Dubai. Everything UK expats need to know about Dubai's social scene.",
};

const AREAS = [
  {
    name: "Dubai Marina & JBR",
    vibe: "Buzzing, young, international",
    picks: ["Barasti Beach Bar", "Pier 7 (7 restaurants & bars)", "The Penthouse at Five Palm", "Dek on 8"],
    notes: "The most popular expat strip. Barasti is an institution — outdoor beach bar running day to night. Pier 7 has seven venues stacked on seven floors, all with marina views.",
  },
  {
    name: "DIFC (Dubai International Financial Centre)",
    vibe: "Sophisticated, after-work, corporate crowd",
    picks: ["STK Dubai", "Cipriani", "Zuma", "Lock Stock & Barrel"],
    notes: "The City of London equivalent. Best for after-work drinks and upscale dining that turns into a night out. Dress code applies — smart casual minimum.",
  },
  {
    name: "Downtown Dubai",
    vibe: "Glamorous, tourist-facing, high-end",
    picks: ["At.mosphere (Burj Khalifa, Level 122)", "Neos Sky Bar", "The Rooftop at Address Downtown"],
    notes: "Home to some of the most spectacular views in the world. At.mosphere holds the record as the world's highest bar. Expensive, but worth it for a special occasion.",
  },
  {
    name: "Palm Jumeirah",
    vibe: "Luxury resort, beach clubs, celebrities",
    picks: ["Nobu at Atlantis", "Wavehouse", "Club Vista Mare", "10 Degrees North"],
    notes: "The beach club scene is centred here. Expect day-to-night venues with pools, sunbeds, DJs and bottle service. Popular with visiting celebrities and the luxury crowd.",
  },
  {
    name: "Business Bay",
    vibe: "Up-and-coming, creative, mixed crowd",
    picks: ["Soho Garden", "Bla Bla Dubai", "The Loft"],
    notes: "Soho Garden is one of Dubai's most popular nightlife destinations — a sprawling outdoor venue with multiple stages, bars and food outlets. Opens late and runs until dawn on weekends.",
  },
  {
    name: "Old Dubai / Deira",
    vibe: "Local, unpretentious, cheap drinks",
    picks: ["Rock Bottom Café", "Vintage Bar", "Irish Village (Garhoud)"],
    notes: "Less glossy than New Dubai, but genuinely fun and far easier on the wallet. Irish Village has been an expat institution for 25 years — outdoor garden bar, live music, great atmosphere.",
  },
];

export default function NightlifeGuidePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <Header />

        {/* Breadcrumb */}
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="flex items-center gap-1 hover:text-[#0A1628]">
            <span>←</span><span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/#categories" className="hover:text-[#0A1628]">Guides</Link>
          <span>/</span>
          <span className="font-medium text-[#0A1628]">Nightlife</span>
        </div>

        <main className="mt-8 space-y-12">

          {/* Hero */}
          <section className="rounded-2xl bg-[#0A1628] px-6 py-10 text-white sm:px-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              Nightlife &amp; Social Scene
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Nightlife in Dubai: What UK Expats Need to Know
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
              Dubai has one of the most vibrant social scenes in the world — world-class restaurants, rooftop bars with skyline views, beach clubs, and nightclubs hosting globally renowned DJs. But it operates within rules that are very different from the UK. Understanding them is what separates expats who thrive socially from those who run into trouble.
            </p>
          </section>

          {/* Alcohol rules */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-[#0A1628]">Alcohol in Dubai: The Rules</h2>
            <p className="text-slate-600 leading-relaxed">
              Alcohol is legal in Dubai — but only in licensed venues and under specific conditions. Understanding where and how you can drink is essential.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Where you CAN drink",
                  colour: "border-green-500 bg-green-50",
                  titleColour: "text-green-800",
                  items: [
                    "Licensed hotel bars and restaurants",
                    "Licensed standalone restaurants with a liquor licence",
                    "Nightclubs and entertainment venues",
                    "Beach clubs and pool bars",
                    "Private homes (with a personal liquor licence)",
                    "Duty-free at the airport",
                  ],
                },
                {
                  title: "Where you CANNOT drink",
                  colour: "border-red-400 bg-red-50",
                  titleColour: "text-red-800",
                  items: [
                    "Public places — streets, parks, beaches, cars",
                    "Non-licensed restaurants and cafés",
                    "During Ramadan daylight hours (even in hotels, some restrictions apply)",
                    "Any government building or public transport",
                    "Near mosques",
                  ],
                },
              ].map((box) => (
                <div key={box.title} className={`rounded-2xl border-l-4 p-5 ${box.colour}`}>
                  <h3 className={`font-semibold mb-3 ${box.titleColour}`}>{box.title}</h3>
                  <ul className="space-y-2">
                    {box.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-0.5 flex-shrink-0">{box.title.includes("CAN") ? "✓" : "✕"}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-[#0A1628]">Personal Liquor Licence</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Non-Muslim UAE residents can apply for a personal liquor licence through MMI (Maritime and Mercantile International) or African+Eastern, the two licensed alcohol retailers. This allows you to purchase alcohol from their stores to consume at home. The licence costs around AED 150/year and is linked to your Emirates ID. Without it, you technically cannot buy alcohol from a retail store — though in practice enforcement varies. Apply once you have your Emirates ID.
              </p>
            </div>
          </section>

          {/* Friday brunch */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-[#0A1628]">Friday Brunch: A Dubai Institution</h2>
            <p className="text-slate-600 leading-relaxed">
              If there is one social ritual that defines expat life in Dubai, it is Friday brunch. The UAE weekend runs Friday–Saturday, and Friday brunch has evolved into a multi-hour extravaganza combining unlimited food, free-flowing drinks, and live music — typically running from noon to 4pm, often continuing informally until evening.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Almost every hotel and many licensed restaurants offer a Friday brunch package. Prices typically range from AED 250 to AED 700 per person (approximately £54–£150) depending on whether the drinks package is included and how premium the venue is. For UK expats used to pub lunches, it takes some adjustment — but most quickly come to love it.
            </p>
            <div className="rounded-2xl border border-[#C9A84C]/40 bg-amber-50 p-5">
              <h3 className="font-semibold text-[#0A1628]">Top Friday Brunch spots</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Cé La Vi (Address Sky View) — stunning views, great music, popular with younger expats",
                  "Weslodge Saloon — buzzing atmosphere, crowd favourite in DIFC",
                  "Publique (Marriott Marquis) — one of the longest-running and most popular brunches",
                  "STK Dubai — premium steakhouse brunch, DIFC",
                  "Fogo de Chão — Brazilian BBQ, Marina, huge portions and great value",
                  "Patagonia (JBR) — relaxed beach-adjacent vibe, popular with families too",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#C9A84C] flex-shrink-0 font-bold">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Area by area */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0A1628]">Dubai Nightlife by Area</h2>
            <p className="text-slate-600 leading-relaxed">
              Dubai is a city of distinct neighbourhoods, each with its own social character. Where you end up on a night out depends on what you are looking for.
            </p>
            <div className="space-y-4">
              {AREAS.map((area) => (
                <div key={area.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-lg font-semibold text-[#0A1628]">{area.name}</h3>
                    <span className="inline-flex rounded-full bg-[#0A1628]/5 px-3 py-1 text-xs font-medium text-[#0A1628]">
                      {area.vibe}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.notes}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {area.picks.map((pick) => (
                      <span key={pick} className="rounded-full border border-[#C9A84C]/40 bg-amber-50 px-3 py-1 text-xs font-medium text-[#0A1628]">
                        {pick}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Beach clubs */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-[#0A1628]">Beach Clubs</h2>
            <p className="text-slate-600 leading-relaxed">
              Beach clubs are a major part of Dubai social life, particularly October through April when the weather is perfect. Most operate as day-to-night venues — you arrive for sunbeds and swimming in the afternoon, and the DJ picks up as the sun goes down. Many charge an entry fee (AED 100–400) that is redeemable against food and drinks.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { name: "Nikki Beach", loc: "Pearl Jumeirah", note: "World-famous brand, glamorous crowd, white-party vibe" },
                { name: "Zero Gravity", loc: "Dubai Marina", note: "Popular with younger expats, good pool area, affordable" },
                { name: "Cali Beach Club", loc: "Jumeirah Beach Hotel", note: "Relaxed, family-friendly until evening, great for groups" },
                { name: "Soho Beach", loc: "Mina Seyahi", note: "Linked to Soho Garden, lively, popular with the party crowd" },
                { name: "White Beach", loc: "Atlantis, Palm", note: "Premium, celebrity crowd, stunning setting" },
                { name: "Drift Beach", loc: "One&Only Royal Mirage", note: "Quieter, upscale, great for a relaxed day with quality service" },
              ].map((club) => (
                <div key={club.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-[#0A1628]">{club.name}</p>
                    <span className="text-xs text-slate-400 flex-shrink-0">{club.loc}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">{club.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ramadan */}
          <section className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6 space-y-3">
            <h2 className="text-xl font-bold text-[#0A1628]">Nightlife During Ramadan</h2>
            <p className="text-sm leading-relaxed text-slate-700">
              Ramadan is the Islamic holy month of fasting and falls at a different time each year. During Ramadan, Dubai's social scene changes significantly. Alcohol service is typically restricted to evening hours only (after Iftar, the breaking of the fast at sunset). Music in many venues is turned off or significantly reduced during the day. Many clubs and entertainment venues close or operate reduced hours. Dress codes become stricter in public areas.
            </p>
            <p className="text-sm leading-relaxed text-slate-700">
              However, Ramadan is also a genuinely beautiful time to be in Dubai. Iftar dinners are magnificent — elaborate, sociable, and generous feasts that many expats consider among the highlights of their year. Most hotels offer special Ramadan tent dining experiences that are well worth attending.
            </p>
          </section>

          {/* Patrick's tip */}
          <section className="rounded-2xl border-l-4 border-[#C9A84C] bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">Patrick&apos;s Note</p>
            <p className="mt-2 leading-relaxed text-slate-700">
              &ldquo;The first thing UK expats notice is that going out in Dubai is expensive by London standards — a round of drinks in a hotel bar will set you back AED 100–150 easily. The trick is learning the system: happy hours are real and generous (most hotel bars run 5–8pm with two-for-one deals), and once you know the right brunches and beach clubs your social life can be brilliant without breaking the bank. Irish Village on a Thursday night is as good as any pub in London and costs half the price.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-[#0A1628]">— Patrick, Founding Editor</p>
          </section>

          {/* Related guides */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#0A1628]">Related Guides</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { href: "/guides/community", label: "Community & Life", sub: "Healthcare, driving & daily life" },
                { href: "/guides/housing", label: "Finding a Home", sub: "Best areas to live in Dubai" },
                { href: "/guides/banking", label: "Banking & Finance", sub: "Managing money as an expat" },
              ].map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[#C9A84C]/60 hover:shadow-md"
                >
                  <p className="font-semibold text-[#0A1628]">{g.label}</p>
                  <p className="mt-1 text-xs text-slate-500">{g.sub}</p>
                </Link>
              ))}
            </div>
          </section>

        </main>

        <footer className="mt-12 border-t border-slate-200 pt-4">
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 Dubai Expat. All rights reserved.</p>
            <Link href="/" className="flex items-center gap-1 font-medium text-[#0A1628] hover:underline">
              ← Back to home
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
