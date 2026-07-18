import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Hotel, Utensils, Car, Compass, Calendar, Plane, ArrowRight 
} from 'lucide-react';

interface InclusionData {
  icon: React.ReactNode;
  title: string;
  desc: string;
  glowColor: string; // Tailwind glow classes
  borderColor: string; // border hover color
  ctaText: string;
  iconGlow: string; // glow color behind icon
  bgGraphic: React.ReactNode; // inline SVG vectors for background decoration
}

interface InclusionCardProps {
  data: InclusionData;
  index: number;
}

const InclusionCard: React.FC<InclusionCardProps> = ({ data, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [lightX, setLightX] = useState(50);
  const [lightY, setLightY] = useState(50);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate mouse percentage inside card (0 to 100)
    const pctX = (mouseX / width) * 100;
    const pctY = (mouseY / height) * 100;
    setLightX(pctX);
    setLightY(pctY);

    // Calculate rotation (-6 to 6 degrees for a tiny premium tilt)
    const rotX = -((mouseY - height / 2) / (height / 2)) * 6;
    const rotY = ((mouseX - width / 2) / (width / 2)) * 6;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.85, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="perspective-1000 w-full h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full h-full rounded-[32px] border border-white/8 bg-gradient-to-b from-[#11192d]/92 via-[#0a101f]/95 to-[#050913] backdrop-blur-3xl p-8 text-left transition-all duration-300 ease-out select-none flex flex-col justify-between overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] min-h-[280px] ${
          hovered ? `${data.glowColor} ${data.borderColor}` : 'shadow-none'
        }`}
        style={{
          transform: hovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dynamic Light Reflection Layer */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          style={{
            background: hovered 
              ? `radial-gradient(circle 240px at ${lightX}% ${lightY}%, rgba(255,255,255,0.10), transparent 70%)`
              : 'none',
            opacity: hovered ? 1 : 0
          }}
        />

        {/* Ambient Corner Base Glow */}
        <div 
          className="absolute right-0 bottom-0 w-64 h-64 pointer-events-none z-0 transition-opacity duration-500 rounded-full blur-[80px]" 
          style={{
            background: `radial-gradient(circle at 100% 100%, ${data.iconGlow}, transparent 70%)`,
            opacity: hovered ? 0.35 : 0.12
          }}
        />

        {/* Decorative Vector Graphic Background */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-500 overflow-hidden">
          {data.bgGraphic}
        </div>

        {/* Content Layers */}
        <div className="relative z-10 flex flex-col justify-between h-full w-full" style={{ transform: 'translateZ(32px)' }}>
          
          {/* Top Section */}
          <div className="flex flex-col items-start mb-10">
            <div 
              className="relative w-[72px] h-[72px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-gold)] shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-500"
              style={{
                marginBottom: '48px',
                boxShadow: hovered 
                  ? `0 12px 24px ${data.iconGlow}, inset 0 2px 4px rgba(255,255,255,0.15)` 
                  : 'inset 0 2px 4px rgba(255,255,255,0.12)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full blur-md opacity-40 -z-10" 
                style={{ backgroundColor: data.iconGlow }}
              />
              <span className={`transition-transform duration-500 ${hovered ? 'scale-110 rotate-6' : 'scale-100'}`}>
                {data.icon}
              </span>
            </div>

            {/* Title */}
            <h3 
              className="text-xl font-bold text-white mb-[18px] tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {data.title}
            </h3>

            {/* Description */}
            <p 
              className="text-[14px] text-white/50 leading-relaxed font-sans"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}
            >
              {data.desc}
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="flex items-center justify-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/35 group-hover:text-[var(--color-gold)] transition-colors pt-6 border-t border-white/5 w-full">
            <span className="text-[10px] font-bold text-white/40 tracking-[0.2em]">{data.ctaText}</span>
            <motion.span 
              animate={hovered ? { x: 5 } : { x: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="text-white/40"
            >
              →
            </motion.span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

const InclusionsSection: React.FC = () => {
  const inclusions: InclusionData[] = [
    {
      icon: <Hotel className="w-7 h-7" />,
      title: 'Boutique Accommodation',
      desc: 'Comfortable and handpicked hotels selected for quality, location, local heritage, and premium boutique experiences.',
      glowColor: 'hover:shadow-[0_32px_64px_rgba(212,165,116,0.18)]',
      borderColor: 'hover:border-[var(--color-gold)]/40',
      ctaText: 'INCLUDED IN EVERY PACKAGE',
      iconGlow: 'rgba(212, 165, 116, 0.22)',
      bgGraphic: (
        <svg className="absolute right-0 bottom-0 w-48 h-48 text-white fill-none stroke-current" viewBox="0 0 100 100" strokeWidth="1.5">
          <circle cx="50" cy="50" r="30" strokeDasharray="3 3" />
          <path d="M50 5 L50 95 M5 50 L95 50" />
          <polygon points="50,15 54,46 85,50 54,54 50,85 46,54 15,50 46,46" fill="currentColor" opacity="0.4" />
        </svg>
      )
    },
    {
      icon: <Utensils className="w-7 h-7" />,
      title: 'Delicious Meals',
      desc: 'Fine dining, authentic regional cuisines, and fresh daily meals included according to your carefully planned itinerary.',
      glowColor: 'hover:shadow-[0_32px_64px_rgba(194,112,58,0.18)]',
      borderColor: 'hover:border-[var(--color-orange)]/40',
      ctaText: 'GASTRONOMY GUARANTEE',
      iconGlow: 'rgba(194, 112, 58, 0.22)',
      bgGraphic: (
        <svg className="absolute -right-6 -bottom-6 w-56 h-56 text-white fill-none stroke-current" viewBox="0 0 100 100" strokeWidth="1">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="38" strokeDasharray="5 5" />
          <circle cx="50" cy="50" r="12" />
        </svg>
      )
    },
    {
      icon: <Car className="w-7 h-7" />,
      title: 'Local Transportation',
      desc: 'Hassle-free transfers throughout your journey, featuring premium private vehicles, rail bookings, or flights.',
      glowColor: 'hover:shadow-[0_32px_64px_rgba(34,197,94,0.12)]',
      borderColor: 'hover:border-green-500/30',
      ctaText: 'SEAMLESS TRANSIT INCLUDED',
      iconGlow: 'rgba(34, 197, 94, 0.15)',
      bgGraphic: (
        <svg className="absolute right-0 bottom-0 w-48 h-48 text-white fill-none stroke-current" viewBox="0 0 100 100" strokeWidth="1.2">
          <path d="M10 80 Q 35 15, 60 50 T 110 20" strokeDasharray="4 4" />
          <circle cx="10" cy="80" r="4" fill="currentColor" />
          <circle cx="50" cy="40" r="4" fill="currentColor" />
          <circle cx="95" cy="27" r="4" fill="currentColor" />
        </svg>
      )
    },
    {
      icon: <Compass className="w-7 h-7" />,
      title: 'Professional Tour Managers',
      desc: 'Experienced local travel experts who coordinate every detail, ensuring a safe, stress-free, and immersive expedition.',
      glowColor: 'hover:shadow-[0_32px_64px_rgba(245,158,11,0.18)]',
      borderColor: 'hover:border-amber-500/30',
      ctaText: 'EXPERT GUIDING INCLUDED',
      iconGlow: 'rgba(245, 158, 11, 0.22)',
      bgGraphic: (
        <svg className="absolute -right-8 -bottom-8 w-52 h-52 text-white fill-none stroke-current" viewBox="0 0 100 100" strokeWidth="1">
          <path d="M50 5 L50 95 M5 50 L95 50" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="28" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: 'Curated Itineraries',
      desc: 'Slow-paced, thoughtfully planned schedules that maximize deep cultural experiences while prioritizing relaxation.',
      glowColor: 'hover:shadow-[0_32px_64px_rgba(255,255,255,0.12)]',
      borderColor: 'hover:border-white/30',
      ctaText: 'BESPOKE ROUTE LAYOUTS',
      iconGlow: 'rgba(255, 255, 255, 0.15)',
      bgGraphic: (
        <svg className="absolute right-0 bottom-4 w-48 h-40 text-white fill-none stroke-current" viewBox="0 0 100 100" strokeWidth="1">
          <path d="M5 90 C 20 60, 35 70, 50 40 C 65 10, 80 30, 95 10" />
          <path d="M5 95 C 20 65, 35 75, 50 45 C 65 15, 80 35, 95 15" opacity="0.5" />
          <path d="M5 85 C 20 55, 35 65, 50 35 C 65 5, 80 25, 95 5" opacity="0.3" />
        </svg>
      )
    },
    {
      icon: <Plane className="w-7 h-7" />,
      title: 'Airfare Assistance',
      desc: 'Complete flight planning, bookings assistance, baggage coordination, and premium sky connection configurations.',
      glowColor: 'hover:shadow-[0_32px_64px_rgba(20,184,166,0.15)]',
      borderColor: 'hover:border-teal-500/30',
      ctaText: 'FLIGHT SUPPORT INCLUDED',
      iconGlow: 'rgba(20, 184, 166, 0.18)',
      bgGraphic: (
        <svg className="absolute -right-4 -bottom-4 w-48 h-48 text-white fill-none stroke-current" viewBox="0 0 100 100" strokeWidth="1">
          <path d="M10 90 L80 20 M80 20 L50 20 M80 20 L80 50" />
          <path d="M25 90 A 45 45 0 0 1 85 30" strokeDasharray="3 3" />
        </svg>
      )
    },
  ];

  return (
    <section 
      className="relative w-full overflow-hidden bg-slate-950 border-t border-white/8 flex flex-col items-center justify-center"
      style={{ paddingTop: '20px', paddingBottom: '20px' }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-[var(--color-gold)]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-[var(--color-orange)]/4 rounded-full blur-[180px] pointer-events-none" />

      {/* Center content container to match the rest of the site's grid */}
      <div className="section-container w-full relative z-10 flex flex-col items-center justify-center">
        
        {/* ── HEADER ON TOP (Centered layout with generous spacing) ── */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl w-full" style={{ marginBottom: '30px' }}>
          <span 
            className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-gold)] border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/8 rounded-[4px] px-4 py-2 mb-7 text-center block"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Every Package Includes
          </span>

          <h2 
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight text-white mb-8 text-center w-full"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Travel Without Worry. We've Covered <span className="text-gold-gradient">Everything</span>.
          </h2>

          <p 
            className="text-base text-white/50 leading-relaxed max-w-2xl font-sans text-center"
            style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(255,255,255,0.45)' }}
          >
            Every Tripzy package includes all essential boutique amenities to guarantee a seamless, slow-paced journey. Sit back, relax, and let our travel architects handle the details.
          </p>
        </div>

        {/* ── CARDS GRID BELOW (3 * 2 columns layout) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full items-stretch justify-items-center justify-center">
          {inclusions.map((item, idx) => (
            <InclusionCard
              key={item.title}
              data={item}
              index={idx}
            />
          ))}
        </div>

      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default InclusionsSection;
