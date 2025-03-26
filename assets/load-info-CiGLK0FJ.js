import{i as F}from"./dropdown-ojf4R2tx.js";import{i as L}from"./use-api-Bg0RsZwB.js";import{g as n,c}from"./use-call-dom-CaqOo_cc.js";import{c as b}from"./cart-ERhOMQGg.js";import{c as R,d as y,r as W,e as H}from"./cart-operation-Bfj-n9Xo.js";import{i as U}from"./render-cart-D4kgbyJx.js";import"./js.cookie-Cz0CWeBA.js";const J=new URLSearchParams(window.location.search),k=J.get("id")||void 0,w=n(".autoship__on-off");async function O(t){if(w&&k)try{const e=await L(k);q(e,t)}catch(e){console.error(e)}}function q(t,e){if(w){if(w.classList.contains("autoship__on-off_active")){if(!JSON.parse(localStorage.getItem("cartItems")||"[]").some(u=>u.id===t.id)){R(t),y(t),b(e);return}y(t),b(e);return}W(t)}}const z=new URLSearchParams(window.location.search),j=z.get("id")||void 0,g=n(".add-to-cart__btn");async function G(t){if(g&&j){if(!g)return;g.addEventListener("click",e=>{H(t),b(e)})}}const K=new URLSearchParams(window.location.search),f=K.get("id")||void 0,x=n(".autoship__dropdown"),d=n(".ilustrate"),r=n(".info__category"),l=n(".count__svg svg use"),$=n(".info__name"),S=n(".count__capsules span"),A=n(".count__mg span"),p=n(".autoship__text"),h=n(".add-to-cart__price"),V=n(".descripton__info"),E=n(".safety .inf"),M=n(".indications .inf"),D=n(".ingredients .inf"),C=n(".directions .inf"),N=n(".legal .inf"),Q=[d,r,l,$,S,A,p,h,V,E,M,D,C,N],T=n(".count__minus"),P=n(".count__plus"),m=n(".count__items");async function ut(){if(!(!f||!x))try{const t=await L(f);await G(t),U(".count__counter"),X(t),Y(),Z(t),F(x),et()}catch(t){console.error(t)}}function i(t){if(t)return t}function o(t,e,a){if(t)switch(e){case"innerText":t.textContent=a;break;case"innerHTML":t.innerHTML=a;break}}function X(t){if(Q.some(s=>!s))return;switch(t.type){case"Vitamins & Dietary Supplements":c(i(d),"add","ilustrate_purple");break;case"Minerals":c(i(d),"add","ilustrate_green-mint");break;case"Prenatal Vitamins":c(i(d),"add","ilustrate_pink");break;case"Pain Relief":c(i(d),"add","ilustrate_blue");break;case"Antioxidants":c(i(d),"add","ilustrate_orange");break;case"Weight Loss":c(i(d),"add","ilustrate_dark-blue");break;case"Probiotics":c(i(d),"add","ilustrate_red");break;case"Sale%":c(i(d),"add","ilustrate_red");break}const e=n(".ilustrate__content");if(!e||(e.innerHTML=`
     <picture>
        <source srcset="${t.img.img_webp}" type="image/webp">
        <img src="${t.img.img_default}" alt="prod" width="${t.img.img_width}" height="${t.img.img_height}"/>
     </picture>`,!r))return;switch(t.type){case"Vitamins & Dietary Supplements":c(i(r),"add","info__category_purple"),r.href="/Vitamin/shop.html?category=Vitamins+%26+Dietary+Supplements",i(l)?.setAttribute("href","#can");break;case"Minerals":c(i(r),"add","info__category_green-mint"),r.href="/Vitamin/shop.html?category=Minerals",i(l)?.setAttribute("href","#bottle");break;case"Prenatal Vitamins":c(i(r),"add","info__category_pink"),r.href="/Vitamin/shop.html?category=Prenatal+Vitamins",i(l)?.setAttribute("href","#kit");break;case"Pain Relief":c(i(r),"add","info__category_blue"),r.href="/Vitamin/shop.html?category=Pain+Relief",i(l)?.setAttribute("href","#box");break;case"Antioxidants":c(i(r),"add","info__category_orange"),r.href="/Vitamin/shop.html?category=Antioxidants",i(l)?.setAttribute("href","#can");break;case"Weight Loss":c(i(r),"add","info__category_dark-blue"),r.href="/Vitamin/shop.html?category=Weight+Loss",i(l)?.setAttribute("href","#bottle");break;case"Probiotics":c(i(r),"add","info__category_red"),r.href="/Vitamin/shop.html?category=Probiotics",i(l)?.setAttribute("href","#kit");break;case"Sale%":c(i(r),"add","info__category_red"),r.href="/Vitamin/shop.html?category=Sale%25",i(l)?.setAttribute("href","#kit");break}o(r,"innerText",t.type),o($,"innerText",t.name),o(S,"innerText",t.capsules.toString()),o(A,"innerText",t.weight_mg.toString()),window.innerWidth<768&&o(p,"innerText","Deliver every"),window.addEventListener("resize",()=>{window.innerWidth<768&&o(p,"innerText","Deliver every"),window.innerWidth>=768&&o(p,"innerText","Autoship this item every")});const a=B(t.price,t.discount);t.type==="Sale%"?(c(i(h),"add","add-to-cart__price_sale"),o(h,"innerHTML",`<span><span class="price">$${t.price}</span> <span class="discount">-${t.discount}%</span></span> $${a}`)):o(h,"innerText",`$${t.price}`),tt(i(h),t),o(V,"innerText",t.description),o(E,"innerText",t.satefy_information),o(M,"innerText",t.indications),o(D,"innerText",t.ingradients),o(C,"innerText",t.directions),o(N,"innerText",t.legal_disclaimer)}function Y(){const t=n(".info__backbtn");t&&t.addEventListener("click",()=>{window.location.href="/Vitamin/shop.html"})}function Z(t){const e=n(".autoship__on-off");if(!e)return;const a=n(".autoship__circle",e);a&&t.disabled_subscribe===!0&&e.addEventListener("click",async s=>{e.classList.toggle("autoship__on-off_active"),a.classList.toggle("autoship__circle_active"),await O(s)})}function B(t,e,a=1){const s=parseFloat(t);if(isNaN(s))throw new Error("Invalid price format");const u=Math.round(s*(1-e/100)*100)/100;return(Math.round(u*a*100)/100).toFixed(2)}function I(t,e=1){const a=parseFloat(t);if(isNaN(a))throw new Error("Invalid price format");return(a*e).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function tt(t,e){if(!t||!P||!T||!m)return;let a=Number(m.innerText),s="",u="";P.addEventListener("click",()=>{v(a,m,s,u,t,e)}),T.addEventListener("click",()=>{v(a,m,s,u,t,e)})}function v(t,e,a,s,u,_){if(t=Number(e.innerText),a=I(_.price,t),s=B(_.price,_.discount,t),_.type==="Sale%"){u.innerHTML=`<span><span class="price">$${a}</span> <span class="discount">-${_.discount}%</span></span> $${s}`;return}u.innerText=`$${a}`}function et(){const t=n(".autoship__on-off"),e=n(".autoship__circle");let a=JSON.parse(localStorage.getItem("cartItems")||"[]");if(!f)return;const s=a.findIndex(u=>u.id===Number(f));!e||!t||!s||!a[s]||a[s].autoshipChecked&&(t.classList.add("autoship__on-off_active"),e.classList.add("autoship__circle_active"))}export{ut as default};
