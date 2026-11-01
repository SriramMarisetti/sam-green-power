import React from 'react';
import { Leaf, ShieldCheck, Sun, Zap, CheckCircle2, Globe2, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal, { ScrollStagger } from '../components/ScrollReveal';

export default function AboutPage({ onOpenQuote }) {
  return (
    <div className="bg-[#F7FAF5]">
      
      {/* Page Header Banner */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-[#063B18] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#55B51F]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5A000]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up" className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#55B51F] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Leaf className="w-3.5 h-3.5" />
              <span>About Our Enterprise</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display">
              Powering Sustainable Transitions with Engineering Precision.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              SAM GREEN POWER SOLUTIONS PRIVATE LIMITED is dedicated to delivering durable, high-yield photovoltaic systems that empower homeowners, businesses, and industrial facilities with clean energy independence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Narrative & Company Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Image */}
            <ScrollReveal animation="fade-right" duration={800} className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative group">
                <img
                  src="/images/about-solar.jpg"
                  alt="SAM Green Power Photovoltaic System"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063B18]/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#55B51F]/20 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#718078] block">
                        Official Brand Promise
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[#063B18]">
                        Clean Energy • Smarter Living • Better Future
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#55B51F]/15 flex items-center justify-center text-[#55B51F]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column Text */}
            <ScrollReveal animation="fade-left" delay={150} duration={800} className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#55B51F] block">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#063B18] tracking-tight font-display leading-snug">
                  Clean Energy. Smarter Living. Better Future.
                </h2>
                
                <div className="p-5 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20">
                  <p className="text-base text-[#101A13] font-semibold leading-relaxed">
                    "At <strong>SAM GREEN POWER SOLUTIONS PRIVATE LIMITED</strong>, we believe in creating a sustainable future through smarter solar energy solutions. We aim to help homes and businesses embrace renewable energy with efficient, reliable, and innovative solar solutions."
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#718078] leading-relaxed">
                  Renewable energy is no longer just an alternative; it is an economic and environmental imperative. We bridge the gap between cutting-edge solar photovoltaic advancements and seamless on-ground implementation, ensuring every kilowatt of power installed performs at peak harvest for decades.
                </p>
              </div>

              {/* Guiding Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/15">
                  <Compass className="w-6 h-6 text-[#55B51F] mb-2" />
                  <h4 className="font-bold text-[#063B18] text-sm">Our Mission</h4>
                  <p className="text-xs text-[#718078] mt-1">To accelerate India’s transition to solar energy through engineered turnkey excellence and accessible financing models.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/15">
                  <Globe2 className="w-6 h-6 text-[#F5A000] mb-2" />
                  <h4 className="font-bold text-[#063B18] text-sm">Our Vision</h4>
                  <p className="text-xs text-[#718078] mt-1">A cleaner, self-reliant future where clean solar power is the default primary energy choice for every roof.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Engineering Excellence Standards */}
      <section className="py-20 bg-[#F7FAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl sm:text-4xl font-black text-[#063B18] tracking-tight font-display">
              Our Technical Engineering Standards
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#718078]">
              We adhere to uncompromising engineering protocols to safeguard your asset longevity and energy generation.
            </p>
          </ScrollReveal>

          <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={120}>
            <div className="p-8 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm hover:shadow-xl transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#063B18] text-[#55B51F] flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-extrabold text-[#063B18]">Tier-1 Monocrystalline PV</h4>
              <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                We exclusively deploy Tier-1 high-wattage (550W+) mono PERC and TopCon bifacial modules featuring superior low-light temperature coefficients and anti-PID technology.
              </p>
              <ul className="text-xs text-[#101A13]/80 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#55B51F]" />
                  <span>22.8%+ Module Efficiency</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#55B51F]" />
                  <span>25-Year Performance Warranty</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm hover:shadow-xl transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#063B18] text-[#55B51F] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-extrabold text-[#063B18]">Structural Wind Rating</h4>
              <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                Mounting structures are engineered using anodized aluminum and hot-dip galvanized steel certified to withstand cyclonic wind loads up to 170 km/h with zero roof penetration.
              </p>
              <ul className="text-xs text-[#101A13]/80 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#55B51F]" />
                  <span>Anti-Corrosion Anodization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#55B51F]" />
                  <span>Non-Penetrative Ballast Options</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm hover:shadow-xl transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#063B18] text-[#55B51F] flex items-center justify-center">
                <Sun className="w-6 h-6 text-[#F5A000]" />
              </div>
              <h4 className="text-xl font-extrabold text-[#063B18]">Smart Cloud Telemetry</h4>
              <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                Real-time inverter IoT telemetry delivers mobile app visibility into your daily kilowatt generation, grid export credits, and instant automated fault diagnostics.
              </p>
              <ul className="text-xs text-[#101A13]/80 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#55B51F]" />
                  <span>24/7 Mobile Generation App</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#55B51F]" />
                  <span>Automated O&M Health Alerts</span>
                </li>
              </ul>
            </div>
          </ScrollStagger>

        </div>
      </section>

      {/* Action Banner */}
      <section className="py-16 bg-[#063B18] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <ScrollReveal animation="scale-up" className="space-y-6">
            <h3 className="text-3xl sm:text-4xl font-black font-display">
              Ready to Build a Greener Future with Us?
            </h3>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
              Book a complimentary site survey and receive a customized 3D solar layout with accurate financial ROI projection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="px-8 py-3.5 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-bold text-sm shadow-lg transition-all cursor-pointer"
              >
                Get Free Consultation
              </button>
              <Link
                to="/calculator"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
              >
                Explore Solar Calculator
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
