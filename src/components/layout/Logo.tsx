import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "colour", className = "", priority = false }: { variant?: "colour" | "white"; className?: string; priority?: boolean }) {
  const src = variant === "white" ? "/brand/tranzit-logo-white.png" : "/brand/tranzit-logo.png";
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Tranzit Group home">
      <Image src={src} alt="Tranzit Group" width={1400} height={445} priority={priority} sizes="168px" className="h-auto w-[150px] sm:w-[168px]" />
    </Link>
  );
}

/** Decorative "TR" mark pulled from the Tranzit app icon, drawn as an SVG for backgrounds. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <path d="M22 28h28l-3 9H36l-9 35H17l9-35H19z" fill="currentColor" />
      <path d="M50 44h12c8 0 12 4 10 11-1 5-5 8-10 9l8 11h-11l-7-10h-2l-3 10h-9zm9 7-2 7h4c3 0 5-1 6-3 1-3-1-4-4-4z" fill="currentColor" opacity=".7" />
    </svg>
  );
}
