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
| animate | boolean | `true` | if `true`, animate scaling the chart from the center.
| beginAtZero | boolean | `false` | if `true`, scale will include 0 if it is not already included.
| bounds | [ScaleBounds](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ScaleBounds.html) | ScaleBounds.TICKS | Determines the scale bounds on time axis. 
| display | boolean | `true` | If `true`, the axis is shown.
| max | double - String - java.util.Date  | See description | User defined maximum number for the scale, overrides maximum value from data.<br/>As value, you can set a:<br/>  - `double` for linear, logarithmic and radial scales, with `Double.MAX_VALUE` as default;<br/>  - `Date` for time and time series scales, with `null` as default;<br/>  - `String` for category scales, with `null` as default.
| min | double - String - java.util.Date  | See description | User defined minimum number for the scale, overrides minimum value from data.<br/>As value, you can set a:<br/>  - `double` for linear, logarithmic and radial scales, with `Double.MIN_VALUE` as default;<br/>  - `Date` for time and time series scales, with `null` as default;<br/>  - `String` for category scales, with `null` as default.
| offset | boolean | `false` | If `true`, extra space is added to the both edges and the axis is scaled to fit in the chart area. 
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.TOP |  Position of the axis in the chart. 
| reverse | boolean | `false` | Reverses order of tick labels.
| stacked | boolean | `false` | if the axis are stacked.
| suggestedMax | double - String - java.util.Date | See description | Adjustment used when calculating the maximum data value.<br/>As value, you can set a:<br/>  - `double` for linear, logarithmic and radial scales, with `Double.MAX_VALUE` as default;<br/>  - `Date` for time and time series scales, with `null` as default;<br/>  - `String` for category scales, with `null` as default.
| suggestedMin | double - String - java.util.Date | See description | Adjustment used when calculating the minimum data value.<br/>As value, you can set a:<br/>  - `double` for linear, logarithmic and radial scales, with `Double.MIN_VALUE` as default;<br/>  - `Date` for time and time series scales, with `null` as default;<br/>  - `String` for category scales, with `null` as default.
| weight | int | 0 | The weight used to sort the axis. Higher weights are further away from the chart area. 

## GridLines

The grid line configuration defines options for the grid lines that are run perpendicular to the axis.

The [grid lines](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/GridLines.html) configuration is nested in the scale configuration as following:

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
| tickBorderDash | int[] | See description | Length and spacing of the tick mark line. If not set, defaults to the grid line `borderDash` value.
| tickBorderDashOffset | double - double[] | See description | Offset for the line dash of the tick mark. If unset, defaults to the grid line `borderDashOffset` value
| tickColor | String - String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | See description | Color of the tick line. If unset, defaults to the grid line `color`.
| tickLength | int | 10 | Length in pixels that the grid lines will draw in the axis area. 
| tickWidth | int - int[] | See description | Width of the tick mark in pixels. If unset, defaults to the grid line `lineWidth`.
| z | int | 0 | z-index of gridline layer. Values less than or equals to 0 are drawn under datasets, greater than 0 on top.

## Ticks

The tick configuration defines options for the tick marks that are generated by the axis.

The [ticks](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Ticks.html) configuration is nested in the scale configuration as following: 

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

### Major Tick

