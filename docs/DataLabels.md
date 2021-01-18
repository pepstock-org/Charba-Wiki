---
id: DataLabels
title: DataLabels plugin
hide_title: true
sidebar_label: DataLabels
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## DataLabels plugin

**Charba** provides out of the box the feature to enable [DataLabels](https://github.com/chartjs/chartjs-plugin-datalabels) which is a highly customizable plugin that displays labels on data for any type of charts, with all its capabilities.

**Charba** is injecting the `chartjs-plugin-datalabels.min.js`, the released version [0.7.0](https://github.com/chartjs/chartjs-plugin-datalabels/releases/tag/v0.7.0).

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

To activate the plugin in a specific chart, it's enough to provide the configuration options (see [below](Datalabels#configuration)) or enabling it by:

```java
// --------------------------------------
// enabling the plugin to a chart instance 
// by an options
// --------------------------------------
chart.getOptions().getPlugins().setOptions(DataLabelsPlugin.ID, options);

// --------------------------------------
// Another way to store the plugin options
// enabling the plugin to a chart instance 
// --------------------------------------
chart.getOptions().getPlugins().setOptions(options);

// --------------------------------------
// enabling the plugin to a chart instance 
// by a boolean using default
// --------------------------------------
chart.getOptions().getPlugins().setEnabled(DataLabelsPlugin.ID, true);
```

If you need to read the plugin options, there is the specific factory, [DataLabelsOptionsFactory](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/DataLabelsOptionsFactory.html) as static reference inside the [DataLabels](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/DataLabels.html) entry point which can be used to retrieve the options from chart as following:

```java
// --------------------------------------
// reads the options from chart
// --------------------------------------
DataLabelsOptions options;

if (chart.getOptions().getPlugins().hasOptions(DataLabelsPlugin.ID)){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(DataLabelsPlugin.ID, DataLabelsPlugin.FACTORY);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(DataLabelsPlugin.FACTORY);
}
```

## Configuration

The plugin options can be changed at 3 different levels and are evaluated with the following priority:

  * per dataset, by `dataset.setOptions` method
  * per chart by `chart.getOptions().getPlugins().setOptions` method
  * per chart type by `Defaults.get().getOptions([chartType]).getPlugins().setOptions` method
  * or globally by `Defaults.get().getGlobal().getPlugins().setOptions` method
  
The configuration class [DataLabelsOptions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/DataLabelsOptions.html) contains all properties needed to configure the plugin.

```java
// --------------------------------------
// creating object and setting some properties
// --------------------------------------
DataLabelsOptions options = new DataLabelsOptions();
options.setAlign(Align.CENTER);
options.setBackgroundColor(new BackgroundColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      LineDataset ds = (LineDataset)chart.getData().getDatasets().get(context.getDatasetIndex());
      return ds.getBackgroundColor();
   }
});
```

The complete options are described by following table:

| Name | Type | Callback | Default
| ---- | ---- | -------- | ----
| [align](DataLabels#alignment-and-offset) | [Align](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Align.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/AlignCallback.html) | Align.CENTER
| [anchor](DataLabels#anchoring) | [Anchor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Anchor.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/AnchorCallback.html) | Anchor.CENTER
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/BackgroundColorCallback.html) | `null`
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/BorderColorCallback.html) | `null`
| borderRadius | double | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/BorderRadiusCallback.html) | 0
| borderWidth | int | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/BorderWidthCallback.html) | 0
| [clamp](DataLabels#clamping) | boolean | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/ClampCallback.html) | false
| [clip](DataLabels#clipping) | boolean | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/ClipCallback.html) | false
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/ColorCallback.html) |[defaultFontColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontColorAsString--) 
| [display](DataLabels#visibility) | [Display](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Display.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/DisplayCallback.html) | Display.TRUE
| [offset](DataLabels#alignment-and-offset) | doubel | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/OffsetCallback.html) | 4
| opacity | double | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/OpacityCallback.html) | 1
| [rotation](DataLabels#rotation) | double | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/RotationCallback.html) | 0
| [textAlign](DataLabels#text-alignment) | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/TextAlign.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/TextAlignCallback.html) | TextAlign.START
| textStrokeColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/TextStrokeColorCallback.html) | the `color` property
| textStrokeWidth | int | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/TextStrokeWidthCallback.html) | 0
| textShadowBlur | double | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/TextShadowBlurCallback.html) | 0
| textShadowColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | [Yes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/TextShadowColorCallback.html) | the `color` property

## Font

Every options has got a inner element to set font options.

```java
options.getFont().setFontSize(12);
options.getFont().setWeight(Weight.BOLD);
```

The complete options are described by following table:

| Name | Type |  Default
| ---- | ---- | ----
| fontFamily | String | [defaultFontFamily](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontFamily--)
| fontSize | int | [defaultFontSize](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontSize--)
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | [defaultFontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontStyle--)
| weight | [Weight](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/enums/Weight.html) | Weight.NORMAL
| [lineHeight](DataLabels#multiline-labels) | double - String | 1.2

The font element can be set by [callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/FontCallback.html), as following:

```java
DataLabelsOptions options = new DataLabelsOptions();
options.setFont(new FontCallback() {

   @Override
   public Font invoke(IsChart chart, ScriptableContext context) {
      Font font = new Font(); 
      // your logic
      return font;
   }
});
```

## Padding

Every options has got a inner element to set padding options.

```java
options.getPadding().setTop(12);
```

The complete options are described by following table:

| Name | Type |  Default
| ---- | ---- | ----
| top | int | 4
| right | int | 4
| bottom | int | 4
| left | int | 4

The padding element can be set by [callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/datalabels/callbacks/PaddingCallback.html), as following:

```java
DataLabelsOptions options = new DataLabelsOptions();
options.setPadding(new PaddingCallback() {

   @Override
   public Padding invoke(IsChart chart, ScriptableContext context) {
      Padding padding = new Padding(); 
      // your logic
      return padding;
   }
});
```

## Labels

By default, a single label is created per data, however, it's possible to define multiple labels for each data element using the labels option.

This option is an object where each property represents a new label, the key being the label key and the value being the options specific to each label.

These options are merged on top of the options defined at the chart and dataset levels.

The following example shows as to set multi labels to a dataset:

```java
PieDataset dataset = chart.newDataset();
...
DataLabelsOptions mainOptionForDataset = new DataLabelsOptions();
...
DataLabelsOptions index = new DataLabelsOptions();
index.setAlign(Align.END);
index.setAnchor(Anchor.END);
...
mainOptionForDataset.getLabels().setLabel("index", index);
...
DataLabelsOptions name = new DataLabelsOptions();
name.setAlign(Align.TOP);
name.getFont().setSize(18);
...
mainOptionForDataset.getLabels().setLabel("name", name);
...
dataset.setOptions(DataLabelsPlugin.ID, mainOptionForDataset);
```

<img src={useBaseUrl('/img/dataLabelsMultiLabels.png')} />

**PAY ATTENTION** that options defined under each labels, always override options defined at the chart and dataset level.

## Callbacks

All options also accept a callback which is called for each data and that takes the 2 argument2, [ScriptableContext](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/ScriptableContext.html) representing contextual information (see [option context](DataLabels#option-context)) and chart instance.

All callbacks will be invoked passing the context and the chart instance.

Example:

```java
DataLabelsOptions options = new DataLabelsOptions();
options.setBackgroundColor(new BackgroundColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      LineDataset ds = (LineDataset)chart.getData().getDatasets().get(context.getDatasetIndex());
      return ds.getBackgroundColor();
   }
});
```

The colored properties (backgroundColor, borderColor, color, textStrokeColor and textShadowColor) can be set (by callbacks) also to a [pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html), [gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html), [CanvasPatternItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html) or [CanvasGradientItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html), as following:

```java
DataLabelsOptions options = new DataLabelsOptions();
options.setBackgroundColor(new BackgroundColorCallback() {

   @Override
   public Pattern invoke(IsChart chart, ScriptableContext context) {
      LineDataset ds = (LineDataset)chart.getData().getDatasets().get(context.getDatasetIndex());
      return ds.getBackgroundColorAsPattern();
   }
});
```

**PAY ATTENTION** that with the current release of DATALABELS plugin, the GRADIENT coordinates are relative the the label coordinates (local), not relative to the canvas coordinates (global), as reported in [this thread](https://github.com/chartjs/chartjs-plugin-datalabels/issues/114), therefore DO NOT USE [gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) **Charba** object but directly the [CanvasGradientItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html) if you need to use gradients, waiting for DATALABELS enhancement.

See the example here how to use gradients in the meantime:

```java
DataLabelsOptions options = new DataLabelsOptions();
options.setBackgroundColor(new BackgroundColorCallback() {
			
	CanvasGradientItem gradient = null;

	@Override
	public CanvasGradientItem invoke(IsChart chart, ScriptableContext context) {
		if (gradient == null) {
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
DataLabelsOptions options = new DataLabelsOptions();
option.setBackgroundColor(new BackgroundColorCallback() {
			
	@Override
	public IsColor invoke(IsChart chart, ScriptableContext context) {
		LineDataset ds = (LineDataset)chart.getData().getDatasets().get(context.getDatasetIndex());
		Gradient gradient = ds.getBackgroundColorAsGradient();
		double factor = ds.getData().size() > 0 ? context.getIndex() * 1D / (ds.getData().size() -1) : 0;
		return gradient.getInterpolatedColorByOffset(factor);
	}
});
```

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
option.setFormatter(new FormatterCallback() {
         
   @Override
   public String invoke(IsChart chart, DataItem dataItem, ScriptableContext context) {
      // your logic
      return formettedValue;
   }
});
```

The default behavior can be overridden thanks to the `formatter` option.

The [DataItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/DataItem.html) argument is a wrapper to the possible values that a dataset can contain:

  * doubles
  * strings, available only for line dataset instances
  * [FloatingData](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/FloatingData.html), available only for bar dataset instances

## Multiline Labels

Labels can be displayed on multiple lines by using the newline character (`\n`) between each line or by providing an array of strings where each item represents a new line.

Example:

```java
option.setFormatter(new FormatterCallback() {
         
   @Override
   public String invoke(IsChart chart, DataItem dataItem, ScriptableContext context) {
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
option.getListeners().setEnterEventHandler(new EnterEventHandler() {
      
   @Override
   public boolean onEnter(IsChart chart, ScriptableContext context) {
      chart.getCanvas().getElement().getStyle().setCursorType(CursorType.POINTER);
      return true;
   }
});
option.getListeners().setLeaveEventHandler(new LeaveEventHandler() {
         
   @Override
   public boolean onLeave(IsChart chart, ScriptableContext context) {
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
DataLabelsOptions options = new DataLabelsOptions();
options.setListenersHandler(new AbstractEventHandler() {

	// overrides methods

});
```

## Options builder

**Charba** provides a builder to create options using the **set** methods in sequence and get the options object at the end of configuration.

```java
DataLabelsOptions options = DataLabelsOptionsBuilder.create().setAlign(Align.center).setBackgroundColor(new BackgroundColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      LineDataset ds = (LineDataset)chart.getData().getDatasets().get(context.getDatasetIndex());
      return ds.getBackgroundColor();
   }
}).build();

chart.getOptions().getPlugins().setOptions(DataLabelsPlugin.ID, options);
```

Creating a build by `DataLabelsOptionsBuilder.create()` it will use the global options as default, instead by `DataLabelsOptionsBuilder.create(chart)` it will use the global chart options as default.
