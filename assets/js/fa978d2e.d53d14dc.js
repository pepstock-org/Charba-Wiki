(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(209)),l={id:"General",title:"Common configuration",hide_title:!0,sidebar_label:"Options"},c={unversionedId:"General",id:"version-3.3/General",isDocsHomePage:!1,title:"Common configuration",description:"Common options",source:"@site/versioned_docs/version-3.3/General.md",sourceDirName:".",slug:"/General",permalink:"/Charba-Wiki/docs/3.3/General",version:"3.3",sidebar_label:"Options",frontMatter:{id:"General",title:"Common configuration",hide_title:!0,sidebar_label:"Options"},sidebar:"version-3.3/docs",previous:{title:"Defaults options",permalink:"/Charba-Wiki/docs/3.3/Defaults"},next:{title:"Common components",permalink:"/Charba-Wiki/docs/3.3/Configuration"}},o=[{value:"Common options",id:"common-options",children:[]},{value:"Responsive",id:"responsive",children:[{value:"Printing",id:"printing",children:[]}]},{value:"Device pixel ratio",id:"device-pixel-ratio",children:[]},{value:"Interactions",id:"interactions",children:[]},{value:"Modes",id:"modes",children:[]},{value:"Events",id:"events",children:[{value:"Clicking",id:"clicking",children:[]},{value:"Hovering",id:"hovering",children:[]},{value:"Resizing",id:"resizing",children:[]},{value:"Selecting a dataset",id:"selecting-a-dataset",children:[]},{value:"Clicking on the title",id:"clicking-on-the-title",children:[]},{value:"Clicking on an axis",id:"clicking-on-an-axis",children:[]}]}],b={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"common-options"},"Common options"),Object(i.b)("p",null,"These sections describe general configuration options that can apply elsewhere to the charts."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Responsive")," defines responsive chart options that apply to all charts."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Pixel ratio")," defines the physical display pixel ratio."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Interactions")," defines options that reflect how hovering chart elements works."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Events")," defines options that reflect how chart events work."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Modes")," defines options that reflect how to interact with chart via hover or tooltips.")),Object(i.b)("h2",{id:"responsive"},"Responsive"),Object(i.b)("p",null,"When it comes to change the chart size based on the window size, a major limitation is that the chart canvas ",Object(i.b)("em",{parentName:"p"},"render")," size can ",Object(i.b)("strong",{parentName:"p"},"not")," be expressed with relative values, contrary to the ",Object(i.b)("em",{parentName:"p"},"display")," size.\nFurthermore, these sizes are independent from each other and thus the canvas ",Object(i.b)("em",{parentName:"p"},"render")," size does not adjust automatically based on the ",Object(i.b)("em",{parentName:"p"},"display")," size, making the rendering inaccurate."),Object(i.b)("p",null,"The following examples ",Object(i.b)("strong",{parentName:"p"},"do not work")," without setting ",Object(i.b)("inlineCode",{parentName:"p"},"maintainAspectRatio")," to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", because, setting to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", the chart will maintain the provided dimensions:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'// invalid values, the canvas of chart doesn\'t resize\nchart.setWidth("80vh");\nchart.setHeight("80vh");\n// in order to use the passed dimensions\nchart.getOptions().setMaintainAspectRatio(false);\n')),Object(i.b)("p",null,"Leveraging on ",Object(i.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," capabilities, ",Object(i.b)("strong",{parentName:"p"},"Charba")," provides options to enable responsiveness and control the resize behavior of charts by detecting when the canvas ",Object(i.b)("em",{parentName:"p"},"display")," size changes and update the ",Object(i.b)("em",{parentName:"p"},"render")," size accordingly."),Object(i.b)("p",null,"To change and apply own properties, you can invoke the ",Object(i.b)("strong",{parentName:"p"},"set")," methods, both at chart and global level, as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().setResponsive(true);\n// global\nDefaults.get().getGlobal().setResponsive(false);\n")),Object(i.b)("p",null,"Table with options:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"maintainAspectRatio"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",{parentName:"tr",align:null},"Maintain the original canvas aspect ratio (width / height) when resizing.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"responsive"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",{parentName:"tr",align:null},"Resizes the chart canvas when its container does.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"responsiveAnimationDuration"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"0"),Object(i.b)("td",{parentName:"tr",align:null},"Duration in milliseconds it takes to animate to new size after a resize event.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"aspectRatio"),Object(i.b)("td",{parentName:"tr",align:null},"double"),Object(i.b)("td",{parentName:"tr",align:null},"2"),Object(i.b)("td",{parentName:"tr",align:null},"Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas).")))),Object(i.b)("h3",{id:"printing"},"Printing"),Object(i.b)("p",null,"CSS media queries allow changing styles when printing a page. The CSS applied from these media queries may cause charts to need to resize. However, the resize won't happen automatically. To support resizing charts when printing, one needs to invoke the following statement after the ",Object(i.b)("strong",{parentName:"p"},"Charba")," setup:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"JsWindowHelper.enableResizeOnBeforePrint();\n")),Object(i.b)("h2",{id:"device-pixel-ratio"},"Device pixel ratio"),Object(i.b)("p",null,"By default the chart's canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio (e.g. Retina displays)."),Object(i.b)("p",null,"For applications where a chart will be converted to a bitmap, or printed to a higher DPI medium it can be desirable to render the chart at a higher resolution than the default."),Object(i.b)("p",null,"Setting ",Object(i.b)("inlineCode",{parentName:"p"},"devicePixelRatio")," property to a value other than 1 will force the canvas size to be scaled by that amount, relative to the container size. There should be no visible difference on screen; the difference will only be visible when the image is zoomed or printed."),Object(i.b)("p",null,"To change and apply own property value, you can invoke the ",Object(i.b)("strong",{parentName:"p"},"set")," methods, both at chart and global level, as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().setDevicePixelRatio(2D);\n// global\nDefaults.get().getGlobal().setDevicePixelRatio(2D);\n")),Object(i.b)("p",null,"Table with options:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"devicePixelRatio"),Object(i.b)("td",{parentName:"tr",align:null},"double"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/Window.html##getDevicePixelRatio--"},"Window.getDevicePixelRatio()")),Object(i.b)("td",{parentName:"tr",align:null},"Override the window's default devicePixelRatio.")))),Object(i.b)("h2",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The hover configuration is passed to a chart by:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// example\nchart.getOptions().getHover().setMode(InteractionMode.NEAREST);\nchart.getOptions().getHover().setIntersect(true);\nchart.getOptions().getHover().setAnimationDuration(1000);\n")),Object(i.b)("p",null,"Table with options:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"animationDuration"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"400"),Object(i.b)("td",{parentName:"tr",align:null},"Duration in milliseconds it takes to animate hover style changes.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"axis"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionAxis.html"},"InteractionAxis")),Object(i.b)("td",{parentName:"tr",align:null},"InteractionAxis.X"),Object(i.b)("td",{parentName:"tr",align:null},"Define which directions are used in calculating distances.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"intersect"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",{parentName:"tr",align:null},"if ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", the hover mode only applies when the mouse position intersects an item on the chart.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"mode"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html"},"InteractionMode")),Object(i.b)("td",{parentName:"tr",align:null},"InteractionMode.NERAEST"),Object(i.b)("td",{parentName:"tr",align:null},"Sets which elements appear in the tooltip.")))),Object(i.b)("h2",{id:"modes"},"Modes"),Object(i.b)("p",null,"When configuring interaction with the chart via hover or tooltips, a number of different modes are available."),Object(i.b)("p",null,"The available modes are detailed ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html"},"here")," and how they behave in conjunction with the ",Object(i.b)("inlineCode",{parentName:"p"},"intersect")," property setting, available on ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Hover.html"},"hover")," and ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Tooltips.html"},"tooltips")," configuration elements."),Object(i.b)("p",null,"To change and apply own properties, see the following example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().getHover().setMode(InteractionMode.NEAREST);\n")),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)("p",null,"You can set which events must be caught and how to manage them by event handlers. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// example\nchart.getOptions().setEvents(Event.CLICK, Event.MOUSEMOVE);\n")),Object(i.b)("p",null,"Table with options:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"events"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Event.html"},"Event"),"[]"),Object(i.b)("td",{parentName:"tr",align:null},"Event.MOUSEMOVE, Event.MOUSEOUT, Event.CLICK, Event.TOUCHSTART, Event.TOUCHMOVE, Event.TOUCHEND"),Object(i.b)("td",{parentName:"tr",align:null},"The events option defines the browser events that the chart should listen to for tooltips and hovering.")))),Object(i.b)("h3",{id:"clicking"},"Clicking"),Object(i.b)("p",null,"The click event is thrown if the event type is ",Object(i.b)("inlineCode",{parentName:"p"},"mouseup")," or ",Object(i.b)("inlineCode",{parentName:"p"},"click"),". To catch the event and manage it, you can add a ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/ChartClickEventHandler.html"},"ChartClickEventHandler")," instance to the chart options, as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new ChartClickEventHandler() {\n\n   /**\n    * Invoked when the user clicks on the chart.\n    * \n    * @param event chart click event\n    */\n   @Override \n   public void onClick(ChartClickEvent event){\n      // logic\n   }\n         \n}, ChartClickEvent.TYPE);\n")),Object(i.b)("h3",{id:"hovering"},"Hovering"),Object(i.b)("p",null,"The hover event is thrown when any of the events fire on the chart. To catch the event and manage it, you can add a ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/ChartHoverEvent.html"},"ChartHoverEvent")," instance to the chart options, as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new ChartHoverEventHandler() {\n\n   /**\n    * Invoked when the user hovers on the chart.\n    * \n    * @param event chart hover event\n    */\n   @Override \n   public void onHover(ChartHoverEvent event){\n      // logic\n   }\n      \n}, ChartHoverEvent.TYPE);\n")),Object(i.b)("h3",{id:"resizing"},"Resizing"),Object(i.b)("p",null,"The resize event is thrown when the chart has been resized. To catch the event and manage it, you can add a ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/ChartClickEventHandler.html"},"ChartResizeEventHandler")," instance to the chart options, as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new ChartResizeEventHandler() {\n\n   /**\n    * Invoked when the chart has been resized.\n    * \n    * @param event chart resize event\n    */\n   @Override \n   public void onResize(ChartResizeEvent event){\n      // logic\n   }\n   \n}, ChartResizeEvent.TYPE);\n")),Object(i.b)("h3",{id:"selecting-a-dataset"},"Selecting a dataset"),Object(i.b)("p",null,"The click event is thrown if the event type is ",Object(i.b)("inlineCode",{parentName:"p"},"mouseup")," or ",Object(i.b)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering a dataset element, you can add a ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler")," instance to the chart options, as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new DatasetSelectionEventHandler() {\n    \n    /**\n     * Invoked when the user clicks on the chart to select a dataset.\n     * \n     * @param event chart dataset selection event\n     */         \n    @Override\n    public void onSelect(DatasetSelectionEvent event) {\n        // logic\n    }\n}, DatasetSelectionEvent.TYPE);\n")),Object(i.b)("p",null,"The dataset selection ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/DatasetSelectionEvent.html"},"event")," contains the selected dataset ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DatasetItem.html"},"item")," with all info about the selected dataset and item."),Object(i.b)("h3",{id:"clicking-on-the-title"},"Clicking on the title"),Object(i.b)("p",null,"The click event is throw if the event type is ",Object(i.b)("inlineCode",{parentName:"p"},"mouseup")," or ",Object(i.b)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering the title element, you can add a ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/TitleClickEventHandler.html"},"TitleClickEventHandler")," instance to the chart options, as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new TitleClickEventHandler() {\n    \n    /**\n     * Invoked when the user clicks on the chart title.\n     * \n     * @param event title click event\n     */\n    @Override\n    public onClick(TitleClickEvent event) {\n        // logic\n    }\n}, TitleClickEvent.TYPE);\n")),Object(i.b)("h3",{id:"clicking-on-an-axis"},"Clicking on an axis"),Object(i.b)("p",null,"The click event is throw if the event type is ",Object(i.b)("inlineCode",{parentName:"p"},"mouseup")," or ",Object(i.b)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering an axis element, you can add a ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/AxisClickEventHandler.html"},"AxisClickEventHandler")," instance to the chart options, as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new AxisClickEventHandler() {\n    \n    /**\n     * Invoked when the user clicks on the chart axis.\n     * \n     * @param event axis click event\n     */\n    @Override\n    public onClick(AxisClickEvent event) {\n        // logic\n    }\n}, AxisClickEvent.TYPE);\n")),Object(i.b)("p",null,"The axis click ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/AxisClickEvent.html"},"event")," contains the selected scale ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ScaleItem.html"},"item")," with all info about the selected scale."),Object(i.b)("p",null,"Due to charts can be created with specific axes, the axis click event can provide the ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Axis.html"},"axes")," configurations if there are, enabling you to get the instance used to configure the chart."))}p.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||h[d]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);