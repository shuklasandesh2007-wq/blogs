import React, { useState } from 'react';
import { Mail, Check, ArrowRight } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-16 bg-[#F4EFEA] border-t border-b border-stone-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-sans font-semibold">
          Curated Weekly Dispatch
        </span>

        <h2 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-3">
          The Meridian Dispatch
        </h2>

        <p className="text-stone-600 text-xs sm:text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          Every Thursday, a single essay on the structural intersection of architecture, resilient software, and physical ecology. No metrics chasing. No corporate announcements.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-md text-stone-900 text-xs font-medium shadow-sm">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>You have been added to the editorial dispatch roll. Welcome.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs text-stone-900 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-900"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-1.5"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="mt-4 text-[11px] text-stone-400">
          Unsubscribe with one click at any time. We respect your attention and inbox.
        </div>
      </div>
    </section>
  );
};
