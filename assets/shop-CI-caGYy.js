function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/feedback-slider-EqPxlzzp.js","assets/swiper-core-Drop_04u.js","assets/shop-filter-DCGVNCyz.js","assets/render-card-Bek8HGIh.js","assets/use-api-CoVlJz1c.js","assets/js.cookie-Cz0CWeBA.js","assets/use-call-dom-8Q8ZjlCD.js","assets/lazy-load-3l2UQROd.js","assets/filter-dropdown-BjEMFwI2.js","assets/dropdown-MNiyI8bl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{u as j,l as W,s as U,r as X,_ as q}from"./lazy-load-3l2UQROd.js";import{i as Y}from"./cart-DVgdNB4U.js";import{i as J}from"./header-SP3ikm1B.js";import{e as K,c as Q,m as C,a as Z,b as R,d as ee,g as H,S as ae}from"./swiper-core-Drop_04u.js";import{a as te}from"./use-call-dom-8Q8ZjlCD.js";import"./render-cart-2Y8Hph8K.js";import"./dropdown-MNiyI8bl.js";import"./use-api-CoVlJz1c.js";import"./js.cookie-Cz0CWeBA.js";function G(m,e,v,r){return m.params.createElements&&Object.keys(r).forEach(c=>{if(!v[c]&&v.auto===!0){let p=K(m.el,`.${r[c]}`)[0];p||(p=Q("div",r[c]),p.className=r[c],m.el.append(p)),v[c]=p,e[c]=p}}),v}function ie(m){let{swiper:e,extendParams:v,on:r,emit:c}=m;v({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function p(n){let s;return n&&typeof n=="string"&&e.isElement&&(s=e.el.querySelector(n)||e.hostEl.querySelector(n),s)?s:(n&&(typeof n=="string"&&(s=[...document.querySelectorAll(n)]),e.params.uniqueNavElements&&typeof n=="string"&&s&&s.length>1&&e.el.querySelectorAll(n).length===1?s=e.el.querySelector(n):s&&s.length===1&&(s=s[0])),n&&!s?n:s)}function S(n,s){const d=e.params.navigation;n=C(n),n.forEach(o=>{o&&(o.classList[s?"add":"remove"](...d.disabledClass.split(" ")),o.tagName==="BUTTON"&&(o.disabled=s),e.params.watchOverflow&&e.enabled&&o.classList[e.isLocked?"add":"remove"](d.lockClass))})}function E(){const{nextEl:n,prevEl:s}=e.navigation;if(e.params.loop){S(s,!1),S(n,!1);return}S(s,e.isBeginning&&!e.params.rewind),S(n,e.isEnd&&!e.params.rewind)}function k(n){n.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),c("navigationPrev"))}function D(n){n.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),c("navigationNext"))}function L(){const n=e.params.navigation;if(e.params.navigation=G(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let s=p(n.nextEl),d=p(n.prevEl);Object.assign(e.navigation,{nextEl:s,prevEl:d}),s=C(s),d=C(d);const o=(a,t)=>{a&&a.addEventListener("click",t==="next"?D:k),!e.enabled&&a&&a.classList.add(...n.lockClass.split(" "))};s.forEach(a=>o(a,"next")),d.forEach(a=>o(a,"prev"))}function $(){let{nextEl:n,prevEl:s}=e.navigation;n=C(n),s=C(s);const d=(o,a)=>{o.removeEventListener("click",a==="next"?D:k),o.classList.remove(...e.params.navigation.disabledClass.split(" "))};n.forEach(o=>d(o,"next")),s.forEach(o=>d(o,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?B():(L(),E())}),r("toEdge fromEdge lock unlock",()=>{E()}),r("destroy",()=>{$()}),r("enable disable",()=>{let{nextEl:n,prevEl:s}=e.navigation;if(n=C(n),s=C(s),e.enabled){E();return}[...n,...s].filter(d=>!!d).forEach(d=>d.classList.add(e.params.navigation.lockClass))}),r("click",(n,s)=>{let{nextEl:d,prevEl:o}=e.navigation;d=C(d),o=C(o);const a=s.target;let t=o.includes(a)||d.includes(a);if(e.isElement&&!t){const i=s.path||s.composedPath&&s.composedPath();i&&(t=i.find(l=>d.includes(l)||o.includes(l)))}if(e.params.navigation.hideOnClick&&!t){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let i;d.length?i=d[0].classList.contains(e.params.navigation.hiddenClass):o.length&&(i=o[0].classList.contains(e.params.navigation.hiddenClass)),c(i===!0?"navigationShow":"navigationHide"),[...d,...o].filter(l=>!!l).forEach(l=>l.classList.toggle(e.params.navigation.hiddenClass))}});const T=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),L(),E()},B=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),$()};Object.assign(e.navigation,{enable:T,disable:B,update:E,init:L,destroy:$})}function F(m){return m===void 0&&(m=""),`.${m.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ne(m){let{swiper:e,extendParams:v,on:r,emit:c}=m;const p="swiper-pagination";v({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${p}-bullet`,bulletActiveClass:`${p}-bullet-active`,modifierClass:`${p}-`,currentClass:`${p}-current`,totalClass:`${p}-total`,hiddenClass:`${p}-hidden`,progressbarFillClass:`${p}-progressbar-fill`,progressbarOppositeClass:`${p}-progressbar-opposite`,clickableClass:`${p}-clickable`,lockClass:`${p}-lock`,horizontalClass:`${p}-horizontal`,verticalClass:`${p}-vertical`,paginationDisabledClass:`${p}-disabled`}}),e.pagination={el:null,bullets:[]};let S,E=0;function k(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function D(a,t){const{bulletActiveClass:i}=e.params.pagination;a&&(a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${i}-${t}`),a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${i}-${t}-${t}`)))}function L(a,t,i){if(a=a%i,t=t%i,t===a+1)return"next";if(t===a-1)return"previous"}function $(a){const t=a.target.closest(F(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const i=R(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;const l=L(e.realIndex,i,e.slides.length);l==="next"?e.slideNext():l==="previous"?e.slidePrev():e.slideToLoop(i)}else e.slideTo(i)}function T(){const a=e.rtl,t=e.params.pagination;if(k())return;let i=e.pagination.el;i=C(i);let l,y;const M=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,O=e.params.loop?Math.ceil(M/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(y=e.previousRealIndex||0,l=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(l=e.snapIndex,y=e.previousSnapIndex):(y=e.previousIndex||0,l=e.activeIndex||0),t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const u=e.pagination.bullets;let h,w,_;if(t.dynamicBullets&&(S=Z(u[0],e.isHorizontal()?"width":"height",!0),i.forEach(g=>{g.style[e.isHorizontal()?"width":"height"]=`${S*(t.dynamicMainBullets+4)}px`}),t.dynamicMainBullets>1&&y!==void 0&&(E+=l-(y||0),E>t.dynamicMainBullets-1?E=t.dynamicMainBullets-1:E<0&&(E=0)),h=Math.max(l-E,0),w=h+(Math.min(u.length,t.dynamicMainBullets)-1),_=(w+h)/2),u.forEach(g=>{const b=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(x=>`${t.bulletActiveClass}${x}`)].map(x=>typeof x=="string"&&x.includes(" ")?x.split(" "):x).flat();g.classList.remove(...b)}),i.length>1)u.forEach(g=>{const b=R(g);b===l?g.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&g.setAttribute("part","bullet"),t.dynamicBullets&&(b>=h&&b<=w&&g.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),b===h&&D(g,"prev"),b===w&&D(g,"next"))});else{const g=u[l];if(g&&g.classList.add(...t.bulletActiveClass.split(" ")),e.isElement&&u.forEach((b,x)=>{b.setAttribute("part",x===l?"bullet-active":"bullet")}),t.dynamicBullets){const b=u[h],x=u[w];for(let I=h;I<=w;I+=1)u[I]&&u[I].classList.add(...`${t.bulletActiveClass}-main`.split(" "));D(b,"prev"),D(x,"next")}}if(t.dynamicBullets){const g=Math.min(u.length,t.dynamicMainBullets+4),b=(S*g-S)/2-_*S,x=a?"right":"left";u.forEach(I=>{I.style[e.isHorizontal()?x:"top"]=`${b}px`})}}i.forEach((u,h)=>{if(t.type==="fraction"&&(u.querySelectorAll(F(t.currentClass)).forEach(w=>{w.textContent=t.formatFractionCurrent(l+1)}),u.querySelectorAll(F(t.totalClass)).forEach(w=>{w.textContent=t.formatFractionTotal(O)})),t.type==="progressbar"){let w;t.progressbarOpposite?w=e.isHorizontal()?"vertical":"horizontal":w=e.isHorizontal()?"horizontal":"vertical";const _=(l+1)/O;let g=1,b=1;w==="horizontal"?g=_:b=_,u.querySelectorAll(F(t.progressbarFillClass)).forEach(x=>{x.style.transform=`translate3d(0,0,0) scaleX(${g}) scaleY(${b})`,x.style.transitionDuration=`${e.params.speed}ms`})}t.type==="custom"&&t.renderCustom?(u.innerHTML=t.renderCustom(e,l+1,O),h===0&&c("paginationRender",u)):(h===0&&c("paginationRender",u),c("paginationUpdate",u)),e.params.watchOverflow&&e.enabled&&u.classList[e.isLocked?"add":"remove"](t.lockClass)})}function B(){const a=e.params.pagination;if(k())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let i=e.pagination.el;i=C(i);let l="";if(a.type==="bullets"){let y=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&y>t&&(y=t);for(let M=0;M<y;M+=1)a.renderBullet?l+=a.renderBullet.call(e,M,a.bulletClass):l+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?l=a.renderFraction.call(e,a.currentClass,a.totalClass):l=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?l=a.renderProgressbar.call(e,a.progressbarFillClass):l=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(y=>{a.type!=="custom"&&(y.innerHTML=l||""),a.type==="bullets"&&e.pagination.bullets.push(...y.querySelectorAll(F(a.bulletClass)))}),a.type!=="custom"&&c("paginationRender",i[0])}function n(){e.params.pagination=G(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.find(i=>ee(i,".swiper")[0]===e.el))),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=C(t),t.forEach(i=>{a.type==="bullets"&&a.clickable&&i.classList.add(...(a.clickableClass||"").split(" ")),i.classList.add(a.modifierClass+a.type),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(i.classList.add(`${a.modifierClass}${a.type}-dynamic`),E=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&i.classList.add(a.progressbarOppositeClass),a.clickable&&i.addEventListener("click",$),e.enabled||i.classList.add(a.lockClass)}))}function s(){const a=e.params.pagination;if(k())return;let t=e.pagination.el;t&&(t=C(t),t.forEach(i=>{i.classList.remove(a.hiddenClass),i.classList.remove(a.modifierClass+a.type),i.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(i.classList.remove(...(a.clickableClass||"").split(" ")),i.removeEventListener("click",$))})),e.pagination.bullets&&e.pagination.bullets.forEach(i=>i.classList.remove(...a.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:t}=e.pagination;t=C(t),t.forEach(i=>{i.classList.remove(a.horizontalClass,a.verticalClass),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?o():(n(),B(),T())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&T()}),r("snapIndexChange",()=>{T()}),r("snapGridLengthChange",()=>{B(),T()}),r("destroy",()=>{s()}),r("enable disable",()=>{let{el:a}=e.pagination;a&&(a=C(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{T()}),r("click",(a,t)=>{const i=t.target,l=C(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&l&&l.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const y=l[0].classList.contains(e.params.pagination.hiddenClass);c(y===!0?"paginationShow":"paginationHide"),l.forEach(M=>M.classList.toggle(e.params.pagination.hiddenClass))}});const d=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=C(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),n(),B(),T()},o=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=C(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),s()};Object.assign(e.pagination,{enable:d,disable:o,render:B,update:T,init:n,destroy:s})}function se(m){let{swiper:e,extendParams:v,on:r,emit:c,params:p}=m;e.autoplay={running:!1,paused:!1,timeLeft:0},v({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let S,E,k=p&&p.autoplay?p.autoplay.delay:3e3,D=p&&p.autoplay?p.autoplay.delay:3e3,L,$=new Date().getTime(),T,B,n,s,d,o,a;function t(f){!e||e.destroyed||!e.wrapperEl||f.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",t),!(a||f.detail&&f.detail.bySwiperTouchMove)&&h())}const i=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?T=!0:T&&(D=L,T=!1);const f=e.autoplay.paused?L:$+D-new Date().getTime();e.autoplay.timeLeft=f,c("autoplayTimeLeft",f,f/k),E=requestAnimationFrame(()=>{i()})},l=()=>{let f;return e.virtual&&e.params.virtual.enabled?f=e.slides.find(A=>A.classList.contains("swiper-slide-active")):f=e.slides[e.activeIndex],f?parseInt(f.getAttribute("data-swiper-autoplay"),10):void 0},y=f=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(E),i();let P=typeof f>"u"?e.params.autoplay.delay:f;k=e.params.autoplay.delay,D=e.params.autoplay.delay;const A=l();!Number.isNaN(A)&&A>0&&typeof f>"u"&&(P=A,k=A,D=A),L=P;const z=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(z,!0,!0),c("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,z,!0,!0),c("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(z,!0,!0),c("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,z,!0,!0),c("autoplay")),e.params.cssMode&&($=new Date().getTime(),requestAnimationFrame(()=>{y()})))};return P>0?(clearTimeout(S),S=setTimeout(()=>{N()},P)):requestAnimationFrame(()=>{N()}),P},M=()=>{$=new Date().getTime(),e.autoplay.running=!0,y(),c("autoplayStart")},O=()=>{e.autoplay.running=!1,clearTimeout(S),cancelAnimationFrame(E),c("autoplayStop")},u=(f,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(S),f||(o=!0);const A=()=>{c("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",t):h()};if(e.autoplay.paused=!0,P){d&&(L=e.params.autoplay.delay),d=!1,A();return}L=(L||e.params.autoplay.delay)-(new Date().getTime()-$),!(e.isEnd&&L<0&&!e.params.loop)&&(L<0&&(L=0),A())},h=()=>{e.isEnd&&L<0&&!e.params.loop||e.destroyed||!e.autoplay.running||($=new Date().getTime(),o?(o=!1,y(L)):y(),e.autoplay.paused=!1,c("autoplayResume"))},w=()=>{if(e.destroyed||!e.autoplay.running)return;const f=H();f.visibilityState==="hidden"&&(o=!0,u(!0)),f.visibilityState==="visible"&&h()},_=f=>{f.pointerType==="mouse"&&(o=!0,a=!0,!(e.animating||e.autoplay.paused)&&u(!0))},g=f=>{f.pointerType==="mouse"&&(a=!1,e.autoplay.paused&&h())},b=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",_),e.el.addEventListener("pointerleave",g))},x=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",_),e.el.removeEventListener("pointerleave",g))},I=()=>{H().addEventListener("visibilitychange",w)},V=()=>{H().removeEventListener("visibilitychange",w)};r("init",()=>{e.params.autoplay.enabled&&(b(),I(),M())}),r("destroy",()=>{x(),V(),e.autoplay.running&&O()}),r("_freeModeStaticRelease",()=>{(n||o)&&h()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?O():u(!0,!0)}),r("beforeTransitionStart",(f,P,A)=>{e.destroyed||!e.autoplay.running||(A||!e.params.autoplay.disableOnInteraction?u(!0,!0):O())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){O();return}B=!0,n=!1,o=!1,s=setTimeout(()=>{o=!0,n=!0,u(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!B)){if(clearTimeout(s),clearTimeout(S),e.params.autoplay.disableOnInteraction){n=!1,B=!1;return}n&&e.params.cssMode&&h(),n=!1,B=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||(d=!0)}),Object.assign(e.autoplay,{start:M,stop:O,pause:u,resume:h})}async function le(m){return new Promise((e,v)=>{const r=new Image;r.onload=()=>e({width:r.width,height:r.height}),r.onerror=()=>v(new Error("Failed to load image")),r.src=m})}async function re(m){if(m.src)try{const{width:e,height:v}=await le(m.src);m.setAttribute("width",e.toString()),m.setAttribute("height",v.toString())}catch(e){console.error("Error loading image:",e)}}function oe(){te("img").forEach(m=>re(m))}function pe(){ce(),oe(),new ae(".shop-baners__swiper",{modules:[ie,ne,se],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:5e3},loop:!1,slidesPerView:1,spaceBetween:0,centeredSlides:!0,breakpoints:{768:{slidesPerView:"auto",spaceBetween:35,loop:!0},1440:{slidesPerView:"auto",spaceBetween:50,loop:!0}}})}function ce(){const m=document.querySelectorAll(".shop-baners__swiper-slide-duplicate");window.innerWidth<768&&m.forEach(v=>{v.remove()})}document.addEventListener("DOMContentLoaded",async()=>{[{importFn:()=>q(()=>import("./feedback-slider-EqPxlzzp.js"),__vite__mapDeps([0,1])),selector:".feedback__slider"},{importFn:()=>q(()=>import("./shop-filter-DCGVNCyz.js"),__vite__mapDeps([2,3,4,5,6,7])),selector:".catalog-list__content"},{importFn:()=>q(()=>import("./filter-dropdown-BjEMFwI2.js"),__vite__mapDeps([8,6,9])),selector:".catalog__content"}].forEach(({importFn:e,selector:v})=>j(e,v)),Y(),pe(),J(),W(),U()});X();
