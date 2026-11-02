import React from 'react';
import ContactSection from '../components/ContactSection';
import { MessageSquare, Clock, MapPin, ShieldCheck } from 'lucide-react';
import ScrollReveal, { ScrollStagger } from '../components/ScrollReveal';

export default function ContactPage({ prefilledSolution }) {
  return (
    <div className="bg-[#F7FAF5] pb-20">
      
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#063B18] text-white overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#55B51F]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5A000]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#55B51F] text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Connect with Engineering Specialists</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
              Let's Power Your Future Together.
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-2">
              Reach out to our certified solar engineering team for a personalized rooftop feasibility survey, system sizing assessment, or turnkey quotation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Contact Section (Header hidden to prevent duplicate headings) */}
      <ContactSection prefilledSolution={prefilledSolution} hideHeader={true} />

      {/* Turnaround Protocol Guarantees */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={120}>
          <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#55B51F]/15 text-[#55B51F] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-[#063B18] text-sm">24-Hour Callback</h4>
              <p className="text-xs text-[#718078] mt-0.5">Prompt technical response to all feasibility inquiries.</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#063B18] text-[#55B51F] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-[#063B18] text-sm">Zero-Cost Survey</h4>
              <p className="text-xs text-[#718078] mt-0.5">Complimentary physical or drone rooftop assessment.</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#55B51F]/20 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F5A000]/15 text-[#F5A000] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-[#063B18] text-sm">On-Site Engineering</h4>
              <p className="text-xs text-[#718078] mt-0.5">Precision shadow analysis and CAD layout delivery.</p>
            </div>
          </div>
        </ScrollStagger>
      </section>

    </div>
  );
}
