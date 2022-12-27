"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[40565],{3905:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},h=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,h=i(t,["components","mdxType","originalType","parentName"]),c=s(a),k=n,m=c["".concat(p,".").concat(k)]||c[k]||d[k]||l;return a?r.createElement(m,o(o({ref:e},h),{},{components:a})):r.createElement(m,o({ref:e},h))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},40431:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>h});var r=a(87462),n=(a(67294),a(3905)),l=a(44996);const o={id:"ChartPolarArea",title:"PolarArea chart",hide_title:!0,sidebar_label:"PolarArea"},i=void 0,p={unversionedId:"charts/ChartPolarArea",id:"version-5.1/charts/ChartPolarArea",title:"PolarArea chart",description:"",source:"@site/versioned_docs/version-5.1/charts/PolarArea.md",sourceDirName:"charts",slug:"/charts/ChartPolarArea",permalink:"/Charba-Wiki/docs/5.1/charts/ChartPolarArea",draft:!1,tags:[],version:"5.1",frontMatter:{id:"ChartPolarArea",title:"PolarArea chart",hide_title:!0,sidebar_label:"PolarArea"},sidebar:"docs",previous:{title:"Doughnut",permalink:"/Charba-Wiki/docs/5.1/charts/ChartDoughnut"},next:{title:"Scatter",permalink:"/Charba-Wiki/docs/5.1/charts/ChartScatter"}},s={},h=[{value:"PolarArea chart",id:"polararea-chart",level:2},{value:"Dataset",id:"dataset",level:2},{value:"General",id:"general",level:3},{value:"Styling",id:"styling",level:3},{value:"Interactions",id:"interactions",level:3},{value:"Scriptable",id:"scriptable",level:3},{value:"Data structure",id:"data-structure",level:2}],c={toc:h};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"polararea-chart"},"PolarArea chart"),(0,n.kt)("p",null,"(quoted from ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pie_chart#Polar_area_diagram"},"Polar area chart")," definition in Wikipedia)"),(0,n.kt)("p",null,"The polar area chart is similar to a usual pie chart, except sectors have equal angles and differ rather in how far each sector extends from the center of the circle. The polar area chart is used to plot cyclic phenomena."),(0,n.kt)("p",null,"Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value."),(0,n.kt)("p",null,"This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context."),(0,n.kt)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=polararea"},(0,n.kt)("img",{src:(0,l.Z)("/img/polar.png")})),(0,n.kt)("p",null,"Programmatically, you could use a polar area chart as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nPolarAreaChart chart = new PolarAreaChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,n.kt)("p",null,"By ",(0,n.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,n.kt)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a polar area chart as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:PolarAreaChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,n.kt)("h2",{id:"dataset"},"Dataset"),(0,n.kt)("p",null,"The polar area chart allows to define the data and a number of properties, used to display the data, by ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/PolarAreaDataset.html"},"polar area dataset"),"."),(0,n.kt)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nPolarAreaChart chart = new PolarAreaChart();\n// creates the dataset\nPolarAreaDataset dataset = chart.newDataset();\n// sets the option\ndataset.setBackgroundColor(HtmlColor.RED);\n...\n// creates the dataset\nPolarAreaDataset datasetNew = new PolarAreaDataset();\n// sets the option\ndatasetNew.setBackgroundColor(HtmlColor.RED);\n...\n// sets the datasets to the chart\nchart.getData().setDatasets(dataset, datasetNew);\n")),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fill color/pattern of the arcs in the dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderAlign"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/BorderAlign.html"},"BorderAlign")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The borders alignment of arcs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The border color of the arcs in the dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderJoinStyle"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/JoinStyle.html"},"JoinStyle"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Arc line joint style. See ",(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin"},"MDN"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The border width of the arcs in the dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean - double - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/Clip.html"},"Clip")),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"How to clip relative to chart area. Positive value allows overflow, negative value clips that many pixels inside chart area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fill color/pattern of the arcs when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The stroke color of the arcs when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderJoinStyle"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/JoinStyle.html"},"JoinStyle"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Arc line joint style, when hovered. See ",(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin"},"MDN"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The stroke width of the arcs when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"label"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The label for the dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"normalized"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", you provide data with indices that are unique, sorted, and consistent across data sets and provide the normalized.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"parsing"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),", the data set parsing is disable. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.")))),(0,n.kt)("h3",{id:"general"},"General"),(0,n.kt)("p",null,"The general options for a polar area dataset can control behaviors not related to styling or interactions and they are the following:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Defaults"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Undefined.DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"How to clip relative to chart area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"label"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The label for the dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"normalized"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", you provide data with indices that are unique, sorted, and consistent across data sets and provide the normalized.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"parsing"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),", the data set parsing is disable. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"label")," options is just a pure label to add to the dataset and is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," the label for the dataset which appears in the legend and tooltips.")),(0,n.kt)("h3",{id:"styling"},"Styling"),(0,n.kt)("p",null,"The style of each arc of the dataset can be configured by the following properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fill color of the arcs in the dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderAlign"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The borders alignment of arcs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The border color for arcs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderJoinStyle"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Arc line joint style")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The width of the arc border in pixels.")))),(0,n.kt)("p",null,"All above options have got the fallback to the associated ",(0,n.kt)("a",{parentName:"p",href:"../configuration/Elements#arc"},"Arc")," elements, retrievable by the following statements:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// from chart instance\nArc arc = chart.getOptions().getElements().getArc();\n// sets options for all pie datasets of the chart\narc.setBorderWidth(3);\n...\n// from defaults\nArc defaultArc  = Defaults.get().getGlobal().getElements().getArc();\n// sets options for all pie datasets of all charts\ndefaultArc.setBorderWidth(3);\n")),(0,n.kt)("h3",{id:"interactions"},"Interactions"),(0,n.kt)("p",null,"The interaction with each point can be controlled with the following properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fill color of the arcs in the dataset when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The border color for arcs when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderJoinStyle"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Arc line joint style when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The width of the arc border in pixels when hovered.")))),(0,n.kt)("p",null,"All above options have got the fallback to the associated ",(0,n.kt)("a",{parentName:"p",href:"../configuration/Elements#arc"},"Arc")," elements, retrievable by the following statements:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// from chart instance\nArc arc = chart.getOptions().getElements().getArc();\n// sets options for all pie datasets of the chart\narc.setBorderWidth(3);\n...\n// from defaults\nArc defaultArc  = Defaults.get().getGlobal().getElements().getArc();\n// sets options for all pie datasets of all charts\ndefaultArc.setBorderWidth(3);\n")),(0,n.kt)("h3",{id:"scriptable"},"Scriptable"),(0,n.kt)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",(0,n.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nPolarAreaChart chart = new PolarAreaChart();\n// creates the dataset\nPolarAreaDataset dataset = chart.newDataset();\n// sets the option by a callback \ndataset.setBackgroundColor(new ColorCallback<DatasetContext>(){\n\n   @Override\n   public IsColor invoke(DatasetContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,n.kt)("p",null,"The following options can be set by a callback:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderAlign"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/BorderAlignCallback.html"},"BorderAlignCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/BorderAlign.html"},"BorderAlign"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderJoinStyle"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/JoinStyleCallback.html"},"JoinStyleCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/JoinStyle.html"},"JoinStyle"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderJoinStyle"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/JoinStyleCallback.html"},"JoinStyleCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/JoinStyle.html"},"JoinStyle"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","DatasetContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int")))),(0,n.kt)("h2",{id:"data-structure"},"Data structure"),(0,n.kt)("p",null,"The data of a dataset for a polar area chart is specified as a an array of numbers. Each point in the data array corresponds to the ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-"},"label")," at the same index on the axis."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// sets data as an array of doubles\ndataset.setData(1,2,3,4,6);\n\n// sets data as a list of double\nList<Double> list = new LinkedList<>();\nlist.add(1);\nlist.add(2);\nlist.add(3);\ndataset.setData(list);\n")),(0,n.kt)("p",null,"To provide context of what each point means, we include an array of strings that show around each point in the chart."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'...\nchart.getData().setLabels("label1", "label2");\n...\n')))}d.isMDXComponent=!0}}]);