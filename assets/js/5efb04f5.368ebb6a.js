"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[58202],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return h}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(a),h=r,c=d["".concat(m,".").concat(h)]||d[h]||g[h]||l;return a?n.createElement(c,o(o({ref:e},s),{},{components:a})):n.createElement(c,o({ref:e},s))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48106:function(t,e,a){a.r(e),a.d(e,{assets:function(){return g},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(44996),i=["components"],m={id:"Integration",title:"Integration",hide_title:!0,sidebar_label:"Integration"},p=void 0,s={unversionedId:"getting-started/Integration",id:"version-4.2/getting-started/Integration",title:"Integration",description:"",source:"@site/versioned_docs/version-4.2/getting-started/Integration.md",sourceDirName:"getting-started",slug:"/getting-started/Integration",permalink:"/Charba-Wiki/docs/4.2/getting-started/Integration",draft:!1,tags:[],version:"4.2",frontMatter:{id:"Integration",title:"Integration",hide_title:!0,sidebar_label:"Integration"},sidebar:"version-4.2/docs",previous:{title:"Getting started",permalink:"/Charba-Wiki/docs/4.2/getting-started/GettingStarted"},next:{title:"Using defaults",permalink:"/Charba-Wiki/docs/4.2/defaults/"}},g={},d=[{value:"Integration",id:"integration",level:2},{value:"Elemental2",id:"elemental2",level:2},{value:"GWT Web Toolkit",id:"gwt-web-toolkit",level:2}],h={toc:d};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"integration"},"Integration"),(0,l.kt)("p",null,"Even if ",(0,l.kt)("strong",{parentName:"p"},"Charba")," was born to be a GWT chart library, ",(0,l.kt)("strong",{parentName:"p"},"Charba")," is now more a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure")," chart library and GWT is only one of possible framework where ",(0,l.kt)("strong",{parentName:"p"},"Charba")," works. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," has got an own DOM tree manager in order to do not have any strong dependency with a DOM framework used for an application but nevertheless it is necessary that the DOM elements of ",(0,l.kt)("strong",{parentName:"p"},"Charba")," can be used by the other frameworks."),(0,l.kt)("p",null,"For this reason, ",(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a set of utilities (casting some own elements to the framework's ones) in order to enable adding a chart in a DOM framework."),(0,l.kt)("p",null,"The main provided hooks by ",(0,l.kt)("strong",{parentName:"p"},"Charba")," are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a ",(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Div.html"},"Div")," element which is exposed by ",(0,l.kt)("inlineCode",{parentName:"li"},"chart.getChartElement()")," method."),(0,l.kt)("li",{parentName:"ul"},"a ",(0,l.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")," element which is exposed by ",(0,l.kt)("inlineCode",{parentName:"li"},"chart.getCanvas()")," method.")),(0,l.kt)("img",{src:(0,o.Z)("/img/charbaDiagram.png")}),(0,l.kt)("h2",{id:"elemental2"},"Elemental2"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," provides type checked access to all browser APIs for Java code. This is done by using closure extern files and generating JsTypes, which are part of the new JsInterop specification that is both implemented in GWT and J2CL."),(0,l.kt)("p",null,"The following table shows how you can leverage on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," and ",(0,l.kt)("strong",{parentName:"p"},"Charba")," together:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Charba class"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Elemental2 class"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Charba to Elemental2"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Elemental2 to Charba"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Div.html"},"Div")),(0,l.kt)("td",{parentName:"tr",align:"left"},"HTMLDivElement"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"HTMLDivElement element = Div.as()")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Div element = CastHelper.toDiv(HTMLDivElement)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,l.kt)("td",{parentName:"tr",align:"left"},"HTMLImageElement"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"HTMLImageElement element = Img.as()")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Img element = CastHelper.toImg(HTMLImageElement)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,l.kt)("td",{parentName:"tr",align:"left"},"HTMLCanvasElement"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"HTMLCanvasElement element = Canvas.as()")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Canvas element = CastHelper.toCanvas(HTMLCanvasElement)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,l.kt)("td",{parentName:"tr",align:"left"},"CanvasPattern"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasPattern item = CanvasPatternItem.as()")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem")),(0,l.kt)("td",{parentName:"tr",align:"left"},"CanvasGradient"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasGradient item = CanvasGradientItem.as()")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/BaseNativeEvent.html"},"BaseNativeEvent")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Event - MouseEvent - TouchEvent"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Event event = BaseNativeEvent.as()")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,l.kt)("p",null,"Here is a simple sample:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'LineChart chart = new LineChart();\nchart.getOptions().setResponsive(true);\nchart.getOptions().getLegend().setPosition(Position.TOP);\nchart.getOptions().getTitle().setDisplay(true);\nchart.getOptions().getTitle().setText("Charba line chart");\n\nLineDataset dataset1 = chart.newDataset();\ndataset1.setLabel("dataset 1");\n\ndataset1.setBackgroundColor(HtmlColor.BLUE.alpha(0.2));\ndataset1.setBorderColor(HtmlColor.BLUE);\n\ndataset1.setData(10, 45, 50, 25, 30, 5);\n\nchart.getData().setLabels("1", "2", "3", "4", "5", "6");\nchart.getData().setDatasets(dataset1);\n\nchart.getChartElement().getStyle().setWidth("600px");\nchart.getChartElement().getStyle().setHeight("300px");\n\nElement element = chart.getChartElement().as();\n\nDomGlobal.document.body.appendChild(element);\n')),(0,l.kt)("h2",{id:"gwt-web-toolkit"},"GWT Web Toolkit"),(0,l.kt)("p",null,"The following table shows how you can leverage on ",(0,l.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," and ",(0,l.kt)("strong",{parentName:"p"},"Charba")," together:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Charba class"),(0,l.kt)("th",{parentName:"tr",align:"left"},"GWT class"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Charba to GWT"),(0,l.kt)("th",{parentName:"tr",align:"left"},"GWT to Charba"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Div.html"},"Div")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/DivElement.html"},"DivElement")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"DivElement element = Div.as()")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Div element = CastHelper.toDiv(DivElement)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/ImageElement.html"},"ImageElement")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ImageElement element = Img.as()")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Img element = CastHelper.toImg(ImageElement)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/CanvasElement.html"},"CanvasElement")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasElement element = Canvas.as()")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Canvas element = CastHelper.toCanvas(CanvasElement)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasPattern.html"},"CanvasPattern")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasPattern item = CanvasPatternItem.as()")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasGradient.html"},"CanvasGradient")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasGradient item = CanvasGradientItem.as()")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/BaseNativeEvent.html"},"BaseNativeEvent")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"NativeEvent event = BaseNativeEvent.as()")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,l.kt)("p",null,"GWT Web Toolkit is also providing other classes related to images and for those ",(0,l.kt)("strong",{parentName:"p"},"Charba")," is providing a dedicated utility, ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/gwt/ImagesHelper.html"},"ImagesHelper"),", to transform those GWT classes in a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Img.html"},"Img"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Charba class"),(0,l.kt)("th",{parentName:"tr",align:"left"},"GWT class"),(0,l.kt)("th",{parentName:"tr",align:"left"},"GWT to Charba"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/resources/client/ImageResource.html"},"ImageResource")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Img element = ImagesHelper.toImg(ImageResource)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/Image.html"},"Image")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Img element = ImagesHelper.toImg(Image)"))))))}c.isMDXComponent=!0}}]);