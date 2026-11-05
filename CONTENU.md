# Boucherie Musulmane – contenu du site (à valider)

Généré depuis `locales/fr.json`, `locales/ar.json` et `locales/en.json`. Pour modifier un texte, modifiez ces fichiers puis relancez `npm run contenu`.

## À faire valider en priorité

- **Le nom** : « Boucherie Musulmane » (lu sur l'enseigne : « Halal · Boucherie Musulmane · Depuis 1988 »). Version arabe proposée : **الجزارة الإسلامية** (à valider).
- **« Depuis 1988 »** : lu sur l'enseigne (Street View). À confirmer.
- **La liste des produits** ci-dessous : relevée sur les étiquettes de la vitrine (photo de la fiche Google). Aucun prix n'est affiché : « Prix au kilo en boutique » partout tant que les prix ne sont pas donnés.
- **Les colis** (famille, barbecue, du mois) : contenu et prix à définir avec la boucherie. Les textes actuels restent généraux.
- **Le délai de commande** : « la veille avant 18 h », retrait au plus tôt 24 h après la commande (réglage `data/site.json → order`).
- **Le halal** : aucune certification n'est citée. Si la boucherie en a une, l'indiquer dans `data/site.json → halal`.
- **La provenance** : le site dit seulement que l'origine est affichée en boutique (obligation légale). À préciser si la boucherie veut nommer ses fournisseurs ou régions.
- **Le dimanche** : affiché « Nous consulter ».
- **L'Aïd** : texte prudent (« les modalités sont annoncées quelques semaines avant »). Dates des fêtes indicatives dans `data/saisons.json` et `data/annonces.json`.
- **La note Google** : 4.8/5 sur 252 avis, relevée le 2026-11-05.

## Produits (data/produits.json)

| Catégorie | Produit (FR) | AR | EN | Prix | Disponibilité |
|---|---|---|---|---|---|
| Agneau | Gigot d'agneau | فخذ الخروف | Leg of lamb | en boutique | en boutique |
| Agneau | Épaule d'agneau | كتف الخروف | Lamb shoulder | en boutique | en boutique |
| Agneau | Côtelettes d'agneau | ريش الخروف | Lamb chops | en boutique | en boutique |
| Agneau | Côte filet double d'agneau | ريش الفيليه المزدوجة | Double lamb loin chop | en boutique | en boutique |
| Agneau | Collier d'agneau | رقبة الخروف | Lamb neck | en boutique | en boutique |
| Agneau | Poitrine d'agneau | صدر الخروف | Lamb breast | en boutique | en boutique |
| Bœuf | Faux-filet | فوفيليه (Faux-filet) | Sirloin | en boutique | en boutique |
| Bœuf | Rosbif | روزبيف | Roast beef | en boutique | en boutique |
| Bœuf | Gîte à la noix | جيت نوا (Gîte à la noix) | Silverside | en boutique | en boutique |
| Bœuf | Viande hachée | لحم مفروم | Minced beef | en boutique | en boutique |
| Bœuf | Collier de bœuf | رقبة البقر | Beef neck | en boutique | en boutique |
| Bœuf | Plat de côtes | أضلاع البقر | Short ribs | en boutique | en boutique |
| Veau | Noix de veau en escalopes | إسكالوب العجل | Veal escalopes | en boutique | en boutique |
| Veau | Côte de veau | ريش العجل | Veal chop | en boutique | en boutique |
| Veau | Épaule de veau | كتف العجل | Veal shoulder | en boutique | en boutique |
| Veau | Jarret de veau | موزة العجل | Veal shank | en boutique | en boutique |
| Veau | Poitrine de veau | صدر العجل | Veal breast | en boutique | en boutique |
| Volaille | Cuisses de poulet | أفخاذ الدجاج | Chicken thighs | en boutique | en boutique |
| Volaille | Pilons de poulet | دبابيس الدجاج | Chicken drumsticks | en boutique | en boutique |
| Volaille | Ailes de poulet | أجنحة الدجاج | Chicken wings | en boutique | en boutique |
| Merguez & saucisses | Merguez | مرقاز | Merguez | en boutique | en boutique |
| Merguez & saucisses | Saucisses | نقانق | Sausages | en boutique | en boutique |
| Préparations | Bœuf fumé extra | لحم بقر مدخّن ممتاز | Extra smoked beef | en boutique | en boutique |
| Préparations | Chorizo de bœuf extra | شوريزو بقر ممتاز | Extra beef chorizo | en boutique | en boutique |
| Préparations | Saucisson sec de bœuf | سجق بقر مجفف | Dry beef sausage | en boutique | en boutique |
| Préparations | Foie gras et pâtés halal | فوا غرا وباتيه حلال | Halal foie gras and pâtés | en boutique | en boutique |

## Colis

- **Colis famille** · صندوق العائلة · Family box — prix : à définir
- **Colis barbecue** · صندوق الشواء · Barbecue box — prix : à définir
- **Colis du mois** · صندوق الشهر · Box of the month — prix : à définir

## Fêtes affichées (data/saisons.json)

- Fin d'année : visible du 2026-11-01 au 2026-12-31 (fête à partir du 2026-12-15)
- Ramadan : visible du 2027-01-15 au 2027-03-09 (fête à partir du 2027-02-08)
- Aïd al-Adha : visible du 2027-04-01 au 2027-05-19 (fête à partir du 2027-05-16)
- Saison du barbecue : visible du 2027-04-15 au 2027-09-15 (fête à partir du 2027-05-01)
- Fin d'année : visible du 2027-11-01 au 2027-12-31 (fête à partir du 2027-12-15)

## Tous les textes


### meta

| Clé | Français | العربية | English |
|---|---|---|---|
| title | Boucherie halal à Amiens \| Boucherie Musulmane, rue du Général Leclerc | جزارة حلال في أميان \| Boucherie Musulmane، شارع الجنرال لوكلير | Halal butcher in Amiens \| Boucherie Musulmane, rue du Général Leclerc |
| description | Boucherie halal de quartier depuis 1988 au 53 rue du Général Leclerc, à Amiens : agneau, bœuf, veau, volaille, merguez, colis familiaux et commandes pour l'Aïd. Commande à retirer, découpe à la demande. 4,8/5 sur Google. | جزارة حلال في الحي منذ 1988، في 53 شارع الجنرال لوكلير بأميان: لحم الخروف والبقر والعجل والدجاج والمرقاز، وصناديق لحم للعائلة وطلبات العيد. اطلب واستلم من المحل، والتقطيع حسب طلبك. تقييم 4,8 من 5 على Google. | Neighbourhood halal butcher since 1988 at 53 rue du Général Leclerc, Amiens: lamb, beef, veal, chicken, merguez, family meat boxes and Eid orders. Click & collect, cut to order. Rated 4.8/5 on Google. |
| ogAlt | Vitrine de la Boucherie Musulmane à Amiens : agneau, bœuf, veau et volaille | واجهة اللحوم في جزارة Boucherie Musulmane بأميان: خروف وبقر وعجل ودجاج | The meat counter at Boucherie Musulmane in Amiens: lamb, beef, veal and chicken |
| legalTitle | Mentions légales \| Boucherie Musulmane, Amiens | الإشعار القانوني \| Boucherie Musulmane، أميان | Legal notice \| Boucherie Musulmane, Amiens |

### nav

| Clé | Français | العربية | English |
|---|---|---|---|
| meats | Nos viandes | لحومنا | Our meat |
| packs | Colis | الصناديق | Meat boxes |
| order | Commander | اطلب | Order |
| infos | Infos | معلومات | Visit |
| menu | Ouvrir le menu | فتح القائمة | Open menu |
| close | Fermer le menu | إغلاق القائمة | Close menu |
| skip | Aller au contenu | الانتقال إلى المحتوى | Skip to content |
| lang | Langue | اللغة | Language |
| orderCta | Commander à retirer | اطلب واستلم من المحل | Order for pickup |
| call | Appeler | اتصل | Call |
| home | Accueil, Boucherie Musulmane | الصفحة الرئيسية، Boucherie Musulmane | Home, Boucherie Musulmane |

### intro

| Clé | Français | العربية | English |
|---|---|---|---|
| skip | Passer | تخطٍّ | Skip |

### announce

| Clé | Français | العربية | English |
|---|---|---|---|
| close | Fermer le bandeau | إغلاق الشريط | Close banner |

### hero

| Clé | Français | العربية | English |
|---|---|---|---|
| eyebrow | Boucherie halal · Amiens | جزارة حلال · أميان | Halal butcher · Amiens |
| title | Le bon choix, au juste prix | الاختيار الصحيح، بالسعر العادل | The right choice, at the right price |
| sub | La boucherie de quartier de la rue du Général Leclerc, depuis 1988. Agneau, bœuf, veau et volaille, coupés comme vous les voulez, et vos commandes prêtes à l'heure dite. | جزارة الحي في شارع الجنرال لوكلير منذ 1988. خروف وبقر وعجل ودجاج، نقطّعها كما تحبون، وطلبكم جاهز في الموعد الذي تختارونه. | The neighbourhood butcher on rue du Général Leclerc since 1988. Lamb, beef, veal and chicken, cut the way you like, with your order ready when you come in. |
| ctaOrder | Commander à retirer | اطلب واستلم من المحل | Order for pickup |
| ctaMeats | Voir nos viandes | شاهد لحومنا | See our meat |
| rating | {value}/5 sur Google | {value}/5 على Google | {value}/5 on Google |
| ratingCount | {count} avis | {count} تقييماً | {count} reviews |
| ratingNote | Note Google relevée le {date} | تقييم Google بتاريخ {date} | Google rating checked on {date} |

### status

| Clé | Français | العربية | English |
|---|---|---|---|
| open | Ouvert maintenant | مفتوح الآن | Open now |
| until | jusqu'à {time} | حتى {time} | until {time} |
| closed | Fermé en ce moment | مغلق الآن | Closed right now |
| opens | ouvre {day} à {time} | يفتح {day} على الساعة {time} | opens {day} at {time} |
| today | aujourd'hui | اليوم | today |
| tomorrow | demain | غداً | tomorrow |

### tiles

| Clé | Français | العربية | English |
|---|---|---|---|
| title | Au comptoir | في الواجهة | At the counter |
| photoSoon | Photo à venir | الصورة قريباً | Photo coming soon |

### categories

| Clé | Français | العربية | English |
|---|---|---|---|
| agneau | Agneau | لحم الخروف | Lamb |
| boeuf | Bœuf | لحم البقر | Beef |
| veau | Veau | لحم العجل | Veal |
| volaille | Volaille | الدجاج | Chicken |
| merguez | Merguez & saucisses | مرقاز ونقانق | Merguez & sausages |
| preparations | Préparations | لحوم مجففة ومحضّرة | Cured & deli |

### services

| Clé | Français | العربية | English |
|---|---|---|---|
| title | La boucherie en pratique | كيف نخدمكم | How it works |
| items.pickup.title | Commande à retirer | اطلب واستلم | Click & collect |
| items.pickup.text | Commandez ici, passez prendre vos sacs à l'heure choisie. | اطلبوا هنا، واستلموا أكياسكم في الوقت الذي تختارونه. | Order here, pick up your bags at the time you choose. |
| items.cut.title | Découpe sur demande | تقطيع حسب الطلب | Cut to order |
| items.cut.text | Tranches, tajine, couscous, haché, brochettes : dites-nous. | شرائح، طاجين، كسكس، مفروم، أسياخ: قولوا لنا فقط. | Slices, tagine, couscous, mince, skewers: just tell us. |
| items.packs.title | Colis familiaux | صناديق العائلة | Family boxes |
| items.packs.text | Pour la semaine, le barbecue ou les grandes tablées. | للأسبوع، أو للشواء، أو للموائد الكبيرة. | For the week, the barbecue or a big family table. |
| items.phone.title | 09 83 49 94 40 | 09 83 49 94 40 | +33 9 83 49 94 40 |
| items.phone.text | Une question, une commande urgente : appelez-nous. | سؤال أو طلب مستعجل؟ اتصلوا بنا. | A question or an urgent order? Give us a call. |

### meats

| Clé | Français | العربية | English |
|---|---|---|---|
| eyebrow | Nos viandes | لحومنا | Our meat |
| title | Ce que vous trouvez en vitrine | ما تجدونه في الواجهة | What's in the counter |
| lead | Les morceaux de tous les jours, découpés au comptoir. Ajoutez-les à votre commande, ou passez les choisir en boutique. | قطع كل يوم، تُقطَّع على المنضدة. أضيفوها إلى طلبكم، أو تعالوا واختاروها في المحل. | Everyday cuts, prepared at the counter. Add them to your order, or come and choose in the shop. |
| all | Tout | الكل | All |
| filter | Filtrer par catégorie | التصفية حسب الصنف | Filter by category |
| from | à partir de | ابتداءً من | from |
| perKg | / kg | / كغ | / kg |
| perPiece | / pièce | / القطعة | each |
| priceShop | Prix au kilo en boutique | سعر الكيلو في المحل | Price per kg in store |
| pricePieceShop | Prix en boutique | السعر في المحل | Price in store |
| shop | En boutique | متوفر في المحل | In store |
| order | Sur commande | بالطلب المسبق | To order |
| add | Ajouter à ma commande | أضف إلى طلبي | Add to my order |
| addLabel | Ajouter {name} à ma commande | أضف {name} إلى طلبي | Add {name} to my order |
| checked | Liste relevée le {date}. Les prix changent selon les arrivages : le prix affiché en boutique fait foi. | القائمة بتاريخ {date}. تتغير الأسعار حسب الوصول: السعر المعروض في المحل هو المعتمد. | List checked on {date}. Prices vary with deliveries: the price shown in the shop applies. |

### packs

| Clé | Français | العربية | English |
|---|---|---|---|
| eyebrow | Les colis | الصناديق | Meat boxes |
| title | Un colis, et la semaine est prête | صندوق واحد، والأسبوع جاهز | One box, and the week is sorted |
| lead | Composés avec vous selon le nombre de personnes et votre budget. Commandez-les à l'avance, on les prépare pour l'heure de votre passage. | نحضّرها معكم حسب عدد الأشخاص والميزانية. اطلبوها مسبقاً، ونجهّزها لموعد مروركم. | Put together with you, for the number of people and the budget you have in mind. Order ahead and we'll have it ready when you come. |
| price | Prix en boutique | السعر في المحل | Price in store |
| from | à partir de | ابتداءً من | from |
| cta | Commander ce colis | اطلب هذا الصندوق | Order this box |
| ctaLabel | Commander le {name} | اطلب {name} | Order the {name} |
| items.famille.name | Colis famille | صندوق العائلة | Family box |
| items.famille.text | Un assortiment d'agneau, de bœuf et de volaille pour cuisiner toute la semaine, découpé et prêt à ranger. | تشكيلة من لحم الخروف والبقر والدجاج للطبخ طوال الأسبوع، مقطّعة وجاهزة للحفظ. | A mix of lamb, beef and chicken to cook all week, cut and ready to put away. |
| items.barbecue.name | Colis barbecue | صندوق الشواء | Barbecue box |
| items.barbecue.text | Merguez, brochettes, côtelettes et ailes de poulet : de quoi tenir le grill tout l'après-midi. | مرقاز وأسياخ وريش وأجنحة دجاج: ما يكفي للشواية طوال بعد الظهر. | Merguez, skewers, lamb chops and chicken wings: enough to keep the grill going all afternoon. |
| items.mois.name | Colis du mois | صندوق الشهر | Box of the month |
| items.mois.text | Une sélection qui change avec les saisons et les arrivages. Demandez-nous ce qu'il contient ce mois-ci. | تشكيلة تتغير مع المواسم وما يصل إلى المحل. اسألونا عن محتواه هذا الشهر. | A selection that changes with the seasons and deliveries. Ask us what's in it this month. |

### seasons

| Clé | Français | العربية | English |
|---|---|---|---|
| eyebrow | Les fêtes | المناسبات | Celebrations |
| title | Commandez tôt pour les grands jours | اطلبوا مبكراً للأيام الكبيرة | Order early for the big days |
| lead | Pour les fêtes, les commandes ouvrent plusieurs semaines avant. Réservez votre viande, on s'occupe de la découpe. | في المناسبات، تُفتح الطلبات قبل أسابيع. احجزوا لحمكم، ونحن نتكفل بالتقطيع. | For celebrations, orders open several weeks ahead. Book your meat, we take care of the cutting. |
| from | À partir du {date} | ابتداءً من {date} | From {date} |
| now | En ce moment | الآن | Now |
| until | jusqu'au {date} | حتى {date} | until {date} |
| order | Réserver | احجز | Book |
| orderLabel | Réserver pour {name} | احجز لـ{name} | Book for {name} |
| items.aid.title | Aïd al-Adha | عيد الأضحى | Eid al-Adha |
| items.aid.text | Réservation du mouton ou de la découpe : les modalités sont annoncées en boutique et ici quelques semaines avant la fête. | حجز الأضحية أو التقطيع: نعلن عن التفاصيل في المحل وهنا قبل العيد ببضعة أسابيع. | Book your sheep or your cuts: details are announced in the shop and here a few weeks before Eid. |
| items.ramadan.title | Ramadan | رمضان | Ramadan |
| items.ramadan.text | Viande hachée, collier pour la chorba, merguez et brochettes pour l'iftar. Commandez la veille, c'est prêt avant la rupture du jeûne. | لحم مفروم، رقبة للشوربة، مرقاز وأسياخ للإفطار. اطلبوا في اليوم السابق، ويكون جاهزاً قبل الإفطار. | Minced meat, lamb neck for chorba, merguez and skewers for iftar. Order the day before, it's ready before you break the fast. |
| items.finAnnee.title | Fin d'année | أعياد نهاية السنة | Year-end festivities |
| items.finAnnee.text | Rôtis, gigots, volailles et épicerie fine halal pour les repas de fêtes. Commandes conseillées avant le 20 décembre. | لحوم للفرن، أفخاذ خروف، دواجن وبقالة راقية حلال لموائد الأعياد. يُستحسن الطلب قبل 20 ديسمبر. | Roasts, legs of lamb, poultry and halal fine food for festive meals. Best ordered before 20 December. |
| items.barbecue.title | Saison du barbecue | موسم الشواء | Barbecue season |
| items.barbecue.text | Merguez, côtelettes, brochettes et colis barbecue, préparés pour le week-end. | مرقاز وريش وأسياخ وصناديق شواء، جاهزة لعطلة نهاية الأسبوع. | Merguez, lamb chops, skewers and barbecue boxes, ready for the weekend. |

### commitment

| Clé | Français | العربية | English |
|---|---|---|---|
| eyebrow | Depuis 1988 | منذ 1988 | Since 1988 |
| title | Une boucherie de quartier, tenue comme il faut | جزارة حي، تُدار كما يجب | A neighbourhood butcher, run properly |
| lead | Rue du Général Leclerc, on vient chez nous pour le choix, les prix et le conseil. Voici ce qui ne change pas. | في شارع الجنرال لوكلير، يأتينا الناس من أجل الاختيار والأسعار والنصيحة. وهذا ما لا يتغير عندنا. | On rue du Général Leclerc, people come to us for the choice, the prices and the advice. Here's what doesn't change. |
| items.fresh.title | La fraîcheur | الطزاجة | Freshness |
| items.fresh.text | La viande est découpée au comptoir, au fil de la journée et de vos demandes, pas des semaines à l'avance. | نقطّع اللحم على المنضدة طوال اليوم وحسب طلباتكم، لا قبل أسابيع. | Meat is cut at the counter through the day, as you ask for it, not weeks in advance. |
| items.origin.title | La provenance | المصدر | Origin |
| items.origin.text | L'origine de chaque viande est affichée en boutique. Demandez-nous d'où elle vient : on vous répond. | مصدر كل لحم معروض في المحل. اسألونا من أين يأتي، وسنجيبكم. | The origin of every meat is shown in the shop. Ask us where it comes from: we'll tell you. |
| items.halal.title | Le halal | الحلال | Halal |
| items.halal.text | Boucherie halal depuis 1988, c'est écrit sur l'enseigne et c'est notre métier. | جزارة حلال منذ 1988: مكتوب على اللافتة، وهذه مهنتنا. | A halal butcher since 1988: it's on the sign above the door, and it's our trade. |
| items.cut.title | La découpe | التقطيع | Cutting |
| items.cut.text | Tranches fines ou épaisses, morceaux pour le tajine, viande hachée devant vous : le boucher coupe à votre goût. | شرائح رقيقة أو سميكة، قطع للطاجين، لحم يُفرم أمامكم: الجزار يقطّع حسب ذوقكم. | Thin or thick slices, pieces for tagine, beef minced in front of you: the butcher cuts it your way. |
| certified | Certification halal : {body} | شهادة الحلال: {body} | Halal certification: {body} |

### infos

| Clé | Français | العربية | English |
|---|---|---|---|
| eyebrow | Infos pratiques | معلومات عملية | Visit us |
| title | Nous trouver | كيف تجدوننا | Find the shop |
| address | Adresse | العنوان | Address |
| hours | Horaires | أوقات العمل | Opening hours |
| access | Accès | الوصول | Getting here |
| accessText | Au 53 rue du Général Leclerc, à Amiens. Touchez « Itinéraire » pour venir à pied, en bus ou en voiture. | في 53 شارع الجنرال لوكلير، أميان. اضغطوا على «الاتجاهات» للمجيء مشياً أو بالحافلة أو بالسيارة. | At 53 rue du Général Leclerc, Amiens. Tap “Directions” to come on foot, by bus or by car. |
| phone | Téléphone | الهاتف | Phone |
| email | E-mail | البريد الإلكتروني | Email |
| directions | Itinéraire | الاتجاهات | Directions |
| mapTitle | Carte : Boucherie Musulmane, 53 rue du Général Leclerc, Amiens | خريطة: Boucherie Musulmane، 53 شارع الجنرال لوكلير، أميان | Map: Boucherie Musulmane, 53 rue du Général Leclerc, Amiens |
| closed | Fermé | مغلق | Closed |
| askUs | Nous consulter | اتصلوا بنا | Please call |
| days.0 | Lundi | الإثنين | Monday |
| days.1 | Mardi | الثلاثاء | Tuesday |
| days.2 | Mercredi | الأربعاء | Wednesday |
| days.3 | Jeudi | الخميس | Thursday |
| days.4 | Vendredi | الجمعة | Friday |
| days.5 | Samedi | السبت | Saturday |
| days.6 | Dimanche | الأحد | Sunday |

### faq

| Clé | Français | العربية | English |
|---|---|---|---|
| eyebrow | Questions fréquentes | أسئلة متكررة | FAQ |
| title | Avant de commander | قبل أن تطلبوا | Before you order |
| items.0.q | Combien de temps à l'avance faut-il commander ? | كم من الوقت مسبقاً يجب أن أطلب؟ | How far ahead should I order? |
| items.0.a | Commandez la veille avant 18 h pour un retrait le lendemain, à l'heure de votre choix. Pour les colis et les grosses quantités, prévenez-nous deux ou trois jours avant. Pour l'Aïd, les réservations ouvrent plusieurs semaines avant la fête. | اطلبوا في اليوم السابق قبل الساعة 18 للاستلام في اليوم التالي، في الوقت الذي تختارونه. للصناديق والكميات الكبيرة، أخبرونا قبل يومين أو ثلاثة. وللعيد، تُفتح الحجوزات قبل أسابيع. | Order by 6 pm the day before to collect the next day, at the time of your choice. For meat boxes and large quantities, let us know two or three days ahead. For Eid, bookings open several weeks before. |
| items.1.q | Pouvez-vous découper la viande comme je veux ? | هل يمكنكم تقطيع اللحم كما أريد؟ | Can you cut the meat the way I want? |
| items.1.a | Oui. Dites-nous dans la commande comment vous la voulez : en tranches, en morceaux pour le tajine ou le couscous, hachée, en brochettes. Ajoutez un mot si vous avez une préférence, l'épaisseur des tranches par exemple. | نعم. اكتبوا في الطلب كيف تريدونه: شرائح، أو قطعاً للطاجين أو الكسكس، أو مفروماً، أو أسياخاً. وأضيفوا ملاحظة إن كان لكم تفضيل، مثل سُمك الشرائح. | Yes. Tell us in your order how you'd like it: sliced, diced for tagine or couscous, minced, or on skewers. Add a note if you have a preference, such as the thickness of the slices. |
| items.2.q | Comment se passe le paiement ? | كيف يتم الدفع؟ | How do I pay? |
| items.2.a | Vous réglez en boutique, au moment du retrait. Rien n'est payé en ligne : vous voyez votre viande avant de payer. | تدفعون في المحل عند الاستلام. لا شيء يُدفع عبر الإنترنت: ترون لحمكم قبل أن تدفعوا. | You pay in the shop when you collect. Nothing is paid online: you see your meat before you pay. |
| items.3.q | D'où vient votre viande ? | من أين يأتي لحمكم؟ | Where does your meat come from? |
| items.3.a | L'origine de chaque viande est indiquée en boutique, comme la loi le demande. Posez-nous la question au comptoir ou par téléphone, on vous dit d'où vient le morceau que vous achetez. | مصدر كل لحم مكتوب في المحل كما يفرض القانون. اسألونا على المنضدة أو بالهاتف، ونقول لكم من أين تأتي القطعة التي تشترونها. | The origin of every meat is shown in the shop, as the law requires. Ask us at the counter or by phone and we'll tell you where your cut comes from. |
| items.4.q | Ma commande est-elle confirmée tout de suite ? | هل يُؤكَّد طلبي مباشرة؟ | Is my order confirmed straight away? |
| items.4.a | Vous recevez un récapitulatif à l'écran, et par e-mail si vous donnez votre adresse. Si un produit manque ou si l'heure ne convient pas, nous vous appelons. | يظهر لكم ملخص على الشاشة، ويصلكم بالبريد الإلكتروني إن تركتم عنوانكم. وإن نقص منتج أو لم يناسب الوقت، نتصل بكم. | You get a summary on screen, and by email if you give us your address. If something is missing or the time doesn't work, we'll call you. |
| items.5.q | Êtes-vous ouverts le dimanche ? | هل تفتحون يوم الأحد؟ | Are you open on Sundays? |
| items.5.a | Nous sommes ouverts du lundi au samedi, de 9 h à 19 h 30. Pour le dimanche, appelez-nous au 09 83 49 94 40 avant de passer. | نفتح من الإثنين إلى السبت، من 9:00 إلى 19:30. ليوم الأحد، اتصلوا بنا على 09 83 49 94 40 قبل المجيء. | We're open Monday to Saturday, 9 am to 7.30 pm. For Sundays, please call +33 9 83 49 94 40 before coming. |

### order

| Clé | Français | العربية | English |
|---|---|---|---|
| eyebrow | Commande à retirer | اطلب واستلم | Click & collect |
| title | Votre commande, prête à l'heure | طلبكم جاهز في موعده | Your order, ready on time |
| lead | Choisissez vos morceaux, la découpe et l'heure de passage. Vous payez en boutique, au retrait. | اختاروا القطع وطريقة التقطيع ووقت المرور. تدفعون في المحل عند الاستلام. | Choose your cuts, how you want them prepared and when you'll come by. You pay in the shop when you collect. |
| productsTitle | Vos produits | منتجاتكم | Your items |
| product | Produit | المنتج | Item |
| quantity | Quantité | الكمية | Quantity |
| unit | Unité | الوحدة | Unit |
| units.kg | kg | كغ | kg |
| units.piece | pièce | قطعة | piece |
| units.pieces | pièces | قطع | pieces |
| cut | Découpe | التقطيع | Cut |
| cuts.asIs | Comme d'habitude | كالعادة | As usual |
| cuts.slices | En tranches | شرائح | Sliced |
| cuts.pieces | En morceaux (tajine, couscous) | قطع (طاجين، كسكس) | Diced (tagine, couscous) |
| cuts.minced | Hachée | مفروم | Minced |
| cuts.skewers | En brochettes | أسياخ | On skewers |
| cuts.other | Autre (préciser) | غير ذلك (حدّدوا) | Other (please specify) |
| detail | Précision | ملاحظة | Details |
| detailPh | Ex. tranches fines, gigot raccourci, 6 personnes… | مثلاً: شرائح رقيقة، فخذ مقصّر، لـ6 أشخاص… | E.g. thin slices, shortened leg, for 6 people… |
| otherPh | Le produit que vous cherchez | المنتج الذي تبحثون عنه | The item you're looking for |
| other | Autre produit | منتج آخر | Other item |
| packsGroup | Colis | الصناديق | Meat boxes |
| addLine | Ajouter un produit | أضف منتجاً | Add an item |
| removeLine | Retirer ce produit | احذف هذا المنتج | Remove this item |
| pickupTitle | Retrait en boutique | الاستلام من المحل | Pickup in store |
| pickupLead | Retrait au plus tôt {hours} h après votre commande, pendant les heures d'ouverture. | الاستلام بعد {hours} ساعة على الأقل من الطلب، خلال أوقات العمل. | Pickup at the earliest {hours} hours after ordering, during opening hours. |
| date | Jour | اليوم | Day |
| time | Heure | الساعة | Time |
| timePh | Choisir une heure | اختاروا الساعة | Choose a time |
| contactTitle | Vos coordonnées | معلوماتكم | Your details |
| name | Nom | الاسم | Name |
| phone | Téléphone | الهاتف | Phone |
| email | E-mail (facultatif) | البريد الإلكتروني (اختياري) | Email (optional) |
| emailHint | Pour recevoir le récapitulatif de votre commande. | لتصلكم نسخة من ملخص الطلب. | To receive a summary of your order. |
| message | Message (facultatif) | رسالة (اختياري) | Message (optional) |
| messagePh | Une précision, une question… | ملاحظة أو سؤال… | A detail, a question… |
| required | obligatoire | إلزامي | required |
| submit | Envoyer ma commande | أرسل طلبي | Send my order |
| sending | Envoi en cours… | جارٍ الإرسال… | Sending… |
| payNote | Aucun paiement en ligne : vous réglez en boutique, au retrait. | لا دفع عبر الإنترنت: تدفعون في المحل عند الاستلام. | No online payment: you pay in the shop when you collect. |
| callInstead | Vous préférez téléphoner ? | تفضّلون الاتصال؟ | Rather call? |
| whatsapp | Envoyer aussi sur WhatsApp | أرسل أيضاً عبر واتساب | Also send on WhatsApp |
| errors.lines | Ajoutez au moins un produit, avec une quantité (et précisez le produit si vous choisissez « Autre »). | أضيفوا منتجاً واحداً على الأقل مع الكمية (وحدّدوا المنتج إن اخترتم «منتج آخر»). | Add at least one item with a quantity (and say what you need if you pick “Other”). |
| errors.date | Choisissez le jour du retrait. | اختاروا يوم الاستلام. | Choose the pickup day. |
| errors.time | Choisissez l'heure du retrait. | اختاروا ساعة الاستلام. | Choose the pickup time. |
| errors.name | Indiquez votre nom. | اكتبوا اسمكم. | Please enter your name. |
| errors.phone | Indiquez un numéro de téléphone valide. | اكتبوا رقم هاتف صحيحاً. | Please enter a valid phone number. |
| errors.email | Cette adresse e-mail ne semble pas valide. | يبدو أن هذا البريد الإلكتروني غير صحيح. | This email address doesn't look right. |
| errors.send | La commande n'a pas pu partir. Réessayez, ou appelez-nous : nous la prenons par téléphone. | تعذّر إرسال الطلب. حاولوا مرة أخرى، أو اتصلوا بنا: نأخذ الطلب بالهاتف. | Your order couldn't be sent. Try again, or call us: we'll take it by phone. |
| done.title | Commande envoyée | تم إرسال الطلب | Order sent |
| done.text | La boucherie a bien reçu votre commande. Nous vous appelons seulement s'il y a un souci. | وصل طلبكم إلى الجزارة. لن نتصل بكم إلا إذا كان هناك أمر ما. | The shop has received your order. We'll only call you if there's a problem. |
| done.pendingTitle | Dernière étape : un appel | خطوة أخيرة: مكالمة | One last step: a phone call |
| done.pendingText | Votre commande est prête à être transmise. Appelez-nous pour la confirmer, en lisant ce récapitulatif. | طلبكم جاهز للإرسال. اتصلوا بنا لتأكيده، واقرؤوا علينا هذا الملخص. | Your order is ready to pass on. Call us to confirm it, reading out this summary. |
| done.mail | Un récapitulatif vous a été envoyé à {email}. | أرسلنا الملخص إلى {email}. | A summary has been sent to {email}. |
| done.again | Passer une autre commande | طلب جديد | Place another order |
| mail.subject | Nouvelle commande à retirer | طلب جديد للاستلام | New pickup order |
| mail.title | Nouvelle commande à retirer | طلب جديد للاستلام | New pickup order |
| mail.lines | Produits | المنتجات | Items |
| mail.pickup | Retrait | الاستلام | Pickup |
| mail.name | Nom | الاسم | Name |
| mail.phone | Téléphone | الهاتف | Phone |
| mail.email | E-mail | البريد الإلكتروني | Email |
| mail.message | Message | رسالة | Message |
| mail.lang | Langue du client | لغة الزبون | Customer language |
| mail.confirmSubject | Votre commande à la Boucherie Musulmane | طلبكم في Boucherie Musulmane | Your order at Boucherie Musulmane |
| mail.confirmIntro | Bonjour {name}, merci pour votre commande. Voici le récapitulatif : | مرحباً {name}، شكراً على طلبكم. هذا هو الملخص: | Hello {name}, thank you for your order. Here's your summary: |
| mail.confirmOutro | Nous vous attendons au 53 rue du Général Leclerc, à Amiens. Vous réglez sur place, au retrait. Pour toute modification : 09 83 49 94 40. | ننتظركم في 53 شارع الجنرال لوكلير، أميان. الدفع في المحل عند الاستلام. لأي تعديل: 09 83 49 94 40. | See you at 53 rue du Général Leclerc, Amiens. You pay in the shop when you collect. To change anything: +33 9 83 49 94 40. |

### footer

| Clé | Français | العربية | English |
|---|---|---|---|
| tagline | Boucherie halal de quartier à Amiens, depuis 1988. | جزارة حلال في الحي بأميان، منذ 1988. | Neighbourhood halal butcher in Amiens, since 1988. |
| legal | Mentions légales | الإشعار القانوني | Legal notice |
| rights | Boucherie Musulmane, Amiens | Boucherie Musulmane، أميان | Boucherie Musulmane, Amiens |
| hours | Lundi au samedi, 9 h – 19 h 30 | من الإثنين إلى السبت، 9:00 – 19:30 | Monday to Saturday, 9 am – 7.30 pm |

### pages

| Clé | Français | العربية | English |
|---|---|---|---|
| legal.title | Mentions légales | الإشعار القانوني | Legal notice |
| legal.pending | à compléter | قيد الاستكمال | to be completed |
| legal.editor | Éditeur du site | ناشر الموقع | Publisher |
| legal.editorText | Boucherie Musulmane, 53 rue du Général Leclerc, 80000 Amiens. Téléphone : 09 83 49 94 40. | Boucherie Musulmane، 53 rue du Général Leclerc، 80000 Amiens، فرنسا. الهاتف: 09 83 49 94 40. | Boucherie Musulmane, 53 rue du Général Leclerc, 80000 Amiens, France. Phone: +33 9 83 49 94 40. |
| legal.company | Raison sociale | الاسم التجاري | Company name |
| legal.siret | SIRET | رقم SIRET | SIRET |
| legal.host | Hébergement | الاستضافة | Hosting |
| legal.data | Données personnelles | البيانات الشخصية | Personal data |
| legal.dataText | Les informations saisies dans le formulaire de commande (nom, téléphone, e-mail, message) servent uniquement à préparer votre commande et à vous contacter à son sujet. Elles ne sont ni revendues ni utilisées à d'autres fins. Pour les faire supprimer, appelez la boutique. | تُستعمل المعلومات المكتوبة في استمارة الطلب (الاسم، الهاتف، البريد، الرسالة) لتحضير طلبكم والتواصل معكم بشأنه فقط. لا تُباع ولا تُستعمل لأي غرض آخر. لحذفها، اتصلوا بالمحل. | The details entered in the order form (name, phone, email, message) are used only to prepare your order and contact you about it. They are never sold or used for anything else. To have them deleted, call the shop. |
| legal.cookies | Cookies | ملفات تعريف الارتباط | Cookies |
| legal.cookiesText | Le site ne dépose aucun cookie publicitaire ni de mesure d'audience. Seul votre choix de langue est mémorisé. | لا يضع الموقع أي ملفات إعلانية أو لقياس الزيارات. يُحفظ فقط اختياركم للغة. | This site sets no advertising or analytics cookies. Only your language choice is remembered. |
| legal.photos | Photos | الصور | Photos |
| legal.photosText | Photos de la boutique et de ses produits. Toute reproduction est interdite sans accord. | صور المحل ومنتجاته. يُمنع نسخها دون إذن. | Photos of the shop and its products. Reproduction is not allowed without permission. |

### alt

| Clé | Français | العربية | English |
|---|---|---|---|
| hero/vitrine-boucherie | La vitrine réfrigérée de la boucherie : bœuf, veau, agneau et poulet avec leurs étiquettes | واجهة اللحوم المبردة في الجزارة: بقر وعجل وخروف ودجاج مع بطاقاتها | The butcher's chilled counter: beef, veal, lamb and chicken with their labels |
| boutique/comptoir-vitrine | Le comptoir et la vitrine de la Boucherie Musulmane, à Amiens | منضدة وواجهة جزارة Boucherie Musulmane في أميان | The counter at Boucherie Musulmane in Amiens |
| boutique/epicerie-fine-halal | Panier de foie gras de canard, magret et pâtés halal en bocaux | سلة فيها فوا غرا البط وصدر البط وباتيه حلال في مرطبانات | Basket of duck foie gras, duck breast and halal pâtés in jars |
| viandes/agneau-vitrine | Gigots, épaules et colliers d'agneau en vitrine | أفخاذ وأكتاف ورقاب الخروف في الواجهة | Legs, shoulders and necks of lamb in the counter |
| viandes/boeuf-vitrine | Pièces de bœuf en vitrine : rosbif, faux-filet, gîte | قطع لحم البقر في الواجهة: روزبيف، فوفيليه، جيت | Beef joints in the counter: roast beef, sirloin, silverside |
| viandes/veau-vitrine | Noix, côtes et épaule de veau en vitrine | قطع العجل في الواجهة: إسكالوب، ريش، كتف | Veal cushion, chops and shoulder in the counter |
| viandes/volaille-vitrine | Cuisses et ailes de poulet en vitrine | أفخاذ وأجنحة الدجاج في الواجهة | Chicken thighs and wings in the counter |
| viandes/boeuf-fume-chorizo | Bœuf fumé, chorizo de bœuf et saucissons secs dans un panier en osier | لحم بقر مدخّن وشوريزو بقر وسجق مجفف في سلة من الخيزران | Smoked beef, beef chorizo and dry sausages in a wicker basket |
