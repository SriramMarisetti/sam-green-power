import React from 'react';
import { MapPin, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import OurLocations from '../components/OurLocations';
import ScrollReveal from '../components/ScrollReveal';

export default function LocationsPage({ onOpenQuote }) {
  const handleBookInCity = (city, state) => {
    onOpenQuote({
      location: city,
      state: state
    });
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
              <MapPin className="w-3.5 h-3.5" />
              <span>Andhra Pradesh & Telangana Coverage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display">
              Our Locations & Service Network.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              SAM GREEN POWER SOLUTIONS PRIVATE LIMITED proudly operates across 16 districts in Andhra Pradesh and 12 districts in Telangana with localized engineering depots and 24-hour on-site service support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Locations Directory */}
      <OurLocations onBookInCity={handleBookInCity} />

      {/* CTA Strip */}
      <section className="py-16 bg-[#063B18] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <ScrollReveal animation="scale-up">
            <h3 className="text-3xl font-black font-display">Don't See Your Specific Mandal or Village?</h3>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto mt-2">
              Our mobile solar survey teams cover all rural and urban regions within Andhra Pradesh and Telangana. Request a free feasibility callback today.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onOpenQuote()}
                className="px-8 py-3.5 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-bold text-sm shadow-lg transition-all cursor-pointer"
              >
                Book a Free Consultation in Your Area
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

