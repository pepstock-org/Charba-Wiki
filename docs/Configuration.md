---
id: Configuration
title: Common components
hide_title: true
sidebar_label: Components
---
## Common components

The configuration is used to change how the chart behaves. There are properties to control styling, fonts, the legend, etc.

## Animation

[Chart.JS](http://www.chartjs.org/) animates charts out of the box and **Charba** does not change this behavior. A number of options are provided to configure how the animation looks and how long it takes

The animation configuration is passed to a chart as following:

```java
// example
chart.getOptions().getAnimation().setDuration(1000);
chart.getOptions().getAnimation().setEasing(Easing.EASE_OUT_QUART);
```

The following animation options are available. 

| Name | Type | Default | Description
| :- | :- | :- | :-
| animateRotate | boolean | `true` | If `true`, the chart will animate in with a rotation animation.  
| animateScale | boolean | `false` | If `true`, will animate scaling the chart from the center outwards.
| duration | int | 1000 | The number of milliseconds an animation takes.
| easing | [Easing](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Easing.html) | Easing.EASE_OUT_QUART | Easing function to use.

To disable any kind of animation, set `duration` to 0.

### Events

A chart can emits events during the animation phases, when it's the animation is progressing and completed.

#### onProgress event

The progress event is thrown on each step of an animation. To catch the event and manage it, you can add a [AnimationProgressEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/AnimationProgressEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new AnimationProgressEventHandler() {

   /**
    * Invoked when chart animation is progressing.
    * 
    * @param event animation event
    */
   @Override 
   public void onProgress(AnimationProgressEvent event){
      AnitmationItem item = event.getItem();
      // logic
   }
         
}, AnimationProgressEvent.TYPE);
```

The event provides the [animation item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/AnimationItem.html) object with all information about animation status.

#### onComplete event

The complete event is thrown at the end of an animation. To catch the event and manage it, you can add a [AnimationCompleteEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/AnimationCompleteEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new AnimationCompleteEventHandler() {

   /**
    * Invoked when chart animation is complete.
    * 
    * @param event animation event
    */
   @Override 
   public void onComplete(AnimationCompleteEvent event){
      AnitmationItem item = event.getItem();
      // logic
   }
         
}, AnimationCompleteEvent.TYPE);
```

The event provides the [animation item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/AnimationItem.html) object with all information about animation status.

## Legend

The chart legend displays data about the datasets that area appearing on the chart.

The legend configuration is passed to a chart as following:

```java
// example
chart.getOptions().getLegend().setDisplay(false);
chart.getOptions().getLegend().setPosition(Position.BOTTOM);
```

The following legend options are available. 


| Name | Type | Default | Description
| :- | :- | :- | :-
| align | [ElementAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ElementAlign.html) | ElementAlign.CENTER | Alignment of the legend.
| display | boolean | `true` | If `true`, the legend is shown.
| fullWidth | boolean | `true` | Marks that this box should take the full width of the canvas (pushing down other boxes).
| maxHeight | int | UndefinedValues.INTEGER | Maximum height of the legend, in pixels.
| maxWidth | int | UndefinedValues.INTEGER | Maximum width of the legend, in pixels.
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.TOP | Position of the legend.
| reverse | boolean | `false` | Legend will show datasets in reverse order.
| rtl | boolean | `false` | `true` for rendering the legends from right to left.
| textDirection | [TextDirection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextDirection.html) | TextDirection.LEFT_TO_RIGHT | This will force the text direction on the canvas for rendering the legend, regardless of the CSS specified on the canvas.

### Events

A chart legend can emits events during its life cycle, when the user clicks, hovers or leaves the legend.

#### onClick event

The click event is thrown when a `click` event is registered on a label item. To catch the event and manage it, you can add a [LegendClickEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/LegendClickEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new LegendClickEventHandler() {

   /**
    * Invoked when the user clicks on the chart legend.
    * 
    * @param event legend click event
    */
   @Override 
   public void onClick(LegendClickEvent event){
      // logic
   }
      
}, LegendClickEvent.TYPE);
```

The event provides the [legend item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/LegendItem.html) object with all information about the clicked item.

When a [LegendClickEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/LegendClickEventHandler.html) instance, the default behavior of the chart (enable and disable datasets) is not performed. To invoke it, you can use [invokeLegendOnClick](Defaults#methods) method of `Defaults` object. 

#### onHover event

The hover event is thrown when a `mousemove` event is registered on top of a label item. To catch the event and manage it, you can add a [LegendHoverEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/LegendHoverEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new LegendHoverEventHandler() {

   /**
    * Invoked when the user hovers on the chart legend.
    * 
    * @param event legend hover event
    */
   @Override 
   public void onHover(LegendHoverEvent event){
      // logic
   }
         
}, LegendHoverEvent.TYPE);
```

The event provides the [legend item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/LegendItem.html) object with all information about the hovered item.

When a [LegendHoverEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/LegendHoverEventHandler.html) instance, the default behavior of the chart is not performed. To invoke it, you can use [invokeLegendOnHover](Defaults#methods) method of `Defaults` object.

#### onLeave event

The leave event is thrown when a `mouseout` event is registered on top of a label item. To catch the event and manage it, you can add a [LegendLeaveEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/LegendLeaveEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new LegendleaveEventHandler() {

   /**
    * Invoked when the user leaves on the chart legend.
    * 
    * @param event legend leave event
    */
   @Override 
   public void onLeave(LegendLeaveEvent event){
      // logic
   }
         
}, LegendLeaveEvent.TYPE);
```

The event provides the [legend item](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/LegendItem.html) object with all information about the left item.

When a [LegendLeaveEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/LegendLeaveEventHandler.html) instance, the default behavior of the chart is not performed. To invoke it, you can use [invokeLegendOnLeave](Defaults#methods) method of `Defaults` object.

### Legend labels

The chart legend title can configure the title visible on legend element.

The legend title configuration is passed to a chart as following:

```java
// example
chart.getOptions().getLegend().getLegendTitle().setPadding(5);
chart.getOptions().getLegend().getLegendTitle().setUsePointStyle(true);
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| boxWidth | int | 40 | Width of colored box.
| boxHeight | int | `Defaults.get().getGlobal()`<br/>`.getFont().getSize()` | Height of the colored box.
| color | String - String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | The color of the legend text label.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | Font family of legend text label.<br/>See [Font](DefaultsCharts#font).
| padding | int | 10 | Padding between rows of colored boxes.
| pointStyle | [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html) - [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html) | PointStyle.CIRCLE | This style of point is used for the legend. Only used if `usePointStyle` is true.
| usePointStyle | boolean | `false` | Label style will match corresponding point style (size is based on fontSize, boxWidth is not used in this case). 

### Callbacks

A chart legend labels can be configured at runtime, providing some interfaces for a specific purpose.

#### `filter` callback

Allows filtering of legend items.

To apply a filter callback, you can set a [LegendFilterCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/LegendFilterCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getLegend().getLabels().setFilterCallback(new LegendFilterCallback() {

   /**
    * Allows filtering of legend items.
    * 
    * @param chart chart instance
    * @param item item to be filtered
    * @return false to remove the item
    *         from the container, otherwise true.
    */
   @Override 
   public boolean onFilter(IsChart chart, LegendItem item){
      // logic
      return true;
   }
         
});
```

The callback uses [LegendItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/LegendItem.html) to enable filtering.

#### `itemSort` callback

Allows sorting of legend items.

To apply a item sort callback, you can set a [LegendItemSortCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/LegendItemSortCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getLegend().getLabels().setItemSortCallback(new LegendItemSortCallback() {

   /**
    * Allows sorting of legend items.
    * 
	 * @param chart chart instance
	 * @param item1 the first object to be compared.
	 * @param item2 the second object to be compared.
	 * @return a negative integer, zero, or a positive integer as the first argument is less than, equal to, or greater than the second.
	 */
   @Override 
   public int onItemSort(IsChart chart, LegendItem item1, LegendItem item2){
      // logic
      return 0;
   }
         
});
```

The callback uses [LegendItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/LegendItem.html) to enable filtering.

#### `generateLabels` callback

Generates legend label items for each thing in the legend. Default implementation returns the text and styling for the color box. 

To apply a custom callback, you can set a [legend labels callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/LegendLabelsCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getLegend().getLegendLabels().setLabelsCallback(new LegendLabelsCallback() {

   /**
    * Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box.
    * 
    * @param chart chart instance
    * @param defaultLabels list of labels created by CHART.JS using the out of the box generate labels callback.
    * @return a list of legend items. if <code>null</code>, uses the default implementation
    */
   @Override 
   List<LegendLabelItem> generateLegendLabels(IsChart chart, List<LegendLabelItem> defaultLabels){
      // logic
      return legendItemListInstance;
   }
         
});
```

The callback gets the list of legend items, as argument, that [Chart.JS](http://www.chartjs.org/) have been calculated as default.

This helps the implementation of the callback because you can change ONLY what you need to update.

The callback returns a list of [label items](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/LegendLabelItem.html), which the properties to be applied.

### Legend title

The chart legend labels can configure the labels visible on legend element.

The legend labels configuration is passed to a chart as following:

```java
// example
chart.getOptions().getLegend().getLegendTitle().setText("This is my legend title");

chart.getOptions().getLegend().getLegendTitle().setPadding(5);
chart.getOptions().getLegend().getLegendTitle().setDisplay(true);

int padding = chart.getOptions().getLegend().getLegendTitle().getPadding();
boolean display = chart.getOptions().getLegend().getLegendTitle().isDisplay();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| display | boolean | `true` | If `true`, the legend title is shown.
| padding | int | 10 | Number of pixels to add above and below the title text.
| color | String - String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | The color of the legend text title.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | `Defaults.get().getGlobal()`<br/>`.getFont()` | Font family of legend text title.<br/>See [Font](DefaultsCharts#font).

## Tooltip

The chart tooltip defines how a small hover box with information about the chart dataset item being hovered over.

The tooltip configuration is passed to a chart as following:

```java
// example
chart.getOptions().getTooltips().setEnabled(true);
chart.getOptions().getTooltips().setMode(InteractionMode.AVERAGE);

boolean enabled = chart.getOptions().getTooltips().isEnabled();
InteractionMode mode = chart.getOptions().getTooltips().getMode();
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

### Positioning

Possible [modes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TooltipPosition.html) out-of the box are:

 * `'AVERAGE'`
 * `'NEAREST'`

['AVERAGE'](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TooltipPosition.html#AVERAGE) mode will place the tooltip at the average position of the items displayed in the tooltip. 
['NEAREST'](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TooltipPosition.html#NEAREST) will place the tooltip at the position of the element closest to the event position.

New modes can be defined by adding a custom implementation, by a [TooltipPositioner](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/positioner/TooltipPositioner.html) which  can provide the tooltip position.

By the [Positioner](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/positioner/Positioner.html) singleton, you could register and unregister custom positioners. 

```java
final CustomTooltipPosition myPosition = new CustomTooltipPosition("myPosition");
//
// register new tooltip positioner
//
Positioner.get().register(new TooltipPositioner() {

   /**
    * Returns the tooltip position
    * which must be used in chart options.
    * 
    * @return the tooltip position.
    */
   @Override
   public CustomTooltipPosition getName() {
       return myPosition;
   }

   /**
    * Applies own logic to returns the point where the tooltip must be showed.
    * 
    * @param chart chart instance
    * @param items list of dataset reference items
    * @param eventPoint the point of event when the method has been invoked
    * @return the point where the tooltip must be showed.
    */
   @Override
   public Point computePosition(IsChart chart, List<DatasetReference> items, Point eventPoint) {
       ChartAreaNode area = chart.getNode().getChartArea();
       Point p = new Point();
       p.setX(area.getLeft());
       p.setY(area.getTop());
       return p;
       }
   });
} 
....
// sets new tooltip position to chart options
chart.getOptions().getTooltips().setPosition(myPosition);
```

:::note PAY ATTENTION
If you unregister a positioner and a chart still is configured with the custom tooltip position, **Charba** will throw an exception when the chart will be updated.
:::

### Callbacks

A chart tooltips can be configured at runtime, providing some interfaces for a specific purpose.

#### `itemSort` callback

Allows sorting of tooltip items. 

To apply a itemSort callback, you can set a [TooltipItemSortCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TooltipItemSortCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getTooltips().setItemSortCallback(new TooltipItemSortCallback() {

   /**
    * Allows sorting of tooltip items.
    * 
    * @param chart chart instance
    * @param item1 the first object to be compared.
    * @param item2 the second object to be compared.
    * @return a negative integer, zero, or a positive integer as the first argument 
    *         is less than, equal to, or greater than the second.
    */
   @Override 
   public int onItemSort(IsChart chart, TooltipItem item1, TooltipItem item2){
      // logic
      return 0;
   }
         
});
```

The callback uses a couple of [TooltipItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/TooltipItem.html) to enable the sort.

#### `filter` callback

Allows filtering of tooltip items.

To apply a filter callback, you can set a [TooltipFilterCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TooltipFilterCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getTooltips().setFilterCallback(new TooltipFilterCallback() {

   /**
    * Allows filtering of tooltip items.
    * 
    * @param chart chart instance
    * @param item item to be filtered
    * @return false to remove the item
    *         from the container, otherwise true.
    */
   @Override 
   public boolean onFilter(IsChart chart, TooltipItem item){
      // logic
      return true;
   }
         
});
```

The callback uses [TooltipItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/TooltipItem.html) to enable filtering.

#### `custom` Callback

Custom tooltips allow you to hook in the tooltip rendering process so that you can render the tooltip in own custom way. 

Generally this is used to create an HTML tooltip and you can enable custom tooltips in the chart configuration as following:

```java
chart.getOptions().getTooltips().setCustomCallback(new TooltipCustomCallback() {

   /**
    * Custom tooltips allow you to hook in the tooltip 
    * rendering process so that you can render the tooltip in your own
    * custom way.
    * 
    * @param chart chart instance
    * @param model all info about tooltip to create own HTML tooltip.
    */
   @Override 
   public onCustom(IsChart chart, TooltipModel model){
      // logic
   }
         
});
```

The callback can use the [tooltip model](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/TooltipModel.html), with the complete model about the tooltip.

#### Other tooltip Callbacks

There are a set of available callbacks to configure and customize own tooltips. The tooltip callbacks configuration is nested in the tooltip configuration. 

To simplify the implementation of all callbacks available in [Chart.JS](http://www.chartjs.org/), **Charba** splits the callbacks in 4 main ones, to manage every single element of a tooltip separately:

  * Title
  * Body
  * Footer
  * Labels
  
All callbacks must be set in a inner element of tooltip configuration, as following:

```java
TooltipsCallbacks callbacks = chart.getOptions().getTooltips().getCallbacks();
```

To invoke the default behavior of the chart, you can use [defaults](Defaults#methods) methods of `Defaults` object.

#### TITLE tooltip callback

The tooltip has the following callbacks for providing text of title.

All methods must return a list of strings which are treated as multiple lines of text.

This callback takes care about labels to apply to the title, all methods are implemented by own defaults in order that you can implement only the method where you are interested in:

```java
public interface TooltipTitleCallback {

   /**
    * Returns the text to render before the title.<br>
    * If returns <code>null</code> or empty list, it will be ignored.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title.
    */
   default List<String> onBeforeTitle(IsChart chart, List<TooltipItem> items) {
      return Collections.emptyList();
   }

   /**
    * Returns text to render as the title of the tooltip.<br>
    * If returns <code>null</code> or empty list, it will be ignored.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title.
    */
   default List<String> onTitle(IsChart chart, List<TooltipItem> items) {
      return Defaults.get().invokeTooltipsCallbackOnTitle(chart, items);
   }

   /**
    * Returns text to render after the title.<br>
    * If returns <code>null</code> or empty list, it will be ignored.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title.
    */
   default List<String> onAfterTitle(IsChart chart, List<TooltipItem> items) {
      return Collections.emptyList();
   }

}
```

To apply a title tooltip callback, you can set a [TooltipTitleCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TooltipTitleCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new TooltipTitleCallback) {

// implementation
         
});
```

#### BODY tooltip callback

The tooltip has the following callbacks for providing text of body.

All methods must return a list of strings which are treated as multiple lines of text.

This callback takes care about labels to apply to the body, all methods are implemented by own defaults in order that you can implement only the method where you are interested in:

```java
public interface TooltipBodyCallback {

   /**
    * Returns text to render before the body section.
    * If returns null or empty list, it will be ignored.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the body.
    */
   default List<String> onBeforeBody(IsChart chart, List<TooltipItem> items) {
      return Collections.emptyList();
   }

   /**
    * Returns text to render after the body section.
    * If returns null or empty list, it will be ignored.
    * 
    * @param chart chart instance
    * @param items list of all tooltips items
    * @return a list of labels to apply to the body.
    */
   default List<String> onAfterBody(IsChart chart, List<TooltipItem> items){
      return Collections.emptyList();
   }
}
```

To apply a body tooltip callback, you can set a [TooltipBodyCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TooltipBodyCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getTooltips().getCallbacks().setBodyCallback(new TooltipBodyCallback) {

// implementation
         
});
```

#### FOOTER tooltip callback

The tooltip has the following callbacks for providing text of footer.

All methods must return a list of strings which are treated as multiple lines of text.

This callback takes care about labels to apply to the footer, all methods are implemented by own defaults in order that you can implement only the method where you are interested in:

```java
public interface TooltipFooterCallback {

   /**
    * Returns text to render before the footer section.<br>
    * If returns <code>null</code> or empty list, it will be ignored.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title.
    */
   default List<String> onBeforeFooter(IsChart chart, List<TooltipItem> items) {
      return Collections.emptyList();
   }

   /**
    * Returns text to render as the footer of the tooltip.<br>
    * If returns <code>null</code> or empty list, it will be ignored.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title.
    */
   default List<String> onFooter(IsChart chart, List<TooltipItem> items) {
      return Collections.emptyList();
   }

   /**
    * Text to render after the footer section.<br>
    * If returns <code>null</code> or empty list, it will be ignored.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title.
    */
   default List<String> onAfterFooter(IsChart chart, List<TooltipItem> items) {
      return Collections.emptyList();
   }
}
```

To apply a footer tooltip callback, you can set a [TooltipFooterCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TooltipFooterCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getTooltips().getCallbacks().setFooterCallback(new TooltipFooterCallback) {

// implementation
         
});
```

#### LABEL tooltip callback

The tooltip has the following callbacks for providing the text and colors that displays for a given data point.

This callback takes care about labels and styles  to apply to the tooltip items, all methods are implemented by own defaults in order that you can implement only the method where you are interested in:

```java
public interface TooltipLabelCallback {

   /**
    * Returns text to render before an individual label.
    * This will be called for each item in the tooltip.
    * If returns null, it will be ignored.
    * 
    * @param chart chart instance
    * @param item tooltip item
    * @return label to be applied.
    */
   default String onBeforeLabel(IsChart chart, TooltipItem item) {
      return Constants.EMPTY_STRING;
   }

   /**
    * Returns text to render for an individual item in the tooltip.
    * If returns null, it will be ignored.
    * 
    * @param chart chart instance
    * @param item tooltip item
    * @return label to be applied.
    */
   default String onLabel(IsChart chart, TooltipItem item) {
      return Defaults.get().invokeTooltipsCallbackOnLabel(chart, item);
   }

   /**
    * Returns the colors to render for the tooltip item.
    * If returns null, it will be ignored.
    * 
    * @param chart chart instance
    * @param item tooltip item
    * @return label color to be applied.
    */
   default TooltipLabelColor onLabelColor(IsChart chart, TooltipItem item) {
      return Defaults.get().invokeTooltipsCallbackOnLabelColor(chart, item);
   }

   /**
    * Returns the point style to use instead of color boxes if usePointStyle is true.
    * Default implementation uses the point style from the dataset points.
    * 
    * @param chart chart instance
    * @param item tooltip item
    * @return point style to be applied.
    */
   default TooltipLabelPointStyle onLabelPointStyle(IsChart chart, TooltipItem item) {
      return Defaults.get().invokeTooltipsCallbackOnLabelPointStyle(chart, item);
   }

   /**
    * Returns the colors for the text of the label for the tooltip item.
    * If returns null, it will be ignored.
    * 
    * @param chart chart instance
    * @param item tooltip item
    * @return label text color to be applied.
    */
   default IsColor onLabelTextColor(IsChart chart, TooltipItem item) {
      return chart.getOptions().getTooltips().getBodyColor();
   }

   /**
    * Returns text to render after an individual label.
    * If returns null, it will be ignored.
    * 
    * @param chart chart instance
    * @param item tooltip item
    * @return label to be applied.
    */
   default String onAfterLabel(IsChart chart, TooltipItem item) {
      return Constants.EMPTY_STRING;
   }
}
```

To apply a label tooltip callback, you can set a [TooltipLabelCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TooltipLabelCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getTooltips().getCallbacks().setLabelCallback(new TooltipLabelCallback) {

// implementation
         
});
```

To set the color of labels, there is [TooltipLabelColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/TooltipLabelColor.html) class which enable the setting of colors.

To set the point style of labels, there is [TooltipLabelPointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/TooltipLabelPointStyle.html) class which enable the setting of point style and the rotation to apply.


## Title

The chart title defines text to draw at the top of the chart.

The title configuration is passed to a chart as following:

```java
// example
chart.getOptions().getTitle().setText("My title of chart");

chart.getOptions().getTitle().setDisplay(true);
chart.getOptions().getTitle().setColor("red");

IsColor color = chart.getOptions().getTitle().getColor();
boolean display = chart.getOptions().getTitle().isDisplay();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| align | [ElementAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/ElementAlign.html) | ElementAlign.CENTER | Alignment of the title.
| color | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getColorAsString()` | Color of text of the title.<br/>See [default colors](DefaultsCharts#commons-charts-options). 
| display | boolean | `false` | If `true`, the title is shown.
| font | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | See description | Font of title text. The default value is the global font with the style set to FontStyle.BOLD.<br/>See [Font](DefaultsCharts#font).
| fullWidth | boolean | `true` |  Marks that this box should take the full width of the canvas (pushing down other boxes). 
| padding | int | 10 | Number of pixels to add above and below the title text.
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.TOP | Position of title.

## Elements

Options can be configured for four different types of elements: **[arc](#arc)**, **[lines](#line)**, **[points](#point)**, and **[bar](#bar)**.

The [elements](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Elements.html) configuration is nested in the global configuration as following: 

```java
chart.getOptions().getElements();
```

### Point

Point element is used to represent the points in a line chart or a bubble chart.

The element point configuration can be used by a chart instance as following:

```java
// example
chart.getOptions().getElements().getPoint().setBorderWidth(2);
chart.getOptions().getElements().getPoint().setBackgroundColor("red");

int borderWidth = chart.getOptions().getElements().getPoint().getBorderWidth();
IsColor backgroundColor = chart.getOptions().getElements().getPoint().getBackgroundColor();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBackgroundColorAsString()` | Point fill color.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | Point stroke color.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| borderWidth | int | 1 | Point stroke width. 
| hitRadius | int | 1 | Extra radius added to point radius for hit detection. 
| hoverBorderWidth | int | 1 | Stroke width when hovered. 
| hoverRadius | int | 4 | Point radius when hovered. 
| pointStyle | [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html) - [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html) | PointStyle.CIRCLE | Point style.
| radius | int | 3 | Point radius.
| rotation | double | 0 | the point rotation (in degrees).

### Line

Line element is used to represent the line in a line chart.

The element line configuration can be used by a chart instance as following:

```java
// example
chart.getOptions().getElements().getLine().setBorderWidth(5);
chart.getOptions().getElements().getLine().setBackgroundColor("red");

int borderWidth = chart.getOptions().getElements().getLine().getBorderWidth();
IsColor backgroundColor = chart.getOptions().getElements().getLine().getBackgroundColor();
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
| capBezierPoints | boolean | `true` | `true` to keep Bezier control inside the chart, `false` for no restriction.
| cubicInterpolationMode | [CubicInterpolationMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CubicInterpolationMode.html) | CubicInterpolationMode.DEFAULT |  Interpolation mode to apply.
| fill |  String - int - boolean - [IsFill](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsFill.html) | Fill.FALSE | How to fill the area under the line.<br/>See [Filling modes](Colors#filling-modes)
| stepped | boolean | `false` | `true` to show the line as a stepped line (`tension` will be ignored).
| tension | double | 0 | Bezier curve tension (`0` for no Bezier curves).

### Arc

Arc element is used in the polar area, doughnut and pie charts.

The element arc configuration can be used by a chart instance as following:

```java
// example
chart.getOptions().getElements().getArc().setBorderWidth(5);
chart.getOptions().getElements().getArc().setBackgroundColor(HtmlColor.RED);

int borderWidth = chart.getOptions().getElements().getArc().getBorderWidth();
IsColor backgroundColor = chart.getOptions().getElements().getArc().getBackgroundColor();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| angle | double | `Double.NaN` | Arc angle to cover, for polar chart only.
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBackgroundColorAsString()` | Arc fill color.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| borderAlign | [BorderAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderAlign.html) | BorderAlign.CENTER | Arc stroke alignment.
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | #fff - <span style={{backgroundColor: '#fff', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Arc stroke color.
| borderWidth | int | 2 | Arc stroke width.

### Bar

Bar element is used to represent the bars in a bar chart.

The element bar configuration can be used by a chart instance as following:

```java
// example
chart.getOptions().getElements().getBar().setBorderWidth(5);
chart.getOptions().getElements().getBar().setBackgroundColor(HtmlColor.RED);

int borderWidth = chart.getOptions().getElements().getBar().getBorderWidth();
IsColor backgroundColor = chart.getOptions().getElements().getBar().getBackgroundColor();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBackgroundColorAsString()` | Bar fill color.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()`) | Bar stroke color.<br/>See [default colors](DefaultsCharts#commons-charts-options).
| borderRadius | int | 0 | The bar border radius (in pixels).
| borderSkipped | [BorderSkipped](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderSkipped.html) | BorderSkipped.START | The edge to skip when drawing bar.
| borderWidth | int | 0 | The bar border width (in pixels).

## Layout

The layout component enables the padding configuration to add to a chart.

Options can be configured for **[padding](#padding)** element.

The [layout](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Layout.html) configuration is nested in the global configuration using 

```java
// get layout
chart.getOptions().getLayout();
// get padding
Padding padding = chart.getOptions().getLayout().getPadding();
```

### Padding

The padding to add inside the chart.

The layout configuration is passed to a chart as following:

```java
// example
chart.getOptions().getLayout().getPadding().setTop(10);
chart.getOptions().getLayout().getPadding().setBottom(10);
// to set same padding value to all sides of the chart
chart.getOptions().getLayout().getPadding().set(10);

int paddingTop = chart.getOptions().getLayout().getPadding().getTop();
```

The following padding options are available. 


| Name | Type | Default | Description
| :- | :- | :- | :-
| bottom | int | 0 | the padding bottom in pixel.
| left | int | 0 | the padding left in pixel.
| right | int | 0 | the padding right in pixel.
| top | int | 0 | the padding top in pixel.