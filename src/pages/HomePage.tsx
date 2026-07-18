import React from 'react';
import { MapPin } from 'lucide-react';
import HeroSection from '../components/Hero/HeroSection';
import TopPackagesSection from '../components/TopPackages/TopPackagesSection';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import ScrapbookSection from '../components/Scrapbook/ScrapbookSection';
import InclusionsSection from '../components/InclusionsSection';
import ContactCTA from '../components/ContactCTA';

const destinationRibbon = [
  'Ladakh', 'Goa', 'Kerala', 'Rajasthan', 'Sikkim', 'Manali', 'Kashmir', 'Varanasi',
  'Andaman', 'Ladakh', 'Goa', 'Kerala', 'Rajasthan', 'Sikkim', 'Manali', 'Kashmir', 'Varanasi', 'Andaman'
];

const HomePage: React.FC = () => {
  return (
    <div className="relative bg-[var(--color-navy)] text-white">
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. MARQUEE RIBBON */}
      <section className="relative z-10 py-28 flex items-center bg-[#0a1020]/85 border-y border-[var(--color-gold)]/20 shadow-sm backdrop-blur-md overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content flex gap-16 items-center">
            {destinationRibbon.map((place, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-[var(--color-gold)]" />
                <span
                  className="text-[13px] font-bold uppercase tracking-[0.18em] text-white/75"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {place}
                </span>
                <span className="w-2 h-2 rounded-full bg-[var(--color-gold-light)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TOP PACKAGES */}
      <TopPackagesSection />

      {/* 4. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 5. TRAVEL SCRAPBOOK */}
      <ScrapbookSection />

      {/* 6. WHAT'S INCLUDED */}
      <InclusionsSection />

      {/* 7. CONTACT CTA */}
      <ContactCTA />
    </div>
  );
};

export default HomePage;
