---
id: CartesianTimeAxes
title: Cartesian time
hide_title: true
sidebar_label: Time
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Cartesian Time Axes

The [time axis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianTimeAxis.html) is used to display times and dates. When building its [ticks](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianTimeTick.html), it will automatically calculate the most comfortable unit base on the size of the scale.

<img src={useBaseUrl('/img/cartesianTime.png')} />

Here are some example how to create category axes:

```java
// creates a time axis with default scale id "x" and default kind "x" 
CartesianTimeAxis axis1 = new CartesianTimeAxis(chart);

// creates a time axis with scale id "my-axis" and default kind "x" 
CartesianTimeAxis axis2 = new CartesianTimeAxis(chart, "my-axis");

// creates a time axis with scale id "my-axis" and default kind "x" 
CartesianTimeAxis axis3 = new CartesianTimeAxis(chart, IsScaleId.create("my-axis"));

// creates a time axis with default scale id "x" and custom kind "x" 
CartesianTimeAxis axis4 = new CartesianTimeAxis(chart, AxisKind.X);

// creates a time axis with scale id "my-axis" and custom kind "x" 
CartesianTimeAxis axis5 = new CartesianTimeAxis(chart, "my-axis", AxisKind.X;

// creates a time axis with scale id "my-axis" and custom kind "x" 
IsScaleId myAxis = IsScaleId.create("my-axis");
CartesianTimeAxis axis6 = new CartesianTimeAxis(chart, myAxis, AxisKind.X);

// adds axes to chart configuration
chart.getOptions().setAxes(axis1, ...);
```

## Datasets

To use time axis, you must use [DataPoint](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/DataPoint.html) in order to set the date object in the axis. 

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

The following options are provided by the time axis.

The time axes are providing the capability to set and get the options, by the **set** and **get** methods, as following:

```java
// creates a time axis 
CartesianTimeAxis axis = new CartesianTimeAxis(chart);
// sets and gets the reverse value
axis.setReverse(true);

boolean reverse = axis.isReverse();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| bounds | [Bounds](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Bounds.html) | Determines the scale bounds on axis.
| display | boolean - [Display](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Display.html) | If `Display.TRUE`, the axis is shown.
| max | java.util.Date | User defined maximum date for the scale, overrides maximum value from data.
| min | java.util.Date |  User defined minimum date for the scale, overrides minimum value from data
| offset | boolean | If `true`, extra space is added to the both edges and the axis is scaled to fit in the chart area. 
| position | [AxisPosition](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/AxisPosition.html) | Position of the axis.
| reverse | boolean | Reverses order of tick labels.
| stacked | boolean | If the axis are stacked.
| weight | int | The weight used to sort the axis. Higher weights are further away from the chart area. 

## Time 

The time axis provides a [Time](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Time.html) object to configure how times must be managed on axis. It provides the **set** and **get** methods as following:

```java
// creates a time axis 
CartesianTimeAxis axis = new CartesianTimeAxis(chart);
// sets and gets the unit value
axis.getTime().setUnit(TimeUnit.DAY);
// sets and gets the tooltip format value
axis.getTime().setTooltipFormat(TimeUnit.day.getDefaultFormat());

TimeUnit unit = axis.getTime().getUnit();
```

The following are the attributes that you can set:

| Name | Type | Description
| -----| ---- | -----------
| isoWeekday | [IsoWeekDay](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsoWeekDay.html) | The first day of the week.
| minUnit | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | The minimum display format to be used for a time unit.
| parser | String | `null` | Interpreted as a custom format to be used to parse the date.
| round | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | If defined, dates will be rounded to the start of this unit.
| stepSize | int | The number of units between grid lines.
| tooltipFormat | String | Format string to use for the tooltip.
| unit | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | If defined, will force the unit to be a certain type.

The following time measurements are supported and are mapped in the [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) enumeration, to force a certain unit:

 * millisecond
 * second
 * minute
 * hour
 * day
 * week
 * month
 * quarter
 * year


The [Time](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Time.html) object is also providing another object to set the display formats, based on [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html). 

The [DisplayFormats](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/DisplayFormats.html) can be used as following:

```java
// creates a time axis 
CartesianTimeAxis axis = new CartesianTimeAxis(chart);
// sets and gets the unit value
axis.getTime().setUnit(TimeUnit.DAY);
// sets display format for the unit
axis.getTime().getDisplayFormats().setDisplayFormat(TimeUnit.DAY, "MMM D h:mm a");
```

This method can override the defaults. To see the defaults, see the [LUXON date adapter](DateAdaptersFIXME).

## Adapters

The adapters options are used to configure the adapter for [LUXON date library](DateAdaptersFIXME).

The [adapters options](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Adapters.html) configuration is nested in the scale configuration as following: 

```java
// creates a time axis 
CartesianTimeAxis axis = new CartesianTimeAxis(chart);
// sets and gets the locale to date adapter options
axis.getAdapters().getDate().setLocale(CLocale.US);

