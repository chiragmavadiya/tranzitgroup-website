import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { footerNav, routes, site } from "@/lib/site";

/*
 * Footer follows Transp: navy column footer with accent headings and a darker bottom bar.
 * Contact details and portal/sign-up links live here once; the CTA band above handles sign-up.
 */
export function Footer() {
  return (
    <footer className="relative text-white">
      {/* Columns */}
      <div className="relative border-t border-white/10 bg-navy">
        <div className="dots-dark absolute inset-0 opacity-50" aria-hidden />
        <Container className="relative py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,3fr)]">
            <div>
              <Logo variant="white" className="mb-6" />
              <p className="max-w-[320px] text-[14px] leading-relaxed text-white/80">
                Australian-owned shipping automation for ecommerce. We connect your store with courier networks so you can get back to growing.
              </p>
              <p className="mb-3 mt-7 text-[16px] font-semibold text-orange">Talk to our Australian support team</p>
              <ul className="space-y-1.5 text-[14px] text-white/85">
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-orange-light">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.phoneHref} className="hover:text-orange-light">
                    {site.phoneDisplay} ({site.phoneDigits})
                  </a>
                </li>
                <li>{site.hours}</li>
              </ul>
            </div>
            <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {footerNav.map((group) => (
                <div key={group.heading}>
                  <h3 className="mb-4 text-[18px] font-semibold !text-orange">{group.heading}</h3>
                  <ul className="space-y-2.5 text-[14px] text-white/90">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        {link.external ? (
                          <a href={link.href} className="transition-colors hover:text-orange-light" target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className="transition-colors hover:text-orange-light">
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </Container>
      </div>
      <div className="bg-navy-900">
        <Container className="flex flex-col gap-3 py-6 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} · ABN {site.abn}. All rights reserved.
          </p>
          <p className="flex gap-6">
            <Link href={routes.privacy} className="hover:text-white">
              Privacy policy
            </Link>
            <Link href={routes.terms} className="hover:text-white">
              Terms & conditions
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
