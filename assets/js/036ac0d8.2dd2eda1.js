(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||h[d]||c;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),c=(n(0),n(209)),i={id:"Interaction",title:"Interaction",hide_title:!0,sidebar_label:"Interaction"},o={unversionedId:"configuration/Interaction",id:"configuration/Interaction",isDocsHomePage:!1,title:"Interaction",description:"Interaction",source:"@site/docs/configuration/Interaction.md",sourceDirName:"configuration",slug:"/configuration/Interaction",permalink:"/Charba-Wiki/docs/configuration/Interaction",version:"current",sidebar_label:"Interaction",frontMatter:{id:"Interaction",title:"Interaction",hide_title:!0,sidebar_label:"Interaction"},sidebar:"docs",previous:{title:"Common configuration",permalink:"/Charba-Wiki/docs/configuration/Commons"},next:{title:"Animation",permalink:"/Charba-Wiki/docs/configuration/Animation"}},l=[{value:"Interaction",id:"interaction",children:[]},{value:"Hover",id:"hover",children:[]},{value:"Events",id:"events",children:[{value:"Clicking",id:"clicking",children:[]},{value:"Hovering",id:"hovering",children:[]},{value:"Resizing",id:"resizing",children:[]},{value:"Selecting a dataset",id:"selecting-a-dataset",children:[]},{value:"Clicking on the title",id:"clicking-on-the-title",children:[]},{value:"Clicking on an axis",id:"clicking-on-an-axis",children:[]}]}],b={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"interaction"},"Interaction"),Object(c.b)("p",null,"The interaction configuration defines how a user can interact with the chart via hover or tooltips."),Object(c.b)("p",null,"To get, change and apply own properties, you can invoke the ",Object(c.b)("strong",{parentName:"p"},"set")," and ",Object(c.b)("strong",{parentName:"p"},"get")," methods, as following:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"// sets and gets interaction mode\nchart.getOptions().getInteraction().setMode(InteractionMode.NEAREST);\n\nInteractionMode mode = chart.getOptions().getInteraction().getMode();\n")),Object(c.b)("p",null,"The defaults values are set in global defaults options, see ",Object(c.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts#interaction"},"default global interaction options"),"."),Object(c.b)("p",null,"Table with options:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Default"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"axis"),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/InteractionAxis.html"},"InteractionAxis")),Object(c.b)("td",{parentName:"tr",align:"left"},"InteractionAxis.X"),Object(c.b)("td",{parentName:"tr",align:"left"},"Define which directions are used in calculating distances.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"intersect"),Object(c.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"true")),Object(c.b)("td",{parentName:"tr",align:"left"},"if ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", the hover mode only applies when the mouse position intersects an item on the chart.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"mode"),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/InteractionMode.html"},"InteractionMode")),Object(c.b)("td",{parentName:"tr",align:"left"},"InteractionMode.NERAEST"),Object(c.b)("td",{parentName:"tr",align:"left"},"Sets which elements appear in the tooltip.")))),Object(c.b)("h2",{id:"hover"},"Hover"),Object(c.b)("p",null,"The hover configuration, to configure interaction with the chart via hover, is passed to a chart by:"),Object(c.b)("p",null,"To get, change and apply own properties, you can invoke the ",Object(c.b)("strong",{parentName:"p"},"set")," and ",Object(c.b)("strong",{parentName:"p"},"get")," methods, as following:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"// sets and gets interaction mode\nchart.getOptions().getHover().setMode(InteractionMode.NEAREST);\n\nInteractionMode mode = chart.getOptions().getHover().getMode();\n")),Object(c.b)("p",null,"The defaults values are set in global defaults options, see ",Object(c.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts#hover"},"default global hover options"),"."),Object(c.b)("p",null,"Table with options:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Default"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"axis"),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/InteractionAxis.html"},"InteractionAxis")),Object(c.b)("td",{parentName:"tr",align:"left"},"InteractionAxis.X"),Object(c.b)("td",{parentName:"tr",align:"left"},"Define which directions are used in calculating distances.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"intersect"),Object(c.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"true")),Object(c.b)("td",{parentName:"tr",align:"left"},"if ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", the hover mode only applies when the mouse position intersects an item on the chart.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"mode"),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/InteractionMode.html"},"InteractionMode")),Object(c.b)("td",{parentName:"tr",align:"left"},"InteractionMode.NERAEST"),Object(c.b)("td",{parentName:"tr",align:"left"},"Sets which elements appear in the tooltip.")))),Object(c.b)("h2",{id:"events"},"Events"),Object(c.b)("p",null,"You can set which events must be caught and how to manage them by event handlers. "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"// sets and gets the catchable events\nchart.getOptions().setEvents(Event.CLICK, Event.MOUSEMOVE);\n\nList<Event> events = chart.getOptions().getEvents();\n")),Object(c.b)("p",null,"The default value is set in global defaults options, see ",Object(c.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts"},"default global chart options"),"."),Object(c.b)("p",null,"Table with options:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Default"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"events"),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/Event.html"},"Event"),"[]"),Object(c.b)("td",{parentName:"tr",align:"left"},"Event.MOUSEMOVE, Event.MOUSEOUT, Event.CLICK, Event.TOUCHSTART, Event.TOUCHMOVE"),Object(c.b)("td",{parentName:"tr",align:"left"},"The events option defines the browser events that the chart should listen to.")))),Object(c.b)("h3",{id:"clicking"},"Clicking"),Object(c.b)("p",null,"The click event is thrown if the browser event type is ",Object(c.b)("inlineCode",{parentName:"p"},"mouseup")," or ",Object(c.b)("inlineCode",{parentName:"p"},"click"),". To catch the event and manage it, you can add a ",Object(c.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/events/ChartClickEventHandler.html"},"ChartClickEventHandler")," instance to the chart options, as following:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"// adds click event handler\nchart.addHandler(new ChartClickEventHandler(){\n\n   /**\n    * Invoked when the user clicks on the chart.\n    * \n    * @param event chart click event\n    */\n   @Override \n   public void onClick(ChartClickEvent event){\n      // logic\n   }\n         \n}, ChartClickEvent.TYPE);\n")),Object(c.b)("h3",{id:"hovering"},"Hovering"),Object(c.b)("p",null,"The hover event is thrown when any of the events fire on the chart. To catch the event and manage it, you can add a ",Object(c.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/events/ChartHoverEvent.html"},"ChartHoverEvent")," instance to the chart options, as following:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"// adds hover event handler\nchart.addHandler(new ChartHoverEventHandler(){\n\n   /**\n    * Invoked when the user hovers on the chart.\n    * \n    * @param event chart hover event\n    */\n   @Override \n   public void onHover(ChartHoverEvent event){\n      // logic\n   }\n      \n}, ChartHoverEvent.TYPE);\n")),Object(c.b)("h3",{id:"resizing"},"Resizing"),Object(c.b)("p",null,"The resize event is thrown when the chart has been resized. To catch the event and manage it, you can add a ",Object(c.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/events/ChartClickEventHandler.html"},"ChartResizeEventHandler")," instance to the chart options, as following:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"// adds resize event handler\nchart.addHandler(new ChartResizeEventHandler(){\n\n   /**\n    * Invoked when the chart has been resized.\n    * \n    * @param event chart resize event\n    */\n   @Override \n   public void onResize(ChartResizeEvent event){\n      // logic\n   }\n   \n}, ChartResizeEvent.TYPE);\n")),Object(c.b)("h3",{id:"selecting-a-dataset"},"Selecting a dataset"),Object(c.b)("p",null,"When a ",Object(c.b)("a",{parentName:"p",href:"#clicking"},"click")," event is fired hovering a dataset element, you can add a ",Object(c.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler")," instance to the chart options and considering it how a dataset selection, as following:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"// adds dataset selection event handler\nchart.addHandler(new DatasetSelectionEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart to select a dataset.\n     * \n     * @param event chart dataset selection event\n     */         \n    @Override\n    public void onSelect(DatasetSelectionEvent event){\n        // logic\n    }\n}, DatasetSelectionEvent.TYPE);\n")),Object(c.b)("p",null,"The dataset selection ",Object(c.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/events/DatasetSelectionEvent.html"},"event")," contains the selected dataset ",Object(c.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/items/DatasetReference.html"},"reference")," with all info about the selected dataset and item."),Object(c.b)("h3",{id:"clicking-on-the-title"},"Clicking on the title"),Object(c.b)("p",null,"The click event is throw if the event type is ",Object(c.b)("inlineCode",{parentName:"p"},"mouseup")," or ",Object(c.b)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering the title element, you can add a ",Object(c.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/events/TitleClickEventHandler.html"},"TitleClickEventHandler")," instance to the chart options, as following:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"// adds title click event handler\nchart.addHandler(new TitleClickEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart title.\n     * \n     * @param event title click event\n     */\n    @Override\n    public onClick(TitleClickEvent event){\n        // logic\n    }\n}, TitleClickEvent.TYPE);\n")),Object(c.b)("h3",{id:"clicking-on-an-axis"},"Clicking on an axis"),Object(c.b)("p",null,"The click event is throw if the event type is ",Object(c.b)("inlineCode",{parentName:"p"},"mouseup")," or ",Object(c.b)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering an axis element, you can add a ",Object(c.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/events/AxisClickEventHandler.html"},"AxisClickEventHandler")," instance to the chart options, as following:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"// adds axis click event handler\nchart.addHandler(new AxisClickEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart axis.\n     * \n     * @param event axis click event\n     */\n    @Override\n    public onClick(AxisClickEvent event){\n        // logic\n    }\n}, AxisClickEvent.TYPE);\n")),Object(c.b)("p",null,"The axis click ",Object(c.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/events/AxisClickEvent.html"},"event")," contains the selected scale ",Object(c.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/items/ScaleItem.html"},"item")," with all info about the selected scale."),Object(c.b)("p",null,"Due to charts can be created with specific axes, the axis click event can provide the ",Object(c.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/Axis.html"},"axes")," configurations if there are, enabling you to get the instance used to configure the chart."))}s.isMDXComponent=!0}}]);