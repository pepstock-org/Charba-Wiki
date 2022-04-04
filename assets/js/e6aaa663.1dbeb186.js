"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[95967],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,c=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90272:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"CartesianAxes",title:"Cartesian axes",hide_title:!0,sidebar_label:"Introduction"},s=void 0,p={unversionedId:"CartesianAxes",id:"version-3.3/CartesianAxes",title:"Cartesian axes",description:"Introduction",source:"@site/versioned_docs/version-3.3/CartesianAxes.md",sourceDirName:".",slug:"/CartesianAxes",permalink:"/Charba-Wiki/docs/3.3/CartesianAxes",tags:[],version:"3.3",frontMatter:{id:"CartesianAxes",title:"Cartesian axes",hide_title:!0,sidebar_label:"Introduction"},sidebar:"version-3.3/docs",previous:{title:"Introduction",permalink:"/Charba-Wiki/docs/3.3/Axes"},next:{title:"Cartesian linear",permalink:"/Charba-Wiki/docs/3.3/CartesianLinearAxes"}},d={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Options",id:"options",level:2},{value:"Axis ID",id:"axis-id",level:2},{value:"Tick",id:"tick",level:2},{value:"ScaleLabel",id:"scalelabel",level:2},{value:"Padding",id:"padding",level:3}],u={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart.\nIn a cartesian chart, there is 1 or more X axes and 1 or more Y axes to map points onto the 2 dimensional canvas. These axes are know as 'cartesian axes'."),(0,l.kt)("p",null,"Axes that follow a cartesian grid are known as 'Cartesian Axes'. Cartesian axes are used for line, bar, and bubble charts. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"CartesianLinearAxes"},"linear"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"CartesianLogarithmicAxes"},"logarithmic"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"CartesianCategoryAxes"},"category"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"CartesianTimeAxes"},"time")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"All of the included cartesian axes support a number of common options."),(0,l.kt)("p",null,"Table with options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID is used to link datasets and scale axes together.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," in the bar chart by default.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/Position.html"},"Position")),(0,l.kt)("td",{parentName:"tr",align:null},"Position.TOP"),(0,l.kt)("td",{parentName:"tr",align:null},"Position of the axis in the chart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stacked"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"if the axis are stacked or not.")))),(0,l.kt)("h2",{id:"axis-id"},"Axis ID"),(0,l.kt)("p",null,"The properties ",(0,l.kt)("inlineCode",{parentName:"p"},"xAxisID")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"yAxisID"),", at dataset level, have to match the scale properties, by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"setId")," method. This is especially needed if multi-axes charts are used:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'CartesianLinearAxis axis1 = new CartesianLinearAxis(chart);\naxis1.setId("y-axis-1");\naxis1.setPosition(Position.LEFT);\naxis1.setDisplay(true);\n\nCartesianLinearAxis axis2 = new CartesianLinearAxis(chart);\naxis2.setId("y-axis-2");\naxis2.setPosition(Position.RIGHT);\naxis2.setDisplay(true);\naxis2.getGrideLines().setDrawOnChartArea(false);\n\nchart.getOptions().getScales().setYAxes(axis1, axis2);\n\nLineDataset dataset1 = chart.newDataset();\ndataset1.setLabel("dataset 1");\ndataset1.setYAxisID("y-axis-1");\n\nLineDataset dataset2 = chart.newDataset();\ndataset2.setLabel("dataset 2");\ndataset2.setYAxisID("y-axis-2");\n\nchart.getData().setDatasets(dataset1, dataset2);\n')),(0,l.kt)("p",null,"All cartesian axes could be created specifying the type (horizontal or vertical) at constructor level. See ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/CartesianAxisType.html"},"CartesianAxisType")," object which enumerates all possible values. "),(0,l.kt)("p",null,"CartesianAxisType contains:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"x")," to set the axes as horizontal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"y")," to set the axes as vertical")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CartesianLinearAxis axis1 = new CartesianLinearAxis(chart, CartesianAxisType.y);\n")),(0,l.kt)("p",null,"Every cartesian axis has got own default type, as following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Orientation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linear"),(0,l.kt)("td",{parentName:"tr",align:null},"CartesianAxisType.y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logarithmic"),(0,l.kt)("td",{parentName:"tr",align:null},"CartesianAxisType.y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"category"),(0,l.kt)("td",{parentName:"tr",align:null},"CartesianAxisType.x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"CartesianAxisType.x")))),(0,l.kt)("h2",{id:"tick"},"Tick"),(0,l.kt)("p",null,"The following options are common to all cartesian axes but do not apply to other axes."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"Axes#ticks"},"here")," how manage ticks configuration."),(0,l.kt)("p",null,"Table with options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoSkip"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", automatically calculates how many labels that can be shown and hides labels accordingly. Turn it off to show all labels no matter what")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoSkipPadding"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Padding between the ticks on the horizontal axis when ",(0,l.kt)("inlineCode",{parentName:"td"},"autoSkip")," is enabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelOffset"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Distance in pixels to offset the label from the centre point of the tick (in the y direction for the x axis, and the x direction for the y axis).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxRotation"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"90"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. ",(0,l.kt)("em",{parentName:"td"},"Note: Only applicable to horizontal scales."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minRotation"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum rotation for tick labels. ",(0,l.kt)("em",{parentName:"td"},"Note: Only applicable to horizontal scales."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mirror"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Flips tick labels around axis, displaying the labels inside the chart instead of outside. ",(0,l.kt)("em",{parentName:"td"},"Note: Only applicable to vertical scales."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"padding"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"precision"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"If defined and stepSize is not specified, the step size will be rounded to this many decimal places.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sampleSize"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer.MIN_VALUE"),(0,l.kt)("td",{parentName:"tr",align:null},"the number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")))),(0,l.kt)("h2",{id:"scalelabel"},"ScaleLabel"),(0,l.kt)("p",null,"When creating a chart, you want to tell the viewer what data they are viewing. To do this, you need to label the axis."),(0,l.kt)("p",null,"Cartesian axis defines ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianScaleLabel.html"},"options")," for the scale title. Note that this only applies to cartesian axes. "),(0,l.kt)("p",null,"All cartesian axes are providing the capability to set and get the options, by the ",(0,l.kt)("strong",{parentName:"p"},"set")," and ",(0,l.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CartesianLinearAxis axis = new CartesianLinearAxis(chart);\naxis.getScaleLabel().setFontSize(16);\naxis.getScaleLabel().getFontSize();\n")),(0,l.kt)("p",null,"Table with options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"display"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", display the axis title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelString"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'""')),(0,l.kt)("td",{parentName:"tr",align:null},"The text for the title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lineHeight"),(0,l.kt)("td",{parentName:"tr",align:null},"double - String"),(0,l.kt)("td",{parentName:"tr",align:null},"1.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Height of an individual line of text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null},"#666"),(0,l.kt)("td",{parentName:"tr",align:null},"Font color for scale title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontFamily"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),(0,l.kt)("td",{parentName:"tr",align:null},"Font family for the scale title, follows CSS font-family options.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontSize"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"Font size for scale title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontStyle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"FontStyle.NORMAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Font style for the scale title, follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).")))),(0,l.kt)("h3",{id:"padding"},"Padding"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianPadding.html"},"Padding")," to apply around scale labels. Only ",(0,l.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"bottom")," are implemented."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CartesianLinearAxis axis = new CartesianLinearAxis(chart);\naxis.getScaleLabel().getPadding().setTop(10);\n")),(0,l.kt)("p",null,"The following are the attributes that you can set:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"the padding bottom in pixel.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"left"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"the padding left in pixel.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"right"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"the padding right in pixel.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"top"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"the padding top in pixel.")))))}k.isMDXComponent=!0}}]);