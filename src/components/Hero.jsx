import React from 'react';
import { ArrowRight, Sun, CheckCircle2, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero({ onOpenQuote }) {
  const scrollToSolutions = (e) => {
    e.preventDefault();
    const target = document.querySelector('#solutions');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 sm:pt-32 lg:pt-28 pb-16 md:pb-20 overflow-hidden"
    >
      {/* Complete Hero Background Image: Solar Panels & Clear Blue Sky */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/solar-sky-hero.jpg"
          alt="Solar Panels under Clear Blue Sky"
          className="w-full h-full object-cover object-[75%_center] lg:object-[82%_center] scale-105 transform animate-pulse duration-[10000ms]"
        />

        {/* Sophisticated Multi-Layered Brand Gradient Overlays */}
        {/* Layer 1: Left-to-right deep-green shadow for text contrast while letting blue panels shine on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#063B18]/95 via-[#063B18]/70 to-[#063B18]/20 lg:to-transparent" />

        {/* Layer 2: Top header shadow */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#063B18]/80 to-transparent" />

        {/* Layer 3: Bottom gradient seamlessly blending into light page background */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#F7FAF5] via-[#F7FAF5]/50 to-transparent" />

        {/* Layer 4: Ambient Solar Warmth Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F5A000]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Headline, Brand Description & CTAs */}
          <ScrollReveal animation="fade-right" duration={800} className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-white">

            {/* Small Badge: "POWERING A GREENER TOMORROW" */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 shadow-lg w-fit">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#55B51F] text-white shadow-sm">
                <Sun className="w-3.5 h-3.5 fill-[#F5A000] text-[#F5A000]" />
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-white drop-shadow-sm">
                POWERING A GREENER TOMORROW
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08] font-display drop-shadow-md">
              Harness the Sun. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55B51F] via-[#94E662] to-[#F5A000]">
                Power Your Future.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-100/90 leading-relaxed max-w-2xl font-normal drop-shadow">
              Transform the way you power your home and business with intelligent solar energy solutions designed for a cleaner, brighter, and more sustainable future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={scrollToSolutions}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer border border-[#55B51F]/40"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/95 hover:bg-white text-[#063B18] text-base font-extrabold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer backdrop-blur-sm"
              >
                <span>Get a Free Consultation</span>
              </button>
            </div>

            {/* Key Assurance Highlights */}
            <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-3 sm:gap-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-white font-extrabold text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#55B51F] shrink-0" />
                  <span>Tier-1 Cells</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-200/80">High Efficiency PV</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-white font-extrabold text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#55B51F] shrink-0" />
                  <span>Turnkey EPC</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-200/80">End-to-End Delivery</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-white font-extrabold text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#F5A000] shrink-0" />
                  <span>30-Year Life</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-200/80">Engineered Longevity</span>
              </div>
            </div>

          </ScrollReveal>

          {/* Right Column: Premium Solar Installation Showcase Card */}
          <ScrollReveal animation="fade-left" delay={200} duration={800} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl space-y-4 text-[#101A13]">

              {/* Vibrant Solar Installation Photo - Clear Photovoltaic Panels Under Clear Sky */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-200">
                <img
                  src="/images/residential-solar.jpg"
                  alt="High-Efficiency Rooftop Solar Panels"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063B18]/90 via-[#063B18]/30 to-transparent" />

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-black text-[#063B18] shadow-sm flex items-center gap-1.5 border border-[#55B51F]/30">
                  <Sun className="w-3.5 h-3.5 text-[#F5A000]" />
                  <span>Tier-1 Monocrystalline PV</span>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#55B51F] text-white text-[11px] font-bold shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span>Active Solar Harvest</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#55B51F] block">
                    Pristine Rooftop Installation
                  </span>
                  <p className="text-sm font-bold text-white drop-shadow-sm">
                    Monocrystalline Solar Panels Generating Clean Power
                  </p>
                </div>
              </div>

              {/* Real-Time Metrics Grid */}
              <div className="px-5 pb-5 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20">
                    <span className="text-[10px] uppercase font-bold text-[#718078] block tracking-wider">
                      Instant Output
                    </span>
                    <div className="text-2xl font-black text-[#063B18] font-display mt-0.5">
                      8.42 <span className="text-xs font-bold text-[#55B51F]">kW</span>
                    </div>
                    <span className="text-[10px] text-[#55B51F] font-semibold mt-0.5 block">
                      ▲ Peak generation
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20">
                    <span className="text-[10px] uppercase font-bold text-[#718078] block tracking-wider">
                      Sun Irradiance
                    </span>
                    <div className="text-2xl font-black text-[#F5A000] font-display mt-0.5">
                      985 <span className="text-xs font-bold text-[#718078]">W/m²</span>
                    </div>
                    <span className="text-[10px] text-[#718078] font-medium mt-0.5 block">
                      Clear sky harvest
                    </span>
                  </div>
                </div>

                {/* Progress & Efficiency Bar */}
                <div className="space-y-1.5 p-3.5 rounded-2xl bg-[#063B18] text-white">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium">Photovoltaic Efficiency</span>
                    <span className="font-extrabold text-[#55B51F]">22.8% Conversion</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#55B51F] to-[#94E662] w-[88%] rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Action Prompt */}
                <div className="pt-1">
                  <button
                    onClick={onOpenQuote}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#55B51F] hover:bg-[#469A18] text-white text-xs font-extrabold transition-all duration-200 shadow-md cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Estimate Your Rooftop Solar Potential</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
