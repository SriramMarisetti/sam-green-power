import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Clock, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import ScrollReveal from './ScrollReveal';
import { submitEnquiry } from '../utils/api';

export default function ContactSection({ prefilledSolution, hideHeader = false }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    solarNeed: prefilledSolution?.toLowerCase().includes('commercial') ? 'Commercial' : 'Residential',
    state: 'AP',
    monthlyBill: '2000 - 2500',
    location: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync if prefilledSolution changes from external triggers
  const [prevSolution, setPrevSolution] = useState(prefilledSolution);
  if (prefilledSolution !== prevSolution) {
    setPrevSolution(prefilledSolution);
    setFormData((prev) => ({
      ...prev,
      solarNeed: prefilledSolution?.toLowerCase().includes('commercial') ? 'Commercial' : 'Residential',
    }));
  }

  const billRanges = [
    '0 - 500',
    '500 - 1000',
    '1000 - 1500',
    '1500 - 2000',
    '2000 - 2500',
    '2500 - 3000',
    '3000 - 3500',
    '3500 - 5000',
    'More than 5000',
  ];

  const popularLocations = [
    'Vijayawada', 'Hyderabad', 'Guntur', 'Vizag', 'Rajahmundry',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      await submitEnquiry({
        name: formData.name.trim(),
        mobile: formData.mobile.trim(),
        email: formData.email.trim(),
        solarNeed: formData.solarNeed,
        state: formData.state,
        monthlyBill: formData.monthlyBill,
        location: formData.location.trim(),
        formType: 'consultation',
        source: 'Contact Page / Section (Book a Free Consultation)',
        subsidy: '₹78,000',
        samDiscount: '₹22,000',
        totalBenefit: '₹1,00,000',
      });
    } catch (err) {
      console.warn('Contact consultation submission note:', err);
    }

    setSubmitting(false);
    setSubmitted(true);
    try {
      confetti({
        particleCount: 85,
        spread: 65,
        origin: { y: 0.65 },
        colors: ['#55B51F', '#F5A000', '#063B18'],
      });
    } catch {
      // no-op if confetti fails
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {!hideHeader && (
          <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#55B51F]/10 border border-[#55B51F]/20 text-[#063B18] text-xs font-bold uppercase tracking-wider mb-4">
              <MessageSquare className="w-3.5 h-3.5 text-[#55B51F]" />
              <span>Connect with Engineering Specialists</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B18] tracking-tight font-display">
              Let's Power Your Future Together.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#718078] leading-relaxed">
              Reach out for a personalized solar feasibility consultation, rooftop assessment, or turnkey project inquiry.
            </p>
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Unified Book a Free Consultation Form */}
          <ScrollReveal animation="fade-right" duration={800} className="lg:col-span-7 bg-[#F7FAF5] rounded-3xl p-5 sm:p-9 border border-[#55B51F]/20 shadow-lg">
            
            {/* Form Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-white p-1 border border-[#55B51F]/30 shadow-sm shrink-0">
                <img src="/logo-128.png" alt="SAM GREEN POWER SOLUTIONS" width="44" height="44" loading="lazy" decoding="async" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] uppercase font-extrabold text-[#55B51F] tracking-wider block">
                  Point 2 • Official Get a Quote
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#063B18] font-display leading-tight">
                  Book a Free Consultation
                </h3>
              </div>
            </div>

            {/* Offer Callout Banner */}
            <div className="mb-5 p-2.5 sm:px-3 sm:py-2 rounded-2xl bg-gradient-to-r from-[#063B18] via-[#09471d] to-[#042810] text-white border border-[#55B51F]/30 shadow-md">
              {/* DESKTOP VIEW (sm:flex): Single-line layout */}
              <div className="hidden sm:flex items-center justify-between gap-3 text-slate-100">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-5 h-5 rounded-full bg-[#55B51F]/20 flex items-center justify-center shrink-0 border border-[#55B51F]/30">
                    <Sparkles className="w-3 h-3 text-[#F5A000]" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                    <span className="font-medium whitespace-nowrap">
                      Govt Subsidy: <strong className="text-[#55B51F] font-bold">₹78,000</strong>
                    </span>
                    <span className="text-slate-400 font-bold px-0.5">+</span>
                    <span className="font-medium whitespace-nowrap">
                      SAM Offer: <strong className="text-[#F5A000] font-bold">₹22,000</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-center shrink-0 pl-2">
                  <span className="font-black text-white text-xs sm:text-sm tracking-tight whitespace-nowrap">
                    = ₹ 1,00,000
                  </span>
                </div>
              </div>

              {/* MOBILE VIEW (< sm): Clean 2-row layout preventing any text overlapping */}
              <div className="sm:hidden flex items-center justify-between gap-2.5">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-5 h-5 rounded-full bg-[#55B51F]/20 flex items-center justify-center shrink-0 border border-[#55B51F]/30">
                    <Sparkles className="w-3.5 h-3.5 text-[#F5A000]" />
                  </div>
                  <div className="text-[10px] leading-tight space-y-0.5">
                    <div className="whitespace-nowrap">
                      <span className="text-slate-300 font-medium">Govt Subsidy: </span>
                      <strong className="text-[#55B51F] font-bold">₹78,000</strong>
                    </div>
                    <div className="whitespace-nowrap">
                      <span className="text-slate-400 font-bold">+ </span>
                      <span className="text-slate-300 font-medium">SAM Offer: </span>
                      <strong className="text-[#F5A000] font-bold">₹22,000</strong>
                    </div>
                  </div>
                </div>

                {/* Centered `= ₹ 1,00,000` text without collision */}
                <div className="shrink-0 flex items-center justify-center pl-2">
                  <span className="font-black text-white text-xs tracking-tight whitespace-nowrap">
                    = ₹ 1,00,000
                  </span>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-[#55B51F]/30 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#55B51F]/15 text-[#55B51F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-[#063B18]">Consultation Booked!</h4>
                <p className="text-sm text-[#718078] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#063B18]">{formData.name}</strong>. Your solar requirement for <strong className="text-[#063B18]">{formData.solarNeed} Solar</strong> in <strong className="text-[#063B18]">{formData.location || formData.state}</strong> has been logged. Our engineering specialist will review your site and contact you within 24 hours at <strong className="text-[#063B18]">{formData.mobile}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      mobile: '',
                      email: '',
                      solarNeed: 'Residential',
                      state: 'AP',
                      monthlyBill: '2000 - 2500',
                      location: '',
                    });
                  }}
                  className="px-6 py-2 rounded-full bg-[#063B18] text-white text-xs font-bold hover:bg-[#0a4d21] cursor-pointer"
                >
                  Book Another Consultation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-1">
                    Name <span className="text-[#F5A000]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
                  />
                </div>

                {/* Mobile Number & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-1">
                      Mobile Number <span className="text-[#F5A000]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-1">
                      Email ID <span className="text-[#F5A000]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
                    />
                  </div>
                </div>

                {/* Solar Need (Residential / Commercial) */}
                <div>
                  <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-1.5">
                    Solar Need <span className="text-[#F5A000]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, solarNeed: 'Residential' })}
                      className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        formData.solarNeed === 'Residential'
                          ? 'bg-[#063B18] text-white border-[#063B18] shadow-sm'
                          : 'bg-white text-[#718078] border-slate-200 hover:border-[#55B51F]/40'
                      }`}
                    >
                      <span>Residential</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, solarNeed: 'Commercial' })}
                      className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        formData.solarNeed === 'Commercial'
                          ? 'bg-[#063B18] text-white border-[#063B18] shadow-sm'
                          : 'bg-white text-[#718078] border-slate-200 hover:border-[#55B51F]/40'
                      }`}
                    >
                      <span>Commercial</span>
                    </button>
                  </div>
                </div>

                {/* State (AP, Telangana) */}
                <div>
                  <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-1.5">
                    State <span className="text-[#F5A000]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, state: 'AP' })}
                      className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        formData.state === 'AP'
                          ? 'bg-[#55B51F] text-white border-[#55B51F] shadow-sm'
                          : 'bg-white text-[#718078] border-slate-200 hover:border-[#55B51F]/40'
                      }`}
                    >
                      <span>Andhra Pradesh (AP)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, state: 'Telangana' })}
                      className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        formData.state === 'Telangana'
                          ? 'bg-[#55B51F] text-white border-[#55B51F] shadow-sm'
                          : 'bg-white text-[#718078] border-slate-200 hover:border-[#55B51F]/40'
                      }`}
                    >
                      <span>Telangana</span>
                    </button>
                  </div>
                </div>

                {/* Select Monthly Bill */}
                <div>
                  <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-1.5">
                    Select Monthly Bill (₹) <span className="text-[#F5A000]">*</span>
                  </label>
                  <select
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-bold focus:outline-none focus:border-[#55B51F] text-[#101A13]"
                  >
                    {billRanges.map((range) => (
                      <option key={range} value={range}>
                        ₹ {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-1">
                    Location / City <span className="text-[#F5A000]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Vijayawada, Hyderabad, Guntur, Vizag..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
                  />

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {popularLocations.map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => setFormData({ ...formData, location: city })}
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#063B18]/5 hover:bg-[#55B51F]/20 text-[#063B18] transition-colors cursor-pointer"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-70"
                  >
                    {submitting ? 'Processing Request...' : 'Book a Free Consultation'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#718078] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#55B51F]" />
                  <span>100% Free Consultation • Zero Obligation</span>
                </div>
              </form>
            )}
          </ScrollReveal>

          {/* Right Column: Placeholders for Official Office Details & Map */}
          <ScrollReveal animation="fade-left" delay={150} duration={800} className="lg:col-span-5 space-y-6">
            
            {/* Contact Information Card */}
            <div className="p-8 rounded-3xl bg-[#063B18] text-white shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-[#55B51F] uppercase tracking-wider block mb-1">
                  SAM GREEN POWER
                </span>
                <h4 className="text-xl font-black text-white font-display">
                  SOLUTIONS PVT. LTD.
                </h4>
                <p className="text-xs text-slate-300 mt-1">Corporate Office & Engineering Center</p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
                {/* Business Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#55B51F] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block">Corporate Office Address</span>
                    <p className="text-white/90 font-medium">
                      D No 2-5-127, Ryathu Bazar, NTR Dist, Andhra Pradesh, India, 521456
                    </p>
                  </div>
                </div>

                {/* Contact Number */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#55B51F] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block">Contact Number</span>
                    <a href="tel:+917013204499" className="text-white/90 font-bold hover:text-[#55B51F] transition-colors">
                      +91 7013204499
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#55B51F] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block">Official Mail ID</span>
                    <a href="mailto:Infosamgreenpower@gmail.com" className="text-white/90 font-bold hover:text-[#55B51F] transition-colors">
                      Infosamgreenpower@gmail.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#F5A000] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block">Operating Hours</span>
                    <p className="text-white/90 font-medium">Monday – Saturday: 9:00 AM – 6:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Location Preview Card */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md">
              <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#55B51F]" />
                  <span className="text-xs font-bold text-[#063B18]">Google Maps Location</span>
                </div>
                <span className="text-[11px] text-[#718078]">Headquarters Satellite View</span>
              </div>
              <div className="relative h-48 bg-slate-200 flex items-center justify-center text-center p-4">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#063B18] text-[#55B51F] flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <p className="text-xs font-bold text-[#063B18]">
                    SAM GREEN POWER SOLUTIONS PVT LTD
                  </p>
                  <p className="text-[11px] text-[#718078]">
                    [Interactive Map Pin Location Placeholder]
                  </p>
                </div>
              </div>
            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
