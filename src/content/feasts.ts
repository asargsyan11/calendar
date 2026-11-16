import type { Feast, FeastDate } from "./types";

export const feasts: Feast[] = [
  // ── Great (Tabernacle) feasts — Տաղավար տոներ ────────────────
  {
    // from the document
    slug: "christmas",
    categoryId: "tabernacle",
    name: { hy: "Սուրբ Ծնունդ և Աստվածահայտնություն", en: "Holy Nativity and Theophany" },
    short: {
      hy: "Սուրբ Ծնունդը Հայ Առաքելական եկեղեցին նշում է հունվարի 6-ին՝ միավորելով Հիսուս Քրիստոսի ծննդյան և Աստվածահայտնության խորհուրդները։",
      en: "The Armenian Apostolic Church celebrates Christmas on January 6, uniting the mysteries of the Nativity and the Theophany of Jesus Christ.",
    },
    long: {
      hy: [
        "Սուրբ Ծնունդը Հայ Առաքելական եկեղեցին նշում է հունվարի 6-ին՝ միավորելով Հիսուս Քրիստոսի ծննդյան և Աստվածահայտնության խորհուրդները։ Տոնի կարևոր ծեսերից է Սուրբ Պատարագից հետո կատարվող Ջրօրհնեքը, որը հիշատակում է Հիսուսի մկրտությունը Հորդանան գետում։ Ավանդական տոնական սեղանին մատուցվում են ձուկ, չամիչով փլավ և անուշեղեն, իսկ Սուրբ Ծննդյան նախորդ երեկոյին՝ Ճրագալույցին, եկեղեցում վառվող մոմերի լույսը խորհրդանշում է Քրիստոսի ծննդյան ավետիսը։",
      ],
      en: [
        "The Armenian Apostolic Church celebrates Christmas on January 6, uniting the mysteries of the Nativity and the Theophany of Jesus Christ. A key rite of the feast is the Blessing of Water after the Divine Liturgy, recalling Jesus' baptism in the Jordan. The festive table traditionally has fish, rice pilaf with raisins and sweets, and on Christmas Eve — Chragaluyts — the candlelight in church symbolizes the good news of Christ's birth.",
      ],
    },
  },
  {
    // from the document
    slug: "easter",
    categoryId: "tabernacle",
    name: { hy: "Սուրբ Հարություն՝ Զատիկ", en: "Holy Resurrection — Easter" },
    short: {
      hy: "Զատիկը Հայ Առաքելական եկեղեցու հինգ տաղավար տոներից է՝ նվիրված Հիսուս Քրիստոսի հարությանը։",
      en: "One of the five Tabernacle feasts of the Armenian Apostolic Church, dedicated to the Resurrection of Jesus Christ.",
    },
    long: {
      hy: [
        "Զատիկը Հայ Առաքելական եկեղեցու հինգ տաղավար տոներից է՝ նվիրված Հիսուս Քրիստոսի հարությանը, որը քրիստոնեական հավատքի հիմքն է և խորհրդանշում է կյանքի հաղթանակը մահվան նկատմամբ։ Հայկական ավանդույթում տոնի գլխավոր խորհրդանիշը կարմիր ներկված ձուն է, որի կարմիր գույնը կապվում է Քրիստոսի թափած արյան, իսկ ձուն՝ նոր կյանքի ու հարության հետ։ Զատկական սեղանին ավանդաբար մատուցվում են ձուկ, չամիչով փլավ, ներկված ձու և թարմ կանաչեղեն, իսկ միմյանց ձվախաղերը տոնի ամենասիրված սովորույթներից են։",
      ],
      en: [
        "Easter is one of the five Tabernacle feasts of the Armenian Apostolic Church, dedicated to the Resurrection of Jesus Christ — the foundation of the Christian faith and the victory of life over death. In Armenian tradition its main symbol is the red-dyed egg: the red recalls the blood Christ shed, and the egg stands for new life and resurrection. The Easter table has fish, rice pilaf with raisins, dyed eggs and fresh greens, and egg-tapping games are among the best-loved customs.",
      ],
    },
  },
  {
    slug: "vardavar",
    categoryId: "tabernacle",
    name: { hy: "Պայծառակերպություն (Վարդավառ)", en: "Transfiguration (Vardavar)" },
    short: {
      hy: "Քրիստոսի Պայծառակերպության տոնը, երբ ժողովուրդը ջուր է լցնում միմյանց վրա։",
      en: "The Transfiguration of Christ, when people splash water on each other.",
    },
    long: {
      hy: ["Վարդավառը նշվում է Զատկից 98 օր հետո։ Ջրախաղի սովորույթն ունի նախաքրիստոնեական արմատներ։"],
      en: ["Vardavar is held 98 days after Easter. The water-splashing custom has pre-Christian roots."],
    },
  },
  {
    // from the document
    slug: "assumption",
    categoryId: "tabernacle",
    name: {
      hy: "Խաղողօրհնեք (Սուրբ Աստվածածնի Վերափոխման տոն)",
      en: "Blessing of the Grapes (Assumption of the Holy Mother of God)",
    },
    short: {
      hy: "Սուրբ Աստվածածնի Վերափոխման տոնի ժողովրդական անվանումը՝ կապված նոր բերքի խաղողի օրհնության հետ։",
      en: "The folk name of the feast of the Assumption, linked to blessing the new harvest of grapes.",
    },
    long: {
      hy: [
        "Խաղողօրհնեքը Հայ Առաքելական եկեղեցու հինգ տաղավար տոներից մեկի՝ Սուրբ Աստվածածնի Վերափոխման տոնի ժողովրդական անվանումն է։ Այն նշվում է օգոստոսի 15-ին մոտակա կիրակի օրը և կապված է նոր բերքի խաղողի օրհնության հետ։ Տոնը խորհրդանշում է Աստծուն շնորհակալություն հայտնելը, բերքառատությունը, բարեկեցությունն ու ընտանիքի միասնությունը։ Տոնին բնորոշ են եկեղեցական արարողությունները, ուխտագնացությունները, ժողովրդական երգն ու պարը, ազգային խաղերը և ավանդական հյուրասիրությունները։",
      ],
      en: [
        "Khaghoghorhnek is the folk name of one of the five Tabernacle feasts of the Armenian Apostolic Church, the Assumption of the Holy Mother of God. It is held on the Sunday closest to August 15 and is linked to the blessing of the new harvest of grapes. The feast stands for thanksgiving to God, abundance, well-being and family unity, and is marked by church services, pilgrimages, folk songs and dances, national games and traditional hospitality.",
      ],
    },
  },
  {
    // from the document
    slug: "holy-cross",
    categoryId: "tabernacle",
    name: { hy: "Խաչվերաց", en: "Exaltation of the Holy Cross" },
    short: {
      hy: "Հայ Առաքելական եկեղեցու հինգ տաղավար տոներից վերջինը՝ նվիրված Սուրբ Խաչի բարձրացմանն ու փառաբանությանը։",
      en: "The last of the five Tabernacle feasts, dedicated to the raising and glorification of the Holy Cross.",
    },
    long: {
      hy: [
        "Խաչվերացը Հայ Առաքելական եկեղեցու հինգ տաղավար տոներից վերջինն է և նվիրված է Սուրբ Խաչի բարձրացմանն ու փառաբանությանը։ Այն նշվում է սեպտեմբերի 11–17-ն ընկած ժամանակահատվածում հանդիպող կիրակի օրը և կապված է Խաչափայտի պատմության ու Երուսաղեմ վերադարձի քրիստոնեական ավանդության հետ։ Տոնի ընթացքում կատարվում են Խաչի հանդիսավոր թափոր, Անդաստանի կարգ, ռեհանի օրհնություն և ուխտագնացություններ։ Ժողովրդական ավանդույթներում տոնն ուղեկցվել է մատաղով, ընդհանուր սեղաններով, երգով, պարով և հանգուցյալների հիշատակությամբ։",
      ],
      en: [
        "The Exaltation of the Holy Cross is the last of the five Tabernacle feasts of the Armenian Apostolic Church, dedicated to the raising and glorification of the Holy Cross. It is held on the Sunday between September 11 and 17 and is tied to the Christian tradition of the wood of the Cross and its return to Jerusalem. The feast includes a solemn procession of the Cross, the Andastan service, the blessing of basil and pilgrimages. In folk tradition it was accompanied by matagh, shared tables, songs, dances and the remembrance of the departed.",
      ],
    },
  },

  // ── Feasts of the Lord — Տերունական տոներ ────────────────────
  {
    slug: "trndez",
    categoryId: "lord",
    name: { hy: "Տյառնընդառաջ (Տրնդեզ)", en: "Presentation of the Lord (Trndez)" },
    short: {
      hy: "Մանուկ Հիսուսի տաճար ընծայման տոնը․ նախորդ երեկոյան խարույկ են վառում։",
      en: "The presentation of the infant Jesus in the Temple; bonfires are lit the evening before.",
    },
    long: {
      hy: ["Տոնի նախօրեին եկեղեցուց վառած կրակով խարույկ են վառում, որի վրայով ցատկում են նորապսակներն ու երիտասարդները։"],
      en: ["On the eve, a bonfire is lit from the church's candles, and newlyweds and young people jump over it."],
    },
  },
  {
    slug: "palm-sunday",
    categoryId: "lord",
    name: { hy: "Ծաղկազարդ", en: "Palm Sunday" },
    short: {
      hy: "Քրիստոսի հաղթական մուտքը Երուսաղեմ։",
      en: "Christ's triumphant entry into Jerusalem.",
    },
    long: {
      hy: ["Եկեղեցիներում օրհնում և բաժանում են ուռենու ճյուղեր։"],
      en: ["Willow branches are blessed and handed out in churches."],
    },
  },
  {
    // from the document
    slug: "kanach-kiraki",
    categoryId: "lord",
    name: { hy: "Կանաչ կիրակի", en: "Green Sunday" },
    short: {
      hy: "Աշխարհամատրան կիրակին՝ Զատկից երկու շաբաթ անց, նվիրված Երուսաղեմի առաջին քրիստոնեական եկեղեցու հիշատակին։",
      en: "The Sunday of the World Church, two weeks after Easter, in memory of the first Christian church in Jerusalem.",
    },
    long: {
      hy: [
        "Կանաչ կիրակին՝ Աշխարհամատրան կիրակին, նշվում է Զատկից երկու շաբաթ անց և նվիրված է Երուսաղեմի առաջին քրիստոնեական եկեղեցու հիշատակին։ Ժողովրդական անվանումը կապվում է գարնան կանաչապատ բնության հետ, իսկ տոնական ավանդույթներում առանձնահատուկ տեղ ունեին ուխտագնացությունները, բացօթյա խնջույքները, պարերն ու ժողովրդական մրցությունները։ Որոշ բնակավայրերում ուխտավայրերի շուրջ կազմակերպվում էին նաև տոնավաճառներ, ձվախաղեր և ձիարշավներ, իսկ տոնական սեղաններին հանդիպում էին ներկված ձվեր ու մատաղի կերակուրներ։",
      ],
      en: [
        "Green Sunday — the Sunday of the World Church (Ashkharhamatran) — is held two weeks after Easter in memory of the first Christian church in Jerusalem. Its folk name comes from the green of spring, and the festivities centered on pilgrimages, outdoor feasts, dances and folk contests. In some places fairs, egg-tapping games and horse races were held around pilgrimage sites, and the tables had dyed eggs and matagh dishes.",
      ],
    },
  },
  {
    // from the document
    slug: "ascension",
    categoryId: "lord",
    name: { hy: "Համբարձում", en: "Ascension" },
    short: {
      hy: "Սուրբ Հարությունից 40 օր անց՝ Հիսուս Քրիստոսի համբարձման հիշատակը։",
      en: "Held 40 days after Easter, commemorating the ascension of Jesus Christ.",
    },
    long: {
      hy: [
        "Համբարձումը Հայ Առաքելական եկեղեցու տոներից է, որը նշվում է Սուրբ Հարությունից 40 օր անց՝ հիշատակելով Հիսուս Քրիստոսի համբարձումը։ Ժողովրդական ավանդույթում այն վերածվել է սիրո և երիտասարդության տոնի․ աղջիկները ծաղիկներ ու յոթ տեսակ տերև էին հավաքում, ջրով լցված կուժի մեջ դնում իրենց վիճակները և երգերի ու գուշակությունների միջոցով փորձում բացահայտել ապագան։ Տոնին բնորոշ էին ծաղկահյուս պսակները, սիրային երգերը, վիճակահանության ծեսերն ու ծիսական ուտեստները, որոնցից հայտնի էր կաթնովը։",
      ],
      en: [
        "Ascension is a feast of the Armenian Apostolic Church held 40 days after Easter, commemorating the ascension of Jesus Christ. In folk tradition it became a feast of love and youth: girls gathered flowers and seven kinds of leaves, placed their tokens (vichak) in a jug of water, and tried to uncover the future through songs and fortune-telling. Flower wreaths, love songs, the drawing of lots and ritual dishes — above all katnov — were typical of the feast.",
      ],
    },
  },

  // ── Saints' days — Սրբոց տոներ ───────────────────────────────
  {
    slug: "saint-sarkis",
    categoryId: "saints",
    name: { hy: "Սուրբ Սարգիս Զորավար", en: "Saint Sarkis the Warrior" },
    short: {
      hy: "Սուրբ Սարգիս զորավարի և նրա որդու՝ Մարտիրոսի հիշատակի օրը։",
      en: "The day of Saint Sarkis the Warrior and his son Martiros.",
    },
    long: {
      hy: ["Ավանդության համաձայն՝ երիտասարդներն աղի բլիթ են ուտում, որ երազում տեսնեն իրենց ապագա զույգին։"],
      en: ["By tradition, young people eat salty bread so they will dream of their future spouse."],
    },
  },
  {
    // from the document
    slug: "surb-karapet",
    categoryId: "saints",
    name: { hy: "Սուրբ Կարապետի ուխտ", en: "Pilgrimage to Surb Karapet" },
    short: {
      hy: "Մշո Սուրբ Կարապետի վանքը հայ ժողովրդի ամենանվիրական ուխտավայրերից էր։",
      en: "The Monastery of Surb Karapet in Mush was one of the most sacred pilgrimage sites of the Armenian people.",
    },
    long: {
      hy: [
        "Մշո Սուրբ Կարապետի վանքը հայ ժողովրդի ամենանվիրական ուխտավայրերից էր։ Որոշ ուխտավորներ յոթ տարի շարունակ՝ Համբարձումից մինչև Վարդավառ, յոթ շաբաթ պահք էին պահում՝ ուխտագնացությանը նախապատրաստվելով աղոթքով ու ծոմապահությամբ։ Ուխտի համար մարդիկ Սուրբ Կարապետի անունով ցորեն էին ցանում, իսկ բերքը վաճառելուց ստացված գումարով մեկնում Տարոնի Գլակա վանք։ Ուխտավորները սրբից հայցում էին առողջություն, զավակ, ուժ ու իրենց նվիրական երազանքների իրականացումը։",
      ],
      en: [
        "The Monastery of Surb Karapet in Mush was one of the most sacred pilgrimage sites of the Armenian people. For seven years in a row, some pilgrims kept a seven-week fast from Ascension to Vardavar, preparing for the pilgrimage with prayer and fasting. People sowed wheat in Surb Karapet's name and used the money from selling the harvest to travel to the Glak monastery in Taron. Pilgrims asked the saint for health, children, strength and the fulfilment of their dearest wishes.",
      ],
    },
  },
  {
    // from the document
    slug: "translators",
    categoryId: "saints",
    name: { hy: "Թարգմանչաց տոն", en: "Feast of the Holy Translators" },
    short: {
      hy: "Ազգային-եկեղեցական տոն՝ նվիրված Սուրբ Մեսրոպ Մաշտոցին, Սուրբ Սահակ Պարթևին և հայ թարգմանիչներին։",
      en: "A national church feast honoring Saint Mesrop Mashtots, Saint Sahak Partev and the Armenian translators.",
    },
    long: {
      hy: [
        "Թարգմանչաց տոնը Հայ Առաքելական եկեղեցու ազգային-եկեղեցական կարևոր տոներից է՝ նվիրված Սուրբ Մեսրոպ Մաշտոցին, Սուրբ Սահակ Պարթևին և հայ թարգմանիչներին։ Այն կապված է 5-րդ դարում հայոց գրերի ստեղծման և հայերեն թարգմանական շարժման զարգացման հետ։ Թարգմանությունների շնորհիվ հայերենը դարձավ հոգևոր, գիտական, կրթական և գրական գիտելիքի փոխանցման լեզու՝ նպաստելով հայ մշակույթի զարգացմանը։ Տոնը նշվում է եկեղեցական արարողություններով և մշակութային միջոցառումներով՝ ընդգծելով հայոց լեզվի, գրքի, կրթության և ազգային ինքնության պահպանման կարևորությունը։",
      ],
      en: [
        "The Feast of the Holy Translators is one of the important national church feasts of the Armenian Apostolic Church, honoring Saint Mesrop Mashtots, Saint Sahak Partev and the Armenian translators. It is linked to the creation of the Armenian alphabet in the 5th century and the growth of the Armenian translation movement. Thanks to these translations, Armenian became a language for passing on spiritual, scientific, educational and literary knowledge, shaping the development of Armenian culture. The feast is celebrated with church services and cultural events that highlight the importance of preserving the Armenian language, books, education and national identity.",
      ],
    },
  },

  // ── Fasts — Պահքեր ───────────────────────────────────────────
  {
    // from the document
    slug: "barekendan",
    categoryId: "fasts",
    name: { hy: "Բուն Բարեկենդան", en: "Great Barekendan" },
    short: {
      hy: "Մեծ պահքին նախորդող տոն՝ ուրախությամբ, առատությամբ և դիմակավորված խաղերով։",
      en: "The feast before Great Lent, celebrated with joy, abundance and masked games.",
    },
    long: {
      hy: [
        "Բուն Բարեկենդանը Մեծ պահքին նախորդող տոն է, որը ժողովրդական ավանդույթում նշանավորվել է ուրախությամբ, առատությամբ և դիմակավորված խաղերով։ Տոնի ամենաբնորոշ առանձնահատկություններից էին դիմակավորված կերպարները, կատակային ներկայացումներն ու խնջույքները, իսկ տոնական սեղանին առանձնահատուկ տեղ ունեին մսային ու կաթնային ուտեստները, ձուն, կարագով պատրաստված խմորեղենն ու գաթան։",
      ],
      en: [
        "Great Barekendan is the feast before Great Lent, celebrated in folk tradition with joy, abundance and masked games. Masked characters, comic plays and feasting were its hallmarks, and the festive table gave pride of place to meat and dairy dishes, eggs, butter pastries and gata.",
      ],
    },
  },
  {
    // from the document
    slug: "nakhratogh",
    categoryId: "fasts",
    name: { hy: "Նախրաթողի պահք", en: "Nakhratogh Fast" },
    short: {
      hy: "Ժողովրդական տոմարի և գյուղական կենցաղի հետ կապված աշնանային պահք։",
      en: "An autumn fast tied to the folk calendar and rural life.",
    },
    long: {
      hy: [
        "Նախրաթողի պահքը ժողովրդական տոմարի և գյուղական կենցաղի հետ կապված աշնանային պահքերից է։ Անվանումը կապված է անասնապահության հետ, քանի որ աշնանը, եղանակի ցրտելուց հետո, նախիրն այլևս արոտավայրեր չէին տանում։ Պահքը նշանավորել է ամառային գյուղատնտեսական աշխատանքների ավարտն ու ձմռանը նախապատրաստվելու շրջանը։ Այն արտացոլում է հայ ժողովրդի ավանդական կյանքի և բնության սեզոնային փոփոխությունների կապը։",
      ],
      en: [
        "Nakhratogh is one of the autumn fasts tied to the folk calendar and rural life. Its name comes from herding: in autumn, once the weather turned cold, the herd was no longer taken to pasture. The fast marked the end of summer farm work and the time to prepare for winter, and reflects the bond between the traditional life of the Armenian people and the changing seasons.",
      ],
    },
  },

  // ── Folk traditions — Ժողովրդական տոներ ──────────────────────
  {
    // from the document
    slug: "amanor",
    categoryId: "folk",
    name: { hy: "Ամանոր", en: "Amanor — New Year" },
    short: {
      hy: "Հայկական ավանդական Ամանորը՝ տարեհացով, ասիլ-բասիլներով և առատ սեղանով։",
      en: "The traditional Armenian New Year, with tarehats bread, asil-basil figures and a plentiful table.",
    },
    long: {
      hy: [
        "Հայկական ավանդական Ամանորը հին ժամանակներում նշվել է Նավասարդի՝ տարվա առաջին ամսվա սկզբին, որը սովորաբար համընկել է օգոստոսի 11-ի հետ, իսկ հետագայում տարածում է գտել հունվարի 1-ի տոնակատարությունը։ Տոնի կարևոր սովորույթներից էին տարեհաց թխելը, որի մեջ թաքցված մետաղադրամը կամ այլ առարկան խորհրդանշում էր գալիք տարվա բախտը, և ասիլ-բասիլ կոչվող խմորե պատկերներ պատրաստելը՝ տարվա ընթացքը գուշակելու համար։ Ամանորի սեղանին դրվում էին չրեր, ընկուզեղեն, մրգեր ու անուշապուր, իսկ տան մաքրությունը, հաշտությունն ու պարտքերի վերադարձը համարվում էին նոր տարին բարությամբ և բարօրությամբ սկսելու կարևոր նախապայման։",
      ],
      en: [
        "The traditional Armenian New Year was celebrated in ancient times at the start of Navasard, the first month of the year, which usually fell on August 11; later the celebration on January 1 became widespread. Important customs included baking the tarehats (New Year bread), in which a hidden coin or other object stood for the luck of the coming year, and making dough figures called asil-basil to foretell the course of the year. The table held dried fruit, nuts, fruit and anushapur, while cleaning the house, making peace and repaying debts were considered essential to starting the new year in goodness and well-being.",
      ],
    },
  },
  // ── National holidays — Պետական տոներ (no feast page; name only) ──
  { slug: "army-day", categoryId: "national", name: { hy: "Բանակի օր", en: "Army Day" }, short: { hy: "", en: "" }, long: { hy: [], en: [] } },
  { slug: "womens-day", categoryId: "national", name: { hy: "Կանանց տոն", en: "Women's Day" }, short: { hy: "", en: "" }, long: { hy: [], en: [] } },
  { slug: "genocide-remembrance", categoryId: "national", name: { hy: "Եղեռնի զոհերի հիշատակության օր", en: "Armenian Genocide Remembrance Day" }, short: { hy: "", en: "" }, long: { hy: [], en: [] } },
  { slug: "labour-day", categoryId: "national", name: { hy: "Աշխատանքի օր", en: "Labour Day" }, short: { hy: "", en: "" }, long: { hy: [], en: [] } },
  { slug: "victory-peace-day", categoryId: "national", name: { hy: "Հաղթանակի և խաղաղության օր", en: "Victory and Peace Day" }, short: { hy: "", en: "" }, long: { hy: [], en: [] } },
  { slug: "republic-day", categoryId: "national", name: { hy: "Հանրապետության օր", en: "Republic Day" }, short: { hy: "", en: "" }, long: { hy: [], en: [] } },
  { slug: "constitution-day", categoryId: "national", name: { hy: "Սահմանադրության օր", en: "Constitution Day" }, short: { hy: "", en: "" }, long: { hy: [], en: [] } },
  { slug: "independence-day", categoryId: "national", name: { hy: "Անկախության օր", en: "Independence Day" }, short: { hy: "", en: "" }, long: { hy: [], en: [] } },
];

