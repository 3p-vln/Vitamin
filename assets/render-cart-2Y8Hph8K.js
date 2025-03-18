import{g as s,c as d,a as N,r as c}from"./use-call-dom-8Q8ZjlCD.js";import{i as F}from"./dropdown-MNiyI8bl.js";import{j as P}from"./use-api-CoVlJz1c.js";function J(t){let e;if(typeof t=="string"?e=s(t):e=t,!e)return;const n=s(".counter__plus",e),i=s(".counter__minus",e),o=s(".counter__items",e);let r=Number(o?.innerText);!o||!n||!i||(I(n,i,r),i.addEventListener("click",()=>{O(o,r),r=Number(o?.innerText),I(n,i,r)}),n.addEventListener("click",()=>{B(o,r),r=Number(o?.innerText),I(n,i,r)}),C(o,r))}function C(t,e){t.textContent=e.toString()}function O(t,e){e>1&&(e--,C(t,e))}function B(t,e){e<999&&(e++,C(t,e))}function I(t,e,n){n!==999&&n!==1&&(t.style.opacity="1",e.style.opacity="1"),n===999&&(t.style.opacity="0.3"),n===1&&(e.style.opacity="0.3")}const l=s(".cart__items"),w=JSON.parse(localStorage.getItem("userInfo")||"[]");let p;function M(t,e=!1,n="30",i=1){if(!l)return;const o=c("div",["cart__item","prod",`prod_${t.id}`]),r=c("a","prod__img");switch(r.href=`/Vitamin/one-product.html?id=${t.id}`,t.type){case"Vitamins & Dietary Supplements":d(r,"add","prod__img_purple");break;case"Minerals":d(r,"add","prod__img_green-mint");break;case"Prenatal Vitamins":d(r,"add","prod__img_pink");break;case"Pain Relief":d(r,"add","prod__img_blue");break;case"Antioxidants":d(r,"add","prod__img_orange");break;case"Weight Loss":d(r,"add","prod__img_dark-blue");break;case"Probiotics":d(r,"add","prod__img_red");break;case"Sale%":d(r,"add","prod__img_red");break}r.innerHTML=`
    <picture>
      <source srcset="${t.img.img_webp}" type="image/webp">
      <img src="${t.img.img_default}" alt="prod" width="${t.img.img_width}" height="${t.img.img_height}" />
    </picture>`;const a=c("div","prod__info"),u=c("div","prod__title-and-close"),m=c("a","prod__title");m.href=`/Vitamin/one-product.html?id=${t.id}`,m.innerText=t.name;const _=c("div","prod__close");_.innerHTML=`
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
  `,J(x);const f=c("p","prod__price"),D=S(t.price,t.discount,i),T=k(t.price,i);t.type==="Sale%"?(d(f,"add","prod__price_sale"),f.innerHTML=`<span>$${T}</span> $${D}`):f.innerText=`$${T}`;const v=c("div","prod__autoship");v.innerHTML=`
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
  `,F(v),u.appendChild(m),u.appendChild(_),y.appendChild(x),y.appendChild(f),a.appendChild(u),a.appendChild(y),a.appendChild(v),o.appendChild(r),o.appendChild(a),l.appendChild(o),p=!1,h(p),U(t,e,n,i),H(t.id),L(t)}function H(t){let e=JSON.parse(localStorage.getItem("cartItems")||"[]");e.some(i=>i.id===t)&&e.forEach(i=>{if(i.id===t){const o=s(`.prod_${i.id}`);if(!o)return;const r=s(".prod__close",o);if(!r)return;r.addEventListener("click",()=>{o.remove(),A(t)})}})}function A(t){let e=JSON.parse(localStorage.getItem("cartItems")||"[]");if(e=e.filter(n=>n.id!==t),localStorage.setItem("cartItems",JSON.stringify(e)),b(),$(),e.length===0){if(s(".cart__empty"))return;p=!0,h(p),b();return}}function S(t,e,n){const i=parseFloat(t);if(isNaN(i))throw new Error("Invalid price format");return(i*(1-e/100)*n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function k(t,e){const n=parseFloat(t);if(isNaN(n))throw new Error("Invalid price format");return(n*e).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function U(t,e,n,i){let o=JSON.parse(localStorage.getItem("cartItems")||"[]");o.some(a=>a.id===t.id)||o.push({id:t.id,autoshipChecked:e,autoshipDays:n,counts:i}),localStorage.setItem("cartItems",JSON.stringify(o))}function L(t){const e=s(`.prod_${t.id} .prod__checkbox input`),n=s(`.prod_${t.id} .dropdown__text`),i=N(`.prod_${t.id} .dropdown__item`),o=s(`.prod_${t.id} .counter__minus`),r=s(`.prod_${t.id} .counter__plus`),a=s(`.prod_${t.id} .counter__items`);!e||!n||!i||!o||!r||!a||(e&&e.addEventListener("change",()=>{g(`${t.id}`,e.checked,n.textContent||"30",Number(a.textContent))}),n&&i.forEach(u=>{u.addEventListener("click",m=>{const _=m.target.textContent||"30";g(`${t.id}`,e.checked,_,Number(a.textContent))})}),o.addEventListener("click",()=>{E(t,Number(a.textContent)),g(`${t.id}`,e.checked,n.textContent||"30",Number(a.textContent)),b()}),r.addEventListener("click",()=>{E(t,Number(a.textContent)),g(`${t.id}`,e.checked,n.textContent||"30",Number(a.textContent)),b()}))}function E(t,e){const n=S(t.price,t.discount,e),i=k(t.price,e),o=s(`.prod_${t.id} .prod__price`);if(o){if(t.type==="Sale%"){o.innerHTML=`<span>$${i}</span> $${n}`;return}o.innerText=`$${i}`}}function g(t,e,n,i){let o=JSON.parse(localStorage.getItem("cartItems")||"[]");const r=o.findIndex(a=>a.id===Number(t));r!==-1&&(o[r].autoshipChecked=e,o[r].autoshipDays=n,o[r].counts=i),localStorage.setItem("cartItems",JSON.stringify(o))}function z(){const t=JSON.parse(localStorage.getItem("cartItems")||"[]");if(t.length===0){p=!0,h(p),$();return}p=!1,h(p),$(),l&&(l.innerHTML="",t.forEach(async e=>{try{const n=await P(`${e.id}`);M(n,e.autoshipChecked,e.autoshipDays,e.counts),L(n)}catch(n){console.error(n)}}))}function h(t){if(l&&(t||(d(l,"remove","empty"),N(".cart__empty").forEach(n=>n.remove())),t)){const e=c("p","cart__empty");e.innerText="Your cart is empty",d(l,"add","empty"),l.appendChild(e)}}function b(){let t=JSON.parse(localStorage.getItem("cartItems")||"[]"),e=0,n;const i=s("#total-cart-price");i&&(t?.length===0&&(i.innerText="$0"),t.forEach(async o=>{try{const r=await P(`${o.id}`);r.type==="Sale%"?n=S(r.price,r.discount,o.counts):n=k(r.price,o.counts),e+=parseFloat(n.replace(/,/g,"").replace(/\s/g,"")),i.innerText=`$${e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`,V(e)}catch(r){console.error(r)}}))}function V(t){const e=s(".cart__btn");if(!e)return;const n=s(".btn",e);if(!(!w||!n)&&w.role_type==="whosale"){n.style.backgroundColor="#C3BDB6",n.style.pointerEvents="none";const i=c("p","cart__limit");i.style.marginTop="15px",i.style.textAlign="center",i.style.opacity="0.5",i.style.fontSize="14px",i.style.fontWeight="400",i.innerText="Minimum order amount is $700",s(".cart__limit")||e.appendChild(i),t>=700&&(n.style.backgroundColor="",n.style.pointerEvents="")}}function $(){const t=s(".cart__btn");if(!t)return;const e=s(".btn",t);if(!e)return;if(JSON.parse(localStorage.getItem("cartItems")||"[]").length===0){e.style.backgroundColor="#C3BDB6",e.style.pointerEvents="none";return}e.style.backgroundColor="",e.style.pointerEvents=""}export{k as a,$ as b,h as e,S as g,J as i,z as l,M as r,b as t,g as u};
