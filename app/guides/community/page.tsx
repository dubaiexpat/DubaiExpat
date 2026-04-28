import { Metadata } from 'next';
import Header from '@/components/Header';
import Link from 'next/link';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import RelatedGuides from '@/components/RelatedGuides';
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata({
  title: "Dubai Expat Community: Best Facebook Groups & Where to Meet UK Expats (2026)",
  description: "Where UK expats actually meet in Dubai — best Facebook groups (Dubai Buy & Sell, expat networks), social clubs, healthcare, and how to find your community fast.",
  path: "/guides/community",
});
const SCHEMA_URL = 'https://www.dubaiexpat.co.uk/guides/community';
const BREADCRUMBS = [
  { name: 'Home', url: 'https://www.dubaiexpat.co.uk/' },
  { name: 'Guides', url: 'https://www.dubaiexpat.co.uk/#categories' },
  { name: 'Community', url: SCHEMA_URL },
];

const RELATED = [
  { title: 'Dubai Visa & Residency', href: '/guides/visa-residency', description: 'Sort the visa first, then build the network' },
  { title: 'Renting in Dubai', href: '/guides/housing', description: 'Best areas to find your tribe' },
  { title: 'Dubai Cost of Living', href: '/cost-of-living', description: 'Budget for socialising and clubs' },
  { title: 'Dubai Expat Health Insurance', href: '/articles/expat-health-insurance-dubai-cigna-bupa-allianz', description: 'Health network as part of your support system' },
];

// SafetyWing Ambassador link — referenceID 26507814, placement-tracked
const SAFETYWING_COMMUNITY =
  "https://safetywing.com/?referenceID=26507814&utm_source=26507814&utm_medium=Ambassador&utm_campaign=dx-community-healthcare";

