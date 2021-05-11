---
id: ChartDoughnut
title: Doughnut chart
hide_title: true
sidebar_label: Doughnut
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Doughnut chart

(quoted from [Doughnut chart](https://en.wikipedia.org/wiki/Pie_chart#Doughnut_chart) definition in Wikipedia)

A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included. Doughnut charts are similar to pie charts in that their aim is to illustrate proportions. This type of circular graph can support multiple statistics at once and it provides a better data intensity ratio to standard pie charts.

A doughnut charts are the same of pie charts and then divided into segments, the arc of each segment shows the proportional value of each piece of data.

They are excellent at showing the relational proportions between data.

<img src={useBaseUrl('/img/doughnut.png')} />

## Dataset

The doughnut chart allows a number of properties to be specified for each [doughnut dataset](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/DoughnutDataset.html). These are used to set display properties for a specific dataset.

The following are the attributes that you can set:

| Name | Type | Callback | Description
| ---- | ---- | -------- | -----------
| backgroundColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The fill color/pattern of the arcs in the dataset.
| borderColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The border color of the arcs in the dataset. 
| borderAlign | [BorderAlign](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/BorderAlign.html) | Yes | The borders alignment of arcs.
| borderWidth | int[] | Yes | The border width of the arcs in the dataset.
| hidden | boolean | - | if the dataset will appear or not.
| hoverBackgroundColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The fill color/pattern of the arcs when hovered. 
| hoverBorderColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The stroke color of the arcs when hovered.
| hoverBorderWidth | int[] | Yes | The stroke width of the arcs when hovered.
| label | String | - | The label for the dataset which appears in the legend and tooltips. 
| weight | double | - | The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
DoughnutChart chart = new DoughnutChart();
// for GWT widget
// DoughnutChartWidget chart = new DoughnutChartWidget();
DoughnutDataset dataset = chart.newDataset();
...
...
DoughnutDataset datasetNew = new DoughnutDataset();
...
chart.getData().setDatasets(dataset, datasetNew);
```

## Data structure

The data of a dataset for a doughnut chart is specified as a an array of numbers. Each point in the data array corresponds to the [label](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-) at the same index.

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

The doughnut chart defines specific [options implementation](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/DoughnutOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
DoughnutChart chart = new DoughnutChart();
// for GWT widget
// DoughnutChartWidget chart = new DoughnutChartWidget();
DoughnutOptions options = chart.getOptions();
```

The following are the attributes that you can set, on top of [common options](General) and [common elements](Configuration) for all charts:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| circumference | double | 2 * Math.PI | Sweep to allow arcs to cover
| cutoutPercentage | double | 50 | The percentage of the chart that is cut out of the middle. 
| rotation | double | -0.5 * Math.PI | Starting angle to draw arcs from.

## Scriptable options for dataset

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [charts definition](Charts#callbacks-on-datasets-options) session. 

```java
DoughnutChart chart = new DoughnutChart();
// for GWT widget
// DoughnutChartWidget chart = new DoughnutChartWidget();
DoughnutDataset dataset = chart.newDataset();

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

The [backgroundColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html) callback can provide one of the following object types:

 * [Pattern](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)
 * [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
 * [CanvasPatternItem](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasPatternItem.html)
 * [CanvasGradientItem](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html)

The [borderColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html) callback can provide one of the following object types:
 * [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
 * [CanvasGradientItem](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/dom/elements/CanvasGradientItem.html)
