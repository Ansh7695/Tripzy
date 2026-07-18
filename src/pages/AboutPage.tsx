import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Compass, Users, Award, ShieldCheck, Heart, Leaf,
  Star, Clock, MapPin, ArrowRight, CheckCircle,
  Headphones, Zap, Globe
} from 'lucide-react';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';

// ─── Animated Counter ─────────────────────────────────────────
const Counter: React.FC<{ target: number; suffix?: string; prefix?: string; duration?: number }> = ({
  target, suffix = '', prefix = '', duration = 2200,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const step = target / (duration / 16);
    let curr = 0;
    const t = setInterval(() => {
      curr = Math.min(curr + step, target);
      setCount(Math.floor(curr));
      if (curr >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [inView, target, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

// ─── Value Card ───────────────────────────────────────────────
const ValueCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay?: number }> = ({ icon, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
    className="relative p-6 rounded-[20px] bg-white/4 border border-white/8 backdrop-blur-md group overflow-hidden"
  >
    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    <div className="relative z-10">
      <div className="w-11 h-11 rounded-[8px] bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h4>
      <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

// ─── Team Card ────────────────────────────────────────────────
const TeamCard: React.FC<{ role: string; delay?: number }> = ({ role, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group relative rounded-[24px] overflow-hidden bg-white/4 border border-white/8 text-center pb-5"
  >
    <div className="relative h-48 overflow-hidden bg-white/3 flex items-center justify-center">
      <img 
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=400&q=80" 
        alt="Team Placeholder" 
        className="w-full h-full object-cover object-top opacity-30 transition-transform duration-600 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080e1c] via-transparent to-transparent" />
    </div>
    <div className="p-5">
      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-gold)] block mb-3">{role}</span>
      <p className="text-xs text-white/30 italic">Details coming soon</p>
      {/* Social row */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {[Globe, Star, MapPin].map((Icon, i) => (
          <a key={i} href="#" className="w-8 h-8 rounded-[5px] bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/30 transition-all duration-300">
            <Icon className="w-3.5 h-3.5" />
          </a>
        ))}
      </div>
    </div>
  </motion.div>
);

// ─── Main AboutPage ───────────────────────────────────────────
const AboutPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -60]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const values = [
    { icon: <Heart className="w-5 h-5 text-[var(--color-gold)]" />, title: 'Authenticity', desc: 'Real experiences, real connections. We show you the India that most travellers never see.' },
    { icon: <ShieldCheck className="w-5 h-5 text-[var(--color-gold)]" />, title: 'Safety First', desc: 'Every route hand-scouted. Every stay audited. 24×7 emergency support on all expeditions.' },
    { icon: <Award className="w-5 h-5 text-[var(--color-gold)]" />, title: 'Luxury', desc: 'Boutique stays, private vehicles, local chefs. Premium at every touchpoint, no compromises.' },
    { icon: <Leaf className="w-5 h-5 text-[var(--color-gold)]" />, title: 'Sustainability', desc: 'Low-footprint journeys, local employment, and donations to conservation projects.' },
    { icon: <Users className="w-5 h-5 text-[var(--color-gold)]" />, title: 'Local Expertise', desc: 'Our guides are born in the regions they lead. Their knowledge is unmatched.' },
    { icon: <Compass className="w-5 h-5 text-[var(--color-gold)]" />, title: 'Personalization', desc: 'No two itineraries are identical. Every trip is crafted from scratch for you.' },
  ];

  const stats = [
    { value: 15000, suffix: '+', label: 'Happy Travellers' },
    { value: 50, suffix: '+', label: 'Destinations' },
    { value: 12, suffix: '+', label: 'Years Experience' },
    { value: 4.9, suffix: '★', label: 'Avg Rating', isDecimal: true },
  ];

  const milestones = [
    { year: '2012', event: 'Founded in Delhi with a team of 3 passionate explorers.' },
    { year: '2015', event: 'Crossed 1,000 happy travellers milestone.' },
    { year: '2018', event: 'Expanded to 30+ destinations across India.' },
    { year: '2021', event: 'Launched our signature Luxury Slow Travel series.' },
    { year: '2024', event: '15,000+ travellers and counting. Awwwards recognition.' },
  ];

  const team = [
    { name: 'Arjun Sharma', role: 'Founder & Expedition Lead', bio: '15 years exploring the Himalayas. Believes the best roads are the ones not yet on any map.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Priya Nair', role: 'Lead Guide & Naturalist', bio: 'Marine biologist turned island curator. Manages our coastal itineraries in Andaman and Kerala.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
    { name: 'Rohan Mehra', role: 'Adventure & Logistics Head', bio: 'Ex-military mountaineer with 200+ Himalayan summits. Ensures every camp is safe and spectacular.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kavya Reddy', role: 'Client Experience Director', bio: 'Former luxury hotelier. Crafts seamless, white-glove experiences from first inquiry to farewell.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80' },
  ];

  const promises = [
    { icon: <Headphones className="w-5 h-5 text-[var(--color-gold)]" />, title: '24×7 Assistance', desc: 'Support available around the clock via call, chat, or email.' },
    { icon: <CheckCircle className="w-5 h-5 text-[var(--color-gold)]" />, title: 'Verified Experiences', desc: 'Every listing inspected by our team before offering to clients.' },
    { icon: <ShieldCheck className="w-5 h-5 text-[var(--color-gold)]" />, title: 'Secure Booking', desc: 'SSL-secured payments with full refund transparency.' },
    { icon: <Zap className="w-5 h-5 text-[var(--color-gold)]" />, title: 'Personalised Support', desc: 'A dedicated travel expert assigned to every booking.' },
  ];

  return (
    <div className="bg-[var(--color-navy)] text-white min-h-screen">

      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080e1c]/85 via-[#080e1c]/65 to-[#080e1c]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-gold)]/6 rounded-full blur-[160px] pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-[9px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-gold)] border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/8 rounded-[4px] px-4 py-2 mb-7"
          >
            About Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-[64px] font-bold leading-[1.07] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Crafting{' '}
            <span className="text-gold-gradient">unforgettable</span>
            {' '}journeys across India.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/55 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ marginBottom: '40px' }}
          >
            We're a boutique travel company built on the belief that the most meaningful journeys are crafted with patience, passion, and an intimate knowledge of the land — not just logistics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/packages">
              <button className="btn-outline px-8 py-3.5">
                Explore Packages
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-ghost px-8 py-3.5">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <section 
        className="bg-gradient-to-b from-[#080e1c] to-[#0a1220]"
        style={{ paddingTop: '100px', paddingBottom: '100px' }}
      >
        <div className="section-container">
          {/* Centered Header on Top */}
          <div 
            className="flex flex-col items-center justify-center text-center mb-24 md:mb-32 max-w-2xl mx-auto w-full"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '96px' }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[9px] uppercase tracking-[0.3em] font-extrabold text-[var(--color-gold)] block mb-5"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Why thousands of travellers{' '}
              <span className="text-gold-gradient">trust us.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/45 leading-relaxed"
            >
              Since 2012, we've been redefining what it means to travel in India — combining local wisdom, curated luxury, and genuine human connection into experiences that change your perspective.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="h-[420px] py-1">
              <ul className="flex flex-col justify-between h-full w-full max-w-xl">
                {[
                  { title: 'Handcrafted Itineraries', desc: 'Slow-paced routes customized entirely to match your style.' },
                  { title: 'Local Travel Experts', desc: 'True pioneers scouting every trail, stay, and hidden corridor.' },
                  { title: '24×7 On-Ground Support', desc: 'Active officers syncing coordinates from Kochi, Leh, and Havelock.' },
                  { title: 'Transparent Pricing', desc: 'Honest travel costs with absolutely zero hidden charges.' },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                    className="flex items-start gap-4 text-left"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-[20px] font-bold text-white leading-tight mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right — visual grid */}
            <div className="grid grid-cols-2 gap-4 h-[420px]">
              {[
                { img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80', tall: true },
                { img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80', tall: false },
                { img: 'https://images.unsplash.com/photo-1561361531-99e224be4c2a?auto=format&fit=crop&w=400&q=80', tall: false },
                { img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80', tall: true },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  className={`relative rounded-[18px] overflow-hidden border border-white/8 ${i === 0 || i === 3 ? 'row-span-2' : ''}`}
                  style={{ gridRow: i === 0 ? 'span 2' : i === 3 ? 'span 2' : 'span 1' }}
                >
                  <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080e1c]/40 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BRAND STORY ═══════════ */}
      <section 
        className="bg-[#070c18] relative overflow-hidden"
        style={{ paddingTop: '80px', paddingBottom: '80px' }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
        <div className="section-container relative z-10">
          
          {/* Centered Header on Top */}
          <div 
            className="flex flex-col items-center justify-center text-center mb-24 md:mb-32 max-w-2xl mx-auto w-full"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '96px' }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[9px] uppercase tracking-[0.3em] font-extrabold text-[var(--color-gold)] block mb-5 text-center"
            >
              Our Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-center"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              We don't sell tours.{' '}
              <span className="text-gold-gradient">We create lifelong memories.</span>
            </motion.h2>
          </div>
 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — cinematic image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[28px] overflow-hidden h-[400px] lg:h-[500px] border border-white/8"
            >
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070c18]/70 to-transparent" />
 
              {/* Floating stat */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[16px] bg-slate-950/70 backdrop-blur-xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-extrabold text-white">15,000+</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider">Journeys crafted</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <div className="text-2xl font-extrabold text-white">50+</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider">Destinations</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <div className="text-2xl font-extrabold text-white">4.9</div>
                  </div>
                </div>
              </div>
            </motion.div>
 
            {/* Right — story + timeline */}
            <div className="flex flex-col lg:h-[500px] lg:justify-between w-full">
              <div className="space-y-4" style={{ marginBottom: '25px' }}>
                {[
                  'Born from a deep love for the Indian subcontinent, Tripzy started as a small passion project among three friends who believed that slow travel was the future.',
                  'We hand-scout every route, sleep in every hotel, and eat at every restaurant before it makes it to an itinerary. Our word is our promise.',
                  'Today, with over 15,000 travellers and 50+ destinations, we remain as passionate and detail-obsessed as we were on day one.'
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="text-white/50 leading-relaxed text-sm md:text-[15px]"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
 
              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-gold)]/20" />
                <div className="space-y-8 lg:space-y-10">
                  {milestones.map((m, i) => (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className="flex gap-5 items-start"
                    >
                      <div className="w-3.5 h-3.5 rounded-full bg-[var(--color-gold)] border-2 border-[#070c18] mt-1.5 shrink-0 relative z-10" />
                      <div>
                        <span className="text-[11px] md:text-[12px] font-extrabold text-[var(--color-gold)] uppercase tracking-widest block mb-1">{m.year}</span>
                        <p className="text-sm md:text-[15px] text-white/65 leading-relaxed">{m.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════ CORE VALUES ═══════════ */}
      <section 
        className="relative overflow-hidden bg-[#070c18]"
        style={{ paddingTop: '100px', paddingBottom: '130px' }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
        <div className="section-container relative z-10">
          {/* Centered Header on Top */}
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
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center"
              style={{ fontFamily: 'var(--font-heading)', textAlign: 'center' }}
            >
              What drives every{' '}
              <span className="text-gold-gradient">journey we create.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => <ValueCard key={v.title} {...v} delay={i * 0.08} />)}
          </div>
        </div>
      </section>


      {/* ═══════════ CUSTOMER PROMISE ═══════════ */}
      <section className="section-padding bg-[#070c18] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
        <div className="section-container relative z-10">
          <div 
            className="flex flex-col items-center justify-center text-center mb-24 md:mb-32 w-full"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '96px' }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              We travel with you{' '}
              <span className="text-gold-gradient">long before</span>
              {' '}your journey begins.
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {promises.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="p-6 rounded-[20px] bg-white/4 border border-white/8 backdrop-blur-md text-center group"
              >
                <div className="w-12 h-12 rounded-[8px] bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  {p.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{p.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <TestimonialsSection />

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative overflow-hidden min-h-[55vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-[#070c18]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070c18]/60 to-[#070c18]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--color-gold)]/6 rounded-full blur-[150px] pointer-events-none" />

        <div className="section-container relative z-10 py-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[9px] uppercase tracking-[0.3em] font-extrabold text-[var(--color-gold)] block mb-6"
          >
            Start Your Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold text-white leading-[1.1] mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to create your next{' '}
            <span className="text-gold-gradient">unforgettable journey?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/45 text-base mb-10 max-w-lg mx-auto"
          >
            Let our travel architects design an itinerary around your imagination, your pace, and your story.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/packages">
              <button className="btn-outline px-8 py-3.5">
                Browse Packages
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-ghost px-8 py-3.5">
                Talk to a Travel Expert
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
