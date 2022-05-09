"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[20634],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||h[m]||a;return n?o.createElement(g,l(l({ref:t},c),{},{components:n})):o.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91751:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),l=n(44996),i=["components"],s={id:"PluginColorSchemes",title:"Color schemes plugin",hide_title:!0,sidebar_label:"Color schemes"},p=void 0,c={unversionedId:"PluginColorSchemes",id:"version-3.3/PluginColorSchemes",title:"Color schemes plugin",description:"",source:"@site/versioned_docs/version-3.3/PluginColorSchemes.md",sourceDirName:".",slug:"/PluginColorSchemes",permalink:"/Charba-Wiki/docs/3.3/PluginColorSchemes",draft:!1,tags:[],version:"3.3",frontMatter:{id:"PluginColorSchemes",title:"Color schemes plugin",hide_title:!0,sidebar_label:"Color schemes"},sidebar:"version-3.3/docs",previous:{title:"Chart cursor",permalink:"/Charba-Wiki/docs/3.3/PluginPointer"},next:{title:"Datasets items selector",permalink:"/Charba-Wiki/docs/3.3/PluginDatasetsItemsSelector"}},h={},u=[{value:"Color schemes plugin",id:"color-schemes-plugin",level:2},{value:"Color scheme",id:"color-scheme",level:2},{value:"Options builder",id:"options-builder",level:2},{value:"Legend",id:"legend",level:2},{value:"Limitations",id:"limitations",level:2}],m={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"color-schemes-plugin"},"Color schemes plugin"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to use color schemes instead of the single colors for border and background colors of charts.\nIt enables to pick the color combination for charts from the predefined or custom color schemes."),(0,a.kt)("p",null,"This plugin, as singleton, can be set both at global and at chart level."),(0,a.kt)("img",{src:(0,l.Z)("/img/colorSchemes.png")}),(0,a.kt)("p",null,"The implementation is ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorSchemes.html"},"ColorSchemes")," and can be set as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// GLOBAL\nDefaults.get().getPlugins().register(ColorSchemes.get());\n\n// INLINE\nchart.getPlugins().add(ColorSchemes.get());\n")),(0,a.kt)("p",null,"The ID of plugin is ",(0,a.kt)("inlineCode",{parentName:"p"},"charbacolorschemes")," (",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorSchemes.html#ID"},"ColorSchemes.ID"),")."),(0,a.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,a.kt)("p",null,"In this case you should instantiate a ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorSchemesOptions.html"},"ColorSchemesOptions")," and set it to your chart options as following, setting the color scheme you want:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// at global level\nColorSchemesOptions option = new ColorSchemesOptions();\noptions.setScheme(BrewerScheme.PAIRED12);\noptions.setBackgroundColorAlpha(0.5D);\n\n// --------------------------------------\n// store the plugin options by plugin ID\n// --------------------------------------\nDefault.get().getGlobal().getPlugins().setOptions(ColorSchemes.ID, option);\n// --------------------------------------\n// or store the plugin options without plugin ID\n// --------------------------------------\nDefault.get().getGlobal().getPlugins().setOptions(option);\n\n// at chart level\nColorSchemesOptions option = new ColorSchemesOptions();\noptions.setScheme(BrewerScheme.PAIRED12);\noptions.setBackgroundColorAlpha(0.5D);\n\n// --------------------------------------\n// store the plugin options by plugin ID\n// --------------------------------------\nchart.getOptions().getPlugins().setOptions(ColorSchemes.ID, option);\n// --------------------------------------\n// or store the plugin options without plugin ID\n// --------------------------------------\nchart.getOptions().getPlugins().setOptions(option);\n")),(0,a.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorSchemesOptionsFactory.html"},"ColorSchemesOptionsFactory")," as static reference inside the ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorSchemes.html"},"plugin")," which can be used to retrieve the options from chart as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// reads the options from chart\n// --------------------------------------\nColorSchemesOptions option;\n\nif (chart.getOptions().getPlugins().hasOptions(ColorSchemes.ID)){\n   // --------------------------------------\n   // retrieve the plugin options by plugin ID\n   // --------------------------------------\n   options = chart.getOptions().getPlugins().getOptions(ColorSchemes.ID, ColorSchemes.FACTORY);\n   // --------------------------------------\n   // or retrieve the plugin options without plugin ID\n   // --------------------------------------\n   options = chart.getOptions().getPlugins().getOptions(ColorSchemes.FACTORY);\n}\n")),(0,a.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"schemeScope"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/enums/SchemeScope.html"},"SchemeScope")),(0,a.kt)("td",{parentName:"tr",align:null},"SchemeScope.DATASET"),(0,a.kt)("td",{parentName:"tr",align:null},"if set to ",(0,a.kt)("inlineCode",{parentName:"td"},"data"),", the color scheme is applied to the data instead of dataset. This can be set only for BAR or BUBBLE charts.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scheme"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorScheme.html"},"ColorScheme")),(0,a.kt)("td",{parentName:"tr",align:null},"BrewerScheme.PAIRED12"),(0,a.kt)("td",{parentName:"tr",align:null},"defines the name of color scheme to apply")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"backgroundColorAlpha"),(0,a.kt)("td",{parentName:"tr",align:null},"double"),(0,a.kt)("td",{parentName:"tr",align:null},"0.5"),(0,a.kt)("td",{parentName:"tr",align:null},"The transparency value for the background color. Must be a number between 0.0 (fully transparent) and 1.0 (no transparency).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"if set to ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the order of the colors in the selected scheme is reversed.")))),(0,a.kt)("h2",{id:"color-scheme"},"Color scheme"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," provides 4 color schemes collection out of the box:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Brewer"),", with a set of color schemes described ",(0,a.kt)("a",{parentName:"li",href:"http://colorbrewer2.org/"},"here"),". Here the complete ",(0,a.kt)("a",{parentName:"li",href:"ColorSchemeBrewer"},"list"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Office"),", with a set of color schemes of MS Office suite. Here the complete ",(0,a.kt)("a",{parentName:"li",href:"ColorSchemeOffice"},"list"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tableau"),", with a set of color schemes of Tableau suite. Here the complete ",(0,a.kt)("a",{parentName:"li",href:"ColorSchemeTableau"},"list"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GWT material"),", with a set of color schemes taken from ",(0,a.kt)("a",{parentName:"li",href:"GWTMaterialColors"},"GWT Material color table"),". Here the complete ",(0,a.kt)("a",{parentName:"li",href:"ColorSchemeGwtMaterial"},"list"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Google Chart"),", with a set of color schemes taken from ",(0,a.kt)("a",{parentName:"li",href:"GoogleChartColors"},"Google Chart table color"),".")),(0,a.kt)("p",null,"You can also create your own color schemes, implementing the ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ColorScheme.html"},"ColorScheme")," interface."),(0,a.kt)("h2",{id:"options-builder"},"Options builder"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,a.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ColorSchemesOptions option = ColorSchemesOptionsBuilder.create().setScheme(BrewerScheme.PAIRED12).setBackgroundColorAlpha(0.5D).build();\n\nchart.getOptions().getPlugins().setOptions(ColorSchemes.ID, option);\n")),(0,a.kt)("p",null,"Creating a color scheme options by ",(0,a.kt)("inlineCode",{parentName:"p"},"ColorSchemesOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,a.kt)("inlineCode",{parentName:"p"},"ColorSchemesOptionsBuilder.create(chart)")," it will use the global chart options as default."),(0,a.kt)("h2",{id:"legend"},"Legend"),(0,a.kt)("p",null,"The plugin activates a ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/LegendLabelsCallback.html"},"LegendLabelsCallback")," instance which is managing the legend. This is because changing color scheme on a chart already initialized, the  out of the box legend does not reflect new color scheme."),(0,a.kt)("p",null,"This callback implementation is wrapping whatever legend labels callback implementation already set by user."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"The plugin is not activated for ",(0,a.kt)("a",{parentName:"p",href:"ChartMeter"},"Meter")," and ",(0,a.kt)("a",{parentName:"p",href:"ChartGauge"},"Gauge")," charts because they are managing the colors of dataset in different way."))}g.isMDXComponent=!0}}]);