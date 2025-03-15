function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/feedback-slider-EqPxlzzp.js","assets/swiper-core-Drop_04u.js","assets/shop-filter-D5DdTLcj.js","assets/render-card-gJhhzIdX.js","assets/use-api-AcE-7l2M.js","assets/js.cookie-Cz0CWeBA.js","assets/use-call-dom-DDNnwvp7.js","assets/lazy-load-CcXlw6so.js","assets/filter-dropdown-DtrBfE6V.js","assets/dropdown-7a_ekS_C.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{u as j,l as W,s as U,r as X,_ as q}from"./lazy-load-CcXlw6so.js";import{i as Y}from"./cart-Ln4c61Nd.js";import{e as J,c as K,m as h,a as Q,b as R,d as Z,g as H,S as ee}from"./swiper-core-Drop_04u.js";import{i as ae}from"./header-6t43BYEa.js";import"./use-call-dom-DDNnwvp7.js";import"./dropdown-7a_ekS_C.js";import"./use-api-AcE-7l2M.js";import"./js.cookie-Cz0CWeBA.js";import"./scroll-lock-DIYiYMmB.js";function G(w,e,S,p){return w.params.createElements&&Object.keys(p).forEach(c=>{if(!S[c]&&S.auto===!0){let o=J(w.el,`.${p[c]}`)[0];o||(o=K("div",p[c]),o.className=p[c],w.el.append(o)),S[c]=o,e[c]=o}}),S}function te(w){let{swiper:e,extendParams:S,on:p,emit:c}=w;S({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function o(n){let s;return n&&typeof n=="string"&&e.isElement&&(s=e.el.querySelector(n)||e.hostEl.querySelector(n),s)?s:(n&&(typeof n=="string"&&(s=[...document.querySelectorAll(n)]),e.params.uniqueNavElements&&typeof n=="string"&&s&&s.length>1&&e.el.querySelectorAll(n).length===1?s=e.el.querySelector(n):s&&s.length===1&&(s=s[0])),n&&!s?n:s)}function x(n,s){const d=e.params.navigation;n=h(n),n.forEach(r=>{r&&(r.classList[s?"add":"remove"](...d.disabledClass.split(" ")),r.tagName==="BUTTON"&&(r.disabled=s),e.params.watchOverflow&&e.enabled&&r.classList[e.isLocked?"add":"remove"](d.lockClass))})}function b(){const{nextEl:n,prevEl:s}=e.navigation;if(e.params.loop){x(s,!1),x(n,!1);return}x(s,e.isBeginning&&!e.params.rewind),x(n,e.isEnd&&!e.params.rewind)}function A(n){n.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),c("navigationPrev"))}function D(n){n.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),c("navigationNext"))}function C(){const n=e.params.navigation;if(e.params.navigation=G(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let s=o(n.nextEl),d=o(n.prevEl);Object.assign(e.navigation,{nextEl:s,prevEl:d}),s=h(s),d=h(d);const r=(a,t)=>{a&&a.addEventListener("click",t==="next"?D:A),!e.enabled&&a&&a.classList.add(...n.lockClass.split(" "))};s.forEach(a=>r(a,"next")),d.forEach(a=>r(a,"prev"))}function $(){let{nextEl:n,prevEl:s}=e.navigation;n=h(n),s=h(s);const d=(r,a)=>{r.removeEventListener("click",a==="next"?D:A),r.classList.remove(...e.params.navigation.disabledClass.split(" "))};n.forEach(r=>d(r,"next")),s.forEach(r=>d(r,"prev"))}p("init",()=>{e.params.navigation.enabled===!1?B():(C(),b())}),p("toEdge fromEdge lock unlock",()=>{b()}),p("destroy",()=>{$()}),p("enable disable",()=>{let{nextEl:n,prevEl:s}=e.navigation;if(n=h(n),s=h(s),e.enabled){b();return}[...n,...s].filter(d=>!!d).forEach(d=>d.classList.add(e.params.navigation.lockClass))}),p("click",(n,s)=>{let{nextEl:d,prevEl:r}=e.navigation;d=h(d),r=h(r);const a=s.target;let t=r.includes(a)||d.includes(a);if(e.isElement&&!t){const i=s.path||s.composedPath&&s.composedPath();i&&(t=i.find(l=>d.includes(l)||r.includes(l)))}if(e.params.navigation.hideOnClick&&!t){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let i;d.length?i=d[0].classList.contains(e.params.navigation.hiddenClass):r.length&&(i=r[0].classList.contains(e.params.navigation.hiddenClass)),c(i===!0?"navigationShow":"navigationHide"),[...d,...r].filter(l=>!!l).forEach(l=>l.classList.toggle(e.params.navigation.hiddenClass))}});const T=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),C(),b()},B=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),$()};Object.assign(e.navigation,{enable:T,disable:B,update:b,init:C,destroy:$})}function F(w){return w===void 0&&(w=""),`.${w.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ie(w){let{swiper:e,extendParams:S,on:p,emit:c}=w;const o="swiper-pagination";S({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),e.pagination={el:null,bullets:[]};let x,b=0;function A(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function D(a,t){const{bulletActiveClass:i}=e.params.pagination;a&&(a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${i}-${t}`),a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${i}-${t}-${t}`)))}function C(a,t,i){if(a=a%i,t=t%i,t===a+1)return"next";if(t===a-1)return"previous"}function $(a){const t=a.target.closest(F(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const i=R(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;const l=C(e.realIndex,i,e.slides.length);l==="next"?e.slideNext():l==="previous"?e.slidePrev():e.slideToLoop(i)}else e.slideTo(i)}function T(){const a=e.rtl,t=e.params.pagination;if(A())return;let i=e.pagination.el;i=h(i);let l,g;const M=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,O=e.params.loop?Math.ceil(M/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(g=e.previousRealIndex||0,l=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(l=e.snapIndex,g=e.previousSnapIndex):(g=e.previousIndex||0,l=e.activeIndex||0),t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const u=e.pagination.bullets;let y,E,_;if(t.dynamicBullets&&(x=Q(u[0],e.isHorizontal()?"width":"height",!0),i.forEach(m=>{m.style[e.isHorizontal()?"width":"height"]=`${x*(t.dynamicMainBullets+4)}px`}),t.dynamicMainBullets>1&&g!==void 0&&(b+=l-(g||0),b>t.dynamicMainBullets-1?b=t.dynamicMainBullets-1:b<0&&(b=0)),y=Math.max(l-b,0),E=y+(Math.min(u.length,t.dynamicMainBullets)-1),_=(E+y)/2),u.forEach(m=>{const v=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(L=>`${t.bulletActiveClass}${L}`)].map(L=>typeof L=="string"&&L.includes(" ")?L.split(" "):L).flat();m.classList.remove(...v)}),i.length>1)u.forEach(m=>{const v=R(m);v===l?m.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&m.setAttribute("part","bullet"),t.dynamicBullets&&(v>=y&&v<=E&&m.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),v===y&&D(m,"prev"),v===E&&D(m,"next"))});else{const m=u[l];if(m&&m.classList.add(...t.bulletActiveClass.split(" ")),e.isElement&&u.forEach((v,L)=>{v.setAttribute("part",L===l?"bullet-active":"bullet")}),t.dynamicBullets){const v=u[y],L=u[E];for(let I=y;I<=E;I+=1)u[I]&&u[I].classList.add(...`${t.bulletActiveClass}-main`.split(" "));D(v,"prev"),D(L,"next")}}if(t.dynamicBullets){const m=Math.min(u.length,t.dynamicMainBullets+4),v=(x*m-x)/2-_*x,L=a?"right":"left";u.forEach(I=>{I.style[e.isHorizontal()?L:"top"]=`${v}px`})}}i.forEach((u,y)=>{if(t.type==="fraction"&&(u.querySelectorAll(F(t.currentClass)).forEach(E=>{E.textContent=t.formatFractionCurrent(l+1)}),u.querySelectorAll(F(t.totalClass)).forEach(E=>{E.textContent=t.formatFractionTotal(O)})),t.type==="progressbar"){let E;t.progressbarOpposite?E=e.isHorizontal()?"vertical":"horizontal":E=e.isHorizontal()?"horizontal":"vertical";const _=(l+1)/O;let m=1,v=1;E==="horizontal"?m=_:v=_,u.querySelectorAll(F(t.progressbarFillClass)).forEach(L=>{L.style.transform=`translate3d(0,0,0) scaleX(${m}) scaleY(${v})`,L.style.transitionDuration=`${e.params.speed}ms`})}t.type==="custom"&&t.renderCustom?(u.innerHTML=t.renderCustom(e,l+1,O),y===0&&c("paginationRender",u)):(y===0&&c("paginationRender",u),c("paginationUpdate",u)),e.params.watchOverflow&&e.enabled&&u.classList[e.isLocked?"add":"remove"](t.lockClass)})}function B(){const a=e.params.pagination;if(A())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let i=e.pagination.el;i=h(i);let l="";if(a.type==="bullets"){let g=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&g>t&&(g=t);for(let M=0;M<g;M+=1)a.renderBullet?l+=a.renderBullet.call(e,M,a.bulletClass):l+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?l=a.renderFraction.call(e,a.currentClass,a.totalClass):l=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?l=a.renderProgressbar.call(e,a.progressbarFillClass):l=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(g=>{a.type!=="custom"&&(g.innerHTML=l||""),a.type==="bullets"&&e.pagination.bullets.push(...g.querySelectorAll(F(a.bulletClass)))}),a.type!=="custom"&&c("paginationRender",i[0])}function n(){e.params.pagination=G(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.find(i=>Z(i,".swiper")[0]===e.el))),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=h(t),t.forEach(i=>{a.type==="bullets"&&a.clickable&&i.classList.add(...(a.clickableClass||"").split(" ")),i.classList.add(a.modifierClass+a.type),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(i.classList.add(`${a.modifierClass}${a.type}-dynamic`),b=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&i.classList.add(a.progressbarOppositeClass),a.clickable&&i.addEventListener("click",$),e.enabled||i.classList.add(a.lockClass)}))}function s(){const a=e.params.pagination;if(A())return;let t=e.pagination.el;t&&(t=h(t),t.forEach(i=>{i.classList.remove(a.hiddenClass),i.classList.remove(a.modifierClass+a.type),i.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(i.classList.remove(...(a.clickableClass||"").split(" ")),i.removeEventListener("click",$))})),e.pagination.bullets&&e.pagination.bullets.forEach(i=>i.classList.remove(...a.bulletActiveClass.split(" ")))}p("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:t}=e.pagination;t=h(t),t.forEach(i=>{i.classList.remove(a.horizontalClass,a.verticalClass),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),p("init",()=>{e.params.pagination.enabled===!1?r():(n(),B(),T())}),p("activeIndexChange",()=>{typeof e.snapIndex>"u"&&T()}),p("snapIndexChange",()=>{T()}),p("snapGridLengthChange",()=>{B(),T()}),p("destroy",()=>{s()}),p("enable disable",()=>{let{el:a}=e.pagination;a&&(a=h(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),p("lock unlock",()=>{T()}),p("click",(a,t)=>{const i=t.target,l=h(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&l&&l.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const g=l[0].classList.contains(e.params.pagination.hiddenClass);c(g===!0?"paginationShow":"paginationHide"),l.forEach(M=>M.classList.toggle(e.params.pagination.hiddenClass))}});const d=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=h(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),n(),B(),T()},r=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=h(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),s()};Object.assign(e.pagination,{enable:d,disable:r,render:B,update:T,init:n,destroy:s})}function ne(w){let{swiper:e,extendParams:S,on:p,emit:c,params:o}=w;e.autoplay={running:!1,paused:!1,timeLeft:0},S({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let x,b,A=o&&o.autoplay?o.autoplay.delay:3e3,D=o&&o.autoplay?o.autoplay.delay:3e3,C,$=new Date().getTime(),T,B,n,s,d,r,a;function t(f){!e||e.destroyed||!e.wrapperEl||f.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",t),!(a||f.detail&&f.detail.bySwiperTouchMove)&&y())}const i=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?T=!0:T&&(D=C,T=!1);const f=e.autoplay.paused?C:$+D-new Date().getTime();e.autoplay.timeLeft=f,c("autoplayTimeLeft",f,f/A),b=requestAnimationFrame(()=>{i()})},l=()=>{let f;return e.virtual&&e.params.virtual.enabled?f=e.slides.find(k=>k.classList.contains("swiper-slide-active")):f=e.slides[e.activeIndex],f?parseInt(f.getAttribute("data-swiper-autoplay"),10):void 0},g=f=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(b),i();let P=typeof f>"u"?e.params.autoplay.delay:f;A=e.params.autoplay.delay,D=e.params.autoplay.delay;const k=l();!Number.isNaN(k)&&k>0&&typeof f>"u"&&(P=k,A=k,D=k),C=P;const z=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(z,!0,!0),c("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,z,!0,!0),c("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(z,!0,!0),c("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,z,!0,!0),c("autoplay")),e.params.cssMode&&($=new Date().getTime(),requestAnimationFrame(()=>{g()})))};return P>0?(clearTimeout(x),x=setTimeout(()=>{N()},P)):requestAnimationFrame(()=>{N()}),P},M=()=>{$=new Date().getTime(),e.autoplay.running=!0,g(),c("autoplayStart")},O=()=>{e.autoplay.running=!1,clearTimeout(x),cancelAnimationFrame(b),c("autoplayStop")},u=(f,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(x),f||(r=!0);const k=()=>{c("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",t):y()};if(e.autoplay.paused=!0,P){d&&(C=e.params.autoplay.delay),d=!1,k();return}C=(C||e.params.autoplay.delay)-(new Date().getTime()-$),!(e.isEnd&&C<0&&!e.params.loop)&&(C<0&&(C=0),k())},y=()=>{e.isEnd&&C<0&&!e.params.loop||e.destroyed||!e.autoplay.running||($=new Date().getTime(),r?(r=!1,g(C)):g(),e.autoplay.paused=!1,c("autoplayResume"))},E=()=>{if(e.destroyed||!e.autoplay.running)return;const f=H();f.visibilityState==="hidden"&&(r=!0,u(!0)),f.visibilityState==="visible"&&y()},_=f=>{f.pointerType==="mouse"&&(r=!0,a=!0,!(e.animating||e.autoplay.paused)&&u(!0))},m=f=>{f.pointerType==="mouse"&&(a=!1,e.autoplay.paused&&y())},v=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",_),e.el.addEventListener("pointerleave",m))},L=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",_),e.el.removeEventListener("pointerleave",m))},I=()=>{H().addEventListener("visibilitychange",E)},V=()=>{H().removeEventListener("visibilitychange",E)};p("init",()=>{e.params.autoplay.enabled&&(v(),I(),M())}),p("destroy",()=>{L(),V(),e.autoplay.running&&O()}),p("_freeModeStaticRelease",()=>{(n||r)&&y()}),p("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?O():u(!0,!0)}),p("beforeTransitionStart",(f,P,k)=>{e.destroyed||!e.autoplay.running||(k||!e.params.autoplay.disableOnInteraction?u(!0,!0):O())}),p("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){O();return}B=!0,n=!1,r=!1,s=setTimeout(()=>{r=!0,n=!0,u(!0)},200)}}),p("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!B)){if(clearTimeout(s),clearTimeout(x),e.params.autoplay.disableOnInteraction){n=!1,B=!1;return}n&&e.params.cssMode&&y(),n=!1,B=!1}}),p("slideChange",()=>{e.destroyed||!e.autoplay.running||(d=!0)}),Object.assign(e.autoplay,{start:M,stop:O,pause:u,resume:y})}function se(){le(),new ee(".shop-baners__swiper",{modules:[te,ie,ne],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:5e3},loop:!1,slidesPerView:1,spaceBetween:0,centeredSlides:!0,breakpoints:{768:{slidesPerView:"auto",spaceBetween:35,loop:!0},1440:{slidesPerView:"auto",spaceBetween:50,loop:!0}}})}function le(){const w=document.querySelectorAll(".shop-baners__swiper-slide-duplicate");window.innerWidth<768&&w.forEach(S=>{S.remove()})}document.addEventListener("DOMContentLoaded",async()=>{[{importFn:()=>q(()=>import("./feedback-slider-EqPxlzzp.js"),__vite__mapDeps([0,1])),selector:".feedback__slider"},{importFn:()=>q(()=>import("./shop-filter-D5DdTLcj.js"),__vite__mapDeps([2,3,4,5,6,7])),selector:".catalog-list__content"},{importFn:()=>q(()=>import("./filter-dropdown-DtrBfE6V.js"),__vite__mapDeps([8,6,9])),selector:".catalog__content"}].forEach(({importFn:e,selector:S})=>j(e,S)),ae(),se(),await Y(),W(),U()});X();
