"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[2467],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=m(a),k=r,h=s["".concat(o,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(h,i(i({ref:e},d),{},{components:a})):n.createElement(h,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8425:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return d},default:function(){return s}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={id:"DateAdapters",title:"Date adapters",hide_title:!0,sidebar_label:"Date adapters"},o=void 0,m={unversionedId:"DateAdapters",id:"version-3.3/DateAdapters",isDocsHomePage:!1,title:"Date adapters",description:"Date adapters",source:"@site/versioned_docs/version-3.3/DateAdapters.md",sourceDirName:".",slug:"/DateAdapters",permalink:"/Charba-Wiki/docs/3.3/DateAdapters",tags:[],version:"3.3",frontMatter:{id:"DateAdapters",title:"Date adapters",hide_title:!0,sidebar_label:"Date adapters"},sidebar:"version-3.3/docs",previous:{title:"Cartesian time",permalink:"/Charba-Wiki/docs/3.3/CartesianTimeAxes"},next:{title:"Radial axes",permalink:"/Charba-Wiki/docs/3.3/RadialAxes"}},d=[{value:"Date adapters",id:"date-adapters",children:[]},{value:"Moment.js",id:"momentjs",children:[]},{value:"Luxon",id:"luxon",children:[]},{value:"Datefns",id:"datefns",children:[]},{value:"Using the date adapter",id:"using-the-date-adapter",children:[]}],u={toc:d};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"date-adapters"},"Date adapters"),(0,l.kt)("p",null,"As of version ",(0,l.kt)("strong",{parentName:"p"},"3")," of ",(0,l.kt)("strong",{parentName:"p"},"Charba"),", ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," is not longer provided by the bundle artifact where there was a default date time library to use for time series."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," time scale requires both a date library and corresponding adapter to be present."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," is providing the integration with 3 date libraries, that you can choose by the specific resource type:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://momentjs.com/"},"Moment.js")," which remains the default for ",(0,l.kt)("strong",{parentName:"li"},"Charba"),", enabled by ",(0,l.kt)("inlineCode",{parentName:"li"},"EmbeddedResources")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"DeferredResources")," classes."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/"},"Luxon")," which can be enabled by ",(0,l.kt)("inlineCode",{parentName:"li"},"LuxonEmbeddedResources")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"LuxonDeferredResources")," classes. "),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://date-fns.org/"},"Date-fns")," which can be enabled by ",(0,l.kt)("inlineCode",{parentName:"li"},"DatefnsEmbeddedResources")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"DatefnsDeferredResources")," classes. ")),(0,l.kt)("h2",{id:"momentjs"},"Moment.js"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://momentjs.com/"},"Moment.js")," is a lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates."),(0,l.kt)("p",null,"These are the defaults that the library implements that you can change into cartesian time axis."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,l.kt)("td",{parentName:"tr",align:null},"h:mm:ss.SSS a"),(0,l.kt)("td",{parentName:"tr",align:null},"7:25:34.639 pm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"second"),(0,l.kt)("td",{parentName:"tr",align:null},"h:mm:ss a"),(0,l.kt)("td",{parentName:"tr",align:null},"7:25:34 pm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minute"),(0,l.kt)("td",{parentName:"tr",align:null},"h:mm a"),(0,l.kt)("td",{parentName:"tr",align:null},"7:25 pm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hour"),(0,l.kt)("td",{parentName:"tr",align:null},"hA"),(0,l.kt)("td",{parentName:"tr",align:null},"7PM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"day"),(0,l.kt)("td",{parentName:"tr",align:null},"MMM D"),(0,l.kt)("td",{parentName:"tr",align:null},"Feb 19")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"week"),(0,l.kt)("td",{parentName:"tr",align:null},"w YYYY"),(0,l.kt)("td",{parentName:"tr",align:null},"8 2020")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"month"),(0,l.kt)("td",{parentName:"tr",align:null},"MMM YYYY"),(0,l.kt)("td",{parentName:"tr",align:null},"Feb 2020")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quarter"),(0,l.kt)("td",{parentName:"tr",align:null},"[Q]","Q - YYYY"),(0,l.kt)("td",{parentName:"tr",align:null},"Q1 - 2020")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"year"),(0,l.kt)("td",{parentName:"tr",align:null},"YYYY"),(0,l.kt)("td",{parentName:"tr",align:null},"2020")))),(0,l.kt)("p",null,"To see all available formats, have a look ",(0,l.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/#/formatting?id=table-of-tokens"},"here")," into Moment.js documentation."),(0,l.kt)("h2",{id:"luxon"},"Luxon"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," is a powerful, modern, and friendly wrapper for Javascript dates and times. "),(0,l.kt)("p",null,"These are the defaults that the library implements that you can change into cartesian time axis."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,l.kt)("td",{parentName:"tr",align:null},"h:mm:ss.SSS a"),(0,l.kt)("td",{parentName:"tr",align:null},"7:26:39.413 PM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"second"),(0,l.kt)("td",{parentName:"tr",align:null},"h:mm:ss a"),(0,l.kt)("td",{parentName:"tr",align:null},"7:26:39 PM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minute"),(0,l.kt)("td",{parentName:"tr",align:null},"h:mm a"),(0,l.kt)("td",{parentName:"tr",align:null},"7:26 PM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hour"),(0,l.kt)("td",{parentName:"tr",align:null},"ha"),(0,l.kt)("td",{parentName:"tr",align:null},"7PM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"day"),(0,l.kt)("td",{parentName:"tr",align:null},"MMM d"),(0,l.kt)("td",{parentName:"tr",align:null},"Feb 19")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"week"),(0,l.kt)("td",{parentName:"tr",align:null},"W yyyy"),(0,l.kt)("td",{parentName:"tr",align:null},"8 2020")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"month"),(0,l.kt)("td",{parentName:"tr",align:null},"MMM yyyy"),(0,l.kt)("td",{parentName:"tr",align:null},"Feb 2020")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quarter"),(0,l.kt)("td",{parentName:"tr",align:null},"'Q'q - yyyy"),(0,l.kt)("td",{parentName:"tr",align:null},"Q1 - 2020")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"year"),(0,l.kt)("td",{parentName:"tr",align:null},"yyyy"),(0,l.kt)("td",{parentName:"tr",align:null},"2020")))),(0,l.kt)("p",null,"To see all available formats, have a look ",(0,l.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/#/formatting?id=table-of-tokens"},"here")," into Luxon documentation."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://moment.github.io/luxon/"},"Luxon")," is the only adapter which can be configured in order to update some behavior during parsing, formatting and date management."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/adapters/LuxonOptions.html"},"Luxon options")," has got the following table options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zone"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"If defined, adapter will use that time zone. See ",(0,l.kt)("a",{parentName:"td",href:"https://moment.github.io/luxon/#/zones"},"here")," for more details")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"locale"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"If defined, adapter will use that locale. See ",(0,l.kt)("a",{parentName:"td",href:"https://moment.github.io/luxon/#/intl"},"here")," for more details")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setZone"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", adapter will apply the zone as fixed-offset one")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputCalendar"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"If defined, adapter will use that calendaring systems. See ",(0,l.kt)("a",{parentName:"td",href:"https://moment.github.io/luxon/#/calendars"},"here")," for more details")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numberingSystem"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"If defined, adapter will use that numbering systems. See ",(0,l.kt)("a",{parentName:"td",href:"https://moment.github.io/luxon/#/intl"},"here")," for more details")))),(0,l.kt)("h2",{id:"datefns"},"Datefns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://date-fns.org/"},"Date-fns")," provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates."),(0,l.kt)("p",null,"These are the defaults that the library implements that you can change into cartesian time axis."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"millisecond"),(0,l.kt)("td",{parentName:"tr",align:null},"h:mm:ss.SSS aaaa"),(0,l.kt)("td",{parentName:"tr",align:null},"7:27:20.682 p.m.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"second"),(0,l.kt)("td",{parentName:"tr",align:null},"h:mm:ss aaaa"),(0,l.kt)("td",{parentName:"tr",align:null},"7:27:20 p.m.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minute"),(0,l.kt)("td",{parentName:"tr",align:null},"h:mm aaaa"),(0,l.kt)("td",{parentName:"tr",align:null},"7:27 p.m.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hour"),(0,l.kt)("td",{parentName:"tr",align:null},"ha"),(0,l.kt)("td",{parentName:"tr",align:null},"7PM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"day"),(0,l.kt)("td",{parentName:"tr",align:null},"MMM d"),(0,l.kt)("td",{parentName:"tr",align:null},"Feb 19")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"week"),(0,l.kt)("td",{parentName:"tr",align:null},"I yyyy"),(0,l.kt)("td",{parentName:"tr",align:null},"8 2020")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"month"),(0,l.kt)("td",{parentName:"tr",align:null},"MMM yyyy"),(0,l.kt)("td",{parentName:"tr",align:null},"Feb 2020")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quarter"),(0,l.kt)("td",{parentName:"tr",align:null},"qqq - yyyy"),(0,l.kt)("td",{parentName:"tr",align:null},"Q1 - 2020")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"year"),(0,l.kt)("td",{parentName:"tr",align:null},"yyyy"),(0,l.kt)("td",{parentName:"tr",align:null},"2020")))),(0,l.kt)("p",null,"To see all available formats, have a look ",(0,l.kt)("a",{parentName:"p",href:"https://date-fns.org/v2.9.0/docs/format"},"here")," into Datefns documentation."),(0,l.kt)("h2",{id:"using-the-date-adapter"},"Using the date adapter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," enables the possibility to get a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/adapters/DateAdapter.html"},"date adapter")," instance from ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," which can provides some capabilities, like formatting, parsing and date operations."),(0,l.kt)("p",null,"Here is an example how to use a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/adapters/DateAdapter.html"},"date adapter")," to format ticks by callback:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'CartesianTimeAxis axis = new CartesianTimeAxis(chart);\naxis.getTicks().setCallback(new TimeTickCallback() {\n\n    private DateAdapter adapter = new DateAdapter();\n\n    @Override\n    public String onCallback(Axis axis, Date value, String label, int index, List<TimeTickItem> values) {\n        return adapter.format(value, "yyyy");\n    }\n});\n')))}s.isMDXComponent=!0}}]);