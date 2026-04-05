# DESIGN.md — Aether Pixel Design System
> Extracted from Stitch project **"Portofolio Radifans"** (ID: `9114704832342844162`)  
> Design system name: **Aether Pixel**  
> Theme: **HD-2D Editorial / Pixel RPG** · Mode: **Dark**

---

## 1. Creative North Star

> **"The Neon Relic"**

This design system is a sophisticated bridge between 16-bit nostalgia and high-end modern engineering.  
We are not merely building a "retro" site; we are creating an **HD-2D Editorial Experience**.  
It treats the browser as a high-fidelity game engine, utilizing intentional asymmetry, layered depth, and "glow-ui" aesthetics to elevate pixel art into a premium professional space.

The system rejects the standard "flat" web grid in favour of a **Tactile Interface** — leaning into the weight of traditional RPG menus: the "clunk" of a selection, the glow of a mana bar, and the depth of a parallaxed world — while maintaining the crisp readability of an editorial portfolio.

---

## 2. Colour Palette

### Brand Accent Tokens

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Primary (Neon Mint) | `--color-primary` | `#4fffb0` | Active states, CTAs, primary nav signals — represents **Action** |
| Secondary (Arcane Purple) | `--color-secondary` | `#bf5af2` | Hover states, tech-stack highlights — represents **Knowledge** |
| Tertiary (Legendary Gold) | `--color-tertiary` | `#ffd700` | Achievements, milestones, level badges — represents **Prestige** |
| Neutral (Deep Void) | `--color-neutral` | `#0d0f1a` | Deepest background reference |

### Full Named Colour System

| Token | Hex | Role |
|-------|-----|------|
| `--background` | `#11131e` | Page background |
| `--surface` | `#11131e` | Base surface |
| `--surface-dim` | `#11131e` | Dimmed surface |
| `--surface-bright` | `#373845` | Bright/highlight areas |
| `--surface-container-lowest` | `#0c0e18` | Deepest void — for terminal inputs, code blocks |
| `--surface-container-low` | `#191b26` | Standard card / section background |
| `--surface-container` | `#1d1f2b` | Standard panel background |
| `--surface-container-high` | `#272935` | Active/hovered panel |
| `--surface-container-highest` | `#323440` | Raised/floating panel |
| `--surface-variant` | `#323440` | Variant surface |
| `--on-background` | `#e1e1f2` | Text on background |
| `--on-surface` | `#e1e1f2` | Text on surface |
| `--on-surface-variant` | `#bacbbe` | Secondary/dimmed text |
| `--outline` | `#859589` | Border (use only as double-pixel border) |
| `--outline-variant` | `#3b4a40` | Ghost border at 15% opacity only |
| `--primary` | `#ffffff` | Foreground primary (white for contrast) |
| `--primary-container` | `#4fffb0` | Neon mint fill |
| `--primary-fixed` | `#4fffb0` | Fixed primary |
| `--primary-fixed-dim` | `#1de296` | Cathode-ray glow shadow colour |
| `--on-primary` | `#003822` | Text on primary |
| `--on-primary-container` | `#007349` | Text on primary container |
| `--on-primary-fixed` | `#002112` | Text on primary fixed |
| `--on-primary-fixed-variant` | `#005233` | Hard shadow colour for buttons |
| `--secondary` | `#e9b3ff` | Secondary text/accent |
| `--secondary-container` | `#7d01b1` | Secondary container fill |
| `--secondary-fixed` | `#f6d9ff` | Fixed secondary |
| `--secondary-fixed-dim` | `#e9b3ff` | Dimmed secondary |
| `--on-secondary` | `#510074` | Text on secondary |
| `--on-secondary-container` | `#e5a9ff` | Text on secondary container |
| `--tertiary` | `#ffffff` | Tertiary text (white) |
| `--tertiary-container` | `#ffe16c` | Gold fill container |
| `--tertiary-fixed` | `#ffe16d` | Fixed gold |
| `--tertiary-fixed-dim` | `#e9c400` | Dimmed gold |
| `--on-tertiary` | `#3a3000` | Text on tertiary |
| `--on-tertiary-container` | `#766300` | Text on tertiary container |
| `--error` | `#ffb4ab` | Error text |
| `--error-container` | `#93000a` | Error background |
| `--on-error` | `#690005` | Text on error |
| `--on-error-container` | `#ffdad6` | Text on error container |
| `--inverse-surface` | `#e1e1f2` | Inverse surface |
| `--inverse-on-surface` | `#2e303c` | Inverse text |
| `--inverse-primary` | `#006c45` | Inverse primary |
| `--surface-tint` | `#1de296` | Surface tint |

