import React from 'react';
import { Leaf, ShieldCheck, Sun, Zap, CheckCircle2, Globe2, Compass, Mail, Phone, MapPin, Award, Users, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal, { ScrollStagger } from '../components/ScrollReveal';

export default function AboutPage({ onOpenQuote }) {
  return (
    <div className="bg-[#F7FAF5]">
      
      {/* Page Header Banner */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#063B18] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#55B51F]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5A000]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up" className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#55B51F] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Leaf className="w-3.5 h-3.5" />
              <span>About Us • Page 2 Client Specifications</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display">
              Clean Energy. Smarter Living. Better Future.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              SAM GREEN POWER SOLUTIONS PRIVATE LIMITED is dedicated to delivering durable, high-yield photovoltaic systems that empower homeowners, businesses, and industrial facilities with clean energy independence across Andhra Pradesh and Telangana.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Narrative: Who We Are & What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Image */}
            <ScrollReveal animation="fade-right" duration={800} className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative group">
                <img
                  src="/images/about-solar.jpg"
                  alt="SAM Green Power Photovoltaic System"
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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
              
              {/* Who we are? */}
              <div className="space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#55B51F] block">
                  Point 2 • Profile Overview
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#063B18] tracking-tight font-display">
                  Who We Are?
                </h2>
                
                <div className="p-5 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20">
                  <p className="text-base text-[#101A13] font-semibold leading-relaxed">
                    "At <strong>SAM GREEN POWER SOLUTIONS PRIVATE LIMITED</strong>, we believe in creating a sustainable future through smarter solar energy solutions. We aim to help homes and businesses embrace renewable energy with efficient, reliable, and innovative solar solutions."
                  </p>
                </div>
              </div>

              {/* What we do? */}
              <div className="space-y-3 pt-2">
                <h3 className="text-2xl font-black text-[#063B18] tracking-tight font-display">
                  What We Do?
                </h3>
                <p className="text-sm sm:text-base text-[#718078] leading-relaxed">
                  We are a premier solar engineering, procurement, and construction (EPC) company offering end-to-end solar installations across Andhra Pradesh and Telangana. We specialize in residential rooftop systems, commercial installations, industrial shed arrays, agricultural solar pumps, and seamless Discom net-metering synchronization with zero-down bank loan assistance.
                </p>
              </div>

              {/* Mission & Vision Cards (Page 2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#55B51F]">
                    <Compass className="w-5 h-5" />
                    <h4 className="font-extrabold text-[#063B18] text-sm">Our Mission</h4>
                  </div>
                  <p className="text-xs text-[#718078] leading-relaxed">
                    To accelerate India's transition to renewable energy through turnkey engineering excellence, transparent pricing, and accessible financing models for every property.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#F5A000]">
                    <Globe2 className="w-5 h-5" />
                    <h4 className="font-extrabold text-[#063B18] text-sm">Our Vision</h4>
                  </div>
                  <p className="text-xs text-[#718078] leading-relaxed">
                    To establish a greener, carbon-neutral tomorrow where intelligent rooftop solar power is the primary default energy choice across Andhra Pradesh and Telangana.
                  </p>
                </div>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SECTION: Why SAM GREEN POWER SOLUTIONS PVT LTD (Exact Page 2 Heading) */}
      <section className="py-20 bg-[#F7FAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#55B51F] block mb-2">
              Page 2 • Core Differentiators
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-[#063B18] tracking-tight font-display">
              Why SAM GREEN POWER SOLUTIONS PVT LTD?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#718078]">
              We combine certified engineering standards with unmatched local support in 16 AP and 12 Telangana districts.
            </p>
          </ScrollReveal>

          <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={90}>
            
            {/* Reason 1 */}
            <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm hover:shadow-xl transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#063B18] text-[#55B51F] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-[#063B18]">Tier-1 Equipment Only</h4>
              <p className="text-xs text-[#718078] leading-relaxed">
                Exclusively deploying 550W+ Monocrystalline bifacial panels with 25-year performance warranties and high-efficiency smart inverters.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm hover:shadow-xl transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#55B51F] text-white flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-[#063B18]">₹1,00,000 Benefit Advantage</h4>
              <p className="text-xs text-[#718078] leading-relaxed">
                Full facilitation of ₹78,000 PM Surya Ghar Central subsidy plus ₹22,000 SAM company discount directly applied to your system.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm hover:shadow-xl transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#063B18] text-[#F5A000] flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-[#063B18]">5-Year Ongoing Support</h4>
              <p className="text-xs text-[#718078] leading-relaxed">
                Proactive Annual Maintenance Contracts (AMC), periodic panel cleaning, Discom net-metering liaison, and 24-hr technician dispatch.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm hover:shadow-xl transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#55B51F] text-[#063B18] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-[#063B18]">28 District Hubs</h4>
              <p className="text-xs text-[#718078] leading-relaxed">
                Localized engineering depots in 16 AP districts and 12 Telangana districts for rapid on-site shadow analysis and physical support.
              </p>
            </div>

          </ScrollStagger>

        </div>
      </section>

      {/* Corporate Contact Details Section (Page 2 Requirement: Email, Contact number, Address) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#063B18] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#55B51F]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#55B51F] block mb-1">
                  Official Corporate Contact Information
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                  SAM GREEN POWER SOLUTIONS PRIVATE LIMITED
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/15">
                
                {/* Address */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#55B51F]">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Corporate Office Address</span>
                  </div>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    D No 2-5-127, Ryathu Bazar, NTR Dist,<br />
                    Andhra Pradesh, India, 521456<br />
                    <span className="text-xs text-[#55B51F]">Serving all AP & Telangana</span>
                  </p>
                </div>

                {/* Contact Number */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#55B51F]">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Contact Number</span>
                  </div>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    <a href="tel:+91701320449" className="hover:text-[#55B51F] transition-colors">
                      +91 701320449
                    </a><br />
                    <span className="text-xs text-slate-300">Mon - Sat: 9:00 AM - 6:30 PM</span>
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#55B51F]">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Official Mail ID</span>
                  </div>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    <a href="mailto:Infosamgreenpower@gmail.com" className="hover:text-[#55B51F] transition-colors">
                      Infosamgreenpower@gmail.com
                    </a><br />
                    <span className="text-xs text-slate-300">24-hr response guarantee</span>
                  </p>
                </div>

              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-3.5 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-extrabold text-sm shadow-md transition-all cursor-pointer"
                >
                  Book a Free Consultation
                </button>
                <Link
                  to="/locations"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
                >
                  View All 28 Service Locations
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}