CLocale locale = axis.getAdapters().getDate().getLocale();
```

The following are the attributes that you can set:

| Name | Type | Description
| -----| ---- | -----------
| locale | [CLocale](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/CLocale.html) | Using locale specifying the language to use generating or interpreting strings.
| zone | [TimeZone](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/enums/TimeZone.html) | Implementation recognizes the time zone names of the IANA time zone database.
| outputCalendar | [Calendar](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/enums/Calendar.html) | The calendar type to use.
| numberingSystem | [NumberingSystem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/enums/NumberingSystem.html) | The numbering system to use.

For more details, have a look how to configure a [Luxon](DateAdapters#FIXME) date adapters.

## Ticks

The time axis provides the following options for configuring [tick marks](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianTimeTick.html).

```java
// creates a time axis 
CartesianTimeAxis axis = new CartesianTimeAxis(chart);
// sets and gets the color to ticks
axis.getTicks().setColor(HtmlColor.RED);

IsColor color = axis.gteTicks().getColor();
```

<img src={useBaseUrl('/img/timeTicks.png')} />

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| align | [ElementAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ElementAlign.html) | - | The tick alignment along the axis.
| autoSkip | boolean | - | If `true`, automatically calculates how many labels that can be shown and hides labels accordingly. Labels will be rotated up to `maxRotation` before skipping any. Turn `autoSkip` off to show all labels no matter what.
| autoSkipPadding | int | - | The padding between the ticks on the horizontal axis when autoSkip is enabled.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Color of ticks.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| crossAlign | [CrossAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CrossAlign.html) | CrossAlign.NEAR | The tick alignment perpendicular to the axis.
| display | boolean | - | If `true`, the tick marks are shown.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | [Yes](#scriptable) | Font of ticks.<br/>See [Font](DefaultsCharts#font).
| labelOffset | int | - | Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis).<br/><br/>Note: *This can cause labels at the edges to be cropped by the edge of the canvas*.
| maxRotation | int | - | The maximum rotation for tick labels when rotating to condense labels.<br/><br/>Note: *Rotation doesn't occur until necessary and only applicable to horizontal scales.*
| minRotation | int | - | The minimum rotation for tick labels.
| mirror | boolean | - | The flips tick labels around axis, displaying the labels inside the chart instead of outside.<br/><br/>Note: *Only applicable to vertical scales.*
| numberFormat | [NumberFormatOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/NumberFormatOptions.html) | - | The number format options used by the default label formatter. See FIXME
| padding | int | - | The padding between the tick label and the axis.
| sampleSize | int | - | The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
| source | [TickSource](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TickSource.html) | - | How ticks are generated on axis time.
| textStrokeColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | The color of the stroke around the text.
| textStrokeWidth | int |[Yes](#scriptable) | Stroke width around the text.
| z | int | - | z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.

The `source` [object](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TickSource.html) controls the ticks generation:

* `AUTO`: generates "optimal" ticks based on scale size and time options.
* `DATA`: generates ticks from data (including labels from data `{t|x|y}` objects)
* `LABELS`: generates ticks from user given `labels` values of dataset ONLY

Here is an example:

```java
// creates a time axis 
CartesianTimeAxis axis = new CartesianTimeAxis(chart);
// sets and gets the source to the ticks
axis.getTicks().setSource(TickSource.DATA);
```

The further customization of ticks, a [callback](#callback) is provided.


### Scriptable

Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

```java
// creates the axis for chart
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets the option by a callback 
axis.getTicks().setColor(new ScaleColorCallback() {

   @Override
   public IsColor invoke(Axis axis, ScaleScriptableContext context) {
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Possible returned types
| :- | :- | :- 
| color | [ScaleColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| font | [ScaleFontCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleFontCallback.html) | [FontOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/FontOptions.html)
| textStrokeColor | [TextStrokeColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TextStrokeColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [TextStrokeWidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TextStrokeWidthCallback.html) | int

### Callback

It is also common to want to change the tick marks to include information about the data type. 

To apply a custom callback, you can set a [TimeTickCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TimeTickCallback.html) instance to the axis options, as following:

```java
axis.getTicks().setCallback(new TimeTickCallback() {

   /**
	 * Changes the tick marks to include information about the data type.
	 * 
	 * @param axis axis instance where this callback as been defined
	 * @param value value of tick as date
	 * @param label label of tick, passed by CHART.JS formatting the date by the selected {@link TimeUnit} and its display
	 *            format.
	 * @param index index of tick
	 * @param values list of all tick values
	 * @return the tick to apply or if the callback returns <code>null</code> the associated grid line will be hidden.
	 */
	public String onCallback(Axis axis, Date value, String label, int index, List<TimeTickItem> values){
		return FORMAT.format(value);
	}
         
});
```

The callback is providing a specific list of items ([TimeTickItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/TimeTickItem.html)) which maps CHART.JS object with the values (as date) and major booleans.