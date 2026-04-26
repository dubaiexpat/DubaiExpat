import Link from "next/link";
import Header from "@/components/Header";
import type { Metadata } from "next";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import RelatedGuides from "@/components/RelatedGuides";

export const metadata: Metadata = {
  title: "Pet Relocation UK to Dubai (2026): Costs, Timeline, Rabies Test & Vets",
  description:
    "How to move your dog or cat from the UK to Dubai in 2026: UAE import permit, rabies titre test, approved vets, total costs (£2,000-4,000), 4-month timeline, and pet-relocation specialists.",
};

const SCHEMA_URL = "https://www.dubaiexpat.co.uk/guides/pets";
const BREADCRUMBS = [
  { name: "Home", url: "https://www.dubaiexpat.co.uk/" },
  { name: "Guides", url: "https://www.dubaiexpat.co.uk/#categories" },
  { name: "Pets", url: SCHEMA_URL },
];

const RELATED = [
  { title: "Renting in Dubai as a UK Expat", href: "/guides/housing", description: "Pet-friendly buildings and neighbourhoods" },
  { title: "UK to Dubai Removals & Shipping", href: "/guides/removals", description: "Coordinating pet move with household shipment" },
  { title: "Dubai Expat Community", href: "/guides/community", description: "Vet recommendations and pet groups" },
  { title: "Dubai Visa & Residency", href: "/guides/visa-residency", description: "Pet import permits tied to residency status" },
];

const PARTNERS = [
  {
    name: "PetAir UK",
    url: "https://www.petairuk.com",
    description:
      "One of the UK's most experienced pet relocation specialists, handling door-to-door moves to Dubai and the UAE including all documentation, CITES permits and approved airline booking.",
    badge: "Most Popular",
  },
  {
    name: "Happy Tails Travel",
    url: "https://www.happytailstravel.co.uk",
    description:
      "Specialist in Middle East pet relocation. Offers a fully managed service covering the rabies titre test coordination, import permit, health certificate and in-cabin or cargo travel arrangements.",
    badge: "Recommended",
  },
  {
    name: "Global Paws",
    url: "https://www.globalpaws.co.uk",
    description:
      "Award-winning pet travel company with extensive UAE experience. Particularly strong on exotic breeds and larger dogs. Offers a free initial consultation.",
    badge: null,
  },
  {
    name: "Pet Relocators",
    url: "https://www.petrelocators.co.uk",
    description:
      "Specialist pet freight and relocation company covering the UAE. Handles all MOCCAE import permits and offers a transparent, itemised quote.",
    badge: null,
  },
];

