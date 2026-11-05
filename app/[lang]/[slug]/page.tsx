import type { Metadata } from "next";
import { notFound } from "next/navigation";
import site from "@/data/site.json";
import { getDict, isLocale, locales, type Dict, type Locale } from "@/lib/i18n";
import { PAGE_IDS, pageOfSlug, pagePath, SLUGS, type PageId } from "@/lib/pages";

export function generateStaticParams() {
  return locales.flatMap((lang) => PAGE_IDS.map((id) => ({ lang, slug: SLUGS[id][lang] })));
}
export const dynamicParams = false;

function resolve(lang: string, slug: string): { lang: Locale; id: PageId } | null {
  if (!isLocale(lang)) return null;
  const id = pageOfSlug(slug, lang);
  return id ? { lang, id } : null;
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[slug]">): Promise<Metadata> {
  const { lang: l, slug } = await params;
  const r = resolve(l, slug);
  if (!r) return {};
  const d = getDict(r.lang);
  return {
    title: d.meta.legalTitle,
    alternates: {
      canonical: pagePath(r.id, r.lang),
      languages: { ...Object.fromEntries(locales.map((x) => [x, pagePath(r.id, x)])), "x-default": pagePath(r.id, "fr") },
    },
    robots: { index: false, follow: true },
  };
}

function Legal({ d }: { d: Dict }) {
  const p = d.pages.legal;
  const pending = <em className="text-muted">{p.pending}</em>;
  const blocks: [string, React.ReactNode][] = [
    [p.editor, p.editorText],
    [p.company, site.legal.company || pending],
    [p.siret, site.legal.siret || pending],
    [p.host, <span key="host" dir="ltr">{site.legal.host}</span>],
    [p.data, p.dataText],
    [p.cookies, p.cookiesText],
    [p.photos, p.photosText],
  ];
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h1 className="display text-[2.8rem] md:text-[3.6rem]">{p.title}</h1>
      {blocks.map(([title, body]) => (
        <section key={title} className="mt-10">
          <h2 className="eyebrow">{title}</h2>
          <p className="mt-3 leading-relaxed">{body}</p>
        </section>
      ))}
    </div>
  );
}

export default async function Page({ params }: PageProps<"/[lang]/[slug]">) {
  const { lang: l, slug } = await params;
  const r = resolve(l, slug);
  if (!r) notFound();
  return <Legal d={getDict(r.lang)} />;
}
