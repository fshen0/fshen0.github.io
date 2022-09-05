/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f1e34261fd98dbd75d70c6545df2a314"],["/archives/2022/09/index.html","0a1aa1079d6e0b8b2b5e82f5a81c815a"],["/archives/2022/index.html","870548a6b7e0a0a4dd87541d85a4ab36"],["/archives/index.html","decdcf65c54949902eeccb004ddfba5f"],["/categories/index.html","ccf96e5e98a165df26c8c42c090d0b8c"],["/categories/古诗文/index.html","cd5e83daafa2978b658721d59ae7f30f"],["/css/rtl.css","371213dab93de3d1fc0ca1949afcb10f"],["/css/style-light.css","c4c92bc53552f1f95f9d91c7e52ff3e4"],["/css/style.css","2def64dba42f69e903d6cea74cd4296f"],["/images/apple-touch-icon.png","6dcf911129afe2b584b881feefca08a4"],["/images/avatar.jpg","39f6046cf7f5eead7e9303d8ea042504"],["/images/favicon-128.png","b9f6a34dd6e0a5ac5742752a3fea0080"],["/images/favicon-144.png","bf2a9ecfa526158166c277730ebe2d82"],["/images/favicon-180.png","4d944cbc6733f56cc1281acb78d9be06"],["/images/favicon-192.png","7164687b6a4db8440196a2098f905ca4"],["/images/favicon-36.png","a3953aeba95517198729e2145828cdf1"],["/images/favicon-48.png","dc6d929bd5a3ce10d20dcb590ac9f579"],["/images/favicon-72.png","1ae0f4d675bbec81549efdb54259682f"],["/images/favicon-96.png","2e4c14fd8f1b5e3fc79a50bdcea177f1"],["/images/favicon.png","cb4565ec5f07adadb29f61c46577ceb4"],["/index.html","a5c1ee9fcf68e219320009d36394a0b9"],["/js/dist/APlayer.min.css","fb1ef64425784073102ada35f11ccfd9"],["/js/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/dist/Meting.js","caf33b0cd397f5c0caea91176901606b"],["/js/main.js","086e92c4c37af66d3333a38c90573ef6"],["/js/search.js","1fad9ca5a479f5b44ffc58f0c04bb69b"],["/lib/clipboard/clipboard.min.js","ad98572d415d2f2452845a6068a913c0"],["/lib/font-awesome/css/all.min.css","c45ee5c1a156bca3532e502945de9211"],["/lib/font-awesome/webfonts/fa-brands-400.ttf","95b991bbb94a2367a79b736321b69e47"],["/lib/font-awesome/webfonts/fa-regular-400.ttf","5b49c06a378a7fac3cc4cc4849691ef3"],["/lib/font-awesome/webfonts/fa-solid-900.ttf","463ac9a28f5745ff177b994560ace1c1"],["/lib/font-awesome/webfonts/fa-v4compatibility.ttf","a080557583e46766e5e5535199c60d5d"],["/lib/jquery/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/lib/justified-gallery/css/justifiedGallery.min.css","b2ce9cf825dd40e256e9a939099d92a4"],["/lib/justified-gallery/js/jquery.justifiedGallery.min.js","b3c16bcda205ebe084ee04f4900b7dbc"],["/lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["/lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["/lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["/lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["/lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["/lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["/lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["/lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["/lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["/lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["/lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["/lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["/lib/vazir-font/Vazir-Black.eot","b14d2e061238019f57eee192a5b2ad97"],["/lib/vazir-font/Vazir-Black.ttf","fbf6f1fcd621a13a6d1f042980721312"],["/lib/vazir-font/Vazir-Black.woff","36217fda6f0fc51dfb269e716bae7b82"],["/lib/vazir-font/Vazir-Bold.eot","bc34d7e8b562645ecb0b2afec5c1ce24"],["/lib/vazir-font/Vazir-Bold.ttf","ac80b1d4f90d3baaa771378fdf06ea48"],["/lib/vazir-font/Vazir-Bold.woff","cc88124b92329576cdfd49b17556b471"],["/lib/vazir-font/Vazir-Light.eot","67849172c17a7559f8b2b5b4468140f7"],["/lib/vazir-font/Vazir-Light.ttf","4d65e9a1fd91309de528f0f10628dea0"],["/lib/vazir-font/Vazir-Light.woff","12abfc6daec4ec1098286ab1654353c9"],["/lib/vazir-font/Vazir-Medium.eot","827bba080db2b5a982dcc5b1af492098"],["/lib/vazir-font/Vazir-Medium.ttf","adb97af1f40a011d03d340e1d1209898"],["/lib/vazir-font/Vazir-Medium.woff","6ba51b988507f30ff72342fb79765efe"],["/lib/vazir-font/Vazir-Regular.eot","86b80bd890b240a51bf7b22f2b50572b"],["/lib/vazir-font/Vazir-Regular.ttf","601b28df2446040d4c3f9a690d2dc405"],["/lib/vazir-font/Vazir-Regular.woff","9a74f2f94b32ff36798790222a437872"],["/lib/vazir-font/Vazir-Thin.eot","d46f74aed7dc881b01d969cee375c45a"],["/lib/vazir-font/Vazir-Thin.ttf","be519f269388015ba886c7505b050579"],["/lib/vazir-font/Vazir-Thin.woff","bad25ab27c6553f9c7668cf92416ac01"],["/lib/vazir-font/Vazir-Variable.eot","058c4d4ba1ef20acdcfd40945211ba5e"],["/lib/vazir-font/Vazir-Variable.ttf","e8a92528eb084aed28cb6f9739f1f963"],["/lib/vazir-font/Vazir-Variable.woff","0b80c8ccb1368fcf4286c10dd783b1fb"],["/lib/vazir-font/font-face.css","4c363318ab78a13400d8f06c47b91d26"],["/p/4a17b156.html","867c782b413da6f2c9555ee8ad699aa2"],["/p/ba663a52.html","75e2244f8253bf77b779cbc43dc404c5"],["/search/index.html","5a4fb9573d4ce2941331597dd368f985"],["/sw-register.js","f325db70f5e232b90f8310c5241fc0a6"],["/tags/index.html","adbf297fa08afba9832247ce74ddb49c"],["/tags/赋/index.html","56994bf29516cc90c765c06221e5d98e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
