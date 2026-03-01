"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/visa-checker", label: "Visa Checker", highlight: true },
  { href: "/#visa-residency", label: "Visa Guides" },
  { href: "/#housing", label: "Housing" },
  { href: "/#schools", label: "Schools" },
  { href: "/#removals", label: "Removals" },
  { href: "/#banking", label: "Banking" },
  { href: "/#community", label: "Community" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 pb-4">
      <nav className="flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-baseline gap-2">
          <Link
            href="/"
            className="rounded-md bg-[#0A1628] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A84C] transition hover:opacity-90"
          >
            Dubai Expat
          </Link>
          <span className="hidden text-sm text-slate-500 sm:inline">
            Relocation guide for UK &amp; US expats
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-4 text-sm font-medium text-slate-700 md:flex md:gap-6">
          {NAV_LINKS.map((link) =>
            link.highlight ? (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full bg-[#C9A84C] px-4 py-1.5 text-xs font-semibold text-[#0A1628] transition hover:bg-[#d5b760]"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#0A1628]"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex flex-col items-center justify-center gap-1.5 p-1 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-5 bg-slate-700 transition-all duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-slate-700 transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-slate-700 transition-all duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-1 md:hidden">
          {NAV_LINKS.map((link) =>
            link.highlight ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-[#C9A84C] px-4 py-3 text-center text-sm font-semibold text-[#0A1628]"
              >
                {link.label} →
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
