---
id: PluginPointer
title: Chart cursor plugin
hide_title: true
sidebar_label: Chart cursor
---
## Chart cursor plugin

**Charba** provides a plugin implementation to set the cursor of the chart when a chart and clickable element is hovered.

The goal is to change the style of [cursor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/enums/CursorType.html) to highlight that the element could be clickable.

This plugin, as singleton, can be set both at global and at chart level.

The implementation is [ChartPointer](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartPointer.html) and can be set as following:

```java
// GLOBAL
Defaults.get().getPlugins().register(ChartPointer.get());

// INLINE
chart.getPlugins().add(ChartPointer.get());
```

The ID of plugin is `charbacursorpointer`.

It could be that you set this plugin as global one for all your charts but you want to change it for only one instance.

In this case you should instantiate a [ChartPointerOptions](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartPointerOptions.html) and set it to your chart options as following, setting the color you want:

```java
// INLINE
// Set "crosshair" overriding the default cursor
ChartPointerOptions option = new ChartPointerOptions();
option.setCursorPointer(CursorType.CROSSHAIR);

// --------------------------------------
// store the plugin options by plugin ID
// --------------------------------------
chart.getOptions().getPlugins().setOptions(ChartPointer.ID, option);
// --------------------------------------
// or store the plugin options without plugin ID
// --------------------------------------
chart.getOptions().getPlugins().setOptions(option);

// GLOBAL
// Set "crosshair" overriding the default cursor
ChartPointerOptions option = new ChartPointerOptions();
option.setCursorPointer(CursorType.CROSSHAIR);

// --------------------------------------
// store the plugin options by plugin ID
// --------------------------------------
Defaults.get().getGlobal().getPlugins().setOptions(ChartPointer.ID, option);
// --------------------------------------
// or store the plugin options without plugin ID
// --------------------------------------
Defaults.get().getGlobal().getPlugins().setOptions(option);
```

If you need to read the plugin options, there is the specific factory, [ChartPointerOptionsFactory](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartPointerOptionsFactory.html) as static reference inside the [plugin](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ChartPointer.html) which can be used to retrieve the options from chart, as following:

```java
// INLINE
// reads the options from chart
ChartPointerOptions option;
if (chart.getOptions().getPlugins().hasOptions(ChartPointer.ID)){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(ChartPointer.ID, ChartPointer.FACTORY);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(ChartPointer.FACTORY);
}

// GLOBAL
if (Defaults.get().getGlobal().getPlugins().hasOptions(ChartPointer.ID)){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   options = Defaults.get().getGlobal().getPlugins().getOptions(ChartPointer.ID, ChartPointer.FACTORY);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   options = Defaults.get().getGlobal().getPlugins().getOptions(ChartPointer.FACTORY);
}
```

The following are the attributes that you can set to plugin options:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| cursorPointer | [CursorType](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/enums/CursorType.html) | CursorType.POINTER | Cursor style applied to the canvas when is hovering a clickable element.
| elements | [PointerElement](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/enums/PointerElement.html) | PointerElement.DATASET, PointerElement.TITLE, PointerElement.AXES, PointerElement.LEGEND | Chart elements where the cursor pointer will be applied if the element is hovered. 

By `elements` array property, you can decide on which chart elements the cursor pointer will be applied.

Apart for `PointerElement.LEGEND`, that is always clickable, for all the others the cursor will be applied ONLY if the chart has got a relative click event handler instance.

| Element | Handler
| ------- | -------
| PointerElement.DATASET | [DatasetSelectionEventHandler](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html)
| PointerElement.TITLE | [TitleClickEventHandler](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/TitleClickEventHandler.html)
| PointerElement.AXES | [AxisClickEventHandler](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/AxisClickEventHandler.html)
