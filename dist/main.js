!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=5)}([function(n,t,e){"use strict";var o=e(2),r=e.n(o),i=e(3),a=e.n(i),s=e(4),c=r()(!1),d=a()(s.a);c.push([n.i,"body {\n  background-color: #fff;\n}\n\n* li {\n  list-style: none;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nfooter {\n  text-align: center;\n}\n\n.tabs {\n  border: 1px solid #ccc;\n  display: flex;\n}\n\n.tabs__sidebar {\n  background: #ccc;\n  display: flex;\n}\n\n.tabs__btn {\n  display: block;\n  padding: 10px;\n  border: none;\n  width: 100%;\n  outline: none;\n  cursor: pointer;\n}\n\n.tabs__btn:active {\n  font-weight: bold;\n  background: #ddd;\n}\n\n.tabs__btn--active {\n  font-weight: bold;\n  border-bottom: 1px solid green;\n  background: #ddd;\n}\n\n.welcometext {\n  background: url("+d+") repeat-y left -167px;\n  background-color: #4a3a30;\n  background-size: cover;\n  padding: 50px 20px 20px 0;\n  height: auto;\n}\n\n.words {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  align-items: center;\n  padding: 7px 14px;\n}\n\n.words h1 {\n  font-size: 2.5rem;\n}\n\n.words p {\n  font-size: 24px;\n}\n\n.noods {\n  display: block;\n  text-align: center;\n  margin-bottom: 0;\n}\n\n.noods img {\n  max-width: 100%;\n  height: auto;\n  vertical-align: bottom;\n}\n\n/* contact */\n.contact {\n  padding: 50px 20px;\n}\n\n.contact h2 {\n  font-size: 3.875rem;\n}\n\n.contact p {\n  font-size: 1.0625rem;\n  line-height: 1.8;\n  color: gray;\n}\n\n/* about */\n.about .topping {\n  width: 100%;\n  height: auto;\n}\n\n.about .words {\n  display: block;\n  color: #333;\n  position: relative;\n  clear: both;\n  padding: 7px 14px;\n  max-width: 64rem;\n  margin: 0 auto;\n}\n\n.about .words h2 {\n  font-size: 3.875rem;\n}\n\n.about .words p {\n  font-size: 1.0625rem;\n  line-height: 1.8;\n  color: gray;\n}\n\n/* menu */\n.menu .sides {\n  position: relative;\n  clear: both;\n  padding: 7px 14px;\n  display: block;\n  max-width: 64rem;\n  margin: 0 auto;\n}\n\n.menu .sides h2 {\n  font-size: 3.875rem;\n  color: #e60033;\n  margin-bottom: 0;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\ndl {\n  line-height: 1.7;\n  margin-bottom: 28px;\n  margin-bottom: 1.75rem;\n  font-weight: 400;\n  color: gray;\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n\n.toppings-item-name {\n  font-size: 1.375rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  float: left;\n  font-weight: 700;\n  margin-right: 10px;\n}\n\n.toppings-item-price {\n  font-size: 1.375rem;\n  font-weight: 400;\n  text-align: right;\n  margin-right: 0;\n  margin-top: -2px;\n}\n\n.toppings-item-info {\n  margin-right: 50px;\n}\n",""]),t.a=c},function(n,t,e){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function s(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function c(n,t){for(var e={},o=[],r=0;r<n.length;r++){var i=n[r],c=t.base?i[0]+t.base:i[0],d=e[c]||0,l="".concat(c," ").concat(d);e[c]=d+1;var u=s(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:g(p,t),references:1}),o.push(l)}return o}function d(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=e.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function p(n,t,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function f(n,t,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,h=0;function g(n,t){var e,o,r;if(t.singleton){var i=h++;e=m||(m=d(t)),o=p.bind(null,e,i,!1),r=p.bind(null,e,i,!0)}else e=d(t),o=f.bind(null,e,t),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var e=c(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var r=s(e[o]);a[r].references--}for(var i=c(n,t),d=0;d<e.length;d++){var l=s(e[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=i}}}},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([r]).join("\n")}var a,s,c;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&r[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},function(n,t,e){"use strict";n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,t,e){"use strict";t.a=e.p+"c129fb1d6748e089b09cada047129ac9.jpg"},function(n,t,e){"use strict";e.r(t);var o=e(1),r=e.n(o),i=e(0),a={insert:"head",singleton:!1};r()(i.a,a),i.a.locals;var s=()=>{const n=document.createElement("header"),t=document.createElement("ul");return t.classList.add("tabs__sidebar"),t.innerHTML='\n  <li class="tabs__btn" data-for-tab="1">Home</li>\n  <li class="tabs__btn" data-for-tab="2">Menu</li>\n  <li class="tabs__btn" data-for-tab="3">About</li>\n  <li class="tabs__btn" data-for-tab="4"="contact">Contact</li>\n  ',n.appendChild(t),n};var c=()=>{const n=document.createElement("div");return n.innerHTML='\n        <div class="tabs_content" data-tab="1">\n            <div class="welcometext">\n              <div class=\'words\'>\n              <h1>ZAY\'S KITCHEN</h1>\n              <p>NEW NORTHWEST AUSTIN LOCATION AT 183 & ANDERSON MILL!</p>\n              </div>\n              <div class="noods">\n                <img src="http://michiramen.com/media/hero-image-2.png"/>\n              </div>\n            </div>\n        </div>\n  ',n};var d=()=>{const n=document.createElement("footer");return n.innerHTML="&copy; 2020 Zays Kitchen",n};var l=function(){const n=document.getElementById("content");n.appendChild(s());const t=document.createElement("main");return t.appendChild(c()),n.appendChild(t),n.appendChild(d()),n};var u=()=>{const n=document.createElement("footer");return n.innerHTML='\n        <div class="menu" data-tab="2">\n            <div class=\'sides\'>\n              <h2>Sides</h2>\n              <dl>\n                <dt class="toppings-item-name">Fish grits</dt>\n                <dt class="toppings-item-price">2.99</dt>\n              </dl>\n              <dl>\n                <dt class="toppings-item-name">Fish grits</dt>\n                <dt class="toppings-item-price">2.99</dt>\n              </dl>\n              <dl>\n                <dt class="toppings-item-name">Fish grits</dt>\n                <dt class="toppings-item-price">2.99</dt>\n\n              </dl>\n              <dl>\n                <dt class="toppings-item-name">Fish grits</dt>\n                <dt class="toppings-item-price">2.99</dt>\n\n              </dl>\n              <dl>\n                <dt class="toppings-item-name">Fish grits</dt>\n                <dt class="toppings-item-price">2.99</dt>\n               \n              </dl>\n              <dl>\n                <dt class="toppings-item-name">Fish grits</dt>\n                <dt class="toppings-item-price">2.99</dt>\n           \n              </dl>\n            </div>\n        </div>\n  ',n};var p=()=>{const n=document.createElement("footer");return n.innerHTML='\n        <div class="about" data-tab="3">\n          <img class="topping" src="http://michiramen.com/images/toppings-2.jpg"/>\n          <div class="words">\n              <h2>CERTIFIED TEXAS RAMEN</h2>\n              <p>If you’ve never had ramen before, we’re glad your taste buds \n              are here. We’re a traditional ramen house with a Texas flair. \n              Everything that goes in your mouth has been highly approved by \n              our talented team of ramen-lovers. Ramen is the comfort food for\n               every season and with a lifetime of combinations of toppings and \n               broth options to put into your bowl \n              of ramen, we’re happy to be there for every savory experience.</p>\n          </div>\n        </div>\n  ',n};var f=()=>{const n=document.createElement("footer");return n.innerHTML='\n        <div class="contact" data-tab="4">\n            <h2>Hello</h2>\n            <p>What can we help you with?</p>\n            <p>Call us on 555-000-333</p>\n        </div>\n  ',n};document.body.appendChild(l());const m=n=>{const t=document.querySelector("main");t.innerHTML="",t.appendChild(n())},h=document.querySelectorAll(".tabs__btn");for(let n=0;n<h.length;n++)h[n].addEventListener("click",n=>{switch(n.target.getAttribute("data-for-tab")){case"1":m(c);break;case"2":m(u);break;case"3":m(p);break;case"4":m(f);break;default:m(c)}})}]);