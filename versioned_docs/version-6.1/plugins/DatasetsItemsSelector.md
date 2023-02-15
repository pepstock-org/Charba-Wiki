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

The implementation is [DatasetsItemsSelector](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html) and can be set as following:

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

The ID of plugin is `charbadatasetsitemsselector` ([DatasetsItemsSelector.ID](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html#ID)).

:::note
It works on all multiple scales chart type, like [line](../charts/ChartLine)**<sup style={{color: 'orange'}}>(1)</sup>**, [bar](../charts/ChartBar)**<sup style={{color: 'orange'}}>(1)</sup>**, [scatter](../charts/ChartScatter) or [bubble](../charts/ChartBubble) charts.

**<sup style={{color: 'orange'}}>(1)</sup>** line and bar charts can be managed **ONLY** with `indexAxis` option set to **IndexAxis.X**.
:::

## Options

It could be that you set this plugin as global one for all your charts but you want to change it for only one instance.

In this case you should instantiate a [DatasetsItemsSelectorOptions](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptions.html) and set it to your chart options as following, setting the color you want:

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

If you need to read the plugin options, there is the specific factory, [DatasetsItemsSelectorOptionsFactory](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptionsFactory.html) as static reference inside the [plugin](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html) which can be used to retrieve the options from chart, as following:

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
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/colors/IsColor.html) | rgb(97, 97, 97) - <span style={{backgroundColor: '#616161', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The border color of the selected area.
| borderDash | int[] | [] | The line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.
| borderDashOffset | double | 0 | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderWidth | int | 0 | The border width of the selected area.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/colors/IsColor.html) | rgba(255, 204, 128, 0.3) - <span style={{backgroundColor: 'rgba(255,204,128,0.3)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The color of selected area on chart. 
| enabled | boolean | `true` | If `true`, the plugin is enabled.
| enabledClearByEscape | boolean | `true` | If `true`, the selection can be clear pressing `Escape` key.
| modifierKey | [ModifierKey](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/enums/ModifierKey.html) | `null` | Keyboard modifier key which must be pressed to enable the selection.
| xAxisID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/options/ScaleId.html) | DefaultScaleId.X | The ID of the X axis to use to calculate the amount of selectable items.

### Selection cleaner

Every options has got a inner element to set selection cleaner options. The [selection cleaner](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/SelectionCleaner.html) element allows to reset the selection directly from the chart. 

<img src={useBaseUrl('/img/clearSelection.png')} />

It adds a label and/or image on top or bottom of the chart which will be visible only when there is a selection on datasets. Clicking on the element, the selection on chart is removed.

```java
// creates a plugin options
DatasetsItemsSelectorOptions options = new DatasetsItemsSelectorOptions();
// sets the options to selection cleaner configuration element
options.getSelectionCleaner().setDisplay(true);
options.getSelectionCleaner().getFont().setSize(18);
options.getSelectionCleaner().setAlign(Align.RIGHT_CHART_AREA);
options.getSelectionCleaner().setPosition(Position.BOTTOM);
options.getSelectionCleaner().setRender(Render.IMAGE_LABEL);
options.getSelectionCleaner().setUseSelectionStyle(true);
```

The complete options are described by following table:

| Name | Type | Default | Description
| :- | :- | :- | :-
| display | boolean | `false` | If `true` the element will be showed to chart.
| label | String | `"Reset selection"` | The label to show in the element.
| font | [IsFont](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/options/IsFont.html) | See description | Font of selection cleaner label.<br/><br/>The default value is the global font.<br/>See [Font](../defaults/DefaultsCharts#font).
| color | String - [IsColor](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/colors/IsColor.html) | rgb(97, 97, 97) - <span style={{backgroundColor: '#616161', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The font color of label.
| align | [Align](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/enums/Align.html) | Align.RIGHT | Alignment of element.
| position | [Position](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/enums/Position.html) | Position.BOTTOM | Position of the element in the chart. `left` and `right` are ignored and use `bottom`.
| image | [Img](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/dom/elements/Img.html) | `null` | The image to show in the element.
| render | [Render](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/enums/Render.html) | Render.LABEL | Defines if label or image or both will e showed in the element.
| margin | int | `2` | The distance with the canvas borders.
| padding | int | `4` | The padding around the render element.
| spacing | int | `3` | The distance between image and label in the element.
| useSelectionStyle | boolean | `false` | If `true` the element will use the style used for selection area.

## Actions and events

The plugin can emit events when

 * the selection of area on chart has been finished, an event will fire passing the range of the selected datasets items.
 * the selection area is resetted, an event will fire.
 
Furthermore it provides a set of methods in order to set and clean selection programmatically.

### Selecting dataset items 

To set a selection programmatically, the plugin provides 3 methods:

  * `setSelection(IsChart chart, String from, String to)` which selects on the chart using the axis values passed as argument; being strings, this method should be used on [cartesian category](../axes/CartesianCategoryAxes) axes
  * `setSelection(IsChart chart, double from, double to)` which selects on the chart using the axis values passed as argument; being numbers, this method should be used on [cartesian linear](../axes/CartesianLinearAxes) or [cartesian logarithmic](../axes/CartesianLinearAxes) axes
  * `setSelection(IsChart chart, Date from, Date to)` which selects on the chart using the axis values passed as argument; being dates, this method should be used on [cartesian time](../axes/CartesianTimeAxes) or [cartesian time series](../axes/CartesianTimeSeriesAxes) axes

Here is a simple example:

```java
protected void handleSelect() {
    // selects the area between "February" and "April" labels
    DatasetsItemsSelector.get().setSelection(chart, "February", "April");
}
```

To catch the event and manage it, you can add a [DatasetRangeSelectionEventHandler](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/events/DatasetRangeSelectionEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new DatasetRangeSelectionEventHandler(){

   /**
    * Invoked when the user selects an area on the chart.
    * 
    * @param event chart data set selection event
    */
   @Override 
   public void onSelect(DatasetRangeSelectionEvent event){
      // logic
   }
         
}, DatasetRangeSelectionEvent.TYPE);
```

The [event](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/events/DatasetRangeSelectionEvent.html) provides 2 methods to get the range of the selected data sets:

  * `getFrom()` provides the starting value on data sets, by a [scale item](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/items/ScaleValueItem.html).
  * `getTo()` provides the ending value on data sets, by a [scale item](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/items/ScaleValueItem.html).

### Cleaning selection

To reset a selection programmatically, without using [selection cleaner](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/impl/plugins/SelectionCleaner.html) element, the plugin provides 2 methods:

  * `cleanSelection(IsChart chart)` which resets the selected area on passed chart instance firing event on reset if a clean selection handler has been configured.
  * `cleanSelection(IsChart chart, boolean fireEvent)` which resets the selected area on passed chart instance, setting if the event must be fired

Here is a simple example:

```java
protected void reset() {
    // removes the area, previously selected
    DatasetsItemsSelector.get().cleanSelection(chart);
}
```

To catch the event and manage it, you can add a [DatasetRangeCleanSelectionEventHandler](https://pepstock-org.github.io/Charba/6.1/org/pepstock/charba/client/events/DatasetRangeCleanSelectionEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new DatasetRangeCleanSelectionEventHandler(){

	/**
	 * Invoked when the user cleans an area on the chart.
	 * 
	 * @param event chart data set clean selection event
	 */
	@Override
	public void onClean(DatasetRangeCleanSelectionEvent event){
      // logic
	}
	
}, DatasetRangeCleanSelectionEvent.TYPE);
```

To update a current selection is NOT mandatory to reset it but it's enough to re-select new area on the chart.

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the options object at the end of configuration.

```java
// creates the plugin options
DatasetsItemsSelectorOptions options = DatasetsItemsSelectorOptionsBuilder.create()
	.setBorderWidth(5)
	.setBorderDash(6, 2, 3)
	.setDisplay(true)
	.setFontSize(18)
	.setAlign(Align.RIGHT_CHART_AREA)
	.setUseSelectionStyle(true)
	.build();
// sets plugin options
chart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, options);
```
