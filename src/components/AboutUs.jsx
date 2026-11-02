import React from 'react';
import { Leaf, ShieldCheck, Sun, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Subtle Leaf Decorative Pattern Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F7FAF5] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade Up */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#55B51F]/10 border border-[#55B51F]/20 text-[#063B18] text-xs font-bold uppercase tracking-wider mb-4">
            <Leaf className="w-3.5 h-3.5 text-[#55B51F]" />
            <span>About SAM Green Power</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B18] tracking-tight font-display">
            Clean Energy. Better Future.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#718078] leading-relaxed">
            Pioneering engineering excellence in solar photovoltaic installations for homes, commercial establishments, and industrial enterprises.
          </p>
        </ScrollReveal>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Premium Solar Panel Installation Image */}
          <ScrollReveal animation="fade-right" duration={800} className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <img
                src="/images/about-solar.jpg"
                alt="Solar Panel Installation by SAM Green Power"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063B18]/70 via-transparent to-transparent" />
              
              {/* Floating Leaf Graphic Accent inspired by logo */}
              <div className="absolute top-6 left-6 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-[#55B51F]/30 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-[#063B18]">
                  <Sun className="w-4 h-4 text-[#F5A000]" />
                  <span>100% Renewable Sunlight</span>
                </div>
              </div>

              {/* Bottom Glass Card inside image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#55B51F]/20 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#718078] block">
                      Engineering Standard
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-[#063B18]">
                      Tier-1 Photovoltaic Modules
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#55B51F]/15 flex items-center justify-center text-[#55B51F]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative leaf shape behind image */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#55B51F]/15 rounded-full blur-xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F5A000]/15 rounded-full blur-xl -z-10" />
          </ScrollReveal>

          {/* Right Column: Company Introduction & Core Principles */}
          <ScrollReveal animation="fade-left" delay={150} duration={800} className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#55B51F] block">
                Who We Are & What We Do
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#063B18] tracking-tight leading-snug">
                Powering Sustainable Transitions with Engineering Precision.
              </h3>
              
              {/* Official Prompt Introduction Text */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20">
                <p className="text-sm sm:text-base text-[#101A13]/90 leading-relaxed font-normal">
                  At <strong className="text-[#063B18] font-bold">SAM GREEN POWER SOLUTIONS PRIVATE LIMITED</strong>, we believe in creating a sustainable future through smarter solar energy solutions. We aim to help homes and businesses embrace renewable energy with efficient, reliable, and innovative solar solutions.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                From residential rooftop systems under the PM Surya Ghar ₹78,000 subsidy scheme to high-capacity commercial plants, we provide turnkey engineering, net metering, and 5-year proactive support across 16 AP districts and 12 Telangana districts.
              </p>
            </div>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/15 hover:border-[#55B51F]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#063B18] text-[#55B51F] flex items-center justify-center mb-2">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-[#063B18] text-sm sm:text-base">Our Mission</h4>
                <p className="text-xs text-[#718078] mt-1">Accelerating renewable transition with zero-down bank loans & transparent EPC excellence.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/15 hover:border-[#55B51F]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#55B51F] text-white flex items-center justify-center mb-2">
                  <Leaf className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-[#063B18] text-sm sm:text-base">Our Vision</h4>
                <p className="text-xs text-[#718078] mt-1">Building an energy-independent India where rooftop solar is the primary default power source.</p>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#063B18] hover:bg-[#0a4d21] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 text-[#55B51F] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F7FAF5] hover:bg-[#55B51F]/10 text-[#063B18] border border-[#55B51F]/30 text-xs font-bold transition-all cursor-pointer"
              >
                <span>28 District Depots</span>
              </Link>
            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
