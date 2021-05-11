---
id: PluginDatasetsItemsSelector
title: Datasets items selector plugin
hide_title: true
sidebar_label: Datasets items selector
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Datasets items selector plugin

**Charba** provides an plugin implementation to select an area on the chart which represents a set of datasets items of the chart and inform you by event about the range of datasets items selected.

The goal is to enable zooming or drill down/up of the data on chart instance.

<img src={useBaseUrl('/img/datasetsItemsSelector.png')} />

It works ONLY with chart [line](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/ChartType.html) and [bar](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/ChartType.html) types.

This plugin, as singleton, can be set both at global and at chart level.

The implementation is [DatasetsItemsSelector](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html) and can be set as following:

```java
// GLOBAL
Defaults.get().getPlugins().register(DatasetsItemsSelector.get());

// INLINE
chart.getPlugins().add(DatasetsItemsSelector.get());
```

The ID of plugin is `charbadatasetsitemsselector` ([DatasetsItemsSelector.ID](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html#ID)).

It could be that you set this plugin as global one for all your charts but you want to change it for only one instance.

In this case you should instantiate a [DatasetsItemsSelectorOptions](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptions.html) and set it to your chart options as following, setting the color you want:

```java
// INLINE
// Set "green" by HtmlColor
DatasetsItemsSelectorOptions option = new DatasetsItemsSelectorOptions();
option.setColor(HtmlColor.GREEN);

chart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, option);

// GLOBAL
// Set "green" by HtmlColor
DatasetsItemsSelectorOptions option = new DatasetsItemsSelectorOptions();
option.setColor(HtmlColor.GREEN);

Defaults.get().getGlobal().getPlugins().setOptions(DatasetsItemsSelector.ID, option);
```

If you need to read the plugin options, there is the specific factory, [DatasetsItemsSelectorOptionsFactory](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelectorOptionsFactory.html) as static reference inside the [plugin](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/DatasetsItemsSelector.html) which can be used to retrieve the options from chart, as following:

```java
// INLINE
// reads the options from chart
DatasetsItemsSelectorOptions option;
if (chart.getOptions().getPlugins().hasOptions(DatasetsItemsSelector.ID)){
   options = chart.getOptions().getPlugins().getOptions(DatasetsItemsSelector.ID, DatasetsItemsSelector.FACTORY);
}

// GLOBAL
// reads the options from global options
DatasetsItemsSelectorOptions option;
if (Defaults.get().getGlobal().getPlugins().hasOptions(DatasetsItemsSelector.ID)){
   options = Defaults.get().getGlobal().getPlugins().getOptions(DatasetsItemsSelector.ID, DatasetsItemsSelector.FACTORY);
}
```

The following are the attributes that you can set to plugin options:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| color | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | GwtMaterialColor ORANGE_LIGHTEN_3.alpha(0.3D) | The color of selected area on chart. 
| xAxisID | String | [Scales.DEFAULT_X_AXIS_ID](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID) | the ID of the x axis (cartesian category or time axis) to use to calculate the amount of selectable items
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | GwtMaterialColor GREY_DARKEN_2 | the border color of the selected area.
| borderDash | int[] | [] | the line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.
| borderDashOffset | int | 0 | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderWidth | int | 0 | the border width of the selected area.
| fireEventOnClearSelection | boolean | `false` | `true` for firing event after reset of selection.

## Clear selection element

Every options has got a inner element to set clear selection options. The [clear selection](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ClearSelection.html) element allows to reset the selection directly from the chart. 

<img src={useBaseUrl('/img/clearSelection.png')} />

It adds a label and/or image on top or bottom of the chart which will be visible only when there is a selection on datasets. Clicking on the element, the selection on chart is clear.

```java
options.getClearSelection().setDisplay(true);
options.getClearSelection().setFontSize(18);
options.getClearSelection().setAlign(Align.RIGHT_CHART_AREA);
options.getClearSelection().setPosition(Position.BOTTOM);
options.getClearSelection().setRender(Render.IMAGE_LABEL);
options.getClearSelection().setUseSelectionStyle(true);
```

The complete options are described by following table:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| display | boolean | `false` | if `true` the element will be showed to chart
| label | String | "Reset selection" | the label to show into the element
| fontSize | int | [defaultFontSize](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontSize--) | font size of label
| fontFamily | String | [defaultFontFamily](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontFamily--) | font family of label
| fontStyle | [FontStyle](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | [defaultFontStyle](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontStyle--) | font style of label
| fontColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | GwtMaterialColor GREY_DARKEN_2 | font color of label
| align | [Align](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/enums/Align.html) | Align.RIGHT | Alignment of element
| position | [Position](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.BOTTOM | Position of the element in the chart. `left` and `right` are ignored and use `bottom`
| image | [Img](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html) | ClearSelection.DEFAULT_CLEAR_SELECTION_18 | the image to show into the element
| render | [Render](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/enums/Render.html) | Render.IMAGE_LABEL | defines if label or image or both will e showed into element
| margin | int | 2 | distance with the canvas borders
| padding | int | 4 | padding around the render element
| spacing | int | 3 | distance between image and label into element
| useSelectionStyle | boolean | `false` | if `true` the element will use the style used for selection area

The [clear selection](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ClearSelection.html) adds on top of padding configuration of the chart the space needed to be added. Therefore if padding were set, it maintains the original padding adding what is necessary.

It could be necessary to know how much space has been added (maybe during a plugin or controller implementation). The added space is provided by the plugin instance, as following:

```java
DatasetsItemsSelector plugin = new DatasetsItemsSelector());
...
double paddingUsedByPlugin = plugin.getPadding(chartInstance);
```

## Events

When the selection of area on chart has been finished, an event will fire passing the range of the selected datasets items.

To catch the event and manage it, you can add a [DatasetRangeSelectionEventHandler](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetRangeSelectionEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new DatasetRangeSelectionEventHandler() {

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

The [event](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetRangeSelectionEvent.html) provides 2 methods to get the range of the selected datasets:

  * `getFrom()` provides the starting index on datasets
  * `getTo()` provides the ending index on datasets

## Selection reset

To reset a selection programmatically, without using [clear selection](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/plugins/ClearSelection.html) element, the plugin provides 2 methods:

  * `clearSelection(IsChart chart)` which resets the selected area on passed chart instance using the `fireEventOnClearSelection` property of the plugin options to enable firing event on reset if set to `true` otherwise without any firing.
  * `clearSelection(IsChart chart, boolean fireEvent)` which resets the selected area on passed chart instance, setting if the event must be fired

In case of the event will be fired, the [event](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/events/DatasetRangeSelectionEvent.html) will report from both methods (`getFrom()` and `getTo()`) a DatasetRangeSelectionEvent.RESET_SELECTION value.

```java
chart.addHandler(new DatasetRangeSelectionEventHandler() {

   /**
    * Invoked when the user selects an area on the chart.
    * 
    * @param event chart dataset selection event
    */
   @Override 
   public void onSelect(DatasetRangeSelectionEvent event){
      if (event.getTo() == DatasetRangeSelectionEvent.CLEAR_SELECTION) {
         // reset!
      } else {
         // selection!
      }
   }
         
}, DatasetRangeSelectionEvent.TYPE);
```

To update a current selection is NOT mandatory to reset it but it's enough to reselect new area on the chart.

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the options object at the end of configuration.

```java
DatasetsItemsSelectorOptions options = DatasetsItemsSelectorOptionsBuilder.create()
	.setBorderWidth(5)
	.setBorderDash(6, 2, 3)
	.setFireEventOnClearSelection(true)
	.setDisplay(true)
	.setFontSize(18)
	.setAlign(Align.RIGHT_CHART_AREA)
	.setUseSelectionStyle(true)
	.build();

chart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, options);
```

### Constraints

The plugin is working only with **line** and **bar** chart types.

The tooltips are disabled.

Only events `Event.CLICK` and `Event.TOUCHSTART` are activated.

It adds [AtLeastOneDatasetHandler](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/impl/callbacks/AtLeastOneDatasetHandler.html) legend click handler by default to avoid to remove all datasets from chart by legend.

