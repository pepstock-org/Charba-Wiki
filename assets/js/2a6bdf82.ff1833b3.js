"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[6637],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(52263),a=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+c:c}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},94782:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=(n(44996),["components"]),l={id:"Building",title:"Build and install",hide_title:!0,sidebar_label:"Build and install"},s=void 0,p={unversionedId:"getting-started/Building",id:"version-4.1/getting-started/Building",isDocsHomePage:!1,title:"Build and install",description:"Building",source:"@site/versioned_docs/version-4.1/getting-started/Building.md",sourceDirName:"getting-started",slug:"/getting-started/Building",permalink:"/Charba-Wiki/docs/4.1/getting-started/Building",tags:[],version:"4.1",frontMatter:{id:"Building",title:"Build and install",hide_title:!0,sidebar_label:"Build and install"},sidebar:"version-4.1/docs",previous:{title:"Requirements",permalink:"/Charba-Wiki/docs/4.1/Requirements"},next:{title:"Getting started",permalink:"/Charba-Wiki/docs/4.1/getting-started/GettingStarted"}},c=[{value:"Building",id:"building",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"building"},"Building"),(0,i.kt)("p",null,"To build ",(0,i.kt)("strong",{parentName:"p"},"Charba"),", you can check out the project and to run ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/blob/4.1/build.xml"},"Ant build.xml"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/blob/4.1/build.xml"},"Ant build.xml")," is able to build the 2 artifacts, related to the 2 distributions available."),(0,i.kt)("p",null,"The first distribution is a ",(0,i.kt)("strong",{parentName:"p"},"Charba")," file without any GWT dependency (but working on GWT anyway), consumable also in other ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure")," frameworks, like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hal/elemento"},"Elemento"),"."),(0,i.kt)("p",null,"To build the project, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"buildBinary")," target."),(0,i.kt)("p",null,"It creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"charba-[version.release].jar")," file in ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder, ready to be included in your project."),(0,i.kt)("p",null,"The second distribution is a ",(0,i.kt)("strong",{parentName:"p"},"Charba")," file with a hard GWT dependency which contains charts widgets and code splitting capabilities."),(0,i.kt)("p",null,"To build the project, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"buildBinaryGwt")," target."),(0,i.kt)("p",null,"It creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"charba-[version.release]-gwt.jar")," file in ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder, ready to be included in your project."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Currently ",(0,i.kt)("strong",{parentName:"p"},"Charba")," is available on ",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.pepstock/charba"},"MVN repository"),"."),(0,i.kt)("p",null,"It is available also on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/releases"},"GitHub releases"),"."),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Apache Maven"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.pepstock</groupId>\n    <artifactId>charba</artifactId>\n    <version>4.1</version>\n    \x3c!-- for GWT --\x3e\n    <version>4.1-gwt</version>\n</dependency>\n")),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"http://ant.apache.org/ivy/"},"Apache Ivy"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<dependency org="org.pepstock" name="charba" rev="4.1"/>\n\x3c!-- for GWT --\x3e\n<dependency org="org.pepstock" name="charba" rev="4.1-gwt"/>\n')),(0,i.kt)("p",null,"To install in your GWT project, both for GWT and for J2CL artifacts, you must the following configuration in your GWT project module configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'...\n<inherits name="org.pepstock.charba.Charba"/>\n...\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," is now leveraging on ",(0,i.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html"},"JSINTEROP"),"."),(0,i.kt)("p",null,"As the name suggests, JsInterop is a way of interoperating Java with JavaScript. It offers a better way of communication between the two using annotations instead of having to write javascript in your classes (using JSNI)."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"GWT compiler options limitations")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Charba")," is using many ",(0,i.kt)("inlineCode",{parentName:"p"},"java.lang.Class")," methods for internal purposes, therefore you can ",(0,i.kt)("strong",{parentName:"p"},"NOT")," use the GWT compiler options ",(0,i.kt)("inlineCode",{parentName:"p"},"-XdisableClassMetadata")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-XnoclassMetadata"),"."))))}d.isMDXComponent=!0}}]);