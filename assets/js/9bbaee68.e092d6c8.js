"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[6118],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(a),f=r,h=g["".concat(s,".").concat(f)]||g[f]||d[f]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3919:function(e,t,a){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){a.d(t,{C:function(){return l},Z:function(){return i}});var n=a(2263),r=a(3919);function l(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var l=void 0===n?{}:n,i=l.forcePrependBaseUrl,o=void 0!==i&&i,s=l.absolute,p=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(o)return t+a;var c=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+c:c}(l,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},1869:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(4996),o=["components"],s={id:"AngleLines",title:"Angle lines",hide_title:!0,sidebar_label:"Angle lines"},p=void 0,c={unversionedId:"axes/AngleLines",id:"version-4.0/axes/AngleLines",isDocsHomePage:!1,title:"Angle lines",description:"Angle lines",source:"@site/versioned_docs/version-4.0/axes/AngleLines.md",sourceDirName:"axes",slug:"/axes/AngleLines",permalink:"/Charba-Wiki/docs/4.0/axes/AngleLines",tags:[],version:"4.0",frontMatter:{id:"AngleLines",title:"Angle lines",hide_title:!0,sidebar_label:"Angle lines"},sidebar:"version-4.0/docs",previous:{title:"Title",permalink:"/Charba-Wiki/docs/4.0/axes/ScaleTitle"},next:{title:"Point labels",permalink:"/Charba-Wiki/docs/4.0/axes/PointLabels"}},d=[{value:"Angle lines",id:"angle-lines",children:[{value:"Scriptable",id:"scriptable",children:[]}]}],g={toc:d};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"angle-lines"},"Angle lines"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/RadialAngleLines.html"},"angle lines")," options are used to configure angled lines that radiate from the center of the chart to the point labels."),(0,l.kt)("img",{src:(0,i.Z)("/img/angleLines.png")}),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The angle lines can be ",(0,l.kt)("strong",{parentName:"p"},"ONLY")," applied to radial axes.",(0,l.kt)("br",null),"\nThese options only apply if ",(0,l.kt)("strong",{parentName:"p"},"display")," is ",(0,l.kt)("strong",{parentName:"p"},"true"),"."))),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/RadialAngleLines.html"},"RadialAngleLines")," provides all ",(0,l.kt)("strong",{parentName:"p"},"set")," and ",(0,l.kt)("strong",{parentName:"p"},"get")," methods to manage the configuration, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables the angle lines\naxis.getAngleLines().setDisplay(true);\n// sets and gets the line width value\naxis.getAngleLines().setLineWidth(2);\n\nint lineWidth = axis.getAngleLines().getLineWidth();\n")),(0,l.kt)("p",null,"Table with options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderDash"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Length and spacing of dashes on grid lines. See ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash"},"MDN"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderDashOffset"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Offset for line dashes. See ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"},"MDN"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Color of angled lines.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"display"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", angle lines are shown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"lineWidth"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Width of angled lines.")))),(0,l.kt)("h3",{id:"scriptable"},"Scriptable"),(0,l.kt)("p",null,"Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in ",(0,l.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section."),(0,l.kt)("p",null,"All scriptable options callbacks will get a ",(0,l.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-scriptable-options-context"},"ScaleContext")," instance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables the angle lines\naxis.getAngleLines().setDisplay(true);\n// sets the option by a callback \naxis.getAngleLines().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,l.kt)("p",null,"The following options can be set by a callback:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderDash"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/BorderDashCallback.html"},"BorderDashCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderDashOffset"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html"},"BorderDashOffsetCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"lineWidth"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int")))))}f.isMDXComponent=!0}}]);