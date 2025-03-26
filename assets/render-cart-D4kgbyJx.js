import{g as s,c as d,a as P,r as c}from"./use-call-dom-CaqOo_cc.js";import{i as M}from"./dropdown-ojf4R2tx.js";import{i as E}from"./use-api-Bg0RsZwB.js";function O(t){let e;if(typeof t=="string"?e=s(t):e=t,!e)return;const n=s(".counter__plus",e),i=s(".counter__minus",e),o=s(".counter__items",e);let r=Number(o?.innerText);!o||!n||!i||(v(n,i,r),i.addEventListener("click",()=>{B(o,r),r=Number(o?.innerText),v(n,i,r)}),n.addEventListener("click",()=>{F(o,r),r=Number(o?.innerText),v(n,i,r)}),k(o,r))}function k(t,e){t.textContent=e.toString()}function B(t,e){e>1&&(e--,k(t,e))}function F(t,e){e<999&&(e++,k(t,e))}function v(t,e,n){n!==999&&n!==1&&(t.style.opacity="1",e.style.opacity="1"),n===999&&(t.style.opacity="0.3"),n===1&&(e.style.opacity="0.3")}const l=s(".cart__items"),C=s(".cart__btn"),L=JSON.parse(localStorage.getItem("userInfo")||"[]");let p;function A(t,e=!1,n="30",i=1){if(!l)return;const o=c("div",["cart__item","prod",`prod_${t.id}`]),r=c("a","prod__img");switch(r.href=`/Vitamin/one-product.html?id=${t.id}`,t.type){case"Vitamins & Dietary Supplements":d(r,"add","prod__img_purple");break;case"Minerals":d(r,"add","prod__img_green-mint");break;case"Prenatal Vitamins":d(r,"add","prod__img_pink");break;case"Pain Relief":d(r,"add","prod__img_blue");break;case"Antioxidants":d(r,"add","prod__img_orange");break;case"Weight Loss":d(r,"add","prod__img_dark-blue");break;case"Probiotics":d(r,"add","prod__img_red");break;case"Sale%":d(r,"add","prod__img_red");break}r.innerHTML=`
    <picture>
      <source srcset="${t.img.img_webp}" type="image/webp">
      <img src="${t.img.img_default}" alt="prod" width="${t.img.img_width}" height="${t.img.img_height}" />
    </picture>`;const a=c("div","prod__info"),u=c("div","prod__title-and-close"),_=c("a","prod__title");_.href=`/Vitamin/one-product.html?id=${t.id}`,_.innerText=t.name;const m=c("div","prod__close");m.innerHTML=`
    <span></span>
    <span></span>
  `;const y=c("div","prod__counter-and-price"),x=c("div","prod__counter");x.innerHTML=`
    <button class="counter__minus">
      <svg>
        <use href="#minus"></use>
      </svg>
    </button>
    
    <p class="counter__items">${i}</p>
    
    <button class="counter__plus">
      <svg>
        <use href="#plus"></use>
      </svg>
    </button>
  `,O(x);const f=c("p","prod__price"),J=S(t.price,t.discount,i),w=T(t.price,i);t.type==="Sale%"?(d(f,"add","prod__price_sale"),f.innerHTML=`<span>$${w}</span> $${J}`):f.innerText=`$${w}`;const I=c("div","prod__autoship");I.innerHTML=`
    <div class="prod__checkbox">
      <input type="checkbox" name="autoship" ${e?"checked":""} onclick="return ${t.disabled_subscribe};"/>
      
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
  `,M(I),u.appendChild(_),u.appendChild(m),y.appendChild(x),y.appendChild(f),a.appendChild(u),a.appendChild(y),a.appendChild(I),o.appendChild(r),o.appendChild(a),l.appendChild(o),p=!1,h(p),W(t,e,n,i),H(t.id),D(t),R(t)}function H(t){let e=JSON.parse(localStorage.getItem("cartItems")||"[]");e.some(i=>i.id===t)&&e.forEach(i=>{if(i.id===t){const o=s(`.prod_${i.id}`);if(!o)return;const r=s(".prod__close",o);if(!r)return;r.addEventListener("click",()=>{o.remove(),V(t)})}})}function V(t){let e=JSON.parse(localStorage.getItem("cartItems")||"[]");if(e=e.filter(n=>n.id!==t),localStorage.setItem("cartItems",JSON.stringify(e)),b(),$(),e.length===0){if(s(".cart__empty"))return;p=!0,h(p),b();return}}function S(t,e,n){const i=parseFloat(t);if(isNaN(i))throw new Error("Invalid price format");const o=Math.round(i*(1-e/100)*100)/100;return(Math.round(o*n*100)/100).toFixed(2)}function T(t,e){const n=parseFloat(t);if(isNaN(n))throw new Error("Invalid price format");return(n*e).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function W(t,e,n,i){let o=JSON.parse(localStorage.getItem("cartItems")||"[]");o.some(a=>a.id===t.id)||o.push({id:t.id,autoshipChecked:e,autoshipDays:n,counts:i}),localStorage.setItem("cartItems",JSON.stringify(o))}function D(t){const e=s(`.prod_${t.id} .prod__checkbox input`),n=s(`.prod_${t.id} .dropdown__text`),i=P(`.prod_${t.id} .dropdown__item`),o=s(`.prod_${t.id} .counter__minus`),r=s(`.prod_${t.id} .counter__plus`),a=s(`.prod_${t.id} .counter__items`);!e||!n||!i||!o||!r||!a||(e&&e.addEventListener("change",()=>{g(`${t.id}`,e.checked,n.textContent||"30",Number(a.textContent))}),n&&i.forEach(u=>{u.addEventListener("click",_=>{const m=_.target.textContent||"30";g(`${t.id}`,e.checked,m,Number(a.textContent))})}),o.addEventListener("click",()=>{N(t,Number(a.textContent)),g(`${t.id}`,e.checked,n.textContent||"30",Number(a.textContent)),b()}),r.addEventListener("click",()=>{N(t,Number(a.textContent)),g(`${t.id}`,e.checked,n.textContent||"30",Number(a.textContent)),b()}))}function N(t,e){const n=S(t.price,t.discount,e),i=T(t.price,e),o=s(`.prod_${t.id} .prod__price`);if(o){if(t.type==="Sale%"){o.innerHTML=`<span>$${i}</span> $${n}`;return}o.innerText=`$${i}`}}function g(t,e,n,i){let o=JSON.parse(localStorage.getItem("cartItems")||"[]");const r=o.findIndex(a=>a.id===Number(t));r!==-1&&(o[r].autoshipChecked=e,o[r].autoshipDays=n,o[r].counts=i),localStorage.setItem("cartItems",JSON.stringify(o))}function q(){const t=JSON.parse(localStorage.getItem("cartItems")||"[]");if(t.length===0){p=!0,h(p),$();return}p=!1,h(p),$(),l&&(l.innerHTML="",t.forEach(async e=>{try{const n=await E(`${e.id}`);A(n,e.autoshipChecked,e.autoshipDays,e.counts),D(n)}catch(n){console.error(n)}}))}function h(t){if(!(!l||!C)&&(t||(d(l,"remove","empty"),P(".cart__empty").forEach(n=>n.remove()),C.style.display=""),t)){const e=c("p","cart__empty");e.innerText="Your cart is empty",d(l,"add","empty"),C.style.display="none",l.appendChild(e)}}function b(){let t=JSON.parse(localStorage.getItem("cartItems")||"[]"),e=0,n;const i=s("#total-cart-price");i&&(t?.length===0&&(i.innerText="$0"),t.forEach(async o=>{try{const r=await E(`${o.id}`);r.type==="Sale%"?n=S(r.price,r.discount,o.counts):n=T(r.price,o.counts),e+=parseFloat(n.replace(/,/g,"").replace(/\s/g,"")),i.innerText=`$${e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`,U(e)}catch(r){console.error(r)}}))}function U(t){const e=s(".cart__btn");if(!e)return;const n=s(".btn",e);if(!(!L||!n)&&L.role_type==="whosale"){n.style.backgroundColor="#C3BDB6",n.style.pointerEvents="none";const i=c("p","cart__limit");i.style.marginTop="15px",i.style.textAlign="center",i.style.opacity="0.5",i.style.fontSize="14px",i.style.fontWeight="400",i.innerText="Minimum order amount is $700",s(".cart__limit")||e.appendChild(i),t>=700&&(n.style.backgroundColor="",n.style.pointerEvents="")}}function $(){const t=s(".cart__btn");if(!t)return;const e=s(".btn",t);if(!e)return;if(JSON.parse(localStorage.getItem("cartItems")||"[]").length===0){e.style.backgroundColor="#C3BDB6",e.style.pointerEvents="none";return}e.style.backgroundColor="",e.style.pointerEvents=""}function R(t){const e=s(".autoship__on-off"),n=s(".autoship__circle"),i=s(`.prod_${t.id} .prod__checkbox`),o=s(`.prod_${t.id} .prod__checkbox input`),a=JSON.parse(localStorage.getItem("cartItems")||"[]").findIndex(u=>u.id===Number(t.id));!n||!e||!i||!o||!a||(a.autoshipChecked&&(e.classList.add("autoship__on-off_active"),n.classList.add("autoship__circle_active")),i.addEventListener("click",()=>{e.classList.toggle("autoship__on-off_active"),n.classList.toggle("autoship__circle_active")}))}export{T as a,$ as b,h as e,S as g,O as i,q as l,A as r,b as t,g as u};
