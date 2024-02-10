"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[48792],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>y});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),g=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=g(a),c=n,y=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?r.createElement(y,l(l({ref:t},p),{},{components:a})):r.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var g=2;g<i;g++)l[g]=a[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},53708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(45072),n=(a(11504),a(95788)),i=a(70964);const l={id:"CartesianTimeSeriesAxes",title:"Cartesian time series",hide_title:!0,sidebar_label:"Time series"},o=void 0,s={unversionedId:"axes/CartesianTimeSeriesAxes",id:"version-4.2/axes/CartesianTimeSeriesAxes",title:"Cartesian time series",description:"Cartesian Time Series Axes",source:"@site/versioned_docs/version-4.2/axes/TimeSeries.md",sourceDirName:"axes",slug:"/axes/CartesianTimeSeriesAxes",permalink:"/Charba-Wiki/docs/4.2/axes/CartesianTimeSeriesAxes",draft:!1,tags:[],version:"4.2",frontMatter:{id:"CartesianTimeSeriesAxes",title:"Cartesian time series",hide_title:!0,sidebar_label:"Time series"},sidebar:"version-4.2/docs",previous:{title:"Time",permalink:"/Charba-Wiki/docs/4.2/axes/CartesianTimeAxes"},next:{title:"Radial axes",permalink:"/Charba-Wiki/docs/4.2/axes/RadialAxes"}},g={},p=[{value:"Cartesian Time Series Axes",id:"cartesian-time-series-axes",level:2},{value:"Datasets",id:"datasets",level:2},{value:"Options",id:"options",level:2},{value:"Time",id:"time",level:2},{value:"Adapters",id:"adapters",level:2},{value:"Ticks",id:"ticks",level:2},{value:"Scriptable",id:"scriptable",level:3},{value:"Callback",id:"callback",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.c)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"cartesian-time-series-axes"},"Cartesian Time Series Axes"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/CartesianTimeSeriesAxis.html"},"time series axis")," is used to display times and dates. When building its ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/CartesianTimeTick.html"},"ticks"),", it will automatically calculate the most comfortable unit base on the size of the scale."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The time series axis extends from the time axis and supports all the same options. However, for the time series scale, each data point is spread equidistant.")),(0,n.yg)("img",{src:(0,i.c)("/img/cartesianTime.png")}),(0,n.yg)("p",null,"Here are some example how to create category axes:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates a time series axis with default scale id "x" and default kind "x" \nCartesianTimeSeriesAxis axis1 = new CartesianTimeSeriesAxis(chart);\n\n// creates a time series axis with scale id "my-axis" and default kind "x" \nCartesianTimeSeriesAxis axis2 = new CartesianTimeSeriesAxis(chart, "my-axis");\n\n// creates a time series axis with scale id "my-axis" and default kind "x" \nCartesianTimeSeriesAxis axis3 = new CartesianTimeSeriesAxis(chart, ScaleId.create("my-axis"));\n\n// creates a time series axis with default scale id "x" and custom kind "x" \nCartesianTimeSeriesAxis axis4 = new CartesianTimeSeriesAxis(chart, AxisKind.X);\n\n// creates a time series axis with scale id "my-axis" and custom kind "x" \nCartesianTimeSeriesAxis axis5 = new CartesianTimeSeriesAxis(chart, "my-axis", AxisKind.X;\n\n// creates a time series axis with scale id "my-axis" and custom kind "x" \nScaleId myAxis = ScaleId.create("my-axis");\nCartesianTimeSeriesAxis axis6 = new CartesianTimeSeriesAxis(chart, myAxis, AxisKind.X);\n\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis1, ...);\n')),(0,n.yg)("h2",{id:"datasets"},"Datasets"),(0,n.yg)("p",null,"To use time series axis, you must use ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/data/DataPoint.html"},"DataPoint")," in order to set the date object in the axis. "),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"x")," axis data points can be specified via the ",(0,n.yg)("strong",{parentName:"p"},"setX")," method when using the time axis."),(0,n.yg)("p",null,"Here is the example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a dataset\nBarDataset dataset = chart.newDataset();\n// creates a datapoint      \nDataPoint dp1 = new DataPoint();\ndp1.setY(number_value1);\ndp1.setX(new Date(time1));\n// creates a datapoint\nDataPoint dp2 = new DataPoint();\ndp2.setY(number_value1);\ndp2.setX(new Date(time2));\n// sets the datapoints to the dataset\ndataset.setDataPoints(dp1, dp2);\n// sets the datasets to the chart\nchart.getData().setDatasets(dataset);\n")),(0,n.yg)("h2",{id:"options"},"Options"),(0,n.yg)("p",null,"The following options are provided by the time series axis."),(0,n.yg)("p",null,"The time series axes are providing the capability to set and get the options, by the ",(0,n.yg)("strong",{parentName:"p"},"set")," and ",(0,n.yg)("strong",{parentName:"p"},"get")," methods, as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a time series axis \nCartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);\n// sets and gets the reverse value\naxis.setReverse(true);\n\nboolean reverse = axis.isReverse();\n")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"alignToPixels"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Align pixel values to device pixels.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The background color of scale area.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"bounds"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/Bounds.html"},"Bounds")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Determines the scale bounds on time axis.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"display"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/Display.html"},"Display")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"Display.TRUE"),", the axis is shown.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"max"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Date.html"},"Date")),(0,n.yg)("td",{parentName:"tr",align:"left"},"User defined maximum date for the scale, overrides maximum value from data.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"min"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Date.html"},"Date")),(0,n.yg)("td",{parentName:"tr",align:"left"},"User defined minimum date for the scale, overrides minimum value from data")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"offset"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", extra space is added to the both edges and the axis is scaled to fit in the chart area.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"position"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/AxisPosition.html"},"AxisPosition")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Position of the axis.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"reverse"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Reverses order of tick labels.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"singleStacked"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If you might want to stack positive and negative values together.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"stack"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Sets the stack group. Axes at the same ",(0,n.yg)("inlineCode",{parentName:"td"},"position")," with same ",(0,n.yg)("inlineCode",{parentName:"td"},"stack")," are stacked.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"stacked"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If the axis are stacked.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"stackWeight"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Sets the weight of the scale in stack group. Used to determine the amount of allocated space for the scale within the group.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"weight"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The weight used to sort the axis. Higher weights are further away from the chart area.")))),(0,n.yg)("h2",{id:"time"},"Time"),(0,n.yg)("p",null,"The time series axis provides a ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/Time.html"},"Time")," object to configure how times must be managed on axis. It provides the ",(0,n.yg)("strong",{parentName:"p"},"set")," and ",(0,n.yg)("strong",{parentName:"p"},"get")," methods as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a time series axis \nCartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);\n// sets and gets the unit value\naxis.getTime().setUnit(TimeUnit.DAY);\n// sets and gets the tooltip format value\naxis.getTime().setTooltipFormat(TimeUnit.day.getDefaultFormat());\n\nTimeUnit unit = axis.getTime().getUnit();\n")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"isoWeekday"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/IsoWeekDay.html"},"IsoWeekDay")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The first day of the week.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"minUnit"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/TimeUnit.html"},"TimeUnit")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The minimum display format to be used for a time unit.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"parser"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"round"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/TimeUnit.html"},"TimeUnit")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If defined, dates will be rounded to the start of this unit.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"stepSize"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of units between grid lines.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"tooltipFormat"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Format string to use for the tooltip.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"unit"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/TimeUnit.html"},"TimeUnit")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If defined, will force the unit to be a certain type.")))),(0,n.yg)("p",null,"The following time measurements are supported and are mapped in the ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/TimeUnit.html"},"TimeUnit")," enumeration, to force a certain unit:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"millisecond"),(0,n.yg)("li",{parentName:"ul"},"second"),(0,n.yg)("li",{parentName:"ul"},"minute"),(0,n.yg)("li",{parentName:"ul"},"hour"),(0,n.yg)("li",{parentName:"ul"},"day"),(0,n.yg)("li",{parentName:"ul"},"week"),(0,n.yg)("li",{parentName:"ul"},"month"),(0,n.yg)("li",{parentName:"ul"},"quarter"),(0,n.yg)("li",{parentName:"ul"},"year")),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/Time.html"},"Time")," object is also providing another object to set the display formats, based on ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/TimeUnit.html"},"TimeUnit"),". "),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/DisplayFormats.html"},"DisplayFormats")," can be used as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates a time series axis \nCartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);\n// sets and gets the unit value\naxis.getTime().setUnit(TimeUnit.DAY);\n// sets display format for the unit\naxis.getTime().getDisplayFormats().setDisplayFormat(TimeUnit.DAY, "MMM D h:mm a");\n')),(0,n.yg)("p",null,"This method can override the defaults. To see the defaults, see the ",(0,n.yg)("a",{parentName:"p",href:"../DateAdapters"},"LUXON date adapter"),"."),(0,n.yg)("h2",{id:"adapters"},"Adapters"),(0,n.yg)("p",null,"The adapters options are used to configure the adapter for ",(0,n.yg)("a",{parentName:"p",href:"../DateAdapters"},"LUXON date library"),"."),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/Adapters.html"},"adapters options")," configuration is nested in the scale configuration as following: "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a time series axis \nCartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);\n// sets and gets the locale to date adapter options\naxis.getAdapters().getDate().setLocale(CLocale.US);\n\nCLocale locale = axis.getAdapters().getDate().getLocale();\n")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"locale"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/CLocale.html"},"CLocale")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Using locale specifying the language to use generating or interpreting strings.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"zone"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/enums/TimeZone.html"},"TimeZone")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Implementation recognizes the time zone names of the IANA time zone database.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"outputCalendar"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/enums/Calendar.html"},"Calendar")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The calendar type to use.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"numberingSystem"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/intl/enums/NumberingSystem.html"},"NumberingSystem")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The numbering system to use.")))),(0,n.yg)("p",null,"For more details, have a look how to configure a ",(0,n.yg)("a",{parentName:"p",href:"../DateAdapters"},"Luxon")," date adapters."),(0,n.yg)("h2",{id:"ticks"},"Ticks"),(0,n.yg)("p",null,"The time series axis provides the following options for configuring ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/CartesianTimeTick.html"},"tick marks"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a time series axis \nCartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);\n// sets and gets the color to ticks\naxis.getTicks().setColor(HtmlColor.RED);\n\nIsColor color = axis.gteTicks().getColor();\n")),(0,n.yg)("img",{src:(0,i.c)("/img/timeTicks.png")}),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"align"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/ElementAlign.html"},"ElementAlign")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The tick alignment along the axis.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"autoSkip"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", automatically calculates how many labels that can be shown and hides labels accordingly. Labels will be rotated up to ",(0,n.yg)("inlineCode",{parentName:"td"},"maxRotation")," before skipping any. Turn ",(0,n.yg)("inlineCode",{parentName:"td"},"autoSkip")," off to show all labels no matter what.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"autoSkipPadding"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The padding between the ticks on the horizontal axis when autoSkip is enabled.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Color of label backdrops.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"backdropPadding"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The padding of tick backdrop.",(0,n.yg)("br",null),"See ",(0,n.yg)("a",{parentName:"td",href:"../configuration/Commons#padding"},"padding documentation")," for more details.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Color of ticks.",(0,n.yg)("br",null),"See ",(0,n.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"crossAlign"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/CrossAlign.html"},"CrossAlign")),(0,n.yg)("td",{parentName:"tr",align:"left"},"CrossAlign.NEAR"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The tick alignment perpendicular to the axis.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"display"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", the tick marks are shown.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"font"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Font of ticks.",(0,n.yg)("br",null),"See ",(0,n.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"includeBounds"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", the defined ",(0,n.yg)("inlineCode",{parentName:"td"},"min")," and ",(0,n.yg)("inlineCode",{parentName:"td"},"max"),' values should be presented as ticks even if they are not "nice".')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"labelOffset"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis).",(0,n.yg)("br",null),(0,n.yg)("br",null),"Note: ",(0,n.yg)("em",{parentName:"td"},"This can cause labels at the edges to be cropped by the edge of the canvas"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"maxRotation"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The maximum rotation for tick labels when rotating to condense labels.",(0,n.yg)("br",null),(0,n.yg)("br",null),"Note: ",(0,n.yg)("em",{parentName:"td"},"Rotation doesn't occur until necessary and only applicable to horizontal scales."))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"minRotation"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The minimum rotation for tick labels.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"mirror"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The flips tick labels around axis, displaying the labels inside the chart instead of outside.",(0,n.yg)("br",null),(0,n.yg)("br",null),"Note: ",(0,n.yg)("em",{parentName:"td"},"Only applicable to vertical scales."))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The padding between the tick label and the axis.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"sampleSize"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", draw a background behind the tick labels")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"source"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/TickSource.html"},"TickSource")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"How ticks are generated on axis time.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"textStrokeColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The color of the stroke around the text.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Stroke width around the text.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"z"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.")))),(0,n.yg)("p",null,"The further customization of ticks, a ",(0,n.yg)("a",{parentName:"p",href:"#callback"},"callback")," is provided."),(0,n.yg)("h3",{id:"scriptable"},"Scriptable"),(0,n.yg)("p",null,"Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in ",(0,n.yg)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,n.yg)("p",null,"All scriptable options callbacks will get a ",(0,n.yg)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-scriptable-options-context"},"ScaleContext")," instance."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a time series axis \nCartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);\n// sets the option by a callback \naxis.getTicks().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,n.yg)("p",null,"The following options can be set by a callback:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Callback"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"font"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ShowLabelBackdropCallback.html"},"ShowLabelBackdropCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"textStrokeColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int")))),(0,n.yg)("h3",{id:"callback"},"Callback"),(0,n.yg)("p",null,"It is also common to want to change the tick marks to include information about the data type. "),(0,n.yg)("p",null,"To apply a custom callback, you can set a ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/TimeTickCallback.html"},"TimeTickCallback")," instance to the axis options, as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"axis.getTicks().setCallback(new TimeTickCallback(){\n\n    private final DateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.GERMANY);\n\n   /**\n     * Changes the tick marks to include information about the data type.\n     * \n     * @param axis axis instance where this callback as been defined\n     * @param value value of tick as date\n     * @param label label of tick, passed by CHART.JS formatting the date by the selected {@link TimeUnit} and its display\n     *            format.\n     * @param index index of tick\n     * @param values list of all tick values\n     * @return the tick to apply or if the callback returns null the associated grid line will be hidden.\n     */\n    public String onCallback(Axis axis, Date value, String label, int index, List<TimeTickItem> values){\n        return dateTimeFormat.format(value);\n    }\n         \n});\n")),(0,n.yg)("p",null,"The callback is providing a specific list of items (",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/TimeTickItem.html"},"TimeTickItem"),") which maps ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," object with the values (as date) and major booleans."),(0,n.yg)("p",null,"See ",(0,n.yg)("a",{parentName:"p",href:"../intl/DateTimeFormat"},"INTL date time format")," documentation if you want to use a date formatter, provided out-of-the-box."))}c.isMDXComponent=!0}}]);