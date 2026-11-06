import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Home, Building2, Factory, Wrench, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/content';
import { Link } from 'react-router-dom';
import ScrollReveal, { ScrollStagger } from './ScrollReveal';

export default function SolarSolutions({ onSelectSolution }) {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const getIcon = (id) => {
    switch (id) {
      case 'residential':
        return <Home className="w-6 h-6 text-[#55B51F]" />;
      case 'commercial':
        return <Building2 className="w-6 h-6 text-[#1762A5]" />;
      case 'industrial':
        return <Factory className="w-6 h-6 text-[#F5A000]" />;
      case 'maintenance':
        return <Wrench className="w-6 h-6 text-[#55B51F]" />;
      default:
        return <Home className="w-6 h-6 text-[#55B51F]" />;
    }
  };

  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#F7FAF5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#55B51F]/10 border border-[#55B51F]/20 text-[#063B18] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B18] tracking-tight font-display">
            Solar Solutions Designed Around You.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#718078] leading-relaxed">
            Tailored photovoltaic architectures engineered for optimal power harvest, structural reliability, and long-term financial returns.
          </p>
        </ScrollReveal>

        {/* 4 Premium Solution Cards with Cascading Staggered Reveal */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" staggerDelay={120}>
          {SOLUTIONS_DATA.map((solution) => (
            <div
              key={solution.id}
              onClick={() => setSelectedSolution(solution)}
              className="bg-white rounded-3xl overflow-hidden border border-[#55B51F]/20 hover:border-[#55B51F] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Card Image with subtle zoom */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={solution.image}
                  alt={`${solution.title} - SAM GREEN POWER SOLUTIONS`}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Floating Icon Badge */}
                <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-[#55B51F]/20">
                  {getIcon(solution.id)}
                </div>

                {/* Subtitle tag */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider drop-shadow-sm">
                    {solution.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-[#063B18] tracking-tight group-hover:text-[#55B51F] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#718078] leading-relaxed line-clamp-3">
                    {solution.description}
                  </p>
                </div>

                {/* Features preview */}
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {solution.features.slice(0, 2).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-[#101A13]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#55B51F] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More link */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedSolution(solution)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#F7FAF5] group-hover:bg-[#55B51F] group-hover:text-white text-[#063B18] text-xs font-bold transition-all duration-200 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ScrollStagger>

        {/* Explore Detailed Solutions Link */}
        <ScrollReveal animation="fade-up" delay={200} className="mt-12 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#063B18] hover:bg-[#0a4d21] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
          >
            <span>Explore Complete Solutions Catalog & Technical Comparison</span>
            <ArrowRight className="w-4 h-4 text-[#55B51F]" />
          </Link>
        </ScrollReveal>

      </div>

      {/* Technical Detail Modal for Selected Solution */}
      {selectedSolution && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#55B51F]/30 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedSolution(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#718078] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#55B51F]/15">
                {getIcon(selectedSolution.id)}
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-[#55B51F] tracking-wider">
                  Solution Dossier
                </span>
                <h3 className="text-2xl font-black text-[#063B18]">
                  {selectedSolution.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#718078] leading-relaxed mb-6">
              {selectedSolution.description}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#063B18]">
                Key Engineering Highlights
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {selectedSolution.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#101A13] bg-[#F7FAF5] p-2.5 rounded-xl border border-[#55B51F]/15">
                    <CheckCircle2 className="w-4 h-4 text-[#55B51F] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#063B18] text-white p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-300">Interested in this solution?</p>
                <p className="text-sm font-bold text-white">Get an engineering proposal tailored for your site.</p>
              </div>
              <button
                onClick={() => {
                  setSelectedSolution(null);
                  if (onSelectSolution) onSelectSolution(selectedSolution.title);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-xs font-bold shrink-0 shadow-md transition-all cursor-pointer"
              >
                Inquire For This Solution
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
