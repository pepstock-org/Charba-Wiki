"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[7018],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=p(a),m=n,h=k["".concat(s,".").concat(m)]||k[m]||c[m]||l;return a?r.createElement(h,i(i({ref:e},d),{},{components:a})):r.createElement(h,i({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},13919:function(t,e,a){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},44996:function(t,e,a){a.d(e,{C:function(){return l},Z:function(){return i}});var r=a(52263),n=a(13919);function l(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var l=void 0===r?{}:r,i=l.forcePrependBaseUrl,o=void 0!==i&&i,s=l.absolute,p=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(o)return e+a;var d=a.startsWith(e)?a:e+a.replace(/^\//,"");return p?t+d:d}(l,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},53960:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=a(44996),o=["components"],s={id:"CartesianLinearAxes",title:"Linear",hide_title:!0,sidebar_label:"Linear"},p=void 0,d={unversionedId:"axes/CartesianLinearAxes",id:"version-4.2/axes/CartesianLinearAxes",isDocsHomePage:!1,title:"Linear",description:"Cartesian Linear Axes",source:"@site/versioned_docs/version-4.2/axes/Linear.md",sourceDirName:"axes",slug:"/axes/CartesianLinearAxes",permalink:"/Charba-Wiki/docs/4.2/axes/CartesianLinearAxes",tags:[],version:"4.2",frontMatter:{id:"CartesianLinearAxes",title:"Linear",hide_title:!0,sidebar_label:"Linear"},sidebar:"version-4.2/docs",previous:{title:"Category",permalink:"/Charba-Wiki/docs/4.2/axes/CartesianCategoryAxes"},next:{title:"Logarithmic",permalink:"/Charba-Wiki/docs/4.2/axes/CartesianLogarithmicAxes"}},c=[{value:"Cartesian Linear Axes",id:"cartesian-linear-axes",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Ticks",id:"ticks",children:[{value:"Scriptable",id:"scriptable",children:[],level:3},{value:"Callback",id:"callback",children:[],level:3},{value:"NoSelectedDatasetTicksCallback callback",id:"noselecteddatasettickscallback-callback",children:[],level:3}],level:2}],k={toc:c};function m(t){var e=t.components,a=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"cartesian-linear-axes"},"Cartesian Linear Axes"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/CartesianLinearAxis.html"},"linear axis")," is use to chart numerical data. It can be placed on either the x or y axis."),(0,l.kt)("img",{src:(0,i.Z)("/img/cartesianLinear.png")}),(0,l.kt)("p",null,"Here are some example how to create linear axes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a linear axis with default scale id "y" and default kind "y" \nCartesianLinearAxis axis1 = new CartesianLinearAxis(chart);\n\n// creates a linear axis with scale id "my-axis" and default kind "y" \nCartesianLinearAxis axis2 = new CartesianLinearAxis(chart, "my-axis");\n\n// creates a linear axis with scale id "my-axis" and default kind "y" \nCartesianLinearAxis axis3 = new CartesianLinearAxis(chart, ScaleId.create("my-axis"));\n\n// creates a linear axis with default scale id "y" and custom kind "y" \nCartesianLinearAxis axis4 = new CartesianLinearAxis(chart, AxisKind.Y);\n\n// creates a linear axis with scale id "my-axis" and custom kind "y" \nCartesianLinearAxis axis5 = new CartesianLinearAxis(chart, "my-axis", AxisKind.Y);\n\n// creates a linear axis with scale id "my-axis" and custom kind "y" \nScaleId myAxis = ScaleId.create("my-axis");\nCartesianLinearAxis axis6 = new CartesianLinearAxis(chart, myAxis, AxisKind.Y);\n\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis1, ...);\n')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"The cartesian linear axis allows to define a number of properties, used to display the data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a linear axis \nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets and gets the max value\naxis.setMax(100);\n\ndouble max = axis.getMax();\n")),(0,l.kt)("p",null,"The following are the attributes that you can set:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"alignToPixels"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Align pixel values to device pixels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The background color of scale area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"beginAtZero"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", scale will include 0 if it is not already included.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"bounds"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/Bounds.html"},"Bounds")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Determines the scale bounds on axis.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"display"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/Display.html"},"Display")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"Display.TRUE"),", the axis is shown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"grace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Amount of pixels for added room in the scale range above and below data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"graceAsPercentage"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Percentage (string ending with ",(0,l.kt)("inlineCode",{parentName:"td"},"%"),") for added room in the scale range above and below data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"max"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},"User defined maximum number for the scale, overrides maximum value from data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"min"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},"User defined minimum number for the scale, overrides minimum value from data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"offset"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", extra space is added to the both edges and the axis is scaled to fit in the chart area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"position"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/AxisPosition.html"},"AxisPosition")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Position of the axis.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Reverses order of tick labels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"singleStacked"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If you might want to stack positive and negative values together.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"stack"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sets the stack group. Axes at the same ",(0,l.kt)("inlineCode",{parentName:"td"},"position")," with same ",(0,l.kt)("inlineCode",{parentName:"td"},"stack")," are stacked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"stacked"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If the axis are stacked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"stackWeight"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sets the weight of the scale in stack group. Used to determine the amount of allocated space for the scale within the group.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"suggestedMax"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Adjustment used when calculating the maximum data value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"suggestedMin"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Adjustment used when calculating the minimum data value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"weight"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The weight used to sort the axis. Higher weights are further away from the chart area.")))),(0,l.kt)("h2",{id:"ticks"},"Ticks"),(0,l.kt)("p",null,"The linear axis provides the following options for configuring ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/CartesianLinearTick.html"},"tick marks"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a linear axis \nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets and gets the max value\naxis.getTicks().setColor(HtmlColor.RED);\n\nIsColor color = axis.gteTicks().getColor();\n")),(0,l.kt)("img",{src:(0,i.Z)("/img/linearTicks.png")}),(0,l.kt)("p",null,"The following are the attributes that you can set:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"align"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/ElementAlign.html"},"ElementAlign")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The tick alignment along the axis.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"autoSkip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", automatically calculates how many labels that can be shown and hides labels accordingly. Labels will be rotated up to ",(0,l.kt)("inlineCode",{parentName:"td"},"maxRotation")," before skipping any. Turn ",(0,l.kt)("inlineCode",{parentName:"td"},"autoSkip")," off to show all labels no matter what.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"autoSkipPadding"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The padding between the ticks on the horizontal axis when autoSkip is enabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Color of label backdrops.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backdropPadding"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The padding of tick backdrop.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"../configuration/Commons#padding"},"padding documentation")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Color of ticks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"count"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of ticks to generate. If specified, this overrides the automatic generation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"crossAlign"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/CrossAlign.html"},"CrossAlign")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The tick alignment perpendicular to the axis.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"display"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the tick marks are shown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Font of ticks.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"includeBounds"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the defined ",(0,l.kt)("inlineCode",{parentName:"td"},"min")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"max"),' values should be presented as ticks even if they are not "nice".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"labelOffset"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis).",(0,l.kt)("br",null),(0,l.kt)("br",null),"Note: ",(0,l.kt)("em",{parentName:"td"},"This can cause labels at the edges to be cropped by the edge of the canvas"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"maxRotation"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The maximum rotation for tick labels when rotating to condense labels.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Note: ",(0,l.kt)("em",{parentName:"td"},"Rotation doesn't occur until necessary and only applicable to horizontal scales."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"maxTicksLimit"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Maximum number of ticks and gridlines to show.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"minRotation"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The minimum rotation for tick labels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mirror"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The flips tick labels around axis, displaying the labels inside the chart instead of outside.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Note: ",(0,l.kt)("em",{parentName:"td"},"Only applicable to vertical scales."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"numberFormat"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/NumberFormatOptions.html"},"NumberFormatOptions")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number format options used by the default label formatter.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"../intl/NumberFormat"},"INTL number format")," documentation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The padding between the tick label and the axis.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"precision"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If defined and ",(0,l.kt)("inlineCode",{parentName:"td"},"stepSize")," is not specified, the step size will be rounded to this many decimal places.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sampleSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", draw a background behind the tick labels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"stepSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"User defined fixed step size for the scale.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textStrokeColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The color of the stroke around the text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stroke width around the text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"z"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.")))),(0,l.kt)("p",null,"Given the number of axis range settings, it is important to understand how they all interact with each other."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"suggestedMax")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"suggestedMin")," settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behavior."),(0,l.kt)("p",null,"In contrast to the ",(0,l.kt)("inlineCode",{parentName:"p"},"suggested*")," settings, the ",(0,l.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," settings set explicit ends to the axes. When these are set, some data points may not be visible."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"stepSize")," set, the scale ticks will be enumerated by multiple of ",(0,l.kt)("inlineCode",{parentName:"p"},"stepSize"),", having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm."),(0,l.kt)("p",null,"The further customization of ticks, a ",(0,l.kt)("a",{parentName:"p",href:"#callback"},"callback")," is provided."),(0,l.kt)("h3",{id:"scriptable"},"Scriptable"),(0,l.kt)("p",null,"Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in ",(0,l.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,l.kt)("p",null,"All scriptable options callbacks will get a ",(0,l.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-scriptable-options-context"},"ScaleContext")," instance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the axis for chart\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets the option by a callback \naxis.getTicks().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,l.kt)("p",null,"The following options can be set by a callback:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"count"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/CountCallback.html"},"CountCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"maxTicksLimit"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/MaxTicksLimitCallback.html"},"MaxTicksLimitCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"numberFormat"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/NumberFormatCallback.html"},"NumberFormatCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/NumberFormatItem.html"},"NumberFormatItem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"precision"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/PrecisionCallback.html"},"PrecisionCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ShowLabelBackdropCallback.html"},"ShowLabelBackdropCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"stepSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/StepSizeCallback.html"},"StepSizeCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"double")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textStrokeColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int")))),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("p",null,"It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration."),(0,l.kt)("p",null,"To apply a custom callback, you can set a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/TickCallback.html"},"TickCallback")," instance to the axis options, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates the axis for chart\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets the option by a callback \naxis.getTicks().setCallback(new TickCallback(){\n\n   /**\n    * Changes the tick marks to include information about the data type.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param value value of tick\n    * @param index index of tick\n    * @param values list of all tick values\n    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.\n    */\n   public String onCallback(Axis axis, double value, int index, List<Double> values){\n      // add $\n      return "$" + value;\n   }\n         \n});\n')),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"../intl/NumberFormat"},"INTL number format")," documentation if you want to use a number formatter, provided out-of-the-box."),(0,l.kt)("h3",{id:"noselecteddatasettickscallback-callback"},"NoSelectedDatasetTicksCallback callback"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a common implementation for tick callback to set the decimal digits of ticks in case of all data sets are hidden, to avoid the annoying standard format of doubles."),(0,l.kt)("p",null,"To apply the callback, you can set an instance to the axis options, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the axis for chart\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets the option by a callback \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback());\n")),(0,l.kt)("p",null,"The default decimal precision is ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),". A custom precision can be set by the constructor of callback, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the axis for chart\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets the option by a callback \n// 3 decimal digits \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback(3));\n")))}m.isMDXComponent=!0}}]);