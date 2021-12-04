"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[7422],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=s(a),d=n,u=m["".concat(p,".").concat(d)]||m[d]||h[d]||o;return a?r.createElement(u,l(l({ref:e},c),{},{components:a})):r.createElement(u,l({ref:e},c))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13919:function(t,e,a){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},44996:function(t,e,a){a.d(e,{C:function(){return o},Z:function(){return l}});var r=a(52263),n=a(13919);function o(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,i=void 0!==l&&l,p=o.absolute,s=void 0!==p&&p;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(i)return e+a;var c=a.startsWith(e)?a:e+a.replace(/^\//,"");return s?t+c:c}(o,a,t,e)}}}function l(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},81891:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=a(44996),i=["components"],p={id:"ChartMeter",title:"Meter chart",hide_title:!0,sidebar_label:"Meter"},s=void 0,c={unversionedId:"charts/ChartMeter",id:"version-4.2/charts/ChartMeter",isDocsHomePage:!1,title:"Meter chart",description:"Meter chart",source:"@site/versioned_docs/version-4.2/charts/Meter.md",sourceDirName:"charts",slug:"/charts/ChartMeter",permalink:"/Charba-Wiki/docs/4.2/charts/ChartMeter",tags:[],version:"4.2",frontMatter:{id:"ChartMeter",title:"Meter chart",hide_title:!0,sidebar_label:"Meter"},sidebar:"version-4.2/docs",previous:{title:"BubbleMap",permalink:"/Charba-Wiki/docs/4.2/charts/geo/ChartBubbleMap"},next:{title:"Gauge",permalink:"/Charba-Wiki/docs/4.2/charts/ChartGauge"}},h=[{value:"Meter chart",id:"meter-chart",children:[],level:2},{value:"Dataset",id:"dataset",children:[],level:2},{value:"Data structure",id:"data-structure",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Scriptable",id:"scriptable",children:[{value:"Formatting",id:"formatting",children:[],level:3},{value:"Font coloring",id:"font-coloring",children:[],level:3}],level:2}],m={toc:h};function d(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"meter-chart"},"Meter chart"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/charts/MeterChart.html"},"meter chart")," is ",(0,o.kt)("strong",{parentName:"p"},"Charba")," extension of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"ChartDoughnut"},"doughnut chart")),", by a ",(0,o.kt)("a",{parentName:"p",href:"../Controllers"},"controller")," implementation."),(0,o.kt)("p",null,"The meter charts are divided in the 2 segments, the arc of each segment shows the proportional value of data."),(0,o.kt)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=meter"},(0,o.kt)("img",{src:(0,l.Z)("/img/meter.png")})),(0,o.kt)("p",null,"Programmatically, you could use a meter chart as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nMeterChart chart = new MeterChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,o.kt)("p",null,"By ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,o.kt)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a meter chart as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:MeterChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,o.kt)("h2",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"The meter chart allows a number of properties to be specified for the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/charts/MeterDataset.html"},"meter dataset"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nMeterChart chart = new MeterChart();\n// creates the dataset\nMeterDataset dataset = chart.newDataset();\n// sets the value\ndataset.setValue(90.5D);\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"ChartDoughnut#dataset"},"doughnut dataset"))," configuration how to configure the meter dataset, in addition of following options:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"color"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"rgb(140,214,16) - ",(0,o.kt)("span",{style:{backgroundColor:"rgb(140,214,16)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The color to fill the segment of the chart which represents the value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"emptyColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"rgb(234,234,234) - ",(0,o.kt)("span",{style:{backgroundColor:"rgb(234,234,234)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The color to fill the segment of the chart which represents the empty part.")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A meter chart can have ",(0,o.kt)("strong",{parentName:"p"},"ONLY")," 1 dataset.",(0,o.kt)("br",null)))),(0,o.kt)("p",null,"The dataset can be created instantiating the constructor, passing the maximum value of chart."),(0,o.kt)("p",null,"The default value of maximum value is ",(0,o.kt)("strong",{parentName:"p"},"100"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// sets max value\nint maxValue = 200;\n// creates the chart\nMeterChart chart = new MeterChart();\n// creates the dataset with new max value\nMeterDataset dataset = chart.newDataset(maxValue);\n// sets the value\ndataset.setValue(90.5D);\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,o.kt)("h2",{id:"data-structure"},"Data structure"),(0,o.kt)("p",null,"The data of a dataset for a meter chart is specified as single value. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the dataset\nMeterDataset dataset = chart.newDataset();\n// sets the value\ndataset.setValue(90.5D);\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"setData")," methods are available, inherited by a doughnut dataset, but you can ",(0,o.kt)("strong",{parentName:"p"},"NOT")," use them otherwise an exception will throw.",(0,o.kt)("br",null),"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"setValue")," instead."))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"The meter chart defines the following configuration options. It extends the ",(0,o.kt)("a",{parentName:"p",href:"ChartDoughnut"},"doughnut options"),"."),(0,o.kt)("p",null,"To set the options at chart level, you can get a typed object accordingly with the chart type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nMeterChart chart = new MeterChart();\n// gets options\nMeterOptions options = chart.getOptions();\n// sets options\noptions.setRender(Render.PERCENTAGE);\noptions.setPrecision(3);\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"ChartDoughnut#options"},"doughnut chart"))," configuration how to configure the meter chart, in addition of following options:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"animated"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:"left"},"If the rendered label will be shown based on the animation of chart.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"autoFontSize"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the font size to applied to the rendered label is automatically calculated at runtime, otherwise uses the ",(0,o.kt)("inlineCode",{parentName:"td"},"size")," property of the font.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"cutoutPercentage"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},'"90%"')),(0,o.kt)("td",{parentName:"tr",align:"left"},'Immutable property, always "90%".')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"circumference"),(0,o.kt)("td",{parentName:"tr",align:"left"},"double"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"360")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Immutable property, always 360.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"render"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/Render.html"},"Render")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Render.VALUE"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Determines which information must be rendered in the meter chart.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"font"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,o.kt)("td",{parentName:"tr",align:"left"},"See description"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Font of rendered label. If ",(0,o.kt)("inlineCode",{parentName:"td"},"autoFontSize")," is set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the ",(0,o.kt)("inlineCode",{parentName:"td"},"size")," property is ignored because automatically calculated at runtime.",(0,o.kt)("br",null),(0,o.kt)("br",null),"The default value is the global font.",(0,o.kt)("br",null),"See ",(0,o.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"fontColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},"rgb(128, 128, 128) - ",(0,o.kt)("span",{style:{backgroundColor:"rgb(128,128,128)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Color of font color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"precision"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"2")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The amount to decimals digits to apply to the value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"rotation"),(0,o.kt)("td",{parentName:"tr",align:"left"},"double"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Immutable property, always 0.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The meter chart disables the legend, tooltips and animation components."))),(0,o.kt)("h2",{id:"scriptable"},"Scriptable"),(0,o.kt)("p",null,"Scriptable options in the configuration accept a callback which is called for each animation cycle."),(0,o.kt)("p",null,"There are 2 options which can be defined as scriptable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fontColor"),", to set the color of the label."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"format"),", to set the value of the label.")),(0,o.kt)("p",null,"The callbacks are getting the only 1 argument, the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/impl/charts/MeterContext.html"},"scriptable context")," which contains the context of the callback execution."),(0,o.kt)("p",null,"The context object contains the following properties:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"attributes"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/commons/NativeObjectContainer.html"},"NativeObjectContainer")),(0,o.kt)("td",{parentName:"tr",align:"left"},"User object which you can store your options at runtime.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"chart"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/IsChart.html"},"IsChart")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Chart instance.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"easing"),(0,o.kt)("td",{parentName:"tr",align:"left"},"double"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The easing of drawing (between 0 and 1) for animation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"type"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/ContextType.html"},"ContextType")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The type of the context. It can be ONLY ",(0,o.kt)("inlineCode",{parentName:"td"},"ContextType.METER"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"value"),(0,o.kt)("td",{parentName:"tr",align:"left"},"double"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The value of meter or gauge dataset.")))),(0,o.kt)("h3",{id:"formatting"},"Formatting"),(0,o.kt)("p",null,"In order to customize the value to show in the chart, you can implement a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/MeterFormatCallback.html"},"MeterFormatCallback"),", as following:"),(0,o.kt)("img",{src:(0,l.Z)("/img/meterFormatting.png")}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nMeterChart chart = new MeterChart();\n// sets the callback\nchart.getOptions().setFormatCallback(new MeterFormatCallback(){\n\n   @Override\n   public String invoke(MeterContext context){\n      // logic\n      return format;\n   }\n});\n")),(0,o.kt)("h3",{id:"font-coloring"},"Font coloring"),(0,o.kt)("p",null,"In order to customize the font color of the rendered label to show in the chart, you can implement a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),", as following:"),(0,o.kt)("img",{src:(0,l.Z)("/img/meterFontColoring.png")}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nMeterChart chart = new MeterChart();\n// sets the callback\nchart.getOptions().setFontColor(new ColorCallback<MeterContext>(){\n\n   @Override\n   public IsColor invoke(MeterContext context){\n      // logic\n      return color;\n   }\n});\n")))}d.isMDXComponent=!0}}]);