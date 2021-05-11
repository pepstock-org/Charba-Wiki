(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{125:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(8),o=(r(0),r(209)),b={id:"Elements",title:"Elements",hide_title:!0,sidebar_label:"Elements"},l={unversionedId:"configuration/Elements",id:"configuration/Elements",isDocsHomePage:!1,title:"Elements",description:"Elements",source:"@site/docs/configuration/Elements.md",sourceDirName:"configuration",slug:"/configuration/Elements",permalink:"/Charba-Wiki/docs/configuration/Elements",version:"current",sidebar_label:"Elements",frontMatter:{id:"Elements",title:"Elements",hide_title:!0,sidebar_label:"Elements"},sidebar:"docs",previous:{title:"Title",permalink:"/Charba-Wiki/docs/configuration/Title"},next:{title:"Layout",permalink:"/Charba-Wiki/docs/configuration/Layout"}},c=[{value:"Elements",id:"elements",children:[{value:"Point",id:"point",children:[]},{value:"Line",id:"line",children:[]},{value:"Arc",id:"arc",children:[]},{value:"Bar",id:"bar",children:[]}]}],i={toc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"elements"},"Elements"),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/Elements.html"},"elements")," allows the user to configure the different type of shapes which are used to draw the datasets."),Object(o.b)("p",null,"Options can be configured for four different types of elements: ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#arc"},"arc")),", ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#line"},"lines")),", ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#point"},"points")),", and ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#bar"},"bar")),"."),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/configuration/Elements.html"},"elements")," configuration is nested in the global configuration as following: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// gets elements node\nElements elements = chart.getOptions().getElements();\n")),Object(o.b)("h3",{id:"point"},"Point"),Object(o.b)("p",null,"Point element is used to represent the points in a line chart or a bubble chart."),Object(o.b)("p",null,"To get, change and apply own properties, you can invoke the ",Object(o.b)("strong",{parentName:"p"},"set")," and ",Object(o.b)("strong",{parentName:"p"},"get")," methods, as following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'// sets and gets border width and background color for the point\nchart.getOptions().getElements().getPoint().setBorderWidth(2);\nchart.getOptions().getElements().getPoint().setBackgroundColor("red");\n\nint borderWidth = chart.getOptions().getElements().getPoint().getBorderWidth();\nIsColor backgroundColor = chart.getOptions().getElements().getPoint().getBackgroundColor();\n')),Object(o.b)("p",null,"The defaults values are set in global defaults options, see ",Object(o.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts#point"},"default global elements point options"),"."),Object(o.b)("p",null,"The following are the attributes that you can set:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"backgroundColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Point fill color.",Object(o.b)("br",null),"See ",Object(o.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Point stroke color.",Object(o.b)("br",null),"See ",Object(o.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderWidth"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"Point stroke width.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hitRadius"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"Extra radius added to point radius for hit detection.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Point fill color when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Point stroke color when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"Stroke width when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverRadius"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"Point radius when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"pointStyle"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle")," - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),Object(o.b)("td",{parentName:"tr",align:"left"},"Point style.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"radius"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"Point radius.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"rotation"),Object(o.b)("td",{parentName:"tr",align:"left"},"double"),Object(o.b)("td",{parentName:"tr",align:"left"},"The point rotation (in degrees).")))),Object(o.b)("h3",{id:"line"},"Line"),Object(o.b)("p",null,"Line element is used to represent the line in a line chart."),Object(o.b)("p",null,"To get, change and apply own properties, you can invoke the ",Object(o.b)("strong",{parentName:"p"},"set")," and ",Object(o.b)("strong",{parentName:"p"},"get")," methods, as following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'// sets and gets border width and background color for the line\nchart.getOptions().getElements().getLine().setBorderWidth(5);\nchart.getOptions().getElements().getLine().setBackgroundColor("red");\n\nint borderWidth = chart.getOptions().getElements().getLine().getBorderWidth();\nIsColor backgroundColor = chart.getOptions().getElements().getLine().getBackgroundColor();\n')),Object(o.b)("p",null,"The defaults values are set in global defaults options, see ",Object(o.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts#line"},"default global elements line options"),"."),Object(o.b)("p",null,"The following are the attributes that you can set:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"backgroundColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Line fill color.",Object(o.b)("br",null),"See ",Object(o.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderCapStyle"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/CapStyle.html"},"CapStyle")),Object(o.b)("td",{parentName:"tr",align:"left"},"Determines the shape used to draw the end points of lines.",Object(o.b)("br",null),"See ",Object(o.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap"},"MDN"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Line stroke color.",Object(o.b)("br",null),"See ",Object(o.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderDash"),Object(o.b)("td",{parentName:"tr",align:"left"},"int[]"),Object(o.b)("td",{parentName:"tr",align:"left"},"The line dash pattern used when stroking lines. It uses an array of values that specify alternating lengths of lines and gaps which describe the pattern.",Object(o.b)("br",null),"See ",Object(o.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash"},"MDN"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderDashOffset"),Object(o.b)("td",{parentName:"tr",align:"left"},"double"),Object(o.b)("td",{parentName:"tr",align:"left"},"Line dash offset.",Object(o.b)("br",null),"See ",Object(o.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"},"MDN"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderJoinStyle"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/JoinStyle.html"},"JoinStyle")),Object(o.b)("td",{parentName:"tr",align:"left"},"the shape used to join two line segments where they meet.",Object(o.b)("br",null),"See ",Object(o.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin"},"MDN"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderWidth"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"Line stroke width.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"capBezierPoints"),Object(o.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(o.b)("td",{parentName:"tr",align:"left"},"Set ",Object(o.b)("inlineCode",{parentName:"td"},"true")," to keep Bezier control inside the chart, ",Object(o.b)("inlineCode",{parentName:"td"},"false")," for no restriction.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"cubicInterpolationMode"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/CubicInterpolationMode.html"},"CubicInterpolationMode")),Object(o.b)("td",{parentName:"tr",align:"left"},"Interpolation mode to apply.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"fill"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - int - boolean - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/IsFill.html"},"IsFill")),Object(o.b)("td",{parentName:"tr",align:"left"},"How to fill the area under the line.",Object(o.b)("br",null),"See ",Object(o.b)("a",{parentName:"td",href:"../coloring/Colors#filling-modes"},"Filling modes"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Line fill color when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Line stroke color when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"Stroke width when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"stepped"),Object(o.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(o.b)("td",{parentName:"tr",align:"left"},"Set ",Object(o.b)("inlineCode",{parentName:"td"},"true")," to show the line as a stepped line (",Object(o.b)("inlineCode",{parentName:"td"},"tension")," will be ignored).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"tension"),Object(o.b)("td",{parentName:"tr",align:"left"},"double"),Object(o.b)("td",{parentName:"tr",align:"left"},"Bezier curve tension (",Object(o.b)("inlineCode",{parentName:"td"},"0")," for no Bezier curves).")))),Object(o.b)("h3",{id:"arc"},"Arc"),Object(o.b)("p",null,"Arc element is used in the polar area, doughnut and pie charts."),Object(o.b)("p",null,"To get, change and apply own properties, you can invoke the ",Object(o.b)("strong",{parentName:"p"},"set")," and ",Object(o.b)("strong",{parentName:"p"},"get")," methods, as following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// sets and gets border width and background color for the arc\nchart.getOptions().getElements().getArc().setBorderWidth(5);\nchart.getOptions().getElements().getArc().setBackgroundColor(HtmlColor.RED);\n\nint borderWidth = chart.getOptions().getElements().getArc().getBorderWidth();\nIsColor backgroundColor = chart.getOptions().getElements().getArc().getBackgroundColor();\n")),Object(o.b)("p",null,"The defaults values are set in global defaults options, see ",Object(o.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts#arc"},"default global elements arc options"),"."),Object(o.b)("p",null,"The following are the attributes that you can set:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"angle"),Object(o.b)("td",{parentName:"tr",align:"left"},"double"),Object(o.b)("td",{parentName:"tr",align:"left"},"Arc angle to cover, for polar chart only.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"backgroundColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Arc fill color.",Object(o.b)("br",null),"See ",Object(o.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderAlign"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/BorderAlign.html"},"BorderAlign")),Object(o.b)("td",{parentName:"tr",align:"left"},"Arc stroke alignment.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Arc stroke color.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderWidth"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"Arc stroke width.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderRadius"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"The arc border radius (in pixels).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Arc fill color when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Arc stroke color when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"Stroke width when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverOffset"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"The offset of the arc (in pixels) when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"offset"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"The offset of the arc (in pixels).")))),Object(o.b)("h3",{id:"bar"},"Bar"),Object(o.b)("p",null,"Bar element is used to represent the bars in a bar chart."),Object(o.b)("p",null,"To get, change and apply own properties, you can invoke the ",Object(o.b)("strong",{parentName:"p"},"set")," and ",Object(o.b)("strong",{parentName:"p"},"get")," methods, as following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// sets and gets border width and background color for the bar\nchart.getOptions().getElements().getBar().setBorderWidth(5);\nchart.getOptions().getElements().getBar().setBackgroundColor(HtmlColor.RED);\n\nint borderWidth = chart.getOptions().getElements().getBar().getBorderWidth();\nIsColor backgroundColor = chart.getOptions().getElements().getBar().getBackgroundColor();\n")),Object(o.b)("p",null,"The defaults values are set in global defaults options, see ",Object(o.b)("a",{parentName:"p",href:"../defaults/DefaultsCharts#bar"},"default global elements arc options"),"."),Object(o.b)("p",null,"The following are the attributes that you can set:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"backgroundColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Bar fill color.",Object(o.b)("br",null),"See ",Object(o.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Bar stroke color.",Object(o.b)("br",null),"See ",Object(o.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#commons-charts-options"},"default colors"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderRadius"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"The bar border radius (in pixels).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderSkipped"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/BorderSkipped.html"},"BorderSkipped")),Object(o.b)("td",{parentName:"tr",align:"left"},"The edge to skip when drawing bar.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"borderWidth"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"The bar border width (in pixels).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"enableBorderRadius"),Object(o.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(o.b)("td",{parentName:"tr",align:"left"},"If ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", it only shows the border radius of a bar when the bar is at the end of the stack.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBackgroundColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Bar fill color when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBorderColor"),Object(o.b)("td",{parentName:"tr",align:"left"},"String - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(o.b)("td",{parentName:"tr",align:"left"},"Bar stroke color when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBorderWidth"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"Stroke width when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"hoverBorderRadius"),Object(o.b)("td",{parentName:"tr",align:"left"},"int"),Object(o.b)("td",{parentName:"tr",align:"left"},"The bar border radius (in pixels) when hovered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"pointStyle"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/PointStyle.html"},"PointStyle")," - ",Object(o.b)("a",{parentName:"td",href:"https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/dom/elements/Img.html"},"Img")),Object(o.b)("td",{parentName:"tr",align:"left"},"Point style for legend.")))))}p.isMDXComponent=!0},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,b=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(b,".").concat(g)]||d[g]||s[g]||o;return r?n.a.createElement(m,l(l({ref:t},i),{},{components:r})):n.a.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,b=new Array(o);b[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var i=2;i<o;i++)b[i]=r[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);