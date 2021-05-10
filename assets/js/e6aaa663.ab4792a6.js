(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),l=(a(0),a(209)),i={id:"CartesianAxes",title:"Cartesian axes",hide_title:!0,sidebar_label:"Introduction"},b={unversionedId:"CartesianAxes",id:"version-3.3/CartesianAxes",isDocsHomePage:!1,title:"Cartesian axes",description:"Introduction",source:"@site/versioned_docs/version-3.3/CartesianAxes.md",sourceDirName:".",slug:"/CartesianAxes",permalink:"/docs/3.3/CartesianAxes",version:"3.3",sidebar_label:"Introduction",frontMatter:{id:"CartesianAxes",title:"Cartesian axes",hide_title:!0,sidebar_label:"Introduction"},sidebar:"version-3.3/docs",previous:{title:"Axes",permalink:"/docs/3.3/Axes"},next:{title:"Cartesian linear",permalink:"/docs/3.3/CartesianLinearAxes"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Options",id:"options",children:[]},{value:"Axis ID",id:"axis-id",children:[]},{value:"Tick",id:"tick",children:[]},{value:"ScaleLabel",id:"scalelabel",children:[{value:"Padding",id:"padding",children:[]}]}],o={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart.\nIn a cartesian chart, there is 1 or more X axes and 1 or more Y axes to map points onto the 2 dimensional canvas. These axes are know as 'cartesian axes'."),Object(l.b)("p",null,"Axes that follow a cartesian grid are known as 'Cartesian Axes'. Cartesian axes are used for line, bar, and bubble charts. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},Object(l.b)("a",{parentName:"strong",href:"CartesianLinearAxes"},"linear"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},Object(l.b)("a",{parentName:"strong",href:"CartesianLogarithmicAxes"},"logarithmic"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},Object(l.b)("a",{parentName:"strong",href:"CartesianCategoryAxes"},"category"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},Object(l.b)("a",{parentName:"strong",href:"CartesianTimeAxes"},"time")))),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("p",null,"All of the included cartesian axes support a number of common options."),Object(l.b)("p",null,"Table with options:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"null")),Object(l.b)("td",{parentName:"tr",align:null},"The ID is used to link datasets and scale axes together.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"offset"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to ",Object(l.b)("inlineCode",{parentName:"td"},"true")," in the bar chart by default.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"position"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html"},"Position")),Object(l.b)("td",{parentName:"tr",align:null},"Position.TOP"),Object(l.b)("td",{parentName:"tr",align:null},"Position of the axis in the chart.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"stacked"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"if the axis are stacked or not.")))),Object(l.b)("h2",{id:"axis-id"},"Axis ID"),Object(l.b)("p",null,"The properties ",Object(l.b)("inlineCode",{parentName:"p"},"xAxisID")," or ",Object(l.b)("inlineCode",{parentName:"p"},"yAxisID"),", at dataset level, have to match the scale properties, by setting ",Object(l.b)("inlineCode",{parentName:"p"},"setId")," method. This is especially needed if multi-axes charts are used:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'CartesianLinearAxis axis1 = new CartesianLinearAxis(chart);\naxis1.setId("y-axis-1");\naxis1.setPosition(Position.LEFT);\naxis1.setDisplay(true);\n\nCartesianLinearAxis axis2 = new CartesianLinearAxis(chart);\naxis2.setId("y-axis-2");\naxis2.setPosition(Position.RIGHT);\naxis2.setDisplay(true);\naxis2.getGrideLines().setDrawOnChartArea(false);\n\nchart.getOptions().getScales().setYAxes(axis1, axis2);\n\nLineDataset dataset1 = chart.newDataset();\ndataset1.setLabel("dataset 1");\ndataset1.setYAxisID("y-axis-1");\n\nLineDataset dataset2 = chart.newDataset();\ndataset2.setLabel("dataset 2");\ndataset2.setYAxisID("y-axis-2");\n\nchart.getData().setDatasets(dataset1, dataset2);\n')),Object(l.b)("p",null,"All cartesian axes could be created specifying the type (horizontal or vertical) at constructor level. See ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CartesianAxisType.html"},"CartesianAxisType")," object which enumerates all possible values. "),Object(l.b)("p",null,"CartesianAxisType contains:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"x")," to set the axes as horizontal"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"y")," to set the axes as vertical")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"CartesianLinearAxis axis1 = new CartesianLinearAxis(chart, CartesianAxisType.y);\n")),Object(l.b)("p",null,"Every cartesian axis has got own default type, as following:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default Orientation"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"linear"),Object(l.b)("td",{parentName:"tr",align:null},"CartesianAxisType.y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"logarithmic"),Object(l.b)("td",{parentName:"tr",align:null},"CartesianAxisType.y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"category"),Object(l.b)("td",{parentName:"tr",align:null},"CartesianAxisType.x")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"time"),Object(l.b)("td",{parentName:"tr",align:null},"CartesianAxisType.x")))),Object(l.b)("h2",{id:"tick"},"Tick"),Object(l.b)("p",null,"The following options are common to all cartesian axes but do not apply to other axes."),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"Axes#ticks"},"here")," how manage ticks configuration."),Object(l.b)("p",null,"Table with options:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"autoSkip"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",{parentName:"tr",align:null},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", automatically calculates how many labels that can be shown and hides labels accordingly. Turn it off to show all labels no matter what")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"autoSkipPadding"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"Padding between the ticks on the horizontal axis when ",Object(l.b)("inlineCode",{parentName:"td"},"autoSkip")," is enabled.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"labelOffset"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"Distance in pixels to offset the label from the centre point of the tick (in the y direction for the x axis, and the x direction for the y axis).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"maxRotation"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"90"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. ",Object(l.b)("em",{parentName:"td"},"Note: Only applicable to horizontal scales."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"minRotation"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"Minimum rotation for tick labels. ",Object(l.b)("em",{parentName:"td"},"Note: Only applicable to horizontal scales."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mirror"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"Flips tick labels around axis, displaying the labels inside the chart instead of outside. ",Object(l.b)("em",{parentName:"td"},"Note: Only applicable to vertical scales."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"padding"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"10"),Object(l.b)("td",{parentName:"tr",align:null},"Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"precision"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"If defined and stepSize is not specified, the step size will be rounded to this many decimal places.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"sampleSize"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"Integer.MIN_VALUE"),Object(l.b)("td",{parentName:"tr",align:null},"the number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")))),Object(l.b)("h2",{id:"scalelabel"},"ScaleLabel"),Object(l.b)("p",null,"When creating a chart, you want to tell the viewer what data they are viewing. To do this, you need to label the axis."),Object(l.b)("p",null,"Cartesian axis defines ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianScaleLabel.html"},"options")," for the scale title. Note that this only applies to cartesian axes. "),Object(l.b)("p",null,"All cartesian axes are providing the capability to set and get the options, by the ",Object(l.b)("strong",{parentName:"p"},"set")," and ",Object(l.b)("strong",{parentName:"p"},"get")," methods, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"CartesianLinearAxis axis = new CartesianLinearAxis(chart);\naxis.getScaleLabel().setFontSize(16);\naxis.getScaleLabel().getFontSize();\n")),Object(l.b)("p",null,"Table with options:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"display"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", display the axis title.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"labelString"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'""')),Object(l.b)("td",{parentName:"tr",align:null},"The text for the title.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lineHeight"),Object(l.b)("td",{parentName:"tr",align:null},"double - String"),Object(l.b)("td",{parentName:"tr",align:null},"1.2"),Object(l.b)("td",{parentName:"tr",align:null},"Height of an individual line of text.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"fontColor"),Object(l.b)("td",{parentName:"tr",align:null},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:null},"#666"),Object(l.b)("td",{parentName:"tr",align:null},"Font color for scale title.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"fontFamily"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),Object(l.b)("td",{parentName:"tr",align:null},"Font family for the scale title, follows CSS font-family options.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"fontSize"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"12"),Object(l.b)("td",{parentName:"tr",align:null},"Font size for scale title.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"fontStyle"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),Object(l.b)("td",{parentName:"tr",align:null},"FontStyle.NORMAL"),Object(l.b)("td",{parentName:"tr",align:null},"Font style for the scale title, follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).")))),Object(l.b)("h3",{id:"padding"},"Padding"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianPadding.html"},"Padding")," to apply around scale labels. Only ",Object(l.b)("inlineCode",{parentName:"p"},"top")," and ",Object(l.b)("inlineCode",{parentName:"p"},"bottom")," are implemented."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"CartesianLinearAxis axis = new CartesianLinearAxis(chart);\naxis.getScaleLabel().getPadding().setTop(10);\n")),Object(l.b)("p",null,"The following are the attributes that you can set:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bottom"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"4"),Object(l.b)("td",{parentName:"tr",align:null},"the padding bottom in pixel.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"left"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"4"),Object(l.b)("td",{parentName:"tr",align:null},"the padding left in pixel.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"right"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"4"),Object(l.b)("td",{parentName:"tr",align:null},"the padding right in pixel.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"top"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"4"),Object(l.b)("td",{parentName:"tr",align:null},"the padding top in pixel.")))))}s.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?r.a.createElement(u,b(b({ref:t},o),{},{components:a})):r.a.createElement(u,b({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);