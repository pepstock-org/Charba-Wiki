---
id: Interaction
title: Interaction
hide_title: true
sidebar_label: Interaction
---
## Interaction

The interaction configuration defines how a user can interact with the chart via events or tooltips.

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets and gets interaction mode
chart.getOptions().getInteraction().setMode(DefaultInteractionMode.NEAREST);

IsInteractionMode mode = chart.getOptions().getInteraction().getMode();
```

The defaults values are set in global defaults options, see [default global interaction options](../defaults/DefaultsCharts#interaction).

Table with options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| axis | [InteractionAxis](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.X | Define which directions are used in calculating distances.
| intersect | boolean | `true` | if `true`, the hover mode only applies when the mouse position intersects an item on the chart.
| includeInvisible | boolean | `false` | if `true`, the invisible points that are outside of the chart area will also be included when evaluating interactions.
| mode | String - [IsInteractionMode](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/enums/IsInteractionMode.html) | DefaultInteractionMode.NERAEST | Sets which elements managed by event or tooltip.

## Hover

The hover configuration, to configure interaction with the chart via hover, is passed to a chart by:

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets and gets interaction mode
chart.getOptions().getHover().setMode(DefaultInteractionMode.NEAREST);

IsInteractionMode mode = chart.getOptions().getHover().getMode();
```

