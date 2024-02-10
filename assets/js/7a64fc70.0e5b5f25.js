"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[76296],{95788:(e,a,t)=>{t.d(a,{Iu:()=>s,yg:()=>h});var n=t(11504);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(t),d=l,h=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return t?n.createElement(h,r(r({ref:a},s),{},{components:t})):n.createElement(h,r({ref:a},s))}));function h(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=d;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[g]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65276:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(45072),l=(t(11504),t(95788));const o={id:"Locale",title:"Locale",hide_title:!0,sidebar_label:"Locale"},r=void 0,i={unversionedId:"intl/Locale",id:"version-5.1/intl/Locale",title:"Locale",description:"Internationalization",source:"@site/versioned_docs/version-5.1/intl/Locale.md",sourceDirName:"intl",slug:"/intl/Locale",permalink:"/Charba-Wiki/docs/5.1/intl/Locale",draft:!1,tags:[],version:"5.1",frontMatter:{id:"Locale",title:"Locale",hide_title:!0,sidebar_label:"Locale"},sidebar:"docs",previous:{title:"Point labels",permalink:"/Charba-Wiki/docs/5.1/axes/PointLabels"},next:{title:"Number formatting",permalink:"/Charba-Wiki/docs/5.1/intl/NumberFormat"}},c={},p=[{value:"Internationalization",id:"internationalization",level:2},{value:"Locale",id:"locale",level:2},{value:"Creating",id:"creating",level:2},{value:"Defaults",id:"defaults",level:2}],s={toc:p},g="wrapper";function u(e){let{components:a,...t}=e;return(0,l.yg)(g,(0,n.c)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"internationalization"},"Internationalization"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"Internationalization")," provides language sensitive number formatting, and date and time formatting."),(0,l.yg)("h2",{id:"locale"},"Locale"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Charba")," provide a own ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/CLocale.html"},"locale")," implementation which can be used in the charts or for other several purposes."),(0,l.yg)("p",null,"The ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/CLocale.html"},"locale")," object allows for easier manipulation of Unicode locales. Unicode represents locales with a string, called a ",(0,l.yg)("em",{parentName:"p"},"locale identifier"),". "),(0,l.yg)("p",null,"The locale identifier consists of a language identifier and extension tags. Language identifiers are the core of the locale, consisting of language, script, and region subtags. "),(0,l.yg)("p",null,"Additional information about the locale is stored in the optional extension tags. Extension tags hold information about locale aspects such as calendar type, clock type, and numbering system type."),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation"},"INTL documentation")," about more details."),(0,l.yg)("h2",{id:"creating"},"Creating"),(0,l.yg)("p",null,"The locale is a string that is a ",(0,l.yg)("a",{parentName:"p",href:"https://www.unicode.org/reports/tr35/tr35.html#BCP_47_Conformance"},"Unicode BCP 47 locale identifier"),"."),(0,l.yg)("p",null,"A Unicode BCP 47 locale identifier consists of"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"a language code,"),(0,l.yg)("li",{parentName:"ol"},"(optionally) a script code,"),(0,l.yg)("li",{parentName:"ol"},"(optionally) a region (or country) code,"),(0,l.yg)("li",{parentName:"ol"},"(optionally) one or more variant codes, and"),(0,l.yg)("li",{parentName:"ol"},"(optionally) one or more extension sequences,")),(0,l.yg)("p",null,"with all present components separated by hyphens."),(0,l.yg)("p",null,"To create own locale, you can use the ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/CLocaleBuilder.html"},"locale builder")," as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'// creates a locale with language\nCLocale german = CLocaleBuilder.create(Language.GERMAN)\n    .build();\n// creates a locale with language and region\nCLocale austrian = CLocaleBuilder.create(Language.GERMAN)\n    .setRegion(Region.AUSTRIA)\n    .build();\n// creates a locale with language, region and script\nCLocale austrianLatn = CLocaleBuilder.create(Language.GERMAN)\n    .setRegion(Region.AUSTRIA)\n    .setScript(Script.LATN)\n    .build();\n    \n// creates a locale with language by a string\nCLocale german = CLocaleBuilder.build("de");\n// creates a locale with language and region by a string\nCLocale austrian = CLocaleBuilder.build("de-AT");\n')),(0,l.yg)("p",null,"The ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/CLocale.html"},"locale")," is providing a subset of locales as constants."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Charba")," provides the enumerations with possible languages, regions or scripts that can be used to create a locale:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"languages codes are enumerated in ",(0,l.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/Language.html"},"Language")," object."),(0,l.yg)("li",{parentName:"ul"},"regions are enumerated in ",(0,l.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/Region.html"},"Region")," object."),(0,l.yg)("li",{parentName:"ul"},"scripts are enumerated in ",(0,l.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/Script.html"},"Script")," object.")),(0,l.yg)("h2",{id:"defaults"},"Defaults"),(0,l.yg)("p",null,"At runtime, you can determine the user\u2019s locale in different ways, automatically retrieved, or can be set programmatically."),(0,l.yg)("p",null,"The default ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/CLocale.html"},"locale")," will set if one of the following items is met and in the order are described:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Append the client ",(0,l.yg)("inlineCode",{parentName:"li"},"locale")," property value to the query string of the URL.")),(0,l.yg)("p",null,"For instance, ",(0,l.yg)("inlineCode",{parentName:"p"},"http://www.example.org/myapp.html?locale=de"),' will set "de" as default locale.'),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add an HTML ",(0,l.yg)("inlineCode",{parentName:"li"},"<meta>")," tag to the ",(0,l.yg)("inlineCode",{parentName:"li"},"<head>")," of the application host page, containing the ",(0,l.yg)("inlineCode",{parentName:"li"},"gwt:property")," property name and value: ")),(0,l.yg)("p",null,"For instance, ",(0,l.yg)("inlineCode",{parentName:"p"},'<meta name="gwt:property" content="locale=de">'),' will set "de" as default locale.'),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Reads the default locale from platform"),(0,l.yg)("li",{parentName:"ul"},"if all above items don't provide any correct locale, ",(0,l.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/CLocale.html"},"CLocale.US")," is set.")),(0,l.yg)("p",null,"To access to default locale, you can retrieve it from ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/CLocale.html"},"locale")," object, where is statically stored, as following: "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"// gets default locale\nCLocale defaultLocale = CLocale.getDefault();\n")),(0,l.yg)("p",null,"You can also set the default locale programmatically as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"// creates a locale with language\nCLocale german = CLocaleBuilder.create(Language.GERMAN)\n\n// sets default locale\nCLocale.setDefault(german);\n")),(0,l.yg)("p",null,"When a default has been set, automatically it changes the default configuration for charts, in order to use the default locale if it's not programmatically set."),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"../configuration/Commons#locale"},"chart locale configuration")," for more details."))}u.isMDXComponent=!0}}]);