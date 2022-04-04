"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[60924],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),h=s(a),c=n,k=h["".concat(p,".").concat(c)]||h[c]||m[c]||l;return a?r.createElement(k,o(o({ref:e},d),{},{components:a})):r.createElement(k,o({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},87836:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return h}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=a(44996),i=["components"],p={id:"ChartMeter",title:"Meter chart",hide_title:!0,sidebar_label:"Meter"},s=void 0,d={unversionedId:"charts/ChartMeter",id:"version-5.1/charts/ChartMeter",title:"Meter chart",description:"",source:"@site/versioned_docs/version-5.1/charts/Meter.md",sourceDirName:"charts",slug:"/charts/ChartMeter",permalink:"/Charba-Wiki/docs/5.1/charts/ChartMeter",tags:[],version:"5.1",frontMatter:{id:"ChartMeter",title:"Meter chart",hide_title:!0,sidebar_label:"Meter"},sidebar:"docs",previous:{title:"BubbleMap",permalink:"/Charba-Wiki/docs/5.1/charts/geo/ChartBubbleMap"},next:{title:"Gauge",permalink:"/Charba-Wiki/docs/5.1/charts/ChartGauge"}},m={},h=[{value:"Meter chart",id:"meter-chart",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Labels",id:"labels",level:3},{value:"Value label",id:"value-label",level:3},{value:"Description label",id:"description-label",level:3},{value:"Data structure",id:"data-structure",level:2},{value:"Options",id:"options",level:2},{value:"Scriptable",id:"scriptable",level:2}],c={toc:h};function k(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"meter-chart"},"Meter chart"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/impl/charts/MeterChart.html"},"meter chart")," is ",(0,l.kt)("strong",{parentName:"p"},"Charba")," extension of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"ChartDoughnut"},"doughnut chart")),", by a ",(0,l.kt)("a",{parentName:"p",href:"../Controllers"},"controller")," implementation."),(0,l.kt)("p",null,"The meter charts are divided in the 2 segments, the arc of each segment shows the proportional value of data."),(0,l.kt)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=meter"},(0,l.kt)("img",{src:(0,o.Z)("/img/meter.png")})),(0,l.kt)("p",null,"Programmatically, you could use a meter chart as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nMeterChart chart = new MeterChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,l.kt)("p",null,"By ",(0,l.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,l.kt)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a meter chart as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:MeterChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,l.kt)("h2",{id:"dataset"},"Dataset"),(0,l.kt)("p",null,"The meter chart allows a number of properties to be specified for the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/impl/charts/MeterDataset.html"},"meter dataset"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nMeterChart chart = new MeterChart();\n// creates the dataset\nMeterDataset dataset = chart.newDataset();\n// sets the value\ndataset.setValue(90.5D);\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,l.kt)("p",null,"The following are the attributes that you can set:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"color")," option value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The border color of the arcs in the dataset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/ArcBorderRadius.html"},"ArcBorderRadius")),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The arc border radius (in pixels).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The border width of the arcs in the dataset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgb(140,214,16) - ",(0,l.kt)("span",{style:{backgroundColor:"rgb(140,214,16)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The color to fill the segment of the chart which represents the value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"emptyColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgb(234,234,234) - ",(0,l.kt)("span",{style:{backgroundColor:"rgb(234,234,234)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The color to fill the segment of the chart which represents the empty part.")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"A meter chart can have ",(0,l.kt)("strong",{parentName:"p"},"ONLY")," 1 dataset.",(0,l.kt)("br",null)))),(0,l.kt)("p",null,"The dataset can be created instantiating the constructor, passing the maximum value of chart."),(0,l.kt)("p",null,"The default value of maximum value is ",(0,l.kt)("strong",{parentName:"p"},"100"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// sets max value\nint maxValue = 200;\n// creates the chart\nMeterChart chart = new MeterChart();\n// creates the dataset with new max value\nMeterDataset dataset = chart.newDataset(maxValue);\n// sets the value\ndataset.setValue(90.5D);\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,l.kt)("h3",{id:"labels"},"Labels"),(0,l.kt)("p",null,"The meter charts allow you to set labels inside the chart in order to improve the understanding of the chart for the user."),(0,l.kt)("p",null,"There are 2 possible labels you can set in the chart:"),(0,l.kt)("img",{src:(0,o.Z)("/img/meterLabels.png")}),(0,l.kt)("h3",{id:"value-label"},"Value label"),(0,l.kt)("p",null,"The value label allows you to show the value or percentage inside the chart."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the dataset\nMeterDataset dataset = chart.newDataset();\n// sets the percentage rendering\ndataset.getValueLabel().setPercentage(true);\n")),(0,l.kt)("p",null,"The value label element contains all options in order to configure the rendering."),(0,l.kt)("p",null,"The following are the attributes that you can set:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"animated"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If the rendered label will be shown based on the animation of chart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"autoFontSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the font size to applied to the rendered label is automatically calculated at runtime, otherwise uses the ",(0,l.kt)("inlineCode",{parentName:"td"},"size")," property of the font.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgb(128, 128, 128) - ",(0,l.kt)("span",{style:{backgroundColor:"rgb(128,128,128)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Color of the content.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"display"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the value label is shown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Font of rendered label. If ",(0,l.kt)("inlineCode",{parentName:"td"},"autoFontSize")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the ",(0,l.kt)("inlineCode",{parentName:"td"},"size")," property is ignored because automatically calculated at runtime.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The default value is the font instance in the chart options.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"format"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/MeterFormatCallback.html"},"MeterFormatCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The callback instance which format the value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"percentage"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the rendered label will show the dataset value as a percentage.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"precision"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount to decimals digits to apply to the value.")))),(0,l.kt)("h3",{id:"description-label"},"Description label"),(0,l.kt)("p",null,"The description label allows you to show a string as description inside the chart, below the ",(0,l.kt)("a",{parentName:"p",href:"#value-label"},"value label"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates the dataset\nMeterDataset dataset = chart.newDataset();\n// enables rendering\ndataset.getDescriptionLabel().setDisplay(true);\n// enables rendering\ndataset.getDescriptionLabel().setContent("RAM utilization");\n\n')),(0,l.kt)("p",null,"The description label element contains all options in order to configure the rendering."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This label only apply if ",(0,l.kt)("strong",{parentName:"p"},"display")," options of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#value-label"},"value label"))," is ",(0,l.kt)("strong",{parentName:"p"},"true"),"."))),(0,l.kt)("p",null,"The following are the attributes that you can set:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"autoFontSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the font size to applied to the rendered label is automatically calculated at runtime, otherwise uses the ",(0,l.kt)("inlineCode",{parentName:"td"},"size")," property of the font.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgb(128, 128, 128) - ",(0,l.kt)("span",{style:{backgroundColor:"rgb(128,128,128)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Color of the content.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"content"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The content of description label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"display"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the value label is shown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Font of rendered label. If ",(0,l.kt)("inlineCode",{parentName:"td"},"autoFontSize")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the ",(0,l.kt)("inlineCode",{parentName:"td"},"size")," property is ignored because automatically calculated at runtime.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The default value is the font instance in the chart options.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")))),(0,l.kt)("h2",{id:"data-structure"},"Data structure"),(0,l.kt)("p",null,"The data of a dataset for a meter chart is specified as single value. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the dataset\nMeterDataset dataset = chart.newDataset();\n// sets the value\ndataset.setValue(90.5D);\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"setData")," methods are available, inherited by a doughnut dataset, but you can ",(0,l.kt)("strong",{parentName:"p"},"NOT")," use them otherwise an exception will throw.",(0,l.kt)("br",null),"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"setValue")," instead."))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"The meter chart defines the following configuration options. It extends the ",(0,l.kt)("a",{parentName:"p",href:"ChartDoughnut"},"doughnut options"),"."),(0,l.kt)("p",null,"To set the options at chart level, you can get a typed object accordingly with the chart type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nMeterChart chart = new MeterChart();\n// gets options\nMeterOptions options = chart.getOptions();\n// sets options\noptions.setRender(Render.PERCENTAGE);\noptions.setPrecision(3);\n")),(0,l.kt)("p",null,"See ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"ChartDoughnut#options"},"doughnut chart"))," configuration how to configure the meter chart, in addition of following options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cutoutPercentage"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},'"90%"')),(0,l.kt)("td",{parentName:"tr",align:"left"},'Immutable property, always "90%".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"circumference"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"360")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Immutable property, always 360.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"rotation"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Immutable property, always 0.")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The meter chart disables the legend, tooltips and animation components."))),(0,l.kt)("h2",{id:"scriptable"},"Scriptable"),(0,l.kt)("p",null,"Scriptable options in the configuration accept a callback which is called for each animation cycle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nMeterDataset dataset = chart.newDataset();\n// sets the color\ndataset.getValueLabel().setColor(new ColorCallback<MeterContext>(){\n\n   @Override\n   public IsColor invoke(MeterContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,l.kt)("p",null,"The callbacks are getting the only 1 argument, the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/impl/charts/MeterContext.html"},"scriptable context")," which contains the context of the callback execution."),(0,l.kt)("p",null,"The context object contains the following properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"attributes"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/commons/NativeObjectContainer.html"},"NativeObjectContainer")),(0,l.kt)("td",{parentName:"tr",align:"left"},"User object which you can store your options at runtime.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"chart"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/IsChart.html"},"IsChart")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Chart instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"datasetLabel"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The label of the dataset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"easing"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The easing of drawing (between 0 and 1) for animation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"type"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/items/ContextType.html"},"ContextType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The type of the context. It can be ONLY ",(0,l.kt)("inlineCode",{parentName:"td"},"ContextType.METER"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value of meter or gauge dataset.")))),(0,l.kt)("p",null,"The meter chart can provide scriptable options by the meter data set and the labels."),(0,l.kt)("p",null,"The following options can be set by a callback:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","MeterContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"content"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/MeterContentCallback.html"},"MeterContentCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","MeterContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"format"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/MeterFormatCallback.html"},"MeterFormatCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String")))),(0,l.kt)("p",null,"Here is an example fo value formatting."),(0,l.kt)("img",{src:(0,o.Z)("/img/meterFormatting.png")}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates the dataset\nMeterDataset dataset = chart.newDataset();\n// sets the formatter\ndataset.getValueLabel().setFormatCallback(new MeterFormatCallback(){\n\n   @Override\n   public String invoke(MeterContext context){\n      // logic\n      return Utilities.applyPrecision(context.getValue(), 0) + " logged users";\n   }\n});\n')))}k.isMDXComponent=!0}}]);