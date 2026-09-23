import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "@/components/ui/Icons";

const pillars = [
  "Community connection",
  "Inclusive environment",
  "Choice-centred approach",
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cream pt-6 md:pt-10"
      aria-labelledby="hero-heading"
    >
      <Container>
        {/* Intro line above the fold, mirroring the original site's rhythm */}
        <Reveal>
          <p className="max-w-xl text-[0.9375rem] leading-relaxed text-bark/75 md:text-base">
            We help our participants move from vulnerability to confidence so
            they can be themselves and belong.
          </p>
        </Reveal>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Headline block */}
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <h1 id="hero-heading" className="text-display text-bark">
                We empower people with{" "}
                <span className="relative inline-block">
                  <span className="text-sage z-10">psychosocial</span>
                </span>
                disabilities
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-lead mt-8 max-w-xl text-bark/75">
                A registered NDIS provider working alongside people navigating
                mental health and psychosocial challenges across Sydney, Dubbo
                and Tamworth.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/services" size="lg" withArrow>
                  Explore our services
                </Button>
                <Button href="/referrals" variant="ghost" size="lg">
                  Make a referral
                </Button>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                {pillars.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2.5 text-[0.9375rem] font-medium text-bark/75"
                  >
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-sage text-cream">
                      <Check className="size-3" strokeWidth={2.4} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Hero image, organic rounded frame */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -left-8 -top-8 -z-10 size-40 rounded-full bg-sage-light/60 blur-2xl md:size-56"
                />
                <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-sage-light/40 lg:aspect-3/4">
                  <Image
                    src="/images/hero-group-walking.webp"
                    alt="A group of friends walking together along a road, arms linked and laughing"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 rounded-lg bg-sage-light px-6 py-5 text-bark shadow-[0_18px_40px_-20px_rgba(84,51,50,0.55)] sm:-left-6">
                  <p className="text-3xl font-semibold leading-none text-bark-deep">
                    3
                  </p>
                  <p className="mt-1.5 text-[0.8125rem] leading-snug text-bark">
                    NSW regions
                    <br />
                    Sydney · Dubbo · Tamworth
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
