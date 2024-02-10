"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[56336],{95788:(e,t,n)=>{n.d(t,{Iu:()=>g,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),h=s(n),c=a,y=h["".concat(p,".").concat(c)]||h[c]||u[c]||o;return n?r.createElement(y,i(i({ref:t},g),{},{components:n})):r.createElement(y,i({ref:t},g))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(45072),a=(n(11504),n(95788));const o={id:"PluginPointer",title:"Chart cursor plugin",hide_title:!0,sidebar_label:"Chart cursor"},i=void 0,l={unversionedId:"plugins/PluginPointer",id:"version-6.1/plugins/PluginPointer",title:"Chart cursor plugin",description:"Chart cursor plugin",source:"@site/versioned_docs/version-6.1/plugins/Pointer.md",sourceDirName:"plugins",slug:"/plugins/PluginPointer",permalink:"/Charba-Wiki/docs/6.1/plugins/PluginPointer",draft:!1,tags:[],version:"6.1",frontMatter:{id:"PluginPointer",title:"Chart cursor plugin",hide_title:!0,sidebar_label:"Chart cursor"},sidebar:"docs",previous:{title:"Chart background color",permalink:"/Charba-Wiki/docs/6.1/plugins/PluginBackgroundColor"},next:{title:"Crosshair",permalink:"/Charba-Wiki/docs/6.1/plugins/PluginCrosshair"}},p={},s=[{value:"Chart cursor plugin",id:"chart-cursor-plugin",level:2},{value:"Options",id:"options",level:2},{value:"Options builder",id:"options-builder",level:2}],g={toc:s},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(h,(0,r.c)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"chart-cursor-plugin"},"Chart cursor plugin"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Charba")," provides a plugin implementation to set the cursor of the chart when a chart and clickable element is hovered."),(0,a.yg)("p",null,"The goal is to change the style of ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/dom/enums/CursorType.html"},"cursor")," to highlight that the element could be clickable."),(0,a.yg)("p",null,"This plugin, as singleton, can be set both at global and at chart level."),(0,a.yg)("p",null,"The implementation is ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartPointer.html"},"ChartPointer")," and can be set as following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(ChartPointer.get());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(ChartPointer.get());\n")),(0,a.yg)("p",null,"The ID of plugin is ",(0,a.yg)("inlineCode",{parentName:"p"},"charbacursorpointer")," (",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartPointer.html#ID"},"ChartPointer.ID"),")."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,a.yg)("p",null,"In this case you should instantiate a ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartPointerOptions.html"},"ChartPointerOptions")," and set it to your chart options as following, setting the color you want:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nChartPointerOptions options = new ChartPointerOptions();\n// Set "crosshair" overriding the default cursor\noptions.setCursorPointer(CursorType.CROSSHAIR);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(ChartPointer.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n')),(0,a.yg)("p",null,"You can also change the default for all charts instances, as following"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nChartPointerOptions options = new ChartPointerOptions();\n// Set "crosshair" overriding the default cursor\noptions.setCursorPointer(CursorType.CROSSHAIR);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(ChartPointer.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store();\n')),(0,a.yg)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartPointerOptionsFactory.html"},"ChartPointerOptionsFactory")," as static reference inside the ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartPointer.html"},"plugin")," which can be used to retrieve the options from chart, as following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nChartPointerOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(ChartPointer.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartPointer.ID, ChartPointer.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ChartPointer.FACTORY);\n}\n")),(0,a.yg)("p",null,"The following are the attributes that you can set to plugin options:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"cursorPointer"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/dom/enums/CursorType.html"},"CursorType")),(0,a.yg)("td",{parentName:"tr",align:"left"},"CursorType.POINTER"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Cursor style applied to the canvas when is hovering a clickable element.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"elements"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/enums/PointerElement.html"},"PointerElement")),(0,a.yg)("td",{parentName:"tr",align:"left"},"PointerElement.DATASET, PointerElement.TITLE, PointerElement.SUBTITLE, PointerElement.AXES, PointerElement.LEGEND"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Chart elements where the cursor pointer will be applied if the element is hovered.")))),(0,a.yg)("p",null,"By ",(0,a.yg)("inlineCode",{parentName:"p"},"elements")," array property, you can decide on which chart elements the cursor pointer will be applied."),(0,a.yg)("p",null,"Apart for ",(0,a.yg)("inlineCode",{parentName:"p"},"PointerElement.LEGEND"),", that is always clickable, for all the others the cursor will be applied ",(0,a.yg)("strong",{parentName:"p"},"ONLY")," if the chart has got a relative click event handler instance."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Element"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Handler"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"PointerElement.DATASET"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"PointerElement.TITLE"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/events/TitleClickEventHandler.html"},"TitleClickEventHandler"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"PointerElement.SUBTITLE"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/events/SubtitleClickEventHandler.html"},"SubtitleClickEventHandler"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"PointerElement.AXES"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/events/AxisClickEventHandler.html"},"AxisClickEventHandler"))))),(0,a.yg)("h2",{id:"options-builder"},"Options builder"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,a.yg)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nChartPointerOptions options = ChartPointerOptionsBuilder.create()\n    .setCursorPointer(CursorType.CROSSHAIR)\n    .setElements(PointerElement.DATASET, PointerElement.TITLE)\n    .build();\n// sets options\nchart.getOptions().getPlugins().setOptions(ChartPointer.ID, options);\n")),(0,a.yg)("p",null,"Creating a build by ",(0,a.yg)("inlineCode",{parentName:"p"},"ChartPointerOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,a.yg)("inlineCode",{parentName:"p"},"ChartPointerOptionsBuilder.create(chart)")," it will use the global chart options as default."))}u.isMDXComponent=!0}}]);