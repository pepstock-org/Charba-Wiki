(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[9375],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,k=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2135:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),l=["components"],s={id:"CartesianLinearAxes",title:"Cartesian linear",hide_title:!0,sidebar_label:"Cartesian linear"},o={unversionedId:"CartesianLinearAxes",id:"version-3.3/CartesianLinearAxes",isDocsHomePage:!1,title:"Cartesian linear",description:"Cartesian Linear Axes",source:"@site/versioned_docs/version-3.3/CartesianLinearAxes.md",sourceDirName:".",slug:"/CartesianLinearAxes",permalink:"/Charba-Wiki/docs/3.3/CartesianLinearAxes",version:"3.3",sidebar_label:"Cartesian linear",frontMatter:{id:"CartesianLinearAxes",title:"Cartesian linear",hide_title:!0,sidebar_label:"Cartesian linear"},sidebar:"version-3.3/docs",previous:{title:"Cartesian axes",permalink:"/Charba-Wiki/docs/3.3/CartesianAxes"},next:{title:"Cartesian category",permalink:"/Charba-Wiki/docs/3.3/CartesianCategoryAxes"}},c=[{value:"Cartesian Linear Axes",id:"cartesian-linear-axes",children:[]},{value:"Ticks",id:"ticks",children:[{value:"Callback",id:"callback",children:[]},{value:"BuildTicks callback",id:"buildticks-callback",children:[]}]}],u={toc:c};function p(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cartesian-linear-axes"},"Cartesian Linear Axes"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLinearAxis.html"},"linear axis")," is use to chart numerical data. It can be placed on either the x or y axis."),(0,r.kt)("h2",{id:"ticks"},"Ticks"),(0,r.kt)("p",null,"The linear axis provides the following options for configuring ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLinearTick.html"},"tick marks"),". These options extend the ",(0,r.kt)("a",{parentName:"p",href:"CartesianAxes#tick-configuration"},"common tick configuration"),"."),(0,r.kt)("p",null,"Table with options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"beginAtZero"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"if ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", scale will include 0 if it is not already included.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Double.MIN_VALUE")),(0,r.kt)("td",{parentName:"tr",align:null},"User defined minimum number for the scale, overrides minimum value from data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Double.MAX_VALUE")),(0,r.kt)("td",{parentName:"tr",align:null},"User defined maximum number for the scale, overrides maximum value from data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxTicksLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of ticks and gridlines to show.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stepSize"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Double.MIN_VALUE")),(0,r.kt)("td",{parentName:"tr",align:null},"User defined fixed step size for the scale.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"suggestedMax"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Double.MAX_VALUE")),(0,r.kt)("td",{parentName:"tr",align:null},"Adjustment used when calculating the maximum data value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"suggestedMin"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Double.MIN_VALUE")),(0,r.kt)("td",{parentName:"tr",align:null},"Adjustment used when calculating the minimum data value.")))),(0,r.kt)("p",null,"Given the number of axis range settings, it is important to understand how they all interact with each other."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"suggestedMax")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"suggestedMin")," settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behavior."),(0,r.kt)("p",null,"In contrast to the ",(0,r.kt)("inlineCode",{parentName:"p"},"suggested*")," settings, the ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," settings set explicit ends to the axes. When these are set, some data points may not be visible."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"stepSize")," set, the scale ticks will be enumerated by multiple of ",(0,r.kt)("inlineCode",{parentName:"p"},"stepSize"),", having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm."),(0,r.kt)("p",null,"The further customization of ticks, a callback is provided."),(0,r.kt)("h3",{id:"callback"},"Callback"),(0,r.kt)("p",null,"It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration."),(0,r.kt)("p",null,"To apply a custom callback, you can set a ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/TickCallback.html"},"TickCallback")," instance to the axis options, as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'axis.getTicks().setCallback(new TickCallback() {\n\n   /**\n    * Changes the tick marks to include information about the data type.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param value value of tick\n    * @param index index of tick\n    * @param values list of all tick values\n    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.\n    */\n   public String onCallback(Axis axis, double value, int index, List<Double> values){\n      // add $\n      return "$" + value;\n   }\n         \n});\n')),(0,r.kt)("h3",{id:"buildticks-callback"},"BuildTicks callback"),(0,r.kt)("p",null,"This callback can be used to change parameters in the scale during ticks building. To implement this callback, you must implement ",(0,r.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/AxisBuildTicksCallback.html"},"this interface"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface AxisBuildTicksCallback {\n\n   /**\n    * Callback that runs before ticks are created.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeBuildTicks(Axis axis, AxisItem item);\n\n   /**\n     * Callback that runs after ticks are created. Useful for filtering ticks.\n     * \n     * @param axis axis instance where this callback as been defined\n     * @param item axis item instance\n     * @param ticks list of created ticks\n     */\n    void onAfterBuildTicks(Axis axis, AxisItem item, List<Double> ticks);\n\n}\n")))}p.isMDXComponent=!0}}]);