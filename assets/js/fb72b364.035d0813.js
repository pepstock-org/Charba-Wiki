"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[39266],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),h=c(a),k=n,g=h["".concat(p,".").concat(k)]||h[k]||d[k]||o;return a?r.createElement(g,l(l({ref:e},s),{},{components:a})):r.createElement(g,l({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},97149:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905)),o=a(44996);const l={id:"ChartStackedBar",title:"Stacked bar chart",hide_title:!0,sidebar_label:"Stacked bar"},i=void 0,p={unversionedId:"ChartStackedBar",id:"version-3.3/ChartStackedBar",title:"Stacked bar chart",description:"Stacked Bar chart",source:"@site/versioned_docs/version-3.3/ChartStackedBar.md",sourceDirName:".",slug:"/ChartStackedBar",permalink:"/Charba-Wiki/docs/3.3/ChartStackedBar",draft:!1,tags:[],version:"3.3",frontMatter:{id:"ChartStackedBar",title:"Stacked bar chart",hide_title:!0,sidebar_label:"Stacked bar"},sidebar:"version-3.3/docs",previous:{title:"Stacked area",permalink:"/Charba-Wiki/docs/3.3/ChartStackedArea"},next:{title:"Bubble",permalink:"/Charba-Wiki/docs/3.3/ChartBubble"}},c={},s=[{value:"Stacked Bar chart",id:"stacked-bar-chart",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Data structure",id:"data-structure",level:2},{value:"Floating bars",id:"floating-bars",level:3},{value:"Options",id:"options",level:2},{value:"Scriptable options for dataset",id:"scriptable-options-for-dataset",level:2}],d={toc:s};function h(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"stacked-bar-chart"},"Stacked Bar chart"),(0,n.kt)("p",null,"Stacked bar charts can be configured like bar charts and changes the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces."),(0,n.kt)("h2",{id:"dataset"},"Dataset"),(0,n.kt)("p",null,"The stacked bar chart allows a number of properties to be specified for each ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/StackedBarDataset.html"},"stacked bar dataset"),". These are used to set display properties for a specific dataset."),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Callback"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,n.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The fill color/pattern of the bar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"borderColor"),(0,n.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The color of the bar border.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"borderSkipped"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/BorderSkipped.html"},"BorderSkipped")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Which edge to skip drawing the border for.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"borderWidth"),(0,n.kt)("td",{parentName:"tr",align:null},"int[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The stroke width of the bar in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hidden"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"if the dataset will appear or not.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hoverBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The fill color/pattern of the bars when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hoverBorderColor"),(0,n.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The stroke color of the bars when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hoverBorderWidth"),(0,n.kt)("td",{parentName:"tr",align:null},"int[]"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The stroke width of the bars when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"label"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The label for the dataset which appears in the legend and tooltips.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The drawing order of dataset. Also affects order for stacking, tooltip, and legend. Default is 0.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/Type.html"},"Type")),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of dataset based on type of chart.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"xAxisID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis. See ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID"},"Scales")," object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"yAxisID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis. See ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID"},"Scales")," object.")))),(0,n.kt)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"StackedBarChart chart = new StackedBarChart();\n// for GWT\n// StackedBarChartWidget chart = new StackedBarChartWidget();\nStackedBarDataset dataset = chart.newDataset();\n...\n...\nStackedBarDataset datasetNew = new StackedBarDataset();\n...\nchart.getData().setDatasets(dataset, datasetNew);\n")),(0,n.kt)("h2",{id:"data-structure"},"Data structure"),(0,n.kt)("p",null,"When the data is an array or list of doubles, the x axis is generally a category. The points are placed onto the axis using their position in the array. When a stacked bar chart is created with a category axis, the ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-"},"labels property of the data object")," must be specified."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"...\ndataset.setData(1,2,3,4,6);\n...\nList<Double> list = new LinkedList<>();\nlist.add(1);\nlist.add(2);\nlist.add(3);\n....\ndataset.setData(list);\n")),(0,n.kt)("h3",{id:"floating-bars"},"Floating bars"),(0,n.kt)("p",null,"You can also specify the dataset for a bar chart as list of floating bar data or by an array of arrays of doubles. This will force rendering of bars with the start and the end point of a bar respectively."),(0,n.kt)("img",{src:(0,o.Z)("/img/floatingStackedBar.png")}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"...\n// set into constructor\nFloatingData fd1 = new FloatingData(10, 30);\n// set by method to update values\nFloatingData fd2 = new FloatingData();\nfd2.setValues(-10, 60)\n\ndataset.setFloatingData(fd1, fd2);\n...\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,"The stacked bar chart specific ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/StackedOptions.html"},"options implementation")," to be configured. These options are merged with the global chart configuration options to form the options passed to the chart."),(0,n.kt)("p",null,"To set the options at chart level, you can get a typed object accordingly with the chart type."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"StackedBarChart chart = new StackedBarChart();\n// for GWT\n// StackedBarChartWidget chart = new StackedBarChartWidget();\nStackedOptions options = chart.getOptions();\n")),(0,n.kt)("h2",{id:"scriptable-options-for-dataset"},"Scriptable options for dataset"),(0,n.kt)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",(0,n.kt)("a",{parentName:"p",href:"Charts#callbacks-on-datasets-options"},"charts definition")," session. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"StackedBarChart chart = new StackedBarChart();\n// for GWT\n// StackedBarChartWidget chart = new StackedBarChartWidget();\nStackedBarDataset dataset = chart.newDataset();\n\ndataset.setBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\n\ndataset.setBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\ndataset.setBorderSkipped(new BorderSkippedCallback() {\n            \n    @Override\n    public BorderSkipped invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderSkipped;\n    }\n});\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html"},"backgroundColor")," callback can provide one of the following object types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html"},"borderColor")," callback can provide one of the following object types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))))}h.isMDXComponent=!0}}]);