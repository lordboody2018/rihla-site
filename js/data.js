/* =========================================================
   Rihla — Data
   Cities, categories & 27 hand-crafted tours in 5 languages
   ========================================================= */

var ET_DATA = {
  cities: [
    { id: 'sharm-el-sheikh', key: 'citySharm', sub: 'citySharmSub', emoji: '🐠', color: 'linear-gradient(135deg,#0f9b8e,#0a3d62)' },
    { id: 'hurghada', key: 'cityHurghada', sub: 'cityHurghadaSub', emoji: '🏝️', color: 'linear-gradient(135deg,#1abc9c,#0f7ea0)' },
    { id: 'cairo', key: 'cityCairo', sub: 'cityCairoSub', emoji: '🛕', color: 'linear-gradient(135deg,#e0a33a,#b96f2e)' },
    { id: 'luxor', key: 'cityLuxor', sub: 'cityLuxorSub', emoji: '🏺', color: 'linear-gradient(135deg,#c0392b,#7d2b1b)' },
    { id: 'aswan', key: 'cityAswan', sub: 'cityAswanSub', emoji: '⛵', color: 'linear-gradient(135deg,#2e86de,#1b5c8f)' },
    { id: 'marsa-alam', key: 'cityMarsaAlam', sub: 'cityMarsaAlamSub', emoji: '🐢', color: 'linear-gradient(135deg,#16a085,#0b6e5a)' },
    { id: 'alexandria', key: 'cityAlexandria', sub: 'cityAlexandriaSub', emoji: '🌊', color: 'linear-gradient(135deg,#5d8bd6,#2c4a7c)' },
    { id: 'dahab', key: 'cityDahab', sub: 'cityDahabSub', emoji: '🌬️', color: 'linear-gradient(135deg,#f39c12,#c97b0a)' }
  ],

  categories: [
    { id: 'snorkeling', key: 'catSnorkeling', emoji: '🤿' },
    { id: 'diving', key: 'catDiving', emoji: '🫧' },
    { id: 'sea', key: 'catSea', emoji: '⛵' },
    { id: 'desert', key: 'catDesert', emoji: '🏜️' },
    { id: 'historical', key: 'catHistorical', emoji: '🏛️' },
    { id: 'family', key: 'catFamily', emoji: '👨‍👩‍👧' },
    { id: 'watersports', key: 'catWatersports', emoji: '🚤' },
    { id: 'quad', key: 'catQuad', emoji: '🏎️' },
    { id: 'fishing', key: 'catFishing', emoji: '🎣' },
    { id: 'nightlife', key: 'catNightlife', emoji: '🌃' },
    { id: 'wellness', key: 'catWellness', emoji: '💆' },
    { id: 'food', key: 'catFood', emoji: '🍽️' }
  ],

  trips: []
};

var F = {
  free: ['freeCancellation', 'instantConfirmation', 'mobileTicket'],
  pickup: ['freeCancellation', 'instantConfirmation', 'mobileTicket', 'pickupIncluded'],
  guide: ['freeCancellation', 'instantConfirmation', 'mobileTicket', 'guideLive'],
  skip: ['freeCancellation', 'instantConfirmation', 'mobileTicket', 'skipLine'],
  full: ['freeCancellation', 'instantConfirmation', 'mobileTicket', 'pickupIncluded', 'guideLive']
};

