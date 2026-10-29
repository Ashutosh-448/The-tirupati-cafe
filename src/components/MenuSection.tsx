import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem, UNVERIFIED_PRICE_LABEL } from '../data/restaurantData';
import { Search, X, AlertCircle, Info, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  onSelectMenuItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectMenuItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filtered menu items based on category and live search
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#fbf8f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8c6d48] mb-3">
            <span>Culinary Offerings</span>
            <span aria-hidden="true">·</span>
            <span>Digital Menu Preview</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#163824] tracking-tight mb-4">
            Explore the Menu
          </h2>

          <p className="text-base sm:text-lg text-[#554336] leading-relaxed">
            From golden, crisp ghee dosas to steaming rasam and creamy filter coffee, 
            explore our wide repertoire of traditional South Indian vegetarian delights.
          </p>

          {/* Verification Advisory Banner */}
          <div className="mt-6 p-3.5 bg-[#f5ede0] border border-[#e2d5c1] rounded-lg text-left sm:text-center text-xs text-[#66503f] flex items-start sm:items-center justify-center gap-2.5">
            <Info className="w-4 h-4 text-[#163824] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong>Menu Notice:</strong> Prices are not invented. Daily rates are subject to in-store confirmation at the counter.
            </span>
          </div>
        </div>

        {/* Search & Category Controls Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Search Box */}
          <div className="max-w-md mx-auto relative px-2 sm:px-0">
            <label htmlFor="menu-search" className="sr-only">Search menu dishes</label>
            <div className="relative">
              <Search className="w-4 h-4 text-[#8c6d48] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="menu-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. Dosa, Podi, Coffee, Vada)..."
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#d9ccb6] rounded-lg text-sm text-[#2c221c] placeholder-[#9c8471] focus:outline-none focus:ring-2 focus:ring-[#163824] focus:border-transparent transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8c6d48] hover:text-[#2c221c]"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs (Segmented functional controls) */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2 px-2">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#163824] text-white shadow-sm font-semibold'
                      : 'bg-[#f0e7d8] text-[#554336] hover:bg-[#e6dbca] hover:text-[#163824]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Active Filter status indicator */}
          {(searchQuery || selectedCategory !== 'all') && (
            <div className="flex items-center justify-center gap-3 text-xs text-[#7d644e] pt-1">
              <span>
                Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
                {searchQuery ? ` matching "${searchQuery}"` : ''}
              </span>
              <button
                onClick={handleClearFilters}
                className="underline hover:text-[#163824] font-medium"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectMenuItem(item)}
                className="bg-white rounded-xl p-5 border border-[#e4d9c6] shadow-sm hover:shadow-md hover:border-[#163824]/40 transition-all flex flex-col justify-between cursor-pointer text-left group"
              >
                <div>
                  {/* Top line: Name + Veg icon */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      {/* Vegetarian Icon */}
                      <div className="w-3.5 h-3.5 border border-[#163824] flex items-center justify-center shrink-0" title="100% Pure Vegetarian">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#163824]" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#163824] group-hover:text-[#0e2417] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    {/* Price Status */}
                    <div className="text-right shrink-0">
                      <span className="text-xs text-[#6e5849] font-medium block">
                        {item.isPriceVerified && item.verifiedPrice ? item.verifiedPrice : UNVERIFIED_PRICE_LABEL}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5c4a3e] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Footer of Card: Tags & view prompt */}
                <div className="pt-3 border-t border-[#f2eae0] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {item.isSignature && (
                      <span className="text-[11px] font-semibold text-[#8c6d48] flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#c89b3c]" />
                        Signature
                      </span>
                    )}
                    {item.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[11px] text-[#7d644e]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-[11px] font-medium text-[#163824] group-hover:underline">
                    Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="max-w-md mx-auto text-center py-16 px-4 bg-white rounded-xl border border-[#e4d9c6]">
            <AlertCircle className="w-10 h-10 text-[#8c6d48] mx-auto mb-3 opacity-80" />
            <h3 className="font-serif text-lg font-bold text-[#163824] mb-2">No Dishes Found</h3>
            <p className="text-xs sm:text-sm text-[#66503f] mb-5">
              We couldn't find any items matching "{searchQuery}" in this category. Try adjusting your search query or view all items.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#163824] rounded-md hover:bg-[#102b1c] transition-colors"
            >
              Show All Menu Items
            </button>
          </div>
        )}

        {/* Custom Order / In-Person Note */}
        <div className="mt-12 p-6 bg-[#f4ece0] rounded-xl border border-[#decbb2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-base font-bold text-[#163824] mb-1">
              Have specific dietary preferences or looking for daily specials?
            </h4>
            <p className="text-xs text-[#66503f]">
              Visit The Tirupati Cafe in person opposite Cricket Stadium, Phase 10 Mohali to check today’s fresh batters and hot specials.
            </p>
          </div>
          <a
            href="#location"
            className="px-4 py-2 text-xs font-semibold text-[#163824] bg-white border border-[#d4c6b1] rounded-md hover:bg-[#fcfaf6] transition-colors whitespace-nowrap shrink-0"
          >
            View Cafe Location
          </a>
        </div>

      </div>
    </section>
  );
};
