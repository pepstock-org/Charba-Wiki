"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[40334],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),h=r,m=g["".concat(l,".").concat(h)]||g[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},27535:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return g}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(44996),s=["components"],l={id:"ImportPlugins",title:"Importing plugins",hide_title:!0,sidebar_label:"Importing Chart.JS plugins"},p=void 0,c={unversionedId:"plugins/ImportPlugins",id:"version-4.2/plugins/ImportPlugins",title:"Importing plugins",description:"",source:"@site/versioned_docs/version-4.2/plugins/Import.md",sourceDirName:"plugins",slug:"/plugins/ImportPlugins",permalink:"/Charba-Wiki/docs/4.2/plugins/ImportPlugins",draft:!1,tags:[],version:"4.2",frontMatter:{id:"ImportPlugins",title:"Importing plugins",hide_title:!0,sidebar_label:"Importing Chart.JS plugins"},sidebar:"version-4.2/docs",previous:{title:"HTML legend",permalink:"/Charba-Wiki/docs/4.2/plugins/PluginHTMLLegend"},next:{title:"Controllers",permalink:"/Charba-Wiki/docs/4.2/Controllers"}},u={},g=[{value:"Importing existing Chart.JS plugins",id:"importing-existing-chartjs-plugins",level:2}],h={toc:g};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"importing-existing-chartjs-plugins"},"Importing existing Chart.JS plugins"),(0,o.kt)("p",null,"Some plugins, written in javascript, are already developed and available for ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provides you the way to import and leverage on these plugins."),(0,o.kt)("p",null,"The following list of steps is related to GWT projects. For J2CL applications, you must implement an ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/resources/AbstractInjectableResource.html"},"AbstractInjectableResource")," in order to provide the javascript content as strings."),(0,o.kt)("p",null,"The steps are the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"take the javascript plugin and store in your project in a resource folder "),(0,o.kt)("li",{parentName:"ol"},"create a GWT ",(0,o.kt)("a",{parentName:"li",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html"},"ClientBundle")," to get the javascript plugin as GWT ",(0,o.kt)("a",{parentName:"li",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource"},"TextResource")),(0,o.kt)("li",{parentName:"ol"},"use ",(0,o.kt)("strong",{parentName:"li"},"Charba")," ",(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/Injector.html"},"Injector")," to inject the plugin. It's ",(0,o.kt)("strong",{parentName:"li"},"IMPORTANT")," to inject ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," before the plugin because usually the plugin registers itself and therefore ",(0,o.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," must be available"),(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/plugins/AbstractPluginOptions.html"},"plugin options container"),", with the properties to configure the plugin (see ",(0,o.kt)("a",{parentName:"li",href:"./#options"},"above"),")"),(0,o.kt)("li",{parentName:"ol"},"Create the view with a chart with the statement to activate the plugin")),(0,o.kt)("p",null,"Here is an example, how to include ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/y-takey/chartjs-plugin-stacked100"},"Stacked100")," plugin, The original code of the plugin is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," adapted to work with ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," version 3.x, the changed source of the plugin has been taken from ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/pepstock-org/Charba-Showcase/master/src/org/pepstock/charba/showcase/client/resources/js/chartjs-plugin-stacked100.js"},"here"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get ",(0,o.kt)("inlineCode",{parentName:"li"},"stacked100")," plugin from ",(0,o.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/pepstock-org/Charba-Showcase/master/src/org/pepstock/charba/showcase/client/resources/js/chartjs-plugin-stacked100.js"},"GitHub")," and store the javascript in your project, in this example we are using the ",(0,o.kt)("strong",{parentName:"li"},"Charba")," showcase paths:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"/src/org/pepstock/charba/showcase/client/resources/js/chartjs-plugin-stacked100.js"))),(0,o.kt)("li",{parentName:"ul"},"Create a client bundle (called in this example ",(0,o.kt)("inlineCode",{parentName:"li"},"org.pepstock.charba.showcase.client.resources.MyResources.java"),") with the plugin reference:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package org.pepstock.charba.showcase.client.resources;\n\nimport com.google.gwt.core.client.GWT;\nimport com.google.gwt.resources.client.ClientBundle;\nimport com.google.gwt.resources.client.TextResource;\n\npublic interface MyResources extends ClientBundle {\n    \n    public static final MyResources INSTANCE = GWT.create(MyResources.class);\n\n    @Source("js/chartjs-plugin-stacked100.js")\n    TextResource chartJsStacked100Source();\n\n}    \n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inject the javascript resource in your main page or before using the plugin:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// gets text resource with plugin code\nTextResource pluginCode = MyResources.INSTANCE.chartJsStacked100Source();\n// create an injectable resource by text resource of plugin code\nInjectableTextResource plugin = new InjectableTextResource(pluginCode);\n// inject plugin in DOM document\nInjector.ensureInjected(MyResources.INSTANCE.chartJsStacked100Source());\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a plugin options object to store plugin configuration (in this case an inner class):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'private class Stacked100Options extends AbstractPluginOptions {\n\n    private Key enableKey = Key.create("enable");\n\n    Stacked100Options(){\n        super("stacked100");\n    }\n\n    void setEnable(boolean enable){\n        setValue(enableKey, enable);\n    }\n} \n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a plugin options object to your chart instance:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Stacked100Options options = new Stacked100Options();\noptions.setEnable(true);\noptions.store(chart);\n")),(0,o.kt)("p",null,"And now your chart instance is leveraging on ",(0,o.kt)("inlineCode",{parentName:"p"},"stacked100")," plugin."),(0,o.kt)("img",{src:(0,i.Z)("/img/importedPlugin.png")}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Usually all ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," are registering themselves automatically, at global level.",(0,o.kt)("br",null),"If the plugin does not register itself, you must register on the chart instances and the above procedure will be more complex."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"PAY ATTENTION")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Unfortunately some ",(0,o.kt)("a",{parentName:"p",href:"https://www.chartjs.org/docs/3.5.1/developers/plugins.html#plugin-options"},"Chart.JS")," plugins implementations are not respecting the described standard way to store the plugin options."),(0,o.kt)("p",{parentName:"div"},"Therefore ",(0,o.kt)("strong",{parentName:"p"},"Charba")," provides a method to add an additional configuration to whatever chart configuration."),(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"merge")," method enables to add the plugin configuration in any other configuration object of ",(0,o.kt)("strong",{parentName:"p"},"Charba"),". "))))}m.isMDXComponent=!0}}]);