The major tick configuration enables for the major tick marks that are generated by the axis. A major tick will affect auto-skipping and major will be defined on ticks in the scriptable options context, by [ScaleTickItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ScaleTickItem.html) class and [isMajor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ScaleTickItem.html#isMajor--) method.

The major ticks configuration is nested in the ticks configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getTicks().getMajor().setEnabled(true);

boolean enabled = Defaults.get().getScale().getTicks().getMajor().isEnabled();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| enabled | boolean | `false` | If `true`, major ticks marks are generated. 

## ScaleLabel

The scale label configuration defines options for the scale title. Note that this only applies to cartesian axes.

The [scale label](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/ScaleLabel.html) configuration is nested in the scale configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getScaleLabel().setLabelString("My scale label");

String labelString = Defaults.get().getScale().getScaleLabel().getLabelString();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| align | [ScaleLabelAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ScaleLabelAlign.html) | ScaleLabelAlign.CENTER | Alignment of the scale label.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | Color of scale label.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| display | boolean | `false` | If `true`, the scale label is shown.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | Font of scale label.<br/>See [Font](DefaultsCharts#font).
| labelString | String | '' | The text for the title.

### Padding

Padding to apply around scale labels. Only `top` and `bottom` are implemented.
The [padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/ScaleLabelPadding.html) configuration is nested in the scale configuration as following:

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
// set the same padding size to all directions 
Defaults.get().getScale().getScaleLabel().getPadding().set(5);

int top = Defaults.get().getScale().getScaleLabel().getPadding().getTop();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| bottom | int | 4 | the padding bottom in pixel.
| left | int | 4 | the padding left in pixel.
| right | int | 4 | the padding right in pixel.
| top | int | 4 | the padding top in pixel.   
   
## AngleLines

The angle lines options are used to configure angled lines that are radiated from the center of the chart to the point labels.

The [angle lines](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/AngleLines.html) configuration is nested in the scale configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getAngleLines().setLineWidth(2);

int lineWidth = Defaults.get().getScale().getAngleLines().getLineWidth();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| borderDash | int[] | [] | Length and spacing of dashes on grid lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | Color of angled lines.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| display | boolean | `true` | if `true`, angle lines are shown.
| lineWidth | int | 1 | Width of angled lines.

## PointLabels

The point labels options are used to configure the point labels that are shown on the perimeter of the scale.

The [point labels](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/PointLabels.html) configuration is nested in the scale configuration as following 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getPointLabels().setColor(HtmlColor.RED);

IsColor color = Defaults.get().getScale().getPointLabels().getColor();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| display | boolean | `true` | if `true`, point labels are shown.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | Color of point labels.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | Font of point labels.<br/>See [Font](DefaultsCharts#font).

## Time

The time options are used to configure the time axis.

The [time](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Time.html) configuration is nested in the scale configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getTime().setUnit(TimeUnit.DAY);

TimeUnit unit = Defaults.get().getScale().getTime().getUnit();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| isoWeekday | [IsoWeekDay](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsoWeekDay.html) | IsoWeekDay.SUNDAY | The first day of the week.
| minUnit | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | TimeUnit.MILLISECOND | The minimum display format to be used for a time unit.
| parser | String | `null` | Interpreted as a custom format to be used to parse the date.
| round | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | `null` | If defined, dates will be rounded to the start of this unit.
| stepSize | int | 1 | The number of units between grid lines.
| tooltipFormat | String | `null` | Format string to use for the tooltip.
| unit | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | `null` | If defined, will force the unit to be a certain type.

For more details, have a look how to configure a [cartesian time axis](CartesianTimeAxes).

### Display formats

The display formats are used to configure how different time units are formed in the strings for the axis tick marks.

The [display formats](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/DisplayFormats.html) configuration is nested in the scale configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
// changes the default format (of date adapter) of a time unit
Defaults.get().getScale().getTime().getDisplayFormats().setDisplayFormat(TimeUnit.HOUR, "hh:MM:00");

String displayFormat = Defaults.get().getScale().getTime().getDisplayFormats().getDisplayFormat(TimeUnit.HOUR);
```

## Adapters

The adapters options are used to configure the adapter for external date library if that adapter needs or supports options. The options are leveraging in [INTL](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) framework

The [adapters options](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Adapters.html) configuration is nested in the scale configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getAdapters().setLocale(CLocale.ITALY);

CLocale locale = Defaults.get().getScale().getAdapters().getLocale();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| locale | [CLocale](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/CLocale.html) | `null` | Using locale specifying the language to use generating or interpreting strings.
| zone | [TimeZone](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/enums/TimeZone.html) | `null` | Implementation recognizes the time zone names of the IANA time zone database.
| outputCalendar | [Calendar](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/enums/Calendar.html) | `null` | The calendar type to use.
| numberingSystem | [NumberingSystem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/enums/NumberingSystem.html) | `null` | The numbering system to use.

For more details, have a look how to configure a [Luxon](DateAdapters#Luxon) date adapters and the [locale FIXME](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) documentation.
