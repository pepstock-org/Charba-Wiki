"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[9465],{3905:function(t,n,e){e.d(n,{Zo:function(){return u},kt:function(){return k}});var a=e(7294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var p=a.createContext({}),s=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},u=function(t){var n=s(t.components);return a.createElement(p.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),h=s(e),k=l,g=h["".concat(p,".").concat(k)]||h[k]||c[k]||r;return e?a.createElement(g,o(o({ref:n},u),{},{components:e})):a.createElement(g,o({ref:n},u))}));function k(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,o=new Array(r);o[0]=h;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var s=2;s<r;s++)o[s]=e[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}h.displayName="MDXCreateElement"},3919:function(t,n,e){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function l(t){return void 0!==t&&!a(t)}e.d(n,{b:function(){return a},Z:function(){return l}})},4996:function(t,n,e){e.d(n,{C:function(){return r},Z:function(){return o}});var a=e(2263),l=e(3919);function r(){var t=(0,a.Z)().siteConfig,n=(t=void 0===t?{}:t).baseUrl,e=void 0===n?"/":n,r=t.url;return{withBaseUrl:function(t,n){return function(t,n,e,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,i=void 0!==o&&o,p=r.absolute,s=void 0!==p&&p;if(!e)return e;if(e.startsWith("#"))return e;if((0,l.b)(e))return e;if(i)return n+e;var u=e.startsWith(n)?e:n+e.replace(/^\//,"");return s?t+u:u}(r,e,t,n)}}}function o(t,n){return void 0===n&&(n={}),(0,r().withBaseUrl)(t,n)}},8454:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return k}});var a=e(7462),l=e(3366),r=(e(7294),e(3905)),o=e(4996),i=["components"],p={id:"Annotation",title:"Annotation plugin",hide_title:!0,sidebar_label:"Annotation"},s=void 0,u={unversionedId:"Annotation",id:"version-3.3/Annotation",isDocsHomePage:!1,title:"Annotation plugin",description:"Annotation plugin",source:"@site/versioned_docs/version-3.3/Annotation.md",sourceDirName:".",slug:"/Annotation",permalink:"/Charba-Wiki/docs/3.3/Annotation",tags:[],version:"3.3",frontMatter:{id:"Annotation",title:"Annotation plugin",hide_title:!0,sidebar_label:"Annotation"},sidebar:"version-3.3/docs",previous:{title:"Zoom",permalink:"/Charba-Wiki/docs/3.3/Zoom"},next:{title:"Utilities",permalink:"/Charba-Wiki/docs/3.3/Utilities"}},c=[{value:"Annotation plugin",id:"annotation-plugin",children:[]},{value:"Activation",id:"activation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Box annotation",id:"box-annotation",children:[]},{value:"Line annotation",id:"line-annotation",children:[]},{value:"Label line annotation",id:"label-line-annotation",children:[]},{value:"Events on annotations",id:"events-on-annotations",children:[]}],h={toc:c};function k(t){var n=t.components,e=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"annotation-plugin"},"Annotation plugin"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chartjs/chartjs-plugin-annotation"},"Annotation")," which can add annotations (boxes and lines) on a chart instance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," is injecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"chartjs-plugin-annotation.min.js"),", at ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," commit id ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chartjs/chartjs-plugin-annotation"},"7037eea71314613a8af83d2298241841cbc34c4f"),"."),(0,r.kt)("img",{src:(0,o.Z)("/img/annotation.png")}),(0,r.kt)("h2",{id:"activation"},"Activation"),(0,r.kt)("p",null,"The annotation plugin is injected directly into document."),(0,r.kt)("p",null,"The plugin ID is a constant everywhere available, ",(0,r.kt)("inlineCode",{parentName:"p"},"AnnotationPlugin.ID"),", in ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/AnnotationPlugin.html"},"AnnotationPlugin")," entry point."),(0,r.kt)("p",null,"This plugin registers itself globally, meaning that once injected, all charts will display labels. In case you want it enabled only for a few charts, you can enable it as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// enabling the plugin without any parameter\n// the plugin is NOT registered to all charts\n// --------------------------------------\nAnnotationPlugin.enable();\n\n// --------------------------------------\n// enabling the plugin with `true` parameter\n// the plugin is registered to all charts\n// --------------------------------------\nAnnotationPlugin.enable(true);\n")),(0,r.kt)("p",null,"To activate the plugin in a specific chart, it's enough to provide the configuration options (see ",(0,r.kt)("a",{parentName:"p",href:"Annotation#configuration"},"below"),") or enabling it by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// enabling the plugin to a chart instance \n// by an options\n// --------------------------------------\nchart.getOptions().getPlugins().setOptions(AnnotationPlugin.ID, options);\n\n// --------------------------------------\n// Another way to store the plugin options\n// enabling the plugin to a chart instance \n// --------------------------------------\nchart.getOptions().getPlugins().setOptions(options);\n\n// --------------------------------------\n// enabling the plugin to a chart instance \n// by a boolean using default\n// --------------------------------------\nchart.getOptions().getPlugins().setEnabled(AnnotationPlugin.ID, true);\n")),(0,r.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/AnnotationOptionsFactory.html"},"AnnotationOptionsFactory")," as static reference inside the ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/AnnotationPlugin.html"},"AnnotationPlugin")," entry point which can be used to retrieve the options from chart as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// reads the options from chart\n// --------------------------------------\nAnnotationOptions options;\n\nif (chart.getOptions().getPlugins().hasOptions(AnnotationPlugin.ID)){\n   // --------------------------------------\n   // retrieve the plugin options by plugin ID\n   // --------------------------------------\n   options = chart.getOptions().getPlugins().getOptions(AnnotationPlugin.ID, AnnotationPlugin.FACTORY);\n   // --------------------------------------\n   // or retrieve the plugin options without plugin ID\n   // --------------------------------------\n   options = chart.getOptions().getPlugins().getOptions(AnnotationPlugin.FACTORY);\n}\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The plugin options can be changed at 2 different levels and are evaluated with the following priority:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"per chart by ",(0,r.kt)("inlineCode",{parentName:"li"},"chart.getOptions().getPlugins().setOptions")," method"),(0,r.kt)("li",{parentName:"ul"},"per chart type by ",(0,r.kt)("inlineCode",{parentName:"li"},"Defaults.get().getOptions([chartType]).getPlugins().setOptions")," method"),(0,r.kt)("li",{parentName:"ul"},"or globally by ",(0,r.kt)("inlineCode",{parentName:"li"},"Defaults.get().getGlobal().getPlugins().setOptions")," method")),(0,r.kt)("p",null,"The configuration class ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/AnnotationOptions.html"},"AnnotationOptions")," contains all properties needed to configure the plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// creating object and setting some properties\n// --------------------------------------\nAnnotationOptions options = new AnnotationOptions();\noptions.setEvents(Event.CLICK, Event.DOUBLE_CLICK, Event.MOUSE_OUT, Event.MOUSE_OVER);\n")),(0,r.kt)("p",null,"The complete options are described by following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawTime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/DrawTime.html"},"DrawTime")),(0,r.kt)("td",{parentName:"tr",align:null},"DrawTime.AFTER_DATASETS_DRAW"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines when the annotations are drawn. This allows positioning of the annotation relative to the other elements of the graph.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dblClickSpeed"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"350"),(0,r.kt)("td",{parentName:"tr",align:null},"Double-click speed in milliseconds used to distinguish single-clicks from double-clicks whenever you need to capture both. When listening for both click and dblclick, click events will be delayed by this amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"events"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/DrawTime.html"},"Event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Events to enable on each annotation.")))),(0,r.kt)("h2",{id:"box-annotation"},"Box annotation"),(0,r.kt)("p",null,"A box annotation draws a box on chart area."),(0,r.kt)("p",null,"A box annotation is mapped by ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/BoxAnnotation.html"},"BoxAnnotation"),"."),(0,r.kt)("p",null,"Box annotations are supported and if one of the axes is not specified, the box will take the entire chart dimension."),(0,r.kt)("p",null,"The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the box is expanded out to the edges."),(0,r.kt)("img",{src:(0,o.Z)("/img/annotationBox.png")}),(0,r.kt)("p",null,"Every plugin options can have an unlimited number of boxes annotations. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AnnotationOptions options = new AnnotationOptions();\n\nBoxAnnotation box1 = new BoxAnnotation();\nbox1.setName("BoxAnnotation");\nbox1.setDrawTime(DrawTime.BEFORE_DATASETS_DRAW);\nbox1.setXScaleID(Scales.DEFAULT_X_AXIS_ID);\nbox1.setYScaleID(Scales.DEFAULT_Y_AXIS_ID);\nbox1.setXMin("February");\nbox1.setXMax("April");\nbox1.setYMax(100);\nbox1.setYMin(60);\nbox1.setBackgroundColor("rgba(101, 33, 171, 0.5)");\nbox1.setBorderColor("rgb(101, 33, 171)");\nbox1.setBorderWidth(1);\n\n....\n\noptions.setAnnotations(box1, box2, ... boxN);\n')),(0,r.kt)("p",null,"The complete options are described by following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawTime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/DrawTime.html"},"DrawTime")),(0,r.kt)("td",{parentName:"tr",align:null},"DrawTime.AFTER_DATASETS_DRAW"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines when the annotations are drawn. This allows positioning of the annotation relative to the other elements of the graph.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"The name (better is unique) to assign to annotation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xScaleID"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID"},"Scales.DEFAULT_X_AXIS_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the X scale to bind onto.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yScaleID"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID"},"Scales.DEFAULT_Y_AXIS_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the Y scale to bind onto.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xMin"),(0,r.kt)("td",{parentName:"tr",align:null},"String - double - Date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Left edge of the box in units along the x axis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yMin"),(0,r.kt)("td",{parentName:"tr",align:null},"String - double - Date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Bottom edge of the box in units along the y axis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xMax"),(0,r.kt)("td",{parentName:"tr",align:null},"String - double - Date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Right edge of the box in units along the x axis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yMax"),(0,r.kt)("td",{parentName:"tr",align:null},"String - double - Date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Top edge of the box in units along the y axis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,r.kt)("td",{parentName:"tr",align:null},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb(102, 102, 102)")),(0,r.kt)("td",{parentName:"tr",align:null},"The fill color of the box.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderColor"),(0,r.kt)("td",{parentName:"tr",align:null},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb(92, 92, 92)")),(0,r.kt)("td",{parentName:"tr",align:null},"The stroke color of the box.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"The stroke width of the box.")))),(0,r.kt)("h2",{id:"line-annotation"},"Line annotation"),(0,r.kt)("p",null,"A line annotation draws a line (vertical or horizontal lines are supported) on chart area. Furthermore you can add a label on the line."),(0,r.kt)("p",null,"A line annotation is mapped by ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/LineAnnotation.html"},"LineAnnotation"),"."),(0,r.kt)("img",{src:(0,o.Z)("/img/annotationLine.png")}),(0,r.kt)("p",null,"Every plugin options can have an unlimited number of lines annotations. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AnnotationOptions options = new AnnotationOptions();\n\nLineAnnotation line1 = new LineAnnotation();\nline1.setName("LineAnnotation");\nline1.setDrawTime(DrawTime.AFTER_DATASETS_DRAW);\nline1.setMode(LineMode.HORIZONTAL);\nline1.setScaleID(Scales.DEFAULT_Y_AXIS_ID);\nline1.setBorderColor(HtmlColor.BLACK);\nline1.setBorderWidth(5);\nline1.setValue(40);\nline1.getLabel().setEnabled(true);\nline1.getLabel().setContent("My threshold");\nline1.getLabel().setBackgroundColor(HtmlColor.RED);\n\n....\n\noptions.setAnnotations(line1, line2, ... lineN);\n')),(0,r.kt)("p",null,"The complete options are described by following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawTime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/DrawTime.html"},"DrawTime")),(0,r.kt)("td",{parentName:"tr",align:null},"DrawTime.AFTER_DATASETS_DRAW"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines when the annotations are drawn. This allows positioning of the annotation relative to the other elements of the graph.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"The name (better is unique) to assign to annotation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scaleID"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID"},"Scales.DEFAULT_Y_AXIS_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the scale to bind onto.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String - double - Date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"The data value to draw the line at.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endValue"),(0,r.kt)("td",{parentName:"tr",align:null},"String - double - Date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"The value at which the line draw should end.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/lineMode.html"},"LineMode")),(0,r.kt)("td",{parentName:"tr",align:null},"LineMode.VERTICAL"),(0,r.kt)("td",{parentName:"tr",align:null},"The orientation of line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderColor"),(0,r.kt)("td",{parentName:"tr",align:null},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb(54, 162, 235)")),(0,r.kt)("td",{parentName:"tr",align:null},"The stroke color of the line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"The stroke width of the line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderDash"),(0,r.kt)("td",{parentName:"tr",align:null},"int[]"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"the line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderDashOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Offset for line dashes. See ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"},"MDN"))))),(0,r.kt)("h2",{id:"label-line-annotation"},"Label line annotation"),(0,r.kt)("p",null,"A line annotation can have a label to draw on the line."),(0,r.kt)("p",null,"A label line annotation is mapped by ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/LineLabel.html"},"LineLabel"),"."),(0,r.kt)("p",null,"Every line annotation can have ONLY 1 label. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AnnotationOptions options = new AnnotationOptions();\n\nLineAnnotation line1 = new LineAnnotation();\n\n....\n\nline1.getLabel().setEnabled(true);\nline1.getLabel().setContent("My threshold");\nline1.getLabel().setBackgroundColor(HtmlColor.RED);\n\n....\n\noptions.setAnnotations(line1, line2, ... lineN);\n')),(0,r.kt)("p",null,"The complete options are described by following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the label is enabled and should be displayed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"String - String[]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Text to display in label. Provide an array to display values on a new line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,r.kt)("td",{parentName:"tr",align:null},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgba(0,0,0,0.8)")),(0,r.kt)("td",{parentName:"tr",align:null},"The fill color of label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontSize"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontSize--"},"defaultFontSize")),(0,r.kt)("td",{parentName:"tr",align:null},"font size of label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontFamily"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontFamily--"},"defaultFontFamily")),(0,r.kt)("td",{parentName:"tr",align:null},"font family of label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontStyle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"FontStyle.BOLD"),(0,r.kt)("td",{parentName:"tr",align:null},"font style of label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontColor"),(0,r.kt)("td",{parentName:"tr",align:null},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:null},"HtmlColor.WHITE"),(0,r.kt)("td",{parentName:"tr",align:null},"font color of label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/LineLabelPosition.html"},"LineLabelPosition")),(0,r.kt)("td",{parentName:"tr",align:null},"LineLabelPosition.CENTER"),(0,r.kt)("td",{parentName:"tr",align:null},"Anchor position of label on line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xPadding"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of label to add left/right.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yPadding"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of label to add top/bottom.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cornerRadius"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Radius of label rectangle where the label should be displayed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xAdjust"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Adjustment along x-axis (left-right) of label relative to above number (can be negative). For horizontal lines positioned left or right, negative values move the label toward the edge, and positive values toward the center.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yAdjust"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Adjustment along y-axis (top-bottom) of label relative to above number (can be negative). For vertical lines positioned top or bottom, negative values move the label toward the edge, and positive values toward the center.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rotation"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Rotation of label, in degrees.")))),(0,r.kt)("h2",{id:"events-on-annotations"},"Events on annotations"),(0,r.kt)("p",null,"Both box and line annotations provide a set of callbacks which can be enabled to catch events on them."),(0,r.kt)("p",null,"To catch events is enough to set the events which you want to catch at ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/AnnotationOptions.html"},"AnnotationOptions")," and set a callback instance into the annotation."),(0,r.kt)("p",null,"These are the table of callbacks to implement:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Callback"),(0,r.kt)("th",{parentName:"tr",align:null},"Event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/ClickCallback.html"},"ClickCallback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#CLICK"},"Event.CLICK"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/ContextMenuCallback.html"},"ContextMenuCallback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#CONTEXT_MENU"},"Event.CONTEXT_MENU"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/DoubleClickCallback.html"},"DoubleClickCallback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#DOUBLE_CLICK"},"Event.DOUBLE_CLICK"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseDownCallback.html"},"MouseDownCallback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_DOWN"},"Event.MOUSE_DOWN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseEnterCallback.html"},"MouseEnterCallback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_ENTER"},"Event.MOUSE_ENTER"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseLeaveCallback.html"},"MouseLeaveCallback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_LEAVE"},"Event.MOUSE_LEAVE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseMoveCallback.html"},"MouseMoveCallback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_MOVE"},"Event.MOUSE_MOVE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseOutCallback.html"},"MouseOutCallback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_OUT"},"Event.MOUSE_OUT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseOverCallback.html"},"MouseOverCallback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_OVER"},"Event.MOUSE_OVER"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseUpCallback.html"},"MouseUpCallback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_UP"},"Event.MOUSE_UP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/WheelCallback.html"},"WheelCallback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#WHEEL"},"Event.WHEEL"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"final MyEventsCallback callback = new MyEventsCallback();\n\n...\n\nclass MyEventsCallback implements ClickCallback, MouseOverCallback, MouseOutCallback, DoubleClickCallback {\n\n    @Override\n    public void onMouseOut(IsChart chart, BaseNativeEvent event, AbstractAnnotation annotation) {\n        // my logic\n    }\n\n    @Override\n    public void onMouseOver(IsChart chart, BaseNativeEvent event, AbstractAnnotation annotation) {\n        // my logic\n    }\n\n    @Override\n    public void onClick(IsChart chart, BaseNativeEvent event, AbstractAnnotation annotation) {\n        // my logic\n    }\n\n    @Override\n    public void onDoubleClick(IsChart chart, BaseNativeEvent event, AbstractAnnotation annotation) {\n        // my logic\n    }\n        \n}\n\n...\n\nAnnotationOptions options = new AnnotationOptions();\noptions.setEvents(Event.CLICK, Event.DOUBLE_CLICK, Event.MOUSE_OUT, Event.MOUSE_OVER);\n\nLineAnnotation line = new LineAnnotation();\n...\nline.setClickCallback(callback);\nline.setMouseOverCallback(callback);\nline.setMouseOutCallback(callback);\nline.setDoubleClickCallback(callback);\n\nBoxAnnotation box = new BoxAnnotation();\n...\nbox.setClickCallback(callback);\nbox.setMouseOverCallback(callback);\nbox.setMouseOutCallback(callback);\nbox.setDoubleClickCallback(callback);\n\noptions.setAnnotations(line, box);\n")),(0,r.kt)("p",null,"The callback is receiving the chart instance and ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/AbstractAnnotation.html"},"AbstractAnnotation")," instance which can be a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/LineAnnotation.html"},"LineAnnotation")," or a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/BoxAnnotation.html"},"BoxAnnotation"),"."))}k.isMDXComponent=!0}}]);