---
id: CartesianTimeSeriesAxes
title: Cartesian time series
hide_title: true
sidebar_label: Time series
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Cartesian Time Series Axes

The [time series axis](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/CartesianTimeSeriesAxis.html) is used to display times and dates. When building its [ticks](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/CartesianTimeTick.html), it will automatically calculate the most comfortable unit base on the size of the scale.

:::info
The time series axis extends from the time axis and supports all the same options. However, for the time series scale, each data point is spread equidistant.
:::

<img src={useBaseUrl('/img/cartesianTime.png')} />

Here are some example how to create category axes:

```java
// creates a time series axis with default scale id "x" and default kind "x" 
CartesianTimeSeriesAxis axis1 = new CartesianTimeSeriesAxis(chart);

// creates a time series axis with scale id "my-axis" and default kind "x" 
CartesianTimeSeriesAxis axis2 = new CartesianTimeSeriesAxis(chart, "my-axis");

// creates a time series axis with scale id "my-axis" and default kind "x" 
CartesianTimeSeriesAxis axis3 = new CartesianTimeSeriesAxis(chart, ScaleId.create("my-axis"));

// creates a time series axis with default scale id "x" and custom kind "x" 
CartesianTimeSeriesAxis axis4 = new CartesianTimeSeriesAxis(chart, AxisKind.X);

// creates a time series axis with scale id "my-axis" and custom kind "x" 
CartesianTimeSeriesAxis axis5 = new CartesianTimeSeriesAxis(chart, "my-axis", AxisKind.X;

// creates a time series axis with scale id "my-axis" and custom kind "x" 
ScaleId myAxis = ScaleId.create("my-axis");
CartesianTimeSeriesAxis axis6 = new CartesianTimeSeriesAxis(chart, myAxis, AxisKind.X);

// adds axes to chart configuration
chart.getOptions().setAxes(axis1, ...);
```

## Datasets

To use time series axis, you must use [DataPoint](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/DataPoint.html) in order to set the date object in the axis. 

The `x` axis data points can be specified via the **setX** method when using the time axis.

Here is the example:

```java
// creates a dataset
BarDataset dataset = chart.newDataset();
// creates a datapoint      
DataPoint dp1 = new DataPoint();
dp1.setY(number_value1);
dp1.setX(new Date(time1));
// creates a datapoint
DataPoint dp2 = new DataPoint();
dp2.setY(number_value1);
dp2.setX(new Date(time2));
// sets the datapoints to the dataset
dataset.setDataPoints(dp1, dp2);
// sets the datasets to the chart
chart.getData().setDatasets(dataset);
```

## Options

The following options are provided by the time series axis.

The time series axes are providing the capability to set and get the options, by the **set** and **get** methods, as following:

