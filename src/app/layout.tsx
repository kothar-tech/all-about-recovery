import type { Metadata, Viewport } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SocialRail } from "@/components/layout/SocialRail";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, site } from "@/data/site";
import { graph, organizationSchema, websiteSchema, localBusinessSchemas } from "@/lib/seo";

const gabarito = Gabarito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gabarito",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "All About Recovery | Registered NDIS Provider — Sydney, Dubbo & Tamworth",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  keywords: [
    "NDIS provider NSW",
    "psychosocial disability support",
    "mental health support Sydney",
    "NDIS Penrith",
    "NDIS Dubbo",
    "NDIS Tamworth",
    "support coordination",
    "psychosocial recovery coaching",
    "supported independent living",
    "SIL SDA STA MTA",
    "forensic disability support",
    "registered NDIS provider",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: site.name,
    title: "All About Recovery | Registered NDIS Provider",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Health",
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#fbf1e0",
  width: "device-width",
  initialScale: 1,
  // Never block zoom — accessibility requirement.
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={gabarito.variable}>
      <head>
        {/* Scroll reveals are decorative — without JS the content must still show. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-dvh bg-cream antialiased">
        <a
          href="#main"
          className="sr-only rounded-full bg-bark px-5 py-3 font-medium text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to main content
        </a>
        <Header />
        <SocialRail />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd
          data={graph(organizationSchema, websiteSchema, ...localBusinessSchemas)}
        />
      </body>
    </html>
  );
}
