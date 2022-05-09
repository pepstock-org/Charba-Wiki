"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[16882],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),h=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=h(a),m=n,d=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var h=2;h<l;h++)o[h]=a[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85418:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return h},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=a(44996),i=["components"],s={id:"Overview",title:"Overview",hide_title:!0,sidebar_label:"Overview"},h=void 0,p={unversionedId:"Overview",id:"Overview",title:"Overview",description:"Why Charba",source:"@site/docs/Overview.md",sourceDirName:".",slug:"/Overview",permalink:"/Charba-Wiki/docs/next/Overview",draft:!1,tags:[],version:"current",frontMatter:{id:"Overview",title:"Overview",hide_title:!0,sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Home",permalink:"/Charba-Wiki/docs/next/"},next:{title:"Requirements",permalink:"/Charba-Wiki/docs/next/Requirements"}},c={},u=[{value:"Why Charba",id:"why-charba",level:2},{value:"Features",id:"features",level:2},{value:"Out-of-the-box",id:"out-of-the-box",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"why-charba"},"Why Charba"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," doesn't have any out of the box charting library."),(0,l.kt)("p",null,"There are some open source charting libraries for GWT available to be used but with some constraints or unclear items:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"internet connection needed"),(0,l.kt)("li",{parentName:"ul"},"open source license not completely clear, sometimes with some obligations like to add specific labels"),(0,l.kt)("li",{parentName:"ul"},"old packages not longer maintained")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/chart/interactive/docs/reference"},"Google Charts")," tools are powerful, simple to use, and free. Unfortunately if you see the terms of service in the ",(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/chart/interactive/faq"},"support")," section, you can read that you can NOT use it in offline mode."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Can I use charts offline?\n\nYour users' computers must have access to https://www.gstatic.com/charts/loader.js \nin order to use the interactive features of Google Charts. This is because the \nvisualization libraries that your page requires are loaded dynamically before you \nuse them. \nThe code for loading the appropriate library is part of the included script, and \nis called when you invoke the google.charts.load() method. Our terms of service do \nnot allow you to download the google.charts.load or google.visualization code to \nuse offline.\n\nCan I download and host the chart code locally, or on an intranet?\n\nSorry; our terms of service do not allow you to download and save or host the \ngoogle.charts.load or google.visualization code. \nHowever, if you don't need the interactivity of Google Charts, you can screenshot \nthe charts and use them as you wish.\n")),(0,l.kt)("p",null,"Other open-source libraries which provide charts for ",(0,l.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," have got sentences like the following one (even if they are available under open-source license):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," If you like this software and intend to use it we'd appreciate you letting us \n know, and possibly adding a link or reference back to our site. \n")),(0,l.kt)("p",null,"For all these reasons, ",(0,l.kt)("strong",{parentName:"p"},"Charba")," has been developed."),(0,l.kt)("p",null,"We spent time to evaluate some open-source charts javascript libraries and finally we landed on ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),(0,l.kt)("p",null,"Why?"),(0,l.kt)("p",null,"Because it's simple, clean and user-friendly. Perfect words to describe the ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," library."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," library is an HTML5 based JavaScript library for creating animated, interactive and customizable charts and graphs. With ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", you can easily get to visualize your mixed chart types without hassle, creating responsive web pages by default."),(0,l.kt)("p",null,"Even if ",(0,l.kt)("strong",{parentName:"p"},"Charba")," was born only as GWT library, as of version ",(0,l.kt)("strong",{parentName:"p"},"3"),", ",(0,l.kt)("strong",{parentName:"p"},"Charba")," has been changed in order to be used not only in GWT but also with other DOM frameworks, base on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure"),", like ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hal/elemento"},"Elemento"),"."),(0,l.kt)("p",null,"As of version ",(0,l.kt)("strong",{parentName:"p"},"3"),", ",(0,l.kt)("strong",{parentName:"p"},"Charba")," has got an own DOM tree manager which allows to be independent from any other DOM tree manager (i.e. GWT, Elemental2 or Elemento) and it is providing a set of hooks in order to be use over those frameworks as well."),(0,l.kt)("img",{src:(0,o.Z)("/img/charbaDiagram.png")}),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," has implemented almost all ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," features, as following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default global options and scale, chart and scale options"),(0,l.kt)("li",{parentName:"ul"},"All ",(0,l.kt)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/charts/"},"charts types"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Line"),(0,l.kt)("li",{parentName:"ul"},"Bar (and horizontal Bar)"),(0,l.kt)("li",{parentName:"ul"},"Radar"),(0,l.kt)("li",{parentName:"ul"},"Polar area"),(0,l.kt)("li",{parentName:"ul"},"Doughnut"),(0,l.kt)("li",{parentName:"ul"},"Pie"),(0,l.kt)("li",{parentName:"ul"},"Bubble"),(0,l.kt)("li",{parentName:"ul"},"Scatter"),(0,l.kt)("li",{parentName:"ul"},"Area"))),(0,l.kt)("li",{parentName:"ul"},"All ",(0,l.kt)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/configuration/"},"options")," items",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Animation"),(0,l.kt)("li",{parentName:"ul"},"Layout"),(0,l.kt)("li",{parentName:"ul"},"Legend"),(0,l.kt)("li",{parentName:"ul"},"Title"),(0,l.kt)("li",{parentName:"ul"},"Tooltip"),(0,l.kt)("li",{parentName:"ul"},"Element"),(0,l.kt)("li",{parentName:"ul"},"Events  "))),(0,l.kt)("li",{parentName:"ul"},"All ",(0,l.kt)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/axes/"},"axes")," elements (with all configuration items for labelling and styling)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Cartesian (linear, logarithmic, category, time, timeseries)"),(0,l.kt)("li",{parentName:"ul"},"Radial (linear)"))),(0,l.kt)("li",{parentName:"ul"},"Charts ",(0,l.kt)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/developers/api.html"},"API")),(0,l.kt)("li",{parentName:"ul"},"All ",(0,l.kt)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/developers/plugins.html"},"plugins")," capabilities"),(0,l.kt)("li",{parentName:"ul"},"Date adapters capabilities"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.chartjs.org/docs/latest/developers/charts.html"},"Controller")," capabilities to extend existing chart by own chart types."),(0,l.kt)("li",{parentName:"ul"},"Some ",(0,l.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," plugins, provided as ",(0,l.kt)("strong",{parentName:"li"},"Charba")," extensions:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-annotation"},"Annotation")," which draws lines and boxes on the chart area."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-datalabels"},"DataLabels")," which is a highly customizable plugin that displays labels on data for any type of charts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kurkle/chartjs-plugin-gradient"},"Gradient")," which is a light weight plugin to apply gradients to the datasets by data values."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/emn178/chartjs-plugin-labels"},"Labels")," which is a light weight plugin to display labels on pie, doughnut and polar area chart. Original PieceLabel."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-zoom"},"Zoom")," which enables zooming and panning on chart."))),(0,l.kt)("li",{parentName:"ul"},"Some ",(0,l.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," controllers, provided as ",(0,l.kt)("strong",{parentName:"li"},"Charba")," extensions:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sgratzl/chartjs-chart-geo"},"Chart.js Geo")," which enables charting maps with legends, adding new chart types, choropleth and bubbleMap."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kurkle/chartjs-chart-treemap"},"Chart.js Treemap")," which enables treemap charts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kurkle/chartjs-chart-matrix"},"Chart.js Matrix")," which enables matrix charts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kurkle/chartjs-chart-sankey"},"Chart.js Sankey")," which enables a type of flow diagram in which the width of the arrows is proportional to the flow rate.")))),(0,l.kt)("h2",{id:"out-of-the-box"},"Out-of-the-box"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," has implemented some out-of-the-box features, leveraging on ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," features, mentioned above:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Charts (by controllers)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Meter"),(0,l.kt)("li",{parentName:"ul"},"Gauge"))),(0,l.kt)("li",{parentName:"ul"},"Tiles builder to create patterns   "),(0,l.kt)("li",{parentName:"ul"},"Plugins",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Chart background color"),(0,l.kt)("li",{parentName:"ul"},"Chart cursor pointer to change cursor hovering chart elements"),(0,l.kt)("li",{parentName:"ul"},"Chart dataset items selector (for drill down and zooming)"),(0,l.kt)("li",{parentName:"ul"},"Color schemes which enables to pick the color combination for charts from the predefined or custom schemes"),(0,l.kt)("li",{parentName:"ul"},"HTML legend to create own legend changing styles and multiple lines"),(0,l.kt)("li",{parentName:"ul"},"Crosshair to show a crosshair and relative axes values on the chart."))),(0,l.kt)("li",{parentName:"ul"},"Callbacks",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Tick callback to define the amount of decimals digits of the axis number values when all datasets are hidden"),(0,l.kt)("li",{parentName:"ul"},"Legend callback to avoid to hide all datasets"),(0,l.kt)("li",{parentName:"ul"},"Datalabels listeners callback to change cursor hovering the labels"),(0,l.kt)("li",{parentName:"ul"},"Datalabels listeners callback to select the labels, leveraging on ",(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler")," "),(0,l.kt)("li",{parentName:"ul"},"Datalabels formatter callback to return the percentage as value to show in the chart")))))}d.isMDXComponent=!0}}]);