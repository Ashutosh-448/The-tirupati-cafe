import React, { useState } from 'react';
import { SIGNATURE_DISHES, SignatureDish, UNVERIFIED_PRICE_LABEL } from '../data/restaurantData';
import { Info, Sparkles, Utensils } from 'lucide-react';

interface SignatureDishesProps {
  onSelectDish: (dish: SignatureDish) => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onSelectDish }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const DISH_FALLBACKS: Record<string, string> = {
    'ghee-podi-masala-dosa': 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80',
    'ghee-plain-dosa': 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80',
    'garlic-benne-dosa': 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80',
    'ghee-podi-idli': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    'filter-coffee': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
    'dahi-bada': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
  };

  const handleImageError = (id: string, e: React.SyntheticEvent<HTMLImageElement>) => {
    const fallback = DISH_FALLBACKS[id];
    if (fallback && e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    } else {
      setImageErrors((prev) => ({ ...prev, [id]: true }));
    }
  };

  return (
    <section id="signatures" className="py-14 sm:py-20 bg-[#f7f2e7] border-y border-[#e7decb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8c6d48] mb-3">
            <span>Customer Favourites</span>
            <span aria-hidden="true">·</span>
            <span>Public Review Mentions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold text-[#163824] tracking-tight mb-4">
            Signature South Indian Delicacies
          </h2>

          <p className="text-base sm:text-lg text-[#554336] leading-relaxed">
            These popular items are frequently celebrated in public reviews by Mohali diners. 
            Prepared fresh to deliver that cherished South Indian crispness and aroma.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#7d644e] bg-[#eee4d2] px-3.5 py-1.5 rounded-full border border-[#dfd2be]">
            <Info className="w-3.5 h-3.5 text-[#163824] shrink-0" />
            <span>Pricing policy: Contact cafe for current in-store pricing.</span>
          </div>
        </div>

        {/* 6 Cards Grid (Mobile 1 col, Tablet 2 col, Desktop 3 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SIGNATURE_DISHES.map((dish) => (
            <div
              key={dish.id}
              onClick={() => onSelectDish(dish)}
              className="group bg-white rounded-xl overflow-hidden border border-[#e4d9c6] shadow-sm hover:shadow-xl hover:border-[#c89b3c]/60 transition-all duration-300 flex flex-col cursor-pointer text-left"
            >
              {/* Card Image */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-[#e8ded0]">
                {!imageErrors[dish.id] ? (
                  <img
                    src={dish.image}
                    alt={`${dish.name} at The Tirupati Cafe Mohali`}
                    onError={(e) => handleImageError(dish.id, e)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#f0e7d8] text-[#8c6d48] p-4 text-center">
                    <Utensils className="w-10 h-10 mb-2 opacity-60 text-[#163824]" />
                    <span className="font-serif text-sm font-semibold text-[#163824]">{dish.name}</span>
                    <span className="text-[11px] text-[#6e5849]">South Indian Specialty</span>
                  </div>
                )}

                {/* Vegetarian Indicator Symbol */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-sm p-1 rounded border border-[#163824]/30 shadow-sm flex items-center justify-center">
                  <div className="w-3.5 h-3.5 border border-[#163824] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#163824]" />
                  </div>
                </div>

                {/* Popular Review Tag */}
                <div className="absolute top-3.5 right-3.5 bg-[#163824]/90 backdrop-blur-sm text-[#fbf8f3] text-[11px] font-medium px-2.5 py-1 rounded flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  <span>Popular Review</span>
                </div>

                {/* Price Display Overlay */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-xs font-semibold text-[#163824] shadow-sm border border-[#e7decb]">
                  {dish.isPriceVerified && dish.verifiedPrice ? (
                    dish.verifiedPrice
                  ) : (
                    <span className="text-[#6b5443] font-medium">{UNVERIFIED_PRICE_LABEL}</span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-medium text-[#8c6d48] uppercase tracking-wider mb-1">
                    {dish.subtitle}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#163824] group-hover:text-[#102b1c] transition-colors mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-[#5c4b3f] leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-[#f0e8da] flex items-center justify-between text-xs text-[#7a6452]">
                  <span className="text-[11px] text-[#8c6d48] italic">Click to view details</span>
                  <span className="font-medium text-[#163824] group-hover:translate-x-1 transition-transform">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
