"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[41808],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,d=u["".concat(l,".").concat(y)]||u[y]||h[y]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},31572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(45072),a=(n(11504),n(95788));const i={id:"Extensions",title:"Extensions",hide_title:!0,sidebar_label:"Introduction"},o=void 0,s={unversionedId:"extensions/Extensions",id:"version-6.2/extensions/Extensions",title:"Extensions",description:"Extensions",source:"@site/versioned_docs/version-6.2/extensions/Extensions.md",sourceDirName:"extensions",slug:"/extensions/",permalink:"/Charba-Wiki/docs/6.2/extensions/",draft:!1,tags:[],version:"6.2",frontMatter:{id:"Extensions",title:"Extensions",hide_title:!0,sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Controllers",permalink:"/Charba-Wiki/docs/6.2/Controllers"},next:{title:"Annotation",permalink:"/Charba-Wiki/docs/6.2/extensions/Annotation"}},l={},p=[{value:"Extensions",id:"extensions",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"extensions"},"Extensions"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable some available plugins for ",(0,a.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", with all their capabilities."),(0,a.yg)("p",null,"The plugins are ",(0,a.yg)("em",{parentName:"p"},"native javascript")," implementation and ",(0,a.yg)("strong",{parentName:"p"},"Charba")," provides the wrapper in order to be able to use them."),(0,a.yg)("p",null,"Currently the extensions, ready to use inside ",(0,a.yg)("strong",{parentName:"p"},"Charba"),", are the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"Annotation"},"Annotation")," which can add annotations (like boxes, lines, points or ellipses) on a chart instance."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"DataLabels"},"DataLabels")," which is a highly customizable plugin that displays labels on data for any type of charts."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"Labels"},"Labels")," which is a light weight plugin to display labels on pie, doughnut and polar area chart. Original PieceLabel."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"Zoom"},"Zoom")," which is a light weight plugin to zoom and pan a chart."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"Gradient"},"Gradient")," which is a light weight plugin to apply gradients to the datasets by data values.")),(0,a.yg)("p",null,"In this way, the user doesn't have to take care about compatibility of different versions because they are provided as components of ",(0,a.yg)("strong",{parentName:"p"},"Charba")," and they can be activate on demand."))}h.isMDXComponent=!0}}]);