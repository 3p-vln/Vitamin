import{i as p}from"./use-api-AcE-7l2M.js";import"./js.cookie-Cz0CWeBA.js";async function h(){try{const r=await p(!1);if("errors"in r){console.error("error",r.errors);return}if(!r?.data||!Array.isArray(r.data)){console.error("Invalid response format",r);return}const e=document.getElementById("choose-products-slider");if(!e){console.error(`Container with ID "${e}" not found.`);return}e.innerHTML="";const l=document.createDocumentFragment();r.data.forEach(t=>{const a=document.createElement("div");a.className=`swiper-slide choose-products__slide ${m(t.type)}`;const s=document.createElement("div");s.className="choose-products__img-wrapper";const o=document.createElement("img");o.className="choose-products__img",o.src=t.img,o.alt=t.name,o.loading="lazy",s.append(o),a.appendChild(s);const n=document.createElement("div");n.className="choose-products__description-block";const c=document.createElement("div");c.className="choose-products__type",c.textContent=t.type,n.appendChild(c);const d=document.createElement("div");d.className="choose-products__product-title",d.textContent=t.name,n.appendChild(d);const i=document.createElement("div");i.className="choose-products__product-description",i.textContent=t.description,n.appendChild(i),a.appendChild(n),l.appendChild(a)}),e.appendChild(l)}catch(r){console.error("Error fetching or rendering cards:",r)}}function m(r){let e;switch(r){case"Probiotics":e="redBg";break;case"Weight Loss":e="darkBlueBg";break;case"Antioxidants":e="orangeBg";break;case"Pain Relief":e="blueBg";break;case"Prenatal Vitamins":e="pinkBg";break;case"Minerals":e="greenMintBg";break;case"Vitamins & Dietary Supplements":e="purpleBg";break;default:e="redBg"}return`choose-products__slide_${e}`}export{h as default};
