/* eslint-disable */
if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + '.js', i).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, a) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[t]) return;
    let c = {};
    const u = (e) => n(e, t),
      r = { module: { uri: t }, exports: c, require: u };
    s[t] = Promise.all(i.map((e) => r[e] || u(e))).then((e) => (a(...e), c));
  };
}
define(['./workbox-3c9d0171'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/T36TbNlfnhHmCKp5uxvq5/_buildManifest.js',
          revision: '7d15aa7ae9dbfd8a898d46716f7f0b63',
        },
        {
          url: '/_next/static/T36TbNlfnhHmCKp5uxvq5/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/3093-dd3826d8558d658c.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/3098-45cdd54c818b0baf.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/3162-110c29ca141c4a34.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/3726-e358eb2476bcfa7f.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/3ff3f7ae-0b49d1f48e2e3361.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/494-614d99509ee7391e.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/5012-fb8d5dfbb2c6dea0.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/6033-a59fad6b65fbd195.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/6059.c04696db028191a1.js',
          revision: 'c04696db028191a1',
        },
        {
          url: '/_next/static/chunks/7054-3f4f68850967ecea.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/7347-a7bf5a31dcd2c220.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/7420-b7b259e37dcb5668.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/8306.1e0162deed00b61a.js',
          revision: '1e0162deed00b61a',
        },
        {
          url: '/_next/static/chunks/9052-0350e70d721160e0.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/950-acd5ea38f4c0bc4c.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/9553-964e19865c66a42a.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/9804-7e2b085165f72907.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-c6355c57c023fe16.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/api/auth/kakao/route-86b9ef17da63af7d.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/api/auth/logout/route-64aa11691afd82e9.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/api/auth/refresh/route-97de002c18f88f24.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/api/auth/signIn/route-04c4c250f848fb26.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/api/auth/signUp/route-ab82844d1797e69c.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/api/images/upload/route-c612ada15d882f02.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/api/users/me/reviews/route-58ccf699fd935969.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/api/users/me/route-55ef5ed550d9d659.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/api/users/me/wines/route-8d35ed224e4810ff.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/api/wines/%5Bid%5D/like/route-878cfadc55d52552.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/api/wines/%5Bid%5D/route-5aad885a54393a44.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/api/wines/route-173051d66087c3b9.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/authlogictest/error-d39c39e56b5d417f.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/authlogictest/loading-7400cca9aaa63c44.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/authlogictest/page-05dc257c46dbd6e7.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/layout-a4cf2083265f5123.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/page-01b79b23b89773c2.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-aroma-analysis/page-d1359138170bdecb.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-button/page-124c9071ef2aaf03.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-dropdown/page-2d2a926d132a044b.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-dual-range-slider/page-0e55c2700b2027f0.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-icon/page-ad2a1bdfd141bec0.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-modal/page-417ffeb15a71a2c1.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-multi-select/page-074c92bec0cec050.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-profileImg/page-a4a18d2c79a490b6.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-radio/page-c265a57cfd533fba.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-rating-summary/page-6fa2d237024de6e6.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-recommend-wine-item/page-d6da25629ece4c20.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-selectbox/page-79fec63e1bf176db.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/ui-wine-list-card/page-16b576a5936b385e.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/design-system/wine-modify-test/page-ef910f567be327a4.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/global-error-5804364f3e5e98ac.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/layout-245779f31a2b6dbf.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/loading-8099c6f0be12bf49.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/login/error-82c931d3ac32b6ac.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/login/loading-9bd3a520487a27e2.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/login/page-aafe9456e3421f34.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/myprofile/(tab)/favorites/page-f209f3dc571b5355.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/myprofile/(tab)/reviews/page-534375eccf29928a.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/myprofile/(tab)/wines/page-8842a5ef8534df4f.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/myprofile/error-35479e6dd5ebb65f.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/myprofile/layout-7226ca9300eee954.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/myprofile/loading-b0435f5c8fecc48f.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/myprofile/page-9bbddc454b7bee5e.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/not-found-d1812d97df381c25.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/oauth/kakao/page-5ab2636e9e5ba770.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/page-0705f2811eacfa7c.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/signup/error-ef8f395628aea723.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/signup/loading-79b1585ac4c82570.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/signup/page-d5e14b7ae42493d7.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/wines/%5BwineId%5D/error-806945042221d3ec.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/wines/%5BwineId%5D/loading-99a6cfc358e10949.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/wines/%5BwineId%5D/page-78f0dc565ee3f75d.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/wines/error-3cb5200bef8fd10e.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/wines/loading-4a62df6d989688ad.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/app/wines/page-83e1103975d49711.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/framework-b2d048e5dc5c3dc2.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/main-7e63afeef67954c0.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/main-app-ace02cdfa21888c6.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/pages/_app-9a641d3c5a9cb418.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/pages/_error-ad9d0ed1e608c702.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-1693cc72f1e722ea.js',
          revision: 'T36TbNlfnhHmCKp5uxvq5',
        },
        {
          url: '/_next/static/css/292730e7f0cf2a24.css',
          revision: '292730e7f0cf2a24',
        },
        {
          url: '/_next/static/media/PretendardVariable.ff840cfe.woff2',
          revision: 'ff840cfe',
        },
        {
          url: '/_next/static/media/dummy_wine_image.49b5706d.png',
          revision: '13e8c07a1ec1eeb04753d373a8dba520',
        },
        {
          url: '/_next/static/media/mock-img.a4e7acb4.png',
          revision: '608918d598d97c72b51d34f281f35654',
        },
        {
          url: '/_next/static/media/profile-default.10cdb384.svg',
          revision: '9b00b8c13924441f739af60b9d946bce',
        },
        {
          url: '/_next/static/media/profile-select-overlay.e009d71a.svg',
          revision: '96c6925fc4e93f416a4dc8570e560d0c',
        },
        {
          url: '/_next/static/media/wine-modal-file-upload.6ad197b1.svg',
          revision: '41a89bc93849c695018b583fd84209bf',
        },
        {
          url: '/_next/static/media/wine_.597f6da1.gif',
          revision: 'b61d27b92e4bb6f9629e7e62321fab37',
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: function (e) {
              return _ref.apply(this, arguments);
            },
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      function (e) {
        var s = e.sameOrigin,
          n = e.url.pathname;
        return !(
          !s ||
          n.startsWith('/api/auth/callback') ||
          !n.startsWith('/api/')
        );
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      function (e) {
        var s = e.request,
          n = e.url.pathname,
          i = e.sameOrigin;
        return (
          '1' === s.headers.get('RSC') &&
          '1' === s.headers.get('Next-Router-Prefetch') &&
          i &&
          !n.startsWith('/api/')
        );
      },
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      function (e) {
        var s = e.request,
          n = e.url.pathname,
          i = e.sameOrigin;
        return '1' === s.headers.get('RSC') && i && !n.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      function (e) {
        var s = e.url.pathname;
        return e.sameOrigin && !s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      function (e) {
        return !e.sameOrigin;
      },
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    );
});
