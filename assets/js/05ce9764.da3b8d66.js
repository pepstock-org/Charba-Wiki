"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[85448],{95788:(e,t,a)=>{a.d(t,{Iu:()=>d,yg:()=>y});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var g=r.createContext({}),p=function(e){var t=r.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,g=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,y=s["".concat(g,".").concat(m)]||s[m]||c[m]||i;return a?r.createElement(y,o(o({ref:t},d),{},{components:a})):r.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>g,toc:()=>d});var r=a(45072),n=(a(11504),a(95788)),i=a(70964);const o={id:"Gradients",title:"Gradients",hide_title:!0,sidebar_label:"Gradients"},l=void 0,g={unversionedId:"coloring/Gradients",id:"version-5.3/coloring/Gradients",title:"Gradients",description:"Gradients",source:"@site/versioned_docs/version-5.3/coloring/Gradients.md",sourceDirName:"coloring",slug:"/coloring/Gradients",permalink:"/Charba-Wiki/docs/5.3/coloring/Gradients",draft:!1,tags:[],version:"5.3",frontMatter:{id:"Gradients",title:"Gradients",hide_title:!0,sidebar_label:"Gradients"},sidebar:"docs",previous:{title:"Patterns and tiles",permalink:"/Charba-Wiki/docs/5.3/coloring/Patterns"},next:{title:"HTML color names",permalink:"/Charba-Wiki/docs/5.3/coloring/tables/HTMLColorsNames"}},p={},d=[{value:"Gradients",id:"gradients",level:2},{value:"Types",id:"types",level:2},{value:"Orientation",id:"orientation",level:2},{value:"Scope",id:"scope",level:2},{value:"Adding colors",id:"adding-colors",level:2},{value:"Resizing",id:"resizing",level:2}],s={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"gradients"},"Gradients"),(0,n.yg)("p",null,"A gradient is a special type of image that consists of a progressive transition between two or more colors."),(0,n.yg)("img",{src:(0,i.c)("/img/radialGradient.png")}),(0,n.yg)("p",null,"The gradient data type is defined with one of the types listed below."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Linear")," where transitions colors progressively along an imaginary line. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Radial")," where transitions colors progressively from a center point (origin).")),(0,n.yg)("p",null,"As with any interpolation involving colors, gradients are calculated in the alpha-premultiplied color space. This prevents unexpected shades of gray from appearing when both the color and the opacity are changing."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," enables the usage of gradient providing some helpful configuration in order to enable you to do not use any dimensions or calculate them."),(0,n.yg)("p",null,"The gradient is mapped in the ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),", which can configure both linear and radial gradients."),(0,n.yg)("p",null,"A ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")," can be created only by a ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/GradientBuilder.html"},"gradient builder")," in order to optimize the cache used for them. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a dataset\nLineDataset dataset = new LineDataset();\n// creates a gradient     \n// setting the 2 colors and their offset\nGradient gradient = GradientBuilder.create(GradientType.LINEAR, GradientScope.CHART).\n    addColorStop(0, HtmlColor.ORANGE).addColorStop(1, HtmlColor.PURPLE).build();\n// sets the gradient as background color of the dataset      \ndataset.setBackgroundColor(gradient);\n// fills the dataset\ndataset.setFill(Fill.origin);\n")),(0,n.yg)("h2",{id:"types"},"Types"),(0,n.yg)("p",null,"Every gradient must be created setting which type represents. The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/GradientType.html"},"gradient type")," must be passed to constructor of new gradient. If omitted, the default is ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/GradientType.html#LINEAR"},"linear")),"."),(0,n.yg)("h2",{id:"orientation"},"Orientation"),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Charba")," gradient implementation doesn't provide you to define the imaginary line or the direction from center but provides you a predefined sets of value, which can be used to create the canvas gradient."),(0,n.yg)("p",null,"The orientation values of the imaginary line or the direction from/to center are defined in an enumeration, ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/GradientOrientation.html"},"gradient orientation"),"."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"}))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TOP_DOWN"),(0,n.yg)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.yg)("td",{parentName:"tr",align:"left"},"From top to bottom (vertical)"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{src:(0,i.c)("/img/topDown.png")}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"BOTTOM_UP"),(0,n.yg)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.yg)("td",{parentName:"tr",align:"left"},"From bottom to to (vertical)"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{src:(0,i.c)("/img/bottomUp.png")}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"LEFT_RIGHT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.yg)("td",{parentName:"tr",align:"left"},"From left to right (horizontal)"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{src:(0,i.c)("/img/leftRight.png")}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"RIGHT_LEFT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.yg)("td",{parentName:"tr",align:"left"},"From right to left (horizontal)"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{src:(0,i.c)("/img/rightLeft.png")}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TOP_RIGHT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.yg)("td",{parentName:"tr",align:"left"},"From top(left) to right(bottom) (diagonal)"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{src:(0,i.c)("/img/topRight.png")}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"BOTTOM_LEFT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.yg)("td",{parentName:"tr",align:"left"},"From bottom(right) to left(top) (diagonal)"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{src:(0,i.c)("/img/bottomLeft.png")}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TOP_LEFT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.yg)("td",{parentName:"tr",align:"left"},"From top(right) to left(bottom) (diagonal)"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{src:(0,i.c)("/img/topLeft.png")}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"BOTTOM_RIGHT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,n.yg)("td",{parentName:"tr",align:"left"},"From bottom(left) to right(top) (diagonal)"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{src:(0,i.c)("/img/bottomRight.png")}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"IN_OUT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"RADIAL"),(0,n.yg)("td",{parentName:"tr",align:"left"},"From center to the borders"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{src:(0,i.c)("/img/inOut.png")}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"OUT_IN"),(0,n.yg)("td",{parentName:"tr",align:"left"},"RADIAL"),(0,n.yg)("td",{parentName:"tr",align:"left"},"From borders to the center"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{src:(0,i.c)("/img/outIn.png")}))))),(0,n.yg)("h2",{id:"scope"},"Scope"),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Charba")," gradient implementation doesn't provide you to define the imaginary line or the direction from center but provides you a predefined sets of value, which can be used to create the canvas gradient."),(0,n.yg)("p",null,"The dimension of the area to use to calculate the gradient are defined in an enumeration, ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/GradientScope.html"},"gradient scope"),"."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"}))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CANVAS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Uses the whole dimension of canvas"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{src:(0,i.c)("/img/canvas.png")}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CHART"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Uses the whole dimension of chart"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("img",{src:(0,i.c)("/img/chart.png")}))))),(0,n.yg)("h2",{id:"adding-colors"},"Adding colors"),(0,n.yg)("img",{src:(0,i.c)("/img/linearGradient.png")}),(0,n.yg)("p",null,"To complete a gradient configuration, you need to set a list of colors, adds a new color stop to the gradient, setting the offset, as value between 0 and 1 for where the color stop is located, and the color at the stop."),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/GradientBuilder.html"},"gradient builder")," provides the methods to add colors, building the ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),", as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a gradient     \n// setting the 2 colors and their offset\nGradient gradient = GradientBuilder.create(GradientType.LINEAR, GradientScope.CHART)\n    .addColorStop(0, HtmlColor.ORANGE)\n    .addColorStop(0.5, HtmlColor.YELLOW)\n    .addColorStop(1, HtmlColor.PURPLE).build();\n// creates a gradient     \n// setting the 2 colors directly\n// with offset 0 and 1\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientScope.CANVAS)\n    .addColorsStartStop(HtmlColor.ORANGE, HtmlColor.PURPLE).build();\n")),(0,n.yg)("h2",{id:"resizing"},"Resizing"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," recalculates the gradients every time the dimension of chart or canvas occurs. In this way it maintains always the gradients even if the chart has got a different size comparing with it at creation time."))}m.isMDXComponent=!0}}]);