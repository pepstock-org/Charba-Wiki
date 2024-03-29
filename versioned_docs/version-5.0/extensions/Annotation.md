---
id: Annotation
title: Annotation plugin
hide_title: true
sidebar_label: Annotation
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Annotation plugin

**Charba** provides out of the box the feature to enable [Annotation](https://github.com/chartjs/chartjs-plugin-annotation) which can add annotations on a chart instance.

It can draw lines, boxes, points and ellipses on the chart area. 

The annotation plugin work with line, bar, scatter and bubble charts that use linear, logarithmic, time or category scales. 

<img src={useBaseUrl('/img/annotation.png')} />

:::info
The annotation plugin will not work on any chart that does not have exactly two axes, including pie, radar and polar area charts.
:::

## Activation

The annotation plugin is injected directly in the document.

The plugin ID is a constant everywhere available, `AnnotationPlugin.ID`, in [AnnotationPlugin](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/AnnotationPlugin.html) entry point.

This plugin registers itself globally, meaning that once injected, all charts will display annotations. In case you want it enabled only for a few charts, you can enable it as following:

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

To activate the plugin in a specific chart, it's enough to provide the configuration options (see [below](#configuration)) or enabling it by:

```java
// --------------------------------------
// ENABLING the plugin to a chart instance 
// storing a plugin options 
// --------------------------------------
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// sets default draw time
options.setDrawTime(DrawTime.BEFORE_DRAW);
// stores the plugin options directly by the options
options.store(chart);

// --------------------------------------
// ENABLING the plugin to a chart instance 
// by a boolean using default plugin 
// options
// --------------------------------------
chart.getOptions().getPlugins().setEnabled(AnnotationPlugin.ID, true);
```

## Configuration

The plugin options can be changed at 2 different levels and are evaluated with the following priority:

  * per chart by `chart.getOptions().getPlugins().setOptions` method
  * or globally by `Defaults.get().getGlobal().getPlugins().setOptions` method
  
The configuration [AnnotationOptions](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/AnnotationOptions.html) class is the entry point of plugin configuration. 

```java
// -------------------------
// CONFIGURES the annotation
// by AnnotationId id
// -------------------------
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
LineAnnotation line = new LineAnnotation();
... // additional label configuration
// sets the line annotation to the options
options.setAnnotations(line);
// stores the plugin options directly by the options
options.store();
```

You can also change the default for all charts instances, as following:

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
LineAnnotation line = new LineAnnotation();
... // additional label configuration
// sets the line annotation to the options
options.setAnnotations(line);

// --------------------------------------
// STORING plugin options
// --------------------------------------
// stores the plugin options by plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(AnnotationPlugin.ID, options);
// stores the plugin options without plugin ID
Defaults.get().getGlobal().getPlugin().setOptions(options);
// stores the plugin options directly by the options
options.store();
```

If you need to read the plugin options, there is the specific factory, [AnnotationOptionsFactory](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/AnnotationOptionsFactory.html) as static reference inside the [AnnotationPlugin](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/AnnotationPlugin.html) entry point which can be used to retrieve the options from chart as following:

```java
// gets options reference
AnnotationOptions options;

// --------------------------------------
// GETTING plugin options from chart
// --------------------------------------
if (chart.getOptions().getPlugin().hasOptions(AnnotationPlugin.ID)){
   // retrieves the plugin options by plugin ID
   options = chart.getOptions().getPlugin().getOptions(AnnotationPlugin.ID, AnnotationPlugin.FACTORY);
   //retrieves the plugin options without plugin ID
   options = chart.getOptions().getPlugin().getOptions(AnnotationPlugin.FACTORY);
}
```

## Identifier

Every annotation configuration can be add to the [AnnotationOptions](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/AnnotationOptions.html), assigning a unique identifier.

The identifier of a label configuration can be set by a string or by a specific class, [AnnotationId](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/AnnotationId.html).

```java
// -------------------------
// CONFIGURES the annotation
// by AnnotationId id
// -------------------------
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates annotation id
AnnotationId annotationId = AnnotationId.create("myAnnotation1");
// creates and adds a line annotation by "myAnnotation1" id
LineAnnotation line = new LineAnnotation(annotationId);
// configures the line annotation
line.setDrawTime(DrawTime.AFTER_DATASETS_DRAW);
line.setBorderColor(HtmlColor.BLACK);
line.setBorderWidth(5);
... // additional label configuration
// sets the line annotation to the options
options.setAnnotations(line);
// stores the plugin options directly by the options
options.store();
```

:::caution 
If the annotation id is not provided, a unique id for the annotation is created automatically, which can be retrieve by `getId()` method of the annotation.
:::

You can access to the configured annotations configurations as following:

```java
// ------------------------
// GETS the configured 
// annotations
// ------------------------
// retrieves the plugin options by plugin ID
AnnotationOptions options = chart.getOptions().getPlugin().getOptions(AnnotationPlugin.FACTORY);
// gets all annotations configurations
List<AbstractAnnotation> allAnnotations = options.getAnnotations();
// gets "myAnnotation1" annotation configuration
AbstractAnnotation annotation1 = options.getAnnotation(AnnotationId.create("myAnnotation1"));
// gets "myAnnotation2" annotation configuration
AbstractAnnotation annotation2 = options.getAnnotation("myAnnotation2");
```

## Options
  
The configuration class [AnnotationOptions](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/AnnotationOptions.html) contains all properties needed to configure the plugin.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// sets default draw time
options.setDrawTime(DrawTime.BEFORE_DRAW);
```

The following options are available at the top level. They apply to all annotations unless they are overwritten on a per-annotation basis:

| Name | Type | Default | Description
| :- | :- | :- | :-
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.AFTER_DATASETS_DRAW | Defines when the annotations are drawn. This allows positioning of the annotation relative to the other elements of the graph.
| dblClickSpeed | int | 350 |  Double-click speed in milliseconds used to distinguish single-clicks from double-clicks whenever you need to capture both. When listening for both click and dblclick, click events will be delayed by this amount.
| events | [Event](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/enums/Event.html)[] | `Defaults.get().getGlobal()`<br/>`.getEvents()` | The events option defines the browser events that the plugin should listen to. This overrides the options at chart level.

### Draw time

The [DrawTime](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/DrawTime.html) option for an annotation determines where in the chart life cycle the drawing occurs. Four potential options are available:

| Option | Description
| :- | :-
| BEFORE_DRAW | Occurs before any drawing takes place
| BEFORE_DATASETS_DRAW | Occurs after drawing of axes, but before data sets
| AFTER_DATASETS_DRAW | Occurs after drawing of data sets but before items such as the tooltip
| AFTER_DRAW | After other drawing is completed.

## Box 

Box annotations are used to draw rectangles on the chart area. This can be useful for highlighting different areas of a chart.

<img src={useBaseUrl('/img/annotationBox.png')} />

Every plugin options can have an unlimited number of boxes annotations. 

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
BoxAnnotation box = new BoxAnnotation();
box.setDrawTime(DrawTime.BEFORE_DATASETS_DRAW);
box.setXScaleID(DefaultScaleId.X);
box.setYScaleID(DefaultScaleId.Y);
box.setXMin("January");
box.setXMax("April");
box.setBackgroundColor(GwtMaterialColor.YELLOW_LIGHTEN_3.alpha(0.3D));
box.setBorderWidth(0);
// stores the annotation in the main options
options.setAnnotations(box);
```

If one of the axes does not match an axis in the chart, the box will take the entire chart dimension. 

The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the box is expanded out to the edges in the respective direction.

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| adjustScaleRange | boolean | `true` | [Yes](#box-scriptable-options) | If `true`, the scale range should be adjusted if this annotation is out of range.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#box-scriptable-options) | The fill color of the box.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#box-scriptable-options) | The stroke color of the box.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderDash | int[]| [] | [Yes](#box-scriptable-options) | The length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | [Yes](#box-scriptable-options) | The offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderWidth | int | 1 | [Yes](#box-scriptable-options) | The stroke width of the box.
| borderRadius | int - [BarBorderRadius](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/BarBorderRadius.html) | 0 | [Yes](#box-scriptable-options) | The radius in pixels of box rectangle.
| display | boolean | `true` | [Yes](#box-scriptable-options) | Whether or not this annotation is visible.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.<br/>AFTER_DATASETS_DRAW | [Yes](#box-scriptable-options) | Defines when the annotation is drawn. This allows positioning of the annotation relative to the other elements of the graph.
| xMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#box-scriptable-options) | Right edge of the box in units along the x axis.
| xMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#box-scriptable-options) | Left edge of the box in units along the x axis.
| xScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/options/ScaleId.html) | DefaultScaleId.X | - | The ID of the X scale to bind onto.
| yMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#box-scriptable-options) | Top edge of the box in units along the y axis.
| yMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#box-scriptable-options) | Bottom edge of the box in units along the y axis.
| yScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/options/ScaleId.html) | DefaultScaleId.Y | - | The ID of the Y scale to bind onto.

### Box scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
BoxAnnotation box = new BoxAnnotation();
// sets callback for border width options
box.setBorderWidth(new WidthCallback<AnnotationContext>(){

   @Override
   public Integer invoke(DatasetContext context){
      // logic
      return borderWidth;
   }
});
// stores the annotation in the main options
options.setAnnotations(box);
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :-
| adjustScaleRange | [AdjustScaleRangeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/AdjustScaleRangeCallback.html) | boolean
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/Pattern.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| borderRadius | [BorderRadiusCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html)&lt;AnnotationContext&gt; | int - - [BarBorderRadius](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/BarBorderRadius.html)
| display | [DisplayCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/DisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| drawTime | [DrawTimeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/DrawTimeCallback.html) | [DrawTime](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/DrawTime.html)
| xMax | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xMin | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMax | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMin | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)

## Ellipse

Ellipse annotations are used to draw ellipses on the chart area. This can be useful for highlighting different areas of a chart.

<img src={useBaseUrl('/img/annotationEllipse.png')} />

Every plugin options can have an unlimited number of ellipses annotations. 

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
EllipseAnnotation ellipse = new EllipseAnnotation();
ellipse.setDrawTime(DrawTime.BEFORE_DATASETS_DRAW);
ellipse.setXScaleID(DefaultScaleId.X);
ellipse.setYScaleID(DefaultScaleId.Y);
ellipse.setXMin("February");
ellipse.setXMax("April");
ellipse.setYMin(10);
ellipse.setYMax(60);
ellipse.setBackgroundColor(GwtMaterialColor.INDIGO_LIGHTEN_3.alpha(0.3D));
ellipse.setBorderWidth(4);
ellipse.setBorderColor(GwtMaterialColor.INDIGO_LIGHTEN_3);
ellipse.setBorderDash(3,3);
// stores the annotation in the main options
options.setAnnotations(ellipse);
```

If one of the axes does not match an axis in the chart, the ellipse will take the entire chart dimension. 

The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the ellipse is expanded out to the edges in the respective direction.

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| adjustScaleRange | boolean | `true` | [Yes](#ellipse-scriptable-options) | If `true`, the scale range should be adjusted if this annotation is out of range.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#ellipse-scriptable-options) | The fill color of the ellipse.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#ellipse-scriptable-options) | The stroke color of the ellipse.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderDash | int[]| [] | [Yes](#ellipse-scriptable-options) | The length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | [Yes](#ellipse-scriptable-options) | The offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderWidth | int | 1 | [Yes](#ellipse-scriptable-options) | The stroke width of the ellipse.
| display | boolean | `true` | [Yes](#ellipse-scriptable-options) | Whether or not this annotation is visible.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.<br/>AFTER_DATASETS_DRAW | [Yes](#point-scriptable-options) | Defines when the annotation is drawn. This allows positioning of the annotation relative to the other elements of the graph.
| rotation | double | 0 | [Yes](#ellipse-scriptable-options) | The rotation of label, in degrees.
| xMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` |[Yes](#ellipse-scriptable-options) | Right edge of the ellipse in units along the x axis.
| xMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#ellipse-scriptable-options) | Left edge of the ellipse in units along the x axis.
| xScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/options/ScaleId.html) | DefaultScaleId.X | - | The ID of the X scale to bind onto.
| yMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#ellipse-scriptable-options) | Top edge of the ellipse in units along the y axis.
| yMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#ellipse-scriptable-options) | Bottom edge of the ellipse in units along the y axis.
| yScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/options/ScaleId.html) | DefaultScaleId.Y | - | The ID of the Y scale to bind onto.

### Ellipse scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
EllipseAnnotation ellipse = new EllipseAnnotation();
// sets callback for border width options
ellipse.setBorderWidth(new WidthCallback<AnnotationContext>(){

   @Override
   public Integer invoke(DatasetContext context){
      // logic
      return borderWidth;
   }
});
// stores the annotation in the main options
options.setAnnotations(ellipse);
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :-
| adjustScaleRange | [AdjustScaleRangeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/AdjustScaleRangeCallback.html) | boolean
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/Pattern.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| display | [DisplayCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/DisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| drawTime | [DrawTimeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/DrawTimeCallback.html) | [DrawTime](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/DrawTime.html)
| rotation | [RotationCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;AnnotationContext&gt; | double
| xMax | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xMin | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMax | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMin | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)

## Line

Line annotations are used to draw lines on the chart area. This can be useful for highlighting information such as a threshold.

<img src={useBaseUrl('/img/annotationLine.png')} />

Every plugin options can have an unlimited number of lines annotations. 

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
LineAnnotation line = new LineAnnotation();
line.setDrawTime(DrawTime.AFTER_DRAW);
line.setScaleID(DefaultScaleId.X.value());
line.setBorderColor(HtmlColor.DARK_GRAY);
line.setBorderWidth(2);
line.setValue(new Date());
// sets label configuration
line.getLabel().setDisplay(true);
line.getLabel().setContent("Now");
line.getLabel().setPosition(LabelPosition.START);
// stores the annotation in the main options
options.setAnnotations(line);
```

If one of the axes does not match an axis in the chart, the line will take the entire chart dimension. 

The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the line is expanded out to the edges in the respective direction.

The line can be positioned in two different ways:

  * if `scaleID` is set, then `value` and `endValue` must also be set to indicate the end points of the line. The line will be perpendicular to the axis identified by `scaleID`.
  * if `scaleID` is unset, then `xScaleID` and `yScaleID` are used to draw a line from `(xMin, yMin)` to `(xMax, yMax)`.

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| adjustScaleRange | boolean | `true` | [Yes](#box-scriptable-options) | If `true`, the scale range should be adjusted if this annotation is out of range.
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#line-scriptable-options) | The stroke color of the line.
| borderDash | int[] | [] | [Yes](#line-scriptable-options) | the line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.
| borderDashOffset | int | 0 | [Yes](#line-scriptable-options) | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderWidth | int | 1 | [Yes](#line-scriptable-options) | The stroke width of the line.
| display | boolean | `true` | [Yes](#line-scriptable-options) | Whether or not this annotation is visible.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.<br/>AFTER_DATASETS_DRAW | [Yes](#point-scriptable-options) | Defines when the annotation is drawn. This allows positioning of the annotation relative to the other elements of the graph.
| endValue | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#line-scriptable-options) | End two of the line when a single scale is specified.
| scaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/options/ScaleId.html) | DefaultScaleId.Y | - | ID of the scale in single scale mode. If unset, `xScaleID` and `yScaleID` are used.
| value | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#line-scriptable-options) | End one of the line when a single scale is specified.
| xMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#line-scriptable-options) | X coordinate of end two of the line in units along the x axis.
| xMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#line-scriptable-options) | X coordinate of end one of the line in units along the x axis.
| xScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/options/ScaleId.html) | DefaultScaleId.X | - | The ID of the X scale to bind onto.
| yMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#line-scriptable-options) | Y coordinate of end one of the line in units along the y axis.
| yMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#line-scriptable-options) | Y coordinate of end one of the line in units along the y axis.
| yScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/options/ScaleId.html) | DefaultScaleId.Y | - | The ID of the Y scale to bind onto.

### Line scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
LineAnnotation line = new LineAnnotation();
// sets callback for border width options
line.setBorderWidth(new WidthCallback<AnnotationContext>(){

   @Override
   public Integer invoke(DatasetContext context){
      // logic
      return borderWidth;
   }
});
// stores the annotation in the main options
options.setAnnotations(line);
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| adjustScaleRange | [AdjustScaleRangeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/AdjustScaleRangeCallback.html) | boolean
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| display | [DisplayCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/DisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| drawTime | [DrawTimeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/DrawTimeCallback.html) | [DrawTime](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/DrawTime.html)
| endValue | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| value | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xMax | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xMin | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMax | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMin | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)

### Label 

A line annotation can have a label to draw on the line.

Every line annotation can have ONLY 1 label. 

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
LineAnnotation line = new LineAnnotation();
// sets label configuration
line.getLabel().setDisplay(true);
line.getLabel().setContent("My threshold");
line.getLabel().setBackgroundColor(HtmlColor.RED);
// stores the annotation in the main options
options.setAnnotations(line);
```

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| autoRotation | boolean | `false` | - | If `true`, the rotation option is ignored and the label uses the degrees of the line.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.8) - <span style={{backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#label-scriptable-options) | Background color of the label container.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#label-scriptable-options) | The text color of the label.
| content | String - String[] - [Img](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/dom/elements/Img.html) | `null` | [Yes](#label-scriptable-options) | The content to show in the label. Provide an array to display values on a new line.
| borderCapStyle | [CapStyle](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/enums/CapStyle.html) | CapStyle.BUTT| [Yes](#label-scriptable-options) | Cap style of the line. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html)| HtmlColor.BLACK - <span style={{backgroundColor: 'black', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#label-scriptable-options) | The color of the line.
| borderDash | int[] | [] | [Yes](#label-scriptable-options) | Length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | [Yes](#label-scriptable-options) | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/enums/JoinStyle.html) | JoinStyle.MITER | [Yes](#label-scriptable-options) | Line joint style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
| borderWidth | int | 0 | [Yes](#label-scriptable-options) | The width of the line in pixels.
| borderRadius | int - [BarBorderRadius](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/BarBorderRadius.html) | 6 | [Yes](#label-scriptable-options) | The radius of label box in pixels.
| display | boolean | false | [Yes](#label-scriptable-options) | Whether or not the label is shown.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/DrawTime.html) | See description | - | Defines when the label is drawn.<br/>Defaults to the line annotation draw time if unset.
| font | [Font](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/Font.html) | See description | [Yes](#label-scriptable-options) | The text font of the label. The default value is the global font with the style set to FontStyle.BOLD.<br/>See [Font](../defaults/DefaultsCharts#font).
| imageHeight | int - String | Undefined.INTEGER - `null` | [Yes](#label-scriptable-options) | Overrides the height of the image. Could be set in pixel by a number, or in percentage of current height of image by a string. If uset, uses the height of the image. It is used only when the content is an image.
| imageWidth | int - String | Undefined.INTEGER - `null` | [Yes](#label-scriptable-options) | Overrides the width of the image. Could be set in pixel by a number, or in percentage of current width of image by a string. If unset, uses the width of the image. It is used only when the content is an image.
| position | [LabelPosition](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/LabelPosition.html) | LabelPosition.CENTER | [Yes](#label-scriptable-options) | Anchor position of label on line.
| rotation | double | 0 | [Yes](#label-scriptable-options) | The rotation of label, in degrees.
| textAlign | [TextAlign](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.CENTER | [Yes](#label-scriptable-options) | Horizontal alignment on the label content when is set as a multiple lines text.
| xAdjust | double | 0 | [Yes](#label-scriptable-options) | Adjustment along x-axis (left-right) of label relative to computed position. Negative values move the label left, positive right.
| xPadding | int | 6 | [Yes](#label-scriptable-options) | Padding of label to add left/right.
| yAdjust | double | 0 | [Yes](#label-scriptable-options) | Adjustment along y-axis (top-bottom) of label relative to computed position. Negative values move the label up, positive down.
| yPadding | int | 6 | [Yes](#label-scriptable-options) | Padding of label to add top/bottom.

### Label scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
LineAnnotation line = new LineAnnotation();
// sets callback for background color options
line.getLabel().setBackgroundColor(new ColorCallback<AnnotationContext>(){

   @Override
   public IsColor invoke(DatasetContext context){
      // logic
      return color;
   }
});
// stores the annotation in the main options
options.setAnnotations(line);
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/Pattern.html)
| color | [ColorCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html)
| content | [ContentCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ContentCallback.html) | String - List&lt;String&gt; - [Img](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/dom/elements/Img.html)
| borderCapStyle | [CapStyleCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/CapStyleCallback.html)&lt;AnnotationContext&gt; | [CapStyle](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/enums/CapStyle.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderJoinStyle | [JoinStyleCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/JoinStyleCallback.html)&lt;AnnotationContext&gt; | [JoinStyle](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/enums/JoinStyle.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| borderRadius | [BorderRadiusCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html)&lt;AnnotationContext&gt; | int - - [BarBorderRadius](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/data/BarBorderRadius.html)
| display | [DisplayCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/DisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| font | [FontCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/FontCallback.html)&lt;AnnotationContext&gt; | [FontItem](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/items/FontItem.html)
| imageHeight | [ImageSizeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ImageSizeCallback.html) | String - int
| imageWidth | [ImageSizeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ImageSizeCallback.html) | String - int
| position | [LabelPositionCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/LabelPositionCallback.html) | [LabelPosition](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/LabelPosition.html)
| rotation | [RotationCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;AnnotationContext&gt; | double**<sup style={{color: 'orange'}}>(1)</sup>**
| textAlign | [TextAlignCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/TextAlignCallback.html)&lt;AnnotationContext&gt; | [TextAlign](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/enums/TextAlign.html)
| xAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| xPadding | [PaddingSizeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/PaddingSizeCallback.html) | int
| yAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| yPadding | [PaddingSizeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/PaddingSizeCallback.html) | int

**<sup style={{color: 'orange'}}>(1)</sup>**To enable `autoRotation` by the rotation callback, the value to return must be `Double.NaN`.

```java
// sets callback for auto rotation
line.getLabel().setRotation(new RotationCallback<AnnotationContext>(){

   @Override
   public Double invoke(DatasetContext context){
      return Double.NaN; // autoRotation is set
   }
});
```

## Point

Point annotations are used to mark points on the chart area. This can be useful for highlighting values that are of interest.

<img src={useBaseUrl('/img/annotationPoint.png')} />

Every plugin options can have an unlimited number of points annotations. 

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
PointAnnotation point = new PointAnnotation();
// sets annotation configuration
point.setXScaleID(DefaultScaleId.X);
point.setYScaleID(DefaultScaleId.Y);
point.setXValue("February");
point.setYValue(50);
point.setRadius(10);
point.setBackgroundColor(HtmlColor.YELLOW.alpha(0.3D));
point.setBorderWidth(2);
point.setBorderColor(HtmlColor.YELLOW.darker());
// stores the annotation in the main options
options.setAnnotations(point);
```

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| adjustScaleRange | boolean | `true` | [Yes](#box-scriptable-options) | If `true`, the scale range should be adjusted if this annotation is out of range.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#point-scriptable-options) | The fill color of the point.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#point-scriptable-options) | The stroke color of the point.
| borderDash | int[] | [] | [Yes](#point-scriptable-options) | The line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.
| borderDashOffset | int | 0 | [Yes](#point-scriptable-options) | Offset for border dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderWidth | int | 1 | [Yes](#point-scriptable-options) | The stroke width of the point.
| display | boolean | `true` | [Yes](#point-scriptable-options) | Whether or not this annotation is visible.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.<br/>AFTER_DATASETS_DRAW | [Yes](#point-scriptable-options) | Defines when the annotation is drawn. This allows positioning of the annotation relative to the other elements of the graph.
| radius | double | 10 | [Yes](#point-scriptable-options) | Size of the point in pixels.
| xValue | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#point-scriptable-options) | X coordinate of the point in units along the x axis.
| xScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/options/ScaleId.html) | DefaultScaleId.X | - | The ID of the X scale to bind onto.
| yValue | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#point-scriptable-options) | Y coordinate of the point in units along the y axis.
| yScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/options/ScaleId.html) | DefaultScaleId.Y | - | The ID of the Y scale to bind onto.

### Point scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
PointAnnotation point = new PointAnnotation();
// sets callback for border width options
point.setBorderWidth(new WidthCallback<AnnotationContext>(){

   @Override
   public Integer invoke(DatasetContext context){
      // logic
      return borderWidth;
   }
});
// stores the annotation in the main options
options.setAnnotations(point);
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :-
| adjustScaleRange | [AdjustScaleRangeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/AdjustScaleRangeCallback.html) | boolean
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/Pattern.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| display | [DisplayCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/DisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| drawTime | [DrawTimeCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/DrawTimeCallback.html) | [DrawTime](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/enums/DrawTime.html)
| radius | [RadiusCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/callbacks/RadiusCallback.html)&lt;AnnotationContext&gt; | double
| xValue | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yValue | [ValueCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)


## Events

All annotations provide a set of callbacks which can be enabled to catch events on them.

To catch events is enough to set the events which you want to catch at [AnnotationOptions](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/AnnotationOptions.html) and set a callback instance in the annotation.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
BoxAnnotation box = new BoxAnnotation();
// sets callback
box.setClickCallback(new ClickCallback(){
			
	@Override
	public void onClick(IsChart chart, AbstractAnnotation annotation, ChartEventContext event){
		// logic
	}
});
```

These are the table of callbacks to implement:

| Event | Callback type | Description
| :- | :- | :-
| enter | [EnterCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/listeners/EnterCallback.html) | Called when the mouse enters the annotation.
| leave | [LeaveCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/listeners/LeaveCallback.html) | Called when the mouse leaves the annotation.
| click | [ClickCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/listeners/ClickCallback.html) | Called when a single click occurs on the annotation.
| dblClick | [DoubleClickCallback](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/callbacks/DoubleClickCallback.html) | Called when a double click occurs on the annotation.

## Scriptable context

Some options also accept a callback which is called at runtime and that takes the context as single argument, [AnnotationContext](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/AnnotationContext.html) representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
BoxAnnotation box = new BoxAnnotation();
// sets callback for border width options
box.setBorderWidth(new WidthCallback<AnnotationContext>(){

   @Override
   public Integer invoke(DatasetContext context){
      // logic
      return borderWidth;
   }
});
// stores the annotation in the main options
options.setAnnotations(box);
```

The context object contains the following properties:

| Name | Type | Description
| :- | :- | :- 
| annotation | [AbstractAnnotation](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/annotation/AbstractAnnotation.html) | The annotation configuration where the options is defined as scriptable.
| attributes | [NativeObjectContainer](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/commons/NativeObjectContainer.html) | User object which you can store your options at runtime.
| chart | [IsChart](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/IsChart.html) | Chart instance. 
| type | [ContextType](https://pepstock-org.github.io/Charba/5.0/org/pepstock/charba/client/items/ContextType.html) | The type of the context. It can be `ContextType.CHART` or `ContextType.ANNOTATION`
