import Link from "next/link";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-7 text-center">
          <p className="text-[clamp(4rem,2rem+8vw,7rem)] font-semibold leading-none text-sage-light">
            404
          </p>
          <h1 className="text-h2 text-bark">We couldn&apos;t find that page</h1>
          <p className="text-lead text-bark/75">
            The page may have moved, or the link might be out of date. Here are a few
            places that might help.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Button href="/" withArrow>Back to home</Button>
            <Button href="/contact" variant="ghost">Contact us</Button>
          </div>

          <ul className="mt-10 grid w-full gap-3 text-left sm:grid-cols-2">
            {services.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-md bg-sand px-5 py-4 text-[0.9375rem] font-medium text-bark transition-colors hover:bg-sand-deep"
                >
                  {s.title}
                  <ArrowRight className="size-4 shrink-0 text-bark/60 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
