import React from 'react';
import InteractiveSolarCalculator from '../components/InteractiveSolarCalculator';
import { Calculator, ShieldCheck, Sun, Zap } from 'lucide-react';
import ScrollReveal, { ScrollStagger } from '../components/ScrollReveal';

export default function CalculatorPage({ onCalculateQuote }) {
  return (
    <div className="bg-[#F7FAF5] pb-20">
      
      {/* Header Banner */}
      <section className="relative pt-32 pb-14 sm:pt-40 sm:pb-16 bg-[#063B18] text-white overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#55B51F]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5A000]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#55B51F] text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>Smart Photovoltaic Sizing Engine</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
              Interactive Solar Sizing & ROI Calculator
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-2">
              Calculate your optimal solar kilowatt capacity, required roof area, monthly bill savings, and payback period using real-world tropical irradiance data.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Interactive Tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="scale-up" duration={800}>
          <InteractiveSolarCalculator onCalculateQuote={onCalculateQuote} isFullPage={true} />
        </ScrollReveal>

        {/* Engineering Calculation Guide */}
        <ScrollStagger className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={120}>
          <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#063B18] text-[#55B51F] flex items-center justify-center">
              <Sun className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-[#063B18] text-base">Generation Formula</h4>
            <p className="text-xs text-[#718078] leading-relaxed">
              In Southern & Central India, 1 kW of Tier-1 monocrystalline panels generates approx. 4.0 to 4.3 units (kWh) per sunny day, averaging 120–130 units per month.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#55B51F] text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-[#063B18] text-base">Rooftop Area Sizing</h4>
            <p className="text-xs text-[#718078] leading-relaxed">
              Modern high-efficiency 550W+ panels require only 80 to 90 square feet of shadow-free roof area per kilowatt, drastically reducing roof footprint.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#1762A5] text-white flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-[#063B18] text-base">Payback & Longevity</h4>
            <p className="text-xs text-[#718078] leading-relaxed">
              With net metering and subsidies, residential systems reach breakeven in 3.5 to 4.5 years, followed by 20+ years of virtually zero-cost power generation.
            </p>
          </div>
        </ScrollStagger>
      </section>

    </div>
  );
}
