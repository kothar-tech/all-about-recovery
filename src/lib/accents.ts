export type Accent = "sage" | "terracotta" | "teal";

/** Single source of truth so accent colours never drift between components. */
export const accentStyles: Record<
  Accent,
  { text: string; bg: string; softBg: string; ring: string; chip: string; dot: string }
> = {
  sage: {
    text: "text-sage-deep",
    bg: "bg-sage",
    softBg: "bg-sage-pale",
    ring: "ring-sage/25",
    chip: "bg-sage-pale text-bark",
    dot: "bg-sage",
  },
  terracotta: {
    text: "text-terracotta-ink",
    bg: "bg-terracotta",
    softBg: "bg-peach-pale",
    ring: "ring-terracotta/25",
    chip: "bg-peach-pale text-bark",
    dot: "bg-terracotta",
  },
  teal: {
    text: "text-teal-ink",
    bg: "bg-teal",
    softBg: "bg-teal-light",
    ring: "ring-teal/25",
    chip: "bg-teal-light text-bark",
    dot: "bg-teal",
  },
};
