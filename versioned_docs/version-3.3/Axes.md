---
id: Axes
title: Axes
hide_title: true
sidebar_label: Introduction
---
## Introduction

Axes are an integral parts of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X axis and 1 or more Y axis to map points onto the 2 dimensional chart. These axes are know as ['cartesian axes'](CartesianAxes).

In a radial chart, such as a radar chart or a polar area chart, there is a single axis that maps points in the angular and radial directions. These are known as ['radial axes'](RadialAxes).

There are a number of options to allow styling an axis. There are settings to control [grid lines](#gridlines) and [ticks](#ticks).

## Common Configuration

The following properties are common to all axes provided by [Chart.JS](http://www.chartjs.org/):

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| display | [Display](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Display.html) | Display.TRUE | If set to `false` the axis is hidden from view. Overrides *gridLines.display*, *scaleLabel.display*, and *ticks.display*.
| weight | int | 0 | The weight used to sort the axis. Higher weights are further away from the chart area.
| type | [AxisType](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/AxisType.html) | AxisType.LINEAR | Type of scale being employed. 

## Callbacks

There are a number of configuration callbacks that can be used to change parameters in the scale at different points in the update process.

All callbacks interfaces have got 2 arguments:

  * [Axis](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Axis.html) instance
  * [Axis item](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/AxisItem.html) object with all details about axis.

To add a callback, see the following example:

```java
axis.setAxisUpdateCallback(new AxisUpdateCallback() {

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

This callback can be used to change parameters in the scale during tick rotation. To implement this callback, you must implement [this interface](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/AxisCalculateTickRotationCallback.html). 

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

This callback can be used to change parameters in the scale during data limits determination. To implement this callback, you must implement [this interface](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/AxisDataLimitsCallback.html). 

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

This callback can be used to change parameters in the scale during setting dimensions. To implement this callback, you must implement [this interface](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/AxisDimensionsCallback.html). 

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

This callback can be used to change parameters in the scale during fitting phase. To implement this callback, you must implement [this interface](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/AxisFitCallback.html). 

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

This callback can be used to change parameters in the scale during ticks label conversion. To implement this callback, you must implement [this interface](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/AxisTickToLabelConversionCallback.html). 

```java
public interface AxisTickToLabelConversionCallback {

   /**
    * Callback that runs before ticks are converted into strings.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onBeforeTickToLabelConversion(Axis axis, AxisItem item);

   /**
    * Callback that runs after ticks are converted into strings.
    * 
    * @param axis axis instance where this callback as been defined
    * @param item axis item instance
    */
   void onAfterTickToLabelConversion(Axis axis, AxisItem item);

}
```

#### Update callback

This callback can be used to change parameters in the scale during updating. To implement this callback, you must implement [this interface](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/AxisUpdateCallback.html). 

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

## GridLines

It defines options for the grid lines that run perpendicular to the axis. All axes are providing the capability to set and get the options, by the **set** and **get** methods, as following:

```java
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
axis.getGridLines().setLineWidth(5);
axis.getGridLines().getLineWidth();
```

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| display | boolean | `true` | If `false`, do not display grid lines for this axis.
| color | String[] - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | rgba(0,0,0,0.1) | The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line and so on.
| borderDash | int[] | [] | Length and spacing of dashes on grid lines.
| borderDashOffset | int | 0 | Offset for line dashes.
| lineWidth | int[] | 1 | Stroke width of grid lines.
| drawBorder | boolean | `true` | If `true`, draw border at the edge between the axis and the chart area.
| drawOnChartArea | boolean | `true` | If `true`, draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn.
| drawTicks | boolean | `true` | If `true`, draw lines beside the ticks in the axis area beside the chart.
| tickMarkLength | int | 10 | Length in pixels that the grid lines will draw into the axis area.
| zeroLineWidth | int | 1 | Stroke width of the grid line for the first index (index 0).
| zeroLineColor | String - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.25) | Stroke color of the grid line for the first index (index 0).
| zeroLineBorderDash | int[] | [] | Length and spacing of dashes of the grid line for the first index (index 0).
| zeroLineBorderDashOffset | int | 0 | Offset for line dashes of the grid line for the first index (index 0).
| offsetGridLines | boolean | `false` | If `true`, grid lines will be shifted to be between labels. This is set to `true` in the bar chart by default.
| circular | boolean | `false` |If `true`, grid lines are circular (on radar chart only).
| z | int | 0 | z-index of gridline layer. Values less than or equals to 0 are drawn under datasets, greater than 0 on top.

## Ticks

All ticks generated by axes can be configured. All axes are providing the capability to set and get the options, by the **set** and **get** methods, as following:

```java
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
axis.getTicks().setReverse(true);
axis.getTicks().isReverse();
```

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| display | boolean | `true` | If `true`, show tick marks
| fontColor | String - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #666 | Font color for tick labels.
| fontFamily | String | 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif | Font family for the tick labels, follows CSS font-family options.
| fontSize | int | 12 | Font size for the tick labels.
| fontStyle | [FontStyle](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style for the tick labels, follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).
| reverse | boolean | `false` | Reverses order of tick labels.
| z | int | 0 | z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under datasets, greater than 0 on top.

The further customization of ticks, a callback (see the axis documentation) and other 2 ticks objects are provided.

### Minor tick

It defines options for the minor tick marks that are generated by the axis. Omitted options are inherited from ticks configuration.

To configure the minor tick, you can set values to the instance in the axis options, as following:

```java
axis.getTicks().getMinor().setFontSize(16);
```

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| fontColor | String - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #666 | Font color for tick labels.
| fontFamily | String | 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif | Font family for the tick labels, follows CSS font-family options.
| fontSize | int | 12 | Font size for the tick labels.
| fontStyle | [FontStyle](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style for the tick labels, follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).

### Major tick

It defines options for the major tick marks that are generated by the axis. Omitted options are inherited from ticks configuration.

To configure the major tick, you can set values to the instance in the axis options, as following:

```java
axis.getTicks().getMajor().setFontSize(16);
```

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| fontColor | String - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #666 | Font color for tick labels.
| fontFamily | String | 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif | Font family for the tick labels, follows CSS font-family options.
| fontSize | int | 12 | Font size for the tick labels.
| fontStyle | [FontStyle](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style for the tick labels, follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).
