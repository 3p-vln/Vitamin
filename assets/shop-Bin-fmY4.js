function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/header-C4HaJV0h.js","assets/use-call-dom-DDNnwvp7.js","assets/cart-DuQjIQUj.js","assets/dropdown-7a_ekS_C.js","assets/use-api-DGP1fZH4.js","assets/feedback-slider-EqPxlzzp.js","assets/swiper-core-Drop_04u.js","assets/shop-baners-C1cg2TL1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{u as g,l as w,_ as c}from"./lazy-load-Cgk4cJeL.js";import{i as u}from"./dropdown-7a_ekS_C.js";import{a as l,s as v,h}from"./render-card-DWRjcXjQ.js";import{a as y,g as _,c as a}from"./use-call-dom-DDNnwvp7.js";import{s as p,r as E}from"./stopPreload-BW9xUuEZ.js";import"./use-api-DGP1fZH4.js";const n=y(".filter__item"),m=_(".catalog__content .dropdown__text");async function L(t){if(!n||!m)return;const r=new URLSearchParams(window.location.search);let s=1,e=r.get("category")||void 0;n.forEach(o=>{const i=o.innerText.trim();!e&&i==="All categories"||i===e?(a(o,"add","filter__item_active"),m.innerText=i):a(o,"remove","filter__item_active")}),await l(t,s,e),window.innerWidth>=768&&v(t,e),window.innerWidth<768&&await h(t,e),p(),n.forEach(o=>{o.addEventListener("click",async()=>{const i=o.innerText.trim();s=1,i==="All categories"?(r.delete("category"),e=void 0):(r.set("category",i),e=i),window.history.pushState({},"",`?${r.toString()}`);const d=_(t);d&&(d.innerHTML=""),n.forEach(f=>{a(f,"remove","filter__item_active")}),a(o,"add","filter__item_active"),await l(t,s,e)})})}const A=[{importFn:()=>c(()=>import("./header-C4HaJV0h.js"),__vite__mapDeps([0,1,2,3,4])),selector:".header"},{importFn:()=>c(()=>import("./feedback-slider-EqPxlzzp.js"),__vite__mapDeps([5,6])),selector:".feedback__slider"},{importFn:()=>c(()=>import("./shop-baners-C1cg2TL1.js"),__vite__mapDeps([7,6])),selector:".shop-baners__swiper"}];A.forEach(({importFn:t,selector:r})=>g(t,r));document.addEventListener("DOMContentLoaded",async()=>{const t=_(".catalog__content");t&&(u(t),await L(".catalog-list__content"),w(),p())});E();
