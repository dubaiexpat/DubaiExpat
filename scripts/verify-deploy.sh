#!/bin/bash
# verify-deploy.sh — post-deploy URL verification for DubaiExpat
#
# Run after a Vercel deploy completes (or any time you want to confirm the
# live site is serving the right content). Catches the class of regression
# where a fix was committed and pushed but isn't actually live (e.g. the
# 26 April static-vs-dynamic sitemap regression).
#
# Usage:
#   bash scripts/verify-deploy.sh
#   npm run verify-deploy
#
# Exit code: 0 if all checks pass, 1 if any check fails.

set -u
BASE="https://www.dubaiexpat.co.uk"
TODAY_UTC=$(date -u +%Y-%m-%d)
FAIL=0
PASS=0

check() {
  local url="$1"
  local pattern="$2"
  local description="$3"
  printf "  %-55s " "$description"
  local body
  body=$(curl -sS --max-time 15 "$url" 2>/dev/null || true)
  if [ -z "$body" ]; then
    echo "❌ NO RESPONSE"
    FAIL=$((FAIL + 1))
    return
  fi
  if echo "$body" | grep -q "$pattern"; then
    echo "✓"
    PASS=$((PASS + 1))
  else
    echo "❌ MISSING: '$pattern'"
    echo "      First 200 bytes: $(echo "$body" | head -c 200 | tr '\n' ' ')..."
    FAIL=$((FAIL + 1))
  fi
}

echo ""
echo "==============================================================="
echo "DubaiExpat post-deploy verification"
echo "Time: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "==============================================================="
echo ""
echo "Sitemap + robots:"
# Sitemap should be dynamic (Next.js sitemap.ts route output) — not the legacy static XML
check "$BASE/sitemap.xml" "dubaiexpat.co.uk" "/sitemap.xml serves with site URL"
check "$BASE/sitemap.xml" "$TODAY_UTC" "/sitemap.xml has fresh lastmod (today UTC)"
check "$BASE/robots.txt" "Sitemap" "/robots.txt links to sitemap"

echo ""
echo "Live MDX articles (post-26-Apr fee correction + Surfshark removal):"
# Verify the corrected fee is in the deployed best-british-schools article
check "$BASE/articles/best-british-schools-dubai-uk-expats-2026" "88,615" "DX-05 article shows KHDA-verified Kings' Y7 fee"
# Surfshark should be GONE from the VPN guide after 26 Apr removal
check "$BASE/guides/internet-and-vpn" "NordVPN" "VPN guide still recommends NordVPN"
if curl -sS --max-time 15 "$BASE/guides/internet-and-vpn" 2>/dev/null | grep -qi "surfshark"; then
  echo "  ❌ /guides/internet-and-vpn still mentions Surfshark (should be removed per 26 Apr decision)"
  FAIL=$((FAIL + 1))
else
  printf "  %-55s ✓\n" "VPN guide no longer mentions Surfshark"
  PASS=$((PASS + 1))
fi

echo ""
echo "NordVPN affiliate tracking present:"
check "$BASE/guides/internet-and-vpn" "aff_id=145336" "NordVPN affiliate aff_id present in VPN guide"
check "$BASE/guides/banking" "aff_id=145336" "NordVPN affiliate aff_id present in banking guide"

echo ""
echo "==============================================================="
if [ $FAIL -eq 0 ]; then
  echo "✓ All $PASS checks passed."
  echo "==============================================================="
  exit 0
else
  echo "❌ $FAIL check(s) failed, $PASS passed."
  echo ""
  echo "Investigate before assuming the deploy is healthy."
  echo "Common causes:"
  echo "  - Vercel build hasn't finished yet (wait 1-2 min, retry)"
  echo "  - Build failed (check Vercel dashboard)"
  echo "  - Static file overriding dynamic route (see scripts/check-public-app-conflicts.mjs)"
  echo "  - Code change pushed but file path/component not actually used (e.g. ArticleLayout schema regression 26 Apr)"
  echo "==============================================================="
  exit 1
fi
