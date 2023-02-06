"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[68810],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=o.createContext({}),s=function(t){var e=o.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return o.createElement(p.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),g=s(r),d=n,h=g["".concat(p,".").concat(d)]||g[d]||u[d]||a;return r?o.createElement(h,i(i({ref:e},c),{},{components:r})):o.createElement(h,i({ref:e},c))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[g]="string"==typeof t?t:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66972:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905)),a=r(44996);const i={id:"PluginBackgroundColor",title:"Chart background color plugin",hide_title:!0,sidebar_label:"Chart background color"},l=void 0,p={unversionedId:"plugins/PluginBackgroundColor",id:"plugins/PluginBackgroundColor",title:"Chart background color plugin",description:"Chart background color plugin",source:"@site/docs/plugins/BackgroundColor.md",sourceDirName:"plugins",slug:"/plugins/PluginBackgroundColor",permalink:"/Charba-Wiki/docs/plugins/PluginBackgroundColor",draft:!1,tags:[],version:"current",frontMatter:{id:"PluginBackgroundColor",title:"Chart background color plugin",hide_title:!0,sidebar_label:"Chart background color"},sidebar:"docs",previous:{title:"Implementing a plugin",permalink:"/Charba-Wiki/docs/plugins/"},next:{title:"Chart cursor",permalink:"/Charba-Wiki/docs/plugins/PluginPointer"}},s={},c=[{value:"Chart background color plugin",id:"chart-background-color-plugin",level:2},{value:"Options",id:"options",level:2},{value:"Options builder",id:"options-builder",level:2}],g={toc:c},u="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,o.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"chart-background-color-plugin"},"Chart background color plugin"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to set the background color, pattern or gradient of the chart and chart area. This plugin can be set both at global and at chart level."),(0,n.kt)("img",{src:(0,a.Z)("/img/backgroundGradient.png")}),(0,n.kt)("p",null,"The implementation is ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html"},"ChartBackgroundColor")," and can be set as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(new ChartBackgroundColor());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(new ChartBackgroundColor());\n")),(0,n.kt)("p",null,"The ID of plugin is ",(0,n.kt)("inlineCode",{parentName:"p"},"charbabackgroundcolor")," (",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html#ID"},"ChartBackgroundColor.ID"),")."),(0,n.kt)("p",null,"To set the background color or pattern or gradient, you must create the instance passing the color or pattern or gradient in the constructor:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// Default is "white"\nnew ChartBackgroundColor();\n// Set "green"\nnew ChartBackgroundColor("green");\n// Set "green" by HtmlColor\nnew ChartBackgroundColor(HtmlColor.GREEN);\n// Set gradient\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientOrientation.IN_OUT, GradientScope.CANVAS)\n    .addColorStop(0, HtmlColor.WHITE)\n    .addColorStop(1, HtmlColor.GRAY).build();\nnew ChartBackgroundColor(gradient);\n// Set pattern\nPattern pattern = PatternBuilder.create(Images.INSTANCE.pattern()).build();\nnew ChartBackgroundColor(pattern);\n')),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,n.kt)("p",null,"In this case you should instantiate a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptions.html"},"ChartBackgroundColorOptions")," and set it to your chart options as following, setting the color or pattern or gradient you want:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nChartBackgroundColorOptions options = new ChartBackgroundColorOptions();\n// Set "green" overriding the GLOBAL one\noptions.setBackgroundColor(HtmlColor.GREEN);\n\n// Set a gradient overriding the GLOBAL one\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientOrientation.IN_OUT, GradientScope.CANVAS)\n    .addColorStop(0, HtmlColor.WHITE)\n    .addColorStop(1, HtmlColor.GRAY).build();\noptions.setBackgroundColor(gradient);\n\n// Set a pattern overriding the GLOBAL one\nPattern pattern = PatternBuilder.create(Images.INSTANCE.pattern()).build();\noptions.setBackgroundColor(pattern);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(ChartBackgroundColor.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n')),(0,n.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptionsFactory.html"},"ChartBackgroundColorOptionsFactory")," as static reference inside the ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html"},"plugin")," which can be used to retrieve the options from the chart as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nChartBackgroundColorOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(ChartBackgroundColor.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.FACTORY);\n}\n")),(0,n.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,n.kt)("td",{parentName:"tr",align:"left"},"HtmlColor.WHITE - ",(0,n.kt)("span",{style:{backgroundColor:"white",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fill color of the chart background.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"areaBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,n.kt)("td",{parentName:"tr",align:"left"},"HtmlColor.WHITE - ",(0,n.kt)("span",{style:{backgroundColor:"white",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fill color of the chart area background.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"globalCompositeOperation"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/dom/enums/GlobalCompositeOperation.html"},"GlobalCompositeOperation")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GlobalCompositeOperation.SOURCE_OVER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The type of compositing operation to apply when drawing new shapes.",(0,n.kt)("br",null),(0,n.kt)("br",null)," See ",(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation"},"here")," more details.")))),(0,n.kt)("p",null,"The following is showing how a chart area can be filled:"),(0,n.kt)("img",{src:(0,a.Z)("/img/areaBackground.png")}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// get gradient\nGradient gradient = UiGradient.MARGO.createGradient();\n// creates options\nChartBackgroundColorOptions option = new ChartBackgroundColorOptions();\n// sets area background\noption.setAreaBackgroundColor(gradient);\n// store the options in the chart\nchart.getOptions().getPlugins().setOptions(ChartBackgroundColor.ID, option);\n")),(0,n.kt)("h2",{id:"options-builder"},"Options builder"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,n.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nChartBackgroundColorOptions options = ChartBackgroundColorOptionsBuilder.create()\n    .setBackgroundColor(HtmlColor.GREEN)\n    .setGlobalCompositeOperation(GlobalCompositeOperation.DESTINATION_IN)\n    .build();\n// sets options\nchart.getOptions().getPlugins().setOptions(ChartBackgroundColor.ID, options);\n")),(0,n.kt)("p",null,"Creating a build by ",(0,n.kt)("inlineCode",{parentName:"p"},"ChartBackgroundColorOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,n.kt)("inlineCode",{parentName:"p"},"ChartBackgroundColorOptionsBuilder.create(chart)")," it will use the global chart options as default."))}d.isMDXComponent=!0}}]);