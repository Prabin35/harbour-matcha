# Harbour Matcha

A premium, Japanese-inspired landing page for Harbour Matcha — a small ceremonial-grade matcha stand by the harbour. Built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom design tokens for the brand palette
- **Framer Motion** — fade-ins, slide-ups, parallax, hover interactions
- **Lucide Icons**
- **shadcn/ui**-style primitives (`components/ui`)

## Project structure

```
app/
  layout.tsx        Root layout — fonts, SEO/OG metadata, theme + chrome
  page.tsx           Home page — composes all sections
  globals.css        Design tokens, paper texture, cursor, scrollbar

components/
  Navbar.tsx          Glassmorphism nav, scroll blur, dark mode toggle
  Hero.tsx            Hero section with parallax + floating shapes
  MatchaWhisk.tsx      Signature whisking/ripple animation
  Menu.tsx             Menu section (server component, reads CMS data)
  ProductCard.tsx      Product card w/ mouse-following glow
  About.tsx            Brand story section
  Features.tsx         "Why choose us" feature grid
  Instagram.tsx         Instagram gallery section
  Visit.tsx             Location / hours / contact section
  Footer.tsx             Footer
  LoadingScreen.tsx      Matcha bowl fill/whisk loading animation
  CustomCursor.tsx        Cursor that morphs over interactive elements
  AnnouncementBanner.tsx   Dismissible "Grand Opening Soon" banner
  ui/
    button.tsx           Reusable button (cva variants)
    section-heading.tsx  Reusable eyebrow + serif heading

lib/
  data/
    drinks.ts     CMS-ready menu content — see note below
    features.ts   "Why choose us" content
    site.ts       Site-wide settings: hours, location, socials
  hooks/
    use-theme.tsx  Dark mode context (persists to localStorage)
  types.ts         Shared TypeScript interfaces
  utils.ts         `cn()` class-merging helper

public/images/     SVG placeholder art — swap for real photography
```

## Making it CMS-ready

All menu, feature, and site content lives in `lib/data/*.ts`, fully decoupled from the components that render it. To connect a real CMS (Sanity, Contentful, Payload, etc.), replace the body of `getDrinks()` in `lib/data/drinks.ts` with a fetch call that returns data shaped like `Drink[]` (see `lib/types.ts`) — no component code needs to change.

## Swapping in real photography

Every image lives in `public/images/` as a placeholder SVG (organic gradient illustrations in the brand palette). Replace the files referenced in `lib/data/drinks.ts`, `About.tsx`, `Instagram.tsx`, and `Visit.tsx` with real photography — the `next/image` components are already wired up with correct `sizes` and aspect ratios.

## Design tokens

| Token | Hex |
| --- | --- |
| Cream | `#FAF7F2` |
| Sage Green | `#A8B89A` |
| Matcha Green | `#6E8F5C` |
| Dark Forest | `#243324` |
| Soft Beige | `#EFE6D8` |

Typography: **Cormorant Garamond** (serif, headings) + **Manrope** (sans, body), loaded via `next/font/google`.

## Notes

- Dark mode uses a deep forest green palette and persists via `localStorage`.
- Custom cursor and mouse-glow effects are disabled automatically on touch devices.
- Reduced-motion preference is respected globally (`globals.css`).
