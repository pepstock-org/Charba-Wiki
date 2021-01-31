---
id: ChartLine
title: Line chart
hide_title: true
sidebar_label: Line
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Line chart

(quoted from [Line chart](https://en.wikipedia.org/wiki/Line_chart) definition in Wikipedia)

A line chart is a type of chart which displays information as a series of data or data points connected by straight line segments. It is a basic type of chart common in many fields. The measurement points are ordered (typically by their x-axis value) and joined with straight line segments. A line chart is often used to visualize a trend in data over intervals of time, a time series, thus the line is often drawn chronologically.

<img src={useBaseUrl('/img/line.png')} />

## Dataset

The line chart allows a number of properties to be specified for each [line dataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/LineDataset.html). These are used to set display properties for a specific dataset.

The following are the attributes that you can set:

| Name | Type | Callback | Description
| ---- | ---- | -------- | -----------
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes | The fill color/pattern under the line.
| borderCapStyle | [CapStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html) | Yes | Cap style of the line. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap)
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes | The color of the line.
| borderDash | int[] | Yes | Length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| borderDashOffset | int | Yes | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderJoinStyle | [JoinStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | Yes | Line joint style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) 
| borderWidth | int | Yes | The width of the line in pixels.
| cubicInterpolationMode | [CubicInterpolationMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CubicInterpolationMode.html) | Yes | Algorithm used to interpolate a smooth curve from the discrete data points.
| clip | double - [Clip](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Clip.html) | - | How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea.
| fill | String - int - boolean - [IsFill](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsFill.html) | Yes | How to fill the area under the line. See [Filling modes](Colors#filling-modes)
| hidden | boolean | - | if the dataset will appear or not.
| hoverBackgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes |
| hoverBorderCapStyle | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes | The fill color/pattern under the line, when hovered.
| hoverBorderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes | The color of the line, when hovered.
| hoverBorderDash | int[] | Yes | Length and spacing of dashes, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| hoverBorderDashOffset | int | Yes | Offset for line dashes, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| hoverBorderJoinStyle | [JoinStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | Yes | Line joint style, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) 
| hoverBorderWidth | int | Yes | The width of the line in pixels, when hovered.
| label | String | - | The label for the dataset which appears in the legend and tooltips. 
| order | int | - | The drawing order of dataset. Also affects order for stacking, tooltip, and legend. Default is 0.
| lineTension | double | - | Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used.
| pointBackgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The fill color for points.
| pointBorderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The border color for points.
| pointBorderWidth | int[] | Yes | The width of the point border in pixels.
| pointHitRadius | double[] | Yes | The pixel size of the non-displayed point that reacts to mouse events.
| pointHoverBackgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | Point background color when hovered.
| pointHoverBorderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | Point border color when hovered.
| pointHoverBorderWidth | int[] | Yes | Border width of point when hovered. 
| pointHoverRadius | double[] | Yes | The radius of the point when hovered.
| pointRadius | double[] | Yes | The radius of the point shape. If set to 0, the point is not rendered.
| pointStyle | [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html)[] - [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)[] | Yes | Style of the point.   
| pointRotation | double[] | Yes | the rotation of the point in degrees.
| showLine | boolean | - | If `false`, the line is not drawn for this dataset. 
| spanGaps | boolean | - | If `true`, lines will be drawn between points with no or null data. If `false`, points with `NaN` data will create a break in the line
| steppedLine | [SteppedLine](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/SteppedLine.html) | - | If the line is shown as a stepped line.
| type | [Type](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Type.html) | - | The type of dataset based on type of chart.
| xAxisID | String | - | The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis. See [Scales](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID) object.
| yAxisID | String | - | The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis. See [Scales](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID) object.

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
LineChart chart = new LineChart();
// for GWT
// LineChartWidget chart = new LineChartWidget();
LineDataset dataset = chart.newDataset();
...
...
LineDataset datasetNew = new LineDataset();
...
chart.getData().setDatasets(dataset, datasetNew);
```

## Data structure

The data of a dataset for a line chart can be passed in three formats.

#### Data as doubles

When the data is an array or list of doubles, the x axis is generally a category. The points are placed onto the axis using their position in the array. When a line chart is created with a category axis, the [labels property of the data object](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-) must be specified.

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

This alternate is used for sparse datasets, such as those in scatter or time series charts. Each data point is specified using an object containing `x` and `y` properties (for scatter chart) or containing `y` and `t` (as time type) properties for time series.

<img src={useBaseUrl('/img/scatter.png')} />

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

#### Data as strings

You can set data of charts as an array of strings. Each point in the data array corresponds to the label at the same index on the x axis.

<img src={useBaseUrl('/img/dataAsStrings.png')} />

```java
...
dataset.setDataString("label1", "label2");
....
```

## Options

The line chart defines specific [options implementation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/LineOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
LineChart chart = new LineChart();
// for GWT
// LineChartWidget chart = new LineChartWidget();
LineOptions options = chart.getOptions();
```

The following are the attributes that you can set, on top of [common options](General) and [common elements](Configuration) for all charts:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| showLine | boolean | `true` | If `false`, the lines between points are not drawn. 
| spanGaps | boolean | `false` | If `false`, NaN data causes a break in the line.

Setting `showLine` to `false`:

<img src={useBaseUrl('/img/lineShowLines.png')} />

## Scriptable options for dataset

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [charts definition](Charts#callbacks-on-datasets-options) session. 

```java
LineChart chart = new LineChart();
// for GWT
// LineChartWidget chart = new LineChartWidget();
LineDataset dataset = chart.newDataset();

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
dataset.setPointStyle(new PointStyleCallback() {

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
dataset.setFill(new FillCallback() {

	@Override
	public Object invoke(IsChart chart, ScriptableContext context) {
		// logic
		return fill;
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

The [pointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/PointStyleCallback.html) callback can provide one of the following object types:

 * [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html)
 * [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)

The [fill](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/FillCallback.html) callback can provide one of the following object types:

 * [IsFill](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsFill.html)
 * Boolean
 * [String](Colors#filling-modes) as relative dataset index 
 * [Integer](Colors#filling-modes) as absolute dataset index 
  