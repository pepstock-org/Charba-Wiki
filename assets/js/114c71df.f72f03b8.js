(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[4667],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(r),f=a,m=h["".concat(s,".").concat(f)]||h[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6316:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={},s={unversionedId:"Extensions",id:"version-3.3/Extensions",isDocsHomePage:!1,title:"Extensions",description:"Charba provides out of the box the feature to enable some available plugins for Chart.JS, with all their capabilities.",source:"@site/versioned_docs/version-3.3/Extensions.md",sourceDirName:".",slug:"/Extensions",permalink:"/Charba-Wiki/docs/3.3/Extensions",version:"3.3",frontMatter:{}},p=[],c={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable some available plugins for ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", with all their capabilities."),(0,o.kt)("p",null,"The plugins are ",(0,o.kt)("em",{parentName:"p"},"native javascript")," implementation and ",(0,o.kt)("strong",{parentName:"p"},"Charba")," provides the wrapper in order to be able to use them."),(0,o.kt)("p",null,"Currently the extensions, ready to use inside ",(0,o.kt)("strong",{parentName:"p"},"Charba"),", are the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/chartjs/chartjs-plugin-datalabels"},"DataLabels")," which is a highly customizable plugin that displays labels on data for any type of charts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/emn178/chartjs-plugin-labels"},"Labels")," which is a light weight plugin to display labels on pie, doughnut and polar area chart. Original PieceLabel.")),(0,o.kt)("p",null,"In this way, the user doesn't have to take care about compatibility of different versions because they are provided as components of ",(0,o.kt)("strong",{parentName:"p"},"Charba")," and they can be activate on demand."),(0,o.kt)("p",null,"It is ",(0,o.kt)("strong",{parentName:"p"},"NOT necessary")," to import these plugins as external ones (as described ",(0,o.kt)("a",{parentName:"p",href:"Plugins#importing-existing-chartjs-plugins"},"here"),") anymore."),(0,o.kt)("p",null,"See the wiki page for each plugin which is explaining how to activate them."))}u.isMDXComponent=!0}}]);