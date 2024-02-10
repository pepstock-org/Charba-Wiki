"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[76406],{95788:(e,a,t)=>{t.d(a,{Iu:()=>p,yg:()=>h});var n=t(11504);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),o=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=o(e.components);return n.createElement(c.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=o(t),d=i,h=g["".concat(c,".").concat(d)]||g[d]||m[d]||r;return t?n.createElement(h,l(l({ref:a},p),{},{components:t})):n.createElement(h,l({ref:a},p))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[g]="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69156:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=t(45072),i=(t(11504),t(95788));const r={id:"Axes",title:"Introduction",hide_title:!0,sidebar_label:"Introduction"},l=void 0,s={unversionedId:"axes/Axes",id:"version-5.2/axes/Axes",title:"Introduction",description:"Axes",source:"@site/versioned_docs/version-5.2/axes/Axes.md",sourceDirName:"axes",slug:"/axes/",permalink:"/Charba-Wiki/docs/5.2/axes/",draft:!1,tags:[],version:"5.2",frontMatter:{id:"Axes",title:"Introduction",hide_title:!0,sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Api",permalink:"/Charba-Wiki/docs/5.2/charts/Api"},next:{title:"Introduction",permalink:"/Charba-Wiki/docs/5.2/axes/CartesianAxes"}},c={},o=[{value:"Axes",id:"axes",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Axis ID",id:"axis-id",level:2},{value:"Callbacks",id:"callbacks",level:2},{value:"BuildTicks callback",id:"buildticks-callback",level:4},{value:"Calculate tick rotation callback",id:"calculate-tick-rotation-callback",level:4},{value:"Data limit callback",id:"data-limit-callback",level:4},{value:"Dimensions callback",id:"dimensions-callback",level:4},{value:"Fit callback",id:"fit-callback",level:4},{value:"Tick to label conversion callback",id:"tick-to-label-conversion-callback",level:4},{value:"Update callback",id:"update-callback",level:4},{value:"Ticks",id:"ticks",level:2},{value:"Scriptable",id:"scriptable",level:3},{value:"Major Tick",id:"major-tick",level:3}],p={toc:o},g="wrapper";function m(e){let{components:a,...t}=e;return(0,i.yg)(g,(0,n.c)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"axes"},"Axes"),(0,i.yg)("p",null,"Axes are an integral parts of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X axis and 1 or more Y axis to map points onto the 2 dimensional chart. These axes are know as ",(0,i.yg)("a",{parentName:"p",href:"CartesianAxes"},"'cartesian axes'"),"."),(0,i.yg)("p",null,"In a radial chart, such as a radar chart or a polar area chart, there is a single axis that maps points in the angular and radial directions. These are known as ",(0,i.yg)("a",{parentName:"p",href:"RadialAxes"},"'radial axes'"),"."),(0,i.yg)("p",null,"There are a number of options to allow styling an axis. There are settings to control ",(0,i.yg)("a",{parentName:"p",href:"Grid"},"grid")," and ",(0,i.yg)("a",{parentName:"p",href:"#ticks"},"ticks"),"."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("p",null,"Each axis has got a set of common attributes, mandatory options of all axes."),(0,i.yg)("p",null,"At the creation time, an axis needs to have the following 3 attributes:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"id"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/options/ScaleId.html"},"ScaleId")),(0,i.yg)("td",{parentName:"tr",align:"left"},"The unique id of axis.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"type"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/configuration/AxisType.html"},"AxisType")),(0,i.yg)("td",{parentName:"tr",align:"left"},"The type of scale being employed.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"axis"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/enums/AxisKind.html"},"AxisKind")),(0,i.yg)("td",{parentName:"tr",align:"left"},"The axis kind to define which directions are used in axis.")))),(0,i.yg)("p",null,"Here is an example how to create an axis:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'// creates the id "y-my" for the axis\nScaleId scaleId = ScaleId.create("y-my");\n// creates the by chart instance, my scale id and specifying that is a scale for Y \nCartesianLinearAxis linearAxis = new CartesianLinearAxis(chart, scaleId, AxisKind.Y);\n')),(0,i.yg)("h2",{id:"axis-id"},"Axis ID"),(0,i.yg)("p",null,"All axes must have a unique id  which must be passed when the axis is creating. When the id is not passed, the axis will use a ",(0,i.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/enums/DefaultScaleId.html"},"default id")," based on type and kind of axis. "),(0,i.yg)("p",null,"If you are creating a axis by a custom id and ",(0,i.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/enums/AxisKind.html"},"AxisKind")," is not provided, the kind of axis is automatically set checking the first character of axis id:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"if axis id is starting with ",(0,i.yg)("inlineCode",{parentName:"li"},"x"),", then the kind of axis is ",(0,i.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/enums/AxisKind.html#X"},"'X'"),"."),(0,i.yg)("li",{parentName:"ul"},"if axis id is starting with ",(0,i.yg)("inlineCode",{parentName:"li"},"y"),", then the kind of axis is ",(0,i.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/enums/AxisKind.html#Y"},"'Y'"),".")),(0,i.yg)("p",null,"Every axis has got own default axis id and kind, as following:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Default Id"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Default Orientation"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"linear"),(0,i.yg)("td",{parentName:"tr",align:"left"},"DefaultScaleId.Y"),(0,i.yg)("td",{parentName:"tr",align:"left"},"AxisKind.Y")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"logarithmic"),(0,i.yg)("td",{parentName:"tr",align:"left"},"DefaultScaleId.Y"),(0,i.yg)("td",{parentName:"tr",align:"left"},"AxisKind.Y")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"category"),(0,i.yg)("td",{parentName:"tr",align:"left"},"DefaultScaleId.X"),(0,i.yg)("td",{parentName:"tr",align:"left"},"AxisKind.X")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"time"),(0,i.yg)("td",{parentName:"tr",align:"left"},"DefaultScaleId.X"),(0,i.yg)("td",{parentName:"tr",align:"left"},"AxisKind.X")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"timeseries"),(0,i.yg)("td",{parentName:"tr",align:"left"},"DefaultScaleId.X"),(0,i.yg)("td",{parentName:"tr",align:"left"},"AxisKind.X")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"radialLinear"),(0,i.yg)("td",{parentName:"tr",align:"left"},"DefaultScaleId.R"),(0,i.yg)("td",{parentName:"tr",align:"left"},"AxisKind.R")))),(0,i.yg)("h2",{id:"callbacks"},"Callbacks"),(0,i.yg)("p",null,"There are a number of configuration callbacks that can be used to change parameters in the scale at different points in the update process."),(0,i.yg)("p",null,"All callbacks interfaces have got 2 arguments:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/configuration/Axis.html"},"Axis")," instance"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/items/AxisItem.html"},"Axis item")," object with all details about axis.")),(0,i.yg)("p",null,"To add a callback, see the following example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"axis.setAxisUpdateCallback(new AxisUpdateCallback(){\n\n   // methods implementation\n\n});\n")),(0,i.yg)("h4",{id:"buildticks-callback"},"BuildTicks callback"),(0,i.yg)("p",null,"This callback can be used to change parameters in the scale during ticks building. Each axis can manage different type of ticks (strings, numbers, dates) and the description how to use the build ticks callback is described in the page of axes:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"CartesianCategoryAxes#buildticks-callback"},"Category cartesian axes")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"CartesianLinearAxes#buildticks-callback"},"Linear cartesian axes")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"CartesianLogarithmicAxes#buildticks-callback"},"Logarithmic cartesian axes")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"CartesianTimeAxes#buildticks-callback"},"Time cartesian axes")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"RadialAxes#buildticks-callback"},"Linear radial axes"))),(0,i.yg)("h4",{id:"calculate-tick-rotation-callback"},"Calculate tick rotation callback"),(0,i.yg)("p",null,"This callback can be used to change parameters in the scale during tick rotation. To implement this callback, you must implement ",(0,i.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/AxisCalculateTickRotationCallback.html"},"this interface"),". "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public interface AxisCalculateTickRotationCallback {\n\n   /**\n    * Callback that runs before tick rotation is determined.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeCalculateTickRotation(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs after tick rotation is determined.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onAfterCalculateTickRotation(Axis axis, AxisItem item);\n\n}\n")),(0,i.yg)("h4",{id:"data-limit-callback"},"Data limit callback"),(0,i.yg)("p",null,"This callback can be used to change parameters in the scale during data limits determination. To implement this callback, you must implement ",(0,i.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/AxisDataLimitsCallback.html"},"this interface"),". "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public interface AxisDataLimitsCallback {\n\n   /**\n    * Callback that runs before data limits are determined.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeDataLimits(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs after data limits are determined.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onAfterDataLimits(Axis axis, AxisItem item);\n}\n")),(0,i.yg)("h4",{id:"dimensions-callback"},"Dimensions callback"),(0,i.yg)("p",null,"This callback can be used to change parameters in the scale during setting dimensions. To implement this callback, you must implement ",(0,i.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/AxisDimensionsCallback.html"},"this interface"),". "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public interface AxisDimensionsCallback {\n\n   /**\n    * Callback that runs before dimensions are set.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeSetDimensions(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs after dimensions are set.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onAfterSetDimensions(Axis axis, AxisItem item);\n\n}\n")),(0,i.yg)("h4",{id:"fit-callback"},"Fit callback"),(0,i.yg)("p",null,"This callback can be used to change parameters in the scale during fitting phase. To implement this callback, you must implement ",(0,i.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/AxisFitCallback.html"},"this interface"),". "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public interface AxisFitCallback {\n\n   /**\n    * Callback that runs before the scale fits to the canvas.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeFit(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs after the scale fits to the canvas.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onAfterFit(Axis axis, AxisItem item);\n\n}\n")),(0,i.yg)("h4",{id:"tick-to-label-conversion-callback"},"Tick to label conversion callback"),(0,i.yg)("p",null,"This callback can be used to change parameters in the scale during ticks label conversion. To implement this callback, you must implement ",(0,i.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/AxisTickToLabelConversionCallback.html"},"this interface"),". "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public interface AxisTickToLabelConversionCallback {\n\n   /**\n    * Callback that runs before ticks are converted in strings.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeTickToLabelConversion(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs after ticks are converted in strings.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onAfterTickToLabelConversion(Axis axis, AxisItem item);\n\n}\n")),(0,i.yg)("h4",{id:"update-callback"},"Update callback"),(0,i.yg)("p",null,"This callback can be used to change parameters in the scale during updating. To implement this callback, you must implement ",(0,i.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/AxisUpdateCallback.html"},"this interface"),". "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public interface AxisUpdateCallback {\n\n   /**\n    * Callback called before the update process starts.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeUpdate(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs at the end of the update process.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onAfterUpdate(Axis axis, AxisItem item);\n\n}\n")),(0,i.yg)("h2",{id:"ticks"},"Ticks"),(0,i.yg)("p",null,"All ticks generated by axes can be configured. All axes are providing the capability to set and get the options, by the ",(0,i.yg)("strong",{parentName:"p"},"set")," and ",(0,i.yg)("strong",{parentName:"p"},"get")," methods, as following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'// creates the axis for chart with default id and kind to "y"\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets display to the ticks\naxis.getTicks().setDisplay(true);\n\nboolean display = axis.getTicks().isDisplay();\n')),(0,i.yg)("p",null,"Table with options:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"color"),(0,i.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.yg)("td",{parentName:"tr",align:"left"},"Color of ticks.",(0,i.yg)("br",null),"See ",(0,i.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"display"),(0,i.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.yg)("td",{parentName:"tr",align:"left"},"-"),(0,i.yg)("td",{parentName:"tr",align:"left"},"If ",(0,i.yg)("inlineCode",{parentName:"td"},"true"),", the tick marks are shown.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"font"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.yg)("td",{parentName:"tr",align:"left"},"Font of ticks.",(0,i.yg)("br",null),"See ",(0,i.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,i.yg)("td",{parentName:"tr",align:"left"},"int"),(0,i.yg)("td",{parentName:"tr",align:"left"},"-"),(0,i.yg)("td",{parentName:"tr",align:"left"},"The padding between the tick label and the axis.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"textStrokeColor"),(0,i.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.yg)("td",{parentName:"tr",align:"left"},"The color of the stroke around the text.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),(0,i.yg)("td",{parentName:"tr",align:"left"},"int"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.yg)("td",{parentName:"tr",align:"left"},"Stroke width around the text.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"z"),(0,i.yg)("td",{parentName:"tr",align:"left"},"int"),(0,i.yg)("td",{parentName:"tr",align:"left"},"-"),(0,i.yg)("td",{parentName:"tr",align:"left"},"The z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.")))),(0,i.yg)("h3",{id:"scriptable"},"Scriptable"),(0,i.yg)("p",null,"Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in ",(0,i.yg)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,i.yg)("p",null,"All scriptable options callbacks will get a ",(0,i.yg)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-context"},"ScaleContext")," instance."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"// creates the axis for chart\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets the option by a callback \naxis.getTicks().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,i.yg)("p",null,"The following options can be set by a callback:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Callback"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"color"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,i.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"font"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ScaleContext",">"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"textStrokeColor"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,i.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,i.yg)("td",{parentName:"tr",align:"left"},"int")))),(0,i.yg)("h3",{id:"major-tick"},"Major Tick"),(0,i.yg)("p",null,"The major tick configuration enables for the major tick marks that are generated by the axis. A major tick will affect auto-skipping and major will be defined on ticks in the scriptable options context, by ",(0,i.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/items/ScaleTickItem.html"},"ScaleTickItem")," class and ",(0,i.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/items/ScaleTickItem.html#isMajor--"},"isMajor")," method."),(0,i.yg)("p",null,"The major ticks configuration is nested in the ticks configuration as following: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'// creates the axis for chart with default id and kind to "y"\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// enables major tick\naxis.getTicks().getMajor().setEnabled(true);\n\nboolean enabled = axis.getTicks().getMajor().isEnabled();\n')),(0,i.yg)("p",null,"The following are the attributes that you can set:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,i.yg)("th",{parentName:"tr",align:"left"}))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"enabled"),(0,i.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.yg)("td",{parentName:"tr",align:"left"},"If ",(0,i.yg)("inlineCode",{parentName:"td"},"true"),", major ticks marks are generated."),(0,i.yg)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);