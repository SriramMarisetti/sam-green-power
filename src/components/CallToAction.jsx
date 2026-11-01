import React from 'react';
import { Sun, ArrowRight, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CallToAction({ onOpenQuote }) {
  return (
    <section className="relative py-24 md:py-32 bg-[#063B18] overflow-hidden text-white">
      {/* Animated Subtle Solar Orange Sun Ray & Green Energy Wave Elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#F5A000]/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#55B51F]/25 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative Wave lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path
            fill="#55B51F"
            d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,224C672,235,768,213,864,181.3C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal animation="scale-up" duration={800}>
          
          {/* Floating Sun icon badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#55B51F] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
            <Sun className="w-4 h-4 text-[#F5A000]" />
            <span className="text-white">Clean Renewable Transition</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-display max-w-4xl mx-auto">
            Make the Switch to Smarter Energy.
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal">
            Start your journey towards clean, affordable, and sustainable energy with SAM GREEN POWER.
          </p>

          {/* Key Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs sm:text-sm text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#55B51F]" />
              <span>Zero-Obligation Roof Survey</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#55B51F]" />
              <span>Detailed 3D Generation Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#F5A000]" />
              <span>Certified EPC Engineering</span>
            </div>
          </div>

          {/* Big CTA Button */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-base font-extrabold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
