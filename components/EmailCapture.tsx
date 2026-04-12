"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

interface EmailCaptureProps {
  headline?: string;
  subheading?: string;
  cta?: string;
  successMessage?: string;
  /** Where this capture is placed on the page */
  sourceType?: "inline-cta" | "footer" | "exit-intent" | "magnet-cta";
  /** Which magnet this capture is offering, if any */
  firstMagnet?: string;
  /** Optional explicit override for SOURCE_PAGE (defaults to current pathname) */
  sourcePage?: string;
}

export default function EmailCapture({
  headline = "Get the UK to Dubai Relocation Checklist — Free",
  subheading = "Everything you need to do before you leave, covering visas, HMRC, banking, removals and schools. Used by 500+ UK expats.",
  cta = "Send me the checklist →",
  successMessage = "✓ Check your inbox — confirm your email and your checklist is on its way.",
  sourceType = "inline-cta",
  firstMagnet = "dx-relocation-checklist",
  sourcePage,
}: EmailCaptureProps) {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          sourcePage: sourcePage || pathname || "unknown",
          sourceType,
          firstMagnet,
        }),
      });
    } catch {
      // Silent fail — we still show success to the user so they aren't
      // blocked by a transient network hiccup. Brevo logs + server logs
      // are the source of truth.
    }

    setStatus("done");
  }

  if (status === "done") {
    return (
      <section className="rounded-2xl bg-[#0A1628] px-6 py-10 text-center shadow-md sm:px-10">
        <div className="mx-auto max-w-lg">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C]/20 text-2xl">
            ✓
          </div>
          <p className="text-lg font-semibold text-[#C9A84C]">{successMessage}</p>
          <p className="mt-2 text-sm text-slate-300">
            Your checklist should arrive in the next few minutes.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl bg-[#0A1628] px-6 py-10 shadow-md sm:px-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/15 px-3 py-1 text-xs font-semibold text-[#C9A84C] ring-1 ring-[#C9A84C]/30">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
          Free
        </div>

        <h2 className="text-2xl font-bold text-white sm:text-3xl">{headline}</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{subheading}</p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            disabled={status === "loading"}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#C9A84C]/50 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex-shrink-0 rounded-xl bg-[#C9A84C] px-6 py-3 text-sm font-bold text-[#0A1628] transition hover:bg-[#d5b760] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending…" : cta}
          </button>
        </form>

        <p className="mt-3 text-xs text-slate-500">
          No spam. Double opt-in. Unsubscribe any time. We&apos;re GDPR compliant.
        </p>
      </div>
    </section>
  );
}
