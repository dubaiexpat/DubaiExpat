#!/usr/bin/env node
/**
 * check-public-app-conflicts.mjs
 *
 * Pre-build CI check that fails the build when a Next.js app/ special file
 * (sitemap.ts, robots.ts, manifest.ts, etc.) coexists with its static
 * /public counterpart.
 *
 * Why this exists:
 * Next.js + Vercel resolve URL requests by checking /public BEFORE app routes.
 * If both `app/sitemap.ts` and `public/sitemap.xml` exist, the static file
 * silently wins — making the dynamic generator useless.
 *
 * The 26 April postmortem fix added `app/sitemap.ts` as the source of truth.
 * But `public/sitemap.xml` (and an unrelated `scripts/generate-sitemap.mjs`
 * postbuild that wrote it) were left in place, so the dynamic file never
 * actually served. This check would have caught that on the first commit.
 *
 * See SHARED/lessons.md 2026-04-26 entry "Replace-not-supersede".
 *
 * To add a new conflict pattern, append to CONFLICTS below.
 */

import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const CONFLICTS = [
  // [appFile candidates, publicFile, description]
  {
    app: ["app/sitemap.ts", "app/sitemap.tsx", "app/sitemap.js"],
    public: "public/sitemap.xml",
    why:
      "Next.js serves /public files before app routes, so the static sitemap.xml " +
      "would silently override the dynamic generator.",
  },
  {
    app: ["app/robots.ts", "app/robots.tsx", "app/robots.js"],
    public: "public/robots.txt",
    why: "Same /public-wins-over-app-route pattern as sitemap.",
  },
  {
    app: ["app/manifest.ts", "app/manifest.tsx", "app/manifest.js"],
    public: "public/manifest.json",
    why: "Same /public-wins-over-app-route pattern.",
  },
  {
    app: ["app/manifest.ts", "app/manifest.tsx", "app/manifest.js"],
    public: "public/manifest.webmanifest",
    why: "Same /public-wins-over-app-route pattern.",
  },
  {
    app: ["app/favicon.ts", "app/favicon.tsx", "app/icon.tsx", "app/icon.ts"],
    public: "public/favicon.ico",
    why: "If app/icon.tsx exists, the static favicon.ico in /public will override it.",
  },
];

let foundConflict = false;
const issues = [];

for (const { app, public: pub, why } of CONFLICTS) {
  const presentAppFile = app.find((f) => existsSync(join(ROOT, f)));
  const publicExists = existsSync(join(ROOT, pub));

  if (presentAppFile && publicExists) {
    foundConflict = true;
    issues.push({ appFile: presentAppFile, publicFile: pub, why });
  }
}

if (foundConflict) {
  console.error("");
  console.error(
    "❌ CONFLICT: Next.js app/ special file coexists with /public static file."
  );
  console.error("");
  for (const { appFile, publicFile, why } of issues) {
    console.error(`  • ${appFile} ↔ ${publicFile}`);
    console.error(`    ${why}`);
    console.error(
      `    Fix: delete ${publicFile} so the dynamic generator (${appFile}) is the source of truth.`
    );
    console.error("");
  }
  console.error(
    "Build halted. See SHARED/lessons.md 2026-04-26 entry 'Replace-not-supersede' for context."
  );
  process.exit(1);
}

console.log("✓ No public/app conflicts detected");
