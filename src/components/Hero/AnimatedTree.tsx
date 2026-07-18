import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedTree: React.FC = () => {
  const { scrollY } = useScroll();

  // Parallax Y mappings based on scroll
  const skyY = useTransform(scrollY, [0, 1000], [0, 100]);
  const mountainY = useTransform(scrollY, [0, 1000], [0, 70]);
  const fogY = useTransform(scrollY, [0, 1000], [0, 45]);
  const treeY = useTransform(scrollY, [0, 1000], [0, 25]);
  const grassY = useTransform(scrollY, [0, 1000], [0, 5]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
      {/* Layer 1: Sky Backplate Gradient */}
      <motion.div 
        style={{ y: skyY }}
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0c0d14] via-[#221008] to-[#6b2a0c]"
      />

      {/* Layer 2: Sunset Sun Glow */}
      <motion.div
        style={{ y: skyY }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-amber-500/10 to-orange-600/20 blur-3xl"
      />

      {/* Layer 3: Distant Mountains */}
      <motion.svg
        style={{ y: mountainY }}
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 right-0 w-full h-[56%] md:h-[62%] fill-[#140803]"
      >
        <path d="M0,450 L120,400 L280,480 L440,380 L600,440 L780,320 L960,420 L1120,350 L1260,420 L1350,355 L1440,330 L1440,600 L0,600 Z" opacity="0.4" />
        <path d="M0,490 L180,430 L360,510 L540,420 L720,480 L900,390 L1080,470 L1240,410 L1360,430 L1440,380 L1440,600 L0,600 Z" opacity="0.75" />
      </motion.svg>

      {/* Layer 4: Fog Layer (Drifting CSS path) */}
      <motion.div
        style={{ y: fogY }}
        className="absolute bottom-12 left-0 w-full h-48 opacity-30 z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-amber-600/10 to-transparent blur-2xl animate-pulse" style={{ animationDuration: '8s' }} />
      </motion.div>

      {/* Layer 5: Majestic Ancient Tree */}
      <motion.div
        style={{ y: treeY }}
        className="absolute bottom-0 left-1/2 md:left-auto md:right-[5%] -translate-x-1/2 md:translate-x-0 w-[260px] sm:w-[360px] md:w-[650px] h-[60%] sm:h-[76%] md:h-[80%] z-20 flex items-end justify-center"
      >
        <svg
          viewBox="0 0 600 650"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Trunk Gradient */}
            <linearGradient id="trunkGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#140b04" />
              <stop offset="50%" stopColor="#221106" />
              <stop offset="100%" stopColor="#0d0602" />
            </linearGradient>

            {/* Leaves Gradient */}
            <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9a3412" /> {/* Reddish Autumn Amber */}
              <stop offset="50%" stopColor="#854d0e" /> {/* Golden Muted */}
              <stop offset="100%" stopColor="#14532d" /> {/* Forest Green base */}
            </linearGradient>
            
            {/* Soft shadow under tree */}
            <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.6)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>

          {/* Ground shadow */}
          <ellipse cx="300" cy="620" rx="250" ry="25" fill="url(#shadowGrad)" />

          {/* Animated Trunk & Major Branches */}
          <motion.path
            d="M270,620 L330,620 L320,480 Q330,380 380,310 Q420,250 490,220 L480,200 Q400,230 350,280 Q315,315 310,380 Q305,330 260,260 Q215,190 130,170 L125,190 Q200,210 240,270 Q285,340 280,480 Z"
            fill="url(#trunkGrad)"
            animate={{
              rotate: [0, 0.5, -0.5, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transformOrigin: "300px 620px" }}
          />

          {/* Minor swaying sub-branches */}
          <g style={{ transformOrigin: "310px 380px" }}>
            {/* Left Branch */}
            <path d="M260,335 Q200,280 150,290 L155,275 Q210,265 270,325 Z" fill="url(#trunkGrad)" />
            {/* Right Branch */}
            <path d="M340,330 Q410,285 470,300 L465,285 Q400,270 330,315 Z" fill="url(#trunkGrad)" />
          </g>

          {/* Soft Leaves Clusters (Layered groups with individual swaying cycles) */}
          {/* Main Crown */}
          <motion.g
            animate={{ rotate: [0, 1.5, -1.5, 0], y: [0, -2, 2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "310px 220px" }}
          >
            {/* Top Leaf canopy */}
            <circle cx="310" cy="180" r="95" fill="url(#leafGrad)" opacity="0.9" />
            <circle cx="260" cy="160" r="75" fill="url(#leafGrad)" opacity="0.85" />
            <circle cx="360" cy="160" r="80" fill="url(#leafGrad)" opacity="0.85" />
          </motion.g>

          {/* Left Wing Canopy */}
          <motion.g
            animate={{ rotate: [0, -2, 2, 0], x: [0, -3, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "180px 240px" }}
          >
            <circle cx="180" cy="220" r="85" fill="url(#leafGrad)" opacity="0.88" />
            <circle cx="130" cy="240" r="65" fill="url(#leafGrad)" opacity="0.8" />
            <circle cx="220" cy="200" r="70" fill="url(#leafGrad)" opacity="0.85" />
          </motion.g>

          {/* Right Wing Canopy */}
          <motion.g
            animate={{ rotate: [0, 2, -2, 0], x: [0, 1, -3, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "440px 230px" }}
          >
            <circle cx="440" cy="210" r="90" fill="url(#leafGrad)" opacity="0.9" />
            <circle cx="490" cy="230" r="70" fill="url(#leafGrad)" opacity="0.8" />
            <circle cx="390" cy="190" r="75" fill="url(#leafGrad)" opacity="0.85" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Layer 6: Swaying Foreground Grass (bottom border) */}
      <motion.svg
        style={{ y: grassY }}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-16 fill-[#0b0502] z-30"
      >
        <path d="M0,100 L0,40 Q60,25 120,40 T240,40 T360,40 T480,40 T600,40 T720,40 T840,40 T960,40 T1080,40 T1200,40 T1320,40 T1440,40 L1440,100 Z" />
      </motion.svg>

      {/* Volumetric Warm Sunset Rays overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/0 via-amber-500/5 to-orange-400/10 pointer-events-none mix-blend-screen z-20" />
      
      {/* Light drifting ambient fireflies */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const left = Math.random() * 80 + 10;
          const delay = Math.random() * 5;
          const duration = Math.random() * 6 + 6;
          return (
            <div
              key={i}
              className="absolute bg-amber-400/60 rounded-full blur-[1px]"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: '10%',
                animation: `float-firefly ${duration}s infinite ease-in-out`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Inline styles for custom firefly/dust animations */}
      <style>{`
        @keyframes float-firefly {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-400px) translateX(40px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedTree;
