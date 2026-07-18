import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
}

const CountUpItem: React.FC<StatItemProps> = ({ value, suffix = '', label }) => {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!numberRef.current) return;
    const isDecimal = value % 1 !== 0;
    const obj = { val: 0 };

    gsap.to(obj, {
      val: value,
      duration: 2.2,
      ease: 'power4.out',
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.innerText = isDecimal
            ? obj.val.toFixed(1)
            : Math.floor(obj.val).toLocaleString();
        }
      }
    });
  }, [value]);

  return (
    <div className="flex flex-col items-center md:items-start select-none py-4">
      <span className="text-[28px] md:text-[36px] font-extrabold text-white tracking-tight" style={{ fontFamily: 'var(--font-body)' }}>
        <span ref={numberRef}>0</span>
        <span className="text-[var(--color-gold)] font-semibold">{suffix}</span>
      </span>
      <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold mt-1.5 text-white/35" style={{ fontFamily: 'var(--font-body)' }}>
        {label}
      </span>
    </div>
  );
};

const StatsStrip: React.FC = () => {
  return (
    <div className="w-full border-t border-white/8 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
      <CountUpItem value={15000} suffix="+" label="Happy Travellers" />
      <CountUpItem value={30} suffix="+" label="Destinations" />
      <CountUpItem value={4.9} suffix="★" label="Average Rating" />
      <CountUpItem value={150} suffix="+" label="Local Guides" />
    </div>
  );
};

export default StatsStrip;
