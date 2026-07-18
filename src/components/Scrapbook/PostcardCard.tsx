import React from 'react';
import { Heart, MapPin } from 'lucide-react';
import type { ScrapbookPhoto } from '../../data/scrapbook';

interface PostcardCardProps {
  photo: ScrapbookPhoto;
  onClick: () => void;
}

const PostcardCard: React.FC<PostcardCardProps> = ({ photo, onClick }) => {
  const sizeClasses = {
    sm: 'h-[250px]',
    md: 'h-[320px]',
    lg: 'h-[390px]'
  };

  return (
    <div
      onClick={onClick}
      className="scrapbook-item bg-gradient-to-b from-white/95 to-[#f9f4ec] p-4 pb-8 rounded-[20px] cursor-pointer inline-block mx-auto relative group border border-white/70 shadow-[0_18px_30px_rgba(15,23,42,0.24)]"
      style={{ rotate: photo.rotate }}
    >
      {/* Masking tape decoration */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[var(--color-beige)]/70 rounded-sm z-10 opacity-80 rotate-[-1deg]" />

      {/* Image */}
      <div className={`${sizeClasses[photo.size]} w-full overflow-hidden rounded-[12px] relative`}>
        <img
          src={photo.url}
          alt={photo.caption}
          className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5 group-hover:from-black/10 transition-colors duration-300" />
        <Heart className="absolute top-3 right-3 w-5 h-5 text-white/65 group-hover:text-red-400 fill-transparent group-hover:fill-red-400 transition-all duration-300" />
      </div>

      {/* Caption */}
      <div className="mt-4 px-1.5">
        <p
          className="text-[15px] font-bold text-[var(--color-text-dark)] tracking-wide"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {photo.caption}
        </p>
        <div className="flex items-center justify-between mt-2.5">
          <span className="flex items-center gap-1 text-[10px] text-[var(--color-text-muted)] font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            {photo.destination}
          </span>
          {photo.note && (
            <span className="text-[10px] text-[var(--color-gold)] font-semibold italic">
              {photo.note}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostcardCard;
