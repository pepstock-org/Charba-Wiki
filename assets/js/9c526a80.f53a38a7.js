(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),l=(a(0),a(209)),c=a(210),o={id:"ChartMeter",title:"Meter chart",hide_title:!0,sidebar_label:"Meter"},i={unversionedId:"ChartMeter",id:"version-3.3/ChartMeter",isDocsHomePage:!1,title:"Meter chart",description:"Meter chart",source:"@site/versioned_docs/version-3.3/ChartMeter.md",sourceDirName:".",slug:"/ChartMeter",permalink:"/docs/3.3/ChartMeter",version:"3.3",sidebar_label:"Meter",frontMatter:{id:"ChartMeter",title:"Meter chart",hide_title:!0,sidebar_label:"Meter"},sidebar:"version-3.3/docs",previous:{title:"Time series chart",permalink:"/docs/3.3/ChartTimeSeries"},next:{title:"Gauge chart",permalink:"/docs/3.3/ChartGauge"}},b=[{value:"Meter chart",id:"meter-chart",children:[]},{value:"Dataset",id:"dataset",children:[]},{value:"Data structure",id:"data-structure",children:[]},{value:"Options",id:"options",children:[]},{value:"Callback",id:"callback",children:[]}],p={toc:b};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"meter-chart"},"Meter chart"),Object(l.b)("p",null,"A ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/MeterChart.html"},"meter chart")," (also for ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/gwt/widgets/MeterChartWidget.html"},"meter chart widget")," for GWT) is ",Object(l.b)("strong",{parentName:"p"},"Charba")," extension of ",Object(l.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," doughnut chart, by a ",Object(l.b)("a",{parentName:"p",href:"Controllers"},"controller")," implementation."),Object(l.b)("p",null,"The meter charts are divided into 2 segments, the arc of each segment shows the proportional value of data."),Object(l.b)("img",{src:Object(c.a)("/img/meter.png")}),Object(l.b)("p",null,"This chart doesn't allow any legend, hover, layout and tooltips components."),Object(l.b)("h2",{id:"dataset"},"Dataset"),Object(l.b)("p",null,"The meter chart allows a number of properties to be specified for the ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/MeterDataset.html"},"meter dataset"),". "),Object(l.b)("p",null,"A meter chart can have ONLY 1 dataset."),Object(l.b)("p",null,"The following are the attributes that you can set:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"backgroundColor"),Object(l.b)("td",{parentName:"tr",align:null},"String[] - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),Object(l.b)("td",{parentName:"tr",align:null},"The fill color of the arcs in the dataset. It could accept maximum 2 values, the first one for value and the other for empty part.")))),Object(l.b)("p",null,"The dataset can be created instantiating the constructor, passing the maximum value of chart."),Object(l.b)("p",null,"The default value of maximum value is ",Object(l.b)("strong",{parentName:"p"},"100"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"int maxValue = 200;\nMeterChart chart = new MeterChart();\n// for GWT\n// MeterChartWidget chart = new MeterChartWidget();\nMeterDataset dataset = chart.newDataset(maxValue);\n...\nchart.getData().setDatasets(dataset);\n")),Object(l.b)("h2",{id:"data-structure"},"Data structure"),Object(l.b)("p",null,"The data of a dataset for a meter chart is specified as single value."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"PAY ATTENTION")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"To set the value into the dataset, you must use ",Object(l.b)("inlineCode",{parentName:"p"},"setValue")," method. Calling ",Object(l.b)("inlineCode",{parentName:"p"},"setData")," method, an exception will be throw. "))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"...\ndataset.setValue(100);\n...\n")),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("p",null,"The meter chart defines the following configuration options. It extends the ",Object(l.b)("a",{parentName:"p",href:"ChartDoughnut"},"doughnut options"),"."),Object(l.b)("p",null,"To set the options at chart level, you can get a typed object accordingly with the chart type."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"MeterChart chart = new MeterChart();\n// for GWT\n// MeterChartWidget chart = new MeterChartWidget();\nMeterOptions options = chart.getOptions();\n")),Object(l.b)("p",null,"The following are the attributes that you can set:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"animatedDisplay"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"if the display will be shown based on the animation of chart.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cutoutPercentage"),Object(l.b)("td",{parentName:"tr",align:null},"double"),Object(l.b)("td",{parentName:"tr",align:null},"90"),Object(l.b)("td",{parentName:"tr",align:null},"ALWAYS 90.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"display"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/charts/MeterDisplay.html"},"MeterDisplay")),Object(l.b)("td",{parentName:"tr",align:null},"MeterDisplay.VALUE"),Object(l.b)("td",{parentName:"tr",align:null},"Determines which information must be displayed into meter chart.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"displayFontColor"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:null},"rgba(128, 128, 128)"),Object(l.b)("td",{parentName:"tr",align:null},"Color of font color")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"fontFamily"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"\"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif\""),Object(l.b)("td",{parentName:"tr",align:null},"font family of label")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"fontStyle"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),Object(l.b)("td",{parentName:"tr",align:null},"FontStyle.NORMAL"),Object(l.b)("td",{parentName:"tr",align:null},"font style of label")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"precision"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"2"),Object(l.b)("td",{parentName:"tr",align:null},"amount to decimals digits to apply to the value")))),Object(l.b)("h2",{id:"callback"},"Callback"),Object(l.b)("p",null,"In order to customize the value to show into the chart, you can implement a ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ValueCallback.html"},"ValueCallback"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"MeterChart chart = new MeterChart();\n// for GWT\n// MeterChartWidget chart = new MeterChartWidget();\nchart.getOptions().setValueCallback(new ValueCallback() {\n\n    /**\n     * Changes the value to show.\n     * \n     * @param chart chart instance where this callback as been defined\n     * @param value value of meter or gauge chart\n     * @param easing easing of drawing (between 0 and 1) for animation\n     * @return the string representation of value to apply or if the callback returns <code>null</code> to use default.\n     */         \n    @Override\n    public String onFormat(IsChart chart, double value, double easing) {\n        // logic\n        return value;\n    }\n});\n")))}s.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(a),h=r,d=s["".concat(c,".").concat(h)]||s[h]||u[h]||l;return a?n.a.createElement(d,o(o({ref:t},b),{},{components:a})):n.a.createElement(d,o({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<l;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return c}));var r=a(16),n=a(211);function l(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var l=void 0===r?{}:r,c=l.forcePrependBaseUrl,o=void 0!==c&&c,i=l.absolute,b=void 0!==i&&i;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+p:p}(l,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},211:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))}}]);