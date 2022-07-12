"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[65984],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||k[m]||l;return a?r.createElement(h,i(i({ref:e},d),{},{components:a})):r.createElement(h,i({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60442:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),l=a(44996);const i={id:"CartesianLinearAxes",title:"Linear",hide_title:!0,sidebar_label:"Linear"},o=void 0,s={unversionedId:"axes/CartesianLinearAxes",id:"version-4.1/axes/CartesianLinearAxes",title:"Linear",description:"",source:"@site/versioned_docs/version-4.1/axes/Linear.md",sourceDirName:"axes",slug:"/axes/CartesianLinearAxes",permalink:"/Charba-Wiki/docs/4.1/axes/CartesianLinearAxes",draft:!1,tags:[],version:"4.1",frontMatter:{id:"CartesianLinearAxes",title:"Linear",hide_title:!0,sidebar_label:"Linear"},sidebar:"version-4.1/docs",previous:{title:"Category",permalink:"/Charba-Wiki/docs/4.1/axes/CartesianCategoryAxes"},next:{title:"Logarithmic",permalink:"/Charba-Wiki/docs/4.1/axes/CartesianLogarithmicAxes"}},p={},d=[{value:"Cartesian Linear Axes",id:"cartesian-linear-axes",level:2},{value:"Options",id:"options",level:2},{value:"Ticks",id:"ticks",level:2},{value:"Scriptable",id:"scriptable",level:3},{value:"Callback",id:"callback",level:3},{value:"NoSelectedDatasetTicksCallback callback",id:"noselecteddatasettickscallback-callback",level:3}],k={toc:d};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"cartesian-linear-axes"},"Cartesian Linear Axes"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/CartesianLinearAxis.html"},"linear axis")," is use to chart numerical data. It can be placed on either the x or y axis."),(0,n.kt)("img",{src:(0,l.Z)("/img/cartesianLinear.png")}),(0,n.kt)("p",null,"Here are some example how to create linear axes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// creates a linear axis with default scale id "y" and default kind "y" \nCartesianLinearAxis axis1 = new CartesianLinearAxis(chart);\n\n// creates a linear axis with scale id "my-axis" and default kind "y" \nCartesianLinearAxis axis2 = new CartesianLinearAxis(chart, "my-axis");\n\n// creates a linear axis with scale id "my-axis" and default kind "y" \nCartesianLinearAxis axis3 = new CartesianLinearAxis(chart, ScaleId.create("my-axis"));\n\n// creates a linear axis with default scale id "y" and custom kind "y" \nCartesianLinearAxis axis4 = new CartesianLinearAxis(chart, AxisKind.Y);\n\n// creates a linear axis with scale id "my-axis" and custom kind "y" \nCartesianLinearAxis axis5 = new CartesianLinearAxis(chart, "my-axis", AxisKind.Y);\n\n// creates a linear axis with scale id "my-axis" and custom kind "y" \nScaleId myAxis = ScaleId.create("my-axis");\nCartesianLinearAxis axis6 = new CartesianLinearAxis(chart, myAxis, AxisKind.Y);\n\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis1, ...);\n')),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,"The cartesian linear axis allows to define a number of properties, used to display the data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a linear axis \nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets and gets the max value\naxis.setMax(100);\n\ndouble max = axis.getMax();\n")),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"alignToPixels"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Align pixel values to device pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The background color of scale area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"beginAtZero"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", scale will include 0 if it is not already included.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bounds"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/Bounds.html"},"Bounds")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Determines the scale bounds on axis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"display"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/Display.html"},"Display")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"Display.TRUE"),", the axis is shown.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"grace"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Amount of pixels for added room in the scale range above and below data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"graceAsPercentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage (string ending with ",(0,n.kt)("inlineCode",{parentName:"td"},"%"),") for added room in the scale range above and below data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double"),(0,n.kt)("td",{parentName:"tr",align:"left"},"User defined maximum number for the scale, overrides maximum value from data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"min"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double"),(0,n.kt)("td",{parentName:"tr",align:"left"},"User defined minimum number for the scale, overrides minimum value from data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offset"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", extra space is added to the both edges and the axis is scaled to fit in the chart area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"position"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/AxisPosition.html"},"AxisPosition")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Position of the axis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Reverses order of tick labels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"singleStacked"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If you might want to stack positive and negative values together.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stack"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets the stack group. Axes at the same ",(0,n.kt)("inlineCode",{parentName:"td"},"position")," with same ",(0,n.kt)("inlineCode",{parentName:"td"},"stack")," are stacked.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stacked"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If the axis are stacked.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stackWeight"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets the weight of the scale in stack group. Used to determine the amount of allocated space for the scale within the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"suggestedMax"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adjustment used when calculating the maximum data value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"suggestedMin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adjustment used when calculating the minimum data value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"weight"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The weight used to sort the axis. Higher weights are further away from the chart area.")))),(0,n.kt)("h2",{id:"ticks"},"Ticks"),(0,n.kt)("p",null,"The linear axis provides the following options for configuring ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/CartesianLinearTick.html"},"tick marks"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a linear axis \nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets and gets the max value\naxis.getTicks().setColor(HtmlColor.RED);\n\nIsColor color = axis.gteTicks().getColor();\n")),(0,n.kt)("img",{src:(0,l.Z)("/img/linearTicks.png")}),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"align"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/ElementAlign.html"},"ElementAlign")),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The tick alignment along the axis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"autoSkip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", automatically calculates how many labels that can be shown and hides labels accordingly. Labels will be rotated up to ",(0,n.kt)("inlineCode",{parentName:"td"},"maxRotation")," before skipping any. Turn ",(0,n.kt)("inlineCode",{parentName:"td"},"autoSkip")," off to show all labels no matter what.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"autoSkipPadding"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The padding between the ticks on the horizontal axis when autoSkip is enabled.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Color of label backdrops.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backdropPadding"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The padding of tick backdrop.",(0,n.kt)("br",null),"See ",(0,n.kt)("a",{parentName:"td",href:"../configuration/Commons#padding"},"padding documentation")," for more details.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"color"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Color of ticks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of ticks to generate. If specified, this overrides the automatic generation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"crossAlign"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/CrossAlign.html"},"CrossAlign")),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The tick alignment perpendicular to the axis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"display"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", the tick marks are shown.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"font"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/options/Font.html"},"Font")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Font of ticks.",(0,n.kt)("br",null),"See ",(0,n.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"includeBounds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", the defined ",(0,n.kt)("inlineCode",{parentName:"td"},"min")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"max"),' values should be presented as ticks even if they are not "nice".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"labelOffset"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis).",(0,n.kt)("br",null),(0,n.kt)("br",null),"Note: ",(0,n.kt)("em",{parentName:"td"},"This can cause labels at the edges to be cropped by the edge of the canvas"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"maxRotation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum rotation for tick labels when rotating to condense labels.",(0,n.kt)("br",null),(0,n.kt)("br",null),"Note: ",(0,n.kt)("em",{parentName:"td"},"Rotation doesn't occur until necessary and only applicable to horizontal scales."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"maxTicksLimit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Maximum number of ticks and gridlines to show.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"minRotation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The minimum rotation for tick labels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mirror"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The flips tick labels around axis, displaying the labels inside the chart instead of outside.",(0,n.kt)("br",null),(0,n.kt)("br",null),"Note: ",(0,n.kt)("em",{parentName:"td"},"Only applicable to vertical scales."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"numberFormat"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/intl/NumberFormatOptions.html"},"NumberFormatOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number format options used by the default label formatter.",(0,n.kt)("br",null),"See ",(0,n.kt)("a",{parentName:"td",href:"../intl/NumberFormat"},"INTL number format")," documentation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The padding between the tick label and the axis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"precision"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If defined and ",(0,n.kt)("inlineCode",{parentName:"td"},"stepSize")," is not specified, the step size will be rounded to this many decimal places.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sampleSize"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", draw a background behind the tick labels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stepSize"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"User defined fixed step size for the scale.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"textStrokeColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The color of the stroke around the text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Stroke width around the text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"z"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.")))),(0,n.kt)("p",null,"Given the number of axis range settings, it is important to understand how they all interact with each other."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"suggestedMax")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"suggestedMin")," settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behavior."),(0,n.kt)("p",null,"In contrast to the ",(0,n.kt)("inlineCode",{parentName:"p"},"suggested*")," settings, the ",(0,n.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"max")," settings set explicit ends to the axes. When these are set, some data points may not be visible."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"stepSize")," set, the scale ticks will be enumerated by multiple of ",(0,n.kt)("inlineCode",{parentName:"p"},"stepSize"),", having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm."),(0,n.kt)("p",null,"The further customization of ticks, a ",(0,n.kt)("a",{parentName:"p",href:"#callback"},"callback")," is provided."),(0,n.kt)("h3",{id:"scriptable"},"Scriptable"),(0,n.kt)("p",null,"Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in ",(0,n.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,n.kt)("p",null,"All scriptable options callbacks will get a ",(0,n.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-scriptable-options-context"},"ScaleContext")," instance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the axis for chart\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets the option by a callback \naxis.getTicks().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,n.kt)("p",null,"The following options can be set by a callback:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"color"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"count"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/CountCallback.html"},"CountCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"font"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ScaleContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"maxTicksLimit"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/MaxTicksLimitCallback.html"},"MaxTicksLimitCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"numberFormat"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/NumberFormatCallback.html"},"NumberFormatCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/NumberFormatItem.html"},"NumberFormatItem"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"precision"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/PrecisionCallback.html"},"PrecisionCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/ShowLabelBackdropCallback.html"},"ShowLabelBackdropCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stepSize"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/StepSizeCallback.html"},"StepSizeCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"double")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"textStrokeColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int")))),(0,n.kt)("h3",{id:"callback"},"Callback"),(0,n.kt)("p",null,"It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration."),(0,n.kt)("p",null,"To apply a custom callback, you can set a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/TickCallback.html"},"TickCallback")," instance to the axis options, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// creates the axis for chart\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets the option by a callback \naxis.getTicks().setCallback(new TickCallback(){\n\n   /**\n    * Changes the tick marks to include information about the data type.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param value value of tick\n    * @param index index of tick\n    * @param values list of all tick values\n    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.\n    */\n   public String onCallback(Axis axis, double value, int index, List<Double> values){\n      // add $\n      return "$" + value;\n   }\n         \n});\n')),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"../intl/NumberFormat"},"INTL number format")," documentation if you want to use a number formatter, provided out-of-the-box."),(0,n.kt)("h3",{id:"noselecteddatasettickscallback-callback"},"NoSelectedDatasetTicksCallback callback"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," provides a common implementation for tick callback to set the decimal digits of ticks in case of all data sets are hidden, to avoid the annoying standard format of doubles."),(0,n.kt)("p",null,"To apply the callback, you can set an instance to the axis options, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the axis for chart\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets the option by a callback \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback());\n")),(0,n.kt)("p",null,"The default decimal precision is ",(0,n.kt)("inlineCode",{parentName:"p"},"2"),". A custom precision can be set by the constructor of callback, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the axis for chart\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets the option by a callback \n// 3 decimal digits \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback(3));\n")))}c.isMDXComponent=!0}}]);