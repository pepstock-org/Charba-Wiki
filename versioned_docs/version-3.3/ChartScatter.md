---
id: ChartScatter
title: Scatter chart
hide_title: true
sidebar_label: Scatter
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Scatter chart

(quoted from [Scatter chart](https://en.wikipedia.org/wiki/Scatter_plot) definition in Wikipedia)

A scatter chart is a type of plot or mathematical diagram using Cartesian coordinates to display values for typically two variables for a set of data. If the points are color-coded, one additional variable can be displayed. The data are displayed as a collection of points, each having the value of one variable determining the position on the horizontal axis and the value of the other variable determining the position on the vertical axis.

Scatter charts are based on basic line charts with the x axis changed to a linear axis. To use a scatter chart, data must be passed as objects containing X and Y properties.

<img src={useBaseUrl('/img/scatter.png')} />

## Dataset

The scatter chart allows a number of properties to be specified for each [scatter dataset](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/data/ScatterDataset.html). These are used to set display properties for a specific dataset.

The following are the attributes that you can set:

| Name | Type | Callback | Description
| ---- | ---- | -------- | -----------
| backgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes | The fill color/pattern under the line.
| borderCapStyle | [CapStyle](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html) | Yes | Cap style of the line. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap)
| borderColor | String - [IsColor](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes | The color of the line.
| borderDash | int[] | Yes | Length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| borderDashOffset | int | Yes | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderJoinStyle | [JoinStyle](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | Yes | Line joint style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) 
| borderWidth | int | - | The width of the line in pixels.
| cubicInterpolationMode | [CubicInterpolationMode](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/CubicInterpolationMode.html) | Yes | Algorithm used to interpolate a smooth curve from the discrete data points.
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
| showLine | boolean | - | If `false`, the line is not drawn for this dataset. Initial value is `false`. 
| spanGaps | boolean | - | If `true`, lines will be drawn between points with no or null data. If `false`, points with `NaN` data will create a break in the line
| steppedLine | [SteppedLine](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/enums/SteppedLine.html) | - | If the line is shown as a stepped line.
| xAxisID | String | - | The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis. See [Scales](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID) object.
| yAxisID | String | - | The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis. See [Scales](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID) object.

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
ScatterChart chart = new ScatterChart();
// for GWT
// ScatterChartWidget chart = new ScatterChartWidget();
ScatterDataset dataset = chart.newDataset();
...
...
ScatterDataset datasetNew = new ScatterDataset();
...
chart.getData().setDatasets(dataset, datasetNew);
```


## Data structure

Unlike the line chart where data can be supplied in two different formats, the scatter chart only accepts data in a point format. Each data point is specified using an object containing `x` and `y` properties.

```java
...
DataPoint dp1 = new DataPoint();
dp1.setX(10);
dp1.setY(20);
   
DataPoint dp2 = new DataPoint();
dp2.setX(30);
dp2.setY(40);
   
dataset.setDataPoint(dp1, dp2);
...
```

## Options

The scatter chart defines specific [options implementation](https://pepstock-org.github.io/Charba/3.3/org/pepstock/charba/client/configuration/ScatterOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
ScatterChart chart = new ScatterChart();
// for GWT
// ScatterChartWidget chart = new ScatterChartWidget();
ScatterOptions options = chart.getOptions();
```

The following are the attributes that you can set, on top of [common options](General) and [common elements](Configuration) for all charts:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| showLine | boolean | `true` | If `false`, the lines between points are not drawn. 
| spanGaps | boolean | `false` | If `false`, NaN data causes a break in the line.

## Scriptable options for dataset

Scriptable options at dataset level also accept a callback which is called for each of the underlying data values. See more details in [charts definition](Charts#callbacks-on-datasets-options) session. 

```java
ScatterChart chart = new ScatterChart();
// for GWT
// ScatterChartWidget chart = new ScatterChartWidget();
ScatterDataset dataset = chart.newDataset();

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
dataset.setBorderCapStyle(new BorderCapStyleCallback() {
			
	@Override
	public BorderCapStyle invoke(IsChart chart, ScriptableContext context) {
		// logic
		return borderCapStyle;
	}
});
dataset.setBorderDash(new BorderDashCallback() {
			
	@Override
	public List<Integer> invoke(IsChart chart, ScriptableContext context) {
		// logic
		return borderDash;
	}
});
dataset.setBorderDashOffset(new BorderDashOffsetCallback() {
			
	@Override
	public int invoke(IsChart chart, ScriptableContext context) {
		// logic
		return borderDashOffset;
	}
});
dataset.setBorderJoinStyle(new BorderJoinStyleCallback() {
			
	@Override
	public BorderJoinStyle invoke(IsChart chart, ScriptableContext context) {
		// logic
		return borderJoinStyle;
	}
});
// -------------
// POINT
// -------------
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
dataset.setCubicInterpolationMode(new CubicInterpolationModeCallback() {

	@Override
	public CubicInterpolationMode invoke(IsChart chart, ScriptableContext context) {
		// logic
		return cubicInterpolationMode;
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
 