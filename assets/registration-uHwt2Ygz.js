import"./modulepreload-polyfill-B5Qt9EMX.js";import"./check-auth-kboHfPq3.js";import{J as c}from"./just-validate.es-C73wyOde.js";import{r as g,c as f}from"./use-api-DGP1fZH4.js";import{a as h}from"./api-client-DBWxe4rW.js";function v(){const t=document.getElementById("wholesale-registration-file"),e=document.getElementById("wholesale-registration-file-description-pc"),r=document.getElementById("wholesale-registration-file-name"),a=document.getElementById("registration-add-file-btn"),i=document.getElementById("wholesale-registration-submit-btn");t&&t.addEventListener("change",()=>{if(t.files&&t.files.length>0)if(window.innerWidth>=567&&e){const s=t.files[0].name,n=30,o=s.length>n?s.slice(0,n)+"...":s;e.textContent=o}else{const s=t.files[0].name,n=30,o=s.length>n?s.slice(0,n)+"...":s;r.textContent=o,r.style.opacity="1"}}),a&&t&&a.addEventListener("click",()=>{t.click()}),t&&i&&t.addEventListener("change",()=>{i.classList.remove("registration-form__submit_disabled"),i.disabled=!1})}function p(){const t=document.getElementById("auth-card"),e=document.getElementById("regular-reg"),r=document.getElementById("wholesale-reg"),a=document.querySelectorAll(".registration-form__error-message"),i=document.querySelector(".registration__container");if(t&&e&&r){e.addEventListener("click",()=>{r.classList.remove("registration__nav-btn_active"),e.classList.add("registration__nav-btn_active"),t.classList.add("flipped");const n=document.getElementById("regular-registration");n instanceof HTMLFormElement&&n.reset(),a&&a.forEach(l=>{l.innerText=""});const o=document.querySelectorAll(".just-validate-error-label");o&&o.forEach(l=>{l.remove()}),i instanceof HTMLDivElement&&(i.style.height="890px")}),r.addEventListener("click",()=>{r.classList.add("registration__nav-btn_active"),e.classList.remove("registration__nav-btn_active"),t.classList.remove("flipped");const n=document.getElementById("wholesale-registration");n instanceof HTMLFormElement&&n.reset();const o=document.getElementById("wholesale-registration-file-name");o&&(o.innerHTML="Permission",o.style.opacity="0.3");const l=document.getElementById("wholesale-registration-file-description-pc");l&&(l.innerHTML="Wholesale purchase permission",l.style.opacity="0.3");const m=document.getElementById("wholesale-registration-submit-btn");m instanceof HTMLButtonElement&&(m.disabled=!0,m.classList.add("registration-form__submit_disabled")),a&&a.forEach(d=>{d.innerText=""}),i instanceof HTMLDivElement&&(i.style.height="950px")});const s=document.querySelectorAll(".just-validate-error-label");s&&s.forEach(n=>{n.remove()})}}async function u(t){const e=await g(t);if(e.message==="Реєстрація успішна"){f.set("refreshToken",e.user.refreshToken,{path:"/"});const r=await h.get("/profile/info");"email"in r.data&&(localStorage.setItem("userInfo",JSON.stringify(r.data)),window.location.href="/Vitamin")}if("message"in e.errors[0]){console.log(e.errors[0].message);const r=document.querySelectorAll(".registration-form__error-message");if(r)switch(e.errors[0].message){case"Користувач вже зареєстрований":r.forEach(a=>{a.innerHTML="The user is already registered"});break;default:r.forEach(a=>{a.innerHTML="Error, try again later"})}}}function y(){new c("#regular-registration").addField("#regular-registration-email",[{rule:"required",errorMessage:"Email is required"},{rule:"customRegexp",value:/^[a-zA-Z0-9а-яА-Я."_%+-]+@[a-zA-Zа-яА-Я0-9-.]+\.[a-zA-Zа-яА-Я]{2,}$/u,errorMessage:"Enter a valid email address!"}]).addField("#regular-registration-first-name",[{rule:"required",errorMessage:"Name required"},{rule:"minLength",value:2,errorMessage:"The name must contain a minimum of 2 characters"},{rule:"maxLength",value:30,errorMessage:"The name must not exceed 30 characters"},{rule:"customRegexp",value:/^[A-Za-zА-Яа-яЁё]+$/,errorMessage:"The name must contain only letters"}]).addField("#regular-registration-last-name",[{rule:"required",errorMessage:"Last name required"},{rule:"minLength",value:2,errorMessage:"Last name must contain a minimum of 2 characters"},{rule:"maxLength",value:30,errorMessage:"Last name must not exceed 30 characters"},{rule:"customRegexp",value:/^[A-Za-zА-Яа-яЁё]+$/,errorMessage:"The name must contain only letters"}]).addField("#regular-registration-password",[{rule:"required",errorMessage:"Password required"},{rule:"minLength",value:8,errorMessage:"Password must contain a minimum of 8 characters"},{rule:"maxLength",value:50,errorMessage:"Password must not exceed 50 characters"},{rule:"customRegexp",value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,errorMessage:"Must contain uppercase ,lowercase letter, and number"}]).onSuccess(async()=>{const e=document.getElementById("regular-registration"),r=new FormData(e),a={role_type:"regular"};for(let[i,s]of r.entries())a[i]=s;await u(a)})}function w(){new c("#wholesale-registration").addField("#wholesale-registration-email",[{rule:"required",errorMessage:"Email is required"},{rule:"customRegexp",value:/^[a-zA-Z0-9а-яА-Я."_%+-]+@[a-zA-Zа-яА-Я0-9-.]+\.[a-zA-Zа-яА-Я]{2,}$/u,errorMessage:"Enter a valid email address!"}]).addField("#wholesale-registration-first-name",[{rule:"required",errorMessage:"First name is required"},{rule:"minLength",value:2,errorMessage:"First name must be at least 2 characters"},{rule:"maxLength",value:30,errorMessage:"First name must be at most 30 characters"},{rule:"customRegexp",value:/^[A-Za-zА-Яа-яЁё]+$/,errorMessage:"First name must contain only letters"}]).addField("#wholesale-registration-last-name",[{rule:"required",errorMessage:"Last name is required"},{rule:"minLength",value:2,errorMessage:"Last name must be at least 2 characters"},{rule:"maxLength",value:30,errorMessage:"Last name must be at most 30 characters"},{rule:"customRegexp",value:/^[A-Za-zА-Яа-яЁё]+$/,errorMessage:"Last name must contain only letters"}]).addField("#wholesale-registration-password",[{rule:"required",errorMessage:"Password is required"},{rule:"minLength",value:8,errorMessage:"Password must be at least 8 characters"},{rule:"maxLength",value:50,errorMessage:"Password must be at most 50 characters"},{rule:"customRegexp",value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,errorMessage:"Must contain uppercase ,lowercase letter, and number"}]).addField("#wholesale-registration-file",[{rule:"required",errorMessage:"File is required"},{validator:()=>{const e=document.querySelector("#wholesale-registration-file");return!e.files||e.files.length===0?!1:["image/jpeg","image/png","image/webp"].includes(e.files[0].type)},errorMessage:"Only image(JPG, PNG, webp) are allowed"}]).onSuccess(async()=>{const e=document.getElementById("wholesale-registration"),r=new FormData(e),a={role_type:"whosale"};for(let[i,s]of r.entries())a[i]=s;await u(a)})}document.addEventListener("DOMContentLoaded",async()=>{v(),p(),y(),w()});
