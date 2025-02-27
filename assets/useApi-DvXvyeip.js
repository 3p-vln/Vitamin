import{g as r,a as k,c,r as d}from"./useCallDom-DDNnwvp7.js";import{a as O,b as K,A as Q}from"./index-wYSWI2m-.js";function X(){const t=document.querySelectorAll(".header__user-name"),e=localStorage.getItem("userInfo");if(t&&e){const n=JSON.parse(e);t.forEach(o=>{const i=o;i.innerText=`${n.first_name} ${n.last_name}`})}}async function Z(t){let e=null;if(typeof t=="string"?e=r(t):e=t,!e)return;const n=r(".counter__plus",e),o=r(".counter__minus",e),i=r(".counter__items",e);let s=Number(i?.innerText);!i||!n||!o||(L(n,o,s),o.addEventListener("click",()=>{s=Number(i?.innerText),tt(i,s),L(n,o,s)}),n.addEventListener("click",()=>{s=Number(i?.innerText),et(i,s),L(n,o,s)}),B(i,s))}function B(t,e){t.textContent=e.toString()}function tt(t,e){e>1&&(e--,B(t,e))}function et(t,e){e<999&&(e++,B(t,e))}function L(t,e,n){n<999&&n>1&&(t.style.opacity="1",e.style.opacity="1"),n===999&&(t.style.opacity="0.3"),n===1&&(e.style.opacity="0.3")}function nt(t){const e=r(".dropdown",t),n=r(".dropdown__box",t),o=r(".dropdown__text",t),i=r(".dropdown__list",t),s=k(".dropdown__item",t);!e||!n||!o||!i||!s||(e.addEventListener("click",a=>V(a,n,i)),s.forEach(a=>{a.addEventListener("click",()=>it(a,o,n,i))}),document.addEventListener("click",a=>rt(a,e,i,n)))}function V(t,e,n){t.stopPropagation(),e&&(e.classList.toggle("dropdown__box_active"),n&&n.classList.toggle("dropdown__list_active"))}function ot(t,e){t&&(c(t,"remove","dropdown__box_active"),e&&c(e,"remove","dropdown__list_active"))}function it(t,e,n,o){const i=t.textContent;i&&e&&(e.textContent=i,V(event,n,o))}function rt(t,e,n,o){e&&n&&!e.contains(t.target)&&!n.contains(t.target)&&ot(o,n)}const J=r(".header__bag"),g=r(".cart"),U=r(".cart__close"),F=r(".cart__bg"),l=r(".cart__items");let m=k(".prod");const C=r(".info__backbtn");async function st(){if(!(!J||!U||!F||!l)){if(J.addEventListener("click",t=>{at(t),S()}),U.addEventListener("click",()=>{R(),S()}),_t(),m.forEach(t=>{const e=r(".prod__autoship-text",t);e&&ut(e)}),m.length===0){const t=d("p","cart__empty");t.innerText="Your cart is empty",c(l,"add","empty"),l.appendChild(t);return}m.length>0&&l.classList.contains("empty")&&(l.innerHTML="",c(l,"remove","empty")),F.addEventListener("click",()=>{R(),S()})}}function at(t){t.stopPropagation(),g&&(c(g,"add","cart_active"),C&&(C.style.zIndex="1"))}function R(){g&&(c(g,"remove","cart_active"),C&&(C.style.zIndex="25"))}function ct(t){m&&m.forEach(e=>{const n=r(".prod__close",e);n&&n.addEventListener("click",()=>{e.remove(),dt(t)})})}function dt(t){let e=JSON.parse(localStorage.getItem("cartItems")||"[]");e=e.filter(n=>n.id!==t),localStorage.setItem("cartItems",JSON.stringify(e))}function S(){if(!g)return;const t=r("body");if(t){if(g.classList.contains("cart_active")){t.style.overflow="hidden";return}t.style.overflow="auto"}}function ut(t){window.innerWidth<768&&(t.innerText="Deliver every")}function j(t,e=!1,n="30",o=1){if(!l)return;const i=d("div",["cart__item","prod",`prod_${t.id}`]),s=d("div","prod__img");t.type==="Vitamins & Dietary Supplements"&&c(s,"add","prod__img_purple"),t.type==="Minerals"&&c(s,"add","prod__img_green-mint"),t.type==="Prenatal Vitamins"&&c(s,"add","prod__img_pink"),t.type==="Pain Relief"&&c(s,"add","prod__img_blue"),t.type==="Antioxidants"&&c(s,"add","prod__img_orange"),t.type==="Weight Loss"&&c(s,"add","prod__img_dark-blue"),(t.type==="Probiotics"||t.type==="Sale%")&&c(s,"add","prod__img_red"),s.innerHTML=`
    <img src="${t.img}" alt="" />
  `;const a=d("div","prod__info"),u=d("div","prod__title-and-close"),h=d("p","prod__title");h.innerText=t.name;const b=d("div","prod__close");b.innerHTML=`
    <span></span>
    <span></span>
  `;const $=d("div","prod__counter-and-price"),w=d("div","prod__counter");w.innerHTML=`
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
  `,Z(w);const y=d("p","prod__price"),G=z(t.price,t.discount,o),H=W(t.price,o);t.type==="Sale%"?(c(y,"add","prod__price_sale"),y.innerHTML=`<span>$${H}</span> $${G}`):y.innerText=`$${H}`;const I=d("div","prod__autoship");I.innerHTML=`
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
  `,nt(I),u.appendChild(h),u.appendChild(b),$.appendChild(w),$.appendChild(y),a.appendChild(u),a.appendChild($),a.appendChild(I),i.appendChild(s),i.appendChild(a),l.appendChild(i),lt(t),m=k(".prod"),ct(t.id),Y(t)}function z(t,e,n){const o=parseFloat(t);if(isNaN(o))throw new Error("Invalid price format");return(o*(1-e/100)*n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function W(t,e){const n=parseFloat(t);if(isNaN(n))throw new Error("Invalid price format");return(n*e).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function lt(t){let e=JSON.parse(localStorage.getItem("cartItems")||"[]");e.some(o=>o.id===t.id)||e.push({...t,autoshipChecked:!0,autoshipDays:"30",counts:1}),localStorage.setItem("cartItems",JSON.stringify(e))}function Y(t){const e=r(`.prod_${t.id} .prod__checkbox input`),n=r(`.prod_${t.id} .dropdown__text`),o=k(`.prod_${t.id} .dropdown__item`),i=r(`.prod_${t.id} .counter__minus`),s=r(`.prod_${t.id} .counter__plus`),a=r(`.prod_${t.id} .counter__items`);e&&e.addEventListener("change",()=>{p(`${t.id}`,e.checked,n?.textContent||"30",Number(a?.textContent))}),n&&o.forEach(u=>{u.addEventListener("click",h=>{const b=h.target.textContent||"30";p(`${t.id}`,e?.checked,b,Number(a?.textContent))})}),!(!i||!s||!a)&&(i.addEventListener("click",()=>{a.textContent=a.textContent,q(t,Number(a.textContent)),p(`${t.id}`,e.checked,n?.textContent||"30",Number(a.textContent))}),s.addEventListener("click",()=>{a.textContent=a.textContent,q(t,Number(a.textContent)),p(`${t.id}`,e.checked,n?.textContent||"30",Number(a.textContent))}))}function q(t,e){const n=z(t.price,t.discount,e),o=W(t.price,e),i=r(`.prod_${t.id} .prod__price`);i&&(t.type==="Sale%"?i.innerHTML=`<span>$${o}</span> $${n}`:i.innerText=`$${o}`)}function p(t,e,n,o){let i=JSON.parse(localStorage.getItem("cartItems")||"[]");const s=i.findIndex(a=>a.id===Number(t));s!==-1&&(i[s].autoshipChecked=e,i[s].autoshipDays=n,i[s].counts=o,localStorage.setItem("cartItems",JSON.stringify(i)))}function _t(){JSON.parse(localStorage.getItem("cartItems")||"[]").forEach(e=>{j(e,e.autoshipChecked,e.autoshipDays,e.counts),Y(e)})}function vt(t){JSON.parse(localStorage.getItem("cartItems")||"[]").some(o=>o.id===t.id)||j(t)}function Ct(t){if(!t.disabled_subscribe)return;const e=r(`.prod_${t.id} .prod__checkbox input`),n=r(`.prod_${t.id} .dropdown__text`),o=r(".autoship__dropdown .dropdown__text")?.textContent,i=r(`.prod_${t.id} .counter__items`);e&&n&&o&&(e.checked=!0,n.innerText=o),p(`${t.id}`,e.checked,n?.textContent||"30",Number(i?.textContent))}function kt(t){if(!t.disabled_subscribe)return;const e=r(`.prod_${t.id} .prod__checkbox input`),n=r(`.prod_${t.id} .dropdown__text`),o=r(`.prod_${t.id} .counter__items`);e&&(e.checked=!1),p(`${t.id}`,e.checked,n?.textContent||"30",Number(o?.textContent))}function $t(t){const e=r(`.prod_${t.id} .prod__checkbox input`),n=r(`.prod_${t.id} .dropdown__text`),o=r(`.prod_${t.id} .counter__items`),i=r(".count__counter .counter__items");!i||!o||(o.innerText=(Number(o.textContent)+Number(i.innerText)).toString(),p(`${t.id}`,e.checked,n?.textContent||"30",Number(o.innerText)))}function pt(){document.querySelectorAll(".sign-out").forEach(e=>{e.addEventListener("click",()=>{localStorage.removeItem("userInfo"),O.remove("accessToken",{path:"/"}),O.remove("refreshToken",{path:"/"}),window.location.href="/Vitamin"})})}const P=r(".burger__btn"),f=r(".burger__menu.main"),T=r(".header__bag"),E=r(".header__logo"),x=r(".pack-info__bg_hulf-circle"),_=r(".header");function wt(){if(!f)return;const t=r(".menu__item_shop",f),e=r(".menu__item_info",f),n=r(".header__profile",f),o=r(".burger__menu.shop"),i=r(".burger__menu.info"),s=r(".burger__menu.profile");gt(),P&&t&&o&&e&&i&&n&&s&&(v("burger__btn","main"),v("menu__item_shop","shop"),v("menu__item_info","info"),v("header__profile_adapt","profile"),N("shop__title","shop"),N("info__title","info"),N("profile__title","profile")),X(),st(),pt()}function v(t,e){if(t){const n=r(`.${t}`),o=r(`.${e}`);if(n&&o){n.addEventListener("click",()=>{const i=!o.classList.contains(`${e}_active`);if(o.classList.contains("main")){o.classList.toggle(`${e}_active`),n.classList.toggle(`${t}_active`),ft(),mt(),D(o,i);return}o.classList.add(`${e}_active`),D(o,i)});return}}}function N(t,e){if(t){const n=r(`.${t} .back-btn`),o=r(`.${e}`);if(n&&o){n.addEventListener("click",()=>{const i=!o.classList.contains(`${e}_active`);o.classList.remove(`${e}_active`),D(o,i)});return}}}function ft(){if(T&&E&&f){if(f.classList.contains("main_active")){E.style.opacity="0",T.style.display="none",x&&(x.style.display="none");return}x&&(x.style.display="block"),E.style.opacity="1",T.style.display="block"}}function mt(){if(!P)return;const t=r("body");if(t&&_){if(P.classList.contains("burger__btn_active")){t.style.overflow="hidden";return}t.style.overflow="auto",_.style.backgroundColor="white"}}function gt(){_&&window.addEventListener("scroll",()=>{window.scrollY>50?(_.style.backgroundColor="white",_.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)",_.style.transition="background-color 0.3s ease, box-shadow 0.3s ease"):(_.style.backgroundColor="transparent",_.style.boxShadow="none")})}function D(t,e){function o(s){return s<.5?2*s*s:-1+(4-2*s)*s}function i(s){const u=e?s:1-s;t.style.height=`${u*100}vh`,t.style.opacity=`${u}`}e&&(t.style.visibility="visible"),ht({timing:o,draw:i,duration:300}),e||setTimeout(()=>{t.style.visibility="hidden",t.style.height="0"},300)}function ht({timing:t,draw:e,duration:n}){let o=performance.now();requestAnimationFrame(function i(s){let a=(s-o)/n;a>1&&(a=1);let u=t(a);e(u),a<1&&requestAnimationFrame(i)})}const bt="https://www.mku-journal.online",A=K.create({baseURL:bt,headers:{"Content-Type":"application/json"}}),M=async t=>{try{return(await t).data}catch(e){return e instanceof Q?(console.error("API error:",e.response?.data||e.message),{errors:[{message:e.response?.data?.message||e.message}]}):e instanceof Error?(console.error("General error:",e.message),{errors:[{message:e.message}]}):(console.error("Unknown error:",e),{errors:[{message:"An unexpected error occurred."}]})}},It=(t,e,n)=>M(A.get("/catalog/all-list",{params:{type:n,page:t,limit:e}})),Lt=t=>M(A.get(`/catalog/${t}/info`)),St=t=>M(A.get(`${t?"/catalog/recommendations?is_main=true":"/catalog/recommendations"}`));export{nt as a,Lt as b,vt as c,$t as d,Ct as e,Z as f,St as g,It as h,wt as i,kt as r};
