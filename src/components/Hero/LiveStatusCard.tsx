import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LiveStatusCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-8 right-6 md:right-16 z-30 select-none"
    >
      {/* Dark btn-style pill */}
      <div
        className="inline-flex items-center gap-3 px-5 py-3"
        style={{
          backgroundColor: '#181717',
          outline: '3px #181717 solid',
          outlineOffset: '-3px',
          borderRadius: '5px',
          border: 'none',
        }}
      >
        {/* Pulsing live dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>

        {/* Place name */}
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-white/50 shrink-0" />
          <span
            className="text-[13px] font-bold text-white tracking-wide whitespace-nowrap"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Spiti Valley
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveStatusCard;
