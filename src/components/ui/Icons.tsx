import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUpRight = (p: IconProps) => (
  <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Phone = (p: IconProps) => (
  <svg {...base} {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>
);
export const Mail = (p: IconProps) => (
  <svg {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2.5 6.5 8.4 5.6a2 2 0 0 0 2.2 0l8.4-5.6" /></svg>
);
export const MapPin = (p: IconProps) => (
  <svg {...base} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const Clock = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Check = (p: IconProps) => (
  <svg {...base} {...p}><path d="m4 12.5 5 5 11-11" /></svg>
);
export const Plus = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Quote = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...p}>
    <path d="M9.6 5.5c-3.5 1.6-5.6 4.6-5.6 8.3 0 3 1.7 5 4.2 5 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.3 0-.7 0-1 .2.4-1.8 1.8-3.4 3.7-4.4l-1.7-2.1Zm9.1 0c-3.5 1.6-5.6 4.6-5.6 8.3 0 3 1.7 5 4.2 5 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.3 0-.7 0-1 .2.4-1.8 1.8-3.4 3.7-4.4l-1.7-2.1Z" />
  </svg>
);
export const Menu = (p: IconProps) => (
  <svg {...base} strokeWidth={1.8} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p: IconProps) => (
  <svg {...base} strokeWidth={1.8} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const ChevronDown = (p: IconProps) => (
  <svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
);
export const Instagram = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.8" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>
);
export const Facebook = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...p}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
  </svg>
);

/* --- Service iconography: one distinct mark per service --- */
export const IconHome = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 10.5 12 3l9 7.5" /><path d="M5.5 9.5V20h13V9.5" /><path d="M9.5 20v-5.5h5V20" /></svg>
);
export const IconTarget = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>
);
export const IconUsers = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="9" cy="8" r="3.4" /><path d="M2.8 20a6.2 6.2 0 0 1 12.4 0" /><path d="M16.5 5.2a3.4 3.4 0 0 1 0 6.6" /><path d="M18.4 14.4A6.2 6.2 0 0 1 21.6 20" /></svg>
);
export const IconHeart = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 20s-7.5-4.4-7.5-9.5A4.5 4.5 0 0 1 12 7.8a4.5 4.5 0 0 1 7.5 2.7C19.5 15.6 12 20 12 20Z" /></svg>
);
export const IconCompass = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5.2-5.2 2 2-5.2 5.2-2Z" /></svg>
);
export const IconShield = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3 5 6v5.5c0 4.3 2.9 7.8 7 9.5 4.1-1.7 7-5.2 7-9.5V6l-7-3Z" /><path d="m9 12 2.2 2.2L15.5 10" /></svg>
);
export const IconScale = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 4v16M7 20h10" /><path d="M5 8h14M5 8l-2.5 5.5h5L5 8Zm14 0-2.5 5.5h5L19 8Z" /></svg>
);

export const serviceIcons = {
  "daily-living-support": IconHome,
  "goal-focused-support": IconTarget,
  "community-connection": IconUsers,
  "mental-health-support": IconHeart,
  "support-coordination-and-recovery-coaching": IconCompass,
  "complex-care": IconShield,
  "justice-and-forensic-care": IconScale,
} as const;
