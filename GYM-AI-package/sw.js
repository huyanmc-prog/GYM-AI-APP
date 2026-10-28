const CACHE='gymai-core-v1';
const CORE=['./','./index.html','./styles.css','./enhancements.css','./auto-sync.css','./app.js','./app2.js','./app3.js','./pwa.js','./assets-manifest.js','./exercise-metadata.js','./exercise-muscles.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{const copy=response.clone();if(new URL(event.request.url).origin===location.origin)caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match('./index.html'))))});
