---
id: Zoom
title: Zoom plugin
hide_title: true
sidebar_label: Zoom
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Zoom plugin

**Charba** provides out of the box the feature to enable [Zoom](https://github.com/chartjs/chartjs-plugin-zoom) which is a light weight plugin to zoom and pan a chart.

The plugin is providing 2 main actions to apply on a chart:

  * **panning**, which refers to the horizontal or vertical scrolling of a chart wider than the display, can be done via the mouse or with a finger
  * **zooming**, which maintains focus when the chart size changes, is done via the mouse wheel or via a pinch gesture
  
[Hammer.JS](https://github.com/hammerjs/hammer.js) javaScript library is used for gesture recognition.

<img src={useBaseUrl('/img/zoom.gif')} />

## Activation

The zoom plugin is injected directly in the document.

The plugin ID is a constant everywhere available, `ZoomPlugin.ID`, in [ZoomPlugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/ZoomPlugin.html) entry point.

This plugin registers itself globally, meaning that once injected, all charts will enable zooming. In case you want it enabled only for a few charts, you can enable it as following:

```java
// --------------------------------------
// enabling the plugin without any parameter
// the plugin is NOT registered to all charts
// --------------------------------------
ZoomPlugin.enable();

// --------------------------------------
// enabling the plugin with `true` parameter
// the plugin is registered to all charts
// --------------------------------------
ZoomPlugin.enable(true);

// --------------------------------------
// enabling the plugin with `true` parameter
// the plugin is registered to all charts and
// another `true` parameter to inject the HammerJS
// --------------------------------------
ZoomPlugin.enable(true, true);
```

With last sample, you can decide if you want to inject [Hammer.JS](https://github.com/hammerjs/hammer.js) (default), passing `false`. This could be helpful when you have another library which is using and injecting Hammer.JS.

To activate the plugin in a specific chart, it's enough to provide the configuration options (see [below](#configuration)) or enabling it by:

```java
// --------------------------------------
// ENABLING the plugin to a chart instance 
// storing a plugin options 
// --------------------------------------
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// enables the zoom
options.getZoom().setEnabled(true);
// stores the plugin options directly by the options
options.store(chart);

// --------------------------------------
// ENABLING the plugin to a chart instance 
// by a boolean using default plugin 
// options
// --------------------------------------
chart.getOptions().getPlugins().setEnabled(ZoomPlugin.ID, true);
```

## Configuration

The plugin options can be changed at 2 different levels and are evaluated with the following priority:

  * per chart by `chart.getOptions().getPlugins().setOptions` method
  * per chart type by `Defaults.get().getOptions([chartType]).getPlugins().setOptions` method
  * or globally by `Defaults.get().getGlobal().getPlugins().setOptions` method
  
The configuration class [ZoomOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/ZoomOptions.html) contains all properties needed to configure the plugin.

You can also change the default for all charts instances, as following:

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// enables pan element
options.getPan().setEnabled(true);
options.getPan().setMode(InteractionAxis.XY);
// enables zoom element
options.getZoom().setEnabled(true);
options.getZoom().setMode(InteractionAxis.XY);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(ZoomPlugin.ID, options);
// stores the plugin options without plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store();
```

If you need to read the plugin options, there is the specific factory, [ZoomOptionsFactory](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/ZoomOptionsFactory.html) as static reference inside the [ZoomPlugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/ZoomPlugin.html) entry point which can be used to retrieve the options from chart as following:

```java
// gets options reference
ZoomOptions options;

// --------------------------------------
// GETTING plugin options from chart
// --------------------------------------
if (chart.getOptions().getPlugin().hasOptions(ZoomPlugin.ID)){
   // retrieves the plugin options by plugin ID
   options = chart.getOptions().getPlugin().getOptions(ZoomPlugin.ID, ZoomPlugin.FACTORY);
   //retrieves the plugin options without plugin ID
   options = chart.getOptions().getPlugin().getOptions(ZoomPlugin.FACTORY);
}
```

## Pan

The panning refers to the horizontal or vertical scrolling of a chart wider than the display.

Every options has got a inner element to set **Pan** options. 

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// enables pan
options.getPan().setEnabled(true);
// sets mode
options.getPan().setMode(InteractionAxis.XY);
```

The complete options are described by following table:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| enabled | boolean | `false` | If `true` the panning is enabled. 
| mode | [InteractionAxis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.XY | Panning directions. Remove the appropriate direction to disable. For instance, InteractionAxis.Y would only allow panning in the y direction.
| rangeMin | [Range](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/Range.html) | `null` | Format of minimum pan range depends on scale type.
| rangeMax | [Range](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/Range.html) | `null` | Format of maximum pan range depends on scale type.
| speed | double | 20 | The threshold factor before applying pan, on category scale.
| threshold | double | 10 | The minimal pan distance required before actually applying pan.

### Mode scriptable option

The panning directions or mode options can be configured by as [scriptable option](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/callbacks/ModeCallback.html) at runtime, as following:

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// sets mode at runtime by callback
options.getPan().setMode(new ModeCallback() {
			
	@Override
	public InteractionAxis mode(IsChart chart) {
		return InteractionAxis.Y;
	}
});
```

### Progressing event

The pan element can catch events during panning which can be consumed by [callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/callbacks/ProgressCallback.html), as following:

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// sets the progress event handler by the callback
options.getPan().setProgressCallback(new ProgressCallback() {

	/**
	 * Method called while the user is panning.
	 * 
	 * @param chart chart instance
	 * @param configurationItem configuration item of the plugin which generated the event
	 */			
	@Override
	public void onProgress(IsChart chart, AbstractConfigurationItem<?> configurationItem) {
		// my logic 
	}
});
```

The callback is receiving the chart instance and [Pan](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/Pan.html) instance.

### Complete event

The pan element can catch event when panning is completed which can be consumed by [callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/callbacks/CompleteCallback.html), as following:

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// sets the complete event handler by the callback
options.getPan().setCompleteCallback(new CompleteCallback() {
			
	/**
	 * Method called once panning is completed.
	 * 
	 * @param chart chart instance
	 * @param configurationItem configuration item of the plugin which generated the event
	 */			
	@Override
	public void onComplete(IsChart chart, AbstractConfigurationItem<?> configurationItem) {
		// my logic 
	}
});
```

The callback is receiving the chart instance and [Pan](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/Pan.html) instance.

## Zoom

The zooming refers to a way to maintain focus when the chart size changes.

Every options has got a inner element to set **Zoom** options. 

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// enables zoom
options.getZoom().setEnabled(true);
// sets mode
options.getZoom().setMode(InteractionAxis.XY);
```

The complete options are described by following table:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| enabled | boolean | `false` | If `true` the zooming is enabled. 
| drag | boolean - [Drag](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/Drag.html) | `false` | Drag-to-zoom effect can be customized.
| mode | [InteractionAxis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.XY | Zooming directions. Remove the appropriate direction to disable. For instance, InteractionAxis.Y would only allow zooming in the y direction.
| rangeMin | [Range](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/Range.html) | `null` | Format of minimum pan range depends on scale type.
| rangeMax | [Range](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/Range.html) | `null` | Format of maximum pan range depends on scale type.
| speed | double | 0.1 | The speed of element via mouse wheel (percentage of element on a wheel event). Must be a value between 0 and 1.
| sensitivity | double | 3 | The minimal zoom level before actually applying zoom, on category scale.

### Dragging

The Drag-to-zoom effect can be customized.

The [Drag](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/Drag.html) object provides the methods to customized the area to zoom.

A drag object must be created by the [ZoomPlugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/ZoomPlugin.html), as following:

```java
// --------------------------------------
// creates a drag object with global options as default
// --------------------------------------
Drag dragWithGlobalDef = ZoomPlugin.createDrag();
dragWithGlobalDef.setAnimationDuration(1000);

// --------------------------------------
// creates a drag object with chart options as default
// --------------------------------------
Drag drag = ZoomPlugin.createDrag(chart);
drag.setAnimationDuration(1000);
```

The complete options are described by following table:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `rgba(225,225,225,0.3)` | The fill color of drag area.
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `rgb(225,225,225)` | The stroke color of drag area.
| borderWidth | int | 0 | The stroke width of drag area.
| animationDuration | int | 0 | The number of milliseconds an animation takes.

### Mode scriptable option

The zooming directions or mode options can be configured by as [scriptable option](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/callbacks/ModeCallback.html) at runtime, as following:

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// sets mode at runtime by callback
options.getZoom().setMode(new ModeCallback() {
			
	@Override
	public InteractionAxis mode(IsChart chart) {
		return InteractionAxis.Y;
	}
});
```

### Progressing event

The zoom element can catch events during zooming which can be consumed by [callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/callbacks/ProgressCallback.html), as following:

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// sets the progress event handler by the callback
options.getZoom().setProgressCallback(new ProgressCallback() {

	/**
	 * Method called while the user is zooming.
	 * 
	 * @param chart chart instance
	 * @param configurationItem configuration item of plugin which generated the event
	 */			
	@Override
	public void onProgress(IsChart chart, AbstractConfigurationItem<?> configurationItem) {
		// my logic 
	}
});
```

The callback is receiving the chart instance and [Zoom](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/Zoom.html) instance.

### Complete event

The zoom element can catch event when zooming is completed which can be consumed by [callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/callbacks/CompleteCallback.html), as following:

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// sets the complete event handler by the callback
options.getZoom().setCompleteCallback(new CompleteCallback() {

	/**
	 * Method called once zooming is completed.
	 * 
	 * @param chart chart instance
	 * @param configurationItem configuration item of plugin which generated the event
	 */
	@Override
	public void onComplete(IsChart chart, AbstractConfigurationItem<?> configurationItem) {
		// my logic 
	}
});
```

The callback is receiving the chart instance and [Zoom](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/Zoom.html) instance.

## Range

Both for pan and zoom element, you can set the minimum and maximum range of values to limit the action.

The [Range](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/Range.html) object provides the methods to set `X` and `Y`.

The types of values depends on scale type used by chart, therefore there are the methods to set:

```java
// --------------------------------------
// as double for linear and logarithmic 
// cartesian and radial linear scales
// --------------------------------------
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// set minimum range 
options.getZoom().getRangeMin().setX(10D);
options.getZoom().getRangeMin().setY(20D);
// set maximum range 
options.getZoom().getRangeMax().setX(100D);
options.getZoom().getRangeMax().setY(200D);

// --------------------------------------
// as String for category cartesian scale
// --------------------------------------
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// set minimum range 
options.getZoom().getRangeMin().setX("myMinXLabel");
options.getZoom().getRangeMin().setY("myMinYLabel");
// set maximum range 
options.getZoom().getRangeMax().setX("myMaxXLabel");
options.getZoom().getRangeMax().setY("myMaxYLabel");

// --------------------------------------
// as Date for time cartesian scale
// --------------------------------------
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// set maximum range 
options.getZoom().getRangeMax().setX(new Date());
```

## Resetting zooming

You can programmatically reset the zoom to the default state by [ZoomPlugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/zoom/ZoomPlugin.html), as following:

```java
// --------------------------------------
// resets zoom on chart instance
// --------------------------------------
ZoomPlugin.resetZoom(chart);
```