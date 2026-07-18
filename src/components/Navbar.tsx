import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Compass, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-500 select-none ${scrolled
          ? 'bg-white/92 backdrop-blur-2xl border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.06)]'
          : 'bg-transparent border-b border-transparent'
          }`}
        style={{ height: '80px' }}
      >
        <div className="section-container w-full h-full flex items-center justify-between">
          {/* Logo & Tagline */}
          <Link to="/" className="flex flex-col group shrink-0">
            <div className="flex items-center gap-3">
              <Compass className="w-7 h-7 text-[var(--color-orange)] group-hover:rotate-45 transition-transform duration-500" />
              <span
                style={{ fontFamily: 'var(--font-heading)' }}
                className={`font-extrabold text-xl tracking-wider uppercase transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-white'
                  }`}
              >
                TRIPZY
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[11px] font-bold tracking-widest uppercase transition-colors relative py-1 ${isActive
                    ? 'text-[var(--color-gold)]'
                    : scrolled
                      ? 'text-slate-700 hover:text-slate-950'
                      : 'text-slate-200 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabGold"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#181717] rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            <Link to="/contact">
              {/* Use .btn on scrolled (light bg), .btn-outline on transparent (dark bg) */}
              <button className={scrolled ? 'btn' : 'btn-outline'}>
                Plan My Journey
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:!hidden focus:outline-none z-50 transition-all duration-300 btn-icon ${isOpen || scrolled ? '' : '!bg-transparent !outline-white/30 !text-white hover:!bg-white/10'
              }`}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-white/97 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#181717]/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#181717]/3 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-2 w-full px-8">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-2xl font-bold tracking-wide uppercase transition-colors py-3 w-full text-center border-b border-slate-100 last:border-0 ${isActive ? 'text-[#181717]' : 'text-slate-600 hover:text-slate-950'
                    }`
                  }
                >
                  <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    {link.name}
                  </motion.span>
                </NavLink>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.2, duration: 0.4 }}
                className="mt-8 w-full"
              >
                <Link to="/contact" className="block">
                  <button className="btn w-full py-4 text-[13px]">
                    Plan My Journey
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
