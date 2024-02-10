"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[35788],{95788:(e,r,t)=>{t.d(r,{Iu:()=>g,yg:()=>m});var o=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},g=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},y=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=p(t),y=a,m=c["".concat(s,".").concat(y)]||c[y]||h[y]||n;return t?o.createElement(m,l(l({ref:r},g),{},{components:t})):o.createElement(m,l({ref:r},g))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,l=new Array(n);l[0]=y;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},65508:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var o=t(45072),a=(t(11504),t(95788)),n=t(70964);const l={id:"Colors",title:"Colors",hide_title:!0,sidebar_label:"Colors and filling"},i=void 0,s={unversionedId:"coloring/Colors",id:"version-5.1/coloring/Colors",title:"Colors",description:"Coloring",source:"@site/versioned_docs/version-5.1/coloring/Colors.md",sourceDirName:"coloring",slug:"/coloring/Colors",permalink:"/Charba-Wiki/docs/5.1/coloring/Colors",draft:!1,tags:[],version:"5.1",frontMatter:{id:"Colors",title:"Colors",hide_title:!0,sidebar_label:"Colors and filling"},sidebar:"docs",previous:{title:"Zoom",permalink:"/Charba-Wiki/docs/5.1/extensions/Zoom"},next:{title:"Patterns and tiles",permalink:"/Charba-Wiki/docs/5.1/coloring/Patterns"}},p={},g=[{value:"Coloring",id:"coloring",level:2},{value:"Building colors",id:"building-colors",level:3},{value:"Filling",id:"filling",level:2},{value:"Modes",id:"modes",level:3}],c={toc:g},h="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(h,(0,o.c)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"coloring"},"Coloring"),(0,a.yg)("p",null,"The colors on charts is very important because can make the difference to have an understandable result or not."),(0,a.yg)("p",null,"Usually the colors are managed as string, following the syntax defined for CSS, but sometimes this is annoying because its' easier to have the name of the color."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Charba")," provides:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," interface to manage colors"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Color.html"},"Color")," entity to create and manage colors"),(0,a.yg)("li",{parentName:"ul"},"3 enumerations with",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"all ",(0,a.yg)("a",{parentName:"li",href:"./tables/HTMLColorsNames"},"color names")," defined for HTML, by enumeration ",(0,a.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/HtmlColor.html"},"HtmlColor")),(0,a.yg)("li",{parentName:"ul"},"all ",(0,a.yg)("a",{parentName:"li",href:"./tables/GWTMaterialColors"},"color names")," defined for GWT Material, by enumeration ",(0,a.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/GwtMaterialColor.html"},"GwtMaterialColor")),(0,a.yg)("li",{parentName:"ul"},"first ",(0,a.yg)("a",{parentName:"li",href:"./tables/GoogleChartColors"},"31 color names")," defined for Google Charts, by enumeration ",(0,a.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/GoogleChartColor.html"},"GoogleChartColor")," "),(0,a.yg)("li",{parentName:"ul"},"all gradients defined by ",(0,a.yg)("a",{parentName:"li",href:"https://uigradients.com"},"UiGradients.com"),", by enumeration ",(0,a.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/UiGradient.html"},"UiGradient"))))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Charba")," is using ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," and colors as string in the methods where you must define a color."),(0,a.yg)("h3",{id:"building-colors"},"Building colors"),(0,a.yg)("p",null,"Even if the usual method is to use strings which are representing colors, leveraging on colors structure of ",(0,a.yg)("strong",{parentName:"p"},"Charba"),", you can use color as objects, defining your base colors and play with transparency without creating a specific string every time."),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," interface (and then all colors defined out of the box) has got a method which returns a another color instance, based from source one, as following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"// it can be a static reference\nColor myColor = new Color(255,0,0);\n// new color based on previous one, which is immutable.\nIsColor myColorWithAlpha = myColor.alpha(0.2D);\n// new Color darker from the previous one\nIsColor myDarkerColor = myColor.darker();\n")),(0,a.yg)("p",null,"Another interesting utility is the ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/ColorBuilder.html"},"ColorBuilder")," which can create ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," instances by a string."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'// parses color and creates new color.\n// by HEX representation\nIsColor myColorHex = ColorBuilder.parse("#FF0000");\n// by RGB representation\nIsColor myColorRGB = ColorBuilder.parse("rgb(255, 0, 0)");\n// by RGBA representation\nIsColor myColorRGBA = ColorBuilder.parse("rgba(255, 0, 0, 0.5)");\n// by HSL representation\nIsColor myColorHSL = ColorBuilder.parse("hsl(100, 100%, 50%)");\n// by HSLA representation\nIsColor myColorHSLA = ColorBuilder.parse("hsla(100, 100%, 50%, 0.5)");\n// by color names representation\nIsColor myColorName = ColorBuilder.parse("red");\n')),(0,a.yg)("p",null,"The parser of ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/ColorBuilder.html"},"ColorBuilder")," is able to parse color string representation by HEX, RGB, RGBA, HSL and HSLA."),(0,a.yg)("p",null,"The parser can also use HTML color names, defined in the ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/HtmlColor.html"},"HtmlColor")," enumeration. "),(0,a.yg)("h2",{id:"filling"},"Filling"),(0,a.yg)("p",null,"Both ",(0,a.yg)("a",{parentName:"p",href:"../charts/ChartLine"},"line")," and ",(0,a.yg)("a",{parentName:"p",href:"../charts/ChartRadar"},"radar")," charts support a ",(0,a.yg)("inlineCode",{parentName:"p"},"fill")," option on the dataset object which can be used to create area between two datasets or a dataset and a boundary."),(0,a.yg)("h3",{id:"modes"},"Modes"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Charba")," is providing an enumeration for fixed ",(0,a.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/Fill.html"},"filling modes"),". "),(0,a.yg)("p",null,"On top of these, you can set other kind of filling mode, as following:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Mode"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Values"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Absolute dataset index"),(0,a.yg)("td",{parentName:"tr",align:"left"},"int"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"1"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"2"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"3"),", ...")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Relative dataset index"),(0,a.yg)("td",{parentName:"tr",align:"left"},"String"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},'"-1"'),", ",(0,a.yg)("inlineCode",{parentName:"td"},'"-2"'),", ",(0,a.yg)("inlineCode",{parentName:"td"},'"+1"'),", ...")))),(0,a.yg)("img",{src:(0,n.c)("/img/fillingMode.png")}),(0,a.yg)("p",null,"To get absolute dataset index, you can get it by ",(0,a.yg)("inlineCode",{parentName:"p"},"Fill.getFill(int)")," and you get a IsFill mode that you can set to ",(0,a.yg)("strong",{parentName:"p"},"Charba")," configuration."),(0,a.yg)("p",null,"To get relative dataset index, you can get it by ",(0,a.yg)("inlineCode",{parentName:"p"},"Fill.getFill(String)")," and you get a IsFill mode that you can set to ",(0,a.yg)("strong",{parentName:"p"},"Charba")," configuration."),(0,a.yg)("p",null,"Furthermore ",(0,a.yg)("strong",{parentName:"p"},"Charba")," configuration enables the possibility to set directly absolute or relative filling mode, by ",(0,a.yg)("inlineCode",{parentName:"p"},"setFill(int)")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"setFill(String)")," methods."))}y.isMDXComponent=!0}}]);