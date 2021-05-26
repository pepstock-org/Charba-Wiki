---
id: Charts
title: Chart introduction
hide_title: true
sidebar_label: Introduction
---
## Introduction

Every **Charba** chart has got a common structure to define own configuration.

There 3 main sections:

  1. **Type** which represents the chart type. See [Type](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/Type.html) and [ChartType](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/ChartType.html) enumeration, with all available chart types out of the box. By controllers, you can create own charts and different types.
  2. **Data** which represents the data which must be showed by the chart. This part contains the [datasets](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/Dataset.html) with data and configuration how data should be showed and the labels for each dataset and data. See [Data](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/package-summary.html) element.
  3. **Options** which represents a set of options to configure the chart. See [Options](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/package-summary.html).
  
## Usage 

A **Charba** chart extends always [AbstractChart](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/AbstractChart.html) which wraps a DOM [DIV element](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html) and implements [IsChart](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/IsChart.html) interface which is passed to callbacks, events handlers, plugins and all other customization items.

Programmatically, you could implement a chart as following:

```java
   ...
   LineChart chart = new LineChart();
   component.add(chart);
   ...
   // example with Elemental2
   Element elem = chart.getChartElement().as();
   DomGlobal.document.body.appendChild(elel);
```

## Usage by widget (only GWT artifact)

