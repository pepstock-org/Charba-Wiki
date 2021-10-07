"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[6212],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),h=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=h(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=h(a),m=n,u=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?r.createElement(u,o(o({ref:e},p),{},{components:a})):r.createElement(u,o({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var h=2;h<l;h++)o[h]=a[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3919:function(t,e,a){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},4996:function(t,e,a){a.d(e,{C:function(){return l},Z:function(){return o}});var r=a(2263),n=a(3919);function l(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var l=void 0===r?{}:r,o=l.forcePrependBaseUrl,i=void 0!==o&&o,s=l.absolute,h=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(i)return e+a;var p=a.startsWith(e)?a:e+a.replace(/^\//,"");return h?t+p:p}(l,a,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},6498:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return h},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=a(4996),i=["components"],s={id:"ChartGauge",title:"Gauge chart",hide_title:!0,sidebar_label:"Gauge"},h=void 0,p={unversionedId:"charts/ChartGauge",id:"version-4.0/charts/ChartGauge",isDocsHomePage:!1,title:"Gauge chart",description:"Gauge chart",source:"@site/versioned_docs/version-4.0/charts/Gauge.md",sourceDirName:"charts",slug:"/charts/ChartGauge",permalink:"/Charba-Wiki/docs/4.0/charts/ChartGauge",tags:[],version:"4.0",frontMatter:{id:"ChartGauge",title:"Gauge chart",hide_title:!0,sidebar_label:"Gauge"},sidebar:"version-4.0/docs",previous:{title:"Meter",permalink:"/Charba-Wiki/docs/4.0/charts/ChartMeter"},next:{title:"Api",permalink:"/Charba-Wiki/docs/4.0/charts/Api"}},d=[{value:"Gauge chart",id:"gauge-chart",children:[]},{value:"Dataset",id:"dataset",children:[{value:"Using thresholds",id:"using-thresholds",children:[]}]},{value:"Data structure",id:"data-structure",children:[]},{value:"Options",id:"options",children:[]},{value:"Scriptable",id:"scriptable",children:[{value:"Formatting",id:"formatting",children:[]},{value:"Font coloring",id:"font-coloring",children:[]}]}],c={toc:d};function m(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"gauge-chart"},"Gauge chart"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/charts/GaugeChart.html"},"gauge chart")," is ",(0,l.kt)("strong",{parentName:"p"},"Charba")," extension of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"ChartDoughnut"},"doughnut chart")),", by a ",(0,l.kt)("a",{parentName:"p",href:"../Controllers"},"controller")," implementation."),(0,l.kt)("p",null,"The gauge charts are divided in the segments, the arc of each segment shows the proportional value of data."),(0,l.kt)("img",{src:(0,o.Z)("/img/gauge.png")}),(0,l.kt)("p",null,"Programmatically, you could use a gauge chart as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nGaugeChart chart = new GaugeChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,l.kt)("p",null,"By ",(0,l.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,l.kt)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a gauge chart as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:GaugeChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,l.kt)("h2",{id:"dataset"},"Dataset"),(0,l.kt)("p",null,"The gauge chart allows a number of properties to be specified for the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/charts/GaugeDataset.html"},"gauge dataset"),". "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nGaugeChart chart = new GaugeChart();\n// creates the dataset\nGaugeDataset dataset = chart.newDataset();\n// sets the value\ndataset.setValue(90.5D);\n// sets thresholds\ndataset.setThresholds(DefaultThreshold.NORMAL.getThreshold().setValue(40), \n    DefaultThreshold.WARNING.getThreshold().setValue(75), \n    DefaultThreshold.CRITICAL.getThreshold().setValue(100));\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,l.kt)("p",null,"See ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"ChartDoughnut#dataset"},"doughnut dataset"))," configuration how to configure the gauge dataset, in addition of following options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"emptyColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgb(234,234,234) - ",(0,l.kt)("span",{style:{backgroundColor:"rgb(234,234,234)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The color to fill the segment of the chart which represents the empty part.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"percentageThreshold"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", it uses the percentage as threshold instead of the value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"thresholds"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/charts/Threshold.html"},"Threshold"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The thresholds to apply to the gauge dataset.")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"A gauge chart can have ",(0,l.kt)("strong",{parentName:"p"},"ONLY")," 1 dataset."))),(0,l.kt)("p",null,"The dataset can be created instantiating the constructor, passing the maximum value of chart."),(0,l.kt)("p",null,"The default value of maximum value is ",(0,l.kt)("strong",{parentName:"p"},"100"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// sets max value\nint maxValue = 200;\n// creates the chart\nGaugeChart chart = new GaugeChart();\n// creates the dataset with new max value\nGaugeDataset dataset = chart.newDataset(maxValue);\n// sets the value\ndataset.setValue(90.5D);\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,l.kt)("h3",{id:"using-thresholds"},"Using thresholds"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/charts/Threshold.html"},"thresholds"),"is the entity which defines the color of the dataset, based on the value of the threshold."),(0,l.kt)("p",null,"A threshold is composed by 3 attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"name"),", mandatory attribute to apply the name, for instance ",(0,l.kt)("inlineCode",{parentName:"li"},'"warning"'),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value"),", optional attribute to set the value, the default is ",(0,l.kt)("inlineCode",{parentName:"li"},"Double.MAX_VALUE"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"color"),", optional attribute to set the color to use in the data set when the threshold is activated y the value of data set, the default is ",(0,l.kt)("inlineCode",{parentName:"li"},"rgb(140, 214, 16)")," - ",(0,l.kt)("span",{style:{backgroundColor:"rgb(140,214,16)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"),".")),(0,l.kt)("p",null,"The below example is configuring the chart in order to use"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"green color if the value of dataset is less or equals to 50,"),(0,l.kt)("li",{parentName:"ul"},"yellow color if the value of dataset is less or equals to 75 and greater than 50, "),(0,l.kt)("li",{parentName:"ul"},"red color if the value of dataset is greater than 75 (set to 100 because it's the maximum value of the data set). ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Threshold myNorm = new Threshold("normal", 50, HtmlColor.GREEN);\nThreshold myWarn = new Threshold("warning", 75, HtmlColor.YELLOW);\nThreshold myCrit = new Threshold("critical", 100, HtmlColor.RED);\n// creates the chart\nGaugeChart chart = new GaugeChart();\n// creates the dataset\nGaugeDataset dataset = chart.newDataset();\n// sets the thresholds\ndataset.setThresholds(myNorm, myWarn, myCrit); \n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a default threshold implementation by ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/charts/DefaultThreshold.html"},"gauge threshold")," enumeration."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Threshold instance"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Color"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DefaultThreshold.NORMAL"),(0,l.kt)("td",{parentName:"tr",align:"left"},'"NORMAL"'),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"75")),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgb(140, 214, 16) - ",(0,l.kt)("span",{style:{backgroundColor:"rgb(140,214,16)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DefaultThreshold.WARNING"),(0,l.kt)("td",{parentName:"tr",align:"left"},'"WARNING"'),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"90")),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgb(239, 198, 0) - ",(0,l.kt)("span",{style:{backgroundColor:"rgb(239,198,0)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DefaultThreshold.CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:"left"},'"CRITICAL"'),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Double.MAX_VALUE")),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgb(231, 24, 49) - ",(0,l.kt)("span",{style:{backgroundColor:"rgb(231,24,49)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"))))),(0,l.kt)("p",null,"You can reuse the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/charts/DefaultThreshold.html"},"gauge threshold")," enumeration, changing color or value or both."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Threshold myNorm = DefaultThreshold.NORMAL.getThreshold().setValue(50).setColor(HtmlColor.GREEN);\nThreshold myWarn = DefaultThreshold.WARNING.getThreshold().setValue(75).setColor(HtmlColor.YELLOW);\nThreshold myCrit = DefaultThreshold.WARNING.getThreshold().setValue(100).setColor(HtmlColor.RED);\n// creates the chart\nGaugeChart chart = new GaugeChart();\n// creates the dataset\nGaugeDataset dataset = chart.newDataset();\n// sets the thresholds\ndataset.setThresholds(myNorm, myWarn, myCrit); \n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,l.kt)("h2",{id:"data-structure"},"Data structure"),(0,l.kt)("p",null,"The data of a dataset for a gauge chart is specified as single value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the dataset\nGaugeDataset dataset = chart.newDataset();\n// sets the value\ndataset.setValue(90.5D);\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"setData")," methods are available, inherited by a doughnut dataset, but you can ",(0,l.kt)("strong",{parentName:"p"},"NOT")," use them otherwise an exception will throw.",(0,l.kt)("br",null),"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"setValue")," instead."))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"The gauge chart defines the following configuration options. It extends the ",(0,l.kt)("a",{parentName:"p",href:"ChartMeter#options"},"meter options"),"."),(0,l.kt)("p",null,"To set the options at chart level, you can get a typed object accordingly with the chart type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nGaugeChart chart = new GaugeChart();\n// gets options\nGaugeOptions options = chart.getOptions();\n// sets options\noptions.setRender(Render.PERCENTAGE);\noptions.setPrecision(3);\n")),(0,l.kt)("p",null,"See ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"ChartDoughnut#options"},"doughnut chart"))," configuration how to configure the gauge chart, in addition of following options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"animated"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If the rendered label will be shown based on the animation of chart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"autoFontSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the font size to applied to the rendered label will be automatically calculated at runtime, otherwise will use the ",(0,l.kt)("inlineCode",{parentName:"td"},"size")," property of the font.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cutoutPercentage"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},'"90%"')),(0,l.kt)("td",{parentName:"tr",align:"left"},'Immutable property, always "90%".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"circumference"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"360")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Immutable property, always 360.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"render"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/Render.html"},"Render")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Render.VALUE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Determines which information must be rendered in the meter chart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/options/Font.html"},"Font")),(0,l.kt)("td",{parentName:"tr",align:"left"},"See description"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Font of rendered label. If ",(0,l.kt)("inlineCode",{parentName:"td"},"autoFontSize")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the ",(0,l.kt)("inlineCode",{parentName:"td"},"size")," property is ignored because automatically calculated at runtime.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The default value is the global font.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fontColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgb(128, 128, 128) - ",(0,l.kt)("span",{style:{backgroundColor:"rgb(128,128,128)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Color of font color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"precision"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount to decimals digits to apply to the value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"rotation"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Immutable property, always 0.")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The gauge chart disables the legend, tooltips and animation components."))),(0,l.kt)("h2",{id:"scriptable"},"Scriptable"),(0,l.kt)("p",null,"Scriptable options in the configuration accept a callback which is called for each animation cycle."),(0,l.kt)("p",null,"There are 2 options which can be defined as scriptable:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fontColor"),", to set the color of the label."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"format"),", to set the value of the label.")),(0,l.kt)("p",null,"The callbacks are getting the only 1 argument, the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/impl/charts/MeterContext.html"},"scriptable context")," which contains the context of the callback execution."),(0,l.kt)("p",null,"The context object contains the following properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"attributes"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/commons/NativeObjectContainer.html"},"NativeObjectContainer")),(0,l.kt)("td",{parentName:"tr",align:"left"},"User object which you can store your options at runtime.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"chart"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/IsChart.html"},"IsChart")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Chart instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"easing"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The easing of drawing (between 0 and 1) for animation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"type"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/ContextType.html"},"ContextType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The type of the context. It can be ONLY ",(0,l.kt)("inlineCode",{parentName:"td"},"ContextType.METER"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value of meter or gauge dataset.")))),(0,l.kt)("h3",{id:"formatting"},"Formatting"),(0,l.kt)("p",null,"In order to customize the value to show in the chart, you can implement a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/MeterFormatCallback.html"},"MeterFormatCallback"),", as following:"),(0,l.kt)("img",{src:(0,o.Z)("/img/gaugeFormatting.png")}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nGaugeChart chart = new GaugeChart();\n// sets the callback\nchart.getOptions().setFormatCallback(new MeterFormatCallback(){\n\n   @Override\n   public String invoke(MeterContext context){\n      // logic\n      return format;\n   }\n});\n")),(0,l.kt)("h3",{id:"font-coloring"},"Font coloring"),(0,l.kt)("p",null,"In order to customize the font color of the rendered label to show in the chart, you can implement a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),", as following:"),(0,l.kt)("img",{src:(0,o.Z)("/img/gaugeFontColoring.png")}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nGaugeChart chart = new GaugeChart();\n// sets the callback\nchart.getOptions().setFontColor(new ColorCallback<MeterContext>(){\n\n   @Override\n   public IsColor invoke(MeterContext context){\n      // logic\n      return color;\n   }\n});\n")))}m.isMDXComponent=!0}}]);