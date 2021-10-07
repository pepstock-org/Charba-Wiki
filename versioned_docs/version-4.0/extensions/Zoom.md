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

The plugin ID is a constant everywhere available, `ZoomPlugin.ID`, in [ZoomPlugin](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/ZoomPlugin.html) entry point.

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
// enables the zoom wheeling
options.getZoom().getWheel().setEnabled(true);
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
  
The configuration class [ZoomOptions](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/ZoomOptions.html) contains all properties needed to configure the plugin.

You can also change the default for all charts instances, as following:

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// enables pan
options.getPan().setEnabled(true);
options.getPan().setMode(InteractionAxis.XY);
// enables zoom wheel 
options.getZoom().getWheel().setEnabled(true);
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

If you need to read the plugin options, there is the specific factory, [ZoomOptionsFactory](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/ZoomOptionsFactory.html) as static reference inside the [ZoomPlugin](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/ZoomPlugin.html) entry point which can be used to retrieve the options from chart as following:

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

The complete options are described by following table:

| Name | Type | Default | Scriptable
| :- | :- | :- | :-----
| events | [Event](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/Event.html)[] | `Defaults.get().getGlobal()`<br/>`.getEvents()` | The events option defines the browser events that the plugin should listen to. This overrides the options at chart level.

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
| :- | :- | :- | :-
| enabled | boolean | `false` | If `true` the panning is enabled.
| modifierKey | [ModifierKey](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/ModifierKey.html) | `null` | Keyboard modifier key which must be pressed to enable panning, otherwise the rejected callback will be triggered.
| mode | [InteractionAxis](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.XY | Panning directions. Remove the appropriate direction to disable. For instance, InteractionAxis.Y would only allow panning in the y direction.
| overScaleMode | [InteractionAxis](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.XY | Direction which of the enabled panning directions should only be available when the mouse cursor is over one of scale.
| threshold | double | 10 | The minimal pan distance required before actually applying pan.

## Zoom

The zooming refers to a way to maintain focus when the chart size changes.

The [zoom options](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/Zoom.html) has got a inner elements in order to configure:

  * [Wheel](#wheel) element to set the mouse wheel behavior
  * [Drag](#drag) element to set the drag-to-zoom behavior
  * [Pinch](#pinch) element to set  the pinch behavior
  
```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// enables wheel
options.getZoom().getWheel().setEnabled(true);
// enables drag
options.getZoom().getDrag().setEnabled(true);
// enables pinch
options.getZoom().getPinch().setEnabled(true);
```

The complete common options to all inner elements are described by following table:

| Name | Type | Default | Description
| :- | :- | :- | :-
| mode | [InteractionAxis](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.XY | Zooming directions. Remove the appropriate direction to disable. For instance, InteractionAxis.Y would only allow zooming in the y direction.
| overScaleMode | [InteractionAxis](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.XY | Direction which of the enabled zooming directions should only be available when the mouse cursor is over one of scale.

### Wheel

The [wheel](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/Wheel.html) options refers to a way to set the mouse wheel behavior.

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// enables wheel
options.getZoom().getWheel().setEnabled(true);
// sets speed
options.getZoom().getWheel().setSpeed(0.5);
```

The complete options are described by following table:

| Name | Type | Default | Description
| :- | :- | :- | :-
| enabled | boolean | `false` | If `true` the wheel zooming is enabled.
| speed | double | 0.1 | The speed of element via mouse wheel (percentage of element on a wheel event). Must be a value between 0 and 1.
| modifierKey | [ModifierKey](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/ModifierKey.html) | `null` | Keyboard modifier key which must be pressed to enable zooming, otherwise the rejected callback will be triggered.

### Drag

The Drag-to-zoom effect can be customized.

The [drag](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/Drag.html) object provides the methods to customized the area to zoom.

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// enables drag
options.getZoom().getDrag().setEnabled(true);
// sets drag background color
options.getZoom().getDrag().setBackgroundColor(HtmlColor.RED);
```

The complete options are described by following table:

| Name | Type | Default | Description
| :- | :- | :- | :-
| enabled | boolean | `false` | If `true` the drag zooming is enabled.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html) | rgba(225,225,225,0.3) - <span style={{backgroundColor: 'rgba(225,225,225,0.3))', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The fill color of drag area.
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html) | rgb(225,225,225) - <span style={{backgroundColor: 'rgb(225,225,225))', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The stroke color of drag area.
| borderWidth | int | 0 | The stroke width of drag area.

### Pinch

The [pinch](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/Pinch.html) options refers to a way to enable the behavior of a finger gesture used with a touch screen interface that supports multi-touch.

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// enables pinch
options.getZoom().getPinch().setEnabled(true);
```

The complete options are described by following table:

| Name | Type | Default | Description
| :- | :- | :- | :-
| enabled | boolean | `false` | If `true` the wheel zooming is enabled.

## Limits

Both for pan and zoom element, you can set the minimum and maximum range of values to limit the action.

Every options has got a inner element to set **Limits** options. 

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// sets mininum value for X scale
options.getLimits().getX().setMin(-200);
// sets maximum value for X scale
options.getLimits().getX().setMax(200);
```

The complete options are described by following table:

| Name | Type | Description
| :- | :- | :-
| [x](#scale-limit) | [ScaleLimit](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/ScaleLimit.html) | Sets the minimum and maximum value for X scale. 
| [y](#scale-limit) | [ScaleLimit](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/ScaleLimit.html) | Sets the minimum and maximum value for Y scale.

### Scale limit

The [scale limit](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/ScaleLimit.html) object can set he minimum and maximum values to apply to scales in order to manage pan and zoom inside those boundaries.

The complete options are described by following table:

| Name | Type | Default | Description
| :- | :- | :- | :-
| min | double | Undefined.DOUBLE | Minimun allowed value for scale minimum
| max | double | Undefined.DOUBLE | Maximum allowed value for scale maximum
| minRange | double | Undefined.DOUBLE | Minimum allowed range. This defines the max zoom level.

## Scriptable

Scriptable options in the plugin configuration accept a callback which is called during plugin configuration phase. The callbacks are getting the only 1 argument, the [plugin context](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/ZoomContext.html) which contains the context of the callback execution.

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// sets mode at runtime by callback
options.getPan().setMode(new ModeCallback(){

	/**
	 * @param context context instance
	 * @return the mode (pan and zoom) directions
	 */			
	@Override
	public InteractionAxis invoke(ZoomContext context){
		return InteractionAxis.Y;
	}
});
```

The context object contains the following properties:

| Name | Type | Description
| :- | :- | :-
| attributes | [NativeObjectContainer](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/commons/NativeObjectContainer.html) | User object which you can store your options at runtime.
| chart | [IsChart](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/IsChart.html) | Chart instance. 
| element | [AbstractConfigurationItem](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/AbstractConfigurationItem.html) | The pan or zoom configuration where the options is defined as scriptable.
| point | [EventPoint](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/EventPoint.html) | The point passed by the native plugin during some events handling.
| type | [ContextType](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/items/ContextType.html) | The type of the context. It can be ONLY `ContextType.ZOOM`.

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| mode | [ModeCallback](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/callbacks/ModeCallback.html) | [InteractionAxis](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/InteractionAxis.html)
| overScaleMode | [ModeCallback](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/callbacks/ModeCallback.html) | [InteractionAxis](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/InteractionAxis.html)

### Starting event

The pan and zoom element can catch events during pan and zoom starting which can be consumed by [callback](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/callbacks/StartCallback.html), as following:

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// sets the start event handler by the callback
options.getPan().setStartCallback(new StartCallback(){

	/**
	 * Method called when pan or zoom is about to start.
	 * 
	 * @param context plugin context instance
	 * @return if this callback returns false, panning or zooming is aborted and rejected callback is invoked.
	 */
	@Override
	public boolean onStart(ZoomContext context){
		// my logic
		return true; 
	}
});
```

### Progressing event

The pan and zoom element can catch events during pan and zoom which can be consumed by [callback](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/callbacks/ProgressCallback.html), as following:

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// sets the progress event handler by the callback
options.getPan().setProgressCallback(new ProgressCallback(){

	/**
	 * Method called while the user is pan/zoom.
	 * 
	 * @param context context instance
	 */			
	@Override
	public void onProgress(ZoomContext context){
		// my logic 
	}
});
```

### Completed event

The pan and zoom element can catch event when pan and zoom are completed which can be consumed by [callback](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/callbacks/CompletedCallback.html), as following:

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// sets the complete event handler by the callback
options.getPan().setCompletedCallback(new CompletedCallback(){
			
	/**
	 * Method called once pan/zoom is completed.
	 * 
	 * @param context context instance
	 */			
	@Override
	public void onCompleted(ZoomContext context){
		// my logic 
	}
});
```

### Rejected event

The pan and zoom element can catch event when pan and zoom are invoked but it is not enabled due to the [modifier key](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/enums/ModifierKey.html) is not pressed and can be consumed by [callback](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/callbacks/RejectedCallback.html), as following:

```java
// creates a plugin options
ZoomOptions options = new ZoomOptions();
// sets the reject event handler by the callback
options.getPan().setRejectedCallback(new RejectedCallback(){
			
	/**
	 * Method called once pan/zoom is rejected.
	 * 
	 * @param context context instance
	 */			
	@Override
	public void onRejected(ZoomContext context){
		// my logic 
	}
});
```

## API

The plugin provides a set of API in order to pan, zoom and reset programmatically, without interacting with wheel or mouse events, generated by manual actions.

### Resetting

You can programmatically reset the zoom and pan to the default state by [ZoomPlugin](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/ZoomPlugin.html), as following:

```java
// resets zoom and pan on chart instance
ZoomPlugin.reset(chart);
// resets zoom and pan on chart instance
// updating chart using the default
// transition mode.
ZoomPlugin.reset(chart, DefaultTransitionKey.DEFAULT);
```

### Zooming

You can programmatically zoom on a chart instance by [ZoomPlugin](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/ZoomPlugin.html), as following:

```java
// zoom on chart with 110% on both directions
ZoomPlugin.zoom(chart, 1.1);
// zoom on chart with 90% on both directions
ZoomPlugin.zoom(chart, 0.9);
// zoom on chart with 90% on both directions
// updating chart using the default
// transition mode.
ZoomPlugin.zoom(chart, 0.9, DefaultTransitionKey.DEFAULT);
```

You can also zoom horizontally or vertically, specifying the percentage of zoom on a specific direction, by [Amount](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/Amount.html) class, as following:

```java
// zoom on chart with 110% on X direction
ZoomPlugin.zoom(chart, new Amount(1.1));
// zoom on chart with 90% on Y direction
ZoomPlugin.zoom(chart, new Amount(Undefined.DOUBLE, 1.1));
// zoom on chart with 90% on Y direction
// updating chart using the default
// transition mode.
Amount amount = new Amount();
amount.setY(0.9);
ZoomPlugin.zoom(chart, amount, DefaultTransitionKey.DEFAULT);
```

### Zooming on scale

You can programmatically zoom on a scale instance of the chart by [ZoomPlugin](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/ZoomPlugin.html), as following:

```java
// creates a scale range to set minimum
// and maximum range to zoom by scale
ScaleRange range = new ScaleRange();
range.setMin(-100);
range.setMax(0);
// zoom on chart by scale, in the range between
// value -100 and 0
ZoomPlugin.zoomScale(chart, DefaultScaleId.X, range);
// zoom on chart by scale, in the range between
// value -100 and 0
// updating chart using the default
// transition mode.
ZoomPlugin.zoomScale(chart, DefaultScaleId.X, new ScaleRange(-100, 0), DefaultTransitionKey.DEFAULT);
```

### Panning

You can programmatically pan on a chart instance by [ZoomPlugin](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/ZoomPlugin.html), as following:

```java
// pan on chart with 100 pixels on both directions
ZoomPlugin.pan(chart, 100);
// pan on chart with 100 pixels on both directions
// updating chart using the default
// transition mode.
ZoomPlugin.pan(chart, 100, DefaultTransitionKey.DEFAULT);
```

You can also pan horizontally or vertically, specifying the amount of pixels of pan on a specific direction, by [Amount](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/zoom/Amount.html) class, as following:

```java
// zoom on chart with 100 pixels on X direction
ZoomPlugin.pan(chart, new Amount(100));
// zoom on chart with -100 pixels on Y direction
ZoomPlugin.pan(chart, new Amount(Undefined.DOUBLE, -100));
// zoom on chart with 100 pixels on X direction
// updating chart using the default
// transition mode.
Amount amount = new Amount();
amount.setX(100);
ZoomPlugin.pan(chart, amount, DefaultTransitionKey.DEFAULT);
```
