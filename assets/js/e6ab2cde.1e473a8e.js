"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[68402],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},g="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),g=d(a),m=n,h=g["".concat(p,".").concat(m)]||g[m]||c[m]||i;return a?r.createElement(h,o(o({ref:e},s),{},{components:a})):r.createElement(h,o({ref:e},s))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[g]="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37824:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905)),i=a(44996);const o={id:"Gradients",title:"Gradients",hide_title:!0,sidebar_label:"Gradients"},l=void 0,p={unversionedId:"coloring/Gradients",id:"version-5.6/coloring/Gradients",title:"Gradients",description:"Gradients",source:"@site/versioned_docs/version-5.6/coloring/Gradients.md",sourceDirName:"coloring",slug:"/coloring/Gradients",permalink:"/Charba-Wiki/docs/5.6/coloring/Gradients",draft:!1,tags:[],version:"5.6",frontMatter:{id:"Gradients",title:"Gradients",hide_title:!0,sidebar_label:"Gradients"},sidebar:"docs",previous:{title:"Patterns and tiles",permalink:"/Charba-Wiki/docs/5.6/coloring/Patterns"},next:{title:"HTML color names",permalink:"/Charba-Wiki/docs/5.6/coloring/tables/HTMLColorsNames"}},d={},s=[{value:"Gradients",id:"gradients",level:2},{value:"Types",id:"types",level:2},{value:"Orientation",id:"orientation",level:2},{value:"Scope",id:"scope",level:2},{value:"Adding colors",id:"adding-colors",level:2},{value:"Resizing",id:"resizing",level:2}],g={toc:s},c="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"gradients"},"Gradients"),(0,n.kt)("p",null,"A gradient is a special type of image that consists of a progressive transition between two or more colors."),(0,n.kt)("img",{src:(0,i.Z)("/img/radialGradient.png")}),(0,n.kt)("p",null,"The gradient data type is defined with one of the types listed below."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Linear")," where transitions colors progressively along an imaginary line. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Radial")," where transitions colors progressively from a center point (origin).")),(0,n.kt)("p",null,"As with any interpolation involving colors, gradients are calculated in the alpha-premultiplied color space. This prevents unexpected shades of gray from appearing when both the color and the opacity are changing."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," enables the usage of gradient providing some helpful configuration in order to enable you to do not use any dimensions or calculate them."),(0,n.kt)("p",null,"The gradient is mapped in the ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),", which can configure both linear and radial gradients."),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")," can be created only by a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/GradientBuilder.html"},"gradient builder")," in order to optimize the cache used for them. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a dataset\nLineDataset dataset = new LineDataset();\n// creates a gradient     \n// setting the 2 colors and their offset\nGradient gradient = GradientBuilder.create(GradientType.LINEAR, GradientScope.CHART).\n    addColorStop(0, HtmlColor.ORANGE).addColorStop(1, HtmlColor.PURPLE).build();\n// sets the gradient as background color of the dataset      \ndataset.setBackgroundColor(gradient);\n// fills the dataset\ndataset.setFill(Fill.origin);\n")),(0,n.kt)("h2",{id:"types"},"Types"),(0,n.kt)("p",null,"Every gradient must be created setting which type represents. The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/GradientType.html"},"gradient type")," must be passed to constructor of new gradient. If omitted, the default is ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/GradientType.html#LINEAR"},"linear")),"."),(0,n.kt)("h2",{id:"orientation"},"Orientation"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Charba")," gradient implementation doesn't provide you to define the imaginary line or the direction from center but provides you a predefined sets of value, which can be used to create the canvas gradient."),(0,n.kt)("p",null,"The orientation values of the imaginary line or the direction from/to center are defined in an enumeration, ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/GradientOrientation.html"},"gradient orientation"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TOP_DOWN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"From top to bottom (vertical)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{src:(0,i.Z)("/img/topDown.png")}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BOTTOM_UP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"From bottom to to (vertical)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{src:(0,i.Z)("/img/bottomUp.png")}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LEFT_RIGHT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"From left to right (horizontal)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{src:(0,i.Z)("/img/leftRight.png")}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RIGHT_LEFT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"From right to left (horizontal)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{src:(0,i.Z)("/img/rightLeft.png")}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TOP_RIGHT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"From top(left) to right(bottom) (diagonal)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{src:(0,i.Z)("/img/topRight.png")}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BOTTOM_LEFT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"From bottom(right) to left(top) (diagonal)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{src:(0,i.Z)("/img/bottomLeft.png")}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TOP_LEFT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"From top(right) to left(bottom) (diagonal)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{src:(0,i.Z)("/img/topLeft.png")}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BOTTOM_RIGHT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"From bottom(left) to right(top) (diagonal)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{src:(0,i.Z)("/img/bottomRight.png")}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IN_OUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RADIAL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"From center to the borders"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{src:(0,i.Z)("/img/inOut.png")}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OUT_IN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RADIAL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"From borders to the center"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{src:(0,i.Z)("/img/outIn.png")}))))),(0,n.kt)("h2",{id:"scope"},"Scope"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Charba")," gradient implementation doesn't provide you to define the imaginary line or the direction from center but provides you a predefined sets of value, which can be used to create the canvas gradient."),(0,n.kt)("p",null,"The dimension of the area to use to calculate the gradient are defined in an enumeration, ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/GradientScope.html"},"gradient scope"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CANVAS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Uses the whole dimension of canvas"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{src:(0,i.Z)("/img/canvas.png")}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CHART"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Uses the whole dimension of chart"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{src:(0,i.Z)("/img/chart.png")}))))),(0,n.kt)("h2",{id:"adding-colors"},"Adding colors"),(0,n.kt)("img",{src:(0,i.Z)("/img/linearGradient.png")}),(0,n.kt)("p",null,"To complete a gradient configuration, you need to set a list of colors, adds a new color stop to the gradient, setting the offset, as value between 0 and 1 for where the color stop is located, and the color at the stop."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/GradientBuilder.html"},"gradient builder")," provides the methods to add colors, building the ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),", as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a gradient     \n// setting the 2 colors and their offset\nGradient gradient = GradientBuilder.create(GradientType.LINEAR, GradientScope.CHART)\n    .addColorStop(0, HtmlColor.ORANGE)\n    .addColorStop(0.5, HtmlColor.YELLOW)\n    .addColorStop(1, HtmlColor.PURPLE).build();\n// creates a gradient     \n// setting the 2 colors directly\n// with offset 0 and 1\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientScope.CANVAS)\n    .addColorsStartStop(HtmlColor.ORANGE, HtmlColor.PURPLE).build();\n")),(0,n.kt)("h2",{id:"resizing"},"Resizing"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," recalculates the gradients every time the dimension of chart or canvas occurs. In this way it maintains always the gradients even if the chart has got a different size comparing with it at creation time."))}m.isMDXComponent=!0}}]);