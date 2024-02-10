"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[6440],{95788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>y});var n=a(11504);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var g=n.createContext({}),p=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},b="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(a),d=l,y=b["".concat(g,".").concat(d)]||b[d]||c[d]||r;return a?n.createElement(y,o(o({ref:t},s),{},{components:a})):n.createElement(y,o({ref:t},s))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[b]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>g,toc:()=>s});var n=a(45072),l=(a(11504),a(95788)),r=a(70964);const o={id:"Labels",title:"Labels plugin",hide_title:!0,sidebar_label:"Labels"},i=void 0,g={unversionedId:"extensions/Labels",id:"version-4.2/extensions/Labels",title:"Labels plugin",description:"Labels plugin",source:"@site/versioned_docs/version-4.2/extensions/Labels.md",sourceDirName:"extensions",slug:"/extensions/Labels",permalink:"/Charba-Wiki/docs/4.2/extensions/Labels",draft:!1,tags:[],version:"4.2",frontMatter:{id:"Labels",title:"Labels plugin",hide_title:!0,sidebar_label:"Labels"},sidebar:"version-4.2/docs",previous:{title:"DataLabels",permalink:"/Charba-Wiki/docs/4.2/extensions/DataLabels"},next:{title:"Zoom",permalink:"/Charba-Wiki/docs/4.2/extensions/Zoom"}},p={},s=[{value:"Labels plugin",id:"labels-plugin",level:2},{value:"Activation",id:"activation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Options",id:"options",level:2},{value:"Scriptable",id:"scriptable",level:2},{value:"Color",id:"color",level:3},{value:"Font",id:"font",level:3},{value:"Render",id:"render",level:3},{value:"Options builder",id:"options-builder",level:2}],b={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,l.yg)(c,(0,n.c)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"labels-plugin"},"Labels plugin"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Charba")," provides out of the box the feature to enable ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/emn178/chartjs-plugin-labels"},"Labels")," which is a light weight plugin to display labels on pie, doughnut and polar area chart (former name was PieceLabel)."),(0,l.yg)("img",{src:(0,r.c)("/img/labels.png")}),(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("admonition",{type:"info"},(0,l.yg)("p",{parentName:"admonition"},"The plugin has been heavily changed in order to be compliant with ",(0,l.yg)("a",{parentName:"p",href:"http://www.chartjs.org/"},"Chart.JS")," version 3.x) in the ",(0,l.yg)("strong",{parentName:"p"},"Charba")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/pepstock-org/Charba/blob/master/src/org/pepstock/charba/client/resources/js/chartjs-plugin-labels.js"},"project")," because the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/emn178/chartjs-plugin-labels"},"original project")," is unmaintained.")),(0,l.yg)("h2",{id:"activation"},"Activation"),(0,l.yg)("p",null,"The labels plugin is injected directly in the document."),(0,l.yg)("p",null,"The plugin ID is a constant everywhere available, ",(0,l.yg)("inlineCode",{parentName:"p"},"LabelsPlugin.ID"),", in ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/LabelsPlugin.html"},"LabelsPlugin")," entry point."),(0,l.yg)("p",null,"This plugin registers itself globally, meaning that once injected, all charts will display labels. In case you want it enabled only for a few charts, you can enable it as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"// --------------------------------------\n// enabling the plugin without any parameter\n// the plugin is NOT registered to all charts\n// --------------------------------------\nLabelsPlugin.enable();\n\n// --------------------------------------\n// enabling the plugin with `true` parameter\n// the plugin is registered to all charts\n// --------------------------------------\nLabelsPlugin.enable(true)\n")),(0,l.yg)("p",null,"To activate the plugin in a specific chart, it's enough to provide the configuration options (see ",(0,l.yg)("a",{parentName:"p",href:"#configuration"},"below"),") or enabling it by:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'// --------------------------------------\n// ENABLING the plugin to a chart instance \n// storing a plugin options \n// --------------------------------------\n// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates a label by "myLabel" id\nLabel label = options.createLabel("myLabel");\n// sets the render\nlabel.setRender(Render.LABEL);\n// stores the plugin options directly by the options\noptions.store(chart);\n\n// --------------------------------------\n// ENABLING the plugin to a chart instance \n// by a boolean using default plugin \n// options\n// --------------------------------------\nchart.getOptions().getPlugins().setEnabled(DataLabelsPlugin.ID, true);\n')),(0,l.yg)("h2",{id:"configuration"},"Configuration"),(0,l.yg)("p",null,"The plugin options can be changed at 2 different levels and are evaluated with the following priority:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"per chart by ",(0,l.yg)("inlineCode",{parentName:"li"},"chart.getOptions().getPlugins().setOptions")," method"),(0,l.yg)("li",{parentName:"ul"},"or globally by ",(0,l.yg)("inlineCode",{parentName:"li"},"Defaults.get().getGlobal().getPlugins().setOptions")," method")),(0,l.yg)("p",null,"The configuration ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/LabelsOptions.html"},"LabelsOptions")," class is the entry point of plugin configuration. "),(0,l.yg)("p",null,"Every ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/Label.html"},"label")," configuration can be add to the ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/LabelsOptions.html"},"LabelsOptions"),", assigning a unique id."),(0,l.yg)("p",null,"The id of a label configuration can be set by a string or by a specific class, ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/LabelId.html"},"LabelId"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'// ------------------------\n// CONFIGURES the label by\n// LabelId id\n// ------------------------\n// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates label id\nLabelId labelId = LabelId.create("myLabel1");\n// creates and adds a label by "myLabel1" id\nLabel label = options.createLabel(labelId);\n// sets the render\nlabel.setRender(Render.PERCENTAGE);\n... // additional label configuration\n// stores the plugin options directly by the options\noptions.store();\n')),(0,l.yg)("p",null,"The below example is showing how to create and add 2 labels (each one must have a unique id):"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'// ------------------------\n// CONFIGURES the multiple \n// labels\n// ------------------------\n// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates and adds a label by "myLabel1" id\nLabel label1 = options.createLabel(LabelId.create("myLabel1"));\n// sets the render\nlabel1.setRender(Render.LABEL);\n... // additional label configuration\n// creates and adds a label by "myLabel2" id\nLabel label2 = options.createLabel("myLabel2");\n// sets the render\nlabel2.setRender(new RenderCallback(){\n            \n    @Override\n    public String invoke(LabelsContext context){\n        return "$$ "+ (int)(context.getValue() * context.getPercentage() / 100);\n    }\n});\n... // additional label configuration\n// stores the plugin options directly by the options\noptions.store();\n')),(0,l.yg)("img",{src:(0,r.c)("/img/labelsMultiple.png")}),(0,l.yg)("p",null,"You can also change the default for all charts instances, as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates a label by "myLabel" id\nLabel label = options.createLabel("myLabel");\n// sets the render\nlabel.setRender(Render.LABEL);\n\n// --------------------------------------\n// STORING plugin options\n// --------------------------------------\n// stores the plugin options by plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(LabelsPlugin.ID, options);\n// stores the plugin options without plugin ID\nDefaults.get().getGlobal().getPlugin().setOptions(options);\n// stores the plugin options directly by the options\noptions.store();\n')),(0,l.yg)("p",null,"If you need to read the plugin options, there is the specific factory, ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/LabelsOptionsFactory.html"},"LabelsOptionsFactory")," as static reference inside the ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/LabelsPlugin.html"},"LabelsPlugin")," entry point which can be used to retrieve the options from chart as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"// gets options reference\nLabelsOptions options;\n\n// --------------------------------------\n// GETTING plugin options from chart\n// --------------------------------------\nif (chart.getOptions().getPlugin().hasOptions(LabelsPlugin.ID)){\n   // retrieves the plugin options by plugin ID\n   options = chart.getOptions().getPlugin().getOptions(LabelsPlugin.ID, LabelsPlugin.FACTORY);\n   //retrieves the plugin options without plugin ID\n   options = chart.getOptions().getPlugin().getOptions(LabelsPlugin.FACTORY);\n}\n")),(0,l.yg)("p",null,"You can access to the configured labels configurations as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'// ------------------------\n// GETS the configured \n// labels\n// ------------------------\n// retrieves the plugin options by plugin ID\nLabelsOptions options = chart.getOptions().getPlugin().getOptions(LabelsPlugin.FACTORY);\n// gets all labels configurations\nList<Label> allLabels = options.getLabels();\n// gets "myLabel1" label configuration\nLabel label1 = options.getLabel(LabelId.create("myLabel1"));\n// gets "myLabel2" label configuration\nLabel label2 = options.getLabel("myLabel2");\n')),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("p",null,"The following options can configure how the labels will look like and they can be applied to the ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/Label.html"},"label")," object."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates label id\nLabelId labelId = LabelId.create("myLabel1");\n// creates and adds a label by "myLabel1" id\nLabel label = options.createLabel(labelId);\n// sets the render\nlabel.setRender(Render.LABEL);\n')),(0,l.yg)("p",null,"The complete options are described by following table:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Scriptable"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"arc"),(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", draws label in arc. Bar chart ignores this.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"color"),(0,l.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts"},"default color")),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"#color"},"Yes")),(0,l.yg)("td",{parentName:"tr",align:"left"},"The font color of the label.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"font"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/Font.html"},"Font")),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"default font")),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"#font"},"Yes")),(0,l.yg)("td",{parentName:"tr",align:"left"},"The font of label text.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"images"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/dom/elements/Img.html"},"Img"),"[]"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"null")),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Set images when the rendering is set to Render.IMAGE.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"outsidePadding"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"2"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Add padding when the position is Position.OUTSIDE.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"overlap"),(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"true")),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Draw label even it's overlap. Bar chart ignores this.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"position"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/enums/Position.html"},"Position")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Position.DEFAULT"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Position to draw label. Bar chart ignores this.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"precision"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"0"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Precision for percentage label text.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"render"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/enums/Render.html"},"Render")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Render.PERCENTAGE"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"#render"},"Yes")),(0,l.yg)("td",{parentName:"tr",align:"left"},"The value of the label to render.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"shadowBlur"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"6"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"The label text shadow intensity.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"shadowOffsetX"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"3"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"The label text shadow X offset.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"shadowOffsetY"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"3"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"The label text shadow Y offset.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"shadowColor"),(0,l.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),(0,l.yg)("td",{parentName:"tr",align:"left"},"rgba(0,0,0,0.3) - ",(0,l.yg)("span",{style:{backgroundColor:"rgba(0,0,0,0.3)",border:"1px solid"}},"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0")),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"The label text shadow color.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"showActualPercentages"),(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"showZero"),(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Identifies whether or not labels of value 0 are displayed")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"textMargin"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"2"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"The added margin of text when the position is Position.OUTSIDE or Position.BORDER.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"textShadow"),(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:"left"},"If ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", draws the text shadows under labels.")))),(0,l.yg)("h2",{id:"scriptable"},"Scriptable"),(0,l.yg)("p",null,"Scriptable options in the plugin configuration accept a callback which is called for each of the underlying data values."),(0,l.yg)("p",null,"There are 3 options which can be defined as scriptable:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"color"),", to set the color of the label."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"font"),", to set the font of the label."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"render"),", to set the value of the label to render.")),(0,l.yg)("p",null,"The callbacks are getting the only 1 argument, the ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/LabelsContext.html"},"plugin context")," which contains the context of the callback execution."),(0,l.yg)("p",null,"The context object contains the following properties:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"active"),(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Whether the associated element is hovered.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"attributes"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/commons/NativeObjectContainer.html"},"NativeObjectContainer")),(0,l.yg)("td",{parentName:"tr",align:"left"},"User object which you can store your options at runtime.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"chart"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/IsChart.html"},"IsChart")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Chart instance.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"dataIndex"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"The index of the current data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"dataItem"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/DataItem.html"},"DataItem")),(0,l.yg)("td",{parentName:"tr",align:"left"},"The value of the label.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"datasetIndex"),(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},"The index of the current data set.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"datasetItem"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/DatasetItem.html"},"DatasetItem")),(0,l.yg)("td",{parentName:"tr",align:"left"},"The data set information for this data")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"datasetElement"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/DatasetElement.html"},"DatasetElement")),(0,l.yg)("td",{parentName:"tr",align:"left"},"The element (point, arc, bar, etc.) for this data")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"label"),(0,l.yg)("td",{parentName:"tr",align:"left"},"String"),(0,l.yg)("td",{parentName:"tr",align:"left"},"The string representation of the value of the label.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"labelOptions"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/Label.html"},"Label")),(0,l.yg)("td",{parentName:"tr",align:"left"},"The label configuration where the options is defined as scriptable.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"mode"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/options/TransitionKey.html"},"TransitionKey")),(0,l.yg)("td",{parentName:"tr",align:"left"},"The update mode, brought by conte")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"percentage"),(0,l.yg)("td",{parentName:"tr",align:"left"},"double"),(0,l.yg)("td",{parentName:"tr",align:"left"},"The percentage representation of the value of the label.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"type"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/ContextType.html"},"ContextType")),(0,l.yg)("td",{parentName:"tr",align:"left"},"The type of the context. It can be ONLY ",(0,l.yg)("inlineCode",{parentName:"td"},"ContextType.LABELS"),".")))),(0,l.yg)("p",null,"The following options can be set by a callback:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Callback"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Returned types"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"color"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","AnnotationContext",">"),(0,l.yg)("td",{parentName:"tr",align:"left"},"String - ",(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"font"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","AnnotationContext",">"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"render"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/callbacks/RenderCallback.html"},"RenderCallback")),(0,l.yg)("td",{parentName:"tr",align:"left"},"String")))),(0,l.yg)("h3",{id:"color"},"Color"),(0,l.yg)("p",null,"You can set the color of the labels at runtime, providing different colors for different labels."),(0,l.yg)("img",{src:(0,r.c)("/img/labelsColorCallback.png")}),(0,l.yg)("p",null,"The color property can be set as ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/callbacks/ColorCallback.html"},"scriptable option"),", as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates label id\nLabelId labelId = LabelId.create("myLabel");\n// creates and adds a label by "myLabel" id\nLabel label = options.createLabel(labelId);\n// sets callback\nlabel.setColor(new ColorCallback<LabelsContext>(){\n\n    /**\n     * Called to change font color at runtime.\n     * \n     * @param context callback context\n     * @return a font color instance\n     */         \n    @Override\n    public IsColor invoke(LabelsContext context){\n        return context.getDataIndex() % 2 == 0 ? \n            HtmlColor.BLACK : \n            HtmlColor.RED;\n    }\n});\n')),(0,l.yg)("h3",{id:"font"},"Font"),(0,l.yg)("p",null,"You can set the font of the labels at runtime, providing different font for different labels."),(0,l.yg)("img",{src:(0,r.c)("/img/labelsFontCallback.png")}),(0,l.yg)("p",null,"The font property can be set as ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/callbacks/FontCallback.html"},"scriptable option"),", providing a ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/items/FontItem.html"},"font item")," instance, as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates label id\nLabelId labelId = LabelId.create("myLabel");\n// creates and adds a label by "myLabel" id\nLabel label = options.createLabel(labelId);\n// sets callback\nlabel.setColor(new FontCallback<LabelsContext>(){\n\n    /**\n     * Called to set the label font at runtime.\n     * \n     * @param context callback context\n     * @return a font instance\n     */ \n   @Override\n   public Font invoke(LabelsContext context){\n      FontItem fontItem = new FontItem();\n      int size = context.getDataIndex() % 2 == 0 ? 32 : 12;\n      fontItem.setSize(size);\n      return fontItem;\n   }\n});\n')),(0,l.yg)("h3",{id:"render"},"Render"),(0,l.yg)("p",null,"You can set the value of the labels to show on the chart at runtime, providing different values for different labels."),(0,l.yg)("img",{src:(0,r.c)("/img/labelsRenderCallback.png")}),(0,l.yg)("p",null,"The render property can be set as ",(0,l.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.2/org/pepstock/charba/client/labels/callbacks/RenderCallback.html"},"scriptable option"),", as following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nLabelsOptions options = new LabelsOptions();\n// creates label id\nLabelId labelId = LabelId.create("myLabel");\n// creates and adds a label by "myLabel" id\nLabel label = options.createLabel(labelId);\n// sets callback\nlabel.setRender(new RenderCallback<LabelsContext>(){\n\n    /**\n     * Called to set the label render at runtime.\n     * \n     * @param context callback context\n     * @return a font instance\n     */ \n    @Override\n    public String invoke(LabelsContext context){\n        return context.getDataIndex() % 2 == 0 ? \n            "Percentage: "+context.getPercentage() : \n            "Value: "+context.getDataItem().getValue();\n    }\n});\n')),(0,l.yg)("h2",{id:"options-builder"},"Options builder"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Charba")," provides a builder to create options using the ",(0,l.yg)("strong",{parentName:"p"},"set")," methods in sequence and get the options object at the end of configuration."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'// creates a plugin options\nLabelsOptions options = LabelsOptionsBuilder.create()\n    .createLabel("myLabel")  // entry to label builder\n    .setRender(Render.PERCENTAGE)\n    .setColor(HtmlColor.WHITE)\n    .setPrecision(2)\n    .getOptionsBuilder() // return to options builder\n    .build();\n// sets options\nchart.getOptions().getPlugins().setOptions(LabelsPlugin.ID, options);\n')),(0,l.yg)("p",null,"Creating a build by ",(0,l.yg)("inlineCode",{parentName:"p"},"LabelsOptionsBuilder.create()")," it will use the global options as default, instead by ",(0,l.yg)("inlineCode",{parentName:"p"},"LabelsOptionsBuilder.create(chart)")," it will use the global chart options as default."))}d.isMDXComponent=!0}}]);