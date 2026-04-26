/**
 * RelatedGuides — Renders an in-body "Related guides" block at the end of any guide/article.
 * Creates topical clusters by linking 4-6 contextually-related pages.
 *
 * SEO impact:
 * - Spreads PageRank across topical clusters
 * - Helps Google understand related content groups
 * - Increases user dwell time and pages-per-session
 *
 * Usage:
 *   <RelatedGuides
 *     items={[
 *       { title: "UK Tax When Moving to Dubai", href: "/guides/tax-and-hmrc" },
 *       { title: "Open a Dubai Bank Account", href: "/guides/banking" },
 *       ...
 *     ]}
 *   />
 */

import Link from "next/link";

interface RelatedGuide {
  title: string;
  href: string;
  description?: string;
}

interface RelatedGuidesProps {
  items: RelatedGuide[];
  heading?: string;
}

export default function RelatedGuides({
  items,
  heading = "Related guides",
}: RelatedGuidesProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-8 py-12 border-t border-slate-200">
      <h2 className="text-2xl font-semibold text-[#0A1628] mb-6">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block p-5 rounded-xl border border-slate-200 hover:border-[#0A1628] hover:shadow-md transition-all bg-white"
          >
            <h3 className="font-semibold text-[#0A1628] mb-1">{item.title}</h3>
            {item.description && (
              <p className="text-sm text-slate-600">{item.description}</p>
            )}
            <span className="text-sm text-blue-600 mt-2 inline-block">Read guide →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
