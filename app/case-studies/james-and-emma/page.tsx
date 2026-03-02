import Header from "@/components/Header";
import Link from "next/link";

export default function JamesAndEmmaCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-12" aria-label="Breadcrumb">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/case-studies" className="text-gray-600 hover:text-gray-900 transition-colors">
            Case Studies
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">James & Emma</span>
        </nav>

        {/* Hero Section */}
        <section className="mb-16 border-b-2" style={{ borderColor: "#C9A84C" }}>
          <div className="pb-12">
            {/* Family portrait */}
            <div className="w-full rounded-2xl overflow-hidden border-2 shadow-md mb-8" style={{ borderColor: "#C9A84C" }}>
              <img
                src="/james-and-emma.jpg"
                alt="James, Emma, and their two children"
                className="w-full object-cover"
                style={{ maxHeight: "280px", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="text-5xl font-bold" style={{ color: "#0A1628" }}>
                James & Emma
              </h1>
              <span className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: "#0A1628" }}>
                Family Relocation
              </span>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              A Surrey family who relocated to Dubai for a life-changing opportunity
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Visa Type</p>
                <p className="text-lg font-semibold" style={{ color: "#0A1628" }}>
                  Employment & Family Sponsorship
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Duration</p>
                <p className="text-lg font-semibold" style={{ color: "#0A1628" }}>
                  3 years (renewable)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Their Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#0A1628" }}>
            Their Story
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              James had spent fifteen years working his way up the finance sector in the UK, eventually becoming a finance director at a well-established company in Surrey. Emma had stepped back from full-time teaching to raise their two children, though she still picked up part-time work when she could. The family was settled, their children were thriving in school—their son was ten and their daughter was seven when everything changed. In early 2021, James was headhunted by a major Dubai-based organization. The offer came with a 40% salary uplift and the profound financial advantage of paying zero income tax in the UAE. It was the kind of opportunity that doesn't come around often, and after conversations with Emma, they decided to take it.
            </p>
            
            <p>
              What made the transition possible was that James's new employer handled the employment visa process from their end. Rather than navigating the bureaucracy themselves, the company's HR team managed most of the documentation and logistics. Once James's visa was approved, he was able to sponsor Emma and both children on a family sponsorship visa. The entire process took eight weeks—remarkably efficient for such a significant move. In parallel, they had to solve the school question, which proved to be their most complex challenge. They began researching Dubai schools four months before their intended move date and applied to GEMS, a well-regarded British curriculum school. They were initially waitlisted—a nerve-wracking position—but were eventually confirmed with weeks to spare before their planned arrival.
            </p>
            
            <p>
              The move itself happened smoothly, but the settling-in period presented unexpected challenges. Emma found herself unable to work for the first six months while the authorities processed her own work permit, which meant the household lost a valuable second income during a time when expenses were high. Both children took roughly a term to settle into their new school and environment, which is fairly normal for international moves but still difficult to navigate as a parent. And then there was the summer heat. June through September in Dubai is a shock to the system—the temperatures are genuinely extreme, and the reality is that life largely moves indoors to air-conditioned homes, offices, and malls. For a family accustomed to English gardens and outdoor play, this adjustment required a mental shift.
            </p>
            
            <p>
              Fast forward to today, and the family wouldn't look back. Their quality of life has transformed in ways that justify the initial disruption. The children have access to incredible outdoor activities and facilities—multiple swimming pools, sports clubs, and a calendar of family-friendly events. Beyond the practical upgrades, the financial equation is compelling: James's salary increase combined with zero income tax means their household financial position improved dramatically. Emma, no longer constrained by UK school hours or the pressures of full-time UK life, secured a position teaching at a local school, choosing her hours and building a life that genuinely suits her. The community of British expat families in Dubai is substantial and welcoming, which meant the children quickly found friendship groups and the parents found a supportive social network. What initially felt like a daunting move has become one of the best decisions they've made as a family.
            </p>
          </div>
        </section>

        {/* Key Facts Box */}
        <section className="mb-16 p-8 rounded-lg border-2" style={{ borderColor: "#C9A84C", backgroundColor: "#f9f7f2" }}>
          <h3 className="text-xl font-bold mb-6" style={{ color: "#0A1628" }}>
            Quick Facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">From</p>
              <p className="text-base font-semibold" style={{ color: "#0A1628" }}>
                Surrey, UK
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Year of Move</p>
              <p className="text-base font-semibold" style={{ color: "#0A1628" }}>
                2021
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Children's Ages</p>
              <p className="text-base font-semibold" style={{ color: "#0A1628" }}>
                7 and 10 at time of move
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Neighbourhood</p>
              <p className="text-base font-semibold" style={{ color: "#0A1628" }}>
                Arabian Ranches
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Visa Timeline</p>
              <p className="text-base font-semibold" style={{ color: "#0A1628" }}>
                8 weeks
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">School Type</p>
              <p className="text-base font-semibold" style={{ color: "#0A1628" }}>
                British Curriculum (GEMS)
              </p>
            </div>
          </div>
        </section>

        {/* Top Tips */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8" style={{ color: "#0A1628" }}>
            James & Emma's Top Tips
          </h3>
          
          <div className="space-y-6">
            <blockquote className="border-l-4 pl-6 py-4" style={{ borderColor: "#C9A84C" }}>
              <p className="text-lg italic text-gray-800 mb-3">
                "Apply for schools way earlier than you think. We nearly missed out on our first choice because we underestimated how competitive it was. Start the process immediately after you have a firm job offer."
              </p>
              <p className="text-sm text-gray-600">
                On school applications
              </p>
            </blockquote>

            <blockquote className="border-l-4 pl-6 py-4" style={{ borderColor: "#C9A84C" }}>
              <p className="text-lg italic text-gray-800 mb-3">
                "Budget for the villa—yes, it sounds extravagant when you're looking at your first Dubai rental, but the space truly makes a difference when you're raising children. Indoor play becomes essential during the hot months, and a villa gives your family room to breathe."
              </p>
              <p className="text-sm text-gray-600">
                On accommodation
              </p>
            </blockquote>

            <blockquote className="border-l-4 pl-6 py-4" style={{ borderColor: "#C9A84C" }}>
              <p className="text-lg italic text-gray-800 mb-3">
                "Accept that your spouse might not work immediately, and build that into your financial planning. It's temporary and eventually sorts itself out, but the first six months can be tight if you're not prepared for a single income."
              </p>
              <p className="text-sm text-gray-600">
                On family finances
              </p>
            </blockquote>
          </div>
        </section>

        {/* Patrick's Note */}
        <section className="mb-16 p-8 rounded-lg border-2" style={{ borderColor: "#0A1628", backgroundColor: "#f0ede6" }}>
          <h3 className="text-lg font-bold mb-4" style={{ color: "#0A1628" }}>
            Patrick's Note
          </h3>
          <p className="text-gray-800 leading-relaxed">
            Family relocations are complex—there are more stakeholders, more logistics, and higher emotional stakes. But they're also among the most rewarding moves we see. The key is sequencing: secure the job offer first, then arrange the visa sponsorship, and only then commit to school applications and house hunting. James and Emma's experience is textbook in this respect. Their employer handled the visa work, allowing them to focus on schools and housing. If you're considering a family move to Dubai, this order of operations will save you considerable stress and money.
          </p>
          <p className="text-sm text-gray-600 mt-4" style={{ color: "#C9A84C" }}>
            — Patrick, Founding Editor
          </p>
        </section>

        {/* CTA Section */}
        <section className="mb-16 py-12 border-t-2 border-b-2" style={{ borderColor: "#C9A84C" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/visa-checker"
              className="block p-6 rounded-lg text-center font-semibold transition-all hover:shadow-lg"
              style={{
                backgroundColor: "#0A1628",
                color: "#C9A84C",
              }}
            >
              Find Your Own Visa Route
            </Link>
            <Link
              href="/case-studies/marcus"
              className="block p-6 rounded-lg text-center font-semibold transition-all hover:shadow-lg"
              style={{
                borderColor: "#0A1628",
                color: "#0A1628",
                borderWidth: "2px",
              }}
            >
              Read Another Story
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t-2 text-gray-600">
          <p className="mb-4">© 2026 Dubai Expat. All rights reserved.</p>
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Back to home
          </Link>
        </footer>
      </main>
    </div>
  );
}
