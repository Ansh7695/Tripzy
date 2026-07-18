import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Compass, Mail, Phone, MapPin, Clock
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative border-t border-white/8 bg-gradient-to-b from-[#0a1020] via-[#080d1a] to-[#050914] overflow-hidden py-20 lg:py-24">
      {/* Soft background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[var(--color-orange)]/4 rounded-full blur-[140px] pointer-events-none" />

      {/* Broad center content container */}
      <div className="max-w-[1560px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* ── TOP SECTION: Logo & Pitch ── */}
        <div className="pb-12 border-b border-white/6 text-left relative z-10 max-w-3xl">
          <Link to="/" className="flex items-center gap-4 group w-fit" style={{ marginBottom: '40px' }}>
            <Compass className="w-9 h-9 text-[var(--color-gold)] group-hover:rotate-45 transition-transform duration-500" />
            <span 
              style={{ fontFamily: 'var(--font-heading)' }} 
              className="font-extrabold text-2xl sm:text-3xl tracking-widest uppercase text-white"
            >
              Tripzy
            </span>
          </Link>

          <h2 
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.15] tracking-tight text-white mb-10"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Let's Plan Your Next <span className="text-gold-gradient">Adventure</span> Together.
          </h2>
        </div>

        {/* ── MIDDLE SECTION: Links & Socials ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 text-left">
          
          {/* Col 1: Contact */}
          <div className="flex flex-col gap-8">
            <h4
              className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/60"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[var(--color-gold)] shrink-0" />
                <span>MG Road, Heritage Chambers, Cochin, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                <span>explore@tripzy.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                <span>Mon – Sat: 09:00 AM – 06:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div className="flex flex-col gap-8">
            <h4
              className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/60"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Packages', to: '/packages' },
                { label: 'Gallery', to: '/gallery' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-white/40 hover:text-[var(--color-gold)] transition-colors duration-300 flex items-center gap-2 group w-fit"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span className="w-0 group-hover:w-3.5 h-px bg-[var(--color-gold)] transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Support */}
          <div className="flex flex-col gap-8">
            <h4
              className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/60"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Support
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'FAQ', to: '/faq' },
                { label: 'Privacy Policy', to: '/privacy' },
                { label: 'Terms & Conditions', to: '/terms' },
                { label: 'Cancellation Policy', to: '/refund' },
                { label: 'Help Center', to: '/help' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-white/40 hover:text-[var(--color-gold)] transition-colors duration-300 flex items-center gap-2 group w-fit"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span className="w-0 group-hover:w-3.5 h-px bg-[var(--color-gold)] transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Follow Us */}
          <div className="flex flex-col gap-8">
            <h4
              className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/60"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Follow Us
            </h4>
            <div className="flex gap-3 mt-1 flex-wrap">
              {[
                { icon: <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>, url: 'https://instagram.com' },
                { icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>, url: 'https://facebook.com' },
                { icon: <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>, url: 'https://linkedin.com' },
                { icon: <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2a29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>, url: 'https://youtube.com' }
              ].map((s, idx) => (
                <motion.a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.08 }}
                  className="w-10 h-10 rounded-full bg-white/4 border border-white/8 flex justify-center items-center text-white/55 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/40 hover:shadow-[0_0_15px_rgba(212,165,116,0.2)] transition-colors duration-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* ── CUSTOM SHIMMER DIVIDER ── */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent my-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-gold)]/35 to-transparent w-1/3 animate-shimmer" />
        </div>

        {/* ── BOTTOM SECTION: Copyright & Legal ── */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Tripzy. All rights reserved.</p>
          <p className="block">
            Developed by{' '}
            <a
              href="https://www.owlmediahouse.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/45 hover:text-[var(--color-gold)] hover:underline transition-all font-semibold"
            >
              OWL MEDIA HOUSE
            </a>
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
            <span>•</span>
            <Link to="/cookies" className="hover:text-white/60 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

      {/* Embedded Shimmer Keyframes */}
      <style>{`
        @keyframes shimmer-move {
          0% { left: -33%; }
          100% { left: 100%; }
        }
        .animate-shimmer {
          animation: shimmer-move 4s infinite linear;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
