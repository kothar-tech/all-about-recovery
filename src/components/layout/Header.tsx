"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav, site } from "@/data/site";
import { services } from "@/data/services";
import { accentStyles } from "@/lib/accents";
import { Button } from "@/components/ui/Button";
import {
  Menu, Close, Phone, ChevronDown, ArrowRight,
  Instagram, Facebook, IconHome, serviceIcons,
} from "@/components/ui/Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    // Deferred so the first read happens after paint (handles restored
    // scroll positions) without a synchronous setState inside the effect.
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close everything on route change — React's "adjust state during render"
  // pattern, which avoids an extra render pass.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    if (open) setOpen(false);
    if (megaOpen) setMegaOpen(false);
    if (mobileServices) setMobileServices(false);
  }

  // Lock scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape closes the mega menu and returns focus to its trigger
  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMegaOpen(false);
      megaRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  // Small grace period so a diagonal mouse path to the panel doesn't close it
  const scheduleCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ease-[var(--ease-out-soft)] ${
        scrolled
          ? "bg-cream/90 shadow-[0_1px_0_0_rgba(84,51,50,0.10)] backdrop-blur-md"
          : "bg-cream"
      }`}
    >
      {/* Brand accent hairline */}
      <div
        aria-hidden
        className="h-[3px] w-full bg-gradient-to-r from-sage via-terracotta to-teal"
      />

      <div
        className={`container-page flex items-center justify-between gap-6 transition-[height] duration-300 ease-[var(--ease-out-soft)] ${
          scrolled ? "h-[66px] md:h-[72px]" : "h-[72px] md:h-20"
        }`}
      >
        <Link
          href="/"
          className="shrink-0 text-bark transition-opacity hover:opacity-70"
          aria-label={`${site.name} — home`}
        >
          <Image
            src="/logo.png"
            alt={site.name}
            width={178}
            height={64}
            priority
            className={`w-auto transition-[height] duration-300 ease-[var(--ease-out-soft)] ${
              scrolled ? "h-8 md:h-9" : "h-9 md:h-10"
            }`}
          />
        </Link>

        {/* ---------------- Desktop nav ---------------- */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = isActive(item.href);

              if (item.href !== "/services") {
                return (
                  <li key={item.href}>
                    <NavLink href={item.href} active={active}>
                      {item.label}
                    </NavLink>
                  </li>
                );
              }

              return (
                <li
                  key={item.href}
                  ref={megaRef}
                  className="relative"
                  onMouseEnter={openMega}
                  onMouseLeave={scheduleCloseMega}
                  onFocus={openMega}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setMegaOpen(false);
                    }
                  }}
                >
                  <NavLink
                    href={item.href}
                    active={active}
                    aria-expanded={megaOpen}
                    aria-controls="services-mega"
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden
                      className={`size-3.5 transition-transform duration-300 ease-[var(--ease-out-soft)] ${
                        megaOpen ? "rotate-180" : ""
                      }`}
                    />
                  </NavLink>

                  {/* ---- Mega panel ---- */}
                  <div
                    id="services-mega"
                    className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ease-[var(--ease-out-soft)] ${
                      megaOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="w-[min(48rem,92vw)] overflow-hidden rounded-lg bg-cream shadow-[0_28px_60px_-24px_rgba(84,51,50,0.45)] ring-1 ring-bark/10">
                      <ul className="grid grid-cols-2 gap-1 p-3">
                        {services.map((s) => {
                          const a = accentStyles[s.accent];
                          const Icon = serviceIcons[s.slug as keyof typeof serviceIcons];
                          return (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                tabIndex={megaOpen ? undefined : -1}
                                className="group flex items-start gap-3 rounded-sm p-3 transition-colors duration-200 hover:bg-sand"
                              >
                                <span
                                  aria-hidden
                                  className={`mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full ${a.softBg} ${a.text}`}
                                >
                                  {Icon && <Icon className="size-[18px]" />}
                                </span>
                                <span className="flex flex-col gap-0.5">
                                  <span className="text-[0.9375rem] font-semibold leading-snug text-bark">
                                    {s.title}
                                  </span>
                                  <span className="line-clamp-2 text-[0.8125rem] leading-snug text-bark/75">
                                    {s.summary}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                        <li>
                          <Link
                            href="/accommodation-support"
                            tabIndex={megaOpen ? undefined : -1}
                            className="group flex items-start gap-3 rounded-sm bg-sand p-3 transition-colors duration-200 hover:bg-sand-deep"
                          >
                            <span
                              aria-hidden
                              className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-sage text-cream"
                            >
                              <IconHome className="size-[18px]" />
                            </span>
                            <span className="flex flex-col gap-0.5">
                              <span className="text-[0.9375rem] font-semibold leading-snug text-bark">
                                Accommodation Support
                              </span>
                              <span className="line-clamp-2 text-[0.8125rem] leading-snug text-bark/75">
                                SIL, SDA, short and medium term accommodation, and in-home respite.
                              </span>
                            </span>
                          </Link>
                        </li>
                      </ul>

                      <div className="flex items-center justify-between gap-4 border-t border-bark/10 bg-sand px-5 py-3.5">
                        <p className="text-sm text-bark/75">
                          Not sure which support fits? We&apos;ll talk it through.
                        </p>
                        <Link
                          href="/services"
                          tabIndex={megaOpen ? undefined : -1}
                          className="group inline-flex items-center gap-2 text-sm font-semibold text-terracotta-ink transition-colors hover:text-bark"
                        >
                          View all services
                          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="group inline-flex min-h-11 items-center gap-2 rounded-full px-3.5 text-[0.9375rem] font-semibold text-bark ring-1 ring-inset ring-bark/15 transition-all duration-200 hover:bg-sand hover:ring-bark/30"
          >
            <Phone className="size-4 text-terracotta-ink transition-transform duration-200 group-hover:-rotate-12" />
            {site.phone}
          </a>
          <Button href="/contact">Contact us</Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-bark transition-colors hover:bg-sand lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <Close className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* ---------------- Mobile drawer ---------------- */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-bark/10 bg-cream lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page py-6">
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) =>
              item.href === "/services" ? (
                <li key={item.href}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`flex min-h-12 flex-1 items-center rounded-xs px-3 text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-sand text-bark"
                          : "text-bark/75 hover:bg-sand/60 hover:text-bark"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServices((v) => !v)}
                      aria-expanded={mobileServices}
                      aria-controls="mobile-services"
                      className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-bark transition-colors hover:bg-sand"
                    >
                      <span className="sr-only">
                        {mobileServices ? "Hide services" : "Show all services"}
                      </span>
                      <ChevronDown
                        className={`size-5 transition-transform duration-300 ${
                          mobileServices ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <ul id="mobile-services" hidden={!mobileServices} className="mb-1 ml-3 flex flex-col border-l border-bark/12 pl-3">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex min-h-11 items-center rounded-xs px-3 text-[0.9375rem] text-bark/75 transition-colors hover:bg-sand/60 hover:text-bark"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex min-h-12 items-center rounded-xs px-3 text-lg font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-sand text-bark"
                        : "text-bark/75 hover:bg-sand/60 hover:text-bark"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="mt-6 flex flex-col gap-3 border-t border-bark/10 pt-6">
            <Button href="/contact" size="lg" withArrow>Contact us</Button>
            <a
              href={site.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-4 font-medium text-bark ring-1 ring-inset ring-bark/20 transition-colors hover:bg-sand"
            >
              <Phone className="size-4" />
              {site.phone}
            </a>
          </div>

          {/* The fixed rail is desktop-only, so the drawer carries the socials */}
          <div className="mt-6 flex items-center gap-3 border-t border-bark/10 pt-6">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-bark/75">
              Follow us
            </span>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow All About Recovery on Instagram (opens in a new tab)"
              className="inline-flex size-11 items-center justify-center rounded-full text-bark ring-1 ring-inset ring-bark/20 transition-all hover:bg-terracotta-deep hover:text-cream hover:ring-terracotta-deep"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow All About Recovery on Facebook (opens in a new tab)"
              className="inline-flex size-11 items-center justify-center rounded-full text-bark ring-1 ring-inset ring-bark/20 transition-all hover:bg-teal-deep hover:text-cream hover:ring-teal-deep"
            >
              <Facebook className="size-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

/* --------------------------- desktop nav link --------------------------- */

function NavLink({
  href, active, children, ...rest
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
} & React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 text-[0.9375rem] font-medium transition-colors duration-200 ${
        active ? "text-bark" : "text-bark/75 hover:text-bark"
      }`}
      {...rest}
    >
      {children}
      <span
        aria-hidden
        className={`absolute inset-x-4 bottom-2 h-px origin-left bg-terracotta transition-transform duration-300 ease-[var(--ease-out-soft)] ${
          active ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </Link>
  );
}
