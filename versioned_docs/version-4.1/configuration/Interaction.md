---
id: Interaction
title: Interaction
hide_title: true
sidebar_label: Interaction
---
## Interaction

The interaction configuration defines how a user can interact with the chart via hover or tooltips.

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets and gets interaction mode
chart.getOptions().getInteraction().setMode(InteractionMode.NEAREST);

InteractionMode mode = chart.getOptions().getInteraction().getMode();
```

The defaults values are set in global defaults options, see [default global interaction options](../defaults/DefaultsCharts#interaction).

Table with options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| axis | [InteractionAxis](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.X | Define which directions are used in calculating distances.
| intersect | boolean | `true` | if `true`, the hover mode only applies when the mouse position intersects an item on the chart.
| mode | [InteractionMode](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/InteractionMode.html) | InteractionMode.NERAEST | Sets which elements appear in the tooltip.

## Hover

The hover configuration, to configure interaction with the chart via hover, is passed to a chart by:

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets and gets interaction mode
chart.getOptions().getHover().setMode(InteractionMode.NEAREST);

InteractionMode mode = chart.getOptions().getHover().getMode();
```

The defaults values are set in global defaults options, see [default global hover options](../defaults/DefaultsCharts#hover).

Table with options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| axis | [InteractionAxis](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.X | Define which directions are used in calculating distances.
| intersect | boolean | `true` | if `true`, the hover mode only applies when the mouse position intersects an item on the chart.
| mode | [InteractionMode](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/InteractionMode.html) | InteractionMode.NERAEST | Sets which elements appear in the tooltip.

## Chart events

You can set which events must be caught and how to manage them by event handlers. 

```java
// sets and gets the catchable events
chart.getOptions().setEvents(Event.CLICK, Event.MOUSEMOVE);

List<Event> events = chart.getOptions().getEvents();
```

The default value is set in global defaults options, see [default global chart options](../defaults/DefaultsCharts).

Table with options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| events | [Event](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/enums/Event.html)[] | Event.MOUSEMOVE, Event.MOUSEOUT, Event.CLICK, Event.TOUCHSTART, Event.TOUCHMOVE | The events option defines the browser events that the chart should listen to.

### Clicking

The click event is thrown if the browser event type is `mouseup` or `click`. To catch the event and manage it, you can add a [ChartClickEventHandler](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/ChartClickEventHandler.html) instance to the chart options, as following:

```java
// adds click event handler
chart.addHandler(new ChartClickEventHandler(){

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

The hover event is thrown when any of the events fire on the chart. To catch the event and manage it, you can add a [ChartHoverEvent](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/ChartHoverEvent.html) instance to the chart options, as following:

```java
// adds hover event handler
chart.addHandler(new ChartHoverEventHandler(){

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

The resize event is thrown when the chart has been resized. To catch the event and manage it, you can add a [ChartResizeEventHandler](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/ChartClickEventHandler.html) instance to the chart options, as following:

```java
// adds resize event handler
chart.addHandler(new ChartResizeEventHandler(){

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

When a [click](#clicking) event is fired hovering a dataset element, you can add a [DatasetSelectionEventHandler](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html) instance to the chart options and considering it how a dataset selection, as following:

```java
// adds dataset selection event handler
chart.addHandler(new DatasetSelectionEventHandler(){
	
	/**
	 * Invoked when the user clicks on the chart to select a dataset.
	 * 
	 * @param event chart dataset selection event
	 */			
	@Override
	public void onSelect(DatasetSelectionEvent event){
		// logic
	}
}, DatasetSelectionEvent.TYPE);
```

The dataset selection [event](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/DatasetSelectionEvent.html) contains the selected dataset [reference](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/DatasetReference.html) with all info about the selected dataset and item.
 
## Title events

There are 3 different kinds of events that you can catch from the chart title:

  1. `click`, when you click on the title
  1. `enter`, when you enter on title element, hovering it.
  1. `leave`, when you leave from title element.

### Clicking

The click event is throw if the event type is `mouseup` or `click`. When the event is fired hovering the title element, you can add a [TitleClickEventHandler](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/TitleClickEventHandler.html) instance to the chart options, as following:

```java
// adds title click event handler
chart.addHandler(new TitleClickEventHandler(){
	
	/**
	 * Invoked when the user clicks on the chart title.
	 * 
	 * @param event title click event
	 */
	@Override
	public onClick(TitleClickEvent event){
		// logic
	}
}, TitleClickEvent.TYPE);
```

### Entering 

The enter event is throw if the event type is `mousemove` and you start hovering the title element. To catch the event and manage it, you can add a [TitleEnterEventHandler](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/TitleEnterEventHandler.html) instance to the chart options, as following:

```java
// adds title enter event handler
chart.addHandler(new TitleHoverEventHandler(){

   /**
    * Invoked when the user enters on the chart title.
    * 
    * @param event title enter event
    */
   @Override 
   public void onEnter(TitleEnterEvent event) {
		// logic
   }
}, TitleEnterEvent.TYPE);
```

### Leaving 

The leave event is throw if the event type is `mousemove` and you end hovering the title element. To catch the event and manage it, you can add a [TitleLeaveEventHandler](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/TitleLeaveEventHandler.html) instance to the chart options, as following:

```java
// adds title leave event handler
chart.addHandler(new TitleLeaveEventHandler(){

   /**
    * Invoked when the user leaves on the chart title.
    * 
    * @param event title leave event
    */
   @Override 
   public void onLeave(TitleLeaveEvent event) {
		// logic
   }
}, TitleLeaveEvent.TYPE);
```

## Axes events

There are 4 different kinds of events that you can catch from the chart axis:

  1. `click`, when you click on the axis
  1. `enter`, when you enter on axis element, hovering it.
  1. `hover`, when you are hovering on the axis
  1. `leave`, when you leave from axis element.

The axis event contain the selected scale [item](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/items/ScaleItem.html) with all info about the selected scale.

Due to charts can be created with specific axes, the axis event can provide the [axis](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/configuration/Axis.html) configurations if there are, enabling you to get the instance used to configure the chart.
 
### Clicking

The click event is throw if the event type is `mouseup` or `click`. When the event is fired hovering an axis element, you can add a [AxisClickEventHandler](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/AxisClickEventHandler.html) instance to the chart options, as following:

```java
// adds axis click event handler
chart.addHandler(new AxisClickEventHandler(){
	
	/**
	 * Invoked when the user clicks on the chart axis.
	 * 
	 * @param event axis click event
	 */
	@Override
	public onClick(AxisClickEvent event){
		// logic
	}
}, AxisClickEvent.TYPE);
```

### Entering

The enter event is throw if the event type is `mousemove` and you start hovering the axis element. To catch the event and manage it, you can add a [AxisEnterEventHandler](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/AxisEnterEventHandler.html) instance to the chart options, as following:

```java
// adds axis enter event handler
chart.addHandler(new AxisEnterEventHandler(){

   /**
    * Invoked when the user is entering on the chart axis.
    * 
    * @param event axis enter event
    */
   @Override 
   public void onEnter(AxisEnterEvent event) {
		// logic
   }
}, AxisEnterEvent.TYPE);
```

### Hovering

The enter event is throw if the event type is `mousemove` and you are hovering the axis element. To catch the event and manage it, you can add a [AxisHoverEventHandler](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/AxisHoverEventHandler.html) instance to the chart options, as following:

```java
// adds axis hover event handler
chart.addHandler(new AxisHoverEventHandler(){

   /**
    * Invoked when the user is hovering on the chart axis.
    * 
    * @param event axis hover event
    */
   @Override 
   public void onHover(AxisHoverEvent event) {
		// logic
   }
}, AxisHoverEvent.TYPE);
```

### Leaving 

The leave event is throw if the event type is `mousemove` and you end hovering the axis element. To catch the event and manage it, you can add a [AxisLeaveEventHandler](https://pepstock-org.github.io/Charba/4.1/org/pepstock/charba/client/events/AxisLeaveEventHandler.html) instance to the chart options, as following:

```java
// adds axis leave event handler
chart.addHandler(new AxisLeaveEventHandler(){

   /**
    * Invoked when the user is leaving on the chart axis.
    * 
    * @param event axis leave event
    */
   @Override 
   public void onLeave(AxisLeaveEvent event) {
		// logic
   }
}, AxisLeaveEvent.TYPE);
```
