"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[55902],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(n),g=r,h=s["".concat(c,".").concat(g)]||s[g]||d[g]||o;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14615:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"Layout",title:"Layout",hide_title:!0,sidebar_label:"Layout"},c=void 0,p={unversionedId:"configuration/Layout",id:"version-4.0/configuration/Layout",title:"Layout",description:"Layout",source:"@site/versioned_docs/version-4.0/configuration/Layout.md",sourceDirName:"configuration",slug:"/configuration/Layout",permalink:"/Charba-Wiki/docs/4.0/configuration/Layout",tags:[],version:"4.0",frontMatter:{id:"Layout",title:"Layout",hide_title:!0,sidebar_label:"Layout"},sidebar:"version-4.0/docs",previous:{title:"Elements",permalink:"/Charba-Wiki/docs/4.0/configuration/Elements"},next:{title:"Decimation and filler",permalink:"/Charba-Wiki/docs/4.0/configuration/FillerAndDecimation"}},u={},d=[{value:"Layout",id:"layout",level:2},{value:"Scriptable",id:"scriptable",level:2}],s={toc:d};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"layout"},"Layout"),(0,o.kt)("p",null,"The layout component enables the padding configuration to add to a chart."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/Layout.html"},"layout")," configuration is nested in the configuration using "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// get layout\nLayout layout = chart.getOptions().getLayout();\n// get padding\nPadding padding = chart.getOptions().getLayout().getPadding();\n\n// sets top and bottom options to padding of chart\nchart.getOptions().getLayout().getPadding().setTop(10);\nchart.getOptions().getLayout().getPadding().setBottom(10);\n// to set same padding value to all sides of the chart\nchart.getOptions().getLayout().getPadding().set(10);\n\nint paddingTop = chart.getOptions().getLayout().getPadding().getTop();\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"Commons#padding"},"padding documentation")," for more details."),(0,o.kt)("h2",{id:"scriptable"},"Scriptable"),(0,o.kt)("p",null,"Padding also accepts a callback which is called at runtime and that takes the context as single argument, see ",(0,o.kt)("a",{parentName:"p",href:"ScriptableOptions#chart-context"},"here")," the details, which is representing contextual information and chart instance."),(0,o.kt)("p",null,"The padding element can be set as a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/PaddingCallback.html"},"callback"),", providing a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/PaddingItem.html"},"padding item")," instance, as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// get layout\nLayout layout = chart.getOptions().getLayout();\n// sets callback\nlayout.setPadding(new PaddingCallback<ChartContext>(){\n\n   @Override\n   public PaddingItem invoke(ChartContext context){\n      PaddingItem padding = new PaddingItem(); \n      // your logic\n      return padding;\n   }\n});\n")),(0,o.kt)("p",null,"The following option can be set by a callback:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/PaddingCallback.html"},"PaddingCallback"),"<","ChartContext",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/PaddingItem.html"},"PaddingItem"))))))}g.isMDXComponent=!0}}]);