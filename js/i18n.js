/* =========================================================
   Rihla — i18n (5 languages: ar, en, de, fr, ru)
   ========================================================= */

var I18N = (function () {
  var SUPPORTED = ['ar', 'en', 'de', 'fr', 'ru'];

  var T = {
    /* ---------------- Common / Nav ---------------- */
    brandName: { ar: 'رحلة', en: 'Rihla', de: 'Rihla', fr: 'Rihla', ru: 'Rihla' },
    tagline: { ar: 'اكتشف مصر مع أفضل الرحلات', en: 'Discover Egypt with the best tours', de: 'Entdecken Sie Ägypten mit den besten Touren', fr: 'Découvrez l\'Égypte avec les meilleures excursions', ru: 'Откройте Египет с лучшими экскурсиями' },
    navHome: { ar: 'الرئيسية', en: 'Home', de: 'Startseite', fr: 'Accueil', ru: 'Главная' },
    navSharm: { ar: 'شرم الشيخ', en: 'Sharm El Sheikh', de: 'Scharm El Scheich', fr: 'Charm el-Cheikh', ru: 'Шарм-эль-Шейх' },
    navHurghada: { ar: 'الغردقة', en: 'Hurghada', de: 'Hurghada', fr: 'Hurghada', ru: 'Хургада' },
    navCairo: { ar: 'القاهرة', en: 'Cairo', de: 'Kairo', fr: 'Le Caire', ru: 'Каир' },
    navCities: { ar: 'كل المدن', en: 'All Cities', de: 'Alle Städte', fr: 'Toutes les villes', ru: 'Все города' },
    navCategories: { ar: 'الفئات', en: 'Categories', de: 'Kategorien', fr: 'Catégories', ru: 'Категории' },
    navMyBookings: { ar: 'حجوزاتي', en: 'My Bookings', de: 'Meine Buchungen', fr: 'Mes réservations', ru: 'Мои бронирования' },
    navAdmin: { ar: 'لوحة التحكم', en: 'Admin Panel', de: 'Admin-Panel', fr: 'Panneau admin', ru: 'Панель администратора' },
    language: { ar: 'العربية', en: 'English', de: 'Deutsch', fr: 'Français', ru: 'Русский' },
    langAuto: { ar: 'تلقائي (لغة الجهاز)', en: 'Auto (device language)', de: 'Automatisch (Gerätesprache)', fr: 'Auto (langue de l\'appareil)', ru: 'Авто (язык устройства)' },

    /* ---------------- Hero / Home ---------------- */
    heroTitle: { ar: 'أفضل الرحلات في شرم الشيخ والغردقة والقاهرة', en: 'The best tours in Sharm El Sheikh, Hurghada & Cairo', de: 'Die besten Touren in Scharm El Scheich, Hurghada & Kairo', fr: 'Les meilleures excursions à Charm el-Cheikh, Hurghada & Le Caire', ru: 'Лучшие экскурсии в Шарм-эль-Шейхе, Хургаде и Каире' },
    heroSub: { ar: 'غوص، سفاري، رحلات بحرية وأهرامات — احجز تجربتك القادمة في ثوانٍ مع تأكيد فوري', en: 'Diving, safari, boat trips & pyramids — book your next experience in seconds with instant confirmation', de: 'Tauchen, Safari, Bootstouren & Pyramiden — buchen Sie Ihr nächstes Erlebnis in Sekunden mit sofortiger Bestätigung', fr: 'Plongée, safari, croisières & pyramides — réservez votre prochaine expérience en quelques secondes avec confirmation instantanée', ru: 'Дайвинг, сафари, морские прогулки и пирамиды — бронируйте следующее приключение за секунды с мгновенным подтверждением' },
    heroSearchPlaceholder: { ar: 'ابحث عن رحلة... مثال: غوص، سفاري، أهرامات', en: 'Search for a tour... e.g. diving, safari, pyramids', de: 'Suche nach einer Tour... z.B. Tauchen, Safari, Pyramiden', fr: 'Recherchez une excursion... ex : plongée, safari, pyramides', ru: 'Поиск экскурсии... например: дайвинг, сафари, пирамиды' },
    heroSearchBtn: { ar: 'ابحث', en: 'Search', de: 'Suchen', fr: 'Rechercher', ru: 'Поиск' },

    secDestinations: { ar: 'وجهاتنا', en: 'Our Destinations', de: 'Unsere Ziele', fr: 'Nos destinations', ru: 'Наши направления' },
    secDestinationsSub: { ar: 'اختر مدينتك وابدأ المغامرة', en: 'Choose your city and start the adventure', de: 'Wählen Sie Ihre Stadt und beginnen Sie das Abenteuer', fr: 'Choisissez votre ville et lancez l\'aventure', ru: 'Выберите город и начните приключение' },
    secPopular: { ar: 'الرحلات الأكثر حجزاً', en: 'Most booked tours', de: 'Meist gebuchte Touren', fr: 'Excursions les plus réservées', ru: 'Самые популярные экскурсии' },
    secPopularSub: { ar: 'مختارة بعناية لأجمل التجارب', en: 'Carefully selected for the best experiences', de: 'Sorgfältig ausgewählt für die besten Erlebnisse', fr: 'Sélectionnées pour les meilleures expériences', ru: 'Тщательно отобранные лучшие впечатления' },
    secCategories: { ar: 'تصفح حسب الفئة', en: 'Browse by category', de: 'Nach Kategorie durchsuchen', fr: 'Parcourir par catégorie', ru: 'Категории' },
    secWhy: { ar: 'لماذا تحجز معنا؟', en: 'Why book with us?', de: 'Warum bei uns buchen?', fr: 'Pourquoi réserver avec nous ?', ru: 'Почему бронировать у нас?' },

    why1t: { ar: 'أسعار مضمونة', en: 'Best price guarantee', de: 'Bester-Preis-Garantie', fr: 'Meilleur prix garanti', ru: 'Гарантия лучшей цены' },
    why1d: { ar: 'أفضل الأسعار على جميع رحلاتنا', en: 'The best prices on all our tours', de: 'Die besten Preise für alle unsere Touren', fr: 'Les meilleurs prix sur toutes nos excursions', ru: 'Лучшие цены на все наши экскурсии' },
    why2t: { ar: 'تأكيد فوري', en: 'Instant confirmation', de: 'Sofortige Bestätigung', fr: 'Confirmation instantanée', ru: 'Мгновенное подтверждение' },
    why2d: { ar: 'حجزك مؤكد فوراً عند الدفع', en: 'Your booking is confirmed immediately after payment', de: 'Ihre Buchung ist sofort nach Zahlung bestätigt', fr: 'Votre réservation est confirmée immédiatement après le paiement', ru: 'Ваше бронирование подтверждается сразу после оплаты' },
    why3t: { ar: 'إلغاء مجاني', en: 'Free cancellation', de: 'Kostenlose Stornierung', fr: 'Annulation gratuite', ru: 'Бесплатная отмена' },
    why3d: { ar: 'إلغاء مجاني حتى 24 ساعة قبل الرحلة', en: 'Free cancellation up to 24h before the tour', de: 'Kostenlose Stornierung bis 24h vor der Tour', fr: 'Annulation gratuite jusqu\'à 24h avant l\'excursion', ru: 'Бесплатная отмена за 24 часа до экскурсии' },
    why4t: { ar: 'دعم 5 لغات', en: '5 languages supported', de: '5 Sprachen unterstützt', fr: '5 langues supportées', ru: 'Поддержка 5 языков' },
    why4d: { ar: 'عربي، إنجليزي، ألماني، فرنسي وروسي', en: 'Arabic, English, German, French & Russian', de: 'Arabisch, Englisch, Deutsch, Französisch & Russisch', fr: 'Arabe, anglais, allemand, français & russe', ru: 'Арабский, английский, немецкий, французский и русский' },

    viewAll: { ar: 'عرض الكل', en: 'View all', de: 'Alle ansehen', fr: 'Tout voir', ru: 'Смотреть все' },

    /* ---------------- Cities ---------------- */
    citySharm: { ar: 'شرم الشيخ', en: 'Sharm El Sheikh', de: 'Scharm El Scheich', fr: 'Charm el-Cheikh', ru: 'Шарм-эль-Шейх' },
    cityHurghada: { ar: 'الغردقة', en: 'Hurghada', de: 'Hurghada', fr: 'Hurghada', ru: 'Хургада' },
    cityCairo: { ar: 'القاهرة', en: 'Cairo', de: 'Kairo', fr: 'Le Caire', ru: 'Каир' },
    cityLuxor: { ar: 'الأقصر', en: 'Luxor', de: 'Luxor', fr: 'Louxor', ru: 'Луксор' },
    cityAswan: { ar: 'أسوان', en: 'Aswan', de: 'Assuan', fr: 'Assouan', ru: 'Асуан' },
    cityMarsaAlam: { ar: 'مرسى علم', en: 'Marsa Alam', de: 'Marsa Alam', fr: 'Marsa Alam', ru: 'Марса-Алам' },
    cityAlexandria: { ar: 'الإسكندرية', en: 'Alexandria', de: 'Alexandria', fr: 'Alexandrie', ru: 'Александрия' },
    cityDahab: { ar: 'دهب', en: 'Dahab', de: 'Dahab', fr: 'Dahab', ru: 'Дахаб' },

    citySharmSub: { ar: 'الجنة البحرية والبحر الأحمر', en: 'The marine paradise of the Red Sea', de: 'Das Meeresparadies des Roten Meeres', fr: 'Le paradis marin de la mer Rouge', ru: 'Морской рай Красного моря' },
    cityHurghadaSub: { ar: 'وجهة الغطس الأولى في مصر', en: 'Egypt\'s #1 diving destination', de: 'Ägyptens Taucherparadies Nr. 1', fr: 'Destination de plongée n°1 en Égypte', ru: 'Лучшее место для дайвинга в Египте' },
    cityCairoSub: { ar: 'عاصمة الأهرامات والتاريخ', en: 'Capital of the pyramids & history', de: 'Hauptstadt der Pyramiden & Geschichte', fr: 'Capitale des pyramides & de l\'histoire', ru: 'Столица пирамид и истории' },
    cityLuxorSub: { ar: 'أكبر متحف مفتوح في العالم', en: 'The world\'s greatest open-air museum', de: 'Das größte Freilichtmuseum der Welt', fr: 'Le plus grand musée en plein air du monde', ru: 'Крупнейший музей под открытым небом' },
    cityAswanSub: { ar: 'مدينة النيل الساحرة', en: 'The enchanting Nile city', de: 'Die bezaubernde Nilstadt', fr: 'La ville enchanteresse du Nil', ru: 'Очаровательный город на Ниле' },
    cityMarsaAlamSub: { ar: 'شواطئ بكر وشعاب مرجانية', en: 'Pristine beaches & coral reefs', de: 'Unberührte Strände & Korallenriffe', fr: 'Plages immaculées & récifs coralliens', ru: 'Нетронутые пляжи и коралловые рифы' },
    cityAlexandriaSub: { ar: 'عروس البحر المتوسط', en: 'The bride of the Mediterranean', de: 'Die Braut des Mittelmeers', fr: 'La perle de la Méditerranée', ru: 'Жемчужина Средиземноморья' },
    cityDahabSub: { ar: 'مدينة الاسترخاء والشباب', en: 'The city of relaxation & adventure', de: 'Die Stadt der Entspannung & des Abenteuers', fr: 'La ville de la détente & de l\'aventure', ru: 'Город отдыха и приключений' },

    /* ---------------- Categories ---------------- */
    catSnorkeling: { ar: 'غطس', en: 'Snorkeling', de: 'Schnorcheln', fr: 'Plongée en apnée', ru: 'Снорклинг' },
    catDiving: { ar: 'غوص', en: 'Diving', de: 'Tauchen', fr: 'Plongée', ru: 'Дайвинг' },
    catDesert: { ar: 'سفاري صحراوي', en: 'Desert Safari', de: 'Wüstensafari', fr: 'Safari dans le désert', ru: 'Пустынное сафари' },
    catSea: { ar: 'رحلات بحرية', en: 'Boat Trips', de: 'Bootstouren', fr: 'Croisières', ru: 'Морские прогулки' },
    catHistorical: { ar: 'رحلات تاريخية', en: 'Historical Tours', de: 'Historische Touren', fr: 'Tours historiques', ru: 'Исторические экскурсии' },
    catFamily: { ar: 'للعائلات', en: 'Family Friendly', de: 'Familienfreundlich', fr: 'Familial', ru: 'Для всей семьи' },
    catWatersports: { ar: 'رياضات مائية', en: 'Water Sports', de: 'Wassersport', fr: 'Sports nautiques', ru: 'Водные виды спорта' },
    catQuad: { ar: 'كواد وباجي', en: 'Quad & Buggy', de: 'Quad & Buggy', fr: 'Quad & Buggy', ru: 'Квадроциклы и багги' },
    catFishing: { ar: 'صيد', en: 'Fishing', de: 'Angeln', fr: 'Pêche', ru: 'Рыбалка' },
    catNightlife: { ar: 'حياة ليلية', en: 'Nightlife', de: 'Nachtleben', fr: 'Vie nocturne', ru: 'Ночная жизнь' },
    catWellness: { ar: 'استرخاء وعافية', en: 'Relaxation & Wellness', de: 'Entspannung & Wellness', fr: 'Détente & bien-être', ru: 'Релаксация и СПА' },
    catFood: { ar: 'جولات طعام', en: 'Food Tours', de: 'Food-Touren', fr: 'Tours gastronomiques', ru: 'Гастрономические туры' },

    /* ---------------- Listing / Toolbar ---------------- */
    resultsFound: { ar: 'رحلة متاحة', en: 'tours available', de: 'Touren verfügbar', fr: 'excursions disponibles', ru: 'экскурсий доступно' },
    resultsFound1: { ar: 'رحلة متاحة', en: 'tour available', de: 'Tour verfügbar', fr: 'excursion disponible', ru: 'экскурсия доступна' },
    sortBy: { ar: 'ترتيب حسب', en: 'Sort by', de: 'Sortieren nach', fr: 'Trier par', ru: 'Сортировать по' },
    sortFeatured: { ar: 'المميزة', en: 'Featured', de: 'Empfohlen', fr: 'En vedette', ru: 'Рекомендуемые' },
    sortPriceAsc: { ar: 'السعر: الأقل أولاً', en: 'Price: Low to High', de: 'Preis: Aufsteigend', fr: 'Prix : croissant', ru: 'Цена: по возрастанию' },
    sortPriceDesc: { ar: 'السعر: الأعلى أولاً', en: 'Price: High to Low', de: 'Preis: Absteigend', fr: 'Prix : décroissant', ru: 'Цена: по убыванию' },
    sortRating: { ar: 'الأعلى تقييماً', en: 'Top rated', de: 'Bestbewertet', fr: 'Mieux notées', ru: 'Высокий рейтинг' },
    filters: { ar: 'الفلاتر', en: 'Filters', de: 'Filter', fr: 'Filtres', ru: 'Фильтры' },
    allCategories: { ar: 'كل الفئات', en: 'All categories', de: 'Alle Kategorien', fr: 'Toutes les catégories', ru: 'Все категории' },
    allCities: { ar: 'كل المدن', en: 'All cities', de: 'Alle Städte', fr: 'Toutes les villes', ru: 'Все города' },
    searchPlaceholder: { ar: 'ابحث عن رحلة...', en: 'Search for a tour...', de: 'Suche nach einer Tour...', fr: 'Recherchez une excursion...', ru: 'Поиск экскурсии...' },
    clearFilters: { ar: 'مسح الفلاتر', en: 'Clear filters', de: 'Filter zurücksetzen', fr: 'Effacer les filtres', ru: 'Сбросить фильтры' },
    emptyResults: { ar: 'لا توجد رحلات مطابقة', en: 'No matching tours found', de: 'Keine passenden Touren gefunden', fr: 'Aucune excursion trouvée', ru: 'Экскурсии не найдены' },
    emptyResultsSub: { ar: 'جرّب تغيير البحث أو الفلاتر', en: 'Try changing your search or filters', de: 'Versuchen Sie, Suche oder Filter zu ändern', fr: 'Essayez de modifier votre recherche ou vos filtres', ru: 'Попробуйте изменить поиск или фильтры' },

    /* ---------------- Trip detail / booking ---------------- */
    overview: { ar: 'نظرة عامة', en: 'Overview', de: 'Überblick', fr: 'Aperçu', ru: 'Обзор' },
    highlights: { ar: 'أبرز ما في الرحلة', en: 'Highlights', de: 'Höhepunkte', fr: 'Points forts', ru: 'Что вас ждет' },
    whatIncluded: { ar: 'ماذا تشمل الرحلة؟', en: 'What\'s included?', de: 'Was ist inklusive?', fr: 'Qu\'est-ce qui est inclus ?', ru: 'Что включено?' },
    notIncluded: { ar: 'غير مشمول', en: 'Not included', de: 'Nicht inklusive', fr: 'Non inclus', ru: 'Не включено' },
    facilities: { ar: 'التسهيلات والمميزات', en: 'Facilities & features', de: 'Ausstattung & Features', fr: 'Équipements & avantages', ru: 'Удобства и особенности' },
    reviews: { ar: 'التقييمات', en: 'Reviews', de: 'Bewertungen', fr: 'Avis', ru: 'Отзывы' },
    bookNow: { ar: 'احجز الآن', en: 'Book now', de: 'Jetzt buchen', fr: 'Réserver', ru: 'Забронировать' },
    perPerson: { ar: 'للفرد', en: 'per person', de: 'pro Person', fr: 'par personne', ru: 'за человека' },
    selectDate: { ar: 'اختر التاريخ', en: 'Select date', de: 'Datum wählen', fr: 'Choisir une date', ru: 'Выберите дату' },
    selectGuests: { ar: 'عدد الأفراد', en: 'Number of guests', de: 'Anzahl der Personen', fr: 'Nombre de personnes', ru: 'Количество гостей' },
    guests: { ar: 'أفراد', en: 'guests', de: 'Personen', fr: 'personnes', ru: 'гостей' },
    adults: { ar: 'بالغون', en: 'Adults', de: 'Erwachsene', fr: 'Adultes', ru: 'Взрослые' },
    children: { ar: 'أطفال', en: 'Children', de: 'Kinder', fr: 'Enfants', ru: 'Дети' },
    total: { ar: 'الإجمالي', en: 'Total', de: 'Gesamt', fr: 'Total', ru: 'Итого' },
    yourName: { ar: 'الاسم الكامل', en: 'Full name', de: 'Vollständiger Name', fr: 'Nom complet', ru: 'Полное имя' },
    yourNamePh: { ar: 'مثال: أحمد محمد', en: 'e.g. Ahmed Mohamed', de: 'z.B. Ahmed Mohamed', fr: 'ex. Ahmed Mohamed', ru: 'Напр. Ахмед Мохамед' },
    yourEmail: { ar: 'البريد الإلكتروني', en: 'Email address', de: 'E-Mail-Adresse', fr: 'Adresse e-mail', ru: 'Электронная почта' },
    yourEmailPh: { ar: 'example@email.com', en: 'example@email.com', de: 'beispiel@email.com', fr: 'exemple@email.com', ru: 'example@email.com' },
    yourPhone: { ar: 'رقم الهاتف (واتساب)', en: 'Phone (WhatsApp)', de: 'Telefon (WhatsApp)', fr: 'Téléphone (WhatsApp)', ru: 'Телефон (WhatsApp)' },
    yourPhonePh: { ar: '+20 10 0000 0000', en: '+20 10 0000 0000', de: '+20 10 0000 0000', fr: '+20 10 0000 0000', ru: '+20 10 0000 0000' },
    confirmBooking: { ar: 'تأكيد الحجز والدفع', en: 'Confirm booking & pay', de: 'Buchung bestätigen & zahlen', fr: 'Confirmer et payer', ru: 'Подтвердить и оплатить' },
    from: { ar: 'من', en: 'From', de: 'Ab', fr: 'À partir de', ru: 'От' },
    duration: { ar: 'المدة', en: 'Duration', de: 'Dauer', fr: 'Durée', ru: 'Длительность' },
    rating: { ar: 'التقييم', en: 'Rating', de: 'Bewertung', fr: 'Note', ru: 'Рейтинг' },
    reviewCount: { ar: 'تقييم', en: 'reviews', de: 'Bewertungen', fr: 'avis', ru: 'отзывов' },
    popularBadge: { ar: 'الأكثر شعبية', en: 'Most popular', de: 'Sehr beliebt', fr: 'Le plus populaire', ru: 'Популярно' },
    bestseller: { ar: 'الأكثر مبيعاً', en: 'Bestseller', de: 'Bestseller', fr: 'Best-seller', ru: 'Бестселлер' },
    newTrip: { ar: 'جديد', en: 'New', de: 'Neu', fr: 'Nouveau', ru: 'Новинка' },
    freeCancellation: { ar: 'إلغاء مجاني', en: 'Free cancellation', de: 'Kostenlose Stornierung', fr: 'Annulation gratuite', ru: 'Бесплатная отмена' },
    instantConfirmation: { ar: 'تأكيد فوري', en: 'Instant confirmation', de: 'Sofortige Bestätigung', fr: 'Confirmation instantanée', ru: 'Мгновенное подтверждение' },
    mobileTicket: { ar: 'تذكرة على الموبايل', en: 'Mobile ticket', de: 'Mobiles Ticket', fr: 'Billet mobile', ru: 'Мобильный билет' },
    pickupIncluded: { ar: 'نقل من الفندق متضمن', en: 'Hotel pickup included', de: 'Hotelabholung inklusive', fr: 'Prise en charge à l\'hôtel incluse', ru: 'Трансфер из отеля включен' },
    skipLine: { ar: 'تخطي طوابير الدخول', en: 'Skip the line', de: 'Warteschlange überspringen', fr: 'Coupe-file', ru: 'Без очереди' },
    guideLive: { ar: 'مرشد حي', en: 'Live guide', de: 'Live-Reiseleiter', fr: 'Guide en direct', ru: 'Живой гид' },
    paymentMethods: { ar: 'طرق الدفع', en: 'Payment methods', de: 'Zahlungsarten', fr: 'Moyens de paiement', ru: 'Способы оплаты' },
    visaCard: { ar: 'بطاقات فيزا / ماستركارد', en: 'Visa / Mastercard', de: 'Visa / Mastercard', fr: 'Visa / Mastercard', ru: 'Visa / Mastercard' },
    cashOnPickup: { ar: 'الدفع نقداً عند الاستلام', en: 'Cash on pickup', de: 'Barzahlung bei Abholung', fr: 'Paiement en espèces', ru: 'Оплата наличными' },
    payWallet: { ar: 'محفظة إلكترونية (فودافون كاش / انستاباي)', en: 'E-wallet (Vodafone Cash / InstaPay)', de: 'E-Wallet (Vodafone Cash / InstaPay)', fr: 'Portefeuille électronique (Vodafone Cash / InstaPay)', ru: 'Электронный кошелёк (Vodafone Cash / InstaPay)' },
    payBank: { ar: 'تحويل بنكي', en: 'Bank transfer', de: 'Banküberweisung', fr: 'Virement bancaire', ru: 'Банковский перевод' },
    payWalletDetails: { ar: 'حوّل على رقم المحفظة ثم أرسل صورة الإيصال عبر واتساب:', en: 'Transfer to the wallet number, then send the receipt via WhatsApp:', de: 'Überweisen Sie auf die Wallet-Nummer und senden Sie den Beleg per WhatsApp:', fr: 'Virez au numéro du portefeuille, puis envoyez le reçu via WhatsApp:', ru: 'Переведите на номер кошелька, затем отправьте чек через WhatsApp:' },
    payBankDetails: { ar: 'حوّل على الحساب البنكي ثم أرسل صورة الإيصال عبر واتساب:', en: 'Transfer to the bank account, then send the receipt via WhatsApp:', de: 'Überweisen Sie auf das Bankkonto und senden Sie den Beleg per WhatsApp:', fr: 'Virez sur le compte bancaire, puis envoyez le reçu via WhatsApp:', ru: 'Переведите на банковский счёт, затем отправьте чек через WhatsApp:' },

    /* ---------------- Bookings ---------------- */
    myBookingsTitle: { ar: 'حجوزاتي', en: 'My Bookings', de: 'Meine Buchungen', fr: 'Mes réservations', ru: 'Мои бронирования' },
    noBookings: { ar: 'لا توجد حجوزات بعد', en: 'No bookings yet', de: 'Noch keine Buchungen', fr: 'Aucune réservation', ru: 'Пока нет бронирований' },
    noBookingsSub: { ar: 'ابدأ باكتشاف الرحلات واحجز تجربتك الأولى', en: 'Start exploring tours and book your first experience', de: 'Entdecken Sie Touren und buchen Sie Ihr erstes Erlebnis', fr: 'Explorez les excursions et réservez votre première expérience', ru: 'Изучите экскурсии и забронируйте первое приключение' },
    bookingRef: { ar: 'رقم الحجز', en: 'Booking ref', de: 'Buchungsnummer', fr: 'Référence', ru: 'Номер брони' },
    bookingOn: { ar: 'في', en: 'on', de: 'am', fr: 'le', ru: 'в' },
    bookingGuests: { ar: 'الأفراد', en: 'guests', de: 'Personen', fr: 'personnes', ru: 'гостей' },
    statusConfirmed: { ar: 'مؤكد', en: 'Confirmed', de: 'Bestätigt', fr: 'Confirmé', ru: 'Подтверждено' },
    statusPending: { ar: 'قيد الانتظار', en: 'Pending', de: 'Ausstehend', fr: 'En attente', ru: 'Ожидает' },
    statusCancelled: { ar: 'ملغي', en: 'Cancelled', de: 'Storniert', fr: 'Annulé', ru: 'Отменено' },
    cancelBooking: { ar: 'إلغاء الحجز', en: 'Cancel booking', de: 'Buchung stornieren', fr: 'Annuler la réservation', ru: 'Отменить бронь' },
    printReceipt: { ar: 'طباعة الإيصال', en: 'Print receipt', de: 'Quittung drucken', fr: 'Imprimer le reçu', ru: 'Распечатать квитанцию' },
    noBookingsReturn: { ar: 'تصفح الرحلات', en: 'Browse tours', de: 'Touren ansehen', fr: 'Voir les excursions', ru: 'Смотреть экскурсии' },

    /* ---------------- Receipt ---------------- */
    bookingConfirmed: { ar: 'تم تأكيد حجزك!', en: 'Your booking is confirmed!', de: 'Ihre Buchung ist bestätigt!', fr: 'Votre réservation est confirmée !', ru: 'Ваше бронирование подтверждено!' },
    receiptSub: { ar: 'تم إرسال تفاصيل الحجز إلى بريدك الإلكتروني. اعرض التذكرة على هاتفك عند الرحلة.', en: 'Booking details have been sent to your email. Show your ticket on your phone at the tour.', de: 'Die Buchungsdetails wurden an Ihre E-Mail gesendet. Zeigen Sie Ihr Ticket bei der Tour am Handy vor.', fr: 'Les détails de la réservation ont été envoyés par e-mail. Présentez votre billet sur votre téléphone lors de l\'excursion.', ru: 'Детали бронирования отправлены на вашу почту. Покажите билет с телефона на экскурсии.' },
    reference: { ar: 'رقم الحجز', en: 'Booking reference', de: 'Buchungsreferenz', fr: 'Référence de réservation', ru: 'Номер бронирования' },
    yourDetails: { ar: 'بياناتك', en: 'Your details', de: 'Ihre Daten', fr: 'Vos coordonnées', ru: 'Ваши данные' },
    tripSummary: { ar: 'ملخص الرحلة', en: 'Trip summary', de: 'Reiseübersicht', fr: 'Résumé de l\'excursion', ru: 'Сводка поездки' },
    goHome: { ar: 'العودة للرئيسية', en: 'Back to home', de: 'Zurück zur Startseite', fr: 'Retour à l\'accueil', ru: 'На главную' },
    viewBookings: { ar: 'عرض حجوزاتي', en: 'View my bookings', de: 'Meine Buchungen ansehen', fr: 'Voir mes réservations', ru: 'Мои бронирования' },
    paymentSimNote: { ar: '💳 اختر وسيلة الدفع المناسبة — سيتم التواصل معك لتأكيد الحجز قبل الرحلة.', en: '💳 Choose your payment method — we will contact you to confirm the booking.', de: '💳 Wählen Sie Ihre Zahlungsmethode — wir kontaktieren Sie zur Bestätigung.', fr: '💳 Choisissez votre moyen de paiement — nous vous contacterons pour confirmer.', ru: '💳 Выберите способ оплаты — мы свяжемся с вами для подтверждения.' },

    /* ---------------- Admin ---------------- */
    adminTitle: { ar: 'لوحة تحكم الإدارة', en: 'Admin Panel', de: 'Admin-Panel', fr: 'Panneau d\'administration', ru: 'Панель администратора' },
    adminLoginSub: { ar: 'أدخل كلمة المرور للدخول', en: 'Enter the password to continue', de: 'Geben Sie das Passwort ein', fr: 'Entrez le mot de passe', ru: 'Введите пароль' },
    adminPassword: { ar: 'كلمة المرور', en: 'Password', de: 'Passwort', fr: 'Mot de passe', ru: 'Пароль' },
    loginBtn: { ar: 'تسجيل الدخول', en: 'Login', de: 'Anmelden', fr: 'Se connecter', ru: 'Войти' },
    adminHint: { ar: 'غيّر كلمة المرور من لوحة التحكم بعد الدخول لأول مرة.', en: 'Change the password from the admin panel after your first login.', de: 'Ändern Sie das Passwort nach der ersten Anmeldung im Admin-Panel.', fr: 'Changez le mot de passe depuis le panneau admin après votre première connexion.', ru: 'Смените пароль в панели администратора после первого входа.' },
    logout: { ar: 'تسجيل الخروج', en: 'Logout', de: 'Abmelden', fr: 'Déconnexion', ru: 'Выйти' },
    dashboard: { ar: 'نظرة عامة', en: 'Dashboard', de: 'Übersicht', fr: 'Tableau de bord', ru: 'Панель' },
    manageTrips: { ar: 'إدارة الرحلات', en: 'Manage Tours', de: 'Touren verwalten', fr: 'Gérer les excursions', ru: 'Управление экскурсиями' },
    manageBookings: { ar: 'إدارة الحجوزات', en: 'Manage Bookings', de: 'Buchungen verwalten', fr: 'Gérer les réservations', ru: 'Управление бронированием' },
    addTrip: { ar: 'إضافة رحلة جديدة', en: 'Add new tour', de: 'Neue Tour hinzufügen', fr: 'Ajouter une excursion', ru: 'Добавить экскурсию' },
    editTrip: { ar: 'تعديل', en: 'Edit', de: 'Bearbeiten', fr: 'Modifier', ru: 'Редактировать' },
    deleteTrip: { ar: 'حذف', en: 'Delete', de: 'Löschen', fr: 'Supprimer', ru: 'Удалить' },
    confirmDeleteTrip: { ar: 'هل أنت متأكد من حذف هذه الرحلة؟', en: 'Are you sure you want to delete this tour?', de: 'Diese Tour wirklich löschen?', fr: 'Voulez-vous vraiment supprimer cette excursion ?', ru: 'Вы уверены, что хотите удалить эту экскурсию?' },
    statsTrips: { ar: 'عدد الرحلات', en: 'Total tours', de: 'Touren gesamt', fr: 'Total excursions', ru: 'Всего экскурсий' },
    statsBookings: { ar: 'إجمالي الحجوزات', en: 'Total bookings', de: 'Buchungen gesamt', fr: 'Total réservations', ru: 'Всего бронирований' },
    statsRevenue: { ar: 'إجمالي الإيرادات', en: 'Total revenue', de: 'Gesamteinnahmen', fr: 'Revenu total', ru: 'Общий доход' },
    statsCities: { ar: 'المدن النشطة', en: 'Active cities', de: 'Aktive Städte', fr: 'Villes actives', ru: 'Города' },
    statsPending: { ar: 'حجوزات قيد الانتظار', en: 'Pending bookings', de: 'Ausstehende Buchungen', fr: 'Réservations en attente', ru: 'Ожидающие брони' },
    tableTour: { ar: 'الرحلة', en: 'Tour', de: 'Tour', fr: 'Excursion', ru: 'Экскурсия' },
    tablePrice: { ar: 'السعر', en: 'Price', de: 'Preis', fr: 'Prix', ru: 'Цена' },
    tableCity: { ar: 'المدينة', en: 'City', de: 'Stadt', fr: 'Ville', ru: 'Город' },
    tableStatus: { ar: 'الحالة', en: 'Status', de: 'Status', fr: 'Statut', ru: 'Статус' },
    tableActions: { ar: 'إجراءات', en: 'Actions', de: 'Aktionen', fr: 'Actions', ru: 'Действия' },
    tableName: { ar: 'العميل', en: 'Customer', de: 'Kunde', fr: 'Client', ru: 'Клиент' },
    tableDate: { ar: 'التاريخ', en: 'Date', de: 'Datum', fr: 'Date', ru: 'Дата' },
    tableGuests: { ar: 'الأفراد', en: 'Guests', de: 'Personen', fr: 'Personnes', ru: 'Гости' },
    tableTotal: { ar: 'الإجمالي', en: 'Total', de: 'Gesamt', fr: 'Total', ru: 'Итого' },
    saveTrip: { ar: 'حفظ الرحلة', en: 'Save tour', de: 'Tour speichern', fr: 'Enregistrer', ru: 'Сохранить' },
    cancel: { ar: 'إلغاء', en: 'Cancel', de: 'Abbrechen', fr: 'Annuler', ru: 'Отмена' },
    backToList: { ar: 'رجوع للقائمة', en: 'Back to list', de: 'Zurück zur Liste', fr: 'Retour à la liste', ru: 'Назад к списку' },
    tripFormTitle: { ar: 'بيانات الرحلة', en: 'Tour details', de: 'Tour-Daten', fr: 'Détails de l\'excursion', ru: 'Данные экскурсии' },
    tripTransTitle: { ar: 'الترجمة (العنوان والوصف)', en: 'Translations (title & description)', de: 'Übersetzungen (Titel & Beschreibung)', fr: 'Traductions (titre & description)', ru: 'Переводы (название и описание)' },
    tripMedia: { ar: 'الصور والألوان', en: 'Images & colors', de: 'Bilder & Farben', fr: 'Images & couleurs', ru: 'Изображения и цвета' },
    imgColor: { ar: 'لون خلفية البطاقة (Hex)', en: 'Card background color (Hex)', de: 'Hintergrundfarbe (Hex)', fr: 'Couleur de fond (Hex)', ru: 'Цвет фона (Hex)' },
    imgEmoji: { ar: 'رمز الصورة (Emoji)', en: 'Image emoji', de: 'Bild-Emoji', fr: 'Emoji d\'image', ru: 'Эмодзи картинки' },
    imgImage: { ar: 'رابط الصورة الحقيقية', en: 'Real photo URL', de: 'Foto-URL', fr: 'URL de la photo', ru: 'Ссылка на фото' },
    imgVideo: { ar: 'رابط الفيديو (اختياري)', en: 'Video URL (optional)', de: 'Video-URL (optional)', fr: 'URL de la vidéo (optionnelle)', ru: 'Ссылка на видео (необязательно)' },
    imgPreviewFail: { ar: 'تعذر تحميل الصورة', en: 'Image failed to load', de: 'Bild konnte nicht geladen werden', fr: 'Impossible de charger l\'image', ru: 'Не удалось загрузить изображение' },
    tourVideo: { ar: 'فيديو الرحلة', en: 'Tour video', de: 'Tour-Video', fr: 'Vidéo de l\'excursion', ru: 'Видео экскурсии' },
    videoNotSupported: { ar: 'متصفحك لا يدعم تشغيل الفيديو', en: 'Your browser does not support video playback', de: 'Ihr Browser unterstützt keine Videowiedergabe', fr: 'Votre navigateur ne prend pas en charge la lecture vidéo', ru: 'Ваш браузер не поддерживает воспроизведение видео' },
    fullVideo: { ar: 'شاهد التجربة كاملة', en: 'Watch the full experience', de: 'Die komplette Erfahrung ansehen', fr: 'Regardez l\'expérience complète', ru: 'Полное видео экскурсии' },
    fieldTitle: { ar: 'العنوان', en: 'Title', de: 'Titel', fr: 'Titre', ru: 'Название' },
    fieldDesc: { ar: 'الوصف', en: 'Description', de: 'Beschreibung', fr: 'Description', ru: 'Описание' },
    fieldCity: { ar: 'المدينة', en: 'City', de: 'Stadt', fr: 'Ville', ru: 'Город' },
    fieldCategory: { ar: 'الفئة', en: 'Category', de: 'Kategorie', fr: 'Catégorie', ru: 'Категория' },
    fieldPrice: { ar: 'السعر (USD)', en: 'Price (USD)', de: 'Preis (USD)', fr: 'Prix (USD)', ru: 'Цена (USD)' },
    fieldOldPrice: { ar: 'السعر قبل الخصم (اختياري)', en: 'Old price (optional)', de: 'Alter Preis (optional)', fr: 'Ancien prix (optionnel)', ru: 'Старая цена (необязательно)' },
    fieldDuration: { ar: 'المدة (ساعة)', en: 'Duration (hours)', de: 'Dauer (Stunden)', fr: 'Durée (heures)', ru: 'Длительность (часы)' },
    fieldRating: { ar: 'التقييم (0-5)', en: 'Rating (0-5)', de: 'Bewertung (0-5)', fr: 'Note (0-5)', ru: 'Рейтинг (0-5)' },
    fieldReviews: { ar: 'عدد التقييمات', en: 'Number of reviews', de: 'Anzahl der Bewertungen', fr: 'Nombre d\'avis', ru: 'Количество отзывов' },
    fieldHighlights: { ar: 'أبرز النقاط (سطر لكل نقطة)', en: 'Highlights (one per line)', de: 'Höhepunkte (eine pro Zeile)', fr: 'Points forts (un par ligne)', ru: 'Что вас ждет (по одному в строке)' },
    fieldIncluded: { ar: 'المشمول (سطر لكل بند)', en: 'Included (one per line)', de: 'Inklusive (eine pro Zeile)', fr: 'Inclus (un par ligne)', ru: 'Включено (по одному в строке)' },
    fieldNotIncluded: { ar: 'غير المشمول (اختياري)', en: 'Not included (optional)', de: 'Nicht inklusive (optional)', fr: 'Non inclus (optionnel)', ru: 'Не включено (необязательно)' },
    fieldFeatured: { ar: 'رحلة مميزة', en: 'Featured tour', de: 'Empfohlene Tour', fr: 'Excursion en vedette', ru: 'Рекомендуемая экскурсия' },
    fieldBestPrice: { ar: 'ضمان أفضل سعر', en: 'Best price guarantee', de: 'Bester-Preis-Garantie', fr: 'Meilleur prix garanti', ru: 'Гарантия лучшей цены' },
    fieldInstant: { ar: 'تأكيد فوري', en: 'Instant confirmation', de: 'Sofortige Bestätigung', fr: 'Confirmation instantanée', ru: 'Мгновенное подтверждение' },
    fieldFreeCancel: { ar: 'إلغاء مجاني', en: 'Free cancellation', de: 'Kostenlose Stornierung', fr: 'Annulation gratuite', ru: 'Бесплатная отмена' },
    fieldMobile: { ar: 'تذكرة موبايل', en: 'Mobile ticket', de: 'Mobiles Ticket', fr: 'Billet mobile', ru: 'Мобильный билет' },
    fieldPickup: { ar: 'نقل من الفندق', en: 'Hotel pickup', de: 'Hotelabholung', fr: 'Prise en charge hôtel', ru: 'Трансфер из отеля' },
    fieldSkipLine: { ar: 'تخطي الطابور', en: 'Skip the line', de: 'Ohne Warteschlange', fr: 'Coupe-file', ru: 'Без очереди' },
    fieldLiveGuide: { ar: 'مرشد حي', en: 'Live guide', de: 'Live-Reiseleiter', fr: 'Guide en direct', ru: 'Живой гид' },
    changePassword: { ar: 'تغيير كلمة المرور', en: 'Change password', de: 'Passwort ändern', fr: 'Changer le mot de passe', ru: 'Сменить пароль' },
    newPassword: { ar: 'كلمة المرور الجديدة', en: 'New password', de: 'Neues Passwort', fr: 'Nouveau mot de passe', ru: 'Новый пароль' },
    savePassword: { ar: 'حفظ كلمة المرور', en: 'Save password', de: 'Passwort speichern', fr: 'Enregistrer le mot de passe', ru: 'Сохранить пароль' },

    /* ---------------- Toasts ---------------- */
    toastTripAdded: { ar: '✅ تمت إضافة الرحلة بنجاح', en: '✅ Tour added successfully', de: '✅ Tour erfolgreich hinzugefügt', fr: '✅ Excursion ajoutée avec succès', ru: '✅ Экскурсия добавлена' },
    toastTripUpdated: { ar: '✅ تم تحديث الرحلة', en: '✅ Tour updated', de: '✅ Tour aktualisiert', fr: '✅ Excursion mise à jour', ru: '✅ Экскурсия обновлена' },
    toastTripDeleted: { ar: '🗑️ تم حذف الرحلة', en: '🗑️ Tour deleted', de: '🗑️ Tour gelöscht', fr: '🗑️ Excursion supprimée', ru: '🗑️ Экскурсия удалена' },
    toastBooked: { ar: '🎉 تم تأكيد حجزك بنجاح!', en: '🎉 Your booking is confirmed!', de: '🎉 Ihre Buchung ist bestätigt!', fr: '🎉 Votre réservation est confirmée !', ru: '🎉 Ваше бронирование подтверждено!' },
    toastLoginError: { ar: '❌ كلمة مرور غير صحيحة', en: '❌ Incorrect password', de: '❌ Falsches Passwort', fr: '❌ Mot de passe incorrect', ru: '❌ Неверный пароль' },
    toastSaved: { ar: '❤️ تمت إضافة الرحلة للمفضلة', en: '❤️ Tour saved to favourites', de: '❤️ Tour zu Favoriten hinzugefügt', fr: '❤️ Excursion ajoutée aux favoris', ru: '❤️ Экскурсия добавлена в избранное' },
    toastRemoved: { ar: 'تمت إزالتها من المفضلة', en: 'Removed from favourites', de: 'Aus Favoriten entfernt', fr: 'Retirée des favoris', ru: 'Удалено из избранного' },
    toastCancelled: { ar: '🗑️ تم إلغاء الحجز', en: '🗑️ Booking cancelled', de: '🗑️ Buchung storniert', fr: '🗑️ Réservation annulée', ru: '🗑️ Бронь отменена' },
    toastPasswordChanged: { ar: '✅ تم تغيير كلمة المرور', en: '✅ Password changed', de: '✅ Passwort geändert', fr: '✅ Mot de passe modifié', ru: '✅ Пароль изменен' },
    toastFillForm: { ar: '⚠️ الرجاء ملء جميع الحقول المطلوبة', en: '⚠️ Please fill in all required fields', de: '⚠️ Bitte alle Pflichtfelder ausfüllen', fr: '⚠️ Veuillez remplir tous les champs requis', ru: '⚠️ Заполните все обязательные поля' },

    /* ---------------- Misc ---------------- */
    footerAbout: { ar: 'اكتشف أجمل رحلات مصر — من شرم الشيخ والغردقة إلى القاهرة والأقصر.', en: 'Discover the best tours in Egypt — from Sharm El Sheikh & Hurghada to Cairo & Luxor.', de: 'Entdecken Sie die besten Touren in Ägypten — von Scharm El Scheich & Hurghada bis Kairo & Luxor.', fr: 'Découvrez les meilleures excursions en Égypte — de Charm el-Cheikh & Hurghada au Caire & Louxor.', ru: 'Откройте лучшие экскурсии Египта — от Шарм-эль-Шейха и Хургады до Каира и Луксора.' },
    footerCities: { ar: 'المدن', en: 'Cities', de: 'Städte', fr: 'Villes', ru: 'Города' },
    footerHelp: { ar: 'المساعدة', en: 'Help', de: 'Hilfe', fr: 'Aide', ru: 'Помощь' },
    footerContact: { ar: 'تواصل معنا', en: 'Contact us', de: 'Kontakt', fr: 'Contact', ru: 'Контакты' },
    footerRights: { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved', de: 'Alle Rechte vorbehalten', fr: 'Tous droits réservés', ru: 'Все права защищены' },
    loading: { ar: 'جارٍ التحميل...', en: 'Loading...', de: 'Laden...', fr: 'Chargement...', ru: 'Загрузка...' },
    toursIn: { ar: 'رحلات في', en: 'tours in', de: 'Touren in', fr: 'excursions à', ru: 'экскурсий в' },
    tour: { ar: 'رحلة', en: 'tour', de: 'Tour', fr: 'excursion', ru: 'экскурсия' },
    languageName: { ar: 'العربية', en: 'English', de: 'Deutsch', fr: 'Français', ru: 'Русский' },
    announce: { ar: '✨ خصم 25% على جميع رحلات البحر الأحمر هذا الصيف', en: '✨ 25% OFF on all Red Sea tours this summer', de: '✨ 25% RABATT auf alle Rotmeer-Touren in diesem Sommer', fr: '✨ -25% sur toutes les excursions de la mer Rouge cet été', ru: '✨ Скидка 25% на все экскурсии Красного моря этим летом' },
    paymentMethod: { ar: 'طريقة الدفع', en: 'Payment method', de: 'Zahlungsmethode', fr: 'Moyen de paiement', ru: 'Способ оплаты' },
    allDestinations: { ar: 'كل الوجهات', en: 'All destinations', de: 'Alle Ziele', fr: 'Toutes les destinations', ru: 'Все направления' }
  };

  var manual = false;
  var saved = null;
  try {
    saved = localStorage.getItem('et_lang');
    manual = localStorage.getItem('et_lang_manual') === '1';
  } catch (e) {}

  function detectDeviceLang() {
    if (window.__RIHLA_LANG && SUPPORTED.indexOf(window.__RIHLA_LANG) !== -1) return window.__RIHLA_LANG;
    var prefs = [];
    try {
      prefs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
    } catch (e) { prefs = []; }
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i] || '').toLowerCase().split(/[-_]/)[0];
      if (SUPPORTED.indexOf(code) !== -1) return code;
    }
    return 'en';
  }

  var lang = (manual && saved && SUPPORTED.indexOf(saved) !== -1) ? saved : detectDeviceLang();

  function t(key) {
    var entry = T[key];
    if (!entry) return key;
    return entry[lang] || entry.en || key;
  }

  function setLang(newLang, markManual) {
    if (SUPPORTED.indexOf(newLang) === -1) return;
    lang = newLang;
    try {
      localStorage.setItem('et_lang', lang);
      if (markManual) { localStorage.setItem('et_lang_manual', '1'); manual = true; }
    } catch (e) {}
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.title = t('brandName') + ' | ' + t('tagline');
    var ann = document.getElementById('announce-text');
    if (ann) ann.textContent = t('announce');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    var brand = document.querySelector('.brand-name');
    if (brand) brand.textContent = t('brandName');
    var langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.textContent = t('language');
    document.querySelectorAll('.lang-menu button').forEach(function (b) {
      var v = b.getAttribute('data-lang');
      if (v === (manual ? lang : 'auto')) b.classList.add('active');
      else b.classList.remove('active');
    });
  }

  function setAuto() {
    try { localStorage.removeItem('et_lang'); localStorage.removeItem('et_lang_manual'); } catch (e) {}
    manual = false;
    setLang(detectDeviceLang());
  }

  function getLang() { return lang; }
  function isRTL() { return lang === 'ar'; }

  setLang(lang);

  return { t: t, setLang: setLang, setAuto: setAuto, getLang: getLang, isRTL: isRTL, SUPPORTED: SUPPORTED };
})();
