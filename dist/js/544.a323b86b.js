"use strict";(globalThis["webpackChunkelize_demo"]=globalThis["webpackChunkelize_demo"]||[]).push([[544],{544:(e,t,o)=>{o.r(t),o.d(t,{startFocusVisible:()=>i});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s="ion-focused",n="ion-focusable",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=e=>{let t=[],o=!0;const i=e?e.shadowRoot:document,c=e||document.body,d=e=>{t.forEach((e=>e.classList.remove(s))),e.forEach((e=>e.classList.add(s))),t=e},a=()=>{o=!1,d([])},u=e=>{o=r.includes(e.key),o||d([])},v=e=>{if(o&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains(n)));d(t)}},l=()=>{i.activeElement===c&&d([])};i.addEventListener("keydown",u),i.addEventListener("focusin",v),i.addEventListener("focusout",l),i.addEventListener("touchstart",a),i.addEventListener("mousedown",a);const m=()=>{i.removeEventListener("keydown",u),i.removeEventListener("focusin",v),i.removeEventListener("focusout",l),i.removeEventListener("touchstart",a),i.removeEventListener("mousedown",a)};return{destroy:m,setFocus:d}}}}]);
//# sourceMappingURL=544.a323b86b.js.map