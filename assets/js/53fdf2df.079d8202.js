"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[8209],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||g[m]||l;return a?n.createElement(h,o(o({ref:e},c),{},{components:a})):n.createElement(h,o({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2695:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return g},default:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(44996),i=["components"],s={id:"PluginDatasetsItemsSelector",title:"Datasets items selector plugin",hide_title:!0,sidebar_label:"Datasets items selector"},p=void 0,c={unversionedId:"plugins/PluginDatasetsItemsSelector",id:"version-4.0/plugins/PluginDatasetsItemsSelector",title:"Datasets items selector plugin",description:"Datasets items selector plugin",source:"@site/versioned_docs/version-4.0/plugins/DatasetsItemsSelector.md",sourceDirName:"plugins",slug:"/plugins/PluginDatasetsItemsSelector",permalink:"/Charba-Wiki/docs/4.0/plugins/PluginDatasetsItemsSelector",tags:[],version:"4.0",frontMatter:{id:"PluginDatasetsItemsSelector",title:"Datasets items selector plugin",hide_title:!0,sidebar_label:"Datasets items selector"},sidebar:"version-4.0/docs",previous:{title:"Color schemes",permalink:"/Charba-Wiki/docs/4.0/plugins/PluginColorSchemes"},next:{title:"HTML legend",permalink:"/Charba-Wiki/docs/4.0/plugins/PluginHTMLLegend"}},g=[{value:"Datasets items selector plugin",id:"datasets-items-selector-plugin",children:[],level:2},{value:"Options",id:"options",children:[{value:"Selection cleaner",id:"selection-cleaner",children:[],level:3}],level:2},{value:"Events",id:"events",children:[{value:"Selecting dataset items",id:"selecting-dataset-items",children:[],level:3},{value:"Cleaning selection",id:"cleaning-selection",children:[],level:3}],level:2},{value:"Options builder",id:"options-builder",children:[],level:2}],d={toc:g};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"datasets-items-selector-plugin"},"Datasets items selector plugin"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides an plugin implementation to select an area on the chart which represents a set of datasets items of the chart and inform you by event about the range of datasets items selected."),(0,l.kt)("p",null,"The goal is to enable selections of a subset of datasets, zooming and drill down/up of the data on chart instance."),(0,l.kt)("img",{src:(0,o.Z)("/img/datasetsItemsSelector.png")}),(0,l.kt)("p",null,"This plugin, as singleton, can be set both at global and at chart level."),(0,l.kt)("p",null,"The implementation is ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html"},"DatasetsItemsSelector")," and can be set as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(DatasetsItemsSelector.get());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(DatasetsItemsSelector.get());\n")),(0,l.kt)("p",null,"The ID of plugin is ",(0,l.kt)("inlineCode",{parentName:"p"},"charbadatasetsitemsselector")," (",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html#ID"},"DatasetsItemsSelector.ID"),")."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It works on all multiple scales chart type, like ",(0,l.kt)("a",{parentName:"p",href:"../charts/ChartLine"},"line"),(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("sup",{style:{color:"orange"}},"(1)")),", ",(0,l.kt)("a",{parentName:"p",href:"../charts/ChartBar"},"bar"),(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("sup",{style:{color:"orange"}},"(1)")),", ",(0,l.kt)("a",{parentName:"p",href:"../charts/ChartScatter"},"scatter")," or ",(0,l.kt)("a",{parentName:"p",href:"../charts/ChartBubble"},"bubble")," charts."),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("sup",{style:{color:"orange"}},"(1)"))," line and bar charts can be managed ",(0,l.kt)("strong",{parentName:"p"},"ONLY")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"indexAxis")," option set to ",(0,l.kt)("strong",{parentName:"p"},"IndexAxis.X"),"."))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,l.kt)("p",null,"In this case you should instantiate a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptions.html"},"DatasetsItemsSelectorOptions")," and set it to your chart options as following, setting the color you want:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nDatasetsItemsSelectorOptions options = new DatasetsItemsSelectorOptions();\n// Set "green" by HtmlColor\noptions.setColor(HtmlColor.GREEN);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(DatasetsItemsSelector.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n')),(0,l.kt)("p",null,"You can also change the default for all charts instances, as following"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nDatasetsItemsSelectorOptions options = new DatasetsItemsSelectorOptions();\n// Set "green" by HtmlColor\noptions.setColor(HtmlColor.GREEN);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(DatasetsItemsSelector.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store();\n')),(0,l.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptionsFactory.html"},"DatasetsItemsSelectorOptionsFactory")," as static reference inside the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html"},"plugin")," which can be used to retrieve the options from chart, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nDatasetsItemsSelectorOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(DatasetsItemsSelector.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(DatasetsItemsSelector.ID, DatasetsItemsSelector.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(DatasetsItemsSelector.FACTORY);\n}\n")),(0,l.kt)("p",null,'The following are the attributes that you can set to plugin options:"#ffcc80"'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgb(97, 97, 97) - ",(0,l.kt)("span",{style:{backgroundColor:"#616161",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The border color of the selected area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderDash"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderDashOffset"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Offset for line dashes. See ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"},"MDN"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The border width of the selected area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgba(255, 204, 128, 0.3) - ",(0,l.kt)("span",{style:{backgroundColor:"rgba(255,204,128,0.3)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The color of selected area on chart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the plugin is enabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"xAxisID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/options/ScaleId.html"},"ScaleId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"DefaultScaleId.X"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The ID of the X axis to use to calculate the amount of selectable items.")))),(0,l.kt)("h3",{id:"selection-cleaner"},"Selection cleaner"),(0,l.kt)("p",null,"Every options has got a inner element to set selection cleaner options. The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/SelectionCleaner.html"},"selection cleaner")," element allows to reset the selection directly from the chart. "),(0,l.kt)("img",{src:(0,o.Z)("/img/clearSelection.png")}),(0,l.kt)("p",null,"It adds a label and/or image on top or bottom of the chart which will be visible only when there is a selection on datasets. Clicking on the element, the selection on chart is removed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nDatasetsItemsSelectorOptions options = new DatasetsItemsSelectorOptions();\n// sets the options to selection cleaner configuration element\noptions.getSelectionCleaner().setDisplay(true);\noptions.getSelectionCleaner().getFont().setSize(18);\noptions.getSelectionCleaner().setAlign(Align.RIGHT_CHART_AREA);\noptions.getSelectionCleaner().setPosition(Position.BOTTOM);\noptions.getSelectionCleaner().setRender(Render.IMAGE_LABEL);\noptions.getSelectionCleaner().setUseSelectionStyle(true);\n")),(0,l.kt)("p",null,"The complete options are described by following table:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"display"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," the element will be showed to chart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},'"Reset selection"')),(0,l.kt)("td",{parentName:"tr",align:"left"},"The label to show in the element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,l.kt)("td",{parentName:"tr",align:"left"},"See description"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Font of selection cleaner label.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The default value is the global font.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgb(97, 97, 97) - ",(0,l.kt)("span",{style:{backgroundColor:"#616161",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The font color of label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"align"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/enums/Align.html"},"Align")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Align.RIGHT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alignment of element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"position"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/Position.html"},"Position")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Position.BOTTOM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Position of the element in the chart. ",(0,l.kt)("inlineCode",{parentName:"td"},"left")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"right")," are ignored and use ",(0,l.kt)("inlineCode",{parentName:"td"},"bottom"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"image"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The image to show in the element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"render"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/enums/Render.html"},"Render")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Render.LABEL"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Defines if label or image or both will e showed in the element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"margin"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The distance with the canvas borders.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"4")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The padding around the render element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"spacing"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"3")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The distance between image and label in the element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"useSelectionStyle"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," the element will use the style used for selection area.")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"The plugin is able to emit events when"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the selection of area on chart has been finished, an event will fire passing the range of the selected datasets items."),(0,l.kt)("li",{parentName:"ul"},"the selection area is resetted, an event will fire. ")),(0,l.kt)("h3",{id:"selecting-dataset-items"},"Selecting dataset items"),(0,l.kt)("p",null,"To catch the event and manage it, you can add a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/events/DatasetRangeSelectionEventHandler.html"},"DatasetRangeSelectionEventHandler")," instance to the chart options, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new DatasetRangeSelectionEventHandler(){\n\n   /**\n    * Invoked when the user selects an area on the chart.\n    * \n    * @param event chart data set selection event\n    */\n   @Override \n   public void onSelect(DatasetRangeSelectionEvent event){\n      // logic\n   }\n         \n}, DatasetRangeSelectionEvent.TYPE);\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/events/DatasetRangeSelectionEvent.html"},"event")," provides 2 methods to get the range of the selected data sets:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getFrom()")," provides the starting value on data sets, by a ",(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/ScaleValueItem.html"},"scale item"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getTo()")," provides the ending value on data sets, by a ",(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/ScaleValueItem.html"},"scale item"),".")),(0,l.kt)("h3",{id:"cleaning-selection"},"Cleaning selection"),(0,l.kt)("p",null,"To reset a selection programmatically, without using ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/plugins/SelectionCleaner.html"},"selection cleaner")," element, the plugin provides 2 methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cleanSelection(IsChart chart)")," which resets the selected area on passed chart instance firing event on reset if a clean selection handler has been configured."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cleanSelection(IsChart chart, boolean fireEvent)")," which resets the selected area on passed chart instance, setting if the event must be fired")),(0,l.kt)("p",null,"To catch the event and manage it, you can add a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/events/DatasetRangeCleanSelectionEventHandler.html"},"DatasetRangeCleanSelectionEventHandler")," instance to the chart options, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new DatasetRangeCleanSelectionEventHandler(){\n\n    /**\n     * Invoked when the user cleans an area on the chart.\n     * \n     * @param event chart data set clean selection event\n     */\n    @Override\n    public void onClean(DatasetRangeCleanSelectionEvent event){\n      // logic\n    }\n    \n}, DatasetRangeCleanSelectionEvent.TYPE);\n")),(0,l.kt)("p",null,"To update a current selection is NOT mandatory to reset it but it's enough to re-select new area on the chart."),(0,l.kt)("h2",{id:"options-builder"},"Options builder"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,l.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the plugin options\nDatasetsItemsSelectorOptions options = DatasetsItemsSelectorOptionsBuilder.create()\n    .setBorderWidth(5)\n    .setBorderDash(6, 2, 3)\n    .setDisplay(true)\n    .setFontSize(18)\n    .setAlign(Align.RIGHT_CHART_AREA)\n    .setUseSelectionStyle(true)\n    .build();\n// sets plugin options\nchart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, options);\n")))}m.isMDXComponent=!0}}]);