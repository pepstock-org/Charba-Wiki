"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[63732],{95788:(e,t,a)=>{a.d(t,{Iu:()=>g,yg:()=>d});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),y=s(a),h=n,d=y["".concat(p,".").concat(h)]||y[h]||c[h]||o;return a?r.createElement(d,l(l({ref:t},g),{},{components:a})):r.createElement(d,l({ref:t},g))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[y]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},49092:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var r=a(45072),n=(a(11504),a(95788)),o=a(70964);const l={id:"ChartSankey",title:"Sankey chart",hide_title:!0,sidebar_label:"Sankey"},i=void 0,p={unversionedId:"charts/ChartSankey",id:"version-5.2/charts/ChartSankey",title:"Sankey chart",description:"Sankey chart",source:"@site/versioned_docs/version-5.2/charts/Sankey.md",sourceDirName:"charts",slug:"/charts/ChartSankey",permalink:"/Charba-Wiki/docs/5.2/charts/ChartSankey",draft:!1,tags:[],version:"5.2",frontMatter:{id:"ChartSankey",title:"Sankey chart",hide_title:!0,sidebar_label:"Sankey"},sidebar:"docs",previous:{title:"Matrix",permalink:"/Charba-Wiki/docs/5.2/charts/ChartMatrix"},next:{title:"Api",permalink:"/Charba-Wiki/docs/5.2/charts/Api"}},s={},g=[{value:"Sankey chart",id:"sankey-chart",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Scriptable",id:"scriptable",level:3},{value:"Data structure",id:"data-structure",level:2},{value:"Data as objects",id:"data-as-objects",level:4},{value:"Options",id:"options",level:2},{value:"Scales",id:"scales",level:2}],y={toc:g},c="wrapper";function h(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.c)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"sankey-chart"},"Sankey chart"),(0,n.yg)("p",null,"(quoted from ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sankey_diagram"},"Sankey chart")," definition in Wikipedia)"),(0,n.yg)("p",null,"Sankey charts are a type of flow diagram in which the width of the arrows is proportional to the flow rate."),(0,n.yg)("p",null,"The illustration shows a sankey chart that represents all the primary energy that flows into a factory. The widths of the bands are linearly proportional to energy production, utilization and loss. The primary energy inputs enter the left side of the diagram, and are differentiated into gas, electricity and coal/oil."),(0,n.yg)("p",null,"Sankey diagrams can also visualize the energy accounts, material flow accounts on a regional or national level, and cost breakdowns, and emphasize the major transfers or flows within a system. They help locate the most important contributions to a flow. They often show conserved quantities within defined system boundaries. "),(0,n.yg)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=sankey"},(0,n.yg)("img",{src:(0,o.c)("/img/sankey.png")})),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable sankey chart, leveraging on ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/kurkle/chartjs-chart-sankey"},"Chart.js Sankey"),"."),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/kurkle/chartjs-chart-sankey"},"Chart.js Sankey")," is ",(0,n.yg)("em",{parentName:"p"},"native javascript")," implementation and ",(0,n.yg)("strong",{parentName:"p"},"Charba")," provides the wrapper in order to be able to use it."),(0,n.yg)("p",null,"Programmatically, you could use a bar chart as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nSankeyChart chart = new SankeyChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,n.yg)("p",null,"By ",(0,n.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,n.yg)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a bar chart as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:SankeyChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,n.yg)("h2",{id:"dataset"},"Dataset"),(0,n.yg)("p",null,"The sankey chart allows to define the data and a number of properties, used to display the data, by a ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/SankeyDataset.html"},"sankey dataset"),"."),(0,n.yg)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nSankeyChart chart = new SankeyChart();\n// creates the dataset\nSankeyDataset dataset = chart.newDataset();\n// sets the option\ndataset.setColorMode(ColorMode.GRADIENT);\n...\n// creates the dataset\nSankeyDataset datasetNew = new SankeyDataset();\n// sets the option\ndatasetNew.setColorMode(ColorMode.GRADIENT);\n...\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"HtmlColor.BLACK - ",(0,n.yg)("span",{style:{backgroundColor:"rgb(0,0,0)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The color of the node border.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The stroke width of the sankey nodes in pixels.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"HtmlColor.BLACK - ",(0,n.yg)("span",{style:{backgroundColor:"rgb(0,0,0)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The color of the node label.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"colorFrom"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"empty list"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The starting color of the flow between nodes.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"colorMode"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/enums/ColorMode.html"},"ColorMode")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ColorMode.GRADIENT"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"How the flow is drawn on the chart.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"colorTo"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"empty list"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The ending color of the flow between nodes.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"column"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/Column.html"},"Column")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Is a map to apply a specific position, by column number, to the nodes, affecting the chart layout.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"font"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"Defaults.get().getGlobal()"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},".getFont()")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Font of text of node label.",(0,n.yg)("br",null),"See ",(0,n.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"labels"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/Labels.html"},"Labels")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Is a map to apply a different label to the nodes.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"nodeWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The width of node.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"font.getLineheight() / 2")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The padding of the node label from the top.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"priority"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/Priority.html"},"Priority")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Is a map to apply a different priority to the nodes, affecting the chart layout.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"size"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/enums/Size.html"},"Size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Size.MAX"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Sets Size.MIN if flow overlap is preferred.")))),(0,n.yg)("h3",{id:"scriptable"},"Scriptable"),(0,n.yg)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",(0,n.yg)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates chart\nSankeyChart chart = new SankeyChart();\n// creates dataset\nSankeyDataset dataset = chart.newDataset();\n// sets the option by a callback \ndataset.setColorFrom(new ColorCallback<DatasetContext>(){\n\n   @Override\n   public IsColor invoke(DatasetContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,n.yg)("p",null,"The following options can be set by a callback:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Callback"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"colorFrom"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"colorMode"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/callbacks/ColorModeCallback.html"},"ColorModeCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/enums/ColorMode.html"},"ColorMode"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"colorTo"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"font"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","DatasetContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/callbacks/PaddingCallback.html"},"PaddingCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"double")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"size"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/callbacks/SizeCallback.html"},"SizeCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/enums/Size.html"},"Size"))))),(0,n.yg)("h2",{id:"data-structure"},"Data structure"),(0,n.yg)("p",null,"The data of a dataset for a sankey chart can be passed in ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/SankeyDataPoint.html"},"sankey data points"),"."),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"setData")," method is available but you can ",(0,n.yg)("strong",{parentName:"p"},"NOT")," use them otherwise an exception will throw.",(0,n.yg)("br",null),"Use ",(0,n.yg)("inlineCode",{parentName:"p"},"setDataPoints")," instead.")),(0,n.yg)("h4",{id:"data-as-objects"},"Data as objects"),(0,n.yg)("p",null,"Sankey data should be provided by a list of objects. The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/SankeyDataPoint.html"},"sankey data point")," contains the relations between nodes and their value."),(0,n.yg)("p",null,"It needs to have ",(0,n.yg)("inlineCode",{parentName:"p"},"from")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"to")," values, which represent the nodes, and ",(0,n.yg)("inlineCode",{parentName:"p"},"value")," which represents the value of the sankey element."),(0,n.yg)("img",{src:(0,o.c)("/img/sankeyCountries.png")}),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates chart\nSankeyChart chart = new SankeyChart();\n// creates dataset\nSankeyDataset dataset = chart.newDataset();\n// creates a list of data points\nList<SankeyDataPoint> datapoints = dataset1.getDataPoints(true);\ndatapoints.add(new SankeyDataPoint("a", "b", 20));\ndatapoints.add(new SankeyDataPoint("c", "d", 10));\ndatapoints.add(new SankeyDataPoint("c", "e", 5));\n// stores datapoints to dataset\ndataset.setDataPoints(datapoints);\n')),(0,n.yg)("h2",{id:"options"},"Options"),(0,n.yg)("p",null,"The sankey chart defines specific ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/sankey/SankeyOptions.html"},"options implementation")," to be configured."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates chart\nSankeyChart chart = new SankeyChart();\n// gets the chart options\nSankeyOptions options = chart.getOptions();\n// sets option\noptions.setResponsive(true);\n")),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The sankey chart disables the ",(0,n.yg)("a",{parentName:"p",href:"../extensions/DataLabels"},"DATALABELS"),", ",(0,n.yg)("a",{parentName:"p",href:"../extensions/Labels"},"LABELS"),", ",(0,n.yg)("a",{parentName:"p",href:"../extensions/Zoom"},"ZOOM"),", ",(0,n.yg)("a",{parentName:"p",href:"../extensions/Annotation"},"ANNOTATION"),", ",(0,n.yg)("a",{parentName:"p",href:"../plugins/PluginHTMLLegend"},"HTML legend"),", ",(0,n.yg)("a",{parentName:"p",href:"../plugins/PluginColorSchemes"},"color schemes")," and ",(0,n.yg)("a",{parentName:"p",href:"../plugins/PluginDatasetsItemsSelector"},"dataset items selector")," plugins and the options can ",(0,n.yg)("strong",{parentName:"p"},"NOT")," be set globally but only at chart level.")),(0,n.yg)("h2",{id:"scales"},"Scales"),(0,n.yg)("p",null,"The sankey chart can use cartesian ",(0,n.yg)("a",{parentName:"p",href:"../axes/CartesianLinearAxes"},"linear")," axes and they are not showed."))}h.isMDXComponent=!0}}]);