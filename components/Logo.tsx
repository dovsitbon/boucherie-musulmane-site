import site from "@/data/site.json";

/** Couperet au trait fin (logo, favicon, ouverture). */
export const CLEAVER = {
  blade: "M3 5H29V23H9C5.7 23 3 20.3 3 17Z",
  edge: "M3 17C3 20.3 5.7 23 9 23",
  hole: "M24.5 8.5a1.6 1.6 0 1 0 0.01 0",
  handle: "M29 11H43.5C45.4 11 45.4 17 43.5 17H29",
  rivets: "M34 14h0.01M38.5 14h0.01",
};

export function Cleaver({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 28" className={className} fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={CLEAVER.blade} />
      <path d={CLEAVER.hole} />
      <path d={CLEAVER.handle} />
      <path d={CLEAVER.rivets} strokeWidth={2} />
    </svg>
  );
}

/**
 * Logo typographique provisoire (à remplacer par le vrai logo s'il existe) :
 * « BOUCHERIE MUSULMANE » en capitales resserrées, la rue en petit, un fin couperet au trait.
 * Le nom reste en lettres latines (c'est l'enseigne) ; en arabe, la traduction s'ajoute dessous.
 */
export function Logo({ compact = false, lang, className = "" }: { compact?: boolean; lang?: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} translate="no">
      <Cleaver className={compact ? "h-5 w-auto shrink-0 text-bordeaux md:h-6" : "h-7 w-auto shrink-0"} />
      <span className="flex flex-col items-start">
        <span dir="ltr" className={`font-[family-name:var(--font-archivo)] leading-none font-bold whitespace-nowrap tracking-[0.04em] uppercase [font-stretch:72%] ${compact ? "text-[1.05rem] md:text-[1.3rem]" : "text-[1.6rem]"}`}>
          Boucherie Musulmane
        </span>
        {lang === "ar" ? (
          <span className={`mt-1 font-[family-name:var(--font-kufi)] leading-none font-semibold ${compact ? "text-[0.7rem]" : "text-[0.85rem]"}`}>{site.nameAr}</span>
        ) : (
          <span dir="ltr" className={`mt-1 font-[family-name:var(--font-archivo)] leading-none font-medium whitespace-nowrap tracking-[0.14em] uppercase opacity-80 [font-stretch:90%] ${compact ? "text-[0.56rem] md:text-[0.6rem]" : "text-[0.7rem]"}`}>
            Amiens · rue du Général Leclerc
          </span>
        )}
      </span>
    </span>
  );
}
