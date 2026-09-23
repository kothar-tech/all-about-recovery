import type { Metadata } from "next";
import { site, locations } from "@/data/site";
import { pageMetadata, graph, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqs } from "@/data/faqs";
import { Phone, Mail, Clock, Instagram, Facebook } from "@/components/ui/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact All About Recovery — call 1300 011 227, email us, or visit our Penrith, Dubbo or Tamworth offices. We'll listen first and tell you honestly if we're the right fit.",
  path: "/contact",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Have a question? Let's talk."
        lead="Whether you're exploring options for yourself, a family member, or a participant you coordinate for — we'll listen first."
        crumbs={crumbs}
      />

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Contact details */}
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Talk to a person" title="The fastest ways to reach us" />

            <Reveal delay={140}>
              <ul className="mt-9 flex flex-col gap-4">
                <li>
                  <a
                    href={site.phoneHref}
                    className="group flex items-start gap-4 rounded-lg bg-sand p-6 transition-colors hover:bg-sand-deep"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-terracotta text-cream">
                      <Phone className="size-5" />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-sm font-semibold uppercase tracking-wider text-bark/75">Phone us</span>
                      <span className="text-2xl font-semibold text-bark">{site.phone}</span>
                      <span className="text-sm text-bark/75">Monday to Friday, business hours</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.emailHref}
                    className="group flex items-start gap-4 rounded-lg bg-sand p-6 transition-colors hover:bg-sand-deep"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-sage text-cream">
                      <Mail className="size-5" />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-sm font-semibold uppercase tracking-wider text-bark/75">Email us</span>
                      <span className="break-all text-lg font-semibold text-bark">{site.email}</span>
                      <span className="text-sm text-bark/75">We aim to reply within one business day</span>
                    </span>
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-4 rounded-lg bg-sage-pale p-6">
                <h2 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-sage-deep">
                  <Clock className="size-4" /> Office hours
                </h2>
                <ul className="flex flex-col gap-2 text-[0.9375rem] text-bark/75">
                  {locations.map((l) => (
                    <li key={l.name} className="flex justify-between gap-4">
                      <span className="font-medium">{l.name}</span>
                      <span className="text-bark/75">{l.hoursDays}, {l.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-bark/75">Follow along</h2>
                <div className="mt-4 flex gap-3">
                  <a
                    href={site.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow All About Recovery on Instagram"
                    className="inline-flex size-12 items-center justify-center rounded-full text-bark ring-1 ring-inset ring-bark/20 transition-all hover:bg-bark hover:text-cream hover:ring-bark"
                  >
                    <Instagram className="size-5" />
                  </a>
                  <a
                    href={site.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow All About Recovery on Facebook"
                    className="inline-flex size-12 items-center justify-center rounded-full text-bark ring-1 ring-inset ring-bark/20 transition-all hover:bg-bark hover:text-cream hover:ring-bark"
                  >
                    <Facebook className="size-5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-xl bg-sand p-8 md:p-10">
                <h2 className="text-h3 text-bark">Send us a message</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-bark/75">
                  Fill in the form and a member of our team will be in touch. Fields
                  marked <span className="text-terracotta-ink">*</span> are required.
                </p>
                <div className="mt-8">
                  <EnquiryForm variant="contact" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <LocationsSection tone="sand" />

      {/* ---------- Feedback & complaints ---------- */}
      <Section tone="cream" id="feedback">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Feedback & complaints" title="Tell us when something isn't right" />
          </div>
          <Reveal delay={140} className="lg:col-span-7">
            <div className="flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-bark/75">
              <p>
                You can raise feedback or a complaint with your support worker, your
                coordinator, or by contacting our office directly on{" "}
                <a href={site.phoneHref} className="font-semibold text-bark underline underline-offset-4">{site.phone}</a>{" "}
                or{" "}
                <a href={site.emailHref} className="font-semibold text-bark underline underline-offset-4">{site.email}</a>.
              </p>
              <p>
                Every complaint is acknowledged, recorded and responded to. You can ask
                a family member, friend or advocate to raise it for you, and you can
                stay anonymous if you would prefer.
              </p>
              <p>
                You also always have the right to contact the{" "}
                <strong className="font-semibold text-bark">NDIS Quality and Safeguards Commission</strong>{" "}
                on{" "}
                <a href="tel:1800035544" className="font-semibold text-bark underline underline-offset-4">1800 035 544</a>.
                Using that right will never affect the support you receive from us.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <FaqAccordion
        items={faqs.slice(0, 5)}
        tone="sand"
        showCta={false}
        lead="A few things worth knowing before you get in touch."
      />

      <JsonLd
        data={graph(breadcrumbSchema(crumbs), {
          "@type": "ContactPage",
          name: "Contact All About Recovery",
          url: `${site.url}/contact`,
        })}
      />
    </>
  );
}
