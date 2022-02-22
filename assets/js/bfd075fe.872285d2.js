"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[9221],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),h=u(a),g=r,d=h["".concat(p,".").concat(g)]||h[g]||s[g]||l;return a?n.createElement(d,o(o({ref:e},c),{},{components:a})):n.createElement(d,o({ref:e},c))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},35566:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return g}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(44996),i=["components"],p={id:"ChartGauge",title:"Gauge chart",hide_title:!0,sidebar_label:"Gauge"},u=void 0,c={unversionedId:"ChartGauge",id:"version-3.3/ChartGauge",title:"Gauge chart",description:"Gauge chart",source:"@site/versioned_docs/version-3.3/ChartGauge.md",sourceDirName:".",slug:"/ChartGauge",permalink:"/Charba-Wiki/docs/3.3/ChartGauge",tags:[],version:"3.3",frontMatter:{id:"ChartGauge",title:"Gauge chart",hide_title:!0,sidebar_label:"Gauge"},sidebar:"version-3.3/docs",previous:{title:"Meter",permalink:"/Charba-Wiki/docs/3.3/ChartMeter"},next:{title:"Chart background color",permalink:"/Charba-Wiki/docs/3.3/PluginBackgroundColor"}},s=[{value:"Gauge chart",id:"gauge-chart",children:[],level:2},{value:"Dataset",id:"dataset",children:[],level:2},{value:"Data structure",id:"data-structure",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Callback",id:"callback",children:[],level:2}],h={toc:s};function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"gauge-chart"},"Gauge chart"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/charts/GaugeChart.html"},"gauge chart"),"(also for ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/gwt/widgets/GaugeChartWidget.html"},"gauge chart widget")," for GWT) is ",(0,l.kt)("strong",{parentName:"p"},"Charba")," extension of ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," doughnut chart, by a ",(0,l.kt)("a",{parentName:"p",href:"Controllers"},"controller")," implementation."),(0,l.kt)("p",null,"The gauge charts are divided into segments, the arc of each segment shows the proportional value of data."),(0,l.kt)("img",{src:(0,o.Z)("/img/gauge.png")}),(0,l.kt)("p",null,"This chart doesn't allow any legend, hover, layout and tooltips components."),(0,l.kt)("h2",{id:"dataset"},"Dataset"),(0,l.kt)("p",null,"The gauge chart allows a number of properties to be specified for the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/charts/GaugeDataset.html"},"gauge dataset"),". "),(0,l.kt)("p",null,"A gauge chart can have ONLY 1 dataset."),(0,l.kt)("p",null,"The following are the attributes that you can set:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"The fill color of the arcs in the dataset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"percentageThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"if ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", use the percentage as threshold instead of the value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"thresholds"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/charts/Threshold.html"},"Threshold"),"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"the thresholds to apply to the gauge")))),(0,l.kt)("p",null,"The dataset can be created instantiating the constructor, passing the maximum value of chart."),(0,l.kt)("p",null,"The default value of maximum value is ",(0,l.kt)("strong",{parentName:"p"},"100"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"int maxValue = 200;\nGaugeChart chart = new GaugeChart();\n// for GWT\n// GaugeChartWidget chart = new GaugeChartWidget();\nGaugeDataset dataset = chart.newDataset(maxValue);\n...\nchart.getData().setDatasets(dataset);\n")),(0,l.kt)("h2",{id:"data-structure"},"Data structure"),(0,l.kt)("p",null,"The data of a dataset for a gauge chart is specified as single value. "),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"PAY ATTENTION")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"To set the value into the dataset you must use ",(0,l.kt)("inlineCode",{parentName:"p"},"setValue")," method. Calling ",(0,l.kt)("inlineCode",{parentName:"p"},"setData")," method, an exception will be throw. "))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"...\ndataset.setValue(100);\n...\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"The gauge chart defines the following configuration options. It extends the ",(0,l.kt)("a",{parentName:"p",href:"ChartMeter"},"meter options"),"."),(0,l.kt)("p",null,"To set the options at chart level, you can get a typed object accordingly with the chart type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"GaugeChart chart = new GaugeChart();\n// for GWT\n// GaugeChartWidget chart = new GaugeChartWidget();\nGaugeOptions options = chart.getOptions();\n")),(0,l.kt)("p",null,"The following are the attributes that you can set:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"animatedDisplay"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"if the display will be shown based on the animation of chart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cutoutPercentage"),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"90"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ALWAYS 90"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"display"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/charts/MeterDisplay.html"},"MeterDisplay")),(0,l.kt)("td",{parentName:"tr",align:null},"MeterDisplay.VALUE"),(0,l.kt)("td",{parentName:"tr",align:null},"Determines which information must be displayed into meter chart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"displayFontColor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:null},"rgba(128, 128, 128)"),(0,l.kt)("td",{parentName:"tr",align:null},"Color of font color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontFamily"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif\""),(0,l.kt)("td",{parentName:"tr",align:null},"font family of label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fontStyle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"FontStyle.NORMAL"),(0,l.kt)("td",{parentName:"tr",align:null},"font style of label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"precision"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"amount to decimals digits to apply to the value")))),(0,l.kt)("h2",{id:"callback"},"Callback"),(0,l.kt)("p",null,"In order to customize the value to show into the chart, you can implement a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/ValueCallback.html"},"ValueCallback"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"GaugeChart chart = new GaugeChart();\n// for GWT\n// GaugeChartWidget chart = new GaugeChartWidget();\nchart.getOptions().setValueCallback(new ValueCallback() {\n\n    /**\n     * Changes the value to show.\n     * \n     * @param chart chart instance where this callback as been defined\n     * @param value value of meter or gauge chart\n     * @param easing easing of drawing (between 0 and 1) for animation\n     * @return the string representation of value to apply or if the callback returns <code>null</code> to use default.\n     */         \n    @Override\n    public String onFormat(IsChart chart, double value, double easing) {\n        // logic\n        return value;\n    }\n});\n")))}g.isMDXComponent=!0}}]);