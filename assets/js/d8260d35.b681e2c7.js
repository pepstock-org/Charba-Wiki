"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[63156],{95788:(t,e,a)=>{a.d(e,{Iu:()=>s,yg:()=>b});var r=a(11504);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var g=r.createContext({}),p=function(t){var e=r.useContext(g),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(g.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,g=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(a),c=n,b=d["".concat(g,".").concat(c)]||d[c]||h[c]||l;return a?r.createElement(b,o(o({ref:e},s),{},{components:a})):r.createElement(b,o({ref:e},s))}));function b(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var g in e)hasOwnProperty.call(e,g)&&(i[g]=e[g]);i.originalType=t,i[d]="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},78028:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>g,toc:()=>s});var r=a(45072),n=(a(11504),a(95788)),l=a(70964);const o={id:"ChartBubble",title:"Bubble chart",hide_title:!0,sidebar_label:"Bubble"},i=void 0,g={unversionedId:"charts/ChartBubble",id:"version-5.5/charts/ChartBubble",title:"Bubble chart",description:"Bubble chart",source:"@site/versioned_docs/version-5.5/charts/Bubble.md",sourceDirName:"charts",slug:"/charts/ChartBubble",permalink:"/Charba-Wiki/docs/5.5/charts/ChartBubble",draft:!1,tags:[],version:"5.5",frontMatter:{id:"ChartBubble",title:"Bubble chart",hide_title:!0,sidebar_label:"Bubble"},sidebar:"docs",previous:{title:"Scatter",permalink:"/Charba-Wiki/docs/5.5/charts/ChartScatter"},next:{title:"Area",permalink:"/Charba-Wiki/docs/5.5/charts/ChartArea"}},p={},s=[{value:"Bubble chart",id:"bubble-chart",level:2},{value:"Dataset",id:"dataset",level:2},{value:"General",id:"general",level:3},{value:"Styling",id:"styling",level:3},{value:"Interactions",id:"interactions",level:3},{value:"Scriptable",id:"scriptable",level:3},{value:"Data structure",id:"data-structure",level:2},{value:"Options",id:"options",level:2}],d={toc:s},h="wrapper";function c(t){let{components:e,...a}=t;return(0,n.yg)(h,(0,r.c)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"bubble-chart"},"Bubble chart"),(0,n.yg)("p",null,"(quoted from ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bubble_chart"},"Bubble chart")," definition in Wikipedia)"),(0,n.yg)("p",null,"A bubble chart is a type of chart that displays three dimensions of data. Each entity with its triplet (x, y, r) of associated data is plotted as a disk that expresses two of the vi values through the disk's xy location and the third through its size."),(0,n.yg)("p",null,"Bubble charts can be considered a variation of the scatter plot, in which the data points are replaced with bubbles."),(0,n.yg)("p",null,"A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles"),(0,n.yg)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=bubble"},(0,n.yg)("img",{src:(0,l.c)("/img/bubble.png")})),(0,n.yg)("p",null,"Programmatically, you could use a bubble chart as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nBubbleChart chart = new BubbleChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,n.yg)("p",null,"By ",(0,n.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,n.yg)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a bubble chart as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:BubbleChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,n.yg)("h2",{id:"dataset"},"Dataset"),(0,n.yg)("p",null,"The bubble chart allows to define the data and a number of properties, used to display the data, by ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/BubbleDataset.html"},"bubble dataset"),"."),(0,n.yg)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nBubbleChart chart = new BubbleChart();\n// creates the dataset\nBubbleDataset dataset = chart.newDataset();\n// sets the option\ndataset.setBackgroundColor(HtmlColor.RED);\n...\n// creates the dataset\nBubbleDataset datasetNew = new BubbleDataset();\n// sets the option\ndatasetNew.setBackgroundColor(HtmlColor.RED);\n...\n// sets the datasets to the chart\nchart.getData().setDatasets(dataset, datasetNew);\n")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble background color.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble border color.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble border width (in pixels).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"clip"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean - double - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/Clip.html"},"Clip")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"How to clip relative to chart area. Positive value allows overflow, negative value clips that many pixels inside chart area.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"drawActiveElementsOnTop"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Draw the active bubbles of a dataset over the other bubbles of the dataset.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hitRadius"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble additional radius for hit detection (in pixels).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble background color when hovered.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble border color hovered.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble border width when hovered (in pixels) .")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hoverRadius"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble additional radius when hovered (in pixels).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"label"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The label for the dataset which appears in the legend and tooltips.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"order"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The drawing order of dataset. Also affects order for stacking, tooltips, and legend.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"normalized"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", you provide data with indices that are unique, sorted, and consistent across data sets and provide the normalized.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"pointStyle"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle"),"[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/dom/elements/Img.html"},"Img"),"[]  - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble shape style.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"parsing"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"false"),", the data set parsing is disable. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"radius"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble radius (in pixels).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rotation"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The rotation of the point in degrees.")))),(0,n.yg)("h3",{id:"general"},"General"),(0,n.yg)("p",null,"The general options for a bubble dataset can control behaviors not related to styling or interactions and they are the following:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Defaults"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"clip"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Undefined.DOUBLE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"How to clip relative to chart area.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"drawActiveElementsOnTop"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Draw the active bubbles of a dataset over the other bubbles of the dataset.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"label"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The label for the dataset which appears in the legend and tooltips.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"normalized"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", you provide data with indices that are unique, sorted, and consistent across data sets and provide the normalized.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"order"),(0,n.yg)("td",{parentName:"tr",align:"left"},"0"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The drawing order of dataset. Also affects order for stacking, tooltips, and legend.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"parsing"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"false"),", the data set parsing is disable. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.")))),(0,n.yg)("h3",{id:"styling"},"Styling"),(0,n.yg)("p",null,"The style of each point of the dataset can be configured by the following properties:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble background color.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble border color.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble border width (in pixels).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hitRadius"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble additional radius for hit detection (in pixels).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"normalized"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"false"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"pointStyle"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble shape style.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"parsing"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"true"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"radius"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble radius (in pixels).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rotation"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The rotation of the point in degrees.")))),(0,n.yg)("p",null,"All above options have got the fallback to the associated ",(0,n.yg)("a",{parentName:"p",href:"../configuration/Elements#point"},"Point")," elements, retrievable by the following statements:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// from chart instance\nPoint point = chart.getOptions().getElements().getPoint();\n// sets options for all line datasets of the chart\npoint.setRadius(6);\n...\n// from defaults\nPoint defaultPoint  = Defaults.get().getGlobal().getElements().getPoint();\n// sets options for all line datasets of all charts\ndefaultPoint.setRadius(6);\n")),(0,n.yg)("h3",{id:"interactions"},"Interactions"),(0,n.yg)("p",null,"The interaction with each point can be controlled with the following properties:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble background color when hovered.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble border color when hovered.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble border width (in pixels) when hovered.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hoverRadius"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The bubble radius (in pixels) when hovered.")))),(0,n.yg)("p",null,"All above options have got the fallback to the associated ",(0,n.yg)("a",{parentName:"p",href:"../configuration/Elements#point"},"Point")," elements, retrievable by the following statements:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// from chart instance\nPoint point = chart.getOptions().getElements().getPoint();\n// sets options for all line datasets of the chart\npoint.setRadius(6);\n...\n// from defaults\nPoint defaultPoint  = Defaults.get().getGlobal().getElements().getPoint();\n// sets options for all line datasets of all charts\ndefaultPoint.setRadius(6);\n")),(0,n.yg)("h3",{id:"scriptable"},"Scriptable"),(0,n.yg)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",(0,n.yg)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates chart\nBubbleChart chart = new BubbleChart();\n// creates dataset\nBubbleDataset dataset = chart.newDataset();\n// sets the option by a callback \ndataset.setBackgroundColor(new ColorCallback<DatasetContext>(){\n\n   @Override\n   public IsColor invoke(DatasetContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,n.yg)("p",null,"The following options can be set by a callback:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Callback"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"drawActiveElementsOnTop"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/DrawActiveElementsOnTopCallback.html"},"DrawActiveElementsOnTopCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hitRadius"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/RadiusCallback.html"},"RadiusCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"pointStyle"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/PointStyleCallback.html"},"PointStyleCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/dom/elements/Img.html"},"Img")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"radius"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/RadiusCallback.html"},"RadiusCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rotation"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/RotationCallback.html"},"RotationCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double")))),(0,n.yg)("h2",{id:"data-structure"},"Data structure"),(0,n.yg)("p",null,"Bubble chart datasets need to contain a data array of points, each point represented by an object containing ",(0,n.yg)("inlineCode",{parentName:"p"},"x"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"y")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"r"),"(radius) properties."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a datapoint\nDataPoint dp1 = new DataPoint();\ndp1.setX(10);\ndp1.setY(20);\n// Bubble radius in pixels (not scaled).\ndp1.setR(1);\n// sets data by an array of datapoints\ndataset.setDataPoint(dp1);\n")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"radius")," options is not scaled by the chart, it is the raw radius in pixels of the bubble that is drawn.")),(0,n.yg)("h2",{id:"options"},"Options"),(0,n.yg)("p",null,"The bubble chart defines specific ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/BubbleOptions.html"},"options implementation")," to be configured. These options are merged with the global chart configuration options to form the options passed to the chart."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates chart\nBubbleChart chart = new BubbleChart();\n// gets the chart options\nBubbleOptions options = chart.getOptions();\n// sets option\noptions.setResponsive(true);\n")))}c.isMDXComponent=!0}}]);