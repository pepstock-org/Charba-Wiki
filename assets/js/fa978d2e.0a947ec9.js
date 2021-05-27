(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[8111],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(p,".").concat(u)]||d[u]||h[u]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7419:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l={id:"General",title:"Common configuration",hide_title:!0,sidebar_label:"Options"},o={unversionedId:"General",id:"version-3.3/General",isDocsHomePage:!1,title:"Common configuration",description:"Common options",source:"@site/versioned_docs/version-3.3/General.md",sourceDirName:".",slug:"/General",permalink:"/Charba-Wiki/docs/3.3/General",version:"3.3",sidebar_label:"Options",frontMatter:{id:"General",title:"Common configuration",hide_title:!0,sidebar_label:"Options"},sidebar:"version-3.3/docs",previous:{title:"Defaults options",permalink:"/Charba-Wiki/docs/3.3/Defaults"},next:{title:"Common components",permalink:"/Charba-Wiki/docs/3.3/Configuration"}},p=[{value:"Common options",id:"common-options",children:[]},{value:"Responsive",id:"responsive",children:[{value:"Printing",id:"printing",children:[]}]},{value:"Device pixel ratio",id:"device-pixel-ratio",children:[]},{value:"Interactions",id:"interactions",children:[]},{value:"Modes",id:"modes",children:[]},{value:"Events",id:"events",children:[{value:"Clicking",id:"clicking",children:[]},{value:"Hovering",id:"hovering",children:[]},{value:"Resizing",id:"resizing",children:[]},{value:"Selecting a dataset",id:"selecting-a-dataset",children:[]},{value:"Clicking on the title",id:"clicking-on-the-title",children:[]},{value:"Clicking on an axis",id:"clicking-on-an-axis",children:[]}]}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"common-options"},"Common options"),(0,i.kt)("p",null,"These sections describe general configuration options that can apply elsewhere to the charts."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Responsive")," defines responsive chart options that apply to all charts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pixel ratio")," defines the physical display pixel ratio."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Interactions")," defines options that reflect how hovering chart elements works."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Events")," defines options that reflect how chart events work."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modes")," defines options that reflect how to interact with chart via hover or tooltips.")),(0,i.kt)("h2",{id:"responsive"},"Responsive"),(0,i.kt)("p",null,"When it comes to change the chart size based on the window size, a major limitation is that the chart canvas ",(0,i.kt)("em",{parentName:"p"},"render")," size can ",(0,i.kt)("strong",{parentName:"p"},"not")," be expressed with relative values, contrary to the ",(0,i.kt)("em",{parentName:"p"},"display")," size.\nFurthermore, these sizes are independent from each other and thus the canvas ",(0,i.kt)("em",{parentName:"p"},"render")," size does not adjust automatically based on the ",(0,i.kt)("em",{parentName:"p"},"display")," size, making the rendering inaccurate."),(0,i.kt)("p",null,"The following examples ",(0,i.kt)("strong",{parentName:"p"},"do not work")," without setting ",(0,i.kt)("inlineCode",{parentName:"p"},"maintainAspectRatio")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", because, setting to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the chart will maintain the provided dimensions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// invalid values, the canvas of chart doesn\'t resize\nchart.setWidth("80vh");\nchart.setHeight("80vh");\n// in order to use the passed dimensions\nchart.getOptions().setMaintainAspectRatio(false);\n')),(0,i.kt)("p",null,"Leveraging on ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," capabilities, ",(0,i.kt)("strong",{parentName:"p"},"Charba")," provides options to enable responsiveness and control the resize behavior of charts by detecting when the canvas ",(0,i.kt)("em",{parentName:"p"},"display")," size changes and update the ",(0,i.kt)("em",{parentName:"p"},"render")," size accordingly."),(0,i.kt)("p",null,"To change and apply own properties, you can invoke the ",(0,i.kt)("strong",{parentName:"p"},"set")," methods, both at chart and global level, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().setResponsive(true);\n// global\nDefaults.get().getGlobal().setResponsive(false);\n")),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maintainAspectRatio"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Maintain the original canvas aspect ratio (width / height) when resizing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"responsive"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Resizes the chart canvas when its container does.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"responsiveAnimationDuration"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"Duration in milliseconds it takes to animate to new size after a resize event.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"aspectRatio"),(0,i.kt)("td",{parentName:"tr",align:null},"double"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas).")))),(0,i.kt)("h3",{id:"printing"},"Printing"),(0,i.kt)("p",null,"CSS media queries allow changing styles when printing a page. The CSS applied from these media queries may cause charts to need to resize. However, the resize won't happen automatically. To support resizing charts when printing, one needs to invoke the following statement after the ",(0,i.kt)("strong",{parentName:"p"},"Charba")," setup:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"JsWindowHelper.enableResizeOnBeforePrint();\n")),(0,i.kt)("h2",{id:"device-pixel-ratio"},"Device pixel ratio"),(0,i.kt)("p",null,"By default the chart's canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio (e.g. Retina displays)."),(0,i.kt)("p",null,"For applications where a chart will be converted to a bitmap, or printed to a higher DPI medium it can be desirable to render the chart at a higher resolution than the default."),(0,i.kt)("p",null,"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"devicePixelRatio")," property to a value other than 1 will force the canvas size to be scaled by that amount, relative to the container size. There should be no visible difference on screen; the difference will only be visible when the image is zoomed or printed."),(0,i.kt)("p",null,"To change and apply own property value, you can invoke the ",(0,i.kt)("strong",{parentName:"p"},"set")," methods, both at chart and global level, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().setDevicePixelRatio(2D);\n// global\nDefaults.get().getGlobal().setDevicePixelRatio(2D);\n")),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"devicePixelRatio"),(0,i.kt)("td",{parentName:"tr",align:null},"double"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/utils/Window.html##getDevicePixelRatio--"},"Window.getDevicePixelRatio()")),(0,i.kt)("td",{parentName:"tr",align:null},"Override the window's default devicePixelRatio.")))),(0,i.kt)("h2",{id:"interactions"},"Interactions"),(0,i.kt)("p",null,"The hover configuration is passed to a chart by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// example\nchart.getOptions().getHover().setMode(InteractionMode.NEAREST);\nchart.getOptions().getHover().setIntersect(true);\nchart.getOptions().getHover().setAnimationDuration(1000);\n")),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"animationDuration"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"400"),(0,i.kt)("td",{parentName:"tr",align:null},"Duration in milliseconds it takes to animate hover style changes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"axis"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/InteractionAxis.html"},"InteractionAxis")),(0,i.kt)("td",{parentName:"tr",align:null},"InteractionAxis.X"),(0,i.kt)("td",{parentName:"tr",align:null},"Define which directions are used in calculating distances.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"intersect"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"if ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the hover mode only applies when the mouse position intersects an item on the chart.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html"},"InteractionMode")),(0,i.kt)("td",{parentName:"tr",align:null},"InteractionMode.NERAEST"),(0,i.kt)("td",{parentName:"tr",align:null},"Sets which elements appear in the tooltip.")))),(0,i.kt)("h2",{id:"modes"},"Modes"),(0,i.kt)("p",null,"When configuring interaction with the chart via hover or tooltips, a number of different modes are available."),(0,i.kt)("p",null,"The available modes are detailed ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html"},"here")," and how they behave in conjunction with the ",(0,i.kt)("inlineCode",{parentName:"p"},"intersect")," property setting, available on ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/Hover.html"},"hover")," and ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/Tooltips.html"},"tooltips")," configuration elements."),(0,i.kt)("p",null,"To change and apply own properties, see the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().getHover().setMode(InteractionMode.NEAREST);\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"You can set which events must be caught and how to manage them by event handlers. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// example\nchart.getOptions().setEvents(Event.CLICK, Event.MOUSEMOVE);\n")),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"events"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/Event.html"},"Event"),"[]"),(0,i.kt)("td",{parentName:"tr",align:null},"Event.MOUSEMOVE, Event.MOUSEOUT, Event.CLICK, Event.TOUCHSTART, Event.TOUCHMOVE, Event.TOUCHEND"),(0,i.kt)("td",{parentName:"tr",align:null},"The events option defines the browser events that the chart should listen to for tooltips and hovering.")))),(0,i.kt)("h3",{id:"clicking"},"Clicking"),(0,i.kt)("p",null,"The click event is thrown if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/ChartClickEventHandler.html"},"ChartClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new ChartClickEventHandler() {\n\n   /**\n    * Invoked when the user clicks on the chart.\n    * \n    * @param event chart click event\n    */\n   @Override \n   public void onClick(ChartClickEvent event){\n      // logic\n   }\n         \n}, ChartClickEvent.TYPE);\n")),(0,i.kt)("h3",{id:"hovering"},"Hovering"),(0,i.kt)("p",null,"The hover event is thrown when any of the events fire on the chart. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/ChartHoverEvent.html"},"ChartHoverEvent")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new ChartHoverEventHandler() {\n\n   /**\n    * Invoked when the user hovers on the chart.\n    * \n    * @param event chart hover event\n    */\n   @Override \n   public void onHover(ChartHoverEvent event){\n      // logic\n   }\n      \n}, ChartHoverEvent.TYPE);\n")),(0,i.kt)("h3",{id:"resizing"},"Resizing"),(0,i.kt)("p",null,"The resize event is thrown when the chart has been resized. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/ChartClickEventHandler.html"},"ChartResizeEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new ChartResizeEventHandler() {\n\n   /**\n    * Invoked when the chart has been resized.\n    * \n    * @param event chart resize event\n    */\n   @Override \n   public void onResize(ChartResizeEvent event){\n      // logic\n   }\n   \n}, ChartResizeEvent.TYPE);\n")),(0,i.kt)("h3",{id:"selecting-a-dataset"},"Selecting a dataset"),(0,i.kt)("p",null,"The click event is thrown if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering a dataset element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new DatasetSelectionEventHandler() {\n    \n    /**\n     * Invoked when the user clicks on the chart to select a dataset.\n     * \n     * @param event chart dataset selection event\n     */         \n    @Override\n    public void onSelect(DatasetSelectionEvent event) {\n        // logic\n    }\n}, DatasetSelectionEvent.TYPE);\n")),(0,i.kt)("p",null,"The dataset selection ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetSelectionEvent.html"},"event")," contains the selected dataset ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/items/DatasetItem.html"},"item")," with all info about the selected dataset and item."),(0,i.kt)("h3",{id:"clicking-on-the-title"},"Clicking on the title"),(0,i.kt)("p",null,"The click event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering the title element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/TitleClickEventHandler.html"},"TitleClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new TitleClickEventHandler() {\n    \n    /**\n     * Invoked when the user clicks on the chart title.\n     * \n     * @param event title click event\n     */\n    @Override\n    public onClick(TitleClickEvent event) {\n        // logic\n    }\n}, TitleClickEvent.TYPE);\n")),(0,i.kt)("h3",{id:"clicking-on-an-axis"},"Clicking on an axis"),(0,i.kt)("p",null,"The click event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering an axis element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/AxisClickEventHandler.html"},"AxisClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new AxisClickEventHandler() {\n    \n    /**\n     * Invoked when the user clicks on the chart axis.\n     * \n     * @param event axis click event\n     */\n    @Override\n    public onClick(AxisClickEvent event) {\n        // logic\n    }\n}, AxisClickEvent.TYPE);\n")),(0,i.kt)("p",null,"The axis click ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/AxisClickEvent.html"},"event")," contains the selected scale ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/items/ScaleItem.html"},"item")," with all info about the selected scale."),(0,i.kt)("p",null,"Due to charts can be created with specific axes, the axis click event can provide the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/Axis.html"},"axes")," configurations if there are, enabling you to get the instance used to configure the chart."))}c.isMDXComponent=!0}}]);