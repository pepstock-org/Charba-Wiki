"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[22367],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),p=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,m=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=p(a),g=n,f=c["".concat(m,".").concat(g)]||c[g]||u[g]||o;return a?r.createElement(f,i(i({ref:e},s),{},{components:a})):r.createElement(f,i({ref:e},s))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58113:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={id:"NumberFormat",title:"Number format",hide_title:!0,sidebar_label:"Number formatting"},i=void 0,l={unversionedId:"intl/NumberFormat",id:"version-5.5/intl/NumberFormat",title:"Number format",description:"Number formatting",source:"@site/versioned_docs/version-5.5/intl/NumberFormat.md",sourceDirName:"intl",slug:"/intl/NumberFormat",permalink:"/Charba-Wiki/docs/5.5/intl/NumberFormat",draft:!1,tags:[],version:"5.5",frontMatter:{id:"NumberFormat",title:"Number format",hide_title:!0,sidebar_label:"Number formatting"},sidebar:"docs",previous:{title:"Locale",permalink:"/Charba-Wiki/docs/5.5/intl/Locale"},next:{title:"Date time formatting",permalink:"/Charba-Wiki/docs/5.5/intl/DateTimeFormat"}},m={},p=[{value:"Number formatting",id:"number-formatting",level:2},{value:"Creating",id:"creating",level:2},{value:"Options",id:"options",level:2},{value:"Using",id:"using",level:2},{value:"Resolving options",id:"resolving-options",level:3},{value:"Formatting to parts",id:"formatting-to-parts",level:3}],s={toc:p};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"number-formatting"},"Number formatting"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Charba")," provide a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/NumberFormat.html"},"number format")," implementation which enables language-sensitive number formatting, leveraging on ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"},"INTL")," platform."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// creates a number format\nNumberFormat numberFormat = new NumberFormat();\n// formats the number, shows "13.576.453,87"\nConsole.log(numberFormat.format(13576453.865));\n')),(0,n.kt)("h2",{id:"creating"},"Creating"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/NumberFormat.html"},"number format")," can be created and consumed as following: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates locale\nCLocale german = CLocaleBuilder.create(Language.GERMAN).build();\n// creates a number format\n// with default locale and\n// default options\nNumberFormat numberFormat = new NumberFormat();\n// creates a number format\n// with a locale and\n// default options\nNumberFormat nfGerman = new NumberFormat(german);\n// creates number format options\nNumberFormatOptions options = new NumberFormatOptions();\n// creates a number format\n// with a locale and\n// specific options\nNumberFormat nfGermanOptions = new NumberFormat(german, options);\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/NumberFormat.html"},"number format")," can be configured, when created, by the set of options which can change the number formatting, together with the locale."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// creates locale\nCLocale german = CLocaleBuilder.create(Language.GERMAN).build();\n// creates number format options\nNumberFormatOptions options = new NumberFormatOptions();\n// sets the currency options\noptions.setStyle(Style.CURRENCY);\noptions.setCurrency(Currency.EURO);\noptions.setCurrencyDisplay(CurrencyDisplay.SYMBOL);\n// creates a number format\n// with a locale and\n// specific options\nNumberFormat nfGermanOptions = new NumberFormat(german, options);\n// formats the number, shows "13.576.453,87\xa0\u20ac"\nConsole.log(nfGermanOptions.format(13576453.865)); \n')),(0,n.kt)("p",null,"The complete options are described by following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"compactDisplay"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/CompactDisplay.html"},"CompactDisplay")),(0,n.kt)("td",{parentName:"tr",align:"left"},"CompactDisplay.SHORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the compact display when ",(0,n.kt)("inlineCode",{parentName:"td"},"notation")," is set to Notation.COMPACT.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"currency"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/Currency.html"},"Currency")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The currency to use in currency formatting.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"currencyDisplay"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/CurrencyDisplay.html"},"CurrencyDisplay")),(0,n.kt)("td",{parentName:"tr",align:"left"},"CurrencyDisplay.SYMBOL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"How to display the currency in currency formatting.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"currencySign"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/CurrencySign.html"},"CurrencySign")),(0,n.kt)("td",{parentName:"tr",align:"left"},"CurrencySign.STANDARD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"localeMatcher"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/LocaleMatcher.html"},"LocaleMatcher")),(0,n.kt)("td",{parentName:"tr",align:"left"},"LocaleMatcher.BEST_FIT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The locale matching algorithm to use.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"maximumFractionDigits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The default for plain number formatting is the larger of ",(0,n.kt)("inlineCode",{parentName:"td"},"minimumFractionDigits")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"3"),".",(0,n.kt)("br",null),"The default for currency formatting is the larger of ",(0,n.kt)("inlineCode",{parentName:"td"},"minimumFractionDigits")," and the number of minor unit digits provided by ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/Currency.html"},"Currency"),".",(0,n.kt)("br",null),"The default for percent formatting is the larger of ",(0,n.kt)("inlineCode",{parentName:"td"},"minimumFractionDigits")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),"."),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum number of fraction digits to use.",(0,n.kt)("br",null),"Possible values are from 0 to 20.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"maximumSignificantDigits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"21"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum number of significant digits to use.",(0,n.kt)("br",null),"Possible values are from 1 to 21.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"minimumFractionDigits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The default for plain number and percent formatting is ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),".",(0,n.kt)("br",null),"The default for currency formatting is the number of minor unit digits provided by ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/Currency.html"},"Currency"),"."),(0,n.kt)("td",{parentName:"tr",align:"left"},"The minimum number of fraction digits to use.",(0,n.kt)("br",null),"Possible values are from 0 to 20.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"minimumIntegerDigits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The minimum number of integer digits to use.",(0,n.kt)("br",null),"Possible values are from 1 to 21.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"minimumSignificantDigits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The minimum number of significant digits to use.",(0,n.kt)("br",null),"Possible values are from 1 to 21.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"notation"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/Notation.html"},"Notation")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Notation.STANDARD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The formatting that should be displayed for the number.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"numberingSystem"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/NumberingSystem.html"},"NumberingSystem")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The numbering system to use for number formatting.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"signDisplay"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/SignDisplay.html"},"SignDisplay")),(0,n.kt)("td",{parentName:"tr",align:"left"},"SignDisplay.AUTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"When to display the sign for the number.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"style"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/Style.html"},"Style")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Style.DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The formatting style to use.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unitOfMeasureDisplay"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/MeasureUnitDisplay.html"},"MeasureUnitDisplay")),(0,n.kt)("td",{parentName:"tr",align:"left"},"MeasureUnitDisplay.SHORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The unit formatting style to use in unit formatting.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unitsOfMeasure"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/enums/MeasureUnit%5B%5D.html"},"MeasureUnit"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The unit to use in unit formatting.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"useGrouping"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.")))),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters"},"INTL number format")," documentation for the details of each option."),(0,n.kt)("h2",{id:"using"},"Using"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/NumberFormat.html"},"number format")," provides a set of methods to enable the number formatting."),(0,n.kt)("p",null,"The most important one is ",(0,n.kt)("strong",{parentName:"p"},"format"),", to format a double as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// creates a number format\nNumberFormat numberFormat = new NumberFormat();\n// formats the number, shows "13.576.453,87"\nConsole.log(numberFormat.format(13576453.865D));\n')),(0,n.kt)("h3",{id:"resolving-options"},"Resolving options"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"resolveOptions")," method provides a object with properties reflecting the locale and number formatting options computed during initialization."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a number format\nNumberFormat numberFormat = new NumberFormat(CLocale.US);\n// gets the resolved options\nIsDefaultNumberFormatOptions resolvedOptions = numberFormat.resolveOptions();\n// gets currency resolved options\nresolvedOptions.getStyle();\nresolvedOptions.getCurrency();\nresolvedOptions.getCurrencyDisplay();\n")),(0,n.kt)("h3",{id:"formatting-to-parts"},"Formatting to parts"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"formatToParts")," method is useful for custom formatting of number strings. It returns a list of ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/FormatPart.html"},"format part objects")," containing the locale-specific tokens from which it possible to build custom strings while preserving the locale-specific parts."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// creates a number format\nNumberFormat numberFormat = new NumberFormat(CLocale.US);\n// gets the format parts\nList<FormatPart> parts = numberFormat.formatToParts(13576453.865);\n// scans the list , logging them\nparts.forEach((element) -> Console.log(element.getType().name()+" : "+element.getValue()));\n// result to console:\n// INTEGER : 13\n// GROUP : ,\n// INTEGER : 576\n// GROUP : ,\n// INTEGER : 453\n// DECIMAL : .\n// FRACTION : 865\n')))}u.isMDXComponent=!0}}]);