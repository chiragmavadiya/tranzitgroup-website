import { PackageSearch, Bell, RotateCcw, BarChart3, Store, Code2, SlidersHorizontal, Tags, Truck, Printer, Rocket, Boxes } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { routes, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button, ArrowLink, PlayLink } from "@/components/ui/Button";
import { Breadcrumbs, SectionTitle, SectionHeader, CheckBadge, Tag } from "@/components/ui/Typography";
import {
  CustomerStrip,
  IntegrationsCard,
  SupportSplit,
  CtaBand,
  FaqSection,
  TrustTicks,
  OfferCard,
  OfferGrid,
  MediaFrame,
  VisualPanel,
} from "@/components/sections/Shared";
import { AnalyticsMock, DashboardFrame, PortalShot } from "@/components/illustrations/Mockups";
import { platformFaqs } from "@/content/faqs";

export const metadata = pageMetadata({
  title: "Shipping automation platform for Australian ecommerce",
  description:
    "Everything your shipping desk does, automated. Multi-carrier shipping, bulk labels, branded tracking, notifications, returns and analytics from one Tranzit dashboard.",
  path: routes.services,
});

const toolkit = [
  { icon: PackageSearch, title: "Branded tracking", body: "A tracking page in your colours and logo. Keep customers on your brand, not a courier's.", href: "#tracking" },
  { icon: Bell, title: "Notifications", body: "Automated SMS and email at every milestone, cutting \"where's my order?\" tickets right down.", href: "#tracking" },
  { icon: RotateCcw, title: "Self-serve returns", body: "Give customers a returns portal that generates labels and keeps you in the loop.", href: "#analytics" },
  { icon: BarChart3, title: "Analytics", body: "Spend, delivery speed and carrier performance. The numbers you need to negotiate better.", href: "#analytics" },
  { icon: Store, title: "Multi-store", body: "Run several storefronts or warehouses? Manage them all from one Tranzit account.", href: routes.contact },
  { icon: Code2, title: "Developer API", body: "Quote, book and track programmatically with a clean REST API and webhooks.", href: routes.contact },
];

