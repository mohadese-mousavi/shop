self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("first-cache")
        .then(cache => {
            cache.addAll(
                [
                    '/',
                    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css',
                    'assets/css/bootstrap-rtl.min.css',
                    'assets/css/bootstrap.min.css',
                    'assets/css/mdb.min.css',
                    'assets/css/style.css',
                    'assets/js/jquery.min.js',
                    'assets/js/popper.min.js',
                    'assets/js/bootstrap.min.js',
                    'assets/js/mdb.min.js',
                    // 'assets/img/svg',
                    // 'assets/img',
                    // 'assets/picture'
                ]
            )
        })
    );
})

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
})