import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow, SectionTitle } from "@/components/ui/Typography";
import { routes, site } from "@/lib/site";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div className="dots-dark absolute inset-0 opacity-60" aria-hidden />
      <div className="slash absolute -right-24 top-0 hidden h-full w-[360px] bg-orange/90 lg:block" aria-hidden />
      <Container className="relative">
        <div className="max-w-[680px]">
          <Eyebrow light className="mb-4">
            404
          </Eyebrow>
          <SectionTitle as="h1" size="xl" light className="mb-5">
            This parcel went to the <span className="text-orange-light">wrong address.</span>
          </SectionTitle>
          <p className="mb-8 text-[16px] leading-relaxed text-white/85">The page you&apos;re looking for doesn&apos;t exist or has moved. Try one of these instead.</p>
          <div className="mb-10 flex flex-wrap gap-3">
            <Button href={routes.home}>Back to home</Button>
            <Button href={routes.services} variant="outline-light">
              Explore the platform
            </Button>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-semibold text-white/85">
            <li>
              <Link href={routes.integrations} className="hover:text-orange-light">
                Integrations
              </Link>
            </li>
            <li>
              <Link href={routes.pricing} className="hover:text-orange-light">
                Pricing
              </Link>
            </li>
            <li>
              <Link href={routes.contact} className="hover:text-orange-light">
                Contact
              </Link>
            </li>
            <li>
              <a href={site.portal.login} className="hover:text-orange-light" target="_blank" rel="noopener noreferrer">
                Portal login
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
