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
    question: "Are you freelance or self-employed?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
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

const VISA_RESULTS: Record<
  Exclude<VisaType, "explore">,
  {
    name: string;
    years: string;
    cost: string;
    timeline: string;
    benefits: [string, string, string];
  }
> = {
  golden: {
    name: "Golden Visa",
    years: "10 years",
    cost: "AED 3,800–7,500 (approx £800–£1,600) plus government fees",
    timeline: "2–4 weeks",
    benefits: [
      "No employer sponsor needed",
      "Sponsor family members",
      "10 year stability",
    ],
  },
  green: {
    name: "Green Visa",
    years: "5 years",
    cost: "AED 3,500–5,000 (approx £750–£1,100)",
    timeline: "2–4 weeks",
    benefits: [
      "Self-sponsored, no employer needed",
      "Renewable",
      "Flexibility to change jobs",
    ],
  },
  freelance: {
    name: "Freelance Visa",
    years: "2 years",
    cost: "AED 2,000–4,000 (approx £430–£870)",
    timeline: "1–3 weeks",
    benefits: [
      "Work independently",
      "Multiple clients allowed",
      "No employer tie-in",
    ],
  },
  employment: {
    name: "Employment Visa",
    years: "2–3 years",
    cost: "Usually paid by employer",
    timeline: "2–6 weeks",
    benefits: [
      "Employer handles most paperwork",
      "Stable residency tied to job",
      "Often includes health insurance",
    ],
  },
  retirement: {
    name: "Retirement Visa",
    years: "5 years",
    cost: "AED 3,500–5,000 (approx £750–£1,100)",
    timeline: "2–4 weeks",
    benefits: [
      "No employment required",
      "Requires pension income or savings of AED 1M+",
      "Renewable",
    ],
  },
};

export default function VisaCheckerPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const currentQuestion = QUESTIONS[step];
  const isLastStep = step === QUESTIONS.length - 1;
  const progress = ((step + 1) / QUESTIONS.length) * 100;

  function handleSelect(value: string) {
    const next = { ...answers, [currentQuestion.id]: value };
    setAnswers(next);
    if (isLastStep) {
      setShowResult(true);
    } else {
      setStep((s) => s + 1);
    }
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  const resultType = showResult ? getVisaResult(answers) : null;
  const resultInfo =
    resultType && resultType !== "explore"
      ? VISA_RESULTS[resultType]
      : null;

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
          {!showResult ? (
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
          ) : resultInfo ? (
            <section
              key="result"
              className="flex flex-1 flex-col transition duration-300"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  You likely qualify
                </div>
                <h1 className="text-2xl font-bold text-[#0A1628] sm:text-3xl">
                  {resultInfo.name} ({resultInfo.years})
                </h1>

                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Cost
                    </h3>
                    <p className="mt-1 text-[#0A1628]">{resultInfo.cost}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Timeline
                    </h3>
                    <p className="mt-1 text-[#0A1628]">{resultInfo.timeline}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Key benefits
                    </h3>
                    <ul className="mt-2 space-y-2">
                      {resultInfo.benefits.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-[#0A1628]"
                        >
                          <span className="text-[#C9A84C]">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <h3 className="text-sm font-semibold text-[#0A1628]">
                    Next steps
                  </h3>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <div className="flex-1">
                      {!emailSubmitted ? (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (email.trim()) setEmailSubmitted(true);
                          }}
                          className="flex flex-col gap-2 sm:flex-row"
                        >
                          <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30"
                          />
                          <button
                            type="submit"
                            className="rounded-lg bg-[#C9A84C] px-4 py-3 text-sm font-semibold text-[#0A1628] transition hover:bg-[#d5b760]"
                          >
                            Get my free personalised checklist
                          </button>
                        </form>
                      ) : (
                        <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                          Thanks! Check your email for your checklist.
                        </p>
                      )}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-lg border border-[#0A1628] px-4 py-3 text-sm font-semibold text-[#0A1628] transition hover:bg-[#0A1628] hover:text-white"
                    >
                      Speak to a visa specialist
                    </a>
                  </div>
                </div>

                <p className="mt-6 text-xs text-slate-500">
                  This tool provides guidance only and is not legal advice.
                  Always verify requirements with a qualified UAE immigration
                  specialist.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowResult(false);
                  setStep(0);
                  setAnswers({});
                }}
                className="mt-6 text-sm font-medium text-slate-500 hover:text-[#0A1628]"
              >
                Start again
              </button>
            </section>
          ) : (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h1 className="text-2xl font-bold text-[#0A1628]">
                Explore your options
              </h1>
              <p className="mt-4 text-slate-600">
                Based on your answers, several visa routes could apply. We
                recommend speaking to a specialist to find the best fit.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.trim()) setEmailSubmitted(true);
                  }}
                  className="flex flex-1 flex-col gap-2 sm:flex-row"
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-[#C9A84C] px-4 py-3 text-sm font-semibold text-[#0A1628] transition hover:bg-[#d5b760]"
                  >
                    Get my free personalised checklist
                  </button>
                </form>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-[#0A1628] px-4 py-3 text-sm font-semibold text-[#0A1628] transition hover:bg-[#0A1628] hover:text-white"
                >
                  Speak to a visa specialist
                </a>
              </div>
              <p className="mt-6 text-xs text-slate-500">
                This tool provides guidance only and is not legal advice.
                Always verify requirements with a qualified UAE immigration
                specialist.
              </p>
              <button
                type="button"
                onClick={() => {
                  setShowResult(false);
                  setStep(0);
                  setAnswers({});
                }}
                className="mt-4 text-sm font-medium text-slate-500 hover:text-[#0A1628]"
              >
                Start again
              </button>
            </section>
          )}
        </main>

        <footer className="mt-10 border-t border-slate-200 pt-4">
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
            <p>© 2025 Dubai Expat. All rights reserved.</p>
            <Link href="/" className="flex items-center gap-1 font-medium text-[#0A1628] hover:underline">
              ← Back to home
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
