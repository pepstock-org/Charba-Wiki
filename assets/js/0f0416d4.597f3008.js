"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[1002],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),g=d(r),m=n,h=g["".concat(p,".").concat(m)]||g[m]||c[m]||i;return r?a.createElement(h,o(o({ref:e},s),{},{components:r})):a.createElement(h,o({ref:e},s))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},28281:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=r(44996),l=["components"],p={id:"Gradients",title:"Gradients",hide_title:!0,sidebar_label:"Gradients"},d=void 0,s={unversionedId:"coloring/Gradients",id:"coloring/Gradients",title:"Gradients",description:"Gradients",source:"@site/docs/coloring/Gradients.md",sourceDirName:"coloring",slug:"/coloring/Gradients",permalink:"/Charba-Wiki/docs/coloring/Gradients",tags:[],version:"current",frontMatter:{id:"Gradients",title:"Gradients",hide_title:!0,sidebar_label:"Gradients"},sidebar:"docs",previous:{title:"Patterns and tiles",permalink:"/Charba-Wiki/docs/coloring/Patterns"},next:{title:"HTML color names",permalink:"/Charba-Wiki/docs/coloring/tables/HTMLColorsNames"}},c=[{value:"Gradients",id:"gradients",children:[],level:2},{value:"Types",id:"types",children:[],level:2},{value:"Orientation",id:"orientation",children:[],level:2},{value:"Scope",id:"scope",children:[],level:2},{value:"Adding colors",id:"adding-colors",children:[],level:2},{value:"Resizing",id:"resizing",children:[],level:2}],g={toc:c};function m(t){var e=t.components,r=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gradients"},"Gradients"),(0,i.kt)("p",null,"A gradient is a special type of image that consists of a progressive transition between two or more colors."),(0,i.kt)("img",{src:(0,o.Z)("/img/radialGradient.png")}),(0,i.kt)("p",null,"The gradient data type is defined with one of the types listed below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linear")," where transitions colors progressively along an imaginary line. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Radial")," where transitions colors progressively from a center point (origin).")),(0,i.kt)("p",null,"As with any interpolation involving colors, gradients are calculated in the alpha-premultiplied color space. This prevents unexpected shades of gray from appearing when both the color and the opacity are changing."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," enables the usage of gradient providing some helpful configuration in order to enable you to do not use any dimensions or calculate them."),(0,i.kt)("p",null,"The gradient is mapped in the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),", which can configure both linear and radial gradients."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")," can be created only by a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/GradientBuilder.html"},"gradient builder")," in order to optimize the cache used for them. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a dataset\nLineDataset dataset = new LineDataset();\n// creates a gradient     \n// setting the 2 colors and their offset\nGradient gradient = GradientBuilder.create(GradientType.LINEAR, GradientScope.CHART).\n    addColorStop(0, HtmlColor.ORANGE).addColorStop(1, HtmlColor.PURPLE).build();\n// sets the gradient as background color of the dataset      \ndataset.setBackgroundColor(gradient);\n// fills the dataset\ndataset.setFill(Fill.origin);\n")),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("p",null,"Every gradient must be created setting which type represents. The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/GradientType.html"},"gradient type")," must be passed to constructor of new gradient. If omitted, the default is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/GradientType.html#LINEAR"},"linear")),"."),(0,i.kt)("h2",{id:"orientation"},"Orientation"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Charba")," gradient implementation doesn't provide you to define the imaginary line or the direction from center but provides you a predefined sets of value, which can be used to create the canvas gradient."),(0,i.kt)("p",null,"The orientation values of the imaginary line or the direction from/to center are defined in an enumeration, ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/GradientOrientation.html"},"gradient orientation"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"TOP_DOWN"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From top to bottom (vertical)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/topDown.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"BOTTOM_UP"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From bottom to to (vertical)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/bottomUp.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LEFT_RIGHT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From left to right (horizontal)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/leftRight.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"RIGHT_LEFT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From right to left (horizontal)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/rightLeft.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"TOP_RIGHT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From top(left) to right(bottom) (diagonal)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/topRight.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"BOTTOM_LEFT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From bottom(right) to left(top) (diagonal)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/bottomLeft.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"TOP_LEFT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From top(right) to left(bottom) (diagonal)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/topLeft.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"BOTTOM_RIGHT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From bottom(left) to right(top) (diagonal)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/bottomRight.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"IN_OUT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"RADIAL"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From center to the borders"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/inOut.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"OUT_IN"),(0,i.kt)("td",{parentName:"tr",align:"left"},"RADIAL"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From borders to the center"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/outIn.png")}))))),(0,i.kt)("h2",{id:"scope"},"Scope"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Charba")," gradient implementation doesn't provide you to define the imaginary line or the direction from center but provides you a predefined sets of value, which can be used to create the canvas gradient."),(0,i.kt)("p",null,"The dimension of the area to use to calculate the gradient are defined in an enumeration, ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/GradientScope.html"},"gradient scope"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CANVAS"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Uses the whole dimension of canvas"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/canvas.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CHART"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Uses the whole dimension of chart"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/chart.png")}))))),(0,i.kt)("h2",{id:"adding-colors"},"Adding colors"),(0,i.kt)("img",{src:(0,o.Z)("/img/linearGradient.png")}),(0,i.kt)("p",null,"To complete a gradient configuration, you need to set a list of colors, adds a new color stop to the gradient, setting the offset, as value between 0 and 1 for where the color stop is located, and the color at the stop."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/GradientBuilder.html"},"gradient builder")," provides the methods to add colors, building the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),", as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a gradient     \n// setting the 2 colors and their offset\nGradient gradient = GradientBuilder.create(GradientType.LINEAR, GradientScope.CHART)\n    .addColorStop(0, HtmlColor.ORANGE)\n    .addColorStop(0.5, HtmlColor.YELLOW)\n    .addColorStop(1, HtmlColor.PURPLE).build();\n// creates a gradient     \n// setting the 2 colors directly\n// with offset 0 and 1\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientScope.CANVAS)\n    .addColorsStartStop(HtmlColor.ORANGE, HtmlColor.PURPLE).build();\n")),(0,i.kt)("h2",{id:"resizing"},"Resizing"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," recalculates the gradients every time the dimension of chart or canvas occurs. In this way it maintains always the gradients even if the chart has got a different size comparing with it at creation time."))}m.isMDXComponent=!0}}]);