import{a as ke,g as v,c as U}from"./use-call-dom-8Q8ZjlCD.js";import{a as re}from"./js.cookie-Cz0CWeBA.js";function Re(){const u=ke(".header__user-name"),f=localStorage.getItem("userInfo");if(u&&f){const d=JSON.parse(f);u.forEach(a=>{const r=a;r instanceof HTMLSpanElement&&(r.innerText=`${d.first_name} ${d.last_name}`)})}}function De(){ke(".sign-out").forEach(f=>{f.addEventListener("click",()=>{window.location.href="/Vitamin",localStorage.removeItem("userInfo"),re.remove("accessToken",{path:"/"}),re.remove("refreshToken",{path:"/"})})})}function Qe(){const u=document.getElementById("authPopup"),f=v(".header__profile"),d=re.get("accessToken");if(!(u instanceof HTMLDialogElement))return;const a=v(".auth-pop-up__close",u),r=v(".auth-pop-up__container",u);f&&f.addEventListener("click",()=>{if(d){window.location.href="/Vitamin/profile.html";return}u.show()}),window.showPopup=function(){u.show()},a instanceof HTMLButtonElement&&(a.addEventListener("click",()=>{u.close()}),u.addEventListener("click",n=>{if(!(r instanceof HTMLDivElement))return;const s=n.target;s instanceof Node&&!r.contains(s)&&u.close()}))}var Ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _e(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Te={exports:{}};(function(u,f){(function(a,r){u.exports=r()})(Ke,function(){return function(d){var a={};function r(n){if(a[n])return a[n].exports;var s=a[n]={i:n,l:!1,exports:{}};return d[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=d,r.c=a,r.d=function(n,s,h){r.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:h})},r.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,s){if(s&1&&(n=r(n)),s&8||s&4&&typeof n=="object"&&n&&n.__esModule)return n;var h=Object.create(null);if(r.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:n}),s&2&&typeof n!="string")for(var m in n)r.d(h,m,function(g){return n[g]}.bind(null,m));return h},r.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(s,"a",s),s},r.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},r.p="",r(r.s=0)}([function(d,a,r){r.r(a);var n=function(e){return Array.isArray(e)?e:[e]},s=function(e){return e instanceof Node},h=function(e){return e instanceof NodeList},m=function(e,t){if(e&&t){e=h(e)?e:[e];for(var o=0;o<e.length&&t(e[o],o,e.length)!==!0;o++);}},g=function(e){return console.error("[scroll-lock] ".concat(e))},O=function(e){if(Array.isArray(e)){var t=e.join(", ");return t}},I=function(e){var t=[];return m(e,function(o){return t.push(o)}),t},R=function(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(o&&I(i.querySelectorAll(t)).indexOf(e)!==-1)return e;for(;(e=e.parentElement)&&I(i.querySelectorAll(t)).indexOf(e)===-1;);return e},D=function(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,i=I(o.querySelectorAll(t)).indexOf(e)!==-1;return i},P=function(e){if(e){var t=getComputedStyle(e),o=t.overflow==="hidden";return o}},Q=function(e){if(e){if(P(e))return!0;var t=e.scrollTop;return t<=0}},K=function(e){if(e){if(P(e))return!0;var t=e.scrollTop,o=e.scrollHeight,i=t+e.offsetHeight;return i>=o}},z=function(e){if(e){if(P(e))return!0;var t=e.scrollLeft;return t<=0}},V=function(e){if(e){if(P(e))return!0;var t=e.scrollLeft,o=e.scrollWidth,i=t+e.offsetWidth;return i>=o}},we=function(e){var t='textarea, [contenteditable="true"]';return D(e,t)},Ee=function(e){var t='input[type="range"]';return D(e,t)};r.d(a,"disablePageScroll",function(){return W}),r.d(a,"enablePageScroll",function(){return B}),r.d(a,"getScrollState",function(){return k}),r.d(a,"clearQueueScrollLocks",function(){return X}),r.d(a,"getTargetScrollBarWidth",function(){return E}),r.d(a,"getCurrentTargetScrollBarWidth",function(){return M}),r.d(a,"getPageScrollBarWidth",function(){return Z}),r.d(a,"getCurrentPageScrollBarWidth",function(){return q}),r.d(a,"addScrollableTarget",function(){return H}),r.d(a,"removeScrollableTarget",function(){return _}),r.d(a,"addScrollableSelector",function(){return ie}),r.d(a,"removeScrollableSelector",function(){return ce}),r.d(a,"addLockableTarget",function(){return se}),r.d(a,"addLockableSelector",function(){return ue}),r.d(a,"setFillGapMethod",function(){return fe}),r.d(a,"addFillGapTarget",function(){return $}),r.d(a,"removeFillGapTarget",function(){return de}),r.d(a,"addFillGapSelector",function(){return N}),r.d(a,"removeFillGapSelector",function(){return ve}),r.d(a,"refillGaps",function(){return Y});function Ge(l){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),o.forEach(function(i){Ae(l,i,t[i])})}return l}function Ae(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}var J=["padding","margin","width","max-width","none"],F=3,c={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:J[0],startTouchY:0,startTouchX:0},W=function(e){c.queue<=0&&(c.scroll=!1,ee(),ge()),H(e),c.queue++},B=function(e){c.queue>0&&c.queue--,c.queue<=0&&(c.scroll=!0,Oe(),Me()),_(e)},k=function(){return c.scroll},X=function(){c.queue=0},E=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s(e)){var o=e.style.overflowY;t?k()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var i=M(e);return e.style.overflowY=o,i}else return 0},M=function(e){if(s(e))if(e===document.body){var t=document.documentElement.clientWidth,o=window.innerWidth,i=o-t;return i}else{var b=e.style.borderLeftWidth,T=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var y=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=b,e.style.borderRightWidth=T,y}else return 0},Z=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return E(document.body,e)},q=function(){return M(document.body)},H=function(e){if(e){var t=n(e);t.map(function(o){m(o,function(i){s(i)?i.setAttribute("data-scroll-lock-scrollable",""):g('"'.concat(i,'" is not a Element.'))})})}},_=function(e){if(e){var t=n(e);t.map(function(o){m(o,function(i){s(i)?i.removeAttribute("data-scroll-lock-scrollable"):g('"'.concat(i,'" is not a Element.'))})})}},ie=function(e){if(e){var t=n(e);t.map(function(o){c.scrollableSelectors.push(o)})}},ce=function(e){if(e){var t=n(e);t.map(function(o){c.scrollableSelectors=c.scrollableSelectors.filter(function(i){return i!==o})})}},se=function(e){if(e){var t=n(e);t.map(function(o){m(o,function(i){s(i)?i.setAttribute("data-scroll-lock-lockable",""):g('"'.concat(i,'" is not a Element.'))})}),k()||ee()}},ue=function(e){if(e){var t=n(e);t.map(function(o){c.lockableSelectors.push(o)}),k()||ee(),N(e)}},fe=function(e){if(e)if(J.indexOf(e)!==-1)c.fillGapMethod=e,Y();else{var t=J.join(", ");g('"'.concat(e,`" method is not available!
Available fill gap methods: `).concat(t,"."))}},$=function(e){if(e){var t=n(e);t.map(function(o){m(o,function(i){s(i)?(i.setAttribute("data-scroll-lock-fill-gap",""),c.scroll||he(i)):g('"'.concat(i,'" is not a Element.'))})})}},de=function(e){if(e){var t=n(e);t.map(function(o){m(o,function(i){s(i)?(i.removeAttribute("data-scroll-lock-fill-gap"),c.scroll||te(i)):g('"'.concat(i,'" is not a Element.'))})})}},N=function(e){if(e){var t=n(e);t.map(function(o){c.fillGapSelectors.indexOf(o)===-1&&(c.fillGapSelectors.push(o),c.scroll||pe(o))})}},ve=function(e){if(e){var t=n(e);t.map(function(o){c.fillGapSelectors=c.fillGapSelectors.filter(function(i){return i!==o}),c.scroll||me(o)})}},Y=function(){c.scroll||ge()},ee=function(){var e=O(c.lockableSelectors);Pe(e)},Oe=function(){var e=O(c.lockableSelectors);Fe(e)},Pe=function(e){var t=document.querySelectorAll(e);m(t,function(o){We(o)})},Fe=function(e){var t=document.querySelectorAll(e);m(t,function(o){Be(o)})},We=function(e){if(s(e)&&e.getAttribute("data-scroll-lock-locked")!=="true"){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},Be=function(e){s(e)&&e.getAttribute("data-scroll-lock-locked")==="true"&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},ge=function(){c.fillGapSelectors.map(function(e){pe(e)})},Me=function(){c.fillGapSelectors.map(function(e){me(e)})},pe=function(e){var t=document.querySelectorAll(e),o=c.lockableSelectors.indexOf(e)!==-1;m(t,function(i){he(i,o)})},he=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s(e)){var o;if(e.getAttribute("data-scroll-lock-lockable")===""||t)o=E(e,!0);else{var i=R(e,O(c.lockableSelectors));o=E(i,!0)}e.getAttribute("data-scroll-lock-filled-gap")==="true"&&te(e);var b=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",c.fillGapMethod),c.fillGapMethod==="margin"){var T=parseFloat(b.marginRight);e.style.marginRight="".concat(T+o,"px")}else if(c.fillGapMethod==="width")e.style.width="calc(100% - ".concat(o,"px)");else if(c.fillGapMethod==="max-width")e.style.maxWidth="calc(100% - ".concat(o,"px)");else if(c.fillGapMethod==="padding"){var y=parseFloat(b.paddingRight);e.style.paddingRight="".concat(y+o,"px")}}},me=function(e){var t=document.querySelectorAll(e);m(t,function(o){te(o)})},te=function(e){if(s(e)&&e.getAttribute("data-scroll-lock-filled-gap")==="true"){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),t==="margin"?e.style.marginRight="":t==="width"?e.style.width="":t==="max-width"?e.style.maxWidth="":t==="padding"&&(e.style.paddingRight="")}},He=function(e){Y()},Ne=function(e){c.scroll||(c.startTouchY=e.touches[0].clientY,c.startTouchX=e.touches[0].clientX)},Ye=function(e){if(!c.scroll){var t=c.startTouchY,o=c.startTouchX,i=e.touches[0].clientY,b=e.touches[0].clientX;if(e.touches.length<2){var T=O(c.scrollableSelectors),y={up:t<i,down:t>i,left:o<b,right:o>b},j={up:t+F<i,down:t-F>i,left:o+F<b,right:o-F>b},xe=function Se(p){var Ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(p){var le=R(p,T,!1);if(Ee(p))return!1;if(Ie||we(p)&&R(p,T)||D(p,T)){var C=!1;z(p)&&V(p)?(y.up&&Q(p)||y.down&&K(p))&&(C=!0):Q(p)&&K(p)?(y.left&&z(p)||y.right&&V(p))&&(C=!0):(j.up&&Q(p)||j.down&&K(p)||j.left&&z(p)||j.right&&V(p))&&(C=!0),C&&(le?Se(le,!0):e.cancelable&&e.preventDefault())}else Se(le)}else e.cancelable&&e.preventDefault()};xe(e.target)}}},je=function(e){c.scroll||(c.startTouchY=0,c.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",He),typeof document<"u"&&(document.addEventListener("touchstart",Ne),document.addEventListener("touchmove",Ye,{passive:!1}),document.addEventListener("touchend",je));var Ce={hide:function(e){g(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),W(e)},show:function(e){g(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),B(e)},toggle:function(e){g('"toggle" is deprecated! Do not use it.'),k()?W():B(e)},getState:function(){return g(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),k()},getWidth:function(){return g(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),Z()},getCurrentWidth:function(){return g(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),q()},setScrollableTargets:function(e){g(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),H(e)},setFillGapSelectors:function(e){g(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),N(e)},setFillGapTargets:function(e){g(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),$(e)},clearQueue:function(){g(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),X()}},Ue=Ge({disablePageScroll:W,enablePageScroll:B,getScrollState:k,clearQueueScrollLocks:X,getTargetScrollBarWidth:E,getCurrentTargetScrollBarWidth:M,getPageScrollBarWidth:Z,getCurrentPageScrollBarWidth:q,addScrollableSelector:ie,removeScrollableSelector:ce,addScrollableTarget:H,removeScrollableTarget:_,addLockableSelector:ue,addLockableTarget:se,addFillGapSelector:N,removeFillGapSelector:ve,addFillGapTarget:$,removeFillGapTarget:de,setFillGapMethod:fe,refillGaps:Y,_state:c},Ce);a.default=Ue}]).default})})(Te);var ne=Te.exports;const Le=v(".burger__btn"),S=v(".burger__menu.main"),G=v(".header__bag"),A=v(".header__logo"),w=v(".pack-info__bg_hulf-circle"),L=v(".header"),be=v(".cart");function $e(){if(!S)return;const u=v(".menu__item_shop",S),f=v(".menu__item_info",S),d=v(".header__profile",S),a=v(".burger__menu.shop"),r=v(".burger__menu.info"),n=v(".burger__menu.profile");Ve(),Le&&u&&a&&f&&r&&d&&n&&(x("burger__btn","main"),x("menu__item_shop","shop"),x("menu__item_info","info"),x("header__profile_adapt","profile"),oe("shop__title","shop"),oe("info__title","info"),oe("profile__title","profile"),Xe(a,r,n)),Re(),De(),Qe()}function x(u,f){const d=v(`.${u}`),a=v(`.${f}`);d&&a&&d.addEventListener("click",()=>{const r=!a.classList.contains(`${f}_active`);if(a.classList.contains("main")){a.classList.toggle(`${f}_active`),d.classList.toggle(`${u}_active`),ze(),r?ne.disablePageScroll():ne.enablePageScroll(),ae(a,r);return}a.classList.add(`${f}_active`),ae(a,r)})}function oe(u,f){if(u){const d=v(`.${u} .back-btn`),a=v(`.${f}`);if(d&&a){d.addEventListener("click",()=>{const r=!a.classList.contains(`${f}_active`);a.classList.remove(`${f}_active`),ae(a,r)});return}}}function ze(){if(G&&A&&S){if(S.classList.contains("main_active")){A.style.opacity="0",G.style.display="none",w&&(w.style.display="none");return}w&&(w.style.display="block"),A.style.opacity="1",G.style.display="block"}}function Ve(){ye(),window.addEventListener("scroll",ye)}function ye(){if(!(!L||!be)){if(window.scrollY>50||be.classList.contains("cart_active")){L.style.backgroundColor="white",L.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)",L.style.transition="background-color 0.3s ease, box-shadow 0.3s ease";return}L.style.backgroundColor="transparent",L.style.boxShadow="none"}}function ae(u,f){function a(n){return n<.5?2*n*n:-1+(4-2*n)*n}function r(n){const h=f?n:1-n;u.style.height=`${h*100}dvh`,u.style.opacity=`${h}`}f&&(u.style.visibility="visible"),Je({timing:a,draw:r,duration:300}),f||setTimeout(()=>{u.style.visibility="hidden",u.style.height="0"},300)}function Je({timing:u,draw:f,duration:d}){let a=performance.now();requestAnimationFrame(function r(n){let s=(n-a)/d;s>1&&(s=1);let h=u(s);f(h),s<1&&requestAnimationFrame(r)})}function Xe(u,f,d){window.addEventListener("resize",()=>{if(window.innerWidth>=768){if(Le?.classList.remove("burger__btn_active"),!S||!u||!f||!d)return;U(S,"remove","main_active"),S.style.visibility="hidden",S.style.height="0vh",S.style.opacity="0",w&&(w.style.display="block"),G&&A&&(A.style.opacity="1",G.style.display="block"),ne.enablePageScroll(),U(u,"remove","shop_active"),U(f,"remove","info_active"),U(d,"remove","profile_active")}})}export{_e as g,$e as i,ne as s};
