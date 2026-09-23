import type { Metadata } from "next";
import Image from "next/image";
import { values } from "@/data/values";
import { SITE_URL, site } from "@/data/site";
import { accentStyles } from "@/lib/accents";
import { pageMetadata, graph, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

const description =
  "Meet All About Recovery — a registered NDIS provider supporting people with psychosocial disability across Sydney, Dubbo and Tamworth. Our vision, mission and values.";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description,
  path: "/about",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We're a team of people who genuinely care"
        lead="About you, your goals, and what's possible when the right support shows up consistently."
        crumbs={crumbs}
      />

      {/* ---------- Intro ---------- */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who we are"
              title="Specialist expertise, delivered by people who show up as human beings first"
            />
            <Reveal delay={140}>
              <div className="mt-7 flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-bark/75">
                <p>
                  We work alongside people navigating mental health challenges, complex
                  care needs, justice involvement, and the everyday realities of living
                  with disability.
                </p>
                <p>
                  Plenty of providers will tell you they are person-centred. What that
                  means here is specific: we ask before we assume, we write plans in
                  your words rather than ours, and we keep the same familiar faces
                  around you so you are not re-explaining your life every fortnight.
                </p>
                <p>
                  We are a registered NDIS provider, which means we are independently
                  audited against the NDIS Practice Standards and bound by the NDIS Code
                  of Conduct. It also means we can support participants whose plans are
                  NDIA-managed, plan-managed or self-managed.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src="/images/group-session-livingroom.webp"
                alt="A small group in conversation in a warm, light-filled living room"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Vision & mission ---------- */}
      <Section tone="bark">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="flex h-full flex-col gap-5 border-t-2 border-sage-light pt-8">
              <h2 className="text-h3 text-sage-light">Our vision</h2>
              <p className="text-[1.0625rem] leading-relaxed text-cream/80 md:text-xl md:leading-relaxed">
                To build, renew and rise. We envision a community where every person has
                the support and courage to become stronger through recovery — not
                because someone fixed them, but because someone walked alongside them.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5 border-t-2 border-peach pt-8">
              <h2 className="text-h3 text-peach">Our mission</h2>
              <p className="text-[1.0625rem] leading-relaxed text-cream/80 md:text-xl md:leading-relaxed">
                To transform experiences of struggle into stories of strength. We create
                safe, person-centred environments where people are seen, heard and
                empowered to regain independence. Not with a clipboard and a checklist,
                but with genuine care, consistency and commitment.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Values ---------- */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Our core values"
          title="What we stand for shapes how we show up"
          lead="For our participants, our team, and our community."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => {
            const a = accentStyles[v.accent];
            return (
              <Reveal as="li" key={v.title} delay={i * 100}>
                <div className={`flex h-full flex-col gap-5 rounded-lg ${a.softBg} p-8 md:p-9`}>
                  <span className={`inline-flex size-11 items-center justify-center rounded-full ${a.bg} text-lg font-semibold text-cream`}>
                    {i + 1}
                  </span>
                  <h3 className="text-h3 text-bark">{v.title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-bark/75">{v.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      {/* ---------- How we support you ---------- */}
      <Section tone="sand">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-5/4 overflow-hidden rounded-2xl">
              <Image
                src="/images/craft-activity.webp"
                alt="A support worker and participant working on a craft activity together"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="How we support you"
              title="We listen, we understand, and we walk alongside you"
            />
            <Reveal delay={140}>
              <div className="mt-7 flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-bark/75">
                <p>
                  Support at All About Recovery starts with a conversation, not a form.
                  We want to understand what a good week looks like for you before we
                  put a single hour into a roster.
                </p>
                <p>
                  From there, everything is built around that: the workers we match you
                  with, the hours we suggest, the goals we write down, and the way we
                  measure whether it is actually working.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/services" withArrow>Explore our services</Button>
                <Button href="/contact" variant="ghost">Talk to our team</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Testimonials tone="cream" eyebrow="In their words" heading="What people tell us" />
      <LocationsSection tone="sand" />
      <CTASection
        image="/images/group-hug.webp"
        imageAlt="A group of people sharing a warm embrace"
      />

      <JsonLd
        data={graph(breadcrumbSchema(crumbs), {
          "@type": "AboutPage",
          name: `About ${site.name}`,
          url: `${SITE_URL}/about`,
          description,
        })}
      />
    </>
  );
}
