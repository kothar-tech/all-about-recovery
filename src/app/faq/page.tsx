import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import { pageMetadata, graph, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

import { PageHero } from "@/components/sections/PageHero";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about NDIS funding, referrals, plan management, choosing a support worker and how support works at All About Recovery in Sydney, Dubbo and Tamworth.",
  path: "/faq",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path: "/faq" },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Frequently asked questions"
        lead="NDIS funding, referrals, plan types and what working with us actually looks like. If your question isn't here, call us — a real person answers."
        crumbs={crumbs}
      />
      <FaqAccordion
        items={faqs}
        tone="cream"
        eyebrow="Everything else"
        heading="Answers to the questions we hear most"
        lead="Written in plain English, without the acronym soup."
      />
      <CTASection
        image="/images/workshop-collaboration.webp"
        imageAlt="A team working through paperwork together at a table"
      />
      <JsonLd data={graph(breadcrumbSchema(crumbs), faqSchema(faqs))} />
    </>
  );
}
