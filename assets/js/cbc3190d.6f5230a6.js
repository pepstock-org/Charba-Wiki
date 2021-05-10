(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),o=(a(0),a(209)),l=a(210),i={id:"Overview",title:"Overview",hide_title:!1,sidebar_label:"Overview"},c={unversionedId:"Overview",id:"Overview",isDocsHomePage:!1,title:"Overview",description:"Why Charba",source:"@site/docs/Overview.md",sourceDirName:".",slug:"/Overview",permalink:"/docs/Overview",version:"current",sidebar_label:"Overview",frontMatter:{id:"Overview",title:"Overview",hide_title:!1,sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Charba - J2CL and GWT Charts library based on CHART.JS",permalink:"/docs/"},next:{title:"Requirements",permalink:"/docs/Requirements"}},b=[{value:"Why Charba",id:"why-charba",children:[]},{value:"Features",id:"features",children:[]},{value:"Out-of-the-box",id:"out-of-the-box",children:[]}],s={toc:b};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"why-charba"},"Why Charba"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," doesn't have any out of the box charting library."),Object(o.b)("p",null,"There are some open source charting libraries for GWT available to be used but with some constraints or unclear items:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"internet connection needed"),Object(o.b)("li",{parentName:"ul"},"open source license not completely clear, sometimes with some obligations like to add specific labels"),Object(o.b)("li",{parentName:"ul"},"old packages not longer maintained")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://developers.google.com/chart/interactive/docs/reference"},"Google Charts")," tools are powerful, simple to use, and free. Unfortunately if you see the terms of service in the ",Object(o.b)("a",{parentName:"p",href:"https://developers.google.com/chart/interactive/faq"},"support")," section, you can read that you can NOT use it in offline mode."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Can I use charts offline?\n\nYour users' computers must have access to https://www.gstatic.com/charts/loader.js \nin order to use the interactive features of Google Charts. This is because the \nvisualization libraries that your page requires are loaded dynamically before you \nuse them. \nThe code for loading the appropriate library is part of the included script, and \nis called when you invoke the google.charts.load() method. Our terms of service do \nnot allow you to download the google.charts.load or google.visualization code to \nuse offline.\n\nCan I download and host the chart code locally, or on an intranet?\n\nSorry; our terms of service do not allow you to download and save or host the \ngoogle.charts.load or google.visualization code. \nHowever, if you don't need the interactivity of Google Charts, you can screenshot \nthe charts and use them as you wish.\n")),Object(o.b)("p",null,"Other open-source libraries which provide charts for ",Object(o.b)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," have got sentences like the following one (even if they are available under open-source license):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," If you like this software and intend to use it we'd appreciate you letting us \n know, and possibly adding a link or reference back to our site. \n")),Object(o.b)("p",null,"For all these reasons, ",Object(o.b)("strong",{parentName:"p"},"Charba")," has been developed."),Object(o.b)("p",null,"We spent time to evaluate some open-source charts javascript libraries and finally we landed on ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),Object(o.b)("p",null,"Why?"),Object(o.b)("p",null,"Because it's simple, clean and user-friendly. Perfect words to describe the ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," library."),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," library is an HTML5 based JavaScript library for creating animated, interactive and customizable charts and graphs. With ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", you can easily get to visualize your mixed chart types without hassle, creating responsive web pages by default."),Object(o.b)("p",null,"Even if ",Object(o.b)("strong",{parentName:"p"},"Charba")," was born only as GWT library, as of version ",Object(o.b)("strong",{parentName:"p"},"3"),", ",Object(o.b)("strong",{parentName:"p"},"Charba")," has been changed in order to be used not only in GWT but also with other DOM frameworks, base on ",Object(o.b)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure"),", like ",Object(o.b)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," or ",Object(o.b)("a",{parentName:"p",href:"https://github.com/hal/elemento"},"Elemento"),"."),Object(o.b)("p",null,"As of version ",Object(o.b)("strong",{parentName:"p"},"3"),", ",Object(o.b)("strong",{parentName:"p"},"Charba")," has got an own DOM tree manager which allows to be independent from any other DOM tree manager (i.e. GWT, Elemental2 or Elemento) and it is providing a set of hooks in order to be use over those frameworks as well."),Object(o.b)("img",{src:Object(l.a)("/img/charbaDiagram.png")}),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Charba")," has implemented almost all ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," features, as following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default global options and scale, chart and scale options"),Object(o.b)("li",{parentName:"ul"},"All ",Object(o.b)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/charts/"},"charts types"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Line"),Object(o.b)("li",{parentName:"ul"},"Bar (and horizontal Bar)"),Object(o.b)("li",{parentName:"ul"},"Radar"),Object(o.b)("li",{parentName:"ul"},"Polar area"),Object(o.b)("li",{parentName:"ul"},"Doughnut"),Object(o.b)("li",{parentName:"ul"},"Pie"),Object(o.b)("li",{parentName:"ul"},"Bubble"),Object(o.b)("li",{parentName:"ul"},"Scatter"),Object(o.b)("li",{parentName:"ul"},"Area"))),Object(o.b)("li",{parentName:"ul"},"All ",Object(o.b)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/configuration/"},"options")," items",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Animation"),Object(o.b)("li",{parentName:"ul"},"Layout"),Object(o.b)("li",{parentName:"ul"},"Legend"),Object(o.b)("li",{parentName:"ul"},"Title"),Object(o.b)("li",{parentName:"ul"},"Tooltip"),Object(o.b)("li",{parentName:"ul"},"Element"),Object(o.b)("li",{parentName:"ul"},"Events  "))),Object(o.b)("li",{parentName:"ul"},"All ",Object(o.b)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/axes/"},"axes")," elements (with all configuration items for labelling and styling)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Cartesian (linear, logarithmic, category, time, timeseries)"),Object(o.b)("li",{parentName:"ul"},"Radial (linear)"))),Object(o.b)("li",{parentName:"ul"},"Charts ",Object(o.b)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/developers/api.html"},"API")),Object(o.b)("li",{parentName:"ul"},"All ",Object(o.b)("a",{parentName:"li",href:"http://www.chartjs.org/docs/latest/developers/plugins.html"},"plugins")," capabilities"),Object(o.b)("li",{parentName:"ul"},"Date adapters capabilities"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.chartjs.org/docs/latest/developers/charts.html"},"Controller")," capabilities to extend existing chart by own chart types."),Object(o.b)("li",{parentName:"ul"},"Some ",Object(o.b)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," plugins, provided as ",Object(o.b)("strong",{parentName:"li"},"Charba")," extensions:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-datalabels"},"DataLabels")," which is a highly customizable plugin that displays labels on data for any type of charts."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/emn178/chartjs-plugin-labels"},"Labels")," which is a light weight plugin to display labels on pie, doughnut and polar area chart. Original PieceLabel."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-zoom"},"Zoom")," which enables zooming and panning on chart."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-annotation"},"Annotation")," which draws lines and boxes on the chart area.")))),Object(o.b)("h2",{id:"out-of-the-box"},"Out-of-the-box"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Charba")," has implemented some out-of-the-box features, leveraging on ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," features, mentioned above:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Charts (by controllers)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Meter"),Object(o.b)("li",{parentName:"ul"},"Gauge"))),Object(o.b)("li",{parentName:"ul"},"Tiles builder to create patterns   "),Object(o.b)("li",{parentName:"ul"},"Plugins",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Chart background color"),Object(o.b)("li",{parentName:"ul"},"Chart cursor pointer to change cursor hovering chart elements"),Object(o.b)("li",{parentName:"ul"},"Chart dataset items selector (for drill down and zooming)"),Object(o.b)("li",{parentName:"ul"},"Color schemes which enables to pick the color combination for charts from the predefined or custom schemes"),Object(o.b)("li",{parentName:"ul"},"HTML legend to create own legend changing styles and multiple lines"))),Object(o.b)("li",{parentName:"ul"},"Callbacks",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Tick callback to define the amount of decimals digits of the axis number values when all datasets are hidden"),Object(o.b)("li",{parentName:"ul"},"Legend callback to avoid to hide all datasets"),Object(o.b)("li",{parentName:"ul"},"Datalabels listeners callback to change cursor hovering the labels"),Object(o.b)("li",{parentName:"ul"},"Datalabels listeners callback to select the labels, leveraging on ",Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html"},"DatasetSelectionEventHandler")," "),Object(o.b)("li",{parentName:"ul"},"Datalabels formatter callback to return the percentage as value to show in the chart")))))}p.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.a.createElement(m,i(i({ref:t},b),{},{components:a})):n.a.createElement(m,i({ref:t},b))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<o;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var r=a(16),n=a(211);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,i=void 0!==l&&l,c=o.absolute,b=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(i)return t+a;var s=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+s:s}(o,a,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},211:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))}}]);