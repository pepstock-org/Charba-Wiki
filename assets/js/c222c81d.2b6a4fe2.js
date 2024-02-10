"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[86476],{95788:(t,e,a)=>{a.d(e,{Iu:()=>p,yg:()=>h});var n=a(11504);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),g=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=g(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=g(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,o(o({ref:e},p),{},{components:a})):n.createElement(h,o({ref:e},p))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:r,o[1]=l;for(var g=2;g<i;g++)o[g]=a[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97916:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var n=a(45072),r=(a(11504),a(95788));const i={id:"Datasets",title:"Datasets",hide_title:!0,sidebar_label:"Datasets"},o=void 0,l={unversionedId:"configuration/Datasets",id:"version-4.2/configuration/Datasets",title:"Datasets",description:"Datasets",source:"@site/versioned_docs/version-4.2/configuration/Datasets.md",sourceDirName:"configuration",slug:"/configuration/Datasets",permalink:"/Charba-Wiki/docs/4.2/configuration/Datasets",draft:!1,tags:[],version:"4.2",frontMatter:{id:"Datasets",title:"Datasets",hide_title:!0,sidebar_label:"Datasets"},sidebar:"version-4.2/docs",previous:{title:"Animation",permalink:"/Charba-Wiki/docs/4.2/configuration/Animation"},next:{title:"Legend",permalink:"/Charba-Wiki/docs/4.2/configuration/Legend"}},s={},g=[{value:"Datasets",id:"datasets",level:2}],p={toc:g},c="wrapper";function d(t){let{components:e,...a}=t;return(0,r.yg)(c,(0,n.c)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"datasets"},"Datasets"),(0,r.yg)("p",null,"The datasets options are managing the set options which will affect the datasets management."),(0,r.yg)("p",null,"The datasets configuration is passed using the ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/Datasets.html"},"Datasets")," object in the chart options and mapped to ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/options/TypedDataset.html"},"TypedDataset"),"."),(0,r.yg)("p",null,"To get, change and apply own properties, you can invoke the ",(0,r.yg)("strong",{parentName:"p"},"set")," and ",(0,r.yg)("strong",{parentName:"p"},"get")," methods, as following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// sets and gets showLine option to line datasets \nchart.getOptions().getDatasets().get(ChartType.LINE).setShowLine(true);\n\nboolean showLine = chart.getOptions().getDatasets().get(ChartType.LINE).isShowLine();\n")),(0,r.yg)("p",null,"The following are the attributes that you can set:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"animation"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/Animation.html"},"Animation")),(0,r.yg)("td",{parentName:"tr",align:"left"},"See ",(0,r.yg)("a",{parentName:"td",href:"Animation#animation"},"animation configuration")," section for more details.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"animations"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/Animations.html"},"Animations")),(0,r.yg)("td",{parentName:"tr",align:"left"},"See ",(0,r.yg)("a",{parentName:"td",href:"Animation#animations"},"animation configuration")," section for more details.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"barPercentage"),(0,r.yg)("td",{parentName:"tr",align:"left"},"double"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"categoryPercentage"),(0,r.yg)("td",{parentName:"tr",align:"left"},"double"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Percent (0-1) of the available width each category should be within the sample width.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"barThickness"),(0,r.yg)("td",{parentName:"tr",align:"left"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Manually set width of each bar in pixels.",(0,r.yg)("br",null),"If set to ",(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/defaults/globals/DefaultDatasets.html#FLEX_BAR_THICKNESS"},"DefaultDatasets.FLEX_BAR_THICKNESS"),', it computes "optimal" sample widths that globally arrange bars side by side.',(0,r.yg)("br",null),"If not set (default), bars are equally sized based on the smallest interval.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"grouped"),(0,r.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Should the bars be grouped on index axis.",(0,r.yg)("br",null),"When ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", all the datasets at same index value will be placed next to each other centering on that index value.",(0,r.yg)("br",null),"When ",(0,r.yg)("inlineCode",{parentName:"td"},"false"),", each bar is placed on its actual index-axis value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"maxBarThickness"),(0,r.yg)("td",{parentName:"tr",align:"left"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Set this to ensure that bars are not sized thicker than this.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"minBarLength"),(0,r.yg)("td",{parentName:"tr",align:"left"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Set this to ensure that bars have a minimum length in pixels.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"showLine"),(0,r.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.yg)("td",{parentName:"tr",align:"left"},"If ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", the line is drawn for dataset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"transitions"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/Transitions.html"},"Transitions")),(0,r.yg)("td",{parentName:"tr",align:"left"},"See ",(0,r.yg)("a",{parentName:"td",href:"Animation#transitions"},"animation configuration")," section for more details.")))))}d.isMDXComponent=!0}}]);