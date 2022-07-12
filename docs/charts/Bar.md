---
id: ChartBar
title: Bar chart
hide_title: true
sidebar_label: Bar
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Bar chart

(quoted from [Bar chart](https://en.wikipedia.org/wiki/Bar_chart) definition in Wikipedia)

A bar chart is a chart that presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent. The bars can be plotted vertically or horizontally.

A bar chart shows comparisons among discrete categories. One axis of the chart shows the specific categories being compared, and the other axis represents a measured value. Some bar charts present bars clustered in groups of more than one, showing the values of more than one measured variable. 

<a href="https://pepstock-org.github.io/Charba-Showcase/index.html?gallery=bar"><img src={useBaseUrl('/img/bar.png')} /></a>

Programmatically, you could use a bar chart as following:

```java
// creates the chart	
BarChart chart = new BarChart();
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
      <c:BarChartWidget ui:field="chart"/>
      ...
   </g:HTMLPanel>
</ui:UiBinder> 
```

## Dataset

The bar chart allows to define the data and a number of properties, used to display the data, by a [bar dataset](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/BarDataset.html).

Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
// creates the chart
BarChart chart = new BarChart();
// creates the dataset
BarDataset dataset = chart.newDataset();
// sets the option
dataset.setBackgroundColor(HtmlColor.RED);
...
// creates the dataset
BarDataset datasetNew = new BarDataset();
// sets the option
datasetNew.setBackgroundColor(HtmlColor.RED);
...
// sets the datasets to the chart
chart.getData().setDatasets(dataset, datasetNew);
```

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| autoInflateAmount | boolean | - | If `true`, the amount of pixels to inflate the bar rectangles, when drawing, is automatically calculating.
| base | double - double[] | [Yes](#scriptable) | Base value for the bar in data units along the value axis.
| backgroundColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) |The fill color/pattern of the bar.
| barPercentage | double | - | The percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.
| barThickness | int | - | The width of each bar in pixels.
| borderColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The color of the bar border. 
| borderSkipped | [BorderSkipped](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/BorderSkipped.html) | [Yes](#scriptable) | Which edge to skip drawing the border for.
| borderRadius | int[] - [BarBorderRadius](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/BarBorderRadius.html)[] | [Yes](#scriptable) | The bar border radius (in pixels).
| borderWidth | int[] - [BarBorderWidth](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/BarBorderWidth.html)[] | [Yes](#scriptable) | The stroke width of the bar in pixels.
| categoryPercentage | double | - | The percent (0-1) of the available width each category should be within the sample width.
| clip | boolean - double - [Clip](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/Clip.html) | - | How to clip relative to chart area. Positive value allows overflow, negative value clips that many pixels inside chart area. When set to 0 means clip at chart area. 
| enableBorderRadius | boolean | [Yes](#scriptable) | If `true`, it only shows the border radius of a bar when the bar is at the end of the stack.
| grouped | boolean | - | Should the bars be grouped on index axis.<br/>When `true`, all the datasets at same index value will be placed next to each other centering on that index value.<br/>When `false`, each bar is placed on its actual index-axis value.
| hoverBackgroundColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The fill color/pattern of the bars when hovered.
| hoverBorderColor | String[] - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable) | The stroke color of the bars when hovered.
| hoverBorderWidth | int[] | [Yes](#scriptable) | The stroke width of the bars when hovered.
| hoverBorderRadius | int[] - [BarBorderRadius](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/BarBorderRadius.html)[] | [Yes](#scriptable) | The bar border radius (in pixels) when hovered.
| indexAxis | [IndexAxis](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/IndexAxis.html) | - | The base axis of the dataset. 'IndexAxis.X' for vertical bars and 'IndexAxis.Y' for horizontal bars.
| inflateAmount | int[] | [Yes](#scriptable) | The amount of pixels to inflate the bar rectangles, when drawing.
| label | String | - | The label for the dataset which appears in the legend and tooltips. 
| maxBarThickness | int | - | The maximum bar thickness, to ensure that bars are not sized thicker than this.
| minBarLength | int | - | Set this to ensure that bars have a minimum length in pixels.
| normalized | boolean | - | If `true`, you provide data with indices that are unique, sorted, and consistent across data sets and provide the normalized.
| order | int | - | The drawing order of dataset. Also affects order for stacking, tooltip, and legend.
| pointStyle | [PointStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/PointStyle.html) - [Img](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Canvas.html) | [Yes](#scriptable) | Point style for legend.
| parsing | boolean | - | If `false`, the data set parsing is disable. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.
| xAxisID | String | - | The ID of the x axis to plot this dataset on.
| yAxisID | String | - | The ID of the y axis to plot this dataset on.

### General

The general options for a bar dataset can control behaviors not related to styling or interactions and they are the following:

| Name | Defaults | Description
| :- | :- | :-
| base | [] | Base value for the bar in data units along the value axis.
| clip | Undefined.DOUBLE | How to clip relative to chart area. 
| indexAxis | IndexAxis.X | The base axis of the dataset.
| label | `null` | The label for the dataset which appears in the legend and tooltips. 
| normalized | `false` | If `true`, you provide data with indices that are unique, sorted, and consistent across data sets and provide the normalized.
| order | 0 | The drawing order of dataset. Also affects order for stacking, tooltips, and legend.
| parsing | `true` | If `false`, the data set parsing is disable. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.
| xAxisID | [DefaultScaleId.X](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/DefaultScaleId.html) | The ID of the x axis to plot this dataset on.
| yAxisID | [DefaultScaleId.Y](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/DefaultScaleId.html) | The ID of the y axis to plot this dataset on.

### Styling

The style of each bar of the dataset can be configured by the following properties:

| Name | Description
| :- | :-
| backgroundColor | The fill color of the bar.
| borderColor |  The color of the bar border. 
| borderSkipped | Which edge to skip drawing the border for.
| borderRadius | The bar border radius (in pixels).
| borderWidth | The stroke width of the bar in pixels.
| enableBorderRadius| If `true`, it only shows the border radius of a bar when the bar is at the end of the stack.
| inflateAmount | This option can be used to inflate the rects that are used to draw the bars. This can be used to hide artifacts between bars when `(barPercentage * categoryPercentage)` is equals to 1.
| pointStyle | Point style for legend.

All above options have got the fallback to the associated [Bar](../configuration/Elements#bar) element, retrievable by the following statements:

```java
// from chart instance
Bar bar = chart.getOptions().getElements().getBar();
// sets options for all bar datasets of the chart
bar.setBorderRadius(6);
...
// from defaults
Bar defaultBar  = Defaults.get().getGlobal().getElements().getBar();
// sets options for all bar datasets of all charts
defaultBar.setBorderRadius(6);
```

### Interactions

The interactions can change the styling of each bar of the dataset which can set by the following properties:

| Name | Description
| :- | :-
| hoverBackgroundColor | The fill color of the bars when hovered.
| hoverBorderColor | The stroke color of the bars when hovered.
| hoverBorderRadius | The bar border radius (in pixels) when hovered.
| hoverBorderWidth | The stroke width of the bars when hovered.

All above options have got the fallback to the associated [Bar](../configuration/Elements#bar) elements, retrievable by the following statements:

```java
// from chart instance
Bar bar = chart.getOptions().getElements().getBar();
// sets options for all bar datasets of the chart
bar.setHoverBorderRadius(6);
...
// from defaults
Bar defaultBar  = Defaults.get().getGlobal().getElements().getBar();
// sets options for all bar datasets of all charts
defaultBar.setHoverBorderRadius(6);
```

### Scriptable

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section. 

```java
// creates chart
BarChart chart = new BarChart();
// creates dataset
BarDataset dataset = chart.newDataset();
// sets the option by a callback 
dataset.setBackgroundColor(new ColorCallback<DatasetContext>(){

   @Override
   public IsColor invoke(DatasetContext context){
      // logic
      return color;
   }
});
```

The following options can be set by a callback:

| Name | Callback | Returned types
| :- | :- | :- 
| base | [BaseCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BaseCallback.html) | double 
| backgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| borderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| borderSkipped | [BorderSkippedCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BorderSkippedCallback.html) | [BorderSkipped](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/BorderSkipped.html) 
| borderRadius | [BorderRadiusCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html)&lt;DatasetContext&gt; | int - [BarBorderRadius](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/BarBorderRadius.html)
| borderWidth | [BarBorderWidthCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BarBorderWidthCallback.html) | int - [BarBorderWidth](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/BarBorderWidth.html)
| enableBorderRadius | [EnableBorderRadiusCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/EnableBorderRadiusCallback.html) | boolean
| hoverBackgroundColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderColor | [ColorCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/ColorCallback.html)&lt;DatasetContext&gt; | String - [IsColor](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderWidth | [BarBorderWidthCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BarBorderWidthCallback.html) | int - [BarBorderWidth](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/BarBorderWidth.html)
| hoverBorderRadius | [BorderRadiusCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html)&lt;DatasetContext&gt; | int - [BarBorderRadius](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/BarBorderRadius.html)
| inflateAmount | [InflateAmountCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/InflateAmountCallback.html) | int**<sup style={{color: 'orange'}}>(1)</sup>**
| pointStyle | [PointStyleCallback](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/callbacks/PointStyleCallback.html)&lt;DatasetContext&gt; | [PointStyle](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/enums/PointStyle.html) - [Img](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Img.html) - [Canvas](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/dom/elements/Canvas.html)

**<sup style={{color: 'orange'}}>(1)</sup>**To enable `autoInflateAmount` by the inflate amount callback, the value to return must be `Undefined.INTEGER`.

### Configuration

The bar chart accepts specific configuration not related to the styling or interactions which can be manage by the following options:

| Name | Description
| :- | :-
| barPercentage | The percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.
| barThickness | The width of each bar in pixels.
| categoryPercentage | The percent (0-1) of the available width each category should be within the sample width.
| grouped | Should the bars be grouped on index axis.<br/>When `true`, all the datasets at same index value will be placed next to each other centering on that index value.<br/>When `false`, each bar is placed on its actual index-axis value.
| maxBarThickness | The maximum bar thickness, to ensure that bars are not sized thicker than this.
| minBarLength | Set this to ensure that bars have a minimum length in pixels.

All above options have got the fallback to the associated [Datasets](../configuration/Datasets) elements which enables to define common values of the options for all bar datasets of the chart of globally, as following:

```java
// from chart instance
Datasets datasets = chart.getOptions().getDatasets();
// sets options for all bar datasets of the chart
datasets.setBarPercentage(0.7);
...
// from defaults
Datasets defaultDatasets  = Defaults.get().getGlobal().getDatasets();
// sets options for all bar datasets of all charts
defaultDatasets.setBarPercentage(0.7);
```

## Data structure

The data of a dataset for a bar chart can be passed in two formats.

#### Data as doubles

When the data is an array or list of doubles, the x axis is generally a category. The points are placed onto the axis using their position in the array. When a bar chart is created with a category axis, the [labels property of the data object](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-) must be specified.

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

You can also specify the dataset when using the time series charts. Each data point is specified using an object containing `y` and `x` (as time type) properties for time series.

```java
// creates a datapoint
DataPoint dp1 = new DataPoint();
dp1.setY(10);
dp1.setX(new Date());
// creates a datapoint
DataPoint dp2 = new DataPoint();
dp2.setY(30);
dp2.setX(new Date());
// sets data by an array of datapoints
dataset.setDataPoint(dp1, dp2);
```

#### Floating bars

You can also specify the dataset for a bar chart as list of floating bar data or by an array of arrays of doubles. This will force rendering of bars with the start and the end point of a bar respectively.

<img src={useBaseUrl('/img/floatingBar.png')} />

```java
// sets in the constructor
FloatingData fd1 = new FloatingData(10, 30);
// sets by method to update values
FloatingData fd2 = new FloatingData();
fd2.setValues(-10, 60)
// stores the data to dataset
dataset.setFloatingData(fd1, fd2);
```

## Options

The bar chart defines specific [options implementation](https://pepstock-org.github.io/Charba/5.4/org/pepstock/charba/client/configuration/BarOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
// creates the chart
BarChart chart = new BarChart();
// gets the chart options
BarOptions options = chart.getOptions();
// sets options
options.setResponsive(true);
options.setSkipNull(true);
```

These are the options specific to bar charts:

| Name | Type | Default | Description
| :- | :- | :- | :-
| skipNull | boolean | `true` | If `true`, `NaN` values will not be drawn.
