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

const VISA_DETAILS: Record<VisaType, { summary: string; nextSteps: string[] }> = {
  golden: {
    summary:
      "The Golden Visa gives you 10-year residency with no employer sponsor needed. You can live, work, and study in the UAE with the freedom to enter and exit as you please. Your family can be sponsored under the same visa.",
    nextSteps: [
      "Gather qualification certificates (attested by your home country + UAE embassy)",
      "Prepare proof of income or property ownership",
      "Apply through ICP or GDRFA — processing takes 2–4 weeks",
      "Speak to a visa specialist for document attestation guidance",
    ],
  },
  green: {
    summary:
      "The Green Visa offers 5-year self-sponsored residency — no employer needed. Ideal for skilled professionals and freelancers earning a steady income. You can sponsor your family and have a 6-month grace period if it lapses.",
    nextSteps: [
      "Confirm your qualification meets the approved occupations list",
      "Prepare salary evidence (contract or bank statements)",
      "Apply via the ICA smart services portal",
      "Budget around AED 2,500–3,500 for processing fees",
    ],
  },
  freelance: {
    summary:
      "The Freelance Visa lets you work independently in the UAE for 2 years. You'll register through a free zone and receive a residence visa, Emirates ID, and the ability to sponsor dependants.",
    nextSteps: [
      "Choose a free zone (popular: Dubai Media City, DMCC, IFZA)",
      "Prepare a portfolio or proof of freelance experience",
      "Budget AED 7,500–15,000 for the free zone licence + visa package",
      "A free zone consultant can help you compare options",
    ],
  },
  employment: {
    summary:
      "Your employer will sponsor your Employment Visa (2–3 years). They handle most of the paperwork and costs. You'll receive a residence visa, Emirates ID, and labour card.",
    nextSteps: [
      "Get your offer letter and employment contract finalised",
      "Have your degree certificates attested (home country + UAE embassy)",
      "Complete a medical fitness test on arrival in Dubai",
      "Your employer's PRO will guide you through the process",
    ],
  },
  retirement: {
    summary:
      "The Retirement Visa gives you 5-year renewable residency if you're 55 or over. You'll need to meet one of the financial requirements: property worth AED 2M, savings of AED 1M, or active income of AED 20,000/month.",
    nextSteps: [
      "Choose which financial requirement you'll meet (property, savings, or income)",
      "Prepare supporting documents (bank statements, title deeds, pension letters)",
      "Apply through the GDRFA portal or a registered typing centre",
      "Consider speaking to a UAE retirement planning specialist",
    ],
  },
  explore: {
    summary:
      "Based on your answers, several visa routes could work for you. The best option depends on factors like your exact income, qualifications, and whether you plan to be employed or self-employed in the UAE.",
    nextSteps: [
      "Review the different visa categories in your relocation checklist",
      "Consider whether employment, freelance, or investor visas suit your situation",
      "A free consultation with a visa specialist can clarify the best route",
      "Start gathering your qualification and financial documents now — they're needed for all routes",
    ],
  },
};

export default function VisaCheckerPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

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
          <header className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-[#0A1628] sm:text-3xl">
              UAE Visa Eligibility Tool
            </h1>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Eight quick questions to find out which UAE visa route you most likely qualify for — Golden, Green, Freelance, Employment or Retirement. Built for UK expats.
            </p>
          </header>
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
            /* ── Success state — show visa result + next steps ── */
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              {/* Result header */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Your recommendation
              </div>

              <h2 className="text-2xl font-bold text-[#0A1628] sm:text-3xl">
                You likely qualify for the{" "}
                <span className="text-[#C9A84C]">{visaName}</span>
              </h2>

              {resultType && VISA_DETAILS[resultType] && (
                <>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {VISA_DETAILS[resultType].summary}
                  </p>

                  <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50/50 p-5">
                    <h2 className="text-sm font-bold uppercase tracking-wide text-[#0A1628]">
                      Your next steps
                    </h2>
                    <ol className="mt-3 space-y-2">
                      {VISA_DETAILS[resultType].nextSteps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-700">
                          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/20 text-xs font-bold text-[#0A1628]">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </>
              )}

              {/* Email confirmation */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-emerald-800">
                    Check your inbox
                  </p>
                  <p className="mt-1 text-sm text-emerald-700">
                    We&apos;ve emailed your personalised visa recommendation and the
                    free <strong>UK to Dubai Relocation Checklist</strong> PDF.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/guides"
                  className="inline-flex items-center justify-center rounded-xl bg-[#0A1628] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1a2f4a]"
                >
                  Browse all guides
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setShowEmailGate(false);
                    setStep(0);
                    setAnswers({});
                    setEmailSubmitted(false);
                    setEmail("");
                    setConsent(false);
                  }}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Start again
                </button>
              </div>

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

              <h2 className="text-2xl font-bold text-[#0A1628] sm:text-3xl">
                Based on your answers, you likely qualify for the{" "}
                <span className="text-[#C9A84C]">{visaName}</span>
              </h2>

              <p className="mt-4 text-slate-600">
                Enter your email and we&apos;ll send you the full details — costs, timeline, key benefits, and next steps — along with the free{" "}
                <strong>UK to Dubai Relocation Checklist</strong>.
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (email.trim() && consent) {
                    try {
                      // Compute visa recommendation at submit time so we
                      // send the exact same result the user just saw.
                      const computedRoute = getVisaResult(answers);
                      const computedName = VISA_NAMES[computedRoute];
                      await fetch("/api/subscribe", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          email,
                          sourcePage: "/visa-checker",
                          sourceType: "visa-checker",
                          firstMagnet: "dx-relocation-checklist",
                          visaRoute: computedRoute,
                          visaRouteName: computedName,
                          visaAnswers: answers,
                        }),
                      });
                    } catch {}
                    setEmailSubmitted(true);
                  }
                }}
                className="mt-6 flex flex-col gap-3"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
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
                    disabled={!consent}
                    className={`flex-shrink-0 rounded-xl bg-[#C9A84C] px-6 py-3 text-sm font-bold text-[#0A1628] transition hover:bg-[#d5b760] active:scale-95 ${!consent ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Send my results →
                  </button>
                </div>

                <label className="flex items-center gap-2 text-xs text-slate-500">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="accent-[#C9A84C]"
                  />
                  <span>
                    I agree to receive my visa results and the relocation checklist by email. View our{" "}
                    <Link href="/privacy" className="text-[#C9A84C]">
                      privacy policy
                    </Link>
                    .
                  </span>
                </label>
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
