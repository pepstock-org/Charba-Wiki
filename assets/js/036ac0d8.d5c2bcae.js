"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[1584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),v=i,m=p["".concat(s,".").concat(v)]||p[v]||d[v]||r;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},18728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={id:"Interaction",title:"Interaction",hide_title:!0,sidebar_label:"Interaction"},o=void 0,l={unversionedId:"configuration/Interaction",id:"configuration/Interaction",title:"Interaction",description:"Interaction",source:"@site/docs/configuration/Interaction.md",sourceDirName:"configuration",slug:"/configuration/Interaction",permalink:"/Charba-Wiki/docs/configuration/Interaction",draft:!1,tags:[],version:"current",frontMatter:{id:"Interaction",title:"Interaction",hide_title:!0,sidebar_label:"Interaction"},sidebar:"docs",previous:{title:"Common options",permalink:"/Charba-Wiki/docs/configuration/Commons"},next:{title:"Animation",permalink:"/Charba-Wiki/docs/configuration/Animation"}},s={},c=[{value:"Interaction",id:"interaction",level:2},{value:"Hover",id:"hover",level:2},{value:"Custom interaction modes",id:"custom-interaction-modes",level:3},{value:"Chart events",id:"chart-events",level:2},{value:"Clicking",id:"clicking",level:3},{value:"Hovering",id:"hovering",level:3},{value:"Resizing",id:"resizing",level:3},{value:"Selecting a dataset",id:"selecting-a-dataset",level:3},{value:"Title events",id:"title-events",level:2},{value:"Clicking",id:"clicking-1",level:3},{value:"Entering",id:"entering",level:3},{value:"Leaving",id:"leaving",level:3},{value:"Subtitle events",id:"subtitle-events",level:2},{value:"Clicking",id:"clicking-2",level:3},{value:"Entering",id:"entering-1",level:3},{value:"Leaving",id:"leaving-1",level:3},{value:"Axes events",id:"axes-events",level:2},{value:"Clicking",id:"clicking-3",level:3},{value:"Entering",id:"entering-2",level:3},{value:"Hovering",id:"hovering-1",level:3},{value:"Leaving",id:"leaving-2",level:3}],h={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interaction"},"Interaction"),(0,i.kt)("p",null,"The interaction configuration defines how a user can interact with the chart via events or tooltips."),(0,i.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,i.kt)("strong",{parentName:"p"},"set")," and ",(0,i.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets interaction mode\nchart.getOptions().getInteraction().setMode(DefaultInteractionMode.NEAREST);\n\nIsInteractionMode mode = chart.getOptions().getInteraction().getMode();\n")),(0,i.kt)("p",null,"The defaults values are set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#interaction"},"default global interaction options"),"."),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"axis"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/InteractionAxis.html"},"InteractionAxis")),(0,i.kt)("td",{parentName:"tr",align:"left"},"InteractionAxis.X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Define which directions are used in calculating distances.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"intersect"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"if ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the hover mode only applies when the mouse position intersects an item on the chart.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"includeInvisible"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"if ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the invisible points that are outside of the chart area will also be included when evaluating interactions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/IsInteractionMode.html"},"IsInteractionMode")),(0,i.kt)("td",{parentName:"tr",align:"left"},"DefaultInteractionMode.NERAEST"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets which elements managed by event or tooltip.")))),(0,i.kt)("h2",{id:"hover"},"Hover"),(0,i.kt)("p",null,"The hover configuration, to configure interaction with the chart via hover, is passed to a chart by:"),(0,i.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,i.kt)("strong",{parentName:"p"},"set")," and ",(0,i.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets interaction mode\nchart.getOptions().getHover().setMode(DefaultInteractionMode.NEAREST);\n\nIsInteractionMode mode = chart.getOptions().getHover().getMode();\n")),(0,i.kt)("p",null,"The defaults values are set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#hover"},"default global hover options"),"."),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"axis"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/InteractionAxis.html"},"InteractionAxis")),(0,i.kt)("td",{parentName:"tr",align:"left"},"InteractionAxis.X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Define which directions are used in calculating distances.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"intersect"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"if ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the hover mode only applies when the mouse position intersects an item on the chart.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/IsInteractionMode.html"},"IsInteractionMode")),(0,i.kt)("td",{parentName:"tr",align:"left"},"DefaultInteractionMode.NERAEST"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets which elements will be hovered.")))),(0,i.kt)("h3",{id:"custom-interaction-modes"},"Custom interaction modes"),(0,i.kt)("p",null,"When configuring the interaction with the chart via interaction, hover or tooltip, a number of different modes are available."),(0,i.kt)("p",null,"Possible ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/DefaultInteractionMode.html"},"interaction modes")," out-of the box are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefaultInteractionMode.POINT"),", it will find all of the items that intersect the point."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefaultInteractionMode.NEAREST"),", it will get the item that is nearest to the point.T he nearest item is determined based on the distance to the center of the chart item (point, bar). If 2 or more items are at the same distance, the one with the smallest area is used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefaultInteractionMode.INDEX"),", it will find all items at the same index. If the intersect setting is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the first intersecting item is used to determine the index in the data. If intersect ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," the nearest item, in the ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," direction, is used to determine the index."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefaultInteractionMode.DATASET"),", it will find all items in the same dataset. If the intersect setting is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the first intersecting item is used to determine the index in the data. If intersect ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," the nearest item is used to determine the index."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefaultInteractionMode.X"),", it will find all items that would intersect based on the X coordinate of the position only. Note that this only applies to cartesian charts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefaultInteractionMode.Y"),", it will find all items that would intersect based on the Y coordinate of the position. Note that this only applies to cartesian charts.")),(0,i.kt)("p",null,"New modes can be defined by adding a custom implementation, by a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/IsInteractionMode.html"},"IsInteractionMode")," and ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/interaction/Interactioner.html"},"Interactioner")," which can provide the items from the chart based on own logic."),(0,i.kt)("p",null,"By the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/interaction/Interactions.html"},"Interactions")," singleton, you could register and unregister custom interaction mode. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates my interaction mode\nfinal AbstractInteractioner myMode = new AbstractInteractioner("myMode") {\n    \n    /**\n     * Returns items which must be managed by CHART.JS event or hovering handler and by tooltips.\n     * \n     * @param chart the chart we are returning items from\n     * @param event the event we are find things at\n     * @param options options to use\n     * @param useFinalPosition use final element position (animation target)\n     * @return items that are found\n     */\n    public List<InteractionItem> invoke(IsChart chart, ChartEventContext event, InteractionOptions options, boolean useFinalPosition){\n      // your logic\n    }\n};\n// registers new interaction mode\nInteractions.get().register(myMode):\n....\n// sets new interaction mode to chart options\nchart.getOptions().getTooltips().setMode(myMode.getMode());\n// or by string\nchart.getOptions().getTooltips().setMode("myMode");\n')),(0,i.kt)("p",null,"Because the interaction mode is activated when every event is caught by the chart, sometimes the performance of a custom interaction mode could affect the chart interaction."),(0,i.kt)("p",null,"To address it, you can also register a custom interaction mode written in JavaScript, passing the code to ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/interaction/Interactions.html"},"Interactions"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates my tooltip position\nfinal Interactioner myMode = Interactions.get().createNativeInteractioner("myMode", " // your logic in JS; ... return anArray; ");\n// registers new interaction mode\nInteractions.get().register(myMode):\n....\n// sets new interaction mode to chart options\nchart.getOptions().getTooltips().setMode(myMode.getMode());\n// or by string\nchart.getOptions().getTooltips().setMode("myMode");\n')),(0,i.kt)("p",null,"The native interaction mode will receive 4 JavaScript arguments:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"chart")," - the chart we are returning items from"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"event")," - the event we are find things at"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," - interaction options to use"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"useFinalPosition")," - use final element position (animation target)")),(0,i.kt)("h2",{id:"chart-events"},"Chart events"),(0,i.kt)("p",null,"You can set which events must be caught and how to manage them by event handlers. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets the catchable events\nchart.getOptions().setEvents(DefaultEvent.CLICK, DefaultEvent.MOUSEMOVE);\n\nSet<IsEvent> events = chart.getOptions().getEvents();\n")),(0,i.kt)("p",null,"You can create your events that CHART.JS can catch and pass to your own ",(0,i.kt)("a",{parentName:"p",href:"../plugins/"},"plugin"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates new event\nIsEvent mouseout = IsEvent.create("mouseout");\n\n// sets and gets the catchable events\nchart.getOptions().setEvents(DefaultEvent.CLICK, DefaultEvent.MOUSEMOVE, mouseout);\n\nSet<IsEvent> events = chart.getOptions().getEvents();\n')),(0,i.kt)("p",null,"The default value is set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts"},"default global chart options"),"."),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"events"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/options/IsEvent.html"},"IsEvent"),"[] - Set","<",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/options/IsEvent.html"},"IsEvent"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"DefaultEvent.MOUSEMOVE, DefaultEvent.MOUSEOUT, DefaultEvent.CLICK, DefaultEvent.TOUCHSTART, DefaultEvent.TOUCHMOVE"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The events option defines the browser events that the chart should listen to.")))),(0,i.kt)("h3",{id:"clicking"},"Clicking"),(0,i.kt)("p",null,"The click event is thrown if the browser event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/ChartClickEventHandler.html"},"ChartClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds click event handler\nchart.addHandler(new ChartClickEventHandler(){\n\n   /**\n    * Invoked when the user clicks on the chart.\n    * \n    * @param event chart click event\n    */\n   @Override \n   public void onClick(ChartClickEvent event){\n      // logic\n   }\n         \n}, ChartClickEvent.TYPE);\n")),(0,i.kt)("h3",{id:"hovering"},"Hovering"),(0,i.kt)("p",null,"The hover event is thrown when any of the events fire on the chart. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/ChartHoverEvent.html"},"ChartHoverEvent")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds hover event handler\nchart.addHandler(new ChartHoverEventHandler(){\n\n   /**\n    * Invoked when the user hovers on the chart.\n    * \n    * @param event chart hover event\n    */\n   @Override \n   public void onHover(ChartHoverEvent event){\n      // logic\n   }\n      \n}, ChartHoverEvent.TYPE);\n")),(0,i.kt)("h3",{id:"resizing"},"Resizing"),(0,i.kt)("p",null,"The resize event is thrown when the chart has been resized. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/ChartClickEventHandler.html"},"ChartResizeEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds resize event handler\nchart.addHandler(new ChartResizeEventHandler(){\n\n   /**\n    * Invoked when the chart has been resized.\n    * \n    * @param event chart resize event\n    */\n   @Override \n   public void onResize(ChartResizeEvent event){\n      // logic\n   }\n   \n}, ChartResizeEvent.TYPE);\n")),(0,i.kt)("h3",{id:"selecting-a-dataset"},"Selecting a dataset"),(0,i.kt)("p",null,"When a ",(0,i.kt)("a",{parentName:"p",href:"#clicking"},"click")," event is fired hovering a dataset element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler")," instance to the chart options and considering it how a dataset selection, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds dataset selection event handler\nchart.addHandler(new DatasetSelectionEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart to select a dataset.\n     * \n     * @param event chart dataset selection event\n     */         \n    @Override\n    public void onSelect(DatasetSelectionEvent event){\n        // logic\n    }\n}, DatasetSelectionEvent.TYPE);\n")),(0,i.kt)("p",null,"The dataset selection ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/DatasetSelectionEvent.html"},"event")," contains the selected dataset ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/items/DatasetReference.html"},"reference")," with all info about the selected dataset and item."),(0,i.kt)("h2",{id:"title-events"},"Title events"),(0,i.kt)("p",null,"There are 3 different kinds of events that you can catch from the chart title:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"click"),", when you click on the title"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"enter"),", when you enter on title element, hovering it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"leave"),", when you leave from title element.")),(0,i.kt)("h3",{id:"clicking-1"},"Clicking"),(0,i.kt)("p",null,"The click event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering the title element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/TitleClickEventHandler.html"},"TitleClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds title click event handler\nchart.addHandler(new TitleClickEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart title.\n     * \n     * @param event title click event\n     */\n    @Override\n    public onClick(TitleClickEvent event){\n        // logic\n    }\n}, TitleClickEvent.TYPE);\n")),(0,i.kt)("h3",{id:"entering"},"Entering"),(0,i.kt)("p",null,"The enter event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," and you start hovering the title element. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/TitleEnterEventHandler.html"},"TitleEnterEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds title enter event handler\nchart.addHandler(new TitleHoverEventHandler(){\n\n   /**\n    * Invoked when the user enters on the chart title.\n    * \n    * @param event title enter event\n    */\n   @Override \n   public void onEnter(TitleEnterEvent event) {\n        // logic\n   }\n}, TitleEnterEvent.TYPE);\n")),(0,i.kt)("h3",{id:"leaving"},"Leaving"),(0,i.kt)("p",null,"The leave event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," and you end hovering the title element. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/TitleLeaveEventHandler.html"},"TitleLeaveEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds title leave event handler\nchart.addHandler(new TitleLeaveEventHandler(){\n\n   /**\n    * Invoked when the user leaves on the chart title.\n    * \n    * @param event title leave event\n    */\n   @Override \n   public void onLeave(TitleLeaveEvent event) {\n        // logic\n   }\n}, TitleLeaveEvent.TYPE);\n")),(0,i.kt)("h2",{id:"subtitle-events"},"Subtitle events"),(0,i.kt)("p",null,"There are 3 different kinds of events that you can catch from the chart subtitle:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"click"),", when you click on the subtitle"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"enter"),", when you enter on subtitle element, hovering it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"leave"),", when you leave from subtitle element.")),(0,i.kt)("h3",{id:"clicking-2"},"Clicking"),(0,i.kt)("p",null,"The click event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering the subtitle element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/SubtitleClickEventHandler.html"},"SubtitleClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds subtitle click event handler\nchart.addHandler(new SubtitleClickEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart subtitle.\n     * \n     * @param event subtitle click event\n     */\n    @Override\n    public onClick(SubtitleClickEvent event){\n        // logic\n    }\n}, SubtitleClickEvent.TYPE);\n")),(0,i.kt)("h3",{id:"entering-1"},"Entering"),(0,i.kt)("p",null,"The enter event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," and you start hovering the subtitle element. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/SubtitleEnterEventHandler.html"},"SubtitleEnterEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds subtitle enter event handler\nchart.addHandler(new SubtitleHoverEventHandler(){\n\n   /**\n    * Invoked when the user enters on the chart subtitle.\n    * \n    * @param event subtitle enter event\n    */\n   @Override \n   public void onEnter(SubtitleEnterEvent event) {\n        // logic\n   }\n}, SubtitleEnterEvent.TYPE);\n")),(0,i.kt)("h3",{id:"leaving-1"},"Leaving"),(0,i.kt)("p",null,"The leave event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," and you end hovering the subtitle element. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/SubtitleLeaveEventHandler.html"},"SubtitleLeaveEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds subtitle leave event handler\nchart.addHandler(new SubtitleLeaveEventHandler(){\n\n   /**\n    * Invoked when the user leaves on the chart subtitle.\n    * \n    * @param event subtitle leave event\n    */\n   @Override \n   public void onLeave(SubtitleLeaveEvent event) {\n        // logic\n   }\n}, SubtitleLeaveEvent.TYPE);\n")),(0,i.kt)("h2",{id:"axes-events"},"Axes events"),(0,i.kt)("p",null,"There are 4 different kinds of events that you can catch from the chart axis:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"click"),", when you click on the axis"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"enter"),", when you enter on axis element, hovering it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"hover"),", when you are hovering on the axis"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"leave"),", when you leave from axis element.")),(0,i.kt)("p",null,"The axis event contain the selected scale ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/items/ScaleItem.html"},"item")," with all info about the selected scale."),(0,i.kt)("p",null,"Due to charts can be created with specific axes, the axis event can provide the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/configuration/Axis.html"},"axis")," configurations if there are, enabling you to get the instance used to configure the chart."),(0,i.kt)("h3",{id:"clicking-3"},"Clicking"),(0,i.kt)("p",null,"The click event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering an axis element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/AxisClickEventHandler.html"},"AxisClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds axis click event handler\nchart.addHandler(new AxisClickEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart axis.\n     * \n     * @param event axis click event\n     */\n    @Override\n    public onClick(AxisClickEvent event){\n        // logic\n    }\n}, AxisClickEvent.TYPE);\n")),(0,i.kt)("h3",{id:"entering-2"},"Entering"),(0,i.kt)("p",null,"The enter event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," and you start hovering the axis element. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/AxisEnterEventHandler.html"},"AxisEnterEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds axis enter event handler\nchart.addHandler(new AxisEnterEventHandler(){\n\n   /**\n    * Invoked when the user is entering on the chart axis.\n    * \n    * @param event axis enter event\n    */\n   @Override \n   public void onEnter(AxisEnterEvent event) {\n        // logic\n   }\n}, AxisEnterEvent.TYPE);\n")),(0,i.kt)("h3",{id:"hovering-1"},"Hovering"),(0,i.kt)("p",null,"The enter event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," and you are hovering the axis element. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/AxisHoverEventHandler.html"},"AxisHoverEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds axis hover event handler\nchart.addHandler(new AxisHoverEventHandler(){\n\n   /**\n    * Invoked when the user is hovering on the chart axis.\n    * \n    * @param event axis hover event\n    */\n   @Override \n   public void onHover(AxisHoverEvent event) {\n        // logic\n   }\n}, AxisHoverEvent.TYPE);\n")),(0,i.kt)("h3",{id:"leaving-2"},"Leaving"),(0,i.kt)("p",null,"The leave event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," and you end hovering the axis element. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/AxisLeaveEventHandler.html"},"AxisLeaveEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds axis leave event handler\nchart.addHandler(new AxisLeaveEventHandler(){\n\n   /**\n    * Invoked when the user is leaving on the chart axis.\n    * \n    * @param event axis leave event\n    */\n   @Override \n   public void onLeave(AxisLeaveEvent event) {\n        // logic\n   }\n}, AxisLeaveEvent.TYPE);\n")))}d.isMDXComponent=!0}}]);