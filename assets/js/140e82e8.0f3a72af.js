(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{209:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,h=u["".concat(o,".").concat(g)]||u[g]||b[g]||i;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},210:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(16),a=n(211);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},211:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(209)),o=(n(210),{id:"ImportPlugins",title:"Importing plugins",hide_title:!0,sidebar_label:"Importing Chart.JS plugins"}),c={unversionedId:"plugins/ImportPlugins",id:"plugins/ImportPlugins",isDocsHomePage:!1,title:"Importing plugins",description:"Importing existing Chart.JS plugins",source:"@site/docs/plugins/Import.md",sourceDirName:"plugins",slug:"/plugins/ImportPlugins",permalink:"/Charba-Wiki/docs/plugins/ImportPlugins",version:"current",sidebar_label:"Importing Chart.JS plugins",frontMatter:{id:"ImportPlugins",title:"Importing plugins",hide_title:!0,sidebar_label:"Importing Chart.JS plugins"},sidebar:"docs",previous:{title:"HTML legend plugin",permalink:"/Charba-Wiki/docs/plugins/PluginHTMLLegend"},next:{title:"Controllers",permalink:"/Charba-Wiki/docs/Controllers"}},s=[{value:"Importing existing Chart.JS plugins",id:"importing-existing-chartjs-plugins",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"importing-existing-chartjs-plugins"},"Importing existing Chart.JS plugins"),Object(i.b)("p",null,"Some plugins, written in javascript, are already developed and available for ",Object(i.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Charba")," provides you the way to import and leverage on these plugins."),Object(i.b)("p",null,"The following list of steps is related to GWT projects. For J2CL applications, you must implement an ",Object(i.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/resources/AbstractInjectableResource.html"},"AbstractInjectableResource")," in order to provide the javascript content as strings."),Object(i.b)("p",null,"The steps are the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"take the javascript plugin and store in your project in a resource folder "),Object(i.b)("li",{parentName:"ol"},"create a GWT ",Object(i.b)("a",{parentName:"li",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html"},"ClientBundle")," to get the javascript plugin as GWT ",Object(i.b)("a",{parentName:"li",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource"},"TextResource")),Object(i.b)("li",{parentName:"ol"},"use ",Object(i.b)("strong",{parentName:"li"},"Charba")," ",Object(i.b)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/Injector.html"},"Injector")," to inject the plugin. It's ",Object(i.b)("strong",{parentName:"li"},"IMPORTANT")," to inject ",Object(i.b)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," before the plugin because usually the plugin registers itself and therefore ",Object(i.b)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," must be available"),Object(i.b)("li",{parentName:"ol"},"Create a ",Object(i.b)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/plugins/AbstractPluginOptions.html"},"plugin options container"),", with the properties to configure the plugin (see ",Object(i.b)("a",{parentName:"li",href:"Plugins#options"},"above"),")"),Object(i.b)("li",{parentName:"ol"},"Create the view with a chart with the statement to activate the plugin")),Object(i.b)("p",null,"Here is an example, how to include ",Object(i.b)("a",{parentName:"p",href:"https://github.com/y-takey/chartjs-plugin-stacked100"},"Stacked100")," plugin, The original code of the plugin is ",Object(i.b)("strong",{parentName:"p"},"NOT")," adapted to work with ",Object(i.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," version 3.x, the changed source of the plugin has been taken from ",Object(i.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/pepstock-org/Charba-Showcase/master/src/org/pepstock/charba/showcase/client/resources/js/chartjs-plugin-stacked100.js"},"here"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Get ",Object(i.b)("inlineCode",{parentName:"li"},"stacked100")," plugin from ",Object(i.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/pepstock-org/Charba-Showcase/master/src/org/pepstock/charba/showcase/client/resources/js/chartjs-plugin-stacked100.js"},"GitHub")," and store the javascript in your project, in this example we are using the ",Object(i.b)("strong",{parentName:"li"},"Charba")," showcase paths:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"/src/org/pepstock/charba/showcase/client/resources/js/chartjs-plugin-stacked100.js"))),Object(i.b)("li",{parentName:"ul"},"Create a client bundle (called in this example ",Object(i.b)("inlineCode",{parentName:"li"},"org.pepstock.charba.showcase.client.resources.MyResources.java"),") with the plugin reference:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'package org.pepstock.charba.showcase.client.resources;\n\nimport com.google.gwt.core.client.GWT;\nimport com.google.gwt.resources.client.ClientBundle;\nimport com.google.gwt.resources.client.TextResource;\n\npublic interface MyResources extends ClientBundle {\n    \n    public static final MyResources INSTANCE = GWT.create(MyResources.class);\n\n    @Source("js/chartjs-plugin-stacked100.js")\n    TextResource chartJsStacked100Source();\n\n}    \n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Inject the javascript resource in your main page or before using the plugin:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// gets text resource with plugin code\nTextResource pluginCode = MyResources.INSTANCE.chartJsStacked100Source();\n// create an injectable resource by text resource of plugin code\nInjectableTextResource plugin = new InjectableTextResource(pluginCode);\n// inject plugin in DOM document\nInjector.ensureInjected(MyResources.INSTANCE.chartJsStacked100Source());\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a plugin options object to store plugin configuration (in this case an inner class):")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'private class Stacked100Options extends AbstractPluginOptions {\n\n    private Key enableKey = Key.create("enable");\n\n    Stacked100Options(){\n        super("stacked100");\n    }\n\n    void setEnable(boolean enable){\n        setValue(enableKey, enable);\n    }\n} \n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add a plugin options object to your chart instance:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"Stacked100Options options = new Stacked100Options();\noptions.setEnable(true);\noptions.store(chart);\n")),Object(i.b)("p",null,"And now your chart instance is leveraging on ",Object(i.b)("inlineCode",{parentName:"p"},"stacked100")," plugin."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Usually all ",Object(i.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," are registering themselves automatically, at global level.",Object(i.b)("br",null),"If the plugin does not register itself, you must register on the chart instances and the above procedure will be more complex."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"PAY ATTENTION")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Unfortunately some ",Object(i.b)("a",{parentName:"p",href:"https://www.chartjs.org/docs/master/developers/plugins#plugin-options"},"Chart.JS")," plugins implementations are not respecting the described standard way to store the plugin options."),Object(i.b)("p",{parentName:"div"},"Therefore ",Object(i.b)("strong",{parentName:"p"},"Charba")," provides a method to add an additional configuration to whatever chart configuration."),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"merge")," method enables to add the plugin configuration in any other configuration object of ",Object(i.b)("strong",{parentName:"p"},"Charba"),". "))))}p.isMDXComponent=!0}}]);