(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(8),r=(n(0),n(209)),o=n(210),c={id:"Utilities",title:"Utilities",hide_title:!0,sidebar_label:"Utilities"},s={unversionedId:"Utilities",id:"version-3.3/Utilities",isDocsHomePage:!1,title:"Utilities",description:"Utilities",source:"@site/versioned_docs/version-3.3/Utilities.md",sourceDirName:".",slug:"/Utilities",permalink:"/docs/3.3/Utilities",version:"3.3",sidebar_label:"Utilities",frontMatter:{id:"Utilities",title:"Utilities",hide_title:!0,sidebar_label:"Utilities"},sidebar:"version-3.3/docs",previous:{title:"Annotation plugin",permalink:"/docs/3.3/Annotation"}},l=[{value:"Utilities",id:"utilities",children:[]},{value:"HTML annotation Builder",id:"html-annotation-builder",children:[]},{value:"Window",id:"window",children:[]},{value:"Console",id:"console",children:[]},{value:"JSON",id:"json",children:[]},{value:"RegExp",id:"regexp",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"utilities"},"Utilities"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Charba")," provides out of the box some utilities that you can use in your code."),Object(r.b)("h2",{id:"html-annotation-builder"},"HTML annotation Builder"),Object(r.b)("p",null,"One of most frequent requests is how to add HTML code into canvas. This enables the user to add easily information into chart, leveraging on HTML code."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/AnnotationBuilder.html"},"HTML annotation Builder")," provides methods to create images to add to canvas where the chart is drawing. It is leveraging on ",Object(r.b)("inlineCode",{parentName:"p"},"SVG+XML")," and ",Object(r.b)("inlineCode",{parentName:"p"},"<foreignObject>")," to create an image that you can add to the chart by a plugin, controller or with whatever else method."),Object(r.b)("p",null,"Leveraging on ",Object(r.b)("inlineCode",{parentName:"p"},"<foreignObject>"),", check ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject#Browser_compatibility"},"here")," the compatibility matrix on browsers."),Object(r.b)("p",null,"You can pass the HTML as string or by an ",Object(r.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/BaseHtmlElement.html"},"element"),". If you use a string, the string must be XML well-formed, following the ",Object(r.b)("a",{parentName:"p",href:"http://www.w3.org/1999/xhtml"},"xHTML specification")," otherwise an exception will occurs."),Object(r.b)("img",{src:Object(o.a)("/img/htmlAnnotation.png")}),Object(r.b)("p",null,"Here is a sample how to use it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'// creates an image with the text in bold\nImg image = AnnotationBuilder.build("<b>This is an annotation</b>", \n    chart.getCanvas().getOffsetWidth(), \n    100);\n// uses the context 2d of canvas to draw the image at point 0,0                 \nctx.drawImage(img, 0, 0);\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"PAY ATTENTION")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This capability DOES NOT work on IE11 and on MS Edge."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"PAY ATTENTION")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Drawing the image on canvas, you could get a ",Object(r.b)("inlineCode",{parentName:"p"},"NS_ERROR_NOT_AVAILABLE")," javascript error which means that if even the content is well-formed, it contains some invalid characters, not allowed into xHTML (for instance ",Object(r.b)("inlineCode",{parentName:"p"},"#")," char)."))),Object(r.b)("h2",{id:"window"},"Window"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Charba")," provides a JavaScript ",Object(r.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/Window.html"},"window wrapper"),"."),Object(r.b)("p",null,"Window is a global variable, representing the window in which the script is running."),Object(r.b)("p",null,"Some methods are mapped in order to be executed inside your GWT or J2CL project."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"// gets device pixel ratio\ndouble devicePixelRatio = Window.getDevicePixelRatio();\n")),Object(r.b)("h2",{id:"console"},"Console"),Object(r.b)("p",null,"One of the method of Window object, returns the console."),Object(r.b)("p",null,"The console provides access to the browser's debugging console. The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/Console.html"},"here")," the complete list of methods."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'// emits the log string \nWindow.getConsole().log("This is my log");\n// emits the javascript objects\nWindow.getConsole().log(object1, object2, object3);\n')),Object(r.b)("h2",{id:"json"},"JSON"),Object(r.b)("p",null,"The JSON object contains methods for converting values to JSON."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/JSON.html"},"here")," the complete list of methods."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"// gets and logs the object in JSON format\nConsole.log(JSON.stringify(object));\n// gets and logs the object in JSON format\n// with 3 spaces for indentation\nConsole.log(JSON.stringify(object, 3));\n")),Object(r.b)("h2",{id:"regexp"},"RegExp"),Object(r.b)("p",null,"The RegExp object is used for matching text with a pattern."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/RegExp.html"},"here")," the complete list of methods."))}p.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=i,h=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},210:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(16),a=n(211);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,c=void 0!==o&&o,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+b:b}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},211:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);