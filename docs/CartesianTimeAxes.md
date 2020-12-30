---
id: CartesianTimeAxes
title: Cartesian time
hide_title: true
sidebar_label: Cartesian time
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Cartesian Time Axes

The [time axis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianTimeAxis.html) is used to display times and dates. When building its [ticks](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianTimeTick.html), it will automatically calculate the most comfortable unit base on the size of the scale.

<img src={useBaseUrl('/img/timeScale.png')} />

## Datasets

To use time series, you must use [DataPoint](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/DataPoint.html) in order to set the date object into axis. 

The x-axis data points may additionally be specified via the **setX** method when using the time axis.

Here is the example:

```java
BarDataset dataset = chart.newDataset();
dataset.setLabel("dataset 1");

...
      
DataPoint dp1 = new DataPoint();
dp1.setY(number_value1);
dp1.setX(new Date(time1));

DataPoint dp2 = new DataPoint();
dp2.setY(number_value1);
dp2.setX(new Date(time2));

dataset.setDataPoints(dp1, dp2);

...

chart.getData().setDatasets(dataset);
```

## Options

The following options are provided by the time axis. You may also set options provided by the [common cartesian axis](CartesianAxes).

The time axes are providing the capability to set and get the options, by the **set** and **get** methods, as following:

```java
CartesianTimeAxis axis = new CartesianTimeAxis(chart);
axis.setDistribution(ScaleDistribution.SERIES);
```

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| distribution | [ScaleDistribution](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ScaleDistribution.html) | ScaleDistribution.LINEAR | How data is plotted. 
| bounds | [ScaleBounds](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ScaleBounds.html) | ScaleBounds.DATA | Determines the scale bounds. 

The `distribution` [object](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ScaleDistribution.html) controls the data distribution along the scale:

  * `LINEAR`: data are spread according to their time (distances can vary)
  * `SERIES`: data are spread at the same distance from each other

The `bounds` [property](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ScaleBounds.html) controls the scale boundary strategy (bypassed by min/max time options)

  * `DATA`: make sure data are fully visible, labels outside are removed
  * `TICKS`: make sure ticks are fully visible, data outside are truncated  

## Time 

The time axis provides a [Time](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Time.html) object to configure how times must be managed on axis. It provides the **set** and **get** methods as following:

```java
CartesianTimeAxis axis = new CartesianTimeAxis(chart);

axis.getTime().setUnit(TimeUnit.DAY);
axis.getTime().setTooltipFormat(TimeUnit.day.getDefaultFormat());
```

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| isoWeekday | boolean | `false` | If `true` and the unit is set to 'week', then the first day of the week will be Monday. Otherwise, it will be Sunday.
| parser | String | `null` | interpreted as a custom format to be used to parse the date
| round | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | `null` | If defined, dates will be rounded to the start of this unit.
| tooltipFormat | String | `null` | Format string to use for the tooltip.
| unit | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | `null` | If defined, will force the unit to be a certain type.
| stepSize | int | 1 | The number of units between grid lines.
| minUnit | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | TimeUnit.MILLISECOND | The minimum display format to be used for a time unit.

The following time measurements are supported and are mapped into [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) enumeration, to force a certain unit:

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
CartesianTimeAxis axis = new CartesianTimeAxis(chart);

axis.getTime().setUnit(TimeUnit.DAY);
axis.getTime().getDisplayFormats().setDisplayFormat(TimeUnit.DAY, "MMM D h:mm a");
```

This method can override the defaults. To see the defaults, see the [date adapter](DateAdapters) implementation because every adapter can have own syntax and defaults.

## Adapters

The adapters options are used to configure the adapter for external date library if that adapter needs or supports options.

The [adapters options](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Adapters.html) configuration is nested into the scale configuration as following: 

```java
CartesianTimeAxis axis = new CartesianTimeAxis(chart);

// LUXON options
LuxonOptions options = new LuxonOptions();
options.setLocale("us");

axis.getAdapters().setDate(options);
```

**PAY ATTENTION** that only [Luxon](DateAdapters#Luxon) date adapters can be configured with additional options.

For more details, have a look how to configure a [Luxon](DateAdapters#Luxon) date adapters.

## Ticks

The time axis provides the following options for configuring tick marks. These options extend the [common tick configuration](CartesianAxes#tick-configuration).

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| max | java.util.Date | `null` | If defined, this will override the data maximum
| min | java.util.Date | `null` | If defined, this will override the data minimum
| source | [TickSource](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TickSource.html) | TickSource.AUTO | How ticks are generated on axis time

The `source` [object](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TickSource.html) controls the ticks generation

* `AUTO`: generates "optimal" ticks based on scale size and time options.
* `DATA`: generates ticks from data (including labels from data `{t|x|y}` objects)
* `LABELS`: generates ticks from user given `labels` values of dataset ONLY

Here is an example:

```java
CartesianTimeAxis axis = new CartesianTimeAxis(chart);

axis.getTicks().setSource(TickSource.DATA);
```

The further customization of ticks, a callback is provided.

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

### BuildTicks callback

This callback can be used to change parameters in the scale during ticks building. To implement this callback, you must implement [this interface](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TimeAxisBuildTicksCallback.html). 

```java
public interface TimeAxisBuildTicksCallback {

   /**
    * Callback that runs before ticks are created.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onBeforeBuildTicks(Axis axis, AxisItem item);

   /**
	 * Callback that runs after ticks are created. Useful for filtering ticks.
	 * 
	 * @param axis axis instance where this callback as been defined
	 * @param item axis item instance
	 * @param ticks list of created ticks
	 */
	void onAfterBuildTicks(Axis axis, AxisItem item, List<TimeTickItem> ticks);

}
```