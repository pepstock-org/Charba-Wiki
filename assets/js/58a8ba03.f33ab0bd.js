"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[70516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(a),k=r,h=g["".concat(s,".").concat(k)]||g[k]||d[k]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},33223:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(44996);const i={id:"AngleLines",title:"Angle lines",hide_title:!0,sidebar_label:"Angle lines"},o=void 0,s={unversionedId:"axes/AngleLines",id:"version-5.0/axes/AngleLines",title:"Angle lines",description:"",source:"@site/versioned_docs/version-5.0/axes/AngleLines.md",sourceDirName:"axes",slug:"/axes/AngleLines",permalink:"/Charba-Wiki/docs/5.0/axes/AngleLines",draft:!1,tags:[],version:"5.0",frontMatter:{id:"AngleLines",title:"Angle lines",hide_title:!0,sidebar_label:"Angle lines"},sidebar:"version-5.0/docs",previous:{title:"Title",permalink:"/Charba-Wiki/docs/5.0/axes/ScaleTitle"},next:{title:"Point labels",permalink:"/Charba-Wiki/docs/5.0/axes/PointLabels"}},p={},c=[{value:"Angle lines",id:"angle-lines",level:2},{value:"Scriptable",id:"scriptable",level:3}],d={toc:c};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"angle-lines"},"Angle lines"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/configuration/RadialAngleLines.html"},"angle lines")," options are used to configure angled lines that radiate from the center of the chart to the point labels."),(0,r.kt)("img",{src:(0,l.Z)("/img/angleLines.png")}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The angle lines can be ",(0,r.kt)("strong",{parentName:"p"},"ONLY")," applied to radial axes.",(0,r.kt)("br",null),"\nThese options only apply if ",(0,r.kt)("strong",{parentName:"p"},"display")," is ",(0,r.kt)("strong",{parentName:"p"},"true"),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/configuration/RadialAngleLines.html"},"RadialAngleLines")," provides all ",(0,r.kt)("strong",{parentName:"p"},"set")," and ",(0,r.kt)("strong",{parentName:"p"},"get")," methods to manage the configuration, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables the angle lines\naxis.getAngleLines().setDisplay(true);\n// sets and gets the line width value\naxis.getAngleLines().setLineWidth(2);\n\nint lineWidth = axis.getAngleLines().getLineWidth();\n")),(0,r.kt)("p",null,"Table with options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"borderDash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Length and spacing of dashes on grid lines. See ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash"},"MDN"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"borderDashOffset"),(0,r.kt)("td",{parentName:"tr",align:"left"},"double"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Offset for line dashes. See ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"},"MDN"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"color"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Color of angled lines.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"display"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", angle lines are shown.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lineWidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Width of angled lines.")))),(0,r.kt)("h3",{id:"scriptable"},"Scriptable"),(0,r.kt)("p",null,"Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in ",(0,r.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section."),(0,r.kt)("p",null,"All scriptable options callbacks will get a ",(0,r.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-scriptable-options-context"},"ScaleContext")," instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables the angle lines\naxis.getAngleLines().setDisplay(true);\n// sets the option by a callback \naxis.getAngleLines().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,r.kt)("p",null,"The following options can be set by a callback:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"borderDash"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashCallback.html"},"BorderDashCallback"),"<","ScaleContext",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"borderDashOffset"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html"},"BorderDashOffsetCallback"),"<","ScaleContext",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"double")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"color"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lineWidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int")))))}g.isMDXComponent=!0}}]);