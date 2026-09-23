import { locations } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, Clock, ArrowUpRight } from "@/components/ui/Icons";

const accents = ["bg-sage", "bg-terracotta", "bg-teal"] as const;

export function LocationsSection({ tone = "cream" }: { tone?: "cream" | "sand" }) {
  const bg = tone === "cream" ? "bg-cream" : "bg-sand";

  return (
    <section aria-labelledby="locations-heading" className={`${bg} py-20 md:py-28 lg:py-32`}>
      <Container>
        <SectionHeading
          eyebrow="Where we work"
          title={<span id="locations-heading">Three offices across New South Wales</span>}
          lead="We support participants across Greater Sydney and the Nepean, the Orana region, and the New England North West — from offices staffed by people who actually live there."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {locations.map((l, i) => (
            <Reveal as="li" key={l.name} delay={i * 90}>
              <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-cream ring-1 ring-bark/8 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_22px_46px_-30px_rgba(84,51,50,0.45)]">
                <div className={`h-1.5 w-full ${accents[i % accents.length]}`} />
                <div className="flex flex-1 flex-col gap-5 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-h3 text-bark">{l.name}</h3>
                    {l.isHeadOffice && (
                      <span className="mt-1 shrink-0 rounded-full bg-sand px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-bark/75">
                        Head office
                      </span>
                    )}
                  </div>

                  <address className="flex flex-1 flex-col gap-4 text-[0.9375rem] not-italic text-bark/75">
                    <span className="flex gap-3">
                      <MapPin className="mt-0.5 size-[18px] shrink-0 text-terracotta" />
                      <span>
                        {l.street}
                        <br />
                        {l.suburb} {l.state} {l.postcode}
                      </span>
                    </span>
                    <span className="flex gap-3">
                      <Clock className="mt-0.5 size-[18px] shrink-0 text-terracotta" />
                      <span>
                        {l.hoursDays}
                        <br />
                        {l.hours}
                      </span>
                    </span>
                  </address>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-bark transition-colors hover:text-terracotta"
                  >
                    Get directions
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span className="sr-only">to our {l.name} office (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
