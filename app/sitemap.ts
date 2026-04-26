/**
 * Dynamic sitemap.xml — auto-generated at build time from the actual route tree.
 *
 * REPLACES public/sitemap.xml (which was hand-maintained and drifted from reality —
 * see SHARED/proposals/2026-04-26_seo_postmortem.md and lessons.md 2026-04-26).
 *
 * How it works:
 * - Walks app/ for every page.tsx file → emits one URL per route.
 * - Walks content/articles/*.mdx → emits one URL per MDX article (the dynamic [slug] route).
 * - Skips API routes, layout/loading/error files, and the legacy public/sitemap.xml itself.
 *
 * If you add a new page.tsx or .mdx article anywhere, it is automatically in the sitemap on next deploy.
 * If you ever need to exclude a page, add its path to the EXCLUDE_PATHS array below.
 */

import type { MetadataRoute } from "next";
import { readdirSync, statSync } from "fs";
import { join } from "path";

const BASE = "https://www.dubaiexpat.co.uk";
const APP_DIR = join(process.cwd(), "app");
const ARTICLES_DIR = join(process.cwd(), "content", "articles");

// Pages that must NOT appear in the sitemap (private, redirect-only, etc.)
const EXCLUDE_PATHS = new Set<string>([
  // Add any paths you want to keep out of Google here, e.g. "/admin"
]);

// Per-path priority + changefreq overrides. Defaults applied for anything not listed.
const PRIORITY_OVERRIDES: Record<string, number> = {
  "/": 1.0,
  "/visa-checker": 0.9,
  "/cost-of-living": 0.8,
  "/guides/visa-residency": 0.9,
};

const CHANGEFREQ_OVERRIDES: Record<string, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
  "/": "weekly",
  "/articles/is-dubai-safe-2026": "weekly",
  "/articles/dubai-situation-update": "weekly",
};

// Default priority/changefreq based on path depth
function defaultPriority(path: string): number {
  if (path === "/") return 1.0;
  const depth = path.split("/").filter(Boolean).length;
  if (depth === 1) return 0.8;
  if (depth === 2) return 0.7;
  return 0.6;
}

function defaultChangefreq(
  path: string
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (path === "/") return "weekly";
  if (path.startsWith("/articles/") || path.startsWith("/case-studies/")) return "monthly";
  if (path === "/privacy" || path === "/terms" || path === "/cookies" || path === "/affiliate-disclosure") return "yearly";
  return "monthly";
}

/**
 * Recursively walks the app/ directory and returns every route that has a page.tsx.
 * Skips dynamic [slug] routes (handled separately via the MDX article walker).
 * Skips api/, layout/error/loading files.
 */
function walkAppDir(dir: string, currentPath = ""): string[] {
  const routes: string[] = [];
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return routes;
  }

  // If this directory has a page.tsx and isn't a dynamic segment, emit the route
  if (entries.includes("page.tsx") && !currentPath.includes("[")) {
    routes.push(currentPath || "/");
  }

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    let isDir = false;
    try {
      isDir = statSync(fullPath).isDirectory();
    } catch {
      continue;
    }

    if (!isDir) continue;
    // Skip Next.js convention folders that don't represent routes
    if (entry === "api" || entry.startsWith("_") || entry.startsWith(".")) continue;
    // Skip dynamic-segment folders (e.g. [slug]) — articles are handled separately
    if (entry.startsWith("[")) continue;

    routes.push(...walkAppDir(fullPath, `${currentPath}/${entry}`));
  }

  return routes;
}

/**
 * Returns one route per .mdx file in content/articles/.
 * These render via the dynamic /articles/[slug] route.
 */
function walkArticles(): string[] {
  try {
    return readdirSync(ARTICLES_DIR)
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => `/articles/${f.replace(/\.mdx$/, "")}`);
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const allPaths = new Set<string>([
    ...walkAppDir(APP_DIR),
    ...walkArticles(),
  ]);

  // Remove excluded paths
  for (const excluded of EXCLUDE_PATHS) {
    allPaths.delete(excluded);
  }

  // Convert to sitemap entries
  return Array.from(allPaths)
    .sort()
    .map((path) => ({
      url: `${BASE}${path === "/" ? "" : path}`,
      lastModified: today,
      changeFrequency: CHANGEFREQ_OVERRIDES[path] ?? defaultChangefreq(path),
      priority: PRIORITY_OVERRIDES[path] ?? defaultPriority(path),
    }));
}
