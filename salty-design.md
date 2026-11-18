# Design System: Salty Accessories (salty.co.in)

> **Source:** [https://salty.co.in/](https://salty.co.in/)  
> **Site Title:** Fashion Accessories and Jewellery for Women & Men – Salty Accessories  
> **Extracted:** November 1, 2026  
> **Design Framework:** Modern Grotesque E-Commerce / Neo-Brutalist Soft Y2K  
> **Brand Personality:** Trendy, youth-centric, expressive, bold, and chic  

---

## 1. Overview & Visual Identity

Salty Accessories pairs warm, retro-inspired tones (warm vanilla canvas and burnt terracotta) with modern grotesque typography and hard-offset pop shadows. The identity avoids clinical minimalism in favor of an inviting, earthy, high-fashion aesthetic tailored for Gen Z and young millennial shoppers.

- **Warm Cream Canvas:** Over 77% of the interface sits on a soothing vanilla background (`#fdf6e8`) instead of sterile white.
- **Signature Terracotta Accent:** Burnt terracotta orange (`#dd592a`, 1163+ uses) commands primary call-to-actions, category focus, and sale badges.
- **Neo-Brutalist Micro-Shadows:** Hard offset tinted shadows (`rgb(184, 69, 31) -5px 5px 0px 0px`) mixed with soft elevations create an expressive, tactile feel.
- **Modernist Grotesque Type:** Dominated by `Nimbus Sans L` with tight uppercase display typography.

---

## 2. Color System

### Primary & Accent Palette

| Role | Hex | RGB | HSL | Dominance / Usage | Description |
|:---|:---|:---|:---|:---|:---|
| **Primary** | `#dd592a` | `rgb(221, 89, 42)` | `hsl(16, 72%, 52%)` | 1,163 instances | Signature terracotta orange for primary CTAs, links, and banners |
| **Secondary** | `#fbe7de` | `rgb(251, 231, 222)` | `hsl(19, 78%, 93%)` | 121 instances | Warm peach-cream surface fill for secondary cards and pills |
| **Accent** | `#f1f2da` | `rgb(241, 242, 218)` | `hsl(62, 48%, 90%)` | Badge accent | Soft sage butter for promo chips and secondary banners |
| **Background** | `#fdf6e8` | `rgb(253, 246, 232)` | `hsl(39, 79%, 95%)` | 77% surface | Main page background (warm vanilla) |
| **Raised Surface** | `#ffffff` | `rgb(255, 255, 255)` | `hsl(0, 0%, 100%)` | 17% surface | High-contrast card containers & modal dialogs |

### Neutral Palette

| Token | Hex | RGB | Purpose |
|:---|:---|:---|:---|
| **Text Primary** | `#2b2b2b` | `rgb(43, 43, 43)` | Main readable copy, product titles, and pricing |
| **Text Secondary** | `#6b6b66` | `rgb(107, 107, 102)` | Muted metadata, SKU counts, and breadcrumbs |
| **Deep Contrast** | `#000000` | `rgb(0, 0, 0)` | High-impact headlines and button borders |
| **Soft Sand Border**| `#e4e3da` | `rgb(228, 227, 218)` | Card borders, table lines, and input outlines |
| **Muted Neutral** | `#a5a5a0` | `rgb(165, 165, 160)` | Placeholder text and inactive states |

### OKLCH Tonal Ramps

| Step | Primary (`#dd592a`) | Secondary (`#fbe7de`) | Accent (`#f1f2da`) | Neutral (`#2b2b2b`) |
|:---|:---|:---|:---|:---|
| **50** | `#ffdec1` | `#fff3ed` | **`#f1f2da`** | `#f5f5f5` |
| **100** | `#ffcfb0` | **`#fbe7de`** | `#ebebdc` | `#eaeaea` |
| **200** | `#ffba98` | `#e4d6cf` | `#dadbc9` | `#d9d9d9` |
| **300** | `#ff9c75` | `#cdbcb5` | `#c1c2ae` | `#c0c0c0` |
| **400** | `#f57449` | `#ad9b93` | `#a1a28c` | `#9f9f9f` |
| **500** | **`#dd592a`** | `#8f7e76` | `#83846e` | `#828282` |
| **600** | `#b83d06` | `#796861` | `#6d6e5a` | `#6c6c6c` |
| **700** | `#992a00` | `#62534d` | `#585846` | `#575757` |
| **800** | `#811d00` | `#50433e` | `#474838` | `#464646` |
| **900** | `#6b1300` | `#413631` | `#393a2c` | `#393939` |
| **950** | `#400400` | `#241d19` | `#1f2016` | **`#2b2b2b`** |

---

## 3. Typography

Salty utilizes a clean, high-density modernist grotesque typeface (`Nimbus Sans L`) paired with `Funnel Display` for expressive hero highlights.

### Font Families
- **Primary Typeface:** `'Nimbus Sans L', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif`
- **Display Accent:** `'Funnel Display', sans-serif`

### Type Scale (1.125 Major Second Modular Scale)

| Level | Size | Weight | Line Height | Usage |
|:---|:---|:---|:---|:---|
| **Display Hero** | `150px` / `141px` | 600 (SemiBold) | `141px` | Editorial brand statements |
| **Title 1 / H1** | `110px` / `88px` | 600 – 700 | `normal` | Banner campaigns & seasonal launches |
| **Title 2 / H2** | `64px` / `44px` | 700 – 800 | `44px` (1.0) | Section headings ("TRENDING JEWELLERY") |
| **Title 3 / H3** | `30px` (1.875rem) | 800 (Extrabold) | `33px` (1.1) | Collection titles & category highlights |
| **Title 4 / H4** | `20px` (1.25rem) | 500 – 600 | `30px` (1.5) | Card group headers, filter titles |
| **Body Large** | `18px` (1.125rem) | 400 – 500 | `25.2px` (1.4) | Product highlights, lead descriptions |
| **Body Base** | `14px` (0.875rem) | 400 (Regular) | `15px` – `20px` | Standard product specs, catalog titles |
| **Caption / Small**| `12px` (0.75rem) | 500 – 600 | `16px` (1.33) | Pricing sub-text, discounts, badges |

---

## 4. Spacing, Elevation & Shapes

### Spacing Scale
- **Base Grid:** `2px` increments
- **Scale Values:** `1px`, `44px`, `50px`, `60px`, `66px`, `90px`, `124px`, `140px`, `196px`, `278px`
- **Gap Ladder:** `4px`, `8px`, `10px`, `12px`, `15px`, `18px`, `20px`, `24px`
- **Max Content Container:** `1280px` full-bleed shell with `24px` gutters (`max-w-[1280px] mx-auto px-6`)
- **Section Vertical Rhythm:** `40px` – `50px` padding

### Corner Radii (Border Radius)
- **Small (`sm`):** `5px` (badge tags, micro pills)
- **Medium (`md`):** `8px` (form inputs, filter cards)
- **Large (`lg`):** `12px` – `16px` (product image containers)
- **Extra Large (`xl`):** `20px` (floating popups, promos)
- **Full Pill (`full`):** `26px` (rounded CTA buttons, filter buttons)

### Elevation & Pop Shadows
- **Neo-Brutalist Pop Shadow:** `rgb(184, 69, 31) -5px 5px 0px 0px` (Signature offset shadow)
- **Card Subtle Shadow:** `rgba(0, 0, 0, 0.08) 0px 4px 6px 0px`
- **Hover Soft Shadow:** `rgba(0, 0, 0, 0.1) 0px 15px 45px 0px`
- **Micro Outline:** `rgba(0, 0, 0, 0.2) 0px 0px 1px 0px`

---

## 5. Component Patterns

### 1. Primary Neo-Brutalist CTA Button
```html
<button class="bg-[#dd592a] hover:bg-[#b83d06] text-white font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-full shadow-[-4px_4px_0px_0px_#000000] active:translate-x-[-2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-2">
  <span>Shop Trending Now</span>
</button>
```

### 2. Jewelry Product Card
```html
<div class="bg-white border border-[#e4e3da] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group">
  <div class="relative aspect-square overflow-hidden bg-[#fdf6e8]">
    <img src="/necklace.jpg" alt="Minimalist Gold Chain" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    <span class="absolute top-3 left-3 bg-[#fbe7de] text-[#dd592a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
      Hot Deal
    </span>
    <button class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-[#2b2b2b] shadow-sm">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
    </button>
  </div>
  <div class="p-4 flex flex-col flex-1 justify-between bg-white">
    <div>
      <h3 class="font-sans font-medium text-[15px] text-[#2b2b2b] truncate">
        Celestial Layered Pendant
      </h3>
      <p class="text-xs text-[#6b6b66] mt-0.5">18K Gold Plated • Waterproof</p>
    </div>
    <div class="mt-3 flex items-center justify-between">
      <div class="flex items-baseline gap-2">
        <span class="text-base font-bold text-[#2b2b2b]">₹899</span>
        <span class="text-xs text-[#a5a5a0] line-through">₹1,499</span>
      </div>
      <span class="text-xs font-semibold text-[#dd592a]">40% OFF</span>
    </div>
  </div>
</div>
```

### 3. Category Filter Pill
```html
<a href="/category" class="inline-flex items-center px-5 py-2.5 rounded-full border border-[#e4e3da] bg-[#fdf6e8] hover:bg-[#fbe7de] hover:border-[#dd592a] text-[#2b2b2b] hover:text-[#dd592a] text-xs font-bold uppercase tracking-wider transition-colors">
  <span>✨ Chunky Hoops</span>
</a>
```

---

## 6. Accessibility & Remediation (WCAG 2.1)

> [!WARNING]
> The source site exhibits 74 WCAG AA contrast failures due to light terracotta text on pale vanilla surfaces, and faint gray placeholders.

### Recommended Accessibility Corrections:
1. **Button Text on Terracotta (`#dd592a`):** Use Pure White (`#ffffff`) with font-weight `600+` to achieve a `4.6:1` contrast ratio (AA Compliant). Avoid using black text on `#dd592a` (`5.54:1 AA`, but lower perceived readability).
2. **Text on Warm Vanilla (`#fdf6e8`):** Always use `#2b2b2b` (19.5:1 AAA) or `#171717`. Never place light secondary peach (`#fbe7de`) text on vanilla backgrounds.
3. **Muted Descriptions:** Darken muted helper copy from `#6b6b66` to `#4b4b47` when font sizes are under `14px`.

---

## 7. Ready-to-Use Tailwind Config (`tailwind.config.js`)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffdec1',
          100: '#ffcfb0',
          200: '#ffba98',
          300: '#ff9c75',
          400: '#f57449',
          500: '#dd592a',
          600: '#b83d06',
          700: '#992a00',
          800: '#811d00',
          900: '#6b1300',
          950: '#400400',
          DEFAULT: '#dd592a',
        },
        secondary: {
          50: '#fff3ed',
          100: '#fbe7de',
          200: '#e4d6cf',
          300: '#cdbcb5',
          400: '#ad9b93',
          500: '#8f7e76',
          600: '#796861',
          700: '#62534d',
          800: '#50433e',
          900: '#413631',
          950: '#241d19',
          DEFAULT: '#fbe7de',
        },
        accent: {
          50: '#f1f2da',
          100: '#ebebdc',
          200: '#dadbc9',
          300: '#c1c2ae',
          400: '#a1a28c',
          500: '#83846e',
          600: '#6d6e5a',
          700: '#585846',
          800: '#474838',
          900: '#393a2c',
          950: '#1f2016',
          DEFAULT: '#f1f2da',
        },
        neutral: {
          50: '#f5f5f5',
          100: '#ffffff',
          200: '#e4e3da',
          300: '#a5a5a0',
          500: '#6b6b66',
          800: '#393939',
          900: '#2b2b2b',
          950: '#000000',
        },
        background: '#fdf6e8',
        foreground: '#2b2b2b',
      },
      fontFamily: {
        sans: ['"Nimbus Sans L"', '-apple-system', 'sans-serif'],
        display: ['"Funnel Display"', 'sans-serif'],
      },
      borderRadius: {
        sm: '5px',
        md: '8px',
        lg: '16px',
        xl: '20px',
        pill: '26px',
      },
      boxShadow: {
        'pop': '-5px 5px 0px 0px #b8451f',
        'pop-black': '-4px 4px 0px 0px #000000',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
};
```

---

## 8. CSS Variables (`variables.css`)

```css
:root {
  --color-primary: #dd592a;
  --color-primary-foreground: #ffffff;
  --color-secondary: #fbe7de;
  --color-secondary-foreground: #dd592a;
  --color-accent: #f1f2da;
  --color-accent-foreground: #2b2b2b;
  --color-background: #fdf6e8;
  --color-foreground: #2b2b2b;
  --color-surface: #ffffff;
  --color-border: #e4e3da;
  --color-muted-text: #6b6b66;

  --font-sans: 'Nimbus Sans L', sans-serif;
  --font-display: 'Funnel Display', sans-serif;

  --radius-sm: 5px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 26px;

  --shadow-pop: -5px 5px 0px 0px #b8451f;
  --shadow-subtle: rgba(0, 0, 0, 0.08) 0px 4px 6px 0px;
}
```

---

## 9. Design Implementation Guidelines

### Do's:
1. **Embrace the Warm Vanilla Background:** Keep `--color-background: #fdf6e8` for main sections, using pure white (`#ffffff`) for elevated cards.
2. **Use Hard-Offset Pop Shadows:** For main promotional banners and standout buttons, add `-4px 4px 0px 0px` shadows to capture the signature Salty brand flair.
3. **Uppercase Micro-Labels:** Category titles and promo chips look best in bold, uppercase tracking (`uppercase tracking-wider text-xs`).
4. **Rounded Pill Buttons:** Favor `rounded-full` (`26px`) for CTA buttons.

### Don'ts:
1. Don't use stark #000000 body text across large paragraphs; use soft charcoal `#2b2b2b`.
2. Don't place low-contrast orange or gray text over the beige background.
3. Don't use cold blue or sterile gray tones; all neutrals should carry a slight warm/sand undertone.
