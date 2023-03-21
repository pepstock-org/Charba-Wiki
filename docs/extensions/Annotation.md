---
id: Annotation
title: Annotation plugin
hide_title: true
sidebar_label: Annotation
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Annotation plugin

**Charba** provides out of the box the feature to enable [Annotation](https://github.com/chartjs/chartjs-plugin-annotation) which can add annotations on a chart instance.

It can draw lines, boxes, points, labels, polygons and ellipses on the chart area. 

The annotation plugin work with line, bar, scatter and bubble charts that use linear, logarithmic, time or category scales. 

<img src={useBaseUrl('/img/annotation.png')} />

:::info
The annotation plugin will not work on any chart that does not have exactly two axes, including pie, radar and polar area charts.
:::

## Activation

The annotation plugin is injected directly in the document.

The plugin ID is a constant everywhere available, `AnnotationPlugin.ID`, in [AnnotationPlugin](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AnnotationPlugin.html) entry point.

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
  
The configuration [AnnotationOptions](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AnnotationOptions.html) class is the entry point of plugin configuration. 

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

If you need to read the plugin options, there is the specific factory, [AnnotationOptionsFactory](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AnnotationOptionsFactory.html) as static reference inside the [AnnotationPlugin](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AnnotationPlugin.html) entry point which can be used to retrieve the options from chart as following:

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

### Default element options

Every annotation type is a chart element and the common options for a specific type can be configured by elements in the chart and global options:

  * per chart by `chart.getOptions().getElements().getElement(ElementFactory)` method
  * or globally by `Defaults.get().getGlobal().getElements().getElement(ElementFactory)` method

The annotation options are providing a [ElementFactory](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ElementFactory.html) instance in order to enable to get and change the options at annotation type level.

```java
// ----------------------------------------------------
// Setting option for all box annotations of the  chart
// ----------------------------------------------------
BoxAnnotation boxElement = chart.getOptions().getElements().getElement(BoxAnnotation.FACTORY);
// checks if consistent
if (boxElement != null) {
   // set font family for all box labels of the chart
   boxElement.getLabel().getFont().setFamily("courier");
}
// ----------------------------------------------------
// Setting option for all box annotations
// ----------------------------------------------------
BoxAnnotation boxElement = Defaults.get().getGlobal().getElements().getElement(BoxAnnotation.FACTORY);
// checks if consistent
if (boxElement != null) {
   // set font family for all box labels of all charts
   boxElement.getLabel().getFont().setFamily("courier");
}
```

:::caution 
If the annotation plugin is not activated (see [Activation](#activation)), the annotation element options can not be set because the result will be always an inconsistent options instance. 
:::

## Identifier

Every annotation configuration can be add to the [AnnotationOptions](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AnnotationOptions.html), assigning a unique identifier.

The identifier of a label configuration can be set by a string or by a specific class, [AnnotationId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AnnotationId.html).

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
  
The configuration class [AnnotationOptions](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AnnotationOptions.html) contains all properties needed to configure the plugin.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// sets default draw time
options.setDrawTime(DrawTime.BEFORE_DRAW);
```

The following options are available at the top level. They apply to all annotations unless they are overwritten on a per-annotation basis:

| Name | Type | Default | Description
| :- | :- | :- | :-
| animations | [Animations](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/configuration/Animations.html) | - | See [animation options](#animations) section for more details.
| clip | boolean | `true` | If `true`, the annotations are clipped to the chart area.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.AFTER_DATASETS_DRAW | Defines when the annotations are drawn. This allows positioning of the annotation relative to the other elements of the graph.
| events | [IsEvent](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/IsEvent.html)[]  - Set&lt;[IsEvent](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/IsEvent.html)&gt; | `Defaults.get().getGlobal()`<br/>`.getEvents()` | The events option defines the browser events that the plugin should listen to. This overrides the options at chart level.
| interaction | [Interaction](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/Interaction.html) | [see below](#interaction) | To configure which events trigger plugin interactions.

#### Animations

[Animations](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/Animations.html) options configures which element properties are animated and how.

The animations element is a [container of configurations](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/AnimationCollection.html) which can be stored and retrieved by a [key](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/commons/Key.html).

The following options are available in [AnimationCollection](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/AnimationCollection.html). 

| Name | Type | Defaults | Description
| :- | :- | :- | :-
| delay | int | Undefined.INTEGER | Delay in milliseconds before starting the animations.
| duration | int | 1000 | The number of milliseconds an animation takes.
| easing | [Easing](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/Easing.html) | Easing.EASE_OUT_QUART | Easing function to use.<br/>See [Robert Penner's easing equations](http://robertpenner.com/easing/) for more details.
| loop | boolean | `false` | If set to `true`, the animations loop endlessly.
| properties | String[] - [Key](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/commons/Key.html)[] | [] | The properties of elements to use to animate.
| type | [AnimationType](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/AnimationType.html) | AnimationType.NUMBER | Type of property, determines the interpolator used.
| from  | boolean - double - String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | Undefined.BOOLEAN<br/>Undefined.DOUBLE<br/>`null` | Start value for the animation.
| to  | boolean - double - String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | Undefined.BOOLEAN<br/>Undefined.DOUBLE<br/>`null` | End value for the animation.

#### Interaction

Interaction uses the same format as [a chart instance](../configuration/interaction). 

:::caution
`DefaultInteractionMode.INDEX` and `DefaultInteractionMode.DATASET` modes are not supported by the plugin. If set, the plugin will use `DefaultInteractionMode.NEAREST` mode.

`InteractionAxis.R` is not supported by the plugin. If set, the plugin will use `InteractionAxis.XY` mode.
:::

#### Draw time

The [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) option for an annotation determines where in the chart life cycle the drawing occurs. Four potential options are available:

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

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| adjustScaleRange | boolean | `true` | [Yes](#box-scriptable-options) | If `true`, the scale range should be adjusted if this annotation is out of range.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#box-scriptable-options) | The fill color of the box.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| backgroundShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#box-scriptable-options) | The color of shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderCapStyle | [CapStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/CapStyle.html) | CapStyle.BUTT | [Yes](#box-scriptable-options) | Cap style of the border line. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#box-scriptable-options) | The stroke color of the box.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderDash | int[]| [] | [Yes](#box-scriptable-options) | The length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | [Yes](#box-scriptable-options) | The offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/JoinStyle.html) | JoinStyle.MITER | [Yes](#box-scriptable-options) | Border line joint style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)
| borderRadius | int - [BarBorderRadius](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/data/BarBorderRadius.html) | 0 | [Yes](#box-scriptable-options) | The radius in pixels of box rectangle.
| borderShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#box-scriptable-options) | The color of border shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderWidth | int | 1 | [Yes](#box-scriptable-options) | The stroke width of the box.
| display | boolean | `true` | [Yes](#box-scriptable-options) | Whether or not this annotation is visible.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.<br/>AFTER_DATASETS_DRAW | [Yes](#box-scriptable-options) | Defines when the annotation is drawn. This allows positioning of the annotation relative to the other elements of the graph.
| rotation | double | 0 | [Yes](#box-scriptable-options) | The rotation of annotation, in degrees.
| shadowBlur | double | 0 | [Yes](#box-scriptable-options) | The amount of blur applied to shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur).
| shadowOffsetX | int  | 0 | [Yes](#box-scriptable-options) | The distance that shadows will be offset horizontally. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX).
| shadowOffsetY | int | 0 | [Yes](#box-scriptable-options) | The distance that shadows will be offset  vertically. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY).
| xMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#box-scriptable-options) | Right edge of the box in units along the x axis.
| xMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#box-scriptable-options) | Left edge of the box in units along the x axis.
| xScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | The ID of the X scale to bind onto.
| yMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#box-scriptable-options) | Top edge of the box in units along the y axis.
| yMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#box-scriptable-options) | Bottom edge of the box in units along the y axis.
| yScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | The ID of the Y scale to bind onto.
| z | int | 0 | [Yes](#box-scriptable-options) | All visible elements will be drawn in ascending order of `z` option, with the same `drawTime` option.

If one of the axes does not match an axis in the chart, the box will take the entire chart dimension. 

The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the box is expanded out to the edges in the respective direction.

#### Box scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
BoxAnnotation box = new BoxAnnotation();
// sets callback for border width options
box.setBorderWidth(new WidthCallback<AnnotationContext>(){

   @Override
   public Integer invoke(AnnotationContext context){
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
| adjustScaleRange | [AdjustScaleRangeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustScaleRangeCallback.html) | boolean
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/Pattern.html)
| backgroundShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderCapStyle | [CapStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/CapStyleCallback.html)&lt;AnnotationContext&gt; | [CapStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/CapStyle.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderJoinStyle | [JoinStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/JoinStyleCallback.html)&lt;AnnotationContext&gt; | [JoinStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/JoinStyle.html)
| borderRadius | [BorderRadiusCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html)&lt;AnnotationContext&gt; | int - - [BarBorderRadius](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/data/BarBorderRadius.html)
| backgroundShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| drawTime | [DrawTimeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/DrawTimeCallback.html) | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html)
| rotation | [RotationCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;AnnotationContext&gt; | double
| shadowBlur | [ShadowBlurCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowBlurCallback.html) | double
| shadowOffsetX | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| shadowOffsetY | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| xMax | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xMin | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMax | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMin | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| z | [ZCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ZCallback.html) | int

### Box label 

A box annotation can have a label to draw in the box.

Every box annotation can have ONLY 1 label. 

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
BoxAnnotation box = new BoxAnnotation();
// sets label configuration
box.getLabel().setDisplay(true);
box.getLabel().setContent("My threshold");
// stores the annotation in the main options
options.setAnnotations(box);
```

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| color | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#box-label-scriptable-options) | The text color of the label.
| content | String - String[] - [Img](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Canvas.html) | `null` | [Yes](#box-label-scriptable-options) | The content to show in the label. Provide an array to display values on a new line.
| display | boolean | `false` | [Yes](#box-label-scriptable-options) | Whether or not the label is shown.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | See description | - | Defines when the label is drawn.<br/>Defaults to the box annotation draw time if unset.
| [font](#fonts-and-colors) | [IsFont](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/IsFont.html) - List&lt;[FontItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html)&gt; - [FontItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html)[] | See description | [Yes](#box-label-scriptable-options) | The text font of the label. The default value is the global font with the weight set to Weight.BOLD.<br/>See [Font](../defaults/DefaultsCharts#font).
| imageHeight | int - String | Undefined.INTEGER - `null` | [Yes](#box-label-scriptable-options) | Overrides the height of the image. Could be set in pixel by a number, or in percentage of current height of image by a string. If uset, uses the height of the image. It is used only when the content is an image.
| imageOpacity | double | 0 | [Yes](#box-label-scriptable-options) | Overrides the opacity of the image or canvas element. Could be set a number in the range 0.0 to 1.0, inclusive. It is used only when the content is an image or canvas element.
| imageWidth | int - String | Undefined.INTEGER - `null` | [Yes](#box-label-scriptable-options) | Overrides the width of the image. Could be set in pixel by a number, or in percentage of current width of image by a string. If unset, uses the width of the image. It is used only when the content is an image.
| padding | [Padding](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/configuration/Padding.html) | 6 | [Yes](#box-label-scriptable-options) | Number of pixels to add above and below the title text.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| position | [AlignPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AlignPosition.html) | See [position](#box-label-position) | [Yes](#box-label-scriptable-options) | Anchor position of label on box.
| rotation | double | 0 | [Yes](#line-label-scriptable-options) | The rotation of label, in degrees.
| textAlign | [TextAlign](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.START | [Yes](#box-label-scriptable-options) | Horizontal alignment on the label content when is set as a multiple lines text.
| textStrokeColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#box-label-scriptable-options) | The stroke color of the text.
|textStrokeWidth | int | 0 | [Yes](#box-label-scriptable-options) | The stroke width of the text.
| xAdjust | double | 0 | [Yes](#box-label-scriptable-options) | Adjustment along x-axis (left-right) of label relative to computed position. Negative values move the label left, positive right.
| yAdjust | double | 0 | [Yes](#box-label-scriptable-options) | Adjustment along y-axis (top-bottom) of label relative to computed position. Negative values move the label up, positive down.
| z | int | 0 | [Yes](#box-label-scriptable-options) | All visible elements will be drawn in ascending order of `z` option, with the same `drawTime` option.

#### Box label position

[AlignPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AlignPosition.html) can define the `x` property for the horizontal alignment in the box. Similarly, the `y` property defines the vertical alignment in the box.

Possible options for both properties are LabelPosition.START, LabelPosition.CENTER, LabelPosition.END, or a double, a value between 0 and 1, is representing the percentage on the size where the label will be located.

Default is LabelPosition.CENTER.

#### Box label scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
BoxAnnotation box = new BoxAnnotation();
// sets callback for color options
box.getLabel().setColor(new ColorCallback<AnnotationContext>(){

   @Override
   public IsColor invoke(AnnotationContext context){
      // logic
      return color;
   }
});
// stores the annotation in the main options
options.setAnnotations(box);
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :-
| color | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| content | [ContentCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ContentCallback.html) | String - List&lt;String&gt; - [Img](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Canvas.html)
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| [font](#fonts-and-colors) | [FontsCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/FontsCallback.html)&lt;AnnotationContext&gt; | List&lt;[FontItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html)&gt;
| imageHeight | [ImageSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ImageSizeCallback.html) | String - int
| imageOpacity | [ImageOpacityCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ImageOpacityCallback.html) | double
| imageWidth | [ImageSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ImageSizeCallback.html) | String - int
| padding | [PaddingCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/PaddingCallback.html)&lt;AnnotationContext&gt; | [PaddingItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/PaddingItem.html)
| rotation | [RotationCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;AnnotationContext&gt; | double
| position | [LabelAlignPositionCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/LabelAlignPositionCallback.html) | [AlignPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AlignPosition.html)
| textAlign | [TextAlignCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/TextAlignCallback.html)&lt;AnnotationContext&gt; | [TextAlign](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/TextAlign.html)
| textStrokeColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| xAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| yAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| z | [ZCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ZCallback.html) | int

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
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#ellipse-scriptable-options) | The fill color of the ellipse.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| backgroundShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#ellipse-scriptable-options) | The color of shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#ellipse-scriptable-options) | The stroke color of the ellipse.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderDash | int[]| [] | [Yes](#ellipse-scriptable-options) | The length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | [Yes](#ellipse-scriptable-options) | The offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#ellipse-scriptable-options) | The color of border shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderWidth | int | 1 | [Yes](#ellipse-scriptable-options) | The stroke width of the ellipse.
| display | boolean | `true` | [Yes](#ellipse-scriptable-options) | Whether or not this annotation is visible.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.<br/>AFTER_DATASETS_DRAW | [Yes](#ellipse-scriptable-options) | Defines when the annotation is drawn. This allows positioning of the annotation relative to the other elements of the graph.
| rotation | double | 0 | [Yes](#ellipse-scriptable-options) | The rotation of annotation, in degrees.
| shadowBlur | double | 0 | [Yes](#ellipse-scriptable-options) | The amount of blur applied to shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur).
| shadowOffsetX | int  | 0 | [Yes](#ellipse-scriptable-options) | The distance that shadows will be offset horizontally. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX).
| shadowOffsetY | int | 0 | [Yes](#ellipse-scriptable-options) | The distance that shadows will be offset  vertically. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY).
| xMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` |[Yes](#ellipse-scriptable-options) | Right edge of the ellipse in units along the x axis.
| xMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#ellipse-scriptable-options) | Left edge of the ellipse in units along the x axis.
| xScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | The ID of the X scale to bind onto.
| yMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#ellipse-scriptable-options) | Top edge of the ellipse in units along the y axis.
| yMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#ellipse-scriptable-options) | Bottom edge of the ellipse in units along the y axis.
| yScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | The ID of the Y scale to bind onto.
| z | int | 0 | [Yes](#ellipse-scriptable-options) | All visible elements will be drawn in ascending order of `z` option, with the same `drawTime` option.

#### Ellipse scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
EllipseAnnotation ellipse = new EllipseAnnotation();
// sets callback for border width options
ellipse.setBorderWidth(new WidthCallback<AnnotationContext>(){

   @Override
   public Integer invoke(AnnotationContext context){
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
| adjustScaleRange | [AdjustScaleRangeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustScaleRangeCallback.html) | boolean
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/Pattern.html)
| backgroundShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| drawTime | [DrawTimeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/DrawTimeCallback.html) | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html)
| rotation | [RotationCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;AnnotationContext&gt; | double
| shadowBlur | [ShadowBlurCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowBlurCallback.html) | double
| shadowOffsetX | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| shadowOffsetY | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| xMax | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xMin | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMax | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMin | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| z | [ZCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ZCallback.html) | int

### Ellipse label 

An ellipse annotation can have a label to draw in the ellipse.

Every ellipse annotation can have ONLY 1 label. 

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
EllipseAnnotation ellipse = new EllipseAnnotation();
// sets label configuration
ellipse.getLabel().setDisplay(true);
ellipse.getLabel().setContent("My label");
// stores the annotation in the main options
options.setAnnotations(ellipse);
```

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| color | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#ellipse-label-scriptable-options) | The text color of the label.
| content | String - String[] - [Img](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Canvas.html) | `null` | [Yes](#ellipse-label-scriptable-options) | The content to show in the label. Provide an array to display values on a new line.
| display | boolean | `false` | [Yes](#ellipse-label-scriptable-options) | Whether or not the label is shown.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | See description | - | Defines when the label is drawn.<br/>Defaults to the box annotation draw time if unset.
| [font](#fonts-and-colors) | [IsFont](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/IsFont.html) - List&lt;[FontItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html)&gt; - [FontItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html)[] | See description | [Yes](#ellipse-label-scriptable-options) | The text font of the label. The default value is the global font with the weight set to Weight.BOLD.<br/>See [Font](../defaults/DefaultsCharts#font).
| imageHeight | int - String | Undefined.INTEGER - `null` | [Yes](#ellipse-label-scriptable-options) | Overrides the height of the image. Could be set in pixel by a number, or in percentage of current height of image by a string. If uset, uses the height of the image. It is used only when the content is an image.
| imageOpacity | double | 0 | [Yes](#ellipse-label-scriptable-options) | Overrides the opacity of the image or canvas element. Could be set a number in the range 0.0 to 1.0, inclusive. It is used only when the content is an image or canvas element.
| imageWidth | int - String | Undefined.INTEGER - `null` | [Yes](#ellipse-label-scriptable-options) | Overrides the width of the image. Could be set in pixel by a number, or in percentage of current width of image by a string. If unset, uses the width of the image. It is used only when the content is an image.
| padding | [Padding](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/configuration/Padding.html) | 6 | [Yes](#ellipse-label-scriptable-options) | Number of pixels to add above and below the title text.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| position | [AlignPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AlignPosition.html) | See [position](#box-label-position) | [Yes](#ellipse-label-scriptable-options) | Anchor position of label on box.
| rotation | double | 0 | [Yes](#line-label-scriptable-options) | The rotation of label, in degrees.
| textAlign | [TextAlign](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.START | [Yes](#ellipse-label-scriptable-options) | Horizontal alignment on the label content when is set as a multiple lines text.
| textStrokeColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#ellipse-label-scriptable-options) | The stroke color of the text.
|textStrokeWidth | int | 0 | [Yes](#ellipse-label-scriptable-options) | The stroke width of the text.
| xAdjust | double | 0 | [Yes](#ellipse-label-scriptable-options) | Adjustment along x-axis (left-right) of label relative to computed position. Negative values move the label left, positive right.
| yAdjust | double | 0 | [Yes](#ellipse-label-scriptable-options) | Adjustment along y-axis (top-bottom) of label relative to computed position. Negative values move the label up, positive down.
| z | int | 0 | [Yes](#ellipse-label-scriptable-options) | All visible elements will be drawn in ascending order of `z` option, with the same `drawTime` option.

#### Ellipse label scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
EllipseAnnotation ellipse = new EllipseAnnotation();
// sets callback for color options
ellipse.getLabel().setColor(new ColorCallback<AnnotationContext>(){

   @Override
   public IsColor invoke(AnnotationContext context){
      // logic
      return color;
   }
});
// stores the annotation in the main options
options.setAnnotations(ellipse);
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :-
| color | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| content | [ContentCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ContentCallback.html) | String - List&lt;String&gt; - [Img](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Canvas.html)
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| [font](#fonts-and-colors) | [FontsCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/FontsCallback.html)&lt;AnnotationContext&gt; | List&lt;[FontItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html)&gt;
| imageHeight | [ImageSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ImageSizeCallback.html) | String - int
| imageOpacity | [ImageOpacityCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ImageOpacityCallback.html) | double
| imageWidth | [ImageSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ImageSizeCallback.html) | String - int
| padding | [PaddingCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/PaddingCallback.html)&lt;AnnotationContext&gt; | [PaddingItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/PaddingItem.html)
| rotation | [RotationCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;AnnotationContext&gt; | double
| position | [LabelAlignPositionCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/LabelAlignPositionCallback.html) | [AlignPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AlignPosition.html)
| textAlign | [TextAlignCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/TextAlignCallback.html)&lt;AnnotationContext&gt; | [TextAlign](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/TextAlign.html)
| textStrokeColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| xAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| yAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| z | [ZCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ZCallback.html) | int

## Label

Label annotations are used to add contents on the chart area. This can be useful for describing values that are of interest.

<img src={useBaseUrl('/img/annotationLabel.png')} />

Every plugin options can have an unlimited number of labels annotations. 

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
LabelAnnotation label = new LabelAnnotation();
label.setDrawTime(DrawTime.AFTER_DRAW);
label.setXScaleID(DefaultScaleId.X);
label.setYScaleID(DefaultScaleId.Y);
label.setXValue("February");
label.setYValue(50);
label.setContent("My label");
// stores the annotation in the main options
options.setAnnotations(label);
```

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| adjustScaleRange | boolean | `true` | [Yes](#label-scriptable-options) | If `true`, the scale range should be adjusted if this annotation is out of range.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#label-scriptable-options) | The fill color of the label box.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| backgroundShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#label-scriptable-options) | The color of shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderCapStyle | [CapStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/CapStyle.html) | CapStyle.BUTT | [Yes](#label-scriptable-options) | Cap style of the border label box. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#label-scriptable-options) | The stroke color of the label box.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| borderDash | int[]| [] | [Yes](#label-scriptable-options) | The length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | [Yes](#label-scriptable-options) | The offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/JoinStyle.html) | JoinStyle.MITER | [Yes](#label-scriptable-options) | Border line joint style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)
| borderRadius | int - [BarBorderRadius](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/data/BarBorderRadius.html) | 0 | [Yes](#label-scriptable-options) | The radius in pixels of label box.
| borderShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#label-scriptable-options) | The color of border shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderWidth | int | 0 | [Yes](#label-scriptable-options) | The stroke width of the label box.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.BLACK - <span style={{backgroundColor: 'black', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#label-scriptable-options) | The text color of the label.
| content | String - String[] - [Img](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Canvas.html) | `null` | [Yes](#label-scriptable-options) | The content to show in the label. Provide an array to display values on a new line.
| display | boolean | `true` | [Yes](#label-scriptable-options) | Whether or not this annotation is visible.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.<br/>AFTER_DATASETS_DRAW | [Yes](#label-scriptable-options) | Defines when the annotation is drawn. This allows positioning of the annotation relative to the other elements of the graph.
| [font](#fonts-and-colors) | [IsFont](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/IsFont.html) - List&lt;[FontItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html)&gt; - [FontItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html)[] | See description | [Yes](#label-scriptable-options) | The text font of the label. The default value is the global font.<br/>See [Font](../defaults/DefaultsCharts#font).
| imageHeight | int - String | Undefined.INTEGER - `null` | [Yes](#label-scriptable-options) | Overrides the height of the image. Could be set in pixel by a number, or in percentage of current height of image by a string. If uset, uses the height of the image. It is used only when the content is an image.
| imageOpacity | double | 0 | [Yes](#label-scriptable-options) | Overrides the opacity of the image or canvas element. Could be set a number in the range 0.0 to 1.0, inclusive. It is used only when the content is an image or canvas element.
| imageWidth | int - String | Undefined.INTEGER - `null` | [Yes](#label-scriptable-options) | Overrides the width of the image. Could be set in pixel by a number, or in percentage of current width of image by a string. If unset, uses the width of the image. It is used only when the content is an image.
| padding | [Padding](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/configuration/Padding.html) | 6 | [Yes](#label-scriptable-options) | Number of pixels to add above and below the title text.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| position | [AlignPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AlignPosition.html) | See [position](#label-position) | [Yes](#label-scriptable-options) | Anchor position of label.
| rotation | double | 0 | [Yes](#label-scriptable-options) | The rotation of annotation, in degrees.
| shadowBlur | double | 0 | [Yes](#label-scriptable-options) | The amount of blur applied to shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur).
| shadowOffsetX | int  | 0 | [Yes](#label-scriptable-options) | The distance that shadows will be offset horizontally. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX).
| shadowOffsetY | int | 0 | [Yes](#label-scriptable-options) | The distance that shadows will be offset  vertically. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY).
| textAlign | [TextAlign](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.CENTER | [Yes](#label-scriptable-options) | Horizontal alignment on the label content when is set as a multiple lines text.
| textStrokeColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#label-scriptable-options) | The stroke color of the text.
|textStrokeWidth | int | 0 | [Yes](#label-scriptable-options) | The stroke width of the text.
| xAdjust | double | 0 | [Yes](#label-scriptable-options) | Adjustment along x-axis (left-right) of point relative to computed position. Negative values move the point left, positive right.
| xMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#label-scriptable-options) | X coordinate of end two of the box, whose center is used as the center of the point, in units along the x axis.
| xMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#label-scriptable-options) | X coordinate of end one of the box, whose center is used as the center of the point, in units along the x axis.
| xScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | The ID of the X scale to bind onto.
| xValue | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#label-scriptable-options) | X coordinate of the center of point in units along the x axis.
| yAdjust | double | 0 | [Yes](#label-scriptable-options) | Adjustment along y-axis (top-bottom) of point relative to computed position. Negative values move the point up, positive down.
| yMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#label-scriptable-options) | Y coordinate of end one of the box, whose center is used as the center of the point, in units along the y axis.
| yMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#label-scriptable-options) | Y coordinate of end one of the box, whose center is used as the center of the point, in units along the y axis.
| yScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | The ID of the Y scale to bind onto.
| yValue | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#label-scriptable-options) | Y coordinate of the center of point in units along the y axis.
| z | int | 0 | [Yes](#label-scriptable-options) | All visible elements will be drawn in ascending order of `z` option, with the same `drawTime` option.

If one of the axes does not match an axis in the chart, the point annotation will take the center of the chart as point. The 2 coordinates, xValue, yValue are optional. If not specified, the point annotation will take the center of the chart as point.

The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the box is expanded out to the edges in the respective direction and the box size is used to calculated the center of the point.

#### Label position

[AlignPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AlignPosition.html) can define the `x` property for the horizontal alignment of the label with respect to the selected point. Similarly, the `y` property defines the vertical alignment.

Possible options for both properties are LabelPosition.START, LabelPosition.CENTER, LabelPosition.END, or a double, a value between 0 and 1, is representing the percentage on the size where the label will be located.

Default is LabelPosition.CENTER.

#### Label scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
LabelAnnotation label = new LabelAnnotation();
// sets callback for border width options
label.setBorderWidth(new WidthCallback<AnnotationContext>(){

   @Override
   public Integer invoke(AnnotationContext context){
      // logic
      return borderWidth;
   }
});
// stores the annotation in the main options
options.setAnnotations(label);
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :-
| adjustScaleRange | [AdjustScaleRangeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustScaleRangeCallback.html) | boolean
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/Pattern.html)
| backgroundShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderCapStyle | [CapStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/CapStyleCallback.html)&lt;AnnotationContext&gt; | [CapStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/CapStyle.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderJoinStyle | [JoinStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/JoinStyleCallback.html)&lt;AnnotationContext&gt; | [JoinStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/JoinStyle.html)
| borderRadius | [BorderRadiusCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html)&lt;AnnotationContext&gt; | int - - [BarBorderRadius](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/data/BarBorderRadius.html)
| borderShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| color | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| content | [ContentCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ContentCallback.html) | String - List&lt;String&gt; - [Img](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Canvas.html)
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| drawTime | [DrawTimeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/DrawTimeCallback.html) | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html)
| [font](#fonts-and-colors) | [FontsCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/FontsCallback.html)&lt;AnnotationContext&gt; | List&lt;[FontItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html)&gt;
| imageHeight | [ImageSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ImageSizeCallback.html) | String - int
| imageOpacity | [ImageOpacityCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ImageOpacityCallback.html) | double
| imageWidth | [ImageSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ImageSizeCallback.html) | String - int
| padding | [PaddingCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/PaddingCallback.html)&lt;AnnotationContext&gt; | [PaddingItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/PaddingItem.html)
| position | [LabelAlignPositionCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/LabelAlignPositionCallback.html) | [AlignPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AlignPosition.html)
| rotation | [RotationCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;AnnotationContext&gt; | double
| textAlign | [TextAlignCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/TextAlignCallback.html)&lt;AnnotationContext&gt; | [TextAlign](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/TextAlign.html)
| shadowBlur | [ShadowBlurCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowBlurCallback.html) | double
| shadowOffsetX | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| shadowOffsetY | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| textStrokeColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| xAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| xMax | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xMin | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xValue | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| yMax | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMin | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yValue | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| z | [ZCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ZCallback.html) | int

### Callout

The callout connects the label by a line to the selected point.

Every label annotation can have ONLY 1 callout. 

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
LabelAnnotation label = new LabelAnnotation();
// sets callout configuration
line.getCallout().setDisplay(true);
// stores the annotation in the main options
options.setAnnotations(line);
```

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| borderCapStyle | [CapStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/CapStyle.html) | CapStyle.BUTT| [Yes](#callout-scriptable-options) | Cap style of the callout line. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)| HtmlColor.BLACK - <span style={{backgroundColor: 'black', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#callout-scriptable-options) | The color of the callout line.
| borderDash | int[] | [] | [Yes](#callout-scriptable-options) | Length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | [Yes](#callout-scriptable-options) | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/JoinStyle.html) | JoinStyle.MITER | [Yes](#callout-scriptable-options) | Callout line joint style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
| borderWidth | int | 1 | [Yes](#callout-scriptable-options) | The width of the callout line in pixels.
| display | boolean | `false` | [Yes](#callout-scriptable-options) | Whether or not the callout is shown.
| margin | int | 5 | [Yes](#callout-scriptable-options) | Amount of pixels between the label and the callout separator.
| position | [CalloutPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/CalloutPosition.html) | CalloutPosition.AUTO | [Yes](#callout-scriptable-options) | The position of callout, with respect to the label.
| side | int | 5 | [Yes](#callout-scriptable-options) | Width of the starter line of callout pointer.
| start | double - int | 0.5D | [Yes](#callout-scriptable-options) | The percentage of the separator dimension to use as starting point for callout pointer. Could be set in pixel by an integer, or in percentage of the separator dimension by a double, a value between 0 and 1.

#### Callout scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
LabelAnnotation label = new LabelAnnotation();
// sets callback for border color options
label.getCallout().setBorderColor(new ColorCallback<AnnotationContext>(){

   @Override
   public IsColor invoke(AnnotationContext context){
      // logic
      return color;
   }
});
// stores the annotation in the main options
options.setAnnotations(label);
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| borderCapStyle | [CapStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/CapStyleCallback.html)&lt;AnnotationContext&gt; | [CapStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/CapStyle.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderJoinStyle | [JoinStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/JoinStyleCallback.html)&lt;AnnotationContext&gt; | [JoinStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/JoinStyle.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| margin | [MarginCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/MarginCallback.html) | int
| position | [CalloutPositionCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/CalloutPositionCallback.html) | [CalloutPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/CalloutPosition.html)
| side | [SideCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/SideCallback.html) | int
| start | [StartCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/StartCallback](https.html) | double - int

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

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| adjustScaleRange | boolean | `true` | [Yes](#line-scriptable-options) | If `true`, the scale range should be adjusted if this annotation is out of range.
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#line-scriptable-options) | The stroke color of the line.
| borderDash | int[] | [] | [Yes](#line-scriptable-options) | the line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.
| borderDashOffset | int | 0 | [Yes](#line-scriptable-options) | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#line-scriptable-options) | The color of border shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderWidth | int | 2 | [Yes](#line-scriptable-options) | The stroke width of the line.
| controlPoint | double - String - [ControlPoint](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/ControlPoint.html) | `{y:'-50%'}` | [Yes](#line-scriptable-options) | If `curve` is enabled, it configures the control point to drawn the curve, calculated in pixels. It can be set by a string in percentage format `"number%"` which are representing the percentage of the distance between the start and end point from the center.
| curve | boolean | `false` | [Yes](#line-scriptable-options) | Whether or not a quadratic [Bézier curve](https://developer.mozilla.org/en-US/docs/Glossary/Bezier_curve) is drawn.
| display | boolean | `true` | [Yes](#line-scriptable-options) | Whether or not this annotation is visible.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.<br/>AFTER_DATASETS_DRAW | [Yes](#line-scriptable-options) | Defines when the annotation is drawn. This allows positioning of the annotation relative to the other elements of the graph.
| endValue | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#line-scriptable-options) | End two of the line when a single scale is specified.
| scaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | ID of the scale in single scale mode. If unset, `xScaleID` and `yScaleID` are used.
| shadowBlur | double | 0 | [Yes](#line-scriptable-options) | The amount of blur applied to shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur).
| shadowOffsetX | int  | 0 | [Yes](#line-scriptable-options) | The distance that shadows will be offset horizontally. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX).
| shadowOffsetY | int | 0 | [Yes](#line-scriptable-options) | The distance that shadows will be offset  vertically. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY).
| value | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#line-scriptable-options) | End one of the line when a single scale is specified.
| xMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#line-scriptable-options) | X coordinate of end two of the line in units along the x axis.
| xMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#line-scriptable-options) | X coordinate of end one of the line in units along the x axis.
| xScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | The ID of the X scale to bind onto.
| yMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#line-scriptable-options) | Y coordinate of end one of the line in units along the y axis.
| yMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#line-scriptable-options) | Y coordinate of end one of the line in units along the y axis.
| yScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | The ID of the Y scale to bind onto.
| z | int | 0 | [Yes](#line-scriptable-options) | All visible elements will be drawn in ascending order of `z` option, with the same `drawTime` option.

If one of the axes does not match an axis in the chart, the line will take the entire chart dimension. 

The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the line is expanded out to the edges in the respective direction.

The line can be positioned in two different ways:

  * if `scaleID` is set, then `value` and `endValue` must also be set to indicate the end points of the line. The line will be perpendicular to the axis identified by `scaleID`.
  * if `scaleID` is unset, then `xScaleID` and `yScaleID` are used to draw a line from `(xMin, yMin)` to `(xMax, yMax)`.

#### Line scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
LineAnnotation line = new LineAnnotation();
// sets callback for border width options
line.setBorderWidth(new WidthCallback<AnnotationContext>(){

   @Override
   public Integer invoke(AnnotationContext context){
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
| adjustScaleRange | [AdjustScaleRangeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustScaleRangeCallback.html) | boolean
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| controlPoint | [ControlPointCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ControlPointCallback.html) | double - String - [ControlPoint](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/ControlPoint.html)
| curve | [CurveCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/CurveCallback.html) | boolean
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| drawTime | [DrawTimeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/DrawTimeCallback.html) | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html)
| endValue | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| shadowBlur | [ShadowBlurCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowBlurCallback.html) | double
| shadowOffsetX | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| shadowOffsetY | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| value | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xMax | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xMin | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMax | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMin | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| z | [ZCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ZCallback.html) | int

### Line label 

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
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.8) - <span style={{backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#line-label-scriptable-options) | Background color of the label container.
| backgroundShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#line-label-scriptable-options) | The color of shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderCapStyle | [CapStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/CapStyle.html) | CapStyle.BUTT| [Yes](#line-label-scriptable-options) | Cap style of the line. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.BLACK - <span style={{backgroundColor: 'black', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#line-label-scriptable-options) | The color of the line.
| borderDash | int[] | [] | [Yes](#line-label-scriptable-options) | Length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | [Yes](#line-label-scriptable-options) | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/JoinStyle.html) | JoinStyle.MITER | [Yes](#line-label-scriptable-options) | Line joint style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
| borderRadius | int - [BarBorderRadius](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/data/BarBorderRadius.html) | 6 | [Yes](#line-label-scriptable-options) | The radius of label box in pixels.
| borderShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#line-label-scriptable-options) | The color of border shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderWidth | int | 0 | [Yes](#line-label-scriptable-options) | The width of the line in pixels.
| color | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#line-label-scriptable-options) | The text color of the label.
| content | String - String[] - [Img](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Canvas.html) | `null` | [Yes](#line-label-scriptable-options) | The content to show in the label. Provide an array to display values on a new line.
| display | boolean | `false` | [Yes](#line-label-scriptable-options) | Whether or not the label is shown.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | See description | - | Defines when the label is drawn.<br/>Defaults to the line annotation draw time if unset.
| [font](#fonts-and-colors) | [IsFont](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/IsFont.html) - List&lt;[FontItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html)&gt; - [FontItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html)[] | See description | [Yes](#line-label-scriptable-options) | The text font of the label. The default value is the global font with the style set to FontStyle.BOLD.<br/>See [Font](../defaults/DefaultsCharts#font).
| imageHeight | int - String | Undefined.INTEGER - `null` | [Yes](#line-label-scriptable-options) | Overrides the height of the image. Could be set in pixel by a number, or in percentage of current height of image by a string. If uset, uses the height of the image. It is used only when the content is an image.
| imageOpacity | double | 0 | [Yes](#line-label-scriptable-options) | Overrides the opacity of the image or canvas element. Could be set a number in the range 0.0 to 1.0, inclusive. It is used only when the content is an image or canvas element.
| imageWidth | int - String | Undefined.INTEGER - `null` | [Yes](#line-label-scriptable-options) | Overrides the width of the image. Could be set in pixel by a number, or in percentage of current width of image by a string. If unset, uses the width of the image. It is used only when the content is an image.
| padding | [Padding](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/configuration/Padding.html) | 6 | [Yes](#line-label-scriptable-options) | Number of pixels to add above and below the title text.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| position | [LabelPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/LabelPosition.html) - double | LabelPosition.CENTER | [Yes](#line-label-scriptable-options) | Anchor position of label on line. If set by a double, a value between 0 and 1, is representing the percentage on the size where the label will be located.
| rotation | double | 0 | [Yes](#line-label-scriptable-options) | The rotation of label, in degrees.
| shadowBlur | double | 0 | [Yes](#line-label-scriptable-options) | The amount of blur applied to shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur).
| shadowOffsetX | int  | 0 | [Yes](#line-label-scriptable-options) | The distance that shadows will be offset horizontally. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX).
| shadowOffsetY | int | 0 | [Yes](#line-label-scriptable-options) | The distance that shadows will be offset  vertically. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY).
| textAlign | [TextAlign](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.CENTER | [Yes](#line-label-scriptable-options) | Horizontal alignment on the label content when is set as a multiple lines text.
| textStrokeColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#line-label-scriptable-options) | The stroke color of the text.
| textStrokeWidth | int | 0 | [Yes](#line-label-scriptable-options) | The stroke width of the text.
| xAdjust | double | 0 | [Yes](#line-label-scriptable-options) | Adjustment along x-axis (left-right) of label relative to computed position. Negative values move the label left, positive right.
| yAdjust | double | 0 | [Yes](#line-label-scriptable-options) | Adjustment along y-axis (top-bottom) of label relative to computed position. Negative values move the label up, positive down.
| z | int | 0 | [Yes](#line-label-scriptable-options) | All visible elements will be drawn in ascending order of `z` option, with the same `drawTime` option.

#### Line label scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
LineAnnotation line = new LineAnnotation();
// sets callback for background color options
line.getLabel().setBackgroundColor(new ColorCallback<AnnotationContext>(){

   @Override
   public IsColor invoke(AnnotationContext context){
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
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/Pattern.html)
| backgroundShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderCapStyle | [CapStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/CapStyleCallback.html)&lt;AnnotationContext&gt; | [CapStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/CapStyle.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderJoinStyle | [JoinStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/JoinStyleCallback.html)&lt;AnnotationContext&gt; | [JoinStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/JoinStyle.html)
| borderRadius | [BorderRadiusCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html)&lt;AnnotationContext&gt; | int - - [BarBorderRadius](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/data/BarBorderRadius.html)
| borderShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| color | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| content | [ContentCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ContentCallback.html) | String - List&lt;String&gt; - [Img](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Canvas.html)
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| [font](#fonts-and-colors) | [FontsCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/FontsCallback.html)&lt;AnnotationContext&gt; | List&lt;[FontItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/FontItem.html)&gt;
| imageHeight | [ImageSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ImageSizeCallback.html) | String - int
| imageOpacity | [ImageOpacityCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ImageOpacityCallback.html) | double
| imageWidth | [ImageSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ImageSizeCallback.html) | String - int
| padding | [PaddingCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/PaddingCallback.html)&lt;AnnotationContext&gt; | [PaddingItem](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/PaddingItem.html)
| position | [LabelPositionCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/LabelPositionCallback.html) | double - [LabelPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/LabelPosition.html)
| rotation | [RotationCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;AnnotationContext&gt; | double**<sup style={{color: 'orange'}}>(1)</sup>**
| shadowBlur | [ShadowBlurCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowBlurCallback.html) | double
| shadowOffsetX | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| shadowOffsetY | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| textAlign | [TextAlignCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/TextAlignCallback.html)&lt;AnnotationContext&gt; | [TextAlign](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/TextAlign.html)
| textStrokeColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| textStrokeWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| xAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| yAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| z | [ZCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ZCallback.html) | int

**<sup style={{color: 'orange'}}>(1)</sup>**To enable `autoRotation` by the rotation callback, the value to return must be `Double.NaN`.

```java
// sets callback for auto rotation
line.getLabel().setRotation(new RotationCallback<AnnotationContext>(){

   @Override
   public Double invoke(AnnotationContext context){
      return Double.NaN; // autoRotation is set
   }
});
```

### Callout

The callout connects the label by a line to the line annotation.

Every line annotation can have ONLY 1 line label and callout. 

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
line.getLabel().setYAdjust(-100);
// sets callout configuration
line.getLabel().getCallout().setDisplay(true);
// stores the annotation in the main options
options.setAnnotations(line);
```

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| borderCapStyle | [CapStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/CapStyle.html) | CapStyle.BUTT| [Yes](#line-label-callout-scriptable-options) | Cap style of the callout line. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)| HtmlColor.BLACK - <span style={{backgroundColor: 'black', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | [Yes](#line-label-callout-scriptable-options) | The color of the callout line.
| borderDash | int[] | [] | [Yes](#line-label-callout-scriptable-options) | Length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0 | [Yes](#line-label-callout-scriptable-options) | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/JoinStyle.html) | JoinStyle.MITER | [Yes](#line-label-callout-scriptable-options) | Callout line joint style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
| borderWidth | int | 1 | [Yes](#line-label-callout-scriptable-options) | The width of the callout line in pixels.
| display | boolean | `false` | [Yes](#line-label-callout-scriptable-options) | Whether or not the callout is shown.
| margin | int | 5 | [Yes](#line-label-callout-scriptable-options) | Amount of pixels between the label and the callout separator.
| position | [CalloutPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/CalloutPosition.html) | CalloutPosition.AUTO | [Yes](#line-label-callout-scriptable-options) | The position of callout, with respect to the label.
| side | int | 5 | [Yes](#line-label-callout-scriptable-options) | Width of the starter line of callout pointer.
| start | double - int | 0.5D | [Yes](#line-label-callout-scriptable-options) | The percentage of the separator dimension to use as starting point for callout pointer. Could be set in pixel by an integer, or in percentage of the separator dimension by a double, a value between 0 and 1.

#### Line label Callout scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
LineAnnotation line = new LineAnnotation();
// sets label configuration
line.getLabel().setDisplay(true);
line.getLabel().setContent("My threshold");
line.getLabel().setBackgroundColor(HtmlColor.RED);
line.getLabel().setYAdjust(-100);
line.getLabel().getCallout().setDisplay(true);
// sets callback for border color options
line.getLabel().getCallout().setBorderColor(new ColorCallback<AnnotationContext>(){

   @Override
   public IsColor invoke(AnnotationContext context){
      // logic
      return color;
   }
});
// stores the annotation in the main options
options.setAnnotations(label);
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| borderCapStyle | [CapStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/CapStyleCallback.html)&lt;AnnotationContext&gt; | [CapStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/CapStyle.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderJoinStyle | [JoinStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/JoinStyleCallback.html)&lt;AnnotationContext&gt; | [JoinStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/JoinStyle.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| margin | [MarginCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/MarginCallback.html) | int
| position | [CalloutPositionCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/CalloutPositionCallback.html) | [CalloutPosition](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/CalloutPosition.html)
| side | [SideCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/SideCallback.html) | int
| start | [StartCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/StartCallback](https.html) | double - int

### Arrow heads 

Enabling it, you can add arrow heads at start and/or end of a line. It uses the `borderWidth` of the line options to configure the line width of the arrow head.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
LineAnnotation line = new LineAnnotation();
// sets arrowheads configuration
line.getArrowHeads().setDisplay(true);
line.getArrowHeads().setLength(20);
line.getArrowHeads().setWidth(12);
// stores the annotation in the main options
options.setAnnotations(line);
```

The following options can be specified per (`line.getArrowHeads().getStart()` and/or `line.getArrowHeads().getEnd()`) arrow head, or at the top level (`line.getArrowHeads()`) which apply to all arrow heads.

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `lineAnnotation.borderColor` | [Yes](#arrowheads-scriptable-options) | Background color of the arrow head.
| backgroundShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#arrowheads-scriptable-options) | The color of shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `lineAnnotation.borderColor` | [Yes](#arrowheads-scriptable-options) | The border arrow head color.
| borderDash | int[] | `lineAnnotation.borderDash` | [Yes](#arrowheads-scriptable-options) | Length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | `lineAnnotation.borderDashOffset` | [Yes](#arrowheads-scriptable-options) | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `lineAnnotation.borderShadowColor` | [Yes](#arrowheads-scriptable-options) | The color of border shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderWidth | int | `lineAnnotation.borderWidth` | [Yes](#arrowheads-scriptable-options) | The width of the line in pixels.
| display | boolean | `false` | [Yes](#arrowheads-scriptable-options) | Whether or not the arrow head is shown.
| end | [ArrowHeads](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/ArrowHeads.html) | - | - | To configure the arrow head at the end of the line.
| fill | boolean | `false` | [Yes](#arrowheads-scriptable-options) | Whether or not the arrow head is filled.
| length | int | `12` | [Yes](#arrowheads-scriptable-options) | The length of the arrow head in pixels.
| shadowBlur | double | `lineAnnotation.shadowBlur` | [Yes](#arrowheads-scriptable-options) | The amount of blur applied to shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur).
| shadowOffsetX | int  | `lineAnnotation.shadowOffsetX` | [Yes](#arrowheads-scriptable-options) | The distance that shadows will be offset horizontally. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX).
| shadowOffsetY | int | `lineAnnotation.shadowOffsetY` | [Yes](#arrowheads-scriptable-options) | The distance that shadows will be offset  vertically. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY).
| start | [ArrowHeads](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/ArrowHeads.html) | - | - | To configure the arrow head at the start of the line.
| width | int | `6` | [Yes](#arrowheads-scriptable-options) | The width of the arrow head in pixels.

#### ArrowHeads scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
LineAnnotation line = new LineAnnotation();
// sets callback for background color options
line.getArrowHeads().setBackgroundColor(new ColorCallback<AnnotationContext>(){

   @Override
   public IsColor invoke(AnnotationContext context){
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
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/Pattern.html)
| backgroundShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| fill | [FillCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/FillCallback.html) | boolean
| length | [LengthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/LengthCallback.html) | int
| shadowBlur | [ShadowBlurCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowBlurCallback.html) | double
| shadowOffsetX | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| shadowOffsetY | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| width | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int

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
| adjustScaleRange | boolean | `true` | [Yes](#point-scriptable-options) | If `true`, the scale range should be adjusted if this annotation is out of range.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#point-scriptable-options) | The fill color of the point.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| backgroundShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#point-scriptable-options) | The color of shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#point-scriptable-options) | The stroke color of the point.
| borderDash | int[] | [] | [Yes](#point-scriptable-options) | The line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.
| borderDashOffset | int | 0 | [Yes](#point-scriptable-options) | Offset for border dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#point-scriptable-options) | The color of border shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderWidth | int | 1 | [Yes](#point-scriptable-options) | The stroke width of the point.
| display | boolean | `true` | [Yes](#point-scriptable-options) | Whether or not this annotation is visible.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.<br/>AFTER_DATASETS_DRAW | [Yes](#point-scriptable-options) | Defines when the annotation is drawn. This allows positioning of the annotation relative to the other elements of the graph.
| pointStyle | [PointStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/PointStyle.html) - [Img](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Canvas.html) | PointStyle.CIRCLE | [Yes](#point-scriptable-options) | Style of the point.   
| radius | double | 10 | [Yes](#point-scriptable-options) | Size of the point in pixels.
| rotation | double | 0 | [Yes](#point-scriptable-options) | The rotation of the point, in degrees.
| shadowBlur | double | 0 | [Yes](#point-scriptable-options) | The amount of blur applied to shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur).
| shadowOffsetX | int  | 0 | [Yes](#point-scriptable-options) | The distance that shadows will be offset horizontally. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX).
| shadowOffsetY | int | 0 | [Yes](#point-scriptable-options) | The distance that shadows will be offset  vertically. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY).
| xAdjust | double | 0 | [Yes](#point-scriptable-options) | Adjustment along x-axis (left-right) of point relative to computed position. Negative values move the point left, positive right.
| xMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#point-scriptable-options) | X coordinate of end two of the box, whose center is used as the center of the point, in units along the x axis.
| xMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#point-scriptable-options) | X coordinate of end one of the box, whose center is used as the center of the point, in units along the x axis.
| xScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | The ID of the X scale to bind onto.
| xValue | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#point-scriptable-options) | X coordinate of the center of point in units along the x axis.
| yAdjust | double | 0 | [Yes](#point-scriptable-options) | Adjustment along y-axis (top-bottom) of point relative to computed position. Negative values move the point up, positive down.
| yMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#point-scriptable-options) | Y coordinate of end one of the box, whose center is used as the center of the point, in units along the y axis.
| yMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#point-scriptable-options) | Y coordinate of end one of the box, whose center is used as the center of the point, in units along the y axis.
| yScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | The ID of the Y scale to bind onto.
| yValue | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#point-scriptable-options) | Y coordinate of the center of point in units along the y axis.
| z | int | 0 | [Yes](#point-scriptable-options) | All visible elements will be drawn in ascending order of `z` option, with the same `drawTime` option.

If one of the axes does not match an axis in the chart, the point annotation will take the center of the chart as point. The 2 coordinates, xValue, yValue are optional. If not specified, the point annotation will take the center of the chart as point.

The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the box is expanded out to the edges in the respective direction and the box size is used to calculated the center of the point. To enable to use the box positioning, the `radius` must be set to `0`.

#### Point scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
PointAnnotation point = new PointAnnotation();
// sets callback for border width options
point.setBorderWidth(new WidthCallback<AnnotationContext>(){

   @Override
   public Integer invoke(AnnotationContext context){
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
| adjustScaleRange | [AdjustScaleRangeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustScaleRangeCallback.html) | boolean
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/Pattern.html)
| backgroundShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| drawTime | [DrawTimeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/DrawTimeCallback.html) | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html)
| pointStyle | [PointStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/PointStyleCallback.html)&lt;AnnotationContext&gt; | [PointStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/PointStyle.html) - [Img](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/dom/elements/Canvas.html)
| radius | [RadiusCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/RadiusCallback.html)&lt;AnnotationContext&gt; | double
| rotation | [RotationCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;AnnotationContext&gt; | double
| shadowBlur | [ShadowBlurCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowBlurCallback.html) | double
| shadowOffsetX | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| shadowOffsetY | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| xAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| xMax | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xMin | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xValue | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| yMax | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMin | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yValue | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| z | [ZCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ZCallback.html) | int

## Polygon

Polygon annotations are used to mark whatever polygon (for instance triangle, square or pentagon) on the chart area. This can be useful for highlighting values that are of interest.

<img src={useBaseUrl('/img/annotationPolygon.png')} />

Every plugin options can have an unlimited number of polygons annotations. 

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
PolygonAnnotation polygon = new PolygonAnnotation();
// sets annotation configuration
polygon.setXScaleID(DefaultScaleId.X);
polygon.setYScaleID(DefaultScaleId.Y);
polygon.setXValue("February");
polygon.setYValue(50);
polygon.setRadius(10);
// pentagon
polygon.setSides(5);
polygon.setBackgroundColor(HtmlColor.YELLOW.alpha(0.3D));
polygon.setBorderWidth(2);
polygon.setBorderColor(HtmlColor.YELLOW.darker());
// stores the annotation in the main options
options.setAnnotations(polygon);
```

The complete options are described by following table:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| adjustScaleRange | boolean | `true` | [Yes](#polygon-scriptable-options) | If `true`, the scale range should be adjusted if this annotation is out of range.
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#polygon-scriptable-options) | The fill color of the polygon.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| backgroundShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#polygon-scriptable-options) | The color of shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderCapStyle | [CapStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/CapStyle.html) | CapStyle.BUTT | [Yes](#polygon-scriptable-options) | Cap style of the border line. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap).
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | [Yes](#polygon-scriptable-options) | The stroke color of the polygon.
| borderDash | int[] | [] | [Yes](#polygon-scriptable-options) | The line dash pattern used when stroking lines, using an array of values which specify alternating lengths of lines and gaps which describe the pattern.
| borderDashOffset | int | 0 | [Yes](#polygon-scriptable-options) | Offset for border dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/JoinStyle.html) | JoinStyle.MITER | [Yes](#polygon-scriptable-options) | Border line joint style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)
| borderShadowColor | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#polygon-scriptable-options) | The color of border shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor).
| borderWidth | int | 1 | [Yes](#polygon-scriptable-options) | The stroke width of the polygon.
| display | boolean | `true` | [Yes](#polygon-scriptable-options) | Whether or not this annotation is visible.
| drawTime | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html) | DrawTime.<br/>AFTER_DATASETS_DRAW | [Yes](#polygon-scriptable-options) | Defines when the annotation is drawn. This allows positioning of the annotation relative to the other elements of the graph.
| radius | double | 10 | [Yes](#polygon-scriptable-options) | Size of the polygon in pixels.
| rotation | double | 0 | [Yes](#polygon-scriptable-options) | The rotation of the polygon, in degrees.
| shadowBlur | double | 0 | [Yes](#polygon-scriptable-options) | The amount of blur applied to shadows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur).
| shadowOffsetX | int  | 0 | [Yes](#polygon-scriptable-options) | The distance that shadows will be offset horizontally. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX).
| shadowOffsetY | int | 0 | [Yes](#polygon-scriptable-options) | The distance that shadows will be offset  vertically. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY).
| sides | int | 3 | [Yes](#polygon-scriptable-options) | Amount of sides of polygon.
| xAdjust | double | 0 | [Yes](#polygon-scriptable-options) | Adjustment along x-axis (left-right) of polygon relative to computed position. Negative values move the polygon left, positive right.
| xMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#polygon-scriptable-options) | X coordinate of end two of the box, whose center is used as the center of the polygon, in units along the x axis.
| xMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#polygon-scriptable-options) | X coordinate of end one of the box, whose center is used as the center of the polygon, in units along the x axis.
| xScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | The ID of the X scale to bind onto.
| xValue | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#polygon-scriptable-options) | X coordinate of the center of polygon in units along the x axis.
| yAdjust | double | 0 | [Yes](#polygon-scriptable-options) | Adjustment along y-axis (top-bottom) of polygon relative to computed position. Negative values move the polygon up, positive down.
| yMax | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#polygon-scriptable-options) | Y coordinate of end one of the box, whose center is used as the center of the polygon, in units along the y axis.
| yMin | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#polygon-scriptable-options) | Y coordinate of end one of the box, whose center is used as the center of the polygon, in units along the y axis.
| yScaleID | String - [ScaleId](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/options/ScaleId.html) | `null` | - | The ID of the Y scale to bind onto.
| yValue | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html) | `null` | [Yes](#polygon-scriptable-options) | Y coordinate of the center of polygon in units along the y axis.
| z | int | 0 | [Yes](#polygon-scriptable-options) | All visible elements will be drawn in ascending order of `z` option, with the same `drawTime` option.

If one of the axes does not match an axis in the chart, the point annotation will take the center of the chart as point. The 2 coordinates, xValue, yValue are optional. If not specified, the point annotation will take the center of the chart as point.

The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the box is expanded out to the edges in the respective direction and the box size is used to calculated the center of the point. To enable to use the box positioning, the `radius` must be set to `0`.

#### Polygon scriptable options

Some options also accept a callback which is called at runtime and that takes the context as single argument, see [here](#scriptable-context) the details, which is representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
PolygonAnnotation polygon = new PolygonAnnotation();
// sets callback for border width options
polygon.setBorderWidth(new WidthCallback<AnnotationContext>(){

   @Override
   public Integer invoke(AnnotationContext context){
      // logic
      return borderWidth;
   }
});
// stores the annotation in the main options
options.setAnnotations(polygon);
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :-
| adjustScaleRange | [AdjustScaleRangeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustScaleRangeCallback.html) | boolean
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/Pattern.html)
| backgroundShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderCapStyle | [CapStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/CapStyleCallback.html)&lt;AnnotationContext&gt; | [CapStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/CapStyle.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderDash | [BorderDashCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashCallback.html)&lt;AnnotationContext&gt; | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html)&lt;AnnotationContext&gt; | double
| borderJoinStyle | [JoinStyleCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/JoinStyleCallback.html)&lt;AnnotationContext&gt; | [JoinStyle](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/enums/JoinStyle.html)
| borderShadowColor | [ColorCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;AnnotationContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/colors/IsColor.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;AnnotationContext&gt; | int
| display | [SimpleDisplayCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/SimpleDisplayCallback.html)&lt;AnnotationContext&gt; | boolean
| drawTime | [DrawTimeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/DrawTimeCallback.html) | [DrawTime](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/enums/DrawTime.html)
| radius | [RadiusCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/RadiusCallback.html)&lt;AnnotationContext&gt; | double
| rotation | [RotationCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;AnnotationContext&gt; | double
| shadowBlur | [ShadowBlurCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowBlurCallback.html) | double
| shadowOffsetX | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| shadowOffsetY | [ShadowOffsetCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ShadowOffsetCallback.html) | int
| sides | [SidesCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/SidesCallback.html) | int
| xAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| xMax | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xMin | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| xValue | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yAdjust | [AdjustSizeCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/AdjustSizeCallback.html) | double
| yMax | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yMin | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| yValue | [ValueCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ValueCallback.html) | String - double - [Date](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html)
| z | [ZCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ZCallback.html) | int

## Events

All annotations provide a set of callbacks which can be enabled to catch events on them.

To catch events is enough to set the events which you want to catch at [AnnotationOptions](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AnnotationOptions.html) and set a callback instance in the annotation.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
// without id (a unique one is created automatically)
BoxAnnotation box = new BoxAnnotation();
// sets callback for specific annotation
box.setClickCallback(new ClickCallback(){
			
	@Override
	public boolean onClick(IsChart chart, AbstractAnnotation annotation, ChartEventContext event){
		// logic
		return false; // no redrawing
	}
});
```

You can also catch events with listeners defined for all defined annotations with a single instance, defining it to [AnnotationOptions](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AnnotationOptions.html).

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// sets callback for all annotations
options.setClickCallback(new ClickCallback(){
			
	@Override
	public boolean onClick(IsChart chart, AbstractAnnotation annotation, ChartEventContext event){
		// logic
		return false; // no redrawing
	}
});
```

These are the table of callbacks to implement:

| Event | Callback type | Description
| :- | :- | :-
| enter | [EnterCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/EnterCallback.html) | Called when the mouse enters the annotation.
| leave | [LeaveCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/LeaveCallback.html) | Called when the mouse leaves the annotation.
| click | [ClickCallback](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/callbacks/ClickCallback.html) | Called when a click occurs on the annotation.

:::info
If the event callback returns `true`, the chart will re-render automatically after processing the event completely. This is important when there are the annotations that require re-draws (for instance, after a change of a rendering options).
:::

## Scriptable context

Some options also accept a callback which is called at runtime and that takes the context as single argument, [AnnotationContext](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AnnotationContext.html) representing contextual information and chart instance.

```java
// creates a plugin options
AnnotationOptions options = new AnnotationOptions();
// creates an annotation
BoxAnnotation box = new BoxAnnotation();
// sets callback for border width options
box.setBorderWidth(new WidthCallback<AnnotationContext>(){

   @Override
   public Integer invoke(AnnotationContext context){
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
| annotation | [AbstractAnnotation](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/AbstractAnnotation.html) | The annotation configuration where the options is defined as scriptable.
| attributes | [NativeObjectContainer](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/commons/NativeObjectContainer.html) | User object which you can store your options at runtime.
| chart | [IsChart](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/IsChart.html) | Chart instance. 
| element | [AnnotationElement](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/annotation/elements/AnnotationElement.html) | The element instance related to the annotation.
| shared | Map&lt;String, Object&gt; | A map that can be used to share objects among all contexts for all annotation. 
| type | [ContextType](https://pepstock-org.github.io/Charba/6.3/org/pepstock/charba/client/items/ContextType.html) | The type of the context. It can be `ContextType.CHART` or `ContextType.ANNOTATION`

#### Fonts and colors

When the label to draw has multiple lines, you can use different font and color for each row of the label. This is enabled configuring an array or list of fonts or colors for those options. When the lines are more than the configured fonts of colors, the last configuration of those options is used for all remaining lines.
