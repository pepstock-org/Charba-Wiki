---
id: ChartStackedBar
title: Stacked bar chart
hide_title: true
sidebar_label: Stacked bar
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Stacked Bar chart

Stacked bar charts can be configured like bar charts and changes the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces.

<img src={useBaseUrl('/img/stackbar.png')} />

Programmatically, you could use a bar chart as following:

```java
// creates the chart	
StackedBarChart chart = new StackedBarChart();
// adds to DOM
component.add(chart);
...
// example for Elemental2
// gets the chart instance as DOM element
Element element = chart.getChartElement().as();
// adds to DOM
DomGlobal.document.body.appendChild(element);
```

By [UIBinder](http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html) (**ONLY for GWT**), you could use a bar chart as following:

```xml
<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
   xmlns:g="urn:import:com.google.gwt.user.client.ui"
   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">

   <g:HTMLPanel  width="100%">
      ....
      <c:StackedBarChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

## Dataset

The stacked bar chart allows a number of properties to be specified for each [stacked bar dataset](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/StackedBarDataset.html). These are used to set display properties for a specific dataset.

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
// creates the chart
StackedBarChart chart = new StackedBarChart();
// creates the dataset
StackedBarDataset dataset = chart.newDataset();
// sets the option
dataset.setBackgroundColor(HtmlColor.RED);
...
// creates the dataset
StackedBarDataset datasetNew = new StackedBarDataset();
// sets the option
datasetNew.setBackgroundColor(HtmlColor.RED);
...
// sets the datasets to the chart
chart.getData().setDatasets(dataset, datasetNew);
```

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| base | double - double[] | [Yes](#scriptable) | Base value for the bar in data units along the value axis.
| backgroundColor | String[] - [IsColor](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) |The fill color/pattern of the bar.
| barPercentage | double | - | The percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.
| barThickness | int | - | The width of each bar in pixels.
| borderColor | String[] - [IsColor](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The color of the bar border. 
| borderSkipped | [BorderSkipped](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/BorderSkipped.html) | [Yes](#scriptable) | Which edge to skip drawing the border for.
| borderRadius | int[] - [BarBorderRadius](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderRadius.html)[] | [Yes](#scriptable) | The bar border radius (in pixels).
| borderWidth | int[] - [BarBorderWidth](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderWidth.html)[] | [Yes](#scriptable) | The stroke width of the bar in pixels.
| categoryPercentage | double | - | The percent (0-1) of the available width each category should be within the sample width.
| clip | double - [Clip](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/Clip.html) | - | How to clip relative to chart area. Positive value allows overflow, negative value clips that many pixels inside chart area. When set to 0 means clip at chart area. 
| enableBorderRadius| boolean | - | If `true`, it only shows the border radius of a bar when the bar is at the end of the stack.
| grouped | boolean | - | Should the bars be grouped on index axis.<br/>When `true`, all the datasets at same index value will be placed next to each other centering on that index value.<br/>When `false`, each bar is placed on its actual index-axis value.
| hoverBackgroundColor | String[] - [IsColor](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The fill color/pattern of the bars when hovered.
| hoverBorderColor | String[] - [IsColor](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The stroke color of the bars when hovered.
| hoverBorderWidth | int[] | [Yes](#scriptable) | The stroke width of the bars when hovered.
| hoverBorderRadius | int[] - [BarBorderRadius](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderRadius.html)[] | [Yes](#scriptable) | The bar border radius (in pixels) when hovered.
| indexAxis | [IndexAxis](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/IndexAxis.html) | - | The base axis of the dataset. 'IndexAxis.X' for vertical bars and 'IndexAxis.Y' for horizontal bars.
| label | String | - | The label for the dataset which appears in the legend and tooltips. 
| maxBarThickness | int | - | The maximum bar thickness, to ensure that bars are not sized thicker than this.
| minBarLength | int | - | Set this to ensure that bars have a minimum length in pixels.
| order | int | - | The drawing order of dataset. Also affects order for stacking, tooltip, and legend.
| pointStyle | [PointStyle](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/PointStyle.html) - [Img](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/dom/elements/Img.html) | [Yes](#scriptable) | Point style for legend.
| xAxisID | String | - | The ID of the x axis to plot this dataset on.
| yAxisID | String | - | The ID of the y axis to plot this dataset on.

### General

The general options for a stacked bar dataset can control behaviors not related to styling or interactions and they are the following:

| Name | Defaults | Description
| :- | :- | :-
| base | [] | Base value for the bar in data units along the value axis.
| clip | Undefined.DOUBLE | How to clip relative to chart area. 
| indexAxis | IndexAxis.X | The base axis of the dataset.
| label | `null` | The label for the dataset which appears in the legend and tooltips. 
| order | 0 | The drawing order of dataset. Also affects order for stacking, tooltips, and legend.
| xAxisID | [DefaultScaleId.X](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/DefaultScaleId.html) | The ID of the x axis to plot this dataset on.
| yAxisID | [DefaultScaleId.Y](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/DefaultScaleId.html) | The ID of the y axis to plot this dataset on.

### Styling

The style of each bar of the dataset can be configured by the following properties:

| Name | Description
| :- | :-
| backgroundColor | The fill color of the bar.
| borderColor |  The color of the bar border. 
| borderSkipped | Which edge to skip drawing the border for.
| borderRadius | The bar border radius (in pixels).
| borderWidth | The stroke width of the bar in pixels.
| enableBorderRadius| If `true`, it only shows the border radius of a bar when the bar is at the end of the stack.
| pointStyle | Point style for legend.

All above options have got the fallback to the associated [Bar](../configuration/Elements#bar) element, retrievable by the following statements:

```java
// from chart instance
Bar bar = chart.getOptions().getElements().getBar();
// sets options for all bar datasets of the chart
bar.setBorderRadius(6);
...
// from defaults
Bar defaultBar  = Defaults.get().getGlobal().getElements().getBar();
// sets options for all bar datasets of all charts
defaultBar.setBorderRadius(6);
```

### Interactions

The interactions can change the styling of each bar of the dataset which can set by the following properties:

| Name | Description
| :- | :-
| hoverBackgroundColor | The fill color of the bars when hovered.
| hoverBorderColor | The stroke color of the bars when hovered.
| hoverBorderRadius | The bar border radius (in pixels) when hovered.
| hoverBorderWidth | The stroke width of the bars when hovered.

All above options have got the fallback to the associated [Bar](../configuration/Elements#bar) elements, retrievable by the following statements:

```java
// from chart instance
Bar bar = chart.getOptions().getElements().getBar();
// sets options for all bar datasets of the chart
bar.setHoverBorderRadius(6);
...
// from defaults
Bar defaultBar  = Defaults.get().getGlobal().getElements().getBar();
// sets options for all bar datasets of all charts
defaultBar.setHoverBorderRadius(6);
```

### Scriptable

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

```java
// creates chart
BarChart chart = new BarChart();
// creates dataset
BarDataset dataset = chart.newDataset();
// sets the option by a callback 
dataset.setBackgroundColor(new ColorCallback<DatasetContext>(){

   @Override
   public IsColor invoke(DatasetContext context){
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| base | [BaseCallback](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/BaseCallback.html) | double 
| backgroundColor | [ColorCallback](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html)
| borderColor | [ColorCallback](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html)
| borderSkipped | [BorderSkippedCallback](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/BorderSkippedCallback.html) | [BorderSkipped](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/BorderSkipped.html) 
| borderRadius | [BorderRadiusCallback](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html) | int - [BarBorderRadius](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderRadius.html)
| borderWidth | [BarBorderWidthCallback](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/BarBorderWidthCallback.html) | int - [BarBorderWidth](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderWidth.html)
| hoverBackgroundColor | [ColorCallback](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderColor | [ColorCallback](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderWidth | [BarBorderWidthCallback](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/BarBorderWidthCallback.html) | int - [BarBorderWidth](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderWidth.html)
| hoverBorderRadius | [BorderRadiusCallback](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html) | int - [BarBorderRadius](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/BarBorderRadius.html)
| pointStyle | [PointStyleCallback](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/callbacks/PointStyleCallback.html) | [PointStyle](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/enums/PointStyle.html) - [Img](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/dom/elements/Img.html)

## Data structure

When the data is an array or list of doubles, the x axis is generally a category. The points are placed onto the axis using their position in the array. When a stacked bar chart is created with a category axis, the [labels property of the data object](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-) must be specified.

```java
// sets data as an array of doubles
dataset.setData(1,2,3,4,6);

// sets data as a list of double
List<Double> list = new LinkedList<>();
list.add(1);
list.add(2);
list.add(3);
dataset.setData(list);
```

### Floating bars

You can also specify the dataset for a bar chart as list of floating bar data or by an array of arrays of doubles. This will force rendering of bars with the start and the end point of a bar respectively.

<img src={useBaseUrl('/img/floatingStackedBar.png')} />

```java
...
// set in the constructor
FloatingData fd1 = new FloatingData(10, 30);
// set by method to update values
FloatingData fd2 = new FloatingData();
fd2.setValues(-10, 60)
// stores the data to dataset
dataset.setFloatingData(fd1, fd2);
```

## Options

The stacked bar chart specific [options implementation](https://www.pepstock.org/Charba/4.0/org/pepstock/charba/client/configuration/StackedOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

To set the options at chart level, you can get a typed object accordingly with the chart type.

```java
// creates the chart
StackedBarChart chart = new StackedBarChart();
// gets the chart options
StackedOptions options = chart.getOptions();
// sets options
options.setResponsive(true);
```
