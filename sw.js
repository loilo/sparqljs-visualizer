if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const f=e=>n(e,o),a={module:{uri:o},exports:c,require:f};i[o]=Promise.all(r.map((e=>a[e]||f(e)))).then((e=>(s(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/_plugin-vue_export-helper.y4GvAF8u.js",revision:null},{url:"_nuxt/entry.B5qfQWb0.js",revision:null},{url:"_nuxt/error-404.CmQd1L3I.js",revision:null},{url:"_nuxt/error-404.DC9YyOu7.css",revision:null},{url:"_nuxt/error-500.CCM41ipm.js",revision:null},{url:"_nuxt/error-500.CzZUE1u9.css",revision:null},{url:"_nuxt/evaluation-worker-x04sumDk.js",revision:null},{url:"_nuxt/formatting-worker-o01DJpzO.js",revision:null},{url:"_nuxt/index.3eYGIa0Y.js",revision:null},{url:"_nuxt/index.sU7udSRQ.css",revision:null},{url:"_nuxt/nuxt-link.CVHuIjHk.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.B76CkMMS.js",revision:null},{url:"200",revision:"e139e8e879a9f95dc305cf00b55229b8"},{url:"404",revision:"e139e8e879a9f95dc305cf00b55229b8"},{url:"apple-touch-icon.png",revision:"81a36b1ce4582741cccc71b4d368ce84"},{url:"css/nuxt-google-fonts.css",revision:"efe06898485e658c3eebb829d70ba067"},{url:"favicon-16x16.png",revision:"c696b46316a94e505a28d5b9a124fb99"},{url:"favicon-32x32.png",revision:"62f808927eb0f61681c0d264a88f07ab"},{url:"favicon.ico",revision:"405663105a410ae5aa92589ac7c8e09e"},{url:"favicon.svg",revision:"fa9350c8fc0c54c18d4c20243c8a8000"},{url:"fonts/JetBrains_Mono-400-1.woff2",revision:"22e9c937e34454542cdc3d107074d0a9"},{url:"fonts/JetBrains_Mono-400-2.woff2",revision:"82462194ebb6a7e8f37e5894208dd75b"},{url:"fonts/JetBrains_Mono-400-3.woff2",revision:"a5c8278c5258306b7ded1faff812c368"},{url:"fonts/JetBrains_Mono-400-4.woff2",revision:"789a43b6ed9a660899af09499b26ade3"},{url:"fonts/JetBrains_Mono-400-5.woff2",revision:"443d1c3be5b2afd0e48b701779b9f43f"},{url:"fonts/JetBrains_Mono-400-6.woff2",revision:"caf0dfde4e448468f09b7bed230206a4"},{url:"fonts/Poppins-400-7.woff2",revision:"aa42a9a3d4fc9951ed37945ff1af85dc"},{url:"fonts/Poppins-400-8.woff2",revision:"9212f6f9860f9fc6c69b02fedf6db8c3"},{url:"icons/check.svg",revision:"a8dc2cfe0d954f137bbf2af0b2bc4c8c"},{url:"icons/copy.svg",revision:"bcbda99b80efc154e8878cea48c6996c"},{url:"icons/github.svg",revision:"2b90b56c89b34cb8d8ceec568da194c5"},{url:"icons/moon.svg",revision:"c3e383d3049326c460ca289abaa40351"},{url:"icons/redo.svg",revision:"18ee58fe85cce3e44e0b0c2327cfe50b"},{url:"icons/screen.svg",revision:"914be258429bfd0289d8ff25281e71bc"},{url:"icons/share.svg",revision:"2b0436b51046b1f6ffb27ed63748804d"},{url:"icons/sun.svg",revision:"4aeda03828fb0bedd25d4dc6d0facb14"},{url:"icons/wand.svg",revision:"7a7854a739eda966b6b0ca0c975f0e39"},{url:"/sparqljs-visualizer/",revision:"8aa1a4b71061f6330ee6ed5f9dea5de8"},{url:"maskable.svg",revision:"b62587e1a29a8e36087a333acd953e54"},{url:"sparqljs-visualizer-pwa-192x192.png",revision:"4157f85b0b77459a2593baa12e1dfd16"},{url:"sparqljs-visualizer-pwa-512x512-maskable.png",revision:"1b741424d37a3241efcb047c55539117"},{url:"sparqljs-visualizer-pwa-512x512.png",revision:"bbbefe9fc8837667c454495a6c34d76a"},{url:"_payload.json",revision:"92784988d8bc9f6fbce04746a8132823"},{url:"_nuxt/builds/latest.json",revision:"02d63d69bb4522f6544070f296ff62a4"},{url:"_nuxt/builds/meta/8a46dc92-1f00-4c8b-9a44-edc0b806a21a.json",revision:null},{url:"manifest.webmanifest",revision:"05cefce6fac8d2efc7f67f0091d7d0d8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/sparqljs-visualizer/")))}));
