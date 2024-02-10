"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[87418],{95788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>m});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),g=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=g(a),d=n,m=c["".concat(p,".").concat(d)]||c[d]||b[d]||l;return a?r.createElement(m,o(o({ref:t},s),{},{components:a})):r.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var g=2;g<l;g++)o[g]=a[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(45072),n=(a(11504),a(95788)),l=a(70964);const o={id:"PointLabels",title:"Point labels",hide_title:!0,sidebar_label:"Point labels"},i=void 0,p={unversionedId:"axes/PointLabels",id:"version-6.2/axes/PointLabels",title:"Point labels",description:"Point Labels",source:"@site/versioned_docs/version-6.2/axes/PointLabels.md",sourceDirName:"axes",slug:"/axes/PointLabels",permalink:"/Charba-Wiki/docs/6.2/axes/PointLabels",draft:!1,tags:[],version:"6.2",frontMatter:{id:"PointLabels",title:"Point labels",hide_title:!0,sidebar_label:"Point labels"},sidebar:"docs",previous:{title:"Angle lines",permalink:"/Charba-Wiki/docs/6.2/axes/AngleLines"},next:{title:"Locale",permalink:"/Charba-Wiki/docs/6.2/intl/Locale"}},g={},s=[{value:"Point Labels",id:"point-labels",level:2},{value:"Scriptable",id:"scriptable",level:3},{value:"Callback",id:"callback",level:3}],c={toc:s},b="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(b,(0,r.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"point-labels"},"Point Labels"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/configuration/RadialPointLabels.html"},"point labels")," options are used to configure the point labels that are shown on the perimeter of the scale. They can be found in the pointLabels sub options object.\nNote "),(0,n.yg)("img",{src:(0,l.c)("/img/pointLabels.png")}),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"The point labels can be ",(0,n.yg)("strong",{parentName:"p"},"ONLY")," applied to radial axes.",(0,n.yg)("br",null),"\nThese options only apply if ",(0,n.yg)("strong",{parentName:"p"},"display")," is ",(0,n.yg)("strong",{parentName:"p"},"true"),".")),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/configuration/RadialPointLabels.html"},"RadialPointLabels")," provides all ",(0,n.yg)("strong",{parentName:"p"},"set")," and ",(0,n.yg)("strong",{parentName:"p"},"get")," methods to manage the configuration, as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables point labels\naxis.getPointLabels().setDisplay(true);\n// sets and gets the color value\naxis.getPointLabels().setColor(HtmlColor.RED);\n\nIsColor color = axis.getPointLabels().getColor();\n")),(0,n.yg)("p",null,"Table with options:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Background color of the point label.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"backdropPadding"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The padding of label backdrop.",(0,n.yg)("br",null),"See ",(0,n.yg)("a",{parentName:"td",href:"../configuration/Commons#padding"},"padding documentation")," for more details.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The border radius of the point label (in pixels).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"centerPointLabels"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", point labels are centered.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"display"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", point labels are shown.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Color of point labels.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"font"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Font of point labels.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Padding between chart and point labels, in pixel.")))),(0,n.yg)("p",null,"The further customization of point labels, a ",(0,n.yg)("a",{parentName:"p",href:"#callback"},"callback")," is provided."),(0,n.yg)("h3",{id:"scriptable"},"Scriptable"),(0,n.yg)("p",null,"Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in ",(0,n.yg)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,n.yg)("p",null,"All scriptable options callbacks will get a ",(0,n.yg)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-context"},"ScaleContext")," instance."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables point labels\naxis.getPointLabels().setDisplay(true);\n// sets the option by a callback \naxis.getPointLabels().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,n.yg)("p",null,"The following options can be set by a callback:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Callback"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"backdropColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html"},"BorderRadiusCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"font"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/SimplePaddingCallback.html"},"SimplePaddingCallback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"int")))),(0,n.yg)("h3",{id:"callback"},"Callback"),(0,n.yg)("p",null,"Callback implementation can transform data labels to point labels. The default implementation simply returns the current string."),(0,n.yg)("p",null,"To apply an own callback, you can set a ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.2/org/pepstock/charba/client/callbacks/PointLabelCallback.html"},"PointLabelCallback")," instance to the axis options, as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// enables point labels\naxis.getPointLabels().setDisplay(true);\n// sets callback\naxis.getPointLabels().setCallBack(new PointLabelCallback(){\n\n   /**\n    * Callback function to transform data labels to point labels. The default implementation simply returns the current string.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param item label of current label\n    * @param index index of the label\n    * @return new label to apply to point label\n    */\n    @Override\n    public String onCallback(Axis axis, String item, int index){\n      // logic\n      return item;\n   }\n         \n});\n")),(0,n.yg)("p",null,"The callback can return a string (for single line) or a list of strings (for multiple lines)."))}d.isMDXComponent=!0}}]);