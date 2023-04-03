"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[62496],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=s(a),g=i,k=c["".concat(p,".").concat(g)]||c[g]||h[g]||r;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function k(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},40997:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={id:"Animation",title:"Animation",hide_title:!0,sidebar_label:"Animation"},o=void 0,l={unversionedId:"configuration/Animation",id:"version-6.2/configuration/Animation",title:"Animation",description:"Animating charts",source:"@site/versioned_docs/version-6.2/configuration/Animation.md",sourceDirName:"configuration",slug:"/configuration/Animation",permalink:"/Charba-Wiki/docs/6.2/configuration/Animation",draft:!1,tags:[],version:"6.2",frontMatter:{id:"Animation",title:"Animation",hide_title:!0,sidebar_label:"Animation"},sidebar:"docs",previous:{title:"Interaction",permalink:"/Charba-Wiki/docs/6.2/configuration/Interaction"},next:{title:"Datasets",permalink:"/Charba-Wiki/docs/6.2/configuration/Datasets"}},p={},s=[{value:"Animating charts",id:"animating-charts",level:2},{value:"Animation",id:"animation",level:2},{value:"Scriptable",id:"scriptable",level:3},{value:"Animations",id:"animations",level:2},{value:"Default animations",id:"default-animations",level:3},{value:"Scriptable animations",id:"scriptable-animations",level:3},{value:"Transitions",id:"transitions",level:2},{value:"Disabling animation",id:"disabling-animation",level:2},{value:"Events",id:"events",level:2},{value:"Progressing",id:"progressing",level:3},{value:"Completed",id:"completed",level:3}],m={toc:s},c="wrapper";function h(t){let{components:e,...a}=t;return(0,i.kt)(c,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"animating-charts"},"Animating charts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," animates charts out of the box and ",(0,i.kt)("strong",{parentName:"p"},"Charba")," does not change this behavior. A number of options are provided to configure how the animation looks and how long it takes."),(0,i.kt)("p",null,"The animation configuration consists in 3 different elements:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#animation"},"Animation"))," to configure the common animation options."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#animations"},"Animations"))," to configure the common animation options for a specific sets of element(like bar, point, arc and line) properties."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/configuration/Transitions.html"},"Transitions"))," to configure the animation and animations options for a specific update mode.")),(0,i.kt)("h2",{id:"animation"},"Animation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/configuration/Animation.html"},"Animation")," is used to configure the base options to animate the chart."),(0,i.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,i.kt)("strong",{parentName:"p"},"set")," and ",(0,i.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// sets and gets duration option to the animation of the chart\nchart.getOptions().getAnimation().setDuration(2000);\n\nint duration = chart.getOptions().getAnimation().getDuration();\n")),(0,i.kt)("p",null,"The default values are set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#animation"},"default global animation options"),"."),(0,i.kt)("p",null,"The following animation options are available. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"animateRotate"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the chart will animate in with a rotation animation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"animateScale"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", will animate scaling the chart from the center outwards.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"delay"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Delay in milliseconds before starting the animations.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"duration"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of milliseconds an animation takes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"easing"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/Easing.html"},"Easing")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Easing function to use.",(0,i.kt)("br",null),"See ",(0,i.kt)("a",{parentName:"td",href:"http://robertpenner.com/easing/"},"Robert Penner's easing equations")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"loop"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the animations loop endlessly.")))),(0,i.kt)("h3",{id:"scriptable"},"Scriptable"),(0,i.kt)("p",null,"Scriptable options at animation level accept a callback which is called for each of the underlying data values. See more details in ",(0,i.kt)("a",{parentName:"p",href:"ScriptableOptions"},"Configuring charts")," section. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates chart\nBarChart chart = new BarChart();\n// gets options\nBarOptions options = chart.getOptions();\n// sets the animation option by a callback \noptions.getAnimation().setDuration(new DurationCallback() {\n            \n    @Override\n    public Integer invoke(DatasetContext context) {\n        // logic\n        return duration;\n    }\n});\n")),(0,i.kt)("p",null,"The following options can be set by a callback:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"delay"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/DelayCallback.html"},"DelayCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"double")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"duration"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/DurationCallback.html"},"DurationCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"double")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"easing"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/EasingCallback.html"},"EasingCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/Easing.html"},"Easing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"loop"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/LoopCallback.html"},"LoopCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean")))),(0,i.kt)("h2",{id:"animations"},"Animations"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/configuration/Animations.html"},"Animations")," options configures which element properties are animated and how."),(0,i.kt)("p",null,"The animations element is a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/options/AnimationCollection.html"},"container of configurations")," which can be stored and retrieved by a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/options/AnimationCollectionKey.html"},"key"),"."),(0,i.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,i.kt)("strong",{parentName:"p"},"set")," and ",(0,i.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates my animations key, setting it as a collection of properties\n// which are numbers\nAnimationCollectionKey key = AnimationCollectionKey.create("myKey", AnimationType.NUMBER);\n// creates and gets an animation configuration item by my key\nAnimationCollection animationCollection = chart.getOptions().getAnimations().create(key);\n// sets and gets duration option to the animation configuration\nanimationCollection.setDuration(2000);\n\nint duration = animationCollection.getDuration();\n')),(0,i.kt)("p",null,"The default values are set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#animations"},"default global animations options"),"."),(0,i.kt)("p",null,"The following options are available in ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/options/AnimationCollection.html"},"animation collection")," object: "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"delay"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Delay in milliseconds before starting the animations.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"duration"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of milliseconds an animation takes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"easing"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/Easing.html"},"Easing")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Easing function to use.",(0,i.kt)("br",null),"See ",(0,i.kt)("a",{parentName:"td",href:"http://robertpenner.com/easing/"},"Robert Penner's easing equations")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"from"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean - double - String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Start value for the animation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"loop"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the animations loop endlessly.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"properties"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/options/AnimationPropertyKey.html"},"AnimationPropertyKey"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The properties of elements to use to animate."),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"type"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/AnimationType.html"},"AnimationType")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Type of property, determines the interpolator used."),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"to"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean - double - String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"End value for the animation.")))),(0,i.kt)("h3",{id:"default-animations"},"Default animations"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," provides a default configuration for every specific ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/AnimationType.html"},"animation type"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"AnimationType"),(0,i.kt)("th",{parentName:"tr",align:"left"},"DefaultAnimationCollectionKey"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Properties"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"NUMBERS"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/DefaultAnimationCollectionKey.html"},"NUMBERS")),(0,i.kt)("td",{parentName:"tr",align:"left"},"DefaultAnimationPropertyKey.X,",(0,i.kt)("br",null),"DefaultAnimationPropertyKey.Y,",(0,i.kt)("br",null),"DefaultAnimationPropertyKey.BORDER_WIDTH,",(0,i.kt)("br",null)," DefaultAnimationPropertyKey.RADIUS,",(0,i.kt)("br",null),"DefaultAnimationPropertyKey.TENSION")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"COLORS"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/DefaultAnimationCollectionKey.html"},"COLORS")),(0,i.kt)("td",{parentName:"tr",align:"left"},"DefaultAnimationPropertyKey.COLOR, DefaultAnimationPropertyKey.BORDER_COLOR, DefaultAnimationPropertyKey.BACKGROUND_COLOR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"BOOLEAN"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/DefaultAnimationCollectionKey.html"},"VISIBLE")),(0,i.kt)("td",{parentName:"tr",align:"left"},"DefaultAnimationPropertyKey.VISIBLE")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"These default animations are overridden by most of the charts default configuration.")),(0,i.kt)("h3",{id:"scriptable-animations"},"Scriptable animations"),(0,i.kt)("p",null,"Scriptable options at animations level accept a callback which is called for each of the underlying data values. See more details in ",(0,i.kt)("a",{parentName:"p",href:"ScriptableOptions"},"Configuring charts")," section. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// creates chart\nBarChart chart = new BarChart();\n// gets options\nBarOptions options = chart.getOptions();\n// creates animations configuration\nAnimationCollection animationCollection = options.getAnimations().create(DefaultAnimationCollectionKey.NUMBERS);\n// sets the animation option by a callback \nanimationCollection.setFrom(new FromCallback() {\n            \n    @Override\n    public Double invoke(DatasetContext context) {\n        // logic\n        return from;\n    }\n});\n")),(0,i.kt)("p",null,"The following options can be set by a callback:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"delay"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/DelayCallback.html"},"DelayCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"double")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"duration"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/DurationCallback.html"},"DurationCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"double")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"easing"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/EasingCallback.html"},"EasingCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/Easing.html"},"Easing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"from"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/FromCallback.html"},"FromCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean - double - String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"loop"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/LoopCallback.html"},"LoopCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"to"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/toCallback.html"},"ToCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean - double - String - ",(0,i.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))))),(0,i.kt)("h2",{id:"transitions"},"Transitions"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/configuration/Transitions.html"},"transitions")," are a set of animation configuration related to a specific update mode."),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/options/AnimationTransition.html"},"transition animation configuration")," contains an instance of ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/configuration/Animation.html"},"Animation")," and one of ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/configuration/Animations.html"},"Animations")," to configure the animation for a specific mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates a custom mode\nTransitionKey mode = TransitionKey.create("myMode");\n// creates an animation transitions configuration for my mode\nAnimationTransition animationMode = chart.getOptions().getTransitions().create(mode);\n\n// gets animation and animations elements\nAnimation animation = animationMode.getAnimation();\n\nAnimations animations = animationMode.getAnimations();\n')),(0,i.kt)("p",null,"The default values are set in global defaults options, see ",(0,i.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#transitions"},"default global transitions options"),"."),(0,i.kt)("p",null,"The defaults modes are mapped in the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/enums/DefaultTransitionKey.html"},"DefaultTransitionKey")," enumeration and they are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ACTIVE")," uses the animation configuration when an element is hovering"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HIDE")," uses the animation configuration when a dataset is hidden (by using legend or ",(0,i.kt)("a",{parentName:"li",href:"../charts/Api#hide"},"hide")," method)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RESET")," uses the animation configuration when an element is resetting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RESIZE")," uses the animation configuration when an element is resizing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SHOW")," uses the animation configuration when a dataset is shown (by using legend or ",(0,i.kt)("a",{parentName:"li",href:"../charts/Api#show"},"show")," method).")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// gets animation transitions element\nTransitions transitions = chart.getOptions().getTransitions();\n// creates an animation transitions configuration for "show"\nAnimationTransition animationMode = transitions.create(DefaultTransitionKey.SHOW);\n// changes animation configuration setting duration to 10 seconds\nanimationMode.getAnimation().setDuration(10000);\n// updates the chart using "show" mode\nchart.update(DefaultTransitionKey.SHOW);\n')),(0,i.kt)("p",null,"A custom transition can be used by passing it to ",(0,i.kt)("a",{parentName:"p",href:"../charts/Api#update"},"update")," or ",(0,i.kt)("a",{parentName:"p",href:"../charts/Api#reconfigure"},"reconfigure")," methods of the chart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// creates a custom mode\nTransitionKey mode = TransitionKey.create("myMode");\n// creates an animation transitions configuration for my mode\nAnimationTransition animationMode = chart.getOptions().getTransitions().create(mode);\n// changes animation configuration setting duration to 10 seconds\nanimationMode.getAnimation().setDuration(10000);\n// updates the chart using my mode\nchart.update(mode);\n')),(0,i.kt)("h2",{id:"disabling-animation"},"Disabling animation"),(0,i.kt)("p",null,"To disable an animation configuration, the animation node must be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", with the exception for animation transitions which can be disabled by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// ----------------------------------------\n// disables all animations\n// ----------------------------------------\nchart.getOptions().setAnimationEnabled(false); \n// ----------------------------------------\n// disables animation defined by the collection of 'colors' properties\n// ----------------------------------------\nchart.getOptions().getAnimations().setEnabled(DefaultAnimationCollectionKey.COLORS, false);\n// ----------------------------------------\n// disables the animation for 'active' mode\n// ----------------------------------------\n// gets animation transitions element\nTransitions transitions = chart.getOptions().getTransitions();\n// creates an animation transitions configuration for \"active\"\nAnimationTransition animationMode = transitions.create(DefaultTransitionKey.ACTIVE);\n// changes animation configuration setting duration to 0 seconds\nanimationMode.getAnimation().setDuration(0);\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"A chart can emits events during the animation phases, when it's the animation is progressing and completed."),(0,i.kt)("h3",{id:"progressing"},"Progressing"),(0,i.kt)("p",null,"The progress event is thrown on each step of an animation. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/AnimationProgressEventHandler.html"},"AnimationProgressEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new AnimationProgressEventHandler(){\n\n   /**\n    * Invoked when chart animation is progressing.\n    * \n    * @param event animation event\n    */\n   @Override \n   public void onProgress(AnimationProgressEvent event){\n      AnitmationItem item = event.getItem();\n      // logic\n   }\n         \n}, AnimationProgressEvent.TYPE);\n")),(0,i.kt)("p",null,"The event provides the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/items/AnimationItem.html"},"animation item")," object with all information about animation status."),(0,i.kt)("h3",{id:"completed"},"Completed"),(0,i.kt)("p",null,"The complete event is thrown at the end of an animation. To catch the event and manage it, you can add a ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/events/AnimationCompleteEventHandler.html"},"AnimationCompleteEventHandler")," instance to the chart options, as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"chart.addHandler(new AnimationCompleteEventHandler(){\n\n   /**\n    * Invoked when chart animation is complete.\n    * \n    * @param event animation event\n    */\n   @Override \n   public void onComplete(AnimationCompleteEvent event){\n      AnitmationItem item = event.getItem();\n      // logic\n   }\n         \n}, AnimationCompleteEvent.TYPE);\n")),(0,i.kt)("p",null,"The event provides the ",(0,i.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/items/AnimationItem.html"},"animation item")," object with all information about animation status."))}h.isMDXComponent=!0}}]);