import { Mail, Phone, Clock, LogIn } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { routes, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageHero, Mark } from "@/components/ui/Typography";
import { ContactForm, type EnquiryType } from "@/components/forms/ContactForm";

export const metadata = pageMetadata({
  title: "Contact us",
  description:
    "Book a demo, ask a pricing question or get support. Email info@tranzitgroup.com.au or call 1300 TRANZIT, Monday to Friday 9am–5pm AEST.",
  path: routes.contact,
});

const subjectMap: Record<string, EnquiryType> = {
  demo: "Book a demo",
  pricing: "Pricing / sales",
  support: "Support",
  partnership: "Partnership",
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const params = await searchParams;
  const subject = typeof params.subject === "string" ? params.subject : undefined;
  const initialType: EnquiryType = (subject && subjectMap[subject]) || "General enquiry";

  const cards = [
    { icon: Mail, t: "Email", d: site.email, href: `mailto:${site.email}` },
    { icon: Phone, t: "Phone", d: `${site.phoneDisplay} (${site.phoneDigits})`, href: site.phoneHref },
    { icon: Clock, t: "Hours", d: site.hours },
    { icon: LogIn, t: "Customer portal", d: "Existing customers, log in here", href: site.portal.login, external: true },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s talk <span className="text-orange">shipping.</span>
          </>
        }
        intro="Whether you want a demo, have a pricing question or need support, send us a message and our team will get back to you within one business day."
      />

      <section className="dots-light bg-white py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <div data-reveal>
              <div className="mb-2 flex items-start gap-3">
                <Mark className="mt-[0.3em] size-6" />
                <h2 className="text-[28px]">We&apos;re here to help.</h2>
              </div>
              <p className="mb-6 text-[15px] leading-relaxed text-muted">Prefer to call or email directly? Our Australian support team is available {site.hours}.</p>
              </div>
              <ul className="space-y-3" data-reveal-group>
                {cards.map(({ icon: Icon, t, d, href, external }) => {
                  const inner = (
                    <>
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded bg-navy text-orange">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block font-heading text-[15px] font-bold text-navy-900">{t}</span>
                        <span className="text-[14px] text-ink">{d}</span>
                      </span>
                    </>
                  );
                  const cls = `flex items-center gap-4 border border-line bg-white p-4 shadow-card ${href ? "transition-[translate,border-color,box-shadow] duration-[320ms] ease-smooth hover:-translate-y-0.5 hover:border-orange hover:shadow-card-hover active:translate-y-0" : ""}`;
                  return (
                    <li key={t}>
                      {href ? (
                        <a href={href} className={cls} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                          {inner}
                        </a>
                      ) : (
                        <div className={cls}>{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="relative" data-reveal="right" data-reveal-delay="1">
              <div className="slash absolute -right-4 -top-4 h-20 w-24 bg-orange" aria-hidden />
              <div className="relative rounded border border-line bg-white p-6 shadow-card sm:p-8">
                <h2 className="mb-6 text-[26px]">Send an enquiry</h2>
                <ContactForm key={initialType} initialType={initialType} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
