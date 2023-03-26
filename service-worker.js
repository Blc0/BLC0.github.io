/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "67f9ed1a4d2c49ca30f15d8a7653e28d"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.bd626a2b.js",
    "revision": "09f4af06baaf275b5ac2d6cae2b0c79d"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.8de5ed19.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.92bf9ad9.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.60f506c7.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.42482b2c.js",
    "revision": "75746639d352033c7a1a9a7ae69b7bb7"
  },
  {
    "url": "assets/js/18.1ea1d894.js",
    "revision": "0ce5adb05e88c5cc6415e2b04c81844f"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.e2acf034.js",
    "revision": "fc9d41bae6b018a558fd0ff84f88fc1c"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "5905db42aeec5464fab65019a9588ef3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "95589df9e0db2ff8ba44b13c0faf107b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7929c7f62939a7cd0f4675c7a47f0ee5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "81f3e78386c76d585c255b7e93a239a1"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "97be23485ba8166d21c0c632aafa1689"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "03dab76e34caa165d6764d5a08c5236a"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "6672731cc15e1e46332d3984921b46cb"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "320c01b83da6468f0101ac323ace8ca0"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4bc0aca0aa8bd447cc369e04d031d0f5"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d3dc2bb039bd2f640a38896d0978b026"
  },
  {
    "url": "tags/js/index.html",
    "revision": "39fdbb4a6d9d1fab880ff4389faf5cdd"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "83721c4454aab28765235243fad077ab"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2e626d7f2ec6c2473400d19111890cf5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "da5e674750d8427130466c6a803106f6"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "e4c80cdd36a0d84d3104f34598893ccb"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "cd655c83697a69a7b719c9ec4dbabf21"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "16152ddbc0b49787682adb9fcd2e8a7d"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "5dcba1062b42687dad7177d2f707d404"
  },
  {
    "url": "timeline/index.html",
    "revision": "96b959193c3cb1b687802ca26bad60cd"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "62604455870f0876dd252e3a934be69a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "9591557069172eca5630002d155c0f70"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "59f42efe239b36e9180967f9d6806cf1"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "115d0a4a0f4f36af0d5ab12538a89f4c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "446a1a12ec86a299e40b16e558de587d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
