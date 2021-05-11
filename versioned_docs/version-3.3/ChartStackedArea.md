---
id: ChartStackedArea
title: Stacked area chart
hide_title: true
sidebar_label: Stacked area
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Stacked Area chart

A stacked area chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets.

<img src={useBaseUrl('/img/area.png')} />

## Dataset

The stacked area chart allows a number of properties to be specified for each [stacked area dataset](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/StackedAreaDataset.html). These are used to set display properties for a specific dataset.

The following are the attributes that you can set:

| Name | Type | Callback | Description
| ---- | ---- | -------- | -----------
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | - | The fill color/pattern under the line.
| borderCapStyle | [CapStyle](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html) | - | Cap style of the line. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap)
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | - | The color of the line.
| borderDash | int[] | - | Length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| borderDashOffset | int | - | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | - | Line joint style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) 
| borderWidth | int | - | The width of the line in pixels.
| cubicInterpolationMode | [CubicInterpolationMode](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/CubicInterpolationMode.html) | - | Algorithm used to interpolate a smooth curve from the discrete data points.
| fill |  String - int - boolean - [IsFill](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/IsFill.html) | - | How to fill the area under the line. See [Filling modes](Colors#filling-modes)
| hidden | boolean | - | if the dataset will appear or not.
| hoverBackgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes |
| hoverBorderCapStyle | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes | The fill color/pattern under the line, when hovered.
| hoverBorderColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes | The color of the line, when hovered.
| hoverBorderDash | int[] | Yes | Length and spacing of dashes, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| hoverBorderDashOffset | int | Yes | Offset for line dashes, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| hoverBorderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | Yes | Line joint style, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) 
| hoverBorderWidth | int | Yes | The width of the line in pixels, when hovered.
| label | String | - | The label for the dataset which appears in the legend and tooltips. 
| lineTension | double | - | Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used.
| order | int | - | The drawing order of dataset. Also affects order for stacking, tooltip, and legend. Default is 0.
| pointBackgroundColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The fill color for points.
| pointBorderColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The border color for points.
| pointBorderWidth | int[] | Yes | The width of the point border in pixels.
| pointHitRadius | double[] | Yes | The pixel size of the non-displayed point that reacts to mouse events.
| pointHoverBackgroundColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | Point background color when hovered.
| pointHoverBorderColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | Point border color when hovered.
| pointHoverBorderWidth | int[] | Yes | Border width of point when hovered. 
| pointHoverRadius | double[] | Yes | The radius of the point when hovered.
| pointRadius | double[] | Yes | The radius of the point shape. If set to 0, the point is not rendered.
| pointStyle | [PointStyle](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html)[] | Yes | Style of the point.  
| pointRotation | double[] | Yes | the rotation of the point in degrees.
| showLine | boolean | - | If `false`, the line is not drawn for this dataset. 
| spanGaps | boolean | - | If `true`, lines will be drawn between points with no or null data. If `false`, points with `NaN` data will create a break in the line
| steppedLine | [SteppedLine](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/SteppedLine.html) | - | If the line is shown as a stepped line.
| type | [Type](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/Type.html) | - | The type of dataset based on type of chart.
| xAxisID | String | - | The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis. See [Scales](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID) object.
| yAxisID | String | - | The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis. See [Scales](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID) object.

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
StackedAreaChart chart = new StackedAreaChart();
// for GWT
// StackedAreaChartWidget chart = new StackedAreaChartWidget();
StackedAreaDataset dataset = chart.newDataset();
...
...
StackedAreaDataset datasetNew = new StackedAreaDataset();
...
chart.getData().setDatasets(dataset, datasetNew);
```

## Data structure

The data of a dataset for a stacked area chart are passed by an array or list of doubles and the x axis is generally a category. When a line chart is created with a category axis, the [labels property of the data object](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-) must be specified.

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

## Options

The stacked area chart specific [options implementation](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/StackedOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
StackedAreaChart chart = new StackedAreaChart();
// for GWT
// StackedAreaChartWidget chart = new StackedAreaChartWidget();
StackedOptions options = chart.getOptions();
```

The following are the attributes that you can set, on top of [common options](General) and [common elements](Configuration) for all charts:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| showLine | boolean | `true` | If `false`, the lines between points are not drawn. 
| spanGaps | boolean | `false` | If `false`, NaN data causes a break in the line.

## Scriptable options for dataset

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [charts definition](Charts#callbacks-on-datasets-options) session. 

```java
StackedAreaChart chart = new StackedAreaChart();
// for GWT
// StackedAreaChartWidget chart = new StackedAreaChartWidget();
StackedAreaDataset dataset = chart.newDataset();

dataset.setPointBackgroundColor(new BackgroundColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      // logic
      return color;
   }
});
dataset.setPointBorderColor(new BorderColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      // logic
      return color;
   }
});

dataset.setPointBorderWidth(new BorderWidthCallback() {
			
	@Override
	public Integer invoke(IsChart chart, ScriptableContext context) {
		// logic
		return borderWidth;
	}
});

// -------------
// HOVER
// -------------
dataset.setPointHoverBackgroundColor(new BackgroundColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      // logic
      return color;
   }
});
dataset.setPointHoverBorderColor(new BorderColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      // logic
      return color;
   }
});

dataset.setPointHoverBorderWidth(new BorderWidthCallback() {
			
	@Override
	public Integer invoke(IsChart chart, ScriptableContext context) {
		// logic
		return borderWidth;
	}
});

// -------------
// RADIUS
// -------------
dataset.setPointRadius(new RadiusCallback() {

	@Override
	public Double invoke(IsChart chart, ScriptableContext context) {
		// logic
		return radius;
	}
});
dataset.setPointHoverRadius(new RadiusCallback() {

	@Override
	public Double invoke(IsChart chart, ScriptableContext context) {
		// logic
		return radius;
	}
});
dataset.setPointHitRadius(new RadiusCallback() {

	@Override
	public Double invoke(IsChart chart, ScriptableContext context) {
		// logic
		return radius;
	}
});
// -------------
// Others
// -------------
dataset.setPointRotation(new RotationCallback() {

	@Override
	public Double invoke(IsChart chart, ScriptableContext context) {
		// logic
		return rotation;
	}
});
dataset.setPointStyle(new PointStyleCallback<PointStyle>() {

	@Override
	public PointStyle invoke(IsChart chart, ScriptableContext context) {
		// logic
		return pointStyle;
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
 