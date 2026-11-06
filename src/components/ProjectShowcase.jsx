import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, MapPin, Zap, ArrowRight, Eye, X } from 'lucide-react';
import { PROJECTS_DATA } from '../data/content';
import { Link } from 'react-router-dom';
import ScrollReveal, { ScrollStagger } from './ScrollReveal';

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Rooftop' },
    { id: 'commercial', label: 'Commercial Solar' },
    { id: 'industrial', label: 'Industrial Solar' },
    { id: 'large-scale', label: 'Large-Scale Installations' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F7FAF5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#55B51F]/10 border border-[#55B51F]/20 text-[#063B18] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#55B51F]" />
            <span>Demonstrated Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B18] tracking-tight font-display">
            Powering a Brighter Tomorrow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#718078] leading-relaxed">
            Explore turnkey solar photovoltaic installations across residential rooftops, corporate complexes, and industrial hubs.
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal animation="fade-up" delay={100} className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#063B18] text-white shadow-md'
                  : 'bg-white text-[#718078] hover:text-[#063B18] border border-slate-200/80 hover:border-[#55B51F]/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Project Gallery Grid */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={100}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#55B51F]/15 hover:border-[#55B51F] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Image Container with Hover zoom */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.capacity} in ${project.location} by SAM GREEN POWER`}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063B18]/80 via-black/20 to-transparent" />
                
                {/* Floating Capacity Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#55B51F]/30 text-xs font-bold text-[#063B18] flex items-center gap-1.5 shadow-sm">
                  <Zap className="w-3.5 h-3.5 text-[#F5A000]" />
                  <span>{project.capacity}</span>
                </div>

                {/* Inspect Button on hover */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Category & Location overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#55B51F] drop-shadow-sm block mb-1">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-white drop-shadow-sm leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Details */}
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
                    Details
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </ScrollStagger>

        {/* View All Projects Button */}
        <ScrollReveal animation="fade-up" delay={150} className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#063B18] hover:bg-[#0a4d21] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
          >
            <span>View Full Portfolio & Case Studies</span>
            <ArrowRight className="w-4 h-4 text-[#55B51F]" />
          </Link>
        </ScrollReveal>

        {/* Note on imagery */}
        <div className="mt-6 text-center text-xs text-[#718078]">
          <p>*Representative showcase installations engineered to SAM Green Power design specifications.</p>
        </div>

      </div>

      {/* Lightbox / Project Details Modal */}
      {activeModalProject && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#55B51F]/30 relative max-h-[90vh] flex flex-col">
            
            {/* Header Image */}
            <div className="relative h-64 sm:h-80 w-full shrink-0">
              <img
                src={activeModalProject.image}
                alt={`${activeModalProject.title} - ${activeModalProject.capacity}`}
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
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

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/15">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#718078] block">System Capacity</span>
                  <span className="text-base font-extrabold text-[#063B18]">{activeModalProject.capacity}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#718078] block">Project Location</span>
                  <span className="text-base font-extrabold text-[#063B18]">{activeModalProject.location}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B18]">Scope & Engineering</h4>
                <p className="text-sm text-[#718078] leading-relaxed">
                  {activeModalProject.description}
                </p>
                <p className="text-xs text-[#718078] leading-relaxed">
                  Engineered with high-yield photovoltaic cells, structural load certified mounting rails, and continuous remote cloud generation monitoring.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="w-full py-3 rounded-full bg-[#063B18] text-white text-xs font-bold hover:bg-[#0a4d21] transition-colors cursor-pointer"
                >
                  Close Inspection
                </button>
              </div>
            </div>

          </div>
        </div>,
        document.body
      )}
    </section>
  );
}

