import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/data/services";
import { accentStyles } from "@/lib/accents";
import { serviceIcons } from "@/components/ui/Icons";
import { ArrowRight } from "@/components/ui/Icons";

export function ServiceCard({
  service,
  priority = false,
}: {
  service: Service;
  priority?: boolean;
}) {
  const a = accentStyles[service.accent];
  const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];

  return (
    <article className="group h-full">
      <Link
        href={`/services/${service.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-lg bg-cream ring-1 ring-bark/8 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(84,51,50,0.45)] hover:ring-bark/15"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={service.cardImage}
            alt={service.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.05]"
          />
          {Icon && (
            <span
              aria-hidden
              className={`absolute bottom-4 left-4 inline-flex size-12 items-center justify-center rounded-full ${a.bg} text-cream shadow-lg`}
            >
              <Icon className="size-6" />
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-7">
          <h3 className="text-h3 text-bark">{service.title}</h3>
          <p className="flex-1 text-[0.9375rem] leading-relaxed text-bark/75">
            {service.summary}
          </p>
          <span
            className={`mt-3 inline-flex items-center gap-2 text-sm font-semibold ${a.text}`}
          >
            Learn more
            <ArrowRight className="size-4 transition-transform duration-200 ease-[var(--ease-out-soft)] group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
