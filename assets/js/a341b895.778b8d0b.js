(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[5189],{3905:function(t,r,e){"use strict";e.d(r,{Zo:function(){return c},kt:function(){return d}});var n=e(7294);function o(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){o(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function l(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)e=a[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)e=a[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var p=n.createContext({}),u=function(t){var r=n.useContext(p),e=r;return t&&(e="function"==typeof t?t(r):i(i({},r),t)),e},c=function(t){var r=u(t.components);return n.createElement(p.Provider,{value:r},t.children)},s={inlineCode:"code",wrapper:function(t){var r=t.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(t,r){var e=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),g=u(e),d=o,h=g["".concat(p,".").concat(d)]||g[d]||s[d]||a;return e?n.createElement(h,i(i({ref:r},c),{},{components:e})):n.createElement(h,i({ref:r},c))}));function d(t,r){var e=arguments,o=r&&r.mdxType;if("string"==typeof t||o){var a=e.length,i=new Array(a);i[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<a;u++)i[u]=e[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}g.displayName="MDXCreateElement"},3919:function(t,r,e){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}e.d(r,{b:function(){return n},Z:function(){return o}})},4996:function(t,r,e){"use strict";e.d(r,{C:function(){return a},Z:function(){return i}});var n=e(2263),o=e(3919);function a(){var t=(0,n.Z)().siteConfig,r=(t=void 0===t?{}:t).baseUrl,e=void 0===r?"/":r,a=t.url;return{withBaseUrl:function(t,r){return function(t,r,e,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,l=void 0!==i&&i,p=a.absolute,u=void 0!==p&&p;if(!e)return e;if(e.startsWith("#"))return e;if((0,o.b)(e))return e;if(l)return r+e;var c=e.startsWith(r)?e:r+e.replace(/^\//,"");return u?t+c:c}(a,e,t,r)}}}function i(t,r){return void 0===r&&(r={}),(0,a().withBaseUrl)(t,r)}},3042:function(t,r,e){"use strict";e.r(r),e.d(r,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var n=e(2122),o=e(9756),a=(e(7294),e(3905)),i=e(4996),l=["components"],p={id:"PluginBackgroundColor",title:"Chart background color plugin",hide_title:!0,sidebar_label:"Chart background color"},u={unversionedId:"plugins/PluginBackgroundColor",id:"version-4.0/plugins/PluginBackgroundColor",isDocsHomePage:!1,title:"Chart background color plugin",description:"Chart background color plugin",source:"@site/versioned_docs/version-4.0/plugins/BackgroundColor.md",sourceDirName:"plugins",slug:"/plugins/PluginBackgroundColor",permalink:"/Charba-Wiki/docs/4.0/plugins/PluginBackgroundColor",version:"4.0",sidebar_label:"Chart background color",frontMatter:{id:"PluginBackgroundColor",title:"Chart background color plugin",hide_title:!0,sidebar_label:"Chart background color"},sidebar:"version-4.0/docs",previous:{title:"Plugins",permalink:"/Charba-Wiki/docs/4.0/plugins/Plugins"},next:{title:"Chart cursor plugin",permalink:"/Charba-Wiki/docs/4.0/plugins/PluginPointer"}},c=[{value:"Chart background color plugin",id:"chart-background-color-plugin",children:[]},{value:"Options",id:"options",children:[]}],s={toc:c};function g(t){var r=t.components,e=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,e,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"chart-background-color-plugin"},"Chart background color plugin"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to set the background color, pattern or gradient of the chart. This plugin can be set both at global and at chart level."),(0,a.kt)("img",{src:(0,i.Z)("/img/backgroundGradient.png")}),(0,a.kt)("p",null,"The implementation is ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html"},"ChartBackgroundColor")," and can be set as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(new ChartBackgroundColor());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(new ChartBackgroundColor());\n")),(0,a.kt)("p",null,"The ID of plugin is ",(0,a.kt)("inlineCode",{parentName:"p"},"charbabackgroundcolor")," (",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html#ID"},"ChartBackgroundColor.ID"),")."),(0,a.kt)("p",null,"To set the background color or pattern or gradient, you must create the instance passing the color or pattern or gradient in the constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// Default is "white"\nnew ChartBackgroundColor();\n// Set "green"\nnew ChartBackgroundColor("green");\n// Set "green" by HtmlColor\nnew ChartBackgroundColor(HtmlColor.GREEN);\n// Set gradient\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientOrientation.IN_OUT, GradientScope.CANVAS)\n    .addColorStop(0, HtmlColor.WHITE)\n    .addColorStop(1, HtmlColor.GRAY).build();\nnew ChartBackgroundColor(gradient);\n// Set pattern\nPattern pattern = PatternBuilder.create(Images.INSTANCE.pattern()).build();\nnew ChartBackgroundColor(pattern);\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,a.kt)("p",null,"In this case you should instantiate a ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptions.html"},"ChartBackgroundColorOptions")," and set it to your chart options as following, setting the color or pattern or gradient you want:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nChartBackgroundColorOptions options = new ChartBackgroundColorOptions();\n// Set "green" overriding the GLOBAL one\noptions.setBackgroundColor(HtmlColor.GREEN);\n\n// Set a gradient overriding the GLOBAL one\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientOrientation.IN_OUT, GradientScope.CANVAS)\n    .addColorStop(0, HtmlColor.WHITE)\n    .addColorStop(1, HtmlColor.GRAY).build();\noptions.setBackgroundColor(gradient);\n\n// Set a pattern overriding the GLOBAL one\nPattern pattern = PatternBuilder.create(Images.INSTANCE.pattern()).build();\noptions.setBackgroundColor(pattern);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(ChartBackgroundColor.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n')),(0,a.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColorOptionsFactory.html"},"ChartBackgroundColorOptionsFactory")," as static reference inside the ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/ChartBackgroundColor.html"},"plugin")," which can be used to retrieve the options from the chart as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nChartBackgroundColorOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(ChartBackgroundColor.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.ID, ChartBackgroundColor.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartBackgroundColor.FACTORY);\n}\n")),(0,a.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,a.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,a.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,a.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,a.kt)("td",{parentName:"tr",align:"left"},"HtmlColor.WHITE - ",(0,a.kt)("span",{style:{backgroundColor:"white",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The fill color of the chart background.")))))}g.isMDXComponent=!0}}]);