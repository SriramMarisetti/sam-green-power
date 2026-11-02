import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Zap, Sparkles, MapPin, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#55B51F', '#F5A000', '#063B18']
        });
      } catch {
        // no-op
      }
    }, 600);
  };

  const handleResetAndClose = () => {
    setView('offer');
    setSubmitted(false);
    onClose();
  };

  return createPortal(
    <div data-testid="promo-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border-2 border-[#55B51F]/30 relative max-h-[92vh] overflow-y-auto">
        
        {/* Dismiss / Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#718078] hover:text-[#063B18] transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

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
          <div className="space-y-6 pt-1">
            
            {/* Header Badge */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 border border-[#55B51F]/30 shadow-sm shrink-0">
                <img src="/logo-128.png" alt="SAM GREEN POWER" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#55B51F]/15 text-[#063B18] text-[10px] font-extrabold tracking-wider uppercase border border-[#55B51F]/30">
                  <Sparkles className="w-3 h-3 text-[#F5A000]" />
                  <span>Limited Period Solar Offer</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#063B18] font-display mt-0.5">
                  SAM GREEN POWER SOLUTIONS PVT. LTD.
                </h3>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h4 className="text-2xl sm:text-3xl font-black text-[#063B18] tracking-tight leading-tight">
                Switch to Solar & Save Up to <span className="text-[#55B51F]">₹1,00,000</span>!
              </h4>
              <p className="text-sm text-[#718078] mt-2 leading-relaxed">
                Take advantage of the verified central rooftop solar incentive combined with our exclusive engineering discount for Andhra Pradesh and Telangana.
              </p>
            </div>

            {/* HIGHLIGHTED PRICING CARD (Client Requirement 1) */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#063B18] via-[#0b4e22] to-[#063B18] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5A000]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#55B51F]/20 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[11px] font-bold uppercase tracking-widest text-[#55B51F] block mb-3">
                Total Direct Financial Benefits:
              </span>

              {/* Formula & Highlighted Prices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4 border-b border-white/15">
                {/* Subsidy Box */}
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block">
                    Central Govt Subsidy
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#55B51F] mt-0.5">
                    ₹78,000
                  </div>
                  <span className="text-[10px] text-slate-300">PM Surya Ghar Scheme</span>
                </div>

                {/* Offer Amount Box */}
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-[#F5A000]/40">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block">
                    SAM Discount / Offer
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#F5A000] mt-0.5">
                    ₹22,000
                  </div>
                  <span className="text-[10px] text-slate-300">Direct Company Rebate</span>
                </div>
              </div>

              {/* Total Combined Benefit */}
              <div className="pt-3 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-200 font-medium">Total Savings & Subsidies:</span>
                  <p className="text-xl sm:text-2xl font-black text-white">
                    ₹1,00,000 <span className="text-xs font-semibold text-[#55B51F]">Combined Benefit</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-[#55B51F] text-white text-[11px] font-extrabold uppercase">
                    100% Guaranteed
                  </span>
                </div>
              </div>
            </div>

            {/* Matter Highlights */}
            <div className="space-y-2 text-xs sm:text-sm text-[#101A13]/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#55B51F] shrink-0" />
                <span>Zero-cost on-site rooftop shadow analysis in AP & Telangana</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#55B51F] shrink-0" />
                <span>Tier-1 550W+ Monocrystalline Bifacial solar modules</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#55B51F] shrink-0" />
                <span>Full Discom net-metering liaison and zero-down loan facilitation</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2.5">
              <button
                data-testid="book-consultation-btn"
                onClick={() => setView('form')}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-base font-extrabold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer border border-[#55B51F]/40"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={handleResetAndClose}
                className="w-full text-center text-xs font-semibold text-[#718078] hover:text-[#063B18] py-1 cursor-pointer"
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
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#55B51F]">
                  Point 2 • Official Sizing Assessment
                </span>
                <button
                  type="button"
                  onClick={() => setView('offer')}
                  className="text-xs font-bold text-[#063B18] hover:underline cursor-pointer"
                >
                  ← Back to Offer
                </button>
              </div>
              <h3 className="text-2xl font-black text-[#063B18] font-display mt-1">
                Book a Free Consultation (Get a Quote)
              </h3>
              <p className="text-xs text-[#718078] mt-0.5">
                Fill in the details below to claim your ₹78,000 subsidy + ₹22,000 offer amount.
              </p>
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
                  placeholder="Enter your full name"
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
                  {submitting ? 'Booking Consultation...' : 'Submit & Book Free Consultation'}
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
    </div>,
    document.body
  );
}

