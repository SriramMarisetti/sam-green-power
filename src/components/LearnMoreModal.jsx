import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function LearnMoreModal({ isOpen, onClose, onOpenQuote }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#55B51F]/30 relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#718078] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white p-1 border border-[#55B51F]/30 shadow-md">
            <img src="/logo-128.png" alt="SAM GREEN POWER" className="w-full h-full object-contain rounded-full" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#55B51F] block">
              Corporate Dossier & Vision
            </span>
            <h3 className="text-2xl font-black text-[#063B18] font-display">
              SAM GREEN POWER SOLUTIONS PRIVATE LIMITED
            </h3>
          </div>
        </div>

        <div className="space-y-6 text-sm text-[#718078] leading-relaxed">
          <div className="p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20">
            <h4 className="font-bold text-[#063B18] text-base mb-1">Our Core Mission</h4>
            <p>
              "At SAM GREEN POWER SOLUTIONS PRIVATE LIMITED, we believe in creating a sustainable future through smarter solar energy solutions. We aim to help homes and businesses embrace renewable energy with efficient, reliable, and innovative solar solutions."
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-extrabold text-[#063B18] text-sm uppercase tracking-wider">
              Engineering Principles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-slate-200 flex items-start gap-3 bg-white">
                <CheckCircle2 className="w-5 h-5 text-[#55B51F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#063B18] block text-xs">Tier-1 Silicon PV</span>
                  <span className="text-[11px]">Precision monocrystalline cells for highest irradiance yield.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 flex items-start gap-3 bg-white">
                <CheckCircle2 className="w-5 h-5 text-[#55B51F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#063B18] block text-xs">Structural Wind Safety</span>
                  <span className="text-[11px]">Certified anodized mounting structures engineered against cyclonic winds.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 flex items-start gap-3 bg-white">
                <CheckCircle2 className="w-5 h-5 text-[#55B51F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#063B18] block text-xs">Bi-Directional Net Metering</span>
                  <span className="text-[11px]">Seamless utility liaisoning and grid power bank synchronization.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 flex items-start gap-3 bg-white">
                <CheckCircle2 className="w-5 h-5 text-[#55B51F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#063B18] block text-xs">Lifetime Telemetry</span>
                  <span className="text-[11px]">24/7 cloud telemetry to ensure ongoing peak kilowatt output.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#063B18] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-white text-sm">Ready to start your solar journey?</p>
              <p className="text-xs text-slate-300">Book an engineering site assessment with our experts.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-bold text-xs shrink-0 cursor-pointer"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
