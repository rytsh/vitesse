import{S as f,i as d,s as m,e as c,a as p,b as g,c as L,d as k,n as u,f as _,g as q,t as l,o as x,h as O,m as A,j as H,k as N}from"./vendor.0ebf2c9c.js";const S=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};S();function y(s){let n,o;return{c(){n=c("span"),p(n,"class","typewriter text-gray-800  svelte-gdo6qm")},m(e,t){g(e,n,t)},i(e){o||L(()=>{o=k(n,s[1],{}),o.start()})},o:u,d(e){e&&_(n)}}}function j(s){let n,o,e=s[0]&&y(s);return{c(){n=c("div"),o=c("div"),e&&e.c(),p(n,"class","middle svelte-gdo6qm")},m(t,r){g(t,n,r),q(n,o),e&&e.m(o,null)},p(t,[r]){t[0]?e?r&1&&l(e,1):(e=y(t),e.c(),l(e,1),e.m(o,null)):e&&(e.d(1),e=null)},i(t){l(e)},o:u,d(t){t&&_(n),e&&e.d()}}}function C(s,n,o){const e=navigator.languages,t={en:"Hello, World!",tr:"Ah yalan d\xFCnya.."};let r=t.en;e.includes("tr")&&(r=t.tr);let i=!1;const h=(v,{speed:$=200})=>{const a=r;return{duration:a.length*$,tick:b=>{const w=~~(a.length*b);v.textContent=a.slice(0,w)}}};return x(()=>{o(0,i=!0)}),[i,h]}class E extends f{constructor(n){super();d(this,n,C,j,m,{})}}function I(s){let n,o;return n=new E({}),{c(){O(n.$$.fragment)},m(e,t){A(n,e,t),o=!0},p:u,i(e){o||(l(n.$$.fragment,e),o=!0)},o(e){H(n.$$.fragment,e),o=!1},d(e){N(n,e)}}}class M extends f{constructor(n){super();d(this,n,null,I,m,{})}}new M({target:document.getElementById("app")});
