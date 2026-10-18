/* =========================================================
   Rihla — Main Application (SPA)
   ========================================================= */

(function () {
  var t = I18N.t;
  var L = I18N.getLang;

  /* ---------------- Helpers ---------------- */

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function tr(obj) {
    if (!obj) return '';
    return obj[L()] || obj.en || '';
  }

  function stars(rating) {
    var full = Math.round(rating);
    var s = '';
    for (var i = 0; i < 5; i++) s += (i < full) ? '★' : '☆';
    return s;
  }

  function money(n) {
    return '$' + (Math.round(n * 100) / 100).toLocaleString('en-US');
  }

  function cityById(id) {
    return ET_DATA.cities.find(function (c) { return c.id === id; });
  }

  function catById(id) {
    return ET_DATA.categories.find(function (c) { return c.id === id; });
  }

  function toast(msg, type) {
    var root = document.getElementById('toast-root');
    var el = document.createElement('div');
    el.className = 'toast ' + (type || '');
    el.textContent = msg;
    root.appendChild(el);
    setTimeout(function () { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2600);
    setTimeout(function () { el.remove(); }, 3000);
  }

  function mediaHtml(trip, cls) {
    return '<div class="' + (cls || 'trip-media') + '" style="background:' + trip.color + ';display:flex;align-items:center;justify-content:center;"><span style="font-size:80px;filter:drop-shadow(0 4px 8px rgba(0,0,0,.3));">' + trip.emoji + '</span></div>';
  }

  /* ---------------- Trip card ---------------- */

  function badgeLabel(b) {
    if (b === 'bestseller') return t('bestseller');
    if (b === 'newTrip') return t('newTrip');
    if (b === 'popular') return t('popularBadge');
    return '';
  }

  function tripCard(trip, opts) {
    opts = opts || {};
    var fav = ETStore.isFavorite(trip.id);
    var badges = (trip.badges || []).map(function (b) {
      return '<span class="trip-badge">' + esc(badgeLabel(b)) + '</span>';
    }).join('');

    var img = ET_MEDIA.image(trip);
    var media = '<div class="trip-media" style="background:' + trip.color + ';">' +
      badges +
      '<button class="trip-fav' + (fav ? ' saved' : '') + '" data-fav="' + esc(trip.id) + '" title="♥">' + (fav ? '❤️' : '🤍') + '</button>' +
      (img
        ? '<img class="trip-photo" src="' + esc(img) + '" alt="" loading="lazy" data-cat="' + esc(trip.category) + '" onerror="ET_MEDIA.fallback(this)">'
        : '<span class="trip-emoji">' + trip.emoji + '</span>') +
      '</div>';

    var cat = catById(trip.category);
    var city = cityById(trip.city);
    var old = trip.oldPrice ? '<span class="old">' + money(trip.oldPrice) + '</span>' : '';

    return '<a class="trip-card" href="#/trip/' + esc(trip.id) + '">' +
      media +
      '<div class="trip-body">' +
        '<span class="trip-cat">' + esc(cat ? t(cat.key) : '') + '</span>' +
        '<h3 class="trip-title">' + esc(tr(trip.title)) + '</h3>' +
        '<span class="trip-loc">📍 ' + esc(city ? t(city.key) : '') + '</span>' +
        '<div class="trip-rating"><span class="score">' + trip.rating.toFixed(1) + '</span><span class="stars">' + stars(trip.rating) + '</span><span>(' + trip.reviews.toLocaleString('en-US') + ')</span></div>' +
        '<div class="trip-footer">' +
          '<div class="trip-price">' + old + '<span class="now">' + money(trip.price) + '</span> <span class="unit">' + t('perPerson') + '</span></div>' +
          '<span class="btn btn-primary btn-sm">' + t('bookNow') + '</span>' +
        '</div>' +
      '</div>' +
    '</a>';
  }

  function tripGrid(trips) {
    if (!trips.length) {
      return '<div class="empty-state"><span class="emoji">🔍</span><h3>' + t('emptyResults') + '</h3><p>' + t('emptyResultsSub') + '</p></div>';
    }
    return '<div class="trip-grid">' + trips.map(tripCard).join('') + '</div>';
  }

  /* ---------------- City card ---------------- */

  function cityCard(city) {
    var count = ETStore.getTrips().filter(function (x) { return x.city === city.id; }).length;
    var cityImg = ET_MEDIA.cityImage(city.id);
    var style = 'background:' + city.color + ';';
    if (cityImg) style = 'background-image:url(\'' + cityImg + '\');background-size:cover;background-position:center;';
    return '<a class="city-card" href="#/city/' + esc(city.id) + '" style="' + style + '">' +
      '<div class="city-overlay"></div>' +
      '<div class="city-info"><h3>' + esc(t(city.key)) + '</h3><p>' + esc(t(city.sub)) + '</p><p><b>' + count + '</b> ' + t('tour') + (count !== 1 ? 's' : '') + '</p></div>' +
      '</a>';
  }

  /* ---------------- Category chip ---------------- */

  function catChip(cat, active) {
    var count = ETStore.getTrips().filter(function (x) { return x.category === cat.id; }).length;
    return '<a class="cat-chip' + (active ? ' active' : '') + '" href="#/category/' + esc(cat.id) + '">' +
      '<span class="emoji">' + cat.emoji + '</span><span>' + esc(t(cat.key)) + '</span><span style="font-size:11px;opacity:.7;">' + count + '</span>' +
      '</a>';
  }

  /* ---------------- Pages ---------------- */

  function pageHome() {
    var trips = ETStore.getTrips();
    var featured = trips.filter(function (x) { return x.featured; }).slice(0, 6);
    var popular = trips.slice().sort(function (a, b) { return b.rating * b.reviews - a.rating * a.reviews; }).slice(0, 6);
    var favs = trips.filter(function (x) { return ETStore.isFavorite(x.id); });

    var whyItems = [
      ['💵', 'why1t', 'why1d'],
      ['⚡', 'why2t', 'why2d'],
      ['🔄', 'why3t', 'why3d'],
      ['🌍', 'why4t', 'why4d']
    ];

    var html = '';

    /* Hero */
    html += '<section class="hero">' +
      '<div class="hero-overlay"></div>' +
      ET_SCENES.sunsetDeco() +
      '<div class="container">' +
        '<h1>' + t('heroTitle') + '</h1>' +
        '<p>' + t('heroSub') + '</p>' +
        '<form class="hero-search" id="hero-search">' +
          '<input type="text" id="hero-q" placeholder="' + esc(t('heroSearchPlaceholder')) + '">' +
          '<button type="submit">🔎 ' + t('heroSearchBtn') + '</button>' +
        '</form>' +
      '</div>' +
      '<div class="hero-deco-wrap">' + ET_SCENES.heroDeco() + '</div>' +
    '</section>';

    /* Royal ornament divider */
    html += ET_SCENES.royalOrnament();

    /* Cities */
    html += '<section class="section"><div class="container">' +
      '<div class="section-head"><h2 class="section-title"><span class="emoji">🗺️</span>' + t('secDestinations') + '</h2>' +
      '<a class="section-link" href="#/cities">' + t('viewAll') + ' →</a></div>' +
      '<div class="city-grid">' + ET_DATA.cities.map(cityCard).join('') + '</div>' +
    '</div></section>';

    /* Popular */
    html += '<section class="section"><div class="container">' +
      '<div class="section-head"><h2 class="section-title"><span class="emoji">🔥</span>' + t('secPopular') + '</h2>' +
      '<a class="section-link" href="#/search?sort=rating">' + t('viewAll') + ' →</a></div>' +
      tripGrid(popular) +
    '</div></section>';

    /* Categories */
    html += '<section class="section"><div class="container">' +
      '<div class="section-head"><h2 class="section-title"><span class="emoji">🎯</span>' + t('secCategories') + '</h2></div>' +
      '<div class="cat-chips">' + ET_DATA.categories.map(function (c) { return catChip(c, false); }).join('') + '</div>' +
    '</div></section>';

    /* Featured */
    if (featured.length) {
      html += '<section class="section"><div class="container">' +
        '<div class="section-head"><h2 class="section-title"><span class="emoji">⭐</span>' + t('secPopular') + '</h2></div>' +
        tripGrid(featured) +
      '</div></section>';
    }

    /* Favorites */
    if (favs.length) {
      html += '<section class="section"><div class="container">' +
        '<div class="section-head"><h2 class="section-title"><span class="emoji">❤️</span> ' + t('navMyBookings') + ' Favorites</h2></div>' +
        tripGrid(favs) +
      '</div></section>';
    }

    /* Why us */
    html += '<section class="section"><div class="container">' +
      '<div class="section-head"><h2 class="section-title">' + t('secWhy') + '</h2></div>' +
      '<div class="why-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;">' +
      whyItems.map(function (w) {
        return '<div class="why-card" style="background:#fff;border-radius:14px;box-shadow:0 2px 10px rgba(10,61,98,.08);padding:22px;border-inline-start:4px solid var(--accent);">' +
          '<div style="font-size:34px;">' + w[0] + '</div>' +
          '<h3 style="color:var(--primary);margin:10px 0 4px;font-size:17px;">' + t(w[1]) + '</h3>' +
          '<p style="color:var(--muted);font-size:14px;">' + t(w[2]) + '</p>' +
        '</div>';
      }).join('') +
      '</div>' +
    '</div></section>';

    document.getElementById('app').innerHTML = html;

    var form = document.getElementById('hero-search');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var q = document.getElementById('hero-q').value.trim();
        location.hash = '#/search?q=' + encodeURIComponent(q);
      });
    }
  }

  function pageCities() {
    var html = '<section class="section"><div class="container">' +
      '<div class="breadcrumbs"><a href="#/">' + t('navHome') + '</a> / ' + t('secDestinations') + '</div>' +
      '<div class="section-head" style="margin-top:14px;"><h1 class="section-title"><span class="emoji">🗺️</span>' + t('secDestinations') + '</h1></div>' +
      '<div class="city-grid" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr));">' + ET_DATA.cities.map(cityCard).join('') + '</div>' +
    '</div></section>';
    document.getElementById('app').innerHTML = html;
  }

  function pageCategories() {
    var html = '<section class="section"><div class="container">' +
      '<div class="breadcrumbs"><a href="#/">' + t('navHome') + '</a> / ' + t('secCategories') + '</div>' +
      '<div class="section-head" style="margin-top:14px;"><h1 class="section-title"><span class="emoji">🎯</span>' + t('secCategories') + '</h1></div>' +
      '<div class="city-grid" style="grid-template-columns:repeat(auto-fill,minmax(180px,1fr));">' + ET_DATA.categories.map(function (c) {
        var count = ETStore.getTrips().filter(function (x) { return x.category === c.id; }).length;
        return '<a class="cat-chip" style="min-height:110px;" href="#/category/' + esc(c.id) + '">' +
          '<span class="emoji">' + c.emoji + '</span><span>' + esc(t(c.key)) + '</span><span style="font-size:11px;opacity:.7;">' + count + '</span>' +
        '</a>';
      }).join('') + '</div>' +
    '</div></section>';
    document.getElementById('app').innerHTML = html;
  }

  function pageCity(cityId) {
    var city = cityById(cityId);
    if (!city) { page404(); return; }
    var trips = ETStore.getTrips().filter(function (x) { return x.city === cityId; });
    var cityImg = ET_MEDIA.cityImage(cityId);
    var heroStyle = cityImg
      ? 'background-image:linear-gradient(180deg,rgba(10,61,98,.25),rgba(10,61,98,.65)),url(\'' + cityImg + '\');background-size:cover;background-position:center;'
      : '';

    var html = '<section class="section"><div class="container">' +
      '<div class="breadcrumbs"><a href="#/">' + t('navHome') + '</a> / ' + t('secDestinations') + ' / <b>' + esc(t(city.key)) + '</b></div>' +
      '<div class="hero city-hero" style="margin-top:16px;border-radius:16px;padding:36px;' + heroStyle + '">' +
        '<h1 style="font-size:34px;">' + city.emoji + ' ' + esc(t(city.key)) + '</h1>' +
        '<p style="opacity:.9;margin-top:6px;">' + esc(t(city.sub)) + '</p>' +
        '<p style="margin-top:10px;font-size:14px;"><b>' + trips.length + '</b> ' + t('tour') + (trips.length !== 1 ? 's' : '') + '</p>' +
      '</div>' +
    '</div></section>';

    html += '<section class="section"><div class="container">' + tripGrid(trips) + '</div></section>';

    document.getElementById('app').innerHTML = html;
  }

  function pageCategory(catId) {
    var cat = catById(catId);
    if (!cat) { page404(); return; }
    var trips = ETStore.getTrips().filter(function (x) { return x.category === catId; });

    var html = '<section class="section"><div class="container">' +
      '<div class="breadcrumbs"><a href="#/">' + t('navHome') + '</a> / ' + t('secCategories') + ' / <b>' + esc(t(cat.key)) + '</b></div>' +
      '<div class="hero city-hero" style="margin-top:16px;border-radius:16px;padding:36px;">' +
        '<h1 style="font-size:34px;">' + cat.emoji + ' ' + esc(t(cat.key)) + '</h1>' +
        '<p style="margin-top:10px;font-size:14px;"><b>' + trips.length + '</b> ' + t('tour') + (trips.length !== 1 ? 's' : '') + '</p>' +
      '</div>' +
    '</div></section>';

    html += '<section class="section"><div class="container">' + tripGrid(trips) + '</div></section>';

    document.getElementById('app').innerHTML = html;
  }

  function pageSearch(params) {
    var all = ETStore.getTrips();
    var q = (params.q || '').toLowerCase();
    var cityF = params.city || '';
    var catF = params.category || '';
    var sort = params.sort || 'featured';

    var filtered = all.filter(function (x) {
      var matchQ = !q ||
        tr(x.title).toLowerCase().indexOf(q) !== -1 ||
        tr(x.desc).toLowerCase().indexOf(q) !== -1;
      var matchCity = !cityF || x.city === cityF;
      var matchCat = !catF || x.category === catF;
      return matchQ && matchCity && matchCat;
    });

    if (sort === 'price-asc') filtered.sort(function (a, b) { return a.price - b.price; });
    else if (sort === 'price-desc') filtered.sort(function (a, b) { return b.price - a.price; });
    else if (sort === 'rating') filtered.sort(function (a, b) { return b.rating - a.rating; });
    else filtered.sort(function (a, b) {
      var ba = (a.badges && a.badges.indexOf('bestseller') !== -1) ? 1 : 0;
      var bb = (b.badges && b.badges.indexOf('bestseller') !== -1) ? 1 : 0;
      if (bb !== ba) return bb - ba;
      return b.rating * b.reviews - a.rating * a.reviews;
    });

    var html = '<section class="section"><div class="container">' +
      '<div class="breadcrumbs"><a href="#/">' + t('navHome') + '</a> / ' + t('navCategories') + '</div>' +
      '<div class="section-head" style="margin-top:14px;"><h1 class="section-title">' + t('navCategories') + '</h1></div>' +
      '<div class="toolbar">' +
        '<div class="search-box"><input type="text" id="search-input" placeholder="' + esc(t('searchPlaceholder')) + '" value="' + esc(params.q || '') + '"></div>' +
        '<select id="sort-select">' +
          '<option value="featured"' + (sort === 'featured' ? ' selected' : '') + '>' + t('sortFeatured') + '</option>' +
          '<option value="price-asc"' + (sort === 'price-asc' ? ' selected' : '') + '>' + t('sortPriceAsc') + '</option>' +
          '<option value="price-desc"' + (sort === 'price-desc' ? ' selected' : '') + '>' + t('sortPriceDesc') + '</option>' +
          '<option value="rating"' + (sort === 'rating' ? ' selected' : '') + '>' + t('sortRating') + '</option>' +
        '</select>' +
        '<button class="filters-toggle" id="filters-toggle">⚙️ ' + t('filters') + '</button>' +
        '<div class="filters-panel' + (cityF || catF ? ' open' : '') + '" id="filters-panel">' +
          '<div class="filter-group"><span>' + t('allCities') + '</span><div class="chip-row" id="city-chips">' +
            '<button class="chip' + (!cityF ? ' active' : '') + '" data-city="">' + t('allCities') + '</button>' +
            ET_DATA.cities.map(function (c) {
              return '<button class="chip' + (cityF === c.id ? ' active' : '') + '" data-city="' + c.id + '">' + esc(t(c.key)) + '</button>';
            }).join('') +
          '</div></div>' +
          '<div class="filter-group"><span>' + t('allCategories') + '</span><div class="chip-row" id="cat-chips">' +
            '<button class="chip' + (!catF ? ' active' : '') + '" data-cat="">' + t('allCategories') + '</button>' +
            ET_DATA.categories.map(function (c) {
              return '<button class="chip' + (catF === c.id ? ' active' : '') + '" data-cat="' + c.id + '">' + esc(t(c.key)) + '</button>';
            }).join('') +
          '</div></div>' +
          '<button class="btn btn-outline btn-sm" id="clear-filters">' + t('clearFilters') + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="results-info"><b>' + filtered.length + '</b> ' + (filtered.length === 1 ? t('resultsFound1') : t('resultsFound')) + '</div>' +
      tripGrid(filtered) +
    '</div></section>';

    document.getElementById('app').innerHTML = html;

    var searchInput = document.getElementById('search-input');
    var sortSelect = document.getElementById('sort-select');
    var filtersToggle = document.getElementById('filters-toggle');
    var filtersPanel = document.getElementById('filters-panel');
    var clearBtn = document.getElementById('clear-filters');

    function apply() {
      var p = { q: searchInput.value.trim(), sort: sortSelect.value };
      if (cityF) p.city = cityF;
      if (catF) p.category = catF;
      location.hash = '#/search?' + Object.keys(p).map(function (k) {
        return k + '=' + encodeURIComponent(p[k]);
      }).join('&');
    }

    var debounce;
    searchInput.addEventListener('input', function () {
      clearTimeout(debounce);
      debounce = setTimeout(apply, 400);
    });

    sortSelect.addEventListener('change', apply);

    filtersToggle.addEventListener('click', function () {
      filtersPanel.classList.toggle('open');
    });

    document.querySelectorAll('#city-chips .chip').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('#city-chips .chip').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        cityF = b.getAttribute('data-city');
        apply();
      });
    });

    document.querySelectorAll('#cat-chips .chip').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('#cat-chips .chip').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        catF = b.getAttribute('data-cat');
        apply();
      });
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        location.hash = '#/search?q=' + encodeURIComponent(searchInput.value.trim());
      });
    }
  }

  /* ---------------- Trip detail ---------------- */

  function pageTrip(tripId) {
    var trip = ETStore.getTripById(tripId);
    if (!trip) { page404(); return; }

    var cat = catById(trip.category);
    var city = cityById(trip.city);
    var related = ETStore.getTrips().filter(function (x) {
      return x.id !== trip.id && (x.category === trip.category || x.city === trip.city);
    }).slice(0, 3);

    var facilities = (trip.facilities || []).map(function (f) {
      return '<span class="facility-tag">✓ ' + t(f) + '</span>';
    }).join('');

    var old = trip.oldPrice ? '<span class="old">' + money(trip.oldPrice) + '</span> ' : '';
    var heroImg = ET_MEDIA.image(trip);
    var vid = ET_MEDIA.video(trip);
    var fv = ET_MEDIA.fullVideo(trip);
    var fvHtml = fv
      ? '<div class="video-frame" style="margin-top:14px;"><iframe class="trip-video" src="https://www.youtube-nocookie.com/embed/' + esc(fv.id) + '?rel=0' + (fv.start ? '&start=' + fv.start : '') + '" title="' + t('fullVideo') + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>'
      : '';
    var heroStyle = heroImg
      ? 'background-image:linear-gradient(180deg,rgba(10,61,98,.2),rgba(10,61,98,.6)),url(\'' + heroImg + '\');background-size:cover;background-position:center;'
      : 'background:' + trip.color + ';';

    var html = '<div class="detail-hero" style="' + heroStyle + '">' +
      '<div class="overlay"></div>' +
      '<div class="container">' +
        '<div class="breadcrumbs" style="color:#dbe7f3;"><a href="#/" style="color:#fff;">' + t('navHome') + '</a> / <a href="#/city/' + esc(trip.city) + '" style="color:#fff;">' + esc(t(city.key)) + '</a></div>' +
        '<span class="cat">' + esc(cat ? t(cat.key) : '') + '</span>' +
        '<h1>' + esc(tr(trip.title)) + '</h1>' +
        '<div class="meta">' +
          '<span>📍 ' + esc(t(city.key)) + '</span>' +
          '<span>⏱️ ' + t('duration') + ': ' + trip.duration + 'h</span>' +
          '<span>⭐ ' + trip.rating.toFixed(1) + ' (' + trip.reviews.toLocaleString('en-US') + ' ' + t('reviewCount') + ')</span>' +
        '</div>' +
      '</div>' +
    '</div>';

    html += '<div class="container"><div class="detail-layout">' +

      /* Main column */
      '<div class="detail-main">' +
        '<div class="review-summary" style="margin-bottom:18px;">' +
          '<div class="review-score"><div class="num">' + trip.rating.toFixed(1) + '</div><div class="lbl">' + t('rating') + '</div>' +
          '<div style="color:var(--accent);">' + stars(trip.rating) + '</div></div>' +
          '<div class="review-bars">' +
            [5, 4, 3, 2, 1].map(function (n) {
              var pct = Math.round((trip.reviews * (n === 5 ? 0.72 : n === 4 ? 0.19 : n === 3 ? 0.06 : n === 2 ? 0.02 : 0.01)) / trip.reviews * 100);
              return '<div class="review-bar"><span>' + n + '★</span><div class="bar"><div class="fill" style="width:' + pct + '%"></div></div><span>' + pct + '%</span></div>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<hr style="border:none;border-top:1px solid var(--border);margin:16px 0;">' +
        '<div class="detail-section"><h2>📖 ' + t('overview') + '</h2><p>' + esc(tr(trip.desc)) + '</p></div>' +
        ((vid || fv)
          ? '<div class="detail-section"><h2>🎬 ' + t('tourVideo') + '</h2>' +
            (vid
              ? '<div class="video-frame"><video class="trip-video" controls playsinline muted loop preload="metadata" poster="' + esc(heroImg || '') + '">' +
                '<source src="' + esc(vid) + '" type="' + (vid.indexOf('.mp4') !== -1 ? 'video/mp4' : vid.indexOf('.webm') !== -1 ? 'video/webm' : vid.indexOf('.ogv') !== -1 ? 'video/ogg' : 'video/mp4') + '">' +
                t('videoNotSupported') + '</video></div>'
              : '') +
            fvHtml +
            '</div>'
          : '') +
        '<div class="detail-section"><h2>✨ ' + t('highlights') + '</h2><ul class="highlights">' +
          (trip.highlights || []).map(function (h) { return '<li>' + esc(tr(h)) + '</li>'; }).join('') +
        '</ul></div>' +
        '<div class="detail-section"><h2>✅ ' + t('whatIncluded') + '</h2><ul class="included-list">' +
          (trip.included || []).map(function (i) { return '<li class="in">' + esc(tr(i)) + '</li>'; }).join('') +
        '</ul>' +
        ((trip.notIncluded && trip.notIncluded.length) ?
          '<h2 style="margin-top:14px;">❌ ' + t('notIncluded') + '</h2><ul class="included-list">' +
          trip.notIncluded.map(function (i) { return '<li class="out">' + esc(tr(i)) + '</li>'; }).join('') +
          '</ul>' : '') +
        '</div>' +
        '<div class="detail-section"><h2>🏷️ ' + t('facilities') + '</h2><div class="facilities">' + facilities + '</div></div>' +
      '</div>' +

      /* Sidebar */
      '<div class="detail-side">' +
        '<div style="display:flex;align-items:baseline;gap:6px;"><span class="side-price">' + money(trip.price) + '</span>' + old + '<span class="per">' + t('perPerson') + '</span></div>' +
        '<div class="facilities" style="margin-top:8px;">' +
          (trip.facilities && trip.facilities.indexOf('freeCancellation') !== -1 ? '<span class="facility-tag">🔄 ' + t('freeCancellation') + '</span>' : '') +
          (trip.facilities && trip.facilities.indexOf('instantConfirmation') !== -1 ? '<span class="facility-tag">⚡ ' + t('instantConfirmation') + '</span>' : '') +
          (trip.facilities && trip.facilities.indexOf('mobileTicket') !== -1 ? '<span class="facility-tag">📱 ' + t('mobileTicket') + '</span>' : '') +
          (trip.facilities && trip.facilities.indexOf('pickupIncluded') !== -1 ? '<span class="facility-tag">🚐 ' + t('pickupIncluded') + '</span>' : '') +
          (trip.facilities && trip.facilities.indexOf('skipLine') !== -1 ? '<span class="facility-tag">⏩ ' + t('skipLine') + '</span>' : '') +
          (trip.facilities && trip.facilities.indexOf('guideLive') !== -1 ? '<span class="facility-tag">🎙️ ' + t('guideLive') + '</span>' : '') +
        '</div>' +
        '<div class="book-box" id="book-box">' +
          '<div class="book-row"><label>' + t('selectDate') + '</label><input type="date" id="bk-date" min="' + today() + '" value="' + tomorrow() + '"></div>' +
          '<div class="book-row" style="flex-direction:row;gap:10px;">' +
            '<div style="flex:1;"><label>' + t('adults') + '</label><select id="bk-adults">' + optRange(1, 10) + '</select></div>' +
            '<div style="flex:1;"><label>' + t('children') + '</label><select id="bk-children">' + optRange(0, 8) + '</select></div>' +
          '</div>' +
          '<div class="book-row"><label>' + t('yourName') + '</label><input type="text" id="bk-name" placeholder="' + esc(t('yourNamePh')) + '"></div>' +
          '<div class="book-row"><label>' + t('yourEmail') + '</label><input type="email" id="bk-email" placeholder="' + esc(t('yourEmailPh')) + '"></div>' +
          '<div class="book-row"><label>' + t('yourPhone') + '</label><input type="tel" id="bk-phone" placeholder="' + esc(t('yourPhonePh')) + '"></div>' +
          '<div class="book-row"><label>' + t('paymentMethod') + '</label><select id="bk-pay">' +
            '<option value="cash">💵 ' + t('cashOnPickup') + '</option>' +
            '<option value="wallet">📱 ' + t('payWallet') + '</option>' +
            '<option value="bank">🏦 ' + t('payBank') + '</option>' +
          '</select>' +
          '<div class="pay-info" id="bk-pay-info" style="display:none;margin-top:8px;padding:10px;border-radius:8px;background:var(--bg);font-size:13px;line-height:1.7;"></div></div>' +
          '<div class="book-total"><span>' + t('total') + '</span><span class="total" id="bk-total">' + money(trip.price) + '</span></div>' +
          '<button class="btn btn-primary btn-block" id="bk-submit">🔒 ' + t('confirmBooking') + '</button>' +
          '<p style="font-size:12px;color:var(--muted);text-align:center;">' + t('paymentSimNote') + '</p>' +
        '</div>' +
      '</div>' +
    '</div></div>';

    /* Related */
    if (related.length) {
      html += '<div class="section"><div class="container">' +
        '<div class="section-head"><h2 class="section-title">⭐ ' + t('secPopular') + '</h2></div>' +
        tripGrid(related) +
      '</div></div>';
    }

    document.getElementById('app').innerHTML = html;

    /* Booking logic */
    var adultsSel = document.getElementById('bk-adults');
    var childSel = document.getElementById('bk-children');
    var totalEl = document.getElementById('bk-total');
    var submitBtn = document.getElementById('bk-submit');
    var paySel = document.getElementById('bk-pay');
    var payInfo = document.getElementById('bk-pay-info');

    function payDetails(m) {
      var p = (typeof ET_NOTIFY !== 'undefined' && ET_NOTIFY.payments) ? ET_NOTIFY.payments : null;
      if (m === 'wallet' && p && p.wallet) {
        return '<b>' + esc(p.wallet.label) + ':</b> ' + esc(p.wallet.number);
      }
      if (m === 'bank' && p && p.bank) {
        return '<b>' + esc(p.bank.label) + ':</b> ' + esc(p.bank.account);
      }
      return '';
    }

    function updatePayInfo() {
      var v = paySel.value;
      if (v === 'cash') { payInfo.style.display = 'none'; return; }
      payInfo.style.display = 'block';
      payInfo.innerHTML = esc(t(v === 'wallet' ? 'payWalletDetails' : 'payBankDetails')) + ' ' + payDetails(v);
    }
    paySel.addEventListener('change', updatePayInfo);

    function calcTotal() {
      var a = parseInt(adultsSel.value, 10) || 1;
      var c = parseInt(childSel.value, 10) || 0;
      var total = a * trip.price + c * trip.price * 0.5;
      totalEl.textContent = money(total);
      return { a: a, c: c, total: total };
    }
    adultsSel.addEventListener('change', calcTotal);
    childSel.addEventListener('change', calcTotal);

    submitBtn.addEventListener('click', function () {
      var g = calcTotal();
      var name = document.getElementById('bk-name').value.trim();
      var email = document.getElementById('bk-email').value.trim();
      var phone = document.getElementById('bk-phone').value.trim();
      var date = document.getElementById('bk-date').value;
      var pay = document.getElementById('bk-pay').value;

      if (!name || !email || !phone || !date) {
        toast(t('toastFillForm'), 'error');
        return;
      }
      if (email.indexOf('@') === -1) { toast(t('toastFillForm'), 'error'); return; }

      var booking = ETStore.addBooking({
        tripId: trip.id,
        tripTitle: trip.title,
        tripCity: trip.city,
        tripEmoji: trip.emoji,
        tripColor: trip.color,
        tripImage: heroImg,
        date: date,
        adults: g.a,
        children: g.c,
        name: name,
        email: email,
        phone: phone,
        pricePerAdult: trip.price,
        total: g.total,
        paymentMethod: pay,
        status: 'pending',
        createdAt: new Date().toISOString()
      });

      sendTelegram(booking);
      toast(t('toastBooked'), 'success');
      setTimeout(function () { location.hash = '#/receipt/' + booking.id; }, 500);
    });
  }

  function today() {
    var d = new Date();
    return d.toISOString().split('T')[0];
  }
  function tomorrow() {
    var d = new Date(Date.now() + 86400000);
    return d.toISOString().split('T')[0];
  }
  function optRange(from, to) {
    var out = '';
    for (var i = from; i <= to; i++) out += '<option value="' + i + '"' + (i === (from === 0 ? 0 : 1) ? ' selected' : '') + '>' + i + '</option>';
    return out;
  }

  function payLabel(m) {
    if (m === 'wallet') return t('payWallet');
    if (m === 'bank') return t('payBank');
    return t('cashOnPickup');
  }

  function sendTelegram(b) {
    var cfg = (typeof ET_NOTIFY !== 'undefined' && ET_NOTIFY.telegram) ? ET_NOTIFY.telegram : null;
    if (!cfg || !cfg.botToken || cfg.botToken.indexOf('PASTE') !== -1 || !cfg.chatId || typeof fetch === 'undefined') return;
    var city = cityById(b.tripCity);
    var title = (b.tripTitle && b.tripTitle.ar) ? b.tripTitle.ar : (b.tripTitle && b.tripTitle.en) || '';
    var text = '🛕 *حجز جديد*\n' +
      'رقم الحجز: ' + b.id + '\n' +
      'الرحلة: ' + title + '\n' +
      'المدينة: ' + (city ? t(city.key) : b.tripCity) + '\n' +
      'الاسم: ' + b.name + '\n' +
      'الهاتف: ' + b.phone + '\n' +
      'البريد: ' + b.email + '\n' +
      'التاريخ: ' + b.date + '\n' +
      'الأشخاص: ' + b.adults + ' بالغ + ' + b.children + ' طفل\n' +
      'الإجمالي: $' + b.total.toFixed(2) + '\n' +
      'وسيلة الدفع: ' + payLabel(b.paymentMethod);
    var url = 'https://api.telegram.org/bot' + encodeURIComponent(cfg.botToken) +
      '/sendMessage?chat_id=' + encodeURIComponent(cfg.chatId) +
      '&text=' + encodeURIComponent(text) + '&parse_mode=Markdown';
    try { fetch(url).catch(function () {}); } catch (e) {}
  }

  function fmtDate(iso) {
    try {
      return new Date(iso + 'T00:00:00').toLocaleDateString(I18N.getLang() === 'ar' ? 'ar-EG' : I18N.getLang() === 'ru' ? 'ru-RU' : I18N.getLang() === 'de' ? 'de-DE' : I18N.getLang() === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) { return iso; }
  }

  /* ---------------- Bookings ---------------- */

  function pageBookings() {
    var bookings = ETStore.getBookings();
    var html = '<section class="section"><div class="container">' +
      '<div class="breadcrumbs"><a href="#/">' + t('navHome') + '</a> / ' + t('navMyBookings') + '</div>' +
      '<div class="section-head" style="margin-top:14px;"><h1 class="section-title">🧾 ' + t('myBookingsTitle') + '</h1></div>';

    if (!bookings.length) {
      html += '<div class="empty-state"><span class="emoji">🧾</span><h3>' + t('noBookings') + '</h3><p>' + t('noBookingsSub') + '</p>' +
        '<a class="btn btn-primary mt-3" href="#/">' + t('noBookingsReturn') + '</a></div>';
    } else {
      html += '<div>' + bookings.map(function (b) {
        var city = cityById(b.tripCity);
        var bImg = b.tripImage || '';
        if (!bImg) {
          var bt = ETStore.getTripById(b.tripId);
          if (bt) bImg = ET_MEDIA.image(bt);
        }
        return '<div class="booking-card">' +
          '<div class="bk-thumb" style="background:' + b.tripColor + ';' + (bImg ? 'background-image:url(\'' + bImg + '\');background-size:cover;background-position:center;' : '') + '">' + (bImg ? '' : b.tripEmoji) + '</div>' +
          '<div class="bk-info">' +
            '<h4>' + esc(tr(b.tripTitle)) + '</h4>' +
            '<p>📍 ' + esc(city ? t(city.key) : '') + ' · ' + t('bookingRef') + ': <b>' + esc(b.id) + '</b></p>' +
            '<p>📅 ' + fmtDate(b.date) + ' · 👥 ' + (b.adults + b.children) + ' ' + t('bookingGuests') + ' · ' + money(b.total) + '</p>' +
          '</div>' +
          '<div style="text-align:center;display:flex;flex-direction:column;gap:8px;align-items:center;">' +
            '<span class="bk-status ' + esc(b.status) + '">' + t('status' + b.status.charAt(0).toUpperCase() + b.status.slice(1)) + '</span>' +
            '<a class="btn btn-outline btn-sm" href="#/receipt/' + esc(b.id) + '">' + t('printReceipt') + '</a>' +
            (b.status !== 'cancelled' ?
              '<button class="btn btn-danger btn-sm" data-cancel="' + esc(b.id) + '">' + t('cancelBooking') + '</button>' : '') +
          '</div>' +
        '</div>';
      }).join('') + '</div>';
    }
    html += '</div></section>';

    document.getElementById('app').innerHTML = html;

    document.querySelectorAll('[data-cancel]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        ETStore.updateBooking(btn.getAttribute('data-cancel'), { status: 'cancelled' });
        toast(t('toastCancelled'), '');
        pageBookings();
      });
    });
  }

  /* ---------------- Receipt ---------------- */

  function pageReceipt(bookingId) {
    var b = ETStore.getBookings().find(function (x) { return x.id === bookingId; });
    if (!b) { page404(); return; }
    var city = cityById(b.tripCity);
    var statusKey = 'status' + b.status.charAt(0).toUpperCase() + b.status.slice(1);

    var html = '<section class="section"><div class="container"><div class="receipt">' +
      '<div class="check">🎉</div>' +
      '<h2>' + t('bookingConfirmed') + '</h2>' +
      '<p class="muted">' + t('receiptSub') + '</p>' +
      '<div class="ref">' + t('reference') + ': ' + esc(b.id) + '</div>' +
      '<span class="bk-status ' + esc(b.status) + '">' + t(statusKey) + '</span>' +
      '<table>' +
        '<tr><th style="background:transparent;">' + t('tripSummary') + '</th><td></td></tr>' +
        '<tr><td style="color:var(--muted);">' + t('tour') + '</td><td><b>' + esc(tr(b.tripTitle)) + '</b></td></tr>' +
        '<tr><td style="color:var(--muted);">' + t('tableCity') + '</td><td>' + esc(city ? t(city.key) : '') + '</td></tr>' +
        '<tr><td style="color:var(--muted);">' + t('tableDate') + '</td><td>' + fmtDate(b.date) + '</td></tr>' +
        '<tr><td style="color:var(--muted);">' + t('bookingGuests') + '</td><td>' + b.adults + ' ' + t('adults') + ' · ' + b.children + ' ' + t('children') + '</td></tr>' +
        '<tr><td style="color:var(--muted);">' + t('tableTotal') + '</td><td><b>' + money(b.total) + '</b></td></tr>' +
      '</table>' +
      '<table>' +
        '<tr><th style="background:transparent;">' + t('yourDetails') + '</th><td></td></tr>' +
        '<tr><td style="color:var(--muted);">' + t('yourName') + '</td><td>' + esc(b.name) + '</td></tr>' +
        '<tr><td style="color:var(--muted);">' + t('yourEmail') + '</td><td>' + esc(b.email) + '</td></tr>' +
        '<tr><td style="color:var(--muted);">' + t('yourPhone') + '</td><td>' + esc(b.phone) + '</td></tr>' +
        '<tr><td style="color:var(--muted);">' + t('paymentMethod') + '</td><td>' + esc(payLabel(b.paymentMethod)) + (b.paymentMethod === 'wallet' && ET_NOTIFY.payments.wallet ? ' — ' + esc(ET_NOTIFY.payments.wallet.number) : b.paymentMethod === 'bank' && ET_NOTIFY.payments.bank ? ' — ' + esc(ET_NOTIFY.payments.bank.account) : '') + '</td></tr>' +
      '</table>' +
      '<div class="form-actions" style="justify-content:center;">' +
        '<a class="btn btn-primary" href="#/">' + t('goHome') + '</a>' +
        '<a class="btn btn-outline" href="#/bookings">' + t('viewBookings') + '</a>' +
        '<button class="btn btn-dark" id="print-btn">🖨️ ' + t('printReceipt') + '</button>' +
      '</div>' +
    '</div></div></section>';

    document.getElementById('app').innerHTML = html;

    var printBtn = document.getElementById('print-btn');
    if (printBtn) printBtn.addEventListener('click', function () { window.print(); });
  }

  function page404() {
    var html = '<section class="section"><div class="container">' +
      '<div class="empty-state"><span class="emoji">🧭</span><h3>404</h3><p>' + t('emptyResults') + '</p>' +
      '<a class="btn btn-primary mt-3" href="#/">' + t('goHome') + '</a></div>' +
    '</div></section>';
    document.getElementById('app').innerHTML = html;
  }

  /* ---------------- Router ---------------- */

  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('?');
    var path = parts[0] || '';
    var qs = parts[1] || '';
    var params = {};
    qs.split('&').forEach(function (kv) {
      if (!kv) return;
      var i = kv.indexOf('=');
      if (i === -1) params[decodeURIComponent(kv)] = '';
      else params[decodeURIComponent(kv.slice(0, i))] = decodeURIComponent(kv.slice(i + 1));
    });
    return { path: path, params: params };
  }

  function route() {
    var r = parseHash();
    var seg = r.path.split('/').filter(Boolean);

    document.body.classList.toggle('is-home', !seg.length);

    window.scrollTo(0, 0);

    if (!seg.length) pageHome();
    else if (seg[0] === 'cities') pageCities();
    else if (seg[0] === 'categories') pageCategories();
    else if (seg[0] === 'city' && seg[1]) pageCity(seg[1]);
    else if (seg[0] === 'category' && seg[1]) pageCategory(seg[1]);
    else if (seg[0] === 'search') pageSearch(r.params);
    else if (seg[0] === 'trip' && seg[1]) pageTrip(seg[1]);
    else if (seg[0] === 'bookings') pageBookings();
    else if (seg[0] === 'receipt' && seg[1]) pageReceipt(seg[1]);
    else if (seg[0] === 'admin') { if (typeof Admin !== 'undefined' && Admin.render) Admin.render(); else page404(); }
    else page404();

    updateHeader();
    renderFAB();
    document.getElementById('fab').onclick = function () { location.hash = '#/bookings'; };
  }

  function updateHeader() {
    var r = parseHash();
    var seg = r.path.split('/').filter(Boolean);
    var active = '';
    if (!seg.length) active = '#/';
    else if (seg[0] === 'city' && seg[1] === 'sharm-el-sheikh') active = '#/sharm-el-sheikh';
    else if (seg[0] === 'city' && seg[1] === 'hurghada') active = '#/hurghada';
    else if (seg[0] === 'city' && seg[1] === 'cairo') active = '#/cairo';
    else if (seg[0] === 'cities') active = '#/cities';
    else if (seg[0] === 'categories' || seg[0] === 'search') active = '#/categories';

    document.querySelectorAll('.main-nav a, .drawer-panel nav a').forEach(function (a) {
      var href = a.getAttribute('href');
      a.classList.toggle('active', href === active);
    });
  }

  function renderFAB() {
    var fab = document.getElementById('fab');
    var r = parseHash();
    var seg = r.path.split('/').filter(Boolean);
    if (seg[0] === 'trip') fab.style.display = 'grid';
    else fab.style.display = 'none';
  }

  /* ---------------- Events ---------------- */

  function bindGlobalEvents() {
    /* Language switcher */
    var langBtn = document.getElementById('lang-btn');
    var langMenu = document.getElementById('lang-menu');
    if (langBtn) langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langMenu.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (langMenu && !langMenu.contains(e.target) && e.target !== langBtn) langMenu.classList.remove('open');
    });
    langMenu.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function () {
        var pick = b.getAttribute('data-lang');
        if (pick === 'auto') I18N.setAuto();
        else I18N.setLang(pick, true);
        langMenu.classList.remove('open');
        route();
      });
    });

    /* Mobile drawer */
    var drawer = document.getElementById('nav-drawer');
    var toggle = document.getElementById('menu-toggle');
    var close = document.getElementById('drawer-close');
    var backdrop = document.getElementById('drawer-backdrop');
    if (toggle) toggle.addEventListener('click', function () { drawer.classList.add('open'); });
    if (close) close.addEventListener('click', function () { drawer.classList.remove('open'); });
    if (backdrop) backdrop.addEventListener('click', function () { drawer.classList.remove('open'); });
    document.querySelectorAll('#nav-drawer nav a').forEach(function (a) {
      a.addEventListener('click', function () { drawer.classList.remove('open'); });
    });

    /* Favorites (delegated) */
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-fav]');
      if (!btn) return;
      e.preventDefault();
      var id = btn.getAttribute('data-fav');
      var added = ETStore.toggleFavorite(id);
      toast(added ? t('toastSaved') : t('toastRemoved'), added ? 'success' : '');
      btn.classList.toggle('saved', added);
      btn.textContent = added ? '❤️' : '🤍';
    });

    /* Header active links on nav */
    document.querySelectorAll('.main-nav a').forEach(function (a) {
      a.addEventListener('click', function () { route(); });
    });

    window.addEventListener('hashchange', route);

    /* PWA install prompt */
    var deferredPrompt = null;
    var installBtn = document.getElementById('install-btn');
    if (installBtn) {
      installBtn.addEventListener('click', function () {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function (choice) {
          if (choice && choice.outcome === 'accepted') installBtn.style.display = 'none';
          deferredPrompt = null;
        });
      });
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        deferredPrompt = e;
        if (installBtn) installBtn.style.display = 'inline-flex';
      });
      window.addEventListener('appinstalled', function () {
        deferredPrompt = null;
        if (installBtn) installBtn.style.display = 'none';
      });
    }
  }

  /* Golden floating particles across the whole site */
  function seedDust() {
    var wrap = document.getElementById('dust');
    if (!wrap) return;
    var i, n = 18, s;
    for (i = 0; i < n; i++) {
      s = document.createElement('span');
      s.style.left = (Math.random() * 100).toFixed(2) + '%';
      s.style.width = s.style.height = (2 + Math.random() * 5).toFixed(1) + 'px';
      s.style.animationDelay = (-Math.random() * 18).toFixed(2) + 's';
      s.style.animationDuration = (12 + Math.random() * 16).toFixed(1) + 's';
      if (s.style.setProperty) {
        s.style.setProperty('--dust-o', (0.15 + Math.random() * 0.4).toFixed(2));
      }
      wrap.appendChild(s);
    }
  }

  /* ---------------- Init ---------------- */

  function init() {
    I18N.setLang(I18N.getLang());
    seedDust();
    bindGlobalEvents();
    route();
  }

  document.addEventListener('DOMContentLoaded', init);
  if (document.readyState !== 'loading') init();
})();
