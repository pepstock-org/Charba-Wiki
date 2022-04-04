"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[43904],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||h[u]||a;return n?o.createElement(g,l(l({ref:t},c),{},{components:n})):o.createElement(g,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),l=n(44996),i=["components"],s={id:"PluginColorSchemes",title:"Color schemes plugin",hide_title:!0,sidebar_label:"Color schemes"},p=void 0,c={unversionedId:"plugins/PluginColorSchemes",id:"version-4.2/plugins/PluginColorSchemes",title:"Color schemes plugin",description:"",source:"@site/versioned_docs/version-4.2/plugins/ColorSchemes.md",sourceDirName:"plugins",slug:"/plugins/PluginColorSchemes",permalink:"/Charba-Wiki/docs/4.2/plugins/PluginColorSchemes",tags:[],version:"4.2",frontMatter:{id:"PluginColorSchemes",title:"Color schemes plugin",hide_title:!0,sidebar_label:"Color schemes"},sidebar:"version-4.2/docs",previous:{title:"Chart cursor",permalink:"/Charba-Wiki/docs/4.2/plugins/PluginPointer"},next:{title:"Datasets items selector",permalink:"/Charba-Wiki/docs/4.2/plugins/PluginDatasetsItemsSelector"}},h={},m=[{value:"Color schemes plugin",id:"color-schemes-plugin",level:2},{value:"Options",id:"options",level:2},{value:"Color scheme",id:"color-scheme",level:2},{value:"Options builder",id:"options-builder",level:2}],u={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"color-schemes-plugin"},"Color schemes plugin"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to use color schemes instead of the single colors for border and background colors of charts.\nIt enables to pick the color combination for charts from the predefined or custom color schemes."),(0,a.kt)("p",null,"This plugin, as singleton, can be set both at global and at chart level."),(0,a.kt)("img",{src:(0,l.Z)("/img/colorSchemes.png")}),(0,a.kt)("p",null,"The implementation is ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/ColorSchemes.html"},"ColorSchemes")," and can be set as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(ColorSchemes.get());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(ColorSchemes.get());\n")),(0,a.kt)("p",null,"The ID of plugin is ",(0,a.kt)("inlineCode",{parentName:"p"},"charbacolorschemes")," (",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/ColorSchemes.html#ID"},"ColorSchemes.ID"),")."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,a.kt)("p",null,"In this case you should instantiate a ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/ColorSchemesOptions.html"},"ColorSchemesOptions")," and set it to your chart options as following, setting the color scheme you want:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nColorSchemesOptions options = new ColorSchemesOptions();\n// sets the color scheme and background opacity\noptions.setScheme(BrewerScheme.PAIRED12);\noptions.setBackgroundColorAlpha(0.5D);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(ColorSchemes.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n")),(0,a.kt)("p",null,"You can also change the default for all charts instances, as following"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nColorSchemesOptions options = new ColorSchemesOptions();\n// sets the color scheme and background opacity\noptions.setScheme(BrewerScheme.PAIRED12);\noptions.setBackgroundColorAlpha(0.5D);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(ColorSchemes.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store();\n")),(0,a.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/ColorSchemesOptionsFactory.html"},"ColorSchemesOptionsFactory")," as static reference inside the ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/ColorSchemes.html"},"plugin")," which can be used to retrieve the options from chart as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nColorSchemesOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(ColorSchemes.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ColorSchemes.ID, ColorSchemes.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(ColorSchemes.FACTORY);\n}\n")),(0,a.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"schemeScope"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/enums/SchemeScope.html"},"SchemeScope")),(0,a.kt)("td",{parentName:"tr",align:"left"},"SchemeScope.DATASET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If set to ",(0,a.kt)("inlineCode",{parentName:"td"},"data"),", the color scheme is applied to the data instead of dataset. This can be set only for ",(0,a.kt)("a",{parentName:"td",href:"../charts/ChartBar"},"BAR")," or ",(0,a.kt)("a",{parentName:"td",href:"../charts/ChartBubble"},"BUBBLE")," charts.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"scheme"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/ColorScheme.html"},"ColorScheme")),(0,a.kt)("td",{parentName:"tr",align:"left"},"BrewerScheme.PAIRED12 - ",(0,a.kt)("img",{src:(0,l.Z)("/img/BrewerScheme-PAIRED12.png")})),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines the color scheme instance to apply")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"backgroundColorAlpha"),(0,a.kt)("td",{parentName:"tr",align:"left"},"double"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"0.5")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The transparency value for the background color. Must be a number between 0.0 (fully transparent) and 1.0 (no transparency).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"reverse"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:"left"},"If set to ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the order of the colors in the selected scheme is reversed.")))),(0,a.kt)("h2",{id:"color-scheme"},"Color scheme"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," provides 4 color schemes collection out of the box:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Brewer"),", with a set of color schemes described ",(0,a.kt)("a",{parentName:"li",href:"http://colorbrewer2.org/"},"here"),". Here the complete ",(0,a.kt)("a",{parentName:"li",href:"./tables/ColorSchemeBrewer"},"list"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Office"),", with a set of color schemes of MS Office suite. Here the complete ",(0,a.kt)("a",{parentName:"li",href:"./tables/ColorSchemeOffice"},"list"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tableau"),", with a set of color schemes of Tableau suite. Here the complete ",(0,a.kt)("a",{parentName:"li",href:"./tables/ColorSchemeTableau"},"list"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GWT material"),", with a set of color schemes taken from ",(0,a.kt)("a",{parentName:"li",href:"../coloring/tables/GWTMaterialColors"},"GWT Material color table"),". Here the complete ",(0,a.kt)("a",{parentName:"li",href:"./tables/ColorSchemeGwtMaterial"},"list"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Google Chart"),", with a set of color schemes taken from ",(0,a.kt)("a",{parentName:"li",href:"../coloring/tables/GoogleChartColors"},"Google Chart table color"),".")),(0,a.kt)("p",null,"You can also create your own color schemes, implementing the ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/plugins/ColorScheme.html"},"ColorScheme")," interface."),(0,a.kt)("h2",{id:"options-builder"},"Options builder"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,a.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// creates plugin options by builder\nColorSchemesOptions option = ColorSchemesOptionsBuilder.create()\n    .setScheme(BrewerScheme.PAIRED12)\n    .setBackgroundColorAlpha(0.5D).build();\n// stores options to chart\nchart.getOptions().getPlugins().setOptions(ColorSchemes.ID, option);\n")),(0,a.kt)("p",null,"Creating a color scheme options by ",(0,a.kt)("inlineCode",{parentName:"p"},"ColorSchemesOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,a.kt)("inlineCode",{parentName:"p"},"ColorSchemesOptionsBuilder.create(chart)")," it will use the global chart options as default."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"limitations")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The plugin is not activated for ",(0,a.kt)("a",{parentName:"p",href:"../charts/ChartMeter"},"Meter")," and ",(0,a.kt)("a",{parentName:"p",href:"../charts/ChartGauge"},"Gauge")," charts because they are managing the colors of dataset in different way."))))}g.isMDXComponent=!0}}]);