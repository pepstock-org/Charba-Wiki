(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{138:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return b})),a.d(e,"metadata",(function(){return c})),a.d(e,"toc",(function(){return o})),a.d(e,"default",(function(){return p}));var r=a(3),n=a(8),l=(a(0),a(209)),i=a(210),b={id:"CartesianLogarithmicAxes",title:"Cartesian logarithmic",hide_title:!0,sidebar_label:"Logarithmic"},c={unversionedId:"axes/CartesianLogarithmicAxes",id:"axes/CartesianLogarithmicAxes",isDocsHomePage:!1,title:"Cartesian logarithmic",description:"Cartesian Logarithmic Axes",source:"@site/docs/axes/Logarithmic.md",sourceDirName:"axes",slug:"/axes/CartesianLogarithmicAxes",permalink:"/Charba-Wiki/docs/axes/CartesianLogarithmicAxes",version:"current",sidebar_label:"Logarithmic",frontMatter:{id:"CartesianLogarithmicAxes",title:"Cartesian logarithmic",hide_title:!0,sidebar_label:"Logarithmic"},sidebar:"docs",previous:{title:"Linear",permalink:"/Charba-Wiki/docs/axes/CartesianLinearAxes"},next:{title:"Cartesian time",permalink:"/Charba-Wiki/docs/axes/CartesianTimeAxes"}},o=[{value:"Cartesian Logarithmic Axes",id:"cartesian-logarithmic-axes",children:[]},{value:"Options",id:"options",children:[]},{value:"Ticks",id:"ticks",children:[{value:"Scriptable",id:"scriptable",children:[]},{value:"Callback",id:"callback",children:[]},{value:"NoSelectedDatasetTicksCallback callback",id:"noselecteddatasettickscallback-callback",children:[]}]}],s={toc:o};function p(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"cartesian-logarithmic-axes"},"Cartesian Logarithmic Axes"),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/CartesianLogarithmicAxis.html"},"logarithmic axis")," is use to chart numerical data. It can be placed on either the x or y axis. As the name suggests, logarithmic interpolation is used to determine where a value lies on the axis."),Object(l.b)("img",{src:Object(i.a)("/img/cartesianLogarithmic.png")}),Object(l.b)("p",null,"Here are some example how to create logarithmic axes:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'// creates a logarithmic axis with default scale id "y" and default kind "y" \nCartesianLogarithmicAxis axis1 = new CartesianLogarithmicAxis(chart);\n\n// creates a logarithmic axis with scale id "my-axis" and default kind "y" \nCartesianLogarithmicAxis axis2 = new CartesianLogarithmicAxis(chart, "my-axis");\n\n// creates a logarithmic axis with scale id "my-axis" and default kind "y" \nCartesianLogarithmicAxis axis3 = new CartesianLogarithmicAxis(chart, IsScaleId.create("my-axis"));\n\n// creates a logarithmic axis with default scale id "y" and custom kind "y" \nCartesianLogarithmicAxis axis4 = new CartesianLogarithmicAxis(chart, AxisKind.Y);\n\n// creates a logarithmic axis with scale id "my-axis" and custom kind "y" \nCartesianLogarithmicAxis axis5 = new CartesianLogarithmicAxis(chart, "my-axis", AxisKind.Y);\n\n// creates a logarithmic axis with scale id "my-axis" and custom kind "y" \nIsScaleId myAxis = IsScaleId.create("my-axis");\nCartesianLogarithmicAxis axis6 = new CartesianLogarithmicAxis(chart, myAxis, AxisKind.Y);\n\n// adds axes to chart configuration\nchart.getOptions().setAxes(axis1, ...);\n')),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("p",null,"The cartesian logarithmic axis allows to define a number of properties, used to display the data."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a logarithmic axis \nCartesianLogarithmicAxis axis = new CartesianLogarithmicAxis(chart);\n// sets and gets the max value\naxis.setMax(10000);\n\ndouble max = axis.getMax();\n")),Object(l.b)("p",null,"The following are the attributes that you can set:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"alignToPixels"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"Align pixel values to device pixels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backgroundColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},"The background color of scale area.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"bounds"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/Bounds.html"},"Bounds")),Object(l.b)("td",{parentName:"tr",align:"left"},"Determines the scale bounds on axis.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"display"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/Display.html"},"Display")),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"Display.TRUE"),", the axis is shown.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"max"),Object(l.b)("td",{parentName:"tr",align:"left"},"double"),Object(l.b)("td",{parentName:"tr",align:"left"},"User defined maximum number for the scale, overrides maximum value from data.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"min"),Object(l.b)("td",{parentName:"tr",align:"left"},"double"),Object(l.b)("td",{parentName:"tr",align:"left"},"User defined minimum number for the scale, overrides minimum value from data.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"offset"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", extra space is added to the both edges and the axis is scaled to fit in the chart area.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"position"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/AxisPosition.html"},"AxisPosition")),Object(l.b)("td",{parentName:"tr",align:"left"},"Position of the axis.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"reverse"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"Reverses order of tick labels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"singleStacked"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"If you might want to stack positive and negative values together.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"stacked"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"If the axis are stacked.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"suggestedMax"),Object(l.b)("td",{parentName:"tr",align:"left"},"double"),Object(l.b)("td",{parentName:"tr",align:"left"},"Adjustment used when calculating the maximum data value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"suggestedMin"),Object(l.b)("td",{parentName:"tr",align:"left"},"double"),Object(l.b)("td",{parentName:"tr",align:"left"},"Adjustment used when calculating the minimum data value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"weight"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"The weight used to sort the axis. Higher weights are further away from the chart area.")))),Object(l.b)("h2",{id:"ticks"},"Ticks"),Object(l.b)("p",null,"The logarithmic axis provides the following options for configuring ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/CartesianLogarithmicTick.html"},"tick marks"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a logarithmic axis \nCartesianLogarithmicAxis axis = new CartesianLogarithmicAxis(chart);\n// sets and gets the max value\naxis.getTicks().setColor(HtmlColor.RED);\n\nIsColor color = axis.gteTicks().getColor();\n")),Object(l.b)("img",{src:Object(i.a)("/img/logarithmicTicks.png")}),Object(l.b)("p",null,"The following are the attributes that you can set:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Scriptable"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"align"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/ElementAlign.html"},"ElementAlign")),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The tick alignment along the axis.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"autoSkip"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", automatically calculates how many labels that can be shown and hides labels accordingly. Labels will be rotated up to ",Object(l.b)("inlineCode",{parentName:"td"},"maxRotation")," before skipping any. Turn ",Object(l.b)("inlineCode",{parentName:"td"},"autoSkip")," off to show all labels no matter what.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"autoSkipPadding"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The padding between the ticks on the horizontal axis when autoSkip is enabled.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backdropColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Color of label backdrops.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backdropPadding"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/Padding.html"},"Padding")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"The padding of tick backdrop.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../configuration/Commons#padding"},"padding documentation")," for more details.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"color"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Color of ticks.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"crossAlign"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/CrossAlign.html"},"CrossAlign")),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The tick alignment perpendicular to the axis.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"display"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the tick marks are shown.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"font"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/options/Font.html"},"Font")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Font of ticks.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../defaults/DefaultsCharts#font"},"Font"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"labelOffset"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis).",Object(l.b)("br",null),Object(l.b)("br",null),"Note: ",Object(l.b)("em",{parentName:"td"},"This can cause labels at the edges to be cropped by the edge of the canvas"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"maxRotation"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The maximum rotation for tick labels when rotating to condense labels.",Object(l.b)("br",null),Object(l.b)("br",null),"Note: ",Object(l.b)("em",{parentName:"td"},"Rotation doesn't occur until necessary and only applicable to horizontal scales."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"minRotation"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The minimum rotation for tick labels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"mirror"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The flips tick labels around axis, displaying the labels inside the chart instead of outside.",Object(l.b)("br",null),Object(l.b)("br",null),"Note: ",Object(l.b)("em",{parentName:"td"},"Only applicable to vertical scales."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"numberFormat"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/intl/NumberFormatOptions.html"},"NumberFormatOptions")),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The number format options used by the default label formatter.",Object(l.b)("br",null),"See ",Object(l.b)("a",{parentName:"td",href:"../intl/NumberFormat"},"INTL number format")," documentation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"padding"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The padding between the tick label and the axis.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"sampleSize"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", draw a background behind the tick labels")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"textStrokeColor"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"The color of the stroke around the text.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"#scriptable"},"Yes")),Object(l.b)("td",{parentName:"tr",align:"left"},"Stroke width around the text.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"z"),Object(l.b)("td",{parentName:"tr",align:"left"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"-"),Object(l.b)("td",{parentName:"tr",align:"left"},"z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.")))),Object(l.b)("p",null,"The further customization of ticks, a ",Object(l.b)("a",{parentName:"p",href:"#callback"},"callback")," is provided."),Object(l.b)("h3",{id:"scriptable"},"Scriptable"),Object(l.b)("p",null,"Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in ",Object(l.b)("a",{parentName:"p",href:"../configuration/ScriptableOptions"},"Configuring charts")," section. "),Object(l.b)("p",null,"All scriptable options callbacks will get a ",Object(l.b)("a",{parentName:"p",href:"../configuration/ScriptableOptions#scale-scriptable-options-context"},"ScaleContext")," instance."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a logarithmic axis \nCartesianLogarithmicAxis axis = new CartesianLogarithmicAxis(chart);\n// sets the option by a callback \naxis.getTicks().setColor(new ColorCallback<ScaleContext>(){\n\n   @Override\n   public IsColor invoke(ScaleContext context){\n      // logic\n      return color;\n   }\n});\n")),Object(l.b)("p",null,"The following options can be set by a callback:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Callback"),Object(l.b)("th",{parentName:"tr",align:"left"},"Returned types"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backdropColor"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"backdropPadding"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/PaddingCallback.html"},"PaddingCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/items/PaddingItem.html"},"PaddingItem"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"color"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"font"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/FontCallback.html"},"FontCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/items/FontItem.html"},"FontItem"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"showLabelBackdrop"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ShowLabelBackdropCallback.html"},"ShowLabelBackdropCallback")),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"textStrokeColor"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html"},"ColorCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},"String - ",Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html"},"IsColor"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"textStrokeWidth"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/WidthCallback.html"},"WidthCallback"),"<","ScaleContext",">"),Object(l.b)("td",{parentName:"tr",align:"left"},"int")))),Object(l.b)("h3",{id:"callback"},"Callback"),Object(l.b)("p",null,"It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration."),Object(l.b)("p",null,"To apply a custom callback, you can set a ",Object(l.b)("a",{parentName:"p",href:"https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/TickCallback.html"},"TickCallback")," instance to the axis options, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'axis.getTicks().setCallback(new TickCallback(){\n\n   /**\n    * Changes the tick marks to include information about the data type.\n    * \n    * @param axis axis instance where this callback as been defined\n    * @param value value of tick\n    * @param index index of tick\n    * @param values list of all tick values\n    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.\n    */\n   public String onCallback(Axis axis, double value, int index, List<Double> values){\n      // add $\n      return "$" + value;\n   }\n         \n});\n')),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"../intl/NumberFormat"},"INTL number format")," documentation if you want to use a number formatter, provided out-of-the-box."),Object(l.b)("h3",{id:"noselecteddatasettickscallback-callback"},"NoSelectedDatasetTicksCallback callback"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Charba")," provides a common implementation for tick callback to set the decimal digits of ticks in case of all data sets are hidden, to avoid the annoying standard format of doubles."),Object(l.b)("p",null,"To apply the callback, you can set an instance to the axis options, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a logarithmic axis \nCartesianLogarithmicAxis axis = new CartesianLogarithmicAxis(chart);\n// sets the option by a callback \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback());\n")),Object(l.b)("p",null,"The default decimal precision is ",Object(l.b)("inlineCode",{parentName:"p"},"2"),". A custom precision can be set by the constructor of callback, as following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// creates a logarithmic axis \nCartesianLogarithmicAxis axis = new CartesianLogarithmicAxis(chart);\n// sets the option by a callback \n// 3 decimal digits \naxis.getTicks().setCallback(new NoSelectedDatasetTicksCallback(3));\n")))}p.isMDXComponent=!0},209:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return h}));var r=a(0),n=a.n(r);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=n.a.createContext({}),s=function(t){var e=n.a.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):b(b({},e),t)),a},p=function(t){var e=s(t.components);return n.a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},m=n.a.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,o=c(t,["components","mdxType","originalType","parentName"]),p=s(a),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.a.createElement(h,b(b({ref:e},o),{},{components:a})):n.a.createElement(h,b({ref:e},o))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var b={};for(var c in e)hasOwnProperty.call(e,c)&&(b[c]=e[c]);b.originalType=t,b.mdxType="string"==typeof t?t:r,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},210:function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return i}));var r=a(16),n=a(211);function l(){var t=Object(r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var l=void 0===r?{}:r,i=l.forcePrependBaseUrl,b=void 0!==i&&i,c=l.absolute,o=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(b)return e+a;var s=a.startsWith(e)?a:e+a.replace(/^\//,"");return o?t+s:s}(l,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},211:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return n}))}}]);