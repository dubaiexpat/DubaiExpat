"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const PRIMARY_NAV = [
  { href: "/", label: "Home" },
  { href: "/guides/visa-residency", label: "Visas & Residency" },
  { href: "/guides/housing", label: "Housing" },
  { href: "/guides/tax-and-hmrc", label: "Tax & HMRC" },
  { href: "/guides/banking", label: "Banking & Finance" },
  { href: "/guides/schools", label: "Schools & Family" },
  { href: "/guides/removals", label: "Removals & Shipping" },
];

const SECONDARY_NAV = [
  { href: "/cost-of-living", label: "Cost of Living" },
  { href: "/guides/community", label: "Community & Life" },
  { href: "/guides/nightlife", label: "Nightlife" },
  { href: "/guides/concierge", label: "Concierge" },
  { href: "/guides/domestic-help", label: "Domestic Help & Drivers" },
];

const ARTICLES_NAV = [
  { href: "/articles/is-dubai-safe-2026", label: "Is Dubai Safe in 2026?" },
  { href: "/articles/dubai-situation-update", label: "Dubai Situation Update" },
  { href: "/articles/should-i-still-move-to-dubai", label: "Should I Still Move?" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ── Mobile top bar ─────────────────────────────────── */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 flex h-14 items-center justify-between bg-[#0A1628] px-4 shadow-lg">
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C] hover:opacity-80 transition"
          onClick={() => setOpen(false)}
        >
          Dubai Expat
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col items-center justify-center gap-1.5 p-2"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile slide-out menu ───────────────────────────── */}
      {open && (
        <div className="md:hidden fixed inset-0 top-14 z-40 overflow-y-auto bg-[#0A1628] px-4 py-4">
          <Link
            href="/visa-checker"
            onClick={() => setOpen(false)}
            className="mb-4 flex items-center justify-center rounded-xl bg-[#C9A84C] px-4 py-3 text-sm font-bold text-[#0A1628]"
          >
            Visa Checker →
          </Link>
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Articles on mobile */}
          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="mb-2 px-4 text-[10px] font-semibold uppercase tracking-widest text-[#C9A84C]">
              Latest articles
            </p>
            {ARTICLES_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  pathname === link.href
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Secondary links on mobile */}
          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="mb-2 px-4 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              More guides
            </p>
            {SECONDARY_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  pathname === link.href
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── Desktop sidebar ─────────────────────────────────── */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 flex-col bg-[#0A1628] z-30">
        {/* Brand */}
        <div className="px-6 py-6 border-b border-white/10 flex-shrink-0">
          <Link
            href="/"
            className="block text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C] hover:opacity-80 transition"
          >
            Dubai Expat
          </Link>
          <p className="mt-1 text-[11px] text-slate-400 leading-tight">
            Relocation guide for UK expats
          </p>
        </div>

        {/* Primary nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          <Link
            href="/visa-checker"
            className="mb-3 flex items-center justify-center rounded-xl bg-[#C9A84C] px-4 py-2.5 text-xs font-bold text-[#0A1628] hover:bg-[#d5b760] transition"
          >
            Visa Checker →
          </Link>
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center rounded-lg px-3 py-2.5 text-sm transition ${
                pathname === link.href
                  ? "bg-white/10 text-white font-semibold"
                  : "text-slate-400 hover:bg-white/5 hover:text-white font-medium"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Articles nav */}
        <div className="border-t border-white/10 px-3 py-3 flex-shrink-0">
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-[#C9A84C]">
            Latest articles
          </p>
          {ARTICLES_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center rounded-lg px-3 py-2 text-xs transition ${
                pathname === link.href
                  ? "bg-white/10 text-white font-semibold"
                  : "text-slate-500 hover:bg-white/5 hover:text-slate-300 font-medium"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Secondary nav + footer */}
        <div className="border-t border-white/10 px-3 py-4 flex-shrink-0">
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            More guides
          </p>
          {SECONDARY_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center rounded-lg px-3 py-2 text-xs transition ${
                pathname === link.href
                  ? "bg-white/10 text-white font-semibold"
                  : "text-slate-500 hover:bg-white/5 hover:text-slate-300 font-medium"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <p className="mt-4 px-3 text-[11px] text-slate-600 leading-tight">
            © 2026 Dubai Expat
          </p>
        </div>
      </aside>
    </>
  );
}
