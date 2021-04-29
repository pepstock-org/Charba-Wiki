---
id: ChartRadar
title: Radar chart
hide_title: true
sidebar_label: Radar
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Radar chart

(quoted from [Radar chart](https://en.wikipedia.org/wiki/Radar_chart) definition in Wikipedia)

A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes is typically uninformative. It is equivalent to a parallel coordinates plot, with the axes arranged radially. 

They are often useful for comparing the points of two or more different data sets.

<img src={useBaseUrl('/img/radar.png')} />

## Dataset

The radar chart allows a number of properties to be specified for each [radar dataset](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/RadarDataset.html). These are used to set display properties for a specific dataset.

The following are the attributes that you can set:

| Name | Type | Callback | Description
| ---- | ---- | -------- | -----------
| backgroundColor | String - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)| Yes | The fill color under the line.
| borderCapStyle | [CapStyle](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html) | Yes | Cap style of the line. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap)
| borderColor | String - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes | The color of the line.
| borderDash | int[] | Yes | Length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| borderDashOffset | int | Yes | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderJoinStyle | [JoinStyle](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | Yes | Line joint style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) 
| borderWidth | int | Yes | The width of the line in pixels.
| fill |  String - int - boolean - [IsFill](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsFill.html) | Yes | How to fill the area under the line. [Filling modes](Colors#filling-modes)
| hidden | boolean | - | if the dataset will appear or not.
| hoverBackgroundColor | String - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes |
| hoverBorderCapStyle | String - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes | The fill color/pattern under the line, when hovered.
| hoverBorderColor | String - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | Yes | The color of the line, when hovered.
| hoverBorderDash | int[] | Yes | Length and spacing of dashes, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| hoverBorderDashOffset | int | Yes | Offset for line dashes, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| hoverBorderJoinStyle | [JoinStyle](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | Yes | Line joint style, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) 
| hoverBorderWidth | int | Yes | The width of the line in pixels, when hovered.
| label | String | - | The label for the dataset which appears in the legend and tooltips. 
| lineTension | double | - | Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used.
| order | int | - | The drawing order of dataset. Also affects order for stacking, tooltip, and legend. Default is 0.
| pointBackgroundColor | String[] - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The fill color for points.
| pointBorderColor | String[] - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | The border color for points.
| pointBorderWidth | int[] | Yes | The width of the point border in pixels.
| pointHitRadius | double[] | Yes | The pixel size of the non-displayed point that reacts to mouse events.
| pointHoverBackgroundColor | String[] - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | Point background color when hovered.
| pointHoverBorderColor | String[] - [IsColor](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | Yes | Point border color when hovered.
| pointHoverBorderWidth | int[] | Yes | Border width of point when hovered. 
| pointHoverRadius | double[] | Yes | The radius of the point when hovered.
| pointRadius | double[] | Yes | The radius of the point shape. If set to 0, the point is not rendered.
| pointStyle | [PointStyle](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html)[] - [Img](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)[] | Yes | Style of the point.  
| pointRotation | double[] | Yes | the rotation of the point in degrees.
| spanGaps | boolean | - | If `true`, lines will be drawn between points with no or null data. If `false`, points with `NaN` data will create a break in the line.
| type | [Type](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/Type.html) | - | The type of dataset based on type of chart.

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
RadarChart chart = new RadarChart();
// for GWT
// RadarChartWidget chart = new RadarChartWidget();
RadarDataset dataset = chart.newDataset();
...
...
RadarDataset datasetNew = new RadarDataset();
...
chart.getData().setDatasets(dataset, datasetNew);
```

## Data structure

The data of a dataset for a radar chart is specified as a an array of numbers. Each point in the data array corresponds to the [label](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-) at the same index on the x axis.

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

The radar chart defines specific [options implementation](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/RadarOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
RadarChart chart = new RadarChart();
// for GWT
// RadarChartWidget chart = new RadarChartWidget();
RadarOptions options = chart.getOptions();
```

## Scriptable options for dataset

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [charts definition](Charts#callbacks-on-datasets-options) session. 

```java
RadarChart chart = new RadarChart();
// for GWT
// RadarChartWidget chart = new RadarChartWidget();
RadarDataset dataset = chart.newDataset();

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
dataset.setFill(new FillCallback() {

	@Override
	public Object invoke(IsChart chart, ScriptableContext context) {
		// logic
		return fill;
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

The [pointStyle](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/PointStyleCallback.html) callback can provide one of the following object types:

 * [PointStyle](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html)
 * [Img](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)

The [fill](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/FillCallback.html) callback can provide one of the following object types:

 * [IsFill](https://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsFill.html)
 * Boolean
 * [String](Colors#filling-modes) as relative dataset index 
 * [Integer](Colors#filling-modes) as absolute dataset index 
  