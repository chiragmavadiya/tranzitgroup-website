import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import { LegalPage } from "@/components/sections/LegalPage";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacyPolicy, legalUpdated } from "@/content/legal-docs";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Tranzit Group collects, holds, uses and discloses personal information, and how you can access and correct it or make a privacy complaint.",
  path: routes.privacy,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title={privacyPolicy.title}
      intro="How we collect, hold, use and disclose personal information, and how you can access and correct that information or make a privacy complaint."
      updated={legalUpdated}
    >
      <LegalDocument doc={privacyPolicy} searchLabel="Search policy sections, keywords, terms..." />
    </LegalPage>
  );
}
