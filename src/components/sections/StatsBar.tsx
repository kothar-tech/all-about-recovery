import Image from "next/image";
import { stats } from "@/data/values";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function StatsBar() {
  return (
    <section aria-label="At a glance" className="bg-cream pt-20 md:pt-28">
      <Container>
        <div className="flex flex-col gap-10 rounded-xl bg-sage-light px-8 py-10 md:px-12 md:py-12 lg:flex-row lg:items-center lg:gap-14">
          <Reveal className="shrink-0">
            <Image
              src="/images/ndis-registered-provider.png"
              alt="We love NDIS — Registered NDIS Provider"
              width={158}
              height={84}
              className="h-14 w-auto md:h-16"
            />
          </Reveal>
          <dl className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="flex flex-col gap-1 border-l-2 border-bark/25 pl-5">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl font-semibold leading-none text-bark-deep md:text-4xl">
                    {s.value}
                  </dd>
                  <p className="mt-1.5 text-sm font-semibold text-bark-deep">{s.label}</p>
                  <p className="text-sm text-bark">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
