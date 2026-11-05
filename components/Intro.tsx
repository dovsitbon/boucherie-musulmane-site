"use client";

import { useEffect, useState, type CSSProperties } from "react";

const KEY = "bm-intro";
const at = (d: number, t?: number) => ({ "--d": `${d}s`, ...(t ? { "--t": `${t}s` } : {}) }) as CSSProperties;

/**
 * Ouverture (1,2 s, une fois par session), tout en CSS (globals.css) :
 * fond crème, un fin trait dessine l'enseigne puis la devanture, « BOUCHERIE MUSULMANE » s'y inscrit, fondu sur le hero.
 * Masquée d'office si l'utilisateur préfère réduire les animations.
 */
export function Intro({ skipLabel }: { skipLabel: string }) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      document.documentElement.classList.add("intro-seen");
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  const p = { pathLength: 1, className: "intro-draw" };
  return (
    <div className="intro-curtain flex items-center justify-center text-bordeaux">
      <div className="relative w-[min(84vw,400px)]" aria-hidden="true">
        <svg viewBox="0 0 320 200" className="block h-auto w-full" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round">
          {/* Enseigne */}
          <path {...p} d="M20 22H300V80H20Z" style={at(0, 0.42)} />
          <path {...p} d="M26 28H294V74H26Z" strokeWidth={0.6} style={at(0.12, 0.36)} />
          {/* Devanture : piliers, vitrine, porte, trottoir */}
          <path {...p} d="M28 80V184M292 80V184" style={at(0.22, 0.3)} />
          <path {...p} d="M44 104H186V168H44Z" strokeWidth={0.9} style={at(0.3, 0.34)} />
          <path {...p} d="M206 184V104H262V184" strokeWidth={0.9} style={at(0.34, 0.3)} />
          <path {...p} d="M8 184H312" style={at(0.4, 0.3)} />
        </svg>
        <p className="intro-name absolute inset-x-0 top-[11%] flex h-[29%] items-center justify-center font-[family-name:var(--font-archivo)] text-[clamp(1.05rem,5.2vw,1.55rem)] font-bold tracking-[0.06em] text-bordeaux uppercase [font-stretch:72%]" dir="ltr" translate="no">
          Boucherie Musulmane
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {}
          document.documentElement.classList.add("intro-seen");
          setGone(true);
        }}
        className="nav-link absolute end-4 bottom-4 min-h-11 px-4 text-muted transition-colors hover:text-ink"
      >
        {skipLabel}
      </button>
    </div>
  );
}
