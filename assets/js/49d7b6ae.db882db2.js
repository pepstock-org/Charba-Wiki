"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[22256],{95788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>c});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),g=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=g(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=g(a),y=n,c=m["".concat(o,".").concat(y)]||m[y]||d[y]||l;return a?r.createElement(c,i(i({ref:t},s),{},{components:a})):r.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=y;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var g=2;g<l;g++)i[g]=a[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},44988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var r=a(45072),n=(a(11504),a(95788));const l={id:"DateAdapters",title:"Date adapters",hide_title:!0,sidebar_label:"Date adapters"},i=void 0,p={unversionedId:"DateAdapters",id:"version-5.6/DateAdapters",title:"Date adapters",description:"Date adapters",source:"@site/versioned_docs/version-5.6/DateAdapters.md",sourceDirName:".",slug:"/DateAdapters",permalink:"/Charba-Wiki/docs/5.6/DateAdapters",draft:!1,tags:[],version:"5.6",frontMatter:{id:"DateAdapters",title:"Date adapters",hide_title:!0,sidebar_label:"Date adapters"},sidebar:"docs",previous:{title:"Date time formatting",permalink:"/Charba-Wiki/docs/5.6/intl/DateTimeFormat"},next:{title:"Implementing a plugin",permalink:"/Charba-Wiki/docs/5.6/plugins/"}},o={},g=[{value:"Date adapters",id:"date-adapters",level:2},{value:"Luxon",id:"luxon",level:2},{value:"Using the date adapter",id:"using-the-date-adapter",level:2}],s={toc:g},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"date-adapters"},"Date adapters"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," time and time series scale requires both a date library and corresponding adapter to be present."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," is providing the integration with 3 date libraries, but ",(0,n.yg)("strong",{parentName:"p"},"Charba")," is implementing the integration with ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://moment.github.io/luxon/"},"Luxon"))," date library.\nThe adoption of ",(0,n.yg)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," is justified because is completely based on ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"Intl")," API."),(0,n.yg)("p",null,"See ",(0,n.yg)("strong",{parentName:"p"},"Charba")," ",(0,n.yg)("a",{parentName:"p",href:"./getting-started/GettingStarted#embedded-resources"},"enabling documentation")," to have more details how to embed or not ",(0,n.yg)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," date library."),(0,n.yg)("h2",{id:"luxon"},"Luxon"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," is a powerful, modern, and friendly wrapper for java-script dates and times."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," uses the native ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"Intl")," API to provide easy-to-use internationalization."),(0,n.yg)("p",null,"These are the defaults that the library implements that you can change in the cartesian time axis."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"millisecond"),(0,n.yg)("td",{parentName:"tr",align:"left"},"h:mm:ss.SSS a"),(0,n.yg)("td",{parentName:"tr",align:"left"},"7:26:39.413 PM")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"second"),(0,n.yg)("td",{parentName:"tr",align:"left"},"h:mm:ss a"),(0,n.yg)("td",{parentName:"tr",align:"left"},"7:26:39 PM")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"minute"),(0,n.yg)("td",{parentName:"tr",align:"left"},"h:mm a"),(0,n.yg)("td",{parentName:"tr",align:"left"},"7:26 PM")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"hour"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ha"),(0,n.yg)("td",{parentName:"tr",align:"left"},"7PM")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"day"),(0,n.yg)("td",{parentName:"tr",align:"left"},"MMM d"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Feb 19")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"week"),(0,n.yg)("td",{parentName:"tr",align:"left"},"W yyyy"),(0,n.yg)("td",{parentName:"tr",align:"left"},"8 2020")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"month"),(0,n.yg)("td",{parentName:"tr",align:"left"},"MMM yyyy"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Feb 2020")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"quarter"),(0,n.yg)("td",{parentName:"tr",align:"left"},"'Q'q - yyyy"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Q1 - 2020")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"year"),(0,n.yg)("td",{parentName:"tr",align:"left"},"yyyy"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2020")))),(0,n.yg)("p",null,"To see all available formats, have a look ",(0,n.yg)("a",{parentName:"p",href:"https://moment.github.io/luxon/#/formatting?id=table-of-tokens"},"here")," in the ",(0,n.yg)("strong",{parentName:"p"},"Luxon")," documentation."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," can be configured in order to update some behavior during parsing, formatting and date management."),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/adapters/DateAdapterOptions.html"},"Luxon options")," can be used as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a time series axis \nCartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);\n// sets and gets the locale to date adapter options\naxis.getAdapters().getDate().setLocale(CLocale.US);\n\nCLocale locale = axis.getAdapters().getDate().getLocale();\n")),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"locale"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/intl/CLocale.html"},"CLocale")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Using locale specifying the language to use generating or interpreting strings.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"zone"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/intl/enums/TimeZone.html"},"TimeZone")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Implementation recognizes the time zone names of the IANA time zone database.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"outputCalendar"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/intl/enums/Calendar.html"},"Calendar")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The calendar type to use.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"numberingSystem"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/intl/enums/NumberingSystem.html"},"NumberingSystem")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The numbering system to use.")))),(0,n.yg)("p",null,"For more details, have a look how to configure ",(0,n.yg)("a",{parentName:"p",href:"./axes/CartesianTimeAxes#adapters"},"time axes adapters")," and the ",(0,n.yg)("a",{parentName:"p",href:"./intl/Locale"},"INTL locale")," documentation."),(0,n.yg)("h2",{id:"using-the-date-adapter"},"Using the date adapter"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," enables the possibility to get a ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/adapters/DateAdapter.html"},"date adapter")," instance from ",(0,n.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," which can provides some capabilities, like formatting, parsing and date operations."),(0,n.yg)("p",null,"Here is an example how to use a ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.6/org/pepstock/charba/client/adapters/DateAdapter.html"},"date adapter")," to format ticks by callback:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates a time axis \nCartesianTimeAxis axis = new CartesianTimeAxis(chart);\n// sets tick callback\naxis.getTicks().setCallback(new TimeTickCallback(){\n\n    private DateAdapter adapter = new DateAdapter();\n\n    @Override\n    public String onCallback(Axis axis, Date value, String label, int index, List<TimeTickItem> values){\n        return adapter.format(value, "yyyy");\n    }\n});\n')))}d.isMDXComponent=!0}}]);