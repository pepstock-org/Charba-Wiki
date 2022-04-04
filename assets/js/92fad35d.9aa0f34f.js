"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[86370],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48937:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=r(44996),s=["components"],c={id:"CartesianAxes",title:"Cartesian axes",hide_title:!0,sidebar_label:"Introduction"},l=void 0,u={unversionedId:"axes/CartesianAxes",id:"version-4.0/axes/CartesianAxes",title:"Cartesian axes",description:"",source:"@site/versioned_docs/version-4.0/axes/Cartesians.md",sourceDirName:"axes",slug:"/axes/CartesianAxes",permalink:"/Charba-Wiki/docs/4.0/axes/CartesianAxes",tags:[],version:"4.0",frontMatter:{id:"CartesianAxes",title:"Cartesian axes",hide_title:!0,sidebar_label:"Introduction"},sidebar:"version-4.0/docs",previous:{title:"Introduction",permalink:"/Charba-Wiki/docs/4.0/axes/"},next:{title:"Category",permalink:"/Charba-Wiki/docs/4.0/axes/CartesianCategoryAxes"}},p={},m=[{value:"Introduction",id:"introduction",level:2}],f={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart.\nIn a cartesian chart, there is 1 or more X axes and 1 or more Y axes to map points onto the 2 dimensional canvas. These axes are know as 'cartesian axes'."),(0,i.kt)("img",{src:(0,o.Z)("/img/timeSeriesLineChart.png")}),(0,i.kt)("p",null,"Axes that follow a cartesian grid are known as 'Cartesian Axes'. Cartesian axes are used for line, bar, scatter and bubble charts. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"CartesianCategoryAxes"},"category"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"CartesianLinearAxes"},"linear"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"CartesianLogarithmicAxes"},"logarithmic"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"CartesianTimeAxes"},"time"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"CartesianTimeSeriesAxes"},"time series")))))}d.isMDXComponent=!0}}]);