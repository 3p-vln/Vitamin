import{a as n}from"./js.cookie-Cz0CWeBA.js";const t=n.get("accessToken"),i=window.location.pathname;!t&&!i.includes("/login.html")&&!i.includes("/registration.html")&&(window.location.href="/login.html");t&&(i.includes("/login.html")||i.includes("/registration.html"))?window.location.href="/Vitamin":document.body.style.visibility="visible";
