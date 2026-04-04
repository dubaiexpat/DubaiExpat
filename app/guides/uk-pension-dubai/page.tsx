import { Metadata } from 'next';
import Header from '@/components/Header';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Your UK Pension as a Dubai Expat: What to Do, What to Avoid, and When to Get Advice (2026)',
  description:
    'A practical guide for UK expats in Dubai covering workplace pensions, the State Pension, QROPS, SIPPs, pension scams, and how to find a regulated adviser.',
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
  warning: { backgroundColor: '#FFF7ED', border: '2px solid #f97316', borderRadius: '10px', padding: '1.25rem', marginBottom: '1.5rem' } as React.CSSProperties,
  warningTitle: { fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: '#f97316', marginBottom: '0.5rem' },
  warningText: { fontSize: '0.9rem', lineHeight: '1.7', color: '#fed7aa' } as React.CSSProperties,
  disclaimer: { backgroundColor: '#FEF2F2', border: '2px solid #ef4444', borderRadius: '12px', padding: '1.5rem', marginBottom: '3rem' } as React.CSSProperties,
  disclaimerTitle: { fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: '#ef4444', marginBottom: '0.75rem' },
  disclaimerText: { fontSize: '0.9rem', lineHeight: '1.7', color: '#fca5a5' } as React.CSSProperties,
};

