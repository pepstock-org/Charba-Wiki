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

<img src={useBaseUrl('/img/bubble.png')} />

## Dataset

The bubble chart allows a number of properties to be specified for each [bubble dataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/BubbleDataset.html). These are used to set display properties for a specific dataset. For example, the color of the bubbles is generally set this way.

The following are the attributes that you can set:

| Name | Type | Callback | Description
| ---- | ---- | -------- | -----------
| backgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | bubble background color 
| borderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | bubble border color 
| borderWidth | int[] | Yes | bubble border width (in pixels)
| hidden | boolean | - | if the dataset will appear or not.
| hitRadius | double[] | Yes | bubble additional radius for hit detection (in pixels)
| hoverBackgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | bubble background color when hovered
| hoverBorderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | bubble border color hovered
| hoverBorderWidth | int[] | Yes | bubble border width when hovered (in pixels) 
| hoverRadius | double[] | Yes | bubble additional radius when hovered (in pixels)
| label | String | - | The label for the dataset which appears in the legend and tooltips.  
| order | int | - | The drawing order of dataset. Also affects order for stacking, tooltip, and legend. Default is 0.
| pointStyle | PointStyle[] | Yes | bubble shape style
| radius | double[] | Yes | bubble radius (in pixels) 
| rotation | double[] | Yes | the rotation of the point in degrees.

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
BubbleChart chart = new BubbleChart();
// for GWT widget
// BubbleChartWidget chart = new BubbleChartWidget();
BubbleDataset dataset = chart.newDataset();
...
...
BubbleDataset datasetNew = new BubbleDataset();
...
chart.getData().setDatasets(dataset, datasetNew);
```

## Data structure

Bubble chart datasets need to contain a data array of points, each points represented by an object containing containing `x`, `y` and `r`(radius) properties.

```java
...
DataPoint dp1 = new DataPoint();
dp1.setX(10);
dp1.setY(20);
// Bubble radius in pixels (not scaled).
dp1.setR(1);

dataset.setDataPoint(dp1);
...
```

**Important**: the radius property is not scaled by the chart, it is the raw radius in pixels of the bubble that is drawn.

## Options

The bubble chart specific [options implementation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/BubbleOptions.html) to be configured These options are merged with the global chart configuration options to form the options passed to the chart.

```java
BubbleChart chart = new BubbleChart();
// for GWT widget
// BubbleChartWidget chart = new BubbleChartWidget();
BubbleOptions options = chart.getOptions();
```

## Scriptable options for dataset

Scriptable options at dataset level also accept a callback which is called for each of the underlying data values. See more details in [charts definition](Charts#callbacks-on-datasets-options) session. 

```java
BubbleChart chart = new BubbleChart();
// for GWT widget
// BubbleChartWidget chart = new BubbleChartWidget();
BubbleDataset dataset = chart.newDataset();

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
// -------------
// RADIUS
// -------------
dataset.setRadius(new RadiusCallback() {

	@Override
	public Double invoke(IsChart chart, ScriptableContext context) {
		// logic
		return radius;
	}
});
dataset.setHoverRadius(new RadiusCallback() {

	@Override
	public Double invoke(IsChart chart, ScriptableContext context) {
		// logic
		return radius;
	}
});
dataset.setHitRadius(new RadiusCallback() {

	@Override
	public Double invoke(IsChart chart, ScriptableContext context) {
		// logic
		return radius;
	}
});
// -------------
// Others
// -------------
dataset.setRotation(new RotationCallback() {

	@Override
	public Double invoke(IsChart chart, ScriptableContext context) {
		// logic
		return rotation;
	}
});
dataset.setPointStyle(new PointStyleCallback() {

	@Override
	public PointStyle invoke(IsChart chart, ScriptableContext context) {
		// logic
		return pointStyle;
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
