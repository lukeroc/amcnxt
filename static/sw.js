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
    "url": "/_nuxt/app.e8a918ca1989491ca829.js",
    "revision": "04895fb42750b6f2a13c045fa003b687"
  },
  {
    "url": "/_nuxt/common.e7e9b201c8f361f8be5e.js",
    "revision": "c041bedcb350d76b565084d996b1917a"
  },
  {
    "url": "/_nuxt/layouts/default.d136155bf84e22579031.js",
    "revision": "874cc7dd3888f19c07e6356cf79cd0a8"
  },
  {
    "url": "/_nuxt/manifest.f1debacb05242613a788.js",
    "revision": "c5400d9d7ee17659f14ae556c16b9578"
  },
  {
    "url": "/_nuxt/pages/blog/index.945893d7a23b082e5c3a.js",
    "revision": "dce9e42137dda0d76f591394b6b7397a"
  },
  {
    "url": "/_nuxt/pages/careers/_career.19d88fc333fdfd007b2d.js",
    "revision": "1d1349a467ecf83c37e8c351e5164473"
  },
  {
    "url": "/_nuxt/pages/careers/index.e8674f8b66f059335bf4.js",
    "revision": "dcbed1237529fbb15b3ed4fddffd39be"
  },
  {
    "url": "/_nuxt/pages/index.c5773686aba338eb0472.js",
    "revision": "d524739675943c2a6880cd2254786f47"
  },
  {
    "url": "/_nuxt/pages/landing-page/AmicoConnect.4ebdf1a5ae2d11b64c59.js",
    "revision": "6cd160cd7ce25cf8f47eb45dd4c530bb"
  },
  {
    "url": "/_nuxt/pages/landing-page/DownloadApp.a0ac20cb60a37d481344.js",
    "revision": "88d1cba75003e37cf3e3730f3873ae43"
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
    "url": "/_nuxt/pages/press/index.71d27d5080aa2c0f621d.js",
    "revision": "9b71c3c62f6fcf91dcd9da061a2a7c79"
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
