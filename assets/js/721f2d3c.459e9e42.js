"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[67517],{3905:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},h=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,h=i(t,["components","mdxType","originalType","parentName"]),c=s(a),m=r,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(g,o(o({ref:e},h),{},{components:a})):n.createElement(g,o({ref:e},h))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43343:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"Commons",title:"Common configuration",hide_title:!0,sidebar_label:"Common options"},o=void 0,i={unversionedId:"configuration/Commons",id:"version-5.1/configuration/Commons",title:"Common configuration",description:"Common options",source:"@site/versioned_docs/version-5.1/configuration/Commons.md",sourceDirName:"configuration",slug:"/configuration/Commons",permalink:"/Charba-Wiki/docs/5.1/configuration/Commons",draft:!1,tags:[],version:"5.1",frontMatter:{id:"Commons",title:"Common configuration",hide_title:!0,sidebar_label:"Common options"},sidebar:"docs",previous:{title:"Scales",permalink:"/Charba-Wiki/docs/5.1/defaults/DefaultsScales"},next:{title:"Interaction",permalink:"/Charba-Wiki/docs/5.1/configuration/Interaction"}},p={},s=[{value:"Common options",id:"common-options",level:2},{value:"Responsive",id:"responsive",level:2},{value:"Printing",id:"printing",level:3},{value:"Device pixel ratio",id:"device-pixel-ratio",level:2},{value:"Locale",id:"locale",level:2},{value:"Colors",id:"colors",level:2},{value:"Font",id:"font",level:2},{value:"Padding",id:"padding",level:2}],h={toc:s};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"common-options"},"Common options"),(0,r.kt)("p",null,"The configuration is used to change how the chart behaves. There are properties to control styling, fonts, the legend, etc."),(0,r.kt)("p",null,"These sections describe general configuration options that can apply elsewhere to the charts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Responsive")," defines responsive chart options that apply to all charts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pixel ratio")," defines the physical display pixel ratio."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Locale")," defines the language tag to use for internationalization."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Font")," defines the graphical representation of text to use in the chart.")),(0,r.kt)("p",null,"To change the chart options, ",(0,r.kt)("strong",{parentName:"p"},"Charba")," is providing the method ",(0,r.kt)("inlineCode",{parentName:"p"},"getOptions")," in all charts classes."),(0,r.kt)("h2",{id:"responsive"},"Responsive"),(0,r.kt)("p",null,"When it comes to change the chart size based on the window size, a major limitation is that the chart canvas ",(0,r.kt)("em",{parentName:"p"},"render")," size can ",(0,r.kt)("strong",{parentName:"p"},"not")," be expressed with relative values, contrary to the ",(0,r.kt)("em",{parentName:"p"},"display")," size.\nFurthermore, these sizes are independent from each other and thus the canvas ",(0,r.kt)("em",{parentName:"p"},"render")," size does not adjust automatically based on the ",(0,r.kt)("em",{parentName:"p"},"display")," size, making the rendering inaccurate."),(0,r.kt)("p",null,"The following examples ",(0,r.kt)("strong",{parentName:"p"},"do not work")," without setting ",(0,r.kt)("inlineCode",{parentName:"p"},"maintainAspectRatio")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", because, setting to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the chart will maintain the provided dimensions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// invalid values, the canvas of chart doesn\'t resize\nchart.setWidth("80vh");\nchart.setHeight("80vh");\n// in order to use the passed dimensions\nchart.getOptions().setMaintainAspectRatio(false);\n')),(0,r.kt)("p",null,"Leveraging on ",(0,r.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," capabilities, ",(0,r.kt)("strong",{parentName:"p"},"Charba")," provides options to enable responsiveness and control the resize behavior of charts by detecting when the canvas ",(0,r.kt)("em",{parentName:"p"},"display")," size changes and update the ",(0,r.kt)("em",{parentName:"p"},"render")," size accordingly."),(0,r.kt)("p",null,"To change and apply own properties, you can invoke the ",(0,r.kt)("strong",{parentName:"p"},"set")," methods, both at chart and global level, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().setResponsive(true);\nboolean responsive = chart.getOptions().isResponsive();\n// global\nDefaults.get().getGlobal().setResponsive(true);\nboolean globalResponsive = Defaults.get().getGlobal().isResponsive();\n")),(0,r.kt)("p",null,"The default values are set in global defaults options, see ",(0,r.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts"},"default global chart options"),"."),(0,r.kt)("p",null,"Table with options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"aspectRatio"),(0,r.kt)("td",{parentName:"tr",align:"left"},"double"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Note: ",(0,r.kt)("em",{parentName:"td"},"this option is ignored if the height is explicitly defined either as attribute or via the style"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maintainAspectRatio"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maintain the original canvas aspect ratio (width / height) when resizing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responsive"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Resizes the chart canvas when its container does.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"resizeDelay"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Delay the resize update by give amount of milliseconds. This can ease the resize process by debouncing update of the elements.")))),(0,r.kt)("h3",{id:"printing"},"Printing"),(0,r.kt)("p",null,"CSS media queries allow changing styles when printing a page. The CSS applied from these media queries may cause charts to need to resize. However, the resize won't happen automatically. To support resizing charts when printing, one needs to invoke the following statement after the ",(0,r.kt)("strong",{parentName:"p"},"Charba")," setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"JsWindowHelper.enableResizeOnBeforePrint();\n")),(0,r.kt)("h2",{id:"device-pixel-ratio"},"Device pixel ratio"),(0,r.kt)("p",null,"By default the chart's canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio (e.g. Retina displays)."),(0,r.kt)("p",null,"For applications where a chart will be converted to a bitmap, or printed to a higher DPI medium it can be desirable to render the chart at a higher resolution than the default."),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"devicePixelRatio")," property to a value other than 1 will force the canvas size to be scaled by that amount, relative to the container size. There should be no visible difference on screen; the difference will only be visible when the image is zoomed or printed."),(0,r.kt)("p",null,"To change and apply own property value, you can invoke the ",(0,r.kt)("strong",{parentName:"p"},"set")," methods, both at chart and global level, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().setDevicePixelRatio(2D);\ndouble devicePixelRatio = chart.getOptions().getDevicePixelRatio();\n// global\nDefaults.get().getGlobal().setDevicePixelRatio(2D);\ndouble globalDevicePixelRatio = Defaults.get().getGlobal().getDevicePixelRatio();\n")),(0,r.kt)("p",null,"The default value is set in global defaults options, see ",(0,r.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts"},"default global chart options"),"."),(0,r.kt)("p",null,"Table with options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"devicePixelRatio"),(0,r.kt)("td",{parentName:"tr",align:"left"},"double"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Override the window's default devicePixelRatio.")))),(0,r.kt)("h2",{id:"locale"},"Locale"),(0,r.kt)("p",null,"For applications where the numbers of ticks on scales must be formatted accordingly with a language sensitive number formatting, you can enable this kind of formatting by setting the locale option."),(0,r.kt)("p",null,"The locale is a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/CLocale.html"},"CLocale")," object which represents a string that is a ",(0,r.kt)("a",{parentName:"p",href:"https://www.unicode.org/reports/tr35/tr35.html#BCP_47_Conformance"},"Unicode BCP 47 locale identifier"),"."),(0,r.kt)("p",null,"A Unicode BCP 47 locale identifier consists of"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"a language code,"),(0,r.kt)("li",{parentName:"ol"},"(optionally) a script code,"),(0,r.kt)("li",{parentName:"ol"},"(optionally) a region (or country) code,"),(0,r.kt)("li",{parentName:"ol"},"(optionally) one or more variant codes, and"),(0,r.kt)("li",{parentName:"ol"},"(optionally) one or more extension sequences,")),(0,r.kt)("p",null,"with all present components separated by hyphens. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().setLocale(CLocale.US);\nCLocale locale = chart.getOptions().getLocale();\n// global\nDefaults.get().getGlobal().setLocale(CLocale.US);\nCLocale globalLocale = Defaults.get().getGlobal().getLocale();\n")),(0,r.kt)("p",null,"The default value is set in global defaults options, see ",(0,r.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts"},"default global chart options"),"."),(0,r.kt)("p",null,"Table with options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"locale"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/CLocale.html"},"CLocale")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A string with a BCP 47 language tag.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"../intl/Locale#locale"},"INTL locale"),".")))),(0,r.kt)("h2",{id:"colors"},"Colors"),(0,r.kt)("p",null,"There are chart settings that can change colors on the chart, related to their use case. The colors settings will be consume from the other elements of chart only if they don't have any other specific default, related to the element itself. The default values are set in ",(0,r.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts"},"default global options"),"."),(0,r.kt)("p",null,"To change and apply own property value, you can invoke the ",(0,r.kt)("strong",{parentName:"p"},"set")," methods, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// chart\nchart.getOptions().setColor(HtmlColor.RED);\nHtmlColor color = chart.getOptions().getColor();\n// global\nDefaults.get().getGlobal().setColor(HtmlColor.RED);\nHtmlColor color = Defaults.get().getGlobal().getColor();\n")),(0,r.kt)("p",null,"Table with options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The default background color to use in the chart.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The default border color to use in the chart.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"color"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The default font color to use in the chart.")))),(0,r.kt)("h2",{id:"font"},"Font"),(0,r.kt)("p",null,"There are chart settings that can change all fonts on the chart. The font settings will be consume from the other elements of chart only if they don't have any other specific default, related to the element itself. The default values are set in global defaults options, see ",(0,r.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#font"},"default global font options"),"."),(0,r.kt)("p",null,"To change and apply own property value, you can invoke the ",(0,r.kt)("strong",{parentName:"p"},"set")," methods, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// sets font size at chart level\nchart.getOptions().getFont().setSize(16);\n// gets the size\nint size = chart.getOptions().getFont().getSize();\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"family"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Font family for all text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Font size (in px) for text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"style"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/FontStyle.html"},"FontStyle")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Font style")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"weight"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/Weight.html"},"Weight")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Default font weight (boldness).",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight"},"MDN"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lineHeight"),(0,r.kt)("td",{parentName:"tr",align:"left"},"double - String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Height of an individual line of text.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-height"},"MDN"),".")))),(0,r.kt)("h2",{id:"padding"},"Padding"),(0,r.kt)("p",null,"Many elements use the padding to apply space around the element itself."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/Padding.html"},"Padding")," provides all ",(0,r.kt)("strong",{parentName:"p"},"set")," and ",(0,r.kt)("strong",{parentName:"p"},"get")," methods to manage the configuration, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables point labels\naxis.getPointLabels().setDisplay(true);\n// set the same padding size to all directions \naxis.getPointLabels().getBackdropPadding().setTop(5);\n\nint top = axis.getPointLabels().getBackdropPadding().getTop();\n")),(0,r.kt)("p",null,"The following are the attributes that you can set:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bottom"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The padding bottom in pixel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"left"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The padding left in pixel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"right"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The padding right in pixel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"top"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The padding top in pixel.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/Padding.html"},"Padding")," provides the methods to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"set the same value to all dimensions, by ",(0,r.kt)("inlineCode",{parentName:"li"},"set(int)"),"."),(0,r.kt)("li",{parentName:"ul"},"set the same value to X dimensions (left and right), by ",(0,r.kt)("inlineCode",{parentName:"li"},"setX(int)"),"."),(0,r.kt)("li",{parentName:"ul"},"set the same value to Y dimensions (top and bottom), by ",(0,r.kt)("inlineCode",{parentName:"li"},"setY(int)"),".")))}d.isMDXComponent=!0}}]);