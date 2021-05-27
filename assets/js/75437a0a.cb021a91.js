(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[6865],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(a),m=r,d=k["".concat(c,".").concat(m)]||k[m]||u[m]||i;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5991:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l={id:"CartesianCategoryAxes",title:"Cartesian category",hide_title:!0,sidebar_label:"Cartesian category"},o={unversionedId:"CartesianCategoryAxes",id:"version-3.3/CartesianCategoryAxes",isDocsHomePage:!1,title:"Cartesian category",description:"Cartesian Category Axes",source:"@site/versioned_docs/version-3.3/CartesianCategoryAxes.md",sourceDirName:".",slug:"/CartesianCategoryAxes",permalink:"/Charba-Wiki/docs/3.3/CartesianCategoryAxes",version:"3.3",sidebar_label:"Cartesian category",frontMatter:{id:"CartesianCategoryAxes",title:"Cartesian category",hide_title:!0,sidebar_label:"Cartesian category"},sidebar:"version-3.3/docs",previous:{title:"Cartesian linear",permalink:"/Charba-Wiki/docs/3.3/CartesianLinearAxes"},next:{title:"Cartesian logarithmic",permalink:"/Charba-Wiki/docs/3.3/CartesianLogarithmicAxes"}},c=[{value:"Cartesian Category Axes",id:"cartesian-category-axes",children:[]},{value:"Ticks",id:"ticks",children:[{value:"Callback",id:"callback",children:[]},{value:"BuildTicks callback",id:"buildticks-callback",children:[]}]}],s={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cartesian-category-axes"},"Cartesian Category Axes"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianCategoryAxis.html"},"category axis")," will draw the labels from one of the label arrays included in the chart data."),(0,i.kt)("h2",{id:"ticks"},"Ticks"),(0,i.kt)("p",null,"The category axis provides the following options for configuring ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianCategoryTick.html"},"tick marks"),". These options extend the ",(0,i.kt)("a",{parentName:"p",href:"CartesianAxes#tick-configuration"},"common tick configuration"),"."),(0,i.kt)("p",null,"Table with options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"labels"),(0,i.kt)("td",{parentName:"tr",align:null},"String[]"),(0,i.kt)("td",{parentName:"tr",align:null},"[]"),(0,i.kt)("td",{parentName:"tr",align:null},"An array of labels to display.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"min"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The minimum item to display.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum item to display.")))),(0,i.kt)("p",null,"For both the ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," properties, the value must be in the ",(0,i.kt)("inlineCode",{parentName:"p"},"labels")," array."),(0,i.kt)("p",null,"The further customization of ticks, a callback is provided."),(0,i.kt)("h3",{id:"callback"},"Callback"),(0,i.kt)("p",null,"It is also common to want to change the tick marks to include information about the data type. "),(0,i.kt)("p",null,"To apply a custom callback, you can set a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/CategoryTickCallback.html"},"CategoryTickCallback")," instance to the axis options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"axis.getTicks().setCallback(new CategoryTickCallback() {\n\n   /**\n    * Changes the tick marks to include information about the data type.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param value value of tick\n    * @param index index of tick\n    * @param values list of all tick values\n    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.\n    */\n   public String onCallback(Axis axis, String value, int index, List<String> values){\n      // add a label\n      return value + myLabel;\n   }\n         \n});\n")),(0,i.kt)("h3",{id:"buildticks-callback"},"BuildTicks callback"),(0,i.kt)("p",null,"This callback can be used to change parameters in the scale during ticks building. To implement this callback, you must implement ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/CategoryAxisBuildTicksCallback.html"},"this interface"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface CategoryAxisBuildTicksCallback {\n\n   /**\n    * Callback that runs before ticks are created.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    */\n   void onBeforeBuildTicks(Axis axis, AxisItem item);\n\n   /**\n    * Callback that runs after ticks are created. Useful for filtering ticks.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item axis item instance\n    * @param ticks list of created ticks\n    */\n    void onAfterBuildTicks(Axis axis, AxisItem item, List<String> ticks);\n\n}\n")))}p.isMDXComponent=!0}}]);