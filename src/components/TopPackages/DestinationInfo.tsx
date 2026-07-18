import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Destination } from '../../data/destinations';

interface DestinationInfoProps {
  activeDestination: Destination;
  totalDestinations: number;
}

const DestinationInfo: React.FC<DestinationInfoProps> = ({ activeDestination, totalDestinations }) => {
  const formatIndex = (index: number) => {
    return (index + 1).toString().padStart(2, '0');
  };

  return (
    <div className="flex flex-col justify-center h-full px-6 md:px-16 text-white relative z-20">
      {/* Index Tracker */}
      <div className="overflow-hidden mb-4">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={activeDestination.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#0ea5e9] text-xs font-bold tracking-widest block uppercase font-sans"
          >
            Destination {formatIndex(activeDestination.id)} — {formatIndex(totalDestinations)}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Main Title slide animate */}
      <div className="overflow-hidden min-h-[140px] md:min-h-[180px] mb-6 flex flex-col justify-end">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeDestination.id}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-widest font-bold opacity-60 text-slate-300 font-sans block mb-1">
              {activeDestination.country}
            </span>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight font-serif"
              style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
            >
              {activeDestination.title.split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {i === arr.length - 1 ? (
                    <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                  {i < arr.length - 1 && ' '}
                </React.Fragment>
              ))}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Description Fade */}
      <div className="min-h-[80px] mb-8">
        <AnimatePresence mode="popLayout">
          <motion.p
            key={activeDestination.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-slate-300 text-sm md:text-base max-w-md font-medium leading-relaxed font-sans"
          >
            {activeDestination.description}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Claymorphic Button */}
      <motion.div
        layout
        transition={{ duration: 0.4 }}
      >
        <button className="btn-outline px-7 py-3 text-[11px] group">
          Explore Tour
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

export default DestinationInfo;
