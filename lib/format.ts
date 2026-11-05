import { intlLocale, type Locale } from "@/lib/locales";

/** Prix en euros : « 12,90 € » / « €12.90 ». */
export const price = (n: number, lang: Locale) => new Intl.NumberFormat(intlLocale[lang], { style: "currency", currency: "EUR", minimumFractionDigits: 2 }).format(n);

/** Date AAAA-MM-JJ du jour, heure de Paris. */
export function isoDay(date: Date) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}

export function formatDay(iso: string, lang: Locale, opts: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "long" }) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(intlLocale[lang], { ...opts, timeZone: "UTC" }).format(new Date(Date.UTC(y, m - 1, d || 1)));
}

/** « 19:30 » → « 19 h 30 » (fr) / « 7.30 pm » (en) / « 19:30 » (ar). */
export function formatTime(hhmm: string, lang: Locale) {
  const [h, m] = hhmm.split(":").map(Number);
  if (lang === "fr") return m ? `${h} h ${String(m).padStart(2, "0")}` : `${h} h`;
  if (lang === "ar") return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  const suffix = h >= 12 ? "pm" : "am";
  const h12 = h % 12 || 12;
  return m ? `${h12}.${String(m).padStart(2, "0")} ${suffix}` : `${h12} ${suffix}`;
}
