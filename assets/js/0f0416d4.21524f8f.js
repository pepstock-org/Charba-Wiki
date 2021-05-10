(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{209:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),d=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(r),g=a,m=p["".concat(o,".").concat(g)]||p[g]||s[g]||i;return r?n.a.createElement(m,c(c({ref:t},b),{},{components:r})):n.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},210:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var a=r(16),n=r(211);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,b=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(c)return t+r;var d=r.startsWith(t)?r:t+r.replace(/^\//,"");return b?e+d:d}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},211:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))},72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(8),i=(r(0),r(209)),o=r(210),c={id:"Gradients",title:"Gradients",hide_title:!0,sidebar_label:"Gradients"},l={unversionedId:"coloring/Gradients",id:"coloring/Gradients",isDocsHomePage:!1,title:"Gradients",description:"Gradients",source:"@site/docs/coloring/Gradients.md",sourceDirName:"coloring",slug:"/coloring/Gradients",permalink:"/Charba-Wiki/docs/coloring/Gradients",version:"current",sidebar_label:"Gradients",frontMatter:{id:"Gradients",title:"Gradients",hide_title:!0,sidebar_label:"Gradients"},sidebar:"docs",previous:{title:"Patterns",permalink:"/Charba-Wiki/docs/coloring/Patterns"},next:{title:"HTML color names table",permalink:"/Charba-Wiki/docs/coloring/tables/HTMLColorsNames"}},b=[{value:"Gradients",id:"gradients",children:[]},{value:"Types",id:"types",children:[]},{value:"Orientation",id:"orientation",children:[]},{value:"Scope",id:"scope",children:[]},{value:"Adding colors",id:"adding-colors",children:[]},{value:"Resizing",id:"resizing",children:[]}],d={toc:b};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"gradients"},"Gradients"),Object(i.b)("p",null,"A gradient is a special type of image that consists of a progressive transition between two or more colors."),Object(i.b)("img",{src:Object(o.a)("/img/radialGradient.png")}),Object(i.b)("p",null,"The gradient data type is defined with one of the types listed below."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Linear")," where transitions colors progressively along an imaginary line. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Radial")," where transitions colors progressively from a center point (origin).")),Object(i.b)("p",null,"As with any interpolation involving colors, gradients are calculated in the alpha-premultiplied color space. This prevents unexpected shades of gray from appearing when both the color and the opacity are changing."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Charba")," enables the usage of gradient providing some helpful configuration in order to enable you to do not use any dimensions or calculate them."),Object(i.b)("p",null,"The gradient is mapped in the ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),", which can configure both linear and radial gradients."),Object(i.b)("p",null,"A ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")," can be created only by a ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/GradientBuilder.html"},"gradient builder")," in order to optimize the cache used for them. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// creates a dataset\nLineDataset dataset = new LineDataset();\n// creates a gradient     \n// setting the 2 colors and their offset\nGradient gradient = GradientBuilder.create(GradientType.LINEAR, GradientScope.CHART).\n    addColorStop(0, HtmlColor.ORANGE).addColorStop(1, HtmlColor.PURPLE).build();\n// sets the gradient as background color of the dataset      \ndataset.setBackgroundColor(gradient);\n// fills the dataset\ndataset.setFill(Fill.origin);\n")),Object(i.b)("h2",{id:"types"},"Types"),Object(i.b)("p",null,"Every gradient must be created setting which type represents. The ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/GradientType.html"},"gradient type")," must be passed to constructor of new gradient. If omitted, the default is ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/GradientType.html#LINEAR"},"linear")),"."),Object(i.b)("h2",{id:"orientation"},"Orientation"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Charba")," gradient implementation doesn't provide you to define the imaginary line or the direction from center but provides you a predefined sets of value, which can be used to create the canvas gradient."),Object(i.b)("p",null,"The orientation values of the imaginary line or the direction from/to center are defined in an enumeration, ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/GradientOrientation.html"},"gradient orientation"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"TOP_DOWN"),Object(i.b)("td",{parentName:"tr",align:"left"},"LINEAR"),Object(i.b)("td",{parentName:"tr",align:"left"},"From top to bottom (vertical)"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("img",{src:Object(o.a)("/img/topDown.png")}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"BOTTOM_UP"),Object(i.b)("td",{parentName:"tr",align:"left"},"LINEAR"),Object(i.b)("td",{parentName:"tr",align:"left"},"From bottom to to (vertical)"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("img",{src:Object(o.a)("/img/bottomUp.png")}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"LEFT_RIGHT"),Object(i.b)("td",{parentName:"tr",align:"left"},"LINEAR"),Object(i.b)("td",{parentName:"tr",align:"left"},"From left to right (horizontal)"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("img",{src:Object(o.a)("/img/leftRight.png")}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"RIGHT_LEFT"),Object(i.b)("td",{parentName:"tr",align:"left"},"LINEAR"),Object(i.b)("td",{parentName:"tr",align:"left"},"From right to left (horizontal)"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("img",{src:Object(o.a)("/img/rightLeft.png")}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"TOP_RIGHT"),Object(i.b)("td",{parentName:"tr",align:"left"},"LINEAR"),Object(i.b)("td",{parentName:"tr",align:"left"},"From top(left) to right(bottom) (diagonal)"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("img",{src:Object(o.a)("/img/topRight.png")}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"BOTTOM_LEFT"),Object(i.b)("td",{parentName:"tr",align:"left"},"LINEAR"),Object(i.b)("td",{parentName:"tr",align:"left"},"From bottom(right) to left(top) (diagonal)"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("img",{src:Object(o.a)("/img/bottomLeft.png")}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"TOP_LEFT"),Object(i.b)("td",{parentName:"tr",align:"left"},"LINEAR"),Object(i.b)("td",{parentName:"tr",align:"left"},"From top(right) to left(bottom) (diagonal)"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("img",{src:Object(o.a)("/img/topLeft.png")}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"BOTTOM_RIGHT"),Object(i.b)("td",{parentName:"tr",align:"left"},"LINEAR"),Object(i.b)("td",{parentName:"tr",align:"left"},"From bottom(left) to right(top) (diagonal)"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("img",{src:Object(o.a)("/img/bottomRight.png")}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"IN_OUT"),Object(i.b)("td",{parentName:"tr",align:"left"},"RADIAL"),Object(i.b)("td",{parentName:"tr",align:"left"},"From center to the borders"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("img",{src:Object(o.a)("/img/inOut.png")}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"OUT_IN"),Object(i.b)("td",{parentName:"tr",align:"left"},"RADIAL"),Object(i.b)("td",{parentName:"tr",align:"left"},"From borders to the center"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("img",{src:Object(o.a)("/img/outIn.png")}))))),Object(i.b)("h2",{id:"scope"},"Scope"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Charba")," gradient implementation doesn't provide you to define the imaginary line or the direction from center but provides you a predefined sets of value, which can be used to create the canvas gradient."),Object(i.b)("p",null,"The dimension of the area to use to calculate the gradient are defined in an enumeration, ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/GradientScope.html"},"gradient scope"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"CANVAS"),Object(i.b)("td",{parentName:"tr",align:"left"},"Uses the whole dimension of canvas"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("img",{src:Object(o.a)("/img/canvas.png")}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"CHART"),Object(i.b)("td",{parentName:"tr",align:"left"},"Uses the whole dimension of chart"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("img",{src:Object(o.a)("/img/chart.png")}))))),Object(i.b)("h2",{id:"adding-colors"},"Adding colors"),Object(i.b)("img",{src:Object(o.a)("/img/linearGradient.png")}),Object(i.b)("p",null,"To complete a gradient configuration, you need to set a list of colors, adds a new color stop to the gradient, setting the offset, as value between 0 and 1 for where the color stop is located, and the color at the stop."),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/GradientBuilder.html"},"gradient builder")," provides the methods to add colors, building the ",Object(i.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),", as following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"// creates a gradient     \n// setting the 2 colors and their offset\nGradient gradient = GradientBuilder.create(GradientType.LINEAR, GradientScope.CHART)\n    .addColorStop(0, HtmlColor.ORANGE)\n    .addColorStop(0.5, HtmlColor.YELLOW)\n    .addColorStop(1, HtmlColor.PURPLE).build();\n// creates a gradient     \n// setting the 2 colors directly\n// with offset 0 and 1\nGradient gradient = GradientBuilder.create(GradientType.RADIAL, GradientScope.CANVAS)\n    .addColorsStartStop(HtmlColor.ORANGE, HtmlColor.PURPLE).build();\n")),Object(i.b)("h2",{id:"resizing"},"Resizing"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Charba")," recalculates the gradients every time the dimension of chart or canvas occurs. In this way it maintains always the gradients even if the chart has got a different size comparing with it at creation time."))}p.isMDXComponent=!0}}]);