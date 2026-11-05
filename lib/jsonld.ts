import site from "@/data/site.json";
import { getDict, locales, type Locale } from "@/lib/i18n";
import { weekHours } from "@/lib/hours";

const BUSINESS = `${site.url}/#butcher`;
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/** Données structurées de l'accueil : ButcherShop (adresse, horaires, note Google datée), site web, FAQ. */
export function homeJsonLd(lang: Locale) {
  const d = getDict(lang);
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, inLanguage: [...locales], publisher: { "@id": BUSINESS } },
      {
        "@type": "ButcherShop",
        "@id": BUSINESS,
        name: site.name,
        alternateName: ["Boucherie halal Amiens", site.nameAr],
        description: d.meta.description,
        url: `${site.url}/${lang}`,
        image: [`${site.url}/og.jpg`, `${site.url}/media/hero/vitrine-boucherie.jpg`],
        logo: `${site.url}/icon.svg`,
        telephone: site.phoneIntl,
        ...(site.email ? { email: site.email } : {}),
        priceRange: "€",
        foundingDate: String(site.since),
        currenciesAccepted: "EUR",
        address: { "@type": "PostalAddress", streetAddress: site.address.street, postalCode: site.address.postalCode, addressLocality: site.address.city, addressRegion: site.address.region, addressCountry: site.address.country },
        geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
        hasMap: site.mapsUrl,
        areaServed: { "@type": "City", name: "Amiens" },
        openingHoursSpecification: weekHours().flatMap((slots, i) => slots.map(([opens, closes]) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: `https://schema.org/${DAYS[i]}`, opens, closes }))),
        // Note Google relevée à la main (data/site.json → rating.checked) : à mettre à jour de temps en temps
        aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating.value, reviewCount: site.rating.count, bestRating: 5, worstRating: 1, dateModified: site.rating.checked },
        knowsLanguage: ["fr", "ar", "en"],
        potentialAction: { "@type": "OrderAction", target: `${site.url}/${lang}#commander`, deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModePickUp" },
      },
      { "@type": "FAQPage", mainEntity: d.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
}
