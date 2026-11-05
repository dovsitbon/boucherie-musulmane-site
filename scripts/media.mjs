// Photos du site, en deux temps :
//  1. les 3 photos de la fiche Google (assets/raw/) sont recadrées une fois dans assets/<catégorie>/ ;
//  2. TOUT ce qui se trouve dans assets/hero, viandes, boutique, colis est préparé pour le web dans public/media/.
//   npm run media
//
// Ajouter une photo prise sur place : la déposer dans le bon dossier avec le nom attendu
// (voir assets/A-PHOTOGRAPHIER.md), relancer `npm run media`, puis redéployer. Le site la montre à la place
// de l'emplacement vide, sans toucher au code.
//
// Écartée : maps_01 (capture Google Street View, pas une photo du propriétaire, droits Google) → assets/_ecartees/.
// Elle a servi à lire l'enseigne : « Halal · Boucherie Musulmane · Depuis 1988 · 53 ».
import { copyFile, mkdir, readdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const raw = (n) => path.join(ROOT, "assets/raw", `boucherie-musulmane_maps_${n}.jpg`);
const CATS = ["hero", "viandes", "boutique", "colis"];

// L'éclairage rose de la vitrine (néons à viande) : on le neutralise un peu pour des couleurs plus franches.
const neutral = (img) => img.recomb([[0.95, 0.05, 0], [0.02, 1.0, 0], [0, 0.07, 0.88]]).modulate({ saturation: 0.94, brightness: 1.03 });

// [source, catégorie, nom, recadrage (x, y, l, h) ou null, correction de la lumière rose]
const PICKS = [
  [raw("02"), "hero", "vitrine-boucherie", { left: 0, top: 360, width: 1600, height: 840 }, true],
  [raw("02"), "boutique", "comptoir-vitrine", null, true],
  [raw("02"), "viandes", "agneau-vitrine", { left: 770, top: 520, width: 560, height: 680 }, true],
  [raw("02"), "viandes", "boeuf-vitrine", { left: 0, top: 470, width: 600, height: 730 }, true],
  [raw("02"), "viandes", "veau-vitrine", { left: 440, top: 600, width: 560, height: 600 }, true],
  [raw("02"), "viandes", "volaille-vitrine", { left: 1190, top: 600, width: 410, height: 560 }, true],
  [raw("03"), "viandes", "boeuf-fume-chorizo", { left: 0, top: 125, width: 1242, height: 935 }, false],
  [raw("04"), "boutique", "epicerie-fine-halal", null, false],
];

for (const c of [...CATS, "_ecartees"]) await mkdir(path.join(ROOT, "assets", c), { recursive: true });

for (const [src, cat, name, crop, fix] of PICKS) {
  const out = path.join(ROOT, "assets", cat, `${name}.jpg`);
  if (existsSync(out)) continue; // déjà classée (on ne réécrit pas une photo remplacée à la main)
  let img = sharp(src).rotate();
  if (crop) img = img.extract(crop);
  if (fix) img = neutral(img);
  await img.jpeg({ quality: 92, mozjpeg: true }).toFile(out);
}
if (existsSync(raw("01"))) await copyFile(raw("01"), path.join(ROOT, "assets/_ecartees/street-view-facade.jpg"));

// 2. Préparation web de tout ce qui est classé
const sizes = {};
for (const cat of CATS) {
  await mkdir(path.join(ROOT, "public/media", cat), { recursive: true });
  for (const f of (await readdir(path.join(ROOT, "assets", cat))).sort()) {
    if (!/\.(jpe?g|png|webp|avif|heic)$/i.test(f)) continue;
    const name = f.replace(/\.\w+$/, "").toLowerCase();
    const max = cat === "hero" ? 2200 : 1600;
    const info = await sharp(path.join(ROOT, "assets", cat, f))
      .rotate()
      .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(path.join(ROOT, "public/media", cat, `${name}.jpg`));
    sizes[`${cat}/${name}`] = [info.width, info.height];
  }
}

// Image de partage (Open Graph) 1200 × 630 : la vitrine à droite, le nom à gauche sur fond sombre
const heroFile = path.join(ROOT, "assets/hero", (await readdir(path.join(ROOT, "assets/hero"))).find((f) => /\.(jpe?g|png|webp)$/i.test(f)));
const photo = await sharp(heroFile).rotate().resize({ width: 640, height: 630, fit: "cover" }).toBuffer();
const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="630">
  <rect x="56" y="150" width="488" height="300" fill="none" stroke="#F5EFE6" stroke-opacity=".5" stroke-width="1.5"/>
  <text x="300" y="230" text-anchor="middle" font-family="Arial Narrow, Arial, sans-serif" font-weight="700" font-size="44" letter-spacing="4" fill="#F5EFE6">BOUCHERIE</text>
  <text x="300" y="285" text-anchor="middle" font-family="Arial Narrow, Arial, sans-serif" font-weight="700" font-size="44" letter-spacing="4" fill="#F5EFE6">MUSULMANE</text>
  <rect x="270" y="315" width="60" height="2" fill="#C8494F"/>
  <text x="300" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="17" letter-spacing="4" fill="#E9DFD0">BOUCHERIE HALAL · AMIENS</text>
  <text x="300" y="400" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" letter-spacing="2" fill="#C9BBA8">53 rue du Général Leclerc · depuis 1988</text>
</svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#4E1519" } })
  .composite([
    { input: photo, left: 560, top: 0 },
    { input: text, left: 0, top: 0 },
  ])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(path.join(ROOT, "public/og.jpg"));

await writeFile(path.join(ROOT, "data/media-sizes.json"), JSON.stringify(sizes, null, 1) + "\n");
console.log(`${Object.keys(sizes).length} photos prêtes : ${Object.keys(sizes).join(", ")}`);
