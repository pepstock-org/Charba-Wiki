"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[81100],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return a?i.createElement(k,l(l({ref:t},p),{},{components:a})):i.createElement(k,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var i=a(87462),n=(a(67294),a(3905)),r=a(44996);const l={id:"CartesianLogarithmicAxes",title:"Cartesian logarithmic",hide_title:!0,sidebar_label:"Cartesian logarithmic"},o=void 0,c={unversionedId:"CartesianLogarithmicAxes",id:"version-3.3/CartesianLogarithmicAxes",title:"Cartesian logarithmic",description:"",source:"@site/versioned_docs/version-3.3/CartesianLogarithmicAxes.md",sourceDirName:".",slug:"/CartesianLogarithmicAxes",permalink:"/Charba-Wiki/docs/3.3/CartesianLogarithmicAxes",draft:!1,tags:[],version:"3.3",frontMatter:{id:"CartesianLogarithmicAxes",title:"Cartesian logarithmic",hide_title:!0,sidebar_label:"Cartesian logarithmic"},sidebar:"version-3.3/docs",previous:{title:"Cartesian category",permalink:"/Charba-Wiki/docs/3.3/CartesianCategoryAxes"},next:{title:"Cartesian time",permalink:"/Charba-Wiki/docs/3.3/CartesianTimeAxes"}},s={},p=[{value:"Cartesian Logarithmic Axes",id:"cartesian-logarithmic-axes",level:2},{value:"Ticks",id:"ticks",level:2},{value:"Callback",id:"callback",level:3},{value:"BuildTicks callback",id:"buildticks-callback",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"cartesian-logarithmic-axes"},"Cartesian Logarithmic Axes"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLogarithmicAxis.html"},"logarithmic axis")," is use to chart numerical data. It can be placed on either the x or y axis. As the name suggests, logarithmic interpolation is used to determine where a value lies on the axis."),(0,n.kt)("img",{src:(0,r.Z)("/img/logScale.png")}),(0,n.kt)("h2",{id:"ticks"},"Ticks"),(0,n.kt)("p",null,"The logarithmic axis provides the following options for configuring ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLogarithmicTick.html"},"tick marks"),". These options extend the ",(0,n.kt)("a",{parentName:"p",href:"CartesianAxes#tick-configuration"},"common tick configuration"),"."),(0,n.kt)("p",null,"Table with options:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"min"),(0,n.kt)("td",{parentName:"tr",align:null},"double"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Double.MIN_VALUE")),(0,n.kt)("td",{parentName:"tr",align:null},"User defined minimum number for the scale, overrides minimum value from data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"max"),(0,n.kt)("td",{parentName:"tr",align:null},"double"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Double.MAX_VALUE")),(0,n.kt)("td",{parentName:"tr",align:null},"User defined maximum number for the scale, overrides maximum value from data.")))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"max")," settings set explicit ends to the axes. When these are set, some data points may not be visible."),(0,n.kt)("p",null,"The further customization of ticks, a callback is provided."),(0,n.kt)("h3",{id:"callback"},"Callback"),(0,n.kt)("p",null,"It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration."),(0,n.kt)("p",null,"To apply a custom callback, you can set a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/TickCallback.html"},"TickCallback")," instance to the axis options, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'axis.getTicks().setCallback(new TickCallback() {\n\n   /**\n    * Changes the tick marks to include information about the data type.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param value value of tick\n    * @param index index of tick\n    * @param values list of all tick values\n    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.\n    */\n   public String onCallback(Axis axis, double value, int index, List<Double> values){\n      // add $\n      return "$" + value;\n   }\n         \n});\n')),(0,n.kt)("h3",{id:"buildticks-callback"},"BuildTicks callback"),(0,n.kt)("p",null,"This callback can be used to change parameters in the scale during ticks building. To implement this callback, you must implement ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/AxisBuildTicksCallback.html"},"this interface"),". "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface AxisBuildTicksCallback {\n\n   /**\n    * Callback that runs before ticks are created.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeBuildTicks(Axis axis, AxisItem item);\n\n   /**\n     * Callback that runs after ticks are created. Useful for filtering ticks.\n     * \n     * @param axis axis instance where this callback as been defined\n     * @param item axis item instance\n     * @param ticks list of created ticks\n     */\n    void onAfterBuildTicks(Axis axis, AxisItem item, List<Double> ticks);\n\n}\n")))}u.isMDXComponent=!0}}]);