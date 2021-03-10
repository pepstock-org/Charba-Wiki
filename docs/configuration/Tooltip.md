---
id: Tooltip
title: Tooltip
hide_title: true
sidebar_label: Tooltip
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Tooltip

A tooltip is a text description near an object. The tooltip is displayed when the user hovers the mouse cursor over the object.

Tooltips are helpful for new users because they enable the user to learn about each icon or object by hovering their mouse over them. 

<img src={useBaseUrl('/img/tooltip-base.png')} />

To change and apply own properties, you can invoke the **set** methods, as following:

```java
// example
chart.getOptions().getTooltips().setEnabled(true);
chart.getOptions().getTooltips().setMode(InteractionMode.AVERAGE);

boolean enabled = chart.getOptions().getTooltips().isEnabled();
InteractionMode mode = chart.getOptions().getTooltips().getMode();
```

The default values are set in global defaults options, see [default global tooltip options](../defaults/DefaultsCharts#tooltip).

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :- 
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Background color of the tooltips.
| bodyColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Color of body text.
| bodyFont | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | Font of body text. The default value is the global font with the style set to FontStyle.NORMAL.<br/>See [Font](../defaults/DefaultsCharts#font).
| bodyAlign | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextAlign.html) | Alignment of body element of the tooltips.
| bodySpacing | int | Spacing to add to top and bottom of each tooltip item. 
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Color of the border.
| borderWidth | int | Size of the border. 
| boxWidth | int | Width of the color box if `displayColors` is true.
| boxHeight | int | Height of the color box if `displayColors` is true.
| caretPadding | int | Extra distance to move the end of the tooltip arrow away from the tooltip point. 
| caretSize | int | Size, in px, of the tooltip arrow.
| cornerRadius | int | Radius of tooltip corner curves. 
| displayColors | boolean | If `true`, color boxes are shown in the tooltip.
| enabled | boolean | If `true`, the tooltips are enabled.
| footerColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Color of the footer.
| footerFont | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | Font of footer text. The default value is the global font with the style set to FontStyle.BOLD.<br/>See [Font](../defaults/DefaultsCharts#font).
| footerAlign | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextAlign.html) | Alignment of footer element of the tooltips. 
| footerMarginTop | int | Margin to add before drawing the footer.
| footerSpacing | int | Spacing to add to top and bottom of each footer line.
| intersect | boolean | if `true`, the tooltip mode applies only when the mouse position intersects with an element. If `false`, the mode will be applied at all times.
| mode | [InteractionMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/InteractionMode.html) | Sets which elements appear in the tooltip.  
| multiKeyBackground | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Color to draw behind the colored boxes when multiple items are in the tooltip.
| position | [TooltipPosition](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TooltipPosition.html) | The mode for positioning the tooltip.
| rtl | boolean | `true` for rendering the tooltips from right to left.
| textDirection | [TextDirection](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextDirection.html) | This will force the text direction on the canvas for rendering the tooltips, regardless of the CSS specified on the canvas
| titleColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) | Color of the footer.
| titleFont | [Font](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Font.html) | Font of title text. The default value is the global font with the style set to FontStyle.BOLD.<br/>See [Font](../defaults/DefaultsCharts#font).
| titleAlign | [TextAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/TextAlign.html) | Alignment of title element of the tooltips.
| titleMarginBottom | int | Margin to add on bottom of title section.
| titleSpacing | int | Spacing to add to top and bottom of each title line. 
| usePointStyle | boolean | Use the corresponding point style (from dataset options) instead of color boxes (size is based on the minimum value between box width and box height).

### Padding

The padding to add inside the tooltip.

The [padding](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/Padding.html) configuration is nested in the tooltip configuration as following: 

```java
chart.getOptions().getTooltips().getPadding().setTop(10);

int paddingTop = chart.getOptions().getTooltips().getPadding().getTop();
```

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :-
| bottom | int | The padding bottom in pixel.
| left | int | The padding left in pixel.
| right | int | The padding right in pixel.
| top | int | The padding top in pixel.

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

## Items callbacks

A chart tooltips can be configured at runtime, providing some interfaces for a specific purpose.

### `itemSort` callback

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

### `filter` callback

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

## Custom rendering callback

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

## Tooltip elements callbacks

There are a set of available callbacks to configure and customize own tooltips. The tooltip callbacks configuration is nested in the tooltip configuration. 

To simplify the implementation of all callbacks available in [Chart.JS](http://www.chartjs.org/), **Charba** splits the callbacks in 4 main ones, to manage every single element of a tooltip separately:

  * Title
  * Body
  * Footer
  * Labels

<img src={useBaseUrl('/img/tooltip.png')} />

All callbacks must be set in a inner element of tooltip configuration, as following:

```java
TooltipsCallbacks callbacks = chart.getOptions().getTooltips().getCallbacks();
```

To invoke the default behavior of the chart, you can use [defaults](../defaults/Defaults#methods) methods of `Defaults` object.

### Title tooltip callback

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

### Body tooltip callback

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

### Footer tooltip callback

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

### Label tooltip callback

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
