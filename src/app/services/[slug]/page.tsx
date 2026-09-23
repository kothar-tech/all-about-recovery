import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
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
import { Check, ArrowRight, serviceIcons } from "@/components/ui/Icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.heroImage,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const a = accentStyles[service.accent];
  const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Services / " + service.title, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Services / ${service.title}`}
        title={service.title}
        lead={service.tagline}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/referrals" size="lg" withArrow>Make a referral</Button>
          <Button href="/contact" variant="ghost" size="lg">Ask a question</Button>
        </div>
      </PageHero>

      {/* ---------- Intro + hero image ---------- */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <span
                aria-hidden
                className={`inline-flex size-14 items-center justify-center rounded-full ${a.bg} text-cream`}
              >
                {Icon && <Icon className="size-7" />}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-h2 mt-7 text-bark">{service.intro.heading}</h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-bark/75">
                {service.intro.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
          </div>
          <Reveal delay={180} className="lg:col-span-6">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src={service.heroImage}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- What we support you with ---------- */}
      <Section tone="sand">
        <SectionHeading eyebrow="What's included" title="What we support you with" />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {service.offerings.map((o, i) => (
            <Reveal as="li" key={o.title} delay={i * 100}>
              <div className="flex h-full flex-col gap-4 rounded-lg bg-cream p-8 ring-1 ring-bark/8">
                <span className={`h-1 w-12 rounded-full ${a.bg}`} aria-hidden />
                <h3 className="text-h3 text-bark">{o.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-bark/75">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ---------- Assurance ---------- */}
      <Section tone="bark">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <h2 className="text-h2">{service.assurance.heading}</h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <div className="flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-cream/70">
              {service.assurance.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Differentiators ---------- */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Why us"
          title={`${service.title} that sees the whole person`}
        />
        <ul className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {service.differentiators.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 100}>
              <div className="flex flex-col gap-4 border-t-2 border-bark/12 pt-7">
                <span className={`text-sm font-semibold ${a.text}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-h3 text-bark">{d.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-bark/75">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ---------- Expectations ---------- */}
      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our commitment" title="What you can expect from us" />
          </div>
          <ul className="flex flex-col gap-5 lg:col-span-7">
            {service.expectations.map((e, i) => (
              <Reveal as="li" key={e} delay={i * 90}>
                <div className="flex items-start gap-4 rounded-md bg-cream p-6 ring-1 ring-bark/8">
                  <span className={`mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full ${a.bg} text-cream`}>
                    <Check className="size-4" strokeWidth={2.2} />
                  </span>
                  <p className="text-[1.0625rem] leading-relaxed text-bark/80">{e}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Testimonials tone="cream" />

      {/* ---------- Other services ---------- */}
      <Section tone="sand" size="sm">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Keep exploring" title="Other ways we can support you" />
          <Reveal delay={100} className="shrink-0">
            <Button href="/services" variant="ghost" withArrow>All services</Button>
          </Reveal>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {others.map((o, i) => {
            const oa = accentStyles[o.accent];
            const OIcon = serviceIcons[o.slug as keyof typeof serviceIcons];
            return (
              <Reveal as="li" key={o.slug} delay={i * 90}>
                <Link
                  href={`/services/${o.slug}`}
                  className="group flex h-full items-center gap-4 rounded-lg bg-cream p-6 ring-1 ring-bark/8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-24px_rgba(84,51,50,0.4)]"
                >
                  <span className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full ${oa.softBg} ${oa.text}`}>
                    {OIcon && <OIcon className="size-5" />}
                  </span>
                  <span className="flex-1 font-semibold text-bark">{o.title}</span>
                  <ArrowRight className="size-4 shrink-0 text-bark/60 transition-all duration-200 group-hover:translate-x-1 group-hover:text-bark" />
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <CTASection />

      <JsonLd
        data={graph(
          breadcrumbSchema(crumbs.map((c, i) =>
            i === 2 ? { name: service.title, path: c.path } : c,
          )),
          serviceSchema(service),
        )}
      />
    </>
  );
}
