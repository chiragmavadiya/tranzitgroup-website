import type { ElementType, ReactNode } from "react";
import { DollarSign, Headset, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button, ArrowLink } from "@/components/ui/Button";
import { Highlight, SectionTitle, SectionHeader, CheckBadge, Mark, Tag } from "@/components/ui/Typography";
import { BrandBadge } from "@/components/illustrations/BrandBadge";
import { customers, integrations } from "@/content/integrations";
import { testimonials } from "@/content/testimonials";
import type { Faq } from "@/content/faqs";
import { FaqAccordion } from "./Faq";
import { IntegrationFlow } from "./IntegrationFlow";
import { routes, site } from "@/lib/site";

/* =========================================================================
 * Transp-style building blocks. Each mirrors a section of the reference
 * template and receives Tranzit content as props.
 * ========================================================================= */

/* ---------- "We are trusted by …" strip (pale blue band, label left, logos right) ---------- */
function TrustedStrip({ label, children, className = "", ariaLabel }: { label: ReactNode; children: ReactNode; className?: string; ariaLabel: string }) {
  return (
    <section className={`bg-sky py-9 lg:py-11 ${className}`} aria-label={ariaLabel}>
      <Container className="grid items-center gap-6 lg:grid-cols-[300px_1fr] lg:gap-10" data-reveal="fade">
        <p className="font-heading text-[22px] font-semibold leading-snug text-navy">{label}</p>
        <div className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]" aria-hidden>
          <div className="marquee-track items-center">{children}</div>
        </div>
      </Container>
    </section>
  );
}

