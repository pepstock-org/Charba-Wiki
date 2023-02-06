"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[18089],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(r),d=a,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||n;return r?o.createElement(u,l(l({ref:t},c),{},{components:r})):o.createElement(u,l({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=r(87462),a=(r(67294),r(3905)),n=r(44996);const l={id:"Colors",title:"Colors",hide_title:!0,sidebar_label:"Colors and filling"},i=void 0,s={unversionedId:"coloring/Colors",id:"version-5.6/coloring/Colors",title:"Colors",description:"Coloring",source:"@site/versioned_docs/version-5.6/coloring/Colors.md",sourceDirName:"coloring",slug:"/coloring/Colors",permalink:"/Charba-Wiki/docs/5.6/coloring/Colors",draft:!1,tags:[],version:"5.6",frontMatter:{id:"Colors",title:"Colors",hide_title:!0,sidebar_label:"Colors and filling"},sidebar:"docs",previous:{title:"Zoom",permalink:"/Charba-Wiki/docs/5.6/extensions/Zoom"},next:{title:"Patterns and tiles",permalink:"/Charba-Wiki/docs/5.6/coloring/Patterns"}},p={},c=[{value:"Coloring",id:"coloring",level:2},{value:"Building colors",id:"building-colors",level:3},{value:"Filling",id:"filling",level:2},{value:"Modes",id:"modes",level:3}],h={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"coloring"},"Coloring"),(0,a.kt)("p",null,"The colors on charts is very important because can make the difference to have an understandable result or not."),(0,a.kt)("p",null,"Usually the colors are managed as string, following the syntax defined for CSS, but sometimes this is annoying because its' easier to have the name of the color."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," provides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," interface to manage colors"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/Color.html"},"Color")," entity to create and manage colors"),(0,a.kt)("li",{parentName:"ul"},"3 enumerations with",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"all ",(0,a.kt)("a",{parentName:"li",href:"./tables/HTMLColorsNames"},"color names")," defined for HTML, by enumeration ",(0,a.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/HtmlColor.html"},"HtmlColor")),(0,a.kt)("li",{parentName:"ul"},"all ",(0,a.kt)("a",{parentName:"li",href:"./tables/GWTMaterialColors"},"color names")," defined for GWT Material, by enumeration ",(0,a.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/GwtMaterialColor.html"},"GwtMaterialColor")),(0,a.kt)("li",{parentName:"ul"},"first ",(0,a.kt)("a",{parentName:"li",href:"./tables/GoogleChartColors"},"31 color names")," defined for Google Charts, by enumeration ",(0,a.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/GoogleChartColor.html"},"GoogleChartColor")," "),(0,a.kt)("li",{parentName:"ul"},"all gradients defined by ",(0,a.kt)("a",{parentName:"li",href:"https://uigradients.com"},"UiGradients.com"),", by enumeration ",(0,a.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/UiGradient.html"},"UiGradient"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," is using ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," and colors as string in the methods where you must define a color."),(0,a.kt)("h3",{id:"building-colors"},"Building colors"),(0,a.kt)("p",null,"Even if the usual method is to use strings which are representing colors, leveraging on colors structure of ",(0,a.kt)("strong",{parentName:"p"},"Charba"),", you can use color as objects, defining your base colors and play with transparency without creating a specific string every time."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," interface (and then all colors defined out of the box) has got a method which returns a another color instance, based from source one, as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// it can be a static reference\nColor myColor = new Color(255,0,0);\n// new color based on previous one, which is immutable.\nIsColor myColorWithAlpha = myColor.alpha(0.2D);\n// new Color darker from the previous one\nIsColor myDarkerColor = myColor.darker();\n")),(0,a.kt)("p",null,"Another interesting utility is the ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/ColorBuilder.html"},"ColorBuilder")," which can create ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," instances by a string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// parses color and creates new color.\n// by HEX representation\nIsColor myColorHex = ColorBuilder.parse("#FF0000");\n// by RGB representation\nIsColor myColorRGB = ColorBuilder.parse("rgb(255, 0, 0)");\n// by RGBA representation\nIsColor myColorRGBA = ColorBuilder.parse("rgba(255, 0, 0, 0.5)");\n// by HSL representation\nIsColor myColorHSL = ColorBuilder.parse("hsl(100, 100%, 50%)");\n// by HSLA representation\nIsColor myColorHSLA = ColorBuilder.parse("hsla(100, 100%, 50%, 0.5)");\n// by color names representation\nIsColor myColorName = ColorBuilder.parse("red");\n')),(0,a.kt)("p",null,"The parser of ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/ColorBuilder.html"},"ColorBuilder")," is able to parse color string representation by HEX, RGB, RGBA, HSL and HSLA."),(0,a.kt)("p",null,"The parser can also use HTML color names, defined in the ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/HtmlColor.html"},"HtmlColor")," enumeration. "),(0,a.kt)("h2",{id:"filling"},"Filling"),(0,a.kt)("p",null,"Both ",(0,a.kt)("a",{parentName:"p",href:"../charts/ChartLine"},"line")," and ",(0,a.kt)("a",{parentName:"p",href:"../charts/ChartRadar"},"radar")," charts support a ",(0,a.kt)("inlineCode",{parentName:"p"},"fill")," option on the dataset object which can be used to create area between two datasets or a dataset and a boundary."),(0,a.kt)("h3",{id:"modes"},"Modes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," is providing an enumeration for fixed ",(0,a.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/enums/Fill.html"},"filling modes"),". "),(0,a.kt)("p",null,"On top of these, you can set other kind of filling mode, as following:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Absolute dataset index"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"2"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"3"),", ...")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Relative dataset index"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"-1"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"-2"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"+1"'),", ...")))),(0,a.kt)("img",{src:(0,n.Z)("/img/fillingMode.png")}),(0,a.kt)("p",null,"To get absolute dataset index, you can get it by ",(0,a.kt)("inlineCode",{parentName:"p"},"Fill.getFill(int)")," and you get a IsFill mode that you can set to ",(0,a.kt)("strong",{parentName:"p"},"Charba")," configuration."),(0,a.kt)("p",null,"To get relative dataset index, you can get it by ",(0,a.kt)("inlineCode",{parentName:"p"},"Fill.getFill(String)")," and you get a IsFill mode that you can set to ",(0,a.kt)("strong",{parentName:"p"},"Charba")," configuration."),(0,a.kt)("p",null,"Furthermore ",(0,a.kt)("strong",{parentName:"p"},"Charba")," configuration enables the possibility to set directly absolute or relative filling mode, by ",(0,a.kt)("inlineCode",{parentName:"p"},"setFill(int)")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"setFill(String)")," methods."))}d.isMDXComponent=!0}}]);