export const feastDates: FeastDate[] = [
  // 2027
  { feastSlug: "christmas", start: "2027-01-06", end: "2027-01-06", eveLiturgy: true },
  { feastSlug: "saint-sarkis", start: "2027-01-23", end: "2027-01-23" },
  { feastSlug: "barekendan", start: "2027-02-07", end: "2027-02-07" },
  { feastSlug: "trndez", start: "2027-02-14", end: "2027-02-14" },
  { feastSlug: "palm-sunday", start: "2027-03-21", end: "2027-03-21" },
  { feastSlug: "easter", start: "2027-03-28", end: "2027-03-28", eveLiturgy: true },
  { feastSlug: "ascension", start: "2027-05-06", end: "2027-05-06" },
  { feastSlug: "vardavar", start: "2027-07-04", end: "2027-07-04" },
  { feastSlug: "assumption", start: "2027-08-15", end: "2027-08-15" },
  { feastSlug: "holy-cross", start: "2027-09-12", end: "2027-09-12" },
  // Green Sunday, Surb Karapet, Holy Translators, Nakhratogh and Amanor
  // have no dates yet — add them here when the team has them.
  // National holidays (fixed dates)
  { feastSlug: "army-day", start: "2027-01-28", end: "2027-01-28" },
  { feastSlug: "womens-day", start: "2027-03-08", end: "2027-03-08" },
  { feastSlug: "genocide-remembrance", start: "2027-04-24", end: "2027-04-24" },
  { feastSlug: "labour-day", start: "2027-05-01", end: "2027-05-01" },
  { feastSlug: "victory-peace-day", start: "2027-05-09", end: "2027-05-09" },
  { feastSlug: "republic-day", start: "2027-05-28", end: "2027-05-28" },
  { feastSlug: "constitution-day", start: "2027-07-05", end: "2027-07-05" },
  { feastSlug: "independence-day", start: "2027-09-21", end: "2027-09-21" },
];
