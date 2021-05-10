(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{193:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return i})),a.d(e,"toc",(function(){return b})),a.d(e,"default",(function(){return s}));var r=a(3),n=a(8),o=(a(0),a(209)),l=a(210),c={id:"ChartPie",title:"Pie chart",hide_title:!0,sidebar_label:"Pie"},i={unversionedId:"ChartPie",id:"version-3.3/ChartPie",isDocsHomePage:!1,title:"Pie chart",description:"Pie chart",source:"@site/versioned_docs/version-3.3/ChartPie.md",sourceDirName:".",slug:"/ChartPie",permalink:"/Charba-Wiki/docs/3.3/ChartPie",version:"3.3",sidebar_label:"Pie",frontMatter:{id:"ChartPie",title:"Pie chart",hide_title:!0,sidebar_label:"Pie"},sidebar:"version-3.3/docs",previous:{title:"Radar chart",permalink:"/Charba-Wiki/docs/3.3/ChartRadar"},next:{title:"Doughnut chart",permalink:"/Charba-Wiki/docs/3.3/ChartDoughnut"}},b=[{value:"Pie chart",id:"pie-chart",children:[]},{value:"Dataset",id:"dataset",children:[]},{value:"Data structure",id:"data-structure",children:[]},{value:"Options",id:"options",children:[]},{value:"Scriptable options for dataset",id:"scriptable-options-for-dataset",children:[]}],p={toc:b};function s(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"pie-chart"},"Pie chart"),Object(o.b)("p",null,"(quoted from ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pie_chart"},"Pie chart")," definition in Wikipedia)"),Object(o.b)("p",null,"A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion. In a pie chart, the arc length of each slice (and consequently its central angle and area), is proportional to the quantity it represents."),Object(o.b)("p",null,"A pie charts are divided into segments, the arc of each segment shows the proportional value of each piece of data."),Object(o.b)("p",null,"They are excellent at showing the relational proportions between data."),Object(o.b)("img",{src:Object(l.a)("/img/pie.png")}),Object(o.b)("h2",{id:"dataset"},"Dataset"),Object(o.b)("p",null,"The pie chart allows a number of properties to be specified for each ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/PieDataset.html"},"pie dataset"),". These are used to set display properties for a specific dataset."),Object(o.b)("p",null,"The following are the attributes that you can set:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Callback"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"backgroundColor"),Object(o.b)("td",{parentName:"tr",align:null},"String[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The fill color/pattern of the arcs in the dataset.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"borderColor"),Object(o.b)("td",{parentName:"tr",align:null},"String[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The border color of the arcs in the dataset.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"borderWidth"),Object(o.b)("td",{parentName:"tr",align:null},"int[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The border width of the arcs in the dataset.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"borderAlign"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderAlign.html"},"BorderAlign")),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The borders alignment of arcs.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hidden"),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"if the dataset will appear or not.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hoverBackgroundColor"),Object(o.b)("td",{parentName:"tr",align:null},"String[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The fill color/pattern of the arcs when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hoverBorderColor"),Object(o.b)("td",{parentName:"tr",align:null},"String[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The stroke color of the arcs when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hoverBorderWidth"),Object(o.b)("td",{parentName:"tr",align:null},"int[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The stroke width of the arcs when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"label"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"The label for the dataset which appears in the legend and tooltips.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"weight"),Object(o.b)("td",{parentName:"tr",align:null},"double"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.")))),Object(o.b)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"PieChart chart = new PieChart();\n// for GWT\n// PieChartWidget chart = new PieChartWidget();\nPieDataset dataset = chart.newDataset();\n...\n...\nPieDataset datasetNew = new PieDataset();\n...\nchart.getData().setDatasets(dataset, datasetNew);\n")),Object(o.b)("h2",{id:"data-structure"},"Data structure"),Object(o.b)("p",null,"The data of a dataset for a pie chart is specified as a an array of numbers. Each point in the data array corresponds to the ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-"},"label")," at the same index."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"...\ndataset.setData(1,2,3,4,6);\n...\nList<Double> list = new LinkedList<>();\nlist.add(1);\nlist.add(2);\nlist.add(3);\n....\ndataset.setData(list);\n")),Object(o.b)("p",null,"To provide context of what each point means, we include an array of strings that show around each point in the chart."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'...\nchart.getData().setLabels("label1", "label2");\n...\n')),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,"The pie chart defines specific ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/PieOptions.html"},"options implementation")," to be configured. These options are merged with the global chart configuration options to form the options passed to the chart."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"PieChart chart = new PieChart();\n// for GWT\n// PieChartWidget chart = new PieChartWidget();\nPieOptions options = chart.getOptions();\n")),Object(o.b)("p",null,"The following are the attributes that you can set, on top of ",Object(o.b)("a",{parentName:"p",href:"General"},"common options")," and ",Object(o.b)("a",{parentName:"p",href:"Configuration"},"common elements")," for all charts:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Default"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"circumference"),Object(o.b)("td",{parentName:"tr",align:null},"double"),Object(o.b)("td",{parentName:"tr",align:null},"2 * Math.PI"),Object(o.b)("td",{parentName:"tr",align:null},"Sweep to allow arcs to cover")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"cutoutPercentage"),Object(o.b)("td",{parentName:"tr",align:null},"double"),Object(o.b)("td",{parentName:"tr",align:null},"0"),Object(o.b)("td",{parentName:"tr",align:null},"The percentage of the chart that is cut out of the middle.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"rotation"),Object(o.b)("td",{parentName:"tr",align:null},"double"),Object(o.b)("td",{parentName:"tr",align:null},"-0.5 * Math.PI"),Object(o.b)("td",{parentName:"tr",align:null},"Starting angle to draw arcs from.")))),Object(o.b)("h2",{id:"scriptable-options-for-dataset"},"Scriptable options for dataset"),Object(o.b)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",Object(o.b)("a",{parentName:"p",href:"Charts#callbacks-on-datasets-options"},"charts definition")," session. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"PieChart chart = new PieChart();\n// for GWT\n// PieChartWidget chart = new PieChartWidget();\nPieDataset dataset = chart.newDataset();\n\ndataset.setBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\ndataset.setBorderAlign(new BorderAlignCallback() {\n            \n    @Override\n    public BorderSkipped invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderAlign;\n    }\n});\n// -------------\n// HOVER\n// -------------\ndataset.setHoverBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setHoverBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setHoverBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\n")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html"},"backgroundColor")," callback can provide one of the following object types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html"},"borderColor")," callback can provide one of the following object types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))))}s.isMDXComponent=!0},209:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var b=n.a.createContext({}),p=function(t){var e=n.a.useContext(b),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},s=function(t){var e=p(t.components);return n.a.createElement(b.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},d=n.a.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,b=i(t,["components","mdxType","originalType","parentName"]),s=p(a),d=r,u=s["".concat(l,".").concat(d)]||s[d]||h[d]||o;return a?n.a.createElement(u,c(c({ref:e},b),{},{components:a})):n.a.createElement(u,c({ref:e},b))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,l[1]=c;for(var b=2;b<o;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},210:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return l}));var r=a(16),n=a(211);function o(){var t=Object(r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,c=void 0!==l&&l,i=o.absolute,b=void 0!==i&&i;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return e+a;var p=a.startsWith(e)?a:e+a.replace(/^\//,"");return b?t+p:p}(o,a,t,e)}}}function l(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},211:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return n}))}}]);