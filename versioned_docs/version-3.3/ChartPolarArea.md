---
id: ChartPolarArea
title: PolarArea chart
hide_title: true
sidebar_label: PolarArea
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## PolarArea chart

(quoted from [Polar area chart](https://en.wikipedia.org/wiki/Pie_chart#Polar_area_diagram) definition in Wikipedia)

The polar area chart is similar to a usual pie chart, except sectors have equal angles and differ rather in how far each sector extends from the center of the circle. The polar area chart is used to plot cyclic phenomena.

Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.

This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context.

<img src={useBaseUrl('/img/polar.png')} />

## Dataset

The polar area chart allows a number of properties to be specified for each [polar area dataset](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/PolarAreaDataset.html). These are used to set display properties for a specific dataset. 

The following are the attributes that you can set:

| Name | Type | Callback | Description
| ---- | ---- | -------- | -----------
| backgroundColor | String[] - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The fill color/pattern of the arcs in the dataset.
| borderColor | String[] - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The border color of the arcs in the dataset. 
| borderAlign | [BorderAlign](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderAlign.html) | Yes | The borders alignment of arcs.
| borderWidth | int[] | Yes | The border width of the arcs in the dataset.
| hidden | boolean | - | if the dataset will appear or not.
| hoverBackgroundColor | String[] - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The fill color/pattern of the arcs when hovered. 
| hoverBorderColor | String[] - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The stroke color of the arcs when hovered.
| hoverBorderWidth | int[] | Yes | The stroke width of the arcs when hovered.
| label | String | - | The label for the dataset which appears in the legend and tooltips. 

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
PolarAreaChart chart = new PolarAreaChart();
// for GWT
// PolarAreaChartWidget chart = new PolarAreaChartWidget();
PolarAreaDataset dataset = chart.newDataset();
...
...
PolarAreaDataset datasetNew = new PolarAreaDataset();
...
chart.getData().setDatasets(dataset, datasetNew);
```

## Data structure

The data of a dataset for a polar area chart is specified as a an array of numbers. Each point in the data array corresponds to the [label](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-) at the same index on the axis.

```java
...
dataset.setData(1,2,3,4,6);
...
List<Double> list = new LinkedList<>();
list.add(1);
list.add(2);
list.add(3);
....
dataset.setData(list);
```

To provide context of what each point means, we include an array of strings that show around each point in the chart.

```java
...
chart.getData().setLabels("label1", "label2");
...
```

## Options

The polar area chart defines specific [options implementation](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/PolarAreaOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
PolarAreaChart chart = new PolarAreaChart();
// for GWT
// PolarAreaChartWidget chart = new PolarAreaChartWidget();
PolarAreaOptions options = chart.getOptions();
```

## Scriptable options for dataset

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [charts definition](Charts#callbacks-on-datasets-options) session. 

```java
PolarAreaChart chart = new PolarAreaChart();
// for GWT
// PolarAreaChartWidget chart = new PolarAreaChartWidget();
PolarAreaDataset dataset = chart.newDataset();

dataset.setBackgroundColor(new BackgroundColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      // logic
      return color;
   }
});
dataset.setBorderColor(new BorderColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      // logic
      return color;
   }
});
dataset.setBorderWidth(new BorderWidthCallback() {
			
	@Override
	public Integer invoke(IsChart chart, ScriptableContext context) {
		// logic
		return borderWidth;
	}
});
dataset.setBorderAlign(new BorderAlignCallback() {
			
	@Override
	public BorderSkipped invoke(IsChart chart, ScriptableContext context) {
		// logic
		return borderAlign;
	}
});
// -------------
// HOVER
// -------------
dataset.setHoverBackgroundColor(new BackgroundColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      // logic
      return color;
   }
});
dataset.setHoverBorderColor(new BorderColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      // logic
      return color;
   }
});
dataset.setHoverBorderWidth(new BorderWidthCallback() {
			
	@Override
	public Integer invoke(IsChart chart, ScriptableContext context) {
		// logic
		return borderWidth;
	}
});
```

The [backgroundColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html) callback can provide one of the following object types:

 * [Pattern](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)
 * [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
 * [CanvasPatternItem](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html)
 * [CanvasGradientItem](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html)

The [borderColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html) callback can provide one of the following object types:
 * [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
 * [CanvasGradientItem](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html)
