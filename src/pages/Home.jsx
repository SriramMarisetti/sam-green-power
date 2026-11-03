import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import SolarSolutions from '../components/SolarSolutions';
import SolarDevelopmentExperience from '../components/SolarDevelopmentExperience';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import SolarCalculator from '../components/SolarCalculator';
import ProjectShowcase from '../components/ProjectShowcase';
import OurLocations from '../components/OurLocations';
import CallToAction from '../components/CallToAction';
import ContactSection from '../components/ContactSection';
import HomeFaqSection from '../components/HomeFaqSection';

export default function Home({ onOpenQuote, onSelectSolution, onCalculateQuote, contactSolution }) {
  const handleBookInCity = (city, state) => {
    onOpenQuote({
      location: city,
      state: state
    });
  };

  return (
    <>
      {/* Full-Bleed Solar & Sky Hero Section */}
      <Hero onOpenQuote={onOpenQuote} />

      {/* About Us Section */}
      <AboutUs onOpenLearnMore={onOpenQuote} />

      {/* Solar Solutions Showcase */}
      <SolarSolutions onSelectSolution={onSelectSolution} />

      {/* Solar Development & Installation 3D Experience (Video Scrollytelling on Desktop, Interactive Card on Mobile) */}
      <SolarDevelopmentExperience onOpenQuote={onOpenQuote} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How It Works Timeline (10 Steps from Client Page 4) */}
      <HowItWorks onStartJourney={onOpenQuote} />

      {/* Interactive Solar Sizing & Savings Calculator (Page 2) */}
      <SolarCalculator onCalculateQuote={onCalculateQuote} />

      {/* Project Showcase Gallery */}
      <ProjectShowcase />

      {/* Our Locations Network (Pages 3 & 4: 16 in AP & 12 in Telangana) */}
      <section className="py-6 bg-[#F7FAF5]">
        <OurLocations onBookInCity={handleBookInCity} />
      </section>

      {/* Call To Action Banner */}
      <CallToAction onOpenQuote={onOpenQuote} />

      {/* Contact Section */}
      <ContactSection prefilledSolution={contactSolution} />

      {/* Frequently Asked Questions (Ending before the Footer) */}
      <HomeFaqSection />
    </>
  );
}

