"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[42548],{3905:(t,a,e)=>{e.d(a,{Zo:()=>c,kt:()=>b});var r=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,r,l=function(t,a){if(null==t)return{};var e,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)e=n[r],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)e=n[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var p=r.createContext({}),s=function(t){var a=r.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},c=function(t){var a=s(t.components);return r.createElement(p.Provider,{value:a},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(t,a){var e=t.components,l=t.mdxType,n=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),k=s(e),m=l,b=k["".concat(p,".").concat(m)]||k[m]||d[m]||n;return e?r.createElement(b,i(i({ref:a},c),{},{components:e})):r.createElement(b,i({ref:a},c))}));function b(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var n=e.length,i=new Array(n);i[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o[k]="string"==typeof t?t:l,i[1]=o;for(var s=2;s<n;s++)i[s]=e[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},43017:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=e(87462),l=(e(67294),e(3905)),n=e(44996);const i={id:"RadialAxes",title:"Radial axes",hide_title:!0,sidebar_label:"Radial axes"},o=void 0,p={unversionedId:"axes/RadialAxes",id:"version-5.6/axes/RadialAxes",title:"Radial axes",description:"Radial Axes",source:"@site/versioned_docs/version-5.6/axes/Radial.md",sourceDirName:"axes",slug:"/axes/RadialAxes",permalink:"/Charba-Wiki/docs/5.6/axes/RadialAxes",draft:!1,tags:[],version:"5.6",frontMatter:{id:"RadialAxes",title:"Radial axes",hide_title:!0,sidebar_label:"Radial axes"},sidebar:"docs",previous:{title:"Time series",permalink:"/Charba-Wiki/docs/5.6/axes/CartesianTimeSeriesAxes"},next:{title:"Grid",permalink:"/Charba-Wiki/docs/5.6/axes/Grid"}},s={},c=[{value:"Radial Axes",id:"radial-axes",level:2},{value:"Options",id:"options",level:2},{value:"Scriptable",id:"scriptable",level:3},{value:"Ticks",id:"ticks",level:2},{value:"Ticks scriptable options",id:"ticks-scriptable-options",level:3},{value:"Callback",id:"callback",level:3},{value:"NoSelectedDatasetTicksCallback callback",id:"noselecteddatasettickscallback-callback",level:3}],k={toc:c},d="wrapper";function m(t){let{components:a,...e}=t;return(0,l.kt)(d,(0,r.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"radial-axes"},"Radial Axes"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/configuration/RadialAxis.html"},"Radial axes")," are used specifically for the radar and polar area chart types. These axes overlay the chart area, rather than being positioned on one of the edges. "),(0,l.kt)("p",null,"Radial axes could be only "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"linear"),", is use to chart numerical data. As the name suggests, linear interpolation is used to determine where a value lies in relation the center of the axis.")),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/configuration/RadialAxis.html"},"radial axis")," is use to chart numerical data."),(0,l.kt)("img",{src:(0,n.Z)("/img/radialLinear.png")}),(0,l.kt)("p",null,"Here is an example how to create a radial axis:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a radial axis with default scale id "r" and default kind "r" \nRadialAxis axis = new RadialAxis(chart);\n\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis);\n')),(0,l.kt)("p",null,"The axis has configuration properties for ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/configuration/RadialLinearTick.html"},"ticks"),", ",(0,l.kt)("a",{parentName:"p",href:"AngleLines"},"angle lines")," (line that appear in a radar chart outward from the center), ",(0,l.kt)("a",{parentName:"p",href:"PointLabels"},"point labels")," (labels around the edge in a radar chart):"),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"The radial linear axis allows to define a number of properties, used to display the data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// sets and gets the max value\naxis.setMax(100);\n\ndouble max = axis.getMax();\n")),(0,l.kt)("p",null,"The following are the attributes that you can set:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"alignToPixels"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Align pixel values to device pixels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"animate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", animate scaling the chart from the center.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The background color of scale area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"beginAtZero"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", scale will include 0 if it is not already included.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"display"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/enums/Display.html"},"Display")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"Display.TRUE"),", the axis is shown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"max"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"User defined maximum number for the scale, overrides maximum value from data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"min"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"User defined minimum number for the scale, overrides minimum value from data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Reverses order of tick labels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"startAngle"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Starting angle to draw arcs for the first item in a data set. In degrees, 0 is at top.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"suggestedMax"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Adjustment used when calculating the maximum data value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"suggestedMin"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Adjustment used when calculating the minimum data value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"weight"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The weight used to sort the axis. Higher weights are further away from the chart area.")))),(0,l.kt)("h3",{id:"scriptable"},"Scriptable"),(0,l.kt)("p",null,"Scriptable options at scale level accept a callback which is called for each of the underlying data values. See more details in ",(0,l.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,l.kt)("p",null,"All scriptable options callbacks will get a ",(0,l.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-context"},"ScaleContext")," instance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a category axis \nRadialAxis axis = new RadialAxis(chart);\n// sets the option by a callback \naxis.setBackgroundColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,l.kt)("p",null,"The following options can be set by a callback:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"alignToPixels"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/AlignToPixelsCallback.html"},"AlignToPixelsCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"beginAtZero"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/BeginAtZeroCallback.html"},"BeginAtZeroCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"display"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/DisplayCallback.html"},"DisplayCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/enums/Display.html"},"Display"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"max"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/MinMaxCallback.html"},"MinMaxCallback"),"<","Double",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"min"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/MinMaxCallback.html"},"MinMaxCallback"),"<","Double",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/ReverseCallback.html"},"ReverseCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"startAngle"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/StartAngleCallback.html"},"StartAngleCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"double")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"suggestedMax"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/MinMaxCallback.html"},"MinMaxCallback"),"<","Double",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"suggestedMin"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/MinMaxCallback.html"},"MinMaxCallback"),"<","Double",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"weight"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/ScaleWeightCallback.html"},"ScaleWeightCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"double")))),(0,l.kt)("h2",{id:"ticks"},"Ticks"),(0,l.kt)("p",null,"The radial linear axis provides the following options for configuring ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/configuration/RadialLinearTick.html"},"tick marks"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// sets and gets the max value\naxis.getTicks().setColor(HtmlColor.RED);\n\nIsColor color = axis.gteTicks().getColor();\n")),(0,l.kt)("img",{src:(0,n.Z)("/img/radialTicks.png")}),(0,l.kt)("p",null,"The following are the attributes that you can set:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#ticks-scriptable-options"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Color of label backdrops.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backdropPadding"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The padding of tick backdrop.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"../configuration/Commons#padding"},"padding documentation")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#ticks-scriptable-options"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Color of ticks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"count"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[Yes]","(#ticks-scriptable-options"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of ticks to generate. If specified, this overrides the automatic generation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"display"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the tick marks are shown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#ticks-scriptable-options"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Font of ticks.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"maxTicksLimit"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[Yes]","(#ticks-scriptable-options"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Maximum number of ticks and gridlines to show.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"numberFormat"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/intl/NumberFormatOptions.html"},"NumberFormatOptions")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#ticks-scriptable-options"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number format options used by the default label formatter.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"../intl/NumberFormat"},"INTL number format")," documentation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The padding between the tick label and the axis.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"precision"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[Yes]","(#ticks-scriptable-options"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If defined and ",(0,l.kt)("inlineCode",{parentName:"td"},"stepSize")," is not specified, the step size will be rounded to this many decimal places.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sampleSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#ticks-scriptable-options"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", draw a background behind the tick labels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"stepSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#ticks-scriptable-options"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"User defined fixed step size for the scale.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textStrokeColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#ticks-scriptable-options"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The color of the stroke around the text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#ticks-scriptable-options"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stroke width around the text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"z"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.")))),(0,l.kt)("p",null,"The further customization of ticks, a ",(0,l.kt)("a",{parentName:"p",href:"#callback"},"callback")," is provided."),(0,l.kt)("br",null),"See [padding documentation](../configuration/Commons#padding) for more details.",(0,l.kt)("h3",{id:"ticks-scriptable-options"},"Ticks scriptable options"),(0,l.kt)("p",null,"Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in ",(0,l.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,l.kt)("p",null,"All scriptable options callbacks will get a ",(0,l.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-context"},"ScaleContext")," instance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// sets the option by a callback \naxis.getTicks().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,l.kt)("p",null,"The following options can be set by a callback:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"count"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/CountCallback.html"},"CountCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"maxTicksLimit"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/MaxTicksLimitCallback.html"},"MaxTicksLimitCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"numberFormat"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/NumberFormatCallback.html"},"NumberFormatCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/items/NumberFormatItem.html"},"NumberFormatItem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"precision"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/PrecisionCallback.html"},"PrecisionCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/ShowLabelBackdropCallback.html"},"ShowLabelBackdropCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"stepSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/StepSizeCallback.html"},"StepSizeCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"double")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textStrokeColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int")))),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("p",null,"It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration."),(0,l.kt)("p",null,"To apply a custom callback, you can set a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/TickCallback.html"},"TickCallback")," instance to the axis options, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'axis.getTicks().setCallback(new TickCallback(){\n\n   /**\n    * Changes the tick marks to include information about the data type.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param value value of tick\n    * @param index index of tick\n    * @param values list of all tick values\n    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.\n    */\n   public String onCallback(Axis axis, double value, int index, List<Double> values){\n      // add $\n      return "$" + value;\n   }\n         \n});\n')),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"../intl/NumberFormat"},"INTL number format")," documentation if you want to use a number formatter, provided out-of-the-box."),(0,l.kt)("h3",{id:"noselecteddatasettickscallback-callback"},"NoSelectedDatasetTicksCallback callback"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a common implementation for tick callback to set the decimal digits of ticks in case of all data sets are hidden, to avoid the annoying standard format of doubles."),(0,l.kt)("p",null,"To apply the callback, you can set an instance to the axis options, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// sets the option by a callback \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback());\n")),(0,l.kt)("p",null,"The default decimal precision is ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),". A custom precision can be set by the constructor of callback, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// sets the option by a callback \n// 3 decimal digits \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback(3));\n")))}m.isMDXComponent=!0}}]);