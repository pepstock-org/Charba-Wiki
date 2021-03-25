---
id: Labels
title: Labels plugin
hide_title: true
sidebar_label: Labels
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Labels plugin

**Charba** provides out of the box the feature to enable [Labels](https://github.com/emn178/chartjs-plugin-labels) which is a light weight plugin to display labels on pie, doughnut and polar area chart (former name was PieceLabel).

<img src={useBaseUrl('/img/labels.png')} />

## Activation

The labels plugin is injected directly in the document.

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
// ENABLING the plugin to a chart instance 
// storing a plugin options 
// --------------------------------------
// creates a plugin options
LabelsOptions options = new LabelsOptions();
// creates a label by "myLabel" id
Label label = options.createLabel("myLabel");
// sets the render
label.setRender(Render.LABEL);
// stores the plugin options directly by the options
options.store(chart);

// --------------------------------------
// ENABLING the plugin to a chart instance 
// by a boolean using default plugin 
// options
// --------------------------------------
chart.getOptions().getPlugins().setEnabled(DataLabelsPlugin.ID, true);
```

## Configuration

The plugin options can be changed at 2 different levels and are evaluated with the following priority:

  * per chart by `chart.getOptions().getPlugins().setOptions` method
  * or globally by `Defaults.get().getGlobal().getPlugins().setOptions` method
  
The configuration [LabelsOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/LabelsOptions.html) class is the entry point of plugin configuration. 

Every [label](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/Label.html) configuration can be add to the [LabelsOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/LabelsOptions.html), assigning them a unique id.
contains all labels needed to configure the plugin.

The id of a label configuration must be set by a string or by a specific class, [IsLabelId](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/IsLabelId.html).

```java
// ------------------------
// CONFIGURES the label by
// IsLabelId id
// ------------------------
// creates a plugin options
LabelsOptions options = new LabelsOptions();
// creates label id
IsLabelId labelId = IsLabelId.create("myLabel1");
// creates and adds a label by "myLabel1" id
Label label = options.createLabel(labelId );
// sets the render
label.setRender(Render.PERCENTAGE);
... // additional label configuration
// stores the plugin options directly by the options
options.store();
```

The below example is showing how to create and add 2 labels (each one must have a unique id):

```java
// ------------------------
// CONFIGURES the multiple 
// labels
// ------------------------
// creates a plugin options
LabelsOptions options = new LabelsOptions();
// creates and adds a label by "myLabel1" id
Label label1 = options.createLabel(IsLabelId.create("myLabel1"));
// sets the render
label1.setRender(Render.LABEL);
... // additional label configuration
// creates and adds a label by "myLabel2" id
Label label2 = options.createLabel("myLabel2");
// sets the render
label2.setRender(new RenderCallback() {
			
	@Override
	public String invoke(IsChart chart, LabelsScriptableContext context) {
		return "$$ "+ (int)(context.getValue() * context.getPercentage() / 100);
	}
});
... // additional label configuration
// stores the plugin options directly by the options
options.store();
```

<img src={useBaseUrl('/img/labelsMultiple.png')} />

You can also change the default for all charts instances, as following

```java
// creates a plugin options
LabelsOptions options = new LabelsOptions();
// creates a label by "myLabel" id
Label label = options.createLabel("myLabel");
// sets the render
label.setRender(Render.LABEL);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(LabelsPlugin.ID, options);
// stores the plugin options without plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store();
```

If you need to read the plugin options, there is the specific factory, [LabelsOptionsFactory](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/LabelsOptionsFactory.html) as static reference inside the [LabelsPlugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/LabelsPlugin.html) entry point which can be used to retrieve the options from chart as following:

```java
// gets options reference
LabelsOptions options;

// --------------------------------------
// GETTING plugin options from chart
// --------------------------------------
if (chart.getOptions().getPlugin().hasOptions(LabelsPlugin.ID)){
   // retrieves the plugin options by plugin ID
   options = chart.getOptions().getPlugin().getOptions(LabelsPlugin.ID, LabelsPlugin.FACTORY);
   //retrieves the plugin options without plugin ID
   options = chart.getOptions().getPlugin().getOptions(LabelsPlugin.FACTORY);
}
```

You can access to the configured labels configurations as following:

```java
// ------------------------
// GETS the configured 
// labels
// ------------------------
// retrieves the plugin options by plugin ID
LabelsOptions options = chart.getOptions().getPlugin().getOptions(LabelsPlugin.FACTORY);
// gets all labels configuration
List<Label> allLabels = options.getLabels();
// gets "myLabel1" label configuration
Label label1 = options.getLabel(IsLabelId.create("myLabel1"));
// gets "myLabel2" label configuration
Label label2 = options.getLabel("myLabel2");
```

## Options

The following options can configure how the labels will look like and they can be applied to the [label](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/Label.html) object.

```java
// creates a plugin options
LabelsOptions options = new LabelsOptions();
// creates label id
IsLabelId labelId = IsLabelId.create("myLabel1");
// creates and adds a label by "myLabel1" id
Label label = options.createLabel(labelId);
// sets the render
label.setRender(Render.LABEL);
```

The complete options are described by following table:

| Name | Type | Callback | Default | Description
| ---- | ---- | -------- | ------- | -----------
| arc | boolean | - | `false` | If `true`, draws label in arc. Bar chart ignores this.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#color-callback) | [default color](../defaults/DefaultsCharts) | The font color of the label.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/Font.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/callbacks/FontColorCallback.html) | [default font](../defaults/DefaultsCharts#font) | The font of label text.
| images | [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)[] | - | `null` | Set images when the rendering is set to Render.IMAGE.
| outsidePadding | int | - | 2 | Add padding when the position is Position.OUTSIDE.
| overlap | boolean | - | `true` | Draw label even it's overlap. Bar chart ignores this.
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/enums/Position.html) | - | Position.DEFAULT | Position to draw label. Bar chart ignores this.
| precision | int | - | 0 | Precision for percentage label text.
| render | [Render](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/enums/Render.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/callbacks/RenderCallback.html) | Render.PERCENTAGE | The value of the label to render.
| shadowBlur | int | - | 6 | The label text shadow intensity.
| shadowOffsetX | int | - | 3 | The label text shadow X offset.
| shadowOffsetY | int | - | 3 | The label text shadow Y offset.
| shadowColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | - | rgba(0,0,0,0.3) | The label text shadow color.
| showActualPercentages | boolean | - | `false` | Show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total.
| showZero | boolean | - | `false` | Identifies whether or not labels of value 0 are displayed
| textMargin | int | - | 2 | The added margin of text when the position is Position.OUTSIDE or Position.BORDER.
| textShadow | boolean | - | `false` | If `true`, draws the text shadows under labels.

## Scriptable

Scriptable options in the plugin configuration accept a callback which is called for each of the underlying data values.

There are 3 options which can be defined as scriptable:

 * `color`, to set the color of the label.
 * `font`, to set the font of the label.
 * `render`, to set the value of the label to render.
 
 The callbacks are getting the same amount and type of argument, as parameters:
 
 * [chart instance](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/IsChart.html) where the plugin is running.
 * [plugin context](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/LabelsScriptableContext.html) which contains the context of the callback execution.
 
## Color callback

The color property can be set by [callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/callbacks/ColorCallback.html), as following:

```java
// creates a plugin options
LabelsOptions options = new LabelsOptions();
// creates label id
IsLabelId labelId = IsLabelId.create("myLabel");
// creates and adds a label by "myLabel" id
Label label = options.createLabel(labelId);
// sets callback
label.setColor(new ColorCallback() {

	/**
	 * Called to change font color at runtime.
	 * 
	 * @param chart chart instance
	 * @param context callback context
	 * @return a font color instance
	 */			
	@Override
	public IsColor invoke(IsChart chart, LabelsScriptableContext context) {
		return context.getDataItem().getValue() > 25 ? HtmlColor.Red : HtmlColor.Black;
	}
});
```

The [LabelsScriptableContext](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/LabelsScriptableContext.html) argument exposes the value to render by a [DataItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DataItem.html) which is a wrapper to the possible values that a dataset can contain:

  * doubles.
  * strings.
  * [FloatingData](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/FloatingData.html), available only for [BAR](../charts/ChartBar#floating-bars) dataset instances.
    * [DataPoint](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/DataPoint.html).

## Font callback

The font property can be set by [callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/callbacks/FontCallback.html), as following:

```java
// creates a plugin options
LabelsOptions options = new LabelsOptions();
// creates label id
IsLabelId labelId = IsLabelId.create("myLabel");
// creates and adds a label by "myLabel" id
Label label = options.createLabel(labelId);
// sets callback
label.setColor(new ColorCallback() {

	/**
	 * Called to set the font of the label at runtime.
	 * 
	 * @param chart chart instance
	 * @param context callback context, passed by plugin
	 * @return a font instance
	 */	
	@Override
	public Font invoke(IsChart chart, LabelsScriptableContext context) {
		Font()
		return context.getDataItem().getValue() > 25 ? HtmlColor.Red : HtmlColor.Black;
	}
});
```

The callback is receiving the chart instance and item instance with all information in order to assign the render.

The [RenderItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/RenderItem.html) argument exposes the value to render by a [DataItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DataItem.html) which is a wrapper to the possible values that a dataset can contain:

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
 