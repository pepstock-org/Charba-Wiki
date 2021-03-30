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

<br/>
<br/>

:::note
The plugin has been heavily changed in order to be compliant with [Chart.JS](http://www.chartjs.org/) version 3.0.0) in the **Charba** [project](https://github.com/pepstock-org/Charba/blob/master/src/org/pepstock/charba/client/resources/js/chartjs-plugin-labels.js) because the [original project](https://github.com/emn178/chartjs-plugin-labels) is unmaintained.
:::

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

To activate the plugin in a specific chart, it's enough to provide the configuration options (see [below](#configuration)) or enabling it by:

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

Every [label](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/Label.html) configuration can be add to the [LabelsOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/LabelsOptions.html), assigning a unique id.

The id of a label configuration can be set by a string or by a specific class, [IsLabelId](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/IsLabelId.html).

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
Label label = options.createLabel(labelId);
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
	public String invoke(LabelsContext context) {
		return "$$ "+ (int)(context.getValue() * context.getPercentage() / 100);
	}
});
... // additional label configuration
// stores the plugin options directly by the options
options.store();
```

<img src={useBaseUrl('/img/labelsMultiple.png')} />

You can also change the default for all charts instances, as following:

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
// gets all labels configurations
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
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#color) | [default color](../defaults/DefaultsCharts) | The font color of the label.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/Font.html) | [Yes](#font) | [default font](../defaults/DefaultsCharts#font) | The font of label text.
| images | [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)[] | - | `null` | Set images when the rendering is set to Render.IMAGE.
| outsidePadding | int | - | 2 | Add padding when the position is Position.OUTSIDE.
| overlap | boolean | - | `true` | Draw label even it's overlap. Bar chart ignores this.
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/enums/Position.html) | - | Position.DEFAULT | Position to draw label. Bar chart ignores this.
| precision | int | - | 0 | Precision for percentage label text.
| render | [Render](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/enums/Render.html) | [Yes](#render) | Render.PERCENTAGE | The value of the label to render.
| shadowBlur | int | - | 6 | The label text shadow intensity.
| shadowOffsetX | int | - | 3 | The label text shadow X offset.
| shadowOffsetY | int | - | 3 | The label text shadow Y offset.
| shadowColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | - | rgba(0,0,0,0.3) - <span style={{backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The label text shadow color.
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
 
The callbacks are getting the only 1 argument, the [plugin context](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/LabelsContext.html) which contains the context of the callback execution.

The context object contains the following properties:

| Name | Type | Description
| ---- | ---- | ----
| active | boolean | Whether the associated element is hovered.
| chart | [IsChart](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/IsChart.html) | Chart instance. 
| dataIndex | int | The index of the current data.
| dataItem | [DataItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DataItem.html) | The value of the label.
| datasetIndex | int | The index of the current data set.
| datasetItem | [DatasetItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DatasetItem.html) | The data set information for this data
| datasetElement | [DatasetElement](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DatasetElement.html) | The element (point, arc, bar, etc.) for this data
| labels | String | The string representation of the value of the label.
| percentage | double | The percentage representation of the value of the label.
| type | [ContextType](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ContextType.html) | The type of the context. It can be ONLY `ContextType.LABELS`.
 
### Color 

You can set the color of the labels at runtime, providing different colors for different labels.

<img src={useBaseUrl('/img/labelsColorCallback.png')} />

The color property can be set as [scriptable option](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/callbacks/ColorCallback.html), as following:

```java
// creates a plugin options
LabelsOptions options = new LabelsOptions();
// creates label id
IsLabelId labelId = IsLabelId.create("myLabel");
// creates and adds a label by "myLabel" id
Label label = options.createLabel(labelId);
// sets callback
label.setColor(new ColorCallback<LabelsContext>() {

	/**
	 * Called to change font color at runtime.
	 * 
	 * @param context callback context
	 * @return a font color instance
	 */			
	@Override
	public IsColor invoke(LabelsContext context) {
		return context.getDataIndex() % 2 == 0 ? 
			HtmlColor.BLACK : 
			HtmlColor.RED;
	}
});
```

### Font

You can set the font of the labels at runtime, providing different font for different labels.

<img src={useBaseUrl('/img/labelsFontCallback.png')} />

The font property can be set as [scriptable option](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/FontCallback.html), providing a [font item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/FontItem.html) instance, as following:

```java
// creates a plugin options
LabelsOptions options = new LabelsOptions();
// creates label id
IsLabelId labelId = IsLabelId.create("myLabel");
// creates and adds a label by "myLabel" id
Label label = options.createLabel(labelId);
// sets callback
label.setColor(new FontCallback<LabelsContext>() {

	/**
	 * Called to set the label font at runtime.
	 * 
	 * @param context callback context
	 * @return a font instance
	 */	
   @Override
   public Font invoke(LabelsContext context) {
      FontItem fontItem = new FontItem();
      int size = context.getDataIndex() % 2 == 0 ? 32 : 12;
      fontItem.setSize(size);
      return fontItem;
   }
});
```

### Render

You can set the value of the labels to show on the chart at runtime, providing different values for different labels.

<img src={useBaseUrl('/img/labelsRenderCallback.png')} />

The render property can be set as [scriptable option](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/labels/callbacks/RenderCallback.html), as following:

```java
// creates a plugin options
LabelsOptions options = new LabelsOptions();
// creates label id
IsLabelId labelId = IsLabelId.create("myLabel");
// creates and adds a label by "myLabel" id
Label label = options.createLabel(labelId);
// sets callback
label.setRender(new RenderCallback<LabelsContext>() {

	/**
	 * Called to set the label render at runtime.
	 * 
	 * @param context callback context
	 * @return a font instance
	 */	
	@Override
	public String invoke(LabelsContext context) {
		return context.getDataIndex() % 2 == 0 ? 
			"Percentage: "+context.getPercentage() : 
			"Value: "+context.getDataItem().getValue();
	}
});
```

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the options object at the end of configuration.

```java
// creates a plugin options
LabelsOptions options = LabelsOptionsBuilder.create()
	.setRender(Render.PERCENTAGE)
	.setFontColor(HtmlColor.WHITE)
	.setPrecision(2)
	.build();
// sets options
chart.getOptions().getPlugins().setOptions(LabelsPlugin.ID, options);
```

Creating a build by `LabelsOptionsBuilder.create()` it will use the global options as default, instead by `LabelsOptionsBuilder.create(chart)` it will use the global chart options as default.
 