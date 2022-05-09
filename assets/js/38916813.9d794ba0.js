"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[66579],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,g=m["".concat(l,".").concat(d)]||m[d]||h[d]||i;return a?r.createElement(g,s(s({ref:t},c),{},{components:a})):r.createElement(g,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18822:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),s=a(44996),o=["components"],l={id:"ChartTimeSeries",title:"Time series chart",hide_title:!0,sidebar_label:"Time series"},p=void 0,c={unversionedId:"charts/ChartTimeSeries",id:"version-5.0/charts/ChartTimeSeries",title:"Time series chart",description:"Time series charts",source:"@site/versioned_docs/version-5.0/charts/TimeSeries.md",sourceDirName:"charts",slug:"/charts/ChartTimeSeries",permalink:"/Charba-Wiki/docs/5.0/charts/ChartTimeSeries",draft:!1,tags:[],version:"5.0",frontMatter:{id:"ChartTimeSeries",title:"Time series chart",hide_title:!0,sidebar_label:"Time series"},sidebar:"version-5.0/docs",previous:{title:"Stacked bar",permalink:"/Charba-Wiki/docs/5.0/charts/ChartStackedBar"},next:{title:"Introduction",permalink:"/Charba-Wiki/docs/5.0/charts/geo/Geo"}},h={},m=[{value:"Time series charts",id:"time-series-charts",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Data structure",id:"data-structure",level:2},{value:"Data as doubles or as strings",id:"data-as-doubles-or-as-strings",level:4},{value:"Data as TimeSeriesItems",id:"data-as-timeseriesitems",level:4},{value:"Data as DataPoints",id:"data-as-datapoints",level:4},{value:"Options",id:"options",level:2},{value:"Segment",id:"segment",level:3}],d={toc:m};function g(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"time-series-charts"},"Time series charts"),(0,i.kt)("p",null,"A time series chart is a data visualization tool that illustrates data points at successive intervals of time. Each point on the chart corresponds to both a time and a quantity that is being measured."),(0,i.kt)("p",null,"Time series charts present a series of data points collected over a specified reporting period. The x-axis plots time and the y-axis plots data points."),(0,i.kt)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=timeseries"},(0,i.kt)("img",{src:(0,s.Z)("/img/timeSeriesBarChart.png")})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," provides 2 time series charts which are extending the ",(0,i.kt)("a",{parentName:"p",href:"ChartLine"},"line")," and ",(0,i.kt)("a",{parentName:"p",href:"ChartBar"},"bar")," charts implementation. These time series charts help the developer providing some methods and axes implementations. "),(0,i.kt)("p",null,"A time series chart have already defined the axes to use (",(0,i.kt)("a",{parentName:"p",href:"../axes/CartesianTimeSeriesAxes"},"time series cartesian axis")," for X axes and ",(0,i.kt)("a",{parentName:"p",href:"../axes/CartesianLinearAxes"},"linear cartesian axis")," for Y axis). The developer can access to the instances and just configure them without creating any axis instance."),(0,i.kt)("h2",{id:"dataset"},"Dataset"),(0,i.kt)("p",null,"The time series charts allow a number of properties to be specified for each time series ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/TimeSeriesLineDataset.html"},"line")," or ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/TimeSeriesBarDataset.html"},"bar")," datasets which are implementing the same properties of line and bar ones. "),(0,i.kt)("p",null,"See ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"ChartLine#dataset"},"line dataset"))," or ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"ChartBar#dataset"},"bar dataset"))," configuration how to configure the time series dataset, because no additional options are defined."),(0,i.kt)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a line time series chart\nTimeSeriesLineChart chart = new TimeSeriesLineChart();\n// for GWT\n// TimeSeriesLineChartWidget chart = new TimeSeriesLineChartWidget();\n// creates a dataset\nTimeSeriesLineDataset dataset = chart.newDataset();\n// sets the option\ndataset.setBackgroundColor(HtmlColor.RED);\n... // adds data and dataset configuration\n// adds dataset to chart\nchart.getData().setDatasets(dataset);\n")),(0,i.kt)("h2",{id:"data-structure"},"Data structure"),(0,i.kt)("p",null,"The data of a dataset for a time series chart can be passed in two formats."),(0,i.kt)("h4",{id:"data-as-doubles-or-as-strings"},"Data as doubles or as strings"),(0,i.kt)("p",null,"Even if the methods to load data by these methods are not hidden, you can NOT use them to load data in a time series chart (not allowed and an exception will throw). See how to load data by ",(0,i.kt)("a",{parentName:"p",href:"#data-as-timeseriesitems"},"time series items")," or ",(0,i.kt)("a",{parentName:"p",href:"#data-as-datapoints"},"data points"),". "),(0,i.kt)("h4",{id:"data-as-timeseriesitems"},"Data as TimeSeriesItems"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/TimeSeriesItem.html"},"time series item")," is a wrapper to the data points in order to simplify how to set data in a time series chart."),(0,i.kt)("p",null,"The chart instance will sort automatically the time series items by date in ascending mode (as required)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a line time series chart\nTimeSeriesLineChart chart = new TimeSeriesLineChart();\n// for GWT\n// TimeSeriesLineChartWidget chart = new TimeSeriesLineChartWidget();\n// creates a dataset\nTimeSeriesLineDataset dataset = chart.newDataset();\n// creates an empty list to contain the items\nList<TimeSeriesItem> data = new LinkedList<>();\n// creates time series items and add to the list\ndata.add(new TimeSeriesItem(new Date(time1), number_value1));\ndata1.add(new TimeSeriesItem(new Date(time2), number_value2));\n// sets the time series items as data to the dataset\ndataset.setTimeSeriesData(data);\n// adds dataset to chart\nchart.getData().setDatasets(dataset);\n")),(0,i.kt)("h4",{id:"data-as-datapoints"},"Data as DataPoints"),(0,i.kt)("p",null,"Each data point is specified using an object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," (as time type) properties for time series."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a line time series chart\nTimeSeriesLineChart chart = new TimeSeriesLineChart();\n// for GWT\n// TimeSeriesLineChartWidget chart = new TimeSeriesLineChartWidget();\n// creates a dataset\nTimeSeriesLineDataset dataset = chart.newDataset();\n// creates a datapoint\nDataPoint dp1 = new DataPoint();\ndp1.setY(number_value1);\ndp1.setX(new Date(time1));\n// creates a datapoint\nDataPoint dp2 = new DataPoint();\ndp2.setY(number_value1);\ndp2.setX(new Date(time2));\n// sets the data points as data to the dataset\ndataset.setDataPoints(dp1, dp2);\n// adds dataset to chart\nchart.getData().setDatasets(dataset);\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"The time series chart defines specific options implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/configuration/TimeSeriesLineOptions.html"},"line")," or ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/configuration/TimeSeriesBarOptions.html"},"bar")," to be configured."),(0,i.kt)("p",null,"See ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"ChartLine#options"},"line chart"))," or ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"ChartBar#options"},"bar chart"))," options how to configure the time series chart, because no additional options are defined."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a line time series chart\nTimeSeriesLineChart chart = new TimeSeriesLineChart();\n// for GWT\n// TimeSeriesLineChartWidget chart = new TimeSeriesLineChartWidget();\n// gets options\nTimeSeriesLineOptions options = chart.getOptions();\n// sets options\noptions.setResponsive(true);\n")),(0,i.kt)("img",{src:(0,s.Z)("/img/timeSeriesLineChart.png")}),(0,i.kt)("p",null,"The time series options have already defined the out-of-the-box axes (",(0,i.kt)("a",{parentName:"p",href:"../axes/CartesianTimeSeriesAxes"},"time series cartesian axis")," for X axes and ",(0,i.kt)("a",{parentName:"p",href:"../axes/CartesianLinearAxes"},"linear cartesian axis")," for Y axis) to use. The developer can access to the instances and just configure them without creating any axis instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a line time series chart\nTimeSeriesLineChart chart = new TimeSeriesLineChart();\n// gets time series cartesian axis\nCartesianTimeSeriesAxis timeseriesAxis = chart.getOptions().getScales().getTimeAxis();\n// sets options\ntimeseriesAxis.getTime().setUnit(TimeUnit.DAY);\n// gets linear cartesian axis       \nCartesianLinearAxis linearAxis = chart.getOptions().getScales().getLinearAxis();\n// sets options\nlinearAxis.setBeginAtZero(true);\n")),(0,i.kt)("h3",{id:"segment"},"Segment"),(0,i.kt)("p",null,"The time series line charts can contain a segment options element which can manage the styles of data sets in each own segment between the points and can override the data set configuration by scriptable options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates a line time series chart\nTimeSeriesLineChart chart = new TimeSeriesLineChart();\n// sets segment callback for border color\nchart.getOptions().getSegment().setBorderColor(new ColorCallback<SegmentContext>() {\n            \n    @Override\n    public Object invoke(SegmentContext context) {\n        // if value of point 1 greater than value of point 0\n        // the border color will be "green", otherwise "gray"\n        double valuePoint0 = context.getStartPoint().getParsed().getY();\n        double valuePoint1 = context.getEndPoint().getParsed().getY();\n        return valuePoint0 < valuePoint1 ? HtmlColor.GRAY : HtmlColor.GREEN;\n    }\n});\n// sets segment callback for background color\nchart.getOptions().getSegment().setBackgroundColor(new ColorCallback<SegmentContext>() {\n            \n    @Override\n    public Object invoke(SegmentContext context) {\n        // if value of point 1 greater than value of point 0\n        // the background color will be "light green", otherwise "gray"\n        double valuePoint0 = context.getStartPoint().getParsed().getY();\n        double valuePoint1 = context.getEndPoint().getParsed().getY();\n        return valuePoint0 < valuePoint1 ? HtmlColor.LIGHT_GRAY : HtmlColor.LIGHT_GREEN;\n    }\n});\n')),(0,i.kt)("p",null,"Below an example how you have a time series line chart where each week is colored with different color:"),(0,i.kt)("img",{src:(0,s.Z)("/img/segmentTimeseriesLine.png")}),(0,i.kt)("p",null,"Currently all of the border options and background color are supported. The segment styles are resolved for each section of the time series line between each point."),(0,i.kt)("p",null,"These are the options specific to line charts:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","SegmentContext",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"borderCapStyle"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/CapStyleCallback.html"},"CapStyleCallback"),"<","SegmentContext",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/enums/CapStyle.html"},"CapStyle"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","SegmentContext",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"borderDash"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashCallback.html"},"BorderDashCallback"),"<","SegmentContext",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"List","<","Integer",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"borderDashOffset"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html"},"BorderDashOffsetCallback"),"<","SegmentContext",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"double")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"borderJoinStyle"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/JoinStyleCallback.html"},"JoinStyleCallback"),"<","SegmentContext",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/enums/JoinStyle.html"},"JoinStyle"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","SegmentContext",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int")))),(0,i.kt)("p",null,"The callbacks are getting the only 1 argument, the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/SegmentContext.html"},"segment context")," which contains the context of the callback execution."),(0,i.kt)("p",null,"The context object contains the following properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"attributes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/commons/NativeObjectContainer.html"},"NativeObjectContainer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"User object which you can store your options at runtime.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"chart"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/IsChart.html"},"IsChart")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Chart instance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"datasetIndex"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The index of the dataset.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"endDataIndex"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The index of second point in the data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"endPoint"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/items/DatasetElement.html"},"DatasetElement")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The line element for the end point of the segment.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"startDataIndex"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The index of first point in the data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"startPoint"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/items/DatasetElement.html"},"DatasetElement")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The line element for the start point of the segment.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"type"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/items/ContextType.html"},"ContextType")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The type of the context. It can be ONLY ",(0,i.kt)("inlineCode",{parentName:"td"},"ContextType.SEGMENT"),".")))))}g.isMDXComponent=!0}}]);