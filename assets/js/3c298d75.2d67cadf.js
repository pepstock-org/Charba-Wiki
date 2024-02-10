"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[73468],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>m});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,m=h["".concat(s,".").concat(d)]||h[d]||g[d]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79960:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(45072),n=(a(11504),a(95788));a(70964);const o={id:"Charts",title:"Introduction",hide_title:!0,sidebar_label:"Introduction"},i=void 0,l={unversionedId:"charts/Charts",id:"version-5.0/charts/Charts",title:"Introduction",description:"Charts",source:"@site/versioned_docs/version-5.0/charts/Charts.md",sourceDirName:"charts",slug:"/charts/",permalink:"/Charba-Wiki/docs/5.0/charts/",draft:!1,tags:[],version:"5.0",frontMatter:{id:"Charts",title:"Introduction",hide_title:!0,sidebar_label:"Introduction"},sidebar:"version-5.0/docs",previous:{title:"Scriptable Options",permalink:"/Charba-Wiki/docs/5.0/configuration/ScriptableOptions"},next:{title:"Bar",permalink:"/Charba-Wiki/docs/5.0/charts/ChartBar"}},s={},p=[{value:"Charts",id:"charts",level:2},{value:"Usage",id:"usage",level:2},{value:"Usage by widget (only GWT artifact)",id:"usage-by-widget-only-gwt-artifact",level:2},{value:"Data",id:"data",level:2}],c={toc:p},h="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(h,(0,r.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"charts"},"Charts"),(0,n.yg)("p",null,"Every ",(0,n.yg)("strong",{parentName:"p"},"Charba")," chart has got a common structure to define own configuration."),(0,n.yg)("p",null,"There 3 main sections:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Type")," which represents the chart type. See ",(0,n.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/Type.html"},"Type")," and ",(0,n.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/ChartType.html"},"ChartType")," enumeration, with all available chart types out of the box. By controllers, you can create own charts and different types."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Data")," which must be showed by the chart. See ",(0,n.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/Data.html"},"Data")," and ",(0,n.yg)("a",{parentName:"li",href:"#data"},"the data section")," for details."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Options")," which represents a set of options to configure the chart. See ",(0,n.yg)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/configuration/package-summary.html"},"Options"),".")),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("p",null,"A ",(0,n.yg)("strong",{parentName:"p"},"Charba")," chart extends always ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/AbstractChart.html"},"AbstractChart")," which wraps a DOM ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/dom/elements/Div.html"},"DIV element")," and implements ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/IsChart.html"},"IsChart")," interface which is passed to callbacks, events handlers, plugins and all other customization items."),(0,n.yg)("p",null,"Programmatically, you could use a chart as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"...\n// example for a line chart\nLineChart chart = new LineChart();\ncomponent.add(chart);\n...\n// example for Elemental2\nElement element = chart.getChartElement().as();\nDomGlobal.document.body.appendChild(element);\n")),(0,n.yg)("h2",{id:"usage-by-widget-only-gwt-artifact"},"Usage by widget (only GWT artifact)"),(0,n.yg)("p",null,"A ",(0,n.yg)("strong",{parentName:"p"},"Charba")," chart widget for GWT extends always ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/gwt/widgets/AbstractChartWidget.html"},"AbstractChartWidget")," which is a ",(0,n.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/SimplePanel.html"},"GWT SimplePanel")," and implements ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/IsChart.html"},"IsChart")," interface which is passed to callbacks, events handlers, plugins and all other customization items."),(0,n.yg)("p",null,"The charts can be implemented leveraging on ",(0,n.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," feature of GWT or also programmatically.  "),(0,n.yg)("p",null,"Using as example a Line chart, here is an example how to include it in the a ",(0,n.yg)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," file (be sure to have in the your classpath the ",(0,n.yg)("inlineCode",{parentName:"p"},"charba-[version.release]-gwt.jar")," file):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:LineChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,n.yg)("p",null,"Into GWT component related to UIbinder definition, we could reference it as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"   ...\n   @UiField\n   LineChartWidget chart;\n   ...\n")),(0,n.yg)("p",null,"In the java constructor of widget, you can set all options and datasets definitions needed for your project."),(0,n.yg)("p",null,"Programmatically, you could implement a chart as following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"   ...\n   LineChartWidget chart = new LineChartWidget();\n   component.add(chart);\n   ...\n")),(0,n.yg)("h2",{id:"data"},"Data"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/Data.html"},"Data")," contains the ",(0,n.yg)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/Dataset.html"},"datasets")," with data and configuration how data should be showed and the labels for each dataset and data."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'// creates the chart    \nBarChart chart = new BarChart();\n// creates the dataset\nBarDataset dataset = chart.newDataset();\n// sets labels of the data\nchart.getData().setLabels("January", "February", "March", "April");\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n')),(0,n.yg)("p",null,"The following are the attributes that you can set:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Defaults"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"labels"),(0,n.yg)("td",{parentName:"tr",align:"left"},"String[] - ",(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/Labels.html"},"Labels")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The labels to display.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"datasets"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/Dataset.html"},"Dataset"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The datasets of the chart.")))))}g.isMDXComponent=!0}}]);