"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

const QUESTIONS = [
  {
    id: "reason",
    question: "What's bringing you to Dubai?",
    options: [
      { value: "job_offer", label: "Job offer from UAE employer" },
      { value: "own_business", label: "Starting my own business" },
      { value: "freelance_remote", label: "Freelance or remote work" },
      { value: "property_investment", label: "Property investment" },
      { value: "retirement", label: "Retirement" },
      { value: "not_sure", label: "Not sure yet" },
    ],
  },
  {
    id: "salary",
    question: "What is your monthly salary or expected earnings?",
    options: [
      { value: "under_3k", label: "Under £3,000/month" },
      { value: "3k_8k", label: "£3,000–£8,000/month" },
      { value: "over_8k", label: "Over £8,000/month" },
      { value: "variable", label: "Variable – self employed" },
    ],
  },
  {
    id: "qualification",
    question: "What is your highest qualification?",
    options: [
      { value: "no_degree", label: "No university degree" },
      { value: "bachelors", label: "Bachelor's degree" },
      { value: "masters_phd", label: "Master's degree or PhD" },
    ],
  },
  {
    id: "property_2m",
    question:
      "Are you buying or do you already own UAE property worth AED 2 million (approx £430,000) or more?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "planning", label: "Planning to within 12 months" },
    ],
  },
  {
    id: "freelance",
    question: "What best describes your working situation?",
    options: [
      { value: "yes", label: "Freelance or self-employed" },
      { value: "no", label: "Employed by a company" },
      { value: "business_owner", label: "I own or run a business" },
      { value: "not_working", label: "Not currently working" },
    ],
  },
  {
    id: "age",
    question: "How old are you?",
    options: [
      { value: "under_55", label: "Under 55" },
      { value: "55_plus", label: "55 or over" },
    ],
  },
  {
    id: "sponsor",
    question: "Does a UAE employer already want to sponsor your visa?",
    options: [
      { value: "yes", label: "Yes, I have a job offer" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "family",
    question: "Are you bringing family members to Dubai?",
    options: [
      { value: "just_me", label: "Just me" },
      { value: "partner", label: "Me and my partner" },
      { value: "partner_children", label: "Me, partner and children" },
    ],
  },
] as const;

type Answers = Partial<Record<(typeof QUESTIONS)[number]["id"], string>>;

type VisaType =
  | "golden"
  | "green"
  | "freelance"
  | "employment"
  | "retirement"
  | "explore";

function getVisaResult(answers: Answers): VisaType {
  const reason = answers.reason;
  const salary = answers.salary;
  const qualification = answers.qualification;
  const property2m = answers.property_2m;
  const freelance = answers.freelance;
  const age = answers.age;
  const sponsor = answers.sponsor;

  const hasDegree =
    qualification === "bachelors" || qualification === "masters_phd";

  if (age === "55_plus") return "retirement";
  if (sponsor === "yes") return "employment";
  if (property2m === "yes") return "golden";
  if (salary === "over_8k" && hasDegree) return "golden";
  if (salary === "3k_8k" && hasDegree) return "green";
  if (freelance === "yes" && hasDegree) return "green";
  if (freelance === "yes" || salary === "variable") return "freelance";
  return "explore";
}

const VISA_NAMES: Record<VisaType, string> = {
  golden: "Golden Visa (10 years)",
  green: "Green Visa (5 years)",
  freelance: "Freelance Visa (2 years)",
  employment: "Employment Visa (2–3 years)",
  retirement: "Retirement Visa (5 years)",
  explore: "Multiple visa routes",
};

export default function VisaCheckerPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const currentQuestion = QUESTIONS[step];
  const isLastStep = step === QUESTIONS.length - 1;
  const progress = ((step + 1) / QUESTIONS.length) * 100;

  function handleSelect(value: string) {
    const next = { ...answers, [currentQuestion.id]: value };
    setAnswers(next);
    if (isLastStep) {
      setShowEmailGate(true);
    } else {
      setStep((s) => s + 1);
    }
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  const resultType = showEmailGate ? getVisaResult(answers) : null;
  const visaName = resultType ? VISA_NAMES[resultType] : null;

  return (
    <div className="min-h-screen bg-zinc-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <Header />

        {/* Breadcrumb */}
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="flex items-center gap-1 hover:text-[#0A1628]">
            <span>←</span>
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="font-medium text-[#0A1628]">Visa Checker</span>
        </div>

        <main className="mt-6 flex flex-1 flex-col">
          {!showEmailGate ? (
            /* ── Questionnaire ─────────────────────────────── */
            <>
              <div className="mb-6">
                <div className="flex justify-between text-sm font-medium text-[#0A1628]">
                  <span>
                    Question {step + 1} of {QUESTIONS.length}
                  </span>
                </div>
                <div
                  className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200"
                  role="progressbar"
                  aria-valuenow={step + 1}
                  aria-valuemin={1}
                  aria-valuemax={QUESTIONS.length}
                >
                  <div
                    className="h-full rounded-full bg-[#C9A84C] transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <section
                key={step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 sm:p-8"
              >
                <h2 className="text-xl font-semibold text-[#0A1628] sm:text-2xl">
                  {currentQuestion.question}
                </h2>
                <ul className="mt-6 space-y-3">
                  {currentQuestion.options.map((opt) => (
                    <li key={opt.value}>
                      <button
                        type="button"
                        onClick={() => handleSelect(opt.value)}
                        className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-left text-sm font-medium text-slate-800 transition hover:border-[#C9A84C]/60 hover:bg-[#0A1628]/5 focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 sm:py-4 sm:text-base"
                      >
                        {opt.label}
                        <span className="text-[#C9A84C]">→</span>
                      </button>
                    </li>
                  ))}
                </ul>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="mt-6 text-sm font-medium text-slate-500 hover:text-[#0A1628]"
                  >
                    ← Back
                  </button>
                )}
              </section>
            </>
          ) : emailSubmitted ? (
            /* ── Success state ─────────────────────────────── */
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 text-center">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                ✓
              </div>
              <h1 className="text-2xl font-bold text-[#0A1628]">
                Check your inbox
              </h1>
              <p className="mt-3 text-slate-600">
                Your visa recommendation and UK to Dubai Relocation Checklist are on their way.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                We&apos;ve also included a link to our recommended visa specialist in your email — they offer a free initial consultation for UK expats.
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#0A1628] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1a2f4a]"
              >
                Browse all guides →
              </Link>
              <p className="mt-6 text-xs text-slate-400">
                This tool provides guidance only and is not legal advice.
                Always verify requirements with a qualified UAE immigration specialist.
              </p>
            </section>
          ) : (
            /* ── Email gate ────────────────────────────────── */
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              {/* Teaser badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Your result is ready
              </div>

              <h1 className="text-2xl font-bold text-[#0A1628] sm:text-3xl">
                Based on your answers, you likely qualify for the{" "}
                <span className="text-[#C9A84C]">{visaName}</span>
              </h1>

              <p className="mt-4 text-slate-600">
                Enter your email and we&apos;ll send you the full details — costs, timeline, key benefits, and next steps — along with the free{" "}
                <strong>UK to Dubai Relocation Checklist</strong>.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setEmailSubmitted(true);
                }}
                className="mt-6 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-xl bg-[#C9A84C] px-6 py-3 text-sm font-bold text-[#0A1628] transition hover:bg-[#d5b760] active:scale-95"
                >
                  Send my results →
                </button>
              </form>

              <p className="mt-3 text-xs text-slate-400">
                No spam. Unsubscribe any time. We&apos;re GDPR compliant.
              </p>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={() => {
                    setShowEmailGate(false);
                    setStep(0);
                    setAnswers({});
                  }}
                  className="text-sm font-medium text-slate-400 hover:text-[#0A1628]"
                >
                  ← Start again
                </button>
              </div>

              <p className="mt-6 text-xs text-slate-400">
                This tool provides guidance only and is not legal advice.
                Always verify requirements with a qualified UAE immigration specialist.
              </p>
            </section>
          )}
        </main>

        <footer className="mt-10 border-t border-slate-200 pt-4">
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 Dubai Expat. All rights reserved.</p>
            <Link href="/" className="flex items-center gap-1 font-medium text-[#0A1628] hover:underline">
              ← Back to home
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
