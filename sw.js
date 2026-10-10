// Service worker do NightTable: deixa o app instalável e abre a casca do app sem rede.
// Páginas: rede primeiro (sempre a versão nova), cópia guardada se estiver sem internet.
// Arquivos de /assets/ têm o hash no nome: guardados na primeira vez e servidos do cache.
// Dados da mesa (Firestore) e fontes são de outros domínios e não passam por aqui.
const CACHE = 'nighttable-v1';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(request, copy));
      return response;
    }).catch(() => caches.match(request).then((cached) => cached || caches.match(self.registration.scope))));
    return;
  }
  if (url.pathname.includes('/assets/') || url.pathname.includes('/icons/')) {
    event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(request, copy));
      }
      return response;
    })));
  }
});
