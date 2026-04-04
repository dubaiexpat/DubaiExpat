import Link from "next/link";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domestic Help & Drivers in Dubai: A Guide for UK Expats (2026)",
  description:
    "How to hire a live-in housekeeper, part-time cleaner or private driver in Dubai — visas, contracts, costs and what you need to know.",
};

const ROLES = [
  {
    title: "Live-in Housekeeper / Nanny",
    typical_cost: "AED 1,500–2,500/month + visa costs",
    visa: "Domestic Worker Visa (sponsored by employer)",
    notes: [
      "You must have a minimum monthly income of AED 25,000 to sponsor a live-in domestic worker.",
      "The visa costs approximately AED 5,000–8,000 all-in (medical, Emirates ID, visa fees) — paid by the employer.",
      "Most housekeepers come from the Philippines, Indonesia, India or Sri Lanka.",
      "A standard work contract is required and must be registered with MOHRE (Ministry of Human Resources).",
      "Live-in staff are typically given one day off per week and 30 days annual leave after one year.",
      "You must provide accommodation, meals, and return air tickets to their home country every two years.",
    ],
  },
  {
    title: "Part-time / Visiting Housekeeper",
    typical_cost: "AED 40–70/hour or AED 700–1,200/month for 3–4 days/week",
    visa: "No visa required (they self-sponsor or work via an agency)",
    notes: [
      "The easiest option for those who don't want the responsibility of sponsoring a visa.",
      "Many are on domestic worker visas sponsored by other families and work additional jobs.",
      "Agencies charge higher rates but handle all legality — good for short-term or temporary needs.",
      "Trusted part-time cleaners are often found through expat Facebook groups and community recommendations.",
      "Popular agencies: ServiceMarket, Homemaids, TaskUs Dubai.",
    ],
  },
  {
    title: "Private Driver",
    typical_cost: "AED 2,500–4,000/month (live-out) or AED 3,500–5,500/month (live-in)",
    visa: "Driver Visa (sponsored by employer, similar to domestic worker process)",
    notes: [
      "A private driver needs a UAE driving licence — if they have a licence from certain countries (UK, India, Pakistan) it can be transferred without a test.",
      "MOHRE registration and a standard contract are required.",
      "Most expat families who hire a driver do so to handle school runs, shopping and airport trips.",
      "Many share a driver between two families to split the cost — a common arrangement in expat compounds.",
      "Car provision is usually included — either the employer's car or a separately arranged vehicle.",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Check your eligibility",
    detail:
      "To sponsor a live-in domestic worker, you need a minimum salary of AED 25,000/month. Check your employment contract or bank statements.",
  },
  {
    step: "02",
    title: "Find your hire",
    detail:
      "Use a licensed domestic staffing agency (Dawn of a New Day, Domestic Helper Dubai, etc.) or expat community networks. Agencies offer guaranteed replacements if a placement doesn't work out.",
  },
  {
    step: "03",
    title: "Sign a MOHRE-approved contract",
    detail:
      "A standard domestic worker contract must be signed by both parties and registered with the Ministry of Human Resources and Emiratisation (MOHRE).",
  },
  {
    step: "04",
    title: "Apply for the entry permit",
    detail:
      "Submit the visa application through ICA (Federal Authority for Identity and Citizenship) or via a PRO (Public Relations Officer) / typing centre. Takes 2–5 working days.",
  },
  {
    step: "05",
    title: "Medical test & Emirates ID",
    detail:
      "Once in the UAE, the domestic worker must pass a medical fitness test (health screening) and enrol for an Emirates ID. This typically takes 1–2 weeks.",
  },
  {
    step: "06",
    title: "Work visa stamped",
    detail:
      "After the medical clearance, the residency visa is stamped in the passport. Total process from offer to start: approximately 4–6 weeks.",
  },
];

export default function DomesticHelpGuidePage() {
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
          <span className="font-medium text-[#0A1628]">Domestic Help & Drivers</span>
        </div>

        <main className="mt-8 space-y-12">

          {/* Hero */}
          <section className="rounded-2xl bg-[#0A1628] px-6 py-10 text-[#0A1628] sm:px-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              Domestic Help & Drivers
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Hiring Domestic Help & a Driver in Dubai
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
              One of the biggest lifestyle differences for UK expats in Dubai is the availability and affordability of domestic staff. Whether you want a live-in housekeeper, a part-time cleaner or a private driver, this guide walks you through the legal process, typical costs and what to expect.
            </p>
          </section>

          {/* Why it's different */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0A1628]">Why This Is Different from the UK</h2>
            <p className="text-slate-600 leading-relaxed">
              In the UAE, domestic workers are employed directly by the household under a sponsored visa — not through an employment agency acting as the legal employer. This means you as the household are the visa sponsor, the legal employer and the responsible party. It carries real obligations, but it also means a level of flexibility and stability that agency-managed arrangements in the UK rarely offer.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Live-in housekeeper", value: "AED 1,500–2,500/mo" },
                { label: "Part-time cleaner (3 days/wk)", value: "AED 800–1,200/mo" },
                { label: "Private driver (live-out)", value: "AED 2,500–4,000/mo" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                  <p className="text-lg font-bold text-[#0A1628]">{item.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Role breakdowns */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0A1628]">Role Breakdowns</h2>
            {ROLES.map((role) => (
              <div key={role.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#0A1628]">{role.title}</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  <span className="rounded-full bg-amber-50 border border-[#C9A84C]/40 px-3 py-1 text-xs font-medium text-[#0A1628]">
                    💰 {role.typical_cost}
                  </span>
                  <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-medium text-blue-800">
                    🪪 {role.visa}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {role.notes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Process steps */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-[#0A1628]">The Visa Process: Step by Step</h2>
            <p className="text-slate-600 leading-relaxed">
              Sponsoring a domestic worker visa is straightforward once you know the steps. Many expats use a PRO (Public Relations Officer) or typing centre to manage the paperwork — costs are typically AED 500–1,000 for their service fee.
            </p>
            <div className="space-y-3">
              {PROCESS_STEPS.map((s) => (
                <div key={s.step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0A1628] text-xs font-bold text-[#C9A84C]">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A1628]">{s.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Legal obligations */}
          <section className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6 space-y-3">
            <h2 className="text-xl font-bold text-[#0A1628]">Your Legal Obligations as an Employer</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              {[
                "Pay wages on time — MOHRE enforces a Wage Protection System (WPS) for domestic workers.",
                "Provide a safe working environment and adequate accommodation for live-in staff.",
                "Give one day off per week and 30 days annual leave per year after the first year.",
                "Pay for return air tickets to their home country every two years.",
                "Settle any end-of-service gratuity on termination (1 month per year of service).",
                "Renew the residency visa on time — overstay fines are the employer's responsibility.",
                "Do not confiscate passports — this is illegal in the UAE.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 text-amber-600">⚠</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Useful agencies */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-[#0A1628]">Trusted Agencies & Resources</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { name: "Dawn of a New Day", type: "Domestic staffing agency", note: "Well-regarded for housekeeper and nanny placements. Offers replacement guarantees." },
                { name: "ServiceMarket", type: "Online marketplace", note: "Good for part-time cleaners and one-off services. Transparent pricing, no visa complexity." },
                { name: "Domestic Helper Dubai", type: "Full-service agency", note: "Handles the entire visa process. Higher fee but turnkey solution for busy families." },
                { name: "MOHRE (mohre.gov.ae)", type: "Government body", note: "Official source for contract templates, wage guidelines and worker rights information." },
              ].map((a) => (
                <div key={a.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-semibold text-[#0A1628]">{a.name}</p>
                  <p className="text-xs text-[#C9A84C] font-medium mt-0.5">{a.type}</p>
                  <p className="mt-2 text-sm text-slate-500">{a.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Patrick's note */}
          <section className="rounded-2xl border-l-4 border-[#C9A84C] bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">Patrick&apos;s Note</p>
            <p className="mt-2 leading-relaxed text-slate-700">
              &ldquo;Having a housekeeper changed our family's life in Dubai more than almost anything else. It allowed both of us to work full-time without the domestic juggle we were used to in London. The key is treating it as a proper employment relationship — sign the contract properly, pay on time, give them their day off. The best housekeepers stay for years and become genuinely part of the family. Don't rush the hiring decision and always take references.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-[#0A1628]">— Patrick, Founding Editor</p>
          </section>

          {/* Related guides */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#0A1628]">Related Guides</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { href: "/guides/visa-residency", label: "Visa & Residency", sub: "Understanding UAE visa types" },
                { href: "/guides/community", label: "Community & Life", sub: "Healthcare, driving & daily life" },
                { href: "/guides/housing", label: "Finding a Home", sub: "Best areas to live in Dubai" },
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
