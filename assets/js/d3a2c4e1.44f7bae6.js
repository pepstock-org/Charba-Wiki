"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[95784],{3905:function(t,a,e){e.d(a,{Zo:function(){return h},kt:function(){return u}});var r=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var p=r.createContext({}),s=function(t){var a=r.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},h=function(t){var a=s(t.components);return r.createElement(p.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,h=i(t,["components","mdxType","originalType","parentName"]),d=s(e),u=n,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return e?r.createElement(k,l(l({ref:a},h),{},{components:e})):r.createElement(k,l({ref:a},h))}));function u(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var o=e.length,l=new Array(o);l[0]=d;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=e[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},92027:function(t,a,e){e.r(a),e.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return d}});var r=e(87462),n=e(63366),o=(e(67294),e(3905)),l=e(44996),i=["components"],p={id:"ChartBar",title:"Bar chart",hide_title:!0,sidebar_label:"Bar"},s=void 0,h={unversionedId:"ChartBar",id:"version-3.3/ChartBar",title:"Bar chart",description:"Bar chart",source:"@site/versioned_docs/version-3.3/ChartBar.md",sourceDirName:".",slug:"/ChartBar",permalink:"/Charba-Wiki/docs/3.3/ChartBar",tags:[],version:"3.3",frontMatter:{id:"ChartBar",title:"Bar chart",hide_title:!0,sidebar_label:"Bar"},sidebar:"version-3.3/docs",previous:{title:"Introduction",permalink:"/Charba-Wiki/docs/3.3/Charts"},next:{title:"Horizontal bar",permalink:"/Charba-Wiki/docs/3.3/ChartHorizontalBar"}},c={},d=[{value:"Bar chart",id:"bar-chart",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Data structure",id:"data-structure",level:2},{value:"Data as doubles",id:"data-as-doubles",level:4},{value:"Data as DataPoint",id:"data-as-datapoint",level:4},{value:"Floating bars",id:"floating-bars",level:4},{value:"Options",id:"options",level:2},{value:"Scriptable options for dataset",id:"scriptable-options-for-dataset",level:2}],u={toc:d};function k(t){var a=t.components,e=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bar-chart"},"Bar chart"),(0,o.kt)("p",null,"(quoted from ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bar_chart"},"Bar chart")," definition in Wikipedia)"),(0,o.kt)("p",null,"A bar chart is a chart that presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent. The bars can be plotted vertically or horizontally."),(0,o.kt)("p",null,"A bar chart shows comparisons among discrete categories. One axis of the chart shows the specific categories being compared, and the other axis represents a measured value. Some bar charts present bars clustered in groups of more than one, showing the values of more than one measured variable. "),(0,o.kt)("img",{src:(0,l.Z)("/img/bar.png")}),(0,o.kt)("h2",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"The bar chart allows a number of properties to be specified for each ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/BarDataset.html"},"bar dataset"),". These are used to set display properties for a specific dataset."),(0,o.kt)("p",null,"The following are the attributes that you can set:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Callback"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,o.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The fill color/pattern of the bar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"borderColor"),(0,o.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The color of the bar border.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"borderSkipped"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/BorderSkipped.html"},"BorderSkipped")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Which edge to skip drawing the border for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"borderWidth"),(0,o.kt)("td",{parentName:"tr",align:null},"int[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The stroke width of the bar in pixels.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hidden"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"if the dataset will appear or not.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hoverBackgroundColor"),(0,o.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"The fill color/pattern of the bars when hovered.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hoverBorderColor"),(0,o.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"The stroke color of the bars when hovered.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hoverBorderWidth"),(0,o.kt)("td",{parentName:"tr",align:null},"int[]"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"The stroke width of the bars when hovered.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"label"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"The label for the dataset which appears in the legend and tooltips.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"order"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"The drawing order of dataset. Also affects order for stacking, tooltip, and legend. Default is 0.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"type"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/Type.html"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of dataset based on type of chart.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"xAxisID"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis. See ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID"},"Scales")," object.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yAxisID"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis. See ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID"},"Scales")," object.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"barPercentage"),(0,o.kt)("td",{parentName:"tr",align:null},"double"),(0,o.kt)("td",{parentName:"tr",align:null},"0.9"),(0,o.kt)("td",{parentName:"tr",align:null},"The percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"barThickness"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"The width of each bar in pixels.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"categoryPercentage"),(0,o.kt)("td",{parentName:"tr",align:null},"double"),(0,o.kt)("td",{parentName:"tr",align:null},"0.8"),(0,o.kt)("td",{parentName:"tr",align:null},"The percent (0-1) of the available width each category should be within the sample width.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"maxBarThickness"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum bar thickness, to ensure that bars are not sized thicker than this.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"minBarLength"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"Set this to ensure that bars have a minimum length in pixels.")))),(0,o.kt)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BarChart chart = new BarChart();\n// for GWT widget\n// BarChartWidget chart = new BarChartWidget();\nBarDataset dataset = chart.newDataset();\n...\n...\nBarDataset datasetNew = new BarDataset();\n...\nchart.getData().setDatasets(dataset, datasetNew);\n")),(0,o.kt)("h2",{id:"data-structure"},"Data structure"),(0,o.kt)("p",null,"The data of a dataset for a bar chart can be passed in two formats."),(0,o.kt)("h4",{id:"data-as-doubles"},"Data as doubles"),(0,o.kt)("p",null,"When the data is an array or list of doubles, the x axis is generally a category. The points are placed onto the axis using their position in the array. When a bar chart is created with a category axis, the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-"},"labels property of the data object")," must be specified."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"...\ndataset.setData(1,2,3,4,6);\n...\nList<Double> list = new LinkedList<>();\nlist.add(1);\nlist.add(2);\nlist.add(3);\n....\ndataset.setData(list);\n")),(0,o.kt)("h4",{id:"data-as-datapoint"},"Data as DataPoint"),(0,o.kt)("p",null,"You can also specify the dataset when using the time series charts. Each data point is specified using an object containing ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," (as time type) properties for time series."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"...\nDataPoint dp1 = new DataPoint();\ndp1.setY(10);\ndp1.setX(new Date());\n\nDataPoint dp2 = new DataPoint();\ndp2.setY(30);\ndp2.setX(new Date());\n\ndataset.setDataPoint(dp1, dp2);\n...\n")),(0,o.kt)("h4",{id:"floating-bars"},"Floating bars"),(0,o.kt)("p",null,"You can also specify the dataset for a bar chart as list of floating bar data or by an array of arrays of doubles. This will force rendering of bars with the start and the end point of a bar respectively."),(0,o.kt)("img",{src:(0,l.Z)("/img/floatingBar.png")}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"...\n// set into constructor\nFloatingData fd1 = new FloatingData(10, 30);\n// set by method to update values\nFloatingData fd2 = new FloatingData();\nfd2.setValues(-10, 60)\n\ndataset.setFloatingData(fd1, fd2);\n...\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"The bar chart defines specific ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/BarOptions.html"},"options implementation")," to be configured. These options are merged with the global chart configuration options to form the options passed to the chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BarChart chart = new BarChart();\n// for GWT widget\n// BarChartWidget chart = new BarChartWidget();\nBarOptions options = chart.getOptions();\n")),(0,o.kt)("h2",{id:"scriptable-options-for-dataset"},"Scriptable options for dataset"),(0,o.kt)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",(0,o.kt)("a",{parentName:"p",href:"Charts#callbacks-on-datasets-options"},"charts definition")," session. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BarChart chart = new BarChart();\n// for GWT widget\n// BarChartWidget chart = new BarChartWidget();\nBarDataset dataset = chart.newDataset();\n\ndataset.setBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\n\ndataset.setBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\ndataset.setBorderSkipped(new BorderSkippedCallback() {\n            \n    @Override\n    public BorderSkipped invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderSkipped;\n    }\n});\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html"},"backgroundColor")," callback can provide one of the following object types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html"},"borderColor")," callback can provide one of the following object types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))))}k.isMDXComponent=!0}}]);