/**
 * The Tirupati Cafe — Restaurant Website Concept
 * Located in Phase 10, Sector 64, Mohali, Punjab, India
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { OurStory } from './components/OurStory';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DishModal } from './components/DishModal';
import { OwnerGuideModal } from './components/OwnerGuideModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SignatureDish, MenuItem } from './data/restaurantData';

export default function App() {
  const [selectedDish, setSelectedDish] = useState<SignatureDish | MenuItem | null>(null);
  const [showOwnerGuide, setShowOwnerGuide] = useState<boolean>(false);

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf8f3] text-[#2c221c] flex flex-col font-body selection:bg-[#163824] selection:text-[#ffdca8]">
      {/* Navigation */}
      <Navbar onExploreMenu={scrollToMenu} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onExploreMenu={scrollToMenu} />
        <SignatureDishes onSelectDish={(dish) => setSelectedDish(dish)} />
        <MenuSection onSelectMenuItem={(item) => setSelectedDish(item)} />
        <OurStory />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenOwnerGuide={() => setShowOwnerGuide(true)} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton variant="floating" label="WhatsApp" />

      {/* Modals */}
      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />

      {showOwnerGuide && (
        <OwnerGuideModal onClose={() => setShowOwnerGuide(false)} />
      )}
    </div>
  );
}
