import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import { Highlight, PageHero } from "@/components/ui/Typography";
import { CtaBand, FaqSection } from "@/components/sections/Shared";
import { PricingSummary } from "@/components/sections/PricingSummary";
import { pricingFaqs } from "@/content/faqs";

export const metadata = pageMetadata({
  title: "Pricing: 30-day free trial, then pay per label",
  description:
    "Try Tranzit free for 30 days with no software or label fees. After your trial, pay only for labels generated through Tranzit, from $0.02 per label based on your weekly parcel-volume tier.",
  path: routes.pricing,
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
        eyebrow="Pricing"
        title={
          <>
            Start free. Pay only when you&apos;re ready to <span className="text-orange">keep shipping.</span>
          </>
        }
        intro="Try Tranzit free for 30 days. Connect unlimited supported BYO courier accounts, link your ecommerce integrations and start shipping without paying software or label fees during your trial."
      />

      <PricingSummary detailed heading={false} />

      <FaqSection
        title={
          <>
            Pricing <Highlight>questions</Highlight>
          </>
        }
        items={pricingFaqs}
      />

      <CtaBand title="Start shipping free for 30 days." />
    </>
  );
}
