import type { Metadata } from "next";
import Image from "next/image";
import { accommodation } from "@/data/services";
import { accentStyles } from "@/lib/accents";
import { pageMetadata, graph, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { Check, IconHome } from "@/components/ui/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Accommodation Support — SIL, SDA, STA & MTA",
  description: accommodation.metaDescription,
  path: "/accommodation-support",
  image: "/images/beach-embrace.webp",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Accommodation Support", path: "/accommodation-support" },
];

export default function AccommodationPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodation"
        title={accommodation.title}
        lead={accommodation.tagline}
        crumbs={crumbs}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/referrals" size="lg" withArrow>Make a referral</Button>
          <Button href="/contact" variant="ghost" size="lg">Ask a question</Button>
        </div>
      </PageHero>

      {/* ---------- Intro ---------- */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <span aria-hidden className="inline-flex size-14 items-center justify-center rounded-full bg-sage text-cream">
                <IconHome className="size-7" />
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-h2 mt-7 text-bark">{accommodation.intro.heading}</h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-bark/75">
                {accommodation.intro.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
          </div>
          <Reveal delay={180} className="lg:col-span-6">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src="/images/sitting-together.webp"
                alt="Two people sitting together at home in comfortable, familiar surroundings"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Accommodation types ---------- */}
      {accommodation.groups.map((group, gi) => {
        const a = accentStyles[group.accent];
        return (
          <Section key={group.label} tone={gi % 2 === 0 ? "sand" : "cream"}>
            <SectionHeading
              eyebrow={gi === 0 ? "Long term" : "Short term"}
              eyebrowTone={group.accent}
              title={group.label}
              lead={group.blurb}
            />
            <ul className="mt-14 grid gap-6 md:grid-cols-2">
              {group.items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 110}>
                  <div
                    className={`flex h-full flex-col gap-5 rounded-lg ${gi % 2 === 0 ? "bg-cream" : "bg-sand"} p-8 ring-1 ring-bark/8 md:p-10`}
                  >
                    <span className={`inline-flex w-fit items-center rounded-full ${a.chip} px-4 py-1.5 text-sm font-semibold`}>
                      {item.title.match(/\(([^)]+)\)/)?.[1] ?? "Accommodation"}
                    </span>
                    <h3 className="text-h3 text-bark">{item.title}</h3>
                    <p className="text-[0.9375rem] leading-relaxed text-bark/75">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Section>
        );
      })}

      {/* ---------- Differentiators ---------- */}
      <Section tone="bark">
        <SectionHeading
          eyebrow="Why us"
          eyebrowTone="cream"
          title="Accommodation support that feels like home"
        />
        <ul className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {accommodation.differentiators.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 100}>
              <div className="flex flex-col gap-4 border-t-2 border-cream/20 pt-7">
                <span className="text-sm font-semibold text-sage-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-h3">{d.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-cream/70">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ---------- Expectations ---------- */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our commitment" title="What you can expect from us" />
          </div>
          <ul className="flex flex-col gap-5 lg:col-span-7">
            {accommodation.expectations.map((e, i) => (
              <Reveal as="li" key={e} delay={i * 90}>
                <div className="flex items-start gap-4 rounded-md bg-sand p-6">
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-sage text-cream">
                    <Check className="size-4" strokeWidth={2.2} />
                  </span>
                  <p className="text-[1.0625rem] leading-relaxed text-bark/80">{e}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Testimonials tone="sand" />
      <CTASection
        image="/images/care-closeness.webp"
        imageAlt="Two people sharing a close, supportive moment"
      />

      <JsonLd
        data={graph(
          breadcrumbSchema(crumbs),
          serviceSchema({
            title: accommodation.title,
            slug: "accommodation-support",
            summary: accommodation.metaDescription,
            isAccommodation: true,
          }),
        )}
      />
    </>
  );
}
