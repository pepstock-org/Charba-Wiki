"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),a=n(44996);const o={id:"AnnotationBuilder",title:"Annotation builder",hide_title:!0,sidebar_label:"Annotation builder"},l=void 0,c={unversionedId:"utilities/AnnotationBuilder",id:"version-6.1/utilities/AnnotationBuilder",title:"Annotation builder",description:"HTML annotation Builder",source:"@site/versioned_docs/version-6.1/utilities/AnnotationBuilder.md",sourceDirName:"utilities",slug:"/utilities/AnnotationBuilder",permalink:"/Charba-Wiki/docs/6.1/utilities/AnnotationBuilder",draft:!1,tags:[],version:"6.1",frontMatter:{id:"AnnotationBuilder",title:"Annotation builder",hide_title:!0,sidebar_label:"Annotation builder"},sidebar:"docs",previous:{title:"Toasting",permalink:"/Charba-Wiki/docs/6.1/utilities/Toast"}},s={},p=[{value:"HTML annotation Builder",id:"html-annotation-builder",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"html-annotation-builder"},"HTML annotation Builder"),(0,i.kt)("p",null,"One of most frequent requests is how to add HTML code in the canvas. This enables the user to add easily information in the chart, leveraging on HTML code."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/utils/AnnotationBuilder.html"},"HTML annotation Builder")," provides methods to create images to add to canvas where the chart is drawing. It is leveraging on ",(0,i.kt)("inlineCode",{parentName:"p"},"SVG+XML")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<foreignObject>")," to create an image that you can add to the chart by a plugin, controller or with whatever else method."),(0,i.kt)("p",null,"Leveraging on ",(0,i.kt)("inlineCode",{parentName:"p"},"<foreignObject>"),", check ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject#Browser_compatibility"},"here")," the compatibility matrix on browsers."),(0,i.kt)("p",null,"You can pass the HTML as string or by an ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/dom/BaseHtmlElement.html"},"element"),". If you use a string, the string must be XML well-formed, following the ",(0,i.kt)("a",{parentName:"p",href:"http://www.w3.org/1999/xhtml"},"xHTML specification")," otherwise an exception will occurs."),(0,i.kt)("img",{src:(0,a.Z)("/img/htmlAnnotation.png")}),(0,i.kt)("p",null,"Here is a sample how to use it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates an image with the text in bold\nImg image = AnnotationBuilder.build("<b>This is an annotation</b>", \n    chart.getCanvas().getOffsetWidth(), \n    100);\n// uses the context 2d of canvas to draw the image at point 0,0                 \nctx.drawImage(img, 0, 0);\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Drawing the image on canvas, you could get a ",(0,i.kt)("inlineCode",{parentName:"p"},"NS_ERROR_NOT_AVAILABLE")," javascript error which means that if even the content is well-formed, it contains some invalid characters, not allowed in the xHTML (for instance ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," char).")))}m.isMDXComponent=!0}}]);