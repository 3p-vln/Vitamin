import{i as l}from"./use-api-DWog3y8P.js";import"./js.cookie-Cz0CWeBA.js";async function h(){try{const r=await l(!1);if("errors"in r){console.error("error",r.errors);return}if(!r?.data||!Array.isArray(r.data)){console.error("Invalid response format",r);return}const e=document.getElementById("choose-products-slider");if(!e){console.error(`Container with ID "${e}" not found.`);return}e.innerHTML="";const d=document.createDocumentFragment();r.data.forEach(t=>{const n=document.createElement("div");n.className=`swiper-slide choose-products__slide ${m(t.type)} skeleton`;const s=document.createElement("div");s.className="choose-products__img-wrapper";const p=document.createElement("picture");p.innerHTML=`
        <source srcset="${t.img.img_webp}" type="image/webp">
        <img class="choose-products__img" src="${t.img.img_default}" alt="prod" width="${t.img.img_width}" height="${t.img.img_height}" loading="lazy" />
      `,s.append(p),n.appendChild(s);const o=document.createElement("div");o.className="choose-products__description-block";const a=document.createElement("div");a.className="choose-products__type",a.textContent=t.type,o.appendChild(a);const c=document.createElement("div");c.className="choose-products__product-title",c.textContent=t.name,o.appendChild(c);const i=document.createElement("div");i.className="choose-products__product-description",i.textContent=t.description,o.appendChild(i),n.appendChild(o),d.appendChild(n)}),e.appendChild(d)}catch(r){console.error("Error fetching or rendering cards:",r)}}function m(r){let e;switch(r){case"Probiotics":e="redBg";break;case"Weight Loss":e="darkBlueBg";break;case"Antioxidants":e="orangeBg";break;case"Pain Relief":e="blueBg";break;case"Prenatal Vitamins":e="pinkBg";break;case"Minerals":e="greenMintBg";break;case"Vitamins & Dietary Supplements":e="purpleBg";break;default:e="redBg"}return`choose-products__slide_${e}`}export{h as default};
