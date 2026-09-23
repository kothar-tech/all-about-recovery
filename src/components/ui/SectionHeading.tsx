import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Align = "left" | "center";

export function Eyebrow({
  children,
  tone = "sage",
  className = "",
}: {
  children: ReactNode;
  tone?: "sage" | "terracotta" | "teal" | "cream";
  className?: string;
}) {
  const tones = {
    sage: "text-sage-deep",
    terracotta: "text-terracotta-ink",
    teal: "text-teal-ink",
    cream: "text-sage-light",
  };
  return (
    <p
      className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] ${tones[tone]} ${className}`}
    >
      <span aria-hidden className="inline-block h-px w-7 bg-current opacity-60" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  eyebrowTone = "sage",
  title,
  lead,
  align = "left",
  titleClassName = "",
  leadClassName = "",
  children,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  eyebrowTone?: "sage" | "terracotta" | "teal" | "cream";
  title: ReactNode;
  lead?: ReactNode;
  align?: Align;
  titleClassName?: string;
  leadClassName?: string;
  children?: ReactNode;
  as?: "h1" | "h2";
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start";

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${alignment}`}>
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <Tag className={`text-h2 ${titleClassName}`}>{title}</Tag>
      {lead && (
        <p className={`text-lead max-w-2xl opacity-80 ${leadClassName}`}>{lead}</p>
      )}
      {children}
    </Reveal>
  );
}
