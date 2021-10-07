"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[322],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return a?r.createElement(d,l(l({ref:t},c),{},{components:a})):r.createElement(d,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3919:function(e,t,a){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,{b:function(){return r},Z:function(){return n}})},4996:function(e,t,a){a.d(t,{C:function(){return o},Z:function(){return l}});var r=a(2263),n=a(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,i=void 0!==l&&l,s=o.absolute,p=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(i)return t+a;var c=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+c:c}(o,a,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},3122:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=a(4996),i=["components"],s={id:"Overview",title:"Overview",hide_title:!0,sidebar_label:"Overview"},p=void 0,c={unversionedId:"Overview",id:"version-4.1/Overview",isDocsHomePage:!1,title:"Overview",description:"Why Charba",source:"@site/versioned_docs/version-4.1/Overview.md",sourceDirName:".",slug:"/Overview",permalink:"/Charba-Wiki/docs/4.1/Overview",tags:[],version:"4.1",frontMatter:{id:"Overview",title:"Overview",hide_title:!0,sidebar_label:"Overview"},sidebar:"version-4.1/docs",previous:{title:"Home",permalink:"/Charba-Wiki/docs/4.1/"},next:{title:"Requirements",permalink:"/Charba-Wiki/docs/4.1/Requirements"}},u=[{value:"Why Charba",id:"why-charba",children:[]},{value:"Features",id:"features",children:[]},{value:"Out-of-the-box",id:"out-of-the-box",children:[]}],h={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-charba"},"Why Charba"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," doesn't have any out of the box charting library."),(0,o.kt)("p",null,"There are some open source charting libraries for GWT available to be used but with some constraints or unclear items:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"internet connection needed"),(0,o.kt)("li",{parentName:"ul"},"open source license not completely clear, sometimes with some obligations like to add specific labels"),(0,o.kt)("li",{parentName:"ul"},"old packages not longer maintained")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/chart/interactive/docs/reference"},"Google Charts")," tools are powerful, simple to use, and free. Unfortunately if you see the terms of service in the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/chart/interactive/faq"},"support")," section, you can read that you can NOT use it in offline mode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Can I use charts offline?\n\nYour users' computers must have access to https://www.gstatic.com/charts/loader.js \nin order to use the interactive features of Google Charts. This is because the \nvisualization libraries that your page requires are loaded dynamically before you \nuse them. \nThe code for loading the appropriate library is part of the included script, and \nis called when you invoke the google.charts.load() method. Our terms of service do \nnot allow you to download the google.charts.load or google.visualization code to \nuse offline.\n\nCan I download and host the chart code locally, or on an intranet?\n\nSorry; our terms of service do not allow you to download and save or host the \ngoogle.charts.load or google.visualization code. \nHowever, if you don't need the interactivity of Google Charts, you can screenshot \nthe charts and use them as you wish.\n")),(0,o.kt)("p",null,"Other open-source libraries which provide charts for ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," have got sentences like the following one (even if they are available under open-source license):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," If you like this software and intend to use it we'd appreciate you letting us \n know, and possibly adding a link or reference back to our site. \n")),(0,o.kt)("p",null,"For all these reasons, ",(0,o.kt)("strong",{parentName:"p"},"Charba")," has been developed."),(0,o.kt)("p",null,"We spent time to evaluate some open-source charts javascript libraries and finally we landed on ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),(0,o.kt)("p",null,"Why?"),(0,o.kt)("p",null,"Because it's simple, clean and user-friendly. Perfect words to describe the ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," library."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," library is an HTML5 based JavaScript library for creating animated, interactive and customizable charts and graphs. With ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", you can easily get to visualize your mixed chart types without hassle, creating responsive web pages by default."),(0,o.kt)("p",null,"Even if ",(0,o.kt)("strong",{parentName:"p"},"Charba")," was born only as GWT library, as of version ",(0,o.kt)("strong",{parentName:"p"},"3"),", ",(0,o.kt)("strong",{parentName:"p"},"Charba")," has been changed in order to be used not only in GWT but also with other DOM frameworks, base on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure"),", like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hal/elemento"},"Elemento"),"."),(0,o.kt)("p",null,"As of version ",(0,o.kt)("strong",{parentName:"p"},"3"),", ",(0,o.kt)("strong",{parentName:"p"},"Charba")," has got an own DOM tree manager which allows to be independent from any other DOM tree manager (i.e. GWT, Elemental2 or Elemento) and it is providing a set of hooks in order to be use over those frameworks as well."),(0,o.kt)("img",{src:(0,l.Z)("/img/charbaDiagram.png")}),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," has implemented almost all ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," features, as following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default global options and scale, chart and scale options"),(0,o.kt)("li",{parentName:"ul"},"All ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/charts/"},"charts types"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Line"),(0,o.kt)("li",{parentName:"ul"},"Bar (and horizontal Bar)"),(0,o.kt)("li",{parentName:"ul"},"Radar"),(0,o.kt)("li",{parentName:"ul"},"Polar area"),(0,o.kt)("li",{parentName:"ul"},"Doughnut"),(0,o.kt)("li",{parentName:"ul"},"Pie"),(0,o.kt)("li",{parentName:"ul"},"Bubble"),(0,o.kt)("li",{parentName:"ul"},"Scatter"),(0,o.kt)("li",{parentName:"ul"},"Area"))),(0,o.kt)("li",{parentName:"ul"},"All ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/configuration/"},"options")," items",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Animation"),(0,o.kt)("li",{parentName:"ul"},"Layout"),(0,o.kt)("li",{parentName:"ul"},"Legend"),(0,o.kt)("li",{parentName:"ul"},"Title"),(0,o.kt)("li",{parentName:"ul"},"Tooltip"),(0,o.kt)("li",{parentName:"ul"},"Element"),(0,o.kt)("li",{parentName:"ul"},"Events  "))),(0,o.kt)("li",{parentName:"ul"},"All ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/axes/"},"axes")," elements (with all configuration items for labelling and styling)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Cartesian (linear, logarithmic, category, time, timeseries)"),(0,o.kt)("li",{parentName:"ul"},"Radial (linear)"))),(0,o.kt)("li",{parentName:"ul"},"Charts ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/developers/api.html"},"API")),(0,o.kt)("li",{parentName:"ul"},"All ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/developers/plugins.html"},"plugins")," capabilities"),(0,o.kt)("li",{parentName:"ul"},"Date adapters capabilities"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.chartjs.org/docs/latest/developers/charts.html"},"Controller")," capabilities to extend existing chart by own chart types."),(0,o.kt)("li",{parentName:"ul"},"Some ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," plugins, provided as ",(0,o.kt)("strong",{parentName:"li"},"Charba")," extensions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-datalabels"},"DataLabels")," which is a highly customizable plugin that displays labels on data for any type of charts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/emn178/chartjs-plugin-labels"},"Labels")," which is a light weight plugin to display labels on pie, doughnut and polar area chart. Original PieceLabel."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-zoom"},"Zoom")," which enables zooming and panning on chart."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-annotation"},"Annotation")," which draws lines and boxes on the chart area."))),(0,o.kt)("li",{parentName:"ul"},"Some ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," controllers, provided as ",(0,o.kt)("strong",{parentName:"li"},"Charba")," extensions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sgratzl/chartjs-chart-geo"},"Chart.js Geo")," which enables charting maps with legends, adding new chart types, choropleth and bubbleMap.")))),(0,o.kt)("h2",{id:"out-of-the-box"},"Out-of-the-box"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," has implemented some out-of-the-box features, leveraging on ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," features, mentioned above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Charts (by controllers)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Meter"),(0,o.kt)("li",{parentName:"ul"},"Gauge"))),(0,o.kt)("li",{parentName:"ul"},"Tiles builder to create patterns   "),(0,o.kt)("li",{parentName:"ul"},"Plugins",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Chart background color"),(0,o.kt)("li",{parentName:"ul"},"Chart cursor pointer to change cursor hovering chart elements"),(0,o.kt)("li",{parentName:"ul"},"Chart dataset items selector (for drill down and zooming)"),(0,o.kt)("li",{parentName:"ul"},"Color schemes which enables to pick the color combination for charts from the predefined or custom schemes"),(0,o.kt)("li",{parentName:"ul"},"HTML legend to create own legend changing styles and multiple lines"))),(0,o.kt)("li",{parentName:"ul"},"Callbacks",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Tick callback to define the amount of decimals digits of the axis number values when all datasets are hidden"),(0,o.kt)("li",{parentName:"ul"},"Legend callback to avoid to hide all datasets"),(0,o.kt)("li",{parentName:"ul"},"Datalabels listeners callback to change cursor hovering the labels"),(0,o.kt)("li",{parentName:"ul"},"Datalabels listeners callback to select the labels, leveraging on ",(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler")," "),(0,o.kt)("li",{parentName:"ul"},"Datalabels formatter callback to return the percentage as value to show in the chart")))))}m.isMDXComponent=!0}}]);