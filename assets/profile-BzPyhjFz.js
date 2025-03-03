import"./style-C406C8Tq.js";import"./check-auth-CvLvakMh.js";import{i as n}from"./header-ajvWsB60.js";import{J as d}from"./just-validate.es-C73wyOde.js";import{a as i}from"./api-client-DO6NzlH2.js";import"./axios-BrcDDtdF.js";import"./useCallDom-DDNnwvp7.js";function c(){const a=document.getElementById("change-password"),e=a.querySelector(".change-password__submit-btn"),s=a.querySelectorAll(".field__input");function r(){Array.from(s).every(o=>o.value.trim()!=="")?(e.disabled=!1,e.classList.remove("change-password__submit-btn_disabled")):(e.disabled=!0,e.classList.add("change-password__submit-btn_disabled"))}s.forEach(t=>{t.addEventListener("input",r)})}async function l(a){const e=document.querySelector(".change-password__message");try{(await i.put("/profile/change-password",a)).status===200&&e&&(e.innerHTML=`<svg>
  <use href="#check-white"></use>
</svg> Changes successfully saved`,e.style.background="green",e.classList.toggle("hidden"))}catch(s){const r=s;if(!e)return;switch(r.status){case 400:e.innerText="Old password is incorrect";break;case 404:e.innerHTML="User not found";break;default:e.innerHTML="Error... Try again later"}e.style.background="red",e.classList.toggle("hidden")}setTimeout(()=>{e&&(e.classList.add("hidden"),e.innerHTML="")},5e3)}function u(){const a=document.getElementById("change-password");new d("#change-password").addField("#current-password",[{rule:"required",errorMessage:"Current password is required"},{rule:"minLength",value:8,errorMessage:"Password must be at least 8 characters"}]).addField("#new-password",[{rule:"required",errorMessage:"New password is required"},{rule:"minLength",value:8,errorMessage:"Password must be at least 8 characters"}]).addField("#repeat-new-password",[{rule:"required",errorMessage:"Please confirm your new password"},{rule:"custom",validator:s=>{const r=a.querySelector("#new-password");return s===r.value},errorMessage:"Passwords do not match"}]).onSuccess(()=>{console.log("Successfully updated password");const s=a.querySelector("#new-password"),r=a.querySelector("#current-password");if(s&&r&&s.value&&r.value){const t={old_password:r.value,new_password:s.value};l(t)}})}document.addEventListener("DOMContentLoaded",async()=>{n(),c(),u()});
