export type IntegrationCategory = "courier" | "ecommerce" | "marketplace";
export type IntegrationStatus = "available" | "coming-soon";

export type Integration = {
  slug: string;
  name: string;
  category: IntegrationCategory;
  status: IntegrationStatus;
  description: string;
  /** Accent colour used in the text wordmark badge (not a reproduction of any logo). */
  accent: string;
  /** Local logo image if Tranzit publishes one. */
  image?: { src: string; width: number; height: number };
  website?: string;
};

/*
 * Live and coming-soon integrations, taken from the Tranzit customer portal's
 * Courier Integrations and Ecommerce Integrations screens (October 2026).
 * Change `status` to "available" when a coming-soon integration goes live.
 */
export const integrations: Integration[] = [
  {
    slug: "australia-post",
    name: "Australia Post",
    category: "courier",
    status: "available",
    accent: "#dc1928",
    description: "Connect your Australia Post account to book, label and track parcels from the Tranzit dashboard alongside your other couriers.",
  },
  {
    slug: "aramex",
    name: "Aramex",
    category: "courier",
    status: "available",
    accent: "#e4322b",
    description: "Ship with Aramex using your own account or Tranzit's supported courier services, with labels and tracking managed in one place.",
  },
  {
    slug: "mypost-business",
    name: "MyPost Business",
    category: "courier",
    status: "available",
    accent: "#dc1928",
    description: "Connect your MyPost Business account to book, label and track parcels from the Tranzit dashboard alongside your other couriers.",
  },
  {
    slug: "direct-freight",
    name: "Direct Freight",
    category: "courier",
    status: "available",
    accent: "#1d4f9c",
    description: "Connect your Direct Freight Express account to book, label and track parcels from the Tranzit dashboard alongside your other couriers.",
  },
  {
    slug: "couriersplease",
    name: "Couriers Please",
    category: "courier",
    status: "available",
    accent: "#f26522",
    description: "Book Couriers Please shipments, compare live rates against your other carriers and bulk-print labels from a single screen.",
  },
  {
    slug: "startrack",
    name: "StarTrack",
    category: "courier",
    status: "available",
    accent: "#0f3d7a",
    description: "Connect your StarTrack account to book, label and track parcels from the Tranzit dashboard alongside your other couriers.",
  },
  {
    slug: "tnt",
    name: "TNT",
    category: "courier",
    status: "available",
    accent: "#ff6600",
    description: "Connect your TNT account to book, label and track parcels from the Tranzit dashboard alongside your other couriers.",
  },
  {
    slug: "team-global-express",
    name: "Team Global Express",
    category: "courier",
    status: "available",
    accent: "#1f5d2b",
    description: "Connect your Team Global Express account to book, label and track parcels from the Tranzit dashboard alongside your other couriers.",
  },
  {
    slug: "shopify",
    name: "Shopify",
    category: "ecommerce",
    status: "available",
    accent: "#5e8e3e",
    description: "Connect your Shopify store to sync orders and automate shipping. Tracking numbers write back to fulfil each order automatically.",
  },
  {
    slug: "woocommerce",
    name: "WooCommerce",
    category: "ecommerce",
    status: "available",
    accent: "#7f54b3",
    description: "Integrate WooCommerce to streamline your ecommerce fulfilment. Orders flow in automatically and tracking syncs back to your store.",
  },
  {
    slug: "ebay",
    name: "eBay",
    category: "marketplace",
    status: "available",
    accent: "#0064d2",
    description: "Connect your eBay store to import orders, print labels in bulk and keep buyers updated with synced tracking.",
  },
  {
    slug: "squarespace",
    name: "Squarespace",
    category: "ecommerce",
    status: "available",
    accent: "#121118",
    description: "Connect Squarespace Commerce to sync orders and mark shipments fulfilled.",
  },
  {
    slug: "shopline",
    name: "Shopline",
    category: "ecommerce",
    status: "available",
    accent: "#0b2e4f",
    description: "Connect your Shopline store to sync orders and push shipment tracking.",
  },
  {
    slug: "etsy",
    name: "Etsy",
    category: "marketplace",
    status: "available",
    accent: "#f1641e",
    description: "Connect your Etsy shop to import paid receipts and upload tracking.",
  },
  {
    slug: "fedex",
    name: "FedEx",
    category: "courier",
    status: "coming-soon",
    accent: "#4d148c",
    description: "FedEx support is on the way. Contact us if you would like to know when it is available in the portal.",
  },
  {
    slug: "allied-express",
    name: "Allied Express",
    category: "courier",
    status: "coming-soon",
    accent: "#1a5fb4",
    description: "Allied Express support is on the way. Contact us if you would like to know when it is available in the portal.",
  },
  {
    slug: "temu",
    name: "Temu",
    category: "marketplace",
    status: "coming-soon",
    accent: "#fb7701",
    description: "Coming soon: connect your Temu seller account to import orders and push tracking.",
  },
  {
    slug: "amazon",
    name: "Amazon",
    category: "marketplace",
    status: "coming-soon",
    accent: "#ff9900",
    description: "Coming soon: link your Amazon seller account for multi-channel shipping.",
  },
];

export const categoryLabels: Record<IntegrationCategory, string> = {
  courier: "Couriers",
  ecommerce: "Ecommerce platforms",
  marketplace: "Marketplaces",
};

export const statusLabels: Record<IntegrationStatus, string> = {
  available: "Native integration",
  "coming-soon": "Coming soon",
};

export const availableCouriers = integrations.filter((i) => i.category === "courier" && i.status === "available");
export const availablePlatforms = integrations.filter((i) => i.category !== "courier" && i.status === "available");

/** Customers named on tranzitgroup.com.au. Rendered as text wordmarks (no logo files are published). */
export const customers = [
  { name: "Molly's Backyard", href: "https://mollysbackyard.com.au/" },
  { name: "BuddySoft", href: "https://buddysoft.com.au/" },
  { name: "HQ Link", href: "https://hqlink.com.au/" },
  { name: "UFOU", href: "https://www.ufou.com.au/" },
  { name: "Outdoor Instant Shelters", href: "https://www.outdoorinstantshelters.com.au/" },
  { name: "Canna Fabrication", href: "https://www.cannafab.com.au/" },
];
