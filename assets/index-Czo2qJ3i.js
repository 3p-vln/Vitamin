import"./style-CWWArEq8.js";import{i as l}from"./header-BKRLLjX5.js";import{S as m}from"./swiper-core-Drop_04u.js";import{g as u}from"./use-api-UD5ZbRzq.js";import"./use-call-dom-DDNnwvp7.js";import"./cart-BtTvo196.js";import"./axios-BrcDDtdF.js";import"./index-CKL1PcRE.js";function h(){new m(".choose-products__products-slider",{speed:500,loop:!0,slidesPerView:2})}async function _(){try{const e=await u(!1);if(!e?.data||!Array.isArray(e.data)){console.error("Invalid response format",e);return}const n=document.getElementById("choose-products-slider");if(!n){console.error(`Container with ID "${n}" not found.`);return}n.innerHTML="";const p=document.createDocumentFragment();e.data.forEach(t=>{const s=document.createElement("div");s.className="swiper-slide choose-products__slide";const c=document.createElement("div");c.className="choose-products__img-wrapper";const o=document.createElement("img");o.className="choose-products__img",o.src=t.img,o.alt=t.name,o.loading="lazy",c.append(o),s.appendChild(c);const r=document.createElement("div");r.className="choose-products__description-block";const d=document.createElement("div");d.className="choose-products__type",d.textContent=t.type,r.appendChild(d);const a=document.createElement("div");a.className="choose-products__product-title",a.textContent=t.name,r.appendChild(a);const i=document.createElement("div");i.className="choose-products__product-description",i.textContent=t.description,r.appendChild(i),s.appendChild(r),p.appendChild(s)}),n.appendChild(p)}catch(e){console.error("Error fetching or rendering cards:",e)}}function f(){new m(".feedback__slider",{speed:400,spaceBetween:32,slidesPerView:1,breakpoints:{1024:{slidesPerView:3,spaceBetween:20},650:{slidesPerView:2,spaceBetween:20}}})}document.addEventListener("DOMContentLoaded",async()=>{l(),h(),await _(),f()});
