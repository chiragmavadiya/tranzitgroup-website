# Design system: Tranzit Group website

The layout and visual language follow the **Transp** logistics template (transp-nextjs.vercel.app), as chosen by the client. Transp's yellow accent is mapped to Tranzit orange and its navy to Tranzit navy. All copy is Tranzit's own.

## Typography
- **Epilogue** (Google Fonts via `next/font`) for headings and body, as in Transp.
- Headings: weight 600, navy. Hero 40 → 64px. Section titles 30 → 48px. Card titles 20–22px.
- Body: 15–16px, line-height 1.75–1.8, muted grey `#5b647c` for supporting text.
- Eyebrow above centred headings: 15px muted text, no caps.

## Colour tokens (`src/app/globals.css`, `@theme`)
| Token | Value | Transp equivalent | Use |
|---|---|---|---|
| `navy` | #132f56 | #034460 | Bands, accordion bars, featured plan, footer |
| `navy-900` | #0b1d38 | #041c2f | Hero, utility bar, footer bottom bar, dark text |
| `orange` | #e99322 | #fec201 | Primary buttons, card bottom borders, accents, open FAQ |
| `sand` | #fde6c2 | #ffe799 | Pale accent diagonal bands, icon blobs |
| `sky` | #e3edf6 | #e0f0f6 | "Trusted by" strip, visual panels |
| `surface` / `surface-2` | #f2f3f4 / #e8e9ed | same | Grey sections, Login button |
| `muted` | #5b647c | same | Body copy |
| `line` | #cde2e7 | same | Card and input borders |

## Layout
- Container: max 1408px (Transp `.container` at 1400px+), 16/24px gutters.
- Sections: 80–112px vertical padding desktop, 64–80px mobile.
- Square corners everywhere (radius tokens set to 0–2px), as in Transp.

## Shared components (`src/components/sections/Shared.tsx`)
| Component | Transp section it reproduces |
|---|---|
| `Header` | Dark utility bar + white nav bar, grey Login and accent CTA |
| `CarrierStrip` / `CustomerStrip` | "We are trusted by major global brands" pale strip |
| `SectionHeader` | Square brand mark + heading, description, right-aligned action |
| `OfferGrid` + `OfferCard` | "What We Offer": white cards, blob icon, 8px accent bottom border, navy band behind |
| `MediaFrame` | Image framed by slanted navy bars and an accent slash |
| Diagonal sand/navy split (inline) | "Proud to Deliver Excellence" band |
| How-it-works timeline (inline) | "How It Works": visual with overlay card + dashed icon timeline |
| `SupportSplit` | "What our customers are saying": navy band, sand diagonal, white cards |
| `BenefitBand` | "World's Leading Companies": navy band, accent heading, bordered stat boxes |
| Demo form card (home) | "Calculate Shipping" card overlapping the stats band |
| `PlanCards` | "Choose The Best Plan": three cards, middle navy and raised |
| `FaqSection` + `FaqAccordion` | "FAQs": visuals left, navy accordion right (open item accent), "Need more help?" |
| `CtaBand` | "Have any ideas in your mind? / Create your next project" strip |
| `Footer` | Contact card overlapping white/navy (no map: Tranzit publishes no street address), columns with accent headings, dark bottom bar |
| `PageHero` | Inner-page navy banner with breadcrumbs |

## Buttons (`src/components/ui/Button.tsx`)
Square, medium weight. `primary` = orange with dark text; `navy` turns orange on hover; `grey` = Transp Login style; `outline-light` for dark backgrounds. `ArrowLink` = "View details ↗" with a small square arrow. `PlayLink` = round accent icon link beside hero buttons.

## Motion
Calm and consistent (slowed at the client's request on 5 October 2026): unhurried fade-and-rise entrances, one ease-out curve, no overshoot, no parallax, no scroll library. Native scrolling is untouched.

**Tokens** (`:root` in `globals.css`)
| Token | Value | Use |
|---|---|---|
| `--ease-smooth` (`ease-smooth` utility) | cubic-bezier(0.22, 1, 0.36, 1) | Every transition and entrance |
| `--motion-fast` | 260ms | Hover, press, colour feedback (cards and dropdown 320ms) |
| `--motion-medium` | 400ms | Mobile menu, sub-menus, accordions |
| `--motion-reveal` | 950ms | Section entrances (1100ms for `scale`) |
| `--motion-stagger` | 120ms | Between grouped items, capped at 6 steps |
| `--motion-distance` | 28px | Entrance travel |

**Scroll reveals** (add attributes in markup; Server Components stay server-rendered)
- `data-reveal` fades and rises. Variants: `="left"`, `="right"` (side-by-side layouts), `="scale"` (screenshots, large visuals), `="fade"` (strips).
- `data-reveal-group` on a list or grid staggers its direct children.
- `data-reveal-delay="1"` or `"2"` offsets a second element (150ms or 300ms).
- Never put `data-reveal` on children of a client component that re-renders lists (for example the integrations filter). Wrap the component instead.
- One shared observer (`RevealObserver`) reveals each element once, slightly before it enters view. It also reveals anything scrolled or jumped past, and anything that receives keyboard focus.

**Hero sequence**: `hero-seq hero-seq-1/2/3` and `hero-visual` classes run in CSS on first paint and finish at about 1.5s. Main headings are never animated.

**Screenshots**: portal screenshots use `unoptimized` images so the original PNG is served; re-encoding blurs interface text. Use `FocusShot` (tight crop, numbered call-outs) for product detail and `PortalShot` for framed full screens.

**Interaction feedback**
- Buttons lift 1px with a soft shadow on hover and scale to 98% when pressed. Arrows nudge 4px.
- Only genuinely clickable cards lift: use `OfferCard` with `href`, which stretches the link over the card. Static cards have no hover state.
- Nav links use a sliding underline. Dropdowns, the mobile menu, mobile sub-menus and FAQs open and close with opacity and height transitions. Closed panels are `inert`.
- Tailwind v4 limits `hover:` to hover-capable devices; `active:` provides touch feedback.

**Safety**
- Nothing is changed before React hydrates, so there are no hydration mismatches. After hydration, `RevealObserver` marks on-screen content `is-in is-static` (shown as painted, no entrance) and only then adds the `motion` class. Without JS, nothing is hidden.
- `prefers-reduced-motion` disables entrances, the hero sequence and smooth scrolling.
- Entrances use `transform` and `opacity` with `backwards` fill, so they cause no layout shift and do not override hover styles afterwards.

## Not reproduced from Transp
Testimonials, project gallery, news/blog, shipping calculator, map and social links. Tranzit publishes none of these, so the sections reuse the Transp layouts with verified Tranzit content instead (support, integrations, demo form, contact card).
