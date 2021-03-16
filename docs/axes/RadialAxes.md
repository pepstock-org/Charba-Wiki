---
id: RadialAxes
title: Radial axes
hide_title: true
sidebar_label: Radial axes
---
## Radial Axes

[Radial axes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialAxis.html) are used specifically for the radar and polar area chart types. These axes overlay the chart area, rather than being positioned on one of the edges. 

Radial axes could be only 

 * **linear**, is use to chart numerical data. As the name suggests, linear interpolation is used to determine where a value lies in relation the center of the axis.
 
The axis has configuration properties for [ticks](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialLinearTick.html), angle lines (line that appear in a radar chart outward from the center), pointLabels (labels around the edge in a radar chart):

## Angle Line

The following options are used to configure angled lines that radiate from the center of the chart to the point labels. They can be found in the angleLines sub options object. Note that these options only apply if `display` is `true`.

The [RadialAngleLines](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialAngleLines.html) provides all **set** and **get** methods to manage the configuration, as following:

```java
RadialAxis axis = new RadialAxis(chart);
axis.getAngleLines().setLineWidth(2);
chart.getOptions().setAxis(axis);
```

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| display | boolean | `true` | if `true`, angle lines are shown
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Color of angled lines
| lineWidth | int | 1 | Width of angled lines

## Point Labels

The following options are used to configure the point labels that are shown on the perimeter of the scale. They can be found in the pointLabels sub options object. Note that these options only apply if `display` is `true`.

The [RadialPointLabels](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialPointLabels.html) provides all **set** and **get** methods to manage the configuration, as following:

```java
RadialAxis axis = new RadialAxis(chart);
axis.getPointLabels().setFontSize(16);
chart.getOptions().setAxis(axis);
```

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| display | boolean | `true` | if `true`, labels are shown
| fontColor | String - String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | #666 | Font color for point labels.
| fontFamily | String | 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif | Font family to use when rendering labels.
| fontSize | int | 10 | font size in pixels
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style to use when rendering point labels.

### Callback

Callback implementation can transform data labels to point labels. The default implementation simply returns the current string.

To apply an own callback, you can set a [RadialPointLabelCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/RadialPointLabelCallback.html) instance to the axis options, as following:

```java
RadialAxis axis = new RadialAxis(chart);
axis.getPointLabels().setCallBack(new RadialPointLabelCallback() {

   /**
    * Callback function to transform data labels to point labels. The default implementation simply returns the current string.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item label of current label
    * @return new label to apply to point label
    */
    @Override
    public String onCallback(Axis axis, String item)
      // logic
      return item;
   }
         
});
```

## Ticks

The linear axis provides the following options for configuring [tick marks](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialLinearTick.html). 

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| backdropColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(255,255,255,0.75) | Color of label backdrops
| backdropPaddingX | int | 2 | Horizontal padding of label backdrop.
| backdropPaddingY | int | 2 | Vertical padding of label backdrop.
| beginAtZero | boolean | `false` | if `true`, scale will include 0 if it is not already included.
| min | double | `Double.MIN_VALUE` | User defined minimum number for the scale, overrides minimum value from data.
| max | double | `Double.MAX_VALUE` | User defined maximum number for the scale, overrides maximum value from data.
| maxTicksLimit | int | 11 | Maximum number of ticks and gridlines to show.
| stepSize | double | `Double.MIN_VALUE` | User defined fixed step size for the scale.
| suggestedMax | double | `Double.MAX_VALUE` | Adjustment used when calculating the maximum data value.
| suggestedMin | double | `Double.MIN_VALUE` | Adjustment used when calculating the minimum data value.
| showLabelBackdrop | boolean | `true` | If `true`, draw a background behind the tick labels

Given the number of axis range settings, it is important to understand how they all interact with each other.

The `suggestedMax` and `suggestedMin` settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behaviour.

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
