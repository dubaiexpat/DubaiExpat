"use client";

import { useState } from "react";

interface EmailCaptureProps {
  headline?: string;
  subheading?: string;
  cta?: string;
  successMessage?: string;
}

export default function EmailCapture({
  headline = "Get the UK to Dubai Relocation Checklist — Free",
  subheading = "Everything you need to do before you leave, covering visas, HMRC, banking, removals and schools. Used by 500+ UK expats.",
  cta = "Send me the checklist →",
  successMessage = "✓ Check your inbox — your checklist is on its way.",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="rounded-2xl bg-[#0A1628] px-6 py-10 text-center shadow-md sm:px-10">
        <div className="mx-auto max-w-lg">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C]/20 text-2xl">
            ✓
          </div>
          <p className="text-lg font-semibold text-[#C9A84C]">{successMessage}</p>
          <p className="mt-2 text-sm text-slate-300">
            While you wait, explore the guides below.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl bg-[#0A1628] px-6 py-10 shadow-md sm:px-10">
      <div className="mx-auto max-w-2xl">
        {/* Badge */}
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
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#C9A84C]/50 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20"
          />
          <button
            type="submit"
            className="flex-shrink-0 rounded-xl bg-[#C9A84C] px-6 py-3 text-sm font-bold text-[#0A1628] transition hover:bg-[#d5b760] active:scale-95"
          >
            {cta}
          </button>
        </form>

        <p className="mt-3 text-xs text-slate-500">
          No spam. Unsubscribe any time. We&apos;re GDPR compliant.
        </p>
      </div>
    </section>
  );
}
