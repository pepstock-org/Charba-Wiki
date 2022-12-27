"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[91334],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,d=m["".concat(p,".").concat(u)]||m[u]||h[u]||i;return a?r.createElement(d,l(l({ref:t},c),{},{components:a})):r.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79992:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));a(44996);const i={id:"FillerAndDecimation",title:"Filler and decimation",hide_title:!0,sidebar_label:"Decimation and filler"},l=void 0,o={unversionedId:"configuration/FillerAndDecimation",id:"version-4.0/configuration/FillerAndDecimation",title:"Filler and decimation",description:"Decimation",source:"@site/versioned_docs/version-4.0/configuration/FillerAndDecimation.md",sourceDirName:"configuration",slug:"/configuration/FillerAndDecimation",permalink:"/Charba-Wiki/docs/4.0/configuration/FillerAndDecimation",draft:!1,tags:[],version:"4.0",frontMatter:{id:"FillerAndDecimation",title:"Filler and decimation",hide_title:!0,sidebar_label:"Decimation and filler"},sidebar:"version-4.0/docs",previous:{title:"Layout",permalink:"/Charba-Wiki/docs/4.0/configuration/Layout"},next:{title:"Scriptable Options",permalink:"/Charba-Wiki/docs/4.0/configuration/ScriptableOptions"}},p={},s=[{value:"Decimation",id:"decimation",level:2},{value:"Algorithms",id:"algorithms",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Filler",id:"filler",level:2}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"decimation"},"Decimation"),(0,n.kt)("p",null,"The decimation element can be used with line charts to automatically decimate data at the start of the chart life cycle. "),(0,n.kt)("p",null,"Before enabling it, review the ",(0,n.kt)("a",{parentName:"p",href:"#requirements"},"requirements")," to ensure that it will work with the chart you want to create."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/Decimation.html"},"decimation")," configuration is nested in the chart configuration as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// sets the sample at chart level\nchart.getOptions().getDecimation().setSamples(1000);\n\ndouble samples = Dchart.getOptions().getDecimation().getSamples();\n")),(0,n.kt)("p",null,"The defaults values are set in global defaults options, see ",(0,n.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#decimation"},"default global decimation options"),"."),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", the data decimation is enabled.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"algorithm"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/DecimationAlgorithm.html"},"DecimationAlgorithm")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Decimation algorithm to use.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"samples"),(0,n.kt)("td",{parentName:"tr",align:"left"},"double"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If the ",(0,n.kt)("inlineCode",{parentName:"td"},"DecimationAlgorithm.LTTB")," is used, this is the number of samples in the output dataset. Defaults to the canvas width to pick 1 sample per pixel.")))),(0,n.kt)("h3",{id:"algorithms"},"Algorithms"),(0,n.kt)("p",null,"The available decimation algorithms to use for data are the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DecimationAlgorithm.MIN_MAX"),": it will preserve peaks in your data but could require up to 4 points for each pixel. This type of decimation would work well for a very noisy signal where you need to see data peaks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DecimationAlgorithm.LTTB")," (Largest Triangle Three Bucket): it reduces the number of data points significantly. This is most useful for showing trends in data using only a few data points.")),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"To use the decimation, the following requirements must be met:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The dataset must have an ",(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/IndexAxis.html"},"IndexAxis")," of ",(0,n.kt)("inlineCode",{parentName:"li"},"IndexAxis.X"),"."),(0,n.kt)("li",{parentName:"ol"},"The dataset must be a ",(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/data/LineDataset.html"},"line"),"."),(0,n.kt)("li",{parentName:"ol"},"The X axis for the dataset must be either a ",(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/CartesianLinearAxis.html"},"linear")," or ",(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/CartesianTimeAxis.html"},"time")," axis.")),(0,n.kt)("h2",{id:"filler"},"Filler"),(0,n.kt)("p",null,"Filler element configures the engine which is in charge to manage the filling of the datasets, by the property ",(0,n.kt)("inlineCode",{parentName:"p"},"fill"),". See ",(0,n.kt)("a",{parentName:"p",href:"../coloring/Colors#filling"},"here")," how filling a dataset."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/Filler.html"},"filler")," configuration is nested in the chart configuration as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// disables the propagation at chart level\nDchart.getOptions().getFiller().setPropagate(false);\n\nboolean propagate = chart.getOptions().getFiller().isPropagate();\n")),(0,n.kt)("p",null,"The defaults values are set in global defaults options, see ",(0,n.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#filler"},"default global filler options"),"."),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"propagate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", the fill area will be recursively extended to the visible target defined by the fill value of hidden data set targets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"drawTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/DrawTime.html"},"DrawTime")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Filler draw time.")))))}m.isMDXComponent=!0}}]);