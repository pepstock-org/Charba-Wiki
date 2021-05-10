(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{113:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return o})),a.d(e,"toc",(function(){return p})),a.d(e,"default",(function(){return d}));var r=a(3),n=a(8),b=(a(0),a(209)),l=a(210),c={id:"ChartStackedBar",title:"Stacked bar chart",hide_title:!0,sidebar_label:"Stacked bar"},o={unversionedId:"charts/ChartStackedBar",id:"charts/ChartStackedBar",isDocsHomePage:!1,title:"Stacked bar chart",description:"Stacked Bar chart",source:"@site/docs/charts/StackedBar.md",sourceDirName:"charts",slug:"/charts/ChartStackedBar",permalink:"/docs/charts/ChartStackedBar",version:"current",sidebar_label:"Stacked bar",frontMatter:{id:"ChartStackedBar",title:"Stacked bar chart",hide_title:!0,sidebar_label:"Stacked bar"},sidebar:"docs",previous:{title:"Stacked area chart",permalink:"/docs/charts/ChartStackedArea"},next:{title:"Time series chart",permalink:"/docs/charts/ChartTimeSeries"}},p=[{value:"Stacked Bar chart",id:"stacked-bar-chart",children:[]},{value:"Dataset",id:"dataset",children:[{value:"General",id:"general",children:[]},{value:"Styling",id:"styling",children:[]},{value:"Interactions",id:"interactions",children:[]},{value:"Scriptable",id:"scriptable",children:[]}]},{value:"Data structure",id:"data-structure",children:[{value:"Floating bars",id:"floating-bars",children:[]}]},{value:"Options",id:"options",children:[]}],i={toc:p};function d(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"stacked-bar-chart"},"Stacked Bar chart"),Object(b.b)("p",null,"Stacked bar charts can be configured like bar charts and changes the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces."),Object(b.b)("img",{src:Object(l.a)("/img/stackbar.png")}),Object(b.b)("p",null,"Programmatically, you could use a bar chart as following:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"// creates the chart    \nStackedBarChart chart = new StackedBarChart();\n// adds to DOM\ncomponent.add(chart);\n...\n// example for Elemental2\n// gets the chart instance as DOM element\nElement element = chart.getChartElement().as();\n// adds to DOM\nDomGlobal.document.body.appendChild(element);\n")),Object(b.b)("p",null,"By ",Object(b.b)("a",{parentName:"p",href:"http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html"},"UIBinder")," (",Object(b.b)("strong",{parentName:"p"},"ONLY for GWT"),"), you could use a bar chart as following:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-xml"},'<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\n   xmlns:g="urn:import:com.google.gwt.user.client.ui"\n   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">\n\n   <g:HTMLPanel  width="100%">\n      ....\n      <c:StackedBarChartWidget ui:field="chart"/>\n      ...\n   </g:HTMLPanel>\n</ui:UiBinder> \n')),Object(b.b)("h2",{id:"dataset"},"Dataset"),Object(b.b)("p",null,"The stacked bar chart allows a number of properties to be specified for each ",Object(b.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/StackedBarDataset.html"},"stacked bar dataset"),". These are used to set display properties for a specific dataset."),Object(b.b)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nStackedBarChart chart = new StackedBarChart();\n// creates the dataset\nStackedBarDataset dataset = chart.newDataset();\n// sets the option\ndataset.setBackgroundColor(HtmlColor.RED);\n...\n// creates the dataset\nStackedBarDataset datasetNew = new StackedBarDataset();\n// sets the option\ndatasetNew.setBackgroundColor(HtmlColor.RED);\n...\n// sets the datasets to the chart\nchart.getData().setDatasets(dataset, datasetNew);\n")),Object(b.b)("p",null,"The following are the attributes that you can set:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Scriptable"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"base"),Object(b.b)("td",{parentName:"tr",align:"left"},"double - double[]"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(b.b)("td",{parentName:"tr",align:"left"},"Base value for the bar in data units along the value axis.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"backgroundColor"),Object(b.b)("td",{parentName:"tr",align:"left"},"String[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(b.b)("td",{parentName:"tr",align:"left"},"The fill color/pattern of the bar.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"barPercentage"),Object(b.b)("td",{parentName:"tr",align:"left"},"double"),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"The percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"barThickness"),Object(b.b)("td",{parentName:"tr",align:"left"},"int"),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"The width of each bar in pixels.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderColor"),Object(b.b)("td",{parentName:"tr",align:"left"},"String[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(b.b)("td",{parentName:"tr",align:"left"},"The color of the bar border.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderSkipped"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/BorderSkipped.html"},"BorderSkipped")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(b.b)("td",{parentName:"tr",align:"left"},"Which edge to skip drawing the border for.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderRadius"),Object(b.b)("td",{parentName:"tr",align:"left"},"int[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius"),"[]"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(b.b)("td",{parentName:"tr",align:"left"},"The bar border radius (in pixels).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderWidth"),Object(b.b)("td",{parentName:"tr",align:"left"},"int[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth"),"[]"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(b.b)("td",{parentName:"tr",align:"left"},"The stroke width of the bar in pixels.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"categoryPercentage"),Object(b.b)("td",{parentName:"tr",align:"left"},"double"),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"The percent (0-1) of the available width each category should be within the sample width.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"clip"),Object(b.b)("td",{parentName:"tr",align:"left"},"double - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/Clip.html"},"Clip")),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"How to clip relative to chart area. Positive value allows overflow, negative value clips that many pixels inside chart area. When set to 0 means clip at chart area.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"enableBorderRadius"),Object(b.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", it only shows the border radius of a bar when the bar is at the end of the stack.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"grouped"),Object(b.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"Should the bars be grouped on index axis.",Object(b.b)("br",null),"When ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", all the datasets at same index value will be placed next to each other centering on that index value.",Object(b.b)("br",null),"When ",Object(b.b)("inlineCode",{parentName:"td"},"false"),", each bar is placed on its actual index-axis value.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),Object(b.b)("td",{parentName:"tr",align:"left"},"String[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Pattern.html"},"Pattern"),"[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(b.b)("td",{parentName:"tr",align:"left"},"The fill color/pattern of the bars when hovered.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),Object(b.b)("td",{parentName:"tr",align:"left"},"String[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(b.b)("td",{parentName:"tr",align:"left"},"The stroke color of the bars when hovered.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),Object(b.b)("td",{parentName:"tr",align:"left"},"int[]"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(b.b)("td",{parentName:"tr",align:"left"},"The stroke width of the bars when hovered.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"hoverBorderRadius"),Object(b.b)("td",{parentName:"tr",align:"left"},"int[] - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius"),"[]"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(b.b)("td",{parentName:"tr",align:"left"},"The bar border radius (in pixels) when hovered.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"indexAxis"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/IndexAxis.html"},"IndexAxis")),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"The base axis of the dataset. 'IndexAxis.X' for vertical bars and 'IndexAxis.Y' for horizontal bars.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"label"),Object(b.b)("td",{parentName:"tr",align:"left"},"String"),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"The label for the dataset which appears in the legend and tooltips.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"maxBarThickness"),Object(b.b)("td",{parentName:"tr",align:"left"},"int"),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"The maximum bar thickness, to ensure that bars are not sized thicker than this.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"minBarLength"),Object(b.b)("td",{parentName:"tr",align:"left"},"int"),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"Set this to ensure that bars have a minimum length in pixels.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"order"),Object(b.b)("td",{parentName:"tr",align:"left"},"int"),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"The drawing order of dataset. Also affects order for stacking, tooltip, and legend.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"pointStyle"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle")," - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(b.b)("td",{parentName:"tr",align:"left"},"Point style for legend.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"xAxisID"),Object(b.b)("td",{parentName:"tr",align:"left"},"String"),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"The ID of the x axis to plot this dataset on.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"yAxisID"),Object(b.b)("td",{parentName:"tr",align:"left"},"String"),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"The ID of the y axis to plot this dataset on.")))),Object(b.b)("h3",{id:"general"},"General"),Object(b.b)("p",null,"The general options for a stacked bar dataset can control behaviors not related to styling or interactions and they are the following:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Defaults"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"base"),Object(b.b)("td",{parentName:"tr",align:"left"},"[]"),Object(b.b)("td",{parentName:"tr",align:"left"},"Base value for the bar in data units along the value axis.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"clip"),Object(b.b)("td",{parentName:"tr",align:"left"},"Undefined.DOUBLE"),Object(b.b)("td",{parentName:"tr",align:"left"},"How to clip relative to chart area.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"indexAxis"),Object(b.b)("td",{parentName:"tr",align:"left"},"IndexAxis.X"),Object(b.b)("td",{parentName:"tr",align:"left"},"The base axis of the dataset.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"label"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"null")),Object(b.b)("td",{parentName:"tr",align:"left"},"The label for the dataset which appears in the legend and tooltips.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"order"),Object(b.b)("td",{parentName:"tr",align:"left"},"0"),Object(b.b)("td",{parentName:"tr",align:"left"},"The drawing order of dataset. Also affects order for stacking, tooltips, and legend.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"xAxisID"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/DefaultScaleId.html"},"DefaultScaleId.X")),Object(b.b)("td",{parentName:"tr",align:"left"},"The ID of the x axis to plot this dataset on.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"yAxisID"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/DefaultScaleId.html"},"DefaultScaleId.Y")),Object(b.b)("td",{parentName:"tr",align:"left"},"The ID of the y axis to plot this dataset on.")))),Object(b.b)("h3",{id:"styling"},"Styling"),Object(b.b)("p",null,"The style of each bar of the dataset can be configured by the following properties:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"backgroundColor"),Object(b.b)("td",{parentName:"tr",align:"left"},"The fill color of the bar.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderColor"),Object(b.b)("td",{parentName:"tr",align:"left"},"The color of the bar border.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderSkipped"),Object(b.b)("td",{parentName:"tr",align:"left"},"Which edge to skip drawing the border for.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderRadius"),Object(b.b)("td",{parentName:"tr",align:"left"},"The bar border radius (in pixels).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderWidth"),Object(b.b)("td",{parentName:"tr",align:"left"},"The stroke width of the bar in pixels.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"enableBorderRadius"),Object(b.b)("td",{parentName:"tr",align:"left"},"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", it only shows the border radius of a bar when the bar is at the end of the stack.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"pointStyle"),Object(b.b)("td",{parentName:"tr",align:"left"},"Point style for legend.")))),Object(b.b)("p",null,"All above options have got the fallback to the associated ",Object(b.b)("a",{parentName:"p",href:"../configuration/Elements#bar"},"Bar")," element, retrievable by the following statements:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"// from chart instance\nBar bar = chart.getOptions().getElements().getBar();\n// sets options for all bar datasets of the chart\nbar.setBorderRadius(6);\n...\n// from defaults\nBar defaultBar  = Defaults.get().getGlobal().getElements().getBar();\n// sets options for all bar datasets of all charts\ndefaultBar.setBorderRadius(6);\n")),Object(b.b)("h3",{id:"interactions"},"Interactions"),Object(b.b)("p",null,"The interactions can change the styling of each bar of the dataset which can set by the following properties:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),Object(b.b)("td",{parentName:"tr",align:"left"},"The fill color of the bars when hovered.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),Object(b.b)("td",{parentName:"tr",align:"left"},"The stroke color of the bars when hovered.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"hoverBorderRadius"),Object(b.b)("td",{parentName:"tr",align:"left"},"The bar border radius (in pixels) when hovered.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),Object(b.b)("td",{parentName:"tr",align:"left"},"The stroke width of the bars when hovered.")))),Object(b.b)("p",null,"All above options have got the fallback to the associated ",Object(b.b)("a",{parentName:"p",href:"../configuration/Elements#bar"},"Bar")," elements, retrievable by the following statements:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"// from chart instance\nBar bar = chart.getOptions().getElements().getBar();\n// sets options for all bar datasets of the chart\nbar.setHoverBorderRadius(6);\n...\n// from defaults\nBar defaultBar  = Defaults.get().getGlobal().getElements().getBar();\n// sets options for all bar datasets of all charts\ndefaultBar.setHoverBorderRadius(6);\n")),Object(b.b)("h3",{id:"scriptable"},"Scriptable"),Object(b.b)("p",null,"Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in ",Object(b.b)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"// creates chart\nBarChart chart = new BarChart();\n// creates dataset\nBarDataset dataset = chart.newDataset();\n// sets the option by a callback \ndataset.setBackgroundColor(new ColorCallback<DatasetContext>(){\n\n   @Override\n   public IsColor invoke(DatasetContext context){\n      // logic\n      return color;\n   }\n});\n")),Object(b.b)("p",null,"The following options can be set by a callback:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Callback"),Object(b.b)("th",{parentName:"tr",align:"left"},"Returned types"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"base"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/BaseCallback.html"},"BaseCallback")),Object(b.b)("td",{parentName:"tr",align:"left"},"double")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"backgroundColor"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"String - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderColor"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"String - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderSkipped"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/BorderSkippedCallback.html"},"BorderSkippedCallback")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/BorderSkipped.html"},"BorderSkipped"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderRadius"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html"},"BorderRadiusCallback")),Object(b.b)("td",{parentName:"tr",align:"left"},"int - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderWidth"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/BarBorderWidthCallback.html"},"BarBorderWidthCallback")),Object(b.b)("td",{parentName:"tr",align:"left"},"int - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"String - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","DatasetContext",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"String - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/BarBorderWidthCallback.html"},"BarBorderWidthCallback")),Object(b.b)("td",{parentName:"tr",align:"left"},"int - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderWidth.html"},"BarBorderWidth"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"hoverBorderRadius"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html"},"BorderRadiusCallback")),Object(b.b)("td",{parentName:"tr",align:"left"},"int - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderRadius.html"},"BarBorderRadius"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"pointStyle"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/PointStyleCallback.html"},"PointStyleCallback")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle")," - ",Object(b.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/dom/elements/Img.html"},"Img"))))),Object(b.b)("h2",{id:"data-structure"},"Data structure"),Object(b.b)("p",null,"When the data is an array or list of doubles, the x axis is generally a category. The points are placed onto the axis using their position in the array. When a stacked bar chart is created with a category axis, the ",Object(b.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-"},"labels property of the data object")," must be specified."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"// sets data as an array of doubles\ndataset.setData(1,2,3,4,6);\n\n// sets data as a list of double\nList<Double> list = new LinkedList<>();\nlist.add(1);\nlist.add(2);\nlist.add(3);\ndataset.setData(list);\n")),Object(b.b)("h3",{id:"floating-bars"},"Floating bars"),Object(b.b)("p",null,"You can also specify the dataset for a bar chart as list of floating bar data or by an array of arrays of doubles. This will force rendering of bars with the start and the end point of a bar respectively."),Object(b.b)("img",{src:Object(l.a)("/img/floatingStackedBar.png")}),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"...\n// set in the constructor\nFloatingData fd1 = new FloatingData(10, 30);\n// set by method to update values\nFloatingData fd2 = new FloatingData();\nfd2.setValues(-10, 60)\n// stores the data to dataset\ndataset.setFloatingData(fd1, fd2);\n")),Object(b.b)("h2",{id:"options"},"Options"),Object(b.b)("p",null,"The stacked bar chart specific ",Object(b.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/StackedOptions.html"},"options implementation")," to be configured. These options are merged with the global chart configuration options to form the options passed to the chart."),Object(b.b)("p",null,"To set the options at chart level, you can get a typed object accordingly with the chart type."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-java"},"// creates the chart\nStackedBarChart chart = new StackedBarChart();\n// gets the chart options\nStackedOptions options = chart.getOptions();\n// sets options\noptions.setResponsive(true);\n")))}d.isMDXComponent=!0},209:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},b=Object.keys(t);for(r=0;r<b.length;r++)a=b[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(r=0;r<b.length;r++)a=b[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=n.a.createContext({}),i=function(t){var e=n.a.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=i(t.components);return n.a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},h=n.a.forwardRef((function(t,e){var a=t.components,r=t.mdxType,b=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=i(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||s[h]||b;return a?n.a.createElement(m,c(c({ref:e},p),{},{components:a})):n.a.createElement(m,c({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var b=a.length,l=new Array(b);l[0]=h;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,l[1]=c;for(var p=2;p<b;p++)l[p]=a[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},210:function(t,e,a){"use strict";a.d(e,"b",(function(){return b})),a.d(e,"a",(function(){return l}));var r=a(16),n=a(211);function b(){var t=Object(r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,b=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var b=void 0===r?{}:r,l=b.forcePrependBaseUrl,c=void 0!==l&&l,o=b.absolute,p=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return e+a;var i=a.startsWith(e)?a:e+a.replace(/^\//,"");return p?t+i:i}(b,a,t,e)}}}function l(t,e){return void 0===e&&(e={}),(0,b().withBaseUrl)(t,e)}},211:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return n}))}}]);