"use client";

import { useEffect, useState } from "react";
import saisons from "@/data/saisons.json";
import { OrderLink } from "@/components/OrderLink";
import { Reveal } from "@/components/Reveal";
import { Shot } from "@/components/Shot";
import { useLocale } from "@/components/providers";
import { altOf, fill, type Dict } from "@/lib/i18n";
import { formatDay, isoDay } from "@/lib/format";

type Season = { id: keyof Dict["seasons"]["items"]; show: string; from: string; to: string; image: string };

/** Fêtes affichées seulement pendant leur période (data/saisons.json → show … to) : elles apparaissent et disparaissent seules. */
const visible = (today: string) => (saisons.items as Season[]).filter((s) => s.show <= today && today <= s.to).sort((a, b) => a.from.localeCompare(b.from));

/** Section « Les fêtes » entière : rien n'est affiché hors saison. */
export function Seasons({ buildDay }: { buildDay: string }) {
  const { lang, d } = useLocale();
  const [today, setToday] = useState(buildDay);
  useEffect(() => setToday(isoDay(new Date())), []);
  const list = visible(today);
  if (!list.length) return null;
  const t = d.seasons;
  const day = (iso: string) => formatDay(iso, lang, { day: "numeric", month: "long" });

  return (
    <section id="fetes" className="scroll-mt-24 bg-green px-4 py-20 text-cream md:px-8 md:py-28" aria-labelledby="fetes-title">
      <div className="on-dark mx-auto max-w-[90rem]">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow !text-cream/80">{t.eyebrow}</p>
            <h2 id="fetes-title" className="display mt-3 text-[2.6rem] md:text-[3.6rem]">
              {t.title}
            </h2>
          </div>
          <p className="max-w-xl text-[1.0625rem] leading-relaxed text-cream/85">{t.lead}</p>
        </div>
        <ul className={`mt-12 grid gap-4 ${list.length > 1 ? "md:grid-cols-2" : "md:max-w-3xl"}`}>
          {list.map((s, i) => {
            const item = d.seasons.items[s.id];
            const now = s.from <= today;
            return (
              <Reveal as="li" key={`${s.id}-${s.from}`} delay={i * 0.08} className="grid bg-cream text-ink sm:grid-cols-[0.9fr_1.1fr]">
                <Shot k={s.image} alt={(k) => altOf(d, k)} sizes="(min-width: 768px) 22vw, 92vw" className="aspect-[4/3] sm:aspect-auto sm:h-full" tone="bordeaux">
                  <span className="display text-[2rem]">{item.title}</span>
                </Shot>
                <div className="flex flex-col p-6 md:p-7">
                  <p className="text-[0.875rem] font-medium text-bordeaux">{now ? `${t.now} · ${fill(t.until, { date: day(s.to) })}` : fill(t.from, { date: day(s.from) })}</p>
                  <h3 className="display mt-2 text-[1.9rem]">{item.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{item.text}</p>
                  <OrderLink href={`/${lang}#commander`} intent={{ product: "other", detail: item.title }} label={fill(t.orderLabel, { name: item.title })} className="btn mt-6 self-start">
                    {t.order}
                  </OrderLink>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
