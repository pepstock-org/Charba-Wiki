"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[79847],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(r),u=n,f=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},69634:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=r(44996),s=["components"],l={id:"GettingStarted",title:"Getting Started",hide_title:!0,sidebar_label:"Getting Started"},p=void 0,c={unversionedId:"GettingStarted",id:"version-3.3/GettingStarted",title:"Getting Started",description:"My first chart",source:"@site/versioned_docs/version-3.3/GettingStarted.md",sourceDirName:".",slug:"/GettingStarted",permalink:"/Charba-Wiki/docs/3.3/GettingStarted",draft:!1,tags:[],version:"3.3",frontMatter:{id:"GettingStarted",title:"Getting Started",hide_title:!0,sidebar_label:"Getting Started"},sidebar:"version-3.3/docs",previous:{title:"Overview",permalink:"/Charba-Wiki/docs/3.3/Overview"},next:{title:"Migration and integration",permalink:"/Charba-Wiki/docs/3.3/Integration"}},d={},h=[{value:"My first chart",id:"my-first-chart",level:2},{value:"Javascript resources",id:"javascript-resources",level:2},{value:"Embedded resources",id:"embedded-resources",level:3},{value:"Deferred resources (only GWT artifact)",id:"deferred-resources-only-gwt-artifact",level:3},{value:"Polyfilling your project",id:"polyfilling-your-project",level:2},{value:"Polyfilling bj <code>CoreJs</code>",id:"polyfilling-bj-corejs",level:3},{value:"Polyfilling bj <code>polyfill.io</code>",id:"polyfilling-bj-polyfillio",level:3}],u={toc:h};function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"my-first-chart"},"My first chart"),(0,o.kt)("p",null,"It's easy to get started with ",(0,o.kt)("strong",{parentName:"p"},"Charba"),". "),(0,o.kt)("p",null,"In this example, we create a bar chart for a single dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// sets resource type\nResourcesType.setClientBundle(EmbeddedResources.INSTANCE);\n\nBarChart chart = new BarChart();\n// for GWT widget\n// BarChartWidget chart = new BarChartWidget();\n\nchart.getOptions().setResponsive(true);\nchart.getOptions().getTitle().setText("My first chart");\n\nBarDataset dataset = chart.newDataset();\ndataset.setLabel("dataset 1");\n\ndataset.setBackgroundColor(HtmlColor.CORNFLOWER_BLUE.alpha(0.2));\ndataset.setBorderColor(HtmlColor.CORNFLOWER_BLUE);\ndataset.setBorderWidth(1);\ndataset.setData(20, 5, 40, 35, 50, 70, 80);\n\nchart.getData().setLabels("January", "February", "March", "April", "May", "June", "July");\nchart.getData().setDatasets(dataset);\n\n// add to DOM by Elemental 2\nDomGlobal.document.body.appendChild(chart.getChartElement().as());\n// add to DOM for GWT widget\n// RootPanel.get().add(chart);\n')),(0,o.kt)("img",{src:(0,i.Z)("/img/gettingStarted.png")}),(0,o.kt)("h2",{id:"javascript-resources"},"Javascript resources"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," is injecting javascript resources, in order to have a self-consistent package without any dependencies with other configuration (for instance into HTML page of application)."),(0,o.kt)("p",null,"Injecting javascript resources, the application could be pretty big, mainly due to ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," minified file that is more than 200 KB of size."),(0,o.kt)("p",null,"Therefore, as of version 2.3, ",(0,o.kt)("strong",{parentName:"p"},"Charba")," forces the user to define which kind of resources must be applied to own project, before starting using ",(0,o.kt)("strong",{parentName:"p"},"Charba"),". That means before calling whatever ",(0,o.kt)("strong",{parentName:"p"},"Charba")," API, the resource to use to inject ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," must be set, otherwise an exception will occur."),(0,o.kt)("p",null,"Furthermore, as of version 3.0, ",(0,o.kt)("strong",{parentName:"p"},"Charba")," enables the ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," feature to decide which date time javascript library to use to support timeseries charts. The ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," bundle is not longer used in order to inject separately the date time library and its CHART.JS adapter."),(0,o.kt)("h3",{id:"embedded-resources"},"Embedded resources"),(0,o.kt)("p",null,"An embedded resource contains the javascript code to inject inside a specific class and, when invoked, it will inject the code into DOM tree."),(0,o.kt)("p",null,"There are 3 different ",(0,o.kt)("inlineCode",{parentName:"p"},"embedded resources")," depending on date time library to inject:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/EmbeddedResources.html"},"EmbeddedResources"))," which injects ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",(0,o.kt)("a",{parentName:"li",href:"https://momentjs.com/"},"MOMENT.js")," and the specific ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-moment"},"adapter"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/LuxonEmbeddedResources.html"},"LuxonEmbeddedResources"))," which injects ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",(0,o.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/DatefnsEmbeddedResources.html"},"DatefnsEmbeddedResources"))," which injects ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",(0,o.kt)("a",{parentName:"li",href:"https://date-fns.org/"},"Date-fns")," and the specific ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-date-fns"},"adapter"),".")),(0,o.kt)("p",null,"Then, before using ",(0,o.kt)("strong",{parentName:"p"},"Charba"),", you must set which kind of resources you want to use (and that's ",(0,o.kt)("strong",{parentName:"p"},"mandatory"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Moment\nResourcesType.setClientBundle(EmbeddedResources.INSTANCE);\n// or Luxon\nResourcesType.setClientBundle(LuxonEmbeddedResources.INSTANCE);\n// or Datefns \nResourcesType.setClientBundle(DatefnsEmbeddedResources.INSTANCE);\n")),(0,o.kt)("h3",{id:"deferred-resources-only-gwt-artifact"},"Deferred resources (only GWT artifact)"),(0,o.kt)("p",null,"A deferred resource contains the javascript code to inject by GWT ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource"},"ClientBundle")," and it will be injected into DOM tree by ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/EntryPointStarter.html"},"EntryPointStarter"),"."),(0,o.kt)("p",null,"For users who wants to leverage on asynchronously loading of ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," module, date time library and adapter or want to leverage on ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideCodeSplitting.html"},"GWT code splitting"),", they should use the deferred resources and start using ",(0,o.kt)("strong",{parentName:"p"},"Charba")," inside the callback of successfully load of needed resources."),(0,o.kt)("p",null,"There are 3 different ",(0,o.kt)("inlineCode",{parentName:"p"},"deferred resources")," depending on date time library to inject:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/DeferredResources.html"},"DeferredResources"))," where ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file is defined by ",(0,o.kt)("a",{parentName:"li",href:"http://www.gwtproject.org/javadoc/latest/index.html?com/google/gwt/resources/client/ExternalTextResource.html"},"ExternalTextResource"),", therefore loaded asynchronously with GWT application"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/LuxonDeferredResources.html"},"LuxonDeferredResources"))," which injects ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",(0,o.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/DatefnsDeferredResources.html"},"DatefnsDeferredResources"))," which injects ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",(0,o.kt)("a",{parentName:"li",href:"https://date-fns.org/"},"Date-fns")," and the specific ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-date-fns"},"adapter"),".")),(0,o.kt)("p",null,"Then, before using ",(0,o.kt)("strong",{parentName:"p"},"Charba"),", you must set which kind of resources you want to use (and that's ",(0,o.kt)("strong",{parentName:"p"},"mandatory"),") by the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/EntryPointStarter.html"},"EntryPointStarter"),", as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'GWT.runAsync(new RunAsyncCallback() {\n    @Override\n    public void onFailure(Throwable throwable) {\n        Window.alert("Code download failed");\n    }\n\n    @Override\n    public void onSuccess() {\n        // MOMENT\n        EntryPointStarter.run(DeferredResources.INSTANCE, new Runnable() {\n        // LUXON\n        // EntryPointStarter.run(LuxonDeferredResources.INSTANCE, new Runnable() {\n        // Datefns\n        // EntryPointStarter.run(DatefnsDeferredResources.INSTANCE, new Runnable() {\n            \n            @Override\n            public void run() {\n                // UI cretion and starting point to invoke CHARBA API\n            }\n        });\n    }\n});\n')),(0,o.kt)("h2",{id:"polyfilling-your-project"},"Polyfilling your project"),(0,o.kt)("p",null,"Starting from ",(0,o.kt)("strong",{parentName:"p"},"Charba")," version 2.x, leveraging on ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html"},"JSINTEROP"),", it does not work on ",(0,o.kt)("inlineCode",{parentName:"p"},"Internet Explorer 11")," and other aged browsers because of Javascript lanaguage implementation can not provide all methods needed to JSINTEROP."),(0,o.kt)("p",null,"The common solution is to apply a polyfill, which is adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"missing pieces")," without which nothing would work as expected.\nPolyfills are in fact a very bad thing, as long as they are a very big thing. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't add them unless you need them.")," "),(0,o.kt)("p",null,"The following sections will be described a couple of ways to apply a polyfill in your GWT application in order top use ",(0,o.kt)("strong",{parentName:"p"},"Charba"),". "),(0,o.kt)("h3",{id:"polyfilling-bj-corejs"},"Polyfilling bj ",(0,o.kt)("inlineCode",{parentName:"h3"},"CoreJs")),(0,o.kt)("p",null,"Looking for a polyfill implementation, we landed on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"CoreJs"),". "),(0,o.kt)("p",null,"What is ",(0,o.kt)("inlineCode",{parentName:"p"},"core-js"),"?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is a polyfill of the JavaScript standard library, which supports:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The latest ECMAScript standard."),(0,o.kt)("li",{parentName:"ul"},"ECMAScript standard library proposals."),(0,o.kt)("li",{parentName:"ul"},"Some WHATWG / W3C standards (cross-platform or closely related ECMAScript)."))),(0,o.kt)("li",{parentName:"ul"},"It is maximally modular: you can easily choose to load only the features you will be using."),(0,o.kt)("li",{parentName:"ul"},"It can be used without polluting the global namespace.")),(0,o.kt)("p",null,"It's the most universal and the most popular way to polyfill JavaScript standard library."),(0,o.kt)("p",null,"The following steps describe how to polyfill your application by CoreJs."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Get CoreJs"),". Seeing the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/zloirock/core-js#installation"},"CoreJs installation section"),", there is official link where you can download the last version of CoreJs. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Add to your project"),". You can save the minified CoreJs file in your project, for instance in your WAR folder, the same folder of html page."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Change your html page"),". You can add the following HTML script tag in you web page, in the ",(0,o.kt)("inlineCode",{parentName:"li"},"head")," section, before loading your application:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},' <head>\n    ...\n    <script src="corejs.min.js"><\/script>\n    <script type="text/javascript" src="your_application/your_application.nocache.js"><\/script>\n    ...\n </head>\n')),(0,o.kt)("p",null,"That's all. "),(0,o.kt)("h3",{id:"polyfilling-bj-polyfillio"},"Polyfilling bj ",(0,o.kt)("inlineCode",{parentName:"h3"},"polyfill.io")),(0,o.kt)("p",null,"Even if it needs a internet connection, you can leverage on ",(0,o.kt)("a",{parentName:"p",href:"https://polyfill.io/v3/"},"polyfill.io"),"."),(0,o.kt)("p",null,"What is ",(0,o.kt)("inlineCode",{parentName:"p"},"polyfill.io"),"?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's a service which accepts a request for a set of browser features and returns only the polyfills that are needed by the requesting browser. ")),(0,o.kt)("p",null,"To activate the polyfill by ",(0,o.kt)("inlineCode",{parentName:"p"},"polyfill.io"),", you just need to add the following HTML script tag in you web page, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," section, before loading your application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},' <head>\n    ...\n    <script src="https://polyfill.io/v3/polyfill.js?features=es5,es6,es7"><\/script>\n    <script type="text/javascript" src="your_application/your_application.nocache.js"><\/script>\n    ...\n </head>\n')))}f.isMDXComponent=!0}}]);