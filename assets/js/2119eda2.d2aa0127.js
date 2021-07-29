(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[5902],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return g}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(a),g=r,h=s["".concat(c,".").concat(g)]||s[g]||d[g]||o;return a?n.createElement(h,i(i({ref:e},u),{},{components:a})):n.createElement(h,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9571:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],l={id:"Layout",title:"Layout",hide_title:!0,sidebar_label:"Layout"},c={unversionedId:"configuration/Layout",id:"version-4.0/configuration/Layout",isDocsHomePage:!1,title:"Layout",description:"Layout",source:"@site/versioned_docs/version-4.0/configuration/Layout.md",sourceDirName:"configuration",slug:"/configuration/Layout",permalink:"/Charba-Wiki/docs/4.0/configuration/Layout",version:"4.0",sidebar_label:"Layout",frontMatter:{id:"Layout",title:"Layout",hide_title:!0,sidebar_label:"Layout"},sidebar:"version-4.0/docs",previous:{title:"Elements",permalink:"/Charba-Wiki/docs/4.0/configuration/Elements"},next:{title:"Filler and decimation",permalink:"/Charba-Wiki/docs/4.0/configuration/FillerAndDecimation"}},p=[{value:"Layout",id:"layout",children:[]},{value:"Scriptable",id:"scriptable",children:[]}],u={toc:p};function d(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"layout"},"Layout"),(0,o.kt)("p",null,"The layout component enables the padding configuration to add to a chart."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/Layout.html"},"layout")," configuration is nested in the configuration using "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// get layout\nLayout layout = chart.getOptions().getLayout();\n// get padding\nPadding padding = chart.getOptions().getLayout().getPadding();\n\n// sets top and bottom options to padding of chart\nchart.getOptions().getLayout().getPadding().setTop(10);\nchart.getOptions().getLayout().getPadding().setBottom(10);\n// to set same padding value to all sides of the chart\nchart.getOptions().getLayout().getPadding().set(10);\n\nint paddingTop = chart.getOptions().getLayout().getPadding().getTop();\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"Commons#padding"},"padding documentation")," for more details."),(0,o.kt)("h2",{id:"scriptable"},"Scriptable"),(0,o.kt)("p",null,"Padding also accepts a callback which is called at runtime and that takes the context as single argument, see ",(0,o.kt)("a",{parentName:"p",href:"ScriptableOptions#chart-context"},"here")," the details, which is representing contextual information and chart instance."),(0,o.kt)("p",null,"The padding element can be set as a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/PaddingCallback.html"},"callback"),", providing a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/PaddingItem.html"},"padding item")," instance, as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// get layout\nLayout layout = chart.getOptions().getLayout();\n// sets callback\nlayout.setPadding(new PaddingCallback<ChartContext>(){\n\n   @Override\n   public PaddingItem invoke(ChartContext context){\n      PaddingItem padding = new PaddingItem(); \n      // your logic\n      return padding;\n   }\n});\n")),(0,o.kt)("p",null,"The following option can be set by a callback:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/PaddingCallback.html"},"PaddingCallback"),"<","ChartContext",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/PaddingItem.html"},"PaddingItem"))))))}d.isMDXComponent=!0}}]);