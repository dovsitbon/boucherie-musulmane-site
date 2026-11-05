// Langues du site, sans les textes : importable côté client sans embarquer les dictionnaires.
export const locales = ["fr", "ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

export const dir = (l: Locale) => (l === "ar" ? "rtl" : "ltr");
export const ogLocale: Record<Locale, string> = { fr: "fr_FR", ar: "ar_AR", en: "en_GB" };
// Chiffres latins en arabe (usage courant en France, plus lisible pour les prix et les heures)
export const intlLocale: Record<Locale, string> = { fr: "fr-FR", ar: "ar-u-nu-latn", en: "en-GB" };
/** Libellés du sélecteur « FR · ع · EN ». */
export const langLabel: Record<Locale, string> = { fr: "FR", ar: "ع", en: "EN" };
export const langName: Record<Locale, string> = { fr: "Français", ar: "العربية", en: "English" };
