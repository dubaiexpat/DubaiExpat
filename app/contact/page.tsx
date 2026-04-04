'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (!res.ok) throw new Error('Failed to send');
      setIsSubmitted(true);
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          subject: 'General Enquiry',
          message: '',
        });
        setIsSubmitted(false);
      }, 5000);
    } catch {
      setError('Something went wrong. Please try emailing us directly at partnerships@dubaiexpat.co.uk');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-slate max-w-none">
          <h1>Contact Us</h1>

          <p className="text-base leading-relaxed">
            Have a question or feedback for the Dubai Expat team? We'd love to hear from you.
            Whether you're considering a move to Dubai, already living here, or just want to
            share your thoughts, this is the best way to get in touch with us.
          </p>

          <div className="my-8 rounded-lg border-l-4 border-[#C9A84C] bg-amber-50 px-4 py-4">
            <p className="m-0 text-base font-semibold text-slate-900">
              Email us at:{' '}
              <a href="mailto:partnerships@dubaiexpat.co.uk" className="text-[#C9A84C] hover:underline">
                partnerships@dubaiexpat.co.uk
              </a>
            </p>
            <p className="m-0 mt-2 text-sm text-slate-700">
              We aim to respond within 48 hours.
            </p>
          </div>

          <h2>Send us a Message</h2>

          {isSubmitted ? (
            <div className="my-8 rounded-lg border border-green-200 bg-green-50 px-4 py-4">
              <p className="m-0 text-base font-semibold text-green-900">
                Thank you for your message!
              </p>
              <p className="m-0 mt-2 text-sm text-green-800">
                We've received your enquiry and will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 my-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-900 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                  <option value="Content Suggestion">Content Suggestion</option>
                  <option value="Report an Issue">Report an Issue</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl bg-[#C9A84C] px-6 py-3 text-sm font-bold text-[#0A1628] transition hover:bg-[#d5b760] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

          <p className="text-xs text-slate-500 mt-8">
            Last updated: 5 April 2026
          </p>
        </article>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy" className="text-slate-600 hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="text-slate-600 hover:text-slate-900">
              Terms
            </Link>
            <Link href="/cookies" className="text-slate-600 hover:text-slate-900">
              Cookies
            </Link>
            <Link href="/affiliate-disclosure" className="text-slate-600 hover:text-slate-900">
              Affiliate Disclosure
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
