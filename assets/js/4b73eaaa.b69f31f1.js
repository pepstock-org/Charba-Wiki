(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[8844],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return g}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=d(r),g=a,f=m["".concat(p,".").concat(g)]||m[g]||c[g]||i;return r?n.createElement(f,o(o({ref:e},s),{},{components:r})):n.createElement(f,o({ref:e},s))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3919:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return a}})},4996:function(t,e,r){"use strict";r.d(e,{C:function(){return i},Z:function(){return o}});var n=r(2263),a=r(3919);function i(){var t=(0,n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,l=void 0!==o&&o,p=i.absolute,d=void 0!==p&&p;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(l)return e+r;var s=r.startsWith(e)?r:e+r.replace(/^\//,"");return d?t+s:s}(i,r,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},6078:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=r(4996),l={id:"Gradients",title:"Gradients",hide_title:!0,sidebar_label:"Gradients"},p={unversionedId:"Gradients",id:"version-3.3/Gradients",isDocsHomePage:!1,title:"Gradients",description:"Gradients",source:"@site/versioned_docs/version-3.3/Gradients.md",sourceDirName:".",slug:"/Gradients",permalink:"/Charba-Wiki/docs/3.3/Gradients",version:"3.3",sidebar_label:"Gradients",frontMatter:{id:"Gradients",title:"Gradients",hide_title:!0,sidebar_label:"Gradients"},sidebar:"version-3.3/docs",previous:{title:"Patterns",permalink:"/Charba-Wiki/docs/3.3/Patterns"},next:{title:"HTML color names table",permalink:"/Charba-Wiki/docs/3.3/HTMLColorsNames"}},d=[{value:"Gradients",id:"gradients",children:[]},{value:"Types",id:"types",children:[]},{value:"Orientation",id:"orientation",children:[]},{value:"Scope",id:"scope",children:[]},{value:"Adding colors",id:"adding-colors",children:[]},{value:"Resizing",id:"resizing",children:[]}],s={toc:d};function c(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gradients"},"Gradients"),(0,i.kt)("p",null,"A gradient is a special type of image that consists of a progressive transition between two or more colors."),(0,i.kt)("img",{src:(0,o.Z)("/img/radialGradient.png")}),(0,i.kt)("p",null,"The gradient data type is defined with one of the types listed below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linear")," where transitions colors progressively along an imaginary line. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Radial")," where transitions colors progressively from a center point (origin).")),(0,i.kt)("p",null,"As with any interpolation involving colors, gradients are calculated in the alpha-premultiplied color space. This prevents unexpected shades of gray from appearing when both the color and the opacity are changing."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," enables the usage of gradient providing some helpful configuration in order to enable you to do not use any dimensions or calculate them."),(0,i.kt)("p",null,"The gradient is mapped into ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),", which can configure both linear and radial gradients."),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("p",null,"Every gradient must be created setting which type represents. The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/GradientType.html"},"gradient type")," must be passed to constructor of new gradient. If omitted, the default is ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/GradientType.html#LINEAR"},"linear"),"."),(0,i.kt)("h2",{id:"orientation"},"Orientation"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Charba")," gradient implementation doesn't provide you to define the imaginary line or the direction from center but provides you a predefined sets of value, which can be used to create the canvas gradient."),(0,i.kt)("p",null,"The orientation values of the imaginary line or the direction from/to center are defined into an enumeration, ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/GradientOrientation.html"},"gradient orientation"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"TOP_DOWN"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From top to bottom (vertical)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/topDown.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"BOTTOM_UP"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From bottom to to (vertical)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/bottomUp.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LEFT_RIGHT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From left to right (horizontal)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/leftRight.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"RIGHT_LEFT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From right to left (horizontal)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/rightLeft.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"TOP_RIGHT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From top(left) to right(bottom) (diagonal)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/topRight.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"BOTTOM_LEFT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From bottom(right) to left(top) (diagonal)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/bottomLeft.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"TOP_LEFT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From top(right) to left(bottom) (diagonal)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/topLeft.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"BOTTOM_RIGHT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LINEAR"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From bottom(left) to right(top) (diagonal)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/bottomRight.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"IN_OUT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"RADIAL"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From center to the borders"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/inOut.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"OUT_IN"),(0,i.kt)("td",{parentName:"tr",align:"left"},"RADIAL"),(0,i.kt)("td",{parentName:"tr",align:"left"},"From borders to the center"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/outIn.png")}))))),(0,i.kt)("h2",{id:"scope"},"Scope"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Charba")," gradient implementation doesn't provide you to define the imaginary line or the direction from center but provides you a predefined sets of value, which can be used to create the canvas gradient."),(0,i.kt)("p",null,"The dimension of the area to use to calculate the gradient are defined into an enumeration, ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/GradientScope.html"},"gradient scope"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CANVAS"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Uses the whole dimension of canvas"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/canvas.png")}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CHART"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Uses the whole dimension of chart"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{src:(0,o.Z)("/img/chart.png")}))))),(0,i.kt)("h2",{id:"adding-colors"},"Adding colors"),(0,i.kt)("img",{src:(0,o.Z)("/img/linearGradient.png")}),(0,i.kt)("p",null,"To complete a gradient configuration, you need to set a list of colors, adds a new color stop to the gradient, setting the offset, as value between 0 and 1 for where the color stop is located, and the color at the stop, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Gradient gradient  = new Gradient(GradientType.LINEAR, GradientOrientation.LEFT_RIGHT, GradientScope.CHART);\n// setting the 2 colors and their offset\ngradient.addColorStop(0, HtmlColor.ORANGE);\ngradient.addColorStop(0.5, HtmlColor.YELLOW);\ngradient.addColorStop(1, HtmlColor.PURPLE);\n\n// or setting the 2 colors directly\n// with offset 0 and 1\ngradient.addColorsStartStop(HtmlColor.ORANGE, HtmlColor.PURPLE);\n")),(0,i.kt)("h2",{id:"resizing"},"Resizing"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," recalculates the gradients every time the dimension of chart or canvas occurs. In this way it maintains always the gradients even if the chart has got a different size comparing with it at creation time."))}c.isMDXComponent=!0}}]);