"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[5984],{95788:(t,e,a)=>{a.d(e,{Iu:()=>s,yg:()=>b});var r=a(11504);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),g=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=g(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=g(a),d=n,b=p["".concat(c,".").concat(d)]||p[d]||y[d]||o;return a?r.createElement(b,l(l({ref:e},s),{},{components:a})):r.createElement(b,l({ref:e},s))}));function b(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:n,l[1]=i;for(var g=2;g<o;g++)l[g]=a[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},40172:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var r=a(45072),n=(a(11504),a(95788));const o={id:"ScriptableOptions",title:"Scriptable Options",hide_title:!0,sidebar_label:"Scriptable Options"},l=void 0,i={unversionedId:"configuration/ScriptableOptions",id:"version-5.4/configuration/ScriptableOptions",title:"Scriptable Options",description:"Scriptable options",source:"@site/versioned_docs/version-5.4/configuration/ScriptableOptions.md",sourceDirName:"configuration",slug:"/configuration/ScriptableOptions",permalink:"/Charba-Wiki/docs/5.4/configuration/ScriptableOptions",draft:!1,tags:[],version:"5.4",frontMatter:{id:"ScriptableOptions",title:"Scriptable Options",hide_title:!0,sidebar_label:"Scriptable Options"},sidebar:"docs",previous:{title:"Decimation and filler",permalink:"/Charba-Wiki/docs/5.4/configuration/FillerAndDecimation"},next:{title:"Introduction",permalink:"/Charba-Wiki/docs/5.4/charts/"}},c={},g=[{value:"Scriptable options",id:"scriptable-options",level:2},{value:"Options Context",id:"options-context",level:2},{value:"Chart context",id:"chart-context",level:3},{value:"Custom attributes",id:"custom-attributes",level:3},{value:"Dataset context",id:"dataset-context",level:3},{value:"Scale context",id:"scale-context",level:3},{value:"Advanced usage of scriptable options",id:"advanced-usage-of-scriptable-options",level:2}],s={toc:g},p="wrapper";function y(t){let{components:e,...a}=t;return(0,n.yg)(p,(0,r.c)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"scriptable-options"},"Scriptable options"),(0,n.yg)("p",null,"Scriptable options are configuration items which can be configured at runtime, based on a callback which is called for each of the underlying data values and that takes a context representing contextual information."),(0,n.yg)("p",null,"All scriptable options callbacks can accept only 1 argument, the context, which can be different depending on the chart element which is triggering the callback."),(0,n.yg)("p",null,"Here is an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates datasets instance from chart\nLineDataset dataset = chart.newDataset();\n// sets callback for scriptable options\ndataset.setBackgroundColor(new ColorCallback<DatasetContext>(){\n\n    @Override\n    public IsColor invoke(DatasetContext context){\n        return HtmlColor.PINK;\n    }\n\n});\n")),(0,n.yg)("h2",{id:"options-context"},"Options Context"),(0,n.yg)("p",null,"The option context is used to give contextual information when resolving options. It applies to all scriptable options and their callbacks."),(0,n.yg)("p",null,"The object is preserved, so it can be used to store and pass information between calls."),(0,n.yg)("p",null,"There are the following different types of context objects, to be consumed on scriptable options on chart elements (plugins excluded):"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ChartContext.html"},"chart context")," used for scriptable options that apply at chart configuration level."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/DatasetContext.html"},"dataset context")," used for scriptable options that apply at dataset or data configuration level."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ScaleContext.html"},"scale context")," used for scriptable options that apply at scale or ticks level.")),(0,n.yg)("p",null,"Apart for the options stored by the user in the context (attributes), all other options must be considered as read-only properties. "),(0,n.yg)("h3",{id:"chart-context"},"Chart context"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ChartContext.html"},"chart context")," is used for scriptable options set in the chart configuration and is providing all necessary information about the chart in order to apply own logic."),(0,n.yg)("p",null,"The context object contains the following properties:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"chart"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/IsChart.html"},"IsChart")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Chart instance.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"type"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/items/ContextType.html"},"ContextType")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The type of the context. It can only be ",(0,n.yg)("inlineCode",{parentName:"td"},"ContextType.CHART"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"attributes"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/commons/NativeObjectContainer.html"},"NativeObjectContainer")),(0,n.yg)("td",{parentName:"tr",align:"left"},"User object which you can store your options at runtime.")))),(0,n.yg)("h3",{id:"custom-attributes"},"Custom attributes"),(0,n.yg)("p",null,"You can set custom attributes in the context. When the context is persistent, this could be very helpful because can store attributes needed in the logic of the scriptable options."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/commons/Key.html"},"Key")," instance"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean - double - int - String"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The key could not be the same of the existing context properties and can set custom attributes.")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates datasets instance from chart\nBarDataset dataset = chart.newDataset();\n// sets callback for scriptable options\ndataset.setBackgroundColor(new ColorCallback<DatasetContext>(){\n\n    private final Key myKey = Key.create("myKey");\n\n    @Override\n    public IsColor invoke(DatasetContext context){\n        // -------------------------------\n        // sets and gets boolean attribute\n        // -------------------------------\n        context.setAttribute(myKey, true);\n        boolean myKeyAsBoolean = context.getAttribute(myKey, false);\n        // -------------------------------\n        // sets and gets double attribute\n        // -------------------------------\n        context.setAttribute(myKey, 0D);\n        double myKeyAsDouble = context.getAttribute(myKey, Double.NaN);\n        // -------------------------------\n        // sets and gets int attribute\n        // -------------------------------\n        context.setAttribute(myKey, 1);\n        double myKeyAsInt = context.getAttribute(myKey, Integer.MIN_VALUE);\n        // -------------------------------\n        // sets and gets string attribute\n        // -------------------------------\n        context.setAttribute(myKey, "myString");\n        String myKeyAsString = context.getAttribute(myKey, null);\n        \n        // logic\n    }\n\n});\n')),(0,n.yg)("h3",{id:"dataset-context"},"Dataset context"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/DatasetContext.html"},"dataset context")," is used for data set scriptable options which are providing all necessary information to get the data and data set links in order to apply own logic."),(0,n.yg)("p",null,"Here is an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates datasets instance from chart\nBarDataset dataset = chart.newDataset();\n// sets callback for scriptable options\ndataset.setBackgroundColor(new ColorCallback<DatasetContext>(){\n\n    @Override\n    public IsColor invoke(DatasetContext context){\n        // gets chart from context\n        IsChart chart = context.getChart();\n        // gets data by indexes provided by context\n        Dataset dataset = chart.getData().getDatasets().get(context.getDatasetIndex());\n        Double value = dataset.getData().get(context.getDataIndex());\n        // my logic\n        if (value >= 85D){\n            return HtmlColor.RED;\n        } else if (value >= 60D){\n            return HtmlColor.ORANGE;\n        }\n        return HtmlColor.GREEN;\n    }\n\n});\n")),(0,n.yg)("p",null,"The context object contains the following properties:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"active"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether the associated element is hovered.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"attributes"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/commons/NativeObjectContainer.html"},"NativeObjectContainer")),(0,n.yg)("td",{parentName:"tr",align:"left"},"User object which you can store your options at runtime.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"chart"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/IsChart.html"},"IsChart")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Chart instance.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"dataIndex"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The index of the current data.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"datasetElement"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/items/DatasetElement.html"},"DatasetElement")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The element (point, arc, bar, etc.) for this data")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"datasetIndex"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The index of the current data set.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"datasetItem"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/items/DatasetItem.html"},"DatasetItem")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The data set information for this data")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"mode"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/TransitionKey.html"},"TransitionKey")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The update mode, brought by conte")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"type"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/items/ContextType.html"},"ContextType")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The type of the context. It can be ",(0,n.yg)("inlineCode",{parentName:"td"},"ContextType.DATASET")," or ",(0,n.yg)("inlineCode",{parentName:"td"},"ContextType.DATA"),".")))),(0,n.yg)("p",null,"The following matrix will report which properties are available based on the context type."),(0,n.yg)("table",null,(0,n.yg)("thead",null,(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"col"},"Name"),(0,n.yg)("th",{scope:"col"},"ContextType.DATASET"),(0,n.yg)("th",{scope:"col"},"ContextType.DATA"))),(0,n.yg)("tbody",null,(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"active"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"attributes"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"chart"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"dataIndex"),(0,n.yg)("td",{style:{backgroundColor:"rgb(255,232,232)"}},"NO"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"datasetElement"),(0,n.yg)("td",{style:{backgroundColor:"rgb(255,232,232)"}},"NO"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"datasetIndex"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"datasetItem"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"mode"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")))),(0,n.yg)("h3",{id:"scale-context"},"Scale context"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ScaleContext.html"},"scale context")," is used for scales and ticks scriptable options which are providing all necessary information to get the scale and ticks links in order to apply own logic."),(0,n.yg)("p",null,"Here is an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates an axis\nRadialAxis axis = new RadialAxis(chart);\n// sets callback for scriptable options\naxis.getPointLabels().setColor(new ColorCallback<ScaleContext>(){\n            \n    @Override\n    public Object invoke(ScaleContext context){\n        // my logic\n        return context.getIndex() % 2  == 0 ? HtmlColor.RED : HtmlColor.BLACK;\n    }\n});\n")),(0,n.yg)("p",null,"The context object contains the following properties:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"attributes"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/commons/NativeObjectContainer.html"},"NativeObjectContainer")),(0,n.yg)("td",{parentName:"tr",align:"left"},"User object which you can store your options at runtime.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"axis"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/Axis.html"},"Axis")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Axis instance.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"chart"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/IsChart.html"},"IsChart")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Chart instance.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"index"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The index of the current tick or the label (wfor ",(0,n.yg)("a",{parentName:"td",href:"../axes/PointLabels#scriptable"},"point labels")," callback).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"label"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String"),(0,n.yg)("td",{parentName:"tr",align:"left"},"the label that is shown on the perimeter of the scale. Only for ",(0,n.yg)("a",{parentName:"td",href:"../axes/PointLabels#scriptable"},"point labels")," callback.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"scale"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/items/ScaleItem.html"},"ScaleItem")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The scale associated to this context.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"tick"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/items/ScaleTickItem.html"},"ScaleTickItem")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The tick associated to this context.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"type"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/items/ContextType.html"},"ContextType")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The type of the context. It can be ",(0,n.yg)("inlineCode",{parentName:"td"},"ContextType.SCALE"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"ContextType.TICK"),"  or ",(0,n.yg)("inlineCode",{parentName:"td"},"ContextType.POINT_LABEL"),".")))),(0,n.yg)("p",null,"The following matrix will report which properties are available based on the context type."),(0,n.yg)("table",null,(0,n.yg)("thead",null,(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"col"},"Name"),(0,n.yg)("th",{scope:"col"},"ContextType.SCALE"),(0,n.yg)("th",{scope:"col"},"ContextType.TICK"),(0,n.yg)("th",{scope:"col"},"ContextType.POINT_LABEL"))),(0,n.yg)("tbody",null,(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"attributes"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"axis"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"chart"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"index"),(0,n.yg)("td",{style:{backgroundColor:"rgb(255,232,232)"}},"NO"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"scale"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"tick"),(0,n.yg)("td",{style:{backgroundColor:"rgb(255,232,232)"}},"NO"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available"),(0,n.yg)("td",{style:{backgroundColor:"rgb(255,232,232)"}},"NO")),(0,n.yg)("tr",null,(0,n.yg)("td",{scope:"row"},"label"),(0,n.yg)("td",{style:{backgroundColor:"rgb(255,232,232)"}},"NO"),(0,n.yg)("td",{style:{backgroundColor:"rgb(255,232,232)"}},"NO"),(0,n.yg)("td",{style:{backgroundColor:"rgb(244,252,239)"}},"Available")))),(0,n.yg)("h2",{id:"advanced-usage-of-scriptable-options"},"Advanced usage of scriptable options"),(0,n.yg)("p",null,"There are use cases where the scriptable options callbacks are called several hundreds because are related to the amount of data set on datasets of the charts."),(0,n.yg)("p",null,"When you are in above use case and you need the best performance, you can set a scriptable options by a ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/NativeCallback.html"},"native java script callback"),"."),(0,n.yg)("p",null,"A ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/NativeCallback.html"},"native java script callback")," is built with java script code in order to be execute directly from ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates a callback \n// using java script code and default "context" variable name\n// for scriptable context\nNativeCallback from = NativeCallback.create("return context.index === 0 ? context.chart.scales.y.getPixelForValue(100) : context.chart.getDatasetMeta(context.datasetIndex).data[context.index - 1].getProps([\'y\'], true).y;");\n\n// creates a callback \n// using java script code and my "ctx" variable name\n// for scriptable context\nNativeCallback loop = NativeCallback.create("ctx", "return ctx.active");\n\nAnimations animations = chart.getOptions().getAnimations();\nAnimationCollection y = animations.create(DefaultAnimationPropertyKey.Y);\ny.setFrom(from);\ny.setLoop(loop);\n\n')))}y.isMDXComponent=!0}}]);