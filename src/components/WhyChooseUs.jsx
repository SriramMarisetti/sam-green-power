import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { PiggyBank, Leaf, Shield, Globe2, ArrowUpRight, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';
import { Link } from 'react-router-dom';
import ScrollReveal, { ScrollStagger } from './ScrollReveal';

export default function WhyChooseUs({ onOpenQuote }) {
  const [activeModalItem, setActiveModalItem] = useState(null);
  const getIcon = (id) => {
    switch (id) {
      case 'savings':
        return <PiggyBank className="w-7 h-7 text-[#55B51F]" />;
      case 'clean':
        return <Leaf className="w-7 h-7 text-[#55B51F]" />;
      case 'reliable':
        return <Shield className="w-7 h-7 text-[#1762A5]" />;
      case 'sustainable':
        return <Globe2 className="w-7 h-7 text-[#F5A000]" />;
      default:
        return <Leaf className="w-7 h-7 text-[#55B51F]" />;
    }
  };

  return (
    <section id="why-solar" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative Brand Circles in Background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#55B51F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F5A000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#55B51F]/10 border border-[#55B51F]/20 text-[#063B18] text-xs font-bold uppercase tracking-wider mb-4">
            <span>The Renewable Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B18] tracking-tight font-display">
            Why Choose SAM GREEN POWER?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#718078] leading-relaxed">
            Engineered solar solutions providing reliable, clean energy while maximizing long-term financial and ecological benefits.
          </p>
        </ScrollReveal>

        {/* 4 Core Benefits Grid with Cascading Reveal */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={120}>
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="relative p-8 rounded-3xl bg-[#F7FAF5] border border-[#55B51F]/15 hover:border-[#55B51F]/50 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-xl flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-[#55B51F]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#063B18] transition-all duration-300">
                  <div className="group-hover:brightness-200">
                    {getIcon(item.id)}
                  </div>
                </div>

                {/* Tag */}
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#55B51F] block mb-2">
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-[#063B18] tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#718078] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#063B18]/60 group-hover:text-[#55B51F] transition-colors">
                <span>Core Value 0{idx + 1}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </ScrollStagger>

        {/* Explore More Why Solar */}
        <ScrollReveal animation="fade-up" delay={200} className="mt-14 text-center">
          <Link
            to="/why-solar"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#063B18] hover:bg-[#0a4d21] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
          >
            <span>Learn More About ROI, Net-Metering & Subsidies</span>
            <ArrowRight className="w-4 h-4 text-[#55B51F]" />
          </Link>
        </ScrollReveal>

      </div>

      {/* Detail Modal for Selected Why Choose Us Card */}
      {activeModalItem && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#55B51F]/30 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#718078] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#063B18] text-[#55B51F] flex items-center justify-center shrink-0">
                {getIcon(activeModalItem.id)}
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#55B51F] block">
                  {activeModalItem.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#063B18] font-display">
                  {activeModalItem.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#718078] leading-relaxed mb-6">
              {activeModalItem.description}
            </p>

            <div className="space-y-3 p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/15 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B18]">
                Engineering Guarantee & Standard
              </h4>
              <div className="space-y-2 text-xs text-[#101A13]/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#55B51F] shrink-0" />
                  <span>Tier-1 Monocrystalline Bifacial & TopCon PV Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#55B51F] shrink-0" />
                  <span>Hot-dip galvanized mounting structures rated for 170 km/h wind loads</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#55B51F] shrink-0" />
                  <span>5-Year proactive local AMC warranty across 28 districts</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveModalItem(null);
                  if (onOpenQuote) onOpenQuote();
                }}
                className="w-full py-3.5 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-extrabold text-sm shadow-md transition-all cursor-pointer"
              >
                Inquire With Engineering Team
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}

