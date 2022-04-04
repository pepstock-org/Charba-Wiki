"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[12713],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(a),k=r,m=d["".concat(p,".").concat(k)]||d[k]||h[k]||o;return a?n.createElement(m,l(l({ref:e},c),{},{components:a})):n.createElement(m,l({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},14269:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(44996),i=["components"],p={id:"ChartSankey",title:"Sankey chart",hide_title:!0,sidebar_label:"Sankey"},s=void 0,c={unversionedId:"charts/ChartSankey",id:"version-4.2/charts/ChartSankey",title:"Sankey chart",description:"",source:"@site/versioned_docs/version-4.2/charts/Sankey.md",sourceDirName:"charts",slug:"/charts/ChartSankey",permalink:"/Charba-Wiki/docs/4.2/charts/ChartSankey",tags:[],version:"4.2",frontMatter:{id:"ChartSankey",title:"Sankey chart",hide_title:!0,sidebar_label:"Sankey"},sidebar:"version-4.2/docs",previous:{title:"Matrix",permalink:"/Charba-Wiki/docs/4.2/charts/ChartMatrix"},next:{title:"Api",permalink:"/Charba-Wiki/docs/4.2/charts/Api"}},h={},d=[{value:"Sankey chart",id:"sankey-chart",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Scriptable",id:"scriptable",level:3},{value:"Data structure",id:"data-structure",level:2},{value:"Data as objects",id:"data-as-objects",level:4},{value:"Options",id:"options",level:2},{value:"Scales",id:"scales",level:2}],k={toc:d};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sankey-chart"},"Sankey chart"),(0,o.kt)("p",null,"(quoted from ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sankey_diagram"},"Sankey chart")," definition in Wikipedia)"),(0,o.kt)("p",null,"Sankey charts are a type of flow diagram in which the width of the arrows is proportional to the flow rate."),(0,o.kt)("p",null,"The illustration shows a sankey chart that represents all the primary energy that flows into a factory. The widths of the bands are linearly proportional to energy production, utilization and loss. The primary energy inputs enter the left side of the diagram, and are differentiated into gas, electricity and coal/oil."),(0,o.kt)("p",null,"Sankey diagrams can also visualize the energy accounts, material flow accounts on a regional or national level, and cost breakdowns, and emphasize the major transfers or flows within a system. They help locate the most important contributions to a flow. They often show conserved quantities within defined system boundaries. "),(0,o.kt)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=sankey"},(0,o.kt)("img",{src:(0,l.Z)("/img/sankey.png")})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable sankey chart, leveraging on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kurkle/chartjs-chart-sankey"},"Chart.js Sankey"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kurkle/chartjs-chart-sankey"},"Chart.js Sankey")," is ",(0,o.kt)("em",{parentName:"p"},"native javascript")," implementation and ",(0,o.kt)("strong",{parentName:"p"},"Charba")," provides the wrapper in order to be able to use it."),(0,o.kt)("p",null,"Programmatically, you could use a bar chart as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nSankeyChart chart = new SankeyChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,o.kt)("p",null,"By ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,o.kt)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a bar chart as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:SankeyChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,o.kt)("h2",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"The sankey chart allows to define the data and a number of properties, used to display the data, by a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/SankeyDataset.html"},"sankey dataset"),"."),(0,o.kt)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nSankeyChart chart = new SankeyChart();\n// creates the dataset\nSankeyDataset dataset = chart.newDataset();\n// sets the option\ndataset.setColorMode(ColorMode.GRADIENT);\n...\n// creates the dataset\nSankeyDataset datasetNew = new SankeyDataset();\n// sets the option\ndatasetNew.setColorMode(ColorMode.GRADIENT);\n...\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,o.kt)("p",null,"The following are the attributes that you can set:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},"HtmlColor.BLACK - ",(0,o.kt)("span",{style:{backgroundColor:"rgb(0,0,0)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The color of the node border.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The stroke width of the sankey nodes in pixels.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"color"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},"HtmlColor.BLACK - ",(0,o.kt)("span",{style:{backgroundColor:"rgb(0,0,0)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The color of the node label.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"colorFrom"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"empty list"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The starting color of the flow between nodes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"colorMode"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/enums/ColorMode.html"},"ColorMode")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ColorMode.GRADIENT"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"How the flow is drawn on the chart.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"colorTo"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"empty list"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ending color of the flow between nodes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"font"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Defaults.get().getGlobal()"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},".getFont()")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Font of text of node label.",(0,o.kt)("br",null),"See ",(0,o.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"labels"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/Labels.html"},"Labels")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Is a map to apply a different label to the nodes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"nodeWidth"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"10"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The width of node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,o.kt)("td",{parentName:"tr",align:"left"},"double"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"font.getLineheight() / 2")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The padding of the node label from the top.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"priority"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/Priority.html"},"Priority")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Is a map to apply a different priority to the nodes, affecting the chart layout.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"size"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/enums/Size.html"},"Size")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Size.MAX"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Sets Size.MIN if flow overlap is preferred.")))),(0,o.kt)("h3",{id:"scriptable"},"Scriptable"),(0,o.kt)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",(0,o.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates chart\nSankeyChart chart = new SankeyChart();\n// creates dataset\nSankeyDataset dataset = chart.newDataset();\n// sets the option by a callback \ndataset.setColorFrom(new ColorCallback<DatasetContext>(){\n\n   @Override\n   public IsColor invoke(DatasetContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,o.kt)("p",null,"The following options can be set by a callback:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"colorFrom"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"colorMode"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/callbacks/ColorModeCallback.html"},"ColorModeCallback")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/enums/ColorMode.html"},"ColorMode"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"colorTo"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"font"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","DatasetContext",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/callbacks/PaddingCallback.html"},"PaddingCallback")),(0,o.kt)("td",{parentName:"tr",align:"left"},"double")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"size"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/callbacks/SizeCallback.html"},"SizeCallback")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/enums/Size.html"},"Size"))))),(0,o.kt)("h2",{id:"data-structure"},"Data structure"),(0,o.kt)("p",null,"The data of a dataset for a sankey chart can be passed in ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/SankeyDataPoint.html"},"sankey data points"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"setData")," method is available but you can ",(0,o.kt)("strong",{parentName:"p"},"NOT")," use them otherwise an exception will throw.",(0,o.kt)("br",null),"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"setDataPoints")," instead."))),(0,o.kt)("h4",{id:"data-as-objects"},"Data as objects"),(0,o.kt)("p",null,"Sankey data should be provided by a list of objects. The ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/SankeyDataPoint.html"},"sankey data point")," contains the relations between nodes and their value."),(0,o.kt)("p",null,"It needs to have ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," values, which represent the nodes, and ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," which represents the value of the sankey element."),(0,o.kt)("img",{src:(0,l.Z)("/img/sankeyCountries.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates chart\nSankeyChart chart = new SankeyChart();\n// creates dataset\nSankeyDataset dataset = chart.newDataset();\n// creates a list of data points\nList<SankeyDataPoint> datapoints = dataset1.getDataPoints(true);\ndatapoints.add(new SankeyDataPoint("a", "b", 20));\ndatapoints.add(new SankeyDataPoint("c", "d", 10));\ndatapoints.add(new SankeyDataPoint("c", "e", 5));\n// stores datapoints to dataset\ndataset.setDataPoints(datapoints);\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"The sankey chart defines specific ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/sankey/SankeyOptions.html"},"options implementation")," to be configured."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates chart\nSankeyChart chart = new SankeyChart();\n// gets the chart options\nSankeyOptions options = chart.getOptions();\n// sets option\noptions.setResponsive(true);\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The sankey chart disables the ",(0,o.kt)("a",{parentName:"p",href:"../extensions/DataLabels"},"DATALABELS"),", ",(0,o.kt)("a",{parentName:"p",href:"../extensions/Labels"},"LABELS"),", ",(0,o.kt)("a",{parentName:"p",href:"../extensions/Zoom"},"ZOOM"),", ",(0,o.kt)("a",{parentName:"p",href:"../extensions/Annotation"},"ANNOTATION"),", ",(0,o.kt)("a",{parentName:"p",href:"../plugins/PluginHTMLLegend"},"HTML legend"),", ",(0,o.kt)("a",{parentName:"p",href:"../plugins/PluginColorSchemes"},"color schemes")," and ",(0,o.kt)("a",{parentName:"p",href:"../plugins/PluginDatasetsItemsSelector"},"dataset items selector")," plugins and the options can ",(0,o.kt)("strong",{parentName:"p"},"NOT")," be set globally but only at chart level."))),(0,o.kt)("h2",{id:"scales"},"Scales"),(0,o.kt)("p",null,"The sankey chart can use cartesian ",(0,o.kt)("a",{parentName:"p",href:"../axes/CartesianLinearAxes"},"linear")," axes and they are not showed."))}m.isMDXComponent=!0}}]);