export default function CommunityGuide() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#1a1a1a', minHeight: '100vh' }}>
      <SchemaJsonLd
        type="Article"
        title="Dubai Expat Community: Best Facebook Groups & Where to Meet UK Expats (2026)"
        description="Where UK expats actually meet in Dubai — best Facebook groups, social clubs, and how to find your community fast."
        url={SCHEMA_URL}
        breadcrumbs={BREADCRUMBS}
      />
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
            <span className="font-medium text-[#0A1628]">Community &amp; Life</span>
          </div>
        </div>
      </div>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl mb-12">
          <img
            src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              Life &amp; Community
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
              Community &amp; Life in Dubai: A Guide for UK Expats (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed text-base sm:text-lg">
              Beyond the logistics of visas and housing, what is it actually like to live in Dubai as a British expat? The honest answer is: very good, with some genuine adjustments to make. Dubai is a safe, modern, well-organised city that looks after its residents well. But it is culturally different from the UK in ways that matter.
            </p>
          </div>
        </section>

        {/* Healthcare */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            Healthcare
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              Dubai has excellent private healthcare. All residents are required to have health insurance (usually provided by employer). Key hospitals include:
            </p>
            <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>American Hospital Dubai</li>
              <li>Mediclinic</li>
              <li>Aster Hospital</li>
              <li>Cleveland Clinic Abu Dhabi</li>
            </ul>
            <p style={{ marginBottom: '1rem' }}>
              NHS-style care does not exist — all healthcare is private and insurance-funded. Prescriptions work differently: many UK medications require a new UAE prescription. Bring a 3-month supply of any regular medication and a letter from your UK GP.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              If you're arriving before your employer insurance kicks in, or you're on a freelancer visa with basic cover, many expats use{' '}
              <a
                href={SAFETYWING_COMMUNITY}
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={{ color: '#c8102e', textDecoration: 'underline' }}
              >
                SafetyWing Nomad Insurance
              </a>
              {' '}as bridge cover. It's designed for remote workers and expats, covers medical and travel emergencies globally, and runs from around $45/month with no long-term commitment.
            </p>
          </div>
        </section>

        {/* Driving in Dubai */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            Driving in Dubai
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              Dubai is a car-centric city. UK driving licence holders can exchange for a UAE licence without a test (straightforward process, takes 1–2 days, cost approx AED 500). You must do this within the first year. RTA (Roads and Transport Authority) handles licences.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Traffic can be heavy — rush hour on Sheikh Zayed Road can be brutal. Salik toll gates operate on major roads (small charges, registered to your car). Speed cameras are everywhere, and fines are significant.
            </p>
          </div>
        </section>

        {/* Culture and Etiquette */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            Culture and Etiquette
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              Dubai is a Muslim city in a Muslim country. Important cultural norms to be aware of:
            </p>
            <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><strong>During Ramadan:</strong> no eating, drinking or smoking in public during daylight hours (includes your car)</li>
              <li><strong>Modest dress:</strong> expected in malls, souks and public spaces (shoulders and knees covered — swimwear is fine at pools/beaches)</li>
              <li><strong>Public displays of affection:</strong> should be kept minimal</li>
              <li><strong>Alcohol:</strong> legal in licensed premises (restaurants, hotels, bars) but cannot be consumed in public</li>
            </ul>
            <p>
              Respecting these norms is not just polite — it's the law.
            </p>
          </div>
        </section>

        {/* Finding Your Community */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            Finding Your Community
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              Dubai has a huge and welcoming British expat community. Best ways to find it:
            </p>
            <ul style={{ paddingLeft: '2rem' }}>
              <li><strong>InterNations</strong> — global expat network, very active in Dubai</li>
              <li><strong>Facebook Groups</strong> — Dubai Expats, British Expats Dubai, specific area groups like JVC Community or Arabian Ranches Residents</li>
              <li><strong>British Business Group Dubai</strong></li>
              <li><strong>Sports clubs and recreational groups</strong> — rugby, cricket, running clubs, cycling</li>
            </ul>
          </div>
        </section>

        {/* Things to Do */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            Things to Do
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              Dubai offers an extraordinary range of activities:
            </p>
            <ul style={{ paddingLeft: '2rem' }}>
              <li><strong>Beaches:</strong> JBR, Kite Beach, La Mer</li>
              <li><strong>Outdoor adventures:</strong> desert safaris, day trips to Abu Dhabi and Oman</li>
              <li><strong>Food and dining:</strong> world-class restaurants, Michelin-starred chefs</li>
              <li><strong>Fitness and wellness:</strong> corniche and parks (beautiful Oct–April), skiing (indoors at Mall of the Emirates)</li>
              <li><strong>Family entertainment:</strong> theme parks</li>
              <li><strong>Culture:</strong> Al Fahidi, Dubai Frame, Alserkal Avenue arts district</li>
            </ul>
          </div>
        </section>

        {/* The Heat */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            The Heat
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              Summer (June to September) is extreme: 40–48°C with high humidity. Most expat families leave for 4–6 weeks in summer. Air conditioning is universal and powerful — factor in higher utility bills (DEWA — Dubai Electricity and Water Authority).
            </p>
            <p>
              October to April is genuinely beautiful: warm, sunny, low humidity. This is when Dubai shines.
            </p>
          </div>
        </section>

        {/* Schooling, Religion and Daily Life */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            Schooling, Religion and Daily Life
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              Some key aspects of daily life in Dubai:
            </p>
            <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><strong>Weekend:</strong> Friday is the Islamic holy day; the UAE weekend is Saturday–Sunday (changed from Fri–Sat in 2022)</li>
              <li><strong>Prayer calls (Adhan):</strong> broadcast from mosques five times daily — a beautiful part of daily life but one to be aware of</li>
              <li><strong>Pork products:</strong> available in some supermarkets (marked in separate sections)</li>
              <li><strong>Alcohol:</strong> sold in licensed stores (MMI, African+Eastern) with a personal licence</li>
            </ul>
          </div>
        </section>

        {/* Domestic Help */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1628' }}>
            Domestic Help
          </h2>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '1rem' }}>
              Many expat families employ domestic helpers (housekeepers, nannies, drivers). This is culturally normal and more affordable than in the UK. Standard live-in housekeeper salary is AED 1,500–2,500/month plus accommodation and flights home.
            </p>
            <p>
              There are specific visa requirements and contracts required — use a reputable agency.
            </p>
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
            "Give yourself six months before you judge whether Dubai is right for you. The first three months are disorienting — you're dealing with admin, adjusting to heat, missing home. By month six, most people are genuinely thriving. The ones who leave early almost always say they wish they'd given it longer."
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
              <Link href="/guides/housing" style={{ color: '#0A1628', textDecoration: 'none', fontWeight: '500' }}>
                Housing & Accommodation Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/banking" style={{ color: '#0A1628', textDecoration: 'none', fontWeight: '500' }}>
                Banking & Finance in Dubai
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <RelatedGuides items={RELATED} />
    </div>
  );
}
