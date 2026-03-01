import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 pb-4">
      <nav className="flex items-center justify-between gap-4">
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

        <div className="hidden items-center gap-4 text-sm font-medium text-slate-700 md:flex md:gap-6">
          <Link href="/visa-checker" className="hover:text-[#0A1628]">
            Visa Checker
          </Link>
          <a href="/#visa-residency" className="hover:text-[#0A1628]">
            Visa Guides
          </a>
          <a href="/#housing" className="hover:text-[#0A1628]">
            Housing
          </a>
          <a href="/#schools" className="hover:text-[#0A1628]">
            Schools
          </a>
          <a href="/#removals" className="hover:text-[#0A1628]">
            Removals
          </a>
          <a href="/#banking" className="hover:text-[#0A1628]">
            Banking
          </a>
          <a href="/#community" className="hover:text-[#0A1628]">
            Community
          </a>
        </div>

        <div className="flex md:hidden">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Menu
          </span>
        </div>
      </nav>
    </header>
  );
}
