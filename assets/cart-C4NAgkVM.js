import{g as e,a as x,c as m,r as C}from"./use-call-dom-CaqOo_cc.js";import{l as w,t as L}from"./render-cart-D4kgbyJx.js";const u=e(".header__bag"),n=e(".cart"),p=e(".cart__close"),h=e(".cart__bg"),_=e(".cart__items"),o=e(".header"),k=e("html");let E=x(".prod"),l=0,f=!1;const r=e(".info__backbtn");function R(){!u||!p||!h||!_||(u.addEventListener("click",t=>I(t)),p.addEventListener("click",()=>y()),h.addEventListener("click",()=>y()),S())}function I(t){t.stopPropagation(),n&&(m(n,"add","cart_active"),f||(f=!0,w(),L(),E.forEach(i=>{const s=e(".prod__autoship-text",i);s&&B(s)})),r&&(r.style.zIndex="1"),b())}function y(){n&&(m(n,"remove","cart_active"),r&&(r.style.zIndex="25"),b())}function b(){if(!(!o||!k||!n||!_)){if(n.classList.contains("cart_active")){l=window.scrollY,document.body.style.position="fixed",document.body.style.top=`-${l}px`,document.body.style.left="0",document.body.style.width="100%",o.style.position="fixed",o.style.top="0",o.style.left="0",o.style.backgroundColor="white";const t=P();document.body.style.paddingRight=`${t}px`,o.style.paddingRight=`${t}px`;return}document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.width="",document.body.style.paddingRight="",document.documentElement.style.scrollBehavior="auto",window.scrollTo({top:l,behavior:"instant"}),document.documentElement.style.scrollBehavior="",o.style.top="",o.style.left="",o.style.position="",o.style.backgroundColor="",o.style.paddingRight="0"}}function P(){const t=C("div","");t.style.width="100px",t.style.height="100px",t.style.overflow="scroll",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const i=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),i}function B(t){window.innerWidth<768&&(t.innerText="Deliver every")}function S(){const i=new URLSearchParams(window.location.search).get("id"),s=e(".autoship__on-off"),d=e(".autoship__circle"),g=e(`.prod_${i} .prod__checkbox input`);let c=JSON.parse(localStorage.getItem("cartItems")||"[]");if(!i)return;const a=c.findIndex(v=>v.id===Number(i));!d||!s||!a||!c[a]||(c[a].autoshipChecked&&(s.classList.add("autoship__on-off_active"),d.classList.add("autoship__circle_active")),g?.addEventListener("change",()=>{c[a].autoshipChecked&&(s.classList.add("autoship__on-off_active"),d.classList.add("autoship__circle_active"))}))}export{I as c,R as i};
