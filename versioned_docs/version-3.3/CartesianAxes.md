---
id: CartesianAxes
title: Cartesian axes
hide_title: true
sidebar_label: Introduction
---
## Introduction

Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart.
In a cartesian chart, there is 1 or more X axes and 1 or more Y axes to map points onto the 2 dimensional canvas. These axes are know as 'cartesian axes'.

Axes that follow a cartesian grid are known as 'Cartesian Axes'. Cartesian axes are used for line, bar, and bubble charts. 

 * **[linear](CartesianLinearAxes)**
 * **[logarithmic](CartesianLogarithmicAxes)**
 * **[category](CartesianCategoryAxes)**
 * **[time](CartesianTimeAxes)**
 
## Options

All of the included cartesian axes support a number of common options.

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| id | String | `null` | The ID is used to link datasets and scale axes together.
| offset | boolean | `false` | If `true`, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to `true` in the bar chart by default.
| position | [Position](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.TOP | Position of the axis in the chart.
| stacked | boolean | `false` | if the axis are stacked or not.

## Axis ID

The properties `xAxisID` or `yAxisID`, at dataset level, have to match the scale properties, by setting `setId` method. This is especially needed if multi-axes charts are used:

```java
CartesianLinearAxis axis1 = new CartesianLinearAxis(chart);
axis1.setId("y-axis-1");
axis1.setPosition(Position.LEFT);
axis1.setDisplay(true);

CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
axis2.setId("y-axis-2");
axis2.setPosition(Position.RIGHT);
axis2.setDisplay(true);
axis2.getGrideLines().setDrawOnChartArea(false);

chart.getOptions().getScales().setYAxes(axis1, axis2);

LineDataset dataset1 = chart.newDataset();
dataset1.setLabel("dataset 1");
dataset1.setYAxisID("y-axis-1");

LineDataset dataset2 = chart.newDataset();
dataset2.setLabel("dataset 2");
dataset2.setYAxisID("y-axis-2");

chart.getData().setDatasets(dataset1, dataset2);
```

All cartesian axes could be created specifying the type (horizontal or vertical) at constructor level. See [CartesianAxisType](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CartesianAxisType.html) object which enumerates all possible values. 

CartesianAxisType contains:

 * **x** to set the axes as horizontal
 * **y** to set the axes as vertical
 
```java
CartesianLinearAxis axis1 = new CartesianLinearAxis(chart, CartesianAxisType.y);
```

Every cartesian axis has got own default type, as following:

| Type | Default Orientation
| -----| -------------------
| linear | CartesianAxisType.y
| logarithmic | CartesianAxisType.y
| category | CartesianAxisType.x
| time | CartesianAxisType.x  

## Tick

The following options are common to all cartesian axes but do not apply to other axes.

See [here](Axes#ticks) how manage ticks configuration.

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| autoSkip | boolean | `true` | If `true`, automatically calculates how many labels that can be shown and hides labels accordingly. Turn it off to show all labels no matter what
| autoSkipPadding | int | 0 | Padding between the ticks on the horizontal axis when `autoSkip` is enabled.
| labelOffset | int | 0 | Distance in pixels to offset the label from the centre point of the tick (in the y direction for the x axis, and the x direction for the y axis). 
| maxRotation | int | 90 | Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. *Note: Only applicable to horizontal scales.*
| minRotation | int | 0 | Minimum rotation for tick labels. *Note: Only applicable to horizontal scales.*
| mirror | boolean | `false` | Flips tick labels around axis, displaying the labels inside the chart instead of outside. *Note: Only applicable to vertical scales.*
| padding | int | 10 | Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.
| precision | int | 0 | If defined and stepSize is not specified, the step size will be rounded to this many decimal places.
| sampleSize | int | Integer.MIN_VALUE | the number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.

## ScaleLabel

When creating a chart, you want to tell the viewer what data they are viewing. To do this, you need to label the axis.

Cartesian axis defines [options](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianScaleLabel.html) for the scale title. Note that this only applies to cartesian axes. 

All cartesian axes are providing the capability to set and get the options, by the **set** and **get** methods, as following:

```java
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
axis.getScaleLabel().setFontSize(16);
axis.getScaleLabel().getFontSize();
```

Table with options:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| display | boolean | `false` | If `true`, display the axis title.
| labelString | String | `""` | The text for the title. 
| lineHeight | double - String | 1.2 | Height of an individual line of text.
| fontColor | String - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #666 | Font color for scale title.
| fontFamily | String | 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif | Font family for the scale title, follows CSS font-family options.
| fontSize | int | 12 | Font size for scale title.
| fontStyle | [FontStyle](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style for the scale title, follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).

### Padding

[Padding](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianPadding.html) to apply around scale labels. Only `top` and `bottom` are implemented.

```java
CartesianLinearAxis axis = new CartesianLinearAxis(chart);
axis.getScaleLabel().getPadding().setTop(10);
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| bottom | int | 4 | the padding bottom in pixel.
| left | int | 4 | the padding left in pixel.
| right | int | 4 | the padding right in pixel.
| top | int | 4 | the padding top in pixel.   