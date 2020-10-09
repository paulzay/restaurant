!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e,t){"use strict";var o=t(2),r=t.n(o),a=t(3),i=t.n(a),c=t(4),s=r()(!1),d=i()(c.a);s.push([n.i,"body {\n  background-color: #fff;\n}\n\n* li {\n  list-style: none;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nfooter {\n  text-align: center;\n}\n\n.tabs {\n  border: 1px solid #ccc;\n  display: flex;\n}\n\n.tabs__sidebar {\n  background: #ccc;\n  display: flex;\n}\n\n.tabs__btn {\n  display: block;\n  padding: 10px;\n  border: none;\n  width: 100%;\n  outline: none;\n  cursor: pointer;\n}\n\n.tabs__btn:active {\n  font-weight: bold;\n  background: #ddd;\n}\n\n.tabs__btn--active {\n  font-weight: bold;\n  border-bottom: 1px solid green;\n  background: #ddd;\n}\n\n.welcometext {\n  background: url("+d+") repeat-y left -167px;\n  background-color: #4a3a30;\n  background-size: cover;\n  padding: 50px 20px 20px 0;\n  height: auto;\n}\n\n\n.words {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  align-items: center;\n  padding: 7px 14px;\n}\n\n.words h1 {\n  font-size: 2.5rem;\n}\n\n.words p {\n  font-size: 24px;\n}\n\n.noods {\n  display: block;\n  text-align: center;\n  margin-bottom: 0;\n}\n\n.noods img {\n  max-width: 100%;\n  height: auto;\n  vertical-align: bottom;\n}\n\n.about .topping{\n  width: 100%;\n  height: auto;\n}\n.about .words{\n  display: block;\n  color: #333;\n  position: relative;\n  clear: both;\n  padding: 7px 14px;\n  display: block;\n  max-width: 64rem;\n  margin: 0 auto;\n}\n\n.about .words h2{\n  font-size: 3.875rem;\n}\n\n.about .words p{\n    font-size: 1.0625rem;\n    line-height: 1.8;\n    color: gray;\n    \n}",""]),e.a=s},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function c(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},o=[],r=0;r<n.length;r++){var a=n[r],s=e.base?a[0]+e.base:a[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=c(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:h(f,e),references:1}),o.push(l)}return o}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function f(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,r);else{var a=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function p(n,e,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var b=null,m=0;function h(n,e){var t,o,r;if(e.singleton){var a=m++;t=b||(b=d(e)),o=f.bind(null,t,a,!1),r=f.bind(null,t,a,!0)}else t=d(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=c(t[o]);i[r].references--}for(var a=s(n,e),d=0;d<t.length;d++){var l=c(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=a}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([r]).join("\n")}var i,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";e.a=t.p+"c129fb1d6748e089b09cada047129ac9.jpg"},function(n,e,t){"use strict";t.r(e);var o=t(1),r=t.n(o),a=t(0),i={insert:"head",singleton:!1};r()(a.a,i),a.a.locals;var c=()=>{const n=document.createElement("header"),e=document.createElement("ul");return e.classList.add("tabs__sidebar"),e.innerHTML='\n  <li class="tabs__btn" data-for-tab="1">Home</li>\n  <li class="tabs__btn" data-for-tab="2">Menu</li>\n  <li class="tabs__btn" data-for-tab="3">About</li>\n  <li class="tabs__btn" data-for-tab="4"="contact">Contact</li>\n  ',n.appendChild(e),n};var s=()=>{const n=document.createElement("div");return n.innerHTML='\n        <div class="tabs_content" data-tab="1">\n            <div class="welcometext">\n              <div class=\'words\'>\n              <h1>ZAY\'S KITCHEN</h1>\n              <p>NEW NORTHWEST AUSTIN LOCATION AT 183 & ANDERSON MILL!</p>\n              </div>\n              <div class="noods">\n                <img src="http://michiramen.com/media/hero-image-2.png"/>\n              </div>\n            </div>\n        </div>\n  ',n};var d=()=>{const n=document.createElement("footer");return n.innerHTML="&copy; 2020 Zays Kitchen",n};var l=function(){const n=document.getElementById("content");n.appendChild(c());const e=document.createElement("main");return e.appendChild(s()),n.appendChild(e),n.appendChild(d()),n};var u=()=>{const n=document.createElement("footer");return n.innerHTML='\n        <div class="tabs_content" data-tab="2">\n            <h2>menu</h2>\n        </div>\n  ',n};var f=()=>{const n=document.createElement("footer");return n.innerHTML='\n        <div class="about" data-tab="3">\n          <img class="topping" src="http://michiramen.com/images/toppings-2.jpg"/>\n          <div class="words">\n              <h2>CERTIFIED TEXAS RAMEN</h2>\n              <p>If you’ve never had ramen before, we’re glad your taste buds \n              are here. We’re a traditional ramen house with a Texas flair. \n              Everything that goes in your mouth has been highly approved by \n              our talented team of ramen-lovers. Ramen is the comfort food for\n               every season and with a lifetime of combinations of toppings and \n               broth options to put into your bowl \n              of ramen, we’re happy to be there for every savory experience.</p>\n          </div>\n        </div>\n  ',n};var p=()=>{const n=document.createElement("footer");return n.innerHTML='\n        <div class="tabs_content" data-tab="4">\n            <h2>contact Us</h2>\n        </div>\n  ',n};document.body.appendChild(l());const b=n=>{const e=document.querySelector("main");e.innerHTML="",e.appendChild(n())},m=document.querySelectorAll(".tabs__btn");for(let n=0;n<m.length;n++)m[n].addEventListener("click",n=>{switch(n.target.getAttribute("data-for-tab")){case"1":b(s);break;case"2":b(u);break;case"3":b(f);break;case"4":b(p);break;default:b(s)}})}]);