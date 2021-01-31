---
id: ChartHorizontalBar
title: Horizontal bar chart
hide_title: true
sidebar_label: Horizontal bar
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Horizontal Bar chart

A horizontal bar chart is a variation on a bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side. 

<img src={useBaseUrl('/img/hbar.png')} />

## Dataset

The bar chart allows a number of properties to be specified for each [horizontal bar dataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/HorizontalBarDataset.html). These are used to set display properties for a specific dataset.

The following are the attributes that you can set:

| Name | Type | Callback | Description
| ---- | ---- | -------- | -----------
| backgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[]- [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The fill color/pattern of the bar
| borderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The color of the bar border. 
| borderSkipped | [BorderSkipped](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderSkipped.html) | Yes | Which edge to skip drawing the border for.
| borderWidth | int[] - [BarBorderWidth](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/BarBorderWidth.html) | Yes | The stroke width of the bar in pixels.
| hidden | boolean | - | if the dataset will appear or not.
| hoverBackgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | - | The fill color/pattern of the bars when hovered.
| hoverBorderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | - | The stroke color of the bars when hovered.
| hoverBorderWidth | int[] | - | The stroke width of the bars when hovered.
| label | String | - | The label for the dataset which appears in the legend and tooltips. 
| order | int | - | The drawing order of dataset. Also affects order for stacking, tooltip, and legend. Default is 0.
| type | [Type](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Type.html) | - | The type of dataset based on type of chart.
| xAxisID | String | - | The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis. See [Scales](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID) object.
| yAxisID | String | - | The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis. See [Scales](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID) object.

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
HorizontalBarChart chart = new HorizontalBarChart();
// for GWT
// HorizontalBarChartWidget chart = new HorizontalBarChartWidget();
HorizontalBarDataset dataset = chart.newDataset();
...
...
HorizontalBarDataset datasetNew = new BarDataset();
...
chart.getData().setDatasets(dataset, datasetNew);
```

## Data structure

The data of a dataset for an horizontal bar chart can be passed in two formats.

#### Data as doubles

When the data is an array or list of doubles, the x axis is generally a category. The points are placed onto the axis using their position in the array. When an horizontal bar chart is created with a category axis, the [labels property of the data object](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-) must be specified.

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

#### Data as DataPoint

You can also specify the dataset when using the time series charts. Each data point is specified using an object containing `y` and `x` (as time type) properties for time series.

```java
...
DataPoint dp1 = new DataPoint();
dp1.setY(10);
dp1.setX(new Date());
   
DataPoint dp2 = new DataPoint();
dp2.setY(30);
dp2.setX(new Date());
   
dataset.setDataPoint(dp1, dp2);
...
```

#### Floating bars

You can also specify the dataset for a bar chart as list of floating bar data or by an array of arrays of doubles. This will force rendering of bars with the start and the end point of a bar respectively.

<img src={useBaseUrl('/img/floatingHorizontalBar.png')} />

```java
...
// set in the constructor
FloatingData fd1 = new FloatingData(10, 30);
// set by method to update values
FloatingData fd2 = new FloatingData();
fd2.setValues(-10, 60)

dataset.setFloatingData(fd1, fd2);
...
```

## Options

The horizontal bar chart defines specific [options implementation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/BarOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
HorizontalBarChart chart = new HorizontalBarChart();
// for GWT
// HorizontalBarChartWidget chart = new HorizontalBarChartWidget();
BarOptions options = chart.getOptions();
```

## Scriptable options for dataset

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [charts definition](Charts#callbacks-on-datasets-options) session. 

```java
HorizontalBarChart chart = new HorizontalBarChart();
// for GWT
// HorizontalBarChartWidget chart = new HorizontalBarChartWidget();
HorizontalBarDataset dataset = chart.newDataset();

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
dataset.setBorderSkipped(new BorderSkippedCallback() {
			
	@Override
	public BorderSkipped invoke(IsChart chart, ScriptableContext context) {
		// logic
		return borderSkipped;
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
