import React, { useState, useEffect, useRef } from 'react';
import {
  CalendarCheck,
  Compass,
  FileSpreadsheet,
  Banknote,
  Wrench,
  Zap,
  Gauge,
  GraduationCap,
  Settings,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Clock,
  Sparkles,
  ShieldCheck,
  Award
} from 'lucide-react';
import { HOW_IT_WORKS } from '../data/content';
import ScrollReveal, { ScrollStagger } from './ScrollReveal';

export default function HowItWorks({ onStartJourney }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activePhaseFilter, setActivePhaseFilter] = useState('all');
  const spotlightRef = useRef(null);

  // Auto-progression timer if play mode is enabled
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % HOW_IT_WORKS.length);
      }, 4500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const getStepIcon = (index, className = "w-5 h-5") => {
    switch (index) {
      case 0:
        return <CalendarCheck className={className} />;
      case 1:
        return <Compass className={className} />;
      case 2:
        return <FileSpreadsheet className={className} />;
      case 3:
        return <Banknote className={className} />;
      case 4:
        return <Wrench className={className} />;
      case 5:
        return <Zap className={className} />;
      case 6:
        return <Gauge className={className} />;
      case 7:
        return <GraduationCap className={className} />;
      case 8:
        return <Settings className={className} />;
      case 9:
        return <Headphones className={className} />;
      default:
        return <CheckCircle2 className={className} />;
    }
  };

  const handleStepSelect = (idx) => {
    setActiveStep(idx);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? HOW_IT_WORKS.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % HOW_IT_WORKS.length);
    setIsPlaying(false);
  };

  const currentStepData = HOW_IT_WORKS[activeStep];

  // Phase Definitions for Filter Tabs
  const phases = [
    { id: 'all', label: 'All 10 Steps', count: '10 Steps' },
    { id: 'Phase 1', label: '1. Discovery & Design', steps: [0, 1, 2] },
    { id: 'Phase 2', label: '2. Loan & Installation', steps: [3, 4] },
    { id: 'Phase 3', label: '3. Discom Net Metering', steps: [5, 6] },
    { id: 'Phase 4', label: '4. Training & 5-Yr Care', steps: [7, 8, 9] },
  ];

  const filteredSteps = activePhaseFilter === 'all'
    ? HOW_IT_WORKS
    : HOW_IT_WORKS.filter((step) => step.phase.startsWith(activePhaseFilter));

  return (
    <section id="process" className="py-20 md:py-28 bg-[#F7FAF5] relative overflow-hidden">
      {/* Decorative Energy Glow Backgrounds */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#55B51F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#F5A000]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#55B51F]/10 border border-[#55B51F]/25 text-[#063B18] text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A000] animate-pulse" />
            <span>Page 4 • 10-Step Turnkey Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B18] tracking-tight font-display">
            Process for Solar Installations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#718078] leading-relaxed">
            From preliminary booking to Discom net-metering synchronization and 5-year proactive support, experience India's most structured turnkey solar adoption journey.
          </p>

          {/* Phase Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {phases.map((p) => {
              const isSelected = activePhaseFilter === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePhaseFilter(p.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#063B18] text-white shadow-md scale-105'
                      : 'bg-white text-[#718078] border border-slate-200 hover:border-[#55B51F] hover:text-[#063B18]'
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* MODULE 1: INTERACTIVE TIMELINE SCRUBBER & ANIMATED ENERGY CONDUIT         */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#55B51F]/20 shadow-xl mb-12 relative overflow-hidden">
          
          {/* Top Scrubber Control Bar: Step Pills & Auto-Play Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#55B51F] block">
                Interactive Step Scrubber
              </span>
              <h3 className="text-lg font-black text-[#063B18]">
                Milestone Navigation (01 to 10)
              </h3>
            </div>

            {/* Scrubber Navigation Buttons */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isPlaying
                    ? 'bg-[#F5A000] text-[#063B18] shadow-sm font-extrabold'
                    : 'bg-[#F7FAF5] text-[#063B18] border border-slate-200 hover:bg-[#55B51F]/15'
                }`}
                title={isPlaying ? 'Pause Auto Tour' : 'Play Auto-Tour'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#55B51F]" />}
                <span>{isPlaying ? 'Auto-Advancing' : 'Play Tour'}</span>
              </button>

              <div className="flex items-center gap-1 bg-[#F7FAF5] p-1 rounded-full border border-slate-200">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-white hover:bg-[#55B51F] text-[#063B18] hover:text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  title="Previous Step"
                  aria-label="Previous Step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-black text-[#063B18] px-2 min-w-[50px] text-center">
                  {currentStepData.step} / 10
                </span>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-white hover:bg-[#55B51F] text-[#063B18] hover:text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  title="Next Step"
                  aria-label="Next Step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Horizontal Scrubber Track with Animated Energy Beam */}
          <div className="pt-8 pb-4 relative overflow-x-auto no-scrollbar">
            {/* Background Track Line */}
            <div className="absolute top-14 left-8 right-8 h-1.5 bg-slate-100 rounded-full z-0 hidden lg:block" />

            {/* Glowing Active Progress Conduit Line */}
            <div
              className="absolute top-14 left-8 h-1.5 bg-gradient-to-r from-[#55B51F] via-[#F5A000] to-[#55B51F] rounded-full z-0 transition-all duration-500 hidden lg:block"
              style={{
                width: `calc(${((activeStep) / (HOW_IT_WORKS.length - 1)) * 92}% + 16px)`
              }}
            />

            {/* 10 Interactive Milestone Nodes */}
            <div className="flex items-center justify-between min-w-[700px] lg:min-w-0 relative z-10 px-2">
              {HOW_IT_WORKS.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <button
                    key={step.step}
                    onClick={() => handleStepSelect(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none transition-transform"
                  >
                    {/* Pulsing Node Circle */}
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-xs transition-all duration-300 relative ${
                        isActive
                          ? 'bg-[#063B18] text-[#55B51F] scale-125 shadow-xl ring-4 ring-[#55B51F]/30 -translate-y-1'
                          : isPassed
                          ? 'bg-[#55B51F] text-white shadow-sm'
                          : 'bg-white text-[#718078] border-2 border-slate-200 group-hover:border-[#55B51F] group-hover:text-[#063B18]'
                      }`}
                    >
                      {isPassed ? (
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      ) : (
                        <span>{step.step}</span>
                      )}

                      {/* Animated Solar Spark on Active Node */}
                      {isActive && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#F5A000] rounded-full animate-ping" />
                      )}
                    </div>

                    {/* Step Title Label under Node */}
                    <span
                      className={`text-[10px] mt-2.5 font-bold tracking-tight max-w-[68px] text-center line-clamp-1 transition-colors ${
                        isActive
                          ? 'text-[#063B18] font-black scale-105'
                          : 'text-[#718078] group-hover:text-[#063B18]'
                      }`}
                    >
                      {step.title.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SPOTLIGHT HERO CARD: DEEP ENGAGEMENT VIEW FOR SELECTED STEP              */}
          {/* ========================================================================= */}
          <div
            ref={spotlightRef}
            className="mt-6 rounded-3xl bg-gradient-to-br from-[#063B18] via-[#09481f] to-[#063B18] text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-500"
          >
            {/* Ambient Background Glows & Watermark Numeral */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#55B51F]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5A000]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 text-[150px] sm:text-[220px] font-black text-white/[0.04] select-none pointer-events-none font-display leading-none">
              {currentStepData.step}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Icon, Badges, Title & Main Description (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Stage & Duration Pill Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#55B51F] text-xs font-black uppercase tracking-wider border border-white/15 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#F5A000]" />
                    <span>{currentStepData.phase}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5A000]/20 text-[#F5A000] text-xs font-bold border border-[#F5A000]/30 backdrop-blur-md">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentStepData.timeline}</span>
                  </span>
                </div>

                {/* Step Title & Subtitle */}
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#55B51F] text-[#063B18] flex items-center justify-center font-black shadow-lg shrink-0">
                      {getStepIcon(activeStep, "w-6 h-6")}
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#55B51F] block">
                        Step {currentStepData.step} of 10 • {currentStepData.shortDesc}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-display">
                        {currentStepData.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Detailed Explanation Paragraph */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal pt-1">
                  {currentStepData.detail}
                </p>

                {/* Value Proposition Callout Box */}
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#55B51F]/20 flex items-center justify-center text-[#55B51F] shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block">Client Value Assurance:</span>
                    <p className="text-xs sm:text-sm font-semibold text-white">{currentStepData.keyBenefit}</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Key Deliverables & Action (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                
                <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/15">
                    <span className="text-xs font-black uppercase tracking-wider text-[#55B51F]">
                      Official Deliverables Checklist
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#55B51F]" />
                  </div>

                  <ul className="space-y-2.5">
                    {currentStepData.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#55B51F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Primary Trigger Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => onStartJourney && onStartJourney()}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>Book Free Consultation (Step 01)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MODULE 2: FULL 10-STEP ALTERNATING CIRCUIT TIMELINE PATHWAY               */}
        {/* ========================================================================= */}
        <div className="relative pt-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#55B51F] block">
              Continuous Engineering Conduit
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#063B18] font-display mt-1">
              Complete 10-Step Visual Pathway
            </h3>
            <p className="text-xs sm:text-sm text-[#718078] mt-1">
              Scroll through each operational milestone or click any card to inspect full technical deliverables.
            </p>
          </div>

          {/* Central Glowing Power Cable (Desktop: Center; Mobile: Left side) */}
          <div className="absolute top-28 bottom-20 left-6 sm:left-8 lg:left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-[#55B51F] via-[#F5A000] to-[#55B51F] rounded-full z-0 shadow-sm opacity-60" />

          {/* Stepper Pathway Items */}
          <div className="space-y-8 sm:space-y-12 relative z-10">
            {filteredSteps.map((step, idx) => {
              const globalIndex = parseInt(step.step, 10) - 1;
              const isSelected = activeStep === globalIndex;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  onClick={() => handleStepSelect(globalIndex)}
                  className={`cursor-pointer transition-all duration-300 relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } pl-14 sm:pl-16 lg:pl-0`}
                >
                  
                  {/* Central Node Circle with Pulse Halo */}
                  <div
                    className={`absolute left-6 sm:left-8 lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs transition-all duration-300 z-20 shadow-md ${
                      isSelected
                        ? 'bg-[#063B18] text-[#55B51F] scale-125 ring-4 ring-[#55B51F]/40 shadow-xl'
                        : 'bg-white text-[#063B18] border-2 border-[#55B51F]/40 hover:scale-110'
                    }`}
                  >
                    {getStepIcon(globalIndex, "w-5 h-5")}
                  </div>

                  {/* Connecting Horizontal Branch on Desktop */}
                  <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r ${
                      isEven
                        ? 'right-1/2 w-8 from-transparent to-[#55B51F]'
                        : 'left-1/2 w-8 from-[#55B51F] to-transparent'
                    }`}
                  />

                  {/* Timeline Card (Half width on desktop, full width on mobile) */}
                  <div className={`w-full lg:w-[46%] ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    <div
                      className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 border ${
                        isSelected
                          ? 'bg-white border-[#55B51F] shadow-xl ring-2 ring-[#55B51F]/25 -translate-y-1'
                          : 'bg-white/90 hover:bg-white border-slate-200/80 hover:border-[#55B51F]/40 shadow-sm hover:shadow-md'
                      }`}
                    >
                      {/* Top Header Row of Card */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-[#063B18] text-[#55B51F] flex items-center justify-center text-xs font-black">
                            {step.step}
                          </span>
                          <span className="text-[11px] font-black uppercase tracking-wider text-[#55B51F]">
                            {step.phase}
                          </span>
                        </div>

                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#F7FAF5] border border-slate-200 text-[#718078]">
                          {step.timeline}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-black text-[#063B18] tracking-tight leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-xs font-bold text-[#55B51F] mt-0.5 mb-2">
                        {step.shortDesc}
                      </p>

                      {/* Detail Text */}
                      <p className="text-xs sm:text-sm text-[#718078] leading-relaxed">
                        {step.detail}
                      </p>

                      {/* Deliverables Pills */}
                      <div className="pt-3 mt-3 border-t border-slate-100 space-y-1.5">
                        {step.deliverables.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-[#101A13]/85">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#55B51F] shrink-0" />
                            <span className="line-clamp-1">{d}</span>
                          </div>
                        ))}
                      </div>

                      {/* Footer Badge */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                        <span className="text-[#718078] font-semibold">
                          Click to view technical specs
                        </span>
                        {isSelected && (
                          <span className="text-[#55B51F] font-black flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#F5A000]" />
                            <span>Active in Spotlight</span>
                          </span>
                        )}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM CALLOUT STRIP: READY TO BEGIN JOURNEY                              */}
        {/* ========================================================================= */}
        <ScrollReveal animation="fade-up" delay={200} className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#063B18] text-white shadow-xl relative overflow-hidden border border-[#55B51F]/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#55B51F]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left space-y-1">
                <span className="text-xs font-black uppercase tracking-widest text-[#55B51F] block">
                  Turnkey Guarantee
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white font-display">
                  Start Your 10-Step Journey with Step 01 Today.
                </h4>
                <p className="text-xs sm:text-sm text-slate-200">
                  Free rooftop shadow survey • ₹78,000 Govt Subsidy + ₹22,000 SAM Discount • 5-Year Maintenance.
                </p>
              </div>

              <button
                onClick={() => onStartJourney && onStartJourney()}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer shrink-0 border border-[#55B51F]/40"
              >
                <span>Book Step 01: Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}