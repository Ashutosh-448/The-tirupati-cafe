import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MessageCircle, X, Info, ExternalLink } from 'lucide-react';

interface WhatsAppButtonProps {
  variant?: 'floating' | 'button' | 'compact';
  label?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  variant = 'floating',
  label = 'WhatsApp Inquiries',
  className = '',
}) => {
  const [showConfigModal, setShowConfigModal] = useState(false);
  const whatsAppNumber = RESTAURANT_INFO.contactConfig.whatsAppNumber?.trim();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (whatsAppNumber && whatsAppNumber.length >= 8) {
      const message = encodeURIComponent(
        'Hello The Tirupati Cafe, I am inquiring about the menu and visiting timings in Phase 10 Mohali.'
      );
      window.open(`https://wa.me/${whatsAppNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
    } else {
      setShowConfigModal(true);
    }
  };

  return (
    <>
      {variant === 'floating' && (
        <button
          onClick={handleClick}
          className={`fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 ${className}`}
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            {label}
          </span>
        </button>
      )}

      {variant === 'button' && (
        <button
          onClick={handleClick}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md font-semibold text-xs text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-sm transition-colors ${className}`}
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>{label}</span>
        </button>
      )}

      {variant === 'compact' && (
        <button
          onClick={handleClick}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold text-[#163824] hover:text-[#25D366] transition-colors ${className}`}
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-current" />
          <span>{label}</span>
        </button>
      )}

      {/* WhatsApp Configuration Informative Modal */}
      {showConfigModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowConfigModal(false)}
        >
          <div
            className="relative max-w-md w-full bg-[#fbf8f3] rounded-2xl overflow-hidden shadow-2xl border border-[#ded3be] p-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowConfigModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-[#6e5849] hover:bg-[#ebdcc8] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#163824]">
                  WhatsApp Contact
                </h4>
                <span className="text-xs text-[#8c6d48]">The Tirupati Cafe · Mohali</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#523f33] leading-relaxed mb-6">
              <p>
                In strict compliance with our content verification rules, <strong>we do not invent or publish unverified phone numbers</strong>.
              </p>
              <div className="p-3.5 bg-[#f3ecdf] rounded-lg border border-[#e1d5c2] flex items-start gap-2 text-xs">
                <Info className="w-4 h-4 text-[#163824] shrink-0 mt-0.5" />
                <div>
                  <strong>For Cafe Management & Developers:</strong><br />
                  To link your official business WhatsApp line, open <code className="font-mono bg-white px-1 py-0.5 rounded text-[11px]">src/data/restaurantData.ts</code> and set:
                  <pre className="mt-1 font-mono text-[11px] bg-[#1f2d24] text-[#d4af37] p-2 rounded">
                    whatsAppNumber: '91XXXXXXXXXX'
                  </pre>
                  This button will immediately trigger direct chat!
                </div>
              </div>
              <p className="text-xs text-[#7d6550]">
                Until confirmed, please visit in person at Shop 09, opposite Cricket Stadium, Phase 10, Mohali.
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#e8ded0]">
              <a
                href={RESTAURANT_INFO.links.googleMapsSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#163824] hover:underline"
              >
                <span>Find Cafe on Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => setShowConfigModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#163824] rounded-md hover:bg-[#102b1c] transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
