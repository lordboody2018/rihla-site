/* =========================================================
   Rihla — Admin Panel
   ========================================================= */

var Admin = (function () {
  var t = I18N.t;
  var L = I18N.getLang;
  var state = { view: 'login', editId: null };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function tr(obj) { return (obj && obj[L()]) || (obj && obj.en) || ''; }
  function money(n) { return '$' + (Math.round(n * 100) / 100).toLocaleString('en-US'); }
  function langName(l) { return { ar: 'العربية', en: 'English', de: 'Deutsch', fr: 'Français', ru: 'Русский' }[l]; }
  function cityById(id) { return ET_DATA.cities.find(function (c) { return c.id === id; }); }
  function catById(id) { return ET_DATA.categories.find(function (c) { return c.id === id; }); }

  function toast(msg, type) {
    var root = document.getElementById('toast-root');
    var el = document.createElement('div');
    el.className = 'toast ' + (type || '');
    el.textContent = msg;
    root.appendChild(el);
    setTimeout(function () { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2600);
    setTimeout(function () { el.remove(); }, 3000);
  }

  /* ---------------- Login ---------------- */

  function renderLogin() {
    var html = '<div class="auth-card">' +
      '<div style="text-align:center;font-size:44px;">🛕</div>' +
      '<h2>' + t('adminTitle') + '</h2>' +
      '<p class="sub">' + t('adminLoginSub') + '</p>' +
      '<div class="form-group mb-3"><label>' + t('adminPassword') + '</label>' +
        '<input type="password" id="admin-pass" placeholder="••••••••"></div>' +
      '<button class="btn btn-primary btn-block" id="admin-login">🔐 ' + t('loginBtn') + '</button>' +
      '<p class="muted text-center mt-3" style="font-size:12px;">' + t('adminHint') + '</p>' +
    '</div>';
    document.getElementById('app').innerHTML = html;

    var pass = document.getElementById('admin-pass');
    var btn = document.getElementById('admin-login');
    function tryLogin() {
      if (pass.value === ETStore.getPassword()) {
        ETStore.setAuth(true);
        state.view = 'dashboard';
        render();
      } else {
        toast(t('toastLoginError'), 'error');
      }
    }
    btn.addEventListener('click', tryLogin);
    pass.addEventListener('keydown', function (e) { if (e.key === 'Enter') tryLogin(); });
    pass.focus();
  }

  /* ---------------- Dashboard ---------------- */

  function renderDashboard() {
    var trips = ETStore.getTrips();
    var bookings = ETStore.getBookings();
    var revenue = bookings.filter(function (b) { return b.status !== 'cancelled'; })
      .reduce(function (sum, b) { return sum + b.total; }, 0);
    var pending = bookings.filter(function (b) { return b.status === 'pending'; }).length;
    var cities = trips.reduce(function (acc, x) { acc[x.city] = (acc[x.city] || 0) + 1; return acc; }, {});

    var html = '<div class="section-head" style="margin-top:24px;"><h1 class="section-title">📊 ' + t('dashboard') + '</h1></div>' +
      '<div class="stats-grid">' +
        '<div class="stat-card"><div class="num">' + trips.length + '</div><div class="lbl">' + t('statsTrips') + '</div></div>' +
        '<div class="stat-card"><div class="num">' + bookings.length + '</div><div class="lbl">' + t('statsBookings') + '</div></div>' +
        '<div class="stat-card"><div class="num">' + money(revenue) + '</div><div class="lbl">' + t('statsRevenue') + '</div></div>' +
        '<div class="stat-card"><div class="num">' + pending + '</div><div class="lbl">' + t('statsPending') + '</div></div>' +
      '</div>' +
      '<div class="form-card"><h3>🌍 ' + t('tableCity') + '</h3>' +
        '<div class="facilities">' +
          Object.keys(cities).map(function (cid) {
            var c = cityById(cid);
            return '<span class="facility-tag">' + (c ? t(c.key) : cid) + ': <b>' + cities[cid] + '</b></span>';
          }).join('') +
        '</div>' +
      '</div>';

    return html;
  }

  /* ---------------- Trips list ---------------- */

  function renderTrips() {
    var trips = ETStore.getTrips();
    var html = '<div class="section-head" style="margin-top:24px;">' +
      '<h1 class="section-title">🗺️ ' + t('manageTrips') + '</h1>' +
      '<button class="btn btn-primary" id="new-trip-btn">＋ ' + t('addTrip') + '</button>' +
    '</div>' +
    '<div class="table-wrap"><table><thead><tr>' +
      '<th>' + t('tableTour') + '</th><th>' + t('tableCity') + '</th><th>' + t('navCategories') + '</th>' +
      '<th>' + t('tablePrice') + '</th><th>' + t('rating') + '</th><th>' + t('tableActions') + '</th>' +
    '</tr></thead><tbody>';

    trips.forEach(function (trip) {
      var c = cityById(trip.city), k = catById(trip.category);
      html += '<tr>' +
        '<td><b>' + esc(tr(trip.title)) + '</b><br><span class="muted" style="font-size:12px;">' + trip.emoji + '</span></td>' +
        '<td>' + esc(c ? t(c.key) : '') + '</td>' +
        '<td>' + esc(k ? t(k.key) : '') + '</td>' +
        '<td><b>' + money(trip.price) + '</b>' + (trip.oldPrice ? ' <span class="muted" style="text-decoration:line-through;">' + money(trip.oldPrice) + '</span>' : '') + '</td>' +
        '<td>⭐ ' + trip.rating.toFixed(1) + '</td>' +
        '<td><button class="btn btn-dark btn-sm" data-edit="' + esc(trip.id) + '">✏️ ' + t('editTrip') + '</button> ' +
            '<button class="btn btn-danger btn-sm" data-del="' + esc(trip.id) + '">🗑️ ' + t('deleteTrip') + '</button></td>' +
      '</tr>';
    });

    html += '</tbody></table></div>';
    return html;
  }

  /* ---------------- Bookings ---------------- */

  function renderBookings() {
    var bookings = ETStore.getBookings();
    var html = '<div class="section-head" style="margin-top:24px;"><h1 class="section-title">🧾 ' + t('manageBookings') + '</h1></div>';

    if (!bookings.length) {
      html += '<div class="empty-state"><span class="emoji">🧾</span><h3>' + t('noBookings') + '</h3></div>';
      return html;
    }

    html += '<div class="table-wrap"><table><thead><tr>' +
      '<th>' + t('bookingRef') + '</th><th>' + t('tableName') + '</th><th>' + t('tableTour') + '</th>' +
      '<th>' + t('tableDate') + '</th><th>' + t('tableGuests') + '</th><th>' + t('paymentMethod') + '</th><th>' + t('tableTotal') + '</th>' +
      '<th>' + t('tableStatus') + '</th><th>' + t('tableActions') + '</th>' +
    '</tr></thead><tbody>';

    bookings.forEach(function (b) {
      var statusBadge = 'bk-status ' + esc(b.status);
      html += '<tr>' +
        '<td><b>' + esc(b.id) + '</b></td>' +
        '<td>' + esc(b.name) + '<br><span class="muted" style="font-size:12px;">' + esc(b.email) + '</span></td>' +
        '<td>' + esc(tr(b.tripTitle)) + '</td>' +
        '<td>' + esc(b.date) + '</td>' +
        '<td>' + b.adults + '+' + b.children + '</td>' +
        '<td>' + esc(b.paymentMethod === 'wallet' ? t('payWallet') : b.paymentMethod === 'bank' ? t('payBank') : t('cashOnPickup')) + '</td>' +
        '<td><b>' + money(b.total) + '</b></td>' +
        '<td><select class="bk-status-select" data-bk="' + esc(b.id) + '" style="padding:6px;border-radius:8px;border:1px solid var(--border);">' +
          '<option value="pending"' + (b.status === 'pending' ? ' selected' : '') + '>' + t('statusPending') + '</option>' +
          '<option value="confirmed"' + (b.status === 'confirmed' ? ' selected' : '') + '>' + t('statusConfirmed') + '</option>' +
          '<option value="cancelled"' + (b.status === 'cancelled' ? ' selected' : '') + '>' + t('statusCancelled') + '</option>' +
        '</select></td>' +
        '<td><button class="btn btn-danger btn-sm" data-bkdel="' + esc(b.id) + '">🗑️</button></td>' +
      '</tr>';
    });

    html += '</tbody></table></div>';
    return html;
  }

  /* ---------------- Trip form ---------------- */

  var LANGS = ['ar', 'en', 'de', 'fr', 'ru'];

  function renderTripForm(trip) {
    var isNew = !trip;
    trip = trip || {
      title: {}, desc: {}, highlights: [], included: [], notIncluded: [],
      city: 'sharm-el-sheikh', category: 'snorkeling', price: 30, oldPrice: '',
      duration: 4, rating: 4.5, reviews: 100, emoji: '🏝️', color: 'linear-gradient(135deg,#16a085,#0b6e5a)',
      featured: false, badges: [], facilities: ['freeCancellation', 'instantConfirmation', 'mobileTicket']
    };

    function field(lang) {
      var rows = [];
      rows.push('<div class="form-group"><label class="required">' + t('fieldTitle') + ' — ' + langName(lang) + '</label>' +
        '<input type="text" data-lang="' + lang + '" data-field="title" value="' + esc(trip.title[lang] || '') + '"></div>');
      rows.push('<div class="form-group full"><label>' + t('fieldDesc') + ' — ' + langName(lang) + '</label>' +
        '<textarea data-lang="' + lang + '" data-field="desc" rows="3">' + esc(trip.desc[lang] || '') + '</textarea></div>');
      rows.push('<div class="form-group full"><label>' + t('fieldHighlights') + ' — ' + langName(lang) + '</label>' +
        '<textarea data-lang="' + lang + '" data-field="highlights" rows="3" placeholder="' + t('fieldHighlights') + '">' +
        (trip.highlights || []).map(function (h) { return esc(h[lang] || ''); }).join('\n') + '</textarea></div>');
      rows.push('<div class="form-group full"><label>' + t('fieldIncluded') + ' — ' + langName(lang) + '</label>' +
        '<textarea data-lang="' + lang + '" data-field="included" rows="3">' +
        (trip.included || []).map(function (i) { return esc(i[lang] || ''); }).join('\n') + '</textarea></div>');
      rows.push('<div class="form-group full"><label>' + t('fieldNotIncluded') + ' — ' + langName(lang) + '</label>' +
        '<textarea data-lang="' + lang + '" data-field="notIncluded" rows="2">' +
        ((trip.notIncluded || []).map(function (i) { return esc(i[lang] || ''); }).join('\n')) + '</textarea></div>');
      return rows.join('');
    }

    function facilityCheck(key) {
      var has = (trip.facilities || []).indexOf(key) !== -1;
      return '<label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;"><input type="checkbox" data-fac="' + key + '"' + (has ? ' checked' : '') + '> ' + t(key) + '</label>';
    }
    function badgeCheck(key) {
      var has = (trip.badges || []).indexOf(key) !== -1;
      return '<label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;"><input type="checkbox" data-badge="' + key + '"' + (has ? ' checked' : '') + '> ' + t(key === 'bestseller' ? 'bestseller' : 'newTrip') + '</label>';
    }

    var html = '<div class="section-head" style="margin-top:24px;">' +
      '<h1 class="section-title">' + (isNew ? '＋ ' + t('addTrip') : '✏️ ' + t('editTrip')) + '</h1>' +
      '<button class="btn btn-outline" id="back-list-btn">← ' + t('backToList') + '</button>' +
    '</div>';

    html += '<div class="form-card"><h3>📋 ' + t('tripFormTitle') + '</h3><div class="form-grid">' +
      '<div class="form-group"><label class="required">' + t('fieldCity') + '</label><select id="f-city">' +
        ET_DATA.cities.map(function (c) { return '<option value="' + c.id + '"' + (trip.city === c.id ? ' selected' : '') + '>' + esc(t(c.key)) + '</option>'; }).join('') +
      '</select></div>' +
      '<div class="form-group"><label class="required">' + t('fieldCategory') + '</label><select id="f-category">' +
        ET_DATA.categories.map(function (c) { return '<option value="' + c.id + '"' + (trip.category === c.id ? ' selected' : '') + '>' + esc(t(c.key)) + '</option>'; }).join('') +
      '</select></div>' +
      '<div class="form-group"><label class="required">' + t('fieldPrice') + '</label><input type="number" id="f-price" min="0" step="0.01" value="' + trip.price + '"></div>' +
      '<div class="form-group"><label>' + t('fieldOldPrice') + '</label><input type="number" id="f-old" min="0" step="0.01" value="' + (trip.oldPrice || '') + '"></div>' +
      '<div class="form-group"><label>' + t('fieldDuration') + '</label><input type="number" id="f-duration" min="0" value="' + trip.duration + '"></div>' +
      '<div class="form-group"><label>' + t('fieldRating') + '</label><input type="number" id="f-rating" min="0" max="5" step="0.1" value="' + trip.rating + '"></div>' +
      '<div class="form-group"><label>' + t('fieldReviews') + '</label><input type="number" id="f-reviews" min="0" value="' + trip.reviews + '"></div>' +
    '</div></div>';

    html += '<div class="form-card"><h3>🎨 ' + t('tripMedia') + '</h3><div class="form-grid">' +
      '<div class="form-group"><label>' + t('imgEmoji') + '</label><input type="text" id="f-emoji" value="' + esc(trip.emoji) + '"></div>' +
      '<div class="form-group"><label>' + t('imgColor') + '</label><input type="text" id="f-color" value="' + esc(trip.color) + '"></div>' +
      '<div class="form-group full"><label>' + t('imgImage') + '</label>' +
        '<input type="text" id="f-image" dir="ltr" placeholder="https://..." value="' + esc(trip.image || '') + '">' +
        '<div class="img-preview" id="f-image-preview" data-target="f-image"></div></div>' +
      '<div class="form-group full"><label>' + t('imgVideo') + '</label>' +
        '<input type="text" id="f-video" dir="ltr" placeholder="https://... (اختياري — webm / ogv / mp4)" value="' + esc(trip.video || '') + '"></div>' +
      '<div class="form-group"><label>Badges</label><div style="display:flex;gap:14px;flex-wrap:wrap;">' +
        badgeCheck('bestseller') + badgeCheck('newTrip') + '</div></div>' +
      '<div class="form-group"><label>⭐ ' + t('facilities') + '</label><div style="display:flex;gap:10px;flex-wrap:wrap;">' +
        facilityCheck('freeCancellation') + facilityCheck('instantConfirmation') + facilityCheck('mobileTicket') +
        facilityCheck('pickupIncluded') + facilityCheck('skipLine') + facilityCheck('guideLive') + '</div></div>' +
    '</div></div>';

    html += '<div class="form-card"><h3>🌐 ' + t('tripTransTitle') + '</h3><div class="form-grid">' +
      LANGS.map(field).join('') +
    '</div></div>';

    html += '<div class="form-actions">' +
      '<button class="btn btn-primary" id="save-trip-btn">💾 ' + t('saveTrip') + '</button>' +
      '<button class="btn btn-outline" id="cancel-trip-btn">' + t('cancel') + '</button>' +
    '</div>';

    document.getElementById('app').innerHTML = html;

    var backBtn = document.getElementById('back-list-btn');
    var cancelBtn = document.getElementById('cancel-trip-btn');
    if (backBtn) backBtn.addEventListener('click', function () { state.view = 'trips'; render(); });
    if (cancelBtn) cancelBtn.addEventListener('click', function () { state.view = 'trips'; render(); });

    /* Live image preview */
    var imgInput = document.getElementById('f-image');
    var imgPreview = document.getElementById('f-image-preview');
    if (imgInput && imgPreview) {
      function updatePreview() {
        var v = imgInput.value.trim();
        if (v) imgPreview.innerHTML = '<img src="' + esc(v) + '" alt="" onerror="this.closest(\'.img-preview\').innerHTML=\'' + esc(t('imgPreviewFail')) + '\';">';
        else imgPreview.innerHTML = '';
      }
      imgInput.addEventListener('input', updatePreview);
      updatePreview();
    }

    var saveBtn = document.getElementById('save-trip-btn');
    saveBtn.addEventListener('click', function () {
      var newTitle = {}, newDesc = {}, newHigh = {}, newInc = {}, newNot = {};

      document.querySelectorAll('[data-lang]').forEach(function (el) {
        var lang = el.getAttribute('data-lang');
        var field = el.getAttribute('data-field');
        if (field === 'title') newTitle[lang] = el.value.trim();
        else if (field === 'desc') newDesc[lang] = el.value.trim();
        else if (field === 'highlights') newHigh[lang] = el.value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
        else if (field === 'included') newInc[lang] = el.value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
        else if (field === 'notIncluded') newNot[lang] = el.value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
      });

      /* Rebuild localized arrays */
      function buildArrays(maps) {
        var maxLen = 0;
        LANGS.forEach(function (l) { maxLen = Math.max(maxLen, (maps[l] || []).length); });
        var out = [];
        for (var i = 0; i < maxLen; i++) {
          var obj = {};
          LANGS.forEach(function (l) { obj[l] = (maps[l] || [])[i] || ''; });
          out.push(obj);
        }
        return out;
      }

      if (!newTitle.en || !newTitle.ar) { toast(t('toastFillForm'), 'error'); return; }

      var facilities = [];
      document.querySelectorAll('[data-fac]:checked').forEach(function (el) { facilities.push(el.getAttribute('data-fac')); });
      var badges = [];
      document.querySelectorAll('[data-badge]:checked').forEach(function (el) { badges.push(el.getAttribute('data-badge')); });

      var data = {
        id: trip.id || ETStore.genId(),
        city: document.getElementById('f-city').value,
        category: document.getElementById('f-category').value,
        price: parseFloat(document.getElementById('f-price').value) || 0,
        oldPrice: parseFloat(document.getElementById('f-old').value) || null,
        duration: parseInt(document.getElementById('f-duration').value, 10) || 1,
        rating: parseFloat(document.getElementById('f-rating').value) || 4.5,
        reviews: parseInt(document.getElementById('f-reviews').value, 10) || 0,
        emoji: document.getElementById('f-emoji').value || '🏝️',
        color: document.getElementById('f-color').value || 'linear-gradient(135deg,#16a085,#0b6e5a)',
        image: document.getElementById('f-image').value.trim(),
        video: document.getElementById('f-video').value.trim(),
        featured: false,
        badges: badges,
        facilities: facilities,
        title: newTitle,
        desc: newDesc,
        highlights: buildArrays(newHigh),
        included: buildArrays(newInc),
        notIncluded: buildArrays(newNot)
      };

      var trips = ETStore.getTrips();
      var idx = trips.findIndex(function (x) { return x.id === data.id; });
      if (idx === -1) {
        trips.push(data);
        toast(t('toastTripAdded'), 'success');
      } else {
        trips[idx] = data;
        toast(t('toastTripUpdated'), 'success');
      }
      ETStore.saveTrips(trips);
      state.view = 'trips';
      render();
    });
  }

  /* ---------------- Change password ---------------- */

  function renderPassword() {
    var html = '<div class="form-card"><h3>🔑 ' + t('changePassword') + '</h3>' +
      '<div class="form-grid"><div class="form-group"><label>' + t('newPassword') + '</label>' +
      '<input type="password" id="new-pass" placeholder="••••••••"></div></div>' +
      '<div class="form-actions"><button class="btn btn-primary" id="save-pass-btn">💾 ' + t('savePassword') + '</button></div>' +
    '</div>';
    return html;
  }

  /* ---------------- Render ---------------- */

  function render() {
    if (!ETStore.isAuthed()) {
      state.view = 'login';
      renderLogin();
      return;
    }

    var tabs = [
      ['dashboard', '📊 ' + t('dashboard')],
      ['trips', '🗺️ ' + t('manageTrips')],
      ['bookings', '🧾 ' + t('manageBookings')],
      ['password', '🔑 ' + t('changePassword')]
    ];

    var html = '<div class="container admin-page">' +
      '<div class="breadcrumbs"><a href="#/">' + t('navHome') + '</a> / ' + t('adminTitle') + '</div>' +
      '<div class="section-head" style="margin-top:16px;">' +
        '<h1 class="section-title">⚙️ ' + t('adminTitle') + '</h1>' +
        '<button class="btn btn-danger" id="logout-btn">🚪 ' + t('logout') + '</button>' +
      '</div>' +
      '<div class="admin-tabs">' +
        tabs.map(function (tab) {
          return '<button class="admin-tab' + (state.view === tab[0] ? ' active' : '') + '" data-view="' + tab[0] + '">' + tab[1] + '</button>';
        }).join('') +
      '</div>';

    var body = '';
    if (state.view === 'dashboard') body = renderDashboard();
    else if (state.view === 'trips') body = renderTrips();
    else if (state.view === 'bookings') body = renderBookings();
    else if (state.view === 'password') body = renderPassword();
    else if (state.view === 'edit' || state.view === 'new') { renderTripForm(state.editId ? ETStore.getTripById(state.editId) : null); return; }
    else { state.view = 'dashboard'; body = renderDashboard(); }

    html += body + '</div>';

    document.getElementById('app').innerHTML = html;

    var logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.addEventListener('click', function () {
      ETStore.setAuth(false);
      state.view = 'login';
      render();
    });

    document.querySelectorAll('.admin-tab').forEach(function (b) {
      b.addEventListener('click', function () {
        state.view = b.getAttribute('data-view');
        render();
      });
    });

    /* Trips table actions */
    document.querySelectorAll('[data-edit]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.view = 'edit';
        state.editId = b.getAttribute('data-edit');
        render();
      });
    });
    document.querySelectorAll('[data-del]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-del');
        if (!confirm(t('confirmDeleteTrip'))) return;
        var trips = ETStore.getTrips().filter(function (x) { return x.id !== id; });
        ETStore.saveTrips(trips);
        toast(t('toastTripDeleted'), '');
        state.view = 'trips';
        render();
      });
    });
    var newBtn = document.getElementById('new-trip-btn');
    if (newBtn) newBtn.addEventListener('click', function () {
      state.view = 'new';
      state.editId = null;
      render();
    });

    /* Bookings actions */
    document.querySelectorAll('[data-bk]').forEach(function (sel) {
      sel.addEventListener('change', function () {
        ETStore.updateBooking(sel.getAttribute('data-bk'), { status: sel.value });
        toast(t('toastTripUpdated'), 'success');
      });
    });
    document.querySelectorAll('[data-bkdel]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-bkdel');
        var bks = ETStore.getBookings().filter(function (x) { return x.id !== id; });
        ETStore.saveBookings(bks);
        state.view = 'bookings';
        render();
      });
    });

    /* Password */
    var savePassBtn = document.getElementById('save-pass-btn');
    if (savePassBtn) savePassBtn.addEventListener('click', function () {
      var np = document.getElementById('new-pass').value.trim();
      if (!np) { toast(t('toastFillForm'), 'error'); return; }
      ETStore.setPassword(np);
      toast(t('toastPasswordChanged'), 'success');
      document.getElementById('new-pass').value = '';
    });
  }

  return { render: render };
})();
