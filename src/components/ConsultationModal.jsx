import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConsultationModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Residential Rooftop',
    systemSize: initialData?.capacity || '5 kW Standard System',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#55B51F', '#F5A000', '#063B18']
        });
      } catch {
        // no-op if confetti is blocked
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#55B51F]/30 relative max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#718078] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#55B51F]/15 text-[#55B51F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#063B18]">Consultation Booked!</h3>
            <p className="text-sm text-[#718078] leading-relaxed">
              Thank you, <strong className="text-[#063B18]">{formData.name}</strong>. Our solar engineering advisor will review your site requirements and contact you within 24 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#063B18] text-white text-xs font-bold hover:bg-[#0a4d21] cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 border border-[#55B51F]/30 shadow-sm shrink-0">
                <img src="/logo-128.png" alt="SAM GREEN POWER" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold text-[#55B51F] tracking-wider block">
                  Free Feasibility Consultation
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#063B18] font-display">
                  Get Your Free Solar Quote
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-1.5">
                  Your Name <span className="text-[#F5A000]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh S."
                  className="w-full px-4 py-3 rounded-xl bg-[#F7FAF5] border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-[#F5A000]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#F7FAF5] border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-[#F5A000]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ramesh@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F7FAF5] border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-1.5">
                  Installation Category
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7FAF5] border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
                >
                  <option value="Residential Rooftop">Residential Rooftop Solar</option>
                  <option value="Commercial Complex">Commercial Complex / Office</option>
                  <option value="Industrial Manufacturing">Industrial Shed / Factory</option>
                  <option value="Ground-Mount Large Scale">Ground-Mount Large Scale</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-1.5">
                  Approximate System Requirement
                </label>
                <input
                  type="text"
                  value={formData.systemSize}
                  onChange={(e) => setFormData({ ...formData, systemSize: e.target.value })}
                  placeholder="e.g. 5 kW, 10 kW, 50 kW or Monthly Bill ₹10,000"
                  className="w-full px-4 py-3 rounded-xl bg-[#F7FAF5] border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] text-[#101A13]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  {submitting ? 'Processing Request...' : 'Confirm Free Consultation Request'}
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
  );
}
