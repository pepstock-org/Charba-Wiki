(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[8708],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,b=p["".concat(u,".").concat(d)]||p[d]||f[d]||i;return t?n.createElement(b,a(a({ref:r},l),{},{components:t})):n.createElement(b,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3919:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,{b:function(){return n},Z:function(){return o}})},4996:function(e,r,t){"use strict";t.d(r,{C:function(){return i},Z:function(){return a}});var n=t(2263),o=t(3919);function i(){var e=(0,n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,i=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(c)return r+t;var l=t.startsWith(r)?t:r+t.replace(/^\//,"");return s?e+l:l}(i,t,e,r)}}}function a(e,r){return void 0===r&&(r={}),(0,i().withBaseUrl)(e,r)}},4204:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),a=t(4996),c={id:"Home",title:"Charba - J2CL and GWT Charts library based on CHART.JS",hide_title:!0,sidebar_label:"Home",slug:"/"},u={unversionedId:"Home",id:"version-3.3/Home",isDocsHomePage:!1,title:"Charba - J2CL and GWT Charts library based on CHART.JS",description:"",source:"@site/versioned_docs/version-3.3/Home.md",sourceDirName:".",slug:"/",permalink:"/Charba-Wiki/docs/3.3/",version:"3.3",sidebar_label:"Home",frontMatter:{id:"Home",title:"Charba - J2CL and GWT Charts library based on CHART.JS",hide_title:!0,sidebar_label:"Home",slug:"/"},sidebar:"version-3.3/docs",next:{title:"Overview",permalink:"/Charba-Wiki/docs/3.3/Overview"}},s=[],l={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("table",{style:{border:"0px solid transparent",width:"100%"}},(0,i.kt)("thead",null),(0,i.kt)("tbody",null,(0,i.kt)("tr",{style:{border:"0px solid transparent",width:"100%"}},(0,i.kt)("td",{scope:"row",style:{border:"0px solid transparent",width:"100%"}},(0,i.kt)("img",{src:(0,a.Z)("/img/home.png")}))))))}f.isMDXComponent=!0}}]);