"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import site from "@/data/site.json";
import { Logo } from "@/components/Logo";
import { LangSwitch } from "@/components/LangSwitch";
import { OrderLink } from "@/components/OrderLink";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";
import { useLocale } from "@/components/providers";

export function Header() {
  const { lang, d } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (menu) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = menu ? "hidden" : "";
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  const home = `/${lang}`;
  const order = `${home}#commander`;
  const links = [
    { href: `${home}#viandes`, label: d.nav.meats },
    { href: `${home}#colis`, label: d.nav.packs },
    { href: order, label: d.nav.order },
    { href: `${home}#infos`, label: d.nav.infos },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 border-b bg-cream/95 backdrop-blur-sm transition-colors duration-500 ${scrolled ? "border-line" : "border-transparent"}`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-10 focus:bg-cream focus:px-4 focus:py-2">
          {d.nav.skip}
        </a>
        <div className="mx-auto flex h-16 max-w-[90rem] items-center gap-4 px-4 md:h-[4.5rem] md:px-8">
          <Link href={home} aria-label={d.nav.home} className="me-auto lg:me-0">
            <Logo compact lang={lang} />
          </Link>

          <nav className="mx-auto hidden items-center gap-7 lg:flex xl:gap-9" aria-label={d.nav.menu}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link whitespace-nowrap transition-colors duration-300 hover:text-bordeaux">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <LangSwitch lang={lang} label={d.nav.lang} className="hidden md:flex" />
            <a href={`tel:${site.phoneIntl}`} className="hidden items-center gap-2 text-[0.9375rem] font-medium tabular-nums transition-colors hover:text-bordeaux xl:flex" dir="ltr">
              <PhoneIcon />
              {site.phone}
            </a>
            <a href={`tel:${site.phoneIntl}`} className="flex h-11 w-11 items-center justify-center md:hidden" aria-label={`${d.nav.call} ${site.phone}`}>
              <PhoneIcon />
            </a>
            <OrderLink href={order} className="btn hidden !min-h-11 !px-5 whitespace-nowrap md:inline-flex">
              {d.nav.orderCta}
            </OrderLink>
            <button type="button" className="-me-2 flex h-11 w-11 items-center justify-center lg:hidden" onClick={() => setMenu(true)} aria-label={d.nav.menu} aria-expanded={menu}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {menu && (
        <div className="fade-in fixed inset-0 z-[60] flex flex-col overscroll-contain bg-cream text-ink" role="dialog" aria-modal="true" aria-label={d.nav.menu}>
          <div className="flex h-16 items-center justify-between px-4 md:h-[4.5rem] md:px-8">
            <Logo compact lang={lang} />
            <button type="button" className="-me-2 flex h-11 w-11 items-center justify-center" onClick={() => setMenu(false)} aria-label={d.nav.close}>
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-1 px-6" aria-label={d.nav.menu}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenu(false)} className="display border-b border-line py-4 text-[2.4rem]">
                {l.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <OrderLink href={order} className="btn" onNavigate={() => setMenu(false)}>
                {d.nav.orderCta}
              </OrderLink>
              <a href={`tel:${site.phoneIntl}`} className="btn-line" dir="ltr">
                <PhoneIcon />
                {site.phone}
              </a>
            </div>
          </nav>
          <div className="frieze" />
          <div className="flex items-center justify-between px-6 py-3">
            <LangSwitch lang={lang} label={d.nav.lang} />
          </div>
        </div>
      )}
    </>
  );
}

/** Barre fixée en bas de l'écran sur mobile : « Commander à retirer » toujours à portée de pouce, et l'appel. */
export function MobileOrderBar() {
  const { lang, d } = useLocale();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-px border-t border-line bg-line pb-[env(safe-area-inset-bottom)] md:hidden">
      <OrderLink href={`/${lang}#commander`} className="btn flex-1 !min-h-14 !rounded-none">
        {d.nav.orderCta}
      </OrderLink>
      <a href={`tel:${site.phoneIntl}`} className="nav-link flex min-h-14 items-center justify-center gap-2 bg-cream px-5">
        <PhoneIcon />
        {d.nav.call}
      </a>
    </div>
  );
}
