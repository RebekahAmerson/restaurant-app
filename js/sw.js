self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('main4').then(function(cache) {
     return cache.addAll([
       '/',
       '/css/styles.css',
       '/js/main.js'
     ]);
   })
 );
});
