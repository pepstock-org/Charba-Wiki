"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[11545],{3905:(t,e,a)=>{a.d(e,{Zo:()=>b,kt:()=>h});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},b=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,b=i(t,["components","mdxType","originalType","parentName"]),d=s(a),g=l,h=d["".concat(p,".").concat(g)]||d[g]||c[g]||r;return a?n.createElement(h,o(o({ref:e},b),{},{components:a})):n.createElement(h,o({ref:e},b))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85504:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>b});var n=a(87462),l=(a(67294),a(3905)),r=a(44996);const o={id:"Labels",title:"Labels plugin",hide_title:!0,sidebar_label:"Labels"},i=void 0,p={unversionedId:"extensions/Labels",id:"version-5.5/extensions/Labels",title:"Labels plugin",description:"Labels plugin",source:"@site/versioned_docs/version-5.5/extensions/Labels.md",sourceDirName:"extensions",slug:"/extensions/Labels",permalink:"/Charba-Wiki/docs/5.5/extensions/Labels",draft:!1,tags:[],version:"5.5",frontMatter:{id:"Labels",title:"Labels plugin",hide_title:!0,sidebar_label:"Labels"},sidebar:"docs",previous:{title:"Gradient",permalink:"/Charba-Wiki/docs/5.5/extensions/Gradient"},next:{title:"Zoom",permalink:"/Charba-Wiki/docs/5.5/extensions/Zoom"}},s={},b=[{value:"Labels plugin",id:"labels-plugin",level:2},{value:"Activation",id:"activation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Options",id:"options",level:2},{value:"Scriptable",id:"scriptable",level:2},{value:"Color",id:"color",level:3},{value:"Font",id:"font",level:3},{value:"Render",id:"render",level:3},{value:"Options builder",id:"options-builder",level:2}],d={toc:b},c="wrapper";function g(t){let{components:e,...a}=t;return(0,l.kt)(c,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"labels-plugin"},"Labels plugin"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/emn178/chartjs-plugin-labels"},"Labels")," which is a light weight plugin to display labels on pie, doughnut, polar area and bar chart (former name was PieceLabel)."),(0,l.kt)("img",{src:(0,r.Z)("/img/labels.png")}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The plugin has been heavily changed in order to be compliant with ",(0,l.kt)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," version 3.x) in the ",(0,l.kt)("strong",{parentName:"p"},"Charba")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/blob/master/src/org/pepstock/charba/client/resources/js/chartjs-plugin-labels.js"},"project")," because the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/emn178/chartjs-plugin-labels"},"original project")," is unmaintained.")),(0,l.kt)("h2",{id:"activation"},"Activation"),(0,l.kt)("p",null,"The labels plugin is injected directly in the document."),(0,l.kt)("p",null,"The plugin ID is a constant everywhere available, ",(0,l.kt)("inlineCode",{parentName:"p"},"LabelsPlugin.ID"),", in ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/LabelsPlugin.html"},"LabelsPlugin")," entry point."),(0,l.kt)("p",null,"This plugin registers itself globally, meaning that once injected, all charts will display labels. In case you want it enabled only for a few charts, you can enable it as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// enabling the plugin without any parameter\n// the plugin is NOT registered to all charts\n// --------------------------------------\nLabelsPlugin.enable();\n\n// --------------------------------------\n// enabling the plugin with `true` parameter\n// the plugin is registered to all charts\n// --------------------------------------\nLabelsPlugin.enable(true)\n")),(0,l.kt)("p",null,"To activate the plugin in a specific chart, it's enough to provide the configuration options (see ",(0,l.kt)("a",{parentName:"p",href:"#configuration"},"below"),") or enabling it by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// --------------------------------------\n// ENABLING the plugin to a chart instance \n// storing a plugin options \n// --------------------------------------\n// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates a label by "myLabel" id\nLabel label = options.createLabel("myLabel");\n// sets the render\nlabel.setRender(Render.LABEL);\n// stores the plugin options directly by the options\noptions.store(chart);\n\n// --------------------------------------\n// ENABLING the plugin to a chart instance \n// by a boolean using default plugin \n// options\n// --------------------------------------\nchart.getOptions().getPlugins().setEnabled(DataLabelsPlugin.ID, true);\n')),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The plugin options can be changed at 2 different levels and are evaluated with the following priority:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"per chart by ",(0,l.kt)("inlineCode",{parentName:"li"},"chart.getOptions().getPlugins().setOptions")," method"),(0,l.kt)("li",{parentName:"ul"},"or globally by ",(0,l.kt)("inlineCode",{parentName:"li"},"Defaults.get().getGlobal().getPlugins().setOptions")," method")),(0,l.kt)("p",null,"The configuration ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/LabelsOptions.html"},"LabelsOptions")," class is the entry point of plugin configuration. "),(0,l.kt)("p",null,"Every ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/Label.html"},"label")," configuration can be add to the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/LabelsOptions.html"},"LabelsOptions"),", assigning a unique id."),(0,l.kt)("p",null,"The id of a label configuration can be set by a string or by a specific class, ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/LabelId.html"},"LabelId"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// ------------------------\n// CONFIGURES the label by\n// LabelId id\n// ------------------------\n// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates label id\nLabelId labelId = LabelId.create("myLabel1");\n// creates and adds a label by "myLabel1" id\nLabel label = options.createLabel(labelId);\n// sets the render\nlabel.setRender(Render.PERCENTAGE);\n... // additional label configuration\n// stores the plugin options directly by the options\noptions.store();\n')),(0,l.kt)("p",null,"The below example is showing how to create and add 2 labels (each one must have a unique id):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// ------------------------\n// CONFIGURES the multiple \n// labels\n// ------------------------\n// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates and adds a label by "myLabel1" id\nLabel label1 = options.createLabel(LabelId.create("myLabel1"));\n// sets the render\nlabel1.setRender(Render.LABEL);\n... // additional label configuration\n// creates and adds a label by "myLabel2" id\nLabel label2 = options.createLabel("myLabel2");\n// sets the render\nlabel2.setRender(new RenderCallback(){\n            \n    @Override\n    public String invoke(LabelsContext context){\n        return "$$ "+ (int)(context.getValue() * context.getPercentage() / 100);\n    }\n});\n... // additional label configuration\n// stores the plugin options directly by the options\noptions.store();\n')),(0,l.kt)("img",{src:(0,r.Z)("/img/labelsMultiple.png")}),(0,l.kt)("p",null,"You can also change the default for all charts instances, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates a label by "myLabel" id\nLabel label = options.createLabel("myLabel");\n// sets the render\nlabel.setRender(Render.LABEL);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(LabelsPlugin.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store();\n')),(0,l.kt)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/LabelsOptionsFactory.html"},"LabelsOptionsFactory")," as static reference inside the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/LabelsPlugin.html"},"LabelsPlugin")," entry point which can be used to retrieve the options from chart as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nLabelsOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(LabelsPlugin.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(LabelsPlugin.ID, LabelsPlugin.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(LabelsPlugin.FACTORY);\n}\n")),(0,l.kt)("p",null,"You can access to the configured labels configurations as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// ------------------------\n// GETS the configured \n// labels\n// ------------------------\n// retrieves the plugin options by plugin ID\nLabelsOptions options = chart.getOptions().getPlugin().getOptions(LabelsPlugin.FACTORY);\n// gets all labels configurations\nList<Label> allLabels = options.getLabels();\n// gets "myLabel1" label configuration\nLabel label1 = options.getLabel(LabelId.create("myLabel1"));\n// gets "myLabel2" label configuration\nLabel label2 = options.getLabel("myLabel2");\n')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"The following options can configure how the labels will look like and they can be applied to the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/Label.html"},"label")," object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates label id\nLabelId labelId = LabelId.create("myLabel1");\n// creates and adds a label by "myLabel1" id\nLabel label = options.createLabel(labelId);\n// sets the render\nlabel.setRender(Render.LABEL);\n')),(0,l.kt)("p",null,"The complete options are described by following table:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arc"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", draws label in arc. Bar chart ignores this.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts"},"default color")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#color"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The font color of the label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/Font.html"},"Font")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"default font")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#font"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The font of label text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"images"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/dom/elements/Img.html"},"Img"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set images when the rendering is set to Render.IMAGE.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"outsidePadding"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add padding when the position is Position.OUTSIDE.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"overlap"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Draw label even it's overlap. Bar chart ignores this.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"position"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/enums/Position.html"},"Position")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Position.DEFAULT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Position to draw label. Bar chart ignores this.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"precision"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Precision for percentage label text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"render"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/enums/Render.html"},"Render")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Render.PERCENTAGE"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#render"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value of the label to render.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"shadowBlur"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The label text shadow intensity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"shadowOffsetX"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The label text shadow X offset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"shadowOffsetY"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The label text shadow Y offset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"shadowColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.kt)("td",{parentName:"tr",align:"left"},"rgba(0,0,0,0.3) - ",(0,l.kt)("span",{style:{backgroundColor:"rgba(0,0,0,0.3)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The label text shadow color.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showActualPercentages"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showZero"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Identifies whether or not labels of value 0 are displayed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textMargin"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The added margin of text when the position is Position.OUTSIDE or Position.BORDER.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"textShadow"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", draws the text shadows under labels.")))),(0,l.kt)("h2",{id:"scriptable"},"Scriptable"),(0,l.kt)("p",null,"Scriptable options in the plugin configuration accept a callback which is called for each of the underlying data values."),(0,l.kt)("p",null,"There are 3 options which can be defined as scriptable:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color"),", to set the color of the label."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"font"),", to set the font of the label."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"render"),", to set the value of the label to render.")),(0,l.kt)("p",null,"The callbacks are getting the only 1 argument, the ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/LabelsContext.html"},"plugin context")," which contains the context of the callback execution."),(0,l.kt)("p",null,"The context object contains the following properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"active"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether the associated element is hovered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"attributes"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/commons/NativeObjectContainer.html"},"NativeObjectContainer")),(0,l.kt)("td",{parentName:"tr",align:"left"},"User object which you can store your options at runtime.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"chart"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/IsChart.html"},"IsChart")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Chart instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dataIndex"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index of the current data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dataItem"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/items/DataItem.html"},"DataItem")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value of the label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"datasetIndex"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index of the current data set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"datasetItem"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/items/DatasetItem.html"},"DatasetItem")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The data set information for this data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"datasetElement"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/items/DatasetElement.html"},"DatasetElement")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The element (point, arc, bar, etc.) for this data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The string representation of the value of the label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"labelOptions"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/Label.html"},"Label")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The label configuration where the options is defined as scriptable.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/options/TransitionKey.html"},"TransitionKey")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The update mode, brought by conte")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"percentage"),(0,l.kt)("td",{parentName:"tr",align:"left"},"double"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The percentage representation of the value of the label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"type"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/items/ContextType.html"},"ContextType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The type of the context. It can be ONLY ",(0,l.kt)("inlineCode",{parentName:"td"},"ContextType.LABELS"),".")))),(0,l.kt)("p",null,"The following options can be set by a callback:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Callback"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","AnnotationContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String - ",(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"font"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","AnnotationContext",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"render"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/callbacks/RenderCallback.html"},"RenderCallback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String")))),(0,l.kt)("h3",{id:"color"},"Color"),(0,l.kt)("p",null,"You can set the color of the labels at runtime, providing different colors for different labels."),(0,l.kt)("img",{src:(0,r.Z)("/img/labelsColorCallback.png")}),(0,l.kt)("p",null,"The color property can be set as ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/callbacks/ColorCallback.html"},"scriptable option"),", as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates label id\nLabelId labelId = LabelId.create("myLabel");\n// creates and adds a label by "myLabel" id\nLabel label = options.createLabel(labelId);\n// sets callback\nlabel.setColor(new ColorCallback<LabelsContext>(){\n\n    /**\n     * Called to change font color at runtime.\n     * \n     * @param context callback context\n     * @return a font color instance\n     */         \n    @Override\n    public IsColor invoke(LabelsContext context){\n        return context.getDataIndex() % 2 == 0 ? \n            HtmlColor.BLACK : \n            HtmlColor.RED;\n    }\n});\n')),(0,l.kt)("h3",{id:"font"},"Font"),(0,l.kt)("p",null,"You can set the font of the labels at runtime, providing different font for different labels."),(0,l.kt)("img",{src:(0,r.Z)("/img/labelsFontCallback.png")}),(0,l.kt)("p",null,"The font property can be set as ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/FontCallback.html"},"scriptable option"),", providing a ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/items/FontItem.html"},"font item")," instance, as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates label id\nLabelId labelId = LabelId.create("myLabel");\n// creates and adds a label by "myLabel" id\nLabel label = options.createLabel(labelId);\n// sets callback\nlabel.setColor(new FontCallback<LabelsContext>(){\n\n    /**\n     * Called to set the label font at runtime.\n     * \n     * @param context callback context\n     * @return a font instance\n     */ \n   @Override\n   public Font invoke(LabelsContext context){\n      FontItem fontItem = new FontItem();\n      int size = context.getDataIndex() % 2 == 0 ? 32 : 12;\n      fontItem.setSize(size);\n      return fontItem;\n   }\n});\n')),(0,l.kt)("h3",{id:"render"},"Render"),(0,l.kt)("p",null,"You can set the value of the labels to show on the chart at runtime, providing different values for different labels."),(0,l.kt)("img",{src:(0,r.Z)("/img/labelsRenderCallback.png")}),(0,l.kt)("p",null,"The render property can be set as ",(0,l.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/labels/callbacks/RenderCallback.html"},"scriptable option"),", as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates label id\nLabelId labelId = LabelId.create("myLabel");\n// creates and adds a label by "myLabel" id\nLabel label = options.createLabel(labelId);\n// sets callback\nlabel.setRender(new RenderCallback<LabelsContext>(){\n\n    /**\n     * Called to set the label render at runtime.\n     * \n     * @param context callback context\n     * @return a font instance\n     */ \n    @Override\n    public String invoke(LabelsContext context){\n        return context.getDataIndex() % 2 == 0 ? \n            "Percentage: "+context.getPercentage() : \n            "Value: "+context.getDataItem().getValue();\n    }\n});\n')),(0,l.kt)("h2",{id:"options-builder"},"Options builder"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,l.kt)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nLabelsOptions options = LabelsOptionsBuilder.create()\n    .createLabel("myLabel")  // entry to label builder\n    .setRender(Render.PERCENTAGE)\n    .setColor(HtmlColor.WHITE)\n    .setPrecision(2)\n    .getOptionsBuilder() // return to options builder\n    .build();\n// sets options\nchart.getOptions().getPlugins().setOptions(LabelsPlugin.ID, options);\n')),(0,l.kt)("p",null,"Creating a build by ",(0,l.kt)("inlineCode",{parentName:"p"},"LabelsOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,l.kt)("inlineCode",{parentName:"p"},"LabelsOptionsBuilder.create(chart)")," it will use the global chart options as default."))}g.isMDXComponent=!0}}]);