(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),l=(a(0),a(209)),b=a(210),c={id:"RadialAxes",title:"Radial axes",hide_title:!0,sidebar_label:"Radial axes"},i={unversionedId:"axes/RadialAxes",id:"axes/RadialAxes",isDocsHomePage:!1,title:"Radial axes",description:"Radial Axes",source:"@site/docs/axes/Radial.md",sourceDirName:"axes",slug:"/axes/RadialAxes",permalink:"/Charba-Wiki/docs/axes/RadialAxes",version:"current",sidebar_label:"Radial axes",frontMatter:{id:"RadialAxes",title:"Radial axes",hide_title:!0,sidebar_label:"Radial axes"},sidebar:"docs",previous:{title:"Cartesian time series",permalink:"/Charba-Wiki/docs/axes/CartesianTimeSeriesAxes"},next:{title:"Grid",permalink:"/Charba-Wiki/docs/axes/Grid"}},o=[{value:"Radial Axes",id:"radial-axes",children:[]},{value:"Options",id:"options",children:[]},{value:"Ticks",id:"ticks",children:[{value:"Scriptable",id:"scriptable",children:[]},{value:"Callback",id:"callback",children:[]},{value:"NoSelectedDatasetTicksCallback callback",id:"noselecteddatasettickscallback-callback",children:[]}]}],p={toc:o};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"radial-axes"},"Radial Axes"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/RadialAxis.html"},"Radial axes")," are used specifically for the radar and polar area chart types. These axes overlay the chart area, rather than being positioned on one of the edges. "),Object(l.b)("p",null,"Radial axes could be only "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"linear"),", is use to chart numerical data. As the name suggests, linear interpolation is used to determine where a value lies in relation the center of the axis.")),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/RadialAxis.html"},"radial axis")," is use to chart numerical data."),Object(l.b)("img",{src:Object(b.a)("/img/radialLinear.png")}),Object(l.b)("p",null,"Here is an example how to create a radial axis:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'// creates a radial axis with default scale id "r" and default kind "r" \nRadialAxis axis = new RadialAxis(chart);\n\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis);\n')),Object(l.b)("p",null,"The axis has configuration properties for ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/RadialLinearTick.html"},"ticks"),", ",Object(l.b)("a",{parentName:"p",href:"AngleLines"},"angle lines")," (line that appear in a radar chart outward from the center), ",Object(l.b)("a",{parentName:"p",href:"PointLabels"},"point labels")," (labels around the edge in a radar chart):"),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("p",null,"The radial linear axis allows to define a number of properties, used to display the data."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// sets and gets the max value\naxis.setMax(100);\n\ndouble max = axis.getMax();\n")),Object(l.b)("p",null,"The following are the attributes that you can set:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"alignToPixels"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"Align pixel values to device pixels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"animate"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", animate scaling the chart from the center.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backgroundColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},"The background color of scale area.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"beginAtZero"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", scale will include 0 if it is not already included.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"display"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/Display.html"},"Display")),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"Display.TRUE"),", the axis is shown.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"max"),Object(l.b)("td",{parentName:"tr",align:"left"},"double"),Object(l.b)("td",{parentName:"tr",align:"left"},"User defined maximum number for the scale, overrides maximum value from data.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"min"),Object(l.b)("td",{parentName:"tr",align:"left"},"double"),Object(l.b)("td",{parentName:"tr",align:"left"},"User defined minimum number for the scale, overrides minimum value from data.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"reverse"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"Reverses order of tick labels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"startAngle"),Object(l.b)("td",{parentName:"tr",align:"left"},"double"),Object(l.b)("td",{parentName:"tr",align:"left"},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"suggestedMax"),Object(l.b)("td",{parentName:"tr",align:"left"},"double"),Object(l.b)("td",{parentName:"tr",align:"left"},"Adjustment used when calculating the maximum data value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"suggestedMin"),Object(l.b)("td",{parentName:"tr",align:"left"},"double"),Object(l.b)("td",{parentName:"tr",align:"left"},"Adjustment used when calculating the minimum data value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"weight"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"The weight used to sort the axis. Higher weights are further away from the chart area.")))),Object(l.b)("h2",{id:"ticks"},"Ticks"),Object(l.b)("p",null,"The radial linear axis provides the following options for configuring ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/RadialLinearTick.html"},"tick marks"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// sets and gets the max value\naxis.getTicks().setColor(HtmlColor.RED);\n\nIsColor color = axis.gteTicks().getColor();\n")),Object(l.b)("img",{src:Object(b.a)("/img/radialTicks.png")}),Object(l.b)("p",null,"The following are the attributes that you can set:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Scriptable"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backdropColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Color of label backdrops.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backdropPadding"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"The padding of tick backdrop.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../configuration/Commons#padding"},"padding documentation")," for more details.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"color"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Color of ticks.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"count"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"[Yes]","(#scriptable"),Object(l.b)("td",{parentName:"tr",align:"left"},"The number of ticks to generate. If specified, this overrides the automatic generation.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"display"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the tick marks are shown.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"font"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/options/Font.html"},"Font")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Font of ticks.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"maxTicksLimit"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"[Yes]","(#scriptable"),Object(l.b)("td",{parentName:"tr",align:"left"},"Maximum number of ticks and gridlines to show.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"numberFormat"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/intl/NumberFormatOptions.html"},"NumberFormatOptions")),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The number format options used by the default label formatter.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../intl/NumberFormat"},"INTL number format")," documentation.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"padding"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The padding between the tick label and the axis.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"precision"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"[Yes]","(#scriptable"),Object(l.b)("td",{parentName:"tr",align:"left"},"If defined and ",Object(l.b)("inlineCode",{parentName:"td"},"stepSize")," is not specified, the step size will be rounded to this many decimal places.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"sampleSize"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", draw a background behind the tick labels")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"stepSize"),Object(l.b)("td",{parentName:"tr",align:"left"},"double"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"User defined fixed step size for the scale.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"textStrokeColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"The color of the stroke around the text.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Stroke width around the text.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"z"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.")))),Object(l.b)("p",null,"The further customization of ticks, a ",Object(l.b)("a",{parentName:"p",href:"#callback"},"callback")," is provided."),Object(l.b)("br",null),"See [padding documentation](../configuration/Commons#padding) for more details.",Object(l.b)("h3",{id:"scriptable"},"Scriptable"),Object(l.b)("p",null,"Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in ",Object(l.b)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),Object(l.b)("p",null,"All scriptable options callbacks will get a ",Object(l.b)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-scriptable-options-context"},"ScaleContext")," instance."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// sets the option by a callback \naxis.getTicks().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),Object(l.b)("p",null,"The following options can be set by a callback:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Callback"),Object(l.b)("th",{parentName:"tr",align:"left"},"Returned types"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backdropColor"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backdropPadding"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/PaddingCallback.html"},"PaddingCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/items/PaddingItem.html"},"PaddingItem"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"color"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"count"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/CountCallback.html"},"CountCallback")),Object(l.b)("td",{parentName:"tr",align:"left"},"int")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"font"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"maxTicksLimit"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/MaxTicksLimitCallback.html"},"MaxTicksLimitCallback")),Object(l.b)("td",{parentName:"tr",align:"left"},"int")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"precision"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/PrecisionCallback.html"},"PrecisionCallback")),Object(l.b)("td",{parentName:"tr",align:"left"},"int")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ShowLabelBackdropCallback.html"},"ShowLabelBackdropCallback")),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"stepSize"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/StepSizeCallback.html"},"StepSizeCallback")),Object(l.b)("td",{parentName:"tr",align:"left"},"double")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"textStrokeColor"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},"int")))),Object(l.b)("h3",{id:"callback"},"Callback"),Object(l.b)("p",null,"It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration."),Object(l.b)("p",null,"To apply a custom callback, you can set a ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/TickCallback.html"},"TickCallback")," instance to the axis options, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'axis.getTicks().setCallback(new TickCallback(){\n\n   /**\n    * Changes the tick marks to include information about the data type.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param value value of tick\n    * @param index index of tick\n    * @param values list of all tick values\n    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.\n    */\n   public String onCallback(Axis axis, double value, int index, List<Double> values){\n      // add $\n      return "$" + value;\n   }\n         \n});\n')),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"../intl/NumberFormat"},"INTL number format")," documentation if you want to use a number formatter, provided out-of-the-box."),Object(l.b)("h3",{id:"noselecteddatasettickscallback-callback"},"NoSelectedDatasetTicksCallback callback"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Charba")," provides a common implementation for tick callback to set the decimal digits of ticks in case of all data sets are hidden, to avoid the annoying standard format of doubles."),Object(l.b)("p",null,"To apply the callback, you can set an instance to the axis options, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// sets the option by a callback \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback());\n")),Object(l.b)("p",null,"The default decimal precision is ",Object(l.b)("inlineCode",{parentName:"p"},"2"),". A custom precision can be set by the constructor of callback, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a radial axis \nRadialAxis axis = new RadialAxis(chart);\n// sets the option by a callback \n// 3 decimal digits \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback(3));\n")))}s.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,f=s["".concat(b,".").concat(m)]||s[m]||d[m]||l;return a?n.a.createElement(f,c(c({ref:t},o),{},{components:a})):n.a.createElement(f,c({ref:t},o))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return b}));var r=a(16),n=a(211);function l(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var l=void 0===r?{}:r,b=l.forcePrependBaseUrl,c=void 0!==b&&b,i=l.absolute,o=void 0!==i&&i;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+p:p}(l,a,e,t)}}}function b(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},211:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))}}]);