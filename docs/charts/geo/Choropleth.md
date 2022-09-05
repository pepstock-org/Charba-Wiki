---
id: ChartChoropleth
title: Choropleth chart
hide_title: true
sidebar_label: Choropleth
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Choropleth chart

(quoted from [Choropleth chart](https://en.wikipedia.org/wiki/Choropleth_map) definition in Wikipedia)

A choropleth chart is a type of thematic map in which a set of pre-defined areas is colored or patterned in proportion to a statistical variable that represents an aggregate summary of a geographic characteristic within each area, such as population density or per-capita income.

Choropleth maps provide an easy way to visualize how a variable varies across a geographic area or show the level of variability within a region. The choropleth is likely the most common type of thematic map because published statistical data (from government or other sources) is generally aggregated into well-known geographic units, such as countries, states, provinces, and counties. 

<a href="https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=choropleth"><img src={useBaseUrl('/img/geoChoropleth.png')} /></a>

Programmatically, you could use a bar chart as following:

```java
// creates the chart	
ChoroplethChart chart = new ChoroplethChart();
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
      <c:ChoroplethChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

## Dataset

The choropleth chart allows to define the data and a number of properties, used to display the data, by a [choropleth dataset](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/ChoroplethDataset.html).

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
// creates the chart
ChoroplethChart chart = new ChoroplethChart();
// creates the dataset
ChoroplethDataset dataset = chart.newDataset();
// sets the option
dataset.setShowGraticule(true);
...
// creates the dataset
ChoroplethDataset datasetNew = new ChoroplethDataset();
// sets the option
datasetNew.setShowGraticule(true);
...
// sets the dataset to the chart
chart.getData().setDatasets(dataset);
```

The following are the attributes that you can set:

| Name | Type | Default | Description
| :- | :- | :- | :-
| clipMap | boolean - [ClipMap](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/enums/ClipMap.html)| ClipMap.TRUE | Whether to clip the rendering to the chart area of the graph or to another area.
| outline | [Feature](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/Feature.html)[] | [] | The features used to scale and centralize the projection in the chart area.
| showGraticule | boolean - [Graticule](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/Graticule.html) | `false` | If enabled it by `true` or graticule object instance, it renders the lines in the background.
| showOutline | boolean | `false` | If `true` to render the outline in the background

### Styling

The style of the dataset can be configured by [`geoFeature` element](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/GeoFeature.html), which extends a [Bar](../../configuration/Elements#bar) elements, as following:

| Name | Type | Default | Description
| :- | :- | :- | :-
| graticuleBorderColor | String - [IsColor](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/colors/IsColor.html) | rgb(204,204,204) - <span style={{backgroundColor: 'rgb(204,204,204)', border: '1px solid'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | The graticule border color. 
| graticuleBorderWidth | int | 0 | The outline border width.
| outlineBackgroundColor | String - [IsColor](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/colors/IsColor.html) | `null` | The outline background color. 
| outlineBorderColor | String - [IsColor](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/colors/IsColor.html) | `Defaults.get().getGlobal()`<br/>`.getBorderColorAsString()` | The outline border color. 
| outlineBorderWidth | int | 0 | The outline border width. 

```java
// from chart instance
GeoFeature geoElement = chart.getOptions().getElements().getGeoFeature();
// sets options for choropleth datasets of the chart
geoElement.setOutlineBorderWidth(3);
geoElement.setGraticuleBorderColor(HtmlColor.RED);
...
```

## Data structure

Choropleth dataset needs to contain a data array of points, each data point has to contain the [Feature](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/Feature.html) to render and containing the value for the coloring.

Choropleth data points are mapped by [ChoroplethDataPoint](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/ChoroplethDataPoint.html).

```java
// gets the topoJSON map as string
String topoJsonText = MyResources.INSTANCE.topojsonEarth().getText();
// creates a topoJSON object, needed for further computations
TopoJson world = GeoUtil.createTopoJson(topoJsonText);
// the node name in "objects" one where the topology
// are stored is "countries" 
List<Feature> features = GeoUtil.features(world, "countries");
...
// creates data points container
List<ChoroplethDataPoint> dataPoints = new LinkedList<>();
for (Feature feature : features){
  // creates a data point
  ChoroplethDataPoint dp = new ChoroplethDataPoint(feature, 20);
  // adds data points
  dataPoints.add(dp);
}
// sets values by an list of data points
dataset.setValues(dataPoints);
```

:::caution
The `setData` and `setDataPoints` methods are available, inherited by the bar dataset, but you can **NOT** use them otherwise an exception will throw.<br/>Use `setValues` instead.
:::

## Options

The choropleth chart defines specific [options implementation](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/ChoroplethOptions.html) to be configured.

```java
// creates the chart
ChoroplethChart chart = new ChoroplethChart();
// gets the chart options
ChoroplethOptions options = chart.getOptions();
// sets option
options.setResponsive(true);
```

These are the options specific to bar charts:

| Name | Type | Default | Description
| :- | :- | :- | :-
| clipMap | boolean - [ClipMap](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/enums/ClipMap.html)| ClipMap.TRUE | Whether to clip the rendering to the chart area of the graph or to another area.
| outline | [Feature](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/Feature.html)[] | empty list | The features used to scale and centralize the projection in the chart area.
| showGraticule | boolean - [Graticule](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/Graticule.html) | `false` | If enabled it by `true` or graticule object instance, it renders the lines in the background.
| showOutline | boolean | `false` | If `true` to render the outline in the background

:::info
The choropleth chart disables the legend component and the options can **NOT** be set globally but only at chart level.
:::

## Scales

A choropleth chart can have maximum 2 scales, of the following types:

  * [Projection](ChartChoropleth#projection-axis) scale which defines a way to flatten a globe's surface into a plane in order to make a map.
  * [Color](ChartChoropleth#color-axes) scale which enables the coloring of the nodes.
  
### Projection axis

A [Projection axis](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/ProjectionAxis.html) is managing the map projection.

A map projection is a way to flatten a globe's surface into a plane in order to make a map.

This requires a systematic transformation of the latitudes and longitudes of locations from the surface of the globe into locations on a plane.

Here is an example how to create a projection axis:

```java
// creates the chart
ChoroplethChart chart = new ChoroplethChart();
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
| padding | [Padding](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/configuration/Padding.html) | 0 to all dimensions | Sets padding applied during auto scaling of the map in pixels, i.e. the chart size is reduce by the padding before fitting the map.
| projection | [Projection](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/enums/Projection.html) | Projection.ALBERS_USA | The map projection which is a way to flatten a globe's surface into a plane in order to make a map
| projectionOffset | [double, double] | [] | The map projection offset value.
| projectionScale | double | Undefined.DOUBLE | How much the map will be scaled.

### Color axis

A color axis is managing the coloring of the nodes.

A color axis manages how the map must be colored providing also a legend to see the color distribution for the choropleth chart.

<img src={useBaseUrl('/img/colorAxis.png')} />

There are 2 axis types for coloring the nodes:

 * [Color axis](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/ColorAxis.html) which extends the [cartesian linear axis](../../axes/CartesianLinearAxes) to repesent numbers.
 * [Color logarithmic axis](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/ColorLogarithmicAxis.html) which extends the [cartesian logarithmic axis](../../axes/CartesianLogarithmicAxes) to represent number by logarithmic base. 

Here is an example how to create a color axis:

```java
// creates the chart
ChoroplethChart chart = new ChoroplethChart();
// creates a color axis
// scale id and axis kind are already defined  
ColorAxis axis = new ColorAxis(chart);
// adds axes to chart configuration
chart.getOptions().setAxes(axis);
```

#### Options

The color axis allows to define a number of properties, used to display the data.

```java
// creates a color axis
ColorAxis axis = new ColorAxis(chart);
// sets options
axis.setInterpolate(Interpolate.BLUES);
axis.setQuantize(5);

Interpolate interpolate = axis.getInterpolate();
```

The following are the attributes that you can set:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| interpolate | [Interpolate](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/enums/Interpolate.html) | Interpolate.BLUES | [Yes](#scriptable) | The color interpolation of the scale.
| missingColor | String - [IsColor](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/colors/IsColor.html) | HtmlColor.TRANSPARENT | [Yes](#scriptable) | The color to use the data is missing.
| quantize | int | 0 | [Yes](#scriptable) | The amount of pieces to allow to split the color scale in N quantized equal bin.

#### Interpolate callback

You can set the color interpolation of the scale at runtime, providing different colors for different features.

<img src={useBaseUrl('/img/geoCustomInterpolation.png')} />

The interpolate property can be set as [scriptable option](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/callbacks/InterpolateCallback.html), as following:

```java
// uses the color list of tableau color scheme
private static final List<IsColor> COLORS = TableauScheme.CLASSIC_AREA_RED_GREEN21.getColors();
...
...
// creates a color axis
ColorAxis axis = new ColorAxis(chart);
// sets callback
axis.setInterpolate(new InterpolateCallback(){

	/**
	 * Returns a color instance.
	 * 
	 * @param normalizedValue normalized value of the data set
	 * @return a color instance
	 */	
	@Override
	public Object interpolate(double normalizedValue) {
       int index = (int)Math.round(normalizedValue * (COLORS.size() - 1));
       return COLORS.get(Math.min(index, COLORS.size() - 1));
	}
});
```

#### Legend

You can configure the legend which is representing the color interpolation for choropleth chart.

```java
// creates a color axis
ColorAxis axis = new ColorAxis(chart);
// sets legend options
axis.getLegend().setPosition(Position.TOP_RIGHT);

Position position = axis.getLegend().getPosition();
```

The following are the attributes that you can set:

| Name | Type | Default | Scriptable | Description
| :- | :- | :- | :- | :-
| align | [Align](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/enums/Align.html) | Align.RIGHT | [Yes](#scriptable) | The alignment of the legend on the chart area.
| indicatorWidth | int | 10 | [Yes](#scriptable) | how many pixels should be used for the color bar.
| length | int | 100 | [Yes](#scriptable) | The length of the legend, in terms of value.
| margin | int | 8 | [Yes](#scriptable) | The margin pixels such that it doesn't stick to the edge of the chart.
| position | [Position](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/enums/Position.html) - [PositionPoint](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/PositionPoint.html) | Position.BOTTOM_RIGHT | [Yes](#scriptable) | The location of the legend on the chart area.
| width | int | 50 | [Yes](#scriptable) | How wide the scale is.<br/>For a horizontal scale the height if a value less than 1 is given, is it assume to be a ratio of the corresponding chart area.

#### Scriptable

Scriptable options at scale level accept a callback which is called for each of the underlying scale values. See more details in [Configuring charts](../../configuration/ScriptableOptions) section. 

```java
// creates a color axis
ColorAxis axis = new ColorAxis(chart);
// sets legend options by a callback
axis.getLegend().setPosition(new PositionCallback(){

   @Override
   public Position invoke(ScaleContext context){
      // logic
      return position;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| missingColor | [ColorCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;ScaleContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/colors/IsColor.html)
| quantize | [QuantizeCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/callbacks/QuantizeCallback.html) | int
| align | [AlignCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/callbacks/AlignCallback.html) | [Align](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/enums/Align.html)
| indicatorWidth | [WidthCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;ScaleContext&gt; | int
| length | [LengthCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/callbacks/LengthCallback.html) | int
| margin | [MarginCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/callbacks/MarginCallback.html) | int - [Margin](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/Margin.html) 
| position | [PositionCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/callbacks/PositionCallback.html) | [Position](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/enums/Position.html) - [PositionPoint](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/geo/PositionPoint.html)
| width | [WidthCallback](https://pepstock-org.github.io/Charba/next/org/pepstock/charba/client/callbacks/WidthCallback.html)&lt;ScaleContext&gt; | int
