import{g as r,c as m}from"./use-call-dom-DDNnwvp7.js";import{f as k}from"./cart-CeQbMX7A.js";import{c as b}from"./use-api-Cn90IiIh.js";function $(){const e=document.querySelectorAll(".header__user-name"),t=localStorage.getItem("userInfo");if(e&&t){const n=JSON.parse(t);e.forEach(o=>{const i=o;i.innerText=`${n.first_name} ${n.last_name}`})}}function B(){document.querySelectorAll(".sign-out").forEach(t=>{t.addEventListener("click",()=>{window.location.href="/Vitamin",localStorage.removeItem("userInfo"),b.remove("accessToken",{path:"/"}),b.remove("refreshToken",{path:"/"})})})}function E(){const e=document.getElementById("authPopup"),t=document.querySelector(".header__profile"),n=b.get("accessToken");t&&t.addEventListener("click",()=>{n?window.location.href="/Vitamin/profile.html":e.show()}),window.showPopup=function(){e.show()},e.querySelector(".auth-pop-up__close").addEventListener("click",()=>{e.close()}),e.addEventListener("click",i=>{const s=e.querySelector(".auth-pop-up__container"),c=i.target;c instanceof Node&&!s.contains(c)&&e.close()})}const h=r(".burger__btn"),a=r(".burger__menu.main"),d=r(".header__bag"),_=r(".header__logo"),u=r(".pack-info__bg_hulf-circle"),l=r(".header");function C(){if(!a)return;const e=r(".menu__item_shop",a),t=r(".menu__item_info",a),n=r(".header__profile",a),o=r(".burger__menu.shop"),i=r(".burger__menu.info"),s=r(".burger__menu.profile");L(),h&&e&&o&&t&&i&&n&&s&&(g("burger__btn","main"),g("menu__item_shop","shop"),g("menu__item_info","info"),g("header__profile_adapt","profile"),y("shop__title","shop"),y("info__title","info"),y("profile__title","profile"),I(o,i,s)),$(),k(),B(),E()}function g(e,t){if(e){const n=r(`.${e}`),o=r(`.${t}`);if(n&&o){n.addEventListener("click",()=>{const i=!o.classList.contains(`${t}_active`);if(o.classList.contains("main")){o.classList.toggle(`${t}_active`),n.classList.toggle(`${e}_active`),S(),w(),f(o,i);return}o.classList.add(`${t}_active`),f(o,i)});return}}}function y(e,t){if(e){const n=r(`.${e} .back-btn`),o=r(`.${t}`);if(n&&o){n.addEventListener("click",()=>{const i=!o.classList.contains(`${t}_active`);o.classList.remove(`${t}_active`),f(o,i)});return}}}function S(){if(d&&_&&a){if(a.classList.contains("main_active")){_.style.opacity="0",d.style.display="none",u&&(u.style.display="none");return}u&&(u.style.display="block"),_.style.opacity="1",d.style.display="block"}}function w(){if(!h)return;const e=r("body");if(e&&l){if(h.classList.contains("burger__btn_active")){e.style.overflow="hidden";return}e.style.overflow="auto",l.style.backgroundColor="white"}}function L(){v(),window.addEventListener("scroll",v)}function v(){l&&(window.scrollY>50?(l.style.backgroundColor="white",l.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)",l.style.transition="background-color 0.3s ease, box-shadow 0.3s ease"):(l.style.backgroundColor="transparent",l.style.boxShadow="none"))}function f(e,t){function o(s){return s<.5?2*s*s:-1+(4-2*s)*s}function i(s){const p=t?s:1-s;e.style.height=`${p*100}dvh`,e.style.opacity=`${p}`}t&&(e.style.visibility="visible"),x({timing:o,draw:i,duration:300}),t||setTimeout(()=>{e.style.visibility="hidden",e.style.height="0"},300)}function x({timing:e,draw:t,duration:n}){let o=performance.now();requestAnimationFrame(function i(s){let c=(s-o)/n;c>1&&(c=1);let p=e(c);t(p),c<1&&requestAnimationFrame(i)})}function I(e,t,n){window.addEventListener("resize",()=>{if(window.innerWidth>=768){if(h?.classList.remove("burger__btn_active"),!a||!e||!t||!n)return;m(a,"remove","main_active"),a.style.visibility="hidden",a.style.height="0vh",a.style.opacity="0",u&&(u.style.display="block"),d&&_&&(_.style.opacity="1",d.style.display="block"),w(),L(),m(e,"remove","shop_active"),m(t,"remove","info_active"),m(n,"remove","profile_active");const o=e.classList.contains("shop_active");f(e,o);const i=t.classList.contains("info_active");f(t,i);const s=e.classList.contains("profile_active");f(n,s)}})}export{C as i};
