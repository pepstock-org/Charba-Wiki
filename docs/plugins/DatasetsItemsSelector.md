---
id: PluginDatasetsItemsSelector
title: Datasets items selector plugin
hide_title: true
sidebar_label: Datasets items selector
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Datasets items selector plugin

**Charba** provides an plugin implementation to select an area on the chart which represents a set of datasets items of the chart and inform you by event about the range of datasets items selected.

The goal is to enable selections of a subset of datasets, zooming and drill down/up of the data on chart instance.

<img src={useBaseUrl('/img/datasetsItemsSelector.png')} />

This plugin, as singleton, can be set both at global and at chart level.

The implementation is [DatasetsItemsSelector](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html) and can be set as following:

```java
// ---------------------------------
// Registers as global plugin
// ---------------------------------
Defaults.get().getPlugins().register(DatasetsItemsSelector.get());
// ---------------------------------
// Registers as single chart plugin
// ---------------------------------
chart.getPlugins().add(DatasetsItemsSelector.get());
```

The ID of plugin is `charbadatasetsitemsselector` ([DatasetsItemsSelector.ID](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html#ID)).

:::note
It works **ONLY** with [LINE](../charts/ChartLine) or [BAR](../charts/ChartBar) chart, with `indexAxis` set to **IndexAxis.X**.
:::

## Options

It could be that you set this plugin as global one for all your charts but you want to change it for only one instance.

In this case you should instantiate a [DatasetsItemsSelectorOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptions.html) and set it to your chart options as following, setting the color you want:

```java
// creates a plugin options
DatasetsItemsSelectorOptions options = new DatasetsItemsSelectorOptions();
// Set "green" by HtmlColor
options.setColor(HtmlColor.GREEN);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
chart.getOptions().getPlugin().setOptions(DatasetsItemsSelector.ID, options);
// stores the plugin options without plugin ID
chart.getOptions().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store(chart);
```

You can also change the default for all charts instances, as following

```java
// creates a plugin options
DatasetsItemsSelectorOptions options = new DatasetsItemsSelectorOptions();
// Set "green" by HtmlColor
options.setColor(HtmlColor.GREEN);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(DatasetsItemsSelector.ID, options);
// stores the plugin options without plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store();
```

If you need to read the plugin options, there is the specific factory, [DatasetsItemsSelectorOptionsFactory](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptionsFactory.html) as static reference inside the [plugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html) which can be used to retrieve the options from chart, as following:

```java
// gets options reference
DatasetsItemsSelectorOptions options;

// --------------------------------------
// GETTING plugin options from chart
// --------------------------------------
if (chart.getOptions().getPlugin().hasOptions(DatasetsItemsSelector.ID)){
   // retrieves the plugin options by plugin ID
   options = chart.getOptions().getPlugin().getOptions(DatasetsItemsSelector.ID, DatasetsItemsSelector.FACTORY);
   //retrieves the plugin options without plugin ID
   options = chart.getOptions().getPlugin().getOptions(DatasetsItemsSelector.FACTORY);
}
```

The following are the attributes that you can set to plugin options:"#ffcc80"

| Name | Type | Default | Description
| :- | :- | :- | :-
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgb(97, 97, 97) - <span style={{backgroundColor: '#616161', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The border color of the selected area.
| borderDash | int[] | [] | The line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.
| borderDashOffset | double | 0 | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderWidth | int | 0 | The border width of the selected area.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(255, 204, 128, 0.3) - <span style={{backgroundColor: 'rgba(255,204,128,0.3)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The color of selected area on chart. 
| enabled | boolean | `true` | If `true`, the plugin is enabled.
| xAxisID | String - [IsScaleId](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/IsScaleId.html) | DefaultScaleId.X | The ID of the X axis to use to calculate the amount of selectable items.

### Clear selection

Every options has got a inner element to set clear selection options. The [clear selection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ClearSelection.html) element allows to reset the selection directly from the chart. 

<img src={useBaseUrl('/img/clearSelection.png')} />

It adds a label and/or image on top or bottom of the chart which will be visible only when there is a selection on datasets. Clicking on the element, the selection on chart is clear.

```java
// creates a plugin options
DatasetsItemsSelectorOptions options = new DatasetsItemsSelectorOptions();
// sets the options to clear configuration element
options.getClearSelection().setDisplay(true);
options.getClearSelection().setFontSize(18);
options.getClearSelection().setAlign(Align.RIGHT_CHART_AREA);
options.getClearSelection().setPosition(Position.BOTTOM);
options.getClearSelection().setRender(Render.IMAGE_LABEL);
options.getClearSelection().setUseSelectionStyle(true);
```

The complete options are described by following table:

| Name | Type | Default | Description
| :- | :- | :- | :-
| display | boolean | `false` | If `true` the element will be showed to chart.
| label | String | `"Reset selection"` | The label to show in the element.
| fontFamily | String | [default font family](../defaults/DefaultsCharts#font) | The font family of label.
| fontSize | int | [default font size](../defaults/DefaultsCharts#font) | The font size of label.
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | [default font style](../defaults/DefaultsCharts#font) | The font style of label.
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgb(97, 97, 97) - <span style={{backgroundColor: '#616161', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The font color of label.
| align | [Align](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/enums/Align.html) | Align.RIGHT | Alignment of element.
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.BOTTOM | Position of the element in the chart. `left` and `right` are ignored and use `bottom`.
| image | [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html) | ClearSelection.DEFAULT_CLEAR_SELECTION_18 | The image to show in the element.
| render | [Render](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/enums/Render.html) | Render.IMAGE_LABEL | Defines if label or image or both will e showed in the element.
| margin | int | `2` | The distance with the canvas borders.
| padding | int | `4` | The padding around the render element.
| spacing | int | `3` | The distance between image and label in the element.
| useSelectionStyle | boolean | `false` | If `true` the element will use the style used for selection area.

## Events

The plugin is able to emit events when

 * the selection of area on chart has been finished, an event will fire passing the range of the selected datasets items.
 * the selection area is resetted, an event will fire. 

### Selecting dataset items 

To catch the event and manage it, you can add a [DatasetRangeSelectionEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/DatasetRangeSelectionEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new DatasetRangeSelectionEventHandler(){

   /**
    * Invoked when the user selects an area on the chart.
    * 
    * @param event chart dataset selection event
    */
   @Override 
   public void onSelect(DatasetRangeSelectionEvent event){
      // logic
   }
         
}, DatasetRangeSelectionEvent.TYPE);
```

The [event](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/DatasetRangeSelectionEvent.html) provides 2 methods to get the range of the selected datasets:

  * `getFrom()` provides the starting value on datasets, by a [scale item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ScaleValueItem.html).
  * `getTo()` provides the ending value on datasets, by a [scale item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ScaleValueItem.html).

### Resetting selection

To reset a selection programmatically, without using [clear selection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/impl/plugins/ClearSelection.html) element, the plugin provides 2 methods:

  * `clearSelection(IsChart chart)` which resets the selected area on passed chart instance firing event on reset if a clear selection handler has been configured.
  * `clearSelection(IsChart chart, boolean fireEvent)` which resets the selected area on passed chart instance, setting if the event must be fired

To catch the event and manage it, you can add a [DatasetRangeClearSelectionEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/DatasetRangeClearSelectionEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new DatasetRangeClearSelectionEventHandler(){

	/**
	 * Invoked when the user clears an area on the chart.
	 * 
	 * @param event chart dataset clear selection event
	 */
	@Override
	public void onClear(DatasetRangeClearSelectionEvent event){
      // logic
	}
	
}, DatasetRangeClearSelectionEvent.TYPE);
```

To update a current selection is NOT mandatory to reset it but it's enough to re-select new area on the chart.

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the options object at the end of configuration.

```java
// creates the plugin options
DatasetsItemsSelectorOptions options = DatasetsItemsSelectorOptionsBuilder.create()
	.setBorderWidth(5)
	.setBorderDash(6, 2, 3)
	.setFireEventOnClearSelection(true)
	.setDisplay(true)
	.setFontSize(18)
	.setAlign(Align.RIGHT_CHART_AREA)
	.setUseSelectionStyle(true)
	.build();
// sets plugin options
chart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, options);
```
