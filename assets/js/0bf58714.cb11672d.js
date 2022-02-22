"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[3346],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),h=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=h(n),v=r,k=d["".concat(c,".").concat(v)]||d[v]||p[v]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var h=2;h<i;h++)l[h]=n[h];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16439:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return s},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"Interaction",title:"Interaction",hide_title:!0,sidebar_label:"Interaction"},c=void 0,h={unversionedId:"configuration/Interaction",id:"version-4.1/configuration/Interaction",title:"Interaction",description:"Interaction",source:"@site/versioned_docs/version-4.1/configuration/Interaction.md",sourceDirName:"configuration",slug:"/configuration/Interaction",permalink:"/Charba-Wiki/docs/4.1/configuration/Interaction",tags:[],version:"4.1",frontMatter:{id:"Interaction",title:"Interaction",hide_title:!0,sidebar_label:"Interaction"},sidebar:"version-4.1/docs",previous:{title:"Common options",permalink:"/Charba-Wiki/docs/4.1/configuration/Commons"},next:{title:"Animation",permalink:"/Charba-Wiki/docs/4.1/configuration/Animation"}},s=[{value:"Interaction",id:"interaction",children:[],level:2},{value:"Hover",id:"hover",children:[],level:2},{value:"Chart events",id:"chart-events",children:[{value:"Clicking",id:"clicking",children:[],level:3},{value:"Hovering",id:"hovering",children:[],level:3},{value:"Resizing",id:"resizing",children:[],level:3},{value:"Selecting a dataset",id:"selecting-a-dataset",children:[],level:3}],level:2},{value:"Title events",id:"title-events",children:[{value:"Clicking",id:"clicking-1",children:[],level:3},{value:"Entering",id:"entering",children:[],level:3},{value:"Leaving",id:"leaving",children:[],level:3}],level:2},{value:"Axes events",id:"axes-events",children:[{value:"Clicking",id:"clicking-2",children:[],level:3},{value:"Entering",id:"entering-1",children:[],level:3},{value:"Hovering",id:"hovering-1",children:[],level:3},{value:"Leaving",id:"leaving-1",children:[],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interaction"},"Interaction"),(0,i.kt)("p",null,"The interaction configuration defines how a user can interact with the chart via hover or tooltips."),(0,i.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,i.kt)("strong",{parentName:"p"},"set")," and ",(0,i.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets interaction mode\nchart.getOptions().getInteraction().setMode(InteractionMode.NEAREST);\n\nInteractionMode mode = chart.getOptions().getInteraction().getMode();\n")),(0,i.kt)("p",null,"The defaults values are set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#interaction"},"default global interaction options"),"."),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"axis"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/InteractionAxis.html"},"InteractionAxis")),(0,i.kt)("td",{parentName:"tr",align:"left"},"InteractionAxis.X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Define which directions are used in calculating distances.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"intersect"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"if ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the hover mode only applies when the mouse position intersects an item on the chart.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/InteractionMode.html"},"InteractionMode")),(0,i.kt)("td",{parentName:"tr",align:"left"},"InteractionMode.NERAEST"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets which elements appear in the tooltip.")))),(0,i.kt)("h2",{id:"hover"},"Hover"),(0,i.kt)("p",null,"The hover configuration, to configure interaction with the chart via hover, is passed to a chart by:"),(0,i.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,i.kt)("strong",{parentName:"p"},"set")," and ",(0,i.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets interaction mode\nchart.getOptions().getHover().setMode(InteractionMode.NEAREST);\n\nInteractionMode mode = chart.getOptions().getHover().getMode();\n")),(0,i.kt)("p",null,"The defaults values are set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#hover"},"default global hover options"),"."),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"axis"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/InteractionAxis.html"},"InteractionAxis")),(0,i.kt)("td",{parentName:"tr",align:"left"},"InteractionAxis.X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Define which directions are used in calculating distances.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"intersect"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"if ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the hover mode only applies when the mouse position intersects an item on the chart.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/InteractionMode.html"},"InteractionMode")),(0,i.kt)("td",{parentName:"tr",align:"left"},"InteractionMode.NERAEST"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets which elements appear in the tooltip.")))),(0,i.kt)("h2",{id:"chart-events"},"Chart events"),(0,i.kt)("p",null,"You can set which events must be caught and how to manage them by event handlers. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets the catchable events\nchart.getOptions().setEvents(Event.CLICK, Event.MOUSEMOVE);\n\nList<Event> events = chart.getOptions().getEvents();\n")),(0,i.kt)("p",null,"The default value is set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts"},"default global chart options"),"."),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"events"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/Event.html"},"Event"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Event.MOUSEMOVE, Event.MOUSEOUT, Event.CLICK, Event.TOUCHSTART, Event.TOUCHMOVE"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The events option defines the browser events that the chart should listen to.")))),(0,i.kt)("h3",{id:"clicking"},"Clicking"),(0,i.kt)("p",null,"The click event is thrown if the browser event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/ChartClickEventHandler.html"},"ChartClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds click event handler\nchart.addHandler(new ChartClickEventHandler(){\n\n   /**\n    * Invoked when the user clicks on the chart.\n    * \n    * @param event chart click event\n    */\n   @Override \n   public void onClick(ChartClickEvent event){\n      // logic\n   }\n         \n}, ChartClickEvent.TYPE);\n")),(0,i.kt)("h3",{id:"hovering"},"Hovering"),(0,i.kt)("p",null,"The hover event is thrown when any of the events fire on the chart. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/ChartHoverEvent.html"},"ChartHoverEvent")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds hover event handler\nchart.addHandler(new ChartHoverEventHandler(){\n\n   /**\n    * Invoked when the user hovers on the chart.\n    * \n    * @param event chart hover event\n    */\n   @Override \n   public void onHover(ChartHoverEvent event){\n      // logic\n   }\n      \n}, ChartHoverEvent.TYPE);\n")),(0,i.kt)("h3",{id:"resizing"},"Resizing"),(0,i.kt)("p",null,"The resize event is thrown when the chart has been resized. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/ChartClickEventHandler.html"},"ChartResizeEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds resize event handler\nchart.addHandler(new ChartResizeEventHandler(){\n\n   /**\n    * Invoked when the chart has been resized.\n    * \n    * @param event chart resize event\n    */\n   @Override \n   public void onResize(ChartResizeEvent event){\n      // logic\n   }\n   \n}, ChartResizeEvent.TYPE);\n")),(0,i.kt)("h3",{id:"selecting-a-dataset"},"Selecting a dataset"),(0,i.kt)("p",null,"When a ",(0,i.kt)("a",{parentName:"p",href:"#clicking"},"click")," event is fired hovering a dataset element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler")," instance to the chart options and considering it how a dataset selection, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds dataset selection event handler\nchart.addHandler(new DatasetSelectionEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart to select a dataset.\n     * \n     * @param event chart dataset selection event\n     */         \n    @Override\n    public void onSelect(DatasetSelectionEvent event){\n        // logic\n    }\n}, DatasetSelectionEvent.TYPE);\n")),(0,i.kt)("p",null,"The dataset selection ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/DatasetSelectionEvent.html"},"event")," contains the selected dataset ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/DatasetReference.html"},"reference")," with all info about the selected dataset and item."),(0,i.kt)("h2",{id:"title-events"},"Title events"),(0,i.kt)("p",null,"There are 3 different kinds of events that you can catch from the chart title:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"click"),", when you click on the title"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"enter"),", when you enter on title element, hovering it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"leave"),", when you leave from title element.")),(0,i.kt)("h3",{id:"clicking-1"},"Clicking"),(0,i.kt)("p",null,"The click event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering the title element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/TitleClickEventHandler.html"},"TitleClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds title click event handler\nchart.addHandler(new TitleClickEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart title.\n     * \n     * @param event title click event\n     */\n    @Override\n    public onClick(TitleClickEvent event){\n        // logic\n    }\n}, TitleClickEvent.TYPE);\n")),(0,i.kt)("h3",{id:"entering"},"Entering"),(0,i.kt)("p",null,"The enter event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," and you start hovering the title element. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/TitleEnterEventHandler.html"},"TitleEnterEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds title enter event handler\nchart.addHandler(new TitleHoverEventHandler(){\n\n   /**\n    * Invoked when the user enters on the chart title.\n    * \n    * @param event title enter event\n    */\n   @Override \n   public void onEnter(TitleEnterEvent event) {\n        // logic\n   }\n}, TitleEnterEvent.TYPE);\n")),(0,i.kt)("h3",{id:"leaving"},"Leaving"),(0,i.kt)("p",null,"The leave event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," and you end hovering the title element. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/TitleLeaveEventHandler.html"},"TitleLeaveEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds title leave event handler\nchart.addHandler(new TitleLeaveEventHandler(){\n\n   /**\n    * Invoked when the user leaves on the chart title.\n    * \n    * @param event title leave event\n    */\n   @Override \n   public void onLeave(TitleLeaveEvent event) {\n        // logic\n   }\n}, TitleLeaveEvent.TYPE);\n")),(0,i.kt)("h2",{id:"axes-events"},"Axes events"),(0,i.kt)("p",null,"There are 4 different kinds of events that you can catch from the chart axis:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"click"),", when you click on the axis"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"enter"),", when you enter on axis element, hovering it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"hover"),", when you are hovering on the axis"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"leave"),", when you leave from axis element.")),(0,i.kt)("p",null,"The axis event contain the selected scale ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/ScaleItem.html"},"item")," with all info about the selected scale."),(0,i.kt)("p",null,"Due to charts can be created with specific axes, the axis event can provide the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/Axis.html"},"axis")," configurations if there are, enabling you to get the instance used to configure the chart."),(0,i.kt)("h3",{id:"clicking-2"},"Clicking"),(0,i.kt)("p",null,"The click event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering an axis element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/AxisClickEventHandler.html"},"AxisClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds axis click event handler\nchart.addHandler(new AxisClickEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart axis.\n     * \n     * @param event axis click event\n     */\n    @Override\n    public onClick(AxisClickEvent event){\n        // logic\n    }\n}, AxisClickEvent.TYPE);\n")),(0,i.kt)("h3",{id:"entering-1"},"Entering"),(0,i.kt)("p",null,"The enter event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," and you start hovering the axis element. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/AxisEnterEventHandler.html"},"AxisEnterEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds axis enter event handler\nchart.addHandler(new AxisEnterEventHandler(){\n\n   /**\n    * Invoked when the user is entering on the chart axis.\n    * \n    * @param event axis enter event\n    */\n   @Override \n   public void onEnter(AxisEnterEvent event) {\n        // logic\n   }\n}, AxisEnterEvent.TYPE);\n")),(0,i.kt)("h3",{id:"hovering-1"},"Hovering"),(0,i.kt)("p",null,"The enter event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," and you are hovering the axis element. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/AxisHoverEventHandler.html"},"AxisHoverEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds axis hover event handler\nchart.addHandler(new AxisHoverEventHandler(){\n\n   /**\n    * Invoked when the user is hovering on the chart axis.\n    * \n    * @param event axis hover event\n    */\n   @Override \n   public void onHover(AxisHoverEvent event) {\n        // logic\n   }\n}, AxisHoverEvent.TYPE);\n")),(0,i.kt)("h3",{id:"leaving-1"},"Leaving"),(0,i.kt)("p",null,"The leave event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," and you end hovering the axis element. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/AxisLeaveEventHandler.html"},"AxisLeaveEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds axis leave event handler\nchart.addHandler(new AxisLeaveEventHandler(){\n\n   /**\n    * Invoked when the user is leaving on the chart axis.\n    * \n    * @param event axis leave event\n    */\n   @Override \n   public void onLeave(AxisLeaveEvent event) {\n        // logic\n   }\n}, AxisLeaveEvent.TYPE);\n")))}d.isMDXComponent=!0}}]);