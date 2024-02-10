"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[12029],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>y});var a=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=n,y=u["".concat(l,".").concat(g)]||u[g]||m[g]||i;return t?a.createElement(y,o(o({ref:r},p),{},{components:t})):a.createElement(y,o({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},13252:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(45072),n=(t(11504),t(95788)),i=t(70964);const o={id:"CartesianAxes",title:"Cartesian axes",hide_title:!0,sidebar_label:"Introduction"},s=void 0,l={unversionedId:"axes/CartesianAxes",id:"version-5.8/axes/CartesianAxes",title:"Cartesian axes",description:"Introduction",source:"@site/versioned_docs/version-5.8/axes/Cartesians.md",sourceDirName:"axes",slug:"/axes/CartesianAxes",permalink:"/Charba-Wiki/docs/5.8/axes/CartesianAxes",draft:!1,tags:[],version:"5.8",frontMatter:{id:"CartesianAxes",title:"Cartesian axes",hide_title:!0,sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Introduction",permalink:"/Charba-Wiki/docs/5.8/axes/"},next:{title:"Category",permalink:"/Charba-Wiki/docs/5.8/axes/CartesianCategoryAxes"}},c={},p=[{value:"Introduction",id:"introduction",level:2}],u={toc:p},m="wrapper";function g(e){let{components:r,...t}=e;return(0,n.yg)(m,(0,a.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart.\nIn a cartesian chart, there is 1 or more X axes and 1 or more Y axes to map points onto the 2 dimensional canvas. These axes are know as 'cartesian axes'."),(0,n.yg)("img",{src:(0,i.c)("/img/timeSeriesLineChart.png")}),(0,n.yg)("p",null,"Axes that follow a cartesian grid are known as 'Cartesian Axes'. Cartesian axes are used for line, bar, scatter and bubble charts. "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"CartesianCategoryAxes"},"category"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"CartesianLinearAxes"},"linear"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"CartesianLogarithmicAxes"},"logarithmic"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"CartesianTimeAxes"},"time"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"CartesianTimeSeriesAxes"},"time series")))))}g.isMDXComponent=!0}}]);