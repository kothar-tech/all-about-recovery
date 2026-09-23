import type { Metadata } from "next";
import Image from "next/image";
import { testimonials, TESTIMONIALS_ARE_PLACEHOLDER } from "@/data/testimonials";
import { accentStyles } from "@/lib/accents";
import { SITE_URL } from "@/data/site";
import { pageMetadata, graph, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { Quote } from "@/components/ui/Icons";

const description =
  "Stories from the participants, families and support coordinators who work with All About Recovery across Sydney, Dubbo and Tamworth.";

export const metadata: Metadata = pageMetadata({
  title: "Participant Stories & Testimonials",
  description,
  path: "/testimonials",
  image: "/images/celebration-highfive.webp",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Stories", path: "/testimonials" },
];

const [featured, ...rest] = testimonials;

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Participant stories"
        title="The measure of good support is whether life actually feels different"
        lead="Not a policy document, not a service agreement — what people say six months in."
        crumbs={crumbs}
      />

      {TESTIMONIALS_ARE_PLACEHOLDER && (
        <Section tone="cream" size="sm" className="!pb-0">
          <Reveal>
            <p className="flex items-start gap-3 rounded-md border border-terracotta/30 bg-peach-pale/70 px-5 py-4 text-sm text-terracotta-ink">
              <span aria-hidden className="mt-0.5 font-bold">!</span>
              <span>
                <strong className="font-semibold">Placeholder content.</strong>{" "}
                The quotes on this page are samples written to design the layout — they
                are not from real participants. Replace them in{" "}
                <code className="rounded bg-cream/70 px-1.5 py-0.5 text-[0.8125rem]">src/data/testimonials.ts</code>{" "}
                with genuine, consented quotes before this site goes live.
              </span>
            </p>
          </Reveal>
        </Section>
      )}

      {/* ---------- Featured quote ---------- */}
      <Section tone="cream">
        <div className="overflow-hidden rounded-xl bg-bark text-cream md:rounded-2xl">
          <div className="grid lg:grid-cols-5">
            <div className="relative min-h-[280px] lg:col-span-2 lg:min-h-full">
              <Image
                src="/images/celebration-highfive.webp"
                alt="Two people celebrating together outdoors with a high five"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figure className="flex flex-col justify-center gap-8 p-8 sm:p-12 lg:col-span-3 lg:p-16">
              <Quote className="size-10 text-sage-light opacity-70" />
              <blockquote>
                <p className="text-[clamp(1.375rem,1rem+1.4vw,2rem)] font-medium leading-[1.35]">
                  {featured.quote}
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-4 border-t border-cream/15 pt-7">
                <span aria-hidden className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sage-light text-lg font-semibold text-bark">
                  {featured.role.slice(0, 1)}
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold">{featured.name}</span>
                  <span className="text-sm text-cream/70">
                    {featured.role} · {featured.location}
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      {/* ---------- Grid ---------- */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="More stories"
          title="From participants, families and coordinators"
          lead="Support looks different for everyone we work with. These are some of the ways people describe it."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((t, i) => {
            const a = accentStyles[t.accent];
            return (
              <Reveal as="li" key={i} delay={(i % 3) * 90}>
                <figure className="flex h-full flex-col gap-6 rounded-lg bg-cream p-8 ring-1 ring-bark/8">
                  <Quote className={`size-7 ${a.text} opacity-60`} />
                  <blockquote className="flex-1">
                    <p className="leading-relaxed text-bark/80">{t.quote}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3.5 border-t border-bark/10 pt-5">
                    <span aria-hidden className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${a.chip}`}>
                      {t.role.slice(0, 1)}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-bark">{t.name}</span>
                      <span className="text-sm text-bark/75">{t.role} · {t.location}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      {/* ---------- Share your story ---------- */}
      <Section tone="cream">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-5/4 overflow-hidden rounded-2xl">
              <Image
                src="/images/freedom-dancing-bw.webp"
                alt="A person outdoors with arms raised, expressing freedom and joy"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Share your story"
              title="Been supported by our team?"
              lead="If working with us has made a difference, we'd love to hear about it — and with your written permission, share it here so others know what to expect."
            />
            <Reveal delay={180}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/contact" withArrow>Share your experience</Button>
                <Button href="/services" variant="ghost">Explore our services</Button>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 text-sm leading-relaxed text-bark/75">
                We only ever publish a story with written consent, and you choose how
                you&apos;re identified. You can ask us to remove it at any time.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <CTASection />

      <JsonLd
        data={graph(breadcrumbSchema(crumbs), {
          "@type": "CollectionPage",
          name: "Participant stories",
          url: `${SITE_URL}/testimonials`,
          description,
        })}
      />
    </>
  );
}
