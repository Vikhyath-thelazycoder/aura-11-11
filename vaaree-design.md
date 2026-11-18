# Design System: Vaaree (vaaree.com)

> **Source:** [https://vaaree.com/](https://vaaree.com/)  
> **Site Title:** Home Decor & Home Essentials Online | Vaaree  
> **Extracted:** November 1, 2026  
> **Design Framework:** Next.js / Curated Home & Living E-Commerce  
> **Brand Personality:** Warm, artisanal, cozy, premium, and thoughtfully curated  

---

## 1. Overview & Visual Identity

Vaaree’s visual aesthetic evokes a contemporary home sanctuary. Rather than sterile cold whites and high-contrast blacks, the design relies on organic, linen-inspired neutral surfaces (`#efeeea` and `#fff1d0`), warm marigold ochre (`#ffc845`), terracotta coral (`#f2694e`), and grounding deep teal (`#0e8389`).

- **Canvas & Warm Linen Surfaces:** 79% clean white (`#ffffff`) paired with 17% soft linen taupe (`#efeeea`) and 5% warm buttercream (`#fff1d0`).
- **Signature Ochre Marigold:** `#ffc845` anchors key conversion touchpoints, category tiles, and delivery badges.
- **Artisanal Contrast:** Deep espresso charcoal (`#403b3b`) replaces harsh pitch-black for softer, premium readability.
- **Accessibility:** 100% WCAG compliant with zero failing color contrast pairs.

---

## 2. Color System

### Primary & Accent Palette

| Role | Hex | RGB | HSL | Dominance / Usage | Description |
|:---|:---|:---|:---|:---|:---|
| **Primary** | `#ffc845` | `rgb(255, 200, 69)` | `hsl(42, 100%, 64%)` | 27 instances | Warm Marigold Ochre for primary buttons, highlights & badges |
| **Secondary** | `#f2694e` | `rgb(242, 105, 78)` | `hsl(10, 86%, 63%)` | 10 instances | Earthy Terracotta Coral for urgent offers, discounts & sale tags |
| **Accent** | `#0e8389` | `rgb(14, 131, 137)` | `hsl(183, 81%, 30%)` | 5 instances | Deep Artisanal Teal for trust marks, material badges & icons |
| **Canvas Main**| `#ffffff` | `rgb(255, 255, 255)` | `hsl(0, 0%, 100%)` | 79% surface | Primary background |
| **Warm Linen** | `#efeeea` | `rgb(239, 238, 234)` | `hsl(48, 14%, 93%)` | 17% surface | Curated collections, bento grids & banner sections |
| **Buttercream**| `#fff1d0` | `rgb(255, 241, 208)` | `hsl(42, 100%, 91%)` | 5% surface | Highlight cards & celebratory banners |

### Neutral Palette

| Token | Hex | RGB | Purpose |
|:---|:---|:---|:---|
| **Text Primary (Espresso)** | `#403b3b` | `rgb(64, 59, 59)` | Main readable copy, item titles, descriptions |
| **Text Heading** | `#000000` | `rgb(0, 0, 0)` | Bold section headings and key banner slogans |
| **Muted Taupe Text** | `#666262` | `rgb(102, 98, 98)` | Secondary specifications, material origins, subtitle copy |
| **Soft Neutral** | `#938e8b` | `rgb(147, 142, 139)` | Inactive filter labels, breadcrumbs, placeholder text |
| **Border Soft** | `#dbd9d2` | `rgb(219, 217, 210)` | Card outline dividers, form input borders |

### OKLCH Tonal Ramps

| Step | Primary (`#ffc845`) | Secondary (`#f2694e`) | Accent (`#0e8389`) | Neutral (`#403b3b`) |
|:---|:---|:---|:---|:---|
| **50** | `#fff1ae` | `#ffdcc8` | `#cbffff` | `#f8f4f4` |
| **100** | `#ffe59a` | `#ffceb8` | `#baf7fa` | `#ede9e9` |
| **200** | **`#ffc845`** | `#ffb9a1` | `#a3e7eb` | `#dcd8d8` |
| **300** | `#e7b952` | `#ff9a81` | `#81d0d5` | `#c4bfbf` |
| **400** | `#c99700` | **`#f2694e`** | `#53b0b6` | `#a49e9e` |
| **500** | `#ac7800` | `#d64f36` | `#2a9298` | `#868080` |
| **600** | `#926200` | `#b93a22` | **`#0e8389`** | `#706b6b` |
| **700** | `#784d00` | `#9a2811` | `#006469` | `#5a5555` |
| **800** | `#643e00` | `#811b06` | `#005257` | `#4a4545` |
| **900** | `#533100` | `#6b1100` | `#004347` | **`#403b3b`** |
| **950** | `#301900` | `#410300` | `#002528` | `#201e1e` |

---

## 3. Typography

Vaaree employs custom-crafted typography with an editorial sensibility:
- **Headings & Primary UI:** `'Vaaree Sans', -apple-system, BlinkMacSystemFont, sans-serif`
- **Modern Humanist:** `'Poppins', sans-serif`
- **Editorial Accent:** `'Vaaree Serif', Georgia, serif`

### Type Scale (1.067 Minor Second Scale)

| Level | Size | Weight | Line Height | Usage |
|:---|:---|:---|:---|:---|
| **Display Hero** | `24px` (1.5rem) | 300 (Light) | `24px` | Elegant editorial banner headlines |
| **Title 1 / H2** | `20px` (1.25rem) | 600 (SemiBold) | `24px` | Section titles ("Curated Home Collections") |
| **Title 2 / H1** | `16px` (1rem) | 400 (Regular) | `24px` | Product category names, hero sub-titles |
| **Body Standard**| `16px` (1rem) | 400 | `24px` | Narrative descriptions, blog excerpts |
| **Body Small** | `14px` (0.875rem) | 600 (SemiBold) | `20px` | Product card titles, prices, button text |
| **Micro / Specs**| `13.6px` / `13.1px` | 500 (Medium) | `16px` | Material specs ("100% Cotton", "Handcrafted") |
| **Caption** | `12px` (0.75rem) | 300 – 400 | `20px` | Reviews, shipping notes, delivery timeline |
| **Tag Micro** | `10px` (0.625rem) | 300 (Light) | `12px` | Micro category pills, breadcrumbs |

---

## 4. Spacing, Elevation & Shapes

### Spacing Scale
- **Base Grid:** `2px` increments
- **Scale Values:** `2px`, `24px`, `28px`, `40px`, `48px`, `56px`, `60px`, `64px`, `120px`
- **Gap Scale:** `2px`, `6px`, `8px`, `10px`, `12px`, `16px`, `18px`, `20px`
- **Content Column:** `1200px` (6-column canonical desktop grid)
- **Section Vertical Rhythm:** `16px` – `28px` between related rows, `48px` – `64px` between distinct collections

### Corner Radii (Border Radius)
- **Small (`sm`):** `4px` (input outlines, category labels)
- **Medium (`md`):** `8px` (product image containers)
- **Large (`lg`):** `12px` (feature bento cards)
- **Extra Large (`xl`):** `20px` – `24px` (drawer sheets, promo modals)
- **Pill (`full`):** `32px` (primary CTA buttons, search bar container)

### Warm Organic Elevation
Vaaree uses warm coffee/sepia-tinted shadows rather than cold neutral grays:
- **Subtle Surface:** `rgba(33, 25, 19, 0.08) 0px 1px 2px 0px` (warm brown ambient shadow)
- **Card Rest:** `color(srgb 0.129 0.098 0.075 / 0.06) 0px 2px 4px 0px`
- **Top Sheet:** `color(srgb 0.129 0.098 0.075 / 0.08) 0px -4px 8px 0px`
- **Floating Dialog / Drawer:** `rgba(0, 0, 0, 0.15) 0px 4px 20px 0px`

---

## 5. Component Patterns

### 1. Primary Marigold CTA Button
```html
<button class="bg-[#ffc845] hover:bg-[#c99700] text-[#000000] font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-sm">
  <span>Add to Cart</span>
</button>
```

### 2. Home Decor Product Card
```html
<div class="bg-white rounded-xl overflow-hidden border border-[#dbd9d2]/60 hover:shadow-md transition-shadow duration-300 flex flex-col group">
  <div class="relative aspect-[4/5] overflow-hidden bg-[#efeeea]">
    <img src="/bedsheet.jpg" alt="Organic Cotton Quilt" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
    <span class="absolute top-2.5 left-2.5 bg-[#fff1d0] text-[#403b3b] text-[11px] font-semibold px-2 py-0.5 rounded-md border border-[#ffc845]/40">
      Handcrafted
    </span>
    <span class="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-sm text-[12px] font-bold text-[#403b3b] px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
      ★ 4.8 <span class="text-[#938e8b] font-normal">(124)</span>
    </span>
  </div>
  <div class="p-3.5 flex flex-col flex-1 justify-between">
    <div>
      <span class="text-[11px] uppercase tracking-wider text-[#938e8b] font-medium">Bed Linen</span>
      <h3 class="font-sans font-medium text-[14px] text-[#403b3b] mt-0.5 line-clamp-1 group-hover:text-[#0e8389] transition-colors">
        Botanical Bloom Organic Quilt
      </h3>
    </div>
    <div class="mt-3 flex items-baseline justify-between">
      <div class="flex items-baseline gap-2">
        <span class="text-[15px] font-bold text-[#000000]">₹2,499</span>
        <span class="text-[12px] text-[#938e8b] line-through">₹3,999</span>
      </div>
      <span class="text-[11px] font-semibold text-[#f2694e]">38% OFF</span>
    </div>
  </div>
</div>
```

### 3. Bento Grid Showcase Tile
```html
<div class="bg-[#efeeea] rounded-2xl p-6 flex flex-col justify-between hover:bg-[#fff1d0] transition-colors duration-300">
  <div>
    <span class="text-xs font-semibold text-[#0e8389] uppercase tracking-widest">New Arrivals</span>
    <h2 class="text-xl font-light text-[#403b3b] mt-2">Artisanal Ceramic Dining Sets</h2>
  </div>
  <a href="/ceramics" class="mt-4 inline-flex items-center text-sm font-semibold text-[#403b3b] hover:text-[#0e8389] gap-1">
    <span>Explore Collection</span> →
  </a>
</div>
```

---

## 6. Accessibility & Compliance (WCAG 2.1)

- **Overall Score:** **100% WCAG Compliance** (0 failing contrast pairs)
- **Contrast Check Details:**
  - `Surface (#ffffff)` on `Espresso Text (#403b3b)`: **11.4:1** (AAA Compliant)
  - `Buttercream (#fff1d0)` on `Black Text (#000000)`: **18.74:1** (AAA Compliant)
  - `Primary Action (#ffc845)` on `Black Text (#000000)`: **13.6:1** (AAA Compliant)
  - `Secondary Action (#f2694e)` on `White Text (#ffffff)`: **3.5:1** (AA Large Text) / Black: **6.91:1** (AA Standard)
  - `Accent Teal (#0e8389)` on `White Text (#ffffff)`: **4.53:1** (AA Compliant)

---

## 7. Ready-to-Use Tailwind Config (`tailwind.config.js`)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1ae',
          100: '#ffe59a',
          200: '#ffc845',
          300: '#e7b952',
          400: '#c99700',
          500: '#ac7800',
          600: '#926200',
          700: '#784d00',
          800: '#643e00',
          900: '#533100',
          950: '#301900',
          DEFAULT: '#ffc845',
        },
        secondary: {
          50: '#ffdcc8',
          100: '#ffceb8',
          200: '#ffb9a1',
          300: '#ff9a81',
          400: '#f2694e',
          500: '#d64f36',
          600: '#b93a22',
          700: '#9a2811',
          800: '#811b06',
          900: '#6b1100',
          950: '#410300',
          DEFAULT: '#f2694e',
        },
        accent: {
          50: '#cbffff',
          100: '#baf7fa',
          200: '#a3e7eb',
          300: '#81d0d5',
          400: '#53b0b6',
          500: '#2a9298',
          600: '#0e8389',
          700: '#006469',
          800: '#005257',
          900: '#004347',
          950: '#002528',
          DEFAULT: '#0e8389',
        },
        neutral: {
          50: '#f8f4f4',
          100: '#ffffff',
          200: '#efeeea',
          300: '#dbd9d2',
          400: '#938e8b',
          600: '#666262',
          800: '#403b3b',
          950: '#000000',
        },
        background: '#ffffff',
        foreground: '#403b3b',
      },
      fontFamily: {
        sans: ['"Vaaree Sans"', '"Poppins"', '-apple-system', 'sans-serif'],
        serif: ['"Vaaree Serif"', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '24px',
        pill: '32px',
      },
      boxShadow: {
        'warm-sm': 'rgba(33, 25, 19, 0.08) 0px 1px 2px 0px',
        'warm-md': 'color(srgb 0.129 0.098 0.075 / 0.06) 0px 2px 4px 0px',
        'warm-lg': 'rgba(0, 0, 0, 0.15) 0px 4px 20px 0px',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
};
```

---

## 8. CSS Variables (`variables.css`)

```css
:root {
  --color-primary: #ffc845;
  --color-primary-foreground: #000000;
  --color-secondary: #f2694e;
  --color-secondary-foreground: #ffffff;
  --color-accent: #0e8389;
  --color-accent-foreground: #ffffff;
  --color-background: #ffffff;
  --color-foreground: #403b3b;
  --color-linen: #efeeea;
  --color-buttercream: #fff1d0;
  --color-border: #dbd9d2;
  --color-muted: #938e8b;

  --font-sans: 'Vaaree Sans', 'Poppins', sans-serif;
  --font-serif: 'Vaaree Serif', Georgia, serif;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 32px;

  --shadow-warm-sm: rgba(33, 25, 19, 0.08) 0px 1px 2px 0px;
  --shadow-warm-md: color(srgb 0.129 0.098 0.075 / 0.06) 0px 2px 4px 0px;
}
```

---

## 9. Design Implementation Guidelines

### Do's:
1. **Use Warm Charcoal (`#403b3b`) for Body Copy:** This maintains high contrast while matching the tactile, artisanal tone of home goods.
2. **Feature Bento Grid Sections:** Group curated collections inside soft linen cards (`#efeeea`).
3. **Black Text on Marigold Buttons:** The contrast ratio is an impressive `13.6:1 AAA`—never use white text over the marigold button.
4. **Subtle Warm Shadows:** Use warm-tinted shadows (`rgba(33, 25, 19, 0.08)`) instead of harsh black or grey drop shadows.

### Don'ts:
1. Don't use saturated neon greens or blues; stick to the curated ocean teal (`#0e8389`) for accent tags.
2. Don't crowd product cards; maintain `aspect-[4/5]` for apparel and soft goods photography.
3. Don't use stark all-black dividers; use the delicate soft border tone `#dbd9d2`.
