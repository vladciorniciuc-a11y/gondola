// Service Worker for Pizzeria Gondola PWA
const CACHE_NAME = 'gondola-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Basic network-first strategy for dynamic site updates
    if (event.request.method === 'GET' && event.request.url.startsWith('http')) {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        );
    }
});
