import{S as s,i as t,s as e,e as a,c as n,a as l,d as r,b as c,f as o,g as i,h as d,n as u,j as h,t as m,o as f,k as g,l as p,m as v,p as $,q as j}from"./vendor.4d8cd5b9.js";function y(s){let t,e;return{c(){t=a("span"),this.h()},l(s){t=n(s,"SPAN",{class:!0}),l(t).forEach(r),this.h()},h(){c(t,"class","typewriter svelte-jn4el3")},m(s,e){o(s,t,e)},i(a){e||i((()=>{e=d(t,s[1],{}),e.start()}))},o:u,d(s){s&&r(t)}}}function E(s){let t,e,i=s[0]&&y(s);return{c(){t=a("div"),e=a("div"),i&&i.c(),this.h()},l(s){t=n(s,"DIV",{class:!0});var a=l(t);e=n(a,"DIV",{});var c=l(e);i&&i.l(c),c.forEach(r),a.forEach(r),this.h()},h(){c(t,"class","middle svelte-jn4el3")},m(s,a){o(s,t,a),h(t,e),i&&i.m(e,null)},p(s,[t]){s[0]?i?1&t&&m(i,1):(i=y(s),i.c(),m(i,1),i.m(e,null)):i&&(i.d(1),i=null)},i(s){m(i)},o:u,d(s){s&&r(t),i&&i.d()}}}function w(s,t,e){const a=navigator.language;let n="Hello, World!";"tr"==a&&(n="Ah yalan dünya..");let l=!1;return f((()=>{e(0,l=!0)})),[l,(s,{speed:t=200})=>{const e=n;return{duration:e.length*t,tick:t=>{const a=~~(e.length*t);console.log(e.slice(0,a)),s.textContent=e.slice(0,a)}}}]}class x extends s{constructor(s){super(),t(this,s,w,E,e,{})}}function I(s){let t,e;return t=new x({}),{c(){g(t.$$.fragment)},l(s){p(t.$$.fragment,s)},m(s,a){v(t,s,a),e=!0},p:u,i(s){e||(m(t.$$.fragment,s),e=!0)},o(s){$(t.$$.fragment,s),e=!1},d(s){j(t,s)}}}new class extends s{constructor(s){super(),t(this,s,null,I,e,{})}}({target:document.getElementById("app")});