const steps = [
  { icon: Store, t: "Connect your store", d: "Link Shopify, WooCommerce, eBay, Etsy or another supported platform in a couple of clicks. Orders sync straight away." },
  { icon: SlidersHorizontal, t: "Set your rules", d: "Tell Tranzit to always pick the cheapest, the fastest or your preferred carrier per zone." },
  { icon: Tags, t: "Bulk-print labels", d: "Select today's orders and print every label at once, correctly formatted, every time." },
  { icon: Truck, t: "Track", d: "Tracking syncs back automatically and every order is marked fulfilled in your store. No manual copy-pasting." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ============ Hero ============ */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="dots-dark absolute inset-0" aria-hidden />
        <div className="diag-cut-left absolute inset-y-0 right-0 hidden w-[54%] bg-navy lg:block" aria-hidden />
        <Container className="relative pb-20 pt-10 lg:pb-24 lg:pt-12">
          <Breadcrumbs light items={[{ label: "Home", href: "/" }, { label: "Shipping automation platform" }]} />
          <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.02fr_1fr] lg:gap-8">
            <div className="max-w-[640px]">
              <p className="mb-4 text-[15px] text-white/85">Shipping platform for Australian merchants</p>
              <h1 className="mb-6 text-[38px] leading-[1.1] !text-white sm:text-[50px] lg:text-[60px]">
                Everything your shipping desk does, <span className="text-orange">automated</span>
              </h1>
              <p className="hero-seq hero-seq-1 mb-4 text-[16.5px] font-semibold leading-relaxed text-white">
                Connect your store and carriers, then manage labels, tracking and automation in one place.
              </p>
              <p className="hero-seq hero-seq-1 mb-9 text-[15.5px] leading-[1.8] text-white/80">
                From the moment an order lands to the second it&apos;s delivered, Tranzit handles the busywork so your team can focus on the things that
                grow the business.
              </p>
              <div className="hero-seq hero-seq-2 mb-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Button href={site.portal.register} size="lg">
                  Start free trial
                </Button>
                <PlayLink href={routes.demo}>Book a demo</PlayLink>
              </div>
              <TrustTicks light items={["30-day free trial", "No lock-in contracts", "Unlimited BYO carriers"]} className="hero-seq hero-seq-3 mb-5" />
              <p className="hero-seq hero-seq-3 text-[14px] text-white/70">
                Existing customer?{" "}
                <a href={site.portal.login} className="font-medium text-orange-light underline underline-offset-4 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Log in to the portal.
                </a>
              </p>
            </div>
            <div className="hero-visual relative mx-auto w-full min-w-0 max-w-[640px]">
              <div className="slash absolute -left-6 -top-8 z-10 h-28 w-20 bg-orange" aria-hidden />
              <div className="relative border-[6px] border-white/10 bg-white/5 p-3 sm:p-5 sm:pb-28">
                <PortalShot shot="orders" priority className="w-full" />
              </div>
              <PortalShot shot="tracking" className="absolute -bottom-10 left-8 hidden w-[38%] sm:block" sizes="260px" />
              <div className="absolute -bottom-6 right-4 hidden items-center gap-3 bg-white px-5 py-4 text-navy-900 shadow-float sm:flex">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-orange text-navy-900">
                  <Rocket className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-heading text-[16px] font-semibold leading-tight text-navy">The live Tranzit portal</span>
                  <span className="block text-[12.5px] text-muted">Orders, rules and tracking in one place</span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CustomerStrip label={<>Customers we work with across <span className="text-orange-deep">Australia</span></>} />

      {/* ============ The cost of manual shipping ============ */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader centered eyebrow="The shipping time-sink" title="Shipping gets harder as you grow. Tranzit keeps it under control." className="mb-14" />
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <MediaFrame>
              <VisualPanel tone="sky" className="min-h-[380px]">
                <PortalShot shot="rules" className="w-full" />
              </VisualPanel>
            </MediaFrame>
            <div data-reveal="right" data-reveal-delay="1">
              <h3 className="mb-4 text-[28px] leading-tight sm:text-[32px]">One dashboard instead of five portals</h3>
              <p className="mb-5 text-[15.5px] leading-[1.8] text-muted">
                Most merchants burn hours every week re-keying orders into courier portals, jumping between carrier sites to find the best price, printing
                labels one order at a time and pasting tracking numbers back into their store.
              </p>
              <p className="mb-8 text-[15.5px] font-semibold leading-[1.8] text-navy-900">
                Tranzit brings it all into one dashboard, so orders flow in automatically, rules pick the carrier and tracking syncs back for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href={site.portal.register} variant="navy" icon={<Rocket className="size-4" aria-hidden />}>
                  Start free trial
                </Button>
                <Button href={routes.demo} variant="grey">
                  Book a demo
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ Pale accent diagonal split → One dashboard ============ */}
      <section className="relative overflow-hidden bg-sand">
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <div className="relative z-10 px-4 py-16 sm:px-6 lg:py-20 lg:pl-[max(1.5rem,calc((100vw-1360px)/2))] lg:pr-16" data-reveal="left">
            <Tag className="mb-4">One dashboard for shipping automation</Tag>
            <SectionTitle className="mb-5 max-w-[600px]">Your whole fulfilment day, on one screen.</SectionTitle>
            <p className="mb-4 max-w-[600px] text-[15.5px] leading-[1.8] text-navy-900/80">
              See every order at a glance: new, ready-to-ship, in transit and delivered, colour-coded and filterable. Compare real carrier prices side by
              side before you commit a single label.
            </p>
            <p className="mb-8 max-w-[600px] text-[15.5px] font-semibold leading-[1.8] text-navy-900">
              Track shipping cost per order, per carrier and per week in one place, so the spend you see is the spend you pay.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button href={routes.demo} variant="navy" size="sm">
                Book a demo
              </Button>
              <Button href={routes.pricing} variant="ghost" arrow>
                See pricing
              </Button>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-0">
            <div className="dots-dark absolute inset-0 bg-navy lg:[clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]" aria-hidden />
            <div className="relative flex h-full items-center p-6 sm:p-10 lg:pl-[20%]" data-reveal="right" data-reveal-delay="1">
              <DashboardFrame className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ Why Tranzit (offer cards over navy band) ============ */}
      <section className="pt-20 lg:pt-24">
        <Container>
          <SectionHeader
            eyebrow="Why Tranzit"
            title={
              <>
                More orders out the door. <br className="hidden lg:block" />
                Less work to get them there.
              </>
            }
            description="Tranzit automates the repeat work behind every shipment, so you can scale fulfilment with more control."
            className="mb-12"
          />
        </Container>
        <OfferGrid>
          <OfferCard icon={SlidersHorizontal} title="Cheapest or fastest" body="Smart rules pick the carrier on every order so nobody compares rates by hand." href="#multi-carrier" />
          <OfferCard icon={Printer} title="One click, not one hundred" body="Process a hundred orders as fast as one with bulk labels, manifests and packing slips." href="#bulk-labels" />
          <OfferCard icon={Bell} title="Fewer tickets" body={"Branded tracking and automated SMS and email cut \"where's my order?\" emails right down."} href="#tracking" />
        </OfferGrid>
        <Container className="relative -mt-6 pb-20 lg:pb-24">
          <div className="border-l-8 border-orange bg-white p-7 shadow-card sm:p-9" data-reveal>
            <h3 className="mb-2 text-[24px]">Growing your order volume shouldn&apos;t mean more per-label fees.</h3>
            <p className="text-[15px] leading-relaxed text-muted">
              Bring your own carrier accounts and ship at your negotiated rates with zero markup. After your free trial there is no monthly subscription:
              you only pay for labels generated through Tranzit, and lower per-label rates may apply as your volume grows.
            </p>
          </div>
        </Container>
      </section>

      {/* ============ BYO vs ours ============ */}
      <section className="bg-surface py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <MediaFrame>
              <VisualPanel tone="navy" className="min-h-[380px]">
                <PortalShot shot="carriers" className="w-full" />
              </VisualPanel>
            </MediaFrame>
            <div>
              <SectionHeader title="Your carrier accounts, or ours. Or both." className="mb-7" />
              <ul className="mb-8 space-y-4 text-[15.5px] text-muted" data-reveal="right" data-reveal-delay="1">
                <li className="flex gap-3">
                  <CheckBadge tone="plain" />
                  <span>
                    <strong className="font-semibold text-navy-900">Bring your own accounts.</strong> Ship at your negotiated rates with zero markup.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckBadge tone="plain" />
                  <span>
                    <strong className="font-semibold text-navy-900">Or use ours.</strong> Access pre-negotiated rates from day one. No contracts to chase.
                  </span>
                </li>
              </ul>
              <Button href={routes.pricing} variant="navy">
                See pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ How it works (timeline) ============ */}
      <section className="dots-light py-20 lg:py-28">
        <Container>
          <SectionHeader centered eyebrow="How it works" title="How Tranzit moves orders from cart to courier" className="mb-14" />
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div className="relative min-w-0 sm:pb-16" data-reveal="scale">
              <VisualPanel tone="sky" className="min-h-[360px] sm:min-h-[440px]">
                <PortalShot shot="printLabels" className="w-full max-w-[480px]" sizes="(min-width: 1024px) 480px, 100vw" />
              </VisualPanel>
              <div className="relative mx-4 -mt-10 bg-navy p-6 text-white shadow-float sm:absolute sm:bottom-0 sm:left-10 sm:mx-0 sm:mt-0 sm:max-w-[420px]">
                <p className="mb-1 font-heading text-[20px] font-semibold leading-snug text-white">From cart to courier in four steps</p>
                <p className="text-[14px] leading-relaxed text-white/80">No developers, no spreadsheets.</p>
              </div>
            </div>
            <div className="relative" data-reveal="fade">
            <div className="absolute bottom-12 left-[31px] top-12 border-l-2 border-dashed border-navy/30" aria-hidden />
            <ol className="relative" data-reveal-group>
              {steps.map(({ icon: Icon, t, d }, i) => (
                <li key={t} className="relative flex gap-6 pb-9 last:pb-0">
                  <span className="relative z-10 inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-sand text-navy ring-8 ring-white">
                    <Icon className="size-6" strokeWidth={1.6} aria-hidden />
                  </span>
                  <div className="pt-1.5">
                    <h3 className="mb-1 text-[21px] leading-snug">
                      <span className="mr-2 text-orange-deep">0{i + 1}.</span>
                      {t}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            </div>
          </div>
          <IntegrationsCard className="mt-20" />
        </Container>
      </section>

      {/* ============ Explore the features ============ */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeader centered eyebrow="Explore the platform" title="Explore the features that power smarter shipping" className="mb-16" />
          <div className="space-y-20 lg:space-y-28">
            <Feature
              id="multi-carrier"
              eyebrow="01 · Multi-carrier shipping"
              title="Every courier, one place."
              body="Stop logging into five different portals. Connect Australia Post, Aramex, Couriers Please, StarTrack, TNT and more, then book, label and track every shipment from a single screen. Smart rules automate carrier choice by weight, value, zone or service level."
              bullets={[
                ["Bring your own accounts", "Ship at your negotiated rates with zero markup."],
                ["Or use ours", "Access pre-negotiated rates from day one, no contracts to chase."],
              ]}
              links={[
                { href: routes.integrations, label: "Explore carrier integrations" },
                { href: routes.pricing, label: "Explore BYO accounts and Tranzit rates" },
              ]}
              media={<PortalShot shot="quote" className="w-full" />}
            />
            <Feature
              id="bulk-labels"
              eyebrow="02 · Bulk labels & fulfilment"
              title="A hundred orders, one click."
              body="Select the day's orders and print every label, manifest and packing slip in a single run. Thermal and A4 ready, correctly formatted for every printer. Tranzit writes tracking numbers back to your store and marks each order fulfilled automatically."
              bullets={[
                ["Thermal & A4 ready", "Correctly formatted for every printer."],
                ["Auto-fulfilment", "No more copy-pasting tracking numbers."],
              ]}
              links={[{ href: site.portal.register, label: "Start free trial" }]}
              media={<PortalShot shot="printLabels" className="w-full max-w-[480px]" sizes="(min-width: 1024px) 480px, 100vw" />}
              reverse
            />
            <Feature
              id="tracking"
              eyebrow="03 · Branded tracking & notifications"
              title="Keep customers on your brand, not a courier's."
              body="Send customers to a tracking page in your colours and logo. Trigger SMS and email at dispatch, in transit and on delivery, so fewer customers need to ask where their order is."
              links={[{ href: routes.demo, label: "See branded tracking in a demo" }]}
              media={<PortalShot shot="tracking" className="w-full max-w-[480px]" sizes="(min-width: 1024px) 480px, 100vw" />}
            />
            <Feature
              id="analytics"
              eyebrow="04 · Returns & analytics"
              title="Turn shipping data into better decisions."
              body="Give customers a self-serve returns portal that generates labels and keeps you in the loop. Then use the analytics dashboard to see spend, delivery speed and carrier performance: the numbers you need to negotiate better."
              links={[{ href: routes.demo, label: "Explore returns and analytics" }]}
              media={<AnalyticsMock className="w-full max-w-[420px]" />}
              reverse
            />
          </div>
          <div className="mt-16 text-center" data-reveal>
            <Button href={site.portal.register} size="lg">
              Start free trial
            </Button>
          </div>
        </Container>
      </section>

      {/* ============ Toolkit ============ */}
      <section id="toolkit" className="scroll-mt-24 pt-20 lg:pt-24">
        <Container>
          <SectionHeader
            eyebrow="And the rest of the toolkit"
            title="More ways Tranzit pulls its weight"
            action={
              <Button href={routes.contact} size="sm" icon={<Boxes className="size-4" aria-hidden />}>
                Speak to the Tranzit team
              </Button>
            }
            className="mb-12"
          />
        </Container>
        <OfferGrid>
          {toolkit.map((t) => (
            <OfferCard key={t.title} {...t} />
          ))}
        </OfferGrid>
      </section>

      <SupportSplit />

      <FaqSection
        title="Shipping platform FAQs"
        items={platformFaqs}
        visual={
          <MediaFrame>
            <VisualPanel tone="sky" className="min-h-[340px]">
              <PortalShot shot="quote" className="w-full" />
            </VisualPanel>
          </MediaFrame>
        }
      />

      <CtaBand title="See it run on your store.">Connect in minutes and print your first label free, no card required.</CtaBand>
    </>
  );
}

function Feature({
  id,
  eyebrow,
  title,
  body,
  links,
  media,
  bullets,
  reverse = false,
}: {
  bullets?: [string, string][];
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  links: { href: string; label: string }[];
  media: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div id={id} className={`grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-16 ${reverse ? "" : "lg:[&>*:first-child]:order-2"}`}>
      <div className="max-w-[540px]" data-reveal={reverse ? "left" : "right"}>
        <Tag className="mb-4">{eyebrow}</Tag>
        <h3 className="mb-4 text-[28px] leading-tight sm:text-[34px]">{title}</h3>
        <p className="mb-6 text-[15.5px] leading-[1.8] text-muted">{body}</p>
        {bullets && (
          <ul className="mb-6 grid gap-3 sm:grid-cols-2">
            {bullets.map(([t, d]) => (
              <li key={t} className="flex gap-3">
                <CheckBadge tone="plain" />
                <span>
                  <span className="block text-[15px] font-semibold text-navy-900">{t}</span>
                  <span className="text-[14px] leading-snug text-muted">{d}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-col items-start gap-3">
          {links.map((l) => (
            <ArrowLink key={l.label} href={l.href}>
              {l.label}
            </ArrowLink>
          ))}
        </div>
      </div>
      <MediaFrame>
        <VisualPanel tone={reverse ? "navy" : "sky"} className="min-h-[360px]">
          {media}
        </VisualPanel>
      </MediaFrame>
    </div>
  );
}