export function CustomerStrip({ label, className = "" }: { label: ReactNode; className?: string }) {
  const list = [...customers, ...customers];
  const quote = testimonials[0];
  return (
    <>
      <TrustedStrip label={label} className={className} ariaLabel="Customers we work with">
        {list.map((c, i) => (
          <span key={`${c.name}-${i}`} className="mx-8 whitespace-nowrap font-heading text-[19px] font-semibold tracking-tight text-navy/75 sm:mx-11">
            {c.name}
          </span>
        ))}
      </TrustedStrip>
      <ul className="sr-only">
        {customers.map((c) => (
          <li key={c.name}>
            <a href={c.href}>{c.name}</a>
          </li>
        ))}
      </ul>
      {quote && (
        <section className="bg-sky pb-10" aria-label="Customer testimonial">
          <Container>
            <figure className="grid gap-6 border-l-8 border-orange bg-white p-7 shadow-card sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center" data-reveal>
              <div>
                <blockquote className="font-heading text-[20px] font-medium leading-snug text-navy sm:text-[22px]">&ldquo;{quote.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-[14px] text-muted">
                  <span className="font-semibold text-navy-900">{quote.name}</span>
                  {quote.role ? `, ${quote.role}` : ""} · {quote.company}
                </figcaption>
              </div>
              {quote.result && <p className="max-w-[260px] bg-navy p-5 font-heading text-[17px] font-semibold leading-snug text-orange">{quote.result}</p>}
            </figure>
          </Container>
        </section>
      )}
    </>
  );
}

export function CarrierStrip({ label, className = "" }: { label: ReactNode; className?: string }) {
  const couriers = integrations.filter((i) => i.category === "courier");
  const list = [...couriers, ...couriers];
  return (
    <TrustedStrip label={label} className={className} ariaLabel="Supported couriers">
      {list.map((c, i) => (
        <span key={`${c.slug}-${i}`} className="mx-7 inline-flex items-center gap-2 whitespace-nowrap sm:mx-10">
          <BrandBadge integration={c} size="md" />
          {c.status === "coming-soon" && <span className="bg-navy px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">Coming soon</span>}
        </span>
      ))}
    </TrustedStrip>
  );
}

/* ---------- Blob icon (Transp "card-offer" icon on a pale yellow blob) ---------- */
export function BlobIcon({ icon: Icon, className = "" }: { icon: ElementType; className?: string }) {
  return (
    <span className={`relative inline-flex size-[72px] items-center justify-center ${className}`}>
      <svg viewBox="0 0 80 80" className="absolute inset-0 size-full text-sand transition-colors duration-[320ms] group-hover/card:text-orange" aria-hidden>
        <path
          fill="currentColor"
          d="M41.6 4.2c12.1.6 24.9 6.3 29.9 17.4 5.3 11.7 1 25.6-5.8 36.3-6.3 9.9-16.6 17.8-28.4 17.9-12 .1-23.6-6.9-29.8-17.2C1.6 48.5.7 35.7 5.6 24.6 10.6 13.2 28.2 3.5 41.6 4.2z"
        />
      </svg>
      <Icon className="relative size-8 text-navy-900" strokeWidth={1.5} aria-hidden />
    </span>
  );
}

/* ---------- "What We Offer" card (white, shadow, 8px accent bottom border) ---------- */
export function OfferCard({ icon, title, body, href, linkLabel = "View details" }: { icon: ElementType; title: string; body: string; href?: string; linkLabel?: string }) {
  return (
    <div
      className={`relative flex h-full flex-col border-b-8 border-orange bg-white p-6 shadow-card sm:p-10 ${
        href
          ? "group/card transition-[translate,scale,box-shadow,border-color] duration-[320ms] ease-smooth hover:-translate-y-1 hover:shadow-card-hover focus-within:shadow-card-hover active:translate-y-0 active:scale-[0.99] active:shadow-card-hover"
          : ""
      }`}
    >
      <BlobIcon icon={icon} className="mb-4 sm:mb-6" />
      <h3 className="mb-3 text-[22px] leading-snug">{title}</h3>
      <p className="mb-5 flex-1 text-[15px] leading-relaxed text-muted sm:mb-6">{body}</p>
      {href && (
        <ArrowLink href={href} stretched>
          {linkLabel}
          <span className="sr-only">: {title}</span>
        </ArrowLink>
      )}
    </div>
  );
}

/** Grid of offer cards with the navy band behind the lower part (Transp "What We Offer"). */
export function OfferGrid({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="dots-dark absolute inset-x-0 bottom-0 top-28 bg-navy lg:inset-x-[calc((100vw-1408px)/2-40px)] xl:inset-x-[max(0px,calc((100vw-1408px)/2-60px))]" aria-hidden />
      <div className="slash absolute bottom-24 left-0 hidden h-24 w-24 bg-orange lg:block xl:left-[max(0px,calc((100vw-1408px)/2-110px))]" aria-hidden />
      <Container className="relative pb-16 lg:pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
          {children}
        </div>
      </Container>
    </div>
  );
}

/* ---------- Media frame with Transp's slanted accent bars ---------- */
export function MediaFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative min-w-0 px-4 py-6 sm:px-6 ${className}`} data-reveal="scale">
      <div className="para-left absolute left-[22%] top-0 h-6 w-[42%] bg-navy" aria-hidden />
      <div className="para-left absolute bottom-0 left-[10%] h-6 w-[42%] bg-navy" aria-hidden />
      <div className="slash absolute -right-1 bottom-[14%] z-10 h-24 w-16 bg-orange sm:h-32 sm:w-20" aria-hidden />
      <div className="relative">{children}</div>
    </div>
  );
}

/** Tinted visual panel used where the reference shows photography. */
export function VisualPanel({ children, tone = "sky", className = "" }: { children: ReactNode; tone?: "sky" | "navy" | "surface"; className?: string }) {
  const t = { sky: "bg-sky dots-light", navy: "bg-navy dots-dark", surface: "bg-surface dots-light" }[tone];
  return <div className={`relative flex items-center justify-center overflow-hidden p-6 sm:p-10 ${t} ${className}`}>{children}</div>;
}

/* ---------- Integrations card: platforms → Tranzit → couriers diagram ---------- */
export function IntegrationsCard({ className = "" }: { className?: string }) {
  return (
    <div className={`border-b-8 border-orange bg-white px-5 py-10 shadow-card sm:px-10 lg:px-14 ${className}`} data-reveal>
      <div className="mb-9 flex flex-col items-center gap-3 text-center">
        <Mark className="size-8" />
        <p className="font-heading text-[22px] font-semibold text-navy">
          Connects to the <Highlight>couriers and platforms</Highlight> you already use
        </p>
      </div>
      <IntegrationFlow tone="light" className="mx-auto max-w-[860px]" />
      <div className="mt-8 text-center">
        <ArrowLink href={routes.integrations}>View all integrations</ArrowLink>
      </div>
    </div>
  );
}

/* ---------- Support section (Transp navy band with white cards) ---------- */
export function SupportSplit({ className = "" }: { reverse?: boolean; background?: string; className?: string }) {
  const tiles = [
    { icon: Clock, t: "One business day", d: "We reply to every enquiry within one business day." },
    { icon: Headset, t: "A real person", d: "When you need a hand you get a person who knows shipping, not a chatbot reading from a script." },
    { icon: ShieldCheck, t: "Guided onboarding", d: "Once you register, our onboarding team contacts you to set your account up properly so you don't miss any settings." },
  ];
  return (
    <section className={`relative overflow-hidden bg-navy py-20 text-white lg:py-24 ${className}`}>
      <div className="dots-dark absolute inset-0 opacity-60" aria-hidden />
      <div className="diag-cut-left absolute inset-y-0 right-0 hidden w-[34%] bg-navy-800 lg:block" aria-hidden />
      <Container className="relative">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end" data-reveal>
          <div className="max-w-[720px]">
            <div className="mb-4 flex items-center gap-4">
              <Mark className="size-9" light />
              <SectionTitle light>Real human support</SectionTitle>
            </div>
            <p className="text-[15.5px] leading-relaxed text-white/85 sm:pl-[52px]">
              Talk to people who know shipping. Our Australian support team is available {site.hours}. Email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-orange underline underline-offset-2">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={site.phoneHref} className="font-semibold text-orange underline underline-offset-2">
                {site.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <Button href={routes.contact} variant="outline-light">
            Contact support
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3" data-reveal-group>
          {tiles.map(({ icon: Icon, t, d }) => (
            <div key={t} className="border-b-8 border-orange bg-white p-7 text-navy-900 shadow-card">
              <span className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-sand text-navy">
                <Icon className="size-5" aria-hidden />
              </span>
              <p className="mb-2 font-heading text-[19px] font-semibold text-navy">{t}</p>
              <p className="text-[15px] leading-relaxed text-muted">{d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Stats band (Transp "World's Leading Companies" — navy, accent heading, bordered boxes) ---------- */
export function BenefitBand({
  title,
  intro,
  items,
  className = "",
  overlap = false,
}: {
  title: ReactNode;
  intro?: ReactNode;
  items: { icon: ElementType; label: string; sub: string }[];
  className?: string;
  overlap?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden bg-navy text-white ${overlap ? "pb-48 pt-20 lg:pb-56 lg:pt-24" : "py-20 lg:py-24"} ${className}`}>
      <div className="dots-dark absolute inset-0 opacity-60" aria-hidden />
      <Container className="relative">
        <div className="mx-auto mb-12 max-w-[900px] text-center" data-reveal>
          <h2 className="text-[30px] leading-[1.15] !text-orange sm:text-[40px] lg:text-[48px]">{title}</h2>
          {intro && <p className="mx-auto mt-4 max-w-[620px] text-[15.5px] leading-relaxed text-white/85">{intro}</p>}
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
          {items.map(({ icon: Icon, label, sub }) => (
            <li key={label} className="border border-white/25 bg-navy-800/60 px-6 py-8 text-center">
              <span className="mx-auto mb-5 inline-flex size-[70px] items-center justify-center rounded-full bg-white text-navy ring-4 ring-orange/40">
                <Icon className="size-7" strokeWidth={1.6} aria-hidden />
              </span>
              <p className="font-heading text-[26px] font-semibold leading-tight text-orange">{label}</p>
              <p className="mt-1.5 text-[15px] text-white/90">{sub}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------- CTA strip (Transp "Have any ideas in your mind? / Create your next project with us") ---------- */
export function CtaBand({ title, children }: { variant?: "split" | "centered"; title?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-12 text-white lg:py-14">
      <div className="dots-dark absolute inset-0" aria-hidden />
      <div className="diag-cut-left absolute inset-y-0 right-0 w-[40%] bg-navy/70" aria-hidden />
      <Container className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[900px]" data-reveal="left">
          <p className="mb-2 text-[18px] text-white/90 sm:text-[20px]">
            {children ??
              "Connect your supported courier accounts and ecommerce integrations, then manage your shipping from one simple platform. No software or label fees during your trial."}
          </p>
          <h2 className="text-[28px] leading-tight !text-orange sm:text-[38px]">
            {title ?? <>Start your 30-day shipping automation free trial today</>}
          </h2>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3" data-reveal="right" data-reveal-delay="1">
          <Button href={site.portal.register} size="lg">
            Start free trial
          </Button>
          <Button href={routes.demo} variant="outline-light" size="lg">
            Book a demo
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Pricing teaser (Transp "Choose The Best Plan" side panel) ---------- */
export function PriceTeaser() {
  return (
    <div className="border-l-8 border-orange bg-white p-7 shadow-card" data-reveal>
      <span className="mb-4 inline-flex size-11 items-center justify-center bg-orange text-navy-900">
        <DollarSign className="size-5" aria-hidden />
      </span>
      <h3 className="mb-2 text-[20px]">See how much you&apos;ll pay</h3>
      <p className="mb-5 text-[15px] leading-relaxed text-muted">
        After your trial you only pay per label, from $0.02, based on your weekly parcel-volume tier. No monthly subscription fee.
      </p>
      <ArrowLink href={routes.pricing}>Pricing details</ArrowLink>
    </div>
  );
}

/* ---------- FAQ (Transp: heading + image collage left, accordion + "Need more help?" right) ---------- */
export function FaqSection({
  eyebrow,
  title,
  items,
  intro,
  visual,
  background = "bg-white",
  id = "faqs",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  items: Faq[];
  intro?: ReactNode;
  visual?: ReactNode;
  aside?: ReactNode;
  background?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${background} py-20 lg:py-24`}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0">
            <SectionHeader eyebrow={eyebrow} title={title} description={intro ?? "Feeling inquisitive? Have a read through some of our FAQs or contact our team for help."} className="mb-8" />
            {visual}
            <div className={`border-l-8 border-orange bg-white p-7 shadow-card ${visual ? "mt-8" : ""}`} data-reveal data-reveal-delay="1">
              <h3 className="mb-2 text-[26px]">Need more help?</h3>
              <p className="mb-5 text-[15px] text-muted">Our Australian support team is available {site.hours}.</p>
              <div className="flex flex-wrap items-center gap-5">
                <Button href={routes.contact}>Contact us</Button>
                <Button href={routes.demo} variant="ghost" arrow>
                  Book a demo
                </Button>
              </div>
            </div>
          </div>
          <div className="min-w-0" data-reveal="right">
            <FaqAccordion items={items} />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Trust ticks ---------- */
export function TrustTicks({ items, className = "", light = false }: { items: string[]; className?: string; light?: boolean }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] font-medium ${light ? "text-white" : "text-navy"} ${className}`}>
      {items.map((t) => (
        <li key={t} className="inline-flex items-center gap-2">
          <CheckBadge tone={light ? "orange" : "navy"} />
          {t}
        </li>
      ))}
    </ul>
  );
}

export { Tag };
