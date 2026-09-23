import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs, type Crumb } from "@/components/sections/Breadcrumbs";

/** Shared hero for every inner page — keeps spacing identical across the site. */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
  tone = "sand",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
  children?: ReactNode;
  tone?: "sand" | "cream" | "bark";
}) {
  const tones = {
    sand: "bg-sand text-bark",
    cream: "bg-cream text-bark",
    bark: "bg-bark text-cream",
  };

  return (
    <div className={`${tones[tone]} relative overflow-hidden`}>
      {/* Decorative organic wash, echoing the brand's blob shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 size-[34rem] rounded-full bg-sage-light/25 blur-3xl"
      />
      <Container className="relative pb-16 pt-10 md:pb-24 md:pt-14">
        <Breadcrumbs items={crumbs} tone={tone === "bark" ? "light" : "dark"} />
        <div className="mt-10 flex max-w-4xl flex-col gap-6 md:mt-14">
          {eyebrow && (
            <Reveal>
              <Eyebrow tone={tone === "bark" ? "cream" : "sage"}>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={60}>
            <h1 className="text-display max-w-3xl">{title}</h1>
          </Reveal>
          {lead && (
            <Reveal delay={120}>
              <p className="text-lead max-w-2xl opacity-75">{lead}</p>
            </Reveal>
          )}
          {children && <Reveal delay={180}>{children}</Reveal>}
        </div>
      </Container>
    </div>
  );
}
