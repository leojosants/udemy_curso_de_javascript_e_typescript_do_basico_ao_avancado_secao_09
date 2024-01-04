(()=>{"use strict";var n,r,o,e,t,a,i,c,A,s,l,p,u,d,f={122:(n,r,o)=>{o.d(r,{Z:()=>c});var e=o(537),t=o.n(e),a=o(645),i=o.n(a)()(t());i.push([n.id,"* {\n    box-sizing: border-box;\n    outline: 0\n}\n\n:root {\n    --color_0: #8cd8f1;\n    --color_1: #fdfdfd;\n    --color_2: #b8b0b0;\n    --color_3: #ffffff;\n    --color_4: #696767;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--color_0);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background-color: var(--color_1);\n    padding: 20px;\n    border-radius: 5px;\n}\n\nform input,\nform label,\nform button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    border-radius: 5px;\n    padding: 0 20px;\n    border: 1px solid var(--color_2);\n}\n\nform input:focus {\n    outline: 1px solid var(--color_2);\n}\n\nform label {\n     font-weight: bold;\n}\n\nform button {\n    border: none;\n    background-color: var(--color_0);\n    color: var(--color_3);\n    border-radius: 5px;\n    font-size: 18px;\n    height: 30px;\n    cursor: pointer;\n    padding: 5px;\n    margin-top: 30px;\n}\n\nform button:hover {\n    background-color: var(--color_4);\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB;AACJ;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,yCAAyC;IACzC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gCAAgC;IAChC,aAAa;IACb,kBAAkB;AACtB;;AAEA;;;IAGI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;KACK,iBAAiB;AACtB;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,qBAAqB;IACrB,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;AACpC",sourcesContent:["* {\r\n    box-sizing: border-box;\r\n    outline: 0\r\n}\r\n\r\n:root {\r\n    --color_0: #8cd8f1;\r\n    --color_1: #fdfdfd;\r\n    --color_2: #b8b0b0;\r\n    --color_3: #ffffff;\r\n    --color_4: #696767;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--color_0);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background-color: var(--color_1);\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n}\r\n\r\nform input,\r\nform label,\r\nform button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    padding: 0 20px;\r\n    border: 1px solid var(--color_2);\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--color_2);\r\n}\r\n\r\nform label {\r\n     font-weight: bold;\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background-color: var(--color_0);\r\n    color: var(--color_3);\r\n    border-radius: 5px;\r\n    font-size: 18px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background-color: var(--color_4);\r\n}"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var o="",e=void 0!==r[5];return r[4]&&(o+="@supports (".concat(r[4],") {")),r[2]&&(o+="@media ".concat(r[2]," {")),e&&(o+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),o+=n(r),e&&(o+="}"),r[2]&&(o+="}"),r[4]&&(o+="}"),o})).join("")},r.i=function(n,o,e,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(i[A]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);e&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),t&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=t):l[4]="".concat(t)),r.push(l))}},r}},537:n=>{n.exports=function(n){var r=n[1],o=n[3];if(!o)return r;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),a="/*# ".concat(t," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function o(n){for(var o=-1,e=0;e<r.length;e++)if(r[e].identifier===n){o=e;break}return o}function e(n,e){for(var a={},i=[],c=0;c<n.length;c++){var A=n[c],s=e.base?A[0]+e.base:A[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=o(p),d={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)r[u].references++,r[u].updater(d);else{var f=t(d,e);e.byIndex=c,r.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function t(n,r){var o=r.domAPI(r);return o.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;o.update(n=r)}else o.remove()}}n.exports=function(n,t){var a=e(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=o(a[i]);r[c].references--}for(var A=e(n,t),s=0;s<a.length;s++){var l=o(a[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=A}}},569:n=>{var r={};n.exports=function(n,o){var e=function(n){if(void 0===r[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}r[n]=o}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,o)=>{n.exports=function(n){var r=o.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(o){!function(n,r,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var t=void 0!==o.layer;t&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,t&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},C={};function m(n){var r=C[n];if(void 0!==r)return r.exports;var o=C[n]={id:n,exports:{}};return f[n](o,o.exports,m),o.exports}m.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return m.d(r,{a:r}),r},m.d=(n,r)=>{for(var o in r)m.o(r,o)&&!m.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},m.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),m.nc=void 0,n=m(379),r=m.n(n),o=m(795),e=m.n(o),t=m(569),a=m.n(t),i=m(565),c=m.n(i),A=m(216),s=m.n(A),l=m(589),p=m.n(l),u=m(122),(d={}).styleTagTransform=p(),d.setAttributes=c(),d.insert=a().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=s(),r()(u.Z,d),u.Z&&u.Z.locals&&u.Z.locals})();
//# sourceMappingURL=bundle.js.map