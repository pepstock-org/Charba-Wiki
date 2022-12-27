"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[72518],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=l(o),m=r,g=h["".concat(i,".").concat(m)]||h[m]||u[m]||n;return o?a.createElement(g,s(s({ref:t},c),{},{components:o})):a.createElement(g,s({ref:t},c))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[h]="string"==typeof e?e:r,s[1]=p;for(var l=2;l<n;l++)s[l]=o[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},49797:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=o(87462),r=(o(67294),o(3905)),n=o(44996);const s={id:"Geo",title:"Introduction",hide_title:!0,sidebar_label:"Introduction"},p=void 0,i={unversionedId:"charts/geo/Geo",id:"version-5.6/charts/geo/Geo",title:"Introduction",description:"",source:"@site/versioned_docs/version-5.6/charts/geo/Introduction.md",sourceDirName:"charts/geo",slug:"/charts/geo/Geo",permalink:"/Charba-Wiki/docs/5.6/charts/geo/Geo",draft:!1,tags:[],version:"5.6",frontMatter:{id:"Geo",title:"Introduction",hide_title:!0,sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Time series",permalink:"/Charba-Wiki/docs/5.6/charts/ChartTimeSeries"},next:{title:"Choropleth",permalink:"/Charba-Wiki/docs/5.6/charts/geo/ChartChoropleth"}},l={},c=[{value:"Geographic map charts",id:"geographic-map-charts",level:2},{value:"Maps",id:"maps",level:2},{value:"Loading",id:"loading",level:3},{value:"Features",id:"features",level:2},{value:"Labels",id:"labels",level:3}],h={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"geographic-map-charts"},"Geographic map charts"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable some geographic map chart, leveraging on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sgratzl/chartjs-chart-geo"},"Chart.js Geo"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sgratzl/chartjs-chart-geo"},"Chart.js Geo")," is ",(0,r.kt)("em",{parentName:"p"},"native javascript")," implementation and ",(0,r.kt)("strong",{parentName:"p"},"Charba")," provides the wrapper in order to be able to use it."),(0,r.kt)("img",{src:(0,n.Z)("/img/choroplethEarth.png")}),(0,r.kt)("p",null,"Currently the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sgratzl/chartjs-chart-geo"},"Chart.js Geo"),", ready to use inside ",(0,r.kt)("strong",{parentName:"p"},"Charba"),", can provide the following charts types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ChartChoropleth"},"Choropleth")," which can be used to render maps with the area filled according to some numerical value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ChartBubbleMap"},"BubbleMap"),", as know as Proportional Symbol, which is used to render maps with dots that are scaled according to some numerical value. ")),(0,r.kt)("h2",{id:"maps"},"Maps"),(0,r.kt)("p",null,"The maps used to render the chart must be based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/topojson/topojson"},"TopoJSON")," definitions."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/topojson/topojson"},"TopoJSON")," is an extension of GeoJSON that encodes topology. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/topojson/topojson"},"TopoJSON")," is a topological geospatial data format. In contrast to a geometry, where each shape is encoded with separate (and often redundant) arrays of coordinates, a topology encodes sequences of coordinates in line fragments called arcs that can be shared. For example, the border between 2 states is an arc that is shared by both polygons."),(0,r.kt)("p",null,"The main benefit of a topology is that it improves shape simplification by avoiding artifacts that would be caused by simplifying shapes independently. It also enables applications like map coloring and selective meshing, and makes the format more compact by removing redundant coordinates. "),(0,r.kt)("p",null,"Here is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/topojson/topojson-specification"},"TopoJSON specification")),(0,r.kt)("p",null,"However, ",(0,r.kt)("strong",{parentName:"p"},"Charba")," does not include any ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/topojson/topojson"},"TopoJSON")," files itself. Some useful resources are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"US map: ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/us-atlas"},"https://www.npmjs.com/package/us-atlas")),(0,r.kt)("li",{parentName:"ul"},"World map: ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/world-atlas"},"https://www.npmjs.com/package/world-atlas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/topojson/topojson"},"TopoJSON")," collection: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/deldersveld/topojson"},"https://github.com/deldersveld/topojson"))),(0,r.kt)("h3",{id:"loading"},"Loading"),(0,r.kt)("p",null,"The maps can be loaded:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"at runtime, invoking some HTTP services in order to get the needed ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/topojson/topojson"},"TopoJSON")," definitions."),(0,r.kt)("li",{parentName:"ul"},"at project level, by ",(0,r.kt)("a",{parentName:"li",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource"},"GWT Web toolkit clientBundle"),", if you are developing a ",(0,r.kt)("a",{parentName:"li",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," project."),(0,r.kt)("li",{parentName:"ul"},"at project level, by the implementation of a ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/resources/AbstractInjectableResource.html"},"AbstractInjectableResource")," class.")),(0,r.kt)("p",null,"An example how to load a map by ",(0,r.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource"},"GWT Web toolkit clientBundle")," is the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"take the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/topojson/topojson"},"TopoJSON")," definition and store in your project in a resource folder."),(0,r.kt)("li",{parentName:"ol"},"create a GWT ",(0,r.kt)("a",{parentName:"li",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html"},"ClientBundle")," to get the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/topojson/topojson"},"TopoJSON")," definition as GWT ",(0,r.kt)("a",{parentName:"li",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource"},"TextResource")),(0,r.kt)("li",{parentName:"ol"},"use ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/GeoUtil.html"},"GeoUtil")," to get a ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/TopoJson.html"},"TopoJson")," instance.")),(0,r.kt)("p",null,"An example how to load a map by ",(0,r.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource"},"GWT Web toolkit clientBundle")," is the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get the world map JSON file from ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"},"NPMjs")," and store it in your project, in this example we are using the ",(0,r.kt)("strong",{parentName:"li"},"Charba")," showcase paths:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/src/org/pepstock/charba/showcase/client/resources/topojson/countries-50m.json")))),(0,r.kt)("li",{parentName:"ul"},"create a client bundle (called in this example ",(0,r.kt)("inlineCode",{parentName:"li"},"org.pepstock.charba.showcase.client.resources.MyResources.java"),") with the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/topojson/topojson"},"TopoJSON")," map reference:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package org.pepstock.charba.showcase.client.resources;\n\nimport com.google.gwt.core.client.GWT;\nimport com.google.gwt.resources.client.ClientBundle;\nimport com.google.gwt.resources.client.TextResource;\n\npublic interface MyResources extends ClientBundle {\n    \n    public static final MyResources INSTANCE = GWT.create(MyResources.class);\n\n    @Source("topojson/countries-50m.json")\n    TextResource topojsonEarth();\n\n}    \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/GeoUtil.html"},"GeoUtil")," to get a ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/TopoJson.html"},"TopoJson")," instance.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// gets the topoJSON map as string\nString topoJsonText = MyResources.INSTANCE.topojsonEarth().getText();\n// creates a topoJSON object, needed for further computations\nTopoJson world = GeoUtil.createTopoJson(topoJsonText);\n")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"A topology is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/topojson/topojson"},"TopoJSON")," object where the type member\u2019s value is the topology."),(0,r.kt)("p",null,"A topology must have a member with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"objects")," whose value is another object. The value of each member of this object is a geometry object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides methods, by ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/GeoUtil.html"},"GeoUtil"),", to parse the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/topojson/topojson"},"TopoJSON")," definition and provide a list of ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/Feature.html"},"Features")," which are mapping the topology needed to render in the chart."),(0,r.kt)("p",null,"Every ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/topojson/topojson"},"TopoJSON")," definition object could be built with a different name spaces, therefore the node name to use as root of object must be provided by the developer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// gets the topoJSON map as string\nString topoJsonText = MyResources.INSTANCE.topojsonEarth().getText();\n// creates a topoJSON object, needed for further computations\nTopoJson world = GeoUtil.createTopoJson(topoJsonText);\n// the node name in "objects" one where the topology\n// are stored is "countries" \nList<Feature> features = GeoUtil.features(world, "countries");\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/Feature.html"},"Feature")," contains the properties of the topology."),(0,r.kt)("p",null,"Even in this case, the properties names are not standard. Every feature can have own property names."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' // defines the property name "name"\n private static final Key NAME = Key.create("name");\n... \n// gets the topoJSON map as string\nString topoJsonText = MyResources.INSTANCE.topojsonEarth().getText();\n// creates a topoJSON object, needed for further computations\nTopoJson world = GeoUtil.createTopoJson(topoJsonText);\n// the node name in "objects" one where the topology\n// are stored is "countries" \nList<Feature> features = GeoUtil.features(world, "countries");\n\nfor (Feature feature: features) {\n    // gets the name of the country by NAME key instance\n    String countryName = feature.getStringProperty(NAME);\n    ...\n}\n')),(0,r.kt)("h3",{id:"labels"},"Labels"),(0,r.kt)("p",null,"Usually the labels to display for the geographic map chart are stored in the properties of a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/Feature.html"},"Feature"),", for instance the name of the country, state, regions, provinces, cities and so on. As said above, the properties names are not fixed for all topologies and every topology can have own properties."),(0,r.kt)("p",null,"To improve to the access of topology definitions and to help the labels creation, ",(0,r.kt)("strong",{parentName:"p"},"Charba")," provides methods, by ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/geo/GeoUtil.html"},"GeoUtil"),", which creates a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/data/Labels.html"},"Labels")," to set to the chart, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' // defines the property name "name"\n private static final Key NAME = Key.create("name");\n... \n// gets the topoJSON map as string\nString topoJsonText = MyResources.INSTANCE.topojsonEarth().getText();\n// creates a topoJSON object, needed for further computations\nTopoJson world = GeoUtil.createTopoJson(topoJsonText);\n// the node name in "objects" one where the topology\n// are stored is "countries" \nList<Feature> features = GeoUtil.features(world, "countries");\n// creates a labels object with all countries names.\nLabels labels = GeoUtil.loadLabels(features, NAME);\n// sets labels to chart\nchart.getData().setLabels(labels);\n')),(0,r.kt)("p",null,"The labels enables the tooltip to shows the property related to the topology that you are representing."),(0,r.kt)("img",{src:(0,n.Z)("/img/geoLabels.png")}))}u.isMDXComponent=!0}}]);