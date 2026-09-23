import Link from "next/link";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: Crumb[];
  tone?: "dark" | "light";
}) {
  const base = tone === "light" ? "text-cream/70" : "text-bark/75";
  const hover = tone === "light" ? "hover:text-cream" : "hover:text-bark";
  const current = tone === "light" ? "text-cream" : "text-bark";

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${base}`}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className={`font-medium ${current}`}>
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className={`transition-colors ${hover}`}>
                    {item.name}
                  </Link>
                  <span aria-hidden className="opacity-45">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