```java
// creates a time series axis 
CartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);
// sets and gets the reverse value
axis.setReverse(true);

boolean reverse = axis.isReverse();
```

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| alignToPixels | boolean | [Yes](#scriptable) | Align pixel values to device pixels.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | The background color of scale area.
| bounds | [Bounds](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/Bounds.html) | [Yes](#scriptable) | Determines the scale bounds on axis.
| display | boolean - [Display](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/Display.html) | [Yes](#scriptable) | If `Display.TRUE`, the axis is shown.
| max | [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | [Yes](#scriptable) | User defined maximum date for the scale, overrides maximum value from data.
| min | [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | [Yes](#scriptable) |  User defined minimum date for the scale, overrides minimum value from data
| offset | boolean | [Yes](#scriptable) | If `true`, extra space is added to the both edges and the axis is scaled to fit in the chart area. 
| offsetAfterAutoskip | boolean | - | If `true`, bar chart offsets are computed with auto skipped ticks.
| position | [AxisPosition](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/AxisPosition.html) | [Yes](#scriptable) | Position of the axis.
| reverse | boolean | [Yes](#scriptable) | Reverses order of tick labels.
| singleStacked | boolean | - | If you might want to stack positive and negative values together.
| stack | String | [Yes](#scriptable) | Sets the stack group. Axes at the same `position` with same `stack` are stacked.
| stacked | boolean | [Yes](#scriptable) | If the axis are stacked.
| stackWeight | double | [Yes](#scriptable) | Sets the weight of the scale in stack group. Used to determine the amount of allocated space for the scale within the group.
| weight | double | [Yes](#scriptable) | The weight used to sort the axis. Higher weights are further away from the chart area. 

### Scriptable

Scriptable options at scale level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

All scriptable options callbacks will get a [ScaleContext](../configuration/ScriptableOptions#scale-context) instance.

```java
// creates a category axis 
CartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);
// sets the option by a callback 
axis.setBackgroundColor(new ColorCallback<ScaleContext>(){

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
| alignToPixels | [AlignToPixelsCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/AlignToPixelsCallback.html) | boolean
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html)
| bounds | [BoundsCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BoundsCallback.html) | [Bounds](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/Bounds.html)
| display | [DisplayCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/DisplayCallback.html) | boolean - [Display](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/Display.html)
| max | [MinMaxCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/MinMaxCallback.html)&lt;Date&gt; | [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| min | [MinMaxCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/MinMaxCallback.html)&lt;Date&gt; | [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| offset | [ScaleOffsetCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ScaleOffsetCallback.html) | boolean
| position | [ScalePositionCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ScalePositionCallback.html) | [AxisPosition](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/AxisPosition.html)
| reverse | [ReverseCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ReverseCallback.html) | boolean
| stack | [StackCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/StackCallback.html) | String
| stacked | [StackedCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/StackedCallback.html) | boolean
| stackWeight | [ScaleWeightCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/StackedCallback.html) | double
| weight | [ScaleWeightCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ScaleWeightCallback.html) | double 

## Time 

The time series axis provides a [Time](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/Time.html) object to configure how times must be managed on axis. It provides the **set** and **get** methods as following:

```java
// creates a time series axis 
CartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);
// sets and gets the unit value
axis.getTime().setUnit(TimeUnit.DAY);
// sets and gets the tooltip format value
axis.getTime().setTooltipFormat(TimeUnit.day.getDefaultFormat());

TimeUnit unit = axis.getTime().getUnit();
```

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :-
| isoWeekday | [IsoWeekDay](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/IsoWeekDay.html) | The first day of the week.
| minUnit | [TimeUnit](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/TimeUnit.html) | The minimum display format to be used for a time unit.
| parser | String | `null` | Interpreted as a custom format to be used to parse the date.
| round | [TimeUnit](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/TimeUnit.html) | If defined, dates will be rounded to the start of this unit.
| stepSize | int | The number of units between grid lines.
| tooltipFormat | String | Format string to use for the tooltip.
| unit | [TimeUnit](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/TimeUnit.html) | If defined, will force the unit to be a certain type.

The following time measurements are supported and are mapped in the [TimeUnit](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/TimeUnit.html) enumeration, to force a certain unit:

 * millisecond
 * second
 * minute
 * hour
 * day
 * week
 * month
 * quarter
 * year


The [Time](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/Time.html) object is also providing another object to set the display formats, based on [TimeUnit](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/TimeUnit.html). 

The [DisplayFormats](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/DisplayFormats.html) can be used as following:

```java
// creates a time series axis 
CartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);
// sets and gets the unit value
axis.getTime().setUnit(TimeUnit.DAY);
// sets display format for the unit
axis.getTime().getDisplayFormats().setDisplayFormat(TimeUnit.DAY, "MMM D h:mm a");
```

This method can override the defaults. To see the defaults, see the [LUXON date adapter](../DateAdapters).

## Adapters

The adapters options are used to configure the adapter for [LUXON date library](../DateAdapters).

The [adapters options](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/Adapters.html) configuration is nested in the scale configuration as following: 

```java
// creates a time series axis 
CartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);
// sets and gets the locale to date adapter options
axis.getAdapters().getDate().setLocale(CLocale.US);

CLocale locale = axis.getAdapters().getDate().getLocale();
```

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :- 
| locale | [CLocale](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/intl/CLocale.html) | Using locale specifying the language to use generating or interpreting strings.
| zone | [TimeZone](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/intl/enums/TimeZone.html) | Implementation recognizes the time zone names of the IANA time zone database.
| outputCalendar | [Calendar](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/intl/enums/Calendar.html) | The calendar type to use.
| numberingSystem | [NumberingSystem](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/intl/enums/NumberingSystem.html) | The numbering system to use.

For more details, have a look how to configure a [Luxon](../DateAdapters) date adapters.

## Ticks

The time series axis provides the following options for configuring [tick marks](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/CartesianTimeTick.html).

```java
// creates a time series axis 
CartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);
// sets and gets the color to ticks
axis.getTicks().setColor(HtmlColor.RED);

IsColor color = axis.gteTicks().getColor();
```

<img src={useBaseUrl('/img/timeTicks.png')} />

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| align | [TickAlign](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/TickAlign.html) | - | The tick alignment along the axis.
| autoSkip | boolean | - | If `true`, automatically calculates how many labels that can be shown and hides labels accordingly. Labels will be rotated up to `maxRotation` before skipping any. Turn `autoSkip` off to show all labels no matter what.
| autoSkipPadding | int | - | The padding between the ticks on the horizontal axis when autoSkip is enabled.
| backdropColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#ticks-scriptable-options) | Color of label backdrops.
| backdropPadding | [Padding](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/Padding.html) | - | The padding of tick backdrop.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#ticks-scriptable-options) | Color of ticks.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| crossAlign | [CrossAlign](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/CrossAlign.html) | CrossAlign.NEAR | The tick alignment perpendicular to the axis.
| display | boolean | - | If `true`, the tick marks are shown.
| font | [IsFont](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/IsFont.html) | [Yes](#ticks-scriptable-options) | Font of ticks.<br/>See [Font](../defaults/DefaultsCharts#font).
| includeBounds | boolean | - | If `true`, the defined `min` and `max` values should be presented as ticks even if they are not "nice".
| labelOffset | int | - | Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis).<br/><br/>Note: *This can cause labels at the edges to be cropped by the edge of the canvas*.
| maxRotation | int | - | The maximum rotation for tick labels when rotating to condense labels.<br/><br/>Note: *Rotation doesn't occur until necessary and only applicable to horizontal scales.*
| minRotation | int | - | The minimum rotation for tick labels.
| mirror | boolean | - | The flips tick labels around axis, displaying the labels inside the chart instead of outside.<br/><br/>Note: *Only applicable to vertical scales.*
| padding | int | - | The padding between the tick label and the axis.
| sampleSize | int | - | The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
| showLabelBackdrop | boolean | [Yes](#ticks-scriptable-options) | If `true`, draw a background behind the tick labels
| source | [TickSource](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/TickSource.html) | - | How ticks are generated on axis time.
| textStrokeColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#ticks-scriptable-options) | The color of the stroke around the text.
| textStrokeWidth | int |[Yes](#ticks-scriptable-options) | Stroke width around the text.
| z | int | - | z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.

The further customization of ticks, a [callback](#callback) is provided.

### Ticks scriptable options

Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

All scriptable options callbacks will get a [ScaleContext](../configuration/ScriptableOptions#scale-context) instance.

```java
// creates a time series axis 
CartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);
// sets the option by a callback 
axis.getTicks().setColor(new ColorCallback<ScaleContext>(){

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
| backdropColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html)
| color | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html)
| font | [FontCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/FontCallback.html)&lt;ScaleContext&gt; | [FontItem](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/items/FontItem.html)
| showLabelBackdrop | [ShowLabelBackdropCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ShowLabelBackdropCallback.html) | boolean
| textStrokeColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;ScaleContext&gt; | int

### Callback

It is also common to want to change the tick marks to include information about the data type. 

To apply a custom callback, you can set a [TimeTickCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/TimeTickCallback.html) instance to the axis options, as following:

```java
axis.getTicks().setCallback(new TimeTickCallback(){

	private final DateTimeFormat dateTimeFormat = new DateTimeFormat(CLocale.GERMANY);

   /**
	 * Changes the tick marks to include information about the data type.
	 * 
	 * @param axis axis instance where this callback as been defined
	 * @param value value of tick as date
	 * @param label label of tick, passed by CHART.JS formatting the date by the selected {@link TimeUnit} and its display
	 *            format.
	 * @param index index of tick
	 * @param values list of all tick values
	 * @return the tick to apply or if the callback returns null the associated grid line will be hidden.
	 */
	public String onCallback(Axis axis, Date value, String label, int index, List<TimeTickItem> values){
		return dateTimeFormat.format(value);
	}
         
});
```

The callback is providing a specific list of items ([TimeTickItem](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/items/TimeTickItem.html)) which maps [Chart.JS](http://www.chartjs.org/) object with the values (as date) and major booleans.

See [INTL date time format](../intl/DateTimeFormat) documentation if you want to use a date formatter, provided out-of-the-box. 

The callback can return a string (for single line) or a list of strings (for multiple lines).
