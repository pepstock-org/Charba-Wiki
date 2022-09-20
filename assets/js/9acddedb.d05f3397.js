"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[81353],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=d(a),k=n,g=c["".concat(p,".").concat(k)]||c[k]||h[k]||l;return a?r.createElement(g,o(o({ref:e},s),{},{components:a})):r.createElement(g,o({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},95673:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905)),l=a(44996);const o={id:"ChartStackedBar",title:"Stacked bar chart",hide_title:!0,sidebar_label:"Stacked bar"},i=void 0,p={unversionedId:"charts/ChartStackedBar",id:"version-5.5/charts/ChartStackedBar",title:"Stacked bar chart",description:"",source:"@site/versioned_docs/version-5.5/charts/StackedBar.md",sourceDirName:"charts",slug:"/charts/ChartStackedBar",permalink:"/Charba-Wiki/docs/5.5/charts/ChartStackedBar",draft:!1,tags:[],version:"5.5",frontMatter:{id:"ChartStackedBar",title:"Stacked bar chart",hide_title:!0,sidebar_label:"Stacked bar"},sidebar:"docs",previous:{title:"Stacked area",permalink:"/Charba-Wiki/docs/5.5/charts/ChartStackedArea"},next:{title:"Time series",permalink:"/Charba-Wiki/docs/5.5/charts/ChartTimeSeries"}},d={},s=[{value:"Stacked Bar chart",id:"stacked-bar-chart",level:2},{value:"Dataset",id:"dataset",level:2},{value:"General",id:"general",level:3},{value:"Styling",id:"styling",level:3},{value:"Interactions",id:"interactions",level:3},{value:"Scriptable",id:"scriptable",level:3},{value:"Data structure",id:"data-structure",level:2},{value:"Floating bars",id:"floating-bars",level:3},{value:"Options",id:"options",level:2}],h={toc:s};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"stacked-bar-chart"},"Stacked Bar chart"),(0,n.kt)("p",null,"Stacked bar charts can be configured like bar charts and changes the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces."),(0,n.kt)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=stacked"},(0,n.kt)("img",{src:(0,l.Z)("/img/stackbar.png")})),(0,n.kt)("p",null,"Programmatically, you could use a bar chart as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nStackedBarChart chart = new StackedBarChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,n.kt)("p",null,"By ",(0,n.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,n.kt)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a bar chart as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:StackedBarChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,n.kt)("h2",{id:"dataset"},"Dataset"),(0,n.kt)("p",null,"The stacked bar chart allows a number of properties to be specified for each ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/StackedBarDataset.html"},"stacked bar dataset"),". These are used to set display properties for a specific dataset."),(0,n.kt)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nStackedBarChart chart = new StackedBarChart();\n// creates the dataset\nStackedBarDataset dataset = chart.newDataset();\n// sets the option\ndataset.setBackgroundColor(HtmlColor.RED);\n...\n// creates the dataset\nStackedBarDataset datasetNew = new StackedBarDataset();\n// sets the option\ndatasetNew.setBackgroundColor(HtmlColor.RED);\n...\n// sets the datasets to the chart\nchart.getData().setDatasets(dataset, datasetNew);\n")),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"base"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double - double[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Base value for the bar in data units along the value axis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fill color/pattern of the bar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"barPercentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"barThickness"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The width of each bar in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The color of the bar border.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderSkipped"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/BorderSkipped.html"},"BorderSkipped")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Which edge to skip drawing the border for.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The bar border radius (in pixels).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The stroke width of the bar in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"categoryPercentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The percent (0-1) of the available width each category should be within the sample width.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean - double - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/Clip.html"},"Clip")),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"How to clip relative to chart area. Positive value allows overflow, negative value clips that many pixels inside chart area. When set to 0 means clip at chart area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"enableBorderRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", it only shows the border radius of a bar when the bar is at the end of the stack.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"grouped"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Should the bars be grouped on index axis.",(0,n.kt)("br",null),"When ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", all the datasets at same index value will be placed next to each other centering on that index value.",(0,n.kt)("br",null),"When ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),", each bar is placed on its actual index-axis value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fill color/pattern of the bars when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The stroke color of the bars when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The stroke width of the bars when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The bar border radius (in pixels) when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"indexAxis"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/IndexAxis.html"},"IndexAxis")),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The base axis of the dataset. 'IndexAxis.X' for vertical bars and 'IndexAxis.Y' for horizontal bars.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"label"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The label for the dataset which appears in the legend and tooltips.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"maxBarThickness"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum bar thickness, to ensure that bars are not sized thicker than this.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"minBarLength"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set this to ensure that bars have a minimum length in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"normalized"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", you provide data with indices that are unique, sorted, and consistent across data sets and provide the normalized.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The drawing order of dataset. Also affects order for stacking, tooltip, and legend.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"parsing"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),", the data set parsing is disable. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pointStyle"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/dom/elements/Img.html"},"Img")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Point style for legend.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"xAxisID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ID of the x axis to plot this dataset on.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"yAxisID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ID of the y axis to plot this dataset on.")))),(0,n.kt)("h3",{id:"general"},"General"),(0,n.kt)("p",null,"The general options for a stacked bar dataset can control behaviors not related to styling or interactions and they are the following:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Defaults"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"base"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Base value for the bar in data units along the value axis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Undefined.DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"How to clip relative to chart area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"indexAxis"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IndexAxis.X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The base axis of the dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"label"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The label for the dataset which appears in the legend and tooltips.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"normalized"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", you provide data with indices that are unique, sorted, and consistent across data sets and provide the normalized.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The drawing order of dataset. Also affects order for stacking, tooltips, and legend.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"parsing"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),", the data set parsing is disable. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"xAxisID"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/DefaultScaleId.html"},"DefaultScaleId.X")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ID of the x axis to plot this dataset on.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"yAxisID"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/DefaultScaleId.html"},"DefaultScaleId.Y")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ID of the y axis to plot this dataset on.")))),(0,n.kt)("h3",{id:"styling"},"Styling"),(0,n.kt)("p",null,"The style of each bar of the dataset can be configured by the following properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fill color of the bar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The color of the bar border.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderSkipped"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Which edge to skip drawing the border for.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The bar border radius (in pixels).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The stroke width of the bar in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"enableBorderRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", it only shows the border radius of a bar when the bar is at the end of the stack.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pointStyle"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Point style for legend.")))),(0,n.kt)("p",null,"All above options have got the fallback to the associated ",(0,n.kt)("a",{parentName:"p",href:"../configuration/Elements#bar"},"Bar")," element, retrievable by the following statements:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// from chart instance\nBar bar = chart.getOptions().getElements().getBar();\n// sets options for all bar datasets of the chart\nbar.setBorderRadius(6);\n...\n// from defaults\nBar defaultBar  = Defaults.get().getGlobal().getElements().getBar();\n// sets options for all bar datasets of all charts\ndefaultBar.setBorderRadius(6);\n")),(0,n.kt)("h3",{id:"interactions"},"Interactions"),(0,n.kt)("p",null,"The interactions can change the styling of each bar of the dataset which can set by the following properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fill color of the bars when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The stroke color of the bars when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The bar border radius (in pixels) when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The stroke width of the bars when hovered.")))),(0,n.kt)("p",null,"All above options have got the fallback to the associated ",(0,n.kt)("a",{parentName:"p",href:"../configuration/Elements#bar"},"Bar")," elements, retrievable by the following statements:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// from chart instance\nBar bar = chart.getOptions().getElements().getBar();\n// sets options for all bar datasets of the chart\nbar.setHoverBorderRadius(6);\n...\n// from defaults\nBar defaultBar  = Defaults.get().getGlobal().getElements().getBar();\n// sets options for all bar datasets of all charts\ndefaultBar.setHoverBorderRadius(6);\n")),(0,n.kt)("h3",{id:"scriptable"},"Scriptable"),(0,n.kt)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",(0,n.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates chart\nBarChart chart = new BarChart();\n// creates dataset\nBarDataset dataset = chart.newDataset();\n// sets the option by a callback \ndataset.setBackgroundColor(new ColorCallback<DatasetContext>(){\n\n   @Override\n   public IsColor invoke(DatasetContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,n.kt)("p",null,"The following options can be set by a callback:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"base"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/BaseCallback.html"},"BaseCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"double")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderSkipped"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/BorderSkippedCallback.html"},"BorderSkippedCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/BorderSkipped.html"},"BorderSkipped"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html"},"BorderRadiusCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/BarBorderWidthCallback.html"},"BarBorderWidthCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/BarBorderWidthCallback.html"},"BarBorderWidthCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html"},"BorderRadiusCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pointStyle"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/PointStyleCallback.html"},"PointStyleCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/dom/elements/Img.html"},"Img")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas"))))),(0,n.kt)("h2",{id:"data-structure"},"Data structure"),(0,n.kt)("p",null,"When the data is an array or list of doubles, the x axis is generally a category. The points are placed onto the axis using their position in the array. When a stacked bar chart is created with a category axis, the ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-"},"labels property of the data object")," must be specified."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// sets data as an array of doubles\ndataset.setData(1,2,3,4,6);\n\n// sets data as a list of double\nList<Double> list = new LinkedList<>();\nlist.add(1);\nlist.add(2);\nlist.add(3);\ndataset.setData(list);\n")),(0,n.kt)("h3",{id:"floating-bars"},"Floating bars"),(0,n.kt)("p",null,"You can also specify the dataset for a bar chart as list of floating bar data or by an array of arrays of doubles. This will force rendering of bars with the start and the end point of a bar respectively."),(0,n.kt)("img",{src:(0,l.Z)("/img/floatingStackedBar.png")}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"...\n// set in the constructor\nFloatingData fd1 = new FloatingData(10, 30);\n// set by method to update values\nFloatingData fd2 = new FloatingData();\nfd2.setValues(-10, 60)\n// stores the data to dataset\ndataset.setFloatingData(fd1, fd2);\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,"The stacked bar chart specific ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/StackedOptions.html"},"options implementation")," to be configured. These options are merged with the global chart configuration options to form the options passed to the chart."),(0,n.kt)("p",null,"To set the options at chart level, you can get a typed object accordingly with the chart type."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nStackedBarChart chart = new StackedBarChart();\n// gets the chart options\nStackedOptions options = chart.getOptions();\n// sets options\noptions.setResponsive(true);\n")))}c.isMDXComponent=!0}}]);