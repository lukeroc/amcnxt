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
    "url": "/_nuxt/app.a49918448115c807f72f.js",
    "revision": "89af352c3551c72e55bd0b42702b3bca"
  },
  {
    "url": "/_nuxt/common.e7e9b201c8f361f8be5e.js",
    "revision": "c041bedcb350d76b565084d996b1917a"
  },
  {
    "url": "/_nuxt/layouts/default.cad708e5797f10e8570a.js",
    "revision": "6fc120b78b324bb46fcde523db92b05b"
  },
  {
    "url": "/_nuxt/manifest.c14b3f83687881f53078.js",
    "revision": "29537a2ad46f5f43e71f8d0f798fb631"
  },
  {
    "url": "/_nuxt/pages/blog/index.47034bff22aeab8bed09.js",
    "revision": "44b6f9a6a325da4a0a88f9582da8ed0c"
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
    "url": "/_nuxt/pages/index.02a0bacfb09fae7c44a6.js",
    "revision": "199cbfe6a3729b0041ab85a4b25520ac"
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
