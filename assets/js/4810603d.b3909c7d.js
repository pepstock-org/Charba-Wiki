"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[14164],{95788:(e,a,t)=>{t.d(a,{Iu:()=>p,yg:()=>m});var r=t(11504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),h=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=h(e.components);return r.createElement(s.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=h(t),u=n,m=g["".concat(s,".").concat(u)]||g[u]||c[u]||l;return t?r.createElement(m,o(o({ref:a},p),{},{components:t})):r.createElement(m,o({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[g]="string"==typeof e?e:n,o[1]=i;for(var h=2;h<l;h++)o[h]=t[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89336:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(45072),n=(t(11504),t(95788)),l=t(70964);const o={id:"Overview",title:"Overview",hide_title:!0,sidebar_label:"Overview"},i=void 0,s={unversionedId:"Overview",id:"version-5.4/Overview",title:"Overview",description:"Why Charba",source:"@site/versioned_docs/version-5.4/Overview.md",sourceDirName:".",slug:"/Overview",permalink:"/Charba-Wiki/docs/5.4/Overview",draft:!1,tags:[],version:"5.4",frontMatter:{id:"Overview",title:"Overview",hide_title:!0,sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Home",permalink:"/Charba-Wiki/docs/5.4/"},next:{title:"Requirements",permalink:"/Charba-Wiki/docs/5.4/Requirements"}},h={},p=[{value:"Why Charba",id:"why-charba",level:2},{value:"Features",id:"features",level:2},{value:"Out-of-the-box",id:"out-of-the-box",level:2}],g={toc:p},c="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(c,(0,r.c)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"why-charba"},"Why Charba"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," doesn't have any out of the box charting library."),(0,n.yg)("p",null,"There are some open source charting libraries for GWT available to be used but with some constraints or unclear items:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"internet connection needed"),(0,n.yg)("li",{parentName:"ul"},"open source license not completely clear, sometimes with some obligations like to add specific labels"),(0,n.yg)("li",{parentName:"ul"},"old packages not longer maintained")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://developers.google.com/chart/interactive/docs/reference"},"Google Charts")," tools are powerful, simple to use, and free. Unfortunately if you see the terms of service in the ",(0,n.yg)("a",{parentName:"p",href:"https://developers.google.com/chart/interactive/faq"},"support")," section, you can read that you can NOT use it in offline mode."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"Can I use charts offline?\n\nYour users' computers must have access to https://www.gstatic.com/charts/loader.js \nin order to use the interactive features of Google Charts. This is because the \nvisualization libraries that your page requires are loaded dynamically before you \nuse them. \nThe code for loading the appropriate library is part of the included script, and \nis called when you invoke the google.charts.load() method. Our terms of service do \nnot allow you to download the google.charts.load or google.visualization code to \nuse offline.\n\nCan I download and host the chart code locally, or on an intranet?\n\nSorry; our terms of service do not allow you to download and save or host the \ngoogle.charts.load or google.visualization code. \nHowever, if you don't need the interactivity of Google Charts, you can screenshot \nthe charts and use them as you wish.\n")),(0,n.yg)("p",null,"Other open-source libraries which provide charts for ",(0,n.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," have got sentences like the following one (even if they are available under open-source license):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"}," If you like this software and intend to use it we'd appreciate you letting us \n know, and possibly adding a link or reference back to our site. \n")),(0,n.yg)("p",null,"For all these reasons, ",(0,n.yg)("strong",{parentName:"p"},"Charba")," has been developed."),(0,n.yg)("p",null,"We spent time to evaluate some open-source charts javascript libraries and finally we landed on ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),(0,n.yg)("p",null,"Why?"),(0,n.yg)("p",null,"Because it's simple, clean and user-friendly. Perfect words to describe the ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," library."),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," library is an HTML5 based JavaScript library for creating animated, interactive and customizable charts and graphs. With ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", you can easily get to visualize your mixed chart types without hassle, creating responsive web pages by default."),(0,n.yg)("p",null,"Even if ",(0,n.yg)("strong",{parentName:"p"},"Charba")," was born only as GWT library, as of version ",(0,n.yg)("strong",{parentName:"p"},"3"),", ",(0,n.yg)("strong",{parentName:"p"},"Charba")," has been changed in order to be used not only in GWT but also with other DOM frameworks, base on ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure"),", like ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," or ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/hal/elemento"},"Elemento"),"."),(0,n.yg)("p",null,"As of version ",(0,n.yg)("strong",{parentName:"p"},"3"),", ",(0,n.yg)("strong",{parentName:"p"},"Charba")," has got an own DOM tree manager which allows to be independent from any other DOM tree manager (i.e. GWT, Elemental2 or Elemento) and it is providing a set of hooks in order to be use over those frameworks as well."),(0,n.yg)("img",{src:(0,l.c)("/img/charbaDiagram.png")}),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," has implemented almost all ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," features, as following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Default global options and scale, chart and scale options"),(0,n.yg)("li",{parentName:"ul"},"All ",(0,n.yg)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/charts/"},"charts types"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Line"),(0,n.yg)("li",{parentName:"ul"},"Bar (and horizontal Bar)"),(0,n.yg)("li",{parentName:"ul"},"Radar"),(0,n.yg)("li",{parentName:"ul"},"Polar area"),(0,n.yg)("li",{parentName:"ul"},"Doughnut"),(0,n.yg)("li",{parentName:"ul"},"Pie"),(0,n.yg)("li",{parentName:"ul"},"Bubble"),(0,n.yg)("li",{parentName:"ul"},"Scatter"),(0,n.yg)("li",{parentName:"ul"},"Area"))),(0,n.yg)("li",{parentName:"ul"},"All ",(0,n.yg)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/configuration/"},"options")," items",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Animation"),(0,n.yg)("li",{parentName:"ul"},"Layout"),(0,n.yg)("li",{parentName:"ul"},"Legend"),(0,n.yg)("li",{parentName:"ul"},"Title"),(0,n.yg)("li",{parentName:"ul"},"Tooltip"),(0,n.yg)("li",{parentName:"ul"},"Element"),(0,n.yg)("li",{parentName:"ul"},"Events  "))),(0,n.yg)("li",{parentName:"ul"},"All ",(0,n.yg)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/axes/"},"axes")," elements (with all configuration items for labelling and styling)",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Cartesian (linear, logarithmic, category, time, timeseries)"),(0,n.yg)("li",{parentName:"ul"},"Radial (linear)"))),(0,n.yg)("li",{parentName:"ul"},"Charts ",(0,n.yg)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/developers/api.html"},"API")),(0,n.yg)("li",{parentName:"ul"},"All ",(0,n.yg)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/developers/plugins.html"},"plugins")," capabilities"),(0,n.yg)("li",{parentName:"ul"},"Date adapters capabilities"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.chartjs.org/docs/latest/developers/charts.html"},"Controller")," capabilities to extend existing chart by own chart types."),(0,n.yg)("li",{parentName:"ul"},"Some ",(0,n.yg)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," plugins, provided as ",(0,n.yg)("strong",{parentName:"li"},"Charba")," extensions:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-annotation"},"Annotation")," which draws lines and boxes on the chart area."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-datalabels"},"DataLabels")," which is a highly customizable plugin that displays labels on data for any type of charts."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/kurkle/chartjs-plugin-gradient"},"Gradient")," which is a light weight plugin to apply gradients to the datasets by data values."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/emn178/chartjs-plugin-labels"},"Labels")," which is a light weight plugin to display labels on pie, doughnut and polar area chart. Original PieceLabel."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-zoom"},"Zoom")," which enables zooming and panning on chart."))),(0,n.yg)("li",{parentName:"ul"},"Some ",(0,n.yg)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," controllers, provided as ",(0,n.yg)("strong",{parentName:"li"},"Charba")," extensions:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/sgratzl/chartjs-chart-geo"},"Chart.js Geo")," which enables charting maps with legends, adding new chart types, choropleth and bubbleMap."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/kurkle/chartjs-chart-treemap"},"Chart.js Treemap")," which enables treemap charts."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/kurkle/chartjs-chart-matrix"},"Chart.js Matrix")," which enables matrix charts."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/kurkle/chartjs-chart-sankey"},"Chart.js Sankey")," which enables a type of flow diagram in which the width of the arrows is proportional to the flow rate.")))),(0,n.yg)("h2",{id:"out-of-the-box"},"Out-of-the-box"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," has implemented some out-of-the-box features, leveraging on ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," features, mentioned above:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Charts (by controllers)",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Meter"),(0,n.yg)("li",{parentName:"ul"},"Gauge"))),(0,n.yg)("li",{parentName:"ul"},"Tiles builder to create patterns   "),(0,n.yg)("li",{parentName:"ul"},"Plugins",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Chart background color"),(0,n.yg)("li",{parentName:"ul"},"Chart cursor pointer to change cursor hovering chart elements"),(0,n.yg)("li",{parentName:"ul"},"Chart dataset items selector (for drill down and zooming)"),(0,n.yg)("li",{parentName:"ul"},"Color schemes which enables to pick the color combination for charts from the predefined or custom schemes"),(0,n.yg)("li",{parentName:"ul"},"HTML legend to create own legend changing styles and multiple lines"),(0,n.yg)("li",{parentName:"ul"},"Crosshair to show a crosshair and relative axes values on the chart."))),(0,n.yg)("li",{parentName:"ul"},"Callbacks",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Tick callback to define the amount of decimals digits of the axis number values when all datasets are hidden"),(0,n.yg)("li",{parentName:"ul"},"Legend callback to avoid to hide all datasets"),(0,n.yg)("li",{parentName:"ul"},"Datalabels listeners callback to change cursor hovering the labels"),(0,n.yg)("li",{parentName:"ul"},"Datalabels listeners callback to select the labels, leveraging on ",(0,n.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler")," "),(0,n.yg)("li",{parentName:"ul"},"Datalabels formatter callback to return the percentage as value to show in the chart")))))}u.isMDXComponent=!0}}]);