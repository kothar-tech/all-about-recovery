import type { Metadata } from "next";
import { services } from "@/data/services";
import { SITE_URL } from "@/data/site";
import { pageMetadata, graph, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight } from "@/components/ui/Icons";
import Image from "next/image";

const description =
  "Explore All About Recovery's NDIS services — daily living, goal-focused support, community connection, mental health, support coordination, complex care and forensic support across Sydney, Dubbo and Tamworth.";

export const metadata: Metadata = pageMetadata({
  title: "Our Services",
  description,
  path: "/services",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Psychosocial support that fits your life, not the other way around"
        lead="Seven support types plus accommodation, all delivered by one team — so information moves properly and nothing falls through the gaps between services."
        crumbs={crumbs}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/referrals" size="lg" withArrow>Make a referral</Button>
          <Button href="/contact" variant="ghost" size="lg">Ask a question</Button>
        </div>
      </PageHero>

      <Section tone="cream" ariaLabel="Support services">
        <h2 className="sr-only">Our support services</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={(i % 3) * 90}>
              <ServiceCard service={service} priority={i < 3} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ---------- Accommodation feature ---------- */}
      <Section tone="sand">
        <div className="overflow-hidden rounded-xl bg-bark text-cream md:rounded-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[300px] lg:min-h-full">
              <Image
                src="/images/beach-embrace.webp"
                alt="Two people sitting close together on a beach, sharing a quiet moment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 p-8 sm:p-12 lg:p-16">
              <Reveal>
                <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-sage-light">
                  <span aria-hidden className="inline-block h-px w-7 bg-current opacity-60" />
                  Also available
                </p>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="text-h2">Accommodation Support</h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="max-w-lg leading-relaxed text-cream/70">
                  Where you live shapes your sense of security, independence and quality
                  of life. We provide Supported Independent Living, Specialist Disability
                  Accommodation guidance, short and medium term accommodation, and
                  in-home respite.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <ul className="flex flex-wrap gap-2">
                  {["SIL", "SDA", "STA", "MTA", "In-home respite"].map((tag) => (
                    <li key={tag} className="rounded-full bg-cream/10 px-4 py-1.5 text-sm text-cream/80">
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-2">
                  <Button href="/accommodation-support" variant="light" size="lg" withArrow>
                    Explore accommodation support
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------- How to get started ---------- */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Getting started"
          title="Three steps from first call to first shift"
          lead="No long forms before anyone has spoken to you, and no commitment until you're sure."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Get in touch", d: "Call, email or send the referral form. You can refer yourself, or someone can refer on your behalf with your consent." },
            { n: "02", t: "We talk it through", d: "A real conversation about what you're looking for, what your plan funds, and whether we're genuinely the right fit for you." },
            { n: "03", t: "Support begins", d: "We agree the supports, match you with workers you're comfortable with, and start — adjusting as we learn what works." },
          ].map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 100}>
              <div className="flex h-full flex-col gap-4 rounded-lg bg-sand p-8">
                <span className="text-4xl font-semibold leading-none text-terracotta/45">{step.n}</span>
                <h3 className="text-h3 text-bark">{step.t}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-bark/75">{step.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={320}>
          <p className="mt-10 flex flex-wrap items-center gap-2 text-[0.9375rem] text-bark/75">
            Not sure which support you need?
            <a href="/contact" className="inline-flex items-center gap-1.5 font-semibold text-bark underline underline-offset-4 transition-colors hover:text-terracotta">
              Talk it through with us <ArrowRight className="size-4" />
            </a>
          </p>
        </Reveal>
      </Section>

      <Testimonials tone="sand" />
      <CTASection />

      <JsonLd
        data={graph(
          breadcrumbSchema(crumbs),
          ...services.map((s) => serviceSchema(s)),
          {
            "@type": "CollectionPage",
            name: "Our services",
            url: `${SITE_URL}/services`,
            description,
          },
        )}
      />
    </>
  );
}
