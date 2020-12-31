---
id: DefaultsCharts
title: Defaults charts options
hide_title: true
sidebar_label: Charts
---

## Commons charts options

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
| ---- | ---- | ------- | -----------
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) - <span style={{backgroundColor: 'rgba(0,0,0,0.1)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The default background color to use in the chart.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) - <span style={{backgroundColor: 'rgba(0,0,0,0.1)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The default border color to use in the chart.
| circumference | double | 360 | The sweep to allow arcs to cover.
| cutoutPercentage | double | 0 | The percentage of the chart that is cut out of the middle.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #666 - <span style={{backgroundColor: '#666', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The default font color to use in the chart.
| devicePixelRatio | double | [Window.getDevicePixelRatio()](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/Window.html#getDevicePixelRatio--) | Default device pixel ratio. By default the chart's canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio.
| drawOnAttach | boolean | `true` | `true` if the chart is configured to be draw on the attach of element
| destroyOnDetach | boolean | `true` | `true` if the chart is configured to be destroyed on the detach from element.
| events | [Event](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Event.html)[] | Event.MOUSEMOVE,<br/> Event.MOUSEOUT,<br/> Event.CLICK,<br/> Event.TOUCHSTART,<br/> Event.TOUCHMOVE | The events option defines the browser events that the chart should listen to for tooltips and hovering.
| indexAxis | [IndexAxis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IndexAxis.html) | IndexAxis.X | The base axis for the BAR dataset. Use 'y' for horizontal bar.
| maintainAspectRatio | boolean | `true` | Maintain the original canvas aspect ratio (width / height) when resizing.
| aspectRatio | double | 2 | Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas).
| responsive | boolean |  `true` | Resizes the chart canvas when its container does.
| responsiveAnimationDuration | int | 0 | Duration in milliseconds it takes to animate to new size after a resize event.
| rotation | double | 0 | The starting angle to draw arcs from.
| showLine | boolean | `true` | If `false`, the lines between points are not drawn.
| skipNull | boolean | `true` | If `true`, null or undefined values will not be drawn
| spanGaps | boolean - double | `false` | If `true`, lines will be drawn between points with no or null data. If `false`, points with `NaN` data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.
| startAngle | double | 0 | Starting angle to draw arcs for the first item in a dataset. In degrees, 0 is at top.

The `options` element is the root node of several other elements you can set to configure the charts as you need.

## Font

There are special global settings that can change all of the fonts on the chart. These options are in `getGlobal().getFont()`. The global font settings only apply when more specific options are not included in the configuration.

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getFont().setSize(16);

int size = Defaults.get().getGlobal().getFont().getSize();
```

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| family | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family for all text.
| size | int | 12 | Font size (in px) for text.
| style | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style
| weight | [Weight](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Weight.html) | Weight.NORMAL | Default font weight (boldness).<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight).
| lineHeight | double - String | 1.2 | Height of an individual line of text. <br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height).
 
## Hover

The hover configuration is passed using the [Hover](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Hover.html) object into defaults one:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getHover();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| axis | [InteractionAxis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.X | Define which directions are used in calculating distances.
| intersect | boolean | `true` | if `true`, the hover mode only applies when the mouse position intersects an item on the chart.
| mode | [InteractionMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html) | InteractionMode.NEAREST | Sets which elements appear in the tooltip.

## Animation

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

## Tooltips

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
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.8) - <span style={{backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Background color of the tooltips.
| bodyColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Color of body text.
| bodyFont | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | See description | Font of body text. The default value is the global font with the style set to FontStyle.NORMAL.<br/>See [Font](DefaultsCharts#font).
| bodyAlign | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.LEFT | Alignment of body element of the tooltips.
| bodySpacing | int | 2 | Spacing to add to top and bottom of each tooltip item. 
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0) - <span style={{backgroundColor: 'rgba(0,0,0,0)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Color of the border.
| borderWidth | int | 0 | Size of the border. 
| boxWidth | int | `getBodyFont().getSize()` | Width of the color box if `displayColors` is true.
| boxHeight | int | `getBodyFont().getSize()` | Height of the color box if `displayColors` is true.
| caretPadding | int | 2 | Extra distance to move the end of the tooltip arrow away from the tooltip point. 
| caretSize | int | 5 | Size, in px, of the tooltip arrow.
| cornerRadius | int | 6 | Radius of tooltip corner curves. 
| displayColors | boolean | `true` | if `true`, color boxes are shown in the tooltip.
| enabled | boolean | `true` | if `true`, the tooltips are enabled.
| footerColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Color of the footer.
| footerFont | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | See description | Font of footer text. The default value is the global font with the style set to FontStyle.BOLD.<br/>See [Font](DefaultsCharts#font).
| footerAlign | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.LEFT | Alignment of footer element of the tooltips. 
| footerMarginTop | int | 6 | Margin to add before drawing the footer.
| footerSpacing | int | 2 | Spacing to add to top and bottom of each footer line.
| intersect | boolean | `true` | if `true`, the tooltip mode applies only when the mouse position intersects with an element. If `false`, the mode will be applied at all times.
| mode | [InteractionMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html) | InteractionMode.NEAREST | Sets which elements appear in the tooltip.  
| multiKeyBackground | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Color to draw behind the colored boxes when multiple items are in the tooltip.
| position | [TooltipPosition](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TooltipPosition.html) | TooltipPosition.AVERAGE | The mode for positioning the tooltip.
| rtl | boolean | `false` | `true` for rendering the tooltips from right to left.
| textDirection | [TextDirection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextDirection.html) | TextDirection.LEFT_TO_RIGHT | This will force the text direction on the canvas for rendering the tooltips, regardless of the CSS specified on the canvas
| titleColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Color of the footer.
| titleFont | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | See description | Font of title text. The default value is the global font with the style set to FontStyle.BOLD.<br/>See [Font](DefaultsCharts#font).
| titleAlign | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.LEFT | Alignment of title element of the tooltips.
| titleMarginBottom | int | 6 | Margin to add on bottom of title section.
| titleSpacing | int | 2 | Spacing to add to top and bottom of each title line. 
| xPadding | int | 6 | Padding to add on left and right of tooltip.
| yPadding | int | 6 | Padding to add on top and bottom of tooltip.
| usePointStyle | boolean | `false` | Use the corresponding point style (from dataset options) instead of color boxes (size is based on the minimum value between box width and box height).

## Title

The chart title defines text to draw at the top of the chart.

The title configuration is passed using the [Title](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Title.html) object into defaults one:

```java
Defaults.get().getGlobal().getTitle();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| align | [ElementAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ElementAlign.html) | ElementAlign.CENTER | Alignment of the title.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | Color of text of the title .
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | See description | Font of title text. The default value is the global font with the style set to FontStyle.BOLD.<br/>See [Font](DefaultsCharts#font).
| display | boolean | `false` | if `true`, the title is shown.
| fullWidth | boolean | `true` |  Marks that this box should take the full width of the canvas (pushing down other boxes). 
| padding | int | 10 | Number of pixels to add above and below the title text.
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Poistion.TOP | Position of title.

## Legend

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

### Legend Labels

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

## Elements

Options can be configured for four different types of elements: **[arc](#arc)**, **[lines](#line)**, **[points](#point)**, and **[rectangles](#rectangle)**.

The [elements](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Elements.html) configuration is nested into the global configuration as following: 

```java
Defaults.get().getGlobal().getElements();
```

### Point

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

### Line

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

### Arc

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

### Rectangle

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
| borderSkipped | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.BOTTOM | Skipped (excluded) border.
| borderWidth | int | 0 | Bar stroke width.

## Layout

Options can be configured for **[padding](#padding)** element.

The [layout](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Layout.html) configuration is nested into the global configuration using 

```java
Defaults.get().getGlobal().getLayout();
```

### Padding

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
