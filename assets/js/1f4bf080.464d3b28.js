"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[29225],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>d});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},g=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),c=s(a),d=l,m=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(m,i(i({ref:e},g),{},{components:a})):n.createElement(m,i({ref:e},g))}));function d(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},75658:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var n=a(87462),l=(a(67294),a(3905)),r=a(44996);const i={id:"Labels",title:"Labels plugin",hide_title:!0,sidebar_label:"Labels"},o=void 0,p={unversionedId:"Labels",id:"version-3.3/Labels",title:"Labels plugin",description:"",source:"@site/versioned_docs/version-3.3/Labels.md",sourceDirName:".",slug:"/Labels",permalink:"/Charba-Wiki/docs/3.3/Labels",draft:!1,tags:[],version:"3.3",frontMatter:{id:"Labels",title:"Labels plugin",hide_title:!0,sidebar_label:"Labels"},sidebar:"version-3.3/docs",previous:{title:"DataLabels",permalink:"/Charba-Wiki/docs/3.3/DataLabels"},next:{title:"Zoom",permalink:"/Charba-Wiki/docs/3.3/Zoom"}},s={},g=[{value:"Labels plugin",id:"labels-plugin",level:2},{value:"Activation",id:"activation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Font Color callback",id:"font-color-callback",level:2},{value:"Render callback",id:"render-callback",level:2},{value:"Options builder",id:"options-builder",level:2}],u={toc:g};function c(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"labels-plugin"},"Labels plugin"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/emn178/chartjs-plugin-labels"},"Labels")," which is a light weight plugin to display labels on pie, doughnut and polar area chart (former name was PieceLabel)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," is injecting the ",(0,l.kt)("inlineCode",{parentName:"p"},"chartjs-plugin-labels.min.js"),", the released version ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/emn178/chartjs-plugin-labels/releases/tag/v1.1.0"},"1.1.0"),"."),(0,l.kt)("img",{src:(0,r.Z)("/img/labels.png")}),(0,l.kt)("h2",{id:"activation"},"Activation"),(0,l.kt)("p",null,"The labels plugin is injected directly into document."),(0,l.kt)("p",null,"The plugin ID is a constant everywhere available, ",(0,l.kt)("inlineCode",{parentName:"p"},"LabelsPlugin.ID"),", in ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/labels/LabelsPlugin.html"},"LabelsPlugin")," entry point."),(0,l.kt)("p",null,"This plugin registers itself globally, meaning that once injected, all charts will display labels. In case you want it enabled only for a few charts, you can enable it as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// enabling the plugin without any parameter\n// the plugin is NOT registered to all charts\n// --------------------------------------\nLabelsPlugin.enable();\n\n// --------------------------------------\n// enabling the plugin with `true` parameter\n// the plugin is registered to all charts\n// --------------------------------------\nLabelsPlugin.enable(true)\n")),(0,l.kt)("p",null,"To activate the plugin in a specific chart, it's enough to provide the configuration options (see ",(0,l.kt)("a",{parentName:"p",href:"Labels#configuration"},"below"),") or enabling it by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// enabling the plugin to a chart instance \n// by an options\n// --------------------------------------\nchart.getOptions().getPlugins().setOptions(LabelsPlugin.ID, options);\n\n// --------------------------------------\n// Another way to store the plugin options\n// enabling the plugin to a chart instance \n// --------------------------------------\nchart.getOptions().getPlugins().setOptions(options);\n\n// --------------------------------------\n// enabling the plugin to a chart instance \n// by a boolean using default\n// --------------------------------------\nchart.getOptions().getPlugins().setEnabled(LabelsPlugin.ID, true);\n")),(0,l.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/labels/LabelsOptionsFactory.html"},"LabelsOptionsFactory")," as static reference inside the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/labels/LabelsPlugin.html"},"LabelsPlugin")," entry point which can be used to retrieve the options from chart as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// reads the options from chart\n// --------------------------------------\nLabelsOptions options;\n\nif (chart.getOptions().getPlugins().hasOptions(LabelsPlugin.ID)){\n   // --------------------------------------\n   // retrieve the plugin options by plugin ID\n   // --------------------------------------\n   options = chart.getOptions().getPlugins().getOptions(LabelsPlugin.ID, LabelsPlugin.FACTORY);\n   // --------------------------------------\n   // or retrieve the plugin options without plugin ID\n   // --------------------------------------\n   options = chart.getOptions().getPlugins().getOptions(LabelsPlugin.FACTORY);\n}\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The plugin options can be changed at 2 different levels and are evaluated with the following priority:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"per chart by ",(0,l.kt)("inlineCode",{parentName:"li"},"chart.getOptions().getPlugins().setOptions")," method"),(0,l.kt)("li",{parentName:"ul"},"or globally by ",(0,l.kt)("inlineCode",{parentName:"li"},"Defaults.get().getGlobal().getPlugins().setOptions")," method")),(0,l.kt)("p",null,"The configuration class ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/labels/LabelsOptions.html"},"LabelsOptions")," contains all properties needed to configure the plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// --------------------------------------\n// creating object and setting some properties\n// --------------------------------------\nLabelsOptions options = new LabelsOptions();\noption.setFontColor(HtmlColor.FLORAL_WHITE);\noption.setRender(new RenderCallback() {\n            \n    @Override\n    public String invoke(IsChart chart, RenderItem item) {\n        return "$$ "+ (int)(item.getValue() * item.getPercentage() / 100);\n    }\n});\n')),(0,l.kt)("p",null,"The labels plugin enables to add more than 1 options in order to configure it, by a list of options, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"LabelsOptions option1 = new LabelsOptions();\noption1.setRender(Render.LABEL);\noption1.setFontColor(HtmlColor.BLACK);\noption1.setArc(true);\noption1.setPosition(Position.OUTSIDE);\n\nLabelsOptions option2 = new LabelsOptions();\noption2.setRender(Render.PERCENTAGE);\noption2.setFontColor(HtmlColor.WHITE);\n\nchart.getOptions().getPlugins().setOptions(LabelsPlugin.ID, Arrays.asList(option1, option2));\n")),(0,l.kt)("p",null,"The complete options are described by following table:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Callback"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"render"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/labels/enums/Render.html"},"Render")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/labels/callbacks/RenderCallback.html"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"Render.PERCENTAGE"),(0,l.kt)("td",{parentName:"tr",align:null},"Value to render")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"precision"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Precision for percentage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showZero"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Identifies whether or not labels of value 0 are displayed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontSize"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontSize--"},"defaultFontSize")),(0,l.kt)("td",{parentName:"tr",align:null},"Font size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/labels/callbacks/FontColorCallback.html"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontColorAsString--"},"defaultFontColor")),(0,l.kt)("td",{parentName:"tr",align:null},"Font color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontStyle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontStyle--"},"defaultFontStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Font style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontFamily"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontFamily--"},"defaultFontFamily")),(0,l.kt)("td",{parentName:"tr",align:null},"Font family")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"textShadow"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Draw text shadows under labels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shadowBlur"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Text shadow intensity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shadowOffsetX"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Text shadow X offset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shadowOffsetY"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Text shadow Y offset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shadowColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"rgba(0,0,0,0.3)"),(0,l.kt)("td",{parentName:"tr",align:null},"Text shadow color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arc"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Draw label in arc. Bar chart ignores this")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/labels/enums/Position.html"},"Position")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Position.DEFAULT"),(0,l.kt)("td",{parentName:"tr",align:null},"Position to draw label. Bar chart ignores this")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"overlap"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Draw label even it's overlap. Bar chart ignores this")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showActualPercentages"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"images"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html"},"Img"),"[]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"Set images when ",(0,l.kt)("inlineCode",{parentName:"td"},"render")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"image"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outsidePadding"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Add padding when ",(0,l.kt)("inlineCode",{parentName:"td"},"position")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"outside"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"textMargin"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"add margin of text when ",(0,l.kt)("inlineCode",{parentName:"td"},"position")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"outside")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"border"))))),(0,l.kt)("h2",{id:"font-color-callback"},"Font Color callback"),(0,l.kt)("p",null,"The font color property can be set by ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/labels/callbacks/FontColorCallback.html"},"callback"),", as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"DataLabelsOptions options = new DataLabelsOptions();\noption.setFontColor(new FontColorCallback() {\n            \n    @Override\n    public IsColor invoke(IsChart chart, FontColorItem item) {\n        return item.getDataItem().getValue() > 25 ? HtmlColor.Red : HtmlColor.Black;\n    }\n});\n")),(0,l.kt)("p",null,"The callback is receiving the chart instance and item instance with all information in order to assign the color."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/labels/FontColorItem.html"},"FontColorItem")," argument exposes the value to render by a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/items/DataItem.html"},"DataItem")," which is a wrapper to the possible values that a dataset can contain:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"doubles"),(0,l.kt)("li",{parentName:"ul"},"strings, available only for line dataset instances"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/FloatingData.html"},"FloatingData"),", available only for bar dataset instances")),(0,l.kt)("h2",{id:"render-callback"},"Render callback"),(0,l.kt)("p",null,"The render property can be set by ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/labels/callbacks/RenderCallback.html"},"callback"),", as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'LabelsOptions option = new LabelsOptions();\noption.setRender(new RenderCallback() {\n            \n    @Override\n    public String invoke(IsChart chart, RenderItem item) {\n        return "$$ "+ (int)(item.getDataItem().getValue() * item.getPercentage() / 100);\n    }\n});\n')),(0,l.kt)("p",null,"The callback is receiving the chart instance and item instance with all information in order to assign the render."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/labels/RenderItem.html"},"RenderItem")," argument exposes the value to render by a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/items/DataItem.html"},"DataItem")," which is a wrapper to the possible values that a dataset can contain:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"doubles"),(0,l.kt)("li",{parentName:"ul"},"strings, available only for line dataset instances"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/FloatingData.html"},"FloatingData"),", available only for bar dataset instances")),(0,l.kt)("h2",{id:"options-builder"},"Options builder"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,l.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"LabelsOptions options = LabelsOptionsBuilder.create().setRender(Render.PERCENTAGE).setFontColor(HtmlColor.WHITE).setPrecision(2).build();\nchart.getOptions().getPlugins().setOptions(LabelsPlugin.ID, options);\n")),(0,l.kt)("p",null,"Creating a build by ",(0,l.kt)("inlineCode",{parentName:"p"},"LabelsOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,l.kt)("inlineCode",{parentName:"p"},"LabelsOptionsBuilder.create(chart)")," it will use the global chart options as default."))}c.isMDXComponent=!0}}]);