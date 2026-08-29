export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  isSale?: boolean;
  isNew?: boolean;
  images?: string[];
}

export const categories = [
  { id: "frames", name: "Customized Frames", icon: "🖼️" },
  { id: "hampers", name: "Curated Hampers", icon: "🎁" },
  { id: "mugs", name: "Personalized Mugs", icon: "☕" },
  { id: "gift-sets", name: "Gift Sets", icon: "✨" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Personalized Photo Frame – Golden Glow",
    price: 1299,
    originalPrice: 1599,
    image: "/images/product-1.svg",
    category: "frames",
    description: "A beautifully crafted golden photo frame with personalized engraving. Perfect for preserving your most cherished memories in an elegant display.",
    isSale: true,
    images: ["/images/product-1.svg", "/images/product-2.svg"],
  },
  {
    id: "2",
    name: "Curated Love Hamper",
    price: 2499,
    image: "/images/product-2.svg",
    category: "hampers",
    description: "A luxury hamper filled with handpicked goodies — artisan chocolates, scented candles, and a personalized note card. Wrapped with love.",
    isNew: true,
    images: ["/images/product-2.svg", "/images/product-1.svg"],
  },
  {
    id: "3",
    name: "Custom Name Mug – Aura Edition",
    price: 699,
    originalPrice: 899,
    image: "/images/instagram-1.svg",
    category: "mugs",
    description: "Start every morning with a personalized touch. This ceramic mug features your name or a heartfelt message in our signature Aura font.",
    isSale: true,
    images: ["/images/instagram-1.svg", "/images/instagram-2.svg"],
  },
  {
    id: "4",
    name: "The Celebration Gift Set",
    price: 3499,
    image: "/images/instagram-2.svg",
    category: "gift-sets",
    description: "The ultimate celebration package — a personalized frame, scented candle, curated treats, and a custom greeting card all in one beautiful box.",
    isNew: true,
    images: ["/images/instagram-2.svg", "/images/instagram-3.svg"],
  },
  {
    id: "5",
    name: "Memory Collage Frame",
    price: 1799,
    image: "/images/instagram-3.svg",
    category: "frames",
    description: "Display multiple memories in one stunning collage frame. Holds up to 6 photos with personalized captions underneath each one.",
    images: ["/images/instagram-3.svg", "/images/instagram-4.svg"],
  },
  {
    id: "6",
    name: "Self-Care Hamper – Bliss Box",
    price: 1999,
    originalPrice: 2499,
    image: "/images/instagram-4.svg",
    category: "hampers",
    description: "Treat someone (or yourself!) to a curated box of self-care essentials — bath bombs, face masks, herbal tea, and a cozy journal.",
    isSale: true,
    images: ["/images/instagram-4.svg", "/images/instagram-5.svg"],
  },
  {
    id: "7",
    name: "Couple's Mug Set",
    price: 1199,
    image: "/images/instagram-5.svg",
    category: "mugs",
    description: "A matching set of two mugs with custom names and a connecting heart design. The perfect gift for couples and best friends.",
    images: ["/images/instagram-5.svg", "/images/instagram-6.svg"],
  },
  {
    id: "8",
    name: "Festive Delight Gift Set",
    price: 2999,
    originalPrice: 3599,
    image: "/images/instagram-6.svg",
    category: "gift-sets",
    description: "Celebrate every festival with this festive-themed gift set. Includes dry fruits, sweets, a customized frame, and decorative packaging.",
    isSale: true,
    images: ["/images/instagram-6.svg", "/images/product-1.svg"],
  },
];

export const instagramPosts = [
  "/images/instagram-1.svg",
  "/images/instagram-2.svg",
  "/images/instagram-3.svg",
  "/images/instagram-4.svg",
  "/images/instagram-5.svg",
  "/images/instagram-6.svg",
];
