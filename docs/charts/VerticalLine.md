---
id: ChartVerticalLine
title: Vertical line chart
hide_title: true
sidebar_label: Vertical line
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Vertical line chart

A vertical line chart is a variation on a line chart. A line chart is a type of chart which displays information as a series of data or data points connected by straight line segments.

<img src={useBaseUrl('/img/verticalLine.png')} />

Programmatically, you could use a line chart as following:

```java
// creates the chart	
VerticalLineChart chart = new VerticalLineChart();
// adds to DOM
component.add(chart);
...
// example for Elemental2
// gets the chart instance as DOM element
Element element = chart.getChartElement().as();
// adds to DOM
DomGlobal.document.body.appendChild(element);
```

By [UIBinder](http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html) (**ONLY for GWT**), you could use a line chart as following:

```xml
<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
   xmlns:g="urn:import:com.google.gwt.user.client.ui"
   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">

   <g:HTMLPanel  width="100%">
      ....
      <c:VerticalLineChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

## Dataset

The vertical line chart allows to define the data and a number of properties, used to display the data, by a [vertical line dataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/VerticalLineDataset.html).

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
// creates the chart
VerticalLineChart chart = new VerticalLineChart();
// creates the dataset
VerticalLineDataset dataset = chart.newDataset();
// sets the option
dataset.setBorderColor(HtmlColor.RED);
...
// creates the dataset
VerticalLineDataset datasetNew = new VerticalLineDataset();
// sets the option
datasetNew.setBorderColor(HtmlColor.RED);
...
// sets the datasets to the chart
chart.getData().setDatasets(dataset, datasetNew);
```

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| backgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | [Yes](#scriptable) | The fill color/pattern under the line.
| borderCapStyle | [CapStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html) | [Yes](#scriptable) | Cap style of the line. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap).
| borderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | [Yes](#scriptable) | The color of the line.
| borderDash | int[] | [Yes](#scriptable) | Length and spacing of dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| borderDashOffset | int | [Yes](#scriptable) | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| borderJoinStyle | [JoinStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | [Yes](#scriptable) | Line joint style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
| borderWidth | int | [Yes](#scriptable) | The width of the line in pixels.
| cubicInterpolationMode | [CubicInterpolationMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CubicInterpolationMode.html) | [Yes](#scriptable) | Algorithm used to interpolate a smooth curve from the discrete data points.
| clip | double - [Clip](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Clip.html) | - | How to clip relative to chart area. Positive value allows overflow, negative value clips that many pixels inside chart area.
| fill | String - int - boolean - [IsFill](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsFill.html) | [Yes](#scriptable) | How to fill the area under the line. See [Filling modes](Colors#filling).
| hoverBackgroundColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | [Yes](#scriptable) | The fill color/pattern under the line, when hovered.
| hoverBorderCapStyle | [CapStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html) | [Yes](#scriptable) | Cap style of the line, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap).
| hoverBorderColor | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html) | [Yes](#scriptable) | The color of the line, when hovered.
| hoverBorderDash | int[] | [Yes](#scriptable) | Length and spacing of dashes, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| hoverBorderDashOffset | int | [Yes](#scriptable) | Offset for line dashes, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| hoverBorderJoinStyle | [JoinStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html) | [Yes](#scriptable) | Line joint style, when hovered. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin). 
| hoverBorderWidth | int | [Yes](#scriptable) | The width of the line in pixels, when hovered.
| label | String | - | The label for the dataset which appears in the legend and tooltips. 
| order | int | - | The drawing order of dataset. Also affects order for stacking, tooltip, and legend.
| pointBackgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The fill color for points.
| pointBorderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The border color for points.
| pointBorderWidth | int[] | [Yes](#scriptable) | The width of the point border in pixels.
| pointHitRadius | double[] | [Yes](#scriptable) | The pixel size of the non-displayed point that reacts to mouse events.
| pointHoverBackgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | Point background color when hovered.
| pointHoverBorderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | Point border color when hovered.
| pointHoverBorderWidth | int[] | [Yes](#scriptable) | Border width of point when hovered. 
| pointHoverRadius | double[] | [Yes](#scriptable) | The radius of the point when hovered.
| pointRadius | double[] | [Yes](#scriptable) | The radius of the point shape. If set to 0, the point is not rendered.
| pointRotation | double[] | [Yes](#scriptable) | The rotation of the point in degrees.
| pointStyle | [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html)[] - [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)[] | [Yes](#scriptable) | Style of the point.   
| showLine | boolean | - | If `false`, the line is not drawn for this dataset. 
| spanGaps | boolean - double | - | If `true`, lines will be drawn between points with no or null data. If `false`, points with `NaN` data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.
| stepped | [Stepped](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/Stepped.html) | - | If the line is shown as a stepped line.
| tension | double | - | Bezier curve tension of the line. Set to 0 to draw straight lines. This option is ignored if monotone cubic interpolation is used.
| xAxisID | String | - | The ID of the x axis to plot this dataset on.
| yAxisID | String | - | The ID of the y axis to plot this dataset on.

### General

The general options for a vertical line dataset can control behaviors not related to styling or interactions and they are the following:

| Name | Defaults | Description |
| :- | :- | :-
| clip | UndefinedValues.DOUBLE | How to clip relative to chart area. 
| label | `null` | The label for the dataset which appears in the legend and tooltips. 
| order | 0 | The drawing order of dataset. Also affects order for stacking, tooltip, and legend.
| xAxisID | [DefaultScaleId.X](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultScaleId.html) | The ID of the x axis to plot this dataset on.
| yAxisID | [DefaultScaleId.Y](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/DefaultScaleId.html) | The ID of the y axis to plot this dataset on.

### Point styling

The style of each point of the dataset can be configured by the following properties:

| Name | Defaults | Description |
| :- | :- | :-
| pointBackgroundColor | _element.getPoint().getBackgroundColorAsString()_ | The fill color for points.
| pointBorderColor | _element.getPoint().getBorderColorAsString()_ | The border color for points.
| pointBorderWidth | _element.getPoint().getBorderWidth()_ | The width of the point border in pixels.
| pointHitRadius | _element.getPoint().getHitRadius()_ | The pixel size of the non-displayed point that reacts to mouse events.
| pointRadius | _element.getPoint().getRadius()_ | The radius of the point shape.
| pointRotation | _element.getPoint().getRotation()_ | The rotation of the point in degrees.
| pointStyle | _element.getPoint().getPointStyle()_ | Style of the point.   

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

### Line styling

The style of each line of the dataset can be configured by the following properties:

| Name | Defaults | Description |
| :- | :- | :-
| backgroundColor | _element.getLine().getBackgroundColorAsString()_ | The fill color under the line.
| borderCapStyle | _element.getLine().getBorderCapStyle()_ | Cap style of the line.
| borderColor | _element.getLine().getBorderColorAsString()_ | The color of the line.
| borderDash | _element.getLine().getBorderDash()_ | Length and spacing of dashes.
| borderDashOffset | _element.getLine().getBorderDashOffset()_ | Offset for line dashes.
| borderJoinStyle | _element.getLine().getBorderJoinStyle()_ | Line joint style
| borderWidth | _element.getLine().getBorderWidth()_ | The width of the line in pixels.
| cubicInterpolationMode | _element.getLine().getCubicInterpolationMode()_ | Algorithm used to interpolate a smooth curve from the discrete data points.
| fill | _element.getLine().getFill()_ | How to fill the area under the line.
| stepped | _element.getLine().getStepped()_ | If the line is shown as a stepped line.
| tension | _element.getLine().getTension()_ | Bezier curve tension of the line.

All above options have got the fallback to the associated [Line](../configuration/Elements#line) elements, retrievable by the following statements:

```java
// from chart instance
Line line = chart.getOptions().getElements().getLine();
// sets options for all line datasets of the chart
line.setBorderWidth(6);
...
// from defaults
Line defaultLine  = Defaults.get().getGlobal().getElements().getLine();
// sets options for all line datasets of all charts
defaultLine.setBorderWidth(6);
```

### Point interactions

The interaction with each point can be controlled with the following properties:

| Name | Defaults | Description |
| :- | :- | :-
| pointHoverBackgroundColor | _element.getPoint().getBackgroundColorAsString()_ | Point background color when hovered.
| pointHoverBorderColor | _element.getPoint().getBorderColorAsString()_ | Point border color when hovered.
| pointHoverBorderWidth | _element.getPoint().getBorderWidth()_ | Border width of point when hovered. 
| pointHoverRadius | _element.getPoint().getRadius()_ | The radius of the point when hovered.

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

### Line interactions

The interaction with each line can be controlled with the following properties:

| Name | Defaults | Description |
| :- | :- | :-
| hoverBackgroundColor | _element.getLine().getBackgroundColorAsString()_ | The fill color under the line, when hovered.
| hoverBorderCapStyle | _element.getLine().getBorderCapStyle()_ |  Cap style of the line,  when hovered.
| hoverBorderColor | _element.getLine().getBorderColorAsString()_ | The color of the line, when hovered.
| hoverBorderDash | _element.getLine().getBorderDash()_ | Length and spacing of dashes, when hovered.
| hoverBorderDashOffset | _element.getLine().getBorderDashOffset()_ | Offset for line dashes, when hovered.
| hoverBorderJoinStyle | _element.getLine().getBorderJoinStyle()_ | Line joint style, when hovered. 
| hoverBorderWidth | _element.getLine().getBorderWidth()_ | The width of the line in pixels, when hovered.

All above options have got the fallback to the associated [Line](../configuration/Elements#line) elements, retrievable by the following statements:

```java
// from chart instance
Line line = chart.getOptions().getElements().getLine();
// sets options for all line datasets of the chart
line.setBorderWidth(6);
...
// from defaults
Line defaultLine  = Defaults.get().getGlobal().getElements().getLine();
// sets options for all line datasets of all charts
defaultLine.setBorderWidth(6);
```

### Scriptable

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

```java
// creates chart
VerticalLineChart chart = new VerticalLineChart();
// creates dataset
VerticalLineDataset dataset = chart.newDataset();
// sets the option by a callback 
dataset.setBorderColor(new BorderColorCallback() {

   @Override
   public IsColor invoke(IsChart chart, ScriptableContext context) {
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Possible returned types
| :- | :- | :- 
| backgroundColor | [BackgroundColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| borderCapStyle | [BorderCapStyleCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderCapStyleCallback.html) | [CapStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html)
| borderColor | [BorderColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| borderDash | [BorderDashCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderDashCallback.html) | List&lt;Integer&gt;
| borderDashOffset | [BorderDashOffsetCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html) | int
| borderJoinStyle | [BorderJoinStyleCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderJoinStyleCallback.html) | [JoinStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/JoinStyle.html)
| borderWidth | [BorderWidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderWidthCallback.html) | int
| cubicInterpolationMode | [CubicInterpolationModeCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/CubicInterpolationModeCallback.html) | [CubicInterpolationMode](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CubicInterpolationMode.html)
| fill | [FillCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/FillCallback.html) | String - int - boolean - [IsFill](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/IsFill.html)
| hoverBackgroundColor | [BackgroundColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderCapStyle | [BorderCapStyleCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderCapStyleCallback.html) | [CapStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/CapStyle.html)
| hoverBorderColor | [BorderColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderDash | [BorderDashCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderDashCallback.html) | List&lt;Integer&gt;
| hoverBorderDashOffset | [BorderDashOffsetCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderDashOffsetCallback.html) | int
| hoverBorderJoinStyle | [BorderJoinStyleCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderJoinStyleCallback.html) | [JoinStyle]
| hoverBorderWidth | [BorderWidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderWidthCallback.html) | int
| pointBackgroundColor | [BackgroundColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| pointBorderColor | [BorderColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| pointBorderWidth | [BorderWidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderWidthCallback.html) | int
| pointHitRadius | [RadiusCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/RadiusCallback.html) | double
| pointHoverBackgroundColor | [BackgroundColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| pointHoverBorderColor | [BorderColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| pointHoverBorderWidth | [BorderWidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderWidthCallback.html) | int
| pointHoverRadius | [RadiusCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/RadiusCallback.html) | double
| pointRadius | [RadiusCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/RadiusCallback.html) | double
| pointRotation | [RotationCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/RotationCallback.html) | double
| pointStyle | [PointStyleCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/PointStyleCallback.html) | [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html) - [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html)

## Data structure

The data of a dataset for a line chart can be passed in three formats.

#### Data as doubles

When the data is an array or list of doubles, the x axis is generally a category. The points are placed onto the axis using their position in the array. When a line chart is created with a category axis, the [labels property of the data object](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-) must be specified.

```java
// sets data as an array of doubles
dataset.setData(1,2,3,4,6);

// sets data as a list of double
List<Double> list = new LinkedList<>();
list.add(1);
list.add(2);
list.add(3);
dataset.setData(list);
```

#### Data as DataPoint

This alternate is used for sparse datasets, such as those in scatter or time series charts. Each data point is specified using an object containing `x` and `y` properties (for scatter chart) or containing `y` and `t` (as time type) properties for time series.

```java
// creates a datapoint
DataPoint dp1 = new DataPoint();
dp1.setX(10);
dp1.setY(20);
// creates a datapoint
DataPoint dp2 = new DataPoint();
dp2.setX(30);
dp2.setY(40);
// sets data by an array of datapoints
dataset.setDataPoint(dp1, dp2);
```

## Options

The line chart defines specific [options implementation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/LineOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
// creates chart
VerticalLineChart chart = new VerticalLineChart();
// gets the chart options
VerticalLineOptions options = chart.getOptions();
// sets options
options.setResponsive(true);
options.setShowLine(false);
```

These are the options specific to line charts:

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| showLine | boolean | `true` | If `false`, the lines between points are not drawn. 
| spanGaps | boolean - double | `false` | If `true`, lines will be drawn between points with no or null data. If `false`, points with `NaN` data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.
