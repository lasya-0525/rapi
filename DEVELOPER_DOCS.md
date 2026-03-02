# RapinnoTech Website — Developer Documentation

> **Stack:** Next.js 15 (App Router) · React 19 · TypeScript · TailwindCSS v4 · Framer Motion
> **Repo:** [github.com/lasya-0525/rapi](https://github.com/lasya-0525/rapi)

---

## Table of Contents

1. [Quick Start](#1-quick-start)
2. [Project Structure](#2-project-structure)
3. [Pages & Routes](#3-pages--routes)
4. [Components Reference](#4-components-reference)
5. [SEO Architecture](#5-seo-architecture)
6. [SEO File Reference — Per Page](#6-seo-file-reference--per-page)
7. [Structured Data (JSON-LD)](#7-structured-data-json-ld)
8. [Sitemap & Robots](#8-sitemap--robots)
9. [Adding a New Page (with SEO)](#9-adding-a-new-page-with-seo)
10. [Styling & Design System](#10-styling--design-system)
11. [Images & Media](#11-images--media)
12. [Configuration Files](#12-configuration-files)
13. [Deployment Checklist](#13-deployment-checklist)

---

## 1. Quick Start

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 18.x |
| npm | ≥ 9.x (or bun) |
| Git | any |

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/lasya-0525/rapi.git
cd rapi

# 2. Install dependencies
npm install
# or with bun:
bun install

# 3. Start development server (Turbopack enabled)
npm run dev
```

The app will be available at **http://localhost:3000**

### Other Commands

```bash
# Production build
npm run build

# Start production server (after build)
npm start

# Lint the codebase
npm run lint
```

> [!NOTE]
> The dev server uses **Turbopack** (`next dev --turbopack`) for faster HMR. The build command uses the standard Webpack pipeline.

---

## 2. Project Structure

```
orchids-monopo-website-clone-main/
├── public/
│   ├── images/
│   │   ├── Naresh.png          # Co-Founder photo (used in /about)
│   │   └── Pavan.png           # CEO photo (used in /about)
│   └── og-image.png            # ⚠️ MISSING — add a 1200×630px image here
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout — global SEO, JSON-LD, aurora bg
│   │   ├── page.tsx            # Homepage (client component)
│   │   ├── metadata.ts         # Homepage SEO metadata
│   │   ├── globals.css         # Global styles + design tokens
│   │   ├── sitemap.ts          # Auto-generates /sitemap.xml
│   │   ├── robots.ts           # Auto-generates /robots.txt
│   │   │
│   │   ├── about/
│   │   │   ├── page.tsx        # About page (client)
│   │   │   ├── layout.tsx      # Server layout — exports metadata
│   │   │   └── metadata.ts     # About SEO metadata
│   │   │
│   │   ├── services/
│   │   │   ├── page.tsx        # Services page (client)
│   │   │   ├── layout.tsx      # Server layout — exports metadata
│   │   │   └── metadata.ts     # Services SEO metadata
│   │   │
│   │   ├── solutions/
│   │   │   ├── page.tsx        # Solutions page (client)
│   │   │   ├── layout.tsx      # Server layout — exports metadata
│   │   │   └── metadata.ts     # Solutions SEO metadata
│   │   │
│   │   ├── career/
│   │   │   ├── page.tsx        # Careers page (client)
│   │   │   ├── layout.tsx      # Server layout — exports metadata
│   │   │   └── metadata.ts     # Careers SEO metadata
│   │   │
│   │   ├── contact/
│   │   │   ├── page.tsx        # Contact page (client)
│   │   │   ├── layout.tsx      # Server layout — exports metadata
│   │   │   └── metadata.ts     # Contact SEO metadata
│   │   │
│   │   └── resources/
│   │       ├── page.tsx        # Blog listing page (client)
│   │       ├── layout.tsx      # Server layout — exports metadata
│   │       ├── metadata.ts     # Resources SEO metadata
│   │       ├── blog-data.ts    # Blog post data source
│   │       └── [slug]/
│   │           └── page.tsx    # Individual blog post page
│   │
│   ├── components/
│   │   ├── sections/           # Page-level section components
│   │   │   ├── header.tsx      # Global navigation (desktop + mobile drawer)
│   │   │   ├── footer.tsx      # Global footer
│   │   │   ├── hero.tsx        # Homepage hero
│   │   │   ├── works.tsx       # Portfolio/works section
│   │   │   ├── partners.tsx    # Partner logos section
│   │   │   ├── manifesto.tsx   # Brand manifesto section
│   │   │   ├── strengths.tsx   # Horizontal scroll strengths
│   │   │   ├── saigon-souls.tsx# Team culture section
│   │   │   ├── testimonials.tsx# Client testimonials
│   │   │   ├── team.tsx        # Team grid section
│   │   │   ├── loader.tsx      # Initial page loader animation
│   │   │   └── bouncy-cards-features.tsx # Services card grid
│   │   │
│   │   └── ui/                 # Reusable UI primitives (shadcn/radix based)
│   │       ├── aurora-background.tsx  # Full-page aurora animation
│   │       ├── cursor.tsx             # Custom cursor
│   │       ├── cookie-banner.tsx      # GDPR cookie notice
│   │       └── ... (50+ Radix UI components)
│   │
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utilities (cn, etc.)
│
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript config
├── postcss.config.mjs          # PostCSS / Tailwind config
└── package.json                # Dependencies & scripts
```

---

## 3. Pages & Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Homepage with Hero, Works, Partners, Manifesto, Strengths, Testimonials |
| `/about` | `app/about/page.tsx` | Company overview, leadership (Pavan & Naresh), global offices |
| `/services` | `app/services/page.tsx` | Full services list with bouncy card grid |
| `/solutions` | `app/solutions/page.tsx` | Parallax scroll solution suites |
| `/resources` | `app/resources/page.tsx` | Blog listing with category filter sidebar |
| `/resources/[slug]` | `app/resources/[slug]/page.tsx` | Individual blog article |
| `/career` | `app/career/page.tsx` | Careers, culture, benefits, hiring process, application form |
| `/contact` | `app/contact/page.tsx` | Contact form + global office details |

> [!NOTE]
> All `page.tsx` files use `"use client"` because they use Framer Motion and interactive state. Metadata is exported from a co-located **`layout.tsx`** (server component) in each route folder — this is required by Next.js App Router.

---

## 4. Components Reference

### Section Components

#### `header.tsx`
- **Desktop:** Horizontal nav with hover-triggered mega-menus for **Services** and **Solutions**
- **Mobile:** Animated hamburger → slide-in drawer from right side with accordion sub-menus
- **State:** `mobileOpen` (boolean), `mobileExpanded` ('services' | 'solutions' | null), `hoveredMenu`

#### `hero.tsx`
- Full-screen hero with animated text and CTA
- Integrates lens/artwork interaction

#### `strengths.tsx`
- Horizontal scroll section driven by `window.scroll` listener
- Uses `scrollRef` to map vertical scroll to horizontal translation

#### `bouncy-cards-features.tsx`
- Grid of springy animated cards, one per service category
- Used exclusively on the `/services` page

#### `aurora-background.tsx`
- Fixed full-page aurora animation rendered behind all content
- Injected in root `layout.tsx` — do not add to individual pages

#### `team.tsx`
- 3-column grid of team members
- Grayscale images that colour on hover

### UI Components
All UI primitives live in `src/components/ui/` and are based on **shadcn/ui** + **Radix UI**. They are pre-configured with the project's dark theme tokens.

---

## 5. SEO Architecture

### Why two files per route? (`metadata.ts` + `layout.tsx`)

Next.js App Router **only reads `metadata` exports from Server Components**. Since all `page.tsx` files are `"use client"` components (needed for Framer Motion animations), they cannot directly export `metadata`.

The solution is a **thin server-component `layout.tsx`** in each route folder that re-exports metadata:

```
/about/
  ├── page.tsx      ← "use client" — renders the UI
  ├── layout.tsx    ← Server component — exports metadata to Next.js
  └── metadata.ts   ← Pure metadata object (imported by layout.tsx)
```

```tsx
// about/layout.tsx
import React from "react";
export { metadata } from "./metadata";  // ← Next.js reads this

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;               // ← transparent pass-through
}
```

### Global Metadata (root `layout.tsx`)

The root layout sets defaults that all pages inherit via the **title template**:

```tsx
title: {
  default: "RapinnoTech | Rapid Technology Innovations",
  template: "%s | RapinnoTech",   // e.g. About page → "About Us | RapinnoTech"
}
```

### Metadata Precedence

```
Root layout.tsx (defaults)
  └── Route layout.tsx (overrides for that page)
       └── page.tsx (cannot export metadata — must be in layout)
```

---

## 6. SEO File Reference — Per Page

### Root (`src/app/layout.tsx`)

| Field | Value |
|-------|-------|
| `metadataBase` | `https://rapinnotech.com` |
| `title.default` | RapinnoTech \| Rapid Technology Innovations |
| `title.template` | `%s \| RapinnoTech` |
| `description` | 160-char brand description |
| `keywords` | 23 keywords covering all services + locations |
| `robots` | `index: true, follow: true` + Googlebot config |
| `openGraph.type` | `website` |
| `openGraph.image` | `/og-image.png` (1200×630) |
| `twitter.card` | `summary_large_image` |
| `twitter.creator` | `@rapinnotech` |

**Update keywords here** when you add new services or products.

---

### Homepage (`src/app/metadata.ts`)

```ts
title: "Home"           // renders as "Home | RapinnoTech"
canonical: "https://rapinnotech.com"
```
Keywords: brand name, services overview, Hyderabad/USA.

---

### About (`src/app/about/metadata.ts`)

```ts
title: "About Us"       // → "About Us | RapinnoTech"
canonical: "https://rapinnotech.com/about"
```
Keywords: **leadership names** (Pavan Kumar Kodedela, Naresh Velaga), California, Hyderabad, mission.

> [!TIP]
> If leadership changes, update `metadata.ts` keywords AND the `page.tsx` content.

---

### Services (`src/app/services/metadata.ts`)

```ts
title: "Services"       // → "Services | RapinnoTech"
canonical: "https://rapinnotech.com/services"
```
Keywords: 14 service-level terms — RPA, AI, Cloud, VAPT, IoT, Blockchain, Full Stack, etc.

---

### Solutions (`src/app/solutions/metadata.ts`)

```ts
title: "Solutions"      // → "Solutions | RapinnoTech"
canonical: "https://rapinnotech.com/solutions"
```
Keywords: All 7 Rapinno platform names — RDP, IA Ecosystem, Marketing 360, Data Digitization, RapiCon APS, Adaptive Sourcing, Managed Services.

---

### Career (`src/app/career/metadata.ts`)

```ts
title: "Careers"        // → "Careers | RapinnoTech"
canonical: "https://rapinnotech.com/career"
```
Keywords: Job role names (Flutter, Node.js, Angular, Python, UI/UX, QA, Data Engineer) + location targeting.

---

### Contact (`src/app/contact/metadata.ts`)

```ts
title: "Contact Us"     // → "Contact Us | RapinnoTech"
canonical: "https://rapinnotech.com/contact"
```
Keywords: Office locations, contact intent phrases, regional emails.

---

### Resources (`src/app/resources/metadata.ts`)

```ts
title: "Resources & Blog"  // → "Resources & Blog | RapinnoTech"
canonical: "https://rapinnotech.com/resources"
```
Keywords: Blog/article discovery terms — automation blog, cloud insights, engineering articles.

---

## 7. Structured Data (JSON-LD)

A full **Organization schema** is injected into the `<head>` on every page via `layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RapinnoTech Solutions",
  "url": "https://rapinnotech.com",
  "contactPoint": [
    { "telephone": "+1-949-516-8420", "areaServed": "US" },
    { "telephone": "+91-40-44720040", "areaServed": "IN" },
    { "telephone": "+49-17693133848", "areaServed": "DE" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "itemListElement": [ /* 6 services */ ]
  }
}
```

**To update:** Edit the `organizationSchema` constant in `src/app/layout.tsx`.

**To validate:** Paste your live URL into [Google's Rich Results Test](https://search.google.com/test/rich-results).

---

## 8. Sitemap & Robots

### Sitemap (`src/app/sitemap.ts`)

Generates `/sitemap.xml` automatically at build time:

| URL | Priority | Change Frequency |
|-----|----------|-----------------|
| `/` | 1.0 | monthly |
| `/about` | 0.9 | monthly |
| `/services` | 0.9 | monthly |
| `/solutions` | 0.9 | monthly |
| `/resources` | 0.8 | weekly |
| `/career` | 0.7 | weekly |
| `/contact` | 0.7 | yearly |

**To add a new page:** Add a new entry to the array in `sitemap.ts`.

### Robots (`src/app/robots.ts`)

Generates `/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

Sitemap: https://rapinnotech.com/sitemap.xml
```

---

## 9. Adding a New Page (with SEO)

Follow this exact pattern every time you add a route:

```bash
# Example: adding /pricing
mkdir src/app/pricing
```

**Step 1 — Create `metadata.ts`:**

```ts
// src/app/pricing/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",                         // → "Pricing | RapinnoTech"
  description: "Transparent, flexible pricing for RapinnoTech services...",
  keywords: ["RapinnoTech pricing", "IT services cost", "..."],
  alternates: { canonical: "https://rapinnotech.com/pricing" },
  openGraph: {
    title: "Pricing | RapinnoTech",
    description: "...",
    url: "https://rapinnotech.com/pricing",
  },
};
```

**Step 2 — Create `layout.tsx`:**

```tsx
// src/app/pricing/layout.tsx
import React from "react";
export { metadata } from "./metadata";

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

**Step 3 — Create `page.tsx`:**

```tsx
// src/app/pricing/page.tsx
"use client";

export default function PricingPage() {
  return (
    <main>
      <h1>Pricing</h1>
      {/* ... */}
    </main>
  );
}
```

**Step 4 — Add to `sitemap.ts`:**

```ts
{
  url: `${BASE_URL}/pricing`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
```

**Step 5 — Add to `header.tsx` nav links.**

---

## 10. Styling & Design System

### Design Tokens (`globals.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#000000` | Page background |
| `--color-foreground` | `#ffffff` | Primary text |
| `--color-secondary-foreground` | `#999999` | Muted text |
| `--color-accent` | `#5c5c42` | Brand accent (olive) |
| `--font-sans` | Inter | Body text |
| `--font-display` | Inter | Headings |

### Custom Utility Classes

| Class | Effect |
|-------|--------|
| `.liquid-glass` | Glassmorphism navbar background |
| `.text-hero` | 8.5vw font, tight leading |
| `.text-manifesto` | 4.5vw font, section headlines |
| `.text-section-title` | 12px uppercase label |
| `.content-page` | 120px top padding (avoids fixed header overlap) |

### Aurora Background

The aurora animation runs globally behind all pages. It is a fixed-position element injected in `layout.tsx` via `<AuroraBackground />`. Do **not** add backgrounds to individual page components — it will conflict.

---

## 11. Images & Media

### Local Images
Store all local images in `public/images/`. Reference them as `/images/filename.png` in `<img>` tags or Next.js `<Image>`.

| File | Used In |
|------|---------|
| `public/images/Pavan.png` | `/about` — Leadership card |
| `public/images/Naresh.png` | `/about` — Leadership card |
| `public/og-image.png` | **⚠️ MISSING** — needed for social share previews |

### OG Image (Required Action)

Create a **1200 × 630 px** image and place it at:
```
public/og-image.png
```
This is what appears when pages are shared on LinkedIn, Twitter, WhatsApp, etc.

### Remote Images
Remote image domains are whitelisted in `next.config.ts`:
```ts
remotePatterns: [
  { protocol: 'https', hostname: '**' },
  { protocol: 'http', hostname: '**' },
]
```
This allows any Unsplash or external image URL.

> [!WARNING]
> In production, replace `hostname: '**'` with specific allowed domains (e.g. `images.unsplash.com`) to prevent image optimization abuse.

---

## 12. Configuration Files

### `next.config.ts`

| Option | Purpose |
|--------|---------|
| `images.remotePatterns` | Allows all remote image hosts |
| `typescript.ignoreBuildErrors` | Bypasses TS errors on build |
| `eslint.ignoreDuringBuilds` | Bypasses ESLint on build |
| `turbopack.rules` | Injects `orchids-visual-edits` loader |
| `redirects` | `/dashboard` → `/` (permanent) |

### `tsconfig.json`
- Path alias `@/*` → `./src/*`
- Target: `ES2017`, strict mode enabled

### `postcss.config.mjs`
Runs `@tailwindcss/postcss` for Tailwind v4 processing.

---

## 13. Deployment Checklist

Before pushing to production, verify:

- [ ] **`public/og-image.png`** exists (1200×630px)
- [ ] **`SITE_URL`** in `layout.tsx` matches production domain
- [ ] **`canonical` URLs** in all `metadata.ts` files match production domain
- [ ] **`sitemap.ts`** `BASE_URL` matches production domain
- [ ] **`robots.ts`** sitemap URL matches production domain
- [ ] Run `npm run build` locally — no build errors
- [ ] Validate JSON-LD at [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Verify OG preview at [opengraph.xyz](https://www.opengraph.xyz)
- [ ] Replace `images.remotePatterns: **` with specific allowed hostnames
- [ ] Remove or configure `orchids-visual-edits` for production

---

*Last updated: March 2026 · RapinnoTech Solutions*
