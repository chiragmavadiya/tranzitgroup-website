import type { MetadataRoute } from "next";
import { SITE_URL, routes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: routes.home, priority: 1, changeFrequency: "weekly" },
    { path: routes.services, priority: 0.9, changeFrequency: "monthly" },
    { path: routes.integrations, priority: 0.9, changeFrequency: "monthly" },
    { path: routes.pricing, priority: 0.9, changeFrequency: "monthly" },
    { path: routes.about, priority: 0.6, changeFrequency: "yearly" },
    { path: routes.contact, priority: 0.7, changeFrequency: "yearly" },
    { path: routes.privacy, priority: 0.3, changeFrequency: "yearly" },
    { path: routes.terms, priority: 0.3, changeFrequency: "yearly" },
  ];
  return entries.map((e) => ({
    url: `${SITE_URL}${e.path === "/" ? "" : e.path}`,
    lastModified: now,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
