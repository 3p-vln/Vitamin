import{g as e,a as x,c as _,r as C}from"./use-call-dom-CaqOo_cc.js";import{l as k,t as w}from"./render-cart-D4kgbyJx.js";const p=e(".header__bag"),s=e(".cart"),h=e(".cart__close"),y=e(".cart__bg"),g=e(".cart__items"),o=e(".header"),L=e("html");let E=x(".prod"),l=0,f=!1;const a=e(".info__backbtn");function R(){!p||!h||!y||!g||(p.addEventListener("click",t=>I(t)),h.addEventListener("click",()=>m()),y.addEventListener("click",()=>m()),S())}function I(t){t.stopPropagation(),s&&(_(s,"add","cart_active"),f||(f=!0,k(),w(),E.forEach(i=>{const c=e(".prod__autoship-text",i);c&&B(c)})),a&&(a.style.zIndex="1"),b())}function m(){s&&(_(s,"remove","cart_active"),a&&(a.style.zIndex="25"),b())}function b(){if(!(!o||!L||!s||!g)){if(s.classList.contains("cart_active")){l=window.scrollY,document.body.style.position="fixed",document.body.style.top=`-${l}px`,document.body.style.left="0",document.body.style.width="100%",o.style.position="fixed",o.style.top="0",o.style.left="0",o.style.backgroundColor="white";const t=P();document.body.style.paddingRight=`${t}px`,o.style.paddingRight=`${t}px`;return}document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.width="",document.body.style.paddingRight="",document.documentElement.style.scrollBehavior="auto",window.scrollTo({top:l,behavior:"instant"}),document.documentElement.style.scrollBehavior="",o.style.top="",o.style.left="",o.style.position="",o.style.backgroundColor="",o.style.paddingRight="0"}}function P(){const t=C("div","");t.style.width="100px",t.style.height="100px",t.style.overflow="scroll",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const i=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),i}function B(t){window.innerWidth<768&&(t.innerText="Deliver every")}function S(){const i=new URLSearchParams(window.location.search).get("id"),c=e(".autoship__on-off"),d=e(".autoship__circle"),u=e(`.prod_${i} .prod__checkbox`);let n=JSON.parse(localStorage.getItem("cartItems")||"[]");if(!i)return;const r=n.findIndex(v=>v.id===Number(i));console.log(u),n[r].autoshipChecked&&(console.log(n[r].autoshipChecked),c?.classList.add("autoship__on-off_active"),d?.classList.add("autoship__circle_active")),u?.addEventListener("click",()=>{console.log("autoshipCheck clicked!"),n[r].autoshipChecked&&(c?.classList.toggle("autoship__on-off_active"),d?.classList.toggle("autoship__circle_active"))})}export{I as c,R as i};
