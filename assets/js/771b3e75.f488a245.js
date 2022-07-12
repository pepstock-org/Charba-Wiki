"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[52012],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),s=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),g=s(r),h=n,u=g["".concat(l,".").concat(h)]||g[h]||c[h]||o;return r?a.createElement(u,i(i({ref:e},d),{},{components:r})):a.createElement(u,i({ref:e},d))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},42250:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(44996);const i={id:"Gradient",title:"Gradient plugin",hide_title:!0,sidebar_label:"Gradient"},p=void 0,l={unversionedId:"extensions/Gradient",id:"version-5.2/extensions/Gradient",title:"Gradient plugin",description:"",source:"@site/versioned_docs/version-5.2/extensions/Gradient.md",sourceDirName:"extensions",slug:"/extensions/Gradient",permalink:"/Charba-Wiki/docs/5.2/extensions/Gradient",draft:!1,tags:[],version:"5.2",frontMatter:{id:"Gradient",title:"Gradient plugin",hide_title:!0,sidebar_label:"Gradient"},sidebar:"docs",previous:{title:"DataLabels",permalink:"/Charba-Wiki/docs/5.2/extensions/DataLabels"},next:{title:"Labels",permalink:"/Charba-Wiki/docs/5.2/extensions/Labels"}},s={},d=[{value:"Gradient plugin",id:"gradient-plugin",level:2},{value:"Activation",id:"activation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Property options",id:"property-options",level:2},{value:"Colors",id:"colors",level:2}],c={toc:d};function g(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"gradient-plugin"},"Gradient plugin"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kurkle/chartjs-plugin-gradient"},"Gradient")," which is a light weight plugin to apply gradients to the datasets by data values."),(0,n.kt)("img",{src:(0,o.Z)("/img/gradient.png")}),(0,n.kt)("h2",{id:"activation"},"Activation"),(0,n.kt)("p",null,"The gradient plugin is injected directly in the document."),(0,n.kt)("p",null,"The plugin ID is a constant everywhere available, ",(0,n.kt)("inlineCode",{parentName:"p"},"GradientPlugin.ID"),", in ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/gradient/GradientPlugin.html"},"GradientPlugin")," entry point."),(0,n.kt)("p",null,"This plugin registers itself globally, meaning that once injected, all charts will enable zooming. In case you want it enabled only for a few charts, you can enable it as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// enabling the plugin without any parameter\n// the plugin is NOT registered to all charts\n// --------------------------------------\nGradientPlugin.enable();\n\n// --------------------------------------\n// enabling the plugin with `true` parameter\n// the plugin is registered to all charts\n// --------------------------------------\nGradientPlugin.enable(true);\n")),(0,n.kt)("p",null,"To activate the plugin in a specific chart, it's enough to provide the configuration options (see ",(0,n.kt)("a",{parentName:"p",href:"#configuration"},"below"),") to the datasets, which should be rendered by the gradient, or enabling it by:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// ENABLING the plugin to a chart instance \n// storing a plugin options \n// --------------------------------------\n// creates chart\nLineChart chart = new LineChart();\n// creates dataset\nLineDataset dataset = chart.newDataset();\n// creates a plugin options\nGradientOptions options = new GradientOptions();\n// gets background color property options\nPropertyOptions propOptions = options.getBackgroundColor();\n// sets axis kind to apply gradient\npropOptions.setAxis(AxisKind.Y);\n// gets colors \nColors stopColors = propOptions.getColors();\n// sets color at different data value\nstopColors.setColor(0, HtmlColor.GREEN);\nstopColors.setColor(50, HtmlColor.YELLOW);\nstopColors.setColor(100, HtmlColor.RED);\n// sets plugin options to dataset\ndataset.setOptions(options);\n")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"The plugin options can be changed at only at dataset level by ",(0,n.kt)("inlineCode",{parentName:"p"},"dataset.setOptions")," method."),(0,n.kt)("p",null,"The configuration class ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/gradient/GradientOptions.html"},"GradientOptions")," contains all properties needed to configure the plugin."),(0,n.kt)("p",null,"The complete options are described by following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/gradient/PropertyOptions.html"},"PropertyOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets the gradient as background color of the dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/gradient/PropertyOptions.html"},"PropertyOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets the gradient as border color of the dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/gradient/PropertyOptions.html"},"PropertyOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets the gradient as background color of the dataset, when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/gradient/PropertyOptions.html"},"PropertyOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets the gradient as border color of the dataset, when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pointBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/gradient/PropertyOptions.html"},"PropertyOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets the gradient as background color of the points of the dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pointBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/gradient/PropertyOptions.html"},"PropertyOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets the gradient as border color of the points of the dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pointHoverBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/gradient/PropertyOptions.html"},"PropertyOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets the gradient as background color of the points of the dataset, when hovered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pointHoverBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/gradient/PropertyOptions.html"},"PropertyOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets the gradient as border color of the points of the dataset, when hovered")))),(0,n.kt)("h2",{id:"property-options"},"Property options"),(0,n.kt)("p",null,"The property option enables the configuration of the gradient, like the orientation, based on the axis related to the dataset, and the colors for a specific dataset option. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nGradientOptions options = new GradientOptions();\n// gets background color property options\nPropertyOptions propOptions = options.getBackgroundColor();\n// sets axis kind to apply gradient\npropOptions.setAxis(AxisKind.Y);\n")),(0,n.kt)("p",null,"The complete options are described by following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"axis"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/enums/AxisKind.html"},"AxisKind")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The axis to use for applying the gradient to the dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"colors"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/gradient/Colors.html"},"Colors")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets the colors to composed the gradient")))),(0,n.kt)("img",{src:(0,o.Z)("/img/rGradient.png")}),(0,n.kt)("h2",{id:"colors"},"Colors"),(0,n.kt)("p",null,"The colors option enables to adds color stop, defined by a data value and a color, to a given canvas gradient. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nGradientOptions options = new GradientOptions();\n// gets background color property options\nPropertyOptions propOptions = options.getBackgroundColor();\n// sets axis kind to apply gradient\npropOptions.setAxis(AxisKind.Y);\n// gets colors \nColors stopColors = propOptions.getColors();\n// sets color at different data value\nstopColors.setColor(0, HtmlColor.GREEN);\nstopColors.setColor(50, HtmlColor.YELLOW);\nstopColors.setColor(100, HtmlColor.RED);\n")),(0,n.kt)("p",null,"The colors stop data value can be a String, double or a date, related to the axis defined to be used for gradient creation."))}g.isMDXComponent=!0}}]);