export default function PetsGuidePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-slate-900">
      <SchemaJsonLd
        type="Article"
        title="Pet Relocation UK to Dubai (2026): Costs, Timeline, Rabies Test & Vets"
        description="How to move your dog or cat from the UK to Dubai in 2026: UAE import permit, rabies titre test, approved vets, total costs, 4-month timeline."
        url={SCHEMA_URL}
        breadcrumbs={BREADCRUMBS}
      />
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <Header />

        {/* Breadcrumb */}
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="flex items-center gap-1 hover:text-[#0A1628]">
            <span>←</span>
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/#categories" className="hover:text-[#0A1628]">Guides</Link>
          <span>/</span>
          <span className="font-medium text-[#0A1628]">Pets</span>
        </div>

        <main className="mt-8 space-y-12">

          {/* Hero */}
          <section className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=500&fit=crop&auto=format"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
            <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                Pets &amp; Animal Relocation
              </div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
                Bringing Your Pet to Dubai from the UK
              </h1>
              <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
                The UAE has strict pet import rules, and the process takes longer than most people expect — often four to six months from start to finish. The good news is that thousands of British expat families do it every year, and with the right preparation, it is completely manageable. This guide covers everything you need to know.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "Typical Timeline", value: "4–6 months" },
                  { label: "Approx. Total Cost", value: "£800–£2,500" },
                  { label: "Process Steps", value: "6 key steps" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white/10 p-3">
                    <p className="text-xl font-bold text-[#C9A84C]">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Warning box */}
          <section className="rounded-2xl border-l-4 border-[#C9A84C] bg-amber-50 p-6">
            <h2 className="font-semibold text-[#0A1628]">Start planning early — this takes time</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              The single biggest mistake UK expats make is leaving pet relocation too late. The rabies titre test alone requires a minimum 30-day wait after vaccination, followed by a further three-month waiting period before your pet can travel. If you are planning to move in six months, you should begin the process now.
            </p>
          </section>

          {/* Step by step */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0A1628]">
              The 6-Step Process: UK to Dubai
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The UAE Ministry of Climate Change and Environment (MOCCAE) governs all pet imports. The requirements below apply to dogs and cats travelling from the UK. Other animals have different — often stricter — requirements.
            </p>

            {[
              {
                step: "01",
                title: "Microchip",
                timing: "Do this first, before any vaccinations",
                content:
                  "Your pet must have an ISO 15-digit microchip. If your pet is already chipped, confirm it is the correct standard — older 9 or 10-digit chips are not accepted. The microchip must be implanted before the rabies vaccination, or the vaccination will not be valid for UAE entry purposes.",
              },
              {
                step: "02",
                title: "Rabies Vaccination",
                timing: "After microchipping",
                content:
                  "Your pet must receive a rabies vaccination from a registered UK vet after the microchip is confirmed. Keep the vaccination certificate — the batch number, date and vet details must appear on all subsequent paperwork. If your pet has a current rabies vaccine, check whether it was administered after the microchip was in place.",
              },
              {
                step: "03",
                title: "Rabies Titre Test (Blood Test)",
                timing: "Minimum 30 days after rabies vaccination",
                content:
                  "This is the most important step — and the one that creates the timeline. Your vet must take a blood sample at least 30 days after the rabies vaccination and send it to an EU-approved laboratory (the Animal and Plant Health Agency (APHA) in Weybridge is the standard UK option). The test confirms adequate antibody levels. Results typically take 2–3 weeks.",
              },
              {
                step: "04",
                title: "Three-Month Wait",
                timing: "After titre test result",
                content:
                  "Once you have a passing titre test result, you must wait a further three months before your pet can enter the UAE. This wait cannot be shortened. Use this time to apply for the UAE import permit and book your specialist relocation company.",
              },
              {
                step: "05",
                title: "UAE Import Permit (MOCCAE)",
                timing: "During the three-month wait",
                content:
                  "You must obtain an import permit from MOCCAE before your pet arrives in Dubai. This is applied for online through the MOCCAE portal. You will need your pet's microchip number, vaccination records, titre test result, and your UAE visa details. The permit costs approximately AED 200 (around £43) and takes 5–10 working days. Some breeds of dog require additional documentation — see breed restrictions below.",
              },
              {
                step: "06",
                title: "Health Certificate",
                timing: "Within 10 days of travel",
                content:
                  "In the final 10 days before travel, your vet must issue an official health certificate confirming your pet is fit to fly, has all required vaccinations, and matches the microchip details. This certificate must be endorsed by the Animal and Plant Health Agency (APHA). This is time-sensitive — it cannot be issued more than 10 days before departure.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex-shrink-0 text-3xl font-bold text-[#C9A84C] leading-none">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1628]">{item.title}</h3>
                  <p className="mt-0.5 text-xs font-medium text-[#C9A84C] uppercase tracking-wide">
                    {item.timing}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.content}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Costs */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-[#0A1628]">What Does It Cost?</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Costs vary depending on the size of your pet, whether you use a specialist relocation company, and which airline carries the animal. Below are typical UK-to-Dubai figures.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A1628] text-[#0A1628]">
                    <th className="rounded-tl-lg px-4 py-3 text-left font-semibold">Item</th>
                    <th className="rounded-tr-lg px-4 py-3 text-left font-semibold">Approx. Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Microchip (if not already done)", "£20–£40"],
                    ["Rabies vaccination", "£40–£80"],
                    ["Rabies titre test (APHA lab fee)", "£120–£180"],
                    ["APHA certificate endorsement", "£30"],
                    ["MOCCAE import permit", "~£43 (AED 200)"],
                    ["Health certificate (vet fee)", "£60–£120"],
                    ["Relocation specialist service fee", "£300–£800"],
                    ["Airline cargo / freight charge", "£200–£900 (size dependent)"],
                    ["Total (estimated)", "£800–£2,500+"],
                  ].map(([item, cost], i) => (
                    <tr
                      key={item}
                      className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-slate-50" : "bg-white"} ${item === "Total (estimated)" ? "font-semibold text-[#0A1628]" : "text-slate-700"}`}
                    >
                      <td className="px-4 py-3">{item}</td>
                      <td className="px-4 py-3 text-[#C9A84C] font-medium">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Breed restrictions */}
          <section className="rounded-2xl border-l-4 border-red-400 bg-red-50 p-6 space-y-3">
            <h2 className="text-xl font-bold text-[#0A1628]">Breed Restrictions: Dogs</h2>
            <p className="text-sm leading-relaxed text-slate-700">
              The UAE prohibits the import of certain dog breeds. The following are banned or heavily restricted and may be refused entry regardless of documentation:
            </p>
            <ul className="text-sm text-slate-700 space-y-1">
              {["Pit Bull Terrier", "American Staffordshire Terrier", "Staffordshire Bull Terrier", "Rottweiler", "Dobermann Pinscher", "Mastiff breeds (including Boerboel, Cane Corso)", "Wolf hybrids"].map((breed) => (
                <li key={breed} className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  {breed}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-600">
              If you own one of the breeds above, contact a specialist relocation company before making any plans — the rules are complex and vary by Emirates. Abu Dhabi has different restrictions to Dubai.
            </p>
          </section>

          {/* Flying with pets */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0A1628]">Flying Your Pet to Dubai</h2>
            <p className="text-slate-600 leading-relaxed">
              Emirates Airlines does not carry live animals in the passenger cabin. Dogs and cats travelling from the UK to Dubai go as manifest cargo, handled by Emirates SkyCargo or a specialist pet freight company. British Airways also handles pet cargo on their London–Dubai route.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Small cats and very small dogs (under 8kg including carrier) may be able to travel in-cabin on other airlines via a connecting route, though this is complex to arrange. Most UK expats use a direct cargo service — it is the most reliable option.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Avoid travelling in the hottest months (June–September) if possible. Dubai airport can reach 45°C on the tarmac, and many airlines suspend live animal cargo during the summer heat period. Aim for October to April.
            </p>
          </section>

          {/* Once in Dubai */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0A1628]">Once You Arrive in Dubai</h2>
            <p className="text-slate-600 leading-relaxed">
              On arrival at Dubai International Airport, your pet will be inspected by Dubai Municipality veterinary officers. Have your original documents ready: the MOCCAE import permit, health certificate, vaccination record and microchip documentation. Inspections are usually straightforward if paperwork is in order.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Register your pet with Dubai Municipality within 30 days of arrival. This costs approximately AED 200 (£43) and requires annual renewal. Dogs must be licensed and microchipped — fines apply for unlicensed dogs found in public areas.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Dubai has good veterinary care. Recommended practices include Dubai Kennels and Cattery (DKC), Veterinary Hospital at Dubai Hills, and the British Veterinary Clinic in Jumeirah. Pet-friendly apartments are available but confirm with your landlord before signing — some buildings prohibit animals.
            </p>
          </section>

          {/* ── AFFILIATE PARTNER SECTION ──────────────────────────────── */}
          <section className="space-y-6">
            <div className="rounded-2xl bg-[#0A1628] px-6 py-8 text-[#0A1628]">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                Trusted Partners
              </div>
              <h2 className="text-2xl font-bold">
                Pet Relocation Specialists We Recommend
              </h2>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                Getting the paperwork right is critical — one error can delay or prevent your pet entering the UAE. These specialist companies manage the entire process for you, from titre test coordination to airport collection in Dubai.
              </p>
              <p className="mt-3 text-xs text-slate-400">
                Disclosure: some links below may be affiliate links. We only recommend companies we consider genuinely reputable. Our editorial content is never influenced by commercial relationships.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {PARTNERS.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/80 hover:shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-[#0A1628] group-hover:text-[#C9A84C] transition">
                        {partner.name}
                      </h3>
                      {partner.badge && (
                        <span className="flex-shrink-0 rounded-full bg-[#C9A84C]/15 px-2 py-0.5 text-xs font-semibold text-[#0A1628]">
                          {partner.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {partner.description}
                    </p>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[#C9A84C]">
                    Get a free quote →
                  </p>
                </a>
              ))}
            </div>

            <p className="text-xs text-slate-400 text-center">
              Are you a pet relocation specialist working with UK expats moving to Dubai?{" "}
              <a href="mailto:hello@dubaiexpat.co.uk" className="underline hover:text-[#0A1628]">
                Get in touch about a partnership.
              </a>
            </p>
          </section>

          {/* Patrick's tip */}
          <section className="rounded-2xl border-l-4 border-[#C9A84C] bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
              Patrick&apos;s Note
            </p>
            <p className="mt-2 leading-relaxed text-slate-700">
              &ldquo;I moved with a Labrador. The process felt overwhelming at first but once you break it into steps it is very manageable. The one thing I wish I&apos;d known earlier: use a specialist company. The MOCCAE portal and APHA process has enough moving parts that a professional who does this daily is worth every penny. My dog was at my new apartment in DIFC the same day I arrived.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-[#0A1628]">— Patrick, Founding Editor</p>
          </section>

          {/* Related guides */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#0A1628]">Related Guides</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { href: "/guides/housing", label: "Finding a Home", sub: "Pet-friendly areas & apartments" },
                { href: "/guides/community", label: "Community & Life", sub: "Vets, parks & expat life" },
                { href: "/guides/removals", label: "Removals & Shipping", sub: "Moving all your belongings" },
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

        <RelatedGuides items={RELATED} />

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
