import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { BrandBadge } from "@/components/illustrations/BrandBadge";
import { integrations, type Integration } from "@/content/integrations";

/*
 * Connection diagram: ecommerce platforms → Tranzit → couriers.
 * Live integrations: solid chips with solid connector lines.
 * Coming soon: dashed, muted chips with a "Soon" tag and dashed connectors,
 * listed at the end of their own column (matches the portal's coming-soon cards).
 * Tablet and up: three columns joined by lines. Phones: stacked with arrows.
 * Lists come straight from the integrations content file, so statuses stay in sync.
 */
type Tone = "dark" | "light";

const CHIP_H = 34; // px, fixed chip height
const GAP = 8; // px, gap between chips (gap-2)
const STEP = CHIP_H + GAP;

function Chip({ item, side, tone }: { item: Integration; side: "left" | "right"; tone: Tone }) {
  const soon = item.status === "coming-soon";
  const dark = tone === "dark";

  // Short connector from the chip edge to the column's vertical bus (tablet and up).
  const connector =
    side === "left"
      ? "sm:after:absolute sm:after:left-full sm:after:top-1/2 sm:after:w-6"
      : "sm:before:absolute sm:before:right-full sm:before:top-1/2 sm:before:w-6";
  const lineStyle = soon
    ? `after:h-0 before:h-0 after:border-t before:border-t after:border-dashed before:border-dashed ${dark ? "after:border-white/35 before:border-white/35" : "after:border-navy/30 before:border-navy/30"}`
    : `after:h-px before:h-px ${dark ? "after:bg-orange/60 before:bg-orange/60" : "after:bg-navy/25 before:bg-navy/25"}`;

  const body = soon
    ? dark
      ? "border border-dashed border-white/35 bg-white/5 text-white/70"
      : "border border-dashed border-navy/25 bg-surface text-muted"
    : `bg-white shadow-card ${dark ? "" : "border border-line-soft"}`;

  return (
    <li className={`relative inline-flex h-[34px] items-center gap-2 whitespace-nowrap px-3 ${body} ${connector} ${lineStyle}`}>
      {soon ? (
        <>
          <span className="inline-flex items-center gap-2 font-heading text-[14px] font-semibold tracking-tight">
            <span aria-hidden className={`size-2 shrink-0 rounded-full ${dark ? "ring-1 ring-white/50" : "opacity-60"}`} style={{ background: item.accent }} />
            {item.name}
          </span>
          {/* Pill styled after the portal's "Coming soon" tag; label optically centred (see .btn-label). */}
          <span
            className={`inline-flex h-[18px] items-center rounded-full border px-2 text-[9.5px] font-bold uppercase leading-none tracking-[0.08em] ${
              dark ? "border-orange/50 bg-orange/15 text-orange" : "border-orange/40 bg-orange/10 text-orange-deep"
            }`}
          >
            <span className="btn-label !top-[0.19em]">Soon</span>
          </span>
        </>
      ) : (
        <BrandBadge integration={item} size="sm" />
      )}
    </li>
  );
}

function ChipList({ items, side, tone }: { items: Integration[]; side: "left" | "right"; tone: Tone }) {
  const dark = tone === "dark";
  const live = items.filter((i) => i.status !== "coming-soon").length;
  const total = items.length;
  const edge = side === "left" ? "-right-6" : "-left-6";
  // Bus geometry from fixed chip height + gap: solid through live chips, dashed through coming-soon ones.
  const solidTop = CHIP_H / 2;
  const solidHeight = Math.max(0, (live - 1) * STEP);
  const dashedHeight = Math.max(0, (total - live) * STEP);

  return (
    <div className="relative">
      <span
        aria-hidden
        className={`absolute hidden w-px sm:block ${edge} ${dark ? "bg-orange/60" : "bg-navy/25"}`}
        style={{ top: solidTop, height: solidHeight }}
      />
      {dashedHeight > 0 && (
        <span
          aria-hidden
          className={`absolute hidden w-0 border-l border-dashed sm:block ${edge} ${dark ? "border-white/35" : "border-navy/30"}`}
          style={{ top: solidTop + solidHeight, height: dashedHeight }}
        />
      )}
      <ul
        role="list"
        data-reveal-group
        className={`flex flex-wrap justify-center gap-2 sm:flex-col sm:flex-nowrap ${side === "left" ? "sm:items-end" : "sm:items-start"}`}
      >
        {items.map((i) => (
          <Chip key={i.slug} item={i} side={side} tone={tone} />
        ))}
      </ul>
    </div>
  );
}

