"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[1100],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=i,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13919:function(e,t,a){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return i}})},44996:function(e,t,a){a.d(t,{C:function(){return r},Z:function(){return l}});var n=a(52263),i=a(13919);function r(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,l=r.forcePrependBaseUrl,o=void 0!==l&&l,c=r.absolute,s=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if((0,i.b)(a))return a;if(o)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+u:u}(r,a,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},44158:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=a(44996),o=["components"],c={id:"CartesianLogarithmicAxes",title:"Cartesian logarithmic",hide_title:!0,sidebar_label:"Cartesian logarithmic"},s=void 0,u={unversionedId:"CartesianLogarithmicAxes",id:"version-3.3/CartesianLogarithmicAxes",isDocsHomePage:!1,title:"Cartesian logarithmic",description:"Cartesian Logarithmic Axes",source:"@site/versioned_docs/version-3.3/CartesianLogarithmicAxes.md",sourceDirName:".",slug:"/CartesianLogarithmicAxes",permalink:"/Charba-Wiki/docs/3.3/CartesianLogarithmicAxes",tags:[],version:"3.3",frontMatter:{id:"CartesianLogarithmicAxes",title:"Cartesian logarithmic",hide_title:!0,sidebar_label:"Cartesian logarithmic"},sidebar:"version-3.3/docs",previous:{title:"Cartesian category",permalink:"/Charba-Wiki/docs/3.3/CartesianCategoryAxes"},next:{title:"Cartesian time",permalink:"/Charba-Wiki/docs/3.3/CartesianTimeAxes"}},p=[{value:"Cartesian Logarithmic Axes",id:"cartesian-logarithmic-axes",children:[],level:2},{value:"Ticks",id:"ticks",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"BuildTicks callback",id:"buildticks-callback",children:[],level:3}],level:2}],m={toc:p};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cartesian-logarithmic-axes"},"Cartesian Logarithmic Axes"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLogarithmicAxis.html"},"logarithmic axis")," is use to chart numerical data. It can be placed on either the x or y axis. As the name suggests, logarithmic interpolation is used to determine where a value lies on the axis."),(0,r.kt)("img",{src:(0,l.Z)("/img/logScale.png")}),(0,r.kt)("h2",{id:"ticks"},"Ticks"),(0,r.kt)("p",null,"The logarithmic axis provides the following options for configuring ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLogarithmicTick.html"},"tick marks"),". These options extend the ",(0,r.kt)("a",{parentName:"p",href:"CartesianAxes#tick-configuration"},"common tick configuration"),"."),(0,r.kt)("p",null,"Table with options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Double.MIN_VALUE")),(0,r.kt)("td",{parentName:"tr",align:null},"User defined minimum number for the scale, overrides minimum value from data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Double.MAX_VALUE")),(0,r.kt)("td",{parentName:"tr",align:null},"User defined maximum number for the scale, overrides maximum value from data.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," settings set explicit ends to the axes. When these are set, some data points may not be visible."),(0,r.kt)("p",null,"The further customization of ticks, a callback is provided."),(0,r.kt)("h3",{id:"callback"},"Callback"),(0,r.kt)("p",null,"It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration."),(0,r.kt)("p",null,"To apply a custom callback, you can set a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/TickCallback.html"},"TickCallback")," instance to the axis options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'axis.getTicks().setCallback(new TickCallback() {\n\n   /**\n    * Changes the tick marks to include information about the data type.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param value value of tick\n    * @param index index of tick\n    * @param values list of all tick values\n    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.\n    */\n   public String onCallback(Axis axis, double value, int index, List<Double> values){\n      // add $\n      return "$" + value;\n   }\n         \n});\n')),(0,r.kt)("h3",{id:"buildticks-callback"},"BuildTicks callback"),(0,r.kt)("p",null,"This callback can be used to change parameters in the scale during ticks building. To implement this callback, you must implement ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/AxisBuildTicksCallback.html"},"this interface"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface AxisBuildTicksCallback {\n\n   /**\n    * Callback that runs before ticks are created.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeBuildTicks(Axis axis, AxisItem item);\n\n   /**\n     * Callback that runs after ticks are created. Useful for filtering ticks.\n     * \n     * @param axis axis instance where this callback as been defined\n     * @param item axis item instance\n     * @param ticks list of created ticks\n     */\n    void onAfterBuildTicks(Axis axis, AxisItem item, List<Double> ticks);\n\n}\n")))}d.isMDXComponent=!0}}]);