import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitEnquiry } from '../utils/api';

/**
 * ConsultationModal Component
 * Implements Point (2) "Get a Quote" with all official fields from client document:
 * Name, Mobile number, Solar need (Residential / Commercial), State (AP, Telangana),
 * Select Monthly bill (0-500, 500-1000, 1000-1500, 1500-2000, 2000-2500, 2500-3000, 3000-3500, 3500-5000, More than 5000), Email, Location.
 */
export default function ConsultationModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    solarNeed: initialData?.propertyType?.includes('Commercial') ? 'Commercial' : 'Residential',
    state: initialData?.state || 'AP',
    monthlyBill: '2000 - 2500',
    location: initialData?.location || initialData?.city || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Synchronize initialData when location card or sizing tool is clicked
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        solarNeed: initialData.propertyType?.includes('Commercial')
          ? 'Commercial'
          : (initialData.solarNeed || prev.solarNeed),
        state: initialData.state || prev.state,
        location: initialData.location || initialData.city || prev.location,
        monthlyBill: initialData.monthlyBill || prev.monthlyBill,
      }));
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

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
    'Warangal', 'Khammam', 'Tirupathi', 'Nellore', 'Karimnagar'
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
        location: formData.location,
        formType: 'consultation',
        source: initialData?.capacity
          ? 'Solar Sizing Calculator (Consultation Modal)'
          : 'Official Get a Quote (Consultation Modal)',
        capacity: initialData?.capacity || '',
        savings: initialData?.savings || '',
        subsidy: initialData?.subsidy || '₹78,000',
        samDiscount: initialData?.samDiscount || '₹22,000',
        totalBenefit: '₹1,00,000',
        netCost: initialData?.netCost || '',
      });
    } catch (err) {
      console.warn('Consultation submission error:', err);
    }

    setSubmitting(false);
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#55B51F', '#F5A000', '#063B18'],
      });
    } catch {
      // no-op
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border-2 border-[#55B51F]/30 relative max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Dismiss / Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#718078] hover:text-[#063B18] transition-colors cursor-pointer z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Inner Scrollable Container with contained smooth scrollbar */}
        <div className="p-5 sm:p-7 modal-scrollbar flex-1 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#55B51F]/15 text-[#55B51F] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#063B18]">Consultation Booked!</h3>
              <p className="text-sm text-[#718078] leading-relaxed">
                Thank you, <strong className="text-[#063B18]">{formData.name}</strong>. Your solar requirement for <strong className="text-[#063B18]">{formData.solarNeed} Solar</strong> in <strong className="text-[#063B18]">{formData.location || formData.state}</strong> has been logged. Our engineering advisor will review your site and contact you within 24 hours at <strong className="text-[#063B18]">{formData.mobile}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-full bg-[#063B18] text-white text-xs font-bold hover:bg-[#0a4d21] cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-5 pr-10">
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

              {/* Offer Callout Banner - Compact, Centered, No Wrapping */}
              <div className="mb-5 p-2.5 sm:px-3 sm:py-2 rounded-2xl bg-gradient-to-r from-[#063B18] via-[#09471d] to-[#042810] text-white border border-[#55B51F]/30 shadow-md">
                
                {/* DESKTOP VIEW (sm:flex): Decreased size, guaranteed single-line, perfectly balanced */}
                <div className="hidden sm:flex items-center justify-between gap-3 text-slate-100">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-5 h-5 rounded-full bg-[#55B51F]/20 flex items-center justify-center shrink-0 border border-[#55B51F]/30">
                      <Sparkles className="w-3 h-3 text-[#F5A000]" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] lg:text-xs">
                      <span className="font-medium whitespace-nowrap">
                        Govt Subsidy: <strong className="text-[#55B51F] font-bold">₹78,000</strong>
                      </span>
                      <span className="text-slate-400 font-bold px-0.5">+</span>
                      <span className="font-medium whitespace-nowrap">
                        SAM Offer: <strong className="text-[#F5A000] font-bold">₹22,000</strong>
                      </span>
                    </div>
                  </div>

                  {/* Decreased font size, pure white text, space between rupee and amount */}
                  <div className="flex items-center shrink-0 pl-2">
                    <span className="font-black text-white text-xs lg:text-sm tracking-tight whitespace-nowrap">
                      = ₹ 1,00,000
                    </span>
                  </div>
                </div>

                {/* MOBILE VIEW (< sm): Clean 2-column, Total Benefit label removed, text vertically centered */}
                <div className="sm:hidden flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-5 h-5 rounded-full bg-[#55B51F]/20 flex items-center justify-center shrink-0 border border-[#55B51F]/30">
                      <Sparkles className="w-3 h-3 text-[#F5A000]" />
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

                  {/* Centered `= ₹ 1,00,000` text without Total Benefit label */}
                  <div className="shrink-0 flex items-center justify-center pl-2">
                    <span className="font-black text-white text-xs tracking-tight whitespace-nowrap">
                      = ₹ 1,00,000
                    </span>
                  </div>
                </div>

              </div>

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
                  className="w-full px-4 py-3 rounded-xl bg-[#F7FAF5] border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#F7FAF5] border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#F7FAF5] border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
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
                        : 'bg-[#F7FAF5] text-[#718078] border-slate-200 hover:border-[#55B51F]/40'
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
                        : 'bg-[#F7FAF5] text-[#718078] border-slate-200 hover:border-[#55B51F]/40'
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
                        : 'bg-[#F7FAF5] text-[#718078] border-slate-200 hover:border-[#55B51F]/40'
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
                        : 'bg-[#F7FAF5] text-[#718078] border-slate-200 hover:border-[#55B51F]/40'
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
                  className="w-full px-4 py-3 rounded-xl bg-[#F7FAF5] border border-slate-200 text-sm font-bold focus:outline-none focus:border-[#55B51F] text-[#101A13]"
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
                  className="w-full px-4 py-3 rounded-xl bg-[#F7FAF5] border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
                />

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {popularLocations.slice(0, 5).map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => setFormData({ ...formData, location: city })}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#063B18]/5 hover:bg-[#55B51F]/20 text-[#063B18] transition-colors cursor-pointer"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
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
          </div>
        )}
        </div>
      </div>
    </div>,
    document.body
  );
}
