---
id: General
title: Common configuration
hide_title: true
sidebar_label: Options
---
## Common options

These sections describe general configuration options that can apply elsewhere to the charts.

* **Responsive** defines responsive chart options that apply to all charts.
* **Pixel ratio** defines the physical display pixel ratio.
* **Interactions** defines options that reflect how hovering chart elements works.
* **Events** defines options that reflect how chart events work.
* **Modes** defines options that reflect how to interact with chart via hover or tooltips.

## Responsive

When it comes to change the chart size based on the window size, a major limitation is that the chart canvas *render* size can **not** be expressed with relative values, contrary to the *display* size. 
Furthermore, these sizes are independent from each other and thus the canvas *render* size does not adjust automatically based on the *display* size, making the rendering inaccurate.

The following examples **do not work** without setting `maintainAspectRatio` to `false`, because, setting to `false`, the chart will maintain the provided dimensions:

```java
// invalid values, the canvas of chart doesn't resize
chart.setWidth("80vh");
chart.setHeight("80vh");
// in order to use the passed dimensions
chart.getOptions().setMaintainAspectRatio(false);
```

Leveraging on [Chart.JS](http://www.chartjs.org/) capabilities, **Charba** provides options to enable responsiveness and control the resize behavior of charts by detecting when the canvas *display* size changes and update the *render* size accordingly.

To change and apply own properties, you can invoke the **set** methods, both at chart and global level, as following:

```java
// chart
chart.getOptions().setResponsive(true);
// global
Defaults.get().getGlobal().setResponsive(false);
```

Table with options:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| maintainAspectRatio | boolean | `true` | Maintain the original canvas aspect ratio (width / height) when resizing.
| responsive | boolean |  `true` | Resizes the chart canvas when its container does.
| responsiveAnimationDuration | int | 0 | Duration in milliseconds it takes to animate to new size after a resize event.
| aspectRatio | double | 2 | Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas).

### Printing

CSS media queries allow changing styles when printing a page. The CSS applied from these media queries may cause charts to need to resize. However, the resize won't happen automatically. To support resizing charts when printing, one needs to invoke the following statement after the **Charba** setup:

```java
JsWindowHelper.enableResizeOnBeforePrint();
```

## Device pixel ratio

By default the chart's canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio (e.g. Retina displays).

For applications where a chart will be converted to a bitmap, or printed to a higher DPI medium it can be desirable to render the chart at a higher resolution than the default.

Setting `devicePixelRatio` property to a value other than 1 will force the canvas size to be scaled by that amount, relative to the container size. There should be no visible difference on screen; the difference will only be visible when the image is zoomed or printed.

To change and apply own property value, you can invoke the **set** methods, both at chart and global level, as following:

```java
// chart
chart.getOptions().setDevicePixelRatio(2D);
// global
Defaults.get().getGlobal().setDevicePixelRatio(2D);
```

Table with options:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| devicePixelRatio | double | [Window.getDevicePixelRatio()](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/Window.html##getDevicePixelRatio--) | Override the window's default devicePixelRatio.

## Interactions

The hover configuration is passed to a chart by:

```java
// example
chart.getOptions().getHover().setMode(InteractionMode.NEAREST);
chart.getOptions().getHover().setIntersect(true);
chart.getOptions().getHover().setAnimationDuration(1000);
```

Table with options:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| animationDuration | int | 400 | Duration in milliseconds it takes to animate hover style changes.
| axis | [InteractionAxis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.X | Define which directions are used in calculating distances.
| intersect | boolean | `true` | if `true`, the hover mode only applies when the mouse position intersects an item on the chart.
| mode | [InteractionMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html) | InteractionMode.NERAEST | Sets which elements appear in the tooltip.

## Modes

When configuring interaction with the chart via hover or tooltips, a number of different modes are available.

The available modes are detailed [here](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html) and how they behave in conjunction with the `intersect` property setting, available on [hover](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Hover.html) and [tooltips](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Tooltips.html) configuration elements.

To change and apply own properties, see the following example:

```java
// chart
chart.getOptions().getHover().setMode(InteractionMode.NEAREST);
```

## Events

You can set which events must be caught and how to manage them by event handlers. 

```java
// example
chart.getOptions().setEvents(Event.CLICK, Event.MOUSEMOVE);
```

Table with options:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| events | [Event](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Event.html)[] | Event.MOUSEMOVE, Event.MOUSEOUT, Event.CLICK, Event.TOUCHSTART, Event.TOUCHMOVE, Event.TOUCHEND | The events option defines the browser events that the chart should listen to for tooltips and hovering.

### Clicking

The click event is thrown if the event type is `mouseup` or `click`. To catch the event and manage it, you can add a [ChartClickEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/ChartClickEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new ChartClickEventHandler() {

   /**
    * Invoked when the user clicks on the chart.
    * 
    * @param event chart click event
    */
   @Override 
   public void onClick(ChartClickEvent event){
      // logic
   }
         
}, ChartClickEvent.TYPE);
```

### Hovering 

The hover event is thrown when any of the events fire on the chart. To catch the event and manage it, you can add a [ChartHoverEvent](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/ChartHoverEvent.html) instance to the chart options, as following:

```java
chart.addHandler(new ChartHoverEventHandler() {

   /**
    * Invoked when the user hovers on the chart.
    * 
    * @param event chart hover event
    */
   @Override 
   public void onHover(ChartHoverEvent event){
      // logic
   }
      
}, ChartHoverEvent.TYPE);
```

### Resizing

The resize event is thrown when the chart has been resized. To catch the event and manage it, you can add a [ChartResizeEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/ChartClickEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new ChartResizeEventHandler() {

   /**
    * Invoked when the chart has been resized.
    * 
    * @param event chart resize event
    */
   @Override 
   public void onResize(ChartResizeEvent event){
      // logic
   }
   
}, ChartResizeEvent.TYPE);
```

### Selecting a dataset

The click event is thrown if the event type is `mouseup` or `click`. When the event is fired hovering a dataset element, you can add a [DatasetSelectionEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new DatasetSelectionEventHandler() {
	
	/**
	 * Invoked when the user clicks on the chart to select a dataset.
	 * 
	 * @param event chart dataset selection event
	 */			
	@Override
	public void onSelect(DatasetSelectionEvent event) {
		// logic
	}
}, DatasetSelectionEvent.TYPE);
```

The dataset selection [event](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/DatasetSelectionEvent.html) contains the selected dataset [item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DatasetItem.html) with all info about the selected dataset and item.
 
### Clicking on the title

The click event is throw if the event type is `mouseup` or `click`. When the event is fired hovering the title element, you can add a [TitleClickEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/TitleClickEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new TitleClickEventHandler() {
	
	/**
	 * Invoked when the user clicks on the chart title.
	 * 
	 * @param event title click event
	 */
	@Override
	public onClick(TitleClickEvent event) {
		// logic
	}
}, TitleClickEvent.TYPE);
```

### Clicking on an axis

The click event is throw if the event type is `mouseup` or `click`. When the event is fired hovering an axis element, you can add a [AxisClickEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/AxisClickEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new AxisClickEventHandler() {
	
	/**
	 * Invoked when the user clicks on the chart axis.
	 * 
	 * @param event axis click event
	 */
	@Override
	public onClick(AxisClickEvent event) {
		// logic
	}
}, AxisClickEvent.TYPE);
```

The axis click [event](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/AxisClickEvent.html) contains the selected scale [item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ScaleItem.html) with all info about the selected scale.

Due to charts can be created with specific axes, the axis click event can provide the [axes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Axis.html) configurations if there are, enabling you to get the instance used to configure the chart.
 