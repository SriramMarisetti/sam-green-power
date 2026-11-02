import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, MapPin, Zap, ArrowRight, Eye, X } from 'lucide-react';
import { PROJECTS_DATA } from '../data/content';
import ScrollReveal, { ScrollStagger } from '../components/ScrollReveal';

export default function ProjectsPage({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Rooftop' },
    { id: 'commercial', label: 'Commercial Solar' },
    { id: 'industrial', label: 'Industrial Solar' },
    { id: 'large-scale', label: 'Large-Scale Installations' },
    { id: 'maintenance', label: 'Solar O&M Servicing' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-[#F7FAF5] pb-20">
      
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#063B18] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#55B51F]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5A000]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up" className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#55B51F] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Projects • Commissioned Systems</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display">
              Our Projects & Commissioned Systems.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Review our executed rooftop and ground-mounted solar photovoltaic installations across residential residences, corporate parks, manufacturing factories, and large-scale renewable facilities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery & Filter Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Pills */}
          <ScrollReveal animation="fade-up" delay={100} className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#063B18] text-white shadow-md'
                    : 'bg-[#F7FAF5] text-[#718078] hover:text-[#063B18] border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </ScrollReveal>

          {/* Grid with Cascading Reveal */}
          <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={100}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#55B51F]/15 hover:border-[#55B51F] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-1.5"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063B18]/85 via-black/25 to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#55B51F]/30 text-xs font-bold text-[#063B18] flex items-center gap-1.5 shadow-sm">
                    <Zap className="w-3.5 h-3.5 text-[#F5A000]" />
                    <span>{project.capacity}</span>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#55B51F] drop-shadow-sm block mb-1">
                      {project.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-white drop-shadow-sm leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs sm:text-sm text-[#718078] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#101A13]/70">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#55B51F]" />
                      <span>{project.location}</span>
                    </div>
                    <span className="text-[#55B51F] font-bold group-hover:underline flex items-center gap-1">
                      Inspect
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </ScrollStagger>

        </div>
      </section>

      {/* Lightbox / Project Details Modal */}
      {activeModalProject && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#55B51F]/30 relative max-h-[90vh] flex flex-col">
            <div className="relative h-64 sm:h-80 w-full shrink-0">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
              
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-black transition-colors shadow-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#55B51F] block mb-1">
                  {activeModalProject.categoryLabel}
                </span>
                <h3 className="text-2xl font-black text-white">
                  {activeModalProject.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/15">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#718078] block">System Capacity</span>
                  <span className="text-base font-extrabold text-[#063B18]">{activeModalProject.capacity}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#718078] block">Location</span>
                  <span className="text-base font-extrabold text-[#063B18]">{activeModalProject.location}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B18]">Scope & Engineering</h4>
                <p className="text-sm text-[#718078] leading-relaxed">
                  {activeModalProject.description}
                </p>
                <p className="text-xs text-[#718078] leading-relaxed">
                  Engineered with Tier-1 high-wattage photovoltaic modules, structural wind load certified mounting rails, and continuous remote cloud generation monitoring.
                </p>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onOpenQuote();
                  }}
                  className="flex-1 py-3 rounded-full bg-[#55B51F] text-white text-xs font-bold hover:bg-[#469A18] transition-colors cursor-pointer"
                >
                  Request Similar Installation Quote
                </button>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-6 py-3 rounded-full bg-slate-100 text-[#063B18] text-xs font-bold hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