export function IntegrationFlow({ tone = "dark", className = "" }: { tone?: Tone; className?: string }) {
  const byStatus = (a: Integration, b: Integration) => Number(a.status === "coming-soon") - Number(b.status === "coming-soon");
  const platforms = integrations.filter((i) => i.category !== "courier").sort(byStatus);
  const couriers = integrations.filter((i) => i.category === "courier").sort(byStatus);
  const liveCount = (list: Integration[]) => list.filter((i) => i.status !== "coming-soon").length;
  const soonCount = (list: Integration[]) => list.length - liveCount(list);

  const dark = tone === "dark";
  const title = `text-[12px] font-semibold uppercase tracking-[0.14em] ${dark ? "text-white/70" : "text-muted"}`;
  const count = (list: Integration[]) => (
    <>
      {" · "}
      <span className={dark ? "text-white" : "text-navy"}>{liveCount(list)} live</span>
      {soonCount(list) > 0 && <span className={dark ? "text-orange" : "text-orange-deep"}> + {soonCount(list)} soon</span>}
    </>
  );

  return (
    <figure
      className={className}
      aria-label={`Tranzit connects ${liveCount(platforms)} ecommerce platforms with ${liveCount(couriers)} couriers, with ${soonCount(platforms) + soonCount(couriers)} more coming soon`}
    >
      <div className="grid grid-cols-1 items-center gap-y-3 sm:grid-cols-[auto_minmax(96px,1fr)_auto] sm:gap-x-6 sm:gap-y-4">
        {/* Row 1: column titles; on phones each title sits above its own list */}
        <p className={`${title} order-1 text-center sm:order-none sm:text-right`}>Ecommerce platforms{count(platforms)}</p>
        <span className="hidden sm:block" />
        <p className={`${title} order-4 mt-2 text-center sm:order-none sm:mt-0 sm:text-left`}>Couriers{count(couriers)}</p>

        {/* Row 2: platforms → hub → couriers */}
        <div className="order-2 sm:order-none">
          <ChipList items={platforms} side="left" tone={tone} />
        </div>

        <div className="relative order-3 flex flex-col items-center justify-center py-2 sm:order-none sm:py-0">
          <span aria-hidden className={`absolute inset-x-0 top-1/2 hidden h-px sm:block ${dark ? "bg-orange/60" : "bg-navy/25"}`} />
          <ArrowDown aria-hidden className={`mb-2 size-5 sm:hidden ${dark ? "text-orange" : "text-navy/40"}`} />
          <span data-reveal="scale" className="relative flex flex-col items-center">
            {/* The real Tranzit brand mark, framed in orange so it reads on navy and on white. */}
            <Image
              src="/brand/icon-512.png"
              alt="Tranzit Group"
              width={512}
              height={512}
              sizes="104px"
              className="size-[92px] border-4 border-orange shadow-float lg:size-[104px]"
            />
            <span className={`mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] ${dark ? "text-white/80" : "text-navy"}`}>Tranzit Group</span>
          </span>
          <ArrowDown aria-hidden className={`mt-2 size-5 sm:hidden ${dark ? "text-orange" : "text-navy/40"}`} />
        </div>

        <div className="order-5 sm:order-none">
          <ChipList items={couriers} side="right" tone={tone} />
        </div>
      </div>

      {/* Legend */}
      <figcaption className={`mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] ${dark ? "text-white/70" : "text-muted"}`}>
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className={`inline-block h-px w-6 ${dark ? "bg-orange/70" : "bg-navy/40"}`} /> Live today
        </span>
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className={`inline-block w-6 border-t border-dashed ${dark ? "border-white/50" : "border-navy/40"}`} /> Coming soon
        </span>
      </figcaption>
    </figure>
  );
}
