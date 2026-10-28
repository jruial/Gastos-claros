const CACHE = 'gastos-claros-static-v1.2';
const ASSETS = ['./', './index.html', './style.css', './app.js', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  // Buscar nuevas versiones con conexión y mantener las copias sin conexión.
  if (request.mode === 'navigate' || /\.(?:js|css)$/.test(new URL(request.url).pathname)) {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) { const clone = response.clone(); caches.open(CACHE).then(cache => cache.put(request, clone)); }
      return response;
    }).catch(() => caches.match(request)));
  } else {
    event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
      if (response.ok) { const clone = response.clone(); caches.open(CACHE).then(cache => cache.put(request, clone)); }
      return response;
    })));
  }
});
