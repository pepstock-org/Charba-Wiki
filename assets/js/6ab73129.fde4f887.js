"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[16781],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},h="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),h=p(a),m=n,u=h["".concat(s,".").concat(m)]||h[m]||d[m]||o;return a?r.createElement(u,i(i({ref:e},c),{},{components:a})):r.createElement(u,i({ref:e},c))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[h]="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85601:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));a(44996);const o={id:"Charts",title:"Introduction",hide_title:!0,sidebar_label:"Introduction"},i=void 0,l={unversionedId:"charts/Charts",id:"version-5.5/charts/Charts",title:"Introduction",description:"Charts",source:"@site/versioned_docs/version-5.5/charts/Charts.md",sourceDirName:"charts",slug:"/charts/",permalink:"/Charba-Wiki/docs/5.5/charts/",draft:!1,tags:[],version:"5.5",frontMatter:{id:"Charts",title:"Introduction",hide_title:!0,sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Scriptable Options",permalink:"/Charba-Wiki/docs/5.5/configuration/ScriptableOptions"},next:{title:"Bar",permalink:"/Charba-Wiki/docs/5.5/charts/ChartBar"}},s={},p=[{value:"Charts",id:"charts",level:2},{value:"Usage",id:"usage",level:2},{value:"Usage by widget (only GWT artifact)",id:"usage-by-widget-only-gwt-artifact",level:2},{value:"Data",id:"data",level:2}],c={toc:p},h="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(h,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"charts"},"Charts"),(0,n.kt)("p",null,"Every ",(0,n.kt)("strong",{parentName:"p"},"Charba")," chart has got a common structure to define own configuration."),(0,n.kt)("p",null,"There 3 main sections:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Type")," which represents the chart type. See ",(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/Type.html"},"Type")," and ",(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/ChartType.html"},"ChartType")," enumeration, with all available chart types out of the box. By controllers, you can create own charts and different types."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Data")," which must be showed by the chart. See ",(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/Data.html"},"Data")," and ",(0,n.kt)("a",{parentName:"li",href:"#data"},"the data section")," for details."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Options")," which represents a set of options to configure the chart. See ",(0,n.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/package-summary.html"},"Options"),".")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Charba")," chart extends always ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/AbstractChart.html"},"AbstractChart")," which wraps a DOM ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/dom/elements/Div.html"},"DIV element")," and implements ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/IsChart.html"},"IsChart")," interface which is passed to callbacks, events handlers, plugins and all other customization items."),(0,n.kt)("p",null,"Programmatically, you could use a chart as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"...\n// example for a line chart\nLineChart chart = new LineChart();\ncomponent.add(chart);\n...\n// example for Elemental2\nElement element = chart.getChartElement().as();\nDomGlobal.document.body.appendChild(element);\n")),(0,n.kt)("h2",{id:"usage-by-widget-only-gwt-artifact"},"Usage by widget (only GWT artifact)"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Charba")," chart widget for GWT extends always ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/gwt/widgets/AbstractChartWidget.html"},"AbstractChartWidget")," which is a ",(0,n.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/SimplePanel.html"},"GWT SimplePanel")," and implements ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/IsChart.html"},"IsChart")," interface which is passed to callbacks, events handlers, plugins and all other customization items."),(0,n.kt)("p",null,"The charts can be implemented leveraging on ",(0,n.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," feature of GWT or also programmatically.  "),(0,n.kt)("p",null,"Using as example a Line chart, here is an example how to include it in the a ",(0,n.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," file (be sure to have in the your classpath the ",(0,n.kt)("inlineCode",{parentName:"p"},"charba-[version.release]-gwt.jar")," file):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:LineChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,n.kt)("p",null,"Into GWT component related to UIbinder definition, we could reference it as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"   ...\n   @UiField\n   LineChartWidget chart;\n   ...\n")),(0,n.kt)("p",null,"In the java constructor of widget, you can set all options and datasets definitions needed for your project."),(0,n.kt)("p",null,"Programmatically, you could implement a chart as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"   ...\n   LineChartWidget chart = new LineChartWidget();\n   component.add(chart);\n   ...\n")),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/Data.html"},"Data")," contains the ",(0,n.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/Dataset.html"},"datasets")," with data and configuration how data should be showed and the labels for each dataset and data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// creates the chart    \nBarChart chart = new BarChart();\n// creates the dataset\nBarDataset dataset = chart.newDataset();\n// sets labels of the data\nchart.getData().setLabels("January", "February", "March", "April");\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n')),(0,n.kt)("p",null,"The following are the attributes that you can set:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Defaults"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"labels"),(0,n.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/Labels.html"},"Labels")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The labels to display.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datasets"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/data/Dataset.html"},"Dataset"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The datasets of the chart.")))))}d.isMDXComponent=!0}}]);