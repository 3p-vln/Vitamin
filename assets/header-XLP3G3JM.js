import{g as r,a as k,c as a,r as u}from"./use-call-dom-DDNnwvp7.js";import{b as H}from"./axios-BrcDDtdF.js";function et(){const t=document.querySelectorAll(".header__user-name"),e=localStorage.getItem("userInfo");if(t&&e){const n=JSON.parse(e);t.forEach(o=>{const i=o;i.innerText=`${n.first_name} ${n.last_name}`})}}async function nt(t){let e=null;if(typeof t=="string"?e=r(t):e=t,!e)return;const n=r(".counter__plus",e),o=r(".counter__minus",e),i=r(".counter__items",e);let s=Number(i?.innerText);!i||!n||!o||(B(n,o,s),o.addEventListener("click",()=>{ot(i,s),s=Number(i?.innerText),B(n,o,s)}),n.addEventListener("click",()=>{it(i,s),s=Number(i?.innerText),B(n,o,s)}),J(i,s))}function J(t,e){t.textContent=e.toString()}function ot(t,e){e>1&&(e--,J(t,e))}function it(t,e){e<999&&(e++,J(t,e))}function B(t,e,n){n!==999&&n!==1&&(t.style.opacity="1",e.style.opacity="1"),n===999&&(t.style.opacity="0.3"),n===1&&(e.style.opacity="0.3")}function st(t){const e=r(".dropdown",t),n=r(".dropdown__box",t),o=r(".dropdown__text",t),i=r(".dropdown__list",t),s=k(".dropdown__item",t);!e||!n||!o||!i||!s||(e.addEventListener("click",c=>G(c,n,i)),s.forEach(c=>{c.addEventListener("click",()=>ct(c,o,n,i))}),document.addEventListener("click",c=>at(c,e,i,n)))}function G(t,e,n){t.stopPropagation(),e&&(e.classList.toggle("dropdown__box_active"),n&&n.classList.toggle("dropdown__list_active"))}function rt(t,e){t&&(a(t,"remove","dropdown__box_active"),e&&a(e,"remove","dropdown__list_active"))}function ct(t,e,n,o){const i=t.textContent;i&&e&&(e.textContent=i,G(event,n,o))}function at(t,e,n,o){e&&n&&!e.contains(t.target)&&!n.contains(t.target)&&rt(o,n)}const R=r(".header__bag"),b=r(".cart"),W=r(".cart__close"),V=r(".cart__bg"),_=r(".cart__items");let S=k(".prod"),l;const T=r(".info__backbtn");async function dt(){!R||!W||!V||!_||(R.addEventListener("click",t=>{lt(t),O()}),W.addEventListener("click",()=>{Y(),O()}),Q(),m(),S.forEach(t=>{const e=r(".prod__autoship-text",t);e&&_t(e)}),V.addEventListener("click",()=>{Y(),O()}))}function lt(t){t.stopPropagation(),b&&(a(b,"add","cart_active"),T&&(T.style.zIndex="1"))}function Y(){b&&(a(b,"remove","cart_active"),T&&(T.style.zIndex="25"))}function ut(t){S&&S.forEach(e=>{const n=r(".prod__close",e);n&&n.addEventListener("click",()=>{e.remove(),pt(t)})})}function pt(t){let e=JSON.parse(localStorage.getItem("cartItems")||"[]");if(e=e.filter(n=>n.id!==t),localStorage.setItem("cartItems",JSON.stringify(e)),m(),e.length===0){if(r(".cart__empty"))return;l=!0,v(l),m();return}}function O(){if(!b)return;const t=r("body"),e=r("header");if(!t||!e)return;const n=window.innerWidth-document.documentElement.clientWidth,o=window.scrollY,i=r(".info__backbtn");if(b.classList.contains("cart_active")){t.style.position="fixed",t.style.top=`-${o}px`,t.style.left="0",t.style.width="100%",t.style.overflow="hidden",t.style.paddingRight=`${n}px`,e.style.paddingRight=`${n}px`,o>50&&i&&(i.style.opacity="0");return}const s=Math.abs(parseInt(t.style.top,10))||0;t.style.position="",t.style.top="",t.style.left="",t.style.width="",t.style.overflow="",t.style.paddingRight="",e.style.paddingRight="",i&&(i.style.opacity=""),window.scrollTo(0,s)}function _t(t){window.innerWidth<768&&(t.innerText="Deliver every")}function F(t,e=!1,n="30",o=1){if(!_)return;const i=u("div",["cart__item","prod",`prod_${t.id}`]),s=u("div","prod__img");t.type==="Vitamins & Dietary Supplements"&&a(s,"add","prod__img_purple"),t.type==="Minerals"&&a(s,"add","prod__img_green-mint"),t.type==="Prenatal Vitamins"&&a(s,"add","prod__img_pink"),t.type==="Pain Relief"&&a(s,"add","prod__img_blue"),t.type==="Antioxidants"&&a(s,"add","prod__img_orange"),t.type==="Weight Loss"&&a(s,"add","prod__img_dark-blue"),(t.type==="Probiotics"||t.type==="Sale%")&&a(s,"add","prod__img_red"),s.innerHTML=`
    <img src="${t.img}" alt="" />
  `;const c=u("div","prod__info"),d=u("div","prod__title-and-close"),$=u("p","prod__title");$.innerText=t.name;const I=u("div","prod__close");I.innerHTML=`
    <span></span>
    <span></span>
  `;const N=u("div","prod__counter-and-price"),P=u("div","prod__counter");P.innerHTML=`
    <button class="counter__minus">
      <svg>
        <use href="#minus"></use>
      </svg>
    </button>
    <p class="counter__items">${o}</p>
    <button class="counter__plus">
      <svg>
        <use href="#plus"></use>
      </svg>
    </button>
  `,nt(P);const C=u("p","prod__price"),tt=q(t.price,t.discount,o),M=U(t.price,o);t.type==="Sale%"?(a(C,"add","prod__price_sale"),C.innerHTML=`<span>$${M}</span> $${tt}`):C.innerText=`$${M}`;const D=u("div","prod__autoship");D.innerHTML=`
    <div class="prod__checkbox">
      <input type="checkbox" name="autoship" ${e?"checked":""}/>
      <span></span>
    </div>
    <p class="prod__autoship-text">Autoship every</p>
    <div class="dropdown">
      <div class="dropdown__box">
        <p class="dropdown__text">${n}</p>
        <div class="dropdown__arrow">
          <svg>
            <use href="#back-arrow"></use>
          </svg>
        </div>
      </div>
      <div class="dropdown__list">
        <button class="dropdown__item">10</button>
        <button class="dropdown__item">20</button>
        <button class="dropdown__item">30</button>
        <button class="dropdown__item">40</button>
        <button class="dropdown__item">50</button>
        <button class="dropdown__item">60</button>
      </div>
    </div>
    days
  `,st(D),d.appendChild($),d.appendChild(I),N.appendChild(P),N.appendChild(C),c.appendChild(d),c.appendChild(N),c.appendChild(D),i.appendChild(s),i.appendChild(c),_.appendChild(i),l=!1,v(l),ft(t),S=k(".prod"),ut(t.id),K(t)}function q(t,e,n){const o=parseFloat(t);if(isNaN(o))throw new Error("Invalid price format");return(o*(1-e/100)*n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function U(t,e){const n=parseFloat(t);if(isNaN(n))throw new Error("Invalid price format");return(n*e).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function ft(t){let e=JSON.parse(localStorage.getItem("cartItems")||"[]");const n=e.some(d=>d.id===t.id),o=r(".autoship__on-off"),i=r(".count__items");if(!o||!i)return;const s=o.classList.contains("autoship__on-off_active")||!1,c=Number(i.innerText);n||e.push({...t,autoshipChecked:s,autoshipDays:"30",counts:c}),localStorage.setItem("cartItems",JSON.stringify(e))}function K(t){const e=r(`.prod_${t.id} .prod__checkbox input`),n=r(`.prod_${t.id} .dropdown__text`),o=k(`.prod_${t.id} .dropdown__item`),i=r(`.prod_${t.id} .counter__minus`),s=r(`.prod_${t.id} .counter__plus`),c=r(`.prod_${t.id} .counter__items`);!e||!n||!o||!i||!s||!c||(e&&e.addEventListener("change",()=>{h(`${t.id}`,e.checked,n.textContent||"30",Number(c.textContent))}),n&&o.forEach(d=>{d.addEventListener("click",$=>{const I=$.target.textContent||"30";h(`${t.id}`,e.checked,I,Number(c.textContent))})}),i.addEventListener("click",()=>{z(t,Number(c.textContent)),h(`${t.id}`,e.checked,n.textContent||"30",Number(c.textContent)),m()}),s.addEventListener("click",()=>{z(t,Number(c.textContent)),h(`${t.id}`,e.checked,n.textContent||"30",Number(c.textContent)),m()}))}function z(t,e){const n=q(t.price,t.discount,e),o=U(t.price,e),i=r(`.prod_${t.id} .prod__price`);i&&(t.type==="Sale%"?i.innerHTML=`<span>$${o}</span> $${n}`:i.innerText=`$${o}`)}function h(t,e,n,o){let i=JSON.parse(localStorage.getItem("cartItems")||"[]");const s=i.findIndex(c=>c.id===Number(t));s!==-1&&(i[s].autoshipChecked=e,i[s].autoshipDays=n,i[s].counts=o),localStorage.setItem("cartItems",JSON.stringify(i))}function Q(){const t=JSON.parse(localStorage.getItem("cartItems")||"[]");if(t.length===0){l=!0,v(l);return}l=!1,v(l),_&&(_.innerHTML="",t.forEach(e=>{F(e,e.autoshipChecked,e.autoshipDays,e.counts),K(e)}))}function wt(t){let e=JSON.parse(localStorage.getItem("cartItems")||"[]");e.length===0&&(l=!0,v(l)),e.some(o=>o.id===t.id)||F(t),m()}function kt(t){if(!t.disabled_subscribe)return;const e=r(`.prod_${t.id} .prod__checkbox input`),n=r(`.prod_${t.id} .dropdown__text`),o=r(".autoship__dropdown .dropdown__text");if(!o)return;const i=o.textContent,s=r(`.prod_${t.id} .counter__items`);!e||!n||!i||!s||(e.checked=!0,n.innerText=i,h(`${t.id}`,e.checked,n.textContent||"30",Number(s.textContent)))}function $t(t){if(!t.disabled_subscribe)return;const e=r(`.prod_${t.id} .prod__checkbox input`),n=r(`.prod_${t.id} .dropdown__text`),o=r(`.prod_${t.id} .counter__items`);!e||!n||!o||(e.checked=!1,h(`${t.id}`,e.checked,n.textContent||"30",Number(o.textContent)))}function It(t){const e=r(`.prod_${t.id} .prod__checkbox input`),n=r(`.prod_${t.id} .dropdown__text`),o=r(`.prod_${t.id} .counter__items`),i=r(".count__counter .counter__items");let s=JSON.parse(localStorage.getItem("cartItems")||"[]");s.length===0&&(l=!0,v(l));const c=s.some(d=>d.id===t.id);if(i){if(!c){F(t,!1,"30",Number(i.innerText)),m();return}!e||!n||!o||(h(`${t.id}`,e.checked,n.textContent||"30",Number(o.textContent)+Number(i.innerText)),Q(),m())}}function v(t){if(_&&(t||(a(_,"remove","empty"),k(".cart__empty").forEach(n=>n.remove())),t)){const e=u("p","cart__empty");e.innerText="Your cart is empty",a(_,"add","empty"),_.appendChild(e)}}function m(){let t=JSON.parse(localStorage.getItem("cartItems")||"[]"),e=0,n;const o=r("#total-cart-price");o&&(t?.length===0&&(o.innerText="$0"),t.forEach(i=>{i.type==="Sale%"?n=q(i.price,i.discount,i.counts):n=U(i.price,i.counts),e+=parseFloat(n.replace(/,/g,"").replace(/\s/g,""))}),o.innerText=`$${e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`)}function mt(){document.querySelectorAll(".sign-out").forEach(e=>{e.addEventListener("click",()=>{localStorage.removeItem("userInfo"),H.remove("accessToken",{path:"/"}),H.remove("refreshToken",{path:"/"}),window.location.href="/Vitamin"})})}function ht(){const t=document.getElementById("authPopup"),e=document.querySelector(".header__profile"),n=H.get("accessToken");e&&e.addEventListener("click",()=>{n?window.location.href="/Vitamin/profile.html":t.show()}),window.showPopup=function(){t.show()},t.querySelector(".auth-pop-up__close").addEventListener("click",()=>{t.close()}),t.addEventListener("click",i=>{const s=t.querySelector(".auth-pop-up__container"),c=i.target;c instanceof Node&&!s.contains(c)&&t.close()})}const E=r(".burger__btn"),p=r(".burger__menu.main"),x=r(".header__bag"),w=r(".header__logo"),g=r(".pack-info__bg_hulf-circle"),f=r(".header");function Ct(){if(!p)return;const t=r(".menu__item_shop",p),e=r(".menu__item_info",p),n=r(".header__profile",p),o=r(".burger__menu.shop"),i=r(".burger__menu.info"),s=r(".burger__menu.profile");Z(),E&&t&&o&&e&&i&&n&&s&&(L("burger__btn","main"),L("menu__item_shop","shop"),L("menu__item_info","info"),L("header__profile_adapt","profile"),A("shop__title","shop"),A("info__title","info"),A("profile__title","profile"),bt(o,i,s)),et(),dt(),mt(),ht()}function L(t,e){if(t){const n=r(`.${t}`),o=r(`.${e}`);if(n&&o){n.addEventListener("click",()=>{const i=!o.classList.contains(`${e}_active`);if(o.classList.contains("main")){o.classList.toggle(`${e}_active`),n.classList.toggle(`${t}_active`),gt(),X(),y(o,i);return}o.classList.add(`${e}_active`),y(o,i)});return}}}function A(t,e){if(t){const n=r(`.${t} .back-btn`),o=r(`.${e}`);if(n&&o){n.addEventListener("click",()=>{const i=!o.classList.contains(`${e}_active`);o.classList.remove(`${e}_active`),y(o,i)});return}}}function gt(){if(x&&w&&p){if(p.classList.contains("main_active")){w.style.opacity="0",x.style.display="none",g&&(g.style.display="none");return}g&&(g.style.display="block"),w.style.opacity="1",x.style.display="block"}}function X(){if(!E)return;const t=r("body");if(t&&f){if(E.classList.contains("burger__btn_active")){t.style.overflow="hidden";return}t.style.overflow="auto",f.style.backgroundColor="white"}}function Z(){j(),window.addEventListener("scroll",j)}function j(){f&&(window.scrollY>50?(f.style.backgroundColor="white",f.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)",f.style.transition="background-color 0.3s ease, box-shadow 0.3s ease"):(f.style.backgroundColor="transparent",f.style.boxShadow="none"))}function y(t,e){function o(s){return s<.5?2*s*s:-1+(4-2*s)*s}function i(s){const d=e?s:1-s;t.style.height=`${d*100}dvh`,t.style.opacity=`${d}`}e&&(t.style.visibility="visible"),yt({timing:o,draw:i,duration:300}),e||setTimeout(()=>{t.style.visibility="hidden",t.style.height="0"},300)}function yt({timing:t,draw:e,duration:n}){let o=performance.now();requestAnimationFrame(function i(s){let c=(s-o)/n;c>1&&(c=1);let d=t(c);e(d),c<1&&requestAnimationFrame(i)})}function bt(t,e,n){window.addEventListener("resize",()=>{if(window.innerWidth>=768){if(E?.classList.remove("burger__btn_active"),!p||!t||!e||!n)return;a(p,"remove","main_active"),p.style.visibility="hidden",p.style.height="0vh",p.style.opacity="0",g&&(g.style.display="block"),x&&w&&(w.style.opacity="1",x.style.display="block"),X(),Z(),a(t,"remove","shop_active"),a(e,"remove","info_active"),a(n,"remove","profile_active");const o=t.classList.contains("shop_active");y(t,o);const i=e.classList.contains("info_active");y(e,i);const s=t.classList.contains("profile_active");y(n,s)}})}export{st as a,It as b,lt as c,wt as d,kt as e,nt as f,Ct as i,$t as r};
