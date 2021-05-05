var staticCacheName = "portfolio-v" + new Date().getTime();
var filesToCache = [
    "lib/bootstrap/css/bootstrap.min.css",
    "lib/font-awesome/css/font-awesome.min.css",
    "lib/animate/animate.min.css",
    "lib/ionicons/css/ionicons.min.css",
    "lib/owlcarousel/assets/owl.carousel.min.css",
    "lib/lightbox/css/lightbox.min.css",
    "css/style.css",
    "lib/jquery/jquery.min.js",
    "lib/jquery/jquery-migrate.min.js",
    "lib/popper/popper.min.js",
    "lib/bootstrap/js/bootstrap.min.js",
    "lib/easing/easing.min.js",
    "lib/counterup/jquery.waypoints.min.js",
    "lib/counterup/jquery.counterup.js",
    "lib/owlcarousel/owl.carousel.min.js",
    "lib/lightbox/js/lightbox.min.js",
    "lib/typed/typed.min.js",
    "/js/main.js",
    "/js/contact_form.js",
    "/plugins/jquery/jquery.min.js",
    "/plugins/bootstrap/js/bootstrap.min.js",
    "img/icons/icon-16x16.png",
    "img/icons/icon-32x32.png",
    "img/icons/icon-48x48.png",
    "img/icons/icon-72x72.png",
    "img/icons/icon-96x96.png",
    "img/icons/icon-128x128.png",
    "img/icons/icon-144x144.png",
    "img/icons/icon-152x152.png",
    "img/icons/icon-192x192.png",
    "img/icons/icon-384x384.png",
    "img/icons/icon-512x512.png",
];

// Cache on install
self.addEventListener("install", event => {
    console.log("[Service Worker] Installing Service Worker ...", event);
    // this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear cache on activate
self.addEventListener("activate", event => {
    console.log("[Service Worker] Activating Service Worker ....", event);
    event.waitUntil(
        caches.keys().then(cacheNames => {
            console.log("[Service Worker] Deleting Service Worker ...." + staticCacheName, event);
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("portfolio-")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {
    console.log("[Service Worker] Fetching Static Page ....", event);
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                console.log("[Service Worker] Static Page Fetched.");
                return response || fetch(event.request);
            })
            .catch(() => {
                console.log("[Service Worker] No Static Page to Fetch.");
                return caches.match("offline");
            })
    )
});