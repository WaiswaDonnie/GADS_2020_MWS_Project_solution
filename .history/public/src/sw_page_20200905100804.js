const cacheName = 'v1';

const cacheAssets = [
  "public/css/styles.css",
  "public/css/styles.scss",
  "public/css/styles.css.map",
    "public/css/dist/styles.css",
  "public"
];



// call install event
self.addEventListener('install', (e) => {
    console.log(`Service Worker: installed`)
})


// call install event
self.addEventListener('activate', (e) => {
    console.log(`Service Worker: Activated`)
})
