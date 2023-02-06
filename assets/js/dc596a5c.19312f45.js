"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[40334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||g[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(44996);const i={id:"ImportPlugins",title:"Importing plugins",hide_title:!0,sidebar_label:"Importing Chart.JS plugins"},s=void 0,l={unversionedId:"plugins/ImportPlugins",id:"version-4.2/plugins/ImportPlugins",title:"Importing plugins",description:"Importing existing Chart.JS plugins",source:"@site/versioned_docs/version-4.2/plugins/Import.md",sourceDirName:"plugins",slug:"/plugins/ImportPlugins",permalink:"/Charba-Wiki/docs/4.2/plugins/ImportPlugins",draft:!1,tags:[],version:"4.2",frontMatter:{id:"ImportPlugins",title:"Importing plugins",hide_title:!0,sidebar_label:"Importing Chart.JS plugins"},sidebar:"version-4.2/docs",previous:{title:"HTML legend",permalink:"/Charba-Wiki/docs/4.2/plugins/PluginHTMLLegend"},next:{title:"Controllers",permalink:"/Charba-Wiki/docs/4.2/Controllers"}},p={},c=[{value:"Importing existing Chart.JS plugins",id:"importing-existing-chartjs-plugins",level:2}],u={toc:c},g="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"importing-existing-chartjs-plugins"},"Importing existing Chart.JS plugins"),(0,a.kt)("p",null,"Some plugins, written in javascript, are already developed and available for ",(0,a.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," provides you the way to import and leverage on these plugins."),(0,a.kt)("p",null,"The following list of steps is related to GWT projects. For J2CL applications, you must implement an ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/resources/AbstractInjectableResource.html"},"AbstractInjectableResource")," in order to provide the javascript content as strings."),(0,a.kt)("p",null,"The steps are the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"take the javascript plugin and store in your project in a resource folder "),(0,a.kt)("li",{parentName:"ol"},"create a GWT ",(0,a.kt)("a",{parentName:"li",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html"},"ClientBundle")," to get the javascript plugin as GWT ",(0,a.kt)("a",{parentName:"li",href:"http://www.gwtproject.org/doc/latest/DevGuideClientBundle.html#TextResource"},"TextResource")),(0,a.kt)("li",{parentName:"ol"},"use ",(0,a.kt)("strong",{parentName:"li"},"Charba")," ",(0,a.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/Injector.html"},"Injector")," to inject the plugin. It's ",(0,a.kt)("strong",{parentName:"li"},"IMPORTANT")," to inject ",(0,a.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," before the plugin because usually the plugin registers itself and therefore ",(0,a.kt)("a",{parentName:"li",href:"http://www.chartjs.org/"},"Chart.JS")," must be available"),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/plugins/AbstractPluginOptions.html"},"plugin options container"),", with the properties to configure the plugin (see ",(0,a.kt)("a",{parentName:"li",href:"./#options"},"above"),")"),(0,a.kt)("li",{parentName:"ol"},"Create the view with a chart with the statement to activate the plugin")),(0,a.kt)("p",null,"Here is an example, how to include ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/y-takey/chartjs-plugin-stacked100"},"Stacked100")," plugin, The original code of the plugin is ",(0,a.kt)("strong",{parentName:"p"},"NOT")," adapted to work with ",(0,a.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," version 3.x, the changed source of the plugin has been taken from ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/pepstock-org/Charba-Showcase/master/src/org/pepstock/charba/showcase/client/resources/js/chartjs-plugin-stacked100.js"},"here"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get ",(0,a.kt)("inlineCode",{parentName:"li"},"stacked100")," plugin from ",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/pepstock-org/Charba-Showcase/master/src/org/pepstock/charba/showcase/client/resources/js/chartjs-plugin-stacked100.js"},"GitHub")," and store the javascript in your project, in this example we are using the ",(0,a.kt)("strong",{parentName:"li"},"Charba")," showcase paths:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/src/org/pepstock/charba/showcase/client/resources/js/chartjs-plugin-stacked100.js"))),(0,a.kt)("li",{parentName:"ul"},"Create a client bundle (called in this example ",(0,a.kt)("inlineCode",{parentName:"li"},"org.pepstock.charba.showcase.client.resources.MyResources.java"),") with the plugin reference:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.pepstock.charba.showcase.client.resources;\n\nimport com.google.gwt.core.client.GWT;\nimport com.google.gwt.resources.client.ClientBundle;\nimport com.google.gwt.resources.client.TextResource;\n\npublic interface MyResources extends ClientBundle {\n    \n    public static final MyResources INSTANCE = GWT.create(MyResources.class);\n\n    @Source("js/chartjs-plugin-stacked100.js")\n    TextResource chartJsStacked100Source();\n\n}    \n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inject the javascript resource in your main page or before using the plugin:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// gets text resource with plugin code\nTextResource pluginCode = MyResources.INSTANCE.chartJsStacked100Source();\n// create an injectable resource by text resource of plugin code\nInjectableTextResource plugin = new InjectableTextResource(pluginCode);\n// inject plugin in DOM document\nInjector.ensureInjected(MyResources.INSTANCE.chartJsStacked100Source());\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a plugin options object to store plugin configuration (in this case an inner class):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private class Stacked100Options extends AbstractPluginOptions {\n\n    private Key enableKey = Key.create("enable");\n\n    Stacked100Options(){\n        super("stacked100");\n    }\n\n    void setEnable(boolean enable){\n        setValue(enableKey, enable);\n    }\n} \n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a plugin options object to your chart instance:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Stacked100Options options = new Stacked100Options();\noptions.setEnable(true);\noptions.store(chart);\n")),(0,a.kt)("p",null,"And now your chart instance is leveraging on ",(0,a.kt)("inlineCode",{parentName:"p"},"stacked100")," plugin."),(0,a.kt)("img",{src:(0,o.Z)("/img/importedPlugin.png")}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Usually all ",(0,a.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," are registering themselves automatically, at global level.",(0,a.kt)("br",null),"If the plugin does not register itself, you must register on the chart instances and the above procedure will be more complex.")),(0,a.kt)("admonition",{title:"PAY ATTENTION",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Unfortunately some ",(0,a.kt)("a",{parentName:"p",href:"https://www.chartjs.org/docs/3.5.1/developers/plugins.html#plugin-options"},"Chart.JS")," plugins implementations are not respecting the described standard way to store the plugin options."),(0,a.kt)("p",{parentName:"admonition"},"Therefore ",(0,a.kt)("strong",{parentName:"p"},"Charba")," provides a method to add an additional configuration to whatever chart configuration."),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"merge")," method enables to add the plugin configuration in any other configuration object of ",(0,a.kt)("strong",{parentName:"p"},"Charba"),". ")))}h.isMDXComponent=!0}}]);