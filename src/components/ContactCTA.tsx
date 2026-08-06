import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-b from-[#090f1d] via-[#111a2e] to-[#0c1424] relative overflow-hidden"
      style={{ paddingTop: '80px', paddingBottom: '80px' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-[480px] h-[480px] bg-white/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[480px] h-[480px] bg-white/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-[5px] bg-white/10 border border-white/15 flex items-center justify-center mb-6"
          >
            <Compass className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </motion.div>

          {/* Label */}
          <span
            className="text-[11px] sm:text-[13px] uppercase tracking-[0.32em] font-extrabold text-white/60 mb-4 block"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Begin Your Journey
          </span>

          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to{' '}
            <span className="text-gold-gradient">Explore?</span>
          </h2>

          {/* Body */}
          <p
            className="text-sm sm:text-base md:text-[17px] leading-[1.7] text-white/70 max-w-xl mx-auto mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            We design itineraries tailored to your dates, preferences, and pace. Let's build a journey you'll tell stories about forever.
          </p>

          {/* Buttons row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-2">
            <a href="https://wa.me/917500598759?text=Hi%20FlyandGO%2C%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package" target="_blank" rel="noreferrer" className="sm:w-auto">
              <button
                className="btn px-7 py-3.5 sm:px-10 sm:py-5 text-center text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-body)', minWidth: '150px' }}
              >
                Inquiry Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
            <a href="tel:+917500598759" className="sm:w-auto">
              <button
                className="btn-outline px-7 py-3.5 sm:px-10 sm:py-5 text-center text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-body)', minWidth: '150px' }}
              >
                Call an Expert
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
