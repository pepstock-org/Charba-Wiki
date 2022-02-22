"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[4260],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70608:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=(a(44996),["components"]),o={id:"FillerAndDecimation",title:"Filler and decimation",hide_title:!0,sidebar_label:"Decimation and filler"},p=void 0,s={unversionedId:"configuration/FillerAndDecimation",id:"configuration/FillerAndDecimation",title:"Filler and decimation",description:"Decimation",source:"@site/docs/configuration/FillerAndDecimation.md",sourceDirName:"configuration",slug:"/configuration/FillerAndDecimation",permalink:"/Charba-Wiki/docs/configuration/FillerAndDecimation",tags:[],version:"current",frontMatter:{id:"FillerAndDecimation",title:"Filler and decimation",hide_title:!0,sidebar_label:"Decimation and filler"},sidebar:"docs",previous:{title:"Layout",permalink:"/Charba-Wiki/docs/configuration/Layout"},next:{title:"Scriptable Options",permalink:"/Charba-Wiki/docs/configuration/ScriptableOptions"}},c=[{value:"Decimation",id:"decimation",children:[{value:"Algorithms",id:"algorithms",children:[],level:3},{value:"Requirements",id:"requirements",children:[],level:3}],level:2},{value:"Filler",id:"filler",children:[],level:2}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"decimation"},"Decimation"),(0,i.kt)("p",null,"The decimation element can be used with line charts to automatically decimate data at the start of the chart life cycle. "),(0,i.kt)("p",null,"Before enabling it, review the ",(0,i.kt)("a",{parentName:"p",href:"#requirements"},"requirements")," to ensure that it will work with the chart you want to create."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/Decimation.html"},"decimation")," configuration is nested in the chart configuration as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// sets the sample at chart level\nchart.getOptions().getDecimation().setSamples(1000);\n\ndouble samples = Dchart.getOptions().getDecimation().getSamples();\n")),(0,i.kt)("p",null,"The defaults values are set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#decimation"},"default global decimation options"),"."),(0,i.kt)("p",null,"The following are the attributes that you can set:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the data decimation is enabled.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"algorithm"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/DecimationAlgorithm.html"},"DecimationAlgorithm")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Decimation algorithm to use.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"samples"),(0,i.kt)("td",{parentName:"tr",align:"left"},"double"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If the ",(0,i.kt)("inlineCode",{parentName:"td"},"DecimationAlgorithm.LTTB")," is used, this is the number of samples in the output dataset. Defaults to the canvas width to pick 1 sample per pixel.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"threshold"),(0,i.kt)("td",{parentName:"tr",align:"left"},"double"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If the number of samples in the current axis range is above this value, the decimation will be triggered.",(0,i.kt)("br",null),"Defaults to 4 times the canvas width.",(0,i.kt)("br",null),"The number of point after decimation can be higher than the ",(0,i.kt)("inlineCode",{parentName:"td"},"threshold")," value.")))),(0,i.kt)("h3",{id:"algorithms"},"Algorithms"),(0,i.kt)("p",null,"The available decimation algorithms to use for data are the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DecimationAlgorithm.MIN_MAX"),": it will preserve peaks in your data but could require up to 4 points for each pixel. This type of decimation would work well for a very noisy signal where you need to see data peaks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DecimationAlgorithm.LTTB")," (Largest Triangle Three Bucket): it reduces the number of data points significantly. This is most useful for showing trends in data using only a few data points.")),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To use the decimation, the following requirements must be met:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The dataset must have an ",(0,i.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/IndexAxis.html"},"IndexAxis")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"IndexAxis.X"),"."),(0,i.kt)("li",{parentName:"ol"},"The dataset must be a ",(0,i.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/LineDataset.html"},"line"),"."),(0,i.kt)("li",{parentName:"ol"},"The dataset must not need any parsing for instance having ",(0,i.kt)("inlineCode",{parentName:"li"},"parsing")," option set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ol"},"The X axis for the dataset must be either a ",(0,i.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/CartesianLinearAxis.html"},"linear")," or ",(0,i.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/CartesianTimeAxis.html"},"time")," axis.")),(0,i.kt)("h2",{id:"filler"},"Filler"),(0,i.kt)("p",null,"Filler element configures the engine which is in charge to manage the filling of the datasets, by the property ",(0,i.kt)("inlineCode",{parentName:"p"},"fill"),". See ",(0,i.kt)("a",{parentName:"p",href:"../coloring/Colors#filling"},"here")," how filling a dataset."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/Filler.html"},"filler")," configuration is nested in the chart configuration as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// disables the propagation at chart level\nDchart.getOptions().getFiller().setPropagate(false);\n\nboolean propagate = chart.getOptions().getFiller().isPropagate();\n")),(0,i.kt)("p",null,"The defaults values are set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#filler"},"default global filler options"),"."),(0,i.kt)("p",null,"The following are the attributes that you can set:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"propagate"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the fill area will be recursively extended to the visible target defined by the fill value of hidden data set targets.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"drawTime"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/DrawTime.html"},"DrawTime")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Filler draw time.")))))}u.isMDXComponent=!0}}]);