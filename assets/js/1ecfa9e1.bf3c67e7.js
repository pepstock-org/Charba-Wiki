"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[15584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},39762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"Extensions",title:"Extensions",hide_title:!0,sidebar_label:"Introduction"},i=void 0,s={unversionedId:"extensions/Extensions",id:"version-4.0/extensions/Extensions",title:"Extensions",description:"Extensions",source:"@site/versioned_docs/version-4.0/extensions/Extensions.md",sourceDirName:"extensions",slug:"/extensions/",permalink:"/Charba-Wiki/docs/4.0/extensions/",draft:!1,tags:[],version:"4.0",frontMatter:{id:"Extensions",title:"Extensions",hide_title:!0,sidebar_label:"Introduction"},sidebar:"version-4.0/docs",previous:{title:"Controllers",permalink:"/Charba-Wiki/docs/4.0/Controllers"},next:{title:"Annotation",permalink:"/Charba-Wiki/docs/4.0/extensions/Annotation"}},l={},p=[{value:"Extensions",id:"extensions",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"extensions"},"Extensions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable some available plugins for ",(0,a.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", with all their capabilities."),(0,a.kt)("p",null,"The plugins are ",(0,a.kt)("em",{parentName:"p"},"native javascript")," implementation and ",(0,a.kt)("strong",{parentName:"p"},"Charba")," provides the wrapper in order to be able to use them."),(0,a.kt)("p",null,"Currently the extensions, ready to use inside ",(0,a.kt)("strong",{parentName:"p"},"Charba"),", are the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Annotation"},"Annotation")," which can add annotations (like boxes, lines, points or ellipses) on a chart instance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"DataLabels"},"DataLabels")," which is a highly customizable plugin that displays labels on data for any type of charts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Labels"},"Labels")," which is a light weight plugin to display labels on pie, doughnut and polar area chart. Original PieceLabel."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Zoom"},"Zoom")," which is a light weight plugin to zoom and pan a chart.")),(0,a.kt)("p",null,"In this way, the user doesn't have to take care about compatibility of different versions because they are provided as components of ",(0,a.kt)("strong",{parentName:"p"},"Charba")," and they can be activate on demand."))}u.isMDXComponent=!0}}]);