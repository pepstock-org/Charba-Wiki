"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[24070],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>f});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},h="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),h=s(a),g=o,f=h["".concat(p,".").concat(g)]||h[g]||d[g]||r;return a?n.createElement(f,l(l({ref:e},c),{},{components:a})):n.createElement(f,l({ref:e},c))}));function f(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,l=new Array(r);l[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[h]="string"==typeof t?t:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},88974:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={id:"Defaults",title:"Defaults options",hide_title:!0,sidebar_label:"Using defaults"},l=void 0,i={unversionedId:"defaults/Defaults",id:"version-5.6/defaults/Defaults",title:"Defaults options",description:"Using defaults",source:"@site/versioned_docs/version-5.6/defaults/Defaults.md",sourceDirName:"defaults",slug:"/defaults/",permalink:"/Charba-Wiki/docs/5.6/defaults/",draft:!1,tags:[],version:"5.6",frontMatter:{id:"Defaults",title:"Defaults options",hide_title:!0,sidebar_label:"Using defaults"},sidebar:"docs",previous:{title:"Integration",permalink:"/Charba-Wiki/docs/5.6/getting-started/Integration"},next:{title:"Charts",permalink:"/Charba-Wiki/docs/5.6/defaults/DefaultsCharts"}},p={},s=[{value:"Using defaults",id:"using-defaults",level:2},{value:"Global",id:"global",level:2},{value:"Charts type",id:"charts-type",level:2},{value:"Scales",id:"scales",level:2},{value:"Scales type",id:"scales-type",level:2},{value:"Methods",id:"methods",level:2}],c={toc:s},h="wrapper";function d(t){let{components:e,...a}=t;return(0,o.kt)(h,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"using-defaults"},"Using defaults"),(0,o.kt)("p",null,"The options are used to change how the chart behaves. There are properties to control styling, fonts, the legend, etc."),(0,o.kt)("p",null,"This concept is allowing for changing options globally across chart types, using chart type defaults and scales defaults appropriately, avoiding the need to specify options for each instance, or the default for a particular chart type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," doesn't merge the options object but delegates ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," to do it which merges the option object passed to the chart with the global configuration."),(0,o.kt)("p",null,"In this way you can be as specific as you would like in your individual chart configuration, while still changing the defaults for all chart types where applicable. "),(0,o.kt)("p",null,"There are 4 main defaults entities that you can manage to configure your charts, at global level:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#global"},"Global"),": global options, containing the configuration items which can be applied to all charts, whatever type of chart. Scale configuration is excluded."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#charts-type"},"Chart option"),": global options related to a specific type of chart, containing both options and scales configuration."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#scales"},"Scale"),": global options related to scale, containing the configuration items which can be applied to all charts (with scales), whatever type of chart."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#scales-type"},"Scale type"),": global options related to a specific ",(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/configuration/AxisType.htmll"},"type")," of scale which can be applied to all charts which are using that type of scale.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," is providing a singleton ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/Defaults.html"},"Defaults")," which allows you to manage all defaults entities above mentioned."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It's not possible to apply any callbacks or any events handlers at global level, but only on at chart instance one.")),(0,o.kt)("h2",{id:"global"},"Global"),(0,o.kt)("p",null,"To change the global options, ",(0,o.kt)("strong",{parentName:"p"},"Charba")," is providing the method ",(0,o.kt)("inlineCode",{parentName:"p"},"getGlobal")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/Defaults.html"},"Defaults")," class. These options will be applied to all charts, whatever type of chart."),(0,o.kt)("p",null,"With above method you can get all global configurations of ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," and you have got all ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," methods to change or retrieve the global configuration items."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL, for all charts (whatever type)\n// --------------------------------------\nDefaults.get().getGlobal().setResponsive(false);\nDefaults.get().getGlobal().setMaintainAspectRatio(true);\n\ndouble circumference = Defaults.get().getGlobal().getCircumference();\n")),(0,o.kt)("h2",{id:"charts-type"},"Charts type"),(0,o.kt)("p",null,"To change the global options for a specific chart type, ",(0,o.kt)("strong",{parentName:"p"},"Charba")," is providing the method ",(0,o.kt)("inlineCode",{parentName:"p"},"getOptions")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/Defaults.html"},"Defaults")," class."),(0,o.kt)("p",null,"With this method you can get all global configurations for a specific chart of ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," and you have got all ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," methods to change or retrieve the global configuration items."),(0,o.kt)("p",null,"The chart type are defined in a enumeration, ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/ChartType.html"},"ChartType")," but, by controllers, you can create your chart type, therefore the method will accept a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/Type.html"},"Type")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL options for specific chart type\n// --------------------------------------\nDefaults.get().getOptions(ChartType.LINE).setResponsive(false);\nDefaults.get().getOptions(ChartType.LINE).setMaintainAspectRatio(true);\n\ndouble circumference = Defaults.get().getOptions(ChartType.LINE).getCircumference();\n\nDefaults.get().getOptions(ChartType.LINE).getElements().getPoint().setPointStyle(PointStyle.RECT);\n")),(0,o.kt)("h2",{id:"scales"},"Scales"),(0,o.kt)("p",null,"To change the global scale, ",(0,o.kt)("strong",{parentName:"p"},"Charba")," is providing the method ",(0,o.kt)("inlineCode",{parentName:"p"},"getScale")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/Defaults.html"},"defaults"),"."),(0,o.kt)("p",null,"With this method you can get all global configuration of ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," for ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/GlobalScale.html"},"scale")," (common one, not related to chart type) and you have got all ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," methods to change or retrieve the global configuration items."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL, for all scales (whatever type)\n// --------------------------------------\nDefaults.get().getScale().setStacked(true);\n")),(0,o.kt)("h2",{id:"scales-type"},"Scales type"),(0,o.kt)("p",null,"To change the global scale for a specific scale type, ",(0,o.kt)("strong",{parentName:"p"},"Charba")," is providing the method ",(0,o.kt)("inlineCode",{parentName:"p"},"getScale")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/Defaults.html"},"Defaults")," class, passing the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/configuration/AxisType.html"},"type")," of the scale."),(0,o.kt)("p",null,"With this method you can get all global configurations for a specific type of scale and you have got all ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," methods to change or retrieve the global configuration items."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL options for specific scale type\n// --------------------------------------\nDefaults.get().getScale(ChartAxisType.LINEAR).setDisaply(false);\nDefaults.get().getScale(ChartAxisType.LINEAR).setBeginAtZero(true);\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("p",null,"The default singleton instance provides a set of helpful methods to invoke default behavior of ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", helpful methods when a callback is implemented and you want to perform a normal behavior."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class MyLegendClickEventHandler implements LegendClickEventHandler {\n\n    @Override\n    public void onClick(LegendClickEvent event){\n        // invokes default click callback\n        Defaults.get().invokeLegendOnClick(event);\n    }\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Scope"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"invokeChartOnClick")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Chart"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This method invokes the default ",(0,o.kt)("inlineCode",{parentName:"td"},"onClick")," implementation on a chart, if there is.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"invokeChartOnHover")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Chart"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This method invokes the default ",(0,o.kt)("inlineCode",{parentName:"td"},"onHover")," implementation on a chart, if there is.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"generateLabels")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Legend"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This method will provide the default legend items of a chart.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"invokeLegendOnClick")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Legend"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This method invokes the default ",(0,o.kt)("inlineCode",{parentName:"td"},"onClick")," implementation on a legend of a chart, if there is.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"invokeLegendOnHover")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Legend"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This method invokes the default ",(0,o.kt)("inlineCode",{parentName:"td"},"onHover")," implementation on a legend of a chart, if there is.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"invokeLegendOnLeave")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Legend"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This method invokes the default ",(0,o.kt)("inlineCode",{parentName:"td"},"onLeave")," implementation on a legend of a chart, if there is.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"invokeTooltipsCallbackOnTitle")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Tooltip"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This method invokes the default implementation on a tooltip of a chart to get the title text of the tooltip.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"invokeTooltipsCallbackOnLabel")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Tooltip"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This method invokes the default implementation on a tooltip of a chart to get an individual item in the tooltip.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"invokeTooltipsCallbackOnLabelColor")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Tooltip"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This method invokes the default implementation on a tooltip of a chart to get the color of an individual item in the tooltip.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"invokeTooltipsCallbackOnLabelPointStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Tooltip"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This method invokes the default implementation on a tooltip of a chart to get the point style of an individual item in the tooltip.")))))}d.isMDXComponent=!0}}]);