"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[7940],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return h}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=m(a),h=r,c=d["".concat(p,".").concat(h)]||d[h]||g[h]||l;return a?n.createElement(c,o(o({ref:e},s),{},{components:a})):n.createElement(c,o({ref:e},s))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3919:function(t,e,a){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},4996:function(t,e,a){a.d(e,{C:function(){return l},Z:function(){return o}});var n=a(2263),r=a(3919);function l(){var t=(0,n.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var l=void 0===n?{}:n,o=l.forcePrependBaseUrl,i=void 0!==o&&o,p=l.absolute,m=void 0!==p&&p;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(i)return e+a;var s=a.startsWith(e)?a:e+a.replace(/^\//,"");return m?t+s:s}(l,a,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},9068:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return g},default:function(){return h}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=a(4996),i=["components"],p={id:"Integration",title:"Migration and integration",hide_title:!0,sidebar_label:"Migration and integration"},m=void 0,s={unversionedId:"Integration",id:"version-3.3/Integration",isDocsHomePage:!1,title:"Migration and integration",description:"Integration",source:"@site/versioned_docs/version-3.3/Integration.md",sourceDirName:".",slug:"/Integration",permalink:"/Charba-Wiki/docs/3.3/Integration",tags:[],version:"3.3",frontMatter:{id:"Integration",title:"Migration and integration",hide_title:!0,sidebar_label:"Migration and integration"},sidebar:"version-3.3/docs",previous:{title:"Getting Started",permalink:"/Charba-Wiki/docs/3.3/GettingStarted"},next:{title:"Defaults configuration",permalink:"/Charba-Wiki/docs/3.3/Defaults"}},g=[{value:"Integration",id:"integration",children:[]},{value:"Migrating to version 3",id:"migrating-to-version-3",children:[]},{value:"Integrating Elemental2",id:"integrating-elemental2",children:[]},{value:"Integrating GWT Web Toolkit",id:"integrating-gwt-web-toolkit",children:[]}],d={toc:g};function h(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"integration"},"Integration"),(0,l.kt)("p",null,"Even if ",(0,l.kt)("strong",{parentName:"p"},"Charba")," was born to be a GWT chart library, as of version ",(0,l.kt)("strong",{parentName:"p"},"3.1")," it is now more a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure")," chart library and GWT is only one of possible framework where ",(0,l.kt)("strong",{parentName:"p"},"Charba")," works. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," has got an own DOM tree manager in order to be do not have any strong dependency with DOM framework used for an application but nevertheless it is necessary that the DOM elements of ",(0,l.kt)("strong",{parentName:"p"},"Charba")," can be used by the other frameworks."),(0,l.kt)("p",null,"For this reason, ",(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a set of utilities (casting some own elements to the framework's ones) in order to enable adding a chart into a DOM framework."),(0,l.kt)("p",null,"The main provided hooks by ",(0,l.kt)("strong",{parentName:"p"},"Charba")," are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a ",(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html"},"Div")," element which is exposed by ",(0,l.kt)("inlineCode",{parentName:"li"},"chart.getChartElement()")," method."),(0,l.kt)("li",{parentName:"ul"},"a ",(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")," element which is exposed by ",(0,l.kt)("inlineCode",{parentName:"li"},"chart.getCanvas()")," method.")),(0,l.kt)("p",null,"The following sections will explain how to integrate ",(0,l.kt)("strong",{parentName:"p"},"Charba")," with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," and what must be changed into an existing GWT project, which is already using ",(0,l.kt)("strong",{parentName:"p"},"Charba"),"."),(0,l.kt)("img",{src:(0,o.Z)("/img/charbaDiagram.png")}),(0,l.kt)("h2",{id:"migrating-to-version-3"},"Migrating to version 3"),(0,l.kt)("p",null,"As of version ",(0,l.kt)("strong",{parentName:"p"},"3"),", ",(0,l.kt)("strong",{parentName:"p"},"Charba")," is mainly a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure")," chart library and ",(0,l.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," is considered as one of possible frameworks where can be used."),(0,l.kt)("p",null,"The following list of items provides the mainly changes must be applied to an existing GWT project which is using ",(0,l.kt)("strong",{parentName:"p"},"Charba")," with a version 1.x or 2.x:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"add new ",(0,l.kt)("strong",{parentName:"li"},"Charba")," artifact (",(0,l.kt)("inlineCode",{parentName:"li"},"charba-[version.release]-gwt.jar"),") to GWT project, removing the previous ",(0,l.kt)("strong",{parentName:"li"},"Charba")," jar file."),(0,l.kt)("li",{parentName:"ul"},"add dependency with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/google/jsinterop-base"},"JSINTEROP base"),", have a look ",(0,l.kt)("a",{parentName:"li",href:"/docs#building"},"here"),". "),(0,l.kt)("li",{parentName:"ul"},"replace all import package statements from ",(0,l.kt)("strong",{parentName:"li"},"org.pepstock.charba.client.","[chartType]","Chart")," to ",(0,l.kt)("strong",{parentName:"li"},"org.pepstock.charba.client.gwt.widgets.","[chartType]","ChartWidget")," into java classes."),(0,l.kt)("li",{parentName:"ul"},"replace all import package statements from ",(0,l.kt)("strong",{parentName:"li"},"urn:import:org.pepstock.charba.client")," to ",(0,l.kt)("strong",{parentName:"li"},"urn:import:org.pepstock.charba.client.gwt.widgets")," into UIBinder XML files."),(0,l.kt)("li",{parentName:"ul"},"replace all chart class names from ",(0,l.kt)("strong",{parentName:"li"},"[chartType]","Chart")," to ",(0,l.kt)("strong",{parentName:"li"},"[chartType]","ChartWidget"),", both on java classes and UIBinder XML files."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LegendCallback")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"HtmlLegendTextCallback")," are now using a ",(0,l.kt)("strong",{parentName:"li"},"Charba")," ",(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/safehtml/SafeHtml.html"},"SafeHtml")," and not GWT one anymore.")),(0,l.kt)("h2",{id:"integrating-elemental2"},"Integrating Elemental2"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," provides type checked access to all browser APIs for Java code. This is done by using closure extern files and generating JsTypes, which are part of the new JsInterop specification that is both implemented in GWT and J2CL."),(0,l.kt)("p",null,"The following table shows how you can leverage on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," and ",(0,l.kt)("strong",{parentName:"p"},"Charba")," together:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Charba class"),(0,l.kt)("th",{parentName:"tr",align:null},"Elemental2 class"),(0,l.kt)("th",{parentName:"tr",align:null},"Charba to Elemental2"),(0,l.kt)("th",{parentName:"tr",align:null},"Elemental2 to Charba"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html"},"Div")),(0,l.kt)("td",{parentName:"tr",align:null},"HTMLDivElement"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HTMLDivElement element = Div.as()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Div element = CastHelper.toDiv(HTMLDivElement)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,l.kt)("td",{parentName:"tr",align:null},"HTMLImageElement"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HTMLImageElement element = Img.as()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Img element = CastHelper.toImg(HTMLImageElement)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,l.kt)("td",{parentName:"tr",align:null},"HTMLCanvasElement"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HTMLCanvasElement element = Canvas.as()")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,l.kt)("td",{parentName:"tr",align:null},"CanvasPattern"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasPattern item = CanvasPatternItem.as()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem")),(0,l.kt)("td",{parentName:"tr",align:null},"CanvasGradient"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasGradient item = CanvasGradientItem.as()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/BaseNativeEvent.html"},"BaseNativeEvent")),(0,l.kt)("td",{parentName:"tr",align:null},"Event - MouseEvent - TouchEvent"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event event = BaseNativeEvent.as()")),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("p",null,"Here is a simple sample:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'LineChart chart = new LineChart();\nchart.getOptions().setResponsive(true);\nchart.getOptions().getLegend().setPosition(Position.TOP);\nchart.getOptions().getTitle().setDisplay(true);\nchart.getOptions().getTitle().setText("Charba line chart");\n\nLineDataset dataset1 = chart.newDataset();\ndataset1.setLabel("dataset 1");\n\ndataset1.setBackgroundColor(HtmlColor.BLUE.alpha(0.2));\ndataset1.setBorderColor(HtmlColor.BLUE);\n\ndataset1.setData(10, 45, 50, 25, 30, 5);\n\nchart.getData().setLabels("1", "2", "3", "4", "5", "6");\nchart.getData().setDatasets(dataset1);\n\nchart.getChartElement().getStyle().setWidth("600px");\nchart.getChartElement().getStyle().setHeight("300px");\n\nElement element = chart.getChartElement().as();\n\nDomGlobal.document.body.appendChild(element);\n')),(0,l.kt)("h2",{id:"integrating-gwt-web-toolkit"},"Integrating GWT Web Toolkit"),(0,l.kt)("p",null,"The following table shows how you can leverage on ",(0,l.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," and ",(0,l.kt)("strong",{parentName:"p"},"Charba")," together, as of ",(0,l.kt)("strong",{parentName:"p"},"Charba 3"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Charba class"),(0,l.kt)("th",{parentName:"tr",align:null},"GWT class"),(0,l.kt)("th",{parentName:"tr",align:null},"Charba to GWT"),(0,l.kt)("th",{parentName:"tr",align:null},"GWT to Charba"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html"},"Div")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/DivElement.html"},"DivElement")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DivElement element = Div.as()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Div element = CastHelper.toDiv(DivElement)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/ImageElement.html"},"ImageElement")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ImageElement element = Img.as()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Img element = CastHelper.toImg(ImageElement)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/CanvasElement.html"},"CanvasElement")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasElement element = Canvas.as()")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasPattern.html"},"CanvasPattern")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasPattern item = CanvasPatternItem.as()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasGradient.html"},"CanvasGradient")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasGradient item = CanvasGradientItem.as()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/BaseNativeEvent.html"},"BaseNativeEvent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NativeEvent event = BaseNativeEvent.as()")),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("p",null,"GWT Web Toolkit is also providing other classes related to images and for those ",(0,l.kt)("strong",{parentName:"p"},"Charba")," is providing a dedicated utility, ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/gwt/ImagesHelper.html"},"ImagesHelper"),", to transform those GWT classes into a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html"},"Img"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Charba class"),(0,l.kt)("th",{parentName:"tr",align:null},"GWT class"),(0,l.kt)("th",{parentName:"tr",align:null},"GWT to Charba"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/resources/client/ImageResource.html"},"ImageResource")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Img element = ImagesHelper.toImg(ImageResource)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/Image.html"},"Image")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Img element = ImagesHelper.toImg(Image)"))))))}h.isMDXComponent=!0}}]);