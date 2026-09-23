import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Plus } from "@/components/ui/Icons";
import type { Faq } from "@/data/faqs";

/**
 * Native <details> accordion — keyboard accessible and fully readable with
 * JavaScript disabled, which also means the answers are always crawlable.
 */
export function FaqAccordion({
  items,
  eyebrow = "Questions",
  heading = "Frequently asked questions",
  lead,
  tone = "cream",
  showCta = true,
}: {
  items: Faq[];
  eyebrow?: string;
  heading?: string;
  lead?: string;
  tone?: "cream" | "sand";
  showCta?: boolean;
}) {
  const bg = tone === "cream" ? "bg-cream" : "bg-sand";

  return (
    <section aria-labelledby="faq-heading" className={`${bg} py-20 md:py-28 lg:py-32`}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={eyebrow}
              title={<span id="faq-heading">{heading}</span>}
              lead={lead}
            />
            {showCta && (
              <Reveal delay={180}>
                <div className="mt-8">
                  <p className="mb-5 text-[0.9375rem] text-bark/75">
                    Can&apos;t find what you&apos;re after? A real person answers our phone.
                  </p>
                  <Button href="/contact" variant="ghost" withArrow>
                    Ask us directly
                  </Button>
                </div>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-7">
            <ul className="flex flex-col">
              {items.map((faq, i) => (
                <Reveal as="li" key={faq.question} delay={i * 40}>
                  <details className="group border-b border-bark/12">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
                      <h3 className="text-[1.0625rem] font-semibold leading-snug text-bark transition-colors group-hover:text-terracotta md:text-lg">
                        {faq.question}
                      </h3>
                      <span
                        aria-hidden
                        className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-sand text-bark transition-all duration-300 ease-[var(--ease-out-soft)] group-hover:bg-terracotta group-hover:text-cream group-open:rotate-45"
                      >
                        <Plus className="size-4" />
                      </span>
                    </summary>
                    <div className="pb-7 pr-12">
                      <p className="text-[0.9375rem] leading-relaxed text-bark/75 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
