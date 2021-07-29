---
id: CartesianCategoryAxes
title: Cartesian category
hide_title: true
sidebar_label: Category
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Cartesian Category Axes

The [category axis](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/CartesianCategoryAxis.html) will draw the labels from one of the label arrays included in the chart data.

<img src={useBaseUrl('/img/cartesianCategory.png')} />

Here are some example how to create category axes:

```java
// creates a category axis with default scale id "x" and default kind "x" 
CartesianCategoryAxis axis1 = new CartesianCategoryAxis(chart);

// creates a category axis with scale id "my-axis" and default kind "x" 
CartesianCategoryAxis axis2 = new CartesianCategoryAxis(chart, "my-axis");

// creates a category axis with scale id "my-axis" and default kind "x" 
CartesianCategoryAxis axis3 = new CartesianCategoryAxis(chart, ScaleId.create("my-axis"));

// creates a category axis with default scale id "x" and custom kind "x" 
CartesianCategoryAxis axis4 = new CartesianCategoryAxis(chart, AxisKind.X);

// creates a category axis with scale id "my-axis" and custom kind "x" 
CartesianCategoryAxis axis5 = new CartesianCategoryAxis(chart, "my-axis", AxisKind.X;

// creates a category axis with scale id "my-axis" and custom kind "x" 
ScaleId myAxis = ScaleId.create("my-axis");
CartesianCategoryAxis axis6 = new CartesianCategoryAxis(chart, myAxis, AxisKind.X);

// adds axes to chart configuration
chart.getOptions().setAxes(axis1, ...);
```

## Options

The cartesian category axis allows to define a number of properties, used to display the data.

```java
// creates a category axis 
CartesianCategoryAxis axis = new CartesianCategoryAxis(chart);
// sets and gets the reverse value
axis.setReverse(true);

boolean reverse = axis.isReverse();
```

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :-
| alignToPixels | boolean | Align pixel values to device pixels.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html) | The background color of scale area.
| bounds | [Bounds](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/Bounds.html) | Determines the scale bounds on axis.
| display | boolean - [Display](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/Display.html) | If `Display.TRUE`, the axis is shown.
| max | String  | User defined maximum string for the scale, overrides maximum value from data.
| min | String | User defined minimum string for the scale, overrides minimum value from data.
| labels | [Labels](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/data/Labels.html) | The labels to display.
| offset | boolean | If `true`, extra space is added to the both edges and the axis is scaled to fit in the chart area. 
| position | [AxisPosition](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/AxisPosition.html) | Position of the axis
| reverse | boolean | Reverses order of tick labels.
| singleStacked | boolean | If you might want to stack positive and negative values together.
| stack | String | Sets the stack group. Axes at the same `position` with same `stack` are stacked.
| stacked | boolean | If the axis are stacked.
| stackWeight | double | Sets the weight of the scale in stack group. Used to determine the amount of allocated space for the scale within the group.
| weight | int | The weight used to sort the axis. Higher weights are further away from the chart area. 

## Ticks

The category axis provides the following options for configuring [tick marks](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/CartesianCategoryTick.html).

```java
// creates a category axis 
CartesianCategoryAxis axis = new CartesianCategoryAxis(chart);
// sets and gets the max value
axis.getTicks().setColor(HtmlColor.RED);

IsColor color = axis.gteTicks().getColor();
```

<img src={useBaseUrl('/img/categoryTicks.png')} />

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| align | [ElementAlign](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/ElementAlign.html) | - | The tick alignment along the axis.
| autoSkip | boolean | - | If `true`, automatically calculates how many labels that can be shown and hides labels accordingly. Labels will be rotated up to `maxRotation` before skipping any. Turn `autoSkip` off to show all labels no matter what.
| autoSkipPadding | int | - | The padding between the ticks on the horizontal axis when autoSkip is enabled.
| backdropColor | String - [IsColor](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Color of label backdrops.
| backdropPadding | [Padding](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/Padding.html) | - | The padding of tick backdrop.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Color of ticks.
| crossAlign | [CrossAlign](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/CrossAlign.html) | - | The tick alignment perpendicular to the axis.
| display | boolean | - | If `true`, the tick marks are shown.
| font | [Font](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/options/Font.html) | [Yes](#scriptable) | Font of ticks.
| includeBounds | boolean | - | If `true`, the defined `min` and `max` values should be presented as ticks even if they are not "nice".
| labelOffset | int | - | Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis).<br/><br/>Note: *This can cause labels at the edges to be cropped by the edge of the canvas*.
| maxRotation | int | - | The maximum rotation for tick labels when rotating to condense labels.<br/><br/>Note: *Rotation doesn't occur until necessary and only applicable to horizontal scales.*
| minRotation | int | - | The minimum rotation for tick labels.
| mirror | boolean | - | The flips tick labels around axis, displaying the labels inside the chart instead of outside.<br/><br/>Note: *Only applicable to vertical scales.*
| padding | int | - | The padding between the tick label and the axis.
| sampleSize | int | - | The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
| showLabelBackdrop | boolean | [Yes](#scriptable) | If `true`, draw a background behind the tick labels
| textStrokeColor | String - [IsColor](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | The color of the stroke around the text.
| textStrokeWidth | int | [Yes](#scriptable) | Stroke width around the text.
| z | int | - | z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.

For both the `min` and `max` properties, the value must be in the `labels` array.

The further customization of ticks, a [callback](#callback) is provided.

### Scriptable

Scriptable options at ticks level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

All scriptable options callbacks will get a [ScaleContext](../configuration/ScriptableOptions#scale-scriptable-options-context) instance.

```java
// creates a category axis 
CartesianCategoryAxis axis = new CartesianCategoryAxis(chart);
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
| backdropColor | [ColorCallback](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html)
| color | [ColorCallback](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html)
| font | [FontCallback](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/FontCallback.html)&lt;ScaleContext&gt; | [FontItem](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/FontItem.html)
| showLabelBackdrop | [ShowLabelBackdropCallback](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/ShowLabelBackdropCallback.html) | boolean
| textStrokeColor | [ColorCallback](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [WidthCallback](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;ScaleContext&gt; | int

### Callback

It is also common to want to change the tick marks to include information about the data type. 

To apply a custom callback, you can set a [CategoryTickCallback](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/callbacks/CategoryTickCallback.html) instance to the axis options, as following:

```java
axis.getTicks().setCallback(new CategoryTickCallback(){

   /**
    * Changes the tick marks to include information about the data type.
    * 
    * @param axis axis instance where this callback as been defined
    * @param value value of tick
    * @param index index of tick
    * @param values list of all tick values
    * @return the tick to apply or if the callback returns null the associated grid line will be hidden.
    */
   public String onCallback(Axis axis, String value, int index, List<String> values){
      // add a label
      return value + myLabel;
   }
         
});
```
