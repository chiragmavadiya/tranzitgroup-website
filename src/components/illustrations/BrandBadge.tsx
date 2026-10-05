import type { Integration } from "@/content/integrations";

/**
 * Consistent text wordmark for a courier or platform. Every integration renders the same way
 * (accent dot + name at a fixed size) so logos never look uneven, and no third-party logo
 * artwork is reproduced.
 */
export function BrandBadge({
  integration,
  size = "md",
  className = "",
}: {
  integration: Pick<Integration, "name" | "accent" | "status"> & { image?: unknown };
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const text = { sm: "text-[14px]", md: "text-[17px]", lg: "text-[20px]" }[size];
  const dot = { sm: "size-2", md: "size-2.5", lg: "size-3" }[size];
  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap font-heading font-semibold tracking-tight text-navy-900 ${text} ${className}`}>
      <span className={`inline-block ${dot} shrink-0 rounded-full`} style={{ background: integration.accent }} aria-hidden />
      {integration.name}
    </span>
  );
}
