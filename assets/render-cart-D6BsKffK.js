import{g as s,a as P,c as d,r as c}from"./use-call-dom-CaqOo_cc.js";import{i as B}from"./dropdown-ojf4R2tx.js";import{i as L}from"./use-api-Bg0RsZwB.js";function J(t){let e;if(typeof t=="string"?e=s(t):e=t,!e)return;const n=s(".counter__plus",e),r=s(".counter__minus",e),o=s(".counter__items",e);let i=Number(o?.innerText);!o||!n||!r||(I(n,r,i),r.addEventListener("click",()=>{O(o,i),i=Number(o?.innerText),I(n,r,i)}),n.addEventListener("click",()=>{F(o,i),i=Number(o?.innerText),I(n,r,i)}),S(o,i))}function S(t,e){t.textContent=e.toString()}function O(t,e){e>1&&(e--,S(t,e))}function F(t,e){e<999&&(e++,S(t,e))}function I(t,e,n){n!==999&&n!==1&&(t.style.opacity="1",e.style.opacity="1"),n===999&&(t.style.opacity="0.3"),n===1&&(e.style.opacity="0.3")}const l=s(".cart__items"),$=s(".cart__btn"),E=JSON.parse(localStorage.getItem("userInfo")||"[]");let p;function H(t,e=!1,n="30",r=1){if(!l)return;const o=c("div",["cart__item","prod",`prod_${t.id}`]),i=c("a","prod__img");switch(i.href=`/Vitamin/one-product.html?id=${t.id}`,t.type){case"Vitamins & Dietary Supplements":d(i,"add","prod__img_purple");break;case"Minerals":d(i,"add","prod__img_green-mint");break;case"Prenatal Vitamins":d(i,"add","prod__img_pink");break;case"Pain Relief":d(i,"add","prod__img_blue");break;case"Antioxidants":d(i,"add","prod__img_orange");break;case"Weight Loss":d(i,"add","prod__img_dark-blue");break;case"Probiotics":d(i,"add","prod__img_red");break;case"Sale%":d(i,"add","prod__img_red");break}i.innerHTML=`
    <picture>
      <source srcset="${t.img.img_webp}" type="image/webp">
      <img src="${t.img.img_default}" alt="prod" width="${t.img.img_width}" height="${t.img.img_height}" />
    </picture>`;const a=c("div","prod__info"),u=c("div","prod__title-and-close"),m=c("a","prod__title");m.href=`/Vitamin/one-product.html?id=${t.id}`,m.innerText=t.name;const _=c("div","prod__close");_.innerHTML=`
    <span></span>
    <span></span>
  `;const y=c("div","prod__counter-and-price"),v=c("div","prod__counter");v.innerHTML=`
    <button class="counter__minus">
      <svg>
        <use href="#minus"></use>
      </svg>
    </button>
    
    <p class="counter__items">${r}</p>
    
    <button class="counter__plus">
      <svg>
        <use href="#plus"></use>
      </svg>
    </button>
  `,J(v);const f=c("p","prod__price"),M=k(t.price,t.discount,r),w=T(t.price,r);t.type==="Sale%"?(d(f,"add","prod__price_sale"),f.innerHTML=`<span>$${w}</span> $${M}`):f.innerText=`$${w}`;const x=c("div","prod__autoship");x.innerHTML=`
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
  `,B(x),u.appendChild(m),u.appendChild(_),y.appendChild(v),y.appendChild(f),a.appendChild(u),a.appendChild(y),a.appendChild(x),o.appendChild(i),o.appendChild(a),l.appendChild(o),p=!1,h(p),W(t,e,n,r),A(t.id),D(t)}function A(t){let e=JSON.parse(localStorage.getItem("cartItems")||"[]");e.some(r=>r.id===t)&&e.forEach(r=>{if(r.id===t){const o=s(`.prod_${r.id}`);if(!o)return;const i=s(".prod__close",o);if(!i)return;i.addEventListener("click",()=>{o.remove(),V(t)})}})}function V(t){let e=JSON.parse(localStorage.getItem("cartItems")||"[]");if(e=e.filter(n=>n.id!==t),localStorage.setItem("cartItems",JSON.stringify(e)),b(),C(),e.length===0){if(s(".cart__empty"))return;p=!0,h(p),b();return}}function k(t,e,n){const r=parseFloat(t);if(isNaN(r))throw new Error("Invalid price format");const o=Math.round(r*(1-e/100)*100)/100;return(Math.round(o*n*100)/100).toFixed(2)}function T(t,e){const n=parseFloat(t);if(isNaN(n))throw new Error("Invalid price format");return(n*e).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function W(t,e,n,r){let o=JSON.parse(localStorage.getItem("cartItems")||"[]");o.some(a=>a.id===t.id)||o.push({id:t.id,autoshipChecked:e,autoshipDays:n,counts:r}),localStorage.setItem("cartItems",JSON.stringify(o))}function D(t){const e=s(`.prod_${t.id} .prod__checkbox input`),n=s(`.prod_${t.id} .dropdown__text`),r=P(`.prod_${t.id} .dropdown__item`),o=s(`.prod_${t.id} .counter__minus`),i=s(`.prod_${t.id} .counter__plus`),a=s(`.prod_${t.id} .counter__items`);!e||!n||!r||!o||!i||!a||(e&&e.addEventListener("change",()=>{g(`${t.id}`,e.checked,n.textContent||"30",Number(a.textContent));const u=new CustomEvent("checkAutoship");document.dispatchEvent(u)}),n&&r.forEach(u=>{u.addEventListener("click",m=>{const _=m.target.textContent||"30";g(`${t.id}`,e.checked,_,Number(a.textContent))})}),o.addEventListener("click",()=>{N(t,Number(a.textContent)),g(`${t.id}`,e.checked,n.textContent||"30",Number(a.textContent)),b()}),i.addEventListener("click",()=>{N(t,Number(a.textContent)),g(`${t.id}`,e.checked,n.textContent||"30",Number(a.textContent)),b()}))}function N(t,e){const n=k(t.price,t.discount,e),r=T(t.price,e),o=s(`.prod_${t.id} .prod__price`);if(o){if(t.type==="Sale%"){o.innerHTML=`<span>$${r}</span> $${n}`;return}o.innerText=`$${r}`}}function g(t,e,n,r){let o=JSON.parse(localStorage.getItem("cartItems")||"[]");const i=o.findIndex(a=>a.id===Number(t));i!==-1&&(o[i].autoshipChecked=e,o[i].autoshipDays=n,o[i].counts=r),localStorage.setItem("cartItems",JSON.stringify(o))}function j(){const t=JSON.parse(localStorage.getItem("cartItems")||"[]");if(t.length===0){p=!0,h(p),C();return}p=!1,h(p),C(),l&&(l.innerHTML="",t.forEach(async e=>{try{const n=await L(`${e.id}`);H(n,e.autoshipChecked,e.autoshipDays,e.counts),D(n)}catch(n){console.error(n)}}))}function h(t){const e=s(".header__bag svg");if(!(!l||!$||!e)){if(!t){const n=P(".cart__empty");d(l,"remove","empty"),n.forEach(r=>r.remove()),$.style.display="",e.innerHTML='<use href="#bag-active"></use>'}if(t){const n=c("p","cart__empty");n.innerText="Your cart is empty",d(l,"add","empty"),$.style.display="none",l.appendChild(n),e.innerHTML='<use href="#bag-active"></use>'}}}function b(){let t=JSON.parse(localStorage.getItem("cartItems")||"[]"),e=0,n;const r=s("#total-cart-price");r&&(t?.length===0&&(r.innerText="$0"),t.forEach(async o=>{try{const i=await L(`${o.id}`);i.type==="Sale%"?n=k(i.price,i.discount,o.counts):n=T(i.price,o.counts),e+=parseFloat(n.replace(/,/g,"").replace(/\s/g,"")),r.innerText=`$${e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`,U(e)}catch(i){console.error(i)}}))}function U(t){const e=s(".cart__btn");if(!e)return;const n=s(".btn",e);if(!(!E||!n)&&E.role_type==="whosale"){n.style.backgroundColor="#C3BDB6",n.style.pointerEvents="none";const r=c("p","cart__limit");r.style.marginTop="15px",r.style.textAlign="center",r.style.opacity="0.5",r.style.fontSize="14px",r.style.fontWeight="400",r.innerText="Minimum order amount is $700",s(".cart__limit")||e.appendChild(r),t>=700&&(n.style.backgroundColor="",n.style.pointerEvents="")}}function C(){const t=s(".cart__btn");if(!t)return;const e=s(".btn",t);if(!e)return;if(JSON.parse(localStorage.getItem("cartItems")||"[]").length===0){e.style.backgroundColor="#C3BDB6",e.style.pointerEvents="none";return}e.style.backgroundColor="",e.style.pointerEvents=""}export{T as a,C as b,h as e,k as g,J as i,j as l,H as r,b as t,g as u};
