import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { ZoomIn, X, Info } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Dosas', 'Idlis & Vadas', 'Beverages', 'Accompaniments'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#fbf8f3] border-t border-[#e7decb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8c6d48] mb-3">
            <span>Visual Showcase</span>
            <span aria-hidden="true">·</span>
            <span>Food Gallery</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#163824] tracking-tight mb-4">
            A Feast for the Senses
          </h2>

          <p className="text-base sm:text-lg text-[#554336] leading-relaxed">
            Take a visual tour through our signature South Indian presentations, 
            freshly basted roasts, and steaming decoction brews.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#7d644e] bg-[#f2e9db] px-3.5 py-1.5 rounded border border-[#dfd3c0]">
            <Info className="w-3.5 h-3.5 text-[#163824]" />
            <span>Illustrative culinary showcase imagery representing South Indian specialties served at the cafe.</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-[#163824] text-white shadow-sm'
                  : 'bg-[#f0e7d8] text-[#554336] hover:bg-[#e6dbca] hover:text-[#163824]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative h-72 sm:h-80 rounded-xl overflow-hidden border border-[#e2d6c3] shadow-sm bg-[#e8ded0] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                onError={(e) => {
                  const fallbackMap: Record<string, string> = {
                    'g-1': 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80',
                    'g-2': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
                    'g-3': 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80',
                    'g-4': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
                    'g-5': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
                    'g-6': 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1000&q=80',
                  };
                  if (fallbackMap[item.id] && e.currentTarget.src !== fallbackMap[item.id]) {
                    e.currentTarget.src = fallbackMap[item.id];
                  }
                }}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5 text-left text-white">
                <span className="text-[11px] font-medium text-[#ffdca8] uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#ffdca8] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to view full photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#fbf8f3] rounded-2xl overflow-hidden shadow-2xl border border-[#ded3be]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.image}
                alt={activeImage.alt}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-6 text-left bg-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8c6d48] uppercase tracking-wider mb-1">
                <span>{activeImage.category}</span>
                <span aria-hidden="true">·</span>
                <span>The Tirupati Cafe Mohali</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#163824] mb-2">
                {activeImage.title}
              </h3>
              <p className="text-sm text-[#554336] leading-relaxed">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
