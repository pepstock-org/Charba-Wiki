"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[39918],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(a),u=n,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?r.createElement(h,l(l({ref:e},m),{},{components:a})):r.createElement(h,l({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},48314:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={id:"DateAdapters",title:"Date adapters",hide_title:!0,sidebar_label:"Date adapters"},p=void 0,s={unversionedId:"DateAdapters",id:"version-4.1/DateAdapters",title:"Date adapters",description:"Date adapters",source:"@site/versioned_docs/version-4.1/DateAdapters.md",sourceDirName:".",slug:"/DateAdapters",permalink:"/Charba-Wiki/docs/4.1/DateAdapters",draft:!1,tags:[],version:"4.1",frontMatter:{id:"DateAdapters",title:"Date adapters",hide_title:!0,sidebar_label:"Date adapters"},sidebar:"version-4.1/docs",previous:{title:"Date time formatting",permalink:"/Charba-Wiki/docs/4.1/intl/DateTimeFormat"},next:{title:"Implementing a plugin",permalink:"/Charba-Wiki/docs/4.1/plugins/"}},m={},d=[{value:"Date adapters",id:"date-adapters",level:2},{value:"Luxon",id:"luxon",level:2},{value:"Using the date adapter",id:"using-the-date-adapter",level:2}],c={toc:d};function u(t){var e=t.components,a=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"date-adapters"},"Date adapters"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," time and time series scale requires both a date library and corresponding adapter to be present."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," is providing the integration with 3 date libraries, but ",(0,i.kt)("strong",{parentName:"p"},"Charba")," is implementing the integration with ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://moment.github.io/luxon/"},"Luxon"))," date library.\nThe adoption of ",(0,i.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," is justified because is completely based on ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"Intl")," API."),(0,i.kt)("p",null,"See ",(0,i.kt)("strong",{parentName:"p"},"Charba")," ",(0,i.kt)("a",{parentName:"p",href:"./getting-started/GettingStarted#embedded-resources"},"enabling documentation")," to have more details how to embed or not ",(0,i.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," date library."),(0,i.kt)("h2",{id:"luxon"},"Luxon"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," is a powerful, modern, and friendly wrapper for java-script dates and times."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," uses the native ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"Intl")," API to provide easy-to-use internationalization."),(0,i.kt)("p",null,"These are the defaults that the library implements that you can change in the cartesian time axis."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"millisecond"),(0,i.kt)("td",{parentName:"tr",align:"left"},"h:mm:ss.SSS a"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7:26:39.413 PM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"second"),(0,i.kt)("td",{parentName:"tr",align:"left"},"h:mm:ss a"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7:26:39 PM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"minute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"h:mm a"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7:26 PM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hour"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ha"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7PM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"day"),(0,i.kt)("td",{parentName:"tr",align:"left"},"MMM d"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Feb 19")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"week"),(0,i.kt)("td",{parentName:"tr",align:"left"},"W yyyy"),(0,i.kt)("td",{parentName:"tr",align:"left"},"8 2020")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"month"),(0,i.kt)("td",{parentName:"tr",align:"left"},"MMM yyyy"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Feb 2020")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"quarter"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'Q'q - yyyy"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Q1 - 2020")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"year"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yyyy"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2020")))),(0,i.kt)("p",null,"To see all available formats, have a look ",(0,i.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/#/formatting?id=table-of-token"},"here")," in the ",(0,i.kt)("strong",{parentName:"p"},"Luxon")," documentation."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," can be configured in order to update some behavior during parsing, formatting and date management."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/adapters/DateAdapterOptions.html"},"Luxon options")," can be used as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates a time series axis \nCartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);\n// sets and gets the locale to date adapter options\naxis.getAdapters().getDate().setLocale(CLocale.US);\n\nCLocale locale = axis.getAdapters().getDate().getLocale();\n")),(0,i.kt)("p",null,"The following are the attributes that you can set:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"locale"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/intl/CLocale.html"},"CLocale")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Using locale specifying the language to use generating or interpreting strings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"zone"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/intl/enums/TimeZone.html"},"TimeZone")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Implementation recognizes the time zone names of the IANA time zone database.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"outputCalendar"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/intl/enums/Calendar.html"},"Calendar")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The calendar type to use.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"numberingSystem"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/intl/enums/NumberingSystem.html"},"NumberingSystem")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The numbering system to use.")))),(0,i.kt)("p",null,"For more details, have a look how to configure ",(0,i.kt)("a",{parentName:"p",href:"./axes/CartesianTimeAxes#adapters"},"time axes adapters")," and the ",(0,i.kt)("a",{parentName:"p",href:"./intl/Locale"},"INTL locale")," documentation."),(0,i.kt)("h2",{id:"using-the-date-adapter"},"Using the date adapter"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Charba")," enables the possibility to get a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/adapters/DateAdapter.html"},"date adapter")," instance from ",(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," which can provides some capabilities, like formatting, parsing and date operations."),(0,i.kt)("p",null,"Here is an example how to use a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/adapters/DateAdapter.html"},"date adapter")," to format ticks by callback:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates a time axis \nCartesianTimeAxis axis = new CartesianTimeAxis(chart);\n// sets tick callback\naxis.getTicks().setCallback(new TimeTickCallback(){\n\n    private DateAdapter adapter = new DateAdapter();\n\n    @Override\n    public String onCallback(Axis axis, Date value, String label, int index, List<TimeTickItem> values){\n        return adapter.format(value, "yyyy");\n    }\n});\n')))}u.isMDXComponent=!0}}]);