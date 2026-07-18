import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Destination } from '../../data/destinations';

interface BackgroundLayerProps {
  destinations: Destination[];
  activeIndex: number;
}

const BackgroundLayer: React.FC<BackgroundLayerProps> = ({ destinations, activeIndex }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1.02, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(6px)' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ backgroundImage: `url(${destinations[activeIndex].bgImage})` }}
        />
      </AnimatePresence>
      {/* Dark Vignette Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/50 mix-blend-multiply z-10" />
      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
};

export default BackgroundLayer;
