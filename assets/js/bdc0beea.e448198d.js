"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[90024],{95788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>m});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),g=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=g(a),y=n,m=c["".concat(p,".").concat(y)]||c[y]||d[y]||l;return a?r.createElement(m,i(i({ref:t},s),{},{components:a})):r.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},87604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(45072),n=(a(11504),a(95788)),l=a(70964);const i={id:"ScaleTitle",title:"Scale title",hide_title:!0,sidebar_label:"Title"},o=void 0,p={unversionedId:"axes/ScaleTitle",id:"version-6.2/axes/ScaleTitle",title:"Scale title",description:"Axis Title",source:"@site/versioned_docs/version-6.2/axes/ScaleTitle.md",sourceDirName:"axes",slug:"/axes/ScaleTitle",permalink:"/Charba-Wiki/docs/6.2/axes/ScaleTitle",draft:!1,tags:[],version:"6.2",frontMatter:{id:"ScaleTitle",title:"Scale title",hide_title:!0,sidebar_label:"Title"},sidebar:"docs",previous:{title:"Grid and border",permalink:"/Charba-Wiki/docs/6.2/axes/Grid"},next:{title:"Angle lines",permalink:"/Charba-Wiki/docs/6.2/axes/AngleLines"}},g={},s=[{value:"Axis Title",id:"axis-title",level:2}],c={toc:s},d="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"axis-title"},"Axis Title"),(0,n.yg)("p",null,"When creating a chart, you want to tell the viewer what data they are viewing. To do this, you need to label the axis."),(0,n.yg)("img",{src:(0,l.c)("/img/scaleTitle.png")}),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"The scale title can be ",(0,n.yg)("strong",{parentName:"p"},"ONLY")," applied to cartesian axes.")),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/configuration/CartesianScaleTitle.html"},"axis title")," provides all ",(0,n.yg)("strong",{parentName:"p"},"set")," and ",(0,n.yg)("strong",{parentName:"p"},"get")," methods to manage the configuration, as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates an axis\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// enables the title\naxis.getTitle().setDisplay(true);\n// sets and gets color of title\naxis.getTitle().setColor(HtmlColor.RED);\n\nIsColor color = axis.getTitle().getColor();\n")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"align"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/ScaleTitleAlign.html"},"ScaleTitleAlign")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Alignment of the scale label.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Color of scale label.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"display"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"false"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"font"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Font of scale label.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The padding of title.",(0,n.yg)("br",null),"See ",(0,n.yg)("a",{parentName:"td",href:"../configuration/Commons#padding"},"padding documentation")," for more details.")))))}y.isMDXComponent=!0}}]);