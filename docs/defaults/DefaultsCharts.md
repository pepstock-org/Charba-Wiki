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
CLocale locale = Defaults.get().getGlobal().getLocale();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| aspectRatio | double | 2 | Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas).
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) - <span style={{backgroundColor: 'rgba(0,0,0,0.1)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The default background color to use in the chart.
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) - <span style={{backgroundColor: 'rgba(0,0,0,0.1)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The default border color to use in the chart.
| circumference | double | 360 | The sweep to allow arcs to cover.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #666 - <span style={{backgroundColor: '#666', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The default font color to use in the chart.
| cutoutPercentage | String | `null` | The percentage of the chart that is cut out of the middle. It's a string, ending with '%', as percentage of the chart radius.<br/>See pie and doughnut chart configuration for defaults.
| cutout | double | `Undefined.DOUBLE` | The portion of the chart that is cut out of the middle, in pixels.<br/>See pie and doughnut chart configuration for defaults.
| destroyOnDetach | boolean | `true` | `true` if the chart is configured to be destroyed on the detach from element.
| devicePixelRatio | double | [Window.getDevicePixelRatio()](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/utils/Window.html#getDevicePixelRatio--) | Default device pixel ratio. By default the chart's canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio.
| drawOnAttach | boolean | `true` | `true` if the chart is configured to be draw on the attach of element
| events | [Event](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Event.html)[] | Event.MOUSEMOVE,<br/> Event.MOUSEOUT,<br/> Event.CLICK,<br/> Event.TOUCHSTART,<br/> Event.TOUCHMOVE | The events option defines the browser events that the chart should listen to.
| indexAxis | [IndexAxis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IndexAxis.html) | IndexAxis.X | The base axis for the BAR dataset. Use 'y' for horizontal bar.
| locale | [CLocale](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/intl/CLocale.html) | `CLocale.getDefaults()` | A string with a BCP 47 language tag.<br/>See [INTL locale](../intl/Locale#locale).
| maintainAspectRatio | boolean | `true` | Maintain the original canvas aspect ratio (width / height) when resizing.
| radiusPercentage | String | `100%` | the outer radius of the chart. It's a string, ending with '%', as percentage of the maximum radius.
| radius | double | `Undefined.DOUBLE` | The outer radius of the chart, in pixels.
| resizeDelay | int | 0 | Delay the resize update by give amount of milliseconds. This can ease the resize process by debouncing update of the elements.
| responsive | boolean |  `true` | Resizes the chart canvas when its container does.
| responsiveAnimationDuration | int | 0 | Duration in milliseconds it takes to animate to new size after a resize event.
| rotation | double | 0 | The starting angle to draw arcs from.
| showLine | boolean | `true` | If `false`, the lines between points are not drawn.
| skipNull | boolean | `true` | If `true`, null or undefined values will not be drawn
| spanGaps | boolean - double | `false` | If `true`, lines will be drawn between points with no or null data. If `false`, points with `NaN` data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.

The `options` element is the root node of several other elements you can set to configure the charts as you need.

## Font

There are special global settings that can change all fonts on all charts. The global font settings only apply when more specific options are not included in the configuration.

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getFont().setSize(16);

int size = Defaults.get().getGlobal().getFont().getSize();
```

| Name | Type | Default | Description
| :- | :- | :- | :-
| family | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family for all text.
| size | int | 12 | Font size (in px) for text.
| style | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style for text.
| weight | [Weight](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Weight.html) | Weight.NORMAL | Font weight (boldness) for text.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight).
| lineHeight | double - String | 1.2 | Height of an individual line of text.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height).

## Interaction

The interaction options are managing the ways how to act on the charts.

The interaction configuration is passed using the [Hover](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Interaction.html) object in the defaults one:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getInteraction().setIntersect(true);

boolean intersect = Defaults.get().getGlobal().getInteraction().isIntersect();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| axis | [InteractionAxis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.X | Define which directions are used in calculating distances.
| intersect | boolean | `true` | if `true`, the hover mode only applies when the mouse position intersects an item on the chart.
| mode | [InteractionMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html) | InteractionMode.NEAREST | Sets which elements appear in the tooltip.
 
## Hover

The hover options are managing the ways how the datasets of the chart can change when hovered.

The hover configuration is passed using the [Hover](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Hover.html) object in the defaults one:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getHover().setIntersect(true);

boolean intersect = Defaults.get().getGlobal().getHover().isIntersect();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| axis | [InteractionAxis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionAxis.html) | InteractionAxis.X | Define which directions are used in calculating distances.
| intersect | boolean | `true` | if `true`, the hover mode only applies when the mouse position intersects an item on the chart.
| mode | [InteractionMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html) | InteractionMode.NEAREST | Sets which elements appear in the tooltip.

## Animation

Animation is used to configure the base options to animate the chart.

The hover configuration is passed using the [Animation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Animation.html) object in the defaults one:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getAnimation().setDuration(2000);

int duration = Defaults.get().getGlobal().getAnimation().getDuration();
```

The following animation options are available. 

| Name | Type | Defaults | Description
| :- | :- | :- | :-
| animateRotate | boolean | `true` | If `true`, the chart will animate in with a rotation animation.  
| animateScale | boolean | `false` | If `true`, will animate scaling the chart from the center outwards.
| delay | int | Undefined.INTEGER | Delay in milliseconds before starting the animations.
| duration | int | 1000 | The number of milliseconds an animation takes.
| easing | [Easing](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Easing.html) | Easing.EASE_OUT_QUART | Easing function to use.<br/>See [Robert Penner's easing equations](http://robertpenner.com/easing/) for more details.
| loop | boolean | `false` | If set to `true`, the animations loop endlessly.

## Animations

[Animations](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Animations.html) options configures which element properties are animated and how.

The animations element is a container of configurations, [AnimationCollection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/AnimationCollection.html), which can be stored and retrieved by a key, [IsAnimationCollectionKey](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/IsAnimationCollectionKey.html).

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
IsAnimationCollectionKey key = IsAnimationCollectionKey.create("myKey", AnimationType.NUMBER);
// creates and gets an animation configuration item by my key
AnimationCollection configuration = Defaults.get().getGlobal().getAnimations().create(key);
// sets and gets duration option to the animation configuration
configuration.setDuration(2000);

int duration = configuration.getDuration();
```

The following options are available in [AnimationCollection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/AnimationCollection.html). 

| Name | Type | Defaults | Description
| :- | :- | :- | :-
| delay | int | Undefined.INTEGER | Delay in milliseconds before starting the animations.
| duration | int | 1000 | The number of milliseconds an animation takes.
| easing | [Easing](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Easing.html) | Easing.EASE_OUT_QUART | Easing function to use.<br/>See [Robert Penner's easing equations](http://robertpenner.com/easing/) for more details.
| loop | boolean | `false` | If set to `true`, the animations loop endlessly.
| properties | [IsAnimationPropertyKey](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/IsAnimationPropertyKey.html)[] | [] | The properties of elements to use to animate.
| type | [AnimationType](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/AnimationType.html) | AnimationType.NUMBER | Type of property, determines the interpolator used.
| from  | boolean - double - String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Undefined.BOOLEAN<br/>Undefined.DOUBLE<br/>`null` | Start value for the animation.
| to  | boolean - double - String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Undefined.BOOLEAN<br/>Undefined.DOUBLE<br/>`null` | End value for the animation.

## Transitions

The [transitions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Transitions.html) are a set of animation configuration related to a specific update mode.

Every [transition animation configuration](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/AnimationTransition.html) contains an instance of [Animation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Animation.html) and one of [Animations](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Animations.html) to configure the animation for a specific mode.

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
// creates a custom mode
IsTransitionKey mode = IsTransitionKey.create("myMode");
// creates an animation transitions configuration for my mode
AnimationTransition mode = Defaults.get().getGlobal().getTransitions().create(mode);

// gets animation and animations elements
Animation animation = mode.getAnimation();

Animations animations = mode.getAnimations();
```

## Legend

The chart legend displays data about the datasets that area appearing on the chart.

The legend configuration is passed using the [Legend](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Legend.html) object in the defaults one:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getLegend().setReverse(true);

boolean reverse = Defaults.get().getGlobal().getLegend().isReverse();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| align | [LegendAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/LegendAlign.html) | LegendAlign.CENTER | Alignment of the legend.
| display | boolean | `true` | If `true`, the legend is shown.
| fullSize | boolean | `true` | Marks that this box should take the full width/height of the canvas (moving other boxes).
| maxHeight | int | Undefined.INTEGER | Maximum height of the legend, in pixels.
| maxWidth | int | Undefined.INTEGER | Maximum width of the legend, in pixels.
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.TOP | Position of the legend.
| reverse | boolean | `false` | Legend will show datasets in reverse order.
| rtl | boolean | `false` | `true` for rendering the legends from right to left.
| textDirection | [TextDirection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextDirection.html) | TextDirection.LEFT_TO_RIGHT | This will force the text direction on the canvas for rendering the legend, regardless of the CSS specified on the canvas.

### Legend labels

The [Legend Labels](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/LegendLabels.html) configuration is nested below the legend configuration using 

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getLegend().getLegendLabels().setPadding(6);

int padding = Defaults.get().getGlobal().getLegend().getLegendLabels().getPadding();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| boxHeight | int | `getFont().getSize()` | Height of the colored box.
| boxWidth | int | 40 | Width of colored box.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | Color of label.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | Font of label.<br/>See [Font](DefaultsCharts#font).
| padding | int | 10 | Padding between rows of colored boxes.
| pointStyle | [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html) - [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html) | PointStyle.CIRCLE | This style of point is used for the legend. Only used if `usePointStyle` is true.
| textAlign | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.CENTER | Horizontal alignment of the label text. 
| usePointStyle | boolean | `false` | Label style will match corresponding point style (size is based on fontSize, boxWidth is not used in this case). 

### Legend title

The [legend title](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/LegendTitle.html) configuration is nested below the legend configuration using 

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getLegend().getTitle().getPadding().set(6);

Padding padding = Defaults.get().getGlobal().getLegend().getTitle().getPadding();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | Color of text of title.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| display | boolean | `false` | If `true`, the legend title is shown.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | Font of text of title.<br/>See [Font](DefaultsCharts#font).
| padding | [Padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Padding.html) | 0 to all dimensions | Padding around the title.<br/>See [padding documentation](../configuration/Commons#padding) for more details.

## Tooltips

The tooltips configuration is passed using the [tooltips](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Tooltips.html) object in the defaults one:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getTooltips().setCornerRadius(8);

int cornerRadius = Defaults.get().getGlobal().getTooltips().getCornerRadius();
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
| displayColors | boolean | `true` | If `true`, color boxes are shown in the tooltip.
| enabled | boolean | `true` | If `true`, the tooltips are enabled.
| footerColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Color of the footer.
| footerFont | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | See description | Font of footer text. The default value is the global font with the style set to Weight.BOLD.<br/>See [Font](DefaultsCharts#font).
| footerAlign | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.LEFT | Alignment of footer element of the tooltips. 
| footerMarginTop | int | 6 | Margin to add before drawing the footer.
| footerSpacing | int | 2 | Spacing to add to top and bottom of each footer line.
| intersect | boolean | `Defaults.get().getGlobal()`<br/>`.getInteraction().isIntersect()` | if `true`, the tooltip mode applies only when the mouse position intersects with an element. If `false`, the mode will be applied at all times.
| mode | [InteractionMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html) | `Defaults.get().getGlobal()`<br/>`.getInteraction().getMode()` | Sets which elements appear in the tooltip.  
| multiKeyBackground | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Color to draw behind the colored boxes when multiple items are in the tooltip.
| padding | [Padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Padding.html) | 6 to all dimensions | The padding to add inside the tooltip.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| position | [TooltipPosition](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TooltipPosition.html) | TooltipPosition.AVERAGE | The mode for positioning the tooltip.
| rtl | boolean | `false` | `true` for rendering the tooltips from right to left.
| textDirection | [TextDirection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextDirection.html) | TextDirection.LEFT_TO_RIGHT | This will force the text direction on the canvas for rendering the tooltips, regardless of the CSS specified on the canvas
| titleColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Color of the footer.
| titleFont | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | See description | Font of title text. The default value is the global font with the style set to Weight.BOLD.<br/>See [Font](DefaultsCharts#font).
| titleAlign | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextAlign.html) | TextAlign.LEFT | Alignment of title element of the tooltips.
| titleMarginBottom | int | 6 | Margin to add on bottom of title section.
| titleSpacing | int | 2 | Spacing to add to top and bottom of each title line. 
| usePointStyle | boolean | `false` | Use the corresponding point style (from dataset options) instead of color boxes (size is based on the minimum value between box width and box height).

## Title

The chart title defines text to draw at the top of the chart.

The title configuration is passed using the [Title](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Title.html) object in the defaults one:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getTitle().setPadding(12);

int padding = Defaults.get().getGlobal().getTitle().getPadding();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| align | [ElementAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ElementAlign.html) | ElementAlign.CENTER | Alignment of the title.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | Color of text of the title.<br/>See [default colors](DefaultsCharts#commons-charts-options). 
| display | boolean | `false` | If `true`, the title is shown.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | See description | Font of title text. The default value is the global font with the style set to Weight.BOLD.<br/>See [Font](DefaultsCharts#font).
| fullSize | boolean | `true` | Marks that this box should take the full width/height of the canvas (moving other boxes).
| padding | [Padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Padding.html) | 10 to all dimensions | Number of pixels to add above and below the title text.<br/>See [padding documentation](../configuration/Commons#padding) for more details.
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.TOP | Position of title.

## Elements

Options can be configured for four different types of elements: **[arc](#arc)**, **[lines](#line)**, **[points](#point)**, and **[bar](#bar)**.

The [elements](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Elements.html) configuration is nested in the global configuration as following: 

```java
Defaults.get().getGlobal().getElements();
```

### Point

Point element is used to represent the points, like in a line or bubble charts.

The [point](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Point.html) configuration is nested in the elements configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getElements().getPoint().setRadius(6);

int radius = Defaults.get().getGlobal().getElements().getPoint().getRadius();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBackgroundColorAsString()` | Point fill color.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | Point stroke color.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| borderWidth | int | 1 | Point stroke width. 
| hitRadius | int | 1 | Extra radius added to point radius for hit detection. 
| hoverBackgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | See `backgroundColor` | Point fill color when hovered.
| hoverBorderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | See `borderColor` | Point stroke color when hovered.
| hoverBorderWidth | int | See `borderWidth` | Stroke width when hovered. 
| hoverRadius | int | 4 | Point radius when hovered. 
| pointStyle | [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html) - [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html) | PointStyle.CIRCLE | Point style.
| radius | int | 3 | Point radius.
| rotation | double | 0 | The point rotation (in degrees).

### Line

Line element is used to represent the line, like in a line or radar charts.

The [line](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Line.html) configuration is nested in the elements configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getElements().getLine().setTesion(0.4D);

double tension = Defaults.get().getGlobal().getElements().getLine().getTesion();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBackgroundColorAsString()` | Line fill color.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| borderCapStyle | [CapStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html) | CapStyle.BUTT | Determines the shape used to draw the end points of lines.<br/>See [MDN](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap).
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | Line stroke color.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| borderDash | int[] | [] | The line dash pattern used when stroking lines. It uses an array of values that specify alternating lengths of lines and gaps which describe the pattern.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | double | 0D | Line dash offset.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderJoinStyle | [JoinStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | JoinStyle.MITER | the shape used to join two line segments where they meet.<br/>See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
| borderWidth | int | 3 | Line stroke width.
| capBezierPoints | boolean | `true` | Set true` to keep Bezier control inside the chart, `false` for no restriction.
| cubicInterpolationMode | [CubicInterpolationMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CubicInterpolationMode.html) | CubicInterpolationMode.DEFAULT |  Interpolation mode to apply.
| fill |  String - int - boolean - [IsFill](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsFill.html) | Fill.FALSE | How to fill the area under the line.<br/>See [Filling modes](../coloring/Colors#filling-modes)
| hoverBackgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | See `backgroundColor` | Line fill color when hovered.
| hoverBorderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | See `borderColor` | Line stroke color when hovered.
| hoverBorderWidth | int | See `borderWidth` | Stroke width when hovered. 
| stepped | boolean | `false` | Set `true` to show the line as a stepped line (`tension` will be ignored).
| tension | double | 0 | Bezier curve tension (`0` for no Bezier curves).

### Arc

Arc element is used in the polar area, doughnut and pie charts.

The [Arc](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Arc.html) configuration is nested in the elements configuration as following:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getElements().getArc().setBorderWidth(4);

int borderWidth = Defaults.get().getGlobal().getElements().getArc().getBorderWidth();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| angle | double | `Double.NaN` | Arc angle to cover, for polar chart only.
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBackgroundColorAsString()` | Arc fill color.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| borderAlign | [BorderAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderAlign.html) | BorderAlign.CENTER | Arc stroke alignment.
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Arc stroke color.
| borderRadius | int | 0 | The arc border radius (in pixels).
| borderWidth | int | 2 | Arc stroke width.
| hoverBackgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | See `backgroundColor` | Arc fill color when hovered.
| hoverBorderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | See `borderColor` | Arc stroke color when hovered.
| hoverBorderWidth | int | See `borderWidth` | Stroke width when hovered. 
| hoverOffset | int | See `offset` | The offset of the arc (in pixels) when hovered.
| offset | int | 0 | The offset of the arc (in pixels).

### Bar

Bar element is used to represent the bars in a bar chart.

The [bar](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Bar.html) configuration is nested in the elements configuration as following:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getElements().getBar().setBorderWidth(4);

int borderWidth = Defaults.get().getGlobal().getElements().getBar().getBorderWidth();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBackgroundColorAsString()` | Bar fill color.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()`) | Bar stroke color.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| borderRadius | int | 0 | The bar border radius (in pixels).
| borderSkipped | [BorderSkipped](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderSkipped.html) | BorderSkipped.START | The edge to skip when drawing bar.
| borderWidth | int | 0 | The bar border width (in pixels).
| hoverBackgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | See `backgroundColor` | Bar fill color when hovered.
| hoverBorderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | See `borderColor` | Bar stroke color when hovered.
| hoverBorderWidth | int | See `borderWidth` | Stroke width when hovered. 
| hoverBorderRadius | int | See `borderRadius` | The bar border radius (in pixels) when hovered.
| pointStyle | [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html) - [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html) | PointStyle.CIRCLE | Point style for legend.

## Datasets

The datasets options are managing the set options which will affect the datasets management.

The [datasets](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Datasets.html) configuration is nested in the global configuration using:

```java
// --------------------------------------
// GLOBAL, for all charts of the same type
// --------------------------------------
Defaults.get().getOptions(ChartType.LINE).getDatasets().get(ChartType.LINE).setShowLine(true);

boolean globalShowLine = Defaults.get().getOptions(ChartType.LINE).getDatasets().get(ChartType.LINE).isShowLine();
```

The datasets configuration is passed using the [Datasets](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Datasets.html) object in the chart options and mapped to [TypedDataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/TypedDataset.html).

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| animation | [Animation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Animation.html) | - | See [animation options](#animation) section for more details.
| animations | [Animations](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Animations.html) | - | See [animation options](#animations) section for more details.
| barPercentage | double | 0.9 | Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.
| categoryPercentage | double | 0.8 | Percent (0-1) of the available width each category should be within the sample width.
| barThickness | int | 0 | Manually set width of each bar in pixels.<br/>If set to [DefaultDatasets.FLEX_BAR_THICKNESS](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/defaults/globals/DefaultDatasets.html#FLEX_BAR_THICKNESS), it computes "optimal" sample widths that globally arrange bars side by side.<br/>If not set (default), bars are equally sized based on the smallest interval.
| grouped | boolean | `true` | Should the bars be grouped on index axis.<br/>When `true`, all the datasets at same index value will be placed next to each other centering on that index value.<br/>When `false`, each bar is placed on its actual index-axis value.
| maxBarThickness | int | 0 | Set this to ensure that bars are not sized thicker than this.
| minBarLength | int | 0 | Set this to ensure that bars have a minimum length in pixels.
| showLine | boolean | `true` | If `true`, the line is drawn for dataset.
| transitions | [Transitions](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Transitions.html) | - | See [animation options](#transitions) section for more details.

## Layout

Options can be configured for the the padding to add inside the chart.

The [layout](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Layout.html) configuration is nested in the global configuration using:

```java
// gets layout instance
Layout layout = Defaults.get().getGlobal().getLayout();
```

The [padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Padding.html) configuration is nested in the layout configuration as following: 

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getLayout().getPadding().setTop(10);
// to set same padding value to all sides of the chart
Defaults.get().getGlobal().getLayout().getPadding().set(10);

int paddingTop = Defaults.get().getGlobal().getLayout().getPadding().getTop();
```

See [padding documentation](../configuration/Commons#padding) for more details.

## Decimation

The decimation element can be used with line charts to automatically decimate data at the start of the chart life cycle. 

Before enabling it, review the [requirements](#requirements) to ensure that it will work with the chart you want to create.

The [decimation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Decimation.html) configuration is nested in the global configuration as following:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getDecimation().setSamples(1000);

double samples = Defaults.get().getGlobal().getDecimation().getSamples();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| enabled | boolean | `false` | If `true`, the data decimation is enabled.
| algorithm | [DecimationAlgorithm](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DecimationAlgorithm.html) | DecimationAlgorithm.MIN_MAX | Decimation algorithm to use.
| samples | double | Undefined.DOUBLE | If the `DecimationAlgorithm.LTTB` is used, this is the number of samples in the output dataset. Defaults to the canvas width to pick 1 sample per pixel.

### Algorithms

The available decimation algorithms to use for data are the following:

* `DecimationAlgorithm.MIN_MAX`: it will preserve peaks in your data but could require up to 4 points for each pixel. This type of decimation would work well for a very noisy signal where you need to see data peaks.
* `DecimationAlgorithm.LTTB` (Largest Triangle Three Bucket): it reduces the number of data points significantly. This is most useful for showing trends in data using only a few data points.

### Requirements

To use the decimation, the following requirements must be met:

1. The dataset must have an [IndexAxis](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IndexAxis.html) of `IndexAxis.X`.
2. The dataset must be a [line](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/LineDataset.html).
3. The X axis for the dataset must be either a [linear](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianLinearAxis.html) or [time](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/CartesianTimeAxis.html) axis.

## Filler

Filler element configures the engine which is in charge to manage the filling of the datasets, by the property `fill`. See [here](../coloring/Colors#filling) how filling a dataset.

The [filler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Filler.html) configuration is nested in the global configuration as following:

```java
// --------------------------------------
// GLOBAL, for all charts (whatever type)
// --------------------------------------
Defaults.get().getGlobal().getFiller().setPropagate(false);

boolean propagate = Defaults.get().getGlobal().getFiller().isPropagate();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| propagate | boolean | `true` | If `true`, the fill area will be recursively extended to the visible target defined by the fill value of hidden data set targets.
| drawTime | [DrawTime](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DrawTime.html) | DrawTime.BEFORE_DATASET_DRAW | Filler draw time. 
