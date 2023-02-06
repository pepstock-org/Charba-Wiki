"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[51300],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=c(a),g=r,m=s["".concat(p,".").concat(g)]||s[g]||u[g]||o;return a?n.createElement(m,i(i({ref:e},d),{},{components:a})):n.createElement(m,i({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},90683:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={id:"Layout",title:"Layout",hide_title:!0,sidebar_label:"Layout"},i=void 0,l={unversionedId:"configuration/Layout",id:"version-6.0/configuration/Layout",title:"Layout",description:"Layout",source:"@site/versioned_docs/version-6.0/configuration/Layout.md",sourceDirName:"configuration",slug:"/configuration/Layout",permalink:"/Charba-Wiki/docs/6.0/configuration/Layout",draft:!1,tags:[],version:"6.0",frontMatter:{id:"Layout",title:"Layout",hide_title:!0,sidebar_label:"Layout"},sidebar:"docs",previous:{title:"Elements",permalink:"/Charba-Wiki/docs/6.0/configuration/Elements"},next:{title:"Decimation and filler",permalink:"/Charba-Wiki/docs/6.0/configuration/FillerAndDecimation"}},p={},c=[{value:"Layout",id:"layout",level:2},{value:"Scriptable",id:"scriptable",level:2}],d={toc:c},s="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"layout"},"Layout"),(0,r.kt)("p",null,"The layout component enables the padding configuration to add to a chart."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/configuration/Layout.html"},"layout")," configuration is nested in the configuration using "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// get layout\nLayout layout = chart.getOptions().getLayout();\n// get padding\nPadding padding = chart.getOptions().getLayout().getPadding();\n\n// sets top and bottom options to padding of chart\nchart.getOptions().getLayout().getPadding().setTop(10);\nchart.getOptions().getLayout().getPadding().setBottom(10);\n// to set same padding value to all sides of the chart\nchart.getOptions().getLayout().getPadding().set(10);\n\nint paddingTop = chart.getOptions().getLayout().getPadding().getTop();\n")),(0,r.kt)("p",null,"The default values are set in global defaults options, see ",(0,r.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#layout"},"default global layout options"),"."),(0,r.kt)("p",null,"The following layout options are available. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"autoPadding"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", apply automatic padding so visible elements are completely drawn.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,r.kt)("td",{parentName:"tr",align:"left"},"To set specific padding for specific sides.")))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"Commons#padding"},"padding documentation")," for more details."),(0,r.kt)("h2",{id:"scriptable"},"Scriptable"),(0,r.kt)("p",null,"Padding also accepts a callback which is called at runtime and that takes the context as single argument, see ",(0,r.kt)("a",{parentName:"p",href:"ScriptableOptions#chart-context"},"here")," the details, which is representing contextual information and chart instance."),(0,r.kt)("p",null,"The padding element can be set as a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/callbacks/PaddingCallback.html"},"callback"),", providing a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/items/PaddingItem.html"},"padding item")," instance, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// get layout\nLayout layout = chart.getOptions().getLayout();\n// sets callback\nlayout.setPadding(new PaddingCallback<ChartContext>(){\n\n   @Override\n   public PaddingItem invoke(ChartContext context){\n      PaddingItem padding = new PaddingItem(); \n      // your logic\n      return padding;\n   }\n});\n")),(0,r.kt)("p",null,"The following option can be set by a callback:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/callbacks/PaddingCallback.html"},"PaddingCallback"),"<","ChartContext",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/items/PaddingItem.html"},"PaddingItem"))))))}u.isMDXComponent=!0}}]);