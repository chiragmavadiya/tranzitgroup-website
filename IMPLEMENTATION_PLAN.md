# Implementation plan — Tranzit Group website

Visual reference: Starshipit screenshots (home, integrations, shipping platform).
Content source: https://tranzitgroup.com.au (home, services, pricing, about, contact, privacy, terms).

## Screenshot → route mapping

| Screenshot | Represents | Tranzit route | Tranzit content used | Status |
|---|---|---|---|---|
| 1.png | Starshipit home | `/` | Home hero, carrier strip, customers, time-sink comparison, 6 features, 4 steps, mission control, integrations, FAQ, support, CTA | ✅ done |
| 2.png | Starshipit integrations | `/integrations` | Carriers (Australia Post, Aramex, CouriersPlease, DHL; StarTrack/TNT/Allied Express coming soon), platforms (Shopify, WooCommerce, eBay; BigCommerce/Magento/Squarespace coming soon), BYO vs Tranzit rates, FAQ | ✅ done |
| 3.png | Starshipit shipping platform | `/services` | Services page: multi-carrier, bulk labels, branded tracking, notifications, returns, analytics, multi-store, API; mission control; how it works; FAQ | ✅ done |

## Tranzit pages without a screenshot (shared design language)

| Route | Content | Status |
|---|---|---|
| `/pricing` | 30-day free trial, pay-per-label from $0.02, how pricing works, pricing FAQ | ✅ done |
| `/about` | Story, founded 2023 Melbourne, six principles | ✅ done |
| `/contact` | Email, phone (1300 TRANZIT), hours, enquiry form | ✅ done (form needs endpoint, see gaps) |
| `/privacy-policy` | Full policy text | ✅ done |
| `/terms-and-conditions` (+ `#fair-use`) | Full terms text | ✅ done |
| `/not-found` | Useful 404 | ✅ done |
| `sitemap.xml`, `robots.txt`, `manifest`, OG image | Generated | ✅ done |

## Shared components
Announcement bar, header with dropdowns + mobile nav, footer, buttons, container, breadcrumbs, eyebrow/highlight, FAQ accordion, CTA band, logo marquee, feature split, stat/benefit cards, conceptual product illustrations (CSS/SVG).

## Content decisions
- Tranzit's homepage says "free forever"; its pricing page says 30-day trial then per-label pricing. The pricing page is used as the source of truth.
- Carriers: Australia Post, Aramex, CouriersPlease and DHL are described as connected on the services page; StarTrack, TNT and Allied Express are marked "coming soon" on the home carrier strip and are labelled that way here.
- Sections in the reference with no verified Tranzit equivalent were adapted (see gaps).

## Gaps (not invented)
- **Testimonials / case studies / video**: Tranzit publishes none. Reference testimonial sliders and case-study blocks were replaced with verified comparison and benefit content.
- **Statistics**: Tranzit's counters render as "0" with no values. No numbers are shown.
- **Awards, certifications, social links, newsletter**: none published. Omitted (footer subscribe replaced with contact details).
- **Photography**: Tranzit has no photography. Product areas use the real portal screenshot plus clearly conceptual CSS illustrations.
- **Contact form endpoint**: Tranzit's live form posts to its own server-side handler, which is not reusable. The form here posts to `/api/contact`, which forwards to `CONTACT_WEBHOOK_URL` if set and otherwise returns an honest "not configured" message with a mailto fallback.
- **Customer logos**: customer names are verified; logo files are not available, so they render as text wordmarks.

## Verification log (2 October 2026)
- `npm run lint`: clean. `npx tsc --noEmit`: clean. `npm run build`: 17 routes generated, no errors.
- Rendered every route at 1920, 820 and 390 px with Playwright: no horizontal overflow, no console errors (except the expected 404 on the not-found test), no leftover reference-brand text, all internal links return 200, all images serve 200.
- Interactions verified: header dropdown (click/hover, Escape closes, pins on click), mobile menu (open, expand sub-items, Escape closes), FAQ accordion (ARIA expanded + panel), integrations search and filters, contact form validation (3 errors on empty submit), contact form with no endpoint (shows "not connected" notice + mailto fallback, no fake success).
- Pages compared against the reference screenshots at desktop width: home, integrations and services follow the reference section order, spacing and card/button styling with Tranzit colours and content.

