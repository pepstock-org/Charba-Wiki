(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{124:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(8),o=(a(0),a(209)),l={id:"Defaults",title:"Defaults options",hide_title:!0,sidebar_label:"Using defaults"},i={unversionedId:"defaults/Defaults",id:"defaults/Defaults",isDocsHomePage:!1,title:"Defaults options",description:"Using defaults",source:"@site/docs/defaults/Defaults.md",sourceDirName:"defaults",slug:"/defaults/Defaults",permalink:"/Charba-Wiki/docs/defaults/Defaults",version:"current",sidebar_label:"Using defaults",frontMatter:{id:"Defaults",title:"Defaults options",hide_title:!0,sidebar_label:"Using defaults"},sidebar:"docs",previous:{title:"Integration",permalink:"/Charba-Wiki/docs/getting-started/Integration"},next:{title:"Defaults charts options",permalink:"/Charba-Wiki/docs/defaults/DefaultsCharts"}},c=[{value:"Using defaults",id:"using-defaults",children:[]},{value:"Global",id:"global",children:[]},{value:"Charts type",id:"charts-type",children:[]},{value:"Scales",id:"scales",children:[]},{value:"Scales type",id:"scales-type",children:[]},{value:"Methods",id:"methods",children:[]}],p={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"using-defaults"},"Using defaults"),Object(o.b)("p",null,"The options are used to change how the chart behaves. There are properties to control styling, fonts, the legend, etc."),Object(o.b)("p",null,"This concept is allowing for changing options globally across chart types, using chart type defaults and scales defaults appropriately, avoiding the need to specify options for each instance, or the default for a particular chart type."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Charba")," doesn't merge the options object but delegates ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," to do it which merges the option object passed to the chart with the global configuration."),Object(o.b)("p",null,"In this way you can be as specific as you would like in your individual chart configuration, while still changing the defaults for all chart types where applicable. "),Object(o.b)("p",null,"There are 4 main defaults entities that you can manage to configure your charts, at global level:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#global"},"Global"),": global options, containing the configuration items which can be applied to all charts, whatever type of chart. Scale configuration is excluded."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#charts-type"},"Chart option"),": global options related to a specific type of chart, containing both options and scales configuration."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#scales"},"Scale"),": global options related to scale, containing the configuration items which can be applied to all charts (with scales), whatever type of chart."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#scales-type"},"Scale type"),": global options related to a specific ",Object(o.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/AxisType.html"},"type")," of scale which can be applied to all charts which are using that type of scale.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Charba")," is providing a singleton ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/Defaults.html"},"Defaults")," which allows you to manage all defaults entities above mentioned."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"PAY ATTENTION")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It's not possible to apply any callbacks or any events handlers at global level, but only on at chart instance one."))),Object(o.b)("h2",{id:"global"},"Global"),Object(o.b)("p",null,"To change the global options, ",Object(o.b)("strong",{parentName:"p"},"Charba")," is providing the method ",Object(o.b)("inlineCode",{parentName:"p"},"getGlobal")," in the ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/Defaults.html"},"Defaults")," class. These options will be applied to all charts, whatever type of chart."),Object(o.b)("p",null,"With above method you can get all global configurations of ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," and you have got all ",Object(o.b)("inlineCode",{parentName:"p"},"set")," and ",Object(o.b)("inlineCode",{parentName:"p"},"get")," methods to change or retrieve the global configuration items."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL, for all charts (whatever type)\n// --------------------------------------\nDefaults.get().getGlobal().setResponsive(false);\nDefaults.get().getGlobal().setMaintainAspectRatio(true);\n\ndouble circumference = Defaults.get().getGlobal().getCircumference();\n")),Object(o.b)("h2",{id:"charts-type"},"Charts type"),Object(o.b)("p",null,"To change the global options for a specific chart type, ",Object(o.b)("strong",{parentName:"p"},"Charba")," is providing the method ",Object(o.b)("inlineCode",{parentName:"p"},"getOptions")," in the ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/Defaults.html"},"Defaults")," class."),Object(o.b)("p",null,"With this method you can get all global configurations for a specific chart of ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," and you have got all ",Object(o.b)("inlineCode",{parentName:"p"},"set")," and ",Object(o.b)("inlineCode",{parentName:"p"},"get")," methods to change or retrieve the global configuration items."),Object(o.b)("p",null,"The chart type are defined in a enumeration, ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/ChartType.html"},"ChartType")," but, by controllers, you can create your chart type, therefore the method will accept a ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/Type.html"},"Type")," object."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL options for specific chart type\n// --------------------------------------\nDefaults.get().getOptions(ChartType.LINE).setResponsive(false);\nDefaults.get().getOptions(ChartType.LINE).setMaintainAspectRatio(true);\n\ndouble circumference = Defaults.get().getOptions(ChartType.LINE).getCircumference();\n\nDefaults.get().getOptions(ChartType.LINE).getElements().getPoint().setPointStyle(PointStyle.RECT);\n")),Object(o.b)("h2",{id:"scales"},"Scales"),Object(o.b)("p",null,"To change the global scale, ",Object(o.b)("strong",{parentName:"p"},"Charba")," is providing the method ",Object(o.b)("inlineCode",{parentName:"p"},"getScale")," in the ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/Defaults.html"},"defaults"),"."),Object(o.b)("p",null,"With this method you can get all global configuration of ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," for ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/GlobalScale.html"},"scale")," (common one, not related to chart type) and you have got all ",Object(o.b)("inlineCode",{parentName:"p"},"set")," and ",Object(o.b)("inlineCode",{parentName:"p"},"get")," methods to change or retrieve the global configuration items."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL, for all scales (whatever type)\n// --------------------------------------\nDefaults.get().getScale().setStacked(true);\n")),Object(o.b)("h2",{id:"scales-type"},"Scales type"),Object(o.b)("p",null,"To change the global scale for a specific scale type, ",Object(o.b)("strong",{parentName:"p"},"Charba")," is providing the method ",Object(o.b)("inlineCode",{parentName:"p"},"getScale")," in the ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/Defaults.html"},"Defaults")," class, passing the ",Object(o.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/AxisType.html"},"type")," of the scale."),Object(o.b)("p",null,"With this method you can get all global configurations for a specific type of scale and you have got all ",Object(o.b)("inlineCode",{parentName:"p"},"set")," and ",Object(o.b)("inlineCode",{parentName:"p"},"get")," methods to change or retrieve the global configuration items."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL options for specific scale type\n// --------------------------------------\nDefaults.get().getScale(AxisType.LINEAR).setDisaply(false);\nDefaults.get().getScale(AxisType.LINEAR).setBeginAtZero(true);\n")),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("p",null,"The default singleton instance provides a set of helpful methods to invoke default behavior of ",Object(o.b)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", helpful methods when a callback is implemented and you want to perform a normal behavior."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"public class MyLegendClickEventHandler implements LegendClickEventHandler {\n\n    @Override\n    public void onClick(LegendClickEvent event){\n        // invokes default click callback\n        Defaults.get().invokeLegendOnClick(event);\n    }\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Scope"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"invokeChartOnClick")),Object(o.b)("td",{parentName:"tr",align:"left"},"Chart"),Object(o.b)("td",{parentName:"tr",align:"left"},"This method invokes the default ",Object(o.b)("inlineCode",{parentName:"td"},"onClick")," implementation on a chart, if there is.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"invokeChartOnHover")),Object(o.b)("td",{parentName:"tr",align:"left"},"Chart"),Object(o.b)("td",{parentName:"tr",align:"left"},"This method invokes the default ",Object(o.b)("inlineCode",{parentName:"td"},"onHover")," implementation on a chart, if there is.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"generateLabels")),Object(o.b)("td",{parentName:"tr",align:"left"},"Legend"),Object(o.b)("td",{parentName:"tr",align:"left"},"This method will provide the default legend items of a chart.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"invokeLegendOnClick")),Object(o.b)("td",{parentName:"tr",align:"left"},"Legend"),Object(o.b)("td",{parentName:"tr",align:"left"},"This method invokes the default ",Object(o.b)("inlineCode",{parentName:"td"},"onClick")," implementation on a legend of a chart, if there is.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"invokeLegendOnHover")),Object(o.b)("td",{parentName:"tr",align:"left"},"Legend"),Object(o.b)("td",{parentName:"tr",align:"left"},"This method invokes the default ",Object(o.b)("inlineCode",{parentName:"td"},"onHover")," implementation on a legend of a chart, if there is.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"invokeLegendOnLeave")),Object(o.b)("td",{parentName:"tr",align:"left"},"Legend"),Object(o.b)("td",{parentName:"tr",align:"left"},"This method invokes the default ",Object(o.b)("inlineCode",{parentName:"td"},"onLeave")," implementation on a legend of a chart, if there is.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"invokeTooltipsCallbackOnTitle")),Object(o.b)("td",{parentName:"tr",align:"left"},"Tooltip"),Object(o.b)("td",{parentName:"tr",align:"left"},"This method invokes the default implementation on a tooltip of a chart to get the title text of the tooltip.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"invokeTooltipsCallbackOnLabel")),Object(o.b)("td",{parentName:"tr",align:"left"},"Tooltip"),Object(o.b)("td",{parentName:"tr",align:"left"},"This method invokes the default implementation on a tooltip of a chart to get an individual item in the tooltip.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"invokeTooltipsCallbackOnLabelColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Tooltip"),Object(o.b)("td",{parentName:"tr",align:"left"},"This method invokes the default implementation on a tooltip of a chart to get the color of an individual item in the tooltip.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"invokeTooltipsCallbackOnLabelPointStyle")),Object(o.b)("td",{parentName:"tr",align:"left"},"Tooltip"),Object(o.b)("td",{parentName:"tr",align:"left"},"This method invokes the default implementation on a tooltip of a chart to get the point style of an individual item in the tooltip.")))))}b.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(a),d=n,g=s["".concat(l,".").concat(d)]||s[d]||h[d]||o;return a?r.a.createElement(g,i(i({ref:t},p),{},{components:a})):r.a.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);