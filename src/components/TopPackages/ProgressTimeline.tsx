import React from 'react';
import { motion } from 'framer-motion';

interface ProgressTimelineProps {
  activeIndex: number;
  totalSteps: number;
  onDotClick?: (index: number) => void;
}

const ProgressTimeline: React.FC<ProgressTimelineProps> = ({ activeIndex, totalSteps, onDotClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full relative z-20 px-4 md:px-8">
      {/* Container holding the vertical track */}
      <div className="relative flex flex-col justify-between items-center h-64 md:h-80 w-8">
        {/* Track Backplate Line */}
        <div className="absolute top-2 bottom-2 w-0.5 bg-white/10 rounded-full" />

        {/* Dynamic Fills active track line */}
        <motion.div 
          className="absolute top-2 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#0ea5e9] to-cyan-400 rounded-full origin-top"
          animate={{
            height: `${(activeIndex / (totalSteps - 1)) * 100}%`
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          style={{
            maxHeight: 'calc(100% - 16px)'
          }}
        />

        {/* Steps Bubbles */}
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isActive = index === activeIndex;
          const isPassed = index < activeIndex;

          return (
            <div 
              key={index} 
              onClick={() => onDotClick && onDotClick(index)}
              className="relative z-10 w-6 h-6 flex justify-center items-center cursor-pointer group"
            >
              {/* Tooltip on Hover */}
              <span className="absolute left-8 px-2.5 py-1 rounded bg-slate-900/95 border border-white/10 text-[9px] uppercase tracking-wider text-slate-300 opacity-0 scale-95 origin-left group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
                Step 0{index + 1}
              </span>

              {/* Marker circle */}
              <motion.div
                className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
                  isActive
                    ? 'border-transparent bg-[#0ea5e9]'
                    : isPassed
                    ? 'border-[#0ea5e9] bg-[#070d19]'
                    : 'border-white/20 bg-slate-950'
                }`}
                animate={{
                  scale: isActive ? 1.4 : 1,
                  boxShadow: isActive ? '0 0 12px rgba(14,165,233,0.6)' : 'none'
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTimeline;
