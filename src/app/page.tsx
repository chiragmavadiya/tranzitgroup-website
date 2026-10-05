import { Zap, Printer, Globe, Bell, BarChart3, X, Boxes, PackageCheck, PackageSearch } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { routes, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button, ArrowLink } from "@/components/ui/Button";
import { SectionTitle, SectionHeader, Tag, CheckBadge } from "@/components/ui/Typography";
import { CustomerStrip, OfferCard, OfferGrid, CtaBand, FaqSection, TrustTicks } from "@/components/sections/Shared";
import { PricingSummary } from "@/components/sections/PricingSummary";
import { PortalShot, FocusShot, type Annotation, type FocusShotKey } from "@/components/illustrations/Mockups";
import { IntegrationFlow } from "@/components/sections/IntegrationFlow";
import { generalFaqs } from "@/content/faqs";

export const metadata = pageMetadata({
  title: "Tranzit Group | Ecommerce Shipping Automation Software",
  description:
    "Put your shipping on autopilot. Connect unlimited supported BYO courier accounts, link your Shopify, WooCommerce, eBay or Etsy store and ship from one dashboard. 30-day free trial, no lock-in contracts.",
  path: "/",
});

const features = [
  { icon: Globe, title: "Every carrier, one login", body: "Australia Post, Aramex, Couriers Please, StarTrack, TNT and more, managed from a single screen.", href: `${routes.services}#multi-carrier` },
  { icon: Zap, title: "Smart shipping rules", body: "Automate carrier choice by weight, value, zone or service level. Cheapest or fastest, your call.", href: `${routes.services}#multi-carrier` },
  { icon: Printer, title: "Bulk label printing", body: "Process a hundred orders as fast as one. Labels, manifests and packing slips in a single run.", href: `${routes.services}#bulk-labels` },
  { icon: PackageSearch, title: "Branded tracking pages", body: "Send customers to a tracking page that looks like your store, not a generic courier site.", href: `${routes.services}#tracking` },
  { icon: Bell, title: "Automated notifications", body: "Trigger SMS and email at dispatch, in transit and on delivery. Fewer \"where's my order?\" tickets.", href: `${routes.services}#tracking` },
  { icon: BarChart3, title: "Returns & analytics", body: "Self-serve returns plus a dashboard that shows spend, delivery speed and carrier performance.", href: `${routes.services}#analytics` },
];

const without = [
  "Re-key every order into a courier portal by hand",
  "Jump between carrier sites to find the best price",
  "Print labels one painful order at a time",
  "Paste tracking numbers back into your store",
  "Field \"where's my order?\" emails all day",
];
const withTranzit = [
  "Orders flow in from your store automatically",
  "Rules pick the cheapest or fastest carrier instantly",
  "Bulk-print hundreds of labels in one click",
  "Tracking syncs back and fulfils the order for you",
  "Branded tracking pages on your own domain",
];

