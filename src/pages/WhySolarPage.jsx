import React, { useState } from 'react';
import { PiggyBank, Leaf, Shield, Globe2, ArrowRight, HelpCircle, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal, { ScrollStagger } from '../components/ScrollReveal';
import { FAQS_DATA } from '../data/content';

export default function WhySolarPage({ onOpenQuote }) {
  // Allow toggling FAQ items or keeping multiple open
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="bg-[#F7FAF5]">

      {/* Header Banner */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#063B18] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#55B51F]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5A000]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up" className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#55B51F] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Leaf className="w-3.5 h-3.5" />
              <span>Renewable Investment Economics</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display">
              Why Choose Solar with SAM GREEN POWER?
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Transitioning to rooftop solar is one of the highest-yielding financial decisions for any property owner, combining guaranteed electricity cost reduction with tangible ecological stewardship.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4 Core Pillars Detailed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#063B18] tracking-tight font-display">
              The Four Cornerstones of Clean Energy Independence
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#718078]">
              Delivering enduring value across energy cost optimization, system durability, and carbon reduction.
            </p>
          </ScrollReveal>

          <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={120}>

            {/* Pillar 1 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F7FAF5] border border-[#55B51F]/20 hover:border-[#55B51F]/60 transition-all shadow-sm hover:shadow-xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#063B18] text-[#55B51F] flex items-center justify-center shadow-md">
                <PiggyBank className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#55B51F] block">
                Financial Sovereignty
              </span>
              <h3 className="text-2xl font-black text-[#063B18]">
                Energy Cost Savings
              </h3>
              <p className="text-sm text-[#718078] leading-relaxed">
                Grid electricity tariffs escalate steadily by 5% to 8% annually. A rooftop solar installation locks in your levelized cost of electricity (LCOE) at approximately ₹2.00 to ₹2.50 per unit over 25 years. Most systems achieve complete capital payback within 3 to 4.5 years, generating virtually free power thereafter.
              </p>
              <div className="pt-2 text-xs font-bold text-[#063B18] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#55B51F]" />
                <span>Insulation from utility inflation</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F7FAF5] border border-[#55B51F]/20 hover:border-[#55B51F]/60 transition-all shadow-sm hover:shadow-xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#55B51F] text-white flex items-center justify-center shadow-md">
                <Leaf className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#55B51F] block">
                Zero Emissions
              </span>
              <h3 className="text-2xl font-black text-[#063B18]">
                Clean & Renewable Energy
              </h3>
              <p className="text-sm text-[#718078] leading-relaxed">
                Traditional power generation burns millions of tonnes of coal, producing dangerous particulate emissions and greenhouse gases. A typical 5 kW residential solar setup prevents over 6.5 tonnes of carbon emissions annually—the ecological equivalent of planting over 280 mature trees.
              </p>
              <div className="pt-2 text-xs font-bold text-[#063B18] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#55B51F]" />
                <span>100% Pure, Silent Sunlight</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F7FAF5] border border-[#55B51F]/20 hover:border-[#55B51F]/60 transition-all shadow-sm hover:shadow-xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1762A5] text-white flex items-center justify-center shadow-md">
                <Shield className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#1762A5] block">
                Engineered Longevity
              </span>
              <h3 className="text-2xl font-black text-[#063B18]">
                Reliable Solar Solutions
              </h3>
              <p className="text-sm text-[#718078] leading-relaxed">
                We reject subpar materials. SAM Green Power installations exclusively utilize Tier-1 crystalline photovoltaic cells, certified weather-resistant anodized aluminum mounting rails, surge protective devices, and intelligent string inverters built for extreme tropical weather.
              </p>
              <div className="pt-2 text-xs font-bold text-[#063B18] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1762A5]" />
                <span>30-Year Performance Backing</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F7FAF5] border border-[#55B51F]/20 hover:border-[#55B51F]/60 transition-all shadow-sm hover:shadow-xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F5A000] text-white flex items-center justify-center shadow-md">
                <Globe2 className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F5A000] block">
                ESG Stewardship
              </span>
              <h3 className="text-2xl font-black text-[#063B18]">
                Sustainable Future
              </h3>
              <p className="text-sm text-[#718078] leading-relaxed">
                By investing in on-site generation, you contribute directly to local grid stabilization, reduce peak transmission losses, and foster environmental balance for future generations. Clean energy is an active declaration of environmental stewardship.
              </p>
              <div className="pt-2 text-xs font-bold text-[#063B18] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F5A000]" />
                <span>Intergenerational Positive Impact</span>
              </div>
            </div>

          </ScrollStagger>
        </div>
      </section>

      {/* Government Incentives & Subsidies Guide */}
      <section className="py-20 bg-[#F7FAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#55B51F] block">
              Policy & Financial Incentives
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-[#063B18] tracking-tight font-display mt-1">
              Government Support & Subsidies
            </h3>
            <p className="mt-2 text-sm text-[#718078]">
              Take advantage of progressive government initiatives designed to lower upfront capital expenditure.
            </p>
          </ScrollReveal>

          <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={120}>
            <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm space-y-3">
              <span className="text-xs font-extrabold text-[#55B51F] uppercase tracking-wider block">Residential</span>
              <h4 className="text-xl font-black text-[#063B18]">PM Surya Ghar Subsidy</h4>
              <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                Direct financial assistance transferred to homeowners: ₹30,000 for 1 kW, ₹60,000 for 2 kW, and up to ₹78,000 for 3 kW and higher systems.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm space-y-3">
              <span className="text-xs font-extrabold text-[#1762A5] uppercase tracking-wider block">Commercial & Industrial</span>
              <h4 className="text-xl font-black text-[#063B18]">Accelerated Depreciation</h4>
              <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                Under Section 32 of the Income Tax Act, commercial enterprises can claim up to 40% accelerated tax depreciation on solar assets in Year 1.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm space-y-3">
              <span className="text-xs font-extrabold text-[#F5A000] uppercase tracking-wider block">Utility Discom</span>
              <h4 className="text-xl font-black text-[#063B18]">Bi-Directional Net Metering</h4>
              <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                Surplus solar energy generated during sunny daytime hours is credited back into the utility grid, offsetting evening and nighttime grid consumption.
              </p>
            </div>
          </ScrollStagger>
        </div>
      </section>

      {/* Frequently Asked Questions (Page 5 of Client Document - 10 Exact Questions) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal animation="fade-up" className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#55B51F] block">
              Page 5 • Official Client FAQs
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-[#063B18] tracking-tight font-display">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-[#718078] max-w-xl mx-auto">
              Clear, expert answers to the 10 most critical solar adoption questions asked by property owners in Andhra Pradesh & Telangana.
            </p>
          </ScrollReveal>

          <ScrollStagger className="space-y-3.5" staggerDelay={60}>
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-200 border overflow-hidden ${isOpen
                      ? 'bg-white border-[#55B51F] shadow-md ring-1 ring-[#55B51F]/30'
                      : 'bg-[#F7FAF5] border-slate-200/80 hover:border-[#55B51F]/40'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${isOpen ? 'bg-[#063B18] text-[#55B51F]' : 'bg-white text-[#718078] border border-slate-200'
                        }`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold text-[#063B18]">
                        {faq.q}
                      </h4>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#55B51F] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#718078] leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      <div className="pl-11 pr-2">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </ScrollStagger>

          <ScrollReveal animation="fade-up" delay={150} className="text-center pt-8 space-y-4">
            <p className="text-xs text-[#718078]">
              Have a specific question about your terrace or DISCOM connection?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onOpenQuote && onOpenQuote()}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/calculator"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-slate-200 hover:border-[#55B51F] text-[#063B18] font-bold text-sm transition-all cursor-pointer"
              >
                <span>Open Solar Calculator</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
