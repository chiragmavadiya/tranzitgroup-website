# Tranzit Group website

Marketing website for [Tranzit Group](https://tranzitgroup.com.au), built with Next.js (App Router), TypeScript and Tailwind CSS v4. The layout follows the supplied Starshipit reference screenshots; all copy, branding and business facts come from the existing Tranzit Group website.

## Requirements

- Node.js 20 or newer
- npm

## Setup

```bash
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build (also runs type-checking) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | TypeScript check only |

## Configuration

See `.env.example`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL used in metadata, sitemap, robots and Open Graph. |
| `CONTACT_WEBHOOK_URL` | Optional JSON POST endpoint for the contact form. If unset, the form tells the visitor that online submissions are not connected and offers a pre-filled email link instead. It never fakes a success. |

## Project structure

```
src/
  app/                      Routes (App Router)
    page.tsx                Home
    services/               Shipping automation platform
    integrations/           Couriers + ecommerce platforms (filterable)
    pricing/                Free trial + pay-per-label
    about/  contact/        Company pages
    privacy-policy/  terms-and-conditions/
    api/contact/route.ts    Contact form handler
    sitemap.ts robots.ts manifest.ts opengraph-image.tsx not-found.tsx
  components/
    layout/                 Header, HeaderNav (dropdowns + mobile), Footer, Logo
    ui/                     Button, ArrowLink, Container, Typography (Eyebrow, Highlight, Breadcrumbs…)
    sections/               Shared sections: strips, integrations card, support split, CTA band, FAQ
    illustrations/          Conceptual product mock-ups (CSS/SVG) and brand badges
    forms/ContactForm.tsx
  content/                  Editable content: integrations, FAQs, legal text
  lib/site.ts               Site facts, navigation, routes
  lib/seo.ts                Per-page metadata helper
public/
  brand/                    Tranzit logos and icons
  images/                   Portal screenshot, Shopify/WooCommerce logos (as published by Tranzit)
```

## Editing content

- **Business details, navigation, footer**: `src/lib/site.ts`.
- **Integrations (couriers/platforms, status, descriptions)**: `src/content/integrations.ts`. Set `status` to `"available"` or `"coming-soon"`.
- **FAQs**: `src/content/faqs.ts`.
- **Legal text**: `src/content/legal-docs.ts`, copied from the customer portal (update `legalUpdated` when you change it).
- **Page copy**: each page lives in `src/app/<route>/page.tsx`; section copy is inline and clearly labelled.
- **Design tokens**: `src/app/globals.css` (`@theme` block). See `DESIGN.md`.

## Notes

- Product visuals other than `public/images/portal-dashboard.png` are illustrative CSS/SVG compositions, not real screenshots.
- No testimonials, statistics, awards or social links are shown because Tranzit does not publish any.
- See `IMPLEMENTATION_PLAN.md` for the page map and remaining gaps.
