"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[43745],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(a),h=r,g=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(g,o(o({ref:e},c),{},{components:a})):n.createElement(g,o({ref:e},c))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},76865:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"Datasets",title:"Datasets",hide_title:!0,sidebar_label:"Datasets"},o=void 0,l={unversionedId:"configuration/Datasets",id:"version-5.5/configuration/Datasets",title:"Datasets",description:"Datasets",source:"@site/versioned_docs/version-5.5/configuration/Datasets.md",sourceDirName:"configuration",slug:"/configuration/Datasets",permalink:"/Charba-Wiki/docs/5.5/configuration/Datasets",draft:!1,tags:[],version:"5.5",frontMatter:{id:"Datasets",title:"Datasets",hide_title:!0,sidebar_label:"Datasets"},sidebar:"docs",previous:{title:"Animation",permalink:"/Charba-Wiki/docs/5.5/configuration/Animation"},next:{title:"Legend",permalink:"/Charba-Wiki/docs/5.5/configuration/Legend"}},s={},p=[{value:"Datasets",id:"datasets",level:2}],c={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"datasets"},"Datasets"),(0,r.kt)("p",null,"The datasets options are managing the set options which will affect the datasets management."),(0,r.kt)("p",null,"The datasets configuration is passed using the ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/Datasets.html"},"Datasets")," object in the chart options and mapped to ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/options/TypedDataset.html"},"TypedDataset"),"."),(0,r.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,r.kt)("strong",{parentName:"p"},"set")," and ",(0,r.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets showLine option to line datasets \nchart.getOptions().getDatasets().get(ChartType.LINE).setShowLine(true);\n\nboolean showLine = chart.getOptions().getDatasets().get(ChartType.LINE).isShowLine();\n")),(0,r.kt)("p",null,"The following are the attributes that you can set:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"animation"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/Animation.html"},"Animation")),(0,r.kt)("td",{parentName:"tr",align:"left"},"See ",(0,r.kt)("a",{parentName:"td",href:"Animation#animation"},"animation configuration")," section for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"animations"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/Animations.html"},"Animations")),(0,r.kt)("td",{parentName:"tr",align:"left"},"See ",(0,r.kt)("a",{parentName:"td",href:"Animation#animations"},"animation configuration")," section for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"barPercentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"double"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"categoryPercentage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"double"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percent (0-1) of the available width each category should be within the sample width.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"barThickness"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Manually set width of each bar in pixels.",(0,r.kt)("br",null),"If set to ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/defaults/globals/DefaultDatasets.html#FLEX_BAR_THICKNESS"},"DefaultDatasets.FLEX_BAR_THICKNESS"),', it computes "optimal" sample widths that globally arrange bars side by side.',(0,r.kt)("br",null),"If not set (default), bars are equally sized based on the smallest interval.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"grouped"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Should the bars be grouped on index axis.",(0,r.kt)("br",null),"When ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", all the datasets at same index value will be placed next to each other centering on that index value.",(0,r.kt)("br",null),"When ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", each bar is placed on its actual index-axis value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxBarThickness"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set this to ensure that bars are not sized thicker than this.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"minBarLength"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set this to ensure that bars have a minimum length in pixels.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"showLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the line is drawn for dataset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"transitions"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/Transitions.html"},"Transitions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"See ",(0,r.kt)("a",{parentName:"td",href:"Animation#transitions"},"animation configuration")," section for more details.")))))}d.isMDXComponent=!0}}]);