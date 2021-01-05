---
id: DefaultsScales
title: Defaults scales options
hide_title: true
sidebar_label: Scales
---

## Commons scales options

To change the global scale, **Charba** is providing the method `getScale` in the [defaults](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Defaults.html).

With this method you can get all global configuration of [Chart.JS](http://www.chartjs.org/) for [scale](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/GlobalScale.html) (common one, not related to chart type) and you have got all `set` and `get` methods to change or retrieve the global configuration items.

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().setStacked(true);

boolean stacked = Defaults.get().getScale().isStacked();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| beginAtZero | boolean | `false` | if `true`, scale will include 0 if it is not already included.
| bounds | [ScaleBounds](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ScaleBounds.html) | ScaleBounds.TICKS | Determines the scale bounds on time axis. 
| display | boolean | `true` | If `true`, the axis is shown.
| max | double - String - java.util.Date  | See description | User defined maximum number for the scale, overrides maximum value from data.<br/>As value, you can set a:<br/>  - `double` for linear, logarithmic and radial scales, with `Double.MAX_VALUE` as default;<br/>  - `Date` for time and time series scales, with `null` as default;<br/>  - `String` for category scales, with `null` as default.
| min | double - String - java.util.Date  | See description | User defined minimum number for the scale, overrides minimum value from data.<br/>As value, you can set a:<br/>  - `double` for linear, logarithmic and radial scales, with `Double.MIN_VALUE` as default;<br/>  - `Date` for time and time series scales, with `null` as default;<br/>  - `String` for category scales, with `null` as default.
| offset | boolean | `false` | If `true`, extra space is added to the both edges and the axis is scaled to fit into the chart area. 
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.TOP |  Position of the axis in the chart. 
| reverse | boolean | `false` | Reverses order of tick labels.
| stacked | boolean | `false` | if the axis are stacked.
| suggestedMax | double - String - java.util.Date | See description | Adjustment used when calculating the maximum data value.<br/>As value, you can set a:<br/>  - `double` for linear, logarithmic and radial scales, with `Double.MAX_VALUE` as default;<br/>  - `Date` for time and time series scales, with `null` as default;<br/>  - `String` for category scales, with `null` as default.
| suggestedMin | double - String - java.util.Date | See description | Adjustment used when calculating the minimum data value.<br/>As value, you can set a:<br/>  - `double` for linear, logarithmic and radial scales, with `Double.MIN_VALUE` as default;<br/>  - `Date` for time and time series scales, with `null` as default;<br/>  - `String` for category scales, with `null` as default.
| weight | int | 0 | The weight used to sort the axis. Higher weights are further away from the chart area. 

### GridLines

The grid line configuration defines options for the grid lines that are run perpendicular to the axis.

The [grid lines](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/GridLines.html) configuration is nested into the scale configuration as following:

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getGridLines().setCircular(true);

boolean circular = Defaults.get().getScale().getGridLines().isCircular();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | | If set, used as the color of the border line. If unset, the first `color` option is resolved and used.
| borderDash | int[] | [] | Length and spacing of dashes on grid lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderWidth | int | | If set, used as the width of the border line. If unset, the first `lineWidth` option is resolved and used.
| circular | boolean | `false` | If `true`, grid lines are circular (on radar chart only).
| color | String - String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line and so on.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| display | boolean | `true` | If `false`, do not display grid lines for this axis.
| drawBorder | boolean | `true` | If `true`, draw border at the edge between the axis and the chart area.
| drawOnChartArea | boolean | `true` | If `true`, draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn. 
| drawTicks | boolean | `true` | If `true`, draw lines beside the ticks in the axis area beside the chart.
| lineWidth | int - int[] | 1 | Stroke width of grid lines.
| offsetGridLines | boolean | `false` | If `true`, grid lines will be shifted to be between labels. This is set to `true` in the bar chart by default.
| tickLength | int | 10 | Length in pixels that the grid lines will draw into the axis area. 
| z | int | 0 | z-index of gridline layer. Values less than or equals to 0 are drawn under datasets, greater than 0 on top.

### Ticks

The tick configuration defines options for the tick marks that are generated by the axis.

The [ticks](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Ticks.html) configuration is nested into the scale configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getTicks().setAutoSkip(false);

boolean autoSkip = Defaults.get().getScale().getTicks().isAutoSkip();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| align | [ElementAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ElementAlign.html) | ElementAlign.CENTER | The tick alignment along the axis.
| autoSkip | boolean | `true` | If `true`, automatically calculates how many labels that can be shown and hides labels accordingly. Labels will be rotated up to `maxRotation` before skipping any. Turn `autoSkip` off to show all labels no matter what.
| autoSkipPadding | int | 0 | The padding between the ticks on the horizontal axis when autoSkip is enabled.
| backdropColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(255,255,255,0.75) - <span style={{backgroundColor: 'rgba(255,255,255,0.75)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Color of label backdrops. 
| backdropPaddingX | int | 2 | Horizontal padding of label backdrop.
| backdropPaddingY | int | 2 | Vertical padding of label backdrop. 
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | Color of ticks.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| crossAlign | [CrossAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CrossAlign.html) | CrossAlign.NEAR | The tick alignment perpendicular to the axis.
| display | boolean | `true` | If `true`, the tick marks are shown.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | Font of ticks.<br/>See [Font](DefaultsCharts#font).
| numberFormat | [NumberFormatOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/NumberFormatOptions.html) |  | The number format options used by the default label formatter. See FIXME
| labelOffset | int | 0 | Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis).<br/><br/>Note: *This can cause labels at the edges to be cropped by the edge of the canvas*.
| maxRotation | int | 50 | The maximum rotation for tick labels when rotating to condense labels.<br/><br/>Note: *Rotation doesn't occur until necessary and only applicable to horizontal scales.*
| maxTicksLimit | int | 11 | Maximum number of ticks and gridlines to show.
| minRotation | int | 0 | The minimum rotation for tick labels.
| mirror | boolean | `false` | The flips tick labels around axis, displaying the labels inside the chart instead of outside.<br/><br/>Note: *Only applicable to vertical scales.*
| padding | int | 0 | The padding between the tick label and the axis.
| precision | int | 0 | If defined and `stepSize` is not specified, the step size will be rounded to this many decimal places.
| sampleSize | int | UndefinedValues.INTEGER | The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
| showLabelBackdrop | boolean | `true` | If `true`, draw a background behind the tick labels
| source | [TickSource](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TickSource.html) | TickSource.AUTO | How ticks are generated on axis time.
| stepSize | double | `Double.MIN_VALUE` | User defined fixed step size for the scale.
| textStrokeColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | The color of the stroke around the text.
| textStrokeWidth | int | 0 | Stroke width around the text.
| z | int | 0 | z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under datasets, greater than 0 on top.

#### Minor Tick

The minor tick configuration defines options for the minor tick marks that are generated by the axis. Omitted options are inherited from `ticks` configuration.

The minor ticks configuration is nested into the ticks configuration as following: 

```java
Defaults.get().getScale().getTicks().getMinor();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#666' | Font color for tick labels.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family for the tick labels, follows CSS font-family options.
| fontSize | int | 12 | Font size for the tick labels.
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NROMAL | Font style for the tick labels, follows CSS font-style options
| lineHeight | double - String | 1.2 | Height of an individual line of text (see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))

#### Major Tick

The major tick configuration defines options for the major tick marks that are generated by the axis. Omitted options are inherited from `ticks` configuration.

The major ticks configuration is nested into the ticks configuration as following: 

```java
Defaults.get().getScale().getTicks().getMajor();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| enabled | boolean | false | If `true`, major tick options are used to show major ticks.
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#666' | Font color for tick labels.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family for the tick labels, follows CSS font-family options.
| fontSize | int | 12 | Font size for the tick labels.
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style for the tick labels, follows CSS font-style options
| lineHeight | double - String | 1.2 | Height of an individual line of text (see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))

### ScaleLabel

The scale label configuration defines options for the scale title. Note that this only applies to cartesian axes.

The [scale label](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/ScaleLabel.html) configuration is nested into the scale configuration as following: 

```java
Defaults.get().getScale().getScaleLabel();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| display | boolean | `false` | If `true`, display the axis title.
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#666' | Font color for scale title.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family for the scale title, follows CSS font-family options.
| fontSize | int | 12 | Font size for scale title.
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style for the scale title, follows CSS font-style options 
| labelString | String | '' | The text for the title.
| lineHeight | double - String | 1.2 | Height of an individual line of text (see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))

#### Padding

Padding to apply around scale labels. Only `top` and `bottom` are implemented.
The [padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/ScaleLabelPadding.html) configuration is nested into the scale configuration as following:

```java
Defaults.get().getScale().getScaleLabel().getPadding();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| bottom | int | 4 | the padding bottom in pixel.
| left | int | 4 | the padding left in pixel.
| right | int | 4 | the padding right in pixel.
| top | int | 4 | the padding top in pixel.   
   
### AngleLines

The angle lines options are used to configure angled lines that are radiated from the center of the chart to the point labels.

The [angle lines](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/AngleLines.html) configuration is nested into the scale configuration as following: 

```java
Defaults.get().getScale().getAngleLines();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0, 0, 0, 0.1)` | Color of angled lines. 
| display | boolean | `true` | if `true`, angle lines are shown.
| borderDash | int[] | [] | Length and spacing of dashes on grid lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| lineWidth | int | 1 | Width of angled lines.

### PointLabels

The point labels options are used to configure the point labels that are shown on the perimeter of the scale.

The [point labels](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/PointLabels.html) configuration is nested into the scale configuration as following 

```java
Defaults.get().getScale().getPointLabels();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| display | boolean | `true` | if `true`, point labels are shown.
| fontColor | String - String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) -[IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | '#666' | Font color for point labels.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family to use when rendering labels.
| fontSize | int | 10 | font size in pixels
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style to use when rendering point labels.
| lineHeight | double - String | 1.2 | Height of an individual line of text (see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))

### Time

The time options are used to configure the time axis and used to represent time series charts.

The [time](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Time.html) configuration is nested into the scale configuration as following: 

```java
Defaults.get().getScale().getTime();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| isoWeekday | boolean | `false` | If `true` and the unit is set to 'week', then the first day of the week will be Monday. Otherwise, it will be Sunday.
| max | java.util.Date | `null` | If defined, this will override the data maximum
| min | java.util.Date | `null` | If defined, this will override the data minimum
| parser | String | `null` | interpreted as a custom format to be used to parse the date.
| round | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | `null` | If defined, dates will be rounded to the start of this unit.
| tooltipFormat | String | `null` | Format string to use for the tooltip.
| unit | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | `null` | If defined, will force the unit to be a certain type.
| stepSize | int | 1 | The number of units between grid lines.
| minUnit | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | TimeUnit.MILLISECOND | The minimum display format to be used for a time unit.

For more details, have a look how to configure a [cartesian time axis](CartesianTimeAxes).

### Adapters

The adapters options are used to configure the adapter for external date library if that adapter needs or supports options.

The [adapters options](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Adapters.html) configuration is nested into the scale configuration as following: 

```java
Defaults.get().getScale().getAdapters();
```

**PAY ATTENTION** that only [Luxon](DateAdapters#Luxon) date adapters can be configured with additional options.

For more details, have a look how to configure a [Luxon](DateAdapters#Luxon) date adapters.

## Charts

To change the global options for a specific chart type, **Charba** is providing the method `getOptions` in the [Defaults](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Defaults.html) class.

With this method you can get all global configurations for a specific chart of [Chart.JS](http://www.chartjs.org/) and you have got all `set` and `get` methods to change or retrieve the global configuration items.

The chart type are defined into a enumeration, [ChartType](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/ChartType.html) but, by controllers, you can create your chart type, therefore the method will accept a [Type](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Type.html) object.

```java
// --------------------------------------
// GLOBAL options for specific chart type
// --------------------------------------
Defaults.get().getOptions(ChartType.LINE).setResponsive(false);
Defaults.get().getOptions(ChartType.LINE).setMaintainAspectRatio(true);

double circumference = Defaults.get().getOptions(ChartType.LINE).getCircumference();

Defaults.get().getOptions(ChartType.LINE).getElements().getPoint().setPointStyle(PointStyle.RECT);
```

## Scale type

To change the global scale for a specific scale type, **Charba** is providing the method `getScale` in the [Defaults](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Defaults.html) class, passing the [type](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/AxisType.html) of the scale.

With this method you can get all global configurations for a specific type of scale and you have got all `set` and `get` methods to change or retrieve the global configuration items.

```java
// --------------------------------------
// GLOBAL options for specific scale type
// --------------------------------------
Defaults.get().getScale(AxisType.LINEAR).setDisaply(false);
Defaults.get().getScale(AxisType.LINEAR).setBeginAtZero(true);
```

## Methods

The default singleton instance provides a set of helpful methods to invoke default behavior of [Chart.JS](http://www.chartjs.org/), helpful methods when a callback is implemented and you want to perform a normal behavior.


```java
public class MyLegendClickEventHandler implements LegendClickEventHandler {

	@Override
	public void onClick(LegendClickEvent event) {
		// invokes default click callback
		Defaults.get().invokeLegendOnClick(event);
	}
```

| Name | Description
| :- | :- 
| **generateLegend** | This method will provide the default HTML representation of a legend.
| **generateLabels** | This method will provide the default legend items of a chart.
| **invokeChartOnClick** | This method invokes the default `onClick` implementation on a chart, if there is.
| **invokeChartOnHover** | This method invokes the default `onHover` implementation on a chart, if there is.
| **invokeLegendOnClick** | This method invokes the default `onClick` implementation on a legend of a chart, if there is.
| **invokeLegendOnHover** | This method invokes the default `onHover` implementation on a legend of a chart, if there is.
| **invokeLegendOnLeave** | This method invokes the default `onLeave` implementation on a legend of a chart, if there is.
