import { ArrowDown, Link2, Truck } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { routes, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero, SectionHeader } from "@/components/ui/Typography";
import { CustomerStrip, CtaBand, FaqSection, OfferCard, MediaFrame, VisualPanel } from "@/components/sections/Shared";
import { BrandBadge } from "@/components/illustrations/BrandBadge";
import { PortalShot } from "@/components/illustrations/Mockups";
import { IntegrationsExplorer } from "@/components/sections/IntegrationsExplorer";
import { IntegrationFlow } from "@/components/sections/IntegrationFlow";
import { integrations } from "@/content/integrations";
import { integrationFaqs } from "@/content/faqs";

export const metadata = pageMetadata({
  title: "Integrations: couriers and ecommerce platforms",
  description:
    "Tranzit connects Shopify, WooCommerce, eBay, Squarespace, Shopline and Etsy with Australia Post, Aramex, Couriers Please, StarTrack, TNT and more. Bring your own courier accounts or use Tranzit's supported courier services.",
  path: routes.integrations,
});

export default function IntegrationsPage() {
  const available = integrations.filter((i) => i.status === "available");
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Integrations" }]}
        eyebrow="Integrations"
        title={
          <>
            Connects to your <span className="text-orange">stack</span>
          </>
        }
        intro="Already running your store? Good. Tranzit slots into the platforms you sell on and the couriers you already ship with. No migration, no rebuild."
        wideAside
        aside={<IntegrationFlow tone="dark" />}
      >
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button href={site.portal.register} size="lg">
            Start free trial
          </Button>
          <a href="#explore" className="group inline-flex items-center gap-3 text-[15px] font-medium text-white hover:text-orange-light">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-orange text-navy-900 ring-8 ring-orange/25 transition-transform group-hover:translate-y-0.5">
              <ArrowDown className="size-4" aria-hidden />
            </span>
            See all integrations
          </a>
        </div>
      </PageHero>

      <section id="explore" className="dots-light scroll-mt-24 bg-surface py-16 lg:py-20">
        <Container>
          <SectionHeader title="Couriers and ecommerce platforms" description="Search and filter every integration Tranzit supports today and the ones on the way." className="mb-10" />
          <div data-reveal>
            <IntegrationsExplorer items={integrations} />
          </div>
        </Container>
      </section>

      <CustomerStrip label="Customers we work with" />

      {/* BYO vs Tranzit rates */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <MediaFrame>
              <VisualPanel tone="navy" className="min-h-[380px]">
                <PortalShot shot="carriers" className="w-full" />
              </VisualPanel>
            </MediaFrame>
            <div>
              <SectionHeader title="Your carrier accounts, or ours." className="mb-8" />
              <div className="grid gap-6" data-reveal-group>
                <OfferCard
                  icon={Link2}
                  title="Bring your own accounts"
                  body="Connect unlimited supported BYO courier accounts and ship at your negotiated rates with zero markup. Your contracts, your pricing, one dashboard."
                />
                <OfferCard
                  icon={Truck}
                  title="Or use ours"
                  body="Access Tranzit's supported courier services with pre-negotiated rates from day one. No contracts to chase. Many merchants combine both to get the best price on every shipment."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection
        title="Integration FAQs"
        items={integrationFaqs}
        background="bg-surface"
        visual={
          <div className="bg-white p-8 shadow-card" data-reveal="scale">
            <p className="mb-5 font-heading text-[18px] font-semibold text-navy">Available today</p>
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {available.map((i) => (
                <li key={i.slug}>
                  <BrandBadge integration={i} size="md" />
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <CtaBand title="Ship smarter, starting today.">
        Connect your couriers and ecommerce store, then manage your shipping from one simple platform. No software or label fees during your 30-day trial.
      </CtaBand>
    </>
  );
}
