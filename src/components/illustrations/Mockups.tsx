import Image from "next/image";
import { Check, Printer, Truck, Bell, MapPin } from "lucide-react";

/*
 * Conceptual product illustrations. These are CSS/SVG compositions that stand in for the
 * photography and app screenshots used in the reference layouts. They are illustrative and
 * are labelled as such in the UI (see `ConceptNote`). The only real product screenshot is the
 * portal dashboard image published by Tranzit (`/images/portal-dashboard.png`).
 */

export function ConceptNote({ children = "Illustrative preview of the Tranzit portal" }: { children?: string }) {
  return <span className="sr-only">{children}</span>;
}

const Dot = ({ colour }: { colour: string }) => <span className="inline-block size-2 rounded-full" style={{ background: colour }} aria-hidden />;

/** Orders table, as seen in the reference hero and "one dashboard" sections. */
export function OrdersTableMock({ className = "" }: { className?: string }) {
  const rows = [
    { id: "#PB000412", name: "Monash", dest: "VIC", carrier: "Australia Post", colour: "#dc1928", status: "ready" },
    { id: "#PB000413", name: "Newtown", dest: "NSW", carrier: "Aramex", colour: "#e4322b", status: "selected" },
    { id: "#PB000414", name: "Brunswick", dest: "VIC", carrier: "Couriers Please", colour: "#f26522", status: "ready" },
    { id: "#PB000415", name: "Fortitude Valley", dest: "QLD", carrier: "StarTrack", colour: "#0f3d7a", status: "ready" },
    { id: "#PB000416", name: "Highett", dest: "VIC", carrier: "Australia Post", colour: "#dc1928", status: "ready" },
  ];
  return (
    <div className={`overflow-hidden rounded border border-line bg-white text-navy-900 shadow-card ${className}`} aria-hidden>
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-4 text-[12px] font-bold">
          <span className="text-navy">Tranzit</span>
          <span>New</span>
          <span>Printed</span>
          <span>Shipped</span>
          <span>Returns</span>
        </div>
        <div className="flex gap-1">
          <Dot colour="#132f56" />
          <Dot colour="#132f56" />
          <Dot colour="#132f56" />
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-2 text-[11px]">
        <div className="flex gap-2">
          <span className="rounded border border-line px-2 py-0.5">Select view</span>
          <span className="rounded border border-line px-2 py-0.5">Filter orders</span>
        </div>
        <span className="font-bold text-navy">Compare rates</span>
      </div>
      <table className="w-full whitespace-nowrap text-[11px]">
        <thead>
          <tr className="border-b border-line text-left text-[10.5px] font-bold">
            <th className="w-7 px-4 py-1.5" />
            <th className="py-1.5">Order #</th>
            <th className="py-1.5">Suburb</th>
            <th className="py-1.5">State</th>
            <th className="py-1.5">Courier</th>
            <th className="py-1.5 pr-4" />
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className={`border-b border-line last:border-0 ${r.status === "selected" ? "bg-surface" : ""}`}>
              <td className="px-4 py-2">
                <span className={`inline-block size-3 rounded-sm border ${r.status === "selected" ? "border-navy bg-navy" : "border-line"}`} />
              </td>
              <td className="py-2 font-semibold text-navy">{r.id}</td>
              <td className="py-2">
                <span className="mr-1.5 inline-block size-1.5 rounded-full bg-emerald-500" />
                {r.name}
              </td>
              <td className="py-2">{r.dest}</td>
              <td className="py-2">
                <span className="mr-1.5 inline-block size-2.5 rounded-sm" style={{ background: r.colour }} />
                {r.carrier}
              </td>
              <td className="py-2 pr-4">
                {r.status === "selected" ? (
                  <span className="inline-block rounded bg-navy px-2 py-0.5 text-[9.5px] font-bold uppercase text-white">Print</span>
                ) : (
                  <span className="inline-block h-4 w-11 rounded border border-line" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Live rate comparison card (services page "multi-carrier"). */
export function RateCompareMock({ className = "" }: { className?: string }) {
  const rates = [
    { c: "Australia Post", s: "Express Post · 3kg", p: "$11.40", tag: "PICK", colour: "#dc1928" },
    { c: "Couriers Please", s: "Road · 3kg", p: "$8.90", tag: "CHEAPEST", colour: "#f26522", hot: true },
    { c: "Aramex", s: "Standard · 3kg", p: "$10.15", tag: "PICK", colour: "#e4322b" },
    { c: "StarTrack", s: "Express · 3kg", p: "$14.60", tag: "FASTEST", colour: "#0f3d7a" },
  ];
  return (
    <div className={`rounded border border-line bg-white p-4 text-navy-900 shadow-card ${className}`} aria-hidden>
      <div className="mb-3 flex items-center justify-between">
        <p className="font-mono text-[11px] text-muted">app.tranzitgroup.com.au/carriers</p>
        <span className="rounded bg-surface px-2 py-0.5 text-[10px] font-bold text-navy">Live rates</span>
      </div>
      <ul className="space-y-2">
        {rates.map((r) => (
          <li key={r.c} className={`flex items-center justify-between rounded border px-3 py-2 ${r.hot ? "border-orange bg-orange/10" : "border-line"}`}>
            <div className="flex items-center gap-2.5">
              <span className="inline-block size-3 rounded-sm" style={{ background: r.colour }} />
              <div>
                <p className="text-[12px] font-bold">{r.c}</p>
                <p className="text-[10.5px] text-muted">{r.s}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[13px] font-bold">{r.p}</p>
              <p className={`text-[9.5px] font-bold tracking-wide ${r.hot ? "text-orange-deep" : "text-muted"}`}>{r.tag}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** "If order … then …" rule cards from the reference, with Tranzit rule types. */
export function ShippingRulesMock({ className = "" }: { className?: string }) {
  const rules = [
    { when: "weight > 10kg", then: "cheapest carrier", icon: "⚖️" },
    { when: "zone = metro", then: "Express Post", icon: "📍" },
    { when: "value > $100", then: "signature required", icon: "✍️" },
  ];
  return (
    <div className={`space-y-3 ${className}`} aria-hidden>
      {rules.map((r) => (
        <div key={r.when} className="rounded border border-line bg-white px-4 py-3 text-[12.5px] text-navy-900 shadow-card">
          <p className="mb-1.5">
            <span className="mr-2 font-bold">If order</span>
            <span className="rounded bg-surface px-1.5 py-0.5 font-semibold">{r.when}</span>
          </p>
          <p>
            <span className="mr-2 font-bold">then</span>
            <span className="rounded bg-navy px-1.5 py-0.5 font-semibold text-white">
              {r.then} <span className="ml-1">{r.icon}</span>
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

/** Bulk label print progress (services page). */
export function LabelPrintMock({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded border border-line bg-white p-5 text-navy-900 shadow-card ${className}`} aria-hidden>
      <p className="mb-3 font-mono text-[11px] text-muted">app.tranzitgroup.com.au/orders</p>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[15px] font-bold">142 orders selected</p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1 text-[11px] font-bold text-navy">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" /> Printing
        </span>
      </div>
      <div className="mb-4 h-2 overflow-hidden rounded-full bg-surface">
        <div className="h-full w-[72%] rounded-full bg-orange" />
      </div>
      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          ["142", "Labels"],
          ["1", "Manifest"],
          ["142", "Packing slips"],
        ].map(([n, l]) => (
          <div key={l} className="rounded bg-sand py-3">
            <p className="font-heading text-[22px] font-semibold text-navy">{n}</p>
            <p className="text-[11px] text-muted">{l}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-navy">
        <Printer className="size-3.5" aria-hidden /> Thermal &amp; A4 ready
      </p>
    </div>
  );
}

/** Branded tracking page card (home "track" step, services "tracking"). */
export function TrackingMock({ className = "" }: { className?: string }) {
  const steps = ["Booked", "Picked up", "In transit", "Delivered"];
  return (
    <div className={`relative rounded border border-line bg-white p-5 text-navy-900 shadow-card ${className}`} aria-hidden>
      <p className="mb-4 text-center font-heading text-[18px] font-semibold italic text-navy">yourstore.com.au</p>
      <div className="mb-4 flex items-center">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center">
            <span className={`flex size-5 items-center justify-center rounded-full ${i < 3 ? "bg-navy text-white" : "border-2 border-line bg-white"}`}>
              {i < 3 && <Check className="size-3" />}
            </span>
            {i < steps.length - 1 && <span className={`h-0.5 flex-1 ${i < 2 ? "bg-navy" : "bg-line"}`} />}
          </div>
        ))}
      </div>
      <p className="mb-1 text-center text-[15px] font-bold">Parcel tracking</p>
      <p className="mb-4 flex items-center justify-center gap-2 text-[11.5px]">
        <span className="rounded bg-surface px-1.5 py-0.5 font-bold">Status</span> Out for delivery
        <span className="rounded bg-surface px-1.5 py-0.5 font-bold">Carrier</span> Couriers Please
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-24 rounded bg-gradient-to-br from-surface to-surface-2" />
        <div className="h-24 rounded bg-gradient-to-br from-cream to-line" />
      </div>
      <div className="absolute -bottom-6 -right-4 w-[150px] rounded bg-navy p-3 text-white shadow-float">
        <p className="mb-1 flex items-center gap-1.5 text-[11.5px] font-semibold">
          <Bell className="size-3.5 text-orange" /> Your order has shipped
        </p>
        <p className="text-[10.5px] text-white/80">SMS · Email · On delivery</p>
      </div>
    </div>
  );
}

/** Analytics gauge cards (services page "analytics"). */
export function AnalyticsMock({ className = "" }: { className?: string }) {
  const cards = [
    { label: "Spend per carrier", value: "By week", icon: Truck },
    { label: "Delivery speed", value: "By zone", icon: MapPin },
    { label: "Carrier performance", value: "On-time rate", icon: Check },
  ];
  return (
    <div className={`grid gap-3 ${className}`} aria-hidden>
      {cards.map(({ label, value, icon: Icon }, i) => (
        <div key={label} className={`flex items-center gap-4 rounded border border-line bg-white p-4 shadow-card ${i === 1 ? "ml-8" : ""}`}>
          <svg viewBox="0 0 64 40" className="h-10 w-16 shrink-0">
            <path d="M6 36 A26 26 0 0 1 58 36" fill="none" stroke="#dce6f3" strokeWidth="6" strokeLinecap="round" />
            <path d="M6 36 A26 26 0 0 1 44 12" fill="none" stroke={i === 2 ? "#e99322" : "#132f56"} strokeWidth="6" strokeLinecap="round" />
          </svg>
          <div>
            <p className="text-[13px] font-bold text-navy-900">{label}</p>
            <p className="inline-flex items-center gap-1 text-[11.5px] text-muted">
              <Icon className="size-3" /> {value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Rotated sticker chips (orange/navy) used around media panels. Only verified claims. */
export function Sticker({ children, tone = "orange", className = "" }: { children: React.ReactNode; tone?: "orange" | "navy" | "white"; className?: string }) {
  const tones = {
    orange: "bg-orange text-navy-900",
    navy: "bg-navy text-white",
    white: "bg-white text-navy",
  };
  return (
    <span className={`inline-flex items-center justify-center rounded px-3 py-2 text-center font-heading text-[13px] font-semibold leading-tight shadow-float ${tones[tone]} ${className}`} aria-hidden>
      {children}
    </span>
  );
}

export function StarburstSticker({ lines, tone = "navy", className = "" }: { lines: string[]; tone?: "navy" | "orange"; className?: string }) {
  return (
    <span
      className={`starburst inline-flex flex-col items-center justify-center text-center font-heading leading-tight ${
        tone === "navy" ? "bg-navy text-white" : "bg-orange text-navy-900"
      } ${className}`}
      aria-hidden
    >
      {lines.map((l, i) => (
        <span key={l} className={i === 0 ? "text-[11px] font-semibold uppercase tracking-wide opacity-90" : "text-[16px] font-bold"}>
          {l}
        </span>
      ))}
    </span>
  );
}

/** Real portal screenshot, framed. */
/** Real Tranzit portal screenshots (supplied by Tranzit, stored in /public/images/portal). */
export const portalShots = {
  hero: { src: "/images/portal/hero-dashboard.png", width: 1182, height: 634, path: "app.tranzitgroup.com.au/dashboard", alt: "Tranzit Group customer portal dashboard: total orders, total spend, pending invoices, recent orders and wallet transactions" },
  dashboard: { src: "/images/portal-dashboard.png", width: 1435, height: 911, path: "app.tranzitgroup.com.au/dashboard", alt: "Tranzit Group customer portal dashboard showing orders, statistics and recent transactions" },
  orders: { src: "/images/portal/orders.png", width: 1920, height: 840, path: "app.tranzitgroup.com.au/orders", alt: "Tranzit portal orders list with pending orders, validation status, courier, price and print buttons" },
  quote: { src: "/images/portal/get-quote.png", width: 1920, height: 1121, path: "app.tranzitgroup.com.au/get-quote", alt: "Tranzit portal Get Quote screen comparing Aramex, Couriers Please, MyPost Business and StarTrack prices" },
  printLabels: { src: "/images/portal/print-labels.png", width: 800, height: 610, path: "app.tranzitgroup.com.au/orders", alt: "Tranzit portal Print labels dialog showing orders to consign, orders skipped and the wallet amount needed" },
  carriers: { src: "/images/portal/carriers.png", width: 1920, height: 840, path: "app.tranzitgroup.com.au/settings/carriers", alt: "Tranzit portal Courier Integrations settings with Australia Post, Aramex, Direct Freight, MyPost Business, Couriers Please and StarTrack connected" },
  rules: { src: "/images/portal/rules.png", width: 1920, height: 840, path: "app.tranzitgroup.com.au/settings/rules", alt: "Tranzit portal Rules screen listing shipping rules by destination, weight and order source with their courier actions" },
  tracking: { src: "/images/portal/tracking.png", width: 1160, height: 1000, path: "track.tranzitgroup.com.au", alt: "Tranzit shipment tracking page where customers enter a tracking number and follow each delivery step" },
} as const;

export type PortalShotKey = keyof typeof portalShots;

/** Tight crops of the real portal, shown close to native size so the interface text is readable. */
export const focusShots = {
  stores: { src: "/images/portal/focus-stores.png", width: 704, height: 442, alt: "Tranzit ecommerce integrations: Shopify (1 connected), WooCommerce, eBay, Squarespace, Shopline and Etsy available now; Temu and Amazon coming soon" },
  quote: { src: "/images/portal/focus-quote.png", width: 1059, height: 457, alt: "Tranzit Get Quote shipment options: Aramex marked best value at $11.46, then Couriers Please, MyPost Business and StarTrack with their prices" },
  printLabels: { src: "/images/portal/print-labels.png", width: 800, height: 610, alt: "Tranzit Print labels dialog: three orders will be consigned, two are skipped with the reason, and the wallet amount needed is shown" },
  tracking: { src: "/images/portal/focus-tracking.png", width: 431, height: 381, alt: "Tranzit tracking timeline: Collected, In transit, Out for delivery and Delivered" },
  orders: { src: "/images/portal/focus-orders.png", width: 885, height: 430, alt: "Tranzit orders list showing each order as Valid or Invalid with its courier, price and a Print button" },
  rules: { src: "/images/portal/focus-rules.png", width: 979, height: 477, alt: "Tranzit shipping rules: conditions such as destination postcode, state, weight or order source, and the courier action each rule applies" },
  carriers: { src: "/images/portal/focus-carriers.png", width: 1102, height: 464, alt: "Tranzit courier integrations: Australia Post, Aramex, Direct Freight, MyPost Business, Couriers Please and StarTrack connected" },
} as const;

export type FocusShotKey = keyof typeof focusShots;
export type Annotation = { x: number; y: number; label: string };

/**
 * Focused portal crop with numbered call-outs. Markers sit on the image at x/y percentages;
 * the matching labels are listed underneath so they stay readable on mobile.
 */
export function FocusShot({ shot, annotations = [], className = "", dark = false }: { shot: FocusShotKey; annotations?: Annotation[]; className?: string; dark?: boolean }) {
  const s = focusShots[shot];
  return (
    <figure className={`w-full ${className}`} style={{ maxWidth: Math.min(s.width, 640) }} data-reveal="scale">
      <div className="relative border border-line bg-white p-1.5 shadow-float">
        <Image src={s.src} alt={s.alt} width={s.width} height={s.height} unoptimized className="h-auto w-full" />
        {annotations.map((a, i) => (
          <span
            key={a.label}
            className="absolute flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-[13px] font-bold text-navy-900 shadow-float ring-4 ring-white"
            style={{ left: `${a.x}%`, top: `${a.y}%` }}
            aria-hidden
          >
            {i + 1}
          </span>
        ))}
      </div>
      {annotations.length > 0 && (
        <figcaption>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2">
            {annotations.map((a, i) => (
              <li key={a.label} className={`flex items-start gap-3 text-[14px] leading-snug ${dark ? "text-white/90" : "text-navy-900"}`}>
                <span className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-orange text-[12px] font-bold text-navy-900">{i + 1}</span>
                {a.label}
              </li>
            ))}
          </ol>
        </figcaption>
      )}
    </figure>
  );
}

/** Framed portal screenshot with a browser-style bar. */
export function PortalShot({ shot, className = "", priority = false, sizes = "(min-width: 1024px) 640px, 100vw" }: { shot: PortalShotKey; className?: string; priority?: boolean; sizes?: string }) {
  const s = portalShots[shot];
  return (
    <figure className={`overflow-hidden border border-line bg-white shadow-float ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-sand px-3 py-2">
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="ml-2 truncate font-mono text-[10.5px] text-muted">{s.path}</span>
      </div>
      {/* Served as the original PNG: re-encoding blurs small interface text. */}
      <Image src={s.src} alt={s.alt} width={s.width} height={s.height} priority={priority} sizes={sizes} unoptimized className="h-auto w-full" />
    </figure>
  );
}

export function DashboardFrame({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return <PortalShot shot="dashboard" className={className} priority={priority} />;
}
