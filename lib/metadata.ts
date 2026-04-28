import type { Metadata } from "next";

/**
 * Single source of truth for per-page metadata. Every page-level
 * `export const metadata` should call this so canonical, og:*, and
 * twitter:card tags are guaranteed present and consistent.
 *
 * Defaults from app/layout.tsx (siteName, locale, default image) merge
 * in automatically — only override what's page-specific.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  ogImage?: string;
  publishedTime?: string;
}): Metadata {
  const { title, description, path, type = "article", ogImage, publishedTime } = opts;
  const image = ogImage ?? "/og-default.png";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url: path,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
