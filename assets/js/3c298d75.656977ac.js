"use strict";(self.webpackChunkcharba=self.webpackChunkcharba||[]).push([[54429],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),s=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return a?r.createElement(m,i(i({ref:e},p),{},{components:a})):r.createElement(m,i({ref:e},p))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68792:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return h}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=(a(44996),["components"]),l={id:"Charts",title:"Introduction",hide_title:!0,sidebar_label:"Introduction"},c=void 0,s={unversionedId:"charts/Charts",id:"version-5.0/charts/Charts",title:"Introduction",description:"Charts",source:"@site/versioned_docs/version-5.0/charts/Charts.md",sourceDirName:"charts",slug:"/charts/",permalink:"/Charba-Wiki/docs/5.0/charts/",tags:[],version:"5.0",frontMatter:{id:"Charts",title:"Introduction",hide_title:!0,sidebar_label:"Introduction"},sidebar:"version-5.0/docs",previous:{title:"Scriptable Options",permalink:"/Charba-Wiki/docs/5.0/configuration/ScriptableOptions"},next:{title:"Bar",permalink:"/Charba-Wiki/docs/5.0/charts/ChartBar"}},p={},h=[{value:"Charts",id:"charts",level:2},{value:"Usage",id:"usage",level:2},{value:"Usage by widget (only GWT artifact)",id:"usage-by-widget-only-gwt-artifact",level:2},{value:"Data",id:"data",level:2}],u={toc:h};function d(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"charts"},"Charts"),(0,o.kt)("p",null,"Every ",(0,o.kt)("strong",{parentName:"p"},"Charba")," chart has got a common structure to define own configuration."),(0,o.kt)("p",null,"There 3 main sections:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Type")," which represents the chart type. See ",(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/Type.html"},"Type")," and ",(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/ChartType.html"},"ChartType")," enumeration, with all available chart types out of the box. By controllers, you can create own charts and different types."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Data")," which must be showed by the chart. See ",(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/Data.html"},"Data")," and ",(0,o.kt)("a",{parentName:"li",href:"#data"},"the data section")," for details."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Options")," which represents a set of options to configure the chart. See ",(0,o.kt)("a",{parentName:"li",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/configuration/package-summary.html"},"Options"),".")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Charba")," chart extends always ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/AbstractChart.html"},"AbstractChart")," which wraps a DOM ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/dom/elements/Div.html"},"DIV element")," and implements ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/IsChart.html"},"IsChart")," interface which is passed to callbacks, events handlers, plugins and all other customization items."),(0,o.kt)("p",null,"Programmatically, you could use a chart as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"...\n// example for a line chart\nLineChart chart = new LineChart();\ncomponent.add(chart);\n...\n// example for Elemental2\nElement element = chart.getChartElement().as();\nDomGlobal.document.body.appendChild(element);\n")),(0,o.kt)("h2",{id:"usage-by-widget-only-gwt-artifact"},"Usage by widget (only GWT artifact)"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Charba")," chart widget for GWT extends always ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/gwt/widgets/AbstractChartWidget.html"},"AbstractChartWidget")," which is a ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/SimplePanel.html"},"GWT SimplePanel")," and implements ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/IsChart.html"},"IsChart")," interface which is passed to callbacks, events handlers, plugins and all other customization items."),(0,o.kt)("p",null,"The charts can be implemented leveraging on ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," feature of GWT or also programmatically.  "),(0,o.kt)("p",null,"Using as example a Line chart, here is an example how to include it in the a ",(0,o.kt)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," file (be sure to have in the your classpath the ",(0,o.kt)("inlineCode",{parentName:"p"},"charba-[version.release]-gwt.jar")," file):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:LineChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),(0,o.kt)("p",null,"Into GWT component related to UIbinder definition, we could reference it as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"   ...\n   @UiField\n   LineChartWidget chart;\n   ...\n")),(0,o.kt)("p",null,"In the java constructor of widget, you can set all options and datasets definitions needed for your project."),(0,o.kt)("p",null,"Programmatically, you could implement a chart as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"   ...\n   LineChartWidget chart = new LineChartWidget();\n   component.add(chart);\n   ...\n")),(0,o.kt)("h2",{id:"data"},"Data"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/Data.html"},"Data")," contains the ",(0,o.kt)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/Dataset.html"},"datasets")," with data and configuration how data should be showed and the labels for each dataset and data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// creates the chart    \nBarChart chart = new BarChart();\n// creates the dataset\nBarDataset dataset = chart.newDataset();\n// sets labels of the data\nchart.getData().setLabels("January", "February", "March", "April");\n// sets the dataset to the chart\nchart.getData().setDatasets(dataset);\n')),(0,o.kt)("p",null,"The following are the attributes that you can set:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Defaults"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"labels"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String[] - ",(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/Labels.html"},"Labels")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The labels to display.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"datasets"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/Dataset.html"},"Dataset"),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The datasets of the chart.")))))}d.isMDXComponent=!0}}]);