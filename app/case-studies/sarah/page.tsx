import Header from "@/components/Header";
import Link from "next/link";

export default function SarahCaseStudy() {
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
          <span className="text-gray-900 font-medium">Sarah</span>
        </nav>

        {/* Hero Section */}
        <section className="mb-16 border-b-2" style={{ borderColor: "#C9A84C" }}>
          <div className="pb-12">
            <div className="flex flex-col sm:flex-row gap-8 items-start mb-6">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 shadow-md" style={{ borderColor: "#C9A84C" }}>
                  <img src="/sarah.jpg" alt="Sarah" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h1 className="text-5xl font-bold" style={{ color: "#0A1628" }}>
                    Sarah Chen
                  </h1>
                  <span className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: "#0A1628" }}>
                    Digital Nomad
                  </span>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  London-based graphic designer who traded the grey skies for the Arabian sun
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Visa Type</p>
                    <p className="text-lg font-semibold" style={{ color: "#0A1628" }}>
                      UAE Freelancer Visa
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Duration</p>
                    <p className="text-lg font-semibold" style={{ color: "#0A1628" }}>
                      2 years (renewable)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Her Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#0A1628" }}>
            Her Story
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Sarah had spent a decade building her graphic design career in London, working her way up through various UK creative agencies. While she loved the energy of the capital and the opportunities it provided, the combination of rising costs, unpredictable weather, and the relentless pace began to wear on her. At 31, single and increasingly curious about life beyond the grey skies, she started to wonder if there might be somewhere else that offered both professional growth and a better quality of life. In 2022, she decided to take the leap and explore what Dubai could offer.
            </p>
            
            <p>
              The process of obtaining her UAE Freelancer Visa was remarkably straightforward compared to what she'd anticipated. She applied through TECOM, a free zone designed specifically for creative professionals, and the entire approval took just three weeks. The cost came to approximately AED 7,500—roughly £1,600—and the requirements were reasonable: she needed to demonstrate a portfolio of work and provide bank statements showing financial stability. This clarity and speed of process made it easy to commit to the move with confidence.
            </p>
            
            <p>
              Once Sarah touched down in Dubai, she quickly learned that the Emirates ID was the key to everything. Before she could open a bank account, sign a lease, or truly settle into her new life, she needed this document. The process took six weeks, which felt lengthy at the time, but she came to understand it was a necessary step that affected almost every aspect of building a life in the UAE. While waiting for her Emirates ID and bank account to sort themselves out, she navigated the challenge of finding accommodation—temporary housing while flat-hunting proved more difficult than expected, and she missed the social support network she'd had back home in Hackney. But these hurdles, while real, proved manageable with patience and the help of the growing community of other digital nomads she was meeting.
            </p>
            
            <p>
              Three years on, Sarah's decision has paid dividends in ways she didn't entirely anticipate. By paying zero income tax and living more frugally than she had in London, she's been saving roughly 40% of her income—a dramatic shift from her financial life in the UK. The year-round warm weather, which she initially thought might be a novelty, has genuinely transformed how she lives: she's more active, spends more time outdoors, and feels healthier. Perhaps most rewarding has been access to Dubai's vibrant and increasingly sophisticated creative community. Her client base has expanded internationally, and she's found herself collaborating with designers and brands from across the region and beyond. The professional isolation she sometimes felt in London has given way to a thriving network.
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
                London, UK (Hackney)
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Age at Move</p>
              <p className="text-base font-semibold" style={{ color: "#0A1628" }}>
                31
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Neighbourhood</p>
              <p className="text-base font-semibold" style={{ color: "#0A1628" }}>
                Jumeirah Village Circle (JVC)
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Visa Cost</p>
              <p className="text-base font-semibold" style={{ color: "#0A1628" }}>
                AED 7,500 (approx. £1,600)
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Visa Timeline</p>
              <p className="text-base font-semibold" style={{ color: "#0A1628" }}>
                3 weeks
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Profession</p>
              <p className="text-base font-semibold" style={{ color: "#0A1628" }}>
                Graphic Designer
              </p>
            </div>
          </div>
        </section>

        {/* Top Tips */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8" style={{ color: "#0A1628" }}>
            Sarah's Top Tips
          </h3>
          
          <div className="space-y-6">
            <blockquote className="border-l-4 pl-6 py-4" style={{ borderColor: "#C9A84C" }}>
              <p className="text-lg italic text-gray-800 mb-3">
                "Sort your Emirates ID the day you land—everything else depends on it. Seriously, make this your first priority."
              </p>
              <p className="text-sm text-gray-600">
                On essential documentation
              </p>
            </blockquote>

            <blockquote className="border-l-4 pl-6 py-4" style={{ borderColor: "#C9A84C" }}>
              <p className="text-lg italic text-gray-800 mb-3">
                "Don't panic about the bank account taking time. It feels frustrating when you're living out of a suitcase, but it just takes patience. Use the time to explore the city and meet people."
              </p>
              <p className="text-sm text-gray-600">
                On managing the settling-in period
              </p>
            </blockquote>

            <blockquote className="border-l-4 pl-6 py-4" style={{ borderColor: "#C9A84C" }}>
              <p className="text-lg italic text-gray-800 mb-3">
                "Join the creative community early. Whether it's co-working spaces, design meetups, or online groups—these connections have been invaluable for my career and my mental health."
              </p>
              <p className="text-sm text-gray-600">
                On building community
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
            Sarah's route is increasingly popular among UK creatives, and for good reason. The UAE Freelancer Visa has improved significantly since 2021 and is now one of the fastest to obtain. It's particularly attractive to those with established client bases, as it allows you to maintain international revenue streams while enjoying the financial and lifestyle benefits of Dubai. If you're a freelancer or independent professional, this remains one of your clearest paths to residency.
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
              href="/case-studies/james-and-emma"
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
          <p className="mb-4">© 2025 Dubai Expat. All rights reserved.</p>
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Back to home
          </Link>
        </footer>
      </main>
    </div>
  );
}
