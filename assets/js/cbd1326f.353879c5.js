"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[99684],{95788:(e,t,a)=>{a.d(t,{Iu:()=>g,yg:()=>y});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=p(a),c=n,y=s["".concat(m,".").concat(c)]||s[c]||d[c]||o;return a?r.createElement(y,i(i({ref:t},g),{},{components:a})):r.createElement(y,i({ref:t},g))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},64792:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(45072),n=(a(11504),a(95788));const o={id:"DateTimeFormat",title:"Date time format",hide_title:!0,sidebar_label:"Date time formatting"},i=void 0,l={unversionedId:"intl/DateTimeFormat",id:"version-5.3/intl/DateTimeFormat",title:"Date time format",description:"Date time formatting",source:"@site/versioned_docs/version-5.3/intl/DateTimeFormat.md",sourceDirName:"intl",slug:"/intl/DateTimeFormat",permalink:"/Charba-Wiki/docs/5.3/intl/DateTimeFormat",draft:!1,tags:[],version:"5.3",frontMatter:{id:"DateTimeFormat",title:"Date time format",hide_title:!0,sidebar_label:"Date time formatting"},sidebar:"docs",previous:{title:"Number formatting",permalink:"/Charba-Wiki/docs/5.3/intl/NumberFormat"},next:{title:"Date adapters",permalink:"/Charba-Wiki/docs/5.3/DateAdapters"}},m={},p=[{value:"Date time formatting",id:"date-time-formatting",level:2},{value:"Creating",id:"creating",level:2},{value:"Options",id:"options",level:2},{value:"Using",id:"using",level:2},{value:"Resolving options",id:"resolving-options",level:3},{value:"Formatting to parts",id:"formatting-to-parts",level:3}],g={toc:p},s="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(s,(0,r.c)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"date-time-formatting"},"Date time formatting"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," provide a ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/DateTimeFormat.html"},"date time format")," implementation which enables language-sensitive date time formatting, leveraging on ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat"},"INTL")," platform."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates a date time format\nDateTimeFormat dateTimeFormat = new DateTimeFormat();\n// formats the date, shows the current date, \n// for instance "4/1/2021", M/d/YYYY\nConsole.log(numberFormat.format(new Date()));\n// creates a date time format \n// with a locale\nDateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.GERMANY);\n// formats the date, shows the current date \n// for instance "1.4.2021", d.M.YYYY\nConsole.log(numberFormat.format(new Date()));\n')),(0,n.yg)("h2",{id:"creating"},"Creating"),(0,n.yg)("p",null,"A ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/DateTimeFormat.html"},"date time format")," can be created and consumed as following: "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates locale\nCLocale german = CLocaleBuilder.create(Language.GERMAN).build();\n// creates a date time format\n// with default locale and\n// default options\nDateTimeFormat dateTimeFormat = new DateTimeFormat();\n// creates a date time format\n// with a locale and\n// default options\nDateTimeFormat dfGerman = new DateTimeFormat(german);\n// creates date time format options\nDateTimeFormatOptions options = new DateTimeFormatOptions();\n// creates a date time format\n// with a locale and\n// specific options\nDateTimeFormat dfGermanOptions = new DateTimeFormat(german, options);\n")),(0,n.yg)("h2",{id:"options"},"Options"),(0,n.yg)("p",null,"A ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/DateTimeFormat.html"},"date time format")," can be configured, when created, by the set of options which can change the date time formatting, together with the locale."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates locale\nCLocale german = CLocaleBuilder.create(Language.GERMAN).build();\n// creates date format options\nDateTimeFormatOptions options = new DateTimeFormatOptions();\n// sets the date time styles\noptions.setDateStyle(DateTimeStyle.LONG);\noptions.setTimeStyle(DateTimeStyle.MEDIUM);\n// creates a date time format\n// with a locale and\n// specific options\nDateTimeFormat dfGermanOptions = new DateTimeFormat(german, options);\n// formats the date, shows the current date \n// for instance "1. April 2021 um 12:12:04"\nConsole.log(dfGermanOptions.format(new Date()));\n')),(0,n.yg)("p",null,"The complete options are described by following table:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"calendar"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/Calendar.html"},"Calendar")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The calendar to use for formatting.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"dateStyle"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/DateTimeStyle.html"},"DateTimeStyle")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The date style to use when formatting.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"day"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/NumberItemStyle.html"},"NumberItemStyle")),(0,n.yg)("td",{parentName:"tr",align:"left"},"NumberItemStyle.NUMERIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The representation of the day.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"dayPeriod"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/StringItemStyle.html"},"StringItemStyle")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The way day periods should be expressed.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"era"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/StringItemStyle.html"},"StringItemStyle")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The representation of the era.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"formatMatcher"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/FormatMatcher.html"},"FormatMatcher")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The format matching algorithm to use.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hour"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/NumberItemStyle.html"},"NumberItemStyle")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The representation of the hour.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hour12"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to use 12-hour time (as opposed to 24-hour time).",(0,n.yg)("br",null)," This option overrides the ",(0,n.yg)("inlineCode",{parentName:"td"},"hourCycle")," option in case both are present.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hourCycle"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/HourCycle.html"},"HourCycle")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The hour cycle to use.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"localeMatcher"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/LocaleMatcher.html"},"LocaleMatcher")),(0,n.yg)("td",{parentName:"tr",align:"left"},"LocaleMatcher.BEST_FIT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The locale matching algorithm to use.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"minute"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/NumberItemStyle.html"},"NumberItemStyle")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The representation of the minute.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"month"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/MixedItemStyle.html"},"MixedItemStyle")),(0,n.yg)("td",{parentName:"tr",align:"left"},"MixedItemStyle.NUMERIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The representation of the month.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"numberingSystem"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/NumberingSystem.html"},"NumberingSystem")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The numbering system to use for date time formatting.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"second"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/NumberItemStyle.html"},"NumberItemStyle")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The representation of the second.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"timeStyle"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/DateTimeStyle.html"},"DateTimeStyle")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The time style to use when formatting.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"timeZone"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/TimeZone.html"},"TimeZone")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The time zone to use.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"timeZoneName"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/TimeZoneName.html"},"TimeZoneName")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The representation of the time zone name.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"weekDay"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/StringItemStyle.html"},"StringItemStyle")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The representation of the weekday.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"year"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/enums/NumberItemStyle.html"},"NumberItemStyle")),(0,n.yg)("td",{parentName:"tr",align:"left"},"NumberItemStyle.NUMERIC"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The representation of the year.")))),(0,n.yg)("p",null,"See ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters"},"INTL date time format")," documentation for the details of each option."),(0,n.yg)("h2",{id:"using"},"Using"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/DateTimeFormat.html"},"date time format")," provides a set of methods to enable the date time formatting."),(0,n.yg)("p",null,"The most important one is ",(0,n.yg)("strong",{parentName:"p"},"format"),", to format a ",(0,n.yg)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html"},"Date")," as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates a date time format \n// with a locale\nDateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.GERMANY);\n// formats the date, shows the current date \n// for instance "1.4.2021", d.M.YYYY\nConsole.log(numberFormat.format(new Date()));\n')),(0,n.yg)("h3",{id:"resolving-options"},"Resolving options"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"resolveOptions")," method provides a object with properties reflecting the locale and date time formatting options computed during initialization."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a date time format \n// with a locale\nDateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.US);\n// gets the resolved options\nIsDefaultDateTimeFormatOptions resolvedOptions = dateTimeFormat.resolveOptions();\n// gets date time styles resolved options\nresolvedOptions.getDateStyle();\nresolvedOptions.getTimeStyle();\n")),(0,n.yg)("h3",{id:"formatting-to-parts"},"Formatting to parts"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"formatToParts")," method is useful for custom formatting of date time strings. It returns a list of ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.3/org/pepstock/charba/client/intl/FormatPart.html"},"format part objects")," containing the locale-specific tokens from which it possible to build custom strings while preserving the locale-specific parts."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates a date time format \n// with a locale\nDateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.US);\n// gets the format parts\nList<FormatPart> parts = dateTimeFormat.formatToParts(new Date());\n// scans the list , logging them\nparts.forEach((element) -> Console.log(element.getType().name()+" : "+element.getValue()));\n// result to console:\n// MONTH : 4\n// LITERAL : /\n// DAY : 1\n// LITERAL : /\n// YEAR : 2021\n')))}d.isMDXComponent=!0}}]);