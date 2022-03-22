---
id: Axes
title:  Introduction
hide_title: true
sidebar_label: Introduction
---
## Axes

Axes are an integral parts of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X axis and 1 or more Y axis to map points onto the 2 dimensional chart. These axes are know as ['cartesian axes'](CartesianAxes).

In a radial chart, such as a radar chart or a polar area chart, there is a single axis that maps points in the angular and radial directions. These are known as ['radial axes'](RadialAxes).

There are a number of options to allow styling an axis. There are settings to control [grid](Grid) and [ticks](#ticks).

## Attributes

Each axis has got a set of common attributes, mandatory options of all axes.

At the creation time, an axis needs to have the following 3 attributes:

| Name | Type | Description
| :- | :- | :-
| id | [ScaleId](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/options/ScaleId.html) | The unique id of axis.
| type | [AxisType](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/AxisType.html) | The type of scale being employed.
| axis | [AxisKind](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/AxisKind.html) |The axis kind to define which directions are used in axis.  

Here is an example how to create an axis:

```java
// creates the id "y-my" for the axis
ScaleId scaleId = ScaleId.create("y-my");
// creates the by chart instance, my scale id and specifying that is a scale for Y 
CartesianLinearAxis linearAxis = new CartesianLinearAxis(chart, scaleId, AxisKind.Y);
```

## Axis ID

All axes must have a unique id  which must be passed when the axis is creating. When the id is not passed, the axis will use a [default id](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/DefaultScaleId.html) based on type and kind of axis. 

If you are creating a axis by a custom id and [AxisKind](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/AxisKind.html) is not provided, the kind of axis is automatically set checking the first character of axis id:

 * if axis id is starting with `x`, then the kind of axis is ['X'](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/AxisKind.html#X).
 * if axis id is starting with `y`, then the kind of axis is ['Y'](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/AxisKind.html#Y).

Every axis has got own default axis id and kind, as following:

| Type | Default Id | Default Orientation
| :- | :- | :-
| linear | DefaultScaleId.Y | AxisKind.Y
| logarithmic | DefaultScaleId.Y | AxisKind.Y
| category | DefaultScaleId.X | AxisKind.X
| time | DefaultScaleId.X | AxisKind.X  
| timeseries | DefaultScaleId.X | AxisKind.X
| radialLinear | DefaultScaleId.R | AxisKind.R

## Callbacks

There are a number of configuration callbacks that can be used to change parameters in the scale at different points in the update process.

All callbacks interfaces have got 2 arguments:

  * [Axis](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/Axis.html) instance
  * [Axis item](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/items/AxisItem.html) object with all details about axis.

To add a callback, see the following example:

```java
axis.setAxisUpdateCallback(new AxisUpdateCallback(){

   // methods implementation

});
```

#### BuildTicks callback

This callback can be used to change parameters in the scale during ticks building. Each axis can manage different type of ticks (strings, numbers, dates) and the description how to use the build ticks callback is described in the page of axes:

  * [Category cartesian axes](CartesianCategoryAxes#buildticks-callback)
  * [Linear cartesian axes](CartesianLinearAxes#buildticks-callback)
  * [Logarithmic cartesian axes](CartesianLogarithmicAxes#buildticks-callback)
  * [Time cartesian axes](CartesianTimeAxes#buildticks-callback)
  * [Linear radial axes](RadialAxes#buildticks-callback)
  

#### Calculate tick rotation callback

This callback can be used to change parameters in the scale during tick rotation. To implement this callback, you must implement [this interface](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/AxisCalculateTickRotationCallback.html). 

```java
public interface AxisCalculateTickRotationCallback {

   /**
    * Callback that runs before tick rotation is determined.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onBeforeCalculateTickRotation(Axis axis, AxisItem item);

   /**
    * Callback that runs after tick rotation is determined.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onAfterCalculateTickRotation(Axis axis, AxisItem item);

}
```

#### Data limit callback

This callback can be used to change parameters in the scale during data limits determination. To implement this callback, you must implement [this interface](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/AxisDataLimitsCallback.html). 

```java
public interface AxisDataLimitsCallback {

   /**
    * Callback that runs before data limits are determined.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onBeforeDataLimits(Axis axis, AxisItem item);

   /**
    * Callback that runs after data limits are determined.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onAfterDataLimits(Axis axis, AxisItem item);
}
```

#### Dimensions callback

This callback can be used to change parameters in the scale during setting dimensions. To implement this callback, you must implement [this interface](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/AxisDimensionsCallback.html). 

```java
public interface AxisDimensionsCallback {

   /**
    * Callback that runs before dimensions are set.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onBeforeSetDimensions(Axis axis, AxisItem item);

   /**
    * Callback that runs after dimensions are set.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onAfterSetDimensions(Axis axis, AxisItem item);

}
```

#### Fit callback

This callback can be used to change parameters in the scale during fitting phase. To implement this callback, you must implement [this interface](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/AxisFitCallback.html). 

```java
public interface AxisFitCallback {

   /**
    * Callback that runs before the scale fits to the canvas.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onBeforeFit(Axis axis, AxisItem item);

   /**
    * Callback that runs after the scale fits to the canvas.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onAfterFit(Axis axis, AxisItem item);

}
```

#### Tick to label conversion callback

This callback can be used to change parameters in the scale during ticks label conversion. To implement this callback, you must implement [this interface](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/AxisTickToLabelConversionCallback.html). 

```java
public interface AxisTickToLabelConversionCallback {

   /**
    * Callback that runs before ticks are converted in strings.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onBeforeTickToLabelConversion(Axis axis, AxisItem item);

   /**
    * Callback that runs after ticks are converted in strings.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onAfterTickToLabelConversion(Axis axis, AxisItem item);

}
```

#### Update callback

This callback can be used to change parameters in the scale during updating. To implement this callback, you must implement [this interface](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/AxisUpdateCallback.html). 

```java
public interface AxisUpdateCallback {

   /**
    * Callback called before the update process starts.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onBeforeUpdate(Axis axis, AxisItem item);

   /**
    * Callback that runs at the end of the update process.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onAfterUpdate(Axis axis, AxisItem item);

}
```

## Ticks

All ticks generated by axes can be configured. All axes are providing the capability to set and get the options, by the **set** and **get** methods, as following:

```java
// creates the axis for chart with default id and kind to "y"
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// sets display to the ticks
axis.getTicks().setDisplay(true);

boolean display = axis.getTicks().isDisplay();
```

Table with options:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| color | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | Color of ticks.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| display | boolean | - | If `true`, the tick marks are shown.
| font | [IsFont](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/options/IsFont.html) | [Yes](#scriptable) | Font of ticks.<br/>See [Font](../defaults/DefaultsCharts#font).
| padding | int | - | The padding between the tick label and the axis.
| textStrokeColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | The color of the stroke around the text.
| textStrokeWidth | int | [Yes](#scriptable) | Stroke width around the text.
| z | int | - | The z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under data sets, greater than 0 on top.

### Scriptable

Scriptable options at grid level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

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
| color | [ColorCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html)
| font | [FontCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/FontCallback.html)&lt;ScaleContext&gt; | [FontItem](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/items/FontItem.html)
| textStrokeColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;ScaleContext&gt; | int

### Major Tick

The major tick configuration enables for the major tick marks that are generated by the axis. A major tick will affect auto-skipping and major will be defined on ticks in the scriptable options context, by [ScaleTickItem](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/items/ScaleTickItem.html) class and [isMajor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/items/ScaleTickItem.html#isMajor--) method.

The major ticks configuration is nested in the ticks configuration as following: 

```java
// creates the axis for chart with default id and kind to "y"
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
// enables major tick
axis.getTicks().getMajor().setEnabled(true);

boolean enabled = axis.getTicks().getMajor().isEnabled();
```

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :- | :-
| enabled | boolean | If `true`, major ticks marks are generated.
