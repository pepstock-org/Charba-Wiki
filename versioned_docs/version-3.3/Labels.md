---
id: Labels
title: Labels plugin
hide_title: true
sidebar_label: Labels
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Labels plugin

**Charba** provides out of the box the feature to enable [Labels](https://github.com/emn178/chartjs-plugin-labels) which is a light weight plugin to display labels on pie, doughnut and polar area chart (former name was PieceLabel).

**Charba** is injecting the `chartjs-plugin-labels.min.js`, the released version [1.1.0](https://github.com/emn178/chartjs-plugin-labels/releases/tag/v1.1.0).

<img src={useBaseUrl('/img/labels.png')} />

## Activation

The labels plugin is injected directly into document.

The plugin ID is a constant everywhere available, `LabelsPlugin.ID`, in [LabelsPlugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/LabelsPlugin.html) entry point.

This plugin registers itself globally, meaning that once injected, all charts will display labels. In case you want it enabled only for a few charts, you can enable it as following:

```java
// --------------------------------------
// enabling the plugin without any parameter
// the plugin is NOT registered to all charts
// --------------------------------------
LabelsPlugin.enable();

// --------------------------------------
// enabling the plugin with `true` parameter
// the plugin is registered to all charts
// --------------------------------------
LabelsPlugin.enable(true)
```

To activate the plugin in a specific chart, it's enough to provide the configuration options (see [below](Labels#configuration)) or enabling it by:

```java
// --------------------------------------
// enabling the plugin to a chart instance 
// by an options
// --------------------------------------
chart.getOptions().getPlugins().setOptions(LabelsPlugin.ID, options);

// --------------------------------------
// Another way to store the plugin options
// enabling the plugin to a chart instance 
// --------------------------------------
chart.getOptions().getPlugins().setOptions(options);

// --------------------------------------
// enabling the plugin to a chart instance 
// by a boolean using default
// --------------------------------------
chart.getOptions().getPlugins().setEnabled(LabelsPlugin.ID, true);
```

If you need to read the plugin options, there is the specific factory, [LabelsOptionsFactory](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/LabelsOptionsFactory.html) as static reference inside the [LabelsPlugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/LabelsPlugin.html) entry point which can be used to retrieve the options from chart as following:

```java
// --------------------------------------
// reads the options from chart
// --------------------------------------
LabelsOptions options;

if (chart.getOptions().getPlugins().hasOptions(LabelsPlugin.ID)){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(LabelsPlugin.ID, LabelsPlugin.FACTORY);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(LabelsPlugin.FACTORY);
}
```

## Configuration

The plugin options can be changed at 2 different levels and are evaluated with the following priority:

  * per chart by `chart.getOptions().getPlugins().setOptions` method
  * or globally by `Defaults.get().getGlobal().getPlugins().setOptions` method
  
The configuration class [LabelsOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/LabelsOptions.html) contains all properties needed to configure the plugin.

```java
// --------------------------------------
// creating object and setting some properties
// --------------------------------------
LabelsOptions options = new LabelsOptions();
option.setFontColor(HtmlColor.FLORAL_WHITE);
option.setRender(new RenderCallback() {
			
	@Override
	public String invoke(IsChart chart, RenderItem item) {
		return "$$ "+ (int)(item.getValue() * item.getPercentage() / 100);
	}
});
```

The labels plugin enables to add more than 1 options in order to configure it, by a list of options, as following:

```java
LabelsOptions option1 = new LabelsOptions();
option1.setRender(Render.LABEL);
option1.setFontColor(HtmlColor.BLACK);
option1.setArc(true);
option1.setPosition(Position.OUTSIDE);

LabelsOptions option2 = new LabelsOptions();
option2.setRender(Render.PERCENTAGE);
option2.setFontColor(HtmlColor.WHITE);

chart.getOptions().getPlugins().setOptions(LabelsPlugin.ID, Arrays.asList(option1, option2));
```

The complete options are described by following table:

| Name | Type | Callback | Default | Description
| ---- | ---- | -------- | ------- | -----------
| render | [Render](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/enums/Render.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/callbacks/RenderCallback.html) | Render.PERCENTAGE | Value to render
| precision | int | | 0 | Precision for percentage
| showZero | boolean | | `false` | Identifies whether or not labels of value 0 are displayed
| fontSize | int | | [defaultFontSize](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontSize--) | Font size
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/callbacks/FontColorCallback.html) | [defaultFontColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontColorAsString--) | Font color
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | | [defaultFontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontStyle--) | Font style
| fontFamily | String | | [defaultFontFamily](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontFamily--) | Font family
| textShadow | boolean | | `false` | Draw text shadows under labels
| shadowBlur | int | | 6 | Text shadow intensity
| shadowOffsetX | int | | 3 | Text shadow X offset
| shadowOffsetY | int | | 3 | Text shadow Y offset
| shadowColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | | rgba(0,0,0,0.3) | Text shadow color
| arc | boolean | | `false` | Draw label in arc. Bar chart ignores this
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/enums/Position.html) | | Position.DEFAULT | Position to draw label. Bar chart ignores this
| overlap | boolean | | `true` | Draw label even it's overlap. Bar chart ignores this
| showActualPercentages | boolean | | `false` | Show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total
| images | [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)[] | | `null` | Set images when `render` is `image`
| outsidePadding | int | | 2 | Add padding when `position` is `outside`
| textMargin | int | | 2 | add margin of text when `position` is `outside` or `border`

## Font Color callback

The font color property can be set by [callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/callbacks/FontColorCallback.html), as following:

```java
DataLabelsOptions options = new DataLabelsOptions();
option.setFontColor(new FontColorCallback() {
			
	@Override
	public IsColor invoke(IsChart chart, FontColorItem item) {
		return item.getDataItem().getValue() > 25 ? HtmlColor.Red : HtmlColor.Black;
	}
});
```

The callback is receiving the chart instance and item instance with all information in order to assign the color.

The [FontColorItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/FontColorItem.html) argument exposes the value to render by a [DataItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DataItem.html) which is a wrapper to the possible values that a dataset can contain:

  * doubles
  * strings, available only for line dataset instances
  * [FloatingData](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/FloatingData.html), available only for bar dataset instances

## Render callback

The render property can be set by [callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/callbacks/RenderCallback.html), as following:

```java
LabelsOptions option = new LabelsOptions();
option.setRender(new RenderCallback() {
			
	@Override
	public String invoke(IsChart chart, RenderItem item) {
		return "$$ "+ (int)(item.getDataItem().getValue() * item.getPercentage() / 100);
	}
});
```

The callback is receiving the chart instance and item instance with all information in order to assign the render.

The [RenderItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/RenderItem.html) argument exposes the value to render by a [DataItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DataItem.html) which is a wrapper to the possible values that a dataset can contain:

  * doubles
  * strings, available only for line dataset instances
  * [FloatingData](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/FloatingData.html), available only for bar dataset instances

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the options object at the end of configuration.

```java
LabelsOptions options = LabelsOptionsBuilder.create().setRender(Render.PERCENTAGE).setFontColor(HtmlColor.WHITE).setPrecision(2).build();
chart.getOptions().getPlugins().setOptions(LabelsPlugin.ID, options);
```

Creating a build by `LabelsOptionsBuilder.create()` it will use the global options as default, instead by `LabelsOptionsBuilder.create(chart)` it will use the global chart options as default.
 