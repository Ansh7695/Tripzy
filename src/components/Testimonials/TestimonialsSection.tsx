import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { trustStats } from '../../data/testimonials';

// ─── Extended testimonials data for the scrolling rows ─────────
const scrollTestimonials = [
  {
    id: 1,
    name: 'Aria Thompson',
    role: 'Solo Explorer',
    destination: 'Ladakh, India',
    quote: 'The Ladakh trip was pure magic. Every morning I woke up to pristine mountain air and monasteries draped in prayer flags. The guides were exceptional — they shared stories no guidebook could.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    duration: '7 Days',
    verified: true,
  },
  {
    id: 2,
    name: 'Julian Carter',
    role: 'Travel Blogger',
    destination: 'Bali, Indonesia',
    quote: 'Absolutely fell in love with the itinerary. From hidden temples to sunrise volcano treks, every moment felt curated by someone who truly understands slow, intentional travel.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    duration: '6 Days',
    verified: true,
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Family Vacationer',
    destination: 'Kerala, India',
    quote: 'Everything was organized to perfection. From the serene houseboat mornings to the thrilling spice plantation walks — my children still talk about it every single day.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    duration: '8 Days',
    verified: false,
  },
  {
    id: 4,
    name: 'Marcus Chen',
    role: 'Luxury Traveller',
    destination: 'Santorini, Greece',
    quote: 'Boutique cave hotels, private yacht sunsets, and authentic dining. This was the most indulgent and perfectly planned trip I have ever experienced in my life.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    duration: '5 Days',
    verified: true,
  },
  {
    id: 5,
    name: 'Sophie Laurent',
    role: 'Honeymoon Couple',
    destination: 'Maldives',
    quote: 'Our honeymoon was nothing short of a dream. Private overwater villa, sandbank dinners under the stars, and crystal-clear turquoise waters — absolutely unforgettable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    duration: '10 Days',
    verified: true,
  },
  {
    id: 6,
    name: 'Rohan Dev',
    role: 'Adventure Enthusiast',
    destination: 'Spiti Valley',
    quote: 'Riding through high wind passes with local experts who know every hidden trail. The stargazing at night at 14,000 ft was something I will never forget. Perfect execution.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    duration: '9 Days',
    verified: false,
  },
  {
    id: 7,
    name: 'Sarah Jenkins',
    role: 'Culture Seeker',
    destination: 'Rajasthan',
    quote: 'Staying in royal forts and walking heritage trails with passionate storytellers was a deeply moving experience. Rajasthan truly lives and breathes its history.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    duration: '7 Days',
    verified: true,
  },
  {
    id: 8,
    name: 'Nadia Okonkwo',
    role: 'Wildlife Photographer',
    destination: 'Jim Corbett, India',
    quote: 'I captured photographs I had only dreamed of. The safari planning was impeccable and every early morning jeep ride brought new, breathtaking encounters with nature.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80',
    duration: '5 Days',
    verified: true,
  },
  {
    id: 9,
    name: "Liam O'Brien",
    role: 'Backpacker',
    destination: 'Vietnam Coast',
    quote: "The coast-to-coast Vietnam itinerary was crafted brilliantly. Hoi An lanterns, Ha Long Bay cruise, and the street food in Hanoi — every single detail was just right.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    duration: '12 Days',
    verified: false,
  },
  {
    id: 10,
    name: 'Priya Mehra',
    role: 'Wellness Retreat Guest',
    destination: 'Rishikesh, India',
    quote: 'A transformative week of yoga, meditation, and Ganga aarti. The retreat schedule was calming yet enriching, and the hosts felt like family by the time I left.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=150&q=80',
    duration: '7 Days',
    verified: true,
  },
  {
    id: 11,
    name: 'Carlos Mendez',
    role: 'Digital Nomad',
    destination: 'Thailand Islands',
    quote: "Island hopping done right. Each stop felt unique and unhurried. The team even arranged a private long-tail boat excursion that wasn't on the standard package. Exceptional.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
    duration: '11 Days',
    verified: true,
  },
  {
    id: 12,
    name: 'Yuki Tanaka',
    role: 'Couple Traveller',
    destination: 'Kashmir, India',
    quote: 'The shikara rides at dawn on Dal Lake, saffron fields stretching to the horizon, and a cozy houseboat with a personal chef — Kashmir is pure poetry, beautifully arranged.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80',
    duration: '6 Days',
    verified: true,
  },
];

const row1Data = scrollTestimonials.slice(0, 6);
const row2Data = scrollTestimonials.slice(6, 12);