### Surface Stacking Hierarchy (The "Slabs")

```
Level 0 — The Void (page base):     #0c0e18  surface-container-lowest
Level 1 — Card / Container:         #191b26  surface-container-low
Level 2 — Standard Panel:           #1d1f2b  surface-container
Level 3 — Active / Hovered Panel:   #272935  surface-container-high
Level 4 — Raised / Floating:        #323440  surface-container-highest
```

---

## 3. Typography

### Font Stack

| Role | Font | Import |
|------|------|--------|
| **Headlines / Display** | `Press Start 2P` | Google Fonts |
| **Title / Body / UI** | `Outfit` | Google Fonts |
| **Metadata / Labels / Tags** | `VT323` | Google Fonts |
| **UI Nav / Buttons** | `Space Grotesk` | Google Fonts (Stitch system font) |
| **Body (alternate)** | `Be Vietnam Pro` | Google Fonts (Stitch body font) |

### Google Fonts import (put in `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Outfit:wght@300;400;500;600;700&family=VT323&family=Space+Grotesk:wght@400;500;600;700&family=Be+Vietnam+Pro:wght@400;500;600&display=swap" rel="stylesheet">
```

### Type Scale & Usage Rules

| Role | Font | Size | Weight | Usage |
|------|------|------|--------|-------|
| Display / Boss Name | Press Start 2P | `clamp(16px, 2.5vw, 28px)` | 400 | Section titles — always UPPERCASE, slight letter-spacing |
| Headline / Card Title | Press Start 2P | `clamp(10px, 1.5vw, 14px)` | 400 | Card headings — sparingly |
| Title / UI Text | Outfit | `1.25rem (20px)` | 600 | Sub-headings, nav items |
| Body | Outfit | `1rem (16px)` | 400 | Paragraphs, descriptions |
| Body SM | Outfit | `0.875rem (14px)` | 400 | Secondary descriptions |
| Metadata / Console | VT323 | `1.125rem (18px)` | 400 | Tags, dates, tech specs — use `on-surface-variant` colour |
| Label / Console SM | VT323 | `1rem (16px)` | 400 | Smaller metadata |

> **Rule**: Never use `Press Start 2P` for body text — it is a display font and unreadable at small sizes.  
> **Rule**: Never use `#000000` black. Always use `--surface-container-lowest` (`#0c0e18`) for the darkest tones.

---

## 4. Spacing & Shape

### Border Radius
**All corners must be `0px`** — no border-radius anywhere. This is mandatory for pixel-perfect integrity.

### Spacing Scale (CSS custom properties)
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
```

---

## 5. Elevation & Depth — The Layering Principle

Hierarchy is achieved through **Tonal Layering** and **Pixel Shadows** — never traditional drop shadows with blur.

### Hard Pixel Shadows (buttons & interactive elements)
```css
/* Primary button shadow */
box-shadow: 4px 4px 0px var(--on-primary-fixed-variant);

