import React, { useState } from 'react';
import { MapPin, CheckCircle2, ArrowRight, Search, ShieldCheck, Zap } from 'lucide-react';
import { LOCATIONS_DATA } from '../data/locations';
import ScrollReveal, { ScrollStagger } from './ScrollReveal';

export default function OurLocations({ onBookInCity }) {
  const [activeState, setActiveState] = useState('ap'); // 'ap' | 'telangana'
  const [searchQuery, setSearchQuery] = useState('');

  const currentLocations = LOCATIONS_DATA[activeState] || [];
  
  const filtered = currentLocations.filter((loc) =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="locations" className="py-20 md:py-28 bg-[#F7FAF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#55B51F]/10 border border-[#55B51F]/20 text-[#063B18] text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#55B51F]" />
            <span>Regional Presence Across 28 Districts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B18] tracking-tight font-display">
            Our Service Locations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#718078] leading-relaxed">
            Local rooftop solar engineering teams, fast Discom net-metering approvals, and 5-year AMC support throughout Andhra Pradesh and Telangana.
          </p>
        </ScrollReveal>

        {/* State Toggle & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* State Tabs */}
          <div className="flex rounded-2xl bg-white p-1.5 border border-[#55B51F]/20 shadow-sm w-full sm:w-auto">
            <button
              onClick={() => setActiveState('ap')}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeState === 'ap'
                  ? 'bg-[#063B18] text-white shadow-md'
                  : 'text-[#718078] hover:text-[#063B18]'
              }`}
            >
              Andhra Pradesh (16 Hubs)
            </button>
            <button
              onClick={() => setActiveState('telangana')}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeState === 'telangana'
                  ? 'bg-[#063B18] text-white shadow-md'
                  : 'text-[#718078] hover:text-[#063B18]'
              }`}
            >
              Telangana (12 Hubs)
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#718078] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your city or district..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-[#101A13] focus:outline-none focus:border-[#55B51F]"
            />
          </div>
        </div>

        {/* Locations Grid */}
        <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={40}>
          {filtered.map((loc) => (
            <div
              key={loc.id}
              onClick={() => onBookInCity && onBookInCity(loc.city, activeState === 'ap' ? 'AP' : 'Telangana')}
              className="p-5 rounded-2xl bg-white border border-[#55B51F]/15 hover:border-[#55B51F] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#55B51F]/10 text-[#55B51F] flex items-center justify-center group-hover:bg-[#063B18] group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  {loc.isHub && (
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#F5A000]/15 text-[#b07300] border border-[#F5A000]/30">
                      Regional Hub
                    </span>
                  )}
                </div>

                <h3 className="font-extrabold text-[#063B18] text-base group-hover:text-[#55B51F] transition-colors">
                  {loc.name}
                </h3>
                <p className="text-xs text-[#718078] mt-0.5 font-medium">
                  {loc.region}
                </p>
                <div className="flex items-center gap-1.5 mt-3 text-[11px] font-semibold text-[#101A13]/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#55B51F] shrink-0" />
                  <span>{activeState === 'ap' ? 'APEPDCL / APSPDCL Net-Metering' : 'TSSPDCL / TSNPDCL Net-Metering'}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onBookInCity && onBookInCity(loc.city, activeState === 'ap' ? 'AP' : 'Telangana')}
                  className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#F7FAF5] group-hover:bg-[#55B51F] group-hover:text-white text-[#063B18] text-xs font-bold transition-all cursor-pointer"
                >
                  <span>Book Free Survey</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </ScrollStagger>

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-300">
            <MapPin className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-[#063B18]">No exact location match for "{searchQuery}"</p>
            <p className="text-xs text-[#718078] mt-1">Our mobile solar teams service all surrounding taluks across Andhra Pradesh and Telangana.</p>
          </div>
        )}

        {/* Turnaround Assurance */}
        <ScrollReveal animation="fade-up" delay={150} className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#55B51F]/20 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#063B18] text-[#55B51F] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-[#063B18] text-base">
                Local On-Site Survey Guaranteed in All 28 Districts
              </h4>
              <p className="text-xs sm:text-sm text-[#718078]">
                Certified site engineers arrive at your home or factory with precision drone and shadow-mapping tools.
              </p>
            </div>
          </div>
          <button
            onClick={() => onBookInCity && onBookInCity('Regional Office', activeState === 'ap' ? 'AP' : 'Telangana')}
            className="shrink-0 px-6 py-3 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-xs sm:text-sm font-bold shadow-md cursor-pointer"
          >
            Schedule Survey in Your Town
          </button>
        </ScrollReveal>

      </div>
    </section>
  );
}

