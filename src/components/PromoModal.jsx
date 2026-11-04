import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitEnquiry } from '../utils/api';

/**
 * PromoModal Component
 * Implements Point (1) and Point (2) from client specifications:
 * - Highlighted pricing: ₹78,000 (Subsidy) + ₹22,000 (Offer Amount) = ₹1,00,000 Total Benefits
 * - "Book a Free Consultation" button
 * - Expands to Point (2) "Get a Quote" form with exact client fields:
 *   Name, Mobile Number, Solar Need (Residential / Commercial), State (AP, Telangana),
 *   Monthly Bill (0-500, 500-1000, 1000-1500, 1500-2000, 2000-2500, 2500-3000, 3000-3500, 3500-5000, More than 5000), Email, Location.
 */
export default function PromoModal({ isOpen, onClose }) {
  // 'offer' view (showing matter & highlighted prices) or 'form' view (Point 2 form)
  const [view, setView] = useState('offer');

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    solarNeed: 'Residential', // 'Residential' | 'Commercial'
    state: 'AP', // 'AP' | 'Telangana'
    monthlyBill: '2000 - 2500',
    location: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
        formType: 'promo',
        source: 'Limited Period Solar Offer Popup',
        subsidy: '₹78,000',
        samDiscount: '₹22,000',
        totalBenefit: '₹1,00,000',
      });
    } catch (err) {
      console.warn('Promo submission note:', err);
    }

    setSubmitting(false);
    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#55B51F', '#F5A000', '#063B18'],
      });
    } catch {
      // no-op
    }
  };

  const handleResetAndClose = () => {
    setView('offer');
    setSubmitted(false);
    onClose();
  };

  return createPortal(
    <div data-testid="promo-modal" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border-2 border-[#55B51F]/30 relative max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Dismiss / Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#718078] hover:text-[#063B18] transition-colors cursor-pointer z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Inner Scroll Container */}
        <div className="p-4 sm:p-6 modal-scrollbar flex-1 overflow-y-auto">
          {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#55B51F]/15 text-[#55B51F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#55B51F] block">
              Inquiry Confirmed
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#063B18] font-display">
              Free Consultation Booked!
            </h3>
            <p className="text-sm text-[#718078] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#063B18]">{formData.name}</strong>. Your solar requirement for <strong className="text-[#063B18]">{formData.solarNeed} Solar</strong> in <strong className="text-[#063B18]">{formData.location || formData.state}</strong> has been logged. Our engineering specialist will call you at <strong className="text-[#063B18]">{formData.mobile}</strong> within 24 hours.
            </p>
            
            {/* Offer Claim Summary Pill */}
            <div className="p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20 text-xs font-bold text-[#063B18] inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F5A000]" />
              <span>Claimed: ₹78,000 PM Surya Ghar Subsidy + ₹22,000 SAM Discount</span>
            </div>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 rounded-full bg-[#063B18] text-white text-xs font-bold hover:bg-[#0a4d21] shadow-md cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        ) : view === 'offer' ? (
          /* ========================================================= */
          /* VIEW 1: PROMO OFFER WITH HIGHLIGHTED COSTS & BOOK BUTTON  */
          /* ========================================================= */
          <div className="space-y-3.5 sm:space-y-4 pt-0.5">
            
            {/* Header Badge */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white p-1 border border-[#55B51F]/30 shadow-xs shrink-0">
                <img src="/logo-128.png" alt="SAM GREEN POWER" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#55B51F]/15 text-[#063B18] text-[10px] font-extrabold tracking-wider uppercase border border-[#55B51F]/30">
                  <Sparkles className="w-3 h-3 text-[#F5A000]" />
                  <span>Limited Period Solar Offer</span>
                </span>
                <h3 className="text-base sm:text-lg font-black text-[#063B18] font-display mt-0.5 truncate">
                  SAM GREEN POWER SOLUTIONS PVT. LTD.
                </h3>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-[#063B18] tracking-tight leading-tight">
                Switch to Solar & Save Up to <span className="text-[#55B51F]">₹1,00,000</span>!
              </h4>
              <p className="text-xs sm:text-sm text-[#718078] mt-1 leading-relaxed">
                Take advantage of the verified central rooftop solar incentive combined with our exclusive engineering discount for Andhra Pradesh and Telangana.
              </p>
            </div>

            {/* HIGHLIGHTED PRICING CARD (Hardware Accelerated Container - Stable & Static on Scroll) */}
            <div
              className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#063B18] via-[#09471d] to-[#042810] text-white shadow-xl relative overflow-hidden border border-[#55B51F]/30"
              style={{
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                contain: 'paint'
              }}
            >
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#55B51F] block mb-2.5">
                Total Direct Financial Benefits:
              </span>

              {/* Formula & Highlighted Prices - Fixed 2-column layout with solid crisp containers */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pb-3 border-b border-white/15">
                {/* Subsidy Box */}
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/15 border border-white/25 shadow-xs">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-200 block truncate">
                    Central Govt Subsidy
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-[#55B51F] mt-0.5 tracking-tight">
                    ₹78,000
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 block truncate">PM Surya Ghar Scheme</span>
                </div>

                {/* Offer Amount Box */}
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/15 border border-[#F5A000]/50 shadow-xs">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-200 block truncate">
                    SAM Discount / Offer
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-[#F5A000] mt-0.5 tracking-tight">
                    ₹22,000
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 block truncate">Direct Company Rebate</span>
                </div>
              </div>

              {/* Total Combined Benefit */}
              <div className="pt-2.5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Total Savings & Subsidies:</span>
                  <p className="text-lg sm:text-xl font-black text-white">
                    ₹1,00,000 <span className="text-[11px] sm:text-xs font-semibold text-[#55B51F]">Combined Benefit</span>
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#55B51F] text-white text-[10px] sm:text-[11px] font-extrabold uppercase">
                    100% Guaranteed
                  </span>
                </div>
              </div>
            </div>

            {/* Matter Highlights */}
            <div className="space-y-1.5 text-xs text-[#101A13]/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#55B51F] shrink-0" />
                <span>Zero-cost on-site rooftop shadow analysis in AP & Telangana</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#55B51F] shrink-0" />
                <span>Tier-1 550W+ Monocrystalline Bifacial solar modules</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#55B51F] shrink-0" />
                <span>Full Discom net-metering liaison and zero-down loan facilitation</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-1 space-y-2">
              <button
                data-testid="book-consultation-btn"
                onClick={() => setView('form')}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-sm sm:text-base font-extrabold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer border border-[#55B51F]/40"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={handleResetAndClose}
                className="w-full text-center text-xs font-semibold text-[#718078] hover:text-[#063B18] py-0.5 cursor-pointer"
              >
                Maybe later, explore website
              </button>
            </div>

          </div>
        ) : (
          /* ========================================================= */
          /* VIEW 2: POINT (2) "GET A QUOTE" CONSULTATION FORM         */
          /* ========================================================= */
          <div className="space-y-5 pt-1">
            
            {/* Header with right padding to prevent collision with X close button */}
            <div className="pr-10 sm:pr-12">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#55B51F]">
                  Point 2 • Official Sizing Assessment
                </span>
                <button
                  type="button"
                  onClick={() => setView('offer')}
                  className="text-xs font-bold text-[#063B18] hover:text-[#55B51F] hover:underline cursor-pointer shrink-0"
                >
                  ← Back to Offer
                </button>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#063B18] font-display mt-1">
                Book a Free Consultation (Get a Quote)
              </h3>
              <p className="text-xs text-[#718078] mt-0.5 mb-3">
                Fill in the details below to claim your ₹78,000 subsidy + ₹22,000 offer amount.
              </p>
            </div>

            {/* Offer Callout Banner - Compact, Centered, No Wrapping */}
            <div className="p-2.5 sm:px-3 sm:py-2 rounded-2xl bg-gradient-to-r from-[#063B18] via-[#09471d] to-[#042810] text-white border border-[#55B51F]/30 shadow-md">
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

              {/* Solar Need: Residential vs Commercial (Point 2) */}
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

              {/* State: AP vs Telangana (Point 2) */}
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

              {/* Select Monthly Bill (Exact brackets from Point 2 in attached document) */}
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

              {/* Location (Point 1 & Point 2) */}
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
                
                {/* Quick selection chips for prominent cities */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {popularLocations.slice(0, 6).map((city) => (
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

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  {submitting ? 'Booking Consultation...' : 'Book a Free Consultation'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#718078] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#55B51F]" />
                <span>Zero Obligation • 24-Hour Engineer Callback Guaranteed</span>
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

