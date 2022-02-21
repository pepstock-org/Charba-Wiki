---
id: ChartBubble
title: Bubble chart
hide_title: true
sidebar_label: Bubble
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Bubble chart

(quoted from [Bubble chart](https://en.wikipedia.org/wiki/Bubble_chart) definition in Wikipedia)

A bubble chart is a type of chart that displays three dimensions of data. Each entity with its triplet (x, y, r) of associated data is plotted as a disk that expresses two of the vi values through the disk's xy location and the third through its size.

Bubble charts can be considered a variation of the scatter plot, in which the data points are replaced with bubbles.

A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles

<a href="https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=bubble"><img src={useBaseUrl('/img/bubble.png')} /></a>


Programmatically, you could use a bubble chart as following:

```java
// creates the chart	
BubbleChart chart = new BubbleChart();
// adds to DOM
component.add(chart);
...
// example for Elemental2
// gets the chart instance as DOM element
Element element = chart.getChartElement().as();
// adds to DOM
DomGlobal.document.body.appendChild(element);
```

By [UIBinder](http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html) (**ONLY for GWT**), you could use a bubble chart as following:

```xml
<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
   xmlns:g="urn:import:com.google.gwt.user.client.ui"
   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">

   <g:HTMLPanel  width="100%">
      ....
      <c:BubbleChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

## Dataset

The bubble chart allows to define the data and a number of properties, used to display the data, by [bubble dataset](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/BubbleDataset.html).

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
// creates the chart
BubbleChart chart = new BubbleChart();
// creates the dataset
BubbleDataset dataset = chart.newDataset();
// sets the option
dataset.setBackgroundColor(HtmlColor.RED);
...
// creates the dataset
BubbleDataset datasetNew = new BubbleDataset();
// sets the option
datasetNew.setBackgroundColor(HtmlColor.RED);
...
// sets the datasets to the chart
chart.getData().setDatasets(dataset, datasetNew);
```

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| backgroundColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The bubble background color. 
| borderColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The bubble border color. 
| borderWidth | int[] | [Yes](#scriptable) | The bubble border width (in pixels).
| clip | boolean - double - [Clip](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/data/Clip.html) | - | How to clip relative to chart area. Positive value allows overflow, negative value clips that many pixels inside chart area.
| drawActiveElementsOnTop | boolean | [Yes](#scriptable) | Draw the active bubbles of a dataset over the other bubbles of the dataset.
| hitRadius | double[] | [Yes](#scriptable) | The bubble additional radius for hit detection (in pixels).
| hoverBackgroundColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The bubble background color when hovered.
| hoverBorderColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The bubble border color hovered.
| hoverBorderWidth | int[] | [Yes](#scriptable) | The bubble border width when hovered (in pixels) .
| hoverRadius | double[] | [Yes](#scriptable) | The bubble additional radius when hovered (in pixels).
| label | String | - | The label for the dataset which appears in the legend and tooltips.  
| order | int | - | The drawing order of dataset. Also affects order for stacking, tooltips, and legend.
| normalized | boolean | - | If `true`, you provide data with indices that are unique, sorted, and consistent across data sets and provide the normalized.
| pointStyle | [PointStyle](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/PointStyle.html)[] - [Img](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/dom/elements/Img.html)[]  - [Canvas](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/dom/elements/Canvas.html)[] | [Yes](#scriptable) | The bubble shape style.
| parsing | boolean | - | If `false`, the data set parsing is disable. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.
| radius | double[] | [Yes](#scriptable) | The bubble radius (in pixels).
| rotation | double[] | [Yes](#scriptable) | The rotation of the point in degrees.

### General

The general options for a bubble dataset can control behaviors not related to styling or interactions and they are the following:

| Name | Defaults | Description
| :- | :- | :-
| clip | Undefined.DOUBLE | How to clip relative to chart area.
| drawActiveElementsOnTop | `true` | Draw the active bubbles of a dataset over the other bubbles of the dataset.
| label | `null` | The label for the dataset which appears in the legend and tooltips. 
| normalized | `false` | If `true`, you provide data with indices that are unique, sorted, and consistent across data sets and provide the normalized.
| order | 0 | The drawing order of dataset. Also affects order for stacking, tooltips, and legend.
| parsing | `true` | If `false`, the data set parsing is disable. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.

### Styling

The style of each point of the dataset can be configured by the following properties:

| Name | Description
| :- | :-
| backgroundColor | The bubble background color.
| borderColor | The bubble border color. 
| borderWidth | The bubble border width (in pixels).
| hitRadius | The bubble additional radius for hit detection (in pixels).
| normalized | `false` | If `true`, you provide data with indices that are unique, sorted, and consistent across data sets and provide the normalized.
| pointStyle | The bubble shape style.
| parsing | `true` | If `false`, the data set parsing is disable. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.
| radius | The bubble radius (in pixels).
| rotation | The rotation of the point in degrees.

All above options have got the fallback to the associated [Point](../configuration/Elements#point) elements, retrievable by the following statements:

```java
// from chart instance
Point point = chart.getOptions().getElements().getPoint();
// sets options for all line datasets of the chart
point.setRadius(6);
...
// from defaults
Point defaultPoint  = Defaults.get().getGlobal().getElements().getPoint();
// sets options for all line datasets of all charts
defaultPoint.setRadius(6);
```

### Interactions

The interaction with each point can be controlled with the following properties:

| Name | Description
| :- | :- 
| hoverBackgroundColor | The bubble background color when hovered.
| hoverBorderColor | The bubble border color when hovered.
| hoverBorderWidth | The bubble border width (in pixels) when hovered. 
| hoverRadius | The bubble radius (in pixels) when hovered.

All above options have got the fallback to the associated [Point](../configuration/Elements#point) elements, retrievable by the following statements:

```java
// from chart instance
Point point = chart.getOptions().getElements().getPoint();
// sets options for all line datasets of the chart
point.setRadius(6);
...
// from defaults
Point defaultPoint  = Defaults.get().getGlobal().getElements().getPoint();
// sets options for all line datasets of all charts
defaultPoint.setRadius(6);
```

### Scriptable

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

```java
// creates chart
BubbleChart chart = new BubbleChart();
// creates dataset
BubbleDataset dataset = chart.newDataset();
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
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html)
| borderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;DatasetContext&gt; | int
| drawActiveElementsOnTop | [DrawActiveElementsOnTopCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/DrawActiveElementsOnTopCallback.html) | boolean
| hitRadius | [RadiusCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/RadiusCallback.html)&lt;DatasetContext&gt; | double
| hoverBackgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderWidth | [WidthCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;DatasetContext&gt; | int
| pointStyle | [PointStyleCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/PointStyleCallback.html)&lt;DatasetContext&gt; | [PointStyle](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/enums/PointStyle.html) - [Img](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/dom/elements/Canvas.html)
| radius | [RadiusCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/RadiusCallback.html)&lt;DatasetContext&gt; | double
| rotation | [RotationCallback](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/callbacks/RotationCallback.html)&lt;DatasetContext&gt; | double

## Data structure

Bubble chart datasets need to contain a data array of points, each point represented by an object containing `x`, `y` and `r`(radius) properties.

```java
// creates a datapoint
DataPoint dp1 = new DataPoint();
dp1.setX(10);
dp1.setY(20);
// Bubble radius in pixels (not scaled).
dp1.setR(1);
// sets data by an array of datapoints
dataset.setDataPoint(dp1);
```

:::caution
**radius** options is not scaled by the chart, it is the raw radius in pixels of the bubble that is drawn.
:::

## Options

The bubble chart defines specific [options implementation](https://pepstock-org.github.io/Charba/5.1/org/pepstock/charba/client/configuration/BubbleOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
// creates chart
BubbleChart chart = new BubbleChart();
// gets the chart options
BubbleOptions options = chart.getOptions();
// sets option
options.setResponsive(true);
```
