import"./style-dFOJvk-V.js";import{b as d,c as P,d as k,e as x,r as $,a as A,i as C,f as E}from"./useApi-h8H9vdw_.js";import{g as D,r as B}from"./render-card-BjgDZ1h0.js";import{g as e,c as a}from"./useCallDom-DDNnwvp7.js";import"./index-wYSWI2m-.js";const R=new URLSearchParams(window.location.search),T=R.get("id")||void 0,M=localStorage.getItem("userInfo"),o=e(".add-to-cart__btn");async function V(){if(o&&M&&T){const t=await d(T);O(t)}}function O(t){o&&o.addEventListener("click",()=>{if(!JSON.parse(localStorage.getItem("cartItems")||"[]").some(n=>n.id===t.id)){P(t);return}k(t)})}const U=new URLSearchParams(window.location.search),S=U.get("id")||void 0,W=localStorage.getItem("userInfo"),u=e(".autoship__on-off");async function H(){if(u&&W&&S){const t=await d(S);J(t)}}function J(t){if(u){if(u.classList.contains("autoship__on-off_active")){if(!JSON.parse(localStorage.getItem("cartItems")||"[]").some(n=>n.id===t.id)){P(t),x(t);return}console.log(1),x(t);return}$(t)}}const N=new URLSearchParams(window.location.search),v=N.get("id")||void 0;async function j(){const t=e(".autoship__dropdown");if(!v||!t)return;const i=await d(v);q(i),z(),F(i),A(t)}function q(t){if(!t)return;const i=e(".ilustrate");if(!i)return;t.type==="Vitamins & Dietary Supplements"&&a(i,"add","ilustrate_purple"),t.type==="Minerals"&&a(i,"add","ilustrate_green-mint"),t.type==="Prenatal Vitamins"&&a(i,"add","ilustrate_pink"),t.type==="Pain Relief"&&a(i,"add","ilustrate_blue"),t.type==="Antioxidants"&&a(i,"add","ilustrate_orange"),t.type==="Weight Loss"&&a(i,"add","ilustrate_dark-blue"),(t.type==="Probiotics"||t.type==="Sale%")&&a(i,"add","ilustrate_red");const r=e(".ilustrate__content img");r.src=t.img;const n=e(".info__category"),s=e(".count__svg svg use");if(!n||!s)return;t.type==="Vitamins & Dietary Supplements"&&(a(n,"add","info__category_purple"),s.setAttribute("href","#can")),t.type==="Minerals"&&(a(n,"add","info__category_green-mint"),s.setAttribute("href","#bottle")),t.type==="Prenatal Vitamins"&&(a(n,"add","info__category_pink"),s.setAttribute("href","#kit")),t.type==="Pain Relief"&&(a(n,"add","info__category_blue"),s.setAttribute("href","#box")),t.type==="Antioxidants"&&(a(n,"add","info__category_orange"),s.setAttribute("href","#can")),t.type==="Weight Loss"&&(a(n,"add","info__category_dark-blue"),s.setAttribute("href","#bottle")),(t.type==="Probiotics"||t.type==="Sale%")&&(a(n,"add","info__category_red"),s.setAttribute("href","#kit")),n.innerText=t.type;const l=e(".info__name");if(!l)return;l.innerText=t.name;const _=e(".count__capsules span");if(!_)return;_.innerText=t.capsules.toString();const f=e(".count__mg span");if(!f)return;f.innerText=t.weight_mg.toString();const g=e(".autoship__text");if(!g)return;window.innerWidth<768&&(g.innerText="Deliver every");const L=D(t.price,t.discount),c=e(".add-to-cart__price");if(!c)return;t.type==="Sale%"?(a(c,"add","add-to-cart__price_sale"),c.innerHTML=`<span>$${t.price}</span> $${L}`):c.innerText=`$${t.price}`;const m=e(".descripton__info");if(!m)return;m.innerText=t.description;const p=e(".safety .inf");if(!p)return;p.innerText=t.satefy_information;const y=e(".indications .inf");if(!y)return;y.innerText=t.indications;const h=e(".ingredients .inf");if(!h)return;h.innerText=t.ingradients;const b=e(".directions .inf");if(!b)return;b.innerText=t.directions;const w=e(".legal .inf");w&&(w.innerText=t.legal_disclaimer)}function z(){const t=e(".info__backbtn");t&&t.addEventListener("click",()=>{window.location.href="shop.html"})}function F(t){const i=e(".autoship__on-off");if(!i)return;const r=e(".autoship__circle",i);if(!r)return;const n=localStorage.getItem("userInfo");t.disabled_subscribe===!0&&n&&i.addEventListener("click",async()=>{i.classList.toggle("autoship__on-off_active"),r.classList.toggle("autoship__circle_active"),console.log(3),H()})}document.addEventListener("DOMContentLoaded",async()=>{C(),await j(),E(".count__counter"),V(),B(".you-like__cards","gray")});
