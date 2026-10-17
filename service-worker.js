/* Rihla — Service Worker */
var CACHE = 'Rihla-v18';
var ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './assets/pharaoh-bg.svg',
  './assets/pharaoh-luxury-bg.svg',
  './js/i18n.js',
  './js/data.js',
  './js/store.js',
  './js/images.js',
  './js/scenes.js',
  './js/app.js',
  './js/admin.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return c.addAll(ASSETS);
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      if (res && res.status === 200 && e.request.url.indexOf('http') === 0) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (m) {
        return m || caches.match('./index.html');
      });
    })
  );
});
