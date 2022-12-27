"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[36752],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(o),u=r,g=h["".concat(s,".").concat(u)]||h[u]||m[u]||a;return o?n.createElement(g,l(l({ref:t},c),{},{components:o})):n.createElement(g,l({ref:t},c))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9414:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905)),a=o(44996);const l={id:"PluginColorSchemes",title:"Color schemes plugin",hide_title:!0,sidebar_label:"Color schemes"},i=void 0,s={unversionedId:"plugins/PluginColorSchemes",id:"version-5.8/plugins/PluginColorSchemes",title:"Color schemes plugin",description:"",source:"@site/versioned_docs/version-5.8/plugins/ColorSchemes.md",sourceDirName:"plugins",slug:"/plugins/PluginColorSchemes",permalink:"/Charba-Wiki/docs/5.8/plugins/PluginColorSchemes",draft:!1,tags:[],version:"5.8",frontMatter:{id:"PluginColorSchemes",title:"Color schemes plugin",hide_title:!0,sidebar_label:"Color schemes"},sidebar:"docs",previous:{title:"Crosshair",permalink:"/Charba-Wiki/docs/5.8/plugins/PluginCrosshair"},next:{title:"Datasets items selector",permalink:"/Charba-Wiki/docs/5.8/plugins/PluginDatasetsItemsSelector"}},p={},c=[{value:"Color schemes plugin",id:"color-schemes-plugin",level:2},{value:"Options",id:"options",level:2},{value:"Color scheme",id:"color-scheme",level:2},{value:"Options builder",id:"options-builder",level:2}],h={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"color-schemes-plugin"},"Color schemes plugin"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to use color schemes instead of the single colors for border and background colors of charts.\nIt enables to pick the color combination for charts from the predefined or custom color schemes."),(0,r.kt)("p",null,"This plugin, as singleton, can be set both at global and at chart level."),(0,r.kt)("img",{src:(0,a.Z)("/img/colorSchemes.png")}),(0,r.kt)("p",null,"The implementation is ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/impl/plugins/ColorSchemes.html"},"ColorSchemes")," and can be set as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(ColorSchemes.get());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(ColorSchemes.get());\n")),(0,r.kt)("p",null,"The ID of plugin is ",(0,r.kt)("inlineCode",{parentName:"p"},"charbacolorschemes")," (",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/impl/plugins/ColorSchemes.html#ID"},"ColorSchemes.ID"),")."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,r.kt)("p",null,"In this case you should instantiate a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/impl/plugins/ColorSchemesOptions.html"},"ColorSchemesOptions")," and set it to your chart options as following, setting the color scheme you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nColorSchemesOptions options = new ColorSchemesOptions();\n// sets the color scheme and background opacity\noptions.setScheme(BrewerScheme.PAIRED12);\noptions.setBackgroundColorAlpha(0.5D);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(ColorSchemes.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n")),(0,r.kt)("p",null,"You can also change the default for all charts instances, as following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nColorSchemesOptions options = new ColorSchemesOptions();\n// sets the color scheme and background opacity\noptions.setScheme(BrewerScheme.PAIRED12);\noptions.setBackgroundColorAlpha(0.5D);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(ColorSchemes.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store();\n")),(0,r.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/impl/plugins/ColorSchemesOptionsFactory.html"},"ColorSchemesOptionsFactory")," as static reference inside the ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/impl/plugins/ColorSchemes.html"},"plugin")," which can be used to retrieve the options from chart as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nColorSchemesOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(ColorSchemes.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ColorSchemes.ID, ColorSchemes.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ColorSchemes.FACTORY);\n}\n")),(0,r.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"schemeScope"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/impl/plugins/enums/SchemeScope.html"},"SchemeScope")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SchemeScope.DATASET"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"data"),", the color scheme is applied to the data instead of dataset. This can be set only for ",(0,r.kt)("a",{parentName:"td",href:"../charts/ChartBar"},"BAR")," or ",(0,r.kt)("a",{parentName:"td",href:"../charts/ChartBubble"},"BUBBLE")," charts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"scheme"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/impl/plugins/ColorScheme.html"},"ColorScheme")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BrewerScheme.PAIRED12 - ",(0,r.kt)("img",{src:(0,a.Z)("/img/BrewerScheme-PAIRED12.png")})),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines the color scheme instance to apply")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"backgroundColorAlpha"),(0,r.kt)("td",{parentName:"tr",align:"left"},"double"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.5")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The transparency value for the background color. Must be a number between 0.0 (fully transparent) and 1.0 (no transparency).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reverse"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the order of the colors in the selected scheme is reversed.")))),(0,r.kt)("h2",{id:"color-scheme"},"Color scheme"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides 4 color schemes collection out of the box:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Brewer"),", with a set of color schemes described ",(0,r.kt)("a",{parentName:"li",href:"http://colorbrewer2.org/"},"here"),". Here the complete ",(0,r.kt)("a",{parentName:"li",href:"./tables/ColorSchemeBrewer"},"list"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Office"),", with a set of color schemes of MS Office suite. Here the complete ",(0,r.kt)("a",{parentName:"li",href:"./tables/ColorSchemeOffice"},"list"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tableau"),", with a set of color schemes of Tableau suite. Here the complete ",(0,r.kt)("a",{parentName:"li",href:"./tables/ColorSchemeTableau"},"list"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GWT material"),", with a set of color schemes taken from ",(0,r.kt)("a",{parentName:"li",href:"../coloring/tables/GWTMaterialColors"},"GWT Material color table"),". Here the complete ",(0,r.kt)("a",{parentName:"li",href:"./tables/ColorSchemeGwtMaterial"},"list"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Google Chart"),", with a set of color schemes taken from ",(0,r.kt)("a",{parentName:"li",href:"../coloring/tables/GoogleChartColors"},"Google Chart table color"),".")),(0,r.kt)("p",null,"You can also create your own color schemes, implementing the ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/impl/plugins/ColorScheme.html"},"ColorScheme")," interface."),(0,r.kt)("h2",{id:"options-builder"},"Options builder"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,r.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// creates plugin options by builder\nColorSchemesOptions option = ColorSchemesOptionsBuilder.create()\n    .setScheme(BrewerScheme.PAIRED12)\n    .setBackgroundColorAlpha(0.5D).build();\n// stores options to chart\nchart.getOptions().getPlugins().setOptions(ColorSchemes.ID, option);\n")),(0,r.kt)("p",null,"Creating a color scheme options by ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorSchemesOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorSchemesOptionsBuilder.create(chart)")," it will use the global chart options as default."),(0,r.kt)("admonition",{title:"limitations",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The plugin is not activated for ",(0,r.kt)("a",{parentName:"p",href:"../charts/ChartMeter"},"Meter")," and ",(0,r.kt)("a",{parentName:"p",href:"../charts/ChartGauge"},"Gauge")," charts because they are managing the colors of dataset in different way.")))}m.isMDXComponent=!0}}]);