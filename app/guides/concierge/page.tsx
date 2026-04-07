import Link from "next/link";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concierge Recommendations: Dubai Expat Guide (2026)",
  description:
    "Trusted recommendations for tailors, jewellers, vets, music and academic tutors, members clubs, sports clubs and kids' party venues in Dubai.",
};

const CATEGORIES = [
  {
    title: "Tailors & Bespoke Clothing",
    icon: "✂️",
    intro:
      "Dubai has a world-class tailoring scene — far better than most expats expect. The best tailors are found in Satwa, Karama and the malls, and can produce bespoke suits, shirts and occasion wear at a fraction of London prices.",
    picks: [
      {
        name: "Al Bilal Tailors",
        area: "Satwa",
        note: "Long-established, brilliant at suits. Allow 5–7 days for a first fitting.",
      },
      {
        name: "Thomas & Parker",
        area: "DIFC",
        note: "British-run bespoke tailoring. Premium prices but exceptional quality — popular with DIFC professionals.",
      },
      {
        name: "Creative Tailors",
        area: "Karama",
        note: "Excellent for everyday shirts and trousers. Great value, fast turnaround.",
      },
      {
        name: "April Cornell",
        area: "Various malls",
        note: "Good for women's occasion wear alterations and custom dresses.",
      },
    ],
    tip: "Bring reference photos and fabric swatches if you have specific requirements. Always request a sample piece before commissioning a full wardrobe order.",
  },
  {
    title: "Jewellers",
    icon: "💎",
    intro:
      "Gold and jewellery shopping is one of Dubai's great pleasures. The Gold Souk in Deira is the obvious starting point, but there are also excellent independent and high-end jewellers across the city.",
    picks: [
      {
        name: "Dubai Gold Souk",
        area: "Deira",
        note: "Over 300 shops. Best for 18k and 22k gold at competitive prices. Always negotiate — it's expected.",
      },
      {
        name: "Damas Jewellery",
        area: "Multiple locations",
        note: "UAE's largest jeweller. Good for certified diamonds and contemporary designs.",
      },
      {
        name: "Tiffany & Co / Cartier",
        area: "Dubai Mall / Mall of the Emirates",
        note: "Comparable or slightly cheaper than UK pricing due to lower taxes.",
      },
      {
        name: "Pure Gold Jewellers",
        area: "Multiple",
        note: "Reliable mid-range option. Good for gifts and everyday pieces.",
      },
    ],
    tip: "Gold prices in the souk are based on the daily gold rate plus a making charge. The making charge is negotiable. Always get a certificate of authenticity for diamond purchases.",
  },
  {
    title: "Vets",
    icon: "🐾",
    intro:
      "Dubai has excellent veterinary care, though it is not cheap. Most vets are centred in residential expat areas and many operate out of purpose-built clinics with modern equipment.",
    picks: [
      {
        name: "Dubai Falcon Hospital / Modern Vet",
        area: "Al Barsha",
        note: "One of Dubai's largest and most comprehensive vet practices. 24-hour emergency.",
      },
      {
        name: "British Veterinary Clinic",
        area: "Jumeirah",
        note: "UK-trained vets, popular with British expats. Excellent for routine care and specialist referrals.",
      },
      {
        name: "Vetcare Animal Hospital",
        area: "Mirdif",
        note: "Strong on exotic animals as well as dogs and cats. Good for east-side residents.",
      },
      {
        name: "Medivet Dubai",
        area: "JBR / Marina",
        note: "UK chain. Familiar processes for UK expats — similar consultation style and record-keeping.",
      },
    ],
    tip: "Register your pet with Dubai Municipality (DM) within 30 days of arrival — this is a legal requirement. Annual renewal costs around AED 100–200 per pet.",
  },
  {
    title: "Academic Tutors",
    icon: "📚",
    intro:
      "Private tutoring is widespread in Dubai expat families, especially around exam seasons (IGCSEs, A-Levels, IB). Most tutors are former teachers from UK or international school backgrounds.",
    picks: [
      {
        name: "Milestone Education Centre",
        area: "Jumeirah / JLT",
        note: "Well-regarded tutoring centre covering GCSE, A-Level and IB. Group and one-to-one sessions.",
      },
      {
        name: "Scholars Academy",
        area: "Dubai Marina",
        note: "Strong in Maths and Sciences. Popular with British school students.",
      },
      {
        name: "Kumon",
        area: "Multiple locations",
        note: "Good for younger children building foundational Maths and English skills.",
      },
      {
        name: "Tutors International (private)",
        area: "Home visits",
        note: "Agency placing experienced UK-trained tutors for home sessions. AED 200–400/hour depending on subject and level.",
      },
    ],
    tip: "Many British school teachers in Dubai also offer private tutoring outside school hours. Ask at the school gate — word of mouth is the best route to finding the right tutor.",
  },
  {
    title: "Music Tuition",
    icon: "🎵",
    intro:
      "Music tuition in Dubai is excellent, with teachers from conservatoire and performance backgrounds available across all instruments. Many schools also have strong music departments that offer after-hours lessons.",
    picks: [
      {
        name: "Music Hub Dubai",
        area: "JLT / Dubai Marina",
        note: "Lessons in piano, guitar, violin, voice and more. ABRSM exam preparation available.",
      },
      {
        name: "Melodica Music Academy",
        area: "Multiple",
        note: "One of Dubai's largest music schools. Broad range of instruments, children and adults.",
      },
      {
        name: "Dubai Music School",
        area: "Jumeirah",
        note: "Classical focus, strong ABRSM track record. Particularly good for piano and strings.",
      },
      {
        name: "The Music Room",
        area: "Al Quoz",
        note: "Smaller, boutique school. Great for more unusual instruments — jazz, recording and music production.",
      },
    ],
    tip: "ABRSM (Associated Board of the Royal Schools of Music) exams are available in Dubai — useful for children wanting UK-standard qualifications. Book exam slots early as they fill quickly.",
  },
  {
    title: "Members Clubs",
    icon: "🥂",
    intro:
      "Dubai has a growing number of private members clubs — from classic British-style clubs to newer urban venues. Membership costs vary enormously but can offer a genuine sense of community.",
    picks: [
      {
        name: "Nad Al Sheba Club",
        area: "Nad Al Sheba",
        note: "Sports and social club popular with expat families. Pool, tennis, gym and dining. Joining fee from AED 5,000.",
      },
      {
        name: "Dubai Country Club",
        area: "Nad Al Sheba",
        note: "Golf, cricket and social events. Long-established expat institution.",
      },
      {
        name: "One&Only Private Homes Club",
        area: "Palm Jumeirah",
        note: "Ultra-premium. Access to One&Only resort amenities. Price on application.",
      },
      {
        name: "The Club at Jumeirah",
        area: "Jumeirah",
        note: "Social and fitness focused. Good for families and young professionals.",
      },
    ],
    tip: "Most clubs have a waiting list. Apply early and get a member to sponsor your application — that is usually the fastest route to an offer.",
  },
  {
    title: "Sports Clubs",
    icon: "⚽",
    intro:
      "Expats in Dubai are spoiled for sporting options. Cricket, football, rugby, tennis, golf, padel, cycling and triathlon clubs all have active expat memberships.",
    picks: [
      {
        name: "Dubai Exiles Rugby Club",
        area: "Al Awir",
        note: "One of the oldest and most social expat clubs in Dubai. Men's, women's and minis sections.",
      },
      {
        name: "Dubai Cricket Council leagues",
        area: "Various grounds",
        note: "Highly competitive weekend league — a must for cricket-playing expats.",
      },
      {
        name: "Dubai Celts GAA",
        area: "The Sevens",
        note: "Gaelic football and hurling. Brilliantly social, open to all nationalities.",
      },
      {
        name: "Dubai Road Runners",
        area: "Creek Park / running routes",
        note: "Large running community with weekly runs and Dubai Marathon training.",
      },
      {
        name: "Padel clubs (Top Padel, Just Padel)",
        area: "Multiple",
        note: "Padel has exploded in popularity among Dubai expats. Courts available across the city — book online.",
      },
    ],
    tip: "The Sevens (Dubai International Stadium complex) is the hub for many expat sports clubs. A free Saturday morning there and you will find contacts for almost every sport.",
  },
  {
    title: "Kids' Parties",
    icon: "🎉",
    intro:
      "Kids' birthday parties in Dubai are a serious affair. Expectations are high and options are plentiful — from beach venues and trampolining arenas to private villas with bespoke entertainment.",
    picks: [
      {
        name: "Aventura Parks",
        area: "Mushrif Park",
        note: "Outdoor adventure park. Great for active kids aged 5+. Group bookings available.",
      },
      {
        name: "KidZania Dubai",
        area: "Dubai Mall",
        note: "Role-play city for kids. Popular party venue — book a private session for a more exclusive feel.",
      },
      {
        name: "Bounce Dubai",
        area: "Al Quoz",
        note: "Trampoline park. Very popular with 6–14 year olds. Private party packages available.",
      },
      {
        name: "Dubai Aquarium & Underwater Zoo",
        area: "Dubai Mall",
        note: "Unique venue for smaller groups. Underwater party experience is genuinely memorable.",
      },
      {
        name: "Beach venue hire (private beaches)",
        area: "JBR / Palm",
        note: "Many hotels offer private beach party packages. More expensive but spectacular for a milestone birthday.",
      },
    ],
    tip: "Book venues at least 4–6 weeks in advance for weekend slots in the October–April peak season. Many entertainment companies also offer full party management including decorations, catering and themed entertainers.",
  },
];

