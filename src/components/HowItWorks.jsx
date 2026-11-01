import React, { useState } from 'react';
import { MessageSquare, ClipboardCheck, Cog, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/content';
import ScrollReveal, { ScrollStagger } from './ScrollReveal';

export default function HowItWorks({ onStartJourney }) {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5" />;
      case 1:
        return <ClipboardCheck className="w-5 h-5" />;
      case 2:
        return <Cog className="w-5 h-5" />;
      case 3:
        return <Zap className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F7FAF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#55B51F]/10 border border-[#55B51F]/20 text-[#063B18] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Seamless 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B18] tracking-tight font-display">
            Your Journey to Solar Starts Here.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#718078] leading-relaxed">
            From preliminary energy analysis to utility grid synchronization, our turnkey process delivers a smooth transition.
          </p>
        </ScrollReveal>

        {/* 4-Step Timeline Desktop / Tablet Horizontal */}
        <div className="relative">
          {/* Green Connecting Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-1 bg-gradient-to-r from-[#55B51F] via-[#F5A000] to-[#55B51F] z-0 opacity-40 rounded-full" />

          <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10" staggerDelay={140}>
            {HOW_IT_WORKS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-3xl p-6 sm:p-7 transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#55B51F] shadow-xl ring-2 ring-[#55B51F]/20 -translate-y-2'
                      : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-[#55B51F]/40 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-sm transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#063B18] text-white shadow-md'
                            : 'bg-[#F7FAF5] text-[#063B18] border border-[#55B51F]/20'
                        }`}
                      >
                        {getStepIcon(idx)}
                      </div>

                      <span
                        className={`text-2xl font-black tracking-tight font-display transition-colors ${
                          isSelected ? 'text-[#F5A000]' : 'text-slate-300'
                        }`}
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="space-y-1 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#55B51F] block">
                        {step.shortDesc}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#063B18] tracking-tight">
                        {step.title}
                      </h3>
                    </div>

                    {/* Detail text */}
                    <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Active highlight bar at bottom */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#063B18]">
                    <span>Step {step.step} of 04</span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[#55B51F] font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Active
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </ScrollStagger>
        </div>

        {/* Bottom Quick Action */}
        <ScrollReveal animation="fade-up" delay={200} className="mt-14 text-center">
          <button
            onClick={onStartJourney}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Begin Step 01: Schedule Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </ScrollReveal>

      </div>
    </section>
  );
}

