import Link from "next/link";
import Image from "next/image";
import { site, locations, footerNav } from "@/data/site";
import { Container } from "@/components/ui/Container";
import {
  Phone, Mail, MapPin, Clock, Instagram, Facebook, ArrowUpRight,
} from "@/components/ui/Icons";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-bark text-cream">
      {/* ---------- Crisis support: first, and impossible to miss ---------- */}
      <div className="border-b border-cream/10 bg-bark-deep">
        <Container className="flex flex-col gap-3 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-cream/70">
            <span className="font-semibold text-cream">In an emergency, call 000.</span>{" "}
            If you need to talk to someone right now:
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <a href="tel:131114" className="font-medium text-cream underline decoration-cream/30 underline-offset-4 transition-colors hover:decoration-cream">
                Lifeline 13 11 14
              </a>
            </li>
            <li>
              <a href="tel:1300224636" className="font-medium text-cream underline decoration-cream/30 underline-offset-4 transition-colors hover:decoration-cream">
                Beyond Blue 1300 22 4636
              </a>
            </li>
            <li>
              <a href="tel:1800035544" className="font-medium text-cream underline decoration-cream/30 underline-offset-4 transition-colors hover:decoration-cream">
                NDIS Commission 1800 035 544
              </a>
            </li>
          </ul>
        </Container>
      </div>

      {/* ---------- Main footer ---------- */}
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label={`${site.name} — home`} className="inline-block text-cream transition-opacity hover:opacity-80">
              <Image src="/logo.svg" alt={site.name} width={176} height={58} className="h-11 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-cream/70">
              A registered NDIS provider walking alongside people navigating mental
              health and psychosocial challenges across Sydney, Dubbo and Tamworth.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a href={site.phoneHref} className="group inline-flex w-fit items-center gap-3 text-lg font-semibold text-cream transition-colors hover:text-sage-light">
                <Phone className="size-4 text-sage-light" />
                {site.phone}
              </a>
              <a href={site.emailHref} className="group inline-flex w-fit items-center gap-3 text-[0.9375rem] text-cream/80 transition-colors hover:text-sage-light">
                <Mail className="size-4 text-sage-light" />
                {site.email}
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <SocialLink href={site.socials.instagram} label="Follow All About Recovery on Instagram">
                <Instagram className="size-5" />
              </SocialLink>
              <SocialLink href={site.socials.facebook} label="Follow All About Recovery on Facebook">
                <Facebook className="size-5" />
              </SocialLink>
            </div>

            <div className="mt-8 inline-flex items-center rounded-lg bg-cream px-5 py-4">
              <Image
                src="/images/ndis-registered-provider.png"
                alt="We love NDIS — Registered NDIS Provider"
                width={316}
                height={167}
                className="h-14 w-auto"
              />
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5 lg:gap-6">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-light">
                  {group.title}
                </h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-block text-[0.9375rem] text-cream/70 transition-colors duration-200 hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Locations */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-light">
              Our locations
            </h2>
            <ul className="mt-5 flex flex-col gap-6">
              {locations.map((l) => (
                <li key={l.name}>
                  <p className="text-[0.9375rem] font-semibold text-cream">
                    {l.name}
                    {l.isHeadOffice && (
                      <span className="ml-2 rounded-full bg-cream/10 px-2 py-0.5 text-[0.6875rem] font-medium uppercase tracking-wider text-cream/70">
                        Head office
                      </span>
                    )}
                  </p>
                  <address className="mt-2 flex flex-col gap-1.5 text-sm not-italic text-cream/70">
                    <span className="flex gap-2.5">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-sage-light" />
                      <span>{l.street}, {l.suburb} {l.state} {l.postcode}</span>
                    </span>
                    <span className="flex gap-2.5">
                      <Clock className="mt-0.5 size-4 shrink-0 text-sage-light" />
                      <span>{l.hoursDays}, {l.hours}</span>
                    </span>
                  </address>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- Acknowledgement of Country ---------- */}
        <div className="mt-14 rounded-lg border border-cream/12 bg-cream/[0.04] p-6 md:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-light">
            Acknowledgement of Country
          </h2>
          <p className="mt-4 max-w-4xl text-[0.9375rem] leading-relaxed text-cream/70">
            All About Recovery acknowledges the Traditional Custodians of the lands
            on which we work and live — the Dharug, Wiradjuri and Kamilaroi peoples —
            and pays respect to Elders past and present. We are committed to being a
            safe, welcoming service for Aboriginal and Torres Strait Islander people,
            and for people of every culture, faith, gender and sexuality.
          </p>
        </div>
      </Container>

      {/* ---------- Bottom bar ---------- */}
      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-4 py-6 text-sm text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy-policy" className="transition-colors hover:text-cream">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-cream">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="/referrals" className="inline-flex items-center gap-1 transition-colors hover:text-cream">
                Make a referral <ArrowUpRight className="size-3.5" />
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}

function SocialLink({
  href, label, children,
}: {
  href: string; label: string; children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-11 items-center justify-center rounded-full text-cream/75 ring-1 ring-inset ring-cream/20 transition-all duration-200 hover:bg-cream hover:text-bark hover:ring-cream"
    >
      {children}
    </a>
  );
}
