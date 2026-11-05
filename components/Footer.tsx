import Link from "next/link";
import site from "@/data/site.json";
import { Logo } from "@/components/Logo";
import { LangSwitch } from "@/components/LangSwitch";
import { HoursTable } from "@/components/HoursTable";
import type { Dict, Locale } from "@/lib/i18n";
import { pagePath } from "@/lib/pages";

export function Footer({ lang, d }: { lang: Locale; d: Dict }) {
  return (
    <footer className="on-dark bg-ink pb-24 text-cream md:pb-0">
      <div className="frieze" />
      <div className="mx-auto grid max-w-[90rem] gap-12 px-4 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
        <div>
          <Logo lang={lang} />
          <p className="mt-5 max-w-xs text-cream/75">{d.footer.tagline}</p>
          <LangSwitch lang={lang} label={d.nav.lang} className="mt-6" />
        </div>
        <div>
          <h2 className="eyebrow !text-cream/70">{d.infos.address}</h2>
          <address className="mt-3 not-italic">
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-line" dir="ltr">
              {site.address.street}, {site.address.postalCode} {site.address.city}
            </a>
          </address>
          <h2 className="eyebrow mt-8 !text-cream/70">{d.infos.phone}</h2>
          <a href={`tel:${site.phoneIntl}`} className="mt-3 inline-block text-[1.25rem] font-medium tabular-nums" dir="ltr">
            {site.phone}
          </a>
          {site.email && (
            <>
              <h2 className="eyebrow mt-8 !text-cream/70">{d.infos.email}</h2>
              <a href={`mailto:${site.email}`} className="link-line mt-3 inline-block">
                {site.email}
              </a>
            </>
          )}
        </div>
        <div>
          <h2 className="eyebrow !text-cream/70">{d.infos.hours}</h2>
          <HoursTable lang={lang} d={d} className="mt-2 text-cream/90" />
        </div>
      </div>
      <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-4 border-t border-cream/15 px-4 py-6 text-[0.875rem] text-cream/65 md:px-8">
        <p>
          © {new Date().getFullYear()} {d.footer.rights}
        </p>
        <Link href={pagePath("legal", lang)} className="link-line">
          {d.footer.legal}
        </Link>
      </div>
    </footer>
  );
}
