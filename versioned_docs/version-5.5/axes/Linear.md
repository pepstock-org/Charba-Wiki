---
id: CartesianLinearAxes
title: Linear
hide_title: true
sidebar_label: Linear
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Cartesian Linear Axes

The [linear axis](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/CartesianLinearAxis.html) is use to chart numerical data. It can be placed on either the x or y axis.

<img src={useBaseUrl('/img/cartesianLinear.png')} />

Here are some example how to create linear axes:

```java
// creates a linear axis with default scale id "y" and default kind "y" 
CartesianLinearAxis axis1 = new CartesianLinearAxis(chart);

// creates a linear axis with scale id "my-axis" and default kind "y" 
CartesianLinearAxis axis2 = new CartesianLinearAxis(chart, "my-axis");

// creates a linear axis with scale id "my-axis" and default kind "y" 
CartesianLinearAxis axis3 = new CartesianLinearAxis(chart, ScaleId.create("my-axis"));

// creates a linear axis with default scale id "y" and custom kind "y" 
CartesianLinearAxis axis4 = new CartesianLinearAxis(chart, AxisKind.Y);

// creates a linear axis with scale id "my-axis" and custom kind "y" 
CartesianLinearAxis axis5 = new CartesianLinearAxis(chart, "my-axis", AxisKind.Y);

// creates a linear axis with scale id "my-axis" and custom kind "y" 
ScaleId myAxis = ScaleId.create("my-axis");
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

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| alignToPixels | boolean | [Yes](#scriptable) | Align pixel values to device pixels.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | The background color of scale area.
| beginAtZero | boolean | [Yes](#scriptable) | If `true`, scale will include 0 if it is not already included.
| bounds | [Bounds](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/Bounds.html) | [Yes](#scriptable) | Determines the scale bounds on axis.
| display | boolean - [Display](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/Display.html) | [Yes](#scriptable) | If `Display.TRUE`, the axis is shown.
| grace | int | [Yes](#scriptable) | Amount of pixels for added room in the scale range above and below data.
| graceAsPercentage | double | [Yes](#scriptable) | Sets a value, between 0 and 1, as percentage, for added room in the scale range above and below data.
| max | double | [Yes](#scriptable) | User defined maximum number for the scale, overrides maximum value from data.
| min | double | [Yes](#scriptable) | User defined minimum number for the scale, overrides minimum value from data.
| offset | boolean | [Yes](#scriptable) | If `true`, extra space is added to the both edges and the axis is scaled to fit in the chart area. 
| position | [AxisPosition](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/AxisPosition.html) | [Yes](#scriptable) | Position of the axis.
| reverse | boolean | [Yes](#scriptable) | Reverses order of tick labels.
| singleStacked | boolean | - | If you might want to stack positive and negative values together.
| stack | String | [Yes](#scriptable) | Sets the stack group. Axes at the same `position` with same `stack` are stacked.
| stacked | boolean | [Yes](#scriptable) | If the axis are stacked.
| stackWeight | double | [Yes](#scriptable) | Sets the weight of the scale in stack group. Used to determine the amount of allocated space for the scale within the group.
| suggestedMax | double | [Yes](#scriptable) | Adjustment used when calculating the maximum data value.
| suggestedMin | double | [Yes](#scriptable) | Adjustment used when calculating the minimum data value.
| weight | double | [Yes](#scriptable) | The weight used to sort the axis. Higher weights are further away from the chart area. 

### Scriptable

Scriptable options at scale level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

All scriptable options callbacks will get a [ScaleContext](../configuration/ScriptableOptions#scale-context) instance.

```java
// creates a category axis 
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
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
| alignToPixels | [AlignToPixelsCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/AlignToPixelsCallback.html) | boolean
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html)
| beginAtZero | [BeginAtZeroCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/BeginAtZeroCallback.html) | boolean
| bounds | [BoundsCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/BoundsCallback.html) | [Bounds](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/Bounds.html)
| display | [DisplayCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/DisplayCallback.html) | boolean - [Display](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/Display.html)
| grace | [GraceCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/GraceCallback.html) | int - double
| max | [MinMaxCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/MinMaxCallback.html)&lt;Double&gt; | double
| min | [MinMaxCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/MinMaxCallback.html)&lt;Double&gt; | double
| offset | [ScaleOffsetCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ScaleOffsetCallback.html) | boolean
| position | [ScalePositionCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ScalePositionCallback.html) | [AxisPosition](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/AxisPosition.html)
| reverse | [ReverseCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ReverseCallback.html) | boolean
| stack | [StackCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/StackCallback.html) | String
| stacked | [StackedCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/StackedCallback.html) | boolean
| stackWeight | [ScaleWeightCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/StackedCallback.html) | double
| suggestedMax | [MinMaxCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/MinMaxCallback.html)&lt;Double&gt; | double
| suggestedMin | [MinMaxCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/MinMaxCallback.html)&lt;Double&gt; | double
| weight | [ScaleWeightCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ScaleWeightCallback.html) | double

