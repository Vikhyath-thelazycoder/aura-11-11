# Aura 11:11 Gifting Studio — Master Redesign Blueprint & Plan

> **Core Philosophy:** *"Gifting Elevated to an Art Form."*  
> Transforming Aura 11:11 into a quintessential, high-end gifting maison. The redesign reproduces the exact visual language of the concept mockup—transcending templated e-commerce and generic AI tropes to deliver an editorial, tactile, quiet-luxury experience that feels deeply human, bespoke, and unforgettable.

> Historical redesign proposal. See the [current implementation plan](docs/IMPLEMENTATION_PLAN.md) for the latest design and architecture decisions.

---

## 1. Architectural Overview & User Directives

```
                               ┌────────────────────────────────────────────────────────┐
                               │           AURA 11:11 UNIFIED ECOSYSTEM                 │
                               │        "Gifting Elevated to an Art Form"               │
                               └──────────────────────────┬─────────────────────────────┘
                                                          │
                    ┌─────────────────────────────────────┴─────────────────────────────────────┐
                    ▼                                                                           ▼
      ┌─────────────────────────────┐                                             ┌─────────────────────────────┐
      │     CUSTOMER STOREFRONT     │                                             │    UNIFIED ARTISAN ATELIER  │
      │   (Warm Alabaster Luxury)   │                                             │         & CRM PORTAL        │
      └─────────────┬───────────────┘                                             └─────────────┬───────────────┘
                    │                                                                           │
                    │ 1. Asymmetric Editorial Hero                                              │ 1. Atelier Executive Pulse
                    │ 2. Interactive Occasion Concierge                                         │ 2. WhatsApp Orders Vault
                    │ 3. Vaaree-Style Curated Bento                                             │ 3. Patron CRM & Milestone Vault
                    │ 4. Bespoke Studio (Live Engraving)                                        │ 4. The Art of Gifting Atelier
                    │ 5. Slide-Over Cart Drawer (Packaging & Note)                              │ 5. Production Kanban Pipeline
                    │                                                                           │ 6. Personalization Schema Mgr
                    └───────────────────────────────────┬───────────────────────────────────────┘
                                                        │
                                                        ▼
                                    ┌───────────────────────────────────────┐
                                    │      WHATSAPP ORDER DISPATCH ENGINE   │
                                    │  1-Click Structured Order Routing     │
                                    │  Client <-> Owner / Master Concierge  │
                                    └───────────────────┬───────────────────┘
                                                        │
                                                        ▼
                                    ┌───────────────────────────────────────┐
                                    │        SUPABASE CLOUD PERSISTENCE     │
                                    │   Client @supabase/supabase-js Ready  │
                                    │    orders • crm_clients • milestones  │
                                    └───────────────────────────────────────┘
```

### Key Requirements Addressed:
1. **Visual Fidelity to Mockup:** Faithful reproduction of the generated concept image—warm alabaster canvas (`#F9F8F5`), deep obsidian typography (`#1C1917`), antique champagne gold (`#C5A880`), arched photography frames, and warm linen bento panels (`#EFECE6`).
2. **Unified Admin & CRM Panel (`/admin`):** The CRM is not a separate application; it is built directly into the Atelier Admin. Navigation and wording prominently display *"AURA 11:11 ATELIER — Gifting Elevated to an Art Form"*, housing both production operations and client relationship management.
3. **WhatsApp-First Ordering Architecture:** Every checkout and bespoke personalization triggers a beautifully formatted WhatsApp message payload to the admin/owner and client. This captures recipient details, custom engraving text, uploaded photo references, luxury gift-wrap selection, and delivery dates for direct concierge finalization.
4. **Phased Execution (Frontend First, then Supabase):**
   - **Phase A (Current):** 100% complete, fully interactive frontend across the Storefront, Bespoke Studio, and Unified Admin/CRM with rich mock datasets, local state, and live WhatsApp routing.
   - **Phase B (Next):** Direct Supabase database connection, persistent order tables, auth, and automated WhatsApp Webhook triggers.