A **Charba** chart widget for GWT extends always [AbstractChartWidget](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/gwt/widgets/AbstractChartWidget.html) which is a [GWT SimplePanel](http://www.gwtproject.org/javadoc/latest/com/google/gwt/user/client/ui/SimplePanel.html) and implements [IsChart](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/IsChart.html) interface which is passed to callbacks, events handlers, plugins and all other customization items.

The charts can be implemented leveraging on [UIBinder](http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html) feature of GWT or also programmatically.  

Using as example a Line chart, here is an example how to include it into a UIBinder file (be sure to have into your classpath the `charba-[version.release]-gwt.jar` file):

```xml
<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
   xmlns:g="urn:import:com.google.gwt.user.client.ui"
   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">

   <g:HTMLPanel  width="100%">
      ....
      <c:LineChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

Into GWT component related to UIbinder definition, we could reference it as following:

```java
   ...
   @UiField
   LineChartWidget chart;
   ...
```
Programmatically, you could implement a chart as following:

```java
   ...
   LineChartWidget chart = new LineChartWidget();
   component.add(chart);
   ...
```

## Callbacks on datasets options

Scriptable options at dataset level accept a callback which is called for each of the underlying data values and that takes 2 arguments, [ScriptableContext](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/ScriptableContext.html) representing contextual information and the chart instance. Many of datasets properties can be set at runtime by this way, using the data of dataset if the configuration must be changed depending on them.

Example:

```java
LineDataset dataset = chart.newDataset();
dataset.setBackgroundColor(new BackgroundColorCallback() {

	@Override
	public IsColor invoke(IsChart chart, ScriptableContext context) {
		return HtmlColor.PINK;
	}

});
```

## Option Context

The option context is used to give contextual information when resolving options. It applies to all scriptable options and their callbacks.

The context object contains the following properties:

| Name | Type |  Description
| ---- | ---- | ----
| datasetIndex | int | index of the associated dataset
| index | int | index of the associated data
| active | boolean | Whether the associated element is hovered, default is `false`. It maps also the property `hover` when the options context is provided by [Chart.JS](https://www.chartjs.org/docs/2.9.4/general/options.html#option-context) for scriptable options.

## Chart.JS API 

For each chart, there are a set of methods which are wrapping the [Chart.JS API](http://www.chartjs.org/docs/2.9.4/developers/api.html). These are available on all charts created with **Charba**.

#### draw()

Use this to draw the chart instance that is created. 

```java
// Draws a specific chart instance
chart.draw();
```

This method works with **drawOnAttach** options which can be used setting `true` to draw the chart when the chart has been attached to the parent GWT element.

#### destroy()

Use this to destroy any chart instances that are created. This will clean up any references stored within **Charba**, along with any associated event listeners attached.

```java
// Destroys a specific chart instance
chart.destroy();
```

This method works with **destroyOnDetach** options which can be used setting `true` to destroy the chart when the chart has been detached from the parent GWT element.

#### update(config)

Triggers an update of the chart. This can be safely called after updating the data or options object. This will update all scales, legends, and then re-render the chart.

```java
// duration is the time for the animation of the redraw in milliseconds
// lazy is a boolean. if `true`, the animation can be interrupted by other animations
List<Dataset> datasets = chart.getData().getDatasets();
for (Dataset ds : datasets){
   ds.getData().add(getRandomDigit(negative));
}
chart.update();
```

A [configuration object](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/UpdateConfiguration.html) can be provided with additional configuration for the update process. This is useful when `update` is manually called inside an event handler and some different animation is desired.

The following properties are supported:

* **duration** (integer): Time for the animation of the redraw in milliseconds
* **lazy** (boolean): If `true`, the animation can be interrupted by other animations
* **easing** ([Easing](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/Easing.html)): The animation easing function.

Example:

```java
UpdateConfiguration config = new UpdateConfiguration();
config.setEasing(Easing.EASE_IN_OUT_QUART);
config.setDuration(4000);
...
chart.update(config);
```

#### reconfigure(config)

To update the options, mutating the options property in place, other option properties would be preserved, including those calculated by Chart.js.

```java
// change the title directly on chart options
chart.getOptions().getTitle().setText("new Title");
chart.reconfigure();
```

A [configuration object](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/UpdateConfiguration.html) can be provided with additional configuration for the update process. This is useful when `updateOptions` is manually called inside an event handler and some different animation is desired.

```java
UpdateConfiguration config = new UpdateConfiguration();
config.setDuration(0);
...
// change the title directly on chart options
chart.getOptions().getTitle().setText("new Title");
chart.reconfigure(config);
```

#### reset()

Resets the chart to it's state before the initial animation. A new animation can then be triggered using `update`.

```java
chart.reset();
```

#### render(config)

Triggers a redraw of all chart elements. Note, this does not update elements for new data. Use `.update()` in that case.

See `.update(config)` for more details on the [configuration object](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/UpdateConfiguration.html).

```java
UpdateConfiguration config = new UpdateConfiguration();
config.setEasing(Easing.EASE_IN_OUT_QUART);
config.setDuration(4000);

chart.render(config);
```

#### stop()

Uses this to stop any current animation loop. This will pause the chart during any current animation frame. Call `.render()` to re-animate.

```java
// Stops the charts animation loop at its current frame
chart.stop();
```

#### resize()

Uses this to manually resize the chart. This is run each time the chart container is resized, but you can call this method manually if you change the size.

```java
// Resizes & redraws to fill its container element
chart.resize();
```

#### clear()

Will clear the chart canvas. Used extensively internally between animation frames, but you might find it useful.

```java
// Will clear the canvas that myLineChart is drawn on
chart.clear();
```

#### toBase64Image()

Returns a base 64 encoded string of the chart in it's current state.

```java
String image = chart.toBase64Image();
```

#### generateLegend()

Returns an HTML string of a legend for that chart. The legend is generated from the `legendCallback` in the options (if implemented).

```java
String legend = chart.generateLegend();
```

#### getDatasetMeta(index)

Looks for the dataset that matches the current index and returns that metadata.

The [metadata](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/items/DatasetMetaItem.html) will contain information about the dataset, depending on the chart type.

```java
DatasetMetaItem meta = chart.getDatasetMeta(0);
if (meta.isHidden()){
   ...
   ...
}
```

#### getDatasetAtEvent(event)

Looks for the dataset that matches the position of the event and returns that metadata.

The [metadata](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/items/DatasetMetaItem.html) will contain information about dataset, depending on the chart type.

```java
DatasetMetaItem meta = chart.getDatasetAtEvent(event);
if (meta != null && meta.isHidden()){
   ...
   ...
}
```

#### isDatasetVisible(index)

Looks for the dataset if it's visible or not, selected by index. It returns `false` if index of out of range or if the dataset is hidden.

```java
if (chart.isDatasetVisible(0)){
   ...
   ...
}
```

#### getVisibleDatasetCount()

Returns the amount of visible datasets on the chart. If chart is not initiated, it returns a [undefined value](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/items/UndefinedValues.html#INTEGER).

```java
int amount = chart.getVisibleDatasetCount();
if (amount > 0){
   ...
   ...
}
```

## CHARBA chart API 

For each chart, there are a set of methods which are available on all charts created with **Charba**.

#### isInitialized()

Provides `true` if [Chart.JS](http://www.chartjs.org/) chart instance has been initialized, otherwise `false`.

#### getId()

Returns the unique ID assigned to the chart which is set to DOM [DIV element](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html). This is NOT the same id property, used by [Chart.JS](http://www.chartjs.org/).

#### getCanvas()

Provides the DOM [CANVAS element](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Canvas.html) instance used by [Chart.JS](http://www.chartjs.org/) to draw the chart. This is helpful when a plugin or controller is created to work directly on the canvas.

#### getChartElement()

Provides the the object's underlying DOM [DIV element](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html) used by **Charba** to wrap the chart.

#### getNode()

Provides an object which maps all [Chart.JS](http://www.chartjs.org/) internal objects used at runtime to draw and manage the chart. This is helpful when a plugin or controller is created to work directly on the canvas. The root object is mapped by [ChartNode](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/ChartNode.html) class.

#### getBaseType()

Provides the type which has been extended when a chart is a controller implementation. In case the chart is not a controller implementation, it will return the original type, if the controller is not extending any existing type, it will return `null`. 

#### getDefaultChartOptions()

Provides the default options created based on chart type of the chart instance.

#### getWholeOptions()

Provides the default options by a chart instance, merging global, chart type global and chart options.

## Chart life cycle

It could be helpful to listen when the life cycle of charts instances is changing, without activating a plugin to all charts, avoiding that someone can activate or deactivate the plugins, programmatically.

For this reason, a life cycle listener interface has been implemented in order to be able to catch when a chart has been created and/or destroy, and when is configured.

The interface [ChartsLifecycleListener](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/ChartsLifecycleListener.html) is the following:

```java
/**
 * Called before initializing 'chart'.
 * 
 * @param chart the chart instance.
 */
void onBeforeInit(IsChart chart);

/**
 * Called after 'chart' has been initialized and before the first update.
 * 
 * @param chart the chart instance.
 */
void onAfterInit(IsChart chart);

/**
 * Called before configuring 'chart'.
 * 
 * @param chart the chart instance.
 */
void onBeforeConfigure(IsChart chart);

/**
 * Called after 'chart' has been configured.
 * 
 * @param chart the chart instance.
 */
void onAfterConfigure(IsChart chart);

/**
 * Called before the chart as been destroyed.
 * 
 * @param chart the chart instance.
 */
void onBeforeDestroy(IsChart chart);

/**
 * Called after the chart as been destroyed.
 * 
 * @param chart the chart instance.
 */
void onAfterDestroy(IsChart chart);
```

To help the implementation of this interface, an abstract class ([AbstractChartsLifecycleListener](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/AbstractChartsLifecycleListener.html)) is provided which implements all methods doing nothing and then you can implement only the methods where you are interested in.

To enable the life cycle listener, you must add the listener instance as following:

```java
// Charts object contains all live charts instances
// add new listener
Charts.addLifecycleListener(listener);
// remove existing listener
Charts.removeLifecycleListener(listener); 
```