## Ticks

The linear axis provides the following options for configuring [tick marks](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/CartesianLinearTick.html).

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
| align | [TickAlign](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/TickAlign.html) | - | The tick alignment along the axis.
| autoSkip | boolean | - | If `true`, automatically calculates how many labels that can be shown and hides labels accordingly. Labels will be rotated up to `maxRotation` before skipping any. Turn `autoSkip` off to show all labels no matter what.
| autoSkipPadding | int | - | The padding between the ticks on the horizontal axis when autoSkip is enabled.
| backdropColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#ticks-scriptable-options) | Color of label backdrops.
| backdropPadding | [Padding](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/Padding.html) | - | The padding of tick backdrop.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#ticks-scriptable-options) | Color of ticks.
| count | int | [Yes](#ticks-scriptable-options) | The number of ticks to generate. If specified, this overrides the automatic generation.
| crossAlign | [CrossAlign](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/enums/CrossAlign.html) | - | The tick alignment perpendicular to the axis.
| display | boolean | - | If `true`, the tick marks are shown.
| font | [IsFont](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/options/IsFont.html) | [Yes](#ticks-scriptable-options) | Font of ticks.<br/>See [Font](../defaults/DefaultsCharts#font).
| includeBounds | boolean | - | If `true`, the defined `min` and `max` values should be presented as ticks even if they are not "nice".
| labelOffset | int | - | Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis).<br/><br/>Note: *This can cause labels at the edges to be cropped by the edge of the canvas*.
| maxRotation | int | - | The maximum rotation for tick labels when rotating to condense labels.<br/><br/>Note: *Rotation doesn't occur until necessary and only applicable to horizontal scales.*
| maxTicksLimit | int | [Yes](#ticks-scriptable-options) | Maximum number of ticks and gridlines to show.
| minRotation | int | - | The minimum rotation for tick labels.
| mirror | boolean | - | The flips tick labels around axis, displaying the labels inside the chart instead of outside.<br/><br/>Note: *Only applicable to vertical scales.*
| numberFormat | [NumberFormatOptions](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/intl/NumberFormatOptions.html) | [Yes](#ticks-scriptable-options) | The number format options used by the default label formatter.<br/>See [INTL number format](../intl/NumberFormat) documentation.
| padding | int | - | The padding between the tick label and the axis.
| precision | int | [Yes](#ticks-scriptable-options) | If defined and `stepSize` is not specified, the step size will be rounded to this many decimal places.
| sampleSize | int | - | The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
| showLabelBackdrop | boolean | [Yes](#ticks-scriptable-options) | If `true`, draw a background behind the tick labels
| stepSize | double | [Yes](#ticks-scriptable-options) | User defined fixed step size for the scale.
| textStrokeColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#ticks-scriptable-options) | The color of the stroke around the text.
| textStrokeWidth | int | [Yes](#ticks-scriptable-options) | Stroke width around the text.
| z | int | - | z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.

Given the number of axis range settings, it is important to understand how they all interact with each other.

The `suggestedMax` and `suggestedMin` settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behavior.

In contrast to the `suggested*` settings, the `min` and `max` settings set explicit ends to the axes. When these are set, some data points may not be visible.

If `stepSize` set, the scale ticks will be enumerated by multiple of `stepSize`, having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm.

The further customization of ticks, a [callback](#callback) is provided.

### Ticks scriptable options

Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

All scriptable options callbacks will get a [ScaleContext](../configuration/ScriptableOptions#scale-context) instance.

```java
// creates the axis for chart
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
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
| backdropColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html)
| color | [ColorCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html)
| count | [CountCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/CountCallback.html) | int
| font | [FontCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/FontCallback.html)&lt;ScaleContext&gt; | [FontItem](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/items/FontItem.html)
| maxTicksLimit | [MaxTicksLimitCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/MaxTicksLimitCallback.html) | int
| numberFormat | [NumberFormatCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/NumberFormatCallback.html) | [NumberFormatItem](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/items/NumberFormatItem.html)
| precision | [PrecisionCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/PrecisionCallback.html) | int
| showLabelBackdrop | [ShowLabelBackdropCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ShowLabelBackdropCallback.html) | boolean
| stepSize | [StepSizeCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/StepSizeCallback.html) | double
| textStrokeColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;ScaleContext&gt; | int

### Callback

It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration.

To apply a custom callback, you can set a [TickCallback](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/callbacks/TickCallback.html) instance to the axis options, as following:

```java
// creates the axis for chart
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets the option by a callback 
axis.getTicks().setCallback(new TickCallback(){

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

The callback can return a string (for single line) or a list of strings (for multiple lines).

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
