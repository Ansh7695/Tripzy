import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { destinations } from '../../data/destinations';
import BackgroundLayer from './BackgroundLayer';
import DestinationInfo from './DestinationInfo';
import ProgressTimeline from './ProgressTimeline';
import CardCarousel from './CardCarousel';
import { MobilePackages } from './MobilePackages';

// Desktop shows only top 6; mobile gets the full list
const topDestinations = destinations.slice(0, 6);

const TopPackagesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive boundary checks
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Frame scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isMobile) return;
    const count = topDestinations.length;
    const index = Math.min(Math.floor(latest * count), count - 1);
    setActiveIndex(index);
  });

  // Scroll to active index sub-page on timeline click
  const handleScrollToStep = (index: number) => {
    if (containerRef.current) {
      const elementTop = containerRef.current.offsetTop;
      const elementHeight = containerRef.current.offsetHeight;
      const targetScroll = elementTop + (index / topDestinations.length) * (elementHeight - window.innerHeight);
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  if (isMobile) {
    return <MobilePackages destinations={destinations} />;
  }

  return (
    /* 6 destinations × 100vh = 600vh scroll track */
    <div ref={containerRef} className="relative h-[600vh] bg-slate-950">
      {/* Sticky viewport content panel */}
      <div className="sticky top-0 h-screen w-full overflow-visible flex flex-col justify-center select-none">
        {/* Full-bleed Background Crossfader */}
        <BackgroundLayer destinations={topDestinations} activeIndex={activeIndex} />

        <div className="section-container w-full h-full grid grid-cols-12 items-center relative z-20">
          {/* Vertical Navigation Timeline (Col-1) */}
          <div className="col-span-1 h-full flex items-center justify-center">
            <ProgressTimeline
              activeIndex={activeIndex}
              totalSteps={topDestinations.length}
              onDotClick={handleScrollToStep}
            />
          </div>

          {/* Left Description Column (Col-6) */}
          <div className="col-span-6 h-full flex flex-col justify-center">
            <DestinationInfo
              activeDestination={topDestinations[activeIndex]}
              totalDestinations={topDestinations.length}
            />
          </div>

          {/* Right Horizontal Cards Carousel Column (Col-5) */}
          <div className="col-span-5 h-full flex items-center justify-start overflow-visible">
            <CardCarousel
              destinations={topDestinations}
              activeIndex={activeIndex}
              onCardClick={handleScrollToStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPackagesSection;
