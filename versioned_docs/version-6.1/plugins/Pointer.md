---
id: PluginPointer
title: Chart cursor plugin
hide_title: true
sidebar_label: Chart cursor
---
## Chart cursor plugin

**Charba** provides a plugin implementation to set the cursor of the chart when a chart and clickable element is hovered.

The goal is to change the style of [cursor](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/dom/enums/CursorType.html) to highlight that the element could be clickable.

This plugin, as singleton, can be set both at global and at chart level.

The implementation is [ChartPointer](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartPointer.html) and can be set as following:

```java
// ---------------------------------
// Registers as global plugin
// ---------------------------------
Defaults.get().getPlugins().register(ChartPointer.get());
// ---------------------------------
// Registers as single chart plugin
// ---------------------------------
chart.getPlugins().add(ChartPointer.get());
```

The ID of plugin is `charbacursorpointer` ([ChartPointer.ID](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartPointer.html#ID)).

## Options

It could be that you set this plugin as global one for all your charts but you want to change it for only one instance.

In this case you should instantiate a [ChartPointerOptions](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartPointerOptions.html) and set it to your chart options as following, setting the color you want:

```java
// creates a plugin options
ChartPointerOptions options = new ChartPointerOptions();
// Set "crosshair" overriding the default cursor
options.setCursorPointer(CursorType.CROSSHAIR);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
chart.getOptions().getPlugin().setOptions(ChartPointer.ID, options);
// stores the plugin options without plugin ID
chart.getOptions().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store(chart);
```

You can also change the default for all charts instances, as following

```java
// creates a plugin options
ChartPointerOptions options = new ChartPointerOptions();
// Set "crosshair" overriding the default cursor
options.setCursorPointer(CursorType.CROSSHAIR);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(ChartPointer.ID, options);
// stores the plugin options without plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store();
```

If you need to read the plugin options, there is the specific factory, [ChartPointerOptionsFactory](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartPointerOptionsFactory.html) as static reference inside the [plugin](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/ChartPointer.html) which can be used to retrieve the options from chart, as following:

```java
// gets options reference
ChartPointerOptions options;

// --------------------------------------
// GETTING plugin options from chart
// --------------------------------------
if (chart.getOptions().getPlugin().hasOptions(ChartPointer.ID)){
   // retrieves the plugin options by plugin ID
   options = chart.getOptions().getPlugin().getOptions(ChartPointer.ID, ChartPointer.FACTORY);
   //retrieves the plugin options without plugin ID
   options = chart.getOptions().getPlugin().getOptions(ChartPointer.FACTORY);
}
```

The following are the attributes that you can set to plugin options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| cursorPointer | [CursorType](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/dom/enums/CursorType.html) | CursorType.POINTER | Cursor style applied to the canvas when is hovering a clickable element.
| elements | [PointerElement](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/enums/PointerElement.html) | PointerElement.DATASET, PointerElement.TITLE, PointerElement.SUBTITLE, PointerElement.AXES, PointerElement.LEGEND | Chart elements where the cursor pointer will be applied if the element is hovered.

By `elements` array property, you can decide on which chart elements the cursor pointer will be applied.

Apart for `PointerElement.LEGEND`, that is always clickable, for all the others the cursor will be applied **ONLY** if the chart has got a relative click event handler instance.

| Element | Handler
| :- | :-
| PointerElement.DATASET | [DatasetSelectionEventHandler](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html)
| PointerElement.TITLE | [TitleClickEventHandler](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/events/TitleClickEventHandler.html)
| PointerElement.SUBTITLE | [SubtitleClickEventHandler](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/events/SubtitleClickEventHandler.html)
| PointerElement.AXES | [AxisClickEventHandler](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/events/AxisClickEventHandler.html)

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the options object at the end of configuration.

```java
// creates a plugin options
ChartPointerOptions options = ChartPointerOptionsBuilder.create()
	.setCursorPointer(CursorType.CROSSHAIR)
	.setElements(PointerElement.DATASET, PointerElement.TITLE)
	.build();
// sets options
chart.getOptions().getPlugins().setOptions(ChartPointer.ID, options);
```

Creating a build by `ChartPointerOptionsBuilder.create()` it will use the global options as default, instead by `ChartPointerOptionsBuilder.create(chart)` it will use the global chart options as default.
 