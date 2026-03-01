import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Schools in Dubai: A Guide for UK Expat Families (2026)",
  description: "The best British curriculum schools in Dubai, KHDA ratings explained, school fees, how to apply, waiting lists and what to expect as a UK expat family.",
  keywords: "Dubai schools, British curriculum, KHDA ratings, expat families, school fees",
  openGraph: {
    title: "Schools in Dubai: A Guide for UK Expat Families (2026)",
    description: "The best British curriculum schools in Dubai, KHDA ratings explained, school fees, how to apply, waiting lists and what to expect as a UK expat family.",
  },
};

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#0A1628" }}>
          Schools in Dubai: A Guide for UK Expat Families (2026)
        </h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          
          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dubai has over 200 schools serving an international community. For UK families the British curriculum is the natural choice, and the quality of provision is genuinely excellent. But fees are high, places fill quickly and the application process requires planning well in advance.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              How Dubai Schools Work
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All private schools are regulated by KHDA (Knowledge and Human Development Authority). KHDA inspects schools every 1-2 years and publishes ratings: Outstanding, Very Good, Good, Acceptable, Weak, Very Weak. Always check a school's KHDA rating before applying. This rating system is your best guide to school quality and educational standards. It's independent, transparent, and regularly updated to reflect actual performance.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              British Curriculum Schools
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dubai's British curriculum schools are operated by several large education groups. GEMS Education is the largest operator in Dubai and runs Wellington Academy (rated Outstanding), Jumeirah Primary, GEMS Modern Academy and many others, with fees ranging from AED 35,000 to AED 90,000 per year. Nord Anglia Education operates the premium Nord Anglia International School Dubai, which holds Very Good to Outstanding ratings and is particularly strong in arts and sport. Repton School Dubai is a branch of the famous UK independent school and is very strong academically, though fees are among the highest in Dubai.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For families seeking well-established institutions, Kings' School Dubai is popular with British families in Umm Suqeim and maintains a good KHDA rating with particular strength in primary education. Jumeirah English Speaking School (JESS) is long-established, popular, and often waitlisted, with campuses in both Arabian Ranches and Jumeirah. Brighton College Dubai is a newer entry that has already been rated Outstanding despite being more recently established in Dubai, though it commands high fees reflecting its reputation.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              School Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              School fees in Dubai range from AED 30,000 to AED 90,000 per year, which translates to approximately £6,500 to £19,500. This is a significant expense to budget for. Most employers in Dubai do not include school fees in relocation packages anymore, so you should budget for this cost yourself. Some employers do contribute partially to school fees, so it's worth checking what your specific employer offers, but you cannot rely on this being provided.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              How to Apply
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most schools open applications 6 to 12 months in advance of the school year. The application process typically follows this sequence: you complete an online application form, submit previous school reports and references, your child may sit an assessment (particularly for older children), and some schools conduct interviews. Once you receive an offer and accept it, you'll need to pay a registration fee, typically between AED 1,000 and AED 3,000, which is usually non-refundable. Starting this process early gives you the best chance of securing a place at your preferred school.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              Waiting Lists
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Popular schools have long waiting lists, especially at primary level. The sensible approach is to apply to three or four schools simultaneously to increase your chances of securing a place. Being on a waiting list in January for a September start is normal and doesn't mean you won't ultimately get a place. Places do become available as families' circumstances change, and being waitlisted doesn't close any doors. Many families successfully secure their first-choice school from a waiting list position.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              Mid-Year Entry
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you're moving to Dubai mid-year, most schools do accept mid-year entry if places exist in your child's year group. Mid-year entry is less competitive than September entry because there's less available capacity, but your choices will be more limited. The process is otherwise the same, and if you're moving at an unusual time of year, contacting schools directly about availability is the best approach.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              Document Attestation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              UK school reports and certificates need to be attested (officially certified) for transfer to Dubai schools. Your UK school can provide official transcripts for this purpose. For GCSE and A-level certificates, you should contact the exam boards (Edexcel, AQA, OCR, etc.) directly to request officially attested copies. Don't rely on photocopies or unverified documents; Dubai schools require attestation for compliance with educational regulations.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              Early Years and Nurseries
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dubai has excellent nurseries regulated by KHDA, just as schools are. Nursery fees typically range from AED 20,000 to AED 50,000 per year. British-style nurseries with strong reputations include Blossom Nursery, Raffles Nursery, and Jumeirah International Nursery. These offer early years education in a familiar British style and serve as good stepping stones into primary education.
            </p>
          </section>

          <section className="mb-12">
            <h2 style={{ color: "#0A1628" }} className="text-3xl font-bold mb-4">
              University in Dubai
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A growing number of UK universities have established branches in Dubai, which is worth considering if you're planning a longer stay in the UAE. These include Heriot-Watt University Dubai, University of Birmingham Dubai, and Middlesex University Dubai. If your children plan to stay through to university age, having a familiar UK institution locally can be valuable, and their qualifications are recognised globally.
            </p>
          </section>

          <section className="mb-12">
            <div className="p-6 rounded-lg" style={{ backgroundColor: "#0A1628", color: "#C9A84C" }}>
              <h3 className="text-2xl font-bold mb-3">Patrick's Tip</h3>
              <p className="leading-relaxed">
                "Apply for schools the moment you have a confirmed move date—even if that's a year away. I've spoken to families who lost their preferred school because they applied three months before moving. In Dubai, that's too late."
              </p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4" style={{ color: "#0A1628" }}>
              Related Guides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/visa-residency" style={{ color: "#C9A84C" }} className="hover:underline font-semibold">
                  Visa & Residency
                </Link>
              </li>
              <li>
                <Link href="/guides/housing" style={{ color: "#C9A84C" }} className="hover:underline font-semibold">
                  Housing & Accommodation
                </Link>
              </li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}
