(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var o=r(3),n=r(8),a=(r(0),r(209)),l=r(210),i={id:"Colors",title:"Colors",hide_title:!0,sidebar_label:"Colors and filling"},c={unversionedId:"Colors",id:"version-3.3/Colors",isDocsHomePage:!1,title:"Colors",description:"Coloring",source:"@site/versioned_docs/version-3.3/Colors.md",sourceDirName:".",slug:"/Colors",permalink:"/Charba-Wiki/docs/3.3/Colors",version:"3.3",sidebar_label:"Colors and filling",frontMatter:{id:"Colors",title:"Colors",hide_title:!0,sidebar_label:"Colors and filling"},sidebar:"version-3.3/docs",previous:{title:"Controllers",permalink:"/Charba-Wiki/docs/3.3/Controllers"},next:{title:"Patterns",permalink:"/Charba-Wiki/docs/3.3/Patterns"}},b=[{value:"Coloring",id:"coloring",children:[{value:"Building colors",id:"building-colors",children:[]}]},{value:"Filling",id:"filling",children:[{value:"Modes",id:"modes",children:[]}]}],s={toc:b};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"coloring"},"Coloring"),Object(a.b)("p",null,"The colors on charts is very important because can make the difference to have an understandable result or not."),Object(a.b)("p",null,"Usually the colors are managed as string, following the syntax defined for CSS, but sometimes this is annoying because its' easier to have the name of the color."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Charba")," provides:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," interface to manage colors"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Color.html"},"Color")," entity to create and manage colors"),Object(a.b)("li",{parentName:"ul"},"3 enumerations with",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"all ",Object(a.b)("a",{parentName:"li",href:"HTMLColorsNames"},"color names")," defined for HTML, by enumeration ",Object(a.b)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/HtmlColor.html"},"HtmlColor")),Object(a.b)("li",{parentName:"ul"},"all ",Object(a.b)("a",{parentName:"li",href:"GWTMaterialColors"},"color names")," defined for GWT Material, by enumeration ",Object(a.b)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/GwtMaterialColor.html"},"GwtMaterialColor")),Object(a.b)("li",{parentName:"ul"},"first ",Object(a.b)("a",{parentName:"li",href:"GoogleChartColors"},"31 color names")," defined for Google Charts, by enumeration ",Object(a.b)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/GoogleChartColor.html"},"GoogleChartColor")," "),Object(a.b)("li",{parentName:"ul"},"all gradients defined by ",Object(a.b)("a",{parentName:"li",href:"https://uigradients.com"},"UiGradients.com"),", by enumeration ",Object(a.b)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/UiGradient.html"},"UiGradient"))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Charba")," is using ",Object(a.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," and colors as string in the methods where you must define a color."),Object(a.b)("h3",{id:"building-colors"},"Building colors"),Object(a.b)("p",null,"Even if the usual method is to use strings which are representing colors, leveraging on colors structure of ",Object(a.b)("strong",{parentName:"p"},"Charba"),", you can use color as objects, defining your base colors and play with transparency without creating a specific string every time."),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," interface (and then all colors defined out of the box) has got a method which returns a another color instance, based from source one, as following:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"// it can be a static reference\nColor myColor = new Color(255,0,0);\n// new color based on previous one, which is immutable.\nIsColor myColorWithAlpha = myColor.alpha(0.2D);\n// new Color darker from the previous one\nIsColor myDarkerColor = myColor.darker();\n")),Object(a.b)("p",null,"Another interesting utility is the ",Object(a.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/ColorBuilder.html"},"ColorBuilder")," which can create IsColor instances by a string."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'// parses color and creates new color.\n// by HEX representation\nIsColor myColorHex = ColorBuilder.parse("#FF0000");\n// by RGB representation\nIsColor myColorRGB = ColorBuilder.parse("rgb(255, 0, 0)");\n// by RGBA representation\nIsColor myColorRGBA = ColorBuilder.parse("rgba(255, 0, 0, 0.5)");\n// by HSL representation\nIsColor myColorHSL = ColorBuilder.parse("hsl(100, 100%, 50%)");\n// by HSLA representation\nIsColor myColorHSLA = ColorBuilder.parse("hsla(100, 100%, 50%, 0.5)");\n// by color names representation\nIsColor myColorName = ColorBuilder.parse("red");\n')),Object(a.b)("p",null,"The parser of ",Object(a.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/ColorBuilder.html"},"ColorBuilder")," is able to parse color string representation by HEX, RGB, RGBA, HSL and HSLA."),Object(a.b)("p",null,"The parser can also use HTML color names, the only one defined inside of enumeration ",Object(a.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/HtmlColor.html"},"HtmlColor"),". "),Object(a.b)("h2",{id:"filling"},"Filling"),Object(a.b)("p",null,"Both ",Object(a.b)("a",{parentName:"p",href:"ChartLine"},"line")," and ",Object(a.b)("a",{parentName:"p",href:"ChartRadar"},"radar")," charts support a ",Object(a.b)("inlineCode",{parentName:"p"},"fill")," option on the dataset object which can be used to create area between two datasets or a dataset and a boundary."),Object(a.b)("h3",{id:"modes"},"Modes"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Charba")," is providing an enumeration for fixed ",Object(a.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/Fill.html"},"filling modes"),". "),Object(a.b)("p",null,"On top of these, you can set other kind of filling mode, as following:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Mode"),Object(a.b)("th",{parentName:"tr",align:"left"},"Type"),Object(a.b)("th",{parentName:"tr",align:"left"},"Values"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"Absolute dataset index"),Object(a.b)("td",{parentName:"tr",align:"left"},"int"),Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)("inlineCode",{parentName:"td"},"1"),", ",Object(a.b)("inlineCode",{parentName:"td"},"2"),", ",Object(a.b)("inlineCode",{parentName:"td"},"3"),", ...")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"Relative dataset index"),Object(a.b)("td",{parentName:"tr",align:"left"},"String"),Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)("inlineCode",{parentName:"td"},'"-1"'),", ",Object(a.b)("inlineCode",{parentName:"td"},'"-2"'),", ",Object(a.b)("inlineCode",{parentName:"td"},'"+1"'),", ...")))),Object(a.b)("img",{src:Object(l.a)("/img/fillingMode.png")}),Object(a.b)("p",null,"To get absolute dataset index, you can get it by ",Object(a.b)("inlineCode",{parentName:"p"},"Fill.getFill(int)")," and you get a IsFill mode that you can set to ",Object(a.b)("strong",{parentName:"p"},"Charba")," configuration."),Object(a.b)("p",null,"To get relative dataset index, you can get it by ",Object(a.b)("inlineCode",{parentName:"p"},"Fill.getFill(String)")," and you get a IsFill mode that you can set to ",Object(a.b)("strong",{parentName:"p"},"Charba")," configuration."),Object(a.b)("p",null,"Furthermore ",Object(a.b)("strong",{parentName:"p"},"Charba")," configuration enables the possibility to set directly absolute or relative filling mode, by ",Object(a.b)("inlineCode",{parentName:"p"},"setFill(int)")," or ",Object(a.b)("inlineCode",{parentName:"p"},"setFill(String)")," methods."))}p.isMDXComponent=!0},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return r?n.a.createElement(h,i(i({ref:t},b),{},{components:r})):n.a.createElement(h,i({ref:t},b))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var b=2;b<a;b++)l[b]=r[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},210:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return l}));var o=r(16),n=r(211);function a(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,o){var a=void 0===o?{}:o,l=a.forcePrependBaseUrl,i=void 0!==l&&l,c=a.absolute,b=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(i)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return b?e+s:s}(a,r,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},211:function(e,t,r){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return n}))}}]);