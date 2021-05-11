(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),l=(a(0),a(209)),o={id:"Commons",title:"Common configuration",hide_title:!0,sidebar_label:"Common options"},i={unversionedId:"configuration/Commons",id:"configuration/Commons",isDocsHomePage:!1,title:"Common configuration",description:"Common options",source:"@site/docs/configuration/Commons.md",sourceDirName:"configuration",slug:"/configuration/Commons",permalink:"/Charba-Wiki/docs/configuration/Commons",version:"current",sidebar_label:"Common options",frontMatter:{id:"Commons",title:"Common configuration",hide_title:!0,sidebar_label:"Common options"},sidebar:"docs",previous:{title:"Defaults scales options",permalink:"/Charba-Wiki/docs/defaults/DefaultsScales"},next:{title:"Interaction",permalink:"/Charba-Wiki/docs/configuration/Interaction"}},b=[{value:"Common options",id:"common-options",children:[]},{value:"Responsive",id:"responsive",children:[{value:"Printing",id:"printing",children:[]}]},{value:"Device pixel ratio",id:"device-pixel-ratio",children:[]},{value:"Locale",id:"locale",children:[]},{value:"Colors",id:"colors",children:[]},{value:"Font",id:"font",children:[]},{value:"Padding",id:"padding",children:[]}],c={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"common-options"},"Common options"),Object(l.b)("p",null,"The configuration is used to change how the chart behaves. There are properties to control styling, fonts, the legend, etc."),Object(l.b)("p",null,"These sections describe general configuration options that can apply elsewhere to the charts."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Responsive")," defines responsive chart options that apply to all charts."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Pixel ratio")," defines the physical display pixel ratio."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Locale")," defines the language tag to use for internationalization."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Font")," defines the graphical representation of text to use in the chart.")),Object(l.b)("p",null,"To change the chart options, ",Object(l.b)("strong",{parentName:"p"},"Charba")," is providing the method ",Object(l.b)("inlineCode",{parentName:"p"},"getOptions")," in all charts classes."),Object(l.b)("h2",{id:"responsive"},"Responsive"),Object(l.b)("p",null,"When it comes to change the chart size based on the window size, a major limitation is that the chart canvas ",Object(l.b)("em",{parentName:"p"},"render")," size can ",Object(l.b)("strong",{parentName:"p"},"not")," be expressed with relative values, contrary to the ",Object(l.b)("em",{parentName:"p"},"display")," size.\nFurthermore, these sizes are independent from each other and thus the canvas ",Object(l.b)("em",{parentName:"p"},"render")," size does not adjust automatically based on the ",Object(l.b)("em",{parentName:"p"},"display")," size, making the rendering inaccurate."),Object(l.b)("p",null,"The following examples ",Object(l.b)("strong",{parentName:"p"},"do not work")," without setting ",Object(l.b)("inlineCode",{parentName:"p"},"maintainAspectRatio")," to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),", because, setting to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),", the chart will maintain the provided dimensions:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'// invalid values, the canvas of chart doesn\'t resize\nchart.setWidth("80vh");\nchart.setHeight("80vh");\n// in order to use the passed dimensions\nchart.getOptions().setMaintainAspectRatio(false);\n')),Object(l.b)("p",null,"Leveraging on ",Object(l.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," capabilities, ",Object(l.b)("strong",{parentName:"p"},"Charba")," provides options to enable responsiveness and control the resize behavior of charts by detecting when the canvas ",Object(l.b)("em",{parentName:"p"},"display")," size changes and update the ",Object(l.b)("em",{parentName:"p"},"render")," size accordingly."),Object(l.b)("p",null,"To change and apply own properties, you can invoke the ",Object(l.b)("strong",{parentName:"p"},"set")," methods, both at chart and global level, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().setResponsive(true);\nboolean responsive = chart.getOptions().isResponsive();\n// global\nDefaults.get().getGlobal().setResponsive(true);\nboolean globalResponsive = Defaults.get().getGlobal().isResponsive();\n")),Object(l.b)("p",null,"The default values are set in global defaults options, see ",Object(l.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts"},"default global chart options"),"."),Object(l.b)("p",null,"Table with options:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"aspectRatio"),Object(l.b)("td",{parentName:"tr",align:"left"},"double"),Object(l.b)("td",{parentName:"tr",align:"left"},"Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas).",Object(l.b)("br",null),Object(l.b)("br",null),"Note: ",Object(l.b)("em",{parentName:"td"},"this option is ignored if the height is explicitly defined either as attribute or via the style"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"maintainAspectRatio"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"Maintain the original canvas aspect ratio (width / height) when resizing.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"responsive"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"Resizes the chart canvas when its container does.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"resizeDelay"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Delay the resize update by give amount of milliseconds. This can ease the resize process by debouncing update of the elements.")))),Object(l.b)("h3",{id:"printing"},"Printing"),Object(l.b)("p",null,"CSS media queries allow changing styles when printing a page. The CSS applied from these media queries may cause charts to need to resize. However, the resize won't happen automatically. To support resizing charts when printing, one needs to invoke the following statement after the ",Object(l.b)("strong",{parentName:"p"},"Charba")," setup:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"JsWindowHelper.enableResizeOnBeforePrint();\n")),Object(l.b)("h2",{id:"device-pixel-ratio"},"Device pixel ratio"),Object(l.b)("p",null,"By default the chart's canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio (e.g. Retina displays)."),Object(l.b)("p",null,"For applications where a chart will be converted to a bitmap, or printed to a higher DPI medium it can be desirable to render the chart at a higher resolution than the default."),Object(l.b)("p",null,"Setting ",Object(l.b)("inlineCode",{parentName:"p"},"devicePixelRatio")," property to a value other than 1 will force the canvas size to be scaled by that amount, relative to the container size. There should be no visible difference on screen; the difference will only be visible when the image is zoomed or printed."),Object(l.b)("p",null,"To change and apply own property value, you can invoke the ",Object(l.b)("strong",{parentName:"p"},"set")," methods, both at chart and global level, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().setDevicePixelRatio(2D);\ndouble devicePixelRatio = chart.getOptions().getDevicePixelRatio();\n// global\nDefaults.get().getGlobal().setDevicePixelRatio(2D);\ndouble globalDevicePixelRatio = Defaults.get().getGlobal().getDevicePixelRatio();\n")),Object(l.b)("p",null,"The default value is set in global defaults options, see ",Object(l.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts"},"default global chart options"),"."),Object(l.b)("p",null,"Table with options:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"devicePixelRatio"),Object(l.b)("td",{parentName:"tr",align:"left"},"double"),Object(l.b)("td",{parentName:"tr",align:"left"},"Override the window's default devicePixelRatio.")))),Object(l.b)("h2",{id:"locale"},"Locale"),Object(l.b)("p",null,"For applications where the numbers of ticks on scales must be formatted accordingly with a language sensitive number formatting, you can enable this kind of formatting by setting the locale option."),Object(l.b)("p",null,"The locale is a ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/CLocale.html"},"CLocale")," object which represents a string that is a ",Object(l.b)("a",{parentName:"p",href:"https://www.unicode.org/reports/tr35/tr35.html#BCP_47_Conformance"},"Unicode BCP 47 locale identifier"),"."),Object(l.b)("p",null,"A Unicode BCP 47 locale identifier consists of"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"a language code,"),Object(l.b)("li",{parentName:"ol"},"(optionally) a script code,"),Object(l.b)("li",{parentName:"ol"},"(optionally) a region (or country) code,"),Object(l.b)("li",{parentName:"ol"},"(optionally) one or more variant codes, and"),Object(l.b)("li",{parentName:"ol"},"(optionally) one or more extension sequences,")),Object(l.b)("p",null,"with all present components separated by hyphens. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().setLocale(CLocale.US);\nCLocale locale = chart.getOptions().getLocale();\n// global\nDefaults.get().getGlobal().setLocale(CLocale.US);\nCLocale globalLocale = Defaults.get().getGlobal().getLocale();\n")),Object(l.b)("p",null,"The default value is set in global defaults options, see ",Object(l.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts"},"default global chart options"),"."),Object(l.b)("p",null,"Table with options:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"locale"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/CLocale.html"},"CLocale")),Object(l.b)("td",{parentName:"tr",align:"left"},"A string with a BCP 47 language tag.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../intl/Locale#locale"},"INTL locale"),".")))),Object(l.b)("h2",{id:"colors"},"Colors"),Object(l.b)("p",null,"There are chart settings that can change colors on the chart, related to their use case. The colors settings will be consume from the other elements of chart only if they don't have any other specific default, related to the element itself. The default values are set in ",Object(l.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts"},"default global options"),"."),Object(l.b)("p",null,"To change and apply own property value, you can invoke the ",Object(l.b)("strong",{parentName:"p"},"set")," methods, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().setColor(HtmlColor.RED);\nHtmlColor color = chart.getOptions().getColor();\n// global\nDefaults.get().getGlobal().setColor(HtmlColor.RED);\nHtmlColor color = Defaults.get().getGlobal().getColor();\n")),Object(l.b)("p",null,"Table with options:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backgroundColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},"The default background color to use in the chart.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"borderColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},"The default border color to use in the chart.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"color"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},"The default font color to use in the chart.")))),Object(l.b)("h2",{id:"font"},"Font"),Object(l.b)("p",null,"There are chart settings that can change all fonts on the chart. The font settings will be consume from the other elements of chart only if they don't have any other specific default, related to the element itself. The default values are set in global defaults options, see ",Object(l.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts#font"},"default global font options"),"."),Object(l.b)("p",null,"To change and apply own property value, you can invoke the ",Object(l.b)("strong",{parentName:"p"},"set")," methods, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// sets font size at chart level\nchart.getOptions().getFont().setSize(16);\n// gets the size\nint size = chart.getOptions().getFont().getSize();\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"family"),Object(l.b)("td",{parentName:"tr",align:"left"},"String"),Object(l.b)("td",{parentName:"tr",align:"left"},"Font family for all text.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"size"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"Font size (in px) for text.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"style"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),Object(l.b)("td",{parentName:"tr",align:"left"},"Font style")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"weight"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/Weight.html"},"Weight")),Object(l.b)("td",{parentName:"tr",align:"left"},"Default font weight (boldness).",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight"},"MDN"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"lineHeight"),Object(l.b)("td",{parentName:"tr",align:"left"},"double - String"),Object(l.b)("td",{parentName:"tr",align:"left"},"Height of an individual line of text.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-height"},"MDN"),".")))),Object(l.b)("h2",{id:"padding"},"Padding"),Object(l.b)("p",null,"Many elements use the padding to apply space around the element itself."),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/Padding.html"},"Padding")," provides all ",Object(l.b)("strong",{parentName:"p"},"set")," and ",Object(l.b)("strong",{parentName:"p"},"get")," methods to manage the configuration, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables point labels\naxis.getPointLabels().setDisplay(true);\n// set the same padding size to all directions \naxis.getPointLabels().getBackdropPadding().setTop(5);\n\nint top = axis.getPointLabels().getBackdropPadding().getTop();\n")),Object(l.b)("p",null,"The following are the attributes that you can set:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"bottom"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"The padding bottom in pixel.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"left"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"The padding left in pixel.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"right"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"The padding right in pixel.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"top"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"The padding top in pixel.")))),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/Padding.html"},"Padding")," provides the methods to:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"set the same value to all dimensions, by ",Object(l.b)("inlineCode",{parentName:"li"},"set(int)"),"."),Object(l.b)("li",{parentName:"ul"},"set the same value to X dimensions (left and right), by ",Object(l.b)("inlineCode",{parentName:"li"},"setX(int)"),"."),Object(l.b)("li",{parentName:"ul"},"set the same value to Y dimensions (top and bottom), by ",Object(l.b)("inlineCode",{parentName:"li"},"setY(int)"),".")))}p.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,m=s["".concat(o,".").concat(d)]||s[d]||h[d]||l;return a?r.a.createElement(m,i(i({ref:t},c),{},{components:a})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);