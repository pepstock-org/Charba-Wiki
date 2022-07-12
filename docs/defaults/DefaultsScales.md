---
id: DefaultsScales
title: Defaults scales options
hide_title: true
sidebar_label: Scales
---

## Commons scales options

To change the global scale, **Charba** is providing the method `getScale` in the [defaults](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/Defaults.html).

With this method you can get all global configuration of [Chart.JS](http://www.chartjs.org/) for [scale](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/GlobalScale.html) (common one, not related to chart type) and you have got all `set` and `get` methods to change or retrieve the global configuration items.

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
| alignToPixels | boolean | `false` | Align pixel values to device pixels.
| animate | boolean | `true` | If `true`, animate scaling the chart from the center.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | rgba(255,255,255,0) - <span style={{backgroundColor: 'rgba(255,255,255,0)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The background color of scale area.
| beginAtZero | boolean | `false` | If `true`, scale will include 0 if it is not already included.
| bounds | [Bounds](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/Bounds.html) | Bounds.TICKS | Determines the scale bounds on time axis. 
| display | boolean - [Display](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/Display.html) | Display.TRUE | If `Display.TRUE`, the axis is shown.
| grace | int | 0 | Amount of pixels for added room in the scale range above and below data.
| graceAsPercentage | double | 0 | Sets a value, between 0 and 1, as percentage, for added room in the scale range above and below data.
| labels | [Labels](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/Labels.html) | empty `Labels` | The labels to display.
| max | double - String - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)  | See description | User defined maximum number for the scale, overrides maximum value from data.<br/>As value, you can set a:<br/>  - `double` for linear, logarithmic and radial scales, with `Double.MAX_VALUE` as default;<br/>  - `Date` for time and time series scales, with `null` as default;<br/>  - `String` for category scales, with `null` as default.
| min | double - String - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)  | See description | User defined minimum number for the scale, overrides minimum value from data.<br/>As value, you can set a:<br/>  - `double` for linear, logarithmic and radial scales, with `Double.MIN_VALUE` as default;<br/>  - `Date` for time and time series scales, with `null` as default;<br/>  - `String` for category scales, with `null` as default.
| offset | boolean | `false` | If `true`, extra space is added to the both edges and the axis is scaled to fit in the chart area. 
| offsetAfterAutoskip | boolean | `false` | If `true`, bar chart offsets are computed with auto skipped ticks.
| position | [Position](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/Position.html) | Position.TOP | Position of the axis.
| reverse | boolean | `false` | Reverses order of tick labels.
| singleStacked | boolean | `false` | If you might want to stack positive and negative values together.
| stack | String | Undefined.STRING | Sets the stack group. Axes at the same `position` with same `stack` are stacked.
| stacked | boolean | `false` | If the axis are stacked.
| stackWeight | double | 1 | Sets the weight of the scale in stack group. Used to determine the amount of allocated space for the scale within the group.
| startAngle | double | 0 | Starting angle to draw arcs for the first item in a data set. In degrees, 0 is at top.
| suggestedMax | double - String - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | See description | Adjustment used when calculating the maximum data value.<br/>As value, you can set a:<br/>  - `double` for linear, logarithmic and radial scales, with `Double.MAX_VALUE` as default;<br/>  - `Date` for time and time series scales, with `null` as default;<br/>  - `String` for category scales, with `null` as default.
| suggestedMin | double - String - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | See description | Adjustment used when calculating the minimum data value.<br/>As value, you can set a:<br/>  - `double` for linear, logarithmic and radial scales, with `Double.MIN_VALUE` as default;<br/>  - `Date` for time and time series scales, with `null` as default;<br/>  - `String` for category scales, with `null` as default.
| weight | double | 0 | The weight used to sort the axis. Higher weights are further away from the chart area. 

The [Bounds](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/Bounds.html) controls the scale boundary strategy (bypassed by min/max time options):

  * `Bounds.DATA`: make sure data are fully visible, labels outside are removed.
  * `Bounds.TICKS`: make sure ticks are fully visible, data outside are truncated. 

## Grid

The grid configuration defines options for the lines that are run perpendicular to the axis.

The [grid](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/Grid.html) configuration is nested in the scale configuration as following:

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getGrid().setCircular(true);

boolean circular = Defaults.get().getScale().getGrid().isCircular();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | If set, used as the color of the border line.
| borderDash | int[] | [] | Length and spacing of dashes on grid lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderWidth | int | 1 | If set, used as the width of the border line.
| circular | boolean | `false` | If `true`, grid lines are circular (on radar chart only).
| color | String - String[] - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html)[] | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line and so on.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| display | boolean | `true` | If `false`, do not display grid lines for this axis.
| drawBorder | boolean | `true` | If `true`, draw border at the edge between the axis and the chart area.
| drawOnChartArea | boolean | `true` | If `true`, draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn. 
| drawTicks | boolean | `true` | If `true`, draw lines beside the ticks in the axis area beside the chart.
| lineWidth | int - int[] | 1 | Stroke width of grid lines.
| offset | boolean | `false` | If `true`, grid lines will be shifted to be between labels. This is set to `true` in the bar chart by default.
| tickBorderDash | int[] | See description | Length and spacing of the tick mark line. If not set, defaults to the grid line `borderDash` value.
| tickBorderDashOffset | double - double[] | See description | Offset for the line dash of the tick mark. If unset, defaults to the grid line `borderDashOffset` value
| tickColor | String - String[] - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html)[] | See description | Color of the tick line. If unset, defaults to the grid line `color`.
| tickLength | int | 10 | Length in pixels that the grid lines will draw in the axis area. 
| tickWidth | int - int[] | See description | Width of the tick mark in pixels. If unset, defaults to the grid line `lineWidth`.
| z | int | 0 | z-index of gridline layer. Values less than or equals to 0 are drawn under datasets, greater than 0 on top.

