if (!self.define) {
  let e,
    i = {};
  const s = (s, n) => (
    (s = new URL(s + '.js', n).href),
    i[s] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, a) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (i[t]) return;
    let c = {};
    const r = (e) => s(e, t),
      l = { module: { uri: t }, exports: c, require: r };
    i[t] = Promise.all(n.map((e) => l[e] || r(e))).then((e) => (a(...e), c));
  };
}
define(['./workbox-3c9d0171'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/192x192.png', revision: '169a49f5e1332357718bf6e749dc1f93' },
        { url: '/384x384.png', revision: '2b9c3857605d6af2c03c8f4c46fdbe7f' },
        { url: '/512x512.png', revision: 'eb22adbd74e99a3f592fcb9b9c25d049' },
        {
          url: '/_next/static/chunks/1413-83c489eec54c0cbe.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/2531-f7808ecc22126d14.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/3299-8ee51e99dbd3c2c2.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/3ff3f7ae-0b49d1f48e2e3361.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/4575-ef9039a6042cf42d.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/4580-00bfd7ad311ebd96.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/494-614d99509ee7391e.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/5159-96e612b04324647f.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/6059.c04696db028191a1.js',
          revision: 'c04696db028191a1',
        },
        {
          url: '/_next/static/chunks/6534-5b6e2f996273e624.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/7409-45c34e0982c739ca.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/7547-086cce1bb5789753.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/7687-30c653c3d2de014e.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/7859-05db1b64bbe1e027.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/8306.1e0162deed00b61a.js',
          revision: '1e0162deed00b61a',
        },
        {
          url: '/_next/static/chunks/9052-0350e70d721160e0.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/9337-661b9f9cff443b2a.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/9553-964e19865c66a42a.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/layout-f03683e2a32ef965.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/page-36cf6d981933da61.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-aroma-analysis/page-6e341de5a51b8c51.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-button/page-bec58652c176eda8.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-dropdown/page-d2979f5c067d6d2c.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-dual-range-slider/page-17fa21c160714540.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-icon/page-1fe9b767223bb4f0.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-modal/page-1c976bd15ebf745b.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-multi-select/page-c776d2fa067d860f.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-profileImg/page-cf4156b437c92145.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-radio/page-0a25c063b68a1791.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-rating-summary/page-04d7294a53e27fb2.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-recommend-wine-item/page-9d26c1479bf9b88a.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-selectbox/page-cb7da9aa74081606.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-skeleton/page-00f17fb2910b7e76.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-toast/page-fcf572c4c767da29.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/ui-wine-list-card/page-adcd73fb72aca64c.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/design-system/wine-modify-test/page-3f46b30deb9931f2.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/layout-356826ee64f6feac.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/login/error-b14773c5d96e7493.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/login/loading-51683c69f7987740.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/login/page-32ecf62e33e9df87.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/oauth/kakao/page-1ed10fcb5e9fcf69.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/signup/error-1e8a9945481c6a09.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/signup/loading-3d90ba8e1072b10e.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(non-header)/signup/page-471b5f5ffec377f5.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/layout-c9f77d37c66af7c7.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/favorites/@modal/(..)(..)wines/%5BwineId%5D/page-d98d43734d5d2a4a.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/favorites/@modal/default-e07911603bef9091.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/favorites/layout-f38a76b43e27cf19.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/favorites/page-edc49027ed5bf49d.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/reviews/@modal/(..)(..)wines/%5BwineId%5D/page-7b2a0181b5c2a4ec.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/reviews/@modal/default-dc0ec2e845da7555.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/reviews/layout-91482eaa1e394712.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/reviews/loading-6b4da3eddfa78bd1.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/reviews/page-375327837f1993ee.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/wines/@modal/(..)(..)wines/%5BwineId%5D/page-62b5dee9904c6dd8.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/wines/@modal/default-a80e2fb3b221314f.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/wines/layout-1a954286d4872a25.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/wines/loading-032de8a4b74587d6.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/(tab)/wines/page-f1307677f4b23dd8.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/error-855f0a9579adedee.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/layout-3796d424c42f598c.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/loading-ca9a7fb662408edb.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/myprofile/page-2174d9f7109f6152.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/wines/%5BwineId%5D/error-8507723a133f2a3b.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/wines/%5BwineId%5D/loading-da5106b8352278e3.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/wines/%5BwineId%5D/page-193cc93f84197988.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/wines/error-d68a64c103b1216e.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/wines/loading-1e86b6c704b5f8e2.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/(with-header)/wines/page-eb99d36652a73e05.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-ab548a7f3900783b.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/auth/kakao/route-c46a83e8fab5dcb3.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/auth/logout/route-e2f0c3e931ddde31.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/auth/refresh/route-fc85db519db6095f.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/auth/signIn/route-ef23395e9f4a7509.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/auth/signUp/route-c6943642b25999b6.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/images/upload/route-6a4b2ef33b90af5e.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/users/me/reviews/route-c0ed64b9d91f09e9.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/users/me/route-576ef695c796152f.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/users/me/wines/route-85b66cb07a00d472.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/wines/%5Bid%5D/like/route-3f47eec68e355fa7.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/wines/%5Bid%5D/route-5173cb97702583fd.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/wines/revalidate-recommended-wines/route-39ed5a0cb9033e48.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/api/wines/route-c763c2d03f83dd39.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/authlogictest/error-dc44766500ae197a.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/authlogictest/loading-86cb4d058e6829da.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/authlogictest/page-9b78240a698cfe59.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/global-error-a4237e32cb88a9d4.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/layout-cbb83c6d0e77aeb7.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/loading-fc17b3253bf3e8b0.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/not-found-b8dd1d1c87e68572.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/app/page-f98806bc59abad92.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/framework-b2d048e5dc5c3dc2.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/main-2181ef1a97c3b55f.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/main-app-6c64295b687b225e.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/pages/_app-9a641d3c5a9cb418.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/pages/_error-ad9d0ed1e608c702.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-1693cc72f1e722ea.js',
          revision: 'k4hbZcZxJqDVlihj77Dl9',
        },
        {
          url: '/_next/static/css/33a757832720bdbf.css',
          revision: '33a757832720bdbf',
        },
        {
          url: '/_next/static/k4hbZcZxJqDVlihj77Dl9/_buildManifest.js',
          revision: 'af1407a6c72d48ac436c13a9c689c2da',
        },
        {
          url: '/_next/static/k4hbZcZxJqDVlihj77Dl9/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
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
        { url: '/manifest.json', revision: '8cd39b5781c4dcb46735f43c9cbc12a6' },
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
        var i = e.sameOrigin,
          s = e.url.pathname;
        return !(
          !i ||
          s.startsWith('/api/auth/callback') ||
          !s.startsWith('/api/')
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
        var i = e.request,
          s = e.url.pathname,
          n = e.sameOrigin;
        return (
          '1' === i.headers.get('RSC') &&
          '1' === i.headers.get('Next-Router-Prefetch') &&
          n &&
          !s.startsWith('/api/')
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
        var i = e.request,
          s = e.url.pathname,
          n = e.sameOrigin;
        return '1' === i.headers.get('RSC') && n && !s.startsWith('/api/');
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
        var i = e.url.pathname;
        return e.sameOrigin && !i.startsWith('/api/');
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
