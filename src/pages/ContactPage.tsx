import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Globe, ArrowRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[var(--color-navy)] text-white min-h-screen relative overflow-hidden select-none">
      
      {/* Background Atmosphere Elements */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-gold)]/3 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-sky-600/5 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* ═══════════ 1. CONTACT HERO SECTION (80vh) ═══════════ */}
      <section 
        ref={heroRef} 
        className="relative h-[80vh] flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/60 to-slate-950" />
        </div>

        {/* Ambient Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[var(--color-gold)]/20 rounded-full"
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.1, 0.7, 0.1],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 8 + Math.random() * 12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4
              }}
            />
          ))}
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-gold)] border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/8 rounded-[4px] px-4 py-2 mb-6"
          >
            <Compass className="w-3.5 h-3.5" />
            Contact Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-[62px] font-bold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Let's Plan Your <span className="text-gold-gradient">Next Adventure</span> Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white/55 text-sm sm:text-base leading-relaxed max-w-[650px] mb-8"
          >
            Our travel experts are here to craft unforgettable experiences tailored just for you. Whether you're planning a weekend escape or a once-in-a-lifetime journey, we're only one conversation away.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/packages" className="btn-outline px-8 py-3.5 text-[11px] flex items-center justify-center gap-2">
              Plan My Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+91XXXXXXXXXX" className="btn-ghost px-8 py-3.5 text-[11px]">
              Call an Expert
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ 2. OFFICE INFORMATION (Editorial Split) ═══════════ */}
      <section className="relative z-10 py-20 bg-slate-950" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Large office image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[440px] rounded-[24px] overflow-hidden border border-white/10 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Tripzy consulting room" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-slate-900/80 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                <Globe className="w-4 h-4 text-[var(--color-gold)]" />
                <span className="text-[10px] text-white font-bold uppercase tracking-wider">Heritage office, Cochin</span>
              </div>
            </motion.div>

            {/* Right Column: Editorial metadata details */}
            <div className="text-left flex flex-col justify-center h-full">
              <span className="text-[9px] uppercase tracking-[0.3em] font-extrabold text-[var(--color-gold)] block mb-5">
                Our Office
              </span>
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Where Every <span className="text-gold-gradient">Journey Begins</span>
              </h2>
              
              <p className="text-white/45 text-sm sm:text-base leading-relaxed mb-8">
                Nestled inside a renovated Portuguese spice warehouse in Fort Kochi, our headquarters serves as a collaborative lounge for Slow Travel advocates. Visit us to sit down over locally brewed cardamom tea and look at physical charts, route profiles, and expedition journals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                <div>
                  <h4 className="text-[10px] text-white/35 uppercase tracking-wider font-bold mb-2">Consultation hours</h4>
                  <p className="text-sm font-semibold text-white">Mon to Sat: 10:00 AM - 5:30 PM</p>
                  <p className="text-xs text-white/45 mt-0.5">Walk-ins welcome, appointments preferred</p>
                </div>
                <div>
                  <h4 className="text-[10px] text-white/35 uppercase tracking-wider font-bold mb-2">Languages Spoken</h4>
                  <p className="text-sm font-semibold text-white">English, Hindi, Malayalam, Tamil</p>
                  <p className="text-xs text-white/45 mt-0.5">Interpretation available on demand</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════ 3. PREMIUM CTA BANNER ═══════════ */}
      <section className="relative z-10 py-36 bg-slate-950 overflow-hidden" style={{ marginTop: '80px', marginBottom: '80px' }}>
        {/* Cinematic Sunset mountains background image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80)' }} />
        <div className="absolute inset-0 bg-black/60" />

        <div className="section-container relative z-10 text-left">
          <div className="max-w-2xl py-8 md:py-12">
            <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[var(--color-gold)] block mb-5">
              Ready to Explore?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready To Explore India Like Never Before?
            </h2>
            <p 
              className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-md"
              style={{ fontFamily: 'var(--font-body)', marginBottom: '48px' }}
            >
              Our luxury expeditions, slow-paced itineraries, and local field officers are ready to show you the subcontinent from an entirely unique perspective.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/packages" className="btn-outline px-6 py-3 text-[10px]">
                Browse Packages
              </Link>
              <Link to="/packages" className="btn-ghost px-6 py-3 text-[10px]">
                Start Planning
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
