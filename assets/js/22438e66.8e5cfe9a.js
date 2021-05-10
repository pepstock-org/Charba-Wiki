(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{209:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return h}));var r=a(0),n=a.n(r);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=n.a.createContext({}),p=function(t){var e=n.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return n.a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},m=n.a.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,b=t.parentName,i=c(t,["components","mdxType","originalType","parentName"]),s=p(a),m=r,h=s["".concat(b,".").concat(m)]||s[m]||d[m]||l;return a?n.a.createElement(h,o(o({ref:e},i),{},{components:a})):n.a.createElement(h,o({ref:e},i))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,b=new Array(l);b[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,b[1]=o;for(var i=2;i<l;i++)b[i]=a[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return b})),a.d(e,"metadata",(function(){return o})),a.d(e,"toc",(function(){return c})),a.d(e,"default",(function(){return p}));var r=a(3),n=a(8),l=(a(0),a(209)),b={id:"Title",title:"Title",hide_title:!0,sidebar_label:"Title"},o={unversionedId:"configuration/Title",id:"configuration/Title",isDocsHomePage:!1,title:"Title",description:"Title",source:"@site/docs/configuration/Title.md",sourceDirName:"configuration",slug:"/configuration/Title",permalink:"/Charba-Wiki/docs/configuration/Title",version:"current",sidebar_label:"Title",frontMatter:{id:"Title",title:"Title",hide_title:!0,sidebar_label:"Title"},sidebar:"docs",previous:{title:"Tooltip",permalink:"/Charba-Wiki/docs/configuration/Tooltip"},next:{title:"Elements",permalink:"/Charba-Wiki/docs/configuration/Elements"}},c=[{value:"Title",id:"title",children:[]},{value:"Scriptable",id:"scriptable",children:[]}],i={toc:c};function p(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"title"},"Title"),Object(l.b)("p",null,"A title is a name or words used to describe a chart."),Object(l.b)("p",null,"To get, change and apply own properties, you can invoke the ",Object(l.b)("strong",{parentName:"p"},"set")," and ",Object(l.b)("strong",{parentName:"p"},"get")," methods, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'// sets the text of title\nchart.getOptions().getTitle().setText("My title of chart");\n// enables the title and setting to use red color for text\nchart.getOptions().getTitle().setDisplay(true);\nchart.getOptions().getTitle().setColor("red");\n\nIsColor color = chart.getOptions().getTitle().getColor();\nboolean display = chart.getOptions().getTitle().isDisplay();\n')),Object(l.b)("p",null,"The defaults values are set in global defaults options, see ",Object(l.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts#title"},"default global title options"),"."),Object(l.b)("p",null,"The following are the attributes that you can set:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Scriptable"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"align"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/ElementAlign.html"},"ElementAlign")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Alignment of the title.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"color"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Color of text of the title.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"display"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the title is shown.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"font"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/options/Font.html"},"Font")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Font of title text. The default value is the global font with the style set to FontStyle.BOLD.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"fullSize"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"Marks that this box should take the full width/height of the canvas (moving other boxes).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"padding"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Number of pixels to add above and below the title text.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"Commons#padding"},"padding documentation")," for more details.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"position"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/Position.html"},"Position")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Position of title.")))),Object(l.b)("h2",{id:"scriptable"},"Scriptable"),Object(l.b)("p",null,"Title also accepts a callback, for some of above attributes, which is called at runtime and that takes the context as single argument, see ",Object(l.b)("a",{parentName:"p",href:"ScriptableOptions#chart-context"},"here")," the details, which is representing contextual information and chart instance."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// get title\nTitle title = chart.getOptions().getTitle();\n// sets callback\ntitle.setPadding(new PaddingCallback<ChartContext>(){\n\n   @Override\n   public PaddingItem invoke(ChartContext context){\n      PaddingItem padding = new PaddingItem(); \n      // your logic\n      return padding;\n   }\n});\n")),Object(l.b)("p",null,"The following option can be set by a callback:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Callback"),Object(l.b)("th",{parentName:"tr",align:"left"},"Returned types"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"align"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ElementAlignCallback.html"},"ElementAlignCallback"),"<","ChartContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/ElementAlign.html"},"ElementAlign"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"color"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ChartContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"display"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/DisplayCallback.html"},"DisplayCallback"),"<","ChartContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"font"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ChartContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"padding"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/PaddingCallback.html"},"PaddingCallback"),"<","ChartContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/items/PaddingItem.html"},"PaddingItem"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"position"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/PositionCallback.html"},"PositionCallback"),"<","ChartContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/Position.html"},"Position"))))))}p.isMDXComponent=!0}}]);