## Redesign: Transp template (2 October 2026)
The client chose the Transp logistics template (https://transp-nextjs.vercel.app) as the design and layout reference. It supersedes the Starshipit direction. All pages were rebuilt with Transp's section structure, Epilogue typography and square components, keeping Tranzit's content. See `DESIGN.md` for the section-by-section mapping.

| Page | Status |
|---|---|
| `/` | ✅ Transp home order: hero, trusted strip, offer cards, media split, diagonal band, how-it-works timeline, support band, integrations cards, stats band + demo form, plans, FAQ, CTA strip |
| `/services` | ✅ Same building blocks |
| `/integrations` | ✅ Navy page hero, explorer with Transp cards, BYO vs ours, FAQ |
| `/pricing` | ✅ Navy page hero, two plan cards, how pricing works, FAQ |
| `/about`, `/contact`, legal, 404 | ✅ Navy page hero and shared footer contact card |

Verification: lint, type-check and build clean; 27 page/width renders with no overflow, console errors or broken images; dropdown, Escape, keyboard, mobile menu, FAQ, integration filters and contact form re-tested; original Tranzit copy checked against the rendered pages.

## Portal screenshots (2 October 2026)
Real portal screenshots supplied by Tranzit replace most illustrations. Clean copies live in `public/images/portal/` (`orders`, `get-quote`, `print-labels`, `carriers`, `rules`, `tracking`) and are registered in `portalShots` in `src/components/illustrations/Mockups.tsx`. To swap one, replace the file and update its width/height there.
Still illustrated: returns & analytics (no screenshot supplied).
Resolved 5 October 2026: integration statuses now follow the portal screenshots (see below).

## Review fixes (2 October 2026)
- Homepage shortened by about a quarter on desktop and a third on mobile. Removed the separate mission-control, support, stats, demo-form and three-plan sections and the second customer strip, because each repeated a point made elsewhere.
- Customer names moved directly under the hero. `src/content/testimonials.ts` holds real testimonials; it is empty, and the quote block stays hidden until one is added.
- Product screenshots replaced on the homepage with focused, annotated crops (`FocusShot`, `public/images/portal/focus-*.png`).
- All trial buttons now read "Start free trial"; "Book a demo" is the secondary action.
- Support band: removed the repeated strip, the decorative quote mark and the pale-on-pale area. Integration names now render at one consistent size.
- Pricing shown as one offer in two stages (`PricingSummary`) on the homepage and pricing page, replacing the three plan cards.

## Motion system (5 October 2026)
- Added scroll reveals, a CSS hero sequence, staggered card groups and refined hover, press and menu transitions. No animation library; see the Motion section in `DESIGN.md`.
- Independent review (3 lenses, each finding adversarially verified) confirmed 16 issues; all were fixed, including print visibility, focus return on Escape, inert page behind the mobile menu, instant scroll on route changes and pre-hydration reveal of in-view content.
- Verified in the browser: zero layout shift, no console errors, nothing left hidden after normal scrolling, fast jumps, deep links or client navigation; reduced motion, no-JS and print show all content; keyboard focus never lands on hidden content.

## Integration statuses and slower motion (5 October 2026)
- Statuses now follow the Tranzit portal's Courier and Ecommerce Integrations screens.
  - Live couriers: Australia Post, Aramex, MyPost Business, Direct Freight, Couriers Please, StarTrack, TNT, Team Global Express.
  - Live platforms: Shopify, WooCommerce, eBay, Squarespace, Shopline, Etsy.
  - Coming soon: FedEx, Allied Express, Temu, Amazon.
  - Removed (not in the portal): DHL, BigCommerce, Magento.
- Animations slowed at the client's request; see the Motion tokens in `DESIGN.md`.

## Review fixes, round 2 (5 October 2026)
- Fixed the development "1 Issue" badge, a hydration mismatch from the motion bootstrap script; reveal setup now runs after hydration.
- Added Step 01 "Connect your store" as a full walkthrough row using the portal's ecommerce integrations screen; tightened walkthrough spacing.
- Sharper screenshots: portal images are served as original PNGs, and the hero uses a tighter dashboard crop.
- Replaced the dollar icon on "Branded tracking" and the typed "TR" diagram hub with the real brand mark.
- Removed the footer's repeated contact and sign-up panel.
- Still needed from Tranzit: customer logo files with permission, and one genuine testimonial with a measurable result.

## Legal pages (5 October 2026)
- Privacy Policy and Terms & Conditions now use the text from the customer portal (app.tranzitgroup.com.au/privacy-policy and /terms-and-conditions, "Updated: 17 August 2026"), copied word for word into `src/content/legal-docs.ts`.
- Both pages have a searchable section index (sticky on desktop, collapsible on phones).
- The old "Fair use" links were removed because the new Terms have no fair-use section.
