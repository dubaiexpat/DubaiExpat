import { Metadata } from 'next';
import Header from '@/components/Header';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Cost of Living in Dubai vs London: A Realistic 2026 Comparison for UK Expats',
  description:
    'A genuine like-for-like cost comparison across three lifestyle tiers — single professional, couple, and family of four. Covers rent, schools, tax savings, the two-cheque system, and monthly budget breakdowns.',
};

const s = {
  page: { backgroundColor: '#FFFFFF', color: '#1a1a1a', minHeight: '100vh' } as React.CSSProperties,
  main: { maxWidth: '900px', margin: '0 auto', padding: '2rem' } as React.CSSProperties,
  hero: { marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '3px solid #C9A84C' } as React.CSSProperties,
  h1: { fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628', lineHeight: '1.2' } as React.CSSProperties,
  intro: { fontSize: '1.1rem', lineHeight: '1.8', color: '#374151' } as React.CSSProperties,
  toc: { backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1.5rem', marginBottom: '3rem' } as React.CSSProperties,
  tocTitle: { fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: '#0A1628', marginBottom: '1rem' },
  tocList: { listStyle: 'none', padding: 0, margin: 0 } as React.CSSProperties,
  tocItem: { marginBottom: '0.5rem' } as React.CSSProperties,
  tocLink: { color: '#93c5fd', fontSize: '0.9rem', textDecoration: 'none' } as React.CSSProperties,
  section: { marginBottom: '3rem' } as React.CSSProperties,
  h2: { fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' } as React.CSSProperties,
  h3: { fontSize: '1.2rem', fontWeight: '600', color: '#0A1628', marginBottom: '0.5rem', marginTop: '1.5rem' } as React.CSSProperties,
  body: { lineHeight: '1.8', color: '#374151' } as React.CSSProperties,
  p: { marginBottom: '1rem' } as React.CSSProperties,
  ul: { marginBottom: '1rem', paddingLeft: '1.5rem' } as React.CSSProperties,
  li: { marginBottom: '0.5rem' } as React.CSSProperties,
  callout: { backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '1.25rem', marginBottom: '1.5rem' } as React.CSSProperties,
  calloutText: { fontSize: '0.9rem', lineHeight: '1.7', color: '#374151' } as React.CSSProperties,
  tableWrap: { overflowX: 'auto' as const, marginBottom: '2rem' } as React.CSSProperties,
  table: { width: '100%', borderCollapse: 'collapse' as const, fontSize: '0.875rem' } as React.CSSProperties,
  th: { backgroundColor: '#F9FAFB', color: '#0A1628', padding: '0.75rem 1rem', textAlign: 'left' as const, fontWeight: '600', borderBottom: '2px solid #E5E7EB' } as React.CSSProperties,
  td: { padding: '0.65rem 1rem', borderBottom: '1px solid #ffffff10', color: '#374151', verticalAlign: 'top' as const } as React.CSSProperties,
  tdMuted: { padding: '0.65rem 1rem', borderBottom: '1px solid #ffffff10', color: '#94a3b8', verticalAlign: 'top' as const } as React.CSSProperties,
  tierCard: { backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' } as React.CSSProperties,
  tierTitle: { fontSize: '1.1rem', fontWeight: '700', color: '#0A1628', marginBottom: '0.75rem' } as React.CSSProperties,
  tierTotal: { fontSize: '1.3rem', fontWeight: '700', color: '#1a1a1a', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #C9A84C33' } as React.CSSProperties,
};

export default function CostOfLivingPage() {
  return (
    <div style={s.page}>
      <Header />
      <main style={s.main}>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl mb-12">
          <img
            src="https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              Cost of Living
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">Cost of Living in Dubai vs London: A Realistic 2026 Comparison for UK Expats</h1>
            <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
                The honest version. Dubai is not uniformly cheaper than London — and for families with
                children, it can easily cost more once school fees are factored in. But for single
                professionals and couples without children, the combination of zero income tax, lower
                rent for equivalent space, and no council tax can produce a dramatic improvement in
                real take-home wealth. This guide gives you the numbers across three realistic
                lifestyle tiers, explains where you will genuinely save, and where you should
                budget more carefully than you might expect.
            </p>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Exchange rate used: £1 = AED 4.65 (approximate 2026 rate). All figures are
              approximate monthly costs unless stated.
            </p>
          </div>
        </section>

        {/* TOC */}
        <nav style={s.toc} aria-label="Contents">
          <p style={s.tocTitle}>In this guide</p>
          <ol style={s.tocList}>
            {[
              ['#comparison-table', 'Summary comparison table (three lifestyle tiers)'],
              ['#biggest-differences', 'The biggest cost differences'],
              ['#what-you-save', 'What you will save vs London'],
              ['#costs-more', 'What costs more than people expect'],
              ['#two-cheque-shock', 'The two-cheque shock: Dubai rent payments explained'],
              ['#budgets', 'Monthly budgets by lifestyle tier'],
            ].map(([href, label]) => (
              <li key={href} style={s.tocItem}>
                <a href={href} style={s.tocLink}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Comparison table */}
        <section id="comparison-table" style={s.section}>
          <h2 style={s.h2}>Summary Comparison Table</h2>
          <div style={s.body}>
            <p style={s.p}>
              The table below compares monthly costs across three lifestyle tiers. London costs
              are in GBP; Dubai costs are shown in AED with a sterling equivalent. All figures
              represent typical mid-range spending — not budget, not luxury.
            </p>
          </div>

          {/* Single Professional */}
          <h3 style={s.h3}>Single Professional</h3>
          <div style={s.tableWrap}>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>Category</th>
                  <th style={s.th}>London (£/month)</th>
                  <th style={s.th}>Dubai (AED/month)</th>
                  <th style={s.th}>Dubai (£ equiv.)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rent (1-bed, good area)', '£1,800–2,500', '5,500–8,000', '£1,180–1,720'],
                  ['Groceries', '£300–400', '1,100–1,500', '£235–320'],
                  ['Transport (public/car)', '£150–250', '800–1,500', '£170–320'],
                  ['Healthcare / insurance', '£50–100', '400–700', '£85–150'],
                  ['Eating out', '£300–500', '900–1,600', '£190–345'],
                  ['Utilities (incl. cooling)', '£100–150', '600–900', '£130–195'],
                  ['Visa / residency costs', '—', '~1,200 annualised', '~£260 annualised'],
                  ['Council tax / equivalent', '£150–250', '—', '—'],
                  ['Income tax (on £80k salary)', '~£1,600', '—', '—'],
                ].map(([cat, ldn, dub, dubgbp]) => (
                  <tr key={cat}>
                    <td style={s.td}>{cat}</td>
                    <td style={s.td}>{ldn}</td>
                    <td style={s.td}>{dub}</td>
                    <td style={s.td}>{dubgbp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Family */}
          <h3 style={{ ...s.h3, marginTop: '2rem' }}>Family of Four (two school-age children)</h3>
          <div style={s.tableWrap}>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>Category</th>
                  <th style={s.th}>London (£/month)</th>
                  <th style={s.th}>Dubai (AED/month)</th>
                  <th style={s.th}>Dubai (£ equiv.)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rent (3-bed villa/apt)', '£2,500–4,000', '8,000–15,000', '£1,720–3,225'],
                  ['School fees (2 children)', '£0 (state)', '16,000–25,000', '£3,440–5,375'],
                  ['Groceries', '£600–800', '2,000–2,800', '£430–600'],
                  ['Transport (2 cars)', '£400–600', '2,000–3,000', '£430–645'],
                  ['Healthcare / insurance', '£100–200', '1,200–2,000', '£260–430'],
                  ['Eating out', '£500–800', '1,500–2,500', '£320–540'],
                  ['Utilities (incl. cooling)', '£150–250', '1,200–2,000', '£260–430'],
                  ['School transport / activities', '£200–400', '800–1,500', '£170–320'],
                  ['Income tax (on £120k salary)', '~£3,200', '—', '—'],
                ].map(([cat, ldn, dub, dubgbp]) => (
                  <tr key={cat}>
                    <td style={s.td}>{cat}</td>
                    <td style={s.td}>{ldn}</td>
                    <td style={s.td}>{dub}</td>
                    <td style={s.td}>{dubgbp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={s.callout}>
            <p style={s.calloutText}>
              <strong style={{ color: '#0A1628' }}>Key takeaway:</strong> For a family with two
              school-age children, Dubai school fees alone typically add £3,500–5,500 per month
              to outgoings compared to using the UK state school system. This single line item
              is why some families find Dubai no cheaper overall — even accounting for the tax
              saving.
            </p>
          </div>
        </section>

        {/* Biggest differences */}
        <section id="biggest-differences" style={s.section}>
          <h2 style={s.h2}>The Biggest Cost Differences</h2>
          <div style={s.body}>

            <h3 style={s.h3}>Rent: more space, but a different payment structure</h3>
            <p style={s.p}>
              For equivalent floor space, Dubai is generally cheaper than central London.
              A two-bedroom apartment in Dubai Marina or Jumeirah Lakes Towers typically rents
              for AED 90,000–130,000 per year (roughly £19,000–28,000), whereas a comparable
              two-bedroom in Zone 1–2 London could command £36,000–48,000 per year. However,
              moving to more suburban or less central parts of London (Zone 4–6, Home Counties)
              substantially closes this gap. The quality of finish in Dubai is often higher —
              many apartments include a gym, pool, and covered parking — and villa living is
              accessible at price points that would not get you a detached house anywhere
              near London.
            </p>
            <p style={s.p}>
              The critical difference is not the annual cost but the payment structure. See the
              dedicated section on the two-cheque system below.
            </p>

            <h3 style={s.h3}>Schools: the number that shocks families</h3>
            <p style={s.p}>
              Dubai has no state school system for expatriate children in the way the UK does.
              You will send your children to a fee-paying school. British curriculum schools —
              which most UK families prefer for continuity — charge between AED 35,000 and
              AED 100,000+ per child per year (approximately £7,500–£21,500). Quality GEMS
              schools, Repton, Jumeirah College, and similar institutions sit in the middle to
              upper range of this bracket. Some employers — particularly in financial services
              and oil and gas — include school fee allowances in the package. Many do not.
              For a family with two children at mid-range schools, this easily represents
              AED 140,000–180,000 per year (£30,000–£39,000) in additional expenditure that
              simply does not exist in the UK. This is the figure that surprises families most.
            </p>

            <h3 style={s.h3}>No income tax: a worked example</h3>
            <div style={s.callout}>
              <p style={{ ...s.calloutText, fontWeight: '600', color: '#0A1628', marginBottom: '0.5rem' }}>
                UK salary of £100,000 — take-home comparison
              </p>
              <p style={s.calloutText}>
                <strong>In the UK:</strong> Gross salary £100,000 → Income tax ~£27,500 →
                National Insurance ~£5,500 → Net take-home ~£67,000/year (£5,580/month)
              </p>
              <p style={{ ...s.calloutText, marginTop: '0.5rem' }}>
                <strong>In Dubai (equivalent package):</strong> Gross salary AED 550,000
                (~£118,000) → Tax: £0 → Net take-home £118,000/year (£9,830/month)
              </p>
              <p style={{ ...s.calloutText, marginTop: '0.5rem', color: '#0A1628' }}>
                Difference: ~£4,250 more per month in take-home pay, before any spending
                pattern changes. This is why the tax saving is transformative for individuals
                and couples — though for families it is often largely absorbed by school fees.
              </p>
            </div>

            <h3 style={s.h3}>Healthcare</h3>
            <p style={s.p}>
              Healthcare in Dubai is private and insurance-based. Most employers provide
              a basic company health insurance plan as part of the standard package, but the
              level of cover varies significantly. Basic plans may have annual caps, exclude
              dental and optical, and require co-payments. Upgrading to comprehensive cover —
              which is what most people coming from an NHS background want — typically costs
              AED 5,000–15,000 per year per person. Dental treatment is notably expensive,
              with routine fillings costing £150–£300 and a crown easily running to £700–£1,200.
            </p>

            <h3 style={s.h3}>Alcohol</h3>
            <p style={s.p}>
              Alcohol is significantly more expensive in Dubai than in the UK. It is available
              only at licensed venues (hotels, licensed restaurants and bars) and at licensed
              off-licences (MMI and African+Eastern). A glass of wine at a restaurant costs
              AED 55–80 (£12–17), compared to £7–9 in London. A bottle of wine at an off-licence
              costs roughly £12–18 — double or more what you would pay in a UK supermarket.
              For people who drink regularly, this is a meaningful budget line.
            </p>
          </div>
        </section>

        {/* What you save */}
        <section id="what-you-save" style={s.section}>
          <h2 style={s.h2}>What You Will Save vs London</h2>
          <div style={s.body}>
            <p style={s.p}>
              The savings side of the ledger is genuinely significant, particularly for
              higher earners. The items below represent costs that UK residents pay
              that Dubai residents do not — or pay substantially less of.
            </p>
            <ul style={s.ul}>
              <li style={s.li}><strong>Income tax:</strong> £0 vs £27,500+ on a £100,000 UK salary</li>
              <li style={s.li}><strong>National Insurance:</strong> £0 (as a Dubai resident) vs £5,500+ per year</li>
              <li style={s.li}><strong>Council tax:</strong> No equivalent in Dubai. A typical London Band D is £2,000+ per year</li>
              <li style={s.li}><strong>TV licence:</strong> £169 per year, not applicable in Dubai</li>
              <li style={s.li}><strong>Rent (for equivalent space):</strong> Typically 20–40% cheaper in Dubai compared to equivalent Zone 1–2 London, though less so vs outer London</li>
              <li style={s.li}><strong>Car costs:</strong> Petrol is substantially cheaper (approximately 30–40p per litre equivalent), and parking is generally free or very cheap in Dubai, unlike London</li>
              <li style={s.li}><strong>Domestic help:</strong> A full-time live-in housekeeper in Dubai costs AED 1,800–3,000 per month (£390–645), including visa sponsorship costs — a fraction of equivalent childcare or domestic help in London</li>
            </ul>
          </div>
        </section>

        {/* What costs more */}
        <section id="costs-more" style={s.section}>
          <h2 style={s.h2}>What Costs More Than People Expect</h2>
          <div style={s.body}>
            <ul style={s.ul}>
              <li style={s.li}>
                <strong>School fees:</strong> As noted above, the single biggest surprise for families. Budget for AED 50,000–100,000 per child per year.
              </li>
              <li style={s.li}>
                <strong>Summer electricity bills:</strong> Air conditioning runs continuously from June to September and often beyond. Electricity bills of AED 1,500–4,000 per month for a villa in summer are not unusual. Many buildings include utilities in the rent, but freestanding villas typically do not.
              </li>
              <li style={s.li}>
                <strong>Western supermarkets and restaurants:</strong> Imported Western goods (a specific branded cereal, good olive oil, French cheese) cost significantly more than in the UK. Eating at a mid-range Western restaurant regularly adds up quickly, particularly with the alcohol premium.
              </li>
              <li style={s.li}>
                <strong>Car running costs in heat:</strong> Tyres, servicing, and air conditioning maintenance are more frequent and costly due to the extreme temperatures. Battery replacement on newer cars is also more frequent.
              </li>
              <li style={s.li}>
                <strong>UK trips home:</strong> Flights between London and Dubai cost £300–1,000+ return per person depending on season and class. A family of four flying home twice a year is spending £2,500–8,000 on flights alone.
              </li>
              <li style={s.li}>
                <strong>Visa and residency renewal costs:</strong> Employment visas, medical tests, Emirates ID, and residency renewals cost AED 5,000–12,000 per person for a family every two to three years.
              </li>
            </ul>
          </div>
        </section>

        {/* Two cheque shock */}
        <section id="two-cheque-shock" style={s.section}>
          <h2 style={s.h2}>The Two-Cheque Shock: Dubai&apos;s Rent Payment System</h2>
          <div style={s.body}>
            <p style={s.p}>
              One of the most significant and least-discussed cash flow challenges for UK
              expats moving to Dubai is the rent payment system. In the UK, rent is almost
              universally paid monthly by direct debit. In Dubai, it is almost universally
              paid upfront by post-dated cheques — typically one, two, or four cheques
              covering the full annual rent, presented to the landlord at the time of signing.
            </p>
            <p style={s.p}>
              A landlord offering a property at AED 120,000 per year on a one-cheque basis
              is asking you to hand over a cheque for £25,800 on the day you collect the keys.
              Even a four-cheque arrangement requires a cheque of £6,450 every three months
              from a bank account that must contain sufficient funds at the moment the cheque
              is presented.
            </p>

            <h3 style={s.h3}>Worked example: cash flow planning</h3>
            <div style={s.callout}>
              <p style={{ ...s.calloutText, fontWeight: '600', color: '#0A1628', marginBottom: '0.75rem' }}>
                Scenario: Family moving to Dubai, annual rent AED 150,000, agreeing two cheques
              </p>
              <p style={s.calloutText}>Cheque 1 (on signing): AED 75,000 = ~£16,130</p>
              <p style={s.calloutText}>Cheque 2 (6 months later): AED 75,000 = ~£16,130</p>
              <p style={{ ...s.calloutText, marginTop: '0.75rem' }}>
                <strong>Implication:</strong> You need approximately £16,000–18,000 accessible
                in your bank account before you arrive — on top of shipping costs, flights,
                temporary accommodation, security deposits, school registration fees (often
                a term&apos;s fees paid upfront), and living costs for the first few months
                before your first Dubai salary arrives.
              </p>
              <p style={{ ...s.calloutText, marginTop: '0.75rem', color: '#0A1628' }}>
                <strong>Practical advice:</strong> Build up a Dubai relocation fund of at
                least £25,000–40,000 before you leave the UK, over and above your normal
                savings. This is not a nice-to-have; it is a practical necessity.
              </p>
            </div>

            <p style={s.p}>
              The number of cheques is negotiable at the time of signing, and landlords
              who are keen to let will sometimes accept four or even six cheques for tenants
              with strong employer backing. Newer developments and professionally managed
              buildings tend to be more flexible. If you can negotiate four cheques, it
              substantially reduces the up-front cash requirement.
            </p>
          </div>
        </section>

        {/* Budgets */}
        <section id="budgets" style={s.section}>
          <h2 style={s.h2}>Monthly Budget Breakdowns by Lifestyle Tier</h2>
          <div style={s.body}>
            <p style={s.p}>
              These are realistic all-in monthly budgets for living a comfortable, comparable-to-London
              lifestyle in Dubai. They exclude income tax (which is zero in Dubai) and are
              based on a mid-range lifestyle — not backpacker frugal, not Jumeirah villa luxury.
            </p>
          </div>

          <div style={s.tierCard}>
            <p style={s.tierTitle}>Single Professional</p>
            <div style={s.body}>
              <p style={s.p}>Rent (1-bed, good area): AED 6,500 (~£1,400)</p>
              <p style={s.p}>Groceries: AED 1,300 (~£280)</p>
              <p style={s.p}>Transport (own car): AED 1,500 (~£320)</p>
              <p style={s.p}>Utilities: AED 700 (~£150)</p>
              <p style={s.p}>Eating out + socialising: AED 1,500 (~£320)</p>
              <p style={s.p}>Healthcare top-up: AED 500 (~£110)</p>
              <p style={s.p}>Miscellaneous (gym, subscriptions, clothing): AED 800 (~£170)</p>
              <p style={s.p}>UK flights (2x/year, amortised): AED 700 (~£150)</p>
            </div>
            <p style={s.tierTotal}>Total: ~AED 13,500/month (~£2,900/month)</p>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Range: AED 12,000–18,000/month (£2,580–3,870) depending on area and lifestyle
            </p>
          </div>

          <div style={s.tierCard}>
            <p style={s.tierTitle}>Couple (no children)</p>
            <div style={s.body}>
              <p style={s.p}>Rent (2-bed, good area): AED 10,000 (~£2,150)</p>
              <p style={s.p}>Groceries: AED 2,000 (~£430)</p>
              <p style={s.p}>Transport (2 cars or 1 + taxis): AED 2,500 (~£540)</p>
              <p style={s.p}>Utilities: AED 1,000 (~£215)</p>
              <p style={s.p}>Eating out + socialising: AED 3,000 (~£645)</p>
              <p style={s.p}>Healthcare (both): AED 1,000 (~£215)</p>
              <p style={s.p}>Miscellaneous: AED 1,500 (~£320)</p>
              <p style={s.p}>UK flights (2x/year each, amortised): AED 1,400 (~£300)</p>
            </div>
            <p style={s.tierTotal}>Total: ~AED 22,400/month (~£4,820/month)</p>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Range: AED 18,000–30,000/month (£3,870–6,450) depending on area and lifestyle
            </p>
          </div>

          <div style={s.tierCard}>
            <p style={s.tierTitle}>Family of Four (two school-age children)</p>
            <div style={s.body}>
              <p style={s.p}>Rent (3-bed villa/apt): AED 14,000 (~£3,010)</p>
              <p style={s.p}><strong style={{ color: '#ef4444' }}>School fees (2 children, mid-range): AED 18,000 (~£3,870)</strong></p>
              <p style={s.p}>Groceries: AED 3,000 (~£645)</p>
              <p style={s.p}>Transport (2 cars): AED 3,000 (~£645)</p>
              <p style={s.p}>Utilities: AED 1,500 (~£320)</p>
              <p style={s.p}>Eating out: AED 2,500 (~£540)</p>
              <p style={s.p}>Healthcare (family): AED 2,000 (~£430)</p>
              <p style={s.p}>School activities / sports: AED 1,500 (~£320)</p>
              <p style={s.p}>Domestic help (part-time): AED 1,500 (~£320)</p>
              <p style={s.p}>UK flights (family 2x/year, amortised): AED 3,000 (~£645)</p>
            </div>
            <p style={s.tierTotal}>Total: ~AED 50,000/month (~£10,750/month)</p>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Range: AED 40,000–70,000+/month (£8,600–15,050+) depending on school choice and lifestyle
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ marginBottom: '3rem' }}>
          <EmailCapture
            headline="Get the Dubai Budget Planner — Free"
            subheading="A side-by-side UK vs Dubai cost comparison covering housing, utilities, transport, food, education, healthcare and lifestyle — with a 'Your Budget' column to plan your own move."
            cta="Send me the budget planner →"
            successMessage="✓ Check your inbox — your budget planner is on its way."
            firstMagnet="dx-budget-planner"
            guideTopic="cost-of-living"
          />
        </section>

        {/* Related */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={s.h2}>Related Guides</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
            <Link href="/visa-checker" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>
              Visa Checker Tool →
            </Link>
            <Link href="/guides/tax-and-hmrc" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>
              Tax &amp; HMRC Guide →
            </Link>
            <Link href="/guides/housing" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>
              Finding a Home in Dubai →
            </Link>
            <Link href="/guides/schools" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>
              Schools &amp; Education →
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
