"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[3598],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return b}});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),i=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=i(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=i(t),b=l,u=h["".concat(c,".").concat(b)]||h[b]||d[b]||r;return t?n.createElement(u,o(o({ref:a},p),{},{components:t})):n.createElement(u,o({ref:a},p))}));function b(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=h;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},74700:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return h}});var n=t(87462),l=t(63366),r=(t(67294),t(3905)),o=["components"],s={id:"Callbacks",title:"Callbacks",hide_title:!0,sidebar_label:"Callbacks"},c=void 0,i={unversionedId:"Callbacks",id:"version-3.3/Callbacks",title:"Callbacks",description:"CHARBA callbacks implementations",source:"@site/versioned_docs/version-3.3/Callbacks.md",sourceDirName:".",slug:"/Callbacks",permalink:"/Charba-Wiki/docs/3.3/Callbacks",tags:[],version:"3.3",frontMatter:{id:"Callbacks",title:"Callbacks",hide_title:!0,sidebar_label:"Callbacks"},sidebar:"version-3.3/docs",previous:{title:"HTML legend",permalink:"/Charba-Wiki/docs/3.3/PluginHTMLLegend"},next:{title:"DataLabels",permalink:"/Charba-Wiki/docs/3.3/DataLabels"}},p=[{value:"CHARBA callbacks implementations",id:"charba-callbacks-implementations",children:[],level:2},{value:"AtLeastOneDatasetHandler event",id:"atleastonedatasethandler-event",children:[],level:2},{value:"NoSelectedDatasetTicksCallback callback",id:"noselecteddatasettickscallback-callback",children:[],level:2},{value:"DataLabelsPointerHandler handler",id:"datalabelspointerhandler-handler",children:[],level:2},{value:"DataLabelsSelectionHandler handler",id:"datalabelsselectionhandler-handler",children:[],level:2},{value:"PercentageCallback formatter",id:"percentagecallback-formatter",children:[],level:2}],d={toc:p};function h(e){var a=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"charba-callbacks-implementations"},"CHARBA callbacks implementations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides some callbacks or events out-of-the-box implementation, developed for common purposes."),(0,r.kt)("h2",{id:"atleastonedatasethandler-event"},"AtLeastOneDatasetHandler event"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides a common implementation for legend click event handler to enable the control about how many datasets are hidden, in order to have at least 1 dataset visible and avoid to have an empty chart."),(0,r.kt)("p",null,"The class is named ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/AtLeastOneDatasetHandler.html"},"AtLeastOneDatasetHandler"),"."),(0,r.kt)("p",null,"To apply the event handler, you can set to the chart, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new AtLeastOneDatasetHandler(), LegendClickEvent.TYPE);\n")),(0,r.kt)("h2",{id:"noselecteddatasettickscallback-callback"},"NoSelectedDatasetTicksCallback callback"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides a common implementation for tick callback to set the decimal digits of ticks in case of all datasets are hidden, to avoid the annoying standard format of doubles."),(0,r.kt)("p",null,"The class is named ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/NoSelectedDatasetTicksCallback.html"},"NoSelectedDatasetTicksCallback"),"."),(0,r.kt)("p",null,"To apply the callback, you can set an instance to the axis options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"axis.getTicks().setCallback(new NoSelectedDatasetTicksCallback());\n")),(0,r.kt)("p",null,"The default decimal precision is ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),". A custom precision can be set by the constructor of callback, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// 3 decimal digits \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback(3));\n")),(0,r.kt)("h2",{id:"datalabelspointerhandler-handler"},"DataLabelsPointerHandler handler"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides a common listener handler for ",(0,r.kt)("a",{parentName:"p",href:"DataLabels#listeners-element"},"DATALABELS listener")," to change the cursor type when the labels are clickable."),(0,r.kt)("p",null,"The class is named ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/DataLabelsPointerHandler.html"},"DataLabelsPointerHandler"),"."),(0,r.kt)("p",null,"To apply the handler, you can set an instance to the DATALABEL options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DataLabelsPointerHandler handler = new DataLabelsPointerHandler();\n\nDataLabelsOptions options = new DataLabelsOptions();\noptions.setListenersHandler(handler);\n")),(0,r.kt)("p",null,"The handler can be customized at constructor level, setting which ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/CursorType.html"},"cursor")," must be used hovering the labels, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// uses the CursorType.POINTER\nDataLabelsPointerHandler handler = new DataLabelsPointerHandler();\n\n// uses the CursorType.CROSSHAIR\nDataLabelsPointerHandler handler = new DataLabelsPointerHandler(CursorType.CROSSHAIR);\n")),(0,r.kt)("h2",{id:"datalabelsselectionhandler-handler"},"DataLabelsSelectionHandler handler"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides a common listener handler for ",(0,r.kt)("a",{parentName:"p",href:"DataLabels#listeners-element"},"DATALABELS listener")," to invoke dataset selection handlers if there were defined. The handler accepts ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler")," instances in order to notify which dataset has been selected clicking on the label."),(0,r.kt)("p",null,"The class is named ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/DataLabelsSelectionHandler.html"},"DataLabelsSelectionHandler"),"."),(0,r.kt)("p",null,"To apply a callback, you can set an instance to the DATALABEL options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DataLabelsSelectionHandler handler = new DataLabelsSelectionHandler();\n\nhandler.addDatasetSelectionEventHandler(new DatasetSelectionEventHandler() {\n    \n    /**\n     * Invoked when the user clicks on the chart to select a dataset.\n     * \n     * @param event chart dataset selection event\n     */         \n    @Override\n    public void onSelect(DatasetSelectionEvent event) {\n        // logic\n    }\n});\n\nDataLabelsOptions options = new DataLabelsOptions();\noptions.setListenersHandler(handler);\n")),(0,r.kt)("p",null,"Against to the ",(0,r.kt)("a",{parentName:"p",href:"General#onselect-event-for-dataset-selection"},"dataset selection event handler"),", at chart level, this invocation is synchronous."),(0,r.kt)("p",null,"The handler can be customized at constructor level, setting which ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/enums/CursorType.html"},"cursor")," must be used hovering the labels, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// uses the CursorType.POINTER\nDataLabelsSelectionHandler handler = new DataLabelsSelectionHandler();\n\n// uses the CursorType.CROSSHAIR\nDataLabelsSelectionHandler handler = new DataLabelsSelectionHandler(CursorType.CROSSHAIR);\n")),(0,r.kt)("h2",{id:"percentagecallback-formatter"},"PercentageCallback formatter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides a common callback for ",(0,r.kt)("a",{parentName:"p",href:"DataLabels#formatting"},"DATALABELS formatter")," in order to provide the percentage of the value for each data index per dataset."),(0,r.kt)("p",null,"The class is named ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/PercentageCallback.html"},"PercentageCallback"),"."),(0,r.kt)("p",null,"To apply the callback, you can set an instance to the DATALABEL options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"PercentageCallback callback = new PercentageCallback();\n\nDataLabelsOptions options = new DataLabelsOptions();\noptions.setFormatter(callback);\n")),(0,r.kt)("p",null,"The handler can be customized at constructor level, setting:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"decimal precision, in order to have a good number of decimal digits of percentage to show. Default is ",(0,r.kt)("strong",{parentName:"li"},"2"),";"),(0,r.kt)("li",{parentName:"ul"},"stacked, as boolean argument, in order to calculate the percentage on the total of the dataset (",(0,r.kt)("inlineCode",{parentName:"li"},"false"),") or using the same data index of stacked datasets (",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"). Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")))}h.isMDXComponent=!0}}]);