export default function ConciergeGuidePage() {
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
          <span className="font-medium text-[#0A1628]">Concierge</span>
        </div>

        <main className="mt-8 space-y-12">

          {/* Hero */}
          <section className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=500&fit=crop&auto=format"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
            <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                Trusted Recommendations
              </div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
                Concierge Guide: The Best Services in Dubai
              </h1>
              <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
                Moving to a new city means rebuilding your trusted network from scratch. These recommendations — compiled from years of expat experience — give you a head start finding the best tailors, jewellers, tutors, clubs and party venues in Dubai.
              </p>
            </div>
          </section>

          {/* Categories */}
          {CATEGORIES.map((cat) => (
            <section key={cat.title} className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-2xl font-bold text-[#0A1628]">{cat.title}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{cat.intro}</p>

              <div className="grid gap-3 sm:grid-cols-2">
                {cat.picks.map((pick) => (
                  <div key={pick.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-[#0A1628]">{pick.name}</p>
                      <span className="text-xs text-slate-400 flex-shrink-0">{pick.area}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">{pick.note}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-[#C9A84C]/40 bg-amber-50 px-4 py-3">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold text-[#0A1628]">Tip: </span>
                  {cat.tip}
                </p>
              </div>
            </section>
          ))}

          {/* Patrick's note */}
          <section className="rounded-2xl border-l-4 border-[#C9A84C] bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">Patrick&apos;s Note</p>
            <p className="mt-2 leading-relaxed text-slate-700">
              &ldquo;The single best thing you can do in your first month is say yes to every social invitation. Dubai's expat community is remarkably open — within a few weekends you'll have met people who can recommend their tailor, their vet, their kids' football coach and their favourite Friday brunch. That network is worth more than any list. But start here while you're building it.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-[#0A1628]">— Patrick, Founding Editor</p>
          </section>

          {/* Related guides */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#0A1628]">Related Guides</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { href: "/guides/nightlife", label: "Nightlife", sub: "Bars, clubs & social scene" },
                { href: "/guides/community", label: "Community & Life", sub: "Healthcare, driving & daily life" },
                { href: "/guides/pets", label: "Bringing Your Pet", sub: "UAE import rules & specialists" },
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
