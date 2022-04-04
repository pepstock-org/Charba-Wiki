"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[57907],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return g}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),p=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,m=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=p(r),g=n,f=c["".concat(m,".").concat(g)]||c[g]||u[g]||o;return r?a.createElement(f,i(i({ref:e},s),{},{components:r})):a.createElement(f,i({ref:e},s))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},11222:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"NumberFormat",title:"Number format",hide_title:!0,sidebar_label:"Number formatting"},m=void 0,p={unversionedId:"intl/NumberFormat",id:"intl/NumberFormat",title:"Number format",description:"Number formatting",source:"@site/docs/intl/NumberFormat.md",sourceDirName:"intl",slug:"/intl/NumberFormat",permalink:"/Charba-Wiki/docs/intl/NumberFormat",tags:[],version:"current",frontMatter:{id:"NumberFormat",title:"Number format",hide_title:!0,sidebar_label:"Number formatting"},sidebar:"docs",previous:{title:"Locale",permalink:"/Charba-Wiki/docs/intl/Locale"},next:{title:"Date time formatting",permalink:"/Charba-Wiki/docs/intl/DateTimeFormat"}},s={},u=[{value:"Number formatting",id:"number-formatting",level:2},{value:"Creating",id:"creating",level:2},{value:"Options",id:"options",level:2},{value:"Using",id:"using",level:2},{value:"Resolving options",id:"resolving-options",level:3},{value:"Formatting to parts",id:"formatting-to-parts",level:3}],c={toc:u};function g(t){var e=t.components,r=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"number-formatting"},"Number formatting"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provide a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/NumberFormat.html"},"number format")," implementation which enables language-sensitive number formatting, leveraging on ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"},"INTL")," platform."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a number format\nNumberFormat numberFormat = new NumberFormat();\n// formats the number, shows "13.576.453,87"\nConsole.log(numberFormat.format(13576453.865));\n')),(0,o.kt)("h2",{id:"creating"},"Creating"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/NumberFormat.html"},"number format")," can be created and consumed as following: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates locale\nCLocale german = CLocaleBuilder.create(Language.GERMAN).build();\n// creates a number format\n// with default locale and\n// default options\nNumberFormat numberFormat = new NumberFormat();\n// creates a number format\n// with a locale and\n// default options\nNumberFormat nfGerman = new NumberFormat(german);\n// creates number format options\nNumberFormatOptions options = new NumberFormatOptions();\n// creates a number format\n// with a locale and\n// specific options\nNumberFormat nfGermanOptions = new NumberFormat(german, options);\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/NumberFormat.html"},"number format")," can be configured, when created, by the set of options which can change the number formatting, together with the locale."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates locale\nCLocale german = CLocaleBuilder.create(Language.GERMAN).build();\n// creates number format options\nNumberFormatOptions options = new NumberFormatOptions();\n// sets the currency options\noptions.setStyle(Style.CURRENCY);\noptions.setCurrency(Currency.EURO);\noptions.setCurrencyDisplay(CurrencyDisplay.SYMBOL);\n// creates a number format\n// with a locale and\n// specific options\nNumberFormat nfGermanOptions = new NumberFormat(german, options);\n// formats the number, shows "13.576.453,87\xa0\u20ac"\nConsole.log(nfGermanOptions.format(13576453.865)); \n')),(0,o.kt)("p",null,"The complete options are described by following table:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"compactDisplay"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/CompactDisplay.html"},"CompactDisplay")),(0,o.kt)("td",{parentName:"tr",align:"left"},"CompactDisplay.SHORT"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Set the compact display when ",(0,o.kt)("inlineCode",{parentName:"td"},"notation")," is set to Notation.COMPACT.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"currency"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/Currency.html"},"Currency")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The currency to use in currency formatting.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"currencyDisplay"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/CurrencyDisplay.html"},"CurrencyDisplay")),(0,o.kt)("td",{parentName:"tr",align:"left"},"CurrencyDisplay.SYMBOL"),(0,o.kt)("td",{parentName:"tr",align:"left"},"How to display the currency in currency formatting.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"currencySign"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/CurrencySign.html"},"CurrencySign")),(0,o.kt)("td",{parentName:"tr",align:"left"},"CurrencySign.STANDARD"),(0,o.kt)("td",{parentName:"tr",align:"left"},"In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"localeMatcher"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/LocaleMatcher.html"},"LocaleMatcher")),(0,o.kt)("td",{parentName:"tr",align:"left"},"LocaleMatcher.BEST_FIT"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The locale matching algorithm to use.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"maximumFractionDigits"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The default for plain number formatting is the larger of ",(0,o.kt)("inlineCode",{parentName:"td"},"minimumFractionDigits")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"3"),".",(0,o.kt)("br",null),"The default for currency formatting is the larger of ",(0,o.kt)("inlineCode",{parentName:"td"},"minimumFractionDigits")," and the number of minor unit digits provided by ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/Currency.html"},"Currency"),".",(0,o.kt)("br",null),"The default for percent formatting is the larger of ",(0,o.kt)("inlineCode",{parentName:"td"},"minimumFractionDigits")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"0"),"."),(0,o.kt)("td",{parentName:"tr",align:"left"},"The maximum number of fraction digits to use.",(0,o.kt)("br",null),"Possible values are from 0 to 20.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"maximumSignificantDigits"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"21"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The maximum number of significant digits to use.",(0,o.kt)("br",null),"Possible values are from 1 to 21.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"minimumFractionDigits"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The default for plain number and percent formatting is ",(0,o.kt)("inlineCode",{parentName:"td"},"0"),".",(0,o.kt)("br",null),"The default for currency formatting is the number of minor unit digits provided by ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/Currency.html"},"Currency"),"."),(0,o.kt)("td",{parentName:"tr",align:"left"},"The minimum number of fraction digits to use.",(0,o.kt)("br",null),"Possible values are from 0 to 20.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"minimumIntegerDigits"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The minimum number of integer digits to use.",(0,o.kt)("br",null),"Possible values are from 1 to 21.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"minimumSignificantDigits"),(0,o.kt)("td",{parentName:"tr",align:"left"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The minimum number of significant digits to use.",(0,o.kt)("br",null),"Possible values are from 1 to 21.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"notation"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/Notation.html"},"Notation")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Notation.STANDARD"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The formatting that should be displayed for the number.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"numberingSystem"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/NumberingSystem.html"},"NumberingSystem")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The numbering system to use for number formatting.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"signDisplay"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/SignDisplay.html"},"SignDisplay")),(0,o.kt)("td",{parentName:"tr",align:"left"},"SignDisplay.AUTO"),(0,o.kt)("td",{parentName:"tr",align:"left"},"When to display the sign for the number.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"style"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/Style.html"},"Style")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Style.DECIMAL"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The formatting style to use.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"unitOfMeasureDisplay"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/MeasureUnitDisplay.html"},"MeasureUnitDisplay")),(0,o.kt)("td",{parentName:"tr",align:"left"},"MeasureUnitDisplay.SHORT"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The unit formatting style to use in unit formatting.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"unitsOfMeasure"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/enums/MeasureUnit%5B%5D.html"},"MeasureUnit"),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The unit to use in unit formatting.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"useGrouping"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.")))),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters"},"INTL number format")," documentation for the details of each option."),(0,o.kt)("h2",{id:"using"},"Using"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/NumberFormat.html"},"number format")," provides a set of methods to enable the number formatting."),(0,o.kt)("p",null,"The most important one is ",(0,o.kt)("strong",{parentName:"p"},"format"),", to format a double as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a number format\nNumberFormat numberFormat = new NumberFormat();\n// formats the number, shows "13.576.453,87"\nConsole.log(numberFormat.format(13576453.865D));\n')),(0,o.kt)("h3",{id:"resolving-options"},"Resolving options"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"resolveOptions")," method provides a object with properties reflecting the locale and number formatting options computed during initialization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates a number format\nNumberFormat numberFormat = new NumberFormat(CLocale.US);\n// gets the resolved options\nIsDefaultNumberFormatOptions resolvedOptions = numberFormat.resolveOptions();\n// gets currency resolved options\nresolvedOptions.getStyle();\nresolvedOptions.getCurrency();\nresolvedOptions.getCurrencyDisplay();\n")),(0,o.kt)("h3",{id:"formatting-to-parts"},"Formatting to parts"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"formatToParts")," method is useful for custom formatting of number strings. It returns a list of ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.2/org/pepstock/charba/client/intl/FormatPart.html"},"format part objects")," containing the locale-specific tokens from which it possible to build custom strings while preserving the locale-specific parts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a number format\nNumberFormat numberFormat = new NumberFormat(CLocale.US);\n// gets the format parts\nList<FormatPart> parts = numberFormat.formatToParts(13576453.865);\n// scans the list , logging them\nparts.forEach((element) -> Console.log(element.getType().name()+" : "+element.getValue()));\n// result to console:\n// INTEGER : 13\n// GROUP : ,\n// INTEGER : 576\n// GROUP : ,\n// INTEGER : 453\n// DECIMAL : .\n// FRACTION : 865\n')))}g.isMDXComponent=!0}}]);