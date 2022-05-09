"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[45342],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=d(a),u=r,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82054:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(44996),s=["components"],l={id:"GettingStarted",title:"Getting Started",hide_title:!0,sidebar_label:"Getting started"},d=void 0,p={unversionedId:"getting-started/GettingStarted",id:"version-4.2/getting-started/GettingStarted",title:"Getting Started",description:"",source:"@site/versioned_docs/version-4.2/getting-started/GettingStarted.md",sourceDirName:"getting-started",slug:"/getting-started/GettingStarted",permalink:"/Charba-Wiki/docs/4.2/getting-started/GettingStarted",draft:!1,tags:[],version:"4.2",frontMatter:{id:"GettingStarted",title:"Getting Started",hide_title:!0,sidebar_label:"Getting started"},sidebar:"version-4.2/docs",previous:{title:"Build and install",permalink:"/Charba-Wiki/docs/4.2/getting-started/Building"},next:{title:"Integration",permalink:"/Charba-Wiki/docs/4.2/getting-started/Integration"}},c={},h=[{value:"My first chart",id:"my-first-chart",level:2},{value:"Javascript resources",id:"javascript-resources",level:2},{value:"Embedded resources",id:"embedded-resources",level:3},{value:"Deferred resources",id:"deferred-resources",level:3}],u={toc:h};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"my-first-chart"},"My first chart"),(0,i.kt)("p",null,"It's easy to get started with ",(0,i.kt)("strong",{parentName:"p"},"Charba"),". "),(0,i.kt)("p",null,"In this example, we create a bar chart with a single dataset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// enabling Charba\nCharba.enable();\n\nBarChart chart = new BarChart();\n// for GWT widget\n// BarChartWidget chart = new BarChartWidget();\n\nchart.getOptions().setResponsive(true);\nchart.getOptions().getTitle().setText("My first chart");\n\nBarDataset dataset = chart.newDataset();\ndataset.setLabel("dataset 1");\n\ndataset.setBackgroundColor(HtmlColor.CORNFLOWER_BLUE.alpha(0.2));\ndataset.setBorderColor(HtmlColor.CORNFLOWER_BLUE);\ndataset.setBorderWidth(1);\ndataset.setData(20, 5, 40, 35, 50, 70, 80);\n\nchart.getData().setLabels("January", "February", "March", "April", "May", "June", "July");\nchart.getData().setDatasets(dataset);\n\n// add to DOM by Elemental 2\nDomGlobal.document.body.appendChild(chart.getChartElement().as());\n// add to DOM for GWT widget\n// RootPanel.get().add(chart);\n')),(0,i.kt)("img",{src:(0,o.Z)("/img/gettingStarted.png")}),(0,i.kt)("h2",{id:"javascript-resources"},"Javascript resources"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," injects javascript resources, in order to have a self-consistent package without any dependencies with other configuration (for instance in the HTML page of application)."),(0,i.kt)("p",null,"Injecting javascript resources, the application could be pretty big, mainly due to ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," minified file that is more than 200 KB of size."),(0,i.kt)("p",null,"Therefore, as of version 2.3, ",(0,i.kt)("strong",{parentName:"p"},"Charba")," forces the user to define which kind of resources must be applied to own project, before starting using ",(0,i.kt)("strong",{parentName:"p"},"Charba"),". That means before calling whatever ",(0,i.kt)("strong",{parentName:"p"},"Charba")," API, the resource to use to inject ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," must be set, otherwise an exception will occur."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," injects also  the ",(0,i.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter")," in order to enable the ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," time and time series axes feature."),(0,i.kt)("h3",{id:"embedded-resources"},"Embedded resources"),(0,i.kt)("p",null,"An embedded resource contains the javascript code to inject inside a specific class and, when invoked, it will inject the code in the DOM tree."),(0,i.kt)("p",null,"To initialize ",(0,i.kt)("strong",{parentName:"p"},"Charba")," using the embedded resources, you must set enable ",(0,i.kt)("strong",{parentName:"p"},"Charba")," (and that's ",(0,i.kt)("strong",{parentName:"p"},"mandatory"),"), as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// with date time library, Luxon\nCharba.enable();\n// or without date time library, Luxon\nCharba.enable(false);\n")),(0,i.kt)("p",null,"There are 2 different ",(0,i.kt)("inlineCode",{parentName:"p"},"embedded resources")," instances depending on if ",(0,i.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon"),", as date time library, has to be injected or not."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Charba.enable()")," injects ",(0,i.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",(0,i.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific date ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Charba.enable(false)")," injects ",(0,i.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file and the specific date ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),". ",(0,i.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," is not injected in order to leave the user to use another instance of ",(0,i.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," because, for instance, it could be already in use for other purposes.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("a",{parentName:"p",href:"../utilities/Javascript"},"javascript utilities")," and the ",(0,i.kt)("a",{parentName:"p",href:"../utilities/Toast"},"toast")," can be used even if the ",(0,i.kt)("strong",{parentName:"p"},"Charba.enable")," is not called because they don't depend on CHART.JS."))),(0,i.kt)("h3",{id:"deferred-resources"},"Deferred resources"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The deferred resources can be used ONLY in ",(0,i.kt)("strong",{parentName:"p"},"GWT Web Toolkit")," projects."))),(0,i.kt)("p",null,"A deferred resource contains the javascript code to inject by GWT ",(0,i.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource"},"ClientBundle")," and it will be injected in the DOM tree by ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/DeferredCharba.html"},"DeferredCharba"),"."),(0,i.kt)("p",null,"For users who wants to leverage on asynchronously loading of ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," module, date time library and adapter or want to leverage on ",(0,i.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideCodeSplitting.html"},"GWT code splitting"),", they should use the deferred resources and start using ",(0,i.kt)("strong",{parentName:"p"},"Charba")," inside the callback of successfully load of needed resources."),(0,i.kt)("p",null,"To initialize ",(0,i.kt)("strong",{parentName:"p"},"Charba")," using the deferred resources, you must set enable ",(0,i.kt)("strong",{parentName:"p"},"Charba")," (and that's ",(0,i.kt)("strong",{parentName:"p"},"mandatory"),"), as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GWT.runAsync(new RunAsyncCallback(){\n    @Override\n    public void onFailure(Throwable throwable){\n        Window.alert("Code download failed");\n    }\n\n    @Override\n    public void onSuccess(){\n        // with date time library, Luxon\n        DeferredCharba.enable(() -> {\n            // UI creation and starting point to invoke CHARBA API\n        });\n        // without date time library, Luxon\n        //DeferredCharba.enable(() -> {\n        //  // UI creation and starting point to invoke CHARBA API\n        //}, false);\n    }\n});\n')),(0,i.kt)("p",null,"There are 2 different ",(0,i.kt)("inlineCode",{parentName:"p"},"deferred resources")," instances depending on if ",(0,i.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon"),", as date time library, has to be injected or not:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DeferredCharba.enable(Runnable)")," injects ",(0,i.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",(0,i.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific date ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DeferredCharba.enable(Runnable, false)")," injects ",(0,i.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file and the specific date ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),". ",(0,i.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," is not injected in order to leave the user to use another instance of ",(0,i.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," because, for instance, it could be already in use for other purposes.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("a",{parentName:"p",href:"../utilities/Javascript"},"javascript utilities")," and the ",(0,i.kt)("a",{parentName:"p",href:"../utilities/Toast"},"toast")," can be used even if the ",(0,i.kt)("strong",{parentName:"p"},"DeferredCharba.enable")," is not called because they don't depend on CHART.JS."))))}m.isMDXComponent=!0}}]);