---
id: RadialAxes
title: Radial axes
hide_title: true
sidebar_label: Radial axes
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Radial Axes

[Radial axes](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/RadialAxis.html) are used specifically for the radar and polar area chart types. These axes overlay the chart area, rather than being positioned on one of the edges. 

Radial axes could be only 

 * **linear**, is use to chart numerical data. As the name suggests, linear interpolation is used to determine where a value lies in relation the center of the axis.

The [radial axis](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/RadialAxis.html) is use to chart numerical data.

<img src={useBaseUrl('/img/radialLinear.png')} />

Here is an example how to create a radial axis:

```java
// creates a radial axis with default scale id "r" and default kind "r" 
RadialAxis axis = new RadialAxis(chart);

// adds axes to chart configuration
chart.getOptions().setAxes(axis);
```

The axis has configuration properties for [ticks](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/RadialLinearTick.html), [angle lines](AngleLines) (line that appear in a radar chart outward from the center), [point labels](PointLabels) (labels around the edge in a radar chart):

## Options

The radial linear axis allows to define a number of properties, used to display the data.

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// sets and gets the max value
axis.setMax(100);

double max = axis.getMax();
```

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| alignToPixels | boolean | [Yes](#scriptable) | Align pixel values to device pixels.
| animate | boolean | - | If `true`, animate scaling the chart from the center.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | The background color of scale area.
| beginAtZero | boolean | [Yes](#scriptable) | If `true`, scale will include 0 if it is not already included.
| display | boolean - [Display](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/Display.html) | [Yes](#scriptable) | If `Display.TRUE`, the axis is shown.
| max | double | [Yes](#scriptable) | User defined maximum number for the scale, overrides maximum value from data.
| min | double | [Yes](#scriptable) | User defined minimum number for the scale, overrides minimum value from data.
| reverse | boolean | [Yes](#scriptable) | Reverses order of tick labels.
| startAngle | double | [Yes](#scriptable) | Starting angle to draw arcs for the first item in a data set. In degrees, 0 is at top.
| suggestedMax | double | [Yes](#scriptable) | Adjustment used when calculating the maximum data value.
| suggestedMin | double | [Yes](#scriptable) | Adjustment used when calculating the minimum data value.
| weight | double | [Yes](#scriptable) | The weight used to sort the axis. Higher weights are further away from the chart area. 

### Scriptable

Scriptable options at scale level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

All scriptable options callbacks will get a [ScaleContext](../configuration/ScriptableOptions#scale-context) instance.

```java
// creates a category axis 
RadialAxis axis = new RadialAxis(chart);
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
| alignToPixels | [AlignToPixelsCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/AlignToPixelsCallback.html) | boolean
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html)
| beginAtZero | [BeginAtZeroCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/BeginAtZeroCallback.html) | boolean
| display | [DisplayCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/DisplayCallback.html) | boolean - [Display](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/Display.html)
| max | [MinMaxCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/MinMaxCallback.html)&lt;Double&gt; | double
| min | [MinMaxCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/MinMaxCallback.html)&lt;Double&gt; | double
| reverse | [ReverseCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ReverseCallback.html) | boolean
| startAngle | [StartAngleCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/StartAngleCallback.html) | double
| suggestedMax | [MinMaxCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/MinMaxCallback.html)&lt;Double&gt; | double
| suggestedMin | [MinMaxCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/MinMaxCallback.html)&lt;Double&gt; | double
| weight | [ScaleWeightCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ScaleWeightCallback.html) | double

## Ticks

The radial linear axis provides the following options for configuring [tick marks](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/RadialLinearTick.html).

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// sets and gets the max value
axis.getTicks().setColor(HtmlColor.RED);

IsColor color = axis.gteTicks().getColor();
```

<img src={useBaseUrl('/img/radialTicks.png')} />

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| backdropColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#ticks-scriptable-options) | Color of label backdrops.
| backdropPadding | [Padding](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/Padding.html) | | The padding of tick backdrop.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#ticks-scriptable-options) | Color of ticks.
| count | int | [Yes](#ticks-scriptable-options | The number of ticks to generate. If specified, this overrides the automatic generation.
| display | boolean | - | If `true`, the tick marks are shown.
| font | [IsFont](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/options/IsFont.html) | [Yes](#ticks-scriptable-options) | Font of ticks.<br/>See [Font](../defaults/DefaultsCharts#font).
| maxTicksLimit | int | [Yes](#ticks-scriptable-options | Maximum number of ticks and gridlines to show.
| numberFormat | [NumberFormatOptions](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/intl/NumberFormatOptions.html) | [Yes](#ticks-scriptable-options) | The number format options used by the default label formatter.<br/>See [INTL number format](../intl/NumberFormat) documentation.
| padding | int | - | The padding between the tick label and the axis.
| precision | int | [Yes](#ticks-scriptable-options | If defined and `stepSize` is not specified, the step size will be rounded to this many decimal places.
| sampleSize | int | - | The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
| showLabelBackdrop | boolean | [Yes](#ticks-scriptable-options) | If `true`, draw a background behind the tick labels
| stepSize | double | [Yes](#ticks-scriptable-options) | User defined fixed step size for the scale.
| textStrokeColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#ticks-scriptable-options) | The color of the stroke around the text.
| textStrokeWidth | int | [Yes](#ticks-scriptable-options) | Stroke width around the text.
| z | int | - | z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.

The further customization of ticks, a [callback](#callback) is provided.

<br/>See [padding documentation](../configuration/Commons#padding) for more details.

### Ticks scriptable options

Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

All scriptable options callbacks will get a [ScaleContext](../configuration/ScriptableOptions#scale-context) instance.

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
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
| backdropColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html)
| color | [ColorCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html)
| count | [CountCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/CountCallback.html) | int
| font | [FontCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/FontCallback.html)&lt;ScaleContext&gt; | [FontItem](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/items/FontItem.html)
| maxTicksLimit | [MaxTicksLimitCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/MaxTicksLimitCallback.html) | int
| numberFormat | [NumberFormatCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/NumberFormatCallback.html) | [NumberFormatItem](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/items/NumberFormatItem.html)
| precision | [PrecisionCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/PrecisionCallback.html) | int
| showLabelBackdrop | [ShowLabelBackdropCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ShowLabelBackdropCallback.html) | boolean
| stepSize | [StepSizeCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/StepSizeCallback.html) | double
| textStrokeColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;ScaleContext&gt; | int

### Callback

It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to implement a ticks callback in the axis configuration.

To apply a custom callback, you can set a [TickCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/TickCallback.html) instance to the axis options, as following:

```java
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

### NoSelectedDatasetTicksCallback callback

**Charba** provides a common implementation for tick callback to set the decimal digits of ticks in case of all data sets are hidden, to avoid the annoying standard format of doubles.

To apply the callback, you can set an instance to the axis options, as following:

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// sets the option by a callback 
axis.getTicks().setCallback(new NoSelectedDatasetTicksCallback());
```

The default decimal precision is `2`. A custom precision can be set by the constructor of callback, as following:

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
// sets the option by a callback 
// 3 decimal digits 
axis.getTicks().setCallback(new NoSelectedDatasetTicksCallback(3));
```