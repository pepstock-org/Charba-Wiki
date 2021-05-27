(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[6121],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,f=d["".concat(u,".").concat(g)]||d[g]||s[g]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,u=i.absolute,p=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+c:c}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},7722:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(4996),{id:"Building",title:"Build and install",hide_title:!0,sidebar_label:"Build and install"}),l={unversionedId:"getting-started/Building",id:"getting-started/Building",isDocsHomePage:!1,title:"Build and install",description:"Building",source:"@site/docs/getting-started/Building.md",sourceDirName:"getting-started",slug:"/getting-started/Building",permalink:"/Charba-Wiki/docs/getting-started/Building",version:"current",sidebar_label:"Build and install",frontMatter:{id:"Building",title:"Build and install",hide_title:!0,sidebar_label:"Build and install"},sidebar:"docs",previous:{title:"Requirements",permalink:"/Charba-Wiki/docs/Requirements"},next:{title:"Getting Started",permalink:"/Charba-Wiki/docs/getting-started/GettingStarted"}},u=[{value:"Building",id:"building",children:[]},{value:"Installation",id:"installation",children:[]}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"building"},"Building"),(0,i.kt)("p",null,"To build ",(0,i.kt)("strong",{parentName:"p"},"Charba"),", you can check out the project and to run ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/blob/4.0/build.xml"},"Ant build.xml"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/blob/4.0/build.xml"},"Ant build.xml")," is able to build the 2 artifacts, related to the 2 distributions available."),(0,i.kt)("p",null,"The first distribution is a ",(0,i.kt)("strong",{parentName:"p"},"Charba")," file without any GWT dependency (but working on GWT anyway), consumable also in other ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure")," frameworks, like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hal/elemento"},"Elemento"),"."),(0,i.kt)("p",null,"To build the project, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"buildBinary")," target."),(0,i.kt)("p",null,"It creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"charba-[version.release].jar")," file in ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder, ready to be included in your project."),(0,i.kt)("p",null,"The second distribution is a ",(0,i.kt)("strong",{parentName:"p"},"Charba")," file with a hard GWT dependency which contains charts widgets and code splitting capabilities."),(0,i.kt)("p",null,"To build the project, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"buildBinaryGwt")," target."),(0,i.kt)("p",null,"It creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"charba-[version.release]-gwt.jar")," file in ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder, ready to be included in your project."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Currently ",(0,i.kt)("strong",{parentName:"p"},"Charba")," is available on ",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.pepstock/charba"},"MVN repository"),"."),(0,i.kt)("p",null,"It is available also on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/releases"},"GitHub releases"),"."),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Apache Maven"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.pepstock</groupId>\n    <artifactId>charba</artifactId>\n    <version>4.0</version>\n    \x3c!-- for GWT --\x3e\n    <version>4.0-gwt</version>\n</dependency>\n")),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"http://ant.apache.org/ivy/"},"Apache Ivy"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<dependency org="org.pepstock" name="charba" rev="4.0"/>\n\x3c!-- for GWT --\x3e\n<dependency org="org.pepstock" name="charba" rev="4.0-gwt"/>\n')),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"https://gradle.org/"},"Gradle"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"compile group: 'org.pepstock', name: 'charba', version: '4.0'\n\ncompile group: 'org.pepstock', name: 'charba', version: '4.0-gwt'\n")),(0,i.kt)("p",null,"To install in your GWT project, both for GWT and for J2CL artifacts, you must the following configuration in your GWT project module configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'...\n<inherits name="org.pepstock.charba.Charba"/>\n...\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," is now leveraging on ",(0,i.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html"},"JSINTEROP"),"."),(0,i.kt)("p",null,"As the name suggests, JsInterop is a way of interoperating Java with JavaScript. It offers a better way of communication between the two using annotations instead of having to write javascript in your classes (using JSNI)."))}c.isMDXComponent=!0}}]);