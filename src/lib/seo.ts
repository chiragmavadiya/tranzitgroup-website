import type { Metadata } from "next";
import { SITE_URL, site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_AU",
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description },
  };
}
