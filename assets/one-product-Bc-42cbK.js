import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{i as E}from"./header-nqtpxlcM.js";import{r as A}from"./render-card-DZh8WYoQ.js";import{a as f,b as D,c as d,d as C,e as x,r as B,f as M,i as N}from"./cart-Zl5pb77G.js";import{g as n,c as a}from"./use-call-dom-DDNnwvp7.js";import"./js.cookie-Cj7aMn_Q.js";import"./index-CYnvAbVQ.js";const F=new URLSearchParams(window.location.search),T=F.get("id")||void 0,_=n(".add-to-cart__btn");async function R(){if(_&&T)try{const t=await f(T);if("errors"in t){console.error(t.errors);return}U(t)}catch(t){console.error(t)}}function U(t){_&&_.addEventListener("click",i=>{D(t),d(i)})}const V=new URLSearchParams(window.location.search),v=V.get("id")||void 0,m=n(".autoship__on-off");async function H(t){if(m&&v)try{const i=await f(v);if("errors"in i){console.error(i.errors);return}W(i,t)}catch(i){console.error(i)}}function W(t,i){if(m){if(m.classList.contains("autoship__on-off_active")){if(!JSON.parse(localStorage.getItem("cartItems")||"[]").some(s=>s.id===t.id)){C(t),x(t),d(i);return}x(t),d(i);return}B(t)}}const O=new URLSearchParams(window.location.search),P=O.get("id")||void 0;async function z(){const t=n(".autoship__dropdown");if(!(!P||!t))try{const i=await f(P);if("errors"in i){console.error(i.errors);return}M(".count__counter"),J(i),j(),q(i),N(t)}catch(i){console.error(i)}}function J(t){const i=n(".ilustrate"),e=n(".info__category"),r=n(".count__svg svg use"),s=n(".info__name"),c=n(".count__capsules span"),o=n(".count__mg span"),u=n(".autoship__text"),l=n(".add-to-cart__price"),p=n(".descripton__info"),g=n(".safety .inf"),h=n(".indications .inf"),y=n(".ingredients .inf"),w=n(".directions .inf"),b=n(".legal .inf");if(!t||!i||!e||!r||!s||!c||!o||!u||!l||!p||!g||!h||!y||!w||!b)return;t.type==="Vitamins & Dietary Supplements"&&a(i,"add","ilustrate_purple"),t.type==="Minerals"&&a(i,"add","ilustrate_green-mint"),t.type==="Prenatal Vitamins"&&a(i,"add","ilustrate_pink"),t.type==="Pain Relief"&&a(i,"add","ilustrate_blue"),t.type==="Antioxidants"&&a(i,"add","ilustrate_orange"),t.type==="Weight Loss"&&a(i,"add","ilustrate_dark-blue"),(t.type==="Probiotics"||t.type==="Sale%")&&a(i,"add","ilustrate_red");const S=n(".ilustrate__content img");S.src=t.img,t.type==="Vitamins & Dietary Supplements"&&(a(e,"add","info__category_purple"),r.setAttribute("href","#can")),t.type==="Minerals"&&(a(e,"add","info__category_green-mint"),r.setAttribute("href","#bottle")),t.type==="Prenatal Vitamins"&&(a(e,"add","info__category_pink"),r.setAttribute("href","#kit")),t.type==="Pain Relief"&&(a(e,"add","info__category_blue"),r.setAttribute("href","#box")),t.type==="Antioxidants"&&(a(e,"add","info__category_orange"),r.setAttribute("href","#can")),t.type==="Weight Loss"&&(a(e,"add","info__category_dark-blue"),r.setAttribute("href","#bottle")),(t.type==="Probiotics"||t.type==="Sale%")&&(a(e,"add","info__category_red"),r.setAttribute("href","#kit")),e.innerText=t.type,s.innerText=t.name,c.innerText=t.capsules.toString(),o.innerText=t.weight_mg.toString(),window.addEventListener("resize",()=>{window.innerWidth<768&&(u.innerText="Deliver every")});const k=$(t.price,t.discount);t.type==="Sale%"?(a(l,"add","add-to-cart__price_sale"),l.innerHTML=`<span><span class="price">$${t.price}</span> <span class="discount">-${t.discount}%</span></span> $${k}`):l.innerText=`$${t.price}`,K(l,t),p.innerText=t.description,g.innerText=t.satefy_information,h.innerText=t.indications,y.innerText=t.ingradients,w.innerText=t.directions,b.innerText=t.legal_disclaimer}function j(){const t=n(".info__backbtn");t&&t.addEventListener("click",()=>{window.location.href="shop.html"})}function q(t){const i=n(".autoship__on-off");if(!i)return;const e=n(".autoship__circle",i);e&&t.disabled_subscribe===!0&&i.addEventListener("click",async r=>{i.classList.toggle("autoship__on-off_active"),e.classList.toggle("autoship__circle_active"),H(r)})}function $(t,i,e=1){const r=parseFloat(t);if(isNaN(r))throw new Error("Invalid price format");return(r*(1-i/100)*e).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function G(t,i=1){const e=parseFloat(t);if(isNaN(e))throw new Error("Invalid price format");return(e*i).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function K(t,i){const e=n(".count__minus"),r=n(".count__plus"),s=n(".count__items");if(!t||!r||!e||!s)return;let c=Number(s.innerText),o="",u="";r.addEventListener("click",()=>{L(c,s,o,u,t,i)}),e.addEventListener("click",()=>{L(c,s,o,u,t,i)})}function L(t,i,e,r,s,c){t=Number(i.innerText),e=G(c.price,t),r=$(c.price,c.discount,t),c.type==="Sale%"?s.innerHTML=`<span>$${e} <span class="discount">-${c.discount}%</span></span> $${r}`:s.innerText=`$${e}`}document.addEventListener("DOMContentLoaded",async()=>{E(),await z(),await R(),await A(".you-like__cards","gray")});
