function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/pack-info-CVr84PGy.js","assets/use-call-dom-CaqOo_cc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{g as i,c as n,a as s}from"./use-call-dom-CaqOo_cc.js";/* empty css              */import{u as d,s as m,r as _,_ as a}from"./lazy-load-V4MgisZy.js";import{c as p,i as u}from"./cart-DXeR0fPe.js";import{a as f}from"./cart-operation-D63wE5-_.js";import{r as l}from"./render-card-Dy0t9w5z.js";import{i as k}from"./header-DqcmDyAO.js";import"./render-cart-D6BsKffK.js";import"./dropdown-ojf4R2tx.js";import"./use-api-Bg0RsZwB.js";import"./js.cookie-Cz0CWeBA.js";function v(){const o=i(".your-pack"),t=i(".your-pack__continue");!o||!t||(window.addEventListener("scroll",()=>{r(o,t)}),window.addEventListener("resize",()=>{r(o,t)}),r(o,t))}function r(o,t){if(window.innerWidth<=768){const e=o.getBoundingClientRect();window.innerHeight-e.bottom<-150?n(t,"add","your-pack__continue_fixed"):n(t,"remove","your-pack__continue_fixed");return}n(t,"remove","your-pack__continue_fixed")}const c=i(".your-pack__continue");function w(){const o=s(".prod-card");if(!c||!o)return;const t=Array.from(o).map(e=>e.classList[1]);c.addEventListener("click",async e=>{await f(t),p(e)})}document.addEventListener("DOMContentLoaded",async()=>{await l(".your-pack__cards","white");const o=[{importFn:()=>a(()=>import("./pack-info-CVr84PGy.js"),__vite__mapDeps([0,1])),selector:".pack-info__title span"},{importFn:()=>a(()=>import("./pack-info-CVr84PGy.js"),__vite__mapDeps([0,1])),selector:".pack-info__title span"}];k(),o.forEach(({importFn:t,selector:e})=>d(t,e)),w(),u(),v(),m()});_();
