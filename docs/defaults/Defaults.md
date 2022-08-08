---
id: Defaults
title: Defaults options
hide_title: true
sidebar_label: Using defaults
---
## Using defaults

The options are used to change how the chart behaves. There are properties to control styling, fonts, the legend, etc.

This concept is allowing for changing options globally across chart types, using chart type defaults and scales defaults appropriately, avoiding the need to specify options for each instance, or the default for a particular chart type.

**Charba** doesn't merge the options object but delegates [Chart.JS](http://www.chartjs.org/) to do it which merges the option object passed to the chart with the global configuration.

In this way you can be as specific as you would like in your individual chart configuration, while still changing the defaults for all chart types where applicable. 

There are 4 main defaults entities that you can manage to configure your charts, at global level:
  
  1. [Global](#global): global options, containing the configuration items which can be applied to all charts, whatever type of chart. Scale configuration is excluded.
  1. [Chart option](#charts-type): global options related to a specific type of chart, containing both options and scales configuration.
  1. [Scale](#scales): global options related to scale, containing the configuration items which can be applied to all charts (with scales), whatever type of chart.
  1. [Scale type](#scales-type): global options related to a specific [type](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/AxisType.htmll) of scale which can be applied to all charts which are using that type of scale.

**Charba** is providing a singleton [Defaults](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/Defaults.html) which allows you to manage all defaults entities above mentioned.

:::info
It's not possible to apply any callbacks or any events handlers at global level, but only on at chart instance one.
:::

## Global

To change the global options, **Charba** is providing the method `getGlobal` in the [Defaults](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/Defaults.html) class. These options will be applied to all charts, whatever type of chart.

With above method you can get all global configurations of [Chart.JS](http://www.chartjs.org/) and you have got all `set` and `get` methods to change or retrieve the global configuration items.

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().setResponsive(false);
Defaults.get().getGlobal().setMaintainAspectRatio(true);

double circumference = Defaults.get().getGlobal().getCircumference();
```

## Charts type

To change the global options for a specific chart type, **Charba** is providing the method `getOptions` in the [Defaults](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/Defaults.html) class.

With this method you can get all global configurations for a specific chart of [Chart.JS](http://www.chartjs.org/) and you have got all `set` and `get` methods to change or retrieve the global configuration items.

The chart type are defined in a enumeration, [ChartType](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/ChartType.html) but, by controllers, you can create your chart type, therefore the method will accept a [Type](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/Type.html) object.

```java
// --------------------------------------
// GLOBAL options for specific chart type
// --------------------------------------
Defaults.get().getOptions(ChartType.LINE).setResponsive(false);
Defaults.get().getOptions(ChartType.LINE).setMaintainAspectRatio(true);

double circumference = Defaults.get().getOptions(ChartType.LINE).getCircumference();

Defaults.get().getOptions(ChartType.LINE).getElements().getPoint().setPointStyle(PointStyle.RECT);
```

## Scales

To change the global scale, **Charba** is providing the method `getScale` in the [defaults](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/Defaults.html).

With this method you can get all global configuration of [Chart.JS](http://www.chartjs.org/) for [scale](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/GlobalScale.html) (common one, not related to chart type) and you have got all `set` and `get` methods to change or retrieve the global configuration items.

```java
// --------------------------------------
// GLOBAL, for all scales (whatever type)
// --------------------------------------
Defaults.get().getScale().setStacked(true);
```

## Scales type

To change the global scale for a specific scale type, **Charba** is providing the method `getScale` in the [Defaults](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/Defaults.html) class, passing the [type](https://pepstock-org.github.io/Charba/5.5/org/pepstock/charba/client/configuration/AxisType.html) of the scale.

With this method you can get all global configurations for a specific type of scale and you have got all `set` and `get` methods to change or retrieve the global configuration items.

```java
// --------------------------------------
// GLOBAL options for specific scale type
// --------------------------------------
Defaults.get().getScale(ChartAxisType.LINEAR).setDisaply(false);
Defaults.get().getScale(ChartAxisType.LINEAR).setBeginAtZero(true);
```

## Methods

The default singleton instance provides a set of helpful methods to invoke default behavior of [Chart.JS](http://www.chartjs.org/), helpful methods when a callback is implemented and you want to perform a normal behavior.


```java
public class MyLegendClickEventHandler implements LegendClickEventHandler {

	@Override
	public void onClick(LegendClickEvent event){
		// invokes default click callback
		Defaults.get().invokeLegendOnClick(event);
	}
```

| Name | Scope | Description
| :- | :- | :-  
| **invokeChartOnClick** | Chart | This method invokes the default `onClick` implementation on a chart, if there is.
| **invokeChartOnHover** | Chart | This method invokes the default `onHover` implementation on a chart, if there is.
| **generateLabels** | Legend | This method will provide the default legend items of a chart.
| **invokeLegendOnClick** | Legend | This method invokes the default `onClick` implementation on a legend of a chart, if there is.
| **invokeLegendOnHover** | Legend | This method invokes the default `onHover` implementation on a legend of a chart, if there is.
| **invokeLegendOnLeave** | Legend | This method invokes the default `onLeave` implementation on a legend of a chart, if there is.
| **invokeTooltipsCallbackOnTitle** | Tooltip | This method invokes the default implementation on a tooltip of a chart to get the title text of the tooltip.
| **invokeTooltipsCallbackOnLabel** | Tooltip | This method invokes the default implementation on a tooltip of a chart to get an individual item in the tooltip.
| **invokeTooltipsCallbackOnLabelColor** | Tooltip | This method invokes the default implementation on a tooltip of a chart to get the color of an individual item in the tooltip.
| **invokeTooltipsCallbackOnLabelPointStyle** | Tooltip | This method invokes the default implementation on a tooltip of a chart to get the point style of an individual item in the tooltip.
