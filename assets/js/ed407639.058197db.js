"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[40829],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=s(a),h=n,k=d["".concat(p,".").concat(h)]||d[h]||b[h]||l;return a?r.createElement(k,i(i({ref:e},c),{},{components:a})):r.createElement(k,i({ref:e},c))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50316:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return b}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"Subtitle",title:"Subtitle",hide_title:!0,sidebar_label:"Subtitle"},p=void 0,s={unversionedId:"configuration/Subtitle",id:"version-4.2/configuration/Subtitle",title:"Subtitle",description:"Subtitle",source:"@site/versioned_docs/version-4.2/configuration/Subtitle.md",sourceDirName:"configuration",slug:"/configuration/Subtitle",permalink:"/Charba-Wiki/docs/4.2/configuration/Subtitle",tags:[],version:"4.2",frontMatter:{id:"Subtitle",title:"Subtitle",hide_title:!0,sidebar_label:"Subtitle"},sidebar:"version-4.2/docs",previous:{title:"Title",permalink:"/Charba-Wiki/docs/4.2/configuration/Title"},next:{title:"Elements",permalink:"/Charba-Wiki/docs/4.2/configuration/Elements"}},c={},b=[{value:"Subtitle",id:"subtitle",level:2},{value:"Scriptable",id:"scriptable",level:2}],d={toc:b};function h(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"subtitle"},"Subtitle"),(0,l.kt)("p",null,"A subtitle is a second title placed under the main title, by default."),(0,l.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,l.kt)("strong",{parentName:"p"},"set")," and ",(0,l.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// sets the text of subtitle\nchart.getOptions().getSubtitle().setText("My subtitle of chart");\n// enables the subtitle and setting to use red color for text\nchart.getOptions().getSubtitle().setDisplay(true);\nchart.getOptions().getSubtitle().setColor("red");\n\nIsColor color = chart.getOptions().getSubtitle().getColor();\nboolean display = chart.getOptions().getSubtitle().isDisplay();\n')),(0,l.kt)("p",null,"The defaults values are set in global defaults options, see ",(0,l.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#subtitle"},"default global title options"),"."),(0,l.kt)("p",null,"The following are the attributes that you can set:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"align"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/ElementAlign.html"},"ElementAlign")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alignment of the subtitle.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Color of text of the subtitle.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"display"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the subtitle is shown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Font of subtitle text. The default value is the global font with the style set to FontStyle.BOLD.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fullSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Marks that this box should take the full width/height of the canvas (moving other boxes).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number of pixels to add above and below the subtitle text.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"Commons#padding"},"padding documentation")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"position"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/Position.html"},"Position")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Position of subtitle.")))),(0,l.kt)("h2",{id:"scriptable"},"Scriptable"),(0,l.kt)("p",null,"Subtitle also accepts a callback, for some of above attributes, which is called at runtime and that takes the context as single argument, see ",(0,l.kt)("a",{parentName:"p",href:"ScriptableOptions#chart-context"},"here")," the details, which is representing contextual information and chart instance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// get subtitle\nSubtitle subtitle = chart.getOptions().getSubtitle();\n// sets callback\nsubtitle.setPadding(new PaddingCallback<ChartContext>(){\n\n   @Override\n   public PaddingItem invoke(ChartContext context){\n      PaddingItem padding = new PaddingItem(); \n      // your logic\n      return padding;\n   }\n});\n")),(0,l.kt)("p",null,"The following option can be set by a callback:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"align"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ElementAlignCallback.html"},"ElementAlignCallback"),"<","ChartContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/ElementAlign.html"},"ElementAlign"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ChartContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"display"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/DisplayCallback.html"},"DisplayCallback"),"<","ChartContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ChartContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fullSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/FullSizeCallback.html"},"FullSizeCallback"),"<","ChartContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/PaddingCallback.html"},"PaddingCallback"),"<","ChartContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/PaddingItem.html"},"PaddingItem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"position"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/PositionCallback.html"},"PositionCallback"),"<","ChartContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/enums/Position.html"},"Position"))))))}h.isMDXComponent=!0}}]);