"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[70885],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));a(44996);const i={id:"Javascript",title:"Javascript utils",hide_title:!0,sidebar_label:"JavaScript utilities"},o=void 0,s={unversionedId:"utilities/Javascript",id:"version-5.3/utilities/Javascript",title:"Javascript utils",description:"",source:"@site/versioned_docs/version-5.3/utilities/Javascript.md",sourceDirName:"utilities",slug:"/utilities/Javascript",permalink:"/Charba-Wiki/docs/5.3/utilities/Javascript",draft:!1,tags:[],version:"5.3",frontMatter:{id:"Javascript",title:"Javascript utils",hide_title:!0,sidebar_label:"JavaScript utilities"},sidebar:"docs",previous:{title:"Regressions",permalink:"/Charba-Wiki/docs/5.3/Regressions"},next:{title:"Toasting",permalink:"/Charba-Wiki/docs/5.3/utilities/Toast"}},l={},p=[{value:"Javascript Utilities",id:"javascript-utilities",level:2},{value:"Scheduler",id:"scheduler",level:2},{value:"Timer",id:"timer",level:2},{value:"Starting",id:"starting",level:3},{value:"Stopping",id:"stopping",level:3},{value:"Chart auto update",id:"chart-auto-update",level:3},{value:"Window",id:"window",level:2},{value:"Console",id:"console",level:2},{value:"JSON",id:"json",level:2},{value:"Regular expressions",id:"regular-expressions",level:2}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"javascript-utilities"},"Javascript Utilities"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," provides out of the box some utilities that you can use in your code."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The javascript utilities can be used even if the ",(0,n.kt)("a",{parentName:"p",href:"../getting-started/GettingStarted#embedded-resources"},(0,n.kt)("strong",{parentName:"a"},"Charba.enable"))," or ",(0,n.kt)("a",{parentName:"p",href:"../getting-started/GettingStarted#deferred-resources"},(0,n.kt)("strong",{parentName:"a"},"DeferredCharba.enable"))," are not called because they don't depend on CHART.JS.")),(0,n.kt)("h2",{id:"scheduler"},"Scheduler"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/utils/CScheduler.html"},"scheduler")," utility executes a particular block of code once after a specified time has elapsed. "),(0,n.kt)("p",null,"The logic that you pass to the ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/utils/CScheduler.html"},"scheduler")," will run at some point in the future. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates and submits my task\n// without any delay\nCScheduler.get().submit(new Runnable(){\n\n    @Override\n    public void run(){\n        // my logic\n    }\n    \n});\n// creates and submits my task\n// waiting for 5 seconds\nCScheduler.get().submit(new Runnable(){\n\n    @Override\n    public void run(){\n        // my logic\n    }\n    \n}, 5000);\n")),(0,n.kt)("h2",{id:"timer"},"Timer"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/utils/CTimer.html"},"timer")," utility executes a particular block of code repeatedly at no less than the number of milliseconds."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a timer with user logic\n// and an interval of 5 seconds.\n// the logic will run repeatedly\n// every 5 seconds\nCTimer timer = new CTimer(new Runnable(){\n\n    @Override\n    public void run(){\n        // my logic\n    }\n    \n}, 5000);\n// starts timer\ntimer.start();\n")),(0,n.kt)("h3",{id:"starting"},"Starting"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/utils/CTimer.html"},"timer")," will execute a particular block of code repeatedly after it has been started."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// starts timer\ntimer.start();\n")),(0,n.kt)("p",null,"You can change the interval of an existing ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/utils/CTimer.html"},"timer"),", restarting it with new interval to use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// starts timer\n// changing the interval \n// setting to 10 seconds\ntimer.start(10000);\n")),(0,n.kt)("h3",{id:"stopping"},"Stopping"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/utils/CTimer.html"},"timer")," can be stopped when you want to stop temporarily the execution or if it's not needed anymore."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// stops timer\ntimer.stop();\n")),(0,n.kt)("h3",{id:"chart-auto-update"},"Chart auto update"),(0,n.kt)("p",null,"In order to keep the chart up to date, you sometimes want to perform an update periodically. You might want to run a poll to the server for new data and update the chart."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/AbstractChart.html"},"chart")," provides a method to configure the timer for the chart instance."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/utils/CTimer.html"},"timer")," will start executing the block of code repeatedly after the chart drawing and will e stopped when chart will be destroyed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nLineChart chart = new LineChart();\n// configures the timer\n// to execute my code every 10 seconds \nchart.createAndSetTimer(new ChartTimerTask(){\n\n    /**\n     * Executes the task repeatedly, internally by the chart instance. \n     * \n     * @param chart chart instance\n     */\n    @Override\n    public void execute(IsChart chart){\n        // retrieves data from host\n        // adds new data to chart\n        // updates chart\n        chart.update();\n    }\n\n}, 10000);\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/AbstractChart.html"},"chart")," needs a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/ChartTimerTask.html"},"specific task interface")," to apply the logic."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/AbstractChart.html"},"chart")," provides the access in order to stop and start the ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/utils/CTimer.html"},"timer")," when you need."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nLineChart chart = new LineChart();\n// gets timer\nCTimer timer = chart.getTimer();\n// checks if consistent\n// because it could be null\nif (timer != null){\n    // stops the timer\n    timer.stop();\n}\n")),(0,n.kt)("h2",{id:"window"},"Window"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," provides a JavaScript ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/utils/Window.html"},"window wrapper"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window"},"JavaScript Window")," is a global variable, representing the window in which the script is running."),(0,n.kt)("p",null,"Some methods are mapped in order to be executed in your GWT or J2CL project."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// gets device pixel ratio\ndouble devicePixelRatio = Window.getDevicePixelRatio();\n")),(0,n.kt)("h2",{id:"console"},"Console"),(0,n.kt)("p",null,"One of the method of ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window"},"Window")," object, returns the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/console"},"console"),". "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," provides the ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/utils/Console.html"},"console")," object as shortcut to that window service."),(0,n.kt)("p",null,"The console provides access to the browser's debugging console. The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// emits the log string \nConsole.log("This is my log");\n// emits the javascript objects\nConsole.log(object1, object2, object3);\n')),(0,n.kt)("h2",{id:"json"},"JSON"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"},"JSON")," object contains methods for converting objects to JSON and JSON string to objects."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," provides an ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/utils/JSON.html"},"implementation")," with the methods and capabilities to use in your GWT or J2CL project."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// gets and logs the object in JSON format\nConsole.log(JSON.stringify(object));\n// gets and logs the object in JSON format\n// with 3 spaces for indentation\nConsole.log(JSON.stringify(object, 3));\n// creates and logs an object parsed by \n// a text in JSON format\nConsole.log(JSON.parse("{ test: 8, doc: true}", 3));\n')),(0,n.kt)("h2",{id:"regular-expressions"},"Regular expressions"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"},"Regular expressions")," are patterns used to match character combinations in strings. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," provides an ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/utils/RegExp.html"},"implementation")," with a subset of methods and capabilities to use in your GWT or J2CL project."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// gets a string to check\nString id = "myId"\n// creates a regular expression\nRegExp regExp = new RegExp("^[a-zA-Z0-9_-]+$");\n// executes the regular expression\nRegExpResult regExpResult = regExp.exec(id);\n// checks if regular expression matches\nif (regExpResult != null){\n    // regular expression matches!\n} else {\n    // regular expression does NOT match!\n}\n')))}h.isMDXComponent=!0}}]);