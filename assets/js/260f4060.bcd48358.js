"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[67318],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>y});var o=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(a),u=r,y=g["".concat(s,".").concat(u)]||g[u]||h[u]||n;return a?o.createElement(y,l(l({ref:t},c),{},{components:a})):o.createElement(y,l({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<n;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9508:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=a(45072),r=(a(11504),a(95788)),n=a(70964);const l={id:"Colors",title:"Colors",hide_title:!0,sidebar_label:"Colors and filling"},i=void 0,s={unversionedId:"coloring/Colors",id:"coloring/Colors",title:"Colors",description:"Coloring",source:"@site/docs/coloring/Colors.md",sourceDirName:"coloring",slug:"/coloring/Colors",permalink:"/Charba-Wiki/docs/coloring/Colors",draft:!1,tags:[],version:"current",frontMatter:{id:"Colors",title:"Colors",hide_title:!0,sidebar_label:"Colors and filling"},sidebar:"docs",previous:{title:"Zoom",permalink:"/Charba-Wiki/docs/extensions/Zoom"},next:{title:"Patterns and tiles",permalink:"/Charba-Wiki/docs/coloring/Patterns"}},p={},c=[{value:"Coloring",id:"coloring",level:2},{value:"Building colors",id:"building-colors",level:3},{value:"Default color palette",id:"default-color-palette",level:3},{value:"Filling",id:"filling",level:2},{value:"Modes",id:"modes",level:3},{value:"Baseline",id:"baseline",level:3},{value:"Different colors base on baseline",id:"different-colors-base-on-baseline",level:4}],g={toc:c},h="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(h,(0,o.c)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"coloring"},"Coloring"),(0,r.yg)("p",null,"The colors on charts is very important because can make the difference to have an understandable result or not."),(0,r.yg)("p",null,"Usually the colors are managed as string, following the syntax defined for CSS, but sometimes this is annoying because its' easier to have the name of the color."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Charba")," provides:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," interface to manage colors"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/Color.html"},"Color")," entity to create and manage colors"),(0,r.yg)("li",{parentName:"ul"},"3 enumerations with",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"all ",(0,r.yg)("a",{parentName:"li",href:"./tables/HTMLColorsNames"},"color names")," defined for HTML, by enumeration ",(0,r.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/HtmlColor.html"},"HtmlColor")),(0,r.yg)("li",{parentName:"ul"},"all ",(0,r.yg)("a",{parentName:"li",href:"./tables/GWTMaterialColors"},"color names")," defined for GWT Material, by enumeration ",(0,r.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/GwtMaterialColor.html"},"GwtMaterialColor")),(0,r.yg)("li",{parentName:"ul"},"first ",(0,r.yg)("a",{parentName:"li",href:"./tables/GoogleChartColors"},"31 color names")," defined for Google Charts, by enumeration ",(0,r.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/GoogleChartColor.html"},"GoogleChartColor")," "),(0,r.yg)("li",{parentName:"ul"},"all gradients defined by ",(0,r.yg)("a",{parentName:"li",href:"https://uigradients.com"},"UiGradients.com"),", by enumeration ",(0,r.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/UiGradient.html"},"UiGradient"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Charba")," is using ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," and colors as string in the methods where you must define a color."),(0,r.yg)("h3",{id:"building-colors"},"Building colors"),(0,r.yg)("p",null,"Even if the usual method is to use strings which are representing colors, leveraging on colors structure of ",(0,r.yg)("strong",{parentName:"p"},"Charba"),", you can use color as objects, defining your base colors and play with transparency without creating a specific string every time."),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," interface (and then all colors defined out of the box) has got a method which returns a another color instance, based from source one, as following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// it can be a static reference\nColor myColor = new Color(255,0,0);\n// new color based on previous one, which is immutable.\nIsColor myColorWithAlpha = myColor.alpha(0.2D);\n// new Color darker from the previous one\nIsColor myDarkerColor = myColor.darker();\n")),(0,r.yg)("p",null,"Another interesting utility is the ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/ColorBuilder.html"},"ColorBuilder")," which can create ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," instances by a string."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'// parses color and creates new color.\n// by HEX representation\nIsColor myColorHex = ColorBuilder.parse("#FF0000");\n// by RGB representation\nIsColor myColorRGB = ColorBuilder.parse("rgb(255, 0, 0)");\n// by RGBA representation\nIsColor myColorRGBA = ColorBuilder.parse("rgba(255, 0, 0, 0.5)");\n// by HSL representation\nIsColor myColorHSL = ColorBuilder.parse("hsl(100, 100%, 50%)");\n// by HSLA representation\nIsColor myColorHSLA = ColorBuilder.parse("hsla(100, 100%, 50%, 0.5)");\n// by color names representation\nIsColor myColorName = ColorBuilder.parse("red");\n')),(0,r.yg)("p",null,"The parser of ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/ColorBuilder.html"},"ColorBuilder")," is able to parse color string representation by HEX, RGB, RGBA, HSL and HSLA."),(0,r.yg)("p",null,"The parser can also use HTML color names, defined in the ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/HtmlColor.html"},"HtmlColor")," enumeration. "),(0,r.yg)("h3",{id:"default-color-palette"},"Default color palette"),(0,r.yg)("p",null,"If you don't have any preference for colors, you can use ",(0,r.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," palette of seven brand colors:"),(0,r.yg)("img",{src:(0,n.c)("/img/colors-plugin-palette.png")}),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("p",null,"To use the to ",(0,r.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," palette, you sould set ",(0,r.yg)("inlineCode",{parentName:"p"},"autoColors")," option to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", as following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL, for all charts (whatever type)\n// --------------------------------------\nDefaults.get().getGlobal().setAutoColors(true);\n\n// --------------------------------------\n// for specific chart instance\n// --------------------------------------\nchart.getOptions().setAutoColors(true);\n")),(0,r.yg)("p",null,"By default the auto colors option only works when you initialize the chart without any colors for the border or background specified.\nIf you want to force the auto colors to always color your datasets, for example when using dynamic datasets at runtime you will need to set the ",(0,r.yg)("inlineCode",{parentName:"p"},"autoColorsForceOverride")," option to true:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// GLOBAL, for all charts (whatever type)\n// --------------------------------------\nDefaults.get().getGlobal().setAutoColorsForceOverride(true);\n\n// --------------------------------------\n// for specific chart instance\n// --------------------------------------\nchart.getOptions().setAutoColorsForceOverride(true);\n")),(0,r.yg)("h2",{id:"filling"},"Filling"),(0,r.yg)("p",null,"Both ",(0,r.yg)("a",{parentName:"p",href:"../charts/ChartLine"},"line")," and ",(0,r.yg)("a",{parentName:"p",href:"../charts/ChartRadar"},"radar")," charts support a ",(0,r.yg)("inlineCode",{parentName:"p"},"fill")," option on the dataset object which can be used to create area between two datasets or a dataset and a boundary."),(0,r.yg)("h3",{id:"modes"},"Modes"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Charba")," is providing an enumeration for fixed ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/enums/Fill.html"},"filling modes"),". "),(0,r.yg)("p",null,"On top of these, you can set other kind of filling mode, as following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Mode"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Values"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Absolute dataset index"),(0,r.yg)("td",{parentName:"tr",align:"left"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"2"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"3"),", ...")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Relative dataset index"),(0,r.yg)("td",{parentName:"tr",align:"left"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},'"-1"'),", ",(0,r.yg)("inlineCode",{parentName:"td"},'"-2"'),", ",(0,r.yg)("inlineCode",{parentName:"td"},'"+1"'),", ...")))),(0,r.yg)("img",{src:(0,n.c)("/img/fillingMode.png")}),(0,r.yg)("p",null,"To get absolute dataset index, you can get it by ",(0,r.yg)("inlineCode",{parentName:"p"},"Fill.getFill(int)")," and you get a IsFill mode that you can set to ",(0,r.yg)("strong",{parentName:"p"},"Charba")," configuration."),(0,r.yg)("p",null,"To get relative dataset index, you can get it by ",(0,r.yg)("inlineCode",{parentName:"p"},"Fill.getFill(String)")," and you get a IsFill mode that you can set to ",(0,r.yg)("strong",{parentName:"p"},"Charba")," configuration."),(0,r.yg)("p",null,"Furthermore ",(0,r.yg)("strong",{parentName:"p"},"Charba")," configuration enables the possibility to set directly absolute or relative filling mode, by ",(0,r.yg)("inlineCode",{parentName:"p"},"setFill(int)")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"setFill(String)")," methods."),(0,r.yg)("h3",{id:"baseline"},"Baseline"),(0,r.yg)("p",null,"By default, the filling of the datasets uses value equals to 0 of value axis to color the dataset above or below the line."),(0,r.yg)("p",null,"You can set a different value, setting the fill options with the axis value you want to use, using a number or a ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/items/FillBaseline.html"},"FillBaseline")," instance."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"```java\n// creates the chart\nLineChart chart = new LineChart();\n// creates the dataset\nLineDataset dataset = chart.newDataset();\n// sets the filling baseline option by a number \n// which is the value of value axis\ndataset.setFillBaseline(20);\n...\n// creates the dataset\nLineDataset datasetNew = new LineDataset();\n// sets the filling baseline option by a object \n// which is the value of value axis\ndatasetNew.setFillBaseline(new FillBaseline(20));\n...\n// sets the datasets to the chart\nchart.getData().setDatasets(dataset, datasetNew);\n")),(0,r.yg)("img",{src:(0,n.c)("/img/fillBaseline.png")}),(0,r.yg)("h4",{id:"different-colors-base-on-baseline"},"Different colors base on baseline"),(0,r.yg)("p",null,"You can decide to have different filling colors above and below the baseline."),(0,r.yg)("p",null,"You can set a different colors, setting the fill options with the your colors you want to use, using a ",(0,r.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/items/FillColors.html"},"FillColors")," instance."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"```java\n// creates the chart\nLineChart chart = new LineChart();\n// creates the dataset\nLineDataset dataset = chart.newDataset();\n// creates a fill colors instance\nFillColors colors = new FillColors();\ncolors.setFill(Fill.ORIGIN);\ncolors.setAboveColor(HtmlColor.GREEN);\ncolors.setBelowColor(HtmlColor.ORANGE);\n// sets the filling colors option\ndataset.setFillColors(colors);\n...\n...\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n")),(0,r.yg)("img",{src:(0,n.c)("/img/fillColors.png")}))}u.isMDXComponent=!0}}]);