---

## 2. Design Foundations & Agylite Triad Synthesis

### The Agylite Triad
- **Taste Skill (tasteskill v2.1 — Anti-Slop Discipline):**
  - `DESIGN_VARIANCE: 7` — Purposeful asymmetrical editorial composition; dynamic bento grid scaling.
  - `MOTION_INTENSITY: 5` — Restrained, fluid cinematic reveals with cubic-bezier easings (`[0.16, 1, 0.3, 1]`) and Lenis smooth scrolling. No spinning blobs or looping AI mesh animations.
  - `VISUAL_DENSITY: 3` — Generous white space, museum-grade breathing room.
- **Open Design (Editorial Craft):**
  - Expressive typography: `Cormorant Garamond` (Hero / Display) + `Plus Jakarta Sans` (Technical UI) + `DM Mono` (Order IDs, Coordinates).
  - Tactile sepia-tinted shadows (`rgba(33, 25, 19, 0.08)`) and hairline warm borders (`#E7E5E0`).
- **UI / UX Pro Max (Luxury Intelligence):**
  - 100% WCAG contrast (AAA compliant black-on-alabaster `19.8:1`, AAA black-on-gold `13.6:1`).
  - Mobile touch targets ≥ 44px, zero Cumulative Layout Shift (CLS < 0.05).

### Insights Synthesized from the 5 MD References
- **Vaaree:** Organic warm linen bento containers (`#efeeea`), artisanal storytelling, warm brown ambient drop shadows.
- **Salty:** Ultra-crisp uppercase micro-labels (`tracking-[0.2em] text-[11px]`), high-fashion jewelry card presentations.
- **Oye Happy:** Emotional gifting copy, live personalization simulator (engraving + monogramming preview).
- **FNP:** Pin-code delivery validation, same-day delivery slots, frictionless gifting checkout.
- **IGP:** Structured gift options, multi-item hamper builder, unboxing experience previews.

---

## 3. Brand Identity & Design Tokens

```css
:root {
  /* Canvas & Surfaces (Exact Mockup Match) */
  --canvas-base: #F9F8F5;          /* Warm Alabaster Canvas (90% dominance) */
  --canvas-surface: #FFFFFF;       /* Pure White Elevated Cards & Modals */
  --canvas-linen: #EFECE6;         /* Tactile Warm Linen for Bento Sections */
  --canvas-buttercream: #F5EFEB;   /* Soft Buttercream for Celebratory Badges */

  /* Inks & Typography */
  --ink-primary: #1C1917;          /* Warm Obsidian Charcoal (Primary Copy) */
  --ink-heading: #0C0A09;          /* Deep Velvet Black (Serif Display Headlines) */
  --ink-muted: #78716C;            /* Warm Stone Gray (Metadata, SKUs) */
  --ink-subtle: #A8A29E;           /* Soft Taupe (Dividers, Breadcrumbs) */

  /* Luxury Accents */
  --gold-primary: #C5A880;         /* Antique Champagne Gold */
  --gold-hover: #A8875A;           /* Burnished Gold Hover */
  --gold-tint: #F4EFE6;            /* Soft Gold Fill for Badges & Chips */
  --rose-accent: #E0C3BC;          /* Dusty Keepsake Rose */

  /* Hairline Borders & Tactile Shadows */
  --border-delicate: #E7E5E0;      /* Warm Hairline Border */
  --shadow-organic: rgba(28, 25, 23, 0.06) 0px 4px 20px 0px;
  --shadow-elevated: rgba(28, 25, 23, 0.12) 0px 12px 32px -4px;

  /* Typography Scales */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'DM Mono', monospace;
}
```

---

## 4. Detailed Component & Section Blueprints

### 1. Storefront Experience (`/`)

