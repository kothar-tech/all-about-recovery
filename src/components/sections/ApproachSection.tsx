import Image from "next/image";
import { approach } from "@/data/values";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ApproachSection() {
  return (
    <section aria-labelledby="approach-heading" className="bg-bark py-20 text-cream md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why choose us"
              eyebrowTone="cream"
              title={<span id="approach-heading">We take the time to listen, understand, and work alongside you</span>}
              lead="A personalised plan that supports you holistically — built with you, not handed to you."
              leadClassName="text-cream/70"
            />

            <Reveal delay={200}>
              <div className="relative mt-12 aspect-4/3 overflow-hidden rounded-xl">
                <Image
                  src="/images/coffee-conversation.webp"
                  alt="A support worker and participant talking over coffee in a bright room"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <ol className="lg:col-span-7">
            {approach.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 110}>
                <div className="flex gap-6 border-b border-cream/12 py-8 first:pt-0 last:border-0 md:gap-10 md:py-10">
                  <span
                    aria-hidden
                    className="shrink-0 text-4xl font-semibold leading-none text-sage-light/60 md:text-5xl"
                  >
                    {item.step}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-h3">{item.title}</h3>
                    <p className="max-w-xl leading-relaxed text-cream/70">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
