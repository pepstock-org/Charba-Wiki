"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[8540],{95788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>h});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||y[m]||l;return a?r.createElement(h,o(o({ref:t},s),{},{components:a})):r.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var g={};for(var i in t)hasOwnProperty.call(t,i)&&(g[i]=t[i]);g.originalType=e,g[d]="string"==typeof e?e:n,o[1]=g;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(45072),n=(a(11504),a(95788)),l=a(70964);const o={id:"ChartMeter",title:"Meter chart",hide_title:!0,sidebar_label:"Meter"},g=void 0,i={unversionedId:"charts/ChartMeter",id:"version-6.3/charts/ChartMeter",title:"Meter chart",description:"Meter chart",source:"@site/versioned_docs/version-6.3/charts/Meter.md",sourceDirName:"charts",slug:"/charts/ChartMeter",permalink:"/Charba-Wiki/docs/6.3/charts/ChartMeter",draft:!1,tags:[],version:"6.3",frontMatter:{id:"ChartMeter",title:"Meter chart",hide_title:!0,sidebar_label:"Meter"},sidebar:"docs",previous:{title:"BubbleMap",permalink:"/Charba-Wiki/docs/6.3/charts/geo/ChartBubbleMap"},next:{title:"Gauge",permalink:"/Charba-Wiki/docs/6.3/charts/ChartGauge"}},p={},s=[{value:"Meter chart",id:"meter-chart",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Labels",id:"labels",level:3},{value:"Value label",id:"value-label",level:3},{value:"Description label",id:"description-label",level:3},{value:"Data structure",id:"data-structure",level:2},{value:"Options",id:"options",level:2},{value:"Scriptable",id:"scriptable",level:2}],d={toc:s},y="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(y,(0,r.c)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"meter-chart"},"Meter chart"),(0,n.yg)("p",null,"A ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/impl/charts/MeterChart.html"},"meter chart")," is ",(0,n.yg)("strong",{parentName:"p"},"Charba")," extension of ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"ChartDoughnut"},"doughnut chart")),", by a ",(0,n.yg)("a",{parentName:"p",href:"../Controllers"},"controller")," implementation."),(0,n.yg)("p",null,"The meter charts are divided in the 2 segments, the arc of each segment shows the proportional value of data."),(0,n.yg)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=meter"},(0,n.yg)("img",{src:(0,l.c)("/img/meter.png")})),(0,n.yg)("p",null,"Programmatically, you could use a meter chart as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nMeterChart chart = new MeterChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,n.yg)("p",null,"By ",(0,n.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,n.yg)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a meter chart as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:MeterChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,n.yg)("h2",{id:"dataset"},"Dataset"),(0,n.yg)("p",null,"The meter chart allows a number of properties to be specified for the ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/impl/charts/MeterDataset.html"},"meter dataset"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nMeterChart chart = new MeterChart();\n// creates the dataset\nMeterDataset dataset = chart.newDataset();\n// sets the value\ndataset.setValue(90.5D);\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"color")," option value"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The border color of the arcs in the dataset.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/data/ArcBorderRadius.html"},"ArcBorderRadius")),(0,n.yg)("td",{parentName:"tr",align:"left"},"0"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The arc border radius (in pixels).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"0"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The border width of the arcs in the dataset.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"rgb(140,214,16) - ",(0,n.yg)("span",{style:{backgroundColor:"rgb(140,214,16)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The color to fill the segment of the chart which represents the value.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"emptyColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"rgb(234,234,234) - ",(0,n.yg)("span",{style:{backgroundColor:"rgb(234,234,234)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The color to fill the segment of the chart which represents the empty part.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"max"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double"),(0,n.yg)("td",{parentName:"tr",align:"left"},"0"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The maximum value for the dataset.")))),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"A meter chart can have ",(0,n.yg)("strong",{parentName:"p"},"ONLY")," 1 dataset.",(0,n.yg)("br",null))),(0,n.yg)("p",null,"The dataset can be created instantiating the constructor, passing the maximum value of chart. The maximum value can be also changed at runtime."),(0,n.yg)("p",null,"The default value of maximum value is ",(0,n.yg)("strong",{parentName:"p"},"100"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// sets max value\nint maxValue = 200;\n// creates the chart\nMeterChart chart = new MeterChart();\n// creates the dataset with new max value\nMeterDataset dataset = chart.newDataset(maxValue);\n// sets the value\ndataset.setValue(90.5D);\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,n.yg)("h3",{id:"labels"},"Labels"),(0,n.yg)("p",null,"The meter charts allow you to set labels inside the chart in order to improve the understanding of the chart for the user."),(0,n.yg)("p",null,"There are 2 possible labels you can set in the chart:"),(0,n.yg)("img",{src:(0,l.c)("/img/meterLabels.png")}),(0,n.yg)("h3",{id:"value-label"},"Value label"),(0,n.yg)("p",null,"The value label allows you to show the value or percentage inside the chart."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the dataset\nMeterDataset dataset = chart.newDataset();\n// sets the percentage rendering\ndataset.getValueLabel().setPercentage(true);\n")),(0,n.yg)("p",null,"The value label element contains all options in order to configure the rendering."),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"animated"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If the rendered label will be shown based on the animation of chart.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"autoFontSize"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", the font size to applied to the rendered label is automatically calculated at runtime, otherwise uses the ",(0,n.yg)("inlineCode",{parentName:"td"},"size")," property of the font.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"rgb(128, 128, 128) - ",(0,n.yg)("span",{style:{backgroundColor:"rgb(128,128,128)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Color of the content.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"display"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", the value label is shown.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"font"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Font of rendered label. If ",(0,n.yg)("inlineCode",{parentName:"td"},"autoFontSize")," is set to ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", the ",(0,n.yg)("inlineCode",{parentName:"td"},"size")," property is ignored because automatically calculated at runtime.",(0,n.yg)("br",null),(0,n.yg)("br",null),"The default value is the font instance in the chart options.",(0,n.yg)("br",null),"See ",(0,n.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"format"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/MeterFormatCallback.html"},"MeterFormatCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The callback instance which format the value.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"percentage"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", the rendered label will show the dataset value as a percentage.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"precision"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"2")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The amount to decimals digits to apply to the value.")))),(0,n.yg)("h3",{id:"description-label"},"Description label"),(0,n.yg)("p",null,"The description label allows you to show a string as description inside the chart, below the ",(0,n.yg)("a",{parentName:"p",href:"#value-label"},"value label"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates the dataset\nMeterDataset dataset = chart.newDataset();\n// enables rendering\ndataset.getDescriptionLabel().setDisplay(true);\n// enables rendering\ndataset.getDescriptionLabel().setContent("RAM utilization");\n\n')),(0,n.yg)("p",null,"The description label element contains all options in order to configure the rendering."),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"This label only apply if ",(0,n.yg)("strong",{parentName:"p"},"display")," options of ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"#value-label"},"value label"))," is ",(0,n.yg)("strong",{parentName:"p"},"true"),".")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"autoFontSize"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", the font size to applied to the rendered label is automatically calculated at runtime, otherwise uses the ",(0,n.yg)("inlineCode",{parentName:"td"},"size")," property of the font.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"rgb(128, 128, 128) - ",(0,n.yg)("span",{style:{backgroundColor:"rgb(128,128,128)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Color of the content.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"content"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The content of description label.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"display"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", the value label is shown.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"font"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Font of rendered label. If ",(0,n.yg)("inlineCode",{parentName:"td"},"autoFontSize")," is set to ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", the ",(0,n.yg)("inlineCode",{parentName:"td"},"size")," property is ignored because automatically calculated at runtime.",(0,n.yg)("br",null),(0,n.yg)("br",null),"The default value is the font instance in the chart options.",(0,n.yg)("br",null),"See ",(0,n.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")))),(0,n.yg)("h2",{id:"data-structure"},"Data structure"),(0,n.yg)("p",null,"The data of a dataset for a meter chart is specified as single value. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the dataset\nMeterDataset dataset = chart.newDataset();\n// sets the value\ndataset.setValue(90.5D);\n")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"setData")," methods are available, inherited by a doughnut dataset, but you can ",(0,n.yg)("strong",{parentName:"p"},"NOT")," use them otherwise an exception will throw.",(0,n.yg)("br",null),"Use ",(0,n.yg)("inlineCode",{parentName:"p"},"setValue")," instead.")),(0,n.yg)("h2",{id:"options"},"Options"),(0,n.yg)("p",null,"The meter chart defines the following configuration options. It extends the ",(0,n.yg)("a",{parentName:"p",href:"ChartDoughnut"},"doughnut options"),"."),(0,n.yg)("p",null,"To set the options at chart level, you can get a typed object accordingly with the chart type."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nMeterChart chart = new MeterChart();\n// gets options\nMeterOptions options = chart.getOptions();\n// sets options\noptions.setRender(Render.PERCENTAGE);\noptions.setPrecision(3);\n")),(0,n.yg)("p",null,"See ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"ChartDoughnut#options"},"doughnut chart"))," configuration how to configure the meter chart, in addition of following options:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"cutoutPercentage"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},'"90%"')),(0,n.yg)("td",{parentName:"tr",align:"left"},"It can be set with a value between ",(0,n.yg)("inlineCode",{parentName:"td"},'"80%"')," and ",(0,n.yg)("inlineCode",{parentName:"td"},'"100%"'),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"cutout"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Undefined.DOUBLE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"It can be set with a value of pixels if the percentage is between ",(0,n.yg)("inlineCode",{parentName:"td"},'"80%"')," and ",(0,n.yg)("inlineCode",{parentName:"td"},'"100%"'),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"circumference"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"360")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Immutable property, always 360.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rotation"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"0")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Immutable property, always 0.")))),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The meter chart disables the legend, tooltips and animation components.")),(0,n.yg)("h2",{id:"scriptable"},"Scriptable"),(0,n.yg)("p",null,"Scriptable options in the configuration accept a callback which is called for each animation cycle."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nMeterDataset dataset = chart.newDataset();\n// sets the color\ndataset.getValueLabel().setColor(new ColorCallback<MeterContext>(){\n\n   @Override\n   public IsColor invoke(MeterContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,n.yg)("p",null,"The callbacks are getting the only 1 argument, the ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/impl/charts/MeterContext.html"},"scriptable context")," which contains the context of the callback execution."),(0,n.yg)("p",null,"The context object contains the following properties:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"attributes"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/commons/NativeObjectContainer.html"},"NativeObjectContainer")),(0,n.yg)("td",{parentName:"tr",align:"left"},"User object which you can store your options at runtime.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"chart"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/IsChart.html"},"IsChart")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Chart instance.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"datasetLabel"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The label of the dataset.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"easing"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The easing of drawing (between 0 and 1) for animation.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"type"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/ContextType.html"},"ContextType")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The type of the context. It can be ONLY ",(0,n.yg)("inlineCode",{parentName:"td"},"ContextType.METER"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"value"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The value of meter or gauge dataset.")))),(0,n.yg)("p",null,"The meter chart can provide scriptable options by the meter data set and the labels."),(0,n.yg)("p",null,"The following options can be set by a callback:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Callback"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","MeterContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"content"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/MeterContentCallback.html"},"MeterContentCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"String")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"font"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","MeterContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"format"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/MeterFormatCallback.html"},"MeterFormatCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"String")))),(0,n.yg)("p",null,"Here is an example fo value formatting."),(0,n.yg)("img",{src:(0,l.c)("/img/meterFormatting.png")}),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates the dataset\nMeterDataset dataset = chart.newDataset();\n// sets the formatter\ndataset.getValueLabel().setFormatCallback(new MeterFormatCallback(){\n\n   @Override\n   public String invoke(MeterContext context){\n      // logic\n      return Utilities.applyPrecision(context.getValue(), 0) + " logged users";\n   }\n});\n')))}m.isMDXComponent=!0}}]);