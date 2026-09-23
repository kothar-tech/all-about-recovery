import { services } from "@/data/services";

/** Decorative scrolling band of service names — mirrors the original site. */
export function ServicesMarquee() {
  const items = [...services, ...services];

  return (
    <div
      aria-hidden
      className="relative flex overflow-hidden border-y border-sage/25 bg-sage-pale py-5 select-none"
    >
      <div
        className="animate-marquee flex shrink-0 items-center gap-10 pr-10"
        style={{ ["--marquee-duration" as string]: "55s" }}
      >
        {items.map((s, i) => (
          <span key={`${s.slug}-${i}`} className="flex items-center gap-10">
            <span className="whitespace-nowrap text-lg font-medium text-bark/75 md:text-xl">
              {s.shortTitle}
            </span>
            <span className="size-1.5 shrink-0 rounded-full bg-terracotta" />
          </span>
        ))}
      </div>
      {/* Duplicate track keeps the loop seamless */}
      <div
        className="animate-marquee flex shrink-0 items-center gap-10 pr-10"
        style={{ ["--marquee-duration" as string]: "55s" }}
      >
        {items.map((s, i) => (
          <span key={`dup-${s.slug}-${i}`} className="flex items-center gap-10">
            <span className="whitespace-nowrap text-lg font-medium text-bark/75 md:text-xl">
              {s.shortTitle}
            </span>
            <span className="size-1.5 shrink-0 rounded-full bg-terracotta" />
          </span>
        ))}
      </div>
    </div>
  );
}
