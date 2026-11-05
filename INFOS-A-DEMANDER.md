# Boucherie Musulmane : infos à demander au boucher

À cocher pendant le rendez-vous. Où les mettre ensuite est entre parenthèses.

1. **Le nom exact sur l'enseigne.** L'enseigne dit « Halal · Boucherie Musulmane · Depuis 1988 ». Est-ce bien le nom à utiliser ? Un autre nom commercial ? Le nom en arabe qui lui plaît : « الجزارة الإسلامية » est proposé. (`data/site.json` → name, nameAr)
2. **Depuis 1988** : c'est juste ? Une petite histoire à raconter (qui a ouvert, la famille) ? (`locales/*.json` → commitment)
3. **Les produits et les prix au kilo.** Valider la liste relevée en vitrine (voir `CONTENU.md`), ajouter ce qui manque (brochettes, kefta, abats, poulet entier, dinde…), donner un prix « à partir de » par produit s'il veut l'afficher. (`data/produits.json` → priceKg)
4. **Les colis** : lesquels existent vraiment (famille, barbecue, du mois…), ce qu'il y a dedans, pour combien de personnes, le prix. (`data/produits.json` → packs, `locales/*.json` → packs)
5. **Le délai de commande** : « la veille avant 18 h » convient ? Délai plus long pour les colis ? (`data/site.json` → order.leadHours, cutoff ; `data/annonces.json`)
6. **L'organisation pour l'Aïd** : réservation du mouton entier ou seulement la découpe ? Acompte ? Abattoir, jour et heure de retrait ? Date d'ouverture des réservations. (`data/saisons.json`, `data/annonces.json`, `locales/*.json` → seasons.items.aid)
7. **La certification halal** : organisme (et accord pour le citer). Sans réponse claire, on n'en cite aucun. (`data/site.json` → halal)
8. **La provenance** : France, Europe ? Des fournisseurs ou régions qu'il veut mettre en avant ? (`locales/*.json` → commitment.items.origin)
9. **Le dimanche** : ouvert ou fermé ? Horaires des veilles de fête, fermetures annuelles. (`data/horaires.json`)
10. **Un portable pour WhatsApp** : si oui, le bouton WhatsApp s'active tout seul. (`data/site.json` → whatsapp, au format 336…)
11. **L'adresse e-mail** qui reçoit les commandes. Il faudra aussi créer la clé Resend (variables Vercel `RESEND_API_KEY`, `ORDER_NOTIFY_EMAIL`, `RESEND_FROM`). Tant que ce n'est pas fait, le client voit « Dernière étape : un appel » avec son récapitulatif.
12. **Les photos** : voir `assets/A-PHOTOGRAPHIER.md` (vitrine, comptoir, façade, chaque viande, colis).
13. **Le logo** : en a-t-il un (sacs, papier, tablier « BM ») ? Sinon, valider le logo typographique du site.
14. **SIRET et raison sociale**, nom du responsable. (`data/site.json` → legal)
15. **Moyens de paiement acceptés** en boutique (carte, espèces, tickets restaurant ?) pour la FAQ.
