import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [loadingText, setLoadingText] = useState('Starting the engine...');
  const [show, setShow] = useState(true);

  const loadingMessages = [
    'Starting the engine...',
    'Packing the bags...',
    'Fueling the van...',
    'Mapping the routes...',
    'Choosing the best scenic tracks...',
    'Almost there...'
  ];

  useEffect(() => {
    let messageIndex = 0;
    const interval = setInterval(() => {
      messageIndex = (messageIndex + 1) % loadingMessages.length;
      setLoadingText(loadingMessages[messageIndex]);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // Fade out effect after loading finishes
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 600); // match CSS fade transition duration
      return () => clearTimeout(timer);
    } else {
      setShow(true);
    }
  }, [isLoading]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070d19] transition-opacity duration-500 ease-in-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        background: 'radial-gradient(circle, #0e1e38 0%, #070d19 100%)'
      }}
    >
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Travel Van SVG */}
        <div className="relative w-64 h-32 mb-8 flex justify-center items-end">
          {/* Ground Dust/Shadow */}
          <div className="absolute bottom-2 left-6 right-6 h-2 bg-black/40 rounded-full blur-sm" />
          
          <svg
            className="w-48 h-24 overflow-visible"
            viewBox="0 0 160 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Van Body (bobs up and down) */}
            <g className="van-body">
              {/* Main Chassis - Claymorphic rounded look */}
              <rect x="15" y="10" width="115" height="50" rx="16" fill="url(#vanGradient)" />
              
              {/* Roof Rack */}
              <rect x="35" y="5" width="70" height="5" rx="2" fill="#cbd5e1" />
              <line x1="45" y1="10" x2="45" y2="5" stroke="#94a3b8" strokeWidth="3" />
              <line x1="70" y1="10" x2="70" y2="5" stroke="#94a3b8" strokeWidth="3" />
              <line x1="95" y1="10" x2="95" y2="5" stroke="#94a3b8" strokeWidth="3" />
              
              {/* Luggage on Roof (Claymorphic) */}
              <rect x="50" y="-3" width="22" height="8" rx="3" fill="#f97316" stroke="#ea580c" strokeWidth="1" />
              <rect x="75" y="-1" width="18" height="6" rx="2" fill="#10b981" stroke="#059669" strokeWidth="1" />

              {/* Windows (frosted glassmorphic style) */}
              <rect x="25" y="18" width="30" height="18" rx="4" fill="#0c4a6e" fillOpacity="0.75" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="62" y="18" width="30" height="18" rx="4" fill="#0c4a6e" fillOpacity="0.75" stroke="#38bdf8" strokeWidth="1.5" />
              <path d="M99 18H118C122 18 125 21 125 25V36H99V18Z" fill="#0c4a6e" fillOpacity="0.75" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Side Door Line */}
              <line x1="60" y1="18" x2="60" y2="60" stroke="#0284c7" strokeWidth="2" />
              
              {/* Door Handle */}
              <rect x="54" y="38" width="4" height="2" rx="1" fill="#cbd5e1" />

              {/* Headlight */}
              <circle cx="132" cy="46" r="5" fill="#fef08a" />
              {/* Glow Beam */}
              <path d="M137 42L165 30V62L137 50Z" fill="url(#glowGradient)" opacity="0.3" />

              {/* Taillight */}
              <rect x="12" y="42" width="3" height="10" rx="1.5" fill="#ef4444" />

              {/* Front Grill / Bumper */}
              <rect x="128" y="52" width="5" height="6" rx="1" fill="#cbd5e1" />
              <rect x="14" y="54" width="8" height="4" rx="2" fill="#475569" />
              <rect x="120" y="54" width="12" height="4" rx="2" fill="#475569" />
            </g>

            {/* Back Wheel */}
            <g className="van-wheel" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
              <circle cx="42" cy="62" r="13" fill="#1e293b" />
              <circle cx="42" cy="62" r="7" fill="#e2e8f0" />
              {/* Spokes */}
              <line x1="37" y1="62" x2="47" y2="62" stroke="#475569" strokeWidth="1.5" />
              <line x1="42" y1="57" x2="42" y2="67" stroke="#475569" strokeWidth="1.5" />
              <circle cx="42" cy="62" r="2.5" fill="#94a3b8" />
            </g>

            {/* Front Wheel */}
            <g className="van-wheel" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
              <circle cx="102" cy="62" r="13" fill="#1e293b" />
              <circle cx="102" cy="62" r="7" fill="#e2e8f0" />
              {/* Spokes */}
              <line x1="97" y1="62" x2="107" y2="62" stroke="#475569" strokeWidth="1.5" />
              <line x1="102" y1="57" x2="102" y2="67" stroke="#475569" strokeWidth="1.5" />
              <circle cx="102" cy="62" r="2.5" fill="#94a3b8" />
            </g>

            {/* Gradients */}
            <defs>
              <linearGradient id="vanGradient" x1="15" y1="10" x2="130" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="40%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="glowGradient" x1="137" y1="46" x2="165" y2="46" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Brand Text */}
        <h2 className="text-3xl font-bold tracking-wider text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          Tripzy
        </h2>
        <p className="text-sm font-semibold tracking-widest text-[#0ea5e9] uppercase mb-6">
          Wander & Explore
        </p>

        {/* Loading text with glassmorphic backing */}
        <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg min-w-[240px]">
          <p className="text-sm text-slate-300 font-medium animate-pulse">
            {loadingText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