/* Hover state — shadow retracts to simulate physical press */
box-shadow: 0px 0px 0px var(--on-primary-fixed-variant);
```

### Cathode-Ray Glow (primary elements)
```css
box-shadow: 0 0 15px var(--primary-fixed-dim); /* #1de296 */
```

### Glass / Floating Overlay
```css
background: rgba(29, 31, 43, 0.8); /* surface-container at 80% */
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```

### Ghost Border (accessibility fallback only)
```css
border: 1px solid rgba(59, 74, 64, 0.15); /* outline-variant at 15% */
```

---

## 6. Component Specifications

### 6.1 Buttons

**Primary Button** (`Press Start 2P` text)
```css
background: var(--primary-container);        /* #4fffb0 */
color: var(--on-primary);                   /* #003822 */
border: none;
border-radius: 0;
padding: 12px 24px;
box-shadow: 4px 4px 0px var(--on-primary-fixed-variant); /* #005233 */
font-family: 'Press Start 2P', monospace;
font-size: 12px;
text-transform: uppercase;
cursor: pointer;
transition: box-shadow 0.1s ease, transform 0.1s ease;
```
Hover:
```css
box-shadow: 0px 0px 0px transparent;
transform: translate(4px, 4px);
```

**Secondary Button**
```css
background: transparent;
border: 4px solid var(--secondary-container); /* #7d01b1 */
color: var(--secondary);                       /* #e9b3ff */
border-radius: 0;
padding: 10px 20px;
```

### 6.2 SNES-Style Dialog Box (Cards)

The signature card style — mimics an SNES dialog box with double-border:
```css
.pixel-card {
  background: var(--surface-container);         /* #1d1f2b */
  border: 4px solid var(--outline);             /* #859589 */
  outline: 2px solid var(--surface-container-highest); /* inset feel */
  border-radius: 0;
  padding: 32px;
}
```

Hover glow variant (inventory/project cards):
```css
.pixel-card:hover {
  border-color: var(--secondary-fixed-dim);     /* #e9b3ff */
  box-shadow: 0 0 12px rgba(191, 90, 242, 0.4);
}
```

### 6.3 Achievement Chips / Tech Tags

```css
.chip {
  font-family: 'VT323', monospace;
  font-size: 18px;
  border-radius: 0;
  padding: 2px 8px;
  background: var(--surface-container-highest);  /* #323440 */
  color: var(--on-surface-variant);              /* #bacbbe */
}

/* Gold rarity accent — 8x8 square prefix */
.chip--achievement::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--tertiary-fixed);             /* #ffe16d */
  margin-right: 6px;
}
```

### 6.4 Input Fields (Save Point form)

```css
.pixel-input {
  background: var(--surface-container-lowest);  /* #0c0e18 */
  border: 2px solid var(--outline);
  border-radius: 0;
  color: var(--on-surface);
  font-family: 'VT323', monospace;
  font-size: 18px;
  padding: 10px 14px;
  width: 100%;
}

.pixel-input:focus {
  outline: none;
  border-color: var(--primary-container);        /* #4fffb0 */
  box-shadow: 0 0 8px rgba(79, 255, 176, 0.4);
}

.pixel-input::placeholder {
  color: var(--on-surface-variant);
  font-family: 'VT323', monospace;
}
```

### 6.5 XP / Progress Bar

```css
.xp-bar-track {
  background: var(--surface-container-lowest);
  border: 2px solid var(--outline);
  height: 16px;
  border-radius: 0;
}

.xp-bar-fill {
  background: var(--primary-container);          /* #4fffb0 */
  height: 100%;
  /* Chunked pixel tick marks via repeating-linear-gradient */
  background-image: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 18px,
    rgba(0, 0, 0, 0.3) 18px,
    rgba(0, 0, 0, 0.3) 20px
  );
  transition: width 1s steps(20, end);
}
```

### 6.6 Navigation Bar

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(29, 31, 43, 0.80);           /* surface-container 80% */
  backdrop-filter: blur(20px);
  border-bottom: 4px solid var(--outline);
  z-index: 1000;
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
}

.nav-link {
  color: var(--on-surface-variant);
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 12px;
  letter-spacing: 0.05em;
}

.nav-link.active::before {
  content: '> ';
  color: var(--primary-container);
}

.nav-link.active {
  color: var(--primary-container);
}
```

---

## 7. The "No-Line" Border Rule

> Traditional 1px grey lines are **forbidden**. They break the "game engine" immersion immediately.

To define section boundaries:
- ✅ **Use background shifts** — e.g. a `surface-container-low` card sitting on a `surface` background.
- ✅ **Use Double-Pixel Border** (4px solid) in the `outline` colour when hard borders are required.
- ✅ **Use Ghost Border** (`outline-variant` at 15% opacity) when absolute containment is needed for accessibility.
- ❌ Never use `border: 1px solid` for layout sectioning.

---

## 8. Signature Animations

### The "Selection" Pulse (active state)
Mimics the selection cursor in classic RPG menus:
```css
@keyframes selection-pulse {
  0%, 100% { box-shadow: 0 0 6px var(--primary-fixed-dim); }
  50%       { box-shadow: 0 0 18px var(--primary-fixed-dim); }
}

.active-element {
  animation: selection-pulse 2s ease-in-out infinite;
}
```

