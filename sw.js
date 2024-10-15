self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('shiori-cache').then((cache) => {
        return cache.addAll([
          './index.html',
          './styles.css',
          './script.js',
          './manifest.json',
          './images/page1.jpg',
          './images/page2.jpg',
          './images/page3.jpg'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  