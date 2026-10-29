import React, { useState } from 'react';
import { X, Terminal, FileText, Image as ImageIcon, DollarSign, Globe, Check } from 'lucide-react';

interface OwnerGuideModalProps {
  onClose: () => void;
}

export const OwnerGuideModal: React.FC<OwnerGuideModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'run' | 'files' | 'photos' | 'prices' | 'hosting'>('run');

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#fbf8f3] rounded-2xl overflow-hidden shadow-2xl border border-[#ded3be] text-left flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-[#163824] text-white flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#ffdca8] mb-1">
              Documentation & Handover Guide
            </div>
            <h3 className="font-serif text-2xl font-bold">
              The Tirupati Cafe — Website Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#e5dcce] bg-[#f2eadc] overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('run')}
            className={`px-4 py-3 flex items-center gap-1.5 whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'run'
                ? 'border-[#163824] text-[#163824] bg-[#fbf8f3] font-bold'
                : 'border-transparent text-[#6e5849] hover:text-[#163824]'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>1. Run Locally</span>
          </button>

          <button
            onClick={() => setActiveTab('files')}
            className={`px-4 py-3 flex items-center gap-1.5 whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'files'
                ? 'border-[#163824] text-[#163824] bg-[#fbf8f3] font-bold'
                : 'border-transparent text-[#6e5849] hover:text-[#163824]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>2. Key Files</span>
          </button>

          <button
            onClick={() => setActiveTab('photos')}
            className={`px-4 py-3 flex items-center gap-1.5 whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'photos'
                ? 'border-[#163824] text-[#163824] bg-[#fbf8f3] font-bold'
                : 'border-transparent text-[#6e5849] hover:text-[#163824]'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>3. Replace Photos</span>
          </button>

          <button
            onClick={() => setActiveTab('prices')}
            className={`px-4 py-3 flex items-center gap-1.5 whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'prices'
                ? 'border-[#163824] text-[#163824] bg-[#fbf8f3] font-bold'
                : 'border-transparent text-[#6e5849] hover:text-[#163824]'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>4. Update Prices</span>
          </button>

          <button
            onClick={() => setActiveTab('hosting')}
            className={`px-4 py-3 flex items-center gap-1.5 whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'hosting'
                ? 'border-[#163824] text-[#163824] bg-[#fbf8f3] font-bold'
                : 'border-transparent text-[#6e5849] hover:text-[#163824]'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>5. Free Hosting</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#4a3b32] leading-relaxed">
          
          {/* TAB 1: RUN LOCALLY */}
          {activeTab === 'run' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#163824]">
                How to Run the Website Locally on Your Computer
              </h4>
              <p>
                This project is built using <strong>React 19, TypeScript, Vite, and Tailwind CSS</strong>. Follow these simple steps:
              </p>
              
              <ol className="list-decimal pl-5 space-y-2">
                <li>Make sure you have Node.js (version 18 or higher) installed on your system.</li>
                <li>Open your terminal and navigate to the project directory:</li>
              </ol>

              <pre className="bg-[#1f2d24] text-[#d4af37] p-3.5 rounded-lg text-xs font-mono overflow-x-auto">
{`# 1. Install all dependencies
npm install

# 2. Start the local Vite development server
npm run dev`}
              </pre>

              <p>
                Open your browser and navigate to <code className="bg-[#f0e7d8] px-2 py-0.5 rounded text-xs font-mono">http://localhost:3000</code> or the port displayed in your terminal.
              </p>

              <div className="p-3 bg-[#f5ede0] rounded-lg border border-[#e2d5c1] text-xs">
                To build an optimized production build, run <code className="font-mono font-bold">npm run build</code>. The output will be placed in the <code className="font-mono">dist/</code> directory.
              </div>
            </div>
          )}

          {/* TAB 2: KEY FILES */}
          {activeTab === 'files' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#163824]">
                Where Menu & Contact Details Are Stored
              </h4>
              <p>
                All restaurant data is centralized into clean, dedicated configuration files for effortless updates:
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-white rounded-lg border border-[#ded3be]">
                  <div className="font-mono font-bold text-xs text-[#163824] mb-1">
                    📁 /src/data/restaurantData.ts
                  </div>
                  <p className="text-xs text-[#6e5849]">
                    <strong>Primary configuration file:</strong> Contains restaurant name, full address, Google Maps & MagicPin links, phone & timing placeholders, 6 signature dishes, and all categorized digital menu items.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-lg border border-[#ded3be]">
                  <div className="font-mono font-bold text-xs text-[#163824] mb-1">
                    📁 /index.html & /metadata.json
                  </div>
                  <p className="text-xs text-[#6e5849]">
                    Contains SEO title tags, meta descriptions, Open Graph social share cards, and Google Fonts loading.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-lg border border-[#ded3be]">
                  <div className="font-mono font-bold text-xs text-[#163824] mb-1">
                    📁 /src/components/
                  </div>
                  <p className="text-xs text-[#6e5849]">
                    Reusable UI components: <code className="font-mono">Navbar.tsx</code>, <code className="font-mono">Hero.tsx</code>, <code className="font-mono">SignatureDishes.tsx</code>, <code className="font-mono">MenuSection.tsx</code>, <code className="font-mono">LocationSection.tsx</code>, and <code className="font-mono">ContactSection.tsx</code>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: REPLACE PHOTOS */}
          {activeTab === 'photos' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#163824]">
                How to Replace Photographs with Real Restaurant Shots
              </h4>
              <p>
                When real restaurant photos are taken at Shop 09 Phase 10:
              </p>

              <ol className="list-decimal pl-5 space-y-2 text-xs">
                <li>
                  Place your high-resolution food and cafe photos in the <code className="font-mono font-bold">/public/images/</code> folder (or upload them to a CDN).
                </li>
                <li>
                  Open <code className="font-mono font-bold">/src/data/restaurantData.ts</code>.
                </li>
                <li>
                  Update the <code className="font-mono">image:</code> attribute for each signature dish or gallery item:
                </li>
              </ol>

              <pre className="bg-[#1f2d24] text-[#d4af37] p-3.5 rounded-lg text-xs font-mono overflow-x-auto">
{`// Example: updating the hero dosa photo in /src/data/restaurantData.ts
export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: 'ghee-podi-masala-dosa',
    name: 'Ghee Podi Masala Dosa',
    image: '/images/my_real_dosa_photo.jpg', // <-- placed in /public/images/
    // ...
  }
];`}
              </pre>

              <p className="text-xs text-[#6e5849]">
                Recommended image resolutions: 16:9 for hero banner (1920x1080), 4:3 for dish cards (1200x900).
              </p>
            </div>
          )}

          {/* TAB 4: UPDATE PRICES */}
          {activeTab === 'prices' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#163824]">
                How to Add Verified Menu Prices
              </h4>
              <p>
                Once the owner provides the official rate card:
              </p>

              <ol className="list-decimal pl-5 space-y-2 text-xs">
                <li>Open <code className="font-mono font-bold">/src/data/restaurantData.ts</code>.</li>
                <li>Locate the item in <code className="font-mono">MENU_ITEMS</code> or <code className="font-mono">SIGNATURE_DISHES</code>.</li>
                <li>Set <code className="font-mono">isPriceVerified: true</code> and provide <code className="font-mono">verifiedPrice: '₹130'</code> with the exact confirmed price:</li>
              </ol>

              <pre className="bg-[#1f2d24] text-[#d4af37] p-3.5 rounded-lg text-xs font-mono overflow-x-auto">
{`{
  id: 'm-ghee-podi-masala',
  name: 'Ghee Podi Masala Dosa',
  category: 'dosa',
  verifiedPrice: '₹130',       // Your confirmed price
  isPriceVerified: true,       // Set to true once verified
  priceNote: 'Current in-store counter price',
  // ...
}`}
              </pre>

              <p className="text-xs text-[#6e5849]">
                Until confirmed, every dish displays <em>"Contact for current prices"</em> to avoid displaying inaccurate figures.
              </p>
            </div>
          )}

          {/* TAB 5: FREE HOSTING */}
          {activeTab === 'hosting' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#163824]">
                How to Publish the Website Using Free Hosting
              </h4>
              <p>
                This static Vite frontend can be deployed completely free on any of these platforms:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-lg border border-[#ded3be]">
                  <strong className="text-[#163824] block mb-1">Option 1: Vercel (Recommended)</strong>
                  <p className="text-[#6e5849] mb-2">1-click deploy with automatic SSL and fast global CDN.</p>
                  <ol className="list-decimal pl-4 space-y-1 text-[#4a3b32]">
                    <li>Push code to GitHub.</li>
                    <li>Import repository on vercel.com.</li>
                    <li>Framework preset: Vite. Build command: <code className="font-mono">npm run build</code>.</li>
                  </ol>
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#ded3be]">
                  <strong className="text-[#163824] block mb-1">Option 2: Netlify</strong>
                  <p className="text-[#6e5849] mb-2">Free tier with generous bandwidth and custom domains.</p>
                  <ol className="list-decimal pl-4 space-y-1 text-[#4a3b32]">
                    <li>Connect GitHub repository on netlify.com.</li>
                    <li>Publish directory: <code className="font-mono">dist</code>.</li>
                    <li>Deploy site!</li>
                  </ol>
                </div>
              </div>

              <div className="p-3 bg-[#f5ede0] rounded-lg border border-[#e2d5c1] text-xs">
                <strong>Custom Domain:</strong> Once deployed, you can connect a custom domain like <code className="font-mono">thetirupaticafe.in</code> by adding a simple CNAME DNS record.
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#f2eadc] border-t border-[#e5dcce] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#163824] hover:bg-[#102b1c] rounded-md transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
