"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[88325],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,g=d["".concat(c,".").concat(k)]||d[k]||h[k]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5565:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"Interaction",title:"Interaction",hide_title:!0,sidebar_label:"Interaction"},c=void 0,s={unversionedId:"configuration/Interaction",id:"version-4.0/configuration/Interaction",title:"Interaction",description:"Interaction",source:"@site/versioned_docs/version-4.0/configuration/Interaction.md",sourceDirName:"configuration",slug:"/configuration/Interaction",permalink:"/Charba-Wiki/docs/4.0/configuration/Interaction",draft:!1,tags:[],version:"4.0",frontMatter:{id:"Interaction",title:"Interaction",hide_title:!0,sidebar_label:"Interaction"},sidebar:"version-4.0/docs",previous:{title:"Common options",permalink:"/Charba-Wiki/docs/4.0/configuration/Commons"},next:{title:"Animation",permalink:"/Charba-Wiki/docs/4.0/configuration/Animation"}},p={},h=[{value:"Interaction",id:"interaction",level:2},{value:"Hover",id:"hover",level:2},{value:"Events",id:"events",level:2},{value:"Clicking",id:"clicking",level:3},{value:"Hovering",id:"hovering",level:3},{value:"Resizing",id:"resizing",level:3},{value:"Selecting a dataset",id:"selecting-a-dataset",level:3},{value:"Clicking on the title",id:"clicking-on-the-title",level:3},{value:"Clicking on an axis",id:"clicking-on-an-axis",level:3}],d={toc:h};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interaction"},"Interaction"),(0,i.kt)("p",null,"The interaction configuration defines how a user can interact with the chart via hover or tooltips."),(0,i.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,i.kt)("strong",{parentName:"p"},"set")," and ",(0,i.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets interaction mode\nchart.getOptions().getInteraction().setMode(InteractionMode.NEAREST);\n\nInteractionMode mode = chart.getOptions().getInteraction().getMode();\n")),(0,i.kt)("p",null,"The defaults values are set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#interaction"},"default global interaction options"),"."),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"axis"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/InteractionAxis.html"},"InteractionAxis")),(0,i.kt)("td",{parentName:"tr",align:"left"},"InteractionAxis.X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Define which directions are used in calculating distances.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"intersect"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"if ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the hover mode only applies when the mouse position intersects an item on the chart.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/InteractionMode.html"},"InteractionMode")),(0,i.kt)("td",{parentName:"tr",align:"left"},"InteractionMode.NERAEST"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets which elements appear in the tooltip.")))),(0,i.kt)("h2",{id:"hover"},"Hover"),(0,i.kt)("p",null,"The hover configuration, to configure interaction with the chart via hover, is passed to a chart by:"),(0,i.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,i.kt)("strong",{parentName:"p"},"set")," and ",(0,i.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets interaction mode\nchart.getOptions().getHover().setMode(InteractionMode.NEAREST);\n\nInteractionMode mode = chart.getOptions().getHover().getMode();\n")),(0,i.kt)("p",null,"The defaults values are set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#hover"},"default global hover options"),"."),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"axis"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/InteractionAxis.html"},"InteractionAxis")),(0,i.kt)("td",{parentName:"tr",align:"left"},"InteractionAxis.X"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Define which directions are used in calculating distances.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"intersect"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"if ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the hover mode only applies when the mouse position intersects an item on the chart.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/InteractionMode.html"},"InteractionMode")),(0,i.kt)("td",{parentName:"tr",align:"left"},"InteractionMode.NERAEST"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets which elements appear in the tooltip.")))),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"You can set which events must be caught and how to manage them by event handlers. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets the catchable events\nchart.getOptions().setEvents(Event.CLICK, Event.MOUSEMOVE);\n\nList<Event> events = chart.getOptions().getEvents();\n")),(0,i.kt)("p",null,"The default value is set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts"},"default global chart options"),"."),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"events"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/Event.html"},"Event"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Event.MOUSEMOVE, Event.MOUSEOUT, Event.CLICK, Event.TOUCHSTART, Event.TOUCHMOVE"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The events option defines the browser events that the chart should listen to.")))),(0,i.kt)("h3",{id:"clicking"},"Clicking"),(0,i.kt)("p",null,"The click event is thrown if the browser event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/events/ChartClickEventHandler.html"},"ChartClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds click event handler\nchart.addHandler(new ChartClickEventHandler(){\n\n   /**\n    * Invoked when the user clicks on the chart.\n    * \n    * @param event chart click event\n    */\n   @Override \n   public void onClick(ChartClickEvent event){\n      // logic\n   }\n         \n}, ChartClickEvent.TYPE);\n")),(0,i.kt)("h3",{id:"hovering"},"Hovering"),(0,i.kt)("p",null,"The hover event is thrown when any of the events fire on the chart. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/events/ChartHoverEvent.html"},"ChartHoverEvent")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds hover event handler\nchart.addHandler(new ChartHoverEventHandler(){\n\n   /**\n    * Invoked when the user hovers on the chart.\n    * \n    * @param event chart hover event\n    */\n   @Override \n   public void onHover(ChartHoverEvent event){\n      // logic\n   }\n      \n}, ChartHoverEvent.TYPE);\n")),(0,i.kt)("h3",{id:"resizing"},"Resizing"),(0,i.kt)("p",null,"The resize event is thrown when the chart has been resized. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/events/ChartClickEventHandler.html"},"ChartResizeEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds resize event handler\nchart.addHandler(new ChartResizeEventHandler(){\n\n   /**\n    * Invoked when the chart has been resized.\n    * \n    * @param event chart resize event\n    */\n   @Override \n   public void onResize(ChartResizeEvent event){\n      // logic\n   }\n   \n}, ChartResizeEvent.TYPE);\n")),(0,i.kt)("h3",{id:"selecting-a-dataset"},"Selecting a dataset"),(0,i.kt)("p",null,"When a ",(0,i.kt)("a",{parentName:"p",href:"#clicking"},"click")," event is fired hovering a dataset element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler")," instance to the chart options and considering it how a dataset selection, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds dataset selection event handler\nchart.addHandler(new DatasetSelectionEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart to select a dataset.\n     * \n     * @param event chart dataset selection event\n     */         \n    @Override\n    public void onSelect(DatasetSelectionEvent event){\n        // logic\n    }\n}, DatasetSelectionEvent.TYPE);\n")),(0,i.kt)("p",null,"The dataset selection ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/events/DatasetSelectionEvent.html"},"event")," contains the selected dataset ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/DatasetReference.html"},"reference")," with all info about the selected dataset and item."),(0,i.kt)("h3",{id:"clicking-on-the-title"},"Clicking on the title"),(0,i.kt)("p",null,"The click event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering the title element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/events/TitleClickEventHandler.html"},"TitleClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds title click event handler\nchart.addHandler(new TitleClickEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart title.\n     * \n     * @param event title click event\n     */\n    @Override\n    public onClick(TitleClickEvent event){\n        // logic\n    }\n}, TitleClickEvent.TYPE);\n")),(0,i.kt)("h3",{id:"clicking-on-an-axis"},"Clicking on an axis"),(0,i.kt)("p",null,"The click event is throw if the event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),". When the event is fired hovering an axis element, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/events/AxisClickEventHandler.html"},"AxisClickEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// adds axis click event handler\nchart.addHandler(new AxisClickEventHandler(){\n    \n    /**\n     * Invoked when the user clicks on the chart axis.\n     * \n     * @param event axis click event\n     */\n    @Override\n    public onClick(AxisClickEvent event){\n        // logic\n    }\n}, AxisClickEvent.TYPE);\n")),(0,i.kt)("p",null,"The axis click ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/events/AxisClickEvent.html"},"event")," contains the selected scale ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/ScaleItem.html"},"item")," with all info about the selected scale."),(0,i.kt)("p",null,"Due to charts can be created with specific axes, the axis click event can provide the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/Axis.html"},"axes")," configurations if there are, enabling you to get the instance used to configure the chart."))}k.isMDXComponent=!0}}]);