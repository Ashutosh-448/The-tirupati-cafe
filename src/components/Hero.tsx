import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, ArrowRight, ArrowUpRight, Coffee, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle background ambient styling */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#f2e7d3] opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-[#e8ded0] opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Speculative Concept Notice Bar */}
        <div className="mb-8 p-3 bg-[#f3ecdf] border border-[#e2d5c1] rounded-lg text-xs text-[#5c4a3d] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#163824]">Concept Preview:</span>
            <span>Independent speculative website design concept for The Tirupati Cafe in Phase 10, Mohali.</span>
          </div>
          <span className="text-[#8c6d48] text-[11px] whitespace-nowrap">Subject to restaurant owner approval</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Unboxed editorial metadata (Zero-pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#7a5e3f] mb-4">
              <span>South Indian Vegetarian</span>
              <span aria-hidden="true">·</span>
              <span>Phase 10, Sector 64, Mohali</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-[#163824] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                Opposite Cricket Stadium
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#163824] leading-[1.12] mb-6 max-w-2xl text-balance">
              {RESTAURANT_INFO.tagline}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#534135] leading-relaxed mb-8 max-w-xl">
              {RESTAURANT_INFO.subtitle}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#163824] hover:bg-[#102b1c] rounded-md shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={RESTAURANT_INFO.links.googleMapsSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#163824] bg-[#f0e8d9] hover:bg-[#e7decb] border border-[#d9ccb6] rounded-md transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#163824]" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4 text-[#7a5e3f]" />
              </a>
            </div>

            {/* Highlights Bar */}
            <div className="pt-6 border-t border-[#e5dcce] grid grid-cols-3 gap-6 w-full text-left">
              <div>
                <span className="block font-serif text-2xl font-bold text-[#163824]">100%</span>
                <span className="text-xs text-[#6e5848]">Pure Vegetarian</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#163824]">Crispy</span>
                <span className="text-xs text-[#6e5848]">Ghee & Podi Dosas</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#163824]">Fresh</span>
                <span className="text-xs text-[#6e5848]">Filter Coffee</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#dfd5c4] shadow-2xl bg-[#f2e9dc]">
              <img
                src="/images/tirupati_hero_dosa.jpg"
                alt="Crispy golden South Indian dosa served on banana leaf with sambar and fresh chutneys at The Tirupati Cafe Mohali"
                className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to high-availability authentic South Indian Dosa photograph if local file missing
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80';
                }}
              />

              {/* Gradient scrim for caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 text-white text-left pointer-events-none">
                <div className="flex items-center gap-2 text-xs font-medium text-[#ffdca8] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Public Review Favourite</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                  Ghee Podi Masala Dosa
                </h3>
                <p className="text-xs text-neutral-200 line-clamp-2">
                  Served with steaming aromatic sambar, stone-ground coconut chutney, and tangy tomato chutney.
                </p>
              </div>
            </div>

            {/* Floating Quick Card */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md border border-[#e5dcce] p-4 rounded-xl shadow-lg items-center gap-3.5 text-left max-w-xs">
              <div className="w-10 h-10 rounded-full bg-[#eef5f0] flex items-center justify-center shrink-0 text-[#163824]">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#163824]">South Indian Filter Coffee</div>
                <div className="text-[11px] text-[#6b5646]">Traditional decoction brew in brass dabara</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
