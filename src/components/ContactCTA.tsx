import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#090f1d] via-[#111a2e] to-[#0c1424] relative overflow-hidden" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
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
          className="w-full max-w-4xl mx-auto"
        >
          {/* Glass panel */}
          <div
            className="relative overflow-hidden rounded-[32px] border border-white/8 bg-white/4 backdrop-blur-xl shadow-[0_8px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] text-center px-6 sm:px-12 md:px-20 py-20 sm:py-24 flex flex-col items-center"
          >
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/6 via-transparent to-white/3 pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[31px] border border-white/6 pointer-events-none" />

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-[5px] bg-white/10 border border-white/15 flex items-center justify-center mb-6"
            >
              <Compass className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </motion.div>

            {/* Label */}
            <span
              className="relative z-10 text-[11px] sm:text-[13px] uppercase tracking-[0.32em] font-extrabold text-white/60 mb-4 block"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Begin Your Journey
            </span>

            {/* Heading */}
            <h2
              className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to{' '}
              <span className="text-gold-gradient">Explore?</span>
            </h2>

            {/* Body */}
            <p
              className="relative z-10 text-sm sm:text-base md:text-[17px] leading-[1.7] text-white/70 max-w-xl mx-auto mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We design itineraries tailored to your dates, preferences, and pace. Let's build a journey you'll tell stories about forever.
            </p>

            {/* Buttons row */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-2">
              <Link to="/contact" className="sm:w-auto">
                <button
                  className="btn px-7 py-3.5 sm:px-10 sm:py-5 text-center text-sm sm:text-base"
                  style={{ fontFamily: 'var(--font-body)', minWidth: '150px' }}
                >
                  Plan My Journey
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/contact" className="sm:w-auto">
                <button
                  className="btn-outline px-7 py-3.5 sm:px-10 sm:py-5 text-center text-sm sm:text-base"
                  style={{ fontFamily: 'var(--font-body)', minWidth: '150px' }}
                >
                  Inquire Now
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
