import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const E="modulepreload",p=function(i,s){return new URL(i,s).href},d={},e=function(s,n,l){let t=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");t=Promise.all(n.map(o=>{if(o=p(o,l),o in d)return;d[o]=!0;const m=o.endsWith(".css"),O=m?'[rel="stylesheet"]':"";if(!!l)for(let a=r.length-1;a>=0;a--){const c=r[a];if(c.href===o&&(!m||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${O}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":E,m||(_.as="script",_.crossOrigin=""),_.href=o,document.head.appendChild(_),m)return new Promise((a,c)=>{_.addEventListener("load",a),_.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})}))}return t.then(()=>s()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,u=R({page:"preview"});T.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const f={"./src/stories/UseArray/UseArray.stories.mdx":async()=>e(()=>import("./UseArray.stories-97VetSFT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),"./src/stories/UseDeepCompareEffect.docs.mdx":async()=>e(()=>import("./UseDeepCompareEffect.docs-y-QtIPl2.js"),__vite__mapDeps([14,8,2,3,1,4,5,6,7,12]),import.meta.url),"./src/stories/UseFlag/UseFlag.stories.mdx":async()=>e(()=>import("./UseFlag.stories-GeCxatWE.js"),__vite__mapDeps([15,1,2,3,4,5,6,7,8,16,17,18,9,10,12,13]),import.meta.url),"./src/stories/UseFlexCorners/UseFlexCorners.stories.mdx":async()=>e(()=>import("./UseFlexCorners.stories-7svXpW2G.js"),__vite__mapDeps([19,1,2,3,4,5,6,7,8,9,12]),import.meta.url),"./src/stories/UseMutationObserver/UseMutationObserver.stories.mdx":async()=>e(()=>import("./UseMutationObserver.stories-ZjMmS5NG.js"),__vite__mapDeps([20,1,2,3,4,5,6,7,8,9,12]),import.meta.url),"./src/stories/UseResizeObserver/UseResizeObserver.stories.mdx":async()=>e(()=>import("./UseResizeObserver.stories--QK8wicW.js"),__vite__mapDeps([21,1,2,3,4,5,6,7,8,9,12]),import.meta.url),"./src/stories/UseTally/UseTally.stories.mdx":async()=>e(()=>import("./UseTally.stories-_ngu3Y0K.js"),__vite__mapDeps([22,1,2,3,4,5,6,7,8,16,9,10,12]),import.meta.url),"./src/stories/UseThrottleFunction/UseThrottleFunction.stories.mdx":async()=>e(()=>import("./UseThrottleFunction.stories-dSC9gC_N.js"),__vite__mapDeps([23,1,2,3,4,5,6,7,8,9,12]),import.meta.url),"./src/stories/UseThrottleValue/UseThrottleValue.stories.mdx":async()=>e(()=>import("./UseThrottleValue.stories-zb7qqSld.js"),__vite__mapDeps([24,1,2,3,4,5,6,7,8,9,11,12]),import.meta.url),"./src/stories/UseWindowListener/UseWindowListener.stories.mdx":async()=>e(()=>import("./UseWindowListener.stories-1Lvjlulm.js"),__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,12]),import.meta.url)};async function P(i){return f[i]()}const{composeConfigs:L,PreviewWeb:w,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const i=await Promise.all([e(()=>import("./entry-preview-oVjRAT5i.js"),__vite__mapDeps([26,2,3,4]),import.meta.url),e(()=>import("./entry-preview-docs-5Zlmtl9K.js"),__vite__mapDeps([27,6,3,7,2]),import.meta.url),e(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([28,5]),import.meta.url),e(()=>import("./preview-1JzCclzv.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([29,7]),import.meta.url),e(()=>import("./preview-wm7zCcxo.js"),__vite__mapDeps([30,7]),import.meta.url),e(()=>import("./preview-MdQXpms2.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([31,7]),import.meta.url),e(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-URrWATvr.js"),__vite__mapDeps([32,18,3]),import.meta.url),e(()=>import("./preview-18MR5vBK.js"),__vite__mapDeps([33,34]),import.meta.url)]);return L(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new v({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:I});export{e as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./UseArray.stories-97VetSFT.js","./chunk-HLWAVYOI-phrRoTf0.js","./index-4g5l5LRQ.js","./_commonjsHelpers-4gQjN7DL.js","./react-18-0wh8ubQX.js","./index-ogXoivrg.js","./index-TRu6N6dU.js","./index-PPLHz8o0.js","./jsx-runtime-vNq4Oc-g.js","./too-many-hooks-a2cJHX-n.js","./Select-lmjNEtHk.js","./book-names-A1ViUjO4.js","./index-_VGcpBFS.js","./index-OKSIQJVR.css","./UseDeepCompareEffect.docs-y-QtIPl2.js","./UseFlag.stories-GeCxatWE.js","./index-MSLtg_ij.js","./index-oRJpL3FP.js","./index-AKtXjuxE.js","./UseFlexCorners.stories-7svXpW2G.js","./UseMutationObserver.stories-ZjMmS5NG.js","./UseResizeObserver.stories--QK8wicW.js","./UseTally.stories-_ngu3Y0K.js","./UseThrottleFunction.stories-dSC9gC_N.js","./UseThrottleValue.stories-zb7qqSld.js","./UseWindowListener.stories-1Lvjlulm.js","./entry-preview-oVjRAT5i.js","./entry-preview-docs-5Zlmtl9K.js","./preview-VI2eoWmp.js","./preview-OnO0tzRj.js","./preview-wm7zCcxo.js","./preview-u8M_OEO2.js","./preview-URrWATvr.js","./preview-18MR5vBK.js","./preview-C4naEvFT.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}