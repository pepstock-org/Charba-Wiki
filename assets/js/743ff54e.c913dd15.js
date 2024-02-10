"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[54032],{95788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>y});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),g=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=g(a),d=r,y=c["".concat(p,".").concat(d)]||c[d]||h[d]||o;return a?n.createElement(y,l(l({ref:t},s),{},{components:a})):n.createElement(y,l({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<o;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49264:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var n=a(45072),r=(a(11504),a(95788));const o={id:"Defaults",title:"Defaults options",hide_title:!0,sidebar_label:"Using defaults"},l=void 0,i={unversionedId:"defaults/Defaults",id:"version-6.3/defaults/Defaults",title:"Defaults options",description:"Using defaults",source:"@site/versioned_docs/version-6.3/defaults/Defaults.md",sourceDirName:"defaults",slug:"/defaults/",permalink:"/Charba-Wiki/docs/6.3/defaults/",draft:!1,tags:[],version:"6.3",frontMatter:{id:"Defaults",title:"Defaults options",hide_title:!0,sidebar_label:"Using defaults"},sidebar:"docs",previous:{title:"Integration",permalink:"/Charba-Wiki/docs/6.3/getting-started/Integration"},next:{title:"Charts",permalink:"/Charba-Wiki/docs/6.3/defaults/DefaultsCharts"}},p={},g=[{value:"Using defaults",id:"using-defaults",level:2},{value:"Global",id:"global",level:2},{value:"Charts type",id:"charts-type",level:2},{value:"Scales",id:"scales",level:2},{value:"Scales type",id:"scales-type",level:2},{value:"Methods",id:"methods",level:2}],s={toc:g},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"using-defaults"},"Using defaults"),(0,r.yg)("p",null,"The options are used to change how the chart behaves. There are properties to control styling, fonts, the legend, etc."),(0,r.yg)("p",null,"This concept is allowing for changing options globally across chart types, using chart type defaults and scales defaults appropriately, avoiding the need to specify options for each instance, or the default for a particular chart type."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Charba")," doesn't merge the options object but delegates ",(0,r.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," to do it which merges the option object passed to the chart with the global configuration."),(0,r.yg)("p",null,"In this way you can be as specific as you would like in your individual chart configuration, while still changing the defaults for all chart types where applicable. "),(0,r.yg)("p",null,"There are 4 main defaults entities that you can manage to configure your charts, at global level:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"#global"},"Global"),": global options, containing the configuration items which can be applied to all charts, whatever type of chart. Scale configuration is excluded."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"#charts-type"},"Chart option"),": global options related to a specific type of chart, containing both options and scales configuration."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"#scales"},"Scale"),": global options related to scale, containing the configuration items which can be applied to all charts (with scales), whatever type of chart."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"#scales-type"},"Scale type"),": global options related to a specific ",(0,r.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/configuration/AxisType.htmll"},"type")," of scale which can be applied to all charts which are using that type of scale.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Charba")," is providing a singleton ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/Defaults.html"},"Defaults")," which allows you to manage all defaults entities above mentioned."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"It's not possible to apply any callbacks or any events handlers at global level, but only on at chart instance one.")),(0,r.yg)("h2",{id:"global"},"Global"),(0,r.yg)("p",null,"To change the global options, ",(0,r.yg)("strong",{parentName:"p"},"Charba")," is providing the method ",(0,r.yg)("inlineCode",{parentName:"p"},"getGlobal")," in the ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/Defaults.html"},"Defaults")," class. These options will be applied to all charts, whatever type of chart."),(0,r.yg)("p",null,"With above method you can get all global configurations of ",(0,r.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," and you have got all ",(0,r.yg)("inlineCode",{parentName:"p"},"set")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," methods to change or retrieve the global configuration items."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL, for all charts (whatever type)\n// --------------------------------------\nDefaults.get().getGlobal().setResponsive(false);\nDefaults.get().getGlobal().setMaintainAspectRatio(true);\n\ndouble circumference = Defaults.get().getGlobal().getCircumference();\n")),(0,r.yg)("h2",{id:"charts-type"},"Charts type"),(0,r.yg)("p",null,"To change the global options for a specific chart type, ",(0,r.yg)("strong",{parentName:"p"},"Charba")," is providing the method ",(0,r.yg)("inlineCode",{parentName:"p"},"getOptions")," in the ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/Defaults.html"},"Defaults")," class."),(0,r.yg)("p",null,"With this method you can get all global configurations for a specific chart of ",(0,r.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," and you have got all ",(0,r.yg)("inlineCode",{parentName:"p"},"set")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," methods to change or retrieve the global configuration items."),(0,r.yg)("p",null,"The chart type are defined in a enumeration, ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/ChartType.html"},"ChartType")," but, by controllers, you can create your chart type, therefore the method will accept a ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/Type.html"},"Type")," object."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL options for specific chart type\n// --------------------------------------\nDefaults.get().getOptions(ChartType.LINE).setResponsive(false);\nDefaults.get().getOptions(ChartType.LINE).setMaintainAspectRatio(true);\n\ndouble circumference = Defaults.get().getOptions(ChartType.LINE).getCircumference();\n\nDefaults.get().getOptions(ChartType.LINE).getElements().getPoint().setPointStyle(PointStyle.RECT);\n")),(0,r.yg)("h2",{id:"scales"},"Scales"),(0,r.yg)("p",null,"To change the global scale, ",(0,r.yg)("strong",{parentName:"p"},"Charba")," is providing the method ",(0,r.yg)("inlineCode",{parentName:"p"},"getScale")," in the ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/Defaults.html"},"defaults"),"."),(0,r.yg)("p",null,"With this method you can get all global configuration of ",(0,r.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," for ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/GlobalScale.html"},"scale")," (common one, not related to chart type) and you have got all ",(0,r.yg)("inlineCode",{parentName:"p"},"set")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," methods to change or retrieve the global configuration items."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL, for all scales (whatever type)\n// --------------------------------------\nDefaults.get().getScale().setStacked(true);\n")),(0,r.yg)("h2",{id:"scales-type"},"Scales type"),(0,r.yg)("p",null,"To change the global scale for a specific scale type, ",(0,r.yg)("strong",{parentName:"p"},"Charba")," is providing the method ",(0,r.yg)("inlineCode",{parentName:"p"},"getScale")," in the ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/Defaults.html"},"Defaults")," class, passing the ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/configuration/AxisType.html"},"type")," of the scale."),(0,r.yg)("p",null,"With this method you can get all global configurations for a specific type of scale and you have got all ",(0,r.yg)("inlineCode",{parentName:"p"},"set")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," methods to change or retrieve the global configuration items."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL options for specific scale type\n// --------------------------------------\nDefaults.get().getScale(ChartAxisType.LINEAR).setDisaply(false);\nDefaults.get().getScale(ChartAxisType.LINEAR).setBeginAtZero(true);\n")),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("p",null,"The default singleton instance provides a set of helpful methods to invoke default behavior of ",(0,r.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", helpful methods when a callback is implemented and you want to perform a normal behavior."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class MyLegendClickEventHandler implements LegendClickEventHandler {\n\n    @Override\n    public void onClick(LegendClickEvent event){\n        // invokes default click callback\n        Defaults.get().invokeLegendOnClick(event);\n    }\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Scope"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"invokeChartOnClick")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Chart"),(0,r.yg)("td",{parentName:"tr",align:"left"},"This method invokes the default ",(0,r.yg)("inlineCode",{parentName:"td"},"onClick")," implementation on a chart, if there is.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"invokeChartOnHover")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Chart"),(0,r.yg)("td",{parentName:"tr",align:"left"},"This method invokes the default ",(0,r.yg)("inlineCode",{parentName:"td"},"onHover")," implementation on a chart, if there is.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"generateLabels")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Legend"),(0,r.yg)("td",{parentName:"tr",align:"left"},"This method will provide the default legend items of a chart.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"invokeLegendOnClick")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Legend"),(0,r.yg)("td",{parentName:"tr",align:"left"},"This method invokes the default ",(0,r.yg)("inlineCode",{parentName:"td"},"onClick")," implementation on a legend of a chart, if there is.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"invokeLegendOnHover")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Legend"),(0,r.yg)("td",{parentName:"tr",align:"left"},"This method invokes the default ",(0,r.yg)("inlineCode",{parentName:"td"},"onHover")," implementation on a legend of a chart, if there is.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"invokeLegendOnLeave")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Legend"),(0,r.yg)("td",{parentName:"tr",align:"left"},"This method invokes the default ",(0,r.yg)("inlineCode",{parentName:"td"},"onLeave")," implementation on a legend of a chart, if there is.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"invokeTooltipsCallbackOnTitle")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Tooltip"),(0,r.yg)("td",{parentName:"tr",align:"left"},"This method invokes the default implementation on a tooltip of a chart to get the title text of the tooltip.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"invokeTooltipsCallbackOnLabel")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Tooltip"),(0,r.yg)("td",{parentName:"tr",align:"left"},"This method invokes the default implementation on a tooltip of a chart to get an individual item in the tooltip.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"invokeTooltipsCallbackOnLabelColor")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Tooltip"),(0,r.yg)("td",{parentName:"tr",align:"left"},"This method invokes the default implementation on a tooltip of a chart to get the color of an individual item in the tooltip.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"invokeTooltipsCallbackOnLabelPointStyle")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Tooltip"),(0,r.yg)("td",{parentName:"tr",align:"left"},"This method invokes the default implementation on a tooltip of a chart to get the point style of an individual item in the tooltip.")))))}h.isMDXComponent=!0}}]);