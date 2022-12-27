"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[19807],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),g=s(r),d=o,h=g["".concat(p,".").concat(d)]||g[d]||u[d]||a;return r?n.createElement(h,i(i({ref:e},c),{},{components:r})):n.createElement(h,i({ref:e},c))}));function h(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[g]="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25943:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(44996);const i={id:"PluginBackgroundColor",title:"Chart background color plugin",hide_title:!0,sidebar_label:"Chart background color"},l=void 0,p={unversionedId:"plugins/PluginBackgroundColor",id:"version-4.2/plugins/PluginBackgroundColor",title:"Chart background color plugin",description:"",source:"@site/versioned_docs/version-4.2/plugins/BackgroundColor.md",sourceDirName:"plugins",slug:"/plugins/PluginBackgroundColor",permalink:"/Charba-Wiki/docs/4.2/plugins/PluginBackgroundColor",draft:!1,tags:[],version:"4.2",frontMatter:{id:"PluginBackgroundColor",title:"Chart background color plugin",hide_title:!0,sidebar_label:"Chart background color"},sidebar:"version-4.2/docs",previous:{title:"Implementing a plugin",permalink:"/Charba-Wiki/docs/4.2/plugins/"},next:{title:"Chart cursor",permalink:"/Charba-Wiki/docs/4.2/plugins/PluginPointer"}},s={},c=[{value:"Chart background color plugin",id:"chart-background-color-plugin",level:2},{value:"Options",id:"options",level:2},{value:"Options builder",id:"options-builder",level:2}],g={toc:c};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"chart-background-color-plugin"},"Chart background color plugin"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to set the background color, pattern or gradient of the chart. This plugin can be set both at global and at chart level."),(0,o.kt)("img",{src:(0,a.Z)("/img/backgroundGradient.png")}),(0,o.kt)("p",null,"The implementation is ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html"},"ChartBackgroundColor")," and can be set as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(new ChartBackgroundColor());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(new ChartBackgroundColor());\n")),(0,o.kt)("p",null,"The ID of plugin is ",(0,o.kt)("inlineCode",{parentName:"p"},"charbabackgroundcolor")," (",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html#ID"},"ChartBackgroundColor.ID"),")."),(0,o.kt)("p",null,"To set the background color or pattern or gradient, you must create the instance passing the color or pattern or gradient in the constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Default is "white"\nnew ChartBackgroundColor();\n// Set "green"\nnew ChartBackgroundColor("green");\n// Set "green" by HtmlColor\nnew ChartBackgroundColor(HtmlColor.GREEN);\n// Set gradient\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientOrientation.IN_OUT, GradientScope.CANVAS)\n    .addColorStop(0, HtmlColor.WHITE)\n    .addColorStop(1, HtmlColor.GRAY).build();\nnew ChartBackgroundColor(gradient);\n// Set pattern\nPattern pattern = PatternBuilder.create(Images.INSTANCE.pattern()).build();\nnew ChartBackgroundColor(pattern);\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,o.kt)("p",null,"In this case you should instantiate a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptions.html"},"ChartBackgroundColorOptions")," and set it to your chart options as following, setting the color or pattern or gradient you want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nChartBackgroundColorOptions options = new ChartBackgroundColorOptions();\n// Set "green" overriding the GLOBAL one\noptions.setBackgroundColor(HtmlColor.GREEN);\n\n// Set a gradient overriding the GLOBAL one\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientOrientation.IN_OUT, GradientScope.CANVAS)\n    .addColorStop(0, HtmlColor.WHITE)\n    .addColorStop(1, HtmlColor.GRAY).build();\noptions.setBackgroundColor(gradient);\n\n// Set a pattern overriding the GLOBAL one\nPattern pattern = PatternBuilder.create(Images.INSTANCE.pattern()).build();\noptions.setBackgroundColor(pattern);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(ChartBackgroundColor.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n')),(0,o.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptionsFactory.html"},"ChartBackgroundColorOptionsFactory")," as static reference inside the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html"},"plugin")," which can be used to retrieve the options from the chart as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nChartBackgroundColorOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(ChartBackgroundColor.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.FACTORY);\n}\n")),(0,o.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,o.kt)("td",{parentName:"tr",align:"left"},"HtmlColor.WHITE - ",(0,o.kt)("span",{style:{backgroundColor:"white",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The fill color of the chart background.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"globalCompositeOperation"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/enums/GlobalCompositeOperation.html"},"GlobalCompositeOperation")),(0,o.kt)("td",{parentName:"tr",align:"left"},"GlobalCompositeOperation.SOURCE_OVER"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The type of compositing operation to apply when drawing new shapes.",(0,o.kt)("br",null),(0,o.kt)("br",null)," See ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation"},"here")," more details.")))),(0,o.kt)("h2",{id:"options-builder"},"Options builder"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,o.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nChartBackgroundColorOptions options = ChartBackgroundColorOptionsBuilder.create()\n    .setBackgroundColor(HtmlColor.GREEN)\n    .setGlobalCompositeOperation(GlobalCompositeOperation.DESTINATION_IN)\n    .build();\n// sets options\nchart.getOptions().getPlugins().setOptions(ChartBackgroundColor.ID, options);\n")),(0,o.kt)("p",null,"Creating a build by ",(0,o.kt)("inlineCode",{parentName:"p"},"ChartBackgroundColorOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,o.kt)("inlineCode",{parentName:"p"},"ChartBackgroundColorOptionsBuilder.create(chart)")," it will use the global chart options as default."))}u.isMDXComponent=!0}}]);