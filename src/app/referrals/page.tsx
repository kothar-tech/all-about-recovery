import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/data/site";
import { pageMetadata, graph, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { CTASection } from "@/components/sections/CTASection";
import { Phone, Mail, Check } from "@/components/ui/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Make a Referral",
  description:
    "Refer yourself or someone else to All About Recovery. Support coordinators, families, clinicians and participants are all welcome to start a referral online or by phone.",
  path: "/referrals",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Referrals", path: "/referrals" },
];

const whoCanRefer = [
  "Participants referring themselves",
  "Family members and carers",
  "Support coordinators and plan managers",
  "Clinicians, case workers and hospital teams",
  "Justice and corrections services",
];

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        eyebrow="Referrals"
        title="Make a referral"
        lead="Whether you're a support coordinator, family member, or someone exploring options for yourself, we're here to help."
        crumbs={crumbs}
      />

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Process */}
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="About the process" title="The right support starts with understanding what matters to you" />
            <Reveal delay={140}>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-bark/75">
                When you reach out, we&apos;ll listen, answer your questions, and explore
                whether we&apos;re the right fit. Fill out the form and we&apos;ll be in touch as
                soon as possible.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 rounded-lg bg-sage-pale p-7">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-sage-deep">
                  Who can make a referral
                </h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {whoCanRefer.map((w) => (
                    <li key={w} className="flex items-start gap-3 text-[0.9375rem] text-bark/80">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-sage text-cream">
                        <Check className="size-3" strokeWidth={2.6} />
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-sage/25 pt-5 text-sm leading-relaxed text-bark/75">
                  If you&apos;re referring someone else, please make sure they know and have
                  agreed to the referral.
                </p>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-col gap-3">
                <p className="text-sm font-semibold uppercase tracking-wider text-bark/75">
                  Prefer to talk it through?
                </p>
                <a href={site.phoneHref} className="flex items-center gap-3 text-xl font-semibold text-bark transition-colors hover:text-terracotta">
                  <Phone className="size-5 text-terracotta" /> {site.phone}
                </a>
                <a href={site.emailHref} className="flex items-center gap-3 break-all text-[0.9375rem] text-bark/75 transition-colors hover:text-terracotta">
                  <Mail className="size-5 shrink-0 text-terracotta" /> {site.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="relative mt-10 aspect-4/3 overflow-hidden rounded-xl">
                <Image
                  src="/images/planning-session.webp"
                  alt="A coordinator and participant planning supports together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-xl bg-sand p-8 md:p-10">
                <h2 className="text-h3 text-bark">Referral form</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-bark/75">
                  Tell us a little about the support you&apos;re looking for. Fields marked{" "}
                  <span className="text-terracotta-ink">*</span> are required — everything
                  else is optional and helps us prepare for the first conversation.
                </p>
                <div className="mt-8">
                  <EnquiryForm variant="referral" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CTASection
        title="Not sure if we're the right fit?"
        lead="Call us and ask. We'll give you an honest answer, and if another service suits you better we'll tell you who to try."
        image="/images/outdoor-group-chat.webp"
        imageAlt="A group sitting outdoors together in conversation"
      />

      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
    </>
  );
}
