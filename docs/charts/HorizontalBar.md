---
id: ChartHorizontalBar
title: Horizontal bar chart
hide_title: true
sidebar_label: Horizontal bar
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Horizontal Bar chart

A horizontal bar chart is a variation on a bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side. 

<img src={useBaseUrl('/img/hbar.png')} />

## Dataset

The horizontal bar chart allows a number of properties to be specified for each [horizontal bar dataset](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/HorizontalBarDataset.html). These are used to set display properties for a specific dataset.

The following are the attributes that you can set:

| Name | Type | Scriptable | Description
| :- | :- | :- | :-
| base | double - double[] | [Yes](#scriptable-options) | Base value for the bar in data units along the value axis.
| backgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable-options) |The fill color/pattern of the bar.
| barPercentage | double | - | The percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.
| barThickness | int | - | The width of each bar in pixels.
| borderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable-options) | The color of the bar border. 
| borderSkipped | [BorderSkipped](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderSkipped.html) | [Yes](#scriptable-options) | Which edge to skip drawing the border for.
| borderRadius | int[] - [BarBorderRadius](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/BarBorderRadius.html)[] | [Yes](#scriptable-options) | The bar border radius (in pixels).
| borderWidth | int[] - [BarBorderWidth](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/BarBorderWidth.html)[] | [Yes](#scriptable-options) | The stroke width of the bar in pixels.
| categoryPercentage | double | - | The percent (0-1) of the available width each category should be within the sample width.
| clip | double - [Clip](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Clip.html) | - | How to clip relative to chart area. Positive value allows overflow, negative value clips that many pixels inside chart area. When set to 0 means clip at chart area. 
| hoverBackgroundColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable-options) | The fill color/pattern of the bars when hovered.
| hoverBorderColor | String[] - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html)[] - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)[] | [Yes](#scriptable-options) | The stroke color of the bars when hovered.
| hoverBorderWidth | int[] | [Yes](#scriptable-options) | The stroke width of the bars when hovered.
| hoverBorderRadius | int[] - [BarBorderRadius](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/BarBorderRadius.html)[] | [Yes](#scriptable-options) | The bar border radius (in pixels) when hovered.
| label | String | - | The label for the dataset which appears in the legend and tooltips. 
| maxBarThickness | int | - | The maximum bar thickness, to ensure that bars are not sized thicker than this.
| minBarLength | int | - | Set this to ensure that bars have a minimum length in pixels.
| order | int | - | The drawing order of dataset. Also affects order for stacking, tooltip, and legend.
| pointStyle | [PointStyle](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/PointStyle.html) - [Img](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/dom/elements/Img.html) | [Yes](#scriptable-options) | Point style for legend.
| xAxisID | String | - | The ID of the x axis to plot this dataset on.
| yAxisID | String | - | The ID of the y axis to plot this dataset on.


Every chart has got a method to create a typed dataset accordingly with the chart type. The dataset can be also created instantiating the constructor.

```java
HorizontalBarChart chart = new HorizontalBarChart();
// for GWT
// HorizontalBarChartWidget chart = new HorizontalBarChartWidget();
HorizontalBarDataset dataset = chart.newDataset();
...
...
HorizontalBarDataset datasetNew = new BarDataset();
...
chart.getData().setDatasets(dataset, datasetNew);
```


### General configuration

The general options for a horizontal bar dataset can control behaviors not related to styling or interactions and they are the following:

| Name | Defaults | Description |
| :- | :- | :-
| base | [] | Base value for the bar in data units along the value axis. If not set, defaults to the value axis base value.
| clip | UndefinedValues.DOUBLE | How to clip relative to chart area. Positive value allows overflow, negative value clips that many pixels inside chart area. When set to 0 means clip at chart area. 
| label | `null` | The label for the dataset which appears in the legend and tooltips. 
| order | 0 | The drawing order of dataset. Also affects order for stacking, tooltip, and legend. Default is 0.
| xAxisID | `null` | The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis. See [Scales](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_X_AXIS_ID) object.
| yAxisID | `null` | The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis. See [Scales](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/options/Scales.html#DEFAULT_Y_AXIS_ID) object.


### Styling

All below options have got the fallback to the associated [Bar](../configuration/Elements#bar) elements, retrievable by the following statements:

```java
// from chart instance
Bar bar = chart.getOptions().getElements().getBar();
// from defaults
Bar defaultBar  = Defaults.get().getGlobal().getElements().getBar();
```

The style of each bar can be controlled with the following properties:

| Name | Defaults | Description |
| :- | :- | :-
| backgroundColor | _element.getBar().getBackgroundColorAsString()_ |The fill color/pattern of the bar.
| borderColor | _element.getBar().getBorderColorAsString()_ | The color of the bar border. 
| borderSkipped | _element.getBar().getBorderSkipped()_ | Which edge to skip drawing the border for.
| borderRadius | _element.getBar().getBorderRadius()_ | The bar border radius (in pixels).
| borderWidth | _element.getBar().getBorderWidth()_ | The stroke width of the bar in pixels.
| pointStyle |  _element.getBar().getPointStyle()_ | Point style for legend.

### Interactions

All below options have got the fallback to the associated [Bar](../configuration/Elements#bar) elements, retrievable by the following statements:

```java
// from chart instance
Bar bar = chart.getOptions().getElements().getBar();
// from defaults
Bar defaultBar  = Defaults.get().getGlobal().getElements().getBar();
```

The interaction with each bar can be controlled with the following properties:

| Name | Defaults | Description |
| :- | :- | :-
| hoverBackgroundColor | _element.getBar().getBackgroundColorAsString()_ | The fill color/pattern of the bars when hovered.
| hoverBorderColor | _element.getBar().getBorderColorAsString()_ | The stroke color of the bars when hovered.
| hoverBorderRadius | _element.getBar().getBorderRadius()_ | The bar border radius (in pixels) when hovered.
| hoverBorderWidth | _element.getBar().getBorderWidth()_ | The stroke width of the bars when hovered.

### Dataset Configuration

All below options have got the fallback to the associated [Bar](../configuration/Elements#bar) (FIMXE) elements, retrievable by the following statements:

```java
// from chart instance
Bar bar = chart.getOptions().getDatasets();
// from defaults
Bar defaultBar  = Defaults.get().getGlobal().getDatasets();
```

The horizontal bar chart accepts the following configuration dataset options:

| Name | Defaults | Description |
| :- | :- | :-
| barPercentage | 0.9 | The percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.
| barThickness | 0 | The width of each bar in pixels.
| categoryPercentage | 0.8 | The percent (0-1) of the available width each category should be within the sample width.
| maxBarThickness | 0 | The maximum bar thickness, to ensure that bars are not sized thicker than this.
| minBarLength | 0 | Set this to ensure that bars have a minimum length in pixels.


## Data structure

The data of a dataset for an horizontal bar chart can be passed in two formats.

#### Data as doubles

When the data is an array or list of doubles, the x axis is generally a category. The points are placed onto the axis using their position in the array. When an horizontal bar chart is created with a category axis, the [labels property of the data object](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/Data.html#setLabels-java.lang.String...-) must be specified.

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

You can also specify the dataset when using the time series charts. Each data point is specified using an object containing `y` and `x` (as time type) properties for time series.

```java
...
DataPoint dp1 = new DataPoint();
dp1.setY(10);
dp1.setX(new Date());
   
DataPoint dp2 = new DataPoint();
dp2.setY(30);
dp2.setX(new Date());
   
dataset.setDataPoint(dp1, dp2);
...
```

#### Floating bars

You can also specify the dataset for a bar chart as list of floating bar data or by an array of arrays of doubles. This will force rendering of bars with the start and the end point of a bar respectively.

<img src={useBaseUrl('/img/floatingHorizontalBar.png')} />

```java
...
// set in the constructor
FloatingData fd1 = new FloatingData(10, 30);
// set by method to update values
FloatingData fd2 = new FloatingData();
fd2.setValues(-10, 60)

dataset.setFloatingData(fd1, fd2);
...
```

## Options

The horizontal bar chart defines specific [options implementation](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/configuration/BarOptions.html) to be configured. These options are merged with the global chart configuration options to form the options passed to the chart.

```java
HorizontalBarChart chart = new HorizontalBarChart();
// for GWT
// HorizontalBarChartWidget chart = new HorizontalBarChartWidget();
BarOptions options = chart.getOptions();
```

These are the options specific to horizontal bar charts:

| Name | Type | Default | Description
| :- | :- | :- | :-
| skipNull | boolean | `true` | If `true`, `NaN` values will not be drawn.

## Scriptable options

Scriptable options at dataset level accept a callback which is called for each of the underlying data values. See more details in [Configuring charts](../configuration/ScriptableOptions) section.

```java
HorizontalBarChart chart = new HorizontalBarChart();
// for GWT
// HorizontalBarChartWidget chart = new HorizontalBarChartWidget();
HorizontalBarDataset dataset = chart.newDataset();

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
| base | [BaseCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BaseCallback.html) | double 
| backgroundColor | [BackgroundColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| borderColor | [BorderColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| borderSkipped | [BorderSkippedCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderSkippedCallback.html) | [BorderSkipped](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/enums/BorderSkipped.html) 
| borderRadius | [BorderRadiusCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html) | int - [BarBorderRadius](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/BarBorderRadius.html)
| borderWidth | [BarBorderWidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BarBorderWidthCallback.html) | int - [BarBorderWidth](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/BarBorderWidth.html)
| hoverBackgroundColor | [BackgroundColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BackgroundColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Pattern](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Pattern.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderColor | [BorderColorCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderColorCallback.html) | String - [IsColor](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/IsColor.html) - [Gradient](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/colors/Gradient.html)
| hoverBorderWidth | [BarBorderWidthCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BarBorderWidthCallback.html) | int - [BarBorderWidth](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/BarBorderWidth.html)
| hoverBorderRadius | [BorderRadiusCallback](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/callbacks/BorderRadiusCallback.html) | int - [BarBorderRadius](http://www.pepstock.org/Charba/3.3/org/pepstock/charba/client/data/BarBorderRadius.html)