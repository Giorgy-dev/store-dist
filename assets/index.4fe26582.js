(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const c=new Map([[document.querySelectorAll("nav > .element > a")[1],"nav-el-txt-1"],[document.querySelectorAll("nav > .element > a")[2],"nav-el-txt-2"],[document.querySelectorAll("nav > .element > a")[3],"nav-el-txt-3"],[document.querySelectorAll("nav > .element > a")[4],"nav-el-txt-4"],[document.querySelector("#hero > .txt-biggest"),"hero-title"],[document.querySelector("#hero > .txt-bigger"),"hero-subtitle"],[document.querySelector("#hero > .btn > .txt-medium"),"hero-btn-txt"]]);let g=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${g}px`);function f(l){let t=new XMLHttpRequest;if(t.open("GET",l,!1),t.send(),t.status==200)return JSON.parse(t.responseText)}function y(){return localStorage.getItem("language")!=null?localStorage.getItem("language"):(i("en"),"en")}function i(l){localStorage.setItem("language",l)}i("en");u(c);function u(l){let t=f("./languages/"+y()+".json");l.forEach((r,o)=>{o!=null&&r!=null&&r.length>0?o.innerHTML=t[r]+"":t.en+""})}var d=!1;document.getElementById("lang").addEventListener("click",()=>d?a():m());document.getElementById("back_from_lang").addEventListener("click",()=>d?a():m());function m(){document.getElementById("langSide").style.marginLeft="0",document.getElementById("main").style.marginLeft="16rem",document.getElementById("main").style.filter="blur(4px)",d=!0}function a(){document.getElementById("langSide").style.marginLeft="-16rem",document.getElementById("main").style.marginLeft="0",document.getElementById("main").style.filter="blur(0px)",d=!1}document.getElementById("langSide__lang__en").addEventListener("click",()=>{i("en"),u(c),a()});document.getElementById("langSide__lang__it").addEventListener("click",()=>{i("it"),u(c),a()});document.getElementById("langSide__lang__es").addEventListener("click",()=>{i("es"),u(c),a()});
