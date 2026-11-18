# Implementation Plan & Engineering Roadmap — Aura 11:11 Gifting Studio

> **Document Type:** Engineering Execution & Phased Implementation Roadmap  
> **Target Architecture:** React 18 + Vite + Tailwind CSS + Framer Motion + Supabase + WhatsApp Concierge  
> **Companion Document:** [Archived PRD](PRD-v2.md)

---

## 1. System Architecture & Component Hierarchy

```
                                ┌────────────────────────────────────────────────────────┐
                                │             AURA 11:11 REACT APPLICATION               │
                                │                    (src/App.tsx)                       │
                                └──────────────────────────┬─────────────────────────────┘
                                                           │
                      ┌────────────────────────────────────┴────────────────────────────────────┐
                      ▼                                                                         ▼
        ┌───────────────────────────┐                                             ┌───────────────────────────┐
        │     StorefrontLayout      │                                             │    Private Atelier Admin  │
        │   (Public Customer UI)    │                                             │          (/admin)         │
        └─────────────┬─────────────┘                                             └─────────────┬─────────────┘
                      │                                                                         │
        ┌─────────────┼─────────────┬─────────────┐                               ┌─────────────┼─────────────┐
        ▼             ▼             ▼             ▼                               ▼             ▼             ▼
   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐                     ┌─────────┐   ┌─────────┐   ┌─────────┐
   │ Header  │   │  Cart   │   │Wishlist │   │ Footer  │                     │  240px  │   │ Orders  │   │ Dynamic │
   │ (Float) │   │ Drawer  │   │ Drawer  │   │(Concier)│                     │Sidebar  │   │ & CRM   │   │   CMS   │
   └─────────┘   └─────────┘   └─────────┘   └─────────┘                     └─────────┘   └─────────┘   └─────────┘
                      │
                      ▼
         ┌─────────────────────────┐
         │     Active Route        │
         ├─────────────────────────┤
         │ • / (Home Page)         │
         │ • /shop (Catalog)       │
         │ • /product/:id (PDP)    │
         │ • /custom-gifts (Studio)│
         │ • /about (Story)        │
         │ • /contact (Concierge)  │
         └─────────────────────────┘
```

---

## 2. Phased Implementation Roadmap

### Phase 1: Foundation, Design Tokens & Tooling
- [ ] Initialize clean Vite + React + TypeScript scaffold.
- [ ] Configure Tailwind CSS with luxury tokens (Canvas `#FAF8F5`, Obsidian `#1C1917`, Coral `#FF5A5F`, Amber `#F59E0B`).
- [ ] Install dependencies: `lucide-react`, `framer-motion`, `@tanstack/react-query`, `canvas-confetti`.
- [ ] Setup Vitest test runner and headless Chrome testing scripts.

### Phase 2: Dynamic State & CMS Context Architecture
- [ ] Create `src/data/site-config.ts` defining default navigation, announcement bar, hero copy, catalog items, reviews, and personalization settings.
- [ ] Create `src/context/SiteConfigContext.tsx` providing reactive state with LocalStorage persistence.
- [ ] Implement CRUD operations in context:
  - `updateNavigation(links)`
  - `updateAnnouncement(announcement)`
  - `updateHero(hero)`
  - `updateProduct(id, fields)`, `addProduct(product)`, `deleteProduct(id)`
  - `updateReviews(reviews)`, `addReview(review)`, `deleteReview(id)`
  - `updatePersonalization(config)`
- [ ] Create `CartContext` supporting personalized inscription attachments on cart line items.
- [ ] Create `WishlistContext` supporting slide-over drawer toggle without page redirection.

### Phase 3: Storefront Chrome & Navigation Architecture
- [ ] Create `src/components/ScrollToTop.tsx` to instantly reset window and container scroll on route changes.
- [ ] Build `src/components/Header.tsx`:
  - 72px desktop / 56px mobile locked height.
  - Floating scroll direction detection: translates `-100%` on scroll down, slides to `0` on scroll up.
  - Dynamic links from `SiteConfigContext`.
  - In-place triggers for `WishlistDrawer` and `CartDrawer`.
  - Zero visible Admin links on customer header.
- [ ] Build `src/components/WishlistDrawer.tsx` slide-over Radix Sheet.
- [ ] Build `src/components/CartDrawer.tsx` slide-over Radix Sheet with personalization badge display and WhatsApp order generator.
- [ ] Build `src/components/Footer.tsx` with quiet luxury dark styling, concierge links, and discrete copyright admin trigger.

### Phase 4: Homepage & Product Catalog Construction
- [ ] Build `src/components/HeroSection.tsx`:
  - Crisp, non-slanted, balanced editorial typography.
  - Removed gimmicky floating badges ("signature touch wax sealant" & "artillery engraving Q3 orders").
  - Connected to dynamic CMS hero state.
  - Aligned trust stats (10,000+ Gifts, 4.9★, 24–48h Dispatch).
- [ ] Build `src/components/CategorySection.tsx`:
  - Compact 4-column micro-card grid (`w-14 h-14` image + category name + count).
  - Minimal vertical height impact (< 120px total height).
