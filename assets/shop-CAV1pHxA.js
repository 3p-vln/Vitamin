import"./style-Dc5g5F7-.js";import{g as F,a as Q,c as z}from"./useCallDom-DDNnwvp7.js";import{i as ie}from"./useApi-DeWACv0o.js";import{S as Z,e as ne,c as se,m as w,a as le,b as W,d as re,g as j}from"./swiper-core-Drop_04u.js";import{a as X}from"./render-card-BZnAs6Uc.js";const G=F(".dropdown"),V=F(".dropdown__box"),Y=F(".dropdown__text"),q=F(".dropdown__list"),J=Q(".dropdown__item");function oe(){G&&(G.addEventListener("click",d=>ee(d)),J&&(J.forEach(d=>{d.addEventListener("click",()=>ce(d))}),document.addEventListener("click",d=>de(d))))}function ee(d){d.stopPropagation(),V&&(V.classList.toggle("dropdown__box_active"),q&&q.classList.toggle("dropdown__list_active"))}function pe(){V&&(z(V,"remove","dropdown__box_active"),q&&z(q,"remove","dropdown__list_active"))}function ce(d){const e=d.textContent;e&&Y&&(Y.textContent=e,ee(event))}function de(d){G&&q&&!G.contains(d.target)&&!q.contains(d.target)&&pe()}function ue(){new Z(".feedback__slider",{speed:400,spaceBetween:10,slidesPerView:1,breakpoints:{1024:{slidesPerView:3,spaceBetween:30},576:{slidesPerView:2,spaceBetween:20}}})}function te(d,e,S,r){return d.params.createElements&&Object.keys(r).forEach(o=>{if(!S[o]&&S.auto===!0){let l=ne(d.el,`.${r[o]}`)[0];l||(l=se("div",r[o]),l.className=r[o],d.el.append(l)),S[o]=l,e[o]=l}}),S}function fe(d){let{swiper:e,extendParams:S,on:r,emit:o}=d;S({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function l(n){let s;return n&&typeof n=="string"&&e.isElement&&(s=e.el.querySelector(n)||e.hostEl.querySelector(n),s)?s:(n&&(typeof n=="string"&&(s=[...document.querySelectorAll(n)]),e.params.uniqueNavElements&&typeof n=="string"&&s&&s.length>1&&e.el.querySelectorAll(n).length===1?s=e.el.querySelector(n):s&&s.length===1&&(s=s[0])),n&&!s?n:s)}function v(n,s){const u=e.params.navigation;n=w(n),n.forEach(c=>{c&&(c.classList[s?"add":"remove"](...u.disabledClass.split(" ")),c.tagName==="BUTTON"&&(c.disabled=s),e.params.watchOverflow&&e.enabled&&c.classList[e.isLocked?"add":"remove"](u.lockClass))})}function y(){const{nextEl:n,prevEl:s}=e.navigation;if(e.params.loop){v(s,!1),v(n,!1);return}v(s,e.isBeginning&&!e.params.rewind),v(n,e.isEnd&&!e.params.rewind)}function D(n){n.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),o("navigationPrev"))}function T(n){n.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),o("navigationNext"))}function E(){const n=e.params.navigation;if(e.params.navigation=te(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let s=l(n.nextEl),u=l(n.prevEl);Object.assign(e.navigation,{nextEl:s,prevEl:u}),s=w(s),u=w(u);const c=(t,a)=>{t&&t.addEventListener("click",a==="next"?T:D),!e.enabled&&t&&t.classList.add(...n.lockClass.split(" "))};s.forEach(t=>c(t,"next")),u.forEach(t=>c(t,"prev"))}function k(){let{nextEl:n,prevEl:s}=e.navigation;n=w(n),s=w(s);const u=(c,t)=>{c.removeEventListener("click",t==="next"?T:D),c.classList.remove(...e.params.navigation.disabledClass.split(" "))};n.forEach(c=>u(c,"next")),s.forEach(c=>u(c,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?B():(E(),y())}),r("toEdge fromEdge lock unlock",()=>{y()}),r("destroy",()=>{k()}),r("enable disable",()=>{let{nextEl:n,prevEl:s}=e.navigation;if(n=w(n),s=w(s),e.enabled){y();return}[...n,...s].filter(u=>!!u).forEach(u=>u.classList.add(e.params.navigation.lockClass))}),r("click",(n,s)=>{let{nextEl:u,prevEl:c}=e.navigation;u=w(u),c=w(c);const t=s.target;let a=c.includes(t)||u.includes(t);if(e.isElement&&!a){const i=s.path||s.composedPath&&s.composedPath();i&&(a=i.find(p=>u.includes(p)||c.includes(p)))}if(e.params.navigation.hideOnClick&&!a){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===t||e.pagination.el.contains(t)))return;let i;u.length?i=u[0].classList.contains(e.params.navigation.hiddenClass):c.length&&(i=c[0].classList.contains(e.params.navigation.hiddenClass)),o(i===!0?"navigationShow":"navigationHide"),[...u,...c].filter(p=>!!p).forEach(p=>p.classList.toggle(e.params.navigation.hiddenClass))}});const _=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),E(),y()},B=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),k()};Object.assign(e.navigation,{enable:_,disable:B,update:y,init:E,destroy:k})}function N(d){return d===void 0&&(d=""),`.${d.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function me(d){let{swiper:e,extendParams:S,on:r,emit:o}=d;const l="swiper-pagination";S({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),e.pagination={el:null,bullets:[]};let v,y=0;function D(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function T(t,a){const{bulletActiveClass:i}=e.params.pagination;t&&(t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${i}-${a}`),t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${i}-${a}-${a}`)))}function E(t,a,i){if(t=t%i,a=a%i,a===t+1)return"next";if(a===t-1)return"previous"}function k(t){const a=t.target.closest(N(e.params.pagination.bulletClass));if(!a)return;t.preventDefault();const i=W(a)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;const p=E(e.realIndex,i,e.slides.length);p==="next"?e.slideNext():p==="previous"?e.slidePrev():e.slideToLoop(i)}else e.slideTo(i)}function _(){const t=e.rtl,a=e.params.pagination;if(D())return;let i=e.pagination.el;i=w(i);let p,h;const A=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,M=e.params.loop?Math.ceil(A/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(h=e.previousRealIndex||0,p=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(p=e.snapIndex,h=e.previousSnapIndex):(h=e.previousIndex||0,p=e.activeIndex||0),a.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const f=e.pagination.bullets;let b,L,O;if(a.dynamicBullets&&(v=le(f[0],e.isHorizontal()?"width":"height",!0),i.forEach(g=>{g.style[e.isHorizontal()?"width":"height"]=`${v*(a.dynamicMainBullets+4)}px`}),a.dynamicMainBullets>1&&h!==void 0&&(y+=p-(h||0),y>a.dynamicMainBullets-1?y=a.dynamicMainBullets-1:y<0&&(y=0)),b=Math.max(p-y,0),L=b+(Math.min(f.length,a.dynamicMainBullets)-1),O=(L+b)/2),f.forEach(g=>{const C=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(x=>`${a.bulletActiveClass}${x}`)].map(x=>typeof x=="string"&&x.includes(" ")?x.split(" "):x).flat();g.classList.remove(...C)}),i.length>1)f.forEach(g=>{const C=W(g);C===p?g.classList.add(...a.bulletActiveClass.split(" ")):e.isElement&&g.setAttribute("part","bullet"),a.dynamicBullets&&(C>=b&&C<=L&&g.classList.add(...`${a.bulletActiveClass}-main`.split(" ")),C===b&&T(g,"prev"),C===L&&T(g,"next"))});else{const g=f[p];if(g&&g.classList.add(...a.bulletActiveClass.split(" ")),e.isElement&&f.forEach((C,x)=>{C.setAttribute("part",x===p?"bullet-active":"bullet")}),a.dynamicBullets){const C=f[b],x=f[L];for(let I=b;I<=L;I+=1)f[I]&&f[I].classList.add(...`${a.bulletActiveClass}-main`.split(" "));T(C,"prev"),T(x,"next")}}if(a.dynamicBullets){const g=Math.min(f.length,a.dynamicMainBullets+4),C=(v*g-v)/2-O*v,x=t?"right":"left";f.forEach(I=>{I.style[e.isHorizontal()?x:"top"]=`${C}px`})}}i.forEach((f,b)=>{if(a.type==="fraction"&&(f.querySelectorAll(N(a.currentClass)).forEach(L=>{L.textContent=a.formatFractionCurrent(p+1)}),f.querySelectorAll(N(a.totalClass)).forEach(L=>{L.textContent=a.formatFractionTotal(M)})),a.type==="progressbar"){let L;a.progressbarOpposite?L=e.isHorizontal()?"vertical":"horizontal":L=e.isHorizontal()?"horizontal":"vertical";const O=(p+1)/M;let g=1,C=1;L==="horizontal"?g=O:C=O,f.querySelectorAll(N(a.progressbarFillClass)).forEach(x=>{x.style.transform=`translate3d(0,0,0) scaleX(${g}) scaleY(${C})`,x.style.transitionDuration=`${e.params.speed}ms`})}a.type==="custom"&&a.renderCustom?(f.innerHTML=a.renderCustom(e,p+1,M),b===0&&o("paginationRender",f)):(b===0&&o("paginationRender",f),o("paginationUpdate",f)),e.params.watchOverflow&&e.enabled&&f.classList[e.isLocked?"add":"remove"](a.lockClass)})}function B(){const t=e.params.pagination;if(D())return;const a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let i=e.pagination.el;i=w(i);let p="";if(t.type==="bullets"){let h=e.params.loop?Math.ceil(a/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&h>a&&(h=a);for(let A=0;A<h;A+=1)t.renderBullet?p+=t.renderBullet.call(e,A,t.bulletClass):p+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?p=t.renderFraction.call(e,t.currentClass,t.totalClass):p=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?p=t.renderProgressbar.call(e,t.progressbarFillClass):p=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(h=>{t.type!=="custom"&&(h.innerHTML=p||""),t.type==="bullets"&&e.pagination.bullets.push(...h.querySelectorAll(N(t.bulletClass)))}),t.type!=="custom"&&o("paginationRender",i[0])}function n(){e.params.pagination=te(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let a;typeof t.el=="string"&&e.isElement&&(a=e.el.querySelector(t.el)),!a&&typeof t.el=="string"&&(a=[...document.querySelectorAll(t.el)]),a||(a=t.el),!(!a||a.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(a)&&a.length>1&&(a=[...e.el.querySelectorAll(t.el)],a.length>1&&(a=a.find(i=>re(i,".swiper")[0]===e.el))),Array.isArray(a)&&a.length===1&&(a=a[0]),Object.assign(e.pagination,{el:a}),a=w(a),a.forEach(i=>{t.type==="bullets"&&t.clickable&&i.classList.add(...(t.clickableClass||"").split(" ")),i.classList.add(t.modifierClass+t.type),i.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(i.classList.add(`${t.modifierClass}${t.type}-dynamic`),y=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&i.classList.add(t.progressbarOppositeClass),t.clickable&&i.addEventListener("click",k),e.enabled||i.classList.add(t.lockClass)}))}function s(){const t=e.params.pagination;if(D())return;let a=e.pagination.el;a&&(a=w(a),a.forEach(i=>{i.classList.remove(t.hiddenClass),i.classList.remove(t.modifierClass+t.type),i.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(i.classList.remove(...(t.clickableClass||"").split(" ")),i.removeEventListener("click",k))})),e.pagination.bullets&&e.pagination.bullets.forEach(i=>i.classList.remove(...t.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:a}=e.pagination;a=w(a),a.forEach(i=>{i.classList.remove(t.horizontalClass,t.verticalClass),i.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?c():(n(),B(),_())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&_()}),r("snapIndexChange",()=>{_()}),r("snapGridLengthChange",()=>{B(),_()}),r("destroy",()=>{s()}),r("enable disable",()=>{let{el:t}=e.pagination;t&&(t=w(t),t.forEach(a=>a.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{_()}),r("click",(t,a)=>{const i=a.target,p=w(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&p&&p.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const h=p[0].classList.contains(e.params.pagination.hiddenClass);o(h===!0?"paginationShow":"paginationHide"),p.forEach(A=>A.classList.toggle(e.params.pagination.hiddenClass))}});const u=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=w(t),t.forEach(a=>a.classList.remove(e.params.pagination.paginationDisabledClass))),n(),B(),_()},c=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=w(t),t.forEach(a=>a.classList.add(e.params.pagination.paginationDisabledClass))),s()};Object.assign(e.pagination,{enable:u,disable:c,render:B,update:_,init:n,destroy:s})}function ge(d){let{swiper:e,extendParams:S,on:r,emit:o,params:l}=d;e.autoplay={running:!1,paused:!1,timeLeft:0},S({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let v,y,D=l&&l.autoplay?l.autoplay.delay:3e3,T=l&&l.autoplay?l.autoplay.delay:3e3,E,k=new Date().getTime(),_,B,n,s,u,c,t;function a(m){!e||e.destroyed||!e.wrapperEl||m.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",a),!(t||m.detail&&m.detail.bySwiperTouchMove)&&b())}const i=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?_=!0:_&&(T=E,_=!1);const m=e.autoplay.paused?E:k+T-new Date().getTime();e.autoplay.timeLeft=m,o("autoplayTimeLeft",m,m/D),y=requestAnimationFrame(()=>{i()})},p=()=>{let m;return e.virtual&&e.params.virtual.enabled?m=e.slides.find($=>$.classList.contains("swiper-slide-active")):m=e.slides[e.activeIndex],m?parseInt(m.getAttribute("data-swiper-autoplay"),10):void 0},h=m=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(y),i();let P=typeof m>"u"?e.params.autoplay.delay:m;D=e.params.autoplay.delay,T=e.params.autoplay.delay;const $=p();!Number.isNaN($)&&$>0&&typeof m>"u"&&(P=$,D=$,T=$),E=P;const H=e.params.speed,U=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(H,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,H,!0,!0),o("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(H,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,H,!0,!0),o("autoplay")),e.params.cssMode&&(k=new Date().getTime(),requestAnimationFrame(()=>{h()})))};return P>0?(clearTimeout(v),v=setTimeout(()=>{U()},P)):requestAnimationFrame(()=>{U()}),P},A=()=>{k=new Date().getTime(),e.autoplay.running=!0,h(),o("autoplayStart")},M=()=>{e.autoplay.running=!1,clearTimeout(v),cancelAnimationFrame(y),o("autoplayStop")},f=(m,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(v),m||(c=!0);const $=()=>{o("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",a):b()};if(e.autoplay.paused=!0,P){u&&(E=e.params.autoplay.delay),u=!1,$();return}E=(E||e.params.autoplay.delay)-(new Date().getTime()-k),!(e.isEnd&&E<0&&!e.params.loop)&&(E<0&&(E=0),$())},b=()=>{e.isEnd&&E<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(k=new Date().getTime(),c?(c=!1,h(E)):h(),e.autoplay.paused=!1,o("autoplayResume"))},L=()=>{if(e.destroyed||!e.autoplay.running)return;const m=j();m.visibilityState==="hidden"&&(c=!0,f(!0)),m.visibilityState==="visible"&&b()},O=m=>{m.pointerType==="mouse"&&(c=!0,t=!0,!(e.animating||e.autoplay.paused)&&f(!0))},g=m=>{m.pointerType==="mouse"&&(t=!1,e.autoplay.paused&&b())},C=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",O),e.el.addEventListener("pointerleave",g))},x=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",O),e.el.removeEventListener("pointerleave",g))},I=()=>{j().addEventListener("visibilitychange",L)},ae=()=>{j().removeEventListener("visibilitychange",L)};r("init",()=>{e.params.autoplay.enabled&&(C(),I(),A())}),r("destroy",()=>{x(),ae(),e.autoplay.running&&M()}),r("_freeModeStaticRelease",()=>{(n||c)&&b()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?M():f(!0,!0)}),r("beforeTransitionStart",(m,P,$)=>{e.destroyed||!e.autoplay.running||($||!e.params.autoplay.disableOnInteraction?f(!0,!0):M())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){M();return}B=!0,n=!1,c=!1,s=setTimeout(()=>{c=!0,n=!0,f(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!B)){if(clearTimeout(s),clearTimeout(v),e.params.autoplay.disableOnInteraction){n=!1,B=!1;return}n&&e.params.cssMode&&b(),n=!1,B=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||(u=!0)}),Object.assign(e.autoplay,{start:A,stop:M,pause:f,resume:b})}async function ve(){ye(),new Z(".shop-baners__swiper",{modules:[fe,me,ge],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:5e3},loop:!0,slidesPerView:1,spaceBetween:20,centeredSlides:!0,breakpoints:{768:{slidesPerView:"auto",spaceBetween:35},1440:{slidesPerView:"auto",spaceBetween:50}}})}function ye(){const d=document.querySelectorAll(".swiper-slide.swiper-slide-duplicate");window.innerWidth<768&&d.forEach(S=>{S.remove()})}const R=Q(".filter__item"),K=F(".dropdown__text");async function he(d){if(!R||!K)return;const e=new URLSearchParams(window.location.search);let S=1,r=e.get("category")||void 0;R.forEach(o=>{const l=o.innerText.trim();!r&&l==="All categories"||l===r?(z(o,"add","filter__item_active"),K.innerText=l):z(o,"remove","filter__item_active")}),await X(d,S,r),R.forEach(o=>{o.addEventListener("click",async()=>{const l=o.innerText.trim();S=1,l==="All categories"?(e.delete("category"),r=void 0):(e.set("category",l),r=l),window.history.pushState({},"",`?${e.toString()}`);const v=F(d);v&&(v.innerHTML=""),R.forEach(y=>{z(y,"remove","filter__item_active")}),z(o,"add","filter__item_active"),await X(d,S,r)})})}document.addEventListener("DOMContentLoaded",async()=>{ie(),ve(),oe(),he(".catalog-list__content"),ue()});
