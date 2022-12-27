"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[89301],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},b="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),b=s(a),k=n,m=b["".concat(p,".").concat(k)]||b[k]||d[k]||l;return a?r.createElement(m,o(o({ref:e},c),{},{components:a})):r.createElement(m,o({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[b]="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},48440:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(44996);const o={id:"PointLabels",title:"Point labels",hide_title:!0,sidebar_label:"Point labels"},i=void 0,p={unversionedId:"axes/PointLabels",id:"version-5.4/axes/PointLabels",title:"Point labels",description:"",source:"@site/versioned_docs/version-5.4/axes/PointLabels.md",sourceDirName:"axes",slug:"/axes/PointLabels",permalink:"/Charba-Wiki/docs/5.4/axes/PointLabels",draft:!1,tags:[],version:"5.4",frontMatter:{id:"PointLabels",title:"Point labels",hide_title:!0,sidebar_label:"Point labels"},sidebar:"docs",previous:{title:"Angle lines",permalink:"/Charba-Wiki/docs/5.4/axes/AngleLines"},next:{title:"Locale",permalink:"/Charba-Wiki/docs/5.4/intl/Locale"}},s={},c=[{value:"Point Labels",id:"point-labels",level:2},{value:"Scriptable",id:"scriptable",level:3},{value:"Callback",id:"callback",level:3}],b={toc:c};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},b,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"point-labels"},"Point Labels"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/RadialPointLabels.html"},"point labels")," options are used to configure the point labels that are shown on the perimeter of the scale. They can be found in the pointLabels sub options object.\nNote "),(0,n.kt)("img",{src:(0,l.Z)("/img/pointLabels.png")}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The point labels can be ",(0,n.kt)("strong",{parentName:"p"},"ONLY")," applied to radial axes.",(0,n.kt)("br",null),"\nThese options only apply if ",(0,n.kt)("strong",{parentName:"p"},"display")," is ",(0,n.kt)("strong",{parentName:"p"},"true"),".")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/RadialPointLabels.html"},"RadialPointLabels")," provides all ",(0,n.kt)("strong",{parentName:"p"},"set")," and ",(0,n.kt)("strong",{parentName:"p"},"get")," methods to manage the configuration, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables point labels\naxis.getPointLabels().setDisplay(true);\n// sets and gets the color value\naxis.getPointLabels().setColor(HtmlColor.RED);\n\nIsColor color = axis.getPointLabels().getColor();\n")),(0,n.kt)("p",null,"Table with options:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Background color of the point label.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backdropPadding"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The padding of label backdrop.",(0,n.kt)("br",null),"See ",(0,n.kt)("a",{parentName:"td",href:"../configuration/Commons#padding"},"padding documentation")," for more details.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The border radius of the point label (in pixels).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"centerPointLabels"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", point labels are centered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"display"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", point labels are shown.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"color"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Color of point labels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"font"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Font of point labels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Padding between chart and point labels, in pixel.")))),(0,n.kt)("p",null,"The further customization of point labels, a ",(0,n.kt)("a",{parentName:"p",href:"#callback"},"callback")," is provided."),(0,n.kt)("h3",{id:"scriptable"},"Scriptable"),(0,n.kt)("p",null,"Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in ",(0,n.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,n.kt)("p",null,"All scriptable options callbacks will get a ",(0,n.kt)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-context"},"ScaleContext")," instance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables point labels\naxis.getPointLabels().setDisplay(true);\n// sets the option by a callback \naxis.getPointLabels().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,n.kt)("p",null,"The following options can be set by a callback:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html"},"BorderRadiusCallback"),"<","ScaleContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"color"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"font"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ScaleContext",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/SimplePaddingCallback.html"},"SimplePaddingCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int")))),(0,n.kt)("h3",{id:"callback"},"Callback"),(0,n.kt)("p",null,"Callback implementation can transform data labels to point labels. The default implementation simply returns the current string."),(0,n.kt)("p",null,"To apply an own callback, you can set a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/PointLabelCallback.html"},"PointLabelCallback")," instance to the axis options, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables point labels\naxis.getPointLabels().setDisplay(true);\n// sets callback\naxis.getPointLabels().setCallBack(new PointLabelCallback(){\n\n   /**\n    * Callback function to transform data labels to point labels. The default implementation simply returns the current string.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item label of current label\n    * @param index index of the label\n    * @return new label to apply to point label\n    */\n    @Override\n    public String onCallback(Axis axis, String item, int index){\n      // logic\n      return item;\n   }\n         \n});\n")),(0,n.kt)("p",null,"The callback can return a string (for single line) or a list of strings (for multiple lines)."))}d.isMDXComponent=!0}}]);