import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";
import en from "@/locales/en.json";
import type { Locale } from "@/lib/locales";

export { defaultLocale, dir, intlLocale, isLocale, locales, ogLocale, type Locale } from "@/lib/locales";
export type Dict = typeof fr;

const dictionaries: Record<Locale, Dict> = { fr, ar: ar as Dict, en: en as Dict };

export const getDict = (lang: Locale): Dict => dictionaries[lang];

export function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}

/** Texte alternatif d'une photo (clé « categorie/nom »), dans la langue de la page. */
export function altOf(d: Dict, key: string) {
  return (d.alt as Record<string, string>)[key] ?? "";
}
