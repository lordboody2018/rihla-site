/* =========================================================
   Rihla — Store (localStorage persistence)
   ========================================================= */

/* Notification + payment settings.
   Telegram: create a bot via @BotFather, then get your chat
   id from @userinfobot, and paste both below.
   NOTE: this is a static site, so the bot token is visible in
   the page source. Use a dedicated bot for the site. */
var ET_NOTIFY = {
  telegram: {
    botToken: '8904850964:AAE6w58eY-8UmpVEdMKZzRvH52M3jD-By8U',
    chatId: '7053623540'
  },
  payments: {
    wallet: { label: 'Vodafone Cash', number: '0100 250 2353' },
    bank: { label: 'البنك الأهلي المصري', account: '00 0000 0000 0000 0000' }
  }
};

var ETStore = (function () {
  var KEYS = {
    trips: 'et_trips_v3',
    bookings: 'et_bookings_v1',
    favorites: 'et_favorites_v1',
    auth: 'et_admin_auth',
    password: 'et_admin_pass'
  };

  var DEFAULT_PASSWORD = 'M@sr1-Sharm-2026!';

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }

  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  function getTrips() {
    var stored = read(KEYS.trips, null);
    if (stored === null) {
      write(KEYS.trips, ET_DATA.trips);
      return ET_DATA.trips.slice();
    }
    return stored;
  }

  function saveTrips(trips) { write(KEYS.trips, trips); }

  function resetTrips() {
    localStorage.removeItem(KEYS.trips);
    return ET_DATA.trips.slice();
  }

  function getBookings() { return read(KEYS.bookings, []); }
  function saveBookings(b) { write(KEYS.bookings, b); }

  function addBooking(booking) {
    var b = getBookings();
    booking.id = 'BK-' + Date.now().toString(36).toUpperCase() + Math.floor(Math.random() * 999);
    b.unshift(booking);
    saveBookings(b);
    return booking;
  }

  function updateBooking(id, patch) {
    var b = getBookings();
    var i = b.findIndex(function (x) { return x.id === id; });
    if (i !== -1) {
      var merged = {};
      for (var k in b[i]) if (b[i].hasOwnProperty(k)) merged[k] = b[i][k];
      for (var p in patch) if (patch.hasOwnProperty(p)) merged[p] = patch[p];
      b[i] = merged;
      saveBookings(b);
    }
  }

  function getFavorites() { return read(KEYS.favorites, []); }
  function saveFavorites(f) { write(KEYS.favorites, f); }
  function isFavorite(id) { return getFavorites().indexOf(id) !== -1; }
  function toggleFavorite(id) {
    var f = getFavorites();
    var i = f.indexOf(id);
    if (i === -1) { f.push(id); saveFavorites(f); return true; }
    f.splice(i, 1); saveFavorites(f); return false;
  }

  function getPassword() { return read(KEYS.password, DEFAULT_PASSWORD); }
  function setPassword(p) { write(KEYS.password, p); }
  function isAuthed() { return read(KEYS.auth, false) === true; }
  function setAuth(v) { write(KEYS.auth, v); }

  function getTripById(id) {
    return getTrips().find(function (t) { return t.id === id; }) || null;
  }

  function genId() {
    return 't' + Date.now().toString(36) + Math.floor(Math.random() * 1000);
  }

  return {
    getTrips: getTrips,
    saveTrips: saveTrips,
    resetTrips: resetTrips,
    getBookings: getBookings,
    saveBookings: saveBookings,
    addBooking: addBooking,
    updateBooking: updateBooking,
    getFavorites: getFavorites,
    isFavorite: isFavorite,
    toggleFavorite: toggleFavorite,
    getPassword: getPassword,
    setPassword: setPassword,
    isAuthed: isAuthed,
    setAuth: setAuth,
    getTripById: getTripById,
    genId: genId
  };
})();
