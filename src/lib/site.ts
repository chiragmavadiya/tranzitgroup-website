export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://tranzitgroup.com.au").replace(/\/$/, "");

export const site = {
  name: "Tranzit Group",
  legalName: "Tranzit Group Pty Ltd",
  abn: "12 690 967 198",
  tagline: "Australian shipping automation for ecommerce",
  description:
    "Tranzit Group is Australian-owned shipping automation software. Connect Shopify, WooCommerce, eBay or Etsy, link your courier accounts and ship from one dashboard.",
  email: "info@tranzitgroup.com.au",
  phoneDisplay: "1300 TRANZIT",
  phoneDigits: "1300 872 648",
  phoneHref: "tel:1300872648",
  hours: "Monday to Friday, 9am–5pm AEST",
  foundedYear: "2023",
  foundedCity: "Melbourne",
  portal: {
    login: "https://app.tranzitgroup.com.au/login",
    register: "https://app.tranzitgroup.com.au/register",
  },
} as const;

export const routes = {
  home: "/",
  services: "/services",
  integrations: "/integrations",
  pricing: "/pricing",
  about: "/about",
  contact: "/contact",
  demo: "/contact?subject=demo",
  pricingEnquiry: "/contact?subject=pricing",
  privacy: "/privacy-policy",
  terms: "/terms-and-conditions",
} as const;

export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  {
    label: "Platform",
    href: routes.services,
    children: [
      { label: "Shipping automation", href: routes.services, description: "Everything your shipping desk does, automated." },
      { label: "Multi-carrier shipping", href: `${routes.services}#multi-carrier`, description: "Every courier, one login." },
      { label: "Bulk labels & fulfilment", href: `${routes.services}#bulk-labels`, description: "A hundred orders, one click." },
      { label: "Branded tracking & notifications", href: `${routes.services}#tracking`, description: "Keep customers on your brand." },
      { label: "Returns & analytics", href: `${routes.services}#analytics`, description: "Self-serve returns and spend insight." },
      { label: "How it works", href: `${routes.home}#how-it-works`, description: "From cart to courier in four steps." },
    ],
  },
  { label: "Pricing", href: routes.pricing },
  {
    label: "Integrations",
    href: routes.integrations,
    children: [
      { label: "All integrations", href: routes.integrations, description: "Couriers and ecommerce platforms." },
      { label: "Couriers", href: `${routes.integrations}#couriers`, description: "Australia Post, Aramex, StarTrack, TNT and more." },
      { label: "Ecommerce platforms", href: `${routes.integrations}#platforms`, description: "Shopify, WooCommerce, eBay, Etsy and more." },
    ],
  },
  {
    label: "About",
    href: routes.about,
    children: [
      { label: "About us", href: routes.about },
      { label: "Contact", href: routes.contact },
      { label: "Privacy policy", href: routes.privacy },
      { label: "Terms & conditions", href: routes.terms },
    ],
  },
  { label: "Contact", href: routes.contact },
];

export type FooterLink = { label: string; href: string; external?: boolean };

export const footerNav: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About us", href: routes.about },
      { label: "Pricing", href: routes.pricing },
      { label: "Contact", href: routes.contact },
      { label: "Book a demo", href: routes.demo },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Shipping automation", href: routes.services },
      { label: "Multi-carrier shipping", href: `${routes.services}#multi-carrier` },
      { label: "Bulk label printing", href: `${routes.services}#bulk-labels` },
      { label: "Branded tracking", href: `${routes.services}#tracking` },
      { label: "Notifications", href: `${routes.services}#tracking` },
      { label: "Returns & analytics", href: `${routes.services}#analytics` },
      { label: "Developer API", href: `${routes.services}#toolkit` },
    ],
  },
  {
    heading: "Integrations",
    links: [
      { label: "All integrations", href: routes.integrations },
      { label: "Australia Post", href: `${routes.integrations}#couriers` },
      { label: "Aramex", href: `${routes.integrations}#couriers` },
      { label: "Couriers Please", href: `${routes.integrations}#couriers` },
      { label: "StarTrack", href: `${routes.integrations}#couriers` },
      { label: "Shopify", href: `${routes.integrations}#platforms` },
      { label: "WooCommerce", href: `${routes.integrations}#platforms` },
      { label: "eBay", href: `${routes.integrations}#platforms` },
      { label: "Etsy", href: `${routes.integrations}#platforms` },
    ],
  },
  {
    heading: "Customer portal",
    links: [
      { label: "Portal login", href: site.portal.login, external: true },
      { label: "Start free trial", href: site.portal.register, external: true },
      { label: "Email support", href: `mailto:${site.email}`, external: true },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: routes.privacy },
      { label: "Terms & conditions", href: routes.terms },
    ],
  },
];
