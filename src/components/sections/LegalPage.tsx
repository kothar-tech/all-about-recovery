import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export type LegalSection = { heading: string; body: ReactNode };

export function LegalBody({
  updated,
  intro,
  sections,
  reviewNote = true,
}: {
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
  reviewNote?: boolean;
}) {
  return (
    <section className="bg-cream py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky contents */}
          <nav aria-label="On this page" className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                On this page
              </h2>
              <ol className="mt-5 flex flex-col gap-2.5">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#s${i + 1}`}
                      className="flex gap-3 text-[0.9375rem] text-bark/75 transition-colors hover:text-bark"
                    >
                      <span className="tabular-nums text-bark/75">{String(i + 1).padStart(2, "0")}</span>
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-8 border-t border-bark/12 pt-6 text-sm text-bark/75">
                Last updated: {updated}
              </p>
            </div>
          </nav>

          <div className="lg:col-span-8">
            {reviewNote && (
              <Reveal>
                <p className="mb-10 rounded-md border border-terracotta/30 bg-peach-pale/60 px-5 py-4 text-sm leading-relaxed text-terracotta-ink">
                  <strong className="font-semibold">Template for review.</strong> This
                  document is a starting draft written for an Australian registered NDIS
                  provider. Have it reviewed by your legal adviser and update the
                  organisation details before publishing.
                </p>
              </Reveal>
            )}

            <Reveal delay={60}>
              <div className="flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-bark/75">
                {intro}
              </div>
            </Reveal>

            <div className="mt-12 flex flex-col gap-11">
              {sections.map((s, i) => (
                <Reveal key={s.heading} delay={40}>
                  <div id={`s${i + 1}`} className="scroll-mt-28">
                    <h2 className="text-h3 text-bark">
                      <span className="mr-3 text-bark/60 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.heading}
                    </h2>
                    <div className="mt-5 flex flex-col gap-4 text-[1.0625rem] leading-relaxed text-bark/75 [&_a]:font-medium [&_a]:text-bark [&_a]:underline [&_a]:underline-offset-4 [&_li]:leading-relaxed [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
                      {s.body}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
