import React from 'react';
import { X, Info, Sparkles, MapPin } from 'lucide-react';

interface DishModalProps {
  dish: {
    name: string;
    description: string;
    samplePrice?: string;
    image?: string;
    subtitle?: string;
    tags?: string[];
    isSignature?: boolean;
    priceNote?: string;
  } | null;
  onClose: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  if (!dish) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#fbf8f3] rounded-2xl overflow-hidden shadow-2xl border border-[#ded3be] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
          aria-label="Close dish details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        {dish.image && (
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#e8ded0]">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Badges on Image */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white/90 p-0.5 border border-[#163824] flex items-center justify-center rounded">
                  <div className="w-2 h-2 rounded-full bg-[#163824]" />
                </div>
                <span className="text-xs font-semibold text-[#ffdca8]">100% Pure Vegetarian</span>
              </div>

              <div className="bg-white/95 text-[#163824] px-3 py-1 rounded-md text-xs font-semibold shadow border border-[#dfd2be]">
                Contact for current prices
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8c6d48] mb-1">
            {dish.subtitle ? dish.subtitle : 'South Indian Vegetarian Special'}
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#163824] mb-3">
            {dish.name}
          </h3>

          <p className="text-sm text-[#554336] leading-relaxed mb-5">
            {dish.description}
          </p>

          {/* Tags */}
          {dish.tags && dish.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap mb-5">
              {dish.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs bg-[#f2e9dc] text-[#6e5849] rounded border border-[#dfd2be]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Pricing & Verification Note */}
          <div className="p-3.5 bg-[#f5ede0] rounded-lg border border-[#e0d3bf] text-xs text-[#6e5849] flex items-start gap-2.5 mb-5">
            <Info className="w-4 h-4 text-[#163824] shrink-0 mt-0.5" />
            <div>
              <strong>Price Note:</strong> {dish.priceNote || 'Sample menu entry. Current pricing is subject to confirmation at the cafe counter.'}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-[#8c6d48] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#163824]" />
              <span>Available in-store opposite Cricket Stadium</span>
            </span>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#163824] hover:bg-[#102b1c] rounded-md transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
