import{g as $,a as x}from"./useApi-Bi0IovR0.js";import{g as f,r as a,c as s}from"./useCallDom-CYt_pDlL.js";let p=1;const C=10,L=6,h=window.innerWidth;async function B(t){const i=f(t);if(!i)return;const e=await $(!1);if(e.errors)return;const o=e.data;await T(o,i,"white")}async function M(t,i=1){const e=f(t);if(!e)return;const o=await x(i,C);if(o.errors)return;const d=o.data;await T(d,e,"gray"),k(i,t),h<768&&m()}async function T(t,i,e){let o=10;h<768&&(o=6),h<375&&(o=4),t.slice(0,o).forEach(n=>{const _=a("a",["prod-card",`${n.id}`,`prod-card_${e}`]),r=a("div","prod-card__content"),l=a("div","prod-card__img");l.innerHTML=`
        <picture>
          <img src="${n.img}" />
        </picture>
      `;const w=a("div","prod-card__discount");w.innerText=`-${n.discount}%`;const u=a("div",["prod-card__info","info"]),c=a("p","info__category");n.type==="Vitamins & Dietary Supplements"&&s(c,"add","info__category_purple"),n.type==="Minerals"&&s(c,"add","info__category_green-mint"),n.type==="Prenatal Vitamins"&&s(c,"add","info__category_purple"),n.type==="Pain Relief"&&s(c,"add","info__category_blue"),n.type==="Antioxidants"&&s(c,"add","info__category_orange"),n.type==="Weight Loss"&&s(c,"add","info__category_dark-blue"),n.type==="Probiotics"&&s(c,"add","info__category_red"),n.type==="Sale%"&&s(c,"add","info__category_red"),c.innerText=n.type;const b=a("p","info__name");b.innerText=n.name;const v=P(n.price,n.discount),g=a("p","info__price");n.type==="Sale%"?(g.innerHTML=`
      <span>$${n.price}</span> $${v}
      `,s(g,"add","info__price_sale")):g.innerText=`$${n.price}`,u.appendChild(c),u.appendChild(b),u.appendChild(g),r.appendChild(l),n.type==="Sale%"&&r.appendChild(w),r.appendChild(u),_.appendChild(r),i.appendChild(_)})}function P(t,i){const e=parseFloat(t);if(isNaN(e))throw new Error("Invalid price format");return+(e*(1-i/100)).toFixed(2)}function k(t,i){const e=f(".catalog-list__pagination");if(!e)return;const o=Math.ceil(100/C),d=f(i);if(!d)return;e.innerHTML="";const n=a("button",["catalog-list__btn","catalog-list__btn_prew"]);n.innerHTML='<svg><use href="#back-arrow"></use></svg>',n.onclick=()=>y(t-1,d),e.appendChild(n);for(let r=1;r<=o;r++){const l=a("button",["catalog-list__btn","catalog-list__btn_page"]);t===r&&s(l,"add","catalog-list__btn_active"),l.innerText=`${r}`,l.onclick=()=>y(r,d),e.appendChild(l)}const _=a("button",["catalog-list__btn","catalog-list__btn_next"]);_.innerHTML='<svg><use href="#back-arrow"></use></svg>',_.onclick=()=>y(t+1,d),e.appendChild(_)}function y(t,i){t<1||t>Math.ceil(100/C)||(p=t,window.history.pushState({},"",`?page=${t}`),i.innerHTML="",M(`.${i.className}`,p))}function m(){const t=f(".catalog-list__view-more");if(!t)return;const i=Math.ceil(20/L);p<i?t.style.display="flex":t.style.display="none",t.onclick=()=>{p<i&&(p+=1,M(".catalog-list__content",p))}}export{M as a,B as r};
