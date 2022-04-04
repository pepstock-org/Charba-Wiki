"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[85189],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),g=c(n),h=o,d=g["".concat(p,".").concat(h)]||g[h]||s[h]||a;return n?r.createElement(d,i(i({ref:e},u),{},{components:n})):r.createElement(d,i({ref:e},u))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},15444:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return g}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(44996),l=["components"],p={id:"PluginBackgroundColor",title:"Chart background color plugin",hide_title:!0,sidebar_label:"Chart background color"},c=void 0,u={unversionedId:"plugins/PluginBackgroundColor",id:"version-4.0/plugins/PluginBackgroundColor",title:"Chart background color plugin",description:"",source:"@site/versioned_docs/version-4.0/plugins/BackgroundColor.md",sourceDirName:"plugins",slug:"/plugins/PluginBackgroundColor",permalink:"/Charba-Wiki/docs/4.0/plugins/PluginBackgroundColor",tags:[],version:"4.0",frontMatter:{id:"PluginBackgroundColor",title:"Chart background color plugin",hide_title:!0,sidebar_label:"Chart background color"},sidebar:"version-4.0/docs",previous:{title:"Implementing a plugin",permalink:"/Charba-Wiki/docs/4.0/plugins/"},next:{title:"Chart cursor",permalink:"/Charba-Wiki/docs/4.0/plugins/PluginPointer"}},s={},g=[{value:"Chart background color plugin",id:"chart-background-color-plugin",level:2},{value:"Options",id:"options",level:2}],h={toc:g};function d(t){var e=t.components,n=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"chart-background-color-plugin"},"Chart background color plugin"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to set the background color, pattern or gradient of the chart. This plugin can be set both at global and at chart level."),(0,a.kt)("img",{src:(0,i.Z)("/img/backgroundGradient.png")}),(0,a.kt)("p",null,"The implementation is ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html"},"ChartBackgroundColor")," and can be set as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(new ChartBackgroundColor());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(new ChartBackgroundColor());\n")),(0,a.kt)("p",null,"The ID of plugin is ",(0,a.kt)("inlineCode",{parentName:"p"},"charbabackgroundcolor")," (",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html#ID"},"ChartBackgroundColor.ID"),")."),(0,a.kt)("p",null,"To set the background color or pattern or gradient, you must create the instance passing the color or pattern or gradient in the constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// Default is "white"\nnew ChartBackgroundColor();\n// Set "green"\nnew ChartBackgroundColor("green");\n// Set "green" by HtmlColor\nnew ChartBackgroundColor(HtmlColor.GREEN);\n// Set gradient\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientOrientation.IN_OUT, GradientScope.CANVAS)\n    .addColorStop(0, HtmlColor.WHITE)\n    .addColorStop(1, HtmlColor.GRAY).build();\nnew ChartBackgroundColor(gradient);\n// Set pattern\nPattern pattern = PatternBuilder.create(Images.INSTANCE.pattern()).build();\nnew ChartBackgroundColor(pattern);\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,a.kt)("p",null,"In this case you should instantiate a ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptions.html"},"ChartBackgroundColorOptions")," and set it to your chart options as following, setting the color or pattern or gradient you want:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nChartBackgroundColorOptions options = new ChartBackgroundColorOptions();\n// Set "green" overriding the GLOBAL one\noptions.setBackgroundColor(HtmlColor.GREEN);\n\n// Set a gradient overriding the GLOBAL one\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientOrientation.IN_OUT, GradientScope.CANVAS)\n    .addColorStop(0, HtmlColor.WHITE)\n    .addColorStop(1, HtmlColor.GRAY).build();\noptions.setBackgroundColor(gradient);\n\n// Set a pattern overriding the GLOBAL one\nPattern pattern = PatternBuilder.create(Images.INSTANCE.pattern()).build();\noptions.setBackgroundColor(pattern);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(ChartBackgroundColor.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n')),(0,a.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptionsFactory.html"},"ChartBackgroundColorOptionsFactory")," as static reference inside the ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html"},"plugin")," which can be used to retrieve the options from the chart as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nChartBackgroundColorOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(ChartBackgroundColor.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.FACTORY);\n}\n")),(0,a.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,a.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,a.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,a.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,a.kt)("td",{parentName:"tr",align:"left"},"HtmlColor.WHITE - ",(0,a.kt)("span",{style:{backgroundColor:"white",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The fill color of the chart background.")))))}d.isMDXComponent=!0}}]);