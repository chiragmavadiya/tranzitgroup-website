import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = "Tranzit Group: Australian shipping automation for ecommerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/tranzit-logo-white.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#132f56",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={420} height={134} style={{ objectFit: "contain" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 64, fontWeight: 600, lineHeight: 1.05, letterSpacing: -1 }}>
            <span>Put your shipping on</span>
            <span style={{ color: "#e99322", marginLeft: 16 }}>autopilot.</span>
          </div>
          <div style={{ display: "flex", fontSize: 28, opacity: 0.9 }}>{`${site.tagline}. Shopify, WooCommerce, eBay and Etsy to Australia Post, Aramex, StarTrack and more.`}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, opacity: 0.8 }}>
          <span>tranzitgroup.com.au</span>
          <span>30-day free trial · No lock-in contracts</span>
        </div>
      </div>
    ),
    size,
  );
}
