"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[9358],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return d}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},m=Object.keys(t);for(r=0;r<m.length;r++)a=m[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(t);for(r=0;r<m.length;r++)a=m[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var g=r.createContext({}),p=function(t){var e=r.useContext(g),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},k=function(t){var e=p(t.components);return r.createElement(g.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,m=t.originalType,g=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),c=p(a),d=n,E=c["".concat(g,".").concat(d)]||c[d]||N[d]||m;return a?r.createElement(E,l(l({ref:e},k),{},{components:a})):r.createElement(E,l({ref:e},k))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var m=a.length,l=new Array(m);l[0]=c;var i={};for(var g in e)hasOwnProperty.call(e,g)&&(i[g]=e[g]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var p=2;p<m;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3919:function(t,e,a){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},4996:function(t,e,a){a.d(e,{C:function(){return m},Z:function(){return l}});var r=a(2263),n=a(3919);function m(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,m=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var m=void 0===r?{}:r,l=m.forcePrependBaseUrl,i=void 0!==l&&l,g=m.absolute,p=void 0!==g&&g;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(i)return e+a;var k=a.startsWith(e)?a:e+a.replace(/^\//,"");return p?t+k:k}(m,a,t,e)}}}function l(t,e){return void 0===e&&(e={}),(0,m().withBaseUrl)(t,e)}},6222:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return g},contentTitle:function(){return p},metadata:function(){return k},toc:function(){return N},default:function(){return d}});var r=a(7462),n=a(3366),m=(a(7294),a(3905)),l=a(4996),i=["components"],g={id:"ColorSchemeTableau",title:"Tableau color scheme",hide_title:!0,sidebar_label:"Tableau color scheme"},p=void 0,k={unversionedId:"plugins/tables/ColorSchemeTableau",id:"version-4.0/plugins/tables/ColorSchemeTableau",isDocsHomePage:!1,title:"Tableau color scheme",description:"Tableau color scheme",source:"@site/versioned_docs/version-4.0/plugins/tables/ColorSchemeTableau.md",sourceDirName:"plugins/tables",slug:"/plugins/tables/ColorSchemeTableau",permalink:"/Charba-Wiki/docs/4.0/plugins/tables/ColorSchemeTableau",tags:[],version:"4.0",frontMatter:{id:"ColorSchemeTableau",title:"Tableau color scheme",hide_title:!0,sidebar_label:"Tableau color scheme"}},N=[{value:"Tableau color scheme",id:"tableau-color-scheme",children:[]}],c={toc:N};function d(t){var e=t.components,a=(0,n.Z)(t,i);return(0,m.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"tableau-color-scheme"},"Tableau color scheme"),(0,m.kt)("p",null,"The TABLEAU color schemes are stored in ",(0,m.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/enums/TableauScheme.html"},"TableauScheme")," enumeration. "),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Scheme"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"TABLEAU10"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-TABLEAU10.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"TABLEAU20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-TABLEAU20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"COLOR_BLIND10"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-COLOR_BLIND10.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"SEATTLE_GRAYS5"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-SEATTLE_GRAYS5.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"TRAFFIC9"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-TRAFFIC9.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"MILLER_STONE11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-MILLER_STONE11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"SUPERFISHEL_STONE10"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-SUPERFISHEL_STONE10.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"NURIEL_STONE9"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-NURIEL_STONE9.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"JEWEL_BRIGHT9"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-JEWEL_BRIGHT9.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"SUMMER8"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-SUMMER8.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"WINTER10"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-WINTER10.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"GREEN_ORANGE_TEAL12"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-GREEN_ORANGE_TEAL12.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"RED_BLUE_BROWN12"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-RED_BLUE_BROWN12.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"PURPLE_PINK_GRAY12"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-PURPLE_PINK_GRAY12.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"HUE_CIRCLE19"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-HUE_CIRCLE19.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"ORANGE_BLUE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-ORANGE_BLUE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"RED_GREEN7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-RED_GREEN7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"GREEN_BLUE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-GREEN_BLUE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"RED_BLUE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-RED_BLUE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"RED_BLACK7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-RED_BLACK7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"GOLD_PURPLE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-GOLD_PURPLE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"RED_GREEN_GOLD7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-RED_GREEN_GOLD7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"SUNSET_SUNRISE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-SUNSET_SUNRISE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"ORANGE_BLUE_WHITE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-ORANGE_BLUE_WHITE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"RED_GREEN_WHITE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-RED_GREEN_WHITE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"GREEN_BLUE_WHITE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-GREEN_BLUE_WHITE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"RED_BLUE_WHITE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-RED_BLUE_WHITE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"RED_BLACK_WHITE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-RED_BLACK_WHITE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"ORANGE_BLUE_LIGHT7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-ORANGE_BLUE_LIGHT7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"TEMPERATURE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-TEMPERATURE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"BLUE_GREEN7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-BLUE_GREEN7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"BLUE_LIGHT7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-BLUE_LIGHT7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"ORANGE_LIGHT7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-ORANGE_LIGHT7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"BLUE20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-BLUE20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"ORANGE20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-ORANGE20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"GREEN20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-GREEN20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"RED20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-RED20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"PURPLE20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-PURPLE20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"BROWN20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-BROWN20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"GRAY20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-GRAY20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"GRAY_WARM20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-GRAY_WARM20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"BLUE_TEAL20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-BLUE_TEAL20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"ORANGE_GOLD20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-ORANGE_GOLD20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"GREEN_GOLD20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-GREEN_GOLD20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"RED_GOLD21"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-RED_GOLD21.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC10"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC10.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_MEDIUM10"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_MEDIUM10.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_LIGHT10"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_LIGHT10.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC20"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC20.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_GRAY5"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_GRAY5.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_COLOR_BLIND10"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_COLOR_BLIND10.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_TRAFFIC_LIGHT9"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_TRAFFIC_LIGHT9.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_PURPLE_GRAY6"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_PURPLE_GRAY6.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_PURPLE_GRAY12"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_PURPLE_GRAY12.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_GREEN_ORANGE6"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_GREEN_ORANGE6.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_GREEN_ORANGE12"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_GREEN_ORANGE12.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_BLUE_RED6"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_BLUE_RED6.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_BLUE_RED12"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_BLUE_RED12.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_CYCLIC13"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_CYCLIC13.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_GREEN7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_GREEN7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_GRAY13"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_GRAY13.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_BLUE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_BLUE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_RED9"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_RED9.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_ORANGE7"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_ORANGE7.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_AREA_RED11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_AREA_RED11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_AREA_GREEN11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_AREA_GREEN11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_AREA_BROWN11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_AREA_BROWN11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_RED_GREEN11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_RED_GREEN11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_RED_BLUE11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_RED_BLUE11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_RED_BLACK11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_RED_BLACK11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_AREA_RED_GREEN21"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_AREA_RED_GREEN21.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_ORANGE_BLUE13"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_ORANGE_BLUE13.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_GREEN_BLUE11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_GREEN_BLUE11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_RED_WHITE_GREEN11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_RED_WHITE_GREEN11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_RED_WHITE_BLACK11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_RED_WHITE_BLACK11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_ORANGE_WHITE_BLUE11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_ORANGE_WHITE_BLUE11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_RED_WHITE_BLACK_LIGHT10"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_RED_WHITE_BLACK_LIGHT10.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_ORANGE_WHITE_BLUE_LIGHT11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_ORANGE_WHITE_BLUE_LIGHT11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_RED_WHITE_GREEN_LIGHT11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_RED_WHITE_GREEN_LIGHT11.png")}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"CLASSIC_RED_GREEN_LIGHT11"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("img",{src:(0,l.Z)("/img/TableauScheme-CLASSIC_RED_GREEN_LIGHT11.png")}))))))}d.isMDXComponent=!0}}]);