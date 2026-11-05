// Affichette A5 imprimable (148 × 210 mm) avec QR code vers le site : print/affichette-a5.pdf
//   npm run affichette
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";
import site from "../data/site.json" with { type: "json" };

const ROOT = path.resolve(import.meta.dirname, "..");
const mm = (v) => (v * 72) / 25.4;
const W = mm(148);
const H = mm(210);
const hex = (h) => rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const C = { bordeaux: hex("#6B1E22"), deep: hex("#4E1519"), cream: hex("#F5EFE6"), ink: hex("#161412"), muted: hex("#4B443E"), sign: hex("#C8494F") };

const pdf = await PDFDocument.create();
pdf.setTitle("Boucherie Musulmane – affichette A5");
const page = pdf.addPage([W, H]);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
const reg = await pdf.embedFont(StandardFonts.Helvetica);
const center = (text, y, font, size, color) => page.drawText(text, { x: (W - font.widthOfTextAtSize(text, size)) / 2, y, size, font, color });

page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: C.cream });
// Bandeau enseigne
const bandH = mm(62);
page.drawRectangle({ x: 0, y: H - bandH, width: W, height: bandH, color: C.deep });
page.drawRectangle({ x: mm(8), y: H - bandH + mm(8), width: W - mm(16), height: bandH - mm(16), borderColor: C.cream, borderOpacity: 0.5, borderWidth: 0.6 });
center("BOUCHERIE", H - mm(27), bold, 30, C.cream);
center("MUSULMANE", H - mm(39), bold, 30, C.cream);
page.drawRectangle({ x: W / 2 - mm(7), y: H - mm(45), width: mm(14), height: 1.4, color: C.sign });
center("BOUCHERIE HALAL  ·  AMIENS  ·  DEPUIS 1988", H - mm(51), reg, 8.5, C.cream);
// Frise de carreaux
const fy = H - bandH - mm(4);
for (let x = 0; x < W; x += mm(7.2)) page.drawRectangle({ x, y: fy, width: mm(6.7), height: mm(4), color: C.bordeaux });

center("Commandez en ligne,", H - mm(84), bold, 19, C.ink);
center("retirez en boutique.", H - mm(93), bold, 19, C.ink);
center("Colis familiaux · découpe sur demande · commandes de l'Aïd", H - mm(102), reg, 9, C.muted);

// QR code
const qr = QRCode.create(`${site.url}/fr`, { errorCorrectionLevel: "M" });
const n = qr.modules.size;
const box = mm(46);
const cellSize = box / (n + 8);
const qx = (W - box) / 2;
const qy = H - mm(156);
page.drawRectangle({ x: qx, y: qy, width: box, height: box, color: rgb(1, 1, 1) });
for (let r = 0; r < n; r++)
  for (let c = 0; c < n; c++) if (qr.modules.get(r, c)) page.drawRectangle({ x: qx + (c + 4) * cellSize, y: qy + box - (r + 5) * cellSize, width: cellSize + 0.05, height: cellSize + 0.05, color: C.ink });
center("Scannez pour commander", qy - mm(6), bold, 10, C.bordeaux);
center(site.url.replace("https://", ""), qy - mm(11), reg, 8, C.muted);

// Pied : adresse, horaires, téléphone
page.drawLine({ start: { x: mm(14), y: mm(30) }, end: { x: W - mm(14), y: mm(30) }, thickness: 0.5, color: C.muted, opacity: 0.4 });
center(`${site.address.street}, ${site.address.postalCode} ${site.address.city}`, mm(22), reg, 9.5, C.ink);
center("Du lundi au samedi, 9 h – 19 h 30", mm(16), reg, 9.5, C.ink);
center(site.phone, mm(8.5), bold, 14, C.bordeaux);

await mkdir(path.join(ROOT, "print"), { recursive: true });
await writeFile(path.join(ROOT, "print/affichette-a5.pdf"), await pdf.save());
console.log("print/affichette-a5.pdf écrit");
