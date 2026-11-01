import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import ScrollReveal from './ScrollReveal';

export default function ContactSection({ prefilledSolution }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    interestedSolution: prefilledSolution || 'Residential Solar',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync if prefilledSolution changes from external triggers
  const [prevSolution, setPrevSolution] = useState(prefilledSolution);
  if (prefilledSolution !== prevSolution) {
    setPrevSolution(prefilledSolution);
    setFormData((prev) => ({ ...prev, interestedSolution: prefilledSolution }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#55B51F', '#F5A000', '#063B18']
        });
      } catch {
        // no-op if confetti fails
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Form */}
          <ScrollReveal animation="fade-right" duration={800} className="lg:col-span-7 bg-[#F7FAF5] rounded-3xl p-6 sm:p-10 border border-[#55B51F]/20 shadow-lg">
            <h3 className="text-2xl font-extrabold text-[#063B18] mb-2 font-display">
              Request Feasibility Assessment
            </h3>
            <p className="text-sm text-[#718078] mb-8">
              Fill in your details below and our technical team will contact you within 24 business hours.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-[#55B51F]/30 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#55B51F]/15 text-[#55B51F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-[#063B18]">Inquiry Received!</h4>
                <p className="text-sm text-[#718078] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#063B18]">{formData.fullName}</strong>. Your inquiry for <strong className="text-[#063B18]">{formData.interestedSolution}</strong> has been logged. Our engineering specialist will reach out to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-[#063B18] text-white text-xs font-bold hover:bg-[#0a4d21] cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-2">
                    Full Name <span className="text-[#F5A000]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] focus:ring-2 focus:ring-[#55B51F]/20 text-[#101A13]"
                  />
                </div>

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-2">
                      Phone Number <span className="text-[#F5A000]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] focus:ring-2 focus:ring-[#55B51F]/20 text-[#101A13]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-2">
                      Email Address <span className="text-[#F5A000]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="rajesh@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] focus:ring-2 focus:ring-[#55B51F]/20 text-[#101A13]"
                    />
                  </div>
                </div>

                {/* Interested Solar Solution */}
                <div>
                  <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-2">
                    Interested Solar Solution
                  </label>
                  <select
                    name="interestedSolution"
                    value={formData.interestedSolution}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] focus:ring-2 focus:ring-[#55B51F]/20 text-[#101A13]"
                  >
                    <option value="Residential Solar">Residential Solar</option>
                    <option value="Commercial Solar">Commercial Solar</option>
                    <option value="Industrial Solar">Industrial Solar</option>
                    <option value="Solar Installation & Maintenance">Solar Installation & Maintenance</option>
                    <option value="Custom Engineering Project">Custom Engineering Project</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#063B18] uppercase tracking-wider mb-2">
                    Message / Rooftop Details (Optional)
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property type, approximate rooftop area, or current monthly electricity consumption..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#55B51F] focus:ring-2 focus:ring-[#55B51F]/20 text-[#101A13] resize-none"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-base font-bold shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 cursor-pointer"
                >
                  {submitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
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
                <h4 className="text-xl font-black text-white">
                  Corporate Office & Engineering Center
                </h4>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
                {/* Business Address Placeholder */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#55B51F] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block">Registered Address</span>
                    <p className="text-white/90 font-medium">
                      SAM GREEN POWER SOLUTIONS PRIVATE LIMITED<br />
                      [Official Business Address / Headquarters Placeholder]
                    </p>
                  </div>
                </div>

                {/* Contact Number Placeholder */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#55B51F] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block">Helpline & Inquiries</span>
                    <p className="text-white/90 font-medium">[Official Contact Number Placeholder]</p>
                  </div>
                </div>

                {/* Email Address Placeholder */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#55B51F] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block">Email Inquiries</span>
                    <p className="text-white/90 font-medium">[contact@samgreenpower.com Placeholder]</p>
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
