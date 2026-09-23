import Image from "next/image";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Phone, Mail } from "@/components/ui/Icons";

export function CTASection({
  title = "Have a question? Let's talk.",
  lead = "Whether you're exploring options for yourself, a family member or a participant you coordinate for, we'll listen first and tell you honestly whether we're the right fit.",
  image = "/images/sunset-friends.webp",
  imageAlt = "Friends standing together with arms around each other at sunset",
}: {
  title?: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-cream py-20 md:py-28 lg:py-32"
    >
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-bark text-cream md:rounded-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-7 p-8 sm:p-12 lg:p-16">
              <Reveal>
                <Eyebrow tone="cream">Get in touch</Eyebrow>
              </Reveal>
              <Reveal delay={60}>
                <h2 id="cta-heading" className="text-h2">
                  {title}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="max-w-lg text-[1.0625rem] leading-relaxed text-cream/70">
                  {lead}
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href="/contact" variant="primary" size="lg" withArrow>
                    Contact us
                  </Button>
                  <Button href="/referrals" variant="light" size="lg">
                    Make a referral
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <dl className="mt-2 grid gap-5 border-t border-cream/15 pt-7 sm:grid-cols-2">
                  <div>
                    <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sage-light">
                      <Phone className="size-3.5" /> Phone us
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={site.phoneHref}
                        className="text-xl font-semibold transition-colors hover:text-sage-light"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sage-light">
                      <Mail className="size-3.5" /> Email us
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={site.emailHref}
                        className="break-all text-[0.9375rem] font-medium transition-colors hover:text-sage-light"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-bark/45 via-transparent to-transparent lg:bg-gradient-to-r lg:from-bark/60 lg:via-bark/10"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
