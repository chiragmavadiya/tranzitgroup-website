import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import { LegalPage } from "@/components/sections/LegalPage";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { termsAndConditions, legalUpdated } from "@/content/legal-docs";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "The terms that govern access to and use of the Tranzit Group website, shipping platform, applications, integrations, APIs and related freight-management services.",
  path: routes.terms,
});

export default function TermsPage() {
  return (
    <LegalPage
      title={termsAndConditions.title}
      intro="The terms that govern access to and use of the Tranzit Group website, shipping platform, applications, integrations, APIs and related freight-management services."
      updated={legalUpdated}
    >
      <LegalDocument doc={termsAndConditions} searchLabel="Search legal sections, topics, keywords..." />
    </LegalPage>
  );
}
