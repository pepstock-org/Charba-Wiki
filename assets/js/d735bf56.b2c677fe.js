"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[5330],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2373:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return h},default:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=a(44996),l=["components"],s={id:"Utilities",title:"Utilities",hide_title:!0,sidebar_label:"Utilities"},c=void 0,p={unversionedId:"Utilities",id:"version-4.0/Utilities",title:"Utilities",description:"Utilities",source:"@site/versioned_docs/version-4.0/Utilities.md",sourceDirName:".",slug:"/Utilities",permalink:"/Charba-Wiki/docs/4.0/Utilities",tags:[],version:"4.0",frontMatter:{id:"Utilities",title:"Utilities",hide_title:!0,sidebar_label:"Utilities"},sidebar:"version-4.0/docs",previous:{title:"Google Chart",permalink:"/Charba-Wiki/docs/4.0/coloring/tables/GoogleChartColors"}},h=[{value:"Utilities",id:"utilities",children:[],level:2},{value:"HTML annotation Builder",id:"html-annotation-builder",children:[],level:2},{value:"Scheduler",id:"scheduler",children:[],level:2},{value:"Timer",id:"timer",children:[{value:"Starting",id:"starting",children:[],level:3},{value:"Stopping",id:"stopping",children:[],level:3},{value:"Chart auto update",id:"chart-auto-update",children:[],level:3}],level:2},{value:"Window",id:"window",children:[],level:2},{value:"Console",id:"console",children:[],level:2},{value:"JSON",id:"json",children:[],level:2},{value:"Regular expressions",id:"regular-expressions",children:[],level:2}],u={toc:h};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"utilities"},"Utilities"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," provides out of the box some utilities that you can use in your code."),(0,i.kt)("h2",{id:"html-annotation-builder"},"HTML annotation Builder"),(0,i.kt)("p",null,"One of most frequent requests is how to add HTML code in the canvas. This enables the user to add easily information in the chart, leveraging on HTML code."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/AnnotationBuilder.html"},"HTML annotation Builder")," provides methods to create images to add to canvas where the chart is drawing. It is leveraging on ",(0,i.kt)("inlineCode",{parentName:"p"},"SVG+XML")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<foreignObject>")," to create an image that you can add to the chart by a plugin, controller or with whatever else method."),(0,i.kt)("p",null,"Leveraging on ",(0,i.kt)("inlineCode",{parentName:"p"},"<foreignObject>"),", check ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject#Browser_compatibility"},"here")," the compatibility matrix on browsers."),(0,i.kt)("p",null,"You can pass the HTML as string or by an ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/BaseHtmlElement.html"},"element"),". If you use a string, the string must be XML well-formed, following the ",(0,i.kt)("a",{parentName:"p",href:"http://www.w3.org/1999/xhtml"},"xHTML specification")," otherwise an exception will occurs."),(0,i.kt)("img",{src:(0,o.Z)("/img/htmlAnnotation.png")}),(0,i.kt)("p",null,"Here is a sample how to use it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates an image with the text in bold\nImg image = AnnotationBuilder.build("<b>This is an annotation</b>", \n    chart.getCanvas().getOffsetWidth(), \n    100);\n// uses the context 2d of canvas to draw the image at point 0,0                 \nctx.drawImage(img, 0, 0);\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"PAY ATTENTION")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Drawing the image on canvas, you could get a ",(0,i.kt)("inlineCode",{parentName:"p"},"NS_ERROR_NOT_AVAILABLE")," javascript error which means that if even the content is well-formed, it contains some invalid characters, not allowed in the xHTML (for instance ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," char)."))),(0,i.kt)("h2",{id:"scheduler"},"Scheduler"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/CScheduler.html"},"scheduler")," utility executes a particular block of code once after a specified time has elapsed. "),(0,i.kt)("p",null,"The logic that you pass to the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/CScheduler.html"},"scheduler")," will run at some point in the future. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates and submits my task\n// without any delay\nCScheduler.get().submit(new Runnable(){\n\n    @Override\n    public void run(){\n        // my logic\n    }\n    \n});\n// creates and submits my task\n// waiting for 5 seconds\nCScheduler.get().submit(new Runnable(){\n\n    @Override\n    public void run(){\n        // my logic\n    }\n    \n}, 5000);\n")),(0,i.kt)("h2",{id:"timer"},"Timer"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/CTimer.html"},"timer")," utility executes a particular block of code repeatedly at no less than the number of milliseconds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a timer with user logic\n// and an interval of 5 seconds.\n// the logic will run repeatedly\n// every 5 seconds\nCTimer timer = new CTimer(new Runnable(){\n\n    @Override\n    public void run(){\n        // my logic\n    }\n    \n}, 5000);\n// starts timer\ntimer.start();\n")),(0,i.kt)("h3",{id:"starting"},"Starting"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/CTimer.html"},"timer")," will execute a particular block of code repeatedly after it has been started."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// starts timer\ntimer.start();\n")),(0,i.kt)("p",null,"You can change the interval of an existing ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/CTimer.html"},"timer"),", restarting it with new interval to use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// starts timer\n// changing the interval \n// setting to 10 seconds\ntimer.start(10000);\n")),(0,i.kt)("h3",{id:"stopping"},"Stopping"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/CTimer.html"},"timer")," can be stopped when you want to stop temporarily the execution or if it's not needed anymore."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// stops timer\ntimer.stop();\n")),(0,i.kt)("h3",{id:"chart-auto-update"},"Chart auto update"),(0,i.kt)("p",null,"In order to keep the chart up to date, you sometimes want to perform an update periodically. You might want to run a poll to the server for new data and update the chart."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/AbstractChart.html"},"chart")," provides a method to configure the timer for the chart instance."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/CTimer.html"},"timer")," will start executing the block of code repeatedly after the chart drawing and will e stopped when chart will be destroyed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nLineChart chart = new LineChart();\n// configures the timer\n// to execute my code every 10 seconds \nchart.createAndSetTimer(new ChartTimerTask(){\n\n    /**\n     * Executes the task repeatedly, internally by the chart instance. \n     * \n     * @param chart chart instance\n     */\n    @Override\n    public void execute(IsChart chart){\n        // retrieves data from host\n        // adds new data to chart\n        // updates chart\n        chart.update();\n    }\n\n}, 10000);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/AbstractChart.html"},"chart")," needs a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/ChartTimerTask.html"},"specific task interface")," to apply the logic."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/AbstractChart.html"},"chart")," provides the access in order to stop and start the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/CTimer.html"},"timer")," when you need."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nLineChart chart = new LineChart();\n// gets timer\nCTimer timer = chart.getTimer();\n// checks if consistent\n// because it could be null\nif (timer != null){\n    // stops the timer\n    timer.stop();\n}\n")),(0,i.kt)("h2",{id:"window"},"Window"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," provides a JavaScript ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/Window.html"},"window wrapper"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window"},"JavaScript Window")," is a global variable, representing the window in which the script is running."),(0,i.kt)("p",null,"Some methods are mapped in order to be executed in your GWT or J2CL project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// gets device pixel ratio\ndouble devicePixelRatio = Window.getDevicePixelRatio();\n")),(0,i.kt)("h2",{id:"console"},"Console"),(0,i.kt)("p",null,"One of the method of ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window"},"Window")," object, returns the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/console"},"console"),". "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," provides the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/Console.html"},"console")," object as shortcut to that window service."),(0,i.kt)("p",null,"The console provides access to the browser's debugging console. The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// emits the log string \nConsole.log("This is my log");\n// emits the javascript objects\nConsole.log(object1, object2, object3);\n')),(0,i.kt)("h2",{id:"json"},"JSON"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"},"JSON")," object contains methods for converting objects to JSON."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," provides an ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/JSON.html"},"implementation")," with a subset of methods and capabilities to use in your GWT or J2CL project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// gets and logs the object in JSON format\nConsole.log(JSON.stringify(object));\n// gets and logs the object in JSON format\n// with 3 spaces for indentation\nConsole.log(JSON.stringify(object, 3));\n")),(0,i.kt)("h2",{id:"regular-expressions"},"Regular expressions"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"},"Regular expressions")," are patterns used to match character combinations in strings. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," provides an ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/utils/RegExp.html"},"implementation")," with a subset of methods and capabilities to use in your GWT or J2CL project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// gets a string to check\nString id = "myId"\n// creates a regular expression\nRegExp regExp = new RegExp("^[a-zA-Z0-9_-]+$");\n// executes the regular expression\nRegExpResult regExpResult = regExp.exec(id);\n// checks if regular expression matches\nif (regExpResult != null){\n    // regular expression matches!\n} else {\n    // regular expression does NOT match!\n}\n')))}d.isMDXComponent=!0}}]);