The defaults values are set in global defaults options, see [default global hover options](../defaults/DefaultsCharts#hover).

Table with options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| axis | [InteractionAxis](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.X | Define which directions are used in calculating distances.
| intersect | boolean | `true` | if `true`, the hover mode only applies when the mouse position intersects an item on the chart.
| mode | String - [IsInteractionMode](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/enums/IsInteractionMode.html) | DefaultInteractionMode.NERAEST | Sets which elements will be hovered.

### Custom interaction modes

When configuring the interaction with the chart via interaction, hover or tooltip, a number of different modes are available.

Possible [interaction modes](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/enums/DefaultInteractionMode.html) out-of the box are:

 * `DefaultInteractionMode.POINT`, it will find all of the items that intersect the point.
 * `DefaultInteractionMode.NEAREST`, it will get the item that is nearest to the point.T he nearest item is determined based on the distance to the center of the chart item (point, bar). If 2 or more items are at the same distance, the one with the smallest area is used.
 * `DefaultInteractionMode.INDEX`, it will find all items at the same index. If the intersect setting is `true`, the first intersecting item is used to determine the index in the data. If intersect `false` the nearest item, in the `x` direction, is used to determine the index.
 * `DefaultInteractionMode.DATASET`, it will find all items in the same dataset. If the intersect setting is `true`, the first intersecting item is used to determine the index in the data. If intersect `false` the nearest item is used to determine the index.
 * `DefaultInteractionMode.X`, it will find all items that would intersect based on the X coordinate of the position only. Note that this only applies to cartesian charts.
 * `DefaultInteractionMode.Y`, it will find all items that would intersect based on the Y coordinate of the position. Note that this only applies to cartesian charts.

New modes can be defined by adding a custom implementation, by a [IsInteractionMode](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/enums/IsInteractionMode.html) and [Interactioner](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/interaction/Interactioner.html) which can provide the items from the chart based on own logic.

By the [Interactions](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/interaction/Interactions.html) singleton, you could register and unregister custom interaction mode. 

```java
// creates my interaction mode
final AbstractInteractioner myMode = new AbstractInteractioner("myMode") {
	
	/**
	 * Returns items which must be managed by CHART.JS event or hovering handler and by tooltips.
	 * 
	 * @param chart the chart we are returning items from
	 * @param event the event we are find things at
	 * @param options options to use
	 * @param useFinalPosition use final element position (animation target)
	 * @return items that are found
	 */
	public List<InteractionItem> invoke(IsChart chart, ChartEventContext event, InteractionOptions options, boolean useFinalPosition){
	  // your logic
	}
};
// registers new interaction mode
Interactions.get().register(myMode):
....
// sets new interaction mode to chart options
chart.getOptions().getTooltips().setMode(myMode.getMode());
// or by string
chart.getOptions().getTooltips().setMode("myMode");
```

Because the interaction mode is activated when every event is caught by the chart, sometimes the performance of a custom interaction mode could affect the chart interaction.

To address it, you can also register a custom interaction mode written in JavaScript, passing the code to [Interactions](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/interaction/Interactions.html):

```java
// creates my tooltip position
final Interactioner myMode = Interactions.get().createNativeInteractioner("myMode", " // your logic in JS; ... return anArray; ");
// registers new interaction mode
Interactions.get().register(myMode):
....
// sets new interaction mode to chart options
chart.getOptions().getTooltips().setMode(myMode.getMode());
// or by string
chart.getOptions().getTooltips().setMode("myMode");
```

The native interaction mode will receive 4 JavaScript arguments:

 1. `chart` - the chart we are returning items from
 2. `event` - the event we are find things at
 3.	`options` - interaction options to use
 4. `useFinalPosition` - use final element position (animation target)

## Chart events

You can set which events must be caught and how to manage them by event handlers. 

```java
// sets and gets the catchable events
chart.getOptions().setEvents(DefaultEvent.CLICK, DefaultEvent.MOUSEMOVE);

Set<IsEvent> events = chart.getOptions().getEvents();
```

You can create your events that CHART.JS can catch and pass to your own [plugin](../plugins/):

```java
// creates new event
IsEvent mouseout = IsEvent.create("mouseout");

// sets and gets the catchable events
chart.getOptions().setEvents(DefaultEvent.CLICK, DefaultEvent.MOUSEMOVE, mouseout);

Set<IsEvent> events = chart.getOptions().getEvents();
```

The default value is set in global defaults options, see [default global chart options](../defaults/DefaultsCharts).

Table with options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| events | [IsEvent](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/options/IsEvent.html)[] - Set&lt;[IsEvent](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/options/IsEvent.html)&gt; | DefaultEvent.MOUSEMOVE, DefaultEvent.MOUSEOUT, DefaultEvent.CLICK, DefaultEvent.TOUCHSTART, DefaultEvent.TOUCHMOVE | The events option defines the browser events that the chart should listen to.

### Clicking

The click event is thrown if the browser event type is `mouseup` or `click`. To catch the event and manage it, you can add a [ChartClickEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/ChartClickEventHandler.html) instance to the chart options, as following:

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

The hover event is thrown when any of the events fire on the chart. To catch the event and manage it, you can add a [ChartHoverEvent](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/ChartHoverEvent.html) instance to the chart options, as following:

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

The resize event is thrown when the chart has been resized. To catch the event and manage it, you can add a [ChartResizeEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/ChartClickEventHandler.html) instance to the chart options, as following:

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

When a [click](#clicking) event is fired hovering a dataset element, you can add a [DatasetSelectionEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html) instance to the chart options and considering it how a dataset selection, as following:

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

The dataset selection [event](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/DatasetSelectionEvent.html) contains the selected dataset [reference](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/items/DatasetReference.html) with all info about the selected dataset and item.
 
## Title events

There are 3 different kinds of events that you can catch from the chart title:

  1. `click`, when you click on the title
  1. `enter`, when you enter on title element, hovering it.
  1. `leave`, when you leave from title element.

### Clicking

The click event is throw if the event type is `mouseup` or `click`. When the event is fired hovering the title element, you can add a [TitleClickEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/TitleClickEventHandler.html) instance to the chart options, as following:

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

The enter event is throw if the event type is `mousemove` and you start hovering the title element. To catch the event and manage it, you can add a [TitleEnterEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/TitleEnterEventHandler.html) instance to the chart options, as following:

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

The leave event is throw if the event type is `mousemove` and you end hovering the title element. To catch the event and manage it, you can add a [TitleLeaveEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/TitleLeaveEventHandler.html) instance to the chart options, as following:

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

## Subtitle events

There are 3 different kinds of events that you can catch from the chart subtitle:

  1. `click`, when you click on the subtitle
  1. `enter`, when you enter on subtitle element, hovering it.
  1. `leave`, when you leave from subtitle element.

### Clicking

The click event is throw if the event type is `mouseup` or `click`. When the event is fired hovering the subtitle element, you can add a [SubtitleClickEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/SubtitleClickEventHandler.html) instance to the chart options, as following:

```java
// adds subtitle click event handler
chart.addHandler(new SubtitleClickEventHandler(){
	
	/**
	 * Invoked when the user clicks on the chart subtitle.
	 * 
	 * @param event subtitle click event
	 */
	@Override
	public onClick(SubtitleClickEvent event){
		// logic
	}
}, SubtitleClickEvent.TYPE);
```

### Entering 

The enter event is throw if the event type is `mousemove` and you start hovering the subtitle element. To catch the event and manage it, you can add a [SubtitleEnterEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/SubtitleEnterEventHandler.html) instance to the chart options, as following:

```java
// adds subtitle enter event handler
chart.addHandler(new SubtitleHoverEventHandler(){

   /**
    * Invoked when the user enters on the chart subtitle.
    * 
    * @param event subtitle enter event
    */
   @Override 
   public void onEnter(SubtitleEnterEvent event) {
		// logic
   }
}, SubtitleEnterEvent.TYPE);
```

### Leaving 

The leave event is throw if the event type is `mousemove` and you end hovering the subtitle element. To catch the event and manage it, you can add a [SubtitleLeaveEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/SubtitleLeaveEventHandler.html) instance to the chart options, as following:

```java
// adds subtitle leave event handler
chart.addHandler(new SubtitleLeaveEventHandler(){

   /**
    * Invoked when the user leaves on the chart subtitle.
    * 
    * @param event subtitle leave event
    */
   @Override 
   public void onLeave(SubtitleLeaveEvent event) {
		// logic
   }
}, SubtitleLeaveEvent.TYPE);
```

## Axes events

There are 4 different kinds of events that you can catch from the chart axis:

  1. `click`, when you click on the axis
  1. `enter`, when you enter on axis element, hovering it.
  1. `hover`, when you are hovering on the axis
  1. `leave`, when you leave from axis element.

The axis event contain the selected scale [item](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/items/ScaleItem.html) with all info about the selected scale.

Due to charts can be created with specific axes, the axis event can provide the [axis](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/configuration/Axis.html) configurations if there are, enabling you to get the instance used to configure the chart.
 
### Clicking

The click event is throw if the event type is `mouseup` or `click`. When the event is fired hovering an axis element, you can add a [AxisClickEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/AxisClickEventHandler.html) instance to the chart options, as following:

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

The enter event is throw if the event type is `mousemove` and you start hovering the axis element. To catch the event and manage it, you can add a [AxisEnterEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/AxisEnterEventHandler.html) instance to the chart options, as following:

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

The enter event is throw if the event type is `mousemove` and you are hovering the axis element. To catch the event and manage it, you can add a [AxisHoverEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/AxisHoverEventHandler.html) instance to the chart options, as following:

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

The leave event is throw if the event type is `mousemove` and you end hovering the axis element. To catch the event and manage it, you can add a [AxisLeaveEventHandler](https://pepstock-org.github.io/Charba/6.5/org/pepstock/charba/client/events/AxisLeaveEventHandler.html) instance to the chart options, as following:

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
