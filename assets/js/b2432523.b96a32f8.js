(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[5849],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),h=a,d=f["".concat(l,".").concat(h)]||f[h]||u[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3706:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"Extensions",title:"Extensions",hide_title:!0,sidebar_label:"Introduction"},s={unversionedId:"extensions/Extensions",id:"extensions/Extensions",isDocsHomePage:!1,title:"Extensions",description:"Extensions",source:"@site/docs/extensions/Extensions.md",sourceDirName:"extensions",slug:"/extensions/Extensions",permalink:"/Charba-Wiki/docs/extensions/Extensions",version:"current",sidebar_label:"Introduction",frontMatter:{id:"Extensions",title:"Extensions",hide_title:!0,sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Controllers",permalink:"/Charba-Wiki/docs/Controllers"},next:{title:"Annotation plugin",permalink:"/Charba-Wiki/docs/extensions/Annotation"}},l=[{value:"Extensions",id:"extensions",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"extensions"},"Extensions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable some available plugins for ",(0,o.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", with all their capabilities."),(0,o.kt)("p",null,"The plugins are ",(0,o.kt)("em",{parentName:"p"},"native javascript")," implementation and ",(0,o.kt)("strong",{parentName:"p"},"Charba")," provides the wrapper in order to be able to use them."),(0,o.kt)("p",null,"Currently the extensions, ready to use inside ",(0,o.kt)("strong",{parentName:"p"},"Charba"),", are the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"Annotation"},"Annotation")," which can add annotations (like boxes, lines, points or ellipses) on a chart instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"DataLabels"},"DataLabels")," which is a highly customizable plugin that displays labels on data for any type of charts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"Labels"},"Labels")," which is a light weight plugin to display labels on pie, doughnut and polar area chart. Original PieceLabel."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"Zoom"},"Zoom")," which is a light weight plugin to zoom and pan a chart.")),(0,o.kt)("p",null,"In this way, the user doesn't have to take care about compatibility of different versions because they are provided as components of ",(0,o.kt)("strong",{parentName:"p"},"Charba")," and they can be activate on demand."))}p.isMDXComponent=!0}}]);