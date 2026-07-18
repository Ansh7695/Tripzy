import React from 'react';
import { Star, MapPin } from 'lucide-react';
import type { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
  offset: number; // -1 = left, 0 = center, 1 = right
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive, offset }) => {
  return (
    <div
      className={`
        relative flex flex-col p-7 md:p-8
        rounded-[24px] border transition-all duration-500 overflow-hidden
        ${isActive
          ? 'bg-gradient-to-br from-white/16 via-white/8 to-transparent backdrop-blur-2xl border-[var(--color-gold)]/35 shadow-[0_24px_48px_rgba(0,0,0,0.36)] scale-100 opacity-100 z-20'
          : 'bg-white/[0.07] backdrop-blur-xl border-white/15 shadow-[0_10px_24px_rgba(0,0,0,0.22)] scale-[0.92] opacity-60 z-10'
        }
        ${offset < 0 ? '-translate-x-6' : offset > 0 ? 'translate-x-6' : ''}
        min-h-[300px] w-full max-w-[600px]
      `}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <div className="absolute -top-24 -right-20 w-56 h-56 rounded-full bg-[var(--color-gold)]/10 blur-3xl pointer-events-none" />

      {/* Top Area: Star Ranking */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/14">
        <div className="flex items-center gap-1.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4.5 h-4.5 fill-[var(--color-gold)] text-[var(--color-gold)]" />
          ))}
        </div>
        <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-[var(--color-gold-light)]">
          Verified Traveler
        </span>
      </div>

      {/* Middle Area: Review */}
      <div className="relative z-10 flex-1 py-5">
        <p className="text-[15px] md:text-[16px] leading-[1.8] text-white/88 italic">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Bottom Area: Name and Place */}
      <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-white/15">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white/70 shadow-md"
        />
        <div className="flex flex-col">
          <h4 className="text-[15px] font-bold text-white leading-tight">{testimonial.name}</h4>
          <span className="text-[11px] font-semibold text-[var(--color-gold-light)] leading-tight mt-0.5">{testimonial.role}</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5 text-[11px] text-white/75 font-semibold uppercase tracking-[0.12em]">
          <MapPin className="w-3.5 h-3.5" />
          <span>{testimonial.destination}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
