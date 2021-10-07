"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[7805],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),g=p(n),u=r,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||l;return n?a.createElement(m,o(o({ref:e},c),{},{components:n})):a.createElement(m,o({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3919:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},4996:function(t,e,n){n.d(e,{C:function(){return l},Z:function(){return o}});var a=n(2263),r=n(3919);function l(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var l=void 0===a?{}:a,o=l.forcePrependBaseUrl,i=void 0!==o&&o,s=l.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return e+n;var c=n.startsWith(e)?n:e+n.replace(/^\//,"");return p?t+c:c}(l,n,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},9960:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(4996),i=["components"],s={id:"PluginDatasetsItemsSelector",title:"Datasets items selector plugin",hide_title:!0,sidebar_label:"Datasets items selector"},p=void 0,c={unversionedId:"PluginDatasetsItemsSelector",id:"version-3.3/PluginDatasetsItemsSelector",isDocsHomePage:!1,title:"Datasets items selector plugin",description:"Datasets items selector plugin",source:"@site/versioned_docs/version-3.3/PluginDatasetsItemsSelector.md",sourceDirName:".",slug:"/PluginDatasetsItemsSelector",permalink:"/Charba-Wiki/docs/3.3/PluginDatasetsItemsSelector",tags:[],version:"3.3",frontMatter:{id:"PluginDatasetsItemsSelector",title:"Datasets items selector plugin",hide_title:!0,sidebar_label:"Datasets items selector"},sidebar:"version-3.3/docs",previous:{title:"Color schemes",permalink:"/Charba-Wiki/docs/3.3/PluginColorSchemes"},next:{title:"HTML legend",permalink:"/Charba-Wiki/docs/3.3/PluginHTMLLegend"}},d=[{value:"Datasets items selector plugin",id:"datasets-items-selector-plugin",children:[]},{value:"Clear selection element",id:"clear-selection-element",children:[]},{value:"Events",id:"events",children:[]},{value:"Selection reset",id:"selection-reset",children:[]},{value:"Options builder",id:"options-builder",children:[{value:"Constraints",id:"constraints",children:[]}]}],g={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"datasets-items-selector-plugin"},"Datasets items selector plugin"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to select an area on the chart which represents a set of datasets items of the chart and inform you by event about the range of datasets items selected."),(0,l.kt)("p",null,"The goal is to enable zooming or drill down/up of the data on chart instance."),(0,l.kt)("img",{src:(0,o.Z)("/img/datasetsItemsSelector.png")}),(0,l.kt)("p",null,"It works ONLY with chart ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/ChartType.html"},"line")," and ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/ChartType.html"},"bar")," types."),(0,l.kt)("p",null,"This plugin, as singleton, can be set both at global and at chart level."),(0,l.kt)("p",null,"The implementation is ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html"},"DatasetsItemsSelector")," and can be set as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// GLOBAL\nDefaults.get().getPlugins().register(DatasetsItemsSelector.get());\n\n// INLINE\nchart.getPlugins().add(DatasetsItemsSelector.get());\n")),(0,l.kt)("p",null,"The ID of plugin is ",(0,l.kt)("inlineCode",{parentName:"p"},"charbadatasetsitemsselector")," (",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html#ID"},"DatasetsItemsSelector.ID"),")."),(0,l.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,l.kt)("p",null,"In this case you should instantiate a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptions.html"},"DatasetsItemsSelectorOptions")," and set it to your chart options as following, setting the color you want:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// INLINE\n// Set "green" by HtmlColor\nDatasetsItemsSelectorOptions option = new DatasetsItemsSelectorOptions();\noption.setColor(HtmlColor.GREEN);\n\nchart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, option);\n\n// GLOBAL\n// Set "green" by HtmlColor\nDatasetsItemsSelectorOptions option = new DatasetsItemsSelectorOptions();\noption.setColor(HtmlColor.GREEN);\n\nDefaults.get().getGlobal().getPlugins().setOptions(DatasetsItemsSelector.ID, option);\n')),(0,l.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptionsFactory.html"},"DatasetsItemsSelectorOptionsFactory")," as static reference inside the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html"},"plugin")," which can be used to retrieve the options from chart, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// INLINE\n// reads the options from chart\nDatasetsItemsSelectorOptions option;\nif (chart.getOptions().getPlugins().hasOptions(DatasetsItemsSelector.ID)){\n   options = chart.getOptions().getPlugins().getOptions(DatasetsItemsSelector.ID, DatasetsItemsSelector.FACTORY);\n}\n\n// GLOBAL\n// reads the options from global options\nDatasetsItemsSelectorOptions option;\nif (Defaults.get().getGlobal().getPlugins().hasOptions(DatasetsItemsSelector.ID)){\n   options = Defaults.get().getGlobal().getPlugins().getOptions(DatasetsItemsSelector.ID, DatasetsItemsSelector.FACTORY);\n}\n")),(0,l.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"color"),(0,l.kt)("td",{parentName:"tr",align:null},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null},"GwtMaterialColor ORANGE_LIGHTEN_3.alpha(0.3D)"),(0,l.kt)("td",{parentName:"tr",align:null},"The color of selected area on chart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xAxisID"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID"},"Scales.DEFAULT_X_AXIS_ID")),(0,l.kt)("td",{parentName:"tr",align:null},"the ID of the x axis (cartesian category or time axis) to use to calculate the amount of selectable items")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"borderColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null},"GwtMaterialColor GREY_DARKEN_2"),(0,l.kt)("td",{parentName:"tr",align:null},"the border color of the selected area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"borderDash"),(0,l.kt)("td",{parentName:"tr",align:null},"int[]"),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"the line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"borderDashOffset"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Offset for line dashes. See ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"},"MDN"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"borderWidth"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"the border width of the selected area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fireEventOnClearSelection"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")," for firing event after reset of selection.")))),(0,l.kt)("h2",{id:"clear-selection-element"},"Clear selection element"),(0,l.kt)("p",null,"Every options has got a inner element to set clear selection options. The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ClearSelection.html"},"clear selection")," element allows to reset the selection directly from the chart. "),(0,l.kt)("img",{src:(0,o.Z)("/img/clearSelection.png")}),(0,l.kt)("p",null,"It adds a label and/or image on top or bottom of the chart which will be visible only when there is a selection on datasets. Clicking on the element, the selection on chart is clear."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"options.getClearSelection().setDisplay(true);\noptions.getClearSelection().setFontSize(18);\noptions.getClearSelection().setAlign(Align.RIGHT_CHART_AREA);\noptions.getClearSelection().setPosition(Position.BOTTOM);\noptions.getClearSelection().setRender(Render.IMAGE_LABEL);\noptions.getClearSelection().setUseSelectionStyle(true);\n")),(0,l.kt)("p",null,"The complete options are described by following table:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"display"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"if ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," the element will be showed to chart")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"label"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Reset selection"'),(0,l.kt)("td",{parentName:"tr",align:null},"the label to show into the element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontSize"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontSize--"},"defaultFontSize")),(0,l.kt)("td",{parentName:"tr",align:null},"font size of label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontFamily"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontFamily--"},"defaultFontFamily")),(0,l.kt)("td",{parentName:"tr",align:null},"font family of label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontStyle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontStyle--"},"defaultFontStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"font style of label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null},"GwtMaterialColor GREY_DARKEN_2"),(0,l.kt)("td",{parentName:"tr",align:null},"font color of label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"align"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/enums/Align.html"},"Align")),(0,l.kt)("td",{parentName:"tr",align:null},"Align.RIGHT"),(0,l.kt)("td",{parentName:"tr",align:null},"Alignment of element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/Position.html"},"Position")),(0,l.kt)("td",{parentName:"tr",align:null},"Position.BOTTOM"),(0,l.kt)("td",{parentName:"tr",align:null},"Position of the element in the chart. ",(0,l.kt)("inlineCode",{parentName:"td"},"left")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"right")," are ignored and use ",(0,l.kt)("inlineCode",{parentName:"td"},"bottom"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,l.kt)("td",{parentName:"tr",align:null},"ClearSelection.DEFAULT_CLEAR_SELECTION_18"),(0,l.kt)("td",{parentName:"tr",align:null},"the image to show into the element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"render"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/enums/Render.html"},"Render")),(0,l.kt)("td",{parentName:"tr",align:null},"Render.IMAGE_LABEL"),(0,l.kt)("td",{parentName:"tr",align:null},"defines if label or image or both will e showed into element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"margin"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"distance with the canvas borders")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"padding"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"padding around the render element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spacing"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"distance between image and label into element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useSelectionStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"if ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," the element will use the style used for selection area")))),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ClearSelection.html"},"clear selection")," adds on top of padding configuration of the chart the space needed to be added. Therefore if padding were set, it maintains the original padding adding what is necessary."),(0,l.kt)("p",null,"It could be necessary to know how much space has been added (maybe during a plugin or controller implementation). The added space is provided by the plugin instance, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"DatasetsItemsSelector plugin = new DatasetsItemsSelector());\n...\ndouble paddingUsedByPlugin = plugin.getPadding(chartInstance);\n")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"When the selection of area on chart has been finished, an event will fire passing the range of the selected datasets items."),(0,l.kt)("p",null,"To catch the event and manage it, you can add a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetRangeSelectionEventHandler.html"},"DatasetRangeSelectionEventHandler")," instance to the chart options, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new DatasetRangeSelectionEventHandler() {\n\n   /**\n    * Invoked when the user selects an area on the chart.\n    * \n    * @param event chart dataset selection event\n    */\n   @Override \n   public void onSelect(DatasetRangeSelectionEvent event){\n      // logic\n   }\n         \n}, DatasetRangeSelectionEvent.TYPE);\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetRangeSelectionEvent.html"},"event")," provides 2 methods to get the range of the selected datasets:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getFrom()")," provides the starting index on datasets"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getTo()")," provides the ending index on datasets")),(0,l.kt)("h2",{id:"selection-reset"},"Selection reset"),(0,l.kt)("p",null,"To reset a selection programmatically, without using ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ClearSelection.html"},"clear selection")," element, the plugin provides 2 methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clearSelection(IsChart chart)")," which resets the selected area on passed chart instance using the ",(0,l.kt)("inlineCode",{parentName:"li"},"fireEventOnClearSelection")," property of the plugin options to enable firing event on reset if set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," otherwise without any firing."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clearSelection(IsChart chart, boolean fireEvent)")," which resets the selected area on passed chart instance, setting if the event must be fired")),(0,l.kt)("p",null,"In case of the event will be fired, the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetRangeSelectionEvent.html"},"event")," will report from both methods (",(0,l.kt)("inlineCode",{parentName:"p"},"getFrom()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"getTo()"),") a DatasetRangeSelectionEvent.RESET_SELECTION value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new DatasetRangeSelectionEventHandler() {\n\n   /**\n    * Invoked when the user selects an area on the chart.\n    * \n    * @param event chart dataset selection event\n    */\n   @Override \n   public void onSelect(DatasetRangeSelectionEvent event){\n      if (event.getTo() == DatasetRangeSelectionEvent.CLEAR_SELECTION) {\n         // reset!\n      } else {\n         // selection!\n      }\n   }\n         \n}, DatasetRangeSelectionEvent.TYPE);\n")),(0,l.kt)("p",null,"To update a current selection is NOT mandatory to reset it but it's enough to reselect new area on the chart."),(0,l.kt)("h2",{id:"options-builder"},"Options builder"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,l.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"DatasetsItemsSelectorOptions options = DatasetsItemsSelectorOptionsBuilder.create()\n    .setBorderWidth(5)\n    .setBorderDash(6, 2, 3)\n    .setFireEventOnClearSelection(true)\n    .setDisplay(true)\n    .setFontSize(18)\n    .setAlign(Align.RIGHT_CHART_AREA)\n    .setUseSelectionStyle(true)\n    .build();\n\nchart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, options);\n")),(0,l.kt)("h3",{id:"constraints"},"Constraints"),(0,l.kt)("p",null,"The plugin is working only with ",(0,l.kt)("strong",{parentName:"p"},"line")," and ",(0,l.kt)("strong",{parentName:"p"},"bar")," chart types."),(0,l.kt)("p",null,"The tooltips are disabled."),(0,l.kt)("p",null,"Only events ",(0,l.kt)("inlineCode",{parentName:"p"},"Event.CLICK")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Event.TOUCHSTART")," are activated."),(0,l.kt)("p",null,"It adds ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/AtLeastOneDatasetHandler.html"},"AtLeastOneDatasetHandler")," legend click handler by default to avoid to remove all datasets from chart by legend."))}u.isMDXComponent=!0}}]);