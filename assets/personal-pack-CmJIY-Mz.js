function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/header-u8cLUe4m.js","assets/use-call-dom-DDNnwvp7.js","assets/js.cookie-Cz0CWeBA.js","assets/scroll-lock-DIYiYMmB.js","assets/pack-info-C57x5Z_b.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{u as a,_ as e}from"./lazy-load-Cgk4cJeL.js";import{g as n,a as c}from"./use-call-dom-DDNnwvp7.js";import{s,r as d}from"./stopPreload-BW9xUuEZ.js";import{a as _,c as m,i as p}from"./cart-Ln4c61Nd.js";import{r as u}from"./render-card-DU-2UlsJ.js";import"./dropdown-7a_ekS_C.js";import"./use-api-AcE-7l2M.js";import"./js.cookie-Cz0CWeBA.js";import"./scroll-lock-DIYiYMmB.js";function l(){const t=n(".your-pack"),r=n(".your-pack__continue");!t||!r||window.innerWidth<=768&&window.addEventListener("scroll",()=>{const o=t.getBoundingClientRect();if(o.top<=0&&o.bottom<=920){r.classList.remove("your-pack__continue_fixed");return}r.classList.add("your-pack__continue_fixed")})}const i=n(".your-pack__continue");async function f(){const t=c(".prod-card");if(!i||!t)return;const r=Array.from(t).map(o=>o.classList[1]);console.log(t),i.addEventListener("click",async o=>{await _(r),m(o)})}document.addEventListener("DOMContentLoaded",async()=>{const t=[{importFn:()=>e(()=>import("./header-u8cLUe4m.js"),__vite__mapDeps([0,1,2,3])),selector:".header"},{importFn:()=>e(()=>import("./pack-info-C57x5Z_b.js"),__vite__mapDeps([4,1])),selector:".pack-info__title span"},{importFn:()=>e(()=>import("./pack-info-C57x5Z_b.js"),__vite__mapDeps([4,1])),selector:".pack-info__title span"}];await p(),await u(".your-pack__cards","white"),await f(),t.forEach(({importFn:r,selector:o})=>a(r,o)),l(),s()});d();