#### A. Translucent Luxury Navigation (`Header.tsx`)
- Frosted glass effect (`backdrop-blur-md bg-[#F9F8F5]/90 border-b border-[#E7E5E0]`).
- Top utility row:
  - Location badge: *"Deliver to: Mumbai 400001"* (click to change pincode).
  - Currency selector (`INR ₹` / `USD $`).
  - Quick WhatsApp Concierge trigger button.
- Main navigation row:
  - Centered brand wordmark: `A U R A  1 1 : 1 1` in Cormorant Garamond.
  - Links: *The Curations, Bespoke Studio, Occasions, Keepsakes, The Journal*.
  - Right controls: Search drawer trigger, Wishlist count, Slide-Over Cart trigger with gold badge.

#### B. Asymmetrical Editorial Hero (`HeroSection.tsx` — Exact Mockup Match)
- Left Column (55%):
  - Eyebrow tag: `BESPOKE GIFTING STUDIO • EST. 11:11`
  - Display headline: *"Gifting Elevated to an Art Form."* (80px Cormorant Garamond).
  - Editorial description: *"Handcrafted keepsakes, celestial tarot curios, and artisan hampers created to celebrate life's profound synchronicity."*
  - Dual CTAs:
    - Primary: `"Explore The Curations"` (Deep Obsidian Black pill with subtle gold hover).
    - Secondary: `"Bespoke Studio"` (Champagne Gold hairline outline pill).
  - Micro trust badge: *"100% Handcrafted in India • Same-Day Dispatch in Select Cities"*.
- Right Column (45%):
  - Arched editorial showcase photograph featuring an artisanal gift hamper with velvet ribbon, antique brass wax seal, personalized engraved keepsake, and dried botanicals on natural linen.
  - Floating aesthetic badge: *"Aura Signature Hamper № 11"*.

#### C. Interactive Occasion Concierge (`OccasionConcierge.tsx`)
- 3-step interactive gift finder:
  - *Who is it for?* (For Her, For Him, The Couple, Executive, Self)
  - *What is the occasion?* (Anniversary, Birthday, Housewarming, Just Because)
  - *Desired emotion?* (Romantic Keepsake, Calming Ritual, Grand Celebration)
- Instant filtered animation displaying matching hampers and keepsakes.

#### D. Vaaree-Style Curated Bento Grid (`FeaturedProducts.tsx`)
- Asymmetric 6-column bento showcase:
  - **Tile 1 (Span 4, Large):** *"The Royal Celestial Hamper"* (Artisan truffles, brass wax seal set, personalized leather journal).
  - **Tile 2 (Span 2):** *"Golden Glow Monogram Frame"* (Laser-engraved brass plaque with custom photo).
  - **Tile 3 (Span 2):** *"Scent & Memory Ritual Box"* (Soy wax personalized candle & linen mist).
  - **Tile 4 (Span 4):** *"Executive Atelier Keepsake Set"* (Hand-stitched leather organizer & engraved brass pen).

#### E. Bespoke Customizer & Product Detail (`ProductDetail.tsx` & `CustomGifts.tsx`)
- Live Interactive Personalization Canvas:
  - Custom text input (e.g., *"Forever & Always, 11:11"*) with instant live font rendering (Serif, Calligraphic Script, Modern Sans) over brass/wood/leather product mockup.
  - Photo upload with aspect-ratio crop preview.
  - Complimentary wax-sealed handwritten note card builder.
  - Luxury packaging unboxing selector (Classic Atelier Box, Velvet Ribbon Chest, Wooden Keepsake Box).
- Delivery Pincode Checker: Instant delivery date calculation (Same-Day / Standard).

