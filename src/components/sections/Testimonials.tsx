"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials, TESTIMONIALS_ARE_PLACEHOLDER } from "@/data/testimonials";
import { accentStyles } from "@/lib/accents";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Quote, ArrowRight } from "@/components/ui/Icons";

export function Testimonials({
  tone = "sand",
  heading = "What people tell us",
  eyebrow = "Participant stories",
  lead = "The measure of good support isn't a policy document — it's whether someone's life actually feels different six months later.",
}: {
  tone?: "sand" | "cream";
  heading?: string;
  eyebrow?: string;
  lead?: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, clientWidth, scrollWidth } = track;
    setAtStart(scrollLeft < 8);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 8);

    const cards = Array.from(track.children) as HTMLElement[];
    const centre = scrollLeft + clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    cards.forEach((card, i) => {
      const d = Math.abs(card.offsetLeft + card.offsetWidth / 2 - centre);
      if (d < min) { min = d; closest = i; }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    sync();
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  const step = (dir: -1 | 1) => {
    const next = Math.min(Math.max(active + dir, 0), testimonials.length - 1);
    scrollToCard(next);
  };

  const bg = tone === "sand" ? "bg-sand" : "bg-cream";

  return (
    <section aria-labelledby="testimonials-heading" className={`${bg} py-20 md:py-28 lg:py-32`}>
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={eyebrow}
            title={<span id="testimonials-heading">{heading}</span>}
            lead={lead}
          />

          {/* Carousel controls — also reachable by keyboard via the track itself */}
          <Reveal delay={120} className="shrink-0">
            <div className="flex items-center gap-3">
              <CarouselButton label="Previous testimonial" disabled={atStart} onClick={() => step(-1)} flip />
              <CarouselButton label="Next testimonial" disabled={atEnd} onClick={() => step(1)} />
            </div>
          </Reveal>
        </div>

        {TESTIMONIALS_ARE_PLACEHOLDER && (
          <Reveal delay={60}>
            <p className="mt-8 flex items-start gap-3 rounded-md border border-terracotta/30 bg-peach-pale/70 px-5 py-4 text-sm text-terracotta-ink">
              <span aria-hidden className="mt-0.5 font-bold">!</span>
              <span>
                <strong className="font-semibold">Placeholder content.</strong>{" "}
                These quotes are samples written to design this section — they are
                not from real participants. Replace them in{" "}
                <code className="rounded bg-cream/70 px-1.5 py-0.5 text-[0.8125rem]">src/data/testimonials.ts</code>{" "}
                with genuine, consented quotes before launch.
              </span>
            </p>
          </Reveal>
        )}

        <Reveal delay={160}>
          <ul
            ref={trackRef}
            tabIndex={0}
            aria-label="Participant and coordinator testimonials"
            className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t, i) => {
              const a = accentStyles[t.accent];
              return (
                <li
                  key={i}
                  className="w-[86vw] max-w-[30rem] shrink-0 snap-start sm:w-[60vw] lg:w-[32rem]"
                >
                  <figure className="flex h-full flex-col gap-6 rounded-lg bg-cream p-8 ring-1 ring-bark/8 transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(84,51,50,0.35)] md:p-10">
                    <Quote className={`size-8 ${a.text} opacity-60`} />
                    <blockquote className="flex-1">
                      <p className="text-lg leading-relaxed text-bark/85 md:text-xl">
                        {t.quote}
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center gap-4 border-t border-bark/10 pt-6">
                      <span
                        aria-hidden
                        className={`flex size-12 shrink-0 items-center justify-center rounded-full text-base font-semibold ${a.chip}`}
                      >
                        {t.role.slice(0, 1)}
                      </span>
                      <span className="flex flex-col">
                        <span className="font-semibold text-bark">{t.name}</span>
                        <span className="text-sm text-bark/75">
                          {t.role} · {t.location}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Progress dots */}
        <div className="mt-6 flex items-center justify-center gap-2.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`Go to testimonial ${i + 1} of ${testimonials.length}`}
              aria-current={i === active ? "true" : undefined}
              className="group cursor-pointer p-2"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ease-[var(--ease-out-soft)] ${
                  i === active ? "w-7 bg-bark" : "w-1.5 bg-bark/25 group-hover:bg-bark/50"
                }`}
              />
            </button>
          ))}
        </div>
        <p aria-live="polite" className="sr-only">
          Testimonial {active + 1} of {testimonials.length}
        </p>
      </Container>
    </section>
  );
}

function CarouselButton({
  label, disabled, onClick, flip = false,
}: {
  label: string; disabled: boolean; onClick: () => void; flip?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex size-12 cursor-pointer items-center justify-center rounded-full text-bark ring-1 ring-inset ring-bark/20 transition-all duration-200 hover:bg-bark hover:text-cream hover:ring-bark disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-bark disabled:hover:ring-bark/20"
    >
      <ArrowRight className={`size-5 ${flip ? "rotate-180" : ""}`} />
    </button>
  );
}
