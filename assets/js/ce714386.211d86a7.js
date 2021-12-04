"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[7234],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return m}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,d=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(d,i(i({ref:t},g),{},{components:n})):a.createElement(d,i({ref:t},g))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return l}})},44996:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return i}});var a=n(52263),l=n(13919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,o=void 0!==i&&i,p=r.absolute,s=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,l.b)(n))return n;if(o)return t+n;var g=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+g:g}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},45698:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return g},toc:function(){return c},default:function(){return m}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=n(44996),o=["components"],p={id:"PluginHTMLLegend",title:"HTML legend plugin",hide_title:!0,sidebar_label:"HTML legend"},s=void 0,g={unversionedId:"plugins/PluginHTMLLegend",id:"version-4.0/plugins/PluginHTMLLegend",isDocsHomePage:!1,title:"HTML legend plugin",description:"HTML legend plugin",source:"@site/versioned_docs/version-4.0/plugins/HTMLLegend.md",sourceDirName:"plugins",slug:"/plugins/PluginHTMLLegend",permalink:"/Charba-Wiki/docs/4.0/plugins/PluginHTMLLegend",tags:[],version:"4.0",frontMatter:{id:"PluginHTMLLegend",title:"HTML legend plugin",hide_title:!0,sidebar_label:"HTML legend"},sidebar:"version-4.0/docs",previous:{title:"Datasets items selector",permalink:"/Charba-Wiki/docs/4.0/plugins/PluginDatasetsItemsSelector"},next:{title:"Importing Chart.JS plugins",permalink:"/Charba-Wiki/docs/4.0/plugins/ImportPlugins"}},c=[{value:"HTML legend plugin",id:"html-legend-plugin",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Setting HTML text",id:"setting-html-text",children:[{value:"Item text callback",id:"item-text-callback",children:[],level:3},{value:"Title text callback",id:"title-text-callback",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"html-legend-plugin"},"HTML legend plugin"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides a plugin implementation to create a legend by HTML content, outside of the canvas element managed by ",(0,r.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),(0,r.kt)("p",null,"The goal is to create a HTML element with all flexibility that HTML elements can provide, like multi lines for legend text, using the chart configuration about the ",(0,r.kt)("a",{parentName:"p",href:"../configuration/Legend"},"legend"),"."),(0,r.kt)("br",null),(0,r.kt)("img",{src:(0,i.Z)("/img/htmlLegendStyle.png")}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"This plugin, as singleton, can be set both at global and at chart level."),(0,r.kt)("p",null,"The implementation is ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/HtmlLegend.html"},"HtmlLegend")," and can be set as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(HtmlLegend.get());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(HtmlLegend.get());\n")),(0,r.kt)("p",null,"The ID of plugin is ",(0,r.kt)("inlineCode",{parentName:"p"},"charbahtmllegend")," (",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/HtmlLegend.html#ID"},"HtmlLegend.ID"),")."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,r.kt)("p",null,"In this case you should instantiate a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/HtmlLegendOptions.html"},"HtmlLegendOptions")," and set it to your chart options as following, setting the color you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nHtmlLegendOptions options = new HtmlLegendOptions();\n// Set "maximum legend columns" overriding the default one\noptions.setMaximumLegendColumns(5);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(HtmlLegend.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n')),(0,r.kt)("p",null,"You can also change the default for all charts instances, as following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nHtmlLegendOptions options = new HtmlLegendOptions();\n// Set "maximum legend columns" overriding the default one\noptions.setMaximumLegendColumns(5);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(HtmlLegend.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store();\n')),(0,r.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/HtmlLegendOptionsFactory.html"},"HtmlLegendOptionsFactory")," as static reference inside the ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/HtmlLegend.html"},"plugin")," which can be used to retrieve the options from chart, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nHtmlLegendOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(HtmlLegend.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(HtmlLegend.ID, HtmlLegend.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(HtmlLegend.FACTORY);\n}\n")),(0,r.kt)("p",null,"The plugin uses the chart configuration about the ",(0,r.kt)("a",{parentName:"p",href:"../configuration/Legend"},"legend")," to build the HTML legend, therefore you can configure the legend as in all the other charts."),(0,r.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"display"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"if ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the HTML legend is showed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursorPointer"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/enums/CursorType.html"},"CursorType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"CursorType.POINTER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cursor style when the legend is hovered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxLegendColumns"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer.MAX_VALUE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of legend items to show in the same row before creating new row.")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"limitations")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/Position.html#LEFT"},"Position.LEFT")," is ignored and managed as ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/Position.html#TOP"},"Position.TOP"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/Position.html#RIGHT"},"Position.RIGHT")," is ignored and managed as ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/Position.html#BOTTOM"},"Position.BOTTOM"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"),"s provided by a dataset callback are ignored.")))),(0,r.kt)("h2",{id:"setting-html-text"},"Setting HTML text"),(0,r.kt)("p",null,"The plugin allows to the user 2 ways to apply own behavior on legend text creation in order to customize the legend text:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"implements a ",(0,r.kt)("a",{parentName:"li",href:"../configuration/Legend#generatelabels-callback"},"LegendLabelsCallback")," at chart level. The interface can provide ",(0,r.kt)("inlineCode",{parentName:"li"},"setText(SafeHtml)")," method to set or override the value of legend item as HTML."),(0,r.kt)("li",{parentName:"ol"},"implements a ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/HtmlLegendTextCallback.html"},"HtmlLegendTextCallback"),", see below.")),(0,r.kt)("p",null,"By default, if the legend text (provided by labels or dataset label) contains ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),", the legend text will be split having a multi-line legend text."),(0,r.kt)("h3",{id:"item-text-callback"},"Item text callback"),(0,r.kt)("p",null,"The plugin provides a callback to change the value of legend text which can return a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/safehtml/SafeHtml.html"},"SafeHtml")," to apply as legend text."),(0,r.kt)("img",{src:(0,i.Z)("/img/htmlLegendSplit.png")}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nHtmlLegendOptions options = new HtmlLegendOptions();\n// sets callback\noptions.setLegendItemCallback(new HtmlLegendItemCallback(){\n\n    /**\n     * Returns a text of legend for a specific item, as HTML\n     * \n     * @param chart chart instance\n     * @param item legend item which represents the text to create\n     * @param currentText current text provided by legend labels callback.\n     * @return HTML legend representation as SafeHTML\n     */\n     @Override\n     public SafeHtml generateText(IsChart chart, LegendLabelItem item, String currentText){\n        // logic\n        return myItemTextAsHtml;\n    }\n\n});\n")),(0,r.kt)("h3",{id:"title-text-callback"},"Title text callback"),(0,r.kt)("p",null,"The plugin provides a callback to change the value of legend title text which can return a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/safehtml/SafeHtml.html"},"SafeHtml")," to apply as legend title text."),(0,r.kt)("img",{src:(0,i.Z)("/img/htmlLegendTitle.png")}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nHtmlLegendOptions options = new HtmlLegendOptions();\n// sets callback\noptions.setLegendTitleCallback(new HtmlLegendTitleCallback(){\n\n    /**\n     * Returns a text of legend for the legend title, as HTML\n     * \n     * @param chart chart instance\n     * @param item legend title instance\n     * @param currentText current text provided by legend title\n     * @return HTML legend title representation as SafeHTML\n     */\n     @Override\n    public SafeHtml generateText(IsChart chart, LegendTitle item, String currentText){\n        // logic\n        return myTitleTextAsHtml;\n    }\n\n});\n")))}m.isMDXComponent=!0}}]);