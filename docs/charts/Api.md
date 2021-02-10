---
id: Api
title: Api
hide_title: true
sidebar_label: API
---
## Chart API 

For each chart, there are a set of methods which are wrapping the [Chart.JS API](http://www.chartjs.org/docs/latest/developers/api.html). These are available on all charts created with **Charba**.

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

#### update(mode)

Triggers an update of the chart. This can be safely called after updating the data or options object. This will update all scales, legends, and then re-render the chart.

```java
List<Dataset> datasets = chart.getData().getDatasets();
for (Dataset ds : datasets){
   ds.getData().add(getRandomDigit(negative));
}
chart.update();
```

The update method can also be invoked providing a mode key or a mode configuration.

A [mode key](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/IsAnimationModeKey.html) can be provided to indicate what should be updated and what animation configuration should be used. 

The defaults mode are mapped in the [DefaultAnimationModeKey](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultAnimationModeKey.html) enumeration and they are:

  * **ACTIVE** uses the animation configuration when an element is hovering
  * **HIDE** uses the animation configuration when a dataset is hidden (by using legend or [hide](Api#hidedatasetindex) method).
  * **RESET** uses the animation configuration when an element is resetting.
  * **RESIZE** uses the animation configuration when an element is resizing.
  * **SHOW** uses the animation configuration when a dataset is shown (by using legend or [show](Api#showdatasetindex) method).
  * **NONE** used to ignore any animation configuration.

```java
List<Dataset> datasets = chart.getData().getDatasets();
for (Dataset ds : datasets){
   ds.getData().add(getRandomDigit(negative));
}
chart.update(DefaultAnimationModeKey.HIDE);
```

The update can be also invoke providing a specific animation configuration, created at runtime and not assigned to any mode.

A [configuration object](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/UpdateConfiguration.html) can be provided with additional configuration for the update process. This is useful when `update` is manually called inside an event handler and some different animation is desired.

Example:

```java
UpdateConfiguration config = new UpdateConfiguration();
config.setEasing(Easing.EASE_IN_OUT_QUART);
config.setDuration(4000);
...
chart.update(config);
```

#### reconfigure(mode)

To update the options changing the configuration at runtime, mutating the options property in place.

```java
// change the title directly on chart options
chart.getOptions().getTitle().setText("new Title");
chart.reconfigure();
```

The reconfigure method can also be invoked providing a mode key or a mode configuration.

A [mode key](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/IsAnimationModeKey.html) can be provided to indicate what should be updated and what animation configuration should be used. 

The defaults mode are mapped in the [DefaultAnimationModeKey](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultAnimationModeKey.html) enumeration and they are:

  * **ACTIVE** uses the animation configuration when an element is hovering
  * **HIDE** uses the animation configuration when a dataset is hidden (by using legend or [hide](Api#hidedatasetindex) method).
  * **RESET** uses the animation configuration when an element is resetting.
  * **RESIZE** uses the animation configuration when an element is resizing.
  * **SHOW** uses the animation configuration when a dataset is shown (by using legend or [show](Api#showdatasetindex) method).
  * **NONE** used to ignore any animation configuration.

```java
// change the title directly on chart options
chart.getOptions().getTitle().setText("new Title");
chart.reconfigure(DefaultAnimationModeKey.HIDE);
```

The update can be also invoke providing a specific animation configuration, created at runtime and not assigned to any mode.

A [configuration object](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/UpdateConfiguration.html) can be provided with additional configuration for the update process. This is useful when `update` is manually called inside an event handler and some different animation is desired.

Example:

```java
// change the title directly on chart options
chart.getOptions().getTitle().setText("new Title");

UpdateConfiguration config = new UpdateConfiguration();
config.setEasing(Easing.EASE_IN_OUT_QUART);
config.setDuration(4000);
...
chart.reconfigure(config);
```

#### reset()

Resets the chart to it's state before the initial animation. A new animation can then be triggered using [update](Introduction#updatemode).

```java
chart.reset();
```

#### render()

Triggers a redraw of all chart elements. Note, this does not update elements for new data. Use [update](Introduction#updatemode) in that case.

```java
chart.render();
```

#### stop()

Uses this to stop any current animation loop. This will pause the chart during any current animation frame. Call [render](Introduction#render) to re-animate.

```java
// Stops the charts animation loop at its current frame
chart.stop();
```

#### resize(width, height)

Use this to manually resize the canvas element. This is run each time the canvas container is resized, but you can call this method manually if you change the size of the canvas nodes container element.


You can call `.resize()` with no parameters to have the chart take the size of its container element, or you can pass explicit dimensions.

```java
// Resizes & redraws to fill its container element
chart.resize();
// Resizes & redraws to a specific size (in pixels)
chart.resize(400, 200);
```

#### clear()

Will clear the chart canvas. Used extensively internally between animation frames, but you might find it useful.

```java
// Will clear the canvas that chart instance is drawn on
chart.clear();
```

#### toBase64Image()

Returns a base 64 encoded string of the chart in it's current state.

```java
String image = chart.toBase64Image();
```

#### getDatasetItem(index)

Looks for the dataset that matches the current index and returns that the dataset item.

The [dataset item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DatasetItem.html) will contain information about the dataset, depending on the chart type.

```java
DatasetItem item = chart.getDatasetItem(0);
if (item.isHidden() || !item.isVisible()){
   ...
   ...
}
```

#### getDatasetAtEvent(event)

Looks for the datasets that matches the position of the event and returns a list of dataset referencef.

The [dataset reference](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DatasetReference.html) will contain information about indexes of dataset and the element which depends on the chart type.

```java
List<DatasetReference> references = chart.getDatasetAtEvent(event);
for (DatasetReference reference : references){
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

Returns the amount of visible datasets on the chart. If chart is not initiated, it returns a [undefined value](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/UndefinedValues.html#INTEGER).

```java
int amount = chart.getVisibleDatasetCount();
if (amount > 0){
   ...
   ...
}
```

#### setDatasetVisibility(datasetIndex, visibility)

Sets the visibility for a given dataset. This can be used to build a chart legend in HTML. During click on one of the HTML items, you can call `setDatasetVisibility` to change the appropriate dataset.

```java
// hides dataset at index 1
chart.setDatasetVisibility(1, false);
// chart now renders with dataset hidden
chart.update(); 
```

#### toggleDataVisibility(index)

Toggles the visibility of an item in all datasets. A dataset needs to explicitly support this feature for it to have an effect.

```java
// toggles the item in all datasets, at index 2
chart.toggleDataVisibility(2);
// chart now renders with item hidden
chart.update(); 
```

#### isDataVisible(index)

Returns the stored visibility state of an data index for all datasets. Set by [toggleDataVisibility](Introduction#toggledatavisibilityindex). A dataset should use this method to determine if an item should not be visible.

```java
boolean visible = chart.isDataVisible(2);
```

#### hide(datasetIndex)

Sets the visibility for the given dataset to `false`. Updates the chart and animates the dataset with `[hide](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultAnimationModeKey.html#HIDE)` mode. This animation can be configured under the `[hide](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultAnimationModeKey.html#HIDE)` key in animation options.

```java
// hides dataset at index 1 and does 'hide' animation.
chart.hide(1);
```

#### show(datasetIndex)

Sets the visibility for the given dataset to `true`. Updates the chart and animates the dataset with `[show](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultAnimationModeKey.html#SHOW)` mode. This animation can be configured under the `[show](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultAnimationModeKey.html#SHOW)` key in animation options.

```java
// shows dataset at index 1 and does 'show' animation.
chart.show(1); 
```

## Extended chart API 

For each chart, there are a set of methods which are available on all charts created with **Charba**.

#### isInitialized()

Provides `true` if [Chart.JS](http://www.chartjs.org/) chart instance has been initialized, otherwise `false`.

#### getId()

Returns the unique ID assigned to the chart which is set to DOM [DIV element](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html). This is NOT the same id property, used by [Chart.JS](http://www.chartjs.org/).

#### getCanvas()

Provides the DOM [CANVAS element](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Canvas.html) instance used by [Chart.JS](http://www.chartjs.org/) to draw the chart. This is helpful when a plugin or controller is created to work directly on the canvas.

#### getChartElement()

Provides the the object's underlying DOM [DIV element](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Div.html) used by **Charba** to wrap the chart.

#### getNode()

Provides an object which maps all [Chart.JS](http://www.chartjs.org/) internal objects used at runtime to draw and manage the chart. This is helpful when a plugin or controller is created to work directly on the canvas. The root object is mapped by [ChartNode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/ChartNode.html) class.

#### getBaseType()

Provides the type which has been extended when a chart is a controller implementation. In case the chart is not a controller implementation, it will return the original type, if the controller is not extending any existing type, it will return `null`. 

#### getDefaultChartOptions()

Provides the default options created based on chart type of the chart instance.

#### getWholeOptions()

Provides the default options by a chart instance, merging global, chart type global and chart options.

## Chart life cycle

It could be helpful to listen when the life-cycle of charts instances is changing, without activating a plugin to all charts, avoiding that someone can activate or deactivate the plugins, programmatically.

For this reason, a life cyle listener interface has been implemented in order to be able to catch when a chart has been created and/or destroy, and when is configured.

The interface [ChartsLifecycleListener](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/ChartsLifecycleListener.html) is the following:

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

To help the implementation of this interface, an abstract class ([AbstractChartsLifecycleListener](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/AbstractChartsLifecycleListener.html)) is provided which implements all methods doing nothing and then you can implement only the methods where you are interested in.

To enable the life cycle listener, you must add the listener instance as following:

```java
// create a listener
ChartsLifecycleListener listener = new AbstractChartsLifecycleListener() {

	@Override
	public void onBeforeConfigure(IsChart chart){
		// my logic
	}

};
// Charts object contains all live charts instances
// add new listener
Charts.addLifecycleListener(listener);
// remove existing listener
Charts.removeLifecycleListener(listener); 
```
