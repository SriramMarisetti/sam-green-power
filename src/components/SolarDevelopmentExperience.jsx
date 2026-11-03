import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Compass,
  Layers,
  ShieldCheck
} from 'lucide-react';
import videoAsset from '../assets/solar_development_video.mp4';
import ScrollReveal from './ScrollReveal';

/**
 * SolarDevelopmentExperience Component
 * Displays the solar development process video in an auto-playing, silent, unified card
 * across both desktop and mobile viewports.
 * - Auto-plays continuously (muted, looped, playsInline).
 * - No scroll-locking or pinned scrollytelling.
 * - No audio controls or play/pause buttons.
 * - Highlights the 3 turnkey solar development stages with interactive timeline seeking.
 */
export default function SolarDevelopmentExperience({ onOpenQuote }) {
  const videoSrc = videoAsset || '/solar_development_video.mp4';
  const videoRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const processPhases = [
    {
      id: 1,
      phaseNum: '01',
      tag: 'Phase 01 • Engineering Assessment',
      title: '3D Rooftop Survey & Shadow Mapping',
      desc: 'High-precision drone LIDAR and optical 3D rooftop analysis calculating exact sun irradiance hours across AP & Telangana.',
      badge: '100% Shadow-Free Angle',
      icon: <Compass className="w-4 h-4 text-[#55B51F]" />,
      seekPercent: 0.08,
      details: ['Sub-centimeter roof azimuth profiling', 'Structural load & wind pressure calculation']
    },
    {
      id: 2,
      phaseNum: '02',
      tag: 'Phase 02 • High-Yield Deployment',
      title: 'Heavy-Duty Structure & 550W+ Bifacial Modules',
      desc: 'Hot-dip galvanized GI structures resilient to 150+ km/h cyclone gusts, paired with Tier-1 bifacial panels harvesting sunlight from both sides.',
      badge: 'Tier-1 Bifacial Modules',
      icon: <Layers className="w-4 h-4 text-[#F5A000]" />,
      seekPercent: 0.42,
      details: ['Galvanized anti-corrosion hardware', 'Bifacial rear-harvest (+15% extra energy)']
    },
    {
      id: 3,
      phaseNum: '03',
      tag: 'Phase 03 • Commissioning & Generation',
      title: 'Smart Inverter, Discom Net-Metering & Savings',
      desc: 'Full government liaison for bi-directional net-meter synchronization, unlocking up to ₹ 1,00,000 in subsidies with zero-bill generation.',
      badge: '₹ 1,00,000 Benefit Advantage',
      icon: <Zap className="w-4 h-4 text-[#55B51F]" />,
      seekPercent: 0.82,
      details: ['Bi-directional Discom liaison', '25-Year performance warranty']
    }
  ];

  // Sync active step as the video auto-plays
  const handleTimeUpdate = () => {
    if (!videoRef.current || !videoRef.current.duration) return;
    const progress = videoRef.current.currentTime / videoRef.current.duration;
    if (progress < 0.35) {
      setActiveStep(0);
    } else if (progress < 0.70) {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }
  };

  // Optional: tap a step to jump video to that moment
  const handleSeekStep = (index) => {
    if (!videoRef.current || !videoRef.current.duration) return;
    setActiveStep(index);
    videoRef.current.currentTime = processPhases[index].seekPercent * videoRef.current.duration;
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#031d0b] text-white relative overflow-hidden">
      
      {/* Background Soft Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#55B51F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#F5A000]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#55B51F]/15 border border-[#55B51F]/30 text-[#55B51F] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A000]" />
            <span>Turnkey Solar Installation Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
            Watch Our Solar Development Process
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
            Experience how our engineers transition your property from initial 3D rooftop survey to precision mounting and permanent zero-bill clean generation.
          </p>
        </ScrollReveal>

        {/* Unified Card Showcase (Same layout on Mobile & Desktop) */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="rounded-3xl bg-gradient-to-b from-[#063B18] via-[#09471d] to-[#042810] border-2 border-[#55B51F]/30 p-4 sm:p-6 lg:p-8 shadow-2xl overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* LEFT / TOP COLUMN: Auto-Playing Silent Video */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-2xl border border-white/15 group">
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onTimeUpdate={handleTimeUpdate}
                    className="w-full h-full object-cover"
                  />

                  {/* Subtle Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Video Watermark / Live Badge */}
                  <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider border border-white/20 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#55B51F] animate-ping" />
                      <span>Live Process Demonstration</span>
                    </span>
                  </div>

                  {/* Bottom Active Phase Pill Overlay on Video */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#55B51F]/40 text-[#55B51F] text-[10px] sm:text-xs font-black uppercase tracking-wider">
                      {processPhases[activeStep].tag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#55B51F] text-white text-[10px] font-black uppercase tracking-wider">
                      {processPhases[activeStep].badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT / BOTTOM COLUMN: 3 Key Process Stages & CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#55B51F] block">
                      3-Step Turnkey Timeline
                    </span>
                    <span className="text-[10px] text-slate-300 font-semibold">
                      Tap a stage to seek
                    </span>
                  </div>

                  {/* Process Step Cards */}
                  <div className="space-y-2.5">
                    {processPhases.map((phase, idx) => {
                      const isActive = activeStep === idx;
                      return (
                        <div
                          key={phase.id}
                          onClick={() => handleSeekStep(idx)}
                          className={`p-3.5 rounded-2xl transition-all cursor-pointer border ${
                            isActive
                              ? 'bg-white/15 border-[#55B51F] shadow-lg ring-1 ring-[#55B51F]/50'
                              : 'bg-black/20 border-white/10 hover:bg-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 font-black text-xs mt-0.5 ${
                              isActive ? 'bg-[#55B51F] text-white shadow-xs' : 'bg-white/10 text-slate-300'
                            }`}>
                              {phase.phaseNum}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <h4 className="text-xs sm:text-sm font-black text-white truncate">
                                  {phase.title}
                                </h4>
                                <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${
                                  isActive ? 'bg-[#55B51F] text-white' : 'text-slate-400 bg-white/5'
                                }`}>
                                  {phase.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                                {phase.desc}
                              </p>
                              {isActive && (
                                <div className="mt-2 pt-2 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-1">
                                  {phase.details.map((detail, dIdx) => (
                                    <span key={dIdx} className="text-[10px] text-slate-200 flex items-center gap-1 font-medium">
                                      <CheckCircle2 className="w-3 h-3 text-[#55B51F]" />
                                      <span>{detail}</span>
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Consultation CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenQuote && onOpenQuote()}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-xl hover:scale-102 active:scale-98 transition-all cursor-pointer border border-[#55B51F]/40"
                  >
                    <span>Book Free Rooftop Site Survey</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    Verified AP & Telangana site survey with ₹ 1,00,000 maximum benefit entitlement
                  </p>
                </div>

              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}
