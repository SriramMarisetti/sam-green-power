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
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms]"
        />

        {/* Sophisticated Multi-Layered Brand Gradient Overlays */}
        {/* Layer 1: Left-to-right deep-green shadow for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#063B18]/95 via-[#063B18]/80 to-[#063B18]/30 lg:to-transparent" />

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
                  <span>25-Year Life</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-200/80">Engineered Longevity</span>
              </div>
            </div>

          </ScrollReveal>

          {/* Right Column: Premium Solar Telemetry & Live Harvest Showcase Card */}
          <ScrollReveal animation="fade-left" delay={200} duration={800} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-white/90 lg:bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl space-y-6 text-[#101A13]">
              
              {/* Header with Live Status Indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#063B18] text-[#55B51F] flex items-center justify-center p-2.5 shadow-md">
                    <Sun className="w-full h-full text-[#F5A000]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#55B51F] block">
                      Live PV Generation
                    </span>
                    <h3 className="text-base font-extrabold text-[#063B18]">
                      Smart Solar Array
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#55B51F]/15 text-[#063B18] text-xs font-bold border border-[#55B51F]/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55B51F] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55B51F]"></span>
                  </span>
                  <span>Active Yield</span>
                </div>
              </div>

              {/* Real-Time Metrics Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20">
                  <span className="text-[10px] uppercase font-bold text-[#718078] block tracking-wider">
                    Instant Output
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#063B18] font-display mt-0.5">
                    8.42 <span className="text-sm font-bold text-[#55B51F]">kW</span>
                  </div>
                  <span className="text-[11px] text-[#55B51F] font-semibold mt-1 block">
                    ▲ Peak generation
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20">
                  <span className="text-[10px] uppercase font-bold text-[#718078] block tracking-wider">
                    Sun Irradiance
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#F5A000] font-display mt-0.5">
                    985 <span className="text-sm font-bold text-[#718078]">W/m²</span>
                  </div>
                  <span className="text-[11px] text-[#718078] font-medium mt-1 block">
                    Clear sky harvest
                  </span>
                </div>
              </div>

              {/* Progress & Efficiency Bar */}
              <div className="space-y-2 p-4 rounded-2xl bg-[#063B18] text-white">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-medium">Photovoltaic Efficiency</span>
                  <span className="font-extrabold text-[#55B51F]">22.8% Conversion</span>
                </div>
                <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#55B51F] to-[#F5A000] w-[92%] rounded-full shadow-sm" />
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-300 pt-1">
                  <span>Carbon Offset: ~1.3 T/kW/yr</span>
                  <span className="text-[#F5A000] font-bold">Tier-1 Monocrystalline</span>
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
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