/* Product tour: the four setup steps, each shown with a focused, annotated portal screenshot. */
const tour: { step: string; title: string; body: string; href: string; label: string; shot: FocusShotKey; notes: Annotation[] }[] = [
  {
    step: "Step 01",
    title: "Connect your store",
    body: "Link Shopify, WooCommerce, eBay, Squarespace, Shopline or Etsy in a couple of clicks. Orders sync straight away, and Temu and Amazon are on the way.",
    href: routes.integrations,
    label: "Explore integrations",
    shot: "stores",
    notes: [
      { x: 34, y: 11, label: "Connected stores are marked, so you can see what is syncing" },
      { x: 18, y: 76, label: "New platforms appear here as they go live" },
    ],
  },
  {
    step: "Step 02",
    title: "Set your rules and compare live rates",
    body: "Tell Tranzit to always pick the cheapest, the fastest or your preferred carrier per zone. Rules run on weight, value, zone or service level, and you can compare real carrier prices side by side before you commit a single label.",
    href: `${routes.services}#multi-carrier`,
    label: "Explore shipping rules",
    shot: "quote",
    notes: [
      { x: 84, y: 9, label: "The best-value service is flagged for you" },
      { x: 85, y: 47, label: "Live prices from every connected courier, side by side" },
    ],
  },
  {
    step: "Step 03",
    title: "Bulk-print labels",
    body: "Select today's orders and print every label at once, correctly formatted for thermal and A4 printers, with manifests and packing slips in the same run.",
    href: `${routes.services}#bulk-labels`,
    label: "Explore bulk labels",
    shot: "printLabels",
    notes: [
      { x: 6, y: 30, label: "Ready orders are consigned and printed in one run" },
      { x: 6, y: 54, label: "Orders with missing details are skipped, with the reason shown" },
      { x: 92, y: 86, label: "One click to print every label" },
    ],
  },
  {
    step: "Step 04",
    title: "Track",
    body: "Tracking syncs back automatically and every order is marked fulfilled in your store. Customers follow their parcel on a tracking page and get SMS and email updates.",
    href: `${routes.services}#tracking`,
    label: "Explore branded tracking",
    shot: "tracking",
    notes: [
      { x: 4, y: 45, label: "Customers see exactly where their parcel is" },
      { x: 4, y: 81, label: "Every step from pickup to delivery" },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ Hero ============ */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="dots-dark absolute inset-0" aria-hidden />
        <div className="diag-cut-left absolute inset-y-0 right-0 hidden w-[54%] bg-navy lg:block" aria-hidden />
        <Container className="relative grid items-center gap-14 pb-20 pt-16 lg:min-h-[620px] lg:grid-cols-[1.02fr_1fr] lg:gap-8 lg:pb-24 lg:pt-20">
          <div className="max-w-[640px]">
            <p className="mb-4 text-[15px] text-white/85">Shipping automation · Australia</p>
            <h1 className="mb-6 text-[40px] leading-[1.1] !text-white sm:text-[54px] lg:text-[64px]">
              Put your shipping on <span className="text-orange">autopilot.</span>
            </h1>
            <p className="hero-seq hero-seq-1 mb-9 max-w-[560px] text-[16px] leading-[1.75] text-white/85">
              Connect unlimited supported BYO courier accounts, link your ecommerce store and start shipping from one easy dashboard. Australian-owned,
              built for Shopify, WooCommerce, eBay and Etsy merchants.
            </p>
            <div className="hero-seq hero-seq-2 mb-9 flex flex-wrap items-center gap-3">
              <Button href={site.portal.register} size="lg">
                Start free trial
              </Button>
              <Button href={routes.demo} variant="outline-light" size="lg">
                Book a demo
              </Button>
            </div>
            <TrustTicks light items={["30 days free", "Unlimited supported BYO carriers", "No lock-in contracts"]} className="hero-seq hero-seq-3" />
          </div>
          <div className="hero-visual relative mx-auto w-full min-w-0 max-w-[680px]">
            <div className="slash absolute -bottom-8 -right-5 z-10 h-28 w-20 bg-orange" aria-hidden />
            <div className="relative border-[6px] border-white/10 bg-white/5">
              <PortalShot shot="hero" priority />
            </div>
          </div>
        </Container>
      </section>

      {/* ============ Customer proof, directly under the hero ============ */}
      <CustomerStrip
        label={
          <>
            Trusted by <span className="text-orange-deep">Australian merchants</span>
          </>
        }
      />

      {/* ============ Features ============ */}
      <section id="features" className="scroll-mt-24 pt-20 lg:pt-24">
        <Container>
          <SectionHeader
            title="The shipping workflow, fully loaded"
            description="Everything in one place. Each feature is built to cut a manual job out of your week."
            action={
              <Button href={routes.services} size="sm" icon={<Boxes className="size-4" aria-hidden />}>
                Explore the platform
              </Button>
            }
            className="mb-12"
          />
        </Container>
        <OfferGrid>
          {features.map((f) => (
            <OfferCard key={f.title} {...f} />
          ))}
        </OfferGrid>
      </section>

      {/* ============ Before / after: problem on sand, solution on navy ============ */}
      <section className="relative overflow-hidden bg-sand">
        <div className="grid lg:grid-cols-2">
          <div className="relative z-10 px-4 py-16 sm:px-6 lg:py-20 lg:pl-[max(1.5rem,calc((100vw-1360px)/2))] lg:pr-20" data-reveal="left">
            <Tag className="mb-4">The shipping time-sink</Tag>
            <SectionTitle className="mb-4 max-w-[560px]">Reclaim the hours lost to shipping admin.</SectionTitle>
            <p className="mb-8 max-w-[560px] text-[15.5px] leading-[1.8] text-navy-900/80">
              Most merchants burn hours every week copying orders, comparing rates and chasing tracking. Tranzit turns all of it into a few clicks.
            </p>
            <p className="mb-1 flex items-center gap-2 font-heading text-[19px] font-semibold text-navy">
              <X className="size-5 text-red-600" aria-hidden /> Without Tranzit
            </p>
            <p className="mb-4 text-[15px] font-medium text-navy-900">Death by a thousand tabs</p>
            <ul className="space-y-2.5 text-[15px] leading-snug text-navy-900/80">
              {without.map((t) => (
                <li key={t} className="flex gap-3">
                  <X className="mt-0.5 size-4 shrink-0 text-red-600/70" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="dots-dark absolute inset-0 bg-navy lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]" aria-hidden />
            <div className="relative flex h-full flex-col justify-center px-4 py-16 text-white sm:px-6 lg:py-20 lg:pl-[22%] lg:pr-[max(1.5rem,calc((100vw-1360px)/2))]" data-reveal="right" data-reveal-delay="1">
              <p className="mb-1 flex items-center gap-2 font-heading text-[19px] font-semibold text-white">
                <PackageCheck className="size-5 text-orange" aria-hidden /> With Tranzit
              </p>
              <p className="mb-4 text-[15px] font-medium text-orange">One dashboard, fully automated</p>
              <ul className="mb-8 space-y-2.5 text-[15px] leading-snug text-white/90">
                {withTranzit.map((t) => (
                  <li key={t} className="flex gap-3">
                    <CheckBadge /> {t}
                  </li>
                ))}
              </ul>
              <div>
                <Button href={routes.services} variant="white" size="sm">
                  See everything Tranzit automates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Product tour: how it works ============ */}
      <section id="how-it-works" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <SectionHeader
            centered
            eyebrow="From cart to courier in four steps"
            title="Set it up once. Let it run."
            description="No developers, no spreadsheets. Connect your store and Tranzit handles fulfilment from there."
            className="mb-12 lg:mb-14"
          />
          <div className="space-y-14 lg:space-y-16">
            {tour.map((t, i) => (
              <div key={t.title} className={`grid items-center gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="max-w-[480px]" data-reveal={i % 2 ? "right" : "left"}>
                  <Tag className="mb-4">{t.step}</Tag>
                  <h3 className="mb-4 text-[28px] leading-tight sm:text-[32px]">{t.title}</h3>
                  <p className="mb-6 text-[15.5px] leading-[1.8] text-muted">{t.body}</p>
                  <ArrowLink href={t.href}>{t.label}</ArrowLink>
                </div>
                <div className={`flex min-w-0 ${i % 2 ? "lg:justify-start" : "lg:justify-end"}`}>
                  <FocusShot shot={t.shot} annotations={t.notes} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ Integrations ============ */}
      <section className="bg-surface py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Connects to your stack"
            title="Already running your store? Good."
            description="Tranzit slots into the platforms you sell on and the couriers you already ship with. No migration, no rebuild."
            action={
              <Button href={routes.integrations} size="sm" icon={<Boxes className="size-4" aria-hidden />}>
                View all integrations
              </Button>
            }
            className="mb-10"
          />
          <div className="mx-auto max-w-[920px] border-b-8 border-orange bg-white px-5 py-9 shadow-card sm:px-10 lg:px-14 lg:py-12" data-reveal>
            <IntegrationFlow tone="light" />
          </div>
        </Container>
      </section>

      {/* ============ Pricing ============ */}
      <PricingSummary background="bg-white" />

      {/* ============ FAQs ============ */}
      <FaqSection
        eyebrow="Good questions"
        title="The answers you need."
        items={generalFaqs}
        background="bg-surface"
        intro="Have a read through some of our FAQs or contact our team for help."
      />

      {/* ============ Final CTA ============ */}
      <CtaBand title="Ship smarter, starting today.">
        Use Tranzit, connect your couriers and ecommerce store, and start shipping today.
      </CtaBand>
    </>
  );
}
