(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),o=(a(0),a(209)),l=a(210),c={id:"ChartPolarArea",title:"PolarArea chart",hide_title:!0,sidebar_label:"PolarArea"},i={unversionedId:"ChartPolarArea",id:"version-3.3/ChartPolarArea",isDocsHomePage:!1,title:"PolarArea chart",description:"PolarArea chart",source:"@site/versioned_docs/version-3.3/ChartPolarArea.md",sourceDirName:".",slug:"/ChartPolarArea",permalink:"/docs/3.3/ChartPolarArea",version:"3.3",sidebar_label:"PolarArea",frontMatter:{id:"ChartPolarArea",title:"PolarArea chart",hide_title:!0,sidebar_label:"PolarArea"},sidebar:"version-3.3/docs",previous:{title:"Doughnut chart",permalink:"/docs/3.3/ChartDoughnut"},next:{title:"Scatter chart",permalink:"/docs/3.3/ChartScatter"}},b=[{value:"PolarArea chart",id:"polararea-chart",children:[]},{value:"Dataset",id:"dataset",children:[]},{value:"Data structure",id:"data-structure",children:[]},{value:"Options",id:"options",children:[]},{value:"Scriptable options for dataset",id:"scriptable-options-for-dataset",children:[]}],p={toc:b};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"polararea-chart"},"PolarArea chart"),Object(o.b)("p",null,"(quoted from ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pie_chart#Polar_area_diagram"},"Polar area chart")," definition in Wikipedia)"),Object(o.b)("p",null,"The polar area chart is similar to a usual pie chart, except sectors have equal angles and differ rather in how far each sector extends from the center of the circle. The polar area chart is used to plot cyclic phenomena."),Object(o.b)("p",null,"Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value."),Object(o.b)("p",null,"This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context."),Object(o.b)("img",{src:Object(l.a)("/img/polar.png")}),Object(o.b)("h2",{id:"dataset"},"Dataset"),Object(o.b)("p",null,"The polar area chart allows a number of properties to be specified for each ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/PolarAreaDataset.html"},"polar area dataset"),". These are used to set display properties for a specific dataset. "),Object(o.b)("p",null,"The following are the attributes that you can set:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Callback"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"backgroundColor"),Object(o.b)("td",{parentName:"tr",align:null},"String[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The fill color/pattern of the arcs in the dataset.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"borderColor"),Object(o.b)("td",{parentName:"tr",align:null},"String[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The border color of the arcs in the dataset.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"borderAlign"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderAlign.html"},"BorderAlign")),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The borders alignment of arcs.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"borderWidth"),Object(o.b)("td",{parentName:"tr",align:null},"int[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The border width of the arcs in the dataset.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hidden"),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"if the dataset will appear or not.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hoverBackgroundColor"),Object(o.b)("td",{parentName:"tr",align:null},"String[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The fill color/pattern of the arcs when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hoverBorderColor"),Object(o.b)("td",{parentName:"tr",align:null},"String[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(o.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The stroke color of the arcs when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hoverBorderWidth"),Object(o.b)("td",{parentName:"tr",align:null},"int[]"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"The stroke width of the arcs when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"label"),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"The label for the dataset which appears in the legend and tooltips.")))),Object(o.b)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"PolarAreaChart chart = new PolarAreaChart();\n// for GWT\n// PolarAreaChartWidget chart = new PolarAreaChartWidget();\nPolarAreaDataset dataset = chart.newDataset();\n...\n...\nPolarAreaDataset datasetNew = new PolarAreaDataset();\n...\nchart.getData().setDatasets(dataset, datasetNew);\n")),Object(o.b)("h2",{id:"data-structure"},"Data structure"),Object(o.b)("p",null,"The data of a dataset for a polar area chart is specified as a an array of numbers. Each point in the data array corresponds to the ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-"},"label")," at the same index on the axis."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"...\ndataset.setData(1,2,3,4,6);\n...\nList<Double> list = new LinkedList<>();\nlist.add(1);\nlist.add(2);\nlist.add(3);\n....\ndataset.setData(list);\n")),Object(o.b)("p",null,"To provide context of what each point means, we include an array of strings that show around each point in the chart."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'...\nchart.getData().setLabels("label1", "label2");\n...\n')),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,"The polar area chart defines specific ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/PolarAreaOptions.html"},"options implementation")," to be configured. These options are merged with the global chart configuration options to form the options passed to the chart."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"PolarAreaChart chart = new PolarAreaChart();\n// for GWT\n// PolarAreaChartWidget chart = new PolarAreaChartWidget();\nPolarAreaOptions options = chart.getOptions();\n")),Object(o.b)("h2",{id:"scriptable-options-for-dataset"},"Scriptable options for dataset"),Object(o.b)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",Object(o.b)("a",{parentName:"p",href:"Charts#callbacks-on-datasets-options"},"charts definition")," session. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"PolarAreaChart chart = new PolarAreaChart();\n// for GWT\n// PolarAreaChartWidget chart = new PolarAreaChartWidget();\nPolarAreaDataset dataset = chart.newDataset();\n\ndataset.setBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\ndataset.setBorderAlign(new BorderAlignCallback() {\n            \n    @Override\n    public BorderSkipped invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderAlign;\n    }\n});\n// -------------\n// HOVER\n// -------------\ndataset.setHoverBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setHoverBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setHoverBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\n")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html"},"backgroundColor")," callback can provide one of the following object types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html"},"borderColor")," callback can provide one of the following object types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))))}s.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,u=s["".concat(l,".").concat(d)]||s[d]||h[d]||o;return a?n.a.createElement(u,c(c({ref:t},b),{},{components:a})):n.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<o;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var r=a(16),n=a(211);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,c=void 0!==l&&l,i=o.absolute,b=void 0!==i&&i;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+p:p}(o,a,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},211:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))}}]);