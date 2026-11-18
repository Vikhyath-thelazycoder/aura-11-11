# Product Requirements Document (PRD) — Aura 11:11 Gifting Studio

> **Version:** 2.0.0  
> **Status:** Approved / Ready for Build  
> **Brand Identity:** *AURA 11:11 Atelier — "Gifting Elevated to an Art Form"*  
> **Target Experience:** High-end, bespoke luxury gifting maison combining quiet-luxury aesthetics (Vaaree, Salty) with interactive personalization (OyeHappy, IGP, FNP) and back-office artisanal operations.

---

## 1. Executive Summary & Product Vision

### 1.1 Vision Statement
Aura 11:11 is an artisanal gifting studio that transforms traditional e-commerce gifting into an editorial, bespoke atelier experience. Every gift is customized with precision laser inscriptions, noble materials (brushed champagne brass, kiln-dried teakwood, Italian slate, velvet-lined keepsake chests), and hand-tied ribbons.

### 1.2 Core Problem Solved
Traditional gifting websites are cluttered with generic AI templates, confusing customization flows, and disconnected back-office spreadsheets. Aura 11:11 provides:
1. **Anti-AI Slop Aesthetic:** Crisp, editorial typography, natural photography, and zero cluttered or slanted slope text.
2. **Transparent, Visual Customization:** Real-time interactive inscription preview that allows users to see their names and dates typeset on the actual plaque before ordering.
3. **Frictionless WhatsApp-First Commerce:** Direct 1-click order routing to master concierge with formatted order references, personalization payloads, and delivery pincodes.
4. **Unified Artisan Admin & CRM Back Office:** A single dashboard that houses order status pipelines, laser vector proof testing, client CRM profiles, anniversary milestone tracking, and a dynamic CMS to edit navigation, homepage copy/images, product pricing, and reviews.

---

## 2. User Personas & Use Cases