## Ticks

The tick configuration defines options for the tick marks that are generated by the axis.

The [ticks](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/Ticks.html) configuration is nested in the scale configuration as following: 

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
| align | [TickAlign](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/TickAlign.html) | TickAlign.CENTER | The tick alignment along the axis.
| autoSkip | boolean | `true` | If `true`, automatically calculates how many labels that can be shown and hides labels accordingly. Labels will be rotated up to `maxRotation` before skipping any. Turn `autoSkip` off to show all labels no matter what.
| autoSkipPadding | int | 3 | The padding between the ticks on the horizontal axis when autoSkip is enabled.
| backdropColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | rgba(255,255,255,0.75) - <span style={{backgroundColor: 'rgba(255,255,255,0.75)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Color of label backdrops. 
| backdropPadding | [Padding](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/Padding.html) | 2 to all dimensions | The padding of label backdrop.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | Color of ticks.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| count | int | UnefinedValues.INTEGER | The number of ticks to generate. If specified, this overrides the automatic generation.
| crossAlign | [CrossAlign](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/CrossAlign.html) | CrossAlign.NEAR | The tick alignment perpendicular to the axis.
| display | boolean | `true` | If `true`, the tick marks are shown.
| font | [Font](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/Font.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | Font of ticks.<br/>See [Font](DefaultsCharts#font).
| includeBounds | boolean | `true` | If `true`, the defined `min` and `max` values should be presented as ticks even if they are not "nice".
| labelOffset | int | 0 | Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis).<br/><br/>Note: *This can cause labels at the edges to be cropped by the edge of the canvas*.
| maxRotation | int | 50 | The maximum rotation for tick labels when rotating to condense labels.<br/><br/>Note: *Rotation doesn't occur until necessary and only applicable to horizontal scales.*
| maxTicksLimit | int | 11 | Maximum number of ticks and gridlines to show.
| minRotation | int | 0 | The minimum rotation for tick labels.
| mirror | boolean | `false` | The flips tick labels around axis, displaying the labels inside the chart instead of outside.<br/><br/>Note: *Only applicable to vertical scales.*
| numberFormat | [NumberFormatOptions](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/intl/NumberFormatOptions.html) |  | The number format options used by the default label formatter.<br/>See [INTL number format](../intl/NumberFormat) documentation.
| padding | int | 0 | The padding between the tick label and the axis.
| precision | int | 0 | If defined and `stepSize` is not specified, the step size will be rounded to this many decimal places.
| sampleSize | int | Undefined.INTEGER | The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
| showLabelBackdrop | boolean | `true` | If `true`, draw a background behind the tick labels
| source | [TickSource](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/TickSource.html) | TickSource.AUTO | How ticks are generated on axis time.
| stepSize | double | `Double.MIN_VALUE` | User defined fixed step size for the scale.
| textStrokeColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | The color of the stroke around the text.
| textStrokeWidth | int | 0 | Stroke width around the text.
| z | int | 0 | z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.

### Major Tick

The major tick configuration enables for the major tick marks that are generated by the axis. A major tick will affect auto-skipping and major will be defined on ticks in the scriptable options context, by [ScaleTickItem](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/items/ScaleTickItem.html) class and [isMajor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/items/ScaleTickItem.html#isMajor--) method.

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
| :- | :- | :- | :-
| enabled | boolean | `false` | If `true`, major ticks marks are generated. 

## Title

The scale title configuration defines options for the title of the scale. Note that this only applies to cartesian axes.

The [scale title](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/ScaleTitle.html) configuration is nested in the scale configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getTitle().setColor(HtmlColor.RED);

IsColor color = Defaults.get().getScale().getTitle().getColor();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| align | [ScaleTitleAlign](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/ScaleTitleAlign.html) | ScaleLabelAlign.CENTER | Alignment of the scale label.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | Color of scale label.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| display | boolean | `false` | If `true`, the scale label is shown.
| font | [Font](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/Font.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | Font of scale label.<br/>See [Font](DefaultsCharts#font).
| padding | [Padding](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/Padding.html) | 4 to all dimensions | The padding of title. Only `top` and `bottom` are implemented.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
   
## AngleLines

The angle lines options are used to configure angled lines that are radiated from the center of the chart to the point labels.

The [angle lines](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/AngleLines.html) configuration is nested in the scale configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getAngleLines().setLineWidth(2);

int lineWidth = Defaults.get().getScale().getAngleLines().getLineWidth();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| borderDash | int[] | [] | Length and spacing of dashes on grid lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| color | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | Color of angled lines.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| display | boolean | `true` | If `true`, angle lines are shown.
| lineWidth | int | 1 | Width of angled lines.

## PointLabels

The point labels options are used to configure the point labels that are shown on the perimeter of the scale.

The [point labels](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/PointLabels.html) configuration is nested in the scale configuration as following 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getPointLabels().setColor(HtmlColor.RED);

IsColor color = Defaults.get().getScale().getPointLabels().getColor();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| backdropColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBackgroundColorAsString()` | Background color of the point label.
| backdropPadding | [Padding](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/Padding.html) | 2 to all dimensions | The padding of label backdrop.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| borderRadius | int - [BarBorderRadius](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/BarBorderRadius.html) | 0 | The border radius of the point label (in pixels).
| display | boolean | `true` | If `true`, point labels are shown.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | Color of point labels.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| font | [Font](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/Font.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | Font of point labels.<br/>See [Font](DefaultsCharts#font).
| padding | int | 5 | Padding between chart and point labels, in pixel.

## Time

The time options are used to configure the time axis.

The [time](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/Time.html) configuration is nested in the scale configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getTime().setUnit(TimeUnit.DAY);

TimeUnit unit = Defaults.get().getScale().getTime().getUnit();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| isoWeekday | [IsoWeekDay](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/IsoWeekDay.html) | IsoWeekDay.SUNDAY | The first day of the week.
| minUnit | [TimeUnit](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/TimeUnit.html) | TimeUnit.MILLISECOND | The minimum display format to be used for a time unit.
| parser | String | `null` | Interpreted as a custom format to be used to parse the date.
| round | [TimeUnit](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/TimeUnit.html) | `null` | If defined, dates will be rounded to the start of this unit.
| stepSize | int | 1 | The number of units between grid lines.
| tooltipFormat | String | `null` | Format string to use for the tooltip.
| unit | [TimeUnit](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/TimeUnit.html) | `null` | If defined, will force the unit to be a certain type.

For more details, have a look how to configure a [cartesian time axis](../axes/CartesianTimeAxes).

### Display formats

The display formats are used to configure how different time units are formed in the strings for the axis tick marks.

The [display formats](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/DisplayFormats.html) configuration is nested in the scale configuration as following: 

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

The [adapters options](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/Adapters.html) configuration is nested in the scale configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().getAdapters().setLocale(CLocale.ITALY);

CLocale locale = Defaults.get().getScale().getAdapters().getLocale();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| locale | [CLocale](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/intl/CLocale.html) | `null` | Using locale specifying the language to use generating or interpreting strings.
| zone | [TimeZone](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/intl/enums/TimeZone.html) | `null` | Implementation recognizes the time zone names of the IANA time zone database.
| outputCalendar | [Calendar](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/intl/enums/Calendar.html) | `null` | The calendar type to use.
| numberingSystem | [NumberingSystem](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/intl/enums/NumberingSystem.html) | `null` | The numbering system to use.

For more details, have a look how to configure a [Luxon](../DateAdapters#Luxon) date adapters and the [locale](../intl/Locale) documentation.
