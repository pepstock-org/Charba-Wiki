(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[9435],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return c},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,u=m["".concat(o,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(u,i(i({ref:e},c),{},{components:a})):n.createElement(u,i({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6277:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return o},default:function(){return c}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i={id:"Axes",title:"Axes",hide_title:!0,sidebar_label:"Introduction"},s={unversionedId:"Axes",id:"version-3.3/Axes",isDocsHomePage:!1,title:"Axes",description:"Introduction",source:"@site/versioned_docs/version-3.3/Axes.md",sourceDirName:".",slug:"/Axes",permalink:"/Charba-Wiki/docs/3.3/Axes",version:"3.3",sidebar_label:"Introduction",frontMatter:{id:"Axes",title:"Axes",hide_title:!0,sidebar_label:"Introduction"},sidebar:"version-3.3/docs",previous:{title:"Bubble chart",permalink:"/Charba-Wiki/docs/3.3/ChartBubble"},next:{title:"Cartesian axes",permalink:"/Charba-Wiki/docs/3.3/CartesianAxes"}},o=[{value:"Introduction",id:"introduction",children:[]},{value:"Common Configuration",id:"common-configuration",children:[]},{value:"Callbacks",id:"callbacks",children:[]},{value:"GridLines",id:"gridlines",children:[]},{value:"Ticks",id:"ticks",children:[{value:"Minor tick",id:"minor-tick",children:[]},{value:"Major tick",id:"major-tick",children:[]}]}],p={toc:o};function c(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Axes are an integral parts of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X axis and 1 or more Y axis to map points onto the 2 dimensional chart. These axes are know as ",(0,l.kt)("a",{parentName:"p",href:"CartesianAxes"},"'cartesian axes'"),"."),(0,l.kt)("p",null,"In a radial chart, such as a radar chart or a polar area chart, there is a single axis that maps points in the angular and radial directions. These are known as ",(0,l.kt)("a",{parentName:"p",href:"RadialAxes"},"'radial axes'"),"."),(0,l.kt)("p",null,"There are a number of options to allow styling an axis. There are settings to control ",(0,l.kt)("a",{parentName:"p",href:"#gridlines"},"grid lines")," and ",(0,l.kt)("a",{parentName:"p",href:"#ticks"},"ticks"),"."),(0,l.kt)("h2",{id:"common-configuration"},"Common Configuration"),(0,l.kt)("p",null,"The following properties are common to all axes provided by ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"display"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/Display.html"},"Display")),(0,l.kt)("td",{parentName:"tr",align:null},"Display.TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," the axis is hidden from view. Overrides ",(0,l.kt)("em",{parentName:"td"},"gridLines.display"),", ",(0,l.kt)("em",{parentName:"td"},"scaleLabel.display"),", and ",(0,l.kt)("em",{parentName:"td"},"ticks.display"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"weight"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"The weight used to sort the axis. Higher weights are further away from the chart area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/AxisType.html"},"AxisType")),(0,l.kt)("td",{parentName:"tr",align:null},"AxisType.LINEAR"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of scale being employed.")))),(0,l.kt)("h2",{id:"callbacks"},"Callbacks"),(0,l.kt)("p",null,"There are a number of configuration callbacks that can be used to change parameters in the scale at different points in the update process."),(0,l.kt)("p",null,"All callbacks interfaces have got 2 arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/Axis.html"},"Axis")," instance"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/items/AxisItem.html"},"Axis item")," object with all details about axis.")),(0,l.kt)("p",null,"To add a callback, see the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"axis.setAxisUpdateCallback(new AxisUpdateCallback() {\n\n   // methods implementation\n\n});\n")),(0,l.kt)("h4",{id:"buildticks-callback"},"BuildTicks callback"),(0,l.kt)("p",null,"This callback can be used to change parameters in the scale during ticks building. Each axis can manage different type of ticks (strings, numbers, dates) and the description how to use the build ticks callback is described in the page of axes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"CartesianCategoryAxes#buildticks-callback"},"Category cartesian axes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"CartesianLinearAxes#buildticks-callback"},"Linear cartesian axes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"CartesianLogarithmicAxes#buildticks-callback"},"Logarithmic cartesian axes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"CartesianTimeAxes#buildticks-callback"},"Time cartesian axes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"RadialAxes#buildticks-callback"},"Linear radial axes"))),(0,l.kt)("h4",{id:"calculate-tick-rotation-callback"},"Calculate tick rotation callback"),(0,l.kt)("p",null,"This callback can be used to change parameters in the scale during tick rotation. To implement this callback, you must implement ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/AxisCalculateTickRotationCallback.html"},"this interface"),". "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface AxisCalculateTickRotationCallback {\n\n   /**\n    * Callback that runs before tick rotation is determined.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeCalculateTickRotation(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs after tick rotation is determined.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onAfterCalculateTickRotation(Axis axis, AxisItem item);\n\n}\n")),(0,l.kt)("h4",{id:"data-limit-callback"},"Data limit callback"),(0,l.kt)("p",null,"This callback can be used to change parameters in the scale during data limits determination. To implement this callback, you must implement ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/AxisDataLimitsCallback.html"},"this interface"),". "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface AxisDataLimitsCallback {\n\n   /**\n    * Callback that runs before data limits are determined.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeDataLimits(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs after data limits are determined.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onAfterDataLimits(Axis axis, AxisItem item);\n}\n")),(0,l.kt)("h4",{id:"dimensions-callback"},"Dimensions callback"),(0,l.kt)("p",null,"This callback can be used to change parameters in the scale during setting dimensions. To implement this callback, you must implement ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/AxisDimensionsCallback.html"},"this interface"),". "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface AxisDimensionsCallback {\n\n   /**\n    * Callback that runs before dimensions are set.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeSetDimensions(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs after dimensions are set.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onAfterSetDimensions(Axis axis, AxisItem item);\n\n}\n")),(0,l.kt)("h4",{id:"fit-callback"},"Fit callback"),(0,l.kt)("p",null,"This callback can be used to change parameters in the scale during fitting phase. To implement this callback, you must implement ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/AxisFitCallback.html"},"this interface"),". "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface AxisFitCallback {\n\n   /**\n    * Callback that runs before the scale fits to the canvas.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeFit(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs after the scale fits to the canvas.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onAfterFit(Axis axis, AxisItem item);\n\n}\n")),(0,l.kt)("h4",{id:"tick-to-label-conversion-callback"},"Tick to label conversion callback"),(0,l.kt)("p",null,"This callback can be used to change parameters in the scale during ticks label conversion. To implement this callback, you must implement ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/AxisTickToLabelConversionCallback.html"},"this interface"),". "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface AxisTickToLabelConversionCallback {\n\n   /**\n    * Callback that runs before ticks are converted into strings.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeTickToLabelConversion(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs after ticks are converted into strings.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onAfterTickToLabelConversion(Axis axis, AxisItem item);\n\n}\n")),(0,l.kt)("h4",{id:"update-callback"},"Update callback"),(0,l.kt)("p",null,"This callback can be used to change parameters in the scale during updating. To implement this callback, you must implement ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/AxisUpdateCallback.html"},"this interface"),". "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface AxisUpdateCallback {\n\n   /**\n    * Callback called before the update process starts.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeUpdate(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs at the end of the update process.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onAfterUpdate(Axis axis, AxisItem item);\n\n}\n")),(0,l.kt)("h2",{id:"gridlines"},"GridLines"),(0,l.kt)("p",null,"It defines options for the grid lines that run perpendicular to the axis. All axes are providing the capability to set and get the options, by the ",(0,l.kt)("strong",{parentName:"p"},"set")," and ",(0,l.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CartesianLinearAxis axis = new CartesianLinearAxis(chart);\naxis.getGridLines().setLineWidth(5);\naxis.getGridLines().getLineWidth();\n")),(0,l.kt)("p",null,"Table with options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"display"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", do not display grid lines for this axis.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"color"),(0,l.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"rgba(0,0,0,0.1)"),(0,l.kt)("td",{parentName:"tr",align:null},"The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line and so on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"borderDash"),(0,l.kt)("td",{parentName:"tr",align:null},"int[]"),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Length and spacing of dashes on grid lines.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"borderDashOffset"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Offset for line dashes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lineWidth"),(0,l.kt)("td",{parentName:"tr",align:null},"int[]"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Stroke width of grid lines.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"drawBorder"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", draw border at the edge between the axis and the chart area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"drawOnChartArea"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"drawTicks"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", draw lines beside the ticks in the axis area beside the chart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tickMarkLength"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"Length in pixels that the grid lines will draw into the axis area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zeroLineWidth"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Stroke width of the grid line for the first index (index 0).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zeroLineColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null},"rgba(0,0,0,0.25)"),(0,l.kt)("td",{parentName:"tr",align:null},"Stroke color of the grid line for the first index (index 0).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zeroLineBorderDash"),(0,l.kt)("td",{parentName:"tr",align:null},"int[]"),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Length and spacing of dashes of the grid line for the first index (index 0).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zeroLineBorderDashOffset"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Offset for line dashes of the grid line for the first index (index 0).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offsetGridLines"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", grid lines will be shifted to be between labels. This is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," in the bar chart by default.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"circular"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", grid lines are circular (on radar chart only).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"z"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"z-index of gridline layer. Values less than or equals to 0 are drawn under datasets, greater than 0 on top.")))),(0,l.kt)("h2",{id:"ticks"},"Ticks"),(0,l.kt)("p",null,"All ticks generated by axes can be configured. All axes are providing the capability to set and get the options, by the ",(0,l.kt)("strong",{parentName:"p"},"set")," and ",(0,l.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CartesianLinearAxis axis = new CartesianLinearAxis(chart);\naxis.getTicks().setReverse(true);\naxis.getTicks().isReverse();\n")),(0,l.kt)("p",null,"Table with options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"display"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", show tick marks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null},"#666"),(0,l.kt)("td",{parentName:"tr",align:null},"Font color for tick labels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontFamily"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),(0,l.kt)("td",{parentName:"tr",align:null},"Font family for the tick labels, follows CSS font-family options.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontSize"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"Font size for the tick labels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontStyle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"FontStyle.NORMAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Font style for the tick labels, follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reverse"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Reverses order of tick labels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"z"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under datasets, greater than 0 on top.")))),(0,l.kt)("p",null,"The further customization of ticks, a callback (see the axis documentation) and other 2 ticks objects are provided."),(0,l.kt)("h3",{id:"minor-tick"},"Minor tick"),(0,l.kt)("p",null,"It defines options for the minor tick marks that are generated by the axis. Omitted options are inherited from ticks configuration."),(0,l.kt)("p",null,"To configure the minor tick, you can set values to the instance in the axis options, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"axis.getTicks().getMinor().setFontSize(16);\n")),(0,l.kt)("p",null,"Table with options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null},"#666"),(0,l.kt)("td",{parentName:"tr",align:null},"Font color for tick labels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontFamily"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),(0,l.kt)("td",{parentName:"tr",align:null},"Font family for the tick labels, follows CSS font-family options.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontSize"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"Font size for the tick labels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontStyle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"FontStyle.NORMAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Font style for the tick labels, follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).")))),(0,l.kt)("h3",{id:"major-tick"},"Major tick"),(0,l.kt)("p",null,"It defines options for the major tick marks that are generated by the axis. Omitted options are inherited from ticks configuration."),(0,l.kt)("p",null,"To configure the major tick, you can set values to the instance in the axis options, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"axis.getTicks().getMajor().setFontSize(16);\n")),(0,l.kt)("p",null,"Table with options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null},"#666"),(0,l.kt)("td",{parentName:"tr",align:null},"Font color for tick labels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontFamily"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),(0,l.kt)("td",{parentName:"tr",align:null},"Font family for the tick labels, follows CSS font-family options.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontSize"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"Font size for the tick labels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontStyle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"FontStyle.NORMAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Font style for the tick labels, follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).")))))}c.isMDXComponent=!0}}]);