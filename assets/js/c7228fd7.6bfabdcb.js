"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[211],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return h}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),p=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,m=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=p(a),h=n,g=c["".concat(m,".").concat(h)]||c[h]||d[h]||o;return a?r.createElement(g,i(i({ref:e},s),{},{components:a})):r.createElement(g,i({ref:e},s))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},10433:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"DateTimeFormat",title:"Date time format",hide_title:!0,sidebar_label:"Date time formatting"},m=void 0,p={unversionedId:"intl/DateTimeFormat",id:"version-4.0/intl/DateTimeFormat",title:"Date time format",description:"Date time formatting",source:"@site/versioned_docs/version-4.0/intl/DateTimeFormat.md",sourceDirName:"intl",slug:"/intl/DateTimeFormat",permalink:"/Charba-Wiki/docs/4.0/intl/DateTimeFormat",tags:[],version:"4.0",frontMatter:{id:"DateTimeFormat",title:"Date time format",hide_title:!0,sidebar_label:"Date time formatting"},sidebar:"version-4.0/docs",previous:{title:"Number formatting",permalink:"/Charba-Wiki/docs/4.0/intl/NumberFormat"},next:{title:"Date adapters",permalink:"/Charba-Wiki/docs/4.0/DateAdapters"}},s=[{value:"Date time formatting",id:"date-time-formatting",children:[],level:2},{value:"Creating",id:"creating",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Using",id:"using",children:[{value:"Resolving options",id:"resolving-options",children:[],level:3},{value:"Formatting to parts",id:"formatting-to-parts",children:[],level:3}],level:2}],d={toc:s};function c(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"date-time-formatting"},"Date time formatting"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Charba")," provide a ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/DateTimeFormat.html"},"date time format")," implementation which enables language-sensitive date time formatting, leveraging on ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat"},"INTL")," platform."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a date time format\nDateTimeFormat dateTimeFormat = new DateTimeFormat();\n// formats the date, shows the current date, \n// for instance "4/1/2021", M/d/YYYY\nConsole.log(numberFormat.format(new Date()));\n// creates a date time format \n// with a locale\nDateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.GERMANY);\n// formats the date, shows the current date \n// for instance "1.4.2021", d.M.YYYY\nConsole.log(numberFormat.format(new Date()));\n')),(0,o.kt)("h2",{id:"creating"},"Creating"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/DateTimeFormat.html"},"date time format")," can be created and consumed as following: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates locale\nCLocale german = CLocaleBuilder.create(Language.GERMAN).build();\n// creates a date time format\n// with default locale and\n// default options\nDateTimeFormat dateTimeFormat = new DateTimeFormat();\n// creates a date time format\n// with a locale and\n// default options\nDateTimeFormat dfGerman = new DateTimeFormat(german);\n// creates date time format options\nDateTimeFormatOptions options = new DateTimeFormatOptions();\n// creates a date time format\n// with a locale and\n// specific options\nDateTimeFormat dfGermanOptions = new DateTimeFormat(german, options);\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/DateTimeFormat.html"},"date time format")," can be configured, when created, by the set of options which can change the date time formatting, together with the locale."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates locale\nCLocale german = CLocaleBuilder.create(Language.GERMAN).build();\n// creates date format options\nDateTimeFormatOptions options = new DateTimeFormatOptions();\n// sets the date time styles\noptions.setDateStyle(DateTimeStyle.LONG);\noptions.setTimeStyle(DateTimeStyle.MEDIUM);\n// creates a date time format\n// with a locale and\n// specific options\nDateTimeFormat dfGermanOptions = new DateTimeFormat(german, options);\n// formats the date, shows the current date \n// for instance "1. April 2021 um 12:12:04"\nConsole.log(dfGermanOptions.format(new Date()));\n')),(0,o.kt)("p",null,"The complete options are described by following table:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"calendar"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/Calendar.html"},"Calendar")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The calendar to use for formatting.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"dateStyle"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/DateTimeStyle.html"},"DateTimeStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The date style to use when formatting.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"day"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/NumberItemStyle.html"},"NumberItemStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},"NumberItemStyle.NUMERIC"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The representation of the day.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"dayPeriod"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/StringItemStyle.html"},"StringItemStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The way day periods should be expressed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"era"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/StringItemStyle.html"},"StringItemStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The representation of the era.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"formatMatcher"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/FormatMatcher.html"},"FormatMatcher")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The format matching algorithm to use.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"hour"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/NumberItemStyle.html"},"NumberItemStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The representation of the hour.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"hour12"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether to use 12-hour time (as opposed to 24-hour time).",(0,o.kt)("br",null)," This option overrides the ",(0,o.kt)("inlineCode",{parentName:"td"},"hourCycle")," option in case both are present.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"hourCycle"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/HourCycle.html"},"HourCycle")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The hour cycle to use.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"localeMatcher"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/LocaleMatcher.html"},"LocaleMatcher")),(0,o.kt)("td",{parentName:"tr",align:"left"},"LocaleMatcher.BEST_FIT"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The locale matching algorithm to use.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"minute"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/NumberItemStyle.html"},"NumberItemStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The representation of the minute.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"month"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/MixedItemStyle.html"},"MixedItemStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},"MixedItemStyle.NUMERIC"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The representation of the month.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"numberingSystem"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/NumberingSystem.html"},"NumberingSystem")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The numbering system to use for date time formatting.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"second"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/NumberItemStyle.html"},"NumberItemStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The representation of the second.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"timeStyle"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/DateTimeStyle.html"},"DateTimeStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The time style to use when formatting.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"timeZone"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/TimeZone.html"},"TimeZone")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The time zone to use.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"timeZoneName"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/TimeZoneName.html"},"TimeZoneName")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The representation of the time zone name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"weekDay"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/StringItemStyle.html"},"StringItemStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The representation of the weekday.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"year"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/enums/NumberItemStyle.html"},"NumberItemStyle")),(0,o.kt)("td",{parentName:"tr",align:"left"},"NumberItemStyle.NUMERIC"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The representation of the year.")))),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters"},"INTL date time format")," documentation for the details of each option."),(0,o.kt)("h2",{id:"using"},"Using"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/DateTimeFormat.html"},"date time format")," provides a set of methods to enable the date time formatting."),(0,o.kt)("p",null,"The most important one is ",(0,o.kt)("strong",{parentName:"p"},"format"),", to format a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Date.html"},"Date")," as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a date time format \n// with a locale\nDateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.GERMANY);\n// formats the date, shows the current date \n// for instance "1.4.2021", d.M.YYYY\nConsole.log(numberFormat.format(new Date()));\n')),(0,o.kt)("h3",{id:"resolving-options"},"Resolving options"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"resolveOptions")," method provides a object with properties reflecting the locale and date time formatting options computed during initialization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// creates a date time format \n// with a locale\nDateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.US);\n// gets the resolved options\nIsDefaultDateTimeFormatOptions resolvedOptions = dateTimeFormat.resolveOptions();\n// gets date time styles resolved options\nresolvedOptions.getDateStyle();\nresolvedOptions.getTimeStyle();\n")),(0,o.kt)("h3",{id:"formatting-to-parts"},"Formatting to parts"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"formatToParts")," method is useful for custom formatting of date time strings. It returns a list of ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/intl/FormatPart.html"},"format part objects")," containing the locale-specific tokens from which it possible to build custom strings while preserving the locale-specific parts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates a date time format \n// with a locale\nDateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.US);\n// gets the format parts\nList<FormatPart> parts = dateTimeFormat.formatToParts(new Date());\n// scans the list , logging them\nparts.forEach((element) -> Console.log(element.getType().name()+" : "+element.getValue()));\n// result to console:\n// MONTH : 4\n// LITERAL : /\n// DAY : 1\n// LITERAL : /\n// YEAR : 2021\n')))}c.isMDXComponent=!0}}]);