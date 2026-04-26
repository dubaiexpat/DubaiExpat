#!/usr/bin/env node
/**
 * generate-sitemap.mjs — auto-generates public/sitemap.xml from the actual route tree.
 *
 * Runs as part of `npm run build` via a postbuild hook.
 * REPLACES the previous hand-maintained public/sitemap.xml (which had drifted from reality —
 * see SHARED/proposals/2026-04-26_seo_postmortem.md).
 *
 * How it works:
 * - Walks app/ for every page.tsx file → emits one URL per route
 * - Walks content/articles/*.mdx → emits one URL per MDX article (the dynamic [slug] route)
 * - Skips api/, dynamic [slug] segments (articles handled separately), and Next.js convention folders
 * - Writes public/sitemap.xml fresh on every build
 *
 * To exclude a page from the sitemap, add its path to EXCLUDE_PATHS below.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");
const ARTICLES_DIR = path.join(ROOT, "content", "articles");
const OUT_FILE = path.join(ROOT, "public", "sitemap.xml");

const BASE = "https://www.dubaiexpat.co.uk";

const EXCLUDE_PATHS = new Set([
  // Add any paths to keep out of Google here, e.g. "/admin"
]);

const PRIORITY_OVERRIDES = {
  "/": 1.0,
  "/visa-checker": 0.9,
  "/cost-of-living": 0.8,
  "/guides/visa-residency": 0.9,
};

const CHANGEFREQ_OVERRIDES = {
  "/": "weekly",
  "/articles/is-dubai-safe-2026": "weekly",
  "/articles/dubai-situation-update": "weekly",
};

function defaultPriority(p) {
  if (p === "/") return 1.0;
  const depth = p.split("/").filter(Boolean).length;
  if (depth === 1) return 0.8;
  if (depth === 2) return 0.7;
  return 0.6;
}

function defaultChangefreq(p) {
  if (p === "/") return "weekly";
  if (p.startsWith("/articles/") || p.startsWith("/case-studies/")) return "monthly";
  if (
    p === "/privacy" ||
    p === "/terms" ||
    p === "/cookies" ||
    p === "/affiliate-disclosure"
  )
    return "yearly";
  return "monthly";
}

function walkAppDir(dir, currentPath = "") {
  const routes = [];
  let entries;
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return routes;
  }

  if (entries.includes("page.tsx") && !currentPath.includes("[")) {
    routes.push(currentPath || "/");
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    let isDir = false;
    try {
      isDir = fs.statSync(fullPath).isDirectory();
    } catch {
      continue;
    }
    if (!isDir) continue;
    if (entry === "api" || entry.startsWith("_") || entry.startsWith(".")) continue;
    if (entry.startsWith("[")) continue;
    routes.push(...walkAppDir(fullPath, `${currentPath}/${entry}`));
  }

  return routes;
}

function walkArticles() {
  try {
    return fs
      .readdirSync(ARTICLES_DIR)
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => `/articles/${f.replace(/\.mdx$/, "")}`);
  } catch {
    return [];
  }
}

const today = new Date().toISOString().split("T")[0];

const allPaths = new Set([...walkAppDir(APP_DIR), ...walkArticles()]);

for (const excluded of EXCLUDE_PATHS) allPaths.delete(excluded);

const urlEntries = Array.from(allPaths)
  .sort()
  .map((p) => {
    const url = `${BASE}${p === "/" ? "" : p}`;
    const priority = PRIORITY_OVERRIDES[p] ?? defaultPriority(p);
    const changefreq = CHANGEFREQ_OVERRIDES[p] ?? defaultChangefreq(p);
    return [
      "  <url>",
      `    <loc>${url}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority.toFixed(1)}</priority>`,
      "  </url>",
    ].join("\n");
  });

const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urlEntries,
  "</urlset>",
  "",
].join("\n");

fs.writeFileSync(OUT_FILE, sitemapXml);

console.log(`✅ Sitemap generated: ${allPaths.size} URLs → ${path.relative(ROOT, OUT_FILE)}`);
