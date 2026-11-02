import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { FAQS_DATA } from '../data/content';
import { Link } from 'react-router-dom';
import ScrollReveal, { ScrollStagger } from './ScrollReveal';

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#55B51F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#F5A000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#55B51F]/10 border border-[#55B51F]/20 text-[#063B18] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#55B51F]" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B18] tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#718078] leading-relaxed">
            Clear, straightforward answers about rooftop solar installations, subsidies, net metering, and maintenance.
          </p>
        </ScrollReveal>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={idx * 40}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#F7FAF5] border-[#55B51F]/40 shadow-md'
                    : 'bg-white border-slate-200/80 hover:border-[#55B51F]/30 hover:bg-[#F7FAF5]/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-extrabold mt-0.5 transition-colors ${
                      isOpen ? 'bg-[#55B51F] text-white shadow-xs' : 'bg-slate-100 text-[#063B18]'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="font-extrabold text-[#063B18] text-base sm:text-lg tracking-tight">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#063B18] text-white' : 'bg-slate-100 text-[#718078]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-[#718078] leading-relaxed border-t border-slate-100/80 pl-16">
                    <p>{faq.a}</p>
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <ScrollReveal animation="fade-up" delay={200} className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#063B18] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-black font-display">Still have questions about solar?</h4>
            <p className="text-xs sm:text-sm text-slate-300">Speak directly with our solar engineers for customized advice.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+91701320449"
              className="px-6 py-3 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              Call: +91 701320449
            </a>
            <Link
              to="/why-solar"
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-all cursor-pointer"
            >
              Learn More
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

