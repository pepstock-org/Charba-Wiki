"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[12608],{95788:(t,e,a)=>{a.d(e,{Iu:()=>g,yg:()=>d});var r=a(11504);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},g=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},h="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,g=i(t,["components","mdxType","originalType","parentName"]),h=p(a),u=n,d=h["".concat(s,".").concat(u)]||h[u]||c[u]||o;return a?r.createElement(d,l(l({ref:e},g),{},{components:a})):r.createElement(d,l({ref:e},g))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[h]="string"==typeof t?t:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24516:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var r=a(45072),n=(a(11504),a(95788)),o=a(70964);const l={id:"PluginCrosshair",title:"Crosshair plugin",hide_title:!0,sidebar_label:"Crosshair"},i=void 0,s={unversionedId:"plugins/PluginCrosshair",id:"version-6.0/plugins/PluginCrosshair",title:"Crosshair plugin",description:"Crosshair plugin",source:"@site/versioned_docs/version-6.0/plugins/Crosshair.md",sourceDirName:"plugins",slug:"/plugins/PluginCrosshair",permalink:"/Charba-Wiki/docs/6.0/plugins/PluginCrosshair",draft:!1,tags:[],version:"6.0",frontMatter:{id:"PluginCrosshair",title:"Crosshair plugin",hide_title:!0,sidebar_label:"Crosshair"},sidebar:"docs",previous:{title:"Chart cursor",permalink:"/Charba-Wiki/docs/6.0/plugins/PluginPointer"},next:{title:"Color schemes",permalink:"/Charba-Wiki/docs/6.0/plugins/PluginColorSchemes"}},p={},g=[{value:"Crosshair plugin",id:"crosshair-plugin",level:2},{value:"Options",id:"options",level:2},{value:"Labelling",id:"labelling",level:2},{value:"Formatter",id:"formatter",level:3},{value:"Options builder",id:"options-builder",level:2}],h={toc:g},c="wrapper";function u(t){let{components:e,...a}=t;return(0,n.yg)(c,(0,r.c)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"crosshair-plugin"},"Crosshair plugin"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," provides a plugin implementation to set the crosshair on the chart when a chart."),(0,n.yg)("p",null,"Crosshairs are thin vertical and horizontal lines centered on a data point in a chart. When you, as a chart creator, enable crosshairs in your charts, your users will then be able to target a single element."),(0,n.yg)("img",{src:(0,o.c)("/img/crosshair.png")}),(0,n.yg)("p",null,"This plugin, as singleton, can be set both at global and at chart level."),(0,n.yg)("p",null,"The implementation is ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/impl/plugins/Crosshair.html"},"Crosshair")," and can be set as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// ---------------------------------\n// Registers as global plugin\n// ---------------------------------\nDefaults.get().getPlugins().register(Crosshair.get());\n// ---------------------------------\n// Registers as single chart plugin\n// ---------------------------------\nchart.getPlugins().add(Crosshair.get());\n")),(0,n.yg)("p",null,"The ID of plugin is ",(0,n.yg)("inlineCode",{parentName:"p"},"charbacrosshair")," (",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/impl/plugins/Crosshair.html#ID"},"Crosshair.ID"),")."),(0,n.yg)("h2",{id:"options"},"Options"),(0,n.yg)("p",null,"It could be that you set this plugin as global one for all your charts but you want to change it for only one instance."),(0,n.yg)("p",null,"In this case you should instantiate a ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/impl/plugins/CrosshairOptions.html"},"CrosshairOptions")," and set it to your chart options as following, setting the color you want:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nCrosshairOptions options = new CrosshairOptions();\n// set mode \noptions.setMode(InteractionAxis.XY);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nchart.getOptions().getPlugin().setOptions(Crosshair.ID, options);\n// stores the plugin options without plugin ID\nchart.getOptions().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store(chart);\n")),(0,n.yg)("p",null,"You can also change the default for all charts instances, as following"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nCrosshairOptions options = new CrosshairOptions();\n// set mode \noptions.setMode(InteractionAxis.XY);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(Crosshair.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store();\n")),(0,n.yg)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/impl/plugins/CrosshairOptionsFactory.html"},"CrosshairOptionsFactory")," as static reference inside the ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/impl/plugins/Crosshair.html"},"plugin")," which can be used to retrieve the options from chart, as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nCrosshairOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(Crosshair.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(Crosshair.ID, Crosshair.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(Crosshair.FACTORY);\n}\n")),(0,n.yg)("p",null,"The following are the attributes that you can set to plugin options:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"enabled"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", the plugin is enabled.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"lineColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"HtmlColor.GRAY - ",(0,n.yg)("span",{style:{backgroundColor:"gray",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The color of the line of the cross hairs.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"lineDash"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"[2, 2]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"lineDashOffset"),(0,n.yg)("td",{parentName:"tr",align:"left"},"double"),(0,n.yg)("td",{parentName:"tr",align:"left"},"0"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Offset for line dashes. See ",(0,n.yg)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"},"MDN"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"lineWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The width of the line of the cross hairs.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"mode"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/enums/InteractionAxis.html"},"InteractionAxis")),(0,n.yg)("td",{parentName:"tr",align:"left"},"InteractionAxis.XY"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Sets the display on horizontal and/or vertical hairs.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"modifierKey"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/enums/ModifierKey.html"},"ModifierKey")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"null")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Keyboard modifier key which must be pressed to enable the cross hair.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"xScaleID"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/options/ScaleId.html"},"ScaleId")),(0,n.yg)("td",{parentName:"tr",align:"left"},"DefaultScaleId.X"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The ID of the X axis to use to position the vertical cross hair.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"yScaleID"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/options/ScaleId.html"},"ScaleId")),(0,n.yg)("td",{parentName:"tr",align:"left"},"DefaultScaleId.Y"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The ID of the Y axis to use to position the horizontal cross hair.")))),(0,n.yg)("h2",{id:"labelling"},"Labelling"),(0,n.yg)("p",null,"The plugin enables the labels on the scales in order to show the values of the cross hair. You can configure separately the labels on X and Y."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nCrosshairOptions options = new CrosshairOptions();\n// set X label options\noptions.getXLabel().setBackgroundColor(HtmlColor.RED);\n// set Y label options\noptions.getYLabel().setBackgroundColor(HtmlColor.YELLOW);\n")),(0,n.yg)("p",null,"The following are the attributes that you can set to plugin label options:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"display"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If ",(0,n.yg)("inlineCode",{parentName:"td"},"true"),", the label is shown.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"rgb(110, 112, 121) - ",(0,n.yg)("span",{style:{backgroundColor:"rgb(110, 112, 121)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The background color of the label.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderColor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"HtmlColor.TRANSPARENT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The border color of the label.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"6"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The border radius of the label.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"borderWidth"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"0"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The border width of the label.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"color"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,n.yg)("td",{parentName:"tr",align:"left"},"HtmlColor.WHITE - ",(0,n.yg)("span",{style:{backgroundColor:"white",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The color of the text of the label.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"font"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/options/IsFont.html"},"IsFont")),(0,n.yg)("td",{parentName:"tr",align:"left"},"See description"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Font of the text of the label.",(0,n.yg)("br",null),(0,n.yg)("br",null),"The default value is the global font.",(0,n.yg)("br",null),"See ",(0,n.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"padding"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"6"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The space around the text of the label.")))),(0,n.yg)("p",null,"To set the same value to both labels, without writing twice the same code, ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/impl/plugins/CrosshairOptions.html"},"CrosshairOptions")," is providing a objet which enables that:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nCrosshairOptions options = new CrosshairOptions();\n// set background color to X and Y labels\noptions.getLabels().setBackgroundColor(HtmlColor.RED);\n")),(0,n.yg)("h3",{id:"formatter"},"Formatter"),(0,n.yg)("p",null,"The plugin provides a callback to change the format the value of label text in order to show whatever is needed."),(0,n.yg)("img",{src:(0,o.c)("/img/crosshairLabelFormatter.png")}),(0,n.yg)("p",null,"The formatter can be instantiated implementing ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/callbacks/CrosshairFormatterCallback.html"},"CrosshairFormatterCallback")," interface which is providing 3 parameters:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"chart instance"),(0,n.yg)("li",{parentName:"ol"},"the scale instance, where the label is related to."),(0,n.yg)("li",{parentName:"ol"},"the value, retrieved from the scale at the position of the cross hair.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nCrosshairOptions options = new CrosshairOptions();\n// set Y label formatter\noptions.getYLabel().setFormatter(new CrosshairFormatterCallback() {\n\n    /**\n     * Returns the text to apply to the crosshair label.\n     * \n     * @param chart chart instance\n     * @param scale scale instance\n     * @param value current value to draw in the label\n     * @return the text to apply to the crosshair label\n     */\n    @Override\n    public String format(IsChart chart, ScaleItem scale, ScaleValueItem value) {\n        if (format.getValue()) {\n            return Utilities.applyPrecision(value.getValue(), 0);\n        }\n        return value.getLabel();\n    }\n});\n")),(0,n.yg)("h2",{id:"options-builder"},"Options builder"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,n.yg)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"// creates a plugin options\nCrosshairOptions options = CrosshairOptionsBuilder.create()\n    .setMode(InteractionAxis.XY)\n    .setXLabelBackgroundColor(HtmlColor.RED)\n    .build();\n// sets options\nchart.getOptions().getPlugins().setOptions(Crosshair.ID, options);\n")),(0,n.yg)("p",null,"Creating a build by ",(0,n.yg)("inlineCode",{parentName:"p"},"CrosshairOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,n.yg)("inlineCode",{parentName:"p"},"CrosshairOptionsBuilder.create(chart)")," it will use the global chart options as default."))}u.isMDXComponent=!0}}]);