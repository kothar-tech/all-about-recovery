"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Instagram, Facebook } from "@/components/ui/Icons";

const links = [
  {
    href: site.socials.instagram,
    label: "Instagram",
    aria: "Follow All About Recovery on Instagram (opens in a new tab)",
    Icon: Instagram,
    // Filled by default so the rail reads as two distinct buttons rather than
    // faint outlines on a cream page. Cream on these shades clears 4.8:1.
    fill: "bg-terracotta-deep hover:bg-terracotta-ink",
  },
  {
    href: site.socials.facebook,
    label: "Facebook",
    aria: "Follow All About Recovery on Facebook (opens in a new tab)",
    Icon: Facebook,
    fill: "bg-teal-deep hover:bg-teal-ink",
  },
];

/**
 * Social rail pinned to the middle of the left edge.
 *
 * Only shown from 1340px up. The rail sits in the page gutter, and below that
 * width the gutter is narrower than the rail, so it would clip the content
 * column. At every smaller size the same links live in the mobile drawer and
 * the footer instead. It also fades out once the footer scrolls into view,
 * since the footer carries its own set.
 */
export function SocialRail() {
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => setAtFooter(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" },
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={atFooter || undefined}
      className={`fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-500 ease-[var(--ease-out-soft)] min-[1340px]:block ${
        atFooter ? "pointer-events-none -translate-x-6 opacity-0" : "opacity-100"
      }`}
    >
      <nav aria-label="Social media" className="flex flex-col items-center">
        <ul className="flex flex-col gap-2.5 rounded-r-lg bg-cream py-3 pl-1.5 pr-2.5 shadow-[0_12px_36px_-10px_rgba(84,51,50,0.45)] ring-1 ring-bark/15">
          {links.map(({ href, label, aria, Icon, fill }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={aria}
                className={`group relative inline-flex size-11 items-center justify-center rounded-full text-cream shadow-[0_4px_12px_-4px_rgba(84,51,50,0.5)] ring-2 ring-cream transition-all duration-200 ease-[var(--ease-out-soft)] hover:scale-110 hover:shadow-[0_8px_18px_-6px_rgba(84,51,50,0.6)] ${fill}`}
              >
                <Icon className="size-5" />
                {/* Label slides out on hover and on keyboard focus */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-full top-1/2 ml-3.5 -translate-x-1 -translate-y-1/2 whitespace-nowrap rounded-full bg-bark px-3 py-1.5 text-xs font-semibold text-cream opacity-0 shadow-lg transition-all duration-200 ease-[var(--ease-out-soft)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                >
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Thin rule + vertical wordmark trailing down from the card */}
        <span aria-hidden className="mt-3 h-14 w-px bg-gradient-to-b from-bark/35 to-transparent" />
        <span
          aria-hidden
          className="mt-2.5 text-[0.625rem] font-bold uppercase tracking-[0.22em] text-bark/75"
          style={{ writingMode: "vertical-rl" }}
        >
          Follow us
        </span>
      </nav>
    </div>
  );
}
