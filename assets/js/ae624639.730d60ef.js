"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[75628],{95788:(e,t,a)=>{a.d(t,{Iu:()=>m,yg:()=>h});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(a),y=r,h=s["".concat(i,".").concat(y)]||s[y]||d[y]||o;return a?n.createElement(h,g(g({ref:t},m),{},{components:a})):n.createElement(h,g({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,g=new Array(o);g[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:r,g[1]=l;for(var p=2;p<o;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},89740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>g,metadata:()=>i,toc:()=>m});var n=a(45072),r=(a(11504),a(95788)),o=a(70964);const g={id:"Integration",title:"Integration",hide_title:!0,sidebar_label:"Integration"},l=void 0,i={unversionedId:"getting-started/Integration",id:"version-6.4/getting-started/Integration",title:"Integration",description:"Integration",source:"@site/versioned_docs/version-6.4/getting-started/Integration.md",sourceDirName:"getting-started",slug:"/getting-started/Integration",permalink:"/Charba-Wiki/docs/6.4/getting-started/Integration",draft:!1,tags:[],version:"6.4",frontMatter:{id:"Integration",title:"Integration",hide_title:!0,sidebar_label:"Integration"},sidebar:"docs",previous:{title:"Getting started",permalink:"/Charba-Wiki/docs/6.4/getting-started/GettingStarted"},next:{title:"Using defaults",permalink:"/Charba-Wiki/docs/6.4/defaults/"}},p={},m=[{value:"Integration",id:"integration",level:2},{value:"Elemental2",id:"elemental2",level:2},{value:"GWT Web Toolkit",id:"gwt-web-toolkit",level:2}],s={toc:m},d="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"integration"},"Integration"),(0,r.yg)("p",null,"Even if ",(0,r.yg)("strong",{parentName:"p"},"Charba")," was born to be a GWT chart library, ",(0,r.yg)("strong",{parentName:"p"},"Charba")," is now more a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure")," chart library and GWT is only one of possible framework where ",(0,r.yg)("strong",{parentName:"p"},"Charba")," works. "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Charba")," has got an own DOM tree manager in order to do not have any strong dependency with a DOM framework used for an application but nevertheless it is necessary that the DOM elements of ",(0,r.yg)("strong",{parentName:"p"},"Charba")," can be used by the other frameworks."),(0,r.yg)("p",null,"For this reason, ",(0,r.yg)("strong",{parentName:"p"},"Charba")," provides a set of utilities (casting some own elements to the framework's ones) in order to enable adding a chart in a DOM framework."),(0,r.yg)("p",null,"The main provided hooks by ",(0,r.yg)("strong",{parentName:"p"},"Charba")," are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"a ",(0,r.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Div.html"},"Div")," element which is exposed by ",(0,r.yg)("inlineCode",{parentName:"li"},"chart.getChartElement()")," method."),(0,r.yg)("li",{parentName:"ul"},"a ",(0,r.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")," element which is exposed by ",(0,r.yg)("inlineCode",{parentName:"li"},"chart.getCanvas()")," method.")),(0,r.yg)("img",{src:(0,o.c)("/img/charbaDiagram.png")}),(0,r.yg)("h2",{id:"elemental2"},"Elemental2"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," provides type checked access to all browser APIs for Java code. This is done by using closure extern files and generating JsTypes, which are part of the new JsInterop specification that is both implemented in GWT and J2CL."),(0,r.yg)("p",null,"The following table shows how you can leverage on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," and ",(0,r.yg)("strong",{parentName:"p"},"Charba")," together:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Charba class"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Elemental2 class"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Charba to Elemental2"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Elemental2 to Charba"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Div.html"},"Div")),(0,r.yg)("td",{parentName:"tr",align:"left"},"HTMLDivElement"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"HTMLDivElement element = Div.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Div element = CastHelper.toDiv(HTMLDivElement)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.yg)("td",{parentName:"tr",align:"left"},"HTMLImageElement"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"HTMLImageElement element = Img.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Img element = CastHelper.toImg(HTMLImageElement)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,r.yg)("td",{parentName:"tr",align:"left"},"HTMLCanvasElement"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"HTMLCanvasElement element = Canvas.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Canvas element = CastHelper.toCanvas(HTMLCanvasElement)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,r.yg)("td",{parentName:"tr",align:"left"},"CanvasPattern"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"CanvasPattern item = CanvasPatternItem.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem")),(0,r.yg)("td",{parentName:"tr",align:"left"},"CanvasGradient"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"CanvasGradient item = CanvasGradientItem.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/events/NativeBaseEvent.html"},"NativeBaseEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Event"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Event event = NativeBaseEvent.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeBaseEvent event = (NativeBaseEvent) elemental2Event"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/events/NativeMouseEvent.html"},"NativeMouseEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},"MouseEvent"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"MouseEvent event = NativeMouseEvent.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeMouseEvent event = (NativeMouseEvent) elemental2Event"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/events/NativeTouchEvent.html"},"NativeTouchEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},"TouchEvent"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"TouchEvent event = NativeTouchEvent.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeTouchEvent event = (NativeTouchEvent) elemental2Event"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/events/NativeKeyboardEvent.html"},"NativeKeyboardEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},"KeyboardEvent"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"KeyboardEvent event = NativeKeyboardEvent.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeKeyboardEvent event = (NativeKeyboardEvent) elemental2Event"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/events/NativePointerEvent.html"},"NativePointerEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},"MouseEvent"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"MouseEvent event = NativePointerEvent.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeMouseEvent event = (NativeMouseEvent) elemental2Event"),(0,r.yg)("strong",{parentName:"td"},(0,r.yg)("sup",{style:{color:"orange"}},"(1)")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/events/NativeCustomEvent.html"},"NativeCustomEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},"CustomEvent"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"CustomEvent event = NativeCustomEvent.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeCustomEvent event = (NativeCustomEvent) elemental2Event"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("sup",{style:{color:"orange"}},"(1)"))," up to date, ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," doesn't map the ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent"},"PointerEvent")," javascript class therefore you can use only the  ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/evets/NativeMouseEvent.html"},"NativeMouseEvent"),"."),(0,r.yg)("p",null,"Here is a simple sample:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'LineChart chart = new LineChart();\nchart.getOptions().setResponsive(true);\nchart.getOptions().getLegend().setPosition(Position.TOP);\nchart.getOptions().getTitle().setDisplay(true);\nchart.getOptions().getTitle().setText("Charba line chart");\n\nLineDataset dataset1 = chart.newDataset();\ndataset1.setLabel("dataset 1");\n\ndataset1.setBackgroundColor(HtmlColor.BLUE.alpha(0.2));\ndataset1.setBorderColor(HtmlColor.BLUE);\n\ndataset1.setData(10, 45, 50, 25, 30, 5);\n\nchart.getData().setLabels("1", "2", "3", "4", "5", "6");\nchart.getData().setDatasets(dataset1);\n\nchart.getChartElement().getStyle().setWidth("600px");\nchart.getChartElement().getStyle().setHeight("300px");\n\nElement element = chart.getChartElement().as();\n\nDomGlobal.document.body.appendChild(element);\n')),(0,r.yg)("h2",{id:"gwt-web-toolkit"},"GWT Web Toolkit"),(0,r.yg)("p",null,"The following table shows how you can leverage on ",(0,r.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," and ",(0,r.yg)("strong",{parentName:"p"},"Charba")," together:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Charba class"),(0,r.yg)("th",{parentName:"tr",align:"left"},"GWT class"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Charba to GWT"),(0,r.yg)("th",{parentName:"tr",align:"left"},"GWT to Charba"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Div.html"},"Div")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/DivElement.html"},"DivElement")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"DivElement element = Div.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Div element = CastHelper.toDiv(DivElement)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/ImageElement.html"},"ImageElement")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ImageElement element = Img.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Img element = CastHelper.toImg(ImageElement)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Canvas.html"},"Canvas")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/CanvasElement.html"},"CanvasElement")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"CanvasElement element = Canvas.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Canvas element = CastHelper.toCanvas(CanvasElement)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasPattern.html"},"CanvasPattern")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"CanvasPattern item = CanvasPatternItem.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"CanvasPatternItem item = CastHelper.toPattern(CanvasPattern)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/canvas/dom/client/CanvasGradient.html"},"CanvasGradient")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"CanvasGradient item = CanvasGradientItem.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"CanvasGradientItem item = CastHelper.toGradient(CanvasGradient)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/events/NativeBaseEvent.html"},"NativeBaseEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeEvent event = NativeBaseEvent.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeBaseEvent event = (NativeBaseEvent) gwtEvent"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/events/NativeMouseEvent.html"},"NativeMouseEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeEvent event = NativeMouseEvent.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeMouseEvent event = (NativeMouseEvent) gwtEvent"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/events/NativeTouchEvent.html"},"NativeTouchEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeEvent event = NativeTouchEvent.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeTouchEvent event = (NativeTouchEvent) gwtEvent"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/events/NativeKeyboardEvent.html"},"NativeKeyboardEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeEvent event = NativeTouchEvent.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeKeyboardEvent event = (NativeKeyboardEvent) gwtEvent"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/events/NativePointerEvent.html"},"NativePointerEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/dom/client/NativeEvent.html"},"NativeEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeEvent event = NativePointerEvent.as()")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"NativeMouseEvent event = (NativeMouseEvent) gwtEvent"),(0,r.yg)("strong",{parentName:"td"},(0,r.yg)("sup",{style:{color:"orange"}},"(2)")))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("sup",{style:{color:"orange"}},"(2)"))," up to date, ",(0,r.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/"},"GWT Web toolkit")," maps only the ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent"},"MouseEvent")," and ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent"},"TouchEvent"),"  javascript classes therefore you can cast them but you cannot use all available event info."),(0,r.yg)("p",null,"GWT Web Toolkit is also providing other classes related to images and for those ",(0,r.yg)("strong",{parentName:"p"},"Charba")," is providing a dedicated utility, ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/gwt/ImagesHelper.html"},"ImagesHelper"),", to transform those GWT classes in a ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Img.html"},"Img"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Charba class"),(0,r.yg)("th",{parentName:"tr",align:"left"},"GWT class"),(0,r.yg)("th",{parentName:"tr",align:"left"},"GWT to Charba"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/resources/client/ImageResource.html"},"ImageResource")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Img element = ImagesHelper.toImg(ImageResource)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/Image.html"},"Image")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Img element = ImagesHelper.toImg(Image)"))))))}y.isMDXComponent=!0}}]);