// ─── Stat Counter Component ───────────────────────────────────
const StatCounter: React.FC<{ target: number; suffix?: string; isRating?: boolean }> = ({
  target,
  suffix = '',
  isRating = false,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const step = target / (duration / 16);
    let curr = 0;
    const timer = setInterval(() => {
      curr = Math.min(curr + step, target);
      setCount(curr);
      if (curr >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
      {isRating ? count.toFixed(1) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
};

// ─── Scroll Row Card ──────────────────────────────────────────
interface ScrollCardData {
  id: number;
  name: string;
  role: string;
  destination: string;
  quote: string;
  rating: number;
  avatar: string;
  duration: string;
  verified: boolean;
}

const ScrollCard: React.FC<{ testimonial: ScrollCardData }> = ({ testimonial }) => {
  return (
    <div
      className="flex-shrink-0 w-[340px] sm:w-[380px] rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:border-[var(--color-gold)]/30"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
      }}
    >
      {/* Quote icon + rating */}
      <div className="flex items-center justify-between">
        <Quote className="w-7 h-7 opacity-30" style={{ color: 'var(--color-gold)' }} />
        <div className="flex gap-0.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      {/* Review text */}
      <p className="text-[13px] leading-relaxed text-white/65 flex-1">
        "{testimonial.quote}"
      </p>

      {/* Profile footer */}
      <div
        className="flex items-center gap-3 pt-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-9 h-9 rounded-full object-cover"
          style={{ border: '1.5px solid rgba(255,255,255,0.12)' }}
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-bold text-white truncate">{testimonial.name}</h4>
          <span className="text-[10px] text-white/40 block truncate">{testimonial.role}</span>
        </div>
        <div className="text-right shrink-0">
          <span className="text-[10px] font-semibold block" style={{ color: 'var(--color-gold)' }}>
            {testimonial.destination}
          </span>
          {testimonial.verified && (
            <span className="inline-flex items-center gap-0.5 text-[8px] text-emerald-400 mt-0.5">
              <CheckCircle2 className="w-2.5 h-2.5" /> Verified
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Infinite Scroll Row ──────────────────────────────────────
interface ScrollRowProps {
  items: ScrollCardData[];
  direction: 'left' | 'right';
  speed?: number;
}

const ScrollRow: React.FC<ScrollRowProps> = ({ items, direction, speed = 40 }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const children = Array.from(track.children);
    children.forEach(child => {
      const clone = child.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    });
  }, []);

  const animationName = direction === 'left' ? 'scroll-left-infinite' : 'scroll-right-infinite';

  return (
    <div
      className="overflow-hidden w-full"
      style={{ paddingTop: '16px', paddingBottom: '16px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex gap-5"
        style={{
          width: 'fit-content',
          paddingLeft: '24px',
          paddingRight: '24px',
          animation: `${animationName} ${speed}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {items.map((t, i) => (
          <ScrollCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
};

// ─── TestimonialsSection Component ────────────────────────────
const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-b from-[#0c1324] via-[#090f1d] to-[#080e1c] relative overflow-hidden"
      style={{ paddingTop: '20px', paddingBottom: '20px' }}
    >
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-[var(--color-gold)]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-[var(--color-orange)]/3 rounded-full blur-[140px] pointer-events-none" />

      {/* ── Header ── */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
          marginBottom: '25px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '700px',
            width: '100%',
            margin: '0 auto',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              fontWeight: 800,
              color: 'var(--color-gold)',
              marginBottom: '16px',
              display: 'block',
              textAlign: 'center',
              width: '100%',
            }}
          >
            Testimonials
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#fff',
              marginBottom: '20px',
              textAlign: 'center',
              width: '100%',
            }}
          >
            Stories from Travellers <span className="text-gold-gradient">Who Trusted Us</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Our guests don't just visit destinations—they return home with unforgettable memories. Here's what they have to say.
          </p>
        </motion.div>
      </div>

      {/* ── Scrolling Rows ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex flex-col gap-5 md:px-10"
        style={{ paddingTop: '10px', paddingBottom: '10px' }}
      >
        {/* Row 1 — scrolls left */}
        <ScrollRow items={row1Data} direction="left" speed={38} />

        {/* Row 2 — scrolls right */}
        <ScrollRow items={row2Data} direction="right" speed={42} />
      </motion.div>


      {/* ── Trust Indicators strip ── */}
      <div className="section-container max-w-5xl relative z-10">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-[20px] overflow-hidden border border-white/8"
          style={{ marginTop: '64px' }}
        >
          {trustStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center py-8 px-4 bg-[#090f1d] text-center">
              <StatCounter target={stat.value} suffix={stat.suffix} isRating={stat.isRating} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes scroll-left-infinite {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right-infinite {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
