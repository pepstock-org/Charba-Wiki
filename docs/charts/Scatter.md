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

Programmatically, you could use a scatter chart as following:

```java
// creates the chart	
ScatterChart chart = new ScatterChart();
// adds to DOM
component.add(chart);
...
// example for Elemental2
// gets the chart instance as DOM element
Element element = chart.getChartElement().as();
// adds to DOM
DomGlobal.document.body.appendChild(element);
```

By [UIBinder](http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html) (**ONLY for GWT**), you could use a scatter chart as following:

```xml
<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
   xmlns:g="urn:import:com.google.gwt.user.client.ui"
   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">

   <g:HTMLPanel  width="100%">
      ....
      <c:ScatterChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

## Dataset

The scatter chart allows to define the data and a number of properties, used to display the data, by a [scatter dataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/ScatterDataset.html).

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
// creates the chart
ScatterChart chart = new ScatterChart();
// creates the dataset
ScatterDataset dataset = chart.newDataset();
// sets the option
dataset.setBackgroundColor(HtmlColor.RED);
...
// creates the dataset
ScatterDataset datasetNew = new ScatterDataset();
// sets the option
datasetNew.setBackgroundColor(HtmlColor.RED);
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
| clip | double - [Clip](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Clip.html) | - | How to clip relative to chart area. Positive value allows overflow, negative value clips that many pixels inside chart area.
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
| spanGaps | boolean - double | - | If `true`, lines will be drawn between points with no or null data. If `false`, points with `NaN` data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.
| xAxisID | String | - | The ID of the x axis to plot this dataset on.
| yAxisID | String | - | The ID of the y axis to plot this dataset on.

### General

The general options for a scatter dataset can control behaviors not related to styling or interactions and they are the following:

| Name | Defaults | Description |
| :- | :- | :-
| clip | UndefinedValues.DOUBLE | How to clip relative to chart area.
| label | `null` | The label for the dataset which appears in the legend and tooltips. 
| order | 0 | The drawing order of dataset. Also affects order for stacking, tooltips, and legend.
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
ScatterChart chart = new ScatterChart();
// creates dataset
ScatterDataset dataset = chart.newDataset();
// sets the option by a callback 
dataset.setBackgroundColor(new BackgroundColorCallback() {

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
 