<<<<<<< HEAD
!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function i(t,e){const n=document.createElement(t);return void 0===e?n:(e.id&&(n.id=e.id),function(t,e){e&&("string"==typeof e&&""!==e&&t.classList.add(e),e instanceof Array&&t.classList.add(...e.filter(Boolean)))}(n,e.classList),function(t,e){e&&("string"==typeof e?t.textContent=e:e.html&&(t.innerHTML=e.html))}(n,e.textContent),function(t,e){if(e)for(const[n,i]of Object.entries(e))t.setAttribute(n,i)}(n,e.attributes),function(t,e){if(e&&e.length>0)for(const n of e)n instanceof HTMLElement?t.append(n):t.append(i(n[0],n[1]))}(n,e.children),function(t,e){if(e)for(const[n,i]of Object.entries(e))i&&t.addEventListener(n,i.callback,i.options)}(n,e.listeners),n)}function r(t,e){const n=t+"-accordion";return i("div",{classList:"accordion",children:[i("input",{id:n,attributes:{name:n+"-checkbox",checked:"",hidden:"",type:"checkbox"}}),i("label",{textContent:t,classList:["accordion-header","c-hand"],attributes:{for:n}}),i("div",{classList:"accordion-body",children:[i("ul",{classList:["menu","menu-nav"],children:e.map(t=>i("li",{classList:"menu-item",children:[i("a",{textContent:t.text,attributes:{href:t.url}})]}))})]})]})}function c(t=!0){const e=document.querySelector("link#color-mode"),n=t=>`./assets/css/${t}.css`,i=e=>t?"dark"===e?"light":"dark":(t=>"dark"===t?"dark":"light")(e);return()=>{const t=localStorage.getItem("theme");t?e.setAttribute("href",n(i(t))):e.setAttribute("href",n("light")),localStorage.setItem("theme",i(t))}}function s(){const t=i("label",{textContent:"Theme",classList:["accordion-header","c-hand"]});return t.addEventListener("click",c()),i("div",{classList:"accordion",children:[i("input",{id:"theme-switcher-input",attributes:{name:"theme-checkbox",checked:"",hidden:"",type:"checkbox"}}),t]})}function o(t){const e=document.querySelector("#sidebar");if(e){const o=i("div",{classList:"cv-nav",children:[r("À propos",t.paragraphs?t.paragraphs.map(t=>({text:t.name,url:"#"+t.id})):[]),(c=t.sidebar,i("div",{classList:"accordion-container",children:[r("contact",c)]})),s()]});e.appendChild(i("div",{classList:"cv-brand",children:[i("a",{classList:"cv-logo",attributes:{href:"."},children:[i("h2",{textContent:(n=t.identity).shortName||n.name})]})]})),e.appendChild(o)}var n,c;return t}function a(t){return!!t}function d(t){if(void 0!==t)return i("div",{classList:["col-3","col-md-12","column","hide-md"],children:[i("div",{classList:["date"===t.kind?"cv-note":"","text-right"],children:["date"===t.kind?i("span",{classList:["chip","p-2"],textContent:t.date}):i(t.size,{textContent:t.text})]})]})}function l(t){if(void 0!==t)return i("div",{classList:["show-md","mb-2"],children:["date"===t.kind?i("span",{classList:["chip","p-2"],textContent:t.date}):i(t.size,{textContent:t.text})]})}function u(t){return i("li",{textContent:t.description,children:t.subPoints?[i("ul",{children:t.subPoints.map(u)})]:[]})}function h(t){return i("span",{classList:"chip",textContent:t})}function f(t){const e=t.resume?t.resume.map(t=>i("p",{textContent:t})):[];return i("div",{classList:t.aside&&"date"===t.aside.kind?"cv-note":[],children:[l(t.aside),t.title?i("h4",{textContent:t.title}):void 0,t.subTitle?i("h5",{textContent:t.subTitle}):void 0,...e,t.points?(c=t.points,i("ul",{children:c.map(u)})):void 0,t.links?(r=t.links,i("p",{children:r.map(t=>i("a",{textContent:t.text,attributes:{href:t.url}}))})):void 0,t.tags?(n=t.tags,i("div",{classList:"cv-taglist",children:n.map(t=>i("p",{children:t.map(h)}))})):void 0].filter(a)});var n,r,c}function p(t){return i("div",{classList:"columns",children:[d(t.aside),i("div",{classList:["col-9","col-md-12","column"],children:[i("div",{classList:["cv-note"],children:[f(t)]})]})].filter(a)})}function m(t){return i("h3",{classList:"s-title",children:[i("a",{classList:"anchor",attributes:{href:"#"+t.id,"aria-hidden":"true"},textContent:"#"}),i("span",{textContent:t.name})]})}function b(t){return i("div",{id:t.id,classList:"container",children:[m(t),...t.elements?t.elements.map(p):[]]})}function v(t){const e=document.querySelector("#content");if(e){e.appendChild((n=t.identity,i("div",{id:"introduction",classList:"container",children:[i("h3",{classList:"s-title",children:[i("a",{classList:"anchor",textContent:"#",attributes:{href:"#introduction","aria-hidden":"true"}}),i("span",{textContent:n.name})]}),i("h5",{textContent:n.description}),i("h5",{textContent:n.location})]})));for(const n of t.paragraphs)e.appendChild(b(n))}var n;return t}async function x(t){const e=await(await fetch(t)).json();return o(e),v(e),e}n.r(e);window.onload=async()=>{c(!1)();try{x("https://gist.githubusercontent.com/jRimbault/ddbe04c43dba075e0da9ddb9ebda6926/raw/resume.json")}catch(t){console.error(t),x("assets/data/resume.json").catch(console.log)}}}]);
=======
!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function i(t){return null!=t}function r(t,e){const n=document.createElement(t);return void 0===e?n:(e.id&&(n.id=e.id),function(t,e){e&&("string"==typeof e&&""!==e&&t.classList.add(e),e instanceof Array&&t.classList.add(...e.filter(Boolean)))}(n,e.classList),function(t,e){e&&("string"==typeof e?t.textContent=e:e.html&&(t.innerHTML=e.html))}(n,e.textContent),function(t,e){if(e)for(const[n,i]of Object.entries(e))t.setAttribute(n,i)}(n,e.attributes),function(t,e){e&&e.length>0&&t.append(...e)}(n,e.children),function(t,e){if(e)for(const[n,i]of Object.entries(e))i&&t.addEventListener(n,i.callback,i.options)}(n,e.listeners),n)}function c(t,e){const n=t+"-accordion";return r("div",{classList:"accordion",children:[r("input",{id:n,attributes:{name:n+"-checkbox",checked:"",hidden:"",type:"checkbox"}}),r("label",{textContent:t,classList:["accordion-header","c-hand"],attributes:{for:n}}),r("div",{classList:"accordion-body",children:[r("ul",{classList:["menu","menu-nav"],children:e.map(t=>r("li",{classList:"menu-item",children:[r("a",{textContent:t.text,attributes:{href:t.url}})]}))})]})]})}function o(t=!0){const e=document.querySelector("link#color-mode"),n=t=>`./assets/css/${t}.css`,i=e=>t?"dark"===e?"light":"dark":(t=>"dark"===t?"dark":"light")(e);return()=>{const t=localStorage.getItem("theme");t?e.setAttribute("href",n(i(t))):e.setAttribute("href",n("light")),localStorage.setItem("theme",i(t))}}function s(){const t=r("label",{textContent:"Theme",classList:["accordion-header","c-hand"]});return t.addEventListener("click",o()),r("div",{classList:"accordion",children:[r("input",{id:"theme-switcher-input",attributes:{name:"theme-checkbox",checked:"",hidden:"",type:"checkbox"}}),t]})}function a(t){const e=document.querySelector("#sidebar");if(e){const o=r("div",{classList:"cv-nav",children:[c("À propos",t.paragraphs?t.paragraphs.map(t=>({text:t.name,url:"#"+t.id})):[]),(i=t.sidebar,r("div",{classList:"accordion-container",children:[c("contact",i)]})),s()]});e.appendChild(r("div",{classList:"cv-brand",children:[r("a",{classList:"cv-logo",attributes:{href:"."},children:[r("h2",{textContent:(n=t.identity).shortName||n.name})]})]})),e.appendChild(o)}var n,i;return t}function l(t){return r("li",{textContent:t.description,children:t.subPoints?[r("ul",{children:t.subPoints.map(l)})]:[]})}function d(t){return r("span",{classList:"chip",textContent:t})}function u(t){const e=t.resume?t.resume.map(t=>r("p",{textContent:t})):[];return r("div",{classList:t.aside&&"date"===t.aside.kind?"cv-note":[],children:[(s=t.aside,void 0===s?null:r("div",{classList:["show-md","mb-2"],children:["date"===s.kind?r("span",{classList:["chip","p-2"],textContent:s.date}):r(s.size,{textContent:s.text})]})),t.title?r("h4",{textContent:t.title}):null,t.subTitle?r("h5",{textContent:t.subTitle}):null,...e,t.points?(o=t.points,r("ul",{children:o.map(l)})):null,t.links?(c=t.links,r("p",{children:c.map(t=>r("a",{textContent:t.text,attributes:{href:t.url}}))})):null,t.tags?(n=t.tags,r("div",{classList:"cv-taglist",children:n.map(t=>r("p",{children:t.map(d)}))})):null].filter(i)});var n,c,o,s}function h(t){return r("div",{classList:"columns",children:[(e=t.aside,void 0===e?null:r("div",{classList:["col-3","col-md-12","column","hide-md"],children:[r("div",{classList:["date"===e.kind?"cv-note":"","text-right"],children:["date"===e.kind?r("span",{classList:["chip","p-2"],textContent:e.date}):r(e.size,{textContent:e.text})]})]})),r("div",{classList:["col-9","col-md-12","column"],children:[r("div",{classList:["cv-note"],children:[u(t)]})]})].filter(i)});var e}function f(t){return r("h3",{classList:"s-title",children:[r("a",{classList:"anchor",attributes:{href:"#"+t.id,"aria-hidden":"true"},textContent:"#"}),r("span",{textContent:t.name})]})}function p(t){return r("div",{id:t.id,classList:"container",children:[f(t),...t.elements?t.elements.map(h):[]]})}function m(t){const e=document.querySelector("#content");if(e){e.appendChild((n=t.identity,r("div",{id:"introduction",classList:"container",children:[r("h3",{classList:"s-title",children:[r("a",{classList:"anchor",textContent:"#",attributes:{href:"#introduction","aria-hidden":"true"}}),r("span",{textContent:n.name})]}),r("h5",{textContent:n.description}),r("h5",{textContent:n.location})]})));for(const n of t.paragraphs)e.appendChild(p(n))}var n;return t}n.r(e);var v=function(t,e,n,i){return new(n||(n=Promise))((function(r,c){function o(t){try{a(i.next(t))}catch(t){c(t)}}function s(t){try{a(i.throw(t))}catch(t){c(t)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}a((i=i.apply(t,e||[])).next())}))};function b(t){return v(this,void 0,void 0,(function*(){const e=yield(yield fetch(t)).json();return a(e),m(e),e}))}window.onload=()=>v(void 0,void 0,void 0,(function*(){o(!1)();try{yield b("https://gist.githubusercontent.com/jRimbault/ddbe04c43dba075e0da9ddb9ebda6926/raw/resume.json")}catch(t){console.error(t),b("assets/data/resume.json").catch(console.log)}}))}]);
>>>>>>> master
//# sourceMappingURL=bundle.js.map