import React from 'react';
import InteractiveSolarCalculator from './InteractiveSolarCalculator';
import ScrollReveal from './ScrollReveal';

export default function SolarCalculator({ onCalculateQuote }) {
  return (
    <section id="calculator" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" duration={800}>
          <InteractiveSolarCalculator onCalculateQuote={onCalculateQuote} />
        </ScrollReveal>
      </div>
    </section>
  );
}
