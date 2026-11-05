import hours from "@/data/horaires.json";
import type { Dict, Locale } from "@/lib/i18n";
import { formatTime } from "@/lib/format";
import { weekHours } from "@/lib/hours";

/** Horaires de la semaine (data/horaires.json). Le dimanche non confirmé s'affiche « Nous consulter ». */
export function HoursTable({ lang, d, className = "" }: { lang: Locale; d: Dict; className?: string }) {
  const week = weekHours();
  return (
    <table className={`w-full text-[0.9375rem] ${className}`}>
      <tbody>
        {week.map((slots, i) => (
          <tr key={i} className="border-b border-current/15 last:border-0">
            <th scope="row" className="py-2 text-start font-normal">
              {d.infos.days[i]}
            </th>
            <td className="py-2 text-end tabular-nums" dir="ltr">
              {slots.length ? slots.map(([a, b]) => `${formatTime(a, lang)} – ${formatTime(b, lang)}`).join(", ") : i === 6 && hours.sundayToConfirm ? d.infos.askUs : d.infos.closed}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
