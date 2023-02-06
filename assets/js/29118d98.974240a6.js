"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[57611],{3905:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},h=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,h=o(t,["components","mdxType","originalType","parentName"]),c=s(a),m=n,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return a?r.createElement(g,i(i({ref:e},h),{},{components:a})):r.createElement(g,i({ref:e},h))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},40086:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var r=a(87462),n=(a(67294),a(3905)),l=a(44996);const i={id:"ChartBubbleMap",title:"BubbleMap chart",hide_title:!0,sidebar_label:"BubbleMap"},o=void 0,p={unversionedId:"charts/geo/ChartBubbleMap",id:"version-5.6/charts/geo/ChartBubbleMap",title:"BubbleMap chart",description:"Bubble map chart",source:"@site/versioned_docs/version-5.6/charts/geo/BubbleMap.md",sourceDirName:"charts/geo",slug:"/charts/geo/ChartBubbleMap",permalink:"/Charba-Wiki/docs/5.6/charts/geo/ChartBubbleMap",draft:!1,tags:[],version:"5.6",frontMatter:{id:"ChartBubbleMap",title:"BubbleMap chart",hide_title:!0,sidebar_label:"BubbleMap"},sidebar:"docs",previous:{title:"Choropleth",permalink:"/Charba-Wiki/docs/5.6/charts/geo/ChartChoropleth"},next:{title:"Meter",permalink:"/Charba-Wiki/docs/5.6/charts/ChartMeter"}},s={},h=[{value:"Bubble map chart",id:"bubble-map-chart",level:2},{value:"Controller registration",id:"controller-registration",level:3},{value:"Dataset",id:"dataset",level:2},{value:"Styling",id:"styling",level:3},{value:"Data structure",id:"data-structure",level:2},{value:"Options",id:"options",level:2},{value:"Scales",id:"scales",level:2},{value:"Projection axis",id:"projection-axis",level:3},{value:"Options",id:"options-1",level:4},{value:"Size axis",id:"size-axis",level:3},{value:"Options",id:"options-2",level:4},{value:"Legend",id:"legend",level:4},{value:"Scriptable",id:"scriptable",level:4}],c={toc:h},d="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"bubble-map-chart"},"Bubble map chart"),(0,n.kt)("p",null,"(quoted from ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proportional_symbol_map"},"Proportional Symbol Map")," definition in Wikipedia)"),(0,n.kt)("p",null,"A Bubble Map (or Proportional Symbol Map)  is a type of thematic map that uses map symbols that vary in size to represent a quantitative variable. For example, circles may be used to show the location of cities within the map, with the size of each circle sized proportionally to the population of the city. "),(0,n.kt)("p",null,"It is a map chart type that uses the visual variable of size to display differences in the magnitude of a certain discrete, abruptly changing phenomenon."),(0,n.kt)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=bubblemap"},(0,n.kt)("img",{src:(0,l.Z)("/img/geoBubbleMap.png")})),(0,n.kt)("p",null,"Programmatically, you could use a bar chart as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nBubbleMapChart chart = new BubbleMapChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,n.kt)("p",null,"By ",(0,n.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,n.kt)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a bar chart as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:BubbleMapChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,n.kt)("h3",{id:"controller-registration"},"Controller registration"),(0,n.kt)("p",null,"The controller registration is performed when a first BUBBLE MAP chart has been instantiated. When there is a use case where some defaults options must be set before the first instantiation, you need to register the controller before changing the default options."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// registers the controller \nBubbleMapChart.register();\n// gets default options\nGlobalOptions gOptions = Defaults.get().getGlobal();\n// gets default bubble map element options\nGeoFeatureElementOptions defaultOptions = gOptions.getElements().getElement(GeoFeatureElementOptions.FACTORY);\n// sets default value\ndefaultOptions.setOutlineBorderColor(HtmlColor.RED);\n")),(0,n.kt)("h2",{id:"dataset"},"Dataset"),(0,n.kt)("p",null,"The bubble map chart allows to define the data and a number of properties, used to display the data, by a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/BubbleMapDataset.html"},"bubble map dataset"),"."),(0,n.kt)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nBubbleMapChart chart = new BubbleMapChart();\n// creates the dataset\nBubbleMapDataset dataset = chart.newDataset();\n// sets the option\ndataset.setBackgroundColor(HtmlColor.RED);\ndataset.setShowGraticule(true);\n...\n// creates the dataset\nBubbleMapDataset datasetNew = new BubbleMapDataset();\n// sets the option\ndatasetNew.setBackgroundColor(HtmlColor.RED);\ndatasetNew.setShowGraticule(true);\n...\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clipMap"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/enums/ClipMap.html"},"ClipMap")),(0,n.kt)("td",{parentName:"tr",align:"left"},"ClipMap.TRUE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whether to clip the rendering to the chart area of the graph or to another area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"outline"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/Feature.html"},"Feature"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The features used to scale and centralize the projection in the chart area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"showGraticule"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/Graticule.html"},"Graticule")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If enabled it by ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," or graticule object instance, it renders the lines in the background.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"showOutline"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," to render the outline in the background")))),(0,n.kt)("h3",{id:"styling"},"Styling"),(0,n.kt)("p",null,"The style of the dataset can be configured by a ",(0,n.kt)("a",{parentName:"p",href:"../../configuration/Elements#point"},"Point")," element."),(0,n.kt)("p",null,"The style for the geografical configuration of the dataset can be configured by ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/GeoFeature.html"},(0,n.kt)("inlineCode",{parentName:"a"},"geoFeature")," element"),", as following:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"graticuleBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},"rgb(204,204,204) - ",(0,n.kt)("span",{style:{backgroundColor:"rgb(204,204,204)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The graticule border color.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"graticuleBorderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The outline border width.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"outlineBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The outline background color.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"outlineBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Defaults.get().getGlobal()"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},".getBorderColorAsString()")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The outline border color.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"outlineBorderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The outline border width.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// from chart instance\nGeoFeature geoElement = chart.getOptions().getElements().getGeoFeature();\n// sets options for bubble map datasets of the chart\ngeoElement.setOutlineBorderWidth(3);\ngeoElement.setGraticuleBorderColor(HtmlColor.RED);\n...\n")),(0,n.kt)("h2",{id:"data-structure"},"Data structure"),(0,n.kt)("p",null,"Bubble map dataset needs to contain a data array of points, each data point has to contain the latitude and longitude of the point to render and containing the value for the coloring."),(0,n.kt)("p",null,"Bubble map data points are mapped by ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/BubbleMapDataPoint.html"},"ChoroplethDataPoint"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates data points container\nList<BubbleMapDataPoint> dataPoints = new LinkedList<>();\n// creates a data point\nBubbleMapDataPoint dp = new BubbleMapDataPoint(latitude, longitude, 20);\n// adds data points\ndataPoints.add(dp);\n// sets values by an list of data points\ndataset.setValues(dataPoints);\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"setData")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"setDataPoints")," methods are available, inherited by the bubble dataset, but you can ",(0,n.kt)("strong",{parentName:"p"},"NOT")," use them otherwise an exception will throw.",(0,n.kt)("br",null),"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"setValues")," instead.")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,"The bubble map chart defines specific ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/BubbleMapOptions.html"},"options implementation")," to be configured."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nBubbleMapChart chart = new BubbleMapChart();\n// gets the chart options\nBubbleMaOptions options = chart.getOptions();\noptions.setShowGraticule(true);\n\n// ------------------------\n// ELEMENT\n// ------------------------\n// gets bubble map element options\nGeoFeatureElementOptions bubbleMapOptions = options.getElements().getElement(GeoFeatureElementOptions.FACTORY);\n// sets value\nbubbleMapOptions.setOutlineBorderColor(HtmlColor.RED);\n\n// ------------------------\n// DEFAULTS\n// ------------------------\n// gets default options\nGlobalOptions gOptions = Defaults.get().getGlobal();\n// gets default bubble map element options\nGeoFeatureElementOptions defaultOptions = gOptions.getElements().getElement(GeoFeatureElementOptions.FACTORY);\n// sets default value\ndefaultOptions.setOutlineBorderColor(HtmlColor.RED);\n")),(0,n.kt)("p",null,"These are the options specific to bubble map charts:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clipMap"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/enums/ClipMap.html"},"ClipMap")),(0,n.kt)("td",{parentName:"tr",align:"left"},"ClipMap.OUTLINE_GRATICULE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whether to clip the rendering to the chart area of the graph or to another area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"outline"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/Feature.html"},"Feature"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"empty list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The features used to scale and centralize the projection in the chart area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"showGraticule"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/Graticule.html"},"Graticule")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If enabled it by ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," or graticule object instance, it renders the lines in the background.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"showOutline"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," to render the outline in the background")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The bubble map chart disables the legend component.")),(0,n.kt)("h2",{id:"scales"},"Scales"),(0,n.kt)("p",null,"A bubble map chart can have maximum 2 scales, of the following types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"ChartBubbleMap#projection-axis"},"Projection")," scale which defines a way to flatten a globe's surface into a plane in order to make a map."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"ChartBubbleMap#size-axes"},"Size")," scale which is used to map the values to symbol radius size.")),(0,n.kt)("h3",{id:"projection-axis"},"Projection axis"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/ProjectionAxis.html"},"Projection axis")," is managing the map projection."),(0,n.kt)("p",null,"A map projection is a way to flatten a globe's surface into a plane in order to make a map."),(0,n.kt)("p",null,"This requires a systematic transformation of the latitudes and longitudes of locations from the surface of the globe into locations on a plane."),(0,n.kt)("p",null,"Here is an example how to create a projection axis:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nBubbleMapChart chart = new BubbleMapChart();\n// creates a projection axis\n// scale id and axis kind are already defined  \nProjectionAxis axis = new ProjectionAxis(chart);\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis);\n")),(0,n.kt)("h4",{id:"options-1"},"Options"),(0,n.kt)("p",null,"The projection axis allows to define a number of properties, used to display the data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a projection axis\nProjectionAxis axis = new ProjectionAxis(chart);\n// sets options\naxis.setProjection(Projection.EQUAL_EARTH);\naxis.setProjectionScale(0.5);\naxis.setProjectionOffset(0, -50);\n\nProjection projection = axis.getProjection();\n")),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,n.kt)("td",{parentName:"tr",align:"left"},"0 to all dimensions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets padding applied during auto scaling of the map in pixels, i.e. the chart size is reduce by the padding before fitting the map.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"projection"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/enums/Projection.html"},"Projection")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Projection.ALBERS_USA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The map projection which is a way to flatten a globe's surface into a plane in order to make a map")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"projectionOffset"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[double, double]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The map projection offset value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"projectionScale"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Undefined.DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"How much the map will be scaled.")))),(0,n.kt)("h3",{id:"size-axis"},"Size axis"),(0,n.kt)("p",null,"A size axis is used to map the values to symbol radius size."),(0,n.kt)("p",null,"There are 2 axis types to map the values to symbol radius size:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/SizeAxis.html"},"Size axis")," which extends the ",(0,n.kt)("a",{parentName:"li",href:"../../axes/CartesianLinearAxes"},"cartesian linear axis")," to repesent numbers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/SizeLogarithmicAxis.html"},"Size logarithmic axis")," which extends the ",(0,n.kt)("a",{parentName:"li",href:"../../axes/CartesianLogarithmicAxes"},"cartesian logarithmic axis")," to represent number by logarithmic base. ")),(0,n.kt)("p",null,"Here is an example how to create a size axis:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nBubbleMapChart chart = new BubbleMapChart();\n// creates a size axis\n// scale id and axis kind are already defined  \nSizeAxis axis = new SizeAxis(chart);\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis);\n")),(0,n.kt)("h4",{id:"options-2"},"Options"),(0,n.kt)("p",null,"The size axis allows to define a number of properties, used to display the data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a size axis\nSizeAxis axis = new SizeAxis(chart);\n// sets options\naxis.setInterpolate(Interpolate.BLUES);\naxis.setQuantize(5);\n\nInterpolate interpolate = axis.getInterpolate();\n")),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/enums/Mode.html"},"Mode")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mode.AREA"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The operation modes for the scale, area means that the area is linearly increasing whereas radius the radius is.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"missingRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The radius of the points to use the data is missing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"range"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[int, int]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[2, 20]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The radius range in pixel, the minimal data value will be mapped to the first entry, the maximal one to the second and a linear interpolation for all values in between.")))),(0,n.kt)("h4",{id:"legend"},"Legend"),(0,n.kt)("p",null,"You can configure the legend which is representing the color interpolation for bubble map chart."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a size axis\nSizeAxis axis = new SizeAxis(chart);\n// sets legend options\naxis.getLegend().setPosition(Position.TOP_RIGHT);\n\nPosition position = axis.getLegend().getPosition();\n")),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"align"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/enums/Align.html"},"Align")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Align.RIGHT"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The alignment of the legend on the chart area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"indicatorWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"how many pixels should be used for the color bar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"length"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"100"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The length of the legend, in terms of value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"margin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The margin pixels such that it doesn't stick to the edge of the chart.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"position"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/enums/Position.html"},"Position")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/PositionPoint.html"},"PositionPoint")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Position.BOTTOM_RIGHT"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The location of the legend on the chart area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"width"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"50"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"How wide the scale is.",(0,n.kt)("br",null),"For a horizontal scale the height if a value less than 1 is given, is it assume to be a ratio of the corresponding chart area.")))),(0,n.kt)("h4",{id:"scriptable"},"Scriptable"),(0,n.kt)("p",null,"Scriptable options at scale level accept a callback which is called for each of the underlying scale values. See more details in ",(0,n.kt)("a",{parentName:"p",href:"../../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a size axis\nSizeAxis axis = new SizeAxis(chart);\n// sets legend options by a callback\naxis.getLegend().setPosition(new PositionCallback(){\n\n   @Override\n   public Position invoke(ScaleContext context){\n      // logic\n      return position;\n   }\n});\n")),(0,n.kt)("p",null,"The following options can be set by a callback:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/callbacks/ModeCallback.html"},"ModeCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/enums/Mode.html"},"Mode"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"missingRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/RadiusCallback.html"},"RadiusCallback"),"<","ScaleContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"range"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/callbacks/RangeCallback.html"},"RangeCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"List","<","Integer",">")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"align"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/callbacks/AlignCallback.html"},"AlignCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/enums/Align.html"},"Align"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"indicatorWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"length"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/callbacks/LengthCallback.html"},"LengthCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"margin"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/callbacks/MarginCallback.html"},"MarginCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/Margin.html"},"Margin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"position"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/callbacks/PositionCallback.html"},"PositionCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/enums/Position.html"},"Position")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/PositionPoint.html"},"PositionPoint"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"width"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int")))))}m.isMDXComponent=!0}}]);