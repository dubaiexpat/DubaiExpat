import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Visa & Residency in Dubai: A Complete Guide for UK Expats (2026)",
  description:
    "Everything UK expats need to know about UAE visas — Golden Visa, Green Visa, Employment Visa, Freelancer Visa and Retirement Visa. Costs, timelines and how to apply.",
};

export default function VisaResidencyGuide() {
  return (
    <>
      <div className="bg-white px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Header />
          <div className="flex items-center gap-2 py-3 text-sm text-slate-500">
            <Link href="/" className="flex items-center gap-1 hover:text-[#0A1628]">
              <span>←</span><span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/#categories" className="hover:text-[#0A1628]">Guides</Link>
            <span>/</span>
            <span className="font-medium text-[#0A1628]">Visa &amp; Residency</span>
          </div>
        </div>
      </div>
      <main className="min-h-screen" style={{ backgroundColor: "#0A1628" }}>
        {/* Hero Section */}
        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "#C9A84C" }}
            >
              Visa & Residency in Dubai: A Complete Guide for UK Expats (2026)
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Navigate the UAE's modern visa system with confidence. Whether
              you're coming for work, investment, or retirement, we break down
              every option available to you.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#C9A84C" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#C9A84C" }}>
              Why Your Visa Choice Matters
            </h2>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Choosing the right visa is one of the most important decisions
                you'll make as an expat coming to Dubai. Your visa type determines
                not only how long you can stay in the UAE, but also your rights,
                flexibility in the job market, ability to sponsor family members,
                and eligibility for certain benefits like healthcare and banking
                services.
              </p>
              <p>
                The UAE has transformed its visa landscape dramatically over the
                past five years. What was once a fairly rigid employment-visa system
                has evolved into a sophisticated ecosystem offering multiple pathways
                for different stages of career and life. The introduction of the Green
                Visa in 2021, the expansion of the Golden Visa, and the creation of
                specialized permits for freelancers and remote workers reflect the
                country's commitment to attracting global talent beyond traditional
                corporate employment.
              </p>
              <p>
                This guide will walk you through every visa option available to UK
                expats, explaining the requirements, costs, timelines, and the
                practical implications of each choice. By the end, you'll have the
                information you need to determine which path is right for your
                situation.
              </p>
            </div>
          </div>
        </section>

        {/* Employment Visa */}
        <section className="px-4 py-12 md:px-8 bg-gray-900 bg-opacity-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#C9A84C" }}>
              The Employment Visa
            </h2>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold" style={{ color: "#C9A84C" }}>
                Best for:
              </span>{" "}
              UK expats with a confirmed job offer in Dubai
            </p>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                The employment visa remains the most common pathway for UK expats
                relocating to Dubai. This is a sponsored visa, meaning your employer
                takes on the responsibility of sponsoring your residency with the UAE
                authorities. If you've been offered a job in Dubai, this is almost
                certainly the visa you'll be using.
              </p>
              <p>
                The visa is typically issued for a period of two to three years, after
                which it can be renewed. The critical thing to understand is that an
                employment visa is tied to your employer. This doesn't mean you're
                locked in forever — you can transfer your sponsorship to a new employer
                if you change jobs — but you cannot simply resign and remain in the UAE
                without securing a new sponsoring employer or switching to a different
                visa category.
              </p>
              <p>
                Your employer will handle most of the paperwork and administrative work.
                What you'll need to provide includes a valid passport, a medical fitness
                certificate, and your degree certificate (if applicable). Once your
                sponsorship is approved, you'll receive an entry permit, complete your
                medical examination in the UAE, obtain your Emirates ID, and finally have
                your residence visa stamped into your passport. In most cases, your
                employer covers the visa costs, so there's no direct expense to you, though
                some employers may deduct a portion of these costs from your salary.
              </p>
            </div>
          </div>
        </section>

        {/* Green Visa */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#C9A84C" }}>
              The Green Visa (Self-Sponsored)
            </h2>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold" style={{ color: "#C9A84C" }}>
                Best for:
              </span>{" "}
              Skilled professionals, freelancers, and entrepreneurs
            </p>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Introduced in 2021, the Green Visa is a game-changer for many expats.
                Unlike the employment visa, the Green Visa is self-sponsored, meaning
                you don't need an employer to sponsor you. This opens up significant
                flexibility for talented professionals who want independence, for
                freelancers operating across multiple clients, and for entrepreneurs
                setting up their own ventures.
              </p>
              <p>
                To qualify for a Green Visa, you must meet one of two criteria. The
                first is educational: you must hold a bachelor's degree or higher from
                a recognized institution. The second is financial: you must have a
                confirmed monthly salary of AED 15,000 or above. Additionally, you need
                to provide evidence of valid employment (a current employment contract
                with a UAE company) or a business licence if you're self-employed.
              </p>
              <p>
                The Green Visa is valid for five years and can be renewed. It grants you
                the freedom to work for multiple employers, switch jobs freely, or
                operate your own freelance business without needing separate permission.
                The cost is approximately AED 3,500 to AED 5,000 (roughly £750 to £1,100),
                which you pay directly. This is a modest investment in exchange for the
                independence this visa category provides.
              </p>
            </div>
          </div>
        </section>

        {/* Golden Visa */}
        <section className="px-4 py-12 md:px-8 bg-gray-900 bg-opacity-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#C9A84C" }}>
              The Golden Visa (Long-Term Residency)
            </h2>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold" style={{ color: "#C9A84C" }}>
                Best for:
              </span>{" "}
              Investors, senior professionals, and highly qualified individuals
            </p>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                The Golden Visa represents the UAE's flagship long-term residency
                offering. Valid for 10 years and renewable indefinitely, it's designed
                to attract high-net-worth individuals, exceptional talent, and strategic
                investors who want extended residency stability without the constraints
                of employment-based sponsorship.
              </p>
              <p>
                There are several pathways to the Golden Visa, and you need to qualify
                through just one of them. Property investors can qualify by purchasing
                property worth AED 2 million or more. Senior professionals and executives
                earning a monthly salary of AED 30,000 or above can apply directly.
                Entrepreneurs and business owners can qualify based on their business
                assets and financial performance. PhD holders and exceptional university
                students are automatically eligible. The visa is also available to
                specialized talent in various fields — artists, athletes, researchers, and
                other categories defined by the authorities.
              </p>
              <p>
                What makes the Golden Visa particularly attractive is that it requires no
                employer sponsorship. You have complete freedom to work for whoever you
                want, change careers, or even remain unemployed without visa implications.
                The cost is AED 3,800 to AED 7,500 (approximately £800 to £1,600) depending
                on the specific category. For those who qualify, it's widely considered the
                most prestigious and flexible long-term residency option available in the
                Gulf region.
              </p>
            </div>
          </div>
        </section>

        {/* Freelancer/Creative Visa */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#C9A84C" }}>
              The Freelancer & Creative Visa
            </h2>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold" style={{ color: "#C9A84C" }}>
                Best for:
              </span>{" "}
              Remote workers, content creators, and self-employed professionals
            </p>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                If you work for yourself or operate as a remote worker for international
                clients, the Freelancer Visa is specifically designed for you. This visa
                allows you to legally work as a self-employed professional without needing
                an employer sponsor, while also giving you the flexibility to operate your
                own business in Dubai.
              </p>
              <p>
                To obtain a Freelancer Visa, you must register for a freelance permit
                through one of Dubai's free zones. The most popular among creatives and
                digital professionals are TECOM (Technology and Media Free Zone), Dubai
                Media City, and twofour54 (Abu Dhabi's media free zone). Each free zone
                specializes in different sectors — TECOM covers IT, media, and tech;
                Dubai Media City specializes in media, entertainment, and creative
                industries; twofour54 focuses on film, television, and digital media
                production.
              </p>
              <p>
                The cost of the Freelancer Visa varies depending on which free zone you
                choose and which service packages you select, typically ranging from AED
                7,000 to AED 15,000 (approximately £1,500 to £3,200) per year. This covers
                your visa sponsorship, business licence, and access to the free zone's
                facilities and networks. It's a straightforward pathway for digital
                nomads, consultants, designers, writers, and other creative professionals
                who want to formalize their work in Dubai while retaining flexibility.
              </p>
            </div>
          </div>
        </section>

        {/* Retirement Visa */}
        <section className="px-4 py-12 md:px-8 bg-gray-900 bg-opacity-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#C9A84C" }}>
              The Retirement Visa
            </h2>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold" style={{ color: "#C9A84C" }}>
                Best for:
              </span>{" "}
              UK expats aged 55 and above
            </p>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                The UAE's Retirement Visa is an attractive option for UK expats who have
                decided to retire in Dubai or the wider UAE. Available to individuals aged
                55 and above, it provides a pathway to long-term residency without the
                need for employment or a business venture, though there are financial
                requirements you must meet.
              </p>
              <p>
                To qualify for a Retirement Visa, you must meet at least one of the
                following three criteria. The first is a monthly income: you must have a
                confirmed monthly income of AED 20,000 or above. The second is liquid
                savings: you must demonstrate savings of at least AED 1 million in a UAE
                bank account. The third is property ownership: you must own UAE property
                worth AED 2 million or above. Many retirees opt for the property route,
                particularly those who are planning to settle in Dubai long-term anyway.
              </p>
              <p>
                The Retirement Visa is issued for a five-year period and is renewable. It
                provides peace of mind for retirees who want to enjoy their later years in
                Dubai's year-round sunshine, with world-class healthcare facilities and a
                thriving expat community. The cost is similar to the Green Visa at
                approximately AED 3,500 to AED 5,000 (£750 to £1,100).
              </p>
            </div>
          </div>
        </section>

        {/* Family Sponsorship */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#C9A84C" }}>
              Family Sponsorship
            </h2>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Once you've secured your own residency in Dubai, you may want to bring
                your family with you. The UAE allows primary visa sponsors to bring their
                spouse, unmarried children, and in some cases, parents, under family
                sponsorship visas. Understanding the eligibility criteria and process is
                crucial if you're planning to reunite with loved ones.
              </p>
              <p>
                To sponsor your spouse, you must have a confirmed monthly salary of AED
                4,000 or above. Your spouse's visa is valid for the same period as your
                own and is renewed together with yours. The process requires documentation
                of your marriage, your spouse's passport, medical fitness certificate, and
                proof of your salary and employment.
              </p>
              <p>
                Children can be sponsored if they are under 18 years of age, or up to the
                age of 25 if they are enrolled full-time in recognized education
                institutions. You'll need to provide birth certificates, school
                enrollment documentation, and medical records. The salary requirements
                increase with each dependent: AED 4,000 for one dependent, with additional
                increments for each family member added.
              </p>
              <p>
                Sponsoring parents is also possible, though with stricter requirements.
                You must have a much higher salary (often AED 10,000 or above), and there
                are age and financial independence criteria for the parents themselves.
                Sponsoring parents is becoming increasingly common as expats decide to
                retire in the UAE alongside their adult children.
              </p>
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="px-4 py-12 md:px-8 bg-gray-900 bg-opacity-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#C9A84C" }}>
              The Visa Process: Step by Step
            </h2>
            <div className="space-y-6 text-gray-200 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#C9A84C" }}>
                  1. Entry Permit Application
                </h3>
                <p>
                  Your sponsor (employer or the free zone authority) submits your visa
                  application to the UAE authorities. You'll need to provide your passport,
                  degree certificate, and other required documents.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#C9A84C" }}>
                  2. Entry Permit Approval
                </h3>
                <p>
                  Once approved, you'll receive an entry permit number. This allows you to
                  travel to the UAE and complete the next steps.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#C9A84C" }}>
                  3. Medical Examination
                </h3>
                <p>
                  Upon arrival in Dubai, you must undergo a medical fitness examination at
                  an approved clinic or hospital. This is a standard health check that all
                  new residents must complete.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#C9A84C" }}>
                  4. Emirates ID Application
                </h3>
                <p>
                  After passing the medical examination, you apply for your Emirates ID,
                  the UAE's national identification card. This typically takes a few days to
                  a week.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#C9A84C" }}>
                  5. Residence Visa Stamping
                </h3>
                <p>
                  Once your Emirates ID is ready, your residence visa is stamped into your
                  passport. You're now officially a UAE resident.
                </p>
              </div>
              <p className="mt-6 pt-6 border-t" style={{ borderColor: "#C9A84C" }}>
                The entire process from entry permit approval to residence visa stamping
                typically takes four to eight weeks, depending on how quickly documents are
                processed and medical examinations are scheduled. In practice, the most
                common delay occurs at the medical examination stage, which can take longer
                during peak seasons.
              </p>
            </div>
          </div>
        </section>

        {/* Documents Checklist */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#C9A84C" }}>
              Essential Documents Checklist
            </h2>
            <div className="space-y-3 text-gray-200">
              <div className="flex items-start">
                <span
                  className="mr-3 mt-1 font-bold"
                  style={{ color: "#C9A84C" }}
                >
                  ✓
                </span>
                <span>
                  <span className="font-semibold">Valid Passport:</span> Must be valid
                  for at least six months beyond your intended stay
                </span>
              </div>
              <div className="flex items-start">
                <span
                  className="mr-3 mt-1 font-bold"
                  style={{ color: "#C9A84C" }}
                >
                  ✓
                </span>
                <span>
                  <span className="font-semibold">Passport Photographs:</span> Typically
                  4–6 color photographs (specification varies by authorities)
                </span>
              </div>
              <div className="flex items-start">
                <span
                  className="mr-3 mt-1 font-bold"
                  style={{ color: "#C9A84C" }}
                >
                  ✓
                </span>
                <span>
                  <span className="font-semibold">Degree Certificate:</span> Original or
                  attested copy from a recognized university
                </span>
              </div>
              <div className="flex items-start">
                <span
                  className="mr-3 mt-1 font-bold"
                  style={{ color: "#C9A84C" }}
                >
                  ✓
                </span>
                <span>
                  <span className="font-semibold">Bank Statements:</span> Proof of
                  financial capacity and funds for initial settlement
                </span>
              </div>
              <div className="flex items-start">
                <span
                  className="mr-3 mt-1 font-bold"
                  style={{ color: "#C9A84C" }}
                >
                  ✓
                </span>
                <span>
                  <span className="font-semibold">Health Insurance:</span> Proof of
                  valid health insurance coverage accepted in the UAE
                </span>
              </div>
              <div className="flex items-start">
                <span
                  className="mr-3 mt-1 font-bold"
                  style={{ color: "#C9A84C" }}
                >
                  ✓
                </span>
                <span>
                  <span className="font-semibold">Job Offer Letter:</span> For employment
                  visa applicants, an official offer letter on company letterhead
                </span>
              </div>
              <div className="flex items-start">
                <span
                  className="mr-3 mt-1 font-bold"
                  style={{ color: "#C9A84C" }}
                >
                  ✓
                </span>
                <span>
                  <span className="font-semibold">Business Documents:</span> For
                  freelancers and self-employed, business licence and proof of clients
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Costs Overview */}
        <section className="px-4 py-12 md:px-8 bg-gray-900 bg-opacity-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#C9A84C" }}>
              Visa Costs at a Glance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-200 text-sm md:text-base">
                <thead>
                  <tr style={{ borderColor: "#C9A84C" }} className="border-b-2">
                    <th className="text-left py-3 px-4 font-semibold" style={{ color: "#C9A84C" }}>
                      Visa Type
                    </th>
                    <th className="text-left py-3 px-4 font-semibold" style={{ color: "#C9A84C" }}>
                      Duration
                    </th>
                    <th className="text-left py-3 px-4 font-semibold" style={{ color: "#C9A84C" }}>
                      Cost (GBP)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{ borderColor: "#C9A84C" }}>
                    <td className="py-3 px-4">Employment Visa</td>
                    <td className="py-3 px-4">2–3 years</td>
                    <td className="py-3 px-4">Usually free to employee</td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: "#C9A84C" }}>
                    <td className="py-3 px-4">Green Visa</td>
                    <td className="py-3 px-4">5 years</td>
                    <td className="py-3 px-4">£750–£1,100</td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: "#C9A84C" }}>
                    <td className="py-3 px-4">Golden Visa</td>
                    <td className="py-3 px-4">10 years (renewable)</td>
                    <td className="py-3 px-4">£800–£1,600</td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: "#C9A84C" }}>
                    <td className="py-3 px-4">Freelancer Visa</td>
                    <td className="py-3 px-4">1 year</td>
                    <td className="py-3 px-4">£1,500–£3,200</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Retirement Visa</td>
                    <td className="py-3 px-4">5 years (renewable)</td>
                    <td className="py-3 px-4">£750–£1,100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              * Costs are approximate and based on exchange rates at the time of publication.
              Actual fees in AED may vary by sponsor authority and include service charges.
            </p>
          </div>
        </section>

        {/* Patrick's Tip */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div
              className="p-6 md:p-8 rounded-lg border-l-4"
              style={{ backgroundColor: "#0A1628", borderColor: "#C9A84C" }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: "#C9A84C" }}>
                Patrick's Tip
              </h3>
              <p className="text-gray-200 leading-relaxed">
                The most common mistake UK expats make is waiting until they arrive to sort
                their visa documents. Get your degree attested and your medical paperwork in
                order before you board the plane. This can save you weeks of delays and
                frustration once you're in Dubai. Start the attestation process at least two
                months before your planned departure date, and keep all original documents
                safe until your residence visa is fully stamped.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 py-12 md:px-8 bg-gray-900 bg-opacity-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">
              Next Steps
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/visa-checker"
                className="block p-6 rounded-lg text-center font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
              >
                Check Which Visa You Qualify For
              </Link>
              <Link
                href="/guides/housing"
                className="block p-6 rounded-lg text-center font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: "rgba(201, 168, 76, 0.1)", color: "#C9A84C", border: "2px solid #C9A84C" }}
              >
                Read Our Housing Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8" style={{ color: "#C9A84C" }}>
              Related Guides
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/guides/housing"
                className="p-6 rounded-lg hover:bg-gray-800 transition"
                style={{ backgroundColor: "rgba(201, 168, 76, 0.05)", borderLeft: "4px solid #C9A84C" }}
              >
                <h4 className="font-bold mb-2" style={{ color: "#C9A84C" }}>
                  Finding a Home in Dubai
                </h4>
                <p className="text-gray-400 text-sm">
                  Navigate the rental and property market as a UK expat
                </p>
              </Link>
              <Link
                href="/guides/banking"
                className="p-6 rounded-lg hover:bg-gray-800 transition"
                style={{ backgroundColor: "rgba(201, 168, 76, 0.05)", borderLeft: "4px solid #C9A84C" }}
              >
                <h4 className="font-bold mb-2" style={{ color: "#C9A84C" }}>
                  Banking & Finance
                </h4>
                <p className="text-gray-400 text-sm">
                  Open a bank account and manage your money in the UAE
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer style={{ backgroundColor: "#0A1628", borderTop: "1px solid rgba(201,168,76,0.3)" }}>
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-8 flex flex-col items-center justify-between gap-2 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Dubai Expat. All rights reserved.</p>
          <Link href="/" className="font-medium text-[#C9A84C] hover:underline">
            ← Back to home
          </Link>
        </div>
      </footer>
    </>
  );
}
