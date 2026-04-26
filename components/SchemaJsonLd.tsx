/**
 * SchemaJsonLd — Renders JSON-LD structured data for Article + BreadcrumbList + optional FAQPage.
 *
 * Drop on any guide/article page. SEO impact:
 * - Article schema makes the page eligible for rich results in Google
 * - BreadcrumbList replaces ugly URLs in SERP with clean breadcrumb trail
 * - FAQPage (when items provided) can earn FAQ rich snippets
 *
 * Usage:
 *   <SchemaJsonLd
 *     type="Article"
 *     title="Dubai Visa & Residency for UK Expats: 2026 Complete Guide"
 *     description="..."
 *     url="https://www.dubaiexpat.co.uk/guides/visa-residency"
 *     breadcrumbs={[
 *       { name: "Home", url: "https://www.dubaiexpat.co.uk/" },
 *       { name: "Guides", url: "https://www.dubaiexpat.co.uk/#categories" },
 *       { name: "Visa & Residency", url: "https://www.dubaiexpat.co.uk/guides/visa-residency" },
 *     ]}
 *     faqs={[
 *       { question: "...", answer: "..." },
 *     ]}
 *   />
 */

interface Breadcrumb {
  name: string;
  url: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface SchemaJsonLdProps {
  type?: "Article" | "WebPage";
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Breadcrumb[];
  faqs?: FaqItem[];
}

const SITE_NAME = "DubaiExpat";
const SITE_URL = "https://www.dubaiexpat.co.uk";
const PUBLISHER = {
  "@type": "Organization",
  name: "DubaiExpat",
  url: SITE_URL,
};

export default function SchemaJsonLd({
  type = "Article",
  title,
  description,
  url,
  datePublished,
  dateModified,
  breadcrumbs,
  faqs,
}: SchemaJsonLdProps) {
  const today = new Date().toISOString().split("T")[0];

  const schemas: object[] = [];

  // Main Article / WebPage schema
  if (type === "Article") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url,
      datePublished: datePublished || today,
      dateModified: dateModified || today,
      publisher: PUBLISHER,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    });
  } else {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url,
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    });
  }

  // Breadcrumb schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    });
  }

  // FAQ schema
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
