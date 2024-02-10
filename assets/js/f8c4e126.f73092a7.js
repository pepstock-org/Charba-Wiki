"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[54936],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=a,y=g["".concat(p,".").concat(d)]||g[d]||u[d]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(45072),a=(n(11504),n(95788));n(70964);const i={id:"Building",title:"Build and install",hide_title:!0,sidebar_label:"Build and install"},o=void 0,l={unversionedId:"getting-started/Building",id:"version-5.6/getting-started/Building",title:"Build and install",description:"Building",source:"@site/versioned_docs/version-5.6/getting-started/Building.md",sourceDirName:"getting-started",slug:"/getting-started/Building",permalink:"/Charba-Wiki/docs/5.6/getting-started/Building",draft:!1,tags:[],version:"5.6",frontMatter:{id:"Building",title:"Build and install",hide_title:!0,sidebar_label:"Build and install"},sidebar:"docs",previous:{title:"Requirements",permalink:"/Charba-Wiki/docs/5.6/Requirements"},next:{title:"Getting started",permalink:"/Charba-Wiki/docs/5.6/getting-started/GettingStarted"}},p={},s=[{value:"Building",id:"building",level:2},{value:"Installation",id:"installation",level:2}],c={toc:s},g="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"building"},"Building"),(0,a.yg)("p",null,"To build ",(0,a.yg)("strong",{parentName:"p"},"Charba"),", you can check out the project and to run ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/blob/5.6/build.xml"},"Ant build.xml"),"."),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/blob/5.6/build.xml"},"Ant build.xml")," is able to build the 2 artifacts, related to the 2 distributions available."),(0,a.yg)("p",null,"The first distribution is a ",(0,a.yg)("strong",{parentName:"p"},"Charba")," file without any GWT dependency (but working on GWT anyway), consumable also in other ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/google/j2cl"},"J2CL - JavaToClosure")," frameworks, like ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/google/elemental2"},"Google Elemental2")," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/hal/elemento"},"Elemento"),"."),(0,a.yg)("p",null,"To build the project, execute ",(0,a.yg)("inlineCode",{parentName:"p"},"buildBinary")," target."),(0,a.yg)("p",null,"It creates a ",(0,a.yg)("inlineCode",{parentName:"p"},"charba-[version.release].jar")," file in ",(0,a.yg)("inlineCode",{parentName:"p"},"dist")," folder, ready to be included in your project."),(0,a.yg)("p",null,"The second distribution is a ",(0,a.yg)("strong",{parentName:"p"},"Charba")," file with a hard GWT dependency which contains charts widgets and code splitting capabilities."),(0,a.yg)("p",null,"To build the project, execute ",(0,a.yg)("inlineCode",{parentName:"p"},"buildBinaryGwt")," target."),(0,a.yg)("p",null,"It creates a ",(0,a.yg)("inlineCode",{parentName:"p"},"charba-[version.release]-gwt.jar")," file in ",(0,a.yg)("inlineCode",{parentName:"p"},"dist")," folder, ready to be included in your project."),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)("p",null,"Currently ",(0,a.yg)("strong",{parentName:"p"},"Charba")," is available on ",(0,a.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.pepstock/charba"},"MVN repository"),"."),(0,a.yg)("p",null,"It is available also on ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/releases"},"GitHub releases"),"."),(0,a.yg)("p",null,"If you are using ",(0,a.yg)("a",{parentName:"p",href:"https://maven.apache.org/"},"Apache Maven"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.pepstock</groupId>\n    <artifactId>charba</artifactId>\n    <version>5.6</version>\n    \x3c!-- for GWT --\x3e\n    <version>5.6-gwt</version>\n</dependency>\n")),(0,a.yg)("p",null,"If you are using ",(0,a.yg)("a",{parentName:"p",href:"http://ant.apache.org/ivy/"},"Apache Ivy"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},'<dependency org="org.pepstock" name="charba" rev="5.6"/>\n\x3c!-- for GWT --\x3e\n<dependency org="org.pepstock" name="charba" rev="5.6-gwt"/>\n')),(0,a.yg)("p",null,"To install in your GWT project, both for GWT and for J2CL artifacts, you must the following configuration in your GWT project module configuration:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},'...\n<inherits name="org.pepstock.charba.Charba"/>\n...\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Charba")," is now leveraging on ",(0,a.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJsInterop.html"},"JSINTEROP"),"."),(0,a.yg)("p",null,"As the name suggests, JsInterop is a way of interoperating Java with JavaScript. It offers a better way of communication between the two using annotations instead of having to write javascript in your classes (using JSNI)."))}u.isMDXComponent=!0}}]);