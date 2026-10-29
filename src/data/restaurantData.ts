/**
 * The Tirupati Cafe — Restaurant & Menu Data Configuration
 * 
 * NOTICE FOR RESTAURANT OWNER & DEVELOPERS:
 * This file contains all the restaurant information, address, signature dishes,
 * and the digital menu. You can easily add verified prices, update contact details,
 * or add new dishes by editing this single file.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'dosa' | 'idli' | 'vada' | 'uttapam' | 'meals' | 'beverages' | 'snacks';
  description: string;
  isSignature?: boolean;
  isVegetarian: boolean;
  priceNote?: string;
  verifiedPrice?: string; // Empty until verified by restaurant owner
  isPriceVerified: boolean;
  image?: string;
  tags?: string[];
}

export interface SignatureDish {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  priceNote?: string;
  verifiedPrice?: string; // Empty until verified by restaurant owner
  isPriceVerified: boolean;
  publicReviewMention: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Dosas' | 'Idlis & Vadas' | 'Beverages' | 'Accompaniments';
  image: string;
  alt: string;
  caption: string;
}

export const RESTAURANT_INFO = {
  name: 'The Tirupati Cafe',
  tagline: 'Authentic South Indian Flavours, Made to Savour.',
  subtitle: 'Discover crispy dosas, comforting South Indian classics, and freshly brewed filter coffee in Mohali.',
  cuisine: 'South Indian Vegetarian Food',
  address: {
    shop: 'Shop 09',
    landmark: 'Opposite Cricket Stadium',
    phase: 'Phase 10, Sector 64',
    city: 'Mohali',
    state: 'Punjab',
    postalCode: '160062',
    country: 'India',
    fullFormatted: 'Shop 09, opposite Cricket Stadium, Phase 10, Sector 64, Mohali, Punjab 160062, India',
  },
  links: {
    googleMapsSearch: 'https://www.google.com/maps/search/?api=1&query=The+Tirupati+Cafe+Phase+10+Mohali',
    magicPinListing: 'https://magicpin.in/Chandigarh/Sector-64/Restaurant/The-Tirupati-Cafe/store/2165255',
  },
  // Configurable contact details (kept uninvented until confirmed by owner)
  contactConfig: {
    // When owner provides their WhatsApp number, insert it here in international format (e.g. '919876543210')
    whatsAppNumber: '',
    // When owner provides official phone, insert here
    phoneNumber: '',
    phonePlaceholder: 'Official telephone number pending owner confirmation',
    hoursPlaceholder: 'Timings to be confirmed — please verify with cafe in person',
    orderingNotice: 'This website is a culinary showcase and digital menu experience. Online ordering is currently not active.',
    disclaimer: 'This is an independent speculative website redesign concept developed for demonstration and portfolio presentation. It is not the official website of The Tirupati Cafe and has not been approved by the restaurant owner.',
  },
  // Backward compatibility alias
  get contactNotice() {
    return this.contactConfig;
  },
};

// Default fallback text for unverified prices
export const UNVERIFIED_PRICE_LABEL = 'Contact for current prices';

export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: 'ghee-podi-masala-dosa',
    name: 'Ghee Podi Masala Dosa',
    subtitle: 'Crispy Dosa with Spiced Podi & Potato Masala',
    description: 'Thin, golden dosa roasted crisp in pure desi ghee, layered with aromatic spiced lentil podi and stuffed with seasoned potato masala. Served with hot sambar and fresh chutneys.',
    image: '/images/tirupati_hero_dosa.jpg',
    priceNote: 'Dine-in / Takeaway · Contact cafe for current pricing',
    isPriceVerified: false,
    publicReviewMention: true,
  },
  {
    id: 'ghee-plain-dosa',
    name: 'Ghee Plain Dosa',
    subtitle: 'Classic Golden Roast',
    description: 'Light, delightfully crisp crepe made from traditionally fermented rice and urad dal batter, basted generously in aromatic ghee. Accompanied by fresh coconut and tomato chutneys.',
    image: '/images/tirupati_hero_dosa.jpg',
    priceNote: 'Dine-in / Takeaway · Contact cafe for current pricing',
    isPriceVerified: false,
    publicReviewMention: true,
  },
  {
    id: 'garlic-benne-dosa',
    name: 'Garlic Benne Dosa',
    subtitle: 'Butter Dosa with Garlic Chutney Spread',
    description: 'Crisp exterior with a soft, porous interior, smothered in rich white butter (benne) and laced with a zesty garlic chili chutney. A customer favourite from public reviews.',
    image: '/images/dish_benne_dosa.jpg',
    priceNote: 'Dine-in / Takeaway · Contact cafe for current pricing',
    isPriceVerified: false,
    publicReviewMention: true,
  },
  {
    id: 'ghee-podi-idli',
    name: 'Ghee Podi Idli',
    subtitle: 'Pillowy Steamed Rice Cakes with Gunpowder',
    description: 'Steamed, pillowy rice and lentil cakes tossed in fragrant warm ghee and coated in coarse roasted red chili podi (gunpowder) with fresh curry leaves.',
    image: '/images/dish_podi_idli.jpg',
    priceNote: 'Dine-in / Takeaway · Contact cafe for current pricing',
    isPriceVerified: false,
    publicReviewMention: true,
  },
  {
    id: 'filter-coffee',
    name: 'Filter Coffee',
    subtitle: 'Traditional Decoction Brew',
    description: 'Authentic South Indian chicory-blend coffee decoction frothed high with creamy hot milk, served piping hot in a classic brass dabara and tumbler.',
    image: '/images/dish_filter_coffee.jpg',
    priceNote: 'Steaming Hot · Contact cafe for current pricing',
    isPriceVerified: false,
    publicReviewMention: true,
  },
  {
    id: 'dahi-bada',
    name: 'Dahi Bada',
    subtitle: 'Chilled Spiced Yogurt Vada',
    description: 'Golden fried medu vadas steeped in thick, chilled seasoned curd, garnished with roasted cumin powder, red chili dust, and fresh coriander leaves.',
    image: '/images/dish_dahi_vada.jpg',
    priceNote: 'Chilled Delight · Contact cafe for current pricing',
    isPriceVerified: false,
    publicReviewMention: true,
  },
];

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'dosa', label: 'Dosas' },
  { id: 'idli', label: 'Idlis' },
  { id: 'vada', label: 'Vadas' },
  { id: 'uttapam', label: 'Uttapams' },
  { id: 'meals', label: 'South Indian Meals' },
  { id: 'beverages', label: 'Beverages' },
  { id: 'snacks', label: 'Snacks & Accompaniments' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Dosas
  {
    id: 'm-ghee-podi-masala',
    name: 'Ghee Podi Masala Dosa',
    category: 'dosa',
    description: 'Crispy fermented crepe roasted in desi ghee, coated with spicy lentil podi, filled with spiced potato masala.',
    isSignature: true,
    isVegetarian: true,
    isPriceVerified: false,
    image: '/images/tirupati_hero_dosa.jpg',
    tags: ['Signature', 'Spicy', 'Ghee Roast'],
  },
  {
    id: 'm-ghee-plain-dosa',
    name: 'Ghee Plain Dosa',
    category: 'dosa',
    description: 'Simple, delicate, and evenly golden crispy dosa roasted to perfection with aromatic ghee.',
    isSignature: true,
    isVegetarian: true,
    isPriceVerified: false,
    image: '/images/tirupati_hero_dosa.jpg',
    tags: ['Signature', 'Mild'],
  },
  {
    id: 'm-garlic-benne-dosa',
    name: 'Garlic Benne Dosa',
    category: 'dosa',
    description: 'Traditional butter dosa with roasted garlic chutney, golden crispy edge and spongy center.',
    isSignature: true,
    isVegetarian: true,
    isPriceVerified: false,
    image: '/images/dish_benne_dosa.jpg',
    tags: ['Signature', 'Butter', 'Garlic Chutney'],
  },
  {
    id: 'm-masala-dosa',
    name: 'Classic Masala Dosa',
    category: 'dosa',
    description: 'Thin crispy crepe stuffed with comforting onion-potato sabzi seasoned with mustard and curry leaves.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Classic'],
  },
  {
    id: 'm-mysore-masala-dosa',
    name: 'Mysore Masala Dosa',
    category: 'dosa',
    description: 'Dosa lined with fiery red chutney, filled with tempered potato filling, folded crisp.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Spicy'],
  },
  {
    id: 'm-onion-rava-dosa',
    name: 'Onion Rava Dosa',
    category: 'dosa',
    description: 'Lacy semolina batter dosa studded with finely chopped onions, green chilies, and black pepper.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Crispy'],
  },
  {
    id: 'm-paneer-masala-dosa',
    name: 'Paneer Masala Dosa',
    category: 'dosa',
    description: 'Crisp dosa stuffed with soft crumbled paneer sautéed with mild South Indian spices.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Rich'],
  },

  // Idlis
  {
    id: 'm-ghee-podi-idli',
    name: 'Ghee Podi Idli',
    category: 'idli',
    description: 'Pair of warm steamed idlis soaked in melted ghee and coated in spicy roasted gunpowder podi.',
    isSignature: true,
    isVegetarian: true,
    isPriceVerified: false,
    image: '/images/dish_podi_idli.jpg',
    tags: ['Signature', 'Chef Favourite'],
  },
  {
    id: 'm-steamed-idli-pair',
    name: 'Steamed Idli (2 pcs)',
    category: 'idli',
    description: 'Soft, fluffy, naturally fermented steamed rice cakes served with hot drumstick sambar and coconut chutney.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Comfort', 'Healthy'],
  },
  {
    id: 'm-sambar-idli',
    name: 'Sambar Idli (Dipped)',
    category: 'idli',
    description: 'Steamed idlis submerged in a piping hot bowl of aromatic lentil sambar, topped with a dash of ghee.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Hot Sambar'],
  },
  {
    id: 'm-button-idli-podi',
    name: 'Mini Button Idlis with Podi',
    category: 'idli',
    description: 'Bite-sized coin idlis tossed in fragrant gun powder and fresh curry leaf tempering.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Snack'],
  },

  // Vada
  {
    id: 'm-dahi-bada',
    name: 'Dahi Bada (Dahi Vada)',
    category: 'vada',
    description: 'Soft lentil fritters soaked in sweet-and-savory spiced yogurt, finished with roasted cumin and coriander.',
    isSignature: true,
    isVegetarian: true,
    isPriceVerified: false,
    image: '/images/dish_dahi_vada.jpg',
    tags: ['Signature', 'Chilled Delight'],
  },
  {
    id: 'm-medu-vada-pair',
    name: 'Medu Vada (2 pcs)',
    category: 'vada',
    description: 'Crispy on the outside, fluffy inside black gram fritters flavored with whole black peppercorns and ginger.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Crispy'],
  },
  {
    id: 'm-sambar-vada',
    name: 'Sambar Vada (Dipped)',
    category: 'vada',
    description: 'Crispy vadas soaked to soft tenderness in a bowl of hot sambar, served with fresh coconut chutney.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Comfort Food'],
  },

  // Uttapam
  {
    id: 'm-onion-tomato-uttapam',
    name: 'Onion Tomato Uttapam',
    category: 'uttapam',
    description: 'Thick, fluffy South Indian pancake topped with finely chopped onions, ripe tomatoes, and fresh coriander.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Hearty'],
  },
  {
    id: 'm-mix-veg-uttapam',
    name: 'Mixed Vegetable Uttapam',
    category: 'uttapam',
    description: 'Fermented griddle pancake generously topped with carrots, peas, bell peppers, onions, and green chilies.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Loaded'],
  },
  {
    id: 'm-cheese-podi-uttapam',
    name: 'Cheese Podi Uttapam',
    category: 'uttapam',
    description: 'Thick uttapam dusted with spicy gunpowder podi and topped with melting cheese.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Indulgent'],
  },

  // South Indian Meals
  {
    id: 'm-south-indian-thali',
    name: 'Mini South Indian Meal',
    category: 'meals',
    description: 'A comforting plate featuring steaming rice, aromatic sambar, rasam, kootu/poriyal, curd, papad, and pickle.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Complete Meal'],
  },
  {
    id: 'm-curd-rice',
    name: 'Bagala Bath (Curd Rice)',
    category: 'meals',
    description: 'Tempered seasoned yogurt rice with mustard seeds, ginger, curry leaves, and pomegranate arils.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Soothing', 'Traditional'],
  },
  {
    id: 'm-lemon-rice',
    name: 'Chitranna (Lemon Rice)',
    category: 'meals',
    description: 'Fluffy rice infused with fresh lemon juice, turmeric, crunchy roasted peanuts, and tempered spices.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Tangy'],
  },

  // Beverages
  {
    id: 'm-filter-coffee',
    name: 'South Indian Filter Coffee',
    category: 'beverages',
    description: 'Traditional slow-dripped chicory coffee frothily mixed with fresh boiled milk in brass dabara.',
    isSignature: true,
    isVegetarian: true,
    isPriceVerified: false,
    image: '/images/dish_filter_coffee.jpg',
    tags: ['Signature', 'Steaming Hot'],
  },
  {
    id: 'm-masala-chaas',
    name: 'Spiced Buttermilk (Neer Mor)',
    category: 'beverages',
    description: 'Refreshing churned buttermilk infused with crushed ginger, green chili, asafoetida, and curry leaves.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Cooling'],
  },
  {
    id: 'm-badam-milk',
    name: 'Warm Badam Milk',
    category: 'beverages',
    description: 'Rich warm milk flavored with crushed almond paste, cardamom, and saffron strands.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Sweet'],
  },

  // Snacks & Accompaniments
  {
    id: 'm-extra-chutney-sambar',
    name: 'Chutneys & Sambar Platter',
    category: 'snacks',
    description: 'Fresh coconut chutney, zesty tomato-onion chutney, coriander chutney, and drumstick sambar.',
    isVegetarian: true,
    isPriceVerified: false,
    image: '/images/dish_chutneys_sambar.jpg',
    tags: ['Accompaniment'],
  },
  {
    id: 'm-upma',
    name: 'Vegetable Rava Upma',
    category: 'snacks',
    description: 'Roasted semolina cooked with seasoned vegetables, cashews, mustard seeds, and ginger.',
    isVegetarian: true,
    isPriceVerified: false,
    tags: ['Breakfast Classic'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Ghee Podi Masala Dosa',
    category: 'Dosas',
    image: '/images/tirupati_hero_dosa.jpg',
    alt: 'Golden crispy South Indian dosa served on banana leaf with sambar and chutneys',
    caption: 'Crisp golden brown dosa served fresh with traditional drumstick sambar and stone-ground chutneys.',
  },
  {
    id: 'g-2',
    title: 'Ghee Podi Idlis',
    category: 'Idlis & Vadas',
    image: '/images/dish_podi_idli.jpg',
    alt: 'Steamed South Indian idlis tossed in aromatic ghee and red podi powder',
    caption: 'Tender steamed idlis tossed generously in warm desi ghee and fragrant gunpowder podi.',
  },
  {
    id: 'g-3',
    title: 'Garlic Benne Dosa',
    category: 'Dosas',
    image: '/images/dish_benne_dosa.jpg',
    alt: 'Authentic Bangalore style Benne Dosa topped with butter and garlic chutney',
    caption: 'Golden butter dosa with red garlic chutney spread, melting dollop of fresh butter on top.',
  },
  {
    id: 'g-4',
    title: 'Authentic Filter Coffee',
    category: 'Beverages',
    image: '/images/dish_filter_coffee.jpg',
    alt: 'Frothy South Indian filter coffee in traditional brass tumbler and dabara',
    caption: 'Rich decoction poured between brass dabara and tumbler for that signature velvety froth.',
  },
  {
    id: 'g-5',
    title: 'Dahi Bada (Dahi Vada)',
    category: 'Idlis & Vadas',
    image: '/images/dish_dahi_vada.jpg',
    alt: 'Lentil vadas soaked in creamy spiced yogurt with roasted cumin and coriander',
    caption: 'Cooling lentil dumplings soaked in seasoned whisked curd, roasted cumin, and sweet-tangy spices.',
  },
  {
    id: 'g-6',
    title: 'House Chutneys & Sambar',
    category: 'Accompaniments',
    image: '/images/dish_chutneys_sambar.jpg',
    alt: 'Brass bowls of coconut chutney, tomato chutney, green chutney and hot sambar',
    caption: 'Freshly tempered accompaniments featuring coconut, tomato, mint coriander, and slow-simmered sambar.',
  },
];
