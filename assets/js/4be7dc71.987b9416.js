"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[18023],{3905:(t,e,r)=>{r.d(e,{Zo:()=>g,kt:()=>h});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},g=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,g=i(t,["components","mdxType","originalType","parentName"]),s=c(r),h=o,d=s["".concat(p,".").concat(h)]||s[h]||u[h]||a;return r?n.createElement(d,l(l({ref:e},g),{},{components:r})):n.createElement(d,l({ref:e},g))}));function h(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},77534:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var n=r(87462),o=(r(67294),r(3905)),a=r(44996);const l={id:"PluginBackgroundColor",title:"Chart background color plugin",hide_title:!0,sidebar_label:"Chart background color"},i=void 0,p={unversionedId:"PluginBackgroundColor",id:"version-3.3/PluginBackgroundColor",title:"Chart background color plugin",description:"",source:"@site/versioned_docs/version-3.3/PluginBackgroundColor.md",sourceDirName:".",slug:"/PluginBackgroundColor",permalink:"/Charba-Wiki/docs/3.3/PluginBackgroundColor",draft:!1,tags:[],version:"3.3",frontMatter:{id:"PluginBackgroundColor",title:"Chart background color plugin",hide_title:!0,sidebar_label:"Chart background color"},sidebar:"version-3.3/docs",previous:{title:"Gauge",permalink:"/Charba-Wiki/docs/3.3/ChartGauge"},next:{title:"Chart cursor",permalink:"/Charba-Wiki/docs/3.3/PluginPointer"}},c={},g=[{value:"Chart background color plugin",id:"chart-background-color-plugin",level:2}],u={toc:g};function s(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"chart-background-color-plugin"},"Chart background color plugin"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to set the background color, pattern or gradient of the chart. This plugin can be set both at global and at chart level."),(0,o.kt)("img",{src:(0,a.Z)("/img/backgroundGradient.png")}),(0,o.kt)("p",null,"The implementation is ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html"},"ChartBackgroundColor")," and can be set as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// GLOBAL\nDefaults.get().getPlugins().register(new ChartBackgroundColor());\n\n// INLINE\nchart.getPlugins().add(new ChartBackgroundColor());\n")),(0,o.kt)("p",null,"The ID of plugin is ",(0,o.kt)("inlineCode",{parentName:"p"},"charbabackgroundcolor")," (",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html#ID"},"ChartBackgroundColor.ID"),")."),(0,o.kt)("p",null,"To set the background color or pattern or gradient, you must create the instance passing the color or pattern or gradient into constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n// Default is "white"\nnew ChartBackgroundColor();\n// Set "green"\nnew ChartBackgroundColor("green");\n// Set "green" by HtmlColor\nnew ChartBackgroundColor(HtmlColor.GREEN);\n// Set gradient\nGradient gradient = new Gradient(GradientType.RADIAL, GradientOrientation.IN_OUT,  GradientScope.CANVAS);\ngradient.addColorStop(0, HtmlColor.WHITE);\ngradient.addColorStop(1, HtmlColor.GRAY);\nnew ChartBackgroundColor(gradient);\n// Set pattern\nPattern pattern = new Pattern(Images.INSTANCE.pattern());\nnew ChartBackgroundColor(pattern);\n')),(0,o.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,o.kt)("p",null,"In this case you should instantiate a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptions.html"},"ChartBackgroundColorOptions")," and set it to your chart options as following, setting the color or pattern or gradient you want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Set "green" overriding the GLOBAL one\nChartBackgroundColorOptions option = new ChartBackgroundColorOptions();\noption.setBackgroundColor(HtmlColor.GREEN);\n\n// Set a gradient overriding the GLOBAL one\nGradient gradient = new Gradient(GradientType.RADIAL, GradientOrientation.IN_OUT,  GradientScope.CANVAS);\ngradient.addColorStop(0, HtmlColor.WHITE);\ngradient.addColorStop(1, HtmlColor.GRAY);\noption.setBackgroundColor(gradient);\n\n// Set a pattern overriding the GLOBAL one\nPattern pattern = new Pattern(Images.INSTANCE.pattern());\noption.setBackgroundColor(pattern);\n\n// --------------------------------------\n// store the plugin options by plugin ID\n// --------------------------------------\nchart.getOptions().getPlugins().setOptions(ChartBackgroundColor.ID, option);\n// --------------------------------------\n// or store the plugin options without plugin ID\n// --------------------------------------\nchart.getOptions().getPlugins().setOptions(option);\n')),(0,o.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptionsFactory.html"},"ChartBackgroundColorOptionsFactory")," as static reference inside the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html"},"plugin")," which can be used to retrieve the options from the chart as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// reads the options from chart\n// --------------------------------------\nChartBackgroundColorOptions option;\n\nif (chart.getOptions().getPlugins().hasOptions(ChartBackgroundColor.ID)){\n   // --------------------------------------\n   // retrieve the plugin options by plugin ID\n   // --------------------------------------\n   options = chart.getOptions().getPlugins().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);\n   // --------------------------------------\n   // or retrieve the plugin options without plugin ID\n   // --------------------------------------\n   options = chart.getOptions().getPlugins().getOptions(ChartBackgroundColor.FACTORY);\n}\n")),(0,o.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,o.kt)("td",{parentName:"tr",align:null},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,o.kt)("td",{parentName:"tr",align:null},"HtmlColor.WHITE"),(0,o.kt)("td",{parentName:"tr",align:null},"The fill color of the chart background.")))))}s.isMDXComponent=!0}}]);