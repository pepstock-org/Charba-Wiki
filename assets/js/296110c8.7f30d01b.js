"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[7562],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=c(a),k=n,h=d["".concat(s,".").concat(k)]||d[k]||m[k]||i;return a?r.createElement(h,l(l({ref:e},p),{},{components:a})):r.createElement(h,l({ref:e},p))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3919:function(t,e,a){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},4996:function(t,e,a){a.d(e,{C:function(){return i},Z:function(){return l}});var r=a(2263),n=a(3919);function i(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var i=void 0===r?{}:r,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(o)return e+a;var p=a.startsWith(e)?a:e+a.replace(/^\//,"");return c?t+p:p}(i,a,t,e)}}}function l(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},576:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=a(4996),o=["components"],s={id:"CartesianLogarithmicAxes",title:"Cartesian logarithmic",hide_title:!0,sidebar_label:"Logarithmic"},c=void 0,p={unversionedId:"axes/CartesianLogarithmicAxes",id:"version-4.1/axes/CartesianLogarithmicAxes",isDocsHomePage:!1,title:"Cartesian logarithmic",description:"Cartesian Logarithmic Axes",source:"@site/versioned_docs/version-4.1/axes/Logarithmic.md",sourceDirName:"axes",slug:"/axes/CartesianLogarithmicAxes",permalink:"/Charba-Wiki/docs/4.1/axes/CartesianLogarithmicAxes",tags:[],version:"4.1",frontMatter:{id:"CartesianLogarithmicAxes",title:"Cartesian logarithmic",hide_title:!0,sidebar_label:"Logarithmic"},sidebar:"version-4.1/docs",previous:{title:"Linear",permalink:"/Charba-Wiki/docs/4.1/axes/CartesianLinearAxes"},next:{title:"Time",permalink:"/Charba-Wiki/docs/4.1/axes/CartesianTimeAxes"}},m=[{value:"Cartesian Logarithmic Axes",id:"cartesian-logarithmic-axes",children:[]},{value:"Options",id:"options",children:[]},{value:"Ticks",id:"ticks",children:[{value:"Scriptable",id:"scriptable",children:[]},{value:"Callback",id:"callback",children:[]},{value:"NoSelectedDatasetTicksCallback callback",id:"noselecteddatasettickscallback-callback",children:[]}]}],d={toc:m};function k(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cartesian-logarithmic-axes"},"Cartesian Logarithmic Axes"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/CartesianLogarithmicAxis.html"},"logarithmic axis")," is use to chart numerical data. It can be placed on either the x or y axis. As the name suggests, logarithmic interpolation is used to determine where a value lies on the axis."),(0,i.kt)("img",{src:(0,l.Z)("/img/cartesianLogarithmic.png")}),(0,i.kt)("p",null,"Here are some example how to create logarithmic axes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates a logarithmic axis with default scale id "y" and default kind "y" \nCartesianLogarithmicAxis axis1 = new CartesianLogarithmicAxis(chart);\n\n// creates a logarithmic axis with scale id "my-axis" and default kind "y" \nCartesianLogarithmicAxis axis2 = new CartesianLogarithmicAxis(chart, "my-axis");\n\n// creates a logarithmic axis with scale id "my-axis" and default kind "y" \nCartesianLogarithmicAxis axis3 = new CartesianLogarithmicAxis(chart, ScaleId.create("my-axis"));\n\n// creates a logarithmic axis with default scale id "y" and custom kind "y" \nCartesianLogarithmicAxis axis4 = new CartesianLogarithmicAxis(chart, AxisKind.Y);\n\n// creates a logarithmic axis with scale id "my-axis" and custom kind "y" \nCartesianLogarithmicAxis axis5 = new CartesianLogarithmicAxis(chart, "my-axis", AxisKind.Y);\n\n// creates a logarithmic axis with scale id "my-axis" and custom kind "y" \nScaleId myAxis = ScaleId.create("my-axis");\nCartesianLogarithmicAxis axis6 = new CartesianLogarithmicAxis(chart, myAxis, AxisKind.Y);\n\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis1, ...);\n')),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"The cartesian logarithmic axis allows to define a number of properties, used to display the data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a logarithmic axis \nCartesianLogarithmicAxis axis = new CartesianLogarithmicAxis(chart);\n// sets and gets the max value\naxis.setMax(10000);\n\ndouble max = axis.getMax();\n")),(0,i.kt)("p",null,"The following are the attributes that you can set:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"alignToPixels"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Align pixel values to device pixels.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The background color of scale area.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"bounds"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/Bounds.html"},"Bounds")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Determines the scale bounds on axis.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"display"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/Display.html"},"Display")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"Display.TRUE"),", the axis is shown.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"max"),(0,i.kt)("td",{parentName:"tr",align:"left"},"double"),(0,i.kt)("td",{parentName:"tr",align:"left"},"User defined maximum number for the scale, overrides maximum value from data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"min"),(0,i.kt)("td",{parentName:"tr",align:"left"},"double"),(0,i.kt)("td",{parentName:"tr",align:"left"},"User defined minimum number for the scale, overrides minimum value from data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"offset"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", extra space is added to the both edges and the axis is scaled to fit in the chart area.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"position"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/AxisPosition.html"},"AxisPosition")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Position of the axis.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"reverse"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reverses order of tick labels.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"singleStacked"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If you might want to stack positive and negative values together.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"stack"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the stack group. Axes at the same ",(0,i.kt)("inlineCode",{parentName:"td"},"position")," with same ",(0,i.kt)("inlineCode",{parentName:"td"},"stack")," are stacked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"stacked"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If the axis are stacked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"stackWeight"),(0,i.kt)("td",{parentName:"tr",align:"left"},"double"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the weight of the scale in stack group. Used to determine the amount of allocated space for the scale within the group.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"suggestedMax"),(0,i.kt)("td",{parentName:"tr",align:"left"},"double"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Adjustment used when calculating the maximum data value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"suggestedMin"),(0,i.kt)("td",{parentName:"tr",align:"left"},"double"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Adjustment used when calculating the minimum data value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"weight"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The weight used to sort the axis. Higher weights are further away from the chart area.")))),(0,i.kt)("h2",{id:"ticks"},"Ticks"),(0,i.kt)("p",null,"The logarithmic axis provides the following options for configuring ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/CartesianLogarithmicTick.html"},"tick marks"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a logarithmic axis \nCartesianLogarithmicAxis axis = new CartesianLogarithmicAxis(chart);\n// sets and gets the max value\naxis.getTicks().setColor(HtmlColor.RED);\n\nIsColor color = axis.gteTicks().getColor();\n")),(0,i.kt)("img",{src:(0,l.Z)("/img/logarithmicTicks.png")}),(0,i.kt)("p",null,"The following are the attributes that you can set:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"align"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/ElementAlign.html"},"ElementAlign")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The tick alignment along the axis.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"autoSkip"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", automatically calculates how many labels that can be shown and hides labels accordingly. Labels will be rotated up to ",(0,i.kt)("inlineCode",{parentName:"td"},"maxRotation")," before skipping any. Turn ",(0,i.kt)("inlineCode",{parentName:"td"},"autoSkip")," off to show all labels no matter what.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"autoSkipPadding"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The padding between the ticks on the horizontal axis when autoSkip is enabled.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Color of label backdrops.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"backdropPadding"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The padding of tick backdrop.",(0,i.kt)("br",null),"See ",(0,i.kt)("a",{parentName:"td",href:"../configuration/Commons#padding"},"padding documentation")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"color"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Color of ticks.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"crossAlign"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/CrossAlign.html"},"CrossAlign")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The tick alignment perpendicular to the axis.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"display"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the tick marks are shown.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"font"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/options/Font.html"},"Font")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Font of ticks.",(0,i.kt)("br",null),"See ",(0,i.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"includeBounds"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the defined ",(0,i.kt)("inlineCode",{parentName:"td"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"max"),' values should be presented as ticks even if they are not "nice".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"labelOffset"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis).",(0,i.kt)("br",null),(0,i.kt)("br",null),"Note: ",(0,i.kt)("em",{parentName:"td"},"This can cause labels at the edges to be cropped by the edge of the canvas"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"maxRotation"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The maximum rotation for tick labels when rotating to condense labels.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Note: ",(0,i.kt)("em",{parentName:"td"},"Rotation doesn't occur until necessary and only applicable to horizontal scales."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"minRotation"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The minimum rotation for tick labels.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mirror"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The flips tick labels around axis, displaying the labels inside the chart instead of outside.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Note: ",(0,i.kt)("em",{parentName:"td"},"Only applicable to vertical scales."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"numberFormat"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/intl/NumberFormatOptions.html"},"NumberFormatOptions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number format options used by the default label formatter.",(0,i.kt)("br",null),"See ",(0,i.kt)("a",{parentName:"td",href:"../intl/NumberFormat"},"INTL number format")," documentation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The padding between the tick label and the axis.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"sampleSize"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", draw a background behind the tick labels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"textStrokeColor"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The color of the stroke around the text.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Stroke width around the text.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"z"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.")))),(0,i.kt)("p",null,"The further customization of ticks, a ",(0,i.kt)("a",{parentName:"p",href:"#callback"},"callback")," is provided."),(0,i.kt)("h3",{id:"scriptable"},"Scriptable"),(0,i.kt)("p",null,"Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in ",(0,i.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,i.kt)("p",null,"All scriptable options callbacks will get a ",(0,i.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-scriptable-options-context"},"ScaleContext")," instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a logarithmic axis \nCartesianLogarithmicAxis axis = new CartesianLogarithmicAxis(chart);\n// sets the option by a callback \naxis.getTicks().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,i.kt)("p",null,"The following options can be set by a callback:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"color"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"font"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ScaleContext",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"numberFormat"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/NumberFormatCallback.html"},"NumberFormatCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/NumberFormatItem.html"},"NumberFormatItem"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/ShowLabelBackdropCallback.html"},"ShowLabelBackdropCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"textStrokeColor"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int")))),(0,i.kt)("h3",{id:"callback"},"Callback"),(0,i.kt)("p",null,"It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration."),(0,i.kt)("p",null,"To apply a custom callback, you can set a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/TickCallback.html"},"TickCallback")," instance to the axis options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'axis.getTicks().setCallback(new TickCallback(){\n\n   /**\n    * Changes the tick marks to include information about the data type.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param value value of tick\n    * @param index index of tick\n    * @param values list of all tick values\n    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.\n    */\n   public String onCallback(Axis axis, double value, int index, List<Double> values){\n      // add $\n      return "$" + value;\n   }\n         \n});\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"../intl/NumberFormat"},"INTL number format")," documentation if you want to use a number formatter, provided out-of-the-box."),(0,i.kt)("h3",{id:"noselecteddatasettickscallback-callback"},"NoSelectedDatasetTicksCallback callback"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," provides a common implementation for tick callback to set the decimal digits of ticks in case of all data sets are hidden, to avoid the annoying standard format of doubles."),(0,i.kt)("p",null,"To apply the callback, you can set an instance to the axis options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a logarithmic axis \nCartesianLogarithmicAxis axis = new CartesianLogarithmicAxis(chart);\n// sets the option by a callback \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback());\n")),(0,i.kt)("p",null,"The default decimal precision is ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),". A custom precision can be set by the constructor of callback, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a logarithmic axis \nCartesianLogarithmicAxis axis = new CartesianLogarithmicAxis(chart);\n// sets the option by a callback \n// 3 decimal digits \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback(3));\n")))}k.isMDXComponent=!0}}]);