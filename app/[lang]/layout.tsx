import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import "../globals.css";
import site from "@/data/site.json";
import { dir, getDict, isLocale, locales, ogLocale } from "@/lib/i18n";
import { Providers } from "@/components/providers";
import { AnnounceBar } from "@/components/AnnounceBar";
import { Header, MobileOrderBar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";
import { SmoothScroll } from "@/components/SmoothScroll";

// Polices servies en local (app/fonts) : aucun appel à Google Fonts, ni au build ni à l'affichage.
const archivo = localFont({
  src: [{ path: "../fonts/archivo-latin-wdth.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});
const inter = localFont({
  src: [
    { path: "../fonts/inter-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/inter-latin-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-inter",
  display: "swap",
});
const kufi = localFont({
  src: [
    { path: "../fonts/noto-kufi-arabic-arabic-600-normal.woff2", weight: "600" },
    { path: "../fonts/noto-kufi-arabic-arabic-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-kufi",
  display: "swap",
  preload: false,
});
const naskh = localFont({
  src: [
    { path: "../fonts/noto-naskh-arabic-arabic-400-normal.woff2", weight: "400" },
    { path: "../fonts/noto-naskh-arabic-arabic-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-naskh",
  display: "swap",
  preload: false,
});

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDict(lang);
  return {
    metadataBase: new URL(site.url),
    title: d.meta.title,
    description: d.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}`])), "x-default": "/fr" },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: site.name,
      title: d.meta.title,
      description: d.meta.description,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: d.meta.ogAlt }],
    },
    twitter: { card: "summary_large_image", title: d.meta.title, description: d.meta.description, images: ["/og.jpg"] },
    formatDetection: { telephone: false },
    robots: { index: true, follow: true, "max-image-preview": "large" },
  };
}

export const viewport: Viewport = { themeColor: "#4e1519", width: "device-width", initialScale: 1 };

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

const introScript = `document.documentElement.classList.add("js");try{if(sessionStorage.getItem("bm-intro")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("intro-seen")}catch(e){}`;

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  const fonts = [archivo.variable, inter.variable, ...(lang === "ar" ? [kufi.variable, naskh.variable] : [])].join(" ");

  return (
    <html lang={lang} dir={dir(lang)} className={fonts} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>
        <Providers lang={lang} d={d}>
          <Intro skipLabel={d.intro.skip} />
          <SmoothScroll />
          <AnnounceBar />
          <Header />
          <main id="main">{children}</main>
          <Footer lang={lang} d={d} />
          <MobileOrderBar />
        </Providers>
      </body>
    </html>
  );
}