ET_DATA.trips = [

  /* ================= SHARM EL SHEIKH ================= */
  {
    id: 'ras-mohammed-snorkeling', city: 'sharm-el-sheikh', category: 'snorkeling',
    emoji: '🐠', color: 'linear-gradient(135deg,#0f9b8e,#0a6c7c)',
    price: 35, oldPrice: 45, duration: 7, rating: 4.8, reviews: 2341, featured: true,
    badges: ['bestseller'], facilities: F.pickup,
    title: {
      ar: 'غطس في محمية رأس محمد الوطني', en: 'Snorkeling at Ras Mohammed National Park',
      de: 'Schnorcheln im Nationalpark Ras Mohammed', fr: 'Plongée en apnée au parc national de Ras Mohammed',
      ru: 'Снорклинг в национальном парке Рас-Мохаммед'
    },
    desc: {
      ar: 'انطلق بقارب سريع إلى محمية رأس محمد أجمل مواقع الغطس في العالم. استكشف الشعاب المرجانية الملونة والأسماك الاستوائية مع مرشد محترف، وتوقف للسباحة في خلجان فيروزية ساحرة.',
      en: 'Sail by speedboat to Ras Mohammed, one of the world\'s most famous snorkeling spots. Explore colorful coral reefs and tropical fish with a professional guide, and swim in stunning turquoise lagoons.',
      de: 'Segeln Sie mit dem Schnellboot zum Nationalpark Ras Mohammed, einem der berühmtesten Schnorchelreviere der Welt. Erkunden Sie bunte Korallenriffe und tropische Fische mit professionellem Guide und schwimmen Sie in türkisfarbenen Lagunen.',
      fr: 'Naviguez en bateau rapide vers Ras Mohammed, l\'un des plus célèbres sites de plongée au monde. Explorez les récifs coralliens colorés et les poissons tropicaux avec un guide professionnel, et nagez dans de superbes lagons turquoise.',
      ru: 'Отправляйтесь на катере в Рас-Мохаммед — одно из самых известных мест для снорклинга в мире. Исследуйте яркие коралловые рифы и тропических рыб с профессиональным гидом, искупайтесь в бирюзовых лагунах.'
    },
    highlights: [
      { ar: 'نقطة التقاء خليجَي السويس والعقبة', en: 'Meet point of the Gulf of Suez & Aqaba', de: 'Treffpunkt des Golfs von Suez & Akaba', fr: 'Point de rencontre des golfes de Suez et d\'Akaba', ru: 'Место встречи Суэцкого и Акабского заливов' },
      { ar: 'غطستان من القارب في أجمل الشعب المرجانية', en: '2 snorkeling stops at the best coral reefs', de: '2 Schnorchelstopps an den besten Riffen', fr: '2 arrêts de plongée aux meilleurs récifs', ru: '2 остановки для снорклинга на лучших рифах' },
      { ar: 'مرشد غطس محترف وجلسة تعريفية', en: 'Professional snorkeling guide & briefing', de: 'Professioneller Guide & Einweisung', fr: 'Guide professionnel & briefing', ru: 'Профессиональный гид и инструктаж' },
      { ar: 'غداء مشاوي على متن القارب', en: 'Grilled lunch served on board', de: 'Gegrilltes Mittagessen an Bord', fr: 'Déjeuner grillé à bord', ru: 'Обед на гриле на борту' }
    ],
    included: [
      { ar: 'نقل ذهاب وعودة من الفندق', en: 'Hotel pickup & drop-off', de: 'Hotelabholung & Rücktransfer', fr: 'Prise en charge à l\'hôtel', ru: 'Трансфер из отеля и обратно' },
      { ar: 'قارب سريع ومرشد غطس', en: 'Speedboat & snorkeling guide', de: 'Schnellboot & Guide', fr: 'Bateau rapide & guide', ru: 'Катер и гид по снорклингу' },
      { ar: 'معدات الغطس كاملة', en: 'Full snorkeling equipment', de: 'Komplette Schnorchelausrüstung', fr: 'Équipement de plongée complet', ru: 'Полное снаряжение для снорклинга' },
      { ar: 'غداء مشوي ومشروبات', en: 'Grilled lunch & soft drinks', de: 'Grillmittag & Getränke', fr: 'Déjeuner grillé & boissons', ru: 'Обед на гриле и напитки' }
    ],
    notIncluded: [
      { ar: 'رسوم دخول المحمية (5 دولارات)', en: 'Park entrance fee ($5)', de: 'Parkeintritt ($5)', fr: 'Droit d\'entrée du parc (5 $)', ru: 'Входной билет в парк ($5)' },
      { ar: 'تصوير الديجيتال تحت الماء', en: 'Underwater digital photos', de: 'Unterwasserfotos', fr: 'Photos sous-marines', ru: 'Подводные фотографии' }
    ]
  },

  {
    id: 'padi-open-water-diving', city: 'sharm-el-sheikh', category: 'diving',
    emoji: '🫧', color: 'linear-gradient(135deg,#1e6fd9,#0a3d62)',
    price: 320, oldPrice: 380, duration: 72, rating: 4.9, reviews: 1876, featured: true,
    badges: ['bestseller'], facilities: F.guide,
    title: {
      ar: 'دورة غوص PADI للحصول على شهادة Open Water', en: 'PADI Open Water Diving Certification Course',
      de: 'PADI Open Water Tauchkurs', fr: 'Cours de plongée PADI Open Water', ru: 'Курс дайвинга PADI Open Water'
    },
    desc: {
      ar: 'احصل على شهادة الغوص العالمية PADI في شرم الشيخ أجمل مواقع الغطس. تدريب نظري وعملي مع مدربين معتمدين و4 غوصات في البحر، وتصبح غواصاً معتمداً مدى الحياة.',
      en: 'Earn your world-renowned PADI Open Water certification in Sharm El Sheikh. Theory and practical training with certified instructors and 4 open-water dives — become a certified diver for life.',
      de: 'Erhalten Sie Ihr weltweit anerkanntes PADI Open Water Zertifikat in Scharm El Scheich. Theorie- und Praxistraining mit zertifizierten Ausbildern und 4 Tauchgängen im offenen Wasser.',
      fr: 'Obtenez votre certification PADI Open Water de renommée mondiale à Charm el-Cheikh. Formation théorique et pratique avec des instructeurs certifiés et 4 plongées en mer ouverte.',
      ru: 'Получите всемирно признанный сертификат дайвера PADI Open Water в Шарм-эль-Шейхе. Теория и практика с сертифицированными инструкторами и 4 погружения в открытой воде.'
    },
    highlights: [
      { ar: 'شهادة غوص عالمية معترف بها دولياً', en: 'Internationally recognized diving certification', de: 'International anerkanntes Zertifikat', fr: 'Certification internationalement reconnue', ru: 'Международно признанный сертификат' },
      { ar: 'تدريب فردي مع مدرب معتمد', en: 'One-on-one training with certified instructor', de: 'Einzeltraining mit zertifiziertem Instructor', fr: 'Formation individuelle avec instructeur certifié', ru: 'Индивидуальное обучение с инструктором' },
      { ar: '4 غوصات في أجمل مواقع البحر الأحمر', en: '4 dives at the Red Sea\'s best sites', de: '4 Tauchgänge an den besten Riffen', fr: '4 plongées sur les meilleurs sites', ru: '4 погружения на лучших рифах Красного моря' },
      { ar: 'جميع المعدات متضمنة', en: 'All equipment included', de: 'Komplette Ausrüstung inklusive', fr: 'Tout l\'équipement inclus', ru: 'Всё оборудование включено' }
    ],
    included: [
      { ar: 'الكتاب التدريبي والأقراص التعليمية', en: 'Training manual & e-learning materials', de: 'Lehrbuch & E-Learning', fr: 'Manuel de formation & e-learning', ru: 'Учебник и материалы онлайн' },
      { ar: 'معدات الغوص الكاملة', en: 'Complete diving gear', de: 'Komplette Tauchausrüstung', fr: 'Équipement complet', ru: 'Полное снаряжение' },
      { ar: 'الشهادة الدولية بعد إتمام الدورة', en: 'International certification upon completion', de: 'Internationales Zertifikat', fr: 'Certificat international', ru: 'Международный сертификат' },
      { ar: 'نقل من وإلى الفندق', en: 'Hotel transfer', de: 'Hotelshuttle', fr: 'Transfert hôtel', ru: 'Трансфер' }
    ],
    notIncluded: [
      { ar: 'الغداء والمشروبات', en: 'Lunch & drinks', de: 'Mittagessen & Getränke', fr: 'Déjeuner & boissons', ru: 'Обед и напитки' },
      { ar: 'فحص طبي (إن لزم)', en: 'Medical check-up (if required)', de: 'Ärztliche Untersuchung', fr: 'Examen médical', ru: 'Медицинское обследование' }
    ]
  },

  {
    id: 'sharm-quad-safari', city: 'sharm-el-sheikh', category: 'quad',
    emoji: '🏎️', color: 'linear-gradient(135deg,#e0a33a,#b96f2e)',
    price: 28, oldPrice: 35, duration: 3, rating: 4.6, reviews: 3210, featured: true,
    badges: ['bestseller'], facilities: F.pickup,
    title: {
      ar: 'سفاري الكواد في الصحراء وعشاء بدوي', en: 'Quad Bike Desert Safari & Bedouin Dinner',
      de: 'Quad-Safari in der Wüste & Beduinen-Dinner', fr: 'Safari en quad dans le désert & dîner bédouin', ru: 'Сафари на квадроциклах и ужин бедуинов'
    },
    desc: {
      ar: 'قُد كوادك الخاص بين كثبان الصحراء الذهبية بجانب البحر الأحمر. استمتع بمشروب بدوي وشاي بالنعناع تحت النجوم، ثم تذوق عشاءاً بدوياً تقليدياً مع مشروب ورقص بالتنورة.',
      en: 'Ride your own quad bike across golden desert dunes beside the Red Sea. Enjoy a Bedouin drink and mint tea under the stars, then savor a traditional Bedouin dinner with a Tanoura dance show.',
      de: 'Fahren Sie mit Ihrem eigenen Quad über goldene Wüstendünen am Roten Meer. Genießen Sie Beduinengetränke und Minztee unter den Sternen, danach ein traditionelles Beduinen-Dinner mit Tanoura-Show.',
      fr: 'Pilotez votre propre quad sur les dunes dorées du désert au bord de la mer Rouge. Dégustez une boisson bédouine et du thé à la menthe sous les étoiles, puis un dîner bédouin traditionnel avec spectacle Tanoura.',
      ru: 'Прокатитесь на квадроцикле по золотым дюнам пустыни у Красного моря. Попробуйте бедуинский напиток и чай с мятой под звёздами, а затем ужин в бедуинском стиле с шоу Таноура.'
    },
    highlights: [
      { ar: 'قيادة الكواد لمدة ساعة وسط الكثبان', en: '1 hour quad riding over the dunes', de: '1 Stunde Quadfahren über die Dünen', fr: '1h de quad sur les dunes', ru: '1 час езды на квадроцикле' },
      { ar: 'قرية بدوية أصيلة على شاطئ البحر', en: 'Authentic Bedouin village by the sea', de: 'Authentisches Beduinendorf am Meer', fr: 'Village bédouin authentique au bord de la mer', ru: 'Настоящая бедуинская деревня у моря' },
      { ar: 'عشاء بدوي تقليدي وعرض للرقص', en: 'Traditional dinner & Tanoura dance show', de: 'Traditionelles Dinner & Tanoura Show', fr: 'Dîner traditionnel & spectacle Tanoura', ru: 'Ужин и шоу Таноура' },
      { ar: 'نقل من الفندق في مواعيد مسائية', en: 'Hotel pickup with evening departure', de: 'Hotelabholung am Abend', fr: 'Prise en charge hôtel le soir', ru: 'Вечерний трансфер из отеля' }
    ],
    included: [
      { ar: 'كواد و خوذة للسلامة', en: 'Quad bike & safety helmet', de: 'Quad & Schutzhelm', fr: 'Quad & casque', ru: 'Квадроцикл и шлем' },
      { ar: 'مرشد مرافق للرحلة', en: 'Escort guide', de: 'Begleitender Guide', fr: 'Guide accompagnateur', ru: 'Сопровождающий гид' },
      { ar: 'عشاء بدوي ومشروبات', en: 'Bedouin dinner & drinks', de: 'Beduinen-Dinner & Getränke', fr: 'Dîner bédouin & boissons', ru: 'Ужин и напитки' },
      { ar: 'عرض رقص التنورة', en: 'Tanoura dance show', de: 'Tanoura-Tanzshow', fr: 'Spectacle de danse Tanoura', ru: 'Шоу Таноура' }
    ],
    notIncluded: [
      { ar: 'التصوير الفوتوغرافي الاحترافي', en: 'Professional photo package', de: 'Fotopaket', fr: 'Pack photo', ru: 'Фотосъёмка' },
      { ar: 'ركوب الخيل الإضافي', en: 'Optional camel & horse riding', de: 'Kamel-/Pferderitte', fr: 'Balades à cheval', ru: 'Верховая езда' }
    ]
  },

  {
    id: 'mount-sinai-trek', city: 'sharm-el-sheikh', category: 'historical',
    emoji: '⛰️', color: 'linear-gradient(135deg,#8e44ad,#4a2463)',
    price: 55, oldPrice: 65, duration: 15, rating: 4.7, reviews: 1432,
    badges: ['newTrip'], facilities: F.pickup,
    title: {
      ar: 'تسلق جبل موسى عند شروق الشمس ودير سانت كاترين', en: 'Mount Sinai Sunrise Trek & St. Catherine Monastery',
      de: 'Sinai-Sonnenaufgangs-Trek & Katharinenkloster', fr: 'Ascension du Mont Sinaï au lever du soleil & monastère Sainte-Catherine', ru: 'Восход на горе Синай и монастырь Святой Екатерины'
    },
    desc: {
      ar: 'رحلة لا تُنسى إلى جبل موسى حيث تسلق الجبل ليلاً لتشهد شروق الشمس المذهل من القمة، ثم زر دير سانت كاترين أقدم دير مسيحي ما زال عاملاً في العالم.',
      en: 'An unforgettable journey to Mount Sinai. Climb the mountain at night to witness a breathtaking sunrise from the summit, then visit St. Catherine\'s Monastery, the oldest working Christian monastery in the world.',
      de: 'Eine unvergessliche Reise zum Berg Sinai. Steigen Sie nachts hinauf und erleben Sie einen atemberaubenden Sonnenaufgang vom Gipfel, dann besuchen Sie das Katharinenkloster, das älteste noch bewohnte Kloster der Welt.',
      fr: 'Un voyage inoubliable au Mont Sinaï. Gravissez la montagne de nuit pour admirer un lever de soleil à couper le souffle, puis visitez le monastère Sainte-Catherine, le plus ancien monastère chrétien en activité.',
      ru: 'Незабываемое путешествие на гору Синай. Поднимитесь ночью, чтобы увидеть потрясающий рассвет с вершины, затем посетите монастырь Святой Екатерины — старейший действующий монастырь в мире.'
    },
    highlights: [
      { ar: 'شروق شمس مذهل من قمة جبل موسى (2285م)', en: 'Breathtaking sunrise from the summit (2285m)', de: 'Atemberaubender Sonnenaufgang vom Gipfel (2285m)', fr: 'Lever de soleil époustouflant au sommet (2285m)', ru: 'Невероятный рассвет на вершине (2285 м)' },
      { ar: 'زيارة دير سانت كاترين التاريخي', en: 'Visit the historic St. Catherine Monastery', de: 'Besuch des historischen Katharinenklosters', fr: 'Visite du monastère historique Sainte-Catherine', ru: 'Посещение исторического монастыря' },
      { ar: 'إمكانية صعود الجمل لجزء من الطريق', en: 'Optional camel ride part of the way', de: 'Optional Kamelritt', fr: 'Balade à dos de chameau optionnelle', ru: 'Верблюд на часть пути' },
      { ar: 'مرشد تاريخي مرافق', en: 'Historical tour guide included', de: 'Historischer Reiseführer', fr: 'Guide historique inclus', ru: 'Гид включён' }
    ],
    included: [
      { ar: 'نقل من فندقك بسيارة مكيفة', en: 'AC hotel transfer', de: 'Klimatisierter Transfer', fr: 'Transfert climatisé', ru: 'Трансфер с кондиционером' },
      { ar: 'مرشد مرافق', en: 'Tour guide', de: 'Reiseführer', fr: 'Guide', ru: 'Гид' },
      { ar: 'إفطار محلي على القمة', en: 'Local breakfast at the summit', de: 'Frühstück am Gipfel', fr: 'Petit-déjeuner au sommet', ru: 'Завтрак на вершине' },
      { ar: 'تذاكر دخول المعالم', en: 'Entrance fees', de: 'Eintrittsgebühren', fr: 'Droits d\'entrée', ru: 'Входные билеты' }
    ],
    notIncluded: [
      { ar: 'ركوب الجمل (اختياري)', en: 'Camel ride (optional)', de: 'Kamelritt (optional)', fr: 'Dromadaire (optionnel)', ru: 'Верблюд (опционально)' },
      { ar: 'الإقامة', en: 'Accommodation', de: 'Unterkunft', fr: 'Hébergement', ru: 'Проживание' }
    ]
  },

  {
    id: 'sharm-glass-boat', city: 'sharm-el-sheikh', category: 'sea',
    emoji: '🚢', color: 'linear-gradient(135deg,#2e86de,#12427a)',
    price: 22, oldPrice: 27, duration: 4, rating: 4.5, reviews: 987,
    badges: [], facilities: F.free,
    title: {
      ar: 'رحلة القارب الزجاجي لمشاهدة الشعاب المرجانية', en: 'Glass Bottom Boat Reef Viewing Cruise',
      de: 'Glasbodenboot-Kreuzfahrt zu den Riffen', fr: 'Croisière en bateau à fond de verre', ru: 'Прогулка на лодке со стеклянным дном'
    },
    desc: {
      ar: 'اكتشف عالم البحر الأحمر السحري دون أن تبتل. اجلس على القارب ذي القاع الزجاجي وشاهد الشعاب المرجانية والأسماك الملونة عن قرب، مع مرشد بحري يشرح لك كل شيء.',
      en: 'Discover the magical world of the Red Sea without getting wet. Sit on a glass-bottom boat and watch coral reefs and colorful fish up close, with a marine guide explaining everything.',
      de: 'Entdecken Sie die magische Welt des Roten Meeres, ohne nass zu werden. Beobachten Sie vom Glasbodenboot Korallenriffe und bunte Fische aus nächster Nähe.',
      fr: 'Découvrez le monde magique de la mer Rouge sans vous mouiller. Depuis le bateau à fond de verre, observez les récifs coralliens et les poissons colorés de près.',
      ru: 'Откройте волшебный мир Красного моря, не намокнув. Наблюдайте коралловые рифы и ярких рыб вблизи с лодки со стеклянным дном.'
    },
    highlights: [
      { ar: 'مشاهدة الشعاب المرجانية من قاع زجاجي', en: 'Coral reef viewing from glass bottom', de: 'Riffe vom Glasboden aus sehen', fr: 'Observation des récifs depuis le fond de verre', ru: 'Наблюдение рифов через стеклянное дно' },
      { ar: 'مناسبة للأطفال وكبار السن', en: 'Perfect for kids & seniors', de: 'Ideal für Kinder & Senioren', fr: 'Idéal pour enfants & seniors', ru: 'Подходит для детей и пожилых' },
      { ar: 'مرشد بحري على متن القارب', en: 'Marine guide on board', de: 'Meeresbiologe an Bord', fr: 'Guide marin à bord', ru: 'Морской гид на борту' },
      { ar: 'إمكانية إضافة الغطس (اختياري)', en: 'Optional snorkeling add-on', de: 'Optional Schnorcheln', fr: 'Plongée optionnelle', ru: 'Опциональный снорклинг' }
    ],
    included: [
      { ar: 'قارب زجاجي مكيف', en: 'AC glass-bottom boat', de: 'Klimatisierte Glasbodenboot', fr: 'Bateau à fond de verre climatisé', ru: 'Лодка со стеклянным дном' },
      { ar: 'مرشد بحري', en: 'Marine guide', de: 'Meeresguide', fr: 'Guide marin', ru: 'Морской гид' },
      { ar: 'مشروبات باردة', en: 'Soft drinks', de: 'Erfrischungsgetränke', fr: 'Boissons', ru: 'Напитки' },
      { ar: 'نقل من الفندق', en: 'Hotel transfer', de: 'Hotelshuttle', fr: 'Transfert hôtel', ru: 'Трансфер' }
    ],
    notIncluded: [
      { ar: 'الغطس (إضافي 10 دولارات)', en: 'Snorkeling ($10 extra)', de: 'Schnorcheln (+$10)', fr: 'Plongée (+10 $)', ru: 'Снорклинг (+$10)' },
      { ar: 'الغداء', en: 'Lunch', de: 'Mittagessen', fr: 'Déjeuner', ru: 'Обед' }
    ]
  },

  {
    id: 'tiran-island-boat', city: 'sharm-el-sheikh', category: 'sea',
    emoji: '⛵', color: 'linear-gradient(135deg,#1abc9c,#0f6f63)',
    price: 48, oldPrice: 60, duration: 8, rating: 4.8, reviews: 2567, featured: true,
    badges: ['bestseller'], facilities: F.pickup,
    title: {
      ar: 'رحلة يوم كامل إلى جزيرة تيران باليخت', en: 'Full-Day Tiran Island Luxury Yacht Trip',
      de: 'Tagesausflug zur Tiran-Insel mit dem Luxusyacht', fr: 'Excursion d\'une journée à l\'île de Tiran en yacht', ru: 'Дневная поездка на остров Тиран на яхте'
    },
    desc: {
      ar: 'انطلق على متن يخت فاخر إلى جزيرة تيران الشهيرة في مضيق تيران. محطتان للغطس وسط أجمل الشعاب، غداء مشوي على السطح، وموسيقى ومرح طوال اليوم في مياه فيروزية صافية.',
      en: 'Sail on a luxury yacht to the famous Tiran Island in the Strait of Tiran. Two snorkeling stops among the finest reefs, grilled lunch on deck, and music & fun all day in crystal clear turquoise waters.',
      de: 'Segeln Sie mit einer Luxusyacht zur berühmten Tiran-Insel. Zwei Schnorchelstopps an herrlichen Riffen, gegrilltes Mittagessen an Deck und Musik & Spaß den ganzen Tag.',
      fr: 'Naviguez en yacht de luxe vers la célèbre île de Tiran. Deux arrêts de plongée parmi les plus beaux récifs, déjeuner grillé sur le pont et musique toute la journée.',
      ru: 'Отправляйтесь на роскошной яхте на знаменитый остров Тиран. Две остановки для снорклинга на лучших рифах, обед на палубе и музыка весь день.'
    },
    highlights: [
      { ar: 'يخت فاخر بطابقين وأسطح للاسترخاء', en: '2-level luxury yacht with sun decks', de: 'Zweistöckige Luxusyacht', fr: 'Yacht de luxe 2 ponts', ru: 'Двухпалубная роскошная яхта' },
      { ar: 'محطتا غطس في مضيق تيران', en: '2 snorkeling stops in the Strait of Tiran', de: '2 Schnorchelstopps im Golf von Akaba', fr: '2 arrêts de plongée dans le détroit de Tiran', ru: '2 остановки для снорклинга' },
      { ar: 'غداء مشوي وأطعمة بحرية على المتن', en: 'Grilled lunch & seafood on board', de: 'Grillmittag & Meeresfrüchte an Bord', fr: 'Déjeuner grillé & fruits de mer', ru: 'Обед и морепродукты на борту' },
      { ar: 'رحلة غوص سيراً على الرمال للجزيرة', en: 'Walk on the sandbank & visit the island', de: 'Spaziergang auf der Sandbank', fr: 'Marche sur le banc de sable', ru: 'Прогулка по песчаной косе' }
    ],
    included: [
      { ar: 'نقل ذهاب وعودة من الفندق', en: 'Hotel pickup & drop-off', de: 'Hoteltransfer', fr: 'Transfert hôtel', ru: 'Трансфер' },
      { ar: 'يخت فاخر وطاقم', en: 'Luxury yacht & crew', de: 'Luxusyacht & Crew', fr: 'Yacht de luxe & équipage', ru: 'Яхта и экипаж' },
      { ar: 'غداء ومشروبات', en: 'Lunch & drinks', de: 'Mittagessen & Getränke', fr: 'Déjeuner & boissons', ru: 'Обед и напитки' },
      { ar: 'معدات الغطس', en: 'Snorkeling gear', de: 'Schnorchelausrüstung', fr: 'Équipement de plongée', ru: 'Снаряжение' }
    ],
    notIncluded: [
      { ar: 'الرسوم البيئية للجزيرة', en: 'Island environmental fee', de: 'Umweltgebühr', fr: 'Frais environnementaux', ru: 'Экологический сбор' },
      { ar: 'التصوير تحت الماء', en: 'Underwater photography', de: 'Unterwasserfotos', fr: 'Photos sous-marines', ru: 'Подводные фото' }
    ]
  },

  {
    id: 'sharm-aqua-park', city: 'sharm-el-sheikh', category: 'family',
    emoji: '🎢', color: 'linear-gradient(135deg,#f39c12,#d35400)',
    price: 18, oldPrice: 22, duration: 6, rating: 4.4, reviews: 1563,
    badges: [], facilities: F.free,
    title: {
      ar: 'تذكرة دخول حديقة الألعاب المائية (كليوباترا)', en: 'Cleopatra Aqua Park Entry Ticket',
      de: 'Eintritt Cleopatra Water Park', fr: 'Billet d\'entrée au parc aquatique Cléopâtre', ru: 'Входной билет в аквапарк Клеопатры'
    },
    desc: {
      ar: 'يوم كامل من المرح للعائلة في أكبر حديقة مائية بشرم الشيخ. أكثر من 15 منزلقاً مائياً وأحواض سباحة ومنطقة أطفال خاصة، كل ذلك مع الإقامة المريحة والخدمة الرائعة.',
      en: 'A full day of family fun at Sharm\'s largest water park. More than 15 water slides, swimming pools and a dedicated kids\' area — all with lounge beds and great service.',
      de: 'Ein ganzer Tag Familienspaß im größten Wasserpark von Scharm. Über 15 Wasserrutschen, Pools und ein Kinderbereich mit Liegen und Service.',
      fr: 'Une journée de plaisir en famille dans le plus grand parc aquatique de Charm. Plus de 15 toboggans, piscines et une zone enfants dédiée.',
      ru: 'Целый день семейного веселья в крупнейшем аквапарке Шарм-эль-Шейха. Более 15 горок, бассейны и детская зона.'
    },
    highlights: [
      { ar: 'أكثر من 15 منزلقاً مائياً', en: 'Over 15 water slides', de: 'Über 15 Wasserrutschen', fr: 'Plus de 15 toboggans', ru: 'Более 15 горок' },
      { ar: 'منطقة أطفال آمنة ومخصصة', en: 'Safe dedicated kids\' area', de: 'Sicherer Kinderbereich', fr: 'Zone enfants sécurisée', ru: 'Безопасная детская зона' },
      { ar: 'سرائر استرخاء ومناشف مجانية', en: 'Lounge beds & free towels', de: 'Liegen & Handtücher', fr: 'Transats & serviettes', ru: 'Шезлонги и полотенца' },
      { ar: 'مطاعم وكافيهات داخل الحديقة', en: 'Restaurants & cafes inside', de: 'Restaurants im Park', fr: 'Restaurants sur place', ru: 'Рестораны внутри' }
    ],
    included: [
      { ar: 'تذكرة دخول اليوم الكامل', en: 'Full-day entry ticket', de: 'Tageseintritt', fr: 'Billet journée', ru: 'Билет на весь день' },
      { ar: 'استخدام كافة المنزلقات', en: 'Use of all slides', de: 'Alle Rutschen', fr: 'Tous les toboggans', ru: 'Все горки' },
      { ar: 'سرير استرخاء', en: 'Lounge bed', de: 'Liege', fr: 'Transat', ru: 'Шезлонг' },
      { ar: 'دخول منطقة الأطفال', en: 'Kids\' area access', de: 'Zugang Kinderbereich', fr: 'Zone enfants', ru: 'Детская зона' }
    ],
    notIncluded: [
      { ar: 'النقل (متاح كإضافة)', en: 'Transfer (optional add-on)', de: 'Transfer (optional)', fr: 'Transfert (optionnel)', ru: 'Трансфер (опция)' },
      { ar: 'الطعام والمشروبات', en: 'Food & drinks', de: 'Speisen & Getränke', fr: 'Nourriture & boissons', ru: 'Еда и напитки' }
    ]
  },

  /* ================= HURGHADA ================= */
  {
    id: 'giftun-island-boat', city: 'hurghada', category: 'sea',
    emoji: '🏝️', color: 'linear-gradient(135deg,#16a085,#0b6e5a)',
    price: 42, oldPrice: 55, duration: 8, rating: 4.9, reviews: 4123, featured: true,
    badges: ['bestseller'], facilities: F.pickup,
    title: {
      ar: 'رحلة يوم كامل لجزيرة الجفتون بالغداء والغطس', en: 'Giftun Island Full-Day Boat Trip with Lunch & Snorkeling',
      de: 'Tagesausflug zur Giftun-Insel mit Lunch & Schnorcheln', fr: 'Excursion d\'une journée à l\'île Giftun avec déjeuner & plongée', ru: 'Дневная поездка на остров Гифтун с обедом и снорклингом'
    },
    desc: {
      ar: 'أشهر رحلة في الغردقة! ابحر إلى محمية الجفتون المذهلة بشواطئها الرملية البيضاء ومياهها الصافية. غطس، غداء مشوي على متن القارب، وتجول على شاطئ الجزيرة البكر.',
      en: 'The most popular trip in Hurghada! Sail to the stunning Giftun Marine Park with white sandy beaches and crystal waters. Snorkel, enjoy a grilled lunch on board, and stroll on the island\'s pristine shore.',
      de: 'Der beliebteste Ausflug in Hurghada! Segeln Sie zum atemberaubenden Giftun Marine Park mit weißen Sandstränden. Schnorcheln, Grill-Lunch an Bord und Spaziergang am Strand.',
      fr: 'L\'excursion la plus populaire de Hurghada ! Naviguez vers le superbe parc marin de Giftun aux plages de sable blanc. Plongée, déjeuner grillé à bord et balade sur la plage.',
      ru: 'Самая популярная экскурсия в Хургаде! Отправляйтесь в морской парк Гифтун с белыми песчаными пляжами. Снорклинг, обед на гриле и прогулка по пляжу.'
    },
    highlights: [
      { ar: 'محطة غطس وسط الشعاب المرجانية', en: 'Snorkeling stop among coral reefs', de: 'Schnorchelstopp an den Riffen', fr: 'Arrêt plongée au cœur des récifs', ru: 'Снорклинг среди коралловых рифов' },
      { ar: 'جزيرة برمال بيضاء ومياه فيروزية', en: 'White sand island with turquoise waters', de: 'Insel mit weißem Sand', fr: 'Île de sable blanc', ru: 'Остров с белым песком' },
      { ar: 'غداء مشوي على متن القارب', en: 'Grilled lunch served on board', de: 'Grillmittag an Bord', fr: 'Déjeuner grillé à bord', ru: 'Обед на борту' },
      { ar: 'قوارب حديثة ومكيفة', en: 'Modern AC boats', de: 'Moderne klimatisierte Boote', fr: 'Bateaux climatisés', ru: 'Современные катера' }
    ],
    included: [
      { ar: 'نقل من الفندق', en: 'Hotel transfer', de: 'Hoteltransfer', fr: 'Transfert hôtel', ru: 'Трансфер' },
      { ar: 'القارب والمعدات', en: 'Boat & snorkeling gear', de: 'Boot & Ausrüstung', fr: 'Bateau & équipement', ru: 'Катер и снаряжение' },
      { ar: 'غداء ومشروبات', en: 'Lunch & soft drinks', de: 'Mittagessen & Getränke', fr: 'Déjeuner & boissons', ru: 'Обед и напитки' },
      { ar: 'مرشد غطس', en: 'Snorkeling guide', de: 'Schnorchel-Guide', fr: 'Guide de plongée', ru: 'Гид по снорклингу' }
    ],
    notIncluded: [
      { ar: 'رسوم المحمية البيئية', en: 'Marine park fee', de: 'Parkgebühr', fr: 'Frais du parc', ru: 'Экологический сбор' },
      { ar: 'التصوير تحت الماء', en: 'Underwater photos', de: 'Unterwasserfotos', fr: 'Photos sous-marines', ru: 'Подводные фото' }
    ]
  },

  {
    id: 'hurghada-diving-dolphins', city: 'hurghada', category: 'diving',
    emoji: '🐬', color: 'linear-gradient(135deg,#1e6fd9,#0a3d62)',
    price: 65, oldPrice: 80, duration: 6, rating: 4.8, reviews: 1987, featured: true,
    badges: ['bestseller'], facilities: F.pickup,
    title: {
      ar: 'غوص مع الدلافين في دلفين هاوس (غصتان)', en: 'Dolphin House Diving Trip (2 Dives)',
      de: 'Tauchgang am Dolphin House (2 Tauchgänge)', fr: 'Plongée à Dolphin House (2 plongées)', ru: 'Дайвинг в Дельфин-Хаусе (2 погружения)'
    },
    desc: {
      ar: 'اغطس مرتين في دلفين هاوس الشهيرة حيث تقترب الدلافين من الغواصين. مثالية للغواصين المعتمدين والمبتدئين مع مرشد محترف، وتشمل الغداء والنقل.',
      en: 'Enjoy two dives at the famous Dolphin House where wild dolphins love to approach divers. Ideal for certified and beginner divers with professional guides. Lunch and transfer included.',
      de: 'Genießen Sie zwei Tauchgänge am berühmten Dolphin House, wo wilde Delfine Taucher lieben. Ideal für zertifizierte und Anfänger. Mittagessen und Transfer inklusive.',
      fr: 'Profitez de deux plongées au célèbre Dolphin House où les dauphins sauvages adorent approcher les plongeurs. Idéal pour les plongeurs certifiés et débutants.',
      ru: 'Два погружения на знаменитой станции «Дельфин-Хаус», где дикие дельфины любят подплывать к дайверам. Для сертифицированных и начинающих.'
    },
    highlights: [
      { ar: 'فرصة كبيرة لمشاهدة الدلافين', en: 'High chance of dolphin encounters', de: 'Hohe Chance auf Delfin-Sichtungen', fr: 'Fortes chances de voir des dauphins', ru: 'Высокий шанс встретить дельфинов' },
      { ar: 'غوصتان مع معدات كاملة', en: '2 dives with full equipment', de: '2 Tauchgänge mit Ausrüstung', fr: '2 plongées équipement complet', ru: '2 погружения с оборудованием' },
      { ar: 'مناسبة للمبتدئين والمعتمدين', en: 'Suitable for beginners & certified', de: 'Für Anfänger & Zertifizierte', fr: 'Débutants & certifiés', ru: 'Для новичков и сертифицированных' },
      { ar: 'غداء على متن القارب', en: 'Lunch on board', de: 'Mittagessen an Bord', fr: 'Déjeuner à bord', ru: 'Обед на борту' }
    ],
    included: [
      { ar: 'النقل من الفندق', en: 'Hotel transfer', de: 'Hoteltransfer', fr: 'Transfert hôtel', ru: 'Трансфер' },
      { ar: 'معدات الغوص الكاملة', en: 'Full diving equipment', de: 'Komplette Ausrüstung', fr: 'Équipement complet', ru: 'Полное снаряжение' },
      { ar: 'مرشد غوص محترف', en: 'Professional dive guide', de: 'Professioneller Tauchguide', fr: 'Guide de plongée pro', ru: 'Профессиональный гид' },
      { ar: 'غداء ومشروبات', en: 'Lunch & drinks', de: 'Mittag & Getränke', fr: 'Déjeuner & boissons', ru: 'Обед и напитки' }
    ],
    notIncluded: [
      { ar: 'رسوم بطاقة البيئة', en: 'Environmental card fee', de: 'Umweltkarte', fr: 'Carte environnementale', ru: 'Экологический сбор' },
      { ar: 'الإيجار الإضافي للسترة الجافة', en: 'Optional wetsuit rental', de: 'Neoprenanzug-Miete', fr: 'Location combinaison', ru: 'Аренда гидрокостюма' }
    ]
  },

  {
    id: 'hurghada-quad-safari', city: 'hurghada', category: 'quad',
    emoji: '🏍️', color: 'linear-gradient(135deg,#e67e22,#b9550e)',
    price: 25, oldPrice: 32, duration: 3, rating: 4.6, reviews: 2876,
    badges: [], facilities: F.pickup,
    title: {
      ar: 'سفاري كواد في الصحراء مع عشاء بدوي', en: 'Desert Quad Safari with Bedouin Dinner',
      de: 'Quad-Wüstensafari mit Beduinen-Dinner', fr: 'Safari en quad dans le désert avec dîner bédouin', ru: 'Пустынное сафари на квадроциклах с ужином'
    },
    desc: {
      ar: 'مغامرة مسائية مثيرة في صحراء الغردقة. قُد الكواد بين الكثبان الرملية، شاهد غروب الشمس من نقطة مراقبة، وتناول عشاء بدوياً تحت السماء المليئة بالنجوم.',
      en: 'An exciting evening adventure in the Hurghada desert. Ride a quad across sand dunes, watch the sunset from a viewpoint, and enjoy a Bedouin dinner under the starry sky.',
      de: 'Ein aufregendes Abenteuer in der Wüste von Hurghada. Fahren Sie Quad über Dünen, beobachten Sie den Sonnenuntergang und genießen Sie ein Beduinen-Dinner unter dem Sternenhimmel.',
      fr: 'Une aventure nocturne palpitante dans le désert de Hurghada. Pilotez un quad sur les dunes, admirez le coucher du soleil et dégustez un dîner bédouin sous les étoiles.',
      ru: 'Вечернее приключение в пустыне Хургады. Квадроцикл по дюнам, закат со смотровой площадки и ужин бедуинов под звёздами.'
    },
    highlights: [
      { ar: 'قيادة الكواد بين الكثبان الرملية', en: 'Quad riding through sand dunes', de: 'Quadfahren über Dünen', fr: 'Quad sur les dunes', ru: 'Езда на квадроцикле по дюнам' },
      { ar: 'مشاهدة غروب الشمس', en: 'Sunset viewpoint', de: 'Sonnenuntergangs-Aussicht', fr: 'Point de vue sur le coucher du soleil', ru: 'Смотровая площадка' },
      { ar: 'عشاء بدوي تقليدي', en: 'Traditional Bedouin dinner', de: 'Traditionelles Beduinen-Dinner', fr: 'Dîner bédouin traditionnel', ru: 'Традиционный ужин' },
      { ar: 'شاي بالحبق ونار المخيم', en: 'Herbal tea by the campfire', de: 'Kräutertee am Lagerfeuer', fr: 'Thé aux herbes au feu de camp', ru: 'Чай у костра' }
    ],
    included: [
      { ar: 'الكواد والخوذة', en: 'Quad bike & helmet', de: 'Quad & Helm', fr: 'Quad & casque', ru: 'Квадроцикл и шлем' },
      { ar: 'مرشد مرافق', en: 'Escort guide', de: 'Guide', fr: 'Guide', ru: 'Гид' },
      { ar: 'العشاء والمشروبات', en: 'Dinner & drinks', de: 'Dinner & Getränke', fr: 'Dîner & boissons', ru: 'Ужин и напитки' },
      { ar: 'النقل من الفندق', en: 'Hotel transfer', de: 'Hoteltransfer', fr: 'Transfert hôtel', ru: 'Трансфер' }
    ],
    notIncluded: [
      { ar: 'التصوير', en: 'Photography', de: 'Fotos', fr: 'Photos', ru: 'Фото' },
      { ar: 'البقشيش', en: 'Tips', de: 'Trinkgeld', fr: 'Pourboires', ru: 'Чаевые' }
    ]
  },

  {
    id: 'orange-bay-island', city: 'hurghada', category: 'sea',
    emoji: '🍊', color: 'linear-gradient(135deg,#f39c12,#e0671b)',
    price: 45, oldPrice: 58, duration: 8, rating: 4.8, reviews: 2345, featured: true,
    badges: ['bestseller'], facilities: F.pickup,
    title: {
      ar: 'رحلة جزيرة أورانج باي بالغداء', en: 'Orange Bay Island Trip with Lunch',
      de: 'Ausflug zur Orange Bay Insel mit Lunch', fr: 'Excursion à l\'île Orange Bay avec déjeuner', ru: 'Поездка на остров Оранж-Бей с обедом'
    },
    desc: {
      ar: 'جزيرة أورانج باي هي الجوهرة الحقيقية للبحر الأحمر. شواطئ رملية ناعمة، جسور خشبية جميلة، وكبائن صور سيلفي شهيرة. استرخِ، اغطس، واستمتع بغداء مشوي على الجزيرة.',
      en: 'Orange Bay is the true jewel of the Red Sea. Soft sandy shores, beautiful wooden walkways and famous photo booths. Relax, snorkel and enjoy a grilled lunch right on the island.',
      de: 'Orange Bay ist das wahre Juwel des Roten Meeres. Weiche Sandstrände, schöne Holzstege und berühmte Foto-Spots. Entspannen, schnorcheln und Grill-Lunch direkt auf der Insel.',
      fr: 'Orange Bay est le véritable joyau de la mer Rouge. Plages de sable fin, promenades en bois et spots photo célèbres. Détente, plongée et déjeuner grillé sur l\'île.',
      ru: 'Остров Оранж-Бей — настоящая жемчужина Красного моря. Мягкий песок, деревянные мостики и знаменитые фотозоны. Релакс, снорклинг и обед на острове.'
    },
    highlights: [
      { ar: 'أجمل شواطئ البحر الأحمر', en: 'The Red Sea\'s most beautiful beach', de: 'Schönster Strand des Roten Meeres', fr: 'La plus belle plage de la mer Rouge', ru: 'Самый красивый пляж Красного моря' },
      { ar: 'كبائن صور سيلفي شهيرة', en: 'Famous photo booths', de: 'Berühmte Foto-Spots', fr: 'Spots photo célèbres', ru: 'Знаменитые фотозоны' },
      { ar: 'محطة غطس على الشعاب المرجانية', en: 'Snorkeling stop on the reefs', de: 'Schnorchelstopp am Riff', fr: 'Arrêt plongée sur les récifs', ru: 'Снорклинг на рифах' },
      { ar: 'غداء مشوي على الجزيرة', en: 'Grilled lunch on the island', de: 'Grill-Lunch auf der Insel', fr: 'Déjeuner grillé sur l\'île', ru: 'Обед на острове' }
    ],
    included: [
      { ar: 'النقل ذهاباً وإياباً', en: 'Round-trip transfer', de: 'Hin- und Rücktransfer', fr: 'Transfert aller-retour', ru: 'Трансфер' },
      { ar: 'القارب والمعدات', en: 'Boat & gear', de: 'Boot & Ausrüstung', fr: 'Bateau & équipement', ru: 'Катер и снаряжение' },
      { ar: 'غداء ومشروبات', en: 'Lunch & drinks', de: 'Mittag & Getränke', fr: 'Déjeuner & boissons', ru: 'Обед и напитки' },
      { ar: 'مرشد', en: 'Tour guide', de: 'Guide', fr: 'Guide', ru: 'Гид' }
    ],
    notIncluded: [
      { ar: 'رسوم الجزيرة البيئية', en: 'Island fee', de: 'Inselgebühr', fr: 'Frais d\'île', ru: 'Сбор за остров' },
      { ar: 'المناشف', en: 'Towels', de: 'Handtücher', fr: 'Serviettes', ru: 'Полотенца' }
    ]
  },

  {
    id: 'hurghada-bedouin-bbq', city: 'hurghada', category: 'desert',
    emoji: '🔥', color: 'linear-gradient(135deg,#c0392b,#8e2b1b)',
    price: 35, oldPrice: 42, duration: 5, rating: 4.6, reviews: 1876,
    badges: [], facilities: F.pickup,
    title: {
      ar: 'سفاري صحراوي مع شواء بدوي وعرض', en: 'Desert Safari with Bedouin BBQ & Show',
      de: 'Wüstensafari mit Beduinen-BBQ & Show', fr: 'Safari dans le désert avec BBQ bédouin & spectacle', ru: 'Пустынное сафари с бедуинским BBQ и шоу'
    },
    desc: {
      ar: 'عشاء مميز في قلب الصحراء. سفاري بالسيارة، شواء بدوي على الفحم، عرض للرقص الشرقي والتنورة، وتدخين الشيشة تحت السماء المفتوحة مع النجوم.',
      en: 'A special dinner in the heart of the desert. 4x4 safari ride, charcoal Bedouin BBQ, Oriental & Tanoura dance shows, and shisha under the open starry sky.',
      de: 'Ein besonderes Dinner mitten in der Wüste. 4x4-Safari, Beduinen-BBQ vom Holzkohlegrill, Bauchtanz- & Tanoura-Show und Shisha unter freiem Himmel.',
      fr: 'Un dîner spécial au cœur du désert. Safari en 4x4, BBQ bédouin au charbon de bois, spectacles de danse orientale & Tanoura et chicha à la belle étoile.',
      ru: 'Особый ужин в сердце пустыни. Сафари на внедорожнике, бедуинское BBQ на углях, шоу восточного танца и Таноура, кальян под звёздами.'
    },
    highlights: [
      { ar: 'رحلة سفاري بالسيارات 4x4', en: '4x4 safari ride', de: '4x4-Safari', fr: 'Safari en 4x4', ru: 'Сафари на 4x4' },
      { ar: 'شواء بدوي بالفحم', en: 'Charcoal Bedouin BBQ', de: 'Beduinen-BBQ', fr: 'BBQ bédouin au charbon', ru: 'Бедуинское BBQ' },
      { ar: 'عرض رقص شرقي وتنورة', en: 'Oriental & Tanoura shows', de: 'Bauchtanz & Tanoura', fr: 'Danses orientales & Tanoura', ru: 'Восточный танец и Таноура' },
      { ar: 'شيشة ومشروبات', en: 'Shisha & drinks', de: 'Shisha & Getränke', fr: 'Chicha & boissons', ru: 'Кальян и напитки' }
    ],
    included: [
      { ar: 'النقل بسيارات 4x4', en: '4x4 transfer', de: '4x4-Transfer', fr: 'Transfert 4x4', ru: 'Трансфер на 4x4' },
      { ar: 'العشاء والمشروبات', en: 'Dinner & drinks', de: 'Dinner & Getränke', fr: 'Dîner & boissons', ru: 'Ужин и напитки' },
      { ar: 'العروض الفنية', en: 'Entertainment shows', de: 'Unterhaltungsshows', fr: 'Spectacles', ru: 'Шоу-программа' },
      { ar: 'مرشد', en: 'Guide', de: 'Guide', fr: 'Guide', ru: 'Гид' }
    ],
    notIncluded: [
      { ar: 'ركوب الجمال (اختياري)', en: 'Camel riding (optional)', de: 'Kamelritt', fr: 'Dromadaire', ru: 'Верблюд' },
      { ar: 'التصوير', en: 'Photography', de: 'Fotos', fr: 'Photos', ru: 'Фото' }
    ]
  },

  {
    id: 'hurghada-fishing', city: 'hurghada', category: 'fishing',
    emoji: '🎣', color: 'linear-gradient(135deg,#2980b9,#1a5276)',
    price: 38, oldPrice: 45, duration: 6, rating: 4.5, reviews: 876,
    badges: [], facilities: F.free,
    title: {
      ar: 'رحلة صيد في البحر الأحمر على قارب خاص', en: 'Private Red Sea Fishing Trip',
      de: 'Private Angelausflug im Roten Meer', fr: 'Partie de pêche privée en mer Rouge', ru: 'Приватная рыбалка в Красном море'
    },
    desc: {
      ar: 'يوم مميز لصيادي السمك المحترفين والمبتدئين. قارب خاص مع طاقم محترف وكل المعدات، توقفان للصيد في أفضل الأماكن، ويمكنك أخذ ما اصطدته معك أو طهوه في المطعم.',
      en: 'A special day for professional and beginner fishermen. Private boat with professional crew and all equipment, two fishing stops in the best spots, and you can keep your catch or have it cooked.',
      de: 'Ein besonderer Tag für Profis und Anfänger. Privates Boot mit Crew und Ausrüstung, zwei Angelstopps an den besten Stellen — Ihren Fang können Sie behalten oder zubereiten lassen.',
      fr: 'Une journée spéciale pour les pêcheurs débutants et confirmés. Bateau privé avec équipage et équipement complet, deux arrêts de pêche dans les meilleurs spots.',
      ru: 'Особый день для рыбаков и новичков. Приватная лодка с командой и снаряжением, две остановки для рыбалки в лучших местах.'
    },
    highlights: [
      { ar: 'قارب خاص بالكامل', en: 'Fully private boat', de: 'Komplett privates Boot', fr: 'Bateau entièrement privé', ru: 'Полностью приватная лодка' },
      { ar: 'توقفان للصيد في أماكن مميزة', en: '2 fishing stops at prime spots', de: '2 Angelstopps', fr: '2 arrêts de pêche', ru: '2 рыболовные остановки' },
      { ar: 'جميع معدات الصيد متضمنة', en: 'All fishing gear included', de: 'Komplette Angelausrüstung', fr: 'Équipement complet', ru: 'Всё снаряжение включено' },
      { ar: 'طبخ ما تصطاده (اختياري)', en: 'Cooking of your catch (optional)', de: 'Zubereitung des Fangs', fr: 'Cuisson de votre pêche', ru: 'Приготовление улова' }
    ],
    included: [
      { ar: 'قارب خاص وطاقم', en: 'Private boat & crew', de: 'Privates Boot & Crew', fr: 'Bateau privé & équipage', ru: 'Лодка и команда' },
      { ar: 'معدات الصيد', en: 'Fishing equipment', de: 'Angelausrüstung', fr: 'Équipement de pêche', ru: 'Снаряжение' },
      { ar: 'مشروبات', en: 'Drinks', de: 'Getränke', fr: 'Boissons', ru: 'Напитки' },
      { ar: 'مرشد صيد', en: 'Fishing guide', de: 'Angelguide', fr: 'Guide de pêche', ru: 'Гид по рыбалке' }
    ],
    notIncluded: [
      { ar: 'الغداء', en: 'Lunch', de: 'Mittagessen', fr: 'Déjeuner', ru: 'Обед' },
      { ar: 'طبخ السمك', en: 'Cooking service', de: 'Kochservice', fr: 'Service de cuisson', ru: 'Приготовление' }
    ]
  },

  {
    id: 'hurghada-dolphin-watching', city: 'hurghada', category: 'snorkeling',
    emoji: '🐬', color: 'linear-gradient(135deg,#3498db,#1b5f8f)',
    price: 30, oldPrice: 38, duration: 5, rating: 4.7, reviews: 1654,
    badges: [], facilities: F.pickup,
    title: {
      ar: 'مشاهدة الدلافين والغطس معها', en: 'Dolphin Watching & Snorkeling Tour',
      de: 'Delfinbeobachtung & Schnorcheln', fr: 'Observation des dauphins & plongée', ru: 'Наблюдение за дельфинами и снорклинг'
    },
    desc: {
      ar: 'ابحث عن أسراب الدلافين في مواطنها الطبيعية بالبحر الأحمر. عندما تجدها، اغطس بجانبها والتقط صوراً لا تُنسى، ثم توقف للغطس وسط الشعاب المرجانية المذهلة.',
      en: 'Search for pods of dolphins in their natural Red Sea habitat. When found, snorkel alongside them and capture unforgettable moments, then stop to snorkel among stunning coral reefs.',
      de: 'Suchen Sie Delfinschulen in ihrem natürlichen Lebensraum im Roten Meer. Schnorcheln Sie neben ihnen und halten Sie unvergessliche Momente fest, dann Schnorcheln an herrlichen Riffen.',
      fr: 'Recherchez les dauphins dans leur habitat naturel en mer Rouge. Plongez à leurs côtés et capturez des moments inoubliables, puis arrêtez-vous sur de superbes récifs.',
      ru: 'Найдите стаи дельфинов в естественной среде Красного моря. Плавайте рядом с ними, делайте незабываемые фото, затем снорклинг среди кораллов.'
    },
    highlights: [
      { ar: 'البحث عن الدلافين البرية', en: 'Wild dolphin spotting', de: 'Wilder Delfinbeobachtung', fr: 'Observation des dauphins sauvages', ru: 'Поиск диких дельфинов' },
      { ar: 'الغطس بجانب الدلافين', en: 'Snorkeling alongside dolphins', de: 'Schnorcheln neben Delfinen', fr: 'Plongée avec les dauphins', ru: 'Плавание с дельфинами' },
      { ar: 'محطة غطس على الشعاب', en: 'Snorkeling stop on the reefs', de: 'Schnorchelstopp am Riff', fr: 'Arrêt plongée sur les récifs', ru: 'Остановка у рифов' },
      { ar: 'مناسبة للعائلات', en: 'Family friendly', de: 'Familienfreundlich', fr: 'Adapté aux familles', ru: 'Подходит для семей' }
    ],
    included: [
      { ar: 'القارب والمعدات', en: 'Boat & equipment', de: 'Boot & Ausrüstung', fr: 'Bateau & équipement', ru: 'Катер и снаряжение' },
      { ar: 'مرشد غطس', en: 'Snorkeling guide', de: 'Guide', fr: 'Guide', ru: 'Гид' },
      { ar: 'مشروبات وفواكه', en: 'Drinks & fruit', de: 'Getränke & Obst', fr: 'Boissons & fruits', ru: 'Напитки и фрукты' },
      { ar: 'النقل', en: 'Transfer', de: 'Transfer', fr: 'Transfert', ru: 'Трансфер' }
    ],
    notIncluded: [
      { ar: 'التصوير الاحترافي', en: 'Professional photos', de: 'Fotos', fr: 'Photos', ru: 'Фото' },
      { ar: 'الغداء', en: 'Lunch', de: 'Mittag', fr: 'Déjeuner', ru: 'Обед' }
    ]
  },

  {
    id: 'el-gouna-city-tour', city: 'hurghada', category: 'family',
    emoji: '🏙️', color: 'linear-gradient(135deg,#16a085,#0f7ea0)',
    price: 20, oldPrice: 25, duration: 4, rating: 4.4, reviews: 987,
    badges: ['newTrip'], facilities: F.pickup,
    title: {
      ar: 'جولة مدينة الجونة وهيرغادا بين الأحياء', en: 'El Gouna & Hurghada City Tour',
      de: 'El Gouna & Hurghada Stadtbesichtigung', fr: 'Visite de la ville d\'El Gouna & Hurghada', ru: 'Экскурсия по Эль-Гуне и Хургаде'
    },
    desc: {
      ar: 'اكتشف مدينة الجونة الساحرة بقنواتها وشواطئها ومحلاتها الراقية، ثم تعرف على أسواق الغردقة الشعبية والتقليدية. تسوق، تجول، والتقط صوراً جميلة.',
      en: 'Discover the enchanting town of El Gouna with its canals, beaches and upscale boutiques, then explore the traditional markets of Hurghada. Shop, stroll and take beautiful photos.',
      de: 'Entdecken Sie das zauberhafte El Gouna mit Kanälen, Stränden und Boutiquen, dann die traditionellen Märkte von Hurghada. Shoppen, bummeln und fotografieren.',
      fr: 'Découvrez la charmante ville d\'El Gouna avec ses canaux, ses plages et ses boutiques, puis les marchés traditionnels de Hurghada. Shopping, balade et photos.',
      ru: 'Откройте очаровательный город Эль-Гуна с каналами, пляжами и бутиками, затем традиционные рынки Хургады. Шопинг и прогулки.'
    },
    highlights: [
      { ar: 'مدينة الجونة الحديثة بقنواتها', en: 'Modern El Gouna with canals', de: 'Modernes El Gouna', fr: 'El Gouna moderne', ru: 'Современная Эль-Гуна' },
      { ar: 'شواطئ ومحلات راقية', en: 'Beaches & upscale shops', de: 'Strände & Boutiquen', fr: 'Plages & boutiques', ru: 'Пляжи и магазины' },
      { ar: 'أسواق هيرغادا التقليدية', en: 'Traditional Hurghada markets', de: 'Traditionelle Märkte', fr: 'Marchés traditionnels', ru: 'Традиционные рынки' },
      { ar: 'توقف للتصوير والتسوق', en: 'Photo & shopping stops', de: 'Foto- & Shoppingstopps', fr: 'Arrêts photo & shopping', ru: 'Остановки для фото и покупок' }
    ],
    included: [
      { ar: 'نقل مكيف', en: 'AC transport', de: 'Klimatisierter Transfer', fr: 'Transport climatisé', ru: 'Транспорт с кондиционером' },
      { ar: 'مرشد محلي', en: 'Local guide', de: 'Lokaler Guide', fr: 'Guide local', ru: 'Местный гид' },
      { ar: 'توقف حر للتسوق', en: 'Free shopping time', de: 'Freie Shoppingzeit', fr: 'Temps libre shopping', ru: 'Свободное время на шопинг' }
    ],
    notIncluded: [
      { ar: 'المشتريات', en: 'Purchases', de: 'Einkäufe', fr: 'Achats', ru: 'Покупки' },
      { ar: 'الغداء', en: 'Lunch', de: 'Mittag', fr: 'Déjeuner', ru: 'Обед' }
    ]
  },

  /* ================= CAIRO ================= */
  {
    id: 'giza-pyramids-tour', city: 'cairo', category: 'historical',
    emoji: '🛕', color: 'linear-gradient(135deg,#e0a33a,#8d5b16)',
    price: 60, oldPrice: 75, duration: 8, rating: 4.9, reviews: 5678, featured: true,
    badges: ['bestseller'], facilities: F.skip,
    title: {
      ar: 'أهرامات الجيزة وأبو الهول مع ركوب الجمل', en: 'Giza Pyramids, Sphinx & Camel Ride Tour',
      de: 'Pyramiden von Gizeh, Sphinx & Kamelritt', fr: 'Pyramides de Gizeh, Sphinx & balade à dos de chameau', ru: 'Пирамиды Гизы, Сфинкс и прогулка на верблюдах'
    },
    desc: {
      ar: 'زر عجائب الدنيا السبع الوحيدة الباقية. قف أمام الأهرامات وأبو الهول، اركب الجمل وسط الصحراء، وقم بجولة داخل أحد الأهرامات (اختياري) مع مرشد خبير في علم المصريات.',
      en: 'Visit the only surviving wonder of the ancient world. Stand before the Pyramids and the Sphinx, ride a camel across the desert, and optionally enter one of the pyramids with an expert Egyptologist guide.',
      de: 'Besuchen Sie das einzige erhaltene Weltwunder. Stehen Sie vor Pyramiden und Sphinx, reiten Sie mit dem Kamel durch die Wüste und betreten Sie optional eine Pyramide mit Ägyptologen.',
      fr: 'Visitez la seule merveille du monde antique encore debout. Contemplez les Pyramides et le Sphinx, montez à dos de chameau et entrez optionnellement dans une pyramide avec un égyptologue.',
      ru: 'Посетите единственное сохранившееся чудо света. Увидьте пирамиды и Сфинкса, прокатитесь на верблюде и по желанию войдите в пирамиду с египтологом.'
    },
    highlights: [
      { ar: 'أهرامات خوفو وخفرع ومنقرع', en: 'Pyramids of Khufu, Khafre & Menkaure', de: 'Pyramiden von Cheops, Chefren & Mykerinos', fr: 'Pyramides de Khéops, Khéphren & Mykérinos', ru: 'Пирамиды Хуфу, Хафры и Менкаура' },
      { ar: 'أبو الهول ووادي المعبد', en: 'The Sphinx & Valley Temple', de: 'Sphinx & Taltempel', fr: 'Le Sphinx & temple de la Vallée', ru: 'Сфинкс и Храм долины' },
      { ar: 'ركوب الجمل في الصحراء', en: 'Camel ride across the desert', de: 'Kamelritt durch die Wüste', fr: 'Balade à dos de chameau', ru: 'Прогулка на верблюдах' },
      { ar: 'مرشد علم مصريات خبير', en: 'Expert Egyptologist guide', de: 'Experten-Ägyptologe', fr: 'Guide égyptologue expert', ru: 'Гид-египтолог' }
    ],
    included: [
      { ar: 'نقل من الفندق مكيف', en: 'AC hotel pickup', de: 'Klimatisierter Transfer', fr: 'Transfert climatisé', ru: 'Трансфер с кондиционером' },
      { ar: 'مرشد إنجليزي/عربي خبير', en: 'Expert English/Arabic guide', de: 'Englisch/arabischer Guide', fr: 'Guide expert anglais/arabe', ru: 'Гид на английском/арабском' },
      { ar: 'ركوب الجمل', en: 'Camel ride', de: 'Kamelritt', fr: 'Balade à dos de chameau', ru: 'Прогулка на верблюде' },
      { ar: 'تذاكر الدخول', en: 'Entrance fees', de: 'Eintrittsgebühren', fr: 'Droits d\'entrée', ru: 'Входные билеты' }
    ],
    notIncluded: [
      { ar: 'الدخول إلى الهرم الأكبر (من الداخل)', en: 'Entry inside the Great Pyramid', de: 'Eintritt in die Cheops-Pyramide', fr: 'Entrée dans la Grande Pyramide', ru: 'Вход внутрь Великой пирамиды' },
      { ar: 'الغداء', en: 'Lunch', de: 'Mittagessen', fr: 'Déjeuner', ru: 'Обед' }
    ]
  },

  {
    id: 'cairo-museum-citadel', city: 'cairo', category: 'historical',
    emoji: '🏛️', color: 'linear-gradient(135deg,#b8860b,#7a5a0e)',
    price: 45, oldPrice: 55, duration: 7, rating: 4.6, reviews: 2341,
    badges: [], facilities: F.skip,
    title: {
      ar: 'المتحف المصري والقلعة وخان الخليلي', en: 'Egyptian Museum, Citadel & Khan El Khalili',
      de: 'Ägyptisches Museum, Zitadelle & Khan el-Khalili', fr: 'Musée égyptien, Citadelle & Khan el-Khalili', ru: 'Египетский музей, Цитадель и Хан эль-Халили'
    },
    desc: {
      ar: 'رحلة غنية بالتاريخ: كنوز توت عنخ آمون في المتحف المصري، مسجد محمد علي في القلعة، ثم التجول في أسواق خان الخليلي العريقة وشراء الهدايا التذكارية.',
      en: 'A history-rich tour: the treasures of Tutankhamun at the Egyptian Museum, the Mosque of Muhammad Ali at the Citadel, then a stroll through the historic Khan El Khalili bazaar for souvenirs.',
      de: 'Eine geschichtsreiche Tour: Schätze des Tutanchamun im Ägyptischen Museum, die Muhammad-Ali-Moschee in der Zitadelle und ein Bummel durch den historischen Khan-el-Khalili-Basar.',
      fr: 'Une visite riche en histoire : les trésors de Toutânkhamon au musée égyptien, la mosquée Mohamed-Ali à la Citadelle, puis le bazar historique de Khan el-Khalili.',
      ru: 'Экскурсия, богатая историей: сокровища Тутанхамона в Египетском музее, мечеть Мухаммеда Али в Цитадели и прогулка по базару Хан эль-Халили.'
    },
    highlights: [
      { ar: 'كنوز توت عنخ آمون الذهبية', en: 'Tutankhamun\'s golden treasures', de: 'Goldene Schätze des Tutanchamun', fr: 'Trésors dorés de Toutânkhamon', ru: 'Золотые сокровища Тутанхамона' },
      { ar: 'مسجد محمد علي وقاعة القلعة', en: 'Mohamed Ali Mosque & Citadel', de: 'Mohamed-Ali-Moschee', fr: 'Mosquée Mohamed-Ali', ru: 'Мечеть Мухаммеда Али' },
      { ar: 'أسواق خان الخليلي الشهيرة', en: 'Famous Khan El Khalili bazaar', de: 'Berühmter Khan-el-Khalili-Basar', fr: 'Bazar Khan el-Khalili', ru: 'Базар Хан эль-Халили' },
      { ar: 'منظر بانورامي للمدينة من القلعة', en: 'Panoramic city views from the Citadel', de: 'Panoramablick über die Stadt', fr: 'Vue panoramique sur la ville', ru: 'Панорамный вид на город' }
    ],
    included: [
      { ar: 'نقل مكيف من الفندق', en: 'AC hotel pickup', de: 'Klimatisierter Transfer', fr: 'Transfert climatisé', ru: 'Трансфер' },
      { ar: 'مرشد متخصص', en: 'Specialized guide', de: 'Spezialisierter Guide', fr: 'Guide spécialisé', ru: 'Специализированный гид' },
      { ar: 'تذاكر الدخول', en: 'Entrance fees', de: 'Eintrittsgebühren', fr: 'Droits d\'entrée', ru: 'Входные билеты' },
      { ar: 'وقت حر للتسوق', en: 'Free shopping time', de: 'Freie Zeit zum Shoppen', fr: 'Temps libre shopping', ru: 'Свободное время' }
    ],
    notIncluded: [
      { ar: 'الغداء', en: 'Lunch', de: 'Mittag', fr: 'Déjeuner', ru: 'Обед' },
      { ar: 'غرفة المومياوات الملكية', en: 'Royal Mummies Hall (extra fee)', de: 'Mumiensaal', fr: 'Salle des momies', ru: 'Зал мумий' }
    ]
  },

  {
    id: 'cairo-nile-cruise', city: 'cairo', category: 'nightlife',
    emoji: '🌙', color: 'linear-gradient(135deg,#2c3e50,#0f1a2b)',
    price: 40, oldPrice: 50, duration: 3, rating: 4.5, reviews: 1987,
    badges: [], facilities: F.free,
    title: {
      ar: 'عشاء على نهر النيل مع عرض فني', en: 'Nile Dinner Cruise with Live Show',
      de: 'Nil-Dinnerkreuzfahrt mit Live-Show', fr: 'Croisière-dîner sur le Nil avec spectacle', ru: 'Ужин-круиз по Нилу с шоу'
    },
    desc: {
      ar: 'استمتع بأمسية رومانسية على نهر النيل. بوفيه عشاء عالمي، عرض رقص شرقي، موسيقى حية، وإطلالات ساحرة على أضواء القاهرة من سطح السفينة.',
      en: 'Enjoy a romantic evening on the Nile. International buffet dinner, Oriental dance show, live music and stunning views of Cairo\'s lights from the deck.',
      de: 'Genießen Sie einen romantischen Abend auf dem Nil. Internationales Buffet, Bauchtanzshow, Live-Musik und atemberaubende Blicke auf das beleuchtete Kairo.',
      fr: 'Passez une soirée romantique sur le Nil. Dîner buffet international, spectacle de danse orientale, musique live et vues sur les lumières du Caire.',
      ru: 'Романтический вечер на Ниле. Международный буфет, шоу восточного танца, живая музыка и виды на огни Каира.'
    },
    highlights: [
      { ar: 'بوفيه عشاء عالمي', en: 'International dinner buffet', de: 'Internationales Buffet', fr: 'Buffet international', ru: 'Международный буфет' },
      { ar: 'عرض رقص شرقي حي', en: 'Live Oriental dance show', de: 'Live-Bauchtanzshow', fr: 'Spectacle de danse orientale', ru: 'Живое восточное шоу' },
      { ar: 'إطلالات على أضواء القاهرة', en: 'Views of Cairo by night', de: 'Blick auf das nächtliche Kairo', fr: 'Vues sur Le Caire de nuit', ru: 'Ночной Каир с воды' },
      { ar: 'مناسب للعائلات والأزواج', en: 'Great for couples & families', de: 'Ideal für Paare & Familien', fr: 'Idéal couples & familles', ru: 'Для пар и семей' }
    ],
    included: [
      { ar: 'العشاء البوفيه', en: 'Buffet dinner', de: 'Buffet-Dinner', fr: 'Dîner buffet', ru: 'Ужин-буфет' },
      { ar: 'العرض الفني', en: 'Live show', de: 'Live-Show', fr: 'Spectacle live', ru: 'Живое шоу' },
      { ar: 'النقل من الفندق', en: 'Hotel transfer', de: 'Hoteltransfer', fr: 'Transfert hôtel', ru: 'Трансфер' },
      { ar: 'مشروبات', en: 'Drinks', de: 'Getränke', fr: 'Boissons', ru: 'Напитки' }
    ],
    notIncluded: [
      { ar: 'المشروبات الكحولية', en: 'Alcoholic drinks', de: 'Alkoholische Getränke', fr: 'Boissons alcoolisées', ru: 'Алкоголь' },
      { ar: 'البقشيش', en: 'Tips', de: 'Trinkgeld', fr: 'Pourboires', ru: 'Чаевые' }
    ]
  },

  {
    id: 'alexandria-day-trip', city: 'cairo', category: 'historical',
    emoji: '🏰', color: 'linear-gradient(135deg,#5d8bd6,#2c4a7c)',
    price: 55, oldPrice: 65, duration: 10, rating: 4.6, reviews: 1543,
    badges: ['newTrip'], facilities: F.pickup,
    title: {
      ar: 'رحلة يوم كامل إلى الإسكندرية من القاهرة', en: 'Full-Day Alexandria Tour from Cairo',
      de: 'Tagesausflug nach Alexandria von Kairo', fr: 'Excursion d\'une journée à Alexandrie depuis Le Caire', ru: 'Дневная поездка в Александрию из Каира'
    },
    desc: {
      ar: 'سافر إلى عروس البحر المتوسط. استكشف مكتبة الإسكندرية الحديثة، المقابر الرومانية، قلعة قايتباي، وعمود بومبي مع مرشد خبير، ثم استمتع بالبحر في ساعة الفراغ.',
      en: 'Travel to the Mediterranean bride. Explore the modern Bibliotheca Alexandrina, Roman Catacombs, Qaitbay Citadel and Pompey\'s Pillar with an expert guide, then enjoy the sea in your free time.',
      de: 'Reisen Sie zur Braut des Mittelmeers. Erkunden Sie die Bibliotheca Alexandrina, die römischen Katakomben, die Festung Qaitbay und die Pompeius-Säule mit Expertenführer.',
      fr: 'Voyagez vers la perle de la Méditerranée. Explorez la Bibliotheca Alexandrina, les catacombes romaines, la citadelle de Qaitbay et la colonne de Pompée avec un guide expert.',
      ru: 'Поездка к жемчужине Средиземноморья. Библиотека Александрина, римские катакомбы, крепость Кайтбей и колонна Помпея с гидом.'
    },
    highlights: [
      { ar: 'مكتبة الإسكندرية الحديثة', en: 'Modern Bibliotheca Alexandrina', de: 'Bibliotheca Alexandrina', fr: 'Bibliotheca Alexandrina', ru: 'Библиотека Александрина' },
      { ar: 'مقابر كوم الشقافة الرومانية', en: 'Roman Catacombs of Kom el-Shoqafa', de: 'Römische Katakomben', fr: 'Catacombes romaines', ru: 'Римские катакомбы' },
      { ar: 'قلعة قايتباي الشهيرة', en: 'Famous Qaitbay Citadel', de: 'Festung Qaitbay', fr: 'Citadelle de Qaitbay', ru: 'Крепость Кайтбей' },
      { ar: 'طريق ساحلي جميل', en: 'Beautiful coastal drive', de: 'Schöne Küstenfahrt', fr: 'Belle route côtière', ru: 'Красивая дорога вдоль моря' }
    ],
    included: [
      { ar: 'نقل مكيف ذهاباً وإياباً', en: 'Round-trip AC transport', de: 'Klimatisierter Transfer', fr: 'Transport climatisé', ru: 'Транспорт туда и обратно' },
      { ar: 'مرشد مرافق', en: 'Tour guide', de: 'Reiseführer', fr: 'Guide', ru: 'Гид' },
      { ar: 'تذاكر الدخول', en: 'Entrance fees', de: 'Eintrittsgebühren', fr: 'Droits d\'entrée', ru: 'Входные билеты' },
      { ar: 'توقف للغداء (غير متضمن)', en: 'Lunch stop (not included)', de: 'Mittagspause (nicht inklusive)', fr: 'Arrêt déjeuner (non inclus)', ru: 'Остановка на обед' }
    ],
    notIncluded: [
      { ar: 'الغداء', en: 'Lunch', de: 'Mittagessen', fr: 'Déjeuner', ru: 'Обед' },
      { ar: 'المشتريات الشخصية', en: 'Personal purchases', de: 'Private Einkäufe', fr: 'Achats personnels', ru: 'Личные покупки' }
    ]
  },

  /* ================= LUXOR ================= */
  {
    id: 'luxor-east-west-bank', city: 'luxor', category: 'historical',
    emoji: '🏺', color: 'linear-gradient(135deg,#c0392b,#7d2b1b)',
    price: 70, oldPrice: 85, duration: 10, rating: 4.9, reviews: 3120, featured: true,
    badges: ['bestseller'], facilities: F.skip,
    title: {
      ar: 'وادي الملوك ومعابد الكرنك والأقصر', en: 'Valley of the Kings, Karnak & Luxor Temples',
      de: 'Tal der Könige, Karnak- & Luxor-Tempel', fr: 'Vallée des Rois, temples de Karnak & Louxor', ru: 'Долина царей, храмы Карнака и Луксора'
    },
    desc: {
      ar: 'أعظم رحلة تاريخية في مصر. اكتشف مقابر الفراعنة في وادي الملوك، ومعبد حتشبسوت المهيب، وعمودي الكرنك والأقصر، كل ذلك مع مرشد مصريات خبير.',
      en: 'The greatest historical tour in Egypt. Discover the Pharaohs\' tombs in the Valley of the Kings, the majestic Hatshepsut Temple, and the Karnak & Luxor Temple complexes with an expert guide.',
      de: 'Die großartigste historische Tour Ägyptens. Entdecken Sie die Gräber im Tal der Könige, den majestätischen Hatschepsut-Tempel und die Tempel von Karnak & Luxor mit einem Ägyptologen.',
      fr: 'La plus grande visite historique d\'Égypte. Découvrez les tombeaux des pharaons dans la Vallée des Rois, le temple d\'Hatchepsout et les temples de Karnak & Louxor.',
      ru: 'Величайшая историческая экскурсия Египта. Гробницы фараонов в Долине царей, величественный храм Хатшепсут и храмы Карнака и Луксора.'
    },
    highlights: [
      { ar: 'مقابر توت عنخ آمون ورمسيس في وادي الملوك', en: 'Tombs of Tutankhamun & Ramses in the Valley of the Kings', de: 'Gräber von Tutanchamun & Ramses', fr: 'Tombeaux de Toutânkhamon & Ramsès', ru: 'Гробницы Тутанхамона и Рамзеса' },
      { ar: 'معبد حتشبسوت المهيب', en: 'Majestic Hatshepsut Temple', de: 'Hatschepsut-Tempel', fr: 'Temple d\'Hatchepsout', ru: 'Храм Хатшепсут' },
      { ar: 'أعمدة الكرنك الضخمة', en: 'Massive Karnak columns', de: 'Gewaltige Karnak-Säulen', fr: 'Colonnes de Karnak', ru: 'Колонны Карнака' },
      { ar: 'تمثالا ممنون العملاقان', en: 'Colossi of Memnon', de: 'Memnonkolosse', fr: 'Colosses de Memnon', ru: 'Колоссы Мемнона' }
    ],
    included: [
      { ar: 'نقل مكيف', en: 'AC transport', de: 'Klimatisierter Transfer', fr: 'Transport climatisé', ru: 'Транспорт' },
      { ar: 'مرشد علم مصريات', en: 'Egyptologist guide', de: 'Ägyptologe', fr: 'Guide égyptologue', ru: 'Гид-египтолог' },
      { ar: 'تذاكر الدخول للمواقع', en: 'Entrance fees', de: 'Eintrittsgebühren', fr: 'Droits d\'entrée', ru: 'Входные билеты' },
      { ar: 'الغداء', en: 'Lunch', de: 'Mittagessen', fr: 'Déjeuner', ru: 'Обед' }
    ],
    notIncluded: [
      { ar: 'دخول مقبرة توت عنخ آمون الإضافي', en: 'Extra Tutankhamun tomb entry', de: 'Zusatz-Tutanchamun-Grab', fr: 'Entrée supplémentaire tombe de Toutânkhamon', ru: 'Дополнительный вход в гробницу' },
      { ar: 'التصوير داخل المقابر', en: 'Photography inside tombs', de: 'Fotos in Gräbern', fr: 'Photos dans les tombeaux', ru: 'Фотосъёмка в гробницах' }
    ]
  },

  {
    id: 'luxor-hot-air-balloon', city: 'luxor', category: 'family',
    emoji: '🎈', color: 'linear-gradient(135deg,#f39c12,#e67e22)',
    price: 95, oldPrice: 120, duration: 4, rating: 4.9, reviews: 2345, featured: true,
    badges: ['bestseller'], facilities: F.pickup,
    title: {
      ar: 'رحلة بالمنطاد فوق الأقصر عند شروق الشمس', en: 'Luxor Hot Air Balloon Ride at Sunrise',
      de: 'Heißluftballonfahrt über Luxor bei Sonnenaufgang', fr: 'Vol en montgolfière au-dessus de Louxor au lever du soleil', ru: 'Полёт на воздушном шаре над Луксором на рассвете'
    },
    desc: {
      ar: 'حلّق فوق معابد الأقصر ووادي الملوك مع شروق الشمس. 45 دقيقة من الطيران الهادئ توفر مناظر لا تُصدق تستحق الاستيقاظ المبكر. يشمل النقل من الفندق والفطور الخفيف.',
      en: 'Soar over Luxor\'s temples and the Valley of the Kings at sunrise. 45 minutes of peaceful flying with unbelievable views worth waking up early for. Hotel pickup and light breakfast included.',
      de: 'Schweben Sie bei Sonnenaufgang über Luxors Tempeln und dem Tal der Könige. 45 Minuten friedlicher Flug mit unglaublichen Ausblicken. Hotelabholung und Frühstück inklusive.',
      fr: 'Envolez-vous au-dessus des temples de Louxor et de la Vallée des Rois au lever du soleil. 45 minutes de vol paisible avec des vues incroyables.',
      ru: 'Поднимитесь над храмами Луксора и Долиной царей на рассвете. 45 минут спокойного полёта с невероятными видами.'
    },
    highlights: [
      { ar: '45 دقيقة طيران فوق وادي الملوك', en: '45-minute flight over the Valley of the Kings', de: '45 Min Flug über das Tal der Könige', fr: '45 min de vol au-dessus de la Vallée des Rois', ru: '45 минут полёта' },
      { ar: 'شروق الشمس فوق معابد الأقصر', en: 'Sunrise over Luxor\'s temples', de: 'Sonnenaufgang über Luxor', fr: 'Lever du soleil sur Louxor', ru: 'Рассвет над Луксором' },
      { ar: 'طيار معتمد وشهادة طيران', en: 'Certified pilot & flight certificate', de: 'Zertifizierter Pilot & Zertifikat', fr: 'Pilote certifié & certificat', ru: 'Сертифицированный пилот' },
      { ar: 'فطور خفيف ونقل من الفندق', en: 'Light breakfast & hotel pickup', de: 'Frühstück & Abholung', fr: 'Petit-déjeuner & transfert', ru: 'Завтрак и трансфер' }
    ],
    included: [
      { ar: 'رحلة المنطاد (45 دقيقة)', en: 'Balloon flight (45 min)', de: 'Ballonfahrt (45 Min)', fr: 'Vol (45 min)', ru: 'Полёт (45 мин)' },
      { ar: 'شهادة الطيران', en: 'Flight certificate', de: 'Flugzertifikat', fr: 'Certificat de vol', ru: 'Сертификат полёта' },
      { ar: 'فطور خفيف', en: 'Light breakfast', de: 'Leichtes Frühstück', fr: 'Petit-déjeuner', ru: 'Завтрак' },
      { ar: 'النقل من الفندق', en: 'Hotel pickup', de: 'Hotelabholung', fr: 'Transfert hôtel', ru: 'Трансфер' }
    ],
    notIncluded: [
      { ar: 'تصوير احترافي بالكاميرا', en: 'Professional photography', de: 'Professionelle Fotos', fr: 'Photos professionnelles', ru: 'Профессиональные фото' },
      { ar: 'البقشيش', en: 'Tips', de: 'Trinkgeld', fr: 'Pourboires', ru: 'Чаевые' }
    ]
  },

  /* ================= ASWAN ================= */
  {
    id: 'aswan-philae-felucca', city: 'aswan', category: 'historical',
    emoji: '⛵', color: 'linear-gradient(135deg,#2e86de,#1b5c8f)',
    price: 50, oldPrice: 60, duration: 8, rating: 4.7, reviews: 1234,
    badges: [], facilities: F.skip,
    title: {
      ar: 'معبد فيلة وملحقاته ورحلة الفلوكة والسد العالي', en: 'Philae Temple, High Dam & Felucca Sailing',
      de: 'Philae-Tempel, Staudamm & Feluke', fr: 'Temple de Philae, haut barrage & félouque', ru: 'Храм Филы, высотная плотина и фелука'
    },
    desc: {
      ar: 'اجمع بين التاريخ والجمال في أسوان. زر معبد فيلة المنقذ، ثم انطلق برحلة الفلوكة الشراعية الهادئة بين الجزر قبل التوقف عند السد العالي ومسلة ناصر.',
      en: 'Combine history and beauty in Aswan. Visit the rescued Philae Temple, sail peacefully by felucca between the islands, then stop at the High Dam and the Obelisk.',
      de: 'Verbinden Sie Geschichte und Schönheit in Assuan. Besuchen Sie den Philae-Tempel, segeln Sie mit der Feluke zwischen den Inseln und halten Sie am Staudamm und Obelisk.',
      fr: 'Alliez histoire et beauté à Assouan. Visitez le temple de Philae, naviguez en félouque entre les îles, puis arrêtez-vous au haut barrage et à l\'obélisque.',
      ru: 'История и красота Асуана. Храм Филы, плавание на фелуке между островами, высотная плотина и обелиск.'
    },
    highlights: [
      { ar: 'معبد فيلة الرائع على جزيرته', en: 'Magnificent Philae Temple on its island', de: 'Philae-Tempel auf der Insel', fr: 'Temple de Philae sur son île', ru: 'Храм Филы на острове' },
      { ar: 'رحلة فلوكة شراعية هادئة', en: 'Peaceful felucca sailing', de: 'Friedliches Segeln mit der Feluke', fr: 'Navigation en félouque', ru: 'Прогулка на фелуке' },
      { ar: 'السد العالي ومسلة ناصر', en: 'High Dam & Nasser Obelisk', de: 'Staudamm & Obelisk', fr: 'Haut barrage & obélisque', ru: 'Плотина и обелиск' },
      { ar: 'الوصول بالقارب إلى المعبد', en: 'Arrive at the temple by boat', de: 'Anreise per Boot', fr: 'Arrivée en bateau', ru: 'Прибытие на лодке' }
    ],
    included: [
      { ar: 'نقل مكيف', en: 'AC transport', de: 'Klimatisierter Transfer', fr: 'Transport climatisé', ru: 'Транспорт' },
      { ar: 'مرشد', en: 'Guide', de: 'Guide', fr: 'Guide', ru: 'Гид' },
      { ar: 'تذاكر الدخول', en: 'Entrance fees', de: 'Eintrittsgebühren', fr: 'Droits d\'entrée', ru: 'Входные билеты' },
      { ar: 'رحلة الفلوكة', en: 'Felucca ride', de: 'Felukenfahrt', fr: 'Balade en félouque', ru: 'Прогулка на фелуке' }
    ],
    notIncluded: [
      { ar: 'الغداء', en: 'Lunch', de: 'Mittag', fr: 'Déjeuner', ru: 'Обед' },
      { ar: 'رسوم تصوير المعبد', en: 'Camera fee at temple', de: 'Kameragebühr', fr: 'Frais caméra', ru: 'Плата за камеру' }
    ]
  },

  {
    id: 'abu-simbel-temple', city: 'aswan', category: 'historical',
    emoji: '🗿', color: 'linear-gradient(135deg,#d35400,#8e3a00)',
    price: 85, oldPrice: 100, duration: 12, rating: 4.9, reviews: 1987, featured: true,
    badges: [], facilities: F.pickup,
    title: {
      ar: 'رحلة معبد أبو سمبل من أسوان', en: 'Abu Simbel Temple Tour from Aswan',
      de: 'Abu-Simbel-Tempel Ausflug von Assuan', fr: 'Excursion au temple d\'Abou Simbel depuis Assouan', ru: 'Экскурсия в храм Абу-Симбел из Асуана'
    },
    desc: {
      ar: 'زر أشهر معابد رمسيس الثاني المقطوعة في الجبل والمحمية من فيضان النيل. أقواسه الأربعة العملاقة وتماثيله تجعله واحداً من أعظم الآثار في العالم.',
      en: 'Visit Ramses II\'s most famous temple, carved into the mountain and rescued from the Nile flood. Its four colossal statues make it one of the greatest monuments in the world.',
      de: 'Besuchen Sie Ramses II. berühmtesten Tempel, in den Berg gehauen und vor der Nilflut gerettet. Die vier Kolossalstatuen machen ihn zu einem der größten Bauwerke der Welt.',
      fr: 'Visitez le plus célèbre temple de Ramsès II, taillé dans la montagne et sauvé de la crue du Nil. Ses quatre statues colossales en font l\'un des plus grands monuments du monde.',
      ru: 'Знаменитый храм Рамзеса II, высеченный в скале и спасённый от наводнения. Четыре колоссальные статуи — одно из величайших сооружений мира.'
    },
    highlights: [
      { ar: 'معبد رمسيس الثاني ونفرتاري', en: 'Temples of Ramses II & Nefertari', de: 'Tempel von Ramses II & Nefertari', fr: 'Temples de Ramsès II & Néfertari', ru: 'Храмы Рамзеса II и Нефертари' },
      { ar: 'التماثيل الأربعة العملاقة', en: '4 colossal seated statues', de: '4 kolossale Sitzstatuen', fr: '4 statues colossales', ru: '4 гигантские статуи' },
      { ar: 'قصة نقل المعبد الشهيرة', en: 'Famous temple relocation story', de: 'Berühmte Umsiedlungsgeschichte', fr: 'Histoire du déplacement du temple', ru: 'История переноса храма' },
      { ar: 'قافلة مرافقة آمنة', en: 'Safe escorted convoy', de: 'Sichere Konvoi-Fahrt', fr: 'Convoi escorté', ru: 'Сопровождаемый конвой' }
    ],
    included: [
      { ar: 'نقل بسيارة مكيفة (قافلة)', en: 'AC transport (convoy)', de: 'Klimatisierter Transfer', fr: 'Transport climatisé', ru: 'Транспорт' },
      { ar: 'مرشد محترف', en: 'Professional guide', de: 'Professioneller Guide', fr: 'Guide professionnel', ru: 'Гид' },
      { ar: 'تذاكر الدخول', en: 'Entrance fees', de: 'Eintrittsgebühren', fr: 'Droits d\'entrée', ru: 'Входные билеты' },
      { ar: 'قارورة مياه', en: 'Water bottle', de: 'Wasserflasche', fr: 'Bouteille d\'eau', ru: 'Бутылка воды' }
    ],
    notIncluded: [
      { ar: 'الغداء', en: 'Lunch', de: 'Mittag', fr: 'Déjeuner', ru: 'Обед' },
      { ar: 'تصوير الفيديو داخل المعبد', en: 'Video filming inside', de: 'Videoaufnahmen', fr: 'Vidéo à l\'intérieur', ru: 'Видеосъёмка внутри' }
    ]
  },

  /* ================= MARS AALAM ================= */
  {
    id: 'marsa-alam-dolphin-house', city: 'marsa-alam', category: 'diving',
    emoji: '🐬', color: 'linear-gradient(135deg,#16a085,#0b6e5a)',
    price: 75, oldPrice: 90, duration: 7, rating: 4.8, reviews: 876,
    badges: ['newTrip'], facilities: F.pickup,
    title: {
      ar: 'غوص في دلفين هاوس مع مشاهدة أبقار البحر', en: 'Dolphin House Dive & Dugong Encounter',
      de: 'Dolphin House Tauchgang & Dugong-Begegnung', fr: 'Plongée à Dolphin House & rencontre avec le dugong', ru: 'Дайвинг в Дельфин-Хаусе и встреча с дюгонями'
    },
    desc: {
      ar: 'موقع دلفين هاوس الفريد قرب مرسى علم يجمع الدلافين والسلاحف وأبقار البحر النادرة. اغطس ثلاث مرات في واحدة من أغنى مناطق البحر الأحمر بالحياة البحرية.',
      en: 'The unique Dolphin House site near Marsa Alam attracts dolphins, turtles and the rare dugong. Enjoy three dives in one of the richest marine areas of the Red Sea.',
      de: 'Das einzigartige Dolphin House bei Marsa Alam zieht Delfine, Schildkröten und den seltenen Dugong an. Drei Tauchgänge in einem der artenreichsten Gebiete des Roten Meeres.',
      fr: 'Le site unique de Dolphin House près de Marsa Alam attire dauphins, tortues et le rare dugong. Trois plongées dans l\'une des zones les plus riches de la mer Rouge.',
      ru: 'Уникальная станция Дельфин-Хаус у Марса-Алама привлекает дельфинов, черепах и редких дюгоней. Три погружения в самом богатом районе Красного моря.'
    },
    highlights: [
      { ar: 'فرصة رؤية أبقار البحر النادرة', en: 'Rare dugong sightings', de: 'Seltene Dugong-Sichtungen', fr: 'Observation de dugongs', ru: 'Наблюдение за дюгонями' },
      { ar: '3 غوصات وسط الدلافين', en: '3 dives among dolphins', de: '3 Tauchgänge mit Delfinen', fr: '3 plongées avec les dauphins', ru: '3 погружения с дельфинами' },
      { ar: 'سلاحف وشعاب ملونة', en: 'Turtles & colorful reefs', de: 'Schildkröten & Riffe', fr: 'Tortues & récifs', ru: 'Черепахи и рифы' },
      { ar: 'منطقة شبه بكر', en: 'Pristine, uncrowded area', de: 'Unberührte Gegend', fr: 'Zone préservée', ru: 'Нетронутый район' }
    ],
    included: [
      { ar: 'النقل من الفندق', en: 'Hotel transfer', de: 'Hoteltransfer', fr: 'Transfert hôtel', ru: 'Трансфер' },
      { ar: '3 غوصات مع المعدات', en: '3 dives with equipment', de: '3 Tauchgänge mit Ausrüstung', fr: '3 plongées avec équipement', ru: '3 погружения со снаряжением' },
      { ar: 'مرشد محترف', en: 'Professional guide', de: 'Guide', fr: 'Guide', ru: 'Гид' },
      { ar: 'غداء ومشروبات', en: 'Lunch & drinks', de: 'Mittag & Getränke', fr: 'Déjeuner & boissons', ru: 'Обед и напитки' }
    ],
    notIncluded: [
      { ar: 'بطاقة البيئة', en: 'Environmental card', de: 'Umweltkarte', fr: 'Carte environnementale', ru: 'Экологический сбор' },
      { ar: 'إيجار السترة الجافة', en: 'Wetsuit rental', de: 'Neoprenanzug-Miete', fr: 'Location combinaison', ru: 'Аренда гидрокостюма' }
    ]
  },

  {
    id: 'wadi-el-gemal-safari', city: 'marsa-alam', category: 'desert',
    emoji: '🐪', color: 'linear-gradient(135deg,#e67e22,#b9550e)',
    price: 55, oldPrice: 65, duration: 8, rating: 4.6, reviews: 654,
    badges: [], facilities: F.pickup,
    title: {
      ar: 'سفاري وادي الجمال ومحمية الشاطئ', en: 'Wadi El Gemal Desert & Beach Safari',
      de: 'Wadi El Gemal Wüsten- & Strandsafari', fr: 'Safari désert & plage de Wadi El Gemal', ru: 'Сафари в Вади-эль-Гемаль'
    },
    desc: {
      ar: 'اكتشف المحمية الوطنية وادي الجمال بكثبانها وحياتها البرية ومواقعها الأثرية الرومانية القديمة. ثم استرخِ على شواطئ بكر وسط مناظر الجبال الخلابة.',
      en: 'Discover the Wadi El Gemal National Park with its dunes, wildlife and ancient Roman archaeological sites. Then relax on pristine beaches amid stunning mountain scenery.',
      de: 'Entdecken Sie den Nationalpark Wadi El Gemal mit Dünen, Wildtieren und antiken römischen Stätten. Entspannen Sie an unberührten Stränden.',
      fr: 'Découvrez le parc national de Wadi El Gemal avec ses dunes, sa faune et ses sites romains antiques. Détente sur des plages préservées.',
      ru: 'Национальный парк Вади-эль-Гемаль с дюнами, дикой природой и древнеримскими руинами. Отдых на нетронутых пляжах.'
    },
    highlights: [
      { ar: 'محمية وطنية خلابة', en: 'Beautiful national park', de: 'Wunderschöner Nationalpark', fr: 'Superbe parc national', ru: 'Красивый национальный парк' },
      { ar: 'مواقع رومانية قديمة', en: 'Ancient Roman sites', de: 'Antike römische Stätten', fr: 'Sites romains antiques', ru: 'Древнеримские руины' },
      { ar: 'شواطئ بكر نظيفة', en: 'Pristine beaches', de: 'Unberührte Strände', fr: 'Plages préservées', ru: 'Нетронутые пляжи' },
      { ar: 'مشاهدة الحيوانات البرية', en: 'Wildlife spotting', de: 'Wildtierbeobachtung', fr: 'Observation de la faune', ru: 'Наблюдение за животными' }
    ],
    included: [
      { ar: 'جولة بسيارة 4x4', en: '4x4 safari tour', de: '4x4-Safari', fr: 'Safari en 4x4', ru: 'Сафари на 4x4' },
      { ar: 'مرشد محلي', en: 'Local guide', de: 'Lokaler Guide', fr: 'Guide local', ru: 'مестный гид' },
      { ar: 'غداء نزهة', en: 'Picnic lunch', de: 'Picknick', fr: 'Pique-nique', ru: 'Пикник' },
      { ar: 'مشروبات', en: 'Drinks', de: 'Getränke', fr: 'Boissons', ru: 'Напитки' }
    ],
    notIncluded: [
      { ar: 'رسوم دخول المحمية', en: 'Park entrance fee', de: 'Parkeintritt', fr: 'Droit d\'entrée', ru: 'Входной билет' },
      { ar: 'البقشيش', en: 'Tips', de: 'Trinkgeld', fr: 'Pourboires', ru: 'Чаевые' }
    ]
  },

  /* ================= ALEXANDRIA ================= */
  {
    id: 'alexandria-city-tour', city: 'alexandria', category: 'historical',
    emoji: '🏛️', color: 'linear-gradient(135deg,#5d8bd6,#2c4a7c)',
    price: 40, oldPrice: 48, duration: 6, rating: 4.5, reviews: 765,
    badges: [], facilities: F.guide,
    title: {
      ar: 'جولة الإسكندرية الكاملة', en: 'Complete Alexandria City Tour',
      de: 'Komplette Stadtführung Alexandria', fr: 'Visite complète d\'Alexandrie', ru: 'Полная экскурсия по Александрии'
    },
    desc: {
      ar: 'اكتشف إسكندرية الإسكندر الأكبر: المكتبة العظيمة، قلعة قايتباي على البحر، مقابر كوم الشقافة، وعمود السواري، مع وقت حر على كورنيش البحر الأبيض المتوسط.',
      en: 'Discover Alexander the Great\'s city: the Great Library, Qaitbay Citadel by the sea, the Catacombs of Kom el-Shoqafa and Pompey\'s Pillar, plus free time on the Mediterranean corniche.',
      de: 'Entdecken Sie die Stadt Alexanders des Großen: die Große Bibliothek, die Festung Qaitbay, die Katakomben und die Pompeius-Säule plus freie Zeit an der Corniche.',
      fr: 'Découvrez la ville d\'Alexandre le Grand : la Grande Bibliothèque, la citadelle de Qaitbay, les catacombes de Kom el-Shoqafa et la colonne de Pompée.',
      ru: 'Город Александра Македонского: Великая библиотека, крепость Кайтбей, катакомбы Ком-эль-Шукафа и колонна Помпея, свободное время на набережной.'
    },
    highlights: [
      { ar: 'مكتبة الإسكندرية الحديثة', en: 'Modern Bibliotheca Alexandrina', de: 'Bibliotheca Alexandrina', fr: 'Bibliotheca Alexandrina', ru: 'Библиотека Александрина' },
      { ar: 'قلعة قايتباي على البحر', en: 'Qaitbay Citadel by the sea', de: 'Festung Qaitbay am Meer', fr: 'Citadelle de Qaitbay', ru: 'Крепость Кайтбей' },
      { ar: 'مقابر كوم الشقافة الرومانية', en: 'Roman Catacombs of Kom el-Shoqafa', de: 'Römische Katakomben', fr: 'Catacombes romaines', ru: 'Римские катакомбы' },
      { ar: 'كورنيش البحر المتوسط', en: 'Mediterranean corniche walk', de: 'Spaziergang an der Corniche', fr: 'Balade sur la corniche', ru: 'Прогулка по набережной' }
    ],
    included: [
      { ar: 'مرشد محلي', en: 'Local guide', de: 'Lokaler Guide', fr: 'Guide local', ru: 'Местный гид' },
      { ar: 'تذاكر الدخول', en: 'Entrance fees', de: 'Eintrittsgebühren', fr: 'Droits d\'entrée', ru: 'Входные билеты' },
      { ar: 'نقل مكيف', en: 'AC transport', de: 'Klimatisierter Transfer', fr: 'Transport climatisé', ru: 'Транспорт' }
    ],
    notIncluded: [
      { ar: 'الغداء', en: 'Lunch', de: 'Mittag', fr: 'Déjeuner', ru: 'Обед' },
      { ar: 'التصوير في المواقع', en: 'Photography at sites', de: 'Fotografieren', fr: 'Photos', ru: 'Фотосъёмка' }
    ]
  },

  /* ================= DAHAB ================= */
  {
    id: 'dahab-blue-hole', city: 'dahab', category: 'diving',
    emoji: '🕳️', color: 'linear-gradient(135deg,#2980b9,#154360)',
    price: 45, oldPrice: 55, duration: 6, rating: 4.7, reviews: 1234,
    badges: [], facilities: F.pickup,
    title: {
      ar: 'غوص في الثقب الأزرق الشهير بدهب', en: 'Famous Blue Hole Diving in Dahab',
      de: 'Tauchen am berühmten Blue Hole in Dahab', fr: 'Plongée au célèbre Blue Hole de Dahab', ru: 'Дайвинг в знаменитой Голубой дыре в Дахабе'
    },
    desc: {
      ar: 'اغطس في واحد من أشهر مواقع الغطس في العالم: الثقب الأزرق. هاوية عميقة محاطة بالشعاب، مثالية للغواصين المعتمدين، وتشمل المعدات الكاملة ومرشداً محترفاً.',
      en: 'Dive at one of the world\'s most famous dive sites: the Blue Hole. A deep sinkhole surrounded by reefs, perfect for certified divers, with full equipment and a professional guide.',
      de: 'Tauchen Sie an einer der berühmtesten Tauchstellen der Welt: dem Blue Hole. Ein tiefes Loch umgeben von Riffen, ideal für zertifizierte Taucher mit Ausrüstung und Guide.',
      fr: 'Plongez sur l\'un des sites de plongée les plus célèbres au monde : le Blue Hole. Un gouffre profond entouré de récifs, idéal pour les plongeurs certifiés.',
      ru: 'Одно из самых известных мест для дайвинга в мире — Голубая дыра. Глубокая воронка среди рифов, идеальна для сертифицированных дайверов.'
    },
    highlights: [
      { ar: 'أشهر موقع غوص في العالم', en: 'One of the world\'s most famous dive sites', de: 'Berühmte Tauchstelle der Welt', fr: 'Site de plongée de renommée mondiale', ru: 'Знаменитое место для дайвинга' },
      { ar: 'غوصة واحدة في الثقب الأزرق', en: '1 dive at the Blue Hole', de: '1 Tauchgang am Blue Hole', fr: '1 plongée au Blue Hole', ru: '1 погружение в Голубой дыре' },
      { ar: 'مناظر خلابة تحت الماء', en: 'Spectacular underwater scenery', de: 'Spektakuläre Unterwasserwelt', fr: 'Paysages sous-marins spectaculaires', ru: 'Впечатляющий подводный мир' },
      { ar: 'معدات كاملة ومرشد', en: 'Full equipment & guide', de: 'Komplette Ausrüstung & Guide', fr: 'Équipement complet & guide', ru: 'Снаряжение и гид' }
    ],
    included: [
      { ar: 'معدات الغوص', en: 'Diving equipment', de: 'Tauchausrüstung', fr: 'Équipement de plongée', ru: 'Снаряжение' },
      { ar: 'مرشد غوص', en: 'Dive guide', de: 'Tauchguide', fr: 'Guide de plongée', ru: 'Гид по дайвингу' },
      { ar: 'النقل', en: 'Transfer', de: 'Transfer', fr: 'Transfert', ru: 'Трансфер' },
      { ar: 'مشروبات', en: 'Drinks', de: 'Getränke', fr: 'Boissons', ru: 'Напитки' }
    ],
    notIncluded: [
      { ar: 'الغداء', en: 'Lunch', de: 'Mittag', fr: 'Déjeuner', ru: 'Обед' },
      { ar: 'تأجير الكاميرا', en: 'Camera rental', de: 'Kameras', fr: 'Location caméra', ru: 'Аренда камеры' }
    ]
  }
];
