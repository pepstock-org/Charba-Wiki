"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[6277],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,u=d["".concat(c,".").concat(m)]||d[m]||h[m]||n;return a?i.createElement(u,s(s({ref:t},l),{},{components:a})):i.createElement(u,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<n;p++)s[p]=a[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55547:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return h},default:function(){return m}});var i=a(87462),r=a(63366),n=(a(67294),a(3905)),s=a(44996),o=["components"],c={id:"ChartTimeSeries",title:"Time series chart",hide_title:!0,sidebar_label:"Time series"},p=void 0,l={unversionedId:"ChartTimeSeries",id:"version-3.3/ChartTimeSeries",title:"Time series chart",description:"Time series charts",source:"@site/versioned_docs/version-3.3/ChartTimeSeries.md",sourceDirName:".",slug:"/ChartTimeSeries",permalink:"/Charba-Wiki/docs/3.3/ChartTimeSeries",tags:[],version:"3.3",frontMatter:{id:"ChartTimeSeries",title:"Time series chart",hide_title:!0,sidebar_label:"Time series"},sidebar:"version-3.3/docs",previous:{title:"Google Chart",permalink:"/Charba-Wiki/docs/3.3/GoogleChartColors"},next:{title:"Meter",permalink:"/Charba-Wiki/docs/3.3/ChartMeter"}},h=[{value:"Time series charts",id:"time-series-charts",children:[],level:2},{value:"Dataset",id:"dataset",children:[],level:2},{value:"Data structure",id:"data-structure",children:[{value:"Data as doubles or as strings",id:"data-as-doubles-or-as-strings",children:[],level:4},{value:"Data as TimeSeriesItem",id:"data-as-timeseriesitem",children:[],level:4},{value:"Data as DataPoint",id:"data-as-datapoint",children:[],level:4}],level:2},{value:"Options",id:"options",children:[],level:2}],d={toc:h};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"time-series-charts"},"Time series charts"),(0,n.kt)("p",null,"A time series chart is a data visualization tool that illustrates data points at successive intervals of time. Each point on the chart corresponds to both a time and a quantity that is being measured."),(0,n.kt)("p",null,"Time series charts present a series of data points collected over a specified reporting period. The x-axis plots time and the y-axis plots data points."),(0,n.kt)("img",{src:(0,s.Z)("/img/timeSeriesBarChart.png")}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," provides 2 time series charts which are extending the ",(0,n.kt)("a",{parentName:"p",href:"ChartLine"},"line")," and ",(0,n.kt)("a",{parentName:"p",href:"ChartBar"},"bar")," charts implementation. These time series charts help the developer to use th right methods and axes. "),(0,n.kt)("p",null,"A time series chart have already defined the axes to use (",(0,n.kt)("a",{parentName:"p",href:"CartesianTimeAxes"},"time cartesian axis")," for X axes and ",(0,n.kt)("a",{parentName:"p",href:"CartesianLinearAxes"},"linear cartesian axis")," for Y axis). The developer can access to the instances and just configure them without creating any axis instance."),(0,n.kt)("h2",{id:"dataset"},"Dataset"),(0,n.kt)("p",null,"The time series charts allow a number of properties to be specified for each time series ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/TimeSeriesLineDataset.html"},"line")," or ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/TimeSeriesBarDataset.html"},"bar")," dataset which are implementing the same properties of line and bar datasets. "),(0,n.kt)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"TimeSeriesLineChart chart = new TimeSeriesLineChart();\n// for GWT\n// TimeSeriesLineChartWidget chart = new TimeSeriesLineChartWidget();\nTimeSeriesLineDataset dataset = chart.newDataset();\n...\n...\nTimeSeriesLineDataset datasetNew = new TimeSeriesLineDataset();\n...\nchart.getData().setDatasets(dataset, datasetNew);\n")),(0,n.kt)("h2",{id:"data-structure"},"Data structure"),(0,n.kt)("p",null,"The data of a dataset for a time series chart can be passed in two formats."),(0,n.kt)("h4",{id:"data-as-doubles-or-as-strings"},"Data as doubles or as strings"),(0,n.kt)("p",null,"Even if the methods to load data by these methods are not hidden, you can NOT use them to load data into a time series chart (not allowed and an exception will throw). See how to load data by time series items or data points. "),(0,n.kt)("h4",{id:"data-as-timeseriesitem"},"Data as TimeSeriesItem"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/TimeSeriesItem.html"},"time series item")," is a wrapper to the data points in order to simplify how to set data into a time series chart."),(0,n.kt)("p",null,"The chart instance will sort automatically the time series items by date in ascending mode (as required)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"...\nList<TimeSeriesItem> data = new LinkedList<>();\n...\ndata.add(new TimeSeriesItem(new Date(time1), value1));\ndata.add(new TimeSeriesItem(new Date(time2), value2));\n...\ndataset.setTimeSeriesData(data);\n...\nchart.getData().setDatasets(dataset);\n")),(0,n.kt)("h4",{id:"data-as-datapoint"},"Data as DataPoint"),(0,n.kt)("p",null,"Each data point is specified using an object containing ",(0,n.kt)("inlineCode",{parentName:"p"},"y")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"x")," (as time type) properties for time series."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"...\nDataPoint dp1 = new DataPoint();\ndp1.setY(number_value1);\ndp1.setX(new Date(time1));\n\nDataPoint dp2 = new DataPoint();\ndp2.setY(number_value1);\ndp2.setX(new Date(time2));\n...\ndataset.setDataPoints(dp1, dp2);\n...\nchart.getData().setDatasets(dataset);\n...\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,"The time series chart defines specific options implementation of ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/TimeSeriesLineOptions.html"},"line")," or ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/TimeSeriesBarOptions.html"},"bar")," to be configured. These options are merged with the global chart configuration options to form the options passed to the chart."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"TimeSeriesLineChart chart = new TimeSeriesLineChart();\n// for GWT\n// TimeSeriesLineChartWidget chart = new TimeSeriesLineChartWidget();\nTimeSeriesLineOptions options = chart.getOptions();\n")),(0,n.kt)("img",{src:(0,s.Z)("/img/timeSeriesLineChart.png")}),(0,n.kt)("p",null,"The time series options have already defined the out-of-the-box axes (",(0,n.kt)("a",{parentName:"p",href:"CartesianTimeAxes"},"time cartesian axis")," for X axes and ",(0,n.kt)("a",{parentName:"p",href:"CartesianLinearAxes"},"linear cartesian axis")," for Y axis) to use. The developer can access to the instances and just configure them without creating any axis instance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// time cartesian axis\nCartesianTimeAxis axis1 = chart.getOptions().getScales().getTimeAxis();\n//\naxis1.setDistribution(ScaleDistribution.SERIES);\naxis1.getTicks().setSource(TickSource.DATA);\naxis1.getTime().setUnit(TimeUnit.DAY);\n//\n// linear cartesian axis        \nCartesianLinearAxis axis2 = chart.getOptions().getScales().getLinearAxis();\n//\naxis2.setDisplay(true);\naxis2.getTicks().setBeginAtZero(true);\naxis2.setStacked(true);\n")))}m.isMDXComponent=!0}}]);