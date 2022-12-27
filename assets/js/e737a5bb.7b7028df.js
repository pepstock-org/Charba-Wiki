"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[16078],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var o=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},l=Object.keys(t);for(o=0;o<l.length;o++)a=l[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)a=l[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=o.createContext({}),s=function(t){var e=o.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=s(t.components);return o.createElement(p.Provider,{value:e},t.children)},h="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),h=s(a),d=n,g=h["".concat(p,".").concat(d)]||h[d]||m[d]||l;return a?o.createElement(g,r(r({ref:e},c),{},{components:a})):o.createElement(g,r({ref:e},c))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[h]="string"==typeof t?t:n,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62252:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var o=a(87462),n=(a(67294),a(3905)),l=a(44996);const r={id:"Tooltip",title:"Tooltip",hide_title:!0,sidebar_label:"Tooltip"},i=void 0,p={unversionedId:"configuration/Tooltip",id:"version-5.8/configuration/Tooltip",title:"Tooltip",description:"",source:"@site/versioned_docs/version-5.8/configuration/Tooltip.md",sourceDirName:"configuration",slug:"/configuration/Tooltip",permalink:"/Charba-Wiki/docs/5.8/configuration/Tooltip",draft:!1,tags:[],version:"5.8",frontMatter:{id:"Tooltip",title:"Tooltip",hide_title:!0,sidebar_label:"Tooltip"},sidebar:"docs",previous:{title:"Legend",permalink:"/Charba-Wiki/docs/5.8/configuration/Legend"},next:{title:"Title",permalink:"/Charba-Wiki/docs/5.8/configuration/Title"}},s={},c=[{value:"Tooltip",id:"tooltip",level:2},{value:"Positioning",id:"positioning",level:3},{value:"Items callbacks",id:"items-callbacks",level:2},{value:"Sorting",id:"sorting",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Elements callbacks",id:"elements-callbacks",level:2},{value:"Title",id:"title",level:3},{value:"Body",id:"body",level:3},{value:"Footer",id:"footer",level:3},{value:"Label",id:"label",level:3},{value:"External rendering callback",id:"external-rendering-callback",level:2}],h={toc:c};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,o.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"tooltip"},"Tooltip"),(0,n.kt)("p",null,"A tooltip is a text description near an object. The tooltip is displayed when the user hovers the mouse cursor over the object."),(0,n.kt)("p",null,"Tooltips are helpful for new users because they enable the user to learn about each icon or object by hovering their mouse over them. "),(0,n.kt)("img",{src:(0,l.Z)("/img/tooltip-base.png")}),(0,n.kt)("p",null,"To get, change and apply own properties, you can invoke the ",(0,n.kt)("strong",{parentName:"p"},"set")," and ",(0,n.kt)("strong",{parentName:"p"},"get")," methods, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// enables tooltip, setting the interaction mode\nchart.getOptions().getTooltips().setEnabled(true);\nchart.getOptions().getTooltips().setMode(InteractionMode.AVERAGE);\n\nboolean enabled = chart.getOptions().getTooltips().isEnabled();\nInteractionMode mode = chart.getOptions().getTooltips().getMode();\n")),(0,n.kt)("p",null,"The default values are set in global defaults options, see ",(0,n.kt)("a",{parentName:"p",href:"../defaults/DefaultsCharts#tooltip"},"default global tooltip options"),"."),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Background color of the tooltips.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bodyColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Color of body text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bodyFont"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Font of body text. The default value is the global font with the style set to FontStyle.NORMAL.",(0,n.kt)("br",null),"See ",(0,n.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bodyAlign"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/enums/TextAlign.html"},"TextAlign")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alignment of body element of the tooltips.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bodySpacing"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Spacing to add to top and bottom of each tooltip item.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Color of the border.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Size of the border.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"boxWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Width of the color box if ",(0,n.kt)("inlineCode",{parentName:"td"},"displayColors")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"boxHeight"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Height of the color box if ",(0,n.kt)("inlineCode",{parentName:"td"},"displayColors")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"caretPadding"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extra distance to move the end of the tooltip arrow away from the tooltip point.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"caretSize"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Size, in px, of the tooltip arrow.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cornerRadius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Radius of tooltip corner curves.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"displayColors"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", color boxes are shown in the tooltip.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", the tooltips are enabled.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"events"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/options/IsEvent.html"},"IsEvent"),"[] - Set","<",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/options/IsEvent.html"},"IsEvent"),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The events option defines the browser events that the tooltip should listen to.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"footerColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Color of the footer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"footerFont"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Font of footer text. The default value is the global font with the style set to FontStyle.BOLD.",(0,n.kt)("br",null),"See ",(0,n.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"footerAlign"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/enums/TextAlign.html"},"TextAlign")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alignment of footer element of the tooltips.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"footerMarginTop"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Margin to add before drawing the footer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"footerSpacing"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Spacing to add to top and bottom of each footer line.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"intersect"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"if ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", the tooltip mode applies only when the mouse position intersects with an element. If ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),", the mode will be applied at all times.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/enums/InteractionMode.html"},"InteractionMode")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets which elements appear in the tooltip.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"multiKeyBackground"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Color to draw behind the colored boxes when multiple items are in the tooltip.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"padding"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The padding to add inside the tooltip.",(0,n.kt)("br",null),"See ",(0,n.kt)("a",{parentName:"td",href:"Commons#padding"},"padding documentation")," for more details.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"position"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/enums/TooltipPosition.html"},"TooltipPosition")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The mode for positioning the tooltip.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rtl"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"true")," for rendering the tooltips from right to left.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"textDirection"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/enums/TextDirection.html"},"TextDirection")),(0,n.kt)("td",{parentName:"tr",align:"left"},"This will force the text direction on the canvas for rendering the tooltips, regardless of the CSS specified on the canvas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"titleColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Color of the footer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"titleFont"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Font of title text. The default value is the global font with the style set to FontStyle.BOLD.",(0,n.kt)("br",null),"See ",(0,n.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"titleAlign"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/enums/TextAlign.html"},"TextAlign")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alignment of title element of the tooltips.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"titleMarginBottom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Margin to add on bottom of title section.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"titleSpacing"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Spacing to add to top and bottom of each title line.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"usePointStyle"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use the corresponding point style (from dataset options) instead of color boxes (size is based on the minimum value between box width and box height).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"xAlign"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/enums/TooltipAlign.html"},"TooltipAlign")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Position of the tooltip caret in the X direction.",(0,n.kt)("br",null),"Can accept only TooltipAlign.LEFT, TooltipAlign.CENTER and TooltipAlign.RIGHT.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"yAlign"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/enums/TooltipAlign.html"},"TooltipAlign")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Position of the tooltip caret in the Y direction.",(0,n.kt)("br",null),"Can accept only TooltipAlign.TOP, TooltipAlign.CENTER and TooltipAlign.BOTTOM.")))),(0,n.kt)("h3",{id:"positioning"},"Positioning"),(0,n.kt)("p",null,"Possible ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/enums/TooltipPosition.html"},"tooltip position")," out-of the box are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TooltipPosition.AVERAGE"),", it will place the tooltip at the average position of the items displayed in the tooltip."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TooltipPosition.NEAREST"),", it will place the tooltip at the position of the element closest to the event position.")),(0,n.kt)("p",null,"New modes can be defined by adding a custom implementation, by a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/positioner/TooltipPositioner.html"},"TooltipPositioner")," which can provide the tooltip position based on own logic."),(0,n.kt)("p",null,"By the ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/positioner/Positioner.html"},"Positioner")," singleton, you could register and unregister custom positioners. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// creates my tooltip position\nfinal CustomTooltipPosition myPosition = new CustomTooltipPosition("myPosition");\n// registers new tooltip positioner\nPositioner.get().register(new TooltipPositioner(){\n\n   /**\n    * Returns the tooltip position\n    * which must be used in chart options.\n    * \n    * @return the tooltip position.\n    */\n   @Override\n   public CustomTooltipPosition getName(){\n       return myPosition;\n   }\n\n   /**\n    * Applies own logic to returns the point where the tooltip must be showed.\n    * \n    * @param chart chart instance\n    * @param items list of dataset reference items\n    * @param eventPoint the point of event when the method has been invoked\n    * @return the point where the tooltip must be showed.\n    */\n   @Override\n   public Point computePosition(IsChart chart, List<DatasetReference> items, Point eventPoint){\n       ChartAreaNode area = chart.getNode().getChartArea();\n       Point p = new Point();\n       p.setX(area.getLeft());\n       p.setY(area.getTop());\n       return p;\n   });\n} \n....\n// sets new tooltip position to chart options\nchart.getOptions().getTooltips().setPosition(myPosition);\n')),(0,n.kt)("p",null,"If the positioner will return ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," instead of a point, the tooltip will disappear."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/positioner/Positioner.html"},"Positioner")," provides a method to get the position calculated by defined tooltip position."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// creates my tooltip position\nfinal CustomTooltipPosition myPosition = new CustomTooltipPosition("myPosition");\n// registers new tooltip positioner\nPositioner.get().register(new TooltipPositioner(){\n\n   /**\n    * Returns the tooltip position\n    * which must be used in chart options.\n    * \n    * @return the tooltip position.\n    */\n   @Override\n   public CustomTooltipPosition getName(){\n       return myPosition;\n   }\n\n   /**\n    * Applies own logic to returns the point where the tooltip must be showed.\n    * \n    * @param chart chart instance\n    * @param items list of dataset reference items\n    * @param eventPoint the point of event when the method has been invoked\n    * @return the point where the tooltip must be showed.\n    */\n   @Override\n   public Point computePosition(IsChart chart, List<DatasetReference> items, Point eventPoint){\n       ChartAreaNode area = chart.getNode().getChartArea();\n       Point p = new Point();\n       p.setX(area.getLeft());\n        Point average = Positioner.get().invokePositioner(TooltipPosition.AVERAGE, chart, items, eventPoint);\n        if (average != null) {\n            p.setY(average.getY());\n            return p;\n        }\n        // hide tooltip\n        return null;\n   });\n} \n....\n// sets new tooltip position to chart options\nchart.getOptions().getTooltips().setPosition(myPosition);\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you unregister a positioner and a chart still is configured with the custom tooltip position, ",(0,n.kt)("strong",{parentName:"p"},"Charba")," will throw an exception when the chart will be updated.")),(0,n.kt)("h2",{id:"items-callbacks"},"Items callbacks"),(0,n.kt)("p",null,"A chart tooltips can be configured at runtime, providing some interfaces for a specific purpose."),(0,n.kt)("h3",{id:"sorting"},"Sorting"),(0,n.kt)("p",null,"The implementation of ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/callbacks/TooltipItemSortCallback.html"},"TooltipItemSortCallback")," allows sorting of tooltip items. "),(0,n.kt)("p",null,"To apply the callback, you can set a instance to the chart options, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().setItemSortCallback(new TooltipItemSortCallback(){\n\n   /**\n    * Allows sorting of tooltip items.\n    * \n    * @param chart chart instance\n    * @param item1 the first object to be compared.\n    * @param item2 the second object to be compared.\n    * @return a negative integer, zero, or a positive integer as the first argument \n    *         is less than, equal to, or greater than the second.\n    */\n   @Override \n   public int onItemSort(IsChart chart, TooltipItem item1, TooltipItem item2){\n      // logic\n      return 0;\n   }\n         \n});\n")),(0,n.kt)("p",null,"The callback uses a couple of ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/items/TooltipItem.html"},"TooltipItem")," to enable the sort."),(0,n.kt)("h3",{id:"filtering"},"Filtering"),(0,n.kt)("p",null,"The implementation of ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/callbacks/TooltipFilterCallback.html"},"TooltipFilterCallback")," allows filtering of tooltip items."),(0,n.kt)("p",null,"To apply the callback, you can set a instance to the chart options, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().setFilterCallback(new TooltipFilterCallback(){\n\n   /**\n    * Allows filtering of tooltip items.\n    * \n    * @param chart chart instance\n    * @param item item to be filtered\n    * @return false to remove the item\n    *         from the container, otherwise true.\n    */\n   @Override \n   public boolean onFilter(IsChart chart, TooltipItem item){\n      // logic\n      return true;\n   }\n         \n});\n")),(0,n.kt)("p",null,"The callback uses ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/items/TooltipItem.html"},"TooltipItem")," to enable filtering."),(0,n.kt)("h2",{id:"elements-callbacks"},"Elements callbacks"),(0,n.kt)("p",null,"There are a set of available callbacks to configure and customize own tooltips. The tooltip callbacks configuration is nested in the tooltip configuration. "),(0,n.kt)("p",null,"To simplify the implementation of all callbacks available in ",(0,n.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS"),", ",(0,n.kt)("strong",{parentName:"p"},"Charba")," splits the callbacks in 4 main ones, to manage every single element of a tooltip separately:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Title"),(0,n.kt)("li",{parentName:"ul"},"Body"),(0,n.kt)("li",{parentName:"ul"},"Footer"),(0,n.kt)("li",{parentName:"ul"},"Labels")),(0,n.kt)("img",{src:(0,l.Z)("/img/tooltip.png")}),(0,n.kt)("p",null,"All callbacks must be set in a inner element of tooltip configuration, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// gets the inner callbacks element\nTooltipsCallbacks callbacks = chart.getOptions().getTooltips().getCallbacks();\n")),(0,n.kt)("p",null,"To invoke the default behavior of the chart, you can use ",(0,n.kt)("a",{parentName:"p",href:"../defaults/#methods"},"defaults")," methods of ",(0,n.kt)("inlineCode",{parentName:"p"},"Defaults")," object."),(0,n.kt)("h3",{id:"title"},"Title"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/callbacks/TooltipTitleCallback.html"},"TooltipTitleCallback")," is triggered for providing text of title."),(0,n.kt)("p",null,"All methods must return a list of strings which are treated as multiple lines of text."),(0,n.kt)("p",null,"This callback takes care about labels to apply to the title, all methods are implemented by own defaults in order that you can implement only the method where you are interested in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface TooltipTitleCallback {\n\n   /**\n    * Returns the text to render before the title.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the title.\n    */\n   default List<String> onBeforeTitle(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n\n   /**\n    * Returns text to render as the title of the tooltip.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the title.\n    */\n   default List<String> onTitle(IsChart chart, List<TooltipItem> items){\n      return Defaults.get().invokeTooltipsCallbackOnTitle(chart, items);\n   }\n\n   /**\n    * Returns text to render after the title.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the title.\n    */\n   default List<String> onAfterTitle(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n\n}\n")),(0,n.kt)("p",null,"To apply the callback, you can set a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/callbacks/TooltipTitleCallback.html"},"TooltipTitleCallback")," instance to the chart options, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new TooltipTitleCallback){\n\n// implementation\n         \n});\n")),(0,n.kt)("h3",{id:"body"},"Body"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/callbacks/TooltipBodyCallback.html"},"TooltipBodyCallback")," is triggered for providing text of body."),(0,n.kt)("p",null,"All methods must return a list of strings which are treated as multiple lines of text."),(0,n.kt)("p",null,"This callback takes care about labels to apply to the body, all methods are implemented by own defaults in order that you can implement only the method where you are interested in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface TooltipBodyCallback {\n\n   /**\n    * Returns text to render before the body section.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the body.\n    */\n   default List<String> onBeforeBody(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n\n   /**\n    * Returns text to render after the body section.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltips items\n    * @return a list of labels to apply to the body.\n    */\n   default List<String> onAfterBody(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n}\n")),(0,n.kt)("p",null,"To apply the callback, you can set a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/callbacks/TooltipBodyCallback.html"},"TooltipBodyCallback")," instance to the chart options, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().getCallbacks().setBodyCallback(new TooltipBodyCallback){\n\n// implementation\n         \n});\n")),(0,n.kt)("h3",{id:"footer"},"Footer"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/callbacks/TooltipFooterCallback.html"},"TooltipFooterCallback")," is triggered for providing text of footer."),(0,n.kt)("p",null,"All methods must return a list of strings which are treated as multiple lines of text."),(0,n.kt)("p",null,"This callback takes care about labels to apply to the footer, all methods are implemented by own defaults in order that you can implement only the method where you are interested in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface TooltipFooterCallback {\n\n   /**\n    * Returns text to render before the footer section.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the title.\n    */\n   default List<String> onBeforeFooter(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n\n   /**\n    * Returns text to render as the footer of the tooltip.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the title.\n    */\n   default List<String> onFooter(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n\n   /**\n    * Text to render after the footer section.\n    * If returns null or empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param items list of all tooltip items\n    * @return a list of labels to apply to the title.\n    */\n   default List<String> onAfterFooter(IsChart chart, List<TooltipItem> items){\n      return Collections.emptyList();\n   }\n}\n")),(0,n.kt)("p",null,"To apply the callback, you can set a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/callbacks/TooltipFooterCallback.html"},"TooltipFooterCallback")," instance to the chart options, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().getCallbacks().setFooterCallback(new TooltipFooterCallback){\n\n// implementation\n         \n});\n")),(0,n.kt)("h3",{id:"label"},"Label"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/callbacks/TooltipLabelCallback.html"},"TooltipLabelCallback")," is triggered for providing the text and colors that displays for a given data point."),(0,n.kt)("p",null,"This callback takes care about labels and styles  to apply to the tooltip items, all methods are implemented by own defaults in order that you can implement only the method where you are interested in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface TooltipLabelCallback {\n\n   /**\n    * Returns text to render before an individual label.\n    * This will be called for each item in the tooltip.\n    * If returns null or an empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param item tooltip item\n    * @return labels to be applied.\n    */\n   default List<String> onBeforeLabel(IsChart chart, TooltipItem item){\n      return Collections.emptyList();\n   }\n\n   /**\n    * Returns text to render for an individual item in the tooltip.\n    * If returns null or an empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param item tooltip item\n    * @return labels to be applied.\n    */\n   default List<String> onLabel(IsChart chart, TooltipItem item){\n      return Defaults.get().invokeTooltipsCallbackOnLabel(chart, item);\n   }\n\n   /**\n    * Returns the colors and borders to render for the tooltip item.\n    * If returns null, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param item tooltip item\n    * @return label color to be applied.\n    */\n   default TooltipLabelColor onLabelColor(IsChart chart, TooltipItem item){\n      return Defaults.get().invokeTooltipsCallbackOnLabelColor(chart, item);\n   }\n\n   /**\n    * Returns the point style to use instead of color boxes if usePointStyle is true.\n    * Default implementation uses the point style from the dataset points.\n    * \n    * @param chart chart instance\n    * @param item tooltip item\n    * @return point style to be applied.\n    */\n   default TooltipLabelPointStyle onLabelPointStyle(IsChart chart, TooltipItem item){\n      return Defaults.get().invokeTooltipsCallbackOnLabelPointStyle(chart, item);\n   }\n\n   /**\n    * Returns the colors for the text of the label for the tooltip item.\n    * If returns null, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param item tooltip item\n    * @return label text color to be applied.\n    */\n   default IsColor onLabelTextColor(IsChart chart, TooltipItem item){\n      return chart.getOptions().getTooltips().getBodyColor();\n   }\n\n   /**\n    * Returns text to render after an individual label.\n    * If returns null or an empty list, it will be ignored.\n    * \n    * @param chart chart instance\n    * @param item tooltip item\n    * @return labels to be applied.\n    */\n   default List<String> onAfterLabel(IsChart chart, TooltipItem item){\n      return Collections.emptyList();\n   }\n}\n")),(0,n.kt)("p",null,"To apply the callback, you can set a ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/callbacks/TooltipLabelCallback.html"},"TooltipLabelCallback")," instance to the chart options, as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().getCallbacks().setLabelCallback(new TooltipLabelCallback){\n\n// implementation\n         \n});\n")),(0,n.kt)("p",null,"To set the color or borders of labels, there is ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/items/TooltipLabelColor.html"},"TooltipLabelColor")," class which enable the setting of colors and borders."),(0,n.kt)("p",null,"To set the point style of labels, there is ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/items/TooltipLabelPointStyle.html"},"TooltipLabelPointStyle")," class which enable the setting of point style and the rotation to apply."),(0,n.kt)("h2",{id:"external-rendering-callback"},"External rendering callback"),(0,n.kt)("p",null,"The implementation of ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/callbacks/TooltipExternalCallback.html"},"TooltipExternalCallback")," allows you to hook in the tooltip rendering process so that you can render the tooltip in own custom way. "),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("img",{src:(0,l.Z)("/img/externalTooltipCallabck.png")}))))),(0,n.kt)("p",null,"Generally this is used to create an HTML tooltip and you can enable custom tooltips in the chart configuration as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"chart.getOptions().getTooltips().setExternalCallback(new TooltipExternalCallback(){\n\n   /**\n    * External tooltips callback allows you to hook in the tooltip \n    * rendering process so that you can render the tooltip in your own\n    * custom way.\n    * \n    * @param chart chart instance\n    * @param model all info about tooltip to create own HTML tooltip.\n    */\n   @Override \n   public onCustom(IsChart chart, TooltipModel model){\n      // logic\n   }\n         \n});\n")),(0,n.kt)("p",null,"The callback can use the ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/items/TooltipModel.html"},"tooltip model"),", with the complete model about the tooltip."))}m.isMDXComponent=!0}}]);