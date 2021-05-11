---
id: Annotation
title: Annotation plugin
hide_title: true
sidebar_label: Annotation
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Annotation plugin

**Charba** provides out of the box the feature to enable [Annotation](https://github.com/chartjs/chartjs-plugin-annotation) which can add annotations (boxes and lines) on a chart instance.

**Charba** is injecting the `chartjs-plugin-annotation.min.js`, at `master` commit id [7037eea71314613a8af83d2298241841cbc34c4f](https://github.com/chartjs/chartjs-plugin-annotation).

<img src={useBaseUrl('/img/annotation.png')} />

## Activation

The annotation plugin is injected directly into document.

The plugin ID is a constant everywhere available, `AnnotationPlugin.ID`, in [AnnotationPlugin](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/AnnotationPlugin.html) entry point.

This plugin registers itself globally, meaning that once injected, all charts will display labels. In case you want it enabled only for a few charts, you can enable it as following:

```java
// --------------------------------------
// enabling the plugin without any parameter
// the plugin is NOT registered to all charts
// --------------------------------------
AnnotationPlugin.enable();

// --------------------------------------
// enabling the plugin with `true` parameter
// the plugin is registered to all charts
// --------------------------------------
AnnotationPlugin.enable(true);
```

To activate the plugin in a specific chart, it's enough to provide the configuration options (see [below](Annotation#configuration)) or enabling it by:

```java
// --------------------------------------
// enabling the plugin to a chart instance 
// by an options
// --------------------------------------
chart.getOptions().getPlugins().setOptions(AnnotationPlugin.ID, options);

// --------------------------------------
// Another way to store the plugin options
// enabling the plugin to a chart instance 
// --------------------------------------
chart.getOptions().getPlugins().setOptions(options);

// --------------------------------------
// enabling the plugin to a chart instance 
// by a boolean using default
// --------------------------------------
chart.getOptions().getPlugins().setEnabled(AnnotationPlugin.ID, true);
```

If you need to read the plugin options, there is the specific factory, [AnnotationOptionsFactory](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/AnnotationOptionsFactory.html) as static reference inside the [AnnotationPlugin](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/AnnotationPlugin.html) entry point which can be used to retrieve the options from chart as following:

```java
// --------------------------------------
// reads the options from chart
// --------------------------------------
AnnotationOptions options;

if (chart.getOptions().getPlugins().hasOptions(AnnotationPlugin.ID)){
   // --------------------------------------
   // retrieve the plugin options by plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(AnnotationPlugin.ID, AnnotationPlugin.FACTORY);
   // --------------------------------------
   // or retrieve the plugin options without plugin ID
   // --------------------------------------
   options = chart.getOptions().getPlugins().getOptions(AnnotationPlugin.FACTORY);
}
```

## Configuration

The plugin options can be changed at 2 different levels and are evaluated with the following priority:

  * per chart by `chart.getOptions().getPlugins().setOptions` method
  * per chart type by `Defaults.get().getOptions([chartType]).getPlugins().setOptions` method
  * or globally by `Defaults.get().getGlobal().getPlugins().setOptions` method
  
The configuration class [AnnotationOptions](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/AnnotationOptions.html) contains all properties needed to configure the plugin.

```java
// --------------------------------------
// creating object and setting some properties
// --------------------------------------
AnnotationOptions options = new AnnotationOptions();
options.setEvents(Event.CLICK, Event.DOUBLE_CLICK, Event.MOUSE_OUT, Event.MOUSE_OVER);
```

The complete options are described by following table:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.AFTER_DATASETS_DRAW | Defines when the annotations are drawn. This allows positioning of the annotation relative to the other elements of the graph.
| dblClickSpeed | int | 350 |  Double-click speed in milliseconds used to distinguish single-clicks from double-clicks whenever you need to capture both. When listening for both click and dblclick, click events will be delayed by this amount.
| events | [Event](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | `null` | Events to enable on each annotation.

## Box annotation

A box annotation draws a box on chart area.

A box annotation is mapped by [BoxAnnotation](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/BoxAnnotation.html).

Box annotations are supported and if one of the axes is not specified, the box will take the entire chart dimension.

The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the box is expanded out to the edges.

<img src={useBaseUrl('/img/annotationBox.png')} />

Every plugin options can have an unlimited number of boxes annotations. 

```java
AnnotationOptions options = new AnnotationOptions();

BoxAnnotation box1 = new BoxAnnotation();
box1.setName("BoxAnnotation");
box1.setDrawTime(DrawTime.BEFORE_DATASETS_DRAW);
box1.setXScaleID(Scales.DEFAULT_X_AXIS_ID);
box1.setYScaleID(Scales.DEFAULT_Y_AXIS_ID);
box1.setXMin("February");
box1.setXMax("April");
box1.setYMax(100);
box1.setYMin(60);
box1.setBackgroundColor("rgba(101, 33, 171, 0.5)");
box1.setBorderColor("rgb(101, 33, 171)");
box1.setBorderWidth(1);

....

options.setAnnotations(box1, box2, ... boxN);
```

The complete options are described by following table:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.AFTER_DATASETS_DRAW | Defines when the annotations are drawn. This allows positioning of the annotation relative to the other elements of the graph.
| name | String | `null` | The name (better is unique) to assign to annotation.
| xScaleID | String | [Scales.DEFAULT_X_AXIS_ID](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID) | The ID of the X scale to bind onto.
| yScaleID | String | [Scales.DEFAULT_Y_AXIS_ID](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID) | The ID of the Y scale to bind onto.
| xMin | String - double - Date | `null` | Left edge of the box in units along the x axis.
| yMin | String - double - Date | `null` | Bottom edge of the box in units along the y axis.
| xMax | String - double - Date | `null` | Right edge of the box in units along the x axis.
| yMax | String - double - Date | `null` | Top edge of the box in units along the y axis.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `rgb(102, 102, 102)` | The fill color of the box.
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `rgb(92, 92, 92)` | The stroke color of the box.
| borderWidth | int | 1 |The stroke width of the box.

## Line annotation

A line annotation draws a line (vertical or horizontal lines are supported) on chart area. Furthermore you can add a label on the line.

A line annotation is mapped by [LineAnnotation](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/LineAnnotation.html).

<img src={useBaseUrl('/img/annotationLine.png')} />

Every plugin options can have an unlimited number of lines annotations. 

```java
AnnotationOptions options = new AnnotationOptions();

LineAnnotation line1 = new LineAnnotation();
line1.setName("LineAnnotation");
line1.setDrawTime(DrawTime.AFTER_DATASETS_DRAW);
line1.setMode(LineMode.HORIZONTAL);
line1.setScaleID(Scales.DEFAULT_Y_AXIS_ID);
line1.setBorderColor(HtmlColor.BLACK);
line1.setBorderWidth(5);
line1.setValue(40);
line1.getLabel().setEnabled(true);
line1.getLabel().setContent("My threshold");
line1.getLabel().setBackgroundColor(HtmlColor.RED);

....

options.setAnnotations(line1, line2, ... lineN);
```

The complete options are described by following table:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.AFTER_DATASETS_DRAW | Defines when the annotations are drawn. This allows positioning of the annotation relative to the other elements of the graph.
| name | String | `null` | The name (better is unique) to assign to annotation.
| scaleID | String | [Scales.DEFAULT_Y_AXIS_ID](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID) | The ID of the scale to bind onto.
| value | String - double - Date | `null` | The data value to draw the line at.
| endValue | String - double - Date | `null` | The value at which the line draw should end.
| mode | [LineMode](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/lineMode.html) | LineMode.VERTICAL | The orientation of line.
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `rgb(54, 162, 235)` | The stroke color of the line.
| borderWidth | int | 1 | The stroke width of the line.
| borderDash | int[] | [] | the line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.
| borderDashOffset | int | 0 | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)

## Label line annotation

A line annotation can have a label to draw on the line.

A label line annotation is mapped by [LineLabel](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/LineLabel.html).

Every line annotation can have ONLY 1 label. 

```java
AnnotationOptions options = new AnnotationOptions();

LineAnnotation line1 = new LineAnnotation();

....

line1.getLabel().setEnabled(true);
line1.getLabel().setContent("My threshold");
line1.getLabel().setBackgroundColor(HtmlColor.RED);

....

options.setAnnotations(line1, line2, ... lineN);
```

The complete options are described by following table:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| enabled | boolean | `false` | Whether the label is enabled and should be displayed.
| content | String - String[] | `null` | Text to display in label. Provide an array to display values on a new line.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `rgba(0,0,0,0.8)` | The fill color of label.
| fontSize | int | [defaultFontSize](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontSize--) | font size of label
| fontFamily | String | [defaultFontFamily](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultOptions.html#getDefaultFontFamily--) | font family of label
| fontStyle | [FontStyle](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.BOLD | font style of label
| fontColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.WHITE | font color of label
| position | [LineLabelPosition](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/LineLabelPosition.html) | LineLabelPosition.CENTER | Anchor position of label on line.
| xPadding | int | 6 | Padding of label to add left/right.
| yPadding | int | 6 | Padding of label to add top/bottom.
| cornerRadius | double | 6 | Radius of label rectangle where the label should be displayed.
| xAdjust | int | 0 | Adjustment along x-axis (left-right) of label relative to above number (can be negative). For horizontal lines positioned left or right, negative values move the label toward the edge, and positive values toward the center.
| yAdjust | int | 0 | Adjustment along y-axis (top-bottom) of label relative to above number (can be negative). For vertical lines positioned top or bottom, negative values move the label toward the edge, and positive values toward the center.
| rotation | double | 0 | Rotation of label, in degrees.

## Events on annotations

Both box and line annotations provide a set of callbacks which can be enabled to catch events on them.

To catch events is enough to set the events which you want to catch at [AnnotationOptions](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/AnnotationOptions.html) and set a callback instance into the annotation.

These are the table of callbacks to implement:

| Callback | Event
| -------- | -----
| [ClickCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/ClickCallback.html) | [Event.CLICK](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#CLICK) |
| [ContextMenuCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/ContextMenuCallback.html) | [Event.CONTEXT_MENU](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#CONTEXT_MENU) |
| [DoubleClickCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/DoubleClickCallback.html) | [Event.DOUBLE_CLICK](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#DOUBLE_CLICK) |
| [MouseDownCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseDownCallback.html) | [Event.MOUSE_DOWN](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_DOWN) |
| [MouseEnterCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseEnterCallback.html) | [Event.MOUSE_ENTER](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_ENTER) |
| [MouseLeaveCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseLeaveCallback.html) | [Event.MOUSE_LEAVE](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_LEAVE) |
| [MouseMoveCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseMoveCallback.html) | [Event.MOUSE_MOVE](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_MOVE) |
| [MouseOutCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseOutCallback.html) | [Event.MOUSE_OUT](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_OUT) |
| [MouseOverCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseOverCallback.html) | [Event.MOUSE_OVER](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_OVER) |
| [MouseUpCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/MouseUpCallback.html) | [Event.MOUSE_UP](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#MOUSE_UP) |
| [WheelCallback](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/callbacks/WheelCallback.html) | [Event.WHEEL](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/enums/Event.html#WHEEL) |

```java
final MyEventsCallback callback = new MyEventsCallback();

...

class MyEventsCallback implements ClickCallback, MouseOverCallback, MouseOutCallback, DoubleClickCallback {

	@Override
	public void onMouseOut(IsChart chart, BaseNativeEvent event, AbstractAnnotation annotation) {
		// my logic
	}

	@Override
	public void onMouseOver(IsChart chart, BaseNativeEvent event, AbstractAnnotation annotation) {
		// my logic
	}

	@Override
	public void onClick(IsChart chart, BaseNativeEvent event, AbstractAnnotation annotation) {
		// my logic
	}

	@Override
	public void onDoubleClick(IsChart chart, BaseNativeEvent event, AbstractAnnotation annotation) {
		// my logic
	}
		
}

...

AnnotationOptions options = new AnnotationOptions();
options.setEvents(Event.CLICK, Event.DOUBLE_CLICK, Event.MOUSE_OUT, Event.MOUSE_OVER);

LineAnnotation line = new LineAnnotation();
...
line.setClickCallback(callback);
line.setMouseOverCallback(callback);
line.setMouseOutCallback(callback);
line.setDoubleClickCallback(callback);

BoxAnnotation box = new BoxAnnotation();
...
box.setClickCallback(callback);
box.setMouseOverCallback(callback);
box.setMouseOutCallback(callback);
box.setDoubleClickCallback(callback);

options.setAnnotations(line, box);
```

The callback is receiving the chart instance and [AbstractAnnotation](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/AbstractAnnotation.html) instance which can be a [LineAnnotation](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/LineAnnotation.html) or a [BoxAnnotation](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/annotation/BoxAnnotation.html).
