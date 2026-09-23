import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "./Icons";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta-deep text-cream hover:bg-terracotta-ink focus-visible:bg-terracotta-ink shadow-[0_1px_0_0_rgba(84,51,50,0.12)]",
  secondary:
    "bg-bark text-cream hover:bg-bark-deep focus-visible:bg-bark-deep",
  ghost:
    "bg-transparent text-bark ring-1 ring-inset ring-bark/25 hover:bg-bark hover:text-cream hover:ring-bark",
  light:
    "bg-cream text-bark hover:bg-sand focus-visible:bg-sand",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.9375rem]",
  lg: "px-8 py-4 text-base",
};

const shared =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "cursor-pointer transition-all duration-200 ease-[var(--ease-out-soft)] " +
  "active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none " +
  "min-h-11"; // 44px minimum touch target

export function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  children,
  ...rest
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "ref">) {
  const cls = `${shared} ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-200 ease-[var(--ease-out-soft)] group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
