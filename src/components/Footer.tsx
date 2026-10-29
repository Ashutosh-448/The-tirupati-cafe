import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, ArrowUpRight, Heart, Code2 } from 'lucide-react';

interface FooterProps {
  onOpenOwnerGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerGuide }) => {
  return (
    <footer className="bg-[#163824] text-[#fbf8f3] pt-16 pb-12 border-t border-[#102b1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#254f36] text-left">
          
          {/* Col 1: Brand & Ethos (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                {RESTAURANT_INFO.name}
              </span>
              <span className="text-xs font-sans tracking-wider uppercase text-[#c89b3c] block mt-0.5">
                Authentic South Indian Vegetarian
              </span>
            </div>

            <p className="text-sm text-[#d4cbbf] max-w-sm leading-relaxed">
              Serving crispy dosas, fluffy steamed idlis, wholesome meals, and authentic brass-dabara filter coffee in Mohali.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenOwnerGuide}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#224f35] hover:bg-[#2b6142] text-xs font-medium text-[#ffdca8] transition-colors"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Owner & Developer Guide</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white mb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#d4cbbf]">
              <li>
                <a href="#home" className="hover:text-white hover:underline transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-white hover:underline transition-colors">
                  Signature Dishes
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white hover:underline transition-colors">
                  Digital Menu
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white hover:underline transition-colors">
                  Our Culinary Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white hover:underline transition-colors">
                  Food Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white hover:underline transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Directions (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-white mb-2">
              Restaurant Location
            </h4>
            <div className="text-sm text-[#d4cbbf] leading-relaxed space-y-1">
              <p className="text-white font-medium">{RESTAURANT_INFO.address.shop}</p>
              <p className="text-[#ffdca8] font-medium">{RESTAURANT_INFO.address.landmark}</p>
              <p>{RESTAURANT_INFO.address.phase}</p>
              <p>{RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} — {RESTAURANT_INFO.address.postalCode}</p>
            </div>

            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.links.googleMapsSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffdca8] hover:text-white hover:underline"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright Note */}
        <div className="pt-8 text-xs text-[#a99c8f] space-y-3 text-left">
          <div className="p-4 rounded-lg bg-[#0e2719] border border-[#1b432a]">
            <p className="leading-relaxed">
              <strong>Speculative Website Redesign Disclaimer:</strong> {RESTAURANT_INFO.contactNotice.disclaimer} All trademarks, food item names, and location references belong to their respective proprietors. Menu items, prices, and imagery are displayed for demonstration and review purposes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-[#998b7e]">
            <p>
              © {new Date().getFullYear()} The Tirupati Cafe Speculative Redesign Concept.
            </p>
            <div className="flex items-center gap-1 text-[11px]">
              <span>Crafted with</span>
              <Heart className="w-3 h-3 text-[#c89b3c] fill-current" />
              <span>for Mohali food enthusiasts</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
