import type { Metadata } from "next";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { SITE_URL, site } from "@/data/site";
import { pageMetadata, graph, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesMarquee } from "@/components/sections/Marquee";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { PullQuote } from "@/components/sections/PullQuote";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata: Metadata = pageMetadata({
  title: "Registered NDIS Provider in Sydney, Dubbo & Tamworth",
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* ---------------- About intro ---------------- */}
      <Section tone="cream" id="about-intro">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/hands-circle-community.webp"
                  alt="Many hands joined together in a circle, a symbol of shared support"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-10 -right-6 -z-10 size-56 rounded-full bg-sage-light/70 blur-2xl"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About us"
              title="We are a registered NDIS provider that works alongside people navigating mental health and psychosocial challenges"
            />
            <Reveal delay={140}>
              <div className="mt-7 flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-bark/75">
                <p>
                  At All About Recovery, we believe that every person deserves the
                  opportunity to live a fulfilling, independent, and meaningful life.
                </p>
                <p>
                  We work across Sydney, Tamworth, and Dubbo, and are dedicated to
                  delivering professional, compassionate, and person-centred care that
                  helps you achieve your goals and live life on your terms.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9">
                <Button href="/about" variant="ghost" withArrow>
                  More about us
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <ServicesMarquee />

      {/* ---------------- Services ---------------- */}
      <Section tone="cream" id="services">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our services"
            title="Psychosocial support that fits your life, not the other way around"
            lead="Seven support types plus accommodation — all delivered by the same team, so nothing gets lost between services."
          />
          <Reveal delay={120} className="shrink-0">
            <Button href="/services" variant="ghost" withArrow>All services</Button>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={(i % 3) * 90}>
              <ServiceCard service={service} priority={i < 3} />
            </Reveal>
          ))}
          {/* Accommodation support gets the final tile */}
          <Reveal as="li" delay={0}>
            <article className="group h-full">
              <a
                href="/accommodation-support"
                className="flex h-full flex-col justify-between gap-8 rounded-lg bg-bark p-8 text-cream transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(84,51,50,0.6)]"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-h3">Accommodation Support</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-cream/70">
                    SIL, SDA, short and medium term accommodation, and in-home respite —
                    living arrangements that genuinely work for you.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-sage-light">
                  Explore accommodation
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </article>
          </Reveal>
        </ul>
      </Section>

      <ApproachSection />
      <PullQuote />
      <Testimonials />
      <LocationsSection tone="cream" />
      <FaqAccordion
        items={faqs.slice(0, 6)}
        tone="sand"
        lead="The questions we're asked most often about NDIS funding, referrals and how our support actually works."
      />
      <CTASection />

      <JsonLd
        data={graph(
          faqSchema(faqs.slice(0, 6)),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          {
            "@type": "ItemList",
            name: "Support services",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              url: `${SITE_URL}/services/${s.slug}`,
            })),
          },
        )}
      />
    </>
  );
}
