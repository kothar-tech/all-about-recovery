import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "cream" | "sand" | "bark" | "sage" | "sageLight" | "shell" | "none";

const tones: Record<Tone, string> = {
  cream: "bg-cream text-bark",
  shell: "bg-shell text-bark",
  sand: "bg-sand text-bark",
  bark: "bg-bark text-cream",
  sage: "bg-sage text-cream",
  sageLight: "bg-sage-light text-bark",
  none: "",
};

/**
 * Every section on the site uses this wrapper, which is what keeps the
 * vertical rhythm and horizontal gutters identical from page to page.
 */
export function Section({
  id,
  tone = "cream",
  size = "md",
  className = "",
  containerClassName = "",
  children,
  ariaLabel,
}: {
  id?: string;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const pad =
    size === "sm"
      ? "py-14 md:py-20"
      : size === "lg"
        ? "py-24 md:py-32 lg:py-40"
        : "py-20 md:py-28 lg:py-32";

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`${tones[tone]} ${pad} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
