import Image from "next/image";
import { notFound } from "next/navigation";
import site from "@/data/site.json";
import produits from "@/data/produits.json";
import { altOf, fill, getDict, isLocale, type Dict } from "@/lib/i18n";
import { formatDay, isoDay } from "@/lib/format";
import { photo } from "@/lib/media";
import { homeJsonLd } from "@/lib/jsonld";
import { CategoryTiles } from "@/components/CategoryTiles";
import { HeroIn } from "@/components/HeroIn";
import { HoursTable } from "@/components/HoursTable";
import { Meats } from "@/components/Meats";
import { OpenStatus } from "@/components/OpenStatus";
import { OrderForm } from "@/components/OrderForm";
import { OrderLink } from "@/components/OrderLink";
import { Reveal } from "@/components/Reveal";
import { Seasons } from "@/components/Seasons";
import { Shot } from "@/components/Shot";
import { BagIcon, BoxIcon, KnifeIcon, PhoneIcon, PinIcon, PlusIcon, StarIcon } from "@/components/icons";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  const hero = photo("hero/vitrine-boucherie")!;
  const alt = (k: string) => altOf(d, k);
  const orderHref = `/${lang}#commander`;
  const ratingDate = formatDay(site.rating.checked, lang, { day: "numeric", month: "long", year: "numeric" });

  const rating = (
    <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2" title={fill(d.hero.ratingNote, { date: ratingDate })}>
      <span className="flex text-sign" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} />
        ))}
      </span>
      <span>
        <strong className="font-semibold">{fill(d.hero.rating, { value: site.rating.value.toLocaleString(lang === "fr" ? "fr-FR" : "en-GB") })}</strong>
        <span className="opacity-75"> · {fill(d.hero.ratingCount, { count: site.rating.count })}</span>
      </span>
    </a>
  );

  const services = [
    { id: "pickup", icon: <BagIcon />, href: orderHref },
    { id: "cut", icon: <KnifeIcon />, href: `/${lang}#faq` },
    { id: "packs", icon: <BoxIcon />, href: `/${lang}#colis` },
    { id: "phone", icon: <PhoneIcon className="h-7 w-7" />, href: `tel:${site.phoneIntl}` },
  ] as const;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd(lang)) }} />

      {/* Hero : la vitrine, une seule pièce forte ; texte sur aplat bordeaux pour rester lisible */}
      <section className="on-dark grid bg-bordeaux-deep text-cream lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]" aria-labelledby="hero-title">
        <div className="relative order-2 flex flex-col justify-center px-5 py-12 md:px-10 lg:order-1 lg:px-14 lg:py-16 xl:px-20">
          <HeroIn>
            <p className="eyebrow !text-cream/85">{d.hero.eyebrow}</p>
            <h1 id="hero-title" className="display mt-4 text-[3.1rem] sm:text-[4rem] xl:text-[5.4rem]">
              {d.hero.title}
            </h1>
            <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-cream/85">{d.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <OrderLink href={orderHref} className="btn on-dark">
                {d.hero.ctaOrder}
              </OrderLink>
              <a href="#viandes" className="btn-line on-dark">
                {d.hero.ctaMeats}
              </a>
            </div>
            <div className="mt-7 flex flex-col gap-2 text-[0.9375rem] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              {rating}
              <OpenStatus />
            </div>
          </HeroIn>
        </div>
        <div className="relative order-1 h-[42svh] min-h-64 lg:order-2 lg:h-auto">
          <Image src={hero.src} alt={alt(hero.key)} fill priority sizes="(min-width: 1024px) 58vw, 100vw" quality={78} className="object-cover object-[50%_60%]" />
        </div>
      </section>
      <div className="frieze" aria-hidden="true" />

      {/* Tuiles de catégories */}
      <section className="mx-auto max-w-[90rem] px-4 pt-14 md:px-8 md:pt-20" aria-labelledby="tiles-title">
        <h2 id="tiles-title" className="sr-only">
          {d.tiles.title}
        </h2>
        <CategoryTiles />
      </section>

      {/* Bande de services en 4 pictos */}
      <section className="mx-auto max-w-[90rem] px-4 py-14 md:px-8 md:py-20" aria-labelledby="services-title">
        <h2 id="services-title" className="sr-only">
          {d.services.title}
        </h2>
        <ul className="grid grid-cols-1 border-y border-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const it = d.services.items[s.id];
            return (
              <li key={s.id} className={`border-line ${i > 0 ? "border-t sm:border-t-0" : ""} ${i % 2 === 1 ? "sm:border-s" : ""} ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-s" : ""}`}>
                <a href={s.href} className="group flex h-full gap-4 px-2 py-6 sm:px-6 md:py-8">
                  <span className="text-bordeaux">{s.icon}</span>
                  <span>
                    <span className="block font-[family-name:var(--font-display)] text-[1.15rem] font-bold uppercase [font-stretch:85%] group-hover:text-bordeaux" dir={s.id === "phone" ? "ltr" : undefined}>
                      {it.title}
                    </span>
                    <span className="mt-1 block text-[0.9375rem] leading-snug text-muted">{it.text}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Nos viandes */}
      <section id="viandes" className="faience scroll-mt-24 px-4 py-20 md:px-8 md:py-28" aria-labelledby="viandes-title">
        <div className="mx-auto max-w-[90rem]">
          <Reveal className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow">{d.meats.eyebrow}</p>
              <h2 id="viandes-title" className="display mt-3 text-[2.6rem] md:text-[3.6rem]">
                {d.meats.title}
              </h2>
            </div>
            <p className="lead max-w-xl">{d.meats.lead}</p>
          </Reveal>
          <div className="mt-10">
            <Meats />
          </div>
          <p className="mt-10 text-[0.875rem] text-muted">{fill(d.meats.checked, { date: formatDay(produits.checked, lang, { day: "numeric", month: "long", year: "numeric" }) })}</p>
        </div>
      </section>

      {/* Les colis */}
      <section id="colis" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28" aria-labelledby="colis-title">
        <div className="mx-auto max-w-[90rem]">
          <Reveal className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow">{d.packs.eyebrow}</p>
              <h2 id="colis-title" className="display mt-3 text-[2.6rem] md:text-[3.6rem]">
                {d.packs.title}
              </h2>
            </div>
            <p className="lead max-w-xl">{d.packs.lead}</p>
          </Reveal>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {produits.packs.map((p, i) => {
              const it = d.packs.items[p.id as keyof Dict["packs"]["items"]];
              return (
                <Reveal as="li" key={p.id} delay={i * 0.08} className="flex flex-col border border-line bg-white">
                  <Shot k={p.photo} alt={alt} sizes="(min-width: 768px) 30vw, 92vw" className="aspect-[16/9]" tone={i === 1 ? "green" : "bordeaux"}>
                    <BoxIcon className="h-14 w-14 opacity-80" />
                  </Shot>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="display text-[1.8rem]">{it.name}</h3>
                      <span className="mt-1 shrink-0 border border-green px-2 py-0.5 text-[0.75rem] font-medium text-green">{d.meats.order}</span>
                    </div>
                    <p className="mt-3 flex-1 leading-relaxed text-muted">{it.text}</p>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                      <span className="text-[0.9375rem] text-muted">{p.price === null ? d.packs.price : `${d.packs.from} ${p.price} €`}</span>
                      <OrderLink href={orderHref} intent={{ product: `pack:${p.id}` }} label={fill(d.packs.ctaLabel, { name: it.name })} className="inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-medium text-bordeaux">
                        <PlusIcon />
                        <span className="link-line">{d.packs.cta}</span>
                      </OrderLink>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Les fêtes (seulement pendant la saison) */}
      <Seasons buildDay={isoDay(new Date())} />

      {/* Notre engagement */}
      <section className="px-4 py-20 md:px-8 md:py-28" aria-labelledby="engagement-title">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal className="relative">
            <Shot k="boutique/facade" fallback="boutique/comptoir-vitrine" alt={alt} sizes="(min-width: 1024px) 45vw, 92vw" className="aspect-[4/3] lg:sticky lg:top-28" />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">{d.commitment.eyebrow}</p>
              <h2 id="engagement-title" className="display mt-3 text-[2.6rem] md:text-[3.4rem]">
                {d.commitment.title}
              </h2>
              <p className="lead mt-5 max-w-xl">{d.commitment.lead}</p>
            </Reveal>
            <dl className="mt-10 border-t border-line">
              {(["fresh", "origin", "halal", "cut"] as const).map((k, i) => (
                <Reveal key={k} delay={i * 0.05} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="display text-[1.35rem] text-bordeaux">{d.commitment.items[k].title}</dt>
                  <dd className="leading-relaxed text-muted">
                    {d.commitment.items[k].text}
                    {k === "halal" && site.halal.certified && site.halal.body && <span className="mt-2 block font-medium text-ink">{fill(d.commitment.certified, { body: site.halal.body })}</span>}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Commande à retirer */}
      <section id="commander" className="faience scroll-mt-24 border-t border-line px-4 py-20 md:px-8 md:py-28" aria-labelledby="commander-title">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">{d.order.eyebrow}</p>
            <h2 id="commander-title" className="display mt-3 text-[2.6rem] md:text-[3.4rem]">
              {d.order.title}
            </h2>
            <p className="lead mt-5 max-w-md">{d.order.lead}</p>
            <div className="mt-8 border-s-2 border-bordeaux ps-5">
              <p className="text-[0.9375rem] text-muted">{d.order.callInstead}</p>
              <a href={`tel:${site.phoneIntl}`} className="mt-1 inline-flex items-center gap-2 font-[family-name:var(--font-archivo)] text-[1.9rem] font-bold tabular-nums [font-stretch:80%] hover:text-bordeaux" dir="ltr">
                <PhoneIcon className="h-6 w-6" />
                {site.phone}
              </a>
              <div className="mt-2 text-[0.9375rem]">
                <OpenStatus />
              </div>
            </div>
          </div>
          <OrderForm />
        </div>
      </section>

      {/* Infos pratiques */}
      <section id="infos" className="on-dark scroll-mt-24 bg-ink px-4 py-20 text-cream md:px-8 md:py-28" aria-labelledby="infos-title">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow !text-cream/70">{d.infos.eyebrow}</p>
            <h2 id="infos-title" className="display mt-3 text-[2.6rem] md:text-[3.4rem]">
              {d.infos.title}
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="eyebrow !text-cream/70">{d.infos.address}</h3>
                <address className="mt-3 text-[1.0625rem] not-italic" dir="ltr">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </address>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 font-medium">
                  <PinIcon />
                  <span className="link-line">{d.infos.directions}</span>
                </a>
                <h3 className="eyebrow mt-8 !text-cream/70">{d.infos.phone}</h3>
                <a href={`tel:${site.phoneIntl}`} className="mt-3 inline-block font-[family-name:var(--font-archivo)] text-[1.7rem] font-bold tabular-nums [font-stretch:80%]" dir="ltr">
                  {site.phone}
                </a>
                <h3 className="eyebrow mt-8 !text-cream/70">{d.infos.access}</h3>
                <p className="mt-3 leading-relaxed text-cream/80">{d.infos.accessText}</p>
              </div>
              <div>
                <h3 className="eyebrow !text-cream/70">{d.infos.hours}</h3>
                <div className="mt-3 text-[0.9375rem]">
                  <OpenStatus />
                </div>
                <HoursTable lang={lang} d={d} className="mt-3 text-cream/90" />
              </div>
            </div>
          </div>
          <div className="min-h-80 bg-cream/10 lg:min-h-full">
            <iframe title={d.infos.mapTitle} src={site.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-80 w-full border-0 grayscale-[35%]" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">{d.faq.eyebrow}</p>
            <h2 id="faq-title" className="display mt-3 text-[2.6rem] md:text-[3.4rem]">
              {d.faq.title}
            </h2>
          </div>
          <div className="border-t border-line">
            {d.faq.items.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex min-h-16 items-center justify-between gap-6 py-4 text-[1.0625rem] font-medium">
                  {f.q}
                  <PlusIcon className="faq-plus h-5 w-5 shrink-0 text-bordeaux" />
                </summary>
                <p className="pb-6 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
