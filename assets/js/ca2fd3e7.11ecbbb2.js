"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[89372],{95788:(e,t,a)=>{a.d(t,{Iu:()=>d,yg:()=>u});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),g=n,u=c["".concat(l,".").concat(g)]||c[g]||h[g]||i;return a?r.createElement(u,o(o({ref:t},d),{},{components:a})):r.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},41796:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(45072),n=(a(11504),a(95788)),i=a(70964);const o={id:"GettingStarted",title:"Getting Started",hide_title:!0,sidebar_label:"Getting started"},s=void 0,l={unversionedId:"getting-started/GettingStarted",id:"getting-started/GettingStarted",title:"Getting Started",description:"My first chart",source:"@site/docs/getting-started/GettingStarted.md",sourceDirName:"getting-started",slug:"/getting-started/GettingStarted",permalink:"/Charba-Wiki/docs/getting-started/GettingStarted",draft:!1,tags:[],version:"current",frontMatter:{id:"GettingStarted",title:"Getting Started",hide_title:!0,sidebar_label:"Getting started"},sidebar:"docs",previous:{title:"Build and install",permalink:"/Charba-Wiki/docs/getting-started/Building"},next:{title:"Integration",permalink:"/Charba-Wiki/docs/getting-started/Integration"}},p={},d=[{value:"My first chart",id:"my-first-chart",level:2},{value:"Javascript resources",id:"javascript-resources",level:2},{value:"Embedded resources",id:"embedded-resources",level:3},{value:"Deferred resources",id:"deferred-resources",level:3}],c={toc:d},h="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(h,(0,r.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"my-first-chart"},"My first chart"),(0,n.yg)("p",null,"It's easy to get started with ",(0,n.yg)("strong",{parentName:"p"},"Charba"),". "),(0,n.yg)("p",null,"In this example, we create a bar chart with a single dataset."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// enabling Charba\nCharba.enable();\n\nBarChart chart = new BarChart();\n// for GWT widget\n// BarChartWidget chart = new BarChartWidget();\n\nchart.getOptions().setResponsive(true);\nchart.getOptions().getTitle().setText("My first chart");\n\nBarDataset dataset = chart.newDataset();\ndataset.setLabel("dataset 1");\n\ndataset.setBackgroundColor(HtmlColor.CORNFLOWER_BLUE.alpha(0.2));\ndataset.setBorderColor(HtmlColor.CORNFLOWER_BLUE);\ndataset.setBorderWidth(1);\ndataset.setData(20, 5, 40, 35, 50, 70, 80);\n\nchart.getData().setLabels("January", "February", "March", "April", "May", "June", "July");\nchart.getData().setDatasets(dataset);\n\n// add to DOM by Elemental 2\nDomGlobal.document.body.appendChild(chart.getChartElement().as());\n// add to DOM for GWT widget\n// RootPanel.get().add(chart);\n')),(0,n.yg)("img",{src:(0,i.c)("/img/gettingStarted.png")}),(0,n.yg)("h2",{id:"javascript-resources"},"Javascript resources"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," injects javascript resources, in order to have a self-consistent package without any dependencies with other configuration (for instance in the HTML page of application)."),(0,n.yg)("p",null,"Injecting javascript resources, the application could be pretty big, mainly due to ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," minified file that is more than 200 KB of size."),(0,n.yg)("p",null,"Therefore, as of version 2.3, ",(0,n.yg)("strong",{parentName:"p"},"Charba")," forces the user to define which kind of resources must be applied to own project, before starting using ",(0,n.yg)("strong",{parentName:"p"},"Charba"),". That means before calling whatever ",(0,n.yg)("strong",{parentName:"p"},"Charba")," API, the resource to use to inject ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," must be set, otherwise an exception will occur."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," injects also  the ",(0,n.yg)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter")," in order to enable the ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," time and time series axes feature."),(0,n.yg)("h3",{id:"embedded-resources"},"Embedded resources"),(0,n.yg)("p",null,"An embedded resource contains the javascript code to inject inside a specific class and, when invoked, it will inject the code in the DOM tree."),(0,n.yg)("p",null,"To initialize ",(0,n.yg)("strong",{parentName:"p"},"Charba")," using the embedded resources, you must set enable ",(0,n.yg)("strong",{parentName:"p"},"Charba")," (and that's ",(0,n.yg)("strong",{parentName:"p"},"mandatory"),"), as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// with date time library, Luxon\nCharba.enable();\n// or without date time library, Luxon\nCharba.enable(false);\n")),(0,n.yg)("p",null,"There are 2 different ",(0,n.yg)("inlineCode",{parentName:"p"},"embedded resources")," instances depending on if ",(0,n.yg)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon"),", as date time library, has to be injected or not."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"Charba.enable()")," injects ",(0,n.yg)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",(0,n.yg)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific date ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),"."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"Charba.enable(false)")," injects ",(0,n.yg)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file and the specific date ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),". ",(0,n.yg)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," is not injected in order to leave the user to use another instance of ",(0,n.yg)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," because, for instance, it could be already in use for other purposes.")),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The ",(0,n.yg)("a",{parentName:"p",href:"../utilities/Javascript"},"javascript utilities")," and the ",(0,n.yg)("a",{parentName:"p",href:"../utilities/Toast"},"toast")," can be used even if the ",(0,n.yg)("strong",{parentName:"p"},"Charba.enable")," is not called because they don't depend on CHART.JS.")),(0,n.yg)("h3",{id:"deferred-resources"},"Deferred resources"),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"The deferred resources can be used ONLY in ",(0,n.yg)("strong",{parentName:"p"},"GWT Web Toolkit")," projects.")),(0,n.yg)("p",null,"A deferred resource contains the javascript code to inject by GWT ",(0,n.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource"},"ClientBundle")," and it will be injected in the DOM tree by ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/DeferredCharba.html"},"DeferredCharba"),"."),(0,n.yg)("p",null,"For users who wants to leverage on asynchronously loading of ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," module, date time library and adapter or want to leverage on ",(0,n.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideCodeSplitting.html"},"GWT code splitting"),", they should use the deferred resources and start using ",(0,n.yg)("strong",{parentName:"p"},"Charba")," inside the callback of successfully load of needed resources."),(0,n.yg)("p",null,"To initialize ",(0,n.yg)("strong",{parentName:"p"},"Charba")," using the deferred resources, you must set enable ",(0,n.yg)("strong",{parentName:"p"},"Charba")," (and that's ",(0,n.yg)("strong",{parentName:"p"},"mandatory"),"), as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'GWT.runAsync(new RunAsyncCallback(){\n    @Override\n    public void onFailure(Throwable throwable){\n        Window.alert("Code download failed");\n    }\n\n    @Override\n    public void onSuccess(){\n        // with date time library, Luxon\n        DeferredCharba.enable(() -> {\n            // UI creation and starting point to invoke CHARBA API\n        });\n        // without date time library, Luxon\n        //DeferredCharba.enable(() -> {\n        //  // UI creation and starting point to invoke CHARBA API\n        //}, false);\n    }\n});\n')),(0,n.yg)("p",null,"There are 2 different ",(0,n.yg)("inlineCode",{parentName:"p"},"deferred resources")," instances depending on if ",(0,n.yg)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon"),", as date time library, has to be injected or not:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"DeferredCharba.enable(Runnable)")," injects ",(0,n.yg)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file, ",(0,n.yg)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," and the specific date ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),"."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"DeferredCharba.enable(Runnable, false)")," injects ",(0,n.yg)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," javascript file and the specific date ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-adapter-luxon"},"adapter"),". ",(0,n.yg)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," is not injected in order to leave the user to use another instance of ",(0,n.yg)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," because, for instance, it could be already in use for other purposes.")),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The ",(0,n.yg)("a",{parentName:"p",href:"../utilities/Javascript"},"javascript utilities")," and the ",(0,n.yg)("a",{parentName:"p",href:"../utilities/Toast"},"toast")," can be used even if the ",(0,n.yg)("strong",{parentName:"p"},"DeferredCharba.enable")," is not called because they don't depend on CHART.JS.")))}g.isMDXComponent=!0}}]);