import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{g as a,r as n,c as i}from"./use-call-dom-DDNnwvp7.js";import{g as v,h as L,i as T}from"./cart-B7sHVmwa.js";import{J as $}from"./just-validate.es-C73wyOde.js";import{c as F}from"./use-api-BwWGYWPV.js";import{I as h}from"./index-yFKSUj0c.js";import"./index-DConTh1S.js";import"./axios-B-d85qs8.js";const p=a(".order-list__prods"),u=a(".order-list__total");function I(){q(),C()}function q(){const e=JSON.parse(localStorage.getItem("cartItems")||"[]");e.length!==0&&p&&(p.innerHTML="",e.forEach(t=>{w(t)}))}function w(e){if(!p)return;const t=n("div",["prod",`prod_${e.id}`]),r=n("div","prod__img");e.type==="Vitamins & Dietary Supplements"&&i(r,"add","prod__img_purple"),e.type==="Minerals"&&i(r,"add","prod__img_green-mint"),e.type==="Prenatal Vitamins"&&i(r,"add","prod__img_pink"),e.type==="Pain Relief"&&i(r,"add","prod__img_blue"),e.type==="Antioxidants"&&i(r,"add","prod__img_orange"),e.type==="Weight Loss"&&i(r,"add","prod__img_dark-blue"),(e.type==="Probiotics"||e.type==="Sale%")&&i(r,"add","prod__img_red"),r.innerHTML=`
    <img src="${e.img}" alt="" />
  `;const c=n("div","prod__count-and-name");c.innerText=`${e.counts} x ${e.name}`;const o=n("p","prod__price"),g=v(e.price,e.discount,e.counts),d=L(e.price,e.counts);e.type==="Sale%"?(i(o,"add","prod__price_sale"),o.innerHTML=`<span>$${d}</span> $${g}`):o.innerText=`$${d}`,t.appendChild(r),t.appendChild(c),t.appendChild(o),p.appendChild(t)}function C(){if(!u)return;let e=JSON.parse(localStorage.getItem("cartItems")||"[]"),t=0,r,c=0;const o=n("p","order-list__subtotal"),g=n("p","order-list__shopping"),d=n("p","order-list__discount"),m=n("p","order-list__todays-total"),b=a(".accordion__price");e?.length===0&&(m.innerHTML="Today’s Total: <span>$0</span>"),e.forEach(s=>{s.type==="Sale%"?(r=v(s.price,s.discount,s.counts),c+=parseFloat(L(s.price,s.counts).replace(/,/g,"").replace(/\s/g,""))-parseFloat(v(s.price,s.discount,s.counts).replace(/,/g,"").replace(/\s/g,""))):r=L(s.price,s.counts),t+=parseFloat(r.replace(/,/g,"").replace(/\s/g,""))}),o.innerHTML=`Subtotal <span>$${t.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>`,g.innerHTML="Shipping <span>$9.20</span>",u.appendChild(o),u.appendChild(g),c!==0&&(d.innerHTML=`Discount <span>$${c.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>`,u.appendChild(d)),t+=9.2,m.innerHTML=`Today’s Total: <span>$${t.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>`,u.appendChild(m),b&&(b.innerText=`$${t.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`)}const f=a(".accordion"),x=a(".accordion-content");function P(){!f||!x||f.addEventListener("click",()=>{f.classList.toggle("accordion_active"),x.classList.toggle("accordion-content_active")})}const l=a(".header");function k(){D()}function D(){y(),window.addEventListener("scroll",y)}function y(){l&&(window.scrollY>50?(l.style.backgroundColor="white",l.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)",l.style.transition="background-color 0.3s ease, box-shadow 0.3s ease"):(l.style.backgroundColor="transparent",l.style.boxShadow="none"))}async function O(){return new Promise(e=>{const t=a("#create-order");if(!t)return;const r=new $(t,{focusInvalidField:!0,lockForm:!1,validateBeforeSubmitting:!0});r.addField("#first-name",[{rule:"required",errorMessage:"This field is required"},{rule:"minLength",value:2,errorMessage:"Must be at least 2 characters"},{rule:"maxLength",value:50,errorMessage:"Must be less than 50 characters"},{rule:"customRegexp",value:/^[\p{L}]+$/u,errorMessage:"Only letters are allowed"}]).addField("#last-name",[{rule:"required",errorMessage:"This field is required"},{rule:"minLength",value:2,errorMessage:"Must be at least 2 characters"},{rule:"maxLength",value:50,errorMessage:"Must be less than 50 characters"},{rule:"customRegexp",value:/^[\p{L}]+$/u,errorMessage:"Only letters are allowed"}]).addField("#address-line1",[{rule:"required",errorMessage:"This field is required"},{rule:"minLength",value:5,errorMessage:"Must be at least 5 characters"},{rule:"maxLength",value:50,errorMessage:"Must be less than 50 characters"},{rule:"customRegexp",value:/^[\p{L}\d.,\s]+$/u,errorMessage:"Write correct address"}]).addField("#address-line2",[{rule:"minLength",value:5,errorMessage:"Must be at least 5 characters"},{rule:"maxLength",value:50,errorMessage:"Must be less than 50 characters"},{rule:"customRegexp",value:/^[\p{L}\d.,\s]+$/u,errorMessage:"Write correct address"}]).addField("#city",[{rule:"required",errorMessage:"This field is required"},{rule:"minLength",value:2,errorMessage:"Must be at least 2 characters"},{rule:"maxLength",value:50,errorMessage:"Must be less than 50 characters"},{rule:"customRegexp",value:/^[\p{L}]+$/u,errorMessage:"Enter a valid city name"}]).addField("#state",[{rule:"required",errorMessage:"This field is required"}]).addField("#zip",[{rule:"required",errorMessage:"This field is required"},{rule:"minLength",value:3,errorMessage:"Must be at least 3 characters"},{rule:"maxLength",value:10,errorMessage:"Must be less than 10 characters"},{rule:"customRegexp",value:/^\d+$/,errorMessage:"Enter a valid ZIP / Postal Code"}]).addField("#mail",[{rule:"required",errorMessage:"This field is required"},{rule:"customRegexp",value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/,errorMessage:"Write correct email"}]).addField("#phone",[{rule:"required",errorMessage:"This field is required"},{rule:"minLength",value:4,errorMessage:"Must be at least 4 characters"},{rule:"maxLength",value:15,errorMessage:"Must be less than 15 characters"},{rule:"customRegexp",value:/^\+?\d+$/,errorMessage:"Enter a valid phone number"}]).addField("#card",[{rule:"required",errorMessage:"This field is required"},{rule:"minLength",value:19,errorMessage:"Must be at least 16 characters"}]).addField("#expiration",[{rule:"required",errorMessage:"This field is required"},{rule:"minLength",value:5,errorMessage:"Must be at least 4 characters"}]).addField("#cvc",[{rule:"required",errorMessage:"This field is required"},{rule:"minLength",value:3,errorMessage:"Must be at least 3 characters"}]),r.validate(),r.onSuccess(()=>e(!0)),r.onFail(()=>e(!1))})}const M=a(".create-order-form__btn"),S=a(".order-list__btn"),_=JSON.parse(localStorage.getItem("userInfo")||"[]");async function E(){!M||!S||(R(),S.addEventListener("click",()=>{M.click()}),M.addEventListener("click",async()=>{await O()&&H()}))}function H(){_||(localStorage.removeItem("cartItems"),window.location.href="/Vitamin/successful-order.html");const e=JSON.parse(localStorage.getItem("cartItems")||"[]");if(e.length===0){console.log("Cart is empty!");return}console.log(_);const t={order:e.map(r=>({product_id:r.id,quantity:r.counts})),user_id:_.user_id};F(t).then(r=>{console.log("Order created successfully:",r),localStorage.removeItem("cartItems"),window.location.href="/Vitamin/successful-order.html"}).catch(r=>{console.error("Error creating order:",r)})}function R(){const e=a("#card"),t=a("#expiration"),r=a("#cvc");!e||!t||!r||(h(e,{mask:"0000 0000 0000 0000"}),h(t,{mask:"00/00"}),h(r,{mask:"000"}))}document.addEventListener("DOMContentLoaded",async()=>{I(),P(),k();const e=a(".deliver-info__subitem_dropdown");e&&(T(e),await E())});