| Persona | Motivation | Key Needs | Pain Points to Avoid |
| :--- | :--- | :--- | :--- |
| **The Thoughtful Partner** *(Anniversaries & Valentine's)* | Wants a deeply romantic, personalized keepsake with couple names and significant coordinates. | Live visual preview of the inscription, guaranteed 24–48h express delivery, luxury gift packaging. | Confusing customization inputs where you can't see how the text will look. |
| **The Corporate Concierge** *(VIP Client & Board Gifts)* | Needs 10–50 high-end branded or personalized executive boxes with wax seals and engraved plaques. | Bulk inquiry workflow, direct WhatsApp concierge, high-resolution proofs before production. | Slow quote response times and generic corporate swag. |
| **The Celebration Giver** *(Birthdays, Weddings, Milestones)* | Looking for a curated, premium hamper that looks expensive and arrives immaculately presented. | Curated confections, scented candles, handwritten card notes, and immediate order status updates. | Hidden fees, cheap sticker printing instead of permanent engraving. |
| **The Atelier Master / Admin** *(Store Owner & Concierge)* | Manages orders, prepares engraving vectors, follows up with clients, and updates store products/prices. | Fast, calm back office with 240px sidebar, order status changer, CRM milestone reminders, and dynamic CMS. | Rigid codebases requiring developer assistance for simple price or copy edits. |

---

## 3. Brand & Design System Foundations

Synthesized from comprehensive audits of **Salty**, **Vaaree**, **OyeHappy**, **IGP**, and **FNP**:

### 3.1 Color Palette
- **Canvas / Alabaster:** `#FAF8F5` / `#F9F8F5` (Warm luxury linen, anti-sterile white)
- **Deep Obsidian / Charcoal:** `#0C0A09` / `#1C1917` (High-contrast typography)
- **Poppy Accents:**
  - **Coral / Crimson Pop:** `#FF5A5F` (Primary action badges and sale pills)
  - **Champagne Amber:** `#F59E0B` / `#C5A880` (Atelier sparks, star ratings, brass plaques)
  - **Terracotta Warmth:** `#DD592A` (Secondary gradients)
- **Status Tones:**
  - **Emerald Green:** `#10B981` / `#25D366` (WhatsApp triggers, 24–48h dispatch pill)

### 3.2 Typography Hierarchy
- **Display & Headings:** `Cormorant Garamond` / `Playfair Display` (Monumental luxury serif)
- **Body & UI Elements:** `Plus Jakarta Sans` / `Inter` (Legible, crisp modern sans)
- **Atelier Metadata & Badges:** `JetBrains Mono` (Uppercase tracking `[0.2em]`, technical precision)

### 3.3 Motion & Interaction Principles
- **Smooth Sticky Header:** Floats away when scrolling down (`y: -100%`); slides in when scrolling up (`y: 0`).
- **Zero Layout Collisions:** No Framer Motion grid animation recalculations that cause cards to overlap on filter changes or scroll.
- **Instant Route Scroll Reset:** Instant reset to `window.scrollTo(0, 0)` on every page transition.

---

## 4. Functional Specifications — Customer Storefront

### 4.1 Header & Navigation
- **Dynamic Announcement Bar:** Toggled and edited via Admin CMS (e.g. *"✦ Complimentary Laser Inscription • Express 24h Dispatch"*).
- **Navigation Links:** Dynamically rendered from `SiteConfigContext` (Curated Hampers, Custom Frames, Heirloom Keepsakes, Bespoke Studio, Our Story, Concierge).
- **In-Place Wishlist Drawer:** Slides open from the right without leaving the page. Displays saved items with "Move to Bag" and "Remove" actions.
- **In-Place Cart Drawer:** Slides open with item quantities, personalized inscription details, complimentary handwritten note card selection, and direct WhatsApp checkout trigger.
- **Admin Isolation:** Public header contains **zero** visible Admin buttons. Admin access is strictly via direct URL `/admin` or discrete footer copyright link.

### 4.2 Homepage Architecture
1. **Monument Hero:**
   - Crisp, non-slanted typography.
   - Dynamic Eyebrow, Title Line 1 & Line 2, and Story Description from CMS.
   - Dual CTAs: "Explore Curations" and "Personalize a Keepsake".
   - Trust metrics: `10,000+ Gifts Crafted`, `4.9 ★ Rating`, `24–48h Dispatch`.
   - High-definition featured product frame (no cluttered floating badges).
2. **Compact Collections Bar:**
   - Space-efficient 4-column micro-card grid (`w-14 h-14` image + category name + curations count).
   - Consumes minimal vertical viewport height.
3. **Featured Products Catalog:**
   - Category filter pills (`All Curations`, `Curated Hampers`, `Custom Frames`, `Heirloom Keepsakes`, `Celebration Sets`).
   - Clean, non-overlapping product cards with rating stars, delivery speed pills, discount badges, and "Personalize" / "WhatsApp" CTAs.
4. **Interactive Inscription Studio:**
   - Interactive live playground where visitors type their name or couple names and immediately see the brass plaque update in real time with Serif, Calligraphy, or Modern Sans typography.
   - 3-step clear explanation: Choose Keepsake $\rightarrow$ Inscribe Words $\rightarrow$ Laser Engraved & Delivered.
5. **Verified Patron Reviews:**
   - 4-column responsive grid displaying verified buyer ratings, dates, product tags, and heartfelt testimonials (fully editable via Admin CMS).
6. **Craftsmanship Pillars ("The Aura Standard"):**
   - 4 dark obsidian cards: Fiber Laser Precision, Hand-Poured Hot Wax Seal, Archival Calligraphy, White-Glove Safe Delivery.
7. **Instagram Unboxing Reel Feed:**
   - Visual grid linking to `@the.aura11.11` showcase.

### 4.3 Product Detail Page (PDP) & Live Inscription Studio
- **Top Scroll Anchor:** Instant scroll to top whenever a product is loaded or a related item is clicked.
- **Media Gallery:** Main image with thumbnail strip.
- **Custom Inscription Studio Card:**
  - Checkbox: "Add Custom Inscription (Complimentary Laser Engraving)".
  - Text Input: Names or personal quote (up to 40 characters with live counter).
  - Typography Style: Roman Serif, Artisan Calligraphy, Studio Sans.
  - Plaque Finish: Brushed Champagne Brass, Solid Teakwood, Matte Obsidian Slate.
  - **Live Plaque Simulation:** Real-time visual rendering of the customer's text in the chosen font and plaque texture right below the product.
  - Handwritten Gift Note Card input.
  - Delivery Pincode calculator with 24–48h courier dispatch verification.
- **Action Triggers:**
  - "Add Personalized to Bag": Preserves product, quantity, inscription text, and font in cart.
  - "Confirm & Order on WhatsApp": Formats reference ID, product details, customized inscription, font style, and pincode into a pre-filled WhatsApp message.

### 4.4 Bespoke Studio (`/custom-gifts`)
- Rebuilt for radical simplicity:
  - **Step 1:** Pick an item (Celestial Hamper, Teakwood Frame, Brass Monogram Plaque, Pine Keepsake Trunk).
  - **Step 2:** Type names and anniversary dates.
  - **Step 3:** Select typography font and plaque finish.
  - **Step 4:** View live laser simulation and dispatch directly to Bag or WhatsApp.

---

## 5. Functional Specifications — Admin & CRM Atelier Portal (`/admin`)

Built to the **Javali 14 & 16 Back-Office Standard**:
- Isolated layout: Zero storefront Header or storefront Instagram Footer.
- **240px Persistent Left Rail:**
  - Dashboard
  - Orders Vault
  - Custom Inscriptions & Vector Proofs
  - Customer CRM & Milestone Calendar
  - Dynamic Storefront CMS (Navigation, Hero, Reviews, Personalization)
  - Catalog & Price Manager
  - Cloud Database & Supabase Settings

### 5.1 Dynamic Storefront CMS
- **Navigation Bar Editor:**
  - View, edit, rename, reorder, or add navbar links.
  - Enable/disable and edit Top Announcement Bar text and links.
- **Homepage Hero CMS:**
  - Edit Eyebrow text, Title Line 1, Title Line 2, and Description story copy.
  - Edit Primary & Secondary CTA button labels and URLs.
  - Edit Featured Image URL (with instant preview).
  - Edit Trust Statistics (Values and Labels).
- **Reviews CMS:**
  - Add, edit, or delete customer reviews (Author, Location, Star Rating, Product Name, Review Text, Verified Buyer Badge).
- **Personalization Settings:**
  - Configure inscription character limits, default preview text, and available fonts.

### 5.2 Product Catalog & Price CMS
- Full CRUD operations:
  - Add new product (Title, Category, Price, Original Price, Tag Badge, Image URL, Description).
  - Edit existing product prices, descriptions, and images.
  - Toggle sale status and archive products.
- Instant synchronization: Edits immediately reflect on `/shop`, `/`, and `/product/:id`.

### 5.3 Order Operations & WhatsApp Concierge
- Real-time orders table with status switcher:
  `Pending WhatsApp` $\rightarrow$ `Confirmed` $\rightarrow$ `Laser Inscription` $\rightarrow$ `QA Inspection` $\rightarrow$ `Wax Packaging` $\rightarrow$ `Dispatched`.
- 1-click customer WhatsApp follow-up with pre-filled reference number and proof status.

### 5.4 Customer CRM & Proactive Milestone Calendar
- VIP Tier badges (`Gold Atelier`, `Silver Patron`, `Platinum Corporate`).
- Lifetime spend tracking and order history.
- Milestone Calendar: Proactive alerts for upcoming customer anniversaries (14 days, 30 days) with 1-click WhatsApp concierge gifting suggestions.

### 5.5 Cloud Database & Supabase Persistence
- Local-first fallback with instant Supabase cloud synchronization for `orders`, `crm_clients`, and `milestones`.

---

## 6. Technical Stack & Architecture

- **Framework:** React 18 + Vite (TypeScript, strict mode)
- **Styling:** Tailwind CSS with design tokens
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **State Management:** React Context (`CartContext`, `WishlistContext`, `SiteConfigContext`) with LocalStorage and Supabase cloud persistence
- **Testing:** Vitest + React Testing Library + Headless Chrome DevTools Protocol verification

---

## 7. Success Criteria & Quality Gates

1. **Zero Console Errors:** 0 unhandled exceptions or syntax errors in Google Chrome.
2. **Deterministic Build:** `npm run build` exits 0 with zero TypeScript or bundle warnings.
3. **Flawless Navigation:** Every product card and suggested item smoothly resets viewport to `y: 0`.
4. **Private Back Office:** `/admin` never renders customer storefront chrome.
5. **Live Synchronization:** Admin CMS edits instantly update storefront components without requiring code changes or rebuilds.
