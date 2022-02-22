"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[6758],{3905:function(t,e,a){a.d(e,{Zo:function(){return h},kt:function(){return m}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},h=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,h=l(t,["components","mdxType","originalType","parentName"]),d=s(a),m=n,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(k,i(i({ref:e},h),{},{components:a})):r.createElement(k,i({ref:e},h))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52078:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return h},toc:function(){return c},default:function(){return m}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=a(44996),l=["components"],p={id:"ChartMatrix",title:"Matrix chart",hide_title:!0,sidebar_label:"Matrix"},s=void 0,h={unversionedId:"charts/ChartMatrix",id:"charts/ChartMatrix",title:"Matrix chart",description:"Matrix chart",source:"@site/docs/charts/Matrix.md",sourceDirName:"charts",slug:"/charts/ChartMatrix",permalink:"/Charba-Wiki/docs/charts/ChartMatrix",tags:[],version:"current",frontMatter:{id:"ChartMatrix",title:"Matrix chart",hide_title:!0,sidebar_label:"Matrix"},sidebar:"docs",previous:{title:"TreeMap",permalink:"/Charba-Wiki/docs/charts/ChartTreeMap"},next:{title:"Sankey",permalink:"/Charba-Wiki/docs/charts/ChartSankey"}},c=[{value:"Matrix chart",id:"matrix-chart",children:[],level:2},{value:"Dataset",id:"dataset",children:[{value:"Scriptable",id:"scriptable",children:[],level:3}],level:2},{value:"Data structure",id:"data-structure",children:[{value:"Data as objects",id:"data-as-objects",children:[],level:4}],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Scales",id:"scales",children:[],level:2}],d={toc:c};function m(t){var e=t.components,a=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"matrix-chart"},"Matrix chart"),(0,o.kt)("p",null,"(quoted from ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Heat_map"},"Matrix chart")," definition in Wikipedia)"),(0,o.kt)("p",null,"A matrix chart is a data visualization technique that shows magnitude of a phenomenon as color in two dimensions. The variation in color may be by hue or intensity, giving obvious visual cues to the reader about how the phenomenon is clustered or varies over space."),(0,o.kt)("p",null,"Matrix originated in 2D displays of the values in a data matrix. Larger values were represented by darker colored squares and smaller values by lighter colored squares."),(0,o.kt)("a",{href:"https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=matrix"},(0,o.kt)("img",{src:(0,i.Z)("/img/matrix.png")})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable matrix chart, leveraging on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kurkle/chartjs-chart-matrix"},"Chart.js Matrix"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kurkle/chartjs-chart-matrix"},"Chart.js Matrix")," is ",(0,o.kt)("em",{parentName:"p"},"native javascript")," implementation and ",(0,o.kt)("strong",{parentName:"p"},"Charba")," provides the wrapper in order to be able to use it."),(0,o.kt)("p",null,"Programmatically, you could use a bar chart as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nMatrixChart chart = new MatrixChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),(0,o.kt)("p",null,"By ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",(0,o.kt)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a bar chart as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:MatrixChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,o.kt)("h2",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"The matrix chart allows to define the data and a number of properties, used to display the data, by a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/matrix/MatrixDataset.html"},"matrix dataset"),"."),(0,o.kt)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nMatrixChart chart = new MatrixChart();\n// creates the dataset\nMatrixDataset dataset = chart.newDataset();\n// sets the option\ndataset.setBackgroundColor(HtmlColor.RED);\n...\n// creates the dataset\nMatrixDataset datasetNew = new MatrixDataset();\n// sets the option\ndatasetNew.setBackgroundColor(HtmlColor.RED);\n...\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,o.kt)("p",null,"The following are the attributes that you can set:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Defaults.get().getGlobal()"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},".getBackgroundColorAsString()")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The fill color/pattern of the matrix element.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Defaults.get().getGlobal()"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},".getBorderColorAsString()")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The color of the matrix element border.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The border radius (in pixels) of matrix element.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The stroke width of the matrix element in pixels.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"height"),(0,o.kt)("td",{parentName:"tr",align:"left"},"double"),(0,o.kt)("td",{parentName:"tr",align:"left"},"20"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The height of matrix element.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Defaults.get().getGlobal()"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},".getBackgroundColorAsString()")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The fill color/pattern of the matrix elements when hovered.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Defaults.get().getGlobal()"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},".getBorderColorAsString()")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The stroke color of the matrix elements when hovered.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The stroke width of the matrix elements when hovered.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"width"),(0,o.kt)("td",{parentName:"tr",align:"left"},"double"),(0,o.kt)("td",{parentName:"tr",align:"left"},"20"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The width of matrix element.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"xAnchor"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/matrix/enums/Anchor.html"},"Anchor")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Anchor.CENTER"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Set the horizontal anchor value of the matrix elements. ",(0,o.kt)("br",null),"For this property, only Anchor.LEFT, Anchor.RIGHT and Anchor.CENTER are valid.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"yAnchor"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/matrix/enums/Anchor.html"},"Anchor")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Anchor.CENTER"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Set the vertical anchor value of the matrix elements. ",(0,o.kt)("br",null),"For this property, only Anchor.TOP, Anchor.BOTTOM and Anchor.CENTER are valid.")))),(0,o.kt)("h3",{id:"scriptable"},"Scriptable"),(0,o.kt)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",(0,o.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates chart\nMatrixChart chart = new MatrixChart();\n// creates dataset\nMatrixDataset dataset = chart.newDataset();\n// sets the option by a callback \ndataset.setBackgroundColor(new ColorCallback<DatasetContext>(){\n\n   @Override\n   public IsColor invoke(DatasetContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,o.kt)("p",null,"The following options can be set by a callback:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html"},"BorderRadiusCallback"),"<","DatasetContext",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/BarBorderWidthCallback.html"},"BarBorderWidthCallback")),(0,o.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"height"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/matrix/callbacks/SizeCallback.html"},"SizeCallback")),(0,o.kt)("td",{parentName:"tr",align:"left"},"double")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/BarBorderWidthCallback.html"},"BarBorderWidthCallback")),(0,o.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"width"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/matrix/callbacks/SizeCallback.html"},"SizeCallback")),(0,o.kt)("td",{parentName:"tr",align:"left"},"double")))),(0,o.kt)("h2",{id:"data-structure"},"Data structure"),(0,o.kt)("p",null,"The data of a dataset for a matrix chart can be passed in ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/matrix/MatrixDataPoint.html"},"matrix data points"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"setData")," method is available but you can ",(0,o.kt)("strong",{parentName:"p"},"NOT")," use them otherwise an exception will throw.",(0,o.kt)("br",null),"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"setDataPoints")," instead."))),(0,o.kt)("h4",{id:"data-as-objects"},"Data as objects"),(0,o.kt)("p",null,"Matrix data should be provided by a list of objects. The ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/matrix/MatrixDataPoint.html"},"matrix data point")," needs to have ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," values to bind to the axes to set, and ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," which represents the value of the matrix element."),(0,o.kt)("img",{src:(0,i.Z)("/img/matrixTimeAxes.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates chart\nMatrixChart chart = new MatrixChart();\n// creates dataset\nMatrixDataset dataset = chart.newDataset();\n// creates a list of data points\nList<MatrixDataPoint> points = new LinkedList<>();\n// creates the start and end dates\nDate end = adapter.startOf(new Date(), TimeUnit.DAY);\nDate start = adapter.add(end, -365, TimeUnit.DAY);\n// for each day, it creates a data point  \nwhile (start.getTime() <= end.getTime()) {\n    // x is the date in ISO format, y is the week of the day, and then the value\n    MatrixDataPoint point = new MatrixDataPoint(adapter.format(start, "yyyy-MM-dd")\n        , adapter.format(start, "EEE")\n        , getRandomDigit(0, 100));\n    // adds to the list\n    points.add(point);\n    // increments the date of 1 day\n    start = adapter.add(start, 1, TimeUnit.DAY);\n}\n// stores datapoints to dataset\ndataset.setDataPoints(points);\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"The matrix chart defines specific ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/matrix/MatrixOptions.html"},"options implementation")," to be configured."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates chart\nMatrixChart chart = new MatrixChart();\n// gets the chart options\nMatrixOptions options = chart.getOptions();\n// sets option\noptions.setResponsive(true);\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The matrix chart disables the ",(0,o.kt)("a",{parentName:"p",href:"../extensions/DataLabels"},"DATALABELS")," and ",(0,o.kt)("a",{parentName:"p",href:"../extensions/Labels"},"LABELS")," plugins and the options can ",(0,o.kt)("strong",{parentName:"p"},"NOT")," be set globally but only at chart level."))),(0,o.kt)("h2",{id:"scales"},"Scales"),(0,o.kt)("p",null,"The matrix chart can use cartesian ",(0,o.kt)("a",{parentName:"p",href:"../axes/CartesianTimeAxes"},"time"),", ",(0,o.kt)("a",{parentName:"p",href:"../axes/CartesianLinearAxes"},"linear")," or ",(0,o.kt)("a",{parentName:"p",href:"../axes/CartesianCategoryAxes"},"category")," axes."))}m.isMDXComponent=!0}}]);