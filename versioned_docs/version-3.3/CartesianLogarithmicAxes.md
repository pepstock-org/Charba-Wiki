---
id: CartesianLogarithmicAxes
title: Cartesian logarithmic
hide_title: true
sidebar_label: Cartesian logarithmic
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Cartesian Logarithmic Axes

The [logarithmic axis](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLogarithmicAxis.html) is use to chart numerical data. It can be placed on either the x or y axis. As the name suggests, logarithmic interpolation is used to determine where a value lies on the axis.

<img src={useBaseUrl('/img/logScale.png')} />

## Ticks

The logarithmic axis provides the following options for configuring [tick marks](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLogarithmicTick.html). These options extend the [common tick configuration](CartesianAxes#tick-configuration).

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| min | double | `Double.MIN_VALUE` | User defined minimum number for the scale, overrides minimum value from data.
| max | double | `Double.MAX_VALUE` | User defined maximum number for the scale, overrides maximum value from data.

The `min` and `max` settings set explicit ends to the axes. When these are set, some data points may not be visible.

The further customization of ticks, a callback is provided.

### Callback

It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration.

To apply a custom callback, you can set a [TickCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/TickCallback.html) instance to the axis options, as following:

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

This callback can be used to change parameters in the scale during ticks building. To implement this callback, you must implement [this interface](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/AxisBuildTicksCallback.html). 

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

