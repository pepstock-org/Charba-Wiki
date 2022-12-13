---
id: Legend
title: Legend
hide_title: true
sidebar_label: Legend
---
## Legend

With a chart, a legend is an area of a chart describing each of the data sets of the chart.

The chart legend displays data about the data sets that area appearing on the chart.

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets and gets position option to the legend of the chart
chart.getOptions().getLegend().setPosition(Position.BOTTOM);

Position position = chart.getOptions().getLegend().getPosition();
```

The default values are set in global defaults options, see [default global legend options](../defaults/DefaultsCharts#legend).

The following legend options are available. 

| Name | Type | Description
| :- | :- | :-
| align | [ElementAlign](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/enums/ElementAlign.html) | Alignment of the legend.
| display | boolean | If `true`, the legend is shown.
| events | [IsEvent](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/options/IsEvent.html)[]  - Set&lt;[IsEvent](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/options/IsEvent.html)&gt; | The events option defines the browser events that the legend should listen to.
| fullSize | boolean | Marks that this box should take the full width/height of the canvas (moving other boxes).
| maxHeight | int | Maximum height of the legend, in pixels.
| maxWidth | int | Maximum width of the legend, in pixels.
| position | [Position](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/enums/Position.html) | Position of the legend.
| reverse | boolean | Legend will show data sets in reverse order.
| rtl | boolean | Set `true` for rendering the legends from right to left.
| textDirection | [TextDirection](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/enums/TextDirection.html) | This will force the text direction on the canvas for rendering the legend, regardless of the CSS specified on the canvas.

## Events

A chart legend can emits events during its life cycle, when the user clicks, hovers or leaves the legend.

### Clicking

The click event is thrown when a `click` event is registered on a label item. To catch the event and manage it, you can add a [LegendClickEventHandler](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/events/LegendClickEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new LegendClickEventHandler(){

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

The event provides the [legend item](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/items/LegendItem.html) object with all information about the clicked item.

When a [LegendClickEventHandler](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/events/LegendClickEventHandler.html) instance, the default behavior of the chart (enable and disable datasets) is not performed. To invoke it, you can use [invokeLegendOnClick](../defaults/#methods) method of `Defaults` object. 

### Hovering

The hover event is thrown when a `mousemove` event is registered on top of a label item. To catch the event and manage it, you can add a [LegendHoverEventHandler](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/events/LegendHoverEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new LegendHoverEventHandler(){

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

The event provides the [legend item](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/items/LegendItem.html) object with all information about the hovered item.

When a [LegendHoverEventHandler](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/events/LegendHoverEventHandler.html) instance, the default behavior of the chart is not performed. To invoke it, you can use [invokeLegendOnHover](../defaults/#methods) method of `Defaults` object.

### Leaving

The leave event is thrown when a `mouseout` event is registered on top of a label item. To catch the event and manage it, you can add a [LegendLeaveEventHandler](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/events/LegendLeaveEventHandler.html) instance to the chart options, as following:

```java
chart.addHandler(new LegendleaveEventHandler(){

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

The event provides the [legend item](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/items/LegendItem.html) object with all information about the left item.

When a [LegendLeaveEventHandler](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/events/LegendLeaveEventHandler.html) instance, the default behavior of the chart is not performed. To invoke it, you can use [invokeLegendOnLeave](../defaults/#methods) method of `Defaults` object.

## Legend labels

The chart legend title can configure the title visible on legend element.

To get, change and apply own properties, you can invoke the **set** and **get** methods, as following:

```java
// sets and gets the padding and usePointStyle options for
// the labels of legend
chart.getOptions().getLegend().getLegendLabels().setPadding(5);
chart.getOptions().getLegend().getLegendLabels().setUsePointStyle(true);

boolean usePointStyle = chart.getOptions().getLegend().getLegendLabels().isUsePointStyle();
int padding = chart.getOptions().getLegend().getLegendLabels().getPadding();
```

The default values are set in global defaults options, see [default global legend labels options](../defaults/DefaultsCharts#legend-labels).

The following are the attributes that you can set:

| Name | Type | Description
| :- | :- | :-
| borderRadius | int | Override the borderRadius to use.
| boxWidth | int | Width of colored box.
| boxHeight | int | Height of the colored box.
| color | String - String[] - [IsColor](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/colors/IsColor.html)[] | The color of the legend text label.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| font | [IsFont](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/options/IsFont.html) | Font family of legend text label.<br/>See [Font](../defaults/DefaultsCharts#font).
| padding | int | Padding between rows of colored boxes.
| pointStyle | [PointStyle](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/enums/PointStyle.html) - [Img](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/dom/elements/Canvas.html) | This style of point is used for the legend. Only used if `usePointStyle` is `true`.
| pointStyleWidth | double | If `usePointStyle` is `true`, the width of the point style used for the legend.
| textAlign | [TextAlign](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/enums/TextAlign.html) | Horizontal alignment of the label text.
| useBorderRadius | boolean | Label border radius will match corresponding border radius.
| usePointStyle | boolean | Label style will match corresponding point style (size is based on fontSize, boxWidth is not used in this case). 

### Callbacks

A chart legend labels can be configured at runtime, providing some interfaces for a specific purpose.

#### `filter` callback

Allows filtering of legend items.

To apply a filter callback, you can set a [LegendFilterCallback](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/callbacks/LegendFilterCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getLegend().getLabels().setFilterCallback(new LegendFilterCallback(){

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

The callback uses [LegendItem](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/items/LegendItem.html) to enable filtering.

#### `itemSort` callback

Allows sorting of legend items.

To apply a item sort callback, you can set a [LegendItemSortCallback](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/callbacks/LegendItemSortCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getLegend().getLabels().setItemSortCallback(new LegendItemSortCallback(){

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

The callback uses [LegendItem](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/items/LegendItem.html) to enable filtering.

#### `generateLabels` callback

Generates legend label items for each thing in the legend. Default implementation returns the text and styling for the color box. 

To apply a custom callback, you can set a [legend labels callback](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/callbacks/LegendLabelsCallback.html) instance to the chart options, as following:

```java
chart.getOptions().getLegend().getLegendLabels().setLabelsCallback(new LegendLabelsCallback(){

   /**
    * Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box.
    * 
    * @param chart chart instance
    * @param defaultLabels list of labels created by CHART.JS using the out of the box generate labels callback.
    * @return a list of legend items. if null, uses the default implementation
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

The callback returns a list of [label items](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/items/LegendLabelItem.html), which the properties to be applied.

## Legend title

The chart legend labels can configure the labels visible on legend element.

To change and apply own properties, you can invoke the **set** methods, as following:

```java
// sets text to the title of legend
chart.getOptions().getLegend().getTitle().setText("This is my legend title");
// sets padding to the title of legend and enables it
chart.getOptions().getLegend().getTitle().getPadding().set(5);
chart.getOptions().getLegend().getTitle().setDisplay(true);

Padding padding = chart.getOptions().getLegend().getTitle().getPadding();
boolean display = chart.getOptions().getLegend().getTitle().isDisplay();
```

The default values are set in global defaults options, see [default global legend title options](../defaults/DefaultsCharts#legend-title).

The following are the attributes that you can set:

| Name | Type | | Description
| :- | :- | :- 
| display | boolean | If `true`, the legend title is shown.
| padding | [Padding](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/configuration/Padding.html) | Number of pixels to add above and below the title text.<br/>See [padding documentation](Commons#padding) for more details.
| color | String - String[] - [IsColor](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/colors/IsColor.html) - [IsColor](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/colors/IsColor.html)[] | The color of the legend text title.<br/>See [default colors](../defaults/DefaultsCharts#commons-charts-options).
| font | [IsFont](https://pepstock-org.github.io/Charba/6.0/org/pepstock/charba/client/options/IsFont.html) | Font family of legend text title.<br/>See [Font](../defaults/DefaultsCharts#font).

## AtLeastOneDatasetHandler event handler

**Charba** provides a common implementation for legend click event handler to enable the control about how many data sets are hidden, in order to have at least 1 data set visible and avoid to have an empty chart.

To apply the event handler, you can set to the chart, as following:

```java
// adds handler
chart.addHandler(new AtLeastOneDatasetHandler(), LegendClickEvent.TYPE);
```
