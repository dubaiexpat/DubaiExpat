import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Transfer Money UK to Dubai — Wise, Revolut & Bank Guide 2026",
  description:
    "How British expats actually move money from the UK to Dubai in 2026. Wise vs Revolut vs banks — real fees, real timelines, real worked examples.",
};

export default function MovingMoneyUKToDubai() {
  return (
    <>
      <div className="bg-white px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Header />
          <div className="flex items-center gap-2 py-3 text-sm text-slate-500">
            <Link href="/" className="flex items-center gap-1 hover:text-[#0A1628]">
              <span>&larr;</span><span>Home</span>
            </Link>
            <span>/</span>
            <span className="font-medium text-[#0A1628]">Articles</span>
            <span>/</span>
            <span className="font-medium text-[#0A1628]">Moving Money UK to Dubai</span>
          </div>
        </div>
      </div>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-8 mt-6 md:mt-8 mb-12">
          <img
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-4 sm:px-8 py-14 sm:py-20">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                Playbook
              </div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
                Moving Money from the UK to Dubai: The Full Wise &amp; Revolut Playbook for 2026
              </h1>
              <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
                How British expats actually move money from the UK to Dubai in 2026. Wise vs Revolut vs banks &mdash; real fees, real timelines, real worked examples.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="px-4 py-12 md:px-8 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                When I first moved to Dubai, my UK bank charged me &pound;40 per international transfer plus a 3% markup on the exchange rate. I didn&rsquo;t even know the markup existed until I compared the rate they gave me against the mid-market rate on Google. On a &pound;10,000 transfer, that markup alone cost me around &pound;300 &mdash; before the fixed fee, and before Emirates NBD took its own cut on the receiving end.
              </p>
              <p>
                That was ten years ago. The options for how to transfer money from the UK to Dubai are considerably better now, but the traps are the same. Banks still apply exchange rate markups that most people never notice. SWIFT fees still stack. Your UAE bank still charges you to receive the wire. If you&rsquo;re moving money regularly &mdash; salary, savings, property deposits &mdash; the difference between doing it wrong and doing it right can easily run into thousands of pounds per year.
              </p>
              <p>
                This guide covers the full picture: Wise, Revolut, traditional UK banks, the UAE receiving side, tax reporting, and a practical playbook for the most common transfer scenarios in 2026.
              </p>
            </div>
          </div>
        </section>

        {/* Why It Costs More */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Why Transferring Money from the UK to Dubai Costs More Than It Should
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The cost of sending money abroad isn&rsquo;t one number &mdash; it&rsquo;s three, and banks rely on most people only noticing one of them.
              </p>
              <p>
                <strong className="text-[#0A1628]">Layer 1: The exchange rate markup.</strong> The mid-market rate is what you see on Google or XE.com. As of April 2026, 1 GBP buys approximately 4.931 AED at the mid-market rate. Your UK bank will quote you something lower &mdash; typically 4.75&ndash;4.80 AED per pound, which represents a markup of around 2.5&ndash;4%. On a &pound;10,000 transfer, that&rsquo;s &pound;250&ndash;&pound;400 gone before anything else happens.
              </p>
              <p>
                <strong className="text-[#0A1628]">Layer 2: The transfer fee.</strong> Most UK banks charge a flat fee for international SWIFT transfers: &pound;4&ndash;9 online, up to &pound;25 via branch. This is the number people notice because it&rsquo;s displayed clearly. It&rsquo;s usually the smallest of the three costs.
              </p>
              <p>
                <strong className="text-[#0A1628]">Layer 3: The receiving bank charge.</strong> When a SWIFT transfer arrives at your UAE bank account, Emirates NBD or FAB charges an incoming wire fee &mdash; typically AED 26&ndash;75 (around &pound;5&ndash;15). This is invisible to UK senders until the money arrives short.
              </p>
              <p>
                Wise eliminates the first layer entirely by using the mid-market rate. That&rsquo;s why it dominates this comparison.
              </p>
            </div>
          </div>
        </section>

        {/* Wise */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Wise &mdash; The Benchmark for GBP to AED Transfers
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <a href="WISE_LINK_PLACEHOLDER" target="_blank" rel="noopener noreferrer sponsored" className="underline hover:text-[#C9A84C] font-semibold">Wise</a> has become the default tool for most British expats moving money to Dubai, and the reason is simple: it uses the mid-market rate with no markup, then charges a transparent fee on top.
              </p>
              <p>
                For GBP to AED, the Wise fee is <strong className="text-[#0A1628]">0.41% plus a fixed &pound;0.63</strong> when paying by bank transfer &mdash; the cheapest method. Debit card costs slightly more; credit card is most expensive. The app shows you the exact cost before you confirm.
              </p>

              {/* Fee comparison table */}
              <div className="overflow-x-auto mt-6 mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#C9A84C]">
                      <th className="py-3 px-4 text-left font-semibold text-[#0A1628]">Transfer amount</th>
                      <th className="py-3 px-4 text-left font-semibold text-[#0A1628]">Wise fee (approx.)</th>
                      <th className="py-3 px-4 text-left font-semibold text-[#0A1628]">What recipient gets (at 4.931 AED/GBP)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">&pound;1,000</td>
                      <td className="py-3 px-4">~&pound;4.73</td>
                      <td className="py-3 px-4">~4,905 AED</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">&pound;5,000</td>
                      <td className="py-3 px-4">~&pound;21.13</td>
                      <td className="py-3 px-4">~24,545 AED</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">&pound;10,000</td>
                      <td className="py-3 px-4">~&pound;41.63</td>
                      <td className="py-3 px-4">~49,100 AED</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">&pound;20,000</td>
                      <td className="py-3 px-4">~&pound;82.63</td>
                      <td className="py-3 px-4">~98,220 AED</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Compare that to a standard UK bank transfer on &pound;10,000: the markup and fees combined typically cost &pound;300&ndash;450. Wise saves most people north of &pound;300 on a transfer that size.
              </p>
              <p>
                <strong className="text-[#0A1628]">Delivery time.</strong> Most GBP&rarr;AED transfers via Wise arrive within 1&ndash;2 business days. Wise uses local payment rails where possible rather than SWIFT, which means the UAE bank&rsquo;s incoming SWIFT fee often doesn&rsquo;t apply.
              </p>
              <p>
                <strong className="text-[#0A1628]">Limits.</strong> For personal UK accounts, Wise can handle large transfers but may request source-of-funds documentation for amounts above roughly &pound;30,000&ndash;50,000. This is standard AML procedure and not a Wise-specific quirk.
              </p>
              <p>
                <strong className="text-[#0A1628]">Wise multi-currency account.</strong> Wise offers a multi-currency account that lets you hold and receive money in multiple currencies. AED isn&rsquo;t currently available to hold directly, but GBP and USD are, which is useful if you&rsquo;re managing money across both countries.
              </p>
              <p>
                For the overwhelming majority of regular salary transfers and mid-sized lump sums, Wise is the right answer. <a href="WISE_LINK_PLACEHOLDER" target="_blank" rel="noopener noreferrer sponsored" className="underline hover:text-[#C9A84C] font-semibold">Open a Wise account</a> before your first transfer.
              </p>
            </div>
          </div>
        </section>

        {/* Revolut */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Revolut &mdash; Competitive, But Read the Small Print for UAE
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Revolut became a fully licensed UK bank in March 2026, meaning deposits up to &pound;120,000 are now FSCS-protected. For UAE-based expats, it&rsquo;s a useful tool &mdash; but with more caveats than Wise.
              </p>
              <p>
                <strong className="text-[#0A1628]">The free (Standard) plan</strong> allows up to &pound;1,000 per month exchanged at the interbank rate with no fee. Above that, a <strong className="text-[#0A1628]">1% fee</strong> applies. For someone moving small amounts monthly, this is hard to beat.
              </p>

              {/* Revolut tiers table */}
              <div className="overflow-x-auto mt-6 mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#C9A84C]">
                      <th className="py-3 px-4 text-left font-semibold text-[#0A1628]">Plan</th>
                      <th className="py-3 px-4 text-left font-semibold text-[#0A1628]">Monthly cost</th>
                      <th className="py-3 px-4 text-left font-semibold text-[#0A1628]">FX allowance</th>
                      <th className="py-3 px-4 text-left font-semibold text-[#0A1628]">Weekend markup</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Standard</td>
                      <td className="py-3 px-4">&pound;0</td>
                      <td className="py-3 px-4">&pound;1,000 free, 1% over</td>
                      <td className="py-3 px-4">+1%</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="py-3 px-4">Plus</td>
                      <td className="py-3 px-4">&pound;3.99</td>
                      <td className="py-3 px-4">&pound;3,000 free, 0.5% over</td>
                      <td className="py-3 px-4">+0.5%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Premium</td>
                      <td className="py-3 px-4">&pound;7.99</td>
                      <td className="py-3 px-4">Unlimited (weekdays)</td>
                      <td className="py-3 px-4">Markup applies</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="py-3 px-4">Metal</td>
                      <td className="py-3 px-4">&pound;14.99</td>
                      <td className="py-3 px-4">Unlimited (weekdays)</td>
                      <td className="py-3 px-4">Markup applies</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Ultra</td>
                      <td className="py-3 px-4">&pound;55</td>
                      <td className="py-3 px-4">Unlimited (weekdays)</td>
                      <td className="py-3 px-4">Markup applies</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong className="text-[#0A1628]">The weekend markup is the main trap.</strong> Revolut adds a markup on FX transactions over weekends (Friday close to Sunday open, approximately) &mdash; 1% for Standard users, 0.5% for Plus, and lower for Premium and above. If you&rsquo;re moving salary on a Friday evening on the free plan, that 1% hits hard. Wise doesn&rsquo;t charge a weekend premium.
              </p>
              <p>
                <strong className="text-[#0A1628]">UAE-specific situation.</strong> The AED is pegged to the US dollar at exactly 3.6725 AED/USD, which means GBP/AED moves purely on GBP/USD fluctuations &mdash; no exotic currency risk. Revolut AE (the UAE entity) launched in limited form and is still rolling out features as of early 2026. UK residents sending to a UAE bank account via standard SWIFT or local routing work fine. Revolut-to-Revolut transfers are always free and instant.
              </p>
              <p>
                <strong className="text-[#0A1628]">Who Revolut works best for:</strong> expats moving less than &pound;1,000/month who want a zero-fee option within the free tier, and people who already use Revolut for day-to-day card spending across Europe.
              </p>
              <p>
                <strong className="text-[#0A1628]">Who should use Wise instead:</strong> anyone moving regular amounts above &pound;1,000/month, anyone who can&rsquo;t guarantee weekday timing, and anyone who wants the simplest fee structure possible.
              </p>
            </div>
          </div>
        </section>

        {/* Traditional Banks */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Traditional Banks &mdash; When HSBC and Barclays Actually Win
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I still use a traditional UK bank for one specific situation: large, documented property-related transfers. Here&rsquo;s why &mdash; and when it doesn&rsquo;t make sense.
              </p>
              <p>
                <strong className="text-[#0A1628]">HSBC UK</strong> charges &pound;4&ndash;9 for online international transfers (less for Premier and HSBC Global Money account holders, more via branch). The FX markup for GBP&rarr;AED is typically 2.5&ndash;3.5% above mid-market. HSBC&rsquo;s Global Money product offers better rates than the standard current account, but it still can&rsquo;t compete with Wise&rsquo;s mid-market rate on cost.
              </p>
              <p>
                <strong className="text-[#0A1628]">Barclays</strong> charges &pound;5 for online international payments, up to &pound;25 for branch-initiated transfers, with an FX markup of roughly 2&ndash;4%. Correspondent bank charges may also be deducted in transit.
              </p>
              <p>
                <strong className="text-[#0A1628]">When traditional banks make sense:</strong>
              </p>
              <p>
                <strong className="text-[#0A1628]">Property deposits.</strong> When you&rsquo;re wiring &pound;50,000+ to a Dubai developer or solicitor, there&rsquo;s value in having a documented bank-to-bank paper trail. The cost difference is real, but so is the peace of mind &mdash; and some property developers prefer bank wires to fintech transfers for compliance reasons.
              </p>
              <p>
                <strong className="text-[#0A1628]">Documentation for visa applications.</strong> Some UAE government processes want evidence of financial transfers from a regulated bank rather than a fintech platform.
              </p>
              <p>
                <strong className="text-[#0A1628]">When they don&rsquo;t:</strong> Every other situation. On a regular monthly salary transfer of &pound;5,000, using a high-street bank instead of Wise typically costs you an extra &pound;150&ndash;250 per transfer. Over twelve months, that&rsquo;s potentially &pound;1,800&ndash;3,000 in avoidable charges.
              </p>
            </div>
          </div>
        </section>

        {/* UAE Receiving End */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              The Receiving End &mdash; What Your UAE Bank Charges
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This is the part most guides skip. Even if you send via Wise and pay minimal fees on the UK side, the UAE bank may charge to receive the funds.
              </p>
              <p>
                <strong className="text-[#0A1628]">Emirates NBD (ENBD):</strong> Incoming international wire fees are approximately <strong className="text-[#0A1628]">AED 25&ndash;50</strong> (around &pound;5&ndash;10) per transfer, though exact amounts depend on the fee instruction and account type. Signature and Private Banking tier accounts often have this fee waived. Check your specific fee schedule with the bank.
              </p>
              <p>
                <strong className="text-[#0A1628]">First Abu Dhabi Bank (FAB):</strong> Incoming wire fees vary by account type &mdash; expect approximately <strong className="text-[#0A1628]">AED 25&ndash;75</strong> (around &pound;5&ndash;15) per transfer. Premier and Elite account holders often pay nothing. As with ENBD, confirm your exact fee with the bank.
              </p>
              <p>
                <strong className="text-[#0A1628]">How to minimise receiving fees:</strong>
              </p>
              <p>
                <strong className="text-[#0A1628]">Use Wise</strong> &mdash; it often uses local payment rails that bypass SWIFT entirely, meaning no UAE incoming wire fee at all. <strong className="text-[#0A1628]">Specify the fee instruction correctly</strong> &mdash; SWIFT transfers have a fee instruction field: OUR (sender pays all fees), SHA (fees split), or BEN (recipient pays all). Most personal transfers default to SHA. Ask your UAE bank what they prefer. <strong className="text-[#0A1628]">Upgrade your account tier</strong> &mdash; if you&rsquo;re moving significant money regularly, it may be worth the ENBD Signature or FAB Premier account just for the fee waivers.
              </p>
            </div>
          </div>
        </section>

        {/* Practical Playbook */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              A Practical Playbook &mdash; Moving &pound;5,000 to &pound;20,000 from the UK to Dubai
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Two scenarios I&rsquo;ve been through personally.</p>

              <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: "#0A1628" }}>
                Scenario 1: Monthly salary transfer (&pound;5,000&ndash;8,000)
              </h3>
              <p>
                This is the most common situation for Dubai expats with UK salary income or rental income they need to move. The right answer here is almost always Wise.
              </p>
              <p>
                Set up your Wise account and link your UK bank account (not a debit card &mdash; bank transfer is cheaper). Initiate the transfer on a weekday morning UK time. Avoid Friday evenings to sidestep any weekend rate effects. Send to your ENBD or FAB IBAN directly. Wise will typically use local rails and the money arrives in 1&ndash;2 business days. Expected total cost on &pound;5,000: <strong className="text-[#0A1628]">~&pound;21</strong>, with recipient getting approximately 24,545 AED.
              </p>
              <p>
                When accessing UK banking portals from Dubai, use a reliable VPN set to a UK server &mdash; some banks flag foreign IP addresses and may temporarily block access. I use <a href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=145336&source=dx&aff_sub=article-moving-money-uk-to-dubai-wise-revolut-guide-body" target="_blank" rel="noopener noreferrer sponsored" className="underline hover:text-[#C9A84C] font-semibold">NordVPN</a> for this. See the <Link href="/guides/internet-and-vpn" className="underline hover:text-[#C9A84C] font-semibold">internet and VPN guide</Link> for setup details.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: "#0A1628" }}>
                Scenario 2: Large one-off transfer (&pound;20,000+)
              </h3>
              <p>
                For property deposits, large savings movements, or purchasing a vehicle in the UAE, the calculus changes slightly.
              </p>
              <p>
                For amounts up to ~&pound;50,000, Wise is still competitive and significantly cheaper than banks. Have documentation ready (source of funds) in case Wise&rsquo;s compliance team asks. For amounts above &pound;50,000, or where a formal bank paper trail is required (property solicitors, certain developer escrow accounts), use HSBC Global Money or Barclays, accept the higher cost, and keep all documentation. Give yourself a 3&ndash;5 day window &mdash; SWIFT transfers between banks can take 2&ndash;4 business days, and delays are common around UAE public holidays. Call your UAE bank in advance for large transfers. Let them know the amount and approximate timing. This helps avoid compliance holds.
              </p>
              <p>
                <a href="WISE_LINK_PLACEHOLDER" target="_blank" rel="noopener noreferrer sponsored" className="underline hover:text-[#C9A84C] font-semibold">Open a Wise account</a> if you haven&rsquo;t already &mdash; even if you use a bank for some transfers, having Wise ready for regular moves saves significantly over time.
              </p>
            </div>
          </div>
        </section>

        {/* HMRC and Reporting */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              HMRC and Reporting &mdash; What You Actually Need to Know
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This comes up constantly, so let me be clear about what the rules actually say.
              </p>
              <p>
                <strong className="text-[#0A1628]">There is no UK form to file simply because you transferred money abroad.</strong> Moving your own money &mdash; salary you&rsquo;ve already paid tax on, savings &mdash; does not in itself create a reporting obligation.
              </p>
              <p>
                <strong className="text-[#0A1628]">What does matter is the nature of the money:</strong>
              </p>
              <p>
                If the funds come from a capital gain (sale of UK property, investments), you must report and pay Capital Gains Tax via Self Assessment, regardless of whether the money stays in the UK or leaves it. If you have UK rental income and are tax-resident in the UAE, you still owe UK income tax on that rental income. See{" "}
                <a href="https://www.gov.uk/tax-foreign-income/residence" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#C9A84C] font-semibold">HMRC&rsquo;s guidance on non-residents and UK income</a>{" "}
                for your specific situation. See our{" "}
                <Link href="/guides/tax-and-hmrc" className="underline hover:text-[#C9A84C] font-semibold">tax guide for UK expats in Dubai</Link>{" "}
                for more detail on the residency picture.
              </p>
              <p>
                <strong className="text-[#0A1628]">AML checks.</strong> UK banks will request source-of-funds documentation for large outbound transfers &mdash; typically anything above &pound;10,000&ndash;25,000, though thresholds vary. This is standard bank policy, not HMRC. Have documentation ready: payslips, a sale contract, pension withdrawal statement, whatever fits.
              </p>
              <p>
                <strong className="text-[#0A1628]">Common Reporting Standard (CRS).</strong> Under the CRS, which has been in effect since 2018, UAE banks report UK-resident account holders&rsquo; balances back to HMRC automatically. The UAE is also adopting CRS 2.0 (effective 2027), which broadens what gets reported. If you have a UAE bank account and are filing UK Self Assessment, HMRC likely already knows the balance is there. This isn&rsquo;t a problem if your tax affairs are in order &mdash; it&rsquo;s just worth knowing.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-[#0A1628] mb-2">What is the cheapest way to transfer money from the UK to Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">
                  For most amounts and most people, Wise is the cheapest option. It uses the mid-market exchange rate (no markup) and charges 0.41% plus &pound;0.63 when paying by bank transfer. On a &pound;5,000 transfer, that&rsquo;s roughly &pound;21 total. Revolut&rsquo;s free tier beats this for amounts under &pound;1,000/month on weekdays. Traditional banks are the most expensive option for regular transfers.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-[#0A1628] mb-2">How long does a Wise transfer to a UAE bank account take?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Usually 1&ndash;2 business days for GBP&rarr;AED. Wise often uses local payment rails rather than SWIFT, which is both faster and avoids the UAE bank&rsquo;s incoming wire fee. Transfer time is shown before you confirm in the Wise app.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-[#0A1628] mb-2">Can I use Revolut to send money to a UAE bank account?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes. UK Revolut accounts can send to UAE bank accounts. Revolut AE (the UAE entity) is still rolling out, but UK-to-UAE transfers work via standard routing. Watch out for the weekend markup if you&rsquo;re exchanging GBP to AED on Saturday or Sunday &mdash; Revolut adds up to 1% above the interbank rate (less on paid plans).
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-[#0A1628] mb-2">Does Emirates NBD charge for receiving international transfers?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes &mdash; approximately AED 25&ndash;50 per incoming international wire, depending on account type and fee instruction. Some account tiers (Signature, Priority) waive this fee. When using Wise, this charge often doesn&rsquo;t apply because Wise uses local rails rather than SWIFT.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-[#0A1628] mb-2">Do I need to declare large money transfers to HMRC?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Not as a standalone filing requirement. There is no form to complete simply for transferring money abroad. However, if the money represents untaxed income or capital gains, those must be declared via Self Assessment regardless of whether the money moves internationally. Banks may ask for source-of-funds documentation on large transfers as a standard AML check.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-[#0A1628] mb-2">What is the current GBP to AED exchange rate?</h3>
                <p className="text-gray-700 leading-relaxed">
                  As of April 2026, 1 GBP = approximately 4.93 AED at the mid-market rate. The AED is pegged to the USD at exactly 3.6725, so GBP/AED movements are driven entirely by GBP/USD. The 30-day range has been 4.84&ndash;4.94, so there&rsquo;s meaningful volatility worth tracking if you&rsquo;re moving large sums.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Short Answer */}
        <section className="px-4 py-12 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0A1628" }}>
              The Short Answer
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For regular salary transfers and amounts up to &pound;20,000: use <a href="WISE_LINK_PLACEHOLDER" target="_blank" rel="noopener noreferrer sponsored" className="underline hover:text-[#C9A84C] font-semibold">Wise</a>. The fee is transparent, the rate is the mid-market rate, and it arrives in 1&ndash;2 days. For transfers under &pound;1,000/month on weekdays, Revolut&rsquo;s free tier is worth considering. For property deposits and situations requiring a formal paper trail, use your UK bank and accept the higher cost as the price of documentation.
              </p>
              <p>
                Check the <Link href="/guides/internet-and-vpn" className="underline hover:text-[#C9A84C] font-semibold">internet and VPN guide</Link> if you&rsquo;re having trouble accessing UK banking portals from Dubai &mdash; a UK-based VPN server fixes most bank IP blocks.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="px-4 py-8 md:px-8 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-gray-500 leading-relaxed">
              Fees and exchange rates quoted in this article are accurate as of April 2026. Transfer costs vary by payment method, account tier, and amount. Always check the live rate in the Wise or Revolut app before confirming a transfer. This article contains affiliate links &mdash; if you open a Wise account through our link, we may receive a small commission at no cost to you. Sources:{" "}
              <a href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=GBP&To=AED" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500">XE.com GBP/AED</a>{" | "}
              <a href="https://www.gov.uk/tax-foreign-income/residence" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500">HMRC: Tax on foreign income</a>{" | "}
              <a href="https://wise.com/gb/pricing/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500">Wise fee calculator</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
