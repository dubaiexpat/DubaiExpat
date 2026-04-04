"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentState = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_KEY = "cookie_consent";

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function storeConsent(consent: ConsentState) {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomise, setShowCustomise] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function accept() {
    const consent: ConsentState = { essential: true, analytics: true, marketing: true };
    storeConsent(consent);
    setVisible(false);
  }

  function reject() {
    const consent: ConsentState = { essential: true, analytics: false, marketing: false };
    storeConsent(consent);
    setVisible(false);
  }

  function saveCustom() {
    const consent: ConsentState = { essential: true, analytics, marketing };
    storeConsent(consent);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white px-4 py-4 shadow-lg sm:px-6">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm text-slate-600">
          We use cookies to improve your experience. Essential cookies are always
          active. You can accept or reject optional cookies.{" "}
          <Link href="/cookies" className="text-[#C9A84C] underline">
            Read our Cookie Policy
          </Link>
        </p>

        {showCustomise && (
          <div className="mb-3 space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
            <label className="flex items-center gap-2 text-slate-500">
              <input type="checkbox" checked disabled className="accent-[#C9A84C]" />
              Essential cookies (always on)
            </label>
            <label className="flex items-center gap-2 text-slate-700">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="accent-[#C9A84C]"
              />
              Analytics cookies (Google Analytics)
            </label>
            <label className="flex items-center gap-2 text-slate-700">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="accent-[#C9A84C]"
              />
              Marketing cookies (affiliate tracking)
            </label>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <button
            onClick={accept}
            className="rounded-md bg-[#0A1628] px-4 py-2 text-sm font-medium text-white hover:bg-[#1a2d4a]"
          >
            Accept All
          </button>
          <button
            onClick={reject}
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Reject All
          </button>
          {showCustomise ? (
            <button
              onClick={saveCustom}
              className="rounded-md border border-[#C9A84C] px-4 py-2 text-sm font-medium text-[#C9A84C] hover:bg-[#C9A84C]/10"
            >
              Save Preferences
            </button>
          ) : (
            <button
              onClick={() => setShowCustomise(true)}
              className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50"
            >
              Customise
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
