# Design System: Oye Happy (oyehappy.com)

> **Source:** [https://www.oyehappy.com/](https://www.oyehappy.com/)  
> **Site Title:** Unique Gifts Online - Buy Customized Gifts Online | Oye Happy  
> **Extracted:** November 1, 2026  
> **Design Framework:** Tailwind CSS / Modern E-Commerce  
> **Brand Personality:** Warm, celebratory, playful, friendly, and emotional  

---

## 1. Overview & Visual Identity

Oye Happy's visual identity revolves around high-vibrancy, cheerful accents paired with clean white surfaces. The design leans into warm coral and amber tones that evoke celebration and gifting, anchored by crisp typography (`Poppins` + `Open Sans`) and rounded card shapes.

- **Primary Canvas:** 97% Clean White (`#ffffff`) background for maximum product focus and readability.
- **Hero / Action Accent:** Coral (`#ff6f61`) drives primary call-to-actions, badges, and focal points.
- **Secondary Cheer:** Amber (`#f59e0b`) highlights special offers, ratings, and category badges.
- **Contrast & Legibility:** 100% WCAG compliance with zero failing color contrast pairs.

---

## 2. Color System

### Primary & Accent Palette

| Role | Hex | RGB | HSL | Dominance / Usage | Description |
|:---|:---|:---|:---|:---|:---|
| **Primary** | `#ff6f61` | `rgb(255, 111, 97)` | `hsl(5, 100%, 69%)` | 221 instances | Brand signature coral for CTAs, banners, and links |
| **Secondary** | `#f59e0b` | `rgb(245, 158, 11)` | `hsl(38, 92%, 50%)` | 72 instances | Warm amber gold for highlights, stars, and badges |
| **Accent** | `#ec5459` | `rgb(236, 84, 89)` | `hsl(358, 80%, 63%)` | 7 instances | Crimson rose accent for discounts & urgent tags |
| **Background** | `#ffffff` | `rgb(255, 255, 255)`| `hsl(0, 0%, 100%)` | 97% surface | Main page background |
| **Surface Muted** | `#fafafa` | `rgb(250, 250, 250)`| `hsl(0, 0%, 98%)` | Card fill | Subtle section dividers & card backgrounds |

### Neutral Palette

| Token | Hex | RGB | Purpose |
|:---|:---|:---|:---|
| **Text Primary** | `#333333` | `rgb(51, 51, 51)` | Primary readable copy, body text, and titles |
| **Text Heading** | `#000000` | `rgb(0, 0, 0)` | High-emphasis bold headings & navigation labels |
| **Text Muted** | `#171717` | `rgb(23, 23, 23)` | Secondary descriptions and product metadata |
| **Border Soft** | `#e6e4eb` | `rgb(230, 228, 235)` | Clean borders for product cards & input containers |
| **Divider Gray**| `#dddddd` | `rgb(221, 221, 221)` | Subtle divider lines |

### OKLCH Tonal Ramps

| Step | Primary (`#ff6f61`) | Secondary (`#f59e0b`) | Accent (`#ec5459`) | Neutral (`#333333`) |
|:---|:---|:---|:---|:---|
| **50** | `#ffdacd` | `#ffebac` | `#ffd8d3` | `#f5f5f5` |
| **100** | `#ffccbe` | `#ffdd98` | `#ffc8c4` | `#eaeaea` |
| **200** | `#ffb6a8` | `#ffcb7b` | `#ffb3af` | `#d9d9d9` |
| **300** | `#ff9788` | **`#f59e0b`** | `#ff9391` | `#c0c0c0` |
| **400** | **`#ff6f61`** | `#dd8b00` | `#fc696b` | `#9f9f9f` |
| **500** | `#d84b41` | `#be6b00` | **`#ec5459`** | `#828282` |
| **600** | `#ba362e` | `#a35600` | `#be2e39` | `#6c6c6c` |
| **700** | `#9b231e` | `#874200` | `#9e1b29` | `#575757` |
| **800** | `#831613` | `#713400` | `#850d1e` | `#464646` |
| **900** | `#6d0c0b` | `#5e2800` | `#6f0315` | **`#333333`** |
| **950** | `#420102` | `#381300` | `#430006` | `#1f1f1f` |

---

## 3. Typography

The typographic system pairs the geometric, rounded humanist sans-serif **Poppins** for brand personality and punchy headlines with **Open Sans** for legibility in dense product details.

### Font Families
- **Display & Headings:** `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Body & Secondary:** `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### Type Scale

| Level | Size | Weight | Line Height | Usage |
|:---|:---|:---|:---|:---|
| **Display** | `80px` (5rem) | 600 (SemiBold) | `99.2px` (1.24) | Hero campaign statements |
| **Title 1 / H1** | `40px` (2.5rem) | 600 – 700 | `48px` (1.2) | Main landing page banner titles |
| **Title 2 / H2** | `35px` / `32px` | 700 (Bold) | `35px` / `32px` | Category titles ("Best Selling Categories") |
| **Title 3 / H3** | `30px` (1.875rem) | 700 (Bold) | `30px` (1.0) | Section dividers & collection titles |
| **Title 4 / H4** | `24px` (1.5rem) | 600 – 700 | `24px` (1.0) | Feature banners, sub-headings |
| **Title 5 / H5** | `20px` (1.25rem) | 500 – 600 | `27.2px` (1.36) | Product card titles, review headers |
| **Body Large** | `18px` (1.125rem) | 500 | `22.5px` (1.25) | Featured value propositions, lead paragraphs |
| **Body Base** | `16px` (1rem) | 400 (Regular) | `24px` / `normal` | Standard body copy, descriptions, input text |
| **Caption / Small** | `14px` (0.875rem) | 400 – 500 | `20px` (1.42) | Price tags, shipping estimates, footnotes |
| **Micro** | `12px` (0.75rem) | 600 (SemiBold) | `16px` (1.33) | Category pill tags, badge text, review counts |

---

## 4. Spacing, Elevation & Shapes

### Spacing Scale
- **Base Grid:** `2px` increments
- **Common Scale:** `2px`, `4px`, `8px`, `10px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `56px`, `64px`, `72px`
- **Section Rhythm:** `72px` vertical padding (`py-18` / `py-20`)
- **Max Content Container:** `1184px` centered (`max-w-[1184px] mx-auto px-4`)

### Corner Radii (Border Radius)
- **Extra Small (`xs`):** `2px` (subtle border accents)
- **Medium (`md`):** `8px` (form inputs, badges)
- **Large (`lg`):** `12px` – `16px` (product cards, modal dialogs)
- **Pill (`full` / `xl`):** `20px` – `24px` (rounded CTA buttons, filter chips)

### Elevation & Shadows
- **Card Shadow:** `rgba(0, 0, 0, 0.08) 0px 4px 12px 0px`
- **Raised / Hover:** `rgba(0, 0, 0, 0.15) 0px 8px 24px 0px`
- **Input Focus Ring:** `0 0 0 2px rgba(255, 111, 97, 0.2)`

---

## 5. Component Patterns

### 1. Primary Action Button
```html
<button class="bg-[#ff6f61] hover:bg-[#d84b41] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 shadow-sm flex items-center justify-center gap-2">
  <span>Send This Gift</span>
</button>
```

### 2. Product Gift Card
```html
<div class="bg-white border border-[#e6e4eb] rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col group">
  <div class="relative aspect-square overflow-hidden bg-[#fafafa]">
    <img src="/product.jpg" alt="Gift item" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    <span class="absolute top-3 left-3 bg-[#f59e0b] text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
      Best Seller
    </span>
  </div>
  <div class="p-4 flex flex-col flex-1 justify-between">
    <div>
      <h3 class="font-poppins font-medium text-[16px] text-[#333333] line-clamp-2">
        Personalized Memories Frame
      </h3>
      <p class="mt-1 text-sm text-[#777777]">Customized with photos</p>
    </div>
    <div class="mt-4 flex items-baseline justify-between">
      <span class="text-lg font-bold text-[#171717]">₹1,290</span>
      <span class="text-xs text-[#ec5459] font-semibold">Ready in 24 hrs</span>
    </div>
  </div>
</div>
```

### 3. Category Chip / Navigation Pill
```html
<a href="/category" class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e6e4eb] bg-white hover:border-[#ff6f61] hover:text-[#ff6f61] text-[#333333] text-sm font-medium transition-colors">
  <span>🎂 Birthday Gifts</span>
</a>
```

---

## 6. Accessibility & Compliance (WCAG 2.1)

- **Overall Accessibility Score:** **100%**
- **Contrast Check Details:**
  - `Surface (#ffffff)` on `Text (#000000)`: **21:1** (AAA Compliant)
  - `Primary (#ff6f61)` on `Black Text (#000000)`: **7.7:1** (AAA Compliant)
  - `Primary (#ff6f61)` on `White Text (#ffffff)`: **3.1:1** (Use bold / large 18px+ text for AAA, or dark coral `#d84b41` for AA normal body text)
  - `Secondary (#f59e0b)` on `Black Text (#000000)`: **9.78:1** (AAA Compliant)
  - `Accent (#ec5459)` on `Black Text (#000000)`: **5.98:1** (AA Compliant)

---

## 7. Ready-to-Use Tailwind Config (`tailwind.config.js`)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffdacd',
          100: '#ffccbe',
          200: '#ffb6a8',
          300: '#ff9788',
          400: '#ff6f61',
          500: '#d84b41',
          600: '#ba362e',
          700: '#9b231e',
          800: '#831613',
          900: '#6d0c0b',
          950: '#420102',
          DEFAULT: '#ff6f61',
        },
        secondary: {
          50: '#ffebac',
          100: '#ffdd98',
          200: '#ffcb7b',
          300: '#f59e0b',
          400: '#dd8b00',
          500: '#be6b00',
          600: '#a35600',
          700: '#874200',
          800: '#713400',
          900: '#5e2800',
          950: '#381300',
          DEFAULT: '#f59e0b',
        },
        accent: {
          50: '#ffd8d3',
          100: '#ffc8c4',
          200: '#ffb3af',
          300: '#ff9391',
          400: '#fc696b',
          500: '#ec5459',
          600: '#be2e39',
          700: '#9e1b29',
          800: '#850d1e',
          900: '#6f0315',
          950: '#430006',
          DEFAULT: '#ec5459',
        },
        neutral: {
          50: '#f5f5f5',
          100: '#ffffff',
          200: '#e6e4eb',
          300: '#dddddd',
          400: '#9f9f9f',
          800: '#333333',
          900: '#171717',
          950: '#000000',
        },
        background: '#ffffff',
        foreground: '#000000',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        xs: '2px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
      maxWidth: {
        container: '1184px',
      },
    },
  },
};
```

---

## 8. CSS Variables (`variables.css`)

```css
:root {
  --color-primary: #ff6f61;
  --color-primary-foreground: #ffffff;
  --color-secondary: #f59e0b;
  --color-secondary-foreground: #000000;
  --color-accent: #ec5459;
  --color-accent-foreground: #ffffff;
  --color-background: #ffffff;
  --color-foreground: #333333;
  --color-muted: #fafafa;
  --color-muted-foreground: #777777;
  --color-border: #e6e4eb;

  --font-primary: 'Poppins', sans-serif;
  --font-body: 'Open Sans', sans-serif;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  --shadow-sm: rgba(0, 0, 0, 0.05) 0px 2px 4px 0px;
  --shadow-md: rgba(0, 0, 0, 0.08) 0px 4px 12px 0px;
  --shadow-lg: rgba(0, 0, 0, 0.12) 0px 8px 24px 0px;
}
```

---

## 9. Design Implementation Guidelines

### Do's:
1. **Highlight Celebratory Verbs:** Use clear action-oriented gift language ("Surprise Now", "Personalize Gift", "Send Today").
2. **Generous White Space:** Maintain high surface lightness (`#ffffff`) and use `72px` vertical padding for clean section breaks.
3. **Pill-shaped CTAs:** Favor `rounded-full` or `rounded-2xl` on interactive triggers to keep the approachable, friendly feel.
4. **Use OKLCH-calculated coral variants** for hover states (`#d84b41`) rather than arbitrary darker shades.

### Don'ts:
1. Don't use harsh square corners (`rounded-none`) on cards or buttons; keep them softly curved (`rounded-xl` / `rounded-full`).
2. Don't crowd product cards; provide at least `16px` (`p-4`) of internal padding.
3. Don't use dark backgrounds for full pages—the brand identity relies on clean white space with vivid accents.
