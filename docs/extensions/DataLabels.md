---
id: DataLabels
title: DataLabels plugin
hide_title: true
sidebar_label: DataLabels
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## DataLabels plugin

**Charba** provides out of the box the feature to enable [DataLabels](https://github.com/chartjs/chartjs-plugin-datalabels) which is a highly customizable plugin that displays labels on data for any type of charts, with all its capabilities.

<img src={useBaseUrl('/img/dataLabels.png')} />

## Activation

(quoted from [documentation guide](https://github.com/chartjs/chartjs-plugin-datalabels/tree/master/docs/guide) of DataLabels project)

The data labels plugin is injected directly in the document.

The plugin ID is a constant everywhere available, `DataLabelsPlugin.ID`, in [DataLabelsPlugin](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/DataLabelsPlugin.html) entry point.

This plugin registers itself globally, meaning that once injected, all charts will display labels. In case you want it enabled only for a few charts, you can enable it as following:

```java
// --------------------------------------
// enabling the plugin without any parameter
// the plugin is NOT registered to all charts
// --------------------------------------
DataLabelsPlugin.enable();

// --------------------------------------
// enabling the plugin with `true` parameter
// the plugin is registered to all charts
// --------------------------------------
DataLabelsPlugin.enable(true)
```

To activate the plugin in a specific chart, it's enough to provide the configuration options (see [below](#configuration)) or enabling it by:

```java
// --------------------------------------
// ENABLING the plugin to a chart instance 
// storing a plugin options 
// --------------------------------------
// creates a plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets the align options
options.setAlign(Align.CENTER);
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

The plugin options can be changed at 3 different levels and are evaluated with the following priority:

  * per dataset, by `dataset.setOptions` method
  * per chart by `chart.getOptions().getPlugins().setOptions` method
  * per chart type by `Defaults.get().getOptions([chartType]).getPlugins().setOptions` method
  * or globally by `Defaults.get().getGlobal().getPlugins().setOptions` method
  
The configuration class [DataLabelsOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/DataLabelsOptions.html) contains all properties needed to configure the plugin.

```java
// creates a plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets the align options
options.setAlign(Align.CENTER);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
chart.getOptions().getPlugins().setOptions(DataLabelsPlugin.ID, options);
// stores the plugin options without plugin ID
chart.getOptions().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store(chart);
```

You can also change the default for all charts instances, as following:

```java
// creates a plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets the align options
options.setAlign(Align.CENTER);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(DataLabelsPlugin.ID, options);
// stores the plugin options without plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store();
```

If you need to read the plugin options, there is the specific factory, [DataLabelsOptionsFactory](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/DataLabelsOptionsFactory.html) as static reference inside the [DataLabels](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/DataLabels.html) entry point which can be used to retrieve the options from chart as following:

```java
// gets options reference
DataLabelsOptions options;

// --------------------------------------
// GETTING plugin options from chart
// --------------------------------------
if (chart.getOptions().getPlugin().hasOptions(DataLabelsPlugin.ID)){
   // retrieves the plugin options by plugin ID
   options = chart.getOptions().getPlugin().getOptions(DataLabelsPlugin.ID, DataLabelsPlugin.FACTORY);
   //retrieves the plugin options without plugin ID
   options = chart.getOptions().getPlugin().getOptions(DataLabelsPlugin.FACTORY);
}
```

## Options

The complete options are described by following table:

| Name | Type | Callback | Default
| ---- | ---- | -------- | ----
| [align](DataLabels#alignment-and-offset) | [Align](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Align.html) | [Yes](#scriptable) | Align.CENTER
| [anchor](DataLabels#anchoring) | [Anchor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Anchor.html) | [Yes](#scriptable) | Anchor.CENTER
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | `null`
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | `null`
| borderRadius | double | [Yes](#scriptable) | 0
| borderWidth | int | [Yes](#scriptable) | 0
| [clamp](DataLabels#clamping) | boolean | [Yes](#scriptable) | false
| [clip](DataLabels#clipping) | boolean | [Yes](#scriptable) | false
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) |[default color](../defaults/DefaultsCharts) 
| [display](DataLabels#visibility) | [Display](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Display.html) | [Yes](#scriptable) | Display.TRUE
| [offset](DataLabels#alignment-and-offset) | int | [Yes](#scriptable) | 4
| opacity | double | [Yes](#scriptable) | 1
| [rotation](DataLabels#rotation) | double | [Yes](#scriptable) | 0
| [textAlign](DataLabels#text-alignment) | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/TextAlign.html) | [Yes](#scriptable) | TextAlign.START
| textStrokeColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | the `color` property
| textStrokeWidth | int | [Yes](#scriptable) | 0
| textShadowBlur | double | [Yes](#scriptable) | 0
| textShadowColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](#scriptable) | the `color` property

## Scriptable

All options also accept a callback which is called for each data and that takes the context as unique argument, [DataLabelsContext](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/DataLabelsContext.html) representing contextual information and chart instance.

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets background color callback
options.setBackgroundColor(new ColorCallback<DataLabelsContext>() {

   @Override
   public IsColor invoke(DataLabelsContext context) {
      IsChart chart = context.getChart();
      List<Dataset> datasets = chart.getData().getDatasets();
      LineDataset dataset = (LineDataset)datasets.get(context.getDatasetIndex());
      return dataset.getBackgroundColor();
   }
});
```

The context object contains the following properties:

| Name | Type | Description
| ---- | ---- | ----
| active | boolean | Whether the associated element is hovered.
| chart | [IsChart](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/IsChart.html) | Chart instance. 
| dataIndex | int | The index of the current data.
| datasetIndex | int | The index of the current data set.
| datasetItem | [DatasetItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DatasetItem.html) | The data set information for this data
| datasetElement | [DatasetElement](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DatasetElement.html) | The element (point, arc, bar, etc.) for this data
| type | [ContextType](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/ContextType.html) | The type of the context. It can be ONLY `ContextType.DATALABELS`.

The colored properties (backgroundColor, borderColor, color, textStrokeColor and textShadowColor) can be set (by callbacks) also to a [pattern](../coloring/Patterns), [gradient](../coloring/Gradients), [CanvasPatternItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html) or [CanvasGradientItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html), as following:

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets background color callback
options.setBackgroundColor(new ColorCallback<DataLabelsContext>() {

   @Override
   public IsColor invoke(DataLabelsContext context) {
      IsChart chart = context.getChart();
      List<Dataset> datasets = chart.getData().getDatasets();
      LineDataset dataset = (LineDataset)datasets.get(context.getDatasetIndex());
      return dataset.getBackgroundColorAsPattern();
   }
});
```

:::note
The gradient coordinates are relative the label coordinates (local), not relative to the canvas coordinates (global), as reported in [this thread](https://github.com/chartjs/chartjs-plugin-datalabels/issues/114), therefore don't use **Charba** [gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)  object but directly the [CanvasGradientItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html) if you need to use gradients.
:::

See the example here how to use gradients in the meantime:

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets background color callback
options.setBackgroundColor(new ColorCallback<DataLabelsContext>() {
			
   CanvasGradientItem gradient = null;

   @Override
   public CanvasGradientItem invoke(DataLabelsContext context) {
      IsChart chart = context.getChart();
      if (gradient == null) {
         // creates a canvas gradient
         gradient = chart.getCanvas().getContext2d().createLinearGradient(-25, -25, 25, 25);
         gradient.addColorStop(0, "#fff000");
         gradient.addColorStop(1, "#000fff");
      }
      return gradient;
   }
});
```

As workaround, you can use the following code which get the color at specific offset from a gradient:

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets background color callback
option.setBackgroundColor(new ColorCallback<DataLabelsContext>() {

   @Override
   public IsColor invoke(DataLabelsContext context) {
      IsChart chart = context.getChart();
      List<Dataset> datasets = chart.getData().getDatasets();
      LineDataset dataset = (LineDataset)datasets.get(context.getDatasetIndex());
      Gradient gradient = dataset.getBackgroundColorAsGradient();
      // calculates the factor on data count
      double factor = dataset.getData().size() > 0 ? context.getIndex() * 1D / (dataset.getData().size() -1) : 0;
      // calculates the interpolation for gradient 
      return gradient.getInterpolatedColorByOffset(factor);
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| [align](DataLabels#alignment-and-offset) | [AlignCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/AlignCallback.html) | [Align](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Align.html)
| [anchor](DataLabels#anchoring) | [AnchorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/AnchorCallback.html) | [Anchor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Anchor.html)
| backgroundColor | [ColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DataLabelsContext&gt; | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| borderColor | [ColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DataLabelsContext&gt; | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| borderRadius | [RadiusCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/RadiusCallback.html)&lt;DataLabelsContext&gt; | double
| borderWidth | [WidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;DataLabelsContext&gt; | int
| [clamp](DataLabels#clamping) | [ClampCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/ClampCallback.html) | boolean
| [clip](DataLabels#clipping) | [ClipCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/ClipCallback.html) | boolean
| color | [ColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DataLabelsContext&gt; | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| [display](DataLabels#visibility) | [DisplayCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/DisplayCallback.html) | [Display](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Display.html)
| [offset](DataLabels#alignment-and-offset) | [OffsetCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/OffsetCallback.html)&lt;DataLabelsContext&gt; | int
| opacity | [OpacityCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/OpacityCallback.html) | double
| [rotation](DataLabels#rotation) | [RotationCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;DataLabelsContext&gt; | double
| [textAlign](DataLabels#text-alignment) | [TextAlignCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/TextAlignCallback.html) | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/TextAlign.html)
| textStrokeColor | [ColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DataLabelsContext&gt; | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [WidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;DataLabelsContext&gt; | int
| textShadowBlur | [TextShadowBlurCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/TextShadowBlurCallback.html) | double
| textShadowColor | [ColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DataLabelsContext&gt; | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)

## Font

Every options has got a inner element to set font options.

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets options
options.getFont().setFontSize(12);
options.getFont().setWeight(Weight.BOLD);
```

The complete options are described by following table:

| Name | Type | Default | Descriptions
|:- |:- |:- |:-  
| fontFamily | String | [default font family](../defaults/DefaultsCharts#font) | The font family of label.
| fontSize | int | [default font size](../defaults/DefaultsCharts#font) | The font size of label.
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | [default font style](../defaults/DefaultsCharts#font) | The font style of label.
| weight | [Weight](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Weight.html) | [default font weight](../defaults/DefaultsCharts#font) | Font weight (boldness) for text.
| [lineHeight](#multiple-lines-of-labels-text) | double - String | 1.2 | Height of an individual line of text.

The font element can be set as [scriptable option](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/FontCallback.html), providing a [font item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/FontItem.html) instance, as following:

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets options
options.setFont(new FontCallback<DataLabelsContext>() {

   @Override
   public Font invoke(DataLabelsContext context) {
      FontItem font = new FontItem(); 
      // your logic
      return font;
   }
});
```

## Padding

Every options has got a inner element to set padding options.

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets options
options.getPadding().setTop(12);
```

The complete options are described by following table:

| Name | Type |  Default
| ---- | ---- | ----
| top | int | 4
| right | int | 4
| bottom | int | 4
| left | int | 4

The padding element can be set as [scriptable option](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/PaddingCallback.html), as following:

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets options
options.setPadding(new PaddingCallback() {

   @Override
   public Padding invoke(DataLabelsContext context) {
      Padding padding = new Padding(); 
      // your logic
      return padding;
   }
});
```

## Labels

By default, a single label is created per data, however, it's possible to define multiple labels for each data element using the labels option.

This option is an object where each property represents a new label, the key being the label key and the value being the options specific to each label.

The following example shows how to set multiple labels to a dataset:

```java
// creates datasest
PieDataset dataset = chart.newDataset();
// creates plugin options
DataLabelsOptions mainOptionForDataset = new DataLabelsOptions();
// creates additional "index" label
LabelItem index = mainOptionForDataset.getLabels().createLabel("index");
index.setAlign(Align.END);
index.setAnchor(Anchor.END);
... // additional label configuration
// creates additional "name" label
LabelItem name = mainOptionForDataset.getLabels().createLabel("name");
name.setAlign(Align.TOP);
name.getFont().setSize(18);
... // additional label configuration
// stores the options to the dataset
dataset.setOptions(DataLabelsPlugin.ID, mainOptionForDataset);
```

<img src={useBaseUrl('/img/dataLabelsMultiLabels.png')} />

:::note PAY ATTENTION
Options defined under each labels, always overrides options defined at the chart and dataset level.
:::

## Anchoring

An anchor point is defined by an orientation vector and a position on the data element. The orientation depends on the scale type (vertical, horizontal or radial). The position is calculated based on the [Anchor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Anchor.html) option and the orientation vector.

Supported values for [Anchor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Anchor.html):
- `center` (default): element center
- `start`: lowest element boundary
- `end`: highest element boundary

<img src={useBaseUrl('/img/anchor.png')} />

## Clamping

The `clamp` option, when `true`, enforces the anchor position to be calculated based on the *visible geometry* of the associated element (i.e. part inside the chart area).

<img src={useBaseUrl('/img/clamp.png')} />

If the element is fully hidden (i.e. entirely outside the chart area), anchor points will **not** be adjusted and thus will also be outside the viewport.

## Alignment and Offset

The [Align](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Align.html) option defines the position of the label relative to the anchor point position and orientation. Its value can be expressed either by a number representing the clockwise angle (in degree) or by one of the following string presets:

- `center` (default): the label is centered on the anchor point
- `start`: the label is positioned before the anchor point, following the same direction
- `end`: the label is positioned after the anchor point, following the same direction
- `right`: the label is positioned to the right of the anchor point (0)
- `bottom`: the label is positioned to the bottom of the anchor point (90)
- `left`: the label is positioned to the left of the anchor point (180)
- `top`: the label is positioned to the top of the anchor point (270)

The `offset` represents the distance (in pixels) to pull the label *away* from the anchor point. This option is **not applicable** when [Align](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Align.html) is `'center'`. Also note that if [Align](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Align.html) is `'start'`, the label is moved in the opposite direction. The default value is `4`.

<img src={useBaseUrl('/img/align.png')} />

## Rotation

This option controls the clockwise rotation angle (in degrees) of the label, the rotation center point being the label center. The default value is `0` (no rotation).

## Visibility

The [Display](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Display.html) option controls the visibility of labels and accepts the following values:

- `true` (default): the label is drawn
- `false`: the label is hidden
- `auto`: the label is hidden if it overlaps with another label

## Overlap

The [Display](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Display.html) is `auto` option can be used to prevent overlapping labels, based on the following rules when two labels overlap:

- if both labels are `true`, they will be drawn overlapping
- if both labels are `auto`, the one with the highest data index will be hidden. If labels are at the same data index, the one with the lowest dataset index will be hidden
- if one label is `true` and the other one is `auto`, the one with `auto` will be hidden (whatever the data/dataset indices)

Labels with `false` don't contribute to the overlap detection.

## Clipping

When the `clip` option is `true`, the part of the label which is outside the chart area will be masked.

## Formatting

Every options has got a inner element to set formatter callback.

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets formatter callback
option.setFormatter(new FormatterCallback() {
	
	/**
	 * Returns the formatted label value.
	 * 
	 * @param context plugin context instance
	 * @param dataItem value container to be formatted.
	 * @return the label value to be showed
	 */         
   @Override
   public String invoke(DataLabelsContext context, DataItem dataItem) {
      // your logic
      return formettedValue;
   }
});
```

The default behavior can be overridden thanks to the `formatter` option.

The [DataItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DataItem.html) argument is a wrapper to the possible values that a dataset can contain:

  * doubles.
  * strings.
  * [FloatingData](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/FloatingData.html), available only for [BAR](../charts/ChartBar#floating-bars) dataset instances.
  * [DataPoint](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/DataPoint.html).

### Multiple lines of labels text

Labels can be displayed on multiple lines by using the newline character (`\n`) between each line or by providing an array of strings where each item represents a new line.

Example:

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets formatter callback
option.setFormatter(new FormatterCallback() {
         
   @Override
   public String invoke(DataLabelsContext context, DataItem dataItem) {
      StringBuffer sb = new StringBuffer();
      sb.append("line1").append('\n').append("line2").append('\n').append(dataItem.getValue());
      return sb.toString();
   }
});
```

The space between each line can be adjusted using the font `lineHeight` option.

## Text Alignment

The [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/TextAlign.html) option only applies to multiline labels and specifies the text alignment being used when drawing the label text. Note that  right-to-left text detection based on the current locale is not currently implemented.

Supported values for [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/TextAlign.html):

- `start` (default): the text is left-aligned
- `center`: the text is centered
- `end`: the text is right-aligned
- `left`: alias of `start`
- `right`: alias of `end`

## Listeners element

Every options has got a inner element to set listener handlers.

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets "enter" event handler
option.getListeners().setEnterEventHandler(new EnterEventHandler() {
      
   @Override
   public boolean onEnter(DataLabelsContext context) {
      IsChart chart = context.getChart();
      chart.getCanvas().getElement().getStyle().setCursorType(CursorType.POINTER);
      return true;
   }
});
// sets "leave" event handler
option.getListeners().setLeaveEventHandler(new LeaveEventHandler() {
         
   @Override
   public boolean onLeave(DataLabelsContext context) {
      IsChart chart = context.getChart();
      chart.getCanvas().getElement().getStyle().setCursorType(CursorType.DEFAULT);
      return true;
   }
});
```

The `listeners` element allows to register callbacks to be notified when an event is detected on a specific label. This option is an object where the property is the type of the event to listen and the value is a callback with a unique `context` argument.

The `context` contains the same information as for other callbacks, can be modified (e.g. add new options, by `context.setOptions` method) and thus, **if the callback explicitly returns `true`**, the label is updated with the new context and the chart re-rendered. This allows to implement visual interactions with labels such as highlight, selection, etc.

Listeners can be registered for any label at chart level or for labels of a specific dataset.

If no listener is registered, incoming events are immediately ignored, preventing extra computation such as intersecting label bounding box. That means there should be no performance penalty for configurations that don't use events.

### Events

This plugin currently supports the following label events and interface to be implemented:

| **Name** | **Charba events** | **Description**
| ---- | ---- | ----
| enter | `mousemove` | the mouse is moved over a label. See [EnterEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/events/EnterEventHandler.html)
| leave | `mousemove` | the mouse is moved out of a label. See  [LeaveEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/events/LeaveEventHandler.html)
| click | `click` | the mouse's primary button is pressed and released on a label. See [ClickEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/events/ClickEventHandler.html)

**Charba** event that need to be enabled in order to get the associated label event working.

**Charba** provides an abstract handler implementation with all interfaces ([AbstractEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/events/AbstractEventHandler.html)) which can be extended, only with needed methods, and add easily as following:

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// sets event handlers
options.setListenersHandler(new AbstractEventHandler() {

	// overrides methods

});
```

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the options object at the end of configuration.

```java
// creates plugin options
DataLabelsOptions options = DataLabelsOptionsBuilder.create()
	.setAlign(Align.center)
	.setBackgroundColor(new ColorCallback<DataLabelsContext>() {
	
	   @Override
	   public IsColor invoke(DataLabelsContext context) {
	      IsChart chart = context.getChart();
	      List<Dataset> datasets = chart.getData().getDatasets();
          LineDataset dataset = (LineDataset)datasets.get(context.getDatasetIndex());
	      return dataset.getBackgroundColor();
	   }
	}).build();
// stores plugin options to the chart
chart.getOptions().getPlugins().setOptions(DataLabelsPlugin.ID, options);
```

Creating a build by `DataLabelsOptionsBuilder.create()` it will use the global options as default, instead by `DataLabelsOptionsBuilder.create(chart)` it will use the global chart options as default.

## Out-of-the-box implementations

**Charba** provides some callbacks implementations, developed for common purposes.

### Cursor handler

**Charba** provides a common listener handler for [listener](#listeners-element) to change the cursor type when the labels are clickable.

To apply the handler, you can set an instance to the plugin options, as following:

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// creates the handler instance
// uses the CursorType.POINTER
DataLabelsPointerHandler handler = new DataLabelsPointerHandler();
// sets the handler
options.setListenersHandler(handler);
```

The handler can be customized at constructor level, setting which [cursor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/enums/CursorType.html) must be used hovering the labels, as following:

```java
// creates the handler instance
// uses the CursorType.POINTER
DataLabelsPointerHandler handler = new DataLabelsPointerHandler();
// creates the handler instance
// uses the CursorType.CROSSHAIR
DataLabelsPointerHandler handler = new DataLabelsPointerHandler(CursorType.CROSSHAIR);
```

### Selection handler

**Charba** provides a common listener handler for [listener](#listeners-element) to invoke data set selection handlers if there were defined. The handler accepts [DatasetSelectionEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/DatasetSelectionEventHandler.html) instances in order to notify which data set has been selected clicking on the label.

To apply a callback, you can set an instance to the plugin options, as following:

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// creates the handler instance
DataLabelsSelectionHandler handler = new DataLabelsSelectionHandler();
// adds the handler
handler.addDatasetSelectionEventHandler(new DatasetSelectionEventHandler() {
	
	/**
	 * Invoked when the user clicks on the chart to select a data set.
	 * 
	 * @param event chart data set selection event
	 */			
	@Override
	public void onSelect(DatasetSelectionEvent event) {
		// logic
	}
});

DataLabelsOptions options = new DataLabelsOptions();
options.setListenersHandler(handler);
```

Against to the [data set selection event handler](../configuration/Interaction#selecting-a-dataset), at chart level, this invocation is synchronous.

The handler can be customized at constructor level, setting which [cursor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/enums/CursorType.html) must be used hovering the labels, as following:

```java
// creates the handler instance
// uses the CursorType.POINTER
DataLabelsSelectionHandler handler = new DataLabelsSelectionHandler();
// creates the handler instance
// uses the CursorType.CROSSHAIR
DataLabelsSelectionHandler handler = new DataLabelsSelectionHandler(CursorType.CROSSHAIR);
```

### Percentage formatter 

**Charba** provides a common callback for [formatter](DataLabels#formatting) in order to provide the percentage of the value for each data index per dataset.

To apply the callback, you can set an instance to the plugin options, as following:

```java
// creates plugin options
DataLabelsOptions options = new DataLabelsOptions();
// creates the callback
PercentageCallback callback = new PercentageCallback();
// sets the callback as formatter
options.setFormatter(callback);
```

The handler can be customized at constructor level, setting:

   * decimal precision, in order to have a good number of decimal digits of percentage to show. Default is **2**;
   * stacked, as boolean argument, in order to calculate the percentage on the total of the dataset (`false`) or using the same data index of stacked datasets (`true`). Default is `false`.
