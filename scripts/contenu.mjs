// Génère CONTENU.md : tous les textes du site en français, arabe et anglais, et la liste des produits, pour validation.
//   npm run contenu
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const read = async (f) => JSON.parse(await readFile(path.join(ROOT, f), "utf8"));
const [fr, ar, en, produits, site, saisons] = await Promise.all(["locales/fr.json", "locales/ar.json", "locales/en.json", "data/produits.json", "data/site.json", "data/saisons.json"].map(read));

const get = (o, p) => p.reduce((x, k) => (x == null ? x : x[k]), o);
const cell = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
const out = [];
const p = (s = "") => out.push(s);

p("# Boucherie Musulmane – contenu du site (à valider)");
p();
p("Généré depuis `locales/fr.json`, `locales/ar.json` et `locales/en.json`. Pour modifier un texte, modifiez ces fichiers puis relancez `npm run contenu`.");
p();
p("## À faire valider en priorité");
p();
p("- **Le nom** : « Boucherie Musulmane » (lu sur l'enseigne : « Halal · Boucherie Musulmane · Depuis 1988 »). Version arabe proposée : **" + site.nameAr + "** (à valider).");
p("- **« Depuis 1988 »** : lu sur l'enseigne (Street View). À confirmer.");
p("- **La liste des produits** ci-dessous : relevée sur les étiquettes de la vitrine (photo de la fiche Google). Aucun prix n'est affiché : « Prix au kilo en boutique » partout tant que les prix ne sont pas donnés.");
p("- **Les colis** (famille, barbecue, du mois) : contenu et prix à définir avec la boucherie. Les textes actuels restent généraux.");
p(`- **Le délai de commande** : « la veille avant 18 h », retrait au plus tôt ${site.order.leadHours} h après la commande (réglage \`data/site.json → order\`).`);
p("- **Le halal** : aucune certification n'est citée. Si la boucherie en a une, l'indiquer dans `data/site.json → halal`.");
p("- **La provenance** : le site dit seulement que l'origine est affichée en boutique (obligation légale). À préciser si la boucherie veut nommer ses fournisseurs ou régions.");
p("- **Le dimanche** : affiché « Nous consulter ».");
p("- **L'Aïd** : texte prudent (« les modalités sont annoncées quelques semaines avant »). Dates des fêtes indicatives dans `data/saisons.json` et `data/annonces.json`.");
p(`- **La note Google** : ${site.rating.value}/5 sur ${site.rating.count} avis, relevée le ${site.rating.checked}.`);
p();

p("## Produits (data/produits.json)");
p();
p("| Catégorie | Produit (FR) | AR | EN | Prix | Disponibilité |");
p("|---|---|---|---|---|---|");
for (const c of produits.categories)
  for (const id of c.items) {
    const it = produits.items[id];
    const prix = it.priceKg === null ? "en boutique" : `${it.from ? "à partir de " : ""}${it.priceKg.toFixed(2).replace(".", ",")} € ${it.unit === "kg" ? "/ kg" : "/ pièce"}`;
    p(`| ${fr.categories[c.id]} | ${cell(fr.products[id].name)} | ${cell(ar.products[id].name)} | ${cell(en.products[id].name)} | ${prix} | ${it.availability === "order" ? "sur commande" : "en boutique"} |`);
  }
p();
p("## Colis");
p();
for (const k of produits.packs) {
  p(`- **${fr.packs.items[k.id].name}** · ${ar.packs.items[k.id].name} · ${en.packs.items[k.id].name} — prix : ${k.price ?? "à définir"}`);
}
p();
p("## Fêtes affichées (data/saisons.json)");
p();
for (const s of saisons.items) p(`- ${fr.seasons.items[s.id].title} : visible du ${s.show} au ${s.to} (fête à partir du ${s.from})`);
p();

p("## Tous les textes");
p();
const walk = (o, pre = []) =>
  Object.entries(o).flatMap(([k, v]) => {
    const key = [...pre, k];
    if (typeof v === "string") return [key];
    if (Array.isArray(v)) return v.flatMap((x, i) => (typeof x === "string" ? [[...key, i]] : walk(x, [...key, i])));
    return walk(v, key);
  });
let section = "";
for (const key of walk(fr)) {
  if (key[0] === "products") continue;
  if (key[0] !== section) {
    section = key[0];
    p();
    p(`### ${section}`);
    p();
    p("| Clé | Français | العربية | English |");
    p("|---|---|---|---|");
  }
  p(`| ${key.slice(1).join(".")} | ${cell(get(fr, key))} | ${cell(get(ar, key))} | ${cell(get(en, key))} |`);
}
p();
await writeFile(path.join(ROOT, "CONTENU.md"), out.join("\n"));
console.log("CONTENU.md écrit");
