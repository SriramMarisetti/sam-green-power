import React from 'react';
import { PiggyBank, Leaf, Shield, Globe2, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal, { ScrollStagger } from '../components/ScrollReveal';

export default function WhySolarPage() {
  const faqs = [
    {
      q: 'How does solar work during cloudy or rainy days?',
      a: 'Solar photovoltaic modules capture diffuse solar irradiance even during overcast or monsoon days, typically generating 25% to 40% of their clear-sky peak capacity. Your on-grid net metering seamlessly pulls power from the utility grid when needed.'
    },
    {
      q: 'What is Net Metering and how does it save me money?',
      a: 'A bi-directional net meter records energy imported from the grid and excess solar electricity exported to the grid. At the end of your billing cycle, you are only billed for the net difference, drastically reducing or zeroing your bill.'
    },
    {
      q: 'What maintenance is required for a solar installation?',
      a: 'Rooftop solar systems contain zero moving mechanical parts. Regular washing of panel surfaces with clean water every 2-3 weeks to prevent dust accumulation is typically all that is needed to maintain peak generation output.'
    },
    {
      q: 'What is the lifespan of solar panels and inverters?',
      a: 'Tier-1 monocrystalline solar panels are engineered with a 25-year linear performance warranty (guaranteeing over 80-85% performance at year 25). High-efficiency string inverters carry 5 to 10-year warranties with expected lifespans exceeding 15 years.'
    }
  ];

  return (
    <div className="bg-[#F7FAF5]">
      
      {/* Header Banner */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-[#063B18] text-white overflow-hidden">
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
                <span>25-Year Performance Backing</span>
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

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal animation="fade-up" className="text-center space-y-2">
            <h3 className="text-3xl font-black text-[#063B18] tracking-tight font-display">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-[#718078]">
              Common queries answered by our senior solar engineers.
            </p>
          </ScrollReveal>

          <ScrollStagger className="space-y-4" staggerDelay={80}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F7FAF5] border border-slate-200/80 space-y-2">
                <h4 className="text-base font-extrabold text-[#063B18] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#55B51F] shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#718078] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </ScrollStagger>

          <ScrollReveal animation="fade-up" delay={200} className="text-center pt-6">
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Calculate Your Sizing & Payback Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
