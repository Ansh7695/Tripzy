import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import AnimatedTree from './AnimatedTree';
import StatsStrip from './StatsStrip';
import ScrollIndicator from './ScrollIndicator';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const contentY = useTransform(scrollY, [0, 800], [0, -40]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // GSAP Staggered Entrance Timeline
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      gsap.set('.gsap-glow', { opacity: 0 });
      gsap.set('.gsap-tree', { opacity: 0, scale: 0.96 });
      gsap.set('.gsap-badge', { opacity: 0, x: -20 });
      gsap.set('.gsap-title-line', { opacity: 0, y: 35 });
      gsap.set('.gsap-desc', { opacity: 0, y: 20 });
      gsap.set('.gsap-btn', { opacity: 0, y: 25 });
      gsap.set('.gsap-status-card', { opacity: 0, x: 40, scale: 0.95 });
      gsap.set('.gsap-stats', { opacity: 0, y: 30 });
      gsap.set('.gsap-scroll-ind', { opacity: 0 });

      tl.to('.gsap-glow', { opacity: 1, duration: 2.5 })
        .to('.gsap-tree', { opacity: 1, scale: 1, duration: 2 }, '-=2')
        .to('.gsap-badge', { opacity: 1, x: 0, duration: 0.8 }, '-=1.4')
        .to('.gsap-title-line', { opacity: 1, y: 0, stagger: 0.18, duration: 1 }, '-=0.8')
        .to('.gsap-desc', { opacity: 1, y: 0, duration: 0.9 }, '-=0.5')
        .to('.gsap-btn', { opacity: 1, y: 0, stagger: 0.12, duration: 0.8 }, '-=0.6')
        .to('.gsap-status-card', { opacity: 1, x: 0, scale: 1, duration: 1.1 }, '-=0.8')
        .to('.gsap-stats', { opacity: 1, y: 0, duration: 1 }, '-=0.7')
        .to('.gsap-scroll-ind', { opacity: 1, duration: 0.8 }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="dark-section relative w-full min-h-screen md:h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-navy)] text-white"
    >
      {/* Background Tree — positioned right 45% */}
      <div className="gsap-tree absolute inset-0 w-full h-full z-0">
        <AnimatedTree />
      </div>

      {/* Warm volumetric glow */}
      <div className="gsap-glow absolute inset-0 pointer-events-none mix-blend-screen z-[5]"
        style={{
          background: 'radial-gradient(ellipse at 70% 40%, rgba(212,165,116,0.08) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(194,112,58,0.04) 0%, transparent 50%)'
        }}
      />

      {/* Main Content */}
      <div className="section-container w-full z-20 pt-36 pb-6 md:pt-[140px] md:pb-[48px] flex flex-col justify-center flex-grow">
        {/* Hero Grid / Flex on mobile */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="w-full flex flex-col md:grid md:grid-cols-12 items-center justify-center flex-grow gap-8 md:gap-0 mt-8 md:mt-0 mb-12"
        >
          {/* Left Column — 55% */}
          <div className="w-full md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">

            {/* Headline */}
            <h1
              className="text-[32px] sm:text-[46px] md:text-[62px] lg:text-[72px] font-extrabold leading-[1.12] tracking-tight mb-8 md:mb-[var(--space-paragraph-gap)]"
              style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
            >
              <span className="gsap-title-line block">
                <span className="text-gold-gradient">Journeys</span>{' '}
                <span style={{ color: '#ffffff' }}>crafted</span>
              </span>
              <span className="gsap-title-line block mt-1">
                <span style={{ color: '#ffffff' }}>for your next</span>{' '}
                <span className="text-gold-gradient">adventure.</span>
              </span>
            </h1>

            {/* Description */}
            <p
              className="gsap-desc text-[14px] sm:text-[15px] md:text-[17px] leading-[1.75] max-w-[420px] sm:max-w-[480px]"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)', marginBottom: '40px' }}
            >
              Escape the ordinary. We design bespoke, slow expeditions that immerse you deeply in local communities, untouched nature, and handcrafted boutique stays.
            </p>

            {/* Button Twins */}
            <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:items-start md:justify-start w-full">
              <Link to="/packages" className="gsap-btn">
                <button
                  className="btn-outline px-6 py-3 text-[11px] sm:text-[12px]"
                  style={{ fontFamily: 'var(--font-body)', minWidth: '130px' }}
                >
                  Explore Packages
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <Link to="/about" className="gsap-btn">
                <button
                  className="btn-ghost px-6 py-3 text-[11px] sm:text-[12px]"
                  style={{ fontFamily: 'var(--font-body)', minWidth: '130px' }}
                >
                  Our Story
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column — 45% (tree occupies this space) */}
          <div className="col-span-12 md:col-span-5 h-[24px] sm:h-[40px] md:h-auto" />
        </motion.div>

        {/* Stats Strip — full width at bottom */}
        <div className="gsap-stats w-full mt-8 md:mt-auto mb-10 md:mb-0 relative" style={{ bottom: '40px' }}>
          <StatsStrip />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="gsap-scroll-ind hidden md:block">
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default HeroSection;
