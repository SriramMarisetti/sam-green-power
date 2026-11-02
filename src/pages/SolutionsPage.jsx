import React from 'react';
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/content';
import ScrollReveal from '../components/ScrollReveal';

export default function SolutionsPage({ onSelectSolution }) {
  return (
    <div className="bg-[#F7FAF5]">

      {/* Header Banner */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#063B18] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#55B51F]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1762A5]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up" className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#55B51F] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Zap className="w-3.5 h-3.5" />
              <span>Our Services • Turnkey EPC Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display">
              Our Services & Solar Solutions.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              From residential villas seeking zero electricity bills to multi-megawatt industrial manufacturing facilities, we engineer bespoke solar architectures optimized for your exact load profile and roof geometry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Detailed Solutions Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {SOLUTIONS_DATA.map((sol, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <ScrollReveal
                key={sol.id}
                id={sol.id}
                animation="fade-up"
                duration={800}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Visual Image Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#063B18]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#55B51F]/20 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#55B51F] block">
                            Capacity Range
                          </span>
                          <span className="text-sm sm:text-base font-extrabold text-[#063B18]">
                            {sol.specs.typicalCapacity || sol.specs.serviceScope}
                          </span>
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#55B51F]/15 text-[#063B18]">
                          {sol.specs.warranty || 'Certified Tier-1'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#55B51F] block">
                      {sol.subtitle}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black text-[#063B18] tracking-tight font-display">
                      {sol.title}
                    </h3>
                    <p className="text-base text-[#101A13]/85 leading-relaxed">
                      {sol.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {sol.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7FAF5] border border-[#55B51F]/10">
                        <CheckCircle2 className="w-4 h-4 text-[#55B51F] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-[#101A13]">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specification Details Badges */}
                  <div className="p-4 rounded-2xl bg-[#063B18]/5 border border-[#55B51F]/20 flex flex-wrap gap-4 text-xs font-bold text-[#063B18]">
                    {Object.entries(sol.specs).map(([key, val]) => (
                      <div key={key} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#55B51F]" />
                        <span className="capitalize text-[#718078] font-normal">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectSolution(sol.title)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#063B18] hover:bg-[#0a4d21] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                    >
                      <span>Inquire About {sol.title}</span>
                      <ArrowRight className="w-4 h-4 text-[#55B51F]" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}

        </div>
      </section>

      {/* Comparison Matrix Section */}
      <section className="py-20 bg-[#F7FAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-black text-[#063B18] tracking-tight font-display">
              Technical Comparison Matrix
            </h3>
            <p className="mt-2 text-sm text-[#718078]">
              Summary of system scale, typical payback, and primary balance-of-system architectures.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" duration={800} className="overflow-x-auto rounded-3xl border border-[#55B51F]/20 shadow-lg bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#063B18] text-white border-b border-white/10">
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider">Solution</th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider">Capacity Scale</th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider">Estimated Payback</th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider">Roof Architecture</th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider">Primary Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-[#F7FAF5] transition-colors">
                  <td className="p-4 sm:p-5 font-extrabold text-[#063B18]">Residential Solar</td>
                  <td className="p-4 sm:p-5 text-[#718078]">3 kW – 15 kW</td>
                  <td className="p-4 sm:p-5 font-bold text-[#55B51F]">3.5 – 4.5 Years</td>
                  <td className="p-4 sm:p-5 text-[#718078]">RCC Terrace / Mangalore Tile</td>
                  <td className="p-4 sm:p-5 text-[#101A13]">Slashing domestic electric tariff & subsidies</td>
                </tr>
                <tr className="hover:bg-[#F7FAF5] transition-colors">
                  <td className="p-4 sm:p-5 font-extrabold text-[#063B18]">Commercial Solar</td>
                  <td className="p-4 sm:p-5 text-[#718078]">20 kW – 500 kW+</td>
                  <td className="p-4 sm:p-5 font-bold text-[#55B51F]">3.0 – 4.0 Years</td>
                  <td className="p-4 sm:p-5 text-[#718078]">Commercial Flat Roof / Ballasted</td>
                  <td className="p-4 sm:p-5 text-[#101A13]">Peak tariff shaving & ESG compliance</td>
                </tr>
                <tr className="hover:bg-[#F7FAF5] transition-colors">
                  <td className="p-4 sm:p-5 font-extrabold text-[#063B18]">Industrial Solar</td>
                  <td className="p-4 sm:p-5 text-[#718078]">100 kW – Multi-MW</td>
                  <td className="p-4 sm:p-5 font-bold text-[#55B51F]">2.8 – 3.8 Years</td>
                  <td className="p-4 sm:p-5 text-[#718078]">Trapezoidal Metal Shed / Ground</td>
                  <td className="p-4 sm:p-5 text-[#101A13]">Heavy manufacturing energy cost control</td>
                </tr>
                <tr className="hover:bg-[#F7FAF5] transition-colors">
                  <td className="p-4 sm:p-5 font-extrabold text-[#063B18]">Installation & O&M</td>
                  <td className="p-4 sm:p-5 text-[#718078]">All System Scales</td>
                  <td className="p-4 sm:p-5 font-bold text-[#55B51F]">Continuous Yield</td>
                  <td className="p-4 sm:p-5 text-[#718078]">All Roof & Ground Mounts</td>
                  <td className="p-4 sm:p-5 text-[#101A13]">Maximizing 30-Year kWh power harvest</td>
                </tr>
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#063B18] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal animation="scale-up" className="space-y-6">
            <h3 className="text-3xl font-black font-display">Need a Customized Sizing Proposal?</h3>
            <p className="text-sm sm:text-base text-slate-200">
              Our solar design team will evaluate your roof structural capacity and utility bill history to deliver an itemized bill of materials.
            </p>
            <button
              onClick={() => onSelectSolution('Custom Engineering Project')}
              className="px-8 py-3.5 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-bold text-sm shadow-lg transition-all cursor-pointer"
            >
              Request Engineering Proposal
            </button>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
