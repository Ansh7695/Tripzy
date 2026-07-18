import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-8 right-[80px] md:right-[100px] lg:right-[120px] z-30 flex flex-col items-center gap-2 select-none">
      <span
        className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30"
        style={{ fontFamily: 'var(--font-body)', writingMode: 'vertical-lr' }}
      >
        Scroll
      </span>
      <motion.div
        className="w-px h-8 bg-gradient-to-b from-[var(--color-gold)] to-transparent"
        animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'top' }}
      />
    </div>
  );
};

export default ScrollIndicator;
