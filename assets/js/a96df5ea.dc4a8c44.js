"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[17181],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),b=s(a),h=n,u=b["".concat(p,".").concat(h)]||b[h]||d[h]||l;return a?r.createElement(u,o(o({ref:e},c),{},{components:a})):r.createElement(u,o({ref:e},c))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=b;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},58408:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(44996);const o={id:"ChartBubble",title:"Bubble chart",hide_title:!0,sidebar_label:"Bubble"},i=void 0,p={unversionedId:"ChartBubble",id:"version-3.3/ChartBubble",title:"Bubble chart",description:"Bubble chart",source:"@site/versioned_docs/version-3.3/ChartBubble.md",sourceDirName:".",slug:"/ChartBubble",permalink:"/Charba-Wiki/docs/3.3/ChartBubble",draft:!1,tags:[],version:"3.3",frontMatter:{id:"ChartBubble",title:"Bubble chart",hide_title:!0,sidebar_label:"Bubble"},sidebar:"version-3.3/docs",previous:{title:"Stacked bar",permalink:"/Charba-Wiki/docs/3.3/ChartStackedBar"},next:{title:"Introduction",permalink:"/Charba-Wiki/docs/3.3/Axes"}},s={},c=[{value:"Bubble chart",id:"bubble-chart",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Data structure",id:"data-structure",level:2},{value:"Options",id:"options",level:2},{value:"Scriptable options for dataset",id:"scriptable-options-for-dataset",level:2}],d={toc:c};function b(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"bubble-chart"},"Bubble chart"),(0,n.kt)("p",null,"(quoted from ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bubble_chart"},"Bubble chart")," definition in Wikipedia)"),(0,n.kt)("p",null,"A bubble chart is a type of chart that displays three dimensions of data. Each entity with its triplet (x, y, r) of associated data is plotted as a disk that expresses two of the vi values through the disk's xy location and the third through its size."),(0,n.kt)("p",null,"Bubble charts can be considered a variation of the scatter plot, in which the data points are replaced with bubbles."),(0,n.kt)("p",null,"A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles"),(0,n.kt)("img",{src:(0,l.Z)("/img/bubble.png")}),(0,n.kt)("h2",{id:"dataset"},"Dataset"),(0,n.kt)("p",null,"The bubble chart allows a number of properties to be specified for each ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/BubbleDataset.html"},"bubble dataset"),". These are used to set display properties for a specific dataset. For example, the color of the bubbles is generally set this way."),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Callback"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,n.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"bubble background color")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"borderColor"),(0,n.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"bubble border color")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"borderWidth"),(0,n.kt)("td",{parentName:"tr",align:null},"int[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"bubble border width (in pixels)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hidden"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"if the dataset will appear or not.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hitRadius"),(0,n.kt)("td",{parentName:"tr",align:null},"double[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"bubble additional radius for hit detection (in pixels)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hoverBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"bubble background color when hovered")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hoverBorderColor"),(0,n.kt)("td",{parentName:"tr",align:null},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"bubble border color hovered")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hoverBorderWidth"),(0,n.kt)("td",{parentName:"tr",align:null},"int[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"bubble border width when hovered (in pixels)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hoverRadius"),(0,n.kt)("td",{parentName:"tr",align:null},"double[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"bubble additional radius when hovered (in pixels)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"label"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The label for the dataset which appears in the legend and tooltips.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The drawing order of dataset. Also affects order for stacking, tooltip, and legend. Default is 0.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pointStyle"),(0,n.kt)("td",{parentName:"tr",align:null},"PointStyle[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"bubble shape style")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"radius"),(0,n.kt)("td",{parentName:"tr",align:null},"double[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"bubble radius (in pixels)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rotation"),(0,n.kt)("td",{parentName:"tr",align:null},"double[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"the rotation of the point in degrees.")))),(0,n.kt)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"BubbleChart chart = new BubbleChart();\n// for GWT widget\n// BubbleChartWidget chart = new BubbleChartWidget();\nBubbleDataset dataset = chart.newDataset();\n...\n...\nBubbleDataset datasetNew = new BubbleDataset();\n...\nchart.getData().setDatasets(dataset, datasetNew);\n")),(0,n.kt)("h2",{id:"data-structure"},"Data structure"),(0,n.kt)("p",null,"Bubble chart datasets need to contain a data array of points, each points represented by an object containing containing ",(0,n.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"y")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"r"),"(radius) properties."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"...\nDataPoint dp1 = new DataPoint();\ndp1.setX(10);\ndp1.setY(20);\n// Bubble radius in pixels (not scaled).\ndp1.setR(1);\n\ndataset.setDataPoint(dp1);\n...\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important"),": the radius property is not scaled by the chart, it is the raw radius in pixels of the bubble that is drawn."),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,"The bubble chart specific ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/BubbleOptions.html"},"options implementation")," to be configured These options are merged with the global chart configuration options to form the options passed to the chart."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"BubbleChart chart = new BubbleChart();\n// for GWT widget\n// BubbleChartWidget chart = new BubbleChartWidget();\nBubbleOptions options = chart.getOptions();\n")),(0,n.kt)("h2",{id:"scriptable-options-for-dataset"},"Scriptable options for dataset"),(0,n.kt)("p",null,"Scriptable options at dataset level also accept a callback which is called for each of the underlying data values. See more details in ",(0,n.kt)("a",{parentName:"p",href:"Charts#callbacks-on-datasets-options"},"charts definition")," session. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"BubbleChart chart = new BubbleChart();\n// for GWT widget\n// BubbleChartWidget chart = new BubbleChartWidget();\nBubbleDataset dataset = chart.newDataset();\n\ndataset.setBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\n// -------------\n// HOVER\n// -------------\ndataset.setHoverBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setHoverBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setHoverBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\n// -------------\n// RADIUS\n// -------------\ndataset.setRadius(new RadiusCallback() {\n\n    @Override\n    public Double invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return radius;\n    }\n});\ndataset.setHoverRadius(new RadiusCallback() {\n\n    @Override\n    public Double invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return radius;\n    }\n});\ndataset.setHitRadius(new RadiusCallback() {\n\n    @Override\n    public Double invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return radius;\n    }\n});\n// -------------\n// Others\n// -------------\ndataset.setRotation(new RotationCallback() {\n\n    @Override\n    public Double invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return rotation;\n    }\n});\ndataset.setPointStyle(new PointStyleCallback() {\n\n    @Override\n    public PointStyle invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return pointStyle;\n    }\n});\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html"},"backgroundColor")," callback can provide one of the following object types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html"},"borderColor")," callback can provide one of the following object types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))))}b.isMDXComponent=!0}}]);