import { Sparkles, Unlock, Headset, Gauge, BadgeCheck, MapPin, CalendarDays, Flag, Rocket } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { routes, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader, PageHero } from "@/components/ui/Typography";
import { CustomerStrip, CtaBand, BenefitBand, OfferCard, OfferGrid, MediaFrame } from "@/components/sections/Shared";
import { DashboardFrame } from "@/components/illustrations/Mockups";

export const metadata = pageMetadata({
  title: "About us",
  description:
    "Tranzit Group is an Australian-owned shipping automation platform founded in Melbourne in 2023, built to give every online store the shipping tools that used to belong only to the big end of town.",
  path: routes.about,
});

const principles = [
  { icon: Sparkles, title: "Ruthlessly simple", body: "Powerful doesn't have to mean complicated. If a merchant needs a manual to ship a parcel, we've failed." },
  { icon: Unlock, title: "No lock-in, ever", body: "We earn your business every month. No contracts, no hostage data, no sneaky per-label fees." },
  { icon: Headset, title: "Real human support", body: "When you need a hand you get a person who knows shipping, not a chatbot reading from a script." },
  { icon: Gauge, title: "Built for speed", body: "Every feature is judged on one thing: does it give merchants their time back? If not, it doesn't ship." },
  { icon: BadgeCheck, title: "Honest by default", body: "Transparent pricing, clear rates and no surprises on the invoice. The way it should be." },
  { icon: MapPin, title: "Proudly local", body: "Australian-owned, Australian-run, and built around the carriers and customers we actually know." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Tranzit Group"
        title={
          <>
            We built Tranzit because shipping shouldn&apos;t be <span className="text-orange">the hard part.</span>
          </>
        }
        intro="Tranzit Group is an Australian-owned platform on a simple mission: give every online store the shipping superpowers that used to belong only to the big end of town."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader centered eyebrow="Our story" title="Born in a warehouse, not a boardroom." className="mb-14" />
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <MediaFrame>
              <DashboardFrame />
            </MediaFrame>
            <div className="space-y-5 text-[15.5px] leading-[1.8] text-muted" data-reveal="right" data-reveal-delay="1">
              <p>
                Tranzit started the way most good tools do: out of frustration. Our founders ran an ecommerce store and watched their team lose hours every
                day bouncing between courier portals, copying addresses and chasing tracking numbers.
              </p>
              <p>
                They couldn&apos;t find software that was powerful enough for serious volume but simple enough to set up before lunch. So they built it.
                What began as an internal tool to save their own team is now the platform Australian merchants rely on to ship smarter.
              </p>
              <p className="font-semibold text-navy-900">
                Today Tranzit connects stores to every major carrier in the country, automates the boring bits and hands businesses back the hours they were
                losing to shipping admin.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
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

      <BenefitBand
        title="Australian-owned, Australian-run"
        intro="Built around the carriers and customers we actually know."
        items={[
          { icon: CalendarDays, label: site.foundedYear, sub: "Founded" },
          { icon: MapPin, label: site.foundedCity, sub: "Home base" },
          { icon: Flag, label: "Australian", sub: "Owned and run" },
          { icon: Unlock, label: "No lock-in", sub: "Ever" },
        ]}
      />

      <section className="pt-20 lg:pt-24">
        <Container>
          <SectionHeader eyebrow="What we stand for" title="The principles behind the product." className="mb-12" />
        </Container>
        <OfferGrid>
          {principles.map((p) => (
            <OfferCard key={p.title} {...p} />
          ))}
        </OfferGrid>
      </section>

      <CustomerStrip label="Customers we work with" />

      <CtaBand title="Come ship with us.">Join the Australian merchants getting their time back, one parcel at a time.</CtaBand>
    </>
  );
}
