---
id: CartesianLinearAxes
title: Cartesian linear
hide_title: true
sidebar_label: Cartesian linear
---
## Cartesian Linear Axes

The [linear axis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLinearAxis.html) is use to chart numerical data. It can be placed on either the x or y axis.

## Ticks

The linear axis provides the following options for configuring [tick marks](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLinearTick.html). These options extend the [common tick configuration](CartesianAxes#tick-configuration).

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| beginAtZero | boolean | `false` | if `true`, scale will include 0 if it is not already included.
| min | double | `Double.MIN_VALUE` | User defined minimum number for the scale, overrides minimum value from data. 
| max | double | `Double.MAX_VALUE` | User defined maximum number for the scale, overrides maximum value from data. 
| maxTicksLimit | int | 11 | Maximum number of ticks and gridlines to show.
| stepSize | double | `Double.MIN_VALUE` | User defined fixed step size for the scale.
| suggestedMax | double | `Double.MAX_VALUE` | Adjustment used when calculating the maximum data value. 
| suggestedMin | double | `Double.MIN_VALUE` | Adjustment used when calculating the minimum data value. 

Given the number of axis range settings, it is important to understand how they all interact with each other.

The `suggestedMax` and `suggestedMin` settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behavior.

In contrast to the `suggested*` settings, the `min` and `max` settings set explicit ends to the axes. When these are set, some data points may not be visible.

If `stepSize` set, the scale ticks will be enumerated by multiple of `stepSize`, having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm.

The further customization of ticks, a callback is provided.

### Callback

It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration.

To apply a custom callback, you can set a [TickCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TickCallback.html) instance to the axis options, as following:

```java
axis.getTicks().setCallback(new TickCallback() {

   /**
    * Changes the tick marks to include information about the data type.
    * 
    * @param axis axis instance where this callback as been defined
    * @param value value of tick
    * @param index index of tick
    * @param values list of all tick values
    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.
    */
   public String onCallback(Axis axis, double value, int index, List<Double> values){
      // add $
      return "$" + value;
   }
         
});
```

### BuildTicks callback

This callback can be used to change parameters in the scale during ticks building. To implement this callback, you must implement [this interface](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/AxisBuildTicksCallback.html). 

```java
public interface AxisBuildTicksCallback {

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
	void onAfterBuildTicks(Axis axis, AxisItem item, List<Double> ticks);

}
```
