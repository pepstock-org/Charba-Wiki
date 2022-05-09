"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[87756],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=s(a),c=l,m=h["".concat(p,".").concat(c)]||h[c]||g[c]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},74874:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return g}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=["components"],i={id:"Legend",title:"Legend",hide_title:!0,sidebar_label:"Legend"},p=void 0,s={unversionedId:"configuration/Legend",id:"version-4.1/configuration/Legend",title:"Legend",description:"Legend",source:"@site/versioned_docs/version-4.1/configuration/Legend.md",sourceDirName:"configuration",slug:"/configuration/Legend",permalink:"/Charba-Wiki/docs/4.1/configuration/Legend",draft:!1,tags:[],version:"4.1",frontMatter:{id:"Legend",title:"Legend",hide_title:!0,sidebar_label:"Legend"},sidebar:"version-4.1/docs",previous:{title:"Datasets",permalink:"/Charba-Wiki/docs/4.1/configuration/Datasets"},next:{title:"Tooltip",permalink:"/Charba-Wiki/docs/4.1/configuration/Tooltip"}},d={},g=[{value:"Legend",id:"legend",level:2},{value:"Events",id:"events",level:2},{value:"Clicking",id:"clicking",level:3},{value:"Hovering",id:"hovering",level:3},{value:"Leaving",id:"leaving",level:3},{value:"Legend labels",id:"legend-labels",level:2},{value:"Callbacks",id:"callbacks",level:3},{value:"<code>filter</code> callback",id:"filter-callback",level:4},{value:"<code>itemSort</code> callback",id:"itemsort-callback",level:4},{value:"<code>generateLabels</code> callback",id:"generatelabels-callback",level:4},{value:"Legend title",id:"legend-title",level:2},{value:"AtLeastOneDatasetHandler event handler",id:"atleastonedatasethandler-event-handler",level:2}],h={toc:g};function c(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"legend"},"Legend"),(0,r.kt)("p",null,"With a chart, a legend is an area of a chart describing each of the data sets of the chart."),(0,r.kt)("p",null,"The chart legend displays data about the data sets that area appearing on the chart."),(0,r.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,r.kt)("strong",{parentName:"p"},"set")," and ",(0,r.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets position option to the legend of the chart\nchart.getOptions().getLegend().setPosition(Position.BOTTOM);\n\nPosition position = chart.getOptions().getLegend().getPosition();\n")),(0,r.kt)("p",null,"The default values are set in global defaults options, see ",(0,r.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#legend"},"default global legend options"),"."),(0,r.kt)("p",null,"The following legend options are available. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"align"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/ElementAlign.html"},"ElementAlign")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alignment of the legend.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"display"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the legend is shown.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"events"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/Event.html"},"Event"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The events option defines the browser events that the legend should listen to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fullSize"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Marks that this box should take the full width/height of the canvas (moving other boxes).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxHeight"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum height of the legend, in pixels.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxWidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum width of the legend, in pixels.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"position"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/Position.html"},"Position")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Position of the legend.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reverse"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Legend will show data sets in reverse order.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rtl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," for rendering the legends from right to left.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"textDirection"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/TextDirection.html"},"TextDirection")),(0,r.kt)("td",{parentName:"tr",align:"left"},"This will force the text direction on the canvas for rendering the legend, regardless of the CSS specified on the canvas.")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"A chart legend can emits events during its life cycle, when the user clicks, hovers or leaves the legend."),(0,r.kt)("h3",{id:"clicking"},"Clicking"),(0,r.kt)("p",null,"The click event is thrown when a ",(0,r.kt)("inlineCode",{parentName:"p"},"click")," event is registered on a label item. To catch the event and manage it, you can add a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/LegendClickEventHandler.html"},"LegendClickEventHandler")," instance to the chart options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new LegendClickEventHandler(){\n\n   /**\n    * Invoked when the user clicks on the chart legend.\n    * \n    * @param event legend click event\n    */\n   @Override \n   public void onClick(LegendClickEvent event){\n      // logic\n   }\n      \n}, LegendClickEvent.TYPE);\n")),(0,r.kt)("p",null,"The event provides the ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/LegendItem.html"},"legend item")," object with all information about the clicked item."),(0,r.kt)("p",null,"When a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/LegendClickEventHandler.html"},"LegendClickEventHandler")," instance, the default behavior of the chart (enable and disable datasets) is not performed. To invoke it, you can use ",(0,r.kt)("a",{parentName:"p",href:"../defaults/#methods"},"invokeLegendOnClick")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"Defaults")," object. "),(0,r.kt)("h3",{id:"hovering"},"Hovering"),(0,r.kt)("p",null,"The hover event is thrown when a ",(0,r.kt)("inlineCode",{parentName:"p"},"mousemove")," event is registered on top of a label item. To catch the event and manage it, you can add a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/LegendHoverEventHandler.html"},"LegendHoverEventHandler")," instance to the chart options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new LegendHoverEventHandler(){\n\n   /**\n    * Invoked when the user hovers on the chart legend.\n    * \n    * @param event legend hover event\n    */\n   @Override \n   public void onHover(LegendHoverEvent event){\n      // logic\n   }\n         \n}, LegendHoverEvent.TYPE);\n")),(0,r.kt)("p",null,"The event provides the ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/LegendItem.html"},"legend item")," object with all information about the hovered item."),(0,r.kt)("p",null,"When a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/LegendHoverEventHandler.html"},"LegendHoverEventHandler")," instance, the default behavior of the chart is not performed. To invoke it, you can use ",(0,r.kt)("a",{parentName:"p",href:"../defaults/#methods"},"invokeLegendOnHover")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"Defaults")," object."),(0,r.kt)("h3",{id:"leaving"},"Leaving"),(0,r.kt)("p",null,"The leave event is thrown when a ",(0,r.kt)("inlineCode",{parentName:"p"},"mouseout")," event is registered on top of a label item. To catch the event and manage it, you can add a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/LegendLeaveEventHandler.html"},"LegendLeaveEventHandler")," instance to the chart options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new LegendleaveEventHandler(){\n\n   /**\n    * Invoked when the user leaves on the chart legend.\n    * \n    * @param event legend leave event\n    */\n   @Override \n   public void onLeave(LegendLeaveEvent event){\n      // logic\n   }\n         \n}, LegendLeaveEvent.TYPE);\n")),(0,r.kt)("p",null,"The event provides the ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/LegendItem.html"},"legend item")," object with all information about the left item."),(0,r.kt)("p",null,"When a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/LegendLeaveEventHandler.html"},"LegendLeaveEventHandler")," instance, the default behavior of the chart is not performed. To invoke it, you can use ",(0,r.kt)("a",{parentName:"p",href:"../defaults/#methods"},"invokeLegendOnLeave")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"Defaults")," object."),(0,r.kt)("h2",{id:"legend-labels"},"Legend labels"),(0,r.kt)("p",null,"The chart legend title can configure the title visible on legend element."),(0,r.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,r.kt)("strong",{parentName:"p"},"set")," and ",(0,r.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets the padding and usePointStyle options for\n// the labels of legend\nchart.getOptions().getLegend().getLegendLabels().setPadding(5);\nchart.getOptions().getLegend().getLegendLabels().setUsePointStyle(true);\n\nboolean usePointStyle = chart.getOptions().getLegend().getLegendLabels().isUsePointStyle();\nint padding = chart.getOptions().getLegend().getLegendLabels().getPadding();\n")),(0,r.kt)("p",null,"The default values are set in global defaults options, see ",(0,r.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#legend-labels"},"default global legend labels options"),"."),(0,r.kt)("p",null,"The following are the attributes that you can set:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"boxWidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Width of colored box.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"boxHeight"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Height of the colored box.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"color"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String - String[] - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The color of the legend text label.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"font"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/options/Font.html"},"Font")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Font family of legend text label.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Padding between rows of colored boxes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pointStyle"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle")," - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/dom/elements/Img.html"},"Img")," - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,r.kt)("td",{parentName:"tr",align:"left"},"This style of point is used for the legend. Only used if ",(0,r.kt)("inlineCode",{parentName:"td"},"usePointStyle")," is true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"textAlign"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/TextAlign.html"},"TextAlign")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Horizontal alignment of the label text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"usePointStyle"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Label style will match corresponding point style (size is based on fontSize, boxWidth is not used in this case).")))),(0,r.kt)("h3",{id:"callbacks"},"Callbacks"),(0,r.kt)("p",null,"A chart legend labels can be configured at runtime, providing some interfaces for a specific purpose."),(0,r.kt)("h4",{id:"filter-callback"},(0,r.kt)("inlineCode",{parentName:"h4"},"filter")," callback"),(0,r.kt)("p",null,"Allows filtering of legend items."),(0,r.kt)("p",null,"To apply a filter callback, you can set a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/LegendFilterCallback.html"},"LegendFilterCallback")," instance to the chart options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getLegend().getLabels().setFilterCallback(new LegendFilterCallback(){\n\n   /**\n    * Allows filtering of legend items.\n    * \n    * @param chart chart instance\n    * @param item item to be filtered\n    * @return false to remove the item\n    *         from the container, otherwise true.\n    */\n   @Override \n   public boolean onFilter(IsChart chart, LegendItem item){\n      // logic\n      return true;\n   }\n         \n});\n")),(0,r.kt)("p",null,"The callback uses ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/LegendItem.html"},"LegendItem")," to enable filtering."),(0,r.kt)("h4",{id:"itemsort-callback"},(0,r.kt)("inlineCode",{parentName:"h4"},"itemSort")," callback"),(0,r.kt)("p",null,"Allows sorting of legend items."),(0,r.kt)("p",null,"To apply a item sort callback, you can set a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/LegendItemSortCallback.html"},"LegendItemSortCallback")," instance to the chart options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getLegend().getLabels().setItemSortCallback(new LegendItemSortCallback(){\n\n   /**\n    * Allows sorting of legend items.\n    * \n     * @param chart chart instance\n     * @param item1 the first object to be compared.\n     * @param item2 the second object to be compared.\n     * @return a negative integer, zero, or a positive integer as the first argument is less than, equal to, or greater than the second.\n     */\n   @Override \n   public int onItemSort(IsChart chart, LegendItem item1, LegendItem item2){\n      // logic\n      return 0;\n   }\n         \n});\n")),(0,r.kt)("p",null,"The callback uses ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/LegendItem.html"},"LegendItem")," to enable filtering."),(0,r.kt)("h4",{id:"generatelabels-callback"},(0,r.kt)("inlineCode",{parentName:"h4"},"generateLabels")," callback"),(0,r.kt)("p",null,"Generates legend label items for each thing in the legend. Default implementation returns the text and styling for the color box. "),(0,r.kt)("p",null,"To apply a custom callback, you can set a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/LegendLabelsCallback.html"},"legend labels callback")," instance to the chart options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getLegend().getLegendLabels().setLabelsCallback(new LegendLabelsCallback(){\n\n   /**\n    * Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box.\n    * \n    * @param chart chart instance\n    * @param defaultLabels list of labels created by CHART.JS using the out of the box generate labels callback.\n    * @return a list of legend items. if null, uses the default implementation\n    */\n   @Override \n   List<LegendLabelItem> generateLegendLabels(IsChart chart, List<LegendLabelItem> defaultLabels){\n      // logic\n      return legendItemListInstance;\n   }\n         \n});\n")),(0,r.kt)("p",null,"The callback gets the list of legend items, as argument, that ",(0,r.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," have been calculated as default."),(0,r.kt)("p",null,"This helps the implementation of the callback because you can change ONLY what you need to update."),(0,r.kt)("p",null,"The callback returns a list of ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/LegendLabelItem.html"},"label items"),", which the properties to be applied."),(0,r.kt)("h2",{id:"legend-title"},"Legend title"),(0,r.kt)("p",null,"The chart legend labels can configure the labels visible on legend element."),(0,r.kt)("p",null,"To change and apply own properties, you can invoke the ",(0,r.kt)("strong",{parentName:"p"},"set")," methods, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// sets text to the title of legend\nchart.getOptions().getLegend().getTitle().setText("This is my legend title");\n// sets padding to the title of legend and enables it\nchart.getOptions().getLegend().getTitle().getPadding().set(5);\nchart.getOptions().getLegend().getTitle().setDisplay(true);\n\nPadding padding = chart.getOptions().getLegend().getTitle().getPadding();\nboolean display = chart.getOptions().getLegend().getTitle().isDisplay();\n')),(0,r.kt)("p",null,"The default values are set in global defaults options, see ",(0,r.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#legend-title"},"default global legend title options"),"."),(0,r.kt)("p",null,"The following are the attributes that you can set:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"display"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the legend title is shown.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of pixels to add above and below the title text.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"Commons#padding"},"padding documentation")," for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"color"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String - String[] - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The color of the legend text title.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"font"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/options/Font.html"},"Font")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Font family of legend text title.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")))),(0,r.kt)("h2",{id:"atleastonedatasethandler-event-handler"},"AtLeastOneDatasetHandler event handler"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides a common implementation for legend click event handler to enable the control about how many data sets are hidden, in order to have at least 1 data set visible and avoid to have an empty chart."),(0,r.kt)("p",null,"To apply the event handler, you can set to the chart, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// adds handler\nchart.addHandler(new AtLeastOneDatasetHandler(), LegendClickEvent.TYPE);\n")))}c.isMDXComponent=!0}}]);