---
id: ChartPie
title: Pie chart
hide_title: true
sidebar_label: Pie
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Pie chart

(quoted from [Pie chart](https://en.wikipedia.org/wiki/Pie_chart) definition in Wikipedia)

A pie chart is a circular statistical graphic, which is divided in the slices to illustrate numerical proportion. In a pie chart, the arc length of each slice (and consequently its central angle and area), is proportional to the quantity it represents.

A pie charts are divided in the segments, the arc of each segment shows the proportional value of each piece of data.

They are excellent at showing the relational proportions between data.

<img src={useBaseUrl('/img/pie.png')} />

## Dataset

The pie chart allows a number of properties to be specified for each [pie dataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/PieDataset.html). These are used to set display properties for a specific dataset.

The following are the attributes that you can set:

| Name | Type | Callback | Description
| ---- | ---- | -------- | -----------
| backgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The fill color/pattern of the arcs in the dataset.
| borderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The border color of the arcs in the dataset. 
| borderWidth | int[] | Yes | The border width of the arcs in the dataset.
| borderAlign | [BorderAlign](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderAlign.html) | Yes | The borders alignment of arcs.
| hidden | boolean | - | if the dataset will appear or not.
| hoverBackgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The fill color/pattern of the arcs when hovered. 
| hoverBorderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The stroke color of the arcs when hovered.
| hoverBorderWidth | int[] | Yes | The stroke width of the arcs when hovered.
| label | String | - | The label for the dataset which appears in the legend and tooltips. 
| weight | double | - | The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
PieChart chart = new PieChart();
// for GWT
// PieChartWidget chart = new PieChartWidget();
PieDataset dataset = chart.newDataset();
...
...
PieDataset datasetNew = new PieDataset();
...
chart.getData().setDatasets(dataset, datasetNew);
```


## Data structure

The data of a dataset for a pie chart is specified as a an array of numbers. Each point in the data array corresponds to the [label](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-) at the same index.

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

The pie chart defines specific [options implementation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/PieOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
PieChart chart = new PieChart();
// for GWT
// PieChartWidget chart = new PieChartWidget();
PieOptions options = chart.getOptions();
```

The following are the attributes that you can set, on top of [common options](General) and [common elements](Configuration) for all charts:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| circumference | double | 2 * Math.PI | Sweep to allow arcs to cover
| cutoutPercentage | double | 0 | The percentage of the chart that is cut out of the middle. 
| rotation | double | -0.5 * Math.PI | Starting angle to draw arcs from.

## Scriptable options for dataset

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [charts definition](Charts#callbacks-on-datasets-options) session. 

```java
PieChart chart = new PieChart();
// for GWT
// PieChartWidget chart = new PieChartWidget();
PieDataset dataset = chart.newDataset();

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

The [backgroundColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html) callback can provide one of the following object types:

 * [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)
 * [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
 * [CanvasPatternItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html)
 * [CanvasGradientItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html)

The [borderColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html) callback can provide one of the following object types:
 * [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
 * [CanvasGradientItem](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html)
