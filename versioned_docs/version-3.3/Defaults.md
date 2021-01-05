---
id: Defaults
title: Defaults options
hide_title: true
sidebar_label: Defaults configuration
---
## Introduction
The options are used to change how the chart behaves. There are properties to control styling, fonts, the legend, etc.

This concept is allowing for changing options globally across chart types, using chart type defaults and scales defaults appropriately, avoiding the need to specify options for each instance, or the default for a particular chart type.

**Charba** doesn't merge the options object but delegates [Chart.JS](http://www.chartjs.org/) to do it which merges the option object passed to the chart with the global configuration.

In this way you can be as specific as you would like in your individual chart configuration, while still changing the defaults for all chart types where applicable. 

There are 4 main defaults entities that you can manage to configure your charts, at global level:
  
  1. [Options](#options): global options, containing the configuration items which can be applied to all charts, whatever type of chart. Scale configuration is excluded.
  1. [Scale](#scales): global options related to scale, containing the configuration items which can be applied to all charts (with scales), whatever type of chart.
  1. [Chart option](#charts): global options related to a specific type of chart, containing both options and scales configuration.
  1. [Scale type](#scale-type): global options related to a specific [type](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/AxisType.html) of scale which can be applied to all charts which are using that type of scale.

**Charba** is providing a singleton [Defaults](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Defaults.html) which allows you to manage all defaults entities above mentioned.

:::note PAY ATTENTION
At global level, there is a restriction that it's not possible to apply any callbacks or any events handlers at global level, but only on a chart instance.
:::

## Options

To change the global options, **Charba** is providing the method `getGlobal` in the [Defaults](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Defaults.html) class. These options will be applied to all charts, whatever type of chart.

With above method you can get all global configurations of [Chart.JS](http://www.chartjs.org/) and you have got all `set` and `get` methods to change or retrieve the global configuration items.

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().setResponsive(false);
Defaults.get().getGlobal().setMaintainAspectRatio(true);

double circumference = Defaults.get().getGlobal().getCircumference();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| circumference | double | 2 * Math.PI | The sweep to allow arcs to cover.
| cutoutPercentage | double | 0 | The percentage of the chart that is cut out of the middle.
| defaultColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | The default color to use in the chart, on all objects.
| defaultFontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#666' | Default font color for all text.
| defaultFontFamily | String | 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif | Default font family for all text.
| defaultFontSize | int | 12 | Default font size (in px) for text. Does not apply to radialLinear scale point labels.
| defaultFontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Default font style. Does not apply to tooltip title or footer. Does not apply to chart title.
| defaultLineHeight | double | 1.2 | Height of an individual line of text 
| devicePixelRatio | double | [Window.getDevicePixelRatio()](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/Window.html#getDevicePixelRatio--) | Default device pixel ratio. By default the chart's canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio.
| drawOnAttach | boolean | `true` | `true` if the chart is configured to be draw on the attach of element
| destroyOnDetach | boolean | `true` | `true` if the chart is configured to be destroyed on the detach from element.
| events | [Event](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Event.html)[] | Event.MOUSEMOVE, Event.MOUSEOUT, Event.CLICK, Event.TOUCHSTART, Event.TOUCHMOVE, Event.TOUCHEND | The events option defines the browser events that the chart should listen to for tooltips and hovering.
| maintainAspectRatio | boolean | `true` | Maintain the original canvas aspect ratio (width / height) when resizing.
| aspectRatio | double | 2 | Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas).
| responsive | boolean |  `true` | Resizes the chart canvas when its container does.
| responsiveAnimationDuration | int | 0 | Duration in milliseconds it takes to animate to new size after a resize event.
| rotation | double | -0.5 * Math.PI | The starting angle to draw arcs from.
| showLines | boolean | `true` | If `false`, the lines between points are not drawn.
| spanGaps | boolean | `false` | If `false`, NaN data causes a break in the line.
| startAngle | double | -0.5 * Math.PI | The starting angle to draw arcs for the first item in a dataset.

The `options` element is the root node of several other elements you can set to configure the charts as you need.

The options, set to the chart to configure the chart, are cloned by [Chart.JS](http://www.chartjs.org/) therefore if the options must be changed at runtime, you can:

   1. use the `reconfigure` method of the chart, after you changed the options of the chart
   1. accessing to the [options](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/AbstractChart.html#getNode--) by a chart instance, changing them and invoking `update` method of the chart
 
### Hover

The hover configuration is passed using the [Hover](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Hover.html) object into defaults one:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getHover();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| animationDuration | int | 400 | Duration in milliseconds it takes to animate hover style changes.
| axis | [InteractionAxis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.X | Define which directions are used in calculating distances.
| intersect | boolean | `true` | if `true`, the hover mode only applies when the mouse position intersects an item on the chart.
| mode | [InteractionMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html) | InteractionMode.NEAREST | Sets which elements appear in the tooltip.

### Animation

**Charba** (leveraging on [Chart.JS](http://www.chartjs.org/)) animates charts out of the box. A number of options are provided to configure how the animation looks and how long it takes

The animation configuration is passed using the [animation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Animation.html) object into defaults one:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getAnimation();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| animateRotate | boolean | `true` | If `true`, the chart will animate in with a rotation animation.  
| animateScale | boolean | `false` | If `true`, will animate scaling the chart from the center outwards.
| duration | int | 1000 | The number of milliseconds an animation takes.
| easing | [Easing](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Easing.html) | Easing.EASE_OUT_QUART | Easing function to use.

See [Robert Penner's easing equations](http://robertpenner.com/easing/).

To disable any kind of animation, set `duration` to 0.

### Tooltips

The tooltips configuration is passed using the [tooltips](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Tooltips.html) object into defaults one:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getTooltips();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.8) | Background color of the tooltips.
| bodyAlign | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.LEFT | Alignment of body element of the tooltips.
| bodyFontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#fff' | Body font color.
| bodyFontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Body line font.
| bodyFontSize | int | 12 | Body font size. 
| bodyFontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontSytle.NORMAL | Body font style 
| bodySpacing | int | 2 | Spacing to add to top and bottom of each tooltip item. 
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0)' | Color of the border.
| borderWidth | int | 0 | Size of the border. 
| caretPadding | int | 2 | Extra distance to move the end of the tooltip arrow away from the tooltip point. 
| caretSize | int | 5 | Size, in px, of the tooltip arrow.
| cornerRadius | int | 6 | Radius of tooltip corner curves. 
| displayColors | boolean | `true` | if `true`, color boxes are shown in the tooltip.
| enabled | boolean | `true` | Are on-canvas tooltips enabled.
| footerAlign | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.LEFT | Alignment of footer element of the tooltips. 
| footerFontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#fff' | Footer font color.
| footerFontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Footer font.
| footerFontSize | int | 12 | Footer font size.
| footerFontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.BOLD | Footer font style.
| footerMarginTop | int | 6 | Margin to add before drawing the footer.
| footerSpacing | int | 2 | Spacing to add to top and bottom of each footer line.
| intersect | boolean | `true` | if `true`, the tooltip mode applies only when the mouse position intersects with an element. If `false`, the mode will be applied at all times.
| mode | [InteractionMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html) | InteractionMode.NEAREST | Sets which elements appear in the tooltip.  
| multiKeyBackground | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#fff' | Color to draw behind the colored boxes when multiple items are in the tooltip.
| position | [TooltipPosition](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TooltipPosition.html) | TooltipPosition.AVERAGE | The mode for positioning the tooltip.
| titleAlign | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.LEFT | Alignment of title element of the tooltips.
| titleFontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#fff' | Title font color 
| titleFontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Title font 
| titleFontSize | int | 12 | Title font size 
| titleFontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.BOLD | Title font style
| titleMarginBottom | int | 6 | Margin to add on bottom of title section.
| titleSpacing | int | 2 | Spacing to add to top and bottom of each title line. 
| xPadding | int | 6 | Padding to add on left and right of tooltip.
| yPadding | int | 6 | Padding to add on top and bottom of tooltip.
| rtl | boolean | `false` | `true` for rendering the tooltips from right to left.
| textDirection | [TextDirection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextDirection.html) | TextDirection.LEFT_TO_RIGHT | This will force the text direction on the canvas for rendering the tooltips, regardless of the CSS specified on the canvas

### Title

The chart title defines text to draw at the top of the chart.

The title configuration is passed using the [Title](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Title.html) object into defaults one:

```java
Defaults.get().getGlobal().getTitle();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| display | boolean | `false` | is the title shown.
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#666' | Font color.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family for the title text.
| fontSize | int | 12 | Font size. 
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.BOLD | Font style.
| fullWidth | boolean | `true` |  Marks that this box should take the full width of the canvas (pushing down other boxes). 
| lineHeight | double - String | 1.2 | Height of an individual line of text. 
| padding | int | 10 | Number of pixels to add above and below the title text.
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Poistion.TOP | Position of title.

### Legend

The chart legend displays data about the datasets that area appearing on the chart.

The legend configuration is passed using the [Legend](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Legend.html) object into defaults one:

```java
Defaults.get().getGlobal().getLegend();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| display | boolean | `true` | is the legend shown.
| fullWidth | boolean | `true` | Marks that this box should take the full width of the canvas (pushing down other boxes).
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.TOP | Position of the legend.
| align | [LegendAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/LegendAlign.html) | LegendAlign.CENTER | Alignment of the legend.
| reverse | boolean | `false` | Legend will show datasets in reverse order.
| rtl | boolean | `false` | `true` for rendering the legends from right to left.
| textDirection | [TextDirection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextDirection.html) | TextDirection.LEFT_TO_RIGHT | This will force the text direction on the canvas for rendering the legend, regardless of the CSS specified on the canvas.


#### Legend Labels

The [Legend Labels](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/LegendLabels.html) configuration is nested below the legend configuration using 

```java
Defaults.get().getGlobal().getLegend().getLegendLabels();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| boxWidth | int | 40 | Width of colored box.
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#666' | Color of text.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family of legend text.
| fontSize | int | 12 | Font size of text. 
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style of text.
| padding | int | 10 | Padding between rows of colored boxes.
| usePointStyle | boolean | `false` | Label style will match corresponding point style (size is based on fontSize, boxWidth is not used in this case). 

### Elements

Options can be configured for four different types of elements: **[arc](#arc)**, **[lines](#line)**, **[points](#point)**, and **[rectangles](#rectangle)**.

The [elements](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Elements.html) configuration is nested into the global configuration as following: 

```java
Defaults.get().getGlobal().getElements();
```

#### Point

Point element is used to represent the points, like in a line or bubble charts.

The [point](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Point.html) configuration is nested into the elements configuration as following: 

```java
Defaults.get().getGlobal().getElements().getPoint();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Point fill color.
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Point stroke color.
| borderWidth | int | 1 | Point stroke width. 
| hitRadius | int | 1 | Extra radius added to point radius for hit detection. 
| hoverBorderWidth | int | 1 | Stroke width when hovered. 
| hoverRadius | int | 4 | Point radius when hovered. 
| pointStyle | [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html) - [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html) | PointStyle.CIRCLE | Point style.
| radius | int | 3 | Point radius.
| rotation | double | 0 | the point rotation (in degrees).

#### Line

Line element is used to represent the line, like in a line or radar charts.

The [line](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Line.html) configuration is nested into the elements configuration as following: 

```java
Defaults.get().getGlobal().getElements().getLine();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Line fill color.
| borderCapStyle | [CapStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html) | CapStyle.BUTT | Line cap style (see [MDN](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap)).
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Line stroke color. 
| borderDash | int[] | [] | Line dash (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)).
| borderDashOffset | int | 0 | Line dash offset (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)).
| borderJoinStyle | [JoinStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | JoinStyle.MITER | Line join style (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)).
| borderWidth | int | 3 | Line stroke width.
| capBezierPoints | boolean | `true` | `true` to keep Bezier control inside the chart, `false` for no restriction.
| fill |  String - int - boolean - [IsFill](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsFill.html) | Fill.FALSE | Fill location. See [Filling modes](Colors#filling-modes)
| stepped | boolean | `false` | `true` to show the line as a stepped line (`tension` will be ignored).
| tension | double | 0.4 | Bezier curve tension (`0` for no Bezier curves).

#### Arc

Arc element is used in the polar area, doughnut and pie charts.

The [src](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Arc.html) configuration is nested into elements configuration as following:

```java
Defaults..get().getGlobal().getElements().getArc();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| angle | double | `Double.NaN` | Arc angle to cover, for polar chart only.
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Arc fill color.
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#fff' | Arc stroke color.
| borderWidth | int | 2 | Arc stroke width.

#### Rectangle

Rectangle element is used to represent the bars in a bar chart.

The [rectangle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Rectangle.html) configuration is nested into the elements configuration as following:

```java
Defaults.get().getGlobal().getElements().getRectangle();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Bar fill color.
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Bar stroke color.
| borderSkipped | [BorderSkipped](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderSkipped.html) | BorderSkipped.BOTTOM | Skipped (excluded) border.
| borderWidth | int | 0 | Bar stroke width.

### Layout

Options can be configured for **[padding](#padding)** element.

The [layout](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Layout.html) configuration is nested into the global configuration using 

```java
Defaults.get().getGlobal().getLayout();
```

#### Padding

The padding to add inside the chart.

The [padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Padding.html) configuration is nested into the layout configuration as following: 

```java
Defaults.get().getGlobal().getLayout().getPadding();
// to set all padding elements to the same value
Defaults.get().getGlobal().getLayout().getPadding().set(10);
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| bottom | int | 0 | the padding bottom in pixel.
| left | int | 0 | the padding left in pixel.
| right | int | 0 | the padding right in pixel.
| top | int | 0 | the padding top in pixel.

## Scales

To change the global scale, **Charba** is providing the method `getScale` in the [defaults](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Defaults.html).

With this method you can get all global configuration of [Chart.JS](http://www.chartjs.org/) for [scale](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/GlobalScale.html) (common one, not related to chart type) and you have got all `set` and `get` methods to change or retrieve the global configuration items.

```java
Defaults.get().getScale().setStacked(true);
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| display | boolean | `true` | If `true`, shows the axis.
| id | String | `null` | The ID is used to link datasets and scale axes together. 
| offset | boolean | `false` | If `true`, extra space is added to the both edges and the axis is scaled to fit into the chart area. 
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.TOP |  Position of the axis in the chart. 
| stacked | boolean | `false` | if the axis are stacked.
| type | [AxisType](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/AxisType.html) | AxisType.LINEAR | Type of scale being employed. 
| weight | int | 0 | The weight used to sort the axis. Higher weights are further away from the chart area. 
| distribution | [ScaleDistribution](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ScaleDistribution.html) | ScaleDistribution.LINEAR | How data is plotted on time axis. 
| bounds | [ScaleBounds](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ScaleBounds.html) | ScaleBounds.DATA | Determines the scale bounds on time axis. 


### GridLines

The grid line configuration defines options for the grid lines that are run perpendicular to the axis.

The [grid lines](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/GridLines.html) configuration is nested into the scale configuration as following:

```java
Defaults.get().getScale().getGridLines();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| borderDash | int[] | [] | Length and spacing of dashes on grid lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| borderDashOffset | int | 0 | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| color | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | rgba(0, 0, 0, 0.1) | The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line and so on.
| display | boolean | `true` | If `false`, do not display grid lines for this axis.
| drawBorder | boolean | `true` | If `true`, draw border at the edge between the axis and the chart area.
| drawOnChartArea | boolean | `true` | If `true`, draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn. 
| drawTicks | boolean | `true` | If `true`, draw lines beside the ticks in the axis area beside the chart.
| lineWidth | int[] | int[]{1} | Stroke width of grid lines.
| offsetGridLines | boolean | `false` | If `true`, grid lines will be shifted to be between labels. This is set to `true` in the bar chart by default.
| tickMarkLength | int | 10 | Length in pixels that the grid lines will draw into the axis area. 
| zeroLineBorderDash | int[] | [] | Length and spacing of dashes of the grid line for the first index (index 0). See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| zeroLineBorderDashOffset | int | 0 | Offset for line dashes of the grid line for the first index (index 0). See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| zeroLineColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0, 0, 0, 0.25) | Stroke color of the grid line for the first index (index 0).
| zeroLineWidth | int | 1 | Stroke width of the grid line for the first index (index 0). 
| circular | boolean | `false` | If `true`, grid lines are circular (on radar chart only).
| z | int | 0 | z-index of gridline layer. Values less than or equals to 0 are drawn under datasets, greater than 0 on top.

### Ticks

The tick configuration defines options for the tick marks that are generated by the axis.

The [ticks](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Ticks.html) configuration is nested into the scale configuration as following: 

```java
Defaults.get().getScale().getTicks();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| autoSkip | boolean | `true` | If `true`, automatically calculates how many labels that can be shown and hides labels accordingly.
| autoSkipPadding | int | 0 | The padding between the ticks on the horizontal axis when autoSkip is enabled.
| backdropColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(255, 255, 255, 0.75) | Color of label backdrops. 
| backdropPaddingX | int | 2 | Horizontal padding of label backdrop.
| backdropPaddingY | int | 2 | Vertical padding of label backdrop. 
| beginAtZero | boolean | `false` | if `true`, scale will include 0 if it is not already included.
| display | boolean | `true` | If `true`, show tick marks 
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#666' | Font color for tick labels.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family for the tick labels, follows CSS font-family options.
| fontSize | int | 12 | Font size for the tick labels.
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style for the tick labels, follows CSS font-style options.
| labelOffset | int | 0 | The distance in pixels to offset the label from the center point of the tick
| max | double - java.util.Date  | `Double.MAX_VALUE` | User defined maximum number for the scale, overrides maximum value from data. You can also set the default Date as maximum value for time scale, with `null` as default.
| maxRotation | int | 50 | The maximum rotation for tick labels when rotating to condense labels.
| maxTicksLimit | int | 11 | Maximum number of ticks and gridlines to show.
| min | double - java.util.Date  | `Double.MIN_VALUE` | User defined minimum number for the scale, overrides minimum value from data. You can also set the default Date as minimum value for time scale, with `null` as default.
| minRotation | int | 0 | The minimum rotation for tick labels.
| mirror | boolean | `false` | The flips tick labels around axis, displaying the labels inside the chart instead of outside.
| padding | int | 0 | The padding between the tick label and the axis.
| reverse | boolean | `false` | Reverses order of tick labels.
| showLabelBackdrop | boolean | `true` | If `true`, draw a background behind the tick labels
| stepSize | double | `Double.MIN_VALUE` | User defined fixed step size for the scale.
| suggestedMax | double | `Double.MAX_VALUE` | Adjustment used when calculating the maximum data value.
| suggestedMin | double | `Double.MIN_VALUE` | Adjustment used when calculating the minimum data value.
| precision | int | 0 | If defined and `stepSize` is not specified, the step size will be rounded to this many decimal places.
| source | [TickSource](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TickSource.html) | TickSource.AUTO | How ticks are generated on axis time.
| lineHeight | double - String | 1.2 | Height of an individual line of text (see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)).
| z | int | 0 | z-index of tick layer. Useful when ticks are drawn on chart area. Values less than or equals to 0 are drawn under datasets, greater than 0 on top.

#### Minor Tick

The minor tick configuration defines options for the minor tick marks that are generated by the axis. Omitted options are inherited from `ticks` configuration.

The minor ticks configuration is nested into the ticks configuration as following: 

```java
Defaults.get().getScale().getTicks().getMinor();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#666' | Font color for tick labels.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family for the tick labels, follows CSS font-family options.
| fontSize | int | 12 | Font size for the tick labels.
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NROMAL | Font style for the tick labels, follows CSS font-style options
| lineHeight | double - String | 1.2 | Height of an individual line of text (see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))

#### Major Tick

The major tick configuration defines options for the major tick marks that are generated by the axis. Omitted options are inherited from `ticks` configuration.

The major ticks configuration is nested into the ticks configuration as following: 

```java
Defaults.get().getScale().getTicks().getMajor();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| enabled | boolean | false | If `true`, major tick options are used to show major ticks.
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#666' | Font color for tick labels.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family for the tick labels, follows CSS font-family options.
| fontSize | int | 12 | Font size for the tick labels.
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style for the tick labels, follows CSS font-style options
| lineHeight | double - String | 1.2 | Height of an individual line of text (see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))

### ScaleLabel

The scale label configuration defines options for the scale title. Note that this only applies to cartesian axes.

The [scale label](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/ScaleLabel.html) configuration is nested into the scale configuration as following: 

```java
Defaults.get().getScale().getScaleLabel();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| display | boolean | `false` | If `true`, display the axis title.
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#666' | Font color for scale title.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family for the scale title, follows CSS font-family options.
| fontSize | int | 12 | Font size for scale title.
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style for the scale title, follows CSS font-style options 
| labelString | String | '' | The text for the title.
| lineHeight | double - String | 1.2 | Height of an individual line of text (see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))

#### Padding

Padding to apply around scale labels. Only `top` and `bottom` are implemented.
The [padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/ScaleLabelPadding.html) configuration is nested into the scale configuration as following:

```java
Defaults.get().getScale().getScaleLabel().getPadding();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| bottom | int | 4 | the padding bottom in pixel.
| left | int | 4 | the padding left in pixel.
| right | int | 4 | the padding right in pixel.
| top | int | 4 | the padding top in pixel.   
   
### AngleLines

The angle lines options are used to configure angled lines that are radiated from the center of the chart to the point labels.

The [angle lines](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/AngleLines.html) configuration is nested into the scale configuration as following: 

```java
Defaults.get().getScale().getAngleLines();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0, 0, 0, 0.1)` | Color of angled lines. 
| display | boolean | `true` | if `true`, angle lines are shown.
| borderDash | int[] | [] | Length and spacing of dashes on grid lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| lineWidth | int | 1 | Width of angled lines.

### PointLabels

The point labels options are used to configure the point labels that are shown on the perimeter of the scale.

The [point labels](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/PointLabels.html) configuration is nested into the scale configuration as following 

```java
Defaults.get().getScale().getPointLabels();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| display | boolean | `true` | if `true`, point labels are shown.
| fontColor | String - String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) -[IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | '#666' | Font color for point labels.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family to use when rendering labels.
| fontSize | int | 10 | font size in pixels
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style to use when rendering point labels.
| lineHeight | double - String | 1.2 | Height of an individual line of text (see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))

### Time

The time options are used to configure the time axis and used to represent time series charts.

The [time](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Time.html) configuration is nested into the scale configuration as following: 

```java
Defaults.get().getScale().getTime();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| isoWeekday | boolean | `false` | If `true` and the unit is set to 'week', then the first day of the week will be Monday. Otherwise, it will be Sunday.
| max | java.util.Date | `null` | If defined, this will override the data maximum
| min | java.util.Date | `null` | If defined, this will override the data minimum
| parser | String | `null` | interpreted as a custom format to be used to parse the date.
| round | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | `null` | If defined, dates will be rounded to the start of this unit.
| tooltipFormat | String | `null` | Format string to use for the tooltip.
| unit | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | `null` | If defined, will force the unit to be a certain type.
| stepSize | int | 1 | The number of units between grid lines.
| minUnit | [TimeUnit](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TimeUnit.html) | TimeUnit.MILLISECOND | The minimum display format to be used for a time unit.

For more details, have a look how to configure a [cartesian time axis](CartesianTimeAxes).

### Adapters

The adapters options are used to configure the adapter for external date library if that adapter needs or supports options.

The [adapters options](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Adapters.html) configuration is nested into the scale configuration as following: 

```java
Defaults.get().getScale().getAdapters();
```

:::note PAY ATTENTION
Only [Luxon](DateAdapters#Luxon) date adapters can be configured with additional options.
For more details, have a look how to configure a [Luxon](DateAdapters#Luxon) date adapters.
:::

## Charts

To change the global options for a specific chart type, **Charba** is providing the method `getOptions` in the [Defaults](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Defaults.html) class.

With this method you can get all global configurations for a specific chart of [Chart.JS](http://www.chartjs.org/) and you have got all `set` and `get` methods to change or retrieve the global configuration items.

The chart type are defined into a enumeration, [ChartType](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/ChartType.html) but, by controllers, you can create your chart type, therefore the method will accept a [Type](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Type.html) object.

```java
// --------------------------------------
// GLOBAL options for specific chart type
// --------------------------------------
Defaults.get().getOptions(ChartType.LINE).setResponsive(false);
Defaults.get().getOptions(ChartType.LINE).setMaintainAspectRatio(true);

double circumference = Defaults.get().getOptions(ChartType.LINE).getCircumference();

Defaults.get().getOptions(ChartType.LINE).getElements().getPoint().setPointStyle(PointStyle.RECT);
```

## Scale type

To change the global scale for a specific scale type, **Charba** is providing the method `getScale` in the [Defaults](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Defaults.html) class, passing the [type](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/AxisType.html) of the scale.

With this method you can get all global configurations for a specific type of scale and you have got all `set` and `get` methods to change or retrieve the global configuration items.

```java
// --------------------------------------
// GLOBAL options for specific scale type
// --------------------------------------
Defaults.get().getScale(AxisType.LINEAR).setDisaply(false);
Defaults.get().getScale(AxisType.LINEAR).setBeginAtZero(true);
```

## Methods

The default singleton instance provides a set of helpful methods to invoke default behavior of [Chart.JS](http://www.chartjs.org/), helpful methods when a callback is implemented and you want to perform a normal behavior.


```java
public class MyLegendClickEventHandler implements LegendClickEventHandler {

	@Override
	public void onClick(LegendClickEvent event) {
		// invokes default click callback
		Defaults.get().invokeLegendOnClick(event);
	}
```

| Name | Description
| :- | :- 
| **generateLegend** | This method will provide the default HTML representation of a legend.
| **generateLabels** | This method will provide the default legend items of a chart.
| **invokeChartOnClick** | This method invokes the default `onClick` implementation on a chart, if there is.
| **invokeChartOnHover** | This method invokes the default `onHover` implementation on a chart, if there is.
| **invokeLegendOnClick** | This method invokes the default `onClick` implementation on a legend of a chart, if there is.
| **invokeLegendOnHover** | This method invokes the default `onHover` implementation on a legend of a chart, if there is.
| **invokeLegendOnLeave** | This method invokes the default `onLeave` implementation on a legend of a chart, if there is.
