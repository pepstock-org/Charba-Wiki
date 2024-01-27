---
id: Api
title: Api
hide_title: true
sidebar_label: Api
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Chart API 

For each chart, there are a set of methods which are wrapping the [Chart.JS API](http://www.chartjs.org/docs/latest/developers/api.html). These are available on all charts created with **Charba**.

### draw

Use this to draw the chart instance that is created. 

```java
// draws a specific chart instance
chart.draw();
```

This method works with **drawOnAttach** options which can be used setting `true` to draw the chart when the chart has been attached to the parent GWT element.

### destroy

Use this to destroy any chart instances that are created. This will clean up any references stored within **Charba**, along with any associated event listeners attached.

```java
// destroys a specific chart instance
chart.destroy();
```

This method works with **destroyOnDetach** options which can be used setting `true` to destroy the chart when the chart has been detached from the parent GWT element.

### update

Triggers an update of the chart. This can be safely called after updating the data or options object. This will update all scales, legends, and then re-render the chart.

```java
// gets all datasets of chart
List<Dataset> datasets = chart.getData().getDatasets();
// updates the data of datasets
for (Dataset ds : datasets){
   ds.getData().add(getRandomDigit(negative));
}
// updates the chart
chart.update();
```

The update method can also be invoked providing a mode key or a mode configuration.

A [mode key](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/options/TransitionMode.html) can be provided to indicate what should be updated and what animation configuration should be used. 

```java
// creates a custom mode
TransitionMode mode = TransitionMode.create("myMode");
// creates an animation transitions configuration for my mode
AnimationTransition animationMode = chart.getOptions().getTransitions().create(mode);
// changes animation configuration setting duration to 10 seconds
animationMode.getAnimation().setDuration(10000);
// gets all datasets of chart
List<Dataset> datasets = chart.getData().getDatasets();
// updates the data of datasets
for (Dataset ds : datasets){
   ds.getData().add(getRandomDigit(negative));
}
// updates the chart using my mode
chart.update(mode);
```

The defaults modes are mapped in the [DefaultTransitionMode](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/enums/DefaultTransitionMode.html) enumeration and they are:

  * **ACTIVE** uses the animation configuration when an element is hovering
  * **HIDE** uses the animation configuration when a dataset is hidden (by using legend or [hide](#hide) method).
  * **RESET** uses the animation configuration when an element is resetting.
  * **RESIZE** uses the animation configuration when an element is resizing.
  * **SHOW** uses the animation configuration when a dataset is shown (by using legend or [show](#show) method).
  * **NONE** used to ignore any animation configuration.

```java
// gets all datasets of chart
List<Dataset> datasets = chart.getData().getDatasets();
// updates the data of datasets
for (Dataset ds : datasets){
   ds.getData().add(getRandomDigit(negative));
}
// updates the chart using "hide" mode
chart.update(DefaultTransitionMode.HIDE);
```

The update can be also invoke providing a specific animation configuration, created at runtime and not assigned to any mode.

A [configuration object](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/UpdateConfiguration.html) can be provided with additional configuration for the update process. This is useful when `update` is manually called inside an event handler and some different animation is desired.

Example:

```java
// creates an update configuration
UpdateConfiguration configuration = new UpdateConfiguration();
// sets easing and duration to 4 seconds
configuration.setEasing(Easing.EASE_IN_OUT_QUART);
configuration.setDuration(4000);
// updates the chart using my configuration
chart.update(configuration);
```

### reconfigure

To update the options changing the configuration at runtime, mutating the options property in place.

```java
// changes the title directly on chart options
chart.getOptions().getTitle().setText("new Title");
// reconfigures and updates the chart
chart.reconfigure();
```

The reconfigure method can also be invoked providing a mode key or a mode configuration.

A [mode key](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/options/IsAnimationModeKey.html) can be provided to indicate what should be updated and what animation configuration should be used. 

```java
// creates a custom mode
TransitionMode mode = TransitionMode.create("myMode");
// creates an animation transitions configuration for my mode
AnimationTransition animationMode = chart.getOptions().getTransitions().create(mode);
// changes animation configuration setting duration to 10 seconds
animationMode.getAnimation().setDuration(10000);
// changes the title directly on chart options
chart.getOptions().getTitle().setText("new Title");
// reconfigures and updates the chart using my mode
chart.reconfigure(mode);
```

The defaults modes are mapped in the [DefaultTransitionMode](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/enums/DefaultTransitionMode.html) enumeration and they are:

  * **ACTIVE** uses the animation configuration when an element is hovering
  * **HIDE** uses the animation configuration when a dataset is hidden (by using legend or [hide](#hide) method).
  * **RESET** uses the animation configuration when an element is resetting.
  * **RESIZE** uses the animation configuration when an element is resizing.
  * **SHOW** uses the animation configuration when a dataset is shown (by using legend or [show](#show) method).
  * **NONE** used to ignore any animation configuration.

```java
// changes the title directly on chart options
chart.getOptions().getTitle().setText("new Title");
// updates the chart using "hide" mode
chart.reconfigure(DefaultTransitionMode.HIDE);
```

The update can be also invoke providing a specific animation configuration, created at runtime and not assigned to any mode.

A [configuration object](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/UpdateConfiguration.html) can be provided with additional configuration for the update process. This is useful when `update` is manually called inside an event handler and some different animation is desired.

Example:

```java
// changes the title directly on chart options
chart.getOptions().getTitle().setText("new Title");
// creates an update configuration
UpdateConfiguration configuration = new UpdateConfiguration();
// sets easing and duration to 4 seconds
configuration.setEasing(Easing.EASE_IN_OUT_QUART);
configuration.setDuration(4000);
// reconfigures and updates the chart using my configuration
chart.reconfigure(configuration);
```

### reset

Resets the chart to it's state before the initial animation. A new animation can then be triggered using [update](#update).

```java
// resets the chart
chart.reset();
```

### render

Triggers a redraw of all chart elements. Note, this does not update elements for new data. Use [update](#update) in that case.

```java
// forces the chart rendering
chart.render();
```

### stop

Uses this to stop any current animation loop. This will pause the chart during any current animation frame. Call [render](#render) to re-animate.

```java
// stops the charts animation loop at its current frame
chart.stop();
```

### resize

Use this to manually resize the canvas element. This is run each time the canvas container is resized, but you can call this method manually if you change the size of the canvas nodes container element.


You can call `.resize()` with no parameters to have the chart take the size of its container element, or you can pass explicit dimensions.

```java
// resizes and redraws the chart to fill its container element
chart.resize();
// resizes and redraws the chart to a specific size (in pixels)
chart.resize(400, 200);
```

### clear

Will clear the chart canvas. Used extensively internally between animation frames, but you might find it useful.

```java
// clears the canvas that chart instance is drawn on
chart.clear();
```

### toBase64Image

Returns a base 64 encoded string of the chart  which containing a representation of the image in the different format and quality.

The method can accept the image format that you want by an [ImageMimeType](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/enums/ImageMimeType.html) instance and a number between 0 and 1 indicating the image quality to use for image formats that use lossy compression.

The default image type is in [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics) format and the default image quality is 0.92.

```java
// gets the PNG image of the chart and default quality
String image = chart.toBase64Image();
// gets the JPEG image of the chart and default quality
String imageJpeg = chart.toBase64Image(ImageMimeType.JPEG);
// gets the PNG image of the chart and maximum quality
String imagePngMaxQuality = chart.toBase64Image(ImageMimeType.PNG, 1);
// or
String imagePngMaxQuality1 = chart.toBase64Image(1);
```

### getDatasetItem

Looks for the dataset that matches the current index and returns that the dataset item.

The [dataset item](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/items/DatasetItem.html) will contain information about the dataset, depending on the chart type.

```java
// gets the dataset item at index 0
DatasetItem item = chart.getDatasetItem(0);
// uses the item 
if (item.isHidden() || !item.isVisible()){
   ...
   ...
}
```

### getDatasetAtEvent

Looks for the datasets that matches the position of the event and returns a list of dataset referencef.

The [dataset reference](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/items/DatasetReference.html) will contain information about indexes of dataset and the element which depends on the chart type.

```java
// gets the dataset references by event instance
List<DatasetReference> references = chart.getDatasetAtEvent(event);
// uses the references
for (DatasetReference reference : references){
   ...
   ...
}
```

### isDatasetVisible

Looks for the dataset if it's visible or not, selected by index. It returns `false` if index of out of range or if the dataset is hidden.

```java
// checks if the dataset at index 0 is visible
if (chart.isDatasetVisible(0)){
   ...
   ...
}
```

### getVisibleDatasetCount

Returns the amount of visible datasets on the chart. If chart is not initiated, it returns a [undefined value](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/items/Undefined.html#INTEGER).

```java
// gets the amount of visible datasets of chart
int amount = chart.getVisibleDatasetCount();
if (amount > 0){
   ...
   ...
}
```

### getSortedVisibleDatasetItems

Returns a list of all the dataset items in the order that they are drawn on the canvas that are not hidden.

```java
// gets the list of visible datasets of chart
List<DatasetItem> items = chart.getSortedVisibleDatasetItems();
// uses the items
for (DatasetItem item : items){
   ...
   ...
}
```

### setDatasetVisibility

Sets the visibility for a given dataset. This can be used to build a chart legend in HTML. During click on one of the HTML items, you can call `setDatasetVisibility` to change the appropriate dataset.

```java
// hides dataset at index 1
chart.setDatasetVisibility(1, false);
// chart now renders with dataset hidden
chart.update(); 
```

### toggleDataVisibility

Toggles the visibility of an item in all datasets. A dataset needs to explicitly support this feature for it to have an effect.

```java
// toggles the item in all datasets, at index 2
chart.toggleDataVisibility(2);
// chart now renders with item hidden
chart.update(); 
```

### isDataVisible

Returns the stored visibility state of an data index for all datasets. Set by [toggleDataVisibility](#toggledatavisibility). A dataset should use this method to determine if an item should not be visible.

```java
// checks if dataset 2 is visible
boolean visible = chart.isDataVisible(2);
```

### hide

If the data index is not specified, sets the visibility for the given dataset to `false`. Updates the chart and animates the dataset with [DefaultTransitionMode.HIDE](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/enums/DefaultTransitionMode.html#HIDE) mode.

```java
// hides dataset at index 1 and does 'hide' animation.
chart.hide(1);
```

If the data index is specified, sets the hidden flag of that element to `true`. Updates the chart and animates the dataset with [DefaultTransitionMode.HIDE](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/enums/DefaultTransitionMode.html#HIDE) mode.

```java
// hides data at index 1 of dataset at index 0 and does 'hide' animation.
chart.hide(0, 1);
```

### show

If the data index is not specified, sets the visibility for the given dataset to `true`. Updates the chart and animates the dataset with [DefaultTransitionMode.SHOW](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/enums/DefaultTransitionMode.html#SHOW) mode.

```java
// shows dataset at index 1 and does 'show' animation.
chart.show(1); 
```

If the data index is specified, sets the hidden flag of that element to `false`. Updates the chart and animates the dataset with [DefaultTransitionMode.SHOW](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/enums/DefaultTransitionMode.html#SHOW) mode.

```java
// shows data at index 1 of dataset at index 0 and does 'show' animation.
chart.show(0, 1); 
```

### Active elements

Sets the active (hovered) elements for the chart. You can create a list of [ActiveDatasetElement](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/items/ActiveDatasetElement.html) and set which dataset and/or data must be active, programmatically.

```java
// creates a active element for data set at index 0 and for data at index 2
ActiveDatasetElement active0 = new ActiveDatasetElement(0, 2);
// creates a active element for data set at index 1 and for data at index 2
ActiveDatasetElement active1 = new ActiveDatasetElement(1, 2);
// sets the elements
chart.setActiveElements(active0, active1);

chart.update();
```

<img src={useBaseUrl('/img/activeElements.png')} />

You can activate the tooltip programmatically. 

```java
// creates a active element for data set at index 0 and for data at index 2
ActiveDatasetElement active0 = new ActiveDatasetElement(0, 2);
// creates a active element for data set at index 1 and for data at index 2
ActiveDatasetElement active1 = new ActiveDatasetElement(1, 2);
// sets the elements
chart.setTooltipActiveElements(active0, active1);

chart.update();
```

For tooltip, you can also pass a point used to pass to the positioners. 

```java
// creates a active element for data set at index 0 and for data at index 2
ActiveDatasetElement active0 = new ActiveDatasetElement(0, 2);
// creates a active element for data set at index 1 and for data at index 2
ActiveDatasetElement active1 = new ActiveDatasetElement(1, 2);
// create a point
Point point = new Point(200, 200);
// sets the point and elements
chart.setTooltipActiveElements(point, active0, active1);

chart.update();
```

To reset the existing active elements, you can invoke as following:

```java
// resets the elements
chart.resetActiveElements();
// resets the tooltip's elements 
chart.resetTooltipActiveElements();

chart.update();
```

## Extended chart API 

For each chart, there are a set of methods which are available on all charts created with **Charba**.

#### isInitialized()

Provides `true` if [Chart.JS](http://www.chartjs.org/) chart instance has been initialized, otherwise `false`.

#### getId()

Returns the unique ID assigned to the chart which is set to DOM [DIV element](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Div.html). This is NOT the same id property, used by [Chart.JS](http://www.chartjs.org/).

#### getCanvas()

Provides the DOM [CANVAS element](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Canvas.html) instance used by [Chart.JS](http://www.chartjs.org/) to draw the chart. This is helpful when a plugin or controller is created to work directly on the canvas.

#### getChartElement()

Provides the the object's underlying DOM [DIV element](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/dom/elements/Div.html) used by **Charba** to wrap the chart.

#### getNode()

Provides an object which maps all [Chart.JS](http://www.chartjs.org/) internal objects used at runtime to draw and manage the chart. This is helpful when a plugin or controller is created to work directly on the canvas. The root object is mapped by [ChartNode](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/ChartNode.html) class.

#### getBaseType()

Provides the type which has been extended when a chart is a controller implementation. In case the chart is not a controller implementation, it will return the original type, if the controller is not extending any existing type, it will return `null`. 

#### getDefaultChartOptions()

Provides the default options created based on chart type of the chart instance.

#### getWholeOptions()

Provides the default options by a chart instance, merging global, chart type global and chart options.

## Chart life cycle

It could be helpful to listen when the life-cycle of charts instances is changing, without activating a plugin to all charts, avoiding that someone can activate or deactivate the plugins, programmatically.

For this reason, a life cycle listener interface has been implemented in order to be able to catch when a chart has been created and/or destroy, and when is configured.

The interface [ChartsLifecycleListener](https://pepstock-org.github.io/Charba/6.4/org/pepstock/charba/client/ChartsLifecycleListener.html) is the following:

```java
/**
 * Called before initializing 'chart'.
 * 
 * @param chart the chart instance.
 */
default void onBeforeInit(IsChart chart) {
	// your logic
}

/**
 * Called after 'chart' has been initialized.
 * 
 * @param chart the chart instance.
 */
default void onAfterInit(IsChart chart) {
	// your logic
}

/**
 * Called before configuring 'chart'.
 * 
 * @param chart the chart instance.
 */
default void onBeforeConfigure(IsChart chart) {
	// your logic
}

/**
 * Called after 'chart' has been configured.
 * 
 * @param chart the chart instance.
 */
default void onAfterConfigure(IsChart chart) {
	// your logic
}

/**
 * Called before the chart has been destroyed.
 * 
 * @param chart the chart instance.
 */
default void onBeforeDestroy(IsChart chart) {
	// do nothing
}

/**
 * Called after the chart has been destroyed.
 * 
 * @param chart the chart instance.
 */
default void onAfterDestroy(IsChart chart) {
	// do nothing
}
```

To enable the life cycle listener, you must add the listener instance as following:

```java
// creates a listener
ChartsLifecycleListener listener = new ChartsLifecycleListener(){

	@Override
	public void onBeforeConfigure(IsChart chart){
		// my logic
	}

};
// Charts object contains all live charts instances
// adds new listener
Charts.addLifecycleListener(listener);
// removes existing listener
Charts.removeLifecycleListener(listener); 
```
