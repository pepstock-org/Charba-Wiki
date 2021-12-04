"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[4114],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return f}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(a),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return a?n.createElement(m,o(o({ref:e},p),{},{components:a})):n.createElement(m,o({ref:e},p))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13919:function(t,e,a){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},44996:function(t,e,a){a.d(e,{C:function(){return i},Z:function(){return o}});var n=a(52263),r=a(13919);function i(){var t=(0,n.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(l)return e+a;var p=a.startsWith(e)?a:e+a.replace(/^\//,"");return s?t+p:p}(i,a,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},26631:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(44996),l=["components"],c={id:"ScaleTitle",title:"Scale title",hide_title:!0,sidebar_label:"Title"},s=void 0,p={unversionedId:"axes/ScaleTitle",id:"axes/ScaleTitle",isDocsHomePage:!1,title:"Scale title",description:"Axis Title",source:"@site/docs/axes/ScaleTitle.md",sourceDirName:"axes",slug:"/axes/ScaleTitle",permalink:"/Charba-Wiki/docs/axes/ScaleTitle",tags:[],version:"current",frontMatter:{id:"ScaleTitle",title:"Scale title",hide_title:!0,sidebar_label:"Title"},sidebar:"docs",previous:{title:"Grid",permalink:"/Charba-Wiki/docs/axes/Grid"},next:{title:"Angle lines",permalink:"/Charba-Wiki/docs/axes/AngleLines"}},u=[{value:"Axis Title",id:"axis-title",children:[],level:2}],d={toc:u};function f(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"axis-title"},"Axis Title"),(0,i.kt)("p",null,"When creating a chart, you want to tell the viewer what data they are viewing. To do this, you need to label the axis."),(0,i.kt)("img",{src:(0,o.Z)("/img/scaleTitle.png")}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The scale title can be ",(0,i.kt)("strong",{parentName:"p"},"ONLY")," applied to cartesian axes."))),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/configuration/CartesianScaleTitle.html"},"axis title")," provides all ",(0,i.kt)("strong",{parentName:"p"},"set")," and ",(0,i.kt)("strong",{parentName:"p"},"get")," methods to manage the configuration, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates an axis\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// enables the title\naxis.getTitle().setDisplay(true);\n// sets and gets color of title\naxis.getTitle().setColor(HtmlColor.RED);\n\nIsColor color = axis.getTitle().getColor();\n")),(0,i.kt)("p",null,"The following are the attributes that you can set:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"align"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/enums/ScaleTitleAlign.html"},"ScaleTitleAlign")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Alignment of the scale label.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"color"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Color of scale label.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"display"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"font"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Font of scale label.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The padding of title.",(0,i.kt)("br",null),"See ",(0,i.kt)("a",{parentName:"td",href:"../configuration/Commons#padding"},"padding documentation")," for more details.")))))}f.isMDXComponent=!0}}]);