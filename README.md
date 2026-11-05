# Boucherie Musulmane – site vitrine et commande à retirer

Boucherie halal depuis 1988, 53 rue du Général Leclerc, 80000 Amiens. Next.js, Tailwind, Framer Motion ; fr (défaut), ar (RTL), en.

- Textes : `locales/fr.json`, `ar.json`, `en.json` (puis `npm run contenu` pour régénérer `CONTENU.md`)
- Produits, colis, prix : `data/produits.json` · Horaires : `data/horaires.json` · Bandeau : `data/annonces.json` · Fêtes : `data/saisons.json` · Coordonnées et réglages : `data/site.json`
- Photos : `assets/A-PHOTOGRAPHIER.md`, puis `npm run media`
- Affichette A5 : `npm run affichette` → `print/affichette-a5.pdf`
- Commandes par e-mail (Resend) : variables `RESEND_API_KEY`, `ORDER_NOTIFY_EMAIL`, `RESEND_FROM`
- Infos à demander à la boucherie : `INFOS-A-DEMANDER.md`
