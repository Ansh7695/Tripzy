import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Clock, Users, Heart, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import type { Destination } from '../../data/destinations';

interface MobilePackagesProps {
  destinations: Destination[];
}

export const MobilePackages: React.FC<MobilePackagesProps> = ({ destinations }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({});
  const dragStartX = useRef(0);

  const goTo = (newIndex: number, dir: number) => {
    if (newIndex < 0 || newIndex >= destinations.length) return;
    setDirection(dir);
    setIndex(newIndex);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.96 }),
  };

  const dest = destinations[index];
  const isLiked = !!liked[dest.id];

  return (
    <div
      className="relative bg-slate-950 text-white overflow-hidden flex flex-col gap-6"
      style={{ paddingTop: '72px', paddingBottom: '72px' }}
    >
      {/* Background crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${index}`}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dest.bgImage})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/40 to-slate-950 z-[1]" />

      {/* Header */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full"
        style={{ marginBottom: '36px' }}
      >
        <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-gold)] block mb-2 text-center">
          Top Packages
        </span>
        <h2 className="text-3xl font-bold text-white text-center" style={{ fontFamily: 'var(--font-heading)', textAlign: 'center' }}>
          Luxury Escapes
        </h2>
        <p className="text-white/35 text-[10px] mt-1 tracking-wider text-center">
          {index + 1} of {destinations.length} destinations
        </p>
      </div>


      {/* Card area */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-5 pb-8">

        {/* Main premium card */}
        <div className="relative w-full max-w-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`card-${index}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(_, info) => {
                if (info.offset.x > 50) goTo(index - 1, -1);
                else if (info.offset.x < -50) goTo(index + 1, 1);
              }}
              className="relative overflow-hidden cursor-grab active:cursor-grabbing"
              style={{ borderRadius: 24, height: 360 }}
            >
              {/* Full-bleed image */}
              <img
                src={dest.image}
                alt={dest.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />
              <div style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.35)' }} className="absolute inset-0" />

              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15">
                <span className="text-[11px]">{dest.badgeIcon}</span>
                <span className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-white">{dest.badge}</span>
              </div>

              {/* Heart */}
              <button
                onClick={(e) => { e.stopPropagation(); setLiked(p => ({ ...p, [dest.id]: !p[dest.id] })); }}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center active:scale-90"
              >
                <Heart className={`w-4 h-4 transition-all ${isLiked ? 'text-[var(--color-gold)] fill-[var(--color-gold)]' : 'text-white'}`} />
              </button>

              {/* Bottom panel */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-sky-400 block mb-1">
                  {dest.country}
                </span>
                <h3 className="text-[20px] font-bold text-white leading-tight mb-0.5" style={{ fontFamily: 'var(--font-heading)' }}>
                  {dest.title}
                </h3>
                <p className="text-[11px] text-white/45 mb-3">{dest.subtitle}</p>

                {/* Metadata row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 text-[10px] text-white/50">
                    <Clock className="w-3 h-3 text-white/35" /><span>{dest.days}</span>
                  </div>
                  <div className="w-px h-3 bg-white/15" />
                  <div className="flex items-center gap-1 text-[10px] text-white/50">
                    <Users className="w-3 h-3 text-white/35" /><span>{dest.groupSize}</span>
                  </div>
                  <div className="w-px h-3 bg-white/15" />
                  <div className="flex items-center gap-1 text-[10px] text-amber-400">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span className="font-bold text-white">{dest.rating}</span>
                  </div>
                </div>

                {/* Price row */}
                <div className="flex items-end justify-between border-t border-white/10 pt-3">
                  <div>
                    <span className="text-[9px] text-white/30 uppercase tracking-wider block mb-0.5">Starting from</span>
                    <span className="text-[22px] font-extrabold leading-none" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}>
                      {dest.price}
                    </span>
                    <span className="text-[9px] text-white/25 block mt-0.5">Per Person</span>
                  </div>
                  <button className="btn-outline py-2.5 px-5 text-[11px]">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <p className="text-center text-white/25 text-[10px] tracking-wider" style={{ marginTop: '36px' }}>
            Swipe left or right to explore
          </p>
        </div>
      </div>
    </div>
  );
};
