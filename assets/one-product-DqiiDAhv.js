import"./style-CqQXtvE4.js";import{b as x,a as T,i as w,c as k}from"./useApi-yIyCt_WW.js";import{g as v}from"./render-card-Bnz5-biK.js";import{g as e,c as n}from"./useCallDom-DDNnwvp7.js";import"./index-wYSWI2m-.js";const L=new URLSearchParams(window.location.search),h=L.get("id")||void 0;async function S(){const t=e(".autoship__dropdown");if(!h||!t)return;const i=await x(h);A(i),P(),D(i),T(t)}function A(t){if(!t)return;const i=e(".ilustrate");if(!i)return;t.type==="Vitamins & Dietary Supplements"&&n(i,"add","ilustrate_purple"),t.type==="Minerals"&&n(i,"add","ilustrate_green-mint"),t.type==="Prenatal Vitamins"&&n(i,"add","ilustrate_pink"),t.type==="Pain Relief"&&n(i,"add","ilustrate_blue"),t.type==="Antioxidants"&&n(i,"add","ilustrate_orange"),t.type==="Weight Loss"&&n(i,"add","ilustrate_dark-blue"),(t.type==="Probiotics"||t.type==="Sale%")&&n(i,"add","ilustrate_red");const r=e(".ilustrate__content img");r.src=t.img;const a=e(".info__category"),s=e(".count__svg svg use");if(!a||!s)return;t.type==="Vitamins & Dietary Supplements"&&(n(a,"add","info__category_purple"),s.setAttribute("href","#can")),t.type==="Minerals"&&(n(a,"add","info__category_green-mint"),s.setAttribute("href","#bottle")),t.type==="Prenatal Vitamins"&&(n(a,"add","info__category_pink"),s.setAttribute("href","#kit")),t.type==="Pain Relief"&&(n(a,"add","info__category_blue"),s.setAttribute("href","#box")),t.type==="Antioxidants"&&(n(a,"add","info__category_orange"),s.setAttribute("href","#can")),t.type==="Weight Loss"&&(n(a,"add","info__category_dark-blue"),s.setAttribute("href","#bottle")),(t.type==="Probiotics"||t.type==="Sale%")&&(n(a,"add","info__category_red"),s.setAttribute("href","#kit")),a.innerText=t.type;const o=e(".info__name");if(!o)return;o.innerText=t.name;const u=e(".count__capsules span");if(!u)return;u.innerText=t.capsules.toString();const _=e(".count__mg span");if(!_)return;_.innerText=t.weight_mg.toString();const l=e(".autoship__text");if(!l)return;window.innerWidth<768&&(l.innerText="Deliver every");const b=v(t.price,t.discount),c=e(".add-to-cart__price");if(!c)return;t.type==="Sale%"?(n(c,"add","add-to-cart__price_sale"),c.innerHTML=`<span>$${t.price}</span> $${b}`):c.innerText=`$${t.price}`;const f=e(".descripton__info");if(!f)return;f.innerText=t.description;const d=e(".safety .inf");if(!d)return;d.innerText=t.satefy_information;const g=e(".indications .inf");if(!g)return;g.innerText=t.indications;const p=e(".ingredients .inf");if(!p)return;p.innerText=t.ingradients;const y=e(".directions .inf");if(!y)return;y.innerText=t.directions;const m=e(".legal .inf");m&&(m.innerText=t.legal_disclaimer)}function P(){const t=e(".info__backbtn");t&&t.addEventListener("click",()=>{window.location.href="shop.html"})}function D(t){const i=e(".autoship__on-off");if(!i)return;const r=e(".autoship__circle",i);if(!r)return;const a=localStorage.getItem("userInfo");t.disabled_subscribe===!0&&a&&i.addEventListener("click",async()=>{i.classList.toggle("autoship__on-off_active"),r.classList.toggle("autoship__circle_active")})}document.addEventListener("DOMContentLoaded",async()=>{w(),await S(),k(".count__counter")});