### Blinking Cursor (nav logo, dialog arrows)
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.cursor-blink {
  animation: blink 1s step-end infinite;
}
```

### Section Scanline Sweep (entrance animation)
```css
@keyframes scanline-reveal {
  from { clip-path: inset(0 0 100% 0); }
  to   { clip-path: inset(0 0 0% 0); }
}
.section-reveal {
  animation: scanline-reveal 0.6s ease forwards;
}
```

### Parallax Background Stars / Grid
Apply via CSS or lightweight JS — multiple layers at different scroll speeds:
- Far layer (stars): `transform: translateY(scrollY * 0.1px)`
- Mid layer (grid): `transform: translateY(scrollY * 0.25px)`

---

## 9. Background & Atmosphere

- **Base background**: `#11131e` (--background)
- **Subtle CRT scanline overlay** (always-on, subtle opacity):
```css
.scanline-overlay {
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.05) 2px,
    rgba(0, 0, 0, 0.05) 4px
  );
  pointer-events: none;
  z-index: 9999;
}
```
- **Pixel stars/particles**: Ambient floating dots on the hero section.
- **Parallax layers**: Background parallax on scroll (multi-layer pixel art cityscape or dungeon grid).

---

## 10. Do's & Don'ts

### ✅ Do
- Use **intentional asymmetry** — panels can be slightly offset or have floating pixel elements breaking container edges.
- Use **parallax** on background elements (pixel-art stars or grid lines) to provide the "HD" in HD-2D.
- Use the **primary accent** (`#4fffb0`) for interactable items.
- Use the **secondary accent** (`#bf5af2`) for informational/hover items.
- Use **generous padding** (32px+) inside SNES dialog boxes.

### ❌ Don't
- **Don't** use `border-radius`. All corners must be `0px`.
- **Don't** use standard 1px grey borders for layout.
- **Don't** use `Press Start 2P` for body/paragraph text.
- **Don't** use pure black `#000000`. Always use `#0c0e18` for the deepest tone.
- **Don't** use soft drop shadows (blur > 0). Only hard-offset pixel shadows or glow box-shadows.

---

## 11. CSS Custom Properties Reference (complete)

Paste this into your root CSS file:

```css
:root {
  /* === BRAND ACCENTS === */
  --color-primary: #4fffb0;
  --color-secondary: #bf5af2;
  --color-tertiary: #ffd700;
  --color-neutral: #0d0f1a;

  /* === SURFACES === */
  --background: #11131e;
  --surface: #11131e;
  --surface-dim: #11131e;
  --surface-bright: #373845;
  --surface-container-lowest: #0c0e18;
  --surface-container-low: #191b26;
  --surface-container: #1d1f2b;
  --surface-container-high: #272935;
  --surface-container-highest: #323440;
  --surface-variant: #323440;
  --surface-tint: #1de296;

  /* === ON-SURFACE TEXT === */
  --on-background: #e1e1f2;
  --on-surface: #e1e1f2;
  --on-surface-variant: #bacbbe;

  /* === BORDERS === */
  --outline: #859589;
  --outline-variant: #3b4a40;

  /* === PRIMARY (NEON MINT) === */
  --primary: #ffffff;
  --primary-container: #4fffb0;
  --primary-fixed: #4fffb0;
  --primary-fixed-dim: #1de296;
  --on-primary: #003822;
  --on-primary-container: #007349;
  --on-primary-fixed: #002112;
  --on-primary-fixed-variant: #005233;

  /* === SECONDARY (ARCANE PURPLE) === */
  --secondary: #e9b3ff;
  --secondary-container: #7d01b1;
  --secondary-fixed: #f6d9ff;
  --secondary-fixed-dim: #e9b3ff;
  --on-secondary: #510074;
  --on-secondary-container: #e5a9ff;
  --on-secondary-fixed: #310048;
  --on-secondary-fixed-variant: #7200a3;

  /* === TERTIARY (LEGENDARY GOLD) === */
  --tertiary: #ffffff;
  --tertiary-container: #ffe16c;
  --tertiary-fixed: #ffe16d;
  --tertiary-fixed-dim: #e9c400;
  --on-tertiary: #3a3000;
  --on-tertiary-container: #766300;
  --on-tertiary-fixed: #221b00;
  --on-tertiary-fixed-variant: #544600;

  /* === ERROR === */
  --error: #ffb4ab;
  --error-container: #93000a;
  --on-error: #690005;
  --on-error-container: #ffdad6;

  /* === INVERSE === */
  --inverse-surface: #e1e1f2;
  --inverse-on-surface: #2e303c;
  --inverse-primary: #006c45;

  /* === SPACING === */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* === BORDERS === */
  --border-pixel: 4px solid var(--outline);
  --border-ghost: 1px solid rgba(59, 74, 64, 0.15);
  --border-radius: 0px; /* ALWAYS zero */

  /* === SHADOWS === */
  --shadow-glow-primary: 0 0 15px var(--primary-fixed-dim);
  --shadow-pixel-primary: 4px 4px 0px var(--on-primary-fixed-variant);
  --shadow-pixel-secondary: 4px 4px 0px var(--secondary-container);
}
```

