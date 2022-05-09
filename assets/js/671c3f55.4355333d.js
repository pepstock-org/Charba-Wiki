"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[41079],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(a),u=n,k=d["".concat(p,".").concat(u)]||d[u]||h[u]||o;return a?r.createElement(k,l(l({ref:e},s),{},{components:a})):r.createElement(k,l({ref:e},s))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74166:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=a(44996),i=["components"],p={id:"ChartPolarArea",title:"PolarArea chart",hide_title:!0,sidebar_label:"PolarArea"},c=void 0,s={unversionedId:"ChartPolarArea",id:"version-3.3/ChartPolarArea",title:"PolarArea chart",description:"PolarArea chart",source:"@site/versioned_docs/version-3.3/ChartPolarArea.md",sourceDirName:".",slug:"/ChartPolarArea",permalink:"/Charba-Wiki/docs/3.3/ChartPolarArea",draft:!1,tags:[],version:"3.3",frontMatter:{id:"ChartPolarArea",title:"PolarArea chart",hide_title:!0,sidebar_label:"PolarArea"},sidebar:"version-3.3/docs",previous:{title:"Doughnut",permalink:"/Charba-Wiki/docs/3.3/ChartDoughnut"},next:{title:"Scatter",permalink:"/Charba-Wiki/docs/3.3/ChartScatter"}},h={},d=[{value:"PolarArea chart",id:"polararea-chart",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Data structure",id:"data-structure",level:2},{value:"Options",id:"options",level:2},{value:"Scriptable options for dataset",id:"scriptable-options-for-dataset",level:2}],u={toc:d};function k(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"polararea-chart"},"PolarArea chart"),(0,o.kt)("p",null,"(quoted from ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pie_chart#Polar_area_diagram"},"Polar area chart")," definition in Wikipedia)"),(0,o.kt)("p",null,"The polar area chart is similar to a usual pie chart, except sectors have equal angles and differ rather in how far each sector extends from the center of the circle. The polar area chart is used to plot cyclic phenomena."),(0,o.kt)("p",null,"Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value."),(0,o.kt)("p",null,"This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context."),(0,o.kt)("img",{src:(0,l.Z)("/img/polar.png")}),(0,o.kt)("h2",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"The polar area chart allows a number of properties to be specified for each ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/PolarAreaDataset.html"},"polar area dataset"),". These are used to set display properties for a specific dataset. "),(0,o.kt)("p",null,"The following are the attributes that you can set:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Callback"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,o.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The fill color/pattern of the arcs in the dataset.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"borderColor"),(0,o.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The border color of the arcs in the dataset.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"borderAlign"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/BorderAlign.html"},"BorderAlign")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The borders alignment of arcs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"borderWidth"),(0,o.kt)("td",{parentName:"tr",align:null},"int[]"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The border width of the arcs in the dataset.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hidden"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"if the dataset will appear or not.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hoverBackgroundColor"),(0,o.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The fill color/pattern of the arcs when hovered.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hoverBorderColor"),(0,o.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The stroke color of the arcs when hovered.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hoverBorderWidth"),(0,o.kt)("td",{parentName:"tr",align:null},"int[]"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The stroke width of the arcs when hovered.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"label"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"The label for the dataset which appears in the legend and tooltips.")))),(0,o.kt)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"PolarAreaChart chart = new PolarAreaChart();\n// for GWT\n// PolarAreaChartWidget chart = new PolarAreaChartWidget();\nPolarAreaDataset dataset = chart.newDataset();\n...\n...\nPolarAreaDataset datasetNew = new PolarAreaDataset();\n...\nchart.getData().setDatasets(dataset, datasetNew);\n")),(0,o.kt)("h2",{id:"data-structure"},"Data structure"),(0,o.kt)("p",null,"The data of a dataset for a polar area chart is specified as a an array of numbers. Each point in the data array corresponds to the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-"},"label")," at the same index on the axis."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"...\ndataset.setData(1,2,3,4,6);\n...\nList<Double> list = new LinkedList<>();\nlist.add(1);\nlist.add(2);\nlist.add(3);\n....\ndataset.setData(list);\n")),(0,o.kt)("p",null,"To provide context of what each point means, we include an array of strings that show around each point in the chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'...\nchart.getData().setLabels("label1", "label2");\n...\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"The polar area chart defines specific ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/PolarAreaOptions.html"},"options implementation")," to be configured. These options are merged with the global chart configuration options to form the options passed to the chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"PolarAreaChart chart = new PolarAreaChart();\n// for GWT\n// PolarAreaChartWidget chart = new PolarAreaChartWidget();\nPolarAreaOptions options = chart.getOptions();\n")),(0,o.kt)("h2",{id:"scriptable-options-for-dataset"},"Scriptable options for dataset"),(0,o.kt)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",(0,o.kt)("a",{parentName:"p",href:"Charts#callbacks-on-datasets-options"},"charts definition")," session. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"PolarAreaChart chart = new PolarAreaChart();\n// for GWT\n// PolarAreaChartWidget chart = new PolarAreaChartWidget();\nPolarAreaDataset dataset = chart.newDataset();\n\ndataset.setBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\ndataset.setBorderAlign(new BorderAlignCallback() {\n            \n    @Override\n    public BorderSkipped invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderAlign;\n    }\n});\n// -------------\n// HOVER\n// -------------\ndataset.setHoverBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setHoverBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setHoverBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html"},"backgroundColor")," callback can provide one of the following object types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html"},"borderColor")," callback can provide one of the following object types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))))}k.isMDXComponent=!0}}]);