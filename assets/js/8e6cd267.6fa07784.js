"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[14596],{95788:(e,t,a)=>{a.d(t,{Iu:()=>h,yg:()=>m});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),g=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),s=g(a),d=n,m=s["".concat(p,".").concat(d)]||s[d]||c[d]||o;return a?r.createElement(m,l(l({ref:t},h),{},{components:a})):r.createElement(m,l({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var g=2;g<o;g++)l[g]=a[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var r=a(45072),n=(a(11504),a(95788)),o=a(70964);const l={id:"ChartChoropleth",title:"Choropleth chart",hide_title:!0,sidebar_label:"Choropleth"},i=void 0,p={unversionedId:"charts/geo/ChartChoropleth",id:"version-5.5/charts/geo/ChartChoropleth",title:"Choropleth chart",description:"Choropleth chart",source:"@site/versioned_docs/version-5.5/charts/geo/Choropleth.md",sourceDirName:"charts/geo",slug:"/charts/geo/ChartChoropleth",permalink:"/Charba-Wiki/docs/5.5/charts/geo/ChartChoropleth",draft:!1,tags:[],version:"5.5",frontMatter:{id:"ChartChoropleth",title:"Choropleth chart",hide_title:!0,sidebar_label:"Choropleth"},sidebar:"docs",previous:{title:"Introduction",permalink:"/Charba-Wiki/docs/5.5/charts/geo/Geo"},next:{title:"BubbleMap",permalink:"/Charba-Wiki/docs/5.5/charts/geo/ChartBubbleMap"}},g={},h=[{value:"Choropleth chart",id:"choropleth-chart",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Styling",id:"styling",level:3},{value:"Data structure",id:"data-structure",level:2},{value:"Options",id:"options",level:2},{value:"Scales",id:"scales",level:2},{value:"Projection axis",id:"projection-axis",level:3},{value:"Options",id:"options-1",level:4},{value:"Color axis",id:"color-axis",level:3},{value:"Options",id:"options-2",level:4},{value:"Interpolate callback",id:"interpolate-callback",level:4},{value:"Legend",id:"legend",level:4},{value:"Scriptable",id:"scriptable",level:4}],s={toc:h},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"choropleth-chart"},"Choropleth chart"),(0,n.yg)("p",null,"(quoted from ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Choropleth_map"},"Choropleth chart")," definition in Wikipedia)"),(0,n.yg)("p",null,"A choropleth chart is a type of thematic map in which a set of pre-defined areas is colored or patterned in proportion to a statistical variable that represents an aggregate summary of a geographic characteristic within each area, such as population density or per-capita income."),(0,n.yg)("p",null,"Choropleth maps provide an easy way to visualize how a variable varies across a geographic area or show the level of variability within a region. The choropleth is likely the most common type of thematic map because published statistical data (from government or other sources) is generally aggregated into well-known geographic units, such as countries, states, provinces, and counties. "),(0,n.yg)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=choropleth"},(0,n.yg)("img",{src:(0,o.c)("/img/geoChoropleth.png")})),(0,n.yg)("p",null,"Programmatically, you could use a bar chart as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nChoroplethChart chart = new ChoroplethChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,n.yg)("p",null,"By ",(0,n.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,n.yg)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a bar chart as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:ChoroplethChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,n.yg)("h2",{id:"dataset"},"Dataset"),(0,n.yg)("p",null,"The choropleth chart allows to define the data and a number of properties, used to display the data, by a ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/ChoroplethDataset.html"},"choropleth dataset"),"."),(0,n.yg)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nChoroplethChart chart = new ChoroplethChart();\n// creates the dataset\nChoroplethDataset dataset = chart.newDataset();\n// sets the option\ndataset.setShowGraticule(true);\n...\n// creates the dataset\nChoroplethDataset datasetNew = new ChoroplethDataset();\n// sets the option\ndatasetNew.setShowGraticule(true);\n...\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"clipMap"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/enums/ClipMap.html"},"ClipMap")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ClipMap.TRUE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to clip the rendering to the chart area of the graph or to another area.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"outline"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/Feature.html"},"Feature"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The features used to scale and centralize the projection in the chart area.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"showGraticule"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/Graticule.html"},"Graticule")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If enabled it by ",(0,n.yg)("inlineCode",{parentName:"td"},"true")," or graticule object instance, it renders the lines in the background.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"showOutline"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true")," to render the outline in the background")))),(0,n.yg)("h3",{id:"styling"},"Styling"),(0,n.yg)("p",null,"The style of the dataset can be configured by ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/ChoroplethBar.html"},"choropleth bar"),", which extends a ",(0,n.yg)("a",{parentName:"p",href:"../../configuration/Elements#bar"},"Bar")," elements, as following:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"graticuleBorderColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"rgb(204,204,204) - ",(0,n.yg)("span",{style:{backgroundColor:"rgb(204,204,204)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The graticule border color.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"graticuleBorderWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"0"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The outline border width.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"outlineBackgroundColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The outline background color.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"outlineBorderColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"Defaults.get().getGlobal()"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},".getBorderColorAsString()")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The outline border color.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"outlineBorderWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"0"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The outline border width.")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// from chart instance\nChoroplethBar choroplethElement = chart.getOptions().getElements().getChoroplethBar();\n// sets options for choropleth datasets of the chart\nchoroplethElement.setOutlineBorderWidth(3);\nchoroplethElement.setGraticuleBorderColor(HtmlColor.RED);\n...\n")),(0,n.yg)("h2",{id:"data-structure"},"Data structure"),(0,n.yg)("p",null,"Choropleth dataset needs to contain a data array of points, each data point has to contain the ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/Feature.html"},"Feature")," to render and containing the value for the coloring."),(0,n.yg)("p",null,"Choropleth data points are mapped by ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/ChoroplethDataPoint.html"},"ChoroplethDataPoint"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// gets the topoJSON map as string\nString topoJsonText = MyResources.INSTANCE.topojsonEarth().getText();\n// creates a topoJSON object, needed for further computations\nTopoJson world = GeoUtil.createTopoJson(topoJsonText);\n// the node name in "objects" one where the topology\n// are stored is "countries" \nList<Feature> features = GeoUtil.features(world, "countries");\n...\n// creates data points container\nList<ChoroplethDataPoint> dataPoints = new LinkedList<>();\nfor (Feature feature : features){\n  // creates a data point\n  ChoroplethDataPoint dp = new ChoroplethDataPoint(feature, 20);\n  // adds data points\n  dataPoints.add(dp);\n}\n// sets values by an list of data points\ndataset.setValues(dataPoints);\n')),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"setData")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"setDataPoints")," methods are available, inherited by the bar dataset, but you can ",(0,n.yg)("strong",{parentName:"p"},"NOT")," use them otherwise an exception will throw.",(0,n.yg)("br",null),"Use ",(0,n.yg)("inlineCode",{parentName:"p"},"setValues")," instead.")),(0,n.yg)("h2",{id:"options"},"Options"),(0,n.yg)("p",null,"The choropleth chart defines specific ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/ChoroplethOptions.html"},"options implementation")," to be configured."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nChoroplethChart chart = new ChoroplethChart();\n// gets the chart options\nChoroplethOptions options = chart.getOptions();\n// sets option\noptions.setResponsive(true);\n")),(0,n.yg)("p",null,"These are the options specific to choropleth charts:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"clipMap"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/enums/ClipMap.html"},"ClipMap")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ClipMap.TRUE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to clip the rendering to the chart area of the graph or to another area.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"outline"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/Feature.html"},"Feature"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"empty list"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The features used to scale and centralize the projection in the chart area.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"showGraticule"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/Graticule.html"},"Graticule")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If enabled it by ",(0,n.yg)("inlineCode",{parentName:"td"},"true")," or graticule object instance, it renders the lines in the background.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"showOutline"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true")," to render the outline in the background")))),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The choropleth chart disables the legend component and the options can ",(0,n.yg)("strong",{parentName:"p"},"NOT")," be set globally but only at chart level.")),(0,n.yg)("h2",{id:"scales"},"Scales"),(0,n.yg)("p",null,"A choropleth chart can have maximum 2 scales, of the following types:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"ChartChoropleth#projection-axis"},"Projection")," scale which defines a way to flatten a globe's surface into a plane in order to make a map."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"ChartChoropleth#color-axes"},"Color")," scale which enables the coloring of the nodes.")),(0,n.yg)("h3",{id:"projection-axis"},"Projection axis"),(0,n.yg)("p",null,"A ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/ProjectionAxis.html"},"Projection axis")," is managing the map projection."),(0,n.yg)("p",null,"A map projection is a way to flatten a globe's surface into a plane in order to make a map."),(0,n.yg)("p",null,"This requires a systematic transformation of the latitudes and longitudes of locations from the surface of the globe into locations on a plane."),(0,n.yg)("p",null,"Here is an example how to create a projection axis:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nChoroplethChart chart = new ChoroplethChart();\n// creates a projection axis\n// scale id and axis kind are already defined  \nProjectionAxis axis = new ProjectionAxis(chart);\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis);\n")),(0,n.yg)("h4",{id:"options-1"},"Options"),(0,n.yg)("p",null,"The projection axis allows to define a number of properties, used to display the data."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a projection axis\nProjectionAxis axis = new ProjectionAxis(chart);\n// sets options\naxis.setProjection(Projection.EQUAL_EARTH);\naxis.setProjectionScale(0.5);\naxis.setProjectionOffset(0, -50);\n\nProjection projection = axis.getProjection();\n")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,n.yg)("td",{parentName:"tr",align:"left"},"0 to all dimensions"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Sets padding applied during auto scaling of the map in pixels, i.e. the chart size is reduce by the padding before fitting the map.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"projection"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/enums/Projection.html"},"Projection")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Projection.ALBERS_USA"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The map projection which is a way to flatten a globe's surface into a plane in order to make a map")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"projectionOffset"),(0,n.yg)("td",{parentName:"tr",align:"left"},"[double, double]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The map projection offset value.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"projectionScale"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Undefined.DOUBLE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"How much the map will be scaled.")))),(0,n.yg)("h3",{id:"color-axis"},"Color axis"),(0,n.yg)("p",null,"A color axis is managing the coloring of the nodes."),(0,n.yg)("p",null,"A color axis manages how the map must be colored providing also a legend to see the color distribution for the choropleth chart."),(0,n.yg)("img",{src:(0,o.c)("/img/colorAxis.png")}),(0,n.yg)("p",null,"There are 2 axis types for coloring the nodes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/ColorAxis.html"},"Color axis")," which extends the ",(0,n.yg)("a",{parentName:"li",href:"../../axes/CartesianLinearAxes"},"cartesian linear axis")," to repesent numbers."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/ColorLogarithmicAxis.html"},"Color logarithmic axis")," which extends the ",(0,n.yg)("a",{parentName:"li",href:"../../axes/CartesianLogarithmicAxes"},"cartesian logarithmic axis")," to represent number by logarithmic base. ")),(0,n.yg)("p",null,"Here is an example how to create a color axis:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nChoroplethChart chart = new ChoroplethChart();\n// creates a color axis\n// scale id and axis kind are already defined  \nColorAxis axis = new ColorAxis(chart);\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis);\n")),(0,n.yg)("h4",{id:"options-2"},"Options"),(0,n.yg)("p",null,"The color axis allows to define a number of properties, used to display the data."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a color axis\nColorAxis axis = new ColorAxis(chart);\n// sets options\naxis.setInterpolate(Interpolate.BLUES);\naxis.setQuantize(5);\n\nInterpolate interpolate = axis.getInterpolate();\n")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"interpolate"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/enums/Interpolate.html"},"Interpolate")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Interpolate.BLUES"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The color interpolation of the scale.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"missingColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"HtmlColor.TRANSPARENT"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The color to use the data is missing.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"quantize"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"0"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The amount of pieces to allow to split the color scale in N quantized equal bin.")))),(0,n.yg)("h4",{id:"interpolate-callback"},"Interpolate callback"),(0,n.yg)("p",null,"You can set the color interpolation of the scale at runtime, providing different colors for different features."),(0,n.yg)("img",{src:(0,o.c)("/img/geoCustomInterpolation.png")}),(0,n.yg)("p",null,"The interpolate property can be set as ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/callbacks/InterpolateCallback.html"},"scriptable option"),", as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// uses the color list of tableau color scheme\nprivate static final List<IsColor> COLORS = TableauScheme.CLASSIC_AREA_RED_GREEN21.getColors();\n...\n...\n// creates a color axis\nColorAxis axis = new ColorAxis(chart);\n// sets callback\naxis.setInterpolate(new InterpolateCallback(){\n\n    /**\n     * Returns a color instance.\n     * \n     * @param normalizedValue normalized value of the data set\n     * @return a color instance\n     */ \n    @Override\n    public Object interpolate(double normalizedValue) {\n       int index = (int)Math.round(normalizedValue * (COLORS.size() - 1));\n       return COLORS.get(Math.min(index, COLORS.size() - 1));\n    }\n});\n")),(0,n.yg)("h4",{id:"legend"},"Legend"),(0,n.yg)("p",null,"You can configure the legend which is representing the color interpolation for choropleth chart."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a color axis\nColorAxis axis = new ColorAxis(chart);\n// sets legend options\naxis.getLegend().setPosition(Position.TOP_RIGHT);\n\nPosition position = axis.getLegend().getPosition();\n")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"align"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/enums/Align.html"},"Align")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Align.RIGHT"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The alignment of the legend on the chart area.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"indicatorWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"how many pixels should be used for the color bar.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"length"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"100"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The length of the legend, in terms of value.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"margin"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"8"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The margin pixels such that it doesn't stick to the edge of the chart.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"position"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/enums/Position.html"},"Position")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/PositionPoint.html"},"PositionPoint")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Position.BOTTOM_RIGHT"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The location of the legend on the chart area.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"width"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"50"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"How wide the scale is.",(0,n.yg)("br",null),"For a horizontal scale the height if a value less than 1 is given, is it assume to be a ratio of the corresponding chart area.")))),(0,n.yg)("h4",{id:"scriptable"},"Scriptable"),(0,n.yg)("p",null,"Scriptable options at scale level accept a callback which is called for each of the underlying scale values. See more details in ",(0,n.yg)("a",{parentName:"p",href:"../../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a color axis\nColorAxis axis = new ColorAxis(chart);\n// sets legend options by a callback\naxis.getLegend().setPosition(new PositionCallback(){\n\n   @Override\n   public Position invoke(ScaleContext context){\n      // logic\n      return position;\n   }\n});\n")),(0,n.yg)("p",null,"The following options can be set by a callback:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Callback"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"missingColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"quantize"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/callbacks/QuantizeCallback.html"},"QuantizeCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"int")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"align"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/callbacks/AlignCallback.html"},"AlignCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/enums/Align.html"},"Align"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"indicatorWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"length"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/callbacks/LengthCallback.html"},"LengthCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"int")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"margin"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/callbacks/MarginCallback.html"},"MarginCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"int - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/Margin.html"},"Margin"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"position"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/callbacks/PositionCallback.html"},"PositionCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/enums/Position.html"},"Position")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/geo/PositionPoint.html"},"PositionPoint"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"width"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int")))))}d.isMDXComponent=!0}}]);