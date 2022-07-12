---
id: Elements
title: Elements
hide_title: true
sidebar_label: Elements
---
## Elements

The [elements](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/Elements.html) allows the user to configure the different type of shapes which are used to draw the datasets.

Options can be configured for four different types of elements: **[arc](#arc)**, **[lines](#line)**, **[points](#point)**, and **[bar](#bar)**.

The [elements](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/Elements.html) configuration is nested in the global configuration as following: 

```java
// gets elements node
Elements elements = chart.getOptions().getElements();
```

### Point

Point element is used to represent the points in a line chart or a bubble chart.

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets and gets border width and background color for the point
chart.getOptions().getElements().getPoint().setBorderWidth(2);
chart.getOptions().getElements().getPoint().setBackgroundColor("red");

int borderWidth = chart.getOptions().getElements().getPoint().getBorderWidth();
IsColor backgroundColor = chart.getOptions().getElements().getPoint().getBackgroundColor();
```

The defaults values are set in global defaults options, see [default global elements point options](../defaults/DefaultsCharts#point).

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#point-scriptable-options) | Point fill color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#point-scriptable-options) | Point stroke color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderWidth | int | [Yes](#point-scriptable-options) | Point stroke width. 
| hitRadius | int | [Yes](#point-scriptable-options) | Extra radius added to point radius for hit detection.
| hoverBackgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#point-scriptable-options) | Point fill color when hovered.
| hoverBorderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#point-scriptable-options) | Point stroke color when hovered.
| hoverBorderWidth | int | [Yes](#point-scriptable-options) | Stroke width when hovered. 
| hoverRadius | int | [Yes](#point-scriptable-options) | Point radius when hovered. 
| pointStyle | [PointStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/PointStyle.html) - [Img](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Canvas.html) | [Yes](#point-scriptable-options) | Point style.
| radius | int | [Yes](#point-scriptable-options) | Point radius.
| rotation | double | [Yes](#point-scriptable-options) | The point rotation (in degrees).

#### Point scriptable options

Scriptable options at point element level accept a callback which is called for each of the underlying data values. See more details in [scriptable options](ScriptableOptions) section. 

```java
// gets point element configuration instance
Point point = chart.getOptions().getElements().getPoint();
// sets the option by a callback 
point.setBackgroundColor(new ColorCallback<DatasetContext>(){

   @Override
   public IsColor invoke(DatasetContext context){
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;DatasetContext&gt; | int
| hitRadius | [RadiusCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/RadiusCallback.html)&lt;DatasetContext&gt; | double
| hoverBackgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;DatasetContext&gt; | int
| hoverRadius | [RadiusCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/RadiusCallback.html)&lt;DatasetContext&gt; | double
| pointStyle | [PointStyleCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/PointStyleCallback.html)&lt;DatasetContext&gt; | [PointStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/PointStyle.html) - [Img](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Canvas.html)
| radius | [RadiusCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/RadiusCallback.html)&lt;DatasetContext&gt; | double
| rotation | [RotationCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;DatasetContext&gt; | double

### Line

Line element is used to represent the line in a line chart.

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets and gets border width and background color for the line
chart.getOptions().getElements().getLine().setBorderWidth(5);
chart.getOptions().getElements().getLine().setBackgroundColor("red");

int borderWidth = chart.getOptions().getElements().getLine().getBorderWidth();
IsColor backgroundColor = chart.getOptions().getElements().getLine().getBackgroundColor();
```

The defaults values are set in global defaults options, see [default global elements line options](../defaults/DefaultsCharts#line).

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#line-scriptable-options) | Line fill color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderCapStyle | [CapStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/CapStyle.html) | [Yes](#line-scriptable-options) | Determines the shape used to draw the end points of lines.<br/>See [MDN](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#line-scriptable-options) | Line stroke color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderDash | int[] | [Yes](#line-scriptable-options) |The line dash pattern used when stroking lines. It uses an array of values that specify alternating lengths of lines and gaps which describe the pattern.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | [Yes](#line-scriptable-options) | Line dash offset.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/JoinStyle.html) | [Yes](#line-scriptable-options) | The shape used to join two line segments where they meet.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
| borderWidth | int | [Yes](#line-scriptable-options) | Line stroke width.
| capBezierPoints | boolean | - | Set `true` to keep Bezier control inside the chart, `false` for no restriction.
| cubicInterpolationMode | [CubicInterpolationMode](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/CubicInterpolationMode.html) | [Yes](#line-scriptable-options) | Interpolation mode to apply.
| fill |  String - int - boolean - [IsFill](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/IsFill.html) | [Yes](#line-scriptable-options) | How to fill the area under the line.<br/>See [Filling modes](../coloring/Colors#filling-modes)
| hoverBackgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#line-scriptable-options) | Line fill color when hovered.
| hoverBorderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#line-scriptable-options) | Line stroke color when hovered.
| hoverBorderWidth | int | [Yes](#line-scriptable-options) | Stroke width when hovered. 
| stepped | boolean - [Stepped](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/Stepped.html) | [Yes](#line-scriptable-options) | If the line is shown as a stepped line.
| tension | double | - | Bezier curve tension (`0` for no Bezier curves).

#### Line scriptable options

Scriptable options at line element level accept a callback which is called for each of the underlying data values. See more details in [scriptable options](ScriptableOptions) section. 

```java
// gets line element configuration instance
Line line = chart.getOptions().getElements().getLine();
// sets the option by a callback 
line.setBackgroundColor(new ColorCallback<DatasetContext>(){

   @Override
   public IsColor invoke(DatasetContext context){
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| borderCapStyle | [CapStyleCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/CapStyleCallback.html)&lt;DatasetContext&gt; | [CapStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/CapStyle.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;DatasetContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;DatasetContext&gt; | double
| borderJoinStyle | [JoinStyleCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/JoinStyleCallback.html)&lt;DatasetContext&gt; | [JoinStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/JoinStyle.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;DatasetContext&gt; | int
| cubicInterpolationMode | [CubicInterpolationModeCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/CubicInterpolationModeCallback.html) | [CubicInterpolationMode](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/CubicInterpolationMode.html)
| fill | [FillCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/FillCallback.html) | String - int - boolean - [IsFill](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/IsFill.html)
| hoverBackgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;DatasetContext&gt; | int
| stepped | [SteppedCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/SteppedCallback.html) | [Stepped](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/Stepped.html)

### Arc

Arc element is used in the polar area, doughnut and pie charts.

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets and gets border width and background color for the arc
chart.getOptions().getElements().getArc().setBorderWidth(5);
chart.getOptions().getElements().getArc().setBackgroundColor(HtmlColor.RED);

int borderWidth = chart.getOptions().getElements().getArc().getBorderWidth();
IsColor backgroundColor = chart.getOptions().getElements().getArc().getBackgroundColor();
```

The defaults values are set in global defaults options, see [default global elements arc options](../defaults/DefaultsCharts#arc).

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| angle | double | [Yes](#arc-scriptable-options) | Arc angle to cover, for polar chart only.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#arc-scriptable-options) | Arc fill color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderAlign | [BorderAlign](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/BorderAlign.html) | [Yes](#arc-scriptable-options) | Arc stroke alignment.
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#arc-scriptable-options) | Arc stroke color.
| borderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/JoinStyle.html) | [Yes](#arc-scriptable-options) | Arc line join style. The default is JoinStyle.ROUND when `borderAlign` is BorderAlign.INNER.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
| borderWidth | int | [Yes](#arc-scriptable-options) | Arc stroke width.
| borderRadius | int | [Yes](#arc-scriptable-options) | The arc border radius (in pixels).
| hoverBackgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#arc-scriptable-options) | Arc fill color when hovered.
| hoverBorderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#arc-scriptable-options) | Arc stroke color when hovered.
| hoverBorderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/JoinStyle.html) | [Yes](#arc-scriptable-options) | Arc line join style when hovered.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
| hoverBorderWidth | int | [Yes](#arc-scriptable-options) | Stroke width when hovered. 
| hoverOffset | int | [Yes](#arc-scriptable-options) | The offset of the arc (in pixels) when hovered.
| offset | int | [Yes](#arc-scriptable-options) | The offset of the arc (in pixels).
| spacing | int | - | Fixed arc offset (in pixels). Similar to `offset` but applies to all arcs.

#### Arc scriptable options

Scriptable options at arc element level accept a callback which is called for each of the underlying data values. See more details in [scriptable options](ScriptableOptions) section. 

```java
// gets arc element configuration instance
Arc arc = chart.getOptions().getElements().getArc();
// sets the option by a callback 
arc.setBackgroundColor(new ColorCallback<DatasetContext>(){

   @Override
   public IsColor invoke(DatasetContext context){
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| angle | [AngleCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/AngleCallback.html) | double
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| borderAlign | [BorderAlignCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BorderAlignCallback.html) | [BorderAlign](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/BorderAlign.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| borderRadius | [BorderRadiusCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html) | int
| borderJoinStyle | [JoinStyleCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/JoinStyleCallback.html)&lt;DatasetContext&gt; | [JoinStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/JoinStyle.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;DatasetContext&gt; | int
| hoverBackgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderJoinStyle | [JoinStyleCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/JoinStyleCallback.html)&lt;DatasetContext&gt; | [JoinStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/JoinStyle.html)
| hoverBorderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;DatasetContext&gt; | int
| hoverOffset | [OffsetCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/OffsetCallback.html)&lt;DatasetContext&gt; | int
| offset | [OffsetCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/OffsetCallback.html)&lt;DatasetContext&gt; | int

### Bar

Bar element is used to represent the bars in a bar chart.

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets and gets border width and background color for the bar
chart.getOptions().getElements().getBar().setBorderWidth(5);
chart.getOptions().getElements().getBar().setBackgroundColor(HtmlColor.RED);

int borderWidth = chart.getOptions().getElements().getBar().getBorderWidth();
IsColor backgroundColor = chart.getOptions().getElements().getBar().getBackgroundColor();
```

The defaults values are set in global defaults options, see [default global elements arc options](../defaults/DefaultsCharts#bar).

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| autoInflateAmount | boolean | - | If `true`, the amount of pixels to inflate the bar rectangles, when drawing, is automatically calculating.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#bar-scriptable-options) | Bar fill color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#bar-scriptable-options) | Bar stroke color.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderRadius | int | [Yes](#bar-scriptable-options) | The bar border radius (in pixels).
| borderSkipped | [BorderSkipped](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/BorderSkipped.html) | [Yes](#bar-scriptable-options) | The edge to skip when drawing bar.
| borderWidth | int | [Yes](#bar-scriptable-options) | The bar border width (in pixels).
| enableBorderRadius| boolean | [Yes](#bar-scriptable-options) | If `true`, it only shows the border radius of a bar when the bar is at the end of the stack.
| hoverBackgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#bar-scriptable-options) | Bar fill color when hovered.
| hoverBorderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#bar-scriptable-options) | Bar stroke color when hovered.
| hoverBorderWidth | int | [Yes](#bar-scriptable-options) | Stroke width when hovered. 
| hoverBorderRadius | int | [Yes](#bar-scriptable-options) | The bar border radius (in pixels) when hovered.
| inflateAmount | int | [Yes](#bar-scriptable-options) | The amount of pixels to inflate the bar rectangles, when drawing.
| pointStyle | [PointStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/PointStyle.html) - [Img](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Canvas.html) | [Yes](#bar-scriptable-options) | Point style for legend.

#### Bar scriptable options

Scriptable options at bar element level accept a callback which is called for each of the underlying data values. See more details in [scriptable options](ScriptableOptions) section. 

```java
// gets bar element configuration instance
Bar bar = chart.getOptions().getElements().getBar();
// sets the option by a callback 
bar.setBackgroundColor(new ColorCallback<DatasetContext>(){

   @Override
   public IsColor invoke(DatasetContext context){
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| borderSkipped | [BorderSkippedCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BorderSkippedCallback.html) | [BorderSkipped](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/BorderSkipped.html) 
| borderRadius | [BorderRadiusCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html) | int
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;DatasetContext&gt; | int
| enableBorderRadius | [EnableBorderRadiusCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/EnableBorderRadiusCallback.html) | boolean
| hoverBackgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;DatasetContext&gt; | int
| hoverBorderRadius | [BorderRadiusCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html) | int
| inflateAmount | [InflateAmountCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/InflateAmountCallback.html) | int**<sup style={{color: 'orange'}}>(1)</sup>**
| pointStyle | [PointStyleCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/PointStyleCallback.html)&lt;DatasetContext&gt; | [PointStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/PointStyle.html) - [Img](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Canvas.html)

**<sup style={{color: 'orange'}}>(1)</sup>**To enable `autoInflateAmount` by the inflate amount callback, the value to return must be `Undefined.INTEGER`.

```java
Bar bar = chart.getOptions().getElements().getBar();
// sets the option by a callback 
bar.setInflateAmount(new InflateAmountCallback(){

   @Override
   public int invoke(DatasetContext context){
      // logic
      return Undefined.INTEGER; // auto inflate amount
   }
});
```
