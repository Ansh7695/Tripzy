import React from 'react';
import { Camera } from 'lucide-react';

const GalleryPage: React.FC = () => {
  return (
    <div className="bg-[var(--color-navy)] min-h-screen pt-32 pb-24 text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--color-orange)]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-md px-6 relative z-10">
        <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 flex items-center justify-center mx-auto mb-6">
          <Camera className="w-8 h-8 text-[var(--color-gold)]" />
        </div>
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Gallery Coming Soon
        </h1>
        <p className="text-white/60 text-sm leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
          We are currently handpicking and curating the most scenic frames from our travels. Stay tuned for visual stories!
        </p>
      </div>
    </div>
  );
};

export default GalleryPage;
