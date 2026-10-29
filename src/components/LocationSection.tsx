import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Navigation, Copy, Check, ExternalLink, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#f4ede0] border-t border-[#e5dcce]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8c6d48] mb-3">
            <span>Find Us in Mohali</span>
            <span aria-hidden="true">·</span>
            <span>Opposite Cricket Stadium</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#163824] tracking-tight mb-4">
            Visit The Tirupati Cafe
          </h2>

          <p className="text-base sm:text-lg text-[#554336] leading-relaxed">
            Conveniently situated in Phase 10 right across from the world-renowned 
            Cricket Stadium. Step in for quick crispy dosas and steaming hot filter coffee.
          </p>
        </div>

        {/* Location Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Direction Card (Col 5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#ded3be] shadow-md flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#edf5ef] text-[#163824] rounded-full text-xs font-semibold mb-6">
                <MapPin className="w-3.5 h-3.5" />
                <span>Prime Phase 10 Landmark</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#163824] mb-3">
                {RESTAURANT_INFO.name}
              </h3>

              <div className="space-y-2 text-sm text-[#4a3b32] mb-6">
                <p className="font-semibold text-[#163824]">
                  {RESTAURANT_INFO.address.shop}, {RESTAURANT_INFO.address.landmark}
                </p>
                <p>{RESTAURANT_INFO.address.phase}</p>
                <p>{RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} — {RESTAURANT_INFO.address.postalCode}</p>
                <p>{RESTAURANT_INFO.address.country}</p>
              </div>

              {/* Landmark Callout */}
              <div className="p-4 bg-[#fbf8f3] border border-[#e8ded0] rounded-xl mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#163824] mb-1">
                  <Compass className="w-4 h-4 text-[#c89b3c]" />
                  <span>Key Landmark</span>
                </div>
                <p className="text-xs text-[#6e5849]">
                  Located opposite the Punjab Cricket Association (PCA) Stadium main gates in Sector 64, Phase 10. Ample parking available nearby.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#f0e7d8]">
              <a
                href={RESTAURANT_INFO.links.googleMapsSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#163824] hover:bg-[#102b1c] rounded-md shadow-sm transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <div className="flex gap-2">
                <button
                  onClick={handleCopyAddress}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-[#4a3b32] bg-[#f7f2e8] hover:bg-[#ede3d2] border border-[#d8cbba] rounded-md transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-700" />
                      <span className="text-green-700 font-semibold">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8c6d48]" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>

                <a
                  href={RESTAURANT_INFO.links.magicPinListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-3.5 py-2.5 text-xs font-medium text-[#8c6d48] bg-[#f7f2e8] hover:bg-[#ede3d2] border border-[#d8cbba] rounded-md transition-colors whitespace-nowrap"
                  title="View existing MagicPin listing"
                >
                  <span>MagicPin Listing</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Visual & Embed Representation (Col 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-[#ded3be] shadow-md flex flex-col">
            
            {/* Top Interactive Map Navigation Header */}
            <div className="p-4 bg-[#f7f2e8] border-b border-[#e5dcce] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-medium text-[#163824]">
                <MapPin className="w-4 h-4 text-[#163824]" />
                <span>Mohali · Phase 10 / Sector 64</span>
              </div>
              <a
                href={RESTAURANT_INFO.links.googleMapsSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#8c6d48] hover:text-[#163824] underline font-medium flex items-center gap-1"
              >
                <span>Full Map Search</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Maps View */}
            <div className="relative flex-1 min-h-[360px] sm:min-h-[420px] bg-[#e8ded0]">
              <iframe
                title="Google Maps Location of The Tirupati Cafe Phase 10 Mohali"
                src="https://maps.google.com/maps?q=Shop+09,+opposite+Cricket+Stadium,+Phase+10,+Sector+64,+Mohali,+Punjab+160062,+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map floating prompt banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-lg border border-[#ded3be] shadow-md flex items-center justify-between gap-3 text-left">
                <div>
                  <div className="text-xs font-bold text-[#163824]">Opposite PCA Stadium</div>
                  <div className="text-[11px] text-[#6e5849]">Phase 10, Sector 64, Mohali, Punjab</div>
                </div>
                <a
                  href={RESTAURANT_INFO.links.googleMapsSearch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#163824] text-white text-xs font-semibold rounded hover:bg-[#102b1c] transition-colors shrink-0"
                >
                  Directions
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
