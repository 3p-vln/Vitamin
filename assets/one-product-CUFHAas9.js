import"./style-dFOJvk-V.js";import{b as d,c as S,d as k,e as x,r as $,a as A,i as C,f as E}from"./useApi-DvXvyeip.js";import{g as D,r as B}from"./render-card-H66Jgq90.js";import{g as e,c as n}from"./useCallDom-DDNnwvp7.js";import"./index-wYSWI2m-.js";const R=new URLSearchParams(window.location.search),T=R.get("id")||void 0,o=e(".add-to-cart__btn");async function M(){if(o&&T){const t=await d(T);V(t)}}function V(t){o&&o.addEventListener("click",()=>{if(!JSON.parse(localStorage.getItem("cartItems")||"[]").some(a=>a.id===t.id)){S(t);return}k(t)})}const O=new URLSearchParams(window.location.search),v=O.get("id")||void 0,u=e(".autoship__on-off");async function U(){if(u&&v){const t=await d(v);W(t)}}function W(t){if(u){if(u.classList.contains("autoship__on-off_active")){if(!JSON.parse(localStorage.getItem("cartItems")||"[]").some(a=>a.id===t.id)){S(t),x(t);return}x(t);return}$(t)}}const H=new URLSearchParams(window.location.search),P=H.get("id")||void 0;async function J(){const t=e(".autoship__dropdown");if(!P||!t)return;const i=await d(P);N(i),j(),q(i),A(t)}function N(t){if(!t)return;const i=e(".ilustrate");if(!i)return;t.type==="Vitamins & Dietary Supplements"&&n(i,"add","ilustrate_purple"),t.type==="Minerals"&&n(i,"add","ilustrate_green-mint"),t.type==="Prenatal Vitamins"&&n(i,"add","ilustrate_pink"),t.type==="Pain Relief"&&n(i,"add","ilustrate_blue"),t.type==="Antioxidants"&&n(i,"add","ilustrate_orange"),t.type==="Weight Loss"&&n(i,"add","ilustrate_dark-blue"),(t.type==="Probiotics"||t.type==="Sale%")&&n(i,"add","ilustrate_red");const r=e(".ilustrate__content img");r.src=t.img;const a=e(".info__category"),s=e(".count__svg svg use");if(!a||!s)return;t.type==="Vitamins & Dietary Supplements"&&(n(a,"add","info__category_purple"),s.setAttribute("href","#can")),t.type==="Minerals"&&(n(a,"add","info__category_green-mint"),s.setAttribute("href","#bottle")),t.type==="Prenatal Vitamins"&&(n(a,"add","info__category_pink"),s.setAttribute("href","#kit")),t.type==="Pain Relief"&&(n(a,"add","info__category_blue"),s.setAttribute("href","#box")),t.type==="Antioxidants"&&(n(a,"add","info__category_orange"),s.setAttribute("href","#can")),t.type==="Weight Loss"&&(n(a,"add","info__category_dark-blue"),s.setAttribute("href","#bottle")),(t.type==="Probiotics"||t.type==="Sale%")&&(n(a,"add","info__category_red"),s.setAttribute("href","#kit")),a.innerText=t.type;const _=e(".info__name");if(!_)return;_.innerText=t.name;const l=e(".count__capsules span");if(!l)return;l.innerText=t.capsules.toString();const f=e(".count__mg span");if(!f)return;f.innerText=t.weight_mg.toString();const g=e(".autoship__text");if(!g)return;window.innerWidth<768&&(g.innerText="Deliver every");const L=D(t.price,t.discount),c=e(".add-to-cart__price");if(!c)return;t.type==="Sale%"?(n(c,"add","add-to-cart__price_sale"),c.innerHTML=`<span>$${t.price}</span> $${L}`):c.innerText=`$${t.price}`;const m=e(".descripton__info");if(!m)return;m.innerText=t.description;const p=e(".safety .inf");if(!p)return;p.innerText=t.satefy_information;const y=e(".indications .inf");if(!y)return;y.innerText=t.indications;const h=e(".ingredients .inf");if(!h)return;h.innerText=t.ingradients;const b=e(".directions .inf");if(!b)return;b.innerText=t.directions;const w=e(".legal .inf");w&&(w.innerText=t.legal_disclaimer)}function j(){const t=e(".info__backbtn");t&&t.addEventListener("click",()=>{window.location.href="shop.html"})}function q(t){const i=e(".autoship__on-off");if(!i)return;const r=e(".autoship__circle",i);r&&t.disabled_subscribe===!0&&i.addEventListener("click",async()=>{i.classList.toggle("autoship__on-off_active"),r.classList.toggle("autoship__circle_active"),U()})}document.addEventListener("DOMContentLoaded",async()=>{C(),await J(),E(".count__counter"),M(),B(".you-like__cards","gray")});
