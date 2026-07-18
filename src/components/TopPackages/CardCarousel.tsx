import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Clock, Users, Heart, ArrowRight } from 'lucide-react';
import type { Destination } from '../../data/destinations';

interface CardCarouselProps {
  destinations: Destination[];
  activeIndex: number;
  onCardClick?: (index: number) => void;
}

const CARD_WIDTH = 300;
const CARD_GAP = 20;
const CARD_STRIDE = CARD_WIDTH + CARD_GAP;

/* ── Single premium editorial card ── */
const PackageCard: React.FC<{
  dest: Destination;
  isActive: boolean;
  distance: number;
  onClick: () => void;
}> = ({ dest, isActive, distance, onClick }) => {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex-shrink-0 cursor-pointer overflow-hidden"
      style={{ width: CARD_WIDTH, borderRadius: 28 }}
      animate={{
        height: isActive ? 460 : 380,
        scale: isActive ? 1 : distance === 1 ? 0.90 : 0.82,
        filter: isActive
          ? 'blur(0px) brightness(1)'
          : distance === 1
          ? 'blur(0px) brightness(0.72)'
          : 'blur(1px) brightness(0.50)',
        opacity: isActive ? 1 : distance === 1 ? 0.75 : 0.4,
        y: isActive ? 0 : 12,
        zIndex: isActive ? 10 : Math.max(1, 5 - distance),
      }}
      whileHover={isActive ? { y: -10, transition: { duration: 0.3 } } : {}}
      transition={{ type: 'spring', stiffness: 280, damping: 28, mass: 0.9 }}
    >
      {/* ── Full-bleed image ── */}
      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 28 }}>
        <motion.img
          src={dest.image}
          alt={dest.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered && isActive ? 1.07 : 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/15 to-transparent" />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.4)' }}
        />
      </div>

      {/* ── Gold glow on active+hover ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ borderRadius: 28 }}
        animate={{
          boxShadow: isActive && hovered
            ? '0 0 0 1.5px rgba(212,165,116,0.55), 0 32px 64px rgba(0,0,0,0.6)'
            : isActive
            ? '0 0 0 1px rgba(255,255,255,0.15), 0 24px 48px rgba(0,0,0,0.5)'
            : '0 8px 20px rgba(0,0,0,0.25)',
        }}
        transition={{ duration: 0.35 }}
      />

      {/* ── Badge (top-left) ── */}
      <div className="absolute top-4 left-4 z-20">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15">
          <span className="text-[11px]">{dest.badgeIcon}</span>
          <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-white">
            {dest.badge}
          </span>
        </div>
      </div>

      {/* ── Wishlist button (top-right) ── */}
      <button
        onClick={(e) => { e.stopPropagation(); setLiked(p => !p); }}
        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center transition-transform active:scale-90 hover:scale-110"
      >
        <Heart
          className={`w-4 h-4 transition-all duration-300 ${liked ? 'text-[var(--color-gold)] fill-[var(--color-gold)] scale-110' : 'text-white'}`}
        />
      </button>

      {/* ── Bottom information panel ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 flex flex-col">
        {/* Country label */}
        <span className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-sky-400 mb-1">
          {dest.country}
        </span>

        {/* Title */}
        <h3
          className="text-[20px] font-bold text-white leading-tight mb-0.5"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {dest.title}
        </h3>

        {/* Subtitle */}
        <p className="text-[11px] text-white/50 mb-3" style={{ fontFamily: 'var(--font-body)' }}>
          {dest.subtitle}
        </p>

        {/* Metadata row */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1 text-[10px] text-white/55">
            <MapPin className="w-3 h-3 text-white/40" />
            <span>{dest.country}</span>
          </div>
          <div className="w-px h-3 bg-white/15" />
          <div className="flex items-center gap-1 text-[10px] text-white/55">
            <Clock className="w-3 h-3 text-white/40" />
            <span>{dest.days}</span>
          </div>
          <div className="w-px h-3 bg-white/15" />
          <div className="flex items-center gap-1 text-[10px] text-white/55">
            <Users className="w-3 h-3 text-white/40" />
            <span>{dest.groupSize}</span>
          </div>
          <div className="w-px h-3 bg-white/15" />
          <div className="flex items-center gap-1 text-[10px] text-amber-400">
            <Star className="w-3 h-3 fill-amber-400" />
            <span className="font-bold text-white">{dest.rating}</span>
          </div>
        </div>

        {/* Action / CTA row */}
        <div className="flex items-center justify-end border-t border-white/10 pt-3 min-h-[44px]">
          <AnimatePresence>
            {isActive && (
              <motion.button
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.25 }}
                className="btn-outline py-2 px-6 text-[10px] w-full flex items-center justify-center gap-1.5"
                onClick={(e) => e.stopPropagation()}
              >
                Explore Tour
                <ArrowRight className="w-3 h-3" />
              </motion.button>
            )}
          </AnimatePresence>
          {!isActive && (
            <span className="text-[10px] text-white/30 tracking-wider">Explore</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ── Carousel track ── */
const CardCarousel: React.FC<CardCarouselProps> = ({ destinations, activeIndex, onCardClick }) => {
  return (
    <div
      className="relative w-full h-[520px] flex items-center overflow-visible z-20"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 88%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 88%, transparent 100%)',
      }}
    >
      <motion.div
        className="flex items-center"
        style={{ gap: CARD_GAP }}
        animate={{ x: -activeIndex * CARD_STRIDE + 24 }}
        transition={{ type: 'spring', stiffness: 260, damping: 32, mass: 1 }}
      >
        {destinations.map((dest, index) => {
          const distance = Math.abs(index - activeIndex);
          return (
            <PackageCard
              key={dest.id}
              dest={dest}
              isActive={index === activeIndex}
              distance={distance}
              onClick={() => onCardClick && onCardClick(index)}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default CardCarousel;
