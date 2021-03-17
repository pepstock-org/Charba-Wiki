---
id: RadialAxes
title: Radial axes
hide_title: true
sidebar_label: Radial axes
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Radial Axes

[Radial axes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialAxis.html) are used specifically for the radar and polar area chart types. These axes overlay the chart area, rather than being positioned on one of the edges. 

Radial axes could be only 

 * **linear**, is use to chart numerical data. As the name suggests, linear interpolation is used to determine where a value lies in relation the center of the axis.

The [radial axis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialAxis.html) is use to chart numerical data.

<img src={useBaseUrl('/img/radialLinear.png')} />

Here is an example how to create a radial axis:

```java
// creates a radial axis with default scale id "r" and default kind "r" 
RadialAxis axis = new RadialAxis(chart);

// adds axes to chart configuration
chart.getOptions().setAxes(axis);
```

The axis has configuration properties for [ticks](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialLinearTick.html), [angle lines](FIXME) (line that appear in a radar chart outward from the center), [pointLabels](FIXME) (labels around the edge in a radar chart):

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

| Name | Type | Description
| :- | :- | :-
| animate | boolean | If `true`, animate scaling the chart from the center.
| beginAtZero | boolean | If `true`, scale will include 0 if it is not already included.
| display | boolean - [Display](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Display.html) | If `Display.TRUE`, the axis is shown.
| max | double | User defined maximum number for the scale, overrides maximum value from data.
| min | double | User defined minimum number for the scale, overrides minimum value from data.
| reverse | boolean | Reverses order of tick labels.
| suggestedMax | double | Adjustment used when calculating the maximum data value.
| suggestedMin | double | Adjustment used when calculating the minimum data value.
| weight | int | The weight used to sort the axis. Higher weights are further away from the chart area. 

## Ticks

The radial linear axis provides the following options for configuring [tick marks](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadialLinearTick.html).

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
| backdropColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Color of label backdrops. 
| backdropPaddingX | int | - | Horizontal padding of label backdrop.
| backdropPaddingY | int | - | Vertical padding of label backdrop. 
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Color of ticks.
| display | boolean | - | If `true`, the tick marks are shown.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | [Yes](#scriptable) | Font of ticks.<br/>See [Font](DefaultsCharts#font).
| maxTicksLimit | int | - | Maximum number of ticks and gridlines to show.
| numberFormat | [NumberFormatOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/NumberFormatOptions.html) | - | The number format options used by the default label formatter. See FIXME
| padding | int | - | The padding between the tick label and the axis.
| precision | int | - | If defined and `stepSize` is not specified, the step size will be rounded to this many decimal places.
| sampleSize | int | - | The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
| showLabelBackdrop | boolean | [Yes](#scriptable) | If `true`, draw a background behind the tick labels
| stepSize | double | `Double.MIN_VALUE` | User defined fixed step size for the scale.
| textStrokeColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | The color of the stroke around the text.
| textStrokeWidth | int | [Yes](#scriptable) | Stroke width around the text.
| z | int | - | z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.

The further customization of ticks, a [callback](#callback) is provided.

### Scriptable

Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

```java
// creates a radial axis 
RadialAxis axis = new RadialAxis(chart);
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
| backdropColor | [ScaleColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| color | [ScaleColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| font | [ScaleFontCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScaleFontCallback.html) | [FontOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/FontOptions.html)
| showLabelBackdrop | [TextStrokeColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ShowLabelBackdropCallback.html) | boolean
| textStrokeColor | [TextStrokeColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TextStrokeColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [TextStrokeWidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TextStrokeWidthCallback.html) | int

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