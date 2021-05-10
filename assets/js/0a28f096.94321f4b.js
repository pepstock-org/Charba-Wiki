(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{209:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,f=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return a?r.a.createElement(f,b(b({ref:t},i),{},{components:a})):r.a.createElement(f,b({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var i=2;i<l;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o}));var n=a(16),r=a(211);function l(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var l=void 0===n?{}:n,o=l.forcePrependBaseUrl,b=void 0!==o&&o,c=l.absolute,i=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(b)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+p:p}(l,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},211:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),l=(a(0),a(209)),o=a(210),b={id:"PointLabels",title:"Point labels",hide_title:!0,sidebar_label:"Point labels"},c={unversionedId:"axes/PointLabels",id:"axes/PointLabels",isDocsHomePage:!1,title:"Point labels",description:"Point Labels",source:"@site/docs/axes/PointLabels.md",sourceDirName:"axes",slug:"/axes/PointLabels",permalink:"/docs/axes/PointLabels",version:"current",sidebar_label:"Point labels",frontMatter:{id:"PointLabels",title:"Point labels",hide_title:!0,sidebar_label:"Point labels"},sidebar:"docs",previous:{title:"Angle lines",permalink:"/docs/axes/AngleLines"},next:{title:"Locale",permalink:"/docs/intl/Locale"}},i=[{value:"Point Labels",id:"point-labels",children:[{value:"Scriptable",id:"scriptable",children:[]},{value:"Callback",id:"callback",children:[]}]}],p={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"point-labels"},"Point Labels"),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/RadialPointLabels.html"},"point labels")," options are used to configure the point labels that are shown on the perimeter of the scale. They can be found in the pointLabels sub options object.\nNote "),Object(l.b)("img",{src:Object(o.a)("/img/pointLabels.png")}),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"The point labels can be ",Object(l.b)("strong",{parentName:"p"},"ONLY")," applied to radial axes.",Object(l.b)("br",null),"\nThese options only apply if ",Object(l.b)("strong",{parentName:"p"},"display")," is ",Object(l.b)("strong",{parentName:"p"},"true"),"."))),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/RadialPointLabels.html"},"RadialPointLabels")," provides all ",Object(l.b)("strong",{parentName:"p"},"set")," and ",Object(l.b)("strong",{parentName:"p"},"get")," methods to manage the configuration, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables point labels\naxis.getPointLabels().setDisplay(true);\n// sets and gets the color value\naxis.getPointLabels().setColor(HtmlColor.RED);\n\nIsColor color = axis.getPointLabels().getColor();\n")),Object(l.b)("p",null,"Table with options:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Scriptable"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backdropColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Background color of the point label.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backdropPadding"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The padding of label backdrop.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../configuration/Commons#padding"},"padding documentation")," for more details.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"display"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", point labels are shown.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"color"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Color of point labels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"font"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/options/Font.html"},"Font")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Font of point labels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"padding"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Padding between chart and point labels, in pixel.")))),Object(l.b)("p",null,"The further customization of point labels, a ",Object(l.b)("a",{parentName:"p",href:"#callback"},"callback")," is provided."),Object(l.b)("h3",{id:"scriptable"},"Scriptable"),Object(l.b)("p",null,"Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in ",Object(l.b)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),Object(l.b)("p",null,"All scriptable options callbacks will get a ",Object(l.b)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-scriptable-options-context"},"ScaleContext")," instance."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables point labels\naxis.getPointLabels().setDisplay(true);\n// sets the option by a callback \naxis.getPointLabels().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),Object(l.b)("p",null,"The following options can be set by a callback:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Callback"),Object(l.b)("th",{parentName:"tr",align:"left"},"Returned types"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backdropColor"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"color"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"font"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"padding"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/SimplePaddingCallback.html"},"SimplePaddingCallback")),Object(l.b)("td",{parentName:"tr",align:"left"},"int")))),Object(l.b)("h3",{id:"callback"},"Callback"),Object(l.b)("p",null,"Callback implementation can transform data labels to point labels. The default implementation simply returns the current string."),Object(l.b)("p",null,"To apply an own callback, you can set a ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/PointLabelCallback.html"},"PointLabelCallback")," instance to the axis options, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables point labels\naxis.getPointLabels().setDisplay(true);\n// sets callback\naxis.getPointLabels().setCallBack(new PointLabelCallback(){\n\n   /**\n    * Callback function to transform data labels to point labels. The default implementation simply returns the current string.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item label of current label\n    * @param index index of the label\n    * @return new label to apply to point label\n    */\n    @Override\n    public String onCallback(Axis axis, String item, int index){\n      // logic\n      return item;\n   }\n         \n});\n")))}s.isMDXComponent=!0}}]);