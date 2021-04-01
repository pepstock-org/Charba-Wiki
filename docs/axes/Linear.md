---
id: CartesianLinearAxes
title: Linear
hide_title: true
sidebar_label: Linear
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Cartesian Linear Axes

The [linear axis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLinearAxis.html) is use to chart numerical data. It can be placed on either the x or y axis.

<img src={useBaseUrl('/img/cartesianLinear.png')} />

Here are some example how to create linear axes:

```java
// creates a linear axis with default scale id "y" and default kind "y" 
CartesianLinearAxis axis1 = new CartesianLinearAxis(chart);

// creates a linear axis with scale id "my-axis" and default kind "y" 
CartesianLinearAxis axis2 = new CartesianLinearAxis(chart, "my-axis");

// creates a linear axis with scale id "my-axis" and default kind "y" 
CartesianLinearAxis axis3 = new CartesianLinearAxis(chart, IsScaleId.create("my-axis"));

// creates a linear axis with default scale id "y" and custom kind "y" 
CartesianLinearAxis axis4 = new CartesianLinearAxis(chart, AxisKind.Y);

// creates a linear axis with scale id "my-axis" and custom kind "y" 
CartesianLinearAxis axis5 = new CartesianLinearAxis(chart, "my-axis", AxisKind.Y);

// creates a linear axis with scale id "my-axis" and custom kind "y" 
IsScaleId myAxis = IsScaleId.create("my-axis");
CartesianLinearAxis axis6 = new CartesianLinearAxis(chart, myAxis, AxisKind.Y);

// adds axes to chart configuration
chart.getOptions().setAxes(axis1, ...);
```

## Options

The cartesian linear axis allows to define a number of properties, used to display the data.

```java
// creates a linear axis 
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets and gets the max value
axis.setMax(100);

double max = axis.getMax();
```

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :-
| beginAtZero | boolean | If `true`, scale will include 0 if it is not already included.
| bounds | [Bounds](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Bounds.html) | Determines the scale bounds on axis.
| display | boolean - [Display](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Display.html) | If `Display.TRUE`, the axis is shown.
| grace | int | Amount of pixels for added room in the scale range above and below data.
| graceAsPercentage | String | Percentage (string ending with `%`) for added room in the scale range above and below data.
| max | double | User defined maximum number for the scale, overrides maximum value from data.
| min | double | User defined minimum number for the scale, overrides minimum value from data.
| offset | boolean | If `true`, extra space is added to the both edges and the axis is scaled to fit in the chart area. 
| position | [AxisPosition](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/AxisPosition.html) | Position of the axis.
| reverse | boolean | Reverses order of tick labels.
| stacked | boolean | If the axis are stacked.
| suggestedMax | double | Adjustment used when calculating the maximum data value.
| suggestedMin | double | Adjustment used when calculating the minimum data value.
| weight | int | The weight used to sort the axis. Higher weights are further away from the chart area. 

## Ticks

The linear axis provides the following options for configuring [tick marks](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLinearTick.html).

```java
// creates a linear axis 
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets and gets the max value
axis.getTicks().setColor(HtmlColor.RED);

IsColor color = axis.gteTicks().getColor();
```

<img src={useBaseUrl('/img/linearTicks.png')} />

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| align | [ElementAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ElementAlign.html) | - | The tick alignment along the axis.
| autoSkip | boolean | - | If `true`, automatically calculates how many labels that can be shown and hides labels accordingly. Labels will be rotated up to `maxRotation` before skipping any. Turn `autoSkip` off to show all labels no matter what.
| autoSkipPadding | int | - | The padding between the ticks on the horizontal axis when autoSkip is enabled.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Color of ticks.
| crossAlign | [CrossAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CrossAlign.html) | - | The tick alignment perpendicular to the axis.
| display | boolean | - | If `true`, the tick marks are shown.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | [Yes](#scriptable) | Font of ticks.<br/>See [Font](../defaults/DefaultsCharts#font).
| labelOffset | int | - | Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis).<br/><br/>Note: *This can cause labels at the edges to be cropped by the edge of the canvas*.
| maxRotation | int | - | The maximum rotation for tick labels when rotating to condense labels.<br/><br/>Note: *Rotation doesn't occur until necessary and only applicable to horizontal scales.*
| maxTicksLimit | int | - | Maximum number of ticks and gridlines to show.
| minRotation | int | - | The minimum rotation for tick labels.
| mirror | boolean | - | The flips tick labels around axis, displaying the labels inside the chart instead of outside.<br/><br/>Note: *Only applicable to vertical scales.*
| numberFormat | [NumberFormatOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/NumberFormatOptions.html) | - | The number format options used by the default label formatter.<br/>See [INTL number format](../intl/NumberFormat) documentation.
| padding | int | - | The padding between the tick label and the axis.
| precision | int | - | If defined and `stepSize` is not specified, the step size will be rounded to this many decimal places.
| sampleSize | int | - | The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
| stepSize | double | - | User defined fixed step size for the scale.
| textStrokeColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | The color of the stroke around the text.
| textStrokeWidth | int | [Yes](#scriptable) | Stroke width around the text.
| z | int | - | z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.

Given the number of axis range settings, it is important to understand how they all interact with each other.

The `suggestedMax` and `suggestedMin` settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behavior.

In contrast to the `suggested*` settings, the `min` and `max` settings set explicit ends to the axes. When these are set, some data points may not be visible.

If `stepSize` set, the scale ticks will be enumerated by multiple of `stepSize`, having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm.

The further customization of ticks, a [callback](#callback) is provided.

### Scriptable

Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

All scriptable options callbacks will get a [ScaleScriptableContext](../configuration/ScriptableOptions#scale-scriptable-options-context) instance.

```java
// creates the axis for chart
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets the option by a callback 
axis.getTicks().setColor(new ColorCallback<ScaleScriptableContext>() {

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
| color | [ColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleScriptableContext&gt; | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| font | [FontCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/FontCallback.html)&lt;ScaleScriptableContext&gt; | [FontItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/FontItem.html)
| textStrokeColor | [ColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleScriptableContext&gt; | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [WidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;ScaleScriptableContext&gt; | int

### Callback

It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration.

To apply a custom callback, you can set a [TickCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TickCallback.html) instance to the axis options, as following:

```java
// creates the axis for chart
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets the option by a callback 
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

See [INTL number format](../intl/NumberFormat) documentation if you want to use a number formatter, provided out-of-the-box.

### NoSelectedDatasetTicksCallback callback

**Charba** provides a common implementation for tick callback to set the decimal digits of ticks in case of all data sets are hidden, to avoid the annoying standard format of doubles.

To apply the callback, you can set an instance to the axis options, as following:

```java
// creates the axis for chart
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets the option by a callback 
axis.getTicks().setCallback(new NoSelectedDatasetTicksCallback());
```

The default decimal precision is `2`. A custom precision can be set by the constructor of callback, as following:

```java
// creates the axis for chart
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets the option by a callback 
// 3 decimal digits 
axis.getTicks().setCallback(new NoSelectedDatasetTicksCallback(3));
```
