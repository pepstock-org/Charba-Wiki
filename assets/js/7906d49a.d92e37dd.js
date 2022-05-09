"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[37805],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(a),m=l,h=d["".concat(s,".").concat(m)]||d[m]||g[m]||r;return a?n.createElement(h,o(o({ref:e},c),{},{components:a})):n.createElement(h,o({ref:e},c))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89960:function(t,e,a){a.r(e),a.d(e,{assets:function(){return g},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=a(44996),i=["components"],s={id:"PluginDatasetsItemsSelector",title:"Datasets items selector plugin",hide_title:!0,sidebar_label:"Datasets items selector"},p=void 0,c={unversionedId:"PluginDatasetsItemsSelector",id:"version-3.3/PluginDatasetsItemsSelector",title:"Datasets items selector plugin",description:"",source:"@site/versioned_docs/version-3.3/PluginDatasetsItemsSelector.md",sourceDirName:".",slug:"/PluginDatasetsItemsSelector",permalink:"/Charba-Wiki/docs/3.3/PluginDatasetsItemsSelector",draft:!1,tags:[],version:"3.3",frontMatter:{id:"PluginDatasetsItemsSelector",title:"Datasets items selector plugin",hide_title:!0,sidebar_label:"Datasets items selector"},sidebar:"version-3.3/docs",previous:{title:"Color schemes",permalink:"/Charba-Wiki/docs/3.3/PluginColorSchemes"},next:{title:"HTML legend",permalink:"/Charba-Wiki/docs/3.3/PluginHTMLLegend"}},g={},d=[{value:"Datasets items selector plugin",id:"datasets-items-selector-plugin",level:2},{value:"Clear selection element",id:"clear-selection-element",level:2},{value:"Events",id:"events",level:2},{value:"Selection reset",id:"selection-reset",level:2},{value:"Options builder",id:"options-builder",level:2},{value:"Constraints",id:"constraints",level:3}],m={toc:d};function h(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"datasets-items-selector-plugin"},"Datasets items selector plugin"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to select an area on the chart which represents a set of datasets items of the chart and inform you by event about the range of datasets items selected."),(0,r.kt)("p",null,"The goal is to enable zooming or drill down/up of the data on chart instance."),(0,r.kt)("img",{src:(0,o.Z)("/img/datasetsItemsSelector.png")}),(0,r.kt)("p",null,"It works ONLY with chart ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/ChartType.html"},"line")," and ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/ChartType.html"},"bar")," types."),(0,r.kt)("p",null,"This plugin, as singleton, can be set both at global and at chart level."),(0,r.kt)("p",null,"The implementation is ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html"},"DatasetsItemsSelector")," and can be set as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// GLOBAL\nDefaults.get().getPlugins().register(DatasetsItemsSelector.get());\n\n// INLINE\nchart.getPlugins().add(DatasetsItemsSelector.get());\n")),(0,r.kt)("p",null,"The ID of plugin is ",(0,r.kt)("inlineCode",{parentName:"p"},"charbadatasetsitemsselector")," (",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html#ID"},"DatasetsItemsSelector.ID"),")."),(0,r.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,r.kt)("p",null,"In this case you should instantiate a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptions.html"},"DatasetsItemsSelectorOptions")," and set it to your chart options as following, setting the color you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// INLINE\n// Set "green" by HtmlColor\nDatasetsItemsSelectorOptions option = new DatasetsItemsSelectorOptions();\noption.setColor(HtmlColor.GREEN);\n\nchart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, option);\n\n// GLOBAL\n// Set "green" by HtmlColor\nDatasetsItemsSelectorOptions option = new DatasetsItemsSelectorOptions();\noption.setColor(HtmlColor.GREEN);\n\nDefaults.get().getGlobal().getPlugins().setOptions(DatasetsItemsSelector.ID, option);\n')),(0,r.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptionsFactory.html"},"DatasetsItemsSelectorOptionsFactory")," as static reference inside the ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html"},"plugin")," which can be used to retrieve the options from chart, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// INLINE\n// reads the options from chart\nDatasetsItemsSelectorOptions option;\nif (chart.getOptions().getPlugins().hasOptions(DatasetsItemsSelector.ID)){\n   options = chart.getOptions().getPlugins().getOptions(DatasetsItemsSelector.ID, DatasetsItemsSelector.FACTORY);\n}\n\n// GLOBAL\n// reads the options from global options\nDatasetsItemsSelectorOptions option;\nif (Defaults.get().getGlobal().getPlugins().hasOptions(DatasetsItemsSelector.ID)){\n   options = Defaults.get().getGlobal().getPlugins().getOptions(DatasetsItemsSelector.ID, DatasetsItemsSelector.FACTORY);\n}\n")),(0,r.kt)("p",null,"The following are the attributes that you can set to plugin options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:null},"GwtMaterialColor ORANGE_LIGHTEN_3.alpha(0.3D)"),(0,r.kt)("td",{parentName:"tr",align:null},"The color of selected area on chart.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xAxisID"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID"},"Scales.DEFAULT_X_AXIS_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"the ID of the x axis (cartesian category or time axis) to use to calculate the amount of selectable items")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderColor"),(0,r.kt)("td",{parentName:"tr",align:null},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:null},"GwtMaterialColor GREY_DARKEN_2"),(0,r.kt)("td",{parentName:"tr",align:null},"the border color of the selected area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderDash"),(0,r.kt)("td",{parentName:"tr",align:null},"int[]"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"the line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderDashOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Offset for line dashes. See ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"},"MDN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"the border width of the selected area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fireEventOnClearSelection"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," for firing event after reset of selection.")))),(0,r.kt)("h2",{id:"clear-selection-element"},"Clear selection element"),(0,r.kt)("p",null,"Every options has got a inner element to set clear selection options. The ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ClearSelection.html"},"clear selection")," element allows to reset the selection directly from the chart. "),(0,r.kt)("img",{src:(0,o.Z)("/img/clearSelection.png")}),(0,r.kt)("p",null,"It adds a label and/or image on top or bottom of the chart which will be visible only when there is a selection on datasets. Clicking on the element, the selection on chart is clear."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"options.getClearSelection().setDisplay(true);\noptions.getClearSelection().setFontSize(18);\noptions.getClearSelection().setAlign(Align.RIGHT_CHART_AREA);\noptions.getClearSelection().setPosition(Position.BOTTOM);\noptions.getClearSelection().setRender(Render.IMAGE_LABEL);\noptions.getClearSelection().setUseSelectionStyle(true);\n")),(0,r.kt)("p",null,"The complete options are described by following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"display"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"if ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," the element will be showed to chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'"Reset selection"'),(0,r.kt)("td",{parentName:"tr",align:null},"the label to show into the element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontSize"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontSize--"},"defaultFontSize")),(0,r.kt)("td",{parentName:"tr",align:null},"font size of label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontFamily"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontFamily--"},"defaultFontFamily")),(0,r.kt)("td",{parentName:"tr",align:null},"font family of label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontStyle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontStyle--"},"defaultFontStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"font style of label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontColor"),(0,r.kt)("td",{parentName:"tr",align:null},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:null},"GwtMaterialColor GREY_DARKEN_2"),(0,r.kt)("td",{parentName:"tr",align:null},"font color of label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"align"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/enums/Align.html"},"Align")),(0,r.kt)("td",{parentName:"tr",align:null},"Align.RIGHT"),(0,r.kt)("td",{parentName:"tr",align:null},"Alignment of element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/Position.html"},"Position")),(0,r.kt)("td",{parentName:"tr",align:null},"Position.BOTTOM"),(0,r.kt)("td",{parentName:"tr",align:null},"Position of the element in the chart. ",(0,r.kt)("inlineCode",{parentName:"td"},"left")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"right")," are ignored and use ",(0,r.kt)("inlineCode",{parentName:"td"},"bottom"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.kt)("td",{parentName:"tr",align:null},"ClearSelection.DEFAULT_CLEAR_SELECTION_18"),(0,r.kt)("td",{parentName:"tr",align:null},"the image to show into the element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"render"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/enums/Render.html"},"Render")),(0,r.kt)("td",{parentName:"tr",align:null},"Render.IMAGE_LABEL"),(0,r.kt)("td",{parentName:"tr",align:null},"defines if label or image or both will e showed into element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"margin"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"distance with the canvas borders")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"padding"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"padding around the render element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spacing"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"distance between image and label into element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useSelectionStyle"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"if ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," the element will use the style used for selection area")))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ClearSelection.html"},"clear selection")," adds on top of padding configuration of the chart the space needed to be added. Therefore if padding were set, it maintains the original padding adding what is necessary."),(0,r.kt)("p",null,"It could be necessary to know how much space has been added (maybe during a plugin or controller implementation). The added space is provided by the plugin instance, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DatasetsItemsSelector plugin = new DatasetsItemsSelector());\n...\ndouble paddingUsedByPlugin = plugin.getPadding(chartInstance);\n")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"When the selection of area on chart has been finished, an event will fire passing the range of the selected datasets items."),(0,r.kt)("p",null,"To catch the event and manage it, you can add a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetRangeSelectionEventHandler.html"},"DatasetRangeSelectionEventHandler")," instance to the chart options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new DatasetRangeSelectionEventHandler() {\n\n   /**\n    * Invoked when the user selects an area on the chart.\n    * \n    * @param event chart dataset selection event\n    */\n   @Override \n   public void onSelect(DatasetRangeSelectionEvent event){\n      // logic\n   }\n         \n}, DatasetRangeSelectionEvent.TYPE);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetRangeSelectionEvent.html"},"event")," provides 2 methods to get the range of the selected datasets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getFrom()")," provides the starting index on datasets"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getTo()")," provides the ending index on datasets")),(0,r.kt)("h2",{id:"selection-reset"},"Selection reset"),(0,r.kt)("p",null,"To reset a selection programmatically, without using ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ClearSelection.html"},"clear selection")," element, the plugin provides 2 methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clearSelection(IsChart chart)")," which resets the selected area on passed chart instance using the ",(0,r.kt)("inlineCode",{parentName:"li"},"fireEventOnClearSelection")," property of the plugin options to enable firing event on reset if set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," otherwise without any firing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clearSelection(IsChart chart, boolean fireEvent)")," which resets the selected area on passed chart instance, setting if the event must be fired")),(0,r.kt)("p",null,"In case of the event will be fired, the ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetRangeSelectionEvent.html"},"event")," will report from both methods (",(0,r.kt)("inlineCode",{parentName:"p"},"getFrom()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getTo()"),") a DatasetRangeSelectionEvent.RESET_SELECTION value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new DatasetRangeSelectionEventHandler() {\n\n   /**\n    * Invoked when the user selects an area on the chart.\n    * \n    * @param event chart dataset selection event\n    */\n   @Override \n   public void onSelect(DatasetRangeSelectionEvent event){\n      if (event.getTo() == DatasetRangeSelectionEvent.CLEAR_SELECTION) {\n         // reset!\n      } else {\n         // selection!\n      }\n   }\n         \n}, DatasetRangeSelectionEvent.TYPE);\n")),(0,r.kt)("p",null,"To update a current selection is NOT mandatory to reset it but it's enough to reselect new area on the chart."),(0,r.kt)("h2",{id:"options-builder"},"Options builder"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,r.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DatasetsItemsSelectorOptions options = DatasetsItemsSelectorOptionsBuilder.create()\n    .setBorderWidth(5)\n    .setBorderDash(6, 2, 3)\n    .setFireEventOnClearSelection(true)\n    .setDisplay(true)\n    .setFontSize(18)\n    .setAlign(Align.RIGHT_CHART_AREA)\n    .setUseSelectionStyle(true)\n    .build();\n\nchart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, options);\n")),(0,r.kt)("h3",{id:"constraints"},"Constraints"),(0,r.kt)("p",null,"The plugin is working only with ",(0,r.kt)("strong",{parentName:"p"},"line")," and ",(0,r.kt)("strong",{parentName:"p"},"bar")," chart types."),(0,r.kt)("p",null,"The tooltips are disabled."),(0,r.kt)("p",null,"Only events ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.CLICK")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.TOUCHSTART")," are activated."),(0,r.kt)("p",null,"It adds ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/AtLeastOneDatasetHandler.html"},"AtLeastOneDatasetHandler")," legend click handler by default to avoid to remove all datasets from chart by legend."))}h.isMDXComponent=!0}}]);