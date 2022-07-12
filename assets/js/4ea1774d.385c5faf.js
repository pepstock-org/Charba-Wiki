"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[6021],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(a),h=r,c=d["".concat(m,".").concat(h)]||d[h]||g[h]||l;return a?n.createElement(c,o(o({ref:e},s),{},{components:a})):n.createElement(c,o({ref:e},s))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11024:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),l=a(44996);const o={id:"Integration",title:"Integration",hide_title:!0,sidebar_label:"Integration"},i=void 0,m={unversionedId:"getting-started/Integration",id:"version-4.0/getting-started/Integration",title:"Integration",description:"",source:"@site/versioned_docs/version-4.0/getting-started/Integration.md",sourceDirName:"getting-started",slug:"/getting-started/Integration",permalink:"/Charba-Wiki/docs/4.0/getting-started/Integration",draft:!1,tags:[],version:"4.0",frontMatter:{id:"Integration",title:"Integration",hide_title:!0,sidebar_label:"Integration"},sidebar:"version-4.0/docs",previous:{title:"Getting started",permalink:"/Charba-Wiki/docs/4.0/getting-started/GettingStarted"},next:{title:"Using defaults",permalink:"/Charba-Wiki/docs/4.0/defaults/"}},p={},s=[{value:"Integration",id:"integration",level:2},{value:"Elemental2",id:"elemental2",level:2},{value:"GWT Web Toolkit",id:"gwt-web-toolkit",level:2}],g={toc:s};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"integration"},"Integration"),(0,r.kt)("p",null,"Even if ",(0,r.kt)("strong",{parentName:"p"},"Charba")," was born to be a GWT chart library, ",(0,r.kt)("strong",{parentName:"p"},"Charba")," is now more a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure")," chart library and GWT is only one of possible framework where ",(0,r.kt)("strong",{parentName:"p"},"Charba")," works. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," has got an own DOM tree manager in order to do not have any strong dependency with a DOM framework used for an application but nevertheless it is necessary that the DOM elements of ",(0,r.kt)("strong",{parentName:"p"},"Charba")," can be used by the other frameworks."),(0,r.kt)("p",null,"For this reason, ",(0,r.kt)("strong",{parentName:"p"},"Charba")," provides a set of utilities (casting some own elements to the framework's ones) in order to enable adding a chart in a DOM framework."),(0,r.kt)("p",null,"The main provided hooks by ",(0,r.kt)("strong",{parentName:"p"},"Charba")," are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Div.html"},"Div")," element which is exposed by ",(0,r.kt)("inlineCode",{parentName:"li"},"chart.getChartElement()")," method."),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")," element which is exposed by ",(0,r.kt)("inlineCode",{parentName:"li"},"chart.getCanvas()")," method.")),(0,r.kt)("img",{src:(0,l.Z)("/img/charbaDiagram.png")}),(0,r.kt)("h2",{id:"elemental2"},"Elemental2"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," provides type checked access to all browser APIs for Java code. This is done by using closure extern files and generating JsTypes, which are part of the new JsInterop specification that is both implemented in GWT and J2CL."),(0,r.kt)("p",null,"The following table shows how you can leverage on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," and ",(0,r.kt)("strong",{parentName:"p"},"Charba")," together:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Charba class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Elemental2 class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Charba to Elemental2"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Elemental2 to Charba"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Div.html"},"Div")),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTMLDivElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HTMLDivElement element = Div.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Div element = CastHelper.toDiv(HTMLDivElement)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTMLImageElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HTMLImageElement element = Img.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Img element = CastHelper.toImg(HTMLImageElement)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTMLCanvasElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HTMLCanvasElement element = Canvas.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,r.kt)("td",{parentName:"tr",align:"left"},"CanvasPattern"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasPattern item = CanvasPatternItem.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem")),(0,r.kt)("td",{parentName:"tr",align:"left"},"CanvasGradient"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasGradient item = CanvasGradientItem.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/BaseNativeEvent.html"},"BaseNativeEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Event - MouseEvent - TouchEvent"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Event event = BaseNativeEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("p",null,"Here is a simple sample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'LineChart chart = new LineChart();\nchart.getOptions().setResponsive(true);\nchart.getOptions().getLegend().setPosition(Position.TOP);\nchart.getOptions().getTitle().setDisplay(true);\nchart.getOptions().getTitle().setText("Charba line chart");\n\nLineDataset dataset1 = chart.newDataset();\ndataset1.setLabel("dataset 1");\n\ndataset1.setBackgroundColor(HtmlColor.BLUE.alpha(0.2));\ndataset1.setBorderColor(HtmlColor.BLUE);\n\ndataset1.setData(10, 45, 50, 25, 30, 5);\n\nchart.getData().setLabels("1", "2", "3", "4", "5", "6");\nchart.getData().setDatasets(dataset1);\n\nchart.getChartElement().getStyle().setWidth("600px");\nchart.getChartElement().getStyle().setHeight("300px");\n\nElement element = chart.getChartElement().as();\n\nDomGlobal.document.body.appendChild(element);\n')),(0,r.kt)("h2",{id:"gwt-web-toolkit"},"GWT Web Toolkit"),(0,r.kt)("p",null,"The following table shows how you can leverage on ",(0,r.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," and ",(0,r.kt)("strong",{parentName:"p"},"Charba")," together:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Charba class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GWT class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Charba to GWT"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GWT to Charba"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Div.html"},"Div")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/DivElement.html"},"DivElement")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DivElement element = Div.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Div element = CastHelper.toDiv(DivElement)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/ImageElement.html"},"ImageElement")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ImageElement element = Img.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Img element = CastHelper.toImg(ImageElement)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/CanvasElement.html"},"CanvasElement")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasElement element = Canvas.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasPattern.html"},"CanvasPattern")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasPattern item = CanvasPatternItem.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasGradient.html"},"CanvasGradient")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasGradient item = CanvasGradientItem.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/BaseNativeEvent.html"},"BaseNativeEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeEvent event = BaseNativeEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("p",null,"GWT Web Toolkit is also providing other classes related to images and for those ",(0,r.kt)("strong",{parentName:"p"},"Charba")," is providing a dedicated utility, ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/gwt/ImagesHelper.html"},"ImagesHelper"),", to transform those GWT classes in a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Img.html"},"Img"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Charba class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GWT class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GWT to Charba"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/resources/client/ImageResource.html"},"ImageResource")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Img element = ImagesHelper.toImg(ImageResource)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/Image.html"},"Image")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Img element = ImagesHelper.toImg(Image)"))))))}d.isMDXComponent=!0}}]);