"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[82684],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},77714:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=a(44996),s=["components"],l={id:"GettingStarted",title:"Getting Started",hide_title:!0,sidebar_label:"Getting started"},c=void 0,d={unversionedId:"getting-started/GettingStarted",id:"version-4.1/getting-started/GettingStarted",title:"Getting Started",description:"My first chart",source:"@site/versioned_docs/version-4.1/getting-started/GettingStarted.md",sourceDirName:"getting-started",slug:"/getting-started/GettingStarted",permalink:"/Charba-Wiki/docs/4.1/getting-started/GettingStarted",draft:!1,tags:[],version:"4.1",frontMatter:{id:"GettingStarted",title:"Getting Started",hide_title:!0,sidebar_label:"Getting started"},sidebar:"version-4.1/docs",previous:{title:"Build and install",permalink:"/Charba-Wiki/docs/4.1/getting-started/Building"},next:{title:"Integration",permalink:"/Charba-Wiki/docs/4.1/getting-started/Integration"}},p={},h=[{value:"My first chart",id:"my-first-chart",level:2},{value:"Javascript resources",id:"javascript-resources",level:2},{value:"Embedded resources",id:"embedded-resources",level:3},{value:"Deferred resources",id:"deferred-resources",level:3}],u={toc:h};function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"my-first-chart"},"My first chart"),(0,i.kt)("p",null,"It's easy to get started with ",(0,i.kt)("strong",{parentName:"p"},"Charba"),". "),(0,i.kt)("p",null,"In this example, we create a bar chart with a single dataset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// enabling Charba\nCharba.enable();\n\nBarChart chart = new BarChart();\n// for GWT widget\n// BarChartWidget chart = new BarChartWidget();\n\nchart.getOptions().setResponsive(true);\nchart.getOptions().getTitle().setText("My first chart");\n\nBarDataset dataset = chart.newDataset();\ndataset.setLabel("dataset 1");\n\ndataset.setBackgroundColor(HtmlColor.CORNFLOWER_BLUE.alpha(0.2));\ndataset.setBorderColor(HtmlColor.CORNFLOWER_BLUE);\ndataset.setBorderWidth(1);\ndataset.setData(20, 5, 40, 35, 50, 70, 80);\n\nchart.getData().setLabels("January", "February", "March", "April", "May", "June", "July");\nchart.getData().setDatasets(dataset);\n\n// add to DOM by Elemental 2\nDomGlobal.document.body.appendChild(chart.getChartElement().as());\n// add to DOM for GWT widget\n// RootPanel.get().add(chart);\n')),(0,i.kt)("img",{src:(0,o.Z)("/img/gettingStarted.png")}),(0,i.kt)("h2",{id:"javascript-resources"},"Javascript resources"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," injects javascript resources, in order to have a self-consistent package without any dependencies with other configuration (for instance in the HTML page of application)."),(0,i.kt)("p",null,"Injecting javascript resources, the application could be pretty big, mainly due to ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," minified file that is more than 200 KB of size."),(0,i.kt)("p",null,"Therefore, as of version 2.3, ",(0,i.kt)("strong",{parentName:"p"},"Charba")," forces the user to define which kind of resources must be applied to own project, before starting using ",(0,i.kt)("strong",{parentName:"p"},"Charba"),". That means before calling whatever ",(0,i.kt)("strong",{parentName:"p"},"Charba")," API, the resource to use to inject ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," must be set, otherwise an exception will occur."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," injects also  the ",(0,i.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter")," in order to enable the ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," time and time series axes feature."),(0,i.kt)("h3",{id:"embedded-resources"},"Embedded resources"),(0,i.kt)("p",null,"An embedded resource contains the javascript code to inject inside a specific class and, when invoked, it will inject the code in the DOM tree."),(0,i.kt)("p",null,"To initialize ",(0,i.kt)("strong",{parentName:"p"},"Charba")," using the embedded resources, you must set enable ",(0,i.kt)("strong",{parentName:"p"},"Charba")," (and that's ",(0,i.kt)("strong",{parentName:"p"},"mandatory"),"), as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// with date time library, Luxon\nCharba.enable();\n// or without date time library, Luxon\nCharba.enable(false);\n")),(0,i.kt)("p",null,"There are 2 different ",(0,i.kt)("inlineCode",{parentName:"p"},"embedded resources")," instances depending on if ",(0,i.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon"),", as date time library, has to be injected or not."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Charba.enable()")," injects ",(0,i.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",(0,i.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific date ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Charba.enable(false)")," injects ",(0,i.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file and the specific date ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),". ",(0,i.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," is not injected in order to leave the user to use another instance of ",(0,i.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," because, for instance, it could be already in use for other purposes.")),(0,i.kt)("h3",{id:"deferred-resources"},"Deferred resources"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The deferred resources can be used ONLY in GWT Web Toolkit projects."))),(0,i.kt)("p",null,"A deferred resource contains the javascript code to inject by GWT ",(0,i.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource"},"ClientBundle")," and it will be injected in the DOM tree by ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/DeferredCharba.html"},"DeferredCharba"),"."),(0,i.kt)("p",null,"For users who wants to leverage on asynchronously loading of ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," module, date time library and adapter or want to leverage on ",(0,i.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideCodeSplitting.html"},"GWT code splitting"),", they should use the deferred resources and start using ",(0,i.kt)("strong",{parentName:"p"},"Charba")," inside the callback of successfully load of needed resources."),(0,i.kt)("p",null,"To initialize ",(0,i.kt)("strong",{parentName:"p"},"Charba")," using the deferred resources, you must set enable ",(0,i.kt)("strong",{parentName:"p"},"Charba")," (and that's ",(0,i.kt)("strong",{parentName:"p"},"mandatory"),"), as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'GWT.runAsync(new RunAsyncCallback(){\n    @Override\n    public void onFailure(Throwable throwable){\n        Window.alert("Code download failed");\n    }\n\n    @Override\n    public void onSuccess(){\n        // with date time library, Luxon\n        DeferredCharba.enable(() -> {\n            // UI creation and starting point to invoke CHARBA API\n        });\n        // without date time library, Luxon\n        //DeferredCharba.enable(() -> {\n        //  // UI creation and starting point to invoke CHARBA API\n        //}, false);\n    }\n});\n')),(0,i.kt)("p",null,"There are 2 different ",(0,i.kt)("inlineCode",{parentName:"p"},"deferred resources")," instances depending on if ",(0,i.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon"),", as date time library, has to be injected or not:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DeferredCharba.enable(Runnable)")," injects ",(0,i.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",(0,i.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific date ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DeferredCharba.enable(Runnable, false)")," injects ",(0,i.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file and the specific date ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),". ",(0,i.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," is not injected in order to leave the user to use another instance of ",(0,i.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," because, for instance, it could be already in use for other purposes.")))}m.isMDXComponent=!0}}]);