import type { Metadata } from "next";
import { SITE_URL, site, locations } from "@/data/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
  type = "website",
  keywords,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: "en_AU",
      type,
      images: [{ url: image, width: 1200, height: 630, alt: `${title} — ${site.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [image],
    },
  };
}

/* ------------------------- JSON-LD builders ------------------------- */

const areaServed = locations.map((l) => ({
  "@type": "City",
  name: l.suburb,
  address: {
    "@type": "PostalAddress",
    addressLocality: l.suburb,
    addressRegion: l.state,
    addressCountry: "AU",
  },
}));

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-mark.svg` },
  image: `${SITE_URL}/images/hero-group-walking.webp`,
  description: site.description,
  email: site.email,
  telephone: "+61 1300 011 227",
  sameAs: [site.socials.instagram, site.socials.facebook],
  areaServed,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+61 1300 011 227",
      contactType: "customer service",
      email: site.email,
      areaServed: "AU",
      availableLanguage: ["en"],
    },
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-AU",
};

export const localBusinessSchemas = locations.map((l) => ({
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
  "@id": `${SITE_URL}/#${l.name.toLowerCase()}`,
  name: `${site.name} — ${l.name}`,
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/contact`,
  telephone: "+61 1300 011 227",
  email: site.email,
  image: `${SITE_URL}/images/hero-group-walking.webp`,
  priceRange: "NDIS funded",
  address: {
    "@type": "PostalAddress",
    streetAddress: l.street,
    addressLocality: l.suburb,
    addressRegion: l.state,
    postalCode: l.postcode,
    addressCountry: "AU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: l.hours.startsWith("8") ? "08:00" : "09:00",
      closes: l.hours.endsWith("4pm") ? "16:00" : "17:00",
    },
  ],
}));

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(s: {
  title: string;
  slug: string;
  summary: string;
  isAccommodation?: boolean;
}) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}${s.isAccommodation ? "" : "/services"}/${s.slug}#service`,
    name: s.title,
    description: s.summary,
    serviceType: s.title,
    category: "Disability support services",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed,
    audience: {
      "@type": "Audience",
      audienceType: "NDIS participants living with psychosocial disability",
    },
    url: `${SITE_URL}${s.isAccommodation ? "" : "/services"}/${s.slug}`,
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Wraps any number of schema objects into a single @graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
