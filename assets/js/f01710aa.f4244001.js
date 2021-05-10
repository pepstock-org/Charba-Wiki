(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{197:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return b})),a.d(e,"toc",(function(){return i})),a.d(e,"default",(function(){return d}));var n=a(3),r=a(8),l=(a(0),a(209)),o=a(210),c={id:"ChartScatter",title:"Scatter chart",hide_title:!0,sidebar_label:"Scatter"},b={unversionedId:"ChartScatter",id:"version-3.3/ChartScatter",isDocsHomePage:!1,title:"Scatter chart",description:"Scatter chart",source:"@site/versioned_docs/version-3.3/ChartScatter.md",sourceDirName:".",slug:"/ChartScatter",permalink:"/docs/3.3/ChartScatter",version:"3.3",sidebar_label:"Scatter",frontMatter:{id:"ChartScatter",title:"Scatter chart",hide_title:!0,sidebar_label:"Scatter"},sidebar:"version-3.3/docs",previous:{title:"PolarArea chart",permalink:"/docs/3.3/ChartPolarArea"},next:{title:"Stacked area chart",permalink:"/docs/3.3/ChartStackedArea"}},i=[{value:"Scatter chart",id:"scatter-chart",children:[]},{value:"Dataset",id:"dataset",children:[]},{value:"Data structure",id:"data-structure",children:[]},{value:"Options",id:"options",children:[]},{value:"Scriptable options for dataset",id:"scriptable-options-for-dataset",children:[]}],p={toc:i};function d(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"scatter-chart"},"Scatter chart"),Object(l.b)("p",null,"(quoted from ",Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Scatter_plot"},"Scatter chart")," definition in Wikipedia)"),Object(l.b)("p",null,"A scatter chart is a type of plot or mathematical diagram using Cartesian coordinates to display values for typically two variables for a set of data. If the points are color-coded, one additional variable can be displayed. The data are displayed as a collection of points, each having the value of one variable determining the position on the horizontal axis and the value of the other variable determining the position on the vertical axis."),Object(l.b)("p",null,"Scatter charts are based on basic line charts with the x axis changed to a linear axis. To use a scatter chart, data must be passed as objects containing X and Y properties."),Object(l.b)("img",{src:Object(o.a)("/img/scatter.png")}),Object(l.b)("h2",{id:"dataset"},"Dataset"),Object(l.b)("p",null,"The scatter chart allows a number of properties to be specified for each ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/ScatterDataset.html"},"scatter dataset"),". These are used to set display properties for a specific dataset."),Object(l.b)("p",null,"The following are the attributes that you can set:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Callback"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"backgroundColor"),Object(l.b)("td",{parentName:"tr",align:null},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The fill color/pattern under the line.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"borderCapStyle"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html"},"CapStyle")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Cap style of the line. See ",Object(l.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap"},"MDN"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"borderColor"),Object(l.b)("td",{parentName:"tr",align:null},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The color of the line.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"borderDash"),Object(l.b)("td",{parentName:"tr",align:null},"int[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Length and spacing of dashes. See ",Object(l.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash"},"MDN"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"borderDashOffset"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Offset for line dashes. See ",Object(l.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"},"MDN"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"borderJoinStyle"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html"},"JoinStyle")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Line joint style. See ",Object(l.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin"},"MDN"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"borderWidth"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"The width of the line in pixels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cubicInterpolationMode"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CubicInterpolationMode.html"},"CubicInterpolationMode")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Algorithm used to interpolate a smooth curve from the discrete data points.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hidden"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"if the dataset will appear or not.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hoverBackgroundColor"),Object(l.b)("td",{parentName:"tr",align:null},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hoverBorderCapStyle"),Object(l.b)("td",{parentName:"tr",align:null},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")," - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The fill color/pattern under the line, when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hoverBorderColor"),Object(l.b)("td",{parentName:"tr",align:null},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")," - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The color of the line, when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hoverBorderDash"),Object(l.b)("td",{parentName:"tr",align:null},"int[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Length and spacing of dashes, when hovered. See ",Object(l.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash"},"MDN"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hoverBorderDashOffset"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Offset for line dashes, when hovered. See ",Object(l.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"},"MDN"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hoverBorderJoinStyle"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html"},"JoinStyle")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Line joint style, when hovered. See ",Object(l.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin"},"MDN"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hoverBorderWidth"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The width of the line in pixels, when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"label"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"The label for the dataset which appears in the legend and tooltips.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lineTension"),Object(l.b)("td",{parentName:"tr",align:null},"double"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pointBackgroundColor"),Object(l.b)("td",{parentName:"tr",align:null},"String[] - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The fill color for points.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pointBorderColor"),Object(l.b)("td",{parentName:"tr",align:null},"String[] - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The border color for points.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pointBorderWidth"),Object(l.b)("td",{parentName:"tr",align:null},"int[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The width of the point border in pixels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pointHitRadius"),Object(l.b)("td",{parentName:"tr",align:null},"double[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The pixel size of the non-displayed point that reacts to mouse events.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pointHoverBackgroundColor"),Object(l.b)("td",{parentName:"tr",align:null},"String[] - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Point background color when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pointHoverBorderColor"),Object(l.b)("td",{parentName:"tr",align:null},"String[] - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"),"[] - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient"),"[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Point border color when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pointHoverBorderWidth"),Object(l.b)("td",{parentName:"tr",align:null},"int[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Border width of point when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pointHoverRadius"),Object(l.b)("td",{parentName:"tr",align:null},"double[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The radius of the point when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pointRadius"),Object(l.b)("td",{parentName:"tr",align:null},"double[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The radius of the point shape. If set to 0, the point is not rendered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pointStyle"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle"),"[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Style of the point.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pointRotation"),Object(l.b)("td",{parentName:"tr",align:null},"double[]"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"the rotation of the point in degrees.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"showLine"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"If ",Object(l.b)("inlineCode",{parentName:"td"},"false"),", the line is not drawn for this dataset. Initial value is ",Object(l.b)("inlineCode",{parentName:"td"},"false"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"spanGaps"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", lines will be drawn between points with no or null data. If ",Object(l.b)("inlineCode",{parentName:"td"},"false"),", points with ",Object(l.b)("inlineCode",{parentName:"td"},"NaN")," data will create a break in the line")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"steppedLine"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/SteppedLine.html"},"SteppedLine")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"If the line is shown as a stepped line.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"xAxisID"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis. See ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID"},"Scales")," object.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yAxisID"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis. See ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID"},"Scales")," object.")))),Object(l.b)("p",null,"Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"ScatterChart chart = new ScatterChart();\n// for GWT\n// ScatterChartWidget chart = new ScatterChartWidget();\nScatterDataset dataset = chart.newDataset();\n...\n...\nScatterDataset datasetNew = new ScatterDataset();\n...\nchart.getData().setDatasets(dataset, datasetNew);\n")),Object(l.b)("h2",{id:"data-structure"},"Data structure"),Object(l.b)("p",null,"Unlike the line chart where data can be supplied in two different formats, the scatter chart only accepts data in a point format. Each data point is specified using an object containing ",Object(l.b)("inlineCode",{parentName:"p"},"x")," and ",Object(l.b)("inlineCode",{parentName:"p"},"y")," properties."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"...\nDataPoint dp1 = new DataPoint();\ndp1.setX(10);\ndp1.setY(20);\n   \nDataPoint dp2 = new DataPoint();\ndp2.setX(30);\ndp2.setY(40);\n   \ndataset.setDataPoint(dp1, dp2);\n...\n")),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("p",null,"The scatter chart defines specific ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/ScatterOptions.html"},"options implementation")," to be configured. These options are merged with the global chart configuration options to form the options passed to the chart."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"ScatterChart chart = new ScatterChart();\n// for GWT\n// ScatterChartWidget chart = new ScatterChartWidget();\nScatterOptions options = chart.getOptions();\n")),Object(l.b)("p",null,"The following are the attributes that you can set, on top of ",Object(l.b)("a",{parentName:"p",href:"General"},"common options")," and ",Object(l.b)("a",{parentName:"p",href:"Configuration"},"common elements")," for all charts:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"showLine"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",{parentName:"tr",align:null},"If ",Object(l.b)("inlineCode",{parentName:"td"},"false"),", the lines between points are not drawn.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"spanGaps"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},"If ",Object(l.b)("inlineCode",{parentName:"td"},"false"),", NaN data causes a break in the line.")))),Object(l.b)("h2",{id:"scriptable-options-for-dataset"},"Scriptable options for dataset"),Object(l.b)("p",null,"Scriptable options at dataset level also accept a callback which is called for each of the underlying data values. See more details in ",Object(l.b)("a",{parentName:"p",href:"Charts#callbacks-on-datasets-options"},"charts definition")," session. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"ScatterChart chart = new ScatterChart();\n// for GWT\n// ScatterChartWidget chart = new ScatterChartWidget();\nScatterDataset dataset = chart.newDataset();\n\ndataset.setBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\n\ndataset.setBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\ndataset.setBorderCapStyle(new BorderCapStyleCallback() {\n            \n    @Override\n    public BorderCapStyle invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderCapStyle;\n    }\n});\ndataset.setBorderDash(new BorderDashCallback() {\n            \n    @Override\n    public List<Integer> invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderDash;\n    }\n});\ndataset.setBorderDashOffset(new BorderDashOffsetCallback() {\n            \n    @Override\n    public int invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderDashOffset;\n    }\n});\ndataset.setBorderJoinStyle(new BorderJoinStyleCallback() {\n            \n    @Override\n    public BorderJoinStyle invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderJoinStyle;\n    }\n});\n// -------------\n// POINT\n// -------------\ndataset.setPointBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setPointBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\n\ndataset.setPointBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\n\n// -------------\n// HOVER\n// -------------\ndataset.setPointHoverBackgroundColor(new BackgroundColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\ndataset.setPointHoverBorderColor(new BorderColorCallback() {\n\n   @Override\n   public IsColor invoke(IsChart chart, ScriptableContext context) {\n      // logic\n      return color;\n   }\n});\n\ndataset.setPointHoverBorderWidth(new BorderWidthCallback() {\n            \n    @Override\n    public Integer invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return borderWidth;\n    }\n});\n\n// -------------\n// RADIUS\n// -------------\ndataset.setPointRadius(new RadiusCallback() {\n\n    @Override\n    public Double invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return radius;\n    }\n});\ndataset.setPointHoverRadius(new RadiusCallback() {\n\n    @Override\n    public Double invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return radius;\n    }\n});\ndataset.setPointHitRadius(new RadiusCallback() {\n\n    @Override\n    public Double invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return radius;\n    }\n});\n// -------------\n// Others\n// -------------\ndataset.setPointRotation(new RotationCallback() {\n\n    @Override\n    public Double invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return rotation;\n    }\n});\ndataset.setPointStyle(new PointStyleCallback<PointStyle>() {\n\n    @Override\n    public PointStyle invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return pointStyle;\n    }\n});\ndataset.setCubicInterpolationMode(new CubicInterpolationModeCallback() {\n\n    @Override\n    public CubicInterpolationMode invoke(IsChart chart, ScriptableContext context) {\n        // logic\n        return cubicInterpolationMode;\n    }\n});\n")),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html"},"backgroundColor")," callback can provide one of the following object types:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html"},"Pattern")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html"},"CanvasPatternItem")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html"},"borderColor")," callback can provide one of the following object types:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html"},"Gradient")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html"},"CanvasGradientItem"))))}d.isMDXComponent=!0},209:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=r.a.createContext({}),p=function(t){var e=r.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=p(t.components);return r.a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},h=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,i=b(t,["components","mdxType","originalType","parentName"]),d=p(a),h=n,u=d["".concat(o,".").concat(h)]||d[h]||s[h]||l;return a?r.a.createElement(u,c(c({ref:e},i),{},{components:a})):r.a.createElement(u,c({ref:e},i))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=h;var c={};for(var b in e)hasOwnProperty.call(e,b)&&(c[b]=e[b]);c.originalType=t,c.mdxType="string"==typeof t?t:n,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},210:function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return o}));var n=a(16),r=a(211);function l(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var l=void 0===n?{}:n,o=l.forcePrependBaseUrl,c=void 0!==o&&o,b=l.absolute,i=void 0!==b&&b;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(c)return e+a;var p=a.startsWith(e)?a:e+a.replace(/^\//,"");return i?t+p:p}(l,a,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},211:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))}}]);