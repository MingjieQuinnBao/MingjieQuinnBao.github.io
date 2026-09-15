import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Editorial";
import { site } from "@/data/site";
import "@/styles/globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mingjie Quinn Bao | Research, Systems, Language, Sound",
    template: "%s | Mingjie Quinn Bao",
  },
  description: site.description,
  openGraph: {
    title: "Mingjie Quinn Bao — Between Signals",
    description: site.description,
    type: "website",
    url: site.url,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
