importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.bff73bf419697ec423d3.js",
    "revision": "eb7a0bf883d967e6c0d47cd6be571e51"
  },
  {
    "url": "/_nuxt/common.e7e9b201c8f361f8be5e.js",
    "revision": "c041bedcb350d76b565084d996b1917a"
  },
  {
    "url": "/_nuxt/layouts/default.e25e47affee879108e38.js",
    "revision": "6cc86ed26b5939d46900146ae57efaef"
  },
  {
    "url": "/_nuxt/manifest.ec04970e91eca50981d1.js",
    "revision": "f17ee6701663a45295ff9efc5a8ce07b"
  },
  {
    "url": "/_nuxt/pages/blog/index.f2107d53f3520a2013dd.js",
    "revision": "ae809c68135ed58f93b4d51c6b87fee7"
  },
  {
    "url": "/_nuxt/pages/careers/_career.d8b7b217d5715154cf42.js",
    "revision": "b2955570e492314440834172fb3fbce1"
  },
  {
    "url": "/_nuxt/pages/careers/index.f793bc673ce4c129d09b.js",
    "revision": "866b713158c9742330edc7e071a6380f"
  },
  {
    "url": "/_nuxt/pages/index.be400d4a5b2a59c69d02.js",
    "revision": "99a58a90d67d825d1a99d1674bc705ad"
  },
  {
    "url": "/_nuxt/pages/landing-page/AmicoConnect.4ebdf1a5ae2d11b64c59.js",
    "revision": "6cd160cd7ce25cf8f47eb45dd4c530bb"
  },
  {
    "url": "/_nuxt/pages/landing-page/DownloadApp.0a8f8b8216dfc0ebf28b.js",
    "revision": "68d0e568c4323478f9693e7d985a8c69"
  },
  {
    "url": "/_nuxt/pages/landing-page/MeetAmico.7f2fb8a045268fe2eed2.js",
    "revision": "69e9df2474bf0e5b9dfb191dd27654ce"
  },
  {
    "url": "/_nuxt/pages/landing-page/WhatWeDo.eed57bee5c6d128de63f.js",
    "revision": "d1b6de042c5f9cfb8e002f59d3e8438c"
  },
  {
    "url": "/_nuxt/pages/press/index.2087e69400cffd90f8f1.js",
    "revision": "2bc66a60408dc3ee03113137c3bc1461"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "amcnxt_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