---

## 12. Stitch Screens Reference

| Screen | Title | Size | Screenshot |
|--------|-------|------|------------|
| `f4878fdbabfd46e7b38bf575c7e5ffa8` | Home / Character Profile | 2560×2092 | [View](https://lh3.googleusercontent.com/aida/ADBb0ug-V7AdEyyCSL6QWiWpCHzQeeUwCPEJ4tFEksye-D3MmF9gFMeq5Xprx7YZuTn6RLL8CocosMFVLujaWGOcODuw8ssJWO5auXNCL6T8trCxt5mDnWLlMGeAZCxDiCqQCzKbfS-G47P3fyFQWd7iUlLd_5Cveq1PqwFiB71zsYtffhmOaNvYFlxuwu8n8G-9sTISurwlGkKoKAt3cvmHbF9PQgVjNsLv6xMbitdj3huLmUuRRNsPLfvxvA0) |
| `7434326f83404bc897fd5e2267204fcb` | Skills & Equipment | 2560×2206 | [View](https://lh3.googleusercontent.com/aida/ADBb0ujECki-HKf__KTPNxZO_SO0BGUCTqW6t1XglhHzBCpYPlNQLpTyr1T7xlzR74C4Qrb6wM9XVjRZ3Y5vdlC1H2YXNEjMVvunVbx-FkXVumGLDuo7P4yP0g-ajFntEicDEhjQkCef_DKlRpH0VIYPxbkq56ppLS9QsUgUpjuoQHQbF_dK1LDpqSZLacPeEYXrpv24XvsR5FGYR8r_uqctTswZ56r2TZNDGXS6jB04kIh_FNgteYN7_KnOiQ) |
| `dd5016a810984671b4c5a7586d6c315d` | Quest Log (Experience) | 2560×3460 | [View](https://lh3.googleusercontent.com/aida/ADBb0uiT7RhPDTL4uowLW9ovtZ4XwV0HGDhuf2M1mSZSW4HWm-BX7vosLHA4A_H9dJVYC3ErrCQF-6MH9IkzBOu7S0TdJeENInwvjXcvjoktV71XpDI3vD5_tZbZ2jgMBEPefyxMSPpq-FY11f7r9Ygzzx290pTa8euSPxllTkRLBYlOPYO4BFY_op0EL8UwNKAm6aGs9Vj7ntoa-dHLHxXrd7ttAW1bBMt5IqPPKW7TEnK0c29o-lFcgrw_pA) |
| `1cfb52a0e9d0472cb86a9a33b07a5b03` | Achievements & Save Point | 2560×2622 | [View](https://lh3.googleusercontent.com/aida/ADBb0ujzMBNvOZXUMD9aK76xEfn-p9Ni8h1bvnVDkTwI0JXkx3NLASnFMXpcmhy8_gvDvOiiGGLYXBxq1iGpsOX4W2mTum74S_K9qc8BWdsNeohyFALlohtP0ix38iIxHBpCT7cGVCAQCStLmAoNGV3Q4qNQqZf6PjQOb0wFFPKeOFPo7tNxI6dDHcqs6ljIdJnK-5jxL1zSvHORNqvANZGooMnikdrX7QE7oSvxUT3Hp-EjibSLYNdy2kMZ-w) |
