"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[8255],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),d=i,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return a?n.createElement(k,l(l({ref:e},m),{},{components:a})):n.createElement(k,l({ref:e},m))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82844:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(87462),i=(a(67294),a(3905)),r=a(44996);const l={id:"CartesianTimeAxes",title:"Cartesian time",hide_title:!0,sidebar_label:"Cartesian time"},o=void 0,s={unversionedId:"CartesianTimeAxes",id:"version-3.3/CartesianTimeAxes",title:"Cartesian time",description:"",source:"@site/versioned_docs/version-3.3/CartesianTimeAxes.md",sourceDirName:".",slug:"/CartesianTimeAxes",permalink:"/Charba-Wiki/docs/3.3/CartesianTimeAxes",draft:!1,tags:[],version:"3.3",frontMatter:{id:"CartesianTimeAxes",title:"Cartesian time",hide_title:!0,sidebar_label:"Cartesian time"},sidebar:"version-3.3/docs",previous:{title:"Cartesian logarithmic",permalink:"/Charba-Wiki/docs/3.3/CartesianLogarithmicAxes"},next:{title:"Date adapters",permalink:"/Charba-Wiki/docs/3.3/DateAdapters"}},p={},m=[{value:"Cartesian Time Axes",id:"cartesian-time-axes",level:2},{value:"Datasets",id:"datasets",level:2},{value:"Options",id:"options",level:2},{value:"Time",id:"time",level:2},{value:"Adapters",id:"adapters",level:2},{value:"Ticks",id:"ticks",level:2},{value:"Callback",id:"callback",level:3},{value:"BuildTicks callback",id:"buildticks-callback",level:3}],c={toc:m};function u(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cartesian-time-axes"},"Cartesian Time Axes"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianTimeAxis.html"},"time axis")," is used to display times and dates. When building its ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianTimeTick.html"},"ticks"),", it will automatically calculate the most comfortable unit base on the size of the scale."),(0,i.kt)("img",{src:(0,r.Z)("/img/timeScale.png")}),(0,i.kt)("h2",{id:"datasets"},"Datasets"),(0,i.kt)("p",null,"To use time series, you must use ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/DataPoint.html"},"DataPoint")," in order to set the date object into axis. "),(0,i.kt)("p",null,"The x-axis data points may additionally be specified via the ",(0,i.kt)("strong",{parentName:"p"},"setX")," method when using the time axis."),(0,i.kt)("p",null,"Here is the example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'BarDataset dataset = chart.newDataset();\ndataset.setLabel("dataset 1");\n\n...\n      \nDataPoint dp1 = new DataPoint();\ndp1.setY(number_value1);\ndp1.setX(new Date(time1));\n\nDataPoint dp2 = new DataPoint();\ndp2.setY(number_value1);\ndp2.setX(new Date(time2));\n\ndataset.setDataPoints(dp1, dp2);\n\n...\n\nchart.getData().setDatasets(dataset);\n')),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"The following options are provided by the time axis. You may also set options provided by the ",(0,i.kt)("a",{parentName:"p",href:"CartesianAxes"},"common cartesian axis"),"."),(0,i.kt)("p",null,"The time axes are providing the capability to set and get the options, by the ",(0,i.kt)("strong",{parentName:"p"},"set")," and ",(0,i.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"CartesianTimeAxis axis = new CartesianTimeAxis(chart);\naxis.setDistribution(ScaleDistribution.SERIES);\n")),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"distribution"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/ScaleDistribution.html"},"ScaleDistribution")),(0,i.kt)("td",{parentName:"tr",align:null},"ScaleDistribution.LINEAR"),(0,i.kt)("td",{parentName:"tr",align:null},"How data is plotted.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bounds"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/ScaleBounds.html"},"ScaleBounds")),(0,i.kt)("td",{parentName:"tr",align:null},"ScaleBounds.DATA"),(0,i.kt)("td",{parentName:"tr",align:null},"Determines the scale bounds.")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"distribution")," ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/ScaleDistribution.html"},"object")," controls the data distribution along the scale:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LINEAR"),": data are spread according to their time (distances can vary)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SERIES"),": data are spread at the same distance from each other")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bounds")," ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/ScaleBounds.html"},"property")," controls the scale boundary strategy (bypassed by min/max time options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DATA"),": make sure data are fully visible, labels outside are removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TICKS"),": make sure ticks are fully visible, data outside are truncated  ")),(0,i.kt)("h2",{id:"time"},"Time"),(0,i.kt)("p",null,"The time axis provides a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/Time.html"},"Time")," object to configure how times must be managed on axis. It provides the ",(0,i.kt)("strong",{parentName:"p"},"set")," and ",(0,i.kt)("strong",{parentName:"p"},"get")," methods as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"CartesianTimeAxis axis = new CartesianTimeAxis(chart);\n\naxis.getTime().setUnit(TimeUnit.DAY);\naxis.getTime().setTooltipFormat(TimeUnit.day.getDefaultFormat());\n")),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isoWeekday"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," and the unit is set to 'week', then the first day of the week will be Monday. Otherwise, it will be Sunday.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"parser"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"interpreted as a custom format to be used to parse the date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"round"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html"},"TimeUnit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"If defined, dates will be rounded to the start of this unit.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tooltipFormat"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"Format string to use for the tooltip.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"unit"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html"},"TimeUnit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"If defined, will force the unit to be a certain type.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"stepSize"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of units between grid lines.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"minUnit"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html"},"TimeUnit")),(0,i.kt)("td",{parentName:"tr",align:null},"TimeUnit.MILLISECOND"),(0,i.kt)("td",{parentName:"tr",align:null},"The minimum display format to be used for a time unit.")))),(0,i.kt)("p",null,"The following time measurements are supported and are mapped into ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html"},"TimeUnit")," enumeration, to force a certain unit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"millisecond"),(0,i.kt)("li",{parentName:"ul"},"second"),(0,i.kt)("li",{parentName:"ul"},"minute"),(0,i.kt)("li",{parentName:"ul"},"hour"),(0,i.kt)("li",{parentName:"ul"},"day"),(0,i.kt)("li",{parentName:"ul"},"week"),(0,i.kt)("li",{parentName:"ul"},"month"),(0,i.kt)("li",{parentName:"ul"},"quarter"),(0,i.kt)("li",{parentName:"ul"},"year")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/Time.html"},"Time")," object is also providing another object to set the display formats, based on ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html"},"TimeUnit"),". "),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/DisplayFormats.html"},"DisplayFormats")," can be used as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'CartesianTimeAxis axis = new CartesianTimeAxis(chart);\n\naxis.getTime().setUnit(TimeUnit.DAY);\naxis.getTime().getDisplayFormats().setDisplayFormat(TimeUnit.DAY, "MMM D h:mm a");\n')),(0,i.kt)("p",null,"This method can override the defaults. To see the defaults, see the ",(0,i.kt)("a",{parentName:"p",href:"DateAdapters"},"date adapter")," implementation because every adapter can have own syntax and defaults."),(0,i.kt)("h2",{id:"adapters"},"Adapters"),(0,i.kt)("p",null,"The adapters options are used to configure the adapter for external date library if that adapter needs or supports options."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/Adapters.html"},"adapters options")," configuration is nested into the scale configuration as following: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'CartesianTimeAxis axis = new CartesianTimeAxis(chart);\n\n// LUXON options\nLuxonOptions options = new LuxonOptions();\noptions.setLocale("us");\n\naxis.getAdapters().setDate(options);\n')),(0,i.kt)("admonition",{title:"PAY ATTENTION",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Only ",(0,i.kt)("a",{parentName:"p",href:"DateAdapters#Luxon"},"Luxon")," date adapters can be configured with additional options.")),(0,i.kt)("p",null,"For more details, have a look how to configure a ",(0,i.kt)("a",{parentName:"p",href:"DateAdapters#Luxon"},"Luxon")," date adapters."),(0,i.kt)("h2",{id:"ticks"},"Ticks"),(0,i.kt)("p",null,"The time axis provides the following options for configuring tick marks. These options extend the ",(0,i.kt)("a",{parentName:"p",href:"CartesianAxes#tick-configuration"},"common tick configuration"),"."),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max"),(0,i.kt)("td",{parentName:"tr",align:null},"java.util.Date"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"If defined, this will override the data maximum")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"min"),(0,i.kt)("td",{parentName:"tr",align:null},"java.util.Date"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"If defined, this will override the data minimum")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"source"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/TickSource.html"},"TickSource")),(0,i.kt)("td",{parentName:"tr",align:null},"TickSource.AUTO"),(0,i.kt)("td",{parentName:"tr",align:null},"How ticks are generated on axis time")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/TickSource.html"},"object")," controls the ticks generation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUTO"),': generates "optimal" ticks based on scale size and time options.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DATA"),": generates ticks from data (including labels from data ",(0,i.kt)("inlineCode",{parentName:"li"},"{t|x|y}")," objects)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LABELS"),": generates ticks from user given ",(0,i.kt)("inlineCode",{parentName:"li"},"labels")," values of dataset ONLY")),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"CartesianTimeAxis axis = new CartesianTimeAxis(chart);\n\naxis.getTicks().setSource(TickSource.DATA);\n")),(0,i.kt)("p",null,"The further customization of ticks, a callback is provided."),(0,i.kt)("h3",{id:"callback"},"Callback"),(0,i.kt)("p",null,"It is also common to want to change the tick marks to include information about the data type. "),(0,i.kt)("p",null,"To apply a custom callback, you can set a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/TimeTickCallback.html"},"TimeTickCallback")," instance to the axis options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"axis.getTicks().setCallback(new TimeTickCallback() {\n\n   /**\n     * Changes the tick marks to include information about the data type.\n     * \n     * @param axis axis instance where this callback as been defined\n     * @param value value of tick as date\n     * @param label label of tick, passed by CHART.JS formatting the date by the selected {@link TimeUnit} and its display\n     *            format.\n     * @param index index of tick\n     * @param values list of all tick values\n     * @return the tick to apply or if the callback returns <code>null</code> the associated grid line will be hidden.\n     */\n    public String onCallback(Axis axis, Date value, String label, int index, List<TimeTickItem> values){\n        return FORMAT.format(value);\n    }\n         \n});\n")),(0,i.kt)("p",null,"The callback is providing a specific list of items (",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/items/TimeTickItem.html"},"TimeTickItem"),") which maps CHART.JS object with the values (as date) and major booleans."),(0,i.kt)("h3",{id:"buildticks-callback"},"BuildTicks callback"),(0,i.kt)("p",null,"This callback can be used to change parameters in the scale during ticks building. To implement this callback, you must implement ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/TimeAxisBuildTicksCallback.html"},"this interface"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface TimeAxisBuildTicksCallback {\n\n   /**\n    * Callback that runs before ticks are created.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeBuildTicks(Axis axis, AxisItem item);\n\n   /**\n     * Callback that runs after ticks are created. Useful for filtering ticks.\n     * \n     * @param axis axis instance where this callback as been defined\n     * @param item axis item instance\n     * @param ticks list of created ticks\n     */\n    void onAfterBuildTicks(Axis axis, AxisItem item, List<TimeTickItem> ticks);\n\n}\n")))}u.isMDXComponent=!0}}]);