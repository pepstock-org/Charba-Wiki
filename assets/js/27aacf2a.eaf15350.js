(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{209:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),o=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=o(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=o(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return a?i.a.createElement(m,c(c({ref:t},s),{},{components:a})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return o}));var n=a(3),i=a(8),r=(a(0),a(209)),l={id:"CartesianLinearAxes",title:"Cartesian linear",hide_title:!0,sidebar_label:"Cartesian linear"},c={unversionedId:"CartesianLinearAxes",id:"version-3.3/CartesianLinearAxes",isDocsHomePage:!1,title:"Cartesian linear",description:"Cartesian Linear Axes",source:"@site/versioned_docs/version-3.3/CartesianLinearAxes.md",sourceDirName:".",slug:"/CartesianLinearAxes",permalink:"/Charba-Wiki/docs/3.3/CartesianLinearAxes",version:"3.3",sidebar_label:"Cartesian linear",frontMatter:{id:"CartesianLinearAxes",title:"Cartesian linear",hide_title:!0,sidebar_label:"Cartesian linear"},sidebar:"version-3.3/docs",previous:{title:"Cartesian axes",permalink:"/Charba-Wiki/docs/3.3/CartesianAxes"},next:{title:"Cartesian category",permalink:"/Charba-Wiki/docs/3.3/CartesianCategoryAxes"}},b=[{value:"Cartesian Linear Axes",id:"cartesian-linear-axes",children:[]},{value:"Ticks",id:"ticks",children:[{value:"Callback",id:"callback",children:[]},{value:"BuildTicks callback",id:"buildticks-callback",children:[]}]}],s={toc:b};function o(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cartesian-linear-axes"},"Cartesian Linear Axes"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLinearAxis.html"},"linear axis")," is use to chart numerical data. It can be placed on either the x or y axis."),Object(r.b)("h2",{id:"ticks"},"Ticks"),Object(r.b)("p",null,"The linear axis provides the following options for configuring ",Object(r.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLinearTick.html"},"tick marks"),". These options extend the ",Object(r.b)("a",{parentName:"p",href:"CartesianAxes#tick-configuration"},"common tick configuration"),"."),Object(r.b)("p",null,"Table with options:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"beginAtZero"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},"if ",Object(r.b)("inlineCode",{parentName:"td"},"true"),", scale will include 0 if it is not already included.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"min"),Object(r.b)("td",{parentName:"tr",align:null},"double"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Double.MIN_VALUE")),Object(r.b)("td",{parentName:"tr",align:null},"User defined minimum number for the scale, overrides minimum value from data.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"max"),Object(r.b)("td",{parentName:"tr",align:null},"double"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Double.MAX_VALUE")),Object(r.b)("td",{parentName:"tr",align:null},"User defined maximum number for the scale, overrides maximum value from data.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"maxTicksLimit"),Object(r.b)("td",{parentName:"tr",align:null},"int"),Object(r.b)("td",{parentName:"tr",align:null},"11"),Object(r.b)("td",{parentName:"tr",align:null},"Maximum number of ticks and gridlines to show.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"stepSize"),Object(r.b)("td",{parentName:"tr",align:null},"double"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Double.MIN_VALUE")),Object(r.b)("td",{parentName:"tr",align:null},"User defined fixed step size for the scale.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"suggestedMax"),Object(r.b)("td",{parentName:"tr",align:null},"double"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Double.MAX_VALUE")),Object(r.b)("td",{parentName:"tr",align:null},"Adjustment used when calculating the maximum data value.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"suggestedMin"),Object(r.b)("td",{parentName:"tr",align:null},"double"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Double.MIN_VALUE")),Object(r.b)("td",{parentName:"tr",align:null},"Adjustment used when calculating the minimum data value.")))),Object(r.b)("p",null,"Given the number of axis range settings, it is important to understand how they all interact with each other."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"suggestedMax")," and ",Object(r.b)("inlineCode",{parentName:"p"},"suggestedMin")," settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behavior."),Object(r.b)("p",null,"In contrast to the ",Object(r.b)("inlineCode",{parentName:"p"},"suggested*")," settings, the ",Object(r.b)("inlineCode",{parentName:"p"},"min")," and ",Object(r.b)("inlineCode",{parentName:"p"},"max")," settings set explicit ends to the axes. When these are set, some data points may not be visible."),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"stepSize")," set, the scale ticks will be enumerated by multiple of ",Object(r.b)("inlineCode",{parentName:"p"},"stepSize"),", having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm."),Object(r.b)("p",null,"The further customization of ticks, a callback is provided."),Object(r.b)("h3",{id:"callback"},"Callback"),Object(r.b)("p",null,"It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration."),Object(r.b)("p",null,"To apply a custom callback, you can set a ",Object(r.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/TickCallback.html"},"TickCallback")," instance to the axis options, as following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'axis.getTicks().setCallback(new TickCallback() {\n\n   /**\n    * Changes the tick marks to include information about the data type.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param value value of tick\n    * @param index index of tick\n    * @param values list of all tick values\n    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.\n    */\n   public String onCallback(Axis axis, double value, int index, List<Double> values){\n      // add $\n      return "$" + value;\n   }\n         \n});\n')),Object(r.b)("h3",{id:"buildticks-callback"},"BuildTicks callback"),Object(r.b)("p",null,"This callback can be used to change parameters in the scale during ticks building. To implement this callback, you must implement ",Object(r.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/AxisBuildTicksCallback.html"},"this interface"),". "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public interface AxisBuildTicksCallback {\n\n   /**\n    * Callback that runs before ticks are created.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeBuildTicks(Axis axis, AxisItem item);\n\n   /**\n     * Callback that runs after ticks are created. Useful for filtering ticks.\n     * \n     * @param axis axis instance where this callback as been defined\n     * @param item axis item instance\n     * @param ticks list of created ticks\n     */\n    void onAfterBuildTicks(Axis axis, AxisItem item, List<Double> ticks);\n\n}\n")))}o.isMDXComponent=!0}}]);