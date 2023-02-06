"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[35924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},56620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));n(44996);const i={id:"Building",title:"Build and install",hide_title:!0,sidebar_label:"Build and install"},o=void 0,l={unversionedId:"getting-started/Building",id:"version-5.7/getting-started/Building",title:"Build and install",description:"Building",source:"@site/versioned_docs/version-5.7/getting-started/Building.md",sourceDirName:"getting-started",slug:"/getting-started/Building",permalink:"/Charba-Wiki/docs/5.7/getting-started/Building",draft:!1,tags:[],version:"5.7",frontMatter:{id:"Building",title:"Build and install",hide_title:!0,sidebar_label:"Build and install"},sidebar:"docs",previous:{title:"Requirements",permalink:"/Charba-Wiki/docs/5.7/Requirements"},next:{title:"Getting started",permalink:"/Charba-Wiki/docs/5.7/getting-started/GettingStarted"}},p={},s=[{value:"Building",id:"building",level:2},{value:"Installation",id:"installation",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"building"},"Building"),(0,a.kt)("p",null,"To build ",(0,a.kt)("strong",{parentName:"p"},"Charba"),", you can check out the project and to run ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/blob/5.7/build.xml"},"Ant build.xml"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/blob/5.7/build.xml"},"Ant build.xml")," is able to build the 2 artifacts, related to the 2 distributions available."),(0,a.kt)("p",null,"The first distribution is a ",(0,a.kt)("strong",{parentName:"p"},"Charba")," file without any GWT dependency (but working on GWT anyway), consumable also in other ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure")," frameworks, like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hal/elemento"},"Elemento"),"."),(0,a.kt)("p",null,"To build the project, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"buildBinary")," target."),(0,a.kt)("p",null,"It creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"charba-[version.release].jar")," file in ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder, ready to be included in your project."),(0,a.kt)("p",null,"The second distribution is a ",(0,a.kt)("strong",{parentName:"p"},"Charba")," file with a hard GWT dependency which contains charts widgets and code splitting capabilities."),(0,a.kt)("p",null,"To build the project, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"buildBinaryGwt")," target."),(0,a.kt)("p",null,"It creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"charba-[version.release]-gwt.jar")," file in ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder, ready to be included in your project."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Currently ",(0,a.kt)("strong",{parentName:"p"},"Charba")," is available on ",(0,a.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.pepstock/charba"},"MVN repository"),"."),(0,a.kt)("p",null,"It is available also on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/releases"},"GitHub releases"),"."),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Apache Maven"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.pepstock</groupId>\n    <artifactId>charba</artifactId>\n    <version>5.7</version>\n    \x3c!-- for GWT --\x3e\n    <version>5.7-gwt</version>\n</dependency>\n")),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("a",{parentName:"p",href:"http://ant.apache.org/ivy/"},"Apache Ivy"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<dependency org="org.pepstock" name="charba" rev="5.7"/>\n\x3c!-- for GWT --\x3e\n<dependency org="org.pepstock" name="charba" rev="5.7-gwt"/>\n')),(0,a.kt)("p",null,"To install in your GWT project, both for GWT and for J2CL artifacts, you must the following configuration in your GWT project module configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'...\n<inherits name="org.pepstock.charba.Charba"/>\n...\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Charba")," is now leveraging on ",(0,a.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html"},"JSINTEROP"),"."),(0,a.kt)("p",null,"As the name suggests, JsInterop is a way of interoperating Java with JavaScript. It offers a better way of communication between the two using annotations instead of having to write javascript in your classes (using JSNI)."))}d.isMDXComponent=!0}}]);