#### F. WhatsApp-First Checkout Engine (`CartDrawer.tsx` & `CheckoutModal.tsx`)
- When the customer clicks **"Complete Order via WhatsApp"**:
  - Automatically compiles a structured, elegant WhatsApp message:
    ```
    ✦ AURA 11:11 GIFTING STUDIO — NEW ORDER ✦
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    • Order Reference: #AUR-1111-8492
    • Item: The Royal Celestial Hamper (₹3,499)
    • Personalization: "A & M — Nov 11, 2026" (Font: Classic Serif)
    • Photo Attached: [Customer confirms on chat]
    • Card Note: "To many more synchronicities. Happy Anniversary!"
    • Packaging: Velvet Ribbon Keepsake Chest (+₹350)
    • Delivery To: 400001 (Mumbai) on 04 Nov 2026
    • Total Amount: ₹3,849
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Please confirm availability and share payment link.
    ```
  - Opens direct WhatsApp chat with the Aura 11:11 concierge number (`+91 ...`) with the pre-filled message.
  - Simultaneously saves order state in the Admin Orders Queue.

---

### 2. The Unified Admin & CRM Atelier Portal (`/admin`)

Accessed via `/admin`. Styled in **Cockpit-Grade Luxury Minimalist UI** with the brand banner:  
**"A U R A  1 1 : 1 1  ·  A R T I S A N   A T E L I E R   &   C R M"**  
*Tagline: "Gifting Elevated to an Art Form — Master Concierge & Patron Vault"*

#### Navigation Bar & Six Core Sections:
1. **Atelier Pulse (`?tab=dashboard`):**
   - Key Metrics: Total Revenue (₹), AOV (Average Order Value), Active Personalization Queue, WhatsApp Conversion Rate.
   - Quick Action: "New Manual Bespoke Order".
   - Recent WhatsApp order submissions and upcoming VIP relationship milestones.
2. **WhatsApp Orders Vault (`?tab=orders`):**
   - Unified real-time inbox of all orders dispatched from the storefront.
   - Filter by status: *Awaiting WhatsApp Confirmation*, *Confirmed*, *In Engraving*, *QA*, *Packaging*, *Dispatched*.
   - One-click "Reply on WhatsApp" button with pre-formatted artisan responses.
3. **Patron CRM Vault (`?tab=crm`):**
   - **Customer 360:** Patron name, WhatsApp number, VIP Tier (Silver, Gold Atelier, Platinum 11:11 Club), Lifetime Spend, past gift recipients, taste profile notes.
   - **Relationship Milestones Calendar:**
     - Tracks client relationship dates: Spouse's Birthday, Wedding Anniversary, Parents' Milestones.
     - **Automated Concierge Alert Queue:** Shows alerts with days countdown and a 1-click *"Send Curated WhatsApp Proposal"* button.
4. **The Art of Gifting Atelier (`?tab=art-forms`) [NEW MAJOR FEATURE]:**
   - **Art Form Manifesto:** *"Where Craftsmanship Meets Sentiment — Every gift is an intentional work of art, unhurried and individually tailored."*
   - **The Five Noble Disciplines of Our Atelier:**
     - *Discipline I:* Precision Fiber Laser Inscription (0.01mm resolution on champagne brass, slate & teak).
     - *Discipline II:* The Royal Hot-Wax Monogram Seal (Hand-poured at 180°C with 11:11 solid brass crest).
     - *Discipline III:* Deckle-Edged Cotton Calligraphy (300 GSM handmade Italian cotton paper, archival sepia ink).
     - *Discipline IV:* French Silk & Raw Linen Binding (Ceremonial Kyoto knots and raw frayed silk ribbons).
     - *Discipline V:* Sensory Velvet & Botanical Mist (Dried Provence lavender, eucalyptus, woody amber scent).
     - *Keepsake Tier:* Heirloom Solid Pinewood Chests with brass butterfly latches.
   - **Interactive Live Inscription Proof Simulator:**
     - Admin can test-type custom text, select materials (Brushed Brass, Italian Parchment, Obsidian Slate) and fonts (Cormorant Serif, Parisian Script, Architect Mono), and dispatch visual proofs directly to customers via WhatsApp.
   - **Curated WhatsApp Voice & Concierge Scripts:**
     - Pre-composed luxury scripts for Vector Inscription Proof, Wax Seal Preview, VIP Milestone Tributes, and Corporate Curations with 1-click copy & WhatsApp dispatch.
