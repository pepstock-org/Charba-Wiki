---
id: PluginCrosshair
title: Crosshair plugin
hide_title: true
sidebar_label: Crosshair
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Crosshair plugin

**Charba** provides a plugin implementation to set the crosshair on the chart when a chart.

Crosshairs are thin vertical and horizontal lines centered on a data point in a chart. When you, as a chart creator, enable crosshairs in your charts, your users will then be able to target a single element.

<img src={useBaseUrl('/img/crosshair.png')} />

This plugin, as singleton, can be set both at global and at chart level.

The implementation is [Crosshair](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/impl/plugins/Crosshair.html) and can be set as following:

```java
// ---------------------------------
// Registers as global plugin
// ---------------------------------
Defaults.get().getPlugins().register(Crosshair.get());
// ---------------------------------
// Registers as single chart plugin
// ---------------------------------
chart.getPlugins().add(Crosshair.get());
```

The ID of plugin is `charbacrosshair` ([Crosshair.ID](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/impl/plugins/Crosshair.html#ID)).

## Options

It could be that you set this plugin as global one for all your charts but you want to change it for only one instance.

In this case you should instantiate a [CrosshairOptions](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/impl/plugins/CrosshairOptions.html) and set it to your chart options as following, setting the color you want:

```java
// creates a plugin options
CrosshairOptions options = new CrosshairOptions();
// set mode 
options.setMode(InteractionAxis.XY);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
chart.getOptions().getPlugin().setOptions(Crosshair.ID, options);
// stores the plugin options without plugin ID
chart.getOptions().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store(chart);
```

You can also change the default for all charts instances, as following

```java
// creates a plugin options
CrosshairOptions options = new CrosshairOptions();
// set mode 
options.setMode(InteractionAxis.XY);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(Crosshair.ID, options);
// stores the plugin options without plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store();
```

If you need to read the plugin options, there is the specific factory, [CrosshairOptionsFactory](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/impl/plugins/CrosshairOptionsFactory.html) as static reference inside the [plugin](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/impl/plugins/Crosshair.html) which can be used to retrieve the options from chart, as following:

```java
// gets options reference
CrosshairOptions options;

// --------------------------------------
// GETTING plugin options from chart
// --------------------------------------
if (chart.getOptions().getPlugin().hasOptions(Crosshair.ID)){
   // retrieves the plugin options by plugin ID
   options = chart.getOptions().getPlugin().getOptions(Crosshair.ID, Crosshair.FACTORY);
   //retrieves the plugin options without plugin ID
   options = chart.getOptions().getPlugin().getOptions(Crosshair.FACTORY);
}
```

The following are the attributes that you can set to plugin options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| enabled | boolean | `true` | If `true`, the plugin is enabled.
| lineColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.GRAY - <span style={{backgroundColor: 'gray', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The color of the line of the cross hairs.
| lineDash | int[] | [2, 2] | The line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.
| lineDashOffset | double | 0 | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| lineWidth | int | 1 | The width of the line of the cross hairs.
| mode | [InteractionAxis](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.XY | Sets the display on horizontal and/or vertical hairs.
| modifierKey | [ModifierKey](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/ModifierKey.html) | `null` | Keyboard modifier key which must be pressed to enable the cross hair.
| xScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/ScaleId.html) | DefaultScaleId.X | The ID of the X axis to use to position the vertical cross hair.
| yScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/ScaleId.html) | DefaultScaleId.Y | The ID of the Y axis to use to position the horizontal cross hair.

## Labelling

The plugin enables the labels on the scales in order to show the values of the cross hair. You can configure separately the labels on X and Y.

```java
// creates a plugin options
CrosshairOptions options = new CrosshairOptions();
// set X label options
options.getXLabel().setBackgroundColor(HtmlColor.RED);
// set Y label options
options.getYLabel().setBackgroundColor(HtmlColor.YELLOW);
```

The following are the attributes that you can set to plugin label options:

| Name | Type | Default | Description
| :- | :- | :- | :-
| display | boolean | `true` | If `true`, the label is shown.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | rgb(110, 112, 121) - <span style={{backgroundColor: 'rgb(110, 112, 121)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The background color of the label.
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | The border color of the label.
| borderRadius | int | 6 | The border radius of the label.
| borderWidth | int | 0 | The border width of the label.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.WHITE - <span style={{backgroundColor: 'white', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The color of the text of the label.
| font | [IsFont](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/options/IsFont.html) | See description | Font of the text of the label.<br/><br/>The default value is the global font.<br/>See [Font](../defaults/DefaultsCharts#font).
| padding | int | 6 | The space around the text of the label.

To set the same value to both labels, without writing twice the same code, [CrosshairOptions](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/impl/plugins/CrosshairOptions.html) is providing a objet which enables that:

```java
// creates a plugin options
CrosshairOptions options = new CrosshairOptions();
// set background color to X and Y labels
options.getLabels().setBackgroundColor(HtmlColor.RED);
```

### Formatter

The plugin provides a callback to change the format the value of label text in order to show whatever is needed.

<img src={useBaseUrl('/img/crosshairLabelFormatter.png')} />

The formatter can be instantiated implementing [CrosshairFormatterCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/CrosshairFormatterCallback.html) interface which is providing 3 parameters:

 1. chart instance
 1. the scale instance, where the label is related to.
 1. the value, retrieved from the scale at the position of the cross hair.

```java
// creates a plugin options
CrosshairOptions options = new CrosshairOptions();
// set Y label formatter
options.getYLabel().setFormatter(new CrosshairFormatterCallback() {

	/**
	 * Returns the text to apply to the crosshair label.
	 * 
	 * @param chart chart instance
	 * @param scale scale instance
	 * @param value current value to draw in the label
	 * @return the text to apply to the crosshair label
	 */
	@Override
	public String format(IsChart chart, ScaleItem scale, ScaleValueItem value) {
		if (format.getValue()) {
			return Utilities.applyPrecision(value.getValue(), 0);
		}
		return value.getLabel();
	}
});
```

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the options object at the end of configuration.

```java
// creates a plugin options
CrosshairOptions options = CrosshairOptionsBuilder.create()
	.setMode(InteractionAxis.XY)
	.setXLabelBackgroundColor(HtmlColor.RED)
	.build();
// sets options
chart.getOptions().getPlugins().setOptions(Crosshair.ID, options);
```

Creating a build by `CrosshairOptionsBuilder.create()` it will use the global options as default, instead by `CrosshairOptionsBuilder.create(chart)` it will use the global chart options as default.
 