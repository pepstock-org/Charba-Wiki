(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(8),o=(r(0),r(209)),i=r(210),c={id:"GettingStarted",title:"Getting Started",hide_title:!0,sidebar_label:"Getting Started"},s={unversionedId:"GettingStarted",id:"version-3.3/GettingStarted",isDocsHomePage:!1,title:"Getting Started",description:"My first chart",source:"@site/versioned_docs/version-3.3/GettingStarted.md",sourceDirName:".",slug:"/GettingStarted",permalink:"/Charba-Wiki/docs/3.3/GettingStarted",version:"3.3",sidebar_label:"Getting Started",frontMatter:{id:"GettingStarted",title:"Getting Started",hide_title:!0,sidebar_label:"Getting Started"},sidebar:"version-3.3/docs",previous:{title:"Overview",permalink:"/Charba-Wiki/docs/3.3/Overview"},next:{title:"Migration and integration",permalink:"/Charba-Wiki/docs/3.3/Integration"}},l=[{value:"My first chart",id:"my-first-chart",children:[]},{value:"Javascript resources",id:"javascript-resources",children:[{value:"Embedded resources",id:"embedded-resources",children:[]},{value:"Deferred resources (only GWT artifact)",id:"deferred-resources-only-gwt-artifact",children:[]}]},{value:"Polyfilling your project",id:"polyfilling-your-project",children:[{value:"Polyfilling bj <code>CoreJs</code>",id:"polyfilling-bj-corejs",children:[]},{value:"Polyfilling bj <code>polyfill.io</code>",id:"polyfilling-bj-polyfillio",children:[]}]}],p={toc:l};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"my-first-chart"},"My first chart"),Object(o.b)("p",null,"It's easy to get started with ",Object(o.b)("strong",{parentName:"p"},"Charba"),". "),Object(o.b)("p",null,"In this example, we create a bar chart for a single dataset."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'// sets resource type\nResourcesType.setClientBundle(EmbeddedResources.INSTANCE);\n\nBarChart chart = new BarChart();\n// for GWT widget\n// BarChartWidget chart = new BarChartWidget();\n\nchart.getOptions().setResponsive(true);\nchart.getOptions().getTitle().setText("My first chart");\n\nBarDataset dataset = chart.newDataset();\ndataset.setLabel("dataset 1");\n\ndataset.setBackgroundColor(HtmlColor.CORNFLOWER_BLUE.alpha(0.2));\ndataset.setBorderColor(HtmlColor.CORNFLOWER_BLUE);\ndataset.setBorderWidth(1);\ndataset.setData(20, 5, 40, 35, 50, 70, 80);\n\nchart.getData().setLabels("January", "February", "March", "April", "May", "June", "July");\nchart.getData().setDatasets(dataset);\n\n// add to DOM by Elemental 2\nDomGlobal.document.body.appendChild(chart.getChartElement().as());\n// add to DOM for GWT widget\n// RootPanel.get().add(chart);\n')),Object(o.b)("img",{src:Object(i.a)("/img/gettingStarted.png")}),Object(o.b)("h2",{id:"javascript-resources"},"Javascript resources"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Charba")," is injecting javascript resources, in order to have a self-consistent package without any dependencies with other configuration (for instance into HTML page of application)."),Object(o.b)("p",null,"Injecting javascript resources, the application could be pretty big, mainly due to ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," minified file that is more than 200 KB of size."),Object(o.b)("p",null,"Therefore, as of version 2.3, ",Object(o.b)("strong",{parentName:"p"},"Charba")," forces the user to define which kind of resources must be applied to own project, before starting using ",Object(o.b)("strong",{parentName:"p"},"Charba"),". That means before calling whatever ",Object(o.b)("strong",{parentName:"p"},"Charba")," API, the resource to use to inject ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," must be set, otherwise an exception will occur."),Object(o.b)("p",null,"Furthermore, as of version 3.0, ",Object(o.b)("strong",{parentName:"p"},"Charba")," enables the ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," feature to decide which date time javascript library to use to support timeseries charts. The ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," bundle is not longer used in order to inject separately the date time library and its CHART.JS adapter."),Object(o.b)("h3",{id:"embedded-resources"},"Embedded resources"),Object(o.b)("p",null,"An embedded resource contains the javascript code to inject inside a specific class and, when invoked, it will inject the code into DOM tree."),Object(o.b)("p",null,"There are 3 different ",Object(o.b)("inlineCode",{parentName:"p"},"embedded resources")," depending on date time library to inject:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/EmbeddedResources.html"},"EmbeddedResources"))," which injects ",Object(o.b)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",Object(o.b)("a",{parentName:"li",href:"https://momentjs.com/"},"MOMENT.js")," and the specific ",Object(o.b)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-moment"},"adapter"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/LuxonEmbeddedResources.html"},"LuxonEmbeddedResources"))," which injects ",Object(o.b)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",Object(o.b)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific ",Object(o.b)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/DatefnsEmbeddedResources.html"},"DatefnsEmbeddedResources"))," which injects ",Object(o.b)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",Object(o.b)("a",{parentName:"li",href:"https://date-fns.org/"},"Date-fns")," and the specific ",Object(o.b)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-date-fns"},"adapter"),".")),Object(o.b)("p",null,"Then, before using ",Object(o.b)("strong",{parentName:"p"},"Charba"),", you must set which kind of resources you want to use (and that's ",Object(o.b)("strong",{parentName:"p"},"mandatory"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// Moment\nResourcesType.setClientBundle(EmbeddedResources.INSTANCE);\n// or Luxon\nResourcesType.setClientBundle(LuxonEmbeddedResources.INSTANCE);\n// or Datefns \nResourcesType.setClientBundle(DatefnsEmbeddedResources.INSTANCE);\n")),Object(o.b)("h3",{id:"deferred-resources-only-gwt-artifact"},"Deferred resources (only GWT artifact)"),Object(o.b)("p",null,"A deferred resource contains the javascript code to inject by GWT ",Object(o.b)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource"},"ClientBundle")," and it will be injected into DOM tree by ",Object(o.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/EntryPointStarter.html"},"EntryPointStarter"),"."),Object(o.b)("p",null,"For users who wants to leverage on asynchronously loading of ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," module, date time library and adapter or want to leverage on ",Object(o.b)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideCodeSplitting.html"},"GWT code splitting"),", they should use the deferred resources and start using ",Object(o.b)("strong",{parentName:"p"},"Charba")," inside the callback of successfully load of needed resources."),Object(o.b)("p",null,"There are 3 different ",Object(o.b)("inlineCode",{parentName:"p"},"deferred resources")," depending on date time library to inject:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/DeferredResources.html"},"DeferredResources"))," where ",Object(o.b)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file is defined by ",Object(o.b)("a",{parentName:"li",href:"http://www.gwtproject.org/javadoc/latest/index.html?com/google/gwt/resources/client/ExternalTextResource.html"},"ExternalTextResource"),", therefore loaded asynchronously with GWT application"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/LuxonDeferredResources.html"},"LuxonDeferredResources"))," which injects ",Object(o.b)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",Object(o.b)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific ",Object(o.b)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/DatefnsDeferredResources.html"},"DatefnsDeferredResources"))," which injects ",Object(o.b)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",Object(o.b)("a",{parentName:"li",href:"https://date-fns.org/"},"Date-fns")," and the specific ",Object(o.b)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-date-fns"},"adapter"),".")),Object(o.b)("p",null,"Then, before using ",Object(o.b)("strong",{parentName:"p"},"Charba"),", you must set which kind of resources you want to use (and that's ",Object(o.b)("strong",{parentName:"p"},"mandatory"),") by the ",Object(o.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/resources/EntryPointStarter.html"},"EntryPointStarter"),", as following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'GWT.runAsync(new RunAsyncCallback() {\n    @Override\n    public void onFailure(Throwable throwable) {\n        Window.alert("Code download failed");\n    }\n\n    @Override\n    public void onSuccess() {\n        // MOMENT\n        EntryPointStarter.run(DeferredResources.INSTANCE, new Runnable() {\n        // LUXON\n        // EntryPointStarter.run(LuxonDeferredResources.INSTANCE, new Runnable() {\n        // Datefns\n        // EntryPointStarter.run(DatefnsDeferredResources.INSTANCE, new Runnable() {\n            \n            @Override\n            public void run() {\n                // UI cretion and starting point to invoke CHARBA API\n            }\n        });\n    }\n});\n')),Object(o.b)("h2",{id:"polyfilling-your-project"},"Polyfilling your project"),Object(o.b)("p",null,"Starting from ",Object(o.b)("strong",{parentName:"p"},"Charba")," version 2.x, leveraging on ",Object(o.b)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html"},"JSINTEROP"),", it does not work on ",Object(o.b)("inlineCode",{parentName:"p"},"Internet Explorer 11")," and other aged browsers because of Javascript lanaguage implementation can not provide all methods needed to JSINTEROP."),Object(o.b)("p",null,"The common solution is to apply a polyfill, which is adding the ",Object(o.b)("inlineCode",{parentName:"p"},"missing pieces")," without which nothing would work as expected.\nPolyfills are in fact a very bad thing, as long as they are a very big thing. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Don't add them unless you need them.")," "),Object(o.b)("p",null,"The following sections will be described a couple of ways to apply a polyfill in your GWT application in order top use ",Object(o.b)("strong",{parentName:"p"},"Charba"),". "),Object(o.b)("h3",{id:"polyfilling-bj-corejs"},"Polyfilling bj ",Object(o.b)("inlineCode",{parentName:"h3"},"CoreJs")),Object(o.b)("p",null,"Looking for a polyfill implementation, we landed on ",Object(o.b)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"CoreJs"),". "),Object(o.b)("p",null,"What is ",Object(o.b)("inlineCode",{parentName:"p"},"core-js"),"?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It is a polyfill of the JavaScript standard library, which supports:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The latest ECMAScript standard."),Object(o.b)("li",{parentName:"ul"},"ECMAScript standard library proposals."),Object(o.b)("li",{parentName:"ul"},"Some WHATWG / W3C standards (cross-platform or closely related ECMAScript)."))),Object(o.b)("li",{parentName:"ul"},"It is maximally modular: you can easily choose to load only the features you will be using."),Object(o.b)("li",{parentName:"ul"},"It can be used without polluting the global namespace.")),Object(o.b)("p",null,"It's the most universal and the most popular way to polyfill JavaScript standard library."),Object(o.b)("p",null,"The following steps describe how to polyfill your application by CoreJs."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Get CoreJs"),". Seeing the ",Object(o.b)("a",{parentName:"li",href:"https://github.com/zloirock/core-js#installation"},"CoreJs installation section"),", there is official link where you can download the last version of CoreJs. "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Add to your project"),". You can save the minified CoreJs file in your project, for instance in your WAR folder, the same folder of html page."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Change your html page"),". You can add the following HTML script tag in you web page, in the ",Object(o.b)("inlineCode",{parentName:"li"},"head")," section, before loading your application:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},' <head>\n    ...\n    <script src="corejs.min.js"><\/script>\n    <script type="text/javascript" src="your_application/your_application.nocache.js"><\/script>\n    ...\n </head>\n')),Object(o.b)("p",null,"That's all. "),Object(o.b)("h3",{id:"polyfilling-bj-polyfillio"},"Polyfilling bj ",Object(o.b)("inlineCode",{parentName:"h3"},"polyfill.io")),Object(o.b)("p",null,"Even if it needs a internet connection, you can leverage on ",Object(o.b)("a",{parentName:"p",href:"https://polyfill.io/v3/"},"polyfill.io"),"."),Object(o.b)("p",null,"What is ",Object(o.b)("inlineCode",{parentName:"p"},"polyfill.io"),"?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It's a service which accepts a request for a set of browser features and returns only the polyfills that are needed by the requesting browser. ")),Object(o.b)("p",null,"To activate the polyfill by ",Object(o.b)("inlineCode",{parentName:"p"},"polyfill.io"),", you just need to add the following HTML script tag in you web page, in the ",Object(o.b)("inlineCode",{parentName:"p"},"head")," section, before loading your application:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},' <head>\n    ...\n    <script src="https://polyfill.io/v3/polyfill.js?features=es5,es6,es7"><\/script>\n    <script type="text/javascript" src="your_application/your_application.nocache.js"><\/script>\n    ...\n </head>\n')))}b.isMDXComponent=!0},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),u=a,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return r?n.a.createElement(h,c(c({ref:t},l),{},{components:r})):n.a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},210:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var a=r(16),n=r(211);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(c)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+p:p}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},211:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))}}]);