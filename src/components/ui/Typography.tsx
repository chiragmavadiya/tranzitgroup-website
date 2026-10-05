import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "./Container";

/** Two-tone square brand mark placed before headings (Transp "title-favicon"). */
export function Mark({ className = "size-9", light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className={`shrink-0 ${className}`} aria-hidden>
      <rect x="0" y="0" width="40" height="40" fill={light ? "#ffffff" : "#132f56"} />
      <path d="M40 0v40H0z" fill="#e99322" />
      <path d="M10 22l9-9M13 13h6v6" fill="none" stroke={light ? "#132f56" : "#ffffff"} strokeWidth="2.6" strokeLinecap="square" />
      <path d="M30 18l-9 9M27 27h-6v-6" fill="none" stroke="#0b1d38" strokeWidth="2.6" strokeLinecap="square" />
    </svg>
  );
}

/** Small muted subtitle above a centred heading ("Delivering Results for Industry Leaders"). */
export function Eyebrow({ children, className = "", light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return <p className={`text-[15px] ${light ? "text-white/75" : "text-muted"} ${className}`}>{children}</p>;
}

/** Accent tag chip ("Get in touch" on the pale yellow band). */
export function Tag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`inline-block bg-orange px-2.5 py-1 text-[12px] font-medium leading-none text-navy-900 ${className}`}>{children}</span>;
}

export function MonoLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[13px] text-navy-900 ${className}`}>{children}</p>;
}

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="highlight">{children}</span>;
}

const titleSizes = {
  xl: "text-[38px] leading-[1.12] sm:text-[52px] lg:text-[64px]",
  lg: "text-[30px] leading-[1.15] sm:text-[40px] lg:text-[48px]",
  md: "text-[24px] leading-[1.2] sm:text-[30px]",
};

export function SectionTitle({
  children,
  as: Tag = "h2",
  size = "lg",
  light = false,
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: keyof typeof titleSizes;
  light?: boolean;
  className?: string;
}) {
  return <Tag className={`${titleSizes[size]} ${light ? "!text-white" : ""} ${className}`}>{children}</Tag>;
}

/**
 * Section header.
 * - default: mark + heading on one line, description below, optional action on the right (Transp "What We Offer").
 * - centered: mark on top, small subtitle, heading, description (Transp "How It Works").
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  light = false,
  centered = false,
  className = "",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  light?: boolean;
  centered?: boolean;
  className?: string;
}) {
  if (centered) {
    return (
      <div className={`mx-auto flex max-w-[860px] flex-col items-center text-center ${className}`} data-reveal>
        <Mark className="mb-4 size-9" light={light} />
        {eyebrow && (
          <Eyebrow light={light} className="mb-2">
            {eyebrow}
          </Eyebrow>
        )}
        <SectionTitle light={light}>{title}</SectionTitle>
        {description && <p className={`mt-4 max-w-[760px] text-[15px] leading-relaxed ${light ? "text-white/80" : "text-muted"}`}>{description}</p>}
        {action && <div className="mt-6">{action}</div>}
      </div>
    );
  }
  return (
    <div className={`flex flex-col gap-5 md:flex-row md:items-end md:justify-between ${className}`} data-reveal>
      <div className="max-w-[760px]">
        {eyebrow && (
          <Eyebrow light={light} className="mb-2 sm:pl-[52px]">
            {eyebrow}
          </Eyebrow>
        )}
        <div className="flex items-center gap-3 sm:gap-4">
          <Mark className="size-8 sm:size-9" light={light} />
          <SectionTitle light={light}>{title}</SectionTitle>
        </div>
        {description && <p className={`mt-4 text-[15px] leading-relaxed ${light ? "text-white/80" : "text-muted"}`}>{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function Breadcrumbs({ items, light = false }: { items: { label: string; href?: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-[14px] ${light ? "text-white/75" : "text-muted"}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="size-3.5 opacity-60" aria-hidden />}
            {item.href ? (
              <Link href={item.href} className="hover:text-orange-light">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={light ? "text-orange-light" : "text-navy"}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`size-4 shrink-0 ${className}`} aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8.5l3 3 7-7" />
    </svg>
  );
}

/** Round tick used in lists and plan features. */
export function CheckBadge({ tone = "orange" }: { tone?: "orange" | "navy" | "plain" }) {
  if (tone === "plain") return <Check className="mt-1 text-emerald-600" />;
  const t = { orange: "bg-orange text-navy-900", navy: "bg-navy text-white" }[tone];
  return (
    <span className={`mt-1 inline-flex size-[18px] shrink-0 items-center justify-center rounded-full ${t}`}>
      <Check className="size-2.5" />
    </span>
  );
}

/** Inner-page banner: navy with dotted texture and an accent slash (Transp page header). */
export function PageHero({
  title,
  intro,
  crumbs,
  eyebrow,
  children,
  aside,
  wideAside = false,
}: {
  title: ReactNode;
  intro?: ReactNode;
  crumbs: { label: string; href?: string }[];
  eyebrow?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  /** Wide visuals (e.g. the integrations diagram) sit below the text until xl, then beside it, and show on phones. */
  wideAside?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="dots-dark absolute inset-0" aria-hidden />
      <div className="diag-cut-left absolute inset-y-0 right-0 hidden w-[42%] bg-navy-800 lg:block" aria-hidden />
      {!wideAside && <div className="slash absolute bottom-0 right-[38%] hidden h-24 w-28 bg-orange lg:block" aria-hidden />}
      <Container className={`relative grid items-center gap-10 py-14 lg:py-20 ${wideAside ? "xl:grid-cols-[1fr_1.15fr] xl:gap-12" : "lg:grid-cols-[1.3fr_1fr]"}`}>
        <div className="max-w-[780px]">
          <Breadcrumbs items={crumbs} light />
          {eyebrow && <p className="mt-8 text-[15px] text-white/80">{eyebrow}</p>}
          <SectionTitle as="h1" size="xl" light className={eyebrow ? "mb-5 mt-3" : "mb-5 mt-8"}>
            {title}
          </SectionTitle>
          {intro && <p className="hero-seq hero-seq-1 max-w-[640px] text-[16px] leading-relaxed text-white/80">{intro}</p>}
          {children && <div className="hero-seq hero-seq-2">{children}</div>}
        </div>
        {aside && (
          <div className={`hero-visual relative min-w-0 ${wideAside ? "mx-auto w-full max-w-[720px] xl:max-w-none" : "hidden lg:block"}`}>{aside}</div>
        )}
      </Container>
    </section>
  );
}
