"use client";

import produits from "@/data/produits.json";
import { Shot } from "@/components/Shot";
import { useLocale } from "@/components/providers";
import type { Dict } from "@/lib/i18n";

export const FILTER_EVENT = "bm:filter";

/** Tuiles de catégories en capitales sur photo, juste après le hero : un clic filtre « Nos viandes » et y descend. */
export function CategoryTiles() {
  const { d } = useLocale();
  return (
    <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 xl:grid-cols-6">
      {produits.categories.map((c) => {
        const name = d.categories[c.id as keyof Dict["categories"]];
        return (
          <li key={c.id}>
            <a
              href="#viandes"
              onClick={() => window.dispatchEvent(new CustomEvent(FILTER_EVENT, { detail: c.id }))}
              className="group relative block aspect-[4/5] overflow-hidden md:aspect-[4/3] xl:aspect-[3/4]"
            >
              <Shot k={c.photo} alt={() => ""} sizes="(min-width: 1280px) 16vw, (min-width: 768px) 33vw, 50vw" className="absolute inset-0 h-full w-full" tone="bordeaux" fit="object-top" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" aria-hidden="true" />
              <span className="display absolute inset-x-3 bottom-3 text-[1.45rem] text-cream md:inset-x-4 md:bottom-4 md:text-[1.7rem]">
                <span className="block">{name}</span>
                <span className="mt-2 block h-[2px] w-8 bg-sign transition-all duration-500 group-hover:w-14" aria-hidden="true" />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
