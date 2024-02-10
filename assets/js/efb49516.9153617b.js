"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[99216],{95788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>m});var n=a(11504);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),d=p(a),c=l,m=d["".concat(i,".").concat(c)]||d[c]||h[c]||r;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var g={};for(var i in t)hasOwnProperty.call(t,i)&&(g[i]=t[i]);g.originalType=e,g[d]="string"==typeof e?e:l,o[1]=g;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4792:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>g,toc:()=>p});var n=a(45072),l=(a(11504),a(95788));const r={id:"Legend",title:"Legend",hide_title:!0,sidebar_label:"Legend"},o=void 0,g={unversionedId:"configuration/Legend",id:"version-5.6/configuration/Legend",title:"Legend",description:"Legend",source:"@site/versioned_docs/version-5.6/configuration/Legend.md",sourceDirName:"configuration",slug:"/configuration/Legend",permalink:"/Charba-Wiki/docs/5.6/configuration/Legend",draft:!1,tags:[],version:"5.6",frontMatter:{id:"Legend",title:"Legend",hide_title:!0,sidebar_label:"Legend"},sidebar:"docs",previous:{title:"Datasets",permalink:"/Charba-Wiki/docs/5.6/configuration/Datasets"},next:{title:"Tooltip",permalink:"/Charba-Wiki/docs/5.6/configuration/Tooltip"}},i={},p=[{value:"Legend",id:"legend",level:2},{value:"Events",id:"events",level:2},{value:"Clicking",id:"clicking",level:3},{value:"Hovering",id:"hovering",level:3},{value:"Leaving",id:"leaving",level:3},{value:"Legend labels",id:"legend-labels",level:2},{value:"Callbacks",id:"callbacks",level:3},{value:"<code>filter</code> callback",id:"filter-callback",level:4},{value:"<code>itemSort</code> callback",id:"itemsort-callback",level:4},{value:"<code>generateLabels</code> callback",id:"generatelabels-callback",level:4},{value:"Legend title",id:"legend-title",level:2},{value:"AtLeastOneDatasetHandler event handler",id:"atleastonedatasethandler-event-handler",level:2}],s={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,n.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"legend"},"Legend"),(0,l.yg)("p",null,"With a chart, a legend is an area of a chart describing each of the data sets of the chart."),(0,l.yg)("p",null,"The chart legend displays data about the data sets that area appearing on the chart."),(0,l.yg)("p",null,"To get, change and apply own properties, you can invoke the ",(0,l.yg)("strong",{parentName:"p"},"set")," and ",(0,l.yg)("strong",{parentName:"p"},"get")," methods, as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"// sets and gets position option to the legend of the chart\nchart.getOptions().getLegend().setPosition(Position.BOTTOM);\n\nPosition position = chart.getOptions().getLegend().getPosition();\n")),(0,l.yg)("p",null,"The default values are set in global defaults options, see ",(0,l.yg)("a",{parentName:"p",href:"../defaults/DefaultsCharts#legend"},"default global legend options"),"."),(0,l.yg)("p",null,"The following legend options are available. "),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"align"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/enums/ElementAlign.html"},"ElementAlign")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Alignment of the legend.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"display"),(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},"If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", the legend is shown.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"events"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/options/IsEvent.html"},"IsEvent"),"[]"),(0,l.yg)("td",{parentName:"tr",align:"left"},"The events option defines the browser events that the legend should listen to.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"fullSize"),(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Marks that this box should take the full width/height of the canvas (moving other boxes).")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"maxHeight"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Maximum height of the legend, in pixels.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"maxWidth"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Maximum width of the legend, in pixels.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"position"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/enums/Position.html"},"Position")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Position of the legend.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"reverse"),(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Legend will show data sets in reverse order.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"rtl"),(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Set ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," for rendering the legends from right to left.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"textDirection"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/enums/TextDirection.html"},"TextDirection")),(0,l.yg)("td",{parentName:"tr",align:"left"},"This will force the text direction on the canvas for rendering the legend, regardless of the CSS specified on the canvas.")))),(0,l.yg)("h2",{id:"events"},"Events"),(0,l.yg)("p",null,"A chart legend can emits events during its life cycle, when the user clicks, hovers or leaves the legend."),(0,l.yg)("h3",{id:"clicking"},"Clicking"),(0,l.yg)("p",null,"The click event is thrown when a ",(0,l.yg)("inlineCode",{parentName:"p"},"click")," event is registered on a label item. To catch the event and manage it, you can add a ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/events/LegendClickEventHandler.html"},"LegendClickEventHandler")," instance to the chart options, as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new LegendClickEventHandler(){\n\n   /**\n    * Invoked when the user clicks on the chart legend.\n    * \n    * @param event legend click event\n    */\n   @Override \n   public void onClick(LegendClickEvent event){\n      // logic\n   }\n      \n}, LegendClickEvent.TYPE);\n")),(0,l.yg)("p",null,"The event provides the ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/items/LegendItem.html"},"legend item")," object with all information about the clicked item."),(0,l.yg)("p",null,"When a ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/events/LegendClickEventHandler.html"},"LegendClickEventHandler")," instance, the default behavior of the chart (enable and disable datasets) is not performed. To invoke it, you can use ",(0,l.yg)("a",{parentName:"p",href:"../defaults/#methods"},"invokeLegendOnClick")," method of ",(0,l.yg)("inlineCode",{parentName:"p"},"Defaults")," object. "),(0,l.yg)("h3",{id:"hovering"},"Hovering"),(0,l.yg)("p",null,"The hover event is thrown when a ",(0,l.yg)("inlineCode",{parentName:"p"},"mousemove")," event is registered on top of a label item. To catch the event and manage it, you can add a ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/events/LegendHoverEventHandler.html"},"LegendHoverEventHandler")," instance to the chart options, as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new LegendHoverEventHandler(){\n\n   /**\n    * Invoked when the user hovers on the chart legend.\n    * \n    * @param event legend hover event\n    */\n   @Override \n   public void onHover(LegendHoverEvent event){\n      // logic\n   }\n         \n}, LegendHoverEvent.TYPE);\n")),(0,l.yg)("p",null,"The event provides the ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/items/LegendItem.html"},"legend item")," object with all information about the hovered item."),(0,l.yg)("p",null,"When a ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/events/LegendHoverEventHandler.html"},"LegendHoverEventHandler")," instance, the default behavior of the chart is not performed. To invoke it, you can use ",(0,l.yg)("a",{parentName:"p",href:"../defaults/#methods"},"invokeLegendOnHover")," method of ",(0,l.yg)("inlineCode",{parentName:"p"},"Defaults")," object."),(0,l.yg)("h3",{id:"leaving"},"Leaving"),(0,l.yg)("p",null,"The leave event is thrown when a ",(0,l.yg)("inlineCode",{parentName:"p"},"mouseout")," event is registered on top of a label item. To catch the event and manage it, you can add a ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/events/LegendLeaveEventHandler.html"},"LegendLeaveEventHandler")," instance to the chart options, as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new LegendleaveEventHandler(){\n\n   /**\n    * Invoked when the user leaves on the chart legend.\n    * \n    * @param event legend leave event\n    */\n   @Override \n   public void onLeave(LegendLeaveEvent event){\n      // logic\n   }\n         \n}, LegendLeaveEvent.TYPE);\n")),(0,l.yg)("p",null,"The event provides the ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/items/LegendItem.html"},"legend item")," object with all information about the left item."),(0,l.yg)("p",null,"When a ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/events/LegendLeaveEventHandler.html"},"LegendLeaveEventHandler")," instance, the default behavior of the chart is not performed. To invoke it, you can use ",(0,l.yg)("a",{parentName:"p",href:"../defaults/#methods"},"invokeLegendOnLeave")," method of ",(0,l.yg)("inlineCode",{parentName:"p"},"Defaults")," object."),(0,l.yg)("h2",{id:"legend-labels"},"Legend labels"),(0,l.yg)("p",null,"The chart legend title can configure the title visible on legend element."),(0,l.yg)("p",null,"To get, change and apply own properties, you can invoke the ",(0,l.yg)("strong",{parentName:"p"},"set")," and ",(0,l.yg)("strong",{parentName:"p"},"get")," methods, as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"// sets and gets the padding and usePointStyle options for\n// the labels of legend\nchart.getOptions().getLegend().getLegendLabels().setPadding(5);\nchart.getOptions().getLegend().getLegendLabels().setUsePointStyle(true);\n\nboolean usePointStyle = chart.getOptions().getLegend().getLegendLabels().isUsePointStyle();\nint padding = chart.getOptions().getLegend().getLegendLabels().getPadding();\n")),(0,l.yg)("p",null,"The default values are set in global defaults options, see ",(0,l.yg)("a",{parentName:"p",href:"../defaults/DefaultsCharts#legend-labels"},"default global legend labels options"),"."),(0,l.yg)("p",null,"The following are the attributes that you can set:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"boxWidth"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Width of colored box.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"boxHeight"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Height of the colored box.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"color"),(0,l.yg)("td",{parentName:"tr",align:"left"},"String - String[] - ",(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,l.yg)("td",{parentName:"tr",align:"left"},"The color of the legend text label.",(0,l.yg)("br",null),"See ",(0,l.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"font"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Font family of legend text label.",(0,l.yg)("br",null),"See ",(0,l.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Padding between rows of colored boxes.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"pointStyle"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle")," - ",(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/dom/elements/Img.html"},"Img")," - ",(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,l.yg)("td",{parentName:"tr",align:"left"},"This style of point is used for the legend. Only used if ",(0,l.yg)("inlineCode",{parentName:"td"},"usePointStyle")," is ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"pointStyleWidth"),(0,l.yg)("td",{parentName:"tr",align:"left"},"double"),(0,l.yg)("td",{parentName:"tr",align:"left"},"If ",(0,l.yg)("inlineCode",{parentName:"td"},"usePointStyle")," is ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", the width of the point style used for the legend (only for PointStyle.CIRCLE, PointStyle.RECT and PointStyle.LINE).")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"textAlign"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/enums/TextAlign.html"},"TextAlign")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Horizontal alignment of the label text.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"usePointStyle"),(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Label style will match corresponding point style (size is based on fontSize, boxWidth is not used in this case).")))),(0,l.yg)("h3",{id:"callbacks"},"Callbacks"),(0,l.yg)("p",null,"A chart legend labels can be configured at runtime, providing some interfaces for a specific purpose."),(0,l.yg)("h4",{id:"filter-callback"},(0,l.yg)("inlineCode",{parentName:"h4"},"filter")," callback"),(0,l.yg)("p",null,"Allows filtering of legend items."),(0,l.yg)("p",null,"To apply a filter callback, you can set a ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/LegendFilterCallback.html"},"LegendFilterCallback")," instance to the chart options, as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getLegend().getLabels().setFilterCallback(new LegendFilterCallback(){\n\n   /**\n    * Allows filtering of legend items.\n    * \n    * @param chart chart instance\n    * @param item item to be filtered\n    * @return false to remove the item\n    *         from the container, otherwise true.\n    */\n   @Override \n   public boolean onFilter(IsChart chart, LegendItem item){\n      // logic\n      return true;\n   }\n         \n});\n")),(0,l.yg)("p",null,"The callback uses ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/items/LegendItem.html"},"LegendItem")," to enable filtering."),(0,l.yg)("h4",{id:"itemsort-callback"},(0,l.yg)("inlineCode",{parentName:"h4"},"itemSort")," callback"),(0,l.yg)("p",null,"Allows sorting of legend items."),(0,l.yg)("p",null,"To apply a item sort callback, you can set a ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/LegendItemSortCallback.html"},"LegendItemSortCallback")," instance to the chart options, as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getLegend().getLabels().setItemSortCallback(new LegendItemSortCallback(){\n\n   /**\n    * Allows sorting of legend items.\n    * \n     * @param chart chart instance\n     * @param item1 the first object to be compared.\n     * @param item2 the second object to be compared.\n     * @return a negative integer, zero, or a positive integer as the first argument is less than, equal to, or greater than the second.\n     */\n   @Override \n   public int onItemSort(IsChart chart, LegendItem item1, LegendItem item2){\n      // logic\n      return 0;\n   }\n         \n});\n")),(0,l.yg)("p",null,"The callback uses ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/items/LegendItem.html"},"LegendItem")," to enable filtering."),(0,l.yg)("h4",{id:"generatelabels-callback"},(0,l.yg)("inlineCode",{parentName:"h4"},"generateLabels")," callback"),(0,l.yg)("p",null,"Generates legend label items for each thing in the legend. Default implementation returns the text and styling for the color box. "),(0,l.yg)("p",null,"To apply a custom callback, you can set a ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/LegendLabelsCallback.html"},"legend labels callback")," instance to the chart options, as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getLegend().getLegendLabels().setLabelsCallback(new LegendLabelsCallback(){\n\n   /**\n    * Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box.\n    * \n    * @param chart chart instance\n    * @param defaultLabels list of labels created by CHART.JS using the out of the box generate labels callback.\n    * @return a list of legend items. if null, uses the default implementation\n    */\n   @Override \n   List<LegendLabelItem> generateLegendLabels(IsChart chart, List<LegendLabelItem> defaultLabels){\n      // logic\n      return legendItemListInstance;\n   }\n         \n});\n")),(0,l.yg)("p",null,"The callback gets the list of legend items, as argument, that ",(0,l.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," have been calculated as default."),(0,l.yg)("p",null,"This helps the implementation of the callback because you can change ONLY what you need to update."),(0,l.yg)("p",null,"The callback returns a list of ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/items/LegendLabelItem.html"},"label items"),", which the properties to be applied."),(0,l.yg)("h2",{id:"legend-title"},"Legend title"),(0,l.yg)("p",null,"The chart legend labels can configure the labels visible on legend element."),(0,l.yg)("p",null,"To change and apply own properties, you can invoke the ",(0,l.yg)("strong",{parentName:"p"},"set")," methods, as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'// sets text to the title of legend\nchart.getOptions().getLegend().getTitle().setText("This is my legend title");\n// sets padding to the title of legend and enables it\nchart.getOptions().getLegend().getTitle().getPadding().set(5);\nchart.getOptions().getLegend().getTitle().setDisplay(true);\n\nPadding padding = chart.getOptions().getLegend().getTitle().getPadding();\nboolean display = chart.getOptions().getLegend().getTitle().isDisplay();\n')),(0,l.yg)("p",null,"The default values are set in global defaults options, see ",(0,l.yg)("a",{parentName:"p",href:"../defaults/DefaultsCharts#legend-title"},"default global legend title options"),"."),(0,l.yg)("p",null,"The following are the attributes that you can set:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"left"}))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"display"),(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},"If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", the legend title is shown.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Number of pixels to add above and below the title text.",(0,l.yg)("br",null),"See ",(0,l.yg)("a",{parentName:"td",href:"Commons#padding"},"padding documentation")," for more details.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"color"),(0,l.yg)("td",{parentName:"tr",align:"left"},"String - String[] - ",(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,l.yg)("td",{parentName:"tr",align:"left"},"The color of the legend text title.",(0,l.yg)("br",null),"See ",(0,l.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"font"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Font family of legend text title.",(0,l.yg)("br",null),"See ",(0,l.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")))),(0,l.yg)("h2",{id:"atleastonedatasethandler-event-handler"},"AtLeastOneDatasetHandler event handler"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Charba")," provides a common implementation for legend click event handler to enable the control about how many data sets are hidden, in order to have at least 1 data set visible and avoid to have an empty chart."),(0,l.yg)("p",null,"To apply the event handler, you can set to the chart, as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"// adds handler\nchart.addHandler(new AtLeastOneDatasetHandler(), LegendClickEvent.TYPE);\n")))}h.isMDXComponent=!0}}]);