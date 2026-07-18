import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../../data/gallery';
import MobilePolaroidStack from './MobilePolaroidStack';

const ScrapbookSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Track responsive screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto === null) return;
      if (e.key === 'Escape') setSelectedPhoto(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  // Track mouse coordinates for micro parallax
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2),
        y: (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Infinite auto-scroll animation frame loop (manual scroll still fully works)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isMobile) return;

    let frameId: number;
    const speed = 0.8; // scroll speed (pixels per frame)

    const loop = () => {
      if (!isPaused) {
        el.scrollLeft += speed;
        // 2284px represents the exact width sum of the 6 unique cards + gaps
        if (el.scrollLeft >= 2284) {
          el.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused, isMobile]);

  const handleNext = () => {
    if (selectedPhoto === null) return;
    const currIdx = galleryImages.findIndex(img => img.id === selectedPhoto);
    const nextIdx = (currIdx + 1) % galleryImages.length;
    setSelectedPhoto(galleryImages[nextIdx].id);
  };

  const handlePrev = () => {
    if (selectedPhoto === null) return;
    const currIdx = galleryImages.findIndex(img => img.id === selectedPhoto);
    const prevIdx = (currIdx - 1 + galleryImages.length) % galleryImages.length;
    setSelectedPhoto(galleryImages[prevIdx].id);
  };

  // Staggered size configuration for horizontal scroll card layouts
  const getCardStyle = (index: number) => {
    const configs = [
      { width: '320px', height: '400px', yOffset: -15, speed: 8 },
      { width: '420px', height: '320px', yOffset: 20, speed: 5 },
      { width: '300px', height: '360px', yOffset: -5, speed: 10 },
      { width: '350px', height: '380px', yOffset: 15, speed: 6 },
      { width: '440px', height: '300px', yOffset: -25, speed: 12 },
      { width: '310px', height: '420px', yOffset: 10, speed: 7 }
    ];
    return configs[index % configs.length];
  };

  // Double the list for seamless loop wrap-around
  const doubledImages = [...galleryImages, ...galleryImages];

  return (
    <section className="section-padding bg-gradient-to-b from-[#0c1324] via-[#090f1d] to-[#080e1c] relative overflow-hidden select-none">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-[var(--color-gold)]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[var(--color-orange)]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* 1. HEADER (ON TOP) */}
        <div 
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-24 md:mb-32 w-full"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: isMobile ? '30px' : '96px' }}
        >
          <span
            className="inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-gold)] border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/8 rounded-[4px] px-4 py-2 mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Compass className="w-3.5 h-3.5" />
            Exhibition Gallery
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Every Journey Begins With A <span className="text-gold-gradient">Story</span> Worth Capturing.
          </h2>

          <p
            className="text-white/50 text-[14px] sm:text-[15px] leading-[1.8] max-w-[550px]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            A curated travel showcase capturing raw wilderness, ceremonies at ghats, and high-altitude mountain lakes from our expeditions.
          </p>
        </div>

        {/* 2. IMAGES ROW (INFINITE MARQUEE WITH ACTIVE NATIVE BROWSER SCROLL) */}
        <div className="hidden md:block overflow-hidden relative py-12">
          {/* Edge fading gradient overlays */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0c1324] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0c1324] to-transparent z-20 pointer-events-none" />

          {/* Native scrollable track with hidescrollbars */}
          <div
            ref={scrollRef}
            className="overflow-x-auto flex gap-6 pb-8 pt-4 select-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center gap-6 pr-6 pl-6">
              {doubledImages.map((img, i) => {
                const config = getCardStyle(i % 6);
                const isHovered = hoveredIndex === img.id;

                return (
                  <motion.div
                    key={`${img.id}-${i}`}
                    className="relative overflow-hidden cursor-pointer rounded-[28px] shrink-0"
                    style={{
                      width: config.width,
                      height: config.height,
                      transform: `translateY(${mousePosition.y * config.speed + config.yOffset}px) translateX(${mousePosition.x * (config.speed / 2)}px)`,
                      borderRadius: 28
                    }}
                    onMouseEnter={() => setHoveredIndex(img.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedPhoto(img.id)}
                  >
                    <motion.img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover"
                      animate={{ scale: isHovered ? 1.05 : 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          className="absolute bottom-5 left-5 right-5 z-20"
                        >
                          <span className="text-[8px] font-extrabold uppercase tracking-widest text-sky-400 block mb-1">
                            {img.category}
                          </span>
                          <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                            {img.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-white/50 text-[10px]">
                            <MapPin className="w-3 h-3 text-[var(--color-gold)]" />
                            <span>{img.country}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Polaroid Stack (shown on small screens only) */}
        <div className="md:hidden">
          <MobilePolaroidStack images={galleryImages} />
        </div>

        {/* 3. REDIRECT CTA BUTTON (BELOW GALLERY SCROLL TRACK) */}
        <div className="flex justify-center mt-12 md:mt-16" style={{ marginTop: 'calc(3rem + 20px)' }}>
          <Link to="/gallery">
            <button className="btn px-12 py-5 text-sm sm:text-base flex items-center gap-2">
              Explore Full Gallery
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </Link>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0c1220]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-10"
          >
            {(() => {
              const img = galleryImages.find(p => p.id === selectedPhoto);
              if (!img) return null;
              return (
                <div className="relative w-full max-w-5xl flex flex-col md:grid md:grid-cols-12 gap-8 items-center bg-[#070c18] border border-white/10 rounded-[32px] overflow-hidden p-6 sm:p-8 md:p-12 shadow-2xl">
                  
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center transition-all"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>

                  {/* Left Column: Image */}
                  <div className="md:col-span-7 w-full flex items-center justify-center relative min-h-[260px] max-h-[500px]">
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className="rounded-[20px] max-w-full max-h-[440px] object-contain shadow-2xl" 
                    />
                    
                    <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                      <button
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        className="pointer-events-auto w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all shadow-md"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className="pointer-events-auto w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all shadow-md"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Content */}
                  <div className="md:col-span-5 w-full flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-[4px] mb-4">
                      {img.category}
                    </span>
                    
                    <h2 
                      className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {img.title}
                    </h2>

                    <div className="flex items-center gap-2 text-white/50 text-xs mb-5">
                      <MapPin className="w-4 h-4 text-[var(--color-gold)]" />
                      <span>{img.country}</span>
                    </div>

                    <p 
                      className="text-white/60 text-sm sm:text-base leading-relaxed mb-6"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {img.description}
                    </p>

                    <button 
                      onClick={() => setSelectedPhoto(null)}
                      className="btn-outline px-8 py-3"
                    >
                      Return to Gallery
                    </button>
                  </div>

                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ScrapbookSection;
