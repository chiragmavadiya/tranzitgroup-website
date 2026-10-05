import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import type { ReactNode } from "react";

/*
 * Buttons follow Transp: square corners, medium weight, accent fill with dark text,
 * navy fill that turns accent on hover.
 */
type Variant = "primary" | "navy" | "outline" | "outline-light" | "white" | "grey" | "ghost";
type Size = "sm" | "md" | "lg";

/*
 * Feedback: colour change plus a 1px lift and soft shadow on hover (hover-capable devices only,
 * Tailwind v4 scopes `hover:` to them), and a pressed state that also works on touch.
 */
const base =
  "group/btn inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,translate,scale] duration-[260ms] ease-smooth active:translate-y-0 active:scale-[0.98]";

const lift = "hover:-translate-y-px hover:shadow-button";

const variants: Record<Variant, string> = {
  primary: "bg-orange text-navy-900 hover:bg-navy hover:text-white",
  navy: "bg-navy text-white hover:bg-orange hover:text-navy-900",
  outline: "border border-navy text-navy hover:bg-navy hover:text-white",
  "outline-light": "border border-white/80 text-white hover:bg-white hover:text-navy",
  white: "bg-white text-navy hover:bg-orange hover:text-navy-900",
  grey: "bg-surface-2 text-navy-900 hover:bg-navy hover:text-white",
  ghost: "text-navy-900 hover:text-orange-deep",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[14px]",
  md: "h-12 px-6 text-[15px]",
  lg: "h-[54px] px-7 text-[15px]",
};

export type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  arrow?: boolean;
  icon?: ReactNode;
};

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

function Anchor({ href, className, children, external }: { href: string; className: string; children: ReactNode; external?: boolean }) {
  const ext = external ?? isExternal(href);
  if (ext) {
    const http = href.startsWith("http");
    return (
      <a href={href} className={className} target={http ? "_blank" : undefined} rel={http ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Button({ href, children, variant = "primary", size = "md", className = "", external, arrow, icon }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${variant === "ghost" ? "text-[15px]" : `${sizes[size]} ${lift}`} ${className}`;
  return (
    <Anchor href={href} className={cls} external={external}>
      {icon}
      {variant === "ghost" ? children : <span className="btn-label">{children}</span>}
      {arrow && <ArrowRight className="size-4 transition-transform duration-[260ms] ease-smooth group-hover/btn:translate-x-1" aria-hidden />}
    </Anchor>
  );
}

/**
 * "View Details ↗" text link with a small square arrow (Transp card links).
 * `stretched` extends the click area over the nearest `relative` parent so the whole card is
 * genuinely clickable; only then should the card show hover lift.
 */
export function ArrowLink({
  href,
  children,
  className = "",
  dark = false,
  stretched = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  stretched?: boolean;
}) {
  const cls = `group/arrow inline-flex items-center gap-2.5 text-[14px] font-medium transition-colors duration-[260ms] ${
    dark ? "text-white hover:text-orange active:text-orange" : "text-navy-900 hover:text-orange-deep active:text-orange-deep"
  } ${stretched ? "after:absolute after:inset-0 after:content-['']" : ""} ${className}`;
  return (
    <Anchor href={href} className={cls}>
      {children}
      <span
        className={`inline-flex size-[18px] items-center justify-center transition-[background-color,color,translate] duration-[260ms] ease-smooth group-hover/arrow:translate-x-1 group-focus-visible/arrow:translate-x-1 ${
          stretched ? "group-hover/card:translate-x-1" : ""
        } ${dark ? "bg-orange text-navy-900 group-hover/arrow:bg-white" : "bg-navy text-white group-hover/arrow:bg-orange group-hover/arrow:text-navy-900"}`}
      >
        <ArrowUpRight className="size-3" aria-hidden />
      </span>
    </Anchor>
  );
}

/** Round accent play-style link ("How it works?") used beside the hero button. */
export function PlayLink({ href, children, dark = true }: { href: string; children: ReactNode; dark?: boolean }) {
  return (
    <Anchor href={href} className={`group inline-flex items-center gap-4 text-[15px] font-medium ${dark ? "text-white" : "text-navy-900"}`}>
      <span className="relative inline-flex size-[54px] items-center justify-center rounded-full bg-orange text-navy-900 ring-8 ring-orange/25 transition-[scale,box-shadow] duration-[260ms] ease-smooth group-hover:scale-105 group-hover:ring-orange/40 group-active:scale-95">
        <Play className="ml-0.5 size-5 fill-current" aria-hidden />
      </span>
      {children}
    </Anchor>
  );
}
