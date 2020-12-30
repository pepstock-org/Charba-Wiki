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
| ---- | ---- | ------- | -----------
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

## Layout

The layout component enables the padding configuration to add to a chart.

The layout configuration is passed to a chart as following:

```java
// example
chart.getOptions().getLayout().getPadding().setTop(10);
chart.getOptions().getLayout().getPadding().setBottom(10);
```

The following padding options are available. 


| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| bottom | int | 0 | the padding bottom in pixel.
| left | int | 0 | the padding left in pixel.
| right | int | 0 | the padding right in pixel.
| top | int | 0 | the padding top in pixel.

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
| ---- | ---- | ------- | -----------
| display | boolean | `true` | is the legend shown.
| fullWidth | boolean | `true` | Marks that this box should take the full width of the canvas (pushing down other boxes).
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Position.TOP | Position of the legend.
| align | [LegendAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/LegendAlign.html) | LegendAlign.CENTER | Alignment of the legend.
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

When a [LegendClickEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/LegendClickEventHandler.html) instance, the default behavior of the chart (enable and disable datasets) is not performed. To invoke it, you can use [invokeLegendOnClick](Defaults#invokeLegendOnClick) method of `Defaults` object. 

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

When a [LegendHoverEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/LegendHoverEventHandler.html) instance, the default behavior of the chart is not performed. To invoke it, you can use [invokeLegendOnHover](Defaults#invokeLegendOnHover) method of `Defaults` object.

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

When a [LegendLeaveEventHandler](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/events/LegendLeaveEventHandler.html) instance, the default behavior of the chart is not performed. To invoke it, you can use [invokeLegendOnLeave](Defaults#invokeLegendOnLeave) method of `Defaults` object.

### Legend Labels

The chart legend labels can configure the labels visible on legend element.

The legend labels configuration is passed to a chart as following:

```java
// example
chart.getOptions().getLegend().getLegendLabels().setPadding(5);
chart.getOptions().getLegend().getLegendLabels().setUsePointStyle(true);
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| boxWidth | int | 40 | Width of colored box.
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#666' | Color of text.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family of legend text.
| fontSize | int | 12 | Font size of text. 
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.NORMAL | Font style of text.
| padding | int | 10 | Padding between rows of colored boxes.
| usePointStyle | boolean | `false` | Label style will match corresponding point style (size is based on fontSize, boxWidth is not used in this case). 

### Callbacks

A chart legend labels can be configured at runtime, providing some interfaces for a specific purpose.

#### filter Callback

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

#### generateLabels callback

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

The callbacks gets as argument the list of legend items that [Chart.JS](http://www.chartjs.org/) have been calculated as default.

This helps the implementation of the callbacks because you can change ONLY what you need to update.

The callback returns a list of [label items](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/LegendLabelItem.html), which the properties to be applied.

#### generateLegend callback

Sometimes you need a very complex legend. In these cases, it makes sense to generate an HTML legend. **Charba** provide a `generateLegend()` [method](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/AbstractChart.html#generateLegend--) in every chart instance that returns an HTML string for the legend.

To configure how this legend is generated, you can implement the [legend callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/LegendCallback.html) as following:

```java
chart.getOptions().setLegendCallback(new LegendCallBack() {

   /**
     * Creates HTML representation of legend.
     * 
     * @param chart chart instance
     * @return HTML legend representation as SafeHTML
     */
   @Override
   SafeHtml generateLegend(IsChart chart){
      // logic
      return mySafeHtml
   }
         
});
```

By default, [Chart.JS](http://www.chartjs.org/) provides the following HTML structure for legend:

```html
<ul class="0-legend">
  <li>
   <span style="background-color: rgb(51, 102, 204);"></span>January
  </li>
  <li>
    <span style="background-color: rgb(220, 57, 18);"></span>February
  </li>
  <li>
    <span style="background-color: rgb(255, 153, 0);"></span>March
  </li>
  <li>
    <span style="background-color: rgb(16, 150, 24);"></span>April
  </li>
  <li>
    <span style="background-color: rgb(153, 0, 153);"></span>May
  </li>
  <li>
    <span style="background-color: rgb(59, 62, 172);"></span>June
  </li>
  <li>
    <span style="background-color: rgb(0, 153, 198);"></span>July
  </li>
</ul>
```

To apply a specific CSS style, you can create a CSS resource in your project as following:

```css
[class$="-legend"] {
  list-style: none;
  cursor: pointer;
  padding-left: 0;
}

[class$="-legend"] li {
  display: inline-block;
  padding: 0 5px;
}

[class$="-legend"] li.hidden {
  text-decoration: line-through;
}

[class$="-legend"] li span {
  border-radius: 5px;
  display: inline-block;
  height: 10px;
  margin-right: 10px;
  width: 10px;
}
```

And then you can create your resource bundle (defined as text resource and NOT CSS resource, if you are using GWT artifact) or implementing an [AbstractInjectableResource](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/resources/AbstractInjectableResource.html), as following:

```java
public interface MyResources extends ClientBundle {
	
	public static final MyResources INSTANCE = GWT.create(MyResources.class);

	@Source("css/Legend.css")
	TextResource legend();

}
```

Finally you can inject the CSS resource by the injector, provided by **Charba**, in your entry point as following:

```java
// create an injectable resource by text resource
InjectableTextResource css = new InjectableTextResource(MyResources.INSTANCE.legend());
// inject CSS 
Injector.ensureCssInjected(css);
```

But **Charba** provides a plugin to manage HTML legend out of the box which can help you to define your legend as HTML. See [HTML legend](PluginHTMLLegend) plugin for details.

## Title

The chart title defines text to draw at the top of the chart.

The title configuration is passed to a chart as following:

```java
// example
chart.getOptions().getTitle().setDisplay(true);
chart.getOptions().getTitle().getFontColor("red");
chart.getOptions().getTitle().setText("My title of chart");
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| display | boolean | `false` | is the title shown.
| fontColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#666' | Font color.
| fontFamily | String | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family for the title text.
| fontSize | int | 12 | Font size. 
| fontStyle | [FontStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/FontStyle.html) | FontStyle.BOLD | Font style.
| fullWidth | boolean | `true` |  Marks that this box should take the full width of the canvas (pushing down other boxes). 
| lineHeight | double - String | 1.2 | Height of an individual line of text. 
| padding | int | 10 | Number of pixels to add above and below the title text.
| position | [Position](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Position.html) | Poistion.TOP | Position of title.
| text | String/String[] | "" | Title text to display. If specified as an array, text is rendered on multiple lines.

## Tooltip

The chart tooltip defines how a small hover box with information about the chart dataset item being hovered over.

The tooltip configuration is passed to a chart as following:

```java
// example
chart.getOptions().getTooltips().setEnable(true);
chart.getOptions().getTooltips().getMode(InteractionMode.AVERAGE);
chart.getOptions().getTooltips().setTitleFontSize(20);
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
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

### Position Modes

Possible [modes](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TooltipPosition.html) out-of the box are:

 * `'AVERAGE'`
 * `'NEAREST'`

['AVERAGE'](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TooltipPosition.html#AVERAGE) mode will place the tooltip at the average position of the items displayed in the tooltip. 
['NEAREST'](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TooltipPosition.html#NEAREST) will place the tooltip at the position of the element closest to the event position.

New modes can be defined by adding a custom implementation, by a [TooltipPositioner](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/positioner/TooltipPositioner.html) which  can provide the tooltip position.

By [Positioner](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/positioner/Positioner.html) singleton you could register and unregister custom positioners. 

```java
CustomTooltipPosition myPosition = new CustomTooltipPosition("myPosition");
//
// register new tooltip positioner
//
Positioner.get().register(new TooltipPositioner() {

        @Override
        public CustomTooltipPosition getName() {
            return newPosition;
        }

        @Override
        public Point computePosition(IsChart chart, List<DatasetItem> items, Point eventPoint) {
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

**PAY ATTENTION** that if you unregister a positioner and a chart still is configured with the custom tooltip position, **Charba** will throw an exception when the chart will be updated.

### itemSort callback

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
    * @return a negative integer, zero, or a positive integer as the first argument is less than, equal to, or greater than the
    *         second.
    */
   @Override 
   public int onItemSort(IsChart chart, TooltipItem item1, TooltipItem item2){
      // logic
      return 0;
   }
         
});
```

The callback uses a couple of [TooltipItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/TooltipItem.html) to enable the sort.

### filter Callback

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

### custom Callback

Custom tooltips allow you to hook into the tooltip rendering process so that you can render the tooltip in own custom way. 

Generally this is used to create an HTML tooltip and you can enable custom tooltips in the chart configuration as following:

```java
chart.getOptions().getTooltips().setCustomCallback(new TooltipCustomCallback() {

   /**
    * Custom tooltips allow you to hook into the tooltip 
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

### Tooltip Callbacks

There are a set of available callbacks to configure and customize own tooltips. The tooltip callbacks configuration is nested into the tooltip configuration. 

To simplify the implementation of all callbacks available in [Chart.JS](http://www.chartjs.org/), **Charba** splits the callbacks in 4 main ones, to manage every single element of a tooltip separately:

  * Title
  * Body
  * Footer
  * Labels 

#### Title tooltip callback

This callback must implement the following interface:

```java
/**
 * The tooltip label configuration is nested below the tooltip configuration using the callbacks key.
 * The tooltip has the following callbacks for providing text.
 * All functions must return either a string or an array of strings. Arrays of strings are treated as multiple lines of
 * text.
 * This interface takes care about labels to apply to the title.
 */
public interface TooltipTitleCallback {

   /**
    * Returns the text to render before the title.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title. 
    *         If returns null or empty, it will be ignored.
    */
   List<String> onBeforeTitle(IsChart chart, List<TooltipItem> items);

   /**
    * Returns text to render as the title of the tooltip.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title. 
    *         If returns null or empty, it will be ignored.
    */
   List<String> onTitle(IsChart chart, List<TooltipItem> items);

   /**
    * Returns text to render after the title.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title. 
    *         If returns null or empty, it will be ignored.
    */
   List<String> onAfterTitle(IsChart chart, List<TooltipItem> items);

}
```

To apply a title tooltip callback, you can set a [TooltipTitleCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TooltipTitleCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new TooltipTitleCallback) {

// implementation
         
});
```

**Charba** provides an [abstract callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/AbstractTooltipTitleCallback.html) which implements all methods returning the default ones.

#### Body tooltip callback

This callback must implement the following interface:

```java
/**
 * The tooltip label configuration is nested below the tooltip configuration using the callbacks key.
 * The tooltip has the following callbacks for providing text.
 * All functions must return either a string or an array of strings. Arrays of strings are treated as multiple lines of
 * text.
 * This interface takes care about labels to apply to the body.
 */
public interface TooltipBodyCallback {

   /**
    * Returns text to render before the body section.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title. 
    *         If returns null or empty, it will be ignored.
    */
   List<String> onBeforeBody(IsChart chart, List<TooltipItem> items);

   /**
    * Returns text to render after the body section.
    * 
    * @param chart chart instance
    * @param items list of all tooltips items
    * @return a list of labels to apply to the title. 
    *         If returns null or empty, it will be ignored.
    */
   List<String> onAfterBody(IsChart chart, List<TooltipItem> items);

}
```

To apply a body tooltip callback, you can set a [TooltipBodyCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TooltipBodyCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getTooltips().getCallbacks().setBodyCallback(new TooltipBodyCallback) {

// implementation
         
});
```

**Charba** provides an [abstract callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/AbstractTooltipBodyCallback.html) which implements all methods returning the default ones.


#### Footer tooltip callback

This callback must implement the following interface:

```java
/**
 * The tooltip label configuration is nested below the tooltip configuration using the callbacks key.
 * The tooltip has the following callbacks for providing text.
 * All functions must return either a string or an array of strings. Arrays of strings are treated as multiple lines of
 * text.
 * This interface takes care about labels to apply to the footer.
 */
public interface TooltipFooterCallback {

   /**
    * Returns text to render before the footer section.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title. 
    *         If returns null or empty, it will be ignored.
    */
   List<String> onBeforeFooter(IsChart chart, List<TooltipItem> items);

   /**
    * Returns text to render as the footer of the tooltip.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title. 
    *         If returns null or empty, it will be ignored.
    */
   List<String> onFooter(IsChart chart, List<TooltipItem> items);

   /**
    * Text to render after the footer section.
    * 
    * @param chart chart instance
    * @param items list of all tooltip items
    * @return a list of labels to apply to the title. 
    *         If returns null or empty, it will be ignored.
    */
   List<String> onAfterFooter(IsChart chart, List<TooltipItem> items);

}
```

To apply a footer tooltip callback, you can set a [TooltipFooterCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TooltipFooterCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getTooltips().getCallbacks().setFooterCallback(new TooltipFooterCallback) {

// implementation
         
});
```

**Charba** provides an [abstract callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/AbstractTooltipFooterCallback.html) which implements all methods returning the default ones.


#### Label tooltip callback

The label callback can change the text and colors that displays for a given data point. 

This callback must implement the following interface:

```java
public interface TooltipLabelCallback {

   /**
    * Returns text to render before an individual label. This will be called for each item in the tooltip.
    * 
    * @param chart chart instance
    * @param item tooltip item
    * @return label to be applied. If returns null, it will be ignored.
    */
   String onBeforeLabel(IsChart chart, TooltipItem item);

   /**
    * Returns text to render for an individual item in the tooltip.
    * 
    * @param chart chart instance
    * @param item tooltip item
    * @return label to be applied. If returns null, it will be ignored.
    */
   String onLabel(IsChart chart, TooltipItem item);

   /**
    * Returns the colors to render for the tooltip item.
    * 
    * @param chart chart instance
    * @param item tooltip item
    * @return label color to be applied. If returns null, it will be ignored.
    */
   TooltipLabelColor onLabelColor(IsChart chart, TooltipItem item);

   /**
    * Returns the colors for the text of the label for the tooltip item.
    * 
    * @param chart chart instance
    * @param item tooltip item
    * @return label text color to be applied. If returns null, it will be ignored.
    */
   IsColor onLabelTextColor(IsChart chart, TooltipItem item);

   /**
    * Returns text to render after an individual label.
    * 
    * @param chart chart instance
    * @param item tooltip item
    * @return label to be applied. If returns null, it will be ignored.
    */
   String onAfterLabel(IsChart chart, TooltipItem item);
```

To apply a label tooltip callback, you can set a [TooltipLabelCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/TooltipLabelCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getTooltips().getCallbacks().setLabelCallback(new TooltipLabelCallback) {

// implementation
         
});
```

To set the color of labels, there is [TooltipLabelColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/items/TooltipLabelColor.html) class which enable the setting of colors.

**Charba** provides an [abstract callback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/AbstractTooltipLabelCallback.html) which implements all methods returning the default ones.


## Elements

Options can be configured for four different types of elements: **[arc](#arc)**, **[lines](#line)**, **[points](#point)**, and **[rectangles](#rectangle)**.

### Point

Point element is used to represent the points in a line chart or a bubble chart.

The element point configuration can be used by a chart instance as following:

```java
// example
chart.getOptions().getElements().getPoint().setBorderWidth(2);
chart.getOptions().getElements().getPoint().setBackgroundColor("red");
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
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

Line element is used to represent the line in a line chart.

The element line configuration can be used by a chart instance as following:

```java
// example
chart.getOptions().getElements().getLine().setBorderWidth(5);
chart.getOptions().getElements().getLine().setBackgroundColor("red");
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Line fill color.
| borderCapStyle | [CapStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html) | CapStyle.BUTT | Line cap style (see [MDN](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap)).
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Line stroke color. 
| borderDash | int[] | [] | Line dash (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)).
| borderDashOffset | int | 0 | Line dash offset (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)).
| borderJoinStyle | [JoinStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | JoinStyle.MITER | Line join style (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)).
| borderWidth | int | 3 | Line stroke width.
| cubicInterpolationMode | [CubicInterpolationMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CubicInterpolationMode.html) | CubicInterpolationMode.DEFAULT |Algorithm used to interpolate a smooth curve from the discrete data points.
| capBezierPoints | boolean | `true` | `true` to keep Bezier control inside the chart, `false` for no restriction.
| fill |  String - int - boolean - [IsFill](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsFill.html) | Fill.nofill | Fill location. See [Filling modes](Colors#filling-modes)
| stepped | boolean | `false` | `true` to show the line as a stepped line (`tension` will be ignored).
| spanGaps | boolean | `true` | If `true`, lines will be drawn between points with no or null data. If `false`, points with `NaN` data will create a break in the line.
| tension | double | 0.4 | Bezier curve tension (`0` for no Bezier curves).

### Arc

Arc element is used in the polar area, doughnut and pie charts.

The element arc configuration can be used by a chart instance as following:

```java
// example
chart.getOptions().getElements().getArc().setBorderWidth(5);
chart.getOptions().getElements().getArc().setBackgroundColor(HtmlColor.RED);
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Arc fill color.
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | '#fff' | Arc stroke color.
| borderWidth | int | 2 | Arc stroke width.
| borderAlign | [BorderAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderAlign.html) | BorderAlign.CENTER  | Arc stroke alignment.
| weight | double | - | The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.

### Rectangle

Rectangle element is used to represent the bars in a bar chart.

The element rectangle configuration can be used by a chart instance as following:

```java
// example
chart.getOptions().getElements().getRectangle().setBorderWidth(5);
chart.getOptions().getElements().getRectangle().setBackgroundColor(HtmlColor.RED);
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Bar fill color.
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | rgba(0,0,0,0.1) | Bar stroke color.
| borderSkipped | [BorderSkipped](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderSkipped.html) | BorderSkipped.BOTTOM | Skipped (excluded) border.
| borderWidth | int | 0 | Bar stroke width.