- [ ] Build `src/components/FeaturedProducts.tsx`:
  - Stable CSS grid without Framer Motion `layout` collisions.
  - Real Unsplash luxury photography.
  - Category pill filter tabs (`All Curations`, `Curated Hampers`, `Custom Frames`, `Heirloom Keepsakes`, `Celebration Sets`).
- [ ] Build `src/components/CustomizationProcess.tsx`:
  - Interactive mini-atelier widget allowing visitors to type their name and preview brass plaque in real time.
  - Clear 3-step explanation.
- [ ] Build `src/components/ReviewsSection.tsx`:
  - Dynamic verified patron reviews from CMS with 5-star ratings, occasion tags, and verified buyer badges.
- [ ] Build `src/components/WhyChooseUs.tsx` & `src/components/InstagramFeed.tsx`.

### Phase 5: PDP & Bespoke Studio with Live Inscription Simulation
- [ ] Build `src/pages/ProductDetail.tsx`:
  - Top scroll reset hook on product change (`[id]`).
  - Interactive **Custom Inscription Studio**:
    - Complimentary laser engraving toggle.
    - Character counter (0/40 chars).
    - Typography switcher (Roman Serif, Artisan Calligraphy, Studio Sans).
    - Plaque finish selector (Brushed Brass, Teakwood, Obsidian Slate).
    - Live metallic plaque rendering simulation directly below product.
    - Pincode courier calculator.
    - Dual CTAs: "Add Personalized to Bag" & "Confirm on WhatsApp".
  - Suggested curations grid with instant top scroll reset.
- [ ] Rebuild `src/pages/CustomGifts.tsx` ("Bespoke Studio"):
  - Step 1: Select gift canvas from 4 authentic pieces.
  - Step 2: Inscribe names & anniversary date.
  - Step 3: Typography & plaque finish selection.
  - Step 4: Real-time visual proof preview & 1-click dispatch to WhatsApp or Bag.

### Phase 6: Admin Atelier & CRM Back-Office Suite (`/admin`)
- [ ] Completely isolate `/admin` outside `StorefrontLayout` in `src/App.tsx`.
- [ ] Build 240px persistent dark rail with navigation:
  - Dashboard
  - Orders Vault
  - Custom Inscriptions & Vector Proofs
  - Customer CRM & Milestone Calendar
  - Dynamic Storefront CMS
  - Catalog & Price Manager
  - Cloud Database & Supabase Settings
- [ ] Build **Dynamic Storefront CMS**:
  - Subtab 1: Navigation Bar & Announcement Banner editor.
  - Subtab 2: Homepage Hero copy, CTAs, trust stats, and Image URL editor.
  - Subtab 3: Customer Reviews CRUD editor.
  - Subtab 4: Personalization Atelier settings editor.
- [ ] Build **Catalog & Price CMS**:
  - Full CRUD for products: add new items, update prices, change titles, edit tags, and toggle sale badges.
- [ ] Build **Orders Management & WhatsApp Concierge**:
  - Kanban & Data Table with status switcher (`Pending WhatsApp` $\rightarrow$ `Dispatched`).
  - Pre-filled WhatsApp customer follow-up trigger.
- [ ] Build **Customer CRM & Milestone Calendar**:
  - VIP tiers, client profiles, and proactive anniversary reminder alerts.
- [ ] Build **Supabase Cloud Sync Engine**:
  - PostgreSQL schema and live `@supabase/supabase-js` sync client.

### Phase 7: Verification, Testing & Quality Gates
- [ ] Unit & integration tests via Vitest:
  - Order status updates & payload generation.
  - CRM milestone distance calculation.
  - SiteConfig CMS persistence.
- [ ] Production build verification:
  - `npm run build` exits 0 with zero warnings.
- [ ] Chrome Headless automated test suite:
  - Verify storefront rendering (0 console errors).
  - Verify admin isolation (0 storefront header/footer elements on `/admin`).
  - Verify scroll float-away transform matrix.
  - Verify Wishlist Drawer sheet open without page reload.

---

## 3. Data Schemas & API Contracts

### 3.1 Site Configuration Schema (`SiteConfig`)
```typescript
interface SiteConfig {
  announcement: {
    enabled: boolean;
    text: string;
    linkText?: string;
    linkUrl?: string;
  };
  navigation: { id: string; name: string; path: string }[];
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    imageUrl: string;
    featuredProductName: string;
    featuredProductPrice: number;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  reviews: {
    id: string;
    author: string;
    location: string;
    rating: number;
    date: string;
    productName: string;
    comment: string;
    verified: boolean;
  }[];
  personalization: {
    characterLimit: number;
    defaultText: string;
    defaultDate: string;
    engravingFee: number;
    availableFonts: { id: string; name: string; fontClass: string }[];
  };
}
```

### 3.2 Order Payload Contract (WhatsApp & Database)
```typescript
interface Order {
  id: string;
  reference: string; // e.g. "AUR-1111-8421"
  customerName: string;
  customerPhone: string;
  deliveryPincode: string;
  packaging: string;
  packagingPrice: number;
  giftNote?: string;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    personalization?: string; // e.g. "Aura & Rhea (Roman Serif on Brushed Brass)"
  }[];
  subtotal: number;
  total: number;
  status: "pending_chat" | "confirmed" | "engraving" | "qa" | "packaging" | "dispatched";
  createdAt: string;
  notes?: string;
}
```
