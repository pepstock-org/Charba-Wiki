---
id: Grid
title:  Grid and border
hide_title: true
sidebar_label: Grid and border
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Grid

It defines options for the grid lines that run perpendicular to the axis. 

<img src={useBaseUrl('/img/grid.png')} />

All axes are providing the capability to set and get the options, by the **set** and **get** methods, as following:

```java
// creates the axis for chart
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets line width to the grid
axis.getGrid().setDisplay(true);

boolean display = axis.getGrid().isDisplay();
```

Table with options:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| circular | boolean | - | If `true`, grid lines are circular (on radar chart only).
| color | String - String[] - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html)[] | [Yes](#scriptable) | The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line and so on.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| display | boolean | - | If `false`, do not display grid lines for this axis.
| drawOnChartArea | boolean | - | If `true`, draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn. 
| drawTicks | boolean | - | If `true`, draw lines beside the ticks in the axis area beside the chart.
| lineWidth | int - int[] | [Yes](#scriptable) | Stroke width of grid lines.
| offset | boolean | - | If `true`, grid lines will be shifted to be between labels. This is set to `true` in the bar chart by default.
| tickBorderDash | int[] | [Yes](#scriptable) | Length and spacing of the tick mark line. If not set, defaults to the grid line `borderDash` value.
| tickBorderDashOffset | double - double[] | - | Offset for the line dash of the tick mark. If unset, defaults to the grid line `borderDashOffset` value
| tickColor | String - String[] - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html)[] | [Yes](#scriptable) | Color of the tick line. If unset, defaults to the grid line `color`.
| tickLength | int | - | Length in pixels that the grid lines will draw in the axis area. 
| tickWidth | int - int[] | [Yes](#scriptable) | Width of the tick mark in pixels. If unset, defaults to the grid line `lineWidth`.
| z | int | - | The z-index of gridline layer. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.

### Scriptable

Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

All scriptable options callbacks will get a [ScaleContext](../configuration/ScriptableOptions#scale-context) instance.

```java
// creates the axis for chart
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets the option by a callback 
axis.getGrid().setColor(new ColorCallback<ScaleContext>(){

   @Override
   public IsColor invoke(ScaleContext context){
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| color | [ColorCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html)
| lineWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;ScaleContext&gt; | int
| tickBorderDash | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;ScaleContext&gt; | double
| tickColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html)
| tickWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;ScaleContext&gt; | int

## Border

The [border](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/configuration/AxisBorder.html) defines options for the border that run perpendicular to the axis.

```java
// creates the axis for chart
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets color to the grid
axis.getBorder().setDisplay(true);
axis.getBorder().setColor(HtmlColor.RED);

boolean display = axis.getBorder().isDisplay();
```

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| display | boolean | - | If `true`, draw border at the edge between the axis and the chart area.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/colors/IsColor.html) | - | If set, used as the color of the border line.
| dash | int[] | [Yes](#border-scriptable) | Length and spacing of dashes on grid lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| dashOffset | double | [Yes](#border-scriptable) | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| width | int | - | If set, used as the width of the border line.
| z | int | - | z-index of the border layer. Values less than or equals to 0 are drawn under datasets, greater than 0 on top.

### Border scriptable

Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

All scriptable options callbacks will get a [ScaleContext](../configuration/ScriptableOptions#scale-context) instance.

```java
// creates the axis for chart
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets the option by a callback 
axis.getBorder().setDashOffset(new BorderDashOffsetCallback<ScaleContext>(){

   @Override
   public int invoke(ScaleContext context){
      // logic
      return dashOffset;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| dash | [BorderDashCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;ScaleContext&gt; | List&lt;Integer&gt;
| dashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;ScaleContext&gt; | double
