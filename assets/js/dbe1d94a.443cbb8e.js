"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[16392],{95788:(t,e,a)=>{a.d(e,{Iu:()=>c,yg:()=>y});var n=a(11504);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),g=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=g(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=g(a),s=r,y=d["".concat(p,".").concat(s)]||d[s]||u[s]||o;return a?n.createElement(y,i(i({ref:e},c),{},{components:a})):n.createElement(y,i({ref:e},c))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[d]="string"==typeof t?t:r,i[1]=l;for(var g=2;g<o;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},80380:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var n=a(45072),r=(a(11504),a(95788));const o={id:"Layout",title:"Layout",hide_title:!0,sidebar_label:"Layout"},i=void 0,l={unversionedId:"configuration/Layout",id:"configuration/Layout",title:"Layout",description:"Layout",source:"@site/docs/configuration/Layout.md",sourceDirName:"configuration",slug:"/configuration/Layout",permalink:"/Charba-Wiki/docs/configuration/Layout",draft:!1,tags:[],version:"current",frontMatter:{id:"Layout",title:"Layout",hide_title:!0,sidebar_label:"Layout"},sidebar:"docs",previous:{title:"Elements",permalink:"/Charba-Wiki/docs/configuration/Elements"},next:{title:"Decimation and filler",permalink:"/Charba-Wiki/docs/configuration/FillerAndDecimation"}},p={},g=[{value:"Layout",id:"layout",level:2},{value:"Scriptable",id:"scriptable",level:2}],c={toc:g},d="wrapper";function u(t){let{components:e,...a}=t;return(0,r.yg)(d,(0,n.c)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"layout"},"Layout"),(0,r.yg)("p",null,"The layout component enables the padding configuration to add to a chart."),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/configuration/Layout.html"},"layout")," configuration is nested in the configuration using "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// get layout\nLayout layout = chart.getOptions().getLayout();\n// get padding\nPadding padding = chart.getOptions().getLayout().getPadding();\n\n// sets top and bottom options to padding of chart\nchart.getOptions().getLayout().getPadding().setTop(10);\nchart.getOptions().getLayout().getPadding().setBottom(10);\n// to set same padding value to all sides of the chart\nchart.getOptions().getLayout().getPadding().set(10);\n\nint paddingTop = chart.getOptions().getLayout().getPadding().getTop();\n")),(0,r.yg)("p",null,"The default values are set in global defaults options, see ",(0,r.yg)("a",{parentName:"p",href:"../defaults/DefaultsCharts#layout"},"default global layout options"),"."),(0,r.yg)("p",null,"The following layout options are available. "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"autoPadding"),(0,r.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.yg)("td",{parentName:"tr",align:"left"},"If ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", apply automatic padding so visible elements are completely drawn.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,r.yg)("td",{parentName:"tr",align:"left"},"To set specific padding for specific sides.")))),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"Commons#padding"},"padding documentation")," for more details."),(0,r.yg)("h2",{id:"scriptable"},"Scriptable"),(0,r.yg)("p",null,"Padding also accepts a callback which is called at runtime and that takes the context as single argument, see ",(0,r.yg)("a",{parentName:"p",href:"ScriptableOptions#chart-context"},"here")," the details, which is representing contextual information and chart instance."),(0,r.yg)("p",null,"The padding element can be set as a ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/PaddingCallback.html"},"callback"),", providing a ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/items/PaddingItem.html"},"padding item")," instance, as following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// get layout\nLayout layout = chart.getOptions().getLayout();\n// sets callback\nlayout.setPadding(new PaddingCallback<ChartContext>(){\n\n   @Override\n   public PaddingItem invoke(ChartContext context){\n      PaddingItem padding = new PaddingItem(); \n      // your logic\n      return padding;\n   }\n});\n")),(0,r.yg)("p",null,"The following option can be set by a callback:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Callback"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/PaddingCallback.html"},"PaddingCallback"),"<","ChartContext",">"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/items/PaddingItem.html"},"PaddingItem"))))))}u.isMDXComponent=!0}}]);