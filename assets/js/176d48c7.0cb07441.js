"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[41496],{95788:(t,e,r)=>{r.d(e,{Iu:()=>s,yg:()=>h});var o=r(11504);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=o.createContext({}),g=function(t){var e=o.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=g(t.components);return o.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=g(r),d=n,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return r?o.createElement(h,i(i({ref:e},s),{},{components:r})):o.createElement(h,i({ref:e},s))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:n,i[1]=l;for(var g=2;g<a;g++)i[g]=r[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23728:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>g,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=r(45072),n=(r(11504),r(95788)),a=r(70964);const i={id:"PluginBackgroundColor",title:"Chart background color plugin",hide_title:!0,sidebar_label:"Chart background color"},l=void 0,p={unversionedId:"plugins/PluginBackgroundColor",id:"version-6.2/plugins/PluginBackgroundColor",title:"Chart background color plugin",description:"Chart background color plugin",source:"@site/versioned_docs/version-6.2/plugins/BackgroundColor.md",sourceDirName:"plugins",slug:"/plugins/PluginBackgroundColor",permalink:"/Charba-Wiki/docs/6.2/plugins/PluginBackgroundColor",draft:!1,tags:[],version:"6.2",frontMatter:{id:"PluginBackgroundColor",title:"Chart background color plugin",hide_title:!0,sidebar_label:"Chart background color"},sidebar:"docs",previous:{title:"Implementing a plugin",permalink:"/Charba-Wiki/docs/6.2/plugins/"},next:{title:"Chart cursor",permalink:"/Charba-Wiki/docs/6.2/plugins/PluginPointer"}},g={},s=[{value:"Chart background color plugin",id:"chart-background-color-plugin",level:2},{value:"Options",id:"options",level:2},{value:"Options builder",id:"options-builder",level:2}],c={toc:s},u="wrapper";function d(t){let{components:e,...r}=t;return(0,n.yg)(u,(0,o.c)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"chart-background-color-plugin"},"Chart background color plugin"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to set the background color, pattern or gradient of the chart and chart area. This plugin can be set both at global and at chart level."),(0,n.yg)("img",{src:(0,a.c)("/img/backgroundGradient.png")}),(0,n.yg)("p",null,"The implementation is ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html"},"ChartBackgroundColor")," and can be set as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(new ChartBackgroundColor());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(new ChartBackgroundColor());\n")),(0,n.yg)("p",null,"The ID of plugin is ",(0,n.yg)("inlineCode",{parentName:"p"},"charbabackgroundcolor")," (",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html#ID"},"ChartBackgroundColor.ID"),")."),(0,n.yg)("p",null,"To set the background color or pattern or gradient, you must create the instance passing the color or pattern or gradient in the constructor:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// Default is "white"\nnew ChartBackgroundColor();\n// Set "green"\nnew ChartBackgroundColor("green");\n// Set "green" by HtmlColor\nnew ChartBackgroundColor(HtmlColor.GREEN);\n// Set gradient\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientOrientation.IN_OUT, GradientScope.CANVAS)\n    .addColorStop(0, HtmlColor.WHITE)\n    .addColorStop(1, HtmlColor.GRAY).build();\nnew ChartBackgroundColor(gradient);\n// Set pattern\nPattern pattern = PatternBuilder.create(Images.INSTANCE.pattern()).build();\nnew ChartBackgroundColor(pattern);\n')),(0,n.yg)("h2",{id:"options"},"Options"),(0,n.yg)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,n.yg)("p",null,"In this case you should instantiate a ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptions.html"},"ChartBackgroundColorOptions")," and set it to your chart options as following, setting the color or pattern or gradient you want:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nChartBackgroundColorOptions options = new ChartBackgroundColorOptions();\n// Set "green" overriding the GLOBAL one\noptions.setBackgroundColor(HtmlColor.GREEN);\n\n// Set a gradient overriding the GLOBAL one\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientOrientation.IN_OUT, GradientScope.CANVAS)\n    .addColorStop(0, HtmlColor.WHITE)\n    .addColorStop(1, HtmlColor.GRAY).build();\noptions.setBackgroundColor(gradient);\n\n// Set a pattern overriding the GLOBAL one\nPattern pattern = PatternBuilder.create(Images.INSTANCE.pattern()).build();\noptions.setBackgroundColor(pattern);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(ChartBackgroundColor.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n')),(0,n.yg)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptionsFactory.html"},"ChartBackgroundColorOptionsFactory")," as static reference inside the ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html"},"plugin")," which can be used to retrieve the options from the chart as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nChartBackgroundColorOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(ChartBackgroundColor.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.FACTORY);\n}\n")),(0,n.yg)("p",null,"The following are the attributes that you can set to plugin options:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,n.yg)("td",{parentName:"tr",align:"left"},"HtmlColor.WHITE - ",(0,n.yg)("span",{style:{backgroundColor:"white",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The fill color of the chart background.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"areaBackgroundColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,n.yg)("td",{parentName:"tr",align:"left"},"HtmlColor.WHITE - ",(0,n.yg)("span",{style:{backgroundColor:"white",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The fill color of the chart area background.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"globalCompositeOperation"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/dom/enums/GlobalCompositeOperation.html"},"GlobalCompositeOperation")),(0,n.yg)("td",{parentName:"tr",align:"left"},"GlobalCompositeOperation.SOURCE_OVER"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The type of compositing operation to apply when drawing new shapes.",(0,n.yg)("br",null),(0,n.yg)("br",null)," See ",(0,n.yg)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation"},"here")," more details.")))),(0,n.yg)("p",null,"The following is showing how a chart area can be filled:"),(0,n.yg)("img",{src:(0,a.c)("/img/areaBackground.png")}),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// get gradient\nGradient gradient = UiGradient.MARGO.createGradient();\n// creates options\nChartBackgroundColorOptions option = new ChartBackgroundColorOptions();\n// sets area background\noption.setAreaBackgroundColor(gradient);\n// store the options in the chart\nchart.getOptions().getPlugins().setOptions(ChartBackgroundColor.ID, option);\n")),(0,n.yg)("h2",{id:"options-builder"},"Options builder"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,n.yg)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nChartBackgroundColorOptions options = ChartBackgroundColorOptionsBuilder.create()\n    .setBackgroundColor(HtmlColor.GREEN)\n    .setGlobalCompositeOperation(GlobalCompositeOperation.DESTINATION_IN)\n    .build();\n// sets options\nchart.getOptions().getPlugins().setOptions(ChartBackgroundColor.ID, options);\n")),(0,n.yg)("p",null,"Creating a build by ",(0,n.yg)("inlineCode",{parentName:"p"},"ChartBackgroundColorOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,n.yg)("inlineCode",{parentName:"p"},"ChartBackgroundColorOptionsBuilder.create(chart)")," it will use the global chart options as default."))}d.isMDXComponent=!0}}]);