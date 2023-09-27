console.log("Service Worker installed");
let cacheVersion = "appV1";
// Setting the cache
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheVersion).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js", "/",
                "/users",
                "https://jsonplaceholder.typicode.com/users"
            ])
        }).catch((err) => {
            console.log("failed to cache")
        })
    )
})

// Consuming the cache
this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((res) => {
                if (res) {
                    return res
                }
                fetch(event.request.clone())
            }).catch(() => {
                console.log("failed to fetch from cache")
            })
        )
    }
})