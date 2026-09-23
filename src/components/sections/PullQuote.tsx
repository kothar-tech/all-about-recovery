import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const words = [
  "Empowering", "people", "to", "move", "from",
  "vulnerability", "to", "confidence",
];

const highlight = new Set(["vulnerability", "confidence"]);

export function PullQuote() {
  return (
    <section
      aria-label="Our purpose"
      className="relative overflow-hidden bg-sage-light py-20 text-bark-deep md:py-28"
    >
      {/* Soft organic washes in the same family, for depth without new colours */}
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-sage/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-28 -right-20 size-96 rounded-full bg-sage-pale/50 blur-3xl" />

      <Container className="relative">
        <Reveal>
          <p className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-3 gap-y-1 text-center text-[clamp(1.75rem,1rem+3.4vw,4rem)] font-semibold leading-[1.1] tracking-tight">
            {words.map((w, i) => (
              <span
                key={`${w}-${i}`}
                className={highlight.has(w) ? "italic text-terracotta-ink" : undefined}
              >
                {w}
              </span>
            ))}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
