import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import SolarSolutions from '../components/SolarSolutions';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import SolarCalculator from '../components/SolarCalculator';
import ProjectShowcase from '../components/ProjectShowcase';
import CallToAction from '../components/CallToAction';
import ContactSection from '../components/ContactSection';

export default function Home({ onOpenQuote, onSelectSolution, onCalculateQuote, contactSolution }) {
  return (
    <>
      {/* Full-Bleed Solar & Sky Hero Section */}
      <Hero onOpenQuote={onOpenQuote} />

      {/* About Us Section */}
      <AboutUs onOpenLearnMore={onOpenQuote} />

      {/* Solar Solutions Showcase */}
      <SolarSolutions onSelectSolution={onSelectSolution} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How It Works Timeline */}
      <HowItWorks onStartJourney={onOpenQuote} />

      {/* Interactive Solar Sizing & Savings Calculator */}
      <SolarCalculator onCalculateQuote={onCalculateQuote} />

      {/* Project Showcase Gallery */}
      <ProjectShowcase />

      {/* Call To Action Banner */}
      <CallToAction onOpenQuote={onOpenQuote} />

      {/* Contact Section */}
      <ContactSection prefilledSolution={contactSolution} />
    </>
  );
}

