import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Menu, X, MapPin, ArrowUpRight } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

interface NavbarProps {
  onExploreMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreMenu }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Signature', href: '#signatures' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fbf8f3]/95 backdrop-blur-md border-b border-[#e7decb] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex flex-col group text-left shrink-0"
            aria-label="The Tirupati Cafe Home"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-[#163824] group-hover:text-[#0f2819] transition-colors whitespace-nowrap">
              The Tirupati Cafe
            </span>
            <span className="text-[11px] font-sans font-medium tracking-wider uppercase text-[#8c6d48] whitespace-nowrap">
              South Indian Vegetarian · Mohali
            </span>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#4a3b32]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#163824] hover:underline underline-offset-8 decoration-[#c89b3c] decoration-2 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Contact */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <WhatsAppButton variant="compact" label="WhatsApp" className="px-2.5 py-1.5 rounded hover:bg-[#eef8f1]" />

            <a
              href={RESTAURANT_INFO.links.googleMapsSearch}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#4a3b32] hover:text-[#163824] border border-[#d9ccb6] rounded-md hover:bg-[#f3ece0] transition-colors whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5 text-[#163824]" />
              <span>Directions</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <button
              onClick={onExploreMenu}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#163824] hover:bg-[#102b1c] rounded-md shadow-sm transition-colors whitespace-nowrap"
            >
              Explore Menu
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <WhatsAppButton variant="compact" label="" className="p-1" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2c221c] hover:text-[#163824] focus:outline-none focus:ring-2 focus:ring-[#163824] rounded-md"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf8f3] border-b border-[#e7decb] px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-150">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#2c221c] hover:bg-[#f2eadc] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#e7decb] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreMenu();
                }}
                className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-[#163824] rounded-md shadow-sm hover:bg-[#0f2819]"
              >
                Explore Digital Menu
              </button>
              
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={RESTAURANT_INFO.links.googleMapsSearch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-medium text-[#163824] bg-[#f0e8d9] rounded-md hover:bg-[#e7decb]"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
                
                <WhatsAppButton variant="button" label="WhatsApp" className="py-2.5 text-xs" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