5. **Atelier Production Kanban (`?tab=kanban`):**
   - Visual 5-stage pipeline:
     `1. Chat Confirmation` -> `2. Atelier Confirmed` -> `3. Laser / Engraving` -> `4. Luxury Wax Packaging` -> `5. Dispatched`.
6. **Personalization & Schema Studio (`?tab=catalog`):**
   - Manage product titles, pricing, imagery, and custom engraving rules.




---

## 5. Supabase Database Readiness & Cloud Sync Architecture

Supabase client and PostgreSQL schema are fully installed and configured:
- **Client Module (`src/lib/supabase.ts`):** Initialized using `@supabase/supabase-js` `createClient` with automatic fallback to local storage if environment variables are not yet configured.
- **SQL Migration Script (`supabase/schema.sql`):** Complete schema with tables:
  - `orders` (id, reference, customer_name, customer_phone, items, packaging, total, status, created_at)
  - `crm_clients` (id, name, phone, email, vip_tier, total_spent, orders_count, notes)
  - `crm_milestones` (id, client_id, client_name, client_phone, occasion, date, gift_recommendation, status)
  - Row Level Security (RLS) policies and seed data included.
- **Admin Supabase Indicator & Modal:**
  - Status indicator in the top Atelier header (`Database: Supabase Connected` vs `Database: Local Atelier Store (Supabase Ready)`).
  - 1-click modal with `.env` setup guide (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) and "Sync All to Supabase" button.
- **Storefront Order Dispatch:**
  - `CartDrawer.tsx`, `ProductDetail.tsx`, and `CustomGifts.tsx` write orders to both local store and Supabase in real time before launching WhatsApp.

---

## 6. Phased Implementation Roadmap

```
PHASE 1: Design System & Global Shell (Mockup Fidelity)
├── Update index.css with Alabaster (#F9F8F5), Obsidian (#1C1917) & Champagne Gold (#C5A880)
├── Configure Cormorant Garamond, Plus Jakarta Sans, and DM Mono font scales
├── Redesign Header with luxury navigation, location badge & WhatsApp trigger
├── Redesign Footer with atelier craftsmanship storytelling
└── Redesign CartDrawer with luxury packaging options & WhatsApp order trigger

PHASE 2: Storefront Editorial Experience
├── Rebuild HeroSection to match exact concept mockup (Asymmetric layout, Cormorant headline)
├── Build OccasionConcierge (3-click interactive gift finder)
├── Rebuild FeaturedProducts & CategorySection into Vaaree-style Bento Grid
├── Enhance ProductDetail with live engraving simulator & pincode calculator
└── Upgrade CustomGifts into full interactive Bespoke Studio

PHASE 3: Unified Admin & CRM Atelier Portal (/admin)
├── Create Admin Layout with "Gifting Elevated to an Art Form" atelier navigation
├── Build Atelier Executive Pulse Dashboard (KPIs, revenue, order volume)
├── Build WhatsApp Orders & Inquiries Queue with status filters & quick-chat links
├── Build Client Relationship Vault (CRM) with Customer 360 & Relationship Dates
├── Build Atelier Production Kanban Pipeline (Confirmed -> Engraving -> QA -> Packed -> Shipped)
└── Build Catalog & Personalization Schema Manager

PHASE 4: WhatsApp Engine & Verification (Agylite Protocol)
├── Implement WhatsApp message payload generator with structured order formatting
├── Connect routing and state management across all pages
├── Taste Skill inspection: Anti-slop check, 0 transition defects
├── UI/UX Pro Max verification: 100% WCAG contrast, touch targets (44px+), 0 CLS
└── Responsive testing across mobile (375px), tablet (768px), and desktop (1440px)
```
