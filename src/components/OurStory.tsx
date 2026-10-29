import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Heart, Coffee, ShieldCheck, MapPin } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#f4ede0] border-t border-[#e5dcce]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#ded3be] shadow-xl bg-white p-2">
              <img
                src="/images/dish_chutneys_sambar.jpg"
                alt="Traditional South Indian accompaniments with freshly tempered sambar and stone-ground chutneys"
                className="w-full h-80 sm:h-96 object-cover rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="p-4 text-left">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8c6d48] block mb-1">
                  Culinary Heritage
                </span>
                <p className="font-serif text-lg font-bold text-[#163824]">
                  Traditional Tempering & Fresh Batters
                </p>
                <p className="text-xs text-[#6e5849] mt-1">
                  Mustard seeds, curry leaves, hing, and slow-simmered lentils prepared daily.
                </p>
              </div>
            </div>

            {/* Small offset card */}
            <div className="hidden sm:block absolute -top-5 -right-5 bg-[#163824] text-white p-4 rounded-xl shadow-lg max-w-xs text-left">
              <span className="text-[11px] text-[#d4af37] font-semibold block uppercase">Pure Vegetarian</span>
              <p className="text-xs text-[#e8ded0] mt-0.5">
                Authentic flavours crafted for families, students, and dosa lovers across the Tricity.
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8c6d48] mb-3">
              <span>About The Concept</span>
              <span aria-hidden="true">·</span>
              <span>South Indian Hospitality</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#163824] tracking-tight mb-6 text-balance">
              Bringing South Indian Comfort to the Heart of Mohali
            </h2>

            <div className="space-y-4 text-base text-[#523f33] leading-relaxed">
              <p>
                Located in Phase 10 right opposite the iconic Cricket Stadium, <strong>The Tirupati Cafe</strong> is a dedicated haven for authentic South Indian vegetarian comfort. We celebrate the timeless joy of crisp golden dosas roasted in pure desi ghee, naturally fermented idlis as soft as clouds, and rich decoction filter coffee poured with pride.
              </p>
              
              <p>
                South Indian cooking is an art of patience and equilibrium. From the slow stone-ground fermentation of rice and black gram lentils to the crackle of fresh curry leaves in fragrant coconut oil and ghee, every dish is an invitation to pause, relish, and share a hearty meal.
              </p>

              <p className="text-sm bg-white/70 p-4 rounded-lg border border-[#e1d5c2] text-[#634e40]">
                <strong>About this website:</strong> This digital experience is an independent design concept created to showcase the culinary appeal of The Tirupati Cafe. It aims to help local residents and cricket stadium visitors easily explore the menu and discover directions.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#ded3be]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#163824] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#163824]">Pure Vegetarian</h4>
                  <p className="text-xs text-[#6e5849] mt-0.5">Traditional satvik preparation standards.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#163824] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#163824]">Fresh Daily Batters</h4>
                  <p className="text-xs text-[#6e5849] mt-0.5">Naturally fermented for optimal crispness.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-[#163824] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#163824]">Filter Coffee</h4>
                  <p className="text-xs text-[#6e5849] mt-0.5">Freshly brewed chicory blend decoction.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
