(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),i=(n(0),n(209)),o=(n(210),{id:"Building",title:"Build and install",hide_title:!0,sidebar_label:"Build and install"}),c={unversionedId:"getting-started/Building",id:"getting-started/Building",isDocsHomePage:!1,title:"Build and install",description:"Building",source:"@site/docs/getting-started/Building.md",sourceDirName:"getting-started",slug:"/getting-started/Building",permalink:"/Charba-Wiki/docs/getting-started/Building",version:"current",sidebar_label:"Build and install",frontMatter:{id:"Building",title:"Build and install",hide_title:!0,sidebar_label:"Build and install"},sidebar:"docs",previous:{title:"Requirements",permalink:"/Charba-Wiki/docs/Requirements"},next:{title:"Getting Started",permalink:"/Charba-Wiki/docs/getting-started/GettingStarted"}},l=[{value:"Building",id:"building",children:[]},{value:"Installation",id:"installation",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"building"},"Building"),Object(i.b)("p",null,"To build ",Object(i.b)("strong",{parentName:"p"},"Charba"),", you can check out the project and to run ",Object(i.b)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/blob/3.3/build.xml"},"Ant build.xml"),"."),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/blob/3.3/build.xml"},"Ant build.xml")," is able to build the 2 artifacts, related to the 2 distributions available."),Object(i.b)("p",null,"The first distribution is a ",Object(i.b)("strong",{parentName:"p"},"Charba")," file without any GWT dependency (but working on GWT anyway), consumable also in other ",Object(i.b)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure")," frameworks, like ",Object(i.b)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hal/elemento"},"Elemento"),"."),Object(i.b)("p",null,"To build the project, execute ",Object(i.b)("inlineCode",{parentName:"p"},"buildBinary")," target."),Object(i.b)("p",null,"It creates a ",Object(i.b)("inlineCode",{parentName:"p"},"charba-[version.release].jar")," file in ",Object(i.b)("inlineCode",{parentName:"p"},"dist")," folder, ready to be included in your project."),Object(i.b)("p",null,"The second distribution is a ",Object(i.b)("strong",{parentName:"p"},"Charba")," file with a hard GWT dependency which contains charts widgets and code splitting capabilities."),Object(i.b)("p",null,"To build the project, execute ",Object(i.b)("inlineCode",{parentName:"p"},"buildBinaryGwt")," target."),Object(i.b)("p",null,"It creates a ",Object(i.b)("inlineCode",{parentName:"p"},"charba-[version.release]-gwt.jar")," file in ",Object(i.b)("inlineCode",{parentName:"p"},"dist")," folder, ready to be included in your project."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Currently ",Object(i.b)("strong",{parentName:"p"},"Charba")," is available on ",Object(i.b)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.pepstock/charba"},"MVN repository"),"."),Object(i.b)("p",null,"It is available also on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/releases"},"GitHub releases"),"."),Object(i.b)("p",null,"If you are using ",Object(i.b)("a",{parentName:"p",href:"https://maven.apache.org/"},"Apache Maven"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.pepstock</groupId>\n    <artifactId>charba</artifactId>\n    <version>3.3</version>\n    \x3c!-- for GWT --\x3e\n    <version>3.3-gwt</version>\n</dependency>\n")),Object(i.b)("p",null,"If you are using ",Object(i.b)("a",{parentName:"p",href:"http://ant.apache.org/ivy/"},"Apache Ivy"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<dependency org="org.pepstock" name="charba" rev="3.3"/>\n\x3c!-- for GWT --\x3e\n<dependency org="org.pepstock" name="charba" rev="3.3-gwt"/>\n')),Object(i.b)("p",null,"If you are using ",Object(i.b)("a",{parentName:"p",href:"https://gradle.org/"},"Gradle"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},"compile group: 'org.pepstock', name: 'charba', version: '3.3'\n\ncompile group: 'org.pepstock', name: 'charba', version: '3.3-gwt'\n")),Object(i.b)("p",null,"To install in your GWT project, both for GWT and for J2CL artifacts, you must the following configuration in your GWT project module configuration:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'...\n<inherits name="org.pepstock.charba.Charba"/>\n...\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Charba")," is now leveraging on ",Object(i.b)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html"},"JSINTEROP"),"."),Object(i.b)("p",null,"As the name suggests, JsInterop is a way of interoperating Java with JavaScript. It offers a better way of communication between the two using annotations instead of having to write javascript in your classes (using JSNI)."))}b.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,g=p["".concat(o,".").concat(d)]||p[d]||s[d]||i;return n?a.a.createElement(g,c(c({ref:t},u),{},{components:n})):a.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},210:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(16),a=n(211);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},211:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);