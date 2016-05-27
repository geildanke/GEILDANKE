// Path is correct. Do not move to scripts.

importScripts('/scripts/vendor/serviceworker-cache-polyfill.js');

var cacheName = 'com.geildanke-cache-v1.0.0';
var filesToCache = [
  // Stylesheets
  '/styles/main.css',

  // Pages and assets
  '/index.html',
  '/images/cover.png',
  '/images/geildanke-logo.svg',
  '/images/geildanke-logo-typographic.svg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('Caching');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          console.log('[*] Serving cached: ' + event.request.url);
          return response;
        }

        console.log('[*] Fetching: ' + event.request.url);
        return fetch(event.request);
      }
    )
  );
});