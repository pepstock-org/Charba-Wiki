(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{205:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return b})),a.d(e,"toc",(function(){return i})),a.d(e,"default",(function(){return s}));var r=a(3),n=a(8),o=(a(0),a(209)),c=a(210),l={id:"ChartStackedBar",title:"Stacked bar chart",hide_title:!0,sidebar_label:"Stacked bar"},b={unversionedId:"ChartStackedBar",id:"version-3.3/ChartStackedBar",isDocsHomePage:!1,title:"Stacked bar chart",description:"Stacked Bar chart",source:"@site/versioned_docs/version-3.3/ChartStackedBar.md",sourceDirName:".",slug:"/ChartStackedBar",permalink:"/docs/3.3/ChartStackedBar",version:"3.3",sidebar_label:"Stacked bar",frontMatter:{id:"ChartStackedBar",title:"Stacked bar chart",hide_title:!0,sidebar_label:"Stacked bar"},sidebar:"version-3.3/docs",previous:{title:"Stacked area chart",permalink:"/docs/3.3/ChartStackedArea"},next:{title:"Bubble chart",permalink:"/docs/3.3/ChartBubble"}},i=[{value:"Stacked Bar chart",id:"stacked-bar-chart",children:[]},{value:"Dataset",id:"dataset",children:[]},{value:"Data structure",id:"data-structure",children:[{value:"Floating bars",id:"floating-bars",children:[]}]},{value:"Options",id:"options",children:[]},{value:"Scriptable options for dataset",id:"scriptable-options-for-dataset",children:[]}],p={toc:i};function s(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"stacked-bar-chart"},"Stacked Bar chart"),Object(o.b)("p",null,"Stacked bar charts can be configured like bar charts and changes the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces."),Object(o.b)("h2",{id:"dataset"},"Dataset"),Object(o.b)("p",null,"The stacked bar chart allows a number of properties to be specified for each ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/StackedBarDataset.html"},"stacked bar dataset"),". These are used to set display properties for a specific dataset."),Object(o.b)("p",null,"The following are the attributes that you can set:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Callback"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"backgroundColor"),Object(o.b)("td",{parentName:"tr",align:null},"String[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The fill color/pattern of the bar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"borderColor"),Object(o.b)("td",{parentName:"tr",align:null},"String[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The color of the bar border.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"borderSkipped"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderSkipped.html"},"BorderSkipped")),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Which edge to skip drawing the border for.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"borderWidth"),Object(o.b)("td",{parentName:"tr",align:null},"int[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth")),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The stroke width of the bar in pixels.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hidden"),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"if the dataset will appear or not.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hoverBackgroundColor"),Object(o.b)("td",{parentName:"tr",align:null},"String[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"The fill color/pattern of the bars when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hoverBorderColor"),Object(o.b)("td",{parentName:"tr",align:null},"String[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"The stroke color of the bars when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hoverBorderWidth"),Object(o.b)("td",{parentName:"tr",align:null},"int[]"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"The stroke width of the bars when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"label"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"The label for the dataset which appears in the legend and tooltips.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"order"),Object(o.b)("td",{parentName:"tr",align:null},"int"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"The drawing order of dataset. Also affects order for stacking, tooltip, and legend. Default is 0.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"type"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Type.html"},"Type")),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"The type of dataset based on type of chart.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"xAxisID"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis. See ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID"},"Scales")," object.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"yAxisID"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis. See ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID"},"Scales")," object.")))),Object(o.b)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"StackedBarChart chart = new StackedBarChart();\n// for GWT\n// StackedBarChartWidget chart = new StackedBarChartWidget();\nStackedBarDataset dataset = chart.newDataset();\n...\n...\nStackedBarDataset datasetNew = new StackedBarDataset();\n...\nchart.getData().setDatasets(dataset, datasetNew);\n")),Object(o.b)("h2",{id:"data-structure"},"Data structure"),Object(o.b)("p",null,"When the data is an array or list of doubles, the x axis is generally a category. The points are placed onto the axis using their position in the array. When a stacked bar chart is created with a category axis, the ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-"},"labels property of the data object")," must be specified."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"...\ndataset.setData(1,2,3,4,6);\n...\nList<Double> list = new LinkedList<>();\nlist.add(1);\nlist.add(2);\nlist.add(3);\n....\ndataset.setData(list);\n")),Object(o.b)("h3",{id:"floating-bars"},"Floating bars"),Object(o.b)("p",null,"You can also specify the dataset for a bar chart as list of floating bar data or by an array of arrays of doubles. This will force rendering of bars with the start and the end point of a bar respectively."),Object(o.b)("img",{src:Object(c.a)("/img/floatingStackedBar.png")}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"...\n// set into constructor\nFloatingData fd1 = new FloatingData(10, 30);\n// set by method to update values\nFloatingData fd2 = new FloatingData();\nfd2.setValues(-10, 60)\n\ndataset.setFloatingData(fd1, fd2);\n...\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,"The stacked bar chart specific ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/StackedOptions.html"},"options implementation")," to be configured. These options are merged with the global chart configuration options to form the options passed to the chart."),Object(o.b)("p",null,"To set the options at chart level, you can get a typed object accordingly with the chart type."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"StackedBarChart chart = new StackedBarChart();\n// for GWT\n// StackedBarChartWidget chart = new StackedBarChartWidget();\nStackedOptions options = chart.getOptions();\n")),Object(o.b)("h2",{id:"scriptable-options-for-dataset"},"Scriptable options for dataset"),Object(o.b)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",Object(o.b)("a",{parentName:"p",href:"Charts#callbacks-on-datasets-options"},"charts definition")," session. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"StackedBarChart chart = new StackedBarChart();\n// for GWT\n// StackedBarChartWidget chart = new StackedBarChartWidget();\nStackedBarDataset dataset = chart.newDataset();\n\ndataset.setBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\n\ndataset.setBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\ndataset.setBorderSkipped(new BorderSkippedCallback() {\n            \n    @Override\n    public BorderSkipped invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderSkipped;\n    }\n});\n")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html"},"backgroundColor")," callback can provide one of the following object types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html"},"borderColor")," callback can provide one of the following object types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))))}s.isMDXComponent=!0},209:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=n.a.createContext({}),p=function(t){var e=n.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=p(t.components);return n.a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},h=n.a.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,i=b(t,["components","mdxType","originalType","parentName"]),s=p(a),h=r,u=s["".concat(c,".").concat(h)]||s[h]||d[h]||o;return a?n.a.createElement(u,l(l({ref:e},i),{},{components:a})):n.a.createElement(u,l({ref:e},i))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,c=new Array(o);c[0]=h;var l={};for(var b in e)hasOwnProperty.call(e,b)&&(l[b]=e[b]);l.originalType=t,l.mdxType="string"==typeof t?t:r,c[1]=l;for(var i=2;i<o;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},210:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return c}));var r=a(16),n=a(211);function o(){var t=Object(r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,l=void 0!==c&&c,b=o.absolute,i=void 0!==b&&b;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(l)return e+a;var p=a.startsWith(e)?a:e+a.replace(/^\//,"");return i?t+p:p}(o,a,t,e)}}}function c(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},211:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return n}))}}]);