export default function UkPensionDubaiGuide() {
  return (
    <div style={s.page}>
      <Header />
      <main style={s.main}>

        {/* Hero */}
        <section style={s.hero}>
          <div style={{ marginBottom: '0.75rem' }}>
            <Link href="/" style={{ color: '#94a3b8', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#475569', margin: '0 0.5rem' }}>/</span>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>UK Pension</span>
          </div>
          <h1 style={s.h1}>
            Your UK Pension as a Dubai Expat: What to Do, What to Avoid, and When to Get Advice
          </h1>
          <p style={s.intro}>
            Pensions are the most overlooked financial issue for UK professionals moving to Dubai.
            In the excitement of negotiating a tax-free package and planning a new life, most
            people give their pension barely a second thought. That is understandable — and
            it is also a significant mistake. The decisions you make about your UK pension
            in the first few years of living in Dubai can have consequences worth tens or
            even hundreds of thousands of pounds over the course of your lifetime. This
            guide sets out the key things you need to understand: what happens to your
            workplace pension, how to protect your State Pension, what QROPS and SIPPs
            are, how to avoid the scams that target expats, and when you genuinely need
            professional advice.
          </p>
        </section>

        {/* TOC */}
        <nav style={s.toc} aria-label="Contents">
          <p style={s.tocTitle}>In this guide</p>
          <ol style={s.tocList}>
            {[
              ['#workplace-pension', 'Your workplace pension when you leave your UK employer'],
              ['#state-pension', 'The State Pension and your NI record'],
              ['#qrops', 'QROPS: what it is, when it might apply, and the risks'],
              ['#sipp', 'SIPPs for Dubai residents'],
              ['#scams', 'Pension scams to avoid'],
              ['#regulated-adviser', 'How to find a regulated adviser'],
            ].map(([href, label]) => (
              <li key={href} style={s.tocItem}>
                <a href={href} style={s.tocLink}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 1. Workplace pension */}
        <section id="workplace-pension" style={s.section}>
          <h2 style={s.h2}>Your Workplace Pension When You Leave Your UK Employer</h2>
          <div style={s.body}>
            <p style={s.p}>
              Most UK professionals heading to Dubai are leaving behind a workplace pension —
              either a defined contribution (DC) scheme, where a pot of money has been building
              up in your name, or a defined benefit (DB) scheme, sometimes called a final salary
              or career average pension, where your employer has promised you a specific income
              in retirement based on your salary and service.
            </p>

            <h3 style={s.h3}>Defined contribution pensions</h3>
            <p style={s.p}>
              When you leave a UK employer and stop contributing to a DC pension, it becomes
              what is known as a &ldquo;deferred&rdquo; pension. The pot continues to be invested and
              (subject to the performance of the underlying funds and any charges) will grow
              over time until you choose to access it. You do not need to do anything urgently.
              The pot does not disappear, it does not expire, and you are not forced to move it
              anywhere when you leave the UK.
            </p>
            <p style={s.p}>
              The most important practical steps are: make sure your pension provider has your
              current contact details (including your Dubai address), keep track of all the
              pension pots you have accumulated across different employers, and periodically
              check the fund choices and charges — some older workplace schemes have high annual
              management charges that erode returns significantly and may warrant consolidation
              into a more cost-effective arrangement at some point. The government&apos;s free Pension
              Tracing Service can help you locate lost pensions from previous employers.
            </p>

            <h3 style={s.h3}>Defined benefit pensions</h3>
            <p style={s.p}>
              DB pensions are extremely valuable and should be treated with great care. When you
              leave a DB scheme, your benefit is typically preserved at its current level and
              revalued annually (in line with inflation, up to certain caps) until you take it
              at the scheme&apos;s normal retirement age. The guaranteed income a DB pension provides
              in retirement is something that cannot be replicated at a reasonable cost through
              any market product.
            </p>

            <div style={s.warning}>
              <p style={s.warningTitle}>Do not cash out your pension</p>
              <p style={s.warningText}>
                A significant number of UK expats are approached — often within months of
                arriving in Dubai — by financial advisers recommending they access their UK
                pension early or transfer it to an overseas scheme. In almost all cases,
                accessing a UK pension before the minimum pension age (currently 55, rising
                to 57 in 2028) triggers a substantial tax charge under HMRC&apos;s &ldquo;unauthorised
                payment&rdquo; rules — up to 55% of the amount accessed. This is not a technicality
                that disappears because you live in Dubai. HMRC can and does pursue these
                charges against non-residents.
              </p>
            </div>
          </div>
        </section>

        {/* 2. State Pension */}
        <section id="state-pension" style={s.section}>
          <h2 style={s.h2}>The State Pension and Your NI Record</h2>
          <div style={s.body}>
            <p style={s.p}>
              The UK State Pension is based on your National Insurance (NI) contribution record.
              To receive the full new State Pension (£221.20 per week in 2024/25, rising annually
              with the triple lock), you need 35 qualifying years. To receive anything at all,
              you need at least 10 qualifying years. Years you spend working in Dubai do not
              automatically count toward your UK NI record.
            </p>
            <p style={s.p}>
              Before you leave the UK, or shortly after, you should check your State Pension
              forecast and NI record through your personal tax account at gov.uk. This will
              tell you how many qualifying years you currently have and what your projected
              State Pension will be. If you have gaps in your record, you can consider paying
              voluntary contributions to fill them.
            </p>

            <h3 style={s.h3}>Voluntary NI contributions from Dubai</h3>
            <p style={s.p}>
              HMRC allows UK nationals living abroad to pay voluntary Class 2 or Class 3 NI
              contributions to maintain their State Pension entitlement. Class 2 contributions
              are available if you were previously employed or self-employed in the UK and are
              working abroad — the rate is £3.45 per week for 2024/25, or approximately £179
              per year. Class 3 contributions, available more broadly, cost £17.45 per week
              (approximately £908 per year). Where you qualify for Class 2, it is almost always
              the better option.
            </p>
            <p style={s.p}>
              The maths is compelling. Each qualifying year you purchase secures approximately
              £6.32 per week of additional State Pension (£221.20 ÷ 35), or around £329 per year
              in retirement, for life. At Class 2 rates, you are paying £179 to secure £329 per
              year — a payback period of under seven months from the point you start drawing
              the pension. For anyone in their 30s or 40s moving to Dubai for a few years, this
              is one of the best-value financial decisions available.
            </p>
            <p style={s.p}>
              You register to pay voluntary contributions using HMRC&apos;s CF83 form, available
              at gov.uk. There are also time limits on purchasing missing years, so it is
              worth acting rather than leaving it indefinitely.
            </p>
          </div>
        </section>

        {/* 3. QROPS */}
        <section id="qrops" style={s.section}>
          <h2 style={s.h2}>QROPS: What It Is, When It Might Apply, and the Risks</h2>
          <div style={s.body}>
            <p style={s.p}>
              A Qualifying Recognised Overseas Pension Scheme (QROPS) is an overseas pension
              arrangement that meets certain HMRC requirements and to which UK pension benefits
              can be transferred. QROPS were introduced to allow genuine long-term emigrants
              to consolidate their pension savings into a single overseas scheme appropriate
              to their country of retirement.
            </p>
            <p style={s.p}>
              In theory, a QROPS transfer can make sense for someone who is genuinely planning
              to retire permanently outside the UK, has significant pension savings, and wants
              to consolidate into a single scheme denominated in a currency relevant to their
              retirement location. In practice, they have been extensively mis-sold to UK expats
              who had no business transferring their pensions and who suffered significant
              financial harm as a result.
            </p>

            <h3 style={s.h3}>The Overseas Transfer Charge</h3>
            <p style={s.p}>
              Since 9 March 2017, most transfers to a QROPS are subject to a 25% Overseas
              Transfer Charge (OTC) — payable to HMRC — unless a specific exemption applies.
              The main exemptions include: the receiving scheme is in the same country as your
              country of residence; the receiving scheme is in the EEA and you are also resident
              in the EEA; or the receiving scheme is an employer-sponsored scheme. Importantly,
              there is no general exemption for UAE residents transferring to a UAE or Isle of
              Man QROPS — meaning the 25% charge typically applies, wiping out a quarter of
              the pension pot before a single investment decision is made.
            </p>

            <h3 style={s.h3}>Why most Dubai expats should not use a QROPS</h3>
            <p style={s.p}>
              For most UK expats in Dubai — particularly those on employment contracts of two
              to five years who have not made a permanent decision to never return to the UK —
              a QROPS transfer is almost certainly not appropriate. The 25% charge alone is
              a near-insurmountable hurdle for anyone who might eventually return to the UK
              and access their pension domestically. Additionally, the charges on many QROPS
              products (offshore bonds, complex structures, trail commission) have historically
              been extremely high, eroding returns further. The FCA, the Pensions Regulator,
              and numerous consumer bodies have issued extensive warnings about QROPS mis-selling.
            </p>

            <div style={s.warning}>
              <p style={s.warningTitle}>Warning</p>
              <p style={s.warningText}>
                If you are approached by a financial adviser in Dubai recommending you transfer
                your UK pension into a QROPS, do not sign anything before taking independent
                advice from an FCA-regulated adviser who does not earn commission from the
                transfer. Pension transfer mis-selling has caused serious financial harm to
                thousands of UK expats and remains an area of active FCA enforcement.
              </p>
            </div>
          </div>
        </section>

        {/* 4. SIPP */}
        <section id="sipp" style={s.section}>
          <h2 style={s.h2}>SIPPs for Dubai Residents</h2>
          <div style={s.body}>
            <p style={s.p}>
              A Self-Invested Personal Pension (SIPP) is a UK pension wrapper that allows
              you to choose your own investments from a wide range of asset classes —
              funds, equities, bonds, commercial property, and more. SIPPs are regulated
              by the FCA, straightforward to understand, and offered by reputable providers
              including Vanguard, Hargreaves Lansdown, AJ Bell, and others.
            </p>
            <p style={s.p}>
              If you already have a SIPP (or a personal pension that could be consolidated
              into one) before you leave the UK, you can continue to hold it as a Dubai
              resident. Your existing pot remains invested and grows tax-free within the
              wrapper. You can access it from age 57 (from 2028) in the usual way.
            </p>

            <h3 style={s.h3}>Contributions as a non-UK resident</h3>
            <p style={s.p}>
              The rules on making new pension contributions as a non-UK resident are
              restrictive. If you have no UK earnings, you can contribute a maximum of
              £3,600 gross per year (£2,880 net, with basic rate tax relief added
              automatically) to a UK personal pension. If you have UK earnings — for
              example, from rental income or part-time UK work — you can contribute up
              to 100% of those earnings, subject to the annual allowance (currently
              £60,000 gross per year).
            </p>
            <p style={s.p}>
              For most Dubai-based expats earning their salary in the UAE, the £3,600
              gross contribution limit is the relevant one. It is modest, but making
              even this contribution each year is worthwhile if you have the capacity,
              as it keeps the pension habit active and provides some tax relief.
            </p>

            <h3 style={s.h3}>Consolidating old workplace pensions into a SIPP</h3>
            <p style={s.p}>
              If you have accumulated several small DC pension pots from previous UK
              employers, consolidating them into a single SIPP can be administratively
              convenient and potentially cost-effective if the SIPP charges are lower
              than those on the legacy schemes. However, always check whether any
              existing schemes have valuable features — such as guaranteed annuity
              rates, enhanced transfer values, or employer top-ups — before initiating
              a transfer. These features can be forfeited on transfer and are worth
              significantly more than they appear.
            </p>
          </div>
        </section>

        {/* 5. Scams */}
        <section id="scams" style={s.section}>
          <h2 style={s.h2}>Pension Scams to Avoid</h2>
          <div style={s.body}>
            <p style={s.p}>
              UK expats in Dubai are disproportionately targeted by pension scammers and
              unregulated financial advisers. The combination of a large pension pot,
              distance from UK-based advisers, and a desire to simplify finances in a
              new country makes expats attractive targets. The consequences of being
              caught out can be financially devastating and are rarely recoverable.
            </p>

            <h3 style={s.h3}>Common scam patterns</h3>
            <ul style={s.ul}>
              <li style={s.li}>
                <strong>Pension liberation / pension unlocking:</strong> Promises to access
                your pension before age 55 or 57, often through a &ldquo;loophole.&rdquo; There is no
                legitimate loophole. Early access triggers a 55% HMRC unauthorised payment
                charge, and scammers typically take a large additional fee on top.
              </li>
              <li style={s.li}>
                <strong>Unregulated collective investment schemes (UCIS):</strong> Pension
                transfers into overseas investments such as hotel rooms, storage units,
                forestry schemes, or cryptocurrency funds. These are almost always
                illiquid, high-risk, and inappropriate for pension savings.
              </li>
              <li style={s.li}>
                <strong>Pressure selling:</strong> Time-limited offers, unsolicited cold
                calls or LinkedIn messages, and claims that the &ldquo;window is closing&rdquo; are
                all red flags. Legitimate advisers do not cold-call about pensions.
              </li>
              <li style={s.li}>
                <strong>Adviser referral chains:</strong> A common pattern in Dubai involves
                an initial financial adviser recommending a pension review, then referring
                to a &ldquo;specialist&rdquo; offshore adviser who earns significant commission from
                the transaction. Each referral removes you further from FCA regulation.
              </li>
              <li style={s.li}>
                <strong>Guaranteed high returns:</strong> Any investment promising fixed
                returns of 8–15% per year &ldquo;guaranteed&rdquo; should be treated as a scam.
                No legitimate investment vehicle offers guaranteed high returns.
              </li>
            </ul>

            <div style={s.callout}>
              <p style={s.calloutText}>
                <strong style={{ color: '#0A1628' }}>Check before you act:</strong> You can verify
                whether any UK financial adviser or firm is FCA-regulated at{' '}
                <a
                  href="https://register.fca.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#93c5fd' }}
                >
                  register.fca.org.uk
                </a>
                . If an adviser or firm is not on the register, do not proceed.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Finding an adviser */}
        <section id="regulated-adviser" style={s.section}>
          <h2 style={s.h2}>How to Find a Regulated Adviser</h2>
          <div style={s.body}>
            <p style={s.p}>
              The expat financial advice market in Dubai contains a wide spectrum of quality,
              from excellent FCA-regulated specialists to unregulated salespeople operating
              with no meaningful consumer protection. The gap between these two categories
              is enormous in terms of outcome quality. Getting this right is one of the
              most important financial decisions you will make as an expat.
            </p>

            <h3 style={s.h3}>What to look for</h3>
            <ul style={s.ul}>
              <li style={s.li}>
                <strong>FCA registration:</strong> For advice on UK pensions, the adviser
                or their firm must be FCA-regulated. Check the FCA register. Being regulated
                in the UAE by the SCA or DFSA alone is not sufficient for UK pension advice.
              </li>
              <li style={s.li}>
                <strong>Pension transfer qualifications:</strong> Advisers recommending
                defined benefit pension transfers must hold the FCA&apos;s specific pension
                transfer qualification (the AF3 or equivalent). Ask explicitly.
              </li>
              <li style={s.li}>
                <strong>Fee-based rather than commission-based:</strong> FCA-regulated
                advisers in the UK charge fees rather than earning commission. If an
                adviser is earning a percentage of your pension pot for recommending a
                transfer, that is a significant conflict of interest.
              </li>
              <li style={s.li}>
                <strong>QROPS specialisation:</strong> If QROPS is relevant to your
                situation (it usually is not), ensure your adviser holds specific
                qualifications in this area and can demonstrate FCA authorisation for
                pension transfer advice.
              </li>
              <li style={s.li}>
                <strong>UK expat focus:</strong> Look for firms that specifically serve
                UK nationals abroad. Specialist firms understand the SRT, the P85,
                NI voluntary contributions, and the interaction between UK and UAE
                financial rules in a way that generalist offshore advisers often do not.
              </li>
            </ul>

            <h3 style={s.h3}>Red flags</h3>
            <ul style={s.ul}>
              <li style={s.li}>Not on the FCA register (or only registered as &ldquo;appointed representative&rdquo; for a firm you cannot identify)</li>
              <li style={s.li}>Cold outreach via LinkedIn, WhatsApp, or unsolicited email</li>
              <li style={s.li}>Pushing QROPS transfers for Dubai residents (the 25% charge usually makes this inappropriate)</li>
              <li style={s.li}>Recommending complex offshore bond wrappers as &ldquo;tax-efficient&rdquo; solutions</li>
              <li style={s.li}>Unable or unwilling to explain their fee structure clearly</li>
              <li style={s.li}>Promising guaranteed investment returns</li>
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <div style={s.disclaimer}>
          <p style={s.disclaimerTitle}>Important Disclaimer</p>
          <p style={s.disclaimerText}>
            This guide is for general information only and does not constitute financial or
            pension advice. Pension rules are complex, frequently change, and the right
            course of action depends entirely on your personal circumstances. Nothing in
            this guide should be relied upon as a basis for any decision about your pension.
            Always take advice from a qualified, FCA-regulated financial adviser before
            making any decisions about pension transfers, contributions, or withdrawals.
            The FCA register is at register.fca.org.uk. Pension scams cause irreversible
            financial harm — if in doubt, do not proceed.
          </p>
        </div>

        {/* CTA */}
        <section style={{ marginBottom: '3rem' }}>
          <EmailCapture
            headline="Speak to a vetted UK pension specialist for expats"
            subheading="We can connect you with an FCA-regulated adviser who specialises in UK expats in Dubai — covering SIPPs, State Pension, and QROPS assessment. Leave your email and we'll be in touch."
            cta="Connect me with a pension specialist →"
            successMessage="✓ Thanks — we'll be in touch with specialist recommendations shortly."
          />
        </section>

        {/* Related */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={s.h2}>Related Guides</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
            <Link href="/guides/tax-and-hmrc" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>
              Tax &amp; HMRC Guide →
            </Link>
            <Link href="/guides/banking" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>
              Banking &amp; Personal Finance →
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
