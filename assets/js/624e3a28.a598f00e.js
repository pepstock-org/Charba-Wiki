"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[99882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,d=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(d,r(r({ref:t},g),{},{components:n})):a.createElement(d,r({ref:t},g))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>g});var a=n(87462),l=(n(67294),n(3905)),i=n(44996);const r={id:"PluginHTMLLegend",title:"HTML legend plugin",hide_title:!0,sidebar_label:"HTML legend"},o=void 0,p={unversionedId:"plugins/PluginHTMLLegend",id:"version-5.7/plugins/PluginHTMLLegend",title:"HTML legend plugin",description:"HTML legend plugin",source:"@site/versioned_docs/version-5.7/plugins/HTMLLegend.md",sourceDirName:"plugins",slug:"/plugins/PluginHTMLLegend",permalink:"/Charba-Wiki/docs/5.7/plugins/PluginHTMLLegend",draft:!1,tags:[],version:"5.7",frontMatter:{id:"PluginHTMLLegend",title:"HTML legend plugin",hide_title:!0,sidebar_label:"HTML legend"},sidebar:"docs",previous:{title:"Datasets items selector",permalink:"/Charba-Wiki/docs/5.7/plugins/PluginDatasetsItemsSelector"},next:{title:"Importing Chart.JS plugins",permalink:"/Charba-Wiki/docs/5.7/plugins/ImportPlugins"}},s={},g=[{value:"HTML legend plugin",id:"html-legend-plugin",level:2},{value:"Options",id:"options",level:2},{value:"Setting HTML text",id:"setting-html-text",level:2},{value:"Item text callback",id:"item-text-callback",level:3},{value:"Title text callback",id:"title-text-callback",level:3},{value:"Options builder",id:"options-builder",level:2}],c={toc:g},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"html-legend-plugin"},"HTML legend plugin"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a plugin implementation to create a legend by HTML content, outside of the canvas element managed by ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),(0,l.kt)("p",null,"The goal is to create a HTML element with all flexibility that HTML elements can provide, like multi lines for legend text, using the chart configuration about the ",(0,l.kt)("a",{parentName:"p",href:"../configuration/Legend"},"legend"),"."),(0,l.kt)("br",null),(0,l.kt)("img",{src:(0,i.Z)("/img/htmlLegendStyle.png")}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"This plugin, as singleton, can be set both at global and at chart level."),(0,l.kt)("p",null,"The implementation is ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/impl/plugins/HtmlLegend.html"},"HtmlLegend")," and can be set as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(HtmlLegend.get());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(HtmlLegend.get());\n")),(0,l.kt)("p",null,"The ID of plugin is ",(0,l.kt)("inlineCode",{parentName:"p"},"charbahtmllegend")," (",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/impl/plugins/HtmlLegend.html#ID"},"HtmlLegend.ID"),")."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,l.kt)("p",null,"In this case you should instantiate a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/impl/plugins/HtmlLegendOptions.html"},"HtmlLegendOptions")," and set it to your chart options as following, setting the color you want:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nHtmlLegendOptions options = new HtmlLegendOptions();\n// Set "maximum legend columns" overriding the default one\noptions.setMaximumLegendColumns(5);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(HtmlLegend.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n')),(0,l.kt)("p",null,"You can also change the default for all charts instances, as following"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nHtmlLegendOptions options = new HtmlLegendOptions();\n// Set "maximum legend columns" overriding the default one\noptions.setMaximumLegendColumns(5);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(HtmlLegend.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store();\n')),(0,l.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/impl/plugins/HtmlLegendOptionsFactory.html"},"HtmlLegendOptionsFactory")," as static reference inside the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/impl/plugins/HtmlLegend.html"},"plugin")," which can be used to retrieve the options from chart, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nHtmlLegendOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(HtmlLegend.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(HtmlLegend.ID, HtmlLegend.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(HtmlLegend.FACTORY);\n}\n")),(0,l.kt)("p",null,"The plugin uses the chart configuration about the ",(0,l.kt)("a",{parentName:"p",href:"../configuration/Legend"},"legend")," to build the HTML legend, therefore you can configure the legend as in all the other charts."),(0,l.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"display"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"if ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the HTML legend is showed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cursorPointer"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/enums/CursorType.html"},"CursorType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"CursorType.POINTER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Cursor style when the legend is hovered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"maxLegendColumns"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Integer.MAX_VALUE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Amount of legend items to show in the same row before creating new row.")))),(0,l.kt)("admonition",{title:"limitations",type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/enums/Position.html#LEFT"},"Position.LEFT")," is ignored and managed as ",(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/enums/Position.html#TOP"},"Position.TOP"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/enums/Position.html#RIGHT"},"Position.RIGHT")," is ignored and managed as ",(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/enums/Position.html#BOTTOM"},"Position.BOTTOM"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"),"s provided by a dataset callback are ignored."))),(0,l.kt)("h2",{id:"setting-html-text"},"Setting HTML text"),(0,l.kt)("p",null,"The plugin allows to the user 2 ways to apply own behavior on legend text creation in order to customize the legend text:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"implements a ",(0,l.kt)("a",{parentName:"li",href:"../configuration/Legend#generatelabels-callback"},"LegendLabelsCallback")," at chart level. The interface can provide ",(0,l.kt)("inlineCode",{parentName:"li"},"setText(SafeHtml)")," method to set or override the value of legend item as HTML."),(0,l.kt)("li",{parentName:"ol"},"implements a ",(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/callbacks/HtmlLegendTextCallback.html"},"HtmlLegendTextCallback"),", see below.")),(0,l.kt)("p",null,"By default, if the legend text (provided by labels or dataset label) contains ",(0,l.kt)("inlineCode",{parentName:"p"},"\\n"),", the legend text will be split having a multi-line legend text."),(0,l.kt)("h3",{id:"item-text-callback"},"Item text callback"),(0,l.kt)("p",null,"The plugin provides a callback to change the value of legend text which can return a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/safehtml/SafeHtml.html"},"SafeHtml")," to apply as legend text."),(0,l.kt)("img",{src:(0,i.Z)("/img/htmlLegendSplit.png")}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nHtmlLegendOptions options = new HtmlLegendOptions();\n// sets callback\noptions.setLegendItemCallback(new HtmlLegendItemCallback(){\n\n    /**\n     * Returns a text of legend for a specific item, as HTML\n     * \n     * @param chart chart instance\n     * @param item legend item which represents the text to create\n     * @param currentText current text provided by legend labels callback.\n     * @return HTML legend representation as SafeHTML\n     */\n     @Override\n     public SafeHtml generateText(IsChart chart, LegendLabelItem item, String currentText){\n        // logic\n        return myItemTextAsHtml;\n    }\n\n});\n")),(0,l.kt)("h3",{id:"title-text-callback"},"Title text callback"),(0,l.kt)("p",null,"The plugin provides a callback to change the value of legend title text which can return a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/safehtml/SafeHtml.html"},"SafeHtml")," to apply as legend title text."),(0,l.kt)("img",{src:(0,i.Z)("/img/htmlLegendTitle.png")}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nHtmlLegendOptions options = new HtmlLegendOptions();\n// sets callback\noptions.setLegendTitleCallback(new HtmlLegendTitleCallback(){\n\n    /**\n     * Returns a text of legend for the legend title, as HTML\n     * \n     * @param chart chart instance\n     * @param item legend title instance\n     * @param currentText current text provided by legend title\n     * @return HTML legend title representation as SafeHTML\n     */\n     @Override\n    public SafeHtml generateText(IsChart chart, LegendTitle item, String currentText){\n        // logic\n        return myTitleTextAsHtml;\n    }\n\n});\n")),(0,l.kt)("h2",{id:"options-builder"},"Options builder"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,l.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nHtmlLegendOptions options = HtmlLegendOptionsBuilder.create()\n    .setDisplay(true)\n    .setMaximumLegendColumns(6)\n    .build();\n// sets options\nchart.getOptions().getPlugins().setOptions(HtmlLegend.ID, options);\n")),(0,l.kt)("p",null,"Creating a build by ",(0,l.kt)("inlineCode",{parentName:"p"},"HtmlLegendOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,l.kt)("inlineCode",{parentName:"p"},"HtmlLegendOptionsBuilder.create(chart)")," it will use the global chart options as default."))}m.isMDXComponent=!0}}]);