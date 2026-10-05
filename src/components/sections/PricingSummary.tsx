import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader, CheckBadge } from "@/components/ui/Typography";
import { routes, site } from "@/lib/site";

/*
 * One offer, shown as one panel with two stages: the 30-day free trial, then per-label
 * pricing. Replaces the three-card layout, which read as three separate plans.
 */
const trialIncludes = [
  "Connect unlimited supported BYO courier accounts",
  "Connect supported ecommerce integrations",
  "Import orders automatically",
  "Compare live courier rates",
  "Create and bulk-print shipping labels",
  "Manage orders, tracking and fulfilment",
  "Access supported Tranzit courier services",
  "No lock-in contract",
];

const afterIncludes = [
  "No monthly subscription fee",
  "Pay only for labels generated through the Tranzit Group portal",
  "Continue using unlimited BYO courier accounts",
  "Continue using supported ecommerce integrations such as Shopify, WooCommerce, eBay and Etsy",
  "Volume-based weekly parcel tiers",
  "Lower per-label rates may apply as your volume grows",
];

export function PricingSummary({ detailed = false, heading = true, background = "bg-surface" }: { detailed?: boolean; heading?: boolean; background?: string }) {
  const trial = detailed ? trialIncludes : trialIncludes.slice(0, 4);
  const after = detailed ? afterIncludes : afterIncludes.slice(0, 3);
  return (
    <section className={`dots-light ${background} py-20 lg:py-24`}>
      <Container>
        {heading && (
          <SectionHeader
            centered
            eyebrow="Pricing"
            title="Start free, then pay as you ship."
            description="One simple offer: use Tranzit free for 30 days, then pay only for the labels you generate."
            className="mb-12"
          />
        )}
        <div className="grid shadow-card lg:grid-cols-[1fr_auto_1fr]" data-reveal-group>
          {/* Stage 1 */}
          <div className="border-b-8 border-orange bg-white p-8 sm:p-10">
            <p className="mb-3 text-[14px] font-medium text-orange-deep">Days 1–30 · Free trial</p>
            {detailed && <h2 className="mb-4 text-[26px]">Everything you need to start shipping.</h2>}
            <p className="mb-1 font-heading text-[46px] font-semibold leading-none text-navy">
              $0 <span className="text-[16px] font-medium text-muted">for 30 days</span>
            </p>
            <p className="mb-6 text-[14px] text-muted">No software or Tranzit label fees during the trial.</p>
            <ul className="space-y-3 text-[14.5px] text-muted">
              {trial.map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckBadge tone="navy" /> {t}
                </li>
              ))}
            </ul>
          </div>
          {/* Connector */}
          <div className="flex items-center justify-center bg-surface-2 px-4 py-3 lg:px-3">
            <span className="flex size-12 items-center justify-center rounded-full bg-orange text-navy-900 shadow-card">
              <ArrowRight className="size-5 rotate-90 lg:rotate-0" aria-hidden />
            </span>
            <span className="sr-only">then</span>
          </div>
          {/* Stage 2 */}
          <div className="dots-dark border-b-8 border-orange bg-navy p-8 text-white sm:p-10">
            <p className="mb-3 text-[14px] font-medium text-orange">From day 31 · Pay per label</p>
            {detailed && <h2 className="mb-4 text-[26px] !text-white">Simple per-label pricing.</h2>}
            <p className="mb-1 font-heading text-[46px] font-semibold leading-none text-white">
              <span className="text-[16px] font-medium text-white/70">From</span> $0.02{" "}
              <span className="text-[16px] font-medium text-white/70">/label</span>
            </p>
            <p className="mb-6 text-[14px] text-white/75">Your rate depends on your eligible weekly parcel-volume tier.</p>
            <ul className="space-y-3 text-[14.5px] text-white/90">
              {after.map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckBadge /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-5 text-center" data-reveal data-reveal-delay="2">
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={site.portal.register} size="lg">
              Start free trial
            </Button>
            <Button href={routes.pricingEnquiry} variant="outline" size="lg">
              Get your label rate
            </Button>
          </div>
          <p className="max-w-[900px] text-[13px] leading-relaxed text-muted">
            All prices are in AUD and exclude GST. The advertised $0.02 per-label rate applies to eligible weekly parcel-volume tiers. Courier freight
            charges, fuel levies, surcharges and optional courier services remain payable, including during the trial.
            {!detailed && (
              <>
                {" "}
                <a href={routes.pricing} className="font-medium text-navy underline underline-offset-2">
                  Full pricing details
                </a>
              </>
            )}
          </p>
        </div>
      </Container>
    </section>
  );
}
