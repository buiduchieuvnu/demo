const CACHE_STATIC_NAME = 'static';
const URLS_TO_PRECACHE = [
    '/',
    'index.html',
    'app-style.css',
    'https://fonts.googleapis.com/css?family=Roboto:400,700',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
];

self.addEventListener('install', event => {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
            .then(cache => {
                console.log('[Service Worker] Precaching App Shell');
                cache.addAll(URLS_TO_PRECACHE);
            })
            .then(() => {
                console.log('[ServiceWorker] Skip waiting on install');
                return self.skipWaiting();
            })
    );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    console.log('[Service Worker] Fetching something ....', event);
 
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    console.log(response);
                    return response;
                }
 
                return fetch(event.request);
            })
    );
});