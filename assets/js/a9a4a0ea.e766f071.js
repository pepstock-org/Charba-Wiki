"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[97741],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=m(a),h=r,k=d["".concat(p,".").concat(h)]||d[h]||g[h]||o;return a?n.createElement(k,l(l({ref:e},s),{},{components:a})):n.createElement(k,l({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},71436:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),o=a(44996);const l={id:"Integration",title:"Integration",hide_title:!0,sidebar_label:"Integration"},i=void 0,p={unversionedId:"getting-started/Integration",id:"version-5.7/getting-started/Integration",title:"Integration",description:"",source:"@site/versioned_docs/version-5.7/getting-started/Integration.md",sourceDirName:"getting-started",slug:"/getting-started/Integration",permalink:"/Charba-Wiki/docs/5.7/getting-started/Integration",draft:!1,tags:[],version:"5.7",frontMatter:{id:"Integration",title:"Integration",hide_title:!0,sidebar_label:"Integration"},sidebar:"docs",previous:{title:"Getting started",permalink:"/Charba-Wiki/docs/5.7/getting-started/GettingStarted"},next:{title:"Using defaults",permalink:"/Charba-Wiki/docs/5.7/defaults/"}},m={},s=[{value:"Integration",id:"integration",level:2},{value:"Elemental2",id:"elemental2",level:2},{value:"GWT Web Toolkit",id:"gwt-web-toolkit",level:2}],d={toc:s};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"integration"},"Integration"),(0,r.kt)("p",null,"Even if ",(0,r.kt)("strong",{parentName:"p"},"Charba")," was born to be a GWT chart library, ",(0,r.kt)("strong",{parentName:"p"},"Charba")," is now more a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure")," chart library and GWT is only one of possible framework where ",(0,r.kt)("strong",{parentName:"p"},"Charba")," works. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charba")," has got an own DOM tree manager in order to do not have any strong dependency with a DOM framework used for an application but nevertheless it is necessary that the DOM elements of ",(0,r.kt)("strong",{parentName:"p"},"Charba")," can be used by the other frameworks."),(0,r.kt)("p",null,"For this reason, ",(0,r.kt)("strong",{parentName:"p"},"Charba")," provides a set of utilities (casting some own elements to the framework's ones) in order to enable adding a chart in a DOM framework."),(0,r.kt)("p",null,"The main provided hooks by ",(0,r.kt)("strong",{parentName:"p"},"Charba")," are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/Div.html"},"Div")," element which is exposed by ",(0,r.kt)("inlineCode",{parentName:"li"},"chart.getChartElement()")," method."),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")," element which is exposed by ",(0,r.kt)("inlineCode",{parentName:"li"},"chart.getCanvas()")," method.")),(0,r.kt)("img",{src:(0,o.Z)("/img/charbaDiagram.png")}),(0,r.kt)("h2",{id:"elemental2"},"Elemental2"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," provides type checked access to all browser APIs for Java code. This is done by using closure extern files and generating JsTypes, which are part of the new JsInterop specification that is both implemented in GWT and J2CL."),(0,r.kt)("p",null,"The following table shows how you can leverage on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," and ",(0,r.kt)("strong",{parentName:"p"},"Charba")," together:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Charba class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Elemental2 class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Charba to Elemental2"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Elemental2 to Charba"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/Div.html"},"Div")),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTMLDivElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HTMLDivElement element = Div.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Div element = CastHelper.toDiv(HTMLDivElement)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTMLImageElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HTMLImageElement element = Img.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Img element = CastHelper.toImg(HTMLImageElement)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTMLCanvasElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HTMLCanvasElement element = Canvas.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Canvas element = CastHelper.toCanvas(HTMLCanvasElement)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,r.kt)("td",{parentName:"tr",align:"left"},"CanvasPattern"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasPattern item = CanvasPatternItem.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem")),(0,r.kt)("td",{parentName:"tr",align:"left"},"CanvasGradient"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasGradient item = CanvasGradientItem.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/events/NativeBaseEvent.html"},"NativeBaseEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Event"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Event event = NativeBaseEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeBaseEvent event = (NativeBaseEvent) elemental2Event"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/events/NativeMouseEvent.html"},"NativeMouseEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"MouseEvent"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MouseEvent event = NativeMouseEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeMouseEvent event = (NativeMouseEvent) elemental2Event"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/events/NativeTouchEvent.html"},"NativeTouchEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"TouchEvent"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TouchEvent event = NativeTouchEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeTouchEvent event = (NativeTouchEvent) elemental2Event"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/events/NativeKeyboardEvent.html"},"NativeKeyboardEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyboardEvent"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"KeyboardEvent event = NativeKeyboardEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeKeyboardEvent event = (NativeKeyboardEvent) elemental2Event"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/events/NativePointerEvent.html"},"NativePointerEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"MouseEvent"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MouseEvent event = NativePointerEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeMouseEvent event = (NativeMouseEvent) elemental2Event"),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("sup",{style:{color:"orange"}},"(1)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/events/NativeCustomEvent.html"},"NativeCustomEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"CustomEvent"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CustomEvent event = NativeCustomEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeCustomEvent event = (NativeCustomEvent) elemental2Event"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("sup",{style:{color:"orange"}},"(1)"))," up to date, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," doesn't map the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent"},"PointerEvent")," javascript class therefore you can use only the  ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/evets/NativeMouseEvent.html"},"NativeMouseEvent"),"."),(0,r.kt)("p",null,"Here is a simple sample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'LineChart chart = new LineChart();\nchart.getOptions().setResponsive(true);\nchart.getOptions().getLegend().setPosition(Position.TOP);\nchart.getOptions().getTitle().setDisplay(true);\nchart.getOptions().getTitle().setText("Charba line chart");\n\nLineDataset dataset1 = chart.newDataset();\ndataset1.setLabel("dataset 1");\n\ndataset1.setBackgroundColor(HtmlColor.BLUE.alpha(0.2));\ndataset1.setBorderColor(HtmlColor.BLUE);\n\ndataset1.setData(10, 45, 50, 25, 30, 5);\n\nchart.getData().setLabels("1", "2", "3", "4", "5", "6");\nchart.getData().setDatasets(dataset1);\n\nchart.getChartElement().getStyle().setWidth("600px");\nchart.getChartElement().getStyle().setHeight("300px");\n\nElement element = chart.getChartElement().as();\n\nDomGlobal.document.body.appendChild(element);\n')),(0,r.kt)("h2",{id:"gwt-web-toolkit"},"GWT Web Toolkit"),(0,r.kt)("p",null,"The following table shows how you can leverage on ",(0,r.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," and ",(0,r.kt)("strong",{parentName:"p"},"Charba")," together:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Charba class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GWT class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Charba to GWT"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GWT to Charba"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/Div.html"},"Div")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/DivElement.html"},"DivElement")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DivElement element = Div.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Div element = CastHelper.toDiv(DivElement)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/ImageElement.html"},"ImageElement")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ImageElement element = Img.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Img element = CastHelper.toImg(ImageElement)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/CanvasElement.html"},"CanvasElement")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasElement element = Canvas.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Canvas element = CastHelper.toCanvas(CanvasElement)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasPattern.html"},"CanvasPattern")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasPattern item = CanvasPatternItem.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasGradient.html"},"CanvasGradient")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasGradient item = CanvasGradientItem.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/events/NativeBaseEvent.html"},"NativeBaseEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeEvent event = NativeBaseEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeBaseEvent event = (NativeBaseEvent) gwtEvent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/events/NativeMouseEvent.html"},"NativeMouseEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeEvent event = NativeMouseEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeMouseEvent event = (NativeMouseEvent) gwtEvent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/events/NativeTouchEvent.html"},"NativeTouchEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeEvent event = NativeTouchEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeTouchEvent event = (NativeTouchEvent) gwtEvent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/events/NativeKeyboardEvent.html"},"NativeKeyboardEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeEvent event = NativeTouchEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeKeyboardEvent event = (NativeKeyboardEvent) gwtEvent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/events/NativePointerEvent.html"},"NativePointerEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeEvent event = NativePointerEvent.as()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeMouseEvent event = (NativeMouseEvent) gwtEvent"),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("sup",{style:{color:"orange"}},"(2)")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("sup",{style:{color:"orange"}},"(2)"))," up to date, ",(0,r.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," maps only the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent"},"MouseEvent")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent"},"TouchEvent"),"  javascript classes therefore you can cast them but you cannot use all available event info."),(0,r.kt)("p",null,"GWT Web Toolkit is also providing other classes related to images and for those ",(0,r.kt)("strong",{parentName:"p"},"Charba")," is providing a dedicated utility, ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/gwt/ImagesHelper.html"},"ImagesHelper"),", to transform those GWT classes in a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/Img.html"},"Img"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Charba class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GWT class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GWT to Charba"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/resources/client/ImageResource.html"},"ImageResource")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Img element = ImagesHelper.toImg(ImageResource)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.7/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/Image.html"},"Image")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Img element = ImagesHelper.toImg(Image)"))))))}g.isMDXComponent=!0}}]);