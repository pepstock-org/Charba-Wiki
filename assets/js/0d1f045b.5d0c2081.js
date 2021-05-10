(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{209:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),h=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=h(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=h(a),d=n,u=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return a?r.a.createElement(u,o(o({ref:t},s),{},{components:a})):r.a.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return h}));var n=a(3),r=a(8),i=(a(0),a(209)),c={id:"Charts",title:"Chart introduction",hide_title:!0,sidebar_label:"Introduction"},o={unversionedId:"Charts",id:"version-3.3/Charts",isDocsHomePage:!1,title:"Chart introduction",description:"Introduction",source:"@site/versioned_docs/version-3.3/Charts.md",sourceDirName:".",slug:"/Charts",permalink:"/docs/3.3/Charts",version:"3.3",sidebar_label:"Introduction",frontMatter:{id:"Charts",title:"Chart introduction",hide_title:!0,sidebar_label:"Introduction"},sidebar:"version-3.3/docs",previous:{title:"Common components",permalink:"/docs/3.3/Configuration"},next:{title:"Bar chart",permalink:"/docs/3.3/ChartBar"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Usage by widget (only GWT artifact)",id:"usage-by-widget-only-gwt-artifact",children:[]},{value:"Callbacks on datasets options",id:"callbacks-on-datasets-options",children:[]},{value:"Option Context",id:"option-context",children:[]},{value:"Chart.JS API",id:"chartjs-api",children:[]},{value:"CHARBA chart API",id:"charba-chart-api",children:[]},{value:"Chart life cycle",id:"chart-life-cycle",children:[]}],s={toc:l};function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Every ",Object(i.b)("strong",{parentName:"p"},"Charba")," chart has got a common structure to define own configuration."),Object(i.b)("p",null,"There 3 main sections:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Type")," which represents the chart type. See ",Object(i.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Type.html"},"Type")," and ",Object(i.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/ChartType.html"},"ChartType")," enumeration, with all available chart types out of the box. By controllers, you can create own charts and different types."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Data")," which represents the data which must be showed by the chart. This part contains the ",Object(i.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Dataset.html"},"datasets")," with data and configuration how data should be showed and the labels for each dataset and data. See ",Object(i.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/package-summary.html"},"Data")," element."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Options")," which represents a set of options to configure the chart. See ",Object(i.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/package-summary.html"},"Options"),".")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"Charba")," chart extends always ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/AbstractChart.html"},"AbstractChart")," which wraps a DOM ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html"},"DIV element")," and implements ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/IsChart.html"},"IsChart")," interface which is passed to callbacks, events handlers, plugins and all other customization items."),Object(i.b)("p",null,"Programmatically, you could implement a chart as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"   ...\n   LineChart chart = new LineChart();\n   component.add(chart);\n   ...\n   // example with Elemental2\n   Element elem = chart.getChartElement().as();\n   DomGlobal.document.body.appendChild(elel);\n")),Object(i.b)("h2",{id:"usage-by-widget-only-gwt-artifact"},"Usage by widget (only GWT artifact)"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"Charba")," chart widget for GWT extends always ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/gwt/widgets/AbstractChartWidget.html"},"AbstractChartWidget")," which is a ",Object(i.b)("a",{parentName:"p",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/SimplePanel.html"},"GWT SimplePanel")," and implements ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/IsChart.html"},"IsChart")," interface which is passed to callbacks, events handlers, plugins and all other customization items."),Object(i.b)("p",null,"The charts can be implemented leveraging on ",Object(i.b)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," feature of GWT or also programmatically.  "),Object(i.b)("p",null,"Using as example a Line chart, here is an example how to include it into a UIBinder file (be sure to have into your classpath the ",Object(i.b)("inlineCode",{parentName:"p"},"charba-[version.release]-gwt.jar")," file):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:LineChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),Object(i.b)("p",null,"Into GWT component related to UIbinder definition, we could reference it as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"   ...\n   @UiField\n   LineChartWidget chart;\n   ...\n")),Object(i.b)("p",null,"Programmatically, you could implement a chart as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"   ...\n   LineChartWidget chart = new LineChartWidget();\n   component.add(chart);\n   ...\n")),Object(i.b)("h2",{id:"callbacks-on-datasets-options"},"Callbacks on datasets options"),Object(i.b)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values and that takes 2 arguments, ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScriptableContext.html"},"ScriptableContext")," representing contextual information and the chart instance. Many of datasets properties can be set at runtime by this way, using the data of dataset if the configuration must be changed depending on them."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"LineDataset dataset = chart.newDataset();\ndataset.setBackgroundColor(new BackgroundColorCallback() {\n\n    @Override\n    public IsColor invoke(IsChart chart, ScriptableContext context) {\n        return HtmlColor.PINK;\n    }\n\n});\n")),Object(i.b)("h2",{id:"option-context"},"Option Context"),Object(i.b)("p",null,"The option context is used to give contextual information when resolving options. It applies to all scriptable options and their callbacks."),Object(i.b)("p",null,"The context object contains the following properties:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"datasetIndex"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"index of the associated dataset")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"index"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"index of the associated data")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"active"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"Whether the associated element is hovered, default is ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". It maps also the property ",Object(i.b)("inlineCode",{parentName:"td"},"hover")," when the options context is provided by ",Object(i.b)("a",{parentName:"td",href:"https://www.chartjs.org/docs/latest/general/options.html#option-context"},"Chart.JS")," for scriptable options.")))),Object(i.b)("h2",{id:"chartjs-api"},"Chart.JS API"),Object(i.b)("p",null,"For each chart, there are a set of methods which are wrapping the ",Object(i.b)("a",{parentName:"p",href:"http://www.chartjs.org/docs/latest/developers/api.html"},"Chart.JS API"),". These are available on all charts created with ",Object(i.b)("strong",{parentName:"p"},"Charba"),"."),Object(i.b)("h4",{id:"draw"},"draw()"),Object(i.b)("p",null,"Use this to draw the chart instance that is created. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// Draws a specific chart instance\nchart.draw();\n")),Object(i.b)("p",null,"This method works with ",Object(i.b)("strong",{parentName:"p"},"drawOnAttach")," options which can be used setting ",Object(i.b)("inlineCode",{parentName:"p"},"true")," to draw the chart when the chart has been attached to the parent GWT element."),Object(i.b)("h4",{id:"destroy"},"destroy()"),Object(i.b)("p",null,"Use this to destroy any chart instances that are created. This will clean up any references stored within ",Object(i.b)("strong",{parentName:"p"},"Charba"),", along with any associated event listeners attached."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// Destroys a specific chart instance\nchart.destroy();\n")),Object(i.b)("p",null,"This method works with ",Object(i.b)("strong",{parentName:"p"},"destroyOnDetach")," options which can be used setting ",Object(i.b)("inlineCode",{parentName:"p"},"true")," to destroy the chart when the chart has been detached from the parent GWT element."),Object(i.b)("h4",{id:"updateconfig"},"update(config)"),Object(i.b)("p",null,"Triggers an update of the chart. This can be safely called after updating the data or options object. This will update all scales, legends, and then re-render the chart."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// duration is the time for the animation of the redraw in milliseconds\n// lazy is a boolean. if `true`, the animation can be interrupted by other animations\nList<Dataset> datasets = chart.getData().getDatasets();\nfor (Dataset ds : datasets){\n   ds.getData().add(getRandomDigit(negative));\n}\nchart.update();\n")),Object(i.b)("p",null,"A ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/UpdateConfiguration.html"},"configuration object")," can be provided with additional configuration for the update process. This is useful when ",Object(i.b)("inlineCode",{parentName:"p"},"update")," is manually called inside an event handler and some different animation is desired."),Object(i.b)("p",null,"The following properties are supported:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"duration")," (integer): Time for the animation of the redraw in milliseconds"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"lazy")," (boolean): If ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", the animation can be interrupted by other animations"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"easing")," (",Object(i.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Easing.html"},"Easing"),"): The animation easing function.")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"UpdateConfiguration config = new UpdateConfiguration();\nconfig.setEasing(Easing.EASE_IN_OUT_QUART);\nconfig.setDuration(4000);\n...\nchart.update(config);\n")),Object(i.b)("h4",{id:"reconfigureconfig"},"reconfigure(config)"),Object(i.b)("p",null,"To update the options, mutating the options property in place, other option properties would be preserved, including those calculated by Chart.js."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'// change the title directly on chart options\nchart.getOptions().getTitle().setText("new Title");\nchart.reconfigure();\n')),Object(i.b)("p",null,"A ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/UpdateConfiguration.html"},"configuration object")," can be provided with additional configuration for the update process. This is useful when ",Object(i.b)("inlineCode",{parentName:"p"},"updateOptions")," is manually called inside an event handler and some different animation is desired."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'UpdateConfiguration config = new UpdateConfiguration();\nconfig.setDuration(0);\n...\n// change the title directly on chart options\nchart.getOptions().getTitle().setText("new Title");\nchart.reconfigure(config);\n')),Object(i.b)("h4",{id:"reset"},"reset()"),Object(i.b)("p",null,"Resets the chart to it's state before the initial animation. A new animation can then be triggered using ",Object(i.b)("inlineCode",{parentName:"p"},"update"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"chart.reset();\n")),Object(i.b)("h4",{id:"renderconfig"},"render(config)"),Object(i.b)("p",null,"Triggers a redraw of all chart elements. Note, this does not update elements for new data. Use ",Object(i.b)("inlineCode",{parentName:"p"},".update()")," in that case."),Object(i.b)("p",null,"See ",Object(i.b)("inlineCode",{parentName:"p"},".update(config)")," for more details on the ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/UpdateConfiguration.html"},"configuration object"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"UpdateConfiguration config = new UpdateConfiguration();\nconfig.setEasing(Easing.EASE_IN_OUT_QUART);\nconfig.setDuration(4000);\n\nchart.render(config);\n")),Object(i.b)("h4",{id:"stop"},"stop()"),Object(i.b)("p",null,"Uses this to stop any current animation loop. This will pause the chart during any current animation frame. Call ",Object(i.b)("inlineCode",{parentName:"p"},".render()")," to re-animate."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// Stops the charts animation loop at its current frame\nchart.stop();\n")),Object(i.b)("h4",{id:"resize"},"resize()"),Object(i.b)("p",null,"Uses this to manually resize the chart. This is run each time the chart container is resized, but you can call this method manually if you change the size."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// Resizes & redraws to fill its container element\nchart.resize();\n")),Object(i.b)("h4",{id:"clear"},"clear()"),Object(i.b)("p",null,"Will clear the chart canvas. Used extensively internally between animation frames, but you might find it useful."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// Will clear the canvas that myLineChart is drawn on\nchart.clear();\n")),Object(i.b)("h4",{id:"tobase64image"},"toBase64Image()"),Object(i.b)("p",null,"Returns a base 64 encoded string of the chart in it's current state."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"String image = chart.toBase64Image();\n")),Object(i.b)("h4",{id:"generatelegend"},"generateLegend()"),Object(i.b)("p",null,"Returns an HTML string of a legend for that chart. The legend is generated from the ",Object(i.b)("inlineCode",{parentName:"p"},"legendCallback")," in the options (if implemented)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"String legend = chart.generateLegend();\n")),Object(i.b)("h4",{id:"getdatasetmetaindex"},"getDatasetMeta(index)"),Object(i.b)("p",null,"Looks for the dataset that matches the current index and returns that metadata."),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DatasetMetaItem.html"},"metadata")," will contain information about the dataset, depending on the chart type."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"DatasetMetaItem meta = chart.getDatasetMeta(0);\nif (meta.isHidden()){\n   ...\n   ...\n}\n")),Object(i.b)("h4",{id:"getdatasetateventevent"},"getDatasetAtEvent(event)"),Object(i.b)("p",null,"Looks for the dataset that matches the position of the event and returns that metadata."),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DatasetMetaItem.html"},"metadata")," will contain information about dataset, depending on the chart type."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"DatasetMetaItem meta = chart.getDatasetAtEvent(event);\nif (meta != null && meta.isHidden()){\n   ...\n   ...\n}\n")),Object(i.b)("h4",{id:"isdatasetvisibleindex"},"isDatasetVisible(index)"),Object(i.b)("p",null,"Looks for the dataset if it's visible or not, selected by index. It returns ",Object(i.b)("inlineCode",{parentName:"p"},"false")," if index of out of range or if the dataset is hidden."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"if (chart.isDatasetVisible(0)){\n   ...\n   ...\n}\n")),Object(i.b)("h4",{id:"getvisibledatasetcount"},"getVisibleDatasetCount()"),Object(i.b)("p",null,"Returns the amount of visible datasets on the chart. If chart is not initiated, it returns a ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/UndefinedValues.html#INTEGER"},"undefined value"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"int amount = chart.getVisibleDatasetCount();\nif (amount > 0){\n   ...\n   ...\n}\n")),Object(i.b)("h2",{id:"charba-chart-api"},"CHARBA chart API"),Object(i.b)("p",null,"For each chart, there are a set of methods which are available on all charts created with ",Object(i.b)("strong",{parentName:"p"},"Charba"),"."),Object(i.b)("h4",{id:"isinitialized"},"isInitialized()"),Object(i.b)("p",null,"Provides ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if ",Object(i.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," chart instance has been initialized, otherwise ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h4",{id:"getid"},"getId()"),Object(i.b)("p",null,"Returns the unique ID assigned to the chart which is set to DOM ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html"},"DIV element"),". This is NOT the same id property, used by ",Object(i.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),Object(i.b)("h4",{id:"getcanvas"},"getCanvas()"),Object(i.b)("p",null,"Provides the DOM ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Canvas.html"},"CANVAS element")," instance used by ",Object(i.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," to draw the chart. This is helpful when a plugin or controller is created to work directly on the canvas."),Object(i.b)("h4",{id:"getchartelement"},"getChartElement()"),Object(i.b)("p",null,"Provides the the object's underlying DOM ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html"},"DIV element")," used by ",Object(i.b)("strong",{parentName:"p"},"Charba")," to wrap the chart."),Object(i.b)("h4",{id:"getnode"},"getNode()"),Object(i.b)("p",null,"Provides an object which maps all ",Object(i.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," internal objects used at runtime to draw and manage the chart. This is helpful when a plugin or controller is created to work directly on the canvas. The root object is mapped by ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/ChartNode.html"},"ChartNode")," class."),Object(i.b)("h4",{id:"getbasetype"},"getBaseType()"),Object(i.b)("p",null,"Provides the type which has been extended when a chart is a controller implementation. In case the chart is not a controller implementation, it will return the original type, if the controller is not extending any existing type, it will return ",Object(i.b)("inlineCode",{parentName:"p"},"null"),". "),Object(i.b)("h4",{id:"getdefaultchartoptions"},"getDefaultChartOptions()"),Object(i.b)("p",null,"Provides the default options created based on chart type of the chart instance."),Object(i.b)("h4",{id:"getwholeoptions"},"getWholeOptions()"),Object(i.b)("p",null,"Provides the default options by a chart instance, merging global, chart type global and chart options."),Object(i.b)("h2",{id:"chart-life-cycle"},"Chart life cycle"),Object(i.b)("p",null,"It could be helpful to listen when the life cycle of charts instances is changing, without activating a plugin to all charts, avoiding that someone can activate or deactivate the plugins, programmatically."),Object(i.b)("p",null,"For this reason, a life cycle listener interface has been implemented in order to be able to catch when a chart has been created and/or destroy, and when is configured."),Object(i.b)("p",null,"The interface ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/ChartsLifecycleListener.html"},"ChartsLifecycleListener")," is the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"/**\n * Called before initializing 'chart'.\n * \n * @param chart the chart instance.\n */\nvoid onBeforeInit(IsChart chart);\n\n/**\n * Called after 'chart' has been initialized and before the first update.\n * \n * @param chart the chart instance.\n */\nvoid onAfterInit(IsChart chart);\n\n/**\n * Called before configuring 'chart'.\n * \n * @param chart the chart instance.\n */\nvoid onBeforeConfigure(IsChart chart);\n\n/**\n * Called after 'chart' has been configured.\n * \n * @param chart the chart instance.\n */\nvoid onAfterConfigure(IsChart chart);\n\n/**\n * Called before the chart as been destroyed.\n * \n * @param chart the chart instance.\n */\nvoid onBeforeDestroy(IsChart chart);\n\n/**\n * Called after the chart as been destroyed.\n * \n * @param chart the chart instance.\n */\nvoid onAfterDestroy(IsChart chart);\n")),Object(i.b)("p",null,"To help the implementation of this interface, an abstract class (",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/AbstractChartsLifecycleListener.html"},"AbstractChartsLifecycleListener"),") is provided which implements all methods doing nothing and then you can implement only the methods where you are interested in."),Object(i.b)("p",null,"To enable the life cycle listener, you must add the listener instance as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// Charts object contains all live charts instances\n// add new listener\nCharts.addLifecycleListener(listener);\n// remove existing listener\nCharts.removeLifecycleListener(listener); \n")))}h.isMDXComponent=!0}}]);