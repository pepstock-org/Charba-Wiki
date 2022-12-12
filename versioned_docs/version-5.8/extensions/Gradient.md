---
id: Gradient
title: Gradient plugin
hide_title: true
sidebar_label: Gradient
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Gradient plugin

**Charba** provides out of the box the feature to enable [Gradient](https://github.com/kurkle/chartjs-plugin-gradient) which is a light weight plugin to apply gradients to the datasets by data values.

<img src={useBaseUrl('/img/gradient.png')} />

## Activation

The gradient plugin is injected directly in the document.

The plugin ID is a constant everywhere available, `GradientPlugin.ID`, in [GradientPlugin](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/gradient/GradientPlugin.html) entry point.

This plugin registers itself globally, meaning that once injected, all charts will enable zooming. In case you want it enabled only for a few charts, you can enable it as following:

```java
// --------------------------------------
// enabling the plugin without any parameter
// the plugin is NOT registered to all charts
// --------------------------------------
GradientPlugin.enable();

// --------------------------------------
// enabling the plugin with `true` parameter
// the plugin is registered to all charts
// --------------------------------------
GradientPlugin.enable(true);
```

To activate the plugin in a specific chart, it's enough to provide the configuration options (see [below](#configuration)) to the datasets, which should be rendered by the gradient, or enabling it by:

```java
// --------------------------------------
// ENABLING the plugin to a chart instance 
// storing a plugin options 
// --------------------------------------
// creates chart
LineChart chart = new LineChart();
// creates dataset
LineDataset dataset = chart.newDataset();
// creates a plugin options
GradientOptions options = new GradientOptions();
// gets background color property options
PropertyOptions propOptions = options.getBackgroundColor();
// sets axis kind to apply gradient
propOptions.setAxis(AxisKind.Y);
// gets colors 
Colors stopColors = propOptions.getColors();
// sets color at different data value
stopColors.setColor(0, HtmlColor.GREEN);
stopColors.setColor(50, HtmlColor.YELLOW);
stopColors.setColor(100, HtmlColor.RED);
// sets plugin options to dataset
dataset.setOptions(options);
```

## Configuration

The plugin options can be changed at only at dataset level by `dataset.setOptions` method.
  
The configuration class [GradientOptions](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/gradient/GradientOptions.html) contains all properties needed to configure the plugin.

The complete options are described by following table:

| Name | Type | Description
| :- | :- | :-----
| backgroundColor | [PropertyOptions](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/gradient/PropertyOptions.html) | Sets the gradient as background color of the dataset.
| borderColor | [PropertyOptions](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/gradient/PropertyOptions.html) | Sets the gradient as border color of the dataset. 
| hoverBackgroundColor | [PropertyOptions](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/gradient/PropertyOptions.html) |  Sets the gradient as background color of the dataset, when hovered.
| hoverBorderColor | [PropertyOptions](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/gradient/PropertyOptions.html) |  Sets the gradient as border color of the dataset, when hovered.
| pointBackgroundColor | [PropertyOptions](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/gradient/PropertyOptions.html) |  Sets the gradient as background color of the points of the dataset.
| pointBorderColor | [PropertyOptions](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/gradient/PropertyOptions.html) | Sets the gradient as border color of the points of the dataset.
| pointHoverBackgroundColor | [PropertyOptions](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/gradient/PropertyOptions.html) | Sets the gradient as background color of the points of the dataset, when hovered.
| pointHoverBorderColor | [PropertyOptions](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/gradient/PropertyOptions.html) | Sets the gradient as border color of the points of the dataset, when hovered

## Property options

The property option enables the configuration of the gradient, like the orientation, based on the axis related to the dataset, and the colors for a specific dataset option. 

```java
// creates a plugin options
GradientOptions options = new GradientOptions();
// gets background color property options
PropertyOptions propOptions = options.getBackgroundColor();
// sets axis kind to apply gradient
propOptions.setAxis(AxisKind.Y);
```

The complete options are described by following table:

| Name | Type | Description
| :- | :- | :-
| axis | [AxisKind](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/enums/AxisKind.html) | The axis to use for applying the gradient to the dataset.
| colors | [Colors](https://pepstock-org.github.io/Charba/5.8/org/pepstock/charba/client/gradient/Colors.html) | Sets the colors to composed the gradient

<img src={useBaseUrl('/img/rGradient.png')} />

## Colors

The colors option enables to adds color stop, defined by a data value and a color, to a given canvas gradient. 

```java
// creates a plugin options
GradientOptions options = new GradientOptions();
// gets background color property options
PropertyOptions propOptions = options.getBackgroundColor();
// sets axis kind to apply gradient
propOptions.setAxis(AxisKind.Y);
// gets colors 
Colors stopColors = propOptions.getColors();
// sets color at different data value
stopColors.setColor(0, HtmlColor.GREEN);
stopColors.setColor(50, HtmlColor.YELLOW);
stopColors.setColor(100, HtmlColor.RED);
```

The colors stop data value can be a String, double or a date, related to the axis defined to be used for gradient creation.
