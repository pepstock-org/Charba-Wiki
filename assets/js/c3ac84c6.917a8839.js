"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[7758],{3905:function(t,e,a){a.d(e,{Zo:function(){return h},kt:function(){return m}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},h=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,h=i(t,["components","mdxType","originalType","parentName"]),d=s(a),m=n,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(g,l(l({ref:e},h),{},{components:a})):r.createElement(g,l({ref:e},h))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13919:function(t,e,a){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},44996:function(t,e,a){a.d(e,{C:function(){return o},Z:function(){return l}});var r=a(52263),n=a(13919);function o(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,i=void 0!==l&&l,p=o.absolute,s=void 0!==p&&p;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(i)return e+a;var h=a.startsWith(e)?a:e+a.replace(/^\//,"");return s?t+h:h}(o,a,t,e)}}}function l(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},20753:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return h},toc:function(){return c},default:function(){return m}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=a(44996),i=["components"],p={id:"ChartChoropleth",title:"Choropleth chart",hide_title:!0,sidebar_label:"Choropleth"},s=void 0,h={unversionedId:"charts/geo/ChartChoropleth",id:"version-4.2/charts/geo/ChartChoropleth",isDocsHomePage:!1,title:"Choropleth chart",description:"Choropleth chart",source:"@site/versioned_docs/version-4.2/charts/geo/Choropleth.md",sourceDirName:"charts/geo",slug:"/charts/geo/ChartChoropleth",permalink:"/Charba-Wiki/docs/4.2/charts/geo/ChartChoropleth",tags:[],version:"4.2",frontMatter:{id:"ChartChoropleth",title:"Choropleth chart",hide_title:!0,sidebar_label:"Choropleth"},sidebar:"version-4.2/docs",previous:{title:"Introduction",permalink:"/Charba-Wiki/docs/4.2/charts/geo/Geo"},next:{title:"BubbleMap",permalink:"/Charba-Wiki/docs/4.2/charts/geo/ChartBubbleMap"}},c=[{value:"Choropleth chart",id:"choropleth-chart",children:[],level:2},{value:"Dataset",id:"dataset",children:[{value:"Styling",id:"styling",children:[],level:3}],level:2},{value:"Data structure",id:"data-structure",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Scales",id:"scales",children:[{value:"Projection axis",id:"projection-axis",children:[{value:"Options",id:"options-1",children:[],level:4}],level:3},{value:"Color axes",id:"color-axes",children:[{value:"Options",id:"options-2",children:[],level:4},{value:"Interpolate callback",id:"interpolate-callback",children:[],level:4},{value:"Legend",id:"legend",children:[],level:4}],level:3}],level:2}],d={toc:c};function m(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"choropleth-chart"},"Choropleth chart"),(0,o.kt)("p",null,"(quoted from ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Choropleth_map"},"Choropleth chart")," definition in Wikipedia)"),(0,o.kt)("p",null,"A choropleth chart is a type of thematic map in which a set of pre-defined areas is colored or patterned in proportion to a statistical variable that represents an aggregate summary of a geographic characteristic within each area, such as population density or per-capita income."),(0,o.kt)("p",null,"Choropleth maps provide an easy way to visualize how a variable varies across a geographic area or show the level of variability within a region. The choropleth is likely the most common type of thematic map because published statistical data (from government or other sources) is generally aggregated into well-known geographic units, such as countries, states, provinces, and counties. "),(0,o.kt)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=choropleth"},(0,o.kt)("img",{src:(0,l.Z)("/img/geoChoropleth.png")})),(0,o.kt)("p",null,"Programmatically, you could use a bar chart as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nChoroplethChart chart = new ChoroplethChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,o.kt)("p",null,"By ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,o.kt)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a bar chart as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:ChoroplethChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,o.kt)("h2",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"The choropleth chart allows to define the data and a number of properties, used to display the data, by a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/ChoroplethDataset.html"},"choropleth dataset"),"."),(0,o.kt)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nChoroplethChart chart = new ChoroplethChart();\n// creates the dataset\nChoroplethDataset dataset = chart.newDataset();\n// sets the option\ndataset.setShowGraticule(true);\n...\n// creates the dataset\nChoroplethDataset datasetNew = new ChoroplethDataset();\n// sets the option\ndatasetNew.setShowGraticule(true);\n...\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,o.kt)("p",null,"The following are the attributes that you can set:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"clipMap"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/enums/ClipMap.html"},"ClipMap")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ClipMap.TRUE"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether to clip the rendering to the chart area of the graph or to another area.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"outline"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/Feature.html"},"Feature"),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The features used to scale and centralize the projection in the chart area.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"showGraticule"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/Graticule.html"},"Graticule")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:"left"},"If enabled it by ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," or graticule object instance, it renders the lines in the background.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"showOutline"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," to render the outline in the background")))),(0,o.kt)("h3",{id:"styling"},"Styling"),(0,o.kt)("p",null,"The style of the dataset can be configured by ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/ChoroplethBar.html"},"choropleth bar"),", which extends a ",(0,o.kt)("a",{parentName:"p",href:"../../configuration/Elements#bar"},"Bar")," elements, as following:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"graticuleBorderColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},"rgb(204,204,204) - ",(0,o.kt)("span",{style:{backgroundColor:"rgb(204,204,204)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The graticule border color.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"graticuleBorderWidth"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The outline border width.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"outlineBackgroundColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The outline background color.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"outlineBorderColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Defaults.get().getGlobal()"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},".getBorderColorAsString()")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The outline border color.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"outlineBorderWidth"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The outline border width.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// from chart instance\nChoroplethBar choroplethElement = chart.getOptions().getElements().getChoroplethBar();\n// sets options for choropleth datasets of the chart\nchoroplethElement.setOutlineBorderWidth(3);\nchoroplethElement.setGraticuleBorderColor(HtmlColor.RED);\n...\n")),(0,o.kt)("h2",{id:"data-structure"},"Data structure"),(0,o.kt)("p",null,"Choropleth dataset needs to contain a data array of points, each data point has to contain the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/Feature.html"},"Feature")," to render and containing the value for the coloring."),(0,o.kt)("p",null,"Choropleth data points are mapped by ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/ChoroplethDataPoint.html"},"ChoroplethDataPoint"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// gets the topoJSON map as string\nString topoJsonText = MyResources.INSTANCE.topojsonEarth().getText();\n// creates a topoJSON object, needed for further computations\nTopoJson world = GeoUtils.createTopoJson(topoJsonText);\n// the node name in "objects" one where the topology\n// are stored is "countries" \nList<Feature> features = GeoUtils.features(world, "countries");\n...\n// creates data points container\nList<ChoroplethDataPoint> dataPoints = new LinkedList<>();\nfor (Feature feature : features){\n  // creates a data point\n  ChoroplethDataPoint dp = new ChoroplethDataPoint(feature, 20);\n  // adds data points\n  dataPoints.add(dp);\n}\n// sets values by an list of data points\ndataset.setValues(dataPoints);\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"setData")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setDataPoints")," methods are available, inherited by the bar dataset, but you can ",(0,o.kt)("strong",{parentName:"p"},"NOT")," use them otherwise an exception will throw.",(0,o.kt)("br",null),"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"setValues")," instead."))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"The choropleth chart defines specific ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/ChoroplethOptions.html"},"options implementation")," to be configured."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nChoroplethChart chart = new ChoroplethChart();\n// gets the chart options\nChoroplethOptions options = chart.getOptions();\n// sets option\noptions.setResponsive(true);\n")),(0,o.kt)("p",null,"These are the options specific to bar charts:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"clipMap"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/enums/ClipMap.html"},"ClipMap")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ClipMap.TRUE"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether to clip the rendering to the chart area of the graph or to another area.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"outline"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/Feature.html"},"Feature"),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"empty list"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The features used to scale and centralize the projection in the chart area.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"showGraticule"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/Graticule.html"},"Graticule")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:"left"},"If enabled it by ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," or graticule object instance, it renders the lines in the background.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"showOutline"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," to render the outline in the background")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The choropleth chart disables the legend component and the options can ",(0,o.kt)("strong",{parentName:"p"},"NOT")," be set globally but only at chart level."))),(0,o.kt)("h2",{id:"scales"},"Scales"),(0,o.kt)("p",null,"A choropleth chart can have maximum 2 scales, of the following types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ChartChoropleth#projection-axis"},"Projection")," scale which defines a way to flatten a globe's surface into a plane in order to make a map."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ChartChoropleth#color-axes"},"Color")," scale which enables the coloring of the nodes.")),(0,o.kt)("h3",{id:"projection-axis"},"Projection axis"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/ProjectionAxis.html"},"Projection axis")," is managing the map projection."),(0,o.kt)("p",null,"A map projection is a way to flatten a globe's surface into a plane in order to make a map."),(0,o.kt)("p",null,"This requires a systematic transformation of the latitudes and longitudes of locations from the surface of the globe into locations on a plane."),(0,o.kt)("p",null,"Here is an example how to create a projection axis:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nChoroplethChart chart = new ChoroplethChart();\n// creates a projection axis\n// scale id and axis kind are already defined  \nProjectionAxis axis = new ProjectionAxis(chart);\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis);\n")),(0,o.kt)("h4",{id:"options-1"},"Options"),(0,o.kt)("p",null,"The projection axis allows to define a number of properties, used to display the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates a projection axis\nProjectionAxis axis = new ProjectionAxis(chart);\n// sets options\naxis.setProjection(Projection.EQUAL_EARTH);\naxis.setProjectionScale(0.5);\naxis.setProjectionOffset(0, -50);\n\nProjection projection = axis.getProjection();\n")),(0,o.kt)("p",null,"The following are the attributes that you can set:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"projection"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/enums/Projection.html"},"Projection")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Projection.ALBERS_USA"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The map projection which is a way to flatten a globe's surface into a plane in order to make a map")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"projectionOffset"),(0,o.kt)("td",{parentName:"tr",align:"left"},"[double, double]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The map projection offset value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"projectionScale"),(0,o.kt)("td",{parentName:"tr",align:"left"},"double"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Undefined.DOUBLE"),(0,o.kt)("td",{parentName:"tr",align:"left"},"How much the map will be scaled.")))),(0,o.kt)("h3",{id:"color-axes"},"Color axes"),(0,o.kt)("p",null,"A color axis is managing the coloring of the nodes."),(0,o.kt)("p",null,"A color axis manages how the map must be colored providing also a legend to see the color distribution for the choropleth chart."),(0,o.kt)("img",{src:(0,l.Z)("/img/colorAxis.png")}),(0,o.kt)("p",null,"There are 2 axis types for coloring the nodes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/ColorAxis.html"},"Color axis")," which extends the ",(0,o.kt)("a",{parentName:"li",href:"../../axes/CartesianLinearAxes"},"cartesian linear axis")," to repesent numbers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/ColorLogarithmicAxis.html"},"Color logarithmic axis")," which extends the ",(0,o.kt)("a",{parentName:"li",href:"../../axes/CartesianLogarithmicAxes"},"cartesian logarithmic axis")," to represent number by logarithmic base. ")),(0,o.kt)("p",null,"Here is an example how to create a color axis:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nChoroplethChart chart = new ChoroplethChart();\n// creates a color axis\n// scale id and axis kind are already defined  \nColorAxis axis = new ColorAxis(chart);\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis);\n")),(0,o.kt)("h4",{id:"options-2"},"Options"),(0,o.kt)("p",null,"The color axis allows to define a number of properties, used to display the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates a color axis\nColorAxis axis = new ColorAxis(chart);\n// sets options\naxis.setInterpolate(Interpolate.BLUES);\naxis.setQuantize(5);\n\nInterpolate interpolate = axis.getInterpolate();\n")),(0,o.kt)("p",null,"The following are the attributes that you can set:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"interpolate"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/enums/Interpolate.html"},"Interpolate")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Interpolate.BLUES"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The color interpolation of the scale.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"missingColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},"HtmlColor.TRANSPARENT"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The color to use the data is missing.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"quantize"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The amount of pieces to allow to split the color scale in N quantized equal bin.")))),(0,o.kt)("h4",{id:"interpolate-callback"},"Interpolate callback"),(0,o.kt)("p",null,"You can set the color interpolation of the scale at runtime, providing different colors for different features."),(0,o.kt)("img",{src:(0,l.Z)("/img/geoCustomInterpolation.png")}),(0,o.kt)("p",null,"The interpolate property can be set as ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/callbacks/InterpolateCallback.html"},"scriptable option"),", as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// uses the color list of tableau color scheme\nprivate static final List<IsColor> COLORS = TableauScheme.CLASSIC_AREA_RED_GREEN21.getColors();\n...\n...\n// creates a color axis\nColorAxis axis = new ColorAxis(chart);\n// sets callback\naxis.setInterpolate(new InterpolateCallback(){\n\n    /**\n     * Returns a color instance.\n     * \n     * @param normalizedValue normalized value of the data set\n     * @return a color instance\n     */ \n    @Override\n    public Object interpolate(double normalizedValue) {\n       int index = (int)Math.round(normalizedValue * (COLORS.size() - 1));\n       return COLORS.get(Math.min(index, COLORS.size() - 1));\n    }\n});\n")),(0,o.kt)("h4",{id:"legend"},"Legend"),(0,o.kt)("p",null,"You can configure the legend which is representing the color interpolation for choropleth chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates a color axis\nColorAxis axis = new ColorAxis(chart);\n// sets legend options\naxis.getLegend().setPosition(Position.TOP_RIGHT);\n\nPosition position = axis.getLegend().getPosition();\n")),(0,o.kt)("p",null,"The following are the attributes that you can set:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"align"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/enums/Align.html"},"Align")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Align.RIGHT"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The alignment of the legend on the chart area.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"indicatorWidth"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"10"),(0,o.kt)("td",{parentName:"tr",align:"left"},"how many pixels should be used for the color bar.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"length"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"100"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The length of the legend, in terms of value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"margin"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"8"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The margin pixels such that it doesn't stick to the edge of the chart.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"position"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/enums/Position.html"},"Position")," - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/geo/PositionPoint.html"},"PositionPoint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Position.BOTTOM_RIGHT"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The location of the legend on the chart area.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"width"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"50"),(0,o.kt)("td",{parentName:"tr",align:"left"},"How wide the scale is.",(0,o.kt)("br",null),"For a horizontal scale the height if a value less than 1 is given, is it assume to be a ratio of the corresponding chart area.")))))}m.isMDXComponent=!0}}]);