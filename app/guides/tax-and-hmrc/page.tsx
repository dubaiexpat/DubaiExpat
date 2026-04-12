import { Metadata } from 'next';
import Header from '@/components/Header';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Leaving the UK Tax System: HMRC, Residency & What Dubai Expats Need to Know (2026)',
  description:
    'A practical guide for UK expats moving to Dubai — covering the Statutory Residence Test, P85 form, HMRC notification, UK property, National Insurance, and the UK-UAE Double Taxation Agreement.',
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
  disclaimer: { backgroundColor: '#FEF2F2', border: '2px solid #ef4444', borderRadius: '12px', padding: '1.5rem', marginBottom: '3rem' } as React.CSSProperties,
  disclaimerTitle: { fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: '#ef4444', marginBottom: '0.75rem' },
  disclaimerText: { fontSize: '0.9rem', lineHeight: '1.7', color: '#fca5a5' } as React.CSSProperties,
  callout: { backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '1.25rem', marginBottom: '1.5rem' } as React.CSSProperties,
  calloutText: { fontSize: '0.9rem', lineHeight: '1.7', color: '#374151' } as React.CSSProperties,
};

export default function TaxAndHmrcGuide() {
  return (
    <div style={s.page}>
      <div className="px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Header />
          <div className="flex items-center gap-2 py-3 text-sm text-slate-500">
            <Link href="/" className="flex items-center gap-1 hover:text-[#0A1628]">
              <span>←</span><span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/#categories" className="hover:text-[#0A1628]">Guides</Link>
            <span>/</span>
            <span className="font-medium text-[#0A1628]">Tax &amp; HMRC</span>
          </div>
        </div>
      </div>
      <main style={s.main}>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl mb-12">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20 max-w-4xl">
            <div className="flex items-center gap-2 mb-3 text-sm text-slate-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span>Tax &amp; HMRC</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              Tax &amp; HMRC
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
              Leaving the UK Tax System: HMRC, Residency &amp; What Dubai Expats Need to Know
            </h1>
            <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
              The UAE charges zero personal income tax. That is one of the most powerful financial reasons
              UK professionals move to Dubai. But here is the part that catches people out: that zero-tax
              benefit only applies once you have properly exited the UK tax system. Simply boarding a plane
              to Dubai does not make you a non-UK resident for tax purposes. HMRC has a strict statutory
              framework for determining where you are tax-resident &mdash; and getting it wrong can result in
              unexpected UK tax bills, penalties, and years of correspondence with HMRC.
            </p>
            <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
              This guide explains everything UK expats moving to Dubai need to understand about their
              UK tax position &mdash; in plain English, with the key steps clearly laid out.
            </p>
          </div>
        </section>

        {/* Upfront advisory notice */}
        <p style={{ fontSize: '0.9rem', lineHeight: '1.75', color: '#94a3b8', marginBottom: '2.5rem' }}>
          Tax rules change — always take professional advice before making decisions about your UK
          residency or HMRC affairs. We work with trusted UK expat tax specialists;{' '}
          <a
            href="https://your-affiliate-link.com"
            target="_blank"
            rel="noopener noreferrer sponsored"
            style={{ color: '#0A1628', textDecoration: 'underline' }}
          >
            book a free initial consultation here
          </a>
          .
        </p>

        {/* Table of Contents */}
        <nav style={s.toc} aria-label="Contents">
          <p style={s.tocTitle}>In this guide</p>
          <ol style={s.tocList}>
            {[
              ['#why-it-matters', 'Why this matters for UK expats'],
              ['#statutory-residence-test', 'The Statutory Residence Test (SRT)'],
              ['#p85-form', 'How to notify HMRC: the P85 form'],
              ['#tax-year-timing', 'UK tax year timing and your move'],
              ['#uk-property', 'If you keep your UK property'],
              ['#national-insurance', 'National Insurance while abroad'],
              ['#double-taxation', 'The UK-UAE Double Taxation Agreement'],
              ['#professional-help', 'When to get professional help'],
            ].map(([href, label]) => (
              <li key={href} style={s.tocItem}>
                <a href={href} style={s.tocLink}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 1. Why it matters */}
        <section id="why-it-matters" style={s.section}>
          <h2 style={s.h2}>Why This Matters for UK Expats Specifically</h2>
          <div style={s.body}>
            <p style={s.p}>
              Most countries that UK citizens move to have their own income tax systems. Moving to France
              or Australia means swapping UK tax for French or Australian tax. Dubai is fundamentally
              different because the UAE levies zero personal income tax on employment income, investment
              returns, or capital gains. For a UK professional earning £100,000, the difference between
              paying UK income tax and paying nothing is roughly £30,000 per year. Over a three-to-five
              year Dubai posting, this is transformative.
            </p>
            <p style={s.p}>
              The catch is that the UK taxes its residents on worldwide income. If HMRC considers you
              still UK-resident — even after you have physically moved to Dubai — your Dubai earnings
              could be subject to UK income tax. The UK Statutory Residence Test (SRT) determines
              your tax residency status, and it is more nuanced than most people expect. It is not
              simply a matter of spending fewer than 183 days in the UK.
            </p>
            <p style={s.p}>
              Beyond income tax, there are other UK obligations to manage: notifying HMRC of your
              departure, handling rental income from UK property you retain, managing National
              Insurance contributions, and understanding how UK pensions interact with your new
              non-resident status. This guide covers each of these in turn.
            </p>
          </div>
        </section>

        {/* 2. SRT */}
        <section id="statutory-residence-test" style={s.section}>
          <h2 style={s.h2}>The Statutory Residence Test (SRT)</h2>
          <div style={s.body}>
            <p style={s.p}>
              The Statutory Residence Test has been in force since 6 April 2013. It replaced a
              previously vague system that relied heavily on HMRC guidance and case law. The SRT
              provides a structured — though still complex — framework for determining whether you
              are UK-resident in any given tax year. Crucially, your residence status is determined
              year by year, not as a single lifetime decision.
            </p>

            <h3 style={s.h3}>The Automatic Overseas Test</h3>
            <p style={s.p}>
              You will be automatically non-UK resident for a tax year if you meet any of the
              following conditions. Firstly, if you were UK-resident in one or more of the three
              previous tax years and you spend fewer than 16 days in the UK during the current
              year. Secondly, if you were not UK-resident in any of the three previous tax years
              and you spend fewer than 46 days in the UK. Thirdly, if you work full-time overseas
              (at least 35 hours per week on average), spend fewer than 91 days in the UK, and
              do fewer than 31 days of work in the UK. For most people making a clean move to
              Dubai and taking up full-time employment there, the third condition is the most
              relevant — but the day-count requirements are strict and must be tracked carefully.
            </p>

            <h3 style={s.h3}>The Automatic UK Test</h3>
            <p style={s.p}>
              Even if you do not qualify as automatically non-resident, you will be automatically
              UK-resident if you spend 183 or more days in the UK during the tax year, if your
              only home is in the UK (and you have no overseas home), or if you work full-time in
              the UK for any period of 365 days. These are hard thresholds — exceeding any of
              them means you are UK-resident regardless of your overseas life.
            </p>

            <h3 style={s.h3}>The Sufficient Ties Test</h3>
            <p style={s.p}>
              If you fall between the automatic tests, you are assessed under the Sufficient Ties
              Test. This counts the number of &ldquo;UK ties&rdquo; you have: a family tie (UK-resident
              spouse or minor children), an accommodation tie (accessible UK accommodation),
              a work tie (working more than 40 days in the UK), a 90-day tie (spending more than
              90 days in the UK in either of the two previous years), and a country tie (the UK is
              the country where you spent the most days, for returning residents only). The more
              ties you have, the fewer UK days you can spend before becoming UK-resident. Someone
              with four ties becomes UK-resident after just 16 UK days.
            </p>

            <div style={s.callout}>
              <p style={s.calloutText}>
                <strong style={{ color: '#0A1628' }}>Practical implication:</strong> If you have
                a family home in the UK, a UK-resident spouse, or you plan to visit regularly, you
                need to count your UK days carefully every tax year. Many Dubai expats are surprised
                to discover that their Christmas visits, UK client meetings, and school holiday trips
                back add up faster than expected.
              </p>
            </div>
          </div>
        </section>

        {/* 3. P85 */}
        <section id="p85-form" style={s.section}>
          <h2 style={s.h2}>How to Notify HMRC You&apos;re Leaving: The P85 Form</h2>
          <div style={s.body}>
            <p style={s.p}>
              The P85 form (&ldquo;Leaving the UK — getting your tax right&rdquo;) is the formal way to
              notify HMRC that you are leaving the UK and will be living abroad. Submitting it
              is an important step that many people overlook, often because no one tells them
              it is required. HMRC will not automatically know you have left the country.
            </p>
            <p style={s.p}>
              You should submit your P85 once you have left the UK and you are confident you
              will not be returning as a UK resident. You can submit it before you leave if
              your departure date and circumstances are settled, but many advisers suggest
              waiting until you are established in Dubai. The form is available on GOV.UK
              and can be submitted online or by post.
            </p>

            <h3 style={s.h3}>What the P85 asks for</h3>
            <ul style={s.ul}>
              <li style={s.li}>Your UK address and National Insurance number</li>
              <li style={s.li}>The date you left the UK</li>
              <li style={s.li}>Your overseas address (Dubai)</li>
              <li style={s.li}>Details of your UK income in the year of departure</li>
              <li style={s.li}>Whether you have a UK property and its status (sold, let, or kept)</li>
              <li style={s.li}>Whether you expect to return to the UK and, if so, when</li>
              <li style={s.li}>Your employer details (UK and overseas)</li>
            </ul>

            <h3 style={s.h3}>What happens after you submit</h3>
            <p style={s.p}>
              HMRC will review your P85 and, if satisfied with your non-resident claim, will
              update your tax records and may send you a tax calculation for the year of
              departure showing any refund owed or tax due. If you were on PAYE, your
              employer should have been operating the correct tax code for the part of the
              year you worked in the UK. HMRC may also issue a notice confirming your
              non-resident status, which can be useful for banking and financial purposes.
            </p>
            <p style={s.p}>
              You can find the P85 form at{' '}
              <a
                href="https://www.gov.uk/tax-right-retire-abroad-return-to-uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#93c5fd' }}
              >
                gov.uk/tax-right-retire-abroad-return-to-uk
              </a>
              . If you have a Self Assessment tax return obligation, you should also continue
              to file returns for any years in which you had UK taxable income, including the
              year of departure.
            </p>
          </div>
        </section>

        {/* 4. Tax year timing */}
        <section id="tax-year-timing" style={s.section}>
          <h2 style={s.h2}>UK Tax Year Timing and Your Move</h2>
          <div style={s.body}>
            <p style={s.p}>
              The UK tax year runs from 6 April to 5 April — not the calendar year. This quirk
              of the British tax system has material consequences for expats who move partway
              through a year. In the year you leave the UK, you are almost certainly going to
              be UK-resident for the earlier part of that tax year (up to your departure) and
              potentially non-resident for the later part.
            </p>
            <p style={s.p}>
              In many cases, HMRC applies a concept called &ldquo;split year treatment&rdquo; — officially
              provided for under the SRT — which splits the tax year into a UK-resident part
              and an overseas-resident part. This means UK income earned before your departure
              is taxed in the UK in the usual way, but income earned after your departure date
              (and properly attributable to your overseas period) is not subject to UK income
              tax. Split year treatment is not automatic: you must claim it on your Self
              Assessment tax return for the relevant year, and it only applies if you meet
              certain conditions.
            </p>

            <h3 style={s.h3}>Why timing your departure matters</h3>
            <p style={s.p}>
              If you can choose when to start your Dubai role, moving before 6 April rather
              than after it can mean one fewer UK tax year to deal with. More practically,
              people who move in, say, January have a relatively short UK-resident period in
              that tax year, whereas someone who moves in March is UK-resident for almost
              the entire year and then needs to manage split-year treatment carefully.
            </p>
            <p style={s.p}>
              Employers who relocate staff internationally are usually familiar with these
              issues and should provide tax equalisation or tax advice as part of the
              relocation package. If they do not, it is worth raising proactively.
            </p>
          </div>
        </section>

        {/* 5. UK property */}
        <section id="uk-property" style={s.section}>
          <h2 style={s.h2}>If You Keep Your UK Property</h2>
          <div style={s.body}>
            <p style={s.p}>
              Many UK expats moving to Dubai choose to retain their UK home and rent it out
              rather than sell. This is an entirely legitimate decision, but it creates ongoing
              UK tax obligations that do not disappear simply because you are now resident in
              the UAE.
            </p>

            <h3 style={s.h3}>The Non-Resident Landlord (NRL) Scheme</h3>
            <p style={s.p}>
              If you are a non-UK resident and you receive rental income from UK property,
              you fall within the Non-Resident Landlord scheme. Under the default rules,
              your letting agent (or tenant, if there is no agent) is required to deduct
              basic rate income tax (currently 20%) from your rental income before paying
              it to you and to pay that tax to HMRC quarterly. This happens automatically
              unless you apply to receive your rental income gross.
            </p>
            <p style={s.p}>
              To receive gross rental payments — i.e. without the 20% deduction at source —
              you must apply to HMRC using form NRL1. HMRC will approve this if they are
              satisfied that your UK tax affairs are up to date and that you are likely to
              comply with your ongoing Self Assessment obligations. Even with gross payment
              status, you are still required to declare the rental income on an annual UK
              Self Assessment tax return and pay any income tax due.
            </p>

            <h3 style={s.h3}>Tax on rental income as a non-resident</h3>
            <p style={s.p}>
              Non-resident landlords pay UK income tax on their net rental profits (income
              minus allowable expenses) at UK rates. The personal allowance is available to
              most EEA nationals but not to non-EEA residents — and as UAE residents you
              would typically not receive the personal allowance, meaning tax applies from
              the first pound of rental profit. Allowable deductions include mortgage
              interest (subject to restrictions introduced in 2020), letting agent fees,
              maintenance and repairs, insurance, and service charges.
            </p>
            <p style={s.p}>
              Capital gains tax also applies to UK residential property disposed of by
              non-residents, at rates of 18% or 24% depending on your income level in
              the year of disposal. This was a significant change introduced in 2015 and
              caught many long-term expats off guard when they eventually sold UK property.
            </p>
          </div>
        </section>

        {/* 6. NI */}
        <section id="national-insurance" style={s.section}>
          <h2 style={s.h2}>National Insurance While Abroad</h2>
          <div style={s.body}>
            <p style={s.p}>
              When you move to Dubai and stop working in the UK, your National Insurance
              contributions typically stop. This has a direct impact on your entitlement to
              the UK State Pension. To receive the full new State Pension (£221.20 per week
              as of 2024/25), you need 35 qualifying years of National Insurance contributions.
              To receive any State Pension at all, you need at least 10 qualifying years.
              Years working in Dubai do not count toward your UK NI record.
            </p>

            <h3 style={s.h3}>Voluntary contributions: Class 2 and Class 3</h3>
            <p style={s.p}>
              HMRC allows non-resident UK nationals to make voluntary National Insurance
              contributions to protect their State Pension entitlement. The two relevant
              classes are Class 2 (available if you are working abroad and meet certain
              conditions, currently £3.45 per week for 2024/25) and Class 3 (available
              to anyone not working abroad in a qualifying capacity, currently £17.45 per
              week for 2024/25). Class 2 is substantially cheaper and, where available,
              is the option most advisers recommend.
            </p>
            <p style={s.p}>
              You can check your State Pension forecast and NI record through the HMRC
              personal tax account at gov.uk. For most UK expats in their 30s and 40s
              heading to Dubai for a few years, continuing Class 2 contributions is a
              very cost-effective way to protect a pension entitlement worth tens of
              thousands of pounds over retirement. The annual cost (roughly £179 for
              Class 2) is modest relative to the State Pension benefit it protects.
            </p>
            <p style={s.p}>
              You should register to pay voluntary contributions before you leave or
              shortly after arriving in Dubai, using HMRC&apos;s CF83 form.
            </p>
          </div>
        </section>

        {/* 7. Double Tax */}
        <section id="double-taxation" style={s.section}>
          <h2 style={s.h2}>The UK-UAE Double Taxation Agreement</h2>
          <div style={s.body}>
            <p style={s.p}>
              The UK and UAE have had a Double Taxation Agreement (DTA) in force since 1993.
              Its primary purpose is to prevent the same income being taxed in both countries.
              In practice, since the UAE charges zero personal income tax, the agreement is
              less relevant for most employed expats than it would be for a move to, say,
              France or Germany — because there is no UAE tax to offset against UK tax.
            </p>
            <p style={s.p}>
              However, the DTA is relevant in a number of specific circumstances. Pension income
              — including UK private and State Pension payments — is generally taxable only in
              the country of residence under the agreement, which can be advantageous for
              UK expats in Dubai drawing on pension income. Dividends from UK companies
              are generally taxable in the UK at reduced withholding tax rates. Rental income
              from UK property, however, remains taxable in the UK regardless of the DTA,
              as real property is almost universally taxed where it is situated under international
              tax treaty norms.
            </p>
            <p style={s.p}>
              The DTA does not cover every type of income or every scenario, and its interaction
              with the UK&apos;s domestic legislation can be complex. The key practical takeaway is
              that the DTA alone does not mean you pay no UK tax — it operates alongside the SRT
              and the rest of the UK&apos;s tax code, not instead of them.
            </p>
            <div style={s.callout}>
              <p style={s.calloutText}>
                <strong style={{ color: '#0A1628' }}>Note:</strong> The full text of the UK-UAE
                Double Taxation Agreement is available on GOV.UK. Its interpretation in specific
                circumstances requires professional advice.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Professional help */}
        <section id="professional-help" style={s.section}>
          <h2 style={s.h2}>When to Get Professional Help</h2>
          <div style={s.body}>
            <p style={s.p}>
              The scenarios above are manageable with care and good information. But there
              are situations where professional advice is not just helpful but essential.
              These include: if your SRT position is not clear-cut (for instance, you have
              multiple ties or an unpredictable UK day count); if you are selling a UK property
              and need to calculate non-resident CGT correctly; if you have complex investment
              income from UK sources; if you are a company director with UK company interests;
              or if HMRC opens an enquiry into your residency position.
            </p>

            <h3 style={s.h3}>Types of adviser</h3>
            <p style={s.p}>
              A <strong>UK tax accountant</strong> with international experience (ideally
              specifically in UK expat tax) can handle your Self Assessment returns, advise
              on the SRT, and deal with HMRC on your behalf. Look for membership of the ICAEW,
              ACCA, or the Chartered Institute of Taxation (CIOT). Some firms specialise
              exclusively in UK expat tax and are well worth the additional cost.
            </p>
            <p style={s.p}>
              A <strong>cross-border Independent Financial Adviser (IFA)</strong> can advise
              on pension arrangements, investments, and financial planning across both UK and
              UAE jurisdictions. Ensure they are regulated by the FCA in the UK and/or the
              DFSA (Dubai Financial Services Authority) in the UAE. Be cautious of advisers
              in Dubai who are not FCA-regulated but purport to advise on UK pensions — this
              is a common source of poor outcomes for expats.
            </p>

            <h3 style={s.h3}>Typical costs</h3>
            <p style={s.p}>
              A UK expat tax accountant might charge £500–£1,500 per year for a Self
              Assessment return incorporating non-resident issues, rental property, and SRT
              analysis. Initial consultations are often £150–£300. For complex cases —
              multiple properties, significant investment income, or HMRC enquiries —
              costs can be higher. These are, however, material costs relative to the tax
              exposure they help you manage.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <div style={s.disclaimer}>
          <p style={s.disclaimerTitle}>Important Disclaimer</p>
          <p style={s.disclaimerText}>
            This guide is for general information only and does not constitute tax advice.
            UK tax law is complex, subject to frequent change, and the application of the
            rules to your personal circumstances requires professional assessment. Nothing
            in this guide should be relied upon as a basis for any tax, financial, or legal
            decision. Always consult a qualified UK tax adviser — ideally a Chartered Tax
            Adviser (CTA) or ICAEW-qualified accountant with international experience —
            before making decisions about your residency, tax position, or UK financial
            obligations.
          </p>
        </div>

        {/* CTA */}
        <section style={{ marginBottom: '3rem' }}>
          <EmailCapture
            headline="Get the UK Tax Exit Checklist — Free"
            subheading="A step-by-step checklist covering P85 filing, split-year treatment, National Insurance decisions, Self Assessment deadlines and everything else HMRC needs from you."
            cta="Send me the tax checklist →"
            successMessage="✓ Check your inbox — your tax checklist is on its way."
            firstMagnet="dx-tax-exit-checklist"
            guideTopic="tax"
          />
        </section>

        {/* Related guides */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={s.h2}>Related Guides</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
            <Link href="/guides/banking" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>
              Banking &amp; Personal Finance →
            </Link>
            <Link href="/guides/uk-pension-dubai" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>
              UK Pension as a Dubai Expat →
            </Link>
            <Link href="/cost-of-living" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>
              Cost of Living: Dubai vs London →
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
