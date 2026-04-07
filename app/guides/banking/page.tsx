import { Metadata } from 'next';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Banking & Personal Finance in Dubai: A Guide for UK Expats (2026)',
  description:
    'How to open a bank account in Dubai, the best banks for UK expats, sending money back to the UK, understanding UAE tax, and managing your UK financial obligations.',
};

export default function BankingGuide() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#1a1a1a', minHeight: '100vh' }}>
      <Header />

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl mb-12" style={{ marginBottom: '3rem' }}>
          <img
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20" style={{ maxWidth: '900px' }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              Banking & Finance
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: '#FFFFFF' }}>
              Banking & Finance in Dubai: A Guide for UK Expats (2026)
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#E0E7FF', maxWidth: '600px' }}>
              Dubai operates a zero personal income tax environment, which is one of its biggest attractions for UK professionals. But managing the financial transition from the UK involves more than just opening a new bank account. You need to think carefully about your UK obligations, your pension, and how you'll move money efficiently.
            </p>
          </div>
        </section>

        {/* Opening a UAE Bank Account */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            Opening a UAE Bank Account
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              You cannot open a bank account until you have your Emirates ID (typically 4-6 weeks after arriving). The required documents include:
            </p>
            <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>Emirates ID</li>
              <li>Passport</li>
              <li>UAE residence visa</li>
              <li>Salary certificate or employment letter</li>
              <li>Proof of address (tenancy contract)</li>
            </ul>
            <p style={{ marginBottom: '1rem' }}>
              Most accounts are opened in branch — online-only isn't yet standard in UAE. Expect 1-3 weeks from application to active account.
            </p>
          </div>
        </section>

        {/* Best Banks for UK Expats */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            Best Banks for UK Expats
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0A1628', marginBottom: '0.5rem' }}>
                Emirates NBD
              </h3>
              <p>
                Largest UAE bank. Good app, wide branch network, solid expat offering. Recommended for most new arrivals.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0A1628', marginBottom: '0.5rem' }}>
                HSBC UAE
              </h3>
              <p>
                Good for people with existing HSBC UK relationships. Useful for international transfers. Premium service.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0A1628', marginBottom: '0.5rem' }}>
                Mashreq
              </h3>
              <p>
                Good digital banking, faster account opening than some competitors.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0A1628', marginBottom: '0.5rem' }}>
                ADCB (Abu Dhabi Commercial Bank)
              </h3>
              <p>
                Strong expat packages, competitive rates.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0A1628', marginBottom: '0.5rem' }}>
                Liv. (Digital Bank by Emirates NBD)
              </h3>
              <p>
                App-first, quick to open, good for younger expats or as a secondary account.
              </p>
            </div>
          </div>
        </section>

        {/* Sending Money to the UK */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            Sending Money to the UK
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              Never use your bank's default international transfer rate — the fees and exchange rates are poor. Instead, consider these options:
            </p>
            <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><strong>Wise</strong> (formerly TransferWise) — best rates, low fees, fast</li>
              <li><strong>Barclays International</strong></li>
              <li><strong>Western Union</strong> for speed when needed</li>
            </ul>
            <p>
              Set up a Wise account before you leave the UK.
            </p>
          </div>
        </section>

        {/* UK Tax and HMRC */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            UK Tax and HMRC
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              Leaving the UK has tax implications. You need to notify HMRC you are leaving (form P85). You may still have UK tax obligations if you:
            </p>
            <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>Receive UK rental income</li>
              <li>Have a UK pension</li>
              <li>Have UK investments</li>
            </ul>
            <p style={{ marginBottom: '1rem' }}>
              The UAE-UK double taxation agreement prevents you being taxed twice. Strongly recommend speaking to a UK expat tax specialist (not a general accountant) before leaving.
            </p>
          </div>
        </section>

        {/* UK Pension */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            UK Pension
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              Do not ignore your UK pension when moving abroad. You can:
            </p>
            <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>Continue contributing (subject to limits)</li>
              <li>Leave it invested</li>
              <li>Consider transferring to a QROPS (overseas pension scheme — complex, get specialist advice)</li>
            </ul>
            <p>
              <strong>State pension:</strong> if you have enough qualifying years you'll still receive it at UK retirement age.
            </p>
          </div>
        </section>

        {/* UAE Taxation */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            UAE Taxation
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              The UAE has no personal income tax, but it does have other taxes you should know about:
            </p>
            <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><strong>VAT:</strong> 5% (introduced 2018)</li>
              <li><strong>Corporate tax:</strong> 9% on business profits over AED 375,000 (introduced 2023)</li>
              <li><strong>Capital gains tax:</strong> None</li>
              <li><strong>Inheritance tax:</strong> None</li>
              <li><strong>Wealth tax:</strong> None</li>
            </ul>
          </div>
        </section>

        {/* End of Service Gratuity */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            End of Service Gratuity
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              UAE employment law entitles employees to an end-of-service gratuity payment (similar to a UK redundancy payment) when leaving a job or the country. It is calculated at:
            </p>
            <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>21 days' salary per year for first 5 years</li>
              <li>30 days per year thereafter</li>
            </ul>
            <p>
              This is a genuine financial benefit — don't leave without claiming it.
            </p>
          </div>
        </section>

        {/* Cost of Living Overview */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            Cost of Living Overview
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              Dubai is not cheap but offers excellent value for high earners. Here are rough monthly budgets:
            </p>
            <ul style={{ paddingLeft: '2rem' }}>
              <li><strong>Single professional:</strong> AED 8,000–12,000/month including rent</li>
              <li><strong>Couple:</strong> AED 14,000–20,000/month</li>
              <li><strong>Family of 4 (with school fees):</strong> AED 25,000–40,000/month</li>
            </ul>
          </div>
        </section>

        {/* Patrick's Tip */}
        <section
          style={{
            marginBottom: '2.5rem',
            padding: '1.5rem',
            backgroundColor: '#F3F4F6',
            borderLeft: `5px solid #C9A84C`,
          }}
        >
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0A1628' }}>
            Patrick's Tip
          </h2>
          <p style={{ lineHeight: '1.8', color: '#374151' }}>
            "The end of service gratuity surprises most UK expats — they don't realise they're entitled to it. Keep records of your employment dates and salary carefully. I've seen people leave thousands of pounds on the table by not claiming correctly."
          </p>
        </section>

        {/* Related Guides */}
        <section
          style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: `2px solid #C9A84C`,
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            Related Guides
          </h2>
          <ul style={{ lineHeight: '2', paddingLeft: '2rem', color: '#374151' }}>
            <li>
              <Link href="/guides/visa-residency" style={{ color: '#0A1628', textDecoration: 'none', fontWeight: '500' }}>
                Visa & Residency Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/community" style={{ color: '#0A1628', textDecoration: 'none', fontWeight: '500' }}>
                Community & Life in Dubai
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
