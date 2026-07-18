import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, Calendar, Users, MapPin, Shield,
  Headphones, Zap, Award, ChevronLeft, ChevronRight,
  Compass, CheckCircle
} from 'lucide-react';
import { packages, categories, type Package } from '../data/packages';

// ─── Luxury Badge ────────────────────────────────────────────
const luxuryColors: Record<string, string> = {
  'Standard': 'bg-slate-700/60 text-slate-300',
  'Premium': 'bg-amber-900/50 text-amber-300',
  'Luxury': 'bg-yellow-900/40 text-yellow-300',
  'Ultra-Luxury': 'bg-[var(--color-gold)]/15 text-[var(--color-gold)]',
};

// ─── PackageCard ─────────────────────────────────────────────
const PackageCard: React.FC<{ pkg: Package; index: number }> = ({ pkg, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative rounded-[24px] overflow-hidden bg-[#0a1020] border border-white/8 shadow-[0_8px_40px_rgba(0,0,0,0.4)] flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-[#0a1020]/30 to-transparent" />

        {/* Badges row */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <span className="text-[9px] font-bold uppercase tracking-wider bg-[#0ea5e9] text-white px-2.5 py-1 rounded-[4px]">
            {pkg.category}
          </span>
          {pkg.badge && (
            <span className="text-[9px] font-bold uppercase tracking-wider bg-[var(--color-gold)]/90 text-[#0c1220] px-2.5 py-1 rounded-[4px]">
              {pkg.badge}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="absolute bottom-3 right-3">
          <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-[6px] px-3 py-1.5 text-right">
            <span className="text-[9px] text-white/40 uppercase block">From</span>
            <span className="text-base font-extrabold text-white">{pkg.price}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Location */}
        <div className="flex items-center gap-1 text-sky-400 text-[10px] font-semibold mb-2">
          <MapPin className="w-3 h-3" />
          <span>{pkg.location}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
          {pkg.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-white/45 leading-relaxed mb-4 flex-grow line-clamp-2">
          {pkg.desc}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.highlights.slice(0, 3).map(h => (
            <span key={h} className="text-[9px] font-bold text-white/50 border border-white/10 rounded-[3px] px-2 py-0.5 uppercase tracking-wider">
              {h}
            </span>
          ))}
        </div>

        {/* Meta row */}
        <div className="flex items-center justify-between border-t border-white/6 pt-3 mb-4">
          <div className="flex items-center gap-3 text-[11px] text-white/40">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span>{pkg.groupSize}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-white font-bold">{pkg.rating}</span>
            </div>
          </div>
          <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-[3px] ${luxuryColors[pkg.luxuryLevel]}`}>
            {pkg.luxuryLevel}
          </span>
        </div>

        <Link to="/contact">
          <button className="btn-outline w-full py-2.5 text-[11px]">
            Inquire Now
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

// ─── Feature Card ─────────────────────────────────────────────
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay?: number }> = ({ icon, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
    className="relative p-6 rounded-[20px] bg-white/4 border border-white/8 backdrop-blur-md group overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-[20px]" />
    <div className="relative z-10">
      <div className="w-11 h-11 rounded-[8px] bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--color-gold)]/15 transition-colors duration-300">
        {icon}
      </div>
      <h4 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h4>
      <p className="text-xs text-white/45 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

// ─── Main Page ────────────────────────────────────────────────
const PackagesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [heroSlide, setHeroSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const heroSlides = [
    {
      title: 'Ladakh High Passes',
      subtitle: 'Himalayas, India',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
      rotate: '-2deg',
    },
    {
      title: 'Kerala Backwaters',
      subtitle: 'South India',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      rotate: '1.5deg',
    },
    {
      title: 'Andaman Retreat',
      subtitle: 'Island India',
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
      rotate: '-0.5deg',
    },
  ];

  // Auto-rotate hero slide
  useEffect(() => {
    const t = setInterval(() => setHeroSlide(p => (p + 1) % heroSlides.length), 3200);
    return () => clearInterval(t);
  }, []);

  const filteredPackages = packages.filter(p => activeFilter === 'All' || p.category === activeFilter);

  const whyFeatures = [
    { icon: <Shield className="w-5 h-5 text-[var(--color-gold)]" />, title: 'Safe & Verified', desc: 'Every route hand-scouted by our field teams. Emergency support on every expedition.' },
    { icon: <Headphones className="w-5 h-5 text-[var(--color-gold)]" />, title: '24×7 Support', desc: 'Round-the-clock assistance from our dedicated travel experts, wherever you are.' },
    { icon: <Zap className="w-5 h-5 text-[var(--color-gold)]" />, title: 'Flexible Plans', desc: 'Fully customizable dates, group sizes, and budgets. Your trip, your rules.' },
    { icon: <Award className="w-5 h-5 text-[var(--color-gold)]" />, title: 'Best Price', desc: 'No hidden fees. Transparent pricing with exclusive member discounts on all packages.' },
  ];

  return (
    <div className="bg-[var(--color-navy)] text-white min-h-screen">

      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Cinematic bg */}
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={`hero-bg-${heroSlide}`}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[heroSlide].image})` }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-[#080e1c]/95 via-[#080e1c]/70 to-[#080e1c]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080e1c] via-transparent to-[#080e1c]/40" />
        </div>

        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[var(--color-gold)]/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sky-600/8 rounded-full blur-[100px] pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-28 pb-20">

            {/* LEFT — Text */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-gold)] border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/8 rounded-[4px] px-4 py-2 mb-7"
              >
                <Compass className="w-3.5 h-3.5" />
                Explore India
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-[62px] font-bold leading-[1.08] tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Discover{' '}
                <span className="text-gold-gradient">unforgettable</span>
                {' '}journeys crafted just for you.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-white/55 text-base leading-relaxed max-w-lg"
                style={{ fontFamily: 'var(--font-body)', marginBottom: '40px' }}
              >
                From the frozen passes of Ladakh to the sun-kissed shores of the Andamans — every itinerary is handcrafted by our field experts for a once-in-a-lifetime experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="#packages">
                  <button className="btn-outline px-8 py-3.5">
                    Browse Packages
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
                <Link to="/contact">
                  <button className="btn-ghost px-8 py-3.5">
                    Talk to Expert
                  </button>
                </Link>
              </motion.div>

              {/* Stats mini row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex gap-8 mt-16 md:mt-[72px] pt-8 border-t border-white/8"
              >
                {[['15,000+', 'Happy Travellers'], ['50+', 'Destinations'], ['4.9★', 'Avg Rating']].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{val}</div>
                    <div className="text-[10px] text-white/35 uppercase tracking-wider mt-0.5">{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Floating cards */}
            <div className="relative h-[480px] hidden lg:block">
              {heroSlides.map((slide, i) => {
                const positions = [
                  { top: '5%', left: '15%', zIndex: 30 },
                  { top: '24%', left: '46%', zIndex: 20 },
                  { top: '48%', left: '5%', zIndex: 10 },
                ];
                const pos = positions[i];
                
                // Extra metadata mock to match editorial look
                const meta = [
                  { duration: '7 Days', rating: '4.9 ★' },
                  { duration: '5 Days', rating: '4.8 ★' },
                  { duration: '6 Days', rating: '4.9 ★' }
                ][i];

                return (
                  <motion.div
                    key={slide.title}
                    initial={{ opacity: 0, y: 40, rotate: slide.rotate as unknown as number }}
                    animate={{ opacity: 1, y: [0, -8, 0], rotate: slide.rotate as unknown as number }}
                    transition={{
                      opacity: { delay: 0.5 + i * 0.18, duration: 0.8 },
                      y: { duration: 3.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 },
                    }}
                    whileHover={{ y: -14, scale: 1.05, rotate: '0deg', transition: { duration: 0.3 } }}
                    style={{ position: 'absolute', ...pos, rotate: slide.rotate }}
                    className="w-56 h-[290px] rounded-[24px] overflow-hidden border border-white/12 shadow-[0_24px_60px_rgba(0,0,0,0.7)] bg-slate-900 cursor-pointer relative group"
                  >
                    {/* Full-bleed Image with Hover Zoom */}
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-108" 
                    />
                    
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                    
                    {/* Top glass category tag */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-[8px] font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-400/20 backdrop-blur-md px-2.5 py-1 rounded-[4px]">
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Bottom Metadata detail rows */}
                    <div className="absolute bottom-5 left-5 right-5 z-20 pointer-events-none text-left">
                      <h3 className="text-sm font-bold text-white mb-1 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                        {slide.title}
                      </h3>
                      
                      <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[9px] text-white/50">
                        <span className="font-semibold">{meta.duration}</span>
                        <span className="text-amber-400 font-extrabold">{meta.rating}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* ═══════════ PACKAGES GRID ═══════════ */}
      <section 
        id="packages" 
        className="bg-gradient-to-b from-[#080e1c] to-[#0a1220]"
        style={{ paddingTop: '100px', paddingBottom: '100px' }}
      >
        <div className="section-container">
          {/* Header */}
          <div 
            className="flex flex-col items-center justify-center text-center mb-24 md:mb-32 w-full"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '96px' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[9px] uppercase tracking-[0.3em] font-extrabold text-[var(--color-gold)] block mb-4 text-center"
            >
              Featured Collections
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 text-center"
              style={{ fontFamily: 'var(--font-heading)', textAlign: 'center' }}
            >
              Handpicked{' '}
              <span className="text-gold-gradient">Travel Packages</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/45 text-sm max-w-lg mx-auto text-center"
            >
              Curated experiences across mountains, coastlines, cultural hubs, and off-the-beaten trails.
            </motion.p>
          </div>

          {/* Filter tabs */}
          <div 
            className="flex flex-wrap justify-center gap-2.5 w-full"
            style={{ marginBottom: '10px' }}
          >
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveFilter(cat)}
                className={activeFilter === cat ? 'btn-outline px-6 py-2 text-[11px]' : 'btn-ghost px-6 py-2 text-[11px]'}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Cards grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredPackages.map((pkg, i) => (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                >
                  <PackageCard pkg={pkg} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-24">
              <p className="text-white/30 text-lg">No packages in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ DESTINATION EDITORIAL GRID ═══════════ */}
      <section 
        className="bg-[#070c18] relative overflow-hidden"
        style={{ paddingTop: '100px', paddingBottom: '100px' }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,165,116,0.04)_0%,transparent_70%)]" />

        <div className="section-container relative z-10">
          <div 
            className="flex flex-col items-center justify-center text-center mb-24 md:mb-32 w-full"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '96px' }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[9px] uppercase tracking-[0.3em] font-extrabold text-[var(--color-gold)] block mb-4 text-center"
            >
              Destinations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-center"
              style={{ fontFamily: 'var(--font-heading)', textAlign: 'center' }}
            >
              Explore by{' '}
              <span className="text-gold-gradient">Destination</span>
            </motion.h2>
          </div>

          {/* Asymmetric editorial grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Feature card — tall left */}
            {(() => {
              const feat = packages[1]; // Ladakh
              return (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-5 relative rounded-[24px] overflow-hidden group cursor-pointer min-h-[520px]"
                >
                  <img src={feat.bgImage} alt={feat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080e1c] via-[#080e1c]/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#080e1c]/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-sky-400 mb-2">{feat.category}</span>
                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>{feat.title}</h3>
                    <div className="flex items-center gap-1.5 text-white/50 text-xs mb-4">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{feat.location}</span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-sm">{feat.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {feat.highlights.map(h => (
                        <span key={h} className="flex items-center gap-1 text-[9px] text-white/50 border border-white/10 rounded-[3px] px-2 py-0.5 uppercase">
                          <CheckCircle className="w-2.5 h-2.5 text-emerald-400" />{h}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact">
                      <button className="btn-outline py-3 px-7 text-[11px] w-fit">
                        Explore Package
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>
                  {/* Luxury badge */}
                  <div className="absolute top-5 right-5 bg-[var(--color-gold)]/90 text-[#080e1c] text-[9px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-[4px]">
                    Top Rated
                  </div>
                </motion.div>
              );
            })()}

            {/* Right side 2×2 grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {packages.slice(0, 4).map((pkg, i) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-[20px] overflow-hidden group cursor-pointer min-h-[240px]"
                >
                  <img src={pkg.image} alt={pkg.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080e1c]/90 via-[#080e1c]/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <span className="text-[9px] text-sky-400 font-bold uppercase tracking-widest mb-1">{pkg.category}</span>
                    <h4 className="text-base font-bold text-white leading-tight mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{pkg.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-white/40">{pkg.duration}</span>
                      <span className="text-sm font-extrabold text-white">{pkg.price}</span>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--color-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] border border-[var(--color-gold)]/20" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY TRAVEL WITH US ═══════════ */}
      <section 
        className="bg-gradient-to-b from-[#0a1220] to-[#080e1c] relative overflow-hidden"
        style={{ paddingTop: '100px', paddingBottom: '100px' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,165,116,0.05)_0%,transparent_60%)]" />
        <div className="section-container relative z-10">
          <div 
            className="flex flex-col items-center justify-center text-center mb-24 md:mb-32 w-full"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '96px' }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[9px] uppercase tracking-[0.3em] font-extrabold text-[var(--color-gold)] block mb-4 text-center"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center"
              style={{ fontFamily: 'var(--font-heading)', textAlign: 'center' }}
            >
              Why Travel{' '}
              <span className="text-gold-gradient">With Us</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-sm max-w-lg mx-auto text-center"
            >
              Thousands of travellers trust us every year to craft their most memorable journeys.
            </motion.p>
          </div>

          <div 
            className="w-full flex items-center justify-center"
            style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            <div 
              className="flex flex-wrap justify-center gap-5 max-w-4xl w-full"
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px' }}
            >
              {whyFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                  className="w-[170px] sm:w-[200px] aspect-square flex flex-col items-center justify-center text-center p-4 rounded-[20px] bg-white/4 border border-white/8 backdrop-blur-xl hover:border-[var(--color-gold)]/35 transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-extrabold text-white leading-tight uppercase tracking-wider block">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-[#070c18]/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c18]/90 to-transparent" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-gold)]/8 rounded-full blur-[120px]" />

        <div className="section-container relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[9px] uppercase tracking-[0.3em] font-extrabold text-[var(--color-gold)] block mb-5"
            >
              Ready to begin?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to begin your{' '}
              <span className="text-gold-gradient">next adventure?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-white/50 text-base leading-relaxed mb-10 max-w-lg"
            >
              Let our travel architects craft your perfect itinerary — bespoke dates, hand-selected stays, and expert guides at every turn.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <button className="btn-outline px-8 py-3.5">
                  Book Your Journey
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn-ghost px-8 py-3.5">
                  Contact Expert
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PackagesPage;
