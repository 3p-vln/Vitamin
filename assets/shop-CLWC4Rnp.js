import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{i as J}from"./cart-CaP9Sn4e.js";import{i as K}from"./header-BaXmDIfv.js";import{e as Q,c as Z,m as E,a as ee,b as j,d as ae,g as N,S as te,f as ie}from"./feedback-slider-8kgBe8k2.js";import{a as V,s as ne,h as se}from"./render-card-BVd9TdA8.js";import{a as le,g as R,c as F}from"./use-call-dom-DDNnwvp7.js";import{s as U,r as re}from"./stopPreload-BW9xUuEZ.js";import"./use-api-DTQNp6K8.js";function X(m,e,S,l){return m.params.createElements&&Object.keys(l).forEach(o=>{if(!S[o]&&S.auto===!0){let r=Q(m.el,`.${l[o]}`)[0];r||(r=Z("div",l[o]),r.className=l[o],m.el.append(r)),S[o]=r,e[o]=r}}),S}function oe(m){let{swiper:e,extendParams:S,on:l,emit:o}=m;S({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function r(n){let s;return n&&typeof n=="string"&&e.isElement&&(s=e.el.querySelector(n)||e.hostEl.querySelector(n),s)?s:(n&&(typeof n=="string"&&(s=[...document.querySelectorAll(n)]),e.params.uniqueNavElements&&typeof n=="string"&&s&&s.length>1&&e.el.querySelectorAll(n).length===1?s=e.el.querySelector(n):s&&s.length===1&&(s=s[0])),n&&!s?n:s)}function y(n,s){const d=e.params.navigation;n=E(n),n.forEach(c=>{c&&(c.classList[s?"add":"remove"](...d.disabledClass.split(" ")),c.tagName==="BUTTON"&&(c.disabled=s),e.params.watchOverflow&&e.enabled&&c.classList[e.isLocked?"add":"remove"](d.lockClass))})}function v(){const{nextEl:n,prevEl:s}=e.navigation;if(e.params.loop){y(s,!1),y(n,!1);return}y(s,e.isBeginning&&!e.params.rewind),y(n,e.isEnd&&!e.params.rewind)}function A(n){n.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),o("navigationPrev"))}function $(n){n.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),o("navigationNext"))}function L(){const n=e.params.navigation;if(e.params.navigation=X(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let s=r(n.nextEl),d=r(n.prevEl);Object.assign(e.navigation,{nextEl:s,prevEl:d}),s=E(s),d=E(d);const c=(a,t)=>{a&&a.addEventListener("click",t==="next"?$:A),!e.enabled&&a&&a.classList.add(...n.lockClass.split(" "))};s.forEach(a=>c(a,"next")),d.forEach(a=>c(a,"prev"))}function B(){let{nextEl:n,prevEl:s}=e.navigation;n=E(n),s=E(s);const d=(c,a)=>{c.removeEventListener("click",a==="next"?$:A),c.classList.remove(...e.params.navigation.disabledClass.split(" "))};n.forEach(c=>d(c,"next")),s.forEach(c=>d(c,"prev"))}l("init",()=>{e.params.navigation.enabled===!1?D():(L(),v())}),l("toEdge fromEdge lock unlock",()=>{v()}),l("destroy",()=>{B()}),l("enable disable",()=>{let{nextEl:n,prevEl:s}=e.navigation;if(n=E(n),s=E(s),e.enabled){v();return}[...n,...s].filter(d=>!!d).forEach(d=>d.classList.add(e.params.navigation.lockClass))}),l("click",(n,s)=>{let{nextEl:d,prevEl:c}=e.navigation;d=E(d),c=E(c);const a=s.target;let t=c.includes(a)||d.includes(a);if(e.isElement&&!t){const i=s.path||s.composedPath&&s.composedPath();i&&(t=i.find(p=>d.includes(p)||c.includes(p)))}if(e.params.navigation.hideOnClick&&!t){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let i;d.length?i=d[0].classList.contains(e.params.navigation.hiddenClass):c.length&&(i=c[0].classList.contains(e.params.navigation.hiddenClass)),o(i===!0?"navigationShow":"navigationHide"),[...d,...c].filter(p=>!!p).forEach(p=>p.classList.toggle(e.params.navigation.hiddenClass))}});const T=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),L(),v()},D=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),B()};Object.assign(e.navigation,{enable:T,disable:D,update:v,init:L,destroy:B})}function q(m){return m===void 0&&(m=""),`.${m.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function pe(m){let{swiper:e,extendParams:S,on:l,emit:o}=m;const r="swiper-pagination";S({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let y,v=0;function A(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function $(a,t){const{bulletActiveClass:i}=e.params.pagination;a&&(a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${i}-${t}`),a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${i}-${t}-${t}`)))}function L(a,t,i){if(a=a%i,t=t%i,t===a+1)return"next";if(t===a-1)return"previous"}function B(a){const t=a.target.closest(q(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const i=j(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;const p=L(e.realIndex,i,e.slides.length);p==="next"?e.slideNext():p==="previous"?e.slidePrev():e.slideToLoop(i)}else e.slideTo(i)}function T(){const a=e.rtl,t=e.params.pagination;if(A())return;let i=e.pagination.el;i=E(i);let p,h;const M=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,O=e.params.loop?Math.ceil(M/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(h=e.previousRealIndex||0,p=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(p=e.snapIndex,h=e.previousSnapIndex):(h=e.previousIndex||0,p=e.activeIndex||0),t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const u=e.pagination.bullets;let b,w,_;if(t.dynamicBullets&&(y=ee(u[0],e.isHorizontal()?"width":"height",!0),i.forEach(g=>{g.style[e.isHorizontal()?"width":"height"]=`${y*(t.dynamicMainBullets+4)}px`}),t.dynamicMainBullets>1&&h!==void 0&&(v+=p-(h||0),v>t.dynamicMainBullets-1?v=t.dynamicMainBullets-1:v<0&&(v=0)),b=Math.max(p-v,0),w=b+(Math.min(u.length,t.dynamicMainBullets)-1),_=(w+b)/2),u.forEach(g=>{const C=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(x=>`${t.bulletActiveClass}${x}`)].map(x=>typeof x=="string"&&x.includes(" ")?x.split(" "):x).flat();g.classList.remove(...C)}),i.length>1)u.forEach(g=>{const C=j(g);C===p?g.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&g.setAttribute("part","bullet"),t.dynamicBullets&&(C>=b&&C<=w&&g.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),C===b&&$(g,"prev"),C===w&&$(g,"next"))});else{const g=u[p];if(g&&g.classList.add(...t.bulletActiveClass.split(" ")),e.isElement&&u.forEach((C,x)=>{C.setAttribute("part",x===p?"bullet-active":"bullet")}),t.dynamicBullets){const C=u[b],x=u[w];for(let I=b;I<=w;I+=1)u[I]&&u[I].classList.add(...`${t.bulletActiveClass}-main`.split(" "));$(C,"prev"),$(x,"next")}}if(t.dynamicBullets){const g=Math.min(u.length,t.dynamicMainBullets+4),C=(y*g-y)/2-_*y,x=a?"right":"left";u.forEach(I=>{I.style[e.isHorizontal()?x:"top"]=`${C}px`})}}i.forEach((u,b)=>{if(t.type==="fraction"&&(u.querySelectorAll(q(t.currentClass)).forEach(w=>{w.textContent=t.formatFractionCurrent(p+1)}),u.querySelectorAll(q(t.totalClass)).forEach(w=>{w.textContent=t.formatFractionTotal(O)})),t.type==="progressbar"){let w;t.progressbarOpposite?w=e.isHorizontal()?"vertical":"horizontal":w=e.isHorizontal()?"horizontal":"vertical";const _=(p+1)/O;let g=1,C=1;w==="horizontal"?g=_:C=_,u.querySelectorAll(q(t.progressbarFillClass)).forEach(x=>{x.style.transform=`translate3d(0,0,0) scaleX(${g}) scaleY(${C})`,x.style.transitionDuration=`${e.params.speed}ms`})}t.type==="custom"&&t.renderCustom?(u.innerHTML=t.renderCustom(e,p+1,O),b===0&&o("paginationRender",u)):(b===0&&o("paginationRender",u),o("paginationUpdate",u)),e.params.watchOverflow&&e.enabled&&u.classList[e.isLocked?"add":"remove"](t.lockClass)})}function D(){const a=e.params.pagination;if(A())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let i=e.pagination.el;i=E(i);let p="";if(a.type==="bullets"){let h=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&h>t&&(h=t);for(let M=0;M<h;M+=1)a.renderBullet?p+=a.renderBullet.call(e,M,a.bulletClass):p+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?p=a.renderFraction.call(e,a.currentClass,a.totalClass):p=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?p=a.renderProgressbar.call(e,a.progressbarFillClass):p=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(h=>{a.type!=="custom"&&(h.innerHTML=p||""),a.type==="bullets"&&e.pagination.bullets.push(...h.querySelectorAll(q(a.bulletClass)))}),a.type!=="custom"&&o("paginationRender",i[0])}function n(){e.params.pagination=X(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.find(i=>ae(i,".swiper")[0]===e.el))),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=E(t),t.forEach(i=>{a.type==="bullets"&&a.clickable&&i.classList.add(...(a.clickableClass||"").split(" ")),i.classList.add(a.modifierClass+a.type),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(i.classList.add(`${a.modifierClass}${a.type}-dynamic`),v=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&i.classList.add(a.progressbarOppositeClass),a.clickable&&i.addEventListener("click",B),e.enabled||i.classList.add(a.lockClass)}))}function s(){const a=e.params.pagination;if(A())return;let t=e.pagination.el;t&&(t=E(t),t.forEach(i=>{i.classList.remove(a.hiddenClass),i.classList.remove(a.modifierClass+a.type),i.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(i.classList.remove(...(a.clickableClass||"").split(" ")),i.removeEventListener("click",B))})),e.pagination.bullets&&e.pagination.bullets.forEach(i=>i.classList.remove(...a.bulletActiveClass.split(" ")))}l("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:t}=e.pagination;t=E(t),t.forEach(i=>{i.classList.remove(a.horizontalClass,a.verticalClass),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),l("init",()=>{e.params.pagination.enabled===!1?c():(n(),D(),T())}),l("activeIndexChange",()=>{typeof e.snapIndex>"u"&&T()}),l("snapIndexChange",()=>{T()}),l("snapGridLengthChange",()=>{D(),T()}),l("destroy",()=>{s()}),l("enable disable",()=>{let{el:a}=e.pagination;a&&(a=E(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),l("lock unlock",()=>{T()}),l("click",(a,t)=>{const i=t.target,p=E(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&p&&p.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const h=p[0].classList.contains(e.params.pagination.hiddenClass);o(h===!0?"paginationShow":"paginationHide"),p.forEach(M=>M.classList.toggle(e.params.pagination.hiddenClass))}});const d=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=E(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),n(),D(),T()},c=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=E(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),s()};Object.assign(e.pagination,{enable:d,disable:c,render:D,update:T,init:n,destroy:s})}function ce(m){let{swiper:e,extendParams:S,on:l,emit:o,params:r}=m;e.autoplay={running:!1,paused:!1,timeLeft:0},S({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let y,v,A=r&&r.autoplay?r.autoplay.delay:3e3,$=r&&r.autoplay?r.autoplay.delay:3e3,L,B=new Date().getTime(),T,D,n,s,d,c,a;function t(f){!e||e.destroyed||!e.wrapperEl||f.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",t),!(a||f.detail&&f.detail.bySwiperTouchMove)&&b())}const i=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?T=!0:T&&($=L,T=!1);const f=e.autoplay.paused?L:B+$-new Date().getTime();e.autoplay.timeLeft=f,o("autoplayTimeLeft",f,f/A),v=requestAnimationFrame(()=>{i()})},p=()=>{let f;return e.virtual&&e.params.virtual.enabled?f=e.slides.find(k=>k.classList.contains("swiper-slide-active")):f=e.slides[e.activeIndex],f?parseInt(f.getAttribute("data-swiper-autoplay"),10):void 0},h=f=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(v),i();let P=typeof f>"u"?e.params.autoplay.delay:f;A=e.params.autoplay.delay,$=e.params.autoplay.delay;const k=p();!Number.isNaN(k)&&k>0&&typeof f>"u"&&(P=k,A=k,$=k),L=P;const z=e.params.speed,G=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(z,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,z,!0,!0),o("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(z,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,z,!0,!0),o("autoplay")),e.params.cssMode&&(B=new Date().getTime(),requestAnimationFrame(()=>{h()})))};return P>0?(clearTimeout(y),y=setTimeout(()=>{G()},P)):requestAnimationFrame(()=>{G()}),P},M=()=>{B=new Date().getTime(),e.autoplay.running=!0,h(),o("autoplayStart")},O=()=>{e.autoplay.running=!1,clearTimeout(y),cancelAnimationFrame(v),o("autoplayStop")},u=(f,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(y),f||(c=!0);const k=()=>{o("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",t):b()};if(e.autoplay.paused=!0,P){d&&(L=e.params.autoplay.delay),d=!1,k();return}L=(L||e.params.autoplay.delay)-(new Date().getTime()-B),!(e.isEnd&&L<0&&!e.params.loop)&&(L<0&&(L=0),k())},b=()=>{e.isEnd&&L<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(B=new Date().getTime(),c?(c=!1,h(L)):h(),e.autoplay.paused=!1,o("autoplayResume"))},w=()=>{if(e.destroyed||!e.autoplay.running)return;const f=N();f.visibilityState==="hidden"&&(c=!0,u(!0)),f.visibilityState==="visible"&&b()},_=f=>{f.pointerType==="mouse"&&(c=!0,a=!0,!(e.animating||e.autoplay.paused)&&u(!0))},g=f=>{f.pointerType==="mouse"&&(a=!1,e.autoplay.paused&&b())},C=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",_),e.el.addEventListener("pointerleave",g))},x=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",_),e.el.removeEventListener("pointerleave",g))},I=()=>{N().addEventListener("visibilitychange",w)},Y=()=>{N().removeEventListener("visibilitychange",w)};l("init",()=>{e.params.autoplay.enabled&&(C(),I(),M())}),l("destroy",()=>{x(),Y(),e.autoplay.running&&O()}),l("_freeModeStaticRelease",()=>{(n||c)&&b()}),l("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?O():u(!0,!0)}),l("beforeTransitionStart",(f,P,k)=>{e.destroyed||!e.autoplay.running||(k||!e.params.autoplay.disableOnInteraction?u(!0,!0):O())}),l("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){O();return}D=!0,n=!1,c=!1,s=setTimeout(()=>{c=!0,n=!0,u(!0)},200)}}),l("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!D)){if(clearTimeout(s),clearTimeout(y),e.params.autoplay.disableOnInteraction){n=!1,D=!1;return}n&&e.params.cssMode&&b(),n=!1,D=!1}}),l("slideChange",()=>{e.destroyed||!e.autoplay.running||(d=!0)}),Object.assign(e.autoplay,{start:M,stop:O,pause:u,resume:b})}async function de(){ue(),new te(".shop-baners__swiper",{modules:[oe,pe,ce],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:5e3},loop:!1,slidesPerView:1,spaceBetween:20,centeredSlides:!0,breakpoints:{768:{slidesPerView:"auto",spaceBetween:35,loop:!0},1440:{slidesPerView:"auto",spaceBetween:50,loop:!0}}})}function ue(){const m=document.querySelectorAll(".shop-baners__swiper-slide-duplicate");window.innerWidth<768&&m.forEach(S=>{S.remove()})}const H=le(".filter__item"),W=R(".catalog__content .dropdown__text");async function fe(m){if(!H||!W)return;const e=new URLSearchParams(window.location.search);let S=1,l=e.get("category")||void 0;H.forEach(o=>{const r=o.innerText.trim();!l&&r==="All categories"||r===l?(F(o,"add","filter__item_active"),W.innerText=r):F(o,"remove","filter__item_active")}),await V(m,S,l),window.innerWidth>=768&&ne(m,l),window.innerWidth<768&&await se(m,l),U(),H.forEach(o=>{o.addEventListener("click",async()=>{const r=o.innerText.trim();S=1,r==="All categories"?(e.delete("category"),l=void 0):(e.set("category",r),l=r),window.history.pushState({},"",`?${e.toString()}`);const y=R(m);y&&(y.innerHTML=""),H.forEach(v=>{F(v,"remove","filter__item_active")}),F(o,"add","filter__item_active"),await V(m,S,l)})})}document.addEventListener("DOMContentLoaded",async()=>{K(),await de();const m=R(".catalog__content");m&&(J(m),await fe(".catalog-list__content"),ie(),U())});re();
