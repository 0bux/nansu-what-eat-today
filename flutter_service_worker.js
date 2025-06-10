'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "62b2757a172343bdbbde7a41280ad1f8",
".git/config": "dbde3074ae10b4e894ab486dfb077982",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "730ac6dc1bf6f011843088b852c294f9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f8b227ea2eac50b17b32949f9eabd845",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c16309e1fbd64fb485358eeabf78fa38",
".git/logs/refs/heads/main": "46d064e2049033aa090d52fb395bb07d",
".git/logs/refs/remotes/origin/HEAD": "ac92213e163914aad711e614b9ee4ff4",
".git/logs/refs/remotes/origin/main": "693a112bb6120ce5ee9bc92d4f6dcb8f",
".git/objects/01/7e59b80261b1f1826e1536355914d783fa299d": "7898066723e2414351e63fb1900e5182",
".git/objects/01/c33c158c6bcc79613b3b8571b8b4877258339e": "c795c0e22b848f00df34e5179a73ef9a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/b355417fc34c72aea471f9ef87bb436449782a": "7eead9abb405f97ae118ba363b0a82cf",
".git/objects/08/5b3023b704bc40d26f889c6f17470b1611b1b9": "1c40de79fe9e8689a80b0b215bf4b3a5",
".git/objects/0a/19e1f0b0100f07978e8f718ea6eff7693dfaf9": "96403f43f9d9eeced138031513f4b0cd",
".git/objects/0d/64de3fbf2a0e9703aed5f235fc0edf209ac8a5": "7c85b224e6075776492fcaad1c977700",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/10/a1613a3ba04b8b1f1d17bb1e85088d31a89cfa": "68d7b4d01cc33239f51589d883685199",
".git/objects/14/c215dc14a6e1aab76987985fa19c4b455d55f9": "9d3fabaa912c30a2aea75f33c26fd364",
".git/objects/17/cfd669407daec8946d3895a72d5ccc0d24df7a": "ffd4656fddf3960a86238edeba31e2d3",
".git/objects/19/3876648a48585e717a61bc1c5e7a0a8329b98c": "a70bab5f1e990239b5f89a2b3e45c8c2",
".git/objects/19/86a0c691df64bc26e29505dfec4a82a788d22d": "a769224639dfa5cfa6b59af0b0e8326f",
".git/objects/1c/852e3fcf8e23129c66c38c3809849ab2d34ab1": "23b81894a1ff27f45845bce5aed3797e",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/29/2157e87b12f3db4188e062dc1b56d845b22024": "9d66a87beffcbe107b6dbc12e9430215",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/35/0482306999aeef47b9f184223b8efd18572acd": "da2f042bf4ab6034eca5dfa79096328a",
".git/objects/3c/4f817005dd2075d1f5632c35e5279a65593793": "d2a42129514baf9cbd1f2ff117dd69b4",
".git/objects/3c/b88a1056c7aae441f31b5b5b59feaee6168a3c": "f011ec527a9bcf0141ce3cd44ec06ca6",
".git/objects/3d/93334955b5ad3c6ff3e5d442727baa69915b99": "947f84434e168ea7362b29a254d9ca55",
".git/objects/3e/428d5554791919b1a991696d15d796104549b5": "e30d244e1a9058e9bf75fc7c8a873ad0",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/42/4a151aae05d001af3b38739c4e4483b909e8a5": "549c0af589112506ad532d7362a72f49",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/ca7a5ce68015c9aa82f4fae3aaa025d779b3f7": "480efba0c5d188b6bc78ddc5277bd735",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/4e/958c23fb51b0eb8a0599cd65db11a23df7da54": "b618f4c2343b0fa0370edc94ce40ed7a",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/5d/4cf0692cf34a07582254b9b23b238413b6118b": "db761f85761d300c20a1ea6b9098cfa8",
".git/objects/5f/b81fa0f08180d7d9464a1640f62fd0fab2d4fb": "01a2624c55b210964a88d07d5a814cc5",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/27e99aa45b15af365251f4ed0ac0943b71aec1": "ceff47582fcb96a3c95b9eece7e74c5e",
".git/objects/70/4e129f864a54eec483ca8152ca5ac2a29beb42": "4bd7f677403eea828c0f5cf577c502b6",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/74/4b406f397608294b3b069e7e02ba613747c2c7": "6e02ef3867f04e3368671aeebab3c5a8",
".git/objects/79/9e0ef9e07b3de0f37e981c58c8c7e692d240c9": "b48ef7943eb16484400677ccf658894e",
".git/objects/82/a414f48fed5de94f048e0b797d9ed2d3a42bf5": "45dd49062a38fb778450bf9fd1a3e95b",
".git/objects/84/d2db76dc0562f3da2943831983085aa8fb6611": "1326d0c41253c6b30a7db52e2edefd5d",
".git/objects/85/62e0717eb66c183db2bbba8735607accdce9f0": "c157d0883270e75be98146e0b68c1c25",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/41d2909ff3ae8c210736a65511567adaa4a275": "7d46bea4a59abfa857bc51e7f2d6f7cf",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/96/8363ff4e2699e0391353cf1a323733e12408d0": "4f0d565cd1d33b904b8761f0a749338c",
".git/objects/98/70b5831a34457d35cac3363233e8caa634a57d": "d3fec379ab985100aeff7546a34a7a0f",
".git/objects/98/8f288168b1e296ce7707c55d77af6862f34ac0": "9346cfeb817aa00822511e816cdd1904",
".git/objects/99/5302f33460c53c71919aea6dfece05af4d17bf": "e040c50fb3993787a9d7d013bb6356ab",
".git/objects/99/e8e126bdfc93825e6854c50c3194f627fc6e10": "51e13ae7ca3e897c15e34b315612ce5f",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/d7c7cf3e850fb4494fe8cd61e1478b1b1fb0a2": "c3b26f56d6f2b253a0cde4923de0b2cd",
".git/objects/a3/175cd23e195cf3174b92add2c0ab59c83b7610": "e96f214c8c2e58688303db548a2b5805",
".git/objects/a5/00858541a5a57c3dd05ca135fa37720bd0d52d": "ad6460a805cb9997b1fdea695feff47e",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/ac/f923e6cfb9d5436ffe67ef912a682795206a33": "2bf7eb4ab5408ccef584862a82d9bce3",
".git/objects/b0/c636515f3212b5be7b9e93d1907eb9f544d896": "d5fd9241e8c8f3b0fb0cbbd888bb1e1f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/9098e086449fbd1e0e3b093a7a673394bcc1e8": "81b00e8804309a9216ae5bd85356266c",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/c5/ef603e35027fc7d62a6bf79f8d5739db4b1390": "0e00bad6aea8f4046c8bed4ba75830ec",
".git/objects/c7/ce0ae24cc8ae910efe2a8161e1ab8c30e5ea58": "db5b88c0dec76e5e0d247deb31f8279b",
".git/objects/c8/612411dcf350bc11b3e96a0cefb62c122ec572": "7595ac3ccf19550654022039f15a4b7c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/e02496ea94a86cd53b09de79e740fa68c206c6": "c2325d623448c70ce7ac71cd323ca583",
".git/objects/cd/07eea8be4f80224c983660cdf0db05ee5afd13": "ef76be75cdd9dc993125646e71da9691",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e5/e0a68bbd042a366c7f7ce695a9d1d475c9fed8": "c5099728d5a874786fc9bb2667ed45b1",
".git/objects/e7/e7a0f2cd975601b4c4961f368058fe3a018514": "25f96bdd3f5e9a53a5562419b8b333f3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/d2108de9caf4c00af777d7c5db17a0e335f860": "56d33f7f2e74ff52fc96d1fbd2d152c7",
".git/objects/fb/f5ed3a895b93c64cf25ebe51a67f3347aedf8b": "a6f230ea0aad00c305aa5f5148de15b4",
".git/objects/fc/1b8ba70cad1329aa2508d4dbefc48bc72e067c": "99ae3daa40c28bebbe8d239feae4bfa5",
".git/objects/fc/2ac06a88050a80d9d58ab1d215ed1487f72905": "21cf4c87300ff19661cbd5f3848970fc",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/ORIG_HEAD": "f90be110d157c53d5437846c34457007",
".git/refs/heads/main": "f90be110d157c53d5437846c34457007",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f90be110d157c53d5437846c34457007",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "44c607a7bb97d2c6431b7ac8085b0caf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "24d208ad9a31db9c867666e477bd51b9",
"icons/eat.png": "839211441367e1f82e060d4918828de3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7680b848f8c300a61e70c793b6a2f3ba",
"/": "7680b848f8c300a61e70c793b6a2f3ba",
"main.dart.js": "9957d03aca1464728a7e1ab6a7095c6a",
"manifest.json": "ad631d26e393b324e716350a58ac3616",
"version.json": "e4acdc4f93c9c36742da52effa79b2f7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
