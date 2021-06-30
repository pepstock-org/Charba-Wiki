---
id: ChartBubbleMap
title: BubbleMap chart
hide_title: true
sidebar_label: BubbleMap
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Bubble map chart

(quoted from [Proportional Symbol Map](https://en.wikipedia.org/wiki/Proportional_symbol_map) definition in Wikipedia)

A Bubble Map (or Proportional Symbol Map)  is a type of thematic map that uses map symbols that vary in size to represent a quantitative variable. For example, circles may be used to show the location of cities within the map, with the size of each circle sized proportionally to the population of the city. 

It is a map chart type that uses the visual variable of size to display differences in the magnitude of a certain discrete, abruptly changing phenomenon.

<img src={useBaseUrl('/img/geoBubbleMap.png')} />

Programmatically, you could use a bar chart as following:

```java
// creates the chart	
BubbleMapChart chart = new BubbleMapChart();
// adds to DOM
component.add(chart);
...
// example for Elemental2
// gets the chart instance as DOM element
Element element = chart.getChartElement().as();
// adds to DOM
DomGlobal.document.body.appendChild(element);
```

By [UIBinder](http://www.gwtproject.org/doc/latest/DevGuideUiBinder.html) (**ONLY for GWT**), you could use a bar chart as following:

```xml
<ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
   xmlns:g="urn:import:com.google.gwt.user.client.ui"
   xmlns:c="urn:import:org.pepstock.charba.client.gwt.widgets">

   <g:HTMLPanel  width="100%">
      ....
      <c:BubbleMapChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

## Dataset

The bubble map chart allows to define the data and a number of properties, used to display the data, by a [bubble map dataset](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/BubbleMapDataset.html).

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
// creates the chart
BubbleMapChart chart = new BubbleMapChart();
// creates the dataset
BubbleMapDataset dataset = chart.newDataset();
// sets the option
dataset.setBackgroundColor(HtmlColor.RED);
dataset.setShowGraticule(true);
...
// creates the dataset
BubbleMapDataset datasetNew = new BubbleMapDataset();
// sets the option
datasetNew.setBackgroundColor(HtmlColor.RED);
datasetNew.setShowGraticule(true);
...
// sets the dataset to the chart
chart.getData().setDatasets(dataset);
```

See [bubble dataset](../ChartBubble#dataset) configuration how to configure the bubble map dataset, in addition of following options:

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| clipMap | boolean - [ClipMap](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/enums/ClipMap.html)| ClipMap.TRUE | Whether to clip the rendering to the chart area of the graph or to another area.
| outline | [Feature](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/Feature.html)[] | [] | The features used to scale and centralize the projection in the chart area.
| showGraticule | boolean - [Graticule](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/Graticule.html) | `false` | If enabled it by `true` or graticule object instance, it renders the lines in the background.
| showOutline | boolean | `false` | If `true` to render the outline in the background

### Styling

The style of the dataset can be configured by [bubble map point](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/BubbleMapPoint.html), which extends a [Point](../../configuration/Elements#point) elements, as following:

| Name | Type | Default | Description
| :- | :- | :- | :-
| graticuleBorderColor | String - [IsColor](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html) | rgb(204,204,204) - <span style={{backgroundColor: 'rgb(204,204,204)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The graticule border color. 
| graticuleBorderWidth | int | 0 | The outline border width.
| outlineBackgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html) | `null` | The outline background color. 
| outlineBorderColor | String - [IsColor](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | The outline border color. 
| outlineBorderWidth | int | 0 | The outline border width. 

```java
// from chart instance
BubbleMapPoint bubblemapElement = chart.getOptions().getElements().getBubbleMapPoint();
// sets options for bubble map datasets of the chart
bubblemapElement.setOutlineBorderWidth(3);
bubblemapElement.setGraticuleBorderColor(HtmlColor.RED);
...
```

## Data structure

Bubble map dataset needs to contain a data array of points, each data point has to contain the latitude and longitude of the point to render and containing the value for the coloring.

Bubble map data points are mapped by [ChoroplethDataPoint](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/BubbleMapDataPoint.html).

```java
// creates data points container
List<BubbleMapDataPoint> dataPoints = new LinkedList<>();
// creates a data point
BubbleMapDataPoint dp = new BubbleMapDataPoint(latitude, longitude, 20);
// adds data points
dataPoints.add(dp);
// sets values by an list of data points
dataset.setValues(dataPoints);
```

:::note
The `setData` and `setDataPoints` methods are available, inherited by the bubble dataset, but you can **NOT** use them otherwise an exception will throw.<br/>Use `setValues` instead.
:::

## Options

The bubble map chart defines specific [options implementation](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/BubbleMapOptions.html) to be configured.

```java
// creates the chart
BubbleMapChart chart = new BubbleMapChart();
// gets the chart options
BubbleMaOptions options = chart.getOptions();
// sets option
options.setResponsive(true);
```

These are the options specific to bar charts:

| Name | Type | Default | Description
| :- | :- | :- | :-
| clipMap | boolean - [ClipMap](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/enums/ClipMap.html)| ClipMap.OUTLINE_GRATICULE | Whether to clip the rendering to the chart area of the graph or to another area.
| outline | [Feature](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/Feature.html)[] | empty list | The features used to scale and centralize the projection in the chart area.
| showGraticule | boolean - [Graticule](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/Graticule.html) | `false` | If enabled it by `true` or graticule object instance, it renders the lines in the background.
| showOutline | boolean | `false` | If `true` to render the outline in the background

:::note
The bubble map chart disables the legend component and the options can **NOT** be set globally but only at chart level.
:::

## Scales

A bubble map chart can have maximum 2 scales, of the following types:

  * [Projection](ChartBubbleMap#projection-axis) scale which defines a way to flatten a globe's surface into a plane in order to make a map.
  * [Size](ChartBubbleMap#size-axis) scale which is used to map the values to symbol radius size.
  
### Projection axis

A [Projection axis](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/ProjectionAxis.html) is managing the map projection.

A map projection is a way to flatten a globe's surface into a plane in order to make a map.

This requires a systematic transformation of the latitudes and longitudes of locations from the surface of the globe into locations on a plane.

Here is an example how to create a projection axis:

```java
// creates the chart
BubbleMapChart chart = new BubbleMapChart();
// creates a projection axis
// scale id and axis kind are already defined  
ProjectionAxis axis = new ProjectionAxis(chart);
// adds axes to chart configuration
chart.getOptions().setAxes(axis);
```

#### Options

The projection axis allows to define a number of properties, used to display the data.

```java
// creates a projection axis
ProjectionAxis axis = new ProjectionAxis(chart);
// sets options
axis.setProjection(Projection.EQUAL_EARTH);
axis.setProjectionScale(0.5);
axis.setProjectionOffset(0, -50);

Projection projection = axis.getProjection();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| projection | [Projection](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/enums/Projection.html) | Projection.ALBERS_USA | The map projection which is a way to flatten a globe's surface into a plane in order to make a map
| projectionOffset | [double, double] | [] | The map projection offset value.
| projectionScale | double | Undefined.DOUBLE | How much the map will be scaled.

### Size axis

A [Size axis](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/SizeAxis.html) is used to map the values to symbol radius size.

Here is an example how to create a size axis:

```java
// creates the chart
BubbleMapChart chart = new BubbleMapChart();
// creates a size axis
// scale id and axis kind are already defined  
SizeAxis axis = new SizeAxis(chart);
// adds axes to chart configuration
chart.getOptions().setAxes(axis);
```

#### Options

The size axis extends the [cartesian linear axis](../../axes/CartesianLinearAxes) (and all its options) and allows to define a number of properties, used to display the data.

```java
// creates a color axis
SizeAxis axis = new SizeAxis(chart);
// sets options
axis.setInterpolate(Interpolate.BLUES);
axis.setQuantize(5);

Interpolate interpolate = axis.getInterpolate();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| mode | [Mode](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/enums/Mode.html) | Mode.AREA | The operation modes for the scale, area means that the area is linearly increasing whereas radius the radius is.
| missingRadius | double | 1 | The radius of the points to use the data is missing.
| range | [int, int] | [2, 20] | The radius range in pixel, the minimal data value will be mapped to the first entry, the maximal one to the second and a linear interpolation for all values in between.

#### Legend

You can configure the legend which is representing the color interpolation for bubble map chart.

```java
// creates a color axis
SizeAxis axis = new SizeAxis(chart);
// sets legend options
axis.getLegend().setPosition(Position.TOP_RIGHT;

Position position = axis.getLegend().getPosition();
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| align | [Align](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/enums/Align.html) | Align.RIGHT | The alignment of the legend on the chart area.
| indicatorWidth | int | 10 | how many pixels should be used for the color bar.
| length | int | 100 | The length of the legend, in terms of value.
| margin | int | 8 | The margin pixels such that it doesn't stick to the edge of the chart.
| position | [Position](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/enums/Position.html) - [PositionPoint](https://pepstock-org.github.io/Charba/4.0/org/pepstock/charba/client/geo/PositionPoint.html) | Position.BOTTOM_RIGHT | The location of the legend on the chart area.
| width | int | 50 | How wide the scale is.<br/>For a horizontal scale the height if a value less than 1 is given, is it assume to be a ratio of the corresponding chart area.
