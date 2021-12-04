"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[5757],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),h=s(n),g=a,m=h["".concat(p,".").concat(g)]||h[g]||c[g]||o;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46356:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"PluginPointer",title:"Chart cursor plugin",hide_title:!0,sidebar_label:"Chart cursor"},p=void 0,s={unversionedId:"plugins/PluginPointer",id:"version-4.1/plugins/PluginPointer",isDocsHomePage:!1,title:"Chart cursor plugin",description:"Chart cursor plugin",source:"@site/versioned_docs/version-4.1/plugins/Pointer.md",sourceDirName:"plugins",slug:"/plugins/PluginPointer",permalink:"/Charba-Wiki/docs/4.1/plugins/PluginPointer",tags:[],version:"4.1",frontMatter:{id:"PluginPointer",title:"Chart cursor plugin",hide_title:!0,sidebar_label:"Chart cursor"},sidebar:"version-4.1/docs",previous:{title:"Chart background color",permalink:"/Charba-Wiki/docs/4.1/plugins/PluginBackgroundColor"},next:{title:"Color schemes",permalink:"/Charba-Wiki/docs/4.1/plugins/PluginColorSchemes"}},u=[{value:"Chart cursor plugin",id:"chart-cursor-plugin",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Options builder",id:"options-builder",children:[],level:2}],c={toc:u};function h(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"chart-cursor-plugin"},"Chart cursor plugin"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provides a plugin implementation to set the cursor of the chart when a chart and clickable element is hovered."),(0,o.kt)("p",null,"The goal is to change the style of ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/dom/enums/CursorType.html"},"cursor")," to highlight that the element could be clickable."),(0,o.kt)("p",null,"This plugin, as singleton, can be set both at global and at chart level."),(0,o.kt)("p",null,"The implementation is ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/impl/plugins/ChartPointer.html"},"ChartPointer")," and can be set as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(ChartPointer.get());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(ChartPointer.get());\n")),(0,o.kt)("p",null,"The ID of plugin is ",(0,o.kt)("inlineCode",{parentName:"p"},"charbacursorpointer")," (",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/impl/plugins/ChartPointer.html#ID"},"ChartPointer.ID"),")."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,o.kt)("p",null,"In this case you should instantiate a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/impl/plugins/ChartPointerOptions.html"},"ChartPointerOptions")," and set it to your chart options as following, setting the color you want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nChartPointerOptions options = new ChartPointerOptions();\n// Set "crosshair" overriding the default cursor\noptions.setCursorPointer(CursorType.CROSSHAIR);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(ChartPointer.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n')),(0,o.kt)("p",null,"You can also change the default for all charts instances, as following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nChartPointerOptions options = new ChartPointerOptions();\n// Set "crosshair" overriding the default cursor\noptions.setCursorPointer(CursorType.CROSSHAIR);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(ChartPointer.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store();\n')),(0,o.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/impl/plugins/ChartPointerOptionsFactory.html"},"ChartPointerOptionsFactory")," as static reference inside the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/impl/plugins/ChartPointer.html"},"plugin")," which can be used to retrieve the options from chart, as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nChartPointerOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(ChartPointer.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartPointer.ID, ChartPointer.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartPointer.FACTORY);\n}\n")),(0,o.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"cursorPointer"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/dom/enums/CursorType.html"},"CursorType")),(0,o.kt)("td",{parentName:"tr",align:"left"},"CursorType.POINTER"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Cursor style applied to the canvas when is hovering a clickable element.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"elements"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/impl/plugins/enums/PointerElement.html"},"PointerElement")),(0,o.kt)("td",{parentName:"tr",align:"left"},"PointerElement.DATASET, PointerElement.TITLE, PointerElement.AXES, PointerElement.LEGEND"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Chart elements where the cursor pointer will be applied if the element is hovered.")))),(0,o.kt)("p",null,"By ",(0,o.kt)("inlineCode",{parentName:"p"},"elements")," array property, you can decide on which chart elements the cursor pointer will be applied."),(0,o.kt)("p",null,"Apart for ",(0,o.kt)("inlineCode",{parentName:"p"},"PointerElement.LEGEND"),", that is always clickable, for all the others the cursor will be applied ",(0,o.kt)("strong",{parentName:"p"},"ONLY")," if the chart has got a relative click event handler instance."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Element"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Handler"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PointerElement.DATASET"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PointerElement.TITLE"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/TitleClickEventHandler.html"},"TitleClickEventHandler"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PointerElement.AXES"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/AxisClickEventHandler.html"},"AxisClickEventHandler"))))),(0,o.kt)("h2",{id:"options-builder"},"Options builder"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,o.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nChartPointerOptions options = ChartPointerOptionsBuilder.create()\n    .setCursorPointer(CursorType.CROSSHAIR)\n    .setElements(PointerElement.DATASET, PointerElement.TITLE)\n    .build();\n// sets options\nchart.getOptions().getPlugins().setOptions(ChartPointer.ID, options);\n")),(0,o.kt)("p",null,"Creating a build by ",(0,o.kt)("inlineCode",{parentName:"p"},"ChartPointerOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,o.kt)("inlineCode",{parentName:"p"},"ChartPointerOptionsBuilder.create(chart)")," it will use the global chart options as default."))}h.isMDXComponent=!0}}]);