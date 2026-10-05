import { Mail, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { HeaderNav } from "./HeaderNav";
import { mainNav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="relative z-40">
      {/* Utility bar (Transp: phone + email left, secondary info right) */}
      <div className="bg-navy-900 text-white">
        <Container className="flex h-9 items-center justify-between gap-4 text-[13px]">
          <div className="flex items-center gap-7">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-orange-light">
              <Phone className="size-3.5 text-orange" aria-hidden />
              <span>
                <span className="hidden sm:inline">Phone: </span>
                {site.phoneDisplay}
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="hidden items-center gap-2 transition-colors hover:text-orange-light sm:inline-flex">
              <Mail className="size-3.5 text-orange" aria-hidden />
              {site.email}
            </a>
          </div>
          <p className="hidden items-center gap-2 text-white/80 md:inline-flex">
            <Clock className="size-3.5 text-orange" aria-hidden />
            {site.hours}
          </p>
        </Container>
      </div>
      {/* Main bar */}
      <div className="border-b border-line-soft bg-white">
        <Container className="flex h-[78px] items-center justify-between gap-8">
          <Logo priority />
          <HeaderNav items={mainNav} loginHref={site.portal.login} trialHref={site.portal.register} />
        </Container>
      </div>
    </header>
  );
}
