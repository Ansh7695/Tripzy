import React, { useState, useCallback } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { GalleryImage } from '../../data/gallery';

// ── Config ────────────────────────────────────────────────────
const VISIBLE_DEPTH = 4;   // How many cards show in the stack
const SWIPE_THRESHOLD = 80; // px — drag past this to trigger swipe
const CARD_W = 260;         // Polaroid width in px
const CARD_H = 360;         // Total Polaroid height including white bottom

// Rotation offsets per stack depth (0 = top card)
const ROTATIONS = [0, -3, 2, -2];

// ── PolaroidCard ──────────────────────────────────────────────
interface PolaroidCardProps {
  img: GalleryImage;
  depth: number;       // 0 = top visible card
  isTop: boolean;
  onSwiped: () => void;
}

const PolaroidCard: React.FC<PolaroidCardProps> = ({ img, depth, isTop, onSwiped }) => {
  const x = useMotionValue(0);

  // Rotate based on drag direction (top card only)
  const baseRotation = ROTATIONS[depth] ?? 0;
  const dragRotate = useTransform(x, [-200, 200], [baseRotation - 14, baseRotation + 14]);

  const scale    = 1 - depth * 0.045;
  const yOffset  = depth * 12;
  const opacity  = 1 - depth * 0.1;

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        translateX: '-50%',
        zIndex: VISIBLE_DEPTH - depth,
        x: isTop ? x : 0,
        rotate: isTop ? dragRotate : baseRotation,
        scale,
        y: yOffset,
        opacity,
        touchAction: 'pan-y',
        cursor: isTop ? 'grab' : 'default',
      }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.6}
      whileDrag={isTop ? { scale: scale * 1.04, cursor: 'grabbing' } : {}}
      onDragEnd={isTop ? (_, info) => {
        if (Math.abs(info.offset.x) > SWIPE_THRESHOLD) {
          onSwiped();
        }
      } : undefined}
      animate={!isTop ? {
        scale,
        y: yOffset,
        rotate: baseRotation,
        opacity,
      } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 32 }}
    >
      {/* White Polaroid frame */}
      <div
        style={{
          width: CARD_W,
          background: '#fff',
          borderRadius: 18,
          padding: '10px 10px 46px 10px',
          boxShadow: isTop
            ? '0 24px 60px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.3)'
            : `0 ${6 + depth * 4}px ${20 + depth * 12}px rgba(0,0,0,0.28)`,
        }}
      >
        {/* Photo area */}
        <div
          style={{
            width: '100%',
            height: CARD_H - 56, // total minus white bottom
            borderRadius: 10,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={img.url}
            alt={img.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
            draggable={false}
          />

          {/* Glassmorphism overlay — only on top card */}
          {isTop && (
            <div
              style={{
                position: 'absolute',
                bottom: 10,
                left: 8,
                right: 8,
                background: 'rgba(0,0,0,0.42)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: 10,
                padding: '8px 10px',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <MapPin size={10} color="#d4a574" />
              <span
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.88)',
                  fontFamily: 'var(--font-body)',
                  flex: 1,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {img.country}
              </span>
              <span
                style={{
                  fontSize: 8,
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.14)',
                  borderRadius: 4,
                  padding: '2px 6px',
                  whiteSpace: 'nowrap',
                }}
              >
                {img.category}
              </span>
            </div>
          )}
        </div>

        {/* Polaroid caption — white area at bottom */}
        <div style={{ paddingTop: 10, textAlign: 'center' }}>
          <p
            style={{
              fontSize: 11,
              fontFamily: 'var(--font-body)',
              color: '#666',
              fontStyle: 'italic',
              margin: 0,
              letterSpacing: '0.02em',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {img.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// ── MobilePolaroidStack ───────────────────────────────────────
interface MobilePolaroidStackProps {
  images: GalleryImage[];
}

const MobilePolaroidStack: React.FC<MobilePolaroidStackProps> = ({ images }) => {
  const [stack, setStack] = useState([...images]);
  // cardKey forces a fresh drag-state mount on the top card after each swipe
  const [cardKey, setCardKey] = useState(0);

  const handleSwiped = useCallback(() => {
    setStack(prev => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
    setCardKey(k => k + 1);
  }, []);

  // Only render VISIBLE_DEPTH cards
  const visible = stack.slice(0, VISIBLE_DEPTH);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 12,
      }}
    >
      {/* Stack container — sized to card dimensions + depth offsets */}
      <div
        style={{
          position: 'relative',
          width: CARD_W,
          height: CARD_H + (VISIBLE_DEPTH - 1) * 12 + 20,
        }}
      >
        {/* Render deepest cards first (lowest z-index) */}
        {[...visible].reverse().map((img, revIdx) => {
          const depth = VISIBLE_DEPTH - 1 - revIdx;
          const isTop = depth === 0;
          return (
            <PolaroidCard
              key={isTop ? `top-${cardKey}` : `card-depth${depth}-${img.id}`}
              img={img}
              depth={depth}
              isTop={isTop}
              onSwiped={handleSwiped}
            />
          );
        })}
      </div>

      {/* Swipe indicator */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{
          marginTop: 28,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          color: 'rgba(255,255,255,0.35)',
          fontFamily: 'var(--font-body)',
          fontSize: 9,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
        }}
      >
        <span style={{ fontSize: 14 }}>←</span>
        <span>Swipe to explore</span>
        <span style={{ fontSize: 14 }}>→</span>
      </motion.div>
    </motion.div>
  );
};

export default MobilePolaroidStack;
