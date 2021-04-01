---
id: Grid
title:  Grid
hide_title: true
sidebar_label: Grid
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
| -----| ---- | ---------- | -----------
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | - | If set, used as the color of the border line. If unset, the first `color` option is resolved and used.
| borderDash | int[] | - | Length and spacing of dashes on grid lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | [Yes](#scriptable) | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderWidth | int | - | If set, used as the width of the border line. If unset, the first `lineWidth` option is resolved and used.
| circular | boolean | - | If `true`, grid lines are circular (on radar chart only).
| color | String - String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | [Yes](#scriptable) | The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line and so on.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| display | boolean | - | If `false`, do not display grid lines for this axis.
| drawBorder | boolean | - | If `true`, draw border at the edge between the axis and the chart area.
| drawOnChartArea | boolean | - | If `true`, draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn. 
| drawTicks | boolean | - | If `true`, draw lines beside the ticks in the axis area beside the chart.
| lineWidth | int - int[] | [Yes](#scriptable) | Stroke width of grid lines.
| offset | boolean | - | If `true`, grid lines will be shifted to be between labels. This is set to `true` in the bar chart by default.
| tickBorderDash | int[] | [Yes](#scriptable) | Length and spacing of the tick mark line. If not set, defaults to the grid line `borderDash` value.
| tickBorderDashOffset | double - double[] | - | Offset for the line dash of the tick mark. If unset, defaults to the grid line `borderDashOffset` value
| tickColor | String - String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | [Yes](#scriptable) | Color of the tick line. If unset, defaults to the grid line `color`.
| tickLength | int | - | Length in pixels that the grid lines will draw in the axis area. 
| tickWidth | int - int[] | [Yes](#scriptable) | Width of the tick mark in pixels. If unset, defaults to the grid line `lineWidth`.
| z | int | - | The z-index of gridline layer. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.

### Scriptable

Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

All scriptable options callbacks will get a [ScaleScriptableContext](../configuration/ScriptableOptions#scale-scriptable-options-context) instance.

```java
// creates the axis for chart
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets the option by a callback 
axis.getGrid().setColor(new ColorCallback<ScaleScriptableContext>() {

   @Override
   public IsColor invoke(ScaleScriptableContext context) {
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| borderDashOffset | [BorderDashOffsetCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;ScaleScriptableContext&gt; | double
| color | [ColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleScriptableContext&gt; | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| lineWidth | [WidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;ScaleScriptableContext&gt; | int
| tickBorderDash | [BorderDashOffsetCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;ScaleScriptableContext&gt; | double
| tickColor | [ColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleScriptableContext&gt; | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| tickWidth | [WidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;ScaleScriptableContext&gt; | int
