importScripts("/precache-manifest.ea5a60e656b6166acb2287931d8904f3.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
/*eslint-disable*/
workbox.core.setCacheNameDetails({prefix: "jobsnearby"})

self.skipWaiting()
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "directoryIndex": "/"
})
workbox.routing.registerRoute("/", new workbox.strategies.NetworkFirst(), 'GET')
workbox.routing.registerRoute(/^http/, new workbox.strategies.NetworkFirst(), 'GET')

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim())
})

