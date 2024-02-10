"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[5768],{95788:(e,t,a)=>{a.d(t,{Iu:()=>d,yg:()=>f});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var g=r.createContext({}),p=function(e){var t=r.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(a),y=n,f=s["".concat(g,".").concat(y)]||s[y]||c[y]||l;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},12868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>g,toc:()=>d});var r=a(45072),n=(a(11504),a(95788)),l=a(70964);const i={id:"Grid",title:"Grid",hide_title:!0,sidebar_label:"Grid"},o=void 0,g={unversionedId:"axes/Grid",id:"version-5.0/axes/Grid",title:"Grid",description:"Grid",source:"@site/versioned_docs/version-5.0/axes/Grid.md",sourceDirName:"axes",slug:"/axes/Grid",permalink:"/Charba-Wiki/docs/5.0/axes/Grid",draft:!1,tags:[],version:"5.0",frontMatter:{id:"Grid",title:"Grid",hide_title:!0,sidebar_label:"Grid"},sidebar:"version-5.0/docs",previous:{title:"Radial axes",permalink:"/Charba-Wiki/docs/5.0/axes/RadialAxes"},next:{title:"Title",permalink:"/Charba-Wiki/docs/5.0/axes/ScaleTitle"}},p={},d=[{value:"Grid",id:"grid",level:2},{value:"Scriptable",id:"scriptable",level:3}],s={toc:d},c="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"grid"},"Grid"),(0,n.yg)("p",null,"It defines options for the grid lines that run perpendicular to the axis. "),(0,n.yg)("img",{src:(0,l.c)("/img/grid.png")}),(0,n.yg)("p",null,"All axes are providing the capability to set and get the options, by the ",(0,n.yg)("strong",{parentName:"p"},"set")," and ",(0,n.yg)("strong",{parentName:"p"},"get")," methods, as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the axis for chart\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets line width to the grid\naxis.getGrid().setDisplay(true);\n\nboolean display = axis.getGrid().isDisplay();\n")),(0,n.yg)("p",null,"Table with options:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If set, used as the color of the border line.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderDash"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Length and spacing of dashes on grid lines. See ",(0,n.yg)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash"},"MDN"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderDashOffset"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Offset for line dashes. See ",(0,n.yg)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"},"MDN"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If set, used as the width of the border line.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"circular"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", grid lines are circular (on radar chart only).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - String[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line and so on.",(0,n.yg)("br",null),"See ",(0,n.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"display"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"false"),", do not display grid lines for this axis.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"drawBorder"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", draw border at the edge between the axis and the chart area.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"drawOnChartArea"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"drawTicks"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", draw lines beside the ticks in the axis area beside the chart.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"lineWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int - int[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Stroke width of grid lines.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"offset"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", grid lines will be shifted to be between labels. This is set to ",(0,n.yg)("inlineCode",{parentName:"td"},"true")," in the bar chart by default.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"tickBorderDash"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Length and spacing of the tick mark line. If not set, defaults to the grid line ",(0,n.yg)("inlineCode",{parentName:"td"},"borderDash")," value.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"tickBorderDashOffset"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double - double[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Offset for the line dash of the tick mark. If unset, defaults to the grid line ",(0,n.yg)("inlineCode",{parentName:"td"},"borderDashOffset")," value")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"tickColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - String[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Color of the tick line. If unset, defaults to the grid line ",(0,n.yg)("inlineCode",{parentName:"td"},"color"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"tickLength"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Length in pixels that the grid lines will draw in the axis area.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"tickWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int - int[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#scriptable"},"Yes")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Width of the tick mark in pixels. If unset, defaults to the grid line ",(0,n.yg)("inlineCode",{parentName:"td"},"lineWidth"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"z"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"-"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The z-index of gridline layer. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.")))),(0,n.yg)("h3",{id:"scriptable"},"Scriptable"),(0,n.yg)("p",null,"Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in ",(0,n.yg)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),(0,n.yg)("p",null,"All scriptable options callbacks will get a ",(0,n.yg)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-scriptable-options-context"},"ScaleContext")," instance."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates the axis for chart\nCartesianLinearAxis axis = new CartesianLinearAxis(chart);\n// sets the option by a callback \naxis.getGrid().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),(0,n.yg)("p",null,"The following options can be set by a callback:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Callback"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderDashOffset"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html"},"BorderDashOffsetCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"lineWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"tickBorderDash"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html"},"BorderDashOffsetCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"tickColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"tickWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int")))))}y.isMDXComponent=!0}}]);