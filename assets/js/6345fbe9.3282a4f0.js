"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[73019],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(a),h=r,d=g["".concat(s,".").concat(h)]||g[h]||m[h]||l;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},77906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(44996);const o={id:"PluginDatasetsItemsSelector",title:"Datasets items selector plugin",hide_title:!0,sidebar_label:"Datasets items selector"},i=void 0,s={unversionedId:"plugins/PluginDatasetsItemsSelector",id:"version-5.3/plugins/PluginDatasetsItemsSelector",title:"Datasets items selector plugin",description:"Datasets items selector plugin",source:"@site/versioned_docs/version-5.3/plugins/DatasetsItemsSelector.md",sourceDirName:"plugins",slug:"/plugins/PluginDatasetsItemsSelector",permalink:"/Charba-Wiki/docs/5.3/plugins/PluginDatasetsItemsSelector",draft:!1,tags:[],version:"5.3",frontMatter:{id:"PluginDatasetsItemsSelector",title:"Datasets items selector plugin",hide_title:!0,sidebar_label:"Datasets items selector"},sidebar:"docs",previous:{title:"Color schemes",permalink:"/Charba-Wiki/docs/5.3/plugins/PluginColorSchemes"},next:{title:"HTML legend",permalink:"/Charba-Wiki/docs/5.3/plugins/PluginHTMLLegend"}},p={},c=[{value:"Datasets items selector plugin",id:"datasets-items-selector-plugin",level:2},{value:"Options",id:"options",level:2},{value:"Selection cleaner",id:"selection-cleaner",level:3},{value:"Actions and events",id:"actions-and-events",level:2},{value:"Selecting dataset items",id:"selecting-dataset-items",level:3},{value:"Cleaning selection",id:"cleaning-selection",level:3},{value:"Options builder",id:"options-builder",level:2}],g={toc:c},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"datasets-items-selector-plugin"},"Datasets items selector plugin"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to select an area on the chart which represents a set of datasets items of the chart and inform you by event about the range of datasets items selected."),(0,r.kt)("p",null,"The goal is to enable selections of a subset of datasets, zooming and drill down/up of the data on chart instance."),(0,r.kt)("img",{src:(0,l.Z)("/img/datasetsItemsSelector.png")}),(0,r.kt)("p",null,"This plugin, as singleton, can be set both at global and at chart level."),(0,r.kt)("p",null,"The implementation is ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html"},"DatasetsItemsSelector")," and can be set as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(DatasetsItemsSelector.get());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(DatasetsItemsSelector.get());\n")),(0,r.kt)("p",null,"The ID of plugin is ",(0,r.kt)("inlineCode",{parentName:"p"},"charbadatasetsitemsselector")," (",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html#ID"},"DatasetsItemsSelector.ID"),")."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It works on all multiple scales chart type, like ",(0,r.kt)("a",{parentName:"p",href:"../charts/ChartLine"},"line"),(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("sup",{style:{color:"orange"}},"(1)")),", ",(0,r.kt)("a",{parentName:"p",href:"../charts/ChartBar"},"bar"),(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("sup",{style:{color:"orange"}},"(1)")),", ",(0,r.kt)("a",{parentName:"p",href:"../charts/ChartScatter"},"scatter")," or ",(0,r.kt)("a",{parentName:"p",href:"../charts/ChartBubble"},"bubble")," charts."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("sup",{style:{color:"orange"}},"(1)"))," line and bar charts can be managed ",(0,r.kt)("strong",{parentName:"p"},"ONLY")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"indexAxis")," option set to ",(0,r.kt)("strong",{parentName:"p"},"IndexAxis.X"),".")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,r.kt)("p",null,"In this case you should instantiate a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptions.html"},"DatasetsItemsSelectorOptions")," and set it to your chart options as following, setting the color you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nDatasetsItemsSelectorOptions options = new DatasetsItemsSelectorOptions();\n// Set "green" by HtmlColor\noptions.setColor(HtmlColor.GREEN);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(DatasetsItemsSelector.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n')),(0,r.kt)("p",null,"You can also change the default for all charts instances, as following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nDatasetsItemsSelectorOptions options = new DatasetsItemsSelectorOptions();\n// Set "green" by HtmlColor\noptions.setColor(HtmlColor.GREEN);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(DatasetsItemsSelector.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store();\n')),(0,r.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptionsFactory.html"},"DatasetsItemsSelectorOptionsFactory")," as static reference inside the ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html"},"plugin")," which can be used to retrieve the options from chart, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nDatasetsItemsSelectorOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(DatasetsItemsSelector.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(DatasetsItemsSelector.ID, DatasetsItemsSelector.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(DatasetsItemsSelector.FACTORY);\n}\n")),(0,r.kt)("p",null,'The following are the attributes that you can set to plugin options:"#ffcc80"'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:"left"},"rgb(97, 97, 97) - ",(0,r.kt)("span",{style:{backgroundColor:"#616161",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The border color of the selected area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"borderDash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"borderDashOffset"),(0,r.kt)("td",{parentName:"tr",align:"left"},"double"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Offset for line dashes. See ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"},"MDN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The border width of the selected area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"color"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:"left"},"rgba(255, 204, 128, 0.3) - ",(0,r.kt)("span",{style:{backgroundColor:"rgba(255,204,128,0.3)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The color of selected area on chart.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the plugin is enabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"modifierKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/enums/ModifierKey.html"},"ModifierKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Keyboard modifier key which must be pressed to enable the selection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"xAxisID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/options/ScaleId.html"},"ScaleId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"DefaultScaleId.X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the X axis to use to calculate the amount of selectable items.")))),(0,r.kt)("h3",{id:"selection-cleaner"},"Selection cleaner"),(0,r.kt)("p",null,"Every options has got a inner element to set selection cleaner options. The ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/impl/plugins/SelectionCleaner.html"},"selection cleaner")," element allows to reset the selection directly from the chart. "),(0,r.kt)("img",{src:(0,l.Z)("/img/clearSelection.png")}),(0,r.kt)("p",null,"It adds a label and/or image on top or bottom of the chart which will be visible only when there is a selection on datasets. Clicking on the element, the selection on chart is removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nDatasetsItemsSelectorOptions options = new DatasetsItemsSelectorOptions();\n// sets the options to selection cleaner configuration element\noptions.getSelectionCleaner().setDisplay(true);\noptions.getSelectionCleaner().getFont().setSize(18);\noptions.getSelectionCleaner().setAlign(Align.RIGHT_CHART_AREA);\noptions.getSelectionCleaner().setPosition(Position.BOTTOM);\noptions.getSelectionCleaner().setRender(Render.IMAGE_LABEL);\noptions.getSelectionCleaner().setUseSelectionStyle(true);\n")),(0,r.kt)("p",null,"The complete options are described by following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"display"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," the element will be showed to chart.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Reset selection"')),(0,r.kt)("td",{parentName:"tr",align:"left"},"The label to show in the element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"font"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,r.kt)("td",{parentName:"tr",align:"left"},"See description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Font of selection cleaner label.",(0,r.kt)("br",null),(0,r.kt)("br",null),"The default value is the global font.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"color"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:"left"},"rgb(97, 97, 97) - ",(0,r.kt)("span",{style:{backgroundColor:"#616161",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The font color of label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"align"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/impl/plugins/enums/Align.html"},"Align")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Align.RIGHT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alignment of element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"position"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/enums/Position.html"},"Position")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Position.BOTTOM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Position of the element in the chart. ",(0,r.kt)("inlineCode",{parentName:"td"},"left")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"right")," are ignored and use ",(0,r.kt)("inlineCode",{parentName:"td"},"bottom"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"image"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The image to show in the element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"render"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/impl/plugins/enums/Render.html"},"Render")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Render.LABEL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines if label or image or both will e showed in the element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"margin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The distance with the canvas borders.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"4")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The padding around the render element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"spacing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The distance between image and label in the element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"useSelectionStyle"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," the element will use the style used for selection area.")))),(0,r.kt)("h2",{id:"actions-and-events"},"Actions and events"),(0,r.kt)("p",null,"The plugin can emit events when"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the selection of area on chart has been finished, an event will fire passing the range of the selected datasets items."),(0,r.kt)("li",{parentName:"ul"},"the selection area is resetted, an event will fire.")),(0,r.kt)("p",null,"Furthermore it provides a set of methods in order to set and clean selection programmatically."),(0,r.kt)("h3",{id:"selecting-dataset-items"},"Selecting dataset items"),(0,r.kt)("p",null,"To set a selection programmatically, the plugin provides 3 methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setSelection(IsChart chart, String from, String to)")," which selects on the chart using the axis values passed as argument; being strings, this method should be used on ",(0,r.kt)("a",{parentName:"li",href:"../axes/CartesianCategoryAxes"},"cartesian category")," axes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setSelection(IsChart chart, double from, double to)")," which selects on the chart using the axis values passed as argument; being numbers, this method should be used on ",(0,r.kt)("a",{parentName:"li",href:"../axes/CartesianLinearAxes"},"cartesian linear")," or ",(0,r.kt)("a",{parentName:"li",href:"../axes/CartesianLinearAxes"},"cartesian logarithmic")," axes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setSelection(IsChart chart, Date from, Date to)")," which selects on the chart using the axis values passed as argument; being dates, this method should be used on ",(0,r.kt)("a",{parentName:"li",href:"../axes/CartesianTimeAxes"},"cartesian time")," or ",(0,r.kt)("a",{parentName:"li",href:"../axes/CartesianTimeSeriesAxes"},"cartesian time series")," axes")),(0,r.kt)("p",null,"Here is a simple example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'protected void handleSelect() {\n    // selects the area between "February" and "April" labels\n    DatasetsItemsSelector.get().setSelection(chart, "February", "April");\n}\n')),(0,r.kt)("p",null,"To catch the event and manage it, you can add a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/events/DatasetRangeSelectionEventHandler.html"},"DatasetRangeSelectionEventHandler")," instance to the chart options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new DatasetRangeSelectionEventHandler(){\n\n   /**\n    * Invoked when the user selects an area on the chart.\n    * \n    * @param event chart data set selection event\n    */\n   @Override \n   public void onSelect(DatasetRangeSelectionEvent event){\n      // logic\n   }\n         \n}, DatasetRangeSelectionEvent.TYPE);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/events/DatasetRangeSelectionEvent.html"},"event")," provides 2 methods to get the range of the selected data sets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getFrom()")," provides the starting value on data sets, by a ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/items/ScaleValueItem.html"},"scale item"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getTo()")," provides the ending value on data sets, by a ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/items/ScaleValueItem.html"},"scale item"),".")),(0,r.kt)("h3",{id:"cleaning-selection"},"Cleaning selection"),(0,r.kt)("p",null,"To reset a selection programmatically, without using ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/impl/plugins/SelectionCleaner.html"},"selection cleaner")," element, the plugin provides 2 methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cleanSelection(IsChart chart)")," which resets the selected area on passed chart instance firing event on reset if a clean selection handler has been configured."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cleanSelection(IsChart chart, boolean fireEvent)")," which resets the selected area on passed chart instance, setting if the event must be fired")),(0,r.kt)("p",null,"Here is a simple example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"protected void reset() {\n    // removes the area, previously selected\n    DatasetsItemsSelector.get().cleanSelection(chart);\n}\n")),(0,r.kt)("p",null,"To catch the event and manage it, you can add a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/events/DatasetRangeCleanSelectionEventHandler.html"},"DatasetRangeCleanSelectionEventHandler")," instance to the chart options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new DatasetRangeCleanSelectionEventHandler(){\n\n    /**\n     * Invoked when the user cleans an area on the chart.\n     * \n     * @param event chart data set clean selection event\n     */\n    @Override\n    public void onClean(DatasetRangeCleanSelectionEvent event){\n      // logic\n    }\n    \n}, DatasetRangeCleanSelectionEvent.TYPE);\n")),(0,r.kt)("p",null,"To update a current selection is NOT mandatory to reset it but it's enough to re-select new area on the chart."),(0,r.kt)("h2",{id:"options-builder"},"Options builder"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,r.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// creates the plugin options\nDatasetsItemsSelectorOptions options = DatasetsItemsSelectorOptionsBuilder.create()\n    .setBorderWidth(5)\n    .setBorderDash(6, 2, 3)\n    .setDisplay(true)\n    .setFontSize(18)\n    .setAlign(Align.RIGHT_CHART_AREA)\n    .setUseSelectionStyle(true)\n    .build();\n// sets plugin options\nchart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, options);\n")))}h.isMDXComponent=!0}}]);