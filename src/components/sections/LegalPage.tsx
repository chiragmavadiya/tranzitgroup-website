import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/Typography";

export function LegalPage({ title, intro, updated, children }: { title: string; intro: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero crumbs={[{ label: "Home", href: "/" }, { label: title }]} eyebrow="Legal" title={title} intro={intro}>
        <p className="mt-4 font-mono text-[12px] text-white/70">Updated: {updated}</p>
      </PageHero>
      <section className="bg-white py-14 lg:py-16">
        <Container>{children}</Container>
      